define(["jquery", "modules/util"], function($, Util) {
  var FixedHeader;
  return FixedHeader = (function() {
    function FixedHeader(options) {
      var $body, $contentHeaderTitle, $window, isMobile;
      this.options = options;
      $window = $(window);
      $body = $("body");
      $contentHeaderTitle = $(".content-header-title");
      isMobile = $body.hasClass("is-mobile");
      $window.on("scroll", function() {
        var _currentScrollLocation, _headerTextTop;
        _currentScrollLocation = $window.scrollTop();
        if (!$body.hasClass("fixed-always") && !isMobile) {
          if (_currentScrollLocation > 28 && !$body.hasClass("fixed")) {
            $body.addClass("fixed");
          } else if (_currentScrollLocation <= 28 && $body.hasClass("fixed")) {
            $body.removeClass("fixed");
          }
        }
        if ($contentHeaderTitle.length) {
          _headerTextTop = $contentHeaderTitle.offset().top - 65;
          if (_currentScrollLocation > _headerTextTop && !$body.hasClass("fixed-color")) {
            return $body.addClass("fixed-color");
          } else if (_currentScrollLocation <= _headerTextTop && $body.hasClass("fixed-color")) {
            return $body.removeClass("fixed-color");
          }
        }
      });
    }

    return FixedHeader;

  })();
});
