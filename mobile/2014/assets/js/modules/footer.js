define(["jquery", "modules/util", "jquery.mobile.events", "waypoints"], function($, Util) {
  var Footer;
  return Footer = (function() {
    function Footer(options) {
      this.options = options;
      this.options = $.extend({}, this.defaults, this.options);
      this.options.$element = $(this.options.element);
      this.delegateEvents();
    }

    Footer.prototype.defaults = {
      element: $("#footer"),
      animationName: "animation-on"
    };

    Footer.prototype.util = new Util();

    Footer.prototype.introAnimationFlag = true;

    Footer.prototype.delegateEvents = function() {
      var _self;
      _self = this;
      this.options.$element.not("." + this.options.animationName).waypoint({
        handler: (function(_this) {
          return function(direction) {
            if (_this.introAnimationFlag) {
              _this.introAnimationFlag = false;
              _this.options.$element.addClass(_this.options.animationName);
              return _this.util.killWaypointsRefresh();
            }
          };
        })(this),
        offset: "90%"
      });
      this.util.killWaypointsRefresh();
      return this.util.waypointsRefresh();
    };

    return Footer;

  })();
});
