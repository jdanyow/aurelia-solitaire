/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-binding', 'aurelia-templating'], function (exports, _aureliaDependencyInjection, _aureliaBinding, _aureliaTemplating) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  var Repeat = (function () {
    var _instanceInitializers = {};

    function Repeat(viewFactory, viewSlot, observerLocator) {
      _classCallCheck(this, _Repeat);

      _defineDecoratedPropertyDescriptor(this, 'items', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'local', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'key', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      this.viewFactory = viewFactory;
      this.viewSlot = viewSlot;
      this.observerLocator = observerLocator;
      this.local = 'item';
      this.key = 'key';
      this.value = 'value';
    }

    var _Repeat = Repeat;

    _Repeat.prototype.bind = function bind(executionContext) {
      var _this = this;

      var items = this.items,
          observer;

      this.executionContext = executionContext;

      if (!items) {
        if (this.oldItems) {
          this.removeAll();
        }

        return;
      }

      if (this.oldItems === items) {
        if (items instanceof Map) {
          var records = _aureliaBinding.getChangeRecords(items);
          observer = this.observerLocator.getMapObserver(items);

          this.handleMapChangeRecords(items, records);

          this.disposeSubscription = observer.subscribe(function (records) {
            _this.handleMapChangeRecords(items, records);
          });
        } else {
          var splices = _aureliaBinding.calcSplices(items, 0, items.length, this.lastBoundItems, 0, this.lastBoundItems.length);
          observer = this.observerLocator.getArrayObserver(items);

          this.handleSplices(items, splices);
          this.lastBoundItems = this.oldItems = null;

          this.disposeSubscription = observer.subscribe(function (splices) {
            _this.handleSplices(items, splices);
          });

          return;
        }
      } else if (this.oldItems) {
        this.removeAll();
      }

      this.processItems();
    };

    _Repeat.prototype.unbind = function unbind() {
      this.oldItems = this.items;

      if (this.items instanceof Array) {
        this.lastBoundItems = this.items.slice(0);
      }

      if (this.disposeSubscription) {
        this.disposeSubscription();
        this.disposeSubscription = null;
      }
    };

    _Repeat.prototype.itemsChanged = function itemsChanged() {
      this.processItems();
    };

    _Repeat.prototype.processItems = function processItems() {
      var items = this.items;

      if (this.disposeSubscription) {
        this.disposeSubscription();
        this.removeAll();
      }

      if (!items) {
        return;
      }

      if (items instanceof Array) {
        this.processArrayItems(items);
      } else if (items instanceof Map) {
        this.processMapEntries(items);
      } else if (typeof items === 'number') {
        this.processNumber(items);
      } else {
        throw new Error('Object in "repeat" must be of type Array, Map or Number');
      }
    };

    _Repeat.prototype.processArrayItems = function processArrayItems(items) {
      var _this2 = this;

      var viewFactory = this.viewFactory,
          viewSlot = this.viewSlot,
          i,
          ii,
          row,
          view,
          observer;

      observer = this.observerLocator.getArrayObserver(items);

      for (i = 0, ii = items.length; i < ii; ++i) {
        row = this.createFullExecutionContext(items[i], i, ii);
        view = viewFactory.create(row);
        viewSlot.add(view);
      }

      this.disposeSubscription = observer.subscribe(function (splices) {
        _this2.handleSplices(items, splices);
      });
    };

    _Repeat.prototype.processMapEntries = function processMapEntries(items) {
      var _this3 = this;

      var viewFactory = this.viewFactory,
          viewSlot = this.viewSlot,
          index = 0,
          row,
          view,
          observer;

      observer = this.observerLocator.getMapObserver(items);

      items.forEach(function (value, key) {
        row = _this3.createFullExecutionKvpContext(key, value, index, items.size);
        view = viewFactory.create(row);
        viewSlot.add(view);
        ++index;
      });

      this.disposeSubscription = observer.subscribe(function (record) {
        _this3.handleMapChangeRecords(items, record);
      });
    };

    _Repeat.prototype.processNumber = function processNumber(value) {
      var viewFactory = this.viewFactory,
          viewSlot = this.viewSlot,
          i,
          ii,
          row,
          view;

      for (i = 0, ii = Math.floor(value); i < ii; ++i) {
        row = this.createFullExecutionContext(i, i, ii);
        view = viewFactory.create(row);
        viewSlot.add(view);
      }
    };

    _Repeat.prototype.createBaseExecutionContext = function createBaseExecutionContext(data) {
      var context = {};
      context[this.local] = data;
      context.$parent = this.executionContext;
      return context;
    };

    _Repeat.prototype.createBaseExecutionKvpContext = function createBaseExecutionKvpContext(key, value) {
      var context = {};
      context[this.key] = key;
      context[this.value] = value;
      context.$parent = this.executionContext;
      return context;
    };

    _Repeat.prototype.createFullExecutionContext = function createFullExecutionContext(data, index, length) {
      var context = this.createBaseExecutionContext(data);
      return this.updateExecutionContext(context, index, length);
    };

    _Repeat.prototype.createFullExecutionKvpContext = function createFullExecutionKvpContext(key, value, index, length) {
      var context = this.createBaseExecutionKvpContext(key, value);
      return this.updateExecutionContext(context, index, length);
    };

    _Repeat.prototype.updateExecutionContext = function updateExecutionContext(context, index, length) {
      var first = index === 0,
          last = index === length - 1,
          even = index % 2 === 0;

      context.$index = index;
      context.$first = first;
      context.$last = last;
      context.$middle = !(first || last);
      context.$odd = !even;
      context.$even = even;

      return context;
    };

    _Repeat.prototype.handleSplices = function handleSplices(array, splices) {
      var viewLookup = new Map(),
          viewSlot = this.viewSlot,
          spliceIndexLow,
          viewOrPromise,
          view,
          i,
          ii,
          j,
          jj,
          row,
          splice,
          addIndex,
          end,
          itemsLeftToAdd,
          removed,
          model,
          children,
          length,
          context,
          spliceIndex;

      for (i = 0, ii = splices.length; i < ii; ++i) {
        splice = splices[i];
        addIndex = spliceIndex = splice.index;
        itemsLeftToAdd = splice.addedCount;
        end = splice.index + splice.addedCount;
        removed = splice.removed;
        if (typeof spliceIndexLow === 'undefined' || spliceIndexLow === null || spliceIndexLow > splice.index) {
          spliceIndexLow = spliceIndex;
        }

        for (j = 0, jj = removed.length; j < jj; ++j) {
          if (itemsLeftToAdd > 0) {
            view = viewSlot.children[spliceIndex + j];
            view.detached();
            context = this.createFullExecutionContext(array[addIndex + j], spliceIndex + j, array.length);
            view.bind(context);
            view.attached();
            --itemsLeftToAdd;
          } else {
            viewOrPromise = viewSlot.removeAt(addIndex + splice.addedCount);
            if (viewOrPromise) {
              viewLookup.set(removed[j], viewOrPromise);
            }
          }
        }

        addIndex += removed.length;

        for (; 0 < itemsLeftToAdd; ++addIndex) {
          model = array[addIndex];
          viewOrPromise = viewLookup.get(model);
          if (viewOrPromise instanceof Promise) {
            (function (localAddIndex, localModel) {
              viewOrPromise.then(function (view) {
                viewLookup['delete'](localModel);
                viewSlot.insert(localAddIndex, view);
              });
            })(addIndex, model);
          } else if (viewOrPromise) {
            viewLookup['delete'](model);
            viewSlot.insert(addIndex, viewOrPromise);
          } else {
            row = this.createBaseExecutionContext(model);
            view = this.viewFactory.create(row);
            viewSlot.insert(addIndex, view);
          }
          --itemsLeftToAdd;
        }
      }

      children = this.viewSlot.children;
      length = children.length;

      if (spliceIndexLow > 0) {
        spliceIndexLow = spliceIndexLow - 1;
      }

      for (; spliceIndexLow < length; ++spliceIndexLow) {
        this.updateExecutionContext(children[spliceIndexLow].executionContext, spliceIndexLow, length);
      }

      viewLookup.forEach(function (x) {
        if (x instanceof Promise) {
          x.then(function (y) {
            return y.unbind();
          });
        } else {
          x.unbind();
        }
      });
    };

    _Repeat.prototype.handleMapChangeRecords = function handleMapChangeRecords(map, records) {
      var viewSlot = this.viewSlot,
          key,
          i,
          ii,
          view,
          children,
          length,
          row,
          removeIndex,
          record;

      for (i = 0, ii = records.length; i < ii; ++i) {
        record = records[i];
        key = record.key;
        switch (record.type) {
          case 'update':
            removeIndex = this.getViewIndexByKey(key);
            viewSlot.removeAt(removeIndex);
            row = this.createBaseExecutionKvpContext(key, map.get(key));
            view = this.viewFactory.create(row);
            viewSlot.insert(removeIndex, view);
            break;
          case 'add':
            row = this.createBaseExecutionKvpContext(key, map.get(key));
            view = this.viewFactory.create(row);
            viewSlot.insert(map.size, view);
            break;
          case 'delete':
            if (!record.oldValue) {
              return;
            }
            removeIndex = this.getViewIndexByKey(key);
            viewSlot.removeAt(removeIndex);
            break;
          case 'clear':
            viewSlot.removeAll();
        }
      }

      children = viewSlot.children;
      length = children.length;

      for (i = 0; i < length; i++) {
        this.updateExecutionContext(children[i].executionContext, i, length);
      }
    };

    _Repeat.prototype.getViewIndexByKey = function getViewIndexByKey(key) {
      var viewSlot = this.viewSlot,
          i,
          ii,
          child;

      for (i = 0, ii = viewSlot.children.length; i < ii; ++i) {
        child = viewSlot.children[i];
        if (child.bindings[0].source[this.key] === key) {
          return i;
        }
      }
    };

    _Repeat.prototype.removeAll = function removeAll() {
      var viewSlot = this.viewSlot,
          views,
          i;

      views = viewSlot.children;
      viewSlot.removeAll();
      i = views.length;
      while (i--) {
        views[i].unbind();
      }
    };

    _createDecoratedClass(_Repeat, [{
      key: 'items',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'local',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'key',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'value',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    Repeat = _aureliaDependencyInjection.inject(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.ViewSlot, _aureliaBinding.ObserverLocator)(Repeat) || Repeat;
    Repeat = _aureliaTemplating.templateController(Repeat) || Repeat;
    Repeat = _aureliaTemplating.customAttribute('repeat')(Repeat) || Repeat;
    return Repeat;
  })();

  exports.Repeat = Repeat;
});