
/*
 * This is the default view that most Sitecore pages will use for rendering through backbonejs
 */
define(["jquery", "backbone", "views/baseView"], function($, Backbone, BaseView) {
  var SitecorePage;
  return SitecorePage = BaseView.View.extend({
    className: "main-container",
    render: function() {
      var self, url;
      self = this;
      if (location.search) {
        url = location.href + "&ajax=true";
      } else {
        url = location.href + "?ajax=true";
      }
      $.get(url, function(data) {
        return self.$el.html(data);
      });
      return BaseView.View.prototype.render.apply(self, arguments);
    }
  });
});
