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
							if (el === null) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyYWctYW5kLWRyb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2tGQU9hLFdBQVc7Ozs7Ozs7Ozs7OEJBTmhCLE1BQU07OzZDQUNOLGVBQWU7OzhCQUNmLGdCQUFnQjs4QkFBRSxnQkFBZ0I7O2tCQUNsQyxLQUFLOzs7QUFHQSxjQUFXO0FBSVosYUFKQyxXQUFXLENBSVgsZUFBZSxFQUFFLEtBQUssRUFBRTs7O1VBRnBDLFFBQVEsR0FBRyxLQUFLOztBQUdmLFNBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDOztBQUV2QyxTQUFJLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDckIsaUJBQVcsRUFBRSxxQkFBQSxFQUFFLEVBQUk7QUFDbEIsV0FBSSxFQUFFLEtBQUssSUFBSSxFQUFFO0FBQ2hCLGVBQU8sS0FBSyxDQUFDO1FBQ2I7QUFDRCxXQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7QUFDckIsZUFBTyxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1QztBQUNELFdBQUksSUFBSSxZQUFBLENBQUM7QUFDVCxjQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUN0QyxJQUFJLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBLEFBQUMsSUFDbkMsSUFBSSxDQUFDLEVBQUUsSUFDUCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQztPQUNoQztBQUNELG1CQUFhLEVBQUUsSUFBSTtBQUNuQixXQUFLLEVBQUUsR0FBRztNQUNWLENBQUMsQ0FBQzs7QUFFSCxTQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hCLFNBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNqQzs7dUJBM0JXLFdBQVc7Ozs7WUE2QmQsbUJBQUMsT0FBTyxFQUFFOzs7QUFDbEIsYUFBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBSztBQUM3QyxXQUFJLElBQUksR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJO1dBQ3hDLElBQUksR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3hELGNBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNqQixhQUFLLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztPQUMvRCxDQUFDLENBQUM7TUFDSDs7O1lBRWlCLDRCQUFDLE9BQU8sRUFBRTs7O0FBQzNCLFVBQUksTUFBTSxZQUFBLENBQUM7QUFDWCxhQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxZQUFNO0FBQ3hCLGFBQU0sR0FBRyxVQUFVLENBQUM7ZUFBTSxPQUFLLFFBQVEsR0FBRyxJQUFJO1FBQUEsRUFBRSxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsQ0FBQztPQUN2RSxDQUFDLENBQUM7QUFDSCxhQUFPLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxZQUFNO0FBQzNCLG1CQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDckIsY0FBSyxRQUFRLEdBQUcsS0FBSyxDQUFDO09BQ3RCLENBQUMsQ0FBQztNQUNIOzs7QUEvQ1csZUFBVyxHQUR2QixNQUFNLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUNsQixXQUFXLEtBQVgsV0FBVztXQUFYLFdBQVc7OzswQkFBWCxXQUFXIiwiZmlsZSI6ImRyYWctYW5kLWRyb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHJhZ3VsYSBmcm9tICdkcmFndWxhJztcclxuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcbmltcG9ydCB7Q2FyZERyb3BwZWRFdmVudCwgZG91YmxlQ2xpY2tEZWxheX0gZnJvbSAnLi9ldmVudHMnO1xyXG5pbXBvcnQge1RhYmxlfSBmcm9tICcuL3RhYmxlJztcclxuXHJcbkBpbmplY3QoRXZlbnRBZ2dyZWdhdG9yLCBUYWJsZSlcclxuZXhwb3J0IGNsYXNzIERyYWdBbmREcm9wIHtcclxuXHRldmVudEFnZ3JlZ2F0b3I7XHJcblx0ZHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3IoZXZlbnRBZ2dyZWdhdG9yLCB0YWJsZSkge1xyXG5cdFx0dGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBldmVudEFnZ3JlZ2F0b3I7XHJcblxyXG5cdFx0bGV0IGRyYWdBcGkgPSBkcmFndWxhKHtcclxuXHRcdFx0aXNDb250YWluZXI6IGVsID0+IHtcclxuXHRcdFx0XHRpZiAoZWwgPT09IG51bGwpIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGRyYWdBcGkuZHJhZ2dpbmcpIHtcclxuXHRcdFx0XHRcdHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3AtdGFyZ2V0Jyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBjYXJkO1xyXG5cdFx0XHRcdHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2RyYWctc291cmNlJylcclxuXHRcdFx0XHRcdCYmIChjYXJkID0gZWwucGFyZW50RWxlbWVudC5jYXJkLmNhcmQpXHJcblx0XHRcdFx0XHQmJiBjYXJkLnVwXHJcblx0XHRcdFx0XHQmJiB0YWJsZS5nZXRQaWxlKGNhcmQpLmNhbkRyYWc7XHJcblx0XHRcdH0sXHJcblx0XHRcdHJldmVydE9uU3BpbGw6IHRydWUsXHJcblx0XHRcdGRlbGF5OiAyMDBcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMudHJhY2tEcm9wKGRyYWdBcGkpO1xyXG5cdFx0dGhpcy50cmFja0RyYWdnaW5nU3RhdGUoZHJhZ0FwaSk7XHJcblx0fVxyXG5cclxuXHR0cmFja0Ryb3AoZHJhZ0FwaSkge1xyXG5cdFx0ZHJhZ0FwaS5vbignZHJvcCcsIChlbCwgY29udGFpbmVyLCBzb3VyY2UpID0+IHtcclxuXHRcdFx0bGV0IGNhcmQgPSBzb3VyY2UucGFyZW50RWxlbWVudC5jYXJkLmNhcmQsXHJcblx0XHRcdFx0cGlsZSA9IGNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGlsZS5waWxlO1xyXG5cdFx0XHRkcmFnQXBpLmNhbmNlbCgpO1xyXG5cdFx0XHR0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKG5ldyBDYXJkRHJvcHBlZEV2ZW50KGNhcmQsIHBpbGUpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dHJhY2tEcmFnZ2luZ1N0YXRlKGRyYWdBcGkpIHtcclxuXHRcdGxldCBoYW5kbGU7XHJcblx0XHRkcmFnQXBpLm9uKCdkcmFnJywgKCkgPT4ge1xyXG5cdFx0XHRoYW5kbGUgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZHJhZ2dpbmcgPSB0cnVlLCBkb3VibGVDbGlja0RlbGF5ICsgMjApO1xyXG5cdFx0fSk7XHJcblx0XHRkcmFnQXBpLm9uKCdkcmFnZW5kJywgKCkgPT4ge1xyXG5cdFx0XHRjbGVhclRpbWVvdXQoaGFuZGxlKTtcclxuXHRcdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9