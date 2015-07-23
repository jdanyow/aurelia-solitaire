import dragula from 'dragula';
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {CardDroppedEvent, doubleClickDelay} from './events';
import {Table} from './table';

@inject(EventAggregator, Table)
export class DragAndDrop {
	eventAggregator;
	dragging = false;

	constructor(eventAggregator, table) {
		this.eventAggregator = eventAggregator;

		let dragApi = dragula({
			isContainer: el => {
				if (!el) {
					return false;
				}
				if (dragApi.dragging) {
					return el.classList.contains('drop-target');
				}
				let card;
				return el.classList.contains('drag-source')
					&& (card = el.parentElement.card.card)
					&& card.up
					&& table.getPile(card).canDrag;
			},
			revertOnSpill: true,
			delay: 200
		});

		this.trackDrop(dragApi);
		this.trackDraggingState(dragApi);
	}

	trackDrop(dragApi) {
		dragApi.on('drop', (el, container, source) => {
			let card = source.parentElement.card.card,
				pile = container.parentElement.parentElement.pile.pile;
			dragApi.cancel();
			this.eventAggregator.publish(new CardDroppedEvent(card, pile));
		});
	}

	trackDraggingState(dragApi) {
		let handle;
		dragApi.on('drag', () => {
			handle = setTimeout(() => this.dragging = true, doubleClickDelay + 20);
		});
		dragApi.on('dragend', () => {
			clearTimeout(handle);
			this.dragging = false;
		});
	}
}