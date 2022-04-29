var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["jquery", "modules/buttonAjax", "jquery.mobile.events"], function($, ButtonAjax) {
  var ButtonAjaxPager;
  return ButtonAjaxPager = (function(_super) {
    __extends(ButtonAjaxPager, _super);

    function ButtonAjaxPager(options) {
      this.options = options;
      this.setHTML = __bind(this.setHTML, this);
      this.prependHTML = __bind(this.prependHTML, this);
      this.appendHTML = __bind(this.appendHTML, this);
      this.options = $.extend({}, this.defaults, this.options);
      this.addSelectors();
      this.delegateEvents();
    }

    ButtonAjaxPager.prototype.defaults = {
      element: "#filterListing",
      button: ".button-ajax:not(.loading)",
      perviousButton: ".button-ajax-top",
      nextButton: ".button-ajax-bottom"
    };

    ButtonAjaxPager.prototype.addSelectors = function() {
      this.options.$element = $(this.options.element);
      this.options.$previousButton = $(this.options.perviousButton);
      return this.options.$nextButton = $(this.options.nextButton);
    };

    ButtonAjaxPager.prototype.delegateEvents = function() {
      console.log(this.ajaxEvent);
      return this.options.$element.on("vclick", this.options.button, (function(_this) {
        return function(event) {
          return _this.ajaxEvent(event);
        };
      })(this));
    };

    ButtonAjaxPager.prototype.appendHTML = function(response) {
      var _items, _nextBtnData, _nextButton, _prevBtnData, _prevButton, _ref, _ref1, _updatedLink;
      if ($(this.buttonData.element).children().length > this.buttonData.pageSize * 2) {
        _prevButton = (_ref = $(response).find(this.options.perviousButton)[0]) != null ? _ref.innerHTML : void 0;
        _prevBtnData = $(_prevButton).data();
        _updatedLink = _prevBtnData.link.replace("page=" + (_prevBtnData.currentPage - 1), "page=" + (_prevBtnData.currentPage - 3));
        _prevButton = $((_ref1 = $(response).find(this.options.perviousButton)[0]) != null ? _ref1.innerHTML : void 0).attr("data-link", _updatedLink);
        this.options.$previousButton.html(_prevButton);
        $(this.buttonData.element + " li:lt(" + this.buttonData.pageSize + ")").remove();
      }
      _nextButton = $(response).find(this.options.nextButton)[0].innerHTML;
      _nextBtnData = $(_nextButton).data();
      if ((_nextBtnData.currentPage * this.buttonData.pageSize) >= this.buttonData.totalArticles) {
        this.options.$nextButton.children().remove();
      } else {
        this.options.$nextButton.html(_nextButton);
      }
      _items = $(response).find(this.buttonData.element)[0].innerHTML;
      return $(this.buttonData.element).append(_items);
    };

    ButtonAjaxPager.prototype.prependHTML = function(response) {
      var _items, _nextBtnData, _nextButton, _prevButton, _ref, _updatedLink;
      if ($(this.buttonData.element).children().length > this.buttonData.pageSize * 2) {
        _nextButton = $(response).find(this.options.nextButton)[0].innerHTML;
        _nextBtnData = $(_nextButton).data();
        _updatedLink = _nextBtnData.link.replace("page=" + (_nextBtnData.currentPage + 1), "page=" + (_nextBtnData.currentPage + 3));
        _nextButton = $($(response).find(this.options.nextButton)[0].innerHTML).attr("data-link", _updatedLink);
        this.options.$nextButton.html(_nextButton);
        $(this.buttonData.element + " li:gt(" + ((this.buttonData.pageSize * 2) - 1) + ")").remove();
      }
      if (this.buttonData.currentPage === 1) {
        this.options.$previousButton.children().remove();
      } else {
        _prevButton = (_ref = $(response).find(this.options.perviousButton)[0]) != null ? _ref.innerHTML : void 0;
        this.options.$previousButton.html(_prevButton);
      }
      _items = $(response).find(this.buttonData.element)[0].innerHTML;
      return $(this.buttonData.element).prepend(_items);
    };

    ButtonAjaxPager.prototype.setHTML = function(response) {};

    return ButtonAjaxPager;

  })(ButtonAjax);
});
