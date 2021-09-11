import "../scss/product-full.scss";
import "../scss/range-slider.scss";
// import ionRangeSlider from "vanilla-rangeslider"; not work
// import jquery_ui from "jquery-ui";
// import jqueryUi from "jquery-ui/ui/widgets/slider.js";
// import "jquery-ui";
/**
 * range price
 */
(function () {
  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
  function rangeslider() {
    var lowerSlider = document.querySelector("#lower"),
      upperSlider = document.querySelector("#upper");
    var InputMin = document.querySelector(
      '.filter-side-bar-prix [name="number[min]"]'
    );
    console.log("InputMin : ", InputMin);
    if (upperSlider && lowerSlider) {
      var lowerVal = parseInt(lowerSlider.value);
      var upperVal = parseInt(upperSlider.value);
      upperSlider.oninput = function () {
        lowerVal = parseInt(lowerSlider.value);
        upperVal = parseInt(upperSlider.value);
        console.log(" Range : ", lowerVal, " : ", upperVal);
        if (upperVal < lowerVal + 4) {
          lowerSlider.value = upperVal - 4;
          if (lowerVal == lowerSlider.min) {
            upperSlider.value = 4;
          }
        }
      };

      lowerSlider.oninput = function () {
        lowerVal = parseInt(lowerSlider.value);
        upperVal = parseInt(upperSlider.value);

        if (lowerVal > upperVal - 4) {
          upperSlider.value = lowerVal + 4;

          if (upperVal == upperSlider.max) {
            lowerSlider.value = parseInt(upperSlider.max) - 4;
          }
        }
      };
    } else {
      console.log("#upper", document.querySelector("#upper"));
    }
  }
  let fieldset = document.querySelector(".filter-side-bar-prix fieldset");
  let dd = document.createElement("div");
  dd.setAttribute("id", "product-full-ion-range-slider");
  dd.setAttribute("min", 0);
  dd.setAttribute("max", 1000);
  dd.setAttribute("value", 5);
  dd.innerHTML = ` <span class="multi-range">
    <input type="range" min="0" max="1000" value="0" id="lower">
    <input type="range" min="0" max="1000" value="1000" id="upper">
</span> `;
  insertAfter(fieldset, dd);
  setTimeout(() => {
    rangeslider();
  }, 3000);
})();
