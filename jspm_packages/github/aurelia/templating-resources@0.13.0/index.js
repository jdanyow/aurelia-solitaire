/* */ 
define(['exports', './compose', './if', './with', './repeat', './show', './global-behavior', './sanitize-html', './replaceable', './focus'], function (exports, _compose, _if, _with, _repeat, _show, _globalBehavior, _sanitizeHtml, _replaceable, _focus) {
  'use strict';

  exports.__esModule = true;

  function configure(aurelia) {
    aurelia.globalizeResources('./compose', './if', './with', './repeat', './show', './replaceable', './global-behavior', './sanitize-html', './focus');
  }

  exports.Compose = _compose.Compose;
  exports.If = _if.If;
  exports.With = _with.With;
  exports.Repeat = _repeat.Repeat;
  exports.Show = _show.Show;
  exports.SanitizeHtmlValueConverter = _sanitizeHtml.SanitizeHtmlValueConverter;
  exports.GlobalBehavior = _globalBehavior.GlobalBehavior;
  exports.Replaceable = _replaceable.Replaceable;
  exports.Focus = _focus.Focus;
  exports.configure = configure;
});