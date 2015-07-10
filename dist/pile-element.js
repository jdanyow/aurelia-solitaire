System.register(['aurelia-framework', 'aurelia-event-aggregator', './events', './drag-and-drop'], function (_export) {
	'use strict';

	var bindable, customElement, inject, EventAggregator, PlaceholderClickedEvent, DragAndDrop, PileElement;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

	return {
		setters: [function (_aureliaFramework) {
			bindable = _aureliaFramework.bindable;
			customElement = _aureliaFramework.customElement;
			inject = _aureliaFramework.inject;
		}, function (_aureliaEventAggregator) {
			EventAggregator = _aureliaEventAggregator.EventAggregator;
		}, function (_events) {
			PlaceholderClickedEvent = _events.PlaceholderClickedEvent;
		}, function (_dragAndDrop) {
			DragAndDrop = _dragAndDrop.DragAndDrop;
		}],
		execute: function () {
			PileElement = (function () {
				var _instanceInitializers = {};

				function PileElement(eventAggregator, dragAndDrop) {
					_classCallCheck(this, _PileElement);

					_defineDecoratedPropertyDescriptor(this, 'pile', _instanceInitializers);

					this.eventAggregator = eventAggregator;
					this.dragAndDrop = dragAndDrop;
				}

				var _PileElement = PileElement;

				_createDecoratedClass(_PileElement, [{
					key: 'placeholderClicked',
					value: function placeholderClicked() {
						if (this.pile.next) {
							return;
						}
						this.eventAggregator.publish(new PlaceholderClickedEvent(this.pile));
					}
				}, {
					key: 'pile',
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}], null, _instanceInitializers);

				PileElement = inject(EventAggregator, DragAndDrop)(PileElement) || PileElement;
				PileElement = customElement('pile')(PileElement) || PileElement;
				return PileElement;
			})();

			_export('PileElement', PileElement);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpbGUtZWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkZBT2EsV0FBVzs7Ozs7Ozs7OztnQ0FQaEIsUUFBUTtxQ0FBRSxhQUFhOzhCQUFFLE1BQU07OzZDQUMvQixlQUFlOztxQ0FDZix1QkFBdUI7OzhCQUN2QixXQUFXOzs7QUFJTixjQUFXOzs7QUFLWixhQUxDLFdBQVcsQ0FLWCxlQUFlLEVBQUUsV0FBVyxFQUFFOzs7OztBQUN6QyxTQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztBQUN2QyxTQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztLQUMvQjs7dUJBUlcsV0FBVzs7OztZQVVMLDhCQUFHO0FBQ3BCLFVBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDbkIsY0FBTztPQUNQO0FBQ0QsVUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztNQUNyRTs7O2tCQWRBLFFBQVE7Ozs7O0FBREcsZUFBVyxHQUR2QixNQUFNLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUN4QixXQUFXLEtBQVgsV0FBVztBQUFYLGVBQVcsR0FGdkIsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUVULFdBQVcsS0FBWCxXQUFXO1dBQVgsV0FBVzs7OzBCQUFYLFdBQVciLCJmaWxlIjoicGlsZS1lbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQge1BsYWNlaG9sZGVyQ2xpY2tlZEV2ZW50fSBmcm9tICcuL2V2ZW50cyc7XHJcbmltcG9ydCB7RHJhZ0FuZERyb3B9IGZyb20gJy4vZHJhZy1hbmQtZHJvcCc7XHJcblxyXG5AY3VzdG9tRWxlbWVudCgncGlsZScpXHJcbkBpbmplY3QoRXZlbnRBZ2dyZWdhdG9yLCBEcmFnQW5kRHJvcClcclxuZXhwb3J0IGNsYXNzIFBpbGVFbGVtZW50IHtcclxuXHRAYmluZGFibGVcclxuXHRwaWxlO1xyXG5cdGRyYWdBbmREcm9wO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihldmVudEFnZ3JlZ2F0b3IsIGRyYWdBbmREcm9wKSB7XHJcblx0XHR0aGlzLmV2ZW50QWdncmVnYXRvciA9IGV2ZW50QWdncmVnYXRvcjtcclxuXHRcdHRoaXMuZHJhZ0FuZERyb3AgPSBkcmFnQW5kRHJvcDtcclxuXHR9XHJcblxyXG5cdHBsYWNlaG9sZGVyQ2xpY2tlZCgpIHtcclxuXHRcdGlmICh0aGlzLnBpbGUubmV4dCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKG5ldyBQbGFjZWhvbGRlckNsaWNrZWRFdmVudCh0aGlzLnBpbGUpKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=