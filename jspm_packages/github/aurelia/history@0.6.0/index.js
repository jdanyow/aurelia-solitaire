/* */ 
define(['exports'], function (exports) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var History = (function () {
    function History() {
      _classCallCheck(this, History);
    }

    History.prototype.activate = function activate(options) {
      throw new Error('History must implement activate().');
    };

    History.prototype.deactivate = function deactivate() {
      throw new Error('History must implement deactivate().');
    };

    History.prototype.navigate = function navigate(fragment, options) {
      throw new Error('History must implement navigate().');
    };

    History.prototype.navigateBack = function navigateBack() {
      throw new Error('History must implement navigateBack().');
    };

    return History;
  })();

  exports.History = History;
});