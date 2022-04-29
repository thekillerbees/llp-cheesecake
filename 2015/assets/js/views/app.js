
/*
 * Add header comments :)
 */
define(["jquery", "backbone", "views/baseView", "views/default/view", "modules/headerNav", "modules/backboneUtil"], function($, Backbone, BaseView, DefaultView, HeaderNav, BackboneUtil) {
  var AppView;
  return AppView = BaseView.View.extend({
    el: "#backbonePlaceholder",
    navigateTo: function(view) {
      var page, previousPage, self;
      self = this;
      previousPage = this.currentPage || null;
      if (!previousPage) {
        page = self.$el.find(".main-container");
        if (page) {
          previousPage = new DefaultView({
            el: page[0]
          });
        }
      }
      if (previousPage) {
        previousPage.transitionOut(function() {
          previousPage.$el.remove();
          HeaderNav.get().closeSubNav();
          if ($("#largeDropin").length) {
            return $("#largeDropin").remove();
          }
        });
      }
      view.render({
        page: true
      });
      self.$el.prepend(view.$el);
      view.transitionIn();
      self.currentPage = view;
      return new BackboneUtil({
        $el: view.$el
      });
    }
  });
});
