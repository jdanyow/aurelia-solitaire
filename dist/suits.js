System.register([], function (_export) {
  'use strict';

  var suit, suits;
  return {
    setters: [],
    execute: function () {
      suit = {
        club: {
          name: 'club',
          symbol: '♣',
          color: 'black'
        },
        diamond: {
          name: 'diamond',
          symbol: '♦',
          color: 'red'
        },
        spade: {
          name: 'spade',
          symbol: '♠',
          color: 'black'
        },
        heart: {
          name: 'heart',
          symbol: '♥',
          color: 'red'
        }
      };

      _export('suit', suit);

      suits = [suit.club, suit.diamond, suit.spade, suit.heart];

      _export('suits', suits);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1aXRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFXLElBQUksRUF1QkosS0FBSzs7OztBQXZCTCxVQUFJLEdBQUc7QUFDakIsWUFBSSxFQUFFO0FBQ0gsY0FBSSxFQUFFLE1BQU07QUFDWixnQkFBTSxFQUFFLEdBQUc7QUFDWCxlQUFLLEVBQUUsT0FBTztTQUNmO0FBQ0QsZUFBTyxFQUFFO0FBQ1AsY0FBSSxFQUFFLFNBQVM7QUFDZixnQkFBTSxFQUFFLEdBQUc7QUFDWCxlQUFLLEVBQUUsS0FBSztTQUNiO0FBQ0QsYUFBSyxFQUFFO0FBQ0wsY0FBSSxFQUFFLE9BQU87QUFDYixnQkFBTSxFQUFFLEdBQUc7QUFDWCxlQUFLLEVBQUUsT0FBTztTQUNmO0FBQ0QsYUFBSyxFQUFFO0FBQ0wsY0FBSSxFQUFFLE9BQU87QUFDYixnQkFBTSxFQUFFLEdBQUc7QUFDWCxlQUFLLEVBQUUsS0FBSztTQUNiO09BQ0Y7Ozs7QUFFVSxXQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDIiwiZmlsZSI6InN1aXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBzdWl0ID0ge1xyXG5cdGNsdWI6IHtcclxuICAgIG5hbWU6ICdjbHViJyxcclxuICAgIHN5bWJvbDogJ+KZoycsXHJcbiAgICBjb2xvcjogJ2JsYWNrJ1xyXG4gIH0sXHJcbiAgZGlhbW9uZDoge1xyXG4gICAgbmFtZTogJ2RpYW1vbmQnLFxyXG4gICAgc3ltYm9sOiAn4pmmJyxcclxuICAgIGNvbG9yOiAncmVkJ1xyXG4gIH0sXHJcbiAgc3BhZGU6IHtcclxuICAgIG5hbWU6ICdzcGFkZScsXHJcbiAgICBzeW1ib2w6ICfimaAnLFxyXG4gICAgY29sb3I6ICdibGFjaydcclxuICB9LFxyXG4gIGhlYXJ0OiB7XHJcbiAgICBuYW1lOiAnaGVhcnQnLFxyXG4gICAgc3ltYm9sOiAn4pmlJyxcclxuICAgIGNvbG9yOiAncmVkJ1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB2YXIgc3VpdHMgPSBbc3VpdC5jbHViLCBzdWl0LmRpYW1vbmQsIHN1aXQuc3BhZGUsIHN1aXQuaGVhcnRdOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==