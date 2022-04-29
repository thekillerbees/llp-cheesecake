define(["jquery", "jquery.royalslider"], function($) {
  var BackgroundCarousel;
  return BackgroundCarousel = (function() {
    function BackgroundCarousel(options) {
      this.options = options;
      this.options = $.extend({}, this.defaults, this.options);
      this.isIE11 = /Windows/.test(navigator.userAgent) && /rv:11.0/.test(navigator.userAgent);
      this.delegateEvents();
    }

    BackgroundCarousel.prototype.defaults = {
      $element: $("#mainCarousel")
    };

    BackgroundCarousel.prototype.delegateEvents = function() {
      var $royalSlider, sliderApi;
      $royalSlider = this.options.$element.find(".royalSlider");
      $royalSlider.royalSlider({
        autoScaleSlider: false,
        transitionType: "fade",
        imageScaleMode: "none",
        imageScalePadding: 0,
        arrowsNav: false,
        arrowsNavAutoHide: false,
        slidesSpacing: 0,
        navigateByClick: false,
        addActiveClass: true,
        keyboardNavEnabled: true,
        loop: true,
        autoPlay: {
          enabled: true,
          delay: 5000,
          pauseOnHover: false
        }
      });
      return sliderApi = $royalSlider.data('royalSlider');
    };

    return BackgroundCarousel;

  })();
});
