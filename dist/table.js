System.register([], function (_export) {
	"use strict";

	var Table;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	return {
		setters: [],
		execute: function () {
			Table = (function () {
				function Table() {
					_classCallCheck(this, Table);

					this.piles = [];
				}

				_createClass(Table, [{
					key: "addPile",
					value: function addPile(pile) {
						this.piles.push(pile);
					}
				}, {
					key: "getPile",
					value: function getPile(card) {
						var i = this.piles.length,
						    c = undefined;
						while (i--) {
							c = this.piles[i].next;
							while (c && c !== card) {
								c = c.next;
							}
							if (c) {
								return this.piles[i];
							}
						}
					}
				}, {
					key: "moveCard",
					value: function moveCard(card, toCardOrPile, reveal) {
						var pile = this.getPile(card),
						    c = pile;
						while (c.next !== card) {
							c = c.next;
						}
						c.next = null;
						if (reveal) {
							c.up = true;
						}
						toCardOrPile.next = card;
					}
				}]);

				return Table;
			})();

			_export("Table", Table);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztLQUFhLEtBQUs7Ozs7Ozs7OztBQUFMLFFBQUs7YUFBTCxLQUFLOzJCQUFMLEtBQUs7O1VBQ2pCLEtBQUssR0FBRyxFQUFFOzs7aUJBREUsS0FBSzs7WUFHVixpQkFBQyxJQUFJLEVBQUU7QUFDYixVQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUN0Qjs7O1lBRU0saUJBQUMsSUFBSSxFQUFFO0FBQ2IsVUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1VBQUUsQ0FBQyxZQUFBLENBQUM7QUFDN0IsYUFBTyxDQUFDLEVBQUUsRUFBRTtBQUNYLFFBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUN2QixjQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO0FBQ3ZCLFNBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ1g7QUFDRCxXQUFJLENBQUMsRUFBRTtBQUNOLGVBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQjtPQUNEO01BQ0Q7OztZQUVPLGtCQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFO0FBQ3BDLFVBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1VBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUN4QyxhQUFPLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO0FBQ3ZCLFFBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO09BQ1g7QUFDRCxPQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNkLFVBQUksTUFBTSxFQUFFO0FBQ1gsUUFBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7T0FDWjtBQUNELGtCQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztNQUN6Qjs7O1dBOUJXLEtBQUs7OztvQkFBTCxLQUFLIiwiZmlsZSI6InRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRhYmxlIHtcclxuXHRwaWxlcyA9IFtdO1xyXG5cclxuXHRhZGRQaWxlKHBpbGUpIHtcclxuXHRcdHRoaXMucGlsZXMucHVzaChwaWxlKTtcclxuXHR9XHJcblxyXG5cdGdldFBpbGUoY2FyZCkge1xyXG5cdFx0bGV0IGkgPSB0aGlzLnBpbGVzLmxlbmd0aCwgYztcclxuXHRcdHdoaWxlIChpLS0pIHtcclxuXHRcdFx0YyA9IHRoaXMucGlsZXNbaV0ubmV4dDtcclxuXHRcdFx0d2hpbGUgKGMgJiYgYyAhPT0gY2FyZCkge1xyXG5cdFx0XHRcdGMgPSBjLm5leHQ7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGMpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5waWxlc1tpXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bW92ZUNhcmQoY2FyZCwgdG9DYXJkT3JQaWxlLCByZXZlYWwpIHtcclxuXHRcdGxldCBwaWxlID0gdGhpcy5nZXRQaWxlKGNhcmQpLCBjID0gcGlsZTtcclxuXHRcdHdoaWxlIChjLm5leHQgIT09IGNhcmQpIHtcclxuXHRcdFx0YyA9IGMubmV4dDtcclxuXHRcdH1cclxuXHRcdGMubmV4dCA9IG51bGw7XHJcblx0XHRpZiAocmV2ZWFsKSB7XHJcblx0XHRcdGMudXAgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0dG9DYXJkT3JQaWxlLm5leHQgPSBjYXJkO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==