/* */ 
define(['exports', 'aurelia-metadata', 'aurelia-loader'], function (exports, _aureliaMetadata, _aureliaLoader) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

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

    if (window.requirejs && requirejs.s && requirejs.s.contexts && requirejs.s.contexts._ && requirejs.s.contexts._.defined) {
      var defined = requirejs.s.contexts._.defined;
      sys.forEachModule = function (callback) {
        for (var key in defined) {
          if (callback(key, defined[key])) return;
        }
      };
    } else {
      sys.forEachModule = function (callback) {};
    }
  } else {
    var modules = System._loader.modules;

    System.isFake = false;
    System.forEachModule = function (callback) {
      for (var key in modules) {
        if (callback(key, modules[key].module)) return;
      }
    };
  }

  function ensureOriginOnExports(executed, name) {
    var target = executed,
        key,
        exportedValue;

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
    function DefaultLoader() {
      _classCallCheck(this, DefaultLoader);

      _Loader.call(this);

      this.moduleRegistry = {};
      var that = this;

      if (polyfilled) {
        define('view', [], {
          'load': function load(name, req, onload, config) {
            var entry = that.getOrCreateTemplateRegistryEntry(name),
                address;

            if (entry.templateIsLoaded) {
              onload(entry);
              return;
            }

            that.findBundledTemplate(name, entry).then(function (found) {
              if (found) {
                onload(entry);
              } else {
                address = req.toUrl(name);

                that.importTemplate(address).then(function (template) {
                  entry.setTemplate(template);
                  onload(entry);
                });
              }
            });
          }
        });
      } else {
        System.set('view', System.newModule({
          'fetch': function fetch(load, _fetch) {
            var id = load.name.substring(0, load.name.indexOf('!'));
            var entry = load.metadata.templateRegistryEntry = that.getOrCreateTemplateRegistryEntry(id);

            if (entry.templateIsLoaded) {
              return '';
            }

            return that.findBundledTemplate(load.name, entry).then(function (found) {
              if (found) {
                return '';
              }

              return that.importTemplate(load.address).then(function (template) {
                entry.setTemplate(template);
                return '';
              });
            });
          },
          'instantiate': function instantiate(load) {
            return load.metadata.templateRegistryEntry;
          }
        }));
      }
    }

    _inherits(DefaultLoader, _Loader);

    DefaultLoader.prototype.loadModule = function loadModule(id) {
      var _this = this;

      return System.normalize(id).then(function (newId) {
        var existing = _this.moduleRegistry[newId];
        if (existing) {
          return existing;
        }

        return System['import'](newId).then(function (m) {
          _this.moduleRegistry[newId] = m;
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
      return polyfilled ? System['import']('view!' + url) : System['import'](url + '!view');
    };

    DefaultLoader.prototype.loadText = function loadText(url) {
      return polyfilled ? System['import']('text!' + url) : System['import'](url + '!text');
    };

    return DefaultLoader;
  })(_aureliaLoader.Loader);

  exports.DefaultLoader = DefaultLoader;

  window.AureliaLoader = DefaultLoader;
});