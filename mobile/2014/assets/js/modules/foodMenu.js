define(["jquery", "modules/util", "jquery.mobile.events"], function($, Util) {
  var FoodMenu;
  return FoodMenu = (function() {
    var FoodMenuPrivate, instance;

    function FoodMenu() {}

    instance = null;

    FoodMenu.get = function(options) {
      this.options = options;
      return instance != null ? instance : instance = new FoodMenuPrivate(this.options);
    };

    FoodMenuPrivate = (function() {
      function FoodMenuPrivate(options) {
        this.options = options;
        this.options = $.extend({}, this.defaults, this.options);
        this.delegateEvents();
      }

      FoodMenuPrivate.prototype.defaults = {
        _menuHeight: 510,
        _menuBarHeight: 40,
        $menuSplash: $("#menuSplash"),
        $browseMenu: $("#browseMenu"),
        $foodMenu: $("#foodMenu"),
        $foodMenuBack: $(".food-menu-category-back"),
        $foodMenuInfo: $(".food-menu-category-info"),
        $foodMenuCategory: $(".food-menu-category"),
        $foodMenuCategoryWrapper: $(".food-menu-category-wrapper"),
        $foodMenuWrapper: $("#foodMenuPanels"),
        $foodViewCategories: $("#foodViewCategories"),
        $foodSearch: $("#foodSearch"),
        $foodSearchSubmit: $("#foodSearchSubmit"),
        $foodPanelCategories: $(".food-panel-categories"),
        $foodPanelListings: $(".food-panel-listings"),
        $foodPanelDetail: $(".food-panel-detail"),
        $imageEnlarge: $("#imgEnlarge"),
        $body: $("body"),
        $html: $("html"),
        $document: $(document)
      };

      FoodMenuPrivate.prototype.delegateEvents = function() {
        var _self;
        _self = this;
        this.util.placeholderFix();
        this.options.$browseMenu.on("click", (function(_this) {
          return function(event) {
            return _this.openMenu();
          };
        })(this));
        this.options.$foodMenuBack.on("click", (function(_this) {
          return function(event) {
            return _this.menuPageBack();
          };
        })(this));
        this.options.$foodMenuInfo.on("click", (function(_this) {
          return function(event) {
            return _this.menuToggleInfo();
          };
        })(this));
        this.options.$foodViewCategories.on("click", (function(_this) {
          return function(event) {
            return _this.panelSwitch("categories");
          };
        })(this));
        this.options.$foodPanelCategories.on("click", "li a", (function(_this) {
          return function(event) {
            return _this.panelSwitch("listings");
          };
        })(this));
        this.options.$foodPanelListings.on("click", "li a", (function(_this) {
          return function(event) {
            return _this.panelSwitch("detail");
          };
        })(this));
        this.options.$imageEnlarge.on("click", (function(_this) {
          return function(event) {
            return _this.fullScreenImageOpen();
          };
        })(this));
        return this.options.$html.on("click", ".close-full-screen", (function(_this) {
          return function(event) {
            return _this.fullScreenImageClose();
          };
        })(this));
      };

      FoodMenuPrivate.prototype.util = new Util();

      FoodMenuPrivate.prototype.openMenu = function() {
        this.options.$body.addClass("menu-animating");
        return setTimeout((function(_this) {
          return function() {
            return _this.options.$body.addClass("show-food-menu").removeClass("menu-animating");
          };
        })(this), 500);
      };

      FoodMenuPrivate.prototype.menuPageBack = function() {
        if (this.options.$foodMenu.hasClass("show-detail")) {
          return this.panelSwitch("listings");
        } else {
          return this.panelSwitch("categories");
        }
      };

      FoodMenuPrivate.prototype.menuToggleInfo = function(closeMe) {
        var _categoryHeight;
        if (closeMe || this.options.$foodMenu.hasClass("show-info")) {
          this.options.$foodMenu.removeClass("show-info");
          this.options.$foodMenuCategory.css("height", "");
          return this.options.$foodMenuWrapper.css("height", "");
        } else {
          _categoryHeight = this.options.$foodMenuCategoryWrapper.height();
          this.options.$foodMenu.addClass("show-info");
          this.options.$foodMenuCategory.css("height", _categoryHeight);
          return this.options.$foodMenuWrapper.css("height", (this.options._menuHeight + this.options._menuBarHeight) - _categoryHeight);
        }
      };

      FoodMenuPrivate.prototype.panelSwitch = function(panel) {
        this.menuToggleInfo(true);
        this.options.$foodMenu.removeClass("show-categories").removeClass("show-listings").removeClass("show-detail");
        this.options.$foodMenu.addClass("show-" + panel);
        this.options.$body.addClass("food-menu-animating");
        return setTimeout((function(_this) {
          return function() {
            return _this.options.$body.removeClass("food-menu-animating");
          };
        })(this), 500);
      };

      FoodMenuPrivate.prototype.fullScreenImageOpen = function() {
        this.options.$body.addClass("full-screen-image");
        return setTimeout((function(_this) {
          return function() {
            return _this.options.$body.addClass("close-full-screen");
          };
        })(this), 500);
      };

      FoodMenuPrivate.prototype.fullScreenImageClose = function() {
        return this.options.$body.removeClass("full-screen-image").removeClass("close-full-screen");
      };

      return FoodMenuPrivate;

    })();

    return FoodMenu;

  })();
});
