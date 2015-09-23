/* */ 
define(['exports', 'aurelia-loader', 'aurelia-metadata'], function (exports, _aureliaLoader, _aureliaMetadata) {
  'use strict';

  exports.__esModule = true;

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var TextTemplateLoader = (function () {
    function TextTemplateLoader() {
      _classCallCheck(this, TextTemplateLoader);

      this.hasTemplateElement = 'content' in document.createElement('template');
    }

    TextTemplateLoader.prototype.loadTemplate = function loadTemplate(loader, entry) {
      var _this = this;

      return loader.loadText(entry.address).then(function (text) {
        entry.setTemplate(_this._createTemplateFromMarkup(text));
      });
    };

    TextTemplateLoader.prototype._createTemplateFromMarkup = function _createTemplateFromMarkup(markup) {
      var parser = document.createElement('div');
      parser.innerHTML = markup;

      var template = parser.firstElementChild;

      if (this.hasTemplateElement) {
        return template;
      }

      template.content = document.createDocumentFragment();

      while (template.firstChild) {
        template.content.appendChild(template.firstChild);
      }

      HTMLTemplateElement.bootstrap(template);
      return template;
    };

    return TextTemplateLoader;
  })();

  exports.TextTemplateLoader = TextTemplateLoader;

  var polyfilled = false;

  if (!window.System || !window.System['import']) {
    var sys = window.System = window.System || {};

    sys.polyfilled = polyfilled = true;
    sys.isFake = false;
    sys.map = {};

    sys['import'] = function (moduleId) {
      return new Promise(function (resolve, reject) {
        require([moduleId], resolve, reject);
      });
    };

    sys.normalize = function (url) {
      return Promise.resolve(url);
    };

    sys.normalizeSync = function (url) {
      return url;
    };

    if (window.requirejs && requirejs.s && requirejs.s.contexts && requirejs.s.contexts._ && requirejs.s.contexts._.defined) {
      (function () {
        var defined = requirejs.s.contexts._.defined;
        sys.forEachModule = function (callback) {
          for (var key in defined) {
            if (callback(key, defined[key])) return;
          }
        };
      })();
    } else {
      sys.forEachModule = function (callback) {};
    }
  } else {
    (function () {
      var modules = System._loader.modules;

      System.isFake = false;

      System.forEachModule = function (callback) {
        for (var key in modules) {
          if (callback(key, modules[key].module)) return;
        }
      };

      System.set('text', System.newModule({
        'translate': function translate(load) {
          return 'module.exports = "' + load.source.replace(/(["\\])/g, '\\$1').replace(/[\f]/g, '\\f').replace(/[\b]/g, '\\b').replace(/[\n]/g, '\\n').replace(/[\t]/g, '\\t').replace(/[\r]/g, '\\r').replace(/[\u2028]/g, '\\u2028').replace(/[\u2029]/g, '\\u2029') + '";';
        }
      }));
    })();
  }

  function ensureOriginOnExports(executed, name) {
    var target = executed;
    var key = undefined;
    var exportedValue = undefined;

    if (target.__useDefault) {
      target = target['default'];
    }

    _aureliaMetadata.Origin.set(target, new _aureliaMetadata.Origin(name, 'default'));

    for (key in target) {
      exportedValue = target[key];

      if (typeof exportedValue === 'function') {
        _aureliaMetadata.Origin.set(exportedValue, new _aureliaMetadata.Origin(name, key));
      }
    }

    return executed;
  }

  var DefaultLoader = (function (_Loader) {
    _inherits(DefaultLoader, _Loader);

    function DefaultLoader() {
      _classCallCheck(this, DefaultLoader);

      _Loader.call(this);

      this.textPluginName = 'text';
      this.moduleRegistry = {};
      this.useTemplateLoader(new TextTemplateLoader());

      var that = this;

      this.addPlugin('template-registry-entry', {
        'fetch': function fetch(address) {
          var entry = that.getOrCreateTemplateRegistryEntry(address);
          return entry.templateIsLoaded ? entry : that.templateLoader.loadTemplate(that, entry).then(function (x) {
            return entry;
          });
        }
      });
    }

    DefaultLoader.prototype.useTemplateLoader = function useTemplateLoader(templateLoader) {
      this.templateLoader = templateLoader;
    };

    DefaultLoader.prototype.loadModule = function loadModule(id) {
      var _this2 = this;

      return System.normalize(id).then(function (newId) {
        var existing = _this2.moduleRegistry[newId];
        if (existing) {
          return existing;
        }

        return System['import'](newId).then(function (m) {
          _this2.moduleRegistry[newId] = m;
          return ensureOriginOnExports(m, newId);
        });
      });
    };

    DefaultLoader.prototype.loadAllModules = function loadAllModules(ids) {
      var loads = [];

      for (var i = 0, ii = ids.length; i < ii; ++i) {
        loads.push(this.loadModule(ids[i]));
      }

      return Promise.all(loads);
    };

    DefaultLoader.prototype.loadTemplate = function loadTemplate(url) {
      return System['import'](this.applyPluginToUrl(url, 'template-registry-entry'));
    };

    DefaultLoader.prototype.loadText = function loadText(url) {
      return System['import'](this.applyPluginToUrl(url, this.textPluginName));
    };

    DefaultLoader.prototype.applyPluginToUrl = function applyPluginToUrl(url, pluginName) {
      return polyfilled ? pluginName + '!' + url : url + '!' + pluginName;
    };

    DefaultLoader.prototype.addPlugin = function addPlugin(pluginName, implementation) {
      if (polyfilled) {
        define(pluginName, [], {
          'load': function load(name, req, onload) {
            var address = req.toUrl(name);
            var result = implementation.fetch(address);
            Promise.resolve(result).then(onload);
          }
        });
      } else {
        System.set(pluginName, System.newModule({
          'fetch': function fetch(load, _fetch) {
            var result = implementation.fetch(load.address);
            return Promise.resolve(result).then(function (x) {
              load.metadata.result = x;
              return '';
            });
          },
          'instantiate': function instantiate(load) {
            return load.metadata.result;
          }
        }));
      }
    };

    return DefaultLoader;
  })(_aureliaLoader.Loader);

  exports.DefaultLoader = DefaultLoader;

  window.AureliaLoader = DefaultLoader;
});