import {bindable, customElement, inject} from 'aurelia-framework';
import {Game} from './game';

@customElement('card')
@inject(Game)
export class Card {
	@bindable
	card;
	upSrc;
	downSrc;

	constructor(game) {
		this.game = game;
	}

	bind() {
		this.upSrc = 'img/' + this.card.rank + '-' + this.card.suit.name + '.svg';
		this.downSrc = 'img/back.png';
	}

	click() {
		this.game.cardClicked(this.card);
	}
}