System.register(['aurelia-framework', './events'], function (_export) {
	'use strict';

	var bindable, customElement, inject, CardClickPublisher, CardElement;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

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
				var _instanceInitializers = {};

				_createDecoratedClass(CardElement, [{
					key: 'card',
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}], null, _instanceInitializers);

				function CardElement(clickPublisher) {
					_classCallCheck(this, _CardElement);

					_defineDecoratedPropertyDescriptor(this, 'card', _instanceInitializers);

					this.clickPublisher = clickPublisher;
				}

				_createDecoratedClass(CardElement, [{
					key: 'cardChanged',
					value: function cardChanged() {
						this.src = this.card ? 'img/' + this.card.rank + '_of_' + this.card.suit.name + 's.png' : '';
					}
				}, {
					key: 'click',
					value: function click() {
						if (this.card.next) {
							return;
						}
						this.clickPublisher.publish(this.card);
					}
				}], null, _instanceInitializers);

				var _CardElement = CardElement;
				CardElement = inject(CardClickPublisher)(CardElement) || CardElement;
				CardElement = customElement('card')(CardElement) || CardElement;
				return CardElement;
			})();

			_export('CardElement', CardElement);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtZWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7MERBS2EsV0FBVzs7Ozs7Ozs7OztnQ0FMaEIsUUFBUTtxQ0FBRSxhQUFhOzhCQUFFLE1BQU07O2dDQUMvQixrQkFBa0I7OztBQUliLGNBQVc7Ozs7MEJBQVgsV0FBVzs7a0JBQ3RCLFFBQVE7Ozs7O0FBS0UsYUFOQyxXQUFXLENBTVgsY0FBYyxFQUFFOzs7OztBQUMzQixTQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztLQUNyQzs7MEJBUlcsV0FBVzs7WUFVWix1QkFBRztBQUNiLFVBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksWUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksWUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGFBQVUsRUFBRSxDQUFDO01BQ25GOzs7WUFFSSxpQkFBRztBQUNQLFVBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDbkIsY0FBTztPQUNQO0FBQ0QsVUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO01BQ3ZDOzs7dUJBbkJXLFdBQVc7QUFBWCxlQUFXLEdBRHZCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUNkLFdBQVcsS0FBWCxXQUFXO0FBQVgsZUFBVyxHQUZ2QixhQUFhLENBQUMsTUFBTSxDQUFDLENBRVQsV0FBVyxLQUFYLFdBQVc7V0FBWCxXQUFXIiwiZmlsZSI6ImNhcmQtZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0NhcmRDbGlja1B1Ymxpc2hlcn0gZnJvbSAnLi9ldmVudHMnO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoJ2NhcmQnKVxyXG5AaW5qZWN0KENhcmRDbGlja1B1Ymxpc2hlcilcclxuZXhwb3J0IGNsYXNzIENhcmRFbGVtZW50IHtcclxuXHRAYmluZGFibGVcclxuXHRjYXJkO1xyXG5cdHNyYztcclxuXHRjbGlja1B1Ymxpc2hlcjtcclxuXHJcblx0Y29uc3RydWN0b3IoY2xpY2tQdWJsaXNoZXIpIHtcclxuXHRcdHRoaXMuY2xpY2tQdWJsaXNoZXIgPSBjbGlja1B1Ymxpc2hlcjtcclxuXHR9XHJcblxyXG5cdGNhcmRDaGFuZ2VkKCkge1x0XHRcclxuXHRcdHRoaXMuc3JjID0gdGhpcy5jYXJkID8gYGltZy8ke3RoaXMuY2FyZC5yYW5rfV9vZl8ke3RoaXMuY2FyZC5zdWl0Lm5hbWV9cy5wbmdgIDogJyc7XHJcblx0fVxyXG5cclxuXHRjbGljaygpIHtcclxuXHRcdGlmICh0aGlzLmNhcmQubmV4dCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLmNsaWNrUHVibGlzaGVyLnB1Ymxpc2godGhpcy5jYXJkKTtcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9