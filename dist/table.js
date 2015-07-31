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
//# sourceMappingURL=data:application/json;base64,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RDtBQUNELGFBQU8sSUFBSSxDQUFDO01BQ1o7OztXQTdEVyxLQUFLOzs7b0JBQUwsS0FBSyIsImZpbGUiOiJ0YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2FyZH0gZnJvbSAnLi9jYXJkJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZSB7XHJcblx0cGlsZXMgPSBbXTtcclxuXHJcblx0YWRkUGlsZShwaWxlKSB7XHJcblx0XHR0aGlzLnBpbGVzLnB1c2gocGlsZSk7XHJcblx0fVxyXG5cclxuXHRnZXRQaWxlKGNhcmQpIHtcclxuXHRcdGxldCBpID0gdGhpcy5waWxlcy5sZW5ndGgsIGM7XHJcblx0XHR3aGlsZSAoaS0tKSB7XHJcblx0XHRcdGMgPSB0aGlzLnBpbGVzW2ldLm5leHQ7XHJcblx0XHRcdHdoaWxlIChjICYmIGMgIT09IGNhcmQpIHtcclxuXHRcdFx0XHRjID0gYy5uZXh0O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChjKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMucGlsZXNbaV07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG1vdmVDYXJkKGNhcmQsIHRvQ2FyZE9yUGlsZSwgcmV2ZWFsKSB7XHJcblx0XHRsZXQgcGlsZSA9IHRoaXMuZ2V0UGlsZShjYXJkKSwgYyA9IHBpbGU7XHJcblx0XHR3aGlsZSAoYy5uZXh0ICE9PSBjYXJkKSB7XHJcblx0XHRcdGMgPSBjLm5leHQ7XHJcblx0XHR9XHJcblx0XHRjLm5leHQgPSBudWxsO1xyXG5cdFx0aWYgKHJldmVhbCkge1xyXG5cdFx0XHRjLnVwID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHRvQ2FyZE9yUGlsZS5uZXh0ID0gdGhpcy5jbG9uZUNhcmQoY2FyZCk7XHJcblx0fVxyXG5cclxuXHRmbGlwUGlsZShwaWxlKSB7XHJcblx0XHRsZXQgY2FyZCA9IHBpbGUubmV4dCxcclxuXHRcdFx0XHRjYXJkcyA9IFtdLFxyXG5cdFx0XHRcdGkgPSAwO1xyXG5cdFx0Ly8gZGV0YWNoIGNhcmRzIGZyb20gdGhlIHBpbGVcclxuXHRcdHBpbGUubmV4dCA9IG51bGw7XHJcblx0XHQvLyByZXZlcnNlIHRoZSBjYXJkc1xyXG5cdFx0d2hpbGUoY2FyZCkge1xyXG5cdFx0XHRjYXJkcy5wdXNoKGNhcmQpO1xyXG5cdFx0XHRjYXJkID0gY2FyZC5uZXh0O1xyXG5cdFx0fVxyXG5cdFx0Y2FyZHMucmV2ZXJzZSgpO1xyXG5cdFx0Ly8gcmUtY3JlYXRlIHRoZSBjYXJkc1xyXG5cdFx0Y2FyZCA9IHBpbGU7XHJcblx0XHR3aGlsZShpIDwgY2FyZHMubGVuZ3RoKSB7XHJcblx0XHRcdGNhcmQubmV4dCA9IG5ldyBDYXJkKGNhcmRzW2ldLnN1aXQsIGNhcmRzW2ldLnJhbmssIGZhbHNlKTtcclxuXHRcdFx0Y2FyZCA9IGNhcmQubmV4dDtcclxuXHRcdFx0aSsrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y2xvbmVDYXJkKGNhcmQpIHtcclxuXHRcdGxldCByb290ID0gbmV3IENhcmQoY2FyZC5zdWl0LCBjYXJkLnJhbmssIGNhcmQudXApLFxyXG5cdFx0XHRcdGNsb25lID0gcm9vdDtcclxuXHRcdHdoaWxlKGNhcmQubmV4dCkge1xyXG5cdFx0XHRjYXJkID0gY2FyZC5uZXh0O1xyXG5cdFx0XHRjbG9uZSA9IGNsb25lLm5leHQgPSBuZXcgQ2FyZChjYXJkLnN1aXQsIGNhcmQucmFuaywgY2FyZC51cCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcm9vdDtcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9