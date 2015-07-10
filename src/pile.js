export class Pile {
	type;
	canDrag;
	canDrop;
	next = null;

	constructor(type, canDrag, canDrop) {
		this.type = type;
		this.canDrag = canDrag;
		this.canDrop = canDrop;
	}

	getLastCard(orSelf, nextToLast) {
		let card = orSelf ? this : this.next;
		while (card && card.next && (!nextToLast || card.next.next)) {
			card = card.next;
		}
		return card;
	}

	flip() {
		var card = this.next;
		if (card) {
			this.next = this.getLastCard();
			reverse(card)
		}
	}
}

function reverse(card) {
	let next = card.next;
	card.next = null;
	card.up = !card.up;
	if (next) {
		next = reverse(next);
		next.next = card;
	}
	return card;
}
	