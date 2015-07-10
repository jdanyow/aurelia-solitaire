System.register([], function (_export) {
	"use strict";

	var Pile;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
					key: "getLastCard",
					value: function getLastCard(orSelf, nextToLast) {
						var card = orSelf ? this : this.next;
						while (card && card.next && (!nextToLast || card.next.next)) {
							card = card.next;
						}
						return card;
					}
				}, {
					key: "flip",
					value: function flip() {
						var card = this.next;
						if (card) {
							this.next = this.getLastCard();
							reverse(card);
						}
					}
				}]);

				return Pile;
			})();

			_export("Pile", Pile);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0tBQWEsSUFBSTs7Ozs7O0FBNkJqQixVQUFTLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDdEIsTUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNyQixNQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixNQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUNuQixNQUFJLElBQUksRUFBRTtBQUNULE9BQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckIsT0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7R0FDakI7QUFDRCxTQUFPLElBQUksQ0FBQztFQUNaOzs7O0FBdENZLE9BQUk7QUFNTCxhQU5DLElBQUksQ0FNSixJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTsyQkFOeEIsSUFBSTs7VUFJaEIsSUFBSSxHQUFHLElBQUk7O0FBR1YsU0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsU0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsU0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDdkI7O2lCQVZXLElBQUk7O1lBWUwscUJBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRTtBQUMvQixVQUFJLElBQUksR0FBRyxNQUFNLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDckMsYUFBTyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQSxBQUFDLEVBQUU7QUFDNUQsV0FBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7T0FDakI7QUFDRCxhQUFPLElBQUksQ0FBQztNQUNaOzs7WUFFRyxnQkFBRztBQUNOLFVBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDckIsVUFBSSxJQUFJLEVBQUU7QUFDVCxXQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUMvQixjQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7T0FDYjtNQUNEOzs7V0ExQlcsSUFBSTs7O21CQUFKLElBQUkiLCJmaWxlIjoicGlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQaWxlIHtcclxuXHR0eXBlO1xyXG5cdGNhbkRyYWc7XHJcblx0Y2FuRHJvcDtcclxuXHRuZXh0ID0gbnVsbDtcclxuXHJcblx0Y29uc3RydWN0b3IodHlwZSwgY2FuRHJhZywgY2FuRHJvcCkge1xyXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcclxuXHRcdHRoaXMuY2FuRHJhZyA9IGNhbkRyYWc7XHJcblx0XHR0aGlzLmNhbkRyb3AgPSBjYW5Ecm9wO1xyXG5cdH1cclxuXHJcblx0Z2V0TGFzdENhcmQob3JTZWxmLCBuZXh0VG9MYXN0KSB7XHJcblx0XHRsZXQgY2FyZCA9IG9yU2VsZiA/IHRoaXMgOiB0aGlzLm5leHQ7XHJcblx0XHR3aGlsZSAoY2FyZCAmJiBjYXJkLm5leHQgJiYgKCFuZXh0VG9MYXN0IHx8IGNhcmQubmV4dC5uZXh0KSkge1xyXG5cdFx0XHRjYXJkID0gY2FyZC5uZXh0O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGNhcmQ7XHJcblx0fVxyXG5cclxuXHRmbGlwKCkge1xyXG5cdFx0dmFyIGNhcmQgPSB0aGlzLm5leHQ7XHJcblx0XHRpZiAoY2FyZCkge1xyXG5cdFx0XHR0aGlzLm5leHQgPSB0aGlzLmdldExhc3RDYXJkKCk7XHJcblx0XHRcdHJldmVyc2UoY2FyZClcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJldmVyc2UoY2FyZCkge1xyXG5cdGxldCBuZXh0ID0gY2FyZC5uZXh0O1xyXG5cdGNhcmQubmV4dCA9IG51bGw7XHJcblx0Y2FyZC51cCA9ICFjYXJkLnVwO1xyXG5cdGlmIChuZXh0KSB7XHJcblx0XHRuZXh0ID0gcmV2ZXJzZShuZXh0KTtcclxuXHRcdG5leHQubmV4dCA9IGNhcmQ7XHJcblx0fVxyXG5cdHJldHVybiBjYXJkO1xyXG59XHJcblx0Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9