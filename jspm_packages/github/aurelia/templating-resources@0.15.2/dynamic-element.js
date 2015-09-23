define(['exports', 'aurelia-templating'], function (exports, _aureliaTemplating) {
  'use strict';

  exports.__esModule = true;
  exports._createDynamicElement = _createDynamicElement;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _createDynamicElement(name, viewUrl, bindableNames) {
    var DynamicElement = (function () {
      function DynamicElement() {
        _classCallCheck(this, _DynamicElement);
      }

      DynamicElement.prototype.bind = function bind(bindingContext) {
        this.$parent = bindingContext;
      };

      var _DynamicElement = DynamicElement;
      DynamicElement = _aureliaTemplating.useView(viewUrl)(DynamicElement) || DynamicElement;
      DynamicElement = _aureliaTemplating.customElement(name)(DynamicElement) || DynamicElement;
      return DynamicElement;
    })();

    for (var i = 0, ii = bindableNames.length; i < ii; ++i) {
      _aureliaTemplating.bindable(bindableNames[i])(DynamicElement);
    }
    return DynamicElement;
  }
});