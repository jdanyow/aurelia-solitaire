/* */ 
define(['exports', 'core-js', 'aurelia-framework'], function (exports, _coreJs, _aureliaFramework) {
  'use strict';

  exports.__esModule = true;
  exports.bootstrap = bootstrap;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _core = _interopRequireDefault(_coreJs);

  var logger = _aureliaFramework.LogManager.getLogger('bootstrapper');
  var readyQueue = [];
  var isReady = false;

  function onReady(callback) {
    return new Promise(function (resolve, reject) {
      if (!isReady) {
        readyQueue.push(function () {
          try {
            resolve(callback());
          } catch (e) {
            reject(e);
          }
        });
      } else {
        resolve(callback());
      }
    });
  }

  function bootstrap(configure) {
    return onReady(function () {
      var loader = new window.AureliaLoader();
      var aurelia = new _aureliaFramework.Aurelia(loader);

      return configure(aurelia);
    });
  }

  function ready(global) {
    return new Promise(function (resolve, reject) {
      if (global.document.readyState === 'complete') {
        resolve(global.document);
      } else {
        global.document.addEventListener('DOMContentLoaded', completed, false);
        global.addEventListener('load', completed, false);
      }

      function completed() {
        global.document.removeEventListener('DOMContentLoaded', completed, false);
        global.removeEventListener('load', completed, false);
        resolve(global.document);
      }
    });
  }

  function ensureLoader() {
    if (!window.AureliaLoader) {
      if (window.System && !window.System.isFake) {
        return System.normalize('aurelia-bootstrapper').then(function (bootstrapperName) {
          return System.normalize('aurelia-loader-default', bootstrapperName).then(function (loaderName) {
            return System['import'](loaderName);
          });
        });
      } else if (window.require) {
        return new Promise(function (resolve, reject) {
          require(['aurelia-loader-default'], resolve, reject);
        });
      }

      throw new Error('No window.AureliaLoader is defined and there is neither a System API (ES6) or a Require API (AMD) available to load your app.');
    }

    return Promise.resolve();
  }

  function preparePlatform() {
    return System.normalize('aurelia-bootstrapper').then(function (bootstrapperName) {
      return System.normalize('aurelia-framework', bootstrapperName).then(function (frameworkName) {
        System.map['aurelia-framework'] = frameworkName;

        return System.normalize('aurelia-loader', frameworkName).then(function (loaderName) {
          var toLoad = [];

          toLoad.push(System.normalize('aurelia-dependency-injection', frameworkName).then(function (name) {
            System.map['aurelia-dependency-injection'] = name;
          }));

          toLoad.push(System.normalize('aurelia-router', bootstrapperName).then(function (name) {
            System.map['aurelia-router'] = name;
          }));

          toLoad.push(System.normalize('aurelia-logging-console', bootstrapperName).then(function (name) {
            System.map['aurelia-logging-console'] = name;
          }));

          if (!('content' in document.createElement('template'))) {
            logger.debug('loading the HTMLTemplateElement polyfill');
            toLoad.push(System.normalize('aurelia-html-template-element', loaderName).then(function (name) {
              return System['import'](name);
            }));
          }

          return Promise.all(toLoad);
        });
      });
    });
  }

  function runningLocally() {
    return window.location.protocol !== 'http' && window.location.protocol !== 'https';
  }

  function handleApp(appHost) {
    var configModuleId = appHost.getAttribute('aurelia-app');
    return configModuleId ? aureliaLoader.config(appHost, configModuleId) : aureliaLoader.defaultConfig(appHost);
  }

  var aureliaLoader = {
    config: function config(appHost, configModuleId) {
      var loader = new window.AureliaLoader();

      return loader.loadModule(configModuleId).then(function (m) {
        var aurelia = new _aureliaFramework.Aurelia(loader);
        aurelia.host = appHost;
        return m.configure(aurelia);
      });
    },
    defaultConfig: function defaultConfig(appHost) {
      var aurelia = new _aureliaFramework.Aurelia();
      aurelia.host = appHost;

      if (runningLocally()) {
        aurelia.use.developmentLogging();
      }

      aurelia.use.standardConfiguration();

      return aurelia.start().then(function (a) {
        return a.setRoot();
      });
    }
  };

  function run() {
    return ready(window).then(function (doc) {
      var appHost = doc.querySelectorAll('[aurelia-app]');

      return ensureLoader().then(function () {
        return preparePlatform().then(function () {
          for (var i = 0, ii = appHost.length; i < ii; ++i) {
            handleApp(appHost[i]);
          }

          isReady = true;
          for (var i = 0, ii = readyQueue.length; i < ii; ++i) {
            readyQueue[i]();
          }
          readyQueue = [];
        });
      });
    });
  }

  run();
});