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
}
