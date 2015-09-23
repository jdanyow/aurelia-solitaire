define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-task-queue'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaTaskQueue) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var If = (function () {
    function If(viewFactory, viewSlot, taskQueue) {
      _classCallCheck(this, _If);

      this.viewFactory = viewFactory;
      this.viewSlot = viewSlot;
      this.showing = false;
      this.taskQueue = taskQueue;
      this.view = null;
      this.$parent = null;
    }

    If.prototype.bind = function bind(bindingContext) {
      this.$parent = bindingContext;
      this.valueChanged(this.value);
    };

    If.prototype.valueChanged = function valueChanged(newValue) {
      var _this = this;

      if (!newValue) {
        if (this.view !== null && this.showing) {
          this.taskQueue.queueMicroTask(function () {
            var viewOrPromise = _this.viewSlot.remove(_this.view);
            if (viewOrPromise instanceof Promise) {
              viewOrPromise.then(function () {
                return _this.view.unbind();
              });
            } else {
              _this.view.unbind();
            }
          });
        }

        this.showing = false;
        return;
      }

      if (this.view === null) {
        this.view = this.viewFactory.create(this.$parent);
      }

      if (!this.showing) {
        this.showing = true;

        if (!this.view.isBound) {
          this.view.bind();
        }

        this.viewSlot.add(this.view);
      }
    };

    If.prototype.unbind = function unbind() {
      if (this.view !== null && this.viewFactory.isCaching) {
        if (this.showing) {
          this.showing = false;
          this.viewSlot.remove(this.view, true, true);
        } else {
          this.view.returnToCache();
        }

        this.view = null;
      }
    };

    var _If = If;
    If = _aureliaDependencyInjection.inject(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.ViewSlot, _aureliaTaskQueue.TaskQueue)(If) || If;
    If = _aureliaTemplating.templateController(If) || If;
    If = _aureliaTemplating.customAttribute('if')(If) || If;
    return If;
  })();

  exports.If = If;
});