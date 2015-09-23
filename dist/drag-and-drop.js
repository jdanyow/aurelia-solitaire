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

				_createClass(DragAndDrop, [{
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

				var _DragAndDrop = DragAndDrop;
				DragAndDrop = inject(EventAggregator, Table)(DragAndDrop) || DragAndDrop;
				return DragAndDrop;
			})();

			_export('DragAndDrop', DragAndDrop);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyYWctYW5kLWRyb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2tGQU9hLFdBQVc7Ozs7Ozs7Ozs7OEJBTmhCLE1BQU07OzZDQUNOLGVBQWU7OzhCQUNmLGdCQUFnQjs4QkFBRSxnQkFBZ0I7O2tCQUNsQyxLQUFLOzs7QUFHQSxjQUFXO0FBSVosYUFKQyxXQUFXLENBSVgsZUFBZSxFQUFFLEtBQUssRUFBRTs7O1VBRnBDLFFBQVEsR0FBRyxLQUFLOztBQUdmLFNBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDOztBQUV2QyxTQUFJLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDckIsaUJBQVcsRUFBRSxxQkFBQSxFQUFFLEVBQUk7QUFDbEIsV0FBSSxDQUFDLEVBQUUsRUFBRTtBQUNSLGVBQU8sS0FBSyxDQUFDO1FBQ2I7QUFDRCxXQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7QUFDckIsZUFBTyxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1QztBQUNELFdBQUksSUFBSSxZQUFBLENBQUM7QUFDVCxjQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUN0QyxJQUFJLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBLEFBQUMsSUFDbkMsSUFBSSxDQUFDLEVBQUUsSUFDUCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQztPQUNoQztBQUNELG1CQUFhLEVBQUUsSUFBSTtBQUNuQixXQUFLLEVBQUUsR0FBRztNQUNWLENBQUMsQ0FBQzs7QUFFSCxTQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hCLFNBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNqQzs7aUJBM0JXLFdBQVc7O1lBNkJkLG1CQUFDLE9BQU8sRUFBRTs7O0FBQ2xCLGFBQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUs7QUFDN0MsV0FBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSTtXQUN4QyxJQUFJLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN4RCxjQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDakIsYUFBSyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7T0FDL0QsQ0FBQyxDQUFDO01BQ0g7OztZQUVpQiw0QkFBQyxPQUFPLEVBQUU7OztBQUMzQixVQUFJLE1BQU0sWUFBQSxDQUFDO0FBQ1gsYUFBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsWUFBTTtBQUN4QixhQUFNLEdBQUcsVUFBVSxDQUFDO2VBQU0sT0FBSyxRQUFRLEdBQUcsSUFBSTtRQUFBLEVBQUUsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLENBQUM7T0FDdkUsQ0FBQyxDQUFDO0FBQ0gsYUFBTyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBTTtBQUMzQixtQkFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JCLGNBQUssUUFBUSxHQUFHLEtBQUssQ0FBQztPQUN0QixDQUFDLENBQUM7TUFDSDs7O3VCQS9DVyxXQUFXO0FBQVgsZUFBVyxHQUR2QixNQUFNLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUNsQixXQUFXLEtBQVgsV0FBVztXQUFYLFdBQVciLCJmaWxlIjoiZHJhZy1hbmQtZHJvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkcmFndWxhIGZyb20gJ2RyYWd1bGEnO1xyXG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0V2ZW50QWdncmVnYXRvcn0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuaW1wb3J0IHtDYXJkRHJvcHBlZEV2ZW50LCBkb3VibGVDbGlja0RlbGF5fSBmcm9tICcuL2V2ZW50cyc7XHJcbmltcG9ydCB7VGFibGV9IGZyb20gJy4vdGFibGUnO1xyXG5cclxuQGluamVjdChFdmVudEFnZ3JlZ2F0b3IsIFRhYmxlKVxyXG5leHBvcnQgY2xhc3MgRHJhZ0FuZERyb3Age1xyXG5cdGV2ZW50QWdncmVnYXRvcjtcclxuXHRkcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihldmVudEFnZ3JlZ2F0b3IsIHRhYmxlKSB7XHJcblx0XHR0aGlzLmV2ZW50QWdncmVnYXRvciA9IGV2ZW50QWdncmVnYXRvcjtcclxuXHJcblx0XHRsZXQgZHJhZ0FwaSA9IGRyYWd1bGEoe1xyXG5cdFx0XHRpc0NvbnRhaW5lcjogZWwgPT4ge1xyXG5cdFx0XHRcdGlmICghZWwpIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGRyYWdBcGkuZHJhZ2dpbmcpIHtcclxuXHRcdFx0XHRcdHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3AtdGFyZ2V0Jyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBjYXJkO1xyXG5cdFx0XHRcdHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2RyYWctc291cmNlJylcclxuXHRcdFx0XHRcdCYmIChjYXJkID0gZWwucGFyZW50RWxlbWVudC5jYXJkLmNhcmQpXHJcblx0XHRcdFx0XHQmJiBjYXJkLnVwXHJcblx0XHRcdFx0XHQmJiB0YWJsZS5nZXRQaWxlKGNhcmQpLmNhbkRyYWc7XHJcblx0XHRcdH0sXHJcblx0XHRcdHJldmVydE9uU3BpbGw6IHRydWUsXHJcblx0XHRcdGRlbGF5OiAyMDBcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMudHJhY2tEcm9wKGRyYWdBcGkpO1xyXG5cdFx0dGhpcy50cmFja0RyYWdnaW5nU3RhdGUoZHJhZ0FwaSk7XHJcblx0fVxyXG5cclxuXHR0cmFja0Ryb3AoZHJhZ0FwaSkge1xyXG5cdFx0ZHJhZ0FwaS5vbignZHJvcCcsIChlbCwgY29udGFpbmVyLCBzb3VyY2UpID0+IHtcclxuXHRcdFx0bGV0IGNhcmQgPSBzb3VyY2UucGFyZW50RWxlbWVudC5jYXJkLmNhcmQsXHJcblx0XHRcdFx0cGlsZSA9IGNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGlsZS5waWxlO1xyXG5cdFx0XHRkcmFnQXBpLmNhbmNlbCgpO1xyXG5cdFx0XHR0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKG5ldyBDYXJkRHJvcHBlZEV2ZW50KGNhcmQsIHBpbGUpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dHJhY2tEcmFnZ2luZ1N0YXRlKGRyYWdBcGkpIHtcclxuXHRcdGxldCBoYW5kbGU7XHJcblx0XHRkcmFnQXBpLm9uKCdkcmFnJywgKCkgPT4ge1xyXG5cdFx0XHRoYW5kbGUgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZHJhZ2dpbmcgPSB0cnVlLCBkb3VibGVDbGlja0RlbGF5ICsgMjApO1xyXG5cdFx0fSk7XHJcblx0XHRkcmFnQXBpLm9uKCdkcmFnZW5kJywgKCkgPT4ge1xyXG5cdFx0XHRjbGVhclRpbWVvdXQoaGFuZGxlKTtcclxuXHRcdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9