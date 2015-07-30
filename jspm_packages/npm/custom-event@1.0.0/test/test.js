/* */ 
var assert = require("assert");
var CE = require("../index");
describe('CustomEvent', function() {
  describe('new CustomEvent()', function() {
    it('should create a `CustomEvent` instance', function() {
      var e = new CE('cat');
      assert.equal(e.type, 'cat');
      assert.equal(e.bubbles, false);
      assert.equal(e.cancelable, false);
      assert.equal(e.detail, undefined);
    });
    it('should create a `CustomEvent` instance with a `details` object', function() {
      var e = new CE('meow', {detail: {foo: 'bar'}});
      assert.equal(e.type, 'meow');
      assert.equal(e.bubbles, false);
      assert.equal(e.cancelable, false);
      assert.equal(e.detail.foo, 'bar');
    });
    it('should create a `CustomEvent` instance with a `bubbles` boolean', function() {
      var e = new CE('purr', {bubbles: true});
      assert.equal(e.type, 'purr');
      assert.equal(e.bubbles, true);
      assert.equal(e.cancelable, false);
      assert.equal(e.detail, undefined);
    });
    it('should create a `CustomEvent` instance with a `cancelable` boolean', function() {
      var e = new CE('scratch', {cancelable: true});
      assert.equal(e.type, 'scratch');
      assert.equal(e.bubbles, false);
      assert.equal(e.cancelable, true);
      assert.equal(e.detail, undefined);
    });
    it('should create a `CustomEvent` instance that is dispatchable', function(done) {
      var e = new CE('claw', {
        bubbles: true,
        cancelable: true,
        detail: {canhaz: 'cheeseburger'}
      });
      function onclaw(ev) {
        if (!ev)
          ev = window.event;
        assert.equal(e.type, 'claw');
        assert.equal(e.bubbles, true);
        assert.equal(e.cancelable, true);
        assert.equal(e.detail.canhaz, 'cheeseburger');
        done();
      }
      if (document.body.dispatchEvent) {
        document.body.addEventListener('claw', onclaw, false);
        document.body.dispatchEvent(e);
      } else {
        document.body.attachEvent('onclick', onclaw);
        setTimeout(function() {
          e.type = 'click';
          e.eventName = 'click';
          e.eventType = 'click';
          document.body.fireEvent('onclick', e);
        }, 50);
      }
    });
  });
});
