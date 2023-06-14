
(function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
	
/***/ "./src/js/magnetic.js":
/*!****************************!*\
  !*** ./src/js/magnetic.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Magnetic; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/*** IMPORTS FROM imports-loader ***/var define=false;var Magnetic=/*#__PURE__*/function(){function Magnetic(el){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};_classCallCheck(this,Magnetic);this.el=jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);this.options=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(true,{y:0.2,x:0.2,s:0.2,rs:0.7},this.el.data('magnetic')||options);this.y=0;this.x=0;this.width=0;this.height=0;if(this.el.data('magnetic-init'))return;this.el.data('magnetic-init',true);this.bind();}_createClass(Magnetic,[{key:"bind",value:function bind(){var _this=this;this.el.on('mouseenter',function(){_this.y=_this.el.offset().top-window.pageYOffset;_this.x=_this.el.offset().left-window.pageXOffset;_this.width=_this.el.outerWidth();_this.height=_this.el.outerHeight();});this.el.on('mousemove',function(e){var y=(e.clientY-_this.y-_this.height/2)*_this.options.y;var x=(e.clientX-_this.x-_this.width/2)*_this.options.x;_this.move(x,y,_this.options.s);});this.el.on('mouseleave',function(e){_this.move(0,0,_this.options.rs);});}},{key:"move",value:function move(x,y,speed){gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(this.el,{y:y,x:x,force3D:true,overwrite:true,duration:speed});}}]);return Magnetic;}();

/***/ })

/******/ });// JavaScript Document