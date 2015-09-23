/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', 'aurelia-router', 'aurelia-metadata'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _aureliaRouter, _aureliaMetadata) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var RouterView = (function () {
    function RouterView(element, container, viewSlot, router) {
      _classCallCheck(this, _RouterView);

      this.element = element;
      this.container = container;
      this.viewSlot = viewSlot;
      this.router = router;
      this.router.registerViewPort(this, this.element.getAttribute('name'));
    }

    RouterView.prototype.bind = function bind(bindingContext) {
      this.container.viewModel = bindingContext;
    };

    RouterView.prototype.process = function process(viewPortInstruction, waitToSwap) {
      var _this = this;

      var component = viewPortInstruction.component;
      var viewStrategy = component.view;
      var childContainer = component.childContainer;
      var viewModel = component.bindingContext;
      var viewModelResource = component.viewModelResource;
      var metadata = viewModelResource.metadata;

      if (!viewStrategy && 'getViewStrategy' in viewModel) {
        viewStrategy = viewModel.getViewStrategy();
      }

      if (viewStrategy) {
        viewStrategy = _aureliaTemplating.ViewStrategy.normalize(viewStrategy);
        viewStrategy.makeRelativeTo(_aureliaMetadata.Origin.get(component.router.container.viewModel.constructor).moduleId);
      }

      return metadata.load(childContainer, viewModelResource.value, viewStrategy, true).then(function (viewFactory) {
        viewPortInstruction.behavior = metadata.create(childContainer, _aureliaTemplating.BehaviorInstruction.dynamic(_this.element, viewModel, viewFactory));

        if (waitToSwap) {
          return;
        }

        _this.swap(viewPortInstruction);
      });
    };

    RouterView.prototype.swap = function swap(viewPortInstruction) {
      var _this2 = this;

      var removeResponse = this.viewSlot.removeAll(true);

      if (removeResponse instanceof Promise) {
        return removeResponse.then(function () {
          viewPortInstruction.behavior.view.bind(viewPortInstruction.behavior.bindingContext);
          _this2.viewSlot.add(viewPortInstruction.behavior.view);
          _this2.view = viewPortInstruction.behavior.view;
        });
      }

      viewPortInstruction.behavior.view.bind(viewPortInstruction.behavior.bindingContext);
      this.viewSlot.add(viewPortInstruction.behavior.view);
      this.view = viewPortInstruction.behavior.view;
    };

    var _RouterView = RouterView;
    RouterView = _aureliaDependencyInjection.inject(Element, _aureliaDependencyInjection.Container, _aureliaTemplating.ViewSlot, _aureliaRouter.Router)(RouterView) || RouterView;
    RouterView = _aureliaTemplating.noView(RouterView) || RouterView;
    RouterView = _aureliaTemplating.customElement('router-view')(RouterView) || RouterView;
    return RouterView;
  })();

  exports.RouterView = RouterView;
});