/* */ 
define(['exports', 'core-js', 'aurelia-path', 'aurelia-metadata'], function (exports, _coreJs, _aureliaPath, _aureliaMetadata) {
  'use strict';

  exports.__esModule = true;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _core = _interopRequireDefault(_coreJs);

  var TemplateDependency = function TemplateDependency(src, name) {
    _classCallCheck(this, TemplateDependency);

    this.src = src;
    this.name = name;
  };

  exports.TemplateDependency = TemplateDependency;

  var TemplateRegistryEntry = (function () {
    function TemplateRegistryEntry(id) {
      _classCallCheck(this, TemplateRegistryEntry);

      this.id = id;
      this.template = null;
      this.dependencies = null;
      this.resources = null;
      this.factory = null;
    }

    TemplateRegistryEntry.prototype.setTemplate = function setTemplate(template) {
      var id = this.id,
          useResources,
          i,
          ii,
          current,
          src;

      this.template = template;
      useResources = template.content.querySelectorAll('require');
      this.dependencies = new Array(useResources.length);

      if (useResources.length === 0) {
        return;
      }

      for (i = 0, ii = useResources.length; i < ii; ++i) {
        current = useResources[i];
        src = current.getAttribute('from');

        if (!src) {
          throw new Error('<require> element in ' + this.id + ' has no "from" attribute.');
        }

        this.dependencies[i] = new TemplateDependency(_aureliaPath.relativeToFile(src, id), current.getAttribute('as'));

        if (current.parentNode) {
          current.parentNode.removeChild(current);
        }
      }
    };

    TemplateRegistryEntry.prototype.addDependency = function addDependency(src, name) {
      if (typeof src === 'string') {
        this.dependencies.push(new TemplateDependency(_aureliaPath.relativeToFile(src, this.id), name));
      } else if (typeof src === 'function') {
        var origin = _aureliaMetadata.Origin.get(src);
        this.dependencies.push(new TemplateDependency(origin.moduleId, name));
      }
    };

    TemplateRegistryEntry.prototype.setResources = function setResources(resources) {
      this.resources = resources;
    };

    TemplateRegistryEntry.prototype.setFactory = function setFactory(factory) {
      this.factory = factory;
    };

    _createClass(TemplateRegistryEntry, [{
      key: 'templateIsLoaded',
      get: function get() {
        return this.template !== null;
      }
    }, {
      key: 'isReady',
      get: function get() {
        return this.factory !== null;
      }
    }]);

    return TemplateRegistryEntry;
  })();

  exports.TemplateRegistryEntry = TemplateRegistryEntry;

  var hasTemplateElement = ('content' in document.createElement('template'));

  function importElements(frag, link, callback) {
    if (frag) {
      document.head.appendChild(frag);
    }

    if (window.Polymer && Polymer.whenReady) {
      Polymer.whenReady(callback);
    } else {
      link.addEventListener('load', callback);
    }
  }

  var Loader = (function () {
    function Loader() {
      _classCallCheck(this, Loader);

      this.templateRegistry = {};
      this.needsBundleCheck = true;
    }

    Loader.prototype.loadModule = function loadModule(id) {
      throw new Error('Loaders must implement loadModule(id).');
    };

    Loader.prototype.loadAllModules = function loadAllModules(ids) {
      throw new Error('Loader must implement loadAllModules(ids).');
    };

    Loader.prototype.loadTemplate = function loadTemplate(url) {
      throw new Error('Loader must implement loadTemplate(url).');
    };

    Loader.prototype.loadText = function loadText(url) {
      throw new Error('Loader must implement loadText(url).');
    };

    Loader.prototype.getOrCreateTemplateRegistryEntry = function getOrCreateTemplateRegistryEntry(id) {
      var entry = this.templateRegistry[id];

      if (entry === undefined) {
        this.templateRegistry[id] = entry = new TemplateRegistryEntry(id);
      }

      return entry;
    };

    Loader.prototype.importDocument = function importDocument(url) {
      return new Promise(function (resolve, reject) {
        var frag = document.createDocumentFragment();
        var link = document.createElement('link');

        link.rel = 'import';
        link.href = url;
        frag.appendChild(link);

        importElements(frag, link, function () {
          return resolve(link['import']);
        });
      });
    };

    Loader.prototype.importBundle = function importBundle(link) {
      return new Promise(function (resolve, reject) {
        if (link['import']) {
          if (!hasTemplateElement) {
            HTMLTemplateElement.bootstrap(link['import']);
          }

          resolve(link['import']);
        } else {
          importElements(null, link, function () {
            if (!hasTemplateElement) {
              HTMLTemplateElement.bootstrap(link['import']);
            }

            resolve(link['import']);
          });
        }
      });
    };

    Loader.prototype.importTemplate = function importTemplate(url) {
      var _this = this;

      return this.importDocument(url).then(function (doc) {
        return _this.findTemplate(doc, url);
      });
    };

    Loader.prototype.findTemplate = function findTemplate(doc, url) {
      if (!hasTemplateElement) {
        HTMLTemplateElement.bootstrap(doc);
      }

      var template = doc.getElementsByTagName('template')[0];

      if (!template) {
        throw new Error('There was no template element found in \'' + url + '\'.');
      }

      return template;
    };

    Loader.prototype._tryGetTemplateFromBundle = function _tryGetTemplateFromBundle(name, entry) {
      var found = this.bundle.getElementById(name);

      if (found) {
        entry.setTemplate(found);
        return Promise.resolve(true);
      }

      return Promise.resolve(false);
    };

    Loader.prototype.findBundledTemplate = function findBundledTemplate(name, entry) {
      var _this2 = this;

      if (this.bundle) {
        return this._tryGetTemplateFromBundle(name, entry);
      } else if (this.onBundleReady) {
        return this.onBundleReady.then(function () {
          return _this2._tryGetTemplateFromBundle(name, entry);
        });
      } else if (this.needsBundleCheck) {
        var bundleLink = document.querySelector('link[aurelia-view-bundle]');
        this.needsBundleCheck = false;

        if (bundleLink) {
          this.onBundleReady = this.importBundle(bundleLink).then(function (doc) {
            _this2.bundle = doc;
            _this2.onBundleReady = null;
          });

          return this.onBundleReady.then(function () {
            return _this2._tryGetTemplateFromBundle(name, entry);
          });
        }
      }

      return Promise.resolve(false);
    };

    return Loader;
  })();

  exports.Loader = Loader;
});