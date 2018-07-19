(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _square_square_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./square/square.component */ "./src/app/square/square.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'square', component: _square_square_component__WEBPACK_IMPORTED_MODULE_3__["SquareComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n  <nav  class=\"navbar navbar-expand-lg fixed-top navbar-custom \">\n      <div class=\"container text-white\">\n      <a class=\"navbar-brand navbar-brand martz\" href=\"#\">Naija Search</a>\n      <button class=\"navbar-toggler btn-secondary \" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n  \n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav ml-auto\">\n              <li class=\"nav-item active\">\n                <a class=\"nav-link page-scroll \" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link page-scroll\"  routerLink=\"/square\">Search Naija</a>\n              </li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n\n  <router-outlet></router-outlet>\n \n\n    <footer class=\"footr\">\n        <div class=\"container\">\n           <h5> <p class=\"text-white text-center\">Copyright &copy;All rights reserved |Naija Search\t</p></h5> \n          </div>\n      </footer>\n   \n  \n\n   "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Search';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _square_square_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./square/square.component */ "./src/app/square/square.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _square_square_component__WEBPACK_IMPORTED_MODULE_6__["SquareComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["AlertModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\r\n * Start Bootstrap - Agency v3.3.7+1 (http://startbootstrap.com/template-overviews/agency)\r\n * Copyright 2013-2016 Start Bootstrap\r\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)\r\n */\r\n body {\r\n  overflow-x: hidden;\r\n  font-family: \"Roboto Slab\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n}\r\n .text-muted {\r\n  color: #777777;\r\n}\r\n .text-primary {\r\n  color: #fed136;\r\n}\r\n p {\r\n  font-size: 14px;\r\n  line-height: 1.75;\r\n}\r\n p.large {\r\n  font-size: 16px;\r\n}\r\n a,\r\na:hover,\r\na:focus,\r\na:active,\r\na.active {\r\n  outline: none;\r\n}\r\n a {\r\n  color: #fed136;\r\n}\r\n a:hover,\r\na:focus,\r\na:active,\r\na.active {\r\n  color: #fec503;\r\n}\r\n h1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n}\r\n .img-centered {\r\n  margin: 0 auto;\r\n}\r\n .bg-light-gray {\r\n  background-color: #eeeeee;\r\n}\r\n .bg-darkest-gray {\r\n  background-color: #222222;\r\n}\r\n .btn-primary {\r\n  color: white;\r\n  background-color: wheat;\r\n  border-color: #fed136;\r\n  font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n}\r\n .btn-primary:hover,\r\n.btn-primary:focus,\r\n.btn-primary:active,\r\n.btn-primary.active,\r\n.open .dropdown-toggle.btn-primary {\r\n  color: white;\r\n  background-color: wheat;\r\n  border-color: #f6bf01;\r\n}\r\n .btn-primary:active,\r\n.btn-primary.active,\r\n.open .dropdown-toggle.btn-primary {\r\n  background-image: none;\r\n}\r\n .btn-primary.disabled,\r\n.btn-primary[disabled],\r\nfieldset[disabled] .btn-primary,\r\n.btn-primary.disabled:hover,\r\n.btn-primary[disabled]:hover,\r\nfieldset[disabled] .btn-primary:hover,\r\n.btn-primary.disabled:focus,\r\n.btn-primary[disabled]:focus,\r\nfieldset[disabled] .btn-primary:focus,\r\n.btn-primary.disabled:active,\r\n.btn-primary[disabled]:active,\r\nfieldset[disabled] .btn-primary:active,\r\n.btn-primary.disabled.active,\r\n.btn-primary[disabled].active,\r\nfieldset[disabled] .btn-primary.active {\r\n  background-color: #fed136;\r\n  border-color: #fed136;\r\n}\r\n .btn-primary .badge {\r\n  color: #fed136;\r\n  background-color: white;\r\n}\r\n .btn-xl {\r\n  color: white;\r\n  background-color: #fed136;\r\n  border-color: #fed136;\r\n  font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n  border-radius: 3px;\r\n  font-size: 18px;\r\n  padding: 20px 40px;\r\n}\r\n .btn-xl:hover,\r\n.btn-xl:focus,\r\n.btn-xl:active,\r\n.btn-xl.active,\r\n.open .dropdown-toggle.btn-xl {\r\n  color: white;\r\n  background-color: #fec503;\r\n  border-color: #f6bf01;\r\n}\r\n .btn-xl:active,\r\n.btn-xl.active,\r\n.open .dropdown-toggle.btn-xl {\r\n  background-image: none;\r\n}\r\n .btn-xl.disabled,\r\n.btn-xl[disabled],\r\nfieldset[disabled] .btn-xl,\r\n.btn-xl.disabled:hover,\r\n.btn-xl[disabled]:hover,\r\nfieldset[disabled] .btn-xl:hover,\r\n.btn-xl.disabled:focus,\r\n.btn-xl[disabled]:focus,\r\nfieldset[disabled] .btn-xl:focus,\r\n.btn-xl.disabled:active,\r\n.btn-xl[disabled]:active,\r\nfieldset[disabled] .btn-xl:active,\r\n.btn-xl.disabled.active,\r\n.btn-xl[disabled].active,\r\nfieldset[disabled] .btn-xl.active {\r\n  background-color: #fed136;\r\n  border-color: #fed136;\r\n}\r\n .btn-xl .badge {\r\n  color: #fed136;\r\n  background-color: white;\r\n}\r\n .navbar-custom {\r\n  background-color: #222222;\r\n  border-color: transparent;\r\n}\r\n .navbar-custom .navbar-brand {\r\n  color: #fed136;\r\n  font-family: \"Kaushan Script\", \"Helvetica Neue\", Helvetica, Arial, cursive;\r\n}\r\n .navbar-custom .navbar-brand:hover,\r\n.navbar-custom .navbar-brand:focus,\r\n.navbar-custom .navbar-brand:active,\r\n.navbar-custom .navbar-brand.active {\r\n  color: #fec503;\r\n}\r\n .navbar-custom .navbar-collapse {\r\n  border-color: rgba(255, 255, 255, 0.02);\r\n}\r\n .navbar-custom .navbar-toggle {\r\n  background-color: #fed136;\r\n  border-color: #fed136;\r\n  font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  text-transform: uppercase;\r\n  color: white;\r\n  font-size: 12px;\r\n}\r\n .navbar-custom .navbar-toggle:hover,\r\n.navbar-custom .navbar-toggle:focus {\r\n  background-color: #fed136;\r\n}\r\n .navbar-custom .nav li a {\r\n  font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  text-transform: uppercase;\r\n  font-weight: 400;\r\n  letter-spacing: 1px;\r\n  color: white;\r\n}\r\n .navbar-custom .nav li a:hover,\r\n.navbar-custom .nav li a:focus {\r\n  color: #fed136;\r\n  outline: none;\r\n}\r\n .navbar-custom .navbar-nav > .active > a {\r\n  border-radius: 0;\r\n  color: white;\r\n  background-color: #fed136;\r\n}\r\n .navbar-custom .navbar-nav > .active > a:hover,\r\n.navbar-custom .navbar-nav > .active > a:focus {\r\n  color: white;\r\n  background-color: #fec503;\r\n}\r\n @media (min-width: 768px) {\r\n  .navbar-custom {\r\n    background-color: transparent;\r\n    padding: 25px 0;\r\n    transition: padding 0.3s;\r\n    border: none;\r\n  }\r\n  .navbar-custom .navbar-brand {\r\n    font-size: 2em;\r\n    transition: all 0.3s;\r\n  }\r\n  .navbar-custom .navbar-nav > .active > a {\r\n    border-radius: 3px;\r\n  }\r\n}\r\n @media (min-width: 768px) {\r\n  .navbar-custom.affix {\r\n    background-color: #222222;\r\n    padding: 10px 0;\r\n  }\r\n  .navbar-custom.affix .navbar-brand {\r\n    font-size: 1.5em;\r\n  }\r\n}\r\n section {\r\n  padding: 100px 0;\r\n}\r\n section h2.section-heading {\r\n  font-size: 40px;\r\n  margin-top: 0;\r\n  margin-bottom: 15px;\r\n}\r\n .cont{\r\n  margin-top: -6rem;\r\n}\r\n .conts{\r\n  margin-bottom: -6rem;\r\n}\r\n .cen{\r\n  margin-top: -4rem;\r\n}\r\n section h3.section-subheading {\r\n  font-size: 16px;\r\n  font-family: \"Droid Serif\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  text-transform: none;\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  margin-bottom: 75px;\r\n}\r\n @media (min-width: 768px) {\r\n  section {\r\n    padding: 150px 0;\r\n  }\r\n}\r\n .service-heading {\r\n  margin: 15px 0;\r\n  text-transform: none;\r\n}\r\n .timeline {\r\n  list-style: none;\r\n  padding: 0;\r\n  position: relative;\r\n}\r\n .timeline:before {\r\n  top: 0;\r\n  bottom: 0;\r\n  position: absolute;\r\n  content: \"\";\r\n  width: 2px;\r\n  background-color: #f1f1f1;\r\n  left: 40px;\r\n  margin-left: -1.5px;\r\n}\r\n .timeline > li {\r\n  margin-bottom: 50px;\r\n  position: relative;\r\n  min-height: 50px;\r\n}\r\n .timeline > li:before,\r\n.timeline > li:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n .timeline > li:after {\r\n  clear: both;\r\n}\r\n .timeline > li .timeline-panel {\r\n  width: 100%;\r\n  float: right;\r\n  padding: 0 20px 0 100px;\r\n  position: relative;\r\n  text-align: left;\r\n}\r\n .timeline > li .timeline-panel:before {\r\n  border-left-width: 0;\r\n  border-right-width: 15px;\r\n  left: -15px;\r\n  right: auto;\r\n}\r\n .timeline > li .timeline-panel:after {\r\n  border-left-width: 0;\r\n  border-right-width: 14px;\r\n  left: -14px;\r\n  right: auto;\r\n}\r\n .timeline > li .timeline-image {\r\n  left: 0;\r\n  margin-left: 0;\r\n  width: 80px;\r\n  height: 80px;\r\n  position: absolute;\r\n  z-index: 100;\r\n  background-color: #fed136;\r\n  color: white;\r\n  border-radius: 100%;\r\n  border: 7px solid #f1f1f1;\r\n  text-align: center;\r\n}\r\n .timeline > li .timeline-image h4 {\r\n  font-size: 10px;\r\n  margin-top: 12px;\r\n  line-height: 14px;\r\n}\r\n .timeline > li.timeline-inverted > .timeline-panel {\r\n  float: right;\r\n  text-align: left;\r\n  padding: 0 20px 0 100px;\r\n}\r\n .timeline > li.timeline-inverted > .timeline-panel:before {\r\n  border-left-width: 0;\r\n  border-right-width: 15px;\r\n  left: -15px;\r\n  right: auto;\r\n}\r\n .timeline > li.timeline-inverted > .timeline-panel:after {\r\n  border-left-width: 0;\r\n  border-right-width: 14px;\r\n  left: -14px;\r\n  right: auto;\r\n}\r\n .timeline > li:last-child {\r\n  margin-bottom: 0;\r\n}\r\n .timeline .timeline-heading h4 {\r\n  margin-top: 0;\r\n  color: inherit;\r\n}\r\n .timeline .timeline-heading h4.subheading {\r\n  text-transform: none;\r\n}\r\n .timeline .timeline-body > p,\r\n.timeline .timeline-body > ul {\r\n  margin-bottom: 0;\r\n}\r\n @media (min-width: 768px) {\r\n  .timeline:before {\r\n    left: 50%;\r\n  }\r\n  .timeline > li {\r\n    margin-bottom: 100px;\r\n    min-height: 100px;\r\n  }\r\n  .timeline > li .timeline-panel {\r\n    width: 41%;\r\n    float: left;\r\n    padding: 0 20px 20px 30px;\r\n    text-align: right;\r\n  }\r\n  .timeline > li .timeline-image {\r\n    width: 100px;\r\n    height: 100px;\r\n    left: 50%;\r\n    margin-left: -50px;\r\n  }\r\n  .timeline > li .timeline-image h4 {\r\n    font-size: 13px;\r\n    margin-top: 16px;\r\n    line-height: 18px;\r\n  }\r\n  .timeline > li.timeline-inverted > .timeline-panel {\r\n    float: right;\r\n    text-align: left;\r\n    padding: 0 30px 20px 20px;\r\n  }\r\n}\r\n @media (min-width: 992px) {\r\n  .timeline > li {\r\n    min-height: 150px;\r\n  }\r\n  .timeline > li .timeline-panel {\r\n    padding: 0 20px 20px;\r\n  }\r\n  .timeline > li .timeline-image {\r\n    width: 150px;\r\n    height: 150px;\r\n    margin-left: -75px;\r\n  }\r\n  .timeline > li .timeline-image h4 {\r\n    font-size: 18px;\r\n    margin-top: 30px;\r\n    line-height: 26px;\r\n  }\r\n  .timeline > li.timeline-inverted > .timeline-panel {\r\n    padding: 0 20px 20px;\r\n  }\r\n}\r\n @media (min-width: 1200px) {\r\n  .timeline > li {\r\n    min-height: 170px;\r\n  }\r\n  .timeline > li .timeline-panel {\r\n    padding: 0 20px 20px 100px;\r\n  }\r\n  .timeline > li .timeline-image {\r\n    width: 170px;\r\n    height: 170px;\r\n    margin-left: -85px;\r\n  }\r\n  .timeline > li .timeline-image h4 {\r\n    margin-top: 40px;\r\n  }\r\n  .timeline > li.timeline-inverted > .timeline-panel {\r\n    padding: 0 100px 20px 20px;\r\n  }\r\n}\r\n .team-member {\r\n  text-align: center;\r\n  margin-bottom: 50px;\r\n}\r\n .team-member img {\r\n  margin: 0 auto;\r\n  border: 7px solid white;\r\n}\r\n .team-member h4 {\r\n  margin-top: 25px;\r\n  margin-bottom: 0;\r\n  text-transform: none;\r\n}\r\n .team-member p {\r\n  margin-top: 0;\r\n}\r\n aside.clients img {\r\n  margin: 50px auto;\r\n}\r\n section#contact {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  background-color: #222222;\r\n  background-image: url('/assets/img/map-image.png');\r\n  background-repeat: no-repeat;\r\n  position: relative;\r\n  background-attachment: scroll;\r\n  background-position: center center;\r\n  background-size: cover;\r\n  -o-background-size: cover;\r\n}\r\n section#contact .section-heading {\r\n  color:black;\r\n  font-size: 50px;\r\n}\r\n section#contact .form-group {\r\n  margin-bottom: 25px;\r\n}\r\n section#contact .form-group input,\r\nsection#contact .form-group textarea {\r\n  padding: 20px;\r\n}\r\n section#contact .form-group input.form-control {\r\n  height: auto;\r\n}\r\n section#contact .form-group textarea.form-control {\r\n  height: 236px;\r\n}\r\n section#contact .form-control:focus {\r\n  border-color: #fed136;\r\n  box-shadow: none;\r\n}\r\n section#contact ::-webkit-input-placeholder {\r\n  font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n  color: #eeeeee;\r\n}\r\n section#contact :-moz-placeholder {\r\n  /* Firefox 18- */\r\n  font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n  color: #eeeeee;\r\n}\r\n section#contact ::-moz-placeholder {\r\n  /* Firefox 19+ */\r\n  font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n  color: #eeeeee;\r\n}\r\n section#contact :-ms-input-placeholder {\r\n  font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n  color: #eeeeee;\r\n}\r\n section#contact .text-danger {\r\n  color: #e74c3c;\r\n}\r\n ul.social-buttons {\r\n  margin-bottom: 0;\r\n}\r\n ul.social-buttons li a {\r\n  display: block;\r\n  background-color: #222222;\r\n  height: 40px;\r\n  width: 40px;\r\n  border-radius: 100%;\r\n  font-size: 20px;\r\n  line-height: 40px;\r\n  color: white;\r\n  outline: none;\r\n  transition: all 0.3s;\r\n}\r\n ul.social-buttons li a:hover,\r\nul.social-buttons li a:focus,\r\nul.social-buttons li a:active {\r\n  background-color: #fed136;\r\n}\r\n .btn:focus,\r\n.btn:active,\r\n.btn.active,\r\n.btn:active:focus {\r\n  outline: none;\r\n}\r\n .portfolio-modal .modal-dialog {\r\n  margin: 0;\r\n  height: 100%;\r\n  width: auto;\r\n}\r\n .portfolio-modal .modal-content {\r\n  border-radius: 0;\r\n  background-clip: border-box;\r\n  box-shadow: none;\r\n  border: none;\r\n  min-height: 100%;\r\n  padding: 100px 0;\r\n  text-align: center;\r\n}\r\n .portfolio-modal .modal-content h2 {\r\n  margin-bottom: 15px;\r\n  font-size: 3em;\r\n}\r\n .portfolio-modal .modal-content p {\r\n  margin-bottom: 30px;\r\n}\r\n .portfolio-modal .modal-content p.item-intro {\r\n  margin: 20px 0 30px;\r\n  font-family: \"Droid Serif\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  font-style: italic;\r\n  font-size: 16px;\r\n}\r\n .portfolio-modal .modal-content ul.list-inline {\r\n  margin-bottom: 30px;\r\n  margin-top: 0;\r\n}\r\n .portfolio-modal .modal-content img {\r\n  margin-bottom: 30px;\r\n}\r\n .portfolio-modal .close-modal {\r\n  position: absolute;\r\n  width: 75px;\r\n  height: 75px;\r\n  background-color: transparent;\r\n  top: 25px;\r\n  right: 25px;\r\n  cursor: pointer;\r\n}\r\n .portfolio-modal .close-modal:hover {\r\n  opacity: 0.3;\r\n}\r\n .portfolio-modal .close-modal .lr {\r\n  height: 75px;\r\n  width: 1px;\r\n  margin-left: 35px;\r\n  background-color: #222222;\r\n  transform: rotate(45deg);\r\n  -ms-transform: rotate(45deg);\r\n  /* IE 9 */\r\n  -webkit-transform: rotate(45deg);\r\n  /* Safari and Chrome */\r\n  z-index: 1051;\r\n}\r\n .portfolio-modal .close-modal .lr .rl {\r\n  height: 75px;\r\n  width: 1px;\r\n  background-color: #222222;\r\n  transform: rotate(90deg);\r\n  -ms-transform: rotate(90deg);\r\n  /* IE 9 */\r\n  -webkit-transform: rotate(90deg);\r\n  /* Safari and Chrome */\r\n  z-index: 1052;\r\n}\r\n .portfolio-modal .modal-backdrop {\r\n  opacity: 0;\r\n  display: none;\r\n}\r\n ::-moz-selection {\r\n  text-shadow: none;\r\n  background: #fed136;\r\n}\r\n ::selection {\r\n  text-shadow: none;\r\n  background: #fed136;\r\n}\r\n img::-moz-selection {\r\n  background: transparent;\r\n}\r\n img::selection {\r\n  background: transparent;\r\n}\r\n img::-moz-selection {\r\n  background: transparent;\r\n}\r\n .main{\r\n  background-image: url('/assets/img/about/a.jpg');\r\n  background-repeat: no-repeat;\r\n  background-attachment: scroll;\r\n  background-position: center center;\r\n  background-size: cover;\r\n  -o-background-size: cover;\r\n  text-align: center;\r\n  color: black;\r\n  \r\n  \r\n}\r\n .main1{\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  position: relative;\r\n  /* background-image: url('slider.imagePath'); */\r\n  background-repeat: no-repeat;\r\n  background-attachment: scroll;\r\n  background-position: center center;\r\n  background-size: cover;\r\n  -o-background-size: cover;\r\n  color: antiquewhite;\r\n  padding:0;\r\n  margin: 0;\r\n \r\n  \r\n\r\n}\r\n .intro-text {\r\n  padding-top: 100px;\r\n  padding-bottom: 30px;\r\n  margin-top:20px;\r\n}\r\n .intro-text .intro-lead-in {\r\n  font-family: \"Droid Serif\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  font-style: italic;\r\n  font-size: 22px;\r\n  line-height: 22px;\r\n  margin-bottom: 25px;\r\n}\r\n .intro-text .intro-heading {\r\n  font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n  font-size: 50px;\r\n  line-height: 50px;\r\n  margin-bottom: 25px;\r\n  \r\n}\r\n @media (min-width: 768px) {\r\n   .intro-text {\r\n    padding-top: 300px;\r\n    padding-bottom: 200px;\r\n  }\r\n   .intro-text .intro-lead-in {\r\n    font-family: \"Droid Serif\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    font-style: italic;\r\n    font-size: 40px;\r\n    line-height: 40px;\r\n    margin-bottom: 25px;\r\n  }\r\n   .intro-text .intro-heading {\r\n    font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    font-size: 75px;\r\n    line-height: 75px;\r\n    margin-bottom: 50px;\r\n  }\r\n}\r\n img.mage{\r\n  height: 42rem;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n   <div class=\" container main1\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <ngb-carousel>\n                    <ng-template ngbSlide *ngFor=\"let slider of sliders\">\n                        <img class=\" mage img-fluid mx-auto d-block\" [src]=\"slider.imagePath\" alt=\"Random first slide\" width=\"100%\" >\n                        <div class=\"carousel-caption\">\n                            <h3>{{slider.label}}</h3>\n                            <p >{{slider.text}}</p>\n                        </div>\n                    </ng-template>\n                </ngb-carousel>\n            </div>\n        </div>\n    </div>\n\n  <!-- About Section -->\n  <section id=\"services\" class=\"bg-light-gray\">\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col-lg-12 text-center\">\n                  <h2 class=\"section-heading\">About</h2>\n                  <h3 class=\"section-subheading text-muted\">Find Interesting Places</h3>\n              </div>\n          </div>\n          <div class=\"row text-center\">\n              <div class=\"col-md-4\">\n                  <span class=\"fa-stack fa-4x\">\n                      <i class=\"fa fa-circle fa-stack-2x text-primary\"></i>\n                      <i class=\"fa fa-shopping-cart fa-stack-1x fa-inverse\"></i>\n                  </span>\n                  <h4 class=\"service-heading\">FUN</h4>\n                  <p class=\"text-muted\">Are you bored and need to search for a lovely place to relax! Naija search is the spot for you!Get ready for excitement</p>\n              </div>\n              <div class=\"col-md-4\">\n                  <span class=\"fa-stack fa-4x\">\n                      <i class=\"fa fa-circle fa-stack-2x text-primary\"></i>\n                      <i class=\"fa fa-laptop fa-stack-1x fa-inverse\"></i>\n                  </span>\n                  <h4 class=\"service-heading\">NAIJA TOH BAD</h4>\n                  <p class=\"text-muted\">Are you new to an environment and need to be up and running? You are tired of asking for directions; Naija Search is here to answer your questions!!!.</p>\n              </div>\n              <div class=\"col-md-4\">\n                  <span class=\"fa-stack fa-4x\">\n                      <i class=\"fa fa-circle fa-stack-2x text-primary\"></i>\n                      <i class=\"fa fa-lock fa-stack-1x fa-inverse\"></i>\n                  </span>\n                  <h4 class=\"service-heading\">News/24</h4>\n                  <p class=\"text-muted\">Home alone?Want to check that your friend picture out news about a celebrity? Naija Search wey shaprapra is for you</p>\n              </div>\n          </div>\n      </div>\n  </section>\n\n \n  <!-- About Section -->\n  <section id=\"about\">\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col-lg-12 text-center\">\n                  <h2 class=\"section-heading\">REVIEWS</h2>\n                  <h3 class=\"section-subheading text-muted\">A little review from our users.</h3>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-lg-12\">\n                  <ul class=\"timeline\">\n                      <li class=\"list-inline-item\">\n                          <div class=\"timeline-image\">\n                              <img class=\"rounded-circle img-fluid\" src=\"assets/img/logos/th.jpg\" alt=\"\">\n                          </div>\n                          <div class=\"timeline-panel\">\n                              <div class=\"timeline-heading\">\n                                  <h4></h4>\n                                  <h4 class=\"subheading\">John Paul</h4>\n                              </div>\n                              <div class=\"timeline-body\">\n                                  <p class=\"text-muted\">I just got to a new area and I was tired of asking people on the road where I was going and to even check out pictures easily!!!I came across naija search and wow, a great solution to all my problems.</p>\n                              </div>\n                          </div>\n                      </li>\n                      <li class=\"timeline-inverted\">\n                          <div class=\"timeline-image\">\n                              <img class=\"rounded-circle img-fluid\" src=\"assets/img/about/fil.jpg\" alt=\"\">\n                          </div>\n                          <div class=\"timeline-panel\">\n                              <div class=\"timeline-heading\">\n                                  <h4></h4>\n                                  <h4 class=\"subheading\">An Agency is Born</h4>\n                              </div>\n                              <div class=\"timeline-body\">\n                                  <p class=\"text-muted\">Best search site I have come across. Not only does it get me my needed information, I get to see pictures of what I am looking for.</p>\n                              </div>\n                          </div>\n                      </li>\n                      <li class=\"list-inline-item\">\n                          <div class=\"timeline-image\">\n                              <img class=\"rounded-circle img-fluid\" src=\"assets/img/logos/n.jpg\" alt=\"\">\n                          </div>\n                          <div class=\"timeline-panel\">\n                              <div class=\"timeline-heading\">\n                                  <h4></h4>\n                                  <h4 class=\"subheading\">Transition to Full Service</h4>\n                              </div>\n                              <div class=\"timeline-body\">\n                                  <p class=\"text-muted\">Best search site I have come across. Not only does it get me my needed information, I get to see pictures of what I am looking for.</p>\n                              </div>\n                          </div>\n                      </li>\n                      <li class=\"timeline-inverted\">\n                          <div class=\"timeline-image\">\n                              <h4>Be Part\n                                  <br>Of Our\n                                  <br>Story!</h4>\n                          </div>\n                      </li>\n                  </ul>\n              </div>\n          </div>\n      </div>\n  </section>\n\n  <!-- Team Section -->\n  <section id=\"team\" class=\"bg-light-gray\">\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col-lg-12 text-center\">\n                  <h2 class=\"section-heading\">Our Amazing Team</h2>\n                  <h3 class=\"section-subheading text-muted\">Welcome !!! Meet the genius behind Naija Search.</h3>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-sm-4\">\n                  <div class=\"team-member\">\n                      <img src=\"assets/img/logos/Men.jpg\" class=\"img-fluid rounded-circle\" alt=\"\">\n                      <h4>Kay Ogun</h4>\n                      <p class=\"text-muted\">Lead Designer</p>\n                      <ul class=\"list-inline social-buttons\">\n                          <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n                          </li>\n                          <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n                          </li>\n                          <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n                          </li>\n                      </ul>\n                  </div>\n              </div>\n              <div class=\"col-sm-4\">\n                  <div class=\"team-member\">\n                      <img src=\"assets/img/s.jpg\" class=\"img-fluid rounded-circle\" alt=\"\">\n                      <h4>Feyi Anon</h4>\n                      <p class=\"text-muted\">Lead Marketer</p>\n                      <ul class=\"list-inline social-buttons\">\n                          <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n                          </li>\n                          <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n                          </li>\n                          <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n                          </li>\n                      </ul>\n                  </div>\n              </div>\n              <div class=\"col-sm-4\">\n                  <div class=\"team-member\">\n                      <img src=\"assets/img/logos/the.jpg\" class=\"img-fluid rounded-circle\" alt=\"\">\n                      <h4>Diana Feyi</h4>\n                      <p class=\"text-muted\">Lead Developer</p>\n                      <ul class=\"list-inline social-buttons\">\n                          <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n                          </li>\n                          <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n                          </li>\n                          <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n                          </li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </section>\n\n \n  <!-- Contact Section -->\n  <section id=\"contact\">\n      <div class=\"container conts\">\n          <div class=\" cont row\">\n              <div class=\"col-lg-12 text-center\">\n                  <h2 class=\"section-heading text-white\">Contact Us</h2>\n                  <h3 class=\"section-subheading text-blue\">Send us a message today</h3>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-lg-12\">\n                  <form name=\"sentMessage\" id=\"contactForm\" novalidate>\n                      <div class=\"row\">\n                          <div class=\"col-md-6\">\n                              <div class=\"form-group\">\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"Your Name *\" id=\"name\" required data-validation-required-message=\"Please enter your name.\">\n                                  <p class=\"help-block text-danger\"></p>\n                              </div>\n                              <div class=\"form-group\">\n                                  <input type=\"email\" class=\"form-control\" placeholder=\"Your Email *\" id=\"email\" required data-validation-required-message=\"Please enter your email address.\">\n                                  <p class=\"help-block text-danger\"></p>\n                              </div>\n                              <div class=\"form-group\">\n                                  <input type=\"tel\" class=\"form-control\" placeholder=\"Your Phone *\" id=\"phone\" required data-validation-required-message=\"Please enter your phone number.\">\n                                  <p class=\"help-block text-danger\"></p>\n                              </div>\n                          </div>\n                          <div class=\"col-md-6\">\n                              <div class=\"form-group\">\n                                  <textarea class=\"form-control\" placeholder=\"Your Message *\" id=\"message\" required data-validation-required-message=\"Please enter a message.\"></textarea>\n                                  <p class=\"help-block text-danger\"></p>\n                              </div>\n                          </div>\n                          <div class=\"clearfix\"></div>\n                          <div class=\"col-lg-12 text-center\">\n                              <div id=\"success\"></div>\n                              <button type=\"submit\" class=\"btn btn-xl\">Send Message</button>\n                          </div>\n                      </div>\n                  </form>\n              </div>\n          </div>\n      </div>\n  "

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.sliders = [];
        this.sliders.push({
            imagePath: 'assets/img/about/a.jpg',
            label: 'Welcome To Naija Search!',
            text: 'It`s Nice To Meet You.'
        }, {
            imagePath: 'assets/img/about/5.jpg',
            label: 'Welcome To Naija Search!',
            text: 'It`s Nice To Meet You.'
        }, {
            imagePath: 'assets/img/about/Dance.jpg',
            label: 'Welcome To Naija Search!',
            text: 'It`s Nice To Meet You.'
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/square/square.component.css":
/*!*********************************************!*\
  !*** ./src/app/square/square.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top{\r\n  padding-top: 6rem;\r\n}\r\n\r\n.name{\r\n  text-transform: uppercase;\r\n}\r\n\r\n.btn-primary {\r\n  color: white;\r\n  background-color: #fed136;\r\n  border-color: #fed136;\r\n  font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n}\r\n\r\n.btn-primary:hover,\r\n.btn-primary:focus,\r\n.btn-primary:active,\r\n.btn-primary.active,\r\n.open .dropdown-toggle.btn-primary {\r\n  color: white;\r\n  background-color: #fec503;\r\n  border-color: #f6bf01;\r\n}\r\n\r\n.btn-primary:active,\r\n.btn-primary.active,\r\n.open .dropdown-toggle.btn-primary {\r\n  background-image: none;\r\n}\r\n\r\n.main{\r\n  max-height: 50%;\r\n  background-color: tomato;\r\n}\r\n\r\n.rand{\r\n  margin-bottom:13rem;\r\n  margin-top: 2rem;\r\n}"

/***/ }),

/***/ "./src/app/square/square.component.html":
/*!**********************************************!*\
  !*** ./src/app/square/square.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"mt-5 top\">\n  <div class=\"container\">\n    <h1 class=\"text-center name \">Welcome to {{title}}</h1>\n      <p class=\"pt-3\">\n        Check out your Favourite Places\n      </p>\n      <div class=\"text-white row\">\n        <div class=\"col-sm col-md-6\">\n          <form ng-submit=\"search()\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Cuisines name\" ng-model=\"value\">\n              </div>\n            </div>\n            <input class=\"btn btn-primary\" type=\"submit\" value=\"Submit\" />\n          </form>\n        </div>\n      </div>\n    </div>\n</section>\n<section class=\"bg-secondary\"> \n  <div class=\"container \">\n   <p class=\"text-center name rand\">\n     View Your Searches\n   </p>\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/square/square.component.ts":
/*!********************************************!*\
  !*** ./src/app/square/square.component.ts ***!
  \********************************************/
/*! exports provided: SquareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquareComponent", function() { return SquareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SquareComponent = /** @class */ (function () {
    function SquareComponent() {
        this.title = 'Naija Search';
    }
    SquareComponent.prototype.ngOnInit = function () {
    };
    SquareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-square',
            template: __webpack_require__(/*! ./square.component.html */ "./src/app/square/square.component.html"),
            styles: [__webpack_require__(/*! ./square.component.css */ "./src/app/square/square.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SquareComponent);
    return SquareComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ewaoluwa\tutorials\search\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map