define(["jquery", "jquery.mobile.events"], function($) {
  var HeaderNav;
  return HeaderNav = (function() {
    var HeaderNavPrivate, instance;

    function HeaderNav() {}

    instance = null;

    HeaderNav.get = function(options) {
      this.options = options;
      return instance != null ? instance : instance = new HeaderNavPrivate(this.options);
    };

    HeaderNavPrivate = (function() {
      function HeaderNavPrivate(options) {
        this.options = options;
        this.options = $.extend({}, this.defaults, this.options);
        this.delegateEvents();
      }

      HeaderNavPrivate.prototype.defaults = {
        _navExpanded: false,
        $navigation: $("#navigation"),
        $menuClose: $("#closeNav"),
        $menuToggle: $("#menuToggle"),
        $contentNavigation: $("#contentNavigation"),
        $body: $("body"),
        $html: $("html"),
        $document: $(document)
      };

      HeaderNavPrivate.prototype.delegateEvents = function() {
        var _self;
        _self = this;
        this.options.$menuToggle.on("click", (function(_this) {
          return function(event) {
            event.stopPropagation();
            if (_this.options.$body.hasClass("show-nav")) {
              return _this.closeSubNav();
            } else {
              _this.options._navExpanded = true;
              if (!_this.options.$body.hasClass("lt-ie9") && !_this.options.$body.hasClass("is-mobile")) {
                _this.options.$navigation.show();
              }
              if (_this.options.$contentNavigation.is(":visible") && !_this.options.$body.hasClass("lt-ie9") && !_this.options.$body.hasClass("is-mobile")) {
                _this.options.$contentNavigation.fadeOut(150, function() {
                  return _this.options.$body.addClass("show-nav");
                });
              } else {
                _this.options.$body.addClass("show-nav");
              }
              if (_this.options.$body.hasClass("is-mobile")) {
                return setTimeout((function() {
                  return _this.options.$html.addClass("full-menu");
                }), 510);
              }
            }
          };
        })(this));
        this.options.$menuClose.on("vclick", (function(_this) {
          return function() {
            return _this.closeSubNav();
          };
        })(this));
        return this.options.$document.on("click", (function(_this) {
          return function(event) {
            if (_this.options._navExpanded && $(event.target).is(":not(#navigation *)")) {
              _this.options.$menuClose.trigger("vclick");
              return _this.options._navExpanded = false;
            }
          };
        })(this));
      };

      HeaderNavPrivate.prototype.closeSubNav = function() {
        this.options._navExpanded = false;
        this.options.$body.removeClass("show-nav");
        if (!this.options.$body.hasClass("lt-ie9") && !this.options.$body.hasClass("is-mobile")) {
          setTimeout(((function(_this) {
            return function() {
              return _this.options.$navigation.hide();
            };
          })(this)), 510);
        }
        if (this.options.$contentNavigation.is(":hidden") && !this.options.$body.hasClass("is-mobile")) {
          return setTimeout(((function(_this) {
            return function() {
              return _this.options.$contentNavigation.fadeIn(300);
            };
          })(this)), 510);
        } else if (this.options.$html.hasClass("full-menu")) {
          return setTimeout(((function(_this) {
            return function() {
              return _this.options.$html.removeClass("full-menu");
            };
          })(this)), 510);
        }
      };

      return HeaderNavPrivate;

    })();

    return HeaderNav;

  })();
});
