define(["jquery", "jquery.royalslider"], function($) {
  var ContentSlider;
  return ContentSlider = (function() {
    function ContentSlider(options) {
      this.options = options;
      this.options = $.extend({}, this.defaults, this.options);
      this.isIE11 = /Windows/.test(navigator.userAgent) && /rv:11.0/.test(navigator.userAgent);
      this.delegateEvents();
    }

    ContentSlider.prototype.defaults = {
      $element: $(".content-slider")
    };

    ContentSlider.prototype.delegateEvents = function() {
      var $royalSlider, sliderApi;
      $royalSlider = this.options.$element.find(".royalSlider");
      $royalSlider.royalSlider({
        autoScaleSlider: true,
        autoScaleSliderWidth: 640,
        autoScaleSliderHeight: 360,
        imageScalePadding: 0,
        arrowsNav: false,
        arrowsNavAutoHide: false,
        navigateByClick: false,
        addActiveClass: true,
        keyboardNavEnabled: true,
        loop: true,
        autoPlay: {
          enabled: true,
          delay: 4000,
          pauseOnHover: false
        }
      });
      return sliderApi = $royalSlider.data('royalSlider');
    };

    return ContentSlider;

  })();
});
