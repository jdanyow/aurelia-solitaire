/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-templating'], function (exports, _aureliaDependencyInjection, _aureliaTemplating) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var With = (function () {
    function With(viewFactory, viewSlot) {
      _classCallCheck(this, _With);

      this.viewFactory = viewFactory;
      this.viewSlot = viewSlot;
    }

    var _With = With;

    _With.prototype.valueChanged = function valueChanged(newValue) {
      if (!this.view) {
        this.view = this.viewFactory.create(newValue);
        this.viewSlot.add(this.view);
      } else {
        this.view.bind(newValue);
      }
    };

    With = _aureliaDependencyInjection.inject(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.ViewSlot)(With) || With;
    With = _aureliaTemplating.templateController(With) || With;
    With = _aureliaTemplating.customAttribute('with')(With) || With;
    return With;
  })();

  exports.With = With;
});