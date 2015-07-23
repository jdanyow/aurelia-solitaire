import {suits} from './suits';
import {Card} from './card';
import {Pile} from './pile';

export class Dealer {
  cards;

  shuffle() {
    let cards = this.cards = [], suit, rank;

    new Audio('sounds/shuffling-cards.mp3').play();

    for (suit = 0; suit < 4; suit++) {
      for (rank = 1; rank < 14; rank++) {
        cards.push(new Card(suits[suit], rank));
      }
    }
    shuffle(cards);
  }

  deal(pile, count) {
    let cards = this.cards.splice(0, count);
    while (count--) {
      cards[count].next = pile.next;
      pile.next = cards[count];
    }
  }
}

// Fisher-Yates (aka Knuth) Shuffle
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}