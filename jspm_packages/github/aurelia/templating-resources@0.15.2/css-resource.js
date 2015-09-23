define(['exports', 'aurelia-templating', 'aurelia-loader', 'aurelia-dependency-injection', 'aurelia-path'], function (exports, _aureliaTemplating, _aureliaLoader, _aureliaDependencyInjection, _aureliaPath) {
  'use strict';

  exports.__esModule = true;
  exports._createCSSResource = _createCSSResource;

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var cssUrlMatcher = /url\((?!['"]data)([^)]+)\)/gi;

  function fixupCSSUrls(address, css) {
    return css.replace(cssUrlMatcher, function (match, p1) {
      var quote = p1.charAt(0);
      if (quote === '\'' || quote === '"') {
        p1 = p1.substr(1, p1.length - 2);
      }
      return 'url(\'' + _aureliaPath.relativeToFile(p1, address) + '\')';
    });
  }

  var CSSResource = (function () {
    function CSSResource(address) {
      _classCallCheck(this, CSSResource);

      this.address = address;
      this._global = null;
      this._scoped = null;
    }

    CSSResource.prototype.analyze = function analyze(container, target) {
      this._global = new target('global');
      this._scoped = new target('scoped');
    };

    CSSResource.prototype.register = function register(registry, name) {
      registry.registerViewEngineHooks(name === 'scoped' ? this._scoped : this._global);
    };

    CSSResource.prototype.load = function load(container) {
      var _this = this;

      return container.get(_aureliaLoader.Loader).loadText(this.address).then(function (text) {
        text = fixupCSSUrls(_this.address, text);
        _this._global.css = text;
        _this._scoped.css = text;
        return _this;
      });
    };

    return CSSResource;
  })();

  var CSSViewEngineHooks = (function () {
    function CSSViewEngineHooks(mode) {
      _classCallCheck(this, CSSViewEngineHooks);

      this.mode = mode;
      this.css = null;
      this._alreadyGloballyInjected = false;
    }

    CSSViewEngineHooks.prototype.beforeCompile = function beforeCompile(content, resources, instruction) {
      if (this.mode === 'scoped') {
        var styleNode = _aureliaTemplating.injectStyles(this.css, content, true);
        if (!instruction.targetShadowDOM) {
          styleNode.setAttribute('scoped', 'scoped');
        }
      } else if (!this._alreadyGloballyInjected) {
        _aureliaTemplating.injectStyles(this.css);
        this._alreadyGloballyInjected = true;
      }
    };

    return CSSViewEngineHooks;
  })();

  function _createCSSResource(address) {
    var ViewCSS = (function (_CSSViewEngineHooks) {
      _inherits(ViewCSS, _CSSViewEngineHooks);

      function ViewCSS() {
        _classCallCheck(this, _ViewCSS);

        _CSSViewEngineHooks.apply(this, arguments);
      }

      var _ViewCSS = ViewCSS;
      ViewCSS = _aureliaTemplating.resource(new CSSResource(address))(ViewCSS) || ViewCSS;
      return ViewCSS;
    })(CSSViewEngineHooks);

    return ViewCSS;
  }
});