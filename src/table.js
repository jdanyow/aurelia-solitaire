import {Card} from './card';

export class Table {
	piles = [];

	addPile(pile) {
		this.piles.push(pile);
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

	moveCard(card, toCardOrPile, reveal) {
		let pile = this.getPile(card), c = pile;
		while (c.next !== card) {
			c = c.next;
		}
		c.next = null;
		if (reveal) {
			c.up = true;
		}
		toCardOrPile.next = this.cloneCard(card);
	}

	flipPile(pile) {
		let card = pile.next,
				cards = [],
				i = 0;
		// detach cards from the pile
		pile.next = null;
		// reverse the cards
		while(card) {
			cards.push(card);
			card = card.next;
		}
		cards.reverse();
		// re-create the cards
		card = pile;
		while(i < cards.length) {
			card.next = new Card(cards[i].suit, cards[i].rank, false);
			card = card.next;
			i++;
		}
	}

	cloneCard(card) {
		let root = new Card(card.suit, card.rank, card.up),
				clone = root;
		while(card.next) {
			card = card.next;
			clone = clone.next = new Card(card.suit, card.rank, card.up);
		}
		return root;
	}
}
