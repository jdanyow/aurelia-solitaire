/* */ 
'use strict';
var test = require("tape");
var dragula = require("../dragula");
test('public api matches expectation', function(t) {
  t.equal(typeof dragula, 'function', 'dragula is a function');
  t.end();
});
