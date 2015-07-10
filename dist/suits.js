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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1aXRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFXLElBQUksRUF1QkosS0FBSzs7OztBQXZCTCxVQUFJLEdBQUc7QUFDakIsWUFBSSxFQUFFO0FBQ0gsY0FBSSxFQUFFLE1BQU07QUFDWixnQkFBTSxFQUFFLEdBQUc7QUFDWCxlQUFLLEVBQUUsT0FBTztTQUNmO0FBQ0QsZUFBTyxFQUFFO0FBQ1AsY0FBSSxFQUFFLFNBQVM7QUFDZixnQkFBTSxFQUFFLEdBQUc7QUFDWCxlQUFLLEVBQUUsS0FBSztTQUNiO0FBQ0QsYUFBSyxFQUFFO0FBQ0wsY0FBSSxFQUFFLE9BQU87QUFDYixnQkFBTSxFQUFFLEdBQUc7QUFDWCxlQUFLLEVBQUUsT0FBTztTQUNmO0FBQ0QsYUFBSyxFQUFFO0FBQ0wsY0FBSSxFQUFFLE9BQU87QUFDYixnQkFBTSxFQUFFLEdBQUc7QUFDWCxlQUFLLEVBQUUsS0FBSztTQUNiO09BQ0Y7O3NCQXJCVSxJQUFJOztBQXVCSixXQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDOzt1QkFBekQsS0FBSyIsImZpbGUiOiJzdWl0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgc3VpdCA9IHtcclxuXHRjbHViOiB7XHJcbiAgICBuYW1lOiAnY2x1YicsXHJcbiAgICBzeW1ib2w6ICfimaMnLFxyXG4gICAgY29sb3I6ICdibGFjaydcclxuICB9LFxyXG4gIGRpYW1vbmQ6IHtcclxuICAgIG5hbWU6ICdkaWFtb25kJyxcclxuICAgIHN5bWJvbDogJ+KZpicsXHJcbiAgICBjb2xvcjogJ3JlZCdcclxuICB9LFxyXG4gIHNwYWRlOiB7XHJcbiAgICBuYW1lOiAnc3BhZGUnLFxyXG4gICAgc3ltYm9sOiAn4pmgJyxcclxuICAgIGNvbG9yOiAnYmxhY2snXHJcbiAgfSxcclxuICBoZWFydDoge1xyXG4gICAgbmFtZTogJ2hlYXJ0JyxcclxuICAgIHN5bWJvbDogJ+KZpScsXHJcbiAgICBjb2xvcjogJ3JlZCdcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIHN1aXRzID0gW3N1aXQuY2x1Yiwgc3VpdC5kaWFtb25kLCBzdWl0LnNwYWRlLCBzdWl0LmhlYXJ0XTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=