System.register([], function (_export) {
	'use strict';

	var Pile;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function reverse(card) {
		var next = card.next;
		card.next = null;
		card.up = !card.up;
		if (next) {
			next = reverse(next);
			next.next = card;
		}
		return card;
	}
	return {
		setters: [],
		execute: function () {
			Pile = (function () {
				function Pile(type, canDrag, canDrop) {
					_classCallCheck(this, Pile);

					this.next = null;

					this.type = type;
					this.canDrag = canDrag;
					this.canDrop = canDrop;
				}

				_createClass(Pile, [{
					key: 'getLastCard',
					value: function getLastCard(orSelf, nextToLast) {
						var card = orSelf ? this : this.next;
						while (card && card.next && (!nextToLast || card.next.next)) {
							card = card.next;
						}
						return card;
					}
				}, {
					key: 'flip',
					value: function flip() {
						var card = this.next;
						if (card) {
							this.next = this.getLastCard();
							reverse(card);
						}
					}
				}, {
					key: 'toString',
					value: function toString() {
						var card = this.next,
						    s = '';
						if (!card) {
							return '(empty)';
						}
						while (card) {
							s = card + ' ' + s;
							card = card.next;
						}
						return s;
					}
				}]);

				return Pile;
			})();

			_export('Pile', Pile);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0tBQWEsSUFBSTs7Ozs7O0FBeUNqQixVQUFTLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDdEIsTUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNyQixNQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixNQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUNuQixNQUFJLElBQUksRUFBRTtBQUNULE9BQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckIsT0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7R0FDakI7QUFDRCxTQUFPLElBQUksQ0FBQztFQUNaOzs7O0FBbERZLE9BQUk7QUFNTCxhQU5DLElBQUksQ0FNSixJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTsyQkFOeEIsSUFBSTs7VUFJaEIsSUFBSSxHQUFHLElBQUk7O0FBR1YsU0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsU0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsU0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDdkI7O2lCQVZXLElBQUk7O1lBWUwscUJBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRTtBQUMvQixVQUFJLElBQUksR0FBRyxNQUFNLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDckMsYUFBTyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQSxBQUFDLEVBQUU7QUFDNUQsV0FBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7T0FDakI7QUFDRCxhQUFPLElBQUksQ0FBQztNQUNaOzs7WUFFRyxnQkFBRztBQUNOLFVBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDckIsVUFBSSxJQUFJLEVBQUU7QUFDVCxXQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUMvQixjQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7T0FDYjtNQUNEOzs7WUFFTyxvQkFBRztBQUNWLFVBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO1VBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUM3QixVQUFJLENBQUMsSUFBSSxFQUFFO0FBQ1YsY0FBTyxTQUFTLENBQUM7T0FDakI7QUFDRCxhQUFNLElBQUksRUFBRTtBQUNYLFFBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNuQixXQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztPQUNqQjtBQUNELGFBQU8sQ0FBQyxDQUFDO01BQ1Q7OztXQXRDVyxJQUFJOzs7bUJBQUosSUFBSSIsImZpbGUiOiJwaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBpbGUge1xyXG5cdHR5cGU7XHJcblx0Y2FuRHJhZztcclxuXHRjYW5Ecm9wO1xyXG5cdG5leHQgPSBudWxsO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0eXBlLCBjYW5EcmFnLCBjYW5Ecm9wKSB7XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdFx0dGhpcy5jYW5EcmFnID0gY2FuRHJhZztcclxuXHRcdHRoaXMuY2FuRHJvcCA9IGNhbkRyb3A7XHJcblx0fVxyXG5cclxuXHRnZXRMYXN0Q2FyZChvclNlbGYsIG5leHRUb0xhc3QpIHtcclxuXHRcdGxldCBjYXJkID0gb3JTZWxmID8gdGhpcyA6IHRoaXMubmV4dDtcclxuXHRcdHdoaWxlIChjYXJkICYmIGNhcmQubmV4dCAmJiAoIW5leHRUb0xhc3QgfHwgY2FyZC5uZXh0Lm5leHQpKSB7XHJcblx0XHRcdGNhcmQgPSBjYXJkLm5leHQ7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gY2FyZDtcclxuXHR9XHJcblxyXG5cdGZsaXAoKSB7XHJcblx0XHR2YXIgY2FyZCA9IHRoaXMubmV4dDtcclxuXHRcdGlmIChjYXJkKSB7XHJcblx0XHRcdHRoaXMubmV4dCA9IHRoaXMuZ2V0TGFzdENhcmQoKTtcclxuXHRcdFx0cmV2ZXJzZShjYXJkKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgY2FyZCA9IHRoaXMubmV4dCwgcyA9ICcnO1xyXG5cdFx0aWYgKCFjYXJkKSB7XHJcblx0XHRcdHJldHVybiAnKGVtcHR5KSc7XHJcblx0XHR9XHJcblx0XHR3aGlsZShjYXJkKSB7XHJcblx0XHRcdHMgPSBjYXJkICsgJyAnICsgcztcclxuXHRcdFx0Y2FyZCA9IGNhcmQubmV4dDtcclxuXHRcdH1cclxuXHRcdHJldHVybiBzO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmV2ZXJzZShjYXJkKSB7XHJcblx0bGV0IG5leHQgPSBjYXJkLm5leHQ7XHJcblx0Y2FyZC5uZXh0ID0gbnVsbDtcclxuXHRjYXJkLnVwID0gIWNhcmQudXA7XHJcblx0aWYgKG5leHQpIHtcclxuXHRcdG5leHQgPSByZXZlcnNlKG5leHQpO1xyXG5cdFx0bmV4dC5uZXh0ID0gY2FyZDtcclxuXHR9XHJcblx0cmV0dXJuIGNhcmQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9