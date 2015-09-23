/* */ 
define(['exports', 'core-js', 'aurelia-path', 'aurelia-metadata'], function (exports, _coreJs, _aureliaPath, _aureliaMetadata) {
  'use strict';

  exports.__esModule = true;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var TemplateDependency = function TemplateDependency(src, name) {
    _classCallCheck(this, TemplateDependency);

    this.src = src;
    this.name = name;
  };

  exports.TemplateDependency = TemplateDependency;

  var TemplateRegistryEntry = (function () {
    function TemplateRegistryEntry(address) {
      _classCallCheck(this, TemplateRegistryEntry);

      this.address = address;
      this.template = null;
      this.dependencies = null;
      this.resources = null;
      this.factory = null;
    }

    TemplateRegistryEntry.prototype.setTemplate = function setTemplate(template) {
      var address = this.address;
      var useResources = undefined;
      var current = undefined;
      var src = undefined;

      this.template = template;
      useResources = template.content.querySelectorAll('require');
      this.dependencies = new Array(useResources.length);

      if (useResources.length === 0) {
        return;
      }

      for (var i = 0, ii = useResources.length; i < ii; ++i) {
        current = useResources[i];
        src = current.getAttribute('from');

        if (!src) {
          throw new Error('<require> element in ' + address + ' has no "from" attribute.');
        }

        this.dependencies[i] = new TemplateDependency(_aureliaPath.relativeToFile(src, address), current.getAttribute('as'));

        if (current.parentNode) {
          current.parentNode.removeChild(current);
        }
      }
    };

    TemplateRegistryEntry.prototype.addDependency = function addDependency(src, name) {
      if (typeof src === 'string') {
        this.dependencies.push(new TemplateDependency(_aureliaPath.relativeToFile(src, this.address), name));
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

  var Loader = (function () {
    function Loader() {
      _classCallCheck(this, Loader);

      this.templateRegistry = {};
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

    Loader.prototype.applyPluginToUrl = function applyPluginToUrl(url, pluginName) {
      throw new Error('Loader must implement applyPluginToUrl(url, pluginName).');
    };

    Loader.prototype.addPlugin = function addPlugin(pluginName, implementation) {
      throw new Error('Loader must implement addPlugin(pluginName, implementation).');
    };

    Loader.prototype.getOrCreateTemplateRegistryEntry = function getOrCreateTemplateRegistryEntry(id) {
      var entry = this.templateRegistry[id];

      if (entry === undefined) {
        this.templateRegistry[id] = entry = new TemplateRegistryEntry(id);
      }

      return entry;
    };

    return Loader;
  })();

  exports.Loader = Loader;
});