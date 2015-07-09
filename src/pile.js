import {bindable, inject} from 'aurelia-framework';
import {pileType} from './pile-type';
import {Game} from './game';

@inject(Game)
export class Pile {
	@bindable
	pile;

	constructor(game) {
		this.game = game;
	}

	bind() {
		this.hasDropTarget = this.pile.type === pileType.tableau || this.pile.type === pileType.foundation;
	}
}