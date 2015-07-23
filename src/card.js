export class Card {
	suit;
	rank;
	up = false;
	next = null;

	constructor(suit, rank) {
		this.suit = suit;
		this.rank = rank;
	}

	toString() {
		return `${this.rank}${this.suit.symbol}${this.up ? '^' : ''}`;
	}
}
