import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

export const doubleClickDelay = 500;

class CardEvent {
	card;

	constructor(card) {
		this.card = card;
	}
}

export class CardClickedEvent extends CardEvent {
	handled = false;
}

export class CardDoubleClickedEvent extends CardEvent { }

export class CardDroppedEvent extends CardEvent {
	pile;

	constructor(card, pile) {
		super(card);
		this.pile = pile;
	}
}

export class PlaceholderClickedEvent {
	pile;

	constructor(pile) {
		this.pile = pile;
	}
}

@inject(EventAggregator)
export class CardClickPublisher {
	eventAggregator;
	lastCardClicked;

	constructor(eventAggregator) {
		this.eventAggregator = eventAggregator;
	}

	publish(card) {
		console.log(`${card.rank} of ${card.suit.name}s clicked`);
		let event = new CardClickedEvent(card);

		this.eventAggregator.publish(event);

		if (event.handled) {
			return;
		}

		// double click?
		if (this.lastCardClicked === card) {
			this.lastCardClicked = null;
			this.eventAggregator.publish(new CardDoubleClickedEvent(card));
			return;
		}
		this.lastCardClicked = card;
		setTimeout(() => this.lastCardClicked = null, doubleClickDelay);
	}
}
