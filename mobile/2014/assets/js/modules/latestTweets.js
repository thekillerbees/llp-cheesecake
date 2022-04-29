define(["jquery", "jquery.royalslider"], function($) {
  var LatestTweets;
  return LatestTweets = (function() {
    function LatestTweets(options) {
      this.options = options;
      this.options = $.extend({}, this.defaults, this.options);
      this.initLatestTweetsSlider();
    }

    LatestTweets.prototype.defaults = {
      $element: $("#latestTweetsSlider"),
      element: "#latestTweetsSlider"
    };

    LatestTweets.prototype.initLatestTweetsSlider = function() {
      this.options.$element.royalSlider({
        autoHeight: true,
        autoScaleSlider: false,
        controlsInside: false,
        imageAlignCenter: false,
        imageScaleMode: "none",
        imageScalePadding: 0,
        arrowsNavAutoHide: false,
        slidesSpacing: 0,
        navigateByClick: false,
        addActiveClass: true,
        loop: true,
        keyboardNavEnabled: true,
        autoPlay: {
          enabled: true,
          pauseOnHover: true
        }
      });
      this.options.$bullets = $("" + this.options.element + " .rsNav");
      this.options.$leftArrow = $("" + this.options.element + " .rsArrowLeft");
      this.options.$rightArrow = $("" + this.options.element + " .rsArrowRight");
      this.options.$bullets.wrap("<div class='controls-wrapper'></div>");
      this.options.$leftArrow.detach().prependTo("" + this.options.element + " .controls-wrapper");
      return this.options.$rightArrow.detach().appendTo("" + this.options.element + " .controls-wrapper");
    };

    return LatestTweets;

  })();
});
