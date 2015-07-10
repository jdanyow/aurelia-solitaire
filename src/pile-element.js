import {bindable, customElement, inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {PlaceholderClickedEvent} from './events';
import {DragAndDrop} from './drag-and-drop';

@customElement('pile')
@inject(EventAggregator, DragAndDrop)
export class PileElement {
	@bindable
	pile;
	dragAndDrop;

	constructor(eventAggregator, dragAndDrop) {
		this.eventAggregator = eventAggregator;
		this.dragAndDrop = dragAndDrop;
	}

	placeholderClicked() {
		if (this.pile.next) {
			return;
		}
		this.eventAggregator.publish(new PlaceholderClickedEvent(this.pile));
	}
}