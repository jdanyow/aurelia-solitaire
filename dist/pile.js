System.register([], function (_export) {
	"use strict";

	var Pile;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
				}]);

				return Pile;
			})();

			_export("Pile", Pile);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0tBQWEsSUFBSTs7Ozs7Ozs7O0FBQUosT0FBSTtBQU1MLGFBTkMsSUFBSSxDQU1KLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFOzJCQU54QixJQUFJOztVQUloQixJQUFJLEdBQUcsSUFBSTs7QUFHVixTQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixTQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixTQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUN2Qjs7aUJBVlcsSUFBSTs7WUFZTCxxQkFBQyxNQUFNLEVBQUUsVUFBVSxFQUFFO0FBQy9CLFVBQUksSUFBSSxHQUFHLE1BQU0sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNyQyxhQUFPLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBLEFBQUMsRUFBRTtBQUM1RCxXQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztPQUNqQjtBQUNELGFBQU8sSUFBSSxDQUFDO01BQ1o7OztXQWxCVyxJQUFJOzs7bUJBQUosSUFBSSIsImZpbGUiOiJwaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBpbGUge1xyXG5cdHR5cGU7XHJcblx0Y2FuRHJhZztcclxuXHRjYW5Ecm9wO1xyXG5cdG5leHQgPSBudWxsO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0eXBlLCBjYW5EcmFnLCBjYW5Ecm9wKSB7XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdFx0dGhpcy5jYW5EcmFnID0gY2FuRHJhZztcclxuXHRcdHRoaXMuY2FuRHJvcCA9IGNhbkRyb3A7XHJcblx0fVxyXG5cclxuXHRnZXRMYXN0Q2FyZChvclNlbGYsIG5leHRUb0xhc3QpIHtcclxuXHRcdGxldCBjYXJkID0gb3JTZWxmID8gdGhpcyA6IHRoaXMubmV4dDtcclxuXHRcdHdoaWxlIChjYXJkICYmIGNhcmQubmV4dCAmJiAoIW5leHRUb0xhc3QgfHwgY2FyZC5uZXh0Lm5leHQpKSB7XHJcblx0XHRcdGNhcmQgPSBjYXJkLm5leHQ7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gY2FyZDtcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9