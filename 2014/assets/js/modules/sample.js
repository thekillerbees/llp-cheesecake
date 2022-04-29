define(["jquery", "backbone"], function($, Backbone) {
  var SampleClass;
  return SampleClass = (function() {
    function SampleClass(options) {
      this.options = options;
      this.options = $.extend({}, this.defaults, this.options);
      this.delegateEvents();
    }

    SampleClass.prototype.defaults = {
      $element: $("#sampleID")
    };

    SampleClass.prototype.delegateEvents = function() {
      return this.options.$element.on("click", function() {
        return alert("Hello World");
      });
    };

    return SampleClass;

  })();
});
