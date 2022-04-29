define(["jquery", "modules/util"], function($, Util) {
  var ContentBiographies;
  return ContentBiographies = (function() {
    function ContentBiographies(options) {
      var $bioexpand, $body;
      this.options = options;
      $body = $("body");
      $bioexpand = $(".content-biographyrow-expand");
      if (!$body.hasClass("is-mobile")) {
        $bioexpand.on('click', function() {
          var $bioright, $biorow, $this, _bioheight;
          $this = $(this);
          $bioright = $this.siblings(".content-biographyrow-right");
          $biorow = $this.parent();
          _bioheight = $bioright.children().height();
          if ($biorow.hasClass('active')) {
            $bioright.height('');
          } else {
            $bioright.height(_bioheight);
          }
          return $biorow.toggleClass('active');
        });
      }
    }

    return ContentBiographies;

  })();
});
