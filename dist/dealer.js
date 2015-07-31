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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlYWxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7eUJBSWEsTUFBTTs7Ozs7O0FBMEJuQixXQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDdEIsUUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU07UUFBRSxjQUFjLFlBQUE7UUFBRSxXQUFXLFlBQUEsQ0FBQzs7QUFHN0QsV0FBTyxDQUFDLEtBQUssWUFBWSxFQUFFO0FBR3pCLGlCQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsWUFBWSxDQUFDLENBQUM7QUFDdkQsa0JBQVksSUFBSSxDQUFDLENBQUM7O0FBR2xCLG9CQUFjLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3JDLFdBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDekMsV0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLGNBQWMsQ0FBQztLQUNyQzs7QUFFRCxXQUFPLEtBQUssQ0FBQztHQUNkOzs7cUJBL0NPLEtBQUs7O21CQUNMLElBQUk7O21CQUNKLElBQUk7OztBQUVDLFlBQU07aUJBQU4sTUFBTTtnQ0FBTixNQUFNOzs7cUJBQU4sTUFBTTs7Ozs7Ozs7Ozs7O2FBR1YsWUFBRztBQUNSLGdCQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUU7Z0JBQUUsSUFBSSxZQUFBO2dCQUFFLElBQUksWUFBQSxDQUFDOztBQUV4QyxnQkFBSSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7QUFFL0MsaUJBQUssSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFO0FBQy9CLG1CQUFLLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRTtBQUNoQyxxQkFBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7ZUFDaEQ7YUFDRjtBQUNELG1CQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7V0FDaEI7OztpQkFFRyxjQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDaEIsZ0JBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN4QyxtQkFBTyxLQUFLLEVBQUUsRUFBRTtBQUNkLG1CQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDOUIsa0JBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFCO1dBQ0Y7OztlQXRCVSxNQUFNOzs7d0JBQU4sTUFBTSIsImZpbGUiOiJkZWFsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3N1aXRzfSBmcm9tICcuL3N1aXRzJztcclxuaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge1BpbGV9IGZyb20gJy4vcGlsZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVhbGVyIHtcclxuICBjYXJkcztcclxuXHJcbiAgc2h1ZmZsZSgpIHtcclxuICAgIGxldCBjYXJkcyA9IHRoaXMuY2FyZHMgPSBbXSwgc3VpdCwgcmFuaztcclxuXHJcbiAgICBuZXcgQXVkaW8oJ3NvdW5kcy9zaHVmZmxpbmctY2FyZHMubXAzJykucGxheSgpO1xyXG5cclxuICAgIGZvciAoc3VpdCA9IDA7IHN1aXQgPCA0OyBzdWl0KyspIHtcclxuICAgICAgZm9yIChyYW5rID0gMTsgcmFuayA8IDE0OyByYW5rKyspIHtcclxuICAgICAgICBjYXJkcy5wdXNoKG5ldyBDYXJkKHN1aXRzW3N1aXRdLCByYW5rLCBmYWxzZSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzaHVmZmxlKGNhcmRzKTtcclxuICB9XHJcblxyXG4gIGRlYWwocGlsZSwgY291bnQpIHtcclxuICAgIGxldCBjYXJkcyA9IHRoaXMuY2FyZHMuc3BsaWNlKDAsIGNvdW50KTtcclxuICAgIHdoaWxlIChjb3VudC0tKSB7XHJcbiAgICAgIGNhcmRzW2NvdW50XS5uZXh0ID0gcGlsZS5uZXh0O1xyXG4gICAgICBwaWxlLm5leHQgPSBjYXJkc1tjb3VudF07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBGaXNoZXItWWF0ZXMgKGFrYSBLbnV0aCkgU2h1ZmZsZVxyXG5mdW5jdGlvbiBzaHVmZmxlKGFycmF5KSB7XHJcbiAgbGV0IGN1cnJlbnRJbmRleCA9IGFycmF5Lmxlbmd0aCwgdGVtcG9yYXJ5VmFsdWUsIHJhbmRvbUluZGV4O1xyXG5cclxuICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxyXG4gIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcclxuXHJcbiAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuLi5cclxuICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcclxuICAgIGN1cnJlbnRJbmRleCAtPSAxO1xyXG5cclxuICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cclxuICAgIHRlbXBvcmFyeVZhbHVlID0gYXJyYXlbY3VycmVudEluZGV4XTtcclxuICAgIGFycmF5W2N1cnJlbnRJbmRleF0gPSBhcnJheVtyYW5kb21JbmRleF07XHJcbiAgICBhcnJheVtyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBhcnJheTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=