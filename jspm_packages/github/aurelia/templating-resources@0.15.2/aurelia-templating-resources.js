define(['exports', './compose', './if', './with', './repeat', './show', './global-behavior', './sanitize-html', './replaceable', './focus', './compile-spy', './view-spy', 'aurelia-templating', './dynamic-element', './css-resource'], function (exports, _compose, _if, _with, _repeat, _show, _globalBehavior, _sanitizeHtml, _replaceable, _focus, _compileSpy, _viewSpy, _aureliaTemplating, _dynamicElement, _cssResource) {
  'use strict';

  exports.__esModule = true;

  function configure(config) {
    config.globalResources('./compose', './if', './with', './repeat', './show', './replaceable', './global-behavior', './sanitize-html', './focus', './compile-spy', './view-spy');

    var viewEngine = config.container.get(_aureliaTemplating.ViewEngine);
    var loader = config.aurelia.loader;

    viewEngine.addResourcePlugin('.html', {
      'fetch': function fetch(address) {
        return loader.loadTemplate(address).then(function (registryEntry) {
          var _ref;

          var bindable = registryEntry.template.getAttribute('bindable');
          var elementName = address.replace('.html', '');
          var index = elementName.lastIndexOf('/');

          if (index !== 0) {
            elementName = elementName.substring(index + 1);
          }

          if (bindable) {
            bindable = bindable.split(',').map(function (x) {
              return x.trim();
            });
            registryEntry.template.removeAttribute('bindable');
          } else {
            bindable = [];
          }

          return (_ref = {}, _ref[elementName] = _dynamicElement._createDynamicElement(elementName, address, bindable), _ref);
        });
      }
    });

    viewEngine.addResourcePlugin('.css', {
      'fetch': function fetch(address) {
        var _ref2;

        return (_ref2 = {}, _ref2[address] = _cssResource._createCSSResource(address), _ref2);
      }
    });
  }

  exports.Compose = _compose.Compose;
  exports.If = _if.If;
  exports.With = _with.With;
  exports.Repeat = _repeat.Repeat;
  exports.Show = _show.Show;
  exports.SanitizeHtmlValueConverter = _sanitizeHtml.SanitizeHtmlValueConverter;
  exports.GlobalBehavior = _globalBehavior.GlobalBehavior;
  exports.Replaceable = _replaceable.Replaceable;
  exports.Focus = _focus.Focus;
  exports.CompileSpy = _compileSpy.CompileSpy;
  exports.ViewSpy = _viewSpy.ViewSpy;
  exports.configure = configure;
});