/* */ 
define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-router'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaRouter) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var RouteHref = (function () {
    function RouteHref(router, element) {
      _classCallCheck(this, _RouteHref);

      this.router = router;
      this.element = element;
    }

    var _RouteHref = RouteHref;

    _RouteHref.prototype.bind = function bind() {
      this.processChange();
    };

    _RouteHref.prototype.attributeChanged = function attributeChanged(value, previous) {
      if (previous) {
        this.element.removeAttribute(previous);
      }

      this.processChange();
    };

    _RouteHref.prototype.processChange = function processChange() {
      var href = this.router.generate(this.route, this.params);
      this.element.setAttribute(this.attribute, href);
    };

    RouteHref = _aureliaDependencyInjection.inject(_aureliaRouter.Router, Element)(RouteHref) || RouteHref;
    RouteHref = _aureliaTemplating.bindable({ name: 'attribute', defaultValue: 'href' })(RouteHref) || RouteHref;
    RouteHref = _aureliaTemplating.bindable({ name: 'params', changeHandler: 'processChange' })(RouteHref) || RouteHref;
    RouteHref = _aureliaTemplating.bindable({ name: 'route', changeHandler: 'processChange' })(RouteHref) || RouteHref;
    RouteHref = _aureliaTemplating.customAttribute('route-href')(RouteHref) || RouteHref;
    return RouteHref;
  })();

  exports.RouteHref = RouteHref;
});