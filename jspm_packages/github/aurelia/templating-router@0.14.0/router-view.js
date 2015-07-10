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

    var _RouterView = RouterView;

    _RouterView.prototype.bind = function bind(executionContext) {
      this.container.viewModel = executionContext;
    };

    _RouterView.prototype.process = function process(viewPortInstruction, waitToSwap) {
      var _this = this;

      var component = viewPortInstruction.component,
          viewStrategy = component.view,
          childContainer = component.childContainer,
          viewModel = component.executionContext,
          viewModelResource = component.viewModelResource,
          metadata = viewModelResource.metadata;

      if (!viewStrategy && 'getViewStrategy' in viewModel) {
        viewStrategy = viewModel.getViewStrategy();
      }

      if (viewStrategy) {
        viewStrategy = _aureliaTemplating.ViewStrategy.normalize(viewStrategy);
        viewStrategy.makeRelativeTo(_aureliaMetadata.Origin.get(component.router.container.viewModel.constructor).moduleId);
      }

      return metadata.load(childContainer, viewModelResource.value, viewStrategy, true).then(function (viewFactory) {
        viewPortInstruction.behavior = metadata.create(childContainer, {
          executionContext: viewModel,
          viewFactory: viewFactory,
          suppressBind: true,
          host: _this.element
        });

        if (waitToSwap) {
          return;
        }

        _this.swap(viewPortInstruction);
      });
    };

    _RouterView.prototype.swap = function swap(viewPortInstruction) {
      viewPortInstruction.behavior.view.bind(viewPortInstruction.behavior.executionContext);
      this.viewSlot.swap(viewPortInstruction.behavior.view);

      if (this.view) {
        this.view.unbind();
      }

      this.view = viewPortInstruction.behavior.view;
    };

    RouterView = _aureliaDependencyInjection.inject(Element, _aureliaDependencyInjection.Container, _aureliaTemplating.ViewSlot, _aureliaRouter.Router)(RouterView) || RouterView;
    RouterView = _aureliaTemplating.noView(RouterView) || RouterView;
    RouterView = _aureliaTemplating.customElement('router-view')(RouterView) || RouterView;
    return RouterView;
  })();

  exports.RouterView = RouterView;
});