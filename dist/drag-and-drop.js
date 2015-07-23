System.register(['dragula', 'aurelia-framework', 'aurelia-event-aggregator', './events', './table'], function (_export) {
	'use strict';

	var dragula, inject, EventAggregator, CardDroppedEvent, doubleClickDelay, Table, DragAndDrop;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_dragula) {
			dragula = _dragula['default'];
		}, function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}, function (_aureliaEventAggregator) {
			EventAggregator = _aureliaEventAggregator.EventAggregator;
		}, function (_events) {
			CardDroppedEvent = _events.CardDroppedEvent;
			doubleClickDelay = _events.doubleClickDelay;
		}, function (_table) {
			Table = _table.Table;
		}],
		execute: function () {
			DragAndDrop = (function () {
				function DragAndDrop(eventAggregator, table) {
					_classCallCheck(this, _DragAndDrop);

					this.dragging = false;

					this.eventAggregator = eventAggregator;

					var dragApi = dragula({
						isContainer: function isContainer(el) {
							if (!el) {
								return false;
							}
							if (dragApi.dragging) {
								return el.classList.contains('drop-target');
							}
							var card = undefined;
							return el.classList.contains('drag-source') && (card = el.parentElement.card.card) && card.up && table.getPile(card).canDrag;
						},
						revertOnSpill: true,
						delay: 200
					});

					this.trackDrop(dragApi);
					this.trackDraggingState(dragApi);
				}

				var _DragAndDrop = DragAndDrop;

				_createClass(_DragAndDrop, [{
					key: 'trackDrop',
					value: function trackDrop(dragApi) {
						var _this = this;

						dragApi.on('drop', function (el, container, source) {
							var card = source.parentElement.card.card,
							    pile = container.parentElement.parentElement.pile.pile;
							dragApi.cancel();
							_this.eventAggregator.publish(new CardDroppedEvent(card, pile));
						});
					}
				}, {
					key: 'trackDraggingState',
					value: function trackDraggingState(dragApi) {
						var _this2 = this;

						var handle = undefined;
						dragApi.on('drag', function () {
							handle = setTimeout(function () {
								return _this2.dragging = true;
							}, doubleClickDelay + 20);
						});
						dragApi.on('dragend', function () {
							clearTimeout(handle);
							_this2.dragging = false;
						});
					}
				}]);

				DragAndDrop = inject(EventAggregator, Table)(DragAndDrop) || DragAndDrop;
				return DragAndDrop;
			})();

			_export('DragAndDrop', DragAndDrop);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyYWctYW5kLWRyb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2tGQU9hLFdBQVc7Ozs7Ozs7Ozs7OEJBTmhCLE1BQU07OzZDQUNOLGVBQWU7OzhCQUNmLGdCQUFnQjs4QkFBRSxnQkFBZ0I7O2tCQUNsQyxLQUFLOzs7QUFHQSxjQUFXO0FBSVosYUFKQyxXQUFXLENBSVgsZUFBZSxFQUFFLEtBQUssRUFBRTs7O1VBRnBDLFFBQVEsR0FBRyxLQUFLOztBQUdmLFNBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDOztBQUV2QyxTQUFJLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDckIsaUJBQVcsRUFBRSxxQkFBQSxFQUFFLEVBQUk7QUFDbEIsV0FBSSxDQUFDLEVBQUUsRUFBRTtBQUNSLGVBQU8sS0FBSyxDQUFDO1FBQ2I7QUFDRCxXQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7QUFDckIsZUFBTyxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1QztBQUNELFdBQUksSUFBSSxZQUFBLENBQUM7QUFDVCxjQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUN0QyxJQUFJLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBLEFBQUMsSUFDbkMsSUFBSSxDQUFDLEVBQUUsSUFDUCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQztPQUNoQztBQUNELG1CQUFhLEVBQUUsSUFBSTtBQUNuQixXQUFLLEVBQUUsR0FBRztNQUNWLENBQUMsQ0FBQzs7QUFFSCxTQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hCLFNBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNqQzs7dUJBM0JXLFdBQVc7Ozs7WUE2QmQsbUJBQUMsT0FBTyxFQUFFOzs7QUFDbEIsYUFBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBSztBQUM3QyxXQUFJLElBQUksR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJO1dBQ3hDLElBQUksR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3hELGNBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNqQixhQUFLLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztPQUMvRCxDQUFDLENBQUM7TUFDSDs7O1lBRWlCLDRCQUFDLE9BQU8sRUFBRTs7O0FBQzNCLFVBQUksTUFBTSxZQUFBLENBQUM7QUFDWCxhQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxZQUFNO0FBQ3hCLGFBQU0sR0FBRyxVQUFVLENBQUM7ZUFBTSxPQUFLLFFBQVEsR0FBRyxJQUFJO1FBQUEsRUFBRSxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsQ0FBQztPQUN2RSxDQUFDLENBQUM7QUFDSCxhQUFPLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxZQUFNO0FBQzNCLG1CQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDckIsY0FBSyxRQUFRLEdBQUcsS0FBSyxDQUFDO09BQ3RCLENBQUMsQ0FBQztNQUNIOzs7QUEvQ1csZUFBVyxHQUR2QixNQUFNLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUNsQixXQUFXLEtBQVgsV0FBVztXQUFYLFdBQVc7OzswQkFBWCxXQUFXIiwiZmlsZSI6ImRyYWctYW5kLWRyb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHJhZ3VsYSBmcm9tICdkcmFndWxhJztcclxuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcbmltcG9ydCB7Q2FyZERyb3BwZWRFdmVudCwgZG91YmxlQ2xpY2tEZWxheX0gZnJvbSAnLi9ldmVudHMnO1xyXG5pbXBvcnQge1RhYmxlfSBmcm9tICcuL3RhYmxlJztcclxuXHJcbkBpbmplY3QoRXZlbnRBZ2dyZWdhdG9yLCBUYWJsZSlcclxuZXhwb3J0IGNsYXNzIERyYWdBbmREcm9wIHtcclxuXHRldmVudEFnZ3JlZ2F0b3I7XHJcblx0ZHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3IoZXZlbnRBZ2dyZWdhdG9yLCB0YWJsZSkge1xyXG5cdFx0dGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBldmVudEFnZ3JlZ2F0b3I7XHJcblxyXG5cdFx0bGV0IGRyYWdBcGkgPSBkcmFndWxhKHtcclxuXHRcdFx0aXNDb250YWluZXI6IGVsID0+IHtcclxuXHRcdFx0XHRpZiAoIWVsKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkcmFnQXBpLmRyYWdnaW5nKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wLXRhcmdldCcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgY2FyZDtcclxuXHRcdFx0XHRyZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcmFnLXNvdXJjZScpXHJcblx0XHRcdFx0XHQmJiAoY2FyZCA9IGVsLnBhcmVudEVsZW1lbnQuY2FyZC5jYXJkKVxyXG5cdFx0XHRcdFx0JiYgY2FyZC51cFxyXG5cdFx0XHRcdFx0JiYgdGFibGUuZ2V0UGlsZShjYXJkKS5jYW5EcmFnO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRyZXZlcnRPblNwaWxsOiB0cnVlLFxyXG5cdFx0XHRkZWxheTogMjAwXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLnRyYWNrRHJvcChkcmFnQXBpKTtcclxuXHRcdHRoaXMudHJhY2tEcmFnZ2luZ1N0YXRlKGRyYWdBcGkpO1xyXG5cdH1cclxuXHJcblx0dHJhY2tEcm9wKGRyYWdBcGkpIHtcclxuXHRcdGRyYWdBcGkub24oJ2Ryb3AnLCAoZWwsIGNvbnRhaW5lciwgc291cmNlKSA9PiB7XHJcblx0XHRcdGxldCBjYXJkID0gc291cmNlLnBhcmVudEVsZW1lbnQuY2FyZC5jYXJkLFxyXG5cdFx0XHRcdHBpbGUgPSBjb250YWluZXIucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBpbGUucGlsZTtcclxuXHRcdFx0ZHJhZ0FwaS5jYW5jZWwoKTtcclxuXHRcdFx0dGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChuZXcgQ2FyZERyb3BwZWRFdmVudChjYXJkLCBwaWxlKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHRyYWNrRHJhZ2dpbmdTdGF0ZShkcmFnQXBpKSB7XHJcblx0XHRsZXQgaGFuZGxlO1xyXG5cdFx0ZHJhZ0FwaS5vbignZHJhZycsICgpID0+IHtcclxuXHRcdFx0aGFuZGxlID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmRyYWdnaW5nID0gdHJ1ZSwgZG91YmxlQ2xpY2tEZWxheSArIDIwKTtcclxuXHRcdH0pO1xyXG5cdFx0ZHJhZ0FwaS5vbignZHJhZ2VuZCcsICgpID0+IHtcclxuXHRcdFx0Y2xlYXJUaW1lb3V0KGhhbmRsZSk7XHJcblx0XHRcdHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==