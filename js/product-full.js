/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/product-full.scss":
/*!************************************!*\
  !*** ./src/scss/product-full.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/range-slider.scss":
/*!************************************!*\
  !*** ./src/scss/range-slider.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!********************************!*\
  !*** ./src/js/product-full.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_product_full_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/product-full.scss */ "./src/scss/product-full.scss");
/* harmony import */ var _scss_range_slider_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/range-slider.scss */ "./src/scss/range-slider.scss");


/**
 * range price
 */

$ = window.jQuery;

(function () {
  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  function loadScript(src) {
    return new Promise(resolv => {
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
    return new Promise(resolv => {
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
    let fieldset = document.querySelector(".filter-side-bar-prix fieldset"); //fieldset.style.display = "none";

    let dd = document.createElement("div");
    dd.setAttribute("id", "product-full-ion-range-slider");
    insertAfter(fieldset, dd);
    setTimeout(() => {
      var typingTimer;
      var doneTypingInterval = 2500;
      var InputMin = document.querySelector('.filter-side-bar-prix [name="number[min]"]');
      var InputMax = document.querySelector('.filter-side-bar-prix [name="number[max]"]');
      console.log("InputMax.value : ", InputMax.value, " : ", parseInt(InputMax.value));
      $("#product-full-ion-range-slider").slider({
        range: true,
        min: InputMin.value ? parseInt(InputMin.value) : 0,
        max: InputMax.value ? parseInt(InputMax.value) : 500,
        values: [0, 500],
        slide: function (event, ui) {
          InputMin.value = ui.values[0];
          InputMax.value = ui.values[1]; // --

          clearTimeout(typingTimer);
          typingTimer = setTimeout(() => {
            document.querySelector('.filter-side-bar-prix [type="submit"]').click();
          }, doneTypingInterval);
        }
      });
    }, 800);
  };

  if (window.jQuery && window.jQuery.ui && window.jQuery.ui.slider) {
    console.log("window.jQuery.ui", window.jQuery.ui);
    displayRangeSlider();
  } else {
    loadScript("/themes/custom/lesroisdelareno/js/jquery-ui.min.js").then(() => {
      loadstyle("/themes/custom/lesroisdelareno/css/jquery-ui-base.css").then(() => {
        displayRangeSlider();
      });
    });
  }
  /**
   *
   */


  var selectElement = document.querySelector('.filter-principal [name="sort_by"]');
  selectElement.addEventListener("change", () => {
    document.querySelector(' .filter-principal [type="submit"] ').click();
  });
})();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vc3JjL3Njc3MvcHJvZHVjdC1mdWxsLnNjc3MiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL3NyYy9zY3NzL3JhbmdlLXNsaWRlci5zY3NzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9zcmMvanMvcHJvZHVjdC1mdWxsLmpzIl0sIm5hbWVzIjpbIiQiLCJ3aW5kb3ciLCJqUXVlcnkiLCJpbnNlcnRBZnRlciIsInJlZmVyZW5jZU5vZGUiLCJuZXdOb2RlIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwibG9hZFNjcmlwdCIsInNyYyIsIlByb21pc2UiLCJyZXNvbHYiLCJzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwib25sb2FkIiwiY29uc29sZSIsImxvZyIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImxvYWRzdHlsZSIsImRpc3BsYXlSYW5nZVNsaWRlciIsImZpZWxkc2V0IiwicXVlcnlTZWxlY3RvciIsImRkIiwic2V0VGltZW91dCIsInR5cGluZ1RpbWVyIiwiZG9uZVR5cGluZ0ludGVydmFsIiwiSW5wdXRNaW4iLCJJbnB1dE1heCIsInZhbHVlIiwicGFyc2VJbnQiLCJzbGlkZXIiLCJyYW5nZSIsIm1pbiIsIm1heCIsInZhbHVlcyIsInNsaWRlIiwiZXZlbnQiLCJ1aSIsImNsZWFyVGltZW91dCIsImNsaWNrIiwidGhlbiIsInNlbGVjdEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFD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R0FBRy9CLFFBQVEsQ0FBQ1csYUFBVCxDQUNsQixvQ0FEa0IsQ0FBcEI7QUFHQW9CLGVBQWEsQ0FBQ0MsZ0JBQWQsQ0FBK0IsUUFBL0IsRUFBeUMsTUFBTTtBQUM3Q2hDLFlBQVEsQ0FBQ1csYUFBVCxDQUF1QixxQ0FBdkIsRUFBOERrQixLQUE5RDtBQUNELEdBRkQ7QUFHRCxDQTFGRCxJIiwiZmlsZSI6Ii4vanMvcHJvZHVjdC1mdWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi4vc2Nzcy9wcm9kdWN0LWZ1bGwuc2Nzc1wiO1xuaW1wb3J0IFwiLi4vc2Nzcy9yYW5nZS1zbGlkZXIuc2Nzc1wiO1xuXG4vKipcbiAqIHJhbmdlIHByaWNlXG4gKi9cbiQgPSB3aW5kb3cualF1ZXJ5O1xuKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIocmVmZXJlbmNlTm9kZSwgbmV3Tm9kZSkge1xuICAgIHJlZmVyZW5jZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZS5uZXh0U2libGluZyk7XG4gIH1cbiAgZnVuY3Rpb24gbG9hZFNjcmlwdChzcmMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdikgPT4ge1xuICAgICAgdmFyIHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgcy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgc3JjKTtcbiAgICAgIHMub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNoYXJnZW1lbnQgZHUgc2NyaXB0IG9rIDogXCIsIHNyYyk7XG4gICAgICAgIHJlc29sdih0cnVlKTtcbiAgICAgIH07XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGxvYWRzdHlsZShzcmMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdikgPT4ge1xuICAgICAgdmFyIHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgICAgIHMuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKTtcbiAgICAgIHMuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBzcmMpO1xuICAgICAgcy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhcmdlbWVudCBkdSBTdHlsZSBvayA6IFwiLCBzcmMpO1xuICAgICAgICByZXNvbHYodHJ1ZSk7XG4gICAgICB9O1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzKTtcbiAgICB9KTtcbiAgfVxuICB2YXIgZGlzcGxheVJhbmdlU2xpZGVyID0gKCkgPT4ge1xuICAgIGxldCBmaWVsZHNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyLXNpZGUtYmFyLXByaXggZmllbGRzZXRcIik7XG4gICAgLy9maWVsZHNldC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgbGV0IGRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2R1Y3QtZnVsbC1pb24tcmFuZ2Utc2xpZGVyXCIpO1xuICAgIGluc2VydEFmdGVyKGZpZWxkc2V0LCBkZCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB2YXIgdHlwaW5nVGltZXI7XG4gICAgICB2YXIgZG9uZVR5cGluZ0ludGVydmFsID0gMjUwMDtcbiAgICAgIHZhciBJbnB1dE1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICcuZmlsdGVyLXNpZGUtYmFyLXByaXggW25hbWU9XCJudW1iZXJbbWluXVwiXSdcbiAgICAgICk7XG4gICAgICB2YXIgSW5wdXRNYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnLmZpbHRlci1zaWRlLWJhci1wcml4IFtuYW1lPVwibnVtYmVyW21heF1cIl0nXG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIFwiSW5wdXRNYXgudmFsdWUgOiBcIixcbiAgICAgICAgSW5wdXRNYXgudmFsdWUsXG4gICAgICAgIFwiIDogXCIsXG4gICAgICAgIHBhcnNlSW50KElucHV0TWF4LnZhbHVlKVxuICAgICAgKTtcbiAgICAgICQoXCIjcHJvZHVjdC1mdWxsLWlvbi1yYW5nZS1zbGlkZXJcIikuc2xpZGVyKHtcbiAgICAgICAgcmFuZ2U6IHRydWUsXG4gICAgICAgIG1pbjogSW5wdXRNaW4udmFsdWUgPyBwYXJzZUludChJbnB1dE1pbi52YWx1ZSkgOiAwLFxuICAgICAgICBtYXg6IElucHV0TWF4LnZhbHVlID8gcGFyc2VJbnQoSW5wdXRNYXgudmFsdWUpIDogNTAwLFxuICAgICAgICB2YWx1ZXM6IFswLCA1MDBdLFxuICAgICAgICBzbGlkZTogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xuICAgICAgICAgIElucHV0TWluLnZhbHVlID0gdWkudmFsdWVzWzBdO1xuICAgICAgICAgIElucHV0TWF4LnZhbHVlID0gdWkudmFsdWVzWzFdO1xuICAgICAgICAgIC8vIC0tXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHR5cGluZ1RpbWVyKTtcbiAgICAgICAgICB0eXBpbmdUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItc2lkZS1iYXItcHJpeCBbdHlwZT1cInN1Ym1pdFwiXScpXG4gICAgICAgICAgICAgIC5jbGljaygpO1xuICAgICAgICAgIH0sIGRvbmVUeXBpbmdJbnRlcnZhbCk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LCA4MDApO1xuICB9O1xuICBpZiAod2luZG93LmpRdWVyeSAmJiB3aW5kb3cualF1ZXJ5LnVpICYmIHdpbmRvdy5qUXVlcnkudWkuc2xpZGVyKSB7XG4gICAgY29uc29sZS5sb2coXCJ3aW5kb3cualF1ZXJ5LnVpXCIsIHdpbmRvdy5qUXVlcnkudWkpO1xuICAgIGRpc3BsYXlSYW5nZVNsaWRlcigpO1xuICB9IGVsc2Uge1xuICAgIGxvYWRTY3JpcHQoXCIvdGhlbWVzL2N1c3RvbS9sZXNyb2lzZGVsYXJlbm8vanMvanF1ZXJ5LXVpLm1pbi5qc1wiKS50aGVuKFxuICAgICAgKCkgPT4ge1xuICAgICAgICBsb2Fkc3R5bGUoXCIvdGhlbWVzL2N1c3RvbS9sZXNyb2lzZGVsYXJlbm8vY3NzL2pxdWVyeS11aS1iYXNlLmNzc1wiKS50aGVuKFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlSYW5nZVNsaWRlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdmFyIHNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcuZmlsdGVyLXByaW5jaXBhbCBbbmFtZT1cInNvcnRfYnlcIl0nXG4gICk7XG4gIHNlbGVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIC5maWx0ZXItcHJpbmNpcGFsIFt0eXBlPVwic3VibWl0XCJdICcpLmNsaWNrKCk7XG4gIH0pO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=