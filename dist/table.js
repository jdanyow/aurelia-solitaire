System.register(['./card'], function (_export) {
	'use strict';

	var Card, Table;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_card) {
			Card = _card.Card;
		}],
		execute: function () {
			Table = (function () {
				function Table() {
					_classCallCheck(this, Table);

					this.piles = [];
				}

				_createClass(Table, [{
					key: 'addPile',
					value: function addPile(pile) {
						this.piles.push(pile);
					}
				}, {
					key: 'getPile',
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
					key: 'moveCard',
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
						toCardOrPile.next = this.cloneCard(card);
					}
				}, {
					key: 'flipPile',
					value: function flipPile(pile) {
						var card = pile.next,
						    cards = [],
						    i = 0;

						pile.next = null;

						while (card) {
							cards.push(card);
							card = card.next;
						}
						cards.reverse();

						card = pile;
						while (i < cards.length) {
							card.next = new Card(cards[i].suit, cards[i].rank, false);
							card = card.next;
							i++;
						}
					}
				}, {
					key: 'cloneCard',
					value: function cloneCard(card) {
						var root = new Card(card.suit, card.rank, card.up),
						    clone = root;
						while (card.next) {
							card = card.next;
							clone = clone.next = new Card(card.suit, card.rank, card.up);
						}
						return root;
					}
				}]);

				return Table;
			})();

			_export('Table', Table);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,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RDtBQUNELGFBQU8sSUFBSSxDQUFDO01BQ1o7OztXQTdEVyxLQUFLIiwiZmlsZSI6InRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlIHtcclxuXHRwaWxlcyA9IFtdO1xyXG5cclxuXHRhZGRQaWxlKHBpbGUpIHtcclxuXHRcdHRoaXMucGlsZXMucHVzaChwaWxlKTtcclxuXHR9XHJcblxyXG5cdGdldFBpbGUoY2FyZCkge1xyXG5cdFx0bGV0IGkgPSB0aGlzLnBpbGVzLmxlbmd0aCwgYztcclxuXHRcdHdoaWxlIChpLS0pIHtcclxuXHRcdFx0YyA9IHRoaXMucGlsZXNbaV0ubmV4dDtcclxuXHRcdFx0d2hpbGUgKGMgJiYgYyAhPT0gY2FyZCkge1xyXG5cdFx0XHRcdGMgPSBjLm5leHQ7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGMpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5waWxlc1tpXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bW92ZUNhcmQoY2FyZCwgdG9DYXJkT3JQaWxlLCByZXZlYWwpIHtcclxuXHRcdGxldCBwaWxlID0gdGhpcy5nZXRQaWxlKGNhcmQpLCBjID0gcGlsZTtcclxuXHRcdHdoaWxlIChjLm5leHQgIT09IGNhcmQpIHtcclxuXHRcdFx0YyA9IGMubmV4dDtcclxuXHRcdH1cclxuXHRcdGMubmV4dCA9IG51bGw7XHJcblx0XHRpZiAocmV2ZWFsKSB7XHJcblx0XHRcdGMudXAgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0dG9DYXJkT3JQaWxlLm5leHQgPSB0aGlzLmNsb25lQ2FyZChjYXJkKTtcclxuXHR9XHJcblxyXG5cdGZsaXBQaWxlKHBpbGUpIHtcclxuXHRcdGxldCBjYXJkID0gcGlsZS5uZXh0LFxyXG5cdFx0XHRcdGNhcmRzID0gW10sXHJcblx0XHRcdFx0aSA9IDA7XHJcblx0XHQvLyBkZXRhY2ggY2FyZHMgZnJvbSB0aGUgcGlsZVxyXG5cdFx0cGlsZS5uZXh0ID0gbnVsbDtcclxuXHRcdC8vIHJldmVyc2UgdGhlIGNhcmRzXHJcblx0XHR3aGlsZShjYXJkKSB7XHJcblx0XHRcdGNhcmRzLnB1c2goY2FyZCk7XHJcblx0XHRcdGNhcmQgPSBjYXJkLm5leHQ7XHJcblx0XHR9XHJcblx0XHRjYXJkcy5yZXZlcnNlKCk7XHJcblx0XHQvLyByZS1jcmVhdGUgdGhlIGNhcmRzXHJcblx0XHRjYXJkID0gcGlsZTtcclxuXHRcdHdoaWxlKGkgPCBjYXJkcy5sZW5ndGgpIHtcclxuXHRcdFx0Y2FyZC5uZXh0ID0gbmV3IENhcmQoY2FyZHNbaV0uc3VpdCwgY2FyZHNbaV0ucmFuaywgZmFsc2UpO1xyXG5cdFx0XHRjYXJkID0gY2FyZC5uZXh0O1xyXG5cdFx0XHRpKys7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjbG9uZUNhcmQoY2FyZCkge1xyXG5cdFx0bGV0IHJvb3QgPSBuZXcgQ2FyZChjYXJkLnN1aXQsIGNhcmQucmFuaywgY2FyZC51cCksXHJcblx0XHRcdFx0Y2xvbmUgPSByb290O1xyXG5cdFx0d2hpbGUoY2FyZC5uZXh0KSB7XHJcblx0XHRcdGNhcmQgPSBjYXJkLm5leHQ7XHJcblx0XHRcdGNsb25lID0gY2xvbmUubmV4dCA9IG5ldyBDYXJkKGNhcmQuc3VpdCwgY2FyZC5yYW5rLCBjYXJkLnVwKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByb290O1xyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=