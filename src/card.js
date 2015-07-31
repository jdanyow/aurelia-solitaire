export class Card {
	suit;
	rank;
	up;
	next = null;

	constructor(suit, rank, up) {
		this.suit = suit;
		this.rank = rank;
		this.up = up;
	}
}
