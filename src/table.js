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
		toCardOrPile.next = card;
	}
}