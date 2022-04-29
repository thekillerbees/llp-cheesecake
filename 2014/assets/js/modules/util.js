define(["jquery"], function($) {
  var Util;
  return Util = (function() {
    function Util() {}

    Util.prototype.isMobile = function() {
      return /iPod|iPhone|Blackberry|Android|Windows Phone/i.test(navigator.userAgent);
    };

    Util.prototype.isIE11 = function() {
      return /Windows/.test(navigator.userAgent) && /rv:11.0/.test(navigator.userAgent);
    };

    Util.prototype.isIE9 = function() {
      return /MSIE [8-9].0/.test(navigator.userAgent);
    };

    Util.prototype.isFirefox = function() {
      return /Firefox/.test(navigator.userAgent);
    };

    Util.prototype.supportsMP4 = function() {
      return !!document.createElement('video').canPlayType('video/mp4; codecs=avc1.42E01E,mp4a.40.2');
    };

    Util.prototype.numberWithCommas = function(originalNumber) {
      return originalNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    Util.prototype.padNumbers = function(originalNumber, size) {
      var _numberString;
      if (size == null) {
        size = 2;
      }
      _numberString = originalNumber + "";
      while (_numberString.length < size) {
        _numberString = "0" + _numberString;
      }
      return _numberString;
    };

    Util.prototype.placeholderFix = function() {
      if (this.isIE9()) {
        return $("input").each(function() {
          var $this;
          $this = $(this);
          if ($this.val() === "" && $this.attr("placeholder") !== "") {
            $this.val($this.attr("placeholder"));
            $this.off("focus");
            $this.on("focus", function() {
              if ($(this).val() === $(this).attr("placeholder")) {
                return $(this).val("");
              }
            });
            $this.off("blur");
            return $this.on("blur", function() {
              if ($(this).val() === "") {
                return $(this).val($(this).attr("placeholder"));
              }
            });
          }
        });
      }
    };

    Util.prototype.turnOffAutoPlayRoyalSlider = function(timeOut) {
      if (timeOut == null) {
        timeOut = 0;
      }
      return setTimeout(function() {
        return $(".royalSlider").each(function() {
          var _ref;
          return (_ref = $(this).data("royalSlider")) != null ? _ref.stopAutoPlay() : void 0;
        });
      }, timeOut);
    };

    Util.prototype.turnOnAutoPlayRoyalSlider = function(timeOut) {
      if (timeOut == null) {
        timeOut = 0;
      }
      return setTimeout(function() {
        return $(".royalSlider").each(function() {
          var _ref;
          return (_ref = $(this).data("royalSlider")) != null ? _ref.startAutoPlay() : void 0;
        });
      }, timeOut);
    };

    Util.prototype.waypointsRefresh = function() {
      return window.waypointsRefresh = setInterval((function(_this) {
        return function() {
          return $ != null ? $.waypoints("refresh") : void 0;
        };
      })(this), 250);
    };

    Util.prototype.killWaypointsRefresh = function() {
      if (window.waypointsRefresh) {
        return clearInterval(window.waypointsRefresh);
      }
    };

    Util.prototype.forceRedraw = function(element) {
      var disp, n;
      if (!element) {
        return;
      }
      n = document.createTextNode(" ");
      disp = element.style.display;
      element.appendChild(n);
      element.style.display = "none";
      setTimeout((function() {
        element.style.display = disp;
        n.parentNode.removeChild(n);
      }), 20);
    };

    return Util;

  })();
});
