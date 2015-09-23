import {bindable, customElement, inject} from 'aurelia-framework';
import {CardClickPublisher} from './events';

@customElement('card')
@inject(CardClickPublisher)
export class CardElement {
	@bindable
	card;
	src;
	clickPublisher;

	constructor(clickPublisher) {
		this.clickPublisher = clickPublisher;
	}

	cardChanged() {		
		this.src = this.card ? `img/${this.card.rank}_of_${this.card.suit.name}s.png` : '';
	}

	click() {
		if (this.card.next) {
			return;
		}
		this.clickPublisher.publish(this.card);
	}
}
