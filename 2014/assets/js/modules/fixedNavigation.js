define(["jquery", "modules/util"], function($, Util) {
  var FixedNavigation;
  return FixedNavigation = (function() {
    function FixedNavigation(options) {
      var $body, $bodyHtml, $leftNav, $window, _navStart;
      this.options = options;
      $window = $(window);
      $body = $("body");
      $bodyHtml = $("body,html");
      $leftNav = $("#contentNavigation");
      if ($leftNav.is(":visible")) {
        _navStart = 320;
        if ($body.hasClass("is-mobile")) {
          _navStart = 249;
        }
        $window.on("scroll", function() {
          var _currentScrollLocation;
          _currentScrollLocation = $window.scrollTop();
          if (_currentScrollLocation > _navStart && !$body.hasClass("fixed-navigation")) {
            return $body.addClass("fixed-navigation");
          } else if (_currentScrollLocation <= _navStart && $body.hasClass("fixed-navigation")) {
            return $body.removeClass("fixed-navigation");
          }
        });
      }
      $leftNav.on('click', 'a[href*=#]', function() {
        var $hash, _hash;
        _hash = this.hash;
        $hash = $(_hash);
        if ($hash.length) {
          $bodyHtml.stop(true).animate({
            scrollTop: $hash.offset().top - 115
          }, 500);
          return false;
        }
      });
    }

    return FixedNavigation;

  })();
});
