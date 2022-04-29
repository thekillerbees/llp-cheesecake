define(["jquery", "jquery.royalslider"], function($) {
  var LandingCarousel;
  return LandingCarousel = (function() {
    function LandingCarousel(options) {
      this.options = options;
      this.options = $.extend({}, this.defaults, this.options);
      this.isIE11 = /Windows/.test(navigator.userAgent) && /rv:11.0/.test(navigator.userAgent);
      this.delegateEvents();
    }

    LandingCarousel.prototype.defaults = {
      $element: $("#landingCarousel")
    };

    LandingCarousel.prototype.delegateEvents = function() {
      var sliderApi;
      this.options.$element.find(".royalSlider").royalSlider({
        autoScaleSlider: false,
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
          pauseOnHover: true
        }
      });
      sliderApi = this.options.$element.find(".royalSlider").data('royalSlider');
      this.pauseAllVideos();
      this.playCurrentVideo(sliderApi);
      return sliderApi.ev.on('rsAfterSlideChange', (function(_this) {
        return function(event) {
          _this.pauseAllVideos();
          return _this.playCurrentVideo(sliderApi);
        };
      })(this));
    };

    LandingCarousel.prototype.pauseAllVideos = function() {
      var $slides, _self;
      $slides = this.options.$element.find('.rsSlide');
      _self = this;
      return $slides.each(function() {
        var $video, _video;
        $video = $(this).find('video');
        _video = $video[0];
        if (typeof _video === "object") {
          if (_self.isIE11) {
            $video.hide();
          }
          return _self.pauseVideo(_video);
        }
      });
    };

    LandingCarousel.prototype.pauseVideo = function(video) {
      return video.pause();
    };

    LandingCarousel.prototype.playCurrentVideo = function(sliderApi) {
      var $currentSlide, $video, _video;
      $currentSlide = $(sliderApi.currSlide.content);
      $video = $currentSlide.find('video');
      _video = $video[0];
      if (typeof _video === "object") {
        if (this.isIE11) {
          $video.fadeIn();
        }
        return this.playVideo(_video);
      }
    };

    LandingCarousel.prototype.playVideo = function(video) {
      return video.play();
    };

    return LandingCarousel;

  })();
});
