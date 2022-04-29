define(["jquery"], function($) {
  var GoogleAnalytics;
  return GoogleAnalytics = (function() {
    function GoogleAnalytics(options) {
      this.options = options;
      this.options = $.extend({}, this.defaults, this.options);
    }

    GoogleAnalytics.prototype.init = function() {
      this.options.ua = this.options.$el.data().googleAnalyticsId;
      this.setupAnalytics(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");
      ga("create", this.options.ua, "auto");
      return ga("send", "pageview");
    };

    GoogleAnalytics.prototype.trackPageView = function(page) {
      return ga("send", "pageview", page);
    };

    GoogleAnalytics.prototype.trackEvent = function(event, category, action, label, value) {
      return ga("send", event, category, action, label, {
        'nonInteraction': 1
      });
    };

    GoogleAnalytics.prototype.trackSocialEvent = function(network, action, target) {
      return ga("send", "social", networkd, action(target));
    };

    GoogleAnalytics.prototype.setupAnalytics = function(i, s, o, g, r, a, m) {
      i["GoogleAnalyticsObject"] = r;
      i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments);
      };
      i[r].l = 1 * new Date();
      a = s.createElement(o);
      m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m);
    };

    GoogleAnalytics.prototype.defaults = {
      $el: $("body"),
      ua: ""
    };

    return GoogleAnalytics;

  })();
});


/*
		delegateEvents: ->
			@options.$el.on "click", ()->
				alert "Hello World"
 */


/*
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-52730208-1', 'auto');
  ga('send', 'pageview');

</script>
 */
