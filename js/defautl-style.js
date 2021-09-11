/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/defautl-style.scss":
/*!*************************************!*\
  !*** ./src/scss/defautl-style.scss ***!
  \*************************************/
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
/*!*********************************!*\
  !*** ./src/js/defautl-style.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_defautl_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/defautl-style.scss */ "./src/scss/defautl-style.scss");
 //

(function ($, Drupal) {
  console.log("Drupal.behaviors : ", Drupal.behaviors);

  function addMargeTop() {
    var HM = document.querySelector(".container-menu .navbar-collapse").clientHeight;

    if (document.body.clientWidth > 992) {
      $(".page-node-custom").css({
        marginTop: HM / 2 - 10
      });
      $(".page-orther-custom").css({
        marginTop: HM + "px"
      });
      var page = document.querySelector(".page-term-custom");
      if (page) page.style.marginTop = HM - 10 + "px";
    }
  }

  Drupal.behaviors.myModuleBehavior = {
    attach: function (context, settings) {
      addMargeTop(context);
    }
  };
})(jQuery, Drupal);
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vc3JjL3Njc3MvZGVmYXV0bC1zdHlsZS5zY3NzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9zcmMvanMvZGVmYXV0bC1zdHlsZS5qcyJdLCJuYW1lcyI6WyIkIiwiRHJ1cGFsIiwiY29uc29sZSIsImxvZyIsImJlaGF2aW9ycyIsImFkZE1hcmdlVG9wIiwiSE0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGllbnRIZWlnaHQiLCJib2R5IiwiY2xpZW50V2lkdGgiLCJjc3MiLCJtYXJnaW5Ub3AiLCJwYWdlIiwic3R5bGUiLCJteU1vZHVsZUJlaGF2aW9yIiwiYXR0YWNoIiwiY29udGV4dCIsInNldHRpbmdzIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztDQ0pBOztBQUNBLENBQUMsVUFBVUEsQ0FBVixFQUFhQyxNQUFiLEVBQXFCO0FBQ3BCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWixFQUFtQ0YsTUFBTSxDQUFDRyxTQUExQzs7QUFDQSxXQUFTQyxXQUFULEdBQXVCO0FBQ3JCLFFBQUlDLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQ1Asa0NBRE8sRUFFUEMsWUFGRjs7QUFHQSxRQUFJRixRQUFRLENBQUNHLElBQVQsQ0FBY0MsV0FBZCxHQUE0QixHQUFoQyxFQUFxQztBQUNuQ1gsT0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJZLEdBQXZCLENBQTJCO0FBQUVDLGlCQUFTLEVBQUVQLEVBQUUsR0FBRyxDQUFMLEdBQVM7QUFBdEIsT0FBM0I7QUFDQU4sT0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJZLEdBQXpCLENBQTZCO0FBQzNCQyxpQkFBUyxFQUFFUCxFQUFFLEdBQUc7QUFEVyxPQUE3QjtBQUdBLFVBQUlRLElBQUksR0FBR1AsUUFBUSxDQUFDQyxhQUFULENBQXVCLG1CQUF2QixDQUFYO0FBQ0EsVUFBSU0sSUFBSixFQUFVQSxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsU0FBWCxHQUF1QlAsRUFBRSxHQUFHLEVBQUwsR0FBVSxJQUFqQztBQUNYO0FBQ0Y7O0FBQ0RMLFFBQU0sQ0FBQ0csU0FBUCxDQUFpQlksZ0JBQWpCLEdBQW9DO0FBQ2xDQyxVQUFNLEVBQUUsVUFBVUMsT0FBVixFQUFtQkMsUUFBbkIsRUFBNkI7QUFDbkNkLGlCQUFXLENBQUNhLE9BQUQsQ0FBWDtBQUNEO0FBSGlDLEdBQXBDO0FBS0QsQ0FwQkQsRUFvQkdFLE1BcEJILEVBb0JXbkIsTUFwQlgsRSIsImZpbGUiOiIuL2pzL2RlZmF1dGwtc3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuLi9zY3NzL2RlZmF1dGwtc3R5bGUuc2Nzc1wiO1xuXG4vL1xuKGZ1bmN0aW9uICgkLCBEcnVwYWwpIHtcbiAgY29uc29sZS5sb2coXCJEcnVwYWwuYmVoYXZpb3JzIDogXCIsIERydXBhbC5iZWhhdmlvcnMpO1xuICBmdW5jdGlvbiBhZGRNYXJnZVRvcCgpIHtcbiAgICB2YXIgSE0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIuY29udGFpbmVyLW1lbnUgLm5hdmJhci1jb2xsYXBzZVwiXG4gICAgKS5jbGllbnRIZWlnaHQ7XG4gICAgaWYgKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPiA5OTIpIHtcbiAgICAgICQoXCIucGFnZS1ub2RlLWN1c3RvbVwiKS5jc3MoeyBtYXJnaW5Ub3A6IEhNIC8gMiAtIDEwIH0pO1xuICAgICAgJChcIi5wYWdlLW9ydGhlci1jdXN0b21cIikuY3NzKHtcbiAgICAgICAgbWFyZ2luVG9wOiBITSArIFwicHhcIixcbiAgICAgIH0pO1xuICAgICAgdmFyIHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2UtdGVybS1jdXN0b21cIik7XG4gICAgICBpZiAocGFnZSkgcGFnZS5zdHlsZS5tYXJnaW5Ub3AgPSBITSAtIDEwICsgXCJweFwiO1xuICAgIH1cbiAgfVxuICBEcnVwYWwuYmVoYXZpb3JzLm15TW9kdWxlQmVoYXZpb3IgPSB7XG4gICAgYXR0YWNoOiBmdW5jdGlvbiAoY29udGV4dCwgc2V0dGluZ3MpIHtcbiAgICAgIGFkZE1hcmdlVG9wKGNvbnRleHQpO1xuICAgIH0sXG4gIH07XG59KShqUXVlcnksIERydXBhbCk7XG4iXSwic291cmNlUm9vdCI6IiJ9