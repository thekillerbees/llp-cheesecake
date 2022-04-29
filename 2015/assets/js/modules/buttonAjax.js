var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

define(["jquery", "backbone", "jquery.mobile.events"], function($, Backbone) {
  var ButtonAjax;
  return ButtonAjax = (function() {
    function ButtonAjax(options) {
      this.options = options;
      this.setHTML = __bind(this.setHTML, this);
      this.prependHTML = __bind(this.prependHTML, this);
      this.appendHTML = __bind(this.appendHTML, this);
      this.ajaxDone = __bind(this.ajaxDone, this);
      this.ajaxProgressEvent = __bind(this.ajaxProgressEvent, this);
      this.ajaxEvent = __bind(this.ajaxEvent, this);
      this.options = $.extend({}, this.defaults, this.options);
      this.delegateEvents();
    }

    ButtonAjax.prototype.defaults = {
      element: ".button-ajax:not(.loading)"
    };

    ButtonAjax.prototype.ajaxEvent = function(event) {
      event.preventDefault();
      $(event.target).addClass("loading");
      if (!$(event.target).find(".button-progress").length) {
        $(event.target).append('<div class="button-progress"><span class="button-progress-text">Loaded</span></div>');
      }
      this.buttonData = $(event.target).data();
      this.ajaxRequest = $.ajax({
        type: "GET",
        dataType: 'html',
        url: this.buttonData.link,
        xhrFields: {
          onprogress: this.ajaxProgressEvent
        }
      });
      return this.ajaxRequest.done((function(_this) {
        return function(response) {
          Backbone.history.history['pushState']({}, document.title, _this.buttonData.link.replace("&ajax=true", ""));
          return _this.ajaxDone(event, response);
        };
      })(this));
    };

    ButtonAjax.prototype.ajaxProgressEvent = function(event) {
      var _percentage;
      _percentage = event.loaded / event.total * 100 + "%";
      return $(".button-progress").css({
        "width": _percentage
      });
    };

    ButtonAjax.prototype.ajaxDone = function(event, response) {
      switch (this.buttonData.type) {
        case "append":
          this.appendHTML(response);
          break;
        case "prepend":
          this.prependHTML(response);
          break;
        case "set":
          this.setHTML(response);
      }
      setTimeout((function(_this) {
        return function() {
          return $(event.target).addClass("loaded");
        };
      })(this), 300);
      setTimeout((function(_this) {
        return function() {
          return $(event.target).removeClass("loading loaded");
        };
      })(this), 1000);
      return setTimeout((function(_this) {
        return function() {
          return $(".button-progress").remove();
        };
      })(this), 1300);
    };

    ButtonAjax.prototype.appendHTML = function(response) {
      var _html;
      console.log($(response).find(this.buttonData.element));
      _html = $(response).find(this.buttonData.element)[0].innerHTML;
      return $(this.buttonData.element).append(_html);
    };

    ButtonAjax.prototype.prependHTML = function(options) {};

    ButtonAjax.prototype.setHTML = function(options) {};

    return ButtonAjax;

  })();
});
