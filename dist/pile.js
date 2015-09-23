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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0tBQWEsSUFBSTs7Ozs7Ozs7O0FBQUosT0FBSTtBQU1MLGFBTkMsSUFBSSxDQU1KLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFOzJCQU54QixJQUFJOztVQUloQixJQUFJLEdBQUcsSUFBSTs7QUFHVixTQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixTQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixTQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUN2Qjs7aUJBVlcsSUFBSTs7WUFZTCxxQkFBQyxNQUFNLEVBQUUsVUFBVSxFQUFFO0FBQy9CLFVBQUksSUFBSSxHQUFHLE1BQU0sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNyQyxhQUFPLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBLEFBQUMsRUFBRTtBQUM1RCxXQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztPQUNqQjtBQUNELGFBQU8sSUFBSSxDQUFDO01BQ1o7OztXQWxCVyxJQUFJIiwiZmlsZSI6InBpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUGlsZSB7XHJcblx0dHlwZTtcclxuXHRjYW5EcmFnO1xyXG5cdGNhbkRyb3A7XHJcblx0bmV4dCA9IG51bGw7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHR5cGUsIGNhbkRyYWcsIGNhbkRyb3ApIHtcclxuXHRcdHRoaXMudHlwZSA9IHR5cGU7XHJcblx0XHR0aGlzLmNhbkRyYWcgPSBjYW5EcmFnO1xyXG5cdFx0dGhpcy5jYW5Ecm9wID0gY2FuRHJvcDtcclxuXHR9XHJcblxyXG5cdGdldExhc3RDYXJkKG9yU2VsZiwgbmV4dFRvTGFzdCkge1xyXG5cdFx0bGV0IGNhcmQgPSBvclNlbGYgPyB0aGlzIDogdGhpcy5uZXh0O1xyXG5cdFx0d2hpbGUgKGNhcmQgJiYgY2FyZC5uZXh0ICYmICghbmV4dFRvTGFzdCB8fCBjYXJkLm5leHQubmV4dCkpIHtcclxuXHRcdFx0Y2FyZCA9IGNhcmQubmV4dDtcclxuXHRcdH1cclxuXHRcdHJldHVybiBjYXJkO1xyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=