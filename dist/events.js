System.register(['aurelia-framework', 'aurelia-event-aggregator'], function (_export) {
	'use strict';

	var inject, EventAggregator, doubleClickDelay, CardEvent, CardClickedEvent, CardDoubleClickedEvent, CardDroppedEvent, PlaceholderClickedEvent, CardClickPublisher;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}, function (_aureliaEventAggregator) {
			EventAggregator = _aureliaEventAggregator.EventAggregator;
		}],
		execute: function () {
			doubleClickDelay = 500;

			_export('doubleClickDelay', doubleClickDelay);

			CardEvent = function CardEvent(card) {
				_classCallCheck(this, CardEvent);

				this.card = card;
			};

			CardClickedEvent = (function (_CardEvent) {
				function CardClickedEvent() {
					_classCallCheck(this, CardClickedEvent);

					_get(Object.getPrototypeOf(CardClickedEvent.prototype), 'constructor', this).apply(this, arguments);

					this.handled = false;
				}

				_inherits(CardClickedEvent, _CardEvent);

				return CardClickedEvent;
			})(CardEvent);

			_export('CardClickedEvent', CardClickedEvent);

			CardDoubleClickedEvent = (function (_CardEvent2) {
				function CardDoubleClickedEvent() {
					_classCallCheck(this, CardDoubleClickedEvent);

					_get(Object.getPrototypeOf(CardDoubleClickedEvent.prototype), 'constructor', this).apply(this, arguments);
				}

				_inherits(CardDoubleClickedEvent, _CardEvent2);

				return CardDoubleClickedEvent;
			})(CardEvent);

			_export('CardDoubleClickedEvent', CardDoubleClickedEvent);

			CardDroppedEvent = (function (_CardEvent3) {
				function CardDroppedEvent(card, pile) {
					_classCallCheck(this, CardDroppedEvent);

					_get(Object.getPrototypeOf(CardDroppedEvent.prototype), 'constructor', this).call(this, card);
					this.pile = pile;
				}

				_inherits(CardDroppedEvent, _CardEvent3);

				return CardDroppedEvent;
			})(CardEvent);

			_export('CardDroppedEvent', CardDroppedEvent);

			PlaceholderClickedEvent = function PlaceholderClickedEvent(pile) {
				_classCallCheck(this, PlaceholderClickedEvent);

				this.pile = pile;
			};

			_export('PlaceholderClickedEvent', PlaceholderClickedEvent);

			CardClickPublisher = (function () {
				function CardClickPublisher(eventAggregator) {
					_classCallCheck(this, _CardClickPublisher);

					this.eventAggregator = eventAggregator;
				}

				var _CardClickPublisher = CardClickPublisher;

				_createClass(_CardClickPublisher, [{
					key: 'publish',
					value: function publish(card) {
						var _this = this;

						console.log(card.rank + ' of ' + card.suit.name + ' clicked');
						var event = new CardClickedEvent(card);

						this.eventAggregator.publish(event);

						if (event.handled) {
							return;
						}

						if (this.lastCardClicked === card) {
							this.lastCardClicked = null;
							this.eventAggregator.publish(new CardDoubleClickedEvent(card));
							return;
						}
						this.lastCardClicked = card;
						setTimeout(function () {
							return _this.lastCardClicked = null;
						}, doubleClickDelay);
					}
				}]);

				CardClickPublisher = inject(EventAggregator)(CardClickPublisher) || CardClickPublisher;
				return CardClickPublisher;
			})();

			_export('CardClickPublisher', CardClickPublisher);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OEJBR2EsZ0JBQWdCLEVBRXZCLFNBQVMsRUFRRixnQkFBZ0IsRUFJaEIsc0JBQXNCLEVBRXRCLGdCQUFnQixFQVNoQix1QkFBdUIsRUFTdkIsa0JBQWtCOzs7Ozs7Ozs7Ozs7OEJBckN2QixNQUFNOzs2Q0FDTixlQUFlOzs7QUFFVixtQkFBZ0IsR0FBRyxHQUFHOzsrQkFBdEIsZ0JBQWdCOztBQUV2QixZQUFTLEdBR0gsU0FITixTQUFTLENBR0YsSUFBSSxFQUFFOzBCQUhiLFNBQVM7O0FBSWIsUUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDakI7O0FBR1csbUJBQWdCO2FBQWhCLGdCQUFnQjsyQkFBaEIsZ0JBQWdCOztnQ0FBaEIsZ0JBQWdCOztVQUM1QixPQUFPLEdBQUcsS0FBSzs7O2NBREgsZ0JBQWdCOztXQUFoQixnQkFBZ0I7TUFBUyxTQUFTOzsrQkFBbEMsZ0JBQWdCOztBQUloQix5QkFBc0I7YUFBdEIsc0JBQXNCOzJCQUF0QixzQkFBc0I7O2dDQUF0QixzQkFBc0I7OztjQUF0QixzQkFBc0I7O1dBQXRCLHNCQUFzQjtNQUFTLFNBQVM7O3FDQUF4QyxzQkFBc0I7O0FBRXRCLG1CQUFnQjtBQUdqQixhQUhDLGdCQUFnQixDQUdoQixJQUFJLEVBQUUsSUFBSSxFQUFFOzJCQUhaLGdCQUFnQjs7QUFJM0IsZ0NBSlcsZ0JBQWdCLDZDQUlyQixJQUFJLEVBQUU7QUFDWixTQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUNqQjs7Y0FOVyxnQkFBZ0I7O1dBQWhCLGdCQUFnQjtNQUFTLFNBQVM7OytCQUFsQyxnQkFBZ0I7O0FBU2hCLDBCQUF1QixHQUd4QixTQUhDLHVCQUF1QixDQUd2QixJQUFJLEVBQUU7MEJBSE4sdUJBQXVCOztBQUlsQyxRQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQjs7c0NBTFcsdUJBQXVCOztBQVN2QixxQkFBa0I7QUFJbkIsYUFKQyxrQkFBa0IsQ0FJbEIsZUFBZSxFQUFFOzs7QUFDNUIsU0FBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7S0FDdkM7OzhCQU5XLGtCQUFrQjs7OztZQVF2QixpQkFBQyxJQUFJLEVBQUU7OztBQUNiLGFBQU8sQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLElBQUksWUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksY0FBVyxDQUFDO0FBQ3pELFVBQUksS0FBSyxHQUFHLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRXZDLFVBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVwQyxVQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7QUFDbEIsY0FBTztPQUNQOztBQUdELFVBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxJQUFJLEVBQUU7QUFDbEMsV0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7QUFDNUIsV0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQy9ELGNBQU87T0FDUDtBQUNELFVBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0FBQzVCLGdCQUFVLENBQUM7Y0FBTSxNQUFLLGVBQWUsR0FBRyxJQUFJO09BQUEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO01BQ2hFOzs7QUExQlcsc0JBQWtCLEdBRDlCLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FDWCxrQkFBa0IsS0FBbEIsa0JBQWtCO1dBQWxCLGtCQUFrQjs7O2lDQUFsQixrQkFBa0IiLCJmaWxlIjoiZXZlbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcblxyXG5leHBvcnQgY29uc3QgZG91YmxlQ2xpY2tEZWxheSA9IDUwMDtcclxuXHJcbmNsYXNzIENhcmRFdmVudCB7XHJcblx0Y2FyZDtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcihjYXJkKSB7XHJcblx0XHR0aGlzLmNhcmQgPSBjYXJkO1xyXG5cdH1cdFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FyZENsaWNrZWRFdmVudCBleHRlbmRzIENhcmRFdmVudCB7XHJcblx0aGFuZGxlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FyZERvdWJsZUNsaWNrZWRFdmVudCBleHRlbmRzIENhcmRFdmVudCB7IH1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYXJkRHJvcHBlZEV2ZW50IGV4dGVuZHMgQ2FyZEV2ZW50IHtcclxuXHRwaWxlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihjYXJkLCBwaWxlKSB7XHJcblx0XHRzdXBlcihjYXJkKTtcclxuXHRcdHRoaXMucGlsZSA9IHBpbGU7XHJcblx0fVx0XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQbGFjZWhvbGRlckNsaWNrZWRFdmVudCB7XHJcblx0cGlsZTtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcihwaWxlKSB7XHJcblx0XHR0aGlzLnBpbGUgPSBwaWxlO1xyXG5cdH1cclxufVxyXG5cclxuQGluamVjdChFdmVudEFnZ3JlZ2F0b3IpXHJcbmV4cG9ydCBjbGFzcyBDYXJkQ2xpY2tQdWJsaXNoZXIge1xyXG5cdGV2ZW50QWdncmVnYXRvcjtcclxuXHRsYXN0Q2FyZENsaWNrZWQ7XHJcblx0XHJcblx0Y29uc3RydWN0b3IoZXZlbnRBZ2dyZWdhdG9yKSB7XHJcblx0XHR0aGlzLmV2ZW50QWdncmVnYXRvciA9IGV2ZW50QWdncmVnYXRvcjtcclxuXHR9XHJcblxyXG5cdHB1Ymxpc2goY2FyZCkge1xyXG5cdFx0Y29uc29sZS5sb2coYCR7Y2FyZC5yYW5rfSBvZiAke2NhcmQuc3VpdC5uYW1lfSBjbGlja2VkYCk7XHJcblx0XHRsZXQgZXZlbnQgPSBuZXcgQ2FyZENsaWNrZWRFdmVudChjYXJkKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChldmVudCk7XHJcblx0XHRcclxuXHRcdGlmIChldmVudC5oYW5kbGVkKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly8gZG91YmxlIGNsaWNrP1x0XHRcclxuXHRcdGlmICh0aGlzLmxhc3RDYXJkQ2xpY2tlZCA9PT0gY2FyZCkge1xyXG5cdFx0XHR0aGlzLmxhc3RDYXJkQ2xpY2tlZCA9IG51bGw7XHJcblx0XHRcdHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2gobmV3IENhcmREb3VibGVDbGlja2VkRXZlbnQoY2FyZCkpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLmxhc3RDYXJkQ2xpY2tlZCA9IGNhcmQ7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMubGFzdENhcmRDbGlja2VkID0gbnVsbCwgZG91YmxlQ2xpY2tEZWxheSk7XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==