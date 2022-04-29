define(["jquery", "backbone", "underscore"], function($, Backbone, _) {
  var BaseView;
  return BaseView = {
    View: Backbone.View.extend({
      initialize: function() {
        return this.router = new app.Router();
      },
      render: function(options) {
        options = options || {};
        if (options.page === true) {
          this.$el.addClass("main-container");
        }
        return this;
      },
      transitionIn: function(callback) {
        var view;
        view = this;
        view.$el.addClass("is-visible");
        if (_.isFunction(callback)) {
          return callback();
        }
      },
      transitionOut: function(callback) {
        var view;
        view = this;
        view.$el.removeClass("is-visible");
        view.$el.addClass("go-away");
        if (_.isFunction(callback)) {
          callback();
        }
      }
    })
  };
});


/*
 TODO: Finish this once the CSS animations are complete
				view.$el.one "transitionend", ->
 */


/*
 TODO: Finish this once the CSS animations are complete
					view.$el.one "transitionend", ->
 */
