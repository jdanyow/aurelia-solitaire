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

						this.table.moveCard(card, this.waste.getLastCard(true));
						card.up = true;
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

						this.waste.flip();
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
							new Audio('sounds/sheen-just-winning-everyday-defeat-not-an-option.wav').play();
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
//# sourceMappingURL=data:application/json;base64,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QUFFLEtBQUssQ0FBQyxDQUMxQixRQUFRLEtBQVIsUUFBUTtXQUFSLFFBQVE7Ozt1QkFBUixRQUFRIiwiZmlsZSI6Imtsb25kaWtlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7RGVhbGVyfSBmcm9tICcuL2RlYWxlcic7XHJcbmltcG9ydCB7VGFibGV9IGZyb20gJy4vdGFibGUnO1xyXG5pbXBvcnQge1BpbGV9IGZyb20gJy4vcGlsZSc7XHJcbmltcG9ydCB7XHJcbkNhcmRDbGlja2VkRXZlbnQsXHJcbkNhcmREb3VibGVDbGlja2VkRXZlbnQsXHJcblBsYWNlaG9sZGVyQ2xpY2tlZEV2ZW50LFxyXG5DYXJkRHJvcHBlZEV2ZW50XHJcbn0gZnJvbSAnLi9ldmVudHMnO1xyXG5cclxudmFyIHBpbGVUeXBlID0ge1xyXG5cdGRlY2s6ICdkZWNrJyxcclxuXHR3YXN0ZTogJ3dhc3RlJyxcclxuXHRmb3VuZGF0aW9uOiAnZm91bmRhdGlvbicsXHJcblx0dGFibGVhdTogJ3RhYmxlYXUnXHJcbn1cclxuXHJcbkBpbmplY3QoRXZlbnRBZ2dyZWdhdG9yLCBEZWFsZXIsIFRhYmxlKVxyXG5leHBvcnQgY2xhc3MgS2xvbmRpa2Uge1xyXG5cdHdpbiA9IGZhbHNlO1xyXG5cdGRlY2s7XHJcblx0d2FzdGU7XHJcblx0Zm91bmRhdGlvbiA9IFtdO1xyXG5cdHRhYmxlYXUgPSBbXTtcclxuXHR0YWJsZTtcclxuXHJcblx0Y29uc3RydWN0b3IoZXZlbnRBZ2dyZWdhdG9yLCBkZWFsZXIsIHRhYmxlKSB7XHJcblx0XHR0aGlzLnRhYmxlID0gdGFibGU7XHJcblxyXG5cdFx0ZGVhbGVyLnNodWZmbGUoKTtcclxuXHRcdFxyXG5cdFx0Ly8gY3JlYXRlIHRoZSBkZWNrLCB3YXN0ZSwgNCBmb3VuZGF0aW9uIGFuZCA3IHRhYmxlYXUgcGlsZXMuIFxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuXHRcdFx0bGV0IHBpbGUgPSBuZXcgUGlsZShwaWxlVHlwZS5mb3VuZGF0aW9uLCB0cnVlLCB0cnVlKTtcclxuXHRcdFx0dGhpcy5mb3VuZGF0aW9uLnB1c2gocGlsZSk7XHJcblx0XHRcdHRhYmxlLmFkZFBpbGUocGlsZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuXHRcdFx0bGV0IHBpbGUgPSBuZXcgUGlsZShwaWxlVHlwZS50YWJsZWF1LCB0cnVlLCB0cnVlKTtcclxuXHRcdFx0dGhpcy50YWJsZWF1LnB1c2gocGlsZSk7XHJcblx0XHRcdGRlYWxlci5kZWFsKHBpbGUsIGkgKyAxKTtcclxuXHRcdFx0cGlsZS5nZXRMYXN0Q2FyZCgpLnVwID0gdHJ1ZTtcclxuXHRcdFx0dGFibGUuYWRkUGlsZShwaWxlKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmRlY2sgPSBuZXcgUGlsZShwaWxlVHlwZS5kZWNrLCBmYWxzZSwgZmFsc2UpO1xyXG5cdFx0ZGVhbGVyLmRlYWwodGhpcy5kZWNrLCAyNCk7XHJcblx0XHR0YWJsZS5hZGRQaWxlKHRoaXMuZGVjayk7XHJcblxyXG5cdFx0dGhpcy53YXN0ZSA9IG5ldyBQaWxlKHBpbGVUeXBlLndhc3RlLCB0cnVlLCBmYWxzZSk7XHJcblx0XHR0YWJsZS5hZGRQaWxlKHRoaXMud2FzdGUpO1xyXG5cdFx0XHJcblx0XHQvLyBzdWJzY3JpYmUgdG8gZ2FtZSBldmVudHNcclxuXHRcdGV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoQ2FyZENsaWNrZWRFdmVudCwgOjp0aGlzLmNhcmRDbGlja2VkKTtcclxuXHRcdGV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoQ2FyZERvdWJsZUNsaWNrZWRFdmVudCwgOjp0aGlzLmNhcmREb3VibGVDbGlja2VkKTtcclxuXHRcdGV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoQ2FyZERyb3BwZWRFdmVudCwgOjp0aGlzLmNhcmREcm9wcGVkKTtcclxuXHRcdGV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoUGxhY2Vob2xkZXJDbGlja2VkRXZlbnQsIDo6dGhpcy5wbGFjZWhvbGRlckNsaWNrZWQpO1xyXG5cdH1cclxuXHJcblx0Y2FyZENsaWNrZWQoZSkge1xyXG5cdFx0bGV0IGNhcmQgPSBlLmNhcmQsIFxyXG5cdFx0XHRcdHBpbGUgPSB0aGlzLnRhYmxlLmdldFBpbGUoY2FyZCk7XHJcblx0XHRpZiAoY2FyZC5uZXh0IHx8IHBpbGUudHlwZSAhPT0gcGlsZVR5cGUuZGVjaykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHRcdFxyXG5cdFx0Ly8gdG9wIGNhcmQgaW4gZGVjayBwaWxlIGNsaWNrZWQuLi4gd2FzdGUgYSBjYXJkLlxyXG5cdFx0dGhpcy50YWJsZS5tb3ZlQ2FyZChjYXJkLCB0aGlzLndhc3RlLmdldExhc3RDYXJkKHRydWUpKTtcclxuXHRcdGNhcmQudXAgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0Y2FyZERvdWJsZUNsaWNrZWQoZSkge1xyXG5cdFx0bGV0IGNhcmQgPSBlLmNhcmQsXHJcblx0XHRcdHBpbGUgPSB0aGlzLnRhYmxlLmdldFBpbGUoY2FyZCk7XHJcblx0XHQvLyBlbnN1cmUgY2FyZCBpcyBmYWNlIHVwLCB0b3AgY2FyZCwgaW4gd2FzdGUgb3IgdGFibGVhdSBwaWxlcy5cclxuXHRcdGlmICghY2FyZC51cCB8fCBjYXJkLm5leHQgfHwgcGlsZS50eXBlID09PSBwaWxlVHlwZS5mb3VuZGF0aW9uKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly8gYXR0ZW1wdCB0byBmaW5kIGEgZm91bmRhdGlvbiBwaWxlIHRvIHBsYWNlIHRoZSBjYXJkIGluLlxyXG5cdFx0cGlsZSA9IHRoaXMuZm91bmRhdGlvblxyXG5cdFx0XHQubWFwKHBpbGUgPT4gcGlsZS5nZXRMYXN0Q2FyZCh0cnVlKSlcclxuXHRcdFx0LmZpbHRlcihjID0+IGNhcmQucmFuayA9PT0gMSAmJiBjLnR5cGUgPT09IHBpbGVUeXBlLmZvdW5kYXRpb25cclxuXHRcdFx0XHR8fCBjLnN1aXQgPT09IGNhcmQuc3VpdCAmJiBjYXJkLnJhbmsgLSBjLnJhbmsgPT09IDEpWzBdO1xyXG5cdFx0aWYgKCFwaWxlKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnRhYmxlLm1vdmVDYXJkKGNhcmQsIHBpbGUsIHRydWUpO1xyXG5cdFx0dGhpcy5jaGVja1dpbigpO1xyXG5cdH1cclxuXHRcclxuXHRpc1ZhbGlkTW92ZVRvVGFibGVhdShjYXJkLCBwaWxlLCBwaWxlTGFzdCkge1xyXG5cdFx0aWYgKHBpbGUudHlwZSAhPT0gcGlsZVR5cGUudGFibGVhdSkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRpZiAocGlsZS5uZXh0KSB7XHJcblx0XHRcdHJldHVybiBwaWxlTGFzdC5yYW5rIC0gY2FyZC5yYW5rID09PSAxICYmIHBpbGVMYXN0LnN1aXQuY29sb3IgIT09IGNhcmQuc3VpdC5jb2xvcjtcclxuXHRcdH0gXHJcblx0XHRyZXR1cm4gY2FyZC5yYW5rID09PSAxMztcclxuXHR9XHJcblxyXG5cdGlzVmFsaWRNb3ZlVG9Gb3VuZGF0aW9uKGNhcmQsIHBpbGUsIHBpbGVMYXN0KSB7XHJcblx0XHRpZiAocGlsZS50eXBlICE9PSBwaWxlVHlwZS5mb3VuZGF0aW9uKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGlmIChwaWxlLm5leHQpIHtcclxuXHRcdFx0cmV0dXJuIGNhcmQucmFuayAtIHBpbGVMYXN0LnJhbmsgPT09IDEgJiYgcGlsZUxhc3Quc3VpdCA9PT0gY2FyZC5zdWl0O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGNhcmQucmFuayA9PT0gMTtcclxuXHR9XHJcblxyXG5cdGNhcmREcm9wcGVkKGUpIHtcclxuXHRcdGxldCBjYXJkID0gZS5jYXJkLFxyXG5cdFx0XHQgIHBpbGUgPSBlLnBpbGUsXHJcblx0XHRcdCAgcGlsZUxhc3QgPSBwaWxlLmdldExhc3RDYXJkKHRydWUpO1xyXG5cdFx0aWYgKHRoaXMuaXNWYWxpZE1vdmVUb0ZvdW5kYXRpb24oY2FyZCwgcGlsZSwgcGlsZUxhc3QpIHx8IHRoaXMuaXNWYWxpZE1vdmVUb1RhYmxlYXUoY2FyZCwgcGlsZSwgcGlsZUxhc3QpKSB7XHJcblx0XHRcdHRoaXMudGFibGUubW92ZUNhcmQoY2FyZCwgcGlsZUxhc3QsIHRydWUpO1xyXG5cdFx0XHR0aGlzLmNoZWNrV2luKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwbGFjZWhvbGRlckNsaWNrZWQoZSkge1xyXG5cdFx0bGV0IHBpbGUgPSBlLnBpbGU7XHJcblx0XHQvLyBkZWNrIHBsYWNlaG9sZGVyP1xyXG5cdFx0aWYgKHBpbGUgIT09IHRoaXMuZGVjayB8fCAhdGhpcy53YXN0ZS5uZXh0KSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdC8vIHJlc2V0IHRoZSBkZWNrLlxyXG5cdFx0dGhpcy53YXN0ZS5mbGlwKCk7XHJcblx0XHR0aGlzLnRhYmxlLm1vdmVDYXJkKHRoaXMud2FzdGUubmV4dCwgdGhpcy5kZWNrKTtcclxuXHR9XHJcblxyXG5cdGNoZWNrV2luKCkge1xyXG5cdFx0bGV0IGNvbXBsZXRlZFBpbGVzID0gdGhpcy5mb3VuZGF0aW9uXHJcblx0XHRcdC5tYXAocGlsZSA9PiBwaWxlLmdldExhc3RDYXJkKCkpXHJcblx0XHRcdC5maWx0ZXIoY2FyZCA9PiBjYXJkICYmIGNhcmQucmFuayA9PT0gMTMpXHJcblx0XHRcdC5sZW5ndGg7XHJcblx0XHRpZiAoY29tcGxldGVkUGlsZXMgPT09IDQpIHtcclxuXHRcdFx0bmV3IEF1ZGlvKCdzb3VuZHMvc2hlZW4tanVzdC13aW5uaW5nLWV2ZXJ5ZGF5LWRlZmVhdC1ub3QtYW4tb3B0aW9uLndhdicpLnBsYXkoKTtcclxuXHRcdFx0dGhpcy53aW4gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==