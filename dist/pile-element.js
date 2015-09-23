System.register(['aurelia-framework', 'aurelia-event-aggregator', './events', './drag-and-drop'], function (_export) {
	'use strict';

	var bindable, customElement, inject, EventAggregator, PlaceholderClickedEvent, DragAndDrop, PileElement;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

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
				var _instanceInitializers = {};

				_createDecoratedClass(PileElement, [{
					key: 'pile',
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}], null, _instanceInitializers);

				function PileElement(eventAggregator, dragAndDrop) {
					_classCallCheck(this, _PileElement);

					_defineDecoratedPropertyDescriptor(this, 'pile', _instanceInitializers);

					this.eventAggregator = eventAggregator;
					this.dragAndDrop = dragAndDrop;
				}

				_createDecoratedClass(PileElement, [{
					key: 'placeholderClicked',
					value: function placeholderClicked() {
						if (this.pile.next) {
							return;
						}
						this.eventAggregator.publish(new PlaceholderClickedEvent(this.pile));
					}
				}], null, _instanceInitializers);

				var _PileElement = PileElement;
				PileElement = inject(EventAggregator, DragAndDrop)(PileElement) || PileElement;
				PileElement = customElement('pile')(PileElement) || PileElement;
				return PileElement;
			})();

			_export('PileElement', PileElement);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpbGUtZWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkZBT2EsV0FBVzs7Ozs7Ozs7OztnQ0FQaEIsUUFBUTtxQ0FBRSxhQUFhOzhCQUFFLE1BQU07OzZDQUMvQixlQUFlOztxQ0FDZix1QkFBdUI7OzhCQUN2QixXQUFXOzs7QUFJTixjQUFXOzs7OzBCQUFYLFdBQVc7O2tCQUN0QixRQUFROzs7OztBQUlFLGFBTEMsV0FBVyxDQUtYLGVBQWUsRUFBRSxXQUFXLEVBQUU7Ozs7O0FBQ3pDLFNBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0FBQ3ZDLFNBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0tBQy9COzswQkFSVyxXQUFXOztZQVVMLDhCQUFHO0FBQ3BCLFVBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDbkIsY0FBTztPQUNQO0FBQ0QsVUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztNQUNyRTs7O3VCQWZXLFdBQVc7QUFBWCxlQUFXLEdBRHZCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQ3hCLFdBQVcsS0FBWCxXQUFXO0FBQVgsZUFBVyxHQUZ2QixhQUFhLENBQUMsTUFBTSxDQUFDLENBRVQsV0FBVyxLQUFYLFdBQVc7V0FBWCxXQUFXIiwiZmlsZSI6InBpbGUtZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0V2ZW50QWdncmVnYXRvcn0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuaW1wb3J0IHtQbGFjZWhvbGRlckNsaWNrZWRFdmVudH0gZnJvbSAnLi9ldmVudHMnO1xyXG5pbXBvcnQge0RyYWdBbmREcm9wfSBmcm9tICcuL2RyYWctYW5kLWRyb3AnO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoJ3BpbGUnKVxyXG5AaW5qZWN0KEV2ZW50QWdncmVnYXRvciwgRHJhZ0FuZERyb3ApXHJcbmV4cG9ydCBjbGFzcyBQaWxlRWxlbWVudCB7XHJcblx0QGJpbmRhYmxlXHJcblx0cGlsZTtcclxuXHRkcmFnQW5kRHJvcDtcclxuXHJcblx0Y29uc3RydWN0b3IoZXZlbnRBZ2dyZWdhdG9yLCBkcmFnQW5kRHJvcCkge1xyXG5cdFx0dGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBldmVudEFnZ3JlZ2F0b3I7XHJcblx0XHR0aGlzLmRyYWdBbmREcm9wID0gZHJhZ0FuZERyb3A7XHJcblx0fVxyXG5cclxuXHRwbGFjZWhvbGRlckNsaWNrZWQoKSB7XHJcblx0XHRpZiAodGhpcy5waWxlLm5leHQpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChuZXcgUGxhY2Vob2xkZXJDbGlja2VkRXZlbnQodGhpcy5waWxlKSk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9