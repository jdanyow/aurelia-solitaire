/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-templating'], function (exports, _aureliaDependencyInjection, _aureliaTemplating) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Replaceable = (function () {
    function Replaceable(viewFactory, viewSlot) {
      _classCallCheck(this, _Replaceable);

      viewSlot.add(viewFactory.create());
    }

    var _Replaceable = Replaceable;
    Replaceable = _aureliaDependencyInjection.inject(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.ViewSlot)(Replaceable) || Replaceable;
    Replaceable = _aureliaTemplating.templateController(Replaceable) || Replaceable;
    Replaceable = _aureliaTemplating.customAttribute('replaceable')(Replaceable) || Replaceable;
    return Replaceable;
  })();

  exports.Replaceable = Replaceable;
});