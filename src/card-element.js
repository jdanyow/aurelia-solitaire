import {bindable, customElement} from 'aurelia-framework';

@customElement('card')
export class CardElement {
	@bindable
	card;
}
