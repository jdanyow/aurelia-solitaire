export class Klondike {
	deck;
	waste;

	constructor() {
		this.deck = {
			next: {
				rank: 1,
				next: {
					rank: 2,
					next: null
				}
			}
		};
		this.waste = { next: null };
		this.one = this.deck.next;
		this.two = this.one.next;
	}

	start() {
		var steps = [
				() => {
					// click the deck
					var card = this.deck.next.next;
					this.deck.next.next = null;
					this.waste.next = card;
				},
				() => {
					// click the deck
					var card = this.deck.next;
					this.deck.next = null;
					this.waste.next.next = card;
				},
				() => {
					// click the deck placeholder (deck empty)
					// this.deck.next = this.waste.next.next;
					// this.deck.next.next = this.waste.next;
					// this.deck.next.next.next = null;
					// this.waste.next = null;

					var card;
					card = this.waste.next.next;
					this.waste.next.next = null;
					this.deck.next = card;
					card = this.waste.next;
					this.waste.next = null;
					this.deck.next.next = card;
				}
			],
			i = 0, j = 0,
			next = () => {
				if (j === 6) {
					debugger;
				}
				steps[i]();
				i++;
				j++;
				if (i === steps.length) {
					i = 0;
				}
				setTimeout(() => next(), 1000);
			};
		next();
	}
}
