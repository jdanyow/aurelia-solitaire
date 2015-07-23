System.register([], function (_export) {
	'use strict';

	var Card;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [],
		execute: function () {
			Card = (function () {
				function Card(suit, rank) {
					_classCallCheck(this, Card);

					this.up = false;
					this.next = null;

					this.suit = suit;
					this.rank = rank;
				}

				_createClass(Card, [{
					key: 'toString',
					value: function toString() {
						return '' + this.rank + this.suit.symbol + (this.up ? '^' : '');
					}
				}]);

				return Card;
			})();

			_export('Card', Card);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0tBQWEsSUFBSTs7Ozs7Ozs7O0FBQUosT0FBSTtBQU1MLGFBTkMsSUFBSSxDQU1KLElBQUksRUFBRSxJQUFJLEVBQUU7MkJBTlosSUFBSTs7VUFHaEIsRUFBRSxHQUFHLEtBQUs7VUFDVixJQUFJLEdBQUcsSUFBSTs7QUFHVixTQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixTQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUNqQjs7aUJBVFcsSUFBSTs7WUFXUixvQkFBRztBQUNWLGtCQUFVLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFBLENBQUc7TUFDOUQ7OztXQWJXLElBQUk7OzttQkFBSixJQUFJIiwiZmlsZSI6ImNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2FyZCB7XHJcblx0c3VpdDtcclxuXHRyYW5rO1xyXG5cdHVwID0gZmFsc2U7XHJcblx0bmV4dCA9IG51bGw7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHN1aXQsIHJhbmspIHtcclxuXHRcdHRoaXMuc3VpdCA9IHN1aXQ7XHJcblx0XHR0aGlzLnJhbmsgPSByYW5rO1xyXG5cdH1cclxuXHJcblx0dG9TdHJpbmcoKSB7XHJcblx0XHRyZXR1cm4gYCR7dGhpcy5yYW5rfSR7dGhpcy5zdWl0LnN5bWJvbH0ke3RoaXMudXAgPyAnXicgOiAnJ31gO1xyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=