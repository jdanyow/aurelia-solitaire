System.register(['aurelia-event-aggregator', 'aurelia-framework', './dealer', './table', './pile', './events'], function (_export) {
	'use strict';

	var EventAggregator, inject, Dealer, Table, Pile, CardClickedEvent, CardDoubleClickedEvent, PlaceholderClickedEvent, CardDroppedEvent, pileType, Klondike;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaEventAggregator) {
			EventAggregator = _aureliaEventAggregator.EventAggregator;
		}, function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}, function (_dealer) {
			Dealer = _dealer.Dealer;
		}, function (_table) {
			Table = _table.Table;
		}, function (_pile) {
			Pile = _pile.Pile;
		}, function (_events) {
			CardClickedEvent = _events.CardClickedEvent;
			CardDoubleClickedEvent = _events.CardDoubleClickedEvent;
			PlaceholderClickedEvent = _events.PlaceholderClickedEvent;
			CardDroppedEvent = _events.CardDroppedEvent;
		}],
		execute: function () {
			pileType = {
				deck: 'deck',
				waste: 'waste',
				foundation: 'foundation',
				tableau: 'tableau'
			};

			Klondike = (function () {
				function Klondike(eventAggregator, dealer, table) {
					_classCallCheck(this, _Klondike);

					this.win = false;
					this.foundation = [];
					this.tableau = [];

					this.table = table;

					dealer.shuffle();

					for (var i = 0; i < 4; i++) {
						var pile = new Pile(pileType.foundation, true, true);
						this.foundation.push(pile);
						table.addPile(pile);
					}

					for (var i = 0; i < 7; i++) {
						var pile = new Pile(pileType.tableau, true, true);
						this.tableau.push(pile);
						dealer.deal(pile, i + 1);
						pile.getLastCard().up = true;
						table.addPile(pile);
					}

					this.deck = new Pile(pileType.deck, false, false);
					dealer.deal(this.deck, 24);
					table.addPile(this.deck);

					this.waste = new Pile(pileType.waste, true, false);
					table.addPile(this.waste);

					eventAggregator.subscribe(CardClickedEvent, this.cardClicked.bind(this));
					eventAggregator.subscribe(CardDoubleClickedEvent, this.cardDoubleClicked.bind(this));
					eventAggregator.subscribe(CardDroppedEvent, this.cardDropped.bind(this));
					eventAggregator.subscribe(PlaceholderClickedEvent, this.placeholderClicked.bind(this));
				}

				var _Klondike = Klondike;

				_createClass(_Klondike, [{
					key: 'cardClicked',
					value: function cardClicked(e) {
						var card = e.card,
						    pile = this.table.getPile(card);
						if (card.next || pile.type !== pileType.deck) {
							return;
						}

						card.up = true;
						this.table.moveCard(card, this.waste.getLastCard(true));
					}
				}, {
					key: 'cardDoubleClicked',
					value: function cardDoubleClicked(e) {
						var card = e.card,
						    pile = this.table.getPile(card);

						if (!card.up || card.next || pile.type === pileType.foundation) {
							return;
						}

						pile = this.foundation.map(function (pile) {
							return pile.getLastCard(true);
						}).filter(function (c) {
							return card.rank === 1 && c.type === pileType.foundation || c.suit === card.suit && card.rank - c.rank === 1;
						})[0];
						if (!pile) {
							return;
						}

						this.table.moveCard(card, pile, true);
						this.checkWin();
					}
				}, {
					key: 'isValidMoveToTableau',
					value: function isValidMoveToTableau(card, pile, pileLast) {
						if (pile.type !== pileType.tableau) {
							return false;
						}
						if (pile.next) {
							return pileLast.rank - card.rank === 1 && pileLast.suit.color !== card.suit.color;
						}
						return card.rank === 13;
					}
				}, {
					key: 'isValidMoveToFoundation',
					value: function isValidMoveToFoundation(card, pile, pileLast) {
						if (pile.type !== pileType.foundation) {
							return false;
						}
						if (pile.next) {
							return card.rank - pileLast.rank === 1 && pileLast.suit === card.suit;
						}
						return card.rank === 1;
					}
				}, {
					key: 'cardDropped',
					value: function cardDropped(e) {
						var card = e.card,
						    pile = e.pile,
						    pileLast = pile.getLastCard(true);
						if (this.isValidMoveToFoundation(card, pile, pileLast) || this.isValidMoveToTableau(card, pile, pileLast)) {
							this.table.moveCard(card, pileLast, true);
							this.checkWin();
						}
					}
				}, {
					key: 'placeholderClicked',
					value: function placeholderClicked(e) {
						var pile = e.pile;

						if (pile !== this.deck || !this.waste.next) {
							return;
						}

						this.table.flipPile(this.waste);
						this.table.moveCard(this.waste.next, this.deck);
					}
				}, {
					key: 'checkWin',
					value: function checkWin() {
						var completedPiles = this.foundation.map(function (pile) {
							return pile.getLastCard();
						}).filter(function (card) {
							return card && card.rank === 13;
						}).length;
						if (completedPiles === 4) {
							new Audio('sounds/sheen-just-winning-everyday-defeat-not-an-option.mp3').play();
							this.win = true;
						}
					}
				}]);

				Klondike = inject(EventAggregator, Dealer, Table)(Klondike) || Klondike;
				return Klondike;
			})();

			_export('Klondike', Klondike);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,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QUMsZUFBZSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FDMUIsUUFBUSxLQUFSLFFBQVE7V0FBUixRQUFROzs7dUJBQVIsUUFBUSIsImZpbGUiOiJrbG9uZGlrZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0RlYWxlcn0gZnJvbSAnLi9kZWFsZXInO1xyXG5pbXBvcnQge1RhYmxlfSBmcm9tICcuL3RhYmxlJztcclxuaW1wb3J0IHtQaWxlfSBmcm9tICcuL3BpbGUnO1xyXG5pbXBvcnQge1xyXG5cdENhcmRDbGlja2VkRXZlbnQsXHJcblx0Q2FyZERvdWJsZUNsaWNrZWRFdmVudCxcclxuXHRQbGFjZWhvbGRlckNsaWNrZWRFdmVudCxcclxuXHRDYXJkRHJvcHBlZEV2ZW50XHJcbn0gZnJvbSAnLi9ldmVudHMnO1xyXG5cclxudmFyIHBpbGVUeXBlID0ge1xyXG5cdGRlY2s6ICdkZWNrJyxcclxuXHR3YXN0ZTogJ3dhc3RlJyxcclxuXHRmb3VuZGF0aW9uOiAnZm91bmRhdGlvbicsXHJcblx0dGFibGVhdTogJ3RhYmxlYXUnXHJcbn1cclxuXHJcbkBpbmplY3QoRXZlbnRBZ2dyZWdhdG9yLCBEZWFsZXIsIFRhYmxlKVxyXG5leHBvcnQgY2xhc3MgS2xvbmRpa2Uge1xyXG5cdHdpbiA9IGZhbHNlO1xyXG5cdGRlY2s7XHJcblx0d2FzdGU7XHJcblx0Zm91bmRhdGlvbiA9IFtdO1xyXG5cdHRhYmxlYXUgPSBbXTtcclxuXHR0YWJsZTtcclxuXHJcblx0Y29uc3RydWN0b3IoZXZlbnRBZ2dyZWdhdG9yLCBkZWFsZXIsIHRhYmxlKSB7XHJcblx0XHR0aGlzLnRhYmxlID0gdGFibGU7XHJcblxyXG5cdFx0ZGVhbGVyLnNodWZmbGUoKTtcclxuXHJcblx0XHQvLyBjcmVhdGUgdGhlIGRlY2ssIHdhc3RlLCA0IGZvdW5kYXRpb24gYW5kIDcgdGFibGVhdSBwaWxlcy5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcblx0XHRcdGxldCBwaWxlID0gbmV3IFBpbGUocGlsZVR5cGUuZm91bmRhdGlvbiwgdHJ1ZSwgdHJ1ZSk7XHJcblx0XHRcdHRoaXMuZm91bmRhdGlvbi5wdXNoKHBpbGUpO1xyXG5cdFx0XHR0YWJsZS5hZGRQaWxlKHBpbGUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XHJcblx0XHRcdGxldCBwaWxlID0gbmV3IFBpbGUocGlsZVR5cGUudGFibGVhdSwgdHJ1ZSwgdHJ1ZSk7XHJcblx0XHRcdHRoaXMudGFibGVhdS5wdXNoKHBpbGUpO1xyXG5cdFx0XHRkZWFsZXIuZGVhbChwaWxlLCBpICsgMSk7XHJcblx0XHRcdHBpbGUuZ2V0TGFzdENhcmQoKS51cCA9IHRydWU7XHJcblx0XHRcdHRhYmxlLmFkZFBpbGUocGlsZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5kZWNrID0gbmV3IFBpbGUocGlsZVR5cGUuZGVjaywgZmFsc2UsIGZhbHNlKTtcclxuXHRcdGRlYWxlci5kZWFsKHRoaXMuZGVjaywgMjQpO1xyXG5cdFx0dGFibGUuYWRkUGlsZSh0aGlzLmRlY2spO1xyXG5cclxuXHRcdHRoaXMud2FzdGUgPSBuZXcgUGlsZShwaWxlVHlwZS53YXN0ZSwgdHJ1ZSwgZmFsc2UpO1xyXG5cdFx0dGFibGUuYWRkUGlsZSh0aGlzLndhc3RlKTtcclxuXHJcblx0XHQvLyBzdWJzY3JpYmUgdG8gZ2FtZSBldmVudHNcclxuXHRcdGV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoQ2FyZENsaWNrZWRFdmVudCwgOjp0aGlzLmNhcmRDbGlja2VkKTtcclxuXHRcdGV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoQ2FyZERvdWJsZUNsaWNrZWRFdmVudCwgOjp0aGlzLmNhcmREb3VibGVDbGlja2VkKTtcclxuXHRcdGV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoQ2FyZERyb3BwZWRFdmVudCwgOjp0aGlzLmNhcmREcm9wcGVkKTtcclxuXHRcdGV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoUGxhY2Vob2xkZXJDbGlja2VkRXZlbnQsIDo6dGhpcy5wbGFjZWhvbGRlckNsaWNrZWQpO1xyXG5cdH1cclxuXHJcblx0Y2FyZENsaWNrZWQoZSkge1xyXG5cdFx0bGV0IGNhcmQgPSBlLmNhcmQsXHJcblx0XHRcdFx0cGlsZSA9IHRoaXMudGFibGUuZ2V0UGlsZShjYXJkKTtcclxuXHRcdGlmIChjYXJkLm5leHQgfHwgcGlsZS50eXBlICE9PSBwaWxlVHlwZS5kZWNrKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdC8vIHRvcCBjYXJkIGluIGRlY2sgcGlsZSBjbGlja2VkLi4uIHdhc3RlIGEgY2FyZC5cclxuXHRcdGNhcmQudXAgPSB0cnVlO1xyXG5cdFx0dGhpcy50YWJsZS5tb3ZlQ2FyZChjYXJkLCB0aGlzLndhc3RlLmdldExhc3RDYXJkKHRydWUpKTtcclxuXHR9XHJcblxyXG5cdGNhcmREb3VibGVDbGlja2VkKGUpIHtcclxuXHRcdGxldCBjYXJkID0gZS5jYXJkLFxyXG5cdFx0XHQgIHBpbGUgPSB0aGlzLnRhYmxlLmdldFBpbGUoY2FyZCk7XHJcblx0XHQvLyBlbnN1cmUgY2FyZCBpcyBmYWNlIHVwLCB0b3AgY2FyZCwgaW4gd2FzdGUgb3IgdGFibGVhdSBwaWxlcy5cclxuXHRcdGlmICghY2FyZC51cCB8fCBjYXJkLm5leHQgfHwgcGlsZS50eXBlID09PSBwaWxlVHlwZS5mb3VuZGF0aW9uKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBhdHRlbXB0IHRvIGZpbmQgYSBmb3VuZGF0aW9uIHBpbGUgdG8gcGxhY2UgdGhlIGNhcmQgaW4uXHJcblx0XHRwaWxlID0gdGhpcy5mb3VuZGF0aW9uXHJcblx0XHRcdC5tYXAocGlsZSA9PiBwaWxlLmdldExhc3RDYXJkKHRydWUpKVxyXG5cdFx0XHQuZmlsdGVyKGMgPT4gY2FyZC5yYW5rID09PSAxICYmIGMudHlwZSA9PT0gcGlsZVR5cGUuZm91bmRhdGlvblxyXG5cdFx0XHRcdHx8IGMuc3VpdCA9PT0gY2FyZC5zdWl0ICYmIGNhcmQucmFuayAtIGMucmFuayA9PT0gMSlbMF07XHJcblx0XHRpZiAoIXBpbGUpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudGFibGUubW92ZUNhcmQoY2FyZCwgcGlsZSwgdHJ1ZSk7XHJcblx0XHR0aGlzLmNoZWNrV2luKCk7XHJcblx0fVxyXG5cclxuXHRpc1ZhbGlkTW92ZVRvVGFibGVhdShjYXJkLCBwaWxlLCBwaWxlTGFzdCkge1xyXG5cdFx0aWYgKHBpbGUudHlwZSAhPT0gcGlsZVR5cGUudGFibGVhdSkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRpZiAocGlsZS5uZXh0KSB7XHJcblx0XHRcdHJldHVybiBwaWxlTGFzdC5yYW5rIC0gY2FyZC5yYW5rID09PSAxICYmIHBpbGVMYXN0LnN1aXQuY29sb3IgIT09IGNhcmQuc3VpdC5jb2xvcjtcclxuXHRcdH1cclxuXHRcdHJldHVybiBjYXJkLnJhbmsgPT09IDEzO1xyXG5cdH1cclxuXHJcblx0aXNWYWxpZE1vdmVUb0ZvdW5kYXRpb24oY2FyZCwgcGlsZSwgcGlsZUxhc3QpIHtcclxuXHRcdGlmIChwaWxlLnR5cGUgIT09IHBpbGVUeXBlLmZvdW5kYXRpb24pIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHBpbGUubmV4dCkge1xyXG5cdFx0XHRyZXR1cm4gY2FyZC5yYW5rIC0gcGlsZUxhc3QucmFuayA9PT0gMSAmJiBwaWxlTGFzdC5zdWl0ID09PSBjYXJkLnN1aXQ7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gY2FyZC5yYW5rID09PSAxO1xyXG5cdH1cclxuXHJcblx0Y2FyZERyb3BwZWQoZSkge1xyXG5cdFx0bGV0IGNhcmQgPSBlLmNhcmQsXHJcblx0XHRcdCAgcGlsZSA9IGUucGlsZSxcclxuXHRcdFx0ICBwaWxlTGFzdCA9IHBpbGUuZ2V0TGFzdENhcmQodHJ1ZSk7XHJcblx0XHRpZiAodGhpcy5pc1ZhbGlkTW92ZVRvRm91bmRhdGlvbihjYXJkLCBwaWxlLCBwaWxlTGFzdCkgfHwgdGhpcy5pc1ZhbGlkTW92ZVRvVGFibGVhdShjYXJkLCBwaWxlLCBwaWxlTGFzdCkpIHtcclxuXHRcdFx0dGhpcy50YWJsZS5tb3ZlQ2FyZChjYXJkLCBwaWxlTGFzdCwgdHJ1ZSk7XHJcblx0XHRcdHRoaXMuY2hlY2tXaW4oKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHBsYWNlaG9sZGVyQ2xpY2tlZChlKSB7XHJcblx0XHRsZXQgcGlsZSA9IGUucGlsZTtcclxuXHRcdC8vIGRlY2sgcGxhY2Vob2xkZXI/XHJcblx0XHRpZiAocGlsZSAhPT0gdGhpcy5kZWNrIHx8ICF0aGlzLndhc3RlLm5leHQpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0Ly8gcmVzZXQgdGhlIGRlY2suXHJcblx0XHR0aGlzLnRhYmxlLmZsaXBQaWxlKHRoaXMud2FzdGUpO1xyXG5cdFx0dGhpcy50YWJsZS5tb3ZlQ2FyZCh0aGlzLndhc3RlLm5leHQsIHRoaXMuZGVjayk7XHJcblx0fVxyXG5cclxuXHRjaGVja1dpbigpIHtcclxuXHRcdGxldCBjb21wbGV0ZWRQaWxlcyA9IHRoaXMuZm91bmRhdGlvblxyXG5cdFx0XHQubWFwKHBpbGUgPT4gcGlsZS5nZXRMYXN0Q2FyZCgpKVxyXG5cdFx0XHQuZmlsdGVyKGNhcmQgPT4gY2FyZCAmJiBjYXJkLnJhbmsgPT09IDEzKVxyXG5cdFx0XHQubGVuZ3RoO1xyXG5cdFx0aWYgKGNvbXBsZXRlZFBpbGVzID09PSA0KSB7XHJcblx0XHRcdG5ldyBBdWRpbygnc291bmRzL3NoZWVuLWp1c3Qtd2lubmluZy1ldmVyeWRheS1kZWZlYXQtbm90LWFuLW9wdGlvbi5tcDMnKS5wbGF5KCk7XHJcblx0XHRcdHRoaXMud2luID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9