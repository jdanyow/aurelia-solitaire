System.register(['aurelia-framework', './events'], function (_export) {
	'use strict';

	var bindable, customElement, inject, CardClickPublisher, CardElement;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

	return {
		setters: [function (_aureliaFramework) {
			bindable = _aureliaFramework.bindable;
			customElement = _aureliaFramework.customElement;
			inject = _aureliaFramework.inject;
		}, function (_events) {
			CardClickPublisher = _events.CardClickPublisher;
		}],
		execute: function () {
			CardElement = (function () {
				var _instanceInitializers = {};

				function CardElement(clickPublisher) {
					_classCallCheck(this, _CardElement);

					_defineDecoratedPropertyDescriptor(this, 'card', _instanceInitializers);

					this.clickPublisher = clickPublisher;
				}

				var _CardElement = CardElement;

				_createDecoratedClass(_CardElement, [{
					key: 'cardChanged',
					value: function cardChanged() {
						this.src = this.card ? 'img/' + this.card.rank + '-' + this.card.suit.name + '.svg' : '';
					}
				}, {
					key: 'click',
					value: function click() {
						if (this.card.next) {
							return;
						}
						this.clickPublisher.publish(this.card);
					}
				}, {
					key: 'card',
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}], null, _instanceInitializers);

				CardElement = inject(CardClickPublisher)(CardElement) || CardElement;
				CardElement = customElement('card')(CardElement) || CardElement;
				return CardElement;
			})();

			_export('CardElement', CardElement);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtZWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7MERBS2EsV0FBVzs7Ozs7Ozs7OztnQ0FMaEIsUUFBUTtxQ0FBRSxhQUFhOzhCQUFFLE1BQU07O2dDQUMvQixrQkFBa0I7OztBQUliLGNBQVc7OztBQU1aLGFBTkMsV0FBVyxDQU1YLGNBQWMsRUFBRTs7Ozs7QUFDM0IsU0FBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7S0FDckM7O3VCQVJXLFdBQVc7Ozs7WUFVWix1QkFBRztBQUNiLFVBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsRUFBRSxDQUFDO01BQ3pGOzs7WUFFSSxpQkFBRztBQUNQLFVBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDbkIsY0FBTztPQUNQO0FBQ0QsVUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO01BQ3ZDOzs7a0JBbEJBLFFBQVE7Ozs7O0FBREcsZUFBVyxHQUR2QixNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FDZCxXQUFXLEtBQVgsV0FBVztBQUFYLGVBQVcsR0FGdkIsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUVULFdBQVcsS0FBWCxXQUFXO1dBQVgsV0FBVzs7OzBCQUFYLFdBQVciLCJmaWxlIjoiY2FyZC1lbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7Q2FyZENsaWNrUHVibGlzaGVyfSBmcm9tICcuL2V2ZW50cyc7XHJcblxyXG5AY3VzdG9tRWxlbWVudCgnY2FyZCcpXHJcbkBpbmplY3QoQ2FyZENsaWNrUHVibGlzaGVyKVxyXG5leHBvcnQgY2xhc3MgQ2FyZEVsZW1lbnQge1xyXG5cdEBiaW5kYWJsZVxyXG5cdGNhcmQ7XHJcblx0c3JjO1xyXG5cdGNsaWNrUHVibGlzaGVyO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihjbGlja1B1Ymxpc2hlcikge1xyXG5cdFx0dGhpcy5jbGlja1B1Ymxpc2hlciA9IGNsaWNrUHVibGlzaGVyO1xyXG5cdH1cclxuXHJcblx0Y2FyZENoYW5nZWQoKSB7XHJcblx0XHR0aGlzLnNyYyA9IHRoaXMuY2FyZCA/ICdpbWcvJyArIHRoaXMuY2FyZC5yYW5rICsgJy0nICsgdGhpcy5jYXJkLnN1aXQubmFtZSArICcuc3ZnJyA6ICcnO1xyXG5cdH1cclxuXHJcblx0Y2xpY2soKSB7XHJcblx0XHRpZiAodGhpcy5jYXJkLm5leHQpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5jbGlja1B1Ymxpc2hlci5wdWJsaXNoKHRoaXMuY2FyZCk7XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==