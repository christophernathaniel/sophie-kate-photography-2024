/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./_App/js/libraries/EventListenerManager.js":
/*!***************************************************!*\
  !*** ./_App/js/libraries/EventListenerManager.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventListenerManager)
/* harmony export */ });
class EventListenerManager {
    constructor() {
        this.eventListeners = [];
    }
 
    add(element, eventType, listener) {
        element.addEventListener(eventType, listener);
        this.eventListeners.push({ element, eventType, listener });
    }
 
    removeAll() {
        this.eventListeners.forEach(({ element, eventType, listener }) => {
            element.removeEventListener(eventType, listener);
        });
        this.eventListeners = [];
    }
 }
 
 

/***/ }),

/***/ "./_App/js/libraries/ViewportObserver.js":
/*!***********************************************!*\
  !*** ./_App/js/libraries/ViewportObserver.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ViewportObserver {
    constructor(selector, options = {}, callbackIn, callbackOut) {
        this.elements = document.querySelectorAll(selector);
        this.options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
            ...options
        };
        this.callbackIn = callbackIn;
        this.callbackOut = callbackOut;

        this.observers = Array.from(this.elements).map(element =>
            new IntersectionObserver(this.handleIntersect.bind(this), this.options)
        );

        this.observe();
    }

    observe() {
        this.observers.forEach((observer, index) => {
            observer.observe(this.elements[index]);
        });
    }

    unobserve() {
        this.observers.forEach((observer, index) => {
            observer.unobserve(this.elements[index]);
        });
    }

    handleIntersect(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && this.callbackIn) {
                this.callbackIn(entry.target);
            } else if (!entry.isIntersecting && this.callbackOut) {
                this.callbackOut(entry.target);
            }
        });
    }
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewportObserver);

// Target element
// const targetElement = document.querySelector('.your-element');

// // Options for Intersection Observer
// const options = {
//     root: null, // Use viewport as root
//     rootMargin: '0px', // No margin
//     threshold: 0.5, // Trigger callback when 50% of the element is visible
//     once: true // Only trigger callback once
// };

// // Callback function
// const callback = (element) => {
//     console.log('Element is in viewport:', element);
//     // Add your logic here
// };

// // Initialize ViewportObserver

// callback() {

// }
// const observer = new ViewportObserver(document.querySelector('.your-element'), null, callback);

/***/ }),

/***/ "./_App/js/libraries/deBounce.js":
/*!***************************************!*\
  !*** ./_App/js/libraries/deBounce.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ debounce)
/* harmony export */ });
const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(undefined, args);
      }, delay);
    };
};



/***/ }),

/***/ "./_App/js/libraries/wrapWordsInSpans.js":
/*!***********************************************!*\
  !*** ./_App/js/libraries/wrapWordsInSpans.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ wrapWordsInSpans)
/* harmony export */ });
const wrapWordsInSpans = (querySelector) => {
    const elements = document.querySelectorAll(querySelector);

    if (elements.length > 0) {
        elements.forEach(element => {
            const words = element.textContent.trim().split(/\s+/);
            const newContent = words.map(word => `<span>${word}</span>`).join(' ');
            element.innerHTML = newContent;
        });
    } else {
        console.error(`No elements matching the query selector '${querySelector}' found.`);
    }

    return elements.length > 0 ? elements : null;
};




// Usage: wrapWordsInSpans('your-element-id');

/***/ }),

/***/ "./_App/modules/_molecules/header.js":
/*!*******************************************!*\
  !*** ./_App/modules/_molecules/header.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var swift_swap_src_PageFlow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swift-swap/src/PageFlow.js */ "./node_modules/swift-swap/src/PageFlow.js");
/* harmony import */ var swift_swap_src_PageFlow_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swift_swap_src_PageFlow_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_libraries_EventListenerManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/libraries/EventListenerManager */ "./_App/js/libraries/EventListenerManager.js");
/* harmony import */ var _js_libraries_deBounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/libraries/deBounce */ "./_App/js/libraries/deBounce.js");



const headerEventListener = new _js_libraries_EventListenerManager__WEBPACK_IMPORTED_MODULE_1__["default"]();



// HTML Rendered Moduke
const Header = ({ val, parent }) => {
    // Add More items to State
    const localState = { 
       ...val,
       navState : false,
       mobileNavState : false
   };

   const functions = {
    navState: () => {
        variables.navState ? localSelectors.parentElement.classList.add('active') : localSelectors.parentElement.classList.remove('active');
        variables.navState ? document.body.classList.add('has-scrolled') : document.body.classList.remove('has-scrolled');
    }
   }



   const localSelectors = {
    'parentElement': document.querySelector('header')
   }

   // Include PageFlow Dependancies
   const [_, variables] = new swift_swap_src_PageFlow_js__WEBPACK_IMPORTED_MODULE_0__.PageFlow(parent, { ...localState}); // Initialise Component

   // Render Component (Loops the HTML values)
   const RenderComponent = () => {

    let prevState = false;
    let parentElement = document.querySelector(parent)
   
    headerEventListener.removeAll();

    const documentClickListener = (event) => {
        const menu = document.querySelector('.menu-toggle');
        const navMain = document.querySelector('.nav-main');
        const clickedElement = event.target;
    
        // Check if the clicked element is not part of the menu or nav-main
        if (clickedElement !== menu && !menu.contains(clickedElement) &&
            clickedElement !== navMain && !navMain.contains(clickedElement)) {
            // Hide the menu
            variables.mobileNavState = false;
            localSelectors.parentElement.classList.remove('menu-active');
        }
    };
    
    // Add click event listener to the document
    document.addEventListener('click', documentClickListener);

    
    headerEventListener.add(document.querySelector('.menu-toggle'), 'click', () => {
        variables.mobileNavState = !variables.mobileNavState;
        variables.mobileNavState ? localSelectors.parentElement.classList.add('menu-active') : localSelectors.parentElement.classList.remove('menu-active');
    });


    headerEventListener.add(document.querySelector('.nav-main'), 'click', () => {
        variables.mobileNavState = !variables.mobileNavState;
        variables.mobileNavState ? localSelectors.parentElement.classList.add('menu-active') : localSelectors.parentElement.classList.remove('menu-active');
    });




    headerEventListener.add(window, 'scroll', () => {
        variables.navState = (window.scrollY > 1) ? true : false;

       // if(prevState !== variables.navState) {
           functions.navState();
       // }

       // prevState = variables.navState;
    }, 100);

    _.render(); // Final Render Component (Forces render to produce up to date Application State )
   };

   return {
       RenderComponent: RenderComponent // Return the Render Component
   };
};



/***/ }),

/***/ "./_App/modules/_organisms/organism-00/organism-00.js":
/*!************************************************************!*\
  !*** ./_App/modules/_organisms/organism-00/organism-00.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ organism00)
/* harmony export */ });
/* harmony import */ var swift_swap_src_PageFlow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swift-swap/src/PageFlow.js */ "./node_modules/swift-swap/src/PageFlow.js");
/* harmony import */ var swift_swap_src_PageFlow_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swift_swap_src_PageFlow_js__WEBPACK_IMPORTED_MODULE_0__);



// HTML Rendered Moduke
const organism00 = ({ val, parent }) => {
    // Add More items to State
    const localState = { 
       ...val,
       switchName : 'Clear Inputs12',
       switchValue : ''
   };

   // Include PageFlow Dependancies
   const [_, variables] = new swift_swap_src_PageFlow_js__WEBPACK_IMPORTED_MODULE_0__.PageFlow(parent, { ...localState}); // Initialise Component
   // Initialise the Dataset Example:  <dataset data-set="object"><data data-collection="varname"  data-value="vardata" /></dataset>
   const dataset = new swift_swap_src_PageFlow_js__WEBPACK_IMPORTED_MODULE_0__.DatasetHandler(document.querySelector('dataset')).parseData();

   // Typical Functions
   const functions = {
       testCallback: (_this) => { // use callback="clearCallback" on HTML Element
        variables.switchName = 'different';
        return variables.switchName
       },
       clearCallback: (_this) => { // use postcallback="clearCallback" on HTML Element
           return ' ';
       },
       defaultCallback: (_this) => { // use defaultcallback="defaultCallback" on HTML Element
          return '12';
       }
   }

   // Render Component (Loops the HTML values)
   const RenderComponent = () => {
       const id = (0,swift_swap_src_PageFlow_js__WEBPACK_IMPORTED_MODULE_0__.uuid)(); // Generate UUID for block Module. Each time RenderComponent is called the ID gets reset.
       
       document.querySelectorAll(parent + ' [html]').forEach((item) => {
           (0,swift_swap_src_PageFlow_js__WEBPACK_IMPORTED_MODULE_0__.HTMLflow)(_, {item}, functions, id); // HTMLflow renders components
       });

       _.render(); // Final Render Component (Forces render to produce up to date Application State )
   };

   return {
       RenderComponent: RenderComponent // Return the Render Component
   };
};



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./_App/App.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./_App/App.scss ***!
  \**************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&family=Playfair+Display&family=Ubuntu+Sans+Mono:ital,wght@0,400..700;1,400..700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
body {
  margin: 0;
}
body .content-wrapper {
  padding-top: 100px;
}

.wp-block {
  max-width: 100%;
}

.container {
  padding: 0 20px;
}
@media (min-width: 567px) {
  .container {
    padding: 0 40px;
  }
}
@media (min-width: 768px) {
  .container {
    padding: 0 60px;
  }
}

/* Base Variables */
/* Container Unit Responsive Fonts */
.f--light {
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.f--regular {
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.f--semibold {
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 600;
  font-style: normal;
}

.f--bold {
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 800;
  font-style: normal;
}

.tt--uppercase {
  text-transform: uppercase;
}

:where(strong) {
  font-weight: 400;
}

body {
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 1.7em;
}

.--subtitle {
  letter-spacing: 0.7em;
}

.--h1, .--h2, .--h3 {
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-style: normal;
}

.--h1 {
  line-height: 1.4em;
  margin: 0;
  letter-spacing: -0.02em;
}

.--h2 {
  line-height: 1.1em;
  margin: 0;
  letter-spacing: -0.04em;
}

.--h3 {
  line-height: 1.1em;
  margin: 0;
  letter-spacing: -0.04em;
}

a {
  color: var(--color-primary);
  text-decoration: none;
}
a:hover {
  color: var(--color-secondary);
}

:root {
  --sm: 576px;
  --md: 768px;
  --lg: 992px;
  --xl: 1200px;
  --xxl: 1600px;
  --xxxl: 1920px;
}

.container {
  --columns: 12;
  --gutter: 40px;
  --container: 1680px;
}
.container:not(.fluid) {
  max-width: var(--container);
  margin: 0 auto;
}
@media (min-width: 567px) and (max-width: 992px) {
  .container {
    --columns: 6;
  }
}
@media (max-width: 567px) {
  .container {
    --columns: 4;
  }
}
.container .row {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-left: calc(var(--gutter) / -2);
  margin-right: calc(var(--gutter) / -2);
}
.container .col {
  margin-left: calc(var(--gutter) / 2);
  margin-right: calc(var(--gutter) / 2);
}
@media (min-width: 567px) {
  .container .col:not([class*=col-]) {
    flex: 1 0;
  }
}
@media (max-width: 567px) {
  .container .col {
    width: 100%;
  }
}
@media (min-width: 992px) {
  .container .col-1 {
    width: calc(100% / var(--columns) * 1 - var(--gutter));
  }
}
@media (min-width: 992px) {
  .container .col-2 {
    width: calc(100% / var(--columns) * 2 - var(--gutter));
  }
}
@media (min-width: 992px) {
  .container .col-3 {
    width: calc(100% / var(--columns) * 3 - var(--gutter));
  }
}
@media (min-width: 992px) {
  .container .col-4 {
    width: calc(100% / var(--columns) * 4 - var(--gutter));
  }
}
@media (min-width: 992px) {
  .container .col-5 {
    width: calc(100% / var(--columns) * 5 - var(--gutter));
  }
}
@media (min-width: 992px) {
  .container .col-6 {
    width: calc(100% / var(--columns) * 6 - var(--gutter));
  }
}
@media (min-width: 992px) {
  .container .col-7 {
    width: calc(100% / var(--columns) * 7 - var(--gutter));
  }
}
@media (min-width: 992px) {
  .container .col-8 {
    width: calc(100% / var(--columns) * 8 - var(--gutter));
  }
}
@media (min-width: 992px) {
  .container .col-9 {
    width: calc(100% / var(--columns) * 9 - var(--gutter));
  }
}
@media (min-width: 992px) {
  .container .col-10 {
    width: calc(100% / var(--columns) * 10 - var(--gutter));
  }
}
@media (min-width: 992px) {
  .container .col-11 {
    width: calc(100% / var(--columns) * 11 - var(--gutter));
  }
}
@media (min-width: 992px) {
  .container .col-12 {
    width: calc(100% / var(--columns) * 12 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-1 {
    width: calc(50% / var(--columns) * 1 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-2 {
    width: calc(50% / var(--columns) * 2 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-3 {
    width: calc(50% / var(--columns) * 3 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-4 {
    width: calc(50% / var(--columns) * 4 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-5 {
    width: calc(50% / var(--columns) * 5 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-6 {
    width: calc(50% / var(--columns) * 6 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-7 {
    width: calc(50% / var(--columns) * 7 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-8 {
    width: calc(50% / var(--columns) * 8 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-9 {
    width: calc(50% / var(--columns) * 9 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-10 {
    width: calc(50% / var(--columns) * 10 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-11 {
    width: calc(50% / var(--columns) * 11 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-12 {
    width: calc(50% / var(--columns) * 12 - var(--gutter));
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .container .col-lg-1 {
    width: calc(100% / var(--columns) * 1 - var(--gutter));
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .container .col-lg-2 {
    width: calc(100% / var(--columns) * 2 - var(--gutter));
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .container .col-lg-3 {
    width: calc(100% / var(--columns) * 3 - var(--gutter));
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .container .col-lg-4 {
    width: calc(100% / var(--columns) * 4 - var(--gutter));
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .container .col-lg-5 {
    width: calc(100% / var(--columns) * 5 - var(--gutter));
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .container .col-lg-6 {
    width: calc(100% / var(--columns) * 6 - var(--gutter));
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .container .col-lg-7 {
    width: calc(100% / var(--columns) * 7 - var(--gutter));
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .container .col-lg-8 {
    width: calc(100% / var(--columns) * 8 - var(--gutter));
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .container .col-lg-9 {
    width: calc(100% / var(--columns) * 9 - var(--gutter));
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .container .col-lg-10 {
    width: calc(100% / var(--columns) * 10 - var(--gutter));
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .container .col-lg-11 {
    width: calc(100% / var(--columns) * 11 - var(--gutter));
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .container .col-lg-12 {
    width: calc(100% / var(--columns) * 12 - var(--gutter));
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .container .col-xl-1 {
    width: calc(100% / var(--columns) * 1 - var(--gutter));
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .container .col-xl-2 {
    width: calc(100% / var(--columns) * 2 - var(--gutter));
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .container .col-xl-3 {
    width: calc(100% / var(--columns) * 3 - var(--gutter));
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .container .col-xl-4 {
    width: calc(100% / var(--columns) * 4 - var(--gutter));
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .container .col-xl-5 {
    width: calc(100% / var(--columns) * 5 - var(--gutter));
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .container .col-xl-6 {
    width: calc(100% / var(--columns) * 6 - var(--gutter));
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .container .col-xl-7 {
    width: calc(100% / var(--columns) * 7 - var(--gutter));
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .container .col-xl-8 {
    width: calc(100% / var(--columns) * 8 - var(--gutter));
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .container .col-xl-9 {
    width: calc(100% / var(--columns) * 9 - var(--gutter));
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .container .col-xl-10 {
    width: calc(100% / var(--columns) * 10 - var(--gutter));
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .container .col-xl-11 {
    width: calc(100% / var(--columns) * 11 - var(--gutter));
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .container .col-xl-12 {
    width: calc(100% / var(--columns) * 12 - var(--gutter));
  }
}
@media (min-width: 1600px) and (max-width: 1920px) {
  .container .col-xxl-1 {
    width: calc(100% / var(--columns) * 1 - var(--gutter));
  }
}
@media (min-width: 1600px) and (max-width: 1920px) {
  .container .col-xxl-2 {
    width: calc(100% / var(--columns) * 2 - var(--gutter));
  }
}
@media (min-width: 1600px) and (max-width: 1920px) {
  .container .col-xxl-3 {
    width: calc(100% / var(--columns) * 3 - var(--gutter));
  }
}
@media (min-width: 1600px) and (max-width: 1920px) {
  .container .col-xxl-4 {
    width: calc(100% / var(--columns) * 4 - var(--gutter));
  }
}
@media (min-width: 1600px) and (max-width: 1920px) {
  .container .col-xxl-5 {
    width: calc(100% / var(--columns) * 5 - var(--gutter));
  }
}
@media (min-width: 1600px) and (max-width: 1920px) {
  .container .col-xxl-6 {
    width: calc(100% / var(--columns) * 6 - var(--gutter));
  }
}
@media (min-width: 1600px) and (max-width: 1920px) {
  .container .col-xxl-7 {
    width: calc(100% / var(--columns) * 7 - var(--gutter));
  }
}
@media (min-width: 1600px) and (max-width: 1920px) {
  .container .col-xxl-8 {
    width: calc(100% / var(--columns) * 8 - var(--gutter));
  }
}
@media (min-width: 1600px) and (max-width: 1920px) {
  .container .col-xxl-9 {
    width: calc(100% / var(--columns) * 9 - var(--gutter));
  }
}
@media (min-width: 1600px) and (max-width: 1920px) {
  .container .col-xxl-10 {
    width: calc(100% / var(--columns) * 10 - var(--gutter));
  }
}
@media (min-width: 1600px) and (max-width: 1920px) {
  .container .col-xxl-11 {
    width: calc(100% / var(--columns) * 11 - var(--gutter));
  }
}
@media (min-width: 1600px) and (max-width: 1920px) {
  .container .col-xxl-12 {
    width: calc(100% / var(--columns) * 12 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-md-1 {
    width: calc(100% / var(--columns) * 1 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-md-2 {
    width: calc(100% / var(--columns) * 2 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-md-3 {
    width: calc(100% / var(--columns) * 3 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-md-4 {
    width: calc(100% / var(--columns) * 4 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-md-5 {
    width: calc(100% / var(--columns) * 5 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-md-6 {
    width: calc(100% / var(--columns) * 6 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-md-7 {
    width: calc(100% / var(--columns) * 7 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-md-8 {
    width: calc(100% / var(--columns) * 8 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-md-9 {
    width: calc(100% / var(--columns) * 9 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-md-10 {
    width: calc(100% / var(--columns) * 10 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-md-11 {
    width: calc(100% / var(--columns) * 11 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-md-12 {
    width: calc(100% / var(--columns) * 12 - var(--gutter));
  }
}
@media (max-width: 567px) {
  .container .col-sm-1 {
    width: calc(100% / var(--columns) * 1 - var(--gutter));
  }
}
@media (max-width: 567px) {
  .container .col-sm-2 {
    width: calc(100% / var(--columns) * 2 - var(--gutter));
  }
}
@media (max-width: 567px) {
  .container .col-sm-3 {
    width: calc(100% / var(--columns) * 3 - var(--gutter));
  }
}
@media (max-width: 567px) {
  .container .col-sm-4 {
    width: calc(100% / var(--columns) * 4 - var(--gutter));
  }
}
@media (max-width: 567px) {
  .container .col-sm-5 {
    width: calc(100% / var(--columns) * 5 - var(--gutter));
  }
}
@media (max-width: 567px) {
  .container .col-sm-6 {
    width: calc(100% / var(--columns) * 6 - var(--gutter));
  }
}
@media (max-width: 567px) {
  .container .col-sm-7 {
    width: calc(100% / var(--columns) * 7 - var(--gutter));
  }
}
@media (max-width: 567px) {
  .container .col-sm-8 {
    width: calc(100% / var(--columns) * 8 - var(--gutter));
  }
}
@media (max-width: 567px) {
  .container .col-sm-9 {
    width: calc(100% / var(--columns) * 9 - var(--gutter));
  }
}
@media (max-width: 567px) {
  .container .col-sm-10 {
    width: calc(100% / var(--columns) * 10 - var(--gutter));
  }
}
@media (max-width: 567px) {
  .container .col-sm-11 {
    width: calc(100% / var(--columns) * 11 - var(--gutter));
  }
}
@media (max-width: 567px) {
  .container .col-sm-12 {
    width: calc(100% / var(--columns) * 12 - var(--gutter));
  }
}
@media (min-width: 992px) {
  .container .offset-1 {
    margin-left: calc(100% / var(--columns) * 1 + var(--gutter) / 2);
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .offset-1 {
    margin-left: calc(50% / var(--columns) * 1 + var(--gutter) / 2);
  }
}
@media (min-width: 992px) {
  .container .offset-2 {
    margin-left: calc(100% / var(--columns) * 2 + var(--gutter) / 2);
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .offset-2 {
    margin-left: calc(50% / var(--columns) * 2 + var(--gutter) / 2);
  }
}
@media (min-width: 992px) {
  .container .offset-3 {
    margin-left: calc(100% / var(--columns) * 3 + var(--gutter) / 2);
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .offset-3 {
    margin-left: calc(50% / var(--columns) * 3 + var(--gutter) / 2);
  }
}
@media (min-width: 992px) {
  .container .offset-4 {
    margin-left: calc(100% / var(--columns) * 4 + var(--gutter) / 2);
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .offset-4 {
    margin-left: calc(50% / var(--columns) * 4 + var(--gutter) / 2);
  }
}
@media (min-width: 992px) {
  .container .offset-5 {
    margin-left: calc(100% / var(--columns) * 5 + var(--gutter) / 2);
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .offset-5 {
    margin-left: calc(50% / var(--columns) * 5 + var(--gutter) / 2);
  }
}
@media (min-width: 992px) {
  .container .offset-6 {
    margin-left: calc(100% / var(--columns) * 6 + var(--gutter) / 2);
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .offset-6 {
    margin-left: calc(50% / var(--columns) * 6 + var(--gutter) / 2);
  }
}
@media (min-width: 992px) {
  .container .offset-7 {
    margin-left: calc(100% / var(--columns) * 7 + var(--gutter) / 2);
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .offset-7 {
    margin-left: calc(50% / var(--columns) * 7 + var(--gutter) / 2);
  }
}
@media (min-width: 992px) {
  .container .offset-8 {
    margin-left: calc(100% / var(--columns) * 8 + var(--gutter) / 2);
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .offset-8 {
    margin-left: calc(50% / var(--columns) * 8 + var(--gutter) / 2);
  }
}
@media (min-width: 992px) {
  .container .offset-9 {
    margin-left: calc(100% / var(--columns) * 9 + var(--gutter) / 2);
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .offset-9 {
    margin-left: calc(50% / var(--columns) * 9 + var(--gutter) / 2);
  }
}
@media (min-width: 992px) {
  .container .offset-10 {
    margin-left: calc(100% / var(--columns) * 10 + var(--gutter) / 2);
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .offset-10 {
    margin-left: calc(50% / var(--columns) * 10 + var(--gutter) / 2);
  }
}
@media (min-width: 992px) {
  .container .offset-11 {
    margin-left: calc(100% / var(--columns) * 11 + var(--gutter) / 2);
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .offset-11 {
    margin-left: calc(50% / var(--columns) * 11 + var(--gutter) / 2);
  }
}
@media (min-width: 992px) {
  .container .offset-12 {
    margin-left: calc(100% / var(--columns) * 12 + var(--gutter) / 2);
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .offset-12 {
    margin-left: calc(50% / var(--columns) * 12 + var(--gutter) / 2);
  }
}

.grid-lines {
  --columns: 12;
  --gutter: 40px;
  position: absolute;
  inset: 0;
  display: flex;
  height: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
}
@media (min-width: 567px) and (max-width: 992px) {
  .grid-lines {
    --columns: 6;
  }
}
@media (max-width: 567px) {
  .grid-lines {
    --columns: 4;
  }
}
.grid-lines span {
  outline: 1px solid red;
  margin-right: var(--gutter);
  display: block;
  width: calc(100% / var(--columns) - (var(--gutter)));
  background-color: rgba(0, 0, 0, 0.05);
  margin-left: calc(var(--gutter) / 2);
  margin-right: calc(var(--gutter) / 2);
}

/* Base font size in pixels (1rem = 16px) */
/* The viewport width factor */
.fs--14, .fs--14 .--fs {
  font-size: clamp(0.6875rem, 0.6875rem + 0.15625vw, 0.875rem);
}

.fs--15, .fs--15 .--fs {
  font-size: clamp(0.6875rem, 0.6875rem + 0.15625vw, 0.9375rem);
}

.fs--16, .fs--16 .--fs {
  font-size: clamp(0.875rem, 0.875rem + 0.2604166667vw, 1rem);
}

.fs--36, .fs--36 .--fs {
  font-size: clamp(1.625rem, 1.625rem + 0.5208333333vw, 2.25rem);
}

.fs--70, .fs--70 .--fs {
  font-size: clamp(0rem, 0rem + 3.6458333333vw, 4.375rem);
}

.fs--48, .fs--48 .--fs {
  font-size: clamp(2.25rem, 2.25rem + 2.5vw, 3rem);
}

.fs--96, .fs--96 .--fs {
  font-size: clamp(2.75rem, 2.75rem + 2.2916666667vw, 6rem);
}

/* Global Variables */
:root {
  --color-primary: #3F3F3F;
  --color-secondary: #B7B7A4;
  --color-3: #E8E8E4;
  --color-4: #EDEDE9;
  --color-5: #F5F5F4;
  --color-6: #F9CE65;
  --color-7: #D54821;
  --color-8: #D784FC;
  --color-white: #FFFFFF;
  --color-white-always: #FFFFFF;
  --color-black: #000000;
  --sm: 576px;
  --md: 768px;
  --lg: 992px;
  --xl: 1200px;
  --xxl: 1600px;
  --xxxl: 1920px;
}

body.dark-theme, body:has(.page-dark) {
  --color-primary: #F0F0EF;
  --color-secondary: #C5C5C5;
  --color-3: #E8E8E4;
  --color-4: #0D0D0D;
  --color-5: #FFFFFF;
  --color-6: #F9CE65;
  --color-7: #D54821;
  --color-8: #D784FC;
  --color-white: #000000;
  --color-white-always: #FFFFFF;
  --color-black: #FFFFFF;
}

.c--primary {
  color: var(--color-primary);
}

.c--secondary {
  color: var(--color-secondary);
}

.c--secondary-alt {
  color: var(--color-secondary-alt);
}

.c--3 {
  color: var(--color-3);
}

.c--4 {
  color: var(--color-4);
}

.c--5 {
  color: var(--color-5);
}

.c--6 {
  color: var(--color-6);
}

.c--7 {
  color: var(--color-7);
}

.c--8 {
  color: var(--color-8);
}

.c--white {
  color: var(--color-white);
}

.c--white-alt {
  color: var(--color-white-alt);
}

.c--black {
  color: var(--color-black);
}

.bg--primary {
  background-color: var(--color-primary);
}

.bg--secondary {
  background-color: var(--color-secondary);
}

.bg--secondary-alt {
  background-color: var(--color-secondary-alt);
}

.bg--3 {
  background-color: var(--color-3);
}

.bg--4 {
  background-color: var(--color-4);
}

.bg--5 {
  background-color: var(--color-5);
}

@keyframes loadingIn {
  from {
    opacity: 0;
  }
  85% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes loadingOut {
  from {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  99.9% {
    width: auto;
  }
  to {
    width: 0%;
    opacity: 0;
  }
}
@keyframes loadingOutDiv {
  from {
    opacity: 0.7;
  }
  30% {
    opacity: 1;
  }
  60% {
    opacity: 0.7;
  }
  90% {
    opacity: 1;
  }
  99.9% {
    width: auto;
  }
  to {
    width: 0%;
    opacity: 0.9;
  }
}
/* Atoms */
.--button {
  display: flex;
  align-items: center;
  margin-right: 30px;
}
.--button:hover svg {
  stroke: var(--color-secondary);
}
.--button .arrow-icon {
  margin-top: -4px;
  margin-left: 15px;
  rotate: -90deg;
}

.arrow-icon {
  stroke: var(--color-primary);
}

.hdr-logo {
  padding: 0;
  margin: 0;
}

.signature {
  fill: var(--color-black);
  stroke: var(--color-black);
}

/* Molecules */
.image-tile:before {
  content: " ";
  position: absolute;
  left: 10%;
  border-radius: 100%;
  bottom: -25%;
  transform: translateX(-50%) translateY(-50%);
  width: clamp(2.1875rem, 3.6458333333vw, 4.375rem);
  aspect-ratio: 1/1;
  background: var(--color-4);
  border: 7px solid var(--color-secondary);
  z-index: 3;
}
.image-tile .inner {
  width: clamp(5.6875rem, 9.4791666667vw, 11.375rem);
  overflow: hidden;
  display: block;
  aspect-ratio: 1/1;
  border-radius: clamp(2rem, 3.3333333333vw, 4rem);
  display: flex;
  transform: scale(1);
}
.image-tile .inner img {
  width: 100%;
  object-fit: cover;
}
.skill-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
}
@media (min-width: 567px) and (max-width: 899px) {
  .skill-item {
    grid-template-columns: 1fr;
  }
}
.skill-item .--left {
  display: flex;
  flex-direction: column;
}
@media (min-width: 567px) {
  .skill-item .--left {
    width: clamp(8.75rem, 10.4166666667vw, 12.5rem);
  }
}
.skill-item .--left strong, .skill-item .--left span {
  line-height: 1.1em;
}
.skill-item .--right {
  padding-top: clamp(0.2625rem, 0.3125vw, 0.375rem);
}
@media (min-width: 567px) and (max-width: 899px) {
  .skill-item .--right {
    padding-top: clamp(0.875rem, 1.0416666667vw, 1.25rem);
    padding-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
  }
}
@media (max-width: 566px) {
  .skill-item .--right {
    justify-self: end;
  }
}
.skill-item .--progress {
  display: flex;
  align-items: center;
  gap: clamp(0.35rem, 0.4166666667vw, 0.5rem);
  flex: 0 0 auto;
}
.skill-item .--progress li {
  height: 8px;
  width: 8px;
  border-radius: 4.5px;
  background-color: var(--color-primary);
}
.skill-item .--progress[data-progress="1"] li:nth-child(1n+2) {
  background-color: var(--color-secondary);
}
.skill-item .--progress[data-progress="2"] li:nth-child(1n+3) {
  background-color: var(--color-secondary);
}
.skill-item .--progress[data-progress="3"] li:nth-child(1n+4) {
  background-color: var(--color-secondary);
}
.skill-item .--progress[data-progress="4"] li:nth-child(1n+5) {
  background-color: var(--color-secondary);
}
.skill-item .--progress[data-progress="5"] li:nth-child(1n+6) {
  background-color: var(--color-secondary);
}
.skill-item .--progress[data-progress="6"] li:nth-child(1n+7) {
  background-color: var(--color-secondary);
}

.header {
  position: fixed;
  z-index: 10;
  background-color: var(--color-white);
  backdrop-filter: blur(100px);
  width: 100%;
}
.header .header--inner {
  display: flex;
  justify-content: space-between;
  align-items: end;
}
.header .--left {
  display: flex;
  justify-content: space-between;
  align-items: end;
}
.header .--right {
  padding-right: clamp(6.43125rem, 7.65625vw, 9.1875rem);
}
.header .--right .navicon {
  transition: 300ms linear top;
  position: absolute;
  top: 38px;
  right: 32px;
}
@media (max-width: 9928px) {
  .header .--right .--button {
    display: none;
  }
}
@media (min-width: 992px) {
  .header .--right .--button {
    position: relative;
    top: -10px;
  }
  .header .--right .navicon {
    display: none;
  }
}
.header svg {
  fill: var(--color-primary);
}
.header .logo {
  width: clamp(6.43125rem, 7.65625vw, 9.1875rem);
  transition: 300ms linear width;
  aspect-ratio: 175/129;
  height: unset;
}
@media (max-width: 992px) {
  .header .nav-main {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0px;
    width: 300px;
    right: -300px;
    transition: 100ms linear right;
    background-color: var(--color-white);
    z-index: 20;
    height: 100vh;
  }
  .header:after {
    z-index: 11;
    top: 0;
    bottom: 0;
    width: 100vw;
    right: -100vw;
    background-color: var(--color-3);
    content: "";
    position: fixed;
    display: block;
    height: 100vh;
    opacity: 0.7;
    transition: 100ms linear right;
  }
  .header.menu-active .nav-main {
    right: 0px;
  }
  .header.menu-active:after {
    right: 0;
  }
  .header .nav-main ul {
    padding: 0 40px;
    list-style: none;
  }
  .header .nav-main ul li {
    border-bottom: 1px solid var(--color-3);
  }
  .header .nav-main ul a {
    padding: 10px 0;
    display: block;
  }
}
@media (min-width: 992px) {
  .header .nav-main ul {
    list-style: none;
    display: flex;
  }
  .header .nav-main ul li {
    word-break: keep-all;
  }
  .header .nav-main ul a {
    text-wrap: nowrap;
    padding: 5px 20px;
  }
}

.has-scrolled .header .logo {
  width: clamp(4.2rem, 5vw, 6rem);
}
.has-scrolled .header .navicon {
  top: 10px;
  right: 32px;
}

footer#footer {
  background-color: var(--color-4);
}
footer#footer .--center {
  text-align: center;
}
footer#footer .--top {
  padding-top: 200px;
}
footer#footer .--bottom {
  padding-top: 100px;
  padding-bottom: 50px;
}
footer#footer .--svg {
  margin-bottom: 40px;
}
footer#footer .--svg svg {
  max-width: 100%;
  fill: var(--color-primary);
  stroke: var(--color-primary);
}

/* Organisms */
.organism-00 {
  position: relative;
  margin: 20px;
  padding: 40px;
  background: var(--colour-gray-3);
  border-radius: 20px;
}
.organism-00.loader-content:has(.loader) > *:not(.loader) {
  opacity: 0;
  animation: loadingIn 2s normal forwards ease-in-out;
}
.organism-00 .loader {
  z-index: 0;
  position: absolute;
  top: 40px;
  left: 40px;
  bottom: 40px;
  right: 40px;
  overflow: hidden;
}
.organism-00 .loader div {
  background: linear-gradient(90deg, rgb(220, 219, 230) 0%, rgb(230, 232, 238) 14%, rgb(234, 238, 240) 100%);
  background: var(--colour-gray-8);
  border-radius: 4px;
  width: 100%;
  margin-bottom: 20px;
}
.organism-00 .loader {
  animation: loadingOut 2s normal forwards ease-in-out;
  opacity: 1;
}
.organism-00 .loader div {
  animation: loadingOutDiv 2s normal forwards ease-in-out;
}

.header-block-01 {
  position: relative;
  padding-bottom: 100px;
}
@media (min-width: 992px) {
  .header-block-01 {
    height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    min-height: 800px;
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .header-block-01 .row > .col:first-child {
    display: flex;
    justify-content: center;
  }
  .header-block-01 .row > .col:first-child h1 {
    left: 60px;
    position: relative;
  }
  .header-block-01 .row > .col:first-child h1 span:nth-of-type(1) {
    position: relative;
    left: -100px;
  }
  .header-block-01 .row > .col:first-child h1 span:nth-of-type(2) {
    position: relative;
    left: -100px;
  }
}
.header-block-01 .--left {
  max-width: clamp(22.34375rem, 28.6458333333vw, 34.375rem);
}
.header-block-01 .--left .--page-down {
  padding-top: 40px;
  padding-bottom: 40px;
}
@media (min-width: 992px) {
  .header-block-01 .--left .--page-down {
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
  }
}
@media (max-width: 992px) {
  .header-block-01 .--left .--page-down {
    display: block;
    text-align: center;
  }
}
.header-block-01 .--left .--title {
  color: var(--color-secondary);
}
.header-block-01 .--left .--title span {
  display: block;
  color: var(--color-primary);
}
.header-block-01 .--button {
  justify-content: end;
}
.header-block-01 .--right, .header-block-01 .--right .--grid {
  height: 100%;
}
.header-block-01 .--right .--link {
  text-align: center;
}
.header-block-01 .--right .--grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: center;
  justify-content: end;
  width: 100%;
  box-sizing: border-box;
}
@media (min-width: 992px) {
  .header-block-01 .--right .--grid {
    padding-left: clamp(2.625rem, 3.125vw, 3.75rem);
  }
}
@media (min-width: 567px) {
  .header-block-01 .--right .--grid {
    gap: 10%;
  }
}
@media (min-width: 567px) and (max-width: 1200px) {
  .header-block-01 .--right .--grid a:nth-child(2) {
    padding-top: 200px;
  }
}
@media (max-width: 567px) {
  .header-block-01 .--right .--grid {
    grid-template-columns: 1fr;
  }
  .header-block-01 .--right .--grid a:nth-child(2) .--image {
    order: 2;
  }
  .header-block-01 .--right .--grid .--link {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 20px;
  }
  .header-block-01 .--right .--grid .--link .--image .--number {
    display: none;
  }
}
.header-block-01 .--right .--h2 {
  justify-content: center;
  display: flex;
}
.header-block-01 .--right .--image {
  position: relative;
}
.header-block-01 .--right .--image img {
  width: 100%;
  height: auto;
  border-radius: 160px;
  box-shadow: 2vw 2vw 0px var(--color-4);
}
@media (min-width: 567px) {
  .header-block-01 .--right .--image:after {
    content: " ";
    display: block;
    height: 30px;
    width: 2px;
    background-color: var(--color-primary);
    position: absolute;
    left: 50%;
    bottom: clamp(-2.625rem, -3.125vw, -3.75rem);
  }
}
@media (min-width: 567px) {
  .header-block-01 .--right .--number {
    position: absolute;
    bottom: -5%;
    right: -18%;
  }
}
.header-block-01 .--right .--subtitle {
  padding-top: 20px;
  margin-bottom: clamp(0.4375rem, 0.5208333333vw, 0.625rem);
}
@media (min-width: 567px) {
  .header-block-01 .--right .--subtitle {
    padding-top: clamp(3.0625rem, 3.6458333333vw, 4.375rem);
  }
}
@media (max-width: 567px) {
  .header-block-01 .--right .--title {
    padding-bottom: 20px;
  }
}
@media (min-width: 567px) {
  .header-block-01 .--right .--group .--number {
    display: none;
  }
}

.in-focus-block-02 {
  background-color: var(--color-4);
  padding-top: clamp(5.25rem, 6.25vw, 7.5rem);
  padding-bottom: clamp(2.625rem, 3.125vw, 3.75rem);
}
.in-focus-block-02 .--subtitle {
  margin-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
}
.in-focus-block-02 .--title {
  max-width: 700px;
  margin-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
}
.in-focus-block-02 .--text {
  max-width: 600px;
  margin-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
}
.in-focus-block-02 .--signature svg {
  max-width: 100%;
  fill: var(--color-primary);
}
.in-focus-block-02 .--center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.articles-block-03 {
  padding-top: clamp(5.25rem, 6.25vw, 7.5rem);
  padding-bottom: clamp(2.625rem, 3.125vw, 3.75rem);
}
.articles-block-03 .--subtitle {
  margin-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
}
.articles-block-03 .--title {
  max-width: 700px;
  margin-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
}
.articles-block-03 .--text {
  max-width: 600px;
  margin-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
}
.articles-block-03 .--center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.articles-block-03 .--content {
  padding-bottom: clamp(3.5rem, 4.1666666667vw, 5rem);
}
.articles-block-03 .--listing .--link {
  display: block;
  position: relative;
  overflow: hidden;
  margin-bottom: 40px;
}
.articles-block-03 .--listing .--link:hover .--overlay {
  opacity: 1;
}
.articles-block-03 .--listing .--overlay {
  transition: 200ms ease-out all;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  color: var(--color-white-always);
  padding: clamp(1.3125rem, 1.5625vw, 1.875rem);
  padding-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
  box-sizing: border-box;
}
@media (pointer: coarse) {
  .articles-block-03 .--listing .--overlay {
    opacity: 1;
  }
}
.articles-block-03 .--listing .--overlay h3, .articles-block-03 .--listing .--overlay p {
  width: 500px;
  max-width: 100%;
}
.articles-block-03 .--listing .--image {
  width: 100%;
  height: clamp(30.625rem, 36.4583333333vw, 43.75rem);
  object-fit: cover;
  display: block;
}
.articles-block-03 .--end {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 20px;
}

.small-package-block-04 {
  padding-top: clamp(5.25rem, 6.25vw, 7.5rem);
  padding-bottom: clamp(3.5rem, 4.1666666667vw, 5rem);
}
.small-package-block-04 .--subtitle {
  margin-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
}
.small-package-block-04 .--title {
  max-width: 700px;
  margin-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
}
.small-package-block-04 .--text {
  max-width: 600px;
  margin-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
}
.small-package-block-04 .--signature svg {
  max-width: 100%;
  fill: var(--color-primary);
}
.small-package-block-04 .--center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.small-package-block-04 .--inner {
  padding-bottom: clamp(1.75rem, 2.0833333333vw, 2.5rem);
}
.small-package-block-04 ul {
  list-style: none;
  padding: 0 14px 20px;
  margin: 0;
}
.small-package-block-04 ul li {
  margin: 4px 0;
}
.small-package-block-04 ul li:before {
  content: "•";
  color: var(--color-primary);
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

.image-block-05 img {
  width: 100%;
}

.link-block-06 {
  padding-top: clamp(5.25rem, 6.25vw, 7.5rem);
  padding-bottom: clamp(2.625rem, 3.125vw, 3.75rem);
}
.link-block-06 .--subtitle {
  margin-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
}
.link-block-06 .--title {
  max-width: 700px;
  margin-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
}
.link-block-06 .--text {
  max-width: 600px;
  margin-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
}
.link-block-06 .--signature svg {
  max-width: 100%;
  fill: var(--color-primary);
}
.link-block-06 .--center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.page-title-block-07 .--top {
  padding-top: clamp(5.25rem, 6.25vw, 7.5rem);
  padding-bottom: clamp(5.25rem, 6.25vw, 7.5rem);
}

.large-content-block-08.flip .row {
  flex-direction: row-reverse;
}
.large-content-block-08 .--title {
  color: var(--color-secondary);
}
.large-content-block-08 .--title span {
  display: block;
  color: var(--color-primary);
}
.large-content-block-08 .--text {
  max-width: 500px;
  margin-bottom: clamp(1.75rem, 2.0833333333vw, 2.5rem);
}
.large-content-block-08 .--h1 {
  line-height: 1.4em;
  margin: 0;
  letter-spacing: -0.02em;
}
.large-content-block-08 .--image {
  width: 100%;
  aspect-ratio: 982/1400;
  object-fit: cover;
  position: relative;
  z-index: 1;
}
.large-content-block-08 .--left {
  position: relative;
  z-index: 6;
  padding-top: clamp(1.75rem, 2.0833333333vw, 2.5rem);
}
.large-content-block-08 .--justify {
  justify-content: space-between;
}
.large-content-block-08 .--center {
  text-align: center;
}
.large-content-block-08 .--right {
  position: relative;
}
.large-content-block-08 .--square {
  aspect-ratio: 1/1;
  width: clamp(22.5rem, 46.875vw, 56.25rem);
  position: absolute;
  z-index: 0;
  background-color: var(--color-4);
  top: 40%;
  transform: translateY(-50%);
  right: 50%;
}
.large-content-block-08.flip .--square {
  right: auto;
  left: 50%;
}
.large-content-block-08 .--testimonial {
  display: block;
  padding-top: clamp(4.375rem, 5.2083333333vw, 6.25rem);
  padding-bottom: clamp(4.375rem, 5.2083333333vw, 6.25rem);
  position: relative;
}
.large-content-block-08 .--testimonial svg {
  fill: var(--color-primary);
}
.large-content-block-08 .--testimonial .quote-left {
  position: absolute;
  left: 0;
}
.large-content-block-08 .--testimonial .quote-right {
  position: absolute;
  right: 0;
}
.large-content-block-08 .--testimonial .--subtitle, .large-content-block-08 .--testimonial .--quote {
  display: inline-block;
  padding-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
}

.large-package-block-09 {
  padding-top: clamp(5.25rem, 6.25vw, 7.5rem);
  padding-bottom: clamp(3.5rem, 4.1666666667vw, 5rem);
}
.large-package-block-09 .--subtitle {
  margin-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
}
.large-package-block-09 .--title {
  max-width: 700px;
  margin-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
}
.large-package-block-09 .--text {
  max-width: 600px;
  margin-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
}
.large-package-block-09 .--signature svg {
  max-width: 100%;
  fill: var(--color-primary);
}
.large-package-block-09 .--center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.large-package-block-09 .--inner {
  padding-bottom: clamp(1.75rem, 2.0833333333vw, 2.5rem);
}
.large-package-block-09 ul {
  list-style: none;
  padding: 0 14px 20px;
  margin: 0;
}
.large-package-block-09 ul li {
  margin: 4px 0;
}
.large-package-block-09 ul li:before {
  content: "•";
  color: var(--color-primary);
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

.testimonial-block-10 {
  padding-top: clamp(5.25rem, 6.25vw, 7.5rem);
  padding-bottom: clamp(5.25rem, 6.25vw, 7.5rem);
}
.testimonial-block-10 .--title {
  max-width: 700px;
  margin-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
}
.testimonial-block-10 .--text {
  max-width: 600px;
  margin-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
}
.testimonial-block-10 .--center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
}
.testimonial-block-10 svg {
  fill: var(--color-primary);
}
.testimonial-block-10 .quote-left {
  position: absolute;
  left: 0;
}
.testimonial-block-10 .quote-right {
  position: absolute;
  right: 0;
  bottom: 0;
}
.testimonial-block-10 .--subtitle, .testimonial-block-10 .--quote {
  display: inline-block;
  padding-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
}

.gallery-block-11 {
  --item-width: 320px;
  --inner-width: 1257px;
  margin-top: clamp(2.625rem, 3.125vw, 3.75rem);
  margin-bottom: clamp(2.625rem, 3.125vw, 3.75rem);
}
.gallery-block-11 .card {
  padding: 0px;
}
.gallery-block-11 .card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  height: 440px;
}
.gallery-block-11 .card {
  background-color: var(--color-secondary-alt);
  border-radius: 40px;
}
.gallery-block-11 .scroll-container {
  --viewport-content: 1500px;
  overflow: scroll;
  will-change: transform;
  scroll-snap-type: x mandatory;
  scroll-padding: calc(50% - var(--viewport-content) / 2);
  scrollbar-width: none;
  cursor: move; /* fallback if grab cursor is unsupported */
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}
.gallery-block-11 .scroll-container:active {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}
.gallery-block-11 .item-container {
  padding: 0;
  margin: 25px 0 0;
  display: grid;
  grid-gap: var(--grid-gap);
  grid-auto-flow: column;
  width: -moz-fit-content;
  width: fit-content;
  padding-left: 40px;
}
@media (min-width: 1500px) {
  .gallery-block-11 .item-container {
    padding-left: calc(50% - var(--viewport-content) / 2);
  }
}
.gallery-block-11 .item-container .item {
  max-width: var(--item-width);
  min-width: 250px;
  max-width: calc(var(--inner-width, 100vw) * 0.875);
  width: max-content;
  display: flex;
  margin-right: 30px;
  transition: 300ms linear all;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}
.gallery-block-11 .item-container .item img {
  display: block;
}
.gallery-block-11 .paddles {
  display: flex;
  justify-content: flex-end;
  gap: 40px;
  margin-top: 40px;
  padding-left: 120px;
  padding-bottom: clamp(1.25rem, 2.0833333333vw, 2.5rem);
}
.gallery-block-11 .paddles svg {
  margin: 0px;
  stroke: var(--color-primary);
}
.gallery-block-11 .paddles .paddlenav--left, .gallery-block-11 .paddles .paddlenav--right {
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: var(--color-secondary-alt);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.client-galleries-12 {
  padding-top: clamp(2.625rem, 3.125vw, 3.75rem);
  padding-bottom: clamp(5.25rem, 6.25vw, 7.5rem);
}
.client-galleries-12 ul {
  list-style: none;
  padding: 0;
}
.client-galleries-12 .--link {
  position: relative;
  background-color: var(--color-black);
}
@media (min-width: 567px) and (max-width: 690px) {
  .client-galleries-12 .--excerpt {
    display: none;
  }
}
.client-galleries-12 .--image {
  width: 100%;
  aspect-ratio: 4/4;
  object-fit: cover;
  position: relative;
  z-index: 1;
}
.client-galleries-12 .image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  min-height: 50%;
  box-sizing: border-box;
  color: var(--color-white-always);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  z-index: 2;
  transition: opacity 0.3s;
}

.masonry-block-13 {
  padding-top: clamp(2.625rem, 3.125vw, 3.75rem);
  padding-bottom: clamp(5.25rem, 6.25vw, 7.5rem);
}
.masonry-block-13 .grid-item {
  width: 25%;
}
.masonry-block-13 .grid-item:nth-child(4n+3) {
  width: 50%;
}
.masonry-block-13 .--block {
  aspect-ratio: 1/1;
  padding: 10px;
  box-sizing: border-box;
}
.masonry-block-13 .--image {
  aspect-ratio: 1/1;
  object-fit: cover;
  width: 100%;
  display: block;
}

.article-page-layout {
  padding-top: 200px;
  margin-bottom: 100px;
}
.article-page-layout .--sidebar {
  margin-top: 40px;
}
.article-page-layout .--sidebar ul {
  list-style: none;
  padding: 0;
  margin-bottom: 40px;
}
.article-page-layout .--sidebar ul li {
  border-bottom: 1px solid var(--color-4);
}
.article-page-layout .--sidebar ul a {
  display: inline-block;
  padding: 10px 0;
}
.article-page-layout .--grid {
  display: grid;
  grid-template-columns: 1fr;
  flex-wrap: wrap;
}
@media (min-width: 768px) {
  .article-page-layout .--grid {
    grid-template-columns: 1fr 1fr;
  }
}
.article-page-layout .pagination {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 100px;
}
.article-page-layout .--post {
  padding: 40px;
  box-sizing: border-box;
  border-bottom: 1px solid var(--color-4);
}
@media (min-width: 768px) {
  .article-page-layout .--post:nth-child(odd) {
    border-right: 1px solid var(--color-4);
    border-bottom: 1px solid var(--color-4);
  }
  .article-page-layout .--post:nth-child(even) {
    border-bottom: 1px solid var(--color-4);
  }
  .article-page-layout .--post:nth-child(odd):nth-last-child(2), .article-page-layout .--post:nth-last-child(1) {
    border-bottom: 0px;
  }
}

.cookie-button {
  background-color: var(--color-black) !important;
}
.cookie-button svg {
  fill: var(--color-white) !important;
  scale: 0.6;
}

body {
  background-color: var(--color-white);
  color: var(--color-primary);
}

.interface-interface-skeleton__sidebar .interface-complementary-area {
  width: 100%;
}

.is-sidebar-opened .interface-interface-skeleton__sidebar {
  width: 400px;
  position: absolute !important;
  right: 0px !important;
  left: calc(100% - 400px) !important;
  opacity: 0.9;
  top: 61px;
}

.editor-styles-wrapper {
  padding-left: 0;
  padding-right: 0;
  padding-top: 100px;
}

.editor-editor-canvas__post-title-wrapper {
  margin-top: 4rem;
  border-bottom: 1px solid #e1e1e1;
  position: fixed;
  width: 100%;
  z-index: 10;
  background-color: #fff;
  top: -4px;
  padding-left: 40px;
  opacity: 0.9;
}

.password-ui {
  padding-top: 200px;
  padding-bottom: 200px;
}
.password-ui .password-form {
  margin-top: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.password-ui .underscores {
  display: flex;
  position: absolute;
  top: 50px;
  gap: 5px;
  left: 50%;
  transform: translateX(-50%);
}
.password-ui .underscores span {
  height: 2.5px;
  width: 30px;
  display: block;
  background-color: var(--color-primary);
}
.password-ui .password-box {
  font-family: "Ubuntu Sans Mono", monospace;
  font-weight: 400;
  border: none;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  background-color: var(--color-4);
  font-size: 40px;
  color: var(--color-primary);
  border-radius: 40px;
  height: 46px;
  padding-left: 60px;
  width: 330px;
  padding-bottom: 10px;
  padding-top: 10px;
  letter-spacing: 13px;
  font-variant-numeric: tabular-nums;
}
.password-ui .password-box::placeholder {
  color: var(--color-4);
}
.password-ui .password-btn {
  appearance: none;
  -webkit-appearance: none;
  border-radius: 0px;
  border: none;
  outline: none;
  background: none;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  margin-top: 30px;
  cursor: pointer;
}
.password-ui .--subtitle {
  padding-bottom: 20px;
  display: block;
}
.password-ui .--center {
  padding-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.password-ui .--center label {
  position: absolute;
  opacity: 0;
  left: -9999px;
}
.password-ui .--center > div {
  max-width: 800px;
}

.blog-wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 200px;
  padding-top: 200px !important;
}`, "",{"version":3,"sources":["webpack://./_App/App.scss","webpack://./_App/scss/global/_fonts.scss","webpack://./_App/scss/packages/CSSColumnPro/src/CSSGridPro.scss","webpack://./_App/scss/packages/CSSColumnPro/src/lib/grid.scss","webpack://./_App/scss/packages/CSSColumnPro/src/lib/gridlines.scss","webpack://./_App/scss/packages/FontScalingPro/src/lib/font-scale.scss","webpack://./_App/scss/global/_variables.scss","webpack://./_App/scss/global/_loading.scss","webpack://./_App/modules/_atoms/button/_button.scss","webpack://./_App/modules/_atoms/arrowicon/_arrowicon.scss","webpack://./_App/modules/_atoms/logo/_logo.scss","webpack://./_App/modules/_atoms/signature/_signature.scss","webpack://./_App/modules/_molecules/image-tile/_image-tile.scss","webpack://./_App/scss/base/_responsiveunit.scss","webpack://./_App/modules/_molecules/skill/_skill.scss","webpack://./_App/modules/_molecules/_header.scss","webpack://./_App/modules/_molecules/_footer.scss","webpack://./_App/modules/_organisms/organism-00/_organism-00.scss","webpack://./_App/modules/_organisms/header-block-01/_header-block-01.scss","webpack://./_App/modules/_organisms/in-focus-block-02/_in-focus-block-02.scss","webpack://./_App/modules/_organisms/articles-block-03/_articles-block-03.scss","webpack://./_App/modules/_organisms/small-package-block-04/_small-package-block-04.scss","webpack://./_App/modules/_organisms/image-block-05/_image-block-05.scss","webpack://./_App/modules/_organisms/link-block-06/_link-block-06.scss","webpack://./_App/modules/_organisms/page-title-block-07/_page-title-block-07.scss","webpack://./_App/modules/_organisms/large-content-block-08/_large-content-block-08.scss","webpack://./_App/modules/_organisms/large-package-block-09/_large-package-block-09.scss","webpack://./_App/modules/_organisms/testimonial-block-10/_testimonial-block-10.scss","webpack://./_App/modules/_organisms/gallery-block-11/_gallery-block-11.scss","webpack://./_App/modules/_organisms/client-galleries-12/_client-galleries-12.scss","webpack://./_App/modules/_organisms/masonry-block-13/_masonry-block-13.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAWhB;EACI,SAAA;AARJ;AAUI;EACI,kBAAA;AARR;;AAYA;EACI,eAAA;AATJ;;AAYA;EACI,eAAA;AATJ;AAWI;EAHJ;IAIQ,eAAA;EARN;AACF;AAUI;EAPJ;IAQQ,eAAA;EAPN;AACF;;AAcA,mBAAA;ACvCA,oCAAA;AAGA;EACI,yCAAA;EACA,gBAAA;EACA,kBAAA;AD2BJ;;ACxBA;EACI,yCAAA;EACA,gBAAA;EACA,kBAAA;AD2BJ;;ACxBA;EACI,yCAAA;EACA,gBAAA;EACA,kBAAA;AD2BJ;;ACxBA;EACI,yCAAA;EACA,gBAAA;EACA,kBAAA;AD2BJ;;ACxBA;EACI,yBAAA;AD2BJ;;ACxBA;EACI,gBAAA;AD2BJ;;ACvBA;EACI,yCAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;AD0BJ;;ACvBA;EACI,qBAAA;AD0BJ;;ACvBA;EACI,sCAAA;EACA,gBAAA;EACA,kBAAA;AD0BJ;;ACtBA;EACI,kBAAA;EACA,SAAA;EACA,uBAAA;ADyBJ;;ACtBA;EACI,kBAAA;EACA,SAAA;EACA,uBAAA;ADyBJ;;ACtBA;EACI,kBAAA;EACA,SAAA;EACA,uBAAA;ADyBJ;;ACtBA;EACI,2BAAA;EACA,qBAAA;ADyBJ;ACvBI;EACI,6BAAA;ADyBR;;AEjGA;EACE,WAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;AFoGF;;AG/GA;EACI,aAAA;EACA,cAAA;EACA,mBAAA;AHkHJ;AGhHI;EACI,2BAAA;EACA,cAAA;AHkHR;AG9GI;EAXJ;IAYQ,YAAA;EHiHN;AACF;AG9GI;EAhBJ;IAiBQ,YAAA;EHiHN;AACF;AG/GI;EACI,aAAA;EACA,eAAA;EACA,sBAAA;EACA,qCAAA;EACA,sCAAA;AHiHR;AG7GI;EACI,oCAAA;EACA,qCAAA;AH+GR;AG3GY;EADJ;IAEQ,SAAA;EH8Gd;AACF;AG1GQ;EAZJ;IAaQ,WAAA;EH6GV;AACF;AGvGQ;EACI;IACI,sDAAA;EHyGd;AACF;AG5GQ;EACI;IACI,sDAAA;EH8Gd;AACF;AGjHQ;EACI;IACI,sDAAA;EHmHd;AACF;AGtHQ;EACI;IACI,sDAAA;EHwHd;AACF;AG3HQ;EACI;IACI,sDAAA;EH6Hd;AACF;AGhIQ;EACI;IACI,sDAAA;EHkId;AACF;AGrIQ;EACI;IACI,sDAAA;EHuId;AACF;AG1IQ;EACI;IACI,sDAAA;EH4Id;AACF;AG/IQ;EACI;IACI,sDAAA;EHiJd;AACF;AGpJQ;EACI;IACI,uDAAA;EHsJd;AACF;AGzJQ;EACI;IACI,uDAAA;EH2Jd;AACF;AG9JQ;EACI;IACI,uDAAA;EHgKd;AACF;AGzJQ;EACI;IACI,qDAAA;EH2Jd;AACF;AG9JQ;EACI;IACI,qDAAA;EHgKd;AACF;AGnKQ;EACI;IACI,qDAAA;EHqKd;AACF;AGxKQ;EACI;IACI,qDAAA;EH0Kd;AACF;AG7KQ;EACI;IACI,qDAAA;EH+Kd;AACF;AGlLQ;EACI;IACI,qDAAA;EHoLd;AACF;AGvLQ;EACI;IACI,qDAAA;EHyLd;AACF;AG5LQ;EACI;IACI,qDAAA;EH8Ld;AACF;AGjMQ;EACI;IACI,qDAAA;EHmMd;AACF;AGtMQ;EACI;IACI,sDAAA;EHwMd;AACF;AG3MQ;EACI;IACI,sDAAA;EH6Md;AACF;AGhNQ;EACI;IACI,sDAAA;EHkNd;AACF;AG5MQ;EACI;IACI,sDAAA;EH8Md;AACF;AGjNQ;EACI;IACI,sDAAA;EHmNd;AACF;AGtNQ;EACI;IACI,sDAAA;EHwNd;AACF;AG3NQ;EACI;IACI,sDAAA;EH6Nd;AACF;AGhOQ;EACI;IACI,sDAAA;EHkOd;AACF;AGrOQ;EACI;IACI,sDAAA;EHuOd;AACF;AG1OQ;EACI;IACI,sDAAA;EH4Od;AACF;AG/OQ;EACI;IACI,sDAAA;EHiPd;AACF;AGpPQ;EACI;IACI,sDAAA;EHsPd;AACF;AGzPQ;EACI;IACI,uDAAA;EH2Pd;AACF;AG9PQ;EACI;IACI,uDAAA;EHgQd;AACF;AGnQQ;EACI;IACI,uDAAA;EHqQd;AACF;AG/PQ;EACI;IACI,sDAAA;EHiQd;AACF;AGpQQ;EACI;IACI,sDAAA;EHsQd;AACF;AGzQQ;EACI;IACI,sDAAA;EH2Qd;AACF;AG9QQ;EACI;IACI,sDAAA;EHgRd;AACF;AGnRQ;EACI;IACI,sDAAA;EHqRd;AACF;AGxRQ;EACI;IACI,sDAAA;EH0Rd;AACF;AG7RQ;EACI;IACI,sDAAA;EH+Rd;AACF;AGlSQ;EACI;IACI,sDAAA;EHoSd;AACF;AGvSQ;EACI;IACI,sDAAA;EHySd;AACF;AG5SQ;EACI;IACI,uDAAA;EH8Sd;AACF;AGjTQ;EACI;IACI,uDAAA;EHmTd;AACF;AGtTQ;EACI;IACI,uDAAA;EHwTd;AACF;AGlTQ;EACI;IACI,sDAAA;EHoTd;AACF;AGvTQ;EACI;IACI,sDAAA;EHyTd;AACF;AG5TQ;EACI;IACI,sDAAA;EH8Td;AACF;AGjUQ;EACI;IACI,sDAAA;EHmUd;AACF;AGtUQ;EACI;IACI,sDAAA;EHwUd;AACF;AG3UQ;EACI;IACI,sDAAA;EH6Ud;AACF;AGhVQ;EACI;IACI,sDAAA;EHkVd;AACF;AGrVQ;EACI;IACI,sDAAA;EHuVd;AACF;AG1VQ;EACI;IACI,sDAAA;EH4Vd;AACF;AG/VQ;EACI;IACI,uDAAA;EHiWd;AACF;AGpWQ;EACI;IACI,uDAAA;EHsWd;AACF;AGzWQ;EACI;IACI,uDAAA;EH2Wd;AACF;AGrWQ;EACI;IACI,sDAAA;EHuWd;AACF;AG1WQ;EACI;IACI,sDAAA;EH4Wd;AACF;AG/WQ;EACI;IACI,sDAAA;EHiXd;AACF;AGpXQ;EACI;IACI,sDAAA;EHsXd;AACF;AGzXQ;EACI;IACI,sDAAA;EH2Xd;AACF;AG9XQ;EACI;IACI,sDAAA;EHgYd;AACF;AGnYQ;EACI;IACI,sDAAA;EHqYd;AACF;AGxYQ;EACI;IACI,sDAAA;EH0Yd;AACF;AG7YQ;EACI;IACI,sDAAA;EH+Yd;AACF;AGlZQ;EACI;IACI,uDAAA;EHoZd;AACF;AGvZQ;EACI;IACI,uDAAA;EHyZd;AACF;AG5ZQ;EACI;IACI,uDAAA;EH8Zd;AACF;AGxZQ;EACI;IACI,sDAAA;EH0Zd;AACF;AG7ZQ;EACI;IACI,sDAAA;EH+Zd;AACF;AGlaQ;EACI;IACI,sDAAA;EHoad;AACF;AGvaQ;EACI;IACI,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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&family=Playfair+Display&family=Ubuntu+Sans+Mono:ital,wght@0,400..700;1,400..700&display=swap');\n$font-sizes: (\n    (min-font-size-px: 11, max-font-size-px: 14, font-scale: 3), // 13 // .fs--13\n    (min-font-size-px: 11, max-font-size-px: 15, font-scale: 3), // 14 // .fs--14\n    (min-font-size-px: 14, max-font-size-px: 16, font-scale: 5), // 16 // .fs--16\n    (min-font-size-px: 26, max-font-size-px: 36, font-scale: 10), // 16 // .fs--36\n    (min-font-size-px: 0, max-font-size-px: 70, font-scale: 70), // 20 // .fs--70\n    (min-font-size-px: 36, max-font-size-px: 48, font-scale: 48), // 26 // .fs--48\n    (min-font-size-px: 44, max-font-size-px: 96, font-scale: 44), // 120 // .fs--120\n);\n\nbody {\n    margin: 0;\n\n    .content-wrapper {\n        padding-top: 100px;\n    }\n}\n\n.wp-block {\n    max-width:  100%;\n}\n\n.container {\n    padding: 0 20px;\n\n    @media (min-width: 567px) {\n        padding: 0 40px;\n    }\n\n    @media (min-width: 768px) {\n        padding: 0 60px;\n    }\n\n  \n}\n\n\n\n/* Base Variables */\n@import \"scss/base/responsiveunit\";\n\n@import \"scss/global/fonts\";\n\n\n\n@import \"scss/packages/CSSColumnPro/src/CSSGridPro.scss\";\n@import \"scss/packages/FontScalingPro/src/FontScalingPro.scss\";\n\n\n\n/* Global Variables */\n@import \"scss/global/variables\";\n@import \"scss/global/loading\";\n\n/* Atoms */\n@import \"modules/_atoms/button/_button\";\n@import \"modules/_atoms/arrowicon/_arrowicon\";\n@import \"modules/_atoms/logo/_logo\";\n@import \"modules/_atoms/signature/_signature\";\n\n/* Molecules */\n@import \"modules/_molecules/image-tile/image-tile\";\n@import \"modules/_molecules/skill/skill\";\n@import \"modules/_molecules/_header\";\n@import \"modules/_molecules/_footer\";\n\n\n/* Organisms */\n@import \"modules/_organisms/organism-00/organism-00\";\n@import \"modules/_organisms/header-block-01/header-block-01\";\n@import \"modules/_organisms/in-focus-block-02/in-focus-block-02\";\n@import \"modules/_organisms/articles-block-03/articles-block-03\";\n@import \"modules/_organisms/small-package-block-04/small-package-block-04\";\n@import \"modules/_organisms/image-block-05/image-block-05\";\n@import \"modules/_organisms/link-block-06/link-block-06\";\n@import \"modules/_organisms/page-title-block-07/page-title-block-07\";\n@import \"modules/_organisms/large-content-block-08/large-content-block-08\";\n@import \"modules/_organisms/large-package-block-09/large-package-block-09\";\n@import \"modules/_organisms/testimonial-block-10/testimonial-block-10\";\n@import \"modules/_organisms/gallery-block-11/gallery-block-11\";\n@import \"modules/_organisms/client-galleries-12/client-galleries-12\";\n@import \"modules/_organisms/masonry-block-13/masonry-block-13\";\n\n\n.article-page-layout {\n    padding-top: 200px;\n    margin-bottom: 100px;\n\n    .--sidebar {\n        margin-top: 40px;\n       \n        ul {\n            list-style: none;\n            padding: 0;\n            margin-bottom: 40px;\n\n            li {\n               \n                border-bottom: 1px solid var(--color-4);\n            }\n\n            a {\n                display: inline-block;\n                padding: 10px 0;\n            }\n        }\n    }\n    \n    .--grid {\n        display: grid;\n        grid-template-columns: 1fr;\n        @media (min-width: 768px) {\n            grid-template-columns: 1fr 1fr;\n        }\n        flex-wrap: wrap;\n    }\n\n    .pagination {\n        display: flex;\n        justify-content: center;\n        gap: 20px;\n        margin-top: 100px;\n    }\n\n    .--post {\n     \n        padding: 40px;\n        box-sizing: border-box;\n\n        border-bottom: 1px solid var(--color-4);\n\n        @media (min-width: 768px) {\n            &:nth-child(odd) {\n                border-right: 1px solid var(--color-4);\n                border-bottom: 1px solid var(--color-4);\n            } \n\n            &:nth-child(even) {\n                border-bottom: 1px solid var(--color-4);\n            } \n\n            &:nth-child(odd):nth-last-child(2), &:nth-last-child(1) {\n                border-bottom: 0px;\n            }\n        }\n    }\n}\n\n.cookie-button {\n    background-color: var(--color-black) !important;\n\n    svg {\n        fill: var(--color-white) !important;\n        scale: 0.6;\n    }\n}\n\nbody {\n    background-color: var(--color-white);\n    color: var(--color-primary);\n}\n\n.interface-interface-skeleton__sidebar .interface-complementary-area{width:100%;}\n.is-sidebar-opened .interface-interface-skeleton__sidebar{\n    width:400px;\n    position: absolute !important;\n    right: 0px !important;\n    left: calc(100% - 400px) !important;\n    opacity: 0.9;\n\n    top: 61px;\n}\n\n.editor-styles-wrapper {\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 100px;\n}\n\n.editor-editor-canvas__post-title-wrapper {\n    margin-top: 4rem;\n    border-bottom: 1px solid #e1e1e1;\n    position: fixed;\n    width: 100%;\n    z-index: 10;\n    background-color: #fff;\n    top: -4px;\n    padding-left: 40px;\n    opacity: 0.9;\n}\n\n.password-ui {\n    padding-top: 200px;\n    padding-bottom: 200px;\n    \n    .password-form {\n        margin-top: 100px;\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n    \n    .underscores {\n        display: flex;\n        position: absolute;\n        top: 50px;\n        gap: 5px;\n        left: 50%;\n        transform: translateX(-50%);\n\n        span {\n            height: 2.5px;\n            width: 30px;\n            display: block;\n            background-color: var(--color-primary);\n        }\n    }\n\n    .password-box {\n        font-family: \"Ubuntu Sans Mono\", monospace;\n        font-weight: 400;\n        border: none;\n        appearance: none;\n        -webkit-appearance: none;\n        outline: none;\n        background-color: var(--color-4);\n        font-size: 40px;\n        color: var(--color-primary);\n        border-radius: 40px;\n        height: 46px;\n        padding-left: 60px;\n        width: 330px;\n        padding-bottom: 10px;\n        padding-top: 10px;\n        letter-spacing: 13px;\n        font-variant-numeric: tabular-nums;\n\n        &::placeholder {\n            color: var(--color-4);\n     \n           \n        }\n    }\n\n    .password-btn {\n        appearance: none;\n        -webkit-appearance: none;\n        border-radius: 0px;\n        border: none;\n        outline: none;\n        background: none;\n        text-transform: uppercase;\n        font-weight: 600;\n        font-size: 16px;\n        margin-top: 30px;\n        cursor: pointer;\n    }\n\n    .--subtitle {\n        padding-bottom: 20px;\n        display: block;\n    }\n\n    .--center {\n        padding-top: 100px;\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n        align-items: center;\n        text-align: center;\n\n        label {\n            position: absolute;\n            opacity: 0;\n            left: -9999px;\n        }\n\n        > div {\n            max-width: 800px;\n        }\n    }\n}\n\n.blog-wrapper {\n    max-width: 800px;\n    margin: 0 auto;\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-bottom: 200px;\n    padding-top: 200px !important;\n}\n\n","/* Container Unit Responsive Fonts */\n\n\n.f--light {\n    font-family: \"Be Vietnam Pro\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n}\n\n.f--regular {\n    font-family: \"Be Vietnam Pro\", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n}\n\n.f--semibold {\n    font-family: \"Be Vietnam Pro\", sans-serif;\n    font-weight: 600;\n    font-style: normal;\n}\n\n.f--bold {\n    font-family: \"Be Vietnam Pro\", sans-serif;\n    font-weight: 800;\n    font-style: normal;\n}\n\n.tt--uppercase {\n    text-transform: uppercase;\n}\n\n:where(strong) {\n    font-weight: 400;\n}\n\n\nbody {\n    font-family: \"Be Vietnam Pro\", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n    line-height: 1.7em;\n}\n\n.--subtitle {\n    letter-spacing: 0.7em;\n}\n\n.--h1, .--h2, .--h3 {\n    font-family: \"Playfair Display\", serif;\n    font-weight: 400;\n    font-style: normal;\n\n}\n\n.--h1 {\n    line-height: 1.4em;\n    margin: 0;\n    letter-spacing: -0.02em;\n}\n\n.--h2 {\n    line-height: 1.1em;\n    margin: 0;\n    letter-spacing: -0.04em;\n}\n\n.--h3 {\n    line-height: 1.1em;\n    margin: 0;\n    letter-spacing: -0.04em;\n}\n\na {\n    color: var(--color-primary);\n    text-decoration: none;\n\n    &:hover {\n        color: var(--color-secondary);\n    }\n}\n\n\n","$columns: 12;\n$gutter: 40px;\n$container: 1680px !default;\n\n\n:root {\n  --sm: 576px;\n  --md: 768px;\n  --lg: 992px;\n  --xl: 1200px;\n  --xxl: 1600px;\n  --xxxl: 1920px;\n}\n\n@import 'lib/grid';\n@import 'lib/gridlines';",".container {\n    --columns: #{$columns};\n    --gutter: #{$gutter};\n    --container: #{$container};\n\n    &:not(.fluid) {\n        max-width: var(--container);\n        margin: 0 auto;\n    }\n\n    // Reduce Grid to 6 columns on medium screens\n    @media (min-width: 567px) and (max-width: 992px) {\n        --columns: 6;\n    }\n\n    // Reduce Grid to 4 columns on small screens\n    @media (max-width: 567px) {\n        --columns: 4;\n    }\n\n    .row {\n        display: flex;\n        flex-wrap: wrap;\n        box-sizing: border-box;\n        margin-left: calc(var(--gutter) / -2);\n        margin-right: calc(var(--gutter) / -2);\n    }\n  \n    // Mobile First Approach\n    .col {\n        margin-left: calc(var(--gutter) / 2);\n        margin-right: calc(var(--gutter) / 2);\n\n        // If not any additional column options\n        &:not([class*='col-']) {\n            @media (min-width: 567px) {\n                flex: 1 0;\n            }\n        }\n\n        // If mobile, make full width\n        @media (max-width: 567px) {\n            width: 100%;\n        }\n    }\n\n    // Columns\n    @for $i from 1 through $columns {\n        // Standard Desktop Sizing\n        @media (min-width: 992px) {\n            .col-#{$i} {\n                width: calc(calc(calc(100% / var(--columns)) * #{$i}) - var(--gutter));\n            }\n        }\n    }\n\n    @for $i from 1 through $columns {\n\n        // Standard Tablet Sizing\n        @media (min-width: 567px) and (max-width: 992px) {\n            .col-#{$i} {\n                width: calc(calc(calc(50% / var(--columns)) * #{$i}) - var(--gutter));\n            }\n        }\n    }\n\n    @for $i from 1 through $columns {\n        // Standard Tablet Sizing (md Modifier)\n        @media (min-width: 992px) and (max-width: 1200px) {\n            .col-lg-#{$i} {\n                width: calc(calc(calc(100% / var(--columns)) * #{$i}) - var(--gutter));\n            }\n        }\n    }\n\n    @for $i from 1 through $columns {\n        // Standard Tablet Sizing (md Modifier)\n        @media (min-width:  1200px) and (max-width: 1600px) {\n            .col-xl-#{$i} {\n                width: calc(calc(calc(100% / var(--columns)) * #{$i}) - var(--gutter));\n            }\n        }\n    }\n\n    @for $i from 1 through $columns {\n        // Standard Tablet Sizing (md Modifier)\n        @media (min-width:  1600px) and (max-width: 1920px) {\n            .col-xxl-#{$i} {\n                width: calc(calc(calc(100% / var(--columns)) * #{$i}) - var(--gutter));\n            }\n        }\n    }\n\n    @for $i from 1 through $columns {\n        // Standard Tablet Sizing (md Modifier)\n        @media (min-width: 567px) and (max-width: 992px) {\n            .col-md-#{$i} {\n                width: calc(calc(calc(100% / var(--columns)) * #{$i}) - var(--gutter));\n            }\n        }\n    }\n\n    @for $i from 1 through $columns {\n        // Standard Mobile Sizing (sm Modifier)\n        @media (max-width: 567px) {\n            .col-sm-#{$i} {\n                width: calc(calc(calc(100% / var(--columns)) * #{$i}) - var(--gutter));\n            }\n        }\n    }\n\n    // Offsets\n    @for $i from 1 through $columns {\n        @media (min-width: 992px) {\n            .offset-#{$i} {\n                margin-left: calc(calc(calc(calc(100% / var(--columns)) * #{$i})) + var(--gutter) / 2);\n            }\n        }\n\n        @media (min-width: 567px) and (max-width: 992px) {\n            .offset-#{$i} {\n                margin-left: calc(calc(calc(calc(50% / var(--columns)) * #{$i})) + var(--gutter) / 2);\n            }\n        }\n    }\n}\n",".grid-lines {\n    --columns: #{$columns};\n    --gutter: #{$gutter};\n   \n    position: absolute;\n    inset: 0;\n    display: flex;\n    height: 100%;\n    box-sizing: border-box;\n    flex-wrap: wrap;\n\n    // Reduce Grid to 6 columns on medium screens\n    @media (min-width: 567px) and (max-width: 992px) {\n        --columns: 6;\n    }\n\n    // Reduce Grid to 4 columns on small screens\n    @media (max-width: 567px) {\n        --columns: 4;\n    }\n\n    span {\n        outline: 1px solid red;\n        margin-right: var(--gutter);\n        display: block;\n        width: calc(calc(100% / var(--columns)) - calc(var(--gutter)));\n        background-color: rgba(0,0,0,0.05);\n        margin-left: calc(var(--gutter) / 2);\n        margin-right: calc(var(--gutter) / 2);\n    }\n}\n","@use 'sass:math';\n\n$base-font-size: 16 !default; /* Base font size in pixels (1rem = 16px) */\n$vw-factor: 0.5vw  !default; /* The viewport width factor */\n\n// $font-sizes: (\n//   (min-font-size-px: 13, max-font-size-px: 16, font-scale: 12),\n//   (min-font-size-px: 16, max-font-size-px: 24, font-scale: 16),\n//   (min-font-size-px: 21, max-font-size-px: 46, font-scale: 40),\n//   (min-font-size-px: 24, max-font-size-px: 64, font-scale: 60)\n// ) !default;\n\n// Convert PX to VW\n@function px-to-vw($px, $viewport-width: 1920) {\n    @return (math.div($px, $viewport-width)) * 100 * 1vw;\n  }\n\n\n// Loop\n@each $size in $font-sizes {\n  $min-font-size-px: map-get($size, min-font-size-px);\n  $max-font-size-px: map-get($size, max-font-size-px);\n  $font-scale: map-get($size, font-scale);\n  \n  // Convert pixel values to rem\n  $min-rem: #{math.div($min-font-size-px, $base-font-size)}rem;\n  $max-rem: #{math.div($max-font-size-px, $base-font-size)}rem;\n\n  // create fs-- classname based on max font\n  .fs--#{$max-font-size-px} {\n    &, .--fs { \n      font-size: clamp(\n      #{$min-rem},\n      calc(#{$min-rem} + #{px-to-vw($font-scale)}),\n      #{$max-rem}\n    );\n    }\n    \n  }\n}\n",":root {\n    --color-primary: #3F3F3F;\n    --color-secondary: #B7B7A4;\n    --color-3: #E8E8E4;\n    --color-4: #EDEDE9;\n    --color-5: #F5F5F4;\n    --color-6: #F9CE65;\n    --color-7: #D54821;\n    --color-8: #D784FC;\n    --color-white: #FFFFFF;\n    --color-white-always: #FFFFFF;\n    --color-black: #000000;\n\n    --sm: 576px;\n    --md: 768px;\n    --lg: 992px; \n    --xl: 1200px;\n    --xxl: 1600px;\n    --xxxl: 1920px;\n\n}\n\nbody.dark-theme, body:has(.page-dark) { \n    --color-primary: #F0F0EF;\n    --color-secondary: #C5C5C5;\n    --color-3: #E8E8E4;\n    --color-4: #0D0D0D; \n    --color-5: #FFFFFF;\n    --color-6: #F9CE65;\n    --color-7: #D54821;\n    --color-8: #D784FC;\n    --color-white: #000000;\n    --color-white-always: #FFFFFF;\n    --color-black: #FFFFFF;\n} \n\n\n.c--primary {\n    color: var(--color-primary);\n}\n\n.c--secondary {\n    color: var(--color-secondary);\n}\n\n.c--secondary-alt {\n    color: var(--color-secondary-alt);\n}\n\n.c--3 {\n    color: var(--color-3);\n}\n\n.c--4 {\n    color: var(--color-4);\n}\n\n.c--5 {\n    color: var(--color-5);\n}\n\n.c--6 {\n    color: var(--color-6);\n}\n\n.c--7 {\n    color: var(--color-7);\n}\n\n.c--8 {\n    color: var(--color-8);\n}\n\n.c--white {\n    color: var(--color-white);\n}\n\n.c--white-alt {\n    color: var(--color-white-alt);\n}\n\n.c--black {\n    color: var(--color-black);\n}\n\n.bg--primary {\n    background-color: var(--color-primary);\n}\n\n.bg--secondary {\n    background-color: var(--color-secondary);\n}\n\n.bg--secondary-alt {\n    background-color: var(--color-secondary-alt);\n}\n\n.bg--3 {\n    background-color: var(--color-3);\n}\n\n.bg--4 {\n    background-color: var(--color-4);\n}\n\n.bg--5 {\n    background-color: var(--color-5);\n}\n\n\n\n\n\n","@keyframes loadingIn {\n    from {\n         opacity: 0;\n    }\n    85% {\n        opacity: 0;\n    }\n    to {\n         opacity: 1;\n    }\n}  \n\n@keyframes loadingOut {\n    from {\n         opacity: 1;\n       \n    }\n    85% {\n        opacity: 1;\n      \n    }\n    99.9% {\n        width: auto;\n    }\n    to {\n        width: 0%;\n         opacity: 0;\n    }\n}\n\n@keyframes loadingOutDiv {\n    from {\n        opacity: 0.7  \n    }\n    30% {\n        opacity: 1;\n    }\n    60% {\n        opacity: 0.7;\n    }\n    90% {\n        opacity: 1;\n    }\n    99.9% {\n        width: auto;\n    }\n    to {\n        width: 0%;\n       opacity: 0.9;\n    }\n}",".--button {\n    display: flex;\n    align-items: center;\n    margin-right: 30px;\n\n    &:hover {\n        svg {\n            stroke: var(--color-secondary);\n        \n        }\n    }\n\n    .arrow-icon {\n        margin-top: -4px;\n        margin-left: 15px;\n        rotate: -90deg;\n    }\n}",".arrow-icon {\n    stroke: var(--color-primary);\n}",".hdr-logo {\n    padding: 0;\n    margin: 0;\n}\n.logo {\n    \n}",".signature {\n    fill: var(--color-black);\n    stroke: var(--color-black);\n}",".image-tile {\n    // Block Positioning\n\n    &:before {\n        content: \" \";\n        position: absolute;\n        left: 10%;\n        border-radius: 100%;\n        bottom: -25%;\n        transform: translateX(-50%) translateY(-50%);\n        @include _('width', 0.5, 70);\n        aspect-ratio: 1/1;\n        background: var(--color-4);\n        border: 7px solid var(--color-secondary);\n        z-index: 3;\n    }\n    \n    // Image Specifics\n    .inner {\n        @include _('width', 0.5, 182);\n        overflow: hidden;\n        display: block;\n\n        aspect-ratio: 1/1;\n        @include _('border-radius', 0.5, 64);\n        display: flex;\n\n        transform: scale(1);\n\n       img {\n        width: 100%;\n        object-fit: cover;\n       }\n\n    }\n\n    // Info Tile Positioning\n    .info-tile {\n\n    }\n \n}\n\n\n","@use \"sass:math\";\n\n@function strip-units($number) {\n  @return math.div($number, ($number * 0 + 1));\n}\n\n@function calculateRem($size) {\n  $remSize: math.div($size, 16);\n  @return #{$remSize}rem;\n}\n\n@function calculateClamp($minimum, $preferred, $maximum, $preferred_viewport_width: 1920px) {\n  $clamp_parameter_1: calculateRem($minimum * $preferred);\n  $clamp_parameter_2: strip-units(math.div(($preferred + 0), $preferred_viewport_width) * 100) * 1vw;\n  $clamp_parameter_3: calculateRem($maximum);\n\n  @return clamp(#{$clamp_parameter_1}, #{$clamp_parameter_2}, #{$clamp_parameter_3});\n}\n\n@mixin _($unit, $minimum, $preferred, $maximum: $preferred, $preferred_viewport_width: 1920px) {\n  // #{$unit}: calculateRem($preferred);\n  #{$unit}: calculateClamp($minimum, $preferred, $maximum, $preferred_viewport_width);\n}\n\n",".skill-item {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n    @media (min-width: 567px) and (max-width: 899px) {\n        grid-template-columns: 1fr;\n    }\n\n   \n\n    @include _('margin-bottom', 0.7, 20);\n\n    .--left {\n        display: flex;\n        flex-direction: column;\n\n        @media (min-width: 567px) {\n            @include _('width', 0.7, 200);\n        }\n\n        \n\n        strong, span {\n            line-height: 1.1em;\n        }\n    }\n\n    .--right {\n        @include _('padding-top', 0.7, 6);\n\n        @media (min-width: 567px) and (max-width: 899px) {\n            @include _('padding-top', 0.7, 20);\n            @include _('padding-bottom', 0.7, 20);\n        }\n\n        @media (max-width: 566px) {\n            justify-self: end;\n        }\n    }  \n\n\n    .--progress {\n        display: flex;\n        align-items: center;\n        @include _('gap', 0.7, 8);\n        flex: 0 0 auto;\n        \n\n        li {\n            height: 8px;\n            width: 8px;\n            border-radius: 4.5px;\n            background-color: var(--color-primary);\n\n        }\n\n        @for $i from 1 through 6 {\n            &[data-progress=\"#{$i}\"] {\n                li:nth-child(1n+#{$i + 1}) {\n                    background-color: var(--color-secondary);\n                }\n            }\n        }\n    }\n}",".header {\n    position: fixed;\n    z-index: 10;\n    background-color: var(--color-white);\n    backdrop-filter: blur(100px);\n    width: 100%;\n   \n\n    .header--inner {\n        display: flex;\n        justify-content: space-between;\n        align-items: end;\n    }\n\n    .--left {\n        display: flex;\n        justify-content: space-between;\n        align-items: end;\n\n\n    }\n\n    .--right {\n        @include _('padding-right', 0.7, 147);\n\n        .navicon {\n            transition: 300ms linear top;\n            position: absolute;\n            top: 38px;\n            right: 32px;\n        }\n        \n        @media (max-width: 9928px) {\n            .--button {\n                display: none;\n            }\n        }\n\n        @media (min-width: 992px) {\n            .--button {\n                position: relative;\n                top: -10px;\n            }\n            .navicon {\n                display: none;\n            }\n        }\n    }\n\n   svg {\n        fill: var(--color-primary);\n   }\n\n   .logo {\n        @include _('width', 0.7, 147);\n        transition: 300ms linear width;\n        aspect-ratio: 175/129;\n        height: unset;\n   }\n\n   @media (max-width: 992px) {\n        .nav-main {\n            position: fixed;\n            top: 0;\n            bottom: 0;\n            right: 0px;\n            width: 300px;\n            right: -300px;\n            transition: 100ms linear right;\n            background-color: var(--color-white);\n            z-index: 20;\n            height: 100vh;\n        }\n\n        &:after {\n            z-index: 11;\n            top: 0;\n            bottom: 0;\n            width: 100vw;\n            right: -100vw;\n            background-color: var(--color-3);\n            content: '';\n            position: fixed;\n            display: block;\n            height: 100vh;\n            opacity: 0.7;\n            transition: 100ms linear right;\n        }\n\n        &.menu-active {\n            .nav-main {\n                right: 0px;\n            }\n\n            &:after {\n               right: 0;\n            }\n        }\n\n        .nav-main {\n            ul {\n                padding: 0 40px;\n                list-style: none;\n\n                li {\n                    border-bottom: 1px solid var(--color-3);\n                }\n\n                a {\n                    padding: 10px 0;\n                    display: block;\n                }\n            }\n        }\n   }\n\n   @media (min-width: 992px) {\n        .nav-main {\n            ul {\n                list-style: none;\n                display: flex;\n\n                li {\n                    word-break: keep-all;\n                }\n\n                a {\n                    text-wrap: nowrap;\n                    padding: 5px 20px;\n                }\n            }\n        }\n    }\n}\n\n\n\n.has-scrolled {\n    .header {\n        .logo {\n            @include _('width', 0.7, 96);\n        }\n        .navicon {\n            top: 10px;\n            right: 32px;\n        }\n    }       \n}","footer#footer {\n    background-color: var(--color-4);\n    .--center {\n        text-align: center;\n    }  \n\n    .--top {\n        padding-top: 200px;\n    }\n\n    .--bottom {\n        padding-top: 100px;\n        padding-bottom: 50px;\n    }\n\n    .--svg {\n        margin-bottom: 40px;\n        \n        svg {\n            max-width: 100%;\n            fill: var(--color-primary);\n            stroke: var(--color-primary);\n        }\n    }\n}","$padding: 40px;\n$margin: 20px;\n\n.organism-00 {\n    position: relative;\n    margin: $margin;\n    padding: $padding;\n    background: var(--colour-gray-3);\n    border-radius: 20px;\n\n    &.loader-content {\n        &:has(.loader) {\n            > *:not(.loader) {\n                opacity: 0;\n                animation: loadingIn 2s normal forwards ease-in-out;\n            }\n        }\n    }\n\n\n    .loader {\n        z-index: 0;\n        position: absolute;\n        top: $padding;\n        left: $padding;\n        bottom: $padding;\n        right: $padding;\n        overflow: hidden;\n    \n        div {\n            background: linear-gradient(90deg, rgba(220,219,230,1) 0%, rgba(230,232,238,1) 14%, rgba(234,238,240,1) 100%);\n            background: var(--colour-gray-8);\n            border-radius: 4px;\n            width: 100%;\n            margin-bottom: 20px;\n        }\n    }\n    \n    .loader {\n        animation: loadingOut 2s normal forwards ease-in-out;\n        opacity: 1;\n    \n        div {\n            animation: loadingOutDiv 2s normal forwards ease-in-out;\n        }\n    }\n}\n\n\n",".header-block-01 {\n    position: relative;\n    padding-bottom: 100px;\n\n    @media (min-width: 992px) {\n        height: calc(100vh - 100px);\n        display: flex;\n        align-items: center;\n        min-height: 800px;\n    }\n\n    @media (min-width: 567px) and (max-width: 992px) {\n        .row > {\n            .col:first-child {\n                display:flex;\n                justify-content: center;\n\n                h1 {\n                    left: 60px;\n                    position: relative;\n\n                    span:nth-of-type(1) {\n                        position: relative;\n                        left: -100px;\n                    }\n\n                    span:nth-of-type(2) {\n                        position: relative;\n                        left: -100px;\n                    }\n                    \n                }\n            }\n        }\n    }\n \n\n    .--left {\n      @include _('max-width', 0.65, 550);\n\n        .--page-down {\n            padding-top: 40px;\n            padding-bottom: 40px;\n\n            @media (min-width: 992px) {\n                position: absolute;\n                bottom: 0px;\n                left: 50%;\n                transform: translateX(-50%);\n            }\n\n            @media (max-width: 992px) {\n                display: block;\n                text-align: center;\n            }\n        }\n\n        .--title {\n            color: var(--color-secondary);\n\n            span {\n                display: block;\n                color: var(--color-primary);\n            }\n        }\n    }\n\n   .--button {\n    justify-content: end;\n   }\n\n    .--right {\n        &, .--grid {\n            height: 100%;\n        } \n        \n        .--link {\n            text-align: center;\n        }\n\n        .--grid {\n            display: grid;\n            grid-template-columns: repeat(3, minmax(0, 1fr));\n            align-items: center;\n            justify-content: end;\n            width: 100%;\n            box-sizing: border-box;\n           \n\n            @media (min-width: 992px) {\n                @include _('padding-left', 0.7, 60);\n            }\n\n            @media (min-width: 567px) {\n                gap: 10%;\n            }\n\n            @media (min-width: 567px) and (max-width: 1200px) {\n                a:nth-child(2) {\n                    padding-top: 200px;\n                }\n            }\n\n            @media (max-width: 567px) {\n                grid-template-columns: 1fr;\n\n                a:nth-child(2) {\n                    .--image {\n                        order: 2;\n                    }\n                }\n    \n                .--link {\n                    display: grid;\n                    grid-template-columns: 1fr 1fr;\n                    align-items: center;\n                    gap: 20px;\n    \n                    .--image {\n                        .--number {\n                            display: none;\n                        }\n                    }\n                }\n            }\n        }\n\n       \n\n        .--h2 {\n            justify-content: center;\n            display: flex;\n        }\n\n        .--image {\n            position: relative;\n\n            img {\n                width: 100%;\n                height: auto;\n                border-radius: 160px;\n                box-shadow: 2vw 2vw 0px var(--color-4);\n            }\n\n            @media (min-width: 567px) {\n                &:after {\n                    content: \" \";\n                    display: block;\n                    height: 30px;\n                    width: 2px;\n                    background-color: var(--color-primary);\n                    position: absolute;\n                    left: 50%;\n                    @include _('bottom', 0.7, -60);\n                }\n            }\n        }\n\n        .--number {\n            @media (min-width: 567px) {\n                position: absolute;\n                bottom: -5%;\n                right: -18%;\n            }\n        }\n\n        .--subtitle {\n            padding-top: 20px;\n\n            @media (min-width: 567px) {\n                @include _('padding-top', 0.7, 70);\n            }\n            @include _('margin-bottom', 0.7, 10);\n        }\n\n        .--title {\n            @media (max-width: 567px) {\n                padding-bottom: 20px;\n            }\n        }\n\n        @media (min-width: 567px) {\n            .--group {\n                .--number {\n                    display: none;\n                }\n            }\n        }\n    }\n}",".in-focus-block-02 {\n    background-color: var(--color-4);\n    @include _('padding-top', 0.7, 120);\n    @include _('padding-bottom', 0.7, 60);\n    \n    .--subtitle {\n        @include _('margin-bottom', 0.7, 20);\n    }\n\n    .--title {\n        max-width: 700px;\n        @include _('margin-bottom', 0.7, 20);\n    }\n\n    .--text {\n        max-width: 600px;\n        @include _('margin-bottom', 0.7, 20);\n    }\n\n    .--signature {\n        svg {\n            max-width: 100%;\n            fill: var(--color-primary);\n        }\n    }\n    \n\n    .--center {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        text-align: center;\n    }\n}\n\n",".articles-block-03 {\n    @include _('padding-top', 0.7, 120);\n    @include _('padding-bottom', 0.7, 60);\n\n    .--subtitle {\n        @include _('margin-bottom', 0.7, 20);\n    }\n\n    .--title {\n        max-width: 700px;\n        @include _('margin-bottom', 0.7, 20);\n    }\n\n    .--text {\n        max-width: 600px;\n        @include _('margin-bottom', 0.7, 20);\n    }\n\n    .--center {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        text-align: center;\n    }\n\n    .--content {\n        @include _('padding-bottom', 0.7, 80);\n    }\n\n    .--listing {\n        .--link {\n            display: block;\n            position: relative;\n            overflow: hidden;\n            margin-bottom: 40px;\n\n            &:hover {\n                .--overlay {\n                    opacity: 1;\n                }\n            }\n        }\n\n        .--overlay {\n            transition: 200ms ease-out all;\n            position: absolute;\n            bottom: 0;\n            left: 0;\n            opacity: 0;\n            \n            @media (pointer:coarse) {\n                opacity: 1;\n            }\n            width: 100%;\n            color: var(--color-white-always);\n            @include _('padding', 0.7, 30);\n            @include _('padding-bottom', 0.7, 20);\n            background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);\n            box-sizing: border-box;\n            h3, p {\n                width: 500px;\n                max-width: 100%;\n            }\n        }\n\n        .--image {\n            width: 100%;\n            @include _('height', 0.7, 700);\n            object-fit: cover;\n            display: block;\n        }\n    }\n\n    .--end {\n        display: flex;\n        justify-content: flex-end;\n        padding-bottom: 20px;\n    }\n\n}",".small-package-block-04 {\n\n    @include _('padding-top', 0.7, 120);\n    @include _('padding-bottom', 0.7, 80);\n    \n    .--subtitle {\n        @include _('margin-bottom', 0.7, 20);\n    }\n\n    .--title {\n        max-width: 700px;\n        @include _('margin-bottom', 0.7, 20);\n    }\n\n    .--text {\n        max-width: 600px;\n        @include _('margin-bottom', 0.7, 20);\n    }\n\n    .--signature {\n        svg {\n            max-width: 100%;\n            fill: var(--color-primary);\n        }\n    }\n    \n\n    .--center {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        text-align: center;\n    }\n\n    .--inner {\n        @include _('padding-bottom', 0.7, 40);\n    }\n\n    ul {\n        list-style: none;\n        padding: 0 14px 20px;\n        margin: 0;\n\n        li {\n            margin: 4px 0;\n            &:before {\n                content: '•';\n                color: var(--color-primary);\n                display: inline-block;\n                width: 1em;\n                margin-left: -1em;\n            }\n        }\n    }\n}\n\n",".image-block-05 {\n    img {\n        width: 100%;\n    }\n}",".link-block-06 {\n    @include _('padding-top', 0.7, 120);\n    @include _('padding-bottom', 0.7, 60);\n    \n    .--subtitle {\n        @include _('margin-bottom', 0.7, 20);\n    }\n\n    .--title {\n        max-width: 700px;\n        @include _('margin-bottom', 0.7, 20);\n    }\n\n    .--text {\n        max-width: 600px;\n        @include _('margin-bottom', 0.7, 20);\n    }\n\n    .--signature {\n        svg {\n            max-width: 100%;\n            fill: var(--color-primary);\n        }\n    }\n    \n\n    .--center {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        text-align: center;\n    }\n}\n\n",".page-title-block-07 {\n    .--top {\n        @include _('padding-top', 0.7, 120);\n        @include _('padding-bottom', 0.7, 120);\n    }\n}\n",".large-content-block-08 {\n\n    &.flip {\n        .row {\n            flex-direction: row-reverse;\n        }\n    }\n\n    .--title {\n        color: var(--color-secondary);\n        \n        span {\n            display: block;\n            color: var(--color-primary);\n        }\n    }\n\n    .--text {\n        max-width: 500px;\n        @include _('margin-bottom', 0.7, 40);\n    }\n\n    .--h1 {\n        line-height: 1.4em;\n        margin: 0;\n        letter-spacing: -0.02em;\n    }\n\n    .--image {\n        width: 100%;\n        aspect-ratio: 982/1400;\n        object-fit: cover;\n        position: relative;\n        z-index: 1;\n    }\n\n    .--left {\n        position: relative;\n        z-index: 6;\n        @include _('padding-top', 0.7, 40);\n    }\n\n    .--justify {\n        justify-content: space-between;\n    }\n\n    .--center {\n        text-align: center;\n    }\n\n    .--right {\n        position: relative;\n    }\n\n    .--square {\n        aspect-ratio: 1/1;\n        @include _('width', 0.4, 900);\n        position: absolute;\n        z-index: 0;\n        background-color: var(--color-4);\n        top: 40%;\n        transform: translateY(-50%);\n        right: 50%;\n    }\n\n    &.flip {\n        .--square {\n            right: auto;\n            left: 50%;\n        }\n    }\n\n    .--testimonial {\n        display: block;\n        @include _('padding-top', 0.7, 100);\n        @include _('padding-bottom', 0.7, 100);\n        position: relative;\n\n        svg {\n            fill: var(--color-primary);\n        }\n\n        .quote-left {\n            position: absolute;\n            left: 0;\n        }\n\n        .quote-right {\n            position: absolute;\n            right: 0;\n            \n        }\n\n        .--subtitle, .--quote {\n            display: inline-block;\n            @include _('padding-bottom', 0.7, 20);\n        }\n    }\n}\n\n",".large-package-block-09 {\n\n    @include _('padding-top', 0.7, 120);\n    @include _('padding-bottom', 0.7, 80);\n    \n    .--subtitle {\n        @include _('margin-bottom', 0.7, 20);\n    }\n\n    .--title {\n        max-width: 700px;\n        @include _('margin-bottom', 0.7, 20);\n    }\n\n    .--text {\n        max-width: 600px;\n        @include _('margin-bottom', 0.7, 20);\n    }\n\n    .--signature {\n        svg {\n            max-width: 100%;\n            fill: var(--color-primary);\n        }\n    }\n    \n\n    .--center {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        text-align: center;\n    }\n\n    .--inner {\n        @include _('padding-bottom', 0.7, 40);\n    }\n\n    ul {\n        list-style: none;\n        padding: 0 14px 20px;\n        margin: 0;\n\n        li {\n            margin: 4px 0;\n            &:before {\n                content: '•';\n                color: var(--color-primary);\n                display: inline-block;\n                width: 1em;\n                margin-left: -1em;\n            }\n        }\n    }\n}\n\n",".testimonial-block-10 {\n    @include _('padding-top', 0.7, 120);\n    @include _('padding-bottom', 0.7, 120);\n\n    .--title {\n        max-width: 700px;\n        @include _('margin-bottom', 0.7, 20);\n    }\n\n    .--text {\n        max-width: 600px;\n        @include _('margin-bottom', 0.7, 20);\n    }\n\n    .--center {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        text-align: center;\n        position: relative;\n    }\n\n    svg {\n        fill: var(--color-primary);\n    }\n\n    .quote-left {\n        position: absolute;\n        left: 0;\n    }\n\n    .quote-right {\n        position: absolute;\n        right: 0;\n        bottom: 0; \n    }\n\n    .--subtitle, .--quote {\n        display: inline-block;\n        @include _('padding-bottom', 0.7, 20);\n    }\n}\n","\n.gallery-block-11 {\n    --item-width: 320px;\n    --inner-width: 1257px;\n    @include _('margin-top', 0.7,60);\n    @include _('margin-bottom', 0.7, 60);\n    .card {\n        padding: 0px;\n\n        img {\n            width: 100%;\n            height: 100%;\n            object-fit: cover;\n            height: 440px;\n        }\n    }\n\n    .card {\n\n        background-color: var(--color-secondary-alt);\n        border-radius: 40px;\n    }\n    \n    // Paddle Nav\n    .scroll-container {\n   \n        --viewport-content: 1500px;\n        \n    \n        overflow: scroll;\n        will-change: transform;\n        scroll-snap-type: x mandatory;\n        scroll-padding: calc(50% - var(--viewport-content) / 2);\n        scrollbar-width: none;\n        cursor: move; /* fallback if grab cursor is unsupported */\n        cursor: grab;\n        cursor: -moz-grab;\n        cursor: -webkit-grab;\n\n        &:active {\n            cursor: grabbing;\n            cursor: -moz-grabbing;\n            cursor: -webkit-grabbing;\n        }\n    }\n    \n    .item-container {\n        padding: 0;\n        margin: 25px 0 0;\n        display: grid;\n        grid-gap: var(--grid-gap);\n        grid-auto-flow: column;\n        width: -moz-fit-content;\n        width: fit-content;\n       \n        padding-left: 40px;\n        @media (min-width: 1500px) {\n            padding-left: calc(50% - var(--viewport-content) / 2);\n        }\n        // padding-right: calc(50% - var(--viewport-content) / 2);\n       \n    \n       \n    \n        .item {\n            max-width: var(--item-width);\n            min-width: 250px;\n            max-width: calc(var(--inner-width, 100vw)* 0.875);\n            width: max-content;\n            display: flex;\n            // scroll-snap-align: start;\n            margin-right: 30px;\n            transition: 300ms linear all; \n            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n\n            img {\n                display: block;\n            }\n        }\n    }\n    \n    .paddles {\n        display: flex;\n       justify-content: flex-end;\n        gap: 40px;\n        margin-top: 40px;\n        padding-left: 120px;\n        @include _('padding-bottom', 0.5, 40);\n    \n   \n        svg {\n            margin: 0px;\n            stroke: var(--color-primary);\n        }\n    \n        .paddlenav--left, .paddlenav--right {\n           width: 40px;\n           height: 40px;\n           border-radius: 40px;\n           background-color: var(--color-secondary-alt);\n             display: flex;\n            align-items: center;\n            justify-content: center;\n            cursor: pointer;\n        }\n    \n  \n    \n        .paddlenav--right {\n          \n        }\n    }\n}\n\n\n",".client-galleries-12 {\n    @include _('padding-top', 0.7, 60);\n    @include _('padding-bottom', 0.7, 120);\n\n    ul {\n        list-style: none;\n        padding: 0;\n    }\n\n    .--link {\n        position: relative;\n        background-color: var(--color-black);\n    }\n\n    .--excerpt {\n        @media (min-width: 567px) and (max-width: 690px) {\n            display: none;\n        }\n    }\n\n    .--image {\n        width: 100%;\n        aspect-ratio: 4/4;\n        object-fit: cover;\n        position: relative;\n        z-index: 1;\n       \n    }\n\n    .image-overlay {\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        padding: 20px;\n        min-height: 50%;\n        box-sizing: border-box;\n        color: var(--color-white-always);\n        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);\n\n        z-index: 2;\n        transition: opacity 0.3s;\n    }\n}","\n.masonry-block-13 {\n    @include _('padding-top', 0.7, 60);\n    @include _('padding-bottom', 0.7, 120);\n    .grid-item {\n        width: 25%;\n    }\n\n    .grid-item:nth-child(4n+3) {\n        width: 50%;\n    }\n\n    .--block {\n        aspect-ratio: 1/1;\n        padding: 10px;\n        box-sizing: border-box;\n    }\n\n    .--image {\n        aspect-ratio: 1/1;\n        object-fit: cover;\n        width: 100%;\n        display: block;\n        \n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./_App/Blocks.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./_App/Blocks.scss ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&family=Playfair+Display&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  margin: 0;
}
body .content-wrapper {
  padding-top: 100px;
}

.container {
  padding: 0 20px;
}
@media (min-width: 567px) {
  .container {
    padding: 0 40px;
  }
}
@media (min-width: 768px) {
  .container {
    padding: 0 60px;
  }
}

/* Base Variables */
/* Container Unit Responsive Fonts */
.f--light {
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.f--regular {
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.f--semibold {
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 600;
  font-style: normal;
}

.f--bold {
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 800;
  font-style: normal;
}

.tt--uppercase {
  text-transform: uppercase;
}

:where(strong) {
  font-weight: 400;
}

body {
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 1.7em;
}

.--subtitle {
  letter-spacing: 0.7em;
}

.--h1, .--h2, .--h3 {
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-style: normal;
}

.--h1 {
  line-height: 1.4em;
  margin: 0;
  letter-spacing: -0.02em;
}

.--h2 {
  line-height: 1.1em;
  margin: 0;
  letter-spacing: -0.04em;
}

.--h3 {
  line-height: 1.1em;
  margin: 0;
  letter-spacing: -0.04em;
}

a {
  color: var(--color-primary);
  text-decoration: none;
}
a:hover {
  color: var(--color-secondary);
}

:root {
  --sm: 576px;
  --md: 768px;
  --lg: 992px;
  --xl: 1200px;
  --xxl: 1600px;
  --xxxl: 1920px;
}

.container {
  --columns: 12;
  --gutter: 40px;
  --container: 1680px;
}
.container:not(.fluid) {
  max-width: var(--container);
  margin: 0 auto;
}
@media (min-width: 567px) and (max-width: 992px) {
  .container {
    --columns: 6;
  }
}
@media (max-width: 567px) {
  .container {
    --columns: 4;
  }
}
.container .row {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-left: calc(var(--gutter) / -2);
  margin-right: calc(var(--gutter) / -2);
}
.container .col {
  margin-left: calc(var(--gutter) / 2);
  margin-right: calc(var(--gutter) / 2);
}
@media (min-width: 567px) {
  .container .col:not([class*=col-]) {
    flex: 1 0;
  }
}
@media (max-width: 567px) {
  .container .col {
    width: 100%;
  }
}
@media (min-width: 992px) {
  .container .col-1 {
    width: calc(100% / var(--columns) * 1 - var(--gutter));
  }
}
@media (min-width: 992px) {
  .container .col-2 {
    width: calc(100% / var(--columns) * 2 - var(--gutter));
  }
}
@media (min-width: 992px) {
  .container .col-3 {
    width: calc(100% / var(--columns) * 3 - var(--gutter));
  }
}
@media (min-width: 992px) {
  .container .col-4 {
    width: calc(100% / var(--columns) * 4 - var(--gutter));
  }
}
@media (min-width: 992px) {
  .container .col-5 {
    width: calc(100% / var(--columns) * 5 - var(--gutter));
  }
}
@media (min-width: 992px) {
  .container .col-6 {
    width: calc(100% / var(--columns) * 6 - var(--gutter));
  }
}
@media (min-width: 992px) {
  .container .col-7 {
    width: calc(100% / var(--columns) * 7 - var(--gutter));
  }
}
@media (min-width: 992px) {
  .container .col-8 {
    width: calc(100% / var(--columns) * 8 - var(--gutter));
  }
}
@media (min-width: 992px) {
  .container .col-9 {
    width: calc(100% / var(--columns) * 9 - var(--gutter));
  }
}
@media (min-width: 992px) {
  .container .col-10 {
    width: calc(100% / var(--columns) * 10 - var(--gutter));
  }
}
@media (min-width: 992px) {
  .container .col-11 {
    width: calc(100% / var(--columns) * 11 - var(--gutter));
  }
}
@media (min-width: 992px) {
  .container .col-12 {
    width: calc(100% / var(--columns) * 12 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-1 {
    width: calc(50% / var(--columns) * 1 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-2 {
    width: calc(50% / var(--columns) * 2 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-3 {
    width: calc(50% / var(--columns) * 3 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-4 {
    width: calc(50% / var(--columns) * 4 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-5 {
    width: calc(50% / var(--columns) * 5 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-6 {
    width: calc(50% / var(--columns) * 6 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-7 {
    width: calc(50% / var(--columns) * 7 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-8 {
    width: calc(50% / var(--columns) * 8 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-9 {
    width: calc(50% / var(--columns) * 9 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-10 {
    width: calc(50% / var(--columns) * 10 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-11 {
    width: calc(50% / var(--columns) * 11 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-12 {
    width: calc(50% / var(--columns) * 12 - var(--gutter));
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .container .col-lg-1 {
    width: calc(100% / var(--columns) * 1 - var(--gutter));
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .container .col-lg-2 {
    width: calc(100% / var(--columns) * 2 - var(--gutter));
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .container .col-lg-3 {
    width: calc(100% / var(--columns) * 3 - var(--gutter));
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .container .col-lg-4 {
    width: calc(100% / var(--columns) * 4 - var(--gutter));
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .container .col-lg-5 {
    width: calc(100% / var(--columns) * 5 - var(--gutter));
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .container .col-lg-6 {
    width: calc(100% / var(--columns) * 6 - var(--gutter));
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .container .col-lg-7 {
    width: calc(100% / var(--columns) * 7 - var(--gutter));
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .container .col-lg-8 {
    width: calc(100% / var(--columns) * 8 - var(--gutter));
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .container .col-lg-9 {
    width: calc(100% / var(--columns) * 9 - var(--gutter));
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .container .col-lg-10 {
    width: calc(100% / var(--columns) * 10 - var(--gutter));
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .container .col-lg-11 {
    width: calc(100% / var(--columns) * 11 - var(--gutter));
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .container .col-lg-12 {
    width: calc(100% / var(--columns) * 12 - var(--gutter));
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .container .col-xl-1 {
    width: calc(100% / var(--columns) * 1 - var(--gutter));
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .container .col-xl-2 {
    width: calc(100% / var(--columns) * 2 - var(--gutter));
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .container .col-xl-3 {
    width: calc(100% / var(--columns) * 3 - var(--gutter));
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .container .col-xl-4 {
    width: calc(100% / var(--columns) * 4 - var(--gutter));
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .container .col-xl-5 {
    width: calc(100% / var(--columns) * 5 - var(--gutter));
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .container .col-xl-6 {
    width: calc(100% / var(--columns) * 6 - var(--gutter));
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .container .col-xl-7 {
    width: calc(100% / var(--columns) * 7 - var(--gutter));
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .container .col-xl-8 {
    width: calc(100% / var(--columns) * 8 - var(--gutter));
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .container .col-xl-9 {
    width: calc(100% / var(--columns) * 9 - var(--gutter));
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .container .col-xl-10 {
    width: calc(100% / var(--columns) * 10 - var(--gutter));
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .container .col-xl-11 {
    width: calc(100% / var(--columns) * 11 - var(--gutter));
  }
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .container .col-xl-12 {
    width: calc(100% / var(--columns) * 12 - var(--gutter));
  }
}
@media (min-width: 1600px) and (max-width: 1920px) {
  .container .col-xxl-1 {
    width: calc(100% / var(--columns) * 1 - var(--gutter));
  }
}
@media (min-width: 1600px) and (max-width: 1920px) {
  .container .col-xxl-2 {
    width: calc(100% / var(--columns) * 2 - var(--gutter));
  }
}
@media (min-width: 1600px) and (max-width: 1920px) {
  .container .col-xxl-3 {
    width: calc(100% / var(--columns) * 3 - var(--gutter));
  }
}
@media (min-width: 1600px) and (max-width: 1920px) {
  .container .col-xxl-4 {
    width: calc(100% / var(--columns) * 4 - var(--gutter));
  }
}
@media (min-width: 1600px) and (max-width: 1920px) {
  .container .col-xxl-5 {
    width: calc(100% / var(--columns) * 5 - var(--gutter));
  }
}
@media (min-width: 1600px) and (max-width: 1920px) {
  .container .col-xxl-6 {
    width: calc(100% / var(--columns) * 6 - var(--gutter));
  }
}
@media (min-width: 1600px) and (max-width: 1920px) {
  .container .col-xxl-7 {
    width: calc(100% / var(--columns) * 7 - var(--gutter));
  }
}
@media (min-width: 1600px) and (max-width: 1920px) {
  .container .col-xxl-8 {
    width: calc(100% / var(--columns) * 8 - var(--gutter));
  }
}
@media (min-width: 1600px) and (max-width: 1920px) {
  .container .col-xxl-9 {
    width: calc(100% / var(--columns) * 9 - var(--gutter));
  }
}
@media (min-width: 1600px) and (max-width: 1920px) {
  .container .col-xxl-10 {
    width: calc(100% / var(--columns) * 10 - var(--gutter));
  }
}
@media (min-width: 1600px) and (max-width: 1920px) {
  .container .col-xxl-11 {
    width: calc(100% / var(--columns) * 11 - var(--gutter));
  }
}
@media (min-width: 1600px) and (max-width: 1920px) {
  .container .col-xxl-12 {
    width: calc(100% / var(--columns) * 12 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-md-1 {
    width: calc(100% / var(--columns) * 1 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-md-2 {
    width: calc(100% / var(--columns) * 2 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-md-3 {
    width: calc(100% / var(--columns) * 3 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-md-4 {
    width: calc(100% / var(--columns) * 4 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-md-5 {
    width: calc(100% / var(--columns) * 5 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-md-6 {
    width: calc(100% / var(--columns) * 6 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-md-7 {
    width: calc(100% / var(--columns) * 7 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-md-8 {
    width: calc(100% / var(--columns) * 8 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-md-9 {
    width: calc(100% / var(--columns) * 9 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-md-10 {
    width: calc(100% / var(--columns) * 10 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-md-11 {
    width: calc(100% / var(--columns) * 11 - var(--gutter));
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .col-md-12 {
    width: calc(100% / var(--columns) * 12 - var(--gutter));
  }
}
@media (max-width: 567px) {
  .container .col-sm-1 {
    width: calc(100% / var(--columns) * 1 - var(--gutter));
  }
}
@media (max-width: 567px) {
  .container .col-sm-2 {
    width: calc(100% / var(--columns) * 2 - var(--gutter));
  }
}
@media (max-width: 567px) {
  .container .col-sm-3 {
    width: calc(100% / var(--columns) * 3 - var(--gutter));
  }
}
@media (max-width: 567px) {
  .container .col-sm-4 {
    width: calc(100% / var(--columns) * 4 - var(--gutter));
  }
}
@media (max-width: 567px) {
  .container .col-sm-5 {
    width: calc(100% / var(--columns) * 5 - var(--gutter));
  }
}
@media (max-width: 567px) {
  .container .col-sm-6 {
    width: calc(100% / var(--columns) * 6 - var(--gutter));
  }
}
@media (max-width: 567px) {
  .container .col-sm-7 {
    width: calc(100% / var(--columns) * 7 - var(--gutter));
  }
}
@media (max-width: 567px) {
  .container .col-sm-8 {
    width: calc(100% / var(--columns) * 8 - var(--gutter));
  }
}
@media (max-width: 567px) {
  .container .col-sm-9 {
    width: calc(100% / var(--columns) * 9 - var(--gutter));
  }
}
@media (max-width: 567px) {
  .container .col-sm-10 {
    width: calc(100% / var(--columns) * 10 - var(--gutter));
  }
}
@media (max-width: 567px) {
  .container .col-sm-11 {
    width: calc(100% / var(--columns) * 11 - var(--gutter));
  }
}
@media (max-width: 567px) {
  .container .col-sm-12 {
    width: calc(100% / var(--columns) * 12 - var(--gutter));
  }
}
@media (min-width: 992px) {
  .container .offset-1 {
    margin-left: calc(100% / var(--columns) * 1 + var(--gutter) / 2);
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .offset-1 {
    margin-left: calc(50% / var(--columns) * 1 + var(--gutter) / 2);
  }
}
@media (min-width: 992px) {
  .container .offset-2 {
    margin-left: calc(100% / var(--columns) * 2 + var(--gutter) / 2);
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .offset-2 {
    margin-left: calc(50% / var(--columns) * 2 + var(--gutter) / 2);
  }
}
@media (min-width: 992px) {
  .container .offset-3 {
    margin-left: calc(100% / var(--columns) * 3 + var(--gutter) / 2);
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .offset-3 {
    margin-left: calc(50% / var(--columns) * 3 + var(--gutter) / 2);
  }
}
@media (min-width: 992px) {
  .container .offset-4 {
    margin-left: calc(100% / var(--columns) * 4 + var(--gutter) / 2);
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .offset-4 {
    margin-left: calc(50% / var(--columns) * 4 + var(--gutter) / 2);
  }
}
@media (min-width: 992px) {
  .container .offset-5 {
    margin-left: calc(100% / var(--columns) * 5 + var(--gutter) / 2);
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .offset-5 {
    margin-left: calc(50% / var(--columns) * 5 + var(--gutter) / 2);
  }
}
@media (min-width: 992px) {
  .container .offset-6 {
    margin-left: calc(100% / var(--columns) * 6 + var(--gutter) / 2);
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .offset-6 {
    margin-left: calc(50% / var(--columns) * 6 + var(--gutter) / 2);
  }
}
@media (min-width: 992px) {
  .container .offset-7 {
    margin-left: calc(100% / var(--columns) * 7 + var(--gutter) / 2);
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .offset-7 {
    margin-left: calc(50% / var(--columns) * 7 + var(--gutter) / 2);
  }
}
@media (min-width: 992px) {
  .container .offset-8 {
    margin-left: calc(100% / var(--columns) * 8 + var(--gutter) / 2);
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .offset-8 {
    margin-left: calc(50% / var(--columns) * 8 + var(--gutter) / 2);
  }
}
@media (min-width: 992px) {
  .container .offset-9 {
    margin-left: calc(100% / var(--columns) * 9 + var(--gutter) / 2);
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .offset-9 {
    margin-left: calc(50% / var(--columns) * 9 + var(--gutter) / 2);
  }
}
@media (min-width: 992px) {
  .container .offset-10 {
    margin-left: calc(100% / var(--columns) * 10 + var(--gutter) / 2);
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .offset-10 {
    margin-left: calc(50% / var(--columns) * 10 + var(--gutter) / 2);
  }
}
@media (min-width: 992px) {
  .container .offset-11 {
    margin-left: calc(100% / var(--columns) * 11 + var(--gutter) / 2);
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .offset-11 {
    margin-left: calc(50% / var(--columns) * 11 + var(--gutter) / 2);
  }
}
@media (min-width: 992px) {
  .container .offset-12 {
    margin-left: calc(100% / var(--columns) * 12 + var(--gutter) / 2);
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .container .offset-12 {
    margin-left: calc(50% / var(--columns) * 12 + var(--gutter) / 2);
  }
}

.grid-lines {
  --columns: 12;
  --gutter: 40px;
  position: absolute;
  inset: 0;
  display: flex;
  height: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
}
@media (min-width: 567px) and (max-width: 992px) {
  .grid-lines {
    --columns: 6;
  }
}
@media (max-width: 567px) {
  .grid-lines {
    --columns: 4;
  }
}
.grid-lines span {
  outline: 1px solid red;
  margin-right: var(--gutter);
  display: block;
  width: calc(100% / var(--columns) - (var(--gutter)));
  background-color: rgba(0, 0, 0, 0.05);
  margin-left: calc(var(--gutter) / 2);
  margin-right: calc(var(--gutter) / 2);
}

/* Base font size in pixels (1rem = 16px) */
/* The viewport width factor */
.fs--14, .fs--14 .--fs {
  font-size: clamp(0.6875rem, 0.6875rem + 0.15625vw, 0.875rem);
}

.fs--15, .fs--15 .--fs {
  font-size: clamp(0.6875rem, 0.6875rem + 0.15625vw, 0.9375rem);
}

.fs--16, .fs--16 .--fs {
  font-size: clamp(0.875rem, 0.875rem + 0.2604166667vw, 1rem);
}

.fs--36, .fs--36 .--fs {
  font-size: clamp(1.625rem, 1.625rem + 0.5208333333vw, 2.25rem);
}

.fs--70, .fs--70 .--fs {
  font-size: clamp(0rem, 0rem + 3.6458333333vw, 4.375rem);
}

.fs--48, .fs--48 .--fs {
  font-size: clamp(2.25rem, 2.25rem + 2.5vw, 3rem);
}

.fs--96, .fs--96 .--fs {
  font-size: clamp(2.75rem, 2.75rem + 2.2916666667vw, 6rem);
}

/* Global Variables */
:root {
  --color-primary: #3F3F3F;
  --color-secondary: #B7B7A4;
  --color-3: #E8E8E4;
  --color-4: #EDEDE9;
  --color-5: #F5F5F4;
  --color-6: #F9CE65;
  --color-7: #D54821;
  --color-8: #D784FC;
  --color-white: #FFFFFF;
  --color-white-always: #FFFFFF;
  --color-black: #000000;
  --sm: 576px;
  --md: 768px;
  --lg: 992px;
  --xl: 1200px;
  --xxl: 1600px;
  --xxxl: 1920px;
}

body.dark-theme, body:has(.page-dark) {
  --color-primary: #F0F0EF;
  --color-secondary: #C5C5C5;
  --color-3: #E8E8E4;
  --color-4: #0D0D0D;
  --color-5: #FFFFFF;
  --color-6: #F9CE65;
  --color-7: #D54821;
  --color-8: #D784FC;
  --color-white: #000000;
  --color-white-always: #FFFFFF;
  --color-black: #FFFFFF;
}

.c--primary {
  color: var(--color-primary);
}

.c--secondary {
  color: var(--color-secondary);
}

.c--secondary-alt {
  color: var(--color-secondary-alt);
}

.c--3 {
  color: var(--color-3);
}

.c--4 {
  color: var(--color-4);
}

.c--5 {
  color: var(--color-5);
}

.c--6 {
  color: var(--color-6);
}

.c--7 {
  color: var(--color-7);
}

.c--8 {
  color: var(--color-8);
}

.c--white {
  color: var(--color-white);
}

.c--white-alt {
  color: var(--color-white-alt);
}

.c--black {
  color: var(--color-black);
}

.bg--primary {
  background-color: var(--color-primary);
}

.bg--secondary {
  background-color: var(--color-secondary);
}

.bg--secondary-alt {
  background-color: var(--color-secondary-alt);
}

.bg--3 {
  background-color: var(--color-3);
}

.bg--4 {
  background-color: var(--color-4);
}

.bg--5 {
  background-color: var(--color-5);
}

@keyframes loadingIn {
  from {
    opacity: 0;
  }
  85% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes loadingOut {
  from {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  99.9% {
    width: auto;
  }
  to {
    width: 0%;
    opacity: 0;
  }
}
@keyframes loadingOutDiv {
  from {
    opacity: 0.7;
  }
  30% {
    opacity: 1;
  }
  60% {
    opacity: 0.7;
  }
  90% {
    opacity: 1;
  }
  99.9% {
    width: auto;
  }
  to {
    width: 0%;
    opacity: 0.9;
  }
}
/* Atoms */
.--button {
  display: flex;
  align-items: center;
  margin-right: 30px;
}
.--button:hover svg {
  stroke: var(--color-secondary);
}
.--button .arrow-icon {
  margin-top: -4px;
  margin-left: 15px;
  rotate: -90deg;
}

.arrow-icon {
  stroke: var(--color-primary);
}

.hdr-logo {
  padding: 0;
  margin: 0;
}

.signature {
  fill: var(--color-black);
  stroke: var(--color-black);
}

/* Molecules */
.image-tile:before {
  content: " ";
  position: absolute;
  left: 10%;
  border-radius: 100%;
  bottom: -25%;
  transform: translateX(-50%) translateY(-50%);
  width: clamp(2.1875rem, 3.6458333333vw, 4.375rem);
  aspect-ratio: 1/1;
  background: var(--color-4);
  border: 7px solid var(--color-secondary);
  z-index: 3;
}
.image-tile .inner {
  width: clamp(5.6875rem, 9.4791666667vw, 11.375rem);
  overflow: hidden;
  display: block;
  aspect-ratio: 1/1;
  border-radius: clamp(2rem, 3.3333333333vw, 4rem);
  display: flex;
  transform: scale(1);
}
.image-tile .inner img {
  width: 100%;
  object-fit: cover;
}
.skill-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
}
@media (min-width: 567px) and (max-width: 899px) {
  .skill-item {
    grid-template-columns: 1fr;
  }
}
.skill-item .--left {
  display: flex;
  flex-direction: column;
}
@media (min-width: 567px) {
  .skill-item .--left {
    width: clamp(8.75rem, 10.4166666667vw, 12.5rem);
  }
}
.skill-item .--left strong, .skill-item .--left span {
  line-height: 1.1em;
}
.skill-item .--right {
  padding-top: clamp(0.2625rem, 0.3125vw, 0.375rem);
}
@media (min-width: 567px) and (max-width: 899px) {
  .skill-item .--right {
    padding-top: clamp(0.875rem, 1.0416666667vw, 1.25rem);
    padding-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
  }
}
@media (max-width: 566px) {
  .skill-item .--right {
    justify-self: end;
  }
}
.skill-item .--progress {
  display: flex;
  align-items: center;
  gap: clamp(0.35rem, 0.4166666667vw, 0.5rem);
  flex: 0 0 auto;
}
.skill-item .--progress li {
  height: 8px;
  width: 8px;
  border-radius: 4.5px;
  background-color: var(--color-primary);
}
.skill-item .--progress[data-progress="1"] li:nth-child(1n+2) {
  background-color: var(--color-secondary);
}
.skill-item .--progress[data-progress="2"] li:nth-child(1n+3) {
  background-color: var(--color-secondary);
}
.skill-item .--progress[data-progress="3"] li:nth-child(1n+4) {
  background-color: var(--color-secondary);
}
.skill-item .--progress[data-progress="4"] li:nth-child(1n+5) {
  background-color: var(--color-secondary);
}
.skill-item .--progress[data-progress="5"] li:nth-child(1n+6) {
  background-color: var(--color-secondary);
}
.skill-item .--progress[data-progress="6"] li:nth-child(1n+7) {
  background-color: var(--color-secondary);
}

.header {
  position: fixed;
  z-index: 10;
  background-color: var(--color-white);
  backdrop-filter: blur(100px);
  width: 100%;
}
.header .header--inner {
  display: flex;
  justify-content: space-between;
  align-items: end;
}
.header .--left {
  display: flex;
  justify-content: space-between;
  align-items: end;
}
.header .--right {
  padding-right: clamp(6.43125rem, 7.65625vw, 9.1875rem);
}
.header .--right .navicon {
  transition: 300ms linear top;
  position: absolute;
  top: 38px;
  right: 32px;
}
@media (max-width: 9928px) {
  .header .--right .--button {
    display: none;
  }
}
@media (min-width: 992px) {
  .header .--right .--button {
    position: relative;
    top: -10px;
  }
  .header .--right .navicon {
    display: none;
  }
}
.header svg {
  fill: var(--color-primary);
}
.header .logo {
  width: clamp(6.43125rem, 7.65625vw, 9.1875rem);
  transition: 300ms linear width;
  aspect-ratio: 175/129;
  height: unset;
}
@media (max-width: 992px) {
  .header .nav-main {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0px;
    width: 300px;
    right: -300px;
    transition: 100ms linear right;
    background-color: var(--color-white);
    z-index: 20;
    height: 100vh;
  }
  .header:after {
    z-index: 11;
    top: 0;
    bottom: 0;
    width: 100vw;
    right: -100vw;
    background-color: var(--color-3);
    content: "";
    position: fixed;
    display: block;
    height: 100vh;
    opacity: 0.7;
    transition: 100ms linear right;
  }
  .header.menu-active .nav-main {
    right: 0px;
  }
  .header.menu-active:after {
    right: 0;
  }
  .header .nav-main ul {
    padding: 0 40px;
    list-style: none;
  }
  .header .nav-main ul li {
    border-bottom: 1px solid var(--color-3);
  }
  .header .nav-main ul a {
    padding: 10px 0;
    display: block;
  }
}
@media (min-width: 992px) {
  .header .nav-main ul {
    list-style: none;
    display: flex;
  }
  .header .nav-main ul li {
    word-break: keep-all;
  }
  .header .nav-main ul a {
    text-wrap: nowrap;
    padding: 5px 20px;
  }
}

.has-scrolled .header .logo {
  width: clamp(4.2rem, 5vw, 6rem);
}
.has-scrolled .header .navicon {
  top: 10px;
  right: 32px;
}

footer#footer {
  background-color: var(--color-4);
}
footer#footer .--center {
  text-align: center;
}
footer#footer .--top {
  padding-top: 200px;
}
footer#footer .--bottom {
  padding-top: 100px;
  padding-bottom: 50px;
}
footer#footer .--svg {
  margin-bottom: 40px;
}
footer#footer .--svg svg {
  max-width: 100%;
  fill: var(--color-primary);
  stroke: var(--color-primary);
}

/* Organisms */
.organism-00 {
  position: relative;
  margin: 20px;
  padding: 40px;
  background: var(--colour-gray-3);
  border-radius: 20px;
}
.organism-00.loader-content:has(.loader) > *:not(.loader) {
  opacity: 0;
  animation: loadingIn 2s normal forwards ease-in-out;
}
.organism-00 .loader {
  z-index: 0;
  position: absolute;
  top: 40px;
  left: 40px;
  bottom: 40px;
  right: 40px;
  overflow: hidden;
}
.organism-00 .loader div {
  background: linear-gradient(90deg, rgb(220, 219, 230) 0%, rgb(230, 232, 238) 14%, rgb(234, 238, 240) 100%);
  background: var(--colour-gray-8);
  border-radius: 4px;
  width: 100%;
  margin-bottom: 20px;
}
.organism-00 .loader {
  animation: loadingOut 2s normal forwards ease-in-out;
  opacity: 1;
}
.organism-00 .loader div {
  animation: loadingOutDiv 2s normal forwards ease-in-out;
}

.header-block-01 {
  position: relative;
  padding-bottom: 100px;
}
@media (min-width: 992px) {
  .header-block-01 {
    height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    min-height: 800px;
  }
}
@media (min-width: 567px) and (max-width: 992px) {
  .header-block-01 .row > .col:first-child {
    display: flex;
    justify-content: center;
  }
  .header-block-01 .row > .col:first-child h1 {
    left: 60px;
    position: relative;
  }
  .header-block-01 .row > .col:first-child h1 span:nth-of-type(1) {
    position: relative;
    left: -100px;
  }
  .header-block-01 .row > .col:first-child h1 span:nth-of-type(2) {
    position: relative;
    left: -100px;
  }
}
.header-block-01 .--left {
  max-width: clamp(22.34375rem, 28.6458333333vw, 34.375rem);
}
.header-block-01 .--left .--page-down {
  padding-top: 40px;
  padding-bottom: 40px;
}
@media (min-width: 992px) {
  .header-block-01 .--left .--page-down {
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
  }
}
@media (max-width: 992px) {
  .header-block-01 .--left .--page-down {
    display: block;
    text-align: center;
  }
}
.header-block-01 .--left .--title {
  color: var(--color-secondary);
}
.header-block-01 .--left .--title span {
  display: block;
  color: var(--color-primary);
}
.header-block-01 .--button {
  justify-content: end;
}
.header-block-01 .--right, .header-block-01 .--right .--grid {
  height: 100%;
}
.header-block-01 .--right .--link {
  text-align: center;
}
.header-block-01 .--right .--grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: center;
  justify-content: end;
  width: 100%;
  box-sizing: border-box;
}
@media (min-width: 992px) {
  .header-block-01 .--right .--grid {
    padding-left: clamp(2.625rem, 3.125vw, 3.75rem);
  }
}
@media (min-width: 567px) {
  .header-block-01 .--right .--grid {
    gap: 10%;
  }
}
@media (min-width: 567px) and (max-width: 1200px) {
  .header-block-01 .--right .--grid a:nth-child(2) {
    padding-top: 200px;
  }
}
@media (max-width: 567px) {
  .header-block-01 .--right .--grid {
    grid-template-columns: 1fr;
  }
  .header-block-01 .--right .--grid a:nth-child(2) .--image {
    order: 2;
  }
  .header-block-01 .--right .--grid .--link {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 20px;
  }
  .header-block-01 .--right .--grid .--link .--image .--number {
    display: none;
  }
}
.header-block-01 .--right .--h2 {
  justify-content: center;
  display: flex;
}
.header-block-01 .--right .--image {
  position: relative;
}
.header-block-01 .--right .--image img {
  width: 100%;
  height: auto;
  border-radius: 160px;
  box-shadow: 2vw 2vw 0px var(--color-4);
}
@media (min-width: 567px) {
  .header-block-01 .--right .--image:after {
    content: " ";
    display: block;
    height: 30px;
    width: 2px;
    background-color: var(--color-primary);
    position: absolute;
    left: 50%;
    bottom: clamp(-2.625rem, -3.125vw, -3.75rem);
  }
}
@media (min-width: 567px) {
  .header-block-01 .--right .--number {
    position: absolute;
    bottom: -5%;
    right: -18%;
  }
}
.header-block-01 .--right .--subtitle {
  padding-top: 20px;
  margin-bottom: clamp(0.4375rem, 0.5208333333vw, 0.625rem);
}
@media (min-width: 567px) {
  .header-block-01 .--right .--subtitle {
    padding-top: clamp(3.0625rem, 3.6458333333vw, 4.375rem);
  }
}
@media (max-width: 567px) {
  .header-block-01 .--right .--title {
    padding-bottom: 20px;
  }
}
@media (min-width: 567px) {
  .header-block-01 .--right .--group .--number {
    display: none;
  }
}

.in-focus-block-02 {
  background-color: var(--color-4);
  padding-top: clamp(5.25rem, 6.25vw, 7.5rem);
  padding-bottom: clamp(2.625rem, 3.125vw, 3.75rem);
}
.in-focus-block-02 .--subtitle {
  margin-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
}
.in-focus-block-02 .--title {
  max-width: 700px;
  margin-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
}
.in-focus-block-02 .--text {
  max-width: 600px;
  margin-bottom: clamp(0.875rem, 1.0416666667vw, 1.25rem);
}
.in-focus-block-02 .--signature svg {
  max-width: 100%;
  fill: var(--color-primary);
}
.in-focus-block-02 .--center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./_App/Blocks.scss","webpack://./_App/scss/global/_fonts.scss","webpack://./_App/scss/packages/CSSColumnPro/src/CSSGridPro.scss","webpack://./_App/scss/packages/CSSColumnPro/src/lib/grid.scss","webpack://./_App/scss/packages/CSSColumnPro/src/lib/gridlines.scss","webpack://./_App/scss/packages/FontScalingPro/src/lib/font-scale.scss","webpack://./_App/scss/global/_variables.scss","webpack://./_App/scss/global/_loading.scss","webpack://./_App/modules/_atoms/button/_button.scss","webpack://./_App/modules/_atoms/arrowicon/_arrowicon.scss","webpack://./_App/modules/_atoms/logo/_logo.scss","webpack://./_App/modules/_atoms/signature/_signature.scss","webpack://./_App/modules/_molecules/image-tile/_image-tile.scss","webpack://./_App/scss/base/_responsiveunit.scss","webpack://./_App/modules/_molecules/skill/_skill.scss","webpack://./_App/modules/_molecules/_header.scss","webpack://./_App/modules/_molecules/_footer.scss","webpack://./_App/modules/_organisms/organism-00/_organism-00.scss","webpack://./_App/modules/_organisms/header-block-01/_header-block-01.scss","webpack://./_App/modules/_organisms/in-focus-block-02/_in-focus-block-02.scss"],"names":[],"mappings":"AAYA;EACI,SAAA;AAVJ;AAYI;EACI,kBAAA;AAVR;;AAcA;EACI,eAAA;AAXJ;AAaI;EAHJ;IAIQ,eAAA;EAVN;AACF;AAYI;EAPJ;IAQQ,eAAA;EATN;AACF;;AAgBA,mBAAA;ACpCA,oCAAA;AAGA;EACI,yCAAA;EACA,gBAAA;EACA,kBAAA;ADsBJ;;ACnBA;EACI,yCAAA;EACA,gBAAA;EACA,kBAAA;ADsBJ;;ACnBA;EACI,yCAAA;EACA,gBAAA;EACA,kBAAA;ADsBJ;;ACnBA;EACI,yCAAA;EACA,gBAAA;EACA,kBAAA;ADsBJ;;ACnBA;EACI,yBAAA;ADsBJ;;ACnBA;EACI,gBAAA;ADsBJ;;AClBA;EACI,yCAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;ADqBJ;;AClBA;EACI,qBAAA;ADqBJ;;AClBA;EACI,sCAAA;EACA,gBAAA;EACA,kBAAA;ADqBJ;;ACjBA;EACI,kBAAA;EACA,SAAA;EACA,uBAAA;ADoBJ;;ACjBA;EACI,kBAAA;EACA,SAAA;EACA,uBAAA;ADoBJ;;ACjBA;EACI,kBAAA;EACA,SAAA;EACA,uBAAA;ADoBJ;;ACjBA;EACI,2BAAA;EACA,qBAAA;ADoBJ;AClBI;EACI,6BAAA;ADoBR;;AE5FA;EACE,WAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;AF+FF;;AG1GA;EACI,aAAA;EACA,cAAA;EACA,mBAAA;AH6GJ;AG3GI;EACI,2BAAA;EACA,cAAA;AH6GR;AGzGI;EAXJ;IAYQ,YAAA;EH4GN;AACF;AGzGI;EAhBJ;IAiBQ,YAAA;EH4GN;AACF;AG1GI;EACI,aAAA;EACA,eAAA;EACA,sBAAA;EACA,qCAAA;EACA,sCAAA;AH4GR;AGxGI;EACI,oCAAA;EACA,qCAAA;AH0GR;AGtGY;EADJ;IAEQ,SAAA;EHyGd;AACF;AGrGQ;EAZJ;IAaQ,WAAA;EHwGV;AACF;AGlGQ;EACI;IACI,sDAAA;EHoGd;AACF;AGvGQ;EACI;IACI,sDAAA;EHyGd;AACF;AG5GQ;EACI;IACI,sDAAA;EH8Gd;AACF;AGjHQ;EACI;IACI,sDAAA;EHmHd;AACF;AGtHQ;EACI;IACI,sDAAA;EHwHd;AACF;AG3HQ;EACI;IACI,sDAAA;EH6Hd;AACF;AGhIQ;EACI;IACI,sDAAA;EHkId;AACF;AGrIQ;EACI;IACI,sDAAA;EHuId;AACF;AG1IQ;EACI;IACI,sDAAA;EH4Id;AACF;AG/IQ;EACI;IACI,uDAAA;EHiJd;AACF;AGpJQ;EACI;IACI,uDAAA;EHsJd;AACF;AGzJQ;EACI;IACI,uDAAA;EH2Jd;AACF;AGpJQ;EACI;IACI,qDAAA;EHsJd;AACF;AGzJQ;EACI;IACI,qDAAA;EH2Jd;AACF;AG9JQ;EACI;IACI,qDAAA;EHgKd;AACF;AGnKQ;EACI;IACI,qDAAA;EHqKd;AACF;AGxKQ;EACI;IACI,qDAAA;EH0Kd;AACF;AG7KQ;EACI;IACI,qDAAA;EH+Kd;AACF;AGlLQ;EACI;IACI,qDAAA;EHoLd;AACF;AGvLQ;EACI;IACI,qDAAA;EHyLd;AACF;AG5LQ;EACI;IACI,qDAAA;EH8Ld;AACF;AGjMQ;EACI;IACI,sDAAA;EHmMd;AACF;AGtMQ;EACI;IACI,sDAAA;EHwMd;AACF;AG3MQ;EACI;IACI,sDAAA;EH6Md;AACF;AGvMQ;EACI;IACI,sDAAA;EHyMd;AACF;AG5MQ;EACI;IACI,sDAAA;EH8Md;AACF;AGjNQ;EACI;IACI,sDAAA;EHmNd;AACF;AGtNQ;EACI;IACI,sDAAA;EHwNd;AACF;AG3NQ;EACI;IACI,sDAAA;EH6Nd;AACF;AGhOQ;EACI;IACI,sDAAA;EHkOd;AACF;AGrOQ;EACI;IACI,sDAAA;EHuOd;AACF;AG1OQ;EACI;IACI,sDAAA;EH4Od;AACF;AG/OQ;EACI;IACI,sDAAA;EHiPd;AACF;AGpPQ;EACI;IACI,uDAAA;EHsPd;AACF;AGzPQ;EACI;IACI,uDAAA;EH2Pd;AACF;AG9PQ;EACI;IACI,uDAAA;EHgQd;AACF;AG1PQ;EACI;IACI,sDAAA;EH4Pd;AACF;AG/PQ;EACI;IACI,sDAAA;EHiQd;AACF;AGpQQ;EACI;IACI,sDAAA;EHsQd;AACF;AGzQQ;EACI;IACI,sDAAA;EH2Qd;AACF;AG9QQ;EACI;IACI,sDAAA;EHgRd;AACF;AGnRQ;EACI;IACI,sDAAA;EHqRd;AACF;AGxRQ;EACI;IACI,sDAAA;EH0Rd;AACF;AG7RQ;EACI;IACI,sDAAA;EH+Rd;AACF;AGlSQ;EACI;IACI,sDAAA;EHoSd;AACF;AGvSQ;EACI;IACI,uDAAA;EHySd;AACF;AG5SQ;EACI;IACI,uDAAA;EH8Sd;AACF;AGjTQ;EACI;IACI,uDAAA;EHmTd;AACF;AG7SQ;EACI;IACI,sDAAA;EH+Sd;AACF;AGlTQ;EACI;IACI,sDAAA;EHoTd;AACF;AGvTQ;EACI;IACI,sDAAA;EHyTd;AACF;AG5TQ;EACI;IACI,sDAAA;EH8Td;AACF;AGjUQ;EACI;IACI,sDAAA;EHmUd;AACF;AGtUQ;EACI;IACI,sDAAA;EHwUd;AACF;AG3UQ;EACI;IACI,sDAAA;EH6Ud;AACF;AGhVQ;EACI;IACI,sDAAA;EHkVd;AACF;AGrVQ;EACI;IACI,sDAAA;EHuVd;AACF;AG1VQ;EACI;IACI,uDAAA;EH4Vd;AACF;AG/VQ;EACI;IACI,uDAAA;EHiWd;AACF;AGpWQ;EACI;IACI,uDAAA;EHsWd;AACF;AGhWQ;EACI;IACI,sDAAA;EHkWd;AACF;AGrWQ;EACI;IACI,sDAAA;EHuWd;AACF;AG1WQ;EACI;IACI,sDAAA;EH4Wd;AACF;AG/WQ;EACI;IACI,sDAAA;EHiXd;AACF;AGpXQ;EACI;IACI,sDAAA;EHsXd;AACF;AGzXQ;EACI;IACI,sDAAA;EH2Xd;AACF;AG9XQ;EACI;IACI,sDAAA;EHgYd;AACF;AGnYQ;EACI;IACI,sDAAA;EHqYd;AACF;AGxYQ;EACI;IACI,sDAAA;EH0Yd;AACF;AG7YQ;EACI;IACI,uDAAA;EH+Yd;AACF;AGlZQ;EACI;IACI,uDAAA;EHoZd;AACF;AGvZQ;EACI;IACI,uDAAA;EHyZd;AACF;AGnZQ;EACI;IACI,sDAAA;EHqZd;AACF;AGxZQ;EACI;IACI,sDAAA;EH0Zd;AACF;AG7ZQ;EACI;IACI,sDAAA;EH+Zd;AACF;AGlaQ;EACI;IACI,sDAAA;EHoad;AACF;AGvaQ;EACI;IACI,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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&family=Playfair+Display&display=swap');\n\n$font-sizes: (\n    (min-font-size-px: 11, max-font-size-px: 14, font-scale: 3), // 13 // .fs--13\n    (min-font-size-px: 11, max-font-size-px: 15, font-scale: 3), // 14 // .fs--14\n    (min-font-size-px: 14, max-font-size-px: 16, font-scale: 5), // 16 // .fs--16\n    (min-font-size-px: 26, max-font-size-px: 36, font-scale: 10), // 16 // .fs--36\n    (min-font-size-px: 0, max-font-size-px: 70, font-scale: 70), // 20 // .fs--70\n    (min-font-size-px: 36, max-font-size-px: 48, font-scale: 48), // 26 // .fs--48\n    (min-font-size-px: 44, max-font-size-px: 96, font-scale: 44), // 120 // .fs--120\n);\n\nbody {\n    margin: 0;\n\n    .content-wrapper {\n        padding-top: 100px;\n    }\n}\n\n.container {\n    padding: 0 20px;\n\n    @media (min-width: 567px) {\n        padding: 0 40px;\n    }\n\n    @media (min-width: 768px) {\n        padding: 0 60px;\n    }\n\n  \n}\n\n\n\n/* Base Variables */\n@import \"scss/base/responsiveunit\";\n\n@import \"scss/global/fonts\";\n \n\n\n@import \"scss/packages/CSSColumnPro/src/CSSGridPro.scss\";\n@import \"scss/packages/FontScalingPro/src/FontScalingPro.scss\";\n\n\n\n/* Global Variables */\n@import \"scss/global/variables\";\n@import \"scss/global/loading\";\n\n/* Atoms */\n@import \"modules/_atoms/button/_button\";\n@import \"modules/_atoms/arrowicon/_arrowicon\";\n@import \"modules/_atoms/logo/_logo\";\n@import \"modules/_atoms/signature/_signature\";\n\n/* Molecules */\n@import \"modules/_molecules/image-tile/image-tile\";\n@import \"modules/_molecules/skill/skill\";\n@import \"modules/_molecules/_header\";\n@import \"modules/_molecules/_footer\";\n\n\n/* Organisms */\n@import \"modules/_organisms/organism-00/organism-00\";\n@import \"modules/_organisms/header-block-01/header-block-01\";\n@import \"modules/_organisms/in-focus-block-02/in-focus-block-02\";\n","/* Container Unit Responsive Fonts */\n\n\n.f--light {\n    font-family: \"Be Vietnam Pro\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n}\n\n.f--regular {\n    font-family: \"Be Vietnam Pro\", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n}\n\n.f--semibold {\n    font-family: \"Be Vietnam Pro\", sans-serif;\n    font-weight: 600;\n    font-style: normal;\n}\n\n.f--bold {\n    font-family: \"Be Vietnam Pro\", sans-serif;\n    font-weight: 800;\n    font-style: normal;\n}\n\n.tt--uppercase {\n    text-transform: uppercase;\n}\n\n:where(strong) {\n    font-weight: 400;\n}\n\n\nbody {\n    font-family: \"Be Vietnam Pro\", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n    line-height: 1.7em;\n}\n\n.--subtitle {\n    letter-spacing: 0.7em;\n}\n\n.--h1, .--h2, .--h3 {\n    font-family: \"Playfair Display\", serif;\n    font-weight: 400;\n    font-style: normal;\n\n}\n\n.--h1 {\n    line-height: 1.4em;\n    margin: 0;\n    letter-spacing: -0.02em;\n}\n\n.--h2 {\n    line-height: 1.1em;\n    margin: 0;\n    letter-spacing: -0.04em;\n}\n\n.--h3 {\n    line-height: 1.1em;\n    margin: 0;\n    letter-spacing: -0.04em;\n}\n\na {\n    color: var(--color-primary);\n    text-decoration: none;\n\n    &:hover {\n        color: var(--color-secondary);\n    }\n}\n\n\n","$columns: 12;\n$gutter: 40px;\n$container: 1680px !default;\n\n\n:root {\n  --sm: 576px;\n  --md: 768px;\n  --lg: 992px;\n  --xl: 1200px;\n  --xxl: 1600px;\n  --xxxl: 1920px;\n}\n\n@import 'lib/grid';\n@import 'lib/gridlines';",".container {\n    --columns: #{$columns};\n    --gutter: #{$gutter};\n    --container: #{$container};\n\n    &:not(.fluid) {\n        max-width: var(--container);\n        margin: 0 auto;\n    }\n\n    // Reduce Grid to 6 columns on medium screens\n    @media (min-width: 567px) and (max-width: 992px) {\n        --columns: 6;\n    }\n\n    // Reduce Grid to 4 columns on small screens\n    @media (max-width: 567px) {\n        --columns: 4;\n    }\n\n    .row {\n        display: flex;\n        flex-wrap: wrap;\n        box-sizing: border-box;\n        margin-left: calc(var(--gutter) / -2);\n        margin-right: calc(var(--gutter) / -2);\n    }\n  \n    // Mobile First Approach\n    .col {\n        margin-left: calc(var(--gutter) / 2);\n        margin-right: calc(var(--gutter) / 2);\n\n        // If not any additional column options\n        &:not([class*='col-']) {\n            @media (min-width: 567px) {\n                flex: 1 0;\n            }\n        }\n\n        // If mobile, make full width\n        @media (max-width: 567px) {\n            width: 100%;\n        }\n    }\n\n    // Columns\n    @for $i from 1 through $columns {\n        // Standard Desktop Sizing\n        @media (min-width: 992px) {\n            .col-#{$i} {\n                width: calc(calc(calc(100% / var(--columns)) * #{$i}) - var(--gutter));\n            }\n        }\n    }\n\n    @for $i from 1 through $columns {\n\n        // Standard Tablet Sizing\n        @media (min-width: 567px) and (max-width: 992px) {\n            .col-#{$i} {\n                width: calc(calc(calc(50% / var(--columns)) * #{$i}) - var(--gutter));\n            }\n        }\n    }\n\n    @for $i from 1 through $columns {\n        // Standard Tablet Sizing (md Modifier)\n        @media (min-width: 992px) and (max-width: 1200px) {\n            .col-lg-#{$i} {\n                width: calc(calc(calc(100% / var(--columns)) * #{$i}) - var(--gutter));\n            }\n        }\n    }\n\n    @for $i from 1 through $columns {\n        // Standard Tablet Sizing (md Modifier)\n        @media (min-width:  1200px) and (max-width: 1600px) {\n            .col-xl-#{$i} {\n                width: calc(calc(calc(100% / var(--columns)) * #{$i}) - var(--gutter));\n            }\n        }\n    }\n\n    @for $i from 1 through $columns {\n        // Standard Tablet Sizing (md Modifier)\n        @media (min-width:  1600px) and (max-width: 1920px) {\n            .col-xxl-#{$i} {\n                width: calc(calc(calc(100% / var(--columns)) * #{$i}) - var(--gutter));\n            }\n        }\n    }\n\n    @for $i from 1 through $columns {\n        // Standard Tablet Sizing (md Modifier)\n        @media (min-width: 567px) and (max-width: 992px) {\n            .col-md-#{$i} {\n                width: calc(calc(calc(100% / var(--columns)) * #{$i}) - var(--gutter));\n            }\n        }\n    }\n\n    @for $i from 1 through $columns {\n        // Standard Mobile Sizing (sm Modifier)\n        @media (max-width: 567px) {\n            .col-sm-#{$i} {\n                width: calc(calc(calc(100% / var(--columns)) * #{$i}) - var(--gutter));\n            }\n        }\n    }\n\n    // Offsets\n    @for $i from 1 through $columns {\n        @media (min-width: 992px) {\n            .offset-#{$i} {\n                margin-left: calc(calc(calc(calc(100% / var(--columns)) * #{$i})) + var(--gutter) / 2);\n            }\n        }\n\n        @media (min-width: 567px) and (max-width: 992px) {\n            .offset-#{$i} {\n                margin-left: calc(calc(calc(calc(50% / var(--columns)) * #{$i})) + var(--gutter) / 2);\n            }\n        }\n    }\n}\n",".grid-lines {\n    --columns: #{$columns};\n    --gutter: #{$gutter};\n   \n    position: absolute;\n    inset: 0;\n    display: flex;\n    height: 100%;\n    box-sizing: border-box;\n    flex-wrap: wrap;\n\n    // Reduce Grid to 6 columns on medium screens\n    @media (min-width: 567px) and (max-width: 992px) {\n        --columns: 6;\n    }\n\n    // Reduce Grid to 4 columns on small screens\n    @media (max-width: 567px) {\n        --columns: 4;\n    }\n\n    span {\n        outline: 1px solid red;\n        margin-right: var(--gutter);\n        display: block;\n        width: calc(calc(100% / var(--columns)) - calc(var(--gutter)));\n        background-color: rgba(0,0,0,0.05);\n        margin-left: calc(var(--gutter) / 2);\n        margin-right: calc(var(--gutter) / 2);\n    }\n}\n","@use 'sass:math';\n\n$base-font-size: 16 !default; /* Base font size in pixels (1rem = 16px) */\n$vw-factor: 0.5vw  !default; /* The viewport width factor */\n\n// $font-sizes: (\n//   (min-font-size-px: 13, max-font-size-px: 16, font-scale: 12),\n//   (min-font-size-px: 16, max-font-size-px: 24, font-scale: 16),\n//   (min-font-size-px: 21, max-font-size-px: 46, font-scale: 40),\n//   (min-font-size-px: 24, max-font-size-px: 64, font-scale: 60)\n// ) !default;\n\n// Convert PX to VW\n@function px-to-vw($px, $viewport-width: 1920) {\n    @return (math.div($px, $viewport-width)) * 100 * 1vw;\n  }\n\n\n// Loop\n@each $size in $font-sizes {\n  $min-font-size-px: map-get($size, min-font-size-px);\n  $max-font-size-px: map-get($size, max-font-size-px);\n  $font-scale: map-get($size, font-scale);\n  \n  // Convert pixel values to rem\n  $min-rem: #{math.div($min-font-size-px, $base-font-size)}rem;\n  $max-rem: #{math.div($max-font-size-px, $base-font-size)}rem;\n\n  // create fs-- classname based on max font\n  .fs--#{$max-font-size-px} {\n    &, .--fs { \n      font-size: clamp(\n      #{$min-rem},\n      calc(#{$min-rem} + #{px-to-vw($font-scale)}),\n      #{$max-rem}\n    );\n    }\n    \n  }\n}\n",":root {\n    --color-primary: #3F3F3F;\n    --color-secondary: #B7B7A4;\n    --color-3: #E8E8E4;\n    --color-4: #EDEDE9;\n    --color-5: #F5F5F4;\n    --color-6: #F9CE65;\n    --color-7: #D54821;\n    --color-8: #D784FC;\n    --color-white: #FFFFFF;\n    --color-white-always: #FFFFFF;\n    --color-black: #000000;\n\n    --sm: 576px;\n    --md: 768px;\n    --lg: 992px; \n    --xl: 1200px;\n    --xxl: 1600px;\n    --xxxl: 1920px;\n\n}\n\nbody.dark-theme, body:has(.page-dark) { \n    --color-primary: #F0F0EF;\n    --color-secondary: #C5C5C5;\n    --color-3: #E8E8E4;\n    --color-4: #0D0D0D; \n    --color-5: #FFFFFF;\n    --color-6: #F9CE65;\n    --color-7: #D54821;\n    --color-8: #D784FC;\n    --color-white: #000000;\n    --color-white-always: #FFFFFF;\n    --color-black: #FFFFFF;\n} \n\n\n.c--primary {\n    color: var(--color-primary);\n}\n\n.c--secondary {\n    color: var(--color-secondary);\n}\n\n.c--secondary-alt {\n    color: var(--color-secondary-alt);\n}\n\n.c--3 {\n    color: var(--color-3);\n}\n\n.c--4 {\n    color: var(--color-4);\n}\n\n.c--5 {\n    color: var(--color-5);\n}\n\n.c--6 {\n    color: var(--color-6);\n}\n\n.c--7 {\n    color: var(--color-7);\n}\n\n.c--8 {\n    color: var(--color-8);\n}\n\n.c--white {\n    color: var(--color-white);\n}\n\n.c--white-alt {\n    color: var(--color-white-alt);\n}\n\n.c--black {\n    color: var(--color-black);\n}\n\n.bg--primary {\n    background-color: var(--color-primary);\n}\n\n.bg--secondary {\n    background-color: var(--color-secondary);\n}\n\n.bg--secondary-alt {\n    background-color: var(--color-secondary-alt);\n}\n\n.bg--3 {\n    background-color: var(--color-3);\n}\n\n.bg--4 {\n    background-color: var(--color-4);\n}\n\n.bg--5 {\n    background-color: var(--color-5);\n}\n\n\n\n\n\n","@keyframes loadingIn {\n    from {\n         opacity: 0;\n    }\n    85% {\n        opacity: 0;\n    }\n    to {\n         opacity: 1;\n    }\n}  \n\n@keyframes loadingOut {\n    from {\n         opacity: 1;\n       \n    }\n    85% {\n        opacity: 1;\n      \n    }\n    99.9% {\n        width: auto;\n    }\n    to {\n        width: 0%;\n         opacity: 0;\n    }\n}\n\n@keyframes loadingOutDiv {\n    from {\n        opacity: 0.7  \n    }\n    30% {\n        opacity: 1;\n    }\n    60% {\n        opacity: 0.7;\n    }\n    90% {\n        opacity: 1;\n    }\n    99.9% {\n        width: auto;\n    }\n    to {\n        width: 0%;\n       opacity: 0.9;\n    }\n}",".--button {\n    display: flex;\n    align-items: center;\n    margin-right: 30px;\n\n    &:hover {\n        svg {\n            stroke: var(--color-secondary);\n        \n        }\n    }\n\n    .arrow-icon {\n        margin-top: -4px;\n        margin-left: 15px;\n        rotate: -90deg;\n    }\n}",".arrow-icon {\n    stroke: var(--color-primary);\n}",".hdr-logo {\n    padding: 0;\n    margin: 0;\n}\n.logo {\n    \n}",".signature {\n    fill: var(--color-black);\n    stroke: var(--color-black);\n}",".image-tile {\n    // Block Positioning\n\n    &:before {\n        content: \" \";\n        position: absolute;\n        left: 10%;\n        border-radius: 100%;\n        bottom: -25%;\n        transform: translateX(-50%) translateY(-50%);\n        @include _('width', 0.5, 70);\n        aspect-ratio: 1/1;\n        background: var(--color-4);\n        border: 7px solid var(--color-secondary);\n        z-index: 3;\n    }\n    \n    // Image Specifics\n    .inner {\n        @include _('width', 0.5, 182);\n        overflow: hidden;\n        display: block;\n\n        aspect-ratio: 1/1;\n        @include _('border-radius', 0.5, 64);\n        display: flex;\n\n        transform: scale(1);\n\n       img {\n        width: 100%;\n        object-fit: cover;\n       }\n\n    }\n\n    // Info Tile Positioning\n    .info-tile {\n\n    }\n \n}\n\n\n","@use \"sass:math\";\n\n@function strip-units($number) {\n  @return math.div($number, ($number * 0 + 1));\n}\n\n@function calculateRem($size) {\n  $remSize: math.div($size, 16);\n  @return #{$remSize}rem;\n}\n\n@function calculateClamp($minimum, $preferred, $maximum, $preferred_viewport_width: 1920px) {\n  $clamp_parameter_1: calculateRem($minimum * $preferred);\n  $clamp_parameter_2: strip-units(math.div(($preferred + 0), $preferred_viewport_width) * 100) * 1vw;\n  $clamp_parameter_3: calculateRem($maximum);\n\n  @return clamp(#{$clamp_parameter_1}, #{$clamp_parameter_2}, #{$clamp_parameter_3});\n}\n\n@mixin _($unit, $minimum, $preferred, $maximum: $preferred, $preferred_viewport_width: 1920px) {\n  // #{$unit}: calculateRem($preferred);\n  #{$unit}: calculateClamp($minimum, $preferred, $maximum, $preferred_viewport_width);\n}\n\n",".skill-item {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n    @media (min-width: 567px) and (max-width: 899px) {\n        grid-template-columns: 1fr;\n    }\n\n   \n\n    @include _('margin-bottom', 0.7, 20);\n\n    .--left {\n        display: flex;\n        flex-direction: column;\n\n        @media (min-width: 567px) {\n            @include _('width', 0.7, 200);\n        }\n\n        \n\n        strong, span {\n            line-height: 1.1em;\n        }\n    }\n\n    .--right {\n        @include _('padding-top', 0.7, 6);\n\n        @media (min-width: 567px) and (max-width: 899px) {\n            @include _('padding-top', 0.7, 20);\n            @include _('padding-bottom', 0.7, 20);\n        }\n\n        @media (max-width: 566px) {\n            justify-self: end;\n        }\n    }  \n\n\n    .--progress {\n        display: flex;\n        align-items: center;\n        @include _('gap', 0.7, 8);\n        flex: 0 0 auto;\n        \n\n        li {\n            height: 8px;\n            width: 8px;\n            border-radius: 4.5px;\n            background-color: var(--color-primary);\n\n        }\n\n        @for $i from 1 through 6 {\n            &[data-progress=\"#{$i}\"] {\n                li:nth-child(1n+#{$i + 1}) {\n                    background-color: var(--color-secondary);\n                }\n            }\n        }\n    }\n}",".header {\n    position: fixed;\n    z-index: 10;\n    background-color: var(--color-white);\n    backdrop-filter: blur(100px);\n    width: 100%;\n   \n\n    .header--inner {\n        display: flex;\n        justify-content: space-between;\n        align-items: end;\n    }\n\n    .--left {\n        display: flex;\n        justify-content: space-between;\n        align-items: end;\n\n\n    }\n\n    .--right {\n        @include _('padding-right', 0.7, 147);\n\n        .navicon {\n            transition: 300ms linear top;\n            position: absolute;\n            top: 38px;\n            right: 32px;\n        }\n        \n        @media (max-width: 9928px) {\n            .--button {\n                display: none;\n            }\n        }\n\n        @media (min-width: 992px) {\n            .--button {\n                position: relative;\n                top: -10px;\n            }\n            .navicon {\n                display: none;\n            }\n        }\n    }\n\n   svg {\n        fill: var(--color-primary);\n   }\n\n   .logo {\n        @include _('width', 0.7, 147);\n        transition: 300ms linear width;\n        aspect-ratio: 175/129;\n        height: unset;\n   }\n\n   @media (max-width: 992px) {\n        .nav-main {\n            position: fixed;\n            top: 0;\n            bottom: 0;\n            right: 0px;\n            width: 300px;\n            right: -300px;\n            transition: 100ms linear right;\n            background-color: var(--color-white);\n            z-index: 20;\n            height: 100vh;\n        }\n\n        &:after {\n            z-index: 11;\n            top: 0;\n            bottom: 0;\n            width: 100vw;\n            right: -100vw;\n            background-color: var(--color-3);\n            content: '';\n            position: fixed;\n            display: block;\n            height: 100vh;\n            opacity: 0.7;\n            transition: 100ms linear right;\n        }\n\n        &.menu-active {\n            .nav-main {\n                right: 0px;\n            }\n\n            &:after {\n               right: 0;\n            }\n        }\n\n        .nav-main {\n            ul {\n                padding: 0 40px;\n                list-style: none;\n\n                li {\n                    border-bottom: 1px solid var(--color-3);\n                }\n\n                a {\n                    padding: 10px 0;\n                    display: block;\n                }\n            }\n        }\n   }\n\n   @media (min-width: 992px) {\n        .nav-main {\n            ul {\n                list-style: none;\n                display: flex;\n\n                li {\n                    word-break: keep-all;\n                }\n\n                a {\n                    text-wrap: nowrap;\n                    padding: 5px 20px;\n                }\n            }\n        }\n    }\n}\n\n\n\n.has-scrolled {\n    .header {\n        .logo {\n            @include _('width', 0.7, 96);\n        }\n        .navicon {\n            top: 10px;\n            right: 32px;\n        }\n    }       \n}","footer#footer {\n    background-color: var(--color-4);\n    .--center {\n        text-align: center;\n    }  \n\n    .--top {\n        padding-top: 200px;\n    }\n\n    .--bottom {\n        padding-top: 100px;\n        padding-bottom: 50px;\n    }\n\n    .--svg {\n        margin-bottom: 40px;\n        \n        svg {\n            max-width: 100%;\n            fill: var(--color-primary);\n            stroke: var(--color-primary);\n        }\n    }\n}","$padding: 40px;\n$margin: 20px;\n\n.organism-00 {\n    position: relative;\n    margin: $margin;\n    padding: $padding;\n    background: var(--colour-gray-3);\n    border-radius: 20px;\n\n    &.loader-content {\n        &:has(.loader) {\n            > *:not(.loader) {\n                opacity: 0;\n                animation: loadingIn 2s normal forwards ease-in-out;\n            }\n        }\n    }\n\n\n    .loader {\n        z-index: 0;\n        position: absolute;\n        top: $padding;\n        left: $padding;\n        bottom: $padding;\n        right: $padding;\n        overflow: hidden;\n    \n        div {\n            background: linear-gradient(90deg, rgba(220,219,230,1) 0%, rgba(230,232,238,1) 14%, rgba(234,238,240,1) 100%);\n            background: var(--colour-gray-8);\n            border-radius: 4px;\n            width: 100%;\n            margin-bottom: 20px;\n        }\n    }\n    \n    .loader {\n        animation: loadingOut 2s normal forwards ease-in-out;\n        opacity: 1;\n    \n        div {\n            animation: loadingOutDiv 2s normal forwards ease-in-out;\n        }\n    }\n}\n\n\n",".header-block-01 {\n    position: relative;\n    padding-bottom: 100px;\n\n    @media (min-width: 992px) {\n        height: calc(100vh - 100px);\n        display: flex;\n        align-items: center;\n        min-height: 800px;\n    }\n\n    @media (min-width: 567px) and (max-width: 992px) {\n        .row > {\n            .col:first-child {\n                display:flex;\n                justify-content: center;\n\n                h1 {\n                    left: 60px;\n                    position: relative;\n\n                    span:nth-of-type(1) {\n                        position: relative;\n                        left: -100px;\n                    }\n\n                    span:nth-of-type(2) {\n                        position: relative;\n                        left: -100px;\n                    }\n                    \n                }\n            }\n        }\n    }\n \n\n    .--left {\n      @include _('max-width', 0.65, 550);\n\n        .--page-down {\n            padding-top: 40px;\n            padding-bottom: 40px;\n\n            @media (min-width: 992px) {\n                position: absolute;\n                bottom: 0px;\n                left: 50%;\n                transform: translateX(-50%);\n            }\n\n            @media (max-width: 992px) {\n                display: block;\n                text-align: center;\n            }\n        }\n\n        .--title {\n            color: var(--color-secondary);\n\n            span {\n                display: block;\n                color: var(--color-primary);\n            }\n        }\n    }\n\n   .--button {\n    justify-content: end;\n   }\n\n    .--right {\n        &, .--grid {\n            height: 100%;\n        } \n        \n        .--link {\n            text-align: center;\n        }\n\n        .--grid {\n            display: grid;\n            grid-template-columns: repeat(3, minmax(0, 1fr));\n            align-items: center;\n            justify-content: end;\n            width: 100%;\n            box-sizing: border-box;\n           \n\n            @media (min-width: 992px) {\n                @include _('padding-left', 0.7, 60);\n            }\n\n            @media (min-width: 567px) {\n                gap: 10%;\n            }\n\n            @media (min-width: 567px) and (max-width: 1200px) {\n                a:nth-child(2) {\n                    padding-top: 200px;\n                }\n            }\n\n            @media (max-width: 567px) {\n                grid-template-columns: 1fr;\n\n                a:nth-child(2) {\n                    .--image {\n                        order: 2;\n                    }\n                }\n    \n                .--link {\n                    display: grid;\n                    grid-template-columns: 1fr 1fr;\n                    align-items: center;\n                    gap: 20px;\n    \n                    .--image {\n                        .--number {\n                            display: none;\n                        }\n                    }\n                }\n            }\n        }\n\n       \n\n        .--h2 {\n            justify-content: center;\n            display: flex;\n        }\n\n        .--image {\n            position: relative;\n\n            img {\n                width: 100%;\n                height: auto;\n                border-radius: 160px;\n                box-shadow: 2vw 2vw 0px var(--color-4);\n            }\n\n            @media (min-width: 567px) {\n                &:after {\n                    content: \" \";\n                    display: block;\n                    height: 30px;\n                    width: 2px;\n                    background-color: var(--color-primary);\n                    position: absolute;\n                    left: 50%;\n                    @include _('bottom', 0.7, -60);\n                }\n            }\n        }\n\n        .--number {\n            @media (min-width: 567px) {\n                position: absolute;\n                bottom: -5%;\n                right: -18%;\n            }\n        }\n\n        .--subtitle {\n            padding-top: 20px;\n\n            @media (min-width: 567px) {\n                @include _('padding-top', 0.7, 70);\n            }\n            @include _('margin-bottom', 0.7, 10);\n        }\n\n        .--title {\n            @media (max-width: 567px) {\n                padding-bottom: 20px;\n            }\n        }\n\n        @media (min-width: 567px) {\n            .--group {\n                .--number {\n                    display: none;\n                }\n            }\n        }\n    }\n}",".in-focus-block-02 {\n    background-color: var(--color-4);\n    @include _('padding-top', 0.7, 120);\n    @include _('padding-bottom', 0.7, 60);\n    \n    .--subtitle {\n        @include _('margin-bottom', 0.7, 20);\n    }\n\n    .--title {\n        max-width: 700px;\n        @include _('margin-bottom', 0.7, 20);\n    }\n\n    .--text {\n        max-width: 600px;\n        @include _('margin-bottom', 0.7, 20);\n    }\n\n    .--signature {\n        svg {\n            max-width: 100%;\n            fill: var(--color-primary);\n        }\n    }\n    \n\n    .--center {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        text-align: center;\n    }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/cookie-guardian/src/cookie-guardian.scss":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/cookie-guardian/src/cookie-guardian.scss ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.cookie-guardian {
  font-family: sans-serif;
  position: fixed;
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  left: 50%;
  z-index: 9999;
  background: white;
  width: 800px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  max-width: 98%;
  max-height: 100vh;
  overflow: scroll;
}
.cookie-guardian * {
  box-sizing: content-box;
}
.cookie-guardian .cookie-guardian__banner {
  padding: 40px;
  padding-top: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e1e1e1;
}
.cookie-guardian .cookie-guardian__banner > div {
  margin-top: 6px;
  font-weight: bold;
  line-height: 11px;
  letter-spacing: -0.05em;
  color: #333;
}
.cookie-guardian .cookie-guardian__banner span {
  font-size: 9px;
  line-height: 9px;
  letter-spacing: 0.1em;
  color: #a1a1a1;
}
.cookie-guardian .cookie-guardian__desc {
  padding: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 16px;
  line-height: 1.4em;
  height: auto;
  overflow: scroll;
}
.cookie-guardian .cookie-guardian__options {
  position: relative;
  background-color: #f1f1f1;
  max-height: 300px;
  overflow: scroll;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  display: flex;
  flex-wrap: wrap;
}
.cookie-guardian .cookie-guardian__options p {
  font-size: 14px;
  line-height: 1.4em;
}
.cookie-guardian .cookie-guardian__options a {
  color: #333;
}
.cookie-guardian .cookie-guardian__options .cookie-guardian__section {
  padding: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e1e1e1;
  width: calc(50% - 81px);
}
.cookie-guardian .cookie-guardian__options .cookie-guardian__section b {
  padding-bottom: 10px;
  padding-top: 10px;
  display: block;
}
.cookie-guardian .cookie-guardian__options .cookie-guardian__section p {
  margin-bottom: 10px;
}
.cookie-guardian .cookie-guardian__options .cookie-guardian__section:nth-child(2n+2) {
  border-left: 1px solid #e1e1e1;
}
.cookie-guardian svg {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
}
.cookie-guardian svg:hover {
  fill: #EA6B48;
}
.cookie-guardian input[type=checkbox] {
  width: 58px;
  height: 32px;
  display: block;
  appearance: none;
  display: block;
  cursor: pointer;
}
.cookie-guardian input[type=checkbox]:disabled {
  cursor: not-allowed;
}
.cookie-guardian .cookie-guardian__section:has(input[type=checkbox]:checked) {
  background-color: #fafafa;
}
.cookie-guardian .cookie-guardian__section:has(input[type=checkbox]:not(:checked)) {
  color: #a1a1a1;
}
.cookie-guardian input[type=checkbox]:checked + .checkbox-slider:before {
  transform: translateX(26px);
}
.cookie-guardian input[type=checkbox]:disabled + .checkbox-slider {
  cursor: not-allowed;
  background-color: #e1e1e1;
}
.cookie-guardian input[type=checkbox] + .checkbox-slider {
  background-color: #e1e1e1;
}
.cookie-guardian input[type=checkbox]:checked:not(:disabled) + .checkbox-slider {
  background-color: #EA6B48;
}
.cookie-guardian input[type=checkbox]:disabled + .checkbox-slider:before {
  transform: translateX(26px);
}
.cookie-guardian .checkbox-slider {
  background-color: #EA6B48;
  pointer-events: none;
  border-radius: 32px;
  transform: translateY(-32px);
  position: absolute;
  transition: background-color 0.4s;
  width: 58px;
  height: 32px;
}
.cookie-guardian .checkbox-slider:before {
  background-color: #ffffff;
  border-radius: 50%;
  bottom: 4px;
  content: "";
  height: 24px;
  left: 4px;
  position: absolute;
  transition: transform 0.4s;
  width: 24px;
  background-color: #ffffff;
}

.cookie-guardian__buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 20px;
}

.cookie-guardian__button {
  padding: 20px;
  background-color: #EA6B48;
  appearance: none;
  border: none;
  color: white;
  border-radius: 10px;
  width: 200px;
  font-weight: bold;
  cursor: pointer;
}
.cookie-guardian__button:hover {
  background-color: #f1f1f1;
  color: #EA6B48;
}

.cookie-guardian__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(250, 250, 250, 0.7);
  z-index: 9998;
}

.cookie-button {
  padding: 10px;
  background-color: #EA6B48;
  appearance: none;
  border: none;
  color: white;
  border-radius: 100%;
  width: 40px;
  font-weight: bold;
  cursor: pointer;
  fill: white;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  bottom: 40px;
  right: 40px;
}
.cookie-button:hover {
  background-color: #f1f1f1;
  color: #EA6B48;
}`, "",{"version":3,"sources":["webpack://./node_modules/cookie-guardian/src/cookie-guardian.scss"],"names":[],"mappings":"AAEA;EACI,uBAAA;EACA,eAAA;EACA,4CAAA;EACA,QAAA;EACA,SAAA;EACA,aAAA;EACA,iBAAA;EACA,YAAA;EACA,uCAAA;EACA,mBAAA;EACA,cAAA;EACA,iBAAA;EACA,gBAAA;AADJ;AAGI;EACI,uBAAA;AADR;AAII;EACI,aAAA;EACA,iBAAA;EACA,oBAAA;EACA,gCAAA;AAFR;AAIQ;EACI,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,uBAAA;EACA,WAAA;AAFZ;AAKQ;EACI,cAAA;EACA,gBAAA;EACA,qBAAA;EACA,cAAA;AAHZ;AAOI;EACI,aAAA;EACA,iBAAA;EACA,oBAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,gBAAA;AALR;AAQI;EACI,kBAAA;EACA,yBAAA;EACA,iBAAA;EACA,gBAAA;EACA,6BAAA;EACA,gCAAA;EACA,aAAA;EACA,eAAA;AANR;AAQQ;EACI,eAAA;EACA,kBAAA;AANZ;AAUQ;EACI,WAAA;AARZ;AAaQ;EACI,aAAA;EACA,iBAAA;EACA,oBAAA;EACA,gCAAA;EACA,uBAAA;AAXZ;AAaY;EACI,oBAAA;EACA,iBAAA;EACA,cAAA;AAXhB;AAcY;EACI,mBAAA;AAZhB;AAeY;EACI,8BAAA;AAbhB;AAmBI;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,eAAA;AAjBR;AAmBQ;EACI,aAAA;AAjBZ;AAqBI;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,gBAAA;EACA,cAAA;EACA,eAAA;AAnBR;AAsBI;EACI,mBAAA;AApBR;AAuBI;EACI,yBAAA;AArBR;AAwBI;EACI,cAAA;AAtBR;AA0BI;EACI,2BAAA;AAxBR;AA2BI;EACI,mBAAA;EACA,yBAAA;AAzBR;AA4BI;EACI,yBAAA;AA1BR;AA6BI;EACI,yBAAA;AA3BR;AA+BI;EACI,2BAAA;AA7BR;AAgCI;EACI,yBAAA;EACA,oBAAA;EAEA,mBAAA;EACA,4BAAA;EACA,kBAAA;EAEA,iCAAA;EACA,WAAA;EACA,YAAA;AAhCR;AAmCQ;EACI,yBAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,kBAAA;EACA,0BAAA;EACA,WAAA;EACA,yBAAA;AAjCZ;;AA+CA;EACI,aAAA;EACA,6BAAA;EACA,gBAAA;EACA,mBAAA;AA5CJ;;AA+CA;EACI,aAAA;EACA,yBAAA;EACA,gBAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;AA5CJ;AA8CI;EACI,yBAAA;EACA,cAAA;AA5CR;;AAgDA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,0CAAA;EACA,aAAA;AA7CJ;;AAgDA;EACI,aAAA;EACA,yBAAA;EACA,gBAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;EACA,WAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,2CAAA;EACA,eAAA;EACA,YAAA;EACA,WAAA;AA7CJ;AA+CI;EACI,yBAAA;EACA,cAAA;AA7CR","sourcesContent":["\n\n.cookie-guardian {\n    font-family: sans-serif;\n    position: fixed;\n    transform: translateX(-50%) translateY(-50%);\n    top: 50%;\n    left: 50%;\n    z-index: 9999;\n    background: white;\n    width: 800px;\n    box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n    max-width: 98%;\n    max-height: 100vh;\n    overflow: scroll;\n\n    * {\n        box-sizing: content-box;\n    }\n\n    .cookie-guardian__banner {\n        padding: 40px;\n        padding-top: 14px;\n        padding-bottom: 10px;\n        border-bottom: 1px solid #e1e1e1;\n        \n        > div {\n            margin-top: 6px;\n            font-weight: bold;\n            line-height: 11px;\n            letter-spacing: -0.05em;\n            color: #333;\n        }\n\n        span {\n            font-size: 9px;\n            line-height: 9px;\n            letter-spacing: 0.1em;\n            color: #a1a1a1;\n        }\n    }\n\n    .cookie-guardian__desc {\n        padding: 40px;\n        padding-top: 20px;\n        padding-bottom: 20px;\n        font-size: 16px;\n        line-height: 1.4em;\n        height: auto;\n        overflow: scroll;\n    }\n\n    .cookie-guardian__options {\n        position: relative;\n        background-color: #f1f1f1;\n        max-height: 300px;\n        overflow: scroll;\n        border-top: 1px solid #e1e1e1;\n        border-bottom: 1px solid #e1e1e1;\n        display: flex;\n        flex-wrap: wrap;\n\n        p {\n            font-size: 14px;\n            line-height: 1.4em;\n          \n        }\n\n        a {\n            color: #333;\n        }\n        \n       \n\n        .cookie-guardian__section {\n            padding: 40px;\n            padding-top: 10px;\n            padding-bottom: 10px;\n            border-bottom: 1px solid #e1e1e1;\n            width: calc(50% - 81px);\n           \n            b {\n                padding-bottom: 10px;\n                padding-top: 10px;\n                display: block;\n            }\n\n            p {\n                margin-bottom: 10px;\n            }\n\n            &:nth-child(2n+2) {\n                border-left: 1px solid #e1e1e1;\n            }\n            \n        }\n    }\n\n    svg {\n        width: 20px;\n        height: 20px;\n        position: absolute;\n        right: 20px;\n        top: 20px;\n        cursor: pointer;\n\n        &:hover {\n            fill: #EA6B48;\n        }\n    }\n\n    input[type=\"checkbox\"] {\n        width: 58px;\n        height: 32px;\n        display: block;\n        appearance: none;\n        display: block;\n        cursor: pointer;\n    }\n\n    input[type=\"checkbox\"]:disabled {\n        cursor: not-allowed;\n    }\n\n    .cookie-guardian__section:has( input[type=\"checkbox\"]:checked) {\n        background-color: #fafafa;\n    }\n\n    .cookie-guardian__section:has( input[type=\"checkbox\"]:not(:checked)) {\n        color: #a1a1a1\n    }\n\n   \n    input[type=\"checkbox\"]:checked + .checkbox-slider:before {\n        transform: translateX(26px);\n    }\n\n    input[type=\"checkbox\"]:disabled + .checkbox-slider {\n        cursor: not-allowed;\n        background-color: #e1e1e1;\n    }\n\n    input[type=\"checkbox\"] + .checkbox-slider {\n        background-color: #e1e1e1;\n    }\n\n    input[type=\"checkbox\"]:checked:not(:disabled) + .checkbox-slider {\n        background-color: #EA6B48;\n    }\n    \n\n    input[type=\"checkbox\"]:disabled + .checkbox-slider:before {\n        transform: translateX(26px);\n    }\n\n    .checkbox-slider {\n        background-color: #EA6B48;\n        pointer-events: none;\n        // background-color: #141414;\n        border-radius: 32px;\n        transform: translateY(-32px);\n        position: absolute;\n \n        transition: background-color .4s;\n        width: 58px;\n        height: 32px;\n        \n        \n        &:before {\n            background-color: #ffffff;\n            border-radius: 50%;\n            bottom: 4px;\n            content: \"\";\n            height: 24px;\n            left: 4px;\n            position: absolute;\n            transition: transform .4s;\n            width: 24px;\n            background-color: #ffffff;\n        }\n    }\n}\n\n\n.cookie-guardian__close {\n\n}\n\n.cookie-guardian__content {\n\n}\n\n.cookie-guardian__buttons {\n    display: flex;\n    justify-content: space-around;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n\n.cookie-guardian__button {\n    padding: 20px;\n    background-color: #EA6B48;\n    appearance: none;\n    border: none;\n    color: white;\n    border-radius: 10px;\n    width: 200px;\n    font-weight: bold;\n    cursor: pointer;\n\n    &:hover {\n        background-color: #f1f1f1;\n        color: #EA6B48;\n    }\n}\n\n.cookie-guardian__overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(250, 250, 250, 0.7);\n    z-index: 9998;\n}\n\n.cookie-button {\n    padding: 10px;\n    background-color: #EA6B48;\n    appearance: none;\n    border: none;\n    color: white;\n    border-radius: 100%;\n    width: 40px;\n    font-weight: bold;\n    cursor: pointer;\n    fill: white;\n    aspect-ratio: 1/1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n    position: fixed;\n    bottom: 40px;\n    right: 40px;\n\n    &:hover {\n        background-color: #f1f1f1;\n        color: #EA6B48;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/desandro-matches-selector/matches-selector.js":
/*!********************************************************************!*\
  !*** ./node_modules/desandro-matches-selector/matches-selector.js ***!
  \********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));


/***/ }),

/***/ "./node_modules/ev-emitter/ev-emitter.js":
/*!***********************************************!*\
  !*** ./node_modules/ev-emitter/ev-emitter.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( typeof window != 'undefined' ? window : this, function() {

"use strict";

function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));


/***/ }),

/***/ "./node_modules/fizzy-ui-utils/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/fizzy-ui-utils/utils.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! desandro-matches-selector/matches-selector */ "./node_modules/desandro-matches-selector/matches-selector.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( matchesSelector ) {
      return factory( window, matchesSelector );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, matchesSelector ) {

'use strict';

var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));


/***/ }),

/***/ "./node_modules/fslightbox/index.js":
/*!******************************************!*\
  !*** ./node_modules/fslightbox/index.js ***!
  \******************************************/
/***/ ((module) => {

!function(e,t){if(true)module.exports=t();else { var o, n; }}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o,i="fslightbox-",r="".concat(i,"styles"),s="".concat(i,"cursor-grabbing"),a="".concat(i,"full-dimension"),c="".concat(i,"flex-centered"),l="".concat(i,"open"),u="".concat(i,"transform-transition"),d="".concat(i,"absoluted"),f="".concat(i,"slide-btn"),p="".concat(f,"-container"),h="".concat(i,"fade-in"),m="".concat(i,"fade-out"),g=h+"-strong",v=m+"-strong",b="".concat(i,"opacity-"),x="".concat(b,"1"),y="".concat(i,"source");function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e){var t=e.stageIndexes,n=e.core.stageManager,o=e.props.sources.length-1;n.getPreviousSlideIndex=function(){return 0===t.current?o:t.current-1},n.getNextSlideIndex=function(){return t.current===o?0:t.current+1},n.updateStageIndexes=0===o?function(){}:1===o?function(){0===t.current?(t.next=1,delete t.previous):(t.previous=0,delete t.next)}:function(){t.previous=n.getPreviousSlideIndex(),t.next=n.getNextSlideIndex()},n.i=o<=2?function(){return!0}:function(e){var n=t.current;if(0===n&&e===o||n===o&&0===e)return!0;var i=n-e;return-1===i||0===i||1===i}}"object"===("undefined"==typeof document?"undefined":w(document))&&((o=document.createElement("style")).className=r,o.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightboxl{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightboxl div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightboxl 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightboxl div:nth-child(1){animation-delay:-.45s}.fslightboxl div:nth-child(2){animation-delay:-.3s}.fslightboxl div:nth-child(3){animation-delay:-.15s}@keyframes fslightboxl{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}")),document.head.appendChild(o));function L(e){var t,n=e.props,o=0,i={};this.getSourceTypeFromLocalStorageByUrl=function(e){return t[e]?t[e]:r(e)},this.handleReceivedSourceTypeForUrl=function(e,n){if(!1===i[n]&&(o--,"invalid"!==e?i[n]=e:delete i[n],0===o)){!function(e,t){for(var n in t)e[n]=t[n]}(t,i);try{localStorage.setItem("fslightbox-types",JSON.stringify(t))}catch(e){}}};var r=function(e){o++,i[e]=!1};if(n.disableLocalStorage)this.getSourceTypeFromLocalStorageByUrl=function(){},this.handleReceivedSourceTypeForUrl=function(){};else{try{t=JSON.parse(localStorage.getItem("fslightbox-types"))}catch(e){}t||(t={},this.getSourceTypeFromLocalStorageByUrl=r)}}function A(e,t,n,o){var i=e.data,r=e.elements.sources,s=n/o,a=0;this.adjustSize=function(){if((a=i.maxSourceWidth/s)<i.maxSourceHeight)return n<i.maxSourceWidth&&(a=o),c();a=o>i.maxSourceHeight?i.maxSourceHeight:o,c()};var c=function(){r[t].style.width=a*s+"px",r[t].style.height=a+"px"}}function C(e,t){var n=this,o=e.collections.sourceSizers,i=e.elements,r=i.sourceAnimationWrappers,s=i.sources,a=e.isl,c=e.resolve;function l(e,n){o[t]=c(A,[t,e,n]),o[t].adjustSize()}this.runActions=function(e,o){a[t]=!0,s[t].classList.add(x),r[t].classList.add(g),r[t].removeChild(r[t].firstChild),l(e,o),n.runActions=l}}function E(e,t){var n,o=this,i=e.elements.sources,r=e.props,s=(0,e.resolve)(C,[t]);this.handleImageLoad=function(e){var t=e.target,n=t.naturalWidth,o=t.naturalHeight;s.runActions(n,o)},this.handleVideoLoad=function(e){var t=e.target,o=t.videoWidth,i=t.videoHeight;n=!0,s.runActions(o,i)},this.handleNotMetaDatedVideoLoad=function(){n||o.handleYoutubeLoad()},this.handleYoutubeLoad=function(){var e=1920,t=1080;r.maxYoutubeDimensions&&(e=r.maxYoutubeDimensions.width,t=r.maxYoutubeDimensions.height),s.runActions(e,t)},this.handleCustomLoad=function(){var e=i[t],n=e.offsetWidth,r=e.offsetHeight;n&&r?s.runActions(n,r):setTimeout(o.handleCustomLoad)}}function F(e,t,n){var o=e.elements.sources,i=e.props.customClasses,r=i[t]?i[t]:"";o[t].className=n+" "+r}function I(e,t){var n=e.elements.sources,o=e.props.customAttributes;for(var i in o[t])n[t].setAttribute(i,o[t][i])}function T(e,t){var n=e.collections.sourceLoadHandlers,o=e.elements,i=o.sources,r=o.sourceAnimationWrappers,s=e.props.sources;i[t]=document.createElement("img"),F(e,t,y),i[t].src=s[t],i[t].onload=n[t].handleImageLoad,I(e,t),r[t].appendChild(i[t])}function N(e,t){var n=e.collections.sourceLoadHandlers,o=e.elements,i=o.sources,r=o.sourceAnimationWrappers,s=e.props,a=s.sources,c=s.videosPosters;i[t]=document.createElement("video"),F(e,t,y),i[t].src=a[t],i[t].onloadedmetadata=function(e){n[t].handleVideoLoad(e)},i[t].controls=!0,I(e,t),c[t]&&(i[t].poster=c[t]);var l=document.createElement("source");l.src=a[t],i[t].appendChild(l),setTimeout(n[t].handleNotMetaDatedVideoLoad,3e3),r[t].appendChild(i[t])}function z(e,t){var n=e.collections.sourceLoadHandlers,o=e.elements,r=o.sources,s=o.sourceAnimationWrappers,a=e.props.sources;r[t]=document.createElement("iframe"),F(e,t,"".concat(y," ").concat(i,"youtube-iframe"));var c=a[t],l=c.split("?")[1];r[t].src="https://www.youtube.com/embed/".concat(c.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2],"?").concat(l||""),r[t].allowFullscreen=!0,I(e,t),s[t].appendChild(r[t]),n[t].handleYoutubeLoad()}function P(e,t){var n=e.collections.sourceLoadHandlers,o=e.elements,i=o.sources,r=o.sourceAnimationWrappers,s=e.props.sources;i[t]=s[t],F(e,t,"".concat(i[t].className," ").concat(y)),r[t].appendChild(i[t]),n[t].handleCustomLoad()}function k(e,t){var n=e.elements,o=n.sources,r=n.sourceAnimationWrappers;e.props.sources;o[t]=document.createElement("div"),o[t].className="".concat(i,"invalid-file-wrapper ").concat(c),o[t].innerHTML="Invalid source",r[t].classList.add(g),r[t].removeChild(r[t].firstChild),r[t].appendChild(o[t])}function H(e){var t=e.collections,n=t.sourceLoadHandlers,o=t.sourcesRenderFunctions,i=e.core.sourceDisplayFacade,r=e.resolve;this.runActionsForSourceTypeAndIndex=function(t,s){var a;switch("invalid"!==t&&(n[s]=r(E,[s])),t){case"image":a=T;break;case"video":a=N;break;case"youtube":a=z;break;case"custom":a=P;break;default:a=k}o[s]=function(){return a(e,s)},i.displaySourcesWhichShouldBeDisplayed()}}function W(){var e,t,n,o={isUrlYoutubeOne:function(e){var t=document.createElement("a");return t.href=e,"www.youtube.com"===t.hostname||"youtu.be"===t.hostname},getTypeFromResponseContentType:function(e){return e.slice(0,e.indexOf("/"))}};function i(){if(4!==n.readyState){if(2===n.readyState){var e;switch(o.getTypeFromResponseContentType(n.getResponseHeader("content-type"))){case"image":e="image";break;case"video":e="video";break;default:e="invalid"}n.onreadystatechange=null,n.abort(),t(e)}}else t("invalid")}this.setUrlToCheck=function(t){e=t},this.getSourceType=function(r){if(o.isUrlYoutubeOne(e))return r("youtube");t=r,(n=new XMLHttpRequest).onreadystatechange=i,n.open("GET",e,!0),n.send()}}function R(e,t,n){var o=e.props,i=o.types,r=o.type,s=o.sources,a=e.resolve;this.getTypeSetByClientForIndex=function(e){var t;return i&&i[e]?t=i[e]:r&&(t=r),t},this.retrieveTypeWithXhrForIndex=function(e){var o=a(W);o.setUrlToCheck(s[e]),o.getSourceType((function(o){t.handleReceivedSourceTypeForUrl(o,s[e]),n.runActionsForSourceTypeAndIndex(o,e)}))}}function D(e,t){var n=e.core.stageManager,o=e.elements,i=o.smw,r=o.sourceWrappersContainer,s=e.props,l=0,f=document.createElement("div");function p(e){f.style.transform="translateX(".concat(e+l,"px)"),l=0}function h(){return(1+s.slideDistance)*innerWidth}f.className="".concat(d," ").concat(a," ").concat(c),f.s=function(){f.style.display="flex"},f.h=function(){f.style.display="none"},f.a=function(){f.classList.add(u)},f.d=function(){f.classList.remove(u)},f.n=function(){f.style.removeProperty("transform")},f.v=function(e){return l=e,f},f.ne=function(){p(-h())},f.z=function(){p(0)},f.p=function(){p(h())},n.i(t)||f.h(),i[t]=f,r.appendChild(f),function(e,t){var n=e.elements,o=n.smw,i=n.sourceAnimationWrappers,r=document.createElement("div"),s=document.createElement("div");s.className="fslightboxl";for(var a=0;a<3;a++){var c=document.createElement("div");s.appendChild(c)}r.appendChild(s),o[t].appendChild(r),i[t]=r}(e,t)}function O(e,t,n,o){var r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttributeNS(null,"width",t),r.setAttributeNS(null,"height",t),r.setAttributeNS(null,"viewBox",n);var s=document.createElementNS("http://www.w3.org/2000/svg","path");return s.setAttributeNS(null,"class","".concat(i,"svg-path")),s.setAttributeNS(null,"d",o),r.appendChild(s),e.appendChild(r),r}function M(e,t){var n=document.createElement("div");return n.className="".concat(i,"toolbar-button ").concat(c),n.title=t,e.appendChild(n),n}function j(e,t){var n=document.createElement("div");n.className="".concat(i,"toolbar"),t.appendChild(n),function(e,t){var n=e.componentsServices,o=e.data,i=e.fs,r="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",s=M(t);s.title="Enter fullscreen";var a=O(s,"20px","0 0 18 18",r);n.ofs=function(){o.ifs=!0,s.title="Exit fullscreen",a.setAttributeNS(null,"width","24px"),a.setAttributeNS(null,"height","24px"),a.setAttributeNS(null,"viewBox","0 0 950 1024"),a.firstChild.setAttributeNS(null,"d","M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z")},n.xfs=function(){o.ifs=!1,s.title="Enter fullscreen",a.setAttributeNS(null,"width","20px"),a.setAttributeNS(null,"height","20px"),a.setAttributeNS(null,"viewBox","0 0 18 18"),a.firstChild.setAttributeNS(null,"d",r)},s.onclick=i.t}(e,n),function(e,t){var n=M(t,"Close");n.onclick=e.core.lightboxCloser.closeLightbox,O(n,"20px","0 0 24 24","M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z")}(e,n)}function X(e){var t=e.props.sources,n=e.elements.container,o=document.createElement("div");o.className="".concat(i,"nav"),n.appendChild(o),j(e,o),t.length>1&&function(e,t){var n=e.componentsServices,o=e.props.sources,r=(e.stageIndexes,document.createElement("div"));r.className="".concat(i,"slide-number-container");var s=document.createElement("div");s.className=c;var a=document.createElement("span");n.setSlideNumber=function(e){return a.innerHTML=e};var l=document.createElement("span");l.className="".concat(i,"slash");var u=document.createElement("div");u.innerHTML=o.length,r.appendChild(s),s.appendChild(a),s.appendChild(l),s.appendChild(u),t.appendChild(r),setTimeout((function(){s.offsetWidth>55&&(r.style.justifyContent="flex-start")}))}(e,o)}function B(e,t,n,o){var i=e.elements.container,r=n.charAt(0).toUpperCase()+n.slice(1),s=document.createElement("div");s.className="".concat(p," ").concat(p,"-").concat(n),s.title="".concat(r," slide"),s.onclick=t,function(e,t){var n=document.createElement("div");n.className="".concat(f," ").concat(c),O(n,"20px","0 0 20 20",t),e.appendChild(n)}(s,o),i.appendChild(s)}function U(e){var t=e.core,n=t.lightboxCloser,o=t.slideChangeFacade,i=e.fs;this.listener=function(e){switch(e.key){case"Escape":n.closeLightbox();break;case"ArrowLeft":o.changeToPrevious();break;case"ArrowRight":o.changeToNext();break;case"F11":e.preventDefault(),i.t()}}}function q(e){var t=e.elements,n=e.sourcePointerProps,o=e.stageIndexes;function i(e,o){t.smw[e].v(n.swipedX)[o]()}this.runActionsForEvent=function(e){var r,a,c;t.container.contains(t.slideSwipingHoverer)||t.container.appendChild(t.slideSwipingHoverer),r=t.container,a=s,(c=r.classList).contains(a)||c.add(a),n.swipedX=e.screenX-n.downScreenX;var l=o.previous,u=o.next;i(o.current,"z"),void 0!==l&&n.swipedX>0?i(l,"ne"):void 0!==u&&n.swipedX<0&&i(u,"p")}}function V(e){var t=e.props.sources,n=e.resolve,o=e.sourcePointerProps,i=n(q);1===t.length?this.listener=function(){o.swipedX=1}:this.listener=function(e){o.isPointering&&i.runActionsForEvent(e)}}function _(e){var t=e.core.slideIndexChanger,n=e.elements.smw,o=e.stageIndexes,i=e.sws;function r(e){var t=n[o.current];t.a(),t[e]()}function s(e,t){void 0!==e&&(n[e].s(),n[e][t]())}this.runPositiveSwipedXActions=function(){var e=o.previous;if(void 0===e)r("z");else{r("p");var n=o.next;t.changeTo(e);var a=o.previous;i.d(a),i.b(n),r("z"),s(a,"ne")}},this.runNegativeSwipedXActions=function(){var e=o.next;if(void 0===e)r("z");else{r("ne");var n=o.previous;t.changeTo(e);var a=o.next;i.d(a),i.b(n),r("z"),s(a,"p")}}}function Y(e,t){e.contains(t)&&e.removeChild(t)}function J(e){var t=e.core.lightboxCloser,n=e.elements,o=e.resolve,i=e.sourcePointerProps,r=o(_);this.runNoSwipeActions=function(){Y(n.container,n.slideSwipingHoverer),i.isSourceDownEventTarget||t.closeLightbox(),i.isPointering=!1},this.runActions=function(){i.swipedX>0?r.runPositiveSwipedXActions():r.runNegativeSwipedXActions(),Y(n.container,n.slideSwipingHoverer),n.container.classList.remove(s),i.isPointering=!1}}function G(e){var t=e.resolve,n=e.sourcePointerProps,o=t(J);this.listener=function(){n.isPointering&&(n.swipedX?o.runActions():o.runNoSwipeActions())}}function $(e){var t=this,n=e.core,o=n.eventsDispatcher,i=n.globalEventsController,r=n.scrollbarRecompensor,s=e.data,a=e.elements,c=e.fs,u=e.props,d=e.sourcePointerProps;this.isLightboxFadingOut=!1,this.runActions=function(){t.isLightboxFadingOut=!0,a.container.classList.add(v),i.removeListeners(),u.exitFullscreenOnClose&&s.ifs&&c.x(),setTimeout((function(){t.isLightboxFadingOut=!1,d.isPointering=!1,a.container.classList.remove(v),document.documentElement.classList.remove(l),r.removeRecompense(),document.body.removeChild(a.container),o.dispatch("onClose")}),270)}}function K(e,t){var n=e.classList;n.contains(t)&&n.remove(t)}function Q(e){var t,n,o;n=(t=e).core.eventsDispatcher,o=t.props,n.dispatch=function(e){o[e]&&o[e]()},function(e){var t=e.componentsServices,n=e.data,o=e.fs,i=["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"];function r(e){for(var t=0;t<i.length;t++)document[e](i[t],s)}function s(){document.fullscreenElement||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement?t.ofs():t.xfs()}o.o=function(){t.ofs();var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},o.x=function(){t.xfs(),document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},o.t=function(){n.ifs?o.x():o.o()},o.l=function(){r("addEventListener")},o.q=function(){r("removeEventListener")}}(e),function(e){var t=e.core,n=t.globalEventsController,o=t.windowResizeActioner,i=e.fs,r=e.resolve,s=r(U),a=r(V),c=r(G);n.attachListeners=function(){document.addEventListener("pointermove",a.listener),document.addEventListener("pointerup",c.listener),addEventListener("resize",o.runActions),document.addEventListener("keydown",s.listener),i.l()},n.removeListeners=function(){document.removeEventListener("pointermove",a.listener),document.removeEventListener("pointerup",c.listener),removeEventListener("resize",o.runActions),document.removeEventListener("keydown",s.listener),i.q()}}(e),function(e){var t=e.core.lightboxCloser,n=(0,e.resolve)($);t.closeLightbox=function(){n.isLightboxFadingOut||n.runActions()}}(e),function(e){var t=e.data,n=e.core.scrollbarRecompensor;function o(){document.body.offsetHeight>innerHeight&&(document.body.style.marginRight=t.scrollbarWidth+"px")}n.addRecompense=function(){"complete"===document.readyState?o():addEventListener("load",(function(){o(),n.addRecompense=o}))},n.removeRecompense=function(){document.body.style.removeProperty("margin-right")}}(e),function(e){var t=e.core,n=t.slideChangeFacade,o=t.slideIndexChanger,i=t.stageManager;e.props.sources.length>1?(n.changeToPrevious=function(){o.jumpTo(i.getPreviousSlideIndex())},n.changeToNext=function(){o.jumpTo(i.getNextSlideIndex())}):(n.changeToPrevious=function(){},n.changeToNext=function(){})}(e),function(e){var t=e.componentsServices,n=e.core,o=n.slideIndexChanger,i=n.sourceDisplayFacade,r=n.stageManager,s=e.elements,a=s.smw,c=s.sourceAnimationWrappers,l=e.isl,u=e.stageIndexes,d=e.sws;o.changeTo=function(e){u.current=e,r.updateStageIndexes(),t.setSlideNumber(e+1),i.displaySourcesWhichShouldBeDisplayed()},o.jumpTo=function(e){var t=u.previous,n=u.current,i=u.next,s=l[n],f=l[e];o.changeTo(e);for(var p=0;p<a.length;p++)a[p].d();d.d(n),d.c(),requestAnimationFrame((function(){requestAnimationFrame((function(){var e=u.previous,o=u.next;function p(){r.i(n)?n===u.previous?a[n].ne():n===u.next&&a[n].p():(a[n].h(),a[n].n())}s&&c[n].classList.add(m),f&&c[u.current].classList.add(h),d.a(),void 0!==e&&e!==n&&a[e].ne(),a[u.current].n(),void 0!==o&&o!==n&&a[o].p(),d.b(t),d.b(i),l[n]?setTimeout(p,260):p()}))}))}}(e),function(e){var t=e.core.sourcesPointerDown,n=e.elements,o=n.smw,i=n.sources,r=e.sourcePointerProps,s=e.stageIndexes;t.listener=function(e){"VIDEO"!==e.target.tagName&&e.preventDefault(),r.isPointering=!0,r.downScreenX=e.screenX,r.swipedX=0;var t=i[s.current];t&&t.contains(e.target)?r.isSourceDownEventTarget=!0:r.isSourceDownEventTarget=!1;for(var n=0;n<o.length;n++)o[n].d()}}(e),function(e){var t=e.collections.sourcesRenderFunctions,n=e.core.sourceDisplayFacade,o=e.props,i=e.stageIndexes;function r(e){t[e]&&(t[e](),delete t[e])}n.displaySourcesWhichShouldBeDisplayed=function(){if(o.loadOnlyCurrentSource)r(i.current);else for(var e in i)r(i[e])}}(e),function(e){var t=e.core.stageManager,n=e.elements,o=n.smw,i=n.sourceAnimationWrappers,r=e.isl,s=e.stageIndexes,a=e.sws;a.a=function(){for(var e in s)o[s[e]].s()},a.b=function(e){void 0===e||t.i(e)||(o[e].h(),o[e].n())},a.c=function(){for(var e in s)a.d(s[e])},a.d=function(e){if(r[e]){var t=i[e];K(t,g),K(t,h),K(t,m)}}}(e),function(e){var t=e.collections.sourceSizers,n=e.core.windowResizeActioner,o=e.data,i=e.elements.smw,r=e.stageIndexes;n.runActions=function(){innerWidth<992?o.maxSourceWidth=innerWidth:o.maxSourceWidth=.9*innerWidth,o.maxSourceHeight=.9*innerHeight;for(var e=0;e<i.length;e++)i[e].d(),t[e]&&t[e].adjustSize();var n=r.previous,s=r.next;void 0!==n&&i[n].ne(),void 0!==s&&i[s].p()}}(e)}function Z(e){var t=e.componentsServices,n=e.core,o=n.eventsDispatcher,r=n.globalEventsController,s=n.scrollbarRecompensor,c=n.sourceDisplayFacade,u=n.stageManager,f=n.windowResizeActioner,p=e.data,h=e.elements,m=(e.props,e.stageIndexes),v=e.sws;function b(){var t,n;p.i=!0,p.scrollbarWidth=function(){var e=document.createElement("div"),t=e.style,n=document.createElement("div");t.visibility="hidden",t.width="100px",t.msOverflowStyle="scrollbar",t.overflow="scroll",n.style.width="100%",document.body.appendChild(e);var o=e.offsetWidth;e.appendChild(n);var i=n.offsetWidth;return document.body.removeChild(e),o-i}(),Q(e),h.container=document.createElement("div"),h.container.className="".concat(i,"container ").concat(a," ").concat(g),function(e){var t=e.elements;t.slideSwipingHoverer=document.createElement("div"),t.slideSwipingHoverer.className="".concat(i,"slide-swiping-hoverer ").concat(a," ").concat(d)}(e),X(e),function(e){var t=e.core.sourcesPointerDown,n=e.elements,o=e.props.sources,i=document.createElement("div");i.className="".concat(d," ").concat(a),n.container.appendChild(i),i.addEventListener("pointerdown",t.listener),n.sourceWrappersContainer=i;for(var r=0;r<o.length;r++)D(e,r)}(e),e.props.sources.length>1&&(n=(t=e).core.slideChangeFacade,B(t,n.changeToPrevious,"previous","M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"),B(t,n.changeToNext,"next","M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z")),function(e){for(var t=e.props.sources,n=e.resolve,o=n(L),i=n(H),r=n(R,[o,i]),s=0;s<t.length;s++)if("string"==typeof t[s]){var a=r.getTypeSetByClientForIndex(s);if(a)i.runActionsForSourceTypeAndIndex(a,s);else{var c=o.getSourceTypeFromLocalStorageByUrl(t[s]);c?i.runActionsForSourceTypeAndIndex(c,s):r.retrieveTypeWithXhrForIndex(s)}}else i.runActionsForSourceTypeAndIndex("custom",s)}(e),o.dispatch("onInit")}e.open=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=m.previous,a=m.current,d=m.next;m.current=n,p.i||S(e),u.updateStageIndexes(),p.i?(v.c(),v.a(),v.b(i),v.b(a),v.b(d),o.dispatch("onShow")):b(),c.displaySourcesWhichShouldBeDisplayed(),t.setSlideNumber(n+1),document.body.appendChild(h.container),document.documentElement.classList.add(l),s.addRecompense(),r.attachListeners(),f.runActions(),h.smw[m.current].n(),o.dispatch("onOpen")}}function ee(e,t,n){return(ee=te()?Reflect.construct.bind():function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&ne(i,n.prototype),i}).apply(null,arguments)}function te(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function ne(e,t){return(ne=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function oe(e){return function(e){if(Array.isArray(e))return ie(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return ie(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ie(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ie(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function re(){for(var e=document.getElementsByTagName("a"),t=function(t){if(!e[t].hasAttribute("data-fslightbox"))return"continue";var n=e[t].hasAttribute("data-href")?e[t].getAttribute("data-href"):e[t].getAttribute("href");if(!n)return console.warn('The "data-fslightbox" attribute was set without the "href" attribute.'),"continue";var o=e[t].getAttribute("data-fslightbox");fsLightboxInstances[o]||(fsLightboxInstances[o]=new FsLightbox);var i=null;"#"===n.charAt(0)?(i=document.getElementById(n.substring(1)).cloneNode(!0)).removeAttribute("id"):i=n,fsLightboxInstances[o].props.sources.push(i),fsLightboxInstances[o].elements.a.push(e[t]);var r=fsLightboxInstances[o].props.sources.length-1;e[t].onclick=function(e){e.preventDefault(),fsLightboxInstances[o].open(r)},d("types","data-type"),d("videosPosters","data-video-poster"),d("customClasses","data-class"),d("customClasses","data-custom-class");for(var s=["href","data-fslightbox","data-href","data-type","data-video-poster","data-class","data-custom-class"],a=e[t].attributes,c=fsLightboxInstances[o].props.customAttributes,l=0;l<a.length;l++)if(-1===s.indexOf(a[l].name)&&"data-"===a[l].name.substr(0,5)){c[r]||(c[r]={});var u=a[l].name.substr(5);c[r][u]=a[l].value}function d(n,i){e[t].hasAttribute(i)&&(fsLightboxInstances[o].props[n][r]=e[t].getAttribute(i))}},n=0;n<e.length;n++)t(n);var o=Object.keys(fsLightboxInstances);window.fsLightbox=fsLightboxInstances[o[o.length-1]]}window.FsLightbox=function(){var e=this;this.props={sources:[],customAttributes:[],customClasses:[],types:[],videosPosters:[],slideDistance:.3},this.data={isFullscreenOpen:!1,maxSourceWidth:0,maxSourceHeight:0,scrollbarWidth:0},this.isl=[],this.sourcePointerProps={downScreenX:null,isPointering:!1,isSourceDownEventTarget:!1,swipedX:0},this.stageIndexes={},this.elements={a:[],container:null,slideSwipingHoverer:null,smw:[],sourceWrappersContainer:null,sources:[],sourceAnimationWrappers:[]},this.componentsServices={setSlideNumber:function(){}},this.resolve=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.unshift(e),ee(t,oe(n))},this.collections={sourceLoadHandlers:[],sourcesRenderFunctions:[],sourceSizers:[]},this.core={eventsDispatcher:{},globalEventsController:{},lightboxCloser:{},lightboxUpdater:{},scrollbarRecompensor:{},slideChangeFacade:{},slideIndexChanger:{},sourcesPointerDown:{},sourceDisplayFacade:{},stageManager:{},windowResizeActioner:{}},this.fs={},this.sws={},Z(this),this.close=function(){return e.core.lightboxCloser.closeLightbox()}},window.fsLightboxInstances={},re(),window.refreshFsLightbox=function(){for(var e in fsLightboxInstances){var t=fsLightboxInstances[e].props;fsLightboxInstances[e]=new FsLightbox,fsLightboxInstances[e].props=t,fsLightboxInstances[e].props.sources=[],fsLightboxInstances[e].elements.a=[]}re()}}])}));

/***/ }),

/***/ "./node_modules/get-size/get-size.js":
/*!*******************************************!*\
  !*** ./node_modules/get-size/get-size.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});


/***/ }),

/***/ "./node_modules/masonry-layout/masonry.js":
/*!************************************************!*\
  !*** ./node_modules/masonry-layout/masonry.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! outlayer/outlayer */ "./node_modules/outlayer/outlayer.js"),
        __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( Outlayer, getSize ) {

'use strict';

// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  var proto = Masonry.prototype;

  proto._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
    this.horizontalColIndex = 0;
  };

  proto.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  proto.getContainerWidth = function() {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  proto._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );
    // use horizontal or top column position
    var colPosMethod = this.options.horizontalOrder ?
      '_getHorizontalColPosition' : '_getTopColPosition';
    var colPosition = this[ colPosMethod ]( colSpan, item );
    // position the brick
    var position = {
      x: this.columnWidth * colPosition.col,
      y: colPosition.y
    };
    // apply setHeight to necessary columns
    var setHeight = colPosition.y + item.size.outerHeight;
    var setMax = colSpan + colPosition.col;
    for ( var i = colPosition.col; i < setMax; i++ ) {
      this.colYs[i] = setHeight;
    }

    return position;
  };

  proto._getTopColPosition = function( colSpan ) {
    var colGroup = this._getTopColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );

    return {
      col: colGroup.indexOf( minimumY ),
      y: minimumY,
    };
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  proto._getTopColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      colGroup[i] = this._getColGroupY( i, colSpan );
    }
    return colGroup;
  };

  proto._getColGroupY = function( col, colSpan ) {
    if ( colSpan < 2 ) {
      return this.colYs[ col ];
    }
    // make an array of colY values for that one group
    var groupColYs = this.colYs.slice( col, col + colSpan );
    // and get the max value of the array
    return Math.max.apply( Math, groupColYs );
  };

  // get column position based on horizontal index. #873
  proto._getHorizontalColPosition = function( colSpan, item ) {
    var col = this.horizontalColIndex % this.cols;
    var isOver = colSpan > 1 && col + colSpan > this.cols;
    // shift to next row if item can't fit on current row
    col = isOver ? 0 : col;
    // don't let zero-size items take up space
    var hasSize = item.size.outerWidth && item.size.outerHeight;
    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

    return {
      col: col,
      y: this._getColGroupY( col, colSpan ),
    };
  };

  proto._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  proto._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  proto._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  proto.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));


/***/ }),

/***/ "./node_modules/outlayer/item.js":
/*!***************************************!*\
  !*** ./node_modules/outlayer/item.js ***!
  \***************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Outlayer Item
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js"),
        __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( EvEmitter, getSize ) {
'use strict';

// ----- helpers ----- //

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //


var docElemStyle = document.documentElement.style;

var transitionProperty = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';
var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProperty ];

// cache all vendor properties that could have vendor prefix
var vendorProperties = {
  transform: transformProperty,
  transition: transitionProperty,
  transitionDuration: transitionProperty + 'Duration',
  transitionProperty: transitionProperty + 'Property',
  transitionDelay: transitionProperty + 'Delay'
};

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EvEmitter
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;

proto._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  var x = parseFloat( xValue );
  var y = parseFloat( yValue );
  // convert percent to pixels
  var layoutSize = this.layout.size;
  if ( xValue.indexOf('%') != -1 ) {
    x = ( x / 100 ) * layoutSize.width;
  }
  if ( yValue.indexOf('%') != -1 ) {
    y = ( y / 100 ) * layoutSize.height;
  }
  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');

  // x
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};

proto._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var didNotMove = x == this.position.x && y == this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

proto.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};

// non transition + transform support
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

proto.moveTo = proto._transitionTo;

proto.setPosition = function( x, y ) {
  this.position.x = parseFloat( x );
  this.position.y = parseFloat( y );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto.transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' + toDashedAll( transformProperty );

proto.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // munge number to millisecond, to match stagger
  var duration = this.layout.options.transitionDuration;
  duration = typeof duration == 'number' ? duration + 'ms' : duration;
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: duration,
    transitionDelay: this.staggerDelay || 0
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

// ----- events ----- //

proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};

proto.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: '',
  transitionDelay: ''
};

proto.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- stagger ----- //

proto.stagger = function( delay ) {
  delay = isNaN( delay ) ? 0 : delay;
  this.staggerDelay = delay + 'ms';
};

// ----- show/hide/remove ----- //

// remove element from DOM
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

proto.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};

proto.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

proto.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));


/***/ }),

/***/ "./node_modules/outlayer/outlayer.js":
/*!*******************************************!*\
  !*** ./node_modules/outlayer/outlayer.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js"),
        __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js"),
        __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js"),
        __webpack_require__(/*! ./item */ "./node_modules/outlayer/item.js")
      ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

var proto = Outlayer.prototype;
// inherit EvEmitter
utils.extend( proto, EvEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};

Outlayer.compatOptions = {
  // currentName: oldName
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};

proto._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
proto.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
proto._init = proto.layout;

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};


proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  items.forEach( function( item ) {
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  this.updateStagger();
  queue.forEach( function( obj, i ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
  }, this );
};

// set stagger from option in milliseconds number
proto.updateStagger = function() {
  var stagger = this.options.stagger;
  if ( stagger === null || stagger === undefined ) {
    this.stagger = 0;
    return;
  }
  this.stagger = getMilliseconds( stagger );
  return this.stagger;
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant, i ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.stagger( i * this.stagger );
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};

proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }

  // bind callback
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  elems.forEach( this.ignore, this );
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  elems.forEach( function( elem ) {
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  this.stamps.forEach( this._manageStamp, this );
};

// update boundingLeft / Top
proto._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent = utils.handleEvent;

/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};

proto.onresize = function() {
  this.resize();
};

utils.debounceMethod( Outlayer, 'onresize', 100 );

proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.reveal();
  });
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.hide();
  });
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  removeItems.forEach( function( item ) {
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }, this );
};

// ----- destroy ----- //

// remove and disable Outlayer instance
proto.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  this.items.forEach( function( item ) {
    item.destroy();
  });

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  var Layout = subclass( Outlayer );
  // apply new options and compatOptions
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = subclass( Item );

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }

  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;

  return SubClass;
}

// ----- helpers ----- //

// how many milliseconds are in each unit
var msUnits = {
  ms: 1,
  s: 1000
};

// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds( time ) {
  if ( typeof time == 'number' ) {
    return time;
  }
  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
  var num = matches && matches[1];
  var unit = matches && matches[2];
  if ( !num.length ) {
    return 0;
  }
  num = parseFloat( num );
  var mult = msUnits[ unit ] || 1;
  return num * mult;
}

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));


/***/ }),

/***/ "./_App/App.scss":
/*!***********************!*\
  !*** ./_App/App.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_App_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!../node_modules/sass-loader/dist/cjs.js!./App.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./_App/App.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_App_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_App_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_App_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_App_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./_App/Blocks.scss":
/*!**************************!*\
  !*** ./_App/Blocks.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_Blocks_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!../node_modules/sass-loader/dist/cjs.js!./Blocks.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./_App/Blocks.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_Blocks_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_Blocks_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_Blocks_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_Blocks_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/cookie-guardian/src/cookie-guardian.scss":
/*!***************************************************************!*\
  !*** ./node_modules/cookie-guardian/src/cookie-guardian.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_cookie_guardian_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!../../postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!../../sass-loader/dist/cjs.js!./cookie-guardian.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/cookie-guardian/src/cookie-guardian.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_cookie_guardian_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_cookie_guardian_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_cookie_guardian_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_cookie_guardian_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/swift-swap/src/PageFlow.js":
/*!*************************************************!*\
  !*** ./node_modules/swift-swap/src/PageFlow.js ***!
  \*************************************************/
/***/ ((module) => {

// import './PageFlow.scss';

// Linear DOM
class PageFlow {
    constructor(page, { ...variables }) {
        this._pageFlow = []; // Pages
        this._elemFlow = []; // Elements
        this._elemFlowRef = []; // Elements Reference
        this._app = page; // asign _app
        this._variables = variables;
   

        // if(retainValue === false) {
        //     this._variables = Object.assign({}, variables);;
        // }

        // if(retainValue === true) {
        //     this._variables = variables;
        // }

        return [this, variables]; // Return this, and additional properties
    }

    // Function to find Ref in Array, technically a cache finder
    // that finds an existing element
    _findRef(input) {
        // Convert input to string to handle both number and string inputs
        const searchString = String(input);
        // Use the find method to search for the object with matching ref property
        let ref = this._elemFlow.find(obj => String(obj.ref) === searchString);
        
        return ref?.selector ?? null;
    }

    _findObjectByRef = (refValue) => {
        // Use the find method to search for the object with matching ref property
        return this._elemFlow.find(obj => obj['@ref'] === refValue);
    };

    _findRefObjectByRef = (refValue) => {
        // Use the find method to search for the object with matching ref property
        return this._elemFlowRef.find(obj => obj['@ref'] === refValue);
    };


    _getValue(str)  {
        const pattern = /{{\s*(.*?)\s*}}/;
        let result = str;

        const match = str.match(pattern);
        let variableValue;

        if (match) {
            const variableName = match[1].trim();
            variableValue = this._variables[variableName];

    
            if (variableValue !== undefined) {
                result = str.replace(pattern, variableValue);
            } else {
                result = null; // Variable not found
            }
        }

        return { result: result, value: variableValue };
      };
      

    // Handle the @update attribute
    _eventListener = (string) => {
        // Get Ref
        const ref = /@ref="([^"]*)"/;
        const refmatch = string.match(ref);
        const refValue = refmatch ? refmatch[1] : null;

        // Get Value
        const regex = /@trigger="([^"]*)"/;
        const match = string.match(regex);
        const value = match ? match[1] : null;

        // Get Ref
        const renderRef = /@render="([^"]*)"/;
        const renderRefmatch = string.match(renderRef);
        const renderRefValue = renderRefmatch ? renderRefmatch[1] : null;

        // on RUN event
        if(value === 'run') {
            callback(this._findObjectByRef(refValue)?.selector); // Render event by @ref
        } 

        // on CLICK event
        if(value === 'click') {
            this._findObjectByRef(refValue)?.selector.addEventListener('click', () => { this._renderEventListener(refValue);  }) // Render event by @ref + @trigger
        }

        // on INPUT field (key up) Event
        if(value === 'input') {
            this._findObjectByRef(refValue)?.selector.addEventListener('keyup', () => { this._renderEventListener(refValue);  }) // Render event by @ref + @trigger
        }
    };


    _renderEventListener = (refValue) => {
        let callback = this._findRefObjectByRef(refValue)?.callback;
        let postcallback = this._findRefObjectByRef(refValue)?.postcallback;
        let defaultcallback = this._findRefObjectByRef(refValue)?.defaultcallback;
        let string = this._findRefObjectByRef(refValue).string;
        // Chain for Re Rendering Elements
        let modifyStartValue = null;
        let modifyEndValue = null;

        if(callback) {
            let result = callback(this._findObjectByRef(refValue)?.selector);
            if(!result) {
                
            } else {
                modifyStartValue = result; 
            }
        }


        this._htmlChange(string, modifyStartValue);
        
        
       
        if(postcallback) {
            let result = postcallback(this._findObjectByRef(refValue)?.selector);
            if(!result) {
                return false;
            } else {
                modifyEndValue = result;
            }
        }

        this._updateAttribute(string, modifyEndValue);

        


    
    }


    // Process HTML change
    _htmlChange = (string, getValue) => { 
        const regex = /@ref="([^"]*)"/;
        const match = string.match(regex);
        const refValue = match ? match[1] : null;

        // if no getValue then attempt to get the string
        if(!getValue) {
            getValue =  this._getFullString(string).value;
        }

        // Return if get value is undefinde, as it'll print undefined
        if(getValue === undefined) {
            return;
        }
        
        if(this._getFullString(string).value !== this._findRefObjectByRef(refValue)?.value) {

            if(this._findRefObjectByRef(refValue)?.value) {
                // this._findRefObjectByRef(refValue).value = fullString.value;

                if ( this._findObjectByRef(refValue)?.selector?.tagName.toLowerCase() === 'input') {
                    this._findRefObjectByRef(refValue).value =  getValue
                    this._findObjectByRef(refValue).selector.value = getValue
                } else {
                    this._findRefObjectByRef(refValue).value = getValue
                    this._findObjectByRef(refValue).selector.innerHTML = getValue
                }
            }
        };
    };


    _getFullString = (string) => {
        if(this._getValue(string)) {
            return this._getValue(string);
        }

        return null;
    };


    // Update Attribute @update="1,2"
    _updateAttribute = (string, newValue = null) => {
        const regex = /@update="([^"]*)"/;
        const match = string.match(regex);
        const refValue = match ? match[1] : null;

        if(refValue == null) { return }
        let updateItems = refValue.split(',');

        updateItems.forEach(ref => {
            this._htmlChangeByRef(ref, newValue);
        });
    };




    _htmlChangeByRef = (refValue, newValue) => { 
        if(!newValue) {
            newValue = this._getFullString().value;
        }

        if(!this._findObjectByRef(refValue)) {
            return;
        }
        
        if(this._findRefObjectByRef(refValue)?.value !== null) {
            
            if (this._findObjectByRef(refValue)?.selector?.tagName.toLowerCase() === 'input') {
                // Input
                this._findRefObjectByRef(refValue).value =  newValue;
                this._findObjectByRef(refValue).selector.value =  newValue;
            } else {
                // HTML
                this._findRefObjectByRef(refValue).value = newValue;
                this._findObjectByRef(refValue).selector.innerHTML = newValue;
            }
        } else {
            console.log('refValue does not exist');
        }
    }

    node(string, callback = null, postcallback = null, defaultcallback = null) {
        // Convert Inner HTML
        // Convert {{ }} in to <div></div>
        let fullString = this._getFullString(string);

        // Load HTML changes
        this._htmlChange(string);

        // If strings already exist and haven't been changed, do not run function
        // IF string matches anything inside of  this._elemFlowRef string
        const noChange = (() => { 
            const matchedObject = this._elemFlowRef.find(obj => obj.string === string);

            if(matchedObject) {
                return this._findObjectByRef(matchedObject['@ref'])?.selector;
            }
        })();

        // Extract String Data
       const extractAttributes = (() => {
            const pattern = /(?:class|data-\w+|@ref|@trigger|@update)="([^"]*)"/g;
            const matches = string.match(pattern) || [];
            const attributes = {};

            matches.forEach(match => {
                const [attributeName, attributeValue] = match.split('=');
                attributes[attributeName] = attributeValue.replace(/"/g, ''); // Remove surrounding quotes
            });

            return attributes;
        })();


        // Extract String Data
        const extractHTML = (() => {
            const contentPattern = /<div[^>]*>([^<]*)<\/div>/;
            const contentMatch = contentPattern.exec(string);
            const content = contentMatch ? contentMatch[1].trim() : null;

            return content;
        })();


        // Replace Objects with updated values;
        const foundObject = this._findObjectByRef(extractAttributes['@ref']);
        if (foundObject) {
            const { selector } = foundObject;
            const attributesToSet = {};
        
            for (const [attributeName, attributeValue] of Object.entries(extractAttributes)) {
                if (attributeName.startsWith('@')) {
                    // Set attribute using setAttributeNodeNS for names starting with '@'
                    attributesToSet[attributeName.slice(1)] = attributeValue;
                } else {
                    // For other attribute names, use setAttribute directly
                    attributesToSet[attributeName] = attributeValue;
                }
            }
        
            // Set all attributes at once
            Object.entries(attributesToSet).forEach(([name, value]) => {
                if(name === 'ref' || name === 'trigger' || name === 'update') { return } // Avoid changing @ref or @trigger values (These are static)
                selector.setAttribute(name, value);
            });

            return selector; 
        }

        // Buld HTML out of string
        const template = document.createElement('template');
        template.innerHTML = fullString.result.trim();
        const selector = template.content.firstChild;

    
   
        if(callback) {
            selector.getAttribute('@trigger')
            selector.addEventListener(selector.getAttribute('@action'), () => {
                callback?.(null);
            })
        }
      
        // Add References
        this._elemFlow.push({ '@ref': selector.getAttribute('@ref'), selector: selector, update: null }); // update enqueues update

        this._elemFlowRef.push({ 
            '@ref': selector.getAttribute('@ref'), 
            '@trigger' : selector.getAttribute('@trigger'), 
            '@update': selector.getAttribute('@update') ?? null, 
            '@render': selector.getAttribute('@render') ?? null, 
            '@initial': selector.getAttribute('@initial') ?? null, 
            '@parent': selector.getAttribute('@parent') ?? null, 
            index: this._elemFlow.length - 1,
            class: selector.classList, 
            id: selector.getAttribute('id'),
            data: selector.dataset, 
            string: string ?? '',
            value : fullString.value ?? '',
            update:  selector.getAttribute('@load') ?? null,
            callback: callback ?? null,
            postcallback: postcallback ?? null,
            defaultcallback: defaultcallback ?? null
        }); // add Reference Value xand Index

   
        // Target Location (RENDER INITIAL ELEMENT);
        let parent = document.querySelector(this._app);

        if(this._findObjectByRef(selector.getAttribute('@parent'))?.selector) {
            parent = this._findObjectByRef(selector.getAttribute('@parent'))?.selector
        } else if(selector.getAttribute('@parent')) {
            parent = document.querySelector(selector.getAttribute('@parent'))
        } 

        parent.appendChild(selector);
        this._eventListener(string);


        return selector ?? null;
    }

    render = () => {
        this._elemFlowRef.forEach(item => {
            if(item['@update'] && item['@load'] !== false) {
                if(item['@trigger'] !== 'click') {
                 this._renderEventListener(item['@ref']); // Trigger Referenced Items
                }
            }

            if(item['@trigger'] === 'click') {
                // this._renderEventListener(item['@ref']);
            }

            if(item['@render']) {
                this._renderEventListener(item['@render']);
            }

            // Render Initial Value
            if(item['defaultcallback']) {
                console.log('run');
                // this._htmlChangeByRef(item['@ref'], item['@initial']);

                 // Update variables to be the value specified in '@initial'
               
                 // Update variables to be the value specified in '@initial'
                //  
                 // Update the HTML using initial variables

                let value = item['defaultcallback']();

                if(value) {
             

                    console.log(item['@ref']);
                    console.log('has VaLu');
                    console.log(value);
                    // Issue running this function
                    this._htmlChangeByRef(item['@ref'], value);
                }
            }
        });


    }
}


const HTMLflow = (_, obj, functions, id) => {
    let item = obj.item;

   

    // Define Values
    let object = {
        '@trigger': item.getAttribute('@trigger') ?? null,
        '@update':  item.getAttribute('@update').split(',').map(num => id + num).join(',') ?? null,
        '@ref':  item.getAttribute('@ref').split(',').map(num => id + num).join(',') ?? null,
        '@parent': item.getAttribute('@parent') ?? null,
        class: item.getAttribute('class') ?? null,
        id:  item.getAttribute('id') ?? null,
        style:  item.getAttribute('style') ?? null,
        type : item.tagName.toLowerCase(),
        value: item.value ?? null,
    }

    const noCallback = () => {} // Cover the scenario that nocallback exists

    // Define callbacks
    let callbacks = {
        callback: item.getAttribute('callback') ? functions[item.getAttribute('callback')] : noCallback,
        postcallback: item.getAttribute('postcallback') ? functions[item.getAttribute('postcallback')] : noCallback,
        defaultcallback: item.getAttribute('defaultcallback') ? functions[item.getAttribute('defaultcallback')] : noCallback
    }

    // Remove all Items
    item.remove();

    // Filter out properties with null values
    object = Object.fromEntries(Object.entries(object).filter(([key, value]) => value !== null));

  
    // Create new Node
    if(object.type === 'input') {
        _.node(`<${object.type} ${Object.entries(object).map(([key, value]) => `${key}="${value}"`).join(' ')} value="${ item.value }">`,
        callbacks.callback,
        callbacks.postcallback, 
        callbacks.defaultcallback); // Need to write callbacks.defaults here
    } else {
        _.node(`<${object.type} ${Object.entries(object).map(([key, value]) => `${key}="${value}"`).join(' ')}>${ item.innerHTML }</${object.type}>`,
            callbacks.callback,
            callbacks.postcallback,
            callbacks.defaultcallback);  // Need to write callbacks.defaults here
    }
}



// const requestQueue = new RequestQueue();
// requestQueue.enqueue(url1, this._renderPage.bind(this));
// requestQueue.enqueue(url2, this._renderPage.bind(this));
// requestQueue.cancelAll();

class RequestQueue {
    constructor() {
        this.queue = [];
        this.abortController = new AbortController();
    }

    async enqueue(url, renderFunction) {
        const request = { url: url, renderFunction };

        this.queue.push(request);

        try {
            await this.processQueue();
        } catch (error) {
            console.error('Error processing request queue:', error);
        }
    }

    async processQueue() {
        while (this.queue.length > 0) {
            const { url, renderFunction } = this.queue.shift();
            const { signal } = this.abortController;

            try {
                const response = await fetch(url, { signal });

                if (!response.ok) {
                    throw new Error(`Failed to fetch data from ${url}. Status: ${response.status} ${response.statusText}`);
                }

                // const contentType = response.headers.get('content-type');
                // if (!contentType || !contentType.includes('application/json')) {
                //     throw new Error(`Invalid content type received from ${url}. Expected JSON.`);
                // }

                const data = await response.text();

                if (!data || Object.keys(data).length === 0) {
                    throw new Error(`No valid data received from ${url}`);
                }

                renderFunction(data);
            } catch (error) {
                console.error(`Error while fetching or rendering data from ${url}:`, error);
            }
        }
    }

    cancelAll() {
        this.abortController.abort();
        this.abortController = new AbortController();
        this.queue = [];
    }
}



// const dynamicPage = new DynamicPage({ source: '.selector', target: '.selector' }, renderList));
// cons dynamicPage._makeRequest(url);

class DynamicPage {
    constructor(obj, renderList) {
        this.cache = [];
        this.url = window.location.protocol + "//" + window.location.host;
        this.source = obj.source;
        this.target = obj.target;
        this.requestQueue = new RequestQueue();
        this.renderList = renderList;

        console.log('PageFlow 1');
        
        window.onpopstate = function() {
            // Handle page restore.
            console.log('hashchange 1');
            window.location.reload();
          }
    }
    // Adds or updates a page in the cache
    upsertPage(url, data) {
        const index = this.cache.findIndex(page => page.url === url);

        if (index > -1) {
            this.cache[index].data = data;
        } else {
            this.cache.push({ url, data });
        }
    }

    // Retrieves a page from the cache
    getPage(url) { return this.cache.find(page => page.url === url); }

    // Checks if a page exists in the cache
    exists(url) { return this.cache.some(page => page.url === url && page.data !== null && page.data !== undefined && page.data !== ''); }
    
    // Removes a page from the cache
    removePage(url) { this.cache = this.cache.filter(page => page.url !== url); }

    // Clears the entire cache
    clear() { this.cache = []; }
    getAllPages() { return this.cache; }

    runCallbacks = (callbacks, callbackArgs) => {
    
        callbacks.forEach(callback => {
            callback(callbackArgs);
        });
    }
    
   

    // Render the new Page Data
    _renderPage(data) {
       
    
       
    }

    // Request Page from URL (HTTP REQUEST)
    _makeRequest(url) {
        this.requestQueue.enqueue(url, this._processRequest.bind(this) );
    }

    _processRequest(data) {

        // if (this.target) {
        //     const childElements =  document.querySelector(this.target).querySelectorAll('*');
        //     childElements.forEach(child => {
        //         child.parentNode.removeChild(child);
        //     });
        // }

        document.querySelector(this.target).innerHTML='';
        
        let parser = new DOMParser();
        let doc = parser.parseFromString(data, "text/html");
        let sourceElement = doc.querySelector(this.source);
        
        if (sourceElement) {
            document.querySelector(this.target).appendChild(sourceElement.cloneNode(true));
        } else {
            console.error("Source element not found");
        }
   
        this.runCallbacks(this.renderList);
        
       
    
      

        return true;
    }

}

// This is how to use DatasetHandler
// const datasetHandler = new DatasetHandler(document.querySelector('dataset'));
// const dataset = datasetHandler.parseData();

class DatasetHandler {
    constructor(datasetElement) {
        this.datasetElement = datasetElement;
        this.dataMap = this.parseData();
    }

    parseData() {
        const { datasetElement } = this;
        
        if (!datasetElement || !datasetElement.dataset.set) return null;

        const { set: datasetName } = datasetElement.dataset;
        const dataElements = Array.from(datasetElement.querySelectorAll('data'));

        if (!dataElements.length) return null;

        const dataObject = dataElements.reduce((acc, dataElement) => {
            const { collection: variableName, value } = dataElement.dataset;
            acc[variableName] = value;
            return acc;
        }, {});

        return new Map([[datasetName, dataObject]]);
    }

    getVar(variableName, defaultValue) {
        if (!this.dataMap) return defaultValue;

        const datasetObject = this.dataMap.get(this.datasetElement.dataset.set);
        if (!datasetObject) return defaultValue;

        return datasetObject[variableName] !== undefined ? datasetObject[variableName] : defaultValue;
    }
}


const uuid = () => ([1e3]+-1e2+-4e2+-8e2+-1e12).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));


// export { PageFlow, HTMLflow, DynamicPage, uuid };


module.exports = {
    PageFlow,
    HTMLflow,
    DynamicPage,
    uuid,
    DatasetHandler
}


/***/ }),

/***/ "./node_modules/cookie-guardian/src/cookie-guardian.js":
/*!*************************************************************!*\
  !*** ./node_modules/cookie-guardian/src/cookie-guardian.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cookie_guardian_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookie-guardian.scss */ "./node_modules/cookie-guardian/src/cookie-guardian.scss");
// Copyright Christopher Nathaniel 2024-present
// Full license can be found in the LICENSE file



// Remove Script by Source
const removeScriptsBySource = (sourceSubstring) => {
    let scripts = document.querySelectorAll('script[src*="' + sourceSubstring + '"]');
    scripts.forEach(function(script) {
        script.parentNode.removeChild(script);
    });
}

// ALL External Scripts
const removeExternalScripts = () => {
    let currentDomain = window.location.hostname;
    let scripts = document.querySelectorAll('script[src]');
    scripts.forEach(function(script) {
        var scriptDomain = new URL(script.src).hostname;
        if (scriptDomain !== currentDomain) {
            script.parentNode.removeChild(script);
        }
    });
}


// Render HTML element that is replacable
const toHTML = (htmlString, targetId, parentElement = document.body) => {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlString.trim();
    const htmlElement = tempElement.firstChild;
    const targetElement = parentElement.querySelector(`[data-uuid="${targetId}"]`);
    tempElement.childNodes[0].dataset.uuid = targetId;
    if (targetElement) {
        return targetElement.parentNode.replaceChild(htmlElement, targetElement);
    } else {
        return parentElement.appendChild(htmlElement);
    }
}
 


// CookieGuardian({
//     policyLink: '/cookie-policy',
//     stopAllCookies: true,
//     desc: `<p>This website uses cookies...</a></p>`,
//     unclassifiedText: 'Unclassified cookies are cookies...',
//     marketingText: 'Marketing cookies are used...',
//     statisticsText: 'Statistical cookies help...',
//     preferencesText: 'Preference cookies enable...',
//     requiredText: 'Required cookies help...',
//     acceptText: 'Accept All',
//     declineText: 'Deny',
//     preferences: () => {
//         // Preferences Callback
//     },
//     statistics: () => {
//         // Statistics Callback
//     },
//     marketing: () => {
//         // Marketing Callback
//     },
//     unclassified: () => {
//         // Unclassified Callback
//     }
// });

// Main Cookie Guardian Scripts
class CookieGuardian {

    constructor(obj) {
        this.policyLink = obj?.policyLink ?? '/cookie-policy';
        this.open = this.getLocalStorage('cookie-guardian') ?? true;
        this.required = this.getLocalStorage('cookie-guardian-required') ?? false;
        this.preferences = this.getLocalStorage('cookie-guardian-preferences') ?? false;
        this.statistics = this.getLocalStorage('cookie-guardian-statistics') ?? false;
        this.marketing =  this.getLocalStorage('cookie-guardian-marketing') ?? false;
        this.unclassified = this.getLocalStorage('cookie-guardian-unclassified') ?? false;
        this.banner = null;
        this.stopAllCookies = obj?.stopAllCookies ?? true;
        this.desc = obj?.desc ?? `<p>This website uses cookies to improve user experience. By continuing to use this website, you consent to our use of cookies in accordance with our <a href="${this.policyLink}">Cookie Policy.</a></p>
        <p>Cookies are small text files that are placed on your machine to help the site provide a better user experience. In general, cookies are used to retain user preferences, store information for things like shopping carts, and provide anonymized tracking data to third-party applications like Google Analytics. As a rule, cookies will make your browsing experience better. However, you may prefer to disable cookies on this site and on others. The most effective way to do this is to disable cookies in your browser. We suggest consulting the Help section of your browser or taking a look at the About Cookies website which offers guidance for all modern browsers.</p>
        <p>By using this website, you agree to the use of cookies as described above.</p>`;

        this.unclassifiedText = obj?.unclassifiedText ?? 'Unclassified cookies are cookies that we are in the process of classifying, together with the providers of individual cookies.';
        this.marketingText = obj?.marketingText ?? 'Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.';
        this.statisticsText = obj?.statisticsText ?? 'Statistical cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.';
        this.preferencesText = obj?.preferencesText ?? 'Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.';
        this.requiredText = obj?.requiredText ?? 'Required cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.';

        this.preferencesCallback = obj?.preferences ?? (() => {});
        this.statisticsCallback = obj?.statistics ?? (() => {});
        this.marketingCallback = obj?.marketing ?? (() => {});
        this.unclassifiedCallback = obj?.unclassified ?? (() => {});

        this.acceptText = obj?.acceptText ?? 'Accept All';
        this.declineText = obj?.declineText ?? 'Deny';

        let button = this.cookieButtonHTML();
        
        button.addEventListener('click', () => {
            this.open = !this.open;
            this.render();
        });

        this.render();
        this.runCallbacks();
        this.runInterval();
    }


    render () {
        
        if(this.open) {
            this.banner = this.cookieBannerHTML();
            this.banner.classList.add('cookie-guardian__active');
        }
        
        if(!this.open) {
            if(this.banner) {
                this.banner.remove();
            }

            return;
        }

        this.banner.querySelector('.cookie-guardian__close').addEventListener('click', () => {
            this.open = false;

            
            this.setLocalStorage('cookie-guardian', this.open);
            this.setLocalStorage('cookie-guardian-preferences', this.preferences);
            this.setLocalStorage('cookie-guardian-statistics', this.statistics);
            this.setLocalStorage('cookie-guardian-marketing', this.marketing);
            this.setLocalStorage('cookie-guardian-unclassified', this.unclassified);

            this.render();
        });

        this.banner.querySelector('#cookie-guardian__deny-button').addEventListener('click', () => {
            this.open = false;

            this.preferences = false;
            this.statistics = false;
            this.marketing = false;
            this.unclassified = false;
            
            this.setLocalStorage('cookie-guardian', this.open);
            this.setLocalStorage('cookie-guardian-preferences', this.preferences);
            this.setLocalStorage('cookie-guardian-statistics', this.statistics);
            this.setLocalStorage('cookie-guardian-marketing', this.marketing);
            this.setLocalStorage('cookie-guardian-unclassified', this.unclassified);
            this.render();
        });

        this.banner.querySelector('#cookie-guardian__accept-button').addEventListener('click', () => {
            this.open = false;
            this.preferences = true;
            this.statistics = true;
            this.marketing = true;
            this.unclassified = true;
            
            this.setLocalStorage('cookie-guardian', this.open);
            this.setLocalStorage('cookie-guardian-preferences', this.preferences);
            this.setLocalStorage('cookie-guardian-statistics', this.statistics);
            this.setLocalStorage('cookie-guardian-marketing', this.marketing);
            this.setLocalStorage('cookie-guardian-unclassified', this.unclassified);
            this.runCallbacks();
            this.render();
        });

        this.banner.querySelector('.cg--statistics').checked = this.statistics;
        this.banner.querySelector('.cg--marketing').checked = this.marketing;
        this.banner.querySelector('.cg--unclassified').checked = this.unclassified;
        this.banner.querySelector('.cg--preferences').checked = this.preferences;

        this.banner.querySelector('.cg--preferences').addEventListener('click', (item) => {
            this.preferences = item.target.checked;
            this.setLocalStorage('cookie-guardian-preferences', this.preferences);
        });

        this.banner.querySelector('.cg--statistics').addEventListener('click', (item) => {
            this.statistics = item.target.checked;
            this.setLocalStorage('cookie-guardian-statistics', this.statistics);
        });

        this.banner.querySelector('.cg--marketing').addEventListener('click', (item) => {
            this.marketing = item.target.checked;
            this.setLocalStorage('cookie-guardian-marketing', this.marketing);
        });

        this.banner.querySelector('.cg--unclassified').addEventListener('click', (item) => {
            this.unclassified = item.target.checked;
            this.setLocalStorage('cookie-guardian-unclassified', this.unclassified);
        });
    }

    runCallbacks () {
         // All Cookies Accepted, run all callbacks
         if(this.preferences) {
             this.preferencesCallback();
         }
         if(this.statistics) {
             this.statisticsCallback();
         }
        if(this.marketing) {
            this.marketingCallback();
        }
        if(this.unclassified) {
            this.unclassifiedCallback();
        }
    }

    // Set a value in local storage
    setLocalStorage (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    // Get a value from local storage
    getLocalStorage (key) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }

    // Remove a value from local storage
    removeLocalStorage (key)  {
        localStorage.removeItem(key);
    }

    // Remove all cookies
    removeAllCookies () {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            const cookieParts = cookie.split('=');
            const name = cookieParts.shift();
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        }
    }

    cookieBannerHTML () {
        return toHTML(`<div>
            <div class="cookie-guardian">
                <div class="cookie-guardian__close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg></div>
                    <div class="cookie-guardian__content" data-tabcg="1">
                        <div class="cookie-guardian__banner">
                            <div>Cookie Guardian</div>
                            <span>BY CHRISTOPHER NATHANIEL</span>
                        </div>
                        <div class="cookie-guardian__desc">
                           ${ this.desc }
                        </div>
                     
                       
                            <div class="cookie-guardian__options">
                            <div class="cookie-guardian__section">
                                <b>Required</b>
                                <p>${ this.requiredText }</p>
                                <input type="checkbox" checked="checked" disabled="disabled" />  
                                <div class="checkbox-slider"></div>  
                            </div>

                            <div class="cookie-guardian__section">
                                <b>Preferences</b>
                                <p>${ this.preferencesText }</p>
                                <input type="checkbox" class="cg--preferences" />  
                                <div class="checkbox-slider"></div>  
                            </div>

                            <div class="cookie-guardian__section">
                                <b>Statistics</b>
                                <p>${ this.statisticsText }</p>
                                <input type="checkbox" class="cg--statistics" />  
                                <div class="checkbox-slider"></div>  
                            </div>

                            <div class="cookie-guardian__section">
                                <b>Marketing</b>
                                <p>${ this.marketingText }</p>
                                <input type="checkbox" class="cg--marketing" />  
                                <div class="checkbox-slider"></div>  
                            </div>
                
                            <div class="cookie-guardian__section">
                                <b>Unclassified</b>
                                <p>${ this.unclassifiedText }</p>
                                <input type="checkbox" class="cg--unclassified" />  
                                <div class="checkbox-slider"></div>  
                            </div>
                        </div>

                        <div class="cookie-guardian__buttons">
                            <button id="cookie-guardian__deny-button" class="cookie-guardian__button">${ this.declineText }</button>
                            <button id="cookie-guardian__accept-button" class="cookie-guardian__button">${ this.acceptText }</button>
                        </div>

                       
                
                </div>
            </div>
            <div class="cookie-guardian__overlay">

            </div>
        </div>`, 1);
    }
    cookieButtonHTML () {
        return toHTML(`<div>
            <div class="cookie-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M247.2 17c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9 64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9l-14.6-82.8c-3.9-22.1-14.6-42.3-30.7-57.9L388.9 57.5c-16.1-15.6-36.6-25.6-58.7-28.7L247.2 17zM208 144a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM144 336a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm224-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
            </div>
        </div>`, 2);
    }

    runInterval () {
        // Check every 30 seconds if decline option is selected and remove all cookies
        setInterval(() => {
            let isAccepted = this.getLocalStorage('cookie-guardian-marketing') ?? false;
            if (!isAccepted) {
        
                if(this.stopAllCookies === true) {
                    // Script to try an disable as many external scripts as possible
                    // This is not a foolproof method
                    this.removeAllCookies();
                    
                    document.querySelectorAll('iframe').forEach(function(iframe) {
                        iframe.parentNode.removeChild(iframe);
                    });
        
                    removeExternalScripts();
        
                    removeScriptsBySource('google-analytics.com');
                    removeScriptsBySource('googletagmanager.com');
                    removeScriptsBySource('facebook.net');
                    removeScriptsBySource('twitter.com');
                    removeScriptsBySource('linkedin.com');
                    removeScriptsBySource('hotjar.com');
                    removeScriptsBySource('matomo.org');
                    removeScriptsBySource('crazyegg.com');
                    removeScriptsBySource('mouseflow.com');
                    removeScriptsBySource('vwo.com');
                    removeScriptsBySource('omniture.com');
                    removeScriptsBySource('quantserve.com');
                    removeScriptsBySource('mixpanel.com');
                    removeScriptsBySource('segment.com');
                    removeScriptsBySource('optimizely.com');
                    removeScriptsBySource('fullstory.com');
                    removeScriptsBySource('heapanalytics.com');
                    removeScriptsBySource('adroll.com');
                    removeScriptsBySource('taboola.com');
                    removeScriptsBySource('outbrain.com');
                    removeScriptsBySource('doubleclick.net');
                    removeScriptsBySource('googlesyndication.com');
                    removeScriptsBySource('bing.com');
                    removeScriptsBySource('yahoo.com');
                    removeScriptsBySource('adform.com');
                    removeScriptsBySource('adgear.com');
                    removeScriptsBySource('googleadservices.com');
                    removeScriptsBySource('finteza.com');
                    removeScriptsBySource('mc.yandex.ru');
                    removeScriptsBySource('hubspot.com');
                    removeScriptsBySource('pardot.com');
                    removeScriptsBySource('leadfeeder.com');
                }
            }
        }, 30000);
    }


};



if (typeof module === 'object' && typeof module.exports === 'object') {
    // Export as CommonJS module
    console.log("Exporting as CommonJS module");
    module.exports = CookieGuardian;
} else {
    // Define global variable in browser environment
    console.log("Defining as global variable in browser environment");
    window.CookieGuardian = CookieGuardian;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CookieGuardian);

// Usage:

// <script src="cookie-guardian/src/cookie-guardian.js"></script>
// <script>
//       const cookieGuardian = new CookieGuardian();
// </script>


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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./_App/App.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.scss */ "./_App/App.scss");
/* harmony import */ var _Blocks_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blocks.scss */ "./_App/Blocks.scss");
/* harmony import */ var swift_swap_src_PageFlow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swift-swap/src/PageFlow.js */ "./node_modules/swift-swap/src/PageFlow.js");
/* harmony import */ var swift_swap_src_PageFlow_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swift_swap_src_PageFlow_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_libraries_EventListenerManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/libraries/EventListenerManager */ "./_App/js/libraries/EventListenerManager.js");
/* harmony import */ var _modules_organisms_organism_00_organism_00__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/_organisms/organism-00/organism-00 */ "./_App/modules/_organisms/organism-00/organism-00.js");
/* harmony import */ var _modules_molecules_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/_molecules/header */ "./_App/modules/_molecules/header.js");
/* harmony import */ var cookie_guardian_src_cookie_guardian_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cookie-guardian/src/cookie-guardian.js */ "./node_modules/cookie-guardian/src/cookie-guardian.js");
/* harmony import */ var _js_libraries_ViewportObserver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/libraries/ViewportObserver */ "./_App/js/libraries/ViewportObserver.js");
/* harmony import */ var _js_libraries_wrapWordsInSpans__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/libraries/wrapWordsInSpans */ "./_App/js/libraries/wrapWordsInSpans.js");
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! masonry-layout */ "./node_modules/masonry-layout/masonry.js");
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(masonry_layout__WEBPACK_IMPORTED_MODULE_9__);











__webpack_require__(/*! fslightbox */ "./node_modules/fslightbox/index.js");

const eventManagerListener = new _js_libraries_EventListenerManager__WEBPACK_IMPORTED_MODULE_3__["default"]();
const state = {}




// document.querySelector('.theme-toggle').addEventListener('click', () => document.body.classList.toggle('dark-theme'));

// if(event.target.href.includes(window.location.origin) && !event.target.href.includes('#')) {
// Components to Render on each page load. Add RenderComponent functions to the Module Classes here.
// Each time the page is loaded these functions are called
let renderList = [() => {
    eventManagerListener.removeAll();

    document.querySelectorAll('a').forEach(link => {
        eventManagerListener.add(link, 'click', (event) => {
            if(link.getAttribute('target') !== '_blank') {
            event.preventDefault();
                document.body.classList.add('page-transition');

                setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'instant'});
                }, 700);
            
                setTimeout(() => {
                    window.history.pushState({}, '', link.href);
                    dynamicPage._makeRequest(link.href); // Make Request and Render
                }, 1000);
            }
        });
    }); 
}];


// Lightbox
renderList = [...renderList, () => {
    if(document.querySelector('.masonry-block-13') === null) return;

    const lightbox = new FsLightbox();
    document.querySelectorAll('.masonry-block-13 img').forEach((elem, index) => {
        lightbox.props.sources.push(elem.getAttribute('src'));
        console.error(lightbox.props.sources);
   
    });

  


    document.querySelectorAll('.masonry-block-13 img').forEach((elem, index) => {
        elem.addEventListener('click', (event) => {
            lightbox.open(index);
        });
    });
}];

// Masonry Layout
renderList = [...renderList, () => {
 // vanilla JS
// init with element
var grid = document.querySelector('.grid');
    var msnry = new (masonry_layout__WEBPACK_IMPORTED_MODULE_9___default())( grid, {
    // options...
        itemSelector: '.grid-item',
        columnWidth: '.--block',
        percentPosition: true
   
    });
    

}];


renderList = [...renderList, () => {
    setTimeout(() => document.body.classList.remove('in-transition'), 100);
}];


// renderList = [...renderList, HtmlModule({  val: state, parent: '.myParent2' }).RenderComponent]; // Works
renderList = [...renderList, (0,_modules_organisms_organism_00_organism_00__WEBPACK_IMPORTED_MODULE_4__["default"])({ val: state, parent: '.organism-00 .function' }).RenderComponent];
renderList = [...renderList, (0,_modules_molecules_header__WEBPACK_IMPORTED_MODULE_5__["default"])({ val: state, parent: 'header'}).RenderComponent];
renderList = [...renderList, () => (0,_js_libraries_wrapWordsInSpans__WEBPACK_IMPORTED_MODULE_8__["default"])('.wrap-in-span') ];
renderList = [...renderList, () => {
    const insideCallback = (elem) => elem.classList.add('in-viewport');
    const outsideCallback = (elem) => elem.classList.remove('in-viewport');
    new _js_libraries_ViewportObserver__WEBPACK_IMPORTED_MODULE_7__["default"]('.vp--observer', {}, insideCallback, outsideCallback);
}];


// Paddle Navigation
renderList = [...renderList, () => {
    document.querySelectorAll('.paddle-container').forEach(paddleContainer => {
        let scrollContainer = paddleContainer.querySelector('.scroll-container');
        let isDown = false;
        let startX;
        let scrollLeft;
    
        // Scroll right button
        paddleContainer.querySelector('.paddlenav--right').addEventListener('click', () => {
            const currentScroll = scrollContainer.scrollLeft;
            const newScroll = currentScroll + (window.innerWidth / 3) + 8;
            scrollContainer.scrollTo({ left: newScroll, behavior: 'smooth' });
        });
    
        // Scroll left button
        paddleContainer.querySelector('.paddlenav--left').addEventListener('click', () => {
            const currentScroll = scrollContainer.scrollLeft;
            const newScroll = currentScroll - (window.innerWidth / 3) + 8;
            scrollContainer.scrollTo({ left: newScroll, behavior: 'smooth' });
        });

          // Prevent image dragging
            scrollContainer.querySelectorAll('img').forEach(img => {
                img.setAttribute('draggable', 'false');
            });
            
        // Mouse events for dragging
        scrollContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            scrollContainer.classList.add('active');
            startX = e.pageX - scrollContainer.offsetLeft;
            scrollLeft = scrollContainer.scrollLeft;
        });
    
        scrollContainer.addEventListener('mouseleave', () => {
            isDown = false;
            scrollContainer.classList.remove('active');
        });
    
        scrollContainer.addEventListener('mouseup', () => {
            isDown = false;
            scrollContainer.classList.remove('active');
        });
    
        scrollContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 2; // Adjust the multiplier to control the scroll speed
            scrollContainer.scrollLeft = scrollLeft - walk;
        });
    });

}];


// Define DynamicPage // Source = The HTML element to grab (OuterHTML) // target = The Placement
// DynamicPage needs to load after any specified data - should technically be the last Function loaded
const dynamicPage = new swift_swap_src_PageFlow_js__WEBPACK_IMPORTED_MODULE_2__.DynamicPage({source: 'DynamicPage', target: 'App'}, renderList, true);
dynamicPage._makeRequest(window.location.href); // Make Request and Render index.html to the page


// Cookie Guardian
const cookieGuardian = new cookie_guardian_src_cookie_guardian_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
    stopAllCookies: true,
    statistics: () => {
        // // Statistics Callback
        // let tagManager = document.createElement('script');
        // tagManager.id = 'google-tag-manager';
        // tagManager.type = 'text/javascript';
        // tagManager.src = 'https://www.googletagmanager.com/gtag/js?id=G-CMGVJF32BG';    
        // document.head.appendChild(tagManager);


        // // Set the script content
        // let analyticsLayer = document.createElement('script');
        // analyticsLayer.textContent = `
        //     window.dataLayer = window.dataLayer || [];
        //     function gtag(){dataLayer.push(arguments);}
        //     gtag('js', new Date());
        //     gtag('config', 'G-CMGVJF32BG');
        // `;

        // // Append the script element to the head of the document
        // document.head.appendChild(analyticsLayer);

        // // Statistics Granted
        // gtag('consent', 'update', {
        //     'ad_storage': 'granted',
        //     'ad_user_data': 'granted',
        //     'ad_personalization': 'granted',
        //     'analytics_storage': 'granted',
        //     'wait_for_update': 500
        // });
    },   
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHlrRUFBeWtFLE1BQU0sVUFBVSxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sV0FBVyxZQUFZLEtBQUssV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sTUFBTSxPQUFPLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFFBQVEsY0FBYyxXQUFXLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLGFBQWEsTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sS0FBSyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxVQUFVLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLFlBQVksTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFlBQVksT0FBTyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFlBQVksV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLFFBQVEsV0FBVyxRQUFRLFFBQVEsV0FBVyxRQUFRLFFBQVEsV0FBVyxRQUFRLFFBQVEsV0FBVyxRQUFRLFFBQVEsV0FBVyxRQUFRLFFBQVEsV0FBVyxTQUFTLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxZQUFZLFlBQVksV0FBVyxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsVUFBVSxRQUFRLEtBQUssT0FBTyxLQUFLLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsTUFBTSxPQUFPLFlBQVksT0FBTyxPQUFPLFVBQVUsVUFBVSxRQUFRLFFBQVEsV0FBVyxRQUFRLFFBQVEsV0FBVyxRQUFRLFFBQVEsV0FBVyxRQUFRLFFBQVEsV0FBVyxXQUFXLFFBQVEsUUFBUSxXQUFXLFFBQVEsUUFBUSxVQUFVLFdBQVcsV0FBVyxTQUFTLFlBQVksT0FBTyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsUUFBUSxRQUFRLFVBQVUsV0FBVyxTQUFTLFFBQVEsVUFBVSxXQUFXLFdBQVcsWUFBWSxZQUFZLFlBQVksWUFBWSxRQUFRLFFBQVEsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFFBQVEsUUFBUSxXQUFXLFVBQVUsUUFBUSxRQUFRLFdBQVcsU0FBUyxRQUFRLFdBQVcsV0FBVyxRQUFRLFFBQVEsS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFFBQVEsS0FBSyxRQUFRLEtBQUssVUFBVSxXQUFXLFFBQVEsUUFBUSxVQUFVLFdBQVcsU0FBUyxTQUFTLFdBQVcsVUFBVSxTQUFTLFNBQVMsV0FBVyxVQUFVLFNBQVMsS0FBSyxRQUFRLFlBQVksT0FBTyxRQUFRLFdBQVcsV0FBVyxRQUFRLFFBQVEsS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFFBQVEsS0FBSyxRQUFRLEtBQUssVUFBVSxXQUFXLFFBQVEsS0FBSyxRQUFRLFdBQVcsUUFBUSxRQUFRLFVBQVUsV0FBVyxTQUFTLFFBQVEsV0FBVyxRQUFRLFFBQVEsVUFBVSxRQUFRLFFBQVEsV0FBVyxRQUFRLFFBQVEsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsUUFBUSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssUUFBUSxLQUFLLFVBQVUsUUFBUSxLQUFLLFFBQVEsS0FBSyxXQUFXLFNBQVMsS0FBSyxRQUFRLE1BQU0sWUFBWSxRQUFRLFNBQVMsVUFBVSxTQUFTLFFBQVEsVUFBVSxXQUFXLFdBQVcsVUFBVSxTQUFTLFNBQVMsVUFBVSxTQUFTLEtBQUssUUFBUSxXQUFXLFVBQVUsUUFBUSxRQUFRLFdBQVcsUUFBUSxRQUFRLFVBQVUsVUFBVSxXQUFXLFdBQVcsU0FBUyxRQUFRLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxhQUFhLE9BQU8sS0FBSyxRQUFRLEtBQUssV0FBVyxVQUFVLFVBQVUsUUFBUSxLQUFLLFFBQVEsV0FBVyxZQUFZLE9BQU8sUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFFBQVEsS0FBSyxXQUFXLFFBQVEsS0FBSyxRQUFRLEtBQUssVUFBVSxTQUFTLE1BQU0sUUFBUSxXQUFXLFlBQVksV0FBVyxPQUFPLFFBQVEsWUFBWSxPQUFPLFFBQVEsV0FBVyxXQUFXLE9BQU8sUUFBUSxXQUFXLFdBQVcsT0FBTyxRQUFRLFVBQVUsV0FBVyxRQUFRLFFBQVEsVUFBVSxXQUFXLFdBQVcsV0FBVyxTQUFTLFFBQVEsWUFBWSxXQUFXLE9BQU8sUUFBUSxZQUFZLE9BQU8sUUFBUSxXQUFXLFdBQVcsT0FBTyxRQUFRLFdBQVcsV0FBVyxPQUFPLFFBQVEsVUFBVSxXQUFXLFdBQVcsV0FBVyxRQUFRLFFBQVEsV0FBVyxPQUFPLFFBQVEsVUFBVSxXQUFXLFdBQVcsV0FBVyxRQUFRLFNBQVMsVUFBVSxTQUFTLFFBQVEsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFFBQVEsUUFBUSxLQUFLLFVBQVUsUUFBUSxLQUFLLFFBQVEsVUFBVSxVQUFVLFNBQVMsUUFBUSxVQUFVLFlBQVksWUFBWSxVQUFVLFFBQVEsUUFBUSxVQUFVLFdBQVcsV0FBVyxTQUFTLFFBQVEsWUFBWSxXQUFXLE9BQU8sUUFBUSxZQUFZLE9BQU8sUUFBUSxXQUFXLFdBQVcsT0FBTyxRQUFRLFdBQVcsV0FBVyxPQUFPLFFBQVEsVUFBVSxXQUFXLFFBQVEsUUFBUSxVQUFVLFdBQVcsV0FBVyxXQUFXLFFBQVEsUUFBUSxXQUFXLE9BQU8sUUFBUSxXQUFXLFdBQVcsVUFBVSxRQUFRLFFBQVEsVUFBVSxRQUFRLFFBQVEsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsUUFBUSxVQUFVLFNBQVMsUUFBUSxZQUFZLFdBQVcsT0FBTyxRQUFRLFlBQVksT0FBTyxRQUFRLFdBQVcsV0FBVyxPQUFPLFFBQVEsV0FBVyxXQUFXLE9BQU8sUUFBUSxVQUFVLFdBQVcsUUFBUSxRQUFRLFVBQVUsV0FBVyxXQUFXLFdBQVcsU0FBUyxRQUFRLFlBQVksV0FBVyxRQUFRLFFBQVEsV0FBVyxRQUFRLFFBQVEsV0FBVyxRQUFRLFFBQVEsVUFBVSxXQUFXLFFBQVEsUUFBUSxXQUFXLFdBQVcsT0FBTyxRQUFRLFdBQVcsVUFBVSxXQUFXLFFBQVEsUUFBUSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsUUFBUSxRQUFRLFdBQVcsVUFBVSxZQUFZLE9BQU8sUUFBUSxXQUFXLFFBQVEsUUFBUSxXQUFXLFFBQVEsUUFBUSxXQUFXLFFBQVEsUUFBUSxXQUFXLFlBQVksWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsUUFBUSxRQUFRLFVBQVUsVUFBVSxRQUFRLFFBQVEsVUFBVSxZQUFZLFdBQVcsWUFBWSxRQUFRLFFBQVEsV0FBVyxRQUFRLFFBQVEsV0FBVyxVQUFVLFFBQVEsUUFBUSxXQUFXLFVBQVUsUUFBUSxRQUFRLFdBQVcsWUFBWSxRQUFRLFFBQVEsWUFBWSxXQUFXLE9BQU8sUUFBUSxZQUFZLE9BQU8sUUFBUSxXQUFXLFdBQVcsT0FBTyxRQUFRLFdBQVcsV0FBVyxPQUFPLFFBQVEsVUFBVSxXQUFXLFFBQVEsUUFBUSxVQUFVLFdBQVcsV0FBVyxXQUFXLFFBQVEsUUFBUSxXQUFXLE9BQU8sUUFBUSxXQUFXLFdBQVcsVUFBVSxRQUFRLFFBQVEsVUFBVSxRQUFRLFFBQVEsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsUUFBUSxZQUFZLFdBQVcsT0FBTyxRQUFRLFdBQVcsWUFBWSxPQUFPLFFBQVEsV0FBVyxXQUFXLE9BQU8sUUFBUSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsUUFBUSxRQUFRLFdBQVcsUUFBUSxRQUFRLFdBQVcsVUFBVSxRQUFRLFFBQVEsV0FBVyxVQUFVLFVBQVUsUUFBUSxRQUFRLFdBQVcsWUFBWSxRQUFRLFFBQVEsV0FBVyxXQUFXLFlBQVksV0FBVyxPQUFPLFFBQVEsVUFBVSxRQUFRLFFBQVEsVUFBVSxVQUFVLFdBQVcsVUFBVSxRQUFRLFFBQVEsV0FBVyxXQUFXLFFBQVEsUUFBUSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxxQkFBcUIsVUFBVSxXQUFXLFdBQVcsUUFBUSxRQUFRLFdBQVcsV0FBVyxXQUFXLFFBQVEsUUFBUSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsUUFBUSxRQUFRLEtBQUssV0FBVyxRQUFRLEtBQUssUUFBUSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsUUFBUSxRQUFRLFVBQVUsU0FBUyxRQUFRLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLE9BQU8sUUFBUSxVQUFVLFdBQVcsUUFBUSxRQUFRLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxRQUFRLFFBQVEsYUFBYSxXQUFXLE9BQU8sUUFBUSxXQUFXLFVBQVUsUUFBUSxRQUFRLFdBQVcsV0FBVyxRQUFRLFFBQVEsS0FBSyxVQUFVLFFBQVEsS0FBSyxRQUFRLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxRQUFRLFFBQVEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFNBQVMsUUFBUSxhQUFhLFdBQVcsT0FBTyxRQUFRLFVBQVUsUUFBUSxRQUFRLFVBQVUsUUFBUSxRQUFRLFdBQVcsVUFBVSxXQUFXLFFBQVEsUUFBUSxXQUFXLFdBQVcsVUFBVSxVQUFVLFNBQVMsT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFVBQVUsUUFBUSxPQUFPLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLEtBQUssV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxRQUFRLE9BQU8sV0FBVyxXQUFXLFFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDJyQ0FBMnJDLFVBQVUsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLFlBQVksWUFBWSxLQUFLLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLE1BQU0sT0FBTyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLGNBQWMsV0FBVyxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxhQUFhLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsVUFBVSxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxZQUFZLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxZQUFZLE9BQU8sT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sS0FBSyxXQUFXLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxZQUFZLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxRQUFRLFdBQVcsUUFBUSxRQUFRLFdBQVcsUUFBUSxRQUFRLFdBQVcsUUFBUSxRQUFRLFdBQVcsUUFBUSxRQUFRLFdBQVcsUUFBUSxRQUFRLFdBQVcsU0FBUyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sWUFBWSxZQUFZLFdBQVcsVUFBVSxPQUFPLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFVBQVUsUUFBUSxLQUFLLE9BQU8sS0FBSyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE1BQU0sT0FBTyxZQUFZLE9BQU8sT0FBTyxVQUFVLFVBQVUsUUFBUSxRQUFRLFdBQVcsUUFBUSxRQUFRLFdBQVcsUUFBUSxRQUFRLFdBQVcsUUFBUSxRQUFRLFdBQVcsV0FBVyxRQUFRLFFBQVEsV0FBVyxRQUFRLFFBQVEsVUFBVSxXQUFXLFdBQVcsU0FBUyxZQUFZLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFFBQVEsUUFBUSxVQUFVLFdBQVcsU0FBUyxRQUFRLFVBQVUsV0FBVyxXQUFXLFlBQVksWUFBWSxZQUFZLFlBQVksUUFBUSxRQUFRLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxRQUFRLFFBQVEsV0FBVyxVQUFVLFFBQVEsUUFBUSxXQUFXLFNBQVMsUUFBUSxXQUFXLFdBQVcsUUFBUSxRQUFRLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxRQUFRLEtBQUssUUFBUSxLQUFLLFVBQVUsV0FBVyxRQUFRLFFBQVEsVUFBVSxXQUFXLFNBQVMsU0FBUyxXQUFXLFVBQVUsU0FBUyxTQUFTLFdBQVcsVUFBVSxTQUFTLEtBQUssUUFBUSxZQUFZLE9BQU8sUUFBUSxXQUFXLFdBQVcsUUFBUSxRQUFRLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxRQUFRLEtBQUssUUFBUSxLQUFLLFVBQVUsV0FBVyxRQUFRLEtBQUssUUFBUSxXQUFXLFFBQVEsUUFBUSxVQUFVLFdBQVcsU0FBUyxRQUFRLFdBQVcsUUFBUSxRQUFRLFVBQVUsUUFBUSxRQUFRLFdBQVcsUUFBUSxRQUFRLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFFBQVEsUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFFBQVEsS0FBSyxVQUFVLFFBQVEsS0FBSyxRQUFRLEtBQUssV0FBVyxTQUFTLEtBQUssUUFBUSxNQUFNLFlBQVksUUFBUSxTQUFTLFVBQVUsU0FBUyxRQUFRLFVBQVUsV0FBVyxXQUFXLFVBQVUsU0FBUyxTQUFTLFVBQVUsU0FBUyxLQUFLLFFBQVEsV0FBVyxVQUFVLFFBQVEsUUFBUSxXQUFXLFFBQVEsUUFBUSxVQUFVLFVBQVUsV0FBVyxXQUFXLFNBQVMsUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsYUFBYSxPQUFPLEtBQUssUUFBUSxLQUFLLFdBQVcsVUFBVSxVQUFVLFFBQVEsS0FBSyxRQUFRLFdBQVcsWUFBWSxPQUFPLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLEtBQUssV0FBVyxRQUFRLEtBQUssUUFBUSxLQUFLLFVBQVUsU0FBUyxNQUFNLFFBQVEsV0FBVyxZQUFZLFdBQVcsT0FBTyxRQUFRLFlBQVksT0FBTyxRQUFRLFdBQVcsV0FBVyxPQUFPLFFBQVEsV0FBVyxXQUFXLE9BQU8sUUFBUSxVQUFVLFdBQVcsUUFBUSxRQUFRLFVBQVUsV0FBVyxXQUFXLFdBQVcsMEdBQTBHLDJDQUEyQyxnbUJBQWdtQixVQUFVLGdCQUFnQiwwQkFBMEIs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHdIQUF3SCxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLGdEQUFnRCw4QkFBOEIsc0JBQXNCLG1EQUFtRCxlQUFlLGdCQUFnQixvQkFBb0Isd0JBQXdCLG1CQUFtQiw4Q0FBOEMsMEJBQTBC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O0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxVQUFVO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFNBQVM7QUFDdEIsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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LGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVcsOEJBQThCO0FBQ3pDLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsOEJBQThCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLDhCQUE4QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcseUJBQXlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxXQUFXLHlCQUF5QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxNQUFNLEdBQUcsUUFBUSxHQUFHLFVBQVU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxNQUFNLEdBQUcsUUFBUSxHQUFHLFVBQVU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsVUFBVTtBQUNyQixhQUFhLGVBQWU7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsOEJBQThCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBLHlDQUF5Qzs7QUFFekM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDejZCRCxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFpTjtBQUNqTjtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDBMQUFPOzs7O0FBSTJKO0FBQ25MLE9BQU8saUVBQWUsMExBQU8sSUFBSSwwTEFBTyxVQUFVLDBMQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QjdFLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9OO0FBQ3BOO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNkxBQU87Ozs7QUFJOEo7QUFDdEwsT0FBTyxpRUFBZSw2TEFBTyxJQUFJLDZMQUFPLFVBQVUsNkxBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCN0UsTUFBcUY7QUFDckYsTUFBMkU7QUFDM0UsTUFBa0Y7QUFDbEYsTUFBcUc7QUFDckcsTUFBOEY7QUFDOUYsTUFBOEY7QUFDOUYsTUFBK0w7QUFDL0w7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIsd0ZBQW1CO0FBQy9DLHdCQUF3QixxR0FBYTtBQUNyQyxpQkFBaUIsMEZBQWE7QUFDOUIsaUJBQWlCLGtGQUFNO0FBQ3ZCLDZCQUE2Qix5RkFBa0I7O0FBRS9DLGFBQWEsNkZBQUcsQ0FBQywrSkFBTzs7OztBQUl5STtBQUNqSyxPQUFPLGlFQUFlLCtKQUFPLElBQUksK0pBQU8sVUFBVSwrSkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2JBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsY0FBYztBQUN0Qyw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCLGdDQUFnQztBQUNoQywwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRDtBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCwrQkFBK0I7QUFDL0I7QUFDQTs7QUFFQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTs7QUFFQTtBQUNBO0FBQ0Esd0ZBQXdGLHVDQUF1QztBQUMvSDs7QUFFQTtBQUNBO0FBQ0Esd0ZBQXdGLHVDQUF1QztBQUMvSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEVBQThFO0FBQzlFLGFBQWE7O0FBRWI7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFdBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGLFNBQVM7QUFDekY7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix5RUFBeUUsR0FBRzs7QUFFMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsR0FBRzs7QUFFWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsYUFBYSxFQUFFLGdEQUFnRCxJQUFJLElBQUksTUFBTSxlQUFlLFVBQVUsWUFBWTtBQUNySTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLE1BQU07QUFDTixtQkFBbUIsYUFBYSxFQUFFLGdEQUFnRCxJQUFJLElBQUksTUFBTSxjQUFjLElBQUksZ0JBQWdCLElBQUksWUFBWTtBQUNsSjtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCOztBQUUxQjs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQyxvQkFBb0IsU0FBUzs7QUFFN0I7QUFDQSxvREFBb0QsUUFBUTs7QUFFNUQ7QUFDQSxpRUFBaUUsSUFBSSxZQUFZLGlCQUFpQixFQUFFLG9CQUFvQjtBQUN4SDs7QUFFQTtBQUNBO0FBQ0EsNkVBQTZFLElBQUk7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxtRUFBbUUsSUFBSTtBQUN2RTs7QUFFQTtBQUNBLGNBQWM7QUFDZCw2RUFBNkUsSUFBSTtBQUNqRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEseUNBQXlDLDBDQUEwQztBQUNuRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDViw4QkFBOEIsV0FBVztBQUN6QztBQUNBOztBQUVBO0FBQ0EsbUJBQW1COztBQUVuQjtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0Esc0JBQXNCOztBQUV0QjtBQUNBLGNBQWM7QUFDZCxvQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7O0FBRUEsZ0JBQWdCLG1CQUFtQjtBQUNuQzs7QUFFQTs7QUFFQTtBQUNBLG9CQUFvQixrQ0FBa0M7QUFDdEQ7QUFDQTtBQUNBLFNBQVMsSUFBSTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQSxZQUFZOzs7QUFHWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvb0JBO0FBQ0E7O0FBRWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSxTQUFTO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtNQUFrTSxnQkFBZ0I7QUFDbE47QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdFQUFnRTtBQUNoRSw4REFBOEQ7QUFDOUQsNERBQTREO0FBQzVELGtFQUFrRTs7QUFFbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hELHdCQUF3QixvQkFBb0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLEtBQUssR0FBRyx1Q0FBdUMsT0FBTztBQUN2RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxtQkFBbUI7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0Msc0JBQXNCO0FBQzVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLHFCQUFxQjtBQUMzRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQyxvQkFBb0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHVCQUF1QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlHQUF5RyxrQkFBa0I7QUFDM0gsMkdBQTJHLGlCQUFpQjtBQUM1SDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZSxjQUFjLEVBQUM7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDdFlBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDRzs7QUFFa0M7QUFDYztBQUNEO0FBQ3JCO0FBQ21CO0FBQ0w7QUFDQTtBQUMxQjtBQUNyQyxtQkFBTyxDQUFDLHNEQUFZOztBQUVwQixpQ0FBaUMsMEVBQW9CO0FBQ3JEOzs7OztBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQyw0QkFBNEI7QUFDbEUsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0MseURBQXlEO0FBQ3pELGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1REFBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLENBQUM7OztBQUdEO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRCw4Q0FBOEMsa0NBQWtDLG9CQUFvQjtBQUNwRyw2QkFBNkIsc0ZBQVUsR0FBRyw4Q0FBOEM7QUFDeEYsNkJBQTZCLHFFQUFNLEdBQUcsNkJBQTZCO0FBQ25FLG1DQUFtQywwRUFBZ0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzRUFBZ0Isb0JBQW9CO0FBQzVDLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxxQ0FBcUM7QUFDNUUsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMscUNBQXFDO0FBQzVFLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTCxDQUFDOzs7QUFHRDtBQUNBO0FBQ0Esd0JBQXdCLG1FQUFXLEVBQUUscUNBQXFDO0FBQzFFLGdEQUFnRDs7O0FBR2hEO0FBQ0EsMkJBQTJCLDhFQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU29waGllIEthdGUgMjAyNC8uL19BcHAvanMvbGlicmFyaWVzL0V2ZW50TGlzdGVuZXJNYW5hZ2VyLmpzIiwid2VicGFjazovL1NvcGhpZSBLYXRlIDIwMjQvLi9fQXBwL2pzL2xpYnJhcmllcy9WaWV3cG9ydE9ic2VydmVyLmpzIiwid2VicGFjazovL1NvcGhpZSBLYXRlIDIwMjQvLi9fQXBwL2pzL2xpYnJhcmllcy9kZUJvdW5jZS5qcyIsIndlYnBhY2s6Ly9Tb3BoaWUgS2F0ZSAyMDI0Ly4vX0FwcC9qcy9saWJyYXJpZXMvd3JhcFdvcmRzSW5TcGFucy5qcyIsIndlYnBhY2s6Ly9Tb3BoaWUgS2F0ZSAyMDI0Ly4vX0FwcC9tb2R1bGVzL19tb2xlY3VsZXMvaGVhZGVyLmpzIiwid2VicGFjazovL1NvcGhpZSBLYXRlIDIwMjQvLi9fQXBwL21vZHVsZXMvX29yZ2FuaXNtcy9vcmdhbmlzbS0wMC9vcmdhbmlzbS0wMC5qcyIsIndlYnBhY2s6Ly9Tb3BoaWUgS2F0ZSAyMDI0Ly4vX0FwcC9BcHAuc2NzcyIsIndlYnBhY2s6Ly9Tb3BoaWUgS2F0ZSAyMDI0Ly4vX0FwcC9CbG9ja3Muc2NzcyIsIndlYnBhY2s6Ly9Tb3BoaWUgS2F0ZSAyMDI0Ly4vbm9kZV9tb2R1bGVzL2Nvb2tpZS1ndWFyZGlhbi9zcmMvY29va2llLWd1YXJkaWFuLnNjc3MiLCJ3ZWJwYWNrOi8vU29waGllIEthdGUgMjAyNC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vU29waGllIEthdGUgMjAyNC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL1NvcGhpZSBLYXRlIDIwMjQvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3Rvci9tYXRjaGVzLXNlbGVjdG9yLmpzIiwid2VicGFjazovL1NvcGhpZSBLYXRlIDIwMjQvLi9ub2RlX21vZHVsZXMvZXYtZW1pdHRlci9ldi1lbWl0dGVyLmpzIiwid2VicGFjazovL1NvcGhpZSBLYXRlIDIwMjQvLi9ub2RlX21vZHVsZXMvZml6enktdWktdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vU29waGllIEthdGUgMjAyNC8uL25vZGVfbW9kdWxlcy9mc2xpZ2h0Ym94L2luZGV4LmpzIiwid2VicGFjazovL1NvcGhpZSBLYXRlIDIwMjQvLi9ub2RlX21vZHVsZXMvZ2V0LXNpemUvZ2V0LXNpemUuanMiLCJ3ZWJwYWNrOi8vU29waGllIEthdGUgMjAyNC8uL25vZGVfbW9kdWxlcy9tYXNvbnJ5LWxheW91dC9tYXNvbnJ5LmpzIiwid2VicGFjazovL1NvcGhpZSBLYXRlIDIwMjQvLi9ub2RlX21vZHVsZXMvb3V0bGF5ZXIvaXRlbS5qcyIsIndlYnBhY2s6Ly9Tb3BoaWUgS2F0ZSAyMDI0Ly4vbm9kZV9tb2R1bGVzL291dGxheWVyL291dGxheWVyLmpzIiwid2VicGFjazovL1NvcGhpZSBLYXRlIDIwMjQvLi9fQXBwL0FwcC5zY3NzP2E5MGMiLCJ3ZWJwYWNrOi8vU29waGllIEthdGUgMjAyNC8uL19BcHAvQmxvY2tzLnNjc3M/MTc5MCIsIndlYnBhY2s6Ly9Tb3BoaWUgS2F0ZSAyMDI0Ly4vbm9kZV9tb2R1bGVzL2Nvb2tpZS1ndWFyZGlhbi9zcmMvY29va2llLWd1YXJkaWFuLnNjc3M/NGFlOCIsIndlYnBhY2s6Ly9Tb3BoaWUgS2F0ZSAyMDI0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL1NvcGhpZSBLYXRlIDIwMjQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1NvcGhpZSBLYXRlIDIwMjQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vU29waGllIEthdGUgMjAyNC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9Tb3BoaWUgS2F0ZSAyMDI0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vU29waGllIEthdGUgMjAyNC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1NvcGhpZSBLYXRlIDIwMjQvLi9ub2RlX21vZHVsZXMvc3dpZnQtc3dhcC9zcmMvUGFnZUZsb3cuanMiLCJ3ZWJwYWNrOi8vU29waGllIEthdGUgMjAyNC8uL25vZGVfbW9kdWxlcy9jb29raWUtZ3VhcmRpYW4vc3JjL2Nvb2tpZS1ndWFyZGlhbi5qcyIsIndlYnBhY2s6Ly9Tb3BoaWUgS2F0ZSAyMDI0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1NvcGhpZSBLYXRlIDIwMjQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vU29waGllIEthdGUgMjAyNC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vU29waGllIEthdGUgMjAyNC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1NvcGhpZSBLYXRlIDIwMjQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Tb3BoaWUgS2F0ZSAyMDI0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9Tb3BoaWUgS2F0ZSAyMDI0Ly4vX0FwcC9BcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRXZlbnRMaXN0ZW5lck1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0gW107XG4gICAgfVxuIFxuICAgIGFkZChlbGVtZW50LCBldmVudFR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGxpc3RlbmVyKTtcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5wdXNoKHsgZWxlbWVudCwgZXZlbnRUeXBlLCBsaXN0ZW5lciB9KTtcbiAgICB9XG4gXG4gICAgcmVtb3ZlQWxsKCkge1xuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZWxlbWVudCwgZXZlbnRUeXBlLCBsaXN0ZW5lciB9KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBsaXN0ZW5lcik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0gW107XG4gICAgfVxuIH1cbiBcbiBleHBvcnQgeyBFdmVudExpc3RlbmVyTWFuYWdlciBhcyBkZWZhdWx0fSIsImNsYXNzIFZpZXdwb3J0T2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBvcHRpb25zID0ge30sIGNhbGxiYWNrSW4sIGNhbGxiYWNrT3V0KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgICAgIHJvb3RNYXJnaW46ICcwcHgnLFxuICAgICAgICAgICAgdGhyZXNob2xkOiAwLjUsXG4gICAgICAgICAgICAuLi5vcHRpb25zXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2FsbGJhY2tJbiA9IGNhbGxiYWNrSW47XG4gICAgICAgIHRoaXMuY2FsbGJhY2tPdXQgPSBjYWxsYmFja091dDtcblxuICAgICAgICB0aGlzLm9ic2VydmVycyA9IEFycmF5LmZyb20odGhpcy5lbGVtZW50cykubWFwKGVsZW1lbnQgPT5cbiAgICAgICAgICAgIG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcih0aGlzLmhhbmRsZUludGVyc2VjdC5iaW5kKHRoaXMpLCB0aGlzLm9wdGlvbnMpXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5vYnNlcnZlKCk7XG4gICAgfVxuXG4gICAgb2JzZXJ2ZSgpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaCgob2JzZXJ2ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudHNbaW5kZXhdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdW5vYnNlcnZlKCkge1xuICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKChvYnNlcnZlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLmVsZW1lbnRzW2luZGV4XSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUludGVyc2VjdChlbnRyaWVzKSB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgdGhpcy5jYWxsYmFja0luKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFja0luKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZyAmJiB0aGlzLmNhbGxiYWNrT3V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFja091dChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVmlld3BvcnRPYnNlcnZlcjtcblxuLy8gVGFyZ2V0IGVsZW1lbnRcbi8vIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueW91ci1lbGVtZW50Jyk7XG5cbi8vIC8vIE9wdGlvbnMgZm9yIEludGVyc2VjdGlvbiBPYnNlcnZlclxuLy8gY29uc3Qgb3B0aW9ucyA9IHtcbi8vICAgICByb290OiBudWxsLCAvLyBVc2Ugdmlld3BvcnQgYXMgcm9vdFxuLy8gICAgIHJvb3RNYXJnaW46ICcwcHgnLCAvLyBObyBtYXJnaW5cbi8vICAgICB0aHJlc2hvbGQ6IDAuNSwgLy8gVHJpZ2dlciBjYWxsYmFjayB3aGVuIDUwJSBvZiB0aGUgZWxlbWVudCBpcyB2aXNpYmxlXG4vLyAgICAgb25jZTogdHJ1ZSAvLyBPbmx5IHRyaWdnZXIgY2FsbGJhY2sgb25jZVxuLy8gfTtcblxuLy8gLy8gQ2FsbGJhY2sgZnVuY3Rpb25cbi8vIGNvbnN0IGNhbGxiYWNrID0gKGVsZW1lbnQpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZygnRWxlbWVudCBpcyBpbiB2aWV3cG9ydDonLCBlbGVtZW50KTtcbi8vICAgICAvLyBBZGQgeW91ciBsb2dpYyBoZXJlXG4vLyB9O1xuXG4vLyAvLyBJbml0aWFsaXplIFZpZXdwb3J0T2JzZXJ2ZXJcblxuLy8gY2FsbGJhY2soKSB7XG5cbi8vIH1cbi8vIGNvbnN0IG9ic2VydmVyID0gbmV3IFZpZXdwb3J0T2JzZXJ2ZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnlvdXItZWxlbWVudCcpLCBudWxsLCBjYWxsYmFjayk7IiwiY29uc3QgZGVib3VuY2UgPSAoZnVuYywgZGVsYXkpID0+IHtcbiAgICBsZXQgdGltZW91dElkO1xuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9O1xufTtcblxuZXhwb3J0IHsgZGVib3VuY2UgYXMgZGVmYXVsdCB9IiwiY29uc3Qgd3JhcFdvcmRzSW5TcGFucyA9IChxdWVyeVNlbGVjdG9yKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5U2VsZWN0b3IpO1xuXG4gICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHdvcmRzID0gZWxlbWVudC50ZXh0Q29udGVudC50cmltKCkuc3BsaXQoL1xccysvKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvbnRlbnQgPSB3b3Jkcy5tYXAod29yZCA9PiBgPHNwYW4+JHt3b3JkfTwvc3Bhbj5gKS5qb2luKCcgJyk7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IG5ld0NvbnRlbnQ7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYE5vIGVsZW1lbnRzIG1hdGNoaW5nIHRoZSBxdWVyeSBzZWxlY3RvciAnJHtxdWVyeVNlbGVjdG9yfScgZm91bmQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzLmxlbmd0aCA+IDAgPyBlbGVtZW50cyA6IG51bGw7XG59O1xuXG5leHBvcnQgeyB3cmFwV29yZHNJblNwYW5zIGFzIGRlZmF1bHQgfTtcblxuXG4vLyBVc2FnZTogd3JhcFdvcmRzSW5TcGFucygneW91ci1lbGVtZW50LWlkJyk7IiwiaW1wb3J0IHsgUGFnZUZsb3cgfSBmcm9tICdzd2lmdC1zd2FwL3NyYy9QYWdlRmxvdy5qcyc7XG5pbXBvcnQgRXZlbnRMaXN0ZW5lck1hbmFnZXIgZnJvbSAnLi4vLi4vanMvbGlicmFyaWVzL0V2ZW50TGlzdGVuZXJNYW5hZ2VyJztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi9qcy9saWJyYXJpZXMvZGVCb3VuY2UnO1xuY29uc3QgaGVhZGVyRXZlbnRMaXN0ZW5lciA9IG5ldyBFdmVudExpc3RlbmVyTWFuYWdlcigpO1xuXG5cblxuLy8gSFRNTCBSZW5kZXJlZCBNb2R1a2VcbmNvbnN0IEhlYWRlciA9ICh7IHZhbCwgcGFyZW50IH0pID0+IHtcbiAgICAvLyBBZGQgTW9yZSBpdGVtcyB0byBTdGF0ZVxuICAgIGNvbnN0IGxvY2FsU3RhdGUgPSB7IFxuICAgICAgIC4uLnZhbCxcbiAgICAgICBuYXZTdGF0ZSA6IGZhbHNlLFxuICAgICAgIG1vYmlsZU5hdlN0YXRlIDogZmFsc2VcbiAgIH07XG5cbiAgIGNvbnN0IGZ1bmN0aW9ucyA9IHtcbiAgICBuYXZTdGF0ZTogKCkgPT4ge1xuICAgICAgICB2YXJpYWJsZXMubmF2U3RhdGUgPyBsb2NhbFNlbGVjdG9ycy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpIDogbG9jYWxTZWxlY3RvcnMucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgdmFyaWFibGVzLm5hdlN0YXRlID8gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdoYXMtc2Nyb2xsZWQnKSA6IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXNjcm9sbGVkJyk7XG4gICAgfVxuICAgfVxuXG5cblxuICAgY29uc3QgbG9jYWxTZWxlY3RvcnMgPSB7XG4gICAgJ3BhcmVudEVsZW1lbnQnOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKVxuICAgfVxuXG4gICAvLyBJbmNsdWRlIFBhZ2VGbG93IERlcGVuZGFuY2llc1xuICAgY29uc3QgW18sIHZhcmlhYmxlc10gPSBuZXcgUGFnZUZsb3cocGFyZW50LCB7IC4uLmxvY2FsU3RhdGV9KTsgLy8gSW5pdGlhbGlzZSBDb21wb25lbnRcblxuICAgLy8gUmVuZGVyIENvbXBvbmVudCAoTG9vcHMgdGhlIEhUTUwgdmFsdWVzKVxuICAgY29uc3QgUmVuZGVyQ29tcG9uZW50ID0gKCkgPT4ge1xuXG4gICAgbGV0IHByZXZTdGF0ZSA9IGZhbHNlO1xuICAgIGxldCBwYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnQpXG4gICBcbiAgICBoZWFkZXJFdmVudExpc3RlbmVyLnJlbW92ZUFsbCgpO1xuXG4gICAgY29uc3QgZG9jdW1lbnRDbGlja0xpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS10b2dnbGUnKTtcbiAgICAgICAgY29uc3QgbmF2TWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtbWFpbicpO1xuICAgICAgICBjb25zdCBjbGlja2VkRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNsaWNrZWQgZWxlbWVudCBpcyBub3QgcGFydCBvZiB0aGUgbWVudSBvciBuYXYtbWFpblxuICAgICAgICBpZiAoY2xpY2tlZEVsZW1lbnQgIT09IG1lbnUgJiYgIW1lbnUuY29udGFpbnMoY2xpY2tlZEVsZW1lbnQpICYmXG4gICAgICAgICAgICBjbGlja2VkRWxlbWVudCAhPT0gbmF2TWFpbiAmJiAhbmF2TWFpbi5jb250YWlucyhjbGlja2VkRWxlbWVudCkpIHtcbiAgICAgICAgICAgIC8vIEhpZGUgdGhlIG1lbnVcbiAgICAgICAgICAgIHZhcmlhYmxlcy5tb2JpbGVOYXZTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbG9jYWxTZWxlY3RvcnMucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICAvLyBBZGQgY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGRvY3VtZW50XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb2N1bWVudENsaWNrTGlzdGVuZXIpO1xuXG4gICAgXG4gICAgaGVhZGVyRXZlbnRMaXN0ZW5lci5hZGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtdG9nZ2xlJyksICdjbGljaycsICgpID0+IHtcbiAgICAgICAgdmFyaWFibGVzLm1vYmlsZU5hdlN0YXRlID0gIXZhcmlhYmxlcy5tb2JpbGVOYXZTdGF0ZTtcbiAgICAgICAgdmFyaWFibGVzLm1vYmlsZU5hdlN0YXRlID8gbG9jYWxTZWxlY3RvcnMucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtZW51LWFjdGl2ZScpIDogbG9jYWxTZWxlY3RvcnMucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWFjdGl2ZScpO1xuICAgIH0pO1xuXG5cbiAgICBoZWFkZXJFdmVudExpc3RlbmVyLmFkZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LW1haW4nKSwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB2YXJpYWJsZXMubW9iaWxlTmF2U3RhdGUgPSAhdmFyaWFibGVzLm1vYmlsZU5hdlN0YXRlO1xuICAgICAgICB2YXJpYWJsZXMubW9iaWxlTmF2U3RhdGUgPyBsb2NhbFNlbGVjdG9ycy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtYWN0aXZlJykgOiBsb2NhbFNlbGVjdG9ycy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtYWN0aXZlJyk7XG4gICAgfSk7XG5cblxuXG5cbiAgICBoZWFkZXJFdmVudExpc3RlbmVyLmFkZCh3aW5kb3csICdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgIHZhcmlhYmxlcy5uYXZTdGF0ZSA9ICh3aW5kb3cuc2Nyb2xsWSA+IDEpID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgLy8gaWYocHJldlN0YXRlICE9PSB2YXJpYWJsZXMubmF2U3RhdGUpIHtcbiAgICAgICAgICAgZnVuY3Rpb25zLm5hdlN0YXRlKCk7XG4gICAgICAgLy8gfVxuXG4gICAgICAgLy8gcHJldlN0YXRlID0gdmFyaWFibGVzLm5hdlN0YXRlO1xuICAgIH0sIDEwMCk7XG5cbiAgICBfLnJlbmRlcigpOyAvLyBGaW5hbCBSZW5kZXIgQ29tcG9uZW50IChGb3JjZXMgcmVuZGVyIHRvIHByb2R1Y2UgdXAgdG8gZGF0ZSBBcHBsaWNhdGlvbiBTdGF0ZSApXG4gICB9O1xuXG4gICByZXR1cm4ge1xuICAgICAgIFJlbmRlckNvbXBvbmVudDogUmVuZGVyQ29tcG9uZW50IC8vIFJldHVybiB0aGUgUmVuZGVyIENvbXBvbmVudFxuICAgfTtcbn07XG5cbmV4cG9ydCB7IEhlYWRlciBhcyBkZWZhdWx0IH0iLCJpbXBvcnQgeyBQYWdlRmxvdywgSFRNTGZsb3csIHV1aWQsIERhdGFzZXRIYW5kbGVyIH0gZnJvbSAnc3dpZnQtc3dhcC9zcmMvUGFnZUZsb3cuanMnO1xuXG5cbi8vIEhUTUwgUmVuZGVyZWQgTW9kdWtlXG5jb25zdCBvcmdhbmlzbTAwID0gKHsgdmFsLCBwYXJlbnQgfSkgPT4ge1xuICAgIC8vIEFkZCBNb3JlIGl0ZW1zIHRvIFN0YXRlXG4gICAgY29uc3QgbG9jYWxTdGF0ZSA9IHsgXG4gICAgICAgLi4udmFsLFxuICAgICAgIHN3aXRjaE5hbWUgOiAnQ2xlYXIgSW5wdXRzMTInLFxuICAgICAgIHN3aXRjaFZhbHVlIDogJydcbiAgIH07XG5cbiAgIC8vIEluY2x1ZGUgUGFnZUZsb3cgRGVwZW5kYW5jaWVzXG4gICBjb25zdCBbXywgdmFyaWFibGVzXSA9IG5ldyBQYWdlRmxvdyhwYXJlbnQsIHsgLi4ubG9jYWxTdGF0ZX0pOyAvLyBJbml0aWFsaXNlIENvbXBvbmVudFxuICAgLy8gSW5pdGlhbGlzZSB0aGUgRGF0YXNldCBFeGFtcGxlOiAgPGRhdGFzZXQgZGF0YS1zZXQ9XCJvYmplY3RcIj48ZGF0YSBkYXRhLWNvbGxlY3Rpb249XCJ2YXJuYW1lXCIgIGRhdGEtdmFsdWU9XCJ2YXJkYXRhXCIgLz48L2RhdGFzZXQ+XG4gICBjb25zdCBkYXRhc2V0ID0gbmV3IERhdGFzZXRIYW5kbGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RhdGFzZXQnKSkucGFyc2VEYXRhKCk7XG5cbiAgIC8vIFR5cGljYWwgRnVuY3Rpb25zXG4gICBjb25zdCBmdW5jdGlvbnMgPSB7XG4gICAgICAgdGVzdENhbGxiYWNrOiAoX3RoaXMpID0+IHsgLy8gdXNlIGNhbGxiYWNrPVwiY2xlYXJDYWxsYmFja1wiIG9uIEhUTUwgRWxlbWVudFxuICAgICAgICB2YXJpYWJsZXMuc3dpdGNoTmFtZSA9ICdkaWZmZXJlbnQnO1xuICAgICAgICByZXR1cm4gdmFyaWFibGVzLnN3aXRjaE5hbWVcbiAgICAgICB9LFxuICAgICAgIGNsZWFyQ2FsbGJhY2s6IChfdGhpcykgPT4geyAvLyB1c2UgcG9zdGNhbGxiYWNrPVwiY2xlYXJDYWxsYmFja1wiIG9uIEhUTUwgRWxlbWVudFxuICAgICAgICAgICByZXR1cm4gJyAnO1xuICAgICAgIH0sXG4gICAgICAgZGVmYXVsdENhbGxiYWNrOiAoX3RoaXMpID0+IHsgLy8gdXNlIGRlZmF1bHRjYWxsYmFjaz1cImRlZmF1bHRDYWxsYmFja1wiIG9uIEhUTUwgRWxlbWVudFxuICAgICAgICAgIHJldHVybiAnMTInO1xuICAgICAgIH1cbiAgIH1cblxuICAgLy8gUmVuZGVyIENvbXBvbmVudCAoTG9vcHMgdGhlIEhUTUwgdmFsdWVzKVxuICAgY29uc3QgUmVuZGVyQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgICAgIGNvbnN0IGlkID0gdXVpZCgpOyAvLyBHZW5lcmF0ZSBVVUlEIGZvciBibG9jayBNb2R1bGUuIEVhY2ggdGltZSBSZW5kZXJDb21wb25lbnQgaXMgY2FsbGVkIHRoZSBJRCBnZXRzIHJlc2V0LlxuICAgICAgIFxuICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocGFyZW50ICsgJyBbaHRtbF0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgIEhUTUxmbG93KF8sIHtpdGVtfSwgZnVuY3Rpb25zLCBpZCk7IC8vIEhUTUxmbG93IHJlbmRlcnMgY29tcG9uZW50c1xuICAgICAgIH0pO1xuXG4gICAgICAgXy5yZW5kZXIoKTsgLy8gRmluYWwgUmVuZGVyIENvbXBvbmVudCAoRm9yY2VzIHJlbmRlciB0byBwcm9kdWNlIHVwIHRvIGRhdGUgQXBwbGljYXRpb24gU3RhdGUgKVxuICAgfTtcblxuICAgcmV0dXJuIHtcbiAgICAgICBSZW5kZXJDb21wb25lbnQ6IFJlbmRlckNvbXBvbmVudCAvLyBSZXR1cm4gdGhlIFJlbmRlciBDb21wb25lbnRcbiAgIH07XG59O1xuXG5leHBvcnQgeyBvcmdhbmlzbTAwIGFzIGRlZmF1bHQgfSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmUrVmlldG5hbStQcm86d2dodEA0MDA7NzAwJmZhbWlseT1QbGF5ZmFpcitEaXNwbGF5JmZhbWlseT1VYnVudHUrU2FucytNb25vOml0YWwsd2dodEAwLDQwMC4uNzAwOzEsNDAwLi43MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuYm9keSAuY29udGVudC13cmFwcGVyIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xufVxuXG4ud3AtYmxvY2sge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCA0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCA2MHB4O1xuICB9XG59XG5cbi8qIEJhc2UgVmFyaWFibGVzICovXG4vKiBDb250YWluZXIgVW5pdCBSZXNwb25zaXZlIEZvbnRzICovXG4uZi0tbGlnaHQge1xuICBmb250LWZhbWlseTogXCJCZSBWaWV0bmFtIFByb1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5mLS1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6IFwiQmUgVmlldG5hbSBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uZi0tc2VtaWJvbGQge1xuICBmb250LWZhbWlseTogXCJCZSBWaWV0bmFtIFByb1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5mLS1ib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQmUgVmlldG5hbSBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4udHQtLXVwcGVyY2FzZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbjp3aGVyZShzdHJvbmcpIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIkJlIFZpZXRuYW0gUHJvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuN2VtO1xufVxuXG4uLS1zdWJ0aXRsZSB7XG4gIGxldHRlci1zcGFjaW5nOiAwLjdlbTtcbn1cblxuLi0taDEsIC4tLWgyLCAuLS1oMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLi0taDEge1xuICBsaW5lLWhlaWdodDogMS40ZW07XG4gIG1hcmdpbjogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG59XG5cbi4tLWgyIHtcbiAgbGluZS1oZWlnaHQ6IDEuMWVtO1xuICBtYXJnaW46IDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNGVtO1xufVxuXG4uLS1oMyB7XG4gIGxpbmUtaGVpZ2h0OiAxLjFlbTtcbiAgbWFyZ2luOiAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDRlbTtcbn1cblxuYSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG46cm9vdCB7XG4gIC0tc206IDU3NnB4O1xuICAtLW1kOiA3NjhweDtcbiAgLS1sZzogOTkycHg7XG4gIC0teGw6IDEyMDBweDtcbiAgLS14eGw6IDE2MDBweDtcbiAgLS14eHhsOiAxOTIwcHg7XG59XG5cbi5jb250YWluZXIge1xuICAtLWNvbHVtbnM6IDEyO1xuICAtLWd1dHRlcjogNDBweDtcbiAgLS1jb250YWluZXI6IDE2ODBweDtcbn1cbi5jb250YWluZXI6bm90KC5mbHVpZCkge1xuICBtYXgtd2lkdGg6IHZhcigtLWNvbnRhaW5lcik7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgLS1jb2x1bW5zOiA2O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTY3cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgLS1jb2x1bW5zOiA0O1xuICB9XG59XG4uY29udGFpbmVyIC5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLWd1dHRlcikgLyAtMik7XG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1ndXR0ZXIpIC8gLTIpO1xufVxuLmNvbnRhaW5lciAuY29sIHtcbiAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tZ3V0dGVyKSAvIDIpO1xuICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tZ3V0dGVyKSAvIDIpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSB7XG4gIC5jb250YWluZXIgLmNvbDpub3QoW2NsYXNzKj1jb2wtXSkge1xuICAgIGZsZXg6IDEgMDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gIC5jb250YWluZXIgLmNvbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5jb2wtMSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogMSAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLTIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDIgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC0zIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAzIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5jb2wtNCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogNCAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLTUge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDUgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC02IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA2IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5jb2wtNyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogNyAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLTgge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDggLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC05IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA5IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5jb2wtMTAge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEwIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5jb2wtMTEge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDExIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5jb2wtMTIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEyIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC0xIHtcbiAgICB3aWR0aDogY2FsYyg1MCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLTIge1xuICAgIHdpZHRoOiBjYWxjKDUwJSAvIHZhcigtLWNvbHVtbnMpICogMiAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5jb2wtMyB7XG4gICAgd2lkdGg6IGNhbGMoNTAlIC8gdmFyKC0tY29sdW1ucykgKiAzIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC00IHtcbiAgICB3aWR0aDogY2FsYyg1MCUgLyB2YXIoLS1jb2x1bW5zKSAqIDQgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLTUge1xuICAgIHdpZHRoOiBjYWxjKDUwJSAvIHZhcigtLWNvbHVtbnMpICogNSAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5jb2wtNiB7XG4gICAgd2lkdGg6IGNhbGMoNTAlIC8gdmFyKC0tY29sdW1ucykgKiA2IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC03IHtcbiAgICB3aWR0aDogY2FsYyg1MCUgLyB2YXIoLS1jb2x1bW5zKSAqIDcgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLTgge1xuICAgIHdpZHRoOiBjYWxjKDUwJSAvIHZhcigtLWNvbHVtbnMpICogOCAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5jb2wtOSB7XG4gICAgd2lkdGg6IGNhbGMoNTAlIC8gdmFyKC0tY29sdW1ucykgKiA5IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC0xMCB7XG4gICAgd2lkdGg6IGNhbGMoNTAlIC8gdmFyKC0tY29sdW1ucykgKiAxMCAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5jb2wtMTEge1xuICAgIHdpZHRoOiBjYWxjKDUwJSAvIHZhcigtLWNvbHVtbnMpICogMTEgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLTEyIHtcbiAgICB3aWR0aDogY2FsYyg1MCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEyIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyIC5jb2wtbGctMSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogMSAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLWxnLTIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDIgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5jb250YWluZXIgLmNvbC1sZy0zIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAzIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyIC5jb2wtbGctNCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogNCAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLWxnLTUge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDUgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5jb250YWluZXIgLmNvbC1sZy02IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA2IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyIC5jb2wtbGctNyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogNyAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLWxnLTgge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDggLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5jb250YWluZXIgLmNvbC1sZy05IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA5IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyIC5jb2wtbGctMTAge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEwIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyIC5jb2wtbGctMTEge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDExIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyIC5jb2wtbGctMTIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEyIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXhsLTEge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAuY29udGFpbmVyIC5jb2wteGwtMiB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogMiAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gIC5jb250YWluZXIgLmNvbC14bC0zIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAzIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXhsLTQge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDQgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAuY29udGFpbmVyIC5jb2wteGwtNSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogNSAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gIC5jb250YWluZXIgLmNvbC14bC02IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA2IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXhsLTcge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDcgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAuY29udGFpbmVyIC5jb2wteGwtOCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogOCAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gIC5jb250YWluZXIgLmNvbC14bC05IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA5IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXhsLTEwIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAxMCAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gIC5jb250YWluZXIgLmNvbC14bC0xMSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogMTEgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAuY29udGFpbmVyIC5jb2wteGwtMTIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEyIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXh4bC0xIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAxIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXh4bC0yIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAyIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXh4bC0zIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAzIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXh4bC00IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA0IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXh4bC01IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA1IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXh4bC02IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA2IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXh4bC03IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA3IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXh4bC04IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA4IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXh4bC05IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA5IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXh4bC0xMCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogMTAgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCkgYW5kIChtYXgtd2lkdGg6IDE5MjBweCkge1xuICAuY29udGFpbmVyIC5jb2wteHhsLTExIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAxMSAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KSBhbmQgKG1heC13aWR0aDogMTkyMHB4KSB7XG4gIC5jb250YWluZXIgLmNvbC14eGwtMTIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEyIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC1tZC0xIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAxIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC1tZC0yIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAyIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC1tZC0zIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAzIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC1tZC00IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA0IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC1tZC01IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA1IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC1tZC02IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA2IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC1tZC03IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA3IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC1tZC04IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA4IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC1tZC05IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA5IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC1tZC0xMCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogMTAgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLW1kLTExIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAxMSAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5jb2wtbWQtMTIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEyIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjdweCkge1xuICAuY29udGFpbmVyIC5jb2wtc20tMSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogMSAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTY3cHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXNtLTIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDIgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gIC5jb250YWluZXIgLmNvbC1zbS0zIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAzIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjdweCkge1xuICAuY29udGFpbmVyIC5jb2wtc20tNCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogNCAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTY3cHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXNtLTUge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDUgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gIC5jb250YWluZXIgLmNvbC1zbS02IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA2IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjdweCkge1xuICAuY29udGFpbmVyIC5jb2wtc20tNyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogNyAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTY3cHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXNtLTgge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDggLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gIC5jb250YWluZXIgLmNvbC1zbS05IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA5IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjdweCkge1xuICAuY29udGFpbmVyIC5jb2wtc20tMTAge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEwIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjdweCkge1xuICAuY29udGFpbmVyIC5jb2wtc20tMTEge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDExIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjdweCkge1xuICAuY29udGFpbmVyIC5jb2wtc20tMTIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEyIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5vZmZzZXQtMSB7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogMSArIHZhcigtLWd1dHRlcikgLyAyKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAub2Zmc2V0LTEge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAvIHZhcigtLWNvbHVtbnMpICogMSArIHZhcigtLWd1dHRlcikgLyAyKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLm9mZnNldC0yIHtcbiAgICBtYXJnaW4tbGVmdDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAyICsgdmFyKC0tZ3V0dGVyKSAvIDIpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5vZmZzZXQtMiB7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC8gdmFyKC0tY29sdW1ucykgKiAyICsgdmFyKC0tZ3V0dGVyKSAvIDIpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAub2Zmc2V0LTMge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDMgKyB2YXIoLS1ndXR0ZXIpIC8gMik7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLm9mZnNldC0zIHtcbiAgICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLyB2YXIoLS1jb2x1bW5zKSAqIDMgKyB2YXIoLS1ndXR0ZXIpIC8gMik7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5vZmZzZXQtNCB7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogNCArIHZhcigtLWd1dHRlcikgLyAyKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAub2Zmc2V0LTQge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAvIHZhcigtLWNvbHVtbnMpICogNCArIHZhcigtLWd1dHRlcikgLyAyKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLm9mZnNldC01IHtcbiAgICBtYXJnaW4tbGVmdDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA1ICsgdmFyKC0tZ3V0dGVyKSAvIDIpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5vZmZzZXQtNSB7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC8gdmFyKC0tY29sdW1ucykgKiA1ICsgdmFyKC0tZ3V0dGVyKSAvIDIpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAub2Zmc2V0LTYge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDYgKyB2YXIoLS1ndXR0ZXIpIC8gMik7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLm9mZnNldC02IHtcbiAgICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLyB2YXIoLS1jb2x1bW5zKSAqIDYgKyB2YXIoLS1ndXR0ZXIpIC8gMik7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5vZmZzZXQtNyB7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogNyArIHZhcigtLWd1dHRlcikgLyAyKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAub2Zmc2V0LTcge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAvIHZhcigtLWNvbHVtbnMpICogNyArIHZhcigtLWd1dHRlcikgLyAyKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLm9mZnNldC04IHtcbiAgICBtYXJnaW4tbGVmdDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA4ICsgdmFyKC0tZ3V0dGVyKSAvIDIpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5vZmZzZXQtOCB7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC8gdmFyKC0tY29sdW1ucykgKiA4ICsgdmFyKC0tZ3V0dGVyKSAvIDIpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAub2Zmc2V0LTkge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDkgKyB2YXIoLS1ndXR0ZXIpIC8gMik7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLm9mZnNldC05IHtcbiAgICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLyB2YXIoLS1jb2x1bW5zKSAqIDkgKyB2YXIoLS1ndXR0ZXIpIC8gMik7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5vZmZzZXQtMTAge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEwICsgdmFyKC0tZ3V0dGVyKSAvIDIpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5vZmZzZXQtMTAge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAvIHZhcigtLWNvbHVtbnMpICogMTAgKyB2YXIoLS1ndXR0ZXIpIC8gMik7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5vZmZzZXQtMTEge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDExICsgdmFyKC0tZ3V0dGVyKSAvIDIpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5vZmZzZXQtMTEge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAvIHZhcigtLWNvbHVtbnMpICogMTEgKyB2YXIoLS1ndXR0ZXIpIC8gMik7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5vZmZzZXQtMTIge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEyICsgdmFyKC0tZ3V0dGVyKSAvIDIpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5vZmZzZXQtMTIge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAvIHZhcigtLWNvbHVtbnMpICogMTIgKyB2YXIoLS1ndXR0ZXIpIC8gMik7XG4gIH1cbn1cblxuLmdyaWQtbGluZXMge1xuICAtLWNvbHVtbnM6IDEyO1xuICAtLWd1dHRlcjogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuZ3JpZC1saW5lcyB7XG4gICAgLS1jb2x1bW5zOiA2O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTY3cHgpIHtcbiAgLmdyaWQtbGluZXMge1xuICAgIC0tY29sdW1uczogNDtcbiAgfVxufVxuLmdyaWQtbGluZXMgc3BhbiB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0tZ3V0dGVyKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAtICh2YXIoLS1ndXR0ZXIpKSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLWd1dHRlcikgLyAyKTtcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLWd1dHRlcikgLyAyKTtcbn1cblxuLyogQmFzZSBmb250IHNpemUgaW4gcGl4ZWxzICgxcmVtID0gMTZweCkgKi9cbi8qIFRoZSB2aWV3cG9ydCB3aWR0aCBmYWN0b3IgKi9cbi5mcy0tMTQsIC5mcy0tMTQgLi0tZnMge1xuICBmb250LXNpemU6IGNsYW1wKDAuNjg3NXJlbSwgMC42ODc1cmVtICsgMC4xNTYyNXZ3LCAwLjg3NXJlbSk7XG59XG5cbi5mcy0tMTUsIC5mcy0tMTUgLi0tZnMge1xuICBmb250LXNpemU6IGNsYW1wKDAuNjg3NXJlbSwgMC42ODc1cmVtICsgMC4xNTYyNXZ3LCAwLjkzNzVyZW0pO1xufVxuXG4uZnMtLTE2LCAuZnMtLTE2IC4tLWZzIHtcbiAgZm9udC1zaXplOiBjbGFtcCgwLjg3NXJlbSwgMC44NzVyZW0gKyAwLjI2MDQxNjY2Njd2dywgMXJlbSk7XG59XG5cbi5mcy0tMzYsIC5mcy0tMzYgLi0tZnMge1xuICBmb250LXNpemU6IGNsYW1wKDEuNjI1cmVtLCAxLjYyNXJlbSArIDAuNTIwODMzMzMzM3Z3LCAyLjI1cmVtKTtcbn1cblxuLmZzLS03MCwgLmZzLS03MCAuLS1mcyB7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMHJlbSwgMHJlbSArIDMuNjQ1ODMzMzMzM3Z3LCA0LjM3NXJlbSk7XG59XG5cbi5mcy0tNDgsIC5mcy0tNDggLi0tZnMge1xuICBmb250LXNpemU6IGNsYW1wKDIuMjVyZW0sIDIuMjVyZW0gKyAyLjV2dywgM3JlbSk7XG59XG5cbi5mcy0tOTYsIC5mcy0tOTYgLi0tZnMge1xuICBmb250LXNpemU6IGNsYW1wKDIuNzVyZW0sIDIuNzVyZW0gKyAyLjI5MTY2NjY2Njd2dywgNnJlbSk7XG59XG5cbi8qIEdsb2JhbCBWYXJpYWJsZXMgKi9cbjpyb290IHtcbiAgLS1jb2xvci1wcmltYXJ5OiAjM0YzRjNGO1xuICAtLWNvbG9yLXNlY29uZGFyeTogI0I3QjdBNDtcbiAgLS1jb2xvci0zOiAjRThFOEU0O1xuICAtLWNvbG9yLTQ6ICNFREVERTk7XG4gIC0tY29sb3ItNTogI0Y1RjVGNDtcbiAgLS1jb2xvci02OiAjRjlDRTY1O1xuICAtLWNvbG9yLTc6ICNENTQ4MjE7XG4gIC0tY29sb3ItODogI0Q3ODRGQztcbiAgLS1jb2xvci13aGl0ZTogI0ZGRkZGRjtcbiAgLS1jb2xvci13aGl0ZS1hbHdheXM6ICNGRkZGRkY7XG4gIC0tY29sb3ItYmxhY2s6ICMwMDAwMDA7XG4gIC0tc206IDU3NnB4O1xuICAtLW1kOiA3NjhweDtcbiAgLS1sZzogOTkycHg7XG4gIC0teGw6IDEyMDBweDtcbiAgLS14eGw6IDE2MDBweDtcbiAgLS14eHhsOiAxOTIwcHg7XG59XG5cbmJvZHkuZGFyay10aGVtZSwgYm9keTpoYXMoLnBhZ2UtZGFyaykge1xuICAtLWNvbG9yLXByaW1hcnk6ICNGMEYwRUY7XG4gIC0tY29sb3Itc2Vjb25kYXJ5OiAjQzVDNUM1O1xuICAtLWNvbG9yLTM6ICNFOEU4RTQ7XG4gIC0tY29sb3ItNDogIzBEMEQwRDtcbiAgLS1jb2xvci01OiAjRkZGRkZGO1xuICAtLWNvbG9yLTY6ICNGOUNFNjU7XG4gIC0tY29sb3ItNzogI0Q1NDgyMTtcbiAgLS1jb2xvci04OiAjRDc4NEZDO1xuICAtLWNvbG9yLXdoaXRlOiAjMDAwMDAwO1xuICAtLWNvbG9yLXdoaXRlLWFsd2F5czogI0ZGRkZGRjtcbiAgLS1jb2xvci1ibGFjazogI0ZGRkZGRjtcbn1cblxuLmMtLXByaW1hcnkge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5jLS1zZWNvbmRhcnkge1xuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLmMtLXNlY29uZGFyeS1hbHQge1xuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWFsdCk7XG59XG5cbi5jLS0zIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLTMpO1xufVxuXG4uYy0tNCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcbn1cblxuLmMtLTUge1xuICBjb2xvcjogdmFyKC0tY29sb3ItNSk7XG59XG5cbi5jLS02IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLTYpO1xufVxuXG4uYy0tNyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci03KTtcbn1cblxuLmMtLTgge1xuICBjb2xvcjogdmFyKC0tY29sb3ItOCk7XG59XG5cbi5jLS13aGl0ZSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG59XG5cbi5jLS13aGl0ZS1hbHQge1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUtYWx0KTtcbn1cblxuLmMtLWJsYWNrIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcbn1cblxuLmJnLS1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5iZy0tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLmJnLS1zZWNvbmRhcnktYWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWFsdCk7XG59XG5cbi5iZy0tMyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTMpO1xufVxuXG4uYmctLTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcbn1cblxuLmJnLS01IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNSk7XG59XG5cbkBrZXlmcmFtZXMgbG9hZGluZ0luIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA4NSUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbG9hZGluZ091dCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgODUlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDk5LjklIHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICB0byB7XG4gICAgd2lkdGg6IDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbG9hZGluZ091dERpdiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICAzMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbiAgOTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDk5LjklIHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICB0byB7XG4gICAgd2lkdGg6IDAlO1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgfVxufVxuLyogQXRvbXMgKi9cbi4tLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cbi4tLWJ1dHRvbjpob3ZlciBzdmcge1xuICBzdHJva2U6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG59XG4uLS1idXR0b24gLmFycm93LWljb24ge1xuICBtYXJnaW4tdG9wOiAtNHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgcm90YXRlOiAtOTBkZWc7XG59XG5cbi5hcnJvdy1pY29uIHtcbiAgc3Ryb2tlOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmhkci1sb2dvIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2lnbmF0dXJlIHtcbiAgZmlsbDogdmFyKC0tY29sb3ItYmxhY2spO1xuICBzdHJva2U6IHZhcigtLWNvbG9yLWJsYWNrKTtcbn1cblxuLyogTW9sZWN1bGVzICovXG4uaW1hZ2UtdGlsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvdHRvbTogLTI1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiBjbGFtcCgyLjE4NzVyZW0sIDMuNjQ1ODMzMzMzM3Z3LCA0LjM3NXJlbSk7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci00KTtcbiAgYm9yZGVyOiA3cHggc29saWQgdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbiAgei1pbmRleDogMztcbn1cbi5pbWFnZS10aWxlIC5pbm5lciB7XG4gIHdpZHRoOiBjbGFtcCg1LjY4NzVyZW0sIDkuNDc5MTY2NjY2N3Z3LCAxMS4zNzVyZW0pO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gIGJvcmRlci1yYWRpdXM6IGNsYW1wKDJyZW0sIDMuMzMzMzMzMzMzM3Z3LCA0cmVtKTtcbiAgZGlzcGxheTogZmxleDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5pbWFnZS10aWxlIC5pbm5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uc2tpbGwtaXRlbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgbWFyZ2luLWJvdHRvbTogY2xhbXAoMC44NzVyZW0sIDEuMDQxNjY2NjY2N3Z3LCAxLjI1cmVtKTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDg5OXB4KSB7XG4gIC5za2lsbC1pdGVtIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuLnNraWxsLWl0ZW0gLi0tbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIHtcbiAgLnNraWxsLWl0ZW0gLi0tbGVmdCB7XG4gICAgd2lkdGg6IGNsYW1wKDguNzVyZW0sIDEwLjQxNjY2NjY2Njd2dywgMTIuNXJlbSk7XG4gIH1cbn1cbi5za2lsbC1pdGVtIC4tLWxlZnQgc3Ryb25nLCAuc2tpbGwtaXRlbSAuLS1sZWZ0IHNwYW4ge1xuICBsaW5lLWhlaWdodDogMS4xZW07XG59XG4uc2tpbGwtaXRlbSAuLS1yaWdodCB7XG4gIHBhZGRpbmctdG9wOiBjbGFtcCgwLjI2MjVyZW0sIDAuMzEyNXZ3LCAwLjM3NXJlbSk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA4OTlweCkge1xuICAuc2tpbGwtaXRlbSAuLS1yaWdodCB7XG4gICAgcGFkZGluZy10b3A6IGNsYW1wKDAuODc1cmVtLCAxLjA0MTY2NjY2Njd2dywgMS4yNXJlbSk7XG4gICAgcGFkZGluZy1ib3R0b206IGNsYW1wKDAuODc1cmVtLCAxLjA0MTY2NjY2Njd2dywgMS4yNXJlbSk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjZweCkge1xuICAuc2tpbGwtaXRlbSAuLS1yaWdodCB7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIH1cbn1cbi5za2lsbC1pdGVtIC4tLXByb2dyZXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiBjbGFtcCgwLjM1cmVtLCAwLjQxNjY2NjY2Njd2dywgMC41cmVtKTtcbiAgZmxleDogMCAwIGF1dG87XG59XG4uc2tpbGwtaXRlbSAuLS1wcm9ncmVzcyBsaSB7XG4gIGhlaWdodDogOHB4O1xuICB3aWR0aDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA0LjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG4uc2tpbGwtaXRlbSAuLS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzPVwiMVwiXSBsaTpudGgtY2hpbGQoMW4rMikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufVxuLnNraWxsLWl0ZW0gLi0tcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcz1cIjJcIl0gbGk6bnRoLWNoaWxkKDFuKzMpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5za2lsbC1pdGVtIC4tLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3M9XCIzXCJdIGxpOm50aC1jaGlsZCgxbis0KSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG59XG4uc2tpbGwtaXRlbSAuLS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzPVwiNFwiXSBsaTpudGgtY2hpbGQoMW4rNSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufVxuLnNraWxsLWl0ZW0gLi0tcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcz1cIjVcIl0gbGk6bnRoLWNoaWxkKDFuKzYpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5za2lsbC1pdGVtIC4tLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3M9XCI2XCJdIGxpOm50aC1jaGlsZCgxbis3KSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMDBweCk7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhlYWRlciAuaGVhZGVyLS1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbn1cbi5oZWFkZXIgLi0tbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbn1cbi5oZWFkZXIgLi0tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiBjbGFtcCg2LjQzMTI1cmVtLCA3LjY1NjI1dncsIDkuMTg3NXJlbSk7XG59XG4uaGVhZGVyIC4tLXJpZ2h0IC5uYXZpY29uIHtcbiAgdHJhbnNpdGlvbjogMzAwbXMgbGluZWFyIHRvcDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM4cHg7XG4gIHJpZ2h0OiAzMnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MjhweCkge1xuICAuaGVhZGVyIC4tLXJpZ2h0IC4tLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5oZWFkZXIgLi0tcmlnaHQgLi0tYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTBweDtcbiAgfVxuICAuaGVhZGVyIC4tLXJpZ2h0IC5uYXZpY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uaGVhZGVyIHN2ZyB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuLmhlYWRlciAubG9nbyB7XG4gIHdpZHRoOiBjbGFtcCg2LjQzMTI1cmVtLCA3LjY1NjI1dncsIDkuMTg3NXJlbSk7XG4gIHRyYW5zaXRpb246IDMwMG1zIGxpbmVhciB3aWR0aDtcbiAgYXNwZWN0LXJhdGlvOiAxNzUvMTI5O1xuICBoZWlnaHQ6IHVuc2V0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5oZWFkZXIgLm5hdi1tYWluIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICByaWdodDogLTMwMHB4O1xuICAgIHRyYW5zaXRpb246IDEwMG1zIGxpbmVhciByaWdodDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gICAgei1pbmRleDogMjA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICAuaGVhZGVyOmFmdGVyIHtcbiAgICB6LWluZGV4OiAxMTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICByaWdodDogLTEwMHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTMpO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIHRyYW5zaXRpb246IDEwMG1zIGxpbmVhciByaWdodDtcbiAgfVxuICAuaGVhZGVyLm1lbnUtYWN0aXZlIC5uYXYtbWFpbiB7XG4gICAgcmlnaHQ6IDBweDtcbiAgfVxuICAuaGVhZGVyLm1lbnUtYWN0aXZlOmFmdGVyIHtcbiAgICByaWdodDogMDtcbiAgfVxuICAuaGVhZGVyIC5uYXYtbWFpbiB1bCB7XG4gICAgcGFkZGluZzogMCA0MHB4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbiAgLmhlYWRlciAubmF2LW1haW4gdWwgbGkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci0zKTtcbiAgfVxuICAuaGVhZGVyIC5uYXYtbWFpbiB1bCBhIHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaGVhZGVyIC5uYXYtbWFpbiB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5oZWFkZXIgLm5hdi1tYWluIHVsIGxpIHtcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgfVxuICAuaGVhZGVyIC5uYXYtbWFpbiB1bCBhIHtcbiAgICB0ZXh0LXdyYXA6IG5vd3JhcDtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgfVxufVxuXG4uaGFzLXNjcm9sbGVkIC5oZWFkZXIgLmxvZ28ge1xuICB3aWR0aDogY2xhbXAoNC4ycmVtLCA1dncsIDZyZW0pO1xufVxuLmhhcy1zY3JvbGxlZCAuaGVhZGVyIC5uYXZpY29uIHtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMzJweDtcbn1cblxuZm9vdGVyI2Zvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xufVxuZm9vdGVyI2Zvb3RlciAuLS1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5mb290ZXIjZm9vdGVyIC4tLXRvcCB7XG4gIHBhZGRpbmctdG9wOiAyMDBweDtcbn1cbmZvb3RlciNmb290ZXIgLi0tYm90dG9tIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbmZvb3RlciNmb290ZXIgLi0tc3ZnIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbmZvb3RlciNmb290ZXIgLi0tc3ZnIHN2ZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZmlsbDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIHN0cm9rZTogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cbi8qIE9yZ2FuaXNtcyAqL1xuLm9yZ2FuaXNtLTAwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDIwcHg7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG91ci1ncmF5LTMpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLm9yZ2FuaXNtLTAwLmxvYWRlci1jb250ZW50OmhhcygubG9hZGVyKSA+ICo6bm90KC5sb2FkZXIpIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nSW4gMnMgbm9ybWFsIGZvcndhcmRzIGVhc2UtaW4tb3V0O1xufVxuLm9yZ2FuaXNtLTAwIC5sb2FkZXIge1xuICB6LWluZGV4OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDBweDtcbiAgbGVmdDogNDBweDtcbiAgYm90dG9tOiA0MHB4O1xuICByaWdodDogNDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5vcmdhbmlzbS0wMCAubG9hZGVyIGRpdiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDIyMCwgMjE5LCAyMzApIDAlLCByZ2IoMjMwLCAyMzIsIDIzOCkgMTQlLCByZ2IoMjM0LCAyMzgsIDI0MCkgMTAwJSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG91ci1ncmF5LTgpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm9yZ2FuaXNtLTAwIC5sb2FkZXIge1xuICBhbmltYXRpb246IGxvYWRpbmdPdXQgMnMgbm9ybWFsIGZvcndhcmRzIGVhc2UtaW4tb3V0O1xuICBvcGFjaXR5OiAxO1xufVxuLm9yZ2FuaXNtLTAwIC5sb2FkZXIgZGl2IHtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nT3V0RGl2IDJzIG5vcm1hbCBmb3J3YXJkcyBlYXNlLWluLW91dDtcbn1cblxuLmhlYWRlci1ibG9jay0wMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5oZWFkZXItYmxvY2stMDEge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogODAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5oZWFkZXItYmxvY2stMDEgLnJvdyA+IC5jb2w6Zmlyc3QtY2hpbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmhlYWRlci1ibG9jay0wMSAucm93ID4gLmNvbDpmaXJzdC1jaGlsZCBoMSB7XG4gICAgbGVmdDogNjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmhlYWRlci1ibG9jay0wMSAucm93ID4gLmNvbDpmaXJzdC1jaGlsZCBoMSBzcGFuOm50aC1vZi10eXBlKDEpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogLTEwMHB4O1xuICB9XG4gIC5oZWFkZXItYmxvY2stMDEgLnJvdyA+IC5jb2w6Zmlyc3QtY2hpbGQgaDEgc3BhbjpudGgtb2YtdHlwZSgyKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0xMDBweDtcbiAgfVxufVxuLmhlYWRlci1ibG9jay0wMSAuLS1sZWZ0IHtcbiAgbWF4LXdpZHRoOiBjbGFtcCgyMi4zNDM3NXJlbSwgMjguNjQ1ODMzMzMzM3Z3LCAzNC4zNzVyZW0pO1xufVxuLmhlYWRlci1ibG9jay0wMSAuLS1sZWZ0IC4tLXBhZ2UtZG93biB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaGVhZGVyLWJsb2NrLTAxIC4tLWxlZnQgLi0tcGFnZS1kb3duIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5oZWFkZXItYmxvY2stMDEgLi0tbGVmdCAuLS1wYWdlLWRvd24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLmhlYWRlci1ibG9jay0wMSAuLS1sZWZ0IC4tLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG59XG4uaGVhZGVyLWJsb2NrLTAxIC4tLWxlZnQgLi0tdGl0bGUgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG4uaGVhZGVyLWJsb2NrLTAxIC4tLWJ1dHRvbiB7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuLmhlYWRlci1ibG9jay0wMSAuLS1yaWdodCwgLmhlYWRlci1ibG9jay0wMSAuLS1yaWdodCAuLS1ncmlkIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmhlYWRlci1ibG9jay0wMSAuLS1yaWdodCAuLS1saW5rIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhlYWRlci1ibG9jay0wMSAuLS1yaWdodCAuLS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmhlYWRlci1ibG9jay0wMSAuLS1yaWdodCAuLS1ncmlkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKDIuNjI1cmVtLCAzLjEyNXZ3LCAzLjc1cmVtKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSB7XG4gIC5oZWFkZXItYmxvY2stMDEgLi0tcmlnaHQgLi0tZ3JpZCB7XG4gICAgZ2FwOiAxMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuaGVhZGVyLWJsb2NrLTAxIC4tLXJpZ2h0IC4tLWdyaWQgYTpudGgtY2hpbGQoMikge1xuICAgIHBhZGRpbmctdG9wOiAyMDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gIC5oZWFkZXItYmxvY2stMDEgLi0tcmlnaHQgLi0tZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbiAgLmhlYWRlci1ibG9jay0wMSAuLS1yaWdodCAuLS1ncmlkIGE6bnRoLWNoaWxkKDIpIC4tLWltYWdlIHtcbiAgICBvcmRlcjogMjtcbiAgfVxuICAuaGVhZGVyLWJsb2NrLTAxIC4tLXJpZ2h0IC4tLWdyaWQgLi0tbGluayB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gIH1cbiAgLmhlYWRlci1ibG9jay0wMSAuLS1yaWdodCAuLS1ncmlkIC4tLWxpbmsgLi0taW1hZ2UgLi0tbnVtYmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uaGVhZGVyLWJsb2NrLTAxIC4tLXJpZ2h0IC4tLWgyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaGVhZGVyLWJsb2NrLTAxIC4tLXJpZ2h0IC4tLWltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWRlci1ibG9jay0wMSAuLS1yaWdodCAuLS1pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxNjBweDtcbiAgYm94LXNoYWRvdzogMnZ3IDJ2dyAwcHggdmFyKC0tY29sb3ItNCk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIHtcbiAgLmhlYWRlci1ibG9jay0wMSAuLS1yaWdodCAuLS1pbWFnZTphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3R0b206IGNsYW1wKC0yLjYyNXJlbSwgLTMuMTI1dncsIC0zLjc1cmVtKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSB7XG4gIC5oZWFkZXItYmxvY2stMDEgLi0tcmlnaHQgLi0tbnVtYmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtNSU7XG4gICAgcmlnaHQ6IC0xOCU7XG4gIH1cbn1cbi5oZWFkZXItYmxvY2stMDEgLi0tcmlnaHQgLi0tc3VidGl0bGUge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogY2xhbXAoMC40Mzc1cmVtLCAwLjUyMDgzMzMzMzN2dywgMC42MjVyZW0pO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSB7XG4gIC5oZWFkZXItYmxvY2stMDEgLi0tcmlnaHQgLi0tc3VidGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiBjbGFtcCgzLjA2MjVyZW0sIDMuNjQ1ODMzMzMzM3Z3LCA0LjM3NXJlbSk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjdweCkge1xuICAuaGVhZGVyLWJsb2NrLTAxIC4tLXJpZ2h0IC4tLXRpdGxlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSB7XG4gIC5oZWFkZXItYmxvY2stMDEgLi0tcmlnaHQgLi0tZ3JvdXAgLi0tbnVtYmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5pbi1mb2N1cy1ibG9jay0wMiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xuICBwYWRkaW5nLXRvcDogY2xhbXAoNS4yNXJlbSwgNi4yNXZ3LCA3LjVyZW0pO1xuICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoMi42MjVyZW0sIDMuMTI1dncsIDMuNzVyZW0pO1xufVxuLmluLWZvY3VzLWJsb2NrLTAyIC4tLXN1YnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogY2xhbXAoMC44NzVyZW0sIDEuMDQxNjY2NjY2N3Z3LCAxLjI1cmVtKTtcbn1cbi5pbi1mb2N1cy1ibG9jay0wMiAuLS10aXRsZSB7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNsYW1wKDAuODc1cmVtLCAxLjA0MTY2NjY2Njd2dywgMS4yNXJlbSk7XG59XG4uaW4tZm9jdXMtYmxvY2stMDIgLi0tdGV4dCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNsYW1wKDAuODc1cmVtLCAxLjA0MTY2NjY2Njd2dywgMS4yNXJlbSk7XG59XG4uaW4tZm9jdXMtYmxvY2stMDIgLi0tc2lnbmF0dXJlIHN2ZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZmlsbDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG4uaW4tZm9jdXMtYmxvY2stMDIgLi0tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYXJ0aWNsZXMtYmxvY2stMDMge1xuICBwYWRkaW5nLXRvcDogY2xhbXAoNS4yNXJlbSwgNi4yNXZ3LCA3LjVyZW0pO1xuICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoMi42MjVyZW0sIDMuMTI1dncsIDMuNzVyZW0pO1xufVxuLmFydGljbGVzLWJsb2NrLTAzIC4tLXN1YnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogY2xhbXAoMC44NzVyZW0sIDEuMDQxNjY2NjY2N3Z3LCAxLjI1cmVtKTtcbn1cbi5hcnRpY2xlcy1ibG9jay0wMyAuLS10aXRsZSB7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNsYW1wKDAuODc1cmVtLCAxLjA0MTY2NjY2Njd2dywgMS4yNXJlbSk7XG59XG4uYXJ0aWNsZXMtYmxvY2stMDMgLi0tdGV4dCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNsYW1wKDAuODc1cmVtLCAxLjA0MTY2NjY2Njd2dywgMS4yNXJlbSk7XG59XG4uYXJ0aWNsZXMtYmxvY2stMDMgLi0tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFydGljbGVzLWJsb2NrLTAzIC4tLWNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoMy41cmVtLCA0LjE2NjY2NjY2Njd2dywgNXJlbSk7XG59XG4uYXJ0aWNsZXMtYmxvY2stMDMgLi0tbGlzdGluZyAuLS1saW5rIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5hcnRpY2xlcy1ibG9jay0wMyAuLS1saXN0aW5nIC4tLWxpbms6aG92ZXIgLi0tb3ZlcmxheSB7XG4gIG9wYWNpdHk6IDE7XG59XG4uYXJ0aWNsZXMtYmxvY2stMDMgLi0tbGlzdGluZyAuLS1vdmVybGF5IHtcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1vdXQgYWxsO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZS1hbHdheXMpO1xuICBwYWRkaW5nOiBjbGFtcCgxLjMxMjVyZW0sIDEuNTYyNXZ3LCAxLjg3NXJlbSk7XG4gIHBhZGRpbmctYm90dG9tOiBjbGFtcCgwLjg3NXJlbSwgMS4wNDE2NjY2NjY3dncsIDEuMjVyZW0pO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwLjgpIDAlLCByZ2JhKDAsIDAsIDAsIDApIDEwMCUpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuQG1lZGlhIChwb2ludGVyOiBjb2Fyc2UpIHtcbiAgLmFydGljbGVzLWJsb2NrLTAzIC4tLWxpc3RpbmcgLi0tb3ZlcmxheSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmFydGljbGVzLWJsb2NrLTAzIC4tLWxpc3RpbmcgLi0tb3ZlcmxheSBoMywgLmFydGljbGVzLWJsb2NrLTAzIC4tLWxpc3RpbmcgLi0tb3ZlcmxheSBwIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uYXJ0aWNsZXMtYmxvY2stMDMgLi0tbGlzdGluZyAuLS1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNsYW1wKDMwLjYyNXJlbSwgMzYuNDU4MzMzMzMzM3Z3LCA0My43NXJlbSk7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5hcnRpY2xlcy1ibG9jay0wMyAuLS1lbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLnNtYWxsLXBhY2thZ2UtYmxvY2stMDQge1xuICBwYWRkaW5nLXRvcDogY2xhbXAoNS4yNXJlbSwgNi4yNXZ3LCA3LjVyZW0pO1xuICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoMy41cmVtLCA0LjE2NjY2NjY2Njd2dywgNXJlbSk7XG59XG4uc21hbGwtcGFja2FnZS1ibG9jay0wNCAuLS1zdWJ0aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IGNsYW1wKDAuODc1cmVtLCAxLjA0MTY2NjY2Njd2dywgMS4yNXJlbSk7XG59XG4uc21hbGwtcGFja2FnZS1ibG9jay0wNCAuLS10aXRsZSB7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNsYW1wKDAuODc1cmVtLCAxLjA0MTY2NjY2Njd2dywgMS4yNXJlbSk7XG59XG4uc21hbGwtcGFja2FnZS1ibG9jay0wNCAuLS10ZXh0IHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luLWJvdHRvbTogY2xhbXAoMC44NzVyZW0sIDEuMDQxNjY2NjY2N3Z3LCAxLjI1cmVtKTtcbn1cbi5zbWFsbC1wYWNrYWdlLWJsb2NrLTA0IC4tLXNpZ25hdHVyZSBzdmcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGZpbGw6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuLnNtYWxsLXBhY2thZ2UtYmxvY2stMDQgLi0tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNtYWxsLXBhY2thZ2UtYmxvY2stMDQgLi0taW5uZXIge1xuICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoMS43NXJlbSwgMi4wODMzMzMzMzMzdncsIDIuNXJlbSk7XG59XG4uc21hbGwtcGFja2FnZS1ibG9jay0wNCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDAgMTRweCAyMHB4O1xuICBtYXJnaW46IDA7XG59XG4uc21hbGwtcGFja2FnZS1ibG9jay0wNCB1bCBsaSB7XG4gIG1hcmdpbjogNHB4IDA7XG59XG4uc21hbGwtcGFja2FnZS1ibG9jay0wNCB1bCBsaTpiZWZvcmUge1xuICBjb250ZW50OiBcIuKAolwiO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDFlbTtcbiAgbWFyZ2luLWxlZnQ6IC0xZW07XG59XG5cbi5pbWFnZS1ibG9jay0wNSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxpbmstYmxvY2stMDYge1xuICBwYWRkaW5nLXRvcDogY2xhbXAoNS4yNXJlbSwgNi4yNXZ3LCA3LjVyZW0pO1xuICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoMi42MjVyZW0sIDMuMTI1dncsIDMuNzVyZW0pO1xufVxuLmxpbmstYmxvY2stMDYgLi0tc3VidGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiBjbGFtcCgwLjg3NXJlbSwgMS4wNDE2NjY2NjY3dncsIDEuMjVyZW0pO1xufVxuLmxpbmstYmxvY2stMDYgLi0tdGl0bGUge1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW4tYm90dG9tOiBjbGFtcCgwLjg3NXJlbSwgMS4wNDE2NjY2NjY3dncsIDEuMjVyZW0pO1xufVxuLmxpbmstYmxvY2stMDYgLi0tdGV4dCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNsYW1wKDAuODc1cmVtLCAxLjA0MTY2NjY2Njd2dywgMS4yNXJlbSk7XG59XG4ubGluay1ibG9jay0wNiAuLS1zaWduYXR1cmUgc3ZnIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBmaWxsOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cbi5saW5rLWJsb2NrLTA2IC4tLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBhZ2UtdGl0bGUtYmxvY2stMDcgLi0tdG9wIHtcbiAgcGFkZGluZy10b3A6IGNsYW1wKDUuMjVyZW0sIDYuMjV2dywgNy41cmVtKTtcbiAgcGFkZGluZy1ib3R0b206IGNsYW1wKDUuMjVyZW0sIDYuMjV2dywgNy41cmVtKTtcbn1cblxuLmxhcmdlLWNvbnRlbnQtYmxvY2stMDguZmxpcCAucm93IHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuLmxhcmdlLWNvbnRlbnQtYmxvY2stMDggLi0tdGl0bGUge1xuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5sYXJnZS1jb250ZW50LWJsb2NrLTA4IC4tLXRpdGxlIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuLmxhcmdlLWNvbnRlbnQtYmxvY2stMDggLi0tdGV4dCB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNsYW1wKDEuNzVyZW0sIDIuMDgzMzMzMzMzM3Z3LCAyLjVyZW0pO1xufVxuLmxhcmdlLWNvbnRlbnQtYmxvY2stMDggLi0taDEge1xuICBsaW5lLWhlaWdodDogMS40ZW07XG4gIG1hcmdpbjogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG59XG4ubGFyZ2UtY29udGVudC1ibG9jay0wOCAuLS1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBhc3BlY3QtcmF0aW86IDk4Mi8xNDAwO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuLmxhcmdlLWNvbnRlbnQtYmxvY2stMDggLi0tbGVmdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogNjtcbiAgcGFkZGluZy10b3A6IGNsYW1wKDEuNzVyZW0sIDIuMDgzMzMzMzMzM3Z3LCAyLjVyZW0pO1xufVxuLmxhcmdlLWNvbnRlbnQtYmxvY2stMDggLi0tanVzdGlmeSB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5sYXJnZS1jb250ZW50LWJsb2NrLTA4IC4tLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sYXJnZS1jb250ZW50LWJsb2NrLTA4IC4tLXJpZ2h0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxhcmdlLWNvbnRlbnQtYmxvY2stMDggLi0tc3F1YXJlIHtcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gIHdpZHRoOiBjbGFtcCgyMi41cmVtLCA0Ni44NzV2dywgNTYuMjVyZW0pO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xuICB0b3A6IDQwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICByaWdodDogNTAlO1xufVxuLmxhcmdlLWNvbnRlbnQtYmxvY2stMDguZmxpcCAuLS1zcXVhcmUge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogNTAlO1xufVxuLmxhcmdlLWNvbnRlbnQtYmxvY2stMDggLi0tdGVzdGltb25pYWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IGNsYW1wKDQuMzc1cmVtLCA1LjIwODMzMzMzMzN2dywgNi4yNXJlbSk7XG4gIHBhZGRpbmctYm90dG9tOiBjbGFtcCg0LjM3NXJlbSwgNS4yMDgzMzMzMzMzdncsIDYuMjVyZW0pO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubGFyZ2UtY29udGVudC1ibG9jay0wOCAuLS10ZXN0aW1vbmlhbCBzdmcge1xuICBmaWxsOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cbi5sYXJnZS1jb250ZW50LWJsb2NrLTA4IC4tLXRlc3RpbW9uaWFsIC5xdW90ZS1sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xufVxuLmxhcmdlLWNvbnRlbnQtYmxvY2stMDggLi0tdGVzdGltb25pYWwgLnF1b3RlLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cbi5sYXJnZS1jb250ZW50LWJsb2NrLTA4IC4tLXRlc3RpbW9uaWFsIC4tLXN1YnRpdGxlLCAubGFyZ2UtY29udGVudC1ibG9jay0wOCAuLS10ZXN0aW1vbmlhbCAuLS1xdW90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1ib3R0b206IGNsYW1wKDAuODc1cmVtLCAxLjA0MTY2NjY2Njd2dywgMS4yNXJlbSk7XG59XG5cbi5sYXJnZS1wYWNrYWdlLWJsb2NrLTA5IHtcbiAgcGFkZGluZy10b3A6IGNsYW1wKDUuMjVyZW0sIDYuMjV2dywgNy41cmVtKTtcbiAgcGFkZGluZy1ib3R0b206IGNsYW1wKDMuNXJlbSwgNC4xNjY2NjY2NjY3dncsIDVyZW0pO1xufVxuLmxhcmdlLXBhY2thZ2UtYmxvY2stMDkgLi0tc3VidGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiBjbGFtcCgwLjg3NXJlbSwgMS4wNDE2NjY2NjY3dncsIDEuMjVyZW0pO1xufVxuLmxhcmdlLXBhY2thZ2UtYmxvY2stMDkgLi0tdGl0bGUge1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW4tYm90dG9tOiBjbGFtcCgwLjg3NXJlbSwgMS4wNDE2NjY2NjY3dncsIDEuMjVyZW0pO1xufVxuLmxhcmdlLXBhY2thZ2UtYmxvY2stMDkgLi0tdGV4dCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNsYW1wKDAuODc1cmVtLCAxLjA0MTY2NjY2Njd2dywgMS4yNXJlbSk7XG59XG4ubGFyZ2UtcGFja2FnZS1ibG9jay0wOSAuLS1zaWduYXR1cmUgc3ZnIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBmaWxsOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cbi5sYXJnZS1wYWNrYWdlLWJsb2NrLTA5IC4tLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sYXJnZS1wYWNrYWdlLWJsb2NrLTA5IC4tLWlubmVyIHtcbiAgcGFkZGluZy1ib3R0b206IGNsYW1wKDEuNzVyZW0sIDIuMDgzMzMzMzMzM3Z3LCAyLjVyZW0pO1xufVxuLmxhcmdlLXBhY2thZ2UtYmxvY2stMDkgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwIDE0cHggMjBweDtcbiAgbWFyZ2luOiAwO1xufVxuLmxhcmdlLXBhY2thZ2UtYmxvY2stMDkgdWwgbGkge1xuICBtYXJnaW46IDRweCAwO1xufVxuLmxhcmdlLXBhY2thZ2UtYmxvY2stMDkgdWwgbGk6YmVmb3JlIHtcbiAgY29udGVudDogXCLigKJcIjtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxZW07XG4gIG1hcmdpbi1sZWZ0OiAtMWVtO1xufVxuXG4udGVzdGltb25pYWwtYmxvY2stMTAge1xuICBwYWRkaW5nLXRvcDogY2xhbXAoNS4yNXJlbSwgNi4yNXZ3LCA3LjVyZW0pO1xuICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoNS4yNXJlbSwgNi4yNXZ3LCA3LjVyZW0pO1xufVxuLnRlc3RpbW9uaWFsLWJsb2NrLTEwIC4tLXRpdGxlIHtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luLWJvdHRvbTogY2xhbXAoMC44NzVyZW0sIDEuMDQxNjY2NjY2N3Z3LCAxLjI1cmVtKTtcbn1cbi50ZXN0aW1vbmlhbC1ibG9jay0xMCAuLS10ZXh0IHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luLWJvdHRvbTogY2xhbXAoMC44NzVyZW0sIDEuMDQxNjY2NjY2N3Z3LCAxLjI1cmVtKTtcbn1cbi50ZXN0aW1vbmlhbC1ibG9jay0xMCAuLS1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50ZXN0aW1vbmlhbC1ibG9jay0xMCBzdmcge1xuICBmaWxsOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cbi50ZXN0aW1vbmlhbC1ibG9jay0xMCAucXVvdGUtbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbn1cbi50ZXN0aW1vbmlhbC1ibG9jay0xMCAucXVvdGUtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG4udGVzdGltb25pYWwtYmxvY2stMTAgLi0tc3VidGl0bGUsIC50ZXN0aW1vbmlhbC1ibG9jay0xMCAuLS1xdW90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1ib3R0b206IGNsYW1wKDAuODc1cmVtLCAxLjA0MTY2NjY2Njd2dywgMS4yNXJlbSk7XG59XG5cbi5nYWxsZXJ5LWJsb2NrLTExIHtcbiAgLS1pdGVtLXdpZHRoOiAzMjBweDtcbiAgLS1pbm5lci13aWR0aDogMTI1N3B4O1xuICBtYXJnaW4tdG9wOiBjbGFtcCgyLjYyNXJlbSwgMy4xMjV2dywgMy43NXJlbSk7XG4gIG1hcmdpbi1ib3R0b206IGNsYW1wKDIuNjI1cmVtLCAzLjEyNXZ3LCAzLjc1cmVtKTtcbn1cbi5nYWxsZXJ5LWJsb2NrLTExIC5jYXJkIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmdhbGxlcnktYmxvY2stMTEgLmNhcmQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGhlaWdodDogNDQwcHg7XG59XG4uZ2FsbGVyeS1ibG9jay0xMSAuY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS1hbHQpO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xufVxuLmdhbGxlcnktYmxvY2stMTEgLnNjcm9sbC1jb250YWluZXIge1xuICAtLXZpZXdwb3J0LWNvbnRlbnQ6IDE1MDBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XG4gIHNjcm9sbC1wYWRkaW5nOiBjYWxjKDUwJSAtIHZhcigtLXZpZXdwb3J0LWNvbnRlbnQpIC8gMik7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgY3Vyc29yOiBtb3ZlOyAvKiBmYWxsYmFjayBpZiBncmFiIGN1cnNvciBpcyB1bnN1cHBvcnRlZCAqL1xuICBjdXJzb3I6IGdyYWI7XG4gIGN1cnNvcjogLW1vei1ncmFiO1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcbn1cbi5nYWxsZXJ5LWJsb2NrLTExIC5zY3JvbGwtY29udGFpbmVyOmFjdGl2ZSB7XG4gIGN1cnNvcjogZ3JhYmJpbmc7XG4gIGN1cnNvcjogLW1vei1ncmFiYmluZztcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xufVxuLmdhbGxlcnktYmxvY2stMTEgLml0ZW0tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAyNXB4IDAgMDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IHZhcigtLWdyaWQtZ2FwKTtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDE1MDBweCkge1xuICAuZ2FsbGVyeS1ibG9jay0xMSAuaXRlbS1jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogY2FsYyg1MCUgLSB2YXIoLS12aWV3cG9ydC1jb250ZW50KSAvIDIpO1xuICB9XG59XG4uZ2FsbGVyeS1ibG9jay0xMSAuaXRlbS1jb250YWluZXIgLml0ZW0ge1xuICBtYXgtd2lkdGg6IHZhcigtLWl0ZW0td2lkdGgpO1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBtYXgtd2lkdGg6IGNhbGModmFyKC0taW5uZXItd2lkdGgsIDEwMHZ3KSAqIDAuODc1KTtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIHRyYW5zaXRpb246IDMwMG1zIGxpbmVhciBhbGw7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uZ2FsbGVyeS1ibG9jay0xMSAuaXRlbS1jb250YWluZXIgLml0ZW0gaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZ2FsbGVyeS1ibG9jay0xMSAucGFkZGxlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogNDBweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMjBweDtcbiAgcGFkZGluZy1ib3R0b206IGNsYW1wKDEuMjVyZW0sIDIuMDgzMzMzMzMzM3Z3LCAyLjVyZW0pO1xufVxuLmdhbGxlcnktYmxvY2stMTEgLnBhZGRsZXMgc3ZnIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHN0cm9rZTogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG4uZ2FsbGVyeS1ibG9jay0xMSAucGFkZGxlcyAucGFkZGxlbmF2LS1sZWZ0LCAuZ2FsbGVyeS1ibG9jay0xMSAucGFkZGxlcyAucGFkZGxlbmF2LS1yaWdodCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS1hbHQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNsaWVudC1nYWxsZXJpZXMtMTIge1xuICBwYWRkaW5nLXRvcDogY2xhbXAoMi42MjVyZW0sIDMuMTI1dncsIDMuNzVyZW0pO1xuICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoNS4yNXJlbSwgNi4yNXZ3LCA3LjVyZW0pO1xufVxuLmNsaWVudC1nYWxsZXJpZXMtMTIgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuLmNsaWVudC1nYWxsZXJpZXMtMTIgLi0tbGluayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogNjkwcHgpIHtcbiAgLmNsaWVudC1nYWxsZXJpZXMtMTIgLi0tZXhjZXJwdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmNsaWVudC1nYWxsZXJpZXMtMTIgLi0taW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgYXNwZWN0LXJhdGlvOiA0LzQ7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG4uY2xpZW50LWdhbGxlcmllcy0xMiAuaW1hZ2Utb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWluLWhlaWdodDogNTAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUtYWx3YXlzKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLCAwLCAwLCAwKSAwJSwgIzAwMDAwMCAxMDAlKTtcbiAgei1pbmRleDogMjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xufVxuXG4ubWFzb25yeS1ibG9jay0xMyB7XG4gIHBhZGRpbmctdG9wOiBjbGFtcCgyLjYyNXJlbSwgMy4xMjV2dywgMy43NXJlbSk7XG4gIHBhZGRpbmctYm90dG9tOiBjbGFtcCg1LjI1cmVtLCA2LjI1dncsIDcuNXJlbSk7XG59XG4ubWFzb25yeS1ibG9jay0xMyAuZ3JpZC1pdGVtIHtcbiAgd2lkdGg6IDI1JTtcbn1cbi5tYXNvbnJ5LWJsb2NrLTEzIC5ncmlkLWl0ZW06bnRoLWNoaWxkKDRuKzMpIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5tYXNvbnJ5LWJsb2NrLTEzIC4tLWJsb2NrIHtcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ubWFzb25yeS1ibG9jay0xMyAuLS1pbWFnZSB7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYXJ0aWNsZS1wYWdlLWxheW91dCB7XG4gIHBhZGRpbmctdG9wOiAyMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG4uYXJ0aWNsZS1wYWdlLWxheW91dCAuLS1zaWRlYmFyIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5hcnRpY2xlLXBhZ2UtbGF5b3V0IC4tLXNpZGViYXIgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLmFydGljbGUtcGFnZS1sYXlvdXQgLi0tc2lkZWJhciB1bCBsaSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci00KTtcbn1cbi5hcnRpY2xlLXBhZ2UtbGF5b3V0IC4tLXNpZGViYXIgdWwgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLmFydGljbGUtcGFnZS1sYXlvdXQgLi0tZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmFydGljbGUtcGFnZS1sYXlvdXQgLi0tZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICB9XG59XG4uYXJ0aWNsZS1wYWdlLWxheW91dCAucGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuLmFydGljbGUtcGFnZS1sYXlvdXQgLi0tcG9zdCB7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci00KTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuYXJ0aWNsZS1wYWdlLWxheW91dCAuLS1wb3N0Om50aC1jaGlsZChvZGQpIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1jb2xvci00KTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItNCk7XG4gIH1cbiAgLmFydGljbGUtcGFnZS1sYXlvdXQgLi0tcG9zdDpudGgtY2hpbGQoZXZlbikge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci00KTtcbiAgfVxuICAuYXJ0aWNsZS1wYWdlLWxheW91dCAuLS1wb3N0Om50aC1jaGlsZChvZGQpOm50aC1sYXN0LWNoaWxkKDIpLCAuYXJ0aWNsZS1wYWdlLWxheW91dCAuLS1wb3N0Om50aC1sYXN0LWNoaWxkKDEpIHtcbiAgICBib3JkZXItYm90dG9tOiAwcHg7XG4gIH1cbn1cblxuLmNvb2tpZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjaykgIWltcG9ydGFudDtcbn1cbi5jb29raWUtYnV0dG9uIHN2ZyB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLXdoaXRlKSAhaW1wb3J0YW50O1xuICBzY2FsZTogMC42O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5pbnRlcmZhY2UtaW50ZXJmYWNlLXNrZWxldG9uX19zaWRlYmFyIC5pbnRlcmZhY2UtY29tcGxlbWVudGFyeS1hcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pcy1zaWRlYmFyLW9wZW5lZCAuaW50ZXJmYWNlLWludGVyZmFjZS1za2VsZXRvbl9fc2lkZWJhciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgbGVmdDogY2FsYygxMDAlIC0gNDAwcHgpICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAuOTtcbiAgdG9wOiA2MXB4O1xufVxuXG4uZWRpdG9yLXN0eWxlcy13cmFwcGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG59XG5cbi5lZGl0b3ItZWRpdG9yLWNhbnZhc19fcG9zdC10aXRsZS13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogNHJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0b3A6IC00cHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4ucGFzc3dvcmQtdWkge1xuICBwYWRkaW5nLXRvcDogMjAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMDBweDtcbn1cbi5wYXNzd29yZC11aSAucGFzc3dvcmQtZm9ybSB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucGFzc3dvcmQtdWkgLnVuZGVyc2NvcmVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwcHg7XG4gIGdhcDogNXB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbi5wYXNzd29yZC11aSAudW5kZXJzY29yZXMgc3BhbiB7XG4gIGhlaWdodDogMi41cHg7XG4gIHdpZHRoOiAzMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG4ucGFzc3dvcmQtdWkgLnBhc3N3b3JkLWJveCB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dSBTYW5zIE1vbm9cIiwgbW9ub3NwYWNlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIHBhZGRpbmctbGVmdDogNjBweDtcbiAgd2lkdGg6IDMzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxM3B4O1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xufVxuLnBhc3N3b3JkLXVpIC5wYXNzd29yZC1ib3g6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xufVxuLnBhc3N3b3JkLXVpIC5wYXNzd29yZC1idG4ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wYXNzd29yZC11aSAuLS1zdWJ0aXRsZSB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5wYXNzd29yZC11aSAuLS1jZW50ZXIge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBhc3N3b3JkLXVpIC4tLWNlbnRlciBsYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgbGVmdDogLTk5OTlweDtcbn1cbi5wYXNzd29yZC11aSAuLS1jZW50ZXIgPiBkaXYge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xufVxuXG4uYmxvZy13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xuICBwYWRkaW5nLXRvcDogMjAwcHggIWltcG9ydGFudDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL19BcHAvQXBwLnNjc3NcIixcIndlYnBhY2s6Ly8uL19BcHAvc2Nzcy9nbG9iYWwvX2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL19BcHAvc2Nzcy9wYWNrYWdlcy9DU1NDb2x1bW5Qcm8vc3JjL0NTU0dyaWRQcm8uc2Nzc1wiLFwid2VicGFjazovLy4vX0FwcC9zY3NzL3BhY2thZ2VzL0NTU0NvbHVtblByby9zcmMvbGliL2dyaWQuc2Nzc1wiLFwid2VicGFjazovLy4vX0FwcC9zY3NzL3BhY2thZ2VzL0NTU0NvbHVtblByby9zcmMvbGliL2dyaWRsaW5lcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9fQXBwL3Njc3MvcGFja2FnZXMvRm9udFNjYWxpbmdQcm8vc3JjL2xpYi9mb250LXNjYWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL19BcHAvc2Nzcy9nbG9iYWwvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9fQXBwL3Njc3MvZ2xvYmFsL19sb2FkaW5nLnNjc3NcIixcIndlYnBhY2s6Ly8uL19BcHAvbW9kdWxlcy9fYXRvbXMvYnV0dG9uL19idXR0b24uc2Nzc1wiLFwid2VicGFjazovLy4vX0FwcC9tb2R1bGVzL19hdG9tcy9hcnJvd2ljb24vX2Fycm93aWNvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9fQXBwL21vZHVsZXMvX2F0b21zL2xvZ28vX2xvZ28uc2Nzc1wiLFwid2VicGFjazovLy4vX0FwcC9tb2R1bGVzL19hdG9tcy9zaWduYXR1cmUvX3NpZ25hdHVyZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9fQXBwL21vZHVsZXMvX21vbGVjdWxlcy9pbWFnZS10aWxlL19pbWFnZS10aWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL19BcHAvc2Nzcy9iYXNlL19yZXNwb25zaXZldW5pdC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9fQXBwL21vZHVsZXMvX21vbGVjdWxlcy9za2lsbC9fc2tpbGwuc2Nzc1wiLFwid2VicGFjazovLy4vX0FwcC9tb2R1bGVzL19tb2xlY3VsZXMvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9fQXBwL21vZHVsZXMvX21vbGVjdWxlcy9fZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL19BcHAvbW9kdWxlcy9fb3JnYW5pc21zL29yZ2FuaXNtLTAwL19vcmdhbmlzbS0wMC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9fQXBwL21vZHVsZXMvX29yZ2FuaXNtcy9oZWFkZXItYmxvY2stMDEvX2hlYWRlci1ibG9jay0wMS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9fQXBwL21vZHVsZXMvX29yZ2FuaXNtcy9pbi1mb2N1cy1ibG9jay0wMi9faW4tZm9jdXMtYmxvY2stMDIuc2Nzc1wiLFwid2VicGFjazovLy4vX0FwcC9tb2R1bGVzL19vcmdhbmlzbXMvYXJ0aWNsZXMtYmxvY2stMDMvX2FydGljbGVzLWJsb2NrLTAzLnNjc3NcIixcIndlYnBhY2s6Ly8uL19BcHAvbW9kdWxlcy9fb3JnYW5pc21zL3NtYWxsLXBhY2thZ2UtYmxvY2stMDQvX3NtYWxsLXBhY2thZ2UtYmxvY2stMDQuc2Nzc1wiLFwid2VicGFjazovLy4vX0FwcC9tb2R1bGVzL19vcmdhbmlzbXMvaW1hZ2UtYmxvY2stMDUvX2ltYWdlLWJsb2NrLTA1LnNjc3NcIixcIndlYnBhY2s6Ly8uL19BcHAvbW9kdWxlcy9fb3JnYW5pc21zL2xpbmstYmxvY2stMDYvX2xpbmstYmxvY2stMDYuc2Nzc1wiLFwid2VicGFjazovLy4vX0FwcC9tb2R1bGVzL19vcmdhbmlzbXMvcGFnZS10aXRsZS1ibG9jay0wNy9fcGFnZS10aXRsZS1ibG9jay0wNy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9fQXBwL21vZHVsZXMvX29yZ2FuaXNtcy9sYXJnZS1jb250ZW50LWJsb2NrLTA4L19sYXJnZS1jb250ZW50LWJsb2NrLTA4LnNjc3NcIixcIndlYnBhY2s6Ly8uL19BcHAvbW9kdWxlcy9fb3JnYW5pc21zL2xhcmdlLXBhY2thZ2UtYmxvY2stMDkvX2xhcmdlLXBhY2thZ2UtYmxvY2stMDkuc2Nzc1wiLFwid2VicGFjazovLy4vX0FwcC9tb2R1bGVzL19vcmdhbmlzbXMvdGVzdGltb25pYWwtYmxvY2stMTAvX3Rlc3RpbW9uaWFsLWJsb2NrLTEwLnNjc3NcIixcIndlYnBhY2s6Ly8uL19BcHAvbW9kdWxlcy9fb3JnYW5pc21zL2dhbGxlcnktYmxvY2stMTEvX2dhbGxlcnktYmxvY2stMTEuc2Nzc1wiLFwid2VicGFjazovLy4vX0FwcC9tb2R1bGVzL19vcmdhbmlzbXMvY2xpZW50LWdhbGxlcmllcy0xMi9fY2xpZW50LWdhbGxlcmllcy0xMi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9fQXBwL21vZHVsZXMvX29yZ2FuaXNtcy9tYXNvbnJ5LWJsb2NrLTEzL19tYXNvbnJ5LWJsb2NrLTEzLnNjc3NcIl0sXCJu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RUFDSTtJQUNJLHFEQUFBO0VIbU1kO0FBQ0Y7QUd0TVE7RUFDSTtJQUNJLHNEQUFBO0VId01kO0FBQ0Y7QUczTVE7RUFDSTtJQUNJLHNEQUFBO0VINk1kO0FBQ0Y7QUdoTlE7RUFDSTtJQUNJLHNEQUFBO0VIa05kO0FBQ0Y7QUc1TVE7RUFDSTtJQUNJLHNEQUFBO0VIOE1kO0FBQ0Y7QUdqTlE7RUFDSTtJQUNJLHNEQUFBO0VIbU5kO0FBQ0Y7QUd0TlE7RUFDSTtJQUNJLHNEQUFBO0VId05kO0FBQ0Y7QUczTlE7RUFDSTtJQUNJLHNEQUFBO0VINk5kO0FBQ0Y7QUdoT1E7RUFDSTtJQUNJLHNEQUFBO0VIa09kO0FBQ0Y7QUdyT1E7RUFDSTtJQUNJLHNEQUFBO0VIdU9kO0FBQ0Y7QUcxT1E7RUFDSTtJQUNJLHNEQUFBO0VINE9kO0FBQ0Y7QUcvT1E7RUFDSTtJQUNJLHNEQUFBO0VIaVBkO0FBQ0Y7QUdwUFE7RUFDSTtJQUNJLHNEQUFBO0VIc1BkO0FBQ0Y7QUd6UFE7RUFDSTtJQUNJLHVEQUFBO0VIMlBkO0FBQ0Y7QUc5UFE7RUFDSTtJQUNJLHVEQUFBO0VIZ1FkO0FBQ0Y7QUduUVE7RUFDSTtJQUNJLHVEQUFBO0VIcVFkO0FBQ0Y7QUcvUFE7RUFDSTtJQUNJLHNEQUFBO0VIaVFkO0FBQ0Y7QUdwUVE7RUFDSTtJQUNJLHNEQUFBO0VIc1FkO0FBQ0Y7QUd6UVE7RUFDSTtJQUNJLHNEQUFBO0VIMlFkO0FBQ0Y7QUc5UVE7RUFDSTtJQUNJLHNEQUFBO0VIZ1JkO0FBQ0Y7QUduUlE7RUFDSTtJQUNJLHNEQUFBO0VIcVJkO0FBQ0Y7QUd4UlE7RUFDSTtJQUNJLHNEQUFBO0VIMFJkO0FBQ0Y7QUc3UlE7RUFDSTtJQUNJLHNEQUFBO0VIK1JkO0FBQ0Y7QUdsU1E7RUFDSTtJQUNJLHNEQUFBO0VIb1NkO0FBQ0Y7QUd2U1E7RUFDSTtJQUNJLHNEQUFBO0VIeVNkO0FBQ0Y7QUc1U1E7RUFDSTtJQUNJLHVEQUFBO0VIOFNkO0FBQ0Y7QUdqVFE7RUFDSTtJQUNJLHVEQUFBO0VIbVRkO0FBQ0Y7QUd0VFE7RUFDSTtJQUNJLHVEQUFBO0VId1RkO0FBQ0Y7QUdsVFE7RUFDSTtJQUNJLHNEQUFBO0VIb1RkO0FBQ0Y7QUd2VFE7RUFDSTtJQUNJLHNEQUFBO0VIeVRkO0FBQ0Y7QUc1VFE7RUFDSTtJQUNJLHNEQUFBO0VIOFRkO0FBQ0Y7QUdqVVE7RUFDSTtJQUNJLHNEQUFBO0VIbVVkO0FBQ0Y7QUd0VVE7RUFDSTtJQUNJLHNEQUFBO0VId1VkO0FBQ0Y7QUczVVE7RUFDSTtJQUNJLHNEQUFBO0VINlVkO0FBQ0Y7QUdoVlE7RUFDSTtJQUNJLHNEQUFBO0VIa1ZkO0FBQ0Y7QUdyVlE7RUFDSTtJQUNJLHNEQUFBO0VIdVZkO0FBQ0Y7QUcxVlE7RUFDSTtJQUNJLHNEQUFBO0VINFZkO0FBQ0Y7QUcvVlE7RUFDSTtJQUNJLHVEQUFBO0VIaVdkO0FBQ0Y7QUdwV1E7RUFDSTtJQUNJLHVEQUFBO0VIc1dkO0FBQ0Y7QUd6V1E7RUFDSTtJQUNJLHVEQUFBO0VIMldkO0FBQ0Y7QUdyV1E7RUFDSTtJQUNJLHNEQUFBO0VIdVdkO0FBQ0Y7QUcxV1E7RUFDSTtJQUNJLHNEQUFBO0VINFdkO0FBQ0Y7QUcvV1E7RUFDSTtJQUNJLHNEQUFBO0VIaVhkO0FBQ0Y7QUdwWFE7RUFDSTtJQUNJLHNEQUFBO0VIc1hkO0FBQ0Y7QUd6WFE7RUFDSTtJQUNJLHNEQUFBO0VIMlhkO0FBQ0Y7QUc5WFE7RUFDSTtJQUNJLHNEQUFBO0VIZ1lkO0FBQ0Y7QUduWVE7RUFDSTtJQUNJLHNEQUFBO0VIcVlkO0FBQ0Y7QUd4WVE7RUFDSTtJQUNJLHNEQUFBO0VIMFlkO0FBQ0Y7QUc3WVE7RUFDSTtJQUNJLHNEQUFBO0VIK1lkO0FBQ0Y7QUdsWlE7RUFDSTtJQUNJLHVEQUFBO0VIb1pkO0FBQ0Y7QUd2WlE7RUFDSTtJQUNJLHVEQUFBO0VIeVpkO0FBQ0Y7QUc1WlE7RUFDSTtJQUNJLHVEQUFBO0VIOFpkO0FBQ0Y7QUd4WlE7RUFDSTtJQUNJLHNEQUFBO0VIMFpkO0FBQ0Y7QUc3WlE7RUFDSTtJQUNJLHNEQUFBO0VIK1pkO0FBQ0Y7QUdsYVE7RUFDSTtJQUNJLHNEQUFBO0VIb2FkO0FBQ0Y7QUd2YVE7RUFDSTtJQUNJLHNEQUFBO0VIeWFkO0FBQ0Y7QUc1YVE7RUFDSTtJQUNJLHNEQUFBO0VIOGFkO0FBQ0Y7QUdqYlE7RUFDSTtJQUNJLHNEQUFBO0VIbWJkO0FBQ0Y7QUd0YlE7RUFDSTtJQUNJLHNEQUFBO0VId2JkO0FBQ0Y7QUczYlE7RUFDSTtJQUNJLHNEQUFBO0VINmJkO0FBQ0Y7QUdoY1E7RUFDSTtJQUNJLHNEQUFBO0VIa2NkO0FBQ0Y7QUdyY1E7RUFDSTtJQUNJLHVEQUFBO0VIdWNkO0FBQ0Y7QUcxY1E7RUFDSTtJQUNJLHVEQUFBO0VINGNkO0FBQ0Y7QUcvY1E7RUFDSTtJQUNJLHVEQUFBO0VIaWRkO0FBQ0Y7QUczY1E7RUFDSTtJQUNJLGdFQUFBO0VINmNkO0FBQ0Y7QUcxY1E7RUFDSTtJQUNJLCtEQUFBO0VINGNkO0FBQ0Y7QUdyZFE7RUFDSTtJQUNJLGdFQUFBO0VIdWRkO0FBQ0Y7QUdwZFE7RUFDSTtJQUNJLCtEQUFBO0VIc2RkO0FBQ0Y7QUcvZFE7RUFDSTtJQUNJLGdFQUFBO0VIaWVkO0FBQ0Y7QUc5ZFE7RUFDSTtJQUNJLCtEQUFBO0VIZ2VkO0FBQ0Y7QUd6ZVE7RUFDSTtJQUNJLGdFQUFBO0VIMmVkO0FBQ0Y7QUd4ZVE7RUFDSTtJQUNJLCtEQUFBO0VIMGVkO0FBQ0Y7QUduZlE7RUFDSTtJQUNJLGdFQUFBO0VIcWZkO0FBQ0Y7QUdsZlE7RUFDSTtJQUNJLCtEQUFBO0VIb2ZkO0FBQ0Y7QUc3ZlE7RUFDSTtJQUNJLGdFQUFBO0VIK2ZkO0FBQ0Y7QUc1ZlE7RUFDSTtJQUNJLCtEQUFBO0VIOGZkO0FBQ0Y7QUd2Z0JRO0VBQ0k7SUFDSSxnRUFBQTtFSHlnQmQ7QUFDRjtBR3RnQlE7RUFDSTtJQUNJLCtEQUFBO0VId2dCZDtBQUNGO0FHamhCUTtFQUNJO0lBQ0ksZ0VBQUE7RUhtaEJkO0FBQ0Y7QUdoaEJRO0VBQ0k7SUFDSSwrREFBQTtFSGtoQmQ7QUFDRjtBRzNoQlE7RUFDSTtJQUNJLGdFQUFBO0VINmhCZDtBQUNGO0FHMWhCUTtFQUNJO0lBQ0ksK0RBQUE7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eXNEUjtBQXRzREk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUF3c0RSO0FBdHNEUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUF3c0RaO0FBcnNEUTtFQUNJLGdCQUFBO0FBdXNEWjs7QUFsc0RBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUFxc0RKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlK1ZpZXRuYW0rUHJvOndnaHRANDAwOzcwMCZmYW1pbHk9UGxheWZhaXIrRGlzcGxheSZmYW1pbHk9VWJ1bnR1K1NhbnMrTW9ubzppdGFsLHdnaHRAMCw0MDAuLjcwMDsxLDQwMC4uNzAwJmRpc3BsYXk9c3dhcCcpO1xcbiRmb250LXNpemVzOiAoXFxuICAgIChtaW4tZm9udC1zaXplLXB4OiAxMSwgbWF4LWZvbnQtc2l6ZS1weDogMTQsIGZvbnQtc2NhbGU6IDMpLCAvLyAxMyAvLyAuZnMtLTEzXFxuICAgIChtaW4tZm9udC1zaXplLXB4OiAxMSwgbWF4LWZvbnQtc2l6ZS1weDogMTUsIGZvbnQtc2NhbGU6IDMpLCAvLyAxNCAvLyAuZnMtLTE0XFxuICAgIChtaW4tZm9udC1zaXplLXB4OiAxNCwgbWF4LWZvbnQtc2l6ZS1weDogMTYsIGZvbnQtc2NhbGU6IDUpLCAvLyAxNiAvLyAuZnMtLTE2XFxuICAgIChtaW4tZm9udC1zaXplLXB4OiAyNiwgbWF4LWZvbnQtc2l6ZS1weDogMzYsIGZvbnQtc2NhbGU6IDEwKSwgLy8gMTYgLy8gLmZzLS0zNlxcbiAgICAobWluLWZvbnQtc2l6ZS1weDogMCwgbWF4LWZvbnQtc2l6ZS1weDogNzAsIGZvbnQtc2NhbGU6IDcwKSwgLy8gMjAgLy8gLmZzLS03MFxcbiAgICAobWluLWZvbnQtc2l6ZS1weDogMzYsIG1heC1mb250LXNpemUtcHg6IDQ4LCBmb250LXNjYWxlOiA0OCksIC8vIDI2IC8vIC5mcy0tNDhcXG4gICAgKG1pbi1mb250LXNpemUtcHg6IDQ0LCBtYXgtZm9udC1zaXplLXB4OiA5NiwgZm9udC1zY2FsZTogNDQpLCAvLyAxMjAgLy8gLmZzLS0xMjBcXG4pO1xcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIC5jb250ZW50LXdyYXBwZXIge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICB9XFxufVxcblxcbi53cC1ibG9jayB7XFxuICAgIG1heC13aWR0aDogIDEwMCU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkge1xcbiAgICAgICAgcGFkZGluZzogMCA0MHB4O1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAgICAgcGFkZGluZzogMCA2MHB4O1xcbiAgICB9XFxuXFxuICBcXG59XFxuXFxuXFxuXFxuLyogQmFzZSBWYXJpYWJsZXMgKi9cXG5AaW1wb3J0IFxcXCJzY3NzL2Jhc2UvcmVzcG9uc2l2ZXVuaXRcXFwiO1xcblxcbkBpbXBvcnQgXFxcInNjc3MvZ2xvYmFsL2ZvbnRzXFxcIjtcXG5cXG5cXG5cXG5AaW1wb3J0IFxcXCJzY3NzL3BhY2thZ2VzL0NTU0NvbHVtblByby9zcmMvQ1NTR3JpZFByby5zY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCJzY3NzL3BhY2thZ2VzL0ZvbnRTY2FsaW5nUHJvL3NyYy9Gb250U2NhbGluZ1Byby5zY3NzXFxcIjtcXG5cXG5cXG5cXG4vKiBHbG9iYWwgVmFyaWFibGVzICovXFxuQGltcG9ydCBcXFwic2Nzcy9nbG9iYWwvdmFyaWFibGVzXFxcIjtcXG5AaW1wb3J0IFxcXCJzY3NzL2dsb2JhbC9sb2FkaW5nXFxcIjtcXG5cXG4vKiBBdG9tcyAqL1xcbkBpbXBvcnQgXFxcIm1vZHVsZXMvX2F0b21zL2J1dHRvbi9fYnV0dG9uXFxcIjtcXG5AaW1wb3J0IFxcXCJtb2R1bGVzL19hdG9tcy9hcnJvd2ljb24vX2Fycm93aWNvblxcXCI7XFxuQGltcG9ydCBcXFwibW9kdWxlcy9fYXRvbXMvbG9nby9fbG9nb1xcXCI7XFxuQGltcG9ydCBcXFwibW9kdWxlcy9fYXRvbXMvc2lnbmF0dXJlL19zaWduYXR1cmVcXFwiO1xcblxcbi8qIE1vbGVjdWxlcyAqL1xcbkBpbXBvcnQgXFxcIm1vZHVsZXMvX21vbGVjdWxlcy9pbWFnZS10aWxlL2ltYWdlLXRpbGVcXFwiO1xcbkBpbXBvcnQgXFxcIm1vZHVsZXMvX21vbGVjdWxlcy9za2lsbC9za2lsbFxcXCI7XFxuQGltcG9ydCBcXFwibW9kdWxlcy9fbW9sZWN1bGVzL19oZWFkZXJcXFwiO1xcbkBpbXBvcnQgXFxcIm1vZHVsZXMvX21vbGVjdWxlcy9fZm9vdGVyXFxcIjtcXG5cXG5cXG4vKiBPcmdhbmlzbXMgKi9cXG5AaW1wb3J0IFxcXCJtb2R1bGVzL19vcmdhbmlzbXMvb3JnYW5pc20tMDAvb3JnYW5pc20tMDBcXFwiO1xcbkBpbXBvcnQgXFxcIm1vZHVsZXMvX29yZ2FuaXNtcy9oZWFkZXItYmxvY2stMDEvaGVhZGVyLWJsb2NrLTAxXFxcIjtcXG5AaW1wb3J0IFxcXCJtb2R1bGVzL19vcmdhbmlzbXMvaW4tZm9jdXMtYmxvY2stMDIvaW4tZm9jdXMtYmxvY2stMDJcXFwiO1xcbkBpbXBvcnQgXFxcIm1vZHVsZXMvX29yZ2FuaXNtcy9hcnRpY2xlcy1ibG9jay0wMy9hcnRpY2xlcy1ibG9jay0wM1xcXCI7XFxuQGltcG9ydCBcXFwibW9kdWxlcy9fb3JnYW5pc21zL3NtYWxsLXBhY2thZ2UtYmxvY2stMDQvc21hbGwtcGFja2FnZS1ibG9jay0wNFxcXCI7XFxuQGltcG9ydCBcXFwibW9kdWxlcy9fb3JnYW5pc21zL2ltYWdlLWJsb2NrLTA1L2ltYWdlLWJsb2NrLTA1XFxcIjtcXG5AaW1wb3J0IFxcXCJtb2R1bGVzL19vcmdhbmlzbXMvbGluay1ibG9jay0wNi9saW5rLWJsb2NrLTA2XFxcIjtcXG5AaW1wb3J0IFxcXCJtb2R1bGVzL19vcmdhbmlzbXMvcGFnZS10aXRsZS1ibG9jay0wNy9wYWdlLXRpdGxlLWJsb2NrLTA3XFxcIjtcXG5AaW1wb3J0IFxcXCJtb2R1bGVzL19vcmdhbmlzbXMvbGFyZ2UtY29udGVudC1ibG9jay0wOC9sYXJnZS1jb250ZW50LWJsb2NrLTA4XFxcIjtcXG5AaW1wb3J0IFxcXCJtb2R1bGVzL19vcmdhbmlzbXMvbGFyZ2UtcGFja2FnZS1ibG9jay0wOS9sYXJnZS1wYWNrYWdlLWJsb2NrLTA5XFxcIjtcXG5AaW1wb3J0IFxcXCJtb2R1bGVzL19vcmdhbmlzbXMvdGVzdGltb25pYWwtYmxvY2stMTAvdGVzdGltb25pYWwtYmxvY2stMTBcXFwiO1xcbkBpbXBvcnQgXFxcIm1vZHVsZXMvX29yZ2FuaXNtcy9nYWxsZXJ5LWJsb2NrLTExL2dhbGxlcnktYmxvY2stMTFcXFwiO1xcbkBpbXBvcnQgXFxcIm1vZHVsZXMvX29yZ2FuaXNtcy9jbGllbnQtZ2FsbGVyaWVzLTEyL2NsaWVudC1nYWxsZXJpZXMtMTJcXFwiO1xcbkBpbXBvcnQgXFxcIm1vZHVsZXMvX29yZ2FuaXNtcy9tYXNvbnJ5LWJsb2NrLTEzL21hc29ucnktYmxvY2stMTNcXFwiO1xcblxcblxcbi5hcnRpY2xlLXBhZ2UtbGF5b3V0IHtcXG4gICAgcGFkZGluZy10b3A6IDIwMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG5cXG4gICAgLi0tc2lkZWJhciB7XFxuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICAgICBcXG4gICAgICAgIHVsIHtcXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG5cXG4gICAgICAgICAgICBsaSB7XFxuICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci00KTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgYSB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBcXG4gICAgLi0tZ3JpZCB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgICAgICB9XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIH1cXG5cXG4gICAgLnBhZ2luYXRpb24ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIH1cXG5cXG4gICAgLi0tcG9zdCB7XFxuICAgICBcXG4gICAgICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTQpO1xcblxcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgICAgICAgICAgJjpudGgtY2hpbGQob2RkKSB7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTQpO1xcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItNCk7XFxuICAgICAgICAgICAgfSBcXG5cXG4gICAgICAgICAgICAmOm50aC1jaGlsZChldmVuKSB7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci00KTtcXG4gICAgICAgICAgICB9IFxcblxcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKG9kZCk6bnRoLWxhc3QtY2hpbGQoMiksICY6bnRoLWxhc3QtY2hpbGQoMSkge1xcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAwcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5jb29raWUtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2spICFpbXBvcnRhbnQ7XFxuXFxuICAgIHN2ZyB7XFxuICAgICAgICBmaWxsOiB2YXIoLS1jb2xvci13aGl0ZSkgIWltcG9ydGFudDtcXG4gICAgICAgIHNjYWxlOiAwLjY7XFxuICAgIH1cXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbn1cXG5cXG4uaW50ZXJmYWNlLWludGVyZmFjZS1za2VsZXRvbl9fc2lkZWJhciAuaW50ZXJmYWNlLWNvbXBsZW1lbnRhcnktYXJlYXt3aWR0aDoxMDAlO31cXG4uaXMtc2lkZWJhci1vcGVuZWQgLmludGVyZmFjZS1pbnRlcmZhY2Utc2tlbGV0b25fX3NpZGViYXJ7XFxuICAgIHdpZHRoOjQwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcXG4gICAgcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xcbiAgICBsZWZ0OiBjYWxjKDEwMCUgLSA0MDBweCkgIWltcG9ydGFudDtcXG4gICAgb3BhY2l0eTogMC45O1xcblxcbiAgICB0b3A6IDYxcHg7XFxufVxcblxcbi5lZGl0b3Itc3R5bGVzLXdyYXBwZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG59XFxuXFxuLmVkaXRvci1lZGl0b3ItY2FudmFzX19wb3N0LXRpdGxlLXdyYXBwZXIge1xcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHRvcDogLTRweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbiAgICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbi5wYXNzd29yZC11aSB7XFxuICAgIHBhZGRpbmctdG9wOiAyMDBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xcbiAgICBcXG4gICAgLnBhc3N3b3JkLWZvcm0ge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgXFxuICAgIC51bmRlcnNjb3JlcyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA1MHB4O1xcbiAgICAgICAgZ2FwOiA1cHg7XFxuICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuXFxuICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDIuNXB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5wYXNzd29yZC1ib3gge1xcbiAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHUgU2FucyBNb25vXFxcIiwgbW9ub3NwYWNlO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICAgICAgaGVpZ2h0OiA0NnB4O1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcbiAgICAgICAgd2lkdGg6IDMzMHB4O1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxM3B4O1xcbiAgICAgICAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcXG5cXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICAgICBcXG4gICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5wYXNzd29yZC1idG4ge1xcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIC4tLXN1YnRpdGxlIHtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgLi0tY2VudGVyIHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgICAgICBsYWJlbCB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgICAgbGVmdDogLTk5OTlweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgID4gZGl2IHtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5ibG9nLXdyYXBwZXIge1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAyMDBweCAhaW1wb3J0YW50O1xcbn1cXG5cXG5cIixcIi8qIENvbnRhaW5lciBVbml0IFJlc3BvbnNpdmUgRm9udHMgKi9cXG5cXG5cXG4uZi0tbGlnaHQge1xcbiAgICBmb250LWZhbWlseTogXFxcIkJlIFZpZXRuYW0gUHJvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4uZi0tcmVndWxhciB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQmUgVmlldG5hbSBQcm9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi5mLS1zZW1pYm9sZCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQmUgVmlldG5hbSBQcm9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi5mLS1ib2xkIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJCZSBWaWV0bmFtIFByb1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLnR0LS11cHBlcmNhc2Uge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG46d2hlcmUoc3Ryb25nKSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogXFxcIkJlIFZpZXRuYW0gUHJvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBsaW5lLWhlaWdodDogMS43ZW07XFxufVxcblxcbi4tLXN1YnRpdGxlIHtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuN2VtO1xcbn1cXG5cXG4uLS1oMSwgLi0taDIsIC4tLWgzIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQbGF5ZmFpciBEaXNwbGF5XFxcIiwgc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG5cXG59XFxuXFxuLi0taDEge1xcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XFxufVxcblxcbi4tLWgyIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMWVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wNGVtO1xcbn1cXG5cXG4uLS1oMyB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjFlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDRlbTtcXG59XFxuXFxuYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbiAgICB9XFxufVxcblxcblxcblwiLFwiJGNvbHVtbnM6IDEyO1xcbiRndXR0ZXI6IDQwcHg7XFxuJGNvbnRhaW5lcjogMTY4MHB4ICFkZWZhdWx0O1xcblxcblxcbjpyb290IHtcXG4gIC0tc206IDU3NnB4O1xcbiAgLS1tZDogNzY4cHg7XFxuICAtLWxnOiA5OTJweDtcXG4gIC0teGw6IDEyMDBweDtcXG4gIC0teHhsOiAxNjAwcHg7XFxuICAtLXh4eGw6IDE5MjBweDtcXG59XFxuXFxuQGltcG9ydCAnbGliL2dyaWQnO1xcbkBpbXBvcnQgJ2xpYi9ncmlkbGluZXMnO1wiLFwiLmNvbnRhaW5lciB7XFxuICAgIC0tY29sdW1uczogI3skY29sdW1uc307XFxuICAgIC0tZ3V0dGVyOiAjeyRndXR0ZXJ9O1xcbiAgICAtLWNvbnRhaW5lcjogI3skY29udGFpbmVyfTtcXG5cXG4gICAgJjpub3QoLmZsdWlkKSB7XFxuICAgICAgICBtYXgtd2lkdGg6IHZhcigtLWNvbnRhaW5lcik7XFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgfVxcblxcbiAgICAvLyBSZWR1Y2UgR3JpZCB0byA2IGNvbHVtbnMgb24gbWVkaXVtIHNjcmVlbnNcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcXG4gICAgICAgIC0tY29sdW1uczogNjtcXG4gICAgfVxcblxcbiAgICAvLyBSZWR1Y2UgR3JpZCB0byA0IGNvbHVtbnMgb24gc21hbGwgc2NyZWVuc1xcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTY3cHgpIHtcXG4gICAgICAgIC0tY29sdW1uczogNDtcXG4gICAgfVxcblxcbiAgICAucm93IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tZ3V0dGVyKSAvIC0yKTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1ndXR0ZXIpIC8gLTIpO1xcbiAgICB9XFxuICBcXG4gICAgLy8gTW9iaWxlIEZpcnN0IEFwcHJvYWNoXFxuICAgIC5jb2wge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tZ3V0dGVyKSAvIDIpO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLWd1dHRlcikgLyAyKTtcXG5cXG4gICAgICAgIC8vIElmIG5vdCBhbnkgYWRkaXRpb25hbCBjb2x1bW4gb3B0aW9uc1xcbiAgICAgICAgJjpub3QoW2NsYXNzKj0nY29sLSddKSB7XFxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSB7XFxuICAgICAgICAgICAgICAgIGZsZXg6IDEgMDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAvLyBJZiBtb2JpbGUsIG1ha2UgZnVsbCB3aWR0aFxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU2N3B4KSB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gQ29sdW1uc1xcbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRjb2x1bW5zIHtcXG4gICAgICAgIC8vIFN0YW5kYXJkIERlc2t0b3AgU2l6aW5nXFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gICAgICAgICAgICAuY29sLSN7JGl9IHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoY2FsYyhjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSkgKiAjeyRpfSkgLSB2YXIoLS1ndXR0ZXIpKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkY29sdW1ucyB7XFxuXFxuICAgICAgICAvLyBTdGFuZGFyZCBUYWJsZXQgU2l6aW5nXFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xcbiAgICAgICAgICAgIC5jb2wtI3skaX0ge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyhjYWxjKGNhbGMoNTAlIC8gdmFyKC0tY29sdW1ucykpICogI3skaX0pIC0gdmFyKC0tZ3V0dGVyKSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGNvbHVtbnMge1xcbiAgICAgICAgLy8gU3RhbmRhcmQgVGFibGV0IFNpemluZyAobWQgTW9kaWZpZXIpXFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgICAgICAgICAuY29sLWxnLSN7JGl9IHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoY2FsYyhjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSkgKiAjeyRpfSkgLSB2YXIoLS1ndXR0ZXIpKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkY29sdW1ucyB7XFxuICAgICAgICAvLyBTdGFuZGFyZCBUYWJsZXQgU2l6aW5nIChtZCBNb2RpZmllcilcXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAgMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XFxuICAgICAgICAgICAgLmNvbC14bC0jeyRpfSB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKGNhbGMoY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykpICogI3skaX0pIC0gdmFyKC0tZ3V0dGVyKSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGNvbHVtbnMge1xcbiAgICAgICAgLy8gU3RhbmRhcmQgVGFibGV0IFNpemluZyAobWQgTW9kaWZpZXIpXFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogIDE2MDBweCkgYW5kIChtYXgtd2lkdGg6IDE5MjBweCkge1xcbiAgICAgICAgICAgIC5jb2wteHhsLSN7JGl9IHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoY2FsYyhjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSkgKiAjeyRpfSkgLSB2YXIoLS1ndXR0ZXIpKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkY29sdW1ucyB7XFxuICAgICAgICAvLyBTdGFuZGFyZCBUYWJsZXQgU2l6aW5nIChtZCBNb2RpZmllcilcXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxuICAgICAgICAgICAgLmNvbC1tZC0jeyRpfSB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKGNhbGMoY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykpICogI3skaX0pIC0gdmFyKC0tZ3V0dGVyKSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGNvbHVtbnMge1xcbiAgICAgICAgLy8gU3RhbmRhcmQgTW9iaWxlIFNpemluZyAoc20gTW9kaWZpZXIpXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTY3cHgpIHtcXG4gICAgICAgICAgICAuY29sLXNtLSN7JGl9IHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoY2FsYyhjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSkgKiAjeyRpfSkgLSB2YXIoLS1ndXR0ZXIpKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gT2Zmc2V0c1xcbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRjb2x1bW5zIHtcXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgICAgICAgICAgIC5vZmZzZXQtI3skaX0ge1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyhjYWxjKGNhbGMoY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykpICogI3skaX0pKSArIHZhcigtLWd1dHRlcikgLyAyKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xcbiAgICAgICAgICAgIC5vZmZzZXQtI3skaX0ge1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyhjYWxjKGNhbGMoY2FsYyg1MCUgLyB2YXIoLS1jb2x1bW5zKSkgKiAjeyRpfSkpICsgdmFyKC0tZ3V0dGVyKSAvIDIpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcIi5ncmlkLWxpbmVzIHtcXG4gICAgLS1jb2x1bW5zOiAjeyRjb2x1bW5zfTtcXG4gICAgLS1ndXR0ZXI6ICN7JGd1dHRlcn07XFxuICAgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaW5zZXQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcblxcbiAgICAvLyBSZWR1Y2UgR3JpZCB0byA2IGNvbHVtbnMgb24gbWVkaXVtIHNjcmVlbnNcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcXG4gICAgICAgIC0tY29sdW1uczogNjtcXG4gICAgfVxcblxcbiAgICAvLyBSZWR1Y2UgR3JpZCB0byA0IGNvbHVtbnMgb24gc21hbGwgc2NyZWVuc1xcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTY3cHgpIHtcXG4gICAgICAgIC0tY29sdW1uczogNDtcXG4gICAgfVxcblxcbiAgICBzcGFuIHtcXG4gICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLWd1dHRlcik7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiBjYWxjKGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpKSAtIGNhbGModmFyKC0tZ3V0dGVyKSkpO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjA1KTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLWd1dHRlcikgLyAyKTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1ndXR0ZXIpIC8gMik7XFxuICAgIH1cXG59XFxuXCIsXCJAdXNlICdzYXNzOm1hdGgnO1xcblxcbiRiYXNlLWZvbnQtc2l6ZTogMTYgIWRlZmF1bHQ7IC8qIEJhc2UgZm9udCBzaXplIGluIHBpeGVscyAoMXJlbSA9IDE2cHgpICovXFxuJHZ3LWZhY3RvcjogMC41dncgICFkZWZhdWx0OyAvKiBUaGUgdmlld3BvcnQgd2lkdGggZmFjdG9yICovXFxuXFxuLy8gJGZvbnQtc2l6ZXM6IChcXG4vLyAgIChtaW4tZm9udC1zaXplLXB4OiAxMywgbWF4LWZvbnQtc2l6ZS1weDogMTYsIGZvbnQtc2NhbGU6IDEyKSxcXG4vLyAgIChtaW4tZm9udC1zaXplLXB4OiAxNiwgbWF4LWZvbnQtc2l6ZS1weDogMjQsIGZvbnQtc2NhbGU6IDE2KSxcXG4vLyAgIChtaW4tZm9udC1zaXplLXB4OiAyMSwgbWF4LWZvbnQtc2l6ZS1weDogNDYsIGZvbnQtc2NhbGU6IDQwKSxcXG4vLyAgIChtaW4tZm9udC1zaXplLXB4OiAyNCwgbWF4LWZvbnQtc2l6ZS1weDogNjQsIGZvbnQtc2NhbGU6IDYwKVxcbi8vICkgIWRlZmF1bHQ7XFxuXFxuLy8gQ29udmVydCBQWCB0byBWV1xcbkBmdW5jdGlvbiBweC10by12dygkcHgsICR2aWV3cG9ydC13aWR0aDogMTkyMCkge1xcbiAgICBAcmV0dXJuIChtYXRoLmRpdigkcHgsICR2aWV3cG9ydC13aWR0aCkpICogMTAwICogMXZ3O1xcbiAgfVxcblxcblxcbi8vIExvb3BcXG5AZWFjaCAkc2l6ZSBpbiAkZm9udC1zaXplcyB7XFxuICAkbWluLWZvbnQtc2l6ZS1weDogbWFwLWdldCgkc2l6ZSwgbWluLWZvbnQtc2l6ZS1weCk7XFxuICAkbWF4LWZvbnQtc2l6ZS1weDogbWFwLWdldCgkc2l6ZSwgbWF4LWZvbnQtc2l6ZS1weCk7XFxuICAkZm9udC1zY2FsZTogbWFwLWdldCgkc2l6ZSwgZm9udC1zY2FsZSk7XFxuICBcXG4gIC8vIENvbnZlcnQgcGl4ZWwgdmFsdWVzIHRvIHJlbVxcbiAgJG1pbi1yZW06ICN7bWF0aC5kaXYoJG1pbi1mb250LXNpemUtcHgsICRiYXNlLWZvbnQtc2l6ZSl9cmVtO1xcbiAgJG1heC1yZW06ICN7bWF0aC5kaXYoJG1heC1mb250LXNpemUtcHgsICRiYXNlLWZvbnQtc2l6ZSl9cmVtO1xcblxcbiAgLy8gY3JlYXRlIGZzLS0gY2xhc3NuYW1lIGJhc2VkIG9uIG1heCBmb250XFxuICAuZnMtLSN7JG1heC1mb250LXNpemUtcHh9IHtcXG4gICAgJiwgLi0tZnMgeyBcXG4gICAgICBmb250LXNpemU6IGNsYW1wKFxcbiAgICAgICN7JG1pbi1yZW19LFxcbiAgICAgIGNhbGMoI3skbWluLXJlbX0gKyAje3B4LXRvLXZ3KCRmb250LXNjYWxlKX0pLFxcbiAgICAgICN7JG1heC1yZW19XFxuICAgICk7XFxuICAgIH1cXG4gICAgXFxuICB9XFxufVxcblwiLFwiOnJvb3Qge1xcbiAgICAtLWNvbG9yLXByaW1hcnk6ICMzRjNGM0Y7XFxuICAgIC0tY29sb3Itc2Vjb25kYXJ5OiAjQjdCN0E0O1xcbiAgICAtLWNvbG9yLTM6ICNFOEU4RTQ7XFxuICAgIC0tY29sb3ItNDogI0VERURFOTtcXG4gICAgLS1jb2xvci01OiAjRjVGNUY0O1xcbiAgICAtLWNvbG9yLTY6ICNGOUNFNjU7XFxuICAgIC0tY29sb3ItNzogI0Q1NDgyMTtcXG4gICAgLS1jb2xvci04OiAjRDc4NEZDO1xcbiAgICAtLWNvbG9yLXdoaXRlOiAjRkZGRkZGO1xcbiAgICAtLWNvbG9yLXdoaXRlLWFsd2F5czogI0ZGRkZGRjtcXG4gICAgLS1jb2xvci1ibGFjazogIzAwMDAwMDtcXG5cXG4gICAgLS1zbTogNTc2cHg7XFxuICAgIC0tbWQ6IDc2OHB4O1xcbiAgICAtLWxnOiA5OTJweDsgXFxuICAgIC0teGw6IDEyMDBweDtcXG4gICAgLS14eGw6IDE2MDBweDtcXG4gICAgLS14eHhsOiAxOTIwcHg7XFxuXFxufVxcblxcbmJvZHkuZGFyay10aGVtZSwgYm9keTpoYXMoLnBhZ2UtZGFyaykgeyBcXG4gICAgLS1jb2xvci1wcmltYXJ5OiAjRjBGMEVGO1xcbiAgICAtLWNvbG9yLXNlY29uZGFyeTogI0M1QzVDNTtcXG4gICAgLS1jb2xvci0zOiAjRThFOEU0O1xcbiAgICAtLWNvbG9yLTQ6ICMwRDBEMEQ7IFxcbiAgICAtLWNvbG9yLTU6ICNGRkZGRkY7XFxuICAgIC0tY29sb3ItNjogI0Y5Q0U2NTtcXG4gICAgLS1jb2xvci03OiAjRDU0ODIxO1xcbiAgICAtLWNvbG9yLTg6ICNENzg0RkM7XFxuICAgIC0tY29sb3Itd2hpdGU6ICMwMDAwMDA7XFxuICAgIC0tY29sb3Itd2hpdGUtYWx3YXlzOiAjRkZGRkZGO1xcbiAgICAtLWNvbG9yLWJsYWNrOiAjRkZGRkZGO1xcbn0gXFxuXFxuXFxuLmMtLXByaW1hcnkge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxufVxcblxcbi5jLS1zZWNvbmRhcnkge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG59XFxuXFxuLmMtLXNlY29uZGFyeS1hbHQge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWFsdCk7XFxufVxcblxcbi5jLS0zIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLTMpO1xcbn1cXG5cXG4uYy0tNCB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG59XFxuXFxuLmMtLTUge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItNSk7XFxufVxcblxcbi5jLS02IHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLTYpO1xcbn1cXG5cXG4uYy0tNyB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci03KTtcXG59XFxuXFxuLmMtLTgge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItOCk7XFxufVxcblxcbi5jLS13aGl0ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxufVxcblxcbi5jLS13aGl0ZS1hbHQge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUtYWx0KTtcXG59XFxuXFxuLmMtLWJsYWNrIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXG59XFxuXFxuLmJnLS1wcmltYXJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxufVxcblxcbi5iZy0tc2Vjb25kYXJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG59XFxuXFxuLmJnLS1zZWNvbmRhcnktYWx0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWFsdCk7XFxufVxcblxcbi5iZy0tMyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTMpO1xcbn1cXG5cXG4uYmctLTQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG59XFxuXFxuLmJnLS01IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNSk7XFxufVxcblxcblxcblxcblxcblxcblwiLFwiQGtleWZyYW1lcyBsb2FkaW5nSW4ge1xcbiAgICBmcm9tIHtcXG4gICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDg1JSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufSAgXFxuXFxuQGtleWZyYW1lcyBsb2FkaW5nT3V0IHtcXG4gICAgZnJvbSB7XFxuICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgXFxuICAgIH1cXG4gICAgODUlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgXFxuICAgIH1cXG4gICAgOTkuOSUge1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgd2lkdGg6IDAlO1xcbiAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBsb2FkaW5nT3V0RGl2IHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBvcGFjaXR5OiAwLjcgIFxcbiAgICB9XFxuICAgIDMwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICAgIDYwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwLjc7XFxuICAgIH1cXG4gICAgOTAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgOTkuOSUge1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgd2lkdGg6IDAlO1xcbiAgICAgICBvcGFjaXR5OiAwLjk7XFxuICAgIH1cXG59XCIsXCIuLS1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgc3ZnIHtcXG4gICAgICAgICAgICBzdHJva2U6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuYXJyb3ctaWNvbiB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtNHB4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgICAgICByb3RhdGU6IC05MGRlZztcXG4gICAgfVxcbn1cIixcIi5hcnJvdy1pY29uIHtcXG4gICAgc3Ryb2tlOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG59XCIsXCIuaGRyLWxvZ28ge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbi5sb2dvIHtcXG4gICAgXFxufVwiLFwiLnNpZ25hdHVyZSB7XFxuICAgIGZpbGw6IHZhcigtLWNvbG9yLWJsYWNrKTtcXG4gICAgc3Ryb2tlOiB2YXIoLS1jb2xvci1ibGFjayk7XFxufVwiLFwiLmltYWdlLXRpbGUge1xcbiAgICAvLyBCbG9jayBQb3NpdGlvbmluZ1xcblxcbiAgICAmOmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAxMCU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgICAgYm90dG9tOiAtMjUlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgICBAaW5jbHVkZSBfKCd3aWR0aCcsIDAuNSwgNzApO1xcbiAgICAgICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci00KTtcXG4gICAgICAgIGJvcmRlcjogN3B4IHNvbGlkIHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuICAgICAgICB6LWluZGV4OiAzO1xcbiAgICB9XFxuICAgIFxcbiAgICAvLyBJbWFnZSBTcGVjaWZpY3NcXG4gICAgLmlubmVyIHtcXG4gICAgICAgIEBpbmNsdWRlIF8oJ3dpZHRoJywgMC41LCAxODIpO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcblxcbiAgICAgICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgICAgICBAaW5jbHVkZSBfKCdib3JkZXItcmFkaXVzJywgMC41LCA2NCk7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG5cXG4gICAgICAgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgIH1cXG5cXG4gICAgfVxcblxcbiAgICAvLyBJbmZvIFRpbGUgUG9zaXRpb25pbmdcXG4gICAgLmluZm8tdGlsZSB7XFxuXFxuICAgIH1cXG4gXFxufVxcblxcblxcblwiLFwiQHVzZSBcXFwic2FzczptYXRoXFxcIjtcXG5cXG5AZnVuY3Rpb24gc3RyaXAtdW5pdHMoJG51bWJlcikge1xcbiAgQHJldHVybiBtYXRoLmRpdigkbnVtYmVyLCAoJG51bWJlciAqIDAgKyAxKSk7XFxufVxcblxcbkBmdW5jdGlvbiBjYWxjdWxhdGVSZW0oJHNpemUpIHtcXG4gICRyZW1TaXplOiBtYXRoLmRpdigkc2l6ZSwgMTYpO1xcbiAgQHJldHVybiAjeyRyZW1TaXplfXJlbTtcXG59XFxuXFxuQGZ1bmN0aW9uIGNhbGN1bGF0ZUNsYW1wKCRtaW5pbXVtLCAkcHJlZmVycmVkLCAkbWF4aW11bSwgJHByZWZlcnJlZF92aWV3cG9ydF93aWR0aDogMTkyMHB4KSB7XFxuICAkY2xhbXBfcGFyYW1ldGVyXzE6IGNhbGN1bGF0ZVJlbSgkbWluaW11bSAqICRwcmVmZXJyZWQpO1xcbiAgJGNsYW1wX3BhcmFtZXRlcl8yOiBzdHJpcC11bml0cyhtYXRoLmRpdigoJHByZWZlcnJlZCArIDApLCAkcHJlZmVycmVkX3ZpZXdwb3J0X3dpZHRoKSAqIDEwMCkgKiAxdnc7XFxuICAkY2xhbXBfcGFyYW1ldGVyXzM6IGNhbGN1bGF0ZVJlbSgkbWF4aW11bSk7XFxuXFxuICBAcmV0dXJuIGNsYW1wKCN7JGNsYW1wX3BhcmFtZXRlcl8xfSwgI3skY2xhbXBfcGFyYW1ldGVyXzJ9LCAjeyRjbGFtcF9wYXJhbWV0ZXJfM30pO1xcbn1cXG5cXG5AbWl4aW4gXygkdW5pdCwgJG1pbmltdW0sICRwcmVmZXJyZWQsICRtYXhpbXVtOiAkcHJlZmVycmVkLCAkcHJlZmVycmVkX3ZpZXdwb3J0X3dpZHRoOiAxOTIwcHgpIHtcXG4gIC8vICN7JHVuaXR9OiBjYWxjdWxhdGVSZW0oJHByZWZlcnJlZCk7XFxuICAjeyR1bml0fTogY2FsY3VsYXRlQ2xhbXAoJG1pbmltdW0sICRwcmVmZXJyZWQsICRtYXhpbXVtLCAkcHJlZmVycmVkX3ZpZXdwb3J0X3dpZHRoKTtcXG59XFxuXFxuXCIsXCIuc2tpbGwtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG5cXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogODk5cHgpIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB9XFxuXFxuICAgXFxuXFxuICAgIEBpbmNsdWRlIF8oJ21hcmdpbi1ib3R0b20nLCAwLjcsIDIwKTtcXG5cXG4gICAgLi0tbGVmdCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIF8oJ3dpZHRoJywgMC43LCAyMDApO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgXFxuXFxuICAgICAgICBzdHJvbmcsIHNwYW4ge1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjFlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuLS1yaWdodCB7XFxuICAgICAgICBAaW5jbHVkZSBfKCdwYWRkaW5nLXRvcCcsIDAuNywgNik7XFxuXFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA4OTlweCkge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIF8oJ3BhZGRpbmctdG9wJywgMC43LCAyMCk7XFxuICAgICAgICAgICAgQGluY2x1ZGUgXygncGFkZGluZy1ib3R0b20nLCAwLjcsIDIwKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NjZweCkge1xcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICAgICAgfVxcbiAgICB9ICBcXG5cXG5cXG4gICAgLi0tcHJvZ3Jlc3Mge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBAaW5jbHVkZSBfKCdnYXAnLCAwLjcsIDgpO1xcbiAgICAgICAgZmxleDogMCAwIGF1dG87XFxuICAgICAgICBcXG5cXG4gICAgICAgIGxpIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDhweDtcXG4gICAgICAgICAgICB3aWR0aDogOHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQuNXB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcblxcbiAgICAgICAgfVxcblxcbiAgICAgICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCA2IHtcXG4gICAgICAgICAgICAmW2RhdGEtcHJvZ3Jlc3M9XFxcIiN7JGl9XFxcIl0ge1xcbiAgICAgICAgICAgICAgICBsaTpudGgtY2hpbGQoMW4rI3skaSArIDF9KSB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVwiLFwiLmhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwMHB4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgXFxuXFxuICAgIC5oZWFkZXItLWlubmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICB9XFxuXFxuICAgIC4tLWxlZnQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuXFxuXFxuICAgIH1cXG5cXG4gICAgLi0tcmlnaHQge1xcbiAgICAgICAgQGluY2x1ZGUgXygncGFkZGluZy1yaWdodCcsIDAuNywgMTQ3KTtcXG5cXG4gICAgICAgIC5uYXZpY29uIHtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcyBsaW5lYXIgdG9wO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICB0b3A6IDM4cHg7XFxuICAgICAgICAgICAgcmlnaHQ6IDMycHg7XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTI4cHgpIHtcXG4gICAgICAgICAgICAuLS1idXR0b24ge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgICAgICAgICAgIC4tLWJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgICAgdG9wOiAtMTBweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLm5hdmljb24ge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgIHN2ZyB7XFxuICAgICAgICBmaWxsOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gICB9XFxuXFxuICAgLmxvZ28ge1xcbiAgICAgICAgQGluY2x1ZGUgXygnd2lkdGgnLCAwLjcsIDE0Nyk7XFxuICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcyBsaW5lYXIgd2lkdGg7XFxuICAgICAgICBhc3BlY3QtcmF0aW86IDE3NS8xMjk7XFxuICAgICAgICBoZWlnaHQ6IHVuc2V0O1xcbiAgIH1cXG5cXG4gICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXG4gICAgICAgIC5uYXYtbWFpbiB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgICBib3R0b206IDA7XFxuICAgICAgICAgICAgcmlnaHQ6IDBweDtcXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XFxuICAgICAgICAgICAgcmlnaHQ6IC0zMDBweDtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAxMDBtcyBsaW5lYXIgcmlnaHQ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICAgICAgICAgIHotaW5kZXg6IDIwO1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmFmdGVyIHtcXG4gICAgICAgICAgICB6LWluZGV4OiAxMTtcXG4gICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgICAgICByaWdodDogLTEwMHZ3O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTMpO1xcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAxMDBtcyBsaW5lYXIgcmlnaHQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLm1lbnUtYWN0aXZlIHtcXG4gICAgICAgICAgICAubmF2LW1haW4ge1xcbiAgICAgICAgICAgICAgICByaWdodDogMHB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmOmFmdGVyIHtcXG4gICAgICAgICAgICAgICByaWdodDogMDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubmF2LW1haW4ge1xcbiAgICAgICAgICAgIHVsIHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA0MHB4O1xcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcblxcbiAgICAgICAgICAgICAgICBsaSB7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItMyk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgYSB7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICB9XFxuXFxuICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAgICAgICAubmF2LW1haW4ge1xcbiAgICAgICAgICAgIHVsIHtcXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgICAgICAgICAgICAgbGkge1xcbiAgICAgICAgICAgICAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgYSB7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXdyYXA6IG5vd3JhcDtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcblxcblxcbi5oYXMtc2Nyb2xsZWQge1xcbiAgICAuaGVhZGVyIHtcXG4gICAgICAgIC5sb2dvIHtcXG4gICAgICAgICAgICBAaW5jbHVkZSBfKCd3aWR0aCcsIDAuNywgOTYpO1xcbiAgICAgICAgfVxcbiAgICAgICAgLm5hdmljb24ge1xcbiAgICAgICAgICAgIHRvcDogMTBweDtcXG4gICAgICAgICAgICByaWdodDogMzJweDtcXG4gICAgICAgIH1cXG4gICAgfSAgICAgICBcXG59XCIsXCJmb290ZXIjZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICAgIC4tLWNlbnRlciB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH0gIFxcblxcbiAgICAuLS10b3Age1xcbiAgICAgICAgcGFkZGluZy10b3A6IDIwMHB4O1xcbiAgICB9XFxuXFxuICAgIC4tLWJvdHRvbSB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG4gICAgfVxcblxcbiAgICAuLS1zdmcge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gICAgICAgIFxcbiAgICAgICAgc3ZnIHtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgZmlsbDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cIixcIiRwYWRkaW5nOiA0MHB4O1xcbiRtYXJnaW46IDIwcHg7XFxuXFxuLm9yZ2FuaXNtLTAwIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46ICRtYXJnaW47XFxuICAgIHBhZGRpbmc6ICRwYWRkaW5nO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvdXItZ3JheS0zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG5cXG4gICAgJi5sb2FkZXItY29udGVudCB7XFxuICAgICAgICAmOmhhcygubG9hZGVyKSB7XFxuICAgICAgICAgICAgPiAqOm5vdCgubG9hZGVyKSB7XFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbG9hZGluZ0luIDJzIG5vcm1hbCBmb3J3YXJkcyBlYXNlLWluLW91dDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG5cXG4gICAgLmxvYWRlciB7XFxuICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAkcGFkZGluZztcXG4gICAgICAgIGxlZnQ6ICRwYWRkaW5nO1xcbiAgICAgICAgYm90dG9tOiAkcGFkZGluZztcXG4gICAgICAgIHJpZ2h0OiAkcGFkZGluZztcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIFxcbiAgICAgICAgZGl2IHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjIwLDIxOSwyMzAsMSkgMCUsIHJnYmEoMjMwLDIzMiwyMzgsMSkgMTQlLCByZ2JhKDIzNCwyMzgsMjQwLDEpIDEwMCUpO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG91ci1ncmF5LTgpO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIFxcbiAgICAubG9hZGVyIHtcXG4gICAgICAgIGFuaW1hdGlvbjogbG9hZGluZ091dCAycyBub3JtYWwgZm9yd2FyZHMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICBcXG4gICAgICAgIGRpdiB7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBsb2FkaW5nT3V0RGl2IDJzIG5vcm1hbCBmb3J3YXJkcyBlYXNlLWluLW91dDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cXG5cIixcIi5oZWFkZXItYmxvY2stMDEge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXG5cXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxuICAgICAgICAucm93ID4ge1xcbiAgICAgICAgICAgIC5jb2w6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgICAgICAgICAgICBoMSB7XFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA2MHB4O1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgICAgICAgICAgICAgc3BhbjpudGgtb2YtdHlwZSgxKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0xMDBweDtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIHNwYW46bnRoLW9mLXR5cGUoMikge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMTAwcHg7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbiBcXG5cXG4gICAgLi0tbGVmdCB7XFxuICAgICAgQGluY2x1ZGUgXygnbWF4LXdpZHRoJywgMC42NSwgNTUwKTtcXG5cXG4gICAgICAgIC4tLXBhZ2UtZG93biB7XFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XFxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XFxuXFxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XFxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuLS10aXRsZSB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuXFxuICAgICAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgLi0tYnV0dG9uIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgfVxcblxcbiAgICAuLS1yaWdodCB7XFxuICAgICAgICAmLCAuLS1ncmlkIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB9IFxcbiAgICAgICAgXFxuICAgICAgICAuLS1saW5rIHtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuLS1ncmlkIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICBcXG5cXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgXygncGFkZGluZy1sZWZ0JywgMC43LCA2MCk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkge1xcbiAgICAgICAgICAgICAgICBnYXA6IDEwJTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAgICAgICAgICAgICAgIGE6bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMDBweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTY3cHgpIHtcXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuXFxuICAgICAgICAgICAgICAgIGE6bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgICAgICAgICAgICAgIC4tLWltYWdlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMjtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICBcXG4gICAgICAgICAgICAgICAgLi0tbGluayB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGdhcDogMjBweDtcXG4gICAgXFxuICAgICAgICAgICAgICAgICAgICAuLS1pbWFnZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgLi0tbnVtYmVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgIFxcblxcbiAgICAgICAgLi0taDIge1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuLS1pbWFnZSB7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2MHB4O1xcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAydncgMnZ3IDBweCB2YXIoLS1jb2xvci00KTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSB7XFxuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMnB4O1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBfKCdib3R0b20nLCAwLjcsIC02MCk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuLS1udW1iZXIge1xcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkge1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTUlO1xcbiAgICAgICAgICAgICAgICByaWdodDogLTE4JTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuLS1zdWJ0aXRsZSB7XFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XFxuXFxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSB7XFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIF8oJ3BhZGRpbmctdG9wJywgMC43LCA3MCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIEBpbmNsdWRlIF8oJ21hcmdpbi1ib3R0b20nLCAwLjcsIDEwKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC4tLXRpdGxlIHtcXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTY3cHgpIHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSB7XFxuICAgICAgICAgICAgLi0tZ3JvdXAge1xcbiAgICAgICAgICAgICAgICAuLS1udW1iZXIge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cIixcIi5pbi1mb2N1cy1ibG9jay0wMiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgICBAaW5jbHVkZSBfKCdwYWRkaW5nLXRvcCcsIDAuNywgMTIwKTtcXG4gICAgQGluY2x1ZGUgXygncGFkZGluZy1ib3R0b20nLCAwLjcsIDYwKTtcXG4gICAgXFxuICAgIC4tLXN1YnRpdGxlIHtcXG4gICAgICAgIEBpbmNsdWRlIF8oJ21hcmdpbi1ib3R0b20nLCAwLjcsIDIwKTtcXG4gICAgfVxcblxcbiAgICAuLS10aXRsZSB7XFxuICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgICAgICAgQGluY2x1ZGUgXygnbWFyZ2luLWJvdHRvbScsIDAuNywgMjApO1xcbiAgICB9XFxuXFxuICAgIC4tLXRleHQge1xcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgICAgIEBpbmNsdWRlIF8oJ21hcmdpbi1ib3R0b20nLCAwLjcsIDIwKTtcXG4gICAgfVxcblxcbiAgICAuLS1zaWduYXR1cmUge1xcbiAgICAgICAgc3ZnIHtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgZmlsbDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgXFxuXFxuICAgIC4tLWNlbnRlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuXCIsXCIuYXJ0aWNsZXMtYmxvY2stMDMge1xcbiAgICBAaW5jbHVkZSBfKCdwYWRkaW5nLXRvcCcsIDAuNywgMTIwKTtcXG4gICAgQGluY2x1ZGUgXygncGFkZGluZy1ib3R0b20nLCAwLjcsIDYwKTtcXG5cXG4gICAgLi0tc3VidGl0bGUge1xcbiAgICAgICAgQGluY2x1ZGUgXygnbWFyZ2luLWJvdHRvbScsIDAuNywgMjApO1xcbiAgICB9XFxuXFxuICAgIC4tLXRpdGxlIHtcXG4gICAgICAgIG1heC13aWR0aDogNzAwcHg7XFxuICAgICAgICBAaW5jbHVkZSBfKCdtYXJnaW4tYm90dG9tJywgMC43LCAyMCk7XFxuICAgIH1cXG5cXG4gICAgLi0tdGV4dCB7XFxuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICAgICAgQGluY2x1ZGUgXygnbWFyZ2luLWJvdHRvbScsIDAuNywgMjApO1xcbiAgICB9XFxuXFxuICAgIC4tLWNlbnRlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLi0tY29udGVudCB7XFxuICAgICAgICBAaW5jbHVkZSBfKCdwYWRkaW5nLWJvdHRvbScsIDAuNywgODApO1xcbiAgICB9XFxuXFxuICAgIC4tLWxpc3Rpbmcge1xcbiAgICAgICAgLi0tbGluayB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG5cXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgLi0tb3ZlcmxheSB7XFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLi0tb3ZlcmxheSB7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1vdXQgYWxsO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICBib3R0b206IDA7XFxuICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIEBtZWRpYSAocG9pbnRlcjpjb2Fyc2UpIHtcXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlLWFsd2F5cyk7XFxuICAgICAgICAgICAgQGluY2x1ZGUgXygncGFkZGluZycsIDAuNywgMzApO1xcbiAgICAgICAgICAgIEBpbmNsdWRlIF8oJ3BhZGRpbmctYm90dG9tJywgMC43LCAyMCk7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwwLDAsMC44KSAwJSwgcmdiYSgwLDAsMCwwKSAxMDAlKTtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGgzLCBwIHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLi0taW1hZ2Uge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIEBpbmNsdWRlIF8oJ2hlaWdodCcsIDAuNywgNzAwKTtcXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuLS1lbmQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgfVxcblxcbn1cIixcIi5zbWFsbC1wYWNrYWdlLWJsb2NrLTA0IHtcXG5cXG4gICAgQGluY2x1ZGUgXygncGFkZGluZy10b3AnLCAwLjcsIDEyMCk7XFxuICAgIEBpbmNsdWRlIF8oJ3BhZGRpbmctYm90dG9tJywgMC43LCA4MCk7XFxuICAgIFxcbiAgICAuLS1zdWJ0aXRsZSB7XFxuICAgICAgICBAaW5jbHVkZSBfKCdtYXJnaW4tYm90dG9tJywgMC43LCAyMCk7XFxuICAgIH1cXG5cXG4gICAgLi0tdGl0bGUge1xcbiAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgICAgIEBpbmNsdWRlIF8oJ21hcmdpbi1ib3R0b20nLCAwLjcsIDIwKTtcXG4gICAgfVxcblxcbiAgICAuLS10ZXh0IHtcXG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgICAgICBAaW5jbHVkZSBfKCdtYXJnaW4tYm90dG9tJywgMC43LCAyMCk7XFxuICAgIH1cXG5cXG4gICAgLi0tc2lnbmF0dXJlIHtcXG4gICAgICAgIHN2ZyB7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGZpbGw6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIFxcblxcbiAgICAuLS1jZW50ZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC4tLWlubmVyIHtcXG4gICAgICAgIEBpbmNsdWRlIF8oJ3BhZGRpbmctYm90dG9tJywgMC43LCA0MCk7XFxuICAgIH1cXG5cXG4gICAgdWwge1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIHBhZGRpbmc6IDAgMTRweCAyMHB4O1xcbiAgICAgICAgbWFyZ2luOiAwO1xcblxcbiAgICAgICAgbGkge1xcbiAgICAgICAgICAgIG1hcmdpbjogNHB4IDA7XFxuICAgICAgICAgICAgJjpiZWZvcmUge1xcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn4oCiJztcXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxZW07XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMWVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cIixcIi5pbWFnZS1ibG9jay0wNSB7XFxuICAgIGltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cIixcIi5saW5rLWJsb2NrLTA2IHtcXG4gICAgQGluY2x1ZGUgXygncGFkZGluZy10b3AnLCAwLjcsIDEyMCk7XFxuICAgIEBpbmNsdWRlIF8oJ3BhZGRpbmctYm90dG9tJywgMC43LCA2MCk7XFxuICAgIFxcbiAgICAuLS1zdWJ0aXRsZSB7XFxuICAgICAgICBAaW5jbHVkZSBfKCdtYXJnaW4tYm90dG9tJywgMC43LCAyMCk7XFxuICAgIH1cXG5cXG4gICAgLi0tdGl0bGUge1xcbiAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgICAgIEBpbmNsdWRlIF8oJ21hcmdpbi1ib3R0b20nLCAwLjcsIDIwKTtcXG4gICAgfVxcblxcbiAgICAuLS10ZXh0IHtcXG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgICAgICBAaW5jbHVkZSBfKCdtYXJnaW4tYm90dG9tJywgMC43LCAyMCk7XFxuICAgIH1cXG5cXG4gICAgLi0tc2lnbmF0dXJlIHtcXG4gICAgICAgIHN2ZyB7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGZpbGw6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIFxcblxcbiAgICAuLS1jZW50ZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxufVxcblxcblwiLFwiLnBhZ2UtdGl0bGUtYmxvY2stMDcge1xcbiAgICAuLS10b3Age1xcbiAgICAgICAgQGluY2x1ZGUgXygncGFkZGluZy10b3AnLCAwLjcsIDEyMCk7XFxuICAgICAgICBAaW5jbHVkZSBfKCdwYWRkaW5nLWJvdHRvbScsIDAuNywgMTIwKTtcXG4gICAgfVxcbn1cXG5cIixcIi5sYXJnZS1jb250ZW50LWJsb2NrLTA4IHtcXG5cXG4gICAgJi5mbGlwIHtcXG4gICAgICAgIC5yb3cge1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuLS10aXRsZSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gICAgICAgIFxcbiAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC4tLXRleHQge1xcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgICAgIEBpbmNsdWRlIF8oJ21hcmdpbi1ib3R0b20nLCAwLjcsIDQwKTtcXG4gICAgfVxcblxcbiAgICAuLS1oMSB7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcXG4gICAgfVxcblxcbiAgICAuLS1pbWFnZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGFzcGVjdC1yYXRpbzogOTgyLzE0MDA7XFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgIH1cXG5cXG4gICAgLi0tbGVmdCB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB6LWluZGV4OiA2O1xcbiAgICAgICAgQGluY2x1ZGUgXygncGFkZGluZy10b3AnLCAwLjcsIDQwKTtcXG4gICAgfVxcblxcbiAgICAuLS1qdXN0aWZ5IHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgfVxcblxcbiAgICAuLS1jZW50ZXIge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC4tLXJpZ2h0IHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICAuLS1zcXVhcmUge1xcbiAgICAgICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgICAgICBAaW5jbHVkZSBfKCd3aWR0aCcsIDAuNCwgOTAwKTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gICAgICAgIHRvcDogNDAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgICAgcmlnaHQ6IDUwJTtcXG4gICAgfVxcblxcbiAgICAmLmZsaXAge1xcbiAgICAgICAgLi0tc3F1YXJlIHtcXG4gICAgICAgICAgICByaWdodDogYXV0bztcXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLi0tdGVzdGltb25pYWwge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBAaW5jbHVkZSBfKCdwYWRkaW5nLXRvcCcsIDAuNywgMTAwKTtcXG4gICAgICAgIEBpbmNsdWRlIF8oJ3BhZGRpbmctYm90dG9tJywgMC43LCAxMDApO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgc3ZnIHtcXG4gICAgICAgICAgICBmaWxsOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5xdW90ZS1sZWZ0IHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5xdW90ZS1yaWdodCB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLi0tc3VidGl0bGUsIC4tLXF1b3RlIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgQGluY2x1ZGUgXygncGFkZGluZy1ib3R0b20nLCAwLjcsIDIwKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cIixcIi5sYXJnZS1wYWNrYWdlLWJsb2NrLTA5IHtcXG5cXG4gICAgQGluY2x1ZGUgXygncGFkZGluZy10b3AnLCAwLjcsIDEyMCk7XFxuICAgIEBpbmNsdWRlIF8oJ3BhZGRpbmctYm90dG9tJywgMC43LCA4MCk7XFxuICAgIFxcbiAgICAuLS1zdWJ0aXRsZSB7XFxuICAgICAgICBAaW5jbHVkZSBfKCdtYXJnaW4tYm90dG9tJywgMC43LCAyMCk7XFxuICAgIH1cXG5cXG4gICAgLi0tdGl0bGUge1xcbiAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgICAgIEBpbmNsdWRlIF8oJ21hcmdpbi1ib3R0b20nLCAwLjcsIDIwKTtcXG4gICAgfVxcblxcbiAgICAuLS10ZXh0IHtcXG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgICAgICBAaW5jbHVkZSBfKCdtYXJnaW4tYm90dG9tJywgMC43LCAyMCk7XFxuICAgIH1cXG5cXG4gICAgLi0tc2lnbmF0dXJlIHtcXG4gICAgICAgIHN2ZyB7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGZpbGw6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIFxcblxcbiAgICAuLS1jZW50ZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC4tLWlubmVyIHtcXG4gICAgICAgIEBpbmNsdWRlIF8oJ3BhZGRpbmctYm90dG9tJywgMC43LCA0MCk7XFxuICAgIH1cXG5cXG4gICAgdWwge1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIHBhZGRpbmc6IDAgMTRweCAyMHB4O1xcbiAgICAgICAgbWFyZ2luOiAwO1xcblxcbiAgICAgICAgbGkge1xcbiAgICAgICAgICAgIG1hcmdpbjogNHB4IDA7XFxuICAgICAgICAgICAgJjpiZWZvcmUge1xcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn4oCiJztcXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxZW07XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMWVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cIixcIi50ZXN0aW1vbmlhbC1ibG9jay0xMCB7XFxuICAgIEBpbmNsdWRlIF8oJ3BhZGRpbmctdG9wJywgMC43LCAxMjApO1xcbiAgICBAaW5jbHVkZSBfKCdwYWRkaW5nLWJvdHRvbScsIDAuNywgMTIwKTtcXG5cXG4gICAgLi0tdGl0bGUge1xcbiAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgICAgIEBpbmNsdWRlIF8oJ21hcmdpbi1ib3R0b20nLCAwLjcsIDIwKTtcXG4gICAgfVxcblxcbiAgICAuLS10ZXh0IHtcXG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgICAgICBAaW5jbHVkZSBfKCdtYXJnaW4tYm90dG9tJywgMC43LCAyMCk7XFxuICAgIH1cXG5cXG4gICAgLi0tY2VudGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICBzdmcge1xcbiAgICAgICAgZmlsbDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICAgIH1cXG5cXG4gICAgLnF1b3RlLWxlZnQge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgfVxcblxcbiAgICAucXVvdGUtcmlnaHQge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICBib3R0b206IDA7IFxcbiAgICB9XFxuXFxuICAgIC4tLXN1YnRpdGxlLCAuLS1xdW90ZSB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBAaW5jbHVkZSBfKCdwYWRkaW5nLWJvdHRvbScsIDAuNywgMjApO1xcbiAgICB9XFxufVxcblwiLFwiXFxuLmdhbGxlcnktYmxvY2stMTEge1xcbiAgICAtLWl0ZW0td2lkdGg6IDMyMHB4O1xcbiAgICAtLWlubmVyLXdpZHRoOiAxMjU3cHg7XFxuICAgIEBpbmNsdWRlIF8oJ21hcmdpbi10b3AnLCAwLjcsNjApO1xcbiAgICBAaW5jbHVkZSBfKCdtYXJnaW4tYm90dG9tJywgMC43LCA2MCk7XFxuICAgIC5jYXJkIHtcXG4gICAgICAgIHBhZGRpbmc6IDBweDtcXG5cXG4gICAgICAgIGltZyB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICAgICAgIGhlaWdodDogNDQwcHg7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmNhcmQge1xcblxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWFsdCk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAvLyBQYWRkbGUgTmF2XFxuICAgIC5zY3JvbGwtY29udGFpbmVyIHtcXG4gICBcXG4gICAgICAgIC0tdmlld3BvcnQtY29udGVudDogMTUwMHB4O1xcbiAgICAgICAgXFxuICAgIFxcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxuICAgICAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcXG4gICAgICAgIHNjcm9sbC1wYWRkaW5nOiBjYWxjKDUwJSAtIHZhcigtLXZpZXdwb3J0LWNvbnRlbnQpIC8gMik7XFxuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICAgICAgICBjdXJzb3I6IG1vdmU7IC8qIGZhbGxiYWNrIGlmIGdyYWIgY3Vyc29yIGlzIHVuc3VwcG9ydGVkICovXFxuICAgICAgICBjdXJzb3I6IGdyYWI7XFxuICAgICAgICBjdXJzb3I6IC1tb3otZ3JhYjtcXG4gICAgICAgIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xcblxcbiAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XFxuICAgICAgICAgICAgY3Vyc29yOiAtbW96LWdyYWJiaW5nO1xcbiAgICAgICAgICAgIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBcXG4gICAgLml0ZW0tY29udGFpbmVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBtYXJnaW46IDI1cHggMCAwO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtZ2FwOiB2YXIoLS1ncmlkLWdhcCk7XFxuICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgICAgIFxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE1MDBweCkge1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyg1MCUgLSB2YXIoLS12aWV3cG9ydC1jb250ZW50KSAvIDIpO1xcbiAgICAgICAgfVxcbiAgICAgICAgLy8gcGFkZGluZy1yaWdodDogY2FsYyg1MCUgLSB2YXIoLS12aWV3cG9ydC1jb250ZW50KSAvIDIpO1xcbiAgICAgICBcXG4gICAgXFxuICAgICAgIFxcbiAgICBcXG4gICAgICAgIC5pdGVtIHtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IHZhcigtLWl0ZW0td2lkdGgpO1xcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjUwcHg7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWlubmVyLXdpZHRoLCAxMDB2dykqIDAuODc1KTtcXG4gICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAvLyBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDMwMG1zIGxpbmVhciBhbGw7IFxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuXFxuICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIFxcbiAgICAucGFkZGxlcyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgICAgZ2FwOiA0MHB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTIwcHg7XFxuICAgICAgICBAaW5jbHVkZSBfKCdwYWRkaW5nLWJvdHRvbScsIDAuNSwgNDApO1xcbiAgICBcXG4gICBcXG4gICAgICAgIHN2ZyB7XFxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XFxuICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gICAgICAgIH1cXG4gICAgXFxuICAgICAgICAucGFkZGxlbmF2LS1sZWZ0LCAucGFkZGxlbmF2LS1yaWdodCB7XFxuICAgICAgICAgICB3aWR0aDogNDBweDtcXG4gICAgICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktYWx0KTtcXG4gICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG4gICAgXFxuICBcXG4gICAgXFxuICAgICAgICAucGFkZGxlbmF2LS1yaWdodCB7XFxuICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcblxcblwiLFwiLmNsaWVudC1nYWxsZXJpZXMtMTIge1xcbiAgICBAaW5jbHVkZSBfKCdwYWRkaW5nLXRvcCcsIDAuNywgNjApO1xcbiAgICBAaW5jbHVkZSBfKCdwYWRkaW5nLWJvdHRvbScsIDAuNywgMTIwKTtcXG5cXG4gICAgdWwge1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG5cXG4gICAgLi0tbGluayB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XFxuICAgIH1cXG5cXG4gICAgLi0tZXhjZXJwdCB7XFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA2OTBweCkge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLi0taW1hZ2Uge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBhc3BlY3QtcmF0aW86IDQvNDtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgXFxuICAgIH1cXG5cXG4gICAgLmltYWdlLW92ZXJsYXkge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwJTtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUtYWx3YXlzKTtcXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwgMCwgMCwgMCkgMCUsICMwMDAwMDAgMTAwJSk7XFxuXFxuICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xcbiAgICB9XFxufVwiLFwiXFxuLm1hc29ucnktYmxvY2stMTMge1xcbiAgICBAaW5jbHVkZSBfKCdwYWRkaW5nLXRvcCcsIDAuNywgNjApO1xcbiAgICBAaW5jbHVkZSBfKCdwYWRkaW5nLWJvdHRvbScsIDAuNywgMTIwKTtcXG4gICAgLmdyaWQtaXRlbSB7XFxuICAgICAgICB3aWR0aDogMjUlO1xcbiAgICB9XFxuXFxuICAgIC5ncmlkLWl0ZW06bnRoLWNoaWxkKDRuKzMpIHtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgIH1cXG5cXG4gICAgLi0tYmxvY2sge1xcbiAgICAgICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgfVxcblxcbiAgICAuLS1pbWFnZSB7XFxuICAgICAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIFxcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlK1ZpZXRuYW0rUHJvOndnaHRANDAwOzcwMCZmYW1pbHk9UGxheWZhaXIrRGlzcGxheSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBtYXJnaW46IDA7XG59XG5ib2R5IC5jb250ZW50LXdyYXBwZXIge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCA0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCA2MHB4O1xuICB9XG59XG5cbi8qIEJhc2UgVmFyaWFibGVzICovXG4vKiBDb250YWluZXIgVW5pdCBSZXNwb25zaXZlIEZvbnRzICovXG4uZi0tbGlnaHQge1xuICBmb250LWZhbWlseTogXCJCZSBWaWV0bmFtIFByb1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5mLS1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6IFwiQmUgVmlldG5hbSBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uZi0tc2VtaWJvbGQge1xuICBmb250LWZhbWlseTogXCJCZSBWaWV0bmFtIFByb1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5mLS1ib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQmUgVmlldG5hbSBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4udHQtLXVwcGVyY2FzZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbjp3aGVyZShzdHJvbmcpIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIkJlIFZpZXRuYW0gUHJvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuN2VtO1xufVxuXG4uLS1zdWJ0aXRsZSB7XG4gIGxldHRlci1zcGFjaW5nOiAwLjdlbTtcbn1cblxuLi0taDEsIC4tLWgyLCAuLS1oMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLi0taDEge1xuICBsaW5lLWhlaWdodDogMS40ZW07XG4gIG1hcmdpbjogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG59XG5cbi4tLWgyIHtcbiAgbGluZS1oZWlnaHQ6IDEuMWVtO1xuICBtYXJnaW46IDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNGVtO1xufVxuXG4uLS1oMyB7XG4gIGxpbmUtaGVpZ2h0OiAxLjFlbTtcbiAgbWFyZ2luOiAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDRlbTtcbn1cblxuYSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG46cm9vdCB7XG4gIC0tc206IDU3NnB4O1xuICAtLW1kOiA3NjhweDtcbiAgLS1sZzogOTkycHg7XG4gIC0teGw6IDEyMDBweDtcbiAgLS14eGw6IDE2MDBweDtcbiAgLS14eHhsOiAxOTIwcHg7XG59XG5cbi5jb250YWluZXIge1xuICAtLWNvbHVtbnM6IDEyO1xuICAtLWd1dHRlcjogNDBweDtcbiAgLS1jb250YWluZXI6IDE2ODBweDtcbn1cbi5jb250YWluZXI6bm90KC5mbHVpZCkge1xuICBtYXgtd2lkdGg6IHZhcigtLWNvbnRhaW5lcik7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgLS1jb2x1bW5zOiA2O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTY3cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgLS1jb2x1bW5zOiA0O1xuICB9XG59XG4uY29udGFpbmVyIC5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLWd1dHRlcikgLyAtMik7XG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1ndXR0ZXIpIC8gLTIpO1xufVxuLmNvbnRhaW5lciAuY29sIHtcbiAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tZ3V0dGVyKSAvIDIpO1xuICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tZ3V0dGVyKSAvIDIpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSB7XG4gIC5jb250YWluZXIgLmNvbDpub3QoW2NsYXNzKj1jb2wtXSkge1xuICAgIGZsZXg6IDEgMDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gIC5jb250YWluZXIgLmNvbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5jb2wtMSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogMSAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLTIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDIgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC0zIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAzIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5jb2wtNCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogNCAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLTUge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDUgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC02IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA2IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5jb2wtNyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogNyAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLTgge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDggLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC05IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA5IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5jb2wtMTAge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEwIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5jb2wtMTEge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDExIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5jb2wtMTIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEyIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC0xIHtcbiAgICB3aWR0aDogY2FsYyg1MCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLTIge1xuICAgIHdpZHRoOiBjYWxjKDUwJSAvIHZhcigtLWNvbHVtbnMpICogMiAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5jb2wtMyB7XG4gICAgd2lkdGg6IGNhbGMoNTAlIC8gdmFyKC0tY29sdW1ucykgKiAzIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC00IHtcbiAgICB3aWR0aDogY2FsYyg1MCUgLyB2YXIoLS1jb2x1bW5zKSAqIDQgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLTUge1xuICAgIHdpZHRoOiBjYWxjKDUwJSAvIHZhcigtLWNvbHVtbnMpICogNSAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5jb2wtNiB7XG4gICAgd2lkdGg6IGNhbGMoNTAlIC8gdmFyKC0tY29sdW1ucykgKiA2IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC03IHtcbiAgICB3aWR0aDogY2FsYyg1MCUgLyB2YXIoLS1jb2x1bW5zKSAqIDcgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLTgge1xuICAgIHdpZHRoOiBjYWxjKDUwJSAvIHZhcigtLWNvbHVtbnMpICogOCAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5jb2wtOSB7XG4gICAgd2lkdGg6IGNhbGMoNTAlIC8gdmFyKC0tY29sdW1ucykgKiA5IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC0xMCB7XG4gICAgd2lkdGg6IGNhbGMoNTAlIC8gdmFyKC0tY29sdW1ucykgKiAxMCAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5jb2wtMTEge1xuICAgIHdpZHRoOiBjYWxjKDUwJSAvIHZhcigtLWNvbHVtbnMpICogMTEgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLTEyIHtcbiAgICB3aWR0aDogY2FsYyg1MCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEyIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyIC5jb2wtbGctMSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogMSAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLWxnLTIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDIgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5jb250YWluZXIgLmNvbC1sZy0zIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAzIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyIC5jb2wtbGctNCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogNCAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLWxnLTUge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDUgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5jb250YWluZXIgLmNvbC1sZy02IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA2IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyIC5jb2wtbGctNyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogNyAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLWxnLTgge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDggLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5jb250YWluZXIgLmNvbC1sZy05IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA5IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyIC5jb2wtbGctMTAge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEwIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyIC5jb2wtbGctMTEge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDExIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyIC5jb2wtbGctMTIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEyIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXhsLTEge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAuY29udGFpbmVyIC5jb2wteGwtMiB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogMiAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gIC5jb250YWluZXIgLmNvbC14bC0zIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAzIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXhsLTQge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDQgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAuY29udGFpbmVyIC5jb2wteGwtNSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogNSAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gIC5jb250YWluZXIgLmNvbC14bC02IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA2IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXhsLTcge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDcgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAuY29udGFpbmVyIC5jb2wteGwtOCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogOCAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gIC5jb250YWluZXIgLmNvbC14bC05IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA5IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXhsLTEwIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAxMCAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gIC5jb250YWluZXIgLmNvbC14bC0xMSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogMTEgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAuY29udGFpbmVyIC5jb2wteGwtMTIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEyIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXh4bC0xIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAxIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXh4bC0yIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAyIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXh4bC0zIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAzIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXh4bC00IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA0IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXh4bC01IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA1IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXh4bC02IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA2IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXh4bC03IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA3IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXh4bC04IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA4IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXh4bC05IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA5IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXh4bC0xMCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogMTAgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCkgYW5kIChtYXgtd2lkdGg6IDE5MjBweCkge1xuICAuY29udGFpbmVyIC5jb2wteHhsLTExIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAxMSAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KSBhbmQgKG1heC13aWR0aDogMTkyMHB4KSB7XG4gIC5jb250YWluZXIgLmNvbC14eGwtMTIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEyIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC1tZC0xIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAxIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC1tZC0yIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAyIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC1tZC0zIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAzIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC1tZC00IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA0IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC1tZC01IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA1IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC1tZC02IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA2IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC1tZC03IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA3IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC1tZC04IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA4IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC1tZC05IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA5IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLmNvbC1tZC0xMCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogMTAgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLW1kLTExIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAxMSAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5jb2wtbWQtMTIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEyIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjdweCkge1xuICAuY29udGFpbmVyIC5jb2wtc20tMSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogMSAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTY3cHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXNtLTIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDIgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gIC5jb250YWluZXIgLmNvbC1zbS0zIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAzIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjdweCkge1xuICAuY29udGFpbmVyIC5jb2wtc20tNCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogNCAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTY3cHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXNtLTUge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDUgLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gIC5jb250YWluZXIgLmNvbC1zbS02IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA2IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjdweCkge1xuICAuY29udGFpbmVyIC5jb2wtc20tNyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogNyAtIHZhcigtLWd1dHRlcikpO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTY3cHgpIHtcbiAgLmNvbnRhaW5lciAuY29sLXNtLTgge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDggLSB2YXIoLS1ndXR0ZXIpKTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gIC5jb250YWluZXIgLmNvbC1zbS05IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA5IC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjdweCkge1xuICAuY29udGFpbmVyIC5jb2wtc20tMTAge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEwIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjdweCkge1xuICAuY29udGFpbmVyIC5jb2wtc20tMTEge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDExIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjdweCkge1xuICAuY29udGFpbmVyIC5jb2wtc20tMTIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEyIC0gdmFyKC0tZ3V0dGVyKSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5vZmZzZXQtMSB7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogMSArIHZhcigtLWd1dHRlcikgLyAyKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAub2Zmc2V0LTEge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAvIHZhcigtLWNvbHVtbnMpICogMSArIHZhcigtLWd1dHRlcikgLyAyKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLm9mZnNldC0yIHtcbiAgICBtYXJnaW4tbGVmdDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiAyICsgdmFyKC0tZ3V0dGVyKSAvIDIpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5vZmZzZXQtMiB7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC8gdmFyKC0tY29sdW1ucykgKiAyICsgdmFyKC0tZ3V0dGVyKSAvIDIpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAub2Zmc2V0LTMge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDMgKyB2YXIoLS1ndXR0ZXIpIC8gMik7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLm9mZnNldC0zIHtcbiAgICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLyB2YXIoLS1jb2x1bW5zKSAqIDMgKyB2YXIoLS1ndXR0ZXIpIC8gMik7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5vZmZzZXQtNCB7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogNCArIHZhcigtLWd1dHRlcikgLyAyKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAub2Zmc2V0LTQge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAvIHZhcigtLWNvbHVtbnMpICogNCArIHZhcigtLWd1dHRlcikgLyAyKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLm9mZnNldC01IHtcbiAgICBtYXJnaW4tbGVmdDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA1ICsgdmFyKC0tZ3V0dGVyKSAvIDIpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5vZmZzZXQtNSB7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC8gdmFyKC0tY29sdW1ucykgKiA1ICsgdmFyKC0tZ3V0dGVyKSAvIDIpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAub2Zmc2V0LTYge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDYgKyB2YXIoLS1ndXR0ZXIpIC8gMik7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLm9mZnNldC02IHtcbiAgICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLyB2YXIoLS1jb2x1bW5zKSAqIDYgKyB2YXIoLS1ndXR0ZXIpIC8gMik7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5vZmZzZXQtNyB7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpICogNyArIHZhcigtLWd1dHRlcikgLyAyKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAub2Zmc2V0LTcge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAvIHZhcigtLWNvbHVtbnMpICogNyArIHZhcigtLWd1dHRlcikgLyAyKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLm9mZnNldC04IHtcbiAgICBtYXJnaW4tbGVmdDogY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykgKiA4ICsgdmFyKC0tZ3V0dGVyKSAvIDIpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5vZmZzZXQtOCB7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC8gdmFyKC0tY29sdW1ucykgKiA4ICsgdmFyKC0tZ3V0dGVyKSAvIDIpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciAub2Zmc2V0LTkge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDkgKyB2YXIoLS1ndXR0ZXIpIC8gMik7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIgLm9mZnNldC05IHtcbiAgICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLyB2YXIoLS1jb2x1bW5zKSAqIDkgKyB2YXIoLS1ndXR0ZXIpIC8gMik7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5vZmZzZXQtMTAge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEwICsgdmFyKC0tZ3V0dGVyKSAvIDIpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5vZmZzZXQtMTAge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAvIHZhcigtLWNvbHVtbnMpICogMTAgKyB2YXIoLS1ndXR0ZXIpIC8gMik7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5vZmZzZXQtMTEge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDExICsgdmFyKC0tZ3V0dGVyKSAvIDIpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5vZmZzZXQtMTEge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAvIHZhcigtLWNvbHVtbnMpICogMTEgKyB2YXIoLS1ndXR0ZXIpIC8gMik7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5vZmZzZXQtMTIge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAqIDEyICsgdmFyKC0tZ3V0dGVyKSAvIDIpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIC5vZmZzZXQtMTIge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAvIHZhcigtLWNvbHVtbnMpICogMTIgKyB2YXIoLS1ndXR0ZXIpIC8gMik7XG4gIH1cbn1cblxuLmdyaWQtbGluZXMge1xuICAtLWNvbHVtbnM6IDEyO1xuICAtLWd1dHRlcjogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuZ3JpZC1saW5lcyB7XG4gICAgLS1jb2x1bW5zOiA2O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTY3cHgpIHtcbiAgLmdyaWQtbGluZXMge1xuICAgIC0tY29sdW1uczogNDtcbiAgfVxufVxuLmdyaWQtbGluZXMgc3BhbiB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0tZ3V0dGVyKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSAtICh2YXIoLS1ndXR0ZXIpKSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLWd1dHRlcikgLyAyKTtcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLWd1dHRlcikgLyAyKTtcbn1cblxuLyogQmFzZSBmb250IHNpemUgaW4gcGl4ZWxzICgxcmVtID0gMTZweCkgKi9cbi8qIFRoZSB2aWV3cG9ydCB3aWR0aCBmYWN0b3IgKi9cbi5mcy0tMTQsIC5mcy0tMTQgLi0tZnMge1xuICBmb250LXNpemU6IGNsYW1wKDAuNjg3NXJlbSwgMC42ODc1cmVtICsgMC4xNTYyNXZ3LCAwLjg3NXJlbSk7XG59XG5cbi5mcy0tMTUsIC5mcy0tMTUgLi0tZnMge1xuICBmb250LXNpemU6IGNsYW1wKDAuNjg3NXJlbSwgMC42ODc1cmVtICsgMC4xNTYyNXZ3LCAwLjkzNzVyZW0pO1xufVxuXG4uZnMtLTE2LCAuZnMtLTE2IC4tLWZzIHtcbiAgZm9udC1zaXplOiBjbGFtcCgwLjg3NXJlbSwgMC44NzVyZW0gKyAwLjI2MDQxNjY2Njd2dywgMXJlbSk7XG59XG5cbi5mcy0tMzYsIC5mcy0tMzYgLi0tZnMge1xuICBmb250LXNpemU6IGNsYW1wKDEuNjI1cmVtLCAxLjYyNXJlbSArIDAuNTIwODMzMzMzM3Z3LCAyLjI1cmVtKTtcbn1cblxuLmZzLS03MCwgLmZzLS03MCAuLS1mcyB7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMHJlbSwgMHJlbSArIDMuNjQ1ODMzMzMzM3Z3LCA0LjM3NXJlbSk7XG59XG5cbi5mcy0tNDgsIC5mcy0tNDggLi0tZnMge1xuICBmb250LXNpemU6IGNsYW1wKDIuMjVyZW0sIDIuMjVyZW0gKyAyLjV2dywgM3JlbSk7XG59XG5cbi5mcy0tOTYsIC5mcy0tOTYgLi0tZnMge1xuICBmb250LXNpemU6IGNsYW1wKDIuNzVyZW0sIDIuNzVyZW0gKyAyLjI5MTY2NjY2Njd2dywgNnJlbSk7XG59XG5cbi8qIEdsb2JhbCBWYXJpYWJsZXMgKi9cbjpyb290IHtcbiAgLS1jb2xvci1wcmltYXJ5OiAjM0YzRjNGO1xuICAtLWNvbG9yLXNlY29uZGFyeTogI0I3QjdBNDtcbiAgLS1jb2xvci0zOiAjRThFOEU0O1xuICAtLWNvbG9yLTQ6ICNFREVERTk7XG4gIC0tY29sb3ItNTogI0Y1RjVGNDtcbiAgLS1jb2xvci02OiAjRjlDRTY1O1xuICAtLWNvbG9yLTc6ICNENTQ4MjE7XG4gIC0tY29sb3ItODogI0Q3ODRGQztcbiAgLS1jb2xvci13aGl0ZTogI0ZGRkZGRjtcbiAgLS1jb2xvci13aGl0ZS1hbHdheXM6ICNGRkZGRkY7XG4gIC0tY29sb3ItYmxhY2s6ICMwMDAwMDA7XG4gIC0tc206IDU3NnB4O1xuICAtLW1kOiA3NjhweDtcbiAgLS1sZzogOTkycHg7XG4gIC0teGw6IDEyMDBweDtcbiAgLS14eGw6IDE2MDBweDtcbiAgLS14eHhsOiAxOTIwcHg7XG59XG5cbmJvZHkuZGFyay10aGVtZSwgYm9keTpoYXMoLnBhZ2UtZGFyaykge1xuICAtLWNvbG9yLXByaW1hcnk6ICNGMEYwRUY7XG4gIC0tY29sb3Itc2Vjb25kYXJ5OiAjQzVDNUM1O1xuICAtLWNvbG9yLTM6ICNFOEU4RTQ7XG4gIC0tY29sb3ItNDogIzBEMEQwRDtcbiAgLS1jb2xvci01OiAjRkZGRkZGO1xuICAtLWNvbG9yLTY6ICNGOUNFNjU7XG4gIC0tY29sb3ItNzogI0Q1NDgyMTtcbiAgLS1jb2xvci04OiAjRDc4NEZDO1xuICAtLWNvbG9yLXdoaXRlOiAjMDAwMDAwO1xuICAtLWNvbG9yLXdoaXRlLWFsd2F5czogI0ZGRkZGRjtcbiAgLS1jb2xvci1ibGFjazogI0ZGRkZGRjtcbn1cblxuLmMtLXByaW1hcnkge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5jLS1zZWNvbmRhcnkge1xuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLmMtLXNlY29uZGFyeS1hbHQge1xuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWFsdCk7XG59XG5cbi5jLS0zIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLTMpO1xufVxuXG4uYy0tNCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcbn1cblxuLmMtLTUge1xuICBjb2xvcjogdmFyKC0tY29sb3ItNSk7XG59XG5cbi5jLS02IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLTYpO1xufVxuXG4uYy0tNyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci03KTtcbn1cblxuLmMtLTgge1xuICBjb2xvcjogdmFyKC0tY29sb3ItOCk7XG59XG5cbi5jLS13aGl0ZSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG59XG5cbi5jLS13aGl0ZS1hbHQge1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUtYWx0KTtcbn1cblxuLmMtLWJsYWNrIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcbn1cblxuLmJnLS1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5iZy0tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLmJnLS1zZWNvbmRhcnktYWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWFsdCk7XG59XG5cbi5iZy0tMyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTMpO1xufVxuXG4uYmctLTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcbn1cblxuLmJnLS01IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNSk7XG59XG5cbkBrZXlmcmFtZXMgbG9hZGluZ0luIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA4NSUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbG9hZGluZ091dCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgODUlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDk5LjklIHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICB0byB7XG4gICAgd2lkdGg6IDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbG9hZGluZ091dERpdiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICAzMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbiAgOTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDk5LjklIHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICB0byB7XG4gICAgd2lkdGg6IDAlO1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgfVxufVxuLyogQXRvbXMgKi9cbi4tLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cbi4tLWJ1dHRvbjpob3ZlciBzdmcge1xuICBzdHJva2U6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG59XG4uLS1idXR0b24gLmFycm93LWljb24ge1xuICBtYXJnaW4tdG9wOiAtNHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgcm90YXRlOiAtOTBkZWc7XG59XG5cbi5hcnJvdy1pY29uIHtcbiAgc3Ryb2tlOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmhkci1sb2dvIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2lnbmF0dXJlIHtcbiAgZmlsbDogdmFyKC0tY29sb3ItYmxhY2spO1xuICBzdHJva2U6IHZhcigtLWNvbG9yLWJsYWNrKTtcbn1cblxuLyogTW9sZWN1bGVzICovXG4uaW1hZ2UtdGlsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvdHRvbTogLTI1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiBjbGFtcCgyLjE4NzVyZW0sIDMuNjQ1ODMzMzMzM3Z3LCA0LjM3NXJlbSk7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci00KTtcbiAgYm9yZGVyOiA3cHggc29saWQgdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbiAgei1pbmRleDogMztcbn1cbi5pbWFnZS10aWxlIC5pbm5lciB7XG4gIHdpZHRoOiBjbGFtcCg1LjY4NzVyZW0sIDkuNDc5MTY2NjY2N3Z3LCAxMS4zNzVyZW0pO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gIGJvcmRlci1yYWRpdXM6IGNsYW1wKDJyZW0sIDMuMzMzMzMzMzMzM3Z3LCA0cmVtKTtcbiAgZGlzcGxheTogZmxleDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5pbWFnZS10aWxlIC5pbm5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uc2tpbGwtaXRlbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgbWFyZ2luLWJvdHRvbTogY2xhbXAoMC44NzVyZW0sIDEuMDQxNjY2NjY2N3Z3LCAxLjI1cmVtKTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDg5OXB4KSB7XG4gIC5za2lsbC1pdGVtIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuLnNraWxsLWl0ZW0gLi0tbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIHtcbiAgLnNraWxsLWl0ZW0gLi0tbGVmdCB7XG4gICAgd2lkdGg6IGNsYW1wKDguNzVyZW0sIDEwLjQxNjY2NjY2Njd2dywgMTIuNXJlbSk7XG4gIH1cbn1cbi5za2lsbC1pdGVtIC4tLWxlZnQgc3Ryb25nLCAuc2tpbGwtaXRlbSAuLS1sZWZ0IHNwYW4ge1xuICBsaW5lLWhlaWdodDogMS4xZW07XG59XG4uc2tpbGwtaXRlbSAuLS1yaWdodCB7XG4gIHBhZGRpbmctdG9wOiBjbGFtcCgwLjI2MjVyZW0sIDAuMzEyNXZ3LCAwLjM3NXJlbSk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA4OTlweCkge1xuICAuc2tpbGwtaXRlbSAuLS1yaWdodCB7XG4gICAgcGFkZGluZy10b3A6IGNsYW1wKDAuODc1cmVtLCAxLjA0MTY2NjY2Njd2dywgMS4yNXJlbSk7XG4gICAgcGFkZGluZy1ib3R0b206IGNsYW1wKDAuODc1cmVtLCAxLjA0MTY2NjY2Njd2dywgMS4yNXJlbSk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjZweCkge1xuICAuc2tpbGwtaXRlbSAuLS1yaWdodCB7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIH1cbn1cbi5za2lsbC1pdGVtIC4tLXByb2dyZXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiBjbGFtcCgwLjM1cmVtLCAwLjQxNjY2NjY2Njd2dywgMC41cmVtKTtcbiAgZmxleDogMCAwIGF1dG87XG59XG4uc2tpbGwtaXRlbSAuLS1wcm9ncmVzcyBsaSB7XG4gIGhlaWdodDogOHB4O1xuICB3aWR0aDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA0LjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG4uc2tpbGwtaXRlbSAuLS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzPVwiMVwiXSBsaTpudGgtY2hpbGQoMW4rMikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufVxuLnNraWxsLWl0ZW0gLi0tcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcz1cIjJcIl0gbGk6bnRoLWNoaWxkKDFuKzMpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5za2lsbC1pdGVtIC4tLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3M9XCIzXCJdIGxpOm50aC1jaGlsZCgxbis0KSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG59XG4uc2tpbGwtaXRlbSAuLS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzPVwiNFwiXSBsaTpudGgtY2hpbGQoMW4rNSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufVxuLnNraWxsLWl0ZW0gLi0tcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcz1cIjVcIl0gbGk6bnRoLWNoaWxkKDFuKzYpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5za2lsbC1pdGVtIC4tLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3M9XCI2XCJdIGxpOm50aC1jaGlsZCgxbis3KSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMDBweCk7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhlYWRlciAuaGVhZGVyLS1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbn1cbi5oZWFkZXIgLi0tbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbn1cbi5oZWFkZXIgLi0tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiBjbGFtcCg2LjQzMTI1cmVtLCA3LjY1NjI1dncsIDkuMTg3NXJlbSk7XG59XG4uaGVhZGVyIC4tLXJpZ2h0IC5uYXZpY29uIHtcbiAgdHJhbnNpdGlvbjogMzAwbXMgbGluZWFyIHRvcDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM4cHg7XG4gIHJpZ2h0OiAzMnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MjhweCkge1xuICAuaGVhZGVyIC4tLXJpZ2h0IC4tLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5oZWFkZXIgLi0tcmlnaHQgLi0tYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTBweDtcbiAgfVxuICAuaGVhZGVyIC4tLXJpZ2h0IC5uYXZpY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uaGVhZGVyIHN2ZyB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuLmhlYWRlciAubG9nbyB7XG4gIHdpZHRoOiBjbGFtcCg2LjQzMTI1cmVtLCA3LjY1NjI1dncsIDkuMTg3NXJlbSk7XG4gIHRyYW5zaXRpb246IDMwMG1zIGxpbmVhciB3aWR0aDtcbiAgYXNwZWN0LXJhdGlvOiAxNzUvMTI5O1xuICBoZWlnaHQ6IHVuc2V0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5oZWFkZXIgLm5hdi1tYWluIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICByaWdodDogLTMwMHB4O1xuICAgIHRyYW5zaXRpb246IDEwMG1zIGxpbmVhciByaWdodDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gICAgei1pbmRleDogMjA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICAuaGVhZGVyOmFmdGVyIHtcbiAgICB6LWluZGV4OiAxMTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICByaWdodDogLTEwMHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTMpO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIHRyYW5zaXRpb246IDEwMG1zIGxpbmVhciByaWdodDtcbiAgfVxuICAuaGVhZGVyLm1lbnUtYWN0aXZlIC5uYXYtbWFpbiB7XG4gICAgcmlnaHQ6IDBweDtcbiAgfVxuICAuaGVhZGVyLm1lbnUtYWN0aXZlOmFmdGVyIHtcbiAgICByaWdodDogMDtcbiAgfVxuICAuaGVhZGVyIC5uYXYtbWFpbiB1bCB7XG4gICAgcGFkZGluZzogMCA0MHB4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbiAgLmhlYWRlciAubmF2LW1haW4gdWwgbGkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci0zKTtcbiAgfVxuICAuaGVhZGVyIC5uYXYtbWFpbiB1bCBhIHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaGVhZGVyIC5uYXYtbWFpbiB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5oZWFkZXIgLm5hdi1tYWluIHVsIGxpIHtcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgfVxuICAuaGVhZGVyIC5uYXYtbWFpbiB1bCBhIHtcbiAgICB0ZXh0LXdyYXA6IG5vd3JhcDtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgfVxufVxuXG4uaGFzLXNjcm9sbGVkIC5oZWFkZXIgLmxvZ28ge1xuICB3aWR0aDogY2xhbXAoNC4ycmVtLCA1dncsIDZyZW0pO1xufVxuLmhhcy1zY3JvbGxlZCAuaGVhZGVyIC5uYXZpY29uIHtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMzJweDtcbn1cblxuZm9vdGVyI2Zvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xufVxuZm9vdGVyI2Zvb3RlciAuLS1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5mb290ZXIjZm9vdGVyIC4tLXRvcCB7XG4gIHBhZGRpbmctdG9wOiAyMDBweDtcbn1cbmZvb3RlciNmb290ZXIgLi0tYm90dG9tIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbmZvb3RlciNmb290ZXIgLi0tc3ZnIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbmZvb3RlciNmb290ZXIgLi0tc3ZnIHN2ZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZmlsbDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIHN0cm9rZTogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cbi8qIE9yZ2FuaXNtcyAqL1xuLm9yZ2FuaXNtLTAwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDIwcHg7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG91ci1ncmF5LTMpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLm9yZ2FuaXNtLTAwLmxvYWRlci1jb250ZW50OmhhcygubG9hZGVyKSA+ICo6bm90KC5sb2FkZXIpIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nSW4gMnMgbm9ybWFsIGZvcndhcmRzIGVhc2UtaW4tb3V0O1xufVxuLm9yZ2FuaXNtLTAwIC5sb2FkZXIge1xuICB6LWluZGV4OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDBweDtcbiAgbGVmdDogNDBweDtcbiAgYm90dG9tOiA0MHB4O1xuICByaWdodDogNDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5vcmdhbmlzbS0wMCAubG9hZGVyIGRpdiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDIyMCwgMjE5LCAyMzApIDAlLCByZ2IoMjMwLCAyMzIsIDIzOCkgMTQlLCByZ2IoMjM0LCAyMzgsIDI0MCkgMTAwJSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG91ci1ncmF5LTgpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm9yZ2FuaXNtLTAwIC5sb2FkZXIge1xuICBhbmltYXRpb246IGxvYWRpbmdPdXQgMnMgbm9ybWFsIGZvcndhcmRzIGVhc2UtaW4tb3V0O1xuICBvcGFjaXR5OiAxO1xufVxuLm9yZ2FuaXNtLTAwIC5sb2FkZXIgZGl2IHtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nT3V0RGl2IDJzIG5vcm1hbCBmb3J3YXJkcyBlYXNlLWluLW91dDtcbn1cblxuLmhlYWRlci1ibG9jay0wMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5oZWFkZXItYmxvY2stMDEge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogODAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5oZWFkZXItYmxvY2stMDEgLnJvdyA+IC5jb2w6Zmlyc3QtY2hpbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmhlYWRlci1ibG9jay0wMSAucm93ID4gLmNvbDpmaXJzdC1jaGlsZCBoMSB7XG4gICAgbGVmdDogNjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmhlYWRlci1ibG9jay0wMSAucm93ID4gLmNvbDpmaXJzdC1jaGlsZCBoMSBzcGFuOm50aC1vZi10eXBlKDEpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogLTEwMHB4O1xuICB9XG4gIC5oZWFkZXItYmxvY2stMDEgLnJvdyA+IC5jb2w6Zmlyc3QtY2hpbGQgaDEgc3BhbjpudGgtb2YtdHlwZSgyKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0xMDBweDtcbiAgfVxufVxuLmhlYWRlci1ibG9jay0wMSAuLS1sZWZ0IHtcbiAgbWF4LXdpZHRoOiBjbGFtcCgyMi4zNDM3NXJlbSwgMjguNjQ1ODMzMzMzM3Z3LCAzNC4zNzVyZW0pO1xufVxuLmhlYWRlci1ibG9jay0wMSAuLS1sZWZ0IC4tLXBhZ2UtZG93biB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaGVhZGVyLWJsb2NrLTAxIC4tLWxlZnQgLi0tcGFnZS1kb3duIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5oZWFkZXItYmxvY2stMDEgLi0tbGVmdCAuLS1wYWdlLWRvd24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLmhlYWRlci1ibG9jay0wMSAuLS1sZWZ0IC4tLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG59XG4uaGVhZGVyLWJsb2NrLTAxIC4tLWxlZnQgLi0tdGl0bGUgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG4uaGVhZGVyLWJsb2NrLTAxIC4tLWJ1dHRvbiB7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuLmhlYWRlci1ibG9jay0wMSAuLS1yaWdodCwgLmhlYWRlci1ibG9jay0wMSAuLS1yaWdodCAuLS1ncmlkIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmhlYWRlci1ibG9jay0wMSAuLS1yaWdodCAuLS1saW5rIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhlYWRlci1ibG9jay0wMSAuLS1yaWdodCAuLS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmhlYWRlci1ibG9jay0wMSAuLS1yaWdodCAuLS1ncmlkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKDIuNjI1cmVtLCAzLjEyNXZ3LCAzLjc1cmVtKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSB7XG4gIC5oZWFkZXItYmxvY2stMDEgLi0tcmlnaHQgLi0tZ3JpZCB7XG4gICAgZ2FwOiAxMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuaGVhZGVyLWJsb2NrLTAxIC4tLXJpZ2h0IC4tLWdyaWQgYTpudGgtY2hpbGQoMikge1xuICAgIHBhZGRpbmctdG9wOiAyMDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gIC5oZWFkZXItYmxvY2stMDEgLi0tcmlnaHQgLi0tZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbiAgLmhlYWRlci1ibG9jay0wMSAuLS1yaWdodCAuLS1ncmlkIGE6bnRoLWNoaWxkKDIpIC4tLWltYWdlIHtcbiAgICBvcmRlcjogMjtcbiAgfVxuICAuaGVhZGVyLWJsb2NrLTAxIC4tLXJpZ2h0IC4tLWdyaWQgLi0tbGluayB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gIH1cbiAgLmhlYWRlci1ibG9jay0wMSAuLS1yaWdodCAuLS1ncmlkIC4tLWxpbmsgLi0taW1hZ2UgLi0tbnVtYmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uaGVhZGVyLWJsb2NrLTAxIC4tLXJpZ2h0IC4tLWgyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaGVhZGVyLWJsb2NrLTAxIC4tLXJpZ2h0IC4tLWltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWRlci1ibG9jay0wMSAuLS1yaWdodCAuLS1pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxNjBweDtcbiAgYm94LXNoYWRvdzogMnZ3IDJ2dyAwcHggdmFyKC0tY29sb3ItNCk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIHtcbiAgLmhlYWRlci1ibG9jay0wMSAuLS1yaWdodCAuLS1pbWFnZTphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3R0b206IGNsYW1wKC0yLjYyNXJlbSwgLTMuMTI1dncsIC0zLjc1cmVtKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSB7XG4gIC5oZWFkZXItYmxvY2stMDEgLi0tcmlnaHQgLi0tbnVtYmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtNSU7XG4gICAgcmlnaHQ6IC0xOCU7XG4gIH1cbn1cbi5oZWFkZXItYmxvY2stMDEgLi0tcmlnaHQgLi0tc3VidGl0bGUge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogY2xhbXAoMC40Mzc1cmVtLCAwLjUyMDgzMzMzMzN2dywgMC42MjVyZW0pO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSB7XG4gIC5oZWFkZXItYmxvY2stMDEgLi0tcmlnaHQgLi0tc3VidGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiBjbGFtcCgzLjA2MjVyZW0sIDMuNjQ1ODMzMzMzM3Z3LCA0LjM3NXJlbSk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjdweCkge1xuICAuaGVhZGVyLWJsb2NrLTAxIC4tLXJpZ2h0IC4tLXRpdGxlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSB7XG4gIC5oZWFkZXItYmxvY2stMDEgLi0tcmlnaHQgLi0tZ3JvdXAgLi0tbnVtYmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5pbi1mb2N1cy1ibG9jay0wMiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xuICBwYWRkaW5nLXRvcDogY2xhbXAoNS4yNXJlbSwgNi4yNXZ3LCA3LjVyZW0pO1xuICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoMi42MjVyZW0sIDMuMTI1dncsIDMuNzVyZW0pO1xufVxuLmluLWZvY3VzLWJsb2NrLTAyIC4tLXN1YnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogY2xhbXAoMC44NzVyZW0sIDEuMDQxNjY2NjY2N3Z3LCAxLjI1cmVtKTtcbn1cbi5pbi1mb2N1cy1ibG9jay0wMiAuLS10aXRsZSB7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNsYW1wKDAuODc1cmVtLCAxLjA0MTY2NjY2Njd2dywgMS4yNXJlbSk7XG59XG4uaW4tZm9jdXMtYmxvY2stMDIgLi0tdGV4dCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNsYW1wKDAuODc1cmVtLCAxLjA0MTY2NjY2Njd2dywgMS4yNXJlbSk7XG59XG4uaW4tZm9jdXMtYmxvY2stMDIgLi0tc2lnbmF0dXJlIHN2ZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZmlsbDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG4uaW4tZm9jdXMtYmxvY2stMDIgLi0tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vX0FwcC9CbG9ja3Muc2Nzc1wiLFwid2VicGFjazovLy4vX0FwcC9zY3NzL2dsb2JhbC9fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vX0FwcC9zY3NzL3BhY2thZ2VzL0NTU0NvbHVtblByby9zcmMvQ1NTR3JpZFByby5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9fQXBwL3Njc3MvcGFja2FnZXMvQ1NTQ29sdW1uUHJvL3NyYy9saWIvZ3JpZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9fQXBwL3Njc3MvcGFja2FnZXMvQ1NTQ29sdW1uUHJvL3NyYy9saWIvZ3JpZGxpbmVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL19BcHAvc2Nzcy9wYWNrYWdlcy9Gb250U2NhbGluZ1Byby9zcmMvbGliL2ZvbnQtc2NhbGUuc2Nzc1wiLFwid2VicGFjazovLy4vX0FwcC9zY3NzL2dsb2JhbC9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL19BcHAvc2Nzcy9nbG9iYWwvX2xvYWRpbmcuc2Nzc1wiLFwid2VicGFjazovLy4vX0FwcC9tb2R1bGVzL19hdG9tcy9idXR0b24vX2J1dHRvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9fQXBwL21vZHVsZXMvX2F0b21zL2Fycm93aWNvbi9fYXJyb3dpY29uLnNjc3NcIixcIndlYnBhY2s6Ly8uL19BcHAvbW9kdWxlcy9fYXRvbXMvbG9nby9fbG9nby5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9fQXBwL21vZHVsZXMvX2F0b21zL3NpZ25hdHVyZS9fc2lnbmF0dXJlLnNjc3NcIixcIndlYnBhY2s6Ly8uL19BcHAvbW9kdWxlcy9fbW9sZWN1bGVzL2ltYWdlLXRpbGUvX2ltYWdlLXRpbGUuc2Nzc1wiLFwid2VicGFjazovLy4vX0FwcC9zY3NzL2Jhc2UvX3Jlc3BvbnNpdmV1bml0LnNjc3NcIixcIndlYnBhY2s6Ly8uL19BcHAvbW9kdWxlcy9fbW9sZWN1bGVzL3NraWxsL19za2lsbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9fQXBwL21vZHVsZXMvX21vbGVjdWxlcy9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL19BcHAvbW9kdWxlcy9fbW9sZWN1bGVzL19mb290ZXIuc2Nzc1wiLFwid2VicGFjazovLy4vX0FwcC9tb2R1bGVzL19vcmdhbmlzbXMvb3JnYW5pc20tMDAvX29yZ2FuaXNtLTAwLnNjc3NcIixcIndlYnBhY2s6Ly8uL19BcHAvbW9kdWxlcy9fb3JnYW5pc21zL2hlYWRlci1ibG9jay0wMS9faGVhZGVyLWJsb2NrLTAxLnNjc3NcIixcIndlYnBhY2s6Ly8uL19BcHAvbW9kdWxlcy9fb3JnYW5pc21zL2luLWZvY3VzLWJsb2NrLTAyL19pbi1mb2N1cy1ibG9jay0wMi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVlBO0VBQ0ksU0FBQTtBQVZKO0FBWUk7RUFDSSxrQkFBQTtBQVZSOztBQWNBO0VBQ0ksZUFBQTtBQVhKO0FBYUk7RUFISjtJQUlRLGVBQUE7RUFWTjtBQUNG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SHlNZDtBQUNGO0FHNU1RO0VBQ0k7SUFDSSxzREFBQTtFSDhNZDtBQUNGO0FHak5RO0VBQ0k7SUFDSSxzREFBQTtFSG1OZDtBQUNGO0FHdE5RO0VBQ0k7SUFDSSxzREFBQTtFSHdOZDtBQUNGO0FHM05RO0VBQ0k7SUFDSSxzREFBQTtFSDZOZDtBQUNGO0FHaE9RO0VBQ0k7SUFDSSxzREFBQTtFSGtPZDtBQUNGO0FHck9RO0VBQ0k7SUFDSSxzREFBQTtFSHVPZDtBQUNGO0FHMU9RO0VBQ0k7SUFDSSxzREFBQTtFSDRPZDtBQUNGO0FHL09RO0VBQ0k7SUFDSSxzREFBQTtFSGlQZDtBQUNGO0FHcFBRO0VBQ0k7SUFDSSx1REFBQTtFSHNQZDtBQUNGO0FHelBRO0VBQ0k7SUFDSSx1REFBQTtFSDJQZDtBQUNGO0FHOVBRO0VBQ0k7SUFDSSx1REFBQTtFSGdRZDtBQUNGO0FHMVBRO0VBQ0k7SUFDSSxzREFBQTtFSDRQZDtBQUNGO0FHL1BRO0VBQ0k7SUFDSSxzREFBQTtFSGlRZDtBQUNGO0FHcFFRO0VBQ0k7SUFDSSxzREFBQTtFSHNRZDtBQUNGO0FHelFRO0VBQ0k7SUFDSSxzREFBQTtFSDJRZDtBQUNGO0FHOVFRO0VBQ0k7SUFDSSxzREFBQTtFSGdSZDtBQUNGO0FHblJRO0VBQ0k7SUFDSSxzREFBQTtFSHFSZDtBQUNGO0FHeFJRO0VBQ0k7SUFDSSxzREFBQTtFSDBSZDtBQUNGO0FHN1JRO0VBQ0k7SUFDSSxzREFBQTtFSCtSZDtBQUNGO0FHbFNRO0VBQ0k7SUFDSSxzREFBQTtFSG9TZDtBQUNGO0FHdlNRO0VBQ0k7SUFDSSx1REFBQTtFSHlTZDtBQUNGO0FHNVNRO0VBQ0k7SUFDSSx1REFBQTtFSDhTZDtBQUNGO0FHalRRO0VBQ0k7SUFDSSx1REFBQTtFSG1UZDtBQUNGO0FHN1NRO0VBQ0k7SUFDSSxzREFBQTtFSCtTZDtBQUNGO0FHbFRRO0VBQ0k7SUFDSSxzREFBQTtFSG9UZDtBQUNGO0FHdlRRO0VBQ0k7SUFDSSxzREFBQTtFSHlUZDtBQUNGO0FHNVRRO0VBQ0k7SUFDSSxzREFBQTtFSDhUZDtBQUNGO0FHalVRO0VBQ0k7SUFDSSxzREFBQTtFSG1VZDtBQUNGO0FHdFVRO0VBQ0k7SUFDSSxzREFBQTtFSHdVZDtBQUNGO0FHM1VRO0VBQ0k7SUFDSSxzREFBQTtFSDZVZDtBQUNGO0FHaFZRO0VBQ0k7SUFDSSxzREFBQTtFSGtWZDtBQUNGO0FHclZRO0VBQ0k7SUFDSSxzREFBQTtFSHVWZDtBQUNGO0FHMVZRO0VBQ0k7SUFDSSx1REFBQTtFSDRWZDtBQUNGO0FHL1ZRO0VBQ0k7SUFDSSx1REFBQTtFSGlXZDtBQUNGO0FHcFdRO0VBQ0k7SUFDSSx1REFBQTtFSHNXZDtBQUNGO0FHaFdRO0VBQ0k7SUFDSSxzREFBQTtFSGtXZDtBQUNGO0FHcldRO0VBQ0k7SUFDSSxzREFBQTtFSHVXZDtBQUNGO0FHMVdRO0VBQ0k7SUFDSSxzREFBQTtFSDRXZDtBQUNGO0FHL1dRO0VBQ0k7SUFDSSxzREFBQTtFSGlYZDtBQUNGO0FHcFhRO0VBQ0k7SUFDSSxzREFBQTtFSHNYZDtBQUNGO0FHelhRO0VBQ0k7SUFDSSxzREFBQTtFSDJYZDtBQUNGO0FHOVhRO0VBQ0k7SUFDSSxzREFBQTtFSGdZZDtBQUNGO0FHbllRO0VBQ0k7SUFDSSxzREFBQTtFSHFZZDtBQUNGO0FHeFlRO0VBQ0k7SUFDSSxzREFBQTtFSDBZZDtBQUNGO0FHN1lRO0VBQ0k7SUFDSSx1REFBQTtFSCtZZDtBQUNGO0FHbFpRO0VBQ0k7SUFDSSx1REFBQTtFSG9aZDtBQUNGO0FHdlpRO0VBQ0k7SUFDSSx1REFBQTtFSHlaZDtBQUNGO0FHblpRO0VBQ0k7SUFDSSxzREFBQTtFSHFaZDtBQUNGO0FHeFpRO0VBQ0k7SUFDSSxzREFBQTtFSDBaZDtBQUNGO0FHN1pRO0VBQ0k7SUFDSSxzREFBQTtFSCtaZDtBQUNGO0FHbGFRO0VBQ0k7SUFDSSxzREFBQTtFSG9hZDtBQUNGO0FHdmFRO0VBQ0k7SUFDSSxzREFBQTtFSHlhZDtBQUNGO0FHNWFRO0VBQ0k7SUFDSSxzREFBQTtFSDhhZDtBQUNGO0FHamJRO0VBQ0k7SUFDSSxzREFBQTtFSG1iZDtBQUNGO0FHdGJRO0VBQ0k7SUFDSSxzREFBQTtFSHdiZDtBQUNGO0FHM2JRO0VBQ0k7SUFDSSxzREFBQTtFSDZiZDtBQUNGO0FHaGNRO0VBQ0k7SUFDSSx1REFBQTtFSGtjZDtBQUNGO0FHcmNRO0VBQ0k7SUFDSSx1REFBQTtFSHVjZDtBQUNGO0FHMWNRO0VBQ0k7SUFDSSx1REFBQTtFSDRjZDtBQUNGO0FHdGNRO0VBQ0k7SUFDSSxnRUFBQTtFSHdjZDtBQUNGO0FHcmNRO0VBQ0k7SUFDSSwrREFBQTtFSHVjZDtBQUNGO0FHaGRRO0VBQ0k7SUFDSSxnRUFBQTtFSGtkZDtBQUNGO0FHL2NRO0VBQ0k7SUFDSSwrREFBQTtFSGlkZDtBQUNGO0FHMWRRO0VBQ0k7SUFDSSxnRUFBQTtFSDRkZDtBQUNGO0FHemRRO0VBQ0k7SUFDSSwrREFBQTtFSDJkZDtBQUNGO0FHcGVRO0VBQ0k7SUFDSSxnRUFBQTtFSHNlZDtBQUNGO0FHbmVRO0VBQ0k7SUFDSSwrREFBQTtFSHFlZDtBQUNGO0FHOWVRO0VBQ0k7SUFDSSxnRUFBQTtFSGdmZDtBQUNGO0FHN2VRO0VBQ0k7SUFDSSwrREFBQTtFSCtlZDtBQUNGO0FHeGZRO0VBQ0k7SUFDSSxnRUFBQTtFSDBmZDtBQUNGO0FHdmZRO0VBQ0k7SUFDSSwrREFBQTtFSHlmZDtBQUNGO0FHbGdCUTtFQUNJO0lBQ0ksZ0VBQUE7RUhvZ0JkO0FBQ0Y7QUdqZ0JRO0VBQ0k7SUFDSSwrREFBQTtFSG1nQmQ7QUFDRjtBRzVnQlE7RUFDSTtJQUNJLGdFQUFBO0VIOGdCZDtBQUNGO0FHM2dCUTtFQUNJO0lBQ0ksK0RBQUE7RUg2Z0JkO0FBQ0Y7QUd0aEJRO0VBQ0k7SUFDSSxnRUFBQTtFSHdoQmQ7QUFDRjtBR3JoQlE7RUFDSTtJQUNJLCtEQUFBO0VIdWhCZDtBQUNGO0FHaGlCUTtFQUNJO0lBQ0ksaUVBQUE7RUhraUJkO0FBQ0Y7QUcvaEJRO0VBQ0k7SUFDSSxnRUFBQTtFSGlpQmQ7QUFDRjtBRzFpQlE7RUFDSTtJQUNJLGlFQUFBO0VINGlCZDtBQUNGO0FHemlCUTtFQUNJO0lBQ0ksZ0VBQUE7RUgyaUJkO0FB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QSxjQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxzQ0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJTG5JbEIsNENBQUE7RWI2eENBO0FBQ0Y7QWtCcHBDWTtFQURKO0lBRVEsa0JBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtFbEJ1cENkO0FBQ0Y7QWtCcHBDUTtFQUNJLGlCQUFBO0VMbEpWLHlEQUFBO0FieXlDRjtBa0JycENZO0VBSEo7SUxqSk4sdURBQUE7RWI2eUNBO0FBQ0Y7QWtCbnBDWTtFQURKO0lBRVEsb0JBQUE7RWxCc3BDZDtBQUNGO0FrQm5wQ1E7RUFFUTtJQUNJLGFBQUE7RWxCb3BDbEI7QUFDRjs7QW1CNzBDQTtFQUNJLGdDQUFBO0VOb0JGLDJDQUFBO0VBQUEsaURBQUE7QWI4ekNGO0FtQjkwQ0k7RU5nQkYsdURBQUE7QWJpMENGO0FtQjcwQ0k7RUFDSSxnQkFBQTtFTldOLHVEQUFBO0FicTBDRjtBbUI1MENJO0VBQ0ksZ0JBQUE7RU5NTix1REFBQTtBYnkwQ0Y7QW1CMTBDUTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtBbkI0MENaO0FtQnYwQ0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FuQnkwQ1JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmUrVmlldG5hbStQcm86d2dodEA0MDA7NzAwJmZhbWlseT1QbGF5ZmFpcitEaXNwbGF5JmRpc3BsYXk9c3dhcCcpO1xcblxcbiRmb250LXNpemVzOiAoXFxuICAgIChtaW4tZm9udC1zaXplLXB4OiAxMSwgbWF4LWZvbnQtc2l6ZS1weDogMTQsIGZvbnQtc2NhbGU6IDMpLCAvLyAxMyAvLyAuZnMtLTEzXFxuICAgIChtaW4tZm9udC1zaXplLXB4OiAxMSwgbWF4LWZvbnQtc2l6ZS1weDogMTUsIGZvbnQtc2NhbGU6IDMpLCAvLyAxNCAvLyAuZnMtLTE0XFxuICAgIChtaW4tZm9udC1zaXplLXB4OiAxNCwgbWF4LWZvbnQtc2l6ZS1weDogMTYsIGZvbnQtc2NhbGU6IDUpLCAvLyAxNiAvLyAuZnMtLTE2XFxuICAgIChtaW4tZm9udC1zaXplLXB4OiAyNiwgbWF4LWZvbnQtc2l6ZS1weDogMzYsIGZvbnQtc2NhbGU6IDEwKSwgLy8gMTYgLy8gLmZzLS0zNlxcbiAgICAobWluLWZvbnQtc2l6ZS1weDogMCwgbWF4LWZvbnQtc2l6ZS1weDogNzAsIGZvbnQtc2NhbGU6IDcwKSwgLy8gMjAgLy8gLmZzLS03MFxcbiAgICAobWluLWZvbnQtc2l6ZS1weDogMzYsIG1heC1mb250LXNpemUtcHg6IDQ4LCBmb250LXNjYWxlOiA0OCksIC8vIDI2IC8vIC5mcy0tNDhcXG4gICAgKG1pbi1mb250LXNpemUtcHg6IDQ0LCBtYXgtZm9udC1zaXplLXB4OiA5NiwgZm9udC1zY2FsZTogNDQpLCAvLyAxMjAgLy8gLmZzLS0xMjBcXG4pO1xcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIC5jb250ZW50LXdyYXBwZXIge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICB9XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkge1xcbiAgICAgICAgcGFkZGluZzogMCA0MHB4O1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAgICAgcGFkZGluZzogMCA2MHB4O1xcbiAgICB9XFxuXFxuICBcXG59XFxuXFxuXFxuXFxuLyogQmFzZSBWYXJpYWJsZXMgKi9cXG5AaW1wb3J0IFxcXCJzY3NzL2Jhc2UvcmVzcG9uc2l2ZXVuaXRcXFwiO1xcblxcbkBpbXBvcnQgXFxcInNjc3MvZ2xvYmFsL2ZvbnRzXFxcIjtcXG4gXFxuXFxuXFxuQGltcG9ydCBcXFwic2Nzcy9wYWNrYWdlcy9DU1NDb2x1bW5Qcm8vc3JjL0NTU0dyaWRQcm8uc2Nzc1xcXCI7XFxuQGltcG9ydCBcXFwic2Nzcy9wYWNrYWdlcy9Gb250U2NhbGluZ1Byby9zcmMvRm9udFNjYWxpbmdQcm8uc2Nzc1xcXCI7XFxuXFxuXFxuXFxuLyogR2xvYmFsIFZhcmlhYmxlcyAqL1xcbkBpbXBvcnQgXFxcInNjc3MvZ2xvYmFsL3ZhcmlhYmxlc1xcXCI7XFxuQGltcG9ydCBcXFwic2Nzcy9nbG9iYWwvbG9hZGluZ1xcXCI7XFxuXFxuLyogQXRvbXMgKi9cXG5AaW1wb3J0IFxcXCJtb2R1bGVzL19hdG9tcy9idXR0b24vX2J1dHRvblxcXCI7XFxuQGltcG9ydCBcXFwibW9kdWxlcy9fYXRvbXMvYXJyb3dpY29uL19hcnJvd2ljb25cXFwiO1xcbkBpbXBvcnQgXFxcIm1vZHVsZXMvX2F0b21zL2xvZ28vX2xvZ29cXFwiO1xcbkBpbXBvcnQgXFxcIm1vZHVsZXMvX2F0b21zL3NpZ25hdHVyZS9fc2lnbmF0dXJlXFxcIjtcXG5cXG4vKiBNb2xlY3VsZXMgKi9cXG5AaW1wb3J0IFxcXCJtb2R1bGVzL19tb2xlY3VsZXMvaW1hZ2UtdGlsZS9pbWFnZS10aWxlXFxcIjtcXG5AaW1wb3J0IFxcXCJtb2R1bGVzL19tb2xlY3VsZXMvc2tpbGwvc2tpbGxcXFwiO1xcbkBpbXBvcnQgXFxcIm1vZHVsZXMvX21vbGVjdWxlcy9faGVhZGVyXFxcIjtcXG5AaW1wb3J0IFxcXCJtb2R1bGVzL19tb2xlY3VsZXMvX2Zvb3RlclxcXCI7XFxuXFxuXFxuLyogT3JnYW5pc21zICovXFxuQGltcG9ydCBcXFwibW9kdWxlcy9fb3JnYW5pc21zL29yZ2FuaXNtLTAwL29yZ2FuaXNtLTAwXFxcIjtcXG5AaW1wb3J0IFxcXCJtb2R1bGVzL19vcmdhbmlzbXMvaGVhZGVyLWJsb2NrLTAxL2hlYWRlci1ibG9jay0wMVxcXCI7XFxuQGltcG9ydCBcXFwibW9kdWxlcy9fb3JnYW5pc21zL2luLWZvY3VzLWJsb2NrLTAyL2luLWZvY3VzLWJsb2NrLTAyXFxcIjtcXG5cIixcIi8qIENvbnRhaW5lciBVbml0IFJlc3BvbnNpdmUgRm9udHMgKi9cXG5cXG5cXG4uZi0tbGlnaHQge1xcbiAgICBmb250LWZhbWlseTogXFxcIkJlIFZpZXRuYW0gUHJvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4uZi0tcmVndWxhciB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQmUgVmlldG5hbSBQcm9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi5mLS1zZW1pYm9sZCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQmUgVmlldG5hbSBQcm9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi5mLS1ib2xkIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJCZSBWaWV0bmFtIFByb1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLnR0LS11cHBlcmNhc2Uge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG46d2hlcmUoc3Ryb25nKSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogXFxcIkJlIFZpZXRuYW0gUHJvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBsaW5lLWhlaWdodDogMS43ZW07XFxufVxcblxcbi4tLXN1YnRpdGxlIHtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuN2VtO1xcbn1cXG5cXG4uLS1oMSwgLi0taDIsIC4tLWgzIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQbGF5ZmFpciBEaXNwbGF5XFxcIiwgc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG5cXG59XFxuXFxuLi0taDEge1xcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XFxufVxcblxcbi4tLWgyIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMWVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wNGVtO1xcbn1cXG5cXG4uLS1oMyB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjFlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDRlbTtcXG59XFxuXFxuYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbiAgICB9XFxufVxcblxcblxcblwiLFwiJGNvbHVtbnM6IDEyO1xcbiRndXR0ZXI6IDQwcHg7XFxuJGNvbnRhaW5lcjogMTY4MHB4ICFkZWZhdWx0O1xcblxcblxcbjpyb290IHtcXG4gIC0tc206IDU3NnB4O1xcbiAgLS1tZDogNzY4cHg7XFxuICAtLWxnOiA5OTJweDtcXG4gIC0teGw6IDEyMDBweDtcXG4gIC0teHhsOiAxNjAwcHg7XFxuICAtLXh4eGw6IDE5MjBweDtcXG59XFxuXFxuQGltcG9ydCAnbGliL2dyaWQnO1xcbkBpbXBvcnQgJ2xpYi9ncmlkbGluZXMnO1wiLFwiLmNvbnRhaW5lciB7XFxuICAgIC0tY29sdW1uczogI3skY29sdW1uc307XFxuICAgIC0tZ3V0dGVyOiAjeyRndXR0ZXJ9O1xcbiAgICAtLWNvbnRhaW5lcjogI3skY29udGFpbmVyfTtcXG5cXG4gICAgJjpub3QoLmZsdWlkKSB7XFxuICAgICAgICBtYXgtd2lkdGg6IHZhcigtLWNvbnRhaW5lcik7XFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgfVxcblxcbiAgICAvLyBSZWR1Y2UgR3JpZCB0byA2IGNvbHVtbnMgb24gbWVkaXVtIHNjcmVlbnNcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcXG4gICAgICAgIC0tY29sdW1uczogNjtcXG4gICAgfVxcblxcbiAgICAvLyBSZWR1Y2UgR3JpZCB0byA0IGNvbHVtbnMgb24gc21hbGwgc2NyZWVuc1xcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTY3cHgpIHtcXG4gICAgICAgIC0tY29sdW1uczogNDtcXG4gICAgfVxcblxcbiAgICAucm93IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tZ3V0dGVyKSAvIC0yKTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1ndXR0ZXIpIC8gLTIpO1xcbiAgICB9XFxuICBcXG4gICAgLy8gTW9iaWxlIEZpcnN0IEFwcHJvYWNoXFxuICAgIC5jb2wge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tZ3V0dGVyKSAvIDIpO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLWd1dHRlcikgLyAyKTtcXG5cXG4gICAgICAgIC8vIElmIG5vdCBhbnkgYWRkaXRpb25hbCBjb2x1bW4gb3B0aW9uc1xcbiAgICAgICAgJjpub3QoW2NsYXNzKj0nY29sLSddKSB7XFxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSB7XFxuICAgICAgICAgICAgICAgIGZsZXg6IDEgMDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAvLyBJZiBtb2JpbGUsIG1ha2UgZnVsbCB3aWR0aFxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU2N3B4KSB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gQ29sdW1uc1xcbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRjb2x1bW5zIHtcXG4gICAgICAgIC8vIFN0YW5kYXJkIERlc2t0b3AgU2l6aW5nXFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gICAgICAgICAgICAuY29sLSN7JGl9IHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoY2FsYyhjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSkgKiAjeyRpfSkgLSB2YXIoLS1ndXR0ZXIpKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkY29sdW1ucyB7XFxuXFxuICAgICAgICAvLyBTdGFuZGFyZCBUYWJsZXQgU2l6aW5nXFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xcbiAgICAgICAgICAgIC5jb2wtI3skaX0ge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyhjYWxjKGNhbGMoNTAlIC8gdmFyKC0tY29sdW1ucykpICogI3skaX0pIC0gdmFyKC0tZ3V0dGVyKSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGNvbHVtbnMge1xcbiAgICAgICAgLy8gU3RhbmRhcmQgVGFibGV0IFNpemluZyAobWQgTW9kaWZpZXIpXFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgICAgICAgICAuY29sLWxnLSN7JGl9IHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoY2FsYyhjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSkgKiAjeyRpfSkgLSB2YXIoLS1ndXR0ZXIpKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkY29sdW1ucyB7XFxuICAgICAgICAvLyBTdGFuZGFyZCBUYWJsZXQgU2l6aW5nIChtZCBNb2RpZmllcilcXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAgMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XFxuICAgICAgICAgICAgLmNvbC14bC0jeyRpfSB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKGNhbGMoY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykpICogI3skaX0pIC0gdmFyKC0tZ3V0dGVyKSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGNvbHVtbnMge1xcbiAgICAgICAgLy8gU3RhbmRhcmQgVGFibGV0IFNpemluZyAobWQgTW9kaWZpZXIpXFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogIDE2MDBweCkgYW5kIChtYXgtd2lkdGg6IDE5MjBweCkge1xcbiAgICAgICAgICAgIC5jb2wteHhsLSN7JGl9IHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoY2FsYyhjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSkgKiAjeyRpfSkgLSB2YXIoLS1ndXR0ZXIpKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkY29sdW1ucyB7XFxuICAgICAgICAvLyBTdGFuZGFyZCBUYWJsZXQgU2l6aW5nIChtZCBNb2RpZmllcilcXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxuICAgICAgICAgICAgLmNvbC1tZC0jeyRpfSB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKGNhbGMoY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykpICogI3skaX0pIC0gdmFyKC0tZ3V0dGVyKSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGNvbHVtbnMge1xcbiAgICAgICAgLy8gU3RhbmRhcmQgTW9iaWxlIFNpemluZyAoc20gTW9kaWZpZXIpXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTY3cHgpIHtcXG4gICAgICAgICAgICAuY29sLXNtLSN7JGl9IHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoY2FsYyhjYWxjKDEwMCUgLyB2YXIoLS1jb2x1bW5zKSkgKiAjeyRpfSkgLSB2YXIoLS1ndXR0ZXIpKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gT2Zmc2V0c1xcbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRjb2x1bW5zIHtcXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgICAgICAgICAgIC5vZmZzZXQtI3skaX0ge1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyhjYWxjKGNhbGMoY2FsYygxMDAlIC8gdmFyKC0tY29sdW1ucykpICogI3skaX0pKSArIHZhcigtLWd1dHRlcikgLyAyKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xcbiAgICAgICAgICAgIC5vZmZzZXQtI3skaX0ge1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyhjYWxjKGNhbGMoY2FsYyg1MCUgLyB2YXIoLS1jb2x1bW5zKSkgKiAjeyRpfSkpICsgdmFyKC0tZ3V0dGVyKSAvIDIpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcIi5ncmlkLWxpbmVzIHtcXG4gICAgLS1jb2x1bW5zOiAjeyRjb2x1bW5zfTtcXG4gICAgLS1ndXR0ZXI6ICN7JGd1dHRlcn07XFxuICAgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaW5zZXQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcblxcbiAgICAvLyBSZWR1Y2UgR3JpZCB0byA2IGNvbHVtbnMgb24gbWVkaXVtIHNjcmVlbnNcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcXG4gICAgICAgIC0tY29sdW1uczogNjtcXG4gICAgfVxcblxcbiAgICAvLyBSZWR1Y2UgR3JpZCB0byA0IGNvbHVtbnMgb24gc21hbGwgc2NyZWVuc1xcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTY3cHgpIHtcXG4gICAgICAgIC0tY29sdW1uczogNDtcXG4gICAgfVxcblxcbiAgICBzcGFuIHtcXG4gICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLWd1dHRlcik7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiBjYWxjKGNhbGMoMTAwJSAvIHZhcigtLWNvbHVtbnMpKSAtIGNhbGModmFyKC0tZ3V0dGVyKSkpO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjA1KTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLWd1dHRlcikgLyAyKTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1ndXR0ZXIpIC8gMik7XFxuICAgIH1cXG59XFxuXCIsXCJAdXNlICdzYXNzOm1hdGgnO1xcblxcbiRiYXNlLWZvbnQtc2l6ZTogMTYgIWRlZmF1bHQ7IC8qIEJhc2UgZm9udCBzaXplIGluIHBpeGVscyAoMXJlbSA9IDE2cHgpICovXFxuJHZ3LWZhY3RvcjogMC41dncgICFkZWZhdWx0OyAvKiBUaGUgdmlld3BvcnQgd2lkdGggZmFjdG9yICovXFxuXFxuLy8gJGZvbnQtc2l6ZXM6IChcXG4vLyAgIChtaW4tZm9udC1zaXplLXB4OiAxMywgbWF4LWZvbnQtc2l6ZS1weDogMTYsIGZvbnQtc2NhbGU6IDEyKSxcXG4vLyAgIChtaW4tZm9udC1zaXplLXB4OiAxNiwgbWF4LWZvbnQtc2l6ZS1weDogMjQsIGZvbnQtc2NhbGU6IDE2KSxcXG4vLyAgIChtaW4tZm9udC1zaXplLXB4OiAyMSwgbWF4LWZvbnQtc2l6ZS1weDogNDYsIGZvbnQtc2NhbGU6IDQwKSxcXG4vLyAgIChtaW4tZm9udC1zaXplLXB4OiAyNCwgbWF4LWZvbnQtc2l6ZS1weDogNjQsIGZvbnQtc2NhbGU6IDYwKVxcbi8vICkgIWRlZmF1bHQ7XFxuXFxuLy8gQ29udmVydCBQWCB0byBWV1xcbkBmdW5jdGlvbiBweC10by12dygkcHgsICR2aWV3cG9ydC13aWR0aDogMTkyMCkge1xcbiAgICBAcmV0dXJuIChtYXRoLmRpdigkcHgsICR2aWV3cG9ydC13aWR0aCkpICogMTAwICogMXZ3O1xcbiAgfVxcblxcblxcbi8vIExvb3BcXG5AZWFjaCAkc2l6ZSBpbiAkZm9udC1zaXplcyB7XFxuICAkbWluLWZvbnQtc2l6ZS1weDogbWFwLWdldCgkc2l6ZSwgbWluLWZvbnQtc2l6ZS1weCk7XFxuICAkbWF4LWZvbnQtc2l6ZS1weDogbWFwLWdldCgkc2l6ZSwgbWF4LWZvbnQtc2l6ZS1weCk7XFxuICAkZm9udC1zY2FsZTogbWFwLWdldCgkc2l6ZSwgZm9udC1zY2FsZSk7XFxuICBcXG4gIC8vIENvbnZlcnQgcGl4ZWwgdmFsdWVzIHRvIHJlbVxcbiAgJG1pbi1yZW06ICN7bWF0aC5kaXYoJG1pbi1mb250LXNpemUtcHgsICRiYXNlLWZvbnQtc2l6ZSl9cmVtO1xcbiAgJG1heC1yZW06ICN7bWF0aC5kaXYoJG1heC1mb250LXNpemUtcHgsICRiYXNlLWZvbnQtc2l6ZSl9cmVtO1xcblxcbiAgLy8gY3JlYXRlIGZzLS0gY2xhc3NuYW1lIGJhc2VkIG9uIG1heCBmb250XFxuICAuZnMtLSN7JG1heC1mb250LXNpemUtcHh9IHtcXG4gICAgJiwgLi0tZnMgeyBcXG4gICAgICBmb250LXNpemU6IGNsYW1wKFxcbiAgICAgICN7JG1pbi1yZW19LFxcbiAgICAgIGNhbGMoI3skbWluLXJlbX0gKyAje3B4LXRvLXZ3KCRmb250LXNjYWxlKX0pLFxcbiAgICAgICN7JG1heC1yZW19XFxuICAgICk7XFxuICAgIH1cXG4gICAgXFxuICB9XFxufVxcblwiLFwiOnJvb3Qge1xcbiAgICAtLWNvbG9yLXByaW1hcnk6ICMzRjNGM0Y7XFxuICAgIC0tY29sb3Itc2Vjb25kYXJ5OiAjQjdCN0E0O1xcbiAgICAtLWNvbG9yLTM6ICNFOEU4RTQ7XFxuICAgIC0tY29sb3ItNDogI0VERURFOTtcXG4gICAgLS1jb2xvci01OiAjRjVGNUY0O1xcbiAgICAtLWNvbG9yLTY6ICNGOUNFNjU7XFxuICAgIC0tY29sb3ItNzogI0Q1NDgyMTtcXG4gICAgLS1jb2xvci04OiAjRDc4NEZDO1xcbiAgICAtLWNvbG9yLXdoaXRlOiAjRkZGRkZGO1xcbiAgICAtLWNvbG9yLXdoaXRlLWFsd2F5czogI0ZGRkZGRjtcXG4gICAgLS1jb2xvci1ibGFjazogIzAwMDAwMDtcXG5cXG4gICAgLS1zbTogNTc2cHg7XFxuICAgIC0tbWQ6IDc2OHB4O1xcbiAgICAtLWxnOiA5OTJweDsgXFxuICAgIC0teGw6IDEyMDBweDtcXG4gICAgLS14eGw6IDE2MDBweDtcXG4gICAgLS14eHhsOiAxOTIwcHg7XFxuXFxufVxcblxcbmJvZHkuZGFyay10aGVtZSwgYm9keTpoYXMoLnBhZ2UtZGFyaykgeyBcXG4gICAgLS1jb2xvci1wcmltYXJ5OiAjRjBGMEVGO1xcbiAgICAtLWNvbG9yLXNlY29uZGFyeTogI0M1QzVDNTtcXG4gICAgLS1jb2xvci0zOiAjRThFOEU0O1xcbiAgICAtLWNvbG9yLTQ6ICMwRDBEMEQ7IFxcbiAgICAtLWNvbG9yLTU6ICNGRkZGRkY7XFxuICAgIC0tY29sb3ItNjogI0Y5Q0U2NTtcXG4gICAgLS1jb2xvci03OiAjRDU0ODIxO1xcbiAgICAtLWNvbG9yLTg6ICNENzg0RkM7XFxuICAgIC0tY29sb3Itd2hpdGU6ICMwMDAwMDA7XFxuICAgIC0tY29sb3Itd2hpdGUtYWx3YXlzOiAjRkZGRkZGO1xcbiAgICAtLWNvbG9yLWJsYWNrOiAjRkZGRkZGO1xcbn0gXFxuXFxuXFxuLmMtLXByaW1hcnkge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxufVxcblxcbi5jLS1zZWNvbmRhcnkge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG59XFxuXFxuLmMtLXNlY29uZGFyeS1hbHQge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWFsdCk7XFxufVxcblxcbi5jLS0zIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLTMpO1xcbn1cXG5cXG4uYy0tNCB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG59XFxuXFxuLmMtLTUge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItNSk7XFxufVxcblxcbi5jLS02IHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLTYpO1xcbn1cXG5cXG4uYy0tNyB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci03KTtcXG59XFxuXFxuLmMtLTgge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItOCk7XFxufVxcblxcbi5jLS13aGl0ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxufVxcblxcbi5jLS13aGl0ZS1hbHQge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUtYWx0KTtcXG59XFxuXFxuLmMtLWJsYWNrIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXG59XFxuXFxuLmJnLS1wcmltYXJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxufVxcblxcbi5iZy0tc2Vjb25kYXJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG59XFxuXFxuLmJnLS1zZWNvbmRhcnktYWx0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWFsdCk7XFxufVxcblxcbi5iZy0tMyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTMpO1xcbn1cXG5cXG4uYmctLTQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG59XFxuXFxuLmJnLS01IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNSk7XFxufVxcblxcblxcblxcblxcblxcblwiLFwiQGtleWZyYW1lcyBsb2FkaW5nSW4ge1xcbiAgICBmcm9tIHtcXG4gICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDg1JSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufSAgXFxuXFxuQGtleWZyYW1lcyBsb2FkaW5nT3V0IHtcXG4gICAgZnJvbSB7XFxuICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgXFxuICAgIH1cXG4gICAgODUlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgXFxuICAgIH1cXG4gICAgOTkuOSUge1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgd2lkdGg6IDAlO1xcbiAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBsb2FkaW5nT3V0RGl2IHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBvcGFjaXR5OiAwLjcgIFxcbiAgICB9XFxuICAgIDMwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICAgIDYwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwLjc7XFxuICAgIH1cXG4gICAgOTAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgOTkuOSUge1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgd2lkdGg6IDAlO1xcbiAgICAgICBvcGFjaXR5OiAwLjk7XFxuICAgIH1cXG59XCIsXCIuLS1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgc3ZnIHtcXG4gICAgICAgICAgICBzdHJva2U6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuYXJyb3ctaWNvbiB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtNHB4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgICAgICByb3RhdGU6IC05MGRlZztcXG4gICAgfVxcbn1cIixcIi5hcnJvdy1pY29uIHtcXG4gICAgc3Ryb2tlOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG59XCIsXCIuaGRyLWxvZ28ge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbi5sb2dvIHtcXG4gICAgXFxufVwiLFwiLnNpZ25hdHVyZSB7XFxuICAgIGZpbGw6IHZhcigtLWNvbG9yLWJsYWNrKTtcXG4gICAgc3Ryb2tlOiB2YXIoLS1jb2xvci1ibGFjayk7XFxufVwiLFwiLmltYWdlLXRpbGUge1xcbiAgICAvLyBCbG9jayBQb3NpdGlvbmluZ1xcblxcbiAgICAmOmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAxMCU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgICAgYm90dG9tOiAtMjUlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgICBAaW5jbHVkZSBfKCd3aWR0aCcsIDAuNSwgNzApO1xcbiAgICAgICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci00KTtcXG4gICAgICAgIGJvcmRlcjogN3B4IHNvbGlkIHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuICAgICAgICB6LWluZGV4OiAzO1xcbiAgICB9XFxuICAgIFxcbiAgICAvLyBJbWFnZSBTcGVjaWZpY3NcXG4gICAgLmlubmVyIHtcXG4gICAgICAgIEBpbmNsdWRlIF8oJ3dpZHRoJywgMC41LCAxODIpO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcblxcbiAgICAgICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgICAgICBAaW5jbHVkZSBfKCdib3JkZXItcmFkaXVzJywgMC41LCA2NCk7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG5cXG4gICAgICAgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgIH1cXG5cXG4gICAgfVxcblxcbiAgICAvLyBJbmZvIFRpbGUgUG9zaXRpb25pbmdcXG4gICAgLmluZm8tdGlsZSB7XFxuXFxuICAgIH1cXG4gXFxufVxcblxcblxcblwiLFwiQHVzZSBcXFwic2FzczptYXRoXFxcIjtcXG5cXG5AZnVuY3Rpb24gc3RyaXAtdW5pdHMoJG51bWJlcikge1xcbiAgQHJldHVybiBtYXRoLmRpdigkbnVtYmVyLCAoJG51bWJlciAqIDAgKyAxKSk7XFxufVxcblxcbkBmdW5jdGlvbiBjYWxjdWxhdGVSZW0oJHNpemUpIHtcXG4gICRyZW1TaXplOiBtYXRoLmRpdigkc2l6ZSwgMTYpO1xcbiAgQHJldHVybiAjeyRyZW1TaXplfXJlbTtcXG59XFxuXFxuQGZ1bmN0aW9uIGNhbGN1bGF0ZUNsYW1wKCRtaW5pbXVtLCAkcHJlZmVycmVkLCAkbWF4aW11bSwgJHByZWZlcnJlZF92aWV3cG9ydF93aWR0aDogMTkyMHB4KSB7XFxuICAkY2xhbXBfcGFyYW1ldGVyXzE6IGNhbGN1bGF0ZVJlbSgkbWluaW11bSAqICRwcmVmZXJyZWQpO1xcbiAgJGNsYW1wX3BhcmFtZXRlcl8yOiBzdHJpcC11bml0cyhtYXRoLmRpdigoJHByZWZlcnJlZCArIDApLCAkcHJlZmVycmVkX3ZpZXdwb3J0X3dpZHRoKSAqIDEwMCkgKiAxdnc7XFxuICAkY2xhbXBfcGFyYW1ldGVyXzM6IGNhbGN1bGF0ZVJlbSgkbWF4aW11bSk7XFxuXFxuICBAcmV0dXJuIGNsYW1wKCN7JGNsYW1wX3BhcmFtZXRlcl8xfSwgI3skY2xhbXBfcGFyYW1ldGVyXzJ9LCAjeyRjbGFtcF9wYXJhbWV0ZXJfM30pO1xcbn1cXG5cXG5AbWl4aW4gXygkdW5pdCwgJG1pbmltdW0sICRwcmVmZXJyZWQsICRtYXhpbXVtOiAkcHJlZmVycmVkLCAkcHJlZmVycmVkX3ZpZXdwb3J0X3dpZHRoOiAxOTIwcHgpIHtcXG4gIC8vICN7JHVuaXR9OiBjYWxjdWxhdGVSZW0oJHByZWZlcnJlZCk7XFxuICAjeyR1bml0fTogY2FsY3VsYXRlQ2xhbXAoJG1pbmltdW0sICRwcmVmZXJyZWQsICRtYXhpbXVtLCAkcHJlZmVycmVkX3ZpZXdwb3J0X3dpZHRoKTtcXG59XFxuXFxuXCIsXCIuc2tpbGwtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG5cXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogODk5cHgpIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB9XFxuXFxuICAgXFxuXFxuICAgIEBpbmNsdWRlIF8oJ21hcmdpbi1ib3R0b20nLCAwLjcsIDIwKTtcXG5cXG4gICAgLi0tbGVmdCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIF8oJ3dpZHRoJywgMC43LCAyMDApO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgXFxuXFxuICAgICAgICBzdHJvbmcsIHNwYW4ge1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjFlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuLS1yaWdodCB7XFxuICAgICAgICBAaW5jbHVkZSBfKCdwYWRkaW5nLXRvcCcsIDAuNywgNik7XFxuXFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIGFuZCAobWF4LXdpZHRoOiA4OTlweCkge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIF8oJ3BhZGRpbmctdG9wJywgMC43LCAyMCk7XFxuICAgICAgICAgICAgQGluY2x1ZGUgXygncGFkZGluZy1ib3R0b20nLCAwLjcsIDIwKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NjZweCkge1xcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICAgICAgfVxcbiAgICB9ICBcXG5cXG5cXG4gICAgLi0tcHJvZ3Jlc3Mge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBAaW5jbHVkZSBfKCdnYXAnLCAwLjcsIDgpO1xcbiAgICAgICAgZmxleDogMCAwIGF1dG87XFxuICAgICAgICBcXG5cXG4gICAgICAgIGxpIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDhweDtcXG4gICAgICAgICAgICB3aWR0aDogOHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQuNXB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcblxcbiAgICAgICAgfVxcblxcbiAgICAgICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCA2IHtcXG4gICAgICAgICAgICAmW2RhdGEtcHJvZ3Jlc3M9XFxcIiN7JGl9XFxcIl0ge1xcbiAgICAgICAgICAgICAgICBsaTpudGgtY2hpbGQoMW4rI3skaSArIDF9KSB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVwiLFwiLmhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwMHB4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgXFxuXFxuICAgIC5oZWFkZXItLWlubmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICB9XFxuXFxuICAgIC4tLWxlZnQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuXFxuXFxuICAgIH1cXG5cXG4gICAgLi0tcmlnaHQge1xcbiAgICAgICAgQGluY2x1ZGUgXygncGFkZGluZy1yaWdodCcsIDAuNywgMTQ3KTtcXG5cXG4gICAgICAgIC5uYXZpY29uIHtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcyBsaW5lYXIgdG9wO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICB0b3A6IDM4cHg7XFxuICAgICAgICAgICAgcmlnaHQ6IDMycHg7XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTI4cHgpIHtcXG4gICAgICAgICAgICAuLS1idXR0b24ge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgICAgICAgICAgIC4tLWJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgICAgdG9wOiAtMTBweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLm5hdmljb24ge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgIHN2ZyB7XFxuICAgICAgICBmaWxsOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gICB9XFxuXFxuICAgLmxvZ28ge1xcbiAgICAgICAgQGluY2x1ZGUgXygnd2lkdGgnLCAwLjcsIDE0Nyk7XFxuICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcyBsaW5lYXIgd2lkdGg7XFxuICAgICAgICBhc3BlY3QtcmF0aW86IDE3NS8xMjk7XFxuICAgICAgICBoZWlnaHQ6IHVuc2V0O1xcbiAgIH1cXG5cXG4gICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXG4gICAgICAgIC5uYXYtbWFpbiB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgICBib3R0b206IDA7XFxuICAgICAgICAgICAgcmlnaHQ6IDBweDtcXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XFxuICAgICAgICAgICAgcmlnaHQ6IC0zMDBweDtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAxMDBtcyBsaW5lYXIgcmlnaHQ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICAgICAgICAgIHotaW5kZXg6IDIwO1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmFmdGVyIHtcXG4gICAgICAgICAgICB6LWluZGV4OiAxMTtcXG4gICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgICAgICByaWdodDogLTEwMHZ3O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTMpO1xcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAxMDBtcyBsaW5lYXIgcmlnaHQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLm1lbnUtYWN0aXZlIHtcXG4gICAgICAgICAgICAubmF2LW1haW4ge1xcbiAgICAgICAgICAgICAgICByaWdodDogMHB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmOmFmdGVyIHtcXG4gICAgICAgICAgICAgICByaWdodDogMDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubmF2LW1haW4ge1xcbiAgICAgICAgICAgIHVsIHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA0MHB4O1xcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcblxcbiAgICAgICAgICAgICAgICBsaSB7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItMyk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgYSB7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICB9XFxuXFxuICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAgICAgICAubmF2LW1haW4ge1xcbiAgICAgICAgICAgIHVsIHtcXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgICAgICAgICAgICAgbGkge1xcbiAgICAgICAgICAgICAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgYSB7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXdyYXA6IG5vd3JhcDtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcblxcblxcbi5oYXMtc2Nyb2xsZWQge1xcbiAgICAuaGVhZGVyIHtcXG4gICAgICAgIC5sb2dvIHtcXG4gICAgICAgICAgICBAaW5jbHVkZSBfKCd3aWR0aCcsIDAuNywgOTYpO1xcbiAgICAgICAgfVxcbiAgICAgICAgLm5hdmljb24ge1xcbiAgICAgICAgICAgIHRvcDogMTBweDtcXG4gICAgICAgICAgICByaWdodDogMzJweDtcXG4gICAgICAgIH1cXG4gICAgfSAgICAgICBcXG59XCIsXCJmb290ZXIjZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICAgIC4tLWNlbnRlciB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH0gIFxcblxcbiAgICAuLS10b3Age1xcbiAgICAgICAgcGFkZGluZy10b3A6IDIwMHB4O1xcbiAgICB9XFxuXFxuICAgIC4tLWJvdHRvbSB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG4gICAgfVxcblxcbiAgICAuLS1zdmcge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gICAgICAgIFxcbiAgICAgICAgc3ZnIHtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgZmlsbDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cIixcIiRwYWRkaW5nOiA0MHB4O1xcbiRtYXJnaW46IDIwcHg7XFxuXFxuLm9yZ2FuaXNtLTAwIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46ICRtYXJnaW47XFxuICAgIHBhZGRpbmc6ICRwYWRkaW5nO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvdXItZ3JheS0zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG5cXG4gICAgJi5sb2FkZXItY29udGVudCB7XFxuICAgICAgICAmOmhhcygubG9hZGVyKSB7XFxuICAgICAgICAgICAgPiAqOm5vdCgubG9hZGVyKSB7XFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbG9hZGluZ0luIDJzIG5vcm1hbCBmb3J3YXJkcyBlYXNlLWluLW91dDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG5cXG4gICAgLmxvYWRlciB7XFxuICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAkcGFkZGluZztcXG4gICAgICAgIGxlZnQ6ICRwYWRkaW5nO1xcbiAgICAgICAgYm90dG9tOiAkcGFkZGluZztcXG4gICAgICAgIHJpZ2h0OiAkcGFkZGluZztcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIFxcbiAgICAgICAgZGl2IHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjIwLDIxOSwyMzAsMSkgMCUsIHJnYmEoMjMwLDIzMiwyMzgsMSkgMTQlLCByZ2JhKDIzNCwyMzgsMjQwLDEpIDEwMCUpO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG91ci1ncmF5LTgpO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIFxcbiAgICAubG9hZGVyIHtcXG4gICAgICAgIGFuaW1hdGlvbjogbG9hZGluZ091dCAycyBub3JtYWwgZm9yd2FyZHMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICBcXG4gICAgICAgIGRpdiB7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBsb2FkaW5nT3V0RGl2IDJzIG5vcm1hbCBmb3J3YXJkcyBlYXNlLWluLW91dDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cXG5cIixcIi5oZWFkZXItYmxvY2stMDEge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXG5cXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxuICAgICAgICAucm93ID4ge1xcbiAgICAgICAgICAgIC5jb2w6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgICAgICAgICAgICBoMSB7XFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA2MHB4O1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgICAgICAgICAgICAgc3BhbjpudGgtb2YtdHlwZSgxKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0xMDBweDtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIHNwYW46bnRoLW9mLXR5cGUoMikge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMTAwcHg7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbiBcXG5cXG4gICAgLi0tbGVmdCB7XFxuICAgICAgQGluY2x1ZGUgXygnbWF4LXdpZHRoJywgMC42NSwgNTUwKTtcXG5cXG4gICAgICAgIC4tLXBhZ2UtZG93biB7XFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XFxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XFxuXFxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XFxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuLS10aXRsZSB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuXFxuICAgICAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgLi0tYnV0dG9uIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgfVxcblxcbiAgICAuLS1yaWdodCB7XFxuICAgICAgICAmLCAuLS1ncmlkIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB9IFxcbiAgICAgICAgXFxuICAgICAgICAuLS1saW5rIHtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuLS1ncmlkIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICBcXG5cXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgXygncGFkZGluZy1sZWZ0JywgMC43LCA2MCk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkge1xcbiAgICAgICAgICAgICAgICBnYXA6IDEwJTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAgICAgICAgICAgICAgIGE6bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMDBweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTY3cHgpIHtcXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuXFxuICAgICAgICAgICAgICAgIGE6bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgICAgICAgICAgICAgIC4tLWltYWdlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMjtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICBcXG4gICAgICAgICAgICAgICAgLi0tbGluayB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGdhcDogMjBweDtcXG4gICAgXFxuICAgICAgICAgICAgICAgICAgICAuLS1pbWFnZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgLi0tbnVtYmVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgIFxcblxcbiAgICAgICAgLi0taDIge1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuLS1pbWFnZSB7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2MHB4O1xcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAydncgMnZ3IDBweCB2YXIoLS1jb2xvci00KTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSB7XFxuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMnB4O1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBfKCdib3R0b20nLCAwLjcsIC02MCk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuLS1udW1iZXIge1xcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkge1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTUlO1xcbiAgICAgICAgICAgICAgICByaWdodDogLTE4JTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuLS1zdWJ0aXRsZSB7XFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XFxuXFxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSB7XFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIF8oJ3BhZGRpbmctdG9wJywgMC43LCA3MCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIEBpbmNsdWRlIF8oJ21hcmdpbi1ib3R0b20nLCAwLjcsIDEwKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC4tLXRpdGxlIHtcXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTY3cHgpIHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSB7XFxuICAgICAgICAgICAgLi0tZ3JvdXAge1xcbiAgICAgICAgICAgICAgICAuLS1udW1iZXIge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cIixcIi5pbi1mb2N1cy1ibG9jay0wMiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgICBAaW5jbHVkZSBfKCdwYWRkaW5nLXRvcCcsIDAuNywgMTIwKTtcXG4gICAgQGluY2x1ZGUgXygncGFkZGluZy1ib3R0b20nLCAwLjcsIDYwKTtcXG4gICAgXFxuICAgIC4tLXN1YnRpdGxlIHtcXG4gICAgICAgIEBpbmNsdWRlIF8oJ21hcmdpbi1ib3R0b20nLCAwLjcsIDIwKTtcXG4gICAgfVxcblxcbiAgICAuLS10aXRsZSB7XFxuICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgICAgICAgQGluY2x1ZGUgXygnbWFyZ2luLWJvdHRvbScsIDAuNywgMjApO1xcbiAgICB9XFxuXFxuICAgIC4tLXRleHQge1xcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgICAgIEBpbmNsdWRlIF8oJ21hcmdpbi1ib3R0b20nLCAwLjcsIDIwKTtcXG4gICAgfVxcblxcbiAgICAuLS1zaWduYXR1cmUge1xcbiAgICAgICAgc3ZnIHtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgZmlsbDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgXFxuXFxuICAgIC4tLWNlbnRlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNvb2tpZS1ndWFyZGlhbiB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB6LWluZGV4OiA5OTk5O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDgwMHB4O1xuICBib3gtc2hhZG93OiAwIDAgNDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1heC13aWR0aDogOTglO1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbi5jb29raWUtZ3VhcmRpYW4gKiB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuLmNvb2tpZS1ndWFyZGlhbiAuY29va2llLWd1YXJkaWFuX19iYW5uZXIge1xuICBwYWRkaW5nOiA0MHB4O1xuICBwYWRkaW5nLXRvcDogMTRweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xufVxuLmNvb2tpZS1ndWFyZGlhbiAuY29va2llLWd1YXJkaWFuX19iYW5uZXIgPiBkaXYge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMTFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA1ZW07XG4gIGNvbG9yOiAjMzMzO1xufVxuLmNvb2tpZS1ndWFyZGlhbiAuY29va2llLWd1YXJkaWFuX19iYW5uZXIgc3BhbiB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBsaW5lLWhlaWdodDogOXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIGNvbG9yOiAjYTFhMWExO1xufVxuLmNvb2tpZS1ndWFyZGlhbiAuY29va2llLWd1YXJkaWFuX19kZXNjIHtcbiAgcGFkZGluZzogNDBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuLmNvb2tpZS1ndWFyZGlhbiAuY29va2llLWd1YXJkaWFuX19vcHRpb25zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMWUxZTE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uY29va2llLWd1YXJkaWFuIC5jb29raWUtZ3VhcmRpYW5fX29wdGlvbnMgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xufVxuLmNvb2tpZS1ndWFyZGlhbiAuY29va2llLWd1YXJkaWFuX19vcHRpb25zIGEge1xuICBjb2xvcjogIzMzMztcbn1cbi5jb29raWUtZ3VhcmRpYW4gLmNvb2tpZS1ndWFyZGlhbl9fb3B0aW9ucyAuY29va2llLWd1YXJkaWFuX19zZWN0aW9uIHtcbiAgcGFkZGluZzogNDBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gODFweCk7XG59XG4uY29va2llLWd1YXJkaWFuIC5jb29raWUtZ3VhcmRpYW5fX29wdGlvbnMgLmNvb2tpZS1ndWFyZGlhbl9fc2VjdGlvbiBiIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jb29raWUtZ3VhcmRpYW4gLmNvb2tpZS1ndWFyZGlhbl9fb3B0aW9ucyAuY29va2llLWd1YXJkaWFuX19zZWN0aW9uIHAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNvb2tpZS1ndWFyZGlhbiAuY29va2llLWd1YXJkaWFuX19vcHRpb25zIC5jb29raWUtZ3VhcmRpYW5fX3NlY3Rpb246bnRoLWNoaWxkKDJuKzIpIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTFlMWUxO1xufVxuLmNvb2tpZS1ndWFyZGlhbiBzdmcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb29raWUtZ3VhcmRpYW4gc3ZnOmhvdmVyIHtcbiAgZmlsbDogI0VBNkI0ODtcbn1cbi5jb29raWUtZ3VhcmRpYW4gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICB3aWR0aDogNThweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb29raWUtZ3VhcmRpYW4gaW5wdXRbdHlwZT1jaGVja2JveF06ZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLmNvb2tpZS1ndWFyZGlhbiAuY29va2llLWd1YXJkaWFuX19zZWN0aW9uOmhhcyhpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG4uY29va2llLWd1YXJkaWFuIC5jb29raWUtZ3VhcmRpYW5fX3NlY3Rpb246aGFzKGlucHV0W3R5cGU9Y2hlY2tib3hdOm5vdCg6Y2hlY2tlZCkpIHtcbiAgY29sb3I6ICNhMWExYTE7XG59XG4uY29va2llLWd1YXJkaWFuIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyAuY2hlY2tib3gtc2xpZGVyOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cbi5jb29raWUtZ3VhcmRpYW4gaW5wdXRbdHlwZT1jaGVja2JveF06ZGlzYWJsZWQgKyAuY2hlY2tib3gtc2xpZGVyIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTFlMTtcbn1cbi5jb29raWUtZ3VhcmRpYW4gaW5wdXRbdHlwZT1jaGVja2JveF0gKyAuY2hlY2tib3gtc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTFlMTtcbn1cbi5jb29raWUtZ3VhcmRpYW4gaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZDpub3QoOmRpc2FibGVkKSArIC5jaGVja2JveC1zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUE2QjQ4O1xufVxuLmNvb2tpZS1ndWFyZGlhbiBpbnB1dFt0eXBlPWNoZWNrYm94XTpkaXNhYmxlZCArIC5jaGVja2JveC1zbGlkZXI6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuLmNvb2tpZS1ndWFyZGlhbiAuY2hlY2tib3gtc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VBNkI0ODtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzJweCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjRzO1xuICB3aWR0aDogNThweDtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuLmNvb2tpZS1ndWFyZGlhbiAuY2hlY2tib3gtc2xpZGVyOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm90dG9tOiA0cHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMjRweDtcbiAgbGVmdDogNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzO1xuICB3aWR0aDogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNvb2tpZS1ndWFyZGlhbl9fYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY29va2llLWd1YXJkaWFuX19idXR0b24ge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUE2QjQ4O1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvb2tpZS1ndWFyZGlhbl9fYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgY29sb3I6ICNFQTZCNDg7XG59XG5cbi5jb29raWUtZ3VhcmRpYW5fX292ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjcpO1xuICB6LWluZGV4OiA5OTk4O1xufVxuXG4uY29va2llLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQTZCNDg7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB3aWR0aDogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmlsbDogd2hpdGU7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDQwcHg7XG4gIHJpZ2h0OiA0MHB4O1xufVxuLmNvb2tpZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBjb2xvcjogI0VBNkI0ODtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9jb29raWUtZ3VhcmRpYW4vc3JjL2Nvb2tpZS1ndWFyZGlhbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7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XG4uY29va2llLWd1YXJkaWFuIHtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHotaW5kZXg6IDk5OTk7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWF4LXdpZHRoOiA5OCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcblxcbiAgICAqIHtcXG4gICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICB9XFxuXFxuICAgIC5jb29raWUtZ3VhcmRpYW5fX2Jhbm5lciB7XFxuICAgICAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDE0cHg7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xcbiAgICAgICAgXFxuICAgICAgICA+IGRpdiB7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wNWVtO1xcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDlweDtcXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxuICAgICAgICAgICAgY29sb3I6ICNhMWExYTE7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmNvb2tpZS1ndWFyZGlhbl9fZGVzYyB7XFxuICAgICAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIH1cXG5cXG4gICAgLmNvb2tpZS1ndWFyZGlhbl9fb3B0aW9ucyB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XFxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMWUxZTE7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuXFxuICAgICAgICBwIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xcbiAgICAgICAgICBcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGEge1xcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgIFxcblxcbiAgICAgICAgLmNvb2tpZS1ndWFyZGlhbl9fc2VjdGlvbiB7XFxuICAgICAgICAgICAgcGFkZGluZzogNDBweDtcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcXG4gICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSA4MXB4KTtcXG4gICAgICAgICAgIFxcbiAgICAgICAgICAgIGIge1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBwIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMm4rMikge1xcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMWUxZTE7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHN2ZyB7XFxuICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xcbiAgICAgICAgdG9wOiAyMHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgZmlsbDogI0VBNkI0ODtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgICAgIHdpZHRoOiA1OHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpkaXNhYmxlZCB7XFxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICB9XFxuXFxuICAgIC5jb29raWUtZ3VhcmRpYW5fX3NlY3Rpb246aGFzKCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQpIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICAgIH1cXG5cXG4gICAgLmNvb2tpZS1ndWFyZGlhbl9fc2VjdGlvbjpoYXMoIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06bm90KDpjaGVja2VkKSkge1xcbiAgICAgICAgY29sb3I6ICNhMWExYTFcXG4gICAgfVxcblxcbiAgIFxcbiAgICBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyAuY2hlY2tib3gtc2xpZGVyOmJlZm9yZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAgIH1cXG5cXG4gICAgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpkaXNhYmxlZCArIC5jaGVja2JveC1zbGlkZXIge1xcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWUxZTE7XFxuICAgIH1cXG5cXG4gICAgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSArIC5jaGVja2JveC1zbGlkZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTFlMTtcXG4gICAgfVxcblxcbiAgICBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6bm90KDpkaXNhYmxlZCkgKyAuY2hlY2tib3gtc2xpZGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQTZCNDg7XFxuICAgIH1cXG4gICAgXFxuXFxuICAgIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06ZGlzYWJsZWQgKyAuY2hlY2tib3gtc2xpZGVyOmJlZm9yZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAgIH1cXG5cXG4gICAgLmNoZWNrYm94LXNsaWRlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUE2QjQ4O1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzJweDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzJweCk7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuIFxcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuNHM7XFxuICAgICAgICB3aWR0aDogNThweDtcXG4gICAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICAgIFxcbiAgICAgICAgXFxuICAgICAgICAmOmJlZm9yZSB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgYm90dG9tOiA0cHg7XFxuICAgICAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgICAgIGxlZnQ6IDRweDtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC40cztcXG4gICAgICAgICAgICB3aWR0aDogMjRweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcblxcbi5jb29raWUtZ3VhcmRpYW5fX2Nsb3NlIHtcXG5cXG59XFxuXFxuLmNvb2tpZS1ndWFyZGlhbl9fY29udGVudCB7XFxuXFxufVxcblxcbi5jb29raWUtZ3VhcmRpYW5fX2J1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmNvb2tpZS1ndWFyZGlhbl9fYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VBNkI0ODtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgICAgICAgY29sb3I6ICNFQTZCNDg7XFxuICAgIH1cXG59XFxuXFxuLmNvb2tpZS1ndWFyZGlhbl9fb3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuNyk7XFxuICAgIHotaW5kZXg6IDk5OTg7XFxufVxcblxcbi5jb29raWUtYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VBNkI0ODtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmaWxsOiB3aGl0ZTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogNDBweDtcXG4gICAgcmlnaHQ6IDQwcHg7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gICAgICAgIGNvbG9yOiAjRUE2QjQ4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyoqXG4gKiBtYXRjaGVzU2VsZWN0b3IgdjIuMC4yXG4gKiBtYXRjaGVzU2VsZWN0b3IoIGVsZW1lbnQsICcuc2VsZWN0b3InIClcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSwgdW51c2VkOiB0cnVlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuICAndXNlIHN0cmljdCc7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cubWF0Y2hlc1NlbGVjdG9yID0gZmFjdG9yeSgpO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBtYXRjaGVzTWV0aG9kID0gKCBmdW5jdGlvbigpIHtcbiAgICB2YXIgRWxlbVByb3RvID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlO1xuICAgIC8vIGNoZWNrIGZvciB0aGUgc3RhbmRhcmQgbWV0aG9kIG5hbWUgZmlyc3RcbiAgICBpZiAoIEVsZW1Qcm90by5tYXRjaGVzICkge1xuICAgICAgcmV0dXJuICdtYXRjaGVzJztcbiAgICB9XG4gICAgLy8gY2hlY2sgdW4tcHJlZml4ZWRcbiAgICBpZiAoIEVsZW1Qcm90by5tYXRjaGVzU2VsZWN0b3IgKSB7XG4gICAgICByZXR1cm4gJ21hdGNoZXNTZWxlY3Rvcic7XG4gICAgfVxuICAgIC8vIGNoZWNrIHZlbmRvciBwcmVmaXhlc1xuICAgIHZhciBwcmVmaXhlcyA9IFsgJ3dlYmtpdCcsICdtb3onLCAnbXMnLCAnbycgXTtcblxuICAgIGZvciAoIHZhciBpPTA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICAgIHZhciBtZXRob2QgPSBwcmVmaXggKyAnTWF0Y2hlc1NlbGVjdG9yJztcbiAgICAgIGlmICggRWxlbVByb3RvWyBtZXRob2QgXSApIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZDtcbiAgICAgIH1cbiAgICB9XG4gIH0pKCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIG1hdGNoZXNTZWxlY3RvciggZWxlbSwgc2VsZWN0b3IgKSB7XG4gICAgcmV0dXJuIGVsZW1bIG1hdGNoZXNNZXRob2QgXSggc2VsZWN0b3IgKTtcbiAgfTtcblxufSkpO1xuIiwiLyoqXG4gKiBFdkVtaXR0ZXIgdjEuMS4wXG4gKiBMaWwnIGV2ZW50IGVtaXR0ZXJcbiAqIE1JVCBMaWNlbnNlXG4gKi9cblxuLyoganNoaW50IHVudXNlZDogdHJ1ZSwgdW5kZWY6IHRydWUsIHN0cmljdDogdHJ1ZSAqL1xuXG4oIGZ1bmN0aW9uKCBnbG9iYWwsIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKiBnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCB3aW5kb3cgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTUQgLSBSZXF1aXJlSlNcbiAgICBkZWZpbmUoIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KUyAtIEJyb3dzZXJpZnksIFdlYnBhY2tcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICBnbG9iYWwuRXZFbWl0dGVyID0gZmFjdG9yeSgpO1xuICB9XG5cbn0oIHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0aGlzLCBmdW5jdGlvbigpIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIEV2RW1pdHRlcigpIHt9XG5cbnZhciBwcm90byA9IEV2RW1pdHRlci5wcm90b3R5cGU7XG5cbnByb3RvLm9uID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIGlmICggIWV2ZW50TmFtZSB8fCAhbGlzdGVuZXIgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHNldCBldmVudHMgaGFzaFxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICAvLyBzZXQgbGlzdGVuZXJzIGFycmF5XG4gIHZhciBsaXN0ZW5lcnMgPSBldmVudHNbIGV2ZW50TmFtZSBdID0gZXZlbnRzWyBldmVudE5hbWUgXSB8fCBbXTtcbiAgLy8gb25seSBhZGQgb25jZVxuICBpZiAoIGxpc3RlbmVycy5pbmRleE9mKCBsaXN0ZW5lciApID09IC0xICkge1xuICAgIGxpc3RlbmVycy5wdXNoKCBsaXN0ZW5lciApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5vbmNlID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIGlmICggIWV2ZW50TmFtZSB8fCAhbGlzdGVuZXIgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGFkZCBldmVudFxuICB0aGlzLm9uKCBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gIC8vIHNldCBvbmNlIGZsYWdcbiAgLy8gc2V0IG9uY2VFdmVudHMgaGFzaFxuICB2YXIgb25jZUV2ZW50cyA9IHRoaXMuX29uY2VFdmVudHMgPSB0aGlzLl9vbmNlRXZlbnRzIHx8IHt9O1xuICAvLyBzZXQgb25jZUxpc3RlbmVycyBvYmplY3RcbiAgdmFyIG9uY2VMaXN0ZW5lcnMgPSBvbmNlRXZlbnRzWyBldmVudE5hbWUgXSA9IG9uY2VFdmVudHNbIGV2ZW50TmFtZSBdIHx8IHt9O1xuICAvLyBzZXQgZmxhZ1xuICBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdID0gdHJ1ZTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLm9mZiA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzICYmIHRoaXMuX2V2ZW50c1sgZXZlbnROYW1lIF07XG4gIGlmICggIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGluZGV4ID0gbGlzdGVuZXJzLmluZGV4T2YoIGxpc3RlbmVyICk7XG4gIGlmICggaW5kZXggIT0gLTEgKSB7XG4gICAgbGlzdGVuZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8uZW1pdEV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgYXJncyApIHtcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50cyAmJiB0aGlzLl9ldmVudHNbIGV2ZW50TmFtZSBdO1xuICBpZiAoICFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGNvcHkgb3ZlciB0byBhdm9pZCBpbnRlcmZlcmVuY2UgaWYgLm9mZigpIGluIGxpc3RlbmVyXG4gIGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSgwKTtcbiAgYXJncyA9IGFyZ3MgfHwgW107XG4gIC8vIG9uY2Ugc3R1ZmZcbiAgdmFyIG9uY2VMaXN0ZW5lcnMgPSB0aGlzLl9vbmNlRXZlbnRzICYmIHRoaXMuX29uY2VFdmVudHNbIGV2ZW50TmFtZSBdO1xuXG4gIGZvciAoIHZhciBpPTA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldXG4gICAgdmFyIGlzT25jZSA9IG9uY2VMaXN0ZW5lcnMgJiYgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXTtcbiAgICBpZiAoIGlzT25jZSApIHtcbiAgICAgIC8vIHJlbW92ZSBsaXN0ZW5lclxuICAgICAgLy8gcmVtb3ZlIGJlZm9yZSB0cmlnZ2VyIHRvIHByZXZlbnQgcmVjdXJzaW9uXG4gICAgICB0aGlzLm9mZiggZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICAgICAgLy8gdW5zZXQgb25jZSBmbGFnXG4gICAgICBkZWxldGUgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXTtcbiAgICB9XG4gICAgLy8gdHJpZ2dlciBsaXN0ZW5lclxuICAgIGxpc3RlbmVyLmFwcGx5KCB0aGlzLCBhcmdzICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLmFsbE9mZiA9IGZ1bmN0aW9uKCkge1xuICBkZWxldGUgdGhpcy5fZXZlbnRzO1xuICBkZWxldGUgdGhpcy5fb25jZUV2ZW50cztcbn07XG5cbnJldHVybiBFdkVtaXR0ZXI7XG5cbn0pKTtcbiIsIi8qKlxuICogRml6enkgVUkgdXRpbHMgdjIuMC43XG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHVuZGVmOiB0cnVlLCB1bnVzZWQ6IHRydWUsIHN0cmljdDogdHJ1ZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKmpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3Rvci9tYXRjaGVzLXNlbGVjdG9yJ1xuICAgIF0sIGZ1bmN0aW9uKCBtYXRjaGVzU2VsZWN0b3IgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBtYXRjaGVzU2VsZWN0b3IgKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHJlcXVpcmUoJ2Rlc2FuZHJvLW1hdGNoZXMtc2VsZWN0b3InKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuZml6enlVSVV0aWxzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHdpbmRvdy5tYXRjaGVzU2VsZWN0b3JcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBtYXRjaGVzU2VsZWN0b3IgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0ge307XG5cbi8vIC0tLS0tIGV4dGVuZCAtLS0tLSAvL1xuXG4vLyBleHRlbmRzIG9iamVjdHNcbnV0aWxzLmV4dGVuZCA9IGZ1bmN0aW9uKCBhLCBiICkge1xuICBmb3IgKCB2YXIgcHJvcCBpbiBiICkge1xuICAgIGFbIHByb3AgXSA9IGJbIHByb3AgXTtcbiAgfVxuICByZXR1cm4gYTtcbn07XG5cbi8vIC0tLS0tIG1vZHVsbyAtLS0tLSAvL1xuXG51dGlscy5tb2R1bG8gPSBmdW5jdGlvbiggbnVtLCBkaXYgKSB7XG4gIHJldHVybiAoICggbnVtICUgZGl2ICkgKyBkaXYgKSAlIGRpdjtcbn07XG5cbi8vIC0tLS0tIG1ha2VBcnJheSAtLS0tLSAvL1xuXG52YXIgYXJyYXlTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuLy8gdHVybiBlbGVtZW50IG9yIG5vZGVMaXN0IGludG8gYW4gYXJyYXlcbnV0aWxzLm1ha2VBcnJheSA9IGZ1bmN0aW9uKCBvYmogKSB7XG4gIGlmICggQXJyYXkuaXNBcnJheSggb2JqICkgKSB7XG4gICAgLy8gdXNlIG9iamVjdCBpZiBhbHJlYWR5IGFuIGFycmF5XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICAvLyByZXR1cm4gZW1wdHkgYXJyYXkgaWYgdW5kZWZpbmVkIG9yIG51bGwuICM2XG4gIGlmICggb2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkICkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBpc0FycmF5TGlrZSA9IHR5cGVvZiBvYmogPT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iai5sZW5ndGggPT0gJ251bWJlcic7XG4gIGlmICggaXNBcnJheUxpa2UgKSB7XG4gICAgLy8gY29udmVydCBub2RlTGlzdCB0byBhcnJheVxuICAgIHJldHVybiBhcnJheVNsaWNlLmNhbGwoIG9iaiApO1xuICB9XG5cbiAgLy8gYXJyYXkgb2Ygc2luZ2xlIGluZGV4XG4gIHJldHVybiBbIG9iaiBdO1xufTtcblxuLy8gLS0tLS0gcmVtb3ZlRnJvbSAtLS0tLSAvL1xuXG51dGlscy5yZW1vdmVGcm9tID0gZnVuY3Rpb24oIGFyeSwgb2JqICkge1xuICB2YXIgaW5kZXggPSBhcnkuaW5kZXhPZiggb2JqICk7XG4gIGlmICggaW5kZXggIT0gLTEgKSB7XG4gICAgYXJ5LnNwbGljZSggaW5kZXgsIDEgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gZ2V0UGFyZW50IC0tLS0tIC8vXG5cbnV0aWxzLmdldFBhcmVudCA9IGZ1bmN0aW9uKCBlbGVtLCBzZWxlY3RvciApIHtcbiAgd2hpbGUgKCBlbGVtLnBhcmVudE5vZGUgJiYgZWxlbSAhPSBkb2N1bWVudC5ib2R5ICkge1xuICAgIGVsZW0gPSBlbGVtLnBhcmVudE5vZGU7XG4gICAgaWYgKCBtYXRjaGVzU2VsZWN0b3IoIGVsZW0sIHNlbGVjdG9yICkgKSB7XG4gICAgICByZXR1cm4gZWxlbTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIC0tLS0tIGdldFF1ZXJ5RWxlbWVudCAtLS0tLSAvL1xuXG4vLyB1c2UgZWxlbWVudCBhcyBzZWxlY3RvciBzdHJpbmdcbnV0aWxzLmdldFF1ZXJ5RWxlbWVudCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICBpZiAoIHR5cGVvZiBlbGVtID09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBlbGVtICk7XG4gIH1cbiAgcmV0dXJuIGVsZW07XG59O1xuXG4vLyAtLS0tLSBoYW5kbGVFdmVudCAtLS0tLSAvL1xuXG4vLyBlbmFibGUgLm9udHlwZSB0byB0cmlnZ2VyIGZyb20gLmFkZEV2ZW50TGlzdGVuZXIoIGVsZW0sICd0eXBlJyApXG51dGlscy5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIG1ldGhvZCA9ICdvbicgKyBldmVudC50eXBlO1xuICBpZiAoIHRoaXNbIG1ldGhvZCBdICkge1xuICAgIHRoaXNbIG1ldGhvZCBdKCBldmVudCApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBmaWx0ZXJGaW5kRWxlbWVudHMgLS0tLS0gLy9cblxudXRpbHMuZmlsdGVyRmluZEVsZW1lbnRzID0gZnVuY3Rpb24oIGVsZW1zLCBzZWxlY3RvciApIHtcbiAgLy8gbWFrZSBhcnJheSBvZiBlbGVtc1xuICBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZWxlbXMgKTtcbiAgdmFyIGZmRWxlbXMgPSBbXTtcblxuICBlbGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAvLyBjaGVjayB0aGF0IGVsZW0gaXMgYW4gYWN0dWFsIGVsZW1lbnRcbiAgICBpZiAoICEoIGVsZW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCApICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBhZGQgZWxlbSBpZiBubyBzZWxlY3RvclxuICAgIGlmICggIXNlbGVjdG9yICkge1xuICAgICAgZmZFbGVtcy5wdXNoKCBlbGVtICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGZpbHRlciAmIGZpbmQgaXRlbXMgaWYgd2UgaGF2ZSBhIHNlbGVjdG9yXG4gICAgLy8gZmlsdGVyXG4gICAgaWYgKCBtYXRjaGVzU2VsZWN0b3IoIGVsZW0sIHNlbGVjdG9yICkgKSB7XG4gICAgICBmZkVsZW1zLnB1c2goIGVsZW0gKTtcbiAgICB9XG4gICAgLy8gZmluZCBjaGlsZHJlblxuICAgIHZhciBjaGlsZEVsZW1zID0gZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciApO1xuICAgIC8vIGNvbmNhdCBjaGlsZEVsZW1zIHRvIGZpbHRlckZvdW5kIGFycmF5XG4gICAgZm9yICggdmFyIGk9MDsgaSA8IGNoaWxkRWxlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICBmZkVsZW1zLnB1c2goIGNoaWxkRWxlbXNbaV0gKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBmZkVsZW1zO1xufTtcblxuLy8gLS0tLS0gZGVib3VuY2VNZXRob2QgLS0tLS0gLy9cblxudXRpbHMuZGVib3VuY2VNZXRob2QgPSBmdW5jdGlvbiggX2NsYXNzLCBtZXRob2ROYW1lLCB0aHJlc2hvbGQgKSB7XG4gIHRocmVzaG9sZCA9IHRocmVzaG9sZCB8fCAxMDA7XG4gIC8vIG9yaWdpbmFsIG1ldGhvZFxuICB2YXIgbWV0aG9kID0gX2NsYXNzLnByb3RvdHlwZVsgbWV0aG9kTmFtZSBdO1xuICB2YXIgdGltZW91dE5hbWUgPSBtZXRob2ROYW1lICsgJ1RpbWVvdXQnO1xuXG4gIF9jbGFzcy5wcm90b3R5cGVbIG1ldGhvZE5hbWUgXSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0aW1lb3V0ID0gdGhpc1sgdGltZW91dE5hbWUgXTtcbiAgICBjbGVhclRpbWVvdXQoIHRpbWVvdXQgKTtcblxuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdGhpc1sgdGltZW91dE5hbWUgXSA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgbWV0aG9kLmFwcGx5KCBfdGhpcywgYXJncyApO1xuICAgICAgZGVsZXRlIF90aGlzWyB0aW1lb3V0TmFtZSBdO1xuICAgIH0sIHRocmVzaG9sZCApO1xuICB9O1xufTtcblxuLy8gLS0tLS0gZG9jUmVhZHkgLS0tLS0gLy9cblxudXRpbHMuZG9jUmVhZHkgPSBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG4gIHZhciByZWFkeVN0YXRlID0gZG9jdW1lbnQucmVhZHlTdGF0ZTtcbiAgaWYgKCByZWFkeVN0YXRlID09ICdjb21wbGV0ZScgfHwgcmVhZHlTdGF0ZSA9PSAnaW50ZXJhY3RpdmUnICkge1xuICAgIC8vIGRvIGFzeW5jIHRvIGFsbG93IGZvciBvdGhlciBzY3JpcHRzIHRvIHJ1bi4gbWV0YWZpenp5L2ZsaWNraXR5IzQ0MVxuICAgIHNldFRpbWVvdXQoIGNhbGxiYWNrICk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYWxsYmFjayApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBodG1sSW5pdCAtLS0tLSAvL1xuXG4vLyBodHRwOi8vamFtZXNyb2JlcnRzLm5hbWUvYmxvZy8yMDEwLzAyLzIyL3N0cmluZy1mdW5jdGlvbnMtZm9yLWphdmFzY3JpcHQtdHJpbS10by1jYW1lbC1jYXNlLXRvLWRhc2hlZC1hbmQtdG8tdW5kZXJzY29yZS9cbnV0aWxzLnRvRGFzaGVkID0gZnVuY3Rpb24oIHN0ciApIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKCAvKC4pKFtBLVpdKS9nLCBmdW5jdGlvbiggbWF0Y2gsICQxLCAkMiApIHtcbiAgICByZXR1cm4gJDEgKyAnLScgKyAkMjtcbiAgfSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBjb25zb2xlID0gd2luZG93LmNvbnNvbGU7XG4vKipcbiAqIGFsbG93IHVzZXIgdG8gaW5pdGlhbGl6ZSBjbGFzc2VzIHZpYSBbZGF0YS1uYW1lc3BhY2VdIG9yIC5qcy1uYW1lc3BhY2UgY2xhc3NcbiAqIGh0bWxJbml0KCBXaWRnZXQsICd3aWRnZXROYW1lJyApXG4gKiBvcHRpb25zIGFyZSBwYXJzZWQgZnJvbSBkYXRhLW5hbWVzcGFjZS1vcHRpb25zXG4gKi9cbnV0aWxzLmh0bWxJbml0ID0gZnVuY3Rpb24oIFdpZGdldENsYXNzLCBuYW1lc3BhY2UgKSB7XG4gIHV0aWxzLmRvY1JlYWR5KCBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGFzaGVkTmFtZXNwYWNlID0gdXRpbHMudG9EYXNoZWQoIG5hbWVzcGFjZSApO1xuICAgIHZhciBkYXRhQXR0ciA9ICdkYXRhLScgKyBkYXNoZWROYW1lc3BhY2U7XG4gICAgdmFyIGRhdGFBdHRyRWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnWycgKyBkYXRhQXR0ciArICddJyApO1xuICAgIHZhciBqc0Rhc2hFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuanMtJyArIGRhc2hlZE5hbWVzcGFjZSApO1xuICAgIHZhciBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZGF0YUF0dHJFbGVtcyApXG4gICAgICAuY29uY2F0KCB1dGlscy5tYWtlQXJyYXkoIGpzRGFzaEVsZW1zICkgKTtcbiAgICB2YXIgZGF0YU9wdGlvbnNBdHRyID0gZGF0YUF0dHIgKyAnLW9wdGlvbnMnO1xuICAgIHZhciBqUXVlcnkgPSB3aW5kb3cualF1ZXJ5O1xuXG4gICAgZWxlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgICB2YXIgYXR0ciA9IGVsZW0uZ2V0QXR0cmlidXRlKCBkYXRhQXR0ciApIHx8XG4gICAgICAgIGVsZW0uZ2V0QXR0cmlidXRlKCBkYXRhT3B0aW9uc0F0dHIgKTtcbiAgICAgIHZhciBvcHRpb25zO1xuICAgICAgdHJ5IHtcbiAgICAgICAgb3B0aW9ucyA9IGF0dHIgJiYgSlNPTi5wYXJzZSggYXR0ciApO1xuICAgICAgfSBjYXRjaCAoIGVycm9yICkge1xuICAgICAgICAvLyBsb2cgZXJyb3IsIGRvIG5vdCBpbml0aWFsaXplXG4gICAgICAgIGlmICggY29uc29sZSApIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCAnRXJyb3IgcGFyc2luZyAnICsgZGF0YUF0dHIgKyAnIG9uICcgKyBlbGVtLmNsYXNzTmFtZSArXG4gICAgICAgICAgJzogJyArIGVycm9yICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gaW5pdGlhbGl6ZVxuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IFdpZGdldENsYXNzKCBlbGVtLCBvcHRpb25zICk7XG4gICAgICAvLyBtYWtlIGF2YWlsYWJsZSB2aWEgJCgpLmRhdGEoJ25hbWVzcGFjZScpXG4gICAgICBpZiAoIGpRdWVyeSApIHtcbiAgICAgICAgalF1ZXJ5LmRhdGEoIGVsZW0sIG5hbWVzcGFjZSwgaW5zdGFuY2UgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9KTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5yZXR1cm4gdXRpbHM7XG5cbn0pKTtcbiIsIiFmdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPXQoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sdCk7ZWxzZXt2YXIgbj10KCk7Zm9yKHZhciBvIGluIG4pKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHM6ZSlbb109bltvXX19KHdpbmRvdywoZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gbihvKXtpZih0W29dKXJldHVybiB0W29dLmV4cG9ydHM7dmFyIGk9dFtvXT17aTpvLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbb10uY2FsbChpLmV4cG9ydHMsaSxpLmV4cG9ydHMsbiksaS5sPSEwLGkuZXhwb3J0c31yZXR1cm4gbi5tPWUsbi5jPXQsbi5kPWZ1bmN0aW9uKGUsdCxvKXtuLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6b30pfSxuLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1uKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciBvPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKG8pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgaSBpbiBlKW4uZChvLGksZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxpKSk7cmV0dXJuIG99LG4ubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gbi5kKHQsXCJhXCIsdCksdH0sbi5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxuLnA9XCJcIixuKG4ucz0wKX0oW2Z1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtuLnIodCk7dmFyIG8saT1cImZzbGlnaHRib3gtXCIscj1cIlwiLmNvbmNhdChpLFwic3R5bGVzXCIpLHM9XCJcIi5jb25jYXQoaSxcImN1cnNvci1ncmFiYmluZ1wiKSxhPVwiXCIuY29uY2F0KGksXCJmdWxsLWRpbWVuc2lvblwiKSxjPVwiXCIuY29uY2F0KGksXCJmbGV4LWNlbnRlcmVkXCIpLGw9XCJcIi5jb25jYXQoaSxcIm9wZW5cIiksdT1cIlwiLmNvbmNhdChpLFwidHJhbnNmb3JtLXRyYW5zaXRpb25cIiksZD1cIlwiLmNvbmNhdChpLFwiYWJzb2x1dGVkXCIpLGY9XCJcIi5jb25jYXQoaSxcInNsaWRlLWJ0blwiKSxwPVwiXCIuY29uY2F0KGYsXCItY29udGFpbmVyXCIpLGg9XCJcIi5jb25jYXQoaSxcImZhZGUtaW5cIiksbT1cIlwiLmNvbmNhdChpLFwiZmFkZS1vdXRcIiksZz1oK1wiLXN0cm9uZ1wiLHY9bStcIi1zdHJvbmdcIixiPVwiXCIuY29uY2F0KGksXCJvcGFjaXR5LVwiKSx4PVwiXCIuY29uY2F0KGIsXCIxXCIpLHk9XCJcIi5jb25jYXQoaSxcInNvdXJjZVwiKTtmdW5jdGlvbiB3KGUpe3JldHVybih3PVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9KShlKX1mdW5jdGlvbiBTKGUpe3ZhciB0PWUuc3RhZ2VJbmRleGVzLG49ZS5jb3JlLnN0YWdlTWFuYWdlcixvPWUucHJvcHMuc291cmNlcy5sZW5ndGgtMTtuLmdldFByZXZpb3VzU2xpZGVJbmRleD1mdW5jdGlvbigpe3JldHVybiAwPT09dC5jdXJyZW50P286dC5jdXJyZW50LTF9LG4uZ2V0TmV4dFNsaWRlSW5kZXg9ZnVuY3Rpb24oKXtyZXR1cm4gdC5jdXJyZW50PT09bz8wOnQuY3VycmVudCsxfSxuLnVwZGF0ZVN0YWdlSW5kZXhlcz0wPT09bz9mdW5jdGlvbigpe306MT09PW8/ZnVuY3Rpb24oKXswPT09dC5jdXJyZW50Pyh0Lm5leHQ9MSxkZWxldGUgdC5wcmV2aW91cyk6KHQucHJldmlvdXM9MCxkZWxldGUgdC5uZXh0KX06ZnVuY3Rpb24oKXt0LnByZXZpb3VzPW4uZ2V0UHJldmlvdXNTbGlkZUluZGV4KCksdC5uZXh0PW4uZ2V0TmV4dFNsaWRlSW5kZXgoKX0sbi5pPW88PTI/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oZSl7dmFyIG49dC5jdXJyZW50O2lmKDA9PT1uJiZlPT09b3x8bj09PW8mJjA9PT1lKXJldHVybiEwO3ZhciBpPW4tZTtyZXR1cm4tMT09PWl8fDA9PT1pfHwxPT09aX19XCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZG9jdW1lbnQ/XCJ1bmRlZmluZWRcIjp3KGRvY3VtZW50KSkmJigobz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIikpLmNsYXNzTmFtZT1yLG8uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIuZnNsaWdodGJveC1hYnNvbHV0ZWR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowfS5mc2xpZ2h0Ym94LWZhZGUtaW57YW5pbWF0aW9uOmZzbGlnaHRib3gtZmFkZS1pbiAuM3MgY3ViaWMtYmV6aWVyKDAsMCwuNywxKX0uZnNsaWdodGJveC1mYWRlLW91dHthbmltYXRpb246ZnNsaWdodGJveC1mYWRlLW91dCAuM3MgZWFzZX0uZnNsaWdodGJveC1mYWRlLWluLXN0cm9uZ3thbmltYXRpb246ZnNsaWdodGJveC1mYWRlLWluLXN0cm9uZyAuM3MgY3ViaWMtYmV6aWVyKDAsMCwuNywxKX0uZnNsaWdodGJveC1mYWRlLW91dC1zdHJvbmd7YW5pbWF0aW9uOmZzbGlnaHRib3gtZmFkZS1vdXQtc3Ryb25nIC4zcyBlYXNlfUBrZXlmcmFtZXMgZnNsaWdodGJveC1mYWRlLWlue2Zyb217b3BhY2l0eTouNjV9dG97b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGZzbGlnaHRib3gtZmFkZS1vdXR7ZnJvbXtvcGFjaXR5Oi4zNX10b3tvcGFjaXR5OjB9fUBrZXlmcmFtZXMgZnNsaWdodGJveC1mYWRlLWluLXN0cm9uZ3tmcm9te29wYWNpdHk6LjN9dG97b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGZzbGlnaHRib3gtZmFkZS1vdXQtc3Ryb25ne2Zyb217b3BhY2l0eToxfXRve29wYWNpdHk6MH19LmZzbGlnaHRib3gtY3Vyc29yLWdyYWJiaW5ne2N1cnNvcjpncmFiYmluZ30uZnNsaWdodGJveC1mdWxsLWRpbWVuc2lvbnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5mc2xpZ2h0Ym94LW9wZW57b3ZlcmZsb3c6aGlkZGVuO2hlaWdodDoxMDAlfS5mc2xpZ2h0Ym94LWZsZXgtY2VudGVyZWR7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfS5mc2xpZ2h0Ym94LW9wYWNpdHktMHtvcGFjaXR5OjAhaW1wb3J0YW50fS5mc2xpZ2h0Ym94LW9wYWNpdHktMXtvcGFjaXR5OjEhaW1wb3J0YW50fS5mc2xpZ2h0Ym94LXNjcm9sbGJhcmZpeHtwYWRkaW5nLXJpZ2h0OjE3cHh9LmZzbGlnaHRib3gtdHJhbnNmb3JtLXRyYW5zaXRpb257dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzfS5mc2xpZ2h0Ym94LWNvbnRhaW5lcntmb250LWZhbWlseTpBcmlhbCxzYW5zLXNlcmlmO3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudChyZ2JhKDMwLDMwLDMwLC45KSwjMDAwIDE4MTAlKTt0b3VjaC1hY3Rpb246cGluY2gtem9vbTt6LWluZGV4OjEwMDAwMDAwMDA7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudH0uZnNsaWdodGJveC1jb250YWluZXIgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9LmZzbGlnaHRib3gtc3ZnLXBhdGh7dHJhbnNpdGlvbjpmaWxsIC4xNXMgZWFzZTtmaWxsOiNkZGR9LmZzbGlnaHRib3gtbmF2e2hlaWdodDo0NXB4O3dpZHRoOjEwMCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowfS5mc2xpZ2h0Ym94LXNsaWRlLW51bWJlci1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoxMDAlO2ZvbnQtc2l6ZToxNXB4O2NvbG9yOiNkN2Q3ZDc7ei1pbmRleDowO21heC13aWR0aDo1NXB4O3RleHQtYWxpZ246bGVmdH0uZnNsaWdodGJveC1zbGlkZS1udW1iZXItY29udGFpbmVyIC5mc2xpZ2h0Ym94LWZsZXgtY2VudGVyZWR7aGVpZ2h0OjEwMCV9LmZzbGlnaHRib3gtc2xhc2h7ZGlzcGxheTpibG9jazttYXJnaW46MCA1cHg7d2lkdGg6MXB4O2hlaWdodDoxMnB4O3RyYW5zZm9ybTpyb3RhdGUoMTVkZWcpO2JhY2tncm91bmQ6I2ZmZn0uZnNsaWdodGJveC10b29sYmFye3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MztyaWdodDowO3RvcDowO2hlaWdodDoxMDAlO2Rpc3BsYXk6ZmxleDtiYWNrZ3JvdW5kOnJnYmEoMzUsMzUsMzUsLjY1KX0uZnNsaWdodGJveC10b29sYmFyLWJ1dHRvbntoZWlnaHQ6MTAwJTt3aWR0aDo0NXB4O2N1cnNvcjpwb2ludGVyfS5mc2xpZ2h0Ym94LXRvb2xiYXItYnV0dG9uOmhvdmVyIC5mc2xpZ2h0Ym94LXN2Zy1wYXRoe2ZpbGw6I2ZmZn0uZnNsaWdodGJveC1zbGlkZS1idG4tY29udGFpbmVye2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZzoxMnB4IDEycHggMTJweCA2cHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtjdXJzb3I6cG9pbnRlcjt6LWluZGV4OjM7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9QG1lZGlhIChtaW4td2lkdGg6NDc2cHgpey5mc2xpZ2h0Ym94LXNsaWRlLWJ0bi1jb250YWluZXJ7cGFkZGluZzoyMnB4IDIycHggMjJweCA2cHh9fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZnNsaWdodGJveC1zbGlkZS1idG4tY29udGFpbmVye3BhZGRpbmc6MzBweCAzMHB4IDMwcHggNnB4fX0uZnNsaWdodGJveC1zbGlkZS1idG4tY29udGFpbmVyOmhvdmVyIC5mc2xpZ2h0Ym94LXN2Zy1wYXRoe2ZpbGw6I2YxZjFmMX0uZnNsaWdodGJveC1zbGlkZS1idG57cGFkZGluZzo5cHg7Zm9udC1zaXplOjI2cHg7YmFja2dyb3VuZDpyZ2JhKDM1LDM1LDM1LC42NSl9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5mc2xpZ2h0Ym94LXNsaWRlLWJ0bntwYWRkaW5nOjEwcHh9fUBtZWRpYSAobWluLXdpZHRoOjE2MDBweCl7LmZzbGlnaHRib3gtc2xpZGUtYnRue3BhZGRpbmc6MTFweH19LmZzbGlnaHRib3gtc2xpZGUtYnRuLWNvbnRhaW5lci1wcmV2aW91c3tsZWZ0OjB9QG1lZGlhIChtYXgtd2lkdGg6NDc1Ljk5cHgpey5mc2xpZ2h0Ym94LXNsaWRlLWJ0bi1jb250YWluZXItcHJldmlvdXN7cGFkZGluZy1sZWZ0OjNweH19LmZzbGlnaHRib3gtc2xpZGUtYnRuLWNvbnRhaW5lci1uZXh0e3JpZ2h0OjA7cGFkZGluZy1sZWZ0OjEycHg7cGFkZGluZy1yaWdodDozcHh9QG1lZGlhIChtaW4td2lkdGg6NDc2cHgpey5mc2xpZ2h0Ym94LXNsaWRlLWJ0bi1jb250YWluZXItbmV4dHtwYWRkaW5nLWxlZnQ6MjJweH19QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5mc2xpZ2h0Ym94LXNsaWRlLWJ0bi1jb250YWluZXItbmV4dHtwYWRkaW5nLWxlZnQ6MzBweH19QG1lZGlhIChtaW4td2lkdGg6NDc2cHgpey5mc2xpZ2h0Ym94LXNsaWRlLWJ0bi1jb250YWluZXItbmV4dHtwYWRkaW5nLXJpZ2h0OjZweH19LmZzbGlnaHRib3gtZG93bi1ldmVudC1kZXRlY3Rvcntwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjF9LmZzbGlnaHRib3gtc2xpZGUtc3dpcGluZy1ob3ZlcmVye3otaW5kZXg6NH0uZnNsaWdodGJveC1pbnZhbGlkLWZpbGUtd3JhcHBlcntmb250LXNpemU6MjJweDtjb2xvcjojZWFlYmViO21hcmdpbjphdXRvfS5mc2xpZ2h0Ym94LXZpZGVve29iamVjdC1maXQ6Y292ZXJ9LmZzbGlnaHRib3gteW91dHViZS1pZnJhbWV7Ym9yZGVyOjB9LmZzbGlnaHRib3hse2Rpc3BsYXk6YmxvY2s7bWFyZ2luOmF1dG87cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7d2lkdGg6NjdweDtoZWlnaHQ6NjdweH0uZnNsaWdodGJveGwgZGl2e2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjU0cHg7aGVpZ2h0OjU0cHg7bWFyZ2luOjZweDtib3JkZXI6NXB4IHNvbGlkO2JvcmRlci1jb2xvcjojOTk5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6NTAlO2FuaW1hdGlvbjpmc2xpZ2h0Ym94bCAxLjJzIGN1YmljLWJlemllciguNSwwLC41LDEpIGluZmluaXRlfS5mc2xpZ2h0Ym94bCBkaXY6bnRoLWNoaWxkKDEpe2FuaW1hdGlvbi1kZWxheTotLjQ1c30uZnNsaWdodGJveGwgZGl2Om50aC1jaGlsZCgyKXthbmltYXRpb24tZGVsYXk6LS4zc30uZnNsaWdodGJveGwgZGl2Om50aC1jaGlsZCgzKXthbmltYXRpb24tZGVsYXk6LS4xNXN9QGtleWZyYW1lcyBmc2xpZ2h0Ym94bHswJXt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX0uZnNsaWdodGJveC1zb3VyY2V7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoyO29wYWNpdHk6MH1cIikpLGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobykpO2Z1bmN0aW9uIEwoZSl7dmFyIHQsbj1lLnByb3BzLG89MCxpPXt9O3RoaXMuZ2V0U291cmNlVHlwZUZyb21Mb2NhbFN0b3JhZ2VCeVVybD1mdW5jdGlvbihlKXtyZXR1cm4gdFtlXT90W2VdOnIoZSl9LHRoaXMuaGFuZGxlUmVjZWl2ZWRTb3VyY2VUeXBlRm9yVXJsPWZ1bmN0aW9uKGUsbil7aWYoITE9PT1pW25dJiYoby0tLFwiaW52YWxpZFwiIT09ZT9pW25dPWU6ZGVsZXRlIGlbbl0sMD09PW8pKXshZnVuY3Rpb24oZSx0KXtmb3IodmFyIG4gaW4gdCllW25dPXRbbl19KHQsaSk7dHJ5e2xvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZnNsaWdodGJveC10eXBlc1wiLEpTT04uc3RyaW5naWZ5KHQpKX1jYXRjaChlKXt9fX07dmFyIHI9ZnVuY3Rpb24oZSl7bysrLGlbZV09ITF9O2lmKG4uZGlzYWJsZUxvY2FsU3RvcmFnZSl0aGlzLmdldFNvdXJjZVR5cGVGcm9tTG9jYWxTdG9yYWdlQnlVcmw9ZnVuY3Rpb24oKXt9LHRoaXMuaGFuZGxlUmVjZWl2ZWRTb3VyY2VUeXBlRm9yVXJsPWZ1bmN0aW9uKCl7fTtlbHNle3RyeXt0PUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmc2xpZ2h0Ym94LXR5cGVzXCIpKX1jYXRjaChlKXt9dHx8KHQ9e30sdGhpcy5nZXRTb3VyY2VUeXBlRnJvbUxvY2FsU3RvcmFnZUJ5VXJsPXIpfX1mdW5jdGlvbiBBKGUsdCxuLG8pe3ZhciBpPWUuZGF0YSxyPWUuZWxlbWVudHMuc291cmNlcyxzPW4vbyxhPTA7dGhpcy5hZGp1c3RTaXplPWZ1bmN0aW9uKCl7aWYoKGE9aS5tYXhTb3VyY2VXaWR0aC9zKTxpLm1heFNvdXJjZUhlaWdodClyZXR1cm4gbjxpLm1heFNvdXJjZVdpZHRoJiYoYT1vKSxjKCk7YT1vPmkubWF4U291cmNlSGVpZ2h0P2kubWF4U291cmNlSGVpZ2h0Om8sYygpfTt2YXIgYz1mdW5jdGlvbigpe3JbdF0uc3R5bGUud2lkdGg9YSpzK1wicHhcIixyW3RdLnN0eWxlLmhlaWdodD1hK1wicHhcIn19ZnVuY3Rpb24gQyhlLHQpe3ZhciBuPXRoaXMsbz1lLmNvbGxlY3Rpb25zLnNvdXJjZVNpemVycyxpPWUuZWxlbWVudHMscj1pLnNvdXJjZUFuaW1hdGlvbldyYXBwZXJzLHM9aS5zb3VyY2VzLGE9ZS5pc2wsYz1lLnJlc29sdmU7ZnVuY3Rpb24gbChlLG4pe29bdF09YyhBLFt0LGUsbl0pLG9bdF0uYWRqdXN0U2l6ZSgpfXRoaXMucnVuQWN0aW9ucz1mdW5jdGlvbihlLG8pe2FbdF09ITAsc1t0XS5jbGFzc0xpc3QuYWRkKHgpLHJbdF0uY2xhc3NMaXN0LmFkZChnKSxyW3RdLnJlbW92ZUNoaWxkKHJbdF0uZmlyc3RDaGlsZCksbChlLG8pLG4ucnVuQWN0aW9ucz1sfX1mdW5jdGlvbiBFKGUsdCl7dmFyIG4sbz10aGlzLGk9ZS5lbGVtZW50cy5zb3VyY2VzLHI9ZS5wcm9wcyxzPSgwLGUucmVzb2x2ZSkoQyxbdF0pO3RoaXMuaGFuZGxlSW1hZ2VMb2FkPWZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0LG49dC5uYXR1cmFsV2lkdGgsbz10Lm5hdHVyYWxIZWlnaHQ7cy5ydW5BY3Rpb25zKG4sbyl9LHRoaXMuaGFuZGxlVmlkZW9Mb2FkPWZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0LG89dC52aWRlb1dpZHRoLGk9dC52aWRlb0hlaWdodDtuPSEwLHMucnVuQWN0aW9ucyhvLGkpfSx0aGlzLmhhbmRsZU5vdE1ldGFEYXRlZFZpZGVvTG9hZD1mdW5jdGlvbigpe258fG8uaGFuZGxlWW91dHViZUxvYWQoKX0sdGhpcy5oYW5kbGVZb3V0dWJlTG9hZD1mdW5jdGlvbigpe3ZhciBlPTE5MjAsdD0xMDgwO3IubWF4WW91dHViZURpbWVuc2lvbnMmJihlPXIubWF4WW91dHViZURpbWVuc2lvbnMud2lkdGgsdD1yLm1heFlvdXR1YmVEaW1lbnNpb25zLmhlaWdodCkscy5ydW5BY3Rpb25zKGUsdCl9LHRoaXMuaGFuZGxlQ3VzdG9tTG9hZD1mdW5jdGlvbigpe3ZhciBlPWlbdF0sbj1lLm9mZnNldFdpZHRoLHI9ZS5vZmZzZXRIZWlnaHQ7biYmcj9zLnJ1bkFjdGlvbnMobixyKTpzZXRUaW1lb3V0KG8uaGFuZGxlQ3VzdG9tTG9hZCl9fWZ1bmN0aW9uIEYoZSx0LG4pe3ZhciBvPWUuZWxlbWVudHMuc291cmNlcyxpPWUucHJvcHMuY3VzdG9tQ2xhc3NlcyxyPWlbdF0/aVt0XTpcIlwiO29bdF0uY2xhc3NOYW1lPW4rXCIgXCIrcn1mdW5jdGlvbiBJKGUsdCl7dmFyIG49ZS5lbGVtZW50cy5zb3VyY2VzLG89ZS5wcm9wcy5jdXN0b21BdHRyaWJ1dGVzO2Zvcih2YXIgaSBpbiBvW3RdKW5bdF0uc2V0QXR0cmlidXRlKGksb1t0XVtpXSl9ZnVuY3Rpb24gVChlLHQpe3ZhciBuPWUuY29sbGVjdGlvbnMuc291cmNlTG9hZEhhbmRsZXJzLG89ZS5lbGVtZW50cyxpPW8uc291cmNlcyxyPW8uc291cmNlQW5pbWF0aW9uV3JhcHBlcnMscz1lLnByb3BzLnNvdXJjZXM7aVt0XT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLEYoZSx0LHkpLGlbdF0uc3JjPXNbdF0saVt0XS5vbmxvYWQ9blt0XS5oYW5kbGVJbWFnZUxvYWQsSShlLHQpLHJbdF0uYXBwZW5kQ2hpbGQoaVt0XSl9ZnVuY3Rpb24gTihlLHQpe3ZhciBuPWUuY29sbGVjdGlvbnMuc291cmNlTG9hZEhhbmRsZXJzLG89ZS5lbGVtZW50cyxpPW8uc291cmNlcyxyPW8uc291cmNlQW5pbWF0aW9uV3JhcHBlcnMscz1lLnByb3BzLGE9cy5zb3VyY2VzLGM9cy52aWRlb3NQb3N0ZXJzO2lbdF09ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpLEYoZSx0LHkpLGlbdF0uc3JjPWFbdF0saVt0XS5vbmxvYWRlZG1ldGFkYXRhPWZ1bmN0aW9uKGUpe25bdF0uaGFuZGxlVmlkZW9Mb2FkKGUpfSxpW3RdLmNvbnRyb2xzPSEwLEkoZSx0KSxjW3RdJiYoaVt0XS5wb3N0ZXI9Y1t0XSk7dmFyIGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNvdXJjZVwiKTtsLnNyYz1hW3RdLGlbdF0uYXBwZW5kQ2hpbGQobCksc2V0VGltZW91dChuW3RdLmhhbmRsZU5vdE1ldGFEYXRlZFZpZGVvTG9hZCwzZTMpLHJbdF0uYXBwZW5kQ2hpbGQoaVt0XSl9ZnVuY3Rpb24geihlLHQpe3ZhciBuPWUuY29sbGVjdGlvbnMuc291cmNlTG9hZEhhbmRsZXJzLG89ZS5lbGVtZW50cyxyPW8uc291cmNlcyxzPW8uc291cmNlQW5pbWF0aW9uV3JhcHBlcnMsYT1lLnByb3BzLnNvdXJjZXM7clt0XT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpLEYoZSx0LFwiXCIuY29uY2F0KHksXCIgXCIpLmNvbmNhdChpLFwieW91dHViZS1pZnJhbWVcIikpO3ZhciBjPWFbdF0sbD1jLnNwbGl0KFwiP1wiKVsxXTtyW3RdLnNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1wiLmNvbmNhdChjLm1hdGNoKC9eLiooeW91dHUuYmVcXC98dlxcL3x1XFwvXFx3XFwvfGVtYmVkXFwvfHdhdGNoXFw/dj18XFwmdj0pKFteI1xcJlxcP10qKS4qLylbMl0sXCI/XCIpLmNvbmNhdChsfHxcIlwiKSxyW3RdLmFsbG93RnVsbHNjcmVlbj0hMCxJKGUsdCksc1t0XS5hcHBlbmRDaGlsZChyW3RdKSxuW3RdLmhhbmRsZVlvdXR1YmVMb2FkKCl9ZnVuY3Rpb24gUChlLHQpe3ZhciBuPWUuY29sbGVjdGlvbnMuc291cmNlTG9hZEhhbmRsZXJzLG89ZS5lbGVtZW50cyxpPW8uc291cmNlcyxyPW8uc291cmNlQW5pbWF0aW9uV3JhcHBlcnMscz1lLnByb3BzLnNvdXJjZXM7aVt0XT1zW3RdLEYoZSx0LFwiXCIuY29uY2F0KGlbdF0uY2xhc3NOYW1lLFwiIFwiKS5jb25jYXQoeSkpLHJbdF0uYXBwZW5kQ2hpbGQoaVt0XSksblt0XS5oYW5kbGVDdXN0b21Mb2FkKCl9ZnVuY3Rpb24gayhlLHQpe3ZhciBuPWUuZWxlbWVudHMsbz1uLnNvdXJjZXMscj1uLnNvdXJjZUFuaW1hdGlvbldyYXBwZXJzO2UucHJvcHMuc291cmNlcztvW3RdPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksb1t0XS5jbGFzc05hbWU9XCJcIi5jb25jYXQoaSxcImludmFsaWQtZmlsZS13cmFwcGVyIFwiKS5jb25jYXQoYyksb1t0XS5pbm5lckhUTUw9XCJJbnZhbGlkIHNvdXJjZVwiLHJbdF0uY2xhc3NMaXN0LmFkZChnKSxyW3RdLnJlbW92ZUNoaWxkKHJbdF0uZmlyc3RDaGlsZCksclt0XS5hcHBlbmRDaGlsZChvW3RdKX1mdW5jdGlvbiBIKGUpe3ZhciB0PWUuY29sbGVjdGlvbnMsbj10LnNvdXJjZUxvYWRIYW5kbGVycyxvPXQuc291cmNlc1JlbmRlckZ1bmN0aW9ucyxpPWUuY29yZS5zb3VyY2VEaXNwbGF5RmFjYWRlLHI9ZS5yZXNvbHZlO3RoaXMucnVuQWN0aW9uc0ZvclNvdXJjZVR5cGVBbmRJbmRleD1mdW5jdGlvbih0LHMpe3ZhciBhO3N3aXRjaChcImludmFsaWRcIiE9PXQmJihuW3NdPXIoRSxbc10pKSx0KXtjYXNlXCJpbWFnZVwiOmE9VDticmVhaztjYXNlXCJ2aWRlb1wiOmE9TjticmVhaztjYXNlXCJ5b3V0dWJlXCI6YT16O2JyZWFrO2Nhc2VcImN1c3RvbVwiOmE9UDticmVhaztkZWZhdWx0OmE9a31vW3NdPWZ1bmN0aW9uKCl7cmV0dXJuIGEoZSxzKX0saS5kaXNwbGF5U291cmNlc1doaWNoU2hvdWxkQmVEaXNwbGF5ZWQoKX19ZnVuY3Rpb24gVygpe3ZhciBlLHQsbixvPXtpc1VybFlvdXR1YmVPbmU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7cmV0dXJuIHQuaHJlZj1lLFwid3d3LnlvdXR1YmUuY29tXCI9PT10Lmhvc3RuYW1lfHxcInlvdXR1LmJlXCI9PT10Lmhvc3RuYW1lfSxnZXRUeXBlRnJvbVJlc3BvbnNlQ29udGVudFR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuc2xpY2UoMCxlLmluZGV4T2YoXCIvXCIpKX19O2Z1bmN0aW9uIGkoKXtpZig0IT09bi5yZWFkeVN0YXRlKXtpZigyPT09bi5yZWFkeVN0YXRlKXt2YXIgZTtzd2l0Y2goby5nZXRUeXBlRnJvbVJlc3BvbnNlQ29udGVudFR5cGUobi5nZXRSZXNwb25zZUhlYWRlcihcImNvbnRlbnQtdHlwZVwiKSkpe2Nhc2VcImltYWdlXCI6ZT1cImltYWdlXCI7YnJlYWs7Y2FzZVwidmlkZW9cIjplPVwidmlkZW9cIjticmVhaztkZWZhdWx0OmU9XCJpbnZhbGlkXCJ9bi5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxuLmFib3J0KCksdChlKX19ZWxzZSB0KFwiaW52YWxpZFwiKX10aGlzLnNldFVybFRvQ2hlY2s9ZnVuY3Rpb24odCl7ZT10fSx0aGlzLmdldFNvdXJjZVR5cGU9ZnVuY3Rpb24ocil7aWYoby5pc1VybFlvdXR1YmVPbmUoZSkpcmV0dXJuIHIoXCJ5b3V0dWJlXCIpO3Q9ciwobj1uZXcgWE1MSHR0cFJlcXVlc3QpLm9ucmVhZHlzdGF0ZWNoYW5nZT1pLG4ub3BlbihcIkdFVFwiLGUsITApLG4uc2VuZCgpfX1mdW5jdGlvbiBSKGUsdCxuKXt2YXIgbz1lLnByb3BzLGk9by50eXBlcyxyPW8udHlwZSxzPW8uc291cmNlcyxhPWUucmVzb2x2ZTt0aGlzLmdldFR5cGVTZXRCeUNsaWVudEZvckluZGV4PWZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiBpJiZpW2VdP3Q9aVtlXTpyJiYodD1yKSx0fSx0aGlzLnJldHJpZXZlVHlwZVdpdGhYaHJGb3JJbmRleD1mdW5jdGlvbihlKXt2YXIgbz1hKFcpO28uc2V0VXJsVG9DaGVjayhzW2VdKSxvLmdldFNvdXJjZVR5cGUoKGZ1bmN0aW9uKG8pe3QuaGFuZGxlUmVjZWl2ZWRTb3VyY2VUeXBlRm9yVXJsKG8sc1tlXSksbi5ydW5BY3Rpb25zRm9yU291cmNlVHlwZUFuZEluZGV4KG8sZSl9KSl9fWZ1bmN0aW9uIEQoZSx0KXt2YXIgbj1lLmNvcmUuc3RhZ2VNYW5hZ2VyLG89ZS5lbGVtZW50cyxpPW8uc213LHI9by5zb3VyY2VXcmFwcGVyc0NvbnRhaW5lcixzPWUucHJvcHMsbD0wLGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtmdW5jdGlvbiBwKGUpe2Yuc3R5bGUudHJhbnNmb3JtPVwidHJhbnNsYXRlWChcIi5jb25jYXQoZStsLFwicHgpXCIpLGw9MH1mdW5jdGlvbiBoKCl7cmV0dXJuKDErcy5zbGlkZURpc3RhbmNlKSppbm5lcldpZHRofWYuY2xhc3NOYW1lPVwiXCIuY29uY2F0KGQsXCIgXCIpLmNvbmNhdChhLFwiIFwiKS5jb25jYXQoYyksZi5zPWZ1bmN0aW9uKCl7Zi5zdHlsZS5kaXNwbGF5PVwiZmxleFwifSxmLmg9ZnVuY3Rpb24oKXtmLnN0eWxlLmRpc3BsYXk9XCJub25lXCJ9LGYuYT1mdW5jdGlvbigpe2YuY2xhc3NMaXN0LmFkZCh1KX0sZi5kPWZ1bmN0aW9uKCl7Zi5jbGFzc0xpc3QucmVtb3ZlKHUpfSxmLm49ZnVuY3Rpb24oKXtmLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNmb3JtXCIpfSxmLnY9ZnVuY3Rpb24oZSl7cmV0dXJuIGw9ZSxmfSxmLm5lPWZ1bmN0aW9uKCl7cCgtaCgpKX0sZi56PWZ1bmN0aW9uKCl7cCgwKX0sZi5wPWZ1bmN0aW9uKCl7cChoKCkpfSxuLmkodCl8fGYuaCgpLGlbdF09ZixyLmFwcGVuZENoaWxkKGYpLGZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5lbGVtZW50cyxvPW4uc213LGk9bi5zb3VyY2VBbmltYXRpb25XcmFwcGVycyxyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3MuY2xhc3NOYW1lPVwiZnNsaWdodGJveGxcIjtmb3IodmFyIGE9MDthPDM7YSsrKXt2YXIgYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3MuYXBwZW5kQ2hpbGQoYyl9ci5hcHBlbmRDaGlsZChzKSxvW3RdLmFwcGVuZENoaWxkKHIpLGlbdF09cn0oZSx0KX1mdW5jdGlvbiBPKGUsdCxuLG8pe3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJzdmdcIik7ci5zZXRBdHRyaWJ1dGVOUyhudWxsLFwid2lkdGhcIix0KSxyLnNldEF0dHJpYnV0ZU5TKG51bGwsXCJoZWlnaHRcIix0KSxyLnNldEF0dHJpYnV0ZU5TKG51bGwsXCJ2aWV3Qm94XCIsbik7dmFyIHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcInBhdGhcIik7cmV0dXJuIHMuc2V0QXR0cmlidXRlTlMobnVsbCxcImNsYXNzXCIsXCJcIi5jb25jYXQoaSxcInN2Zy1wYXRoXCIpKSxzLnNldEF0dHJpYnV0ZU5TKG51bGwsXCJkXCIsbyksci5hcHBlbmRDaGlsZChzKSxlLmFwcGVuZENoaWxkKHIpLHJ9ZnVuY3Rpb24gTShlLHQpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIG4uY2xhc3NOYW1lPVwiXCIuY29uY2F0KGksXCJ0b29sYmFyLWJ1dHRvbiBcIikuY29uY2F0KGMpLG4udGl0bGU9dCxlLmFwcGVuZENoaWxkKG4pLG59ZnVuY3Rpb24gaihlLHQpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bi5jbGFzc05hbWU9XCJcIi5jb25jYXQoaSxcInRvb2xiYXJcIiksdC5hcHBlbmRDaGlsZChuKSxmdW5jdGlvbihlLHQpe3ZhciBuPWUuY29tcG9uZW50c1NlcnZpY2VzLG89ZS5kYXRhLGk9ZS5mcyxyPVwiTTQuNSAxMUgzdjRoNHYtMS41SDQuNVYxMXpNMyA3aDEuNVY0LjVIN1YzSDN2NHptMTAuNSA2LjVIMTFWMTVoNHYtNGgtMS41djIuNXpNMTEgM3YxLjVoMi41VjdIMTVWM2gtNHpcIixzPU0odCk7cy50aXRsZT1cIkVudGVyIGZ1bGxzY3JlZW5cIjt2YXIgYT1PKHMsXCIyMHB4XCIsXCIwIDAgMTggMThcIixyKTtuLm9mcz1mdW5jdGlvbigpe28uaWZzPSEwLHMudGl0bGU9XCJFeGl0IGZ1bGxzY3JlZW5cIixhLnNldEF0dHJpYnV0ZU5TKG51bGwsXCJ3aWR0aFwiLFwiMjRweFwiKSxhLnNldEF0dHJpYnV0ZU5TKG51bGwsXCJoZWlnaHRcIixcIjI0cHhcIiksYS5zZXRBdHRyaWJ1dGVOUyhudWxsLFwidmlld0JveFwiLFwiMCAwIDk1MCAxMDI0XCIpLGEuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGVOUyhudWxsLFwiZFwiLFwiTTY4MiAzNDJoMTI4djg0aC0yMTJ2LTIxMmg4NHYxMjh6TTU5OCA4MTB2LTIxMmgyMTJ2ODRoLTEyOHYxMjhoLTg0ek0zNDIgMzQydi0xMjhoODR2MjEyaC0yMTJ2LTg0aDEyOHpNMjE0IDY4MnYtODRoMjEydjIxMmgtODR2LTEyOGgtMTI4elwiKX0sbi54ZnM9ZnVuY3Rpb24oKXtvLmlmcz0hMSxzLnRpdGxlPVwiRW50ZXIgZnVsbHNjcmVlblwiLGEuc2V0QXR0cmlidXRlTlMobnVsbCxcIndpZHRoXCIsXCIyMHB4XCIpLGEuc2V0QXR0cmlidXRlTlMobnVsbCxcImhlaWdodFwiLFwiMjBweFwiKSxhLnNldEF0dHJpYnV0ZU5TKG51bGwsXCJ2aWV3Qm94XCIsXCIwIDAgMTggMThcIiksYS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZU5TKG51bGwsXCJkXCIscil9LHMub25jbGljaz1pLnR9KGUsbiksZnVuY3Rpb24oZSx0KXt2YXIgbj1NKHQsXCJDbG9zZVwiKTtuLm9uY2xpY2s9ZS5jb3JlLmxpZ2h0Ym94Q2xvc2VyLmNsb3NlTGlnaHRib3gsTyhuLFwiMjBweFwiLFwiMCAwIDI0IDI0XCIsXCJNIDQuNzA3MDMxMiAzLjI5Mjk2ODggTCAzLjI5Mjk2ODggNC43MDcwMzEyIEwgMTAuNTg1OTM4IDEyIEwgMy4yOTI5Njg4IDE5LjI5Mjk2OSBMIDQuNzA3MDMxMiAyMC43MDcwMzEgTCAxMiAxMy40MTQwNjIgTCAxOS4yOTI5NjkgMjAuNzA3MDMxIEwgMjAuNzA3MDMxIDE5LjI5Mjk2OSBMIDEzLjQxNDA2MiAxMiBMIDIwLjcwNzAzMSA0LjcwNzAzMTIgTCAxOS4yOTI5NjkgMy4yOTI5Njg4IEwgMTIgMTAuNTg1OTM4IEwgNC43MDcwMzEyIDMuMjkyOTY4OCB6XCIpfShlLG4pfWZ1bmN0aW9uIFgoZSl7dmFyIHQ9ZS5wcm9wcy5zb3VyY2VzLG49ZS5lbGVtZW50cy5jb250YWluZXIsbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO28uY2xhc3NOYW1lPVwiXCIuY29uY2F0KGksXCJuYXZcIiksbi5hcHBlbmRDaGlsZChvKSxqKGUsbyksdC5sZW5ndGg+MSYmZnVuY3Rpb24oZSx0KXt2YXIgbj1lLmNvbXBvbmVudHNTZXJ2aWNlcyxvPWUucHJvcHMuc291cmNlcyxyPShlLnN0YWdlSW5kZXhlcyxkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtyLmNsYXNzTmFtZT1cIlwiLmNvbmNhdChpLFwic2xpZGUtbnVtYmVyLWNvbnRhaW5lclwiKTt2YXIgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3MuY2xhc3NOYW1lPWM7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7bi5zZXRTbGlkZU51bWJlcj1mdW5jdGlvbihlKXtyZXR1cm4gYS5pbm5lckhUTUw9ZX07dmFyIGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7bC5jbGFzc05hbWU9XCJcIi5jb25jYXQoaSxcInNsYXNoXCIpO3ZhciB1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dS5pbm5lckhUTUw9by5sZW5ndGgsci5hcHBlbmRDaGlsZChzKSxzLmFwcGVuZENoaWxkKGEpLHMuYXBwZW5kQ2hpbGQobCkscy5hcHBlbmRDaGlsZCh1KSx0LmFwcGVuZENoaWxkKHIpLHNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7cy5vZmZzZXRXaWR0aD41NSYmKHIuc3R5bGUuanVzdGlmeUNvbnRlbnQ9XCJmbGV4LXN0YXJ0XCIpfSkpfShlLG8pfWZ1bmN0aW9uIEIoZSx0LG4sbyl7dmFyIGk9ZS5lbGVtZW50cy5jb250YWluZXIscj1uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK24uc2xpY2UoMSkscz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3MuY2xhc3NOYW1lPVwiXCIuY29uY2F0KHAsXCIgXCIpLmNvbmNhdChwLFwiLVwiKS5jb25jYXQobikscy50aXRsZT1cIlwiLmNvbmNhdChyLFwiIHNsaWRlXCIpLHMub25jbGljaz10LGZ1bmN0aW9uKGUsdCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtuLmNsYXNzTmFtZT1cIlwiLmNvbmNhdChmLFwiIFwiKS5jb25jYXQoYyksTyhuLFwiMjBweFwiLFwiMCAwIDIwIDIwXCIsdCksZS5hcHBlbmRDaGlsZChuKX0ocyxvKSxpLmFwcGVuZENoaWxkKHMpfWZ1bmN0aW9uIFUoZSl7dmFyIHQ9ZS5jb3JlLG49dC5saWdodGJveENsb3NlcixvPXQuc2xpZGVDaGFuZ2VGYWNhZGUsaT1lLmZzO3RoaXMubGlzdGVuZXI9ZnVuY3Rpb24oZSl7c3dpdGNoKGUua2V5KXtjYXNlXCJFc2NhcGVcIjpuLmNsb3NlTGlnaHRib3goKTticmVhaztjYXNlXCJBcnJvd0xlZnRcIjpvLmNoYW5nZVRvUHJldmlvdXMoKTticmVhaztjYXNlXCJBcnJvd1JpZ2h0XCI6by5jaGFuZ2VUb05leHQoKTticmVhaztjYXNlXCJGMTFcIjplLnByZXZlbnREZWZhdWx0KCksaS50KCl9fX1mdW5jdGlvbiBxKGUpe3ZhciB0PWUuZWxlbWVudHMsbj1lLnNvdXJjZVBvaW50ZXJQcm9wcyxvPWUuc3RhZ2VJbmRleGVzO2Z1bmN0aW9uIGkoZSxvKXt0LnNtd1tlXS52KG4uc3dpcGVkWClbb10oKX10aGlzLnJ1bkFjdGlvbnNGb3JFdmVudD1mdW5jdGlvbihlKXt2YXIgcixhLGM7dC5jb250YWluZXIuY29udGFpbnModC5zbGlkZVN3aXBpbmdIb3ZlcmVyKXx8dC5jb250YWluZXIuYXBwZW5kQ2hpbGQodC5zbGlkZVN3aXBpbmdIb3ZlcmVyKSxyPXQuY29udGFpbmVyLGE9cywoYz1yLmNsYXNzTGlzdCkuY29udGFpbnMoYSl8fGMuYWRkKGEpLG4uc3dpcGVkWD1lLnNjcmVlblgtbi5kb3duU2NyZWVuWDt2YXIgbD1vLnByZXZpb3VzLHU9by5uZXh0O2koby5jdXJyZW50LFwielwiKSx2b2lkIDAhPT1sJiZuLnN3aXBlZFg+MD9pKGwsXCJuZVwiKTp2b2lkIDAhPT11JiZuLnN3aXBlZFg8MCYmaSh1LFwicFwiKX19ZnVuY3Rpb24gVihlKXt2YXIgdD1lLnByb3BzLnNvdXJjZXMsbj1lLnJlc29sdmUsbz1lLnNvdXJjZVBvaW50ZXJQcm9wcyxpPW4ocSk7MT09PXQubGVuZ3RoP3RoaXMubGlzdGVuZXI9ZnVuY3Rpb24oKXtvLnN3aXBlZFg9MX06dGhpcy5saXN0ZW5lcj1mdW5jdGlvbihlKXtvLmlzUG9pbnRlcmluZyYmaS5ydW5BY3Rpb25zRm9yRXZlbnQoZSl9fWZ1bmN0aW9uIF8oZSl7dmFyIHQ9ZS5jb3JlLnNsaWRlSW5kZXhDaGFuZ2VyLG49ZS5lbGVtZW50cy5zbXcsbz1lLnN0YWdlSW5kZXhlcyxpPWUuc3dzO2Z1bmN0aW9uIHIoZSl7dmFyIHQ9bltvLmN1cnJlbnRdO3QuYSgpLHRbZV0oKX1mdW5jdGlvbiBzKGUsdCl7dm9pZCAwIT09ZSYmKG5bZV0ucygpLG5bZV1bdF0oKSl9dGhpcy5ydW5Qb3NpdGl2ZVN3aXBlZFhBY3Rpb25zPWZ1bmN0aW9uKCl7dmFyIGU9by5wcmV2aW91cztpZih2b2lkIDA9PT1lKXIoXCJ6XCIpO2Vsc2V7cihcInBcIik7dmFyIG49by5uZXh0O3QuY2hhbmdlVG8oZSk7dmFyIGE9by5wcmV2aW91cztpLmQoYSksaS5iKG4pLHIoXCJ6XCIpLHMoYSxcIm5lXCIpfX0sdGhpcy5ydW5OZWdhdGl2ZVN3aXBlZFhBY3Rpb25zPWZ1bmN0aW9uKCl7dmFyIGU9by5uZXh0O2lmKHZvaWQgMD09PWUpcihcInpcIik7ZWxzZXtyKFwibmVcIik7dmFyIG49by5wcmV2aW91czt0LmNoYW5nZVRvKGUpO3ZhciBhPW8ubmV4dDtpLmQoYSksaS5iKG4pLHIoXCJ6XCIpLHMoYSxcInBcIil9fX1mdW5jdGlvbiBZKGUsdCl7ZS5jb250YWlucyh0KSYmZS5yZW1vdmVDaGlsZCh0KX1mdW5jdGlvbiBKKGUpe3ZhciB0PWUuY29yZS5saWdodGJveENsb3NlcixuPWUuZWxlbWVudHMsbz1lLnJlc29sdmUsaT1lLnNvdXJjZVBvaW50ZXJQcm9wcyxyPW8oXyk7dGhpcy5ydW5Ob1N3aXBlQWN0aW9ucz1mdW5jdGlvbigpe1kobi5jb250YWluZXIsbi5zbGlkZVN3aXBpbmdIb3ZlcmVyKSxpLmlzU291cmNlRG93bkV2ZW50VGFyZ2V0fHx0LmNsb3NlTGlnaHRib3goKSxpLmlzUG9pbnRlcmluZz0hMX0sdGhpcy5ydW5BY3Rpb25zPWZ1bmN0aW9uKCl7aS5zd2lwZWRYPjA/ci5ydW5Qb3NpdGl2ZVN3aXBlZFhBY3Rpb25zKCk6ci5ydW5OZWdhdGl2ZVN3aXBlZFhBY3Rpb25zKCksWShuLmNvbnRhaW5lcixuLnNsaWRlU3dpcGluZ0hvdmVyZXIpLG4uY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUocyksaS5pc1BvaW50ZXJpbmc9ITF9fWZ1bmN0aW9uIEcoZSl7dmFyIHQ9ZS5yZXNvbHZlLG49ZS5zb3VyY2VQb2ludGVyUHJvcHMsbz10KEopO3RoaXMubGlzdGVuZXI9ZnVuY3Rpb24oKXtuLmlzUG9pbnRlcmluZyYmKG4uc3dpcGVkWD9vLnJ1bkFjdGlvbnMoKTpvLnJ1bk5vU3dpcGVBY3Rpb25zKCkpfX1mdW5jdGlvbiAkKGUpe3ZhciB0PXRoaXMsbj1lLmNvcmUsbz1uLmV2ZW50c0Rpc3BhdGNoZXIsaT1uLmdsb2JhbEV2ZW50c0NvbnRyb2xsZXIscj1uLnNjcm9sbGJhclJlY29tcGVuc29yLHM9ZS5kYXRhLGE9ZS5lbGVtZW50cyxjPWUuZnMsdT1lLnByb3BzLGQ9ZS5zb3VyY2VQb2ludGVyUHJvcHM7dGhpcy5pc0xpZ2h0Ym94RmFkaW5nT3V0PSExLHRoaXMucnVuQWN0aW9ucz1mdW5jdGlvbigpe3QuaXNMaWdodGJveEZhZGluZ091dD0hMCxhLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHYpLGkucmVtb3ZlTGlzdGVuZXJzKCksdS5leGl0RnVsbHNjcmVlbk9uQ2xvc2UmJnMuaWZzJiZjLngoKSxzZXRUaW1lb3V0KChmdW5jdGlvbigpe3QuaXNMaWdodGJveEZhZGluZ091dD0hMSxkLmlzUG9pbnRlcmluZz0hMSxhLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHYpLGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGwpLHIucmVtb3ZlUmVjb21wZW5zZSgpLGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYS5jb250YWluZXIpLG8uZGlzcGF0Y2goXCJvbkNsb3NlXCIpfSksMjcwKX19ZnVuY3Rpb24gSyhlLHQpe3ZhciBuPWUuY2xhc3NMaXN0O24uY29udGFpbnModCkmJm4ucmVtb3ZlKHQpfWZ1bmN0aW9uIFEoZSl7dmFyIHQsbixvO249KHQ9ZSkuY29yZS5ldmVudHNEaXNwYXRjaGVyLG89dC5wcm9wcyxuLmRpc3BhdGNoPWZ1bmN0aW9uKGUpe29bZV0mJm9bZV0oKX0sZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jb21wb25lbnRzU2VydmljZXMsbj1lLmRhdGEsbz1lLmZzLGk9W1wiZnVsbHNjcmVlbmNoYW5nZVwiLFwid2Via2l0ZnVsbHNjcmVlbmNoYW5nZVwiLFwibW96ZnVsbHNjcmVlbmNoYW5nZVwiLFwiTVNGdWxsc2NyZWVuQ2hhbmdlXCJdO2Z1bmN0aW9uIHIoZSl7Zm9yKHZhciB0PTA7dDxpLmxlbmd0aDt0KyspZG9jdW1lbnRbZV0oaVt0XSxzKX1mdW5jdGlvbiBzKCl7ZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnR8fGRvY3VtZW50LndlYmtpdElzRnVsbFNjcmVlbnx8ZG9jdW1lbnQubW96RnVsbFNjcmVlbnx8ZG9jdW1lbnQubXNGdWxsc2NyZWVuRWxlbWVudD90Lm9mcygpOnQueGZzKCl9by5vPWZ1bmN0aW9uKCl7dC5vZnMoKTt2YXIgZT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7ZS5yZXF1ZXN0RnVsbHNjcmVlbj9lLnJlcXVlc3RGdWxsc2NyZWVuKCk6ZS5tb3pSZXF1ZXN0RnVsbFNjcmVlbj9lLm1velJlcXVlc3RGdWxsU2NyZWVuKCk6ZS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbj9lLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk6ZS5tc1JlcXVlc3RGdWxsc2NyZWVuJiZlLm1zUmVxdWVzdEZ1bGxzY3JlZW4oKX0sby54PWZ1bmN0aW9uKCl7dC54ZnMoKSxkb2N1bWVudC5leGl0RnVsbHNjcmVlbj9kb2N1bWVudC5leGl0RnVsbHNjcmVlbigpOmRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4/ZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpOmRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuP2RvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCk6ZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbiYmZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbigpfSxvLnQ9ZnVuY3Rpb24oKXtuLmlmcz9vLngoKTpvLm8oKX0sby5sPWZ1bmN0aW9uKCl7cihcImFkZEV2ZW50TGlzdGVuZXJcIil9LG8ucT1mdW5jdGlvbigpe3IoXCJyZW1vdmVFdmVudExpc3RlbmVyXCIpfX0oZSksZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jb3JlLG49dC5nbG9iYWxFdmVudHNDb250cm9sbGVyLG89dC53aW5kb3dSZXNpemVBY3Rpb25lcixpPWUuZnMscj1lLnJlc29sdmUscz1yKFUpLGE9cihWKSxjPXIoRyk7bi5hdHRhY2hMaXN0ZW5lcnM9ZnVuY3Rpb24oKXtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIixhLmxpc3RlbmVyKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsYy5saXN0ZW5lciksYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLG8ucnVuQWN0aW9ucyksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixzLmxpc3RlbmVyKSxpLmwoKX0sbi5yZW1vdmVMaXN0ZW5lcnM9ZnVuY3Rpb24oKXtkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIixhLmxpc3RlbmVyKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsYy5saXN0ZW5lcikscmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLG8ucnVuQWN0aW9ucyksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixzLmxpc3RlbmVyKSxpLnEoKX19KGUpLGZ1bmN0aW9uKGUpe3ZhciB0PWUuY29yZS5saWdodGJveENsb3NlcixuPSgwLGUucmVzb2x2ZSkoJCk7dC5jbG9zZUxpZ2h0Ym94PWZ1bmN0aW9uKCl7bi5pc0xpZ2h0Ym94RmFkaW5nT3V0fHxuLnJ1bkFjdGlvbnMoKX19KGUpLGZ1bmN0aW9uKGUpe3ZhciB0PWUuZGF0YSxuPWUuY29yZS5zY3JvbGxiYXJSZWNvbXBlbnNvcjtmdW5jdGlvbiBvKCl7ZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQ+aW5uZXJIZWlnaHQmJihkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpblJpZ2h0PXQuc2Nyb2xsYmFyV2lkdGgrXCJweFwiKX1uLmFkZFJlY29tcGVuc2U9ZnVuY3Rpb24oKXtcImNvbXBsZXRlXCI9PT1kb2N1bWVudC5yZWFkeVN0YXRlP28oKTphZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLChmdW5jdGlvbigpe28oKSxuLmFkZFJlY29tcGVuc2U9b30pKX0sbi5yZW1vdmVSZWNvbXBlbnNlPWZ1bmN0aW9uKCl7ZG9jdW1lbnQuYm9keS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1hcmdpbi1yaWdodFwiKX19KGUpLGZ1bmN0aW9uKGUpe3ZhciB0PWUuY29yZSxuPXQuc2xpZGVDaGFuZ2VGYWNhZGUsbz10LnNsaWRlSW5kZXhDaGFuZ2VyLGk9dC5zdGFnZU1hbmFnZXI7ZS5wcm9wcy5zb3VyY2VzLmxlbmd0aD4xPyhuLmNoYW5nZVRvUHJldmlvdXM9ZnVuY3Rpb24oKXtvLmp1bXBUbyhpLmdldFByZXZpb3VzU2xpZGVJbmRleCgpKX0sbi5jaGFuZ2VUb05leHQ9ZnVuY3Rpb24oKXtvLmp1bXBUbyhpLmdldE5leHRTbGlkZUluZGV4KCkpfSk6KG4uY2hhbmdlVG9QcmV2aW91cz1mdW5jdGlvbigpe30sbi5jaGFuZ2VUb05leHQ9ZnVuY3Rpb24oKXt9KX0oZSksZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jb21wb25lbnRzU2VydmljZXMsbj1lLmNvcmUsbz1uLnNsaWRlSW5kZXhDaGFuZ2VyLGk9bi5zb3VyY2VEaXNwbGF5RmFjYWRlLHI9bi5zdGFnZU1hbmFnZXIscz1lLmVsZW1lbnRzLGE9cy5zbXcsYz1zLnNvdXJjZUFuaW1hdGlvbldyYXBwZXJzLGw9ZS5pc2wsdT1lLnN0YWdlSW5kZXhlcyxkPWUuc3dzO28uY2hhbmdlVG89ZnVuY3Rpb24oZSl7dS5jdXJyZW50PWUsci51cGRhdGVTdGFnZUluZGV4ZXMoKSx0LnNldFNsaWRlTnVtYmVyKGUrMSksaS5kaXNwbGF5U291cmNlc1doaWNoU2hvdWxkQmVEaXNwbGF5ZWQoKX0sby5qdW1wVG89ZnVuY3Rpb24oZSl7dmFyIHQ9dS5wcmV2aW91cyxuPXUuY3VycmVudCxpPXUubmV4dCxzPWxbbl0sZj1sW2VdO28uY2hhbmdlVG8oZSk7Zm9yKHZhciBwPTA7cDxhLmxlbmd0aDtwKyspYVtwXS5kKCk7ZC5kKG4pLGQuYygpLHJlcXVlc3RBbmltYXRpb25GcmFtZSgoZnVuY3Rpb24oKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uKCl7dmFyIGU9dS5wcmV2aW91cyxvPXUubmV4dDtmdW5jdGlvbiBwKCl7ci5pKG4pP249PT11LnByZXZpb3VzP2Fbbl0ubmUoKTpuPT09dS5uZXh0JiZhW25dLnAoKTooYVtuXS5oKCksYVtuXS5uKCkpfXMmJmNbbl0uY2xhc3NMaXN0LmFkZChtKSxmJiZjW3UuY3VycmVudF0uY2xhc3NMaXN0LmFkZChoKSxkLmEoKSx2b2lkIDAhPT1lJiZlIT09biYmYVtlXS5uZSgpLGFbdS5jdXJyZW50XS5uKCksdm9pZCAwIT09byYmbyE9PW4mJmFbb10ucCgpLGQuYih0KSxkLmIoaSksbFtuXT9zZXRUaW1lb3V0KHAsMjYwKTpwKCl9KSl9KSl9fShlKSxmdW5jdGlvbihlKXt2YXIgdD1lLmNvcmUuc291cmNlc1BvaW50ZXJEb3duLG49ZS5lbGVtZW50cyxvPW4uc213LGk9bi5zb3VyY2VzLHI9ZS5zb3VyY2VQb2ludGVyUHJvcHMscz1lLnN0YWdlSW5kZXhlczt0Lmxpc3RlbmVyPWZ1bmN0aW9uKGUpe1wiVklERU9cIiE9PWUudGFyZ2V0LnRhZ05hbWUmJmUucHJldmVudERlZmF1bHQoKSxyLmlzUG9pbnRlcmluZz0hMCxyLmRvd25TY3JlZW5YPWUuc2NyZWVuWCxyLnN3aXBlZFg9MDt2YXIgdD1pW3MuY3VycmVudF07dCYmdC5jb250YWlucyhlLnRhcmdldCk/ci5pc1NvdXJjZURvd25FdmVudFRhcmdldD0hMDpyLmlzU291cmNlRG93bkV2ZW50VGFyZ2V0PSExO2Zvcih2YXIgbj0wO248by5sZW5ndGg7bisrKW9bbl0uZCgpfX0oZSksZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jb2xsZWN0aW9ucy5zb3VyY2VzUmVuZGVyRnVuY3Rpb25zLG49ZS5jb3JlLnNvdXJjZURpc3BsYXlGYWNhZGUsbz1lLnByb3BzLGk9ZS5zdGFnZUluZGV4ZXM7ZnVuY3Rpb24gcihlKXt0W2VdJiYodFtlXSgpLGRlbGV0ZSB0W2VdKX1uLmRpc3BsYXlTb3VyY2VzV2hpY2hTaG91bGRCZURpc3BsYXllZD1mdW5jdGlvbigpe2lmKG8ubG9hZE9ubHlDdXJyZW50U291cmNlKXIoaS5jdXJyZW50KTtlbHNlIGZvcih2YXIgZSBpbiBpKXIoaVtlXSl9fShlKSxmdW5jdGlvbihlKXt2YXIgdD1lLmNvcmUuc3RhZ2VNYW5hZ2VyLG49ZS5lbGVtZW50cyxvPW4uc213LGk9bi5zb3VyY2VBbmltYXRpb25XcmFwcGVycyxyPWUuaXNsLHM9ZS5zdGFnZUluZGV4ZXMsYT1lLnN3czthLmE9ZnVuY3Rpb24oKXtmb3IodmFyIGUgaW4gcylvW3NbZV1dLnMoKX0sYS5iPWZ1bmN0aW9uKGUpe3ZvaWQgMD09PWV8fHQuaShlKXx8KG9bZV0uaCgpLG9bZV0ubigpKX0sYS5jPWZ1bmN0aW9uKCl7Zm9yKHZhciBlIGluIHMpYS5kKHNbZV0pfSxhLmQ9ZnVuY3Rpb24oZSl7aWYocltlXSl7dmFyIHQ9aVtlXTtLKHQsZyksSyh0LGgpLEsodCxtKX19fShlKSxmdW5jdGlvbihlKXt2YXIgdD1lLmNvbGxlY3Rpb25zLnNvdXJjZVNpemVycyxuPWUuY29yZS53aW5kb3dSZXNpemVBY3Rpb25lcixvPWUuZGF0YSxpPWUuZWxlbWVudHMuc213LHI9ZS5zdGFnZUluZGV4ZXM7bi5ydW5BY3Rpb25zPWZ1bmN0aW9uKCl7aW5uZXJXaWR0aDw5OTI/by5tYXhTb3VyY2VXaWR0aD1pbm5lcldpZHRoOm8ubWF4U291cmNlV2lkdGg9LjkqaW5uZXJXaWR0aCxvLm1heFNvdXJjZUhlaWdodD0uOSppbm5lckhlaWdodDtmb3IodmFyIGU9MDtlPGkubGVuZ3RoO2UrKylpW2VdLmQoKSx0W2VdJiZ0W2VdLmFkanVzdFNpemUoKTt2YXIgbj1yLnByZXZpb3VzLHM9ci5uZXh0O3ZvaWQgMCE9PW4mJmlbbl0ubmUoKSx2b2lkIDAhPT1zJiZpW3NdLnAoKX19KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHQ9ZS5jb21wb25lbnRzU2VydmljZXMsbj1lLmNvcmUsbz1uLmV2ZW50c0Rpc3BhdGNoZXIscj1uLmdsb2JhbEV2ZW50c0NvbnRyb2xsZXIscz1uLnNjcm9sbGJhclJlY29tcGVuc29yLGM9bi5zb3VyY2VEaXNwbGF5RmFjYWRlLHU9bi5zdGFnZU1hbmFnZXIsZj1uLndpbmRvd1Jlc2l6ZUFjdGlvbmVyLHA9ZS5kYXRhLGg9ZS5lbGVtZW50cyxtPShlLnByb3BzLGUuc3RhZ2VJbmRleGVzKSx2PWUuc3dzO2Z1bmN0aW9uIGIoKXt2YXIgdCxuO3AuaT0hMCxwLnNjcm9sbGJhcldpZHRoPWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0PWUuc3R5bGUsbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3QudmlzaWJpbGl0eT1cImhpZGRlblwiLHQud2lkdGg9XCIxMDBweFwiLHQubXNPdmVyZmxvd1N0eWxlPVwic2Nyb2xsYmFyXCIsdC5vdmVyZmxvdz1cInNjcm9sbFwiLG4uc3R5bGUud2lkdGg9XCIxMDAlXCIsZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlKTt2YXIgbz1lLm9mZnNldFdpZHRoO2UuYXBwZW5kQ2hpbGQobik7dmFyIGk9bi5vZmZzZXRXaWR0aDtyZXR1cm4gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlKSxvLWl9KCksUShlKSxoLmNvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGguY29udGFpbmVyLmNsYXNzTmFtZT1cIlwiLmNvbmNhdChpLFwiY29udGFpbmVyIFwiKS5jb25jYXQoYSxcIiBcIikuY29uY2F0KGcpLGZ1bmN0aW9uKGUpe3ZhciB0PWUuZWxlbWVudHM7dC5zbGlkZVN3aXBpbmdIb3ZlcmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdC5zbGlkZVN3aXBpbmdIb3ZlcmVyLmNsYXNzTmFtZT1cIlwiLmNvbmNhdChpLFwic2xpZGUtc3dpcGluZy1ob3ZlcmVyIFwiKS5jb25jYXQoYSxcIiBcIikuY29uY2F0KGQpfShlKSxYKGUpLGZ1bmN0aW9uKGUpe3ZhciB0PWUuY29yZS5zb3VyY2VzUG9pbnRlckRvd24sbj1lLmVsZW1lbnRzLG89ZS5wcm9wcy5zb3VyY2VzLGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpLmNsYXNzTmFtZT1cIlwiLmNvbmNhdChkLFwiIFwiKS5jb25jYXQoYSksbi5jb250YWluZXIuYXBwZW5kQ2hpbGQoaSksaS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIix0Lmxpc3RlbmVyKSxuLnNvdXJjZVdyYXBwZXJzQ29udGFpbmVyPWk7Zm9yKHZhciByPTA7cjxvLmxlbmd0aDtyKyspRChlLHIpfShlKSxlLnByb3BzLnNvdXJjZXMubGVuZ3RoPjEmJihuPSh0PWUpLmNvcmUuc2xpZGVDaGFuZ2VGYWNhZGUsQih0LG4uY2hhbmdlVG9QcmV2aW91cyxcInByZXZpb3VzXCIsXCJNMTguMjcxLDkuMjEySDMuNjE1bDQuMTg0LTQuMTg0YzAuMzA2LTAuMzA2LDAuMzA2LTAuODAxLDAtMS4xMDdjLTAuMzA2LTAuMzA2LTAuODAxLTAuMzA2LTEuMTA3LDBMMS4yMSw5LjQwM0MxLjE5NCw5LjQxNywxLjE3NCw5LjQyMSwxLjE1OCw5LjQzN2MtMC4xODEsMC4xODEtMC4yNDIsMC40MjUtMC4yMDksMC42NmMwLjAwNSwwLjAzOCwwLjAxMiwwLjA3MSwwLjAyMiwwLjEwOWMwLjAyOCwwLjA5OCwwLjA3NSwwLjE4OCwwLjE0MiwwLjI3MWMwLjAyMSwwLjAyNiwwLjAyMSwwLjA2MSwwLjA0NSwwLjA4NWMwLjAxNSwwLjAxNiwwLjAzNCwwLjAyLDAuMDUsMC4wMzNsNS40ODQsNS40ODNjMC4zMDYsMC4zMDcsMC44MDEsMC4zMDcsMS4xMDcsMGMwLjMwNi0wLjMwNSwwLjMwNi0wLjgwMSwwLTEuMTA1bC00LjE4NC00LjE4NWgxNC42NTZjMC40MzYsMCwwLjc4OC0wLjM1MywwLjc4OC0wLjc4OFMxOC43MDcsOS4yMTIsMTguMjcxLDkuMjEyelwiKSxCKHQsbi5jaGFuZ2VUb05leHQsXCJuZXh0XCIsXCJNMS43MjksOS4yMTJoMTQuNjU2bC00LjE4NC00LjE4NGMtMC4zMDctMC4zMDYtMC4zMDctMC44MDEsMC0xLjEwN2MwLjMwNS0wLjMwNiwwLjgwMS0wLjMwNiwxLjEwNiwwbDUuNDgxLDUuNDgyYzAuMDE4LDAuMDE0LDAuMDM3LDAuMDE5LDAuMDUzLDAuMDM0YzAuMTgxLDAuMTgxLDAuMjQyLDAuNDI1LDAuMjA5LDAuNjZjLTAuMDA0LDAuMDM4LTAuMDEyLDAuMDcxLTAuMDIxLDAuMTA5Yy0wLjAyOCwwLjA5OC0wLjA3NSwwLjE4OC0wLjE0MywwLjI3MWMtMC4wMjEsMC4wMjYtMC4wMjEsMC4wNjEtMC4wNDUsMC4wODVjLTAuMDE1LDAuMDE2LTAuMDM0LDAuMDItMC4wNTEsMC4wMzNsLTUuNDgzLDUuNDgzYy0wLjMwNiwwLjMwNy0wLjgwMiwwLjMwNy0xLjEwNiwwYy0wLjMwNy0wLjMwNS0wLjMwNy0wLjgwMSwwLTEuMTA1bDQuMTg0LTQuMTg1SDEuNzI5Yy0wLjQzNiwwLTAuNzg4LTAuMzUzLTAuNzg4LTAuNzg4UzEuMjkzLDkuMjEyLDEuNzI5LDkuMjEyelwiKSksZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUucHJvcHMuc291cmNlcyxuPWUucmVzb2x2ZSxvPW4oTCksaT1uKEgpLHI9bihSLFtvLGldKSxzPTA7czx0Lmxlbmd0aDtzKyspaWYoXCJzdHJpbmdcIj09dHlwZW9mIHRbc10pe3ZhciBhPXIuZ2V0VHlwZVNldEJ5Q2xpZW50Rm9ySW5kZXgocyk7aWYoYSlpLnJ1bkFjdGlvbnNGb3JTb3VyY2VUeXBlQW5kSW5kZXgoYSxzKTtlbHNle3ZhciBjPW8uZ2V0U291cmNlVHlwZUZyb21Mb2NhbFN0b3JhZ2VCeVVybCh0W3NdKTtjP2kucnVuQWN0aW9uc0ZvclNvdXJjZVR5cGVBbmRJbmRleChjLHMpOnIucmV0cmlldmVUeXBlV2l0aFhockZvckluZGV4KHMpfX1lbHNlIGkucnVuQWN0aW9uc0ZvclNvdXJjZVR5cGVBbmRJbmRleChcImN1c3RvbVwiLHMpfShlKSxvLmRpc3BhdGNoKFwib25Jbml0XCIpfWUub3Blbj1mdW5jdGlvbigpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTowLGk9bS5wcmV2aW91cyxhPW0uY3VycmVudCxkPW0ubmV4dDttLmN1cnJlbnQ9bixwLml8fFMoZSksdS51cGRhdGVTdGFnZUluZGV4ZXMoKSxwLmk/KHYuYygpLHYuYSgpLHYuYihpKSx2LmIoYSksdi5iKGQpLG8uZGlzcGF0Y2goXCJvblNob3dcIikpOmIoKSxjLmRpc3BsYXlTb3VyY2VzV2hpY2hTaG91bGRCZURpc3BsYXllZCgpLHQuc2V0U2xpZGVOdW1iZXIobisxKSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGguY29udGFpbmVyKSxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChsKSxzLmFkZFJlY29tcGVuc2UoKSxyLmF0dGFjaExpc3RlbmVycygpLGYucnVuQWN0aW9ucygpLGguc213W20uY3VycmVudF0ubigpLG8uZGlzcGF0Y2goXCJvbk9wZW5cIil9fWZ1bmN0aW9uIGVlKGUsdCxuKXtyZXR1cm4oZWU9dGUoKT9SZWZsZWN0LmNvbnN0cnVjdC5iaW5kKCk6ZnVuY3Rpb24oZSx0LG4pe3ZhciBvPVtudWxsXTtvLnB1c2guYXBwbHkobyx0KTt2YXIgaT1uZXcoRnVuY3Rpb24uYmluZC5hcHBseShlLG8pKTtyZXR1cm4gbiYmbmUoaSxuLnByb3RvdHlwZSksaX0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX1mdW5jdGlvbiB0ZSgpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBSZWZsZWN0fHwhUmVmbGVjdC5jb25zdHJ1Y3QpcmV0dXJuITE7aWYoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSlyZXR1cm4hMTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm94eSlyZXR1cm4hMDt0cnl7cmV0dXJuIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLFtdLChmdW5jdGlvbigpe30pKSksITB9Y2F0Y2goZSl7cmV0dXJuITF9fWZ1bmN0aW9uIG5lKGUsdCl7cmV0dXJuKG5lPU9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuX19wcm90b19fPXQsZX0pKGUsdCl9ZnVuY3Rpb24gb2UoZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGllKGUpfShlKXx8ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmbnVsbCE9ZVtTeW1ib2wuaXRlcmF0b3JdfHxudWxsIT1lW1wiQEBpdGVyYXRvclwiXSlyZXR1cm4gQXJyYXkuZnJvbShlKX0oZSl8fGZ1bmN0aW9uKGUsdCl7aWYoIWUpcmV0dXJuO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBpZShlLHQpO3ZhciBuPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LC0xKTtcIk9iamVjdFwiPT09biYmZS5jb25zdHJ1Y3RvciYmKG49ZS5jb25zdHJ1Y3Rvci5uYW1lKTtpZihcIk1hcFwiPT09bnx8XCJTZXRcIj09PW4pcmV0dXJuIEFycmF5LmZyb20oZSk7aWYoXCJBcmd1bWVudHNcIj09PW58fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKXJldHVybiBpZShlLHQpfShlKXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBpZShlLHQpeyhudWxsPT10fHx0PmUubGVuZ3RoKSYmKHQ9ZS5sZW5ndGgpO2Zvcih2YXIgbj0wLG89bmV3IEFycmF5KHQpO248dDtuKyspb1tuXT1lW25dO3JldHVybiBvfWZ1bmN0aW9uIHJlKCl7Zm9yKHZhciBlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKSx0PWZ1bmN0aW9uKHQpe2lmKCFlW3RdLmhhc0F0dHJpYnV0ZShcImRhdGEtZnNsaWdodGJveFwiKSlyZXR1cm5cImNvbnRpbnVlXCI7dmFyIG49ZVt0XS5oYXNBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIik/ZVt0XS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIik6ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO2lmKCFuKXJldHVybiBjb25zb2xlLndhcm4oJ1RoZSBcImRhdGEtZnNsaWdodGJveFwiIGF0dHJpYnV0ZSB3YXMgc2V0IHdpdGhvdXQgdGhlIFwiaHJlZlwiIGF0dHJpYnV0ZS4nKSxcImNvbnRpbnVlXCI7dmFyIG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZzbGlnaHRib3hcIik7ZnNMaWdodGJveEluc3RhbmNlc1tvXXx8KGZzTGlnaHRib3hJbnN0YW5jZXNbb109bmV3IEZzTGlnaHRib3gpO3ZhciBpPW51bGw7XCIjXCI9PT1uLmNoYXJBdCgwKT8oaT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChuLnN1YnN0cmluZygxKSkuY2xvbmVOb2RlKCEwKSkucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik6aT1uLGZzTGlnaHRib3hJbnN0YW5jZXNbb10ucHJvcHMuc291cmNlcy5wdXNoKGkpLGZzTGlnaHRib3hJbnN0YW5jZXNbb10uZWxlbWVudHMuYS5wdXNoKGVbdF0pO3ZhciByPWZzTGlnaHRib3hJbnN0YW5jZXNbb10ucHJvcHMuc291cmNlcy5sZW5ndGgtMTtlW3RdLm9uY2xpY2s9ZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGZzTGlnaHRib3hJbnN0YW5jZXNbb10ub3BlbihyKX0sZChcInR5cGVzXCIsXCJkYXRhLXR5cGVcIiksZChcInZpZGVvc1Bvc3RlcnNcIixcImRhdGEtdmlkZW8tcG9zdGVyXCIpLGQoXCJjdXN0b21DbGFzc2VzXCIsXCJkYXRhLWNsYXNzXCIpLGQoXCJjdXN0b21DbGFzc2VzXCIsXCJkYXRhLWN1c3RvbS1jbGFzc1wiKTtmb3IodmFyIHM9W1wiaHJlZlwiLFwiZGF0YS1mc2xpZ2h0Ym94XCIsXCJkYXRhLWhyZWZcIixcImRhdGEtdHlwZVwiLFwiZGF0YS12aWRlby1wb3N0ZXJcIixcImRhdGEtY2xhc3NcIixcImRhdGEtY3VzdG9tLWNsYXNzXCJdLGE9ZVt0XS5hdHRyaWJ1dGVzLGM9ZnNMaWdodGJveEluc3RhbmNlc1tvXS5wcm9wcy5jdXN0b21BdHRyaWJ1dGVzLGw9MDtsPGEubGVuZ3RoO2wrKylpZigtMT09PXMuaW5kZXhPZihhW2xdLm5hbWUpJiZcImRhdGEtXCI9PT1hW2xdLm5hbWUuc3Vic3RyKDAsNSkpe2Nbcl18fChjW3JdPXt9KTt2YXIgdT1hW2xdLm5hbWUuc3Vic3RyKDUpO2Nbcl1bdV09YVtsXS52YWx1ZX1mdW5jdGlvbiBkKG4saSl7ZVt0XS5oYXNBdHRyaWJ1dGUoaSkmJihmc0xpZ2h0Ym94SW5zdGFuY2VzW29dLnByb3BzW25dW3JdPWVbdF0uZ2V0QXR0cmlidXRlKGkpKX19LG49MDtuPGUubGVuZ3RoO24rKyl0KG4pO3ZhciBvPU9iamVjdC5rZXlzKGZzTGlnaHRib3hJbnN0YW5jZXMpO3dpbmRvdy5mc0xpZ2h0Ym94PWZzTGlnaHRib3hJbnN0YW5jZXNbb1tvLmxlbmd0aC0xXV19d2luZG93LkZzTGlnaHRib3g9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMucHJvcHM9e3NvdXJjZXM6W10sY3VzdG9tQXR0cmlidXRlczpbXSxjdXN0b21DbGFzc2VzOltdLHR5cGVzOltdLHZpZGVvc1Bvc3RlcnM6W10sc2xpZGVEaXN0YW5jZTouM30sdGhpcy5kYXRhPXtpc0Z1bGxzY3JlZW5PcGVuOiExLG1heFNvdXJjZVdpZHRoOjAsbWF4U291cmNlSGVpZ2h0OjAsc2Nyb2xsYmFyV2lkdGg6MH0sdGhpcy5pc2w9W10sdGhpcy5zb3VyY2VQb2ludGVyUHJvcHM9e2Rvd25TY3JlZW5YOm51bGwsaXNQb2ludGVyaW5nOiExLGlzU291cmNlRG93bkV2ZW50VGFyZ2V0OiExLHN3aXBlZFg6MH0sdGhpcy5zdGFnZUluZGV4ZXM9e30sdGhpcy5lbGVtZW50cz17YTpbXSxjb250YWluZXI6bnVsbCxzbGlkZVN3aXBpbmdIb3ZlcmVyOm51bGwsc213OltdLHNvdXJjZVdyYXBwZXJzQ29udGFpbmVyOm51bGwsc291cmNlczpbXSxzb3VyY2VBbmltYXRpb25XcmFwcGVyczpbXX0sdGhpcy5jb21wb25lbnRzU2VydmljZXM9e3NldFNsaWRlTnVtYmVyOmZ1bmN0aW9uKCl7fX0sdGhpcy5yZXNvbHZlPWZ1bmN0aW9uKHQpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpbXTtyZXR1cm4gbi51bnNoaWZ0KGUpLGVlKHQsb2UobikpfSx0aGlzLmNvbGxlY3Rpb25zPXtzb3VyY2VMb2FkSGFuZGxlcnM6W10sc291cmNlc1JlbmRlckZ1bmN0aW9uczpbXSxzb3VyY2VTaXplcnM6W119LHRoaXMuY29yZT17ZXZlbnRzRGlzcGF0Y2hlcjp7fSxnbG9iYWxFdmVudHNDb250cm9sbGVyOnt9LGxpZ2h0Ym94Q2xvc2VyOnt9LGxpZ2h0Ym94VXBkYXRlcjp7fSxzY3JvbGxiYXJSZWNvbXBlbnNvcjp7fSxzbGlkZUNoYW5nZUZhY2FkZTp7fSxzbGlkZUluZGV4Q2hhbmdlcjp7fSxzb3VyY2VzUG9pbnRlckRvd246e30sc291cmNlRGlzcGxheUZhY2FkZTp7fSxzdGFnZU1hbmFnZXI6e30sd2luZG93UmVzaXplQWN0aW9uZXI6e319LHRoaXMuZnM9e30sdGhpcy5zd3M9e30sWih0aGlzKSx0aGlzLmNsb3NlPWZ1bmN0aW9uKCl7cmV0dXJuIGUuY29yZS5saWdodGJveENsb3Nlci5jbG9zZUxpZ2h0Ym94KCl9fSx3aW5kb3cuZnNMaWdodGJveEluc3RhbmNlcz17fSxyZSgpLHdpbmRvdy5yZWZyZXNoRnNMaWdodGJveD1mdW5jdGlvbigpe2Zvcih2YXIgZSBpbiBmc0xpZ2h0Ym94SW5zdGFuY2VzKXt2YXIgdD1mc0xpZ2h0Ym94SW5zdGFuY2VzW2VdLnByb3BzO2ZzTGlnaHRib3hJbnN0YW5jZXNbZV09bmV3IEZzTGlnaHRib3gsZnNMaWdodGJveEluc3RhbmNlc1tlXS5wcm9wcz10LGZzTGlnaHRib3hJbnN0YW5jZXNbZV0ucHJvcHMuc291cmNlcz1bXSxmc0xpZ2h0Ym94SW5zdGFuY2VzW2VdLmVsZW1lbnRzLmE9W119cmUoKX19XSl9KSk7IiwiLyohXG4gKiBnZXRTaXplIHYyLjAuM1xuICogbWVhc3VyZSBzaXplIG9mIGVsZW1lbnRzXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qIGpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlLCB1bnVzZWQ6IHRydWUgKi9cbi8qIGdsb2JhbHMgY29uc29sZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKiBnbG9iYWxzIGRlZmluZSwgbW9kdWxlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5nZXRTaXplID0gZmFjdG9yeSgpO1xuICB9XG5cbn0pKCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhlbHBlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gZ2V0IGEgbnVtYmVyIGZyb20gYSBzdHJpbmcsIG5vdCBhIHBlcmNlbnRhZ2VcbmZ1bmN0aW9uIGdldFN0eWxlU2l6ZSggdmFsdWUgKSB7XG4gIHZhciBudW0gPSBwYXJzZUZsb2F0KCB2YWx1ZSApO1xuICAvLyBub3QgYSBwZXJjZW50IGxpa2UgJzEwMCUnLCBhbmQgYSBudW1iZXJcbiAgdmFyIGlzVmFsaWQgPSB2YWx1ZS5pbmRleE9mKCclJykgPT0gLTEgJiYgIWlzTmFOKCBudW0gKTtcbiAgcmV0dXJuIGlzVmFsaWQgJiYgbnVtO1xufVxuXG5mdW5jdGlvbiBub29wKCkge31cblxudmFyIGxvZ0Vycm9yID0gdHlwZW9mIGNvbnNvbGUgPT0gJ3VuZGVmaW5lZCcgPyBub29wIDpcbiAgZnVuY3Rpb24oIG1lc3NhZ2UgKSB7XG4gICAgY29uc29sZS5lcnJvciggbWVzc2FnZSApO1xuICB9O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtZWFzdXJlbWVudHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudmFyIG1lYXN1cmVtZW50cyA9IFtcbiAgJ3BhZGRpbmdMZWZ0JyxcbiAgJ3BhZGRpbmdSaWdodCcsXG4gICdwYWRkaW5nVG9wJyxcbiAgJ3BhZGRpbmdCb3R0b20nLFxuICAnbWFyZ2luTGVmdCcsXG4gICdtYXJnaW5SaWdodCcsXG4gICdtYXJnaW5Ub3AnLFxuICAnbWFyZ2luQm90dG9tJyxcbiAgJ2JvcmRlckxlZnRXaWR0aCcsXG4gICdib3JkZXJSaWdodFdpZHRoJyxcbiAgJ2JvcmRlclRvcFdpZHRoJyxcbiAgJ2JvcmRlckJvdHRvbVdpZHRoJ1xuXTtcblxudmFyIG1lYXN1cmVtZW50c0xlbmd0aCA9IG1lYXN1cmVtZW50cy5sZW5ndGg7XG5cbmZ1bmN0aW9uIGdldFplcm9TaXplKCkge1xuICB2YXIgc2l6ZSA9IHtcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgaW5uZXJXaWR0aDogMCxcbiAgICBpbm5lckhlaWdodDogMCxcbiAgICBvdXRlcldpZHRoOiAwLFxuICAgIG91dGVySGVpZ2h0OiAwXG4gIH07XG4gIGZvciAoIHZhciBpPTA7IGkgPCBtZWFzdXJlbWVudHNMZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgbWVhc3VyZW1lbnQgPSBtZWFzdXJlbWVudHNbaV07XG4gICAgc2l6ZVsgbWVhc3VyZW1lbnQgXSA9IDA7XG4gIH1cbiAgcmV0dXJuIHNpemU7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdldFN0eWxlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogZ2V0U3R5bGUsIGdldCBzdHlsZSBvZiBlbGVtZW50LCBjaGVjayBmb3IgRmlyZWZveCBidWdcbiAqIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU0ODM5N1xuICovXG5mdW5jdGlvbiBnZXRTdHlsZSggZWxlbSApIHtcbiAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSggZWxlbSApO1xuICBpZiAoICFzdHlsZSApIHtcbiAgICBsb2dFcnJvciggJ1N0eWxlIHJldHVybmVkICcgKyBzdHlsZSArXG4gICAgICAnLiBBcmUgeW91IHJ1bm5pbmcgdGhpcyBjb2RlIGluIGEgaGlkZGVuIGlmcmFtZSBvbiBGaXJlZm94PyAnICtcbiAgICAgICdTZWUgaHR0cHM6Ly9iaXQubHkvZ2V0c2l6ZWJ1ZzEnICk7XG4gIH1cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzZXR1cCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG52YXIgaXNTZXR1cCA9IGZhbHNlO1xuXG52YXIgaXNCb3hTaXplT3V0ZXI7XG5cbi8qKlxuICogc2V0dXBcbiAqIGNoZWNrIGlzQm94U2l6ZXJPdXRlclxuICogZG8gb24gZmlyc3QgZ2V0U2l6ZSgpIHJhdGhlciB0aGFuIG9uIHBhZ2UgbG9hZCBmb3IgRmlyZWZveCBidWdcbiAqL1xuZnVuY3Rpb24gc2V0dXAoKSB7XG4gIC8vIHNldHVwIG9uY2VcbiAgaWYgKCBpc1NldHVwICkge1xuICAgIHJldHVybjtcbiAgfVxuICBpc1NldHVwID0gdHJ1ZTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBib3ggc2l6aW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgLyoqXG4gICAqIENocm9tZSAmIFNhZmFyaSBtZWFzdXJlIHRoZSBvdXRlci13aWR0aCBvbiBzdHlsZS53aWR0aCBvbiBib3JkZXItYm94IGVsZW1zXG4gICAqIElFMTEgJiBGaXJlZm94PDI5IG1lYXN1cmVzIHRoZSBpbm5lci13aWR0aFxuICAgKi9cbiAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuc3R5bGUud2lkdGggPSAnMjAwcHgnO1xuICBkaXYuc3R5bGUucGFkZGluZyA9ICcxcHggMnB4IDNweCA0cHgnO1xuICBkaXYuc3R5bGUuYm9yZGVyU3R5bGUgPSAnc29saWQnO1xuICBkaXYuc3R5bGUuYm9yZGVyV2lkdGggPSAnMXB4IDJweCAzcHggNHB4JztcbiAgZGl2LnN0eWxlLmJveFNpemluZyA9ICdib3JkZXItYm94JztcblxuICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBib2R5LmFwcGVuZENoaWxkKCBkaXYgKTtcbiAgdmFyIHN0eWxlID0gZ2V0U3R5bGUoIGRpdiApO1xuICAvLyByb3VuZCB2YWx1ZSBmb3IgYnJvd3NlciB6b29tLiBkZXNhbmRyby9tYXNvbnJ5IzkyOFxuICBpc0JveFNpemVPdXRlciA9IE1hdGgucm91bmQoIGdldFN0eWxlU2l6ZSggc3R5bGUud2lkdGggKSApID09IDIwMDtcbiAgZ2V0U2l6ZS5pc0JveFNpemVPdXRlciA9IGlzQm94U2l6ZU91dGVyO1xuXG4gIGJvZHkucmVtb3ZlQ2hpbGQoIGRpdiApO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZXRTaXplIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmZ1bmN0aW9uIGdldFNpemUoIGVsZW0gKSB7XG4gIHNldHVwKCk7XG5cbiAgLy8gdXNlIHF1ZXJ5U2VsZXRvciBpZiBlbGVtIGlzIHN0cmluZ1xuICBpZiAoIHR5cGVvZiBlbGVtID09ICdzdHJpbmcnICkge1xuICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBlbGVtICk7XG4gIH1cblxuICAvLyBkbyBub3QgcHJvY2VlZCBvbiBub24tb2JqZWN0c1xuICBpZiAoICFlbGVtIHx8IHR5cGVvZiBlbGVtICE9ICdvYmplY3QnIHx8ICFlbGVtLm5vZGVUeXBlICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBzdHlsZSA9IGdldFN0eWxlKCBlbGVtICk7XG5cbiAgLy8gaWYgaGlkZGVuLCBldmVyeXRoaW5nIGlzIDBcbiAgaWYgKCBzdHlsZS5kaXNwbGF5ID09ICdub25lJyApIHtcbiAgICByZXR1cm4gZ2V0WmVyb1NpemUoKTtcbiAgfVxuXG4gIHZhciBzaXplID0ge307XG4gIHNpemUud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICBzaXplLmhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuXG4gIHZhciBpc0JvcmRlckJveCA9IHNpemUuaXNCb3JkZXJCb3ggPSBzdHlsZS5ib3hTaXppbmcgPT0gJ2JvcmRlci1ib3gnO1xuXG4gIC8vIGdldCBhbGwgbWVhc3VyZW1lbnRzXG4gIGZvciAoIHZhciBpPTA7IGkgPCBtZWFzdXJlbWVudHNMZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgbWVhc3VyZW1lbnQgPSBtZWFzdXJlbWVudHNbaV07XG4gICAgdmFyIHZhbHVlID0gc3R5bGVbIG1lYXN1cmVtZW50IF07XG4gICAgdmFyIG51bSA9IHBhcnNlRmxvYXQoIHZhbHVlICk7XG4gICAgLy8gYW55ICdhdXRvJywgJ21lZGl1bScgdmFsdWUgd2lsbCBiZSAwXG4gICAgc2l6ZVsgbWVhc3VyZW1lbnQgXSA9ICFpc05hTiggbnVtICkgPyBudW0gOiAwO1xuICB9XG5cbiAgdmFyIHBhZGRpbmdXaWR0aCA9IHNpemUucGFkZGluZ0xlZnQgKyBzaXplLnBhZGRpbmdSaWdodDtcbiAgdmFyIHBhZGRpbmdIZWlnaHQgPSBzaXplLnBhZGRpbmdUb3AgKyBzaXplLnBhZGRpbmdCb3R0b207XG4gIHZhciBtYXJnaW5XaWR0aCA9IHNpemUubWFyZ2luTGVmdCArIHNpemUubWFyZ2luUmlnaHQ7XG4gIHZhciBtYXJnaW5IZWlnaHQgPSBzaXplLm1hcmdpblRvcCArIHNpemUubWFyZ2luQm90dG9tO1xuICB2YXIgYm9yZGVyV2lkdGggPSBzaXplLmJvcmRlckxlZnRXaWR0aCArIHNpemUuYm9yZGVyUmlnaHRXaWR0aDtcbiAgdmFyIGJvcmRlckhlaWdodCA9IHNpemUuYm9yZGVyVG9wV2lkdGggKyBzaXplLmJvcmRlckJvdHRvbVdpZHRoO1xuXG4gIHZhciBpc0JvcmRlckJveFNpemVPdXRlciA9IGlzQm9yZGVyQm94ICYmIGlzQm94U2l6ZU91dGVyO1xuXG4gIC8vIG92ZXJ3cml0ZSB3aWR0aCBhbmQgaGVpZ2h0IGlmIHdlIGNhbiBnZXQgaXQgZnJvbSBzdHlsZVxuICB2YXIgc3R5bGVXaWR0aCA9IGdldFN0eWxlU2l6ZSggc3R5bGUud2lkdGggKTtcbiAgaWYgKCBzdHlsZVdpZHRoICE9PSBmYWxzZSApIHtcbiAgICBzaXplLndpZHRoID0gc3R5bGVXaWR0aCArXG4gICAgICAvLyBhZGQgcGFkZGluZyBhbmQgYm9yZGVyIHVubGVzcyBpdCdzIGFscmVhZHkgaW5jbHVkaW5nIGl0XG4gICAgICAoIGlzQm9yZGVyQm94U2l6ZU91dGVyID8gMCA6IHBhZGRpbmdXaWR0aCArIGJvcmRlcldpZHRoICk7XG4gIH1cblxuICB2YXIgc3R5bGVIZWlnaHQgPSBnZXRTdHlsZVNpemUoIHN0eWxlLmhlaWdodCApO1xuICBpZiAoIHN0eWxlSGVpZ2h0ICE9PSBmYWxzZSApIHtcbiAgICBzaXplLmhlaWdodCA9IHN0eWxlSGVpZ2h0ICtcbiAgICAgIC8vIGFkZCBwYWRkaW5nIGFuZCBib3JkZXIgdW5sZXNzIGl0J3MgYWxyZWFkeSBpbmNsdWRpbmcgaXRcbiAgICAgICggaXNCb3JkZXJCb3hTaXplT3V0ZXIgPyAwIDogcGFkZGluZ0hlaWdodCArIGJvcmRlckhlaWdodCApO1xuICB9XG5cbiAgc2l6ZS5pbm5lcldpZHRoID0gc2l6ZS53aWR0aCAtICggcGFkZGluZ1dpZHRoICsgYm9yZGVyV2lkdGggKTtcbiAgc2l6ZS5pbm5lckhlaWdodCA9IHNpemUuaGVpZ2h0IC0gKCBwYWRkaW5nSGVpZ2h0ICsgYm9yZGVySGVpZ2h0ICk7XG5cbiAgc2l6ZS5vdXRlcldpZHRoID0gc2l6ZS53aWR0aCArIG1hcmdpbldpZHRoO1xuICBzaXplLm91dGVySGVpZ2h0ID0gc2l6ZS5oZWlnaHQgKyBtYXJnaW5IZWlnaHQ7XG5cbiAgcmV0dXJuIHNpemU7XG59XG5cbnJldHVybiBnZXRTaXplO1xuXG59KTtcbiIsIi8qIVxuICogTWFzb25yeSB2NC4yLjJcbiAqIENhc2NhZGluZyBncmlkIGxheW91dCBsaWJyYXJ5XG4gKiBodHRwczovL21hc29ucnkuZGVzYW5kcm8uY29tXG4gKiBNSVQgTGljZW5zZVxuICogYnkgRGF2aWQgRGVTYW5kcm9cbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKmdsb2JhbHMgZGVmaW5lLCBtb2R1bGUsIHJlcXVpcmUgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICAgJ291dGxheWVyL291dGxheWVyJyxcbiAgICAgICAgJ2dldC1zaXplL2dldC1zaXplJ1xuICAgICAgXSxcbiAgICAgIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHJlcXVpcmUoJ291dGxheWVyJyksXG4gICAgICByZXF1aXJlKCdnZXQtc2l6ZScpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5NYXNvbnJ5ID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdy5PdXRsYXllcixcbiAgICAgIHdpbmRvdy5nZXRTaXplXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIE91dGxheWVyLCBnZXRTaXplICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hc29ucnlEZWZpbml0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgLy8gY3JlYXRlIGFuIE91dGxheWVyIGxheW91dCBjbGFzc1xuICB2YXIgTWFzb25yeSA9IE91dGxheWVyLmNyZWF0ZSgnbWFzb25yeScpO1xuICAvLyBpc0ZpdFdpZHRoIC0+IGZpdFdpZHRoXG4gIE1hc29ucnkuY29tcGF0T3B0aW9ucy5maXRXaWR0aCA9ICdpc0ZpdFdpZHRoJztcblxuICB2YXIgcHJvdG8gPSBNYXNvbnJ5LnByb3RvdHlwZTtcblxuICBwcm90by5fcmVzZXRMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmdldFNpemUoKTtcbiAgICB0aGlzLl9nZXRNZWFzdXJlbWVudCggJ2NvbHVtbldpZHRoJywgJ291dGVyV2lkdGgnICk7XG4gICAgdGhpcy5fZ2V0TWVhc3VyZW1lbnQoICdndXR0ZXInLCAnb3V0ZXJXaWR0aCcgKTtcbiAgICB0aGlzLm1lYXN1cmVDb2x1bW5zKCk7XG5cbiAgICAvLyByZXNldCBjb2x1bW4gWVxuICAgIHRoaXMuY29sWXMgPSBbXTtcbiAgICBmb3IgKCB2YXIgaT0wOyBpIDwgdGhpcy5jb2xzOyBpKysgKSB7XG4gICAgICB0aGlzLmNvbFlzLnB1c2goIDAgKTtcbiAgICB9XG5cbiAgICB0aGlzLm1heFkgPSAwO1xuICAgIHRoaXMuaG9yaXpvbnRhbENvbEluZGV4ID0gMDtcbiAgfTtcblxuICBwcm90by5tZWFzdXJlQ29sdW1ucyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2V0Q29udGFpbmVyV2lkdGgoKTtcbiAgICAvLyBpZiBjb2x1bW5XaWR0aCBpcyAwLCBkZWZhdWx0IHRvIG91dGVyV2lkdGggb2YgZmlyc3QgaXRlbVxuICAgIGlmICggIXRoaXMuY29sdW1uV2lkdGggKSB7XG4gICAgICB2YXIgZmlyc3RJdGVtID0gdGhpcy5pdGVtc1swXTtcbiAgICAgIHZhciBmaXJzdEl0ZW1FbGVtID0gZmlyc3RJdGVtICYmIGZpcnN0SXRlbS5lbGVtZW50O1xuICAgICAgLy8gY29sdW1uV2lkdGggZmFsbCBiYWNrIHRvIGl0ZW0gb2YgZmlyc3QgZWxlbWVudFxuICAgICAgdGhpcy5jb2x1bW5XaWR0aCA9IGZpcnN0SXRlbUVsZW0gJiYgZ2V0U2l6ZSggZmlyc3RJdGVtRWxlbSApLm91dGVyV2lkdGggfHxcbiAgICAgICAgLy8gaWYgZmlyc3QgZWxlbSBoYXMgbm8gd2lkdGgsIGRlZmF1bHQgdG8gc2l6ZSBvZiBjb250YWluZXJcbiAgICAgICAgdGhpcy5jb250YWluZXJXaWR0aDtcbiAgICB9XG5cbiAgICB2YXIgY29sdW1uV2lkdGggPSB0aGlzLmNvbHVtbldpZHRoICs9IHRoaXMuZ3V0dGVyO1xuXG4gICAgLy8gY2FsY3VsYXRlIGNvbHVtbnNcbiAgICB2YXIgY29udGFpbmVyV2lkdGggPSB0aGlzLmNvbnRhaW5lcldpZHRoICsgdGhpcy5ndXR0ZXI7XG4gICAgdmFyIGNvbHMgPSBjb250YWluZXJXaWR0aCAvIGNvbHVtbldpZHRoO1xuICAgIC8vIGZpeCByb3VuZGluZyBlcnJvcnMsIHR5cGljYWxseSB3aXRoIGd1dHRlcnNcbiAgICB2YXIgZXhjZXNzID0gY29sdW1uV2lkdGggLSBjb250YWluZXJXaWR0aCAlIGNvbHVtbldpZHRoO1xuICAgIC8vIGlmIG92ZXJzaG9vdCBpcyBsZXNzIHRoYW4gYSBwaXhlbCwgcm91bmQgdXAsIG90aGVyd2lzZSBmbG9vciBpdFxuICAgIHZhciBtYXRoTWV0aG9kID0gZXhjZXNzICYmIGV4Y2VzcyA8IDEgPyAncm91bmQnIDogJ2Zsb29yJztcbiAgICBjb2xzID0gTWF0aFsgbWF0aE1ldGhvZCBdKCBjb2xzICk7XG4gICAgdGhpcy5jb2xzID0gTWF0aC5tYXgoIGNvbHMsIDEgKTtcbiAgfTtcblxuICBwcm90by5nZXRDb250YWluZXJXaWR0aCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIGNvbnRhaW5lciBpcyBwYXJlbnQgaWYgZml0IHdpZHRoXG4gICAgdmFyIGlzRml0V2lkdGggPSB0aGlzLl9nZXRPcHRpb24oJ2ZpdFdpZHRoJyk7XG4gICAgdmFyIGNvbnRhaW5lciA9IGlzRml0V2lkdGggPyB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSA6IHRoaXMuZWxlbWVudDtcbiAgICAvLyBjaGVjayB0aGF0IHRoaXMuc2l6ZSBhbmQgc2l6ZSBhcmUgdGhlcmVcbiAgICAvLyBJRTggdHJpZ2dlcnMgcmVzaXplIG9uIGJvZHkgc2l6ZSBjaGFuZ2UsIHNvIHRoZXkgbWlnaHQgbm90IGJlXG4gICAgdmFyIHNpemUgPSBnZXRTaXplKCBjb250YWluZXIgKTtcbiAgICB0aGlzLmNvbnRhaW5lcldpZHRoID0gc2l6ZSAmJiBzaXplLmlubmVyV2lkdGg7XG4gIH07XG5cbiAgcHJvdG8uX2dldEl0ZW1MYXlvdXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIGl0ZW0uZ2V0U2l6ZSgpO1xuICAgIC8vIGhvdyBtYW55IGNvbHVtbnMgZG9lcyB0aGlzIGJyaWNrIHNwYW5cbiAgICB2YXIgcmVtYWluZGVyID0gaXRlbS5zaXplLm91dGVyV2lkdGggJSB0aGlzLmNvbHVtbldpZHRoO1xuICAgIHZhciBtYXRoTWV0aG9kID0gcmVtYWluZGVyICYmIHJlbWFpbmRlciA8IDEgPyAncm91bmQnIDogJ2NlaWwnO1xuICAgIC8vIHJvdW5kIGlmIG9mZiBieSAxIHBpeGVsLCBvdGhlcndpc2UgdXNlIGNlaWxcbiAgICB2YXIgY29sU3BhbiA9IE1hdGhbIG1hdGhNZXRob2QgXSggaXRlbS5zaXplLm91dGVyV2lkdGggLyB0aGlzLmNvbHVtbldpZHRoICk7XG4gICAgY29sU3BhbiA9IE1hdGgubWluKCBjb2xTcGFuLCB0aGlzLmNvbHMgKTtcbiAgICAvLyB1c2UgaG9yaXpvbnRhbCBvciB0b3AgY29sdW1uIHBvc2l0aW9uXG4gICAgdmFyIGNvbFBvc01ldGhvZCA9IHRoaXMub3B0aW9ucy5ob3Jpem9udGFsT3JkZXIgP1xuICAgICAgJ19nZXRIb3Jpem9udGFsQ29sUG9zaXRpb24nIDogJ19nZXRUb3BDb2xQb3NpdGlvbic7XG4gICAgdmFyIGNvbFBvc2l0aW9uID0gdGhpc1sgY29sUG9zTWV0aG9kIF0oIGNvbFNwYW4sIGl0ZW0gKTtcbiAgICAvLyBwb3NpdGlvbiB0aGUgYnJpY2tcbiAgICB2YXIgcG9zaXRpb24gPSB7XG4gICAgICB4OiB0aGlzLmNvbHVtbldpZHRoICogY29sUG9zaXRpb24uY29sLFxuICAgICAgeTogY29sUG9zaXRpb24ueVxuICAgIH07XG4gICAgLy8gYXBwbHkgc2V0SGVpZ2h0IHRvIG5lY2Vzc2FyeSBjb2x1bW5zXG4gICAgdmFyIHNldEhlaWdodCA9IGNvbFBvc2l0aW9uLnkgKyBpdGVtLnNpemUub3V0ZXJIZWlnaHQ7XG4gICAgdmFyIHNldE1heCA9IGNvbFNwYW4gKyBjb2xQb3NpdGlvbi5jb2w7XG4gICAgZm9yICggdmFyIGkgPSBjb2xQb3NpdGlvbi5jb2w7IGkgPCBzZXRNYXg7IGkrKyApIHtcbiAgICAgIHRoaXMuY29sWXNbaV0gPSBzZXRIZWlnaHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9O1xuXG4gIHByb3RvLl9nZXRUb3BDb2xQb3NpdGlvbiA9IGZ1bmN0aW9uKCBjb2xTcGFuICkge1xuICAgIHZhciBjb2xHcm91cCA9IHRoaXMuX2dldFRvcENvbEdyb3VwKCBjb2xTcGFuICk7XG4gICAgLy8gZ2V0IHRoZSBtaW5pbXVtIFkgdmFsdWUgZnJvbSB0aGUgY29sdW1uc1xuICAgIHZhciBtaW5pbXVtWSA9IE1hdGgubWluLmFwcGx5KCBNYXRoLCBjb2xHcm91cCApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbDogY29sR3JvdXAuaW5kZXhPZiggbWluaW11bVkgKSxcbiAgICAgIHk6IG1pbmltdW1ZLFxuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2xTcGFuIC0gbnVtYmVyIG9mIGNvbHVtbnMgdGhlIGVsZW1lbnQgc3BhbnNcbiAgICogQHJldHVybnMge0FycmF5fSBjb2xHcm91cFxuICAgKi9cbiAgcHJvdG8uX2dldFRvcENvbEdyb3VwID0gZnVuY3Rpb24oIGNvbFNwYW4gKSB7XG4gICAgaWYgKCBjb2xTcGFuIDwgMiApIHtcbiAgICAgIC8vIGlmIGJyaWNrIHNwYW5zIG9ubHkgb25lIGNvbHVtbiwgdXNlIGFsbCB0aGUgY29sdW1uIFlzXG4gICAgICByZXR1cm4gdGhpcy5jb2xZcztcbiAgICB9XG5cbiAgICB2YXIgY29sR3JvdXAgPSBbXTtcbiAgICAvLyBob3cgbWFueSBkaWZmZXJlbnQgcGxhY2VzIGNvdWxkIHRoaXMgYnJpY2sgZml0IGhvcml6b250YWxseVxuICAgIHZhciBncm91cENvdW50ID0gdGhpcy5jb2xzICsgMSAtIGNvbFNwYW47XG4gICAgLy8gZm9yIGVhY2ggZ3JvdXAgcG90ZW50aWFsIGhvcml6b250YWwgcG9zaXRpb25cbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBncm91cENvdW50OyBpKysgKSB7XG4gICAgICBjb2xHcm91cFtpXSA9IHRoaXMuX2dldENvbEdyb3VwWSggaSwgY29sU3BhbiApO1xuICAgIH1cbiAgICByZXR1cm4gY29sR3JvdXA7XG4gIH07XG5cbiAgcHJvdG8uX2dldENvbEdyb3VwWSA9IGZ1bmN0aW9uKCBjb2wsIGNvbFNwYW4gKSB7XG4gICAgaWYgKCBjb2xTcGFuIDwgMiApIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbFlzWyBjb2wgXTtcbiAgICB9XG4gICAgLy8gbWFrZSBhbiBhcnJheSBvZiBjb2xZIHZhbHVlcyBmb3IgdGhhdCBvbmUgZ3JvdXBcbiAgICB2YXIgZ3JvdXBDb2xZcyA9IHRoaXMuY29sWXMuc2xpY2UoIGNvbCwgY29sICsgY29sU3BhbiApO1xuICAgIC8vIGFuZCBnZXQgdGhlIG1heCB2YWx1ZSBvZiB0aGUgYXJyYXlcbiAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkoIE1hdGgsIGdyb3VwQ29sWXMgKTtcbiAgfTtcblxuICAvLyBnZXQgY29sdW1uIHBvc2l0aW9uIGJhc2VkIG9uIGhvcml6b250YWwgaW5kZXguICM4NzNcbiAgcHJvdG8uX2dldEhvcml6b250YWxDb2xQb3NpdGlvbiA9IGZ1bmN0aW9uKCBjb2xTcGFuLCBpdGVtICkge1xuICAgIHZhciBjb2wgPSB0aGlzLmhvcml6b250YWxDb2xJbmRleCAlIHRoaXMuY29scztcbiAgICB2YXIgaXNPdmVyID0gY29sU3BhbiA+IDEgJiYgY29sICsgY29sU3BhbiA+IHRoaXMuY29scztcbiAgICAvLyBzaGlmdCB0byBuZXh0IHJvdyBpZiBpdGVtIGNhbid0IGZpdCBvbiBjdXJyZW50IHJvd1xuICAgIGNvbCA9IGlzT3ZlciA/IDAgOiBjb2w7XG4gICAgLy8gZG9uJ3QgbGV0IHplcm8tc2l6ZSBpdGVtcyB0YWtlIHVwIHNwYWNlXG4gICAgdmFyIGhhc1NpemUgPSBpdGVtLnNpemUub3V0ZXJXaWR0aCAmJiBpdGVtLnNpemUub3V0ZXJIZWlnaHQ7XG4gICAgdGhpcy5ob3Jpem9udGFsQ29sSW5kZXggPSBoYXNTaXplID8gY29sICsgY29sU3BhbiA6IHRoaXMuaG9yaXpvbnRhbENvbEluZGV4O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbDogY29sLFxuICAgICAgeTogdGhpcy5fZ2V0Q29sR3JvdXBZKCBjb2wsIGNvbFNwYW4gKSxcbiAgICB9O1xuICB9O1xuXG4gIHByb3RvLl9tYW5hZ2VTdGFtcCA9IGZ1bmN0aW9uKCBzdGFtcCApIHtcbiAgICB2YXIgc3RhbXBTaXplID0gZ2V0U2l6ZSggc3RhbXAgKTtcbiAgICB2YXIgb2Zmc2V0ID0gdGhpcy5fZ2V0RWxlbWVudE9mZnNldCggc3RhbXAgKTtcbiAgICAvLyBnZXQgdGhlIGNvbHVtbnMgdGhhdCB0aGlzIHN0YW1wIGFmZmVjdHNcbiAgICB2YXIgaXNPcmlnaW5MZWZ0ID0gdGhpcy5fZ2V0T3B0aW9uKCdvcmlnaW5MZWZ0Jyk7XG4gICAgdmFyIGZpcnN0WCA9IGlzT3JpZ2luTGVmdCA/IG9mZnNldC5sZWZ0IDogb2Zmc2V0LnJpZ2h0O1xuICAgIHZhciBsYXN0WCA9IGZpcnN0WCArIHN0YW1wU2l6ZS5vdXRlcldpZHRoO1xuICAgIHZhciBmaXJzdENvbCA9IE1hdGguZmxvb3IoIGZpcnN0WCAvIHRoaXMuY29sdW1uV2lkdGggKTtcbiAgICBmaXJzdENvbCA9IE1hdGgubWF4KCAwLCBmaXJzdENvbCApO1xuICAgIHZhciBsYXN0Q29sID0gTWF0aC5mbG9vciggbGFzdFggLyB0aGlzLmNvbHVtbldpZHRoICk7XG4gICAgLy8gbGFzdENvbCBzaG91bGQgbm90IGdvIG92ZXIgaWYgbXVsdGlwbGUgb2YgY29sdW1uV2lkdGggIzQyNVxuICAgIGxhc3RDb2wgLT0gbGFzdFggJSB0aGlzLmNvbHVtbldpZHRoID8gMCA6IDE7XG4gICAgbGFzdENvbCA9IE1hdGgubWluKCB0aGlzLmNvbHMgLSAxLCBsYXN0Q29sICk7XG4gICAgLy8gc2V0IGNvbFlzIHRvIGJvdHRvbSBvZiB0aGUgc3RhbXBcblxuICAgIHZhciBpc09yaWdpblRvcCA9IHRoaXMuX2dldE9wdGlvbignb3JpZ2luVG9wJyk7XG4gICAgdmFyIHN0YW1wTWF4WSA9ICggaXNPcmlnaW5Ub3AgPyBvZmZzZXQudG9wIDogb2Zmc2V0LmJvdHRvbSApICtcbiAgICAgIHN0YW1wU2l6ZS5vdXRlckhlaWdodDtcbiAgICBmb3IgKCB2YXIgaSA9IGZpcnN0Q29sOyBpIDw9IGxhc3RDb2w7IGkrKyApIHtcbiAgICAgIHRoaXMuY29sWXNbaV0gPSBNYXRoLm1heCggc3RhbXBNYXhZLCB0aGlzLmNvbFlzW2ldICk7XG4gICAgfVxuICB9O1xuXG4gIHByb3RvLl9nZXRDb250YWluZXJTaXplID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5tYXhZID0gTWF0aC5tYXguYXBwbHkoIE1hdGgsIHRoaXMuY29sWXMgKTtcbiAgICB2YXIgc2l6ZSA9IHtcbiAgICAgIGhlaWdodDogdGhpcy5tYXhZXG4gICAgfTtcblxuICAgIGlmICggdGhpcy5fZ2V0T3B0aW9uKCdmaXRXaWR0aCcpICkge1xuICAgICAgc2l6ZS53aWR0aCA9IHRoaXMuX2dldENvbnRhaW5lckZpdFdpZHRoKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpemU7XG4gIH07XG5cbiAgcHJvdG8uX2dldENvbnRhaW5lckZpdFdpZHRoID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHVudXNlZENvbHMgPSAwO1xuICAgIC8vIGNvdW50IHVudXNlZCBjb2x1bW5zXG4gICAgdmFyIGkgPSB0aGlzLmNvbHM7XG4gICAgd2hpbGUgKCAtLWkgKSB7XG4gICAgICBpZiAoIHRoaXMuY29sWXNbaV0gIT09IDAgKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdW51c2VkQ29scysrO1xuICAgIH1cbiAgICAvLyBmaXQgY29udGFpbmVyIHRvIGNvbHVtbnMgdGhhdCBoYXZlIGJlZW4gdXNlZFxuICAgIHJldHVybiAoIHRoaXMuY29scyAtIHVudXNlZENvbHMgKSAqIHRoaXMuY29sdW1uV2lkdGggLSB0aGlzLmd1dHRlcjtcbiAgfTtcblxuICBwcm90by5uZWVkc1Jlc2l6ZUxheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwcmV2aW91c1dpZHRoID0gdGhpcy5jb250YWluZXJXaWR0aDtcbiAgICB0aGlzLmdldENvbnRhaW5lcldpZHRoKCk7XG4gICAgcmV0dXJuIHByZXZpb3VzV2lkdGggIT0gdGhpcy5jb250YWluZXJXaWR0aDtcbiAgfTtcblxuICByZXR1cm4gTWFzb25yeTtcblxufSkpO1xuIiwiLyoqXG4gKiBPdXRsYXllciBJdGVtXG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLyogZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRCAtIFJlcXVpcmVKU1xuICAgIGRlZmluZSggW1xuICAgICAgICAnZXYtZW1pdHRlci9ldi1lbWl0dGVyJyxcbiAgICAgICAgJ2dldC1zaXplL2dldC1zaXplJ1xuICAgICAgXSxcbiAgICAgIGZhY3RvcnlcbiAgICApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTIC0gQnJvd3NlcmlmeSwgV2VicGFja1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHJlcXVpcmUoJ2V2LWVtaXR0ZXInKSxcbiAgICAgIHJlcXVpcmUoJ2dldC1zaXplJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93Lk91dGxheWVyID0ge307XG4gICAgd2luZG93Lk91dGxheWVyLkl0ZW0gPSBmYWN0b3J5KFxuICAgICAgd2luZG93LkV2RW1pdHRlcixcbiAgICAgIHdpbmRvdy5nZXRTaXplXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIEV2RW1pdHRlciwgZ2V0U2l6ZSApIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0gaGVscGVycyAtLS0tLSAvL1xuXG5mdW5jdGlvbiBpc0VtcHR5T2JqKCBvYmogKSB7XG4gIGZvciAoIHZhciBwcm9wIGluIG9iaiApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcHJvcCA9IG51bGw7XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBDU1MzIHN1cHBvcnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG52YXIgdHJhbnNpdGlvblByb3BlcnR5ID0gdHlwZW9mIGRvY0VsZW1TdHlsZS50cmFuc2l0aW9uID09ICdzdHJpbmcnID9cbiAgJ3RyYW5zaXRpb24nIDogJ1dlYmtpdFRyYW5zaXRpb24nO1xudmFyIHRyYW5zZm9ybVByb3BlcnR5ID0gdHlwZW9mIGRvY0VsZW1TdHlsZS50cmFuc2Zvcm0gPT0gJ3N0cmluZycgP1xuICAndHJhbnNmb3JtJyA6ICdXZWJraXRUcmFuc2Zvcm0nO1xuXG52YXIgdHJhbnNpdGlvbkVuZEV2ZW50ID0ge1xuICBXZWJraXRUcmFuc2l0aW9uOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gIHRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJ1xufVsgdHJhbnNpdGlvblByb3BlcnR5IF07XG5cbi8vIGNhY2hlIGFsbCB2ZW5kb3IgcHJvcGVydGllcyB0aGF0IGNvdWxkIGhhdmUgdmVuZG9yIHByZWZpeFxudmFyIHZlbmRvclByb3BlcnRpZXMgPSB7XG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtUHJvcGVydHksXG4gIHRyYW5zaXRpb246IHRyYW5zaXRpb25Qcm9wZXJ0eSxcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0cmFuc2l0aW9uUHJvcGVydHkgKyAnRHVyYXRpb24nLFxuICB0cmFuc2l0aW9uUHJvcGVydHk6IHRyYW5zaXRpb25Qcm9wZXJ0eSArICdQcm9wZXJ0eScsXG4gIHRyYW5zaXRpb25EZWxheTogdHJhbnNpdGlvblByb3BlcnR5ICsgJ0RlbGF5J1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSXRlbSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBJdGVtKCBlbGVtZW50LCBsYXlvdXQgKSB7XG4gIGlmICggIWVsZW1lbnQgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgLy8gcGFyZW50IGxheW91dCBjbGFzcywgaS5lLiBNYXNvbnJ5LCBJc290b3BlLCBvciBQYWNrZXJ5XG4gIHRoaXMubGF5b3V0ID0gbGF5b3V0O1xuICB0aGlzLnBvc2l0aW9uID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIHRoaXMuX2NyZWF0ZSgpO1xufVxuXG4vLyBpbmhlcml0IEV2RW1pdHRlclxudmFyIHByb3RvID0gSXRlbS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBFdkVtaXR0ZXIucHJvdG90eXBlICk7XG5wcm90by5jb25zdHJ1Y3RvciA9IEl0ZW07XG5cbnByb3RvLl9jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gdHJhbnNpdGlvbiBvYmplY3RzXG4gIHRoaXMuX3RyYW5zbiA9IHtcbiAgICBpbmdQcm9wZXJ0aWVzOiB7fSxcbiAgICBjbGVhbjoge30sXG4gICAgb25FbmQ6IHt9XG4gIH07XG5cbiAgdGhpcy5jc3Moe1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gIH0pO1xufTtcblxuLy8gdHJpZ2dlciBzcGVjaWZpZWQgaGFuZGxlciBmb3IgZXZlbnQgdHlwZVxucHJvdG8uaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciBtZXRob2QgPSAnb24nICsgZXZlbnQudHlwZTtcbiAgaWYgKCB0aGlzWyBtZXRob2QgXSApIHtcbiAgICB0aGlzWyBtZXRob2QgXSggZXZlbnQgKTtcbiAgfVxufTtcblxucHJvdG8uZ2V0U2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNpemUgPSBnZXRTaXplKCB0aGlzLmVsZW1lbnQgKTtcbn07XG5cbi8qKlxuICogYXBwbHkgQ1NTIHN0eWxlcyB0byBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gc3R5bGVcbiAqL1xucHJvdG8uY3NzID0gZnVuY3Rpb24oIHN0eWxlICkge1xuICB2YXIgZWxlbVN0eWxlID0gdGhpcy5lbGVtZW50LnN0eWxlO1xuXG4gIGZvciAoIHZhciBwcm9wIGluIHN0eWxlICkge1xuICAgIC8vIHVzZSB2ZW5kb3IgcHJvcGVydHkgaWYgYXZhaWxhYmxlXG4gICAgdmFyIHN1cHBvcnRlZFByb3AgPSB2ZW5kb3JQcm9wZXJ0aWVzWyBwcm9wIF0gfHwgcHJvcDtcbiAgICBlbGVtU3R5bGVbIHN1cHBvcnRlZFByb3AgXSA9IHN0eWxlWyBwcm9wIF07XG4gIH1cbn07XG5cbiAvLyBtZWFzdXJlIHBvc2l0aW9uLCBhbmQgc2V0cyBpdFxucHJvdG8uZ2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSggdGhpcy5lbGVtZW50ICk7XG4gIHZhciBpc09yaWdpbkxlZnQgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdvcmlnaW5MZWZ0Jyk7XG4gIHZhciBpc09yaWdpblRvcCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ29yaWdpblRvcCcpO1xuICB2YXIgeFZhbHVlID0gc3R5bGVbIGlzT3JpZ2luTGVmdCA/ICdsZWZ0JyA6ICdyaWdodCcgXTtcbiAgdmFyIHlWYWx1ZSA9IHN0eWxlWyBpc09yaWdpblRvcCA/ICd0b3AnIDogJ2JvdHRvbScgXTtcbiAgdmFyIHggPSBwYXJzZUZsb2F0KCB4VmFsdWUgKTtcbiAgdmFyIHkgPSBwYXJzZUZsb2F0KCB5VmFsdWUgKTtcbiAgLy8gY29udmVydCBwZXJjZW50IHRvIHBpeGVsc1xuICB2YXIgbGF5b3V0U2l6ZSA9IHRoaXMubGF5b3V0LnNpemU7XG4gIGlmICggeFZhbHVlLmluZGV4T2YoJyUnKSAhPSAtMSApIHtcbiAgICB4ID0gKCB4IC8gMTAwICkgKiBsYXlvdXRTaXplLndpZHRoO1xuICB9XG4gIGlmICggeVZhbHVlLmluZGV4T2YoJyUnKSAhPSAtMSApIHtcbiAgICB5ID0gKCB5IC8gMTAwICkgKiBsYXlvdXRTaXplLmhlaWdodDtcbiAgfVxuICAvLyBjbGVhbiB1cCAnYXV0bycgb3Igb3RoZXIgbm9uLWludGVnZXIgdmFsdWVzXG4gIHggPSBpc05hTiggeCApID8gMCA6IHg7XG4gIHkgPSBpc05hTiggeSApID8gMCA6IHk7XG4gIC8vIHJlbW92ZSBwYWRkaW5nIGZyb20gbWVhc3VyZW1lbnRcbiAgeCAtPSBpc09yaWdpbkxlZnQgPyBsYXlvdXRTaXplLnBhZGRpbmdMZWZ0IDogbGF5b3V0U2l6ZS5wYWRkaW5nUmlnaHQ7XG4gIHkgLT0gaXNPcmlnaW5Ub3AgPyBsYXlvdXRTaXplLnBhZGRpbmdUb3AgOiBsYXlvdXRTaXplLnBhZGRpbmdCb3R0b207XG5cbiAgdGhpcy5wb3NpdGlvbi54ID0geDtcbiAgdGhpcy5wb3NpdGlvbi55ID0geTtcbn07XG5cbi8vIHNldCBzZXR0bGVkIHBvc2l0aW9uLCBhcHBseSBwYWRkaW5nXG5wcm90by5sYXlvdXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbGF5b3V0U2l6ZSA9IHRoaXMubGF5b3V0LnNpemU7XG4gIHZhciBzdHlsZSA9IHt9O1xuICB2YXIgaXNPcmlnaW5MZWZ0ID0gdGhpcy5sYXlvdXQuX2dldE9wdGlvbignb3JpZ2luTGVmdCcpO1xuICB2YXIgaXNPcmlnaW5Ub3AgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdvcmlnaW5Ub3AnKTtcblxuICAvLyB4XG4gIHZhciB4UGFkZGluZyA9IGlzT3JpZ2luTGVmdCA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0JztcbiAgdmFyIHhQcm9wZXJ0eSA9IGlzT3JpZ2luTGVmdCA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gIHZhciB4UmVzZXRQcm9wZXJ0eSA9IGlzT3JpZ2luTGVmdCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cbiAgdmFyIHggPSB0aGlzLnBvc2l0aW9uLnggKyBsYXlvdXRTaXplWyB4UGFkZGluZyBdO1xuICAvLyBzZXQgaW4gcGVyY2VudGFnZSBvciBwaXhlbHNcbiAgc3R5bGVbIHhQcm9wZXJ0eSBdID0gdGhpcy5nZXRYVmFsdWUoIHggKTtcbiAgLy8gcmVzZXQgb3RoZXIgcHJvcGVydHlcbiAgc3R5bGVbIHhSZXNldFByb3BlcnR5IF0gPSAnJztcblxuICAvLyB5XG4gIHZhciB5UGFkZGluZyA9IGlzT3JpZ2luVG9wID8gJ3BhZGRpbmdUb3AnIDogJ3BhZGRpbmdCb3R0b20nO1xuICB2YXIgeVByb3BlcnR5ID0gaXNPcmlnaW5Ub3AgPyAndG9wJyA6ICdib3R0b20nO1xuICB2YXIgeVJlc2V0UHJvcGVydHkgPSBpc09yaWdpblRvcCA/ICdib3R0b20nIDogJ3RvcCc7XG5cbiAgdmFyIHkgPSB0aGlzLnBvc2l0aW9uLnkgKyBsYXlvdXRTaXplWyB5UGFkZGluZyBdO1xuICAvLyBzZXQgaW4gcGVyY2VudGFnZSBvciBwaXhlbHNcbiAgc3R5bGVbIHlQcm9wZXJ0eSBdID0gdGhpcy5nZXRZVmFsdWUoIHkgKTtcbiAgLy8gcmVzZXQgb3RoZXIgcHJvcGVydHlcbiAgc3R5bGVbIHlSZXNldFByb3BlcnR5IF0gPSAnJztcblxuICB0aGlzLmNzcyggc3R5bGUgKTtcbiAgdGhpcy5lbWl0RXZlbnQoICdsYXlvdXQnLCBbIHRoaXMgXSApO1xufTtcblxucHJvdG8uZ2V0WFZhbHVlID0gZnVuY3Rpb24oIHggKSB7XG4gIHZhciBpc0hvcml6b250YWwgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdob3Jpem9udGFsJyk7XG4gIHJldHVybiB0aGlzLmxheW91dC5vcHRpb25zLnBlcmNlbnRQb3NpdGlvbiAmJiAhaXNIb3Jpem9udGFsID9cbiAgICAoICggeCAvIHRoaXMubGF5b3V0LnNpemUud2lkdGggKSAqIDEwMCApICsgJyUnIDogeCArICdweCc7XG59O1xuXG5wcm90by5nZXRZVmFsdWUgPSBmdW5jdGlvbiggeSApIHtcbiAgdmFyIGlzSG9yaXpvbnRhbCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ2hvcml6b250YWwnKTtcbiAgcmV0dXJuIHRoaXMubGF5b3V0Lm9wdGlvbnMucGVyY2VudFBvc2l0aW9uICYmIGlzSG9yaXpvbnRhbCA/XG4gICAgKCAoIHkgLyB0aGlzLmxheW91dC5zaXplLmhlaWdodCApICogMTAwICkgKyAnJScgOiB5ICsgJ3B4Jztcbn07XG5cbnByb3RvLl90cmFuc2l0aW9uVG8gPSBmdW5jdGlvbiggeCwgeSApIHtcbiAgdGhpcy5nZXRQb3NpdGlvbigpO1xuICAvLyBnZXQgY3VycmVudCB4ICYgeSBmcm9tIHRvcC9sZWZ0XG4gIHZhciBjdXJYID0gdGhpcy5wb3NpdGlvbi54O1xuICB2YXIgY3VyWSA9IHRoaXMucG9zaXRpb24ueTtcblxuICB2YXIgZGlkTm90TW92ZSA9IHggPT0gdGhpcy5wb3NpdGlvbi54ICYmIHkgPT0gdGhpcy5wb3NpdGlvbi55O1xuXG4gIC8vIHNhdmUgZW5kIHBvc2l0aW9uXG4gIHRoaXMuc2V0UG9zaXRpb24oIHgsIHkgKTtcblxuICAvLyBpZiBkaWQgbm90IG1vdmUgYW5kIG5vdCB0cmFuc2l0aW9uaW5nLCBqdXN0IGdvIHRvIGxheW91dFxuICBpZiAoIGRpZE5vdE1vdmUgJiYgIXRoaXMuaXNUcmFuc2l0aW9uaW5nICkge1xuICAgIHRoaXMubGF5b3V0UG9zaXRpb24oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdHJhbnNYID0geCAtIGN1clg7XG4gIHZhciB0cmFuc1kgPSB5IC0gY3VyWTtcbiAgdmFyIHRyYW5zaXRpb25TdHlsZSA9IHt9O1xuICB0cmFuc2l0aW9uU3R5bGUudHJhbnNmb3JtID0gdGhpcy5nZXRUcmFuc2xhdGUoIHRyYW5zWCwgdHJhbnNZICk7XG5cbiAgdGhpcy50cmFuc2l0aW9uKHtcbiAgICB0bzogdHJhbnNpdGlvblN0eWxlLFxuICAgIG9uVHJhbnNpdGlvbkVuZDoge1xuICAgICAgdHJhbnNmb3JtOiB0aGlzLmxheW91dFBvc2l0aW9uXG4gICAgfSxcbiAgICBpc0NsZWFuaW5nOiB0cnVlXG4gIH0pO1xufTtcblxucHJvdG8uZ2V0VHJhbnNsYXRlID0gZnVuY3Rpb24oIHgsIHkgKSB7XG4gIC8vIGZsaXAgY29vcmlkaW5hdGVzIGlmIG9yaWdpbiBvbiByaWdodCBvciBib3R0b21cbiAgdmFyIGlzT3JpZ2luTGVmdCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ29yaWdpbkxlZnQnKTtcbiAgdmFyIGlzT3JpZ2luVG9wID0gdGhpcy5sYXlvdXQuX2dldE9wdGlvbignb3JpZ2luVG9wJyk7XG4gIHggPSBpc09yaWdpbkxlZnQgPyB4IDogLXg7XG4gIHkgPSBpc09yaWdpblRvcCA/IHkgOiAteTtcbiAgcmV0dXJuICd0cmFuc2xhdGUzZCgnICsgeCArICdweCwgJyArIHkgKyAncHgsIDApJztcbn07XG5cbi8vIG5vbiB0cmFuc2l0aW9uICsgdHJhbnNmb3JtIHN1cHBvcnRcbnByb3RvLmdvVG8gPSBmdW5jdGlvbiggeCwgeSApIHtcbiAgdGhpcy5zZXRQb3NpdGlvbiggeCwgeSApO1xuICB0aGlzLmxheW91dFBvc2l0aW9uKCk7XG59O1xuXG5wcm90by5tb3ZlVG8gPSBwcm90by5fdHJhbnNpdGlvblRvO1xuXG5wcm90by5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCB4LCB5ICkge1xuICB0aGlzLnBvc2l0aW9uLnggPSBwYXJzZUZsb2F0KCB4ICk7XG4gIHRoaXMucG9zaXRpb24ueSA9IHBhcnNlRmxvYXQoIHkgKTtcbn07XG5cbi8vIC0tLS0tIHRyYW5zaXRpb24gLS0tLS0gLy9cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gc3R5bGUgLSBDU1NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9uVHJhbnNpdGlvbkVuZFxuICovXG5cbi8vIG5vbiB0cmFuc2l0aW9uLCBqdXN0IHRyaWdnZXIgY2FsbGJhY2tcbnByb3RvLl9ub25UcmFuc2l0aW9uID0gZnVuY3Rpb24oIGFyZ3MgKSB7XG4gIHRoaXMuY3NzKCBhcmdzLnRvICk7XG4gIGlmICggYXJncy5pc0NsZWFuaW5nICkge1xuICAgIHRoaXMuX3JlbW92ZVN0eWxlcyggYXJncy50byApO1xuICB9XG4gIGZvciAoIHZhciBwcm9wIGluIGFyZ3Mub25UcmFuc2l0aW9uRW5kICkge1xuICAgIGFyZ3Mub25UcmFuc2l0aW9uRW5kWyBwcm9wIF0uY2FsbCggdGhpcyApO1xuICB9XG59O1xuXG4vKipcbiAqIHByb3BlciB0cmFuc2l0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gYXJncyAtIGFyZ3VtZW50c1xuICogICBAcGFyYW0ge09iamVjdH0gdG8gLSBzdHlsZSB0byB0cmFuc2l0aW9uIHRvXG4gKiAgIEBwYXJhbSB7T2JqZWN0fSBmcm9tIC0gc3R5bGUgdG8gc3RhcnQgdHJhbnNpdGlvbiBmcm9tXG4gKiAgIEBwYXJhbSB7Qm9vbGVhbn0gaXNDbGVhbmluZyAtIHJlbW92ZXMgdHJhbnNpdGlvbiBzdHlsZXMgYWZ0ZXIgdHJhbnNpdGlvblxuICogICBAcGFyYW0ge0Z1bmN0aW9ufSBvblRyYW5zaXRpb25FbmQgLSBjYWxsYmFja1xuICovXG5wcm90by50cmFuc2l0aW9uID0gZnVuY3Rpb24oIGFyZ3MgKSB7XG4gIC8vIHJlZGlyZWN0IHRvIG5vblRyYW5zaXRpb24gaWYgbm8gdHJhbnNpdGlvbiBkdXJhdGlvblxuICBpZiAoICFwYXJzZUZsb2F0KCB0aGlzLmxheW91dC5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbiApICkge1xuICAgIHRoaXMuX25vblRyYW5zaXRpb24oIGFyZ3MgKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgX3RyYW5zaXRpb24gPSB0aGlzLl90cmFuc247XG4gIC8vIGtlZXAgdHJhY2sgb2Ygb25UcmFuc2l0aW9uRW5kIGNhbGxiYWNrIGJ5IGNzcyBwcm9wZXJ0eVxuICBmb3IgKCB2YXIgcHJvcCBpbiBhcmdzLm9uVHJhbnNpdGlvbkVuZCApIHtcbiAgICBfdHJhbnNpdGlvbi5vbkVuZFsgcHJvcCBdID0gYXJncy5vblRyYW5zaXRpb25FbmRbIHByb3AgXTtcbiAgfVxuICAvLyBrZWVwIHRyYWNrIG9mIHByb3BlcnRpZXMgdGhhdCBhcmUgdHJhbnNpdGlvbmluZ1xuICBmb3IgKCBwcm9wIGluIGFyZ3MudG8gKSB7XG4gICAgX3RyYW5zaXRpb24uaW5nUHJvcGVydGllc1sgcHJvcCBdID0gdHJ1ZTtcbiAgICAvLyBrZWVwIHRyYWNrIG9mIHByb3BlcnRpZXMgdG8gY2xlYW4gdXAgd2hlbiB0cmFuc2l0aW9uIGlzIGRvbmVcbiAgICBpZiAoIGFyZ3MuaXNDbGVhbmluZyApIHtcbiAgICAgIF90cmFuc2l0aW9uLmNsZWFuWyBwcm9wIF0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNldCBmcm9tIHN0eWxlc1xuICBpZiAoIGFyZ3MuZnJvbSApIHtcbiAgICB0aGlzLmNzcyggYXJncy5mcm9tICk7XG4gICAgLy8gZm9yY2UgcmVkcmF3LiBodHRwOi8vYmxvZy5hbGV4bWFjY2F3LmNvbS9jc3MtdHJhbnNpdGlvbnNcbiAgICB2YXIgaCA9IHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgLy8gaGFjayBmb3IgSlNIaW50IHRvIGh1c2ggYWJvdXQgdW51c2VkIHZhclxuICAgIGggPSBudWxsO1xuICB9XG4gIC8vIGVuYWJsZSB0cmFuc2l0aW9uXG4gIHRoaXMuZW5hYmxlVHJhbnNpdGlvbiggYXJncy50byApO1xuICAvLyBzZXQgc3R5bGVzIHRoYXQgYXJlIHRyYW5zaXRpb25pbmdcbiAgdGhpcy5jc3MoIGFyZ3MudG8gKTtcblxuICB0aGlzLmlzVHJhbnNpdGlvbmluZyA9IHRydWU7XG5cbn07XG5cbi8vIGRhc2ggYmVmb3JlIGFsbCBjYXAgbGV0dGVycywgaW5jbHVkaW5nIGZpcnN0IGZvclxuLy8gV2Via2l0VHJhbnNmb3JtID0+IC13ZWJraXQtdHJhbnNmb3JtXG5mdW5jdGlvbiB0b0Rhc2hlZEFsbCggc3RyICkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoIC8oW0EtWl0pL2csIGZ1bmN0aW9uKCAkMSApIHtcbiAgICByZXR1cm4gJy0nICsgJDEudG9Mb3dlckNhc2UoKTtcbiAgfSk7XG59XG5cbnZhciB0cmFuc2l0aW9uUHJvcHMgPSAnb3BhY2l0eSwnICsgdG9EYXNoZWRBbGwoIHRyYW5zZm9ybVByb3BlcnR5ICk7XG5cbnByb3RvLmVuYWJsZVRyYW5zaXRpb24gPSBmdW5jdGlvbigvKiBzdHlsZSAqLykge1xuICAvLyBIQUNLIGNoYW5naW5nIHRyYW5zaXRpb25Qcm9wZXJ0eSBkdXJpbmcgYSB0cmFuc2l0aW9uXG4gIC8vIHdpbGwgY2F1c2UgdHJhbnNpdGlvbiB0byBqdW1wXG4gIGlmICggdGhpcy5pc1RyYW5zaXRpb25pbmcgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gbWFrZSBgdHJhbnNpdGlvbjogZm9vLCBiYXIsIGJhemAgZnJvbSBzdHlsZSBvYmplY3RcbiAgLy8gSEFDSyB1bi1jb21tZW50IHRoaXMgd2hlbiBlbmFibGVUcmFuc2l0aW9uIGNhbiB3b3JrXG4gIC8vIHdoaWxlIGEgdHJhbnNpdGlvbiBpcyBoYXBwZW5pbmdcbiAgLy8gdmFyIHRyYW5zaXRpb25WYWx1ZXMgPSBbXTtcbiAgLy8gZm9yICggdmFyIHByb3AgaW4gc3R5bGUgKSB7XG4gIC8vICAgLy8gZGFzaC1pZnkgY2FtZWxDYXNlZCBwcm9wZXJ0aWVzIGxpa2UgV2Via2l0VHJhbnNpdGlvblxuICAvLyAgIHByb3AgPSB2ZW5kb3JQcm9wZXJ0aWVzWyBwcm9wIF0gfHwgcHJvcDtcbiAgLy8gICB0cmFuc2l0aW9uVmFsdWVzLnB1c2goIHRvRGFzaGVkQWxsKCBwcm9wICkgKTtcbiAgLy8gfVxuICAvLyBtdW5nZSBudW1iZXIgdG8gbWlsbGlzZWNvbmQsIHRvIG1hdGNoIHN0YWdnZXJcbiAgdmFyIGR1cmF0aW9uID0gdGhpcy5sYXlvdXQub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb247XG4gIGR1cmF0aW9uID0gdHlwZW9mIGR1cmF0aW9uID09ICdudW1iZXInID8gZHVyYXRpb24gKyAnbXMnIDogZHVyYXRpb247XG4gIC8vIGVuYWJsZSB0cmFuc2l0aW9uIHN0eWxlc1xuICB0aGlzLmNzcyh7XG4gICAgdHJhbnNpdGlvblByb3BlcnR5OiB0cmFuc2l0aW9uUHJvcHMsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICB0cmFuc2l0aW9uRGVsYXk6IHRoaXMuc3RhZ2dlckRlbGF5IHx8IDBcbiAgfSk7XG4gIC8vIGxpc3RlbiBmb3IgdHJhbnNpdGlvbiBlbmQgZXZlbnRcbiAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoIHRyYW5zaXRpb25FbmRFdmVudCwgdGhpcywgZmFsc2UgKTtcbn07XG5cbi8vIC0tLS0tIGV2ZW50cyAtLS0tLSAvL1xuXG5wcm90by5vbndlYmtpdFRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHRoaXMub250cmFuc2l0aW9uZW5kKCBldmVudCApO1xufTtcblxucHJvdG8ub25vdHJhbnNpdGlvbmVuZCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdGhpcy5vbnRyYW5zaXRpb25lbmQoIGV2ZW50ICk7XG59O1xuXG4vLyBwcm9wZXJ0aWVzIHRoYXQgSSBtdW5nZSB0byBtYWtlIG15IGxpZmUgZWFzaWVyXG52YXIgZGFzaGVkVmVuZG9yUHJvcGVydGllcyA9IHtcbiAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3RyYW5zZm9ybSdcbn07XG5cbnByb3RvLm9udHJhbnNpdGlvbmVuZCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgLy8gZGlzcmVnYXJkIGJ1YmJsZWQgZXZlbnRzIGZyb20gY2hpbGRyZW5cbiAgaWYgKCBldmVudC50YXJnZXQgIT09IHRoaXMuZWxlbWVudCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIF90cmFuc2l0aW9uID0gdGhpcy5fdHJhbnNuO1xuICAvLyBnZXQgcHJvcGVydHkgbmFtZSBvZiB0cmFuc2l0aW9uZWQgcHJvcGVydHksIGNvbnZlcnQgdG8gcHJlZml4LWZyZWVcbiAgdmFyIHByb3BlcnR5TmFtZSA9IGRhc2hlZFZlbmRvclByb3BlcnRpZXNbIGV2ZW50LnByb3BlcnR5TmFtZSBdIHx8IGV2ZW50LnByb3BlcnR5TmFtZTtcblxuICAvLyByZW1vdmUgcHJvcGVydHkgdGhhdCBoYXMgY29tcGxldGVkIHRyYW5zaXRpb25pbmdcbiAgZGVsZXRlIF90cmFuc2l0aW9uLmluZ1Byb3BlcnRpZXNbIHByb3BlcnR5TmFtZSBdO1xuICAvLyBjaGVjayBpZiBhbnkgcHJvcGVydGllcyBhcmUgc3RpbGwgdHJhbnNpdGlvbmluZ1xuICBpZiAoIGlzRW1wdHlPYmooIF90cmFuc2l0aW9uLmluZ1Byb3BlcnRpZXMgKSApIHtcbiAgICAvLyBhbGwgcHJvcGVydGllcyBoYXZlIGNvbXBsZXRlZCB0cmFuc2l0aW9uaW5nXG4gICAgdGhpcy5kaXNhYmxlVHJhbnNpdGlvbigpO1xuICB9XG4gIC8vIGNsZWFuIHN0eWxlXG4gIGlmICggcHJvcGVydHlOYW1lIGluIF90cmFuc2l0aW9uLmNsZWFuICkge1xuICAgIC8vIGNsZWFuIHVwIHN0eWxlXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlWyBldmVudC5wcm9wZXJ0eU5hbWUgXSA9ICcnO1xuICAgIGRlbGV0ZSBfdHJhbnNpdGlvbi5jbGVhblsgcHJvcGVydHlOYW1lIF07XG4gIH1cbiAgLy8gdHJpZ2dlciBvblRyYW5zaXRpb25FbmQgY2FsbGJhY2tcbiAgaWYgKCBwcm9wZXJ0eU5hbWUgaW4gX3RyYW5zaXRpb24ub25FbmQgKSB7XG4gICAgdmFyIG9uVHJhbnNpdGlvbkVuZCA9IF90cmFuc2l0aW9uLm9uRW5kWyBwcm9wZXJ0eU5hbWUgXTtcbiAgICBvblRyYW5zaXRpb25FbmQuY2FsbCggdGhpcyApO1xuICAgIGRlbGV0ZSBfdHJhbnNpdGlvbi5vbkVuZFsgcHJvcGVydHlOYW1lIF07XG4gIH1cblxuICB0aGlzLmVtaXRFdmVudCggJ3RyYW5zaXRpb25FbmQnLCBbIHRoaXMgXSApO1xufTtcblxucHJvdG8uZGlzYWJsZVRyYW5zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5yZW1vdmVUcmFuc2l0aW9uU3R5bGVzKCk7XG4gIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCB0cmFuc2l0aW9uRW5kRXZlbnQsIHRoaXMsIGZhbHNlICk7XG4gIHRoaXMuaXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG59O1xuXG4vKipcbiAqIHJlbW92ZXMgc3R5bGUgcHJvcGVydHkgZnJvbSBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gc3R5bGVcbioqL1xucHJvdG8uX3JlbW92ZVN0eWxlcyA9IGZ1bmN0aW9uKCBzdHlsZSApIHtcbiAgLy8gY2xlYW4gdXAgdHJhbnNpdGlvbiBzdHlsZXNcbiAgdmFyIGNsZWFuU3R5bGUgPSB7fTtcbiAgZm9yICggdmFyIHByb3AgaW4gc3R5bGUgKSB7XG4gICAgY2xlYW5TdHlsZVsgcHJvcCBdID0gJyc7XG4gIH1cbiAgdGhpcy5jc3MoIGNsZWFuU3R5bGUgKTtcbn07XG5cbnZhciBjbGVhblRyYW5zaXRpb25TdHlsZSA9IHtcbiAgdHJhbnNpdGlvblByb3BlcnR5OiAnJyxcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnJyxcbiAgdHJhbnNpdGlvbkRlbGF5OiAnJ1xufTtcblxucHJvdG8ucmVtb3ZlVHJhbnNpdGlvblN0eWxlcyA9IGZ1bmN0aW9uKCkge1xuICAvLyByZW1vdmUgdHJhbnNpdGlvblxuICB0aGlzLmNzcyggY2xlYW5UcmFuc2l0aW9uU3R5bGUgKTtcbn07XG5cbi8vIC0tLS0tIHN0YWdnZXIgLS0tLS0gLy9cblxucHJvdG8uc3RhZ2dlciA9IGZ1bmN0aW9uKCBkZWxheSApIHtcbiAgZGVsYXkgPSBpc05hTiggZGVsYXkgKSA/IDAgOiBkZWxheTtcbiAgdGhpcy5zdGFnZ2VyRGVsYXkgPSBkZWxheSArICdtcyc7XG59O1xuXG4vLyAtLS0tLSBzaG93L2hpZGUvcmVtb3ZlIC0tLS0tIC8vXG5cbi8vIHJlbW92ZSBlbGVtZW50IGZyb20gRE9NXG5wcm90by5yZW1vdmVFbGVtID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCB0aGlzLmVsZW1lbnQgKTtcbiAgLy8gcmVtb3ZlIGRpc3BsYXk6IG5vbmVcbiAgdGhpcy5jc3MoeyBkaXNwbGF5OiAnJyB9KTtcbiAgdGhpcy5lbWl0RXZlbnQoICdyZW1vdmUnLCBbIHRoaXMgXSApO1xufTtcblxucHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gIC8vIGp1c3QgcmVtb3ZlIGVsZW1lbnQgaWYgbm8gdHJhbnNpdGlvbiBzdXBwb3J0IG9yIG5vIHRyYW5zaXRpb25cbiAgaWYgKCAhdHJhbnNpdGlvblByb3BlcnR5IHx8ICFwYXJzZUZsb2F0KCB0aGlzLmxheW91dC5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbiApICkge1xuICAgIHRoaXMucmVtb3ZlRWxlbSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHN0YXJ0IHRyYW5zaXRpb25cbiAgdGhpcy5vbmNlKCAndHJhbnNpdGlvbkVuZCcsIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlRWxlbSgpO1xuICB9KTtcbiAgdGhpcy5oaWRlKCk7XG59O1xuXG5wcm90by5yZXZlYWwgPSBmdW5jdGlvbigpIHtcbiAgZGVsZXRlIHRoaXMuaXNIaWRkZW47XG4gIC8vIHJlbW92ZSBkaXNwbGF5OiBub25lXG4gIHRoaXMuY3NzKHsgZGlzcGxheTogJycgfSk7XG5cbiAgdmFyIG9wdGlvbnMgPSB0aGlzLmxheW91dC5vcHRpb25zO1xuXG4gIHZhciBvblRyYW5zaXRpb25FbmQgPSB7fTtcbiAgdmFyIHRyYW5zaXRpb25FbmRQcm9wZXJ0eSA9IHRoaXMuZ2V0SGlkZVJldmVhbFRyYW5zaXRpb25FbmRQcm9wZXJ0eSgndmlzaWJsZVN0eWxlJyk7XG4gIG9uVHJhbnNpdGlvbkVuZFsgdHJhbnNpdGlvbkVuZFByb3BlcnR5IF0gPSB0aGlzLm9uUmV2ZWFsVHJhbnNpdGlvbkVuZDtcblxuICB0aGlzLnRyYW5zaXRpb24oe1xuICAgIGZyb206IG9wdGlvbnMuaGlkZGVuU3R5bGUsXG4gICAgdG86IG9wdGlvbnMudmlzaWJsZVN0eWxlLFxuICAgIGlzQ2xlYW5pbmc6IHRydWUsXG4gICAgb25UcmFuc2l0aW9uRW5kOiBvblRyYW5zaXRpb25FbmRcbiAgfSk7XG59O1xuXG5wcm90by5vblJldmVhbFRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbigpIHtcbiAgLy8gY2hlY2sgaWYgc3RpbGwgdmlzaWJsZVxuICAvLyBkdXJpbmcgdHJhbnNpdGlvbiwgaXRlbSBtYXkgaGF2ZSBiZWVuIGhpZGRlblxuICBpZiAoICF0aGlzLmlzSGlkZGVuICkge1xuICAgIHRoaXMuZW1pdEV2ZW50KCdyZXZlYWwnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBnZXQgc3R5bGUgcHJvcGVydHkgdXNlIGZvciBoaWRlL3JldmVhbCB0cmFuc2l0aW9uIGVuZFxuICogQHBhcmFtIHtTdHJpbmd9IHN0eWxlUHJvcGVydHkgLSBoaWRkZW5TdHlsZS92aXNpYmxlU3R5bGVcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbnByb3RvLmdldEhpZGVSZXZlYWxUcmFuc2l0aW9uRW5kUHJvcGVydHkgPSBmdW5jdGlvbiggc3R5bGVQcm9wZXJ0eSApIHtcbiAgdmFyIG9wdGlvblN0eWxlID0gdGhpcy5sYXlvdXQub3B0aW9uc1sgc3R5bGVQcm9wZXJ0eSBdO1xuICAvLyB1c2Ugb3BhY2l0eVxuICBpZiAoIG9wdGlvblN0eWxlLm9wYWNpdHkgKSB7XG4gICAgcmV0dXJuICdvcGFjaXR5JztcbiAgfVxuICAvLyBnZXQgZmlyc3QgcHJvcGVydHlcbiAgZm9yICggdmFyIHByb3AgaW4gb3B0aW9uU3R5bGUgKSB7XG4gICAgcmV0dXJuIHByb3A7XG4gIH1cbn07XG5cbnByb3RvLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gc2V0IGZsYWdcbiAgdGhpcy5pc0hpZGRlbiA9IHRydWU7XG4gIC8vIHJlbW92ZSBkaXNwbGF5OiBub25lXG4gIHRoaXMuY3NzKHsgZGlzcGxheTogJycgfSk7XG5cbiAgdmFyIG9wdGlvbnMgPSB0aGlzLmxheW91dC5vcHRpb25zO1xuXG4gIHZhciBvblRyYW5zaXRpb25FbmQgPSB7fTtcbiAgdmFyIHRyYW5zaXRpb25FbmRQcm9wZXJ0eSA9IHRoaXMuZ2V0SGlkZVJldmVhbFRyYW5zaXRpb25FbmRQcm9wZXJ0eSgnaGlkZGVuU3R5bGUnKTtcbiAgb25UcmFuc2l0aW9uRW5kWyB0cmFuc2l0aW9uRW5kUHJvcGVydHkgXSA9IHRoaXMub25IaWRlVHJhbnNpdGlvbkVuZDtcblxuICB0aGlzLnRyYW5zaXRpb24oe1xuICAgIGZyb206IG9wdGlvbnMudmlzaWJsZVN0eWxlLFxuICAgIHRvOiBvcHRpb25zLmhpZGRlblN0eWxlLFxuICAgIC8vIGtlZXAgaGlkZGVuIHN0dWZmIGhpZGRlblxuICAgIGlzQ2xlYW5pbmc6IHRydWUsXG4gICAgb25UcmFuc2l0aW9uRW5kOiBvblRyYW5zaXRpb25FbmRcbiAgfSk7XG59O1xuXG5wcm90by5vbkhpZGVUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNoZWNrIGlmIHN0aWxsIGhpZGRlblxuICAvLyBkdXJpbmcgdHJhbnNpdGlvbiwgaXRlbSBtYXkgaGF2ZSBiZWVuIHVuLWhpZGRlblxuICBpZiAoIHRoaXMuaXNIaWRkZW4gKSB7XG4gICAgdGhpcy5jc3MoeyBkaXNwbGF5OiAnbm9uZScgfSk7XG4gICAgdGhpcy5lbWl0RXZlbnQoJ2hpZGUnKTtcbiAgfVxufTtcblxucHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmNzcyh7XG4gICAgcG9zaXRpb246ICcnLFxuICAgIGxlZnQ6ICcnLFxuICAgIHJpZ2h0OiAnJyxcbiAgICB0b3A6ICcnLFxuICAgIGJvdHRvbTogJycsXG4gICAgdHJhbnNpdGlvbjogJycsXG4gICAgdHJhbnNmb3JtOiAnJ1xuICB9KTtcbn07XG5cbnJldHVybiBJdGVtO1xuXG59KSk7XG4iLCIvKiFcbiAqIE91dGxheWVyIHYyLjEuMVxuICogdGhlIGJyYWlucyBhbmQgZ3V0cyBvZiBhIGxheW91dCBsaWJyYXJ5XG4gKiBNSVQgbGljZW5zZVxuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLyogZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRCAtIFJlcXVpcmVKU1xuICAgIGRlZmluZSggW1xuICAgICAgICAnZXYtZW1pdHRlci9ldi1lbWl0dGVyJyxcbiAgICAgICAgJ2dldC1zaXplL2dldC1zaXplJyxcbiAgICAgICAgJ2Zpenp5LXVpLXV0aWxzL3V0aWxzJyxcbiAgICAgICAgJy4vaXRlbSdcbiAgICAgIF0sXG4gICAgICBmdW5jdGlvbiggRXZFbWl0dGVyLCBnZXRTaXplLCB1dGlscywgSXRlbSApIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgRXZFbWl0dGVyLCBnZXRTaXplLCB1dGlscywgSXRlbSk7XG4gICAgICB9XG4gICAgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KUyAtIEJyb3dzZXJpZnksIFdlYnBhY2tcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCdldi1lbWl0dGVyJyksXG4gICAgICByZXF1aXJlKCdnZXQtc2l6ZScpLFxuICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKSxcbiAgICAgIHJlcXVpcmUoJy4vaXRlbScpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5PdXRsYXllciA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuRXZFbWl0dGVyLFxuICAgICAgd2luZG93LmdldFNpemUsXG4gICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICAgd2luZG93Lk91dGxheWVyLkl0ZW1cbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBFdkVtaXR0ZXIsIGdldFNpemUsIHV0aWxzLCBJdGVtICkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLSB2YXJzIC0tLS0tIC8vXG5cbnZhciBjb25zb2xlID0gd2luZG93LmNvbnNvbGU7XG52YXIgalF1ZXJ5ID0gd2luZG93LmpRdWVyeTtcbnZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gT3V0bGF5ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gZ2xvYmFsbHkgdW5pcXVlIGlkZW50aWZpZXJzXG52YXIgR1VJRCA9IDA7XG4vLyBpbnRlcm5hbCBzdG9yZSBvZiBhbGwgT3V0bGF5ZXIgaW50YW5jZXNcbnZhciBpbnN0YW5jZXMgPSB7fTtcblxuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudCwgU3RyaW5nfSBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIE91dGxheWVyKCBlbGVtZW50LCBvcHRpb25zICkge1xuICB2YXIgcXVlcnlFbGVtZW50ID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCBlbGVtZW50ICk7XG4gIGlmICggIXF1ZXJ5RWxlbWVudCApIHtcbiAgICBpZiAoIGNvbnNvbGUgKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCAnQmFkIGVsZW1lbnQgZm9yICcgKyB0aGlzLmNvbnN0cnVjdG9yLm5hbWVzcGFjZSArXG4gICAgICAgICc6ICcgKyAoIHF1ZXJ5RWxlbWVudCB8fCBlbGVtZW50ICkgKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuZWxlbWVudCA9IHF1ZXJ5RWxlbWVudDtcbiAgLy8gYWRkIGpRdWVyeVxuICBpZiAoIGpRdWVyeSApIHtcbiAgICB0aGlzLiRlbGVtZW50ID0galF1ZXJ5KCB0aGlzLmVsZW1lbnQgKTtcbiAgfVxuXG4gIC8vIG9wdGlvbnNcbiAgdGhpcy5vcHRpb25zID0gdXRpbHMuZXh0ZW5kKCB7fSwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0cyApO1xuICB0aGlzLm9wdGlvbiggb3B0aW9ucyApO1xuXG4gIC8vIGFkZCBpZCBmb3IgT3V0bGF5ZXIuZ2V0RnJvbUVsZW1lbnRcbiAgdmFyIGlkID0gKytHVUlEO1xuICB0aGlzLmVsZW1lbnQub3V0bGF5ZXJHVUlEID0gaWQ7IC8vIGV4cGFuZG9cbiAgaW5zdGFuY2VzWyBpZCBdID0gdGhpczsgLy8gYXNzb2NpYXRlIHZpYSBpZFxuXG4gIC8vIGtpY2sgaXQgb2ZmXG4gIHRoaXMuX2NyZWF0ZSgpO1xuXG4gIHZhciBpc0luaXRMYXlvdXQgPSB0aGlzLl9nZXRPcHRpb24oJ2luaXRMYXlvdXQnKTtcbiAgaWYgKCBpc0luaXRMYXlvdXQgKSB7XG4gICAgdGhpcy5sYXlvdXQoKTtcbiAgfVxufVxuXG4vLyBzZXR0aW5ncyBhcmUgZm9yIGludGVybmFsIHVzZSBvbmx5XG5PdXRsYXllci5uYW1lc3BhY2UgPSAnb3V0bGF5ZXInO1xuT3V0bGF5ZXIuSXRlbSA9IEl0ZW07XG5cbi8vIGRlZmF1bHQgb3B0aW9uc1xuT3V0bGF5ZXIuZGVmYXVsdHMgPSB7XG4gIGNvbnRhaW5lclN0eWxlOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgaW5pdExheW91dDogdHJ1ZSxcbiAgb3JpZ2luTGVmdDogdHJ1ZSxcbiAgb3JpZ2luVG9wOiB0cnVlLFxuICByZXNpemU6IHRydWUsXG4gIHJlc2l6ZUNvbnRhaW5lcjogdHJ1ZSxcbiAgLy8gaXRlbSBvcHRpb25zXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogJzAuNHMnLFxuICBoaWRkZW5TdHlsZToge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMC4wMDEpJ1xuICB9LFxuICB2aXNpYmxlU3R5bGU6IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICB9XG59O1xuXG52YXIgcHJvdG8gPSBPdXRsYXllci5wcm90b3R5cGU7XG4vLyBpbmhlcml0IEV2RW1pdHRlclxudXRpbHMuZXh0ZW5kKCBwcm90bywgRXZFbWl0dGVyLnByb3RvdHlwZSApO1xuXG4vKipcbiAqIHNldCBvcHRpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICovXG5wcm90by5vcHRpb24gPSBmdW5jdGlvbiggb3B0cyApIHtcbiAgdXRpbHMuZXh0ZW5kKCB0aGlzLm9wdGlvbnMsIG9wdHMgKTtcbn07XG5cbi8qKlxuICogZ2V0IGJhY2t3YXJkcyBjb21wYXRpYmxlIG9wdGlvbiB2YWx1ZSwgY2hlY2sgb2xkIG5hbWVcbiAqL1xucHJvdG8uX2dldE9wdGlvbiA9IGZ1bmN0aW9uKCBvcHRpb24gKSB7XG4gIHZhciBvbGRPcHRpb24gPSB0aGlzLmNvbnN0cnVjdG9yLmNvbXBhdE9wdGlvbnNbIG9wdGlvbiBdO1xuICByZXR1cm4gb2xkT3B0aW9uICYmIHRoaXMub3B0aW9uc1sgb2xkT3B0aW9uIF0gIT09IHVuZGVmaW5lZCA/XG4gICAgdGhpcy5vcHRpb25zWyBvbGRPcHRpb24gXSA6IHRoaXMub3B0aW9uc1sgb3B0aW9uIF07XG59O1xuXG5PdXRsYXllci5jb21wYXRPcHRpb25zID0ge1xuICAvLyBjdXJyZW50TmFtZTogb2xkTmFtZVxuICBpbml0TGF5b3V0OiAnaXNJbml0TGF5b3V0JyxcbiAgaG9yaXpvbnRhbDogJ2lzSG9yaXpvbnRhbCcsXG4gIGxheW91dEluc3RhbnQ6ICdpc0xheW91dEluc3RhbnQnLFxuICBvcmlnaW5MZWZ0OiAnaXNPcmlnaW5MZWZ0JyxcbiAgb3JpZ2luVG9wOiAnaXNPcmlnaW5Ub3AnLFxuICByZXNpemU6ICdpc1Jlc2l6ZUJvdW5kJyxcbiAgcmVzaXplQ29udGFpbmVyOiAnaXNSZXNpemluZ0NvbnRhaW5lcidcbn07XG5cbnByb3RvLl9jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gZ2V0IGl0ZW1zIGZyb20gY2hpbGRyZW5cbiAgdGhpcy5yZWxvYWRJdGVtcygpO1xuICAvLyBlbGVtZW50cyB0aGF0IGFmZmVjdCBsYXlvdXQsIGJ1dCBhcmUgbm90IGxhaWQgb3V0XG4gIHRoaXMuc3RhbXBzID0gW107XG4gIHRoaXMuc3RhbXAoIHRoaXMub3B0aW9ucy5zdGFtcCApO1xuICAvLyBzZXQgY29udGFpbmVyIHN0eWxlXG4gIHV0aWxzLmV4dGVuZCggdGhpcy5lbGVtZW50LnN0eWxlLCB0aGlzLm9wdGlvbnMuY29udGFpbmVyU3R5bGUgKTtcblxuICAvLyBiaW5kIHJlc2l6ZSBtZXRob2RcbiAgdmFyIGNhbkJpbmRSZXNpemUgPSB0aGlzLl9nZXRPcHRpb24oJ3Jlc2l6ZScpO1xuICBpZiAoIGNhbkJpbmRSZXNpemUgKSB7XG4gICAgdGhpcy5iaW5kUmVzaXplKCk7XG4gIH1cbn07XG5cbi8vIGdvZXMgdGhyb3VnaCBhbGwgY2hpbGRyZW4gYWdhaW4gYW5kIGdldHMgYnJpY2tzIGluIHByb3BlciBvcmRlclxucHJvdG8ucmVsb2FkSXRlbXMgPSBmdW5jdGlvbigpIHtcbiAgLy8gY29sbGVjdGlvbiBvZiBpdGVtIGVsZW1lbnRzXG4gIHRoaXMuaXRlbXMgPSB0aGlzLl9pdGVtaXplKCB0aGlzLmVsZW1lbnQuY2hpbGRyZW4gKTtcbn07XG5cblxuLyoqXG4gKiB0dXJuIGVsZW1lbnRzIGludG8gT3V0bGF5ZXIuSXRlbXMgdG8gYmUgdXNlZCBpbiBsYXlvdXRcbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgSFRNTEVsZW1lbnR9IGVsZW1zXG4gKiBAcmV0dXJucyB7QXJyYXl9IGl0ZW1zIC0gY29sbGVjdGlvbiBvZiBuZXcgT3V0bGF5ZXIgSXRlbXNcbiAqL1xucHJvdG8uX2l0ZW1pemUgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG5cbiAgdmFyIGl0ZW1FbGVtcyA9IHRoaXMuX2ZpbHRlckZpbmRJdGVtRWxlbWVudHMoIGVsZW1zICk7XG4gIHZhciBJdGVtID0gdGhpcy5jb25zdHJ1Y3Rvci5JdGVtO1xuXG4gIC8vIGNyZWF0ZSBuZXcgT3V0bGF5ZXIgSXRlbXMgZm9yIGNvbGxlY3Rpb25cbiAgdmFyIGl0ZW1zID0gW107XG4gIGZvciAoIHZhciBpPTA7IGkgPCBpdGVtRWxlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIGVsZW0gPSBpdGVtRWxlbXNbaV07XG4gICAgdmFyIGl0ZW0gPSBuZXcgSXRlbSggZWxlbSwgdGhpcyApO1xuICAgIGl0ZW1zLnB1c2goIGl0ZW0gKTtcbiAgfVxuXG4gIHJldHVybiBpdGVtcztcbn07XG5cbi8qKlxuICogZ2V0IGl0ZW0gZWxlbWVudHMgdG8gYmUgdXNlZCBpbiBsYXlvdXRcbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgSFRNTEVsZW1lbnR9IGVsZW1zXG4gKiBAcmV0dXJucyB7QXJyYXl9IGl0ZW1zIC0gaXRlbSBlbGVtZW50c1xuICovXG5wcm90by5fZmlsdGVyRmluZEl0ZW1FbGVtZW50cyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgcmV0dXJuIHV0aWxzLmZpbHRlckZpbmRFbGVtZW50cyggZWxlbXMsIHRoaXMub3B0aW9ucy5pdGVtU2VsZWN0b3IgKTtcbn07XG5cbi8qKlxuICogZ2V0dGVyIG1ldGhvZCBmb3IgZ2V0dGluZyBpdGVtIGVsZW1lbnRzXG4gKiBAcmV0dXJucyB7QXJyYXl9IGVsZW1zIC0gY29sbGVjdGlvbiBvZiBpdGVtIGVsZW1lbnRzXG4gKi9cbnByb3RvLmdldEl0ZW1FbGVtZW50cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5pdGVtcy5tYXAoIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIHJldHVybiBpdGVtLmVsZW1lbnQ7XG4gIH0pO1xufTtcblxuLy8gLS0tLS0gaW5pdCAmIGxheW91dCAtLS0tLSAvL1xuXG4vKipcbiAqIGxheXMgb3V0IGFsbCBpdGVtc1xuICovXG5wcm90by5sYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fcmVzZXRMYXlvdXQoKTtcbiAgdGhpcy5fbWFuYWdlU3RhbXBzKCk7XG5cbiAgLy8gZG9uJ3QgYW5pbWF0ZSBmaXJzdCBsYXlvdXRcbiAgdmFyIGxheW91dEluc3RhbnQgPSB0aGlzLl9nZXRPcHRpb24oJ2xheW91dEluc3RhbnQnKTtcbiAgdmFyIGlzSW5zdGFudCA9IGxheW91dEluc3RhbnQgIT09IHVuZGVmaW5lZCA/XG4gICAgbGF5b3V0SW5zdGFudCA6ICF0aGlzLl9pc0xheW91dEluaXRlZDtcbiAgdGhpcy5sYXlvdXRJdGVtcyggdGhpcy5pdGVtcywgaXNJbnN0YW50ICk7XG5cbiAgLy8gZmxhZyBmb3IgaW5pdGFsaXplZFxuICB0aGlzLl9pc0xheW91dEluaXRlZCA9IHRydWU7XG59O1xuXG4vLyBfaW5pdCBpcyBhbGlhcyBmb3IgbGF5b3V0XG5wcm90by5faW5pdCA9IHByb3RvLmxheW91dDtcblxuLyoqXG4gKiBsb2dpYyBiZWZvcmUgYW55IG5ldyBsYXlvdXRcbiAqL1xucHJvdG8uX3Jlc2V0TGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZ2V0U2l6ZSgpO1xufTtcblxuXG5wcm90by5nZXRTaXplID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2l6ZSA9IGdldFNpemUoIHRoaXMuZWxlbWVudCApO1xufTtcblxuLyoqXG4gKiBnZXQgbWVhc3VyZW1lbnQgZnJvbSBvcHRpb24sIGZvciBjb2x1bW5XaWR0aCwgcm93SGVpZ2h0LCBndXR0ZXJcbiAqIGlmIG9wdGlvbiBpcyBTdHJpbmcgLT4gZ2V0IGVsZW1lbnQgZnJvbSBzZWxlY3RvciBzdHJpbmcsICYgZ2V0IHNpemUgb2YgZWxlbWVudFxuICogaWYgb3B0aW9uIGlzIEVsZW1lbnQgLT4gZ2V0IHNpemUgb2YgZWxlbWVudFxuICogZWxzZSB1c2Ugb3B0aW9uIGFzIGEgbnVtYmVyXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lYXN1cmVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2l6ZSAtIHdpZHRoIG9yIGhlaWdodFxuICogQHByaXZhdGVcbiAqL1xucHJvdG8uX2dldE1lYXN1cmVtZW50ID0gZnVuY3Rpb24oIG1lYXN1cmVtZW50LCBzaXplICkge1xuICB2YXIgb3B0aW9uID0gdGhpcy5vcHRpb25zWyBtZWFzdXJlbWVudCBdO1xuICB2YXIgZWxlbTtcbiAgaWYgKCAhb3B0aW9uICkge1xuICAgIC8vIGRlZmF1bHQgdG8gMFxuICAgIHRoaXNbIG1lYXN1cmVtZW50IF0gPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBvcHRpb24gYXMgYW4gZWxlbWVudFxuICAgIGlmICggdHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJyApIHtcbiAgICAgIGVsZW0gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvciggb3B0aW9uICk7XG4gICAgfSBlbHNlIGlmICggb3B0aW9uIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgKSB7XG4gICAgICBlbGVtID0gb3B0aW9uO1xuICAgIH1cbiAgICAvLyB1c2Ugc2l6ZSBvZiBlbGVtZW50LCBpZiBlbGVtZW50XG4gICAgdGhpc1sgbWVhc3VyZW1lbnQgXSA9IGVsZW0gPyBnZXRTaXplKCBlbGVtIClbIHNpemUgXSA6IG9wdGlvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBsYXlvdXQgYSBjb2xsZWN0aW9uIG9mIGl0ZW0gZWxlbWVudHNcbiAqIEBhcGkgcHVibGljXG4gKi9cbnByb3RvLmxheW91dEl0ZW1zID0gZnVuY3Rpb24oIGl0ZW1zLCBpc0luc3RhbnQgKSB7XG4gIGl0ZW1zID0gdGhpcy5fZ2V0SXRlbXNGb3JMYXlvdXQoIGl0ZW1zICk7XG5cbiAgdGhpcy5fbGF5b3V0SXRlbXMoIGl0ZW1zLCBpc0luc3RhbnQgKTtcblxuICB0aGlzLl9wb3N0TGF5b3V0KCk7XG59O1xuXG4vKipcbiAqIGdldCB0aGUgaXRlbXMgdG8gYmUgbGFpZCBvdXRcbiAqIHlvdSBtYXkgd2FudCB0byBza2lwIG92ZXIgc29tZSBpdGVtc1xuICogQHBhcmFtIHtBcnJheX0gaXRlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gaXRlbXNcbiAqL1xucHJvdG8uX2dldEl0ZW1zRm9yTGF5b3V0ID0gZnVuY3Rpb24oIGl0ZW1zICkge1xuICByZXR1cm4gaXRlbXMuZmlsdGVyKCBmdW5jdGlvbiggaXRlbSApIHtcbiAgICByZXR1cm4gIWl0ZW0uaXNJZ25vcmVkO1xuICB9KTtcbn07XG5cbi8qKlxuICogbGF5b3V0IGl0ZW1zXG4gKiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuICogQHBhcmFtIHtCb29sZWFufSBpc0luc3RhbnRcbiAqL1xucHJvdG8uX2xheW91dEl0ZW1zID0gZnVuY3Rpb24oIGl0ZW1zLCBpc0luc3RhbnQgKSB7XG4gIHRoaXMuX2VtaXRDb21wbGV0ZU9uSXRlbXMoICdsYXlvdXQnLCBpdGVtcyApO1xuXG4gIGlmICggIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGggKSB7XG4gICAgLy8gbm8gaXRlbXMsIGVtaXQgZXZlbnQgd2l0aCBlbXB0eSBhcnJheVxuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBxdWV1ZSA9IFtdO1xuXG4gIGl0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIC8vIGdldCB4L3kgb2JqZWN0IGZyb20gbWV0aG9kXG4gICAgdmFyIHBvc2l0aW9uID0gdGhpcy5fZ2V0SXRlbUxheW91dFBvc2l0aW9uKCBpdGVtICk7XG4gICAgLy8gZW5xdWV1ZVxuICAgIHBvc2l0aW9uLml0ZW0gPSBpdGVtO1xuICAgIHBvc2l0aW9uLmlzSW5zdGFudCA9IGlzSW5zdGFudCB8fCBpdGVtLmlzTGF5b3V0SW5zdGFudDtcbiAgICBxdWV1ZS5wdXNoKCBwb3NpdGlvbiApO1xuICB9LCB0aGlzICk7XG5cbiAgdGhpcy5fcHJvY2Vzc0xheW91dFF1ZXVlKCBxdWV1ZSApO1xufTtcblxuLyoqXG4gKiBnZXQgaXRlbSBsYXlvdXQgcG9zaXRpb25cbiAqIEBwYXJhbSB7T3V0bGF5ZXIuSXRlbX0gaXRlbVxuICogQHJldHVybnMge09iamVjdH0geCBhbmQgeSBwb3NpdGlvblxuICovXG5wcm90by5fZ2V0SXRlbUxheW91dFBvc2l0aW9uID0gZnVuY3Rpb24oIC8qIGl0ZW0gKi8gKSB7XG4gIHJldHVybiB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG59O1xuXG4vKipcbiAqIGl0ZXJhdGUgb3ZlciBhcnJheSBhbmQgcG9zaXRpb24gZWFjaCBpdGVtXG4gKiBSZWFzb24gYmVpbmcgLSBzZXBhcmF0aW5nIHRoaXMgbG9naWMgcHJldmVudHMgJ2xheW91dCBpbnZhbGlkYXRpb24nXG4gKiB0aHggQHBhdWxfaXJpc2hcbiAqIEBwYXJhbSB7QXJyYXl9IHF1ZXVlXG4gKi9cbnByb3RvLl9wcm9jZXNzTGF5b3V0UXVldWUgPSBmdW5jdGlvbiggcXVldWUgKSB7XG4gIHRoaXMudXBkYXRlU3RhZ2dlcigpO1xuICBxdWV1ZS5mb3JFYWNoKCBmdW5jdGlvbiggb2JqLCBpICkge1xuICAgIHRoaXMuX3Bvc2l0aW9uSXRlbSggb2JqLml0ZW0sIG9iai54LCBvYmoueSwgb2JqLmlzSW5zdGFudCwgaSApO1xuICB9LCB0aGlzICk7XG59O1xuXG4vLyBzZXQgc3RhZ2dlciBmcm9tIG9wdGlvbiBpbiBtaWxsaXNlY29uZHMgbnVtYmVyXG5wcm90by51cGRhdGVTdGFnZ2VyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzdGFnZ2VyID0gdGhpcy5vcHRpb25zLnN0YWdnZXI7XG4gIGlmICggc3RhZ2dlciA9PT0gbnVsbCB8fCBzdGFnZ2VyID09PSB1bmRlZmluZWQgKSB7XG4gICAgdGhpcy5zdGFnZ2VyID0gMDtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5zdGFnZ2VyID0gZ2V0TWlsbGlzZWNvbmRzKCBzdGFnZ2VyICk7XG4gIHJldHVybiB0aGlzLnN0YWdnZXI7XG59O1xuXG4vKipcbiAqIFNldHMgcG9zaXRpb24gb2YgaXRlbSBpbiBET01cbiAqIEBwYXJhbSB7T3V0bGF5ZXIuSXRlbX0gaXRlbVxuICogQHBhcmFtIHtOdW1iZXJ9IHggLSBob3Jpem9udGFsIHBvc2l0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0geSAtIHZlcnRpY2FsIHBvc2l0aW9uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzSW5zdGFudCAtIGRpc2FibGVzIHRyYW5zaXRpb25zXG4gKi9cbnByb3RvLl9wb3NpdGlvbkl0ZW0gPSBmdW5jdGlvbiggaXRlbSwgeCwgeSwgaXNJbnN0YW50LCBpICkge1xuICBpZiAoIGlzSW5zdGFudCApIHtcbiAgICAvLyBpZiBub3QgdHJhbnNpdGlvbiwganVzdCBzZXQgQ1NTXG4gICAgaXRlbS5nb1RvKCB4LCB5ICk7XG4gIH0gZWxzZSB7XG4gICAgaXRlbS5zdGFnZ2VyKCBpICogdGhpcy5zdGFnZ2VyICk7XG4gICAgaXRlbS5tb3ZlVG8oIHgsIHkgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBbnkgbG9naWMgeW91IHdhbnQgdG8gZG8gYWZ0ZXIgZWFjaCBsYXlvdXQsXG4gKiBpLmUuIHNpemUgdGhlIGNvbnRhaW5lclxuICovXG5wcm90by5fcG9zdExheW91dCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJlc2l6ZUNvbnRhaW5lcigpO1xufTtcblxucHJvdG8ucmVzaXplQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpc1Jlc2l6aW5nQ29udGFpbmVyID0gdGhpcy5fZ2V0T3B0aW9uKCdyZXNpemVDb250YWluZXInKTtcbiAgaWYgKCAhaXNSZXNpemluZ0NvbnRhaW5lciApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIHNpemUgPSB0aGlzLl9nZXRDb250YWluZXJTaXplKCk7XG4gIGlmICggc2l6ZSApIHtcbiAgICB0aGlzLl9zZXRDb250YWluZXJNZWFzdXJlKCBzaXplLndpZHRoLCB0cnVlICk7XG4gICAgdGhpcy5fc2V0Q29udGFpbmVyTWVhc3VyZSggc2l6ZS5oZWlnaHQsIGZhbHNlICk7XG4gIH1cbn07XG5cbi8qKlxuICogU2V0cyB3aWR0aCBvciBoZWlnaHQgb2YgY29udGFpbmVyIGlmIHJldHVybmVkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBzaXplXG4gKiAgIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxuICogICBAcGFyYW0ge051bWJlcn0gaGVpZ2h0XG4gKi9cbnByb3RvLl9nZXRDb250YWluZXJTaXplID0gbm9vcDtcblxuLyoqXG4gKiBAcGFyYW0ge051bWJlcn0gbWVhc3VyZSAtIHNpemUgb2Ygd2lkdGggb3IgaGVpZ2h0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzV2lkdGhcbiAqL1xucHJvdG8uX3NldENvbnRhaW5lck1lYXN1cmUgPSBmdW5jdGlvbiggbWVhc3VyZSwgaXNXaWR0aCApIHtcbiAgaWYgKCBtZWFzdXJlID09PSB1bmRlZmluZWQgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGVsZW1TaXplID0gdGhpcy5zaXplO1xuICAvLyBhZGQgcGFkZGluZyBhbmQgYm9yZGVyIHdpZHRoIGlmIGJvcmRlciBib3hcbiAgaWYgKCBlbGVtU2l6ZS5pc0JvcmRlckJveCApIHtcbiAgICBtZWFzdXJlICs9IGlzV2lkdGggPyBlbGVtU2l6ZS5wYWRkaW5nTGVmdCArIGVsZW1TaXplLnBhZGRpbmdSaWdodCArXG4gICAgICBlbGVtU2l6ZS5ib3JkZXJMZWZ0V2lkdGggKyBlbGVtU2l6ZS5ib3JkZXJSaWdodFdpZHRoIDpcbiAgICAgIGVsZW1TaXplLnBhZGRpbmdCb3R0b20gKyBlbGVtU2l6ZS5wYWRkaW5nVG9wICtcbiAgICAgIGVsZW1TaXplLmJvcmRlclRvcFdpZHRoICsgZWxlbVNpemUuYm9yZGVyQm90dG9tV2lkdGg7XG4gIH1cblxuICBtZWFzdXJlID0gTWF0aC5tYXgoIG1lYXN1cmUsIDAgKTtcbiAgdGhpcy5lbGVtZW50LnN0eWxlWyBpc1dpZHRoID8gJ3dpZHRoJyA6ICdoZWlnaHQnIF0gPSBtZWFzdXJlICsgJ3B4Jztcbn07XG5cbi8qKlxuICogZW1pdCBldmVudENvbXBsZXRlIG9uIGEgY29sbGVjdGlvbiBvZiBpdGVtcyBldmVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcbiAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zIC0gT3V0bGF5ZXIuSXRlbXNcbiAqL1xucHJvdG8uX2VtaXRDb21wbGV0ZU9uSXRlbXMgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBpdGVtcyApIHtcbiAgdmFyIF90aGlzID0gdGhpcztcbiAgZnVuY3Rpb24gb25Db21wbGV0ZSgpIHtcbiAgICBfdGhpcy5kaXNwYXRjaEV2ZW50KCBldmVudE5hbWUgKyAnQ29tcGxldGUnLCBudWxsLCBbIGl0ZW1zIF0gKTtcbiAgfVxuXG4gIHZhciBjb3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgaWYgKCAhaXRlbXMgfHwgIWNvdW50ICkge1xuICAgIG9uQ29tcGxldGUoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZG9uZUNvdW50ID0gMDtcbiAgZnVuY3Rpb24gdGljaygpIHtcbiAgICBkb25lQ291bnQrKztcbiAgICBpZiAoIGRvbmVDb3VudCA9PSBjb3VudCApIHtcbiAgICAgIG9uQ29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICAvLyBiaW5kIGNhbGxiYWNrXG4gIGl0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIGl0ZW0ub25jZSggZXZlbnROYW1lLCB0aWNrICk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBlbWl0cyBldmVudHMgdmlhIEV2RW1pdHRlciBhbmQgalF1ZXJ5IGV2ZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgLSBuYW1lIG9mIGV2ZW50XG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIG9yaWdpbmFsIGV2ZW50XG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIC0gZXh0cmEgYXJndW1lbnRzXG4gKi9cbnByb3RvLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiggdHlwZSwgZXZlbnQsIGFyZ3MgKSB7XG4gIC8vIGFkZCBvcmlnaW5hbCBldmVudCB0byBhcmd1bWVudHNcbiAgdmFyIGVtaXRBcmdzID0gZXZlbnQgPyBbIGV2ZW50IF0uY29uY2F0KCBhcmdzICkgOiBhcmdzO1xuICB0aGlzLmVtaXRFdmVudCggdHlwZSwgZW1pdEFyZ3MgKTtcblxuICBpZiAoIGpRdWVyeSApIHtcbiAgICAvLyBzZXQgdGhpcy4kZWxlbWVudFxuICAgIHRoaXMuJGVsZW1lbnQgPSB0aGlzLiRlbGVtZW50IHx8IGpRdWVyeSggdGhpcy5lbGVtZW50ICk7XG4gICAgaWYgKCBldmVudCApIHtcbiAgICAgIC8vIGNyZWF0ZSBqUXVlcnkgZXZlbnRcbiAgICAgIHZhciAkZXZlbnQgPSBqUXVlcnkuRXZlbnQoIGV2ZW50ICk7XG4gICAgICAkZXZlbnQudHlwZSA9IHR5cGU7XG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoICRldmVudCwgYXJncyApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBqdXN0IHRyaWdnZXIgd2l0aCB0eXBlIGlmIG5vIGV2ZW50IGF2YWlsYWJsZVxuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCB0eXBlLCBhcmdzICk7XG4gICAgfVxuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBpZ25vcmUgJiBzdGFtcHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXG4vKipcbiAqIGtlZXAgaXRlbSBpbiBjb2xsZWN0aW9uLCBidXQgZG8gbm90IGxheSBpdCBvdXRcbiAqIGlnbm9yZWQgaXRlbXMgZG8gbm90IGdldCBza2lwcGVkIGluIGxheW91dFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtXG4gKi9cbnByb3RvLmlnbm9yZSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICB2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbSggZWxlbSApO1xuICBpZiAoIGl0ZW0gKSB7XG4gICAgaXRlbS5pc0lnbm9yZWQgPSB0cnVlO1xuICB9XG59O1xuXG4vKipcbiAqIHJldHVybiBpdGVtIHRvIGxheW91dCBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqL1xucHJvdG8udW5pZ25vcmUgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgdmFyIGl0ZW0gPSB0aGlzLmdldEl0ZW0oIGVsZW0gKTtcbiAgaWYgKCBpdGVtICkge1xuICAgIGRlbGV0ZSBpdGVtLmlzSWdub3JlZDtcbiAgfVxufTtcblxuLyoqXG4gKiBhZGRzIGVsZW1lbnRzIHRvIHN0YW1wc1xuICogQHBhcmFtIHtOb2RlTGlzdCwgQXJyYXksIEVsZW1lbnQsIG9yIFN0cmluZ30gZWxlbXNcbiAqL1xucHJvdG8uc3RhbXAgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIGVsZW1zID0gdGhpcy5fZmluZCggZWxlbXMgKTtcbiAgaWYgKCAhZWxlbXMgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5zdGFtcHMgPSB0aGlzLnN0YW1wcy5jb25jYXQoIGVsZW1zICk7XG4gIC8vIGlnbm9yZVxuICBlbGVtcy5mb3JFYWNoKCB0aGlzLmlnbm9yZSwgdGhpcyApO1xufTtcblxuLyoqXG4gKiByZW1vdmVzIGVsZW1lbnRzIHRvIHN0YW1wc1xuICogQHBhcmFtIHtOb2RlTGlzdCwgQXJyYXksIG9yIEVsZW1lbnR9IGVsZW1zXG4gKi9cbnByb3RvLnVuc3RhbXAgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIGVsZW1zID0gdGhpcy5fZmluZCggZWxlbXMgKTtcbiAgaWYgKCAhZWxlbXMgKXtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAvLyBmaWx0ZXIgb3V0IHJlbW92ZWQgc3RhbXAgZWxlbWVudHNcbiAgICB1dGlscy5yZW1vdmVGcm9tKCB0aGlzLnN0YW1wcywgZWxlbSApO1xuICAgIHRoaXMudW5pZ25vcmUoIGVsZW0gKTtcbiAgfSwgdGhpcyApO1xufTtcblxuLyoqXG4gKiBmaW5kcyBjaGlsZCBlbGVtZW50c1xuICogQHBhcmFtIHtOb2RlTGlzdCwgQXJyYXksIEVsZW1lbnQsIG9yIFN0cmluZ30gZWxlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gZWxlbXNcbiAqL1xucHJvdG8uX2ZpbmQgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIGlmICggIWVsZW1zICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBpZiBzdHJpbmcsIHVzZSBhcmd1bWVudCBhcyBzZWxlY3RvciBzdHJpbmdcbiAgaWYgKCB0eXBlb2YgZWxlbXMgPT0gJ3N0cmluZycgKSB7XG4gICAgZWxlbXMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCggZWxlbXMgKTtcbiAgfVxuICBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZWxlbXMgKTtcbiAgcmV0dXJuIGVsZW1zO1xufTtcblxucHJvdG8uX21hbmFnZVN0YW1wcyA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLnN0YW1wcyB8fCAhdGhpcy5zdGFtcHMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuX2dldEJvdW5kaW5nUmVjdCgpO1xuXG4gIHRoaXMuc3RhbXBzLmZvckVhY2goIHRoaXMuX21hbmFnZVN0YW1wLCB0aGlzICk7XG59O1xuXG4vLyB1cGRhdGUgYm91bmRpbmdMZWZ0IC8gVG9wXG5wcm90by5fZ2V0Qm91bmRpbmdSZWN0ID0gZnVuY3Rpb24oKSB7XG4gIC8vIGdldCBib3VuZGluZyByZWN0IGZvciBjb250YWluZXIgZWxlbWVudFxuICB2YXIgYm91bmRpbmdSZWN0ID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgdGhpcy5fYm91bmRpbmdSZWN0ID0ge1xuICAgIGxlZnQ6IGJvdW5kaW5nUmVjdC5sZWZ0ICsgc2l6ZS5wYWRkaW5nTGVmdCArIHNpemUuYm9yZGVyTGVmdFdpZHRoLFxuICAgIHRvcDogYm91bmRpbmdSZWN0LnRvcCArIHNpemUucGFkZGluZ1RvcCArIHNpemUuYm9yZGVyVG9wV2lkdGgsXG4gICAgcmlnaHQ6IGJvdW5kaW5nUmVjdC5yaWdodCAtICggc2l6ZS5wYWRkaW5nUmlnaHQgKyBzaXplLmJvcmRlclJpZ2h0V2lkdGggKSxcbiAgICBib3R0b206IGJvdW5kaW5nUmVjdC5ib3R0b20gLSAoIHNpemUucGFkZGluZ0JvdHRvbSArIHNpemUuYm9yZGVyQm90dG9tV2lkdGggKVxuICB9O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHN0YW1wXG4qKi9cbnByb3RvLl9tYW5hZ2VTdGFtcCA9IG5vb3A7XG5cbi8qKlxuICogZ2V0IHgveSBwb3NpdGlvbiBvZiBlbGVtZW50IHJlbGF0aXZlIHRvIGNvbnRhaW5lciBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqIEByZXR1cm5zIHtPYmplY3R9IG9mZnNldCAtIGhhcyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b21cbiAqL1xucHJvdG8uX2dldEVsZW1lbnRPZmZzZXQgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgdmFyIGJvdW5kaW5nUmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciB0aGlzUmVjdCA9IHRoaXMuX2JvdW5kaW5nUmVjdDtcbiAgdmFyIHNpemUgPSBnZXRTaXplKCBlbGVtICk7XG4gIHZhciBvZmZzZXQgPSB7XG4gICAgbGVmdDogYm91bmRpbmdSZWN0LmxlZnQgLSB0aGlzUmVjdC5sZWZ0IC0gc2l6ZS5tYXJnaW5MZWZ0LFxuICAgIHRvcDogYm91bmRpbmdSZWN0LnRvcCAtIHRoaXNSZWN0LnRvcCAtIHNpemUubWFyZ2luVG9wLFxuICAgIHJpZ2h0OiB0aGlzUmVjdC5yaWdodCAtIGJvdW5kaW5nUmVjdC5yaWdodCAtIHNpemUubWFyZ2luUmlnaHQsXG4gICAgYm90dG9tOiB0aGlzUmVjdC5ib3R0b20gLSBib3VuZGluZ1JlY3QuYm90dG9tIC0gc2l6ZS5tYXJnaW5Cb3R0b21cbiAgfTtcbiAgcmV0dXJuIG9mZnNldDtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHJlc2l6ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBlbmFibGUgZXZlbnQgaGFuZGxlcnMgZm9yIGxpc3RlbmVyc1xuLy8gaS5lLiByZXNpemUgLT4gb25yZXNpemVcbnByb3RvLmhhbmRsZUV2ZW50ID0gdXRpbHMuaGFuZGxlRXZlbnQ7XG5cbi8qKlxuICogQmluZCBsYXlvdXQgdG8gd2luZG93IHJlc2l6aW5nXG4gKi9cbnByb3RvLmJpbmRSZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCB0aGlzICk7XG4gIHRoaXMuaXNSZXNpemVCb3VuZCA9IHRydWU7XG59O1xuXG4vKipcbiAqIFVuYmluZCBsYXlvdXQgdG8gd2luZG93IHJlc2l6aW5nXG4gKi9cbnByb3RvLnVuYmluZFJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHRoaXMgKTtcbiAgdGhpcy5pc1Jlc2l6ZUJvdW5kID0gZmFsc2U7XG59O1xuXG5wcm90by5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJlc2l6ZSgpO1xufTtcblxudXRpbHMuZGVib3VuY2VNZXRob2QoIE91dGxheWVyLCAnb25yZXNpemUnLCAxMDAgKTtcblxucHJvdG8ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gIC8vIGRvbid0IHRyaWdnZXIgaWYgc2l6ZSBkaWQgbm90IGNoYW5nZVxuICAvLyBvciBpZiByZXNpemUgd2FzIHVuYm91bmQuIFNlZSAjOVxuICBpZiAoICF0aGlzLmlzUmVzaXplQm91bmQgfHwgIXRoaXMubmVlZHNSZXNpemVMYXlvdXQoKSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmxheW91dCgpO1xufTtcblxuLyoqXG4gKiBjaGVjayBpZiBsYXlvdXQgaXMgbmVlZGVkIHBvc3QgbGF5b3V0XG4gKiBAcmV0dXJucyBCb29sZWFuXG4gKi9cbnByb3RvLm5lZWRzUmVzaXplTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzaXplID0gZ2V0U2l6ZSggdGhpcy5lbGVtZW50ICk7XG4gIC8vIGNoZWNrIHRoYXQgdGhpcy5zaXplIGFuZCBzaXplIGFyZSB0aGVyZVxuICAvLyBJRTggdHJpZ2dlcnMgcmVzaXplIG9uIGJvZHkgc2l6ZSBjaGFuZ2UsIHNvIHRoZXkgbWlnaHQgbm90IGJlXG4gIHZhciBoYXNTaXplcyA9IHRoaXMuc2l6ZSAmJiBzaXplO1xuICByZXR1cm4gaGFzU2l6ZXMgJiYgc2l6ZS5pbm5lcldpZHRoICE9PSB0aGlzLnNpemUuaW5uZXJXaWR0aDtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1ldGhvZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBhZGQgaXRlbXMgdG8gT3V0bGF5ZXIgaW5zdGFuY2VcbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgRWxlbWVudH0gZWxlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gaXRlbXMgLSBPdXRsYXllci5JdGVtc1xuKiovXG5wcm90by5hZGRJdGVtcyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbWl6ZSggZWxlbXMgKTtcbiAgLy8gYWRkIGl0ZW1zIHRvIGNvbGxlY3Rpb25cbiAgaWYgKCBpdGVtcy5sZW5ndGggKSB7XG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuY29uY2F0KCBpdGVtcyApO1xuICB9XG4gIHJldHVybiBpdGVtcztcbn07XG5cbi8qKlxuICogTGF5b3V0IG5ld2x5LWFwcGVuZGVkIGl0ZW0gZWxlbWVudHNcbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgRWxlbWVudH0gZWxlbXNcbiAqL1xucHJvdG8uYXBwZW5kZWQgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHZhciBpdGVtcyA9IHRoaXMuYWRkSXRlbXMoIGVsZW1zICk7XG4gIGlmICggIWl0ZW1zLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gbGF5b3V0IGFuZCByZXZlYWwganVzdCB0aGUgbmV3IGl0ZW1zXG4gIHRoaXMubGF5b3V0SXRlbXMoIGl0ZW1zLCB0cnVlICk7XG4gIHRoaXMucmV2ZWFsKCBpdGVtcyApO1xufTtcblxuLyoqXG4gKiBMYXlvdXQgcHJlcGVuZGVkIGVsZW1lbnRzXG4gKiBAcGFyYW0ge0FycmF5IG9yIE5vZGVMaXN0IG9yIEVsZW1lbnR9IGVsZW1zXG4gKi9cbnByb3RvLnByZXBlbmRlZCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbWl6ZSggZWxlbXMgKTtcbiAgaWYgKCAhaXRlbXMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBhZGQgaXRlbXMgdG8gYmVnaW5uaW5nIG9mIGNvbGxlY3Rpb25cbiAgdmFyIHByZXZpb3VzSXRlbXMgPSB0aGlzLml0ZW1zLnNsaWNlKDApO1xuICB0aGlzLml0ZW1zID0gaXRlbXMuY29uY2F0KCBwcmV2aW91c0l0ZW1zICk7XG4gIC8vIHN0YXJ0IG5ldyBsYXlvdXRcbiAgdGhpcy5fcmVzZXRMYXlvdXQoKTtcbiAgdGhpcy5fbWFuYWdlU3RhbXBzKCk7XG4gIC8vIGxheW91dCBuZXcgc3R1ZmYgd2l0aG91dCB0cmFuc2l0aW9uXG4gIHRoaXMubGF5b3V0SXRlbXMoIGl0ZW1zLCB0cnVlICk7XG4gIHRoaXMucmV2ZWFsKCBpdGVtcyApO1xuICAvLyBsYXlvdXQgcHJldmlvdXMgaXRlbXNcbiAgdGhpcy5sYXlvdXRJdGVtcyggcHJldmlvdXNJdGVtcyApO1xufTtcblxuLyoqXG4gKiByZXZlYWwgYSBjb2xsZWN0aW9uIG9mIGl0ZW1zXG4gKiBAcGFyYW0ge0FycmF5IG9mIE91dGxheWVyLkl0ZW1zfSBpdGVtc1xuICovXG5wcm90by5yZXZlYWwgPSBmdW5jdGlvbiggaXRlbXMgKSB7XG4gIHRoaXMuX2VtaXRDb21wbGV0ZU9uSXRlbXMoICdyZXZlYWwnLCBpdGVtcyApO1xuICBpZiAoICFpdGVtcyB8fCAhaXRlbXMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgc3RhZ2dlciA9IHRoaXMudXBkYXRlU3RhZ2dlcigpO1xuICBpdGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggaXRlbSwgaSApIHtcbiAgICBpdGVtLnN0YWdnZXIoIGkgKiBzdGFnZ2VyICk7XG4gICAgaXRlbS5yZXZlYWwoKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIGhpZGUgYSBjb2xsZWN0aW9uIG9mIGl0ZW1zXG4gKiBAcGFyYW0ge0FycmF5IG9mIE91dGxheWVyLkl0ZW1zfSBpdGVtc1xuICovXG5wcm90by5oaWRlID0gZnVuY3Rpb24oIGl0ZW1zICkge1xuICB0aGlzLl9lbWl0Q29tcGxldGVPbkl0ZW1zKCAnaGlkZScsIGl0ZW1zICk7XG4gIGlmICggIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBzdGFnZ2VyID0gdGhpcy51cGRhdGVTdGFnZ2VyKCk7XG4gIGl0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtLCBpICkge1xuICAgIGl0ZW0uc3RhZ2dlciggaSAqIHN0YWdnZXIgKTtcbiAgICBpdGVtLmhpZGUoKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIHJldmVhbCBpdGVtIGVsZW1lbnRzXG4gKiBAcGFyYW0ge0FycmF5fSwge0VsZW1lbnR9LCB7Tm9kZUxpc3R9IGl0ZW1zXG4gKi9cbnByb3RvLnJldmVhbEl0ZW1FbGVtZW50cyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIGl0ZW1zID0gdGhpcy5nZXRJdGVtcyggZWxlbXMgKTtcbiAgdGhpcy5yZXZlYWwoIGl0ZW1zICk7XG59O1xuXG4vKipcbiAqIGhpZGUgaXRlbSBlbGVtZW50c1xuICogQHBhcmFtIHtBcnJheX0sIHtFbGVtZW50fSwge05vZGVMaXN0fSBpdGVtc1xuICovXG5wcm90by5oaWRlSXRlbUVsZW1lbnRzID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICB2YXIgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCBlbGVtcyApO1xuICB0aGlzLmhpZGUoIGl0ZW1zICk7XG59O1xuXG4vKipcbiAqIGdldCBPdXRsYXllci5JdGVtLCBnaXZlbiBhbiBFbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7T3V0bGF5ZXIuSXRlbX0gaXRlbVxuICovXG5wcm90by5nZXRJdGVtID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIC8vIGxvb3AgdGhyb3VnaCBpdGVtcyB0byBnZXQgdGhlIG9uZSB0aGF0IG1hdGNoZXNcbiAgZm9yICggdmFyIGk9MDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xuICAgIGlmICggaXRlbS5lbGVtZW50ID09IGVsZW0gKSB7XG4gICAgICAvLyByZXR1cm4gaXRlbVxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIGdldCBjb2xsZWN0aW9uIG9mIE91dGxheWVyLkl0ZW1zLCBnaXZlbiBFbGVtZW50c1xuICogQHBhcmFtIHtBcnJheX0gZWxlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gaXRlbXMgLSBPdXRsYXllci5JdGVtc1xuICovXG5wcm90by5nZXRJdGVtcyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgZWxlbXMgPSB1dGlscy5tYWtlQXJyYXkoIGVsZW1zICk7XG4gIHZhciBpdGVtcyA9IFtdO1xuICBlbGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbSApIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbSggZWxlbSApO1xuICAgIGlmICggaXRlbSApIHtcbiAgICAgIGl0ZW1zLnB1c2goIGl0ZW0gKTtcbiAgICB9XG4gIH0sIHRoaXMgKTtcblxuICByZXR1cm4gaXRlbXM7XG59O1xuXG4vKipcbiAqIHJlbW92ZSBlbGVtZW50KHMpIGZyb20gaW5zdGFuY2UgYW5kIERPTVxuICogQHBhcmFtIHtBcnJheSBvciBOb2RlTGlzdCBvciBFbGVtZW50fSBlbGVtc1xuICovXG5wcm90by5yZW1vdmUgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHZhciByZW1vdmVJdGVtcyA9IHRoaXMuZ2V0SXRlbXMoIGVsZW1zICk7XG5cbiAgdGhpcy5fZW1pdENvbXBsZXRlT25JdGVtcyggJ3JlbW92ZScsIHJlbW92ZUl0ZW1zICk7XG5cbiAgLy8gYmFpbCBpZiBubyBpdGVtcyB0byByZW1vdmVcbiAgaWYgKCAhcmVtb3ZlSXRlbXMgfHwgIXJlbW92ZUl0ZW1zLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZW1vdmVJdGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggaXRlbSApIHtcbiAgICBpdGVtLnJlbW92ZSgpO1xuICAgIC8vIHJlbW92ZSBpdGVtIGZyb20gY29sbGVjdGlvblxuICAgIHV0aWxzLnJlbW92ZUZyb20oIHRoaXMuaXRlbXMsIGl0ZW0gKTtcbiAgfSwgdGhpcyApO1xufTtcblxuLy8gLS0tLS0gZGVzdHJveSAtLS0tLSAvL1xuXG4vLyByZW1vdmUgYW5kIGRpc2FibGUgT3V0bGF5ZXIgaW5zdGFuY2VcbnByb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgLy8gY2xlYW4gdXAgZHluYW1pYyBzdHlsZXNcbiAgdmFyIHN0eWxlID0gdGhpcy5lbGVtZW50LnN0eWxlO1xuICBzdHlsZS5oZWlnaHQgPSAnJztcbiAgc3R5bGUucG9zaXRpb24gPSAnJztcbiAgc3R5bGUud2lkdGggPSAnJztcbiAgLy8gZGVzdHJveSBpdGVtc1xuICB0aGlzLml0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIGl0ZW0uZGVzdHJveSgpO1xuICB9KTtcblxuICB0aGlzLnVuYmluZFJlc2l6ZSgpO1xuXG4gIHZhciBpZCA9IHRoaXMuZWxlbWVudC5vdXRsYXllckdVSUQ7XG4gIGRlbGV0ZSBpbnN0YW5jZXNbIGlkIF07IC8vIHJlbW92ZSByZWZlcmVuY2UgdG8gaW5zdGFuY2UgYnkgaWRcbiAgZGVsZXRlIHRoaXMuZWxlbWVudC5vdXRsYXllckdVSUQ7XG4gIC8vIHJlbW92ZSBkYXRhIGZvciBqUXVlcnlcbiAgaWYgKCBqUXVlcnkgKSB7XG4gICAgalF1ZXJ5LnJlbW92ZURhdGEoIHRoaXMuZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lc3BhY2UgKTtcbiAgfVxuXG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkYXRhIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogZ2V0IE91dGxheWVyIGluc3RhbmNlIGZyb20gZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtXG4gKiBAcmV0dXJucyB7T3V0bGF5ZXJ9XG4gKi9cbk91dGxheWVyLmRhdGEgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgZWxlbSA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggZWxlbSApO1xuICB2YXIgaWQgPSBlbGVtICYmIGVsZW0ub3V0bGF5ZXJHVUlEO1xuICByZXR1cm4gaWQgJiYgaW5zdGFuY2VzWyBpZCBdO1xufTtcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjcmVhdGUgT3V0bGF5ZXIgY2xhc3MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBjcmVhdGUgYSBsYXlvdXQgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqL1xuT3V0bGF5ZXIuY3JlYXRlID0gZnVuY3Rpb24oIG5hbWVzcGFjZSwgb3B0aW9ucyApIHtcbiAgLy8gc3ViLWNsYXNzIE91dGxheWVyXG4gIHZhciBMYXlvdXQgPSBzdWJjbGFzcyggT3V0bGF5ZXIgKTtcbiAgLy8gYXBwbHkgbmV3IG9wdGlvbnMgYW5kIGNvbXBhdE9wdGlvbnNcbiAgTGF5b3V0LmRlZmF1bHRzID0gdXRpbHMuZXh0ZW5kKCB7fSwgT3V0bGF5ZXIuZGVmYXVsdHMgKTtcbiAgdXRpbHMuZXh0ZW5kKCBMYXlvdXQuZGVmYXVsdHMsIG9wdGlvbnMgKTtcbiAgTGF5b3V0LmNvbXBhdE9wdGlvbnMgPSB1dGlscy5leHRlbmQoIHt9LCBPdXRsYXllci5jb21wYXRPcHRpb25zICApO1xuXG4gIExheW91dC5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5cbiAgTGF5b3V0LmRhdGEgPSBPdXRsYXllci5kYXRhO1xuXG4gIC8vIHN1Yi1jbGFzcyBJdGVtXG4gIExheW91dC5JdGVtID0gc3ViY2xhc3MoIEl0ZW0gKTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkZWNsYXJhdGl2ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIHV0aWxzLmh0bWxJbml0KCBMYXlvdXQsIG5hbWVzcGFjZSApO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGpRdWVyeSBicmlkZ2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvLyBtYWtlIGludG8galF1ZXJ5IHBsdWdpblxuICBpZiAoIGpRdWVyeSAmJiBqUXVlcnkuYnJpZGdldCApIHtcbiAgICBqUXVlcnkuYnJpZGdldCggbmFtZXNwYWNlLCBMYXlvdXQgKTtcbiAgfVxuXG4gIHJldHVybiBMYXlvdXQ7XG59O1xuXG5mdW5jdGlvbiBzdWJjbGFzcyggUGFyZW50ICkge1xuICBmdW5jdGlvbiBTdWJDbGFzcygpIHtcbiAgICBQYXJlbnQuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICB9XG5cbiAgU3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggUGFyZW50LnByb3RvdHlwZSApO1xuICBTdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdWJDbGFzcztcblxuICByZXR1cm4gU3ViQ2xhc3M7XG59XG5cbi8vIC0tLS0tIGhlbHBlcnMgLS0tLS0gLy9cblxuLy8gaG93IG1hbnkgbWlsbGlzZWNvbmRzIGFyZSBpbiBlYWNoIHVuaXRcbnZhciBtc1VuaXRzID0ge1xuICBtczogMSxcbiAgczogMTAwMFxufTtcblxuLy8gbXVuZ2UgdGltZS1saWtlIHBhcmFtZXRlciBpbnRvIG1pbGxpc2Vjb25kIG51bWJlclxuLy8gJzAuNHMnIC0+IDQwXG5mdW5jdGlvbiBnZXRNaWxsaXNlY29uZHMoIHRpbWUgKSB7XG4gIGlmICggdHlwZW9mIHRpbWUgPT0gJ251bWJlcicgKSB7XG4gICAgcmV0dXJuIHRpbWU7XG4gIH1cbiAgdmFyIG1hdGNoZXMgPSB0aW1lLm1hdGNoKCAvKF5cXGQqXFwuP1xcZCopKFxcdyopLyApO1xuICB2YXIgbnVtID0gbWF0Y2hlcyAmJiBtYXRjaGVzWzFdO1xuICB2YXIgdW5pdCA9IG1hdGNoZXMgJiYgbWF0Y2hlc1syXTtcbiAgaWYgKCAhbnVtLmxlbmd0aCApIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBudW0gPSBwYXJzZUZsb2F0KCBudW0gKTtcbiAgdmFyIG11bHQgPSBtc1VuaXRzWyB1bml0IF0gfHwgMTtcbiAgcmV0dXJuIG51bSAqIG11bHQ7XG59XG5cbi8vIC0tLS0tIGZpbiAtLS0tLSAvL1xuXG4vLyBiYWNrIGluIGdsb2JhbFxuT3V0bGF5ZXIuSXRlbSA9IEl0ZW07XG5cbnJldHVybiBPdXRsYXllcjtcblxufSkpO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMF0udXNlWzJdIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbMl0hLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXBwLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbMl0hLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQmxvY2tzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVsyXSEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9CbG9ja3Muc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb29raWUtZ3VhcmRpYW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Nvb2tpZS1ndWFyZGlhbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBpbXBvcnQgJy4vUGFnZUZsb3cuc2Nzcyc7XG5cbi8vIExpbmVhciBET01cbmNsYXNzIFBhZ2VGbG93IHtcbiAgICBjb25zdHJ1Y3RvcihwYWdlLCB7IC4uLnZhcmlhYmxlcyB9KSB7XG4gICAgICAgIHRoaXMuX3BhZ2VGbG93ID0gW107IC8vIFBhZ2VzXG4gICAgICAgIHRoaXMuX2VsZW1GbG93ID0gW107IC8vIEVsZW1lbnRzXG4gICAgICAgIHRoaXMuX2VsZW1GbG93UmVmID0gW107IC8vIEVsZW1lbnRzIFJlZmVyZW5jZVxuICAgICAgICB0aGlzLl9hcHAgPSBwYWdlOyAvLyBhc2lnbiBfYXBwXG4gICAgICAgIHRoaXMuX3ZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgIFxuXG4gICAgICAgIC8vIGlmKHJldGFpblZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAvLyAgICAgdGhpcy5fdmFyaWFibGVzID0gT2JqZWN0LmFzc2lnbih7fSwgdmFyaWFibGVzKTs7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBpZihyZXRhaW5WYWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAvLyAgICAgdGhpcy5fdmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgcmV0dXJuIFt0aGlzLCB2YXJpYWJsZXNdOyAvLyBSZXR1cm4gdGhpcywgYW5kIGFkZGl0aW9uYWwgcHJvcGVydGllc1xuICAgIH1cblxuICAgIC8vIEZ1bmN0aW9uIHRvIGZpbmQgUmVmIGluIEFycmF5LCB0ZWNobmljYWxseSBhIGNhY2hlIGZpbmRlclxuICAgIC8vIHRoYXQgZmluZHMgYW4gZXhpc3RpbmcgZWxlbWVudFxuICAgIF9maW5kUmVmKGlucHV0KSB7XG4gICAgICAgIC8vIENvbnZlcnQgaW5wdXQgdG8gc3RyaW5nIHRvIGhhbmRsZSBib3RoIG51bWJlciBhbmQgc3RyaW5nIGlucHV0c1xuICAgICAgICBjb25zdCBzZWFyY2hTdHJpbmcgPSBTdHJpbmcoaW5wdXQpO1xuICAgICAgICAvLyBVc2UgdGhlIGZpbmQgbWV0aG9kIHRvIHNlYXJjaCBmb3IgdGhlIG9iamVjdCB3aXRoIG1hdGNoaW5nIHJlZiBwcm9wZXJ0eVxuICAgICAgICBsZXQgcmVmID0gdGhpcy5fZWxlbUZsb3cuZmluZChvYmogPT4gU3RyaW5nKG9iai5yZWYpID09PSBzZWFyY2hTdHJpbmcpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlZj8uc2VsZWN0b3IgPz8gbnVsbDtcbiAgICB9XG5cbiAgICBfZmluZE9iamVjdEJ5UmVmID0gKHJlZlZhbHVlKSA9PiB7XG4gICAgICAgIC8vIFVzZSB0aGUgZmluZCBtZXRob2QgdG8gc2VhcmNoIGZvciB0aGUgb2JqZWN0IHdpdGggbWF0Y2hpbmcgcmVmIHByb3BlcnR5XG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtRmxvdy5maW5kKG9iaiA9PiBvYmpbJ0ByZWYnXSA9PT0gcmVmVmFsdWUpO1xuICAgIH07XG5cbiAgICBfZmluZFJlZk9iamVjdEJ5UmVmID0gKHJlZlZhbHVlKSA9PiB7XG4gICAgICAgIC8vIFVzZSB0aGUgZmluZCBtZXRob2QgdG8gc2VhcmNoIGZvciB0aGUgb2JqZWN0IHdpdGggbWF0Y2hpbmcgcmVmIHByb3BlcnR5XG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtRmxvd1JlZi5maW5kKG9iaiA9PiBvYmpbJ0ByZWYnXSA9PT0gcmVmVmFsdWUpO1xuICAgIH07XG5cblxuICAgIF9nZXRWYWx1ZShzdHIpICB7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSAve3tcXHMqKC4qPylcXHMqfX0vO1xuICAgICAgICBsZXQgcmVzdWx0ID0gc3RyO1xuXG4gICAgICAgIGNvbnN0IG1hdGNoID0gc3RyLm1hdGNoKHBhdHRlcm4pO1xuICAgICAgICBsZXQgdmFyaWFibGVWYWx1ZTtcblxuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IG1hdGNoWzFdLnRyaW0oKTtcbiAgICAgICAgICAgIHZhcmlhYmxlVmFsdWUgPSB0aGlzLl92YXJpYWJsZXNbdmFyaWFibGVOYW1lXTtcblxuICAgIFxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHN0ci5yZXBsYWNlKHBhdHRlcm4sIHZhcmlhYmxlVmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBudWxsOyAvLyBWYXJpYWJsZSBub3QgZm91bmRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHJlc3VsdDogcmVzdWx0LCB2YWx1ZTogdmFyaWFibGVWYWx1ZSB9O1xuICAgICAgfTtcbiAgICAgIFxuXG4gICAgLy8gSGFuZGxlIHRoZSBAdXBkYXRlIGF0dHJpYnV0ZVxuICAgIF9ldmVudExpc3RlbmVyID0gKHN0cmluZykgPT4ge1xuICAgICAgICAvLyBHZXQgUmVmXG4gICAgICAgIGNvbnN0IHJlZiA9IC9AcmVmPVwiKFteXCJdKilcIi87XG4gICAgICAgIGNvbnN0IHJlZm1hdGNoID0gc3RyaW5nLm1hdGNoKHJlZik7XG4gICAgICAgIGNvbnN0IHJlZlZhbHVlID0gcmVmbWF0Y2ggPyByZWZtYXRjaFsxXSA6IG51bGw7XG5cbiAgICAgICAgLy8gR2V0IFZhbHVlXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gL0B0cmlnZ2VyPVwiKFteXCJdKilcIi87XG4gICAgICAgIGNvbnN0IG1hdGNoID0gc3RyaW5nLm1hdGNoKHJlZ2V4KTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBtYXRjaCA/IG1hdGNoWzFdIDogbnVsbDtcblxuICAgICAgICAvLyBHZXQgUmVmXG4gICAgICAgIGNvbnN0IHJlbmRlclJlZiA9IC9AcmVuZGVyPVwiKFteXCJdKilcIi87XG4gICAgICAgIGNvbnN0IHJlbmRlclJlZm1hdGNoID0gc3RyaW5nLm1hdGNoKHJlbmRlclJlZik7XG4gICAgICAgIGNvbnN0IHJlbmRlclJlZlZhbHVlID0gcmVuZGVyUmVmbWF0Y2ggPyByZW5kZXJSZWZtYXRjaFsxXSA6IG51bGw7XG5cbiAgICAgICAgLy8gb24gUlVOIGV2ZW50XG4gICAgICAgIGlmKHZhbHVlID09PSAncnVuJykge1xuICAgICAgICAgICAgY2FsbGJhY2sodGhpcy5fZmluZE9iamVjdEJ5UmVmKHJlZlZhbHVlKT8uc2VsZWN0b3IpOyAvLyBSZW5kZXIgZXZlbnQgYnkgQHJlZlxuICAgICAgICB9IFxuXG4gICAgICAgIC8vIG9uIENMSUNLIGV2ZW50XG4gICAgICAgIGlmKHZhbHVlID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICB0aGlzLl9maW5kT2JqZWN0QnlSZWYocmVmVmFsdWUpPy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5fcmVuZGVyRXZlbnRMaXN0ZW5lcihyZWZWYWx1ZSk7ICB9KSAvLyBSZW5kZXIgZXZlbnQgYnkgQHJlZiArIEB0cmlnZ2VyXG4gICAgICAgIH1cblxuICAgICAgICAvLyBvbiBJTlBVVCBmaWVsZCAoa2V5IHVwKSBFdmVudFxuICAgICAgICBpZih2YWx1ZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgdGhpcy5fZmluZE9iamVjdEJ5UmVmKHJlZlZhbHVlKT8uc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7IHRoaXMuX3JlbmRlckV2ZW50TGlzdGVuZXIocmVmVmFsdWUpOyAgfSkgLy8gUmVuZGVyIGV2ZW50IGJ5IEByZWYgKyBAdHJpZ2dlclxuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgX3JlbmRlckV2ZW50TGlzdGVuZXIgPSAocmVmVmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGNhbGxiYWNrID0gdGhpcy5fZmluZFJlZk9iamVjdEJ5UmVmKHJlZlZhbHVlKT8uY2FsbGJhY2s7XG4gICAgICAgIGxldCBwb3N0Y2FsbGJhY2sgPSB0aGlzLl9maW5kUmVmT2JqZWN0QnlSZWYocmVmVmFsdWUpPy5wb3N0Y2FsbGJhY2s7XG4gICAgICAgIGxldCBkZWZhdWx0Y2FsbGJhY2sgPSB0aGlzLl9maW5kUmVmT2JqZWN0QnlSZWYocmVmVmFsdWUpPy5kZWZhdWx0Y2FsbGJhY2s7XG4gICAgICAgIGxldCBzdHJpbmcgPSB0aGlzLl9maW5kUmVmT2JqZWN0QnlSZWYocmVmVmFsdWUpLnN0cmluZztcbiAgICAgICAgLy8gQ2hhaW4gZm9yIFJlIFJlbmRlcmluZyBFbGVtZW50c1xuICAgICAgICBsZXQgbW9kaWZ5U3RhcnRWYWx1ZSA9IG51bGw7XG4gICAgICAgIGxldCBtb2RpZnlFbmRWYWx1ZSA9IG51bGw7XG5cbiAgICAgICAgaWYoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBjYWxsYmFjayh0aGlzLl9maW5kT2JqZWN0QnlSZWYocmVmVmFsdWUpPy5zZWxlY3Rvcik7XG4gICAgICAgICAgICBpZighcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vZGlmeVN0YXJ0VmFsdWUgPSByZXN1bHQ7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLl9odG1sQ2hhbmdlKHN0cmluZywgbW9kaWZ5U3RhcnRWYWx1ZSk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICBcbiAgICAgICAgaWYocG9zdGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gcG9zdGNhbGxiYWNrKHRoaXMuX2ZpbmRPYmplY3RCeVJlZihyZWZWYWx1ZSk/LnNlbGVjdG9yKTtcbiAgICAgICAgICAgIGlmKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vZGlmeUVuZFZhbHVlID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdXBkYXRlQXR0cmlidXRlKHN0cmluZywgbW9kaWZ5RW5kVmFsdWUpO1xuXG4gICAgICAgIFxuXG5cbiAgICBcbiAgICB9XG5cblxuICAgIC8vIFByb2Nlc3MgSFRNTCBjaGFuZ2VcbiAgICBfaHRtbENoYW5nZSA9IChzdHJpbmcsIGdldFZhbHVlKSA9PiB7IFxuICAgICAgICBjb25zdCByZWdleCA9IC9AcmVmPVwiKFteXCJdKilcIi87XG4gICAgICAgIGNvbnN0IG1hdGNoID0gc3RyaW5nLm1hdGNoKHJlZ2V4KTtcbiAgICAgICAgY29uc3QgcmVmVmFsdWUgPSBtYXRjaCA/IG1hdGNoWzFdIDogbnVsbDtcblxuICAgICAgICAvLyBpZiBubyBnZXRWYWx1ZSB0aGVuIGF0dGVtcHQgdG8gZ2V0IHRoZSBzdHJpbmdcbiAgICAgICAgaWYoIWdldFZhbHVlKSB7XG4gICAgICAgICAgICBnZXRWYWx1ZSA9ICB0aGlzLl9nZXRGdWxsU3RyaW5nKHN0cmluZykudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXR1cm4gaWYgZ2V0IHZhbHVlIGlzIHVuZGVmaW5kZSwgYXMgaXQnbGwgcHJpbnQgdW5kZWZpbmVkXG4gICAgICAgIGlmKGdldFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5fZ2V0RnVsbFN0cmluZyhzdHJpbmcpLnZhbHVlICE9PSB0aGlzLl9maW5kUmVmT2JqZWN0QnlSZWYocmVmVmFsdWUpPy52YWx1ZSkge1xuXG4gICAgICAgICAgICBpZih0aGlzLl9maW5kUmVmT2JqZWN0QnlSZWYocmVmVmFsdWUpPy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuX2ZpbmRSZWZPYmplY3RCeVJlZihyZWZWYWx1ZSkudmFsdWUgPSBmdWxsU3RyaW5nLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLl9maW5kT2JqZWN0QnlSZWYocmVmVmFsdWUpPy5zZWxlY3Rvcj8udGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZpbmRSZWZPYmplY3RCeVJlZihyZWZWYWx1ZSkudmFsdWUgPSAgZ2V0VmFsdWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmluZE9iamVjdEJ5UmVmKHJlZlZhbHVlKS5zZWxlY3Rvci52YWx1ZSA9IGdldFZhbHVlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmluZFJlZk9iamVjdEJ5UmVmKHJlZlZhbHVlKS52YWx1ZSA9IGdldFZhbHVlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZpbmRPYmplY3RCeVJlZihyZWZWYWx1ZSkuc2VsZWN0b3IuaW5uZXJIVE1MID0gZ2V0VmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcblxuXG4gICAgX2dldEZ1bGxTdHJpbmcgPSAoc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmKHRoaXMuX2dldFZhbHVlKHN0cmluZykpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRWYWx1ZShzdHJpbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuXG4gICAgLy8gVXBkYXRlIEF0dHJpYnV0ZSBAdXBkYXRlPVwiMSwyXCJcbiAgICBfdXBkYXRlQXR0cmlidXRlID0gKHN0cmluZywgbmV3VmFsdWUgPSBudWxsKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gL0B1cGRhdGU9XCIoW15cIl0qKVwiLztcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBzdHJpbmcubWF0Y2gocmVnZXgpO1xuICAgICAgICBjb25zdCByZWZWYWx1ZSA9IG1hdGNoID8gbWF0Y2hbMV0gOiBudWxsO1xuXG4gICAgICAgIGlmKHJlZlZhbHVlID09IG51bGwpIHsgcmV0dXJuIH1cbiAgICAgICAgbGV0IHVwZGF0ZUl0ZW1zID0gcmVmVmFsdWUuc3BsaXQoJywnKTtcblxuICAgICAgICB1cGRhdGVJdGVtcy5mb3JFYWNoKHJlZiA9PiB7XG4gICAgICAgICAgICB0aGlzLl9odG1sQ2hhbmdlQnlSZWYocmVmLCBuZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cblxuXG5cbiAgICBfaHRtbENoYW5nZUJ5UmVmID0gKHJlZlZhbHVlLCBuZXdWYWx1ZSkgPT4geyBcbiAgICAgICAgaWYoIW5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMuX2dldEZ1bGxTdHJpbmcoKS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCF0aGlzLl9maW5kT2JqZWN0QnlSZWYocmVmVmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuX2ZpbmRSZWZPYmplY3RCeVJlZihyZWZWYWx1ZSk/LnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLl9maW5kT2JqZWN0QnlSZWYocmVmVmFsdWUpPy5zZWxlY3Rvcj8udGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICAgICAgLy8gSW5wdXRcbiAgICAgICAgICAgICAgICB0aGlzLl9maW5kUmVmT2JqZWN0QnlSZWYocmVmVmFsdWUpLnZhbHVlID0gIG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZpbmRPYmplY3RCeVJlZihyZWZWYWx1ZSkuc2VsZWN0b3IudmFsdWUgPSAgbmV3VmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEhUTUxcbiAgICAgICAgICAgICAgICB0aGlzLl9maW5kUmVmT2JqZWN0QnlSZWYocmVmVmFsdWUpLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmluZE9iamVjdEJ5UmVmKHJlZlZhbHVlKS5zZWxlY3Rvci5pbm5lckhUTUwgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWZWYWx1ZSBkb2VzIG5vdCBleGlzdCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm9kZShzdHJpbmcsIGNhbGxiYWNrID0gbnVsbCwgcG9zdGNhbGxiYWNrID0gbnVsbCwgZGVmYXVsdGNhbGxiYWNrID0gbnVsbCkge1xuICAgICAgICAvLyBDb252ZXJ0IElubmVyIEhUTUxcbiAgICAgICAgLy8gQ29udmVydCB7eyB9fSBpbiB0byA8ZGl2PjwvZGl2PlxuICAgICAgICBsZXQgZnVsbFN0cmluZyA9IHRoaXMuX2dldEZ1bGxTdHJpbmcoc3RyaW5nKTtcblxuICAgICAgICAvLyBMb2FkIEhUTUwgY2hhbmdlc1xuICAgICAgICB0aGlzLl9odG1sQ2hhbmdlKHN0cmluZyk7XG5cbiAgICAgICAgLy8gSWYgc3RyaW5ncyBhbHJlYWR5IGV4aXN0IGFuZCBoYXZlbid0IGJlZW4gY2hhbmdlZCwgZG8gbm90IHJ1biBmdW5jdGlvblxuICAgICAgICAvLyBJRiBzdHJpbmcgbWF0Y2hlcyBhbnl0aGluZyBpbnNpZGUgb2YgIHRoaXMuX2VsZW1GbG93UmVmIHN0cmluZ1xuICAgICAgICBjb25zdCBub0NoYW5nZSA9ICgoKSA9PiB7IFxuICAgICAgICAgICAgY29uc3QgbWF0Y2hlZE9iamVjdCA9IHRoaXMuX2VsZW1GbG93UmVmLmZpbmQob2JqID0+IG9iai5zdHJpbmcgPT09IHN0cmluZyk7XG5cbiAgICAgICAgICAgIGlmKG1hdGNoZWRPYmplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZmluZE9iamVjdEJ5UmVmKG1hdGNoZWRPYmplY3RbJ0ByZWYnXSk/LnNlbGVjdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuXG4gICAgICAgIC8vIEV4dHJhY3QgU3RyaW5nIERhdGFcbiAgICAgICBjb25zdCBleHRyYWN0QXR0cmlidXRlcyA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gLyg/OmNsYXNzfGRhdGEtXFx3K3xAcmVmfEB0cmlnZ2VyfEB1cGRhdGUpPVwiKFteXCJdKilcIi9nO1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHN0cmluZy5tYXRjaChwYXR0ZXJuKSB8fCBbXTtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7fTtcblxuICAgICAgICAgICAgbWF0Y2hlcy5mb3JFYWNoKG1hdGNoID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWVdID0gbWF0Y2guc3BsaXQoJz0nKTtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdID0gYXR0cmlidXRlVmFsdWUucmVwbGFjZSgvXCIvZywgJycpOyAvLyBSZW1vdmUgc3Vycm91bmRpbmcgcXVvdGVzXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XG4gICAgICAgIH0pKCk7XG5cblxuICAgICAgICAvLyBFeHRyYWN0IFN0cmluZyBEYXRhXG4gICAgICAgIGNvbnN0IGV4dHJhY3RIVE1MID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRQYXR0ZXJuID0gLzxkaXZbXj5dKj4oW148XSopPFxcL2Rpdj4vO1xuICAgICAgICAgICAgY29uc3QgY29udGVudE1hdGNoID0gY29udGVudFBhdHRlcm4uZXhlYyhzdHJpbmcpO1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRNYXRjaCA/IGNvbnRlbnRNYXRjaFsxXS50cmltKCkgOiBudWxsO1xuXG4gICAgICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgICAgfSkoKTtcblxuXG4gICAgICAgIC8vIFJlcGxhY2UgT2JqZWN0cyB3aXRoIHVwZGF0ZWQgdmFsdWVzO1xuICAgICAgICBjb25zdCBmb3VuZE9iamVjdCA9IHRoaXMuX2ZpbmRPYmplY3RCeVJlZihleHRyYWN0QXR0cmlidXRlc1snQHJlZiddKTtcbiAgICAgICAgaWYgKGZvdW5kT2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCB7IHNlbGVjdG9yIH0gPSBmb3VuZE9iamVjdDtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNUb1NldCA9IHt9O1xuICAgICAgICBcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2F0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhleHRyYWN0QXR0cmlidXRlcykpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlTmFtZS5zdGFydHNXaXRoKCdAJykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGF0dHJpYnV0ZSB1c2luZyBzZXRBdHRyaWJ1dGVOb2RlTlMgZm9yIG5hbWVzIHN0YXJ0aW5nIHdpdGggJ0AnXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNUb1NldFthdHRyaWJ1dGVOYW1lLnNsaWNlKDEpXSA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBvdGhlciBhdHRyaWJ1dGUgbmFtZXMsIHVzZSBzZXRBdHRyaWJ1dGUgZGlyZWN0bHlcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlc1RvU2V0W2F0dHJpYnV0ZU5hbWVdID0gYXR0cmlidXRlVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC8vIFNldCBhbGwgYXR0cmlidXRlcyBhdCBvbmNlXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzVG9TZXQpLmZvckVhY2goKFtuYW1lLCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZihuYW1lID09PSAncmVmJyB8fCBuYW1lID09PSAndHJpZ2dlcicgfHwgbmFtZSA9PT0gJ3VwZGF0ZScpIHsgcmV0dXJuIH0gLy8gQXZvaWQgY2hhbmdpbmcgQHJlZiBvciBAdHJpZ2dlciB2YWx1ZXMgKFRoZXNlIGFyZSBzdGF0aWMpXG4gICAgICAgICAgICAgICAgc2VsZWN0b3Iuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0b3I7IFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQnVsZCBIVE1MIG91dCBvZiBzdHJpbmdcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBmdWxsU3RyaW5nLnJlc3VsdC50cmltKCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gdGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkO1xuXG4gICAgXG4gICBcbiAgICAgICAgaWYoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHNlbGVjdG9yLmdldEF0dHJpYnV0ZSgnQHRyaWdnZXInKVxuICAgICAgICAgICAgc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihzZWxlY3Rvci5nZXRBdHRyaWJ1dGUoJ0BhY3Rpb24nKSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrPy4obnVsbCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLy8gQWRkIFJlZmVyZW5jZXNcbiAgICAgICAgdGhpcy5fZWxlbUZsb3cucHVzaCh7ICdAcmVmJzogc2VsZWN0b3IuZ2V0QXR0cmlidXRlKCdAcmVmJyksIHNlbGVjdG9yOiBzZWxlY3RvciwgdXBkYXRlOiBudWxsIH0pOyAvLyB1cGRhdGUgZW5xdWV1ZXMgdXBkYXRlXG5cbiAgICAgICAgdGhpcy5fZWxlbUZsb3dSZWYucHVzaCh7IFxuICAgICAgICAgICAgJ0ByZWYnOiBzZWxlY3Rvci5nZXRBdHRyaWJ1dGUoJ0ByZWYnKSwgXG4gICAgICAgICAgICAnQHRyaWdnZXInIDogc2VsZWN0b3IuZ2V0QXR0cmlidXRlKCdAdHJpZ2dlcicpLCBcbiAgICAgICAgICAgICdAdXBkYXRlJzogc2VsZWN0b3IuZ2V0QXR0cmlidXRlKCdAdXBkYXRlJykgPz8gbnVsbCwgXG4gICAgICAgICAgICAnQHJlbmRlcic6IHNlbGVjdG9yLmdldEF0dHJpYnV0ZSgnQHJlbmRlcicpID8/IG51bGwsIFxuICAgICAgICAgICAgJ0Bpbml0aWFsJzogc2VsZWN0b3IuZ2V0QXR0cmlidXRlKCdAaW5pdGlhbCcpID8/IG51bGwsIFxuICAgICAgICAgICAgJ0BwYXJlbnQnOiBzZWxlY3Rvci5nZXRBdHRyaWJ1dGUoJ0BwYXJlbnQnKSA/PyBudWxsLCBcbiAgICAgICAgICAgIGluZGV4OiB0aGlzLl9lbGVtRmxvdy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgY2xhc3M6IHNlbGVjdG9yLmNsYXNzTGlzdCwgXG4gICAgICAgICAgICBpZDogc2VsZWN0b3IuZ2V0QXR0cmlidXRlKCdpZCcpLFxuICAgICAgICAgICAgZGF0YTogc2VsZWN0b3IuZGF0YXNldCwgXG4gICAgICAgICAgICBzdHJpbmc6IHN0cmluZyA/PyAnJyxcbiAgICAgICAgICAgIHZhbHVlIDogZnVsbFN0cmluZy52YWx1ZSA/PyAnJyxcbiAgICAgICAgICAgIHVwZGF0ZTogIHNlbGVjdG9yLmdldEF0dHJpYnV0ZSgnQGxvYWQnKSA/PyBudWxsLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrID8/IG51bGwsXG4gICAgICAgICAgICBwb3N0Y2FsbGJhY2s6IHBvc3RjYWxsYmFjayA/PyBudWxsLFxuICAgICAgICAgICAgZGVmYXVsdGNhbGxiYWNrOiBkZWZhdWx0Y2FsbGJhY2sgPz8gbnVsbFxuICAgICAgICB9KTsgLy8gYWRkIFJlZmVyZW5jZSBWYWx1ZSB4YW5kIEluZGV4XG5cbiAgIFxuICAgICAgICAvLyBUYXJnZXQgTG9jYXRpb24gKFJFTkRFUiBJTklUSUFMIEVMRU1FTlQpO1xuICAgICAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9hcHApO1xuXG4gICAgICAgIGlmKHRoaXMuX2ZpbmRPYmplY3RCeVJlZihzZWxlY3Rvci5nZXRBdHRyaWJ1dGUoJ0BwYXJlbnQnKSk/LnNlbGVjdG9yKSB7XG4gICAgICAgICAgICBwYXJlbnQgPSB0aGlzLl9maW5kT2JqZWN0QnlSZWYoc2VsZWN0b3IuZ2V0QXR0cmlidXRlKCdAcGFyZW50JykpPy5zZWxlY3RvclxuICAgICAgICB9IGVsc2UgaWYoc2VsZWN0b3IuZ2V0QXR0cmlidXRlKCdAcGFyZW50JykpIHtcbiAgICAgICAgICAgIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IuZ2V0QXR0cmlidXRlKCdAcGFyZW50JykpXG4gICAgICAgIH0gXG5cbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHNlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcihzdHJpbmcpO1xuXG5cbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yID8/IG51bGw7XG4gICAgfVxuXG4gICAgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9lbGVtRmxvd1JlZi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYoaXRlbVsnQHVwZGF0ZSddICYmIGl0ZW1bJ0Bsb2FkJ10gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYoaXRlbVsnQHRyaWdnZXInXSAhPT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJFdmVudExpc3RlbmVyKGl0ZW1bJ0ByZWYnXSk7IC8vIFRyaWdnZXIgUmVmZXJlbmNlZCBJdGVtc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoaXRlbVsnQHRyaWdnZXInXSA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuX3JlbmRlckV2ZW50TGlzdGVuZXIoaXRlbVsnQHJlZiddKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoaXRlbVsnQHJlbmRlciddKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyRXZlbnRMaXN0ZW5lcihpdGVtWydAcmVuZGVyJ10pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZW5kZXIgSW5pdGlhbCBWYWx1ZVxuICAgICAgICAgICAgaWYoaXRlbVsnZGVmYXVsdGNhbGxiYWNrJ10pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncnVuJyk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5faHRtbENoYW5nZUJ5UmVmKGl0ZW1bJ0ByZWYnXSwgaXRlbVsnQGluaXRpYWwnXSk7XG5cbiAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHZhcmlhYmxlcyB0byBiZSB0aGUgdmFsdWUgc3BlY2lmaWVkIGluICdAaW5pdGlhbCdcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdmFyaWFibGVzIHRvIGJlIHRoZSB2YWx1ZSBzcGVjaWZpZWQgaW4gJ0Bpbml0aWFsJ1xuICAgICAgICAgICAgICAgIC8vICBcbiAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBIVE1MIHVzaW5nIGluaXRpYWwgdmFyaWFibGVzXG5cbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBpdGVtWydkZWZhdWx0Y2FsbGJhY2snXSgpO1xuXG4gICAgICAgICAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtWydAcmVmJ10pO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaGFzIFZhTHUnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAvLyBJc3N1ZSBydW5uaW5nIHRoaXMgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faHRtbENoYW5nZUJ5UmVmKGl0ZW1bJ0ByZWYnXSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgIH1cbn1cblxuXG5jb25zdCBIVE1MZmxvdyA9IChfLCBvYmosIGZ1bmN0aW9ucywgaWQpID0+IHtcbiAgICBsZXQgaXRlbSA9IG9iai5pdGVtO1xuXG4gICBcblxuICAgIC8vIERlZmluZSBWYWx1ZXNcbiAgICBsZXQgb2JqZWN0ID0ge1xuICAgICAgICAnQHRyaWdnZXInOiBpdGVtLmdldEF0dHJpYnV0ZSgnQHRyaWdnZXInKSA/PyBudWxsLFxuICAgICAgICAnQHVwZGF0ZSc6ICBpdGVtLmdldEF0dHJpYnV0ZSgnQHVwZGF0ZScpLnNwbGl0KCcsJykubWFwKG51bSA9PiBpZCArIG51bSkuam9pbignLCcpID8/IG51bGwsXG4gICAgICAgICdAcmVmJzogIGl0ZW0uZ2V0QXR0cmlidXRlKCdAcmVmJykuc3BsaXQoJywnKS5tYXAobnVtID0+IGlkICsgbnVtKS5qb2luKCcsJykgPz8gbnVsbCxcbiAgICAgICAgJ0BwYXJlbnQnOiBpdGVtLmdldEF0dHJpYnV0ZSgnQHBhcmVudCcpID8/IG51bGwsXG4gICAgICAgIGNsYXNzOiBpdGVtLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA/PyBudWxsLFxuICAgICAgICBpZDogIGl0ZW0uZ2V0QXR0cmlidXRlKCdpZCcpID8/IG51bGwsXG4gICAgICAgIHN0eWxlOiAgaXRlbS5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykgPz8gbnVsbCxcbiAgICAgICAgdHlwZSA6IGl0ZW0udGFnTmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSA/PyBudWxsLFxuICAgIH1cblxuICAgIGNvbnN0IG5vQ2FsbGJhY2sgPSAoKSA9PiB7fSAvLyBDb3ZlciB0aGUgc2NlbmFyaW8gdGhhdCBub2NhbGxiYWNrIGV4aXN0c1xuXG4gICAgLy8gRGVmaW5lIGNhbGxiYWNrc1xuICAgIGxldCBjYWxsYmFja3MgPSB7XG4gICAgICAgIGNhbGxiYWNrOiBpdGVtLmdldEF0dHJpYnV0ZSgnY2FsbGJhY2snKSA/IGZ1bmN0aW9uc1tpdGVtLmdldEF0dHJpYnV0ZSgnY2FsbGJhY2snKV0gOiBub0NhbGxiYWNrLFxuICAgICAgICBwb3N0Y2FsbGJhY2s6IGl0ZW0uZ2V0QXR0cmlidXRlKCdwb3N0Y2FsbGJhY2snKSA/IGZ1bmN0aW9uc1tpdGVtLmdldEF0dHJpYnV0ZSgncG9zdGNhbGxiYWNrJyldIDogbm9DYWxsYmFjayxcbiAgICAgICAgZGVmYXVsdGNhbGxiYWNrOiBpdGVtLmdldEF0dHJpYnV0ZSgnZGVmYXVsdGNhbGxiYWNrJykgPyBmdW5jdGlvbnNbaXRlbS5nZXRBdHRyaWJ1dGUoJ2RlZmF1bHRjYWxsYmFjaycpXSA6IG5vQ2FsbGJhY2tcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYWxsIEl0ZW1zXG4gICAgaXRlbS5yZW1vdmUoKTtcblxuICAgIC8vIEZpbHRlciBvdXQgcHJvcGVydGllcyB3aXRoIG51bGwgdmFsdWVzXG4gICAgb2JqZWN0ID0gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKG9iamVjdCkuZmlsdGVyKChba2V5LCB2YWx1ZV0pID0+IHZhbHVlICE9PSBudWxsKSk7XG5cbiAgXG4gICAgLy8gQ3JlYXRlIG5ldyBOb2RlXG4gICAgaWYob2JqZWN0LnR5cGUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgXy5ub2RlKGA8JHtvYmplY3QudHlwZX0gJHtPYmplY3QuZW50cmllcyhvYmplY3QpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBgJHtrZXl9PVwiJHt2YWx1ZX1cImApLmpvaW4oJyAnKX0gdmFsdWU9XCIkeyBpdGVtLnZhbHVlIH1cIj5gLFxuICAgICAgICBjYWxsYmFja3MuY2FsbGJhY2ssXG4gICAgICAgIGNhbGxiYWNrcy5wb3N0Y2FsbGJhY2ssIFxuICAgICAgICBjYWxsYmFja3MuZGVmYXVsdGNhbGxiYWNrKTsgLy8gTmVlZCB0byB3cml0ZSBjYWxsYmFja3MuZGVmYXVsdHMgaGVyZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIF8ubm9kZShgPCR7b2JqZWN0LnR5cGV9ICR7T2JqZWN0LmVudHJpZXMob2JqZWN0KS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gYCR7a2V5fT1cIiR7dmFsdWV9XCJgKS5qb2luKCcgJyl9PiR7IGl0ZW0uaW5uZXJIVE1MIH08LyR7b2JqZWN0LnR5cGV9PmAsXG4gICAgICAgICAgICBjYWxsYmFja3MuY2FsbGJhY2ssXG4gICAgICAgICAgICBjYWxsYmFja3MucG9zdGNhbGxiYWNrLFxuICAgICAgICAgICAgY2FsbGJhY2tzLmRlZmF1bHRjYWxsYmFjayk7ICAvLyBOZWVkIHRvIHdyaXRlIGNhbGxiYWNrcy5kZWZhdWx0cyBoZXJlXG4gICAgfVxufVxuXG5cblxuLy8gY29uc3QgcmVxdWVzdFF1ZXVlID0gbmV3IFJlcXVlc3RRdWV1ZSgpO1xuLy8gcmVxdWVzdFF1ZXVlLmVucXVldWUodXJsMSwgdGhpcy5fcmVuZGVyUGFnZS5iaW5kKHRoaXMpKTtcbi8vIHJlcXVlc3RRdWV1ZS5lbnF1ZXVlKHVybDIsIHRoaXMuX3JlbmRlclBhZ2UuYmluZCh0aGlzKSk7XG4vLyByZXF1ZXN0UXVldWUuY2FuY2VsQWxsKCk7XG5cbmNsYXNzIFJlcXVlc3RRdWV1ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5hYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZW5xdWV1ZSh1cmwsIHJlbmRlckZ1bmN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB7IHVybDogdXJsLCByZW5kZXJGdW5jdGlvbiB9O1xuXG4gICAgICAgIHRoaXMucXVldWUucHVzaChyZXF1ZXN0KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wcm9jZXNzUXVldWUoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHByb2Nlc3NpbmcgcmVxdWVzdCBxdWV1ZTonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBwcm9jZXNzUXVldWUoKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLnF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsLCByZW5kZXJGdW5jdGlvbiB9ID0gdGhpcy5xdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgY29uc3QgeyBzaWduYWwgfSA9IHRoaXMuYWJvcnRDb250cm9sbGVyO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IHNpZ25hbCB9KTtcblxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggZGF0YSBmcm9tICR7dXJsfS4gU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpO1xuICAgICAgICAgICAgICAgIC8vIGlmICghY29udGVudFR5cGUgfHwgIWNvbnRlbnRUeXBlLmluY2x1ZGVzKCdhcHBsaWNhdGlvbi9qc29uJykpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGNvbnRlbnQgdHlwZSByZWNlaXZlZCBmcm9tICR7dXJsfS4gRXhwZWN0ZWQgSlNPTi5gKTtcbiAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhIHx8IE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHZhbGlkIGRhdGEgcmVjZWl2ZWQgZnJvbSAke3VybH1gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZW5kZXJGdW5jdGlvbihkYXRhKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hpbGUgZmV0Y2hpbmcgb3IgcmVuZGVyaW5nIGRhdGEgZnJvbSAke3VybH06YCwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FuY2VsQWxsKCkge1xuICAgICAgICB0aGlzLmFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgICB0aGlzLmFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgIH1cbn1cblxuXG5cbi8vIGNvbnN0IGR5bmFtaWNQYWdlID0gbmV3IER5bmFtaWNQYWdlKHsgc291cmNlOiAnLnNlbGVjdG9yJywgdGFyZ2V0OiAnLnNlbGVjdG9yJyB9LCByZW5kZXJMaXN0KSk7XG4vLyBjb25zIGR5bmFtaWNQYWdlLl9tYWtlUmVxdWVzdCh1cmwpO1xuXG5jbGFzcyBEeW5hbWljUGFnZSB7XG4gICAgY29uc3RydWN0b3Iob2JqLCByZW5kZXJMaXN0KSB7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBbXTtcbiAgICAgICAgdGhpcy51cmwgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBvYmouc291cmNlO1xuICAgICAgICB0aGlzLnRhcmdldCA9IG9iai50YXJnZXQ7XG4gICAgICAgIHRoaXMucmVxdWVzdFF1ZXVlID0gbmV3IFJlcXVlc3RRdWV1ZSgpO1xuICAgICAgICB0aGlzLnJlbmRlckxpc3QgPSByZW5kZXJMaXN0O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdQYWdlRmxvdyAxJyk7XG4gICAgICAgIFxuICAgICAgICB3aW5kb3cub25wb3BzdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gSGFuZGxlIHBhZ2UgcmVzdG9yZS5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoYXNoY2hhbmdlIDEnKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFkZHMgb3IgdXBkYXRlcyBhIHBhZ2UgaW4gdGhlIGNhY2hlXG4gICAgdXBzZXJ0UGFnZSh1cmwsIGRhdGEpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmNhY2hlLmZpbmRJbmRleChwYWdlID0+IHBhZ2UudXJsID09PSB1cmwpO1xuXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlW2luZGV4XS5kYXRhID0gZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHVzaCh7IHVybCwgZGF0YSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHJpZXZlcyBhIHBhZ2UgZnJvbSB0aGUgY2FjaGVcbiAgICBnZXRQYWdlKHVybCkgeyByZXR1cm4gdGhpcy5jYWNoZS5maW5kKHBhZ2UgPT4gcGFnZS51cmwgPT09IHVybCk7IH1cblxuICAgIC8vIENoZWNrcyBpZiBhIHBhZ2UgZXhpc3RzIGluIHRoZSBjYWNoZVxuICAgIGV4aXN0cyh1cmwpIHsgcmV0dXJuIHRoaXMuY2FjaGUuc29tZShwYWdlID0+IHBhZ2UudXJsID09PSB1cmwgJiYgcGFnZS5kYXRhICE9PSBudWxsICYmIHBhZ2UuZGF0YSAhPT0gdW5kZWZpbmVkICYmIHBhZ2UuZGF0YSAhPT0gJycpOyB9XG4gICAgXG4gICAgLy8gUmVtb3ZlcyBhIHBhZ2UgZnJvbSB0aGUgY2FjaGVcbiAgICByZW1vdmVQYWdlKHVybCkgeyB0aGlzLmNhY2hlID0gdGhpcy5jYWNoZS5maWx0ZXIocGFnZSA9PiBwYWdlLnVybCAhPT0gdXJsKTsgfVxuXG4gICAgLy8gQ2xlYXJzIHRoZSBlbnRpcmUgY2FjaGVcbiAgICBjbGVhcigpIHsgdGhpcy5jYWNoZSA9IFtdOyB9XG4gICAgZ2V0QWxsUGFnZXMoKSB7IHJldHVybiB0aGlzLmNhY2hlOyB9XG5cbiAgICBydW5DYWxsYmFja3MgPSAoY2FsbGJhY2tzLCBjYWxsYmFja0FyZ3MpID0+IHtcbiAgICBcbiAgICAgICAgY2FsbGJhY2tzLmZvckVhY2goY2FsbGJhY2sgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soY2FsbGJhY2tBcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgXG5cbiAgICAvLyBSZW5kZXIgdGhlIG5ldyBQYWdlIERhdGFcbiAgICBfcmVuZGVyUGFnZShkYXRhKSB7XG4gICAgICAgXG4gICAgXG4gICAgICAgXG4gICAgfVxuXG4gICAgLy8gUmVxdWVzdCBQYWdlIGZyb20gVVJMIChIVFRQIFJFUVVFU1QpXG4gICAgX21ha2VSZXF1ZXN0KHVybCkge1xuICAgICAgICB0aGlzLnJlcXVlc3RRdWV1ZS5lbnF1ZXVlKHVybCwgdGhpcy5fcHJvY2Vzc1JlcXVlc3QuYmluZCh0aGlzKSApO1xuICAgIH1cblxuICAgIF9wcm9jZXNzUmVxdWVzdChkYXRhKSB7XG5cbiAgICAgICAgLy8gaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgIC8vICAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy50YXJnZXQpLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKTtcbiAgICAgICAgLy8gICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIC8vICAgICAgICAgY2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy50YXJnZXQpLmlubmVySFRNTD0nJztcbiAgICAgICAgXG4gICAgICAgIGxldCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIGxldCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGRhdGEsIFwidGV4dC9odG1sXCIpO1xuICAgICAgICBsZXQgc291cmNlRWxlbWVudCA9IGRvYy5xdWVyeVNlbGVjdG9yKHRoaXMuc291cmNlKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChzb3VyY2VFbGVtZW50KSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMudGFyZ2V0KS5hcHBlbmRDaGlsZChzb3VyY2VFbGVtZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiU291cmNlIGVsZW1lbnQgbm90IGZvdW5kXCIpO1xuICAgICAgICB9XG4gICBcbiAgICAgICAgdGhpcy5ydW5DYWxsYmFja3ModGhpcy5yZW5kZXJMaXN0KTtcbiAgICAgICAgXG4gICAgICAgXG4gICAgXG4gICAgICBcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbn1cblxuLy8gVGhpcyBpcyBob3cgdG8gdXNlIERhdGFzZXRIYW5kbGVyXG4vLyBjb25zdCBkYXRhc2V0SGFuZGxlciA9IG5ldyBEYXRhc2V0SGFuZGxlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkYXRhc2V0JykpO1xuLy8gY29uc3QgZGF0YXNldCA9IGRhdGFzZXRIYW5kbGVyLnBhcnNlRGF0YSgpO1xuXG5jbGFzcyBEYXRhc2V0SGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IoZGF0YXNldEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5kYXRhc2V0RWxlbWVudCA9IGRhdGFzZXRFbGVtZW50O1xuICAgICAgICB0aGlzLmRhdGFNYXAgPSB0aGlzLnBhcnNlRGF0YSgpO1xuICAgIH1cblxuICAgIHBhcnNlRGF0YSgpIHtcbiAgICAgICAgY29uc3QgeyBkYXRhc2V0RWxlbWVudCB9ID0gdGhpcztcbiAgICAgICAgXG4gICAgICAgIGlmICghZGF0YXNldEVsZW1lbnQgfHwgIWRhdGFzZXRFbGVtZW50LmRhdGFzZXQuc2V0KSByZXR1cm4gbnVsbDtcblxuICAgICAgICBjb25zdCB7IHNldDogZGF0YXNldE5hbWUgfSA9IGRhdGFzZXRFbGVtZW50LmRhdGFzZXQ7XG4gICAgICAgIGNvbnN0IGRhdGFFbGVtZW50cyA9IEFycmF5LmZyb20oZGF0YXNldEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGF0YScpKTtcblxuICAgICAgICBpZiAoIWRhdGFFbGVtZW50cy5sZW5ndGgpIHJldHVybiBudWxsO1xuXG4gICAgICAgIGNvbnN0IGRhdGFPYmplY3QgPSBkYXRhRWxlbWVudHMucmVkdWNlKChhY2MsIGRhdGFFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGNvbGxlY3Rpb246IHZhcmlhYmxlTmFtZSwgdmFsdWUgfSA9IGRhdGFFbGVtZW50LmRhdGFzZXQ7XG4gICAgICAgICAgICBhY2NbdmFyaWFibGVOYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwge30pO1xuXG4gICAgICAgIHJldHVybiBuZXcgTWFwKFtbZGF0YXNldE5hbWUsIGRhdGFPYmplY3RdXSk7XG4gICAgfVxuXG4gICAgZ2V0VmFyKHZhcmlhYmxlTmFtZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5kYXRhTWFwKSByZXR1cm4gZGVmYXVsdFZhbHVlO1xuXG4gICAgICAgIGNvbnN0IGRhdGFzZXRPYmplY3QgPSB0aGlzLmRhdGFNYXAuZ2V0KHRoaXMuZGF0YXNldEVsZW1lbnQuZGF0YXNldC5zZXQpO1xuICAgICAgICBpZiAoIWRhdGFzZXRPYmplY3QpIHJldHVybiBkZWZhdWx0VmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIGRhdGFzZXRPYmplY3RbdmFyaWFibGVOYW1lXSAhPT0gdW5kZWZpbmVkID8gZGF0YXNldE9iamVjdFt2YXJpYWJsZU5hbWVdIDogZGVmYXVsdFZhbHVlO1xuICAgIH1cbn1cblxuXG5jb25zdCB1dWlkID0gKCkgPT4gKFsxZTNdKy0xZTIrLTRlMistOGUyKy0xZTEyKS5yZXBsYWNlKC9bMDE4XS9nLCBjID0+IChjIF4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSgxKSlbMF0gJiAxNSA+PiBjIC8gNCkudG9TdHJpbmcoMTYpKTtcblxuXG4vLyBleHBvcnQgeyBQYWdlRmxvdywgSFRNTGZsb3csIER5bmFtaWNQYWdlLCB1dWlkIH07XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgUGFnZUZsb3csXG4gICAgSFRNTGZsb3csXG4gICAgRHluYW1pY1BhZ2UsXG4gICAgdXVpZCxcbiAgICBEYXRhc2V0SGFuZGxlclxufVxuIiwiLy8gQ29weXJpZ2h0IENocmlzdG9waGVyIE5hdGhhbmllbCAyMDI0LXByZXNlbnRcbi8vIEZ1bGwgbGljZW5zZSBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZVxuXG5pbXBvcnQgJy4vY29va2llLWd1YXJkaWFuLnNjc3MnO1xuXG4vLyBSZW1vdmUgU2NyaXB0IGJ5IFNvdXJjZVxuY29uc3QgcmVtb3ZlU2NyaXB0c0J5U291cmNlID0gKHNvdXJjZVN1YnN0cmluZykgPT4ge1xuICAgIGxldCBzY3JpcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0W3NyYyo9XCInICsgc291cmNlU3Vic3RyaW5nICsgJ1wiXScpO1xuICAgIHNjcmlwdHMuZm9yRWFjaChmdW5jdGlvbihzY3JpcHQpIHtcbiAgICAgICAgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cblxuLy8gQUxMIEV4dGVybmFsIFNjcmlwdHNcbmNvbnN0IHJlbW92ZUV4dGVybmFsU2NyaXB0cyA9ICgpID0+IHtcbiAgICBsZXQgY3VycmVudERvbWFpbiA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcbiAgICBsZXQgc2NyaXB0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdFtzcmNdJyk7XG4gICAgc2NyaXB0cy5mb3JFYWNoKGZ1bmN0aW9uKHNjcmlwdCkge1xuICAgICAgICB2YXIgc2NyaXB0RG9tYWluID0gbmV3IFVSTChzY3JpcHQuc3JjKS5ob3N0bmFtZTtcbiAgICAgICAgaWYgKHNjcmlwdERvbWFpbiAhPT0gY3VycmVudERvbWFpbikge1xuICAgICAgICAgICAgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cbi8vIFJlbmRlciBIVE1MIGVsZW1lbnQgdGhhdCBpcyByZXBsYWNhYmxlXG5jb25zdCB0b0hUTUwgPSAoaHRtbFN0cmluZywgdGFyZ2V0SWQsIHBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5KSA9PiB7XG4gICAgY29uc3QgdGVtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZW1wRWxlbWVudC5pbm5lckhUTUwgPSBodG1sU3RyaW5nLnRyaW0oKTtcbiAgICBjb25zdCBodG1sRWxlbWVudCA9IHRlbXBFbGVtZW50LmZpcnN0Q2hpbGQ7XG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdXVpZD1cIiR7dGFyZ2V0SWR9XCJdYCk7XG4gICAgdGVtcEVsZW1lbnQuY2hpbGROb2Rlc1swXS5kYXRhc2V0LnV1aWQgPSB0YXJnZXRJZDtcbiAgICBpZiAodGFyZ2V0RWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0RWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChodG1sRWxlbWVudCwgdGFyZ2V0RWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoaHRtbEVsZW1lbnQpO1xuICAgIH1cbn1cbiBcblxuXG4vLyBDb29raWVHdWFyZGlhbih7XG4vLyAgICAgcG9saWN5TGluazogJy9jb29raWUtcG9saWN5Jyxcbi8vICAgICBzdG9wQWxsQ29va2llczogdHJ1ZSxcbi8vICAgICBkZXNjOiBgPHA+VGhpcyB3ZWJzaXRlIHVzZXMgY29va2llcy4uLjwvYT48L3A+YCxcbi8vICAgICB1bmNsYXNzaWZpZWRUZXh0OiAnVW5jbGFzc2lmaWVkIGNvb2tpZXMgYXJlIGNvb2tpZXMuLi4nLFxuLy8gICAgIG1hcmtldGluZ1RleHQ6ICdNYXJrZXRpbmcgY29va2llcyBhcmUgdXNlZC4uLicsXG4vLyAgICAgc3RhdGlzdGljc1RleHQ6ICdTdGF0aXN0aWNhbCBjb29raWVzIGhlbHAuLi4nLFxuLy8gICAgIHByZWZlcmVuY2VzVGV4dDogJ1ByZWZlcmVuY2UgY29va2llcyBlbmFibGUuLi4nLFxuLy8gICAgIHJlcXVpcmVkVGV4dDogJ1JlcXVpcmVkIGNvb2tpZXMgaGVscC4uLicsXG4vLyAgICAgYWNjZXB0VGV4dDogJ0FjY2VwdCBBbGwnLFxuLy8gICAgIGRlY2xpbmVUZXh0OiAnRGVueScsXG4vLyAgICAgcHJlZmVyZW5jZXM6ICgpID0+IHtcbi8vICAgICAgICAgLy8gUHJlZmVyZW5jZXMgQ2FsbGJhY2tcbi8vICAgICB9LFxuLy8gICAgIHN0YXRpc3RpY3M6ICgpID0+IHtcbi8vICAgICAgICAgLy8gU3RhdGlzdGljcyBDYWxsYmFja1xuLy8gICAgIH0sXG4vLyAgICAgbWFya2V0aW5nOiAoKSA9PiB7XG4vLyAgICAgICAgIC8vIE1hcmtldGluZyBDYWxsYmFja1xuLy8gICAgIH0sXG4vLyAgICAgdW5jbGFzc2lmaWVkOiAoKSA9PiB7XG4vLyAgICAgICAgIC8vIFVuY2xhc3NpZmllZCBDYWxsYmFja1xuLy8gICAgIH1cbi8vIH0pO1xuXG4vLyBNYWluIENvb2tpZSBHdWFyZGlhbiBTY3JpcHRzXG5jbGFzcyBDb29raWVHdWFyZGlhbiB7XG5cbiAgICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICAgICAgdGhpcy5wb2xpY3lMaW5rID0gb2JqPy5wb2xpY3lMaW5rID8/ICcvY29va2llLXBvbGljeSc7XG4gICAgICAgIHRoaXMub3BlbiA9IHRoaXMuZ2V0TG9jYWxTdG9yYWdlKCdjb29raWUtZ3VhcmRpYW4nKSA/PyB0cnVlO1xuICAgICAgICB0aGlzLnJlcXVpcmVkID0gdGhpcy5nZXRMb2NhbFN0b3JhZ2UoJ2Nvb2tpZS1ndWFyZGlhbi1yZXF1aXJlZCcpID8/IGZhbHNlO1xuICAgICAgICB0aGlzLnByZWZlcmVuY2VzID0gdGhpcy5nZXRMb2NhbFN0b3JhZ2UoJ2Nvb2tpZS1ndWFyZGlhbi1wcmVmZXJlbmNlcycpID8/IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXRpc3RpY3MgPSB0aGlzLmdldExvY2FsU3RvcmFnZSgnY29va2llLWd1YXJkaWFuLXN0YXRpc3RpY3MnKSA/PyBmYWxzZTtcbiAgICAgICAgdGhpcy5tYXJrZXRpbmcgPSAgdGhpcy5nZXRMb2NhbFN0b3JhZ2UoJ2Nvb2tpZS1ndWFyZGlhbi1tYXJrZXRpbmcnKSA/PyBmYWxzZTtcbiAgICAgICAgdGhpcy51bmNsYXNzaWZpZWQgPSB0aGlzLmdldExvY2FsU3RvcmFnZSgnY29va2llLWd1YXJkaWFuLXVuY2xhc3NpZmllZCcpID8/IGZhbHNlO1xuICAgICAgICB0aGlzLmJhbm5lciA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RvcEFsbENvb2tpZXMgPSBvYmo/LnN0b3BBbGxDb29raWVzID8/IHRydWU7XG4gICAgICAgIHRoaXMuZGVzYyA9IG9iaj8uZGVzYyA/PyBgPHA+VGhpcyB3ZWJzaXRlIHVzZXMgY29va2llcyB0byBpbXByb3ZlIHVzZXIgZXhwZXJpZW5jZS4gQnkgY29udGludWluZyB0byB1c2UgdGhpcyB3ZWJzaXRlLCB5b3UgY29uc2VudCB0byBvdXIgdXNlIG9mIGNvb2tpZXMgaW4gYWNjb3JkYW5jZSB3aXRoIG91ciA8YSBocmVmPVwiJHt0aGlzLnBvbGljeUxpbmt9XCI+Q29va2llIFBvbGljeS48L2E+PC9wPlxuICAgICAgICA8cD5Db29raWVzIGFyZSBzbWFsbCB0ZXh0IGZpbGVzIHRoYXQgYXJlIHBsYWNlZCBvbiB5b3VyIG1hY2hpbmUgdG8gaGVscCB0aGUgc2l0ZSBwcm92aWRlIGEgYmV0dGVyIHVzZXIgZXhwZXJpZW5jZS4gSW4gZ2VuZXJhbCwgY29va2llcyBhcmUgdXNlZCB0byByZXRhaW4gdXNlciBwcmVmZXJlbmNlcywgc3RvcmUgaW5mb3JtYXRpb24gZm9yIHRoaW5ncyBsaWtlIHNob3BwaW5nIGNhcnRzLCBhbmQgcHJvdmlkZSBhbm9ueW1pemVkIHRyYWNraW5nIGRhdGEgdG8gdGhpcmQtcGFydHkgYXBwbGljYXRpb25zIGxpa2UgR29vZ2xlIEFuYWx5dGljcy4gQXMgYSBydWxlLCBjb29raWVzIHdpbGwgbWFrZSB5b3VyIGJyb3dzaW5nIGV4cGVyaWVuY2UgYmV0dGVyLiBIb3dldmVyLCB5b3UgbWF5IHByZWZlciB0byBkaXNhYmxlIGNvb2tpZXMgb24gdGhpcyBzaXRlIGFuZCBvbiBvdGhlcnMuIFRoZSBtb3N0IGVmZmVjdGl2ZSB3YXkgdG8gZG8gdGhpcyBpcyB0byBkaXNhYmxlIGNvb2tpZXMgaW4geW91ciBicm93c2VyLiBXZSBzdWdnZXN0IGNvbnN1bHRpbmcgdGhlIEhlbHAgc2VjdGlvbiBvZiB5b3VyIGJyb3dzZXIgb3IgdGFraW5nIGEgbG9vayBhdCB0aGUgQWJvdXQgQ29va2llcyB3ZWJzaXRlIHdoaWNoIG9mZmVycyBndWlkYW5jZSBmb3IgYWxsIG1vZGVybiBicm93c2Vycy48L3A+XG4gICAgICAgIDxwPkJ5IHVzaW5nIHRoaXMgd2Vic2l0ZSwgeW91IGFncmVlIHRvIHRoZSB1c2Ugb2YgY29va2llcyBhcyBkZXNjcmliZWQgYWJvdmUuPC9wPmA7XG5cbiAgICAgICAgdGhpcy51bmNsYXNzaWZpZWRUZXh0ID0gb2JqPy51bmNsYXNzaWZpZWRUZXh0ID8/ICdVbmNsYXNzaWZpZWQgY29va2llcyBhcmUgY29va2llcyB0aGF0IHdlIGFyZSBpbiB0aGUgcHJvY2VzcyBvZiBjbGFzc2lmeWluZywgdG9nZXRoZXIgd2l0aCB0aGUgcHJvdmlkZXJzIG9mIGluZGl2aWR1YWwgY29va2llcy4nO1xuICAgICAgICB0aGlzLm1hcmtldGluZ1RleHQgPSBvYmo/Lm1hcmtldGluZ1RleHQgPz8gJ01hcmtldGluZyBjb29raWVzIGFyZSB1c2VkIHRvIHRyYWNrIHZpc2l0b3JzIGFjcm9zcyB3ZWJzaXRlcy4gVGhlIGludGVudGlvbiBpcyB0byBkaXNwbGF5IGFkcyB0aGF0IGFyZSByZWxldmFudCBhbmQgZW5nYWdpbmcgZm9yIHRoZSBpbmRpdmlkdWFsIHVzZXIgYW5kIHRoZXJlYnkgbW9yZSB2YWx1YWJsZSBmb3IgcHVibGlzaGVycyBhbmQgdGhpcmQgcGFydHkgYWR2ZXJ0aXNlcnMuJztcbiAgICAgICAgdGhpcy5zdGF0aXN0aWNzVGV4dCA9IG9iaj8uc3RhdGlzdGljc1RleHQgPz8gJ1N0YXRpc3RpY2FsIGNvb2tpZXMgaGVscCB3ZWJzaXRlIG93bmVycyB0byB1bmRlcnN0YW5kIGhvdyB2aXNpdG9ycyBpbnRlcmFjdCB3aXRoIHdlYnNpdGVzIGJ5IGNvbGxlY3RpbmcgYW5kIHJlcG9ydGluZyBpbmZvcm1hdGlvbiBhbm9ueW1vdXNseS4nO1xuICAgICAgICB0aGlzLnByZWZlcmVuY2VzVGV4dCA9IG9iaj8ucHJlZmVyZW5jZXNUZXh0ID8/ICdQcmVmZXJlbmNlIGNvb2tpZXMgZW5hYmxlIGEgd2Vic2l0ZSB0byByZW1lbWJlciBpbmZvcm1hdGlvbiB0aGF0IGNoYW5nZXMgdGhlIHdheSB0aGUgd2Vic2l0ZSBiZWhhdmVzIG9yIGxvb2tzLCBsaWtlIHlvdXIgcHJlZmVycmVkIGxhbmd1YWdlIG9yIHRoZSByZWdpb24gdGhhdCB5b3UgYXJlIGluLic7XG4gICAgICAgIHRoaXMucmVxdWlyZWRUZXh0ID0gb2JqPy5yZXF1aXJlZFRleHQgPz8gJ1JlcXVpcmVkIGNvb2tpZXMgaGVscCBtYWtlIGEgd2Vic2l0ZSB1c2FibGUgYnkgZW5hYmxpbmcgYmFzaWMgZnVuY3Rpb25zIGxpa2UgcGFnZSBuYXZpZ2F0aW9uIGFuZCBhY2Nlc3MgdG8gc2VjdXJlIGFyZWFzIG9mIHRoZSB3ZWJzaXRlLiBUaGUgd2Vic2l0ZSBjYW5ub3QgZnVuY3Rpb24gcHJvcGVybHkgd2l0aG91dCB0aGVzZSBjb29raWVzLic7XG5cbiAgICAgICAgdGhpcy5wcmVmZXJlbmNlc0NhbGxiYWNrID0gb2JqPy5wcmVmZXJlbmNlcyA/PyAoKCkgPT4ge30pO1xuICAgICAgICB0aGlzLnN0YXRpc3RpY3NDYWxsYmFjayA9IG9iaj8uc3RhdGlzdGljcyA/PyAoKCkgPT4ge30pO1xuICAgICAgICB0aGlzLm1hcmtldGluZ0NhbGxiYWNrID0gb2JqPy5tYXJrZXRpbmcgPz8gKCgpID0+IHt9KTtcbiAgICAgICAgdGhpcy51bmNsYXNzaWZpZWRDYWxsYmFjayA9IG9iaj8udW5jbGFzc2lmaWVkID8/ICgoKSA9PiB7fSk7XG5cbiAgICAgICAgdGhpcy5hY2NlcHRUZXh0ID0gb2JqPy5hY2NlcHRUZXh0ID8/ICdBY2NlcHQgQWxsJztcbiAgICAgICAgdGhpcy5kZWNsaW5lVGV4dCA9IG9iaj8uZGVjbGluZVRleHQgPz8gJ0RlbnknO1xuXG4gICAgICAgIGxldCBidXR0b24gPSB0aGlzLmNvb2tpZUJ1dHRvbkhUTUwoKTtcbiAgICAgICAgXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB0aGlzLnJ1bkNhbGxiYWNrcygpO1xuICAgICAgICB0aGlzLnJ1bkludGVydmFsKCk7XG4gICAgfVxuXG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5vcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmJhbm5lciA9IHRoaXMuY29va2llQmFubmVySFRNTCgpO1xuICAgICAgICAgICAgdGhpcy5iYW5uZXIuY2xhc3NMaXN0LmFkZCgnY29va2llLWd1YXJkaWFuX19hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoIXRoaXMub3Blbikge1xuICAgICAgICAgICAgaWYodGhpcy5iYW5uZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJhbm5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iYW5uZXIucXVlcnlTZWxlY3RvcignLmNvb2tpZS1ndWFyZGlhbl9fY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxTdG9yYWdlKCdjb29raWUtZ3VhcmRpYW4nLCB0aGlzLm9wZW4pO1xuICAgICAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UoJ2Nvb2tpZS1ndWFyZGlhbi1wcmVmZXJlbmNlcycsIHRoaXMucHJlZmVyZW5jZXMpO1xuICAgICAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UoJ2Nvb2tpZS1ndWFyZGlhbi1zdGF0aXN0aWNzJywgdGhpcy5zdGF0aXN0aWNzKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxTdG9yYWdlKCdjb29raWUtZ3VhcmRpYW4tbWFya2V0aW5nJywgdGhpcy5tYXJrZXRpbmcpO1xuICAgICAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UoJ2Nvb2tpZS1ndWFyZGlhbi11bmNsYXNzaWZpZWQnLCB0aGlzLnVuY2xhc3NpZmllZCk7XG5cbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYmFubmVyLnF1ZXJ5U2VsZWN0b3IoJyNjb29raWUtZ3VhcmRpYW5fX2RlbnktYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5wcmVmZXJlbmNlcyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zdGF0aXN0aWNzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm1hcmtldGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51bmNsYXNzaWZpZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UoJ2Nvb2tpZS1ndWFyZGlhbicsIHRoaXMub3Blbik7XG4gICAgICAgICAgICB0aGlzLnNldExvY2FsU3RvcmFnZSgnY29va2llLWd1YXJkaWFuLXByZWZlcmVuY2VzJywgdGhpcy5wcmVmZXJlbmNlcyk7XG4gICAgICAgICAgICB0aGlzLnNldExvY2FsU3RvcmFnZSgnY29va2llLWd1YXJkaWFuLXN0YXRpc3RpY3MnLCB0aGlzLnN0YXRpc3RpY3MpO1xuICAgICAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UoJ2Nvb2tpZS1ndWFyZGlhbi1tYXJrZXRpbmcnLCB0aGlzLm1hcmtldGluZyk7XG4gICAgICAgICAgICB0aGlzLnNldExvY2FsU3RvcmFnZSgnY29va2llLWd1YXJkaWFuLXVuY2xhc3NpZmllZCcsIHRoaXMudW5jbGFzc2lmaWVkKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYmFubmVyLnF1ZXJ5U2VsZWN0b3IoJyNjb29raWUtZ3VhcmRpYW5fX2FjY2VwdC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wcmVmZXJlbmNlcyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnN0YXRpc3RpY3MgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5tYXJrZXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy51bmNsYXNzaWZpZWQgPSB0cnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnNldExvY2FsU3RvcmFnZSgnY29va2llLWd1YXJkaWFuJywgdGhpcy5vcGVuKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxTdG9yYWdlKCdjb29raWUtZ3VhcmRpYW4tcHJlZmVyZW5jZXMnLCB0aGlzLnByZWZlcmVuY2VzKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxTdG9yYWdlKCdjb29raWUtZ3VhcmRpYW4tc3RhdGlzdGljcycsIHRoaXMuc3RhdGlzdGljcyk7XG4gICAgICAgICAgICB0aGlzLnNldExvY2FsU3RvcmFnZSgnY29va2llLWd1YXJkaWFuLW1hcmtldGluZycsIHRoaXMubWFya2V0aW5nKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxTdG9yYWdlKCdjb29raWUtZ3VhcmRpYW4tdW5jbGFzc2lmaWVkJywgdGhpcy51bmNsYXNzaWZpZWQpO1xuICAgICAgICAgICAgdGhpcy5ydW5DYWxsYmFja3MoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYmFubmVyLnF1ZXJ5U2VsZWN0b3IoJy5jZy0tc3RhdGlzdGljcycpLmNoZWNrZWQgPSB0aGlzLnN0YXRpc3RpY3M7XG4gICAgICAgIHRoaXMuYmFubmVyLnF1ZXJ5U2VsZWN0b3IoJy5jZy0tbWFya2V0aW5nJykuY2hlY2tlZCA9IHRoaXMubWFya2V0aW5nO1xuICAgICAgICB0aGlzLmJhbm5lci5xdWVyeVNlbGVjdG9yKCcuY2ctLXVuY2xhc3NpZmllZCcpLmNoZWNrZWQgPSB0aGlzLnVuY2xhc3NpZmllZDtcbiAgICAgICAgdGhpcy5iYW5uZXIucXVlcnlTZWxlY3RvcignLmNnLS1wcmVmZXJlbmNlcycpLmNoZWNrZWQgPSB0aGlzLnByZWZlcmVuY2VzO1xuXG4gICAgICAgIHRoaXMuYmFubmVyLnF1ZXJ5U2VsZWN0b3IoJy5jZy0tcHJlZmVyZW5jZXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChpdGVtKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByZWZlcmVuY2VzID0gaXRlbS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxTdG9yYWdlKCdjb29raWUtZ3VhcmRpYW4tcHJlZmVyZW5jZXMnLCB0aGlzLnByZWZlcmVuY2VzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5iYW5uZXIucXVlcnlTZWxlY3RvcignLmNnLS1zdGF0aXN0aWNzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGF0aXN0aWNzID0gaXRlbS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxTdG9yYWdlKCdjb29raWUtZ3VhcmRpYW4tc3RhdGlzdGljcycsIHRoaXMuc3RhdGlzdGljcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYmFubmVyLnF1ZXJ5U2VsZWN0b3IoJy5jZy0tbWFya2V0aW5nJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tYXJrZXRpbmcgPSBpdGVtLnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UoJ2Nvb2tpZS1ndWFyZGlhbi1tYXJrZXRpbmcnLCB0aGlzLm1hcmtldGluZyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYmFubmVyLnF1ZXJ5U2VsZWN0b3IoJy5jZy0tdW5jbGFzc2lmaWVkJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgdGhpcy51bmNsYXNzaWZpZWQgPSBpdGVtLnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UoJ2Nvb2tpZS1ndWFyZGlhbi11bmNsYXNzaWZpZWQnLCB0aGlzLnVuY2xhc3NpZmllZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJ1bkNhbGxiYWNrcyAoKSB7XG4gICAgICAgICAvLyBBbGwgQ29va2llcyBBY2NlcHRlZCwgcnVuIGFsbCBjYWxsYmFja3NcbiAgICAgICAgIGlmKHRoaXMucHJlZmVyZW5jZXMpIHtcbiAgICAgICAgICAgICB0aGlzLnByZWZlcmVuY2VzQ2FsbGJhY2soKTtcbiAgICAgICAgIH1cbiAgICAgICAgIGlmKHRoaXMuc3RhdGlzdGljcykge1xuICAgICAgICAgICAgIHRoaXMuc3RhdGlzdGljc0NhbGxiYWNrKCk7XG4gICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMubWFya2V0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLm1hcmtldGluZ0NhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy51bmNsYXNzaWZpZWQpIHtcbiAgICAgICAgICAgIHRoaXMudW5jbGFzc2lmaWVkQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNldCBhIHZhbHVlIGluIGxvY2FsIHN0b3JhZ2VcbiAgICBzZXRMb2NhbFN0b3JhZ2UgKGtleSwgdmFsdWUpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgIH1cblxuICAgIC8vIEdldCBhIHZhbHVlIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgIGdldExvY2FsU3RvcmFnZSAoa2V5KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlID8gSlNPTi5wYXJzZSh2YWx1ZSkgOiBudWxsO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhIHZhbHVlIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgIHJlbW92ZUxvY2FsU3RvcmFnZSAoa2V5KSAge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbGwgY29va2llc1xuICAgIHJlbW92ZUFsbENvb2tpZXMgKCkge1xuICAgICAgICBjb25zdCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29va2llID0gY29va2llc1tpXS50cmltKCk7XG4gICAgICAgICAgICBjb25zdCBjb29raWVQYXJ0cyA9IGNvb2tpZS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGNvb2tpZVBhcnRzLnNoaWZ0KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfT07IGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBVVEM7IHBhdGg9LztgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29va2llQmFubmVySFRNTCAoKSB7XG4gICAgICAgIHJldHVybiB0b0hUTUwoYDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29va2llLWd1YXJkaWFuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb2tpZS1ndWFyZGlhbl9fY2xvc2VcIj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDM4NCA1MTJcIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDYuNS4yIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjQgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD1cIk0zNzYuNiA4NC41YzExLjMtMTMuNiA5LjUtMzMuOC00LjEtNDUuMXMtMzMuOC05LjUtNDUuMSA0LjFMMTkyIDIwNiA1Ni42IDQzLjVDNDUuMyAyOS45IDI1LjEgMjguMSAxMS41IDM5LjRTLTMuOSA3MC45IDcuNCA4NC41TDE1MC4zIDI1NiA3LjQgNDI3LjVjLTExLjMgMTMuNi05LjUgMzMuOCA0LjEgNDUuMXMzMy44IDkuNSA0NS4xLTQuMUwxOTIgMzA2IDMyNy40IDQ2OC41YzExLjMgMTMuNiAzMS41IDE1LjQgNDUuMSA0LjFzMTUuNC0zMS41IDQuMS00NS4xTDIzMy43IDI1NiAzNzYuNiA4NC41elwiLz48L3N2Zz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb2tpZS1ndWFyZGlhbl9fY29udGVudFwiIGRhdGEtdGFiY2c9XCIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29va2llLWd1YXJkaWFuX19iYW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkNvb2tpZSBHdWFyZGlhbjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkJZIENIUklTVE9QSEVSIE5BVEhBTklFTDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb2tpZS1ndWFyZGlhbl9fZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgJHsgdGhpcy5kZXNjIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29raWUtZ3VhcmRpYW5fX29wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29va2llLWd1YXJkaWFuX19zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlJlcXVpcmVkPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4keyB0aGlzLnJlcXVpcmVkVGV4dCB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD1cImNoZWNrZWRcIiBkaXNhYmxlZD1cImRpc2FibGVkXCIgLz4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3gtc2xpZGVyXCI+PC9kaXY+ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29raWUtZ3VhcmRpYW5fX3NlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+UHJlZmVyZW5jZXM8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7IHRoaXMucHJlZmVyZW5jZXNUZXh0IH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNnLS1wcmVmZXJlbmNlc1wiIC8+ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94LXNsaWRlclwiPjwvZGl2PiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29va2llLWd1YXJkaWFuX19zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlN0YXRpc3RpY3M8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7IHRoaXMuc3RhdGlzdGljc1RleHQgfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2ctLXN0YXRpc3RpY3NcIiAvPiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveC1zbGlkZXJcIj48L2Rpdj4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb2tpZS1ndWFyZGlhbl9fc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5NYXJrZXRpbmc8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7IHRoaXMubWFya2V0aW5nVGV4dCB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjZy0tbWFya2V0aW5nXCIgLz4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3gtc2xpZGVyXCI+PC9kaXY+ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29va2llLWd1YXJkaWFuX19zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlVuY2xhc3NpZmllZDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHsgdGhpcy51bmNsYXNzaWZpZWRUZXh0IH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNnLS11bmNsYXNzaWZpZWRcIiAvPiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveC1zbGlkZXJcIj48L2Rpdj4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29raWUtZ3VhcmRpYW5fX2J1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY29va2llLWd1YXJkaWFuX19kZW55LWJ1dHRvblwiIGNsYXNzPVwiY29va2llLWd1YXJkaWFuX19idXR0b25cIj4keyB0aGlzLmRlY2xpbmVUZXh0IH08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY29va2llLWd1YXJkaWFuX19hY2NlcHQtYnV0dG9uXCIgY2xhc3M9XCJjb29raWUtZ3VhcmRpYW5fX2J1dHRvblwiPiR7IHRoaXMuYWNjZXB0VGV4dCB9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb2tpZS1ndWFyZGlhbl9fb3ZlcmxheVwiPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YCwgMSk7XG4gICAgfVxuICAgIGNvb2tpZUJ1dHRvbkhUTUwgKCkge1xuICAgICAgICByZXR1cm4gdG9IVE1MKGA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb2tpZS1idXR0b25cIj5cbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDYuNS4yIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjQgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD1cIk0yNDcuMiAxN2MtMjIuMS0zLjEtNDQuNiAuOS02NC40IDExLjRsLTc0IDM5LjVDODkuMSA3OC40IDczLjIgOTQuOSA2My40IDExNUwyNi43IDE5MC42Yy05LjggMjAuMS0xMyA0Mi45LTkuMSA2NC45bDE0LjUgODIuOGMzLjkgMjIuMSAxNC42IDQyLjMgMzAuNyA1Ny45bDYwLjMgNTguNGMxNi4xIDE1LjYgMzYuNiAyNS42IDU4LjcgMjguN2w4MyAxMS43YzIyLjEgMy4xIDQ0LjYtLjkgNjQuNC0xMS40bDc0LTM5LjVjMTkuNy0xMC41IDM1LjYtMjcgNDUuNC00Ny4ybDM2LjctNzUuNWM5LjgtMjAuMSAxMy00Mi45IDkuMS02NC45bC0xNC42LTgyLjhjLTMuOS0yMi4xLTE0LjYtNDIuMy0zMC43LTU3LjlMMzg4LjkgNTcuNWMtMTYuMS0xNS42LTM2LjYtMjUuNi01OC43LTI4LjdMMjQ3LjIgMTd6TTIwOCAxNDRhMzIgMzIgMCAxIDEgMCA2NCAzMiAzMiAwIDEgMSAwLTY0ek0xNDQgMzM2YTMyIDMyIDAgMSAxIDY0IDAgMzIgMzIgMCAxIDEgLTY0IDB6bTIyNC02NGEzMiAzMiAwIDEgMSAwIDY0IDMyIDMyIDAgMSAxIDAtNjR6XCIvPjwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmAsIDIpO1xuICAgIH1cblxuICAgIHJ1bkludGVydmFsICgpIHtcbiAgICAgICAgLy8gQ2hlY2sgZXZlcnkgMzAgc2Vjb25kcyBpZiBkZWNsaW5lIG9wdGlvbiBpcyBzZWxlY3RlZCBhbmQgcmVtb3ZlIGFsbCBjb29raWVzXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBpc0FjY2VwdGVkID0gdGhpcy5nZXRMb2NhbFN0b3JhZ2UoJ2Nvb2tpZS1ndWFyZGlhbi1tYXJrZXRpbmcnKSA/PyBmYWxzZTtcbiAgICAgICAgICAgIGlmICghaXNBY2NlcHRlZCkge1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBpZih0aGlzLnN0b3BBbGxDb29raWVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNjcmlwdCB0byB0cnkgYW4gZGlzYWJsZSBhcyBtYW55IGV4dGVybmFsIHNjcmlwdHMgYXMgcG9zc2libGVcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBub3QgYSBmb29scHJvb2YgbWV0aG9kXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsQ29va2llcygpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaWZyYW1lJykuZm9yRWFjaChmdW5jdGlvbihpZnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRXh0ZXJuYWxTY3JpcHRzKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVTY3JpcHRzQnlTb3VyY2UoJ2dvb2dsZS1hbmFseXRpY3MuY29tJyk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVNjcmlwdHNCeVNvdXJjZSgnZ29vZ2xldGFnbWFuYWdlci5jb20nKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU2NyaXB0c0J5U291cmNlKCdmYWNlYm9vay5uZXQnKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU2NyaXB0c0J5U291cmNlKCd0d2l0dGVyLmNvbScpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVTY3JpcHRzQnlTb3VyY2UoJ2xpbmtlZGluLmNvbScpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVTY3JpcHRzQnlTb3VyY2UoJ2hvdGphci5jb20nKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU2NyaXB0c0J5U291cmNlKCdtYXRvbW8ub3JnJyk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVNjcmlwdHNCeVNvdXJjZSgnY3JhenllZ2cuY29tJyk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVNjcmlwdHNCeVNvdXJjZSgnbW91c2VmbG93LmNvbScpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVTY3JpcHRzQnlTb3VyY2UoJ3Z3by5jb20nKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU2NyaXB0c0J5U291cmNlKCdvbW5pdHVyZS5jb20nKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU2NyaXB0c0J5U291cmNlKCdxdWFudHNlcnZlLmNvbScpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVTY3JpcHRzQnlTb3VyY2UoJ21peHBhbmVsLmNvbScpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVTY3JpcHRzQnlTb3VyY2UoJ3NlZ21lbnQuY29tJyk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVNjcmlwdHNCeVNvdXJjZSgnb3B0aW1pemVseS5jb20nKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU2NyaXB0c0J5U291cmNlKCdmdWxsc3RvcnkuY29tJyk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVNjcmlwdHNCeVNvdXJjZSgnaGVhcGFuYWx5dGljcy5jb20nKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU2NyaXB0c0J5U291cmNlKCdhZHJvbGwuY29tJyk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVNjcmlwdHNCeVNvdXJjZSgndGFib29sYS5jb20nKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU2NyaXB0c0J5U291cmNlKCdvdXRicmFpbi5jb20nKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU2NyaXB0c0J5U291cmNlKCdkb3VibGVjbGljay5uZXQnKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU2NyaXB0c0J5U291cmNlKCdnb29nbGVzeW5kaWNhdGlvbi5jb20nKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU2NyaXB0c0J5U291cmNlKCdiaW5nLmNvbScpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVTY3JpcHRzQnlTb3VyY2UoJ3lhaG9vLmNvbScpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVTY3JpcHRzQnlTb3VyY2UoJ2FkZm9ybS5jb20nKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU2NyaXB0c0J5U291cmNlKCdhZGdlYXIuY29tJyk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVNjcmlwdHNCeVNvdXJjZSgnZ29vZ2xlYWRzZXJ2aWNlcy5jb20nKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU2NyaXB0c0J5U291cmNlKCdmaW50ZXphLmNvbScpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVTY3JpcHRzQnlTb3VyY2UoJ21jLnlhbmRleC5ydScpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVTY3JpcHRzQnlTb3VyY2UoJ2h1YnNwb3QuY29tJyk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVNjcmlwdHNCeVNvdXJjZSgncGFyZG90LmNvbScpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVTY3JpcHRzQnlTb3VyY2UoJ2xlYWRmZWVkZXIuY29tJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAzMDAwMCk7XG4gICAgfVxuXG5cbn07XG5cblxuXG5pZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIC8vIEV4cG9ydCBhcyBDb21tb25KUyBtb2R1bGVcbiAgICBjb25zb2xlLmxvZyhcIkV4cG9ydGluZyBhcyBDb21tb25KUyBtb2R1bGVcIik7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBDb29raWVHdWFyZGlhbjtcbn0gZWxzZSB7XG4gICAgLy8gRGVmaW5lIGdsb2JhbCB2YXJpYWJsZSBpbiBicm93c2VyIGVudmlyb25tZW50XG4gICAgY29uc29sZS5sb2coXCJEZWZpbmluZyBhcyBnbG9iYWwgdmFyaWFibGUgaW4gYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcbiAgICB3aW5kb3cuQ29va2llR3VhcmRpYW4gPSBDb29raWVHdWFyZGlhbjtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDb29raWVHdWFyZGlhbjtcblxuLy8gVXNhZ2U6XG5cbi8vIDxzY3JpcHQgc3JjPVwiY29va2llLWd1YXJkaWFuL3NyYy9jb29raWUtZ3VhcmRpYW4uanNcIj48L3NjcmlwdD5cbi8vIDxzY3JpcHQ+XG4vLyAgICAgICBjb25zdCBjb29raWVHdWFyZGlhbiA9IG5ldyBDb29raWVHdWFyZGlhbigpO1xuLy8gPC9zY3JpcHQ+XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vQXBwLnNjc3MnO1xuaW1wb3J0ICcuL0Jsb2Nrcy5zY3NzJztcblxuaW1wb3J0IHsgRHluYW1pY1BhZ2UgfSBmcm9tICdzd2lmdC1zd2FwL3NyYy9QYWdlRmxvdy5qcyc7XG5pbXBvcnQgRXZlbnRMaXN0ZW5lck1hbmFnZXIgZnJvbSAnLi9qcy9saWJyYXJpZXMvRXZlbnRMaXN0ZW5lck1hbmFnZXInO1xuaW1wb3J0IG9yZ2FuaXNtMDAgZnJvbSAnLi9tb2R1bGVzL19vcmdhbmlzbXMvb3JnYW5pc20tMDAvb3JnYW5pc20tMDAnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL21vZHVsZXMvX21vbGVjdWxlcy9oZWFkZXInO1xuaW1wb3J0IENvb2tpZUd1YXJkaWFuIGZyb20gJ2Nvb2tpZS1ndWFyZGlhbi9zcmMvY29va2llLWd1YXJkaWFuLmpzJztcbmltcG9ydCBWaWV3cG9ydE9ic2VydmVyIGZyb20gJy4vanMvbGlicmFyaWVzL1ZpZXdwb3J0T2JzZXJ2ZXInO1xuaW1wb3J0IHdyYXBXb3Jkc0luU3BhbnMgZnJvbSAnLi9qcy9saWJyYXJpZXMvd3JhcFdvcmRzSW5TcGFucyc7XG5pbXBvcnQgTWFzb25yeSBmcm9tICdtYXNvbnJ5LWxheW91dCc7XG5yZXF1aXJlKCdmc2xpZ2h0Ym94Jyk7XG5cbmNvbnN0IGV2ZW50TWFuYWdlckxpc3RlbmVyID0gbmV3IEV2ZW50TGlzdGVuZXJNYW5hZ2VyKCk7XG5jb25zdCBzdGF0ZSA9IHt9XG5cblxuXG5cbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGVtZS10b2dnbGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyay10aGVtZScpKTtcblxuLy8gaWYoZXZlbnQudGFyZ2V0LmhyZWYuaW5jbHVkZXMod2luZG93LmxvY2F0aW9uLm9yaWdpbikgJiYgIWV2ZW50LnRhcmdldC5ocmVmLmluY2x1ZGVzKCcjJykpIHtcbi8vIENvbXBvbmVudHMgdG8gUmVuZGVyIG9uIGVhY2ggcGFnZSBsb2FkLiBBZGQgUmVuZGVyQ29tcG9uZW50IGZ1bmN0aW9ucyB0byB0aGUgTW9kdWxlIENsYXNzZXMgaGVyZS5cbi8vIEVhY2ggdGltZSB0aGUgcGFnZSBpcyBsb2FkZWQgdGhlc2UgZnVuY3Rpb25zIGFyZSBjYWxsZWRcbmxldCByZW5kZXJMaXN0ID0gWygpID0+IHtcbiAgICBldmVudE1hbmFnZXJMaXN0ZW5lci5yZW1vdmVBbGwoKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKS5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICBldmVudE1hbmFnZXJMaXN0ZW5lci5hZGQobGluaywgJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZihsaW5rLmdldEF0dHJpYnV0ZSgndGFyZ2V0JykgIT09ICdfYmxhbmsnKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgncGFnZS10cmFuc2l0aW9uJyk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogJ2luc3RhbnQnfSk7XG4gICAgICAgICAgICAgICAgfSwgNzAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCBsaW5rLmhyZWYpO1xuICAgICAgICAgICAgICAgICAgICBkeW5hbWljUGFnZS5fbWFrZVJlcXVlc3QobGluay5ocmVmKTsgLy8gTWFrZSBSZXF1ZXN0IGFuZCBSZW5kZXJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7IFxufV07XG5cblxuLy8gTGlnaHRib3hcbnJlbmRlckxpc3QgPSBbLi4ucmVuZGVyTGlzdCwgKCkgPT4ge1xuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXNvbnJ5LWJsb2NrLTEzJykgPT09IG51bGwpIHJldHVybjtcblxuICAgIGNvbnN0IGxpZ2h0Ym94ID0gbmV3IEZzTGlnaHRib3goKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFzb25yeS1ibG9jay0xMyBpbWcnKS5mb3JFYWNoKChlbGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBsaWdodGJveC5wcm9wcy5zb3VyY2VzLnB1c2goZWxlbS5nZXRBdHRyaWJ1dGUoJ3NyYycpKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihsaWdodGJveC5wcm9wcy5zb3VyY2VzKTtcbiAgIFxuICAgIH0pO1xuXG4gIFxuXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFzb25yeS1ibG9jay0xMyBpbWcnKS5mb3JFYWNoKChlbGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBsaWdodGJveC5vcGVuKGluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XTtcblxuLy8gTWFzb25yeSBMYXlvdXRcbnJlbmRlckxpc3QgPSBbLi4ucmVuZGVyTGlzdCwgKCkgPT4ge1xuIC8vIHZhbmlsbGEgSlNcbi8vIGluaXQgd2l0aCBlbGVtZW50XG52YXIgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJyk7XG4gICAgdmFyIG1zbnJ5ID0gbmV3IE1hc29ucnkoIGdyaWQsIHtcbiAgICAvLyBvcHRpb25zLi4uXG4gICAgICAgIGl0ZW1TZWxlY3RvcjogJy5ncmlkLWl0ZW0nLFxuICAgICAgICBjb2x1bW5XaWR0aDogJy4tLWJsb2NrJyxcbiAgICAgICAgcGVyY2VudFBvc2l0aW9uOiB0cnVlXG4gICBcbiAgICB9KTtcbiAgICBcblxufV07XG5cblxucmVuZGVyTGlzdCA9IFsuLi5yZW5kZXJMaXN0LCAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2luLXRyYW5zaXRpb24nKSwgMTAwKTtcbn1dO1xuXG5cbi8vIHJlbmRlckxpc3QgPSBbLi4ucmVuZGVyTGlzdCwgSHRtbE1vZHVsZSh7ICB2YWw6IHN0YXRlLCBwYXJlbnQ6ICcubXlQYXJlbnQyJyB9KS5SZW5kZXJDb21wb25lbnRdOyAvLyBXb3Jrc1xucmVuZGVyTGlzdCA9IFsuLi5yZW5kZXJMaXN0LCBvcmdhbmlzbTAwKHsgdmFsOiBzdGF0ZSwgcGFyZW50OiAnLm9yZ2FuaXNtLTAwIC5mdW5jdGlvbicgfSkuUmVuZGVyQ29tcG9uZW50XTtcbnJlbmRlckxpc3QgPSBbLi4ucmVuZGVyTGlzdCwgSGVhZGVyKHsgdmFsOiBzdGF0ZSwgcGFyZW50OiAnaGVhZGVyJ30pLlJlbmRlckNvbXBvbmVudF07XG5yZW5kZXJMaXN0ID0gWy4uLnJlbmRlckxpc3QsICgpID0+IHdyYXBXb3Jkc0luU3BhbnMoJy53cmFwLWluLXNwYW4nKSBdO1xucmVuZGVyTGlzdCA9IFsuLi5yZW5kZXJMaXN0LCAoKSA9PiB7XG4gICAgY29uc3QgaW5zaWRlQ2FsbGJhY2sgPSAoZWxlbSkgPT4gZWxlbS5jbGFzc0xpc3QuYWRkKCdpbi12aWV3cG9ydCcpO1xuICAgIGNvbnN0IG91dHNpZGVDYWxsYmFjayA9IChlbGVtKSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2luLXZpZXdwb3J0Jyk7XG4gICAgbmV3IFZpZXdwb3J0T2JzZXJ2ZXIoJy52cC0tb2JzZXJ2ZXInLCB7fSwgaW5zaWRlQ2FsbGJhY2ssIG91dHNpZGVDYWxsYmFjayk7XG59XTtcblxuXG4vLyBQYWRkbGUgTmF2aWdhdGlvblxucmVuZGVyTGlzdCA9IFsuLi5yZW5kZXJMaXN0LCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhZGRsZS1jb250YWluZXInKS5mb3JFYWNoKHBhZGRsZUNvbnRhaW5lciA9PiB7XG4gICAgICAgIGxldCBzY3JvbGxDb250YWluZXIgPSBwYWRkbGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLnNjcm9sbC1jb250YWluZXInKTtcbiAgICAgICAgbGV0IGlzRG93biA9IGZhbHNlO1xuICAgICAgICBsZXQgc3RhcnRYO1xuICAgICAgICBsZXQgc2Nyb2xsTGVmdDtcbiAgICBcbiAgICAgICAgLy8gU2Nyb2xsIHJpZ2h0IGJ1dHRvblxuICAgICAgICBwYWRkbGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLnBhZGRsZW5hdi0tcmlnaHQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTY3JvbGwgPSBzY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Njcm9sbCA9IGN1cnJlbnRTY3JvbGwgKyAod2luZG93LmlubmVyV2lkdGggLyAzKSArIDg7XG4gICAgICAgICAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG8oeyBsZWZ0OiBuZXdTY3JvbGwsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIC8vIFNjcm9sbCBsZWZ0IGJ1dHRvblxuICAgICAgICBwYWRkbGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLnBhZGRsZW5hdi0tbGVmdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFNjcm9sbCA9IHNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgY29uc3QgbmV3U2Nyb2xsID0gY3VycmVudFNjcm9sbCAtICh3aW5kb3cuaW5uZXJXaWR0aCAvIDMpICsgODtcbiAgICAgICAgICAgIHNjcm9sbENvbnRhaW5lci5zY3JvbGxUbyh7IGxlZnQ6IG5ld1Njcm9sbCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIFByZXZlbnQgaW1hZ2UgZHJhZ2dpbmdcbiAgICAgICAgICAgIHNjcm9sbENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKS5mb3JFYWNoKGltZyA9PiB7XG4gICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyBNb3VzZSBldmVudHMgZm9yIGRyYWdnaW5nXG4gICAgICAgIHNjcm9sbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgaXNEb3duID0gdHJ1ZTtcbiAgICAgICAgICAgIHNjcm9sbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHN0YXJ0WCA9IGUucGFnZVggLSBzY3JvbGxDb250YWluZXIub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIHNjcm9sbExlZnQgPSBzY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdDtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIHNjcm9sbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgaXNEb3duID0gZmFsc2U7XG4gICAgICAgICAgICBzY3JvbGxDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBzY3JvbGxDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcbiAgICAgICAgICAgIGlzRG93biA9IGZhbHNlO1xuICAgICAgICAgICAgc2Nyb2xsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgc2Nyb2xsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWlzRG93bikgcmV0dXJuO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgeCA9IGUucGFnZVggLSBzY3JvbGxDb250YWluZXIub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHdhbGsgPSAoeCAtIHN0YXJ0WCkgKiAyOyAvLyBBZGp1c3QgdGhlIG11bHRpcGxpZXIgdG8gY29udHJvbCB0aGUgc2Nyb2xsIHNwZWVkXG4gICAgICAgICAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQgLSB3YWxrO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxufV07XG5cblxuLy8gRGVmaW5lIER5bmFtaWNQYWdlIC8vIFNvdXJjZSA9IFRoZSBIVE1MIGVsZW1lbnQgdG8gZ3JhYiAoT3V0ZXJIVE1MKSAvLyB0YXJnZXQgPSBUaGUgUGxhY2VtZW50XG4vLyBEeW5hbWljUGFnZSBuZWVkcyB0byBsb2FkIGFmdGVyIGFueSBzcGVjaWZpZWQgZGF0YSAtIHNob3VsZCB0ZWNobmljYWxseSBiZSB0aGUgbGFzdCBGdW5jdGlvbiBsb2FkZWRcbmNvbnN0IGR5bmFtaWNQYWdlID0gbmV3IER5bmFtaWNQYWdlKHtzb3VyY2U6ICdEeW5hbWljUGFnZScsIHRhcmdldDogJ0FwcCd9LCByZW5kZXJMaXN0LCB0cnVlKTtcbmR5bmFtaWNQYWdlLl9tYWtlUmVxdWVzdCh3aW5kb3cubG9jYXRpb24uaHJlZik7IC8vIE1ha2UgUmVxdWVzdCBhbmQgUmVuZGVyIGluZGV4Lmh0bWwgdG8gdGhlIHBhZ2VcblxuXG4vLyBDb29raWUgR3VhcmRpYW5cbmNvbnN0IGNvb2tpZUd1YXJkaWFuID0gbmV3IENvb2tpZUd1YXJkaWFuKHtcbiAgICBzdG9wQWxsQ29va2llczogdHJ1ZSxcbiAgICBzdGF0aXN0aWNzOiAoKSA9PiB7XG4gICAgICAgIC8vIC8vIFN0YXRpc3RpY3MgQ2FsbGJhY2tcbiAgICAgICAgLy8gbGV0IHRhZ01hbmFnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLy8gdGFnTWFuYWdlci5pZCA9ICdnb29nbGUtdGFnLW1hbmFnZXInO1xuICAgICAgICAvLyB0YWdNYW5hZ2VyLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgLy8gdGFnTWFuYWdlci5zcmMgPSAnaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1HLUNNR1ZKRjMyQkcnOyAgICBcbiAgICAgICAgLy8gZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0YWdNYW5hZ2VyKTtcblxuXG4gICAgICAgIC8vIC8vIFNldCB0aGUgc2NyaXB0IGNvbnRlbnRcbiAgICAgICAgLy8gbGV0IGFuYWx5dGljc0xheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIC8vIGFuYWx5dGljc0xheWVyLnRleHRDb250ZW50ID0gYFxuICAgICAgICAvLyAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgICAgIC8vICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XG4gICAgICAgIC8vICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuICAgICAgICAvLyAgICAgZ3RhZygnY29uZmlnJywgJ0ctQ01HVkpGMzJCRycpO1xuICAgICAgICAvLyBgO1xuXG4gICAgICAgIC8vIC8vIEFwcGVuZCB0aGUgc2NyaXB0IGVsZW1lbnQgdG8gdGhlIGhlYWQgb2YgdGhlIGRvY3VtZW50XG4gICAgICAgIC8vIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoYW5hbHl0aWNzTGF5ZXIpO1xuXG4gICAgICAgIC8vIC8vIFN0YXRpc3RpY3MgR3JhbnRlZFxuICAgICAgICAvLyBndGFnKCdjb25zZW50JywgJ3VwZGF0ZScsIHtcbiAgICAgICAgLy8gICAgICdhZF9zdG9yYWdlJzogJ2dyYW50ZWQnLFxuICAgICAgICAvLyAgICAgJ2FkX3VzZXJfZGF0YSc6ICdncmFudGVkJyxcbiAgICAgICAgLy8gICAgICdhZF9wZXJzb25hbGl6YXRpb24nOiAnZ3JhbnRlZCcsXG4gICAgICAgIC8vICAgICAnYW5hbHl0aWNzX3N0b3JhZ2UnOiAnZ3JhbnRlZCcsXG4gICAgICAgIC8vICAgICAnd2FpdF9mb3JfdXBkYXRlJzogNTAwXG4gICAgICAgIC8vIH0pO1xuICAgIH0sICAgXG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==