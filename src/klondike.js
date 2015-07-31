import {EventAggregator} from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework';
import {Dealer} from './dealer';
import {Table} from './table';
import {Pile} from './pile';
import {
	CardClickedEvent,
	CardDoubleClickedEvent,
	PlaceholderClickedEvent,
	CardDroppedEvent
} from './events';

var pileType = {
	deck: 'deck',
	waste: 'waste',
	foundation: 'foundation',
	tableau: 'tableau'
}

@inject(EventAggregator, Dealer, Table)
export class Klondike {
	win = false;
	deck;
	waste;
	foundation = [];
	tableau = [];
	table;

	constructor(eventAggregator, dealer, table) {
		this.table = table;

		dealer.shuffle();

		// create the deck, waste, 4 foundation and 7 tableau piles.
		for (let i = 0; i < 4; i++) {
			let pile = new Pile(pileType.foundation, true, true);
			this.foundation.push(pile);
			table.addPile(pile);
		}

		for (let i = 0; i < 7; i++) {
			let pile = new Pile(pileType.tableau, true, true);
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

		// subscribe to game events
		eventAggregator.subscribe(CardClickedEvent, ::this.cardClicked);
		eventAggregator.subscribe(CardDoubleClickedEvent, ::this.cardDoubleClicked);
		eventAggregator.subscribe(CardDroppedEvent, ::this.cardDropped);
		eventAggregator.subscribe(PlaceholderClickedEvent, ::this.placeholderClicked);
	}

	cardClicked(e) {
		let card = e.card,
				pile = this.table.getPile(card);
		if (card.next || pile.type !== pileType.deck) {
			return;
		}
		// top card in deck pile clicked... waste a card.
		card.up = true;
		this.table.moveCard(card, this.waste.getLastCard(true));
	}

	cardDoubleClicked(e) {
		let card = e.card,
			  pile = this.table.getPile(card);
		// ensure card is face up, top card, in waste or tableau piles.
		if (!card.up || card.next || pile.type === pileType.foundation) {
			return;
		}

		// attempt to find a foundation pile to place the card in.
		pile = this.foundation
			.map(pile => pile.getLastCard(true))
			.filter(c => card.rank === 1 && c.type === pileType.foundation
				|| c.suit === card.suit && card.rank - c.rank === 1)[0];
		if (!pile) {
			return;
		}

		this.table.moveCard(card, pile, true);
		this.checkWin();
	}

	isValidMoveToTableau(card, pile, pileLast) {
		if (pile.type !== pileType.tableau) {
			return false;
		}
		if (pile.next) {
			return pileLast.rank - card.rank === 1 && pileLast.suit.color !== card.suit.color;
		}
		return card.rank === 13;
	}

	isValidMoveToFoundation(card, pile, pileLast) {
		if (pile.type !== pileType.foundation) {
			return false;
		}
		if (pile.next) {
			return card.rank - pileLast.rank === 1 && pileLast.suit === card.suit;
		}
		return card.rank === 1;
	}

	cardDropped(e) {
		let card = e.card,
			  pile = e.pile,
			  pileLast = pile.getLastCard(true);
		if (this.isValidMoveToFoundation(card, pile, pileLast) || this.isValidMoveToTableau(card, pile, pileLast)) {
			this.table.moveCard(card, pileLast, true);
			this.checkWin();
		}
	}

	placeholderClicked(e) {
		let pile = e.pile;
		// deck placeholder?
		if (pile !== this.deck || !this.waste.next) {
			return;
		}
		// reset the deck.
		this.table.flipPile(this.waste);
		this.table.moveCard(this.waste.next, this.deck);
	}

	checkWin() {
		let completedPiles = this.foundation
			.map(pile => pile.getLastCard())
			.filter(card => card && card.rank === 13)
			.length;
		if (completedPiles === 4) {
			new Audio('sounds/sheen-just-winning-everyday-defeat-not-an-option.mp3').play();
			this.win = true;
		}
	}
}
