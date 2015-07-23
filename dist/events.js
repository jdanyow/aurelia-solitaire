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

						console.log(card.rank + ' of ' + card.suit.name + 's clicked');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OEJBR2EsZ0JBQWdCLEVBRXZCLFNBQVMsRUFRRixnQkFBZ0IsRUFJaEIsc0JBQXNCLEVBRXRCLGdCQUFnQixFQVNoQix1QkFBdUIsRUFTdkIsa0JBQWtCOzs7Ozs7Ozs7Ozs7OEJBckN2QixNQUFNOzs2Q0FDTixlQUFlOzs7QUFFVixtQkFBZ0IsR0FBRyxHQUFHOzsrQkFBdEIsZ0JBQWdCOztBQUV2QixZQUFTLEdBR0gsU0FITixTQUFTLENBR0YsSUFBSSxFQUFFOzBCQUhiLFNBQVM7O0FBSWIsUUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDakI7O0FBR1csbUJBQWdCO2FBQWhCLGdCQUFnQjsyQkFBaEIsZ0JBQWdCOztnQ0FBaEIsZ0JBQWdCOztVQUM1QixPQUFPLEdBQUcsS0FBSzs7O2NBREgsZ0JBQWdCOztXQUFoQixnQkFBZ0I7TUFBUyxTQUFTOzsrQkFBbEMsZ0JBQWdCOztBQUloQix5QkFBc0I7YUFBdEIsc0JBQXNCOzJCQUF0QixzQkFBc0I7O2dDQUF0QixzQkFBc0I7OztjQUF0QixzQkFBc0I7O1dBQXRCLHNCQUFzQjtNQUFTLFNBQVM7O3FDQUF4QyxzQkFBc0I7O0FBRXRCLG1CQUFnQjtBQUdqQixhQUhDLGdCQUFnQixDQUdoQixJQUFJLEVBQUUsSUFBSSxFQUFFOzJCQUhaLGdCQUFnQjs7QUFJM0IsZ0NBSlcsZ0JBQWdCLDZDQUlyQixJQUFJLEVBQUU7QUFDWixTQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUNqQjs7Y0FOVyxnQkFBZ0I7O1dBQWhCLGdCQUFnQjtNQUFTLFNBQVM7OytCQUFsQyxnQkFBZ0I7O0FBU2hCLDBCQUF1QixHQUd4QixTQUhDLHVCQUF1QixDQUd2QixJQUFJLEVBQUU7MEJBSE4sdUJBQXVCOztBQUlsQyxRQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQjs7c0NBTFcsdUJBQXVCOztBQVN2QixxQkFBa0I7QUFJbkIsYUFKQyxrQkFBa0IsQ0FJbEIsZUFBZSxFQUFFOzs7QUFDNUIsU0FBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7S0FDdkM7OzhCQU5XLGtCQUFrQjs7OztZQVF2QixpQkFBQyxJQUFJLEVBQUU7OztBQUNiLGFBQU8sQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLElBQUksWUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZUFBWSxDQUFDO0FBQzFELFVBQUksS0FBSyxHQUFHLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRXZDLFVBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVwQyxVQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7QUFDbEIsY0FBTztPQUNQOztBQUdELFVBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxJQUFJLEVBQUU7QUFDbEMsV0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7QUFDNUIsV0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQy9ELGNBQU87T0FDUDtBQUNELFVBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0FBQzVCLGdCQUFVLENBQUM7Y0FBTSxNQUFLLGVBQWUsR0FBRyxJQUFJO09BQUEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO01BQ2hFOzs7QUExQlcsc0JBQWtCLEdBRDlCLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FDWCxrQkFBa0IsS0FBbEIsa0JBQWtCO1dBQWxCLGtCQUFrQjs7O2lDQUFsQixrQkFBa0IiLCJmaWxlIjoiZXZlbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcblxyXG5leHBvcnQgY29uc3QgZG91YmxlQ2xpY2tEZWxheSA9IDUwMDtcclxuXHJcbmNsYXNzIENhcmRFdmVudCB7XHJcblx0Y2FyZDtcclxuXHJcblx0Y29uc3RydWN0b3IoY2FyZCkge1xyXG5cdFx0dGhpcy5jYXJkID0gY2FyZDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYXJkQ2xpY2tlZEV2ZW50IGV4dGVuZHMgQ2FyZEV2ZW50IHtcclxuXHRoYW5kbGVkID0gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYXJkRG91YmxlQ2xpY2tlZEV2ZW50IGV4dGVuZHMgQ2FyZEV2ZW50IHsgfVxyXG5cclxuZXhwb3J0IGNsYXNzIENhcmREcm9wcGVkRXZlbnQgZXh0ZW5kcyBDYXJkRXZlbnQge1xyXG5cdHBpbGU7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNhcmQsIHBpbGUpIHtcclxuXHRcdHN1cGVyKGNhcmQpO1xyXG5cdFx0dGhpcy5waWxlID0gcGlsZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQbGFjZWhvbGRlckNsaWNrZWRFdmVudCB7XHJcblx0cGlsZTtcclxuXHJcblx0Y29uc3RydWN0b3IocGlsZSkge1xyXG5cdFx0dGhpcy5waWxlID0gcGlsZTtcclxuXHR9XHJcbn1cclxuXHJcbkBpbmplY3QoRXZlbnRBZ2dyZWdhdG9yKVxyXG5leHBvcnQgY2xhc3MgQ2FyZENsaWNrUHVibGlzaGVyIHtcclxuXHRldmVudEFnZ3JlZ2F0b3I7XHJcblx0bGFzdENhcmRDbGlja2VkO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihldmVudEFnZ3JlZ2F0b3IpIHtcclxuXHRcdHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZXZlbnRBZ2dyZWdhdG9yO1xyXG5cdH1cclxuXHJcblx0cHVibGlzaChjYXJkKSB7XHJcblx0XHRjb25zb2xlLmxvZyhgJHtjYXJkLnJhbmt9IG9mICR7Y2FyZC5zdWl0Lm5hbWV9cyBjbGlja2VkYCk7XHJcblx0XHRsZXQgZXZlbnQgPSBuZXcgQ2FyZENsaWNrZWRFdmVudChjYXJkKTtcclxuXHJcblx0XHR0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKGV2ZW50KTtcclxuXHJcblx0XHRpZiAoZXZlbnQuaGFuZGxlZCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZG91YmxlIGNsaWNrP1xyXG5cdFx0aWYgKHRoaXMubGFzdENhcmRDbGlja2VkID09PSBjYXJkKSB7XHJcblx0XHRcdHRoaXMubGFzdENhcmRDbGlja2VkID0gbnVsbDtcclxuXHRcdFx0dGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChuZXcgQ2FyZERvdWJsZUNsaWNrZWRFdmVudChjYXJkKSk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMubGFzdENhcmRDbGlja2VkID0gY2FyZDtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sYXN0Q2FyZENsaWNrZWQgPSBudWxsLCBkb3VibGVDbGlja0RlbGF5KTtcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9