System.register([], function (_export) {
	"use strict";

	var Card;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	return {
		setters: [],
		execute: function () {
			Card = function Card(suit, rank) {
				_classCallCheck(this, Card);

				this.up = false;
				this.next = null;

				this.suit = suit;
				this.rank = rank;
			};

			_export("Card", Card);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0tBQWEsSUFBSTs7Ozs7OztBQUFKLE9BQUksR0FNTCxTQU5DLElBQUksQ0FNSixJQUFJLEVBQUUsSUFBSSxFQUFFOzBCQU5aLElBQUk7O1NBR2hCLEVBQUUsR0FBRyxLQUFLO1NBQ1YsSUFBSSxHQUFHLElBQUk7O0FBR1YsUUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsUUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDakI7O21CQVRXLElBQUkiLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDYXJkIHtcclxuXHRzdWl0O1xyXG5cdHJhbms7XHJcblx0dXAgPSBmYWxzZTtcclxuXHRuZXh0ID0gbnVsbDtcclxuXHJcblx0Y29uc3RydWN0b3Ioc3VpdCwgcmFuaykge1xyXG5cdFx0dGhpcy5zdWl0ID0gc3VpdDtcclxuXHRcdHRoaXMucmFuayA9IHJhbms7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9