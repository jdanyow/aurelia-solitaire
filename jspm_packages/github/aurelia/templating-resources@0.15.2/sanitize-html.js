define(['exports', 'aurelia-binding'], function (exports, _aureliaBinding) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

  var SanitizeHtmlValueConverter = (function () {
    SanitizeHtmlValueConverter.defaultSanitizer = function defaultSanitizer(untrustedMarkup) {
      return untrustedMarkup.replace(SCRIPT_REGEX, '');
    };

    function SanitizeHtmlValueConverter() {
      _classCallCheck(this, _SanitizeHtmlValueConverter);

      this.sanitizer = SanitizeHtmlValueConverter.defaultSanitizer;
    }

    SanitizeHtmlValueConverter.prototype.toView = function toView(untrustedMarkup) {
      if (untrustedMarkup === null) {
        return null;
      }

      return this.sanitizer(untrustedMarkup);
    };

    var _SanitizeHtmlValueConverter = SanitizeHtmlValueConverter;
    SanitizeHtmlValueConverter = _aureliaBinding.valueConverter('sanitizeHtml')(SanitizeHtmlValueConverter) || SanitizeHtmlValueConverter;
    return SanitizeHtmlValueConverter;
  })();

  exports.SanitizeHtmlValueConverter = SanitizeHtmlValueConverter;
});