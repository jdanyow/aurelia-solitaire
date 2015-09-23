System.register(['./suits', './card', './pile'], function (_export) {
  'use strict';

  var suits, Card, Pile, Dealer;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue = undefined,
        randomIndex = undefined;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  return {
    setters: [function (_suits) {
      suits = _suits.suits;
    }, function (_card) {
      Card = _card.Card;
    }, function (_pile) {
      Pile = _pile.Pile;
    }],
    execute: function () {
      Dealer = (function () {
        function Dealer() {
          _classCallCheck(this, Dealer);
        }

        _createClass(Dealer, [{
          key: 'shuffle',
          value: (function (_shuffle) {
            function shuffle() {
              return _shuffle.apply(this, arguments);
            }

            shuffle.toString = function () {
              return _shuffle.toString();
            };

            return shuffle;
          })(function () {
            var cards = this.cards = [],
                suit = undefined,
                rank = undefined;

            new Audio('sounds/shuffling-cards.mp3').play();

            for (suit = 0; suit < 4; suit++) {
              for (rank = 1; rank < 14; rank++) {
                cards.push(new Card(suits[suit], rank, false));
              }
            }
            shuffle(cards);
          })
        }, {
          key: 'deal',
          value: function deal(pile, count) {
            var cards = this.cards.splice(0, count);
            while (count--) {
              cards[count].next = pile.next;
              pile.next = cards[count];
            }
          }
        }]);

        return Dealer;
      })();

      _export('Dealer', Dealer);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlYWxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7eUJBSWEsTUFBTTs7Ozs7O0FBMEJuQixXQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDdEIsUUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU07UUFBRSxjQUFjLFlBQUE7UUFBRSxXQUFXLFlBQUEsQ0FBQzs7QUFHN0QsV0FBTyxDQUFDLEtBQUssWUFBWSxFQUFFO0FBR3pCLGlCQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsWUFBWSxDQUFDLENBQUM7QUFDdkQsa0JBQVksSUFBSSxDQUFDLENBQUM7O0FBR2xCLG9CQUFjLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3JDLFdBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDekMsV0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLGNBQWMsQ0FBQztLQUNyQzs7QUFFRCxXQUFPLEtBQUssQ0FBQztHQUNkOzs7cUJBL0NPLEtBQUs7O21CQUNMLElBQUk7O21CQUNKLElBQUk7OztBQUVDLFlBQU07aUJBQU4sTUFBTTtnQ0FBTixNQUFNOzs7cUJBQU4sTUFBTTs7Ozs7Ozs7Ozs7O2FBR1YsWUFBRztBQUNSLGdCQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUU7Z0JBQUUsSUFBSSxZQUFBO2dCQUFFLElBQUksWUFBQSxDQUFDOztBQUV4QyxnQkFBSSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7QUFFL0MsaUJBQUssSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFO0FBQy9CLG1CQUFLLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRTtBQUNoQyxxQkFBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7ZUFDaEQ7YUFDRjtBQUNELG1CQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7V0FDaEI7OztpQkFFRyxjQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDaEIsZ0JBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN4QyxtQkFBTyxLQUFLLEVBQUUsRUFBRTtBQUNkLG1CQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDOUIsa0JBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFCO1dBQ0Y7OztlQXRCVSxNQUFNIiwiZmlsZSI6ImRlYWxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c3VpdHN9IGZyb20gJy4vc3VpdHMnO1xyXG5pbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7UGlsZX0gZnJvbSAnLi9waWxlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWFsZXIge1xyXG4gIGNhcmRzO1xyXG5cclxuICBzaHVmZmxlKCkge1xyXG4gICAgbGV0IGNhcmRzID0gdGhpcy5jYXJkcyA9IFtdLCBzdWl0LCByYW5rO1xyXG5cclxuICAgIG5ldyBBdWRpbygnc291bmRzL3NodWZmbGluZy1jYXJkcy5tcDMnKS5wbGF5KCk7XHJcblxyXG4gICAgZm9yIChzdWl0ID0gMDsgc3VpdCA8IDQ7IHN1aXQrKykge1xyXG4gICAgICBmb3IgKHJhbmsgPSAxOyByYW5rIDwgMTQ7IHJhbmsrKykge1xyXG4gICAgICAgIGNhcmRzLnB1c2gobmV3IENhcmQoc3VpdHNbc3VpdF0sIHJhbmssIGZhbHNlKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNodWZmbGUoY2FyZHMpO1xyXG4gIH1cclxuXHJcbiAgZGVhbChwaWxlLCBjb3VudCkge1xyXG4gICAgbGV0IGNhcmRzID0gdGhpcy5jYXJkcy5zcGxpY2UoMCwgY291bnQpO1xyXG4gICAgd2hpbGUgKGNvdW50LS0pIHtcclxuICAgICAgY2FyZHNbY291bnRdLm5leHQgPSBwaWxlLm5leHQ7XHJcbiAgICAgIHBpbGUubmV4dCA9IGNhcmRzW2NvdW50XTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEZpc2hlci1ZYXRlcyAoYWthIEtudXRoKSBTaHVmZmxlXHJcbmZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcclxuICBsZXQgY3VycmVudEluZGV4ID0gYXJyYXkubGVuZ3RoLCB0ZW1wb3JhcnlWYWx1ZSwgcmFuZG9tSW5kZXg7XHJcblxyXG4gIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXHJcbiAgd2hpbGUgKDAgIT09IGN1cnJlbnRJbmRleCkge1xyXG5cclxuICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxyXG4gICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xyXG4gICAgY3VycmVudEluZGV4IC09IDE7XHJcblxyXG4gICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxyXG4gICAgdGVtcG9yYXJ5VmFsdWUgPSBhcnJheVtjdXJyZW50SW5kZXhdO1xyXG4gICAgYXJyYXlbY3VycmVudEluZGV4XSA9IGFycmF5W3JhbmRvbUluZGV4XTtcclxuICAgIGFycmF5W3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGFycmF5O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==