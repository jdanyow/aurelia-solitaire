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
					key: 'bind',
					value: function bind() {
						this.src = 'img/' + this.card.rank + '-' + this.card.suit.name + '.svg';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtZWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7MERBS2EsV0FBVzs7Ozs7Ozs7OztnQ0FMaEIsUUFBUTtxQ0FBRSxhQUFhOzhCQUFFLE1BQU07O2dDQUMvQixrQkFBa0I7OztBQUliLGNBQVc7OztBQU1aLGFBTkMsV0FBVyxDQU1YLGNBQWMsRUFBRTs7Ozs7QUFDM0IsU0FBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7S0FDckM7O3VCQVJXLFdBQVc7Ozs7WUFVbkIsZ0JBQUc7QUFDTixVQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztNQUN4RTs7O1lBRUksaUJBQUc7QUFDUCxVQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ25CLGNBQU87T0FDUDtBQUNELFVBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUN2Qzs7O2tCQWxCQSxRQUFROzs7OztBQURHLGVBQVcsR0FEdkIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQ2QsV0FBVyxLQUFYLFdBQVc7QUFBWCxlQUFXLEdBRnZCLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FFVCxXQUFXLEtBQVgsV0FBVztXQUFYLFdBQVc7OzswQkFBWCxXQUFXIiwiZmlsZSI6ImNhcmQtZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0NhcmRDbGlja1B1Ymxpc2hlcn0gZnJvbSAnLi9ldmVudHMnO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoJ2NhcmQnKVxyXG5AaW5qZWN0KENhcmRDbGlja1B1Ymxpc2hlcilcclxuZXhwb3J0IGNsYXNzIENhcmRFbGVtZW50IHtcclxuXHRAYmluZGFibGVcclxuXHRjYXJkO1xyXG5cdHNyYztcclxuXHRjbGlja1B1Ymxpc2hlcjtcclxuXHJcblx0Y29uc3RydWN0b3IoY2xpY2tQdWJsaXNoZXIpIHtcclxuXHRcdHRoaXMuY2xpY2tQdWJsaXNoZXIgPSBjbGlja1B1Ymxpc2hlcjtcclxuXHR9XHJcblxyXG5cdGJpbmQoKSB7XHJcblx0XHR0aGlzLnNyYyA9ICdpbWcvJyArIHRoaXMuY2FyZC5yYW5rICsgJy0nICsgdGhpcy5jYXJkLnN1aXQubmFtZSArICcuc3ZnJztcclxuXHR9XHJcblxyXG5cdGNsaWNrKCkge1xyXG5cdFx0aWYgKHRoaXMuY2FyZC5uZXh0KSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuY2xpY2tQdWJsaXNoZXIucHVibGlzaCh0aGlzLmNhcmQpO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==