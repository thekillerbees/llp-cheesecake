define(["jquery", "backbone", "modules/util"], function($, Backbone, Util) {

  /*
  	 * Any require call that's not tied to a particular module can be loaded below
  	 * As long as it's needed globally
   */
  var util;
  util = new Util;
  $("html.no-js").removeClass("no-js");
  if (util.isIE9()) {
    $("html").addClass("on-load-animation on-load-animation-complete");
    $(".atp-loader").remove();
  } else {
    $(window).on("load", function() {
      setTimeout(function() {
        return $("html").addClass("on-load-animation");
      }, 1000);
      setTimeout(function() {
        $("html").addClass("on-load-animation-complete");
        return $(".atp-loader").remove();
      }, 3000);
      return setTimeout(function() {
        return util.forceRedraw($("#railFixer")[0]);
      }, 5600);
    });
  }
  if (location.port === "4000" || typeof history.pushState === "undefined") {
    return false;
  }

  /*
  	 * Create the main backbone application object
  	 * This is here and not in a require module as it has to be added as a global variable
  	 * for all other backbone objects to reference
   */
  window.app = {
    Views: {},
    Extensions: {},
    Router: null,
    Analytics: null,
    MainNavigation: null,
    OnLoadEvents: [],
    init: function() {
      this.instance = new app.Views.App();
      this.Analytics.init();
      Backbone.history.start({
        pushState: true,
        silent: true
      });
      return this.doOnLoad();
    },
    doOnLoad: function() {
      var eventIndex, totalEvents, _i;
      totalEvents = app.OnLoadEvents.length - 1;
      for (eventIndex = _i = 0; _i <= totalEvents; eventIndex = _i += 1) {
        if (_.isFunction(app.OnLoadEvents[eventIndex])) {
          app.OnLoadEvents[eventIndex]();
        }
      }
      return app.OnLoadEvents = [];
    }
  };
  return require(["router", "modules/googleAnalytics", "views/app", "views/default/view", "modules/backboneUtil"], function(Router, GoogleAnalytics, AppView, DefaultAction, BackboneUtil) {
    app.Router = Router;
    app.Views.App = AppView;
    app.Views.DefaultAction = DefaultAction;
    $(function() {
      app.Analytics = new GoogleAnalytics();
      window.app.init();
      return new BackboneUtil();
    });
  });
});
