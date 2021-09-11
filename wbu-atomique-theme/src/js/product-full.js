import "../scss/product-full.scss";
import "../scss/range-slider.scss";

/**
 * range price
 */
$ = window.jQuery;
(function () {
  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
  function loadScript(src) {
    return new Promise((resolv) => {
      var s = document.createElement("script");
      s.setAttribute("src", src);
      s.onload = function () {
        console.log("Chargement du script ok : ", src);
        resolv(true);
      };
      document.head.appendChild(s);
    });
  }
  function loadstyle(src) {
    return new Promise((resolv) => {
      var s = document.createElement("link");
      s.setAttribute("rel", "stylesheet");
      s.setAttribute("href", src);
      s.onload = function () {
        console.log("Chargement du Style ok : ", src);
        resolv(true);
      };
      document.head.appendChild(s);
    });
  }
  var displayRangeSlider = () => {
    let fieldset = document.querySelector(".filter-side-bar-prix fieldset");
    //fieldset.style.display = "none";
    let dd = document.createElement("div");
    dd.setAttribute("id", "product-full-ion-range-slider");
    insertAfter(fieldset, dd);
    setTimeout(() => {
      var typingTimer;
      var doneTypingInterval = 2500;
      var InputMin = document.querySelector(
        '.filter-side-bar-prix [name="number[min]"]'
      );
      var InputMax = document.querySelector(
        '.filter-side-bar-prix [name="number[max]"]'
      );
      console.log(
        "InputMax.value : ",
        InputMax.value,
        " : ",
        parseInt(InputMax.value)
      );
      $("#product-full-ion-range-slider").slider({
        range: true,
        min: InputMin.value ? parseInt(InputMin.value) : 0,
        max: InputMax.value ? parseInt(InputMax.value) : 500,
        values: [0, 500],
        slide: function (event, ui) {
          InputMin.value = ui.values[0];
          InputMax.value = ui.values[1];
          // --
          clearTimeout(typingTimer);
          typingTimer = setTimeout(() => {
            document
              .querySelector('.filter-side-bar-prix [type="submit"]')
              .click();
          }, doneTypingInterval);
        },
      });
    }, 800);
  };
  if (window.jQuery && window.jQuery.ui && window.jQuery.ui.slider) {
    console.log("window.jQuery.ui", window.jQuery.ui);
    displayRangeSlider();
  } else {
    loadScript("/themes/custom/lesroisdelareno/js/jquery-ui.min.js").then(
      () => {
        loadstyle("/themes/custom/lesroisdelareno/css/jquery-ui-base.css").then(
          () => {
            displayRangeSlider();
          }
        );
      }
    );
  }
  /**
   *
   */
  var selectElement = document.querySelector(
    '.filter-principal [name="sort_by"]'
  );
  selectElement.addEventListener("change", () => {
    document.querySelector(' .filter-principal [type="submit"] ').click();
  });
})();
