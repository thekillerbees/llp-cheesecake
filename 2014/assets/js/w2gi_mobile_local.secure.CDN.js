require.config({
  baseUrl: "https://d7t6d7p9gi2o1.cloudfront.net/2014/assets/js",
  paths: {
    jquery: "vendor/jquery.min",
    "jquery.migrate": "vendor/migrate",
    "jquery.mobile.events": "vendor/mobile.events",
    "jquery.royalslider": "vendor/jquery.royalslider",
    "backbone": "//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min"
  },
  shim: {
    "jquery.migrate": {
      deps: ["jquery"]
    },
    "jquery.mobile.events": {
      deps: ["jquery"]
    },
    "jquery.royalslider": {
      deps: ["jquery"]
    }
  }
});

require(["modules/init"]);
 