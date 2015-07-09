import {suits} from './suits';
import {pileType} from './pile-type';
import {shuffle} from './shuffle';
import dragula from 'dragula';

const doubleClickDelay = 500;

export class Game {	
	piles;
	dragging = false;
	win = false;

	constructor() {
		this.deal();
	}

	attached() {
		let dragApi = dragula({
			isContainer: el => {
				if (el === null) {
					return false;
				}
				if (dragApi.dragging) {
					return el.classList.contains('drop-target');
				}				
				return el.classList.contains('drag-source') 
					&& el.parentNode.card.card
					&& el.parentNode.card.card.up
					&& this.getPile(el.parentNode.card.card).type !== pileType.deck;
			},
			revertOnSpill: true,
			delay: 200
		});

		this.trackDrop(dragApi);
		this.trackDraggingState(dragApi);
	}

	getPile(card) {
		let i = this.piles.length, c;
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

	getLastCard(cardOrPile, nextToLast) {
		while (cardOrPile && cardOrPile.next && (!nextToLast || cardOrPile.next.next)) {
			cardOrPile = cardOrPile.next;
		}
		return cardOrPile;
	}

	detachCard(card) {
		let pile = this.getPile(card), c = pile;
		while (c.next !== card) {
			c = c.next;
		}
		c.next = null;
		if (pile.type === pileType.tableau && pile.next && !c.up) {
			c.up = true;
		}
	}
	
	checkWin() {
		let completedPiles = this.foundationPiles
			.map(pile => this.getLastCard(pile))
			.filter(card => card && card.rank === 13)
			.length;
		if (completedPiles === 4) {
			new Audio('sounds/sheen-just-winning-everyday-defeat-not-an-option.wav').play();
			this.win = true;
		}			
	}

	cardDropped(card, pile) {
		let last = this.getLastCard(pile);
		if (pile.type === pileType.tableau && last.rank - card.rank === 1 && last.suit.color !== card.suit.color
			|| pile.type === pileType.foundation && card.rank - last.rank === 1 && last.suit === card.suit
			|| pile.type === pileType.tableau && last === pile && card.rank === 13
			|| pile.type === pileType.foundation && last === pile && card.rank === 1) {
			this.detachCard(card);
			last.next = card;
			this.checkWin();
		}
	}
	
	cardDoubleClicked(card) {
		let pile = this.getPile(card);
		// ensure card is face up, top card, in waste or tableau piles.
		if (!card.up || card.next || pile.type === pileType.foundation) {
			return;
		}
		// attempt to place card in a foundation pile.
		pile = this.foundationPiles
			.map(pile => this.getLastCard(pile))
			.filter(c => c && c.suit === card.suit && card.rank - c.rank === 1
				|| card.rank === 1 && this.foundationPiles.indexOf(c) !== -1)[0];
		if (!pile) {
			return;
		}
		this.detachCard(card);
		this.getLastCard(pile).next = card;
		this.checkWin();
	}

	cardClicked(card) {
		console.log(`${card.rank} of ${card.suit.name} clicked`);
		let pile = this.getPile(card);
		
		// top card in deck?  waste a card.
		if (!card.next && pile.type === pileType.deck) {
			this.detachCard(card);
			card.up = true;
			this.getLastCard(this.wastePile).next = card;
			return;
		}
		
		// double click?		
		if (this.lastCardClicked === card) {
			this.lastCardClicked = null;
			this.cardDoubleClicked(card);
			return;
		}
		this.lastCardClicked = card;
		setTimeout(() => this.lastCardClicked = null, doubleClickDelay);
	}

	placeHolderClicked(pile) {
		let wasteCard, deckCard;
		// deck placeholder?
		if (pile !== this.deckPile || pile.next) {
			return;
		}
		// reset the deck.
		deckCard = this.deckPile;
		while ((wasteCard = this.getLastCard(this.wastePile, true))) {
			deckCard = deckCard.next = wasteCard.next;
			wasteCard.next = null;
			deckCard.up = false;
		}
	}

	trackDrop(dragApi) {
		dragApi.on('drop', (el, container, source) => {
			let card = source.parentElement.card.card,
				pile = container.parentElement.parentElement.pile.pile;
			dragApi.cancel();
			this.cardDropped(card, pile);
		});
	}

	trackDraggingState(dragApi) {
		let handle;
		dragApi.on('drag', () => {
			handle = setTimeout(() => this.dragging = true, doubleClickDelay + 20);
		});
		dragApi.on('dragend', () => {
			clearTimeout(handle);
			this.dragging = false;
		});
	}

	deal() {
		let cards = [], suit, rank;

		new Audio('sounds/shuffling-cards.wav').play();

		for (suit = 0; suit < 4; suit++) {
			for (rank = 1; rank < 14; rank++) {
				cards.push({ rank: rank, suit: suits[suit], up: false, next: null });
			}
		}
		shuffle(cards);

		this.piles = [
			{ type: pileType.deck, next: null },
			{ type: pileType.waste, next: null },
			{ type: pileType.foundation, next: null },
			{ type: pileType.foundation, next: null },
			{ type: pileType.foundation, next: null },
			{ type: pileType.foundation, next: null },
			{ type: pileType.tableau, next: null },
			{ type: pileType.tableau, next: null },
			{ type: pileType.tableau, next: null },
			{ type: pileType.tableau, next: null },
			{ type: pileType.tableau, next: null },
			{ type: pileType.tableau, next: null },
			{ type: pileType.tableau, next: null },
		];

		this.deckPile = this.piles[0];
		this.wastePile = this.piles[1];
		this.foundationPiles = this.piles.slice(2, 6);
		
		// tableau
		let i = 7, j, k = 0;
		while (i--) {
			j = i;
			while (j--) {
				cards[k].next = cards[k + 1];
				k++;
			}
			this.piles[i + 6].next = cards[k - i];
			cards[k].up = true;
			k++;
		}
		
		// deck
		this.piles[0].next = cards[k];
		while (k < cards.length - 1) {
			cards[k].next = cards[k + 1];
			k++;
		}
	}
}
