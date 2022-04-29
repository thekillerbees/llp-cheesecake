require.config({
  baseUrl: "http://hosted.where2getit.com/cheesecake/2014/assets/js",
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
