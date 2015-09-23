define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-logging'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaLogging) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var CompileSpy = (function () {
    function CompileSpy(element, instruction) {
      _classCallCheck(this, _CompileSpy);

      _aureliaLogging.getLogger('compile-spy').info(element, instruction);
    }

    var _CompileSpy = CompileSpy;
    CompileSpy = _aureliaDependencyInjection.inject(Element, _aureliaTemplating.TargetInstruction)(CompileSpy) || CompileSpy;
    CompileSpy = _aureliaTemplating.customAttribute('compile-spy')(CompileSpy) || CompileSpy;
    return CompileSpy;
  })();

  exports.CompileSpy = CompileSpy;
});