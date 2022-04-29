
/*
 *	A utiliy file for backbone compatability functions
 */
define(["jquery", "backbone"], function($, Backbone) {
  var BackboneUtil;
  return BackboneUtil = (function() {
    function BackboneUtil(options) {
      this.options = options;
      this.options = $.extend({}, this.defaults, this.options);
      this.delegateEvents();
    }

    BackboneUtil.prototype.delegateEvents = function() {

      /*
      			 * This sets up all the pages links to run through backbone
       */
      return this.options.$el.on("click", "a[href]:not([data-bypass])", function(evt) {
        var $this, href, linkData, match, root;
        $this = $(this);
        linkData = $this.data;
        if (linkData.useGa) {
          app.Analytics.trackEvent(linkData.gaCatagory, linkData.gaAction, linkData.gaLabel, linkData.gaValue);
        }
        href = {
          prop: $this.prop("href"),
          attr: $this.attr("href")
        };
        match = href.prop.indexOf("#") === -1;
        root = "" + location.protocol + "//" + location.host;
        if (href.prop.slice(0, root.length) === root && match) {
          evt.preventDefault();
          Backbone.history.navigate(href.attr, true);
        }
      });
    };

    BackboneUtil.prototype.defaults = {
      $el: $(document)
    };

    return BackboneUtil;

  })();
});
