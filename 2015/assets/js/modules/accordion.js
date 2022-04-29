define(["jquery", "modules/util"], function($, Util) {
  var Accordion;
  return Accordion = (function() {
    function Accordion(options) {
      var $accordionexpand, $body, $navigation, $share;
      this.options = options;
      $body = $("body");
      $accordionexpand = $(".accordion-item-title");
      $navigation = $("#navigation");
      $share = $(".share-this");
      $accordionexpand.on('click', function() {
        var $accordionitem, $this, _accordionheight;
        $this = $(this);
        $accordionitem = $this.closest(".accordion-item");
        _accordionheight = $accordionitem.find('.accordion-item-wrap').height();
        if ($this.closest('#navigation'.length)) {
          $navigation.find('.active').not($accordionitem).height('').removeClass('active');
        }
        if ($accordionitem.hasClass('active')) {
          $accordionitem.height('');
        } else {
          $accordionitem.height(_accordionheight);
        }
        return $accordionitem.toggleClass('active');
      });
      $share.on('click', '.share-action', function() {
        var $this;
        $this = $(this);
        return $this.closest(".share-this").toggleClass("share-active");
      });
    }

    return Accordion;

  })();
});
