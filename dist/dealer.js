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

            new Audio('sounds/shuffling-cards.wav').play();

            for (suit = 0; suit < 4; suit++) {
              for (rank = 1; rank < 14; rank++) {
                cards.push(new Card(suits[suit], rank));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlYWxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7eUJBSWEsTUFBTTs7Ozs7O0FBMEJuQixXQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDdEIsUUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU07UUFBRSxjQUFjLFlBQUE7UUFBRSxXQUFXLFlBQUEsQ0FBQzs7QUFHN0QsV0FBTyxDQUFDLEtBQUssWUFBWSxFQUFFO0FBR3pCLGlCQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsWUFBWSxDQUFDLENBQUM7QUFDdkQsa0JBQVksSUFBSSxDQUFDLENBQUM7O0FBR2xCLG9CQUFjLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3JDLFdBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDekMsV0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLGNBQWMsQ0FBQztLQUNyQzs7QUFFRCxXQUFPLEtBQUssQ0FBQztHQUNkOzs7cUJBL0NPLEtBQUs7O21CQUNMLElBQUk7O21CQUNKLElBQUk7OztBQUVDLFlBQU07aUJBQU4sTUFBTTtnQ0FBTixNQUFNOzs7cUJBQU4sTUFBTTs7Ozs7Ozs7Ozs7O2FBR1YsWUFBRztBQUNSLGdCQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUU7Z0JBQUUsSUFBSSxZQUFBO2dCQUFFLElBQUksWUFBQSxDQUFDOztBQUV4QyxnQkFBSSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7QUFFL0MsaUJBQUssSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFO0FBQy9CLG1CQUFLLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRTtBQUNoQyxxQkFBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztlQUN6QzthQUNGO0FBQ0QsbUJBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztXQUNoQjs7O2lCQUVHLGNBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUNoQixnQkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLG1CQUFPLEtBQUssRUFBRSxFQUFFO0FBQ2QsbUJBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUM5QixrQkFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDMUI7V0FDRjs7O2VBdEJVLE1BQU07Ozt3QkFBTixNQUFNIiwiZmlsZSI6ImRlYWxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c3VpdHN9IGZyb20gJy4vc3VpdHMnO1xyXG5pbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7UGlsZX0gZnJvbSAnLi9waWxlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWFsZXIge1xyXG4gIGNhcmRzO1xyXG5cclxuICBzaHVmZmxlKCkge1xyXG4gICAgbGV0IGNhcmRzID0gdGhpcy5jYXJkcyA9IFtdLCBzdWl0LCByYW5rO1xyXG5cclxuICAgIG5ldyBBdWRpbygnc291bmRzL3NodWZmbGluZy1jYXJkcy53YXYnKS5wbGF5KCk7XHJcblxyXG4gICAgZm9yIChzdWl0ID0gMDsgc3VpdCA8IDQ7IHN1aXQrKykge1xyXG4gICAgICBmb3IgKHJhbmsgPSAxOyByYW5rIDwgMTQ7IHJhbmsrKykge1xyXG4gICAgICAgIGNhcmRzLnB1c2gobmV3IENhcmQoc3VpdHNbc3VpdF0sIHJhbmspKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2h1ZmZsZShjYXJkcyk7XHJcbiAgfVxyXG5cclxuICBkZWFsKHBpbGUsIGNvdW50KSB7XHJcbiAgICBsZXQgY2FyZHMgPSB0aGlzLmNhcmRzLnNwbGljZSgwLCBjb3VudCk7XHJcbiAgICB3aGlsZSAoY291bnQtLSkge1xyXG4gICAgICBjYXJkc1tjb3VudF0ubmV4dCA9IHBpbGUubmV4dDtcclxuICAgICAgcGlsZS5uZXh0ID0gY2FyZHNbY291bnRdO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gRmlzaGVyLVlhdGVzIChha2EgS251dGgpIFNodWZmbGVcclxuZnVuY3Rpb24gc2h1ZmZsZShhcnJheSkge1xyXG4gIGxldCBjdXJyZW50SW5kZXggPSBhcnJheS5sZW5ndGgsIHRlbXBvcmFyeVZhbHVlLCByYW5kb21JbmRleDtcclxuXHJcbiAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuLi5cclxuICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XHJcblxyXG4gICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50Li4uXHJcbiAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XHJcbiAgICBjdXJyZW50SW5kZXggLT0gMTtcclxuXHJcbiAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXHJcbiAgICB0ZW1wb3JhcnlWYWx1ZSA9IGFycmF5W2N1cnJlbnRJbmRleF07XHJcbiAgICBhcnJheVtjdXJyZW50SW5kZXhdID0gYXJyYXlbcmFuZG9tSW5kZXhdO1xyXG4gICAgYXJyYXlbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXJyYXk7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=