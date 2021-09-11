import "../scss/defautl-style.scss";

//
(function ($, Drupal) {
  console.log("Drupal.behaviors : ", Drupal.behaviors);
  function addMargeTop() {
    var HM = document.querySelector(
      ".container-menu .navbar-collapse"
    ).clientHeight;
    if (document.body.clientWidth > 992) {
      $(".page-node-custom").css({ marginTop: HM / 2 - 10 });
      $(".page-orther-custom").css({
        marginTop: HM + "px",
      });
      var page = document.querySelector(".page-term-custom");
      if (page) page.style.marginTop = HM - 10 + "px";
    }
  }
  Drupal.behaviors.myModuleBehavior = {
    attach: function (context, settings) {
      addMargeTop(context);
    },
  };
})(jQuery, Drupal);
