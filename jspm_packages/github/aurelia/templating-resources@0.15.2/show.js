define(['exports', 'aurelia-dependency-injection', 'aurelia-templating'], function (exports, _aureliaDependencyInjection, _aureliaTemplating) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  if (_aureliaTemplating.hasShadowDOM) {
    _aureliaTemplating.injectStyles('body /deep/ .aurelia-hide { display:none !important; }');
  } else {
    _aureliaTemplating.injectStyles('.aurelia-hide { display:none !important; }');
  }

  var Show = (function () {
    function Show(element) {
      _classCallCheck(this, _Show);

      this.element = element;
    }

    Show.prototype.valueChanged = function valueChanged(newValue) {
      if (newValue) {
        this.element.classList.remove('aurelia-hide');
      } else {
        this.element.classList.add('aurelia-hide');
      }
    };

    Show.prototype.bind = function bind(bindingContext) {
      this.valueChanged(this.value);
    };

    var _Show = Show;
    Show = _aureliaDependencyInjection.inject(Element)(Show) || Show;
    Show = _aureliaTemplating.customAttribute('show')(Show) || Show;
    return Show;
  })();

  exports.Show = Show;
});