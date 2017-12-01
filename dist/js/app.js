/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// initialize();

function initialize() {
    prepareAnimatables();
    registerListeners();
}

function prepareAnimatables() {
    hideCard();
    hideSvgQuote();
    hideQuoteText();
    hideQuoteCitation();
    hideTweetButton();
    hideRandomButton();
    hideCopyright();
}

function hideCard() {
    document.getElementById('card').style.opacity = 0;
}

function hideSvgQuote() {
    document.getElementById('svg-quote').style.opacity = 0;
}

function hideQuoteText() {
    document.getElementById('quote__text').style.opacity = 0;
}

function hideQuoteCitation() {
    document.getElementById('quote__citation').style.opacity = 0;
}

function hideTweetButton() {
    document.getElementById('buttons__svg-tweet').style.opacity = 0;
}

function hideRandomButton() {
    document.getElementById('buttons__svg-random').style.opacity = 0;
}

function hideCopyright() {
    document.getElementById('copyright').style.opacity = 0;
}

function registerListeners() {
    window.addEventListener('load', intro);
}

function intro() {
    animateCardIntro();
    animateCopyrightIntro();
}

function animateCardIntro() {
    let cardIntro = [
        { opacity: 0, easing: 'ease-in' },
        { opacity: 1 }
    ];

    let options = {
        duration: 500,
        fill: 'forwards'
    };

    document.getElementById('card').animate(cardIntro, options);
}

function animateCopyrightIntro() {
    let cardIntro = [
        { opacity: 0, easing: 'ease-in' },
        { opacity: 1 }
    ];

    let options = {
        duration: 500,
        fill: 'forwards'
    };

    document.getElementById('copyright').animate(cardIntro, options);
}


/***/ })
/******/ ]);