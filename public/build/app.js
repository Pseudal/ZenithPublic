"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/Main.js":
/*!************************!*\
  !*** ./assets/Main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _stylesheets_main_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylesheets/main.sass */ "./assets/stylesheets/main.sass");
/* harmony import */ var _components_home_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_home.jsx */ "./assets/components/_home.jsx");
/* harmony import */ var _components_Workpage_workpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Workpage/_workpage */ "./assets/components/Workpage/_workpage.jsx");
/* harmony import */ var _components_WorkpageClient_workpageClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/WorkpageClient/_workpageClient */ "./assets/components/WorkpageClient/_workpageClient.jsx");
/* harmony import */ var _components_Contactpage_contactpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Contactpage/_contactpage */ "./assets/components/Contactpage/_contactpage.jsx");
/* harmony import */ var _components_Clientpage_clientpage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Clientpage/_clientpage */ "./assets/components/Clientpage/_clientpage.jsx");
/* harmony import */ var _components_Projectpage_projectpage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Projectpage/_projectpage */ "./assets/components/Projectpage/_projectpage.jsx");
/* harmony import */ var _components_SearchPage_SearchPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/SearchPage/_SearchPage */ "./assets/components/SearchPage/_SearchPage.jsx");
/* harmony import */ var _components_SearchPage2_SearchPage2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/SearchPage2/_SearchPage2 */ "./assets/components/SearchPage2/_SearchPage2.jsx");
/* harmony import */ var _stylesheets_bulma_grid_columns_sass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stylesheets/bulma/grid/columns.sass */ "./assets/stylesheets/bulma/grid/columns.sass");
/* harmony import */ var _stylesheets_bulma_helpers_spacing_sass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stylesheets/bulma/helpers/spacing.sass */ "./assets/stylesheets/bulma/helpers/spacing.sass");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/font.css */ "./assets/styles/font.css");
/* harmony import */ var _styles_loader_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles/loader.css */ "./assets/styles/loader.css");
/* harmony import */ var _stylesheets_pagination_less__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./stylesheets/pagination.less */ "./assets/stylesheets/pagination.less");



















var Main = function Main() {
  var Wrapper = function Wrapper(_ref) {
    var children = _ref.children;
    var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useLocation)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_home_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    exact: true,
    path: "/projets/:nbr",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Workpage_workpage__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    exact: true,
    path: "/clients/:nbr",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_WorkpageClient_workpageClient__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    exact: true,
    path: "/contact",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Contactpage_contactpage__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    exact: true,
    path: "/client/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Clientpage_clientpage__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    exact: true,
    path: "/projet/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Projectpage_projectpage__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    exact: true,
    path: "/search/:info",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SearchPage_SearchPage__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    exact: true,
    path: "/searchcat/:type/:info/:name",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SearchPage2_SearchPage2__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.js */ "./assets/Main.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");


window.React = (react__WEBPACK_IMPORTED_MODULE_0___default());

var container = document.getElementById('root');
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_js__WEBPACK_IMPORTED_MODULE_1__["default"], null));

/***/ }),

/***/ "./assets/components/Clientpage/_clientpage.jsx":
/*!******************************************************!*\
  !*** ./assets/components/Clientpage/_clientpage.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../_navbar */ "./assets/components/_navbar.jsx");
/* harmony import */ var _clientpageOne__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_clientpageOne */ "./assets/components/Clientpage/_clientpageOne.jsx");
/* harmony import */ var _clientpageTwo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_clientpageTwo */ "./assets/components/Clientpage/_clientpageTwo.jsx");
/* harmony import */ var _clientpageThree__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_clientpageThree */ "./assets/components/Clientpage/_clientpageThree.jsx");
/* harmony import */ var _clientpageFour__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_clientpageFour */ "./assets/components/Clientpage/_clientpageFour.jsx");
/* harmony import */ var _clientpageFive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_clientpageFive */ "./assets/components/Clientpage/_clientpageFive.jsx");
/* harmony import */ var _clientpageSix__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_clientpageSix */ "./assets/components/Clientpage/_clientpageSix.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");
/* harmony import */ var _clientpage6_5__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_clientpage6_5 */ "./assets/components/Clientpage/_clientpage6_5.jsx");
/* harmony import */ var _styles_loader_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../styles/loader.css */ "./assets/styles/loader.css");
/* harmony import */ var _Homepage_miniFooter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../Homepage/_miniFooter */ "./assets/components/Homepage/_miniFooter.jsx");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function Clientpage() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_25__.useParams)(),
    id = _useParams.id;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoaded = _useState4[0],
    setIsLoaded = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isLoadedImg = _useState6[0],
    setIsLoadedImg = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isLoadedNextPrev = _useState8[0],
    setIsLoadedNextPrev = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isImgReady = _useState10[0],
    setImgReady = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    items = _useState12[0],
    setItems = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    images = _useState14[0],
    setImages = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    header = _useState16[0],
    setHeader = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    preci = _useState18[0],
    setPreci = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    second = _useState20[0],
    setSecond = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)([]),
    _useState22 = _slicedToArray(_useState21, 2),
    NextPrev = _useState22[0],
    setNextPrev = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)([]),
    _useState24 = _slicedToArray(_useState23, 2),
    Project = _useState24[0],
    setProject = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    isLoadedProject = _useState26[0],
    setIsLoadedProject = _useState26[1];
  if (id) {
    (0,react__WEBPACK_IMPORTED_MODULE_20__.useEffect)(function () {
      fetch("/api/clients/".concat(id), {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (result) {
        setIsLoaded(true);
        setItems(result);
        //console.log(result);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      function (error) {
        setIsLoaded(true);
        setError(error);
      });
      fetch("/getImagesClient/".concat(id), {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (result) {
        var thisRes = JSON.parse(result);
        setIsLoadedImg(true);
        setImages(JSON.parse(result));
        //console.log(thisRes)
        if (thisRes) {
          for (var i = 0; i < thisRes.length; i++) {
            // console.log(thisRes[i])
            // console.log(i)
            if (thisRes[i].header) setHeader(thisRes[i]);
            if (thisRes[i].imageprecision) setPreci(thisRes[i]);
            if (thisRes[i].secondaire) setSecond(thisRes[i]);
            // if(images[i].visible)
            // 	setDisplay(...images[i])
            if (thisRes.length - 1 == i) {
              setImgReady(true);
            }
          }
        }
        if (thisRes.length == 0) {
          setImgReady(true);
        }
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      function (error) {
        setIsLoaded(true);
        setError(error);
        console.log(error);
      });
      fetch("/NexPrev/".concat(id), {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (result) {
        var Next = JSON.parse(result[0]);
        var Prev = JSON.parse(result[1]);
        if (Next && Prev) {
          setNextPrev([Next, Prev]);
          if (NextPrev) {
            console.log(NextPrev);
            setIsLoadedNextPrev(true);
          }
        }
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      function (error) {
        setIsLoaded(true);
        setError(error);
        console.log(error);
      });
      fetch("/gettAllProjectByClient/".concat(id), {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (result) {
        setIsLoadedProject(true);
        setProject(result);
        console.log(result);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      function (error) {
        setIsLoaded(true);
        setError(error);
      });
    }, []);
  }
  if (error) {
    return /*#__PURE__*/React.createElement("div", null, "Error: ", error.message);
  } else if (!isLoaded || !isImgReady || !isLoadedNextPrev || !isLoadedProject || document.readyState !== 'complete') {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
      id: "ReactLoader",
      width: "200",
      height: "200",
      viewBox: "0 0 100 100"
    }, /*#__PURE__*/React.createElement("polyline", {
      className: "line-cornered stroke-still",
      points: "0,0 100,0 100,100",
      strokeWidth: "10",
      fill: "none"
    }), /*#__PURE__*/React.createElement("polyline", {
      className: "line-cornered stroke-still",
      points: "0,0 0,100 100,100",
      strokeWidth: "10",
      fill: "none"
    }), /*#__PURE__*/React.createElement("polyline", {
      className: "line-cornered stroke-animation",
      points: "0,0 100,0 100,100",
      strokeWidth: "10",
      fill: "none"
    }), /*#__PURE__*/React.createElement("polyline", {
      className: "line-cornered stroke-animation",
      points: "0,0 0,100 100,100",
      strokeWidth: "10",
      fill: "none"
    })));
  } else {
    console.log("items");
    console.log(items);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_navbar__WEBPACK_IMPORTED_MODULE_13__["default"], null), /*#__PURE__*/React.createElement(_clientpageOne__WEBPACK_IMPORTED_MODULE_14__["default"], {
      data: items
    }), /*#__PURE__*/React.createElement(_clientpageTwo__WEBPACK_IMPORTED_MODULE_15__["default"], {
      data: items
    }), /*#__PURE__*/React.createElement(_clientpageThree__WEBPACK_IMPORTED_MODULE_16__["default"], {
      data: second
    }), /*#__PURE__*/React.createElement(_clientpageFour__WEBPACK_IMPORTED_MODULE_17__["default"], {
      preci: preci,
      data2: items
    }), /*#__PURE__*/React.createElement(_clientpageFive__WEBPACK_IMPORTED_MODULE_18__["default"], {
      images: images
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        backgroundImage: "url(/zenith/images/6Wvemm3K.jpeg)"
      },
      className: "demiblocOpacity"
    }, /*#__PURE__*/React.createElement("div", {
      className: "containerCenter marginTopS",
      style: {
        marginTop: "0"
      }
    }, /*#__PURE__*/React.createElement("h4", {
      className: "medium centerText"
    }, "UN T\xC9MOIGNAGE"), /*#__PURE__*/React.createElement("div", {
      className: "light centerText",
      dangerouslySetInnerHTML: {
        __html: items.temoignage
      }
    }))), /*#__PURE__*/React.createElement(_clientpage6_5__WEBPACK_IMPORTED_MODULE_22__["default"], {
      item: Project
    }), /*#__PURE__*/React.createElement(_clientpageSix__WEBPACK_IMPORTED_MODULE_19__["default"], {
      data: items,
      np: NextPrev
    }), /*#__PURE__*/React.createElement(_Homepage_miniFooter__WEBPACK_IMPORTED_MODULE_24__["default"], {
      loaded: true
    }));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clientpage);

/***/ }),

/***/ "./assets/components/Clientpage/_clientpage6_5.jsx":
/*!*********************************************************!*\
  !*** ./assets/components/Clientpage/_clientpage6_5.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/react/swiper-react.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");










function Clientpage6_5(item) {
  var slider = [];
  console.log(item);
  if (item.item.length > 0) {
    item.item.forEach(function (element) {
      console.log(element);
      var newSlider = undefined;
      if (element.header) {
        newSlider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
          key: element.id,
          className: "swiperSlide2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
          href: "/projet/".concat(element.id),
          style: {
            textDecoration: "none",
            color: "white"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
          className: "boxCr\xE9ation",
          onMouseOut: function onMouseOut(e) {
            return RemoveBlurDetail(e);
          },
          onMouseOver: function onMouseOver(e) {
            return BlurDetail(e);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
          style: {
            width: "200px",
            height: "100%",
            position: "absolute"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
          style: {
            pointerEvents: "none",
            display: "none",
            width: "200px",
            textAlign: "center",
            position: "absolute",
            left: "0px",
            top: "200px"
          }
        }, element.mission)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("img", {
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
          },
          src: "/images/imageprojet/".concat(element.header),
          alt: ""
        }))));
      } else {
        newSlider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
          key: element.id,
          className: "swiperSlide2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
          href: "/projet/".concat(element.id),
          style: {
            textDecoration: "none",
            color: "white"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
          className: "boxCr\xE9ation",
          onMouseOut: function onMouseOut(e) {
            return RemoveBlurDetail(e);
          },
          onMouseOver: function onMouseOver(e) {
            return BlurDetail(e);
          },
          style: {
            background: "#02111D"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
          style: {
            width: "200px",
            height: "100%",
            position: "absolute"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
          style: {
            pointerEvents: "none",
            display: "none",
            width: "200px",
            textAlign: "center",
            position: "absolute",
            left: "0px",
            top: "200px"
          }
        }, element.mission)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("img", {
          style: {
            width: "100%",
            height: "100%",
            objectFit: "contain"
          },
          src: "/zenith/autre/noImg.png",
          alt: ""
        }))));
      }
      slider.push(newSlider);
    });
  } else {
    slider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h1", {
      className: "titreA medium letterSpacing marginStop"
    }, "rien a voir");
  }
  function BlurDetail(e) {
    console.log(e);
    e.target.style.backdropFilter = "blur(4px)";
    e.target.children[0].style.display = "inline";
  }
  function RemoveBlurDetail(e) {
    console.log(e);
    e.target.style.backdropFilter = "blur(0)";
    e.target.children[0].style.display = "none";
  }
  if (slider.length > 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_parallax__WEBPACK_IMPORTED_MODULE_7__.Parallax, {
      bgImage: "/zenith/images/Z1zIJCKk.jpeg",
      strength: 800
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      className: "",
      style: {
        paddingTop: '50px',
        paddingBottom: '75px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      className: "wrapper2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h3", {
      className: "titreA medium letterSpacing marginStop mb-5"
      //   data-aos="fade-up"
      //   data-aos-duration="1000"
    }, "PROJETS LI\xC9S"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
      style: {
        height: '500px'
      },
      slidesPerView: 1,
      centeredSlides: false,
      spaceBetween: 0,
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 1
        }
      },
      className: "swiper2"
      //   data-aos="fade-up"
      //   data-aos-duration="1000"
    }, slider), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null))))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clientpage6_5);

/***/ }),

/***/ "./assets/components/Clientpage/_clientpageFive.jsx":
/*!**********************************************************!*\
  !*** ./assets/components/Clientpage/_clientpageFive.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");
/* harmony import */ var _stylesheets_bulma_elements_container_sass__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../stylesheets/bulma/elements/container.sass */ "./assets/stylesheets/bulma/elements/container.sass");
/* harmony import */ var yet_another_react_lightbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! yet-another-react-lightbox */ "./node_modules/yet-another-react-lightbox/dist/index.js");
/* harmony import */ var yet_another_react_lightbox_plugins_thumbnails__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! yet-another-react-lightbox/plugins/thumbnails */ "./node_modules/yet-another-react-lightbox/dist/plugins/thumbnails/index.js");
/* harmony import */ var yet_another_react_lightbox_plugins_thumbnails_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! yet-another-react-lightbox/plugins/thumbnails.css */ "./node_modules/yet-another-react-lightbox/dist/plugins/thumbnails/thumbnails.css");
/* harmony import */ var yet_another_react_lightbox_styles_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! yet-another-react-lightbox/styles.css */ "./node_modules/yet-another-react-lightbox/dist/styles.css");













function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function ClientpageFive(images) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_13___default().useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var arrayImage = [];
  for (var index = 0; index < images.images.length; index++) {
    var element = images.images[index];
    if (element.visible == false) {
      continue;
    }
    var item = {
      src: "/images/imageclient/".concat(element.image)
    };
    arrayImage.push(item);
  }
  if (arrayImage.length > 0) {
    console.log("first");
    console.log(arrayImage);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement((react__WEBPACK_IMPORTED_MODULE_13___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_parallax__WEBPACK_IMPORTED_MODULE_14__.Parallax, {
      bgImage: "/zenith/images/Z1zIJCKk.jpeg",
      strength: 800
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "columns is-centered",
      style: {
        height: "90%",
        width: "80%",
        paddingTop: "50px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "column is-one-third",
      style: _defineProperty({
        background: "#02111D",
        padding: "0"
      }, "padding", "0")
    }, arrayImage[0] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      className: " ",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        padding: "0"
      },
      src: arrayImage[0].src,
      alt: ""
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      style: {
        width: "50%"
      },
      src: "/zenith/autre/noImg.png",
      alt: ""
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "column is-one-third columns is-multiline mx-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "column is-full my-5",
      style: {
        background: "#02111D",
        padding: "0"
      }
    }, arrayImage[1] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      className: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        padding: "0"
      },
      src: arrayImage[1].src,
      alt: ""
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      style: {
        width: "50%"
      },
      src: "/zenith/autre/noImg.png",
      alt: ""
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "column is-full my-5",
      style: {
        background: "#02111D",
        padding: "0"
      }
    }, arrayImage[2] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      className: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        padding: "0"
      },
      src: arrayImage[2].src,
      alt: ""
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      style: {
        width: "50%"
      },
      src: "/zenith/autre/noImg.png",
      alt: ""
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "column is-one-third is-mobile",
      style: {
        background: "#02111D",
        padding: "0"
      }
    }, arrayImage[3] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      className: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        padding: "0"
      },
      src: arrayImage[3].src,
      alt: ""
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      style: {
        width: "50%"
      },
      src: "/zenith/autre/noImg.png",
      alt: ""
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "columns is-mobile is-centered mt-5-fullhd",
      style: {
        position: "absolute",
        bottom: "25px",
        width: "101%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
      onClick: function onClick() {
        return setOpen(true);
      },
      className: "btnS center light letterSpacingM mb-6 mt-0"
    }, "EN VOIR +")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(yet_another_react_lightbox__WEBPACK_IMPORTED_MODULE_19__["default"], {
      open: open,
      close: function close() {
        return setOpen(false);
      },
      plugins: [yet_another_react_lightbox_plugins_thumbnails__WEBPACK_IMPORTED_MODULE_20__["default"]],
      slides: arrayImage
    }))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClientpageFive);

/***/ }),

/***/ "./assets/components/Clientpage/_clientpageFour.jsx":
/*!**********************************************************!*\
  !*** ./assets/components/Clientpage/_clientpageFour.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");





function ClientpageFour(_ref) {
  var preci = _ref.preci,
    data2 = _ref.data2;
  console.log(preci);
  if (data2.elementprecision) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        backgroundImage: "url(/zenith/images/6Wvemm3K.jpeg)",
        height: "1100px"
      },
      className: "background"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "",
      style: {
        height: "1100px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "wrapper2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "containerCenterA"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "parent21 marginTop"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "marginTop2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      className: "light letterSpacingS"
    }, "\xC9L\xC9MENTS DE PR\xC9CISION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "light containerCenterClient text-h5",
      style: {
        textTransform: 'uppercase'
      },
      dangerouslySetInnerHTML: {
        __html: data2.elementprecision
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: " boxClient",
      style: {
        height: '800px',
        width: "600px"
      }
    }, preci.image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      className: " contain",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      src: "/images/imageclient/" + preci.image,
      alt: ""
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      style: {
        width: "50%"
      },
      src: "/zenith/autre/noImg.png",
      alt: ""
    })))))))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClientpageFour);

/***/ }),

/***/ "./assets/components/Clientpage/_clientpageOne.jsx":
/*!*********************************************************!*\
  !*** ./assets/components/Clientpage/_clientpageOne.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");






function ClientpageOne(data) {
  console.log(data);
  aos__WEBPACK_IMPORTED_MODULE_2___default().init();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "background1",
    alt: "homepage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("video", {
    playsInline: true,
    autoPlay: true,
    muted: true,
    loop: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("source", {
    src: "/zenith/video/videobg.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "opacityBlue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "container center2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "containerCenter",
    "data-aos": "fade-up"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    src: "/zenith/images/bIO1r9F.png",
    alt: "Logo",
    width: 200,
    className: "center"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    style: {
      textTransform: 'uppercase'
    },
    className: "clientpageText",
    "data-aos": "fade-up"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h1", {
    className: "medium marginStop clientDetail"
  }, data.data.nomClient), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h6", {
    className: "light marginStop clientDetail"
  }, data.data.secteur.secteur), data.data.duree ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "light clientDetail"
  }, "DUR\xC9E PROJET : ", data.data.duree) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "light clientDetail"
  }, "DUR\xC9E PROJET : N/A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    style: {
      textDecoration: "none",
      color: "white"
    },
    to: "/searchcat/client/".concat(data.data.categorie[0].id, "/").concat(data.data.categorie[0].categorie)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    style: {
      display: "inline",
      textTransform: 'uppercase'
    },
    className: "light clientDetail2"
  }, data.data.categorie[0].categorie)), data.data.categorie[1] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    style: {
      display: "inline"
    },
    className: "light clientDetail2"
  }, "   |   "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    style: {
      textDecoration: "none",
      color: "white"
    },
    to: "/searchcat/client/".concat(data.data.categorie[1].id, "/").concat(data.data.categorie[1].categorie)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "light clientDetail2",
    style: {
      display: "inline",
      textTransform: 'uppercase',
      textDecoration: "none",
      color: "white"
    }
  }, data.data.categorie[1].categorie))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "containerCenter3",
    "data-aos": "fade-up"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h4", {
    style: {
      textTransform: 'uppercase'
    },
    className: "light letterSpacingS  discoverClient2"
  }, data.data.mission)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "containerCenter",
    "data-aos": "fade-up"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "light  discoverClient"
  }, "D\xC9COUVREZ"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "lineClient"
  })))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClientpageOne);

/***/ }),

/***/ "./assets/components/Clientpage/_clientpageSix.jsx":
/*!*********************************************************!*\
  !*** ./assets/components/Clientpage/_clientpageSix.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");





function ClientpageSix(_ref) {
  var data = _ref.data,
    np = _ref.np;
  aos__WEBPACK_IMPORTED_MODULE_1___default().init();
  if (np[0]) {
    if (np[0][0] == 'null') np[0][0] = false;
    if (np[0][1] == 'null') np[1][0] = false;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        backgroundImage: "url(/zenith/images/x9nes5V.jpg)"
      },
      className: "demiblocClient"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "demiblocOpacity"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "parentClientNextPrev"
    }, np[1][0] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ClientNextPrev1",
      onClick: function onClick() {
        location.href = "/client/" + np[1][0].id;
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
      className: "light rightText marginTopS"
    }, "PROJET PR\xC9C\xC9DENT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
      className: "rightText"
    }, np[1][0].nomClient), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
      className: "light rightText"
    }, np[1][0].mission)), np[0][0] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ClientNextPrev2",
      onClick: function onClick() {
        location.href = "/client/" + np[0][0].id;
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
      className: "light leftText marginTopS"
    }, "PROJET SUIVANT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
      className: "leftText"
    }, np[0][0].nomClient), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
      className: "light leftText"
    }, np[0][0].mission))))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClientpageSix);

/***/ }),

/***/ "./assets/components/Clientpage/_clientpageThree.jsx":
/*!***********************************************************!*\
  !*** ./assets/components/Clientpage/_clientpageThree.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");





function ClientpageThree(data) {
  console.log(data);
  if (data.data.image !== undefined) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "wrapperDarkBlueClient",
      style: {
        height: "800px",
        width: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "/images/imageclient/" + data.data.image,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    })));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClientpageThree);

/***/ }),

/***/ "./assets/components/Clientpage/_clientpageTwo.jsx":
/*!*********************************************************!*\
  !*** ./assets/components/Clientpage/_clientpageTwo.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");
// import React from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { Link } from "react-router-dom";
// import "../../styles/font.css"

// function ClientpageTwo(data) {
// 	AOS.init()
// 	if(data.data.enjeu || data.data.histoire || data.data.reponse){
// 		return (
// 			<>
// 				<div style={{backgroundImage: "url(/zenith/images/x9nes5V.jpg)"}} className='demiblocClient'>
// 					<div className='demiblocClientOpacity'>
// 						<div className='parentClient'>
// 							{data.data.enjeu &&
// 							<div className='clientGrid1'>
// 								<h4 className='light'>UNE ENJEU</h4>
// 								<div className='light containerCenterClient' dangerouslySetInnerHTML={{__html:data.data.enjeu}}></div>
// 							</div> 
// 							}

// 							{data.data.histoire &&
// 							<div className='clientGrid2'>
// 								<h4 className='light'>UNE HISTOIRE</h4>
// 								<div className='light containerCenterClient' dangerouslySetInnerHTML={{__html:data.data.histoire}}></div>
// 							</div>
// 							}

// 							{data.data.reponse &&
// 							<div className='clientGrid3'>
// 								<h4 className='light'>UNE REPONSE</h4>
// 								<div className='light containerCenterClient' dangerouslySetInnerHTML={{__html:data.data.reponse}}></div>
// 							</div>
// 							}

// 						</div>
// 					</div>
// 				</div>
// 			</>
// 		);
// 	}
// }



function ClientpageTwo(data) {
  if (data.data.enjeu || data.data.histoire || data.data.reponse) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        backgroundImage: "url(/zenith/images/6Wvemm3K.jpeg)",
        textAlign: "center"
      },
      className: "demiblocClient"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "columns"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "column columns is-centered is-12",
      style: {
        margin: "0",
        padding: "0"
      }
    }, data.data.enjeu && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "column is-centered is-4",
      style: {
        marginTop: "48px",
        marginRight: "auto",
        marginLeft: "auto"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
      className: "light"
    }, "UN ENJEU"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        width: "100%"
      },
      className: "light containerCenterClient px-6",
      dangerouslySetInnerHTML: {
        __html: data.data.enjeu
      }
    })), data.data.histoire && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "column is-centered is-4",
      style: {
        marginTop: "48px",
        marginRight: "auto",
        marginLeft: "auto"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
      className: "light"
    }, "UNE HISTOIRE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        width: "100%"
      },
      className: "light containerCenterClient columns is-vcentered is-centered px-6",
      dangerouslySetInnerHTML: {
        __html: data.data.histoire
      }
    })), data.data.reponse && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "column is-centered is-4",
      style: {
        marginTop: "48px",
        marginRight: "auto",
        marginLeft: "auto"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
      className: "light"
    }, "UNE REPONSE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        width: "100%"
      },
      className: "light containerCenterClient columns is-vcentered is-centered px-6",
      dangerouslySetInnerHTML: {
        __html: data.data.reponse
      }
    }))))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClientpageTwo);

/***/ }),

/***/ "./assets/components/Contactpage/_contactpage.jsx":
/*!********************************************************!*\
  !*** ./assets/components/Contactpage/_contactpage.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_navbar */ "./assets/components/_navbar.jsx");
/* harmony import */ var _rsButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_rsButton */ "./assets/components/_rsButton.jsx");
/* harmony import */ var _linesTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_linesTop */ "./assets/components/_linesTop.jsx");
/* harmony import */ var _linesBottom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_linesBottom */ "./assets/components/_linesBottom.jsx");
/* harmony import */ var _contactpageOne__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_contactpageOne */ "./assets/components/Contactpage/_contactpageOne.jsx");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");
/* harmony import */ var _Homepage_miniFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Homepage/_miniFooter */ "./assets/components/Homepage/_miniFooter.jsx");







function ContactPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_navbar__WEBPACK_IMPORTED_MODULE_0__["default"], null), /*#__PURE__*/React.createElement(_rsButton__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(_linesTop__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/React.createElement(_linesBottom__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/React.createElement(_contactpageOne__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/React.createElement(_Homepage_miniFooter__WEBPACK_IMPORTED_MODULE_6__["default"], {
    loaded: true
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactPage);

/***/ }),

/***/ "./assets/components/Contactpage/_contactpageOne.jsx":
/*!***********************************************************!*\
  !*** ./assets/components/Contactpage/_contactpageOne.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! sweetalert2-react-content */ "./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js");
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_26__);





















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function ContactPageOne() {
  var MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_26___default()((sweetalert2__WEBPACK_IMPORTED_MODULE_25___default()));
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)({
      email: '',
      name: '',
      message: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var handleInputChange = function handleInputChange(event) {
    event.persist();
    setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, event.target.name, event.target.value)));
    console.log(values.email);
  };
  var handleSubmit = function handleSubmit(e) {
    e.target.children[3].disabled = true;
    e.preventDefault();
    MySwal.fire({
      text: 'Un mail de confirmation vous a été envoyé',
      toast: true,
      icon: 'success',
      title: 'Bien reçu!',
      position: 'top-right',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: function didOpen(toast) {
        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_25___default().stopTimer));
        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_25___default().resumeTimer));
      }
    });
    var requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": values.email,
        "name": values.name,
        "message": values.message,
        "new": true
      })
    };
    // fetch('/sendemail', requestOptions)
    // 	.then(response => response.json())
    fetch("/sendemail", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": values.email,
        "name": values.name,
        "message": values.message,
        "new": true
      })
    }).then(function (res) {
      return res.json();
    }).then(function (result) {
      console.log(result);
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    function (error) {
      console.error(error);
    });
  };
  aos__WEBPACK_IMPORTED_MODULE_22___default().init();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement((react__WEBPACK_IMPORTED_MODULE_21___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "background1",
    alt: "homepage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("video", {
    playsInline: true,
    autoPlay: true,
    muted: true,
    loop: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("source", {
    src: "/zenith/video/videobg.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "opacityBlue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "container center2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "containerCenter",
    "data-aos": "fade-up"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("img", {
    src: "/zenith/images/bIO1r9F.png",
    alt: "Logo",
    width: 200,
    className: "center"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "columns is-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "is-3 column is-offset-4",
    style: {
      maxHeigh: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("h1", {
    className: "medium"
  }, "Contactez Nous"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("h6", {
    className: "light"
  }, "Pr\xE9sentez votre projet et laissez-nous vos informations de contact. Nous reviendrons vers vous dans un d\xE9lai de 24h.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "is-2 column"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("form", {
    onSubmit: handleSubmit,
    className: "is-7 column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "form__group field  divC1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("input", {
    type: "input",
    className: "form__field",
    placeholder: "Name",
    name: "name",
    id: "name",
    value: values.name,
    onChange: handleInputChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("label", {
    htmlFor: "name",
    className: "form__label"
  }, "Votre nom")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "form__group2 field divC2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("input", {
    type: "input",
    className: "form__field",
    placeholder: "email",
    name: "email",
    id: "email",
    value: values.email,
    onChange: handleInputChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("label", {
    htmlFor: "name",
    className: "form__label"
  }, "Votre adresse e-mail")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "textarea__group field divC3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("textarea", {
    type: "input",
    className: "form__field",
    placeholder: "message",
    name: "message",
    id: "message",
    value: values.message,
    onChange: handleInputChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("label", {
    htmlFor: "name",
    className: "form__label"
  }, "Votre besoin")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("button", {
    style: {
      marginTop: "50px"
    },
    type: "submit",
    className: "marginBottom2 btnS light letterSpacingM"
  }, "Envoyer"))))))));
}

//modifier a partir de la ligne 
// ajouter <form> <field> etc
// function contact pageOne ne fait rien ne declare rien etc.. 
//deifinir un etat d origine pour les zone de texte 
//ajouter un button quand clique prend les information dans les champs 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactPageOne);

/***/ }),

/***/ "./assets/components/Homepage/_action.jsx":
/*!************************************************!*\
  !*** ./assets/components/Homepage/_action.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/react/swiper-react.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");






function Action() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "",
    style: {
      paddingTop: "50px",
      backgroundImage: "url(/zenith/images/aWELhk8A.jpeg)",
      height: "auto",
      paddingBottom: "1px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container2",
    "data-aos": "fade-up",
    "data-aos-duration": "1500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "titreA medium letterSpacing marginStop",
    id: "patchnaze"
  }, "ACTION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
    className: "light letterSpacingS sousTitre"
  }, "SE CONCENTRER SUR L\u2019ESSENTIEL : VOUS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
    slidesPerView: 3,
    spaceBetween: -100,
    className: "swiper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/projets",
    className: "textDeco"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxCarre",
    style: {
      backgroundImage: "url(/zenith/images/pexels-andrea-piacquadio-3760093.jpg)",
      backgroundSize: "cover"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      backdropFilter: "blur(5px)"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "textAction1 letterSpacingS "
  }, "CONSEIL", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "light"
  }, "ACCOMPAGNEMENT", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "360\xB0")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/projets",
    className: "textDeco"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxCarre",
    style: {
      backgroundImage: "url(/zenith/images/COMM.jpg)",
      backgroundSize: "cover"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      backdropFilter: "blur(5px)"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "textAction1 letterSpacingS "
  }, "COMMUNICATION", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "light"
  }, "SOLUTION", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "SUR-MESURE")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/projets",
    className: "textDeco"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxCarre",
    style: {
      backgroundImage: "url(/zenith/images/EVENT.jpg)",
      backgroundSize: "cover"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      backdropFilter: "blur(5px)"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "textAction1 letterSpacingS "
  }, "EVENT", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "light"
  }, "LIVRAISON", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "CL\xC9S EN MAIN"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "titreB light letterSpacing container center accroche",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, "AGIR ET R\xC9AGIR AVEC VOUS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      document.location = "/clients/1";
    },
    className: "btnS center light letterSpacingM marginBottom2"
  }, "EN COMPRENDRE +")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Action);

/***/ }),

/***/ "./assets/components/Homepage/_chiffres.jsx":
/*!**************************************************!*\
  !*** ./assets/components/Homepage/_chiffres.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");



function Chiffres() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_parallax__WEBPACK_IMPORTED_MODULE_1__.Parallax, {
    bgImage: "/zenith/images/Z1zIJCKk.jpeg",
    strength: 200
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    // style={{ backgroundImage: "url(/zenith/images/x9nes5V.jpg)" }}
    className: "demibloc",
    alt: "chiffres"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "demibloc2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "background3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "parent2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "div1",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "medium chiffres"
  }, "2016"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "light chiffres2"
  }, "ANN\xC9E DE CREATION")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "div2",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "medium chiffres"
  }, "+300"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "light chiffres2"
  }, "CR\xC9ATIONS PHOTOS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "div3",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "medium chiffres"
  }, "+160"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "light chiffres2"
  }, "PROJETS R\xC9ALIS\xC9S")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "div4",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "medium chiffres"
  }, "+150"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "light chiffres2"
  }, "R\xC9ALISATIONS VID\xC9OS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "div5",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "medium chiffres"
  }, "+200"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "light chiffres2"
  }, "CR\xC9ATIONS DIGITALES ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "div6",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "medium chiffres"
  }, "100%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "light chiffres2"
  }, "MADE IN FRANCE"))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chiffres);

/***/ }),

/***/ "./assets/components/Homepage/_creation.jsx":
/*!**************************************************!*\
  !*** ./assets/components/Homepage/_creation.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/react/swiper-react.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");










function Creation(item) {
  var slider = [];
  console.log(item);
  if (item.item.length > 0) {
    item.item.forEach(function (element) {
      console.log(element);
      var newSlider = undefined;
      if (element.creation) {
        newSlider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
          key: element.id,
          className: "swiperSlide2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
          href: "/projet/".concat(element.id),
          style: {
            textDecoration: "none",
            color: "white"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
          className: "boxCr\xE9ation",
          onMouseOut: function onMouseOut(e) {
            return RemoveBlurDetail(e);
          },
          onMouseOver: function onMouseOver(e) {
            return BlurDetail(e);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
          style: {
            width: "200px",
            height: "100%",
            position: "absolute"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
          style: {
            pointerEvents: "none",
            display: "none",
            width: "200px",
            textAlign: "center",
            position: "absolute",
            left: "0px",
            top: "200px"
          }
        }, element.mission)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("img", {
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
          },
          src: "/images/imageprojet/".concat(element.creation),
          alt: ""
        }))));
      } else {
        newSlider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
          key: element.id,
          className: "swiperSlide2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
          href: "/projet/".concat(element.id),
          style: {
            textDecoration: "none",
            color: "white"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
          className: "boxCr\xE9ation",
          onMouseOut: function onMouseOut(e) {
            return RemoveBlurDetail(e);
          },
          onMouseOver: function onMouseOver(e) {
            return BlurDetail(e);
          },
          style: {
            background: "#02111D"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
          style: {
            width: "200px",
            height: "100%",
            position: "absolute"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
          style: {
            pointerEvents: "none",
            display: "none",
            width: "200px",
            textAlign: "center",
            position: "absolute",
            left: "0px",
            top: "200px"
          }
        }, element.mission)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("img", {
          style: {
            width: "100%",
            height: "100%",
            objectFit: "contain"
          },
          src: "/zenith/autre/noImg.png",
          alt: ""
        }))));
      }
      slider.push(newSlider);
    });
  } else {
    slider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h1", {
      className: "titreA medium letterSpacing marginStop"
    }, "rien a voir");
  }
  function BlurDetail(e) {
    console.log(e);
    e.target.style.backdropFilter = "blur(4px)";
    e.target.children[0].style.display = "inline";
  }
  function RemoveBlurDetail(e) {
    console.log(e);
    e.target.style.backdropFilter = "blur(0)";
    e.target.children[0].style.display = "none";
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_parallax__WEBPACK_IMPORTED_MODULE_7__.Parallax, {
    bgImage: "/zenith/images/Z1zIJCKk.jpeg",
    strength: 200
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "",
    style: {
      paddingTop: '50px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    "data-aos": "zoom-in",
    "data-aos-mirror": "",
    "data-aos-once": "false",
    "data-aos-anchor-placement": "",
    "data-aos-duration": "1500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "wrapper2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h1", {
    className: "titreA medium letterSpacing marginStop",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, "CR\xC9ATION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h6", {
    className: "light letterSpacingS sousTitre",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, "UNE HISTOIRE. UN ENJEU. UNE R\xC9PONSE."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
    style: {
      height: '500px'
    },
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 0,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 7,
        spaceBetween: 1
      }
    },
    className: "swiper2",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, slider), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h4", {
    className: "titreB light letterSpacing container center accroche"
  }, "PROPULSER L\u2019IMAGINAIRE PLUS LOIN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", {
    className: "marginBottom2 btnS center light letterSpacingM"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
    to: "/projets/1",
    className: "textDeco"
  }, "D\xC9COUVRIR +"))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Creation);

// const items = ['', '', '', '', '', '','','','','','','',]
// const setting = {
//   dragSpeed: 0.4,
//   itemWidth: 200,
//   itemHeight: 464,
//   itemSideOffsets: 40,
// }
// const itemStyle = {
//   width: `${setting.itemWidth}px`,
//   height: `${setting.itemHeight}px`,
//   margin: `0px ${setting.itemSideOffsets}px`
// }

{
  /* <div className='containerC'>
              <Carousel _data={items} {...setting}>
                {
                  items.map((i, _i) => (
                    <div
                      key={_i}
                      className='item'
                      style={{ ...itemStyle }}>
                    </div>
                  ))
                }
              </Carousel>
            </div> */
}

/***/ }),

/***/ "./assets/components/Homepage/_emotion.jsx":
/*!*************************************************!*\
  !*** ./assets/components/Homepage/_emotion.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Emotion() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoaded = _useState2[0],
    setIsLoaded = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    items = _useState4[0],
    setItems = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    fetch("/api/emotions/1", {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function (res) {
      return res.json();
    }).then(function (result) {
      setIsLoaded(true);
      setItems(result);
      //console.log(result);
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    function (error) {
      setIsLoaded(true);
      setError(error);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement((react__WEBPACK_IMPORTED_MODULE_13___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_parallax__WEBPACK_IMPORTED_MODULE_14__.Parallax, {
    bgImage: "/zenith/images/Z1zIJCKk.jpeg",
    strength: 200
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "",
    style: {
      paddingTop: '50px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    "data-aos": "zoom-in",
    "data-aos-mirror": "true",
    "data-aos-once": "false",
    "data-aos-anchor-placement": "top-center",
    "data-aos-duration": "1500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "wrapper2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "container2 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("h1", {
    className: "titreA medium letterSpacing marginStop",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, "\xC9MOTION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("h6", {
    className: "light letterSpacingS sousTitre",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, "FAIRE VIBRER LA CORDE INVISIBLE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "containerFlex center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "boxVideo",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("iframe", {
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    src: "https://www.youtube.com/embed/".concat(items["Video"]),
    title: "YouTube video player",
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("h4", {
    className: "titreB light letterSpacing container center accroche",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, "SUSCITER L\u2019EMOTION EN UN INSTANT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
    onClick: function onClick() {
      document.location = "/clients/1";
    },
    className: "marginBottom2 btnS center light letterSpacingM"
  }, "EN VOIR +")))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Emotion);

/***/ }),

/***/ "./assets/components/Homepage/_footer.jsx":
/*!************************************************!*\
  !*** ./assets/components/Homepage/_footer.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! sweetalert2-react-content */ "./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js");
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_26__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Footer() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)({
      email: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoaded = _useState4[0],
    setIsLoaded = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    items = _useState6[0],
    setItems = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_21__.useEffect)(function () {
    fetch("/api/footers/1", {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function (res) {
      return res.json();
    }).then(function (result) {
      setIsLoaded(true);
      setItems(result);
      //console.log(result);
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    function (error) {
      setIsLoaded(true);
      setError(error);
    });
  }, []);
  var MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_26___default()((sweetalert2__WEBPACK_IMPORTED_MODULE_25___default()));
  var handleEmailInputChange = function handleEmailInputChange(event) {
    event.persist();
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, {
        email: event.target.value
      });
    });
    console.log(values.email);
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    e.target.children[1].disabled = true;
    MySwal.fire('Merci!', 'Votre email à bien été enregistré', 'success');
    var requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": values.email,
        "new": true
      })
    };
    fetch('/api/emails', requestOptions).then(function (response) {
      return response.json();
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement((react__WEBPACK_IMPORTED_MODULE_21___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    style: {
      backgroundImage: "url(/zenith/images/nxsX0oGc.jpeg)",
      height: "auto",
      paddingBottom: "1px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    id: "footer",
    className: "demiblocFooter",
    alt: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "demibloc2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "emptyS"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("h2", {
    className: "titreE light letterSpacing marginStop"
  }, "ET SI ON SE LAN\xC7AIT ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("button", {
    className: "btnL center light letterSpacingM"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.Link, {
    to: "/contact",
    className: "textDeco"
  }, "CONTACT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("h4", {
    className: " light letterSpacing container center"
  }, "ENSEMBLE, \xC9CRIVONS VOTRE HISTOIRE"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_scroll__WEBPACK_IMPORTED_MODULE_22__.Element, {
    name: "scroll-to-element9",
    className: "element"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "demiblocFooter2",
    alt: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "demibloc2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "parent4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "divC"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("img", {
    className: "center mb-5",
    src: "/zenith/images/wX2LCIT.png",
    alt: "",
    width: "220"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("ul", {
    className: "ul2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("li", {
    className: "li2 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
    href: "",
    className: "footerText light text-h5"
  }, "ZENITH")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("li", {
    className: "li2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
    href: "",
    style: {
      textTransform: "uppercase"
    },
    className: "footerText light text-h5"
  }, items.adresse)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("li", {
    className: "li2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
    href: "",
    style: {
      textTransform: "uppercase"
    },
    className: "footerText light text-h5"
  }, items.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("li", {
    className: "li2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
    href: "",
    style: {
      textTransform: "uppercase"
    },
    className: "footerText light text-h5"
  }, items.tel)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "divD"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("h4", {
    className: "titreD medium letterSpacing marginBottom",
    style: {
      marginTop: "20px"
    }
  }, "REJOIGNEZ ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("br", null), " L\u2019AVENTURE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "rs2 centerFlex center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
    className: "fb2",
    href: "https://www.facebook.com/AGENCEZENITH/"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
    className: "insta2",
    href: "https://www.instagram.com/agencezenith/?hl=fr"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
    className: "linkedin2",
    href: "https://www.linkedin.com/company/agence-zenith/"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("h4", {
    className: "titreD medium letterSpacing marginBottom "
  }, " ", "NEWSLETTER"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("input", {
    className: "inputMail center",
    type: "email",
    id: "email",
    size: "30",
    name: "email",
    value: values.email,
    onChange: handleEmailInputChange,
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "divE"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("h4", {
    className: "titreC medium letterSpacing"
  }, "SITE MAP"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("ul", {
    className: "ul2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("li", {
    className: "li2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
    href: "/",
    className: "footerText light text-h5"
  }, "ACCUEIL")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("li", {
    className: "li2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
    href: "/clients/1",
    className: "footerText light text-h5"
  }, "CLIENT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("li", {
    className: "li2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
    href: "/projets/1",
    className: "footerText light text-h5"
  }, "PROJETS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("li", {
    className: "li2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
    href: "/contact",
    className: "footerText light text-h5"
  }, "CONTACT"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("p", {
    className: "light footerCredit letterSpacingS"
  }, "\xA9 AGENCE ZENITH / TOUS DROITS R\xC9SERV\xC9S")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./assets/components/Homepage/_homepage.jsx":
/*!**************************************************!*\
  !*** ./assets/components/Homepage/_homepage.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");






function Homepage() {
  aos__WEBPACK_IMPORTED_MODULE_1___default().init();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("video", {
    playsInline: true,
    autoPlay: true,
    muted: true,
    loop: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
    src: "/zenith/video/videobg.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "opacityBlue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container2",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container center2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "containerCenter",
    "data-aos": "fade-up",
    "data-aos-duration": "800"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/zenith/images/bIO1r9F.png",
    alt: "Logo",
    width: 330
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fbvi center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "semibold",
    "data-aos": "fade-up",
    "data-aos-duration": "800"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "thin"
  }, "FAITES"), " BRILLER", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "thin"
  }, " VOS "), "ID\xC9ES")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "line",
    "data-aos": "fade-up",
    "data-aos-duration": "800"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Element, {
    name: "scroll-to-element2",
    className: "element"
  }))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);

/***/ }),

/***/ "./assets/components/Homepage/_insta.jsx":
/*!***********************************************!*\
  !*** ./assets/components/Homepage/_insta.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stylesheets_bulma_helpers_spacing_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stylesheets/bulma/helpers/spacing.sass */ "./assets/stylesheets/bulma/helpers/spacing.sass");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");




function Instaflux() {
  var insta = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var script = document.createElement("script");
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  if (document.readyState === "complete") {}
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_parallax__WEBPACK_IMPORTED_MODULE_1__.Parallax, {
    bgImage: "/zenith/images/Z1zIJCKk.jpeg",
    strength: 200
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "zoom-in",
    "data-aos-mirror": "true",
    "data-aos-once": "false",
    "data-aos-anchor-placement": "top-center",
    "data-aos-duration": "1500",
    style: {
      paddingTop: '50px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "titreA medium letterSpacing marginStop",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, "#AGENCEZENITH"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: insta,
    className: "containerCenterFlex",
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "50px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("iframe", {
    src: "//lightwidget.com/widgets/530c590c66cf5ffa844ded751a6a4cd5.html",
    scrolling: "no",
    allowtransparency: "true",
    className: "lightwidget-widget",
    width: "100%",
    style: {
      width: "70%",
      border: "0"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    style: {
      marginTop: "100px",
      marginBottom: "6vh"
    },
    className: "light letterSpacing container center marginTopXL",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, "UN UNIVERS DE POSSIBILITES")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Instaflux);

/***/ }),

/***/ "./assets/components/Homepage/_miniFooter.jsx":
/*!****************************************************!*\
  !*** ./assets/components/Homepage/_miniFooter.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! sweetalert2-react-content */ "./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js");
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_23__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function MiniFooter(loaded) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)({
      email: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoaded = _useState4[0],
    setIsLoaded = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    items = _useState6[0],
    setItems = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_21__.useEffect)(function () {
    fetch("/api/footers/1", {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function (res) {
      return res.json();
    }).then(function (result) {
      setIsLoaded(true);
      setItems(result);
      //console.log(result);
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    function (error) {
      setIsLoaded(true);
      // setError(error);
    });
  }, []);
  var MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_23___default()((sweetalert2__WEBPACK_IMPORTED_MODULE_22___default()));
  var handleEmailInputChange = function handleEmailInputChange(event) {
    event.persist();
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, {
        email: event.target.value
      });
    });
    console.log(values.email);
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    e.target.children[1].disabled = true;
    MySwal.fire('Merci!', 'Votre email à bien été enregistré', 'success');
    var requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": values.email,
        "new": true
      })
    };
    fetch('/api/emails', requestOptions).then(function (response) {
      return response.json();
    });
  };
  if (loaded.loaded == true) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement((react__WEBPACK_IMPORTED_MODULE_21___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
      style: {
        backgroundImage: "url(/zenith/images/nxsX0oGc.jpeg)"
      },
      className: "demiblocFooter2",
      alt: "footer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
      className: "demibloc2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
      className: "parent4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
      className: "divC"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("img", {
      className: "center mb-5",
      src: "/zenith/images/wX2LCIT.png",
      alt: "",
      width: "220"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("ul", {
      className: "ul2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("li", {
      className: "li2 mt-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
      href: "",
      className: "footerText light text-h5"
    }, "ZENITH")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("li", {
      className: "li2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
      href: "",
      style: {
        textTransform: "uppercase"
      },
      className: "footerText light text-h5"
    }, items.adresse)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("li", {
      className: "li2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
      href: "mailto:contact@agencezenith.com",
      style: {
        textTransform: "uppercase"
      },
      className: "footerText light text-h5"
    }, items.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("li", {
      className: "li2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
      href: "",
      style: {
        textTransform: "uppercase"
      },
      className: "footerText light text-h5"
    }, items.tel)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
      className: "divD"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("h4", {
      className: "titreD medium letterSpacing marginBottom",
      style: {
        marginTop: "20px"
      }
    }, "REJOIGNEZ ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("br", null), " L\u2019AVENTURE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
      className: "rs2 centerFlex center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
      className: "fb2",
      href: "https://www.facebook.com/AGENCEZENITH/"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
      className: "insta2",
      href: "https://www.instagram.com/agencezenith/?hl=fr"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
      className: "linkedin2",
      href: "https://www.linkedin.com/company/agence-zenith/"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("h4", {
      className: "titreD medium letterSpacing marginBottom "
    }, " ", "NEWSLETTER"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("input", {
      className: "inputMail center",
      type: "email",
      id: "email",
      size: "30",
      name: "email",
      value: values.email,
      onChange: handleEmailInputChange,
      required: true
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
      className: "divE"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("h4", {
      className: "titreC medium letterSpacing"
    }, "SITE MAP"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("ul", {
      className: "ul2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("li", {
      className: "li2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
      href: "/",
      className: "footerText light text-h5"
    }, "ACCUEIL")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("li", {
      className: "li2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
      href: "/clients/1",
      className: "footerText light text-h5"
    }, "CLIENT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("li", {
      className: "li2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
      href: "/projets/1",
      className: "footerText light text-h5"
    }, "PROJETS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("li", {
      className: "li2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
      href: "/contact",
      className: "footerText light text-h5"
    }, "CONTACT"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("p", {
      className: "light footerCredit letterSpacingS"
    }, "\xA9 AGENCE ZENITH / TOUS DROITS R\xC9SERV\xC9S"))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiniFooter);

/***/ }),

/***/ "./assets/components/Homepage/_satisfaction.jsx":
/*!******************************************************!*\
  !*** ./assets/components/Homepage/_satisfaction.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Satisfaction() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoaded = _useState4[0],
    setIsLoaded = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    items = _useState6[0],
    setItems = _useState6[1];

  // Remarque : le tableau vide de dépendances [] indique
  // que useEffect ne s’exécutera qu’une fois, un peu comme
  // componentDidMount()
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    fetch("/getSatisfaction").then(function (res) {
      return res.json();
    }).then(function (result) {
      setIsLoaded(true);
      setItems(result);
      console.log(result);
    },
    // Remarque : il faut gérer les erreurs ici plutôt que dans
    // un bloc catch() afin que nous n’avalions pas les exceptions
    // dues à de véritables bugs dans les composants.
    function (error) {
      setIsLoaded(true);
      setError(error);
    });
  }, []);
  if (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", null, "Erreur : ", error.message);
  } else if (!isLoaded) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", null, "Chargement...");
  } else {
    console.log(items);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement((react__WEBPACK_IMPORTED_MODULE_13___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "",
      style: {
        paddingTop: '50px',
        backgroundImage: "url(/zenith/images/aWELhk8A.jpeg)",
        height: "auto",
        paddingBottom: "1px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "wrapper2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("h1", {
      className: "titreA medium letterSpacing marginStop",
      "data-aos": "fade-up",
      "data-aos-duration": "1000"
    }, "SATISFACTION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("h6", {
      className: "titreCenter light letterSpacingS",
      "data-aos": "fade-up",
      "data-aos-duration": "1000"
    }, "\xCATRE \xC0 VOS C\xD4T\xC9S, C\u2019EST AVANT TOUT DES RENCONTRES."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("h6", {
      className: "titreCenter light letterSpacingS paddingBottom",
      "data-aos": "fade-up",
      "data-aos-duration": "1000"
    }, "DES HISTOIRES HUMAINES, EXCEPTIONNELLES, ORIGINALES."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "containerMax center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[0][0].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "0",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      style: {
        marginLeft: "88px"
      },
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[0][0].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[0][1].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "0",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[0][1].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[0][2].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "0",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[0][2].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[0][3].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "0",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[0][3].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[0][4].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "0",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[0][4].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[0][5].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "0",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[0][5].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[0][6].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "0",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[0][6].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[0][7].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "0",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[0][7].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[0][8].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "0",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[0][8].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[0][9].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "0",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      style: {
        marginRight: "88px"
      },
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[0][9].logo),
      alt: "",
      width: 70
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "containerMax center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[1][19].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "600",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      style: {
        marginLeft: "88px"
      },
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[1][19].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[1][0].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "600",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[1][0].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[1][1].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "600",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[1][1].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[1][2].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "600",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[1][2].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[1][3].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "600",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[1][3].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[1][4].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "600",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[1][4].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[1][5].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "600",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[1][5].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[1][6].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "600",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[1][6].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[1][7].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "600",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[1][7].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[1][8].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "600",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      style: {
        marginRight: "88px"
      },
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[1][8].logo),
      alt: "",
      width: 70
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "containerMax center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[1][9].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "1200",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      style: {
        marginLeft: "88px"
      },
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[0][9].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[1][10].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "1200",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[1][10].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[1][11].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "1200",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[1][11].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[1][12].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "1200",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[1][12].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[1][13].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "1200",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[1][13].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[1][14].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "1200",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[1][14].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[1][15].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "1200",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[1][15].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[1][16].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "1200",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[1][16].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[1][17].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "1200",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[1][17].logo),
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      rel: "stylesheet",
      href: "/client/".concat(items[1][18].id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "1200",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      style: {
        marginRight: "88px"
      },
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/".concat(items[1][18].logo),
      alt: "",
      width: 70
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("h4", {
      className: "titreB light letterSpacing container center accroche marginBottom2",
      style: {
        marginBottom: "6vh"
      },
      "data-aos": "fade-up",
      "data-aos-duration": "1000"
    }, "LE RESTE ON L\u2019\xC9CRIRA ENSEMBLE")))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Satisfaction);

/***/ }),

/***/ "./assets/components/Homepage/_vision.jsx":
/*!************************************************!*\
  !*** ./assets/components/Homepage/_vision.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/react/swiper-react.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");
/* harmony import */ var _styles_arrow_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/arrow.css */ "./assets/styles/arrow.css");






function Vision() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "",
    style: {
      paddingTop: '50px',
      backgroundImage: "url(/zenith/images/aWELhk8A.jpeg)",
      height: "auto",
      paddingBottom: "1px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "zoom-in",
    "data-aos-mirror": "true",
    "data-aos-once": "false",
    "data-aos-anchor-placement": "top-center",
    "data-aos-duration": "1500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper",
    style: {
      height: "850px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "titreA medium letterSpacing marginStop",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, "VISION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
    className: "light letterSpacingS sousTitre",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, "UNE RENCONTRE QUI CHANGE TOUT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slider"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
    slidesPerView: 1,
    centeredSlides: true,
    className: "swiper3",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
    className: "swiperSlide"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slider__contents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "parent3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "visionBox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    src: "https://static.wixstatic.com/media/bb5e3b_a105239bfd1848b4892939d8798cd657~mv2.jpg/v1/crop/x_109,y_0,w_734,h_900/fill/w_270,h_348,al_c,q_80,usm_1.20_1.00_0.01,enc_auto/bb5e3b_a105239bfd1848b4892939d8798cd657~mv2.jpg",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "visionText2 medium"
  }, "MATHIS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "visionText light text-h4"
  }, "CONSEIL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "visionText light text-h4"
  }, "N\xC9GOCIATION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "visionText light text-h4"
  }, "\xC9V\xC9NEMENTIEL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "visionText light text-h4"
  }, "GESTION DE PROJET"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "visionText light text-h4"
  }, "DIRECTION ARTISTIQUE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "visionText light text-h4"
  }, "DIRECTION D'EXPLOITATION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "visionText light text-h4"
  }, "D\xC9VELOPPEMENT COMMERCIAL ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    id: "arrow",
    style: {
      position: "absolute",
      top: "85%",
      left: "75%",
      width: "38px"
    },
    src: "/zenith/images/NicePng_arrow-border-png_3454490w.png",
    alt: ""
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
    className: "swiperSlide"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slider__contents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "parent3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    id: "arrow2",
    style: {
      position: "absolute",
      top: "85%",
      left: "0%",
      width: "38px"
    },
    src: "/zenith/images/NicePng_arrow-border-png_3454490w.png",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "visionBox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    src: "https://static.wixstatic.com/media/94b255_74885d374cf84214899c9df60d653638~mv2.jpg/v1/fill/w_284,h_371,al_c,q_80,usm_1.20_1.00_0.01,enc_auto/AVATAR%20RON%20B.jpg",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "visionText2 medium"
  }, "RON"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "visionText light text-h4"
  }, "CONSEIL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "visionText light text-h4"
  }, "N\xC9GOCIATION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "visionText light text-h4"
  }, "\xC9V\xC9NEMENTIEL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "visionText light text-h4"
  }, "GESTION DE PROJET"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "visionText light text-h4"
  }, "DIRECTION ARTISTIQUE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "visionText light text-h4"
  }, "DIRECTION D'EXPLOITATION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "visionText light text-h4"
  }, "D\xC9VELOPPEMENT COMMERCIAL ")))))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vision);

/***/ }),

/***/ "./assets/components/Homepage/_word.jsx":
/*!**********************************************!*\
  !*** ./assets/components/Homepage/_word.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_fast_marquee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-fast-marquee */ "./node_modules/react-fast-marquee/dist/index.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _stylesheets_bulma_helpers_spacing_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../stylesheets/bulma/helpers/spacing.sass */ "./assets/stylesheets/bulma/helpers/spacing.sass");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }







var Wordpage = function Wordpage(_ref) {
  _objectDestructuringEmpty(_ref);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      backgroundImage: "url(/zenith/images/6Wvemm3K.jpeg)",
      height: "570px"
    },
    className: "demibloc",
    alt: "wordpage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "",
    alt: "Liste de mots",
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: "100%"
    },
    "data-aos": "zoom-in",
    "data-aos-mirror": "true",
    "data-aos-once": "false",
    "data-aos-duration": "1500",
    "data-aos-anchor-placement": "top-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "parent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_fast_marquee__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      width: "100%",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      height: "170px"
    },
    gradient: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "wordpage letterSpacing light grid1 px-6",
    id: "wordpage"
  }, "R\xC9ACTIVIT\xC9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "margin medium wordpageText grid2 pr-5"
  }, "\xB7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "wordpage letterSpacing outline normal grid3 px-6"
  }, "PROXIMIT\xC9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: " margin medium wordpageText outline grid4 pr-5"
  }, "\xB7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "wordpage light letterSpacing grid5 px-6"
  }, "PASSION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: " wordpageText  medium grid6 pr-5"
  }, "\xB7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "wordpage normal outline letterSpacing grid7 px-6"
  }, "STRAT\xC9GIE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: " wordpageText outline medium grid6 pr-5"
  }, "\xB7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_fast_marquee__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      width: "100%",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      height: "170px"
    },
    direction: "right",
    gradient: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "wordpage normal letterSpacing grid9 px-6"
  }, "EVENT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: " wordpageText medium grid10 pr-5"
  }, "\xB7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "wordpage marron normal letterSpacing grid11 px-6"
  }, "ZENITH"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: " wordpageText outline medium grid12 pr-5"
  }, "\xB7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "wordpage normal letterSpacing grid13 px-6"
  }, "CONSEIL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: " wordpageText medium grid14 pr-5"
  }, "\xB7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "wordpage normal letterSpacing grid15 px-6"
  }, "COMMUNICATION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: " wordpageText outline medium grid6 pr-5"
  }, "\xB7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_fast_marquee__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      width: "100%",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      height: "170px"
    },
    gradient: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "wordpage medium letterSpacing grid17 px-6"
  }, "CR\xC9ATIVIT\xC9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: " wordpageText medium grid18 pr-5"
  }, "\xB7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "wordpage light outline letterSpacing grid19 px-6"
  }, "R\xCAVER"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: " wordpageText outline medium grid20 pr-5"
  }, "\xB7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "wordpage light letterSpacing grid21 px-6"
  }, "AMBITION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: " wordpageText medium grid22 pr-5"
  }, "\xB7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "wordpage outline normal letterSpacing grid23 px-6"
  }, "IMAGINATION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: " wordpageText outline medium grid6 pr-5"
  }, "\xB7")))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wordpage);

/***/ }),

/***/ "./assets/components/Projectpage/_projectpage.jsx":
/*!********************************************************!*\
  !*** ./assets/components/Projectpage/_projectpage.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../_navbar */ "./assets/components/_navbar.jsx");
/* harmony import */ var _projectpageOne__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_projectpageOne */ "./assets/components/Projectpage/_projectpageOne.jsx");
/* harmony import */ var _projectpageTwo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_projectpageTwo */ "./assets/components/Projectpage/_projectpageTwo.jsx");
/* harmony import */ var _projectpageThree__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_projectpageThree */ "./assets/components/Projectpage/_projectpageThree.jsx");
/* harmony import */ var _projectpageFour__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_projectpageFour */ "./assets/components/Projectpage/_projectpageFour.jsx");
/* harmony import */ var _projectpageFive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_projectpageFive */ "./assets/components/Projectpage/_projectpageFive.jsx");
/* harmony import */ var _projectpageSix__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_projectpageSix */ "./assets/components/Projectpage/_projectpageSix.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _Homepage_miniFooter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../Homepage/_miniFooter */ "./assets/components/Homepage/_miniFooter.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

























function Projectpage() {
  function fadeOut(elem, ms) {
    if (!elem) return;
    if (ms) {
      var opacity = 1;
      var timer = setInterval(function () {
        opacity -= 50 / ms;
        if (opacity <= 0) {
          clearInterval(timer);
          opacity = 0;
          elem.style.display = "none";
          elem.style.visibility = "hidden";
        }
        elem.style.opacity = opacity;
        elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
      }, 50);
    } else {
      elem.style.opacity = 0;
      elem.style.filter = "alpha(opacity=0)";
      elem.style.display = "none";
      elem.style.visibility = "hidden";
    }
  }
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_24__.useParams)(),
    id = _useParams.id;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoaded = _useState4[0],
    setIsLoaded = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isLoadedImg = _useState6[0],
    setIsLoadedImg = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isLoadedNextPrev = _useState8[0],
    setIsLoadedNextPrev = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isImgReady = _useState10[0],
    setImgReady = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    items = _useState12[0],
    setItems = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    images = _useState14[0],
    setImages = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    header = _useState16[0],
    setHeader = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    preci = _useState18[0],
    setPreci = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    second = _useState20[0],
    setSecond = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)([]),
    _useState22 = _slicedToArray(_useState21, 2),
    display = _useState22[0],
    setDisplay = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)([]),
    _useState24 = _slicedToArray(_useState23, 2),
    NextPrev = _useState24[0],
    setNextPrev = _useState24[1];
  if (id) {
    (0,react__WEBPACK_IMPORTED_MODULE_22__.useEffect)(function () {
      fetch("/api/projets/".concat(id), {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (result) {
        setIsLoaded(true);
        setItems(result);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      function (error) {
        setIsLoaded(true);
        setError(error);
      });
      fetch("/getImagesProjet/".concat(id), {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (resultimg) {
        var thisRes = JSON.parse(resultimg);
        setIsLoadedImg(true);
        setImages(JSON.parse(resultimg));
        if (thisRes == "[]" || thisRes.length == 0) {
          setImgReady(true);
          return;
        }
        if (thisRes) {
          for (var i = 0; i < thisRes.length; i++) {
            // console.log(thisRes[i])
            // console.log(i)
            if (thisRes[i].header) setHeader(thisRes[i]);
            if (thisRes[i].focus) setPreci(thisRes[i]);
            if (thisRes[i].secondaire) setSecond(thisRes[i]);
            // if(images[i].visible)
            // 	setDisplay(...images[i])
            if (thisRes.length - 1 == i) {
              setImgReady(true);
            }
          }
        }
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      function (error) {
        setIsLoaded(true);
        setError(error);
        console.log(error);
      });
      fetch("/NexPrevP/".concat(id), {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (result) {
        var Next = JSON.parse(result[0]);
        var Prev = JSON.parse(result[1]);
        if (Next && Prev) {
          setNextPrev([Next, Prev]);
          if (NextPrev) {
            console.log(NextPrev);
            setIsLoadedNextPrev(true);
          }
        }
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      function (error) {
        setIsLoaded(true);
        setError(error);
        console.log(error);
      });
    }, []);
  }
  if (error) {
    return /*#__PURE__*/React.createElement("div", null, "Error: ", error.message);
  } else if (!isLoaded || !isImgReady || !isLoadedNextPrev || document.readyState !== 'complete') {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
      id: "ReactLoader",
      width: "200",
      height: "200",
      viewBox: "0 0 100 100"
    }, /*#__PURE__*/React.createElement("polyline", {
      className: "line-cornered stroke-still",
      points: "0,0 100,0 100,100",
      strokeWidth: "10",
      fill: "none"
    }), /*#__PURE__*/React.createElement("polyline", {
      className: "line-cornered stroke-still",
      points: "0,0 0,100 100,100",
      strokeWidth: "10",
      fill: "none"
    }), /*#__PURE__*/React.createElement("polyline", {
      className: "line-cornered stroke-animation",
      points: "0,0 100,0 100,100",
      strokeWidth: "10",
      fill: "none"
    }), /*#__PURE__*/React.createElement("polyline", {
      className: "line-cornered stroke-animation",
      points: "0,0 0,100 100,100",
      strokeWidth: "10",
      fill: "none"
    })));
  } else {
    fadeOut(document.querySelector("#ReactLoader", 1000));
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_navbar__WEBPACK_IMPORTED_MODULE_15__["default"], null), /*#__PURE__*/React.createElement(_projectpageOne__WEBPACK_IMPORTED_MODULE_16__["default"], {
      data: items
    }), /*#__PURE__*/React.createElement(_projectpageTwo__WEBPACK_IMPORTED_MODULE_17__["default"], {
      data: items
    }), /*#__PURE__*/React.createElement(_projectpageThree__WEBPACK_IMPORTED_MODULE_18__["default"], {
      data: second
    }), /*#__PURE__*/React.createElement(_projectpageFour__WEBPACK_IMPORTED_MODULE_19__["default"], {
      preci: preci,
      data2: items
    }), /*#__PURE__*/React.createElement(_projectpageFive__WEBPACK_IMPORTED_MODULE_20__["default"], {
      images: images
    }), /*#__PURE__*/React.createElement(_projectpageSix__WEBPACK_IMPORTED_MODULE_21__["default"], {
      data: items,
      np: NextPrev
    }), /*#__PURE__*/React.createElement(_Homepage_miniFooter__WEBPACK_IMPORTED_MODULE_23__["default"], {
      loaded: true
    }));
  }
}
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projectpage);

/***/ }),

/***/ "./assets/components/Projectpage/_projectpageFive.jsx":
/*!************************************************************!*\
  !*** ./assets/components/Projectpage/_projectpageFive.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");
/* harmony import */ var _stylesheets_bulma_elements_container_sass__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../stylesheets/bulma/elements/container.sass */ "./assets/stylesheets/bulma/elements/container.sass");
/* harmony import */ var yet_another_react_lightbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! yet-another-react-lightbox */ "./node_modules/yet-another-react-lightbox/dist/index.js");
/* harmony import */ var yet_another_react_lightbox_plugins_thumbnails__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! yet-another-react-lightbox/plugins/thumbnails */ "./node_modules/yet-another-react-lightbox/dist/plugins/thumbnails/index.js");
/* harmony import */ var yet_another_react_lightbox_plugins_thumbnails_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! yet-another-react-lightbox/plugins/thumbnails.css */ "./node_modules/yet-another-react-lightbox/dist/plugins/thumbnails/thumbnails.css");
/* harmony import */ var yet_another_react_lightbox_styles_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! yet-another-react-lightbox/styles.css */ "./node_modules/yet-another-react-lightbox/dist/styles.css");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function ProjectpageFive(images) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_15___default().useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var arrayImage = [];
  console.log(images.images);
  images.images.forEach(function (element) {
    var item = {
      src: "/images/imageprojet/".concat(element.image)
    };
    arrayImage.push(item);
  });
  if (arrayImage.length > 0) {
    console.log(arrayImage);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement((react__WEBPACK_IMPORTED_MODULE_15___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(react_parallax__WEBPACK_IMPORTED_MODULE_16__.Parallax, {
      bgImage: "/zenith/images/Z1zIJCKk.jpeg",
      strength: 800
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "columns is-centered",
      style: {
        height: "90%",
        width: "80%",
        paddingTop: "50px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "column is-one-third",
      style: _defineProperty({
        background: "#02111D",
        padding: "0"
      }, "padding", "0")
    }, images.images[0] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("img", {
      className: " ",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        padding: "0"
      },
      src: "/images/imageprojet/" + images.images[0].image,
      alt: ""
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("img", {
      style: {
        width: "50%"
      },
      src: "/zenith/autre/noImg.png",
      alt: ""
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "column is-one-third columns is-multiline mx-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "column is-full my-5",
      style: {
        background: "#02111D",
        padding: "0"
      }
    }, images.images[1] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("img", {
      className: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        padding: "0"
      },
      src: "/images/imageprojet/" + images.images[1].image,
      alt: ""
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("img", {
      style: {
        width: "50%"
      },
      src: "/zenith/autre/noImg.png",
      alt: ""
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "column is-full my-5",
      style: {
        background: "#02111D",
        padding: "0"
      }
    }, images.images[2] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("img", {
      className: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        padding: "0"
      },
      src: "/images/imageprojet/" + images.images[2].image,
      alt: ""
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("img", {
      style: {
        width: "50%"
      },
      src: "/zenith/autre/noImg.png",
      alt: ""
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "column is-one-third is-mobile",
      style: {
        background: "#02111D",
        padding: "0"
      }
    }, images.images[3] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("img", {
      className: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        padding: "0"
      },
      src: "/images/imageprojet/" + images.images[3].image,
      alt: ""
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("img", {
      style: {
        width: "50%"
      },
      src: "/zenith/autre/noImg.png",
      alt: ""
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "columns is-mobile is-centered mt-5-fullhd",
      style: {
        position: "absolute",
        bottom: "25px",
        width: "101%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("button", {
      onClick: function onClick() {
        return setOpen(true);
      },
      className: "btnS center light letterSpacingM mb-6 mt-0"
    }, "EN VOIR +")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(yet_another_react_lightbox__WEBPACK_IMPORTED_MODULE_21__["default"], {
      open: open,
      close: function close() {
        return setOpen(false);
      },
      plugins: [yet_another_react_lightbox_plugins_thumbnails__WEBPACK_IMPORTED_MODULE_22__["default"]],
      slides: arrayImage
    }))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectpageFive);

/***/ }),

/***/ "./assets/components/Projectpage/_projectpageFour.jsx":
/*!************************************************************!*\
  !*** ./assets/components/Projectpage/_projectpageFour.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");



function ProjectpageFour(_ref) {
  var preci = _ref.preci,
    data2 = _ref.data2;
  console.log(preci);
  if (data2.focus) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        backgroundImage: "url(/zenith/images/6Wvemm3K.jpeg)",
        height: "1100px"
      },
      className: "background"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "",
      style: {
        height: "1100px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "wrapper2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "containerCenterA"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "parent21 marginTop"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "marginTop2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      className: "light letterSpacingS"
    }, "Focus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "light containerCenterClient text-h5",
      style: {
        textTransform: 'uppercase'
      },
      dangerouslySetInnerHTML: {
        __html: data2.focus
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: " boxClient",
      style: {
        height: '800px',
        width: "600px"
      }
    }, preci.image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      className: " contain",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      src: "/images/imageprojet/" + preci.image,
      alt: ""
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      style: {
        width: "50%"
      },
      src: "/zenith/autre/noImg.png",
      alt: ""
    })))))))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectpageFour);

/***/ }),

/***/ "./assets/components/Projectpage/_projectpageOne.jsx":
/*!***********************************************************!*\
  !*** ./assets/components/Projectpage/_projectpageOne.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");




function ProjectpageOne(data) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "background1",
    alt: "homepage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("video", {
    playsInline: true,
    autoPlay: true,
    muted: true,
    loop: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("source", {
    src: "/zenith/video/videobg.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "opacityBlue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "container center2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "containerCenter",
    "data-aos": "fade-up"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: "/",
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    src: "/zenith/images/bIO1r9F.png",
    alt: "Logo",
    width: 200,
    className: "center"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    style: {
      textTransform: 'uppercase'
    },
    className: "clientpageText",
    "data-aos": "fade-up"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h1", {
    className: "medium marginStop clientDetail"
  }, data.data.projet), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h6", {
    className: "light marginStop clientDetail"
  }, data.data.secteur.secteur), data.data.client ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "light marginStop clientDetail"
  }, "UN PROJET POUR : ", data.data.client.nomClient) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "light marginStop clientDetail"
  }, "UN PROJET POUR : N/A"), data.data.duree ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "light clientDetail"
  }, "DUR\xC9E PROJET : ", data.data.duree) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "light clientDetail"
  }, "DUR\xC9E PROJET : N/A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    style: {
      textDecoration: "none",
      color: "white"
    },
    to: "/searchcat/projet/".concat(data.data.categorie[0].id, "/").concat(data.data.categorie[0].categorie)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    style: {
      display: "inline",
      textTransform: 'uppercase'
    },
    className: "light clientDetail2"
  }, data.data.categorie[0].categorie)), data.data.categorie[1] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    style: {
      display: "inline"
    },
    className: "light clientDetail2"
  }, "   |   "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/searchcat/client/".concat(data.data.categorie[1].id, "/").concat(data.data.categorie[1].categorie)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "light clientDetail2",
    style: {
      display: "inline",
      textTransform: 'uppercase',
      textDecoration: "none",
      color: "white"
    }
  }, data.data.categorie[1].categorie))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "containerCenter3",
    "data-aos": "fade-up"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h4", {
    style: {
      textTransform: 'uppercase'
    },
    className: "light letterSpacingS  discoverClient2"
  }, data.data.mission)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "containerCenter",
    "data-aos": "fade-up"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "light  discoverClient"
  }, "D\xC9COUVREZ"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "lineClient"
  })))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectpageOne);

/***/ }),

/***/ "./assets/components/Projectpage/_projectpageSix.jsx":
/*!***********************************************************!*\
  !*** ./assets/components/Projectpage/_projectpageSix.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");



function ProjectpageSix(_ref) {
  var data = _ref.data,
    np = _ref.np;
  if (np[0]) {
    if (np[0][0] == 'null') np[0][0] = false;
    if (np[0][1] == 'null') np[1][0] = false;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        backgroundImage: "url(/zenith/images/6Wvemm3K.jpeg)"
      },
      className: "demiblocOpacity"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "containerCenter marginTopS",
      style: {
        marginTop: "0"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
      className: "medium centerText"
    }, "UN T\xC9MOIGNAGE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "light centerText",
      dangerouslySetInnerHTML: {
        __html: data.temoignage
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        backgroundImage: "url(/zenith/images/x9nes5V.jpg)"
      },
      className: "demiblocClient"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "demiblocOpacity"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "parentClientNextPrev"
    }, np[1][0] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ClientNextPrev1",
      onClick: function onClick() {
        location.href = "/projet/" + np[1][0].id;
      },
      style: {
        cursor: "pointer"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
      className: "light rightText marginTopS"
    }, "PROJET PR\xC9C\xC9DENT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
      className: "rightText"
    }, np[1][0].projet), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
      className: "light rightText"
    }, np[1][0].mission)), np[0][0] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ClientNextPrev2",
      onClick: function onClick() {
        location.href = "/projet/" + np[0][0].id;
      },
      style: {
        cursor: "pointer"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
      className: "light leftText marginTopS"
    }, "PROJET SUIVANT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
      className: "leftText"
    }, np[0][0].projet), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
      className: "light leftText"
    }, np[0][0].mission))))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectpageSix);

/***/ }),

/***/ "./assets/components/Projectpage/_projectpageThree.jsx":
/*!*************************************************************!*\
  !*** ./assets/components/Projectpage/_projectpageThree.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");



function ProjectpageThree(data) {
  console.log(data);
  if (data.length > 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "wrapperDarkBlueClient",
      style: {
        height: "800px",
        width: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "/images/imageprojet/" + data.data.image,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    })));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectpageThree);

/***/ }),

/***/ "./assets/components/Projectpage/_projectpageTwo.jsx":
/*!***********************************************************!*\
  !*** ./assets/components/Projectpage/_projectpageTwo.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");



function ProjectpageTwo(data) {
  if (data.data.demande || data.data.defi || data.data.action) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        backgroundImage: "url(/zenith/images/6Wvemm3K.jpeg)",
        textAlign: "center"
      },
      className: "demiblocClient"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "columns"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "column columns is-centered"
    }, data.data.demande && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "column is-centered is-4",
      style: {
        marginTop: "48px",
        marginRight: "auto",
        marginLeft: "auto"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
      className: "light"
    }, "UNE DEMANDE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        width: "100%"
      },
      className: "light containerCenterClient px-6",
      dangerouslySetInnerHTML: {
        __html: data.data.demande
      }
    })), data.data.defi && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "column is-centered is-4",
      style: {
        marginTop: "48px",
        marginRight: "auto",
        marginLeft: "auto"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
      className: "light"
    }, "UN D\xC9FI"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        width: "100%"
      },
      className: "light containerCenterClient columns is-vcentered is-centered px-6",
      dangerouslySetInnerHTML: {
        __html: data.data.defi
      }
    })), data.data.action && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "column is-centered is-4",
      style: {
        marginTop: "48px",
        marginRight: "auto",
        marginLeft: "auto"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
      className: "light"
    }, "UNE ACTION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        width: "100%"
      },
      className: "light containerCenterClient columns is-vcentered is-centered px-6",
      dangerouslySetInnerHTML: {
        __html: data.data.action
      }
    }))))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectpageTwo);

/***/ }),

/***/ "./assets/components/SearchPage2/_SearchPage2.jsx":
/*!********************************************************!*\
  !*** ./assets/components/SearchPage2/_SearchPage2.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _SearchPageOne2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_SearchPageOne2 */ "./assets/components/SearchPage2/_SearchPageOne2.jsx");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../_navbar */ "./assets/components/_navbar.jsx");
/* harmony import */ var _rsButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../_rsButton */ "./assets/components/_rsButton.jsx");
/* harmony import */ var _linesTop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../_linesTop */ "./assets/components/_linesTop.jsx");
/* harmony import */ var _linesBottom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../_linesBottom */ "./assets/components/_linesBottom.jsx");
/* harmony import */ var _SearchPageTwo2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_SearchPageTwo2 */ "./assets/components/SearchPage2/_SearchPageTwo2.jsx");
/* harmony import */ var _Homepage_miniFooter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../Homepage/_miniFooter */ "./assets/components/Homepage/_miniFooter.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");
/* harmony import */ var _styles_loader_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../styles/loader.css */ "./assets/styles/loader.css");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

























function SearchPage2() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_24__.useParams)(),
    info = _useParams.info;
  var _useParams2 = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_24__.useParams)(),
    name = _useParams2.name;
  var _useParams3 = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_24__.useParams)(),
    type = _useParams3.type;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoaded = _useState4[0],
    setIsLoaded = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isLoadedImg = _useState6[0],
    setIsLoadedImg = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isLoadedNextPrev = _useState8[0],
    setIsLoadedNextPrev = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isImgReady = _useState10[0],
    setImgReady = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    items = _useState12[0],
    setItems = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    images = _useState14[0],
    setImages = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    header = _useState16[0],
    setHeader = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    preci = _useState18[0],
    setPreci = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    second = _useState20[0],
    setSecond = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)([]),
    _useState22 = _slicedToArray(_useState21, 2),
    display = _useState22[0],
    setDisplay = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)([]),
    _useState24 = _slicedToArray(_useState23, 2),
    NextPrev = _useState24[0],
    setNextPrev = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)("hidden"),
    _useState26 = _slicedToArray(_useState25, 2),
    load = _useState26[0],
    setLoad = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)(false),
    _useState28 = _slicedToArray(_useState27, 2),
    unload = _useState28[0],
    setUnload = _useState28[1];
  var setLoading = function setLoading(param) {
    if (param == true) {
      setLoad("visible");
      setUnload(true);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_21__.useEffect)(function () {
    fetch("/getsearchcat/".concat(info, "/").concat(type), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function (res) {
      return res.json();
    }).then(function (result) {
      setItems(result);
      console.log(result);
      setIsLoaded(true);
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    function (error) {
      setIsLoaded(true);
      setError(error);
      console.log(error);
    });
  }, []);
  if (error) {
    return /*#__PURE__*/React.createElement("div", null, "Error: ", error.message);
  } else if (!isLoaded || document.readyState !== 'complete') {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
      id: "ReactLoader",
      width: "200",
      height: "200",
      viewBox: "0 0 100 100"
    }, /*#__PURE__*/React.createElement("polyline", {
      className: "line-cornered stroke-still",
      points: "0,0 100,0 100,100",
      strokeWidth: "10",
      fill: "none"
    }), /*#__PURE__*/React.createElement("polyline", {
      className: "line-cornered stroke-still",
      points: "0,0 0,100 100,100",
      strokeWidth: "10",
      fill: "none"
    }), /*#__PURE__*/React.createElement("polyline", {
      className: "line-cornered stroke-animation",
      points: "0,0 100,0 100,100",
      strokeWidth: "10",
      fill: "none"
    }), /*#__PURE__*/React.createElement("polyline", {
      className: "line-cornered stroke-animation",
      points: "0,0 0,100 100,100",
      strokeWidth: "10",
      fill: "none"
    })));
  } else {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_navbar__WEBPACK_IMPORTED_MODULE_15__["default"], null), /*#__PURE__*/React.createElement(_rsButton__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/React.createElement(_linesTop__WEBPACK_IMPORTED_MODULE_17__["default"], null), /*#__PURE__*/React.createElement(_linesBottom__WEBPACK_IMPORTED_MODULE_18__["default"], null), /*#__PURE__*/React.createElement(_SearchPageOne2__WEBPACK_IMPORTED_MODULE_14__["default"], {
      setLoading: setLoading,
      data: name
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        visibility: load
      }
    }, /*#__PURE__*/React.createElement(_SearchPageTwo2__WEBPACK_IMPORTED_MODULE_19__["default"], {
      data: items
    })), /*#__PURE__*/React.createElement(_Homepage_miniFooter__WEBPACK_IMPORTED_MODULE_20__["default"], {
      loaded: unload
    }));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchPage2);

/***/ }),

/***/ "./assets/components/SearchPage2/_SearchPageOne2.jsx":
/*!***********************************************************!*\
  !*** ./assets/components/SearchPage2/_SearchPageOne2.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");






function SearchPageOne2(_ref) {
  var setLoading = _ref.setLoading,
    data = _ref.data;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setLoading(true);
  }, [1]);
  aos__WEBPACK_IMPORTED_MODULE_1___default().init();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "background1",
    alt: "homepage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("video", {
    playsInline: true,
    autoPlay: true,
    muted: true,
    loop: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
    src: "/zenith/video/videobg.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "opacityBlue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container center2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "containerCenter",
    "data-aos": "fade-up"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/zenith/images/bIO1r9F.png",
    alt: "Logo",
    width: 200,
    className: "center"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "workpageText",
    "data-aos": "fade-up"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "medium"
  }, "RESULTAT POUR \"", data, "\"")))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchPageOne2);

/***/ }),

/***/ "./assets/components/SearchPage2/_SearchPageTwo2.jsx":
/*!***********************************************************!*\
  !*** ./assets/components/SearchPage2/_SearchPageTwo2.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_2__);





function SearchPageTwo2(data) {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)(),
    type = _useParams.type;
  // console.log(count)
  // let pageNbr = Math.ceil(count / 20)
  // let nbr = parseInt(page)
  // function onChange(params) {
  //   document.location = `/projets/${params}`
  // }

  var box = [];
  if (data.data.length > 0) {
    for (var index = 0; index < data.data.length; index++) {
      if (type == "projet") {
        var item = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          key: index,
          className: "column columns is-one-fifth is-centered"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "is-half"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
          href: "/projet/" + data.data[index].id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "boxWorkpage1"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
          style: {
            position: "absolute"
          },
          className: "textDeco"
        }, data.data[index].mission), data.data[index].header !== "rien a voir, circulez" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
          },
          src: "/images/imageprojet/" + data.data[index].header,
          alt: ""
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
          },
          src: "/zenith/autre/noImg.png",
          alt: ""
        })))));
        box.push(item);
      }
      if (type == "client") {
        var _item = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          key: index,
          className: "column columns is-one-fifth is-centered"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "is-half"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
          href: "/client/" + data.data[index].id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "boxWorkpage1"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
          style: {
            position: "absolute"
          },
          className: "textDeco"
        }, data.data[index].mission), data.data[index].header !== "rien a voir, circulez" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
          },
          src: "/images/imageclient/" + data.data[index].header,
          alt: ""
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
          },
          src: "/zenith/autre/noImg.png",
          alt: ""
        })))));
        box.push(_item);
      }
    }
  } else {
    box = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "/zenith/images/search_no_result.png"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        textAlign: "center"
      }
    }, "d\xE9sol\xE9, nous n'avons rien trouv\xE9")));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_parallax__WEBPACK_IMPORTED_MODULE_2__.Parallax, {
    bgImage: "/zenith/images/Z1zIJCKk.jpeg",
    blur: {
      min: -1,
      max: 3
    },
    strength: 400
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pt-6",
    style: {
      paddingBottom: "80px"
    },
    alt: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pt-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "columns is-multiline is-centered"
  }, box))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchPageTwo2);

/***/ }),

/***/ "./assets/components/SearchPage/_SearchPage.jsx":
/*!******************************************************!*\
  !*** ./assets/components/SearchPage/_SearchPage.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _SearchPageOne__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_SearchPageOne */ "./assets/components/SearchPage/_SearchPageOne.jsx");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../_navbar */ "./assets/components/_navbar.jsx");
/* harmony import */ var _rsButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../_rsButton */ "./assets/components/_rsButton.jsx");
/* harmony import */ var _linesTop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../_linesTop */ "./assets/components/_linesTop.jsx");
/* harmony import */ var _linesBottom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../_linesBottom */ "./assets/components/_linesBottom.jsx");
/* harmony import */ var _SearchPageTwo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_SearchPageTwo */ "./assets/components/SearchPage/_SearchPageTwo.jsx");
/* harmony import */ var _Homepage_miniFooter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Homepage/_miniFooter */ "./assets/components/Homepage/_miniFooter.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function SearchPage() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_21__.useParams)(),
    info = _useParams.info;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoaded = _useState4[0],
    setIsLoaded = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isLoadedImg = _useState6[0],
    setIsLoadedImg = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isLoadedNextPrev = _useState8[0],
    setIsLoadedNextPrev = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isImgReady = _useState10[0],
    setImgReady = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    items = _useState12[0],
    setItems = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    images = _useState14[0],
    setImages = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    header = _useState16[0],
    setHeader = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    preci = _useState18[0],
    setPreci = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    second = _useState20[0],
    setSecond = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)([]),
    _useState22 = _slicedToArray(_useState21, 2),
    display = _useState22[0],
    setDisplay = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)([]),
    _useState24 = _slicedToArray(_useState23, 2),
    NextPrev = _useState24[0],
    setNextPrev = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)("hidden"),
    _useState26 = _slicedToArray(_useState25, 2),
    load = _useState26[0],
    setLoad = _useState26[1];
  var setLoading = function setLoading(param) {
    if (param == true) {
      console.log("gotcha");
      setLoad("visible");
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_20__.useEffect)(function () {
    console.log(info);
    fetch("/getSearch/".concat(info), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function (res) {
      return res.json();
    }).then(function (result) {
      setItems(result);
      console.log(result);
      setIsLoaded(true);
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    function (error) {
      setIsLoaded(true);
      setError(error);
      console.log(error);
    });
  }, []);
  if (error) {
    return /*#__PURE__*/React.createElement("div", null, "Error: ", error.message);
  } else if (!isLoaded || document.readyState !== 'complete') {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
      id: "ReactLoader",
      width: "200",
      height: "200",
      viewBox: "0 0 100 100"
    }, /*#__PURE__*/React.createElement("polyline", {
      className: "line-cornered stroke-still",
      points: "0,0 100,0 100,100",
      strokeWidth: "10",
      fill: "none"
    }), /*#__PURE__*/React.createElement("polyline", {
      className: "line-cornered stroke-still",
      points: "0,0 0,100 100,100",
      strokeWidth: "10",
      fill: "none"
    }), /*#__PURE__*/React.createElement("polyline", {
      className: "line-cornered stroke-animation",
      points: "0,0 100,0 100,100",
      strokeWidth: "10",
      fill: "none"
    }), /*#__PURE__*/React.createElement("polyline", {
      className: "line-cornered stroke-animation",
      points: "0,0 0,100 100,100",
      strokeWidth: "10",
      fill: "none"
    })));
  } else {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_navbar__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/React.createElement(_rsButton__WEBPACK_IMPORTED_MODULE_15__["default"], null), /*#__PURE__*/React.createElement(_linesTop__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/React.createElement(_linesBottom__WEBPACK_IMPORTED_MODULE_17__["default"], null), /*#__PURE__*/React.createElement(_SearchPageOne__WEBPACK_IMPORTED_MODULE_13__["default"], {
      setLoading: setLoading,
      data: info
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        visibility: load
      }
    }, /*#__PURE__*/React.createElement(_SearchPageTwo__WEBPACK_IMPORTED_MODULE_18__["default"], {
      data: items
    })), /*#__PURE__*/React.createElement(_Homepage_miniFooter__WEBPACK_IMPORTED_MODULE_19__["default"], {
      loaded: true
    }));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchPage);

/***/ }),

/***/ "./assets/components/SearchPage/_SearchPageOne.jsx":
/*!*********************************************************!*\
  !*** ./assets/components/SearchPage/_SearchPageOne.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");




function SearchPageOne(_ref) {
  var setLoading = _ref.setLoading,
    data = _ref.data;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setLoading(true);
  }, [1]);
  aos__WEBPACK_IMPORTED_MODULE_1___default().init();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "background1",
    alt: "homepage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("video", {
    playsInline: true,
    autoPlay: true,
    muted: true,
    loop: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
    src: "/zenith/video/videobg.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "opacityBlue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container center2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "containerCenter",
    "data-aos": "fade-up"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/zenith/images/bIO1r9F.png",
    alt: "Logo",
    width: 200,
    className: "center"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "workpageText",
    "data-aos": "fade-up"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "medium"
  }, "RESULTAT POUR \"", data, "\"")))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchPageOne);

/***/ }),

/***/ "./assets/components/SearchPage/_SearchPageTwo.jsx":
/*!*********************************************************!*\
  !*** ./assets/components/SearchPage/_SearchPageTwo.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_1__);



function SearchPageTwo(data) {
  // console.log(count)
  // let pageNbr = Math.ceil(count / 20)
  // let nbr = parseInt(page)
  // function onChange(params) {
  //   document.location = `/projets/${params}`
  // }

  var box = [];
  if (data.data.length > 0) {
    for (var index = 0; index < data.data.length; index++) {
      if (data.data[index][0] == "projet") {
        var item = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          key: index,
          className: "column columns is-one-fifth is-centered"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "is-half"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
          href: "/projet/" + data.data[index].id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "boxWorkpage1"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
          style: {
            position: "absolute"
          },
          className: "textDeco"
        }, data.data[index].mission), data.data[index].header !== "rien a voir, circulez" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
          },
          src: "/images/imageprojet/" + data.data[index].header,
          alt: ""
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
          },
          src: "/zenith/autre/noImg.png",
          alt: ""
        })))));
        box.push(item);
      }
      if (data.data[index][0] == "client") {
        var _item = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          key: index,
          className: "column columns is-one-fifth is-centered"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "is-half"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
          href: "/client/" + data.data[index].id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "boxWorkpage1"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
          style: {
            position: "absolute"
          },
          className: "textDeco"
        }, data.data[index].mission), data.data[index].header !== "rien a voir, circulez" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
          },
          src: "/images/imageclient/" + data.data[index].header,
          alt: ""
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
          },
          src: "/zenith/autre/noImg.png",
          alt: ""
        })))));
        box.push(_item);
      }
    }
  } else {
    box = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "/zenith/images/search_no_result.png"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        textAlign: "center"
      }
    }, "d\xE9sol\xE9, nous n'avons rien trouv\xE9")));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_parallax__WEBPACK_IMPORTED_MODULE_1__.Parallax, {
    bgImage: "/zenith/images/Z1zIJCKk.jpeg",
    blur: {
      min: -1,
      max: 3
    },
    strength: 400
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pt-6",
    style: {
      paddingBottom: "80px"
    },
    alt: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pt-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "columns is-multiline is-centered"
  }, box))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchPageTwo);

/***/ }),

/***/ "./assets/components/WorkpageClient/_workpageClient.jsx":
/*!**************************************************************!*\
  !*** ./assets/components/WorkpageClient/_workpageClient.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _workpageClientOne__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_workpageClientOne */ "./assets/components/WorkpageClient/_workpageClientOne.jsx");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../_navbar */ "./assets/components/_navbar.jsx");
/* harmony import */ var _rsButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../_rsButton */ "./assets/components/_rsButton.jsx");
/* harmony import */ var _linesTop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../_linesTop */ "./assets/components/_linesTop.jsx");
/* harmony import */ var _linesBottom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../_linesBottom */ "./assets/components/_linesBottom.jsx");
/* harmony import */ var _workpageClientTwo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_workpageClientTwo */ "./assets/components/WorkpageClient/_workpageClientTwo.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");
/* harmony import */ var _styles_loader_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../styles/loader.css */ "./assets/styles/loader.css");
/* harmony import */ var _Homepage_miniFooter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../Homepage/_miniFooter */ "./assets/components/Homepage/_miniFooter.jsx");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function WorkpageClient() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_23__.useParams)(),
    nbr = _useParams.nbr;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoaded = _useState4[0],
    setIsLoaded = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isCountLoaded = _useState6[0],
    setIsCountLoaded = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isCatLoaded = _useState8[0],
    setIsCatLoaded = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isLoadedNextPrev = _useState10[0],
    setIsLoadedNextPrev = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isImgReady = _useState12[0],
    setImgReady = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    items = _useState14[0],
    setItems = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    cat = _useState16[0],
    setCat = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    count = _useState18[0],
    setCount = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)("hidden"),
    _useState20 = _slicedToArray(_useState19, 2),
    load = _useState20[0],
    setLoad = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    unload = _useState22[0],
    setUnload = _useState22[1];
  var setLoading = function setLoading(param) {
    if (param == true) {
      setLoad("visible");
      setUnload(true);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_19__.useEffect)(function () {
    fetch("/gettAllClient/".concat(nbr), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function (res) {
      return res.json();
    }).then(function (result) {
      setItems(result);
      setIsLoaded(true);
      console.log(result);
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    function (error) {
      setIsLoaded(true);
      setError(error);
      console.log(error);
    });
    fetch("/getCount/client", {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function (res) {
      return res.json();
    }).then(function (result) {
      setCount(result);
      setIsCountLoaded(true);
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    function (error) {
      setIsCountLoaded(true);
      setError(error);
      console.log(error);
    });
    fetch("/api/categories", {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function (res) {
      return res.json();
    }).then(function (result) {
      setCat(result);
      setIsCatLoaded(true);
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    function (error) {
      setIsCountLoaded(true);
      setError(error);
      console.log(error);
    });
  }, []);
  if (error) {
    return /*#__PURE__*/React.createElement("div", null, "Error: ", error.message);
  } else if (!isLoaded || document.readyState !== 'complete') {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
      id: "ReactLoader",
      width: "200",
      height: "200",
      viewBox: "0 0 100 100"
    }, /*#__PURE__*/React.createElement("polyline", {
      className: "line-cornered stroke-still",
      points: "0,0 100,0 100,100",
      strokeWidth: "10",
      fill: "none"
    }), /*#__PURE__*/React.createElement("polyline", {
      className: "line-cornered stroke-still",
      points: "0,0 0,100 100,100",
      strokeWidth: "10",
      fill: "none"
    }), /*#__PURE__*/React.createElement("polyline", {
      className: "line-cornered stroke-animation",
      points: "0,0 100,0 100,100",
      strokeWidth: "10",
      fill: "none"
    }), /*#__PURE__*/React.createElement("polyline", {
      className: "line-cornered stroke-animation",
      points: "0,0 0,100 100,100",
      strokeWidth: "10",
      fill: "none"
    })));
  } else {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_navbar__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/React.createElement(_rsButton__WEBPACK_IMPORTED_MODULE_15__["default"], null), /*#__PURE__*/React.createElement(_linesTop__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/React.createElement(_linesBottom__WEBPACK_IMPORTED_MODULE_17__["default"], null), /*#__PURE__*/React.createElement(_workpageClientOne__WEBPACK_IMPORTED_MODULE_13__["default"], {
      setLoading: setLoading,
      cat: cat
    }), /*#__PURE__*/React.createElement(_workpageClientTwo__WEBPACK_IMPORTED_MODULE_18__["default"], {
      loaded: unload,
      data: items,
      page: nbr,
      count: count
    }), /*#__PURE__*/React.createElement(_Homepage_miniFooter__WEBPACK_IMPORTED_MODULE_22__["default"], {
      loaded: unload
    }));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkpageClient);

/***/ }),

/***/ "./assets/components/WorkpageClient/_workpageClientOne.jsx":
/*!*****************************************************************!*\
  !*** ./assets/components/WorkpageClient/_workpageClientOne.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/esm/styles/styled.js");
/* harmony import */ var _mui_icons_material_ArrowForwardIosSharp__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/icons-material/ArrowForwardIosSharp */ "./node_modules/@mui/icons-material/ArrowForwardIosSharp.js");
/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/Accordion */ "./node_modules/@mui/material/esm/Accordion/Accordion.js");
/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/AccordionSummary */ "./node_modules/@mui/material/esm/AccordionSummary/AccordionSummary.js");
/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/AccordionDetails */ "./node_modules/@mui/material/esm/AccordionDetails/AccordionDetails.js");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");



















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











var Accordion = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_23__["default"])(function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_24__["default"], _extends({
    disableGutters: true,
    elevation: 0,
    square: true
  }, props));
})(function (_ref) {
  var theme = _ref.theme;
  return {
    maxWidth: "185px",
    backgroundColor: "rgba(0,0,0,0)",
    color: "white"
  };
});
var AccordionSummary = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_23__["default"])(function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_25__["default"], _extends({
    expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_mui_icons_material_ArrowForwardIosSharp__WEBPACK_IMPORTED_MODULE_26__["default"], {
      sx: {
        fontSize: "0.9rem"
      }
    })
  }, props));
})(function (_ref2) {
  var theme = _ref2.theme;
  return {
    color: "white",
    backgroundColor: theme.palette.mode === "darl" ? "rgba(255, 255, 255, .05)" : "rgba(0, 0, 0, .03)",
    flexDirection: "row",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)"
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1)
    }
  };
});
var AccordionDetails = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_23__["default"])(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_27__["default"])(function (_ref3) {
  var theme = _ref3.theme;
  return {
    padding: theme.spacing(2),
    paddingTop: 0,
    marginTop: 0,
    maxHeight: "150px",
    overflow: "scroll"
  };
});
function WorkpageClientOne(_ref4) {
  var setLoading = _ref4.setLoading,
    cat = _ref4.cat;
  (0,react__WEBPACK_IMPORTED_MODULE_19__.useEffect)(function () {
    setLoading(true);
  }, [1]);
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_19___default().useState("panel1"),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    expanded = _React$useState2[0],
    setExpanded = _React$useState2[1];
  var handleChange = function handleChange(panel) {
    return function (event, newExpanded) {
      setExpanded(newExpanded ? panel : false);
    };
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    words = _useState2[0],
    setWords = _useState2[1];
  var category = cat;
  var menu = [];
  var randomWord = ["RÉACTIVITÉ", "PROXIMITÉ", "PASSION", "STRATÉGIE", "EVENT", "CONSEIL", "COMMUNICATION", "RÊVER", "AMBITION", "IMAGINATION", "agir", "s'adapter", "anticiper", "autonomie", "croissance", "défi", "planifier", "positiver", "disponibilité", "dynamisme", "écoute", "service", "prévision", "ténacité", "qualité", "mobiliser", "négocier", "objectifs", "optimiser", "challenge", "réussir", "excellence", "réaliser", "résultats", "développer", "savoirfaire", "dialogue", "prévoir", "synergie", "projet", "innovation", "motivation"];
  (0,react__WEBPACK_IMPORTED_MODULE_19__.useEffect)(function () {
    function getWord() {
      var word = randomWord[Math.floor(Math.random() * randomWord.length)];
      randomWord.splice(randomWord.indexOf(word));
      return word;
    }
    var word1 = getWord();
    var word2 = getWord();
    setWords([word1, word2]);
  }, []);
  aos__WEBPACK_IMPORTED_MODULE_20___default().init();
  category.forEach(function (element) {
    var item = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("a", {
      key: element.id,
      style: {
        textDecoration: "none",
        color: "white"
      },
      href: "/searchcat/client/".concat(element.id, "/").concat(element.categorie)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("p", {
      style: {
        display: "block",
        textAlign: "center",
        textDecoration: "none",
        color: "white"
      },
      className: "light"
    }, element.categorie));
    menu.push(item);
  });
  if (words.length > 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement((react__WEBPACK_IMPORTED_MODULE_19___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
      className: "background1",
      alt: "homepage"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("video", {
      playsInline: true,
      autoPlay: true,
      muted: true,
      loop: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("source", {
      src: "/zenith/video/videobg.mp4",
      type: "video/mp4"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
      className: "opacityBlue"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
      className: "wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
      className: "container center2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
      className: "containerCenter",
      "data-aos": "fade-up"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_28__.Link, {
      to: "/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("img", {
      src: "/zenith/images/bIO1r9F.png",
      alt: "Logo",
      width: 200,
      className: "center"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
      className: "workpageText",
      "data-aos": "fade-up"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("h1", {
      className: "medium"
    }, "S\xC9L\xC9CTION DE CLIENT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
      className: "columns",
      style: {
        "float": "right",
        marginRight: "10px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("p", {
      style: {
        textTransform: "uppercase"
      },
      className: "light"
    }, words[0], " . ", words[1], " .", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(Accordion, {
      onChange: handleChange("panel1")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(AccordionSummary, {
      "aria-controls": "panel1d-content",
      id: "panel1d-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("p", {
      style: {
        marginTop: "5px"
      }
    }, "\xA0CAT\xC9GORIE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(AccordionDetails, null, menu)))))))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkpageClientOne);

/***/ }),

/***/ "./assets/components/WorkpageClient/_workpageClientTwo.jsx":
/*!*****************************************************************!*\
  !*** ./assets/components/WorkpageClient/_workpageClientTwo.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-pagination */ "./node_modules/rc-pagination/es/index.js");
/* harmony import */ var _stylesheets_bulma_grid_columns_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../stylesheets/bulma/grid/columns.sass */ "./assets/stylesheets/bulma/grid/columns.sass");
/* harmony import */ var _stylesheets_bulma_helpers_spacing_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../stylesheets/bulma/helpers/spacing.sass */ "./assets/stylesheets/bulma/helpers/spacing.sass");
/* harmony import */ var _stylesheets_pagination_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../stylesheets/pagination.less */ "./assets/stylesheets/pagination.less");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");









function WorkpageClientTwo(_ref) {
  var data = _ref.data,
    page = _ref.page,
    count = _ref.count,
    loaded = _ref.loaded;
  var pageNbr = Math.ceil(count / 20);
  var nbr = parseInt(page);
  function onChange(params) {
    document.location = "/clients/".concat(params);
  }
  var box = [];
  for (var index = 0; index < data.length; index++) {
    var item = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      key: index,
      className: "column columns is-one-fifth is-centered"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "is-half"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
      href: "/client/" + data[index].id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "boxWorkpage1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
      style: {
        position: "absolute"
      },
      className: "textDeco"
    }, data[index].mission), data[index].hasOwnProperty('header') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      src: "/images/imageclient/" + data[index].header,
      alt: ""
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      src: "/zenith/autre/noImg.png",
      alt: ""
    })))));
    box.push(item);
  }
  if (loaded == true) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_parallax__WEBPACK_IMPORTED_MODULE_2__.Parallax, {
      bgImage: "/zenith/images/Z1zIJCKk.jpeg",
      blur: {
        min: -1,
        max: 3
      },
      strength: 400
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "pt-6",
      alt: "action"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "pt-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "columns is-multiline is-centered"
    }, box), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "columns is-mobile is-centered",
      style: {
        width: "100%",
        height: "150px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(rc_pagination__WEBPACK_IMPORTED_MODULE_3__["default"], {
      current: nbr,
      onChange: onChange,
      pageSize: 1,
      total: pageNbr,
      showTitle: false
    })))))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkpageClientTwo);

/***/ }),

/***/ "./assets/components/Workpage/_workpage.jsx":
/*!**************************************************!*\
  !*** ./assets/components/Workpage/_workpage.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _workpageOne__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_workpageOne */ "./assets/components/Workpage/_workpageOne.jsx");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../_navbar */ "./assets/components/_navbar.jsx");
/* harmony import */ var _rsButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../_rsButton */ "./assets/components/_rsButton.jsx");
/* harmony import */ var _linesTop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../_linesTop */ "./assets/components/_linesTop.jsx");
/* harmony import */ var _linesBottom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../_linesBottom */ "./assets/components/_linesBottom.jsx");
/* harmony import */ var _workpageTwo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_workpageTwo */ "./assets/components/Workpage/_workpageTwo.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _Homepage_miniFooter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../Homepage/_miniFooter */ "./assets/components/Homepage/_miniFooter.jsx");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function Workpage() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_21__.useParams)(),
    nbr = _useParams.nbr;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoaded = _useState4[0],
    setIsLoaded = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isCountLoaded = _useState6[0],
    setIsCountLoaded = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isCatLoaded = _useState8[0],
    setIsCatLoaded = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    items = _useState10[0],
    setItems = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    cat = _useState12[0],
    setCat = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    count = _useState14[0],
    setCount = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)("hidden"),
    _useState16 = _slicedToArray(_useState15, 2),
    load = _useState16[0],
    setLoad = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    unload = _useState18[0],
    setUnload = _useState18[1];
  var setLoading = function setLoading(param) {
    if (param == true) {
      setLoad("visible");
      setUnload(true);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_19__.useEffect)(function () {
    fetch("/gettAllProject/".concat(nbr), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function (res) {
      return res.json();
    }).then(function (result) {
      setItems(result);
      setIsLoaded(true);
      console.log(result);
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    function (error) {
      setIsLoaded(true);
      setError(error);
      console.log(error);
    });
    fetch("/getCount/projet", {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function (res) {
      return res.json();
    }).then(function (result) {
      setCount(result);
      setIsCountLoaded(true);
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    function (error) {
      setIsCountLoaded(true);
      setError(error);
      console.log(error);
    });
    fetch("/api/categories", {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function (res) {
      return res.json();
    }).then(function (result) {
      setCat(result);
      setIsCatLoaded(true);
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    function (error) {
      setIsCountLoaded(true);
      setError(error);
      console.log(error);
    });
  }, []);
  if (error) {
    return /*#__PURE__*/React.createElement("div", null, "Error: ", error.message);
  } else if (!isLoaded || !isCountLoaded || !isCatLoaded || document.readyState !== 'complete') {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
      id: "ReactLoader",
      width: "200",
      height: "200",
      viewBox: "0 0 100 100"
    }, /*#__PURE__*/React.createElement("polyline", {
      className: "line-cornered stroke-still",
      points: "0,0 100,0 100,100",
      strokeWidth: "10",
      fill: "none"
    }), /*#__PURE__*/React.createElement("polyline", {
      className: "line-cornered stroke-still",
      points: "0,0 0,100 100,100",
      strokeWidth: "10",
      fill: "none"
    }), /*#__PURE__*/React.createElement("polyline", {
      className: "line-cornered stroke-animation",
      points: "0,0 100,0 100,100",
      strokeWidth: "10",
      fill: "none"
    }), /*#__PURE__*/React.createElement("polyline", {
      className: "line-cornered stroke-animation",
      points: "0,0 0,100 100,100",
      strokeWidth: "10",
      fill: "none"
    })));
  } else {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_navbar__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/React.createElement(_rsButton__WEBPACK_IMPORTED_MODULE_15__["default"], null), /*#__PURE__*/React.createElement(_linesTop__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/React.createElement(_linesBottom__WEBPACK_IMPORTED_MODULE_17__["default"], null), /*#__PURE__*/React.createElement(_workpageOne__WEBPACK_IMPORTED_MODULE_13__["default"], {
      setLoading: setLoading,
      cat: cat
    }), /*#__PURE__*/React.createElement(_workpageTwo__WEBPACK_IMPORTED_MODULE_18__["default"], {
      loaded: unload,
      data: items,
      page: nbr,
      count: count
    }), /*#__PURE__*/React.createElement(_Homepage_miniFooter__WEBPACK_IMPORTED_MODULE_20__["default"], {
      loaded: unload
    }));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Workpage);

/***/ }),

/***/ "./assets/components/Workpage/_workpageOne.jsx":
/*!*****************************************************!*\
  !*** ./assets/components/Workpage/_workpageOne.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/esm/styles/styled.js");
/* harmony import */ var _mui_icons_material_ArrowForwardIosSharp__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/icons-material/ArrowForwardIosSharp */ "./node_modules/@mui/icons-material/ArrowForwardIosSharp.js");
/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/Accordion */ "./node_modules/@mui/material/esm/Accordion/Accordion.js");
/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/AccordionSummary */ "./node_modules/@mui/material/esm/AccordionSummary/AccordionSummary.js");
/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/AccordionDetails */ "./node_modules/@mui/material/esm/AccordionDetails/AccordionDetails.js");



















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var Accordion = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_20__["default"])(function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"], _extends({
    disableGutters: true,
    elevation: 0,
    square: true
  }, props));
})(function (_ref) {
  var theme = _ref.theme;
  return {
    maxWidth: "185px",
    backgroundColor: "rgba(0,0,0,0)",
    color: "white"
  };
});
var AccordionSummary = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_20__["default"])(function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_22__["default"], _extends({
    expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_mui_icons_material_ArrowForwardIosSharp__WEBPACK_IMPORTED_MODULE_23__["default"], {
      sx: {
        fontSize: "0.9rem"
      }
    })
  }, props));
})(function (_ref2) {
  var theme = _ref2.theme;
  return {
    color: "white",
    backgroundColor: theme.palette.mode === "darl" ? "rgba(255, 255, 255, .05)" : "rgba(0, 0, 0, .03)",
    flexDirection: "row",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)"
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1)
    }
  };
});
var AccordionDetails = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_20__["default"])(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_24__["default"])(function (_ref3) {
  var theme = _ref3.theme;
  return {
    padding: theme.spacing(2),
    paddingTop: 0,
    marginTop: 0,
    maxHeight: "150px",
    overflow: "scroll"
  };
});
function WorkpageOne(_ref4) {
  var setLoading = _ref4.setLoading,
    cat = _ref4.cat;
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_19___default().useState("panel1"),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    expanded = _React$useState2[0],
    setExpanded = _React$useState2[1];
  var handleChange = function handleChange(panel) {
    return function (event, newExpanded) {
      setExpanded(newExpanded ? panel : false);
    };
  };
  (0,react__WEBPACK_IMPORTED_MODULE_19__.useEffect)(function () {
    setLoading(true);
  }, [1]);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    words = _useState2[0],
    setWords = _useState2[1];
  var category = cat;
  var menu = [];
  var randomWord = ["RÉACTIVITÉ", "PROXIMITÉ", "PASSION", "STRATÉGIE", "EVENT", "CONSEIL", "COMMUNICATION", "RÊVER", "AMBITION", "IMAGINATION", "agir", "s'adapter", "anticiper", "autonomie", "croissance", "défi", "planifier", "positiver", "disponibilité", "dynamisme", "écoute", "service", "prévision", "ténacité", "qualité", "mobiliser", "négocier", "objectifs", "optimiser", "challenge", "réussir", "excellence", "réaliser", "résultats", "développer", "savoirfaire", "dialogue", "prévoir", "synergie", "projet", "innovation", "motivation"];
  (0,react__WEBPACK_IMPORTED_MODULE_19__.useEffect)(function () {
    function getWord() {
      var word = randomWord[Math.floor(Math.random() * randomWord.length)];
      randomWord.splice(randomWord.indexOf(word));
      return word;
    }
    var word1 = getWord();
    var word2 = getWord();
    setWords([word1, word2]);
  }, []);
  category.forEach(function (element) {
    var item = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("a", {
      key: element.id,
      style: {
        textDecoration: "none",
        color: "white"
      },
      href: "/searchcat/projet/".concat(element.id, "/").concat(element.categorie)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("p", {
      style: {
        display: "block",
        textAlign: "center",
        textDecoration: "none",
        color: "white"
      },
      className: "light"
    }, element.categorie));
    menu.push(item);
  });
  if (words.length > 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement((react__WEBPACK_IMPORTED_MODULE_19___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
      className: "background1",
      alt: "homepage"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("video", {
      playsInline: true,
      autoPlay: true,
      muted: true,
      loop: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("source", {
      src: "/zenith/video/videobg.mp4",
      type: "video/mp4"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
      className: "opacityBlue"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
      className: "wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
      className: "container center2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
      className: "containerCenter",
      "data-aos": "fade-up"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_25__.Link, {
      to: "/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("img", {
      src: "/zenith/images/bIO1r9F.png",
      alt: "Logo",
      width: 200,
      className: "center"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
      className: "workpageText",
      "data-aos": "fade-up"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("h1", {
      className: "medium"
    }, "S\xC9L\xC9CTION DE PROJET"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
      className: "columns",
      style: {
        "float": "right",
        marginRight: "10px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("p", {
      style: {
        textTransform: "uppercase"
      },
      className: "light"
    }, words[0], " . ", words[1], " .", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(Accordion, {
      onChange: handleChange("panel1")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(AccordionSummary, {
      "aria-controls": "panel1d-content",
      id: "panel1d-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("p", {
      style: {
        marginTop: "5px"
      }
    }, "\xA0CAT\xC9GORIE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(AccordionDetails, null, menu)))))))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkpageOne);

/***/ }),

/***/ "./assets/components/Workpage/_workpageTwo.jsx":
/*!*****************************************************!*\
  !*** ./assets/components/Workpage/_workpageTwo.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-pagination */ "./node_modules/rc-pagination/es/index.js");




function WorkpageTwo(_ref) {
  var data = _ref.data,
    page = _ref.page,
    count = _ref.count,
    loaded = _ref.loaded;
  console.log(count);
  var pageNbr = Math.ceil(count / 20);
  var nbr = parseInt(page);
  function onChange(params) {
    document.location = "/projets/".concat(params);
  }
  var box = [];
  for (var index = 0; index < data.length; index++) {
    var item = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      key: index,
      className: "column columns is-one-fifth is-centered"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "is-half"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
      href: "/projet/" + data[index].id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "boxWorkpage1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
      style: {
        position: "absolute"
      },
      className: "textDeco"
    }, data[index].mission), data[index].header ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      src: "/images/imageprojet/" + data[index].header,
      alt: ""
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      src: "/zenith/autre/noImg.png",
      alt: ""
    })))));
    box.push(item);
  }
  if (loaded) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_parallax__WEBPACK_IMPORTED_MODULE_2__.Parallax, {
      bgImage: "/zenith/images/Z1zIJCKk.jpeg",
      blur: {
        min: -1,
        max: 3
      },
      strength: 400
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "pt-6",
      alt: "action"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "pt-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "columns is-multiline is-centered"
    }, box), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "columns is-mobile is-centered",
      style: {
        width: "100%",
        height: "150px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(rc_pagination__WEBPACK_IMPORTED_MODULE_3__["default"], {
      current: nbr,
      onChange: onChange,
      pageSize: 1,
      total: pageNbr,
      showTitle: false
    })))))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkpageTwo);

/***/ }),

/***/ "./assets/components/_home.jsx":
/*!*************************************!*\
  !*** ./assets/components/_home.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/font.css */ "./assets/styles/font.css");
/* harmony import */ var _Homepage_homepage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Homepage/_homepage */ "./assets/components/Homepage/_homepage.jsx");
/* harmony import */ var _Homepage_word__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Homepage/_word */ "./assets/components/Homepage/_word.jsx");
/* harmony import */ var _Homepage_emotion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Homepage/_emotion */ "./assets/components/Homepage/_emotion.jsx");
/* harmony import */ var _Homepage_action__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Homepage/_action */ "./assets/components/Homepage/_action.jsx");
/* harmony import */ var _Homepage_creation__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Homepage/_creation */ "./assets/components/Homepage/_creation.jsx");
/* harmony import */ var _Homepage_satisfaction__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Homepage/_satisfaction */ "./assets/components/Homepage/_satisfaction.jsx");
/* harmony import */ var _Homepage_chiffres__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Homepage/_chiffres */ "./assets/components/Homepage/_chiffres.jsx");
/* harmony import */ var _Homepage_vision__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Homepage/_vision */ "./assets/components/Homepage/_vision.jsx");
/* harmony import */ var _Homepage_footer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Homepage/_footer */ "./assets/components/Homepage/_footer.jsx");
/* harmony import */ var _Homepage_insta__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Homepage/_insta */ "./assets/components/Homepage/_insta.jsx");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_navbar */ "./assets/components/_navbar.jsx");
/* harmony import */ var _rsButton__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_rsButton */ "./assets/components/_rsButton.jsx");
/* harmony import */ var _linesTop__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./_linesTop */ "./assets/components/_linesTop.jsx");
/* harmony import */ var _linesBottom__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./_linesBottom */ "./assets/components/_linesBottom.jsx");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var _styles_loader_css__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../styles/loader.css */ "./assets/styles/loader.css");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




//import scrollIntoView from 'scroll-into-view-if-needed'


















function Home() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    items = _useState2[0],
    setItems = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    insta = _useState4[0],
    setInsta = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isLoaded = _useState6[0],
    setIsLoaded = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    fetch("/gettAllCreation", {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function (res) {
      return res.json();
    }).then(function (result) {
      console.log(result);
      setIsLoaded(true);
      setItems(result);
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    function (error) {
      console.log(error);
    });

    // fetch(`https://www.instagram.com/agencezenith/?__a=1?__a=1&__d=dis`,{method:'GET',})
    // .then(res => res.json())
    // .then((resultInsta) => {
    // 	console.log("toto")
    // 	console.log(resultInsta)
    //   },
    //   // Note: it's important to handle errors here
    //   // instead of a catch() block so that we don't swallow
    //   // exceptions from actual bugs in components.
    //   (error) => {
    // 	console.log(error)
    //   }
    // )
  }, []);
  if (isLoaded == false || document.readyState !== 'complete') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement((react__WEBPACK_IMPORTED_MODULE_13___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("svg", {
      id: "ReactLoader",
      width: "200",
      height: "200",
      viewBox: "0 0 100 100"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("polyline", {
      className: "line-cornered stroke-still",
      points: "0,0 100,0 100,100",
      strokeWidth: "10",
      fill: "none"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("polyline", {
      className: "line-cornered stroke-still",
      points: "0,0 0,100 100,100",
      strokeWidth: "10",
      fill: "none"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("polyline", {
      className: "line-cornered stroke-animation",
      points: "0,0 100,0 100,100",
      strokeWidth: "10",
      fill: "none"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("polyline", {
      className: "line-cornered stroke-animation",
      points: "0,0 0,100 100,100",
      strokeWidth: "10",
      fill: "none"
    })));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement((react__WEBPACK_IMPORTED_MODULE_13___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_navbar__WEBPACK_IMPORTED_MODULE_26__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_linesTop__WEBPACK_IMPORTED_MODULE_28__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_linesBottom__WEBPACK_IMPORTED_MODULE_29__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_rsButton__WEBPACK_IMPORTED_MODULE_27__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_scroll__WEBPACK_IMPORTED_MODULE_14__.Element, {
      name: "scroll-to-element1",
      className: "element"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_Homepage_homepage__WEBPACK_IMPORTED_MODULE_16__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_Homepage_word__WEBPACK_IMPORTED_MODULE_17__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_scroll__WEBPACK_IMPORTED_MODULE_14__.Element, {
      name: "scroll-to-element3",
      className: "element"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_Homepage_emotion__WEBPACK_IMPORTED_MODULE_18__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_scroll__WEBPACK_IMPORTED_MODULE_14__.Element, {
      name: "scroll-to-element4",
      className: "element"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_Homepage_action__WEBPACK_IMPORTED_MODULE_19__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_scroll__WEBPACK_IMPORTED_MODULE_14__.Element, {
      name: "scroll-to-element5",
      className: "element"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_Homepage_creation__WEBPACK_IMPORTED_MODULE_20__["default"], {
      item: items
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_scroll__WEBPACK_IMPORTED_MODULE_14__.Element, {
      name: "scroll-to-element6",
      className: "element"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_Homepage_satisfaction__WEBPACK_IMPORTED_MODULE_21__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_scroll__WEBPACK_IMPORTED_MODULE_14__.Element, {
      name: "scroll-to-element7",
      className: "element"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_Homepage_chiffres__WEBPACK_IMPORTED_MODULE_22__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_scroll__WEBPACK_IMPORTED_MODULE_14__.Element, {
      name: "scroll-to-element8",
      className: "element"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_Homepage_vision__WEBPACK_IMPORTED_MODULE_23__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_scroll__WEBPACK_IMPORTED_MODULE_14__.Element, {
      name: "scroll-to-element8",
      className: "element"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_Homepage_insta__WEBPACK_IMPORTED_MODULE_25__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_Homepage_footer__WEBPACK_IMPORTED_MODULE_24__["default"], null));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./assets/components/_linesBottom.jsx":
/*!********************************************!*\
  !*** ./assets/components/_linesBottom.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function LinesBottom() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "lineB",
    "data-aos": "fade-up",
    "data-aos-duration": "1200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "line4"
  }), /*#__PURE__*/React.createElement("div", {
    className: "line5 lineAnime2"
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinesBottom);

/***/ }),

/***/ "./assets/components/_linesTop.jsx":
/*!*****************************************!*\
  !*** ./assets/components/_linesTop.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function LinesTop() {
  var audio = new Audio("/zenith/autre/Horizon.mp3");
  var start = function start() {
    audio.play();
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "lineA",
    "data-aos": "fade-down"
  }, /*#__PURE__*/React.createElement("div", {
    className: "line2",
    onClick: start
  }), /*#__PURE__*/React.createElement("div", {
    className: "line3 lineAnime"
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinesTop);

/***/ }),

/***/ "./assets/components/_navbar.jsx":
/*!***************************************!*\
  !*** ./assets/components/_navbar.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function navbar() {
  aos__WEBPACK_IMPORTED_MODULE_13___default().init();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    searchInput = _useState2[0],
    setSearchInput = _useState2[1];
  var handleChange = function handleChange(e) {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  var teleport = function teleport(e) {
    e.preventDefault();
    location.replace('/search/' + searchInput);
    //window.location.href = "/search/"+searchInput
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    id: "menu__toggle",
    type: "checkbox"
  }), /*#__PURE__*/React.createElement("label", {
    className: "menu__btn",
    htmlFor: "menu__toggle",
    "data-aos": "fade-down",
    "data-aos-duration": "1200"
  }, /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("ul", {
    className: "menu__box",
    "data-aos": "fade-right"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: teleport
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '75%'
    },
    className: "form__group field divC1 menu__item1"
  }, /*#__PURE__*/React.createElement("input", {
    type: "input",
    size: "15",
    className: "form__field",
    placeholder: "Name",
    id: "email",
    value: searchInput,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "name",
    className: "form__label"
  }, "Recherche"))), /*#__PURE__*/React.createElement("h5", {
    className: "menu__item light letterSpacingS"
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
    className: "textDeco marginStop",
    to: "/"
  }, "ACCUEIL")), /*#__PURE__*/React.createElement("h5", {
    className: "menu__item light letterSpacingS"
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
    className: "textDeco",
    to: "/clients/1"
  }, "CLIENTS")), /*#__PURE__*/React.createElement("h5", {
    className: "menu__item light letterSpacingS"
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
    className: "textDeco",
    to: "/projets/1"
  }, "PROJETS")), /*#__PURE__*/React.createElement("h5", {
    className: "menu__item light letterSpacingS"
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
    className: "textDeco",
    to: "/contact"
  }, "CONTACT")), /*#__PURE__*/React.createElement("a", {
    className: "textDeco letterSpacingS",
    href: "/login"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "menu__item textDeco light"
  }, "ADMIN"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbar);

/***/ }),

/***/ "./assets/components/_rsButton.jsx":
/*!*****************************************!*\
  !*** ./assets/components/_rsButton.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);


function RsButton() {
  aos__WEBPACK_IMPORTED_MODULE_1___default().init({
    once: true
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "rs aos-item overflowHidden",
    "data-aos": "fade-up",
    "data-aos-duration": "1200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "fb",
    href: "https://www.facebook.com/AGENCEZENITH/"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "insta",
    href: "https://www.instagram.com/agencezenith/?hl=fr"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "linkedin",
    href: "https://www.linkedin.com/company/agence-zenith/"
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RsButton);

/***/ }),

/***/ "./assets/styles/arrow.css":
/*!*********************************!*\
  !*** ./assets/styles/arrow.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/font.css":
/*!********************************!*\
  !*** ./assets/styles/font.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/loader.css":
/*!**********************************!*\
  !*** ./assets/styles/loader.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/stylesheets/bulma/elements/container.sass":
/*!**********************************************************!*\
  !*** ./assets/stylesheets/bulma/elements/container.sass ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/stylesheets/bulma/grid/columns.sass":
/*!****************************************************!*\
  !*** ./assets/stylesheets/bulma/grid/columns.sass ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/stylesheets/bulma/helpers/spacing.sass":
/*!*******************************************************!*\
  !*** ./assets/stylesheets/bulma/helpers/spacing.sass ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/stylesheets/main.sass":
/*!**************************************!*\
  !*** ./assets/stylesheets/main.sass ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/stylesheets/pagination.less":
/*!********************************************!*\
  !*** ./assets/stylesheets/pagination.less ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_web_timers_js","vendors-node_modules_mui_icons-material_ArrowForwardIosSharp_js-node_modules_mui_material_esm-351d47"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0Q7QUFDM0M7QUFDUztBQUNhO0FBQ2tCO0FBQ1Q7QUFDSDtBQUN0QjtBQUN5QjtBQUNIO0FBQ0c7QUFDbEI7QUFDSTtBQUN4QjtBQUNFO0FBQ21CO0FBQ0c7QUFDWjtBQUV0QyxJQUFNYyxJQUFJLEdBQUcsU0FBUEEsSUFBSSxHQUFTO0VBRWpCLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPLE9BQW1CO0lBQUEsSUFBZEMsUUFBUSxRQUFSQSxRQUFRO0lBQ3hCLElBQU1DLFFBQVEsR0FBR2IsOERBQVcsRUFBRTtJQUM5Qk0sc0RBQWUsQ0FBQyxZQUFNO01BQ3BCUSxRQUFRLENBQUNDLGVBQWUsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQyxFQUFFLENBQUNILFFBQVEsQ0FBQ0ksUUFBUSxDQUFDLENBQUM7SUFDdkIsT0FBT0wsUUFBUTtFQUNqQixDQUFDO0VBRUQsb0JBQ0UsdUlBQ0EsMkRBQUMsNERBQWEscUJBQ1osMkRBQUMsT0FBTyxxQkFDTiwyREFBQyxxREFBTSxxQkFFTCwyREFBQyxvREFBSztJQUFDLEtBQUs7SUFBQyxJQUFJLEVBQUMsR0FBRztJQUFDLE9BQU8sZUFBRSwyREFBQyw0REFBSTtFQUFJLEVBQUcsZUFDM0MsMkRBQUMsb0RBQUs7SUFBQyxLQUFLO0lBQUMsSUFBSSxFQUFDLGVBQWU7SUFBQyxPQUFPLGVBQUUsMkRBQUMscUVBQVE7RUFBSSxFQUFHLGVBQzNELDJEQUFDLG9EQUFLO0lBQUMsS0FBSztJQUFDLElBQUksRUFBQyxlQUFlO0lBQUMsT0FBTyxlQUFFLDJEQUFDLGlGQUFjO0VBQUksRUFBRyxlQUNqRSwyREFBQyxvREFBSztJQUFDLEtBQUs7SUFBQyxJQUFJLEVBQUMsVUFBVTtJQUFDLE9BQU8sZUFBRSwyREFBQywyRUFBVztFQUFJLEVBQUcsZUFDekQsMkRBQUMsb0RBQUs7SUFBQyxLQUFLO0lBQUMsSUFBSSxFQUFDLGFBQWE7SUFBQyxPQUFPLGVBQUUsMkRBQUMseUVBQVU7RUFBSSxFQUFHLGVBQzNELDJEQUFDLG9EQUFLO0lBQUMsS0FBSztJQUFDLElBQUksRUFBQyxhQUFhO0lBQUMsT0FBTyxlQUFFLDJEQUFDLDJFQUFXO0VBQUksRUFBRyxlQUM1RCwyREFBQyxvREFBSztJQUFDLEtBQUs7SUFBQyxJQUFJLEVBQUMsZUFBZTtJQUFDLE9BQU8sZUFBRSwyREFBQyx5RUFBVTtFQUFJLEVBQUcsZUFDN0QsMkRBQUMsb0RBQUs7SUFBQyxLQUFLO0lBQUMsSUFBSSxFQUFDLDhCQUE4QjtJQUFDLE9BQU8sZUFBRSwyREFBQywyRUFBVztFQUFJLEVBQUcsQ0FDdEUsQ0FDRCxDQUNJLENBQ2I7QUFFUCxDQUFDO0FBRUQsaUVBQWVGLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQ25ETztBQUNHO0FBQzdCUSxNQUFNLENBQUN0QixLQUFLLEdBQUdBLDhDQUFLO0FBQzBCO0FBRTlDLElBQU13QixTQUFTLEdBQUdOLFFBQVEsQ0FBQ08sY0FBYyxDQUFDLE1BQU0sQ0FBQztBQUNqRCxJQUFNQyxJQUFJLEdBQUdILDREQUFVLENBQUNDLFNBQVMsQ0FBQztBQUNsQ0UsSUFBSSxDQUFDQyxNQUFNLGVBRVAsMkRBQUMsZ0RBQUksT0FBRyxDQUVYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWCtCO0FBQ2E7QUFDQTtBQUNJO0FBQ0Y7QUFDQTtBQUNGO0FBQ0E7QUFDRDtBQUNkO0FBQ2U7QUFDYjtBQUNpQjtBQUVqRCxTQUFTYSxVQUFVLEdBQUc7RUFDckIsaUJBQWVMLDREQUFTLEVBQUU7SUFBbEJNLEVBQUUsY0FBRkEsRUFBRTtFQUNWLGdCQUEwQkosZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQTtJQUFqQ0ssS0FBSztJQUFFQyxRQUFRO0VBQ3RCLGlCQUFnQ04sZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUF4Q08sUUFBUTtJQUFFQyxXQUFXO0VBQzVCLGlCQUFzQ1IsZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUE5Q1MsV0FBVztJQUFFQyxjQUFjO0VBQ2xDLGlCQUFnRFYsZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUF4RFcsZ0JBQWdCO0lBQUVDLG1CQUFtQjtFQUM1QyxpQkFBa0NaLGdEQUFRLENBQUMsS0FBSyxDQUFDO0lBQUE7SUFBMUNhLFVBQVU7SUFBRUMsV0FBVztFQUM5QixrQkFBMEJkLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBL0JlLEtBQUs7SUFBRUMsUUFBUTtFQUN0QixrQkFBNEJoQixnREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQWpDaUIsTUFBTTtJQUFFQyxTQUFTO0VBQ3hCLGtCQUE0QmxCLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBakNtQixNQUFNO0lBQUVDLFNBQVM7RUFDeEIsa0JBQTBCcEIsZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTtJQUEvQnFCLEtBQUs7SUFBRUMsUUFBUTtFQUN0QixrQkFBNEJ0QixnREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQWpDdUIsTUFBTTtJQUFFQyxTQUFTO0VBQ3hCLGtCQUFnQ3hCLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBckN5QixRQUFRO0lBQUVDLFdBQVc7RUFDNUIsa0JBQThCMUIsZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTtJQUFuQzJCLE9BQU87SUFBRUMsVUFBVTtFQUMxQixrQkFBOEM1QixnREFBUSxDQUFDLEtBQUssQ0FBQztJQUFBO0lBQXRENkIsZUFBZTtJQUFFQyxrQkFBa0I7RUFDMUMsSUFBRzFCLEVBQUUsRUFBQztJQUNMTCxpREFBUyxDQUFDLFlBQU07TUFDZmdDLEtBQUssd0JBQWlCM0IsRUFBRSxHQUFHO1FBQUM0QixNQUFNLEVBQUMsS0FBSztRQUFDQyxPQUFPLEVBQUM7VUFBQ0MsTUFBTSxFQUFFLGtCQUFrQjtVQUFDLGNBQWMsRUFBRTtRQUFrQjtNQUFDLENBQUMsQ0FBQyxDQUNqSEMsSUFBSSxDQUFDLFVBQUFDLEdBQUc7UUFBQSxPQUFJQSxHQUFHLENBQUNDLElBQUksRUFBRTtNQUFBLEVBQUMsQ0FDdkJGLElBQUksQ0FDSixVQUFDRyxNQUFNLEVBQUs7UUFDWjlCLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDakJRLFFBQVEsQ0FBQ3NCLE1BQU0sQ0FBQztRQUNoQjtNQUNBLENBQUM7TUFDRDtNQUNBO01BQ0E7TUFDQSxVQUFDakMsS0FBSyxFQUFLO1FBQ1hHLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDakJGLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDO01BQ2YsQ0FBQyxDQUNEO01BRUQwQixLQUFLLDRCQUFxQjNCLEVBQUUsR0FBRztRQUFDNEIsTUFBTSxFQUFDLEtBQUs7UUFBQ0MsT0FBTyxFQUFDO1VBQUNDLE1BQU0sRUFBRSxrQkFBa0I7VUFBQyxjQUFjLEVBQUU7UUFBa0I7TUFBQyxDQUFDLENBQUMsQ0FDckhDLElBQUksQ0FBQyxVQUFBQyxHQUFHO1FBQUEsT0FBSUEsR0FBRyxDQUFDQyxJQUFJLEVBQUU7TUFBQSxFQUFDLENBQ3ZCRixJQUFJLENBQ0osVUFBQ0csTUFBTSxFQUFLO1FBQ1osSUFBSUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsTUFBTSxDQUFDO1FBQ2hDNUIsY0FBYyxDQUFDLElBQUksQ0FBQztRQUNwQlEsU0FBUyxDQUFDc0IsSUFBSSxDQUFDQyxLQUFLLENBQUNILE1BQU0sQ0FBQyxDQUFDO1FBQzdCO1FBQ0EsSUFBR0MsT0FBTyxFQUFDO1VBQ1YsS0FBSSxJQUFJRyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdILE9BQU8sQ0FBQ0ksTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBQztZQUN0QztZQUNBO1lBQ0EsSUFBR0gsT0FBTyxDQUFDRyxDQUFDLENBQUMsQ0FBQ3ZCLE1BQU0sRUFDbkJDLFNBQVMsQ0FBQ21CLE9BQU8sQ0FBQ0csQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBR0gsT0FBTyxDQUFDRyxDQUFDLENBQUMsQ0FBQ0UsY0FBYyxFQUMzQnRCLFFBQVEsQ0FBQ2lCLE9BQU8sQ0FBQ0csQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBR0gsT0FBTyxDQUFDRyxDQUFDLENBQUMsQ0FBQ0csVUFBVSxFQUN2QnJCLFNBQVMsQ0FBQ2UsT0FBTyxDQUFDRyxDQUFDLENBQUMsQ0FBQztZQUN0QjtZQUNBO1lBQ0EsSUFBR0gsT0FBTyxDQUFDSSxNQUFNLEdBQUMsQ0FBQyxJQUFJRCxDQUFDLEVBQUM7Y0FDeEI1QixXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ2xCO1VBRUQ7UUFDRDtRQUNBLElBQUd5QixPQUFPLENBQUNJLE1BQU0sSUFBSSxDQUFDLEVBQUM7VUFDdEI3QixXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ2xCO01BQ0EsQ0FBQztNQUNEO01BQ0E7TUFDQTtNQUNBLFVBQUNULEtBQUssRUFBSztRQUNYRyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ2pCRixRQUFRLENBQUNELEtBQUssQ0FBQztRQUNmeUMsT0FBTyxDQUFDQyxHQUFHLENBQUMxQyxLQUFLLENBQUM7TUFDbEIsQ0FBQyxDQUNEO01BQ0QwQixLQUFLLG9CQUFhM0IsRUFBRSxHQUFHO1FBQUM0QixNQUFNLEVBQUMsS0FBSztRQUFDQyxPQUFPLEVBQUM7VUFBQ0MsTUFBTSxFQUFFLGtCQUFrQjtVQUFDLGNBQWMsRUFBRTtRQUFrQjtNQUFDLENBQUMsQ0FBQyxDQUM3R0MsSUFBSSxDQUFDLFVBQUFDLEdBQUc7UUFBQSxPQUFJQSxHQUFHLENBQUNDLElBQUksRUFBRTtNQUFBLEVBQUMsQ0FDdkJGLElBQUksQ0FDSixVQUFDRyxNQUFNLEVBQUs7UUFDWixJQUFJVSxJQUFJLEdBQUdSLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSVcsSUFBSSxHQUFHVCxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUdVLElBQUksSUFBSUMsSUFBSSxFQUFDO1VBQ2Z2QixXQUFXLENBQUMsQ0FBQ3NCLElBQUksRUFBRUMsSUFBSSxDQUFDLENBQUM7VUFDekIsSUFBR3hCLFFBQVEsRUFBQztZQUNYcUIsT0FBTyxDQUFDQyxHQUFHLENBQUN0QixRQUFRLENBQUM7WUFDckJiLG1CQUFtQixDQUFDLElBQUksQ0FBQztVQUMxQjtRQUNEO01BQ0EsQ0FBQztNQUNEO01BQ0E7TUFDQTtNQUNBLFVBQUNQLEtBQUssRUFBSztRQUNYRyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ2pCRixRQUFRLENBQUNELEtBQUssQ0FBQztRQUNmeUMsT0FBTyxDQUFDQyxHQUFHLENBQUMxQyxLQUFLLENBQUM7TUFDbEIsQ0FBQyxDQUNEO01BQ0QwQixLQUFLLG1DQUE0QjNCLEVBQUUsR0FBRztRQUFDNEIsTUFBTSxFQUFDLEtBQUs7UUFBQ0MsT0FBTyxFQUFDO1VBQUNDLE1BQU0sRUFBRSxrQkFBa0I7VUFBQyxjQUFjLEVBQUU7UUFBa0I7TUFBQyxDQUFDLENBQUMsQ0FDNUhDLElBQUksQ0FBQyxVQUFBQyxHQUFHO1FBQUEsT0FBSUEsR0FBRyxDQUFDQyxJQUFJLEVBQUU7TUFBQSxFQUFDLENBQ3ZCRixJQUFJLENBQ0osVUFBQ0csTUFBTSxFQUFLO1FBQ1pSLGtCQUFrQixDQUFDLElBQUksQ0FBQztRQUN4QkYsVUFBVSxDQUFDVSxNQUFNLENBQUM7UUFDbEJRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxNQUFNLENBQUM7TUFDbkIsQ0FBQztNQUNEO01BQ0E7TUFDQTtNQUNBLFVBQUNqQyxLQUFLLEVBQUs7UUFDWEcsV0FBVyxDQUFDLElBQUksQ0FBQztRQUNqQkYsUUFBUSxDQUFDRCxLQUFLLENBQUM7TUFDZixDQUFDLENBQ0Q7SUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQ1A7RUFFQSxJQUFJQSxLQUFLLEVBQUU7SUFDVCxvQkFBTyw0Q0FBYUEsS0FBSyxDQUFDNkMsT0FBTyxDQUFPO0VBQ3hDLENBQUMsTUFBTSxJQUFJLENBQUMzQyxRQUFRLElBQUksQ0FBQ00sVUFBVSxJQUFJLENBQUNGLGdCQUFnQixJQUFJLENBQUNrQixlQUFlLElBQUloRCxRQUFRLENBQUNzRSxVQUFVLEtBQUssVUFBVSxFQUFFO0lBQ3JILG9CQUNDLHVEQUNDO01BQUssRUFBRSxFQUFDLGFBQWE7TUFBQyxLQUFLLEVBQUMsS0FBSztNQUFDLE1BQU0sRUFBQyxLQUFLO01BQUMsT0FBTyxFQUFDO0lBQWEsZ0JBQ25FO01BQVUsU0FBUyxFQUFDLDRCQUE0QjtNQUFDLE1BQU0sRUFBQyxtQkFBbUI7TUFBQyxXQUFXLEVBQUMsSUFBSTtNQUFDLElBQUksRUFBQztJQUFNLEVBQVksZUFDcEg7TUFBVSxTQUFTLEVBQUMsNEJBQTRCO01BQUMsTUFBTSxFQUFDLG1CQUFtQjtNQUFDLFdBQVcsRUFBQyxJQUFJO01BQUMsSUFBSSxFQUFDO0lBQU0sRUFBWSxlQUNwSDtNQUFVLFNBQVMsRUFBQyxnQ0FBZ0M7TUFBQyxNQUFNLEVBQUMsbUJBQW1CO01BQUMsV0FBVyxFQUFDLElBQUk7TUFBQyxJQUFJLEVBQUM7SUFBTSxFQUFZLGVBQ3hIO01BQVUsU0FBUyxFQUFDLGdDQUFnQztNQUFDLE1BQU0sRUFBQyxtQkFBbUI7TUFBQyxXQUFXLEVBQUMsSUFBSTtNQUFDLElBQUksRUFBQztJQUFNLEVBQVksQ0FDbkgsQ0FDSjtFQUVILENBQUMsTUFBTTtJQUNSTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDcEJELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDaEMsS0FBSyxDQUFDO0lBQ2pCLG9CQUNLLHVEQUNFLG9CQUFDLGdEQUFNLE9BQVUsZUFDakIsb0JBQUMsdURBQWE7TUFBQyxJQUFJLEVBQUVBO0lBQU0sRUFBaUIsZUFDNUMsb0JBQUMsdURBQWE7TUFBQyxJQUFJLEVBQUVBO0lBQU0sRUFBaUIsZUFDNUMsb0JBQUMseURBQWU7TUFBQyxJQUFJLEVBQUVRO0lBQU8sRUFBbUIsZUFDakQsb0JBQUMsd0RBQWM7TUFBQyxLQUFLLEVBQUVGLEtBQU07TUFBQyxLQUFLLEVBQUVOO0lBQU0sRUFBa0IsZUFDN0Qsb0JBQUMsd0RBQWM7TUFBQyxNQUFNLEVBQUVFO0lBQU8sRUFBa0IsZUFDakQ7TUFDRSxLQUFLLEVBQUU7UUFBRW1DLGVBQWUsRUFBRTtNQUFvQyxDQUFFO01BQ2hFLFNBQVMsRUFBQztJQUFpQixnQkFFM0I7TUFDRSxTQUFTLEVBQUMsNEJBQTRCO01BQ3RDLEtBQUssRUFBRTtRQUFFQyxTQUFTLEVBQUU7TUFBSTtJQUFFLGdCQUUxQjtNQUFJLFNBQVMsRUFBQztJQUFtQixzQkFBbUIsZUFDcEQ7TUFDRSxTQUFTLEVBQUMsa0JBQWtCO01BQzVCLHVCQUF1QixFQUFFO1FBQUVDLE1BQU0sRUFBRXZDLEtBQUssQ0FBQ3dDO01BQVc7SUFBRSxFQUNqRCxDQUNILENBQ0YsZUFDTixvQkFBQyx1REFBYTtNQUFDLElBQUksRUFBRTVCO0lBQVEsRUFBaUIsZUFDOUMsb0JBQUMsdURBQWE7TUFBQyxJQUFJLEVBQUVaLEtBQU07TUFBQyxFQUFFLEVBQUVVO0lBQVMsRUFBaUIsZUFDaEUsb0JBQUMsNkRBQVU7TUFBQyxNQUFNLEVBQUU7SUFBSyxFQUFjLENBQ2hDO0VBRVQ7QUFDRDtBQUVELGlFQUFldEIsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hMZ0I7QUFDRDtBQUNXO0FBQy9CO0FBQ21CO0FBQ0c7QUFDWjtBQUU5QixTQUFTRixhQUFhLENBQUM0RCxJQUFJLEVBQUU7RUFDM0IsSUFBSUMsTUFBTSxHQUFHLEVBQUU7RUFDZmhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYyxJQUFJLENBQUM7RUFDakIsSUFBR0EsSUFBSSxDQUFDQSxJQUFJLENBQUNsQixNQUFNLEdBQUUsQ0FBQyxFQUFFO0lBQ3RCa0IsSUFBSSxDQUFDQSxJQUFJLENBQUNFLE9BQU8sQ0FBQyxVQUFBQyxPQUFPLEVBQUk7TUFDekJsQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2lCLE9BQU8sQ0FBQztNQUNwQixJQUFJQyxTQUFTLEdBQUdDLFNBQVM7TUFDekIsSUFBR0YsT0FBTyxDQUFDN0MsTUFBTSxFQUFDO1FBQ2Q4QyxTQUFTLGdCQUNQLDJEQUFDLHFEQUFXO1VBQUMsR0FBRyxFQUFFRCxPQUFPLENBQUM1RCxFQUFHO1VBQUMsU0FBUyxFQUFDO1FBQWMsZ0JBQ3BEO1VBQ0UsSUFBSSxvQkFBYTRELE9BQU8sQ0FBQzVELEVBQUUsQ0FBRztVQUM5QixLQUFLLEVBQUU7WUFBRStELGNBQWMsRUFBRSxNQUFNO1lBQUVDLEtBQUssRUFBRTtVQUFRO1FBQUUsZ0JBRWxEO1VBQ0UsU0FBUyxFQUFDLGdCQUFhO1VBQ3ZCLFVBQVUsRUFBRSxvQkFBQ0MsQ0FBQztZQUFBLE9BQUtDLGdCQUFnQixDQUFDRCxDQUFDLENBQUM7VUFBQSxDQUFDO1VBQ3ZDLFdBQVcsRUFBRSxxQkFBQ0EsQ0FBQztZQUFBLE9BQUtFLFVBQVUsQ0FBQ0YsQ0FBQyxDQUFDO1VBQUE7UUFBQyxnQkFFbEM7VUFDRSxLQUFLLEVBQUU7WUFDTEcsS0FBSyxFQUFFLE9BQU87WUFDZEMsTUFBTSxFQUFFLE1BQU07WUFDZEMsUUFBUSxFQUFFO1VBQ1o7UUFBRSxnQkFFRjtVQUNFLEtBQUssRUFBRTtZQUNMQyxhQUFhLEVBQUUsTUFBTTtZQUNyQkMsT0FBTyxFQUFFLE1BQU07WUFDZkosS0FBSyxFQUFFLE9BQU87WUFDZEssU0FBUyxFQUFFLFFBQVE7WUFDbkJILFFBQVEsRUFBRSxVQUFVO1lBQ3BCSSxJQUFJLEVBQUUsS0FBSztZQUNYQyxHQUFHLEVBQUU7VUFDUDtRQUFFLEdBRURmLE9BQU8sQ0FBQ2dCLE9BQU8sQ0FDZCxDQUNBLGVBQ047VUFDRSxLQUFLLEVBQUU7WUFDTFIsS0FBSyxFQUFFLE1BQU07WUFDYkMsTUFBTSxFQUFFLE1BQU07WUFDZFEsU0FBUyxFQUFFO1VBQ2IsQ0FBRTtVQUNGLEdBQUcsZ0NBQXlCakIsT0FBTyxDQUFDN0MsTUFBTSxDQUFHO1VBQzdDLEdBQUcsRUFBQztRQUFFLEVBQ04sQ0FDRSxDQUNKLENBRVA7TUFDTCxDQUFDLE1BQUk7UUFDRDhDLFNBQVMsZ0JBQ1AsMkRBQUMscURBQVc7VUFBQyxHQUFHLEVBQUVELE9BQU8sQ0FBQzVELEVBQUc7VUFBQyxTQUFTLEVBQUM7UUFBYyxnQkFDcEQ7VUFDRSxJQUFJLG9CQUFhNEQsT0FBTyxDQUFDNUQsRUFBRSxDQUFHO1VBQzlCLEtBQUssRUFBRTtZQUFFK0QsY0FBYyxFQUFFLE1BQU07WUFBRUMsS0FBSyxFQUFFO1VBQVE7UUFBRSxnQkFFbEQ7VUFDRSxTQUFTLEVBQUMsZ0JBQWE7VUFDdkIsVUFBVSxFQUFFLG9CQUFDQyxDQUFDO1lBQUEsT0FBS0MsZ0JBQWdCLENBQUNELENBQUMsQ0FBQztVQUFBLENBQUM7VUFDdkMsV0FBVyxFQUFFLHFCQUFDQSxDQUFDO1lBQUEsT0FBS0UsVUFBVSxDQUFDRixDQUFDLENBQUM7VUFBQSxDQUFDO1VBQ2xDLEtBQUssRUFBRTtZQUNIYSxVQUFVLEVBQUU7VUFBVTtRQUFFLGdCQUU1QjtVQUNFLEtBQUssRUFBRTtZQUNMVixLQUFLLEVBQUUsT0FBTztZQUNkQyxNQUFNLEVBQUUsTUFBTTtZQUNkQyxRQUFRLEVBQUU7VUFDWjtRQUFFLGdCQUVGO1VBQ0UsS0FBSyxFQUFFO1lBQ0xDLGFBQWEsRUFBRSxNQUFNO1lBQ3JCQyxPQUFPLEVBQUUsTUFBTTtZQUNmSixLQUFLLEVBQUUsT0FBTztZQUNkSyxTQUFTLEVBQUUsUUFBUTtZQUNuQkgsUUFBUSxFQUFFLFVBQVU7WUFDcEJJLElBQUksRUFBRSxLQUFLO1lBQ1hDLEdBQUcsRUFBRTtVQUNQO1FBQUUsR0FFRGYsT0FBTyxDQUFDZ0IsT0FBTyxDQUNkLENBQ0EsZUFDTjtVQUNFLEtBQUssRUFBRTtZQUNMUixLQUFLLEVBQUUsTUFBTTtZQUNiQyxNQUFNLEVBQUUsTUFBTTtZQUNkUSxTQUFTLEVBQUU7VUFDYixDQUFFO1VBQ0YsR0FBRyxFQUFFLHlCQUEwQjtVQUMvQixHQUFHLEVBQUM7UUFBRSxFQUNOLENBQ0UsQ0FDSixDQUVQO01BQ0w7TUFDQW5CLE1BQU0sQ0FBQ3FCLElBQUksQ0FBQ2xCLFNBQVMsQ0FBQztJQUMxQixDQUFDLENBQUM7RUFDSixDQUFDLE1BQUk7SUFDSEgsTUFBTSxnQkFBSztNQUFJLFNBQVMsRUFBQztJQUF3QyxpQkFBbUI7RUFDdEY7RUFDQSxTQUFTUyxVQUFVLENBQUNGLENBQUMsRUFBQztJQUNwQnZCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDc0IsQ0FBQyxDQUFDO0lBQ2RBLENBQUMsQ0FBQ2UsTUFBTSxDQUFDQyxLQUFLLENBQUNDLGNBQWMsR0FBRyxXQUFXO0lBQzNDakIsQ0FBQyxDQUFDZSxNQUFNLENBQUN6RyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMwRyxLQUFLLENBQUNULE9BQU8sR0FBRyxRQUFRO0VBQy9DO0VBQ0EsU0FBU04sZ0JBQWdCLENBQUNELENBQUMsRUFBQztJQUMxQnZCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDc0IsQ0FBQyxDQUFDO0lBQ2RBLENBQUMsQ0FBQ2UsTUFBTSxDQUFDQyxLQUFLLENBQUNDLGNBQWMsR0FBRyxTQUFTO0lBQ3pDakIsQ0FBQyxDQUFDZSxNQUFNLENBQUN6RyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMwRyxLQUFLLENBQUNULE9BQU8sR0FBRyxNQUFNO0VBQzdDO0VBQ0EsSUFBR2QsTUFBTSxDQUFDbkIsTUFBTSxHQUFHLENBQUMsRUFBQztJQUNuQixvQkFDRSx1SUFPRSwyREFBQyxvREFBUTtNQUFDLE9BQU8sRUFBQyw4QkFBOEI7TUFBQyxRQUFRLEVBQUU7SUFBSSxnQkFFL0Q7TUFBSyxTQUFTLEVBQUMsRUFBRTtNQUFDLEtBQUssRUFBRTtRQUFDNEMsVUFBVSxFQUFFLE1BQU07UUFBQ0MsYUFBYSxFQUFFO01BQU07SUFBRSxnQkFDbEUscUZBT0U7TUFBSyxTQUFTLEVBQUM7SUFBVSxnQkFDdkI7TUFDRSxTQUFTLEVBQUM7TUFDWjtNQUNBO0lBQUEscUJBR0ssZUFFTCwyREFBQyxnREFBTTtNQUNQLEtBQUssRUFBRTtRQUFDZixNQUFNLEVBQUU7TUFBTyxDQUFFO01BQ3ZCLGFBQWEsRUFBRSxDQUFFO01BQ2pCLGNBQWMsRUFBRSxLQUFNO01BQ3RCLFlBQVksRUFBRSxDQUFFO01BQ2hCLFdBQVcsRUFBRTtRQUNYLEdBQUcsRUFBRTtVQUNIZ0IsYUFBYSxFQUFFLENBQUM7VUFDaEJDLFlBQVksRUFBRTtRQUNoQixDQUFDO1FBQ0QsR0FBRyxFQUFFO1VBQ0hELGFBQWEsRUFBRSxDQUFDO1VBQ2hCQyxZQUFZLEVBQUU7UUFDaEIsQ0FBQztRQUNELElBQUksRUFBRTtVQUNKRCxhQUFhLEVBQUUsQ0FBQztVQUNoQkMsWUFBWSxFQUFFO1FBQ2hCO01BQ0YsQ0FBRTtNQUNGLFNBQVMsRUFBQztNQUNaO01BQ0E7SUFBQSxHQUVHNUIsTUFBTSxDQXNCQSxlQUNULHVFQUNNLENBQ0YsQ0FDRixDQUNGLENBQ0ssQ0FDVjtFQUVQO0FBRUY7QUFDQSxpRUFBZTdELGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsTkY7QUFDZ0I7QUFDRjtBQUNUO0FBQ3lCO0FBQ047QUFDcUI7QUFDWjtBQUNaO0FBRS9DLFNBQVNMLGNBQWMsQ0FBQ3FCLE1BQU0sRUFBRTtFQUM5QixzQkFBd0J0RCxzREFBYyxDQUFDLEtBQUssQ0FBQztJQUFBO0lBQXRDa0ksSUFBSTtJQUFFQyxPQUFPO0VBQ3BCLElBQUlDLFVBQVUsR0FBRyxFQUFFO0VBQ25CLEtBQUssSUFBSUMsS0FBSyxHQUFHLENBQUMsRUFBRUEsS0FBSyxHQUFHL0UsTUFBTSxDQUFDQSxNQUFNLENBQUMwQixNQUFNLEVBQUVxRCxLQUFLLEVBQUUsRUFBRTtJQUMxRCxJQUFNaEMsT0FBTyxHQUFHL0MsTUFBTSxDQUFDQSxNQUFNLENBQUMrRSxLQUFLLENBQUM7SUFDcEMsSUFBR2hDLE9BQU8sQ0FBQ2lDLE9BQU8sSUFBSSxLQUFLLEVBQUM7TUFDN0I7SUFDQTtJQUNBLElBQUlwQyxJQUFJLEdBQUc7TUFBRXFDLEdBQUcsZ0NBQXlCbEMsT0FBTyxDQUFDbUMsS0FBSztJQUFFLENBQUM7SUFDekRKLFVBQVUsQ0FBQ1osSUFBSSxDQUFDdEIsSUFBSSxDQUFDO0VBQ3JCO0VBR0EsSUFBR2tDLFVBQVUsQ0FBQ3BELE1BQU0sR0FBQyxDQUFDLEVBQUM7SUFDckJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUNwQkQsT0FBTyxDQUFDQyxHQUFHLENBQUNnRCxVQUFVLENBQUM7SUFDdkIsb0JBQ0UseUlBQ0UsNERBQUMscURBQVE7TUFBQyxPQUFPLEVBQUMsOEJBQThCO01BQUMsUUFBUSxFQUFFO0lBQUksZ0JBQzdEO01BQUssU0FBUyxFQUFDO0lBQVMsZ0JBRXhCO01BQUssS0FBSyxFQUFFO1FBQUN2QixLQUFLLEVBQUMsTUFBTTtRQUFDQyxNQUFNLEVBQUMsTUFBTTtRQUFFRyxPQUFPLEVBQUMsTUFBTTtRQUFDd0IsY0FBYyxFQUFDO01BQVE7SUFBRSxnQkFFL0U7TUFBSyxTQUFTLEVBQUMscUJBQXFCO01BQUMsS0FBSyxFQUFFO1FBQUMzQixNQUFNLEVBQUMsS0FBSztRQUFDRCxLQUFLLEVBQUMsS0FBSztRQUFFZSxVQUFVLEVBQUM7TUFBTTtJQUFFLGdCQUN4RjtNQUFLLFNBQVMsRUFBQyxxQkFBcUI7TUFBQyxLQUFLO1FBQUdMLFVBQVUsRUFBQyxTQUFTO1FBQUVtQixPQUFPLEVBQUM7TUFBRyxjQUFVLEdBQUc7SUFBRSxHQUM1Rk4sVUFBVSxDQUFDLENBQUMsQ0FBQyxnQkFDUjtNQUNFLFNBQVMsRUFBQyxHQUFHO01BQ2IsS0FBSyxFQUFFO1FBQ0x2QixLQUFLLEVBQUUsTUFBTTtRQUNiQyxNQUFNLEVBQUUsTUFBTTtRQUNkUSxTQUFTLEVBQUUsT0FBTztRQUNsQm9CLE9BQU8sRUFBQztNQUNWLENBQUU7TUFDRixHQUFHLEVBQUVOLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csR0FBSTtNQUN2QixHQUFHLEVBQUM7SUFBRSxFQUNOLGdCQUNDO01BQUssS0FBSyxFQUFFO1FBQUN0QixPQUFPLEVBQUMsTUFBTTtRQUFFMEIsVUFBVSxFQUFDLFFBQVE7UUFBRUYsY0FBYyxFQUFDLFFBQVE7UUFBRTVCLEtBQUssRUFBQyxNQUFNO1FBQUVDLE1BQU0sRUFBQztNQUFNO0lBQUUsZ0JBQUM7TUFBSyxLQUFLLEVBQUU7UUFBQ0QsS0FBSyxFQUFDO01BQUssQ0FBRTtNQUFDLEdBQUcsRUFBRSx5QkFBMEI7TUFBQyxHQUFHLEVBQUM7SUFBRSxFQUFFLENBQU8sQ0FDdEwsZUFFTjtNQUFLLFNBQVMsRUFBQztJQUErQyxnQkFFMUQ7TUFBSyxTQUFTLEVBQUMscUJBQXFCO01BQUMsS0FBSyxFQUFFO1FBQUNVLFVBQVUsRUFBQyxTQUFTO1FBQUVtQixPQUFPLEVBQUM7TUFBRztJQUFFLEdBQzdFTixVQUFVLENBQUMsQ0FBQyxDQUFDLGdCQUNaO01BQ0UsU0FBUyxFQUFDLEVBQUU7TUFDWixLQUFLLEVBQUU7UUFDTHZCLEtBQUssRUFBRSxNQUFNO1FBQ2JDLE1BQU0sRUFBRSxNQUFNO1FBQ2RRLFNBQVMsRUFBRSxPQUFPO1FBQ2xCb0IsT0FBTyxFQUFDO01BQ1YsQ0FBRTtNQUNGLEdBQUcsRUFBRU4sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDRyxHQUFJO01BQ3ZCLEdBQUcsRUFBQztJQUFFLEVBQ04sZ0JBQ0M7TUFBSyxLQUFLLEVBQUU7UUFBQ3RCLE9BQU8sRUFBQyxNQUFNO1FBQUUwQixVQUFVLEVBQUMsUUFBUTtRQUFFRixjQUFjLEVBQUMsUUFBUTtRQUFFNUIsS0FBSyxFQUFDLE1BQU07UUFBRUMsTUFBTSxFQUFDO01BQU07SUFBRSxnQkFBQztNQUFLLEtBQUssRUFBRTtRQUFDRCxLQUFLLEVBQUM7TUFBSyxDQUFFO01BQUMsR0FBRyxFQUFFLHlCQUEwQjtNQUFDLEdBQUcsRUFBQztJQUFFLEVBQUUsQ0FBTyxDQUNwTCxlQUNOO01BQUssU0FBUyxFQUFDLHFCQUFxQjtNQUFDLEtBQUssRUFBRTtRQUFDVSxVQUFVLEVBQUMsU0FBUztRQUFFbUIsT0FBTyxFQUFDO01BQUc7SUFBRSxHQUM3RU4sVUFBVSxDQUFDLENBQUMsQ0FBQyxnQkFDVjtNQUNFLFNBQVMsRUFBQyxFQUFFO01BQ1osS0FBSyxFQUFFO1FBQ0x2QixLQUFLLEVBQUUsTUFBTTtRQUNiQyxNQUFNLEVBQUUsTUFBTTtRQUNkUSxTQUFTLEVBQUUsT0FBTztRQUNsQm9CLE9BQU8sRUFBQztNQUNWLENBQUU7TUFDRixHQUFHLEVBQUVOLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csR0FBSTtNQUN2QixHQUFHLEVBQUM7SUFBRSxFQUNOLGdCQUNDO01BQUssS0FBSyxFQUFFO1FBQUN0QixPQUFPLEVBQUMsTUFBTTtRQUFFMEIsVUFBVSxFQUFDLFFBQVE7UUFBRUYsY0FBYyxFQUFDLFFBQVE7UUFBRTVCLEtBQUssRUFBQyxNQUFNO1FBQUVDLE1BQU0sRUFBQztNQUFNO0lBQUUsZ0JBQUM7TUFBSyxLQUFLLEVBQUU7UUFBQ0QsS0FBSyxFQUFDO01BQUssQ0FBRTtNQUFDLEdBQUcsRUFBRSx5QkFBMEI7TUFBQyxHQUFHLEVBQUM7SUFBRSxFQUFFLENBQU8sQ0FDcEwsQ0FDTixlQUVOO01BQUssU0FBUyxFQUFDLCtCQUErQjtNQUFDLEtBQUssRUFBRTtRQUFDVSxVQUFVLEVBQUMsU0FBUztRQUFFbUIsT0FBTyxFQUFDO01BQUc7SUFBRSxHQUN6Rk4sVUFBVSxDQUFDLENBQUMsQ0FBQyxnQkFDTjtNQUNFLFNBQVMsRUFBQyxFQUFFO01BQ1osS0FBSyxFQUFFO1FBQ0x2QixLQUFLLEVBQUUsTUFBTTtRQUNiQyxNQUFNLEVBQUUsTUFBTTtRQUNkUSxTQUFTLEVBQUUsT0FBTztRQUNsQm9CLE9BQU8sRUFBQztNQUNWLENBQUU7TUFDRixHQUFHLEVBQUVOLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csR0FBSTtNQUN2QixHQUFHLEVBQUM7SUFBRSxFQUNOLGdCQUNDO01BQUssS0FBSyxFQUFFO1FBQUN0QixPQUFPLEVBQUMsTUFBTTtRQUFFMEIsVUFBVSxFQUFDLFFBQVE7UUFBRUYsY0FBYyxFQUFDLFFBQVE7UUFBRTVCLEtBQUssRUFBQyxNQUFNO1FBQUVDLE1BQU0sRUFBQztNQUFNO0lBQUUsZ0JBQUM7TUFBSyxLQUFLLEVBQUU7UUFBQ0QsS0FBSyxFQUFDO01BQUssQ0FBRTtNQUFDLEdBQUcsRUFBRSx5QkFBMEI7TUFBQyxHQUFHLEVBQUM7SUFBRSxFQUFFLENBQU8sQ0FDeEwsQ0FDRixDQUNGLGVBQ0o7TUFBSyxTQUFTLEVBQUMsMkNBQTJDO01BQUMsS0FBSyxFQUFFO1FBQUNFLFFBQVEsRUFBRSxVQUFVO1FBQUU2QixNQUFNLEVBQUMsTUFBTTtRQUFFL0IsS0FBSyxFQUFDO01BQU07SUFBRSxnQkFDcEg7TUFBUSxPQUFPLEVBQUU7UUFBQSxPQUFNc0IsT0FBTyxDQUFDLElBQUksQ0FBQztNQUFBLENBQUM7TUFBQyxTQUFTLEVBQUM7SUFBNEMsZUFFbkYsQ0FDTCxlQUtOLDREQUFDLG1FQUFRO01BQ1AsSUFBSSxFQUFFRCxJQUFLO01BQ1gsS0FBSyxFQUFFO1FBQUEsT0FBTUMsT0FBTyxDQUFDLEtBQUssQ0FBQztNQUFBLENBQUM7TUFDNUIsT0FBTyxFQUFFLENBQUNGLHNGQUFVLENBQUU7TUFDdEIsTUFBTSxFQUFFRztJQUFXLEVBQ25CLENBQ0UsQ0FDRyxDQUNWO0VBRVA7QUFDRjtBQUVBLGlFQUFlbkcsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSEo7QUFDSDtBQUNJO0FBQ2M7QUFDVjtBQUc5QixTQUFTRCxjQUFjLE9BQWlCO0VBQUEsSUFBZjBCLEtBQUssUUFBTEEsS0FBSztJQUFFb0YsS0FBSyxRQUFMQSxLQUFLO0VBQ3BDM0QsT0FBTyxDQUFDQyxHQUFHLENBQUMxQixLQUFLLENBQUM7RUFDbEIsSUFBR29GLEtBQUssQ0FBQ0MsZ0JBQWdCLEVBQUM7SUFDekIsb0JBQ0MsdUlBQ0E7TUFBSyxLQUFLLEVBQUU7UUFBQ3RELGVBQWUsRUFBRSxtQ0FBbUM7UUFBRXFCLE1BQU0sRUFBRTtNQUFRLENBQUU7TUFBQyxTQUFTLEVBQUM7SUFBWSxnQkFDNUc7TUFBSyxTQUFTLEVBQUMsRUFBRTtNQUFBLEtBQUssRUFBRTtRQUFFQSxNQUFNLEVBQUU7TUFBUTtJQUFFLGdCQUMzQztNQUFLLFNBQVMsRUFBQztJQUFVLGdCQUN4QjtNQUFLLFNBQVMsRUFBQztJQUFrQixnQkFFakM7TUFBSyxTQUFTLEVBQUM7SUFBb0IsZ0JBRWxDO01BQUssU0FBUyxFQUFDO0lBQVksZ0JBQzFCO01BQUksU0FBUyxFQUFDO0lBQXNCLG9DQUEyQixlQUMvRDtNQUFLLFNBQVMsRUFBQyxxQ0FBcUM7TUFBQyxLQUFLLEVBQUU7UUFBRWtDLGFBQWEsRUFBRTtNQUFXLENBQUU7TUFBQyx1QkFBdUIsRUFBRTtRQUFDckQsTUFBTSxFQUFDbUQsS0FBSyxDQUFDQztNQUFnQjtJQUFFLEVBQU8sQ0FDdEosZUFFTjtNQUFLLFNBQVMsRUFBQyxZQUFZO01BQUMsS0FBSyxFQUFFO1FBQUNqQyxNQUFNLEVBQUUsT0FBTztRQUFFRCxLQUFLLEVBQUM7TUFBTztJQUFFLEdBQ2xFbkQsS0FBSyxDQUFDOEUsS0FBSyxnQkFBSTtNQUFLLFNBQVMsRUFBQyxVQUFVO01BQUMsS0FBSyxFQUFFO1FBQUUzQixLQUFLLEVBQUUsTUFBTTtRQUFFQyxNQUFNLEVBQUUsTUFBTTtRQUFFUSxTQUFTLEVBQUU7TUFBUSxDQUFFO01BQUMsR0FBRyxFQUFFLHNCQUFzQixHQUFHNUQsS0FBSyxDQUFDOEUsS0FBTTtNQUFDLEdBQUcsRUFBQztJQUFFLEVBQUUsZ0JBQUs7TUFBSyxLQUFLLEVBQUU7UUFBQ3ZCLE9BQU8sRUFBQyxNQUFNO1FBQUUwQixVQUFVLEVBQUMsUUFBUTtRQUFFRixjQUFjLEVBQUMsUUFBUTtRQUFFNUIsS0FBSyxFQUFDLE1BQU07UUFBRUMsTUFBTSxFQUFDO01BQU07SUFBRSxnQkFBQztNQUFLLEtBQUssRUFBRTtRQUFDRCxLQUFLLEVBQUM7TUFBSyxDQUFFO01BQUMsR0FBRyxFQUFFLHlCQUEwQjtNQUFDLEdBQUcsRUFBQztJQUFFLEVBQUUsQ0FBTyxDQUM5VSxDQUNELENBQ0EsQ0FFRCxDQUNELENBQ0EsQ0FLSDtFQUVMO0FBQUM7QUFFRixpRUFBZTdFLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDSjtBQUNIO0FBQ0k7QUFDYztBQUNWO0FBRzlCLFNBQVNpSCxhQUFhLENBQUNDLElBQUksRUFBRTtFQUM1Qi9ELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDOEQsSUFBSSxDQUFDO0VBQ2pCTCwrQ0FBUSxFQUFFO0VBQ1Qsb0JBQ0MsdUlBR0E7SUFBSyxTQUFTLEVBQUMsYUFBYTtJQUFDLEdBQUcsRUFBQztFQUFVLGdCQUUzQztJQUFPLFdBQVc7SUFBQyxRQUFRO0lBQUMsS0FBSztJQUFDLElBQUk7RUFBQSxnQkFDckM7SUFBUSxHQUFHLEVBQUMsMkJBQTJCO0lBQUMsSUFBSSxFQUFDO0VBQVcsRUFBVSxDQUMxRCxlQUVSO0lBQUssU0FBUyxFQUFDO0VBQWEsZ0JBQzNCO0lBQUssU0FBUyxFQUFDO0VBQVMsZ0JBQ3ZCO0lBQUssU0FBUyxFQUFDO0VBQW1CLGdCQUVsQztJQUFLLFNBQVMsRUFBQyxpQkFBaUI7SUFBQyxZQUFTO0VBQVMsZ0JBQ2xELDJEQUFDLGtEQUFJO0lBQUMsRUFBRSxFQUFDO0VBQUcsZ0JBQ1g7SUFBSyxHQUFHLEVBQUMsNEJBQTRCO0lBQUMsR0FBRyxFQUFDLE1BQU07SUFBQyxLQUFLLEVBQUUsR0FBSTtJQUFDLFNBQVMsRUFBQztFQUFRLEVBQUcsQ0FDNUUsQ0FDRixlQUVOO0lBQUssU0FBUyxFQUFDO0VBQVcsZ0JBRTFCO0lBQUssS0FBSyxFQUFFO01BQUNHLGFBQWEsRUFBRTtJQUFXLENBQUU7SUFBQyxTQUFTLEVBQUMsZ0JBQWdCO0lBQUMsWUFBUztFQUFTLGdCQUN2RjtJQUFJLFNBQVMsRUFBQztFQUFnQyxHQUFFRSxJQUFJLENBQUNBLElBQUksQ0FBQ0UsU0FBUyxDQUFNLGVBQ3hFO0lBQUksU0FBUyxFQUFDO0VBQStCLEdBQUVGLElBQUksQ0FBQ0EsSUFBSSxDQUFDRyxPQUFPLENBQUNBLE9BQU8sQ0FBTSxFQUU3RUgsSUFBSSxDQUFDQSxJQUFJLENBQUNJLEtBQUssZ0JBQUc7SUFBRyxTQUFTLEVBQUM7RUFBb0IseUJBQWlCSixJQUFJLENBQUNBLElBQUksQ0FBQ0ksS0FBSyxDQUFLLGdCQUFHO0lBQUcsU0FBUyxFQUFDO0VBQW9CLDJCQUF1QixlQUNwSiwyREFBQyxrREFBSTtJQUFDLEtBQUssRUFBRTtNQUFDOUMsY0FBYyxFQUFFLE1BQU07TUFBRUMsS0FBSyxFQUFFO0lBQU8sQ0FBRTtJQUFDLEVBQUUsOEJBQXVCeUMsSUFBSSxDQUFDQSxJQUFJLENBQUNLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzlHLEVBQUUsY0FBSXlHLElBQUksQ0FBQ0EsSUFBSSxDQUFDSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUNBLFNBQVM7RUFBRyxnQkFBQztJQUFHLEtBQUssRUFBRTtNQUFDdEMsT0FBTyxFQUFFLFFBQVE7TUFBRStCLGFBQWEsRUFBRTtJQUFXLENBQUU7SUFBQyxTQUFTLEVBQUM7RUFBcUIsR0FBRUUsSUFBSSxDQUFDQSxJQUFJLENBQUNLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsU0FBUyxDQUFLLENBQU8sRUFFeFJMLElBQUksQ0FBQ0EsSUFBSSxDQUFDSyxTQUFTLENBQUMsQ0FBQyxDQUFDLGlCQUFHLHVJQUFFO0lBQUcsS0FBSyxFQUFFO01BQUN0QyxPQUFPLEVBQUU7SUFBUSxDQUFFO0lBQUMsU0FBUyxFQUFDO0VBQXFCLGFBQVksb0JBQUMsMkRBQUMsa0RBQUk7SUFBQyxLQUFLLEVBQUU7TUFBQ1QsY0FBYyxFQUFFLE1BQU07TUFBRUMsS0FBSyxFQUFFO0lBQU8sQ0FBRTtJQUFBLEVBQUUsOEJBQXVCeUMsSUFBSSxDQUFDQSxJQUFJLENBQUNLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzlHLEVBQUUsY0FBSXlHLElBQUksQ0FBQ0EsSUFBSSxDQUFDSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUNBLFNBQVM7RUFBRyxnQkFBRTtJQUFHLFNBQVMsRUFBQyxxQkFBcUI7SUFBQyxLQUFLLEVBQUU7TUFBQ3RDLE9BQU8sRUFBRSxRQUFRO01BQUUrQixhQUFhLEVBQUUsV0FBVztNQUFFeEMsY0FBYyxFQUFFLE1BQU07TUFBRUMsS0FBSyxFQUFFO0lBQU87RUFBRSxHQUFFeUMsSUFBSSxDQUFDQSxJQUFJLENBQUNLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsU0FBUyxDQUFLLENBQU8sQ0FBRyxDQUN0YSxDQUNBLGVBRU47SUFBSyxTQUFTLEVBQUMsa0JBQWtCO0lBQUMsWUFBUztFQUFTLGdCQUNuRDtJQUFJLEtBQUssRUFBRTtNQUFFUCxhQUFhLEVBQUU7SUFBVyxDQUFFO0lBQUMsU0FBUyxFQUFDO0VBQXVDLEdBQUVFLElBQUksQ0FBQ0EsSUFBSSxDQUFDN0IsT0FBTyxDQUFNLENBQy9HLGVBRU47SUFBSyxTQUFTLEVBQUMsaUJBQWlCO0lBQUMsWUFBUztFQUFTLGdCQUNsRDtJQUFHLFNBQVMsRUFBQztFQUF1QixrQkFBYyxlQUNsRDtJQUFLLFNBQVMsRUFBQztFQUFZLEVBQVEsQ0FDOUIsQ0FFQSxDQUNELENBQ0QsQ0FDRCxDQUVIO0FBRUw7QUFFRCxpRUFBZTRCLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RIO0FBQ0g7QUFDSTtBQUNjO0FBQ1Y7QUFHOUIsU0FBUy9HLGFBQWEsT0FBYTtFQUFBLElBQVhnSCxJQUFJLFFBQUpBLElBQUk7SUFBRU0sRUFBRSxRQUFGQSxFQUFFO0VBQy9CWCwrQ0FBUSxFQUFFO0VBQ1YsSUFBR1csRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDO0lBQ1IsSUFBR0EsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sRUFDcEJBLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLO0lBQ2pCLElBQUdBLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLEVBQ3BCQSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSztJQUVqQixvQkFDQyx1SUFLQztNQUFLLEtBQUssRUFBRTtRQUFDL0QsZUFBZSxFQUFFO01BQWlDLENBQUU7TUFBQyxTQUFTLEVBQUM7SUFBZ0IsZ0JBQzNGO01BQUssU0FBUyxFQUFDO0lBQWlCLGdCQUMvQjtNQUFLLFNBQVMsRUFBQztJQUFzQixHQUVuQytELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQ1I7TUFBSyxTQUFTLEVBQUMsaUJBQWlCO01BQUMsT0FBTyxFQUFFLG1CQUFJO1FBQUN2SSxRQUFRLENBQUN3SSxJQUFJLEdBQUcsVUFBVSxHQUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMvRyxFQUFFO01BQUE7SUFBRSxnQkFDdkY7TUFBSSxTQUFTLEVBQUM7SUFBNEIsNEJBQXNCLGVBQ2hFO01BQUksU0FBUyxFQUFDO0lBQVcsR0FBRStHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0osU0FBUyxDQUFNLGVBQ25EO01BQUksU0FBUyxFQUFDO0lBQWlCLEdBQUVJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ25DLE9BQU8sQ0FBTSxDQUNsRCxFQUVObUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBSTtNQUFLLFNBQVMsRUFBQyxpQkFBaUI7TUFBQyxPQUFPLEVBQUUsbUJBQUk7UUFBQ3ZJLFFBQVEsQ0FBQ3dJLElBQUksR0FBRyxVQUFVLEdBQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQy9HLEVBQUU7TUFBQTtJQUFFLGdCQUNuRztNQUFJLFNBQVMsRUFBQztJQUEyQixvQkFBb0IsZUFDN0Q7TUFBSSxTQUFTLEVBQUM7SUFBVSxHQUFFK0csRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDSixTQUFTLENBQU0sZUFDbEQ7TUFBSSxTQUFTLEVBQUM7SUFBZ0IsR0FBRUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDbkMsT0FBTyxDQUFNLENBQ2pELENBR0YsQ0FFRCxDQUNELENBSUo7RUFFTDtBQUNEO0FBQ0EsaUVBQWVuRixhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xESDtBQUNIO0FBQ0k7QUFDYztBQUNWO0FBRTlCLFNBQVNILGVBQWUsQ0FBQ21ILElBQUksRUFBRTtFQUM5Qi9ELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDOEQsSUFBSSxDQUFDO0VBQ2pCLElBQUdBLElBQUksQ0FBQ0EsSUFBSSxDQUFDVixLQUFLLEtBQUtqQyxTQUFTLEVBQUM7SUFDaEMsb0JBQ0MsdUlBQ0M7TUFBSyxTQUFTLEVBQUMsdUJBQXVCO01BQUMsS0FBSyxFQUFFO1FBQUNPLE1BQU0sRUFBQyxPQUFPO1FBQUVELEtBQUssRUFBQztNQUFNO0lBQUUsZ0JBQzVFO01BQUssR0FBRyxFQUFFLHNCQUFzQixHQUFHcUMsSUFBSSxDQUFDQSxJQUFJLENBQUNWLEtBQU07TUFBQyxHQUFHLEVBQUMsRUFBRTtNQUFDLEtBQUssRUFBRTtRQUFFM0IsS0FBSyxFQUFFLE1BQU07UUFBRUMsTUFBTSxFQUFFLE1BQU07UUFBRVEsU0FBUyxFQUFFO01BQVE7SUFBRSxFQUFHLENBQ3RILENBQ0o7RUFFTDtBQUNBO0FBRUQsaUVBQWV2RixlQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25COUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDeUI7QUFDZTtBQUNWO0FBRzlCLFNBQVNELGFBQWEsQ0FBQ29ILElBQUksRUFBRTtFQUMzQixJQUFHQSxJQUFJLENBQUNBLElBQUksQ0FBQ1EsS0FBSyxJQUFJUixJQUFJLENBQUNBLElBQUksQ0FBQ1MsUUFBUSxJQUFJVCxJQUFJLENBQUNBLElBQUksQ0FBQ1UsT0FBTyxFQUFDO0lBQzlELG9CQUNDLHVJQUNDO01BQUssS0FBSyxFQUFFO1FBQUNuRSxlQUFlLEVBQUUsbUNBQW1DO1FBQUV5QixTQUFTLEVBQUU7TUFBUSxDQUFFO01BQUMsU0FBUyxFQUFDO0lBQWdCLGdCQUNsSDtNQUFLLFNBQVMsRUFBQztJQUFTLGdCQUN2QjtNQUFLLFNBQVMsRUFBQyxrQ0FBa0M7TUFBQyxLQUFLLEVBQUU7UUFBRTJDLE1BQU0sRUFBQyxHQUFHO1FBQUVuQixPQUFPLEVBQUM7TUFBRztJQUFFLEdBQ2xGUSxJQUFJLENBQUNBLElBQUksQ0FBQ1EsS0FBSyxpQkFDaEI7TUFBSyxTQUFTLEVBQUMseUJBQXlCO01BQUMsS0FBSyxFQUFFO1FBQUNoRSxTQUFTLEVBQUMsTUFBTTtRQUFFb0UsV0FBVyxFQUFDLE1BQU07UUFBRUMsVUFBVSxFQUFDO01BQU07SUFBRSxnQkFDekc7TUFBSSxTQUFTLEVBQUM7SUFBTyxjQUFjLGVBQ25DO01BQUssS0FBSyxFQUFFO1FBQUNsRCxLQUFLLEVBQUM7TUFBTSxDQUFFO01BQUMsU0FBUyxFQUFDLGtDQUFrQztNQUFBLHVCQUF1QixFQUFFO1FBQUNsQixNQUFNLEVBQUN1RCxJQUFJLENBQUNBLElBQUksQ0FBQ1E7TUFBSztJQUFFLEVBQU8sQ0FDNUgsRUFHTFIsSUFBSSxDQUFDQSxJQUFJLENBQUNTLFFBQVEsaUJBQ25CO01BQUssU0FBUyxFQUFDLHlCQUF5QjtNQUFDLEtBQUssRUFBRTtRQUFDakUsU0FBUyxFQUFDLE1BQU07UUFBRW9FLFdBQVcsRUFBQyxNQUFNO1FBQUVDLFVBQVUsRUFBQztNQUFNO0lBQUUsZ0JBQ3pHO01BQUksU0FBUyxFQUFDO0lBQU8sa0JBQWtCLGVBQ3ZDO01BQUssS0FBSyxFQUFFO1FBQUNsRCxLQUFLLEVBQUM7TUFBTSxDQUFFO01BQUMsU0FBUyxFQUFDLG1FQUFtRTtNQUFDLHVCQUF1QixFQUFFO1FBQUNsQixNQUFNLEVBQUN1RCxJQUFJLENBQUNBLElBQUksQ0FBQ1M7TUFBUTtJQUFFLEVBQU8sQ0FDakssRUFHTFQsSUFBSSxDQUFDQSxJQUFJLENBQUNVLE9BQU8saUJBQ2xCO01BQUssU0FBUyxFQUFDLHlCQUF5QjtNQUFFLEtBQUssRUFBRTtRQUFDbEUsU0FBUyxFQUFDLE1BQU07UUFBRW9FLFdBQVcsRUFBQyxNQUFNO1FBQUVDLFVBQVUsRUFBQztNQUFNO0lBQUUsZ0JBQzFHO01BQUksU0FBUyxFQUFDO0lBQU8saUJBQWlCLGVBQ3RDO01BQUssS0FBSyxFQUFFO1FBQUNsRCxLQUFLLEVBQUM7TUFBTSxDQUFFO01BQUMsU0FBUyxFQUFDLG1FQUFtRTtNQUFDLHVCQUF1QixFQUFFO1FBQUNsQixNQUFNLEVBQUN1RCxJQUFJLENBQUNBLElBQUksQ0FBQ1U7TUFBTztJQUFFLEVBQU8sQ0FDaEssQ0FHRCxDQUNELENBQ0QsQ0FDSjtFQUVMO0FBQ0E7QUFDRCxpRUFBZTlILGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GSTtBQUNJO0FBQ0E7QUFDTTtBQUNLO0FBQ2pCO0FBQ21CO0FBSWpELFNBQVN0QixXQUFXLEdBQUc7RUFDdEIsb0JBQ0MsdURBQ0Esb0JBQUMsK0NBQU0sT0FBVSxlQUNqQixvQkFBQyxpREFBUSxPQUFZLGVBQ3JCLG9CQUFDLGlEQUFRLE9BQVksZUFDckIsb0JBQUMsb0RBQVcsT0FBZSxlQUMzQixvQkFBQyx1REFBYyxPQUFrQixlQUNqQyxvQkFBQyw0REFBVTtJQUFDLE1BQU0sRUFBRTtFQUFLLEVBQWMsQ0FFcEM7QUFFTDtBQUVBLGlFQUFlQSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJhO0FBQ2pCO0FBQ0k7QUFDYztBQUNWO0FBQ0E7QUFDMEI7QUFHeEQsU0FBUzJKLGNBQWMsR0FBRztFQUN6QixJQUFNRyxNQUFNLEdBQUdELGlFQUFnQixDQUFDRCxxREFBSSxDQUFDO0VBQ3JDLGdCQUE0Qi9ILGdEQUFRLENBQUM7TUFDcENrSSxLQUFLLEVBQUUsRUFBRTtNQUNUQyxJQUFJLEVBQUUsRUFBRTtNQUNSakYsT0FBTyxFQUFFO0lBQ1YsQ0FBQyxDQUFDO0lBQUE7SUFKS2tGLE1BQU07SUFBRUMsU0FBUztFQU14QixJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQWlCLENBQUlDLEtBQUssRUFBSztJQUNwQ0EsS0FBSyxDQUFDQyxPQUFPLEVBQUU7SUFDZkgsU0FBUyxpQ0FDTEQsTUFBTSwyQkFDUkcsS0FBSyxDQUFDbkQsTUFBTSxDQUFDK0MsSUFBSSxFQUFHSSxLQUFLLENBQUNuRCxNQUFNLENBQUNxRCxLQUFLLEdBRXRDO0lBQ0YzRixPQUFPLENBQUNDLEdBQUcsQ0FBQ3FGLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDO0VBQzFCLENBQUM7RUFFRCxJQUFNUSxZQUFZLEdBQUcsU0FBZkEsWUFBWSxDQUFJckUsQ0FBQyxFQUFLO0lBQzNCQSxDQUFDLENBQUNlLE1BQU0sQ0FBQ3pHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ2dLLFFBQVEsR0FBRyxJQUFJO0lBQ3BDdEUsQ0FBQyxDQUFDdUUsY0FBYyxFQUFFO0lBQ2xCWCxNQUFNLENBQUNZLElBQUksQ0FBQztNQUNYQyxJQUFJLEVBQUUsMkNBQTJDO01BQ2pEQyxLQUFLLEVBQUUsSUFBSTtNQUNYQyxJQUFJLEVBQUUsU0FBUztNQUNmQyxLQUFLLEVBQUUsWUFBWTtNQUNuQnZFLFFBQVEsRUFBRSxXQUFXO01BQ3JCd0UsaUJBQWlCLEVBQUUsS0FBSztNQUN4QkMsS0FBSyxFQUFFLElBQUk7TUFDWEMsZ0JBQWdCLEVBQUUsSUFBSTtNQUN0QkMsT0FBTyxFQUFFLGlCQUFDTixLQUFLLEVBQUs7UUFDbEJBLEtBQUssQ0FBQ08sZ0JBQWdCLENBQUMsWUFBWSxFQUFFdkIsK0RBQWMsQ0FBQztRQUNwRGdCLEtBQUssQ0FBQ08sZ0JBQWdCLENBQUMsWUFBWSxFQUFFdkIsaUVBQWdCLENBQUM7TUFDeEQ7SUFDQyxDQUFDLENBQUM7SUFDSixJQUFNMEIsY0FBYyxHQUFHO01BQ3RCekgsTUFBTSxFQUFFLE1BQU07TUFDZEMsT0FBTyxFQUFFO1FBQUUsY0FBYyxFQUFFO01BQW1CLENBQUM7TUFDL0N5SCxJQUFJLEVBQUVsSCxJQUFJLENBQUNtSCxTQUFTLENBQUM7UUFBRSxPQUFPLEVBQUV2QixNQUFNLENBQUNGLEtBQUs7UUFBRSxNQUFNLEVBQUVFLE1BQU0sQ0FBQ0QsSUFBSTtRQUFFLFNBQVMsRUFBRUMsTUFBTSxDQUFDbEYsT0FBTztRQUFFLEtBQUssRUFBRTtNQUFLLENBQUM7SUFDNUcsQ0FBQztJQUNEO0lBQ0E7SUFDQW5CLEtBQUssZUFBYztNQUFDQyxNQUFNLEVBQUMsTUFBTTtNQUFDQyxPQUFPLEVBQUM7UUFBQ0MsTUFBTSxFQUFFLGtCQUFrQjtRQUFDLGNBQWMsRUFBRTtNQUFrQixDQUFDO01BQUN3SCxJQUFJLEVBQUVsSCxJQUFJLENBQUNtSCxTQUFTLENBQUM7UUFBRSxPQUFPLEVBQUV2QixNQUFNLENBQUNGLEtBQUs7UUFBRSxNQUFNLEVBQUVFLE1BQU0sQ0FBQ0QsSUFBSTtRQUFFLFNBQVMsRUFBRUMsTUFBTSxDQUFDbEYsT0FBTztRQUFFLEtBQUssRUFBRTtNQUFLLENBQUM7SUFBQyxDQUFDLENBQUMsQ0FDdk5mLElBQUksQ0FBQyxVQUFBQyxHQUFHO01BQUEsT0FBSUEsR0FBRyxDQUFDQyxJQUFJLEVBQUU7SUFBQSxFQUFDLENBQ3ZCRixJQUFJLENBQ0osVUFBQ0csTUFBTSxFQUFLO01BQ1hRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQUNEO0lBQ0E7SUFDQTtJQUNBLFVBQUNqQyxLQUFLLEVBQUs7TUFDVnlDLE9BQU8sQ0FBQ3pDLEtBQUssQ0FBQ0EsS0FBSyxDQUFDO0lBQ3JCLENBQUMsQ0FDRDtFQUNGLENBQUM7RUFDRG1HLGdEQUFRLEVBQUU7RUFDVCxvQkFDQyx5SUFHQTtJQUFLLFNBQVMsRUFBQyxhQUFhO0lBQUMsR0FBRyxFQUFDO0VBQVUsZ0JBRTNDO0lBQU8sV0FBVztJQUFDLFFBQVE7SUFBQyxLQUFLO0lBQUMsSUFBSTtFQUFBLGdCQUNyQztJQUFRLEdBQUcsRUFBQywyQkFBMkI7SUFBQyxJQUFJLEVBQUM7RUFBVyxFQUFVLENBQzFELGVBRVI7SUFBSyxTQUFTLEVBQUM7RUFBYSxnQkFDM0I7SUFBSyxTQUFTLEVBQUM7RUFBUyxnQkFDdkI7SUFBSyxTQUFTLEVBQUM7RUFBbUIsZ0JBRWpDO0lBQUssU0FBUyxFQUFDLGlCQUFpQjtJQUFDLFlBQVM7RUFBUyxnQkFDbEQsNERBQUMsbURBQUk7SUFBQyxFQUFFLEVBQUM7RUFBRyxnQkFDWDtJQUFLLEdBQUcsRUFBQyw0QkFBNEI7SUFBQyxHQUFHLEVBQUMsTUFBTTtJQUFDLEtBQUssRUFBRSxHQUFJO0lBQUMsU0FBUyxFQUFDO0VBQVEsRUFBRyxDQUM1RSxDQUNGLGVBRU47SUFBSyxTQUFTLEVBQUM7RUFBcUIsZ0JBQ25DO0lBQUssU0FBUyxFQUFDLHlCQUF5QjtJQUFDLEtBQUssRUFBRTtNQUFDb0QsUUFBUSxFQUFDO0lBQU07RUFBRSxnQkFDakU7SUFBSSxTQUFTLEVBQUM7RUFBUSxvQkFBb0IsZUFDMUM7SUFBSSxTQUFTLEVBQUM7RUFBTyxnSUFFVSxDQUMxQixlQUNOO0lBQUssU0FBUyxFQUFDO0VBQWEsRUFFdEIsZUFDTjtJQUFNLFFBQVEsRUFBRWxCLFlBQWE7SUFBQyxTQUFTLEVBQUM7RUFBYSxnQkFDcEQ7SUFBSyxTQUFTLEVBQUM7RUFBMEIsZ0JBQ3hDO0lBQU8sSUFBSSxFQUFDLE9BQU87SUFBQyxTQUFTLEVBQUMsYUFBYTtJQUFDLFdBQVcsRUFBQyxNQUFNO0lBQUMsSUFBSSxFQUFDLE1BQU07SUFBQyxFQUFFLEVBQUMsTUFBTTtJQUFDLEtBQUssRUFBRU4sTUFBTSxDQUFDRCxJQUFLO0lBQUEsUUFBUSxFQUFFRyxpQkFBa0I7SUFBQyxRQUFRO0VBQUEsRUFBUyxlQUN0SjtJQUFPLE9BQU8sRUFBQyxNQUFNO0lBQUMsU0FBUyxFQUFDO0VBQWEsZUFBa0IsQ0FFMUQsZUFFTjtJQUFLLFNBQVMsRUFBQztFQUEwQixnQkFDeEM7SUFBTyxJQUFJLEVBQUMsT0FBTztJQUFDLFNBQVMsRUFBQyxhQUFhO0lBQUMsV0FBVyxFQUFDLE9BQU87SUFBQyxJQUFJLEVBQUMsT0FBTztJQUFDLEVBQUUsRUFBQyxPQUFPO0lBQUMsS0FBSyxFQUFFRixNQUFNLENBQUNGLEtBQU07SUFBQyxRQUFRLEVBQUVJLGlCQUFrQjtJQUFDLFFBQVE7RUFBQSxFQUFHLGVBQ3JKO0lBQU8sT0FBTyxFQUFDLE1BQU07SUFBQyxTQUFTLEVBQUM7RUFBYSwwQkFBNkIsQ0FFckUsZUFFTjtJQUFLLFNBQVMsRUFBQztFQUE2QixnQkFDM0M7SUFBVSxJQUFJLEVBQUMsT0FBTztJQUFDLFNBQVMsRUFBQyxhQUFhO0lBQUMsV0FBVyxFQUFDLFNBQVM7SUFBQyxJQUFJLEVBQUMsU0FBUztJQUFDLEVBQUUsRUFBQyxTQUFTO0lBQUMsS0FBSyxFQUFFRixNQUFNLENBQUNsRixPQUFRO0lBQUMsUUFBUSxFQUFFb0YsaUJBQWtCO0lBQUMsUUFBUTtFQUFBLEVBQUcsZUFDaEs7SUFBTyxPQUFPLEVBQUMsTUFBTTtJQUFDLFNBQVMsRUFBQztFQUFhLGtCQUFxQixDQUU3RCxlQUNOO0lBQ0EsS0FBSyxFQUFFO01BQUNqRixTQUFTLEVBQUM7SUFBTSxDQUFFO0lBQ3pCLElBQUksRUFBQyxRQUFRO0lBQ2IsU0FBUyxFQUFDO0VBQXlDLGFBRzNDLENBQ0gsQ0FDRixDQUVELENBRUQsQ0FDRCxDQUNELENBRUg7QUFFTDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLGlFQUFleUUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlJSDtBQUN5QjtBQUNYO0FBQ0Q7QUFDRztBQUNaO0FBRzlCLFNBQVMrQixNQUFNLEdBQUc7RUFDaEIsb0JBQ0UsdUlBUUU7SUFBSyxTQUFTLEVBQUMsRUFBRTtJQUFDLEtBQUssRUFBRTtNQUFFdEUsVUFBVSxFQUFFLE1BQU07TUFBRW5DLGVBQWUsRUFBRSxtQ0FBbUM7TUFBRXFCLE1BQU0sRUFBQyxNQUFNO01BQUVlLGFBQWEsRUFBRTtJQUFLO0VBQUUsZ0JBQ3hJO0lBQUssU0FBUyxFQUFDO0VBQVUsZ0JBQ3ZCO0lBQ0UsU0FBUyxFQUFDLFlBQVk7SUFDdEIsWUFBUyxTQUFTO0lBQ2xCLHFCQUFrQjtFQUFNLGdCQUV4QjtJQUNFLFNBQVMsRUFBQyx3Q0FBd0M7SUFDbEQsRUFBRSxFQUFDO0VBQVcsWUFHWCxlQUNMO0lBQUksU0FBUyxFQUFDO0VBQWdDLCtDQUV6QyxlQUVMLDJEQUFDLGdEQUFNO0lBQUMsYUFBYSxFQUFFLENBQUU7SUFBQyxZQUFZLEVBQUUsQ0FBQyxHQUFJO0lBQUMsU0FBUyxFQUFDO0VBQVEsZ0JBQzlELDJEQUFDLHFEQUFXLHFCQUNWLDJEQUFDLGtEQUFJO0lBQUMsRUFBRSxFQUFDLFVBQVU7SUFBQyxTQUFTLEVBQUM7RUFBVSxnQkFDdEM7SUFDRSxTQUFTLEVBQUMsVUFBVTtJQUNwQixLQUFLLEVBQUU7TUFDTHBDLGVBQWUsRUFDZiwwREFBMEQ7TUFDMUQwRyxjQUFjLEVBQUU7SUFDaEI7RUFBRSxnQkFFSjtJQUNFLEtBQUssRUFBRTtNQUNMdEYsS0FBSyxFQUFFLE1BQU07TUFDYkMsTUFBTSxFQUFFLE1BQU07TUFDZGEsY0FBYyxFQUFFO0lBQ2xCO0VBQUUsZ0JBRUY7SUFBRyxTQUFTLEVBQUM7RUFBNkIsMkJBRXhDLHNFQUFNLGVBQ04sc0VBQU0sZUFDTjtJQUFNLFNBQVMsRUFBQztFQUFPLGtDQUVyQixzRUFBTSxZQUVELENBQ0wsQ0FDQSxDQUNGLENBQ0QsQ0FDSyxlQUVkLDJEQUFDLHFEQUFXLHFCQUNWLDJEQUFDLGtEQUFJO0lBQUMsRUFBRSxFQUFDLFVBQVU7SUFBQyxTQUFTLEVBQUM7RUFBVSxnQkFDdEM7SUFDRSxTQUFTLEVBQUMsVUFBVTtJQUNwQixLQUFLLEVBQUU7TUFDTGxDLGVBQWUsRUFDZiw4QkFBOEI7TUFDOUIwRyxjQUFjLEVBQUU7SUFDbEI7RUFBRSxnQkFFRjtJQUNFLEtBQUssRUFBRTtNQUNMdEYsS0FBSyxFQUFFLE1BQU07TUFDYkMsTUFBTSxFQUFFLE1BQU07TUFDZGEsY0FBYyxFQUFFO0lBQ2xCO0VBQUUsZ0JBRUY7SUFBRyxTQUFTLEVBQUM7RUFBNkIsaUNBRXhDLHNFQUFNLGVBQ04sc0VBQU0sZUFDTjtJQUFNLFNBQVMsRUFBQztFQUFPLDRCQUVyQixzRUFBTSxlQUVELENBQ0wsQ0FDQSxDQUNGLENBQ0QsQ0FDSyxlQUVkLDJEQUFDLHFEQUFXLHFCQUNWLDJEQUFDLGtEQUFJO0lBQUMsRUFBRSxFQUFDLFVBQVU7SUFBQyxTQUFTLEVBQUM7RUFBVSxnQkFDdEM7SUFDRSxTQUFTLEVBQUMsVUFBVTtJQUNwQixLQUFLLEVBQUU7TUFDTGxDLGVBQWUsRUFDZiwrQkFBK0I7TUFDL0IwRyxjQUFjLEVBQUU7SUFDaEI7RUFBRSxnQkFFSjtJQUNFLEtBQUssRUFBRTtNQUNMdEYsS0FBSyxFQUFFLE1BQU07TUFDYkMsTUFBTSxFQUFFLE1BQU07TUFDZGEsY0FBYyxFQUFFO0lBQ2xCO0VBQUUsZ0JBRUY7SUFBRyxTQUFTLEVBQUM7RUFBNkIseUJBRXhDLHNFQUFNLGVBQ04sc0VBQU0sZUFDTjtJQUFNLFNBQVMsRUFBQztFQUFPLDZCQUVyQixzRUFBTSxvQkFFRCxDQUNMLENBQ0EsQ0FDRixDQUNELENBQ0ssQ0FFUCxlQUVUO0lBQ0UsU0FBUyxFQUFDLHNEQUFzRDtJQUNoRSxZQUFTLFNBQVM7SUFDbEIscUJBQWtCO0VBQU0saUNBR3JCLGVBQ0w7SUFBUSxPQUFPLEVBQUUsbUJBQU07TUFBQ3pHLFFBQVEsQ0FBQ0QsUUFBUSxHQUFHLFlBQVk7SUFBQSxDQUFFO0lBQUMsU0FBUyxFQUFDO0VBQWdELHFCQUU1RyxDQUNMLENBQ0YsQ0FDRixDQUdMO0FBRVA7QUFFQSxpRUFBZWlMLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Sks7QUFDZ0I7QUFDWjtBQUU5QixTQUFTRSxRQUFRLEdBQUc7RUFDbEIsb0JBQ0UsdUlBQ0gsMkRBQUMsb0RBQVE7SUFBQyxPQUFPLEVBQUMsOEJBQThCO0lBQUMsUUFBUSxFQUFFO0VBQUksZ0JBQzFEO0lBQ0U7SUFDQSxTQUFTLEVBQUMsVUFBVTtJQUNwQixHQUFHLEVBQUM7RUFBVSxnQkFLZDtJQUFLLFNBQVMsRUFBQztFQUFXLGdCQUN4QjtJQUFLLFNBQVMsRUFBQztFQUFhLGdCQUMxQjtJQUFLLFNBQVMsRUFBQztFQUFTLGdCQUN0QjtJQUFLLFNBQVMsRUFBQyxNQUFNO0lBQUMsWUFBUyxTQUFTO0lBQUMscUJBQWtCO0VBQU0sZ0JBQy9EO0lBQUksU0FBUyxFQUFDO0VBQWlCLFVBQVUsZUFDekM7SUFBSSxTQUFTLEVBQUM7RUFBaUIsMEJBQXVCLENBQ2xELGVBQ047SUFBSyxTQUFTLEVBQUMsTUFBTTtJQUFDLFlBQVMsU0FBUztJQUFDLHFCQUFrQjtFQUFNLGdCQUMvRDtJQUFJLFNBQVMsRUFBQztFQUFpQixVQUFVLGVBQ3pDO0lBQUksU0FBUyxFQUFDO0VBQWlCLHlCQUFzQixDQUNqRCxlQUNOO0lBQUssU0FBUyxFQUFDLE1BQU07SUFBQyxZQUFTLFNBQVM7SUFBQyxxQkFBa0I7RUFBTSxnQkFDL0Q7SUFBSSxTQUFTLEVBQUM7RUFBaUIsVUFBVSxlQUN6QztJQUFJLFNBQVMsRUFBQztFQUFpQiw0QkFBc0IsQ0FDakQsZUFDTjtJQUFLLFNBQVMsRUFBQyxNQUFNO0lBQUMsWUFBUyxTQUFTO0lBQUMscUJBQWtCO0VBQU0sZ0JBQy9EO0lBQUksU0FBUyxFQUFDO0VBQWlCLFVBQVUsZUFDekM7SUFBSSxTQUFTLEVBQUM7RUFBaUIsK0JBQXlCLENBQ3BELGVBQ047SUFBSyxTQUFTLEVBQUMsTUFBTTtJQUFDLFlBQVMsU0FBUztJQUFDLHFCQUFrQjtFQUFNLGdCQUMvRDtJQUFJLFNBQVMsRUFBQztFQUFpQixVQUFVLGVBQ3pDO0lBQUksU0FBUyxFQUFDO0VBQWlCLDZCQUEwQixDQUNyRCxlQUNOO0lBQUssU0FBUyxFQUFDLE1BQU07SUFBQyxZQUFTLFNBQVM7SUFBQyxxQkFBa0I7RUFBTSxnQkFDL0Q7SUFBSSxTQUFTLEVBQUM7RUFBaUIsVUFBVSxlQUN6QztJQUFJLFNBQVMsRUFBQztFQUFpQixvQkFBb0IsQ0FDL0MsQ0FDRixDQUNGLENBQ0YsQ0FDRixDQUNFLENBQ1A7QUFFUDtBQUVBLGlFQUFlQSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEa0I7QUFDRDtBQUNXO0FBQy9CO0FBQ21CO0FBQ0c7QUFDWjtBQUU5QixTQUFTQyxRQUFRLENBQUNuRyxJQUFJLEVBQUU7RUFDdEIsSUFBSUMsTUFBTSxHQUFHLEVBQUU7RUFDZmhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYyxJQUFJLENBQUM7RUFDakIsSUFBR0EsSUFBSSxDQUFDQSxJQUFJLENBQUNsQixNQUFNLEdBQUUsQ0FBQyxFQUFFO0lBQ3RCa0IsSUFBSSxDQUFDQSxJQUFJLENBQUNFLE9BQU8sQ0FBQyxVQUFBQyxPQUFPLEVBQUk7TUFDM0JsQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2lCLE9BQU8sQ0FBQztNQUNwQixJQUFJQyxTQUFTLEdBQUdDLFNBQVM7TUFDekIsSUFBR0YsT0FBTyxDQUFDaUcsUUFBUSxFQUFDO1FBQ2hCaEcsU0FBUyxnQkFDUCwyREFBQyxxREFBVztVQUFDLEdBQUcsRUFBRUQsT0FBTyxDQUFDNUQsRUFBRztVQUFDLFNBQVMsRUFBQztRQUFjLGdCQUNwRDtVQUNFLElBQUksb0JBQWE0RCxPQUFPLENBQUM1RCxFQUFFLENBQUc7VUFDOUIsS0FBSyxFQUFFO1lBQUUrRCxjQUFjLEVBQUUsTUFBTTtZQUFFQyxLQUFLLEVBQUU7VUFBUTtRQUFFLGdCQUVsRDtVQUNFLFNBQVMsRUFBQyxnQkFBYTtVQUN2QixVQUFVLEVBQUUsb0JBQUNDLENBQUM7WUFBQSxPQUFLQyxnQkFBZ0IsQ0FBQ0QsQ0FBQyxDQUFDO1VBQUEsQ0FBQztVQUN2QyxXQUFXLEVBQUUscUJBQUNBLENBQUM7WUFBQSxPQUFLRSxVQUFVLENBQUNGLENBQUMsQ0FBQztVQUFBO1FBQUMsZ0JBRWxDO1VBQ0UsS0FBSyxFQUFFO1lBQ0xHLEtBQUssRUFBRSxPQUFPO1lBQ2RDLE1BQU0sRUFBRSxNQUFNO1lBQ2RDLFFBQVEsRUFBRTtVQUNaO1FBQUUsZ0JBRUY7VUFDRSxLQUFLLEVBQUU7WUFDTEMsYUFBYSxFQUFFLE1BQU07WUFDckJDLE9BQU8sRUFBRSxNQUFNO1lBQ2ZKLEtBQUssRUFBRSxPQUFPO1lBQ2RLLFNBQVMsRUFBRSxRQUFRO1lBQ25CSCxRQUFRLEVBQUUsVUFBVTtZQUNwQkksSUFBSSxFQUFFLEtBQUs7WUFDWEMsR0FBRyxFQUFFO1VBQ1A7UUFBRSxHQUVEZixPQUFPLENBQUNnQixPQUFPLENBQ2QsQ0FDQSxlQUNOO1VBQ0UsS0FBSyxFQUFFO1lBQ0xSLEtBQUssRUFBRSxNQUFNO1lBQ2JDLE1BQU0sRUFBRSxNQUFNO1lBQ2RRLFNBQVMsRUFBRTtVQUNiLENBQUU7VUFDRixHQUFHLGdDQUF5QmpCLE9BQU8sQ0FBQ2lHLFFBQVEsQ0FBRztVQUMvQyxHQUFHLEVBQUM7UUFBRSxFQUNOLENBQ0UsQ0FDSixDQUVQO01BQ0wsQ0FBQyxNQUFJO1FBQ0RoRyxTQUFTLGdCQUNQLDJEQUFDLHFEQUFXO1VBQUMsR0FBRyxFQUFFRCxPQUFPLENBQUM1RCxFQUFHO1VBQUMsU0FBUyxFQUFDO1FBQWMsZ0JBQ3BEO1VBQ0UsSUFBSSxvQkFBYTRELE9BQU8sQ0FBQzVELEVBQUUsQ0FBRztVQUM5QixLQUFLLEVBQUU7WUFBRStELGNBQWMsRUFBRSxNQUFNO1lBQUVDLEtBQUssRUFBRTtVQUFRO1FBQUUsZ0JBRWxEO1VBQ0UsU0FBUyxFQUFDLGdCQUFhO1VBQ3ZCLFVBQVUsRUFBRSxvQkFBQ0MsQ0FBQztZQUFBLE9BQUtDLGdCQUFnQixDQUFDRCxDQUFDLENBQUM7VUFBQSxDQUFDO1VBQ3ZDLFdBQVcsRUFBRSxxQkFBQ0EsQ0FBQztZQUFBLE9BQUtFLFVBQVUsQ0FBQ0YsQ0FBQyxDQUFDO1VBQUEsQ0FBQztVQUNsQyxLQUFLLEVBQUU7WUFDSGEsVUFBVSxFQUFFO1VBQVU7UUFBRSxnQkFFNUI7VUFDRSxLQUFLLEVBQUU7WUFDTFYsS0FBSyxFQUFFLE9BQU87WUFDZEMsTUFBTSxFQUFFLE1BQU07WUFDZEMsUUFBUSxFQUFFO1VBQ1o7UUFBRSxnQkFFRjtVQUNFLEtBQUssRUFBRTtZQUNMQyxhQUFhLEVBQUUsTUFBTTtZQUNyQkMsT0FBTyxFQUFFLE1BQU07WUFDZkosS0FBSyxFQUFFLE9BQU87WUFDZEssU0FBUyxFQUFFLFFBQVE7WUFDbkJILFFBQVEsRUFBRSxVQUFVO1lBQ3BCSSxJQUFJLEVBQUUsS0FBSztZQUNYQyxHQUFHLEVBQUU7VUFDUDtRQUFFLEdBRURmLE9BQU8sQ0FBQ2dCLE9BQU8sQ0FDZCxDQUNBLGVBQ047VUFDRSxLQUFLLEVBQUU7WUFDTFIsS0FBSyxFQUFFLE1BQU07WUFDYkMsTUFBTSxFQUFFLE1BQU07WUFDZFEsU0FBUyxFQUFFO1VBQ2IsQ0FBRTtVQUNGLEdBQUcsRUFBRSx5QkFBMEI7VUFDL0IsR0FBRyxFQUFDO1FBQUUsRUFDTixDQUNFLENBQ0osQ0FFUDtNQUNMO01BQ0FuQixNQUFNLENBQUNxQixJQUFJLENBQUNsQixTQUFTLENBQUM7SUFDMUIsQ0FBQyxDQUFDO0VBQ0YsQ0FBQyxNQUFJO0lBQ0hILE1BQU0sZ0JBQUs7TUFBSSxTQUFTLEVBQUM7SUFBd0MsaUJBQW1CO0VBQ3RGO0VBQ0EsU0FBU1MsVUFBVSxDQUFDRixDQUFDLEVBQUM7SUFDcEJ2QixPQUFPLENBQUNDLEdBQUcsQ0FBQ3NCLENBQUMsQ0FBQztJQUNkQSxDQUFDLENBQUNlLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxjQUFjLEdBQUcsV0FBVztJQUMzQ2pCLENBQUMsQ0FBQ2UsTUFBTSxDQUFDekcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDMEcsS0FBSyxDQUFDVCxPQUFPLEdBQUcsUUFBUTtFQUMvQztFQUNBLFNBQVNOLGdCQUFnQixDQUFDRCxDQUFDLEVBQUM7SUFDMUJ2QixPQUFPLENBQUNDLEdBQUcsQ0FBQ3NCLENBQUMsQ0FBQztJQUNkQSxDQUFDLENBQUNlLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxjQUFjLEdBQUcsU0FBUztJQUN6Q2pCLENBQUMsQ0FBQ2UsTUFBTSxDQUFDekcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDMEcsS0FBSyxDQUFDVCxPQUFPLEdBQUcsTUFBTTtFQUM3QztFQUNBLG9CQUNFLHVJQU9FLDJEQUFDLG9EQUFRO0lBQUMsT0FBTyxFQUFDLDhCQUE4QjtJQUFDLFFBQVEsRUFBRTtFQUFJLGdCQUUvRDtJQUFLLFNBQVMsRUFBQyxFQUFFO0lBQUMsS0FBSyxFQUFFO01BQUNXLFVBQVUsRUFBRTtJQUFNO0VBQUUsZ0JBQzVDO0lBQ0UsWUFBUyxTQUFTO0lBQ2xCLG1CQUFnQixFQUFFO0lBQ2xCLGlCQUFjLE9BQU87SUFDckIsNkJBQTBCLEVBQUU7SUFDNUIscUJBQWtCO0VBQU0sZ0JBRXhCO0lBQUssU0FBUyxFQUFDO0VBQVUsZ0JBQ3ZCO0lBQ0UsU0FBUyxFQUFDLHdDQUF3QztJQUNsRCxZQUFTLFNBQVM7SUFDbEIscUJBQWtCO0VBQU0saUJBR3JCLGVBQ0w7SUFDRSxTQUFTLEVBQUMsZ0NBQWdDO0lBQzFDLFlBQVMsU0FBUztJQUNsQixxQkFBa0I7RUFBTSw2Q0FHckIsZUFFTCwyREFBQyxnREFBTTtJQUNQLEtBQUssRUFBRTtNQUFDZCxNQUFNLEVBQUU7SUFBTyxDQUFFO0lBQ3ZCLGFBQWEsRUFBRSxDQUFFO0lBQ2pCLGNBQWMsRUFBRSxLQUFNO0lBQ3RCLFlBQVksRUFBRSxDQUFFO0lBQ2hCLFdBQVcsRUFBRTtNQUNYLEdBQUcsRUFBRTtRQUNIZ0IsYUFBYSxFQUFFLENBQUM7UUFDaEJDLFlBQVksRUFBRTtNQUNoQixDQUFDO01BQ0QsR0FBRyxFQUFFO1FBQ0hELGFBQWEsRUFBRSxDQUFDO1FBQ2hCQyxZQUFZLEVBQUU7TUFDaEIsQ0FBQztNQUNELElBQUksRUFBRTtRQUNKRCxhQUFhLEVBQUUsQ0FBQztRQUNoQkMsWUFBWSxFQUFFO01BQ2hCO0lBQ0YsQ0FBRTtJQUNGLFNBQVMsRUFBQyxTQUFTO0lBQ25CLFlBQVMsU0FBUztJQUNsQixxQkFBa0I7RUFBTSxHQUV2QjVCLE1BQU0sQ0FzQkEsZUFDVDtJQUNFLFlBQVMsU0FBUztJQUNsQixxQkFBa0I7RUFBTSxnQkFDMUI7SUFDRSxTQUFTLEVBQUM7RUFBc0QsMkNBRzdELGVBQ0w7SUFDRSxTQUFTLEVBQUM7RUFBZ0QsZ0JBRTFELDJEQUFDLGtEQUFJO0lBQUMsRUFBRSxFQUFDLFlBQVk7SUFBQyxTQUFTLEVBQUM7RUFBVSxvQkFDckIsQ0FDZCxDQUNILENBQ0YsQ0FDRixDQUNGLENBQ0ssQ0FDVjtBQUVQO0FBRUEsaUVBQWVrRyxRQUFRLEVBQUM7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtFQUNFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwUHdCO0FBQ087QUFDQztBQUNRO0FBQ1o7QUFFOUIsU0FBU0UsT0FBTyxHQUFHO0VBQ2pCLGdCQUFnQ2xLLGdEQUFRLENBQUMsS0FBSyxDQUFDO0lBQUE7SUFBeENPLFFBQVE7SUFBRUMsV0FBVztFQUM3QixpQkFBMEJSLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBL0JlLEtBQUs7SUFBRUMsUUFBUTtFQUNyQmpCLGlEQUFTLENBQUMsWUFBTTtJQUNkZ0MsS0FBSyxvQkFBbUI7TUFBQ0MsTUFBTSxFQUFDLEtBQUs7TUFBQ0MsT0FBTyxFQUFDO1FBQUNDLE1BQU0sRUFBRSxrQkFBa0I7UUFBQyxjQUFjLEVBQUU7TUFBa0I7SUFBQyxDQUFDLENBQUMsQ0FDOUdDLElBQUksQ0FBQyxVQUFBQyxHQUFHO01BQUEsT0FBSUEsR0FBRyxDQUFDQyxJQUFJLEVBQUU7SUFBQSxFQUFDLENBQ3ZCRixJQUFJLENBQ0gsVUFBQ0csTUFBTSxFQUFLO01BQ1o5QixXQUFXLENBQUMsSUFBSSxDQUFDO01BQ2pCUSxRQUFRLENBQUNzQixNQUFNLENBQUM7TUFDaEI7SUFDQSxDQUFDO0lBQ0Q7SUFDQTtJQUNBO0lBQ0EsVUFBQ2pDLEtBQUssRUFBSztNQUNYRyxXQUFXLENBQUMsSUFBSSxDQUFDO01BQ2pCRixRQUFRLENBQUNELEtBQUssQ0FBQztJQUNmLENBQUMsQ0FDRjtFQUNILENBQUMsRUFBRSxFQUFFLENBQUM7RUFDTixvQkFDRSx5SUFTSSw0REFBQyxxREFBUTtJQUFDLE9BQU8sRUFBQyw4QkFBOEI7SUFBQyxRQUFRLEVBQUU7RUFBSSxnQkFFL0Q7SUFBSyxTQUFTLEVBQUMsRUFBRTtJQUFDLEtBQUssRUFBRTtNQUFDa0YsVUFBVSxFQUFFO0lBQU07RUFBRSxnQkFDOUM7SUFBSyxZQUFTLFNBQVM7SUFBQyxtQkFBZ0IsTUFBTTtJQUFBLGlCQUFjLE9BQU87SUFBQSw2QkFBMEIsWUFBWTtJQUFDLHFCQUFrQjtFQUFNLGdCQUNoSTtJQUFLLFNBQVMsRUFBQztFQUFVLGdCQUN2QjtJQUFLLFNBQVMsRUFBQztFQUFhLGdCQUMxQjtJQUNFLFNBQVMsRUFBQyx3Q0FBd0M7SUFDbEQsWUFBUyxTQUFTO0lBQ2xCLHFCQUFrQjtFQUFNLGdCQUdyQixlQUNMO0lBQ0UsU0FBUyxFQUFDLGdDQUFnQztJQUMxQyxZQUFTLFNBQVM7SUFDbEIscUJBQWtCO0VBQU0scUNBR3JCLGVBQ0w7SUFBSyxTQUFTLEVBQUM7RUFBc0IsZ0JBQ25DO0lBQ0UsU0FBUyxFQUFDLFVBQVU7SUFDcEIsWUFBUyxTQUFTO0lBQ2xCLHFCQUFrQjtFQUFNLGdCQUVyQztJQUFRLEtBQUssRUFBRTtNQUFDZixLQUFLLEVBQUUsTUFBTTtNQUFFQyxNQUFNLEVBQUUsTUFBTTtNQUFFUSxTQUFTLEVBQUU7SUFBTyxDQUFFO0lBQUMsR0FBRywwQ0FBbUNsRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUc7SUFBQyxLQUFLLEVBQUMsc0JBQXNCO0lBQUMsV0FBVyxFQUFDLEdBQUc7SUFBQyxLQUFLLEVBQUMsMEZBQTBGO0lBQUMsZUFBZTtFQUFBLEVBQVUsQ0FDOVIsQ0FDVSxlQUNOO0lBQ0UsU0FBUyxFQUFDLHNEQUFzRDtJQUNoRSxZQUFTLFNBQVM7SUFDbEIscUJBQWtCO0VBQU0sMkNBR3JCLGVBQ0w7SUFBUSxPQUFPLEVBQUUsbUJBQUk7TUFBQ2xDLFFBQVEsQ0FBQ0QsUUFBUSxHQUFHLFlBQVk7SUFBQSxDQUFFO0lBQ3RELFNBQVMsRUFBQztFQUFnRCxlQUduRCxDQUNMLENBQ0YsQ0FDRixDQUNGLENBQ0ssQ0FDVjtBQUVQO0FBRUEsaUVBQWVzTCxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkY0QjtBQUNWO0FBQ0Q7QUFDRztBQUNaO0FBQ0E7QUFDMEI7QUFHeEQsU0FBU0MsTUFBTSxHQUFHO0VBQ2pCLGdCQUE0Qm5LLGdEQUFRLENBQUM7TUFDcENrSSxLQUFLLEVBQUU7SUFDUixDQUFDLENBQUM7SUFBQTtJQUZLRSxNQUFNO0lBQUVDLFNBQVM7RUFJeEIsaUJBQWdDckksZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUF4Q08sUUFBUTtJQUFFQyxXQUFXO0VBQzVCLGlCQUEwQlIsZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTtJQUEvQmUsS0FBSztJQUFFQyxRQUFRO0VBQ3RCakIsaURBQVMsQ0FBQyxZQUFNO0lBQ2ZnQyxLQUFLLG1CQUFrQjtNQUFDQyxNQUFNLEVBQUMsS0FBSztNQUFDQyxPQUFPLEVBQUM7UUFBQ0MsTUFBTSxFQUFFLGtCQUFrQjtRQUFDLGNBQWMsRUFBRTtNQUFrQjtJQUFDLENBQUMsQ0FBQyxDQUM3R0MsSUFBSSxDQUFDLFVBQUFDLEdBQUc7TUFBQSxPQUFJQSxHQUFHLENBQUNDLElBQUksRUFBRTtJQUFBLEVBQUMsQ0FDdkJGLElBQUksQ0FDTCxVQUFDRyxNQUFNLEVBQUs7TUFDWjlCLFdBQVcsQ0FBQyxJQUFJLENBQUM7TUFDakJRLFFBQVEsQ0FBQ3NCLE1BQU0sQ0FBQztNQUNoQjtJQUNBLENBQUM7SUFDRDtJQUNBO0lBQ0E7SUFDQSxVQUFDakMsS0FBSyxFQUFLO01BQ1hHLFdBQVcsQ0FBQyxJQUFJLENBQUM7TUFDakJGLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDO0lBQ2YsQ0FBQyxDQUNBO0VBQ0QsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNQLElBQU00SCxNQUFNLEdBQUdELGlFQUFnQixDQUFDRCxxREFBSSxDQUFDO0VBRXJDLElBQU1xQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXNCLENBQUk3QixLQUFLLEVBQUs7SUFDekNBLEtBQUssQ0FBQ0MsT0FBTyxFQUFFO0lBQ2ZILFNBQVMsQ0FBQyxVQUFDRCxNQUFNO01BQUEsdUNBQ2JBLE1BQU07UUFDVEYsS0FBSyxFQUFFSyxLQUFLLENBQUNuRCxNQUFNLENBQUNxRDtNQUFLO0lBQUEsQ0FFeEIsQ0FBQztJQUNIM0YsT0FBTyxDQUFDQyxHQUFHLENBQUNxRixNQUFNLENBQUNGLEtBQUssQ0FBQztFQUMxQixDQUFDO0VBRUQsSUFBTVEsWUFBWSxHQUFHLFNBQWZBLFlBQVksQ0FBSXJFLENBQUMsRUFBSztJQUMzQkEsQ0FBQyxDQUFDdUUsY0FBYyxFQUFFO0lBQ2xCdkUsQ0FBQyxDQUFDZSxNQUFNLENBQUN6RyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNnSyxRQUFRLEdBQUcsSUFBSTtJQUNwQ1YsTUFBTSxDQUFDWSxJQUFJLENBQ1YsUUFBUSxFQUNSLG1DQUFtQyxFQUNuQyxTQUFTLENBQ1A7SUFDSCxJQUFNWSxjQUFjLEdBQUc7TUFDdEJ6SCxNQUFNLEVBQUUsTUFBTTtNQUNkQyxPQUFPLEVBQUU7UUFBRSxjQUFjLEVBQUU7TUFBbUIsQ0FBQztNQUMvQ3lILElBQUksRUFBRWxILElBQUksQ0FBQ21ILFNBQVMsQ0FBQztRQUFFLE9BQU8sRUFBRXZCLE1BQU0sQ0FBQ0YsS0FBSztRQUFFLEtBQUssRUFBRTtNQUFLLENBQUM7SUFDNUQsQ0FBQztJQUNEbkcsS0FBSyxDQUFDLGFBQWEsRUFBRTBILGNBQWMsQ0FBQyxDQUNsQ3RILElBQUksQ0FBQyxVQUFBa0ksUUFBUTtNQUFBLE9BQUlBLFFBQVEsQ0FBQ2hJLElBQUksRUFBRTtJQUFBLEVBQUM7RUFDcEMsQ0FBQztFQUNBLG9CQUNJLHlJQUVFO0lBQ0UsS0FBSyxFQUFFO01BQ0xlLGVBQWUsRUFBRSxtQ0FBbUM7TUFDcERxQixNQUFNLEVBQUUsTUFBTTtNQUNkZSxhQUFhLEVBQUU7SUFDakI7RUFBRSxnQkFFRjtJQUFLLEVBQUUsRUFBQyxRQUFRO0lBQUMsU0FBUyxFQUFDLGdCQUFnQjtJQUFDLEdBQUcsRUFBQztFQUFRLGdCQUN0RDtJQUFLLFNBQVMsRUFBQztFQUFXLGdCQUN4QjtJQUFLLFNBQVMsRUFBQztFQUFRLEVBQU8sZUFDOUI7SUFBSSxTQUFTLEVBQUM7RUFBdUMsOEJBRWhELGVBQ0w7SUFBUSxTQUFTLEVBQUM7RUFBa0MsZ0JBQ2xELDREQUFDLG1EQUFJO0lBQUMsRUFBRSxFQUFDLFVBQVU7SUFBQyxTQUFTLEVBQUM7RUFBVSxhQUVqQyxDQUNBLGVBQ1Q7SUFBSSxTQUFTLEVBQUM7RUFBdUMsMENBRWhELENBQ0QsQ0FDRixlQUNOLDREQUFDLGtEQUFPO0lBQUMsSUFBSSxFQUFDLG9CQUFvQjtJQUFDLFNBQVMsRUFBQztFQUFTLEVBQVcsZUFDakU7SUFBSyxTQUFTLEVBQUMsaUJBQWlCO0lBQUMsR0FBRyxFQUFDO0VBQVEsZ0JBQzNDO0lBQUssU0FBUyxFQUFDO0VBQVcsZ0JBQ3hCO0lBQUssU0FBUyxFQUFDO0VBQVMsZ0JBQ3RCO0lBQUssU0FBUyxFQUFDO0VBQU0sZ0JBQ25CO0lBQ0UsU0FBUyxFQUFDLGFBQWE7SUFDdkIsR0FBRyxFQUFDLDRCQUE0QjtJQUNoQyxHQUFHLEVBQUMsRUFBRTtJQUNOLEtBQUssRUFBQztFQUFLLEVBQ1gsZUFDRjtJQUFJLFNBQVMsRUFBQztFQUFLLGdCQUNqQjtJQUFJLFNBQVMsRUFBQztFQUFVLGdCQUN0QjtJQUFHLElBQUksRUFBQyxFQUFFO0lBQUMsU0FBUyxFQUFDO0VBQTBCLFlBRTNDLENBQ0QsZUFDTDtJQUFJLFNBQVMsRUFBQztFQUFLLGdCQUNqQjtJQUNFLElBQUksRUFBQyxFQUFFO0lBQ1AsS0FBSyxFQUFFO01BQUVtQixhQUFhLEVBQUU7SUFBWSxDQUFFO0lBQ3RDLFNBQVMsRUFBQztFQUEwQixHQUVuQzVGLEtBQUssQ0FBQ3VKLE9BQU8sQ0FDWixDQUNELGVBQ0w7SUFBSSxTQUFTLEVBQUM7RUFBSyxnQkFDakI7SUFDRSxJQUFJLEVBQUMsRUFBRTtJQUNQLEtBQUssRUFBRTtNQUFFM0QsYUFBYSxFQUFFO0lBQVksQ0FBRTtJQUN0QyxTQUFTLEVBQUM7RUFBMEIsR0FFbkM1RixLQUFLLENBQUNtSCxLQUFLLENBQ1YsQ0FDRCxlQUNMO0lBQUksU0FBUyxFQUFDO0VBQUssZ0JBQ2pCO0lBQ0UsSUFBSSxFQUFDLEVBQUU7SUFDUCxLQUFLLEVBQUU7TUFBRXZCLGFBQWEsRUFBRTtJQUFZLENBQUU7SUFDdEMsU0FBUyxFQUFDO0VBQTBCLEdBRW5DNUYsS0FBSyxDQUFDd0osR0FBRyxDQUNSLENBQ0QsQ0FDRixDQUNELGVBRU47SUFBSyxTQUFTLEVBQUM7RUFBTSxnQkFDbkI7SUFDRSxTQUFTLEVBQUMsMENBQTBDO0lBQ3BELEtBQUssRUFBRTtNQUFFbEgsU0FBUyxFQUFFO0lBQU87RUFBRSw4QkFFbkIsdUVBQU0scUJBQ2IsZUFDTDtJQUFLLFNBQVMsRUFBQztFQUF1QixnQkFDcEM7SUFDRSxTQUFTLEVBQUMsS0FBSztJQUNmLElBQUksRUFBQztFQUF3QyxFQUMxQyxlQUNMO0lBQ0UsU0FBUyxFQUFDLFFBQVE7SUFDbEIsSUFBSSxFQUFDO0VBQStDLEVBQ2pELGVBQ0w7SUFDRSxTQUFTLEVBQUMsV0FBVztJQUNyQixJQUFJLEVBQUM7RUFBaUQsRUFDbkQsQ0FDRCxlQUNOO0lBQU0sUUFBUSxFQUFFcUY7RUFBYSxnQkFDM0I7SUFBSSxTQUFTLEVBQUM7RUFBMkMsR0FDdEQsR0FBRyxlQUVELGVBQ0w7SUFDRSxTQUFTLEVBQUMsa0JBQWtCO0lBQzVCLElBQUksRUFBQyxPQUFPO0lBQ1osRUFBRSxFQUFDLE9BQU87SUFDVixJQUFJLEVBQUMsSUFBSTtJQUNULElBQUksRUFBQyxPQUFPO0lBQ1osS0FBSyxFQUFFTixNQUFNLENBQUNGLEtBQU07SUFDcEIsUUFBUSxFQUFFa0Msc0JBQXVCO0lBQ2pDLFFBQVE7RUFBQSxFQUNELENBQ0osQ0FDSCxlQUVOO0lBQUssU0FBUyxFQUFDO0VBQU0sZ0JBQ25CO0lBQUksU0FBUyxFQUFDO0VBQTZCLGNBQWMsZUFDekQ7SUFBSSxTQUFTLEVBQUM7RUFBSyxnQkFDakI7SUFBSSxTQUFTLEVBQUM7RUFBSyxnQkFDakI7SUFBRyxJQUFJLEVBQUMsR0FBRztJQUFDLFNBQVMsRUFBQztFQUEwQixhQUU1QyxDQUNELGVBQ0w7SUFBSSxTQUFTLEVBQUM7RUFBSyxnQkFDakI7SUFBRyxJQUFJLEVBQUMsWUFBWTtJQUFDLFNBQVMsRUFBQztFQUEwQixZQUVyRCxDQUNELGVBQ0w7SUFBSSxTQUFTLEVBQUM7RUFBSyxnQkFDakI7SUFBRyxJQUFJLEVBQUMsWUFBWTtJQUFDLFNBQVMsRUFBQztFQUEwQixhQUVyRCxDQUNELGVBQ0w7SUFBSSxTQUFTLEVBQUM7RUFBSyxnQkFDakI7SUFBRyxJQUFJLEVBQUMsVUFBVTtJQUFDLFNBQVMsRUFBQztFQUEwQixhQUVuRCxDQUNELENBQ0YsQ0FDRCxDQUNGLGVBQ047SUFBRyxTQUFTLEVBQUM7RUFBbUMscURBRTVDLENBQ0EsQ0FDRixDQUNGLENBR0w7QUFFUjtBQUdELGlFQUFlRCxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JOSztBQUNKO0FBQ0k7QUFDYTtBQUNHO0FBQ1o7QUFFOUIsU0FBU0ssUUFBUSxHQUFHO0VBQ2xCaEUsK0NBQVEsRUFBRTtFQUNWLG9CQUNFLHVJQUdFO0lBQU8sV0FBVztJQUFDLFFBQVE7SUFBQyxLQUFLO0lBQUMsSUFBSTtFQUFBLGdCQUN2QztJQUFRLEdBQUcsRUFBQywyQkFBMkI7SUFBQyxJQUFJLEVBQUM7RUFBVyxFQUFVLENBQzNELGVBR047SUFBSyxTQUFTLEVBQUM7RUFBYSxnQkFDMUI7SUFBSyxTQUFTLEVBQUM7RUFBUyxnQkFDdEI7SUFDRSxTQUFTLEVBQUMsWUFBWTtJQUN0QixZQUFTLFNBQVM7SUFDbEIscUJBQWtCO0VBQU0sZ0JBRXhCO0lBQUssU0FBUyxFQUFDO0VBQW1CLGdCQUNoQztJQUNFLFNBQVMsRUFBQyxpQkFBaUI7SUFDM0IsWUFBUyxTQUFTO0lBQ2xCLHFCQUFrQjtFQUFLLGdCQUV2QjtJQUFLLEdBQUcsRUFBQyw0QkFBNEI7SUFBQyxHQUFHLEVBQUMsTUFBTTtJQUFDLEtBQUssRUFBRTtFQUFJLEVBQUcsQ0FDM0QsZUFFTjtJQUFLLFNBQVMsRUFBQztFQUFhLGdCQUMxQjtJQUNFLFNBQVMsRUFBQyxVQUFVO0lBQ3BCLFlBQVMsU0FBUztJQUNsQixxQkFBa0I7RUFBSyxnQkFFdkI7SUFBTSxTQUFTLEVBQUM7RUFBTSxZQUFjLGNBQVMsR0FBRyxlQUNoRDtJQUFNLFNBQVMsRUFBQztFQUFNLFdBQWEsYUFDaEMsQ0FDRCxlQUVOO0lBQ0UsU0FBUyxFQUFDLE1BQU07SUFDaEIsWUFBUyxTQUFTO0lBQ2xCLHFCQUFrQjtFQUFLLEVBQ2xCLGVBQ1AsMkRBQUMsaURBQU87SUFBQyxJQUFJLEVBQUMsb0JBQW9CO0lBQUMsU0FBUyxFQUFDO0VBQVMsRUFBVyxDQUM3RCxDQUNGLENBQ0YsQ0FDRixDQUdMO0FBRVA7QUFFQSxpRUFBZWdFLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0R5QjtBQUNOO0FBQ1c7QUFDdkI7QUFFOUIsU0FBU0UsU0FBUyxHQUFHO0VBQUMsSUFBSUMsS0FBSyxHQUFHRiw2Q0FBTSxDQUFDLElBQUksQ0FBQztFQUM1QzFLLGdEQUFTLENBQUMsWUFBTTtJQUNkLElBQU02SyxNQUFNLEdBQUcvTCxRQUFRLENBQUNnTSxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQy9DRCxNQUFNLENBQUMxRSxHQUFHLEdBQUcsb0RBQW9EO0lBQ2pFMEUsTUFBTSxDQUFDRSxLQUFLLEdBQUcsSUFBSTtJQUNuQmpNLFFBQVEsQ0FBQzZLLElBQUksQ0FBQ3FCLFdBQVcsQ0FBQ0gsTUFBTSxDQUFDO0VBRW5DLENBQUMsRUFBRSxFQUFFLENBQUM7RUFLTixJQUFJL0wsUUFBUSxDQUFDc0UsVUFBVSxLQUFLLFVBQVUsRUFBRSxDQUN4QztFQUdBLG9CQUNJLHVJQUtFLDJEQUFDLG9EQUFRO0lBQ1AsT0FBTyxFQUFDLDhCQUE4QjtJQUN0QyxRQUFRLEVBQUU7RUFBSSxnQkFFZDtJQUNFLFlBQVMsU0FBUztJQUNsQixtQkFBZ0IsTUFBTTtJQUN0QixpQkFBYyxPQUFPO0lBQ3JCLDZCQUEwQixZQUFZO0lBQ3RDLHFCQUFrQixNQUFNO0lBQ3hCLEtBQUssRUFBRTtNQUFDb0MsVUFBVSxFQUFFO0lBQU07RUFBRSxnQkFFNUI7SUFBSyxTQUFTLEVBQUM7RUFBVSxnQkFDdkI7SUFDRSxTQUFTLEVBQUMsd0NBQXdDO0lBQ2xELFlBQVMsU0FBUztJQUNsQixxQkFBa0I7RUFBTSxtQkFHckIsZUFFTDtJQUNFLEdBQUcsRUFBRW9GLEtBQU07SUFDWCxTQUFTLEVBQUMscUJBQXFCO0lBQy9CLEtBQUssRUFBRTtNQUFFL0YsT0FBTyxFQUFDLE1BQU07TUFBRXdCLGNBQWMsRUFBQyxRQUFRO01BQUVFLFVBQVUsRUFBQyxRQUFRO01BQUVmLFVBQVUsRUFBQztJQUFNO0VBQUUsZ0JBdUIxRjtJQUNFLEdBQUcsRUFBQyxpRUFBaUU7SUFDckUsU0FBUyxFQUFDLElBQUk7SUFDZCxpQkFBaUIsRUFBQyxNQUFNO0lBQ3hCLFNBQVMsRUFBQyxvQkFBb0I7SUFDOUIsS0FBSyxFQUFDLE1BQU07SUFDWixLQUFLLEVBQUU7TUFBQ2YsS0FBSyxFQUFDLEtBQUs7TUFBRXdHLE1BQU0sRUFBQztJQUFHO0VBQUUsRUFDekIsQ0FDTixlQUNOO0lBQ0UsS0FBSyxFQUFFO01BQUMzSCxTQUFTLEVBQUMsT0FBTztNQUFFNEgsWUFBWSxFQUFDO0lBQUssQ0FBRTtJQUMvQyxTQUFTLEVBQUMsa0RBQWtEO0lBQzVELFlBQVMsU0FBUztJQUNsQixxQkFBa0I7RUFBTSxnQ0FHckIsQ0FDRCxDQUNGLENBQ0csQ0FDVjtBQUVSO0FBRUQsaUVBQWVQLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEdlO0FBQ0w7QUFDSjtBQUMwQjtBQUd4RCxTQUFTeEssVUFBVSxDQUFDZ0wsTUFBTSxFQUFFO0VBQzNCLGdCQUE0QmxMLGdEQUFRLENBQUM7TUFDcENrSSxLQUFLLEVBQUU7SUFDUixDQUFDLENBQUM7SUFBQTtJQUZLRSxNQUFNO0lBQUVDLFNBQVM7RUFHeEIsaUJBQWdDckksZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUF4Q08sUUFBUTtJQUFFQyxXQUFXO0VBQzVCLGlCQUEwQlIsZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTtJQUEvQmUsS0FBSztJQUFFQyxRQUFRO0VBQ3RCakIsaURBQVMsQ0FBQyxZQUFNO0lBQ2ZnQyxLQUFLLG1CQUFrQjtNQUFDQyxNQUFNLEVBQUMsS0FBSztNQUFDQyxPQUFPLEVBQUM7UUFBQ0MsTUFBTSxFQUFFLGtCQUFrQjtRQUFDLGNBQWMsRUFBRTtNQUFrQjtJQUFDLENBQUMsQ0FBQyxDQUM3R0MsSUFBSSxDQUFDLFVBQUFDLEdBQUc7TUFBQSxPQUFJQSxHQUFHLENBQUNDLElBQUksRUFBRTtJQUFBLEVBQUMsQ0FDdkJGLElBQUksQ0FDTCxVQUFDRyxNQUFNLEVBQUs7TUFDWjlCLFdBQVcsQ0FBQyxJQUFJLENBQUM7TUFDakJRLFFBQVEsQ0FBQ3NCLE1BQU0sQ0FBQztNQUNoQjtJQUNBLENBQUM7SUFDRDtJQUNBO0lBQ0E7SUFDQSxVQUFDakMsS0FBSyxFQUFLO01BQ1hHLFdBQVcsQ0FBQyxJQUFJLENBQUM7TUFDakI7SUFDQSxDQUFDLENBQ0E7RUFDRCxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQ1AsSUFBTXlILE1BQU0sR0FBR0QsaUVBQWdCLENBQUNELHFEQUFJLENBQUM7RUFFckMsSUFBTXFDLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBc0IsQ0FBSTdCLEtBQUssRUFBSztJQUN6Q0EsS0FBSyxDQUFDQyxPQUFPLEVBQUU7SUFDZkgsU0FBUyxDQUFDLFVBQUNELE1BQU07TUFBQSx1Q0FDYkEsTUFBTTtRQUNURixLQUFLLEVBQUVLLEtBQUssQ0FBQ25ELE1BQU0sQ0FBQ3FEO01BQUs7SUFBQSxDQUV4QixDQUFDO0lBQ0gzRixPQUFPLENBQUNDLEdBQUcsQ0FBQ3FGLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDO0VBQzFCLENBQUM7RUFFRCxJQUFNUSxZQUFZLEdBQUcsU0FBZkEsWUFBWSxDQUFJckUsQ0FBQyxFQUFLO0lBQzNCQSxDQUFDLENBQUN1RSxjQUFjLEVBQUU7SUFDbEJ2RSxDQUFDLENBQUNlLE1BQU0sQ0FBQ3pHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ2dLLFFBQVEsR0FBRyxJQUFJO0lBQ3BDVixNQUFNLENBQUNZLElBQUksQ0FDVixRQUFRLEVBQ1IsbUNBQW1DLEVBQ25DLFNBQVMsQ0FDUDtJQUNILElBQU1ZLGNBQWMsR0FBRztNQUN0QnpILE1BQU0sRUFBRSxNQUFNO01BQ2RDLE9BQU8sRUFBRTtRQUFFLGNBQWMsRUFBRTtNQUFtQixDQUFDO01BQy9DeUgsSUFBSSxFQUFFbEgsSUFBSSxDQUFDbUgsU0FBUyxDQUFDO1FBQUUsT0FBTyxFQUFFdkIsTUFBTSxDQUFDRixLQUFLO1FBQUUsS0FBSyxFQUFFO01BQUssQ0FBQztJQUM1RCxDQUFDO0lBQ0RuRyxLQUFLLENBQUMsYUFBYSxFQUFFMEgsY0FBYyxDQUFDLENBQ2xDdEgsSUFBSSxDQUFDLFVBQUFrSSxRQUFRO01BQUEsT0FBSUEsUUFBUSxDQUFDaEksSUFBSSxFQUFFO0lBQUEsRUFBQztFQUNwQyxDQUFDO0VBQ0QsSUFBRzZJLE1BQU0sQ0FBQ0EsTUFBTSxJQUFJLElBQUksRUFBQztJQUV4QixvQkFDQyx5SUFDQztNQUFLLEtBQUssRUFBRTtRQUFDOUgsZUFBZSxFQUFFO01BQW1DLENBQUU7TUFBQyxTQUFTLEVBQUMsaUJBQWlCO01BQUMsR0FBRyxFQUFDO0lBQVEsZ0JBQzVHO01BQUssU0FBUyxFQUFDO0lBQVcsZ0JBQ2hCO01BQUssU0FBUyxFQUFDO0lBQVMsZ0JBQ3RCO01BQUssU0FBUyxFQUFDO0lBQU0sZ0JBQ25CO01BQ0UsU0FBUyxFQUFDLGFBQWE7TUFDdkIsR0FBRyxFQUFDLDRCQUE0QjtNQUNoQyxHQUFHLEVBQUMsRUFBRTtNQUNOLEtBQUssRUFBQztJQUFLLEVBQ1gsZUFDRjtNQUFJLFNBQVMsRUFBQztJQUFLLGdCQUNqQjtNQUFJLFNBQVMsRUFBQztJQUFVLGdCQUN0QjtNQUFHLElBQUksRUFBQyxFQUFFO01BQUMsU0FBUyxFQUFDO0lBQTBCLFlBRTNDLENBQ0QsZUFDTDtNQUFJLFNBQVMsRUFBQztJQUFLLGdCQUNqQjtNQUNFLElBQUksRUFBQyxFQUFFO01BQ1AsS0FBSyxFQUFFO1FBQUV1RCxhQUFhLEVBQUU7TUFBWSxDQUFFO01BQ3RDLFNBQVMsRUFBQztJQUEwQixHQUVuQzVGLEtBQUssQ0FBQ3VKLE9BQU8sQ0FDWixDQUNELGVBQ0w7TUFBSSxTQUFTLEVBQUM7SUFBSyxnQkFDakI7TUFDRSxJQUFJLEVBQUMsaUNBQWlDO01BQ3RDLEtBQUssRUFBRTtRQUFFM0QsYUFBYSxFQUFFO01BQVksQ0FBRTtNQUN0QyxTQUFTLEVBQUM7SUFBMEIsR0FFbkM1RixLQUFLLENBQUNtSCxLQUFLLENBQ1YsQ0FDRCxlQUNMO01BQUksU0FBUyxFQUFDO0lBQUssZ0JBQ2pCO01BQ0UsSUFBSSxFQUFDLEVBQUU7TUFDUCxLQUFLLEVBQUU7UUFBRXZCLGFBQWEsRUFBRTtNQUFZLENBQUU7TUFDdEMsU0FBUyxFQUFDO0lBQTBCLEdBRW5DNUYsS0FBSyxDQUFDd0osR0FBRyxDQUNSLENBQ0QsQ0FDRixDQUNELGVBRU47TUFBSyxTQUFTLEVBQUM7SUFBTSxnQkFDbkI7TUFDRSxTQUFTLEVBQUMsMENBQTBDO01BQ3BELEtBQUssRUFBRTtRQUFFbEgsU0FBUyxFQUFFO01BQU87SUFBRSw4QkFFbkIsdUVBQU0scUJBQ2IsZUFDTDtNQUFLLFNBQVMsRUFBQztJQUF1QixnQkFDcEM7TUFDRSxTQUFTLEVBQUMsS0FBSztNQUNmLElBQUksRUFBQztJQUF3QyxFQUMxQyxlQUNMO01BQ0UsU0FBUyxFQUFDLFFBQVE7TUFDbEIsSUFBSSxFQUFDO0lBQStDLEVBQ2pELGVBQ0w7TUFDRSxTQUFTLEVBQUMsV0FBVztNQUNyQixJQUFJLEVBQUM7SUFBaUQsRUFDbkQsQ0FDRCxlQUNOO01BQU0sUUFBUSxFQUFFcUY7SUFBYSxnQkFDM0I7TUFBSSxTQUFTLEVBQUM7SUFBMkMsR0FDdEQsR0FBRyxlQUVELGVBQ0w7TUFDRSxTQUFTLEVBQUMsa0JBQWtCO01BQzVCLElBQUksRUFBQyxPQUFPO01BQ1osRUFBRSxFQUFDLE9BQU87TUFDVixJQUFJLEVBQUMsSUFBSTtNQUNULElBQUksRUFBQyxPQUFPO01BQ1osS0FBSyxFQUFFTixNQUFNLENBQUNGLEtBQU07TUFDcEIsUUFBUSxFQUFFa0Msc0JBQXVCO01BQ2pDLFFBQVE7SUFBQSxFQUNELENBQ0osQ0FDSCxlQUVOO01BQUssU0FBUyxFQUFDO0lBQU0sZ0JBQ25CO01BQUksU0FBUyxFQUFDO0lBQTZCLGNBQWMsZUFDekQ7TUFBSSxTQUFTLEVBQUM7SUFBSyxnQkFDakI7TUFBSSxTQUFTLEVBQUM7SUFBSyxnQkFDakI7TUFBRyxJQUFJLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQztJQUEwQixhQUU1QyxDQUNELGVBQ0w7TUFBSSxTQUFTLEVBQUM7SUFBSyxnQkFDakI7TUFBRyxJQUFJLEVBQUMsWUFBWTtNQUFDLFNBQVMsRUFBQztJQUEwQixZQUVyRCxDQUNELGVBQ0w7TUFBSSxTQUFTLEVBQUM7SUFBSyxnQkFDakI7TUFBRyxJQUFJLEVBQUMsWUFBWTtNQUFDLFNBQVMsRUFBQztJQUEwQixhQUVyRCxDQUNELGVBQ0w7TUFBSSxTQUFTLEVBQUM7SUFBSyxnQkFDakI7TUFBRyxJQUFJLEVBQUMsVUFBVTtNQUFDLFNBQVMsRUFBQztJQUEwQixhQUVuRCxDQUNELENBQ0YsQ0FDRCxDQUNGLGVBQ047TUFBRyxTQUFTLEVBQUM7SUFBbUMscURBRTVDLENBQ0EsQ0FDUixDQUtKO0VBRUw7QUFDQTtBQUdELGlFQUFlbEssVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVMeUI7QUFDUjtBQUNMO0FBQ1A7QUFFOUIsU0FBU2tMLFlBQVksR0FBRztFQUN2QixnQkFBMEJwTCxnREFBUSxDQUFDLElBQUksQ0FBQztJQUFBO0lBQWpDSyxLQUFLO0lBQUVDLFFBQVE7RUFDdEIsaUJBQWdDTixnREFBUSxDQUFDLEtBQUssQ0FBQztJQUFBO0lBQXhDTyxRQUFRO0lBQUVDLFdBQVc7RUFDNUIsaUJBQTBCUixnREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQS9CZSxLQUFLO0lBQUVDLFFBQVE7O0VBRXRCO0VBQ0E7RUFDQTtFQUNBakIsaURBQVMsQ0FBQyxZQUFNO0lBQ2JnQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FDMUJJLElBQUksQ0FBQyxVQUFBQyxHQUFHO01BQUEsT0FBSUEsR0FBRyxDQUFDQyxJQUFJLEVBQUU7SUFBQSxFQUFDLENBQ3ZCRixJQUFJLENBQ0gsVUFBQ0csTUFBTSxFQUFLO01BQ1I5QixXQUFXLENBQUMsSUFBSSxDQUFDO01BQ2pCUSxRQUFRLENBQUNzQixNQUFNLENBQUM7TUFDbEJRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNEO0lBQ0E7SUFDQTtJQUNBLFVBQUNqQyxLQUFLLEVBQUs7TUFDWkcsV0FBVyxDQUFDLElBQUksQ0FBQztNQUNqQkYsUUFBUSxDQUFDRCxLQUFLLENBQUM7SUFDZCxDQUFDLENBQ0Y7RUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sSUFBSUEsS0FBSyxFQUFFO0lBQ1Qsb0JBQU8sc0ZBQWVBLEtBQUssQ0FBQzZDLE9BQU8sQ0FBTztFQUM1QyxDQUFDLE1BQU0sSUFBSSxDQUFDM0MsUUFBUSxFQUFFO0lBQ3BCLG9CQUFPLHlGQUF3QjtFQUNqQyxDQUFDLE1BQU07SUFDSnVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDaEMsS0FBSyxDQUFDO0lBQ3BCLG9CQUNDLHlJQVFHO01BQUssU0FBUyxFQUFDLEVBQUU7TUFBQyxLQUFLLEVBQUU7UUFBQ3dFLFVBQVUsRUFBRSxNQUFNO1FBQUVuQyxlQUFlLEVBQUUsbUNBQW1DO1FBQUVxQixNQUFNLEVBQUMsTUFBTTtRQUFFZSxhQUFhLEVBQUU7TUFBSztJQUFFLGdCQUN2SSxzRkFDQTtNQUFLLFNBQVMsRUFBQztJQUFVLGdCQUd2QjtNQUFJLFNBQVMsRUFBQyx3Q0FBd0M7TUFBQyxZQUFTLFNBQVM7TUFBQyxxQkFBa0I7SUFBTSxrQkFBa0IsZUFDcEg7TUFBSSxTQUFTLEVBQUMsa0NBQWtDO01BQUMsWUFBUyxTQUFTO01BQUMscUJBQWtCO0lBQU0seUVBQXdELGVBQ3BKO01BQUksU0FBUyxFQUFDLGdEQUFnRDtNQUFDLFlBQVMsU0FBUztNQUFDLHFCQUFrQjtJQUFNLDBEQUEwRCxlQUVwSztNQUFLLFNBQVMsRUFBQztJQUFxQixnQkFDbEM7TUFBRyxHQUFHLEVBQUMsWUFBWTtNQUFDLElBQUksb0JBQWF6RSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNYLEVBQUU7SUFBRyxnQkFBRTtNQUFLLFlBQVMsU0FBUztNQUFDLGtCQUFlLEdBQUc7TUFBQyxpQkFBYyxPQUFPO01BQUMscUJBQWtCLE1BQU07TUFBQyxLQUFLLEVBQUU7UUFBQ3NILFVBQVUsRUFBQztNQUFNLENBQUU7TUFBQyxTQUFTLEVBQUM7SUFBTyxnQkFBQztNQUFLLEdBQUcsK0JBQXdCM0csS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDc0ssSUFBSSxDQUFHO01BQUMsR0FBRyxFQUFDLEVBQUU7TUFBQyxLQUFLLEVBQUU7SUFBRyxFQUFHLENBQU0sQ0FBSSxlQUNsUjtNQUFHLEdBQUcsRUFBQyxZQUFZO01BQUMsSUFBSSxvQkFBYXRLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ1gsRUFBRTtJQUFHLGdCQUFFO01BQUssWUFBUyxTQUFTO01BQUMsa0JBQWUsR0FBRztNQUFDLGlCQUFjLE9BQU87TUFBQyxxQkFBa0IsTUFBTTtNQUFDLFNBQVMsRUFBQztJQUFPLGdCQUFDO01BQUssR0FBRywrQkFBd0JXLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ3NLLElBQUksQ0FBRztNQUFDLEdBQUcsRUFBQyxFQUFFO01BQUMsS0FBSyxFQUFFO0lBQUcsRUFBRyxDQUFNLENBQUksZUFDdFA7TUFBRyxHQUFHLEVBQUMsWUFBWTtNQUFDLElBQUksb0JBQWF0SyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNYLEVBQUU7SUFBRyxnQkFBRTtNQUFLLFlBQVMsU0FBUztNQUFDLGtCQUFlLEdBQUc7TUFBQyxpQkFBYyxPQUFPO01BQUMscUJBQWtCLE1BQU07TUFBQyxTQUFTLEVBQUM7SUFBTyxnQkFBQztNQUFLLEdBQUcsK0JBQXdCVyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNzSyxJQUFJLENBQUc7TUFBQyxHQUFHLEVBQUMsRUFBRTtNQUFDLEtBQUssRUFBRTtJQUFHLEVBQUcsQ0FBTSxDQUFJLGVBQ3RQO01BQUcsR0FBRyxFQUFDLFlBQVk7TUFBQyxJQUFJLG9CQUFhdEssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDWCxFQUFFO0lBQUcsZ0JBQUU7TUFBSyxZQUFTLFNBQVM7TUFBQyxrQkFBZSxHQUFHO01BQUMsaUJBQWMsT0FBTztNQUFDLHFCQUFrQixNQUFNO01BQUMsU0FBUyxFQUFDO0lBQU8sZ0JBQUM7TUFBSyxHQUFHLCtCQUF3QlcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDc0ssSUFBSSxDQUFHO01BQUMsR0FBRyxFQUFDLEVBQUU7TUFBQyxLQUFLLEVBQUU7SUFBRyxFQUFHLENBQU0sQ0FBSSxlQUN0UDtNQUFHLEdBQUcsRUFBQyxZQUFZO01BQUMsSUFBSSxvQkFBYXRLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ1gsRUFBRTtJQUFHLGdCQUFFO01BQUssWUFBUyxTQUFTO01BQUMsa0JBQWUsR0FBRztNQUFDLGlCQUFjLE9BQU87TUFBQyxxQkFBa0IsTUFBTTtNQUFDLFNBQVMsRUFBQztJQUFPLGdCQUFDO01BQUssR0FBRywrQkFBd0JXLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ3NLLElBQUksQ0FBRztNQUFDLEdBQUcsRUFBQyxFQUFFO01BQUMsS0FBSyxFQUFFO0lBQUcsRUFBRyxDQUFNLENBQUksZUFDdFA7TUFBRyxHQUFHLEVBQUMsWUFBWTtNQUFDLElBQUksb0JBQWF0SyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNYLEVBQUU7SUFBRyxnQkFBRTtNQUFLLFlBQVMsU0FBUztNQUFDLGtCQUFlLEdBQUc7TUFBQyxpQkFBYyxPQUFPO01BQUMscUJBQWtCLE1BQU07TUFBQyxTQUFTLEVBQUM7SUFBTyxnQkFBQztNQUFLLEdBQUcsK0JBQXdCVyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNzSyxJQUFJLENBQUc7TUFBQyxHQUFHLEVBQUMsRUFBRTtNQUFDLEtBQUssRUFBRTtJQUFHLEVBQUcsQ0FBTSxDQUFJLGVBQ3RQO01BQUcsR0FBRyxFQUFDLFlBQVk7TUFBQyxJQUFJLG9CQUFhdEssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDWCxFQUFFO0lBQUcsZ0JBQUU7TUFBSyxZQUFTLFNBQVM7TUFBQyxrQkFBZSxHQUFHO01BQUMsaUJBQWMsT0FBTztNQUFDLHFCQUFrQixNQUFNO01BQUMsU0FBUyxFQUFDO0lBQU8sZ0JBQUM7TUFBSyxHQUFHLCtCQUF3QlcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDc0ssSUFBSSxDQUFHO01BQUMsR0FBRyxFQUFDLEVBQUU7TUFBQyxLQUFLLEVBQUU7SUFBRyxFQUFHLENBQU0sQ0FBSSxlQUN0UDtNQUFHLEdBQUcsRUFBQyxZQUFZO01BQUMsSUFBSSxvQkFBYXRLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ1gsRUFBRTtJQUFHLGdCQUFFO01BQUssWUFBUyxTQUFTO01BQUMsa0JBQWUsR0FBRztNQUFDLGlCQUFjLE9BQU87TUFBQyxxQkFBa0IsTUFBTTtNQUFDLFNBQVMsRUFBQztJQUFPLGdCQUFDO01BQUssR0FBRywrQkFBd0JXLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ3NLLElBQUksQ0FBRztNQUFDLEdBQUcsRUFBQyxFQUFFO01BQUMsS0FBSyxFQUFFO0lBQUcsRUFBRyxDQUFNLENBQUksZUFDdFA7TUFBRyxHQUFHLEVBQUMsWUFBWTtNQUFDLElBQUksb0JBQWF0SyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNYLEVBQUU7SUFBRyxnQkFBRTtNQUFLLFlBQVMsU0FBUztNQUFDLGtCQUFlLEdBQUc7TUFBQyxpQkFBYyxPQUFPO01BQUMscUJBQWtCLE1BQU07TUFBQyxTQUFTLEVBQUM7SUFBTyxnQkFBQztNQUFLLEdBQUcsK0JBQXdCVyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNzSyxJQUFJLENBQUc7TUFBQyxHQUFHLEVBQUMsRUFBRTtNQUFDLEtBQUssRUFBRTtJQUFHLEVBQUcsQ0FBTSxDQUFJLGVBQ3RQO01BQUcsR0FBRyxFQUFDLFlBQVk7TUFBQyxJQUFJLG9CQUFhdEssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDWCxFQUFFO0lBQUcsZ0JBQUU7TUFBSyxZQUFTLFNBQVM7TUFBQyxrQkFBZSxHQUFHO01BQUMsaUJBQWMsT0FBTztNQUFDLHFCQUFrQixNQUFNO01BQUMsS0FBSyxFQUFFO1FBQUNxSCxXQUFXLEVBQUM7TUFBTSxDQUFFO01BQUMsU0FBUyxFQUFDO0lBQU8sZ0JBQUM7TUFBSyxHQUFHLCtCQUF3QjFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ3NLLElBQUksQ0FBRztNQUFDLEdBQUcsRUFBQyxFQUFFO01BQUMsS0FBSyxFQUFFO0lBQUcsRUFBRyxDQUFNLENBQUksQ0FDL1EsZUFFTjtNQUFLLFNBQVMsRUFBQztJQUFxQixnQkFDbkM7TUFBRyxHQUFHLEVBQUMsWUFBWTtNQUFDLElBQUksb0JBQWF0SyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUNYLEVBQUU7SUFBRyxnQkFBRTtNQUFLLFlBQVMsU0FBUztNQUFDLGtCQUFlLEtBQUs7TUFBQyxpQkFBYyxPQUFPO01BQUMscUJBQWtCLE1BQU07TUFBQyxLQUFLLEVBQUU7UUFBQ3NILFVBQVUsRUFBQztNQUFNLENBQUU7TUFBQyxTQUFTLEVBQUM7SUFBTyxnQkFBQztNQUFLLEdBQUcsK0JBQXdCM0csS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDc0ssSUFBSSxDQUFHO01BQUMsR0FBRyxFQUFDLEVBQUU7TUFBQyxLQUFLLEVBQUU7SUFBRyxFQUFHLENBQU0sQ0FBSSxlQUNyUjtNQUFHLEdBQUcsRUFBQyxZQUFZO01BQUMsSUFBSSxvQkFBYXRLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ1gsRUFBRTtJQUFHLGdCQUFFO01BQUssWUFBUyxTQUFTO01BQUMsa0JBQWUsS0FBSztNQUFDLGlCQUFjLE9BQU87TUFBQyxxQkFBa0IsTUFBTTtNQUFDLFNBQVMsRUFBQztJQUFPLGdCQUFDO01BQUssR0FBRywrQkFBd0JXLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ3NLLElBQUksQ0FBRztNQUFDLEdBQUcsRUFBQyxFQUFFO01BQUMsS0FBSyxFQUFFO0lBQUcsRUFBRyxDQUFNLENBQUksZUFDeFA7TUFBRyxHQUFHLEVBQUMsWUFBWTtNQUFDLElBQUksb0JBQWF0SyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNYLEVBQUU7SUFBRyxnQkFBRTtNQUFLLFlBQVMsU0FBUztNQUFDLGtCQUFlLEtBQUs7TUFBQyxpQkFBYyxPQUFPO01BQUMscUJBQWtCLE1BQU07TUFBQyxTQUFTLEVBQUM7SUFBTyxnQkFBQztNQUFLLEdBQUcsK0JBQXdCVyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNzSyxJQUFJLENBQUc7TUFBQyxHQUFHLEVBQUMsRUFBRTtNQUFDLEtBQUssRUFBRTtJQUFHLEVBQUcsQ0FBTSxDQUFJLGVBQ3hQO01BQUcsR0FBRyxFQUFDLFlBQVk7TUFBQyxJQUFJLG9CQUFhdEssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDWCxFQUFFO0lBQUcsZ0JBQUU7TUFBSyxZQUFTLFNBQVM7TUFBQyxrQkFBZSxLQUFLO01BQUMsaUJBQWMsT0FBTztNQUFDLHFCQUFrQixNQUFNO01BQUMsU0FBUyxFQUFDO0lBQU8sZ0JBQUM7TUFBSyxHQUFHLCtCQUF3QlcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDc0ssSUFBSSxDQUFHO01BQUMsR0FBRyxFQUFDLEVBQUU7TUFBQyxLQUFLLEVBQUU7SUFBRyxFQUFHLENBQU0sQ0FBSSxlQUN4UDtNQUFHLEdBQUcsRUFBQyxZQUFZO01BQUMsSUFBSSxvQkFBYXRLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ1gsRUFBRTtJQUFHLGdCQUFFO01BQUssWUFBUyxTQUFTO01BQUMsa0JBQWUsS0FBSztNQUFDLGlCQUFjLE9BQU87TUFBQyxxQkFBa0IsTUFBTTtNQUFDLFNBQVMsRUFBQztJQUFPLGdCQUFDO01BQUssR0FBRywrQkFBd0JXLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ3NLLElBQUksQ0FBRztNQUFDLEdBQUcsRUFBQyxFQUFFO01BQUMsS0FBSyxFQUFFO0lBQUcsRUFBRyxDQUFNLENBQUksZUFDeFA7TUFBRyxHQUFHLEVBQUMsWUFBWTtNQUFDLElBQUksb0JBQWF0SyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNYLEVBQUU7SUFBRyxnQkFBRTtNQUFLLFlBQVMsU0FBUztNQUFDLGtCQUFlLEtBQUs7TUFBQyxpQkFBYyxPQUFPO01BQUMscUJBQWtCLE1BQU07TUFBQyxTQUFTLEVBQUM7SUFBTyxnQkFBQztNQUFLLEdBQUcsK0JBQXdCVyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNzSyxJQUFJLENBQUc7TUFBQyxHQUFHLEVBQUMsRUFBRTtNQUFDLEtBQUssRUFBRTtJQUFHLEVBQUcsQ0FBTSxDQUFJLGVBQ3hQO01BQUcsR0FBRyxFQUFDLFlBQVk7TUFBQyxJQUFJLG9CQUFhdEssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDWCxFQUFFO0lBQUcsZ0JBQUU7TUFBSyxZQUFTLFNBQVM7TUFBQyxrQkFBZSxLQUFLO01BQUMsaUJBQWMsT0FBTztNQUFDLHFCQUFrQixNQUFNO01BQUMsU0FBUyxFQUFDO0lBQU8sZ0JBQUM7TUFBSyxHQUFHLCtCQUF3QlcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDc0ssSUFBSSxDQUFHO01BQUMsR0FBRyxFQUFDLEVBQUU7TUFBQyxLQUFLLEVBQUU7SUFBRyxFQUFHLENBQU0sQ0FBSSxlQUN4UDtNQUFHLEdBQUcsRUFBQyxZQUFZO01BQUMsSUFBSSxvQkFBYXRLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ1gsRUFBRTtJQUFHLGdCQUFFO01BQUssWUFBUyxTQUFTO01BQUMsa0JBQWUsS0FBSztNQUFDLGlCQUFjLE9BQU87TUFBQyxxQkFBa0IsTUFBTTtNQUFDLFNBQVMsRUFBQztJQUFPLGdCQUFDO01BQUssR0FBRywrQkFBd0JXLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ3NLLElBQUksQ0FBRztNQUFDLEdBQUcsRUFBQyxFQUFFO01BQUMsS0FBSyxFQUFFO0lBQUcsRUFBRyxDQUFNLENBQUksZUFDeFA7TUFBRyxHQUFHLEVBQUMsWUFBWTtNQUFDLElBQUksb0JBQWF0SyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNYLEVBQUU7SUFBRyxnQkFBRTtNQUFLLFlBQVMsU0FBUztNQUFDLGtCQUFlLEtBQUs7TUFBQyxpQkFBYyxPQUFPO01BQUMscUJBQWtCLE1BQU07TUFBQyxTQUFTLEVBQUM7SUFBTyxnQkFBQztNQUFLLEdBQUcsK0JBQXdCVyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNzSyxJQUFJLENBQUc7TUFBQyxHQUFHLEVBQUMsRUFBRTtNQUFDLEtBQUssRUFBRTtJQUFHLEVBQUcsQ0FBTSxDQUFJLGVBQ3hQO01BQUcsR0FBRyxFQUFDLFlBQVk7TUFBQyxJQUFJLG9CQUFhdEssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDWCxFQUFFO0lBQUcsZ0JBQUU7TUFBSyxZQUFTLFNBQVM7TUFBQyxrQkFBZSxLQUFLO01BQUMsaUJBQWMsT0FBTztNQUFDLHFCQUFrQixNQUFNO01BQUMsS0FBSyxFQUFFO1FBQUNxSCxXQUFXLEVBQUM7TUFBTSxDQUFFO01BQUMsU0FBUyxFQUFDO0lBQU8sZ0JBQUM7TUFBSyxHQUFHLCtCQUF3QjFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ3NLLElBQUksQ0FBRztNQUFDLEdBQUcsRUFBQyxFQUFFO01BQUMsS0FBSyxFQUFFO0lBQUcsRUFBRyxDQUFNLENBQUksQ0FDalIsZUFFTjtNQUFLLFNBQVMsRUFBQztJQUFxQixnQkFDbEM7TUFBRyxHQUFHLEVBQUMsWUFBWTtNQUFDLElBQUksb0JBQWF0SyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNYLEVBQUU7SUFBRyxnQkFBRTtNQUFLLFlBQVMsU0FBUztNQUFDLGtCQUFlLE1BQU07TUFBQyxpQkFBYyxPQUFPO01BQUMscUJBQWtCLE1BQU07TUFBQyxLQUFLLEVBQUU7UUFBQ3NILFVBQVUsRUFBQztNQUFNLENBQUU7TUFBQyxTQUFTLEVBQUM7SUFBTyxnQkFBQztNQUFLLEdBQUcsK0JBQXdCM0csS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDc0ssSUFBSSxDQUFHO01BQUMsR0FBRyxFQUFDLEVBQUU7TUFBQyxLQUFLLEVBQUU7SUFBRyxFQUFHLENBQU0sQ0FBSSxlQUNyUjtNQUFHLEdBQUcsRUFBQyxZQUFZO01BQUMsSUFBSSxvQkFBYXRLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQ1gsRUFBRTtJQUFHLGdCQUFFO01BQUssWUFBUyxTQUFTO01BQUMsa0JBQWUsTUFBTTtNQUFDLGlCQUFjLE9BQU87TUFBQyxxQkFBa0IsTUFBTTtNQUFDLFNBQVMsRUFBQztJQUFPLGdCQUFDO01BQUssR0FBRywrQkFBd0JXLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQ3NLLElBQUksQ0FBRztNQUFDLEdBQUcsRUFBQyxFQUFFO01BQUMsS0FBSyxFQUFFO0lBQUcsRUFBRyxDQUFNLENBQUksZUFDM1A7TUFBRyxHQUFHLEVBQUMsWUFBWTtNQUFDLElBQUksb0JBQWF0SyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUNYLEVBQUU7SUFBRyxnQkFBRTtNQUFLLFlBQVMsU0FBUztNQUFDLGtCQUFlLE1BQU07TUFBQyxpQkFBYyxPQUFPO01BQUMscUJBQWtCLE1BQU07TUFBQyxTQUFTLEVBQUM7SUFBTyxnQkFBQztNQUFLLEdBQUcsK0JBQXdCVyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUNzSyxJQUFJLENBQUc7TUFBQyxHQUFHLEVBQUMsRUFBRTtNQUFDLEtBQUssRUFBRTtJQUFHLEVBQUcsQ0FBTSxDQUFJLGVBQzNQO01BQUcsR0FBRyxFQUFDLFlBQVk7TUFBQyxJQUFJLG9CQUFhdEssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDWCxFQUFFO0lBQUcsZ0JBQUU7TUFBSyxZQUFTLFNBQVM7TUFBQyxrQkFBZSxNQUFNO01BQUMsaUJBQWMsT0FBTztNQUFDLHFCQUFrQixNQUFNO01BQUMsU0FBUyxFQUFDO0lBQU8sZ0JBQUM7TUFBSyxHQUFHLCtCQUF3QlcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDc0ssSUFBSSxDQUFHO01BQUMsR0FBRyxFQUFDLEVBQUU7TUFBQyxLQUFLLEVBQUU7SUFBRyxFQUFHLENBQU0sQ0FBSSxlQUMzUDtNQUFHLEdBQUcsRUFBQyxZQUFZO01BQUMsSUFBSSxvQkFBYXRLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQ1gsRUFBRTtJQUFHLGdCQUFFO01BQUssWUFBUyxTQUFTO01BQUMsa0JBQWUsTUFBTTtNQUFDLGlCQUFjLE9BQU87TUFBQyxxQkFBa0IsTUFBTTtNQUFDLFNBQVMsRUFBQztJQUFPLGdCQUFDO01BQUssR0FBRywrQkFBd0JXLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQ3NLLElBQUksQ0FBRztNQUFDLEdBQUcsRUFBQyxFQUFFO01BQUMsS0FBSyxFQUFFO0lBQUcsRUFBRyxDQUFNLENBQUksZUFDM1A7TUFBRyxHQUFHLEVBQUMsWUFBWTtNQUFDLElBQUksb0JBQWF0SyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUNYLEVBQUU7SUFBRyxnQkFBRTtNQUFLLFlBQVMsU0FBUztNQUFDLGtCQUFlLE1BQU07TUFBQyxpQkFBYyxPQUFPO01BQUMscUJBQWtCLE1BQU07TUFBQyxTQUFTLEVBQUM7SUFBTyxnQkFBQztNQUFLLEdBQUcsK0JBQXdCVyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUNzSyxJQUFJLENBQUc7TUFBQyxHQUFHLEVBQUMsRUFBRTtNQUFDLEtBQUssRUFBRTtJQUFHLEVBQUcsQ0FBTSxDQUFJLGVBQzNQO01BQUcsR0FBRyxFQUFDLFlBQVk7TUFBQyxJQUFJLG9CQUFhdEssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDWCxFQUFFO0lBQUcsZ0JBQUU7TUFBSyxZQUFTLFNBQVM7TUFBQyxrQkFBZSxNQUFNO01BQUMsaUJBQWMsT0FBTztNQUFDLHFCQUFrQixNQUFNO01BQUMsU0FBUyxFQUFDO0lBQU8sZ0JBQUM7TUFBSyxHQUFHLCtCQUF3QlcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDc0ssSUFBSSxDQUFHO01BQUMsR0FBRyxFQUFDLEVBQUU7TUFBQyxLQUFLLEVBQUU7SUFBRyxFQUFHLENBQU0sQ0FBSSxlQUMzUDtNQUFHLEdBQUcsRUFBQyxZQUFZO01BQUMsSUFBSSxvQkFBYXRLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQ1gsRUFBRTtJQUFHLGdCQUFFO01BQUssWUFBUyxTQUFTO01BQUMsa0JBQWUsTUFBTTtNQUFDLGlCQUFjLE9BQU87TUFBQyxxQkFBa0IsTUFBTTtNQUFDLFNBQVMsRUFBQztJQUFPLGdCQUFDO01BQUssR0FBRywrQkFBd0JXLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQ3NLLElBQUksQ0FBRztNQUFDLEdBQUcsRUFBQyxFQUFFO01BQUMsS0FBSyxFQUFFO0lBQUcsRUFBRyxDQUFNLENBQUksZUFDM1A7TUFBRyxHQUFHLEVBQUMsWUFBWTtNQUFDLElBQUksb0JBQWF0SyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUNYLEVBQUU7SUFBRyxnQkFBRTtNQUFLLFlBQVMsU0FBUztNQUFDLGtCQUFlLE1BQU07TUFBQyxpQkFBYyxPQUFPO01BQUMscUJBQWtCLE1BQU07TUFBQyxTQUFTLEVBQUM7SUFBTyxnQkFBQztNQUFLLEdBQUcsK0JBQXdCVyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUNzSyxJQUFJLENBQUc7TUFBQyxHQUFHLEVBQUMsRUFBRTtNQUFDLEtBQUssRUFBRTtJQUFHLEVBQUcsQ0FBTSxDQUFJLGVBQzNQO01BQUcsR0FBRyxFQUFDLFlBQVk7TUFBQyxJQUFJLG9CQUFhdEssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDWCxFQUFFO0lBQUcsZ0JBQUU7TUFBSyxZQUFTLFNBQVM7TUFBQyxrQkFBZSxNQUFNO01BQUMsaUJBQWMsT0FBTztNQUFDLHFCQUFrQixNQUFNO01BQUMsS0FBSyxFQUFFO1FBQUNxSCxXQUFXLEVBQUM7TUFBTSxDQUFFO01BQUMsU0FBUyxFQUFDO0lBQU8sZ0JBQUM7TUFBSyxHQUFHLCtCQUF3QjFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQ3NLLElBQUksQ0FBRztNQUFDLEdBQUcsRUFBQyxFQUFFO01BQUMsS0FBSyxFQUFFO0lBQUcsRUFBRyxDQUFNLENBQUksQ0FFcFIsZUFJTjtNQUFJLFNBQVMsRUFBQyxvRUFBb0U7TUFBQyxLQUFLLEVBQUU7UUFBQ0osWUFBWSxFQUFDO01BQUssQ0FBRTtNQUFDLFlBQVMsU0FBUztNQUFDLHFCQUFrQjtJQUFNLDJDQUFtQyxDQUUxTCxDQUVGLENBQ0EsQ0FHTjtFQUVMO0FBQ0Q7QUFFQSxpRUFBZUcsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9HRjtBQUMwQjtBQUMvQjtBQUNzQjtBQUNaO0FBQ0M7QUFFL0IsU0FBU0UsTUFBTSxHQUFJO0VBRWpCLG9CQUNDLHVJQVNHO0lBQUssU0FBUyxFQUFDLEVBQUU7SUFBQyxLQUFLLEVBQUU7TUFBQy9GLFVBQVUsRUFBRSxNQUFNO01BQUVuQyxlQUFlLEVBQUUsbUNBQW1DO01BQUVxQixNQUFNLEVBQUMsTUFBTTtNQUFFZSxhQUFhLEVBQUU7SUFBSztFQUFFLGdCQUN6STtJQUFLLFlBQVMsU0FBUztJQUFDLG1CQUFnQixNQUFNO0lBQUEsaUJBQWMsT0FBTztJQUFBLDZCQUEwQixZQUFZO0lBQUEscUJBQWtCO0VBQU0sZ0JBQy9IO0lBQUssU0FBUyxFQUFDLFNBQVM7SUFBQyxLQUFLLEVBQUU7TUFBQ2YsTUFBTSxFQUFDO0lBQU87RUFBRSxnQkFDL0M7SUFBSSxTQUFTLEVBQUMsd0NBQXdDO0lBQUMsWUFBUyxTQUFTO0lBQUMscUJBQWtCO0VBQU0sWUFBWSxlQUM5RztJQUFJLFNBQVMsRUFBQyxnQ0FBZ0M7SUFBQyxZQUFTLFNBQVM7SUFBQyxxQkFBa0I7RUFBTSxtQ0FBbUMsZUFFN0g7SUFBSyxTQUFTLEVBQUM7RUFBUSxnQkFDckIsMkRBQUMsZ0RBQU07SUFDUCxhQUFhLEVBQUUsQ0FBRTtJQUNqQixjQUFjLEVBQUUsSUFBSztJQUNyQixTQUFTLEVBQUMsU0FBUztJQUNuQixZQUFTLFNBQVM7SUFBQyxxQkFBa0I7RUFBTSxnQkFFekMsMkRBQUMscURBQVc7SUFBQyxTQUFTLEVBQUM7RUFBYSxnQkFDbEM7SUFBSyxTQUFTLEVBQUM7RUFBa0IsZ0JBQy9CO0lBQUssU0FBUyxFQUFDO0VBQVMsZ0JBRXBCO0lBQUssU0FBUyxFQUFDO0VBQVcsZ0JBQ3hCO0lBQUssS0FBSyxFQUFFO01BQUNELEtBQUssRUFBRSxNQUFNO01BQUVDLE1BQU0sRUFBRSxNQUFNO01BQUVRLFNBQVMsRUFBRTtJQUFPLENBQUU7SUFBQSxHQUFHLEVBQUMseU5BQXlOO0lBQUMsR0FBRyxFQUFDO0VBQUUsRUFBRyxDQUNuUyxlQUVOLG9GQUNBO0lBQUksU0FBUyxFQUFDO0VBQW9CLFlBQVksZUFDOUM7SUFBSSxTQUFTLEVBQUM7RUFBMEIsYUFBYSxlQUNyRDtJQUFJLFNBQVMsRUFBQztFQUEwQixvQkFBaUIsZUFDekQ7SUFBSSxTQUFTLEVBQUM7RUFBMEIsd0JBQWtCLGVBQzFEO0lBQUksU0FBUyxFQUFDO0VBQTBCLHVCQUF1QixlQUMvRDtJQUFJLFNBQVMsRUFBQztFQUEwQiwwQkFBMEIsZUFDbEU7SUFBSSxTQUFTLEVBQUM7RUFBMEIsOEJBQThCLGVBQ3RFO0lBQUksU0FBUyxFQUFDO0VBQTBCLGtDQUErQixDQUNsRSxlQUNMO0lBQUssRUFBRSxFQUFDLE9BQU87SUFBQyxLQUFLLEVBQUU7TUFBQ1AsUUFBUSxFQUFDLFVBQVU7TUFBRUssR0FBRyxFQUFDLEtBQUs7TUFBRUQsSUFBSSxFQUFDLEtBQUs7TUFBRU4sS0FBSyxFQUFDO0lBQU0sQ0FBRTtJQUFDLEdBQUcsRUFBQyxzREFBc0Q7SUFBQyxHQUFHLEVBQUM7RUFBRSxFQUFHLENBRXJKLENBQ0YsQ0FDTSxlQUVkLDJEQUFDLHFEQUFXO0lBQUMsU0FBUyxFQUFDO0VBQWEsZ0JBQ2xDO0lBQUssU0FBUyxFQUFDO0VBQWtCLGdCQUMvQjtJQUFLLFNBQVMsRUFBQztFQUFTLGdCQUN4QjtJQUFLLEVBQUUsRUFBQyxRQUFRO0lBQUMsS0FBSyxFQUFFO01BQUNFLFFBQVEsRUFBQyxVQUFVO01BQUVLLEdBQUcsRUFBQyxLQUFLO01BQUVELElBQUksRUFBQyxJQUFJO01BQUVOLEtBQUssRUFBQztJQUFNLENBQUU7SUFBQyxHQUFHLEVBQUMsc0RBQXNEO0lBQUMsR0FBRyxFQUFDO0VBQUUsRUFBRyxlQUNuSjtJQUFLLFNBQVMsRUFBQztFQUFXLGdCQUN4QjtJQUFLLEtBQUssRUFBRTtNQUFDQSxLQUFLLEVBQUUsTUFBTTtNQUFFQyxNQUFNLEVBQUUsTUFBTTtNQUFFUSxTQUFTLEVBQUU7SUFBTyxDQUFFO0lBQUEsR0FBRyxFQUFDLG1LQUFtSztJQUFDLEdBQUcsRUFBQztFQUFFLEVBQUcsQ0FDN08sZUFFTixvRkFDQTtJQUFJLFNBQVMsRUFBQztFQUFvQixTQUFTLGVBQzNDO0lBQUksU0FBUyxFQUFDO0VBQTBCLGFBQWEsZUFDckQ7SUFBSSxTQUFTLEVBQUM7RUFBMEIsb0JBQWlCLGVBQ3pEO0lBQUksU0FBUyxFQUFDO0VBQTBCLHdCQUFrQixlQUMxRDtJQUFJLFNBQVMsRUFBQztFQUEwQix1QkFBdUIsZUFDL0Q7SUFBSSxTQUFTLEVBQUM7RUFBMEIsMEJBQTBCLGVBQ2xFO0lBQUksU0FBUyxFQUFDO0VBQTBCLDhCQUE4QixlQUN0RTtJQUFJLFNBQVMsRUFBQztFQUEwQixrQ0FBK0IsQ0FDbEUsQ0FFSCxDQUNGLENBQ00sQ0FDUCxDQUtQLENBQ0YsQ0FDRixDQUNBLENBRUo7QUFFTDtBQUdELGlFQUFlcUcsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0ZtQjtBQUNEO0FBQ0U7QUFDckI7QUFDc0I7QUFDWTtBQUN2QjtBQUUvQixJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBUSxPQUFXO0VBQUE7RUFDdkIsb0JBQ0UsdUlBRUU7SUFDRSxLQUFLLEVBQUU7TUFDTHBJLGVBQWUsRUFBRSxtQ0FBbUM7TUFDcERxQixNQUFNLEVBQUU7SUFDVixDQUFFO0lBQ0YsU0FBUyxFQUFDLFVBQVU7SUFDcEIsR0FBRyxFQUFDO0VBQVUsZ0JBTWQ7SUFBSyxTQUFTLEVBQUMsRUFBRTtJQUFDLEdBQUcsRUFBQyxlQUFlO0lBQUMsS0FBSyxFQUFFO01BQUVBLE1BQU0sRUFBRTtJQUFPO0VBQUUsZ0JBQzlEO0lBQ0UsS0FBSyxFQUFFO01BQUVELEtBQUssRUFBRTtJQUFPLENBQUU7SUFDekIsWUFBUyxTQUFTO0lBQ2xCLG1CQUFnQixNQUFNO0lBQ3RCLGlCQUFjLE9BQU87SUFDckIscUJBQWtCLE1BQU07SUFDeEIsNkJBQTBCO0VBQVksZ0JBRXRDO0lBQUssU0FBUyxFQUFDO0VBQVEsZ0JBQ3JCLDJEQUFDLDBEQUFPO0lBQ04sS0FBSyxFQUFFO01BQ0xBLEtBQUssRUFBRSxNQUFNO01BQ2JpSCxRQUFRLEVBQUUsUUFBUTtNQUNsQjdHLE9BQU8sRUFBRSxNQUFNO01BQ2YwQixVQUFVLEVBQUUsUUFBUTtNQUNwQjdCLE1BQU0sRUFBRTtJQUNWLENBQUU7SUFDRixRQUFRLEVBQUU7RUFBTSxnQkFFaEI7SUFDRSxTQUFTLEVBQUMseUNBQXlDO0lBQ25ELEVBQUUsRUFBQztFQUFVLHNCQUdWLGVBQ0w7SUFBSSxTQUFTLEVBQUM7RUFBdUMsVUFBTyxlQUM1RDtJQUFJLFNBQVMsRUFBQztFQUFrRCxrQkFFM0QsZUFDTDtJQUFJLFNBQVMsRUFBQztFQUFnRCxVQUFPLGVBQ3JFO0lBQUksU0FBUyxFQUFDO0VBQXlDLGFBQWEsZUFDcEU7SUFBSSxTQUFTLEVBQUM7RUFBa0MsVUFBTyxlQUN2RDtJQUFJLFNBQVMsRUFBQztFQUFrRCxrQkFFM0QsZUFDTDtJQUFJLFNBQVMsRUFBQztFQUF5QyxVQUFPLENBQ3RELGVBQ1YsMkRBQUMsMERBQU87SUFDTixLQUFLLEVBQUU7TUFDTEQsS0FBSyxFQUFFLE1BQU07TUFDYmlILFFBQVEsRUFBRSxRQUFRO01BQ2xCN0csT0FBTyxFQUFFLE1BQU07TUFDZjBCLFVBQVUsRUFBRSxRQUFRO01BQ3BCN0IsTUFBTSxFQUFFO0lBQ1YsQ0FBRTtJQUNGLFNBQVMsRUFBRSxPQUFRO0lBQ25CLFFBQVEsRUFBRTtFQUFNLGdCQUVoQjtJQUFJLFNBQVMsRUFBQztFQUEwQyxXQUFXLGVBQ25FO0lBQUksU0FBUyxFQUFDO0VBQWtDLFVBQU8sZUFDdkQ7SUFBSSxTQUFTLEVBQUM7RUFBa0QsWUFFM0QsZUFDTDtJQUFJLFNBQVMsRUFBQztFQUEwQyxVQUFPLGVBQy9EO0lBQUksU0FBUyxFQUFDO0VBQTJDLGFBRXBELGVBQ0w7SUFBSSxTQUFTLEVBQUM7RUFBa0MsVUFBTyxlQUN2RDtJQUFJLFNBQVMsRUFBQztFQUEyQyxtQkFFcEQsZUFDTDtJQUFJLFNBQVMsRUFBQztFQUF5QyxVQUFPLENBQ3RELGVBQ1YsMkRBQUMsMERBQU87SUFDTixLQUFLLEVBQUU7TUFDTEQsS0FBSyxFQUFFLE1BQU07TUFDYmlILFFBQVEsRUFBRSxRQUFRO01BQ2xCN0csT0FBTyxFQUFFLE1BQU07TUFDZjBCLFVBQVUsRUFBRSxRQUFRO01BQ3BCN0IsTUFBTSxFQUFFO0lBQ1YsQ0FBRTtJQUNGLFFBQVEsRUFBRTtFQUFNLGdCQUVoQjtJQUFJLFNBQVMsRUFBQztFQUEyQyxzQkFFcEQsZUFDTDtJQUFJLFNBQVMsRUFBQztFQUFrQyxVQUFPLGVBQ3ZEO0lBQUksU0FBUyxFQUFDO0VBQWtELGNBRTNELGVBQ0w7SUFBSSxTQUFTLEVBQUM7RUFBMEMsVUFBTyxlQUMvRDtJQUFJLFNBQVMsRUFBQztFQUEwQyxjQUVuRCxlQUNMO0lBQUksU0FBUyxFQUFDO0VBQWtDLFVBQU8sZUFDdkQ7SUFBSSxTQUFTLEVBQUM7RUFBbUQsaUJBRTVELGVBQ0w7SUFBSSxTQUFTLEVBQUM7RUFBeUMsVUFBTyxDQUN0RCxDQUNOLENBQ0YsQ0FDRixDQUNGLENBRUw7QUFFUCxDQUFDO0FBRUQsaUVBQWUrRyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUhTO0FBQ2U7QUFDQTtBQUNJO0FBQ0Y7QUFDQTtBQUNGO0FBQ0Y7QUFDRDtBQUNLO0FBRWpELFNBQVNsTixXQUFXLEdBQUc7RUFDdEIsU0FBUzBOLE9BQU8sQ0FBRUMsSUFBSSxFQUFFQyxFQUFFLEVBQzFCO0lBQ0EsSUFBSSxDQUFFRCxJQUFJLEVBQ1Q7SUFFRCxJQUFJQyxFQUFFLEVBQ047TUFDQyxJQUFJQyxPQUFPLEdBQUcsQ0FBQztNQUNmLElBQUloRCxLQUFLLEdBQUdpRCxXQUFXLENBQUUsWUFBVztRQUNwQ0QsT0FBTyxJQUFJLEVBQUUsR0FBR0QsRUFBRTtRQUNsQixJQUFJQyxPQUFPLElBQUksQ0FBQyxFQUNoQjtVQUNDRSxhQUFhLENBQUNsRCxLQUFLLENBQUM7VUFDcEJnRCxPQUFPLEdBQUcsQ0FBQztVQUNYRixJQUFJLENBQUM1RyxLQUFLLENBQUNULE9BQU8sR0FBRyxNQUFNO1VBQzNCcUgsSUFBSSxDQUFDNUcsS0FBSyxDQUFDaUgsVUFBVSxHQUFHLFFBQVE7UUFDakM7UUFDQUwsSUFBSSxDQUFDNUcsS0FBSyxDQUFDOEcsT0FBTyxHQUFHQSxPQUFPO1FBQzVCRixJQUFJLENBQUM1RyxLQUFLLENBQUNrSCxNQUFNLEdBQUcsZ0JBQWdCLEdBQUdKLE9BQU8sR0FBRyxHQUFHLEdBQUcsR0FBRztNQUMxRCxDQUFDLEVBQUUsRUFBRSxDQUFFO0lBQ1IsQ0FBQyxNQUVEO01BQ0NGLElBQUksQ0FBQzVHLEtBQUssQ0FBQzhHLE9BQU8sR0FBRyxDQUFDO01BQ3RCRixJQUFJLENBQUM1RyxLQUFLLENBQUNrSCxNQUFNLEdBQUcsa0JBQWtCO01BQ3RDTixJQUFJLENBQUM1RyxLQUFLLENBQUNULE9BQU8sR0FBRyxNQUFNO01BQzNCcUgsSUFBSSxDQUFDNUcsS0FBSyxDQUFDaUgsVUFBVSxHQUFHLFFBQVE7SUFDakM7RUFDQTtFQUNBLGlCQUFleE0sNERBQVMsRUFBRTtJQUFsQk0sRUFBRSxjQUFGQSxFQUFFO0VBQ1YsZ0JBQTBCSixnREFBUSxDQUFDLElBQUksQ0FBQztJQUFBO0lBQWpDSyxLQUFLO0lBQUVDLFFBQVE7RUFDdEIsaUJBQWdDTixnREFBUSxDQUFDLEtBQUssQ0FBQztJQUFBO0lBQXhDTyxRQUFRO0lBQUVDLFdBQVc7RUFDNUIsaUJBQXNDUixnREFBUSxDQUFDLEtBQUssQ0FBQztJQUFBO0lBQTlDUyxXQUFXO0lBQUVDLGNBQWM7RUFDbEMsaUJBQWdEVixnREFBUSxDQUFDLEtBQUssQ0FBQztJQUFBO0lBQXhEVyxnQkFBZ0I7SUFBRUMsbUJBQW1CO0VBQzVDLGlCQUFrQ1osZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUExQ2EsVUFBVTtJQUFFQyxXQUFXO0VBQzlCLGtCQUEwQmQsZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTtJQUEvQmUsS0FBSztJQUFFQyxRQUFRO0VBQ3RCLGtCQUE0QmhCLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBakNpQixNQUFNO0lBQUVDLFNBQVM7RUFDeEIsa0JBQTRCbEIsZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTtJQUFqQ21CLE1BQU07SUFBRUMsU0FBUztFQUN4QixrQkFBMEJwQixnREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQS9CcUIsS0FBSztJQUFFQyxRQUFRO0VBQ3RCLGtCQUE0QnRCLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBakN1QixNQUFNO0lBQUVDLFNBQVM7RUFDeEIsa0JBQThCeEIsZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTtJQUFuQzRFLE9BQU87SUFBRTRILFVBQVU7RUFDMUIsa0JBQWdDeE0sZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTtJQUFyQ3lCLFFBQVE7SUFBRUMsV0FBVztFQUM1QixJQUFHdEIsRUFBRSxFQUFDO0lBQ0xMLGlEQUFTLENBQUMsWUFBTTtNQUNmZ0MsS0FBSyx3QkFBaUIzQixFQUFFLEdBQUc7UUFBQzRCLE1BQU0sRUFBQyxLQUFLO1FBQUNDLE9BQU8sRUFBQztVQUFDQyxNQUFNLEVBQUUsa0JBQWtCO1VBQUMsY0FBYyxFQUFFO1FBQWtCO01BQUMsQ0FBQyxDQUFDLENBQ2pIQyxJQUFJLENBQUMsVUFBQUMsR0FBRztRQUFBLE9BQUlBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO01BQUEsRUFBQyxDQUN2QkYsSUFBSSxDQUNKLFVBQUNHLE1BQU0sRUFBSztRQUNaOUIsV0FBVyxDQUFDLElBQUksQ0FBQztRQUNqQlEsUUFBUSxDQUFDc0IsTUFBTSxDQUFDO01BQ2hCLENBQUM7TUFDRDtNQUNBO01BQ0E7TUFDQSxVQUFDakMsS0FBSyxFQUFLO1FBQ1hHLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDakJGLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDO01BQ2YsQ0FBQyxDQUNEO01BRUQwQixLQUFLLDRCQUFxQjNCLEVBQUUsR0FBRztRQUFDNEIsTUFBTSxFQUFDLEtBQUs7UUFBQ0MsT0FBTyxFQUFDO1VBQUNDLE1BQU0sRUFBRSxrQkFBa0I7VUFBQyxjQUFjLEVBQUU7UUFBa0I7TUFBQyxDQUFDLENBQUMsQ0FDckhDLElBQUksQ0FBQyxVQUFBQyxHQUFHO1FBQUEsT0FBSUEsR0FBRyxDQUFDQyxJQUFJLEVBQUU7TUFBQSxFQUFDLENBQ3ZCRixJQUFJLENBQ0osVUFBQ3NLLFNBQVMsRUFBSztRQUNmLElBQUlsSyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDZ0ssU0FBUyxDQUFDO1FBQ25DL0wsY0FBYyxDQUFDLElBQUksQ0FBQztRQUNwQlEsU0FBUyxDQUFDc0IsSUFBSSxDQUFDQyxLQUFLLENBQUNnSyxTQUFTLENBQUMsQ0FBQztRQUNoQyxJQUFJbEssT0FBTyxJQUFJLElBQUksSUFBSUEsT0FBTyxDQUFDSSxNQUFNLElBQUksQ0FBQyxFQUFDO1VBQzFDN0IsV0FBVyxDQUFDLElBQUksQ0FBQztVQUNqQjtRQUNEO1FBQ0EsSUFBR3lCLE9BQU8sRUFBQztVQUNWLEtBQUksSUFBSUcsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSCxPQUFPLENBQUNJLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUM7WUFDdEM7WUFDQTtZQUNBLElBQUdILE9BQU8sQ0FBQ0csQ0FBQyxDQUFDLENBQUN2QixNQUFNLEVBQ25CQyxTQUFTLENBQUNtQixPQUFPLENBQUNHLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUdILE9BQU8sQ0FBQ0csQ0FBQyxDQUFDLENBQUNnSyxLQUFLLEVBQ2xCcEwsUUFBUSxDQUFDaUIsT0FBTyxDQUFDRyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFHSCxPQUFPLENBQUNHLENBQUMsQ0FBQyxDQUFDRyxVQUFVLEVBQ3ZCckIsU0FBUyxDQUFDZSxPQUFPLENBQUNHLENBQUMsQ0FBQyxDQUFDO1lBQ3RCO1lBQ0E7WUFDQSxJQUFHSCxPQUFPLENBQUNJLE1BQU0sR0FBQyxDQUFDLElBQUlELENBQUMsRUFBQztjQUN4QjVCLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDbEI7VUFFRDtRQUNEO01BQ0EsQ0FBQztNQUNEO01BQ0E7TUFDQTtNQUNBLFVBQUNULEtBQUssRUFBSztRQUNYRyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ2pCRixRQUFRLENBQUNELEtBQUssQ0FBQztRQUNmeUMsT0FBTyxDQUFDQyxHQUFHLENBQUMxQyxLQUFLLENBQUM7TUFDbEIsQ0FBQyxDQUNEO01BRUQwQixLQUFLLHFCQUFjM0IsRUFBRSxHQUFHO1FBQUM0QixNQUFNLEVBQUMsS0FBSztRQUFDQyxPQUFPLEVBQUM7VUFBQ0MsTUFBTSxFQUFFLGtCQUFrQjtVQUFDLGNBQWMsRUFBRTtRQUFrQjtNQUFDLENBQUMsQ0FBQyxDQUM5R0MsSUFBSSxDQUFDLFVBQUFDLEdBQUc7UUFBQSxPQUFJQSxHQUFHLENBQUNDLElBQUksRUFBRTtNQUFBLEVBQUMsQ0FDdkJGLElBQUksQ0FDSixVQUFDRyxNQUFNLEVBQUs7UUFDWixJQUFJVSxJQUFJLEdBQUdSLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSVcsSUFBSSxHQUFHVCxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUdVLElBQUksSUFBSUMsSUFBSSxFQUFDO1VBQ2Z2QixXQUFXLENBQUMsQ0FBQ3NCLElBQUksRUFBRUMsSUFBSSxDQUFDLENBQUM7VUFDekIsSUFBR3hCLFFBQVEsRUFBQztZQUNYcUIsT0FBTyxDQUFDQyxHQUFHLENBQUN0QixRQUFRLENBQUM7WUFDckJiLG1CQUFtQixDQUFDLElBQUksQ0FBQztVQUMxQjtRQUNEO01BQ0EsQ0FBQztNQUNEO01BQ0E7TUFDQTtNQUNBLFVBQUNQLEtBQUssRUFBSztRQUNYRyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ2pCRixRQUFRLENBQUNELEtBQUssQ0FBQztRQUNmeUMsT0FBTyxDQUFDQyxHQUFHLENBQUMxQyxLQUFLLENBQUM7TUFDbEIsQ0FBQyxDQUNEO0lBQ0YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNQO0VBRUEsSUFBSUEsS0FBSyxFQUFFO0lBQ1Qsb0JBQU8sNENBQWFBLEtBQUssQ0FBQzZDLE9BQU8sQ0FBTztFQUN4QyxDQUFDLE1BQU0sSUFBSyxDQUFDM0MsUUFBUSxJQUFJLENBQUNNLFVBQVUsSUFBSSxDQUFDRixnQkFBZ0IsSUFBSzlCLFFBQVEsQ0FBQ3NFLFVBQVUsS0FBSyxVQUFVLEVBQUU7SUFDbkcsb0JBQ0MsdURBQ0M7TUFBSyxFQUFFLEVBQUMsYUFBYTtNQUFDLEtBQUssRUFBQyxLQUFLO01BQUMsTUFBTSxFQUFDLEtBQUs7TUFBQyxPQUFPLEVBQUM7SUFBYSxnQkFDbkU7TUFBVSxTQUFTLEVBQUMsNEJBQTRCO01BQUMsTUFBTSxFQUFDLG1CQUFtQjtNQUFDLFdBQVcsRUFBQyxJQUFJO01BQUMsSUFBSSxFQUFDO0lBQU0sRUFBWSxlQUNwSDtNQUFVLFNBQVMsRUFBQyw0QkFBNEI7TUFBQyxNQUFNLEVBQUMsbUJBQW1CO01BQUMsV0FBVyxFQUFDLElBQUk7TUFBQyxJQUFJLEVBQUM7SUFBTSxFQUFZLGVBQ3BIO01BQVUsU0FBUyxFQUFDLGdDQUFnQztNQUFDLE1BQU0sRUFBQyxtQkFBbUI7TUFBQyxXQUFXLEVBQUMsSUFBSTtNQUFDLElBQUksRUFBQztJQUFNLEVBQVksZUFDeEg7TUFBVSxTQUFTLEVBQUMsZ0NBQWdDO01BQUMsTUFBTSxFQUFDLG1CQUFtQjtNQUFDLFdBQVcsRUFBQyxJQUFJO01BQUMsSUFBSSxFQUFDO0lBQU0sRUFBWSxDQUNuSCxDQUNKO0VBRUgsQ0FBQyxNQUFNO0lBQ1I2SSxPQUFPLENBQUNuTixRQUFRLENBQUM4TixhQUFhLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BELG9CQUNDLHVEQUNBLG9CQUFDLGdEQUFNLE9BQVUsZUFHakIsb0JBQUMsd0RBQWM7TUFBQyxJQUFJLEVBQUU1TDtJQUFNLEVBQWtCLGVBQzlDLG9CQUFDLHdEQUFjO01BQUMsSUFBSSxFQUFFQTtJQUFNLEVBQWtCLGVBQzlDLG9CQUFDLDBEQUFnQjtNQUFDLElBQUksRUFBRVE7SUFBTyxFQUFvQixlQUNuRCxvQkFBQyx5REFBZTtNQUFDLEtBQUssRUFBRUYsS0FBTTtNQUFDLEtBQUssRUFBRU47SUFBTSxFQUFtQixlQUMvRCxvQkFBQyx5REFBZTtNQUFDLE1BQU0sRUFBRUU7SUFBTyxFQUFtQixlQUNuRCxvQkFBQyx3REFBYztNQUFDLElBQUksRUFBRUYsS0FBTTtNQUFDLEVBQUUsRUFBRVU7SUFBUyxFQUFrQixlQUM1RCxvQkFBQyw2REFBVTtNQUFDLE1BQU0sRUFBRTtJQUFLLEVBQWMsQ0FDcEM7RUFFTDtBQUNEO0FBQ0Q7QUFDQSxpRUFBZW5ELFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxS0E7QUFDZ0I7QUFDRjtBQUNUO0FBQ3lCO0FBQ047QUFDcUI7QUFDWjtBQUNaO0FBRS9DLFNBQVN3TixlQUFlLENBQUM3SyxNQUFNLEVBQUU7RUFDL0Isc0JBQXdCdEQsc0RBQWMsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUF0Q2tJLElBQUk7SUFBRUMsT0FBTztFQUNwQixJQUFJQyxVQUFVLEdBQUcsRUFBRTtFQUNuQmpELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDOUIsTUFBTSxDQUFDQSxNQUFNLENBQUM7RUFDMUJBLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDOEMsT0FBTyxDQUFDLFVBQUFDLE9BQU8sRUFBSTtJQUMvQixJQUFJSCxJQUFJLEdBQUc7TUFBRXFDLEdBQUcsZ0NBQXlCbEMsT0FBTyxDQUFDbUMsS0FBSztJQUFFLENBQUM7SUFDekRKLFVBQVUsQ0FBQ1osSUFBSSxDQUFDdEIsSUFBSSxDQUFDO0VBQ3ZCLENBQUMsQ0FBQztFQUVGLElBQUdrQyxVQUFVLENBQUNwRCxNQUFNLEdBQUMsQ0FBQyxFQUFDO0lBQ3ZCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2dELFVBQVUsQ0FBQztJQUNyQixvQkFDRSx5SUFDRSw0REFBQyxxREFBUTtNQUFDLE9BQU8sRUFBQyw4QkFBOEI7TUFBQyxRQUFRLEVBQUU7SUFBSSxnQkFDN0Q7TUFBSyxTQUFTLEVBQUM7SUFBUyxnQkFFeEI7TUFBSyxLQUFLLEVBQUU7UUFBQ3ZCLEtBQUssRUFBQyxNQUFNO1FBQUNDLE1BQU0sRUFBQyxNQUFNO1FBQUVHLE9BQU8sRUFBQyxNQUFNO1FBQUN3QixjQUFjLEVBQUM7TUFBUTtJQUFFLGdCQUUvRTtNQUFLLFNBQVMsRUFBQyxxQkFBcUI7TUFBQyxLQUFLLEVBQUU7UUFBQzNCLE1BQU0sRUFBQyxLQUFLO1FBQUNELEtBQUssRUFBQyxLQUFLO1FBQUVlLFVBQVUsRUFBQztNQUFNO0lBQUUsZ0JBQ3hGO01BQUssU0FBUyxFQUFDLHFCQUFxQjtNQUFDLEtBQUs7UUFBR0wsVUFBVSxFQUFDLFNBQVM7UUFBRW1CLE9BQU8sRUFBQztNQUFHLGNBQVUsR0FBRztJQUFFLEdBQzVGcEYsTUFBTSxDQUFDQSxNQUFNLENBQUMsQ0FBQyxDQUFDLGdCQUNYO01BQ0UsU0FBUyxFQUFDLEdBQUc7TUFDYixLQUFLLEVBQUU7UUFDTHVELEtBQUssRUFBRSxNQUFNO1FBQ2JDLE1BQU0sRUFBRSxNQUFNO1FBQ2RRLFNBQVMsRUFBRSxPQUFPO1FBQ2xCb0IsT0FBTyxFQUFDO01BQ1YsQ0FBRTtNQUNGLEdBQUcsRUFBRSxzQkFBc0IsR0FBR3BGLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDa0YsS0FBTTtNQUNyRCxHQUFHLEVBQUM7SUFBRSxFQUNOLGdCQUNDO01BQUssS0FBSyxFQUFFO1FBQUN2QixPQUFPLEVBQUMsTUFBTTtRQUFFMEIsVUFBVSxFQUFDLFFBQVE7UUFBRUYsY0FBYyxFQUFDLFFBQVE7UUFBRTVCLEtBQUssRUFBQyxNQUFNO1FBQUVDLE1BQU0sRUFBQztNQUFNO0lBQUUsZ0JBQUM7TUFBSyxLQUFLLEVBQUU7UUFBQ0QsS0FBSyxFQUFDO01BQUssQ0FBRTtNQUFDLEdBQUcsRUFBRSx5QkFBMEI7TUFBQyxHQUFHLEVBQUM7SUFBRSxFQUFFLENBQU8sQ0FDdEwsZUFFTjtNQUFLLFNBQVMsRUFBQztJQUErQyxnQkFFMUQ7TUFBSyxTQUFTLEVBQUMscUJBQXFCO01BQUMsS0FBSyxFQUFFO1FBQUNVLFVBQVUsRUFBQyxTQUFTO1FBQUVtQixPQUFPLEVBQUM7TUFBRztJQUFFLEdBQzdFcEYsTUFBTSxDQUFDQSxNQUFNLENBQUMsQ0FBQyxDQUFDLGdCQUNmO01BQ0UsU0FBUyxFQUFDLEVBQUU7TUFDWixLQUFLLEVBQUU7UUFDTHVELEtBQUssRUFBRSxNQUFNO1FBQ2JDLE1BQU0sRUFBRSxNQUFNO1FBQ2RRLFNBQVMsRUFBRSxPQUFPO1FBQ2xCb0IsT0FBTyxFQUFDO01BQ1YsQ0FBRTtNQUNGLEdBQUcsRUFBRSxzQkFBc0IsR0FBR3BGLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDa0YsS0FBTTtNQUNyRCxHQUFHLEVBQUM7SUFBRSxFQUNOLGdCQUNDO01BQUssS0FBSyxFQUFFO1FBQUN2QixPQUFPLEVBQUMsTUFBTTtRQUFFMEIsVUFBVSxFQUFDLFFBQVE7UUFBRUYsY0FBYyxFQUFDLFFBQVE7UUFBRTVCLEtBQUssRUFBQyxNQUFNO1FBQUVDLE1BQU0sRUFBQztNQUFNO0lBQUUsZ0JBQUM7TUFBSyxLQUFLLEVBQUU7UUFBQ0QsS0FBSyxFQUFDO01BQUssQ0FBRTtNQUFDLEdBQUcsRUFBRSx5QkFBMEI7TUFBQyxHQUFHLEVBQUM7SUFBRSxFQUFFLENBQU8sQ0FDcEwsZUFDTjtNQUFLLFNBQVMsRUFBQyxxQkFBcUI7TUFBQyxLQUFLLEVBQUU7UUFBQ1UsVUFBVSxFQUFDLFNBQVM7UUFBRW1CLE9BQU8sRUFBQztNQUFHO0lBQUUsR0FDN0VwRixNQUFNLENBQUNBLE1BQU0sQ0FBQyxDQUFDLENBQUMsZ0JBQ2I7TUFDRSxTQUFTLEVBQUMsRUFBRTtNQUNaLEtBQUssRUFBRTtRQUNMdUQsS0FBSyxFQUFFLE1BQU07UUFDYkMsTUFBTSxFQUFFLE1BQU07UUFDZFEsU0FBUyxFQUFFLE9BQU87UUFDbEJvQixPQUFPLEVBQUM7TUFDVixDQUFFO01BQ0YsR0FBRyxFQUFFLHNCQUFzQixHQUFHcEYsTUFBTSxDQUFDQSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNrRixLQUFNO01BQ3JELEdBQUcsRUFBQztJQUFFLEVBQ04sZ0JBQ0M7TUFBSyxLQUFLLEVBQUU7UUFBQ3ZCLE9BQU8sRUFBQyxNQUFNO1FBQUUwQixVQUFVLEVBQUMsUUFBUTtRQUFFRixjQUFjLEVBQUMsUUFBUTtRQUFFNUIsS0FBSyxFQUFDLE1BQU07UUFBRUMsTUFBTSxFQUFDO01BQU07SUFBRSxnQkFBQztNQUFLLEtBQUssRUFBRTtRQUFDRCxLQUFLLEVBQUM7TUFBSyxDQUFFO01BQUMsR0FBRyxFQUFFLHlCQUEwQjtNQUFDLEdBQUcsRUFBQztJQUFFLEVBQUUsQ0FBTyxDQUNwTCxDQUNOLGVBRU47TUFBSyxTQUFTLEVBQUMsK0JBQStCO01BQUMsS0FBSyxFQUFFO1FBQUNVLFVBQVUsRUFBQyxTQUFTO1FBQUVtQixPQUFPLEVBQUM7TUFBRztJQUFFLEdBQ3pGcEYsTUFBTSxDQUFDQSxNQUFNLENBQUMsQ0FBQyxDQUFDLGdCQUNUO01BQ0UsU0FBUyxFQUFDLEVBQUU7TUFDWixLQUFLLEVBQUU7UUFDTHVELEtBQUssRUFBRSxNQUFNO1FBQ2JDLE1BQU0sRUFBRSxNQUFNO1FBQ2RRLFNBQVMsRUFBRSxPQUFPO1FBQ2xCb0IsT0FBTyxFQUFDO01BQ1YsQ0FBRTtNQUNGLEdBQUcsRUFBRSxzQkFBc0IsR0FBR3BGLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDa0YsS0FBTTtNQUNyRCxHQUFHLEVBQUM7SUFBRSxFQUNOLGdCQUNDO01BQUssS0FBSyxFQUFFO1FBQUN2QixPQUFPLEVBQUMsTUFBTTtRQUFFMEIsVUFBVSxFQUFDLFFBQVE7UUFBRUYsY0FBYyxFQUFDLFFBQVE7UUFBRTVCLEtBQUssRUFBQyxNQUFNO1FBQUVDLE1BQU0sRUFBQztNQUFNO0lBQUUsZ0JBQUM7TUFBSyxLQUFLLEVBQUU7UUFBQ0QsS0FBSyxFQUFDO01BQUssQ0FBRTtNQUFDLEdBQUcsRUFBRSx5QkFBMEI7TUFBQyxHQUFHLEVBQUM7SUFBRSxFQUFFLENBQU8sQ0FDeEwsQ0FDRixDQUNGLGVBQ0o7TUFBSyxTQUFTLEVBQUMsMkNBQTJDO01BQUMsS0FBSyxFQUFFO1FBQUNFLFFBQVEsRUFBRSxVQUFVO1FBQUU2QixNQUFNLEVBQUMsTUFBTTtRQUFFL0IsS0FBSyxFQUFDO01BQU07SUFBRSxnQkFDcEg7TUFBUSxPQUFPLEVBQUU7UUFBQSxPQUFNc0IsT0FBTyxDQUFDLElBQUksQ0FBQztNQUFBLENBQUM7TUFBQyxTQUFTLEVBQUM7SUFBNEMsZUFFbkYsQ0FDTCxlQUtOLDREQUFDLG1FQUFRO01BQ1AsSUFBSSxFQUFFRCxJQUFLO01BQ1gsS0FBSyxFQUFFO1FBQUEsT0FBTUMsT0FBTyxDQUFDLEtBQUssQ0FBQztNQUFBLENBQUM7TUFDNUIsT0FBTyxFQUFFLENBQUNGLHNGQUFVLENBQUU7TUFDdEIsTUFBTSxFQUFFRztJQUFXLEVBQ25CLENBQ0UsQ0FDRyxDQUNWO0VBRVA7QUFDRjtBQUVBLGlFQUFlK0YsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SEw7QUFDZTtBQUNWO0FBRzlCLFNBQVNELGVBQWUsT0FBaUI7RUFBQSxJQUFmeEssS0FBSyxRQUFMQSxLQUFLO0lBQUVvRixLQUFLLFFBQUxBLEtBQUs7RUFDckMzRCxPQUFPLENBQUNDLEdBQUcsQ0FBQzFCLEtBQUssQ0FBQztFQUNsQixJQUFHb0YsS0FBSyxDQUFDaUcsS0FBSyxFQUFDO0lBQ2Qsb0JBQ0MsdUlBQ0E7TUFBSyxLQUFLLEVBQUU7UUFBQ3RKLGVBQWUsRUFBRSxtQ0FBbUM7UUFBRXFCLE1BQU0sRUFBRTtNQUFRLENBQUU7TUFBQyxTQUFTLEVBQUM7SUFBWSxnQkFDNUc7TUFBSyxTQUFTLEVBQUMsRUFBRTtNQUFBLEtBQUssRUFBRTtRQUFFQSxNQUFNLEVBQUU7TUFBUTtJQUFFLGdCQUMzQztNQUFLLFNBQVMsRUFBQztJQUFVLGdCQUN4QjtNQUFLLFNBQVMsRUFBQztJQUFrQixnQkFFakM7TUFBSyxTQUFTLEVBQUM7SUFBb0IsZ0JBRWxDO01BQUssU0FBUyxFQUFDO0lBQVksZ0JBQzFCO01BQUksU0FBUyxFQUFDO0lBQXNCLFdBQVcsZUFDL0M7TUFBSyxTQUFTLEVBQUMscUNBQXFDO01BQUMsS0FBSyxFQUFFO1FBQUVrQyxhQUFhLEVBQUU7TUFBVyxDQUFFO01BQUMsdUJBQXVCLEVBQUU7UUFBQ3JELE1BQU0sRUFBQ21ELEtBQUssQ0FBQ2lHO01BQUs7SUFBRSxFQUFPLENBQzNJLGVBRU47TUFBSyxTQUFTLEVBQUMsWUFBWTtNQUFDLEtBQUssRUFBRTtRQUFDakksTUFBTSxFQUFFLE9BQU87UUFBRUQsS0FBSyxFQUFDO01BQU87SUFBRSxHQUNsRW5ELEtBQUssQ0FBQzhFLEtBQUssZ0JBQUk7TUFBSyxTQUFTLEVBQUMsVUFBVTtNQUFDLEtBQUssRUFBRTtRQUFFM0IsS0FBSyxFQUFFLE1BQU07UUFBRUMsTUFBTSxFQUFFLE1BQU07UUFBRVEsU0FBUyxFQUFFO01BQVEsQ0FBRTtNQUFDLEdBQUcsRUFBRSxzQkFBc0IsR0FBRzVELEtBQUssQ0FBQzhFLEtBQU07TUFBQyxHQUFHLEVBQUM7SUFBRSxFQUFFLGdCQUFLO01BQUssS0FBSyxFQUFFO1FBQUN2QixPQUFPLEVBQUMsTUFBTTtRQUFFMEIsVUFBVSxFQUFDLFFBQVE7UUFBRUYsY0FBYyxFQUFDLFFBQVE7UUFBRTVCLEtBQUssRUFBQyxNQUFNO1FBQUVDLE1BQU0sRUFBQztNQUFNO0lBQUUsZ0JBQUM7TUFBSyxLQUFLLEVBQUU7UUFBQ0QsS0FBSyxFQUFDO01BQUssQ0FBRTtNQUFDLEdBQUcsRUFBRSx5QkFBMEI7TUFBQyxHQUFHLEVBQUM7SUFBRSxFQUFFLENBQU8sQ0FDOVUsQ0FDRCxDQUNBLENBRUQsQ0FDRCxDQUNBLENBS0g7RUFFTDtBQUFDO0FBRUYsaUVBQWVxSCxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0w7QUFDZTtBQUNWO0FBRTlCLFNBQVNlLGNBQWMsQ0FBQy9GLElBQUksRUFBRTtFQUM1QixvQkFDQyx1SUFHQTtJQUFLLFNBQVMsRUFBQyxhQUFhO0lBQUMsR0FBRyxFQUFDO0VBQVUsZ0JBRTNDO0lBQU8sV0FBVztJQUFDLFFBQVE7SUFBQyxLQUFLO0lBQUMsSUFBSTtFQUFBLGdCQUNyQztJQUFRLEdBQUcsRUFBQywyQkFBMkI7SUFBQyxJQUFJLEVBQUM7RUFBVyxFQUFVLENBQzFELGVBRVI7SUFBSyxTQUFTLEVBQUM7RUFBYSxnQkFDM0I7SUFBSyxTQUFTLEVBQUM7RUFBUyxnQkFDdkI7SUFBSyxTQUFTLEVBQUM7RUFBbUIsZ0JBRWxDO0lBQUssU0FBUyxFQUFDLGlCQUFpQjtJQUFDLFlBQVM7RUFBUyxnQkFDbEQ7SUFBRyxJQUFJLEVBQUMsR0FBRztJQUFDLFNBQVMsRUFBQztFQUFFLGdCQUN2QjtJQUFLLEdBQUcsRUFBQyw0QkFBNEI7SUFBQyxHQUFHLEVBQUMsTUFBTTtJQUFDLEtBQUssRUFBRSxHQUFJO0lBQUMsU0FBUyxFQUFDO0VBQVEsRUFBRyxDQUMvRSxDQUNDLGVBRU47SUFBSyxTQUFTLEVBQUM7RUFBVyxnQkFFMUI7SUFBSyxLQUFLLEVBQUU7TUFBQ0YsYUFBYSxFQUFFO0lBQVcsQ0FBRTtJQUFDLFNBQVMsRUFBQyxnQkFBZ0I7SUFBQyxZQUFTO0VBQVMsZ0JBQ3RGO0lBQUksU0FBUyxFQUFDO0VBQWdDLEdBQUVFLElBQUksQ0FBQ0EsSUFBSSxDQUFDZ0csTUFBTSxDQUFNLGVBQ3RFO0lBQUksU0FBUyxFQUFDO0VBQStCLEdBQUVoRyxJQUFJLENBQUNBLElBQUksQ0FBQ0csT0FBTyxDQUFDQSxPQUFPLENBQU0sRUFDN0VILElBQUksQ0FBQ0EsSUFBSSxDQUFDaUcsTUFBTSxnQkFBRztJQUFHLFNBQVMsRUFBQztFQUErQix3QkFBbUJqRyxJQUFJLENBQUNBLElBQUksQ0FBQ2lHLE1BQU0sQ0FBQy9GLFNBQVMsQ0FBSyxnQkFBSTtJQUFHLFNBQVMsRUFBQztFQUErQiwwQkFBeUIsRUFDMUxGLElBQUksQ0FBQ0EsSUFBSSxDQUFDSSxLQUFLLGdCQUFHO0lBQUcsU0FBUyxFQUFDO0VBQW9CLHlCQUFpQkosSUFBSSxDQUFDQSxJQUFJLENBQUNJLEtBQUssQ0FBSyxnQkFBRztJQUFHLFNBQVMsRUFBQztFQUFvQiwyQkFBdUIsZUFJcEosMkRBQUMsa0RBQUk7SUFBQyxLQUFLLEVBQUU7TUFBQzlDLGNBQWMsRUFBRSxNQUFNO01BQUVDLEtBQUssRUFBRTtJQUFPLENBQUU7SUFBQyxFQUFFLDhCQUF1QnlDLElBQUksQ0FBQ0EsSUFBSSxDQUFDSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM5RyxFQUFFLGNBQUl5RyxJQUFJLENBQUNBLElBQUksQ0FBQ0ssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxTQUFTO0VBQUcsZ0JBQUM7SUFBRyxLQUFLLEVBQUU7TUFBQ3RDLE9BQU8sRUFBRSxRQUFRO01BQUUrQixhQUFhLEVBQUU7SUFBVyxDQUFFO0lBQUMsU0FBUyxFQUFDO0VBQXFCLEdBQUVFLElBQUksQ0FBQ0EsSUFBSSxDQUFDSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUNBLFNBQVMsQ0FBSyxDQUFPLEVBQ3hSTCxJQUFJLENBQUNBLElBQUksQ0FBQ0ssU0FBUyxDQUFDLENBQUMsQ0FBQyxpQkFBSSx1SUFBRTtJQUFHLEtBQUssRUFBRTtNQUFDdEMsT0FBTyxFQUFFO0lBQVEsQ0FBRTtJQUFDLFNBQVMsRUFBQztFQUFxQixhQUFZLG9CQUFDLDJEQUFDLGtEQUFJO0lBQUMsRUFBRSw4QkFBdUJpQyxJQUFJLENBQUNBLElBQUksQ0FBQ0ssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDOUcsRUFBRSxjQUFJeUcsSUFBSSxDQUFDQSxJQUFJLENBQUNLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsU0FBUztFQUFHLGdCQUFFO0lBQUcsU0FBUyxFQUFDLHFCQUFxQjtJQUFDLEtBQUssRUFBRTtNQUFDdEMsT0FBTyxFQUFFLFFBQVE7TUFBRStCLGFBQWEsRUFBRSxXQUFXO01BQUV4QyxjQUFjLEVBQUUsTUFBTTtNQUFFQyxLQUFLLEVBQUU7SUFBTztFQUFFLEdBQUV5QyxJQUFJLENBQUNBLElBQUksQ0FBQ0ssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxTQUFTLENBQUssQ0FBTyxDQUFHLENBQ3ZYLENBQ0EsZUFDTjtJQUFLLFNBQVMsRUFBQyxrQkFBa0I7SUFBQyxZQUFTO0VBQVMsZ0JBQ25EO0lBQUksS0FBSyxFQUFFO01BQUVQLGFBQWEsRUFBRTtJQUFXLENBQUU7SUFBQyxTQUFTLEVBQUM7RUFBdUMsR0FBRUUsSUFBSSxDQUFDQSxJQUFJLENBQUM3QixPQUFPLENBQU0sQ0FDL0csZUFFTjtJQUFLLFNBQVMsRUFBQyxpQkFBaUI7SUFBQyxZQUFTO0VBQVMsZ0JBQ2xEO0lBQUcsU0FBUyxFQUFDO0VBQXVCLGtCQUFjLGVBQ2xEO0lBQUssU0FBUyxFQUFDO0VBQVksRUFBUSxDQUM5QixDQUVBLENBQ0QsQ0FDRCxDQUNELENBRUg7QUFFTDtBQUVELGlFQUFlNEgsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REo7QUFDZTtBQUNWO0FBRzlCLFNBQVNiLGNBQWMsT0FBYTtFQUFBLElBQVhsRixJQUFJLFFBQUpBLElBQUk7SUFBRU0sRUFBRSxRQUFGQSxFQUFFO0VBQ2hDLElBQUdBLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQztJQUNSLElBQUdBLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLEVBQ3BCQSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSztJQUNqQixJQUFHQSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxFQUNwQkEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUs7SUFFakIsb0JBQ0MsdUlBRUU7TUFBSyxLQUFLLEVBQUU7UUFBQy9ELGVBQWUsRUFBRTtNQUFtQyxDQUFFO01BQUMsU0FBUyxFQUFDO0lBQWlCLGdCQUM5RjtNQUFLLFNBQVMsRUFBQyw0QkFBNEI7TUFBQyxLQUFLLEVBQUU7UUFBQ0MsU0FBUyxFQUFDO01BQUc7SUFBRSxnQkFDbkU7TUFBSSxTQUFTLEVBQUM7SUFBbUIsc0JBQW1CLGVBQ3BEO01BQUssU0FBUyxFQUFDLGtCQUFrQjtNQUFDLHVCQUF1QixFQUFFO1FBQUNDLE1BQU0sRUFBQ3VELElBQUksQ0FBQ3REO01BQVU7SUFBRSxFQUFPLENBQ3JGLENBQ0QsZUFHUDtNQUFLLEtBQUssRUFBRTtRQUFDSCxlQUFlLEVBQUU7TUFBaUMsQ0FBRTtNQUFDLFNBQVMsRUFBQztJQUFnQixnQkFDM0Y7TUFBSyxTQUFTLEVBQUM7SUFBaUIsZ0JBQy9CO01BQUssU0FBUyxFQUFDO0lBQXNCLEdBRW5DK0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFDUjtNQUFLLFNBQVMsRUFBQyxpQkFBaUI7TUFBQyxPQUFPLEVBQUUsbUJBQUk7UUFBQ3ZJLFFBQVEsQ0FBQ3dJLElBQUksR0FBRyxVQUFVLEdBQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQy9HLEVBQUU7TUFBQSxDQUFFO01BQUMsS0FBSyxFQUFFO1FBQUMyTSxNQUFNLEVBQUU7TUFBUztJQUFFLGdCQUNuSDtNQUFJLFNBQVMsRUFBQztJQUE0Qiw0QkFBc0IsZUFDaEU7TUFBSSxTQUFTLEVBQUM7SUFBVyxHQUFFNUYsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDMEYsTUFBTSxDQUFNLGVBQ2hEO01BQUksU0FBUyxFQUFDO0lBQWlCLEdBQUUxRixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNuQyxPQUFPLENBQU0sQ0FDbEQsRUFFTm1DLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQUk7TUFBSyxTQUFTLEVBQUMsaUJBQWlCO01BQUMsT0FBTyxFQUFFLG1CQUFJO1FBQUN2SSxRQUFRLENBQUN3SSxJQUFJLEdBQUcsVUFBVSxHQUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMvRyxFQUFFO01BQUEsQ0FBRTtNQUFDLEtBQUssRUFBRTtRQUFDMk0sTUFBTSxFQUFFO01BQVM7SUFBRSxnQkFDL0g7TUFBSSxTQUFTLEVBQUM7SUFBMkIsb0JBQW9CLGVBQzdEO01BQUksU0FBUyxFQUFDO0lBQVUsR0FBRTVGLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzBGLE1BQU0sQ0FBTSxlQUMvQztNQUFJLFNBQVMsRUFBQztJQUFnQixHQUFFMUYsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDbkMsT0FBTyxDQUFNLENBQ2pELENBR0YsQ0FFRCxDQUNELENBSUo7RUFFTDtBQUNEO0FBRUEsaUVBQWUrRyxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JESjtBQUNlO0FBQ1Y7QUFHOUIsU0FBU0gsZ0JBQWdCLENBQUMvRSxJQUFJLEVBQUU7RUFDL0IvRCxPQUFPLENBQUNDLEdBQUcsQ0FBQzhELElBQUksQ0FBQztFQUNqQixJQUFHQSxJQUFJLENBQUNsRSxNQUFNLEdBQUcsQ0FBQyxFQUFDO0lBQ2xCLG9CQUNDLHVJQUNDO01BQUssU0FBUyxFQUFDLHVCQUF1QjtNQUFDLEtBQUssRUFBRTtRQUFDOEIsTUFBTSxFQUFDLE9BQU87UUFBRUQsS0FBSyxFQUFDO01BQU07SUFBRSxnQkFDNUU7TUFBSyxHQUFHLEVBQUUsc0JBQXNCLEdBQUdxQyxJQUFJLENBQUNBLElBQUksQ0FBQ1YsS0FBTTtNQUFDLEdBQUcsRUFBQyxFQUFFO01BQUMsS0FBSyxFQUFFO1FBQUUzQixLQUFLLEVBQUUsTUFBTTtRQUFFQyxNQUFNLEVBQUUsTUFBTTtRQUFFUSxTQUFTLEVBQUU7TUFBUTtJQUFFLEVBQUcsQ0FDdEgsQ0FDSjtFQUVMO0FBQ0E7QUFDRCxpRUFBZTJHLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQk47QUFDZTtBQUNWO0FBRzlCLFNBQVNELGNBQWMsQ0FBQzlFLElBQUksRUFBRTtFQUM3QixJQUFHQSxJQUFJLENBQUNBLElBQUksQ0FBQ21HLE9BQU8sSUFBSW5HLElBQUksQ0FBQ0EsSUFBSSxDQUFDb0csSUFBSSxJQUFJcEcsSUFBSSxDQUFDQSxJQUFJLENBQUNxRyxNQUFNLEVBQUM7SUFDMUQsb0JBQ0MsdUlBQ0M7TUFBSyxLQUFLLEVBQUU7UUFBQzlKLGVBQWUsRUFBRSxtQ0FBbUM7UUFBRXlCLFNBQVMsRUFBRTtNQUFRLENBQUU7TUFBQyxTQUFTLEVBQUM7SUFBZ0IsZ0JBQ2xIO01BQUssU0FBUyxFQUFDO0lBQVMsZ0JBQ3ZCO01BQUssU0FBUyxFQUFDO0lBQTRCLEdBQ3pDZ0MsSUFBSSxDQUFDQSxJQUFJLENBQUNtRyxPQUFPLGlCQUNsQjtNQUFLLFNBQVMsRUFBQyx5QkFBeUI7TUFBQyxLQUFLLEVBQUU7UUFBQzNKLFNBQVMsRUFBQyxNQUFNO1FBQUVvRSxXQUFXLEVBQUMsTUFBTTtRQUFFQyxVQUFVLEVBQUM7TUFBTTtJQUFFLGdCQUN6RztNQUFJLFNBQVMsRUFBQztJQUFPLGlCQUFpQixlQUN0QztNQUFLLEtBQUssRUFBRTtRQUFDbEQsS0FBSyxFQUFDO01BQU0sQ0FBRTtNQUFDLFNBQVMsRUFBQyxrQ0FBa0M7TUFBQSx1QkFBdUIsRUFBRTtRQUFDbEIsTUFBTSxFQUFDdUQsSUFBSSxDQUFDQSxJQUFJLENBQUNtRztNQUFPO0lBQUUsRUFBTyxDQUM5SCxFQUdMbkcsSUFBSSxDQUFDQSxJQUFJLENBQUNvRyxJQUFJLGlCQUNmO01BQUssU0FBUyxFQUFDLHlCQUF5QjtNQUFDLEtBQUssRUFBRTtRQUFDNUosU0FBUyxFQUFDLE1BQU07UUFBRW9FLFdBQVcsRUFBQyxNQUFNO1FBQUVDLFVBQVUsRUFBQztNQUFNO0lBQUUsZ0JBQ3pHO01BQUksU0FBUyxFQUFDO0lBQU8sZ0JBQWEsZUFDbEM7TUFBSyxLQUFLLEVBQUU7UUFBQ2xELEtBQUssRUFBQztNQUFNLENBQUU7TUFBQyxTQUFTLEVBQUMsbUVBQW1FO01BQUMsdUJBQXVCLEVBQUU7UUFBQ2xCLE1BQU0sRUFBQ3VELElBQUksQ0FBQ0EsSUFBSSxDQUFDb0c7TUFBSTtJQUFFLEVBQU8sQ0FDN0osRUFHTHBHLElBQUksQ0FBQ0EsSUFBSSxDQUFDcUcsTUFBTSxpQkFDakI7TUFBSyxTQUFTLEVBQUMseUJBQXlCO01BQUUsS0FBSyxFQUFFO1FBQUM3SixTQUFTLEVBQUMsTUFBTTtRQUFFb0UsV0FBVyxFQUFDLE1BQU07UUFBRUMsVUFBVSxFQUFDO01BQU07SUFBRSxnQkFDMUc7TUFBSSxTQUFTLEVBQUM7SUFBTyxnQkFBZ0IsZUFDckM7TUFBSyxLQUFLLEVBQUU7UUFBQ2xELEtBQUssRUFBQztNQUFNLENBQUU7TUFBQyxTQUFTLEVBQUMsbUVBQW1FO01BQUMsdUJBQXVCLEVBQUU7UUFBQ2xCLE1BQU0sRUFBQ3VELElBQUksQ0FBQ0EsSUFBSSxDQUFDcUc7TUFBTTtJQUFFLEVBQU8sQ0FDL0osQ0FHRCxDQUNELENBQ0QsQ0FDSjtFQUVMO0FBQ0E7QUFFRCxpRUFBZXZCLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNrQjtBQUNmO0FBQ0k7QUFDQTtBQUNNO0FBQ0s7QUFDRTtBQUNMO0FBQ0M7QUFDZjtBQUNFO0FBR2hDLFNBQVNuTixXQUFXLEdBQUc7RUFDdEIsaUJBQWlCc0IsNERBQVMsRUFBRTtJQUFwQnVOLElBQUksY0FBSkEsSUFBSTtFQUNaLGtCQUFpQnZOLDREQUFTLEVBQUU7SUFBcEJxSSxJQUFJLGVBQUpBLElBQUk7RUFDWixrQkFBaUJySSw0REFBUyxFQUFFO0lBQXBCd04sSUFBSSxlQUFKQSxJQUFJO0VBQ1osZ0JBQTBCdE4sZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQTtJQUFqQ0ssS0FBSztJQUFFQyxRQUFRO0VBQ3RCLGlCQUFnQ04sZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUF4Q08sUUFBUTtJQUFFQyxXQUFXO0VBQzVCLGlCQUFzQ1IsZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUE5Q1MsV0FBVztJQUFFQyxjQUFjO0VBQ2xDLGlCQUFnRFYsZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUF4RFcsZ0JBQWdCO0lBQUVDLG1CQUFtQjtFQUM1QyxpQkFBa0NaLGdEQUFRLENBQUMsS0FBSyxDQUFDO0lBQUE7SUFBMUNhLFVBQVU7SUFBRUMsV0FBVztFQUM5QixrQkFBMEJkLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBL0JlLEtBQUs7SUFBRUMsUUFBUTtFQUN0QixrQkFBNEJoQixnREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQWpDaUIsTUFBTTtJQUFFQyxTQUFTO0VBQ3hCLGtCQUE0QmxCLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBakNtQixNQUFNO0lBQUVDLFNBQVM7RUFDeEIsa0JBQTBCcEIsZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTtJQUEvQnFCLEtBQUs7SUFBRUMsUUFBUTtFQUN0QixrQkFBNEJ0QixnREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQWpDdUIsTUFBTTtJQUFFQyxTQUFTO0VBQ3hCLGtCQUE4QnhCLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBbkM0RSxPQUFPO0lBQUU0SCxVQUFVO0VBQzFCLGtCQUFnQ3hNLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBckN5QixRQUFRO0lBQUVDLFdBQVc7RUFDNUIsa0JBQXdCMUIsZ0RBQVEsQ0FBQyxRQUFRLENBQUM7SUFBQTtJQUFuQ3VOLElBQUk7SUFBRUMsT0FBTztFQUNwQixrQkFBNEJ4TixnREFBUSxDQUFDLEtBQUssQ0FBQztJQUFBO0lBQXBDeU4sTUFBTTtJQUFFQyxTQUFTO0VBRXZCLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFVLENBQUdDLEtBQUssRUFBSTtJQUMzQixJQUFHQSxLQUFLLElBQUksSUFBSSxFQUFFO01BQ2pCSixPQUFPLENBQUMsU0FBUyxDQUFDO01BQ2xCRSxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQ2hCO0VBQ0QsQ0FBQztFQUNEM04saURBQVMsQ0FBQyxZQUFNO0lBRWZnQyxLQUFLLHlCQUFrQnNMLElBQUksY0FBSUMsSUFBSSxHQUFHO01BQUN0TCxNQUFNLEVBQUMsS0FBSztNQUFDQyxPQUFPLEVBQUM7UUFBQ0MsTUFBTSxFQUFFLGtCQUFrQjtRQUFDLGNBQWMsRUFBRTtNQUFrQjtJQUFDLENBQUMsQ0FBQyxDQUM1SEMsSUFBSSxDQUFDLFVBQUFDLEdBQUc7TUFBQSxPQUFJQSxHQUFHLENBQUNDLElBQUksRUFBRTtJQUFBLEVBQUMsQ0FDdkJGLElBQUksQ0FDSixVQUFDRyxNQUFNLEVBQUs7TUFDWnRCLFFBQVEsQ0FBQ3NCLE1BQU0sQ0FBQztNQUNoQlEsT0FBTyxDQUFDQyxHQUFHLENBQUNULE1BQU0sQ0FBQztNQUNuQjlCLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDakIsQ0FBQztJQUNEO0lBQ0E7SUFDQTtJQUNBLFVBQUNILEtBQUssRUFBSztNQUNYRyxXQUFXLENBQUMsSUFBSSxDQUFDO01BQ2pCRixRQUFRLENBQUNELEtBQUssQ0FBQztNQUNmeUMsT0FBTyxDQUFDQyxHQUFHLENBQUMxQyxLQUFLLENBQUM7SUFDbEIsQ0FBQyxDQUNEO0VBQ0YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUlQLElBQUlBLEtBQUssRUFBRTtJQUNULG9CQUFPLDRDQUFhQSxLQUFLLENBQUM2QyxPQUFPLENBQU87RUFDeEMsQ0FBQyxNQUFNLElBQUksQ0FBQzNDLFFBQVEsSUFBSTFCLFFBQVEsQ0FBQ3NFLFVBQVUsS0FBSyxVQUFVLEVBQUU7SUFDN0Qsb0JBQ0MsdURBQ0M7TUFBSyxFQUFFLEVBQUMsYUFBYTtNQUFDLEtBQUssRUFBQyxLQUFLO01BQUMsTUFBTSxFQUFDLEtBQUs7TUFBQyxPQUFPLEVBQUM7SUFBYSxnQkFDbkU7TUFBVSxTQUFTLEVBQUMsNEJBQTRCO01BQUMsTUFBTSxFQUFDLG1CQUFtQjtNQUFDLFdBQVcsRUFBQyxJQUFJO01BQUMsSUFBSSxFQUFDO0lBQU0sRUFBWSxlQUNwSDtNQUFVLFNBQVMsRUFBQyw0QkFBNEI7TUFBQyxNQUFNLEVBQUMsbUJBQW1CO01BQUMsV0FBVyxFQUFDLElBQUk7TUFBQyxJQUFJLEVBQUM7SUFBTSxFQUFZLGVBQ3BIO01BQVUsU0FBUyxFQUFDLGdDQUFnQztNQUFDLE1BQU0sRUFBQyxtQkFBbUI7TUFBQyxXQUFXLEVBQUMsSUFBSTtNQUFDLElBQUksRUFBQztJQUFNLEVBQVksZUFDeEg7TUFBVSxTQUFTLEVBQUMsZ0NBQWdDO01BQUMsTUFBTSxFQUFDLG1CQUFtQjtNQUFDLFdBQVcsRUFBQyxJQUFJO01BQUMsSUFBSSxFQUFDO0lBQU0sRUFBWSxDQUNuSCxDQUNKO0VBRUgsQ0FBQyxNQUFNO0lBQ1Asb0JBQ0QsdURBQ0Esb0JBQUMsZ0RBQU0sT0FBVSxlQUNqQixvQkFBQyxrREFBUSxPQUFZLGVBQ3JCLG9CQUFDLGtEQUFRLE9BQVksZUFDckIsb0JBQUMscURBQVcsT0FBZSxlQUUzQixvQkFBQyx3REFBYztNQUFDLFVBQVUsRUFBRXdLLFVBQVc7TUFBQyxJQUFJLEVBQUl4RjtJQUFLLEVBQWtCLGVBQ3ZFO01BQUssS0FBSyxFQUFFO1FBQUNtRSxVQUFVLEVBQUNpQjtNQUFJO0lBQUUsZ0JBQUMsb0JBQUMsd0RBQWM7TUFBQyxJQUFJLEVBQUV4TTtJQUFNLEVBQWtCLENBQU0sZUFLbkYsb0JBQUMsNkRBQVU7TUFBQyxNQUFNLEVBQUUwTTtJQUFPLEVBQWMsQ0FDdEM7RUFFTDtBQUNBO0FBQ0EsaUVBQWVqUCxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RkQ7QUFDSDtBQUNJO0FBQ2M7QUFDVjtBQUNJO0FBRWxDLFNBQVMyTyxjQUFjLE9BQW9CO0VBQUEsSUFBbEJRLFVBQVUsUUFBVkEsVUFBVTtJQUFDOUcsSUFBSSxRQUFKQSxJQUFJO0VBQ3ZDOUcsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2Y0TixVQUFVLENBQUMsSUFBSSxDQUFDO0VBQ2YsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDVG5ILCtDQUFRLEVBQUU7RUFDVCxvQkFDQyx1SUFHQTtJQUFLLFNBQVMsRUFBQyxhQUFhO0lBQUMsR0FBRyxFQUFDO0VBQVUsZ0JBRTNDO0lBQU8sV0FBVztJQUFDLFFBQVE7SUFBQyxLQUFLO0lBQUMsSUFBSTtFQUFBLGdCQUNyQztJQUFRLEdBQUcsRUFBQywyQkFBMkI7SUFBQyxJQUFJLEVBQUM7RUFBVyxFQUFVLENBQzNELGVBRVA7SUFBSyxTQUFTLEVBQUM7RUFBYSxnQkFDM0I7SUFBSyxTQUFTLEVBQUM7RUFBUyxnQkFDdkI7SUFBSyxTQUFTLEVBQUM7RUFBbUIsZ0JBRWxDO0lBQUssU0FBUyxFQUFDLGlCQUFpQjtJQUFDLFlBQVM7RUFBUyxnQkFDbEQsMkRBQUMsa0RBQUk7SUFBQyxFQUFFLEVBQUM7RUFBRyxnQkFDWDtJQUFLLEdBQUcsRUFBQyw0QkFBNEI7SUFBQyxHQUFHLEVBQUMsTUFBTTtJQUFDLEtBQUssRUFBRSxHQUFJO0lBQUMsU0FBUyxFQUFDO0VBQVEsRUFBRyxDQUM1RSxDQUNGLGVBRU47SUFBSyxTQUFTLEVBQUMsY0FBYztJQUFDLFlBQVM7RUFBUyxnQkFDL0M7SUFBSSxTQUFTLEVBQUM7RUFBUSx1QkFBaUJLLElBQUksT0FBTyxDQUU3QyxDQUVBLENBR0QsQ0FDRCxDQUNELENBRUg7QUFFTDtBQUVELGlFQUFlc0csY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREo7QUFDZTtBQUNLO0FBQ2Y7QUFDWTtBQUUxQyxTQUFTQyxjQUFjLENBQUN2RyxJQUFJLEVBQUU7RUFDN0IsaUJBQWlCL0csMkRBQVMsRUFBRTtJQUFwQndOLElBQUksY0FBSkEsSUFBSTtFQUNaO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQSxJQUFJTyxHQUFHLEdBQUcsRUFBRTtFQUNaLElBQUdoSCxJQUFJLENBQUNBLElBQUksQ0FBQ2xFLE1BQU0sR0FBRyxDQUFDLEVBQUM7SUFFdkIsS0FBSyxJQUFJcUQsS0FBSyxHQUFHLENBQUMsRUFBRUEsS0FBSyxHQUFHYSxJQUFJLENBQUNBLElBQUksQ0FBQ2xFLE1BQU0sRUFBRXFELEtBQUssRUFBRSxFQUFFO01BQ3RELElBQUdzSCxJQUFJLElBQUksUUFBUSxFQUFDO1FBQ25CLElBQUl6SixJQUFJLGdCQUNOO1VBQUssR0FBRyxFQUFFbUMsS0FBTTtVQUFDLFNBQVMsRUFBQztRQUF5QyxnQkFDckU7VUFBSyxTQUFTLEVBQUM7UUFBUyxnQkFDeEI7VUFBRyxJQUFJLEVBQUUsVUFBVSxHQUFHYSxJQUFJLENBQUNBLElBQUksQ0FBQ2IsS0FBSyxDQUFDLENBQUM1RjtRQUFHLGdCQUN4QztVQUFLLFNBQVMsRUFBQztRQUFjLGdCQUM5QjtVQUFHLEtBQUssRUFBRTtZQUFFc0UsUUFBUSxFQUFFO1VBQVcsQ0FBRTtVQUFDLFNBQVMsRUFBQztRQUFVLEdBQ3JEbUMsSUFBSSxDQUFDQSxJQUFJLENBQUNiLEtBQUssQ0FBQyxDQUFDaEIsT0FBTyxDQUN2QixFQUNINkIsSUFBSSxDQUFDQSxJQUFJLENBQUNiLEtBQUssQ0FBQyxDQUFDN0UsTUFBTSxLQUFLLHVCQUF1QixnQkFBSTtVQUN0RCxLQUFLLEVBQUU7WUFBRXFELEtBQUssRUFBRSxNQUFNO1lBQUVDLE1BQU0sRUFBRSxNQUFNO1lBQUVRLFNBQVMsRUFBRTtVQUFRLENBQUU7VUFDN0QsR0FBRyxFQUFFLHNCQUFzQixHQUFHNEIsSUFBSSxDQUFDQSxJQUFJLENBQUNiLEtBQUssQ0FBQyxDQUFDN0UsTUFBTztVQUN0RCxHQUFHLEVBQUM7UUFBRSxFQUNOLGdCQUFLO1VBQUssS0FBSyxFQUFFO1lBQUNxRCxLQUFLLEVBQUUsTUFBTTtZQUFFQyxNQUFNLEVBQUUsTUFBTTtZQUFFUSxTQUFTLEVBQUU7VUFBTyxDQUFFO1VBQUMsR0FBRyxFQUFFLHlCQUEwQjtVQUFDLEdBQUcsRUFBQztRQUFFLEVBQUcsQ0FDMUcsQ0FDSixDQUNFLENBRU47UUFDRDRJLEdBQUcsQ0FBQzFJLElBQUksQ0FBQ3RCLElBQUksQ0FBQztNQUNmO01BQ0EsSUFBR3lKLElBQUksSUFBSSxRQUFRLEVBQUM7UUFDbkIsSUFBSXpKLEtBQUksZ0JBQ047VUFBSyxHQUFHLEVBQUVtQyxLQUFNO1VBQUMsU0FBUyxFQUFDO1FBQXlDLGdCQUNyRTtVQUFLLFNBQVMsRUFBQztRQUFTLGdCQUN4QjtVQUFHLElBQUksRUFBRSxVQUFVLEdBQUdhLElBQUksQ0FBQ0EsSUFBSSxDQUFDYixLQUFLLENBQUMsQ0FBQzVGO1FBQUcsZ0JBQ3hDO1VBQUssU0FBUyxFQUFDO1FBQWMsZ0JBQzlCO1VBQUcsS0FBSyxFQUFFO1lBQUVzRSxRQUFRLEVBQUU7VUFBVyxDQUFFO1VBQUMsU0FBUyxFQUFDO1FBQVUsR0FDckRtQyxJQUFJLENBQUNBLElBQUksQ0FBQ2IsS0FBSyxDQUFDLENBQUNoQixPQUFPLENBQ3ZCLEVBQ0g2QixJQUFJLENBQUNBLElBQUksQ0FBQ2IsS0FBSyxDQUFDLENBQUM3RSxNQUFNLEtBQUssdUJBQXVCLGdCQUFJO1VBQ3RELEtBQUssRUFBRTtZQUFFcUQsS0FBSyxFQUFFLE1BQU07WUFBRUMsTUFBTSxFQUFFLE1BQU07WUFBRVEsU0FBUyxFQUFFO1VBQVEsQ0FBRTtVQUM3RCxHQUFHLEVBQUUsc0JBQXNCLEdBQUc0QixJQUFJLENBQUNBLElBQUksQ0FBQ2IsS0FBSyxDQUFDLENBQUM3RSxNQUFPO1VBQ3RELEdBQUcsRUFBQztRQUFFLEVBQ04sZ0JBQUs7VUFBSyxLQUFLLEVBQUU7WUFBQ3FELEtBQUssRUFBRSxNQUFNO1lBQUVDLE1BQU0sRUFBRSxNQUFNO1lBQUVRLFNBQVMsRUFBRTtVQUFPLENBQUU7VUFBQyxHQUFHLEVBQUUseUJBQTBCO1VBQUMsR0FBRyxFQUFDO1FBQUUsRUFBRyxDQUUxRyxDQUNKLENBQ0UsQ0FFTjtRQUNENEksR0FBRyxDQUFDMUksSUFBSSxDQUFDdEIsS0FBSSxDQUFDO01BQ2Y7SUFDRDtFQUVELENBQUMsTUFBSTtJQUNKZ0ssR0FBRyxnQkFDRix1SUFDQSxxRkFDQztNQUFLLEdBQUcsRUFBQztJQUFxQyxFQUFPLGVBQ3JEO01BQUcsS0FBSyxFQUFFO1FBQUVoSixTQUFTLEVBQUU7TUFBUTtJQUFFLCtDQUFxQyxDQUNqRSxDQUVOO0VBQ0Y7RUFHQSxvQkFDRSx1SUFDQSwyREFBQyxvREFBUTtJQUFDLE9BQU8sRUFBQyw4QkFBOEI7SUFBQyxJQUFJLEVBQUU7TUFBRWlKLEdBQUcsRUFBRSxDQUFDLENBQUM7TUFBRUMsR0FBRyxFQUFFO0lBQUUsQ0FBRTtJQUFDLFFBQVEsRUFBRTtFQUFJLGdCQUMzRjtJQUFLLFNBQVMsRUFBQyxNQUFNO0lBQUMsS0FBSyxFQUFFO01BQUN2SSxhQUFhLEVBQUM7SUFBTSxDQUFFO0lBQUMsR0FBRyxFQUFDO0VBQVEsZ0JBQy9EO0lBQUssU0FBUyxFQUFDO0VBQU0sZ0JBQ3RCO0lBQUssU0FBUyxFQUFDO0VBQUUsZ0JBQ2Y7SUFBSyxTQUFTLEVBQUM7RUFBa0MsR0FDakRxSSxHQUFHLENBQ0csQ0FlRixDQUNDLENBQ0YsQ0FDTSxDQUNSO0FBRU47QUFFQSxpRUFBZVQsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0dnQjtBQUNiO0FBQ0k7QUFDQTtBQUNNO0FBQ0c7QUFDSTtBQUNMO0FBQ0M7QUFHN0MsU0FBUzdPLFVBQVUsR0FBRztFQUNyQixpQkFBaUJ1Qiw0REFBUyxFQUFFO0lBQXBCdU4sSUFBSSxjQUFKQSxJQUFJO0VBQ1osZ0JBQTBCck4sZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQTtJQUFqQ0ssS0FBSztJQUFFQyxRQUFRO0VBQ3RCLGlCQUFnQ04sZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUF4Q08sUUFBUTtJQUFFQyxXQUFXO0VBQzVCLGlCQUFzQ1IsZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUE5Q1MsV0FBVztJQUFFQyxjQUFjO0VBQ2xDLGlCQUFnRFYsZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUF4RFcsZ0JBQWdCO0lBQUVDLG1CQUFtQjtFQUM1QyxpQkFBa0NaLGdEQUFRLENBQUMsS0FBSyxDQUFDO0lBQUE7SUFBMUNhLFVBQVU7SUFBRUMsV0FBVztFQUM5QixrQkFBMEJkLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBL0JlLEtBQUs7SUFBRUMsUUFBUTtFQUN0QixrQkFBNEJoQixnREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQWpDaUIsTUFBTTtJQUFFQyxTQUFTO0VBQ3hCLGtCQUE0QmxCLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBakNtQixNQUFNO0lBQUVDLFNBQVM7RUFDeEIsa0JBQTBCcEIsZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTtJQUEvQnFCLEtBQUs7SUFBRUMsUUFBUTtFQUN0QixrQkFBNEJ0QixnREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQWpDdUIsTUFBTTtJQUFFQyxTQUFTO0VBQ3hCLGtCQUE4QnhCLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBbkM0RSxPQUFPO0lBQUU0SCxVQUFVO0VBQzFCLGtCQUFnQ3hNLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBckN5QixRQUFRO0lBQUVDLFdBQVc7RUFDNUIsa0JBQXdCMUIsZ0RBQVEsQ0FBQyxRQUFRLENBQUM7SUFBQTtJQUFuQ3VOLElBQUk7SUFBRUMsT0FBTztFQUVuQixJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBVSxDQUFHQyxLQUFLLEVBQUk7SUFDM0IsSUFBR0EsS0FBSyxJQUFJLElBQUksRUFBRTtNQUNqQjlLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztNQUNyQnlLLE9BQU8sQ0FBQyxTQUFTLENBQUM7SUFDbkI7RUFDRCxDQUFDO0VBR0R6TixpREFBUyxDQUFDLFlBQU07SUFDZitDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDc0ssSUFBSSxDQUFDO0lBQ2pCdEwsS0FBSyxzQkFBZXNMLElBQUksR0FBRztNQUFDckwsTUFBTSxFQUFDLEtBQUs7TUFBQ0MsT0FBTyxFQUFDO1FBQUNDLE1BQU0sRUFBRSxrQkFBa0I7UUFBQyxjQUFjLEVBQUU7TUFBa0I7SUFBQyxDQUFDLENBQUMsQ0FDakhDLElBQUksQ0FBQyxVQUFBQyxHQUFHO01BQUEsT0FBSUEsR0FBRyxDQUFDQyxJQUFJLEVBQUU7SUFBQSxFQUFDLENBQ3ZCRixJQUFJLENBQ0osVUFBQ0csTUFBTSxFQUFLO01BQ1p0QixRQUFRLENBQUNzQixNQUFNLENBQUM7TUFDaEJRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxNQUFNLENBQUM7TUFDbkI5QixXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ2pCLENBQUM7SUFDRDtJQUNBO0lBQ0E7SUFDQSxVQUFDSCxLQUFLLEVBQUs7TUFDWEcsV0FBVyxDQUFDLElBQUksQ0FBQztNQUNqQkYsUUFBUSxDQUFDRCxLQUFLLENBQUM7TUFDZnlDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDMUMsS0FBSyxDQUFDO0lBQ2xCLENBQUMsQ0FDRDtFQUNGLENBQUMsRUFBRSxFQUFFLENBQUM7RUFJUCxJQUFJQSxLQUFLLEVBQUU7SUFDVCxvQkFBTyw0Q0FBYUEsS0FBSyxDQUFDNkMsT0FBTyxDQUFPO0VBQ3hDLENBQUMsTUFBTSxJQUFJLENBQUMzQyxRQUFRLElBQUkxQixRQUFRLENBQUNzRSxVQUFVLEtBQUssVUFBVSxFQUFFO0lBQzdELG9CQUNDLHVEQUNDO01BQUssRUFBRSxFQUFDLGFBQWE7TUFBQyxLQUFLLEVBQUMsS0FBSztNQUFDLE1BQU0sRUFBQyxLQUFLO01BQUMsT0FBTyxFQUFDO0lBQWEsZ0JBQ25FO01BQVUsU0FBUyxFQUFDLDRCQUE0QjtNQUFDLE1BQU0sRUFBQyxtQkFBbUI7TUFBQyxXQUFXLEVBQUMsSUFBSTtNQUFDLElBQUksRUFBQztJQUFNLEVBQVksZUFDcEg7TUFBVSxTQUFTLEVBQUMsNEJBQTRCO01BQUMsTUFBTSxFQUFDLG1CQUFtQjtNQUFDLFdBQVcsRUFBQyxJQUFJO01BQUMsSUFBSSxFQUFDO0lBQU0sRUFBWSxlQUNwSDtNQUFVLFNBQVMsRUFBQyxnQ0FBZ0M7TUFBQyxNQUFNLEVBQUMsbUJBQW1CO01BQUMsV0FBVyxFQUFDLElBQUk7TUFBQyxJQUFJLEVBQUM7SUFBTSxFQUFZLGVBQ3hIO01BQVUsU0FBUyxFQUFDLGdDQUFnQztNQUFDLE1BQU0sRUFBQyxtQkFBbUI7TUFBQyxXQUFXLEVBQUMsSUFBSTtNQUFDLElBQUksRUFBQztJQUFNLEVBQVksQ0FDbkgsQ0FDSjtFQUVILENBQUMsTUFBTTtJQUNQLG9CQUNELHVEQUNBLG9CQUFDLGdEQUFNLE9BQVUsZUFDakIsb0JBQUMsa0RBQVEsT0FBWSxlQUNyQixvQkFBQyxrREFBUSxPQUFZLGVBQ3JCLG9CQUFDLHFEQUFXLE9BQWUsZUFFM0Isb0JBQUMsdURBQWE7TUFBQyxVQUFVLEVBQUV3SyxVQUFXO01BQUMsSUFBSSxFQUFJTjtJQUFLLEVBQWlCLGVBQ3JFO01BQUssS0FBSyxFQUFFO1FBQUNmLFVBQVUsRUFBQ2lCO01BQUk7SUFBRSxnQkFBQyxvQkFBQyx1REFBYTtNQUFDLElBQUksRUFBRXhNO0lBQU0sRUFBaUIsQ0FBTSxlQUtqRixvQkFBQyw2REFBVTtNQUFDLE1BQU0sRUFBRTtJQUFLLEVBQWMsQ0FDcEM7RUFFTDtBQUNBO0FBQ0EsaUVBQWV4QyxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFGZTtBQUNsQjtBQUNJO0FBQ2M7QUFFeEMsU0FBU3lQLGFBQWEsT0FBb0I7RUFBQSxJQUFsQkwsVUFBVSxRQUFWQSxVQUFVO0lBQUM5RyxJQUFJLFFBQUpBLElBQUk7RUFDdEM5RyxnREFBUyxDQUFDLFlBQU07SUFDZjROLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDZixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNUbkgsK0NBQVEsRUFBRTtFQUNULG9CQUNDLHVJQUdBO0lBQUssU0FBUyxFQUFDLGFBQWE7SUFBQyxHQUFHLEVBQUM7RUFBVSxnQkFFM0M7SUFBTyxXQUFXO0lBQUMsUUFBUTtJQUFDLEtBQUs7SUFBQyxJQUFJO0VBQUEsZ0JBQ3JDO0lBQVEsR0FBRyxFQUFDLDJCQUEyQjtJQUFDLElBQUksRUFBQztFQUFXLEVBQVUsQ0FDM0QsZUFFUDtJQUFLLFNBQVMsRUFBQztFQUFhLGdCQUMzQjtJQUFLLFNBQVMsRUFBQztFQUFTLGdCQUN2QjtJQUFLLFNBQVMsRUFBQztFQUFtQixnQkFFbEM7SUFBSyxTQUFTLEVBQUMsaUJBQWlCO0lBQUMsWUFBUztFQUFTLGdCQUNsRCwyREFBQyxrREFBSTtJQUFDLEVBQUUsRUFBQztFQUFHLGdCQUNYO0lBQUssR0FBRyxFQUFDLDRCQUE0QjtJQUFDLEdBQUcsRUFBQyxNQUFNO0lBQUMsS0FBSyxFQUFFLEdBQUk7SUFBQyxTQUFTLEVBQUM7RUFBUSxFQUFHLENBQzVFLENBQ0YsZUFFTjtJQUFLLFNBQVMsRUFBQyxjQUFjO0lBQUMsWUFBUztFQUFTLGdCQUMvQztJQUFJLFNBQVMsRUFBQztFQUFRLHVCQUFpQkssSUFBSSxPQUFPLENBRTdDLENBRUEsQ0FHRCxDQUNELENBQ0QsQ0FFSDtBQUVMO0FBRUQsaUVBQWVtSCxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q0g7QUFDZTtBQUNFO0FBRTFDLFNBQVNDLGFBQWEsQ0FBQ3BILElBQUksRUFBRTtFQUM1QjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUEsSUFBSWdILEdBQUcsR0FBRyxFQUFFO0VBQ1osSUFBR2hILElBQUksQ0FBQ0EsSUFBSSxDQUFDbEUsTUFBTSxHQUFHLENBQUMsRUFBQztJQUd2QixLQUFLLElBQUlxRCxLQUFLLEdBQUcsQ0FBQyxFQUFFQSxLQUFLLEdBQUdhLElBQUksQ0FBQ0EsSUFBSSxDQUFDbEUsTUFBTSxFQUFFcUQsS0FBSyxFQUFFLEVBQUU7TUFDdEQsSUFBR2EsSUFBSSxDQUFDQSxJQUFJLENBQUNiLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBQztRQUNsQyxJQUFJbkMsSUFBSSxnQkFDTjtVQUFLLEdBQUcsRUFBRW1DLEtBQU07VUFBQyxTQUFTLEVBQUM7UUFBeUMsZ0JBQ3JFO1VBQUssU0FBUyxFQUFDO1FBQVMsZ0JBQ3hCO1VBQUcsSUFBSSxFQUFFLFVBQVUsR0FBR2EsSUFBSSxDQUFDQSxJQUFJLENBQUNiLEtBQUssQ0FBQyxDQUFDNUY7UUFBRyxnQkFDeEM7VUFBSyxTQUFTLEVBQUM7UUFBYyxnQkFDOUI7VUFBRyxLQUFLLEVBQUU7WUFBRXNFLFFBQVEsRUFBRTtVQUFXLENBQUU7VUFBQyxTQUFTLEVBQUM7UUFBVSxHQUNyRG1DLElBQUksQ0FBQ0EsSUFBSSxDQUFDYixLQUFLLENBQUMsQ0FBQ2hCLE9BQU8sQ0FDdkIsRUFDSDZCLElBQUksQ0FBQ0EsSUFBSSxDQUFDYixLQUFLLENBQUMsQ0FBQzdFLE1BQU0sS0FBSyx1QkFBdUIsZ0JBQUk7VUFDdEQsS0FBSyxFQUFFO1lBQUVxRCxLQUFLLEVBQUUsTUFBTTtZQUFFQyxNQUFNLEVBQUUsTUFBTTtZQUFFUSxTQUFTLEVBQUU7VUFBUSxDQUFFO1VBQzdELEdBQUcsRUFBRSxzQkFBc0IsR0FBRzRCLElBQUksQ0FBQ0EsSUFBSSxDQUFDYixLQUFLLENBQUMsQ0FBQzdFLE1BQU87VUFDdEQsR0FBRyxFQUFDO1FBQUUsRUFDTixnQkFBSztVQUFLLEtBQUssRUFBRTtZQUFDcUQsS0FBSyxFQUFFLE1BQU07WUFBRUMsTUFBTSxFQUFFLE1BQU07WUFBRVEsU0FBUyxFQUFFO1VBQU8sQ0FBRTtVQUFDLEdBQUcsRUFBRSx5QkFBMEI7VUFBQyxHQUFHLEVBQUM7UUFBRSxFQUFHLENBQzFHLENBQ0osQ0FDRSxDQUVOO1FBQ0Q0SSxHQUFHLENBQUMxSSxJQUFJLENBQUN0QixJQUFJLENBQUM7TUFDZjtNQUNBLElBQUdnRCxJQUFJLENBQUNBLElBQUksQ0FBQ2IsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFDO1FBQ2xDLElBQUluQyxLQUFJLGdCQUNOO1VBQUssR0FBRyxFQUFFbUMsS0FBTTtVQUFDLFNBQVMsRUFBQztRQUF5QyxnQkFDckU7VUFBSyxTQUFTLEVBQUM7UUFBUyxnQkFDeEI7VUFBRyxJQUFJLEVBQUUsVUFBVSxHQUFHYSxJQUFJLENBQUNBLElBQUksQ0FBQ2IsS0FBSyxDQUFDLENBQUM1RjtRQUFHLGdCQUN4QztVQUFLLFNBQVMsRUFBQztRQUFjLGdCQUM5QjtVQUFHLEtBQUssRUFBRTtZQUFFc0UsUUFBUSxFQUFFO1VBQVcsQ0FBRTtVQUFDLFNBQVMsRUFBQztRQUFVLEdBQ3JEbUMsSUFBSSxDQUFDQSxJQUFJLENBQUNiLEtBQUssQ0FBQyxDQUFDaEIsT0FBTyxDQUN2QixFQUNINkIsSUFBSSxDQUFDQSxJQUFJLENBQUNiLEtBQUssQ0FBQyxDQUFDN0UsTUFBTSxLQUFLLHVCQUF1QixnQkFBSTtVQUN0RCxLQUFLLEVBQUU7WUFBRXFELEtBQUssRUFBRSxNQUFNO1lBQUVDLE1BQU0sRUFBRSxNQUFNO1lBQUVRLFNBQVMsRUFBRTtVQUFRLENBQUU7VUFDN0QsR0FBRyxFQUFFLHNCQUFzQixHQUFHNEIsSUFBSSxDQUFDQSxJQUFJLENBQUNiLEtBQUssQ0FBQyxDQUFDN0UsTUFBTztVQUN0RCxHQUFHLEVBQUM7UUFBRSxFQUNOLGdCQUFLO1VBQUssS0FBSyxFQUFFO1lBQUNxRCxLQUFLLEVBQUUsTUFBTTtZQUFFQyxNQUFNLEVBQUUsTUFBTTtZQUFFUSxTQUFTLEVBQUU7VUFBTyxDQUFFO1VBQUMsR0FBRyxFQUFFLHlCQUEwQjtVQUFDLEdBQUcsRUFBQztRQUFFLEVBQUcsQ0FFMUcsQ0FDSixDQUNFLENBRU47UUFDRDRJLEdBQUcsQ0FBQzFJLElBQUksQ0FBQ3RCLEtBQUksQ0FBQztNQUNmO0lBQ0Q7RUFDRCxDQUFDLE1BQUk7SUFDSmdLLEdBQUcsZ0JBQ0YsdUlBQ0EscUZBQ0M7TUFBSyxHQUFHLEVBQUM7SUFBcUMsRUFBTyxlQUNyRDtNQUFHLEtBQUssRUFBRTtRQUFFaEosU0FBUyxFQUFFO01BQVE7SUFBRSwrQ0FBcUMsQ0FDakUsQ0FFTjtFQUVGO0VBR0Esb0JBQ0UsdUlBQ0EsMkRBQUMsb0RBQVE7SUFBQyxPQUFPLEVBQUMsOEJBQThCO0lBQUMsSUFBSSxFQUFFO01BQUVpSixHQUFHLEVBQUUsQ0FBQyxDQUFDO01BQUVDLEdBQUcsRUFBRTtJQUFFLENBQUU7SUFBQyxRQUFRLEVBQUU7RUFBSSxnQkFDM0Y7SUFBSyxTQUFTLEVBQUMsTUFBTTtJQUFDLEtBQUssRUFBRTtNQUFDdkksYUFBYSxFQUFDO0lBQU0sQ0FBRTtJQUFDLEdBQUcsRUFBQztFQUFRLGdCQUMvRDtJQUFLLFNBQVMsRUFBQztFQUFNLGdCQUN0QjtJQUFLLFNBQVMsRUFBQztFQUFFLGdCQUNmO0lBQUssU0FBUyxFQUFDO0VBQWtDLEdBQ2pEcUksR0FBRyxDQUNHLENBZUYsQ0FDQyxDQUNGLENBQ00sQ0FDUjtBQUVOO0FBRUEsaUVBQWVJLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekd5QjtBQUNyQjtBQUNJO0FBQ0E7QUFDTTtBQUNXO0FBRVQ7QUFDQztBQUNmO0FBQ0U7QUFDaUI7QUFHakQsU0FBUy9QLGNBQWMsR0FBRztFQUN6QixpQkFBZ0I0Qiw0REFBUyxFQUFFO0lBQW5Cc08sR0FBRyxjQUFIQSxHQUFHO0VBQ1gsZ0JBQTBCcE8sZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQTtJQUFqQ0ssS0FBSztJQUFFQyxRQUFRO0VBQ3RCLGlCQUFnQ04sZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUF4Q08sUUFBUTtJQUFFQyxXQUFXO0VBQzVCLGlCQUEwQ1IsZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUFsRHFPLGFBQWE7SUFBRUMsZ0JBQWdCO0VBQ3RDLGlCQUFzQ3RPLGdEQUFRLENBQUMsS0FBSyxDQUFDO0lBQUE7SUFBOUN1TyxXQUFXO0lBQUVDLGNBQWM7RUFDbEMsaUJBQWdEeE8sZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUF4RFcsZ0JBQWdCO0lBQUVDLG1CQUFtQjtFQUM1QyxrQkFBa0NaLGdEQUFRLENBQUMsS0FBSyxDQUFDO0lBQUE7SUFBMUNhLFVBQVU7SUFBRUMsV0FBVztFQUM5QixrQkFBMEJkLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBL0JlLEtBQUs7SUFBRUMsUUFBUTtFQUN0QixrQkFBc0JoQixnREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQTNCeU8sR0FBRztJQUFFQyxNQUFNO0VBQ2xCLGtCQUEwQjFPLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBL0IyTyxLQUFLO0lBQUVDLFFBQVE7RUFDdEIsa0JBQXdCNU8sZ0RBQVEsQ0FBQyxRQUFRLENBQUM7SUFBQTtJQUFuQ3VOLElBQUk7SUFBRUMsT0FBTztFQUNwQixrQkFBNEJ4TixnREFBUSxDQUFDLEtBQUssQ0FBQztJQUFBO0lBQXBDeU4sTUFBTTtJQUFFQyxTQUFTO0VBRXhCLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFVLENBQUdDLEtBQUssRUFBSTtJQUMzQixJQUFHQSxLQUFLLElBQUksSUFBSSxFQUFFO01BQ2pCSixPQUFPLENBQUMsU0FBUyxDQUFDO01BQ2xCRSxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQ2hCO0VBQ0QsQ0FBQztFQUNEM04saURBQVMsQ0FBQyxZQUFNO0lBRWZnQyxLQUFLLDBCQUFtQnFNLEdBQUcsR0FBRztNQUFDcE0sTUFBTSxFQUFDLEtBQUs7TUFBQ0MsT0FBTyxFQUFDO1FBQUNDLE1BQU0sRUFBRSxrQkFBa0I7UUFBQyxjQUFjLEVBQUU7TUFBa0I7SUFBQyxDQUFDLENBQUMsQ0FDcEhDLElBQUksQ0FBQyxVQUFBQyxHQUFHO01BQUEsT0FBSUEsR0FBRyxDQUFDQyxJQUFJLEVBQUU7SUFBQSxFQUFDLENBQ3ZCRixJQUFJLENBQ0osVUFBQ0csTUFBTSxFQUFLO01BQ1p0QixRQUFRLENBQUNzQixNQUFNLENBQUM7TUFDaEI5QixXQUFXLENBQUMsSUFBSSxDQUFDO01BQ2pCc0MsT0FBTyxDQUFDQyxHQUFHLENBQUNULE1BQU0sQ0FBQztJQUNuQixDQUFDO0lBQ0Q7SUFDQTtJQUNBO0lBQ0EsVUFBQ2pDLEtBQUssRUFBSztNQUNYRyxXQUFXLENBQUMsSUFBSSxDQUFDO01BQ2pCRixRQUFRLENBQUNELEtBQUssQ0FBQztNQUNmeUMsT0FBTyxDQUFDQyxHQUFHLENBQUMxQyxLQUFLLENBQUM7SUFDbEIsQ0FBQyxDQUNEO0lBRUQwQixLQUFLLHFCQUFvQjtNQUFDQyxNQUFNLEVBQUMsS0FBSztNQUFDQyxPQUFPLEVBQUM7UUFBQ0MsTUFBTSxFQUFFLGtCQUFrQjtRQUFDLGNBQWMsRUFBRTtNQUFrQjtJQUFDLENBQUMsQ0FBQyxDQUMvR0MsSUFBSSxDQUFDLFVBQUFDLEdBQUc7TUFBQSxPQUFJQSxHQUFHLENBQUNDLElBQUksRUFBRTtJQUFBLEVBQUMsQ0FDdkJGLElBQUksQ0FDSixVQUFDRyxNQUFNLEVBQUs7TUFDWnNNLFFBQVEsQ0FBQ3RNLE1BQU0sQ0FBQztNQUNoQmdNLGdCQUFnQixDQUFDLElBQUksQ0FBQztJQUN0QixDQUFDO0lBQ0Q7SUFDQTtJQUNBO0lBQ0EsVUFBQ2pPLEtBQUssRUFBSztNQUNYaU8sZ0JBQWdCLENBQUMsSUFBSSxDQUFDO01BQ3RCaE8sUUFBUSxDQUFDRCxLQUFLLENBQUM7TUFDZnlDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDMUMsS0FBSyxDQUFDO0lBQ2xCLENBQUMsQ0FDRDtJQUNEMEIsS0FBSyxvQkFBbUI7TUFBQ0MsTUFBTSxFQUFDLEtBQUs7TUFBQ0MsT0FBTyxFQUFDO1FBQUNDLE1BQU0sRUFBRSxrQkFBa0I7UUFBQyxjQUFjLEVBQUU7TUFBa0I7SUFBQyxDQUFDLENBQUMsQ0FDOUdDLElBQUksQ0FBQyxVQUFBQyxHQUFHO01BQUEsT0FBSUEsR0FBRyxDQUFDQyxJQUFJLEVBQUU7SUFBQSxFQUFDLENBQ3ZCRixJQUFJLENBQ0osVUFBQ0csTUFBTSxFQUFLO01BQ1pvTSxNQUFNLENBQUNwTSxNQUFNLENBQUM7TUFDZGtNLGNBQWMsQ0FBQyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUNEO0lBQ0E7SUFDQTtJQUNBLFVBQUNuTyxLQUFLLEVBQUs7TUFDWGlPLGdCQUFnQixDQUFDLElBQUksQ0FBQztNQUN0QmhPLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDO01BQ2Z5QyxPQUFPLENBQUNDLEdBQUcsQ0FBQzFDLEtBQUssQ0FBQztJQUNsQixDQUFDLENBQ0Q7RUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sSUFBSUEsS0FBSyxFQUFFO0lBQ1Qsb0JBQU8sNENBQWFBLEtBQUssQ0FBQzZDLE9BQU8sQ0FBTztFQUN4QyxDQUFDLE1BQU0sSUFBSSxDQUFDM0MsUUFBUSxJQUFJMUIsUUFBUSxDQUFDc0UsVUFBVSxLQUFLLFVBQVUsRUFBRTtJQUM3RCxvQkFDQyx1REFDQztNQUFLLEVBQUUsRUFBQyxhQUFhO01BQUMsS0FBSyxFQUFDLEtBQUs7TUFBQyxNQUFNLEVBQUMsS0FBSztNQUFDLE9BQU8sRUFBQztJQUFhLGdCQUNuRTtNQUFVLFNBQVMsRUFBQyw0QkFBNEI7TUFBQyxNQUFNLEVBQUMsbUJBQW1CO01BQUMsV0FBVyxFQUFDLElBQUk7TUFBQyxJQUFJLEVBQUM7SUFBTSxFQUFZLGVBQ3BIO01BQVUsU0FBUyxFQUFDLDRCQUE0QjtNQUFDLE1BQU0sRUFBQyxtQkFBbUI7TUFBQyxXQUFXLEVBQUMsSUFBSTtNQUFDLElBQUksRUFBQztJQUFNLEVBQVksZUFDcEg7TUFBVSxTQUFTLEVBQUMsZ0NBQWdDO01BQUMsTUFBTSxFQUFDLG1CQUFtQjtNQUFDLFdBQVcsRUFBQyxJQUFJO01BQUMsSUFBSSxFQUFDO0lBQU0sRUFBWSxlQUN4SDtNQUFVLFNBQVMsRUFBQyxnQ0FBZ0M7TUFBQyxNQUFNLEVBQUMsbUJBQW1CO01BQUMsV0FBVyxFQUFDLElBQUk7TUFBQyxJQUFJLEVBQUM7SUFBTSxFQUFZLENBQ25ILENBQ0o7RUFFSCxDQUFDLE1BQU07SUFDUCxvQkFDRCx1REFDQSxvQkFBQyxnREFBTSxPQUFVLGVBQ2pCLG9CQUFDLGtEQUFRLE9BQVksZUFDckIsb0JBQUMsa0RBQVEsT0FBWSxlQUNyQixvQkFBQyxxREFBVyxPQUFlLGVBRTNCLG9CQUFDLDJEQUFpQjtNQUFDLFVBQVUsRUFBRXdLLFVBQVc7TUFBQyxHQUFHLEVBQUVjO0lBQUksRUFBcUIsZUFTekUsb0JBQUMsMkRBQWlCO01BQUMsTUFBTSxFQUFFaEIsTUFBTztNQUFDLElBQUksRUFBRTFNLEtBQU07TUFBQyxJQUFJLEVBQUVxTixHQUFJO01BQUMsS0FBSyxFQUFFTztJQUFNLEVBQXFCLGVBQzdGLG9CQUFDLDZEQUFVO01BQUMsTUFBTSxFQUFFbEI7SUFBTyxFQUFjLENBTXRDO0VBRUw7QUFDQTtBQUNBLGlFQUFldlAsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaklzQjtBQUM3QjtBQUNJO0FBQ2M7QUFDTTtBQUNxQjtBQUNhO0FBQ1Q7QUFHL0I7QUFDeUI7QUFDbkM7QUFDOUIsSUFBTXNSLFNBQVMsR0FBR1gsaUVBQU0sQ0FBQyxVQUFDWSxLQUFLO0VBQUEsb0JBQzdCLDREQUFDLGdFQUFZO0lBQUMsY0FBYztJQUFDLFNBQVMsRUFBRSxDQUFFO0lBQUMsTUFBTTtFQUFBLEdBQUtBLEtBQUssRUFBSTtBQUFBLENBQ2hFLENBQUMsQ0FBQztFQUFBLElBQUdDLEtBQUssUUFBTEEsS0FBSztFQUFBLE9BQVE7SUFDakJDLFFBQVEsRUFBRSxPQUFPO0lBQ2pCQyxlQUFlLEVBQUUsZUFBZTtJQUNoQ3hMLEtBQUssRUFBRTtFQUNULENBQUM7QUFBQSxDQUFDLENBQUM7QUFFSCxJQUFNeUwsZ0JBQWdCLEdBQUdoQixpRUFBTSxDQUFDLFVBQUNZLEtBQUs7RUFBQSxvQkFDcEMsNERBQUMsdUVBQW1CO0lBQ2xCLFVBQVUsZUFBRSw0REFBQyxpRkFBd0I7TUFBQyxFQUFFLEVBQUU7UUFBRUssUUFBUSxFQUFFO01BQVM7SUFBRTtFQUFJLEdBQ3BFTCxLQUFLLEVBQ047QUFBQSxDQUNILENBQUMsQ0FBQztFQUFBLElBQUdDLEtBQUssU0FBTEEsS0FBSztFQUFBLE9BQVE7SUFDakJ0TCxLQUFLLEVBQUUsT0FBTztJQUNkd0wsZUFBZSxFQUNiRixLQUFLLENBQUNLLE9BQU8sQ0FBQ0MsSUFBSSxLQUFLLE1BQU0sR0FDekIsMEJBQTBCLEdBQzFCLG9CQUFvQjtJQUMxQkMsYUFBYSxFQUFFLEtBQUs7SUFDcEIsdURBQXVELEVBQUU7TUFDdkRDLFNBQVMsRUFBRTtJQUNiLENBQUM7SUFDRCxnQ0FBZ0MsRUFBRTtNQUNoQ3hJLFVBQVUsRUFBRWdJLEtBQUssQ0FBQ1MsT0FBTyxDQUFDLENBQUM7SUFDN0I7RUFDRixDQUFDO0FBQUEsQ0FBQyxDQUFDO0FBRUgsSUFBTUMsZ0JBQWdCLEdBQUd2QixpRUFBTSxDQUFDVSx1RUFBbUIsQ0FBQyxDQUFDO0VBQUEsSUFBR0csS0FBSyxTQUFMQSxLQUFLO0VBQUEsT0FBUTtJQUNuRXJKLE9BQU8sRUFBRXFKLEtBQUssQ0FBQ1MsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN6QjVLLFVBQVUsRUFBRSxDQUFDO0lBQ2JsQyxTQUFTLEVBQUUsQ0FBQztJQUNaZ04sU0FBUyxFQUFFLE9BQU87SUFDbEI1RSxRQUFRLEVBQUU7RUFDWixDQUFDO0FBQUEsQ0FBQyxDQUFDO0FBRUgsU0FBU3lDLGlCQUFpQixRQUFvQjtFQUFBLElBQWxCUCxVQUFVLFNBQVZBLFVBQVU7SUFBRWMsR0FBRyxTQUFIQSxHQUFHO0VBRTFDMU8saURBQVMsQ0FBQyxZQUFNO0lBQ2Y0TixVQUFVLENBQUMsSUFBSSxDQUFDO0VBQ2YsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFFVCxzQkFBZ0NoUSxzREFBYyxDQUFDLFFBQVEsQ0FBQztJQUFBO0lBQWpEMlMsUUFBUTtJQUFFQyxXQUFXO0VBRTVCLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFZLENBQUlDLEtBQUs7SUFBQSxPQUFLLFVBQUNsSSxLQUFLLEVBQUVtSSxXQUFXLEVBQUs7TUFDdERILFdBQVcsQ0FBQ0csV0FBVyxHQUFHRCxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQzFDLENBQUM7RUFBQTtFQUVELGdCQUEwQnpRLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBL0IyUSxLQUFLO0lBQUVDLFFBQVE7RUFDdEIsSUFBSUMsUUFBUSxHQUFHcEMsR0FBRztFQUNsQixJQUFJcUMsSUFBSSxHQUFHLEVBQUU7RUFDYixJQUFJQyxVQUFVLEdBQUcsQ0FDZixZQUFZLEVBQ1osV0FBVyxFQUNYLFNBQVMsRUFDVCxXQUFXLEVBQ1gsT0FBTyxFQUNQLFNBQVMsRUFDVCxlQUFlLEVBQ2YsT0FBTyxFQUNQLFVBQVUsRUFDVixhQUFhLEVBQ2IsTUFBTSxFQUNOLFdBQVcsRUFDWCxXQUFXLEVBQ1gsV0FBVyxFQUNYLFlBQVksRUFDWixNQUFNLEVBQ04sV0FBVyxFQUNYLFdBQVcsRUFDWCxlQUFlLEVBQ2YsV0FBVyxFQUNYLFFBQVEsRUFDUixTQUFTLEVBQ1QsV0FBVyxFQUNYLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUNYLFVBQVUsRUFDVixXQUFXLEVBQ1gsV0FBVyxFQUNYLFdBQVcsRUFDWCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLGFBQWEsRUFDYixVQUFVLEVBQ1YsU0FBUyxFQUNULFVBQVUsRUFDVixRQUFRLEVBQ1IsWUFBWSxFQUNaLFlBQVksQ0FBQztFQUVmaFIsaURBQVMsQ0FBQyxZQUFNO0lBQ2QsU0FBU2lSLE9BQU8sR0FBRztNQUNwQixJQUFJQyxJQUFJLEdBQUdGLFVBQVUsQ0FBQ0csSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUdMLFVBQVUsQ0FBQ3BPLE1BQU0sQ0FBQyxDQUFDO01BQ3BFb08sVUFBVSxDQUFDTSxNQUFNLENBQUNOLFVBQVUsQ0FBQ08sT0FBTyxDQUFDTCxJQUFJLENBQUMsQ0FBQztNQUMzQyxPQUFPQSxJQUFJO0lBQ1Y7SUFFQSxJQUFJTSxLQUFLLEdBQUdQLE9BQU8sRUFBRTtJQUNyQixJQUFJUSxLQUFLLEdBQUdSLE9BQU8sRUFBRTtJQUNyQkosUUFBUSxDQUFDLENBQUNXLEtBQUssRUFBRUMsS0FBSyxDQUFDLENBQUM7RUFDMUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNOaEwsZ0RBQVEsRUFBRTtFQUNWcUssUUFBUSxDQUFDOU0sT0FBTyxDQUFDLFVBQUNDLE9BQU8sRUFBSztJQUM1QixJQUFJSCxJQUFJLGdCQUNQO01BQUcsR0FBRyxFQUFFRyxPQUFPLENBQUM1RCxFQUFHO01BQUMsS0FBSyxFQUFFO1FBQUMrRCxjQUFjLEVBQUUsTUFBTTtRQUFFQyxLQUFLLEVBQUU7TUFBTyxDQUFFO01BQUMsSUFBSSw4QkFBdUJKLE9BQU8sQ0FBQzVELEVBQUUsY0FBSTRELE9BQU8sQ0FBQ2tELFNBQVM7SUFBRyxnQkFDakk7TUFFQSxLQUFLLEVBQUU7UUFBRXRDLE9BQU8sRUFBRSxPQUFPO1FBQUVDLFNBQVMsRUFBRSxRQUFRO1FBQUNWLGNBQWMsRUFBRSxNQUFNO1FBQUVDLEtBQUssRUFBRTtNQUFPLENBQUU7TUFDdkYsU0FBUyxFQUFDO0lBQU8sR0FFaEJKLE9BQU8sQ0FBQ2tELFNBQVMsQ0FDZixDQUdKO0lBQ0Q0SixJQUFJLENBQUMzTCxJQUFJLENBQUN0QixJQUFJLENBQUM7RUFDakIsQ0FBQyxDQUFDO0VBQ0YsSUFBSThNLEtBQUssQ0FBQ2hPLE1BQU0sR0FBRyxDQUFDLEVBQUU7SUFDckIsb0JBQ0UseUlBQ0Q7TUFBSyxTQUFTLEVBQUMsYUFBYTtNQUFDLEdBQUcsRUFBQztJQUFVLGdCQUN6QztNQUFPLFdBQVc7TUFBQyxRQUFRO01BQUMsS0FBSztNQUFDLElBQUk7SUFBQSxnQkFDdkM7TUFBUSxHQUFHLEVBQUMsMkJBQTJCO01BQUMsSUFBSSxFQUFDO0lBQVcsRUFBVSxDQUN6RCxlQUVSO01BQUssU0FBUyxFQUFDO0lBQWEsZ0JBQzdCO01BQUssU0FBUyxFQUFDO0lBQVMsZ0JBQ3RCO01BQUssU0FBUyxFQUFDO0lBQW1CLGdCQUNuQztNQUFLLFNBQVMsRUFBQyxpQkFBaUI7TUFBQyxZQUFTO0lBQVMsZ0JBQ2pELDREQUFDLG1EQUFJO01BQUMsRUFBRSxFQUFDO0lBQUcsZ0JBQ2I7TUFDRSxHQUFHLEVBQUMsNEJBQTRCO01BQ2hDLEdBQUcsRUFBQyxNQUFNO01BQ1YsS0FBSyxFQUFFLEdBQUk7TUFDWCxTQUFTLEVBQUM7SUFBUSxFQUNsQixDQUNNLENBQ0gsZUFFTjtNQUFLLFNBQVMsRUFBQyxjQUFjO01BQUMsWUFBUztJQUFTLGdCQUM5QztNQUFJLFNBQVMsRUFBQztJQUFRLCtCQUF5QixlQUMvQztNQUNELFNBQVMsRUFBQyxTQUFTO01BQ25CLEtBQUssRUFBRTtRQUFFLFNBQU8sT0FBTztRQUFFOEUsV0FBVyxFQUFFO01BQU87SUFBRSxnQkFFL0M7TUFBRyxLQUFLLEVBQUU7UUFBRWQsYUFBYSxFQUFFO01BQVksQ0FBRTtNQUFDLFNBQVMsRUFBQztJQUFPLEdBQ3hEZ0ssS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFLQSxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQUksR0FBRyxDQUMzQixlQUNKLDREQUFDLFNBQVM7TUFDUixRQUFRLEVBQUVILFlBQVksQ0FBQyxRQUFRO0lBQUUsZ0JBRWpDLDREQUFDLGdCQUFnQjtNQUNsQixpQkFBYyxpQkFBaUI7TUFDL0IsRUFBRSxFQUFDO0lBQWdCLGdCQUVuQjtNQUFHLEtBQUssRUFBRTtRQUFFbk4sU0FBUyxFQUFFO01BQU07SUFBRSxzQkFBb0IsQ0FDL0IsZUFDbkIsNERBQUMsZ0JBQWdCLFFBQUV5TixJQUFJLENBQW9CLENBQ2pDLENBQ0wsQ0FDRixDQUNDLENBQ0YsQ0FDQyxDQUNGLENBQ0Y7RUFFSjtBQUNGO0FBRUQsaUVBQWU1QyxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0xOO0FBQ2dCO0FBQ0Y7QUFDRDtBQUNZO0FBQ0c7QUFDWjtBQUNaO0FBRzlCLFNBQVNDLGlCQUFpQixPQUE4QjtFQUFBLElBQTVCdEgsSUFBSSxRQUFKQSxJQUFJO0lBQUU2SyxJQUFJLFFBQUpBLElBQUk7SUFBRS9DLEtBQUssUUFBTEEsS0FBSztJQUFFekQsTUFBTSxRQUFOQSxNQUFNO0VBQ25ELElBQUl5RyxPQUFPLEdBQUdULElBQUksQ0FBQ1UsSUFBSSxDQUFDakQsS0FBSyxHQUFHLEVBQUUsQ0FBQztFQUNuQyxJQUFJUCxHQUFHLEdBQUd5RCxRQUFRLENBQUNILElBQUksQ0FBQztFQUN4QixTQUFTSSxRQUFRLENBQUNDLE1BQU0sRUFBRTtJQUN4QmxULFFBQVEsQ0FBQ0QsUUFBUSxzQkFBZW1ULE1BQU0sQ0FBRTtFQUMxQztFQUVBLElBQUlsRSxHQUFHLEdBQUcsRUFBRTtFQUNaLEtBQUssSUFBSTdILEtBQUssR0FBRyxDQUFDLEVBQUVBLEtBQUssR0FBR2EsSUFBSSxDQUFDbEUsTUFBTSxFQUFFcUQsS0FBSyxFQUFFLEVBQUU7SUFDOUMsSUFBSW5DLElBQUksZ0JBQ047TUFBSyxHQUFHLEVBQUVtQyxLQUFNO01BQUMsU0FBUyxFQUFDO0lBQXlDLGdCQUNsRTtNQUFLLFNBQVMsRUFBQztJQUFTLGdCQUN4QjtNQUFHLElBQUksRUFBRSxVQUFVLEdBQUdhLElBQUksQ0FBQ2IsS0FBSyxDQUFDLENBQUM1RjtJQUFHLGdCQUN6QztNQUFLLFNBQVMsRUFBQztJQUFjLGdCQUM5QjtNQUFHLEtBQUssRUFBRTtRQUFFc0UsUUFBUSxFQUFFO01BQVcsQ0FBRTtNQUFDLFNBQVMsRUFBQztJQUFVLEdBQ3JEbUMsSUFBSSxDQUFDYixLQUFLLENBQUMsQ0FBQ2hCLE9BQU8sQ0FDbEIsRUFDSDZCLElBQUksQ0FBQ2IsS0FBSyxDQUFDLENBQUNnTSxjQUFjLENBQUMsUUFBUSxDQUFDLGdCQUFJO01BQ3ZDLEtBQUssRUFBRTtRQUFFeE4sS0FBSyxFQUFFLE1BQU07UUFBRUMsTUFBTSxFQUFFLE1BQU07UUFBRVEsU0FBUyxFQUFFO01BQVEsQ0FBRTtNQUM3RCxHQUFHLEVBQUUsc0JBQXNCLEdBQUc0QixJQUFJLENBQUNiLEtBQUssQ0FBQyxDQUFDN0UsTUFBTztNQUNqRCxHQUFHLEVBQUM7SUFBRSxFQUNOLGdCQUFLO01BQUssS0FBSyxFQUFFO1FBQUNxRCxLQUFLLEVBQUUsTUFBTTtRQUFFQyxNQUFNLEVBQUUsTUFBTTtRQUFFUSxTQUFTLEVBQUU7TUFBTyxDQUFFO01BQUMsR0FBRyxFQUFFLHlCQUEwQjtNQUFDLEdBQUcsRUFBQztJQUFFLEVBQUcsQ0FDMUcsQ0FDRSxDQUNFLENBRVQ7SUFDRDRJLEdBQUcsQ0FBQzFJLElBQUksQ0FBQ3RCLElBQUksQ0FBQztFQUNoQjtFQUNBLElBQUdxSCxNQUFNLElBQUksSUFBSSxFQUFDO0lBQ2hCLG9CQUNFLHVJQUNBLDJEQUFDLG9EQUFRO01BQUMsT0FBTyxFQUFDLDhCQUE4QjtNQUFDLElBQUksRUFBRTtRQUFFNEMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUFFQyxHQUFHLEVBQUU7TUFBRSxDQUFFO01BQUMsUUFBUSxFQUFFO0lBQUksZ0JBQ3hGO01BQUssU0FBUyxFQUFDLE1BQU07TUFBQyxHQUFHLEVBQUM7SUFBUSxnQkFDaEM7TUFBSyxTQUFTLEVBQUM7SUFBTSxnQkFDbkI7TUFBSyxTQUFTLEVBQUM7SUFBRSxnQkFDZjtNQUFLLFNBQVMsRUFBQztJQUFrQyxHQUM5Q0YsR0FBRyxDQUNBLGVBQ047TUFBSyxTQUFTLEVBQUMsK0JBQStCO01BQUMsS0FBSyxFQUFFO1FBQUVySixLQUFLLEVBQUUsTUFBTTtRQUFFQyxNQUFNLEVBQUU7TUFBTztJQUFFLGdCQUN0RiwyREFBQyxxREFBVTtNQUNULE9BQU8sRUFBRTJKLEdBQUk7TUFDYixRQUFRLEVBQUUwRCxRQUFTO01BQ25CLFFBQVEsRUFBRSxDQUFFO01BQ1osS0FBSyxFQUFFSCxPQUFRO01BQ2YsU0FBUyxFQUFFO0lBQU0sRUFDakIsQ0FDRSxDQU1GLENBQ0YsQ0FDRixDQUNHLENBQ1I7RUFFUDtBQUNKO0FBRUEsaUVBQWV4RCxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFUztBQUNUO0FBQ0k7QUFDQTtBQUNNO0FBQ0Q7QUFDRztBQUNDO0FBQ0k7QUFHakQsU0FBU2xRLFFBQVEsR0FBRztFQUNuQixpQkFBZ0I2Qiw0REFBUyxFQUFFO0lBQW5Cc08sR0FBRyxjQUFIQSxHQUFHO0VBQ1gsZ0JBQTBCcE8sZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQTtJQUFqQ0ssS0FBSztJQUFFQyxRQUFRO0VBQ3RCLGlCQUFnQ04sZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUF4Q08sUUFBUTtJQUFFQyxXQUFXO0VBQzVCLGlCQUEwQ1IsZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUFsRHFPLGFBQWE7SUFBRUMsZ0JBQWdCO0VBQ3RDLGlCQUFzQ3RPLGdEQUFRLENBQUMsS0FBSyxDQUFDO0lBQUE7SUFBOUN1TyxXQUFXO0lBQUVDLGNBQWM7RUFDbEMsaUJBQTBCeE8sZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTtJQUEvQmUsS0FBSztJQUFFQyxRQUFRO0VBQ3RCLGtCQUFzQmhCLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBM0J5TyxHQUFHO0lBQUVDLE1BQU07RUFDbEIsa0JBQTBCMU8sZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTtJQUEvQjJPLEtBQUs7SUFBRUMsUUFBUTtFQUN0QixrQkFBd0I1TyxnREFBUSxDQUFDLFFBQVEsQ0FBQztJQUFBO0lBQW5DdU4sSUFBSTtJQUFFQyxPQUFPO0VBQ3BCLGtCQUE0QnhOLGdEQUFRLENBQUMsS0FBSyxDQUFDO0lBQUE7SUFBcEN5TixNQUFNO0lBQUVDLFNBQVM7RUFFeEIsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQVUsQ0FBR0MsS0FBSyxFQUFJO0lBQzNCLElBQUdBLEtBQUssSUFBSSxJQUFJLEVBQUU7TUFDakJKLE9BQU8sQ0FBQyxTQUFTLENBQUM7TUFDbEJFLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDaEI7RUFDRCxDQUFDO0VBRUEzTixpREFBUyxDQUFDLFlBQU07SUFFZmdDLEtBQUssMkJBQW9CcU0sR0FBRyxHQUFHO01BQUNwTSxNQUFNLEVBQUMsS0FBSztNQUFDQyxPQUFPLEVBQUM7UUFBQ0MsTUFBTSxFQUFFLGtCQUFrQjtRQUFDLGNBQWMsRUFBRTtNQUFrQjtJQUFDLENBQUMsQ0FBQyxDQUNySEMsSUFBSSxDQUFDLFVBQUFDLEdBQUc7TUFBQSxPQUFJQSxHQUFHLENBQUNDLElBQUksRUFBRTtJQUFBLEVBQUMsQ0FDdkJGLElBQUksQ0FDSixVQUFDRyxNQUFNLEVBQUs7TUFDWnRCLFFBQVEsQ0FBQ3NCLE1BQU0sQ0FBQztNQUNoQjlCLFdBQVcsQ0FBQyxJQUFJLENBQUM7TUFDakJzQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsTUFBTSxDQUFDO0lBQ25CLENBQUM7SUFDRDtJQUNBO0lBQ0E7SUFDQSxVQUFDakMsS0FBSyxFQUFLO01BQ1hHLFdBQVcsQ0FBQyxJQUFJLENBQUM7TUFDakJGLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDO01BQ2Z5QyxPQUFPLENBQUNDLEdBQUcsQ0FBQzFDLEtBQUssQ0FBQztJQUNsQixDQUFDLENBQ0Q7SUFFRDBCLEtBQUsscUJBQW9CO01BQUNDLE1BQU0sRUFBQyxLQUFLO01BQUNDLE9BQU8sRUFBQztRQUFDQyxNQUFNLEVBQUUsa0JBQWtCO1FBQUMsY0FBYyxFQUFFO01BQWtCO0lBQUMsQ0FBQyxDQUFDLENBQy9HQyxJQUFJLENBQUMsVUFBQUMsR0FBRztNQUFBLE9BQUlBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO0lBQUEsRUFBQyxDQUN2QkYsSUFBSSxDQUNKLFVBQUNHLE1BQU0sRUFBSztNQUNac00sUUFBUSxDQUFDdE0sTUFBTSxDQUFDO01BQ2hCZ00sZ0JBQWdCLENBQUMsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFDRDtJQUNBO0lBQ0E7SUFDQSxVQUFDak8sS0FBSyxFQUFLO01BQ1hpTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7TUFDdEJoTyxRQUFRLENBQUNELEtBQUssQ0FBQztNQUNmeUMsT0FBTyxDQUFDQyxHQUFHLENBQUMxQyxLQUFLLENBQUM7SUFDbEIsQ0FBQyxDQUNEO0lBQ0QwQixLQUFLLG9CQUFtQjtNQUFDQyxNQUFNLEVBQUMsS0FBSztNQUFDQyxPQUFPLEVBQUM7UUFBQ0MsTUFBTSxFQUFFLGtCQUFrQjtRQUFDLGNBQWMsRUFBRTtNQUFrQjtJQUFDLENBQUMsQ0FBQyxDQUM5R0MsSUFBSSxDQUFDLFVBQUFDLEdBQUc7TUFBQSxPQUFJQSxHQUFHLENBQUNDLElBQUksRUFBRTtJQUFBLEVBQUMsQ0FDdkJGLElBQUksQ0FDSixVQUFDRyxNQUFNLEVBQUs7TUFDWm9NLE1BQU0sQ0FBQ3BNLE1BQU0sQ0FBQztNQUNka00sY0FBYyxDQUFDLElBQUksQ0FBQztJQUNwQixDQUFDO0lBQ0Q7SUFDQTtJQUNBO0lBQ0EsVUFBQ25PLEtBQUssRUFBSztNQUNYaU8sZ0JBQWdCLENBQUMsSUFBSSxDQUFDO01BQ3RCaE8sUUFBUSxDQUFDRCxLQUFLLENBQUM7TUFDZnlDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDMUMsS0FBSyxDQUFDO0lBQ2xCLENBQUMsQ0FDRDtFQUNGLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFUCxJQUFJQSxLQUFLLEVBQUU7SUFDVCxvQkFBTyw0Q0FBYUEsS0FBSyxDQUFDNkMsT0FBTyxDQUFPO0VBQ3hDLENBQUMsTUFBTSxJQUFJLENBQUMzQyxRQUFRLElBQUksQ0FBQzhOLGFBQWEsSUFBRyxDQUFDRSxXQUFXLElBQUkxUCxRQUFRLENBQUNzRSxVQUFVLEtBQUssVUFBVSxFQUFFO0lBQzlGLG9CQUNDLHVEQUNDO01BQUssRUFBRSxFQUFDLGFBQWE7TUFBQyxLQUFLLEVBQUMsS0FBSztNQUFDLE1BQU0sRUFBQyxLQUFLO01BQUMsT0FBTyxFQUFDO0lBQWEsZ0JBQ25FO01BQVUsU0FBUyxFQUFDLDRCQUE0QjtNQUFDLE1BQU0sRUFBQyxtQkFBbUI7TUFBQyxXQUFXLEVBQUMsSUFBSTtNQUFDLElBQUksRUFBQztJQUFNLEVBQVksZUFDcEg7TUFBVSxTQUFTLEVBQUMsNEJBQTRCO01BQUMsTUFBTSxFQUFDLG1CQUFtQjtNQUFDLFdBQVcsRUFBQyxJQUFJO01BQUMsSUFBSSxFQUFDO0lBQU0sRUFBWSxlQUNwSDtNQUFVLFNBQVMsRUFBQyxnQ0FBZ0M7TUFBQyxNQUFNLEVBQUMsbUJBQW1CO01BQUMsV0FBVyxFQUFDLElBQUk7TUFBQyxJQUFJLEVBQUM7SUFBTSxFQUFZLGVBQ3hIO01BQVUsU0FBUyxFQUFDLGdDQUFnQztNQUFDLE1BQU0sRUFBQyxtQkFBbUI7TUFBQyxXQUFXLEVBQUMsSUFBSTtNQUFDLElBQUksRUFBQztJQUFNLEVBQVksQ0FDbkgsQ0FDSjtFQUVILENBQUMsTUFBTTtJQUNQLG9CQUNELHVEQUNBLG9CQUFDLGdEQUFNLE9BQVUsZUFDakIsb0JBQUMsa0RBQVEsT0FBWSxlQUNyQixvQkFBQyxrREFBUSxPQUFZLGVBQ3JCLG9CQUFDLHFEQUFXLE9BQWUsZUFDM0Isb0JBQUMscURBQVc7TUFBQyxVQUFVLEVBQUV3SyxVQUFXO01BQUMsR0FBRyxFQUFFYztJQUFJLEVBQWUsZUFDN0Qsb0JBQUMscURBQVc7TUFBQyxNQUFNLEVBQUVoQixNQUFPO01BQUMsSUFBSSxFQUFFMU0sS0FBTTtNQUFDLElBQUksRUFBRXFOLEdBQUk7TUFBQyxLQUFLLEVBQUVPO0lBQU0sRUFBZSxlQUNqRixvQkFBQyw2REFBVTtNQUFDLE1BQU0sRUFBRWxCO0lBQU8sRUFBYyxDQUN0QztFQUVMO0FBQ0E7QUFDQSxpRUFBZXhQLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0c0QjtBQUNYO0FBQ007QUFDa0M7QUFDN0I7QUFDYztBQUNBO0FBR2pFLElBQU11UixTQUFTLEdBQUdYLGlFQUFNLENBQUMsVUFBQ1ksS0FBSztFQUFBLG9CQUM3Qiw0REFBQyxnRUFBWTtJQUFDLGNBQWM7SUFBQyxTQUFTLEVBQUUsQ0FBRTtJQUFDLE1BQU07RUFBQSxHQUFLQSxLQUFLLEVBQUk7QUFBQSxDQUNoRSxDQUFDLENBQUM7RUFBQSxJQUFHQyxLQUFLLFFBQUxBLEtBQUs7RUFBQSxPQUFRO0lBQ2pCQyxRQUFRLEVBQUUsT0FBTztJQUNqQkMsZUFBZSxFQUFFLGVBQWU7SUFDaEN4TCxLQUFLLEVBQUU7RUFDVCxDQUFDO0FBQUEsQ0FBQyxDQUFDO0FBRUgsSUFBTXlMLGdCQUFnQixHQUFHaEIsaUVBQU0sQ0FBQyxVQUFDWSxLQUFLO0VBQUEsb0JBQ3BDLDREQUFDLHVFQUFtQjtJQUNsQixVQUFVLGVBQUUsNERBQUMsaUZBQXdCO01BQUMsRUFBRSxFQUFFO1FBQUVLLFFBQVEsRUFBRTtNQUFTO0lBQUU7RUFBSSxHQUNwRUwsS0FBSyxFQUNOO0FBQUEsQ0FDSCxDQUFDLENBQUM7RUFBQSxJQUFHQyxLQUFLLFNBQUxBLEtBQUs7RUFBQSxPQUFRO0lBQ2pCdEwsS0FBSyxFQUFFLE9BQU87SUFDZHdMLGVBQWUsRUFDYkYsS0FBSyxDQUFDSyxPQUFPLENBQUNDLElBQUksS0FBSyxNQUFNLEdBQ3pCLDBCQUEwQixHQUMxQixvQkFBb0I7SUFDMUJDLGFBQWEsRUFBRSxLQUFLO0lBQ3BCLHVEQUF1RCxFQUFFO01BQ3ZEQyxTQUFTLEVBQUU7SUFDYixDQUFDO0lBQ0QsZ0NBQWdDLEVBQUU7TUFDaEN4SSxVQUFVLEVBQUVnSSxLQUFLLENBQUNTLE9BQU8sQ0FBQyxDQUFDO0lBQzdCO0VBQ0YsQ0FBQztBQUFBLENBQUMsQ0FBQztBQUVILElBQU1DLGdCQUFnQixHQUFHdkIsaUVBQU0sQ0FBQ1UsdUVBQW1CLENBQUMsQ0FBQztFQUFBLElBQUdHLEtBQUssU0FBTEEsS0FBSztFQUFBLE9BQVE7SUFDbkVySixPQUFPLEVBQUVxSixLQUFLLENBQUNTLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDekI1SyxVQUFVLEVBQUUsQ0FBQztJQUNibEMsU0FBUyxFQUFFLENBQUM7SUFDWmdOLFNBQVMsRUFBRSxPQUFPO0lBQ2xCNUUsUUFBUSxFQUFFO0VBQ1osQ0FBQztBQUFBLENBQUMsQ0FBQztBQUVILFNBQVN3RyxXQUFXLFFBQW9CO0VBQUEsSUFBbEJ0RSxVQUFVLFNBQVZBLFVBQVU7SUFBRWMsR0FBRyxTQUFIQSxHQUFHO0VBQ25DLHNCQUFnQzlRLHNEQUFjLENBQUMsUUFBUSxDQUFDO0lBQUE7SUFBakQyUyxRQUFRO0lBQUVDLFdBQVc7RUFFNUIsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVksQ0FBSUMsS0FBSztJQUFBLE9BQUssVUFBQ2xJLEtBQUssRUFBRW1JLFdBQVcsRUFBSztNQUN0REgsV0FBVyxDQUFDRyxXQUFXLEdBQUdELEtBQUssR0FBRyxLQUFLLENBQUM7SUFDMUMsQ0FBQztFQUFBO0VBRUQxUSxpREFBUyxDQUFDLFlBQU07SUFDZDROLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDbEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFFUCxnQkFBMEIzTixnREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQS9CMlEsS0FBSztJQUFFQyxRQUFRO0VBQ3RCLElBQUlDLFFBQVEsR0FBR3BDLEdBQUc7RUFDbEIsSUFBSXFDLElBQUksR0FBRyxFQUFFO0VBQ2IsSUFBSUMsVUFBVSxHQUFHLENBQ2YsWUFBWSxFQUNaLFdBQVcsRUFDWCxTQUFTLEVBQ1QsV0FBVyxFQUNYLE9BQU8sRUFDUCxTQUFTLEVBQ1QsZUFBZSxFQUNmLE9BQU8sRUFDUCxVQUFVLEVBQ1YsYUFBYSxFQUNiLE1BQU0sRUFDTixXQUFXLEVBQ1gsV0FBVyxFQUNYLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLFdBQVcsRUFDWCxXQUFXLEVBQ1gsZUFBZSxFQUNmLFdBQVcsRUFDWCxRQUFRLEVBQ1IsU0FBUyxFQUNULFdBQVcsRUFDWCxVQUFVLEVBQ1YsU0FBUyxFQUNULFdBQVcsRUFDWCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFdBQVcsRUFDWCxXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixhQUFhLEVBQ2IsVUFBVSxFQUNWLFNBQVMsRUFDVCxVQUFVLEVBQ1YsUUFBUSxFQUNSLFlBQVksRUFDWixZQUFZLENBQUM7RUFFZmhSLGlEQUFTLENBQUMsWUFBTTtJQUNkLFNBQVNpUixPQUFPLEdBQUc7TUFDakIsSUFBSUMsSUFBSSxHQUFHRixVQUFVLENBQUNHLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxHQUFHTCxVQUFVLENBQUNwTyxNQUFNLENBQUMsQ0FBQztNQUNwRW9PLFVBQVUsQ0FBQ00sTUFBTSxDQUFDTixVQUFVLENBQUNPLE9BQU8sQ0FBQ0wsSUFBSSxDQUFDLENBQUM7TUFDM0MsT0FBT0EsSUFBSTtJQUNiO0lBRUEsSUFBSU0sS0FBSyxHQUFHUCxPQUFPLEVBQUU7SUFDckIsSUFBSVEsS0FBSyxHQUFHUixPQUFPLEVBQUU7SUFDckJKLFFBQVEsQ0FBQyxDQUFDVyxLQUFLLEVBQUVDLEtBQUssQ0FBQyxDQUFDO0VBQzFCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDTlgsUUFBUSxDQUFDOU0sT0FBTyxDQUFDLFVBQUNDLE9BQU8sRUFBSztJQUM1QixJQUFJSCxJQUFJLGdCQUNWO01BQUcsR0FBRyxFQUFFRyxPQUFPLENBQUM1RCxFQUFHO01BQUMsS0FBSyxFQUFFO1FBQUMrRCxjQUFjLEVBQUUsTUFBTTtRQUFFQyxLQUFLLEVBQUU7TUFBTyxDQUFFO01BQUMsSUFBSSw4QkFBdUJKLE9BQU8sQ0FBQzVELEVBQUUsY0FBSTRELE9BQU8sQ0FBQ2tELFNBQVM7SUFBRyxnQkFDakk7TUFFQSxLQUFLLEVBQUU7UUFBRXRDLE9BQU8sRUFBRSxPQUFPO1FBQUVDLFNBQVMsRUFBRSxRQUFRO1FBQUNWLGNBQWMsRUFBRSxNQUFNO1FBQUVDLEtBQUssRUFBRTtNQUFPLENBQUU7TUFDdkYsU0FBUyxFQUFDO0lBQU8sR0FFaEJKLE9BQU8sQ0FBQ2tELFNBQVMsQ0FDZixDQUdEO0lBQ0Q0SixJQUFJLENBQUMzTCxJQUFJLENBQUN0QixJQUFJLENBQUM7RUFDakIsQ0FBQyxDQUFDO0VBQ0YsSUFBSThNLEtBQUssQ0FBQ2hPLE1BQU0sR0FBRyxDQUFDLEVBQUU7SUFDcEIsb0JBQ0UseUlBQ0U7TUFBSyxTQUFTLEVBQUMsYUFBYTtNQUFDLEdBQUcsRUFBQztJQUFVLGdCQUN6QztNQUFPLFdBQVc7TUFBQyxRQUFRO01BQUMsS0FBSztNQUFDLElBQUk7SUFBQSxnQkFDcEM7TUFBUSxHQUFHLEVBQUMsMkJBQTJCO01BQUMsSUFBSSxFQUFDO0lBQVcsRUFBVSxDQUM1RCxlQUVSO01BQUssU0FBUyxFQUFDO0lBQWEsZ0JBQzFCO01BQUssU0FBUyxFQUFDO0lBQVMsZ0JBQ3RCO01BQUssU0FBUyxFQUFDO0lBQW1CLGdCQUNoQztNQUFLLFNBQVMsRUFBQyxpQkFBaUI7TUFBQyxZQUFTO0lBQVMsZ0JBQ2pELDREQUFDLG1EQUFJO01BQUMsRUFBRSxFQUFDO0lBQUcsZ0JBQ1Y7TUFDRSxHQUFHLEVBQUMsNEJBQTRCO01BQ2hDLEdBQUcsRUFBQyxNQUFNO01BQ1YsS0FBSyxFQUFFLEdBQUk7TUFDWCxTQUFTLEVBQUM7SUFBUSxFQUNsQixDQUNHLENBQ0gsZUFFTjtNQUFLLFNBQVMsRUFBQyxjQUFjO01BQUMsWUFBUztJQUFTLGdCQUM5QztNQUFJLFNBQVMsRUFBQztJQUFRLCtCQUF5QixlQUMvQztNQUNFLFNBQVMsRUFBQyxTQUFTO01BQ25CLEtBQUssRUFBRTtRQUFFLFNBQU8sT0FBTztRQUFFOEUsV0FBVyxFQUFFO01BQU87SUFBRSxnQkFFL0M7TUFBRyxLQUFLLEVBQUU7UUFBRWQsYUFBYSxFQUFFO01BQVksQ0FBRTtNQUFDLFNBQVMsRUFBQztJQUFPLEdBQ3hEZ0ssS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFLQSxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQUksR0FBRyxDQUMzQixlQUNKLDREQUFDLFNBQVM7TUFDUixRQUFRLEVBQUVILFlBQVksQ0FBQyxRQUFRO0lBQUUsZ0JBRWpDLDREQUFDLGdCQUFnQjtNQUNmLGlCQUFjLGlCQUFpQjtNQUMvQixFQUFFLEVBQUM7SUFBZ0IsZ0JBRW5CO01BQUcsS0FBSyxFQUFFO1FBQUVuTixTQUFTLEVBQUU7TUFBTTtJQUFFLHNCQUFvQixDQUNsQyxlQUNuQiw0REFBQyxnQkFBZ0IsUUFBRXlOLElBQUksQ0FBb0IsQ0FDakMsQ0FDUixDQUNGLENBQ0YsQ0FDRixDQUNGLENBQ0YsQ0FDTDtFQUVQO0FBQ0Y7QUFFQSxpRUFBZW1CLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyTEE7QUFDZ0I7QUFDSDtBQUd2QyxTQUFTQyxXQUFXLE9BQThCO0VBQUEsSUFBNUJyTCxJQUFJLFFBQUpBLElBQUk7SUFBRTZLLElBQUksUUFBSkEsSUFBSTtJQUFFL0MsS0FBSyxRQUFMQSxLQUFLO0lBQUV6RCxNQUFNLFFBQU5BLE1BQU07RUFDN0NwSSxPQUFPLENBQUNDLEdBQUcsQ0FBQzRMLEtBQUssQ0FBQztFQUNsQixJQUFJZ0QsT0FBTyxHQUFHVCxJQUFJLENBQUNVLElBQUksQ0FBQ2pELEtBQUssR0FBRyxFQUFFLENBQUM7RUFDbkMsSUFBSVAsR0FBRyxHQUFHeUQsUUFBUSxDQUFDSCxJQUFJLENBQUM7RUFDeEIsU0FBU0ksUUFBUSxDQUFDQyxNQUFNLEVBQUU7SUFDeEJsVCxRQUFRLENBQUNELFFBQVEsc0JBQWVtVCxNQUFNLENBQUU7RUFDMUM7RUFFQSxJQUFJbEUsR0FBRyxHQUFHLEVBQUU7RUFDWixLQUFLLElBQUk3SCxLQUFLLEdBQUcsQ0FBQyxFQUFFQSxLQUFLLEdBQUdhLElBQUksQ0FBQ2xFLE1BQU0sRUFBRXFELEtBQUssRUFBRSxFQUFFO0lBQzlDLElBQUluQyxJQUFJLGdCQUNOO01BQUssR0FBRyxFQUFFbUMsS0FBTTtNQUFDLFNBQVMsRUFBQztJQUF5QyxnQkFDbEU7TUFBSyxTQUFTLEVBQUM7SUFBUyxnQkFDeEI7TUFBRyxJQUFJLEVBQUUsVUFBVSxHQUFHYSxJQUFJLENBQUNiLEtBQUssQ0FBQyxDQUFDNUY7SUFBRyxnQkFDekM7TUFBSyxTQUFTLEVBQUM7SUFBYyxnQkFDOUI7TUFBRyxLQUFLLEVBQUU7UUFBRXNFLFFBQVEsRUFBRTtNQUFXLENBQUU7TUFBQyxTQUFTLEVBQUM7SUFBVSxHQUNyRG1DLElBQUksQ0FBQ2IsS0FBSyxDQUFDLENBQUNoQixPQUFPLENBQ2xCLEVBQ0g2QixJQUFJLENBQUNiLEtBQUssQ0FBQyxDQUFDN0UsTUFBTSxnQkFBSTtNQUNyQixLQUFLLEVBQUU7UUFBRXFELEtBQUssRUFBRSxNQUFNO1FBQUVDLE1BQU0sRUFBRSxNQUFNO1FBQUVRLFNBQVMsRUFBRTtNQUFRLENBQUU7TUFDN0QsR0FBRyxFQUFFLHNCQUFzQixHQUFHNEIsSUFBSSxDQUFDYixLQUFLLENBQUMsQ0FBQzdFLE1BQU87TUFDakQsR0FBRyxFQUFDO0lBQUUsRUFDTixnQkFBSztNQUFLLEtBQUssRUFBRTtRQUFDcUQsS0FBSyxFQUFFLE1BQU07UUFBRUMsTUFBTSxFQUFFLE1BQU07UUFBRVEsU0FBUyxFQUFFO01BQU8sQ0FBRTtNQUFDLEdBQUcsRUFBRSx5QkFBMEI7TUFBQyxHQUFHLEVBQUM7SUFBRSxFQUFHLENBQzFHLENBQ0UsQ0FDRSxDQUVUO0lBQ0Q0SSxHQUFHLENBQUMxSSxJQUFJLENBQUN0QixJQUFJLENBQUM7RUFDaEI7RUFDRixJQUFHcUgsTUFBTSxFQUFDO0lBRVIsb0JBQ0UsdUlBQ0EsMkRBQUMsb0RBQVE7TUFBQyxPQUFPLEVBQUMsOEJBQThCO01BQUMsSUFBSSxFQUFFO1FBQUU0QyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQUVDLEdBQUcsRUFBRTtNQUFFLENBQUU7TUFBQyxRQUFRLEVBQUU7SUFBSSxnQkFDeEY7TUFBSyxTQUFTLEVBQUMsTUFBTTtNQUFDLEdBQUcsRUFBQztJQUFRLGdCQUNoQztNQUFLLFNBQVMsRUFBQztJQUFNLGdCQUNuQjtNQUFLLFNBQVMsRUFBQztJQUFFLGdCQUNmO01BQUssU0FBUyxFQUFDO0lBQWtDLEdBQzlDRixHQUFHLENBQ0EsZUFDTjtNQUFLLFNBQVMsRUFBQywrQkFBK0I7TUFBQyxLQUFLLEVBQUU7UUFBRXJKLEtBQUssRUFBRSxNQUFNO1FBQUVDLE1BQU0sRUFBRTtNQUFPO0lBQUUsZ0JBQ3RGLDJEQUFDLHFEQUFVO01BQ1QsT0FBTyxFQUFFMkosR0FBSTtNQUNiLFFBQVEsRUFBRTBELFFBQVM7TUFDbkIsUUFBUSxFQUFFLENBQUU7TUFDWixLQUFLLEVBQUVILE9BQVE7TUFDZixTQUFTLEVBQUU7SUFBTSxFQUNqQixDQUNFLENBTUYsQ0FDRixDQUNGLENBQ0csQ0FDUjtFQUVQO0FBQ0Y7QUFFQSxpRUFBZU8sV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RWdDO0FBQ29EO0FBQ25GOztBQUUzQjtBQUM0QztBQUNKO0FBQ0U7QUFDRjtBQUNJO0FBQ1E7QUFDUjtBQUNKO0FBQ0E7QUFDRTtBQUNYO0FBQ0k7QUFDQTtBQUNNO0FBQ0M7QUFDcEI7QUFDSTtBQUNHO0FBSTdCLFNBQVNsVSxJQUFJLEdBQUc7RUFDZixnQkFBMEJnQyxnREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQS9CZSxLQUFLO0lBQUVDLFFBQVE7RUFDdEIsaUJBQTBCaEIsZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTtJQUEvQjJLLEtBQUs7SUFBRThILFFBQVE7RUFDdEIsaUJBQWdDelMsZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUF4Q08sUUFBUTtJQUFFQyxXQUFXO0VBQzVCVCxpREFBUyxDQUFDLFlBQU07SUFDZmdDLEtBQUsscUJBQW9CO01BQUNDLE1BQU0sRUFBQyxLQUFLO01BQUNDLE9BQU8sRUFBQztRQUFDQyxNQUFNLEVBQUUsa0JBQWtCO1FBQUMsY0FBYyxFQUFFO01BQWtCO0lBQUMsQ0FBQyxDQUFDLENBQy9HQyxJQUFJLENBQUMsVUFBQUMsR0FBRztNQUFBLE9BQUlBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO0lBQUEsRUFBQyxDQUN2QkYsSUFBSSxDQUNILFVBQUNHLE1BQU0sRUFBSztNQUNiUSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsTUFBTSxDQUFDO01BQ25COUIsV0FBVyxDQUFDLElBQUksQ0FBQztNQUNqQlEsUUFBUSxDQUFDc0IsTUFBTSxDQUFDO0lBQ2YsQ0FBQztJQUNEO0lBQ0E7SUFDQTtJQUNBLFVBQUNqQyxLQUFLLEVBQUs7TUFDWnlDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDMUMsS0FBSyxDQUFDO0lBQ2pCLENBQUMsQ0FDRjs7SUFFRDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNDLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFUixJQUFHRSxRQUFRLElBQUksS0FBSyxJQUFJMUIsUUFBUSxDQUFDc0UsVUFBVSxLQUFLLFVBQVUsRUFBRTtJQUMzRCxvQkFDQyx5SUFDQztNQUFLLEVBQUUsRUFBQyxhQUFhO01BQUMsS0FBSyxFQUFDLEtBQUs7TUFBQyxNQUFNLEVBQUMsS0FBSztNQUFDLE9BQU8sRUFBQztJQUFhLGdCQUNuRTtNQUFVLFNBQVMsRUFBQyw0QkFBNEI7TUFBQyxNQUFNLEVBQUMsbUJBQW1CO01BQUMsV0FBVyxFQUFDLElBQUk7TUFBQyxJQUFJLEVBQUM7SUFBTSxFQUFZLGVBQ3BIO01BQVUsU0FBUyxFQUFDLDRCQUE0QjtNQUFDLE1BQU0sRUFBQyxtQkFBbUI7TUFBQyxXQUFXLEVBQUMsSUFBSTtNQUFDLElBQUksRUFBQztJQUFNLEVBQVksZUFDcEg7TUFBVSxTQUFTLEVBQUMsZ0NBQWdDO01BQUMsTUFBTSxFQUFDLG1CQUFtQjtNQUFDLFdBQVcsRUFBQyxJQUFJO01BQUMsSUFBSSxFQUFDO0lBQU0sRUFBWSxlQUN4SDtNQUFVLFNBQVMsRUFBQyxnQ0FBZ0M7TUFBQyxNQUFNLEVBQUMsbUJBQW1CO01BQUMsV0FBVyxFQUFDLElBQUk7TUFBQyxJQUFJLEVBQUM7SUFBTSxFQUFZLENBQ25ILENBQ0o7RUFFTCxDQUFDLE1BQUk7SUFDSixvQkFDQyx5SUFDQSw0REFBQyxnREFBTSxPQUFVLGVBQ2pCLDREQUFDLGtEQUFRLE9BQVksZUFDckIsNERBQUMscURBQVcsT0FBZSxlQUMzQiw0REFBQyxrREFBUSxPQUFZLGVBR3BCLDREQUFDLGtEQUFPO01BQUMsSUFBSSxFQUFDLG9CQUFvQjtNQUFDLFNBQVMsRUFBQztJQUFTLGdCQUVyRCw0REFBQywyREFBUSxPQUFhLENBRWIsZUFHViw0REFBQyx1REFBUSxPQUFhLGVBS3RCLDREQUFDLGtEQUFPO01BQUMsSUFBSSxFQUFDLG9CQUFvQjtNQUFDLFNBQVMsRUFBQztJQUFTLGdCQUVyRCw0REFBQywwREFBTyxPQUFZLENBRVgsZUFHViw0REFBQyxrREFBTztNQUFDLElBQUksRUFBQyxvQkFBb0I7TUFBQyxTQUFTLEVBQUM7SUFBUyxnQkFDckQsNERBQUMseURBQU0sT0FBVyxDQUNULGVBRVYsNERBQUMsa0RBQU87TUFBQyxJQUFJLEVBQUMsb0JBQW9CO01BQUMsU0FBUyxFQUFDO0lBQVMsZ0JBRXJELDREQUFDLDJEQUFRO01BQUMsSUFBSSxFQUFFcEM7SUFBTSxFQUFZLENBRXpCLGVBRVYsNERBQUMsa0RBQU87TUFBQyxJQUFJLEVBQUMsb0JBQW9CO01BQUMsU0FBUyxFQUFDO0lBQVMsZ0JBRXJELDREQUFDLCtEQUFZLE9BQWlCLENBRXJCLGVBRVYsNERBQUMsa0RBQU87TUFBQyxJQUFJLEVBQUMsb0JBQW9CO01BQUMsU0FBUyxFQUFDO0lBQVMsZ0JBRXBELDREQUFDLDJEQUFRLE9BQWEsQ0FFZCxlQUVWLDREQUFDLGtEQUFPO01BQUMsSUFBSSxFQUFDLG9CQUFvQjtNQUFDLFNBQVMsRUFBQztJQUFTLGdCQUVyRCw0REFBQyx5REFBTSxPQUFXLENBRVQsZUFFViw0REFBQyxrREFBTztNQUFDLElBQUksRUFBQyxvQkFBb0I7TUFBQyxTQUFTLEVBQUM7SUFBUyxnQkFFcEQsNERBQUMsd0RBQVMsT0FBYyxDQUVoQixlQUlWLDREQUFDLHlEQUFNLE9BQVcsQ0FJaEI7RUFFTDtBQUVEO0FBQ0EsaUVBQWUvQyxJQUFJOzs7Ozs7Ozs7Ozs7OztBQ2xKbkIsU0FBUzZKLFdBQVcsR0FBRztFQUN0QixvQkFDQyx1REFFRDtJQUFLLFNBQVMsRUFBQyxPQUFPO0lBQUMsWUFBUyxTQUFTO0lBQUMscUJBQWtCO0VBQU0sZ0JBQ2pFO0lBQUssU0FBUyxFQUFDO0VBQU8sRUFBTyxlQUM3QjtJQUFLLFNBQVMsRUFBQztFQUFrQixFQUFPLENBQ25DLENBQ0Y7QUFFTDtBQUVBLGlFQUFlQSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQ1oxQixTQUFTRCxRQUFRLEdBQUc7RUFDbkIsSUFBSThLLEtBQUssR0FBRyxJQUFJQyxLQUFLLENBQUMsMkJBQTJCLENBQUM7RUFFbEQsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQUssR0FBUztJQUNsQkYsS0FBSyxDQUFDRyxJQUFJLEVBQUU7RUFDZCxDQUFDO0VBQ0Qsb0JBQ0MsdURBQ0M7SUFBSyxTQUFTLEVBQUMsT0FBTztJQUFFLFlBQVM7RUFBVyxnQkFDM0M7SUFBSyxTQUFTLEVBQUMsT0FBTztJQUFBLE9BQU8sRUFBRUQ7RUFBTSxFQUFPLGVBQzVDO0lBQUssU0FBUyxFQUFDO0VBQWlCLEVBQVEsQ0FDbkMsQ0FDSjtBQUVMO0FBRUEsaUVBQWVoTCxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRDtBQUNJO0FBQ2M7QUFDVjtBQUU5QixTQUFTa0wsTUFBTSxHQUFHO0VBRWhCdE0sZ0RBQVEsRUFBRTtFQUNWLGdCQUFzQ3hHLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBM0MrUyxXQUFXO0lBQUVDLGNBQWM7RUFDbEMsSUFBTXhDLFlBQVksR0FBRyxTQUFmQSxZQUFZLENBQUluTSxDQUFDLEVBQUs7SUFDMUJBLENBQUMsQ0FBQ3VFLGNBQWMsRUFBRTtJQUNsQm9LLGNBQWMsQ0FBQzNPLENBQUMsQ0FBQ2UsTUFBTSxDQUFDcUQsS0FBSyxDQUFDO0VBQ2hDLENBQUM7RUFFRCxJQUFNd0ssUUFBUSxHQUFHLFNBQVhBLFFBQVEsQ0FBSTVPLENBQUMsRUFBSztJQUN0QkEsQ0FBQyxDQUFDdUUsY0FBYyxFQUFFO0lBQ2xCaEssUUFBUSxDQUFDc1UsT0FBTyxDQUFDLFVBQVUsR0FBR0gsV0FBVyxDQUFDO0lBQzFDO0VBQ0YsQ0FBQzs7RUFFRixvQkFDQyx1REFFRTtJQUFPLEVBQUUsRUFBQyxjQUFjO0lBQUMsSUFBSSxFQUFDO0VBQVUsRUFBSSxlQUUxQztJQUFPLFNBQVMsRUFBQyxXQUFXO0lBQUMsT0FBTyxFQUFDLGNBQWM7SUFBQyxZQUFTLFdBQVc7SUFBQyxxQkFBa0I7RUFBTSxnQkFDL0YsaUNBQWEsQ0FDUCxlQUVSO0lBQUksU0FBUyxFQUFDLFdBQVc7SUFBQyxZQUFTO0VBQVksZ0JBQzdDO0lBQU0sUUFBUSxFQUFFRTtFQUFTLGdCQUN2QjtJQUFLLEtBQUssRUFBRTtNQUFDek8sS0FBSyxFQUFFO0lBQUssQ0FBRTtJQUFDLFNBQVMsRUFBQztFQUFxQyxnQkFDekU7SUFBTyxJQUFJLEVBQUMsT0FBTztJQUFDLElBQUksRUFBQyxJQUFJO0lBQUMsU0FBUyxFQUFDLGFBQWE7SUFBQyxXQUFXLEVBQUMsTUFBTTtJQUFDLEVBQUUsRUFBQyxPQUFPO0lBQUMsS0FBSyxFQUFFdU8sV0FBWTtJQUFDLFFBQVEsRUFBRXZDLFlBQWE7SUFBQyxRQUFRO0VBQUEsRUFBUyxlQUNqSjtJQUFPLE9BQU8sRUFBQyxNQUFNO0lBQUMsU0FBUyxFQUFDO0VBQWEsZUFBa0IsQ0FDM0QsQ0FDQyxlQUNUO0lBQUksU0FBUyxFQUFDO0VBQWlDLGdCQUFDLG9CQUFDLG1EQUFJO0lBQUMsU0FBUyxFQUFDLHFCQUFxQjtJQUFDLEVBQUUsRUFBQztFQUFHLGFBQWUsQ0FBSyxlQUNoSDtJQUFJLFNBQVMsRUFBQztFQUFpQyxnQkFBQyxvQkFBQyxtREFBSTtJQUFDLFNBQVMsRUFBQyxVQUFVO0lBQUMsRUFBRSxFQUFDO0VBQVksYUFBZSxDQUFLLGVBQzlHO0lBQUksU0FBUyxFQUFDO0VBQWlDLGdCQUFDLG9CQUFDLG1EQUFJO0lBQUMsU0FBUyxFQUFDLFVBQVU7SUFBQyxFQUFFLEVBQUM7RUFBWSxhQUFlLENBQUssZUFDOUc7SUFBSSxTQUFTLEVBQUM7RUFBaUMsZ0JBQUMsb0JBQUMsbURBQUk7SUFBQyxTQUFTLEVBQUMsVUFBVTtJQUFDLEVBQUUsRUFBQztFQUFVLGFBQWUsQ0FBSyxlQUM1RztJQUFHLFNBQVMsRUFBQyx5QkFBeUI7SUFBQyxJQUFJLEVBQUM7RUFBUSxnQkFBQztJQUFJLFNBQVMsRUFBQztFQUEyQixXQUFXLENBQUksQ0FDMUcsQ0FDTjtBQUVMO0FBRUEsaUVBQWVzQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q0k7QUFDSDtBQUV0QixTQUFTbkwsUUFBUSxHQUFHO0VBQ25CbkIsK0NBQVEsQ0FBQztJQUFDMk0sSUFBSSxFQUFFO0VBQUssQ0FBQyxDQUFDO0VBQ3ZCLG9CQUNDLHVJQUNBO0lBQUssU0FBUyxFQUFDLDRCQUE0QjtJQUFDLFlBQVMsU0FBUztJQUFDLHFCQUFrQjtFQUFNLGdCQUN0RjtJQUFHLFNBQVMsRUFBQyxJQUFJO0lBQUMsSUFBSSxFQUFDO0VBQXdDLEVBQUssZUFDcEU7SUFBRyxTQUFTLEVBQUMsT0FBTztJQUFDLElBQUksRUFBQztFQUErQyxFQUFLLGVBQzlFO0lBQUcsU0FBUyxFQUFDLFVBQVU7SUFBQyxJQUFJLEVBQUM7RUFBaUQsRUFBSyxDQUM5RSxDQUNIO0FBRUw7QUFFQSxpRUFBZXhMLFFBQVE7Ozs7Ozs7Ozs7O0FDaEJ2Qjs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NsaWVudHBhZ2UvX2NsaWVudHBhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NsaWVudHBhZ2UvX2NsaWVudHBhZ2U2XzUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NsaWVudHBhZ2UvX2NsaWVudHBhZ2VGaXZlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DbGllbnRwYWdlL19jbGllbnRwYWdlRm91ci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2xpZW50cGFnZS9fY2xpZW50cGFnZU9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2xpZW50cGFnZS9fY2xpZW50cGFnZVNpeC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2xpZW50cGFnZS9fY2xpZW50cGFnZVRocmVlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DbGllbnRwYWdlL19jbGllbnRwYWdlVHdvLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Db250YWN0cGFnZS9fY29udGFjdHBhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NvbnRhY3RwYWdlL19jb250YWN0cGFnZU9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZXBhZ2UvX2FjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZXBhZ2UvX2NoaWZmcmVzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ib21lcGFnZS9fY3JlYXRpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL19lbW90aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ib21lcGFnZS9fZm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ib21lcGFnZS9faG9tZXBhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL19pbnN0YS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZXBhZ2UvX21pbmlGb290ZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL19zYXRpc2ZhY3Rpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL192aXNpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL193b3JkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Qcm9qZWN0cGFnZS9fcHJvamVjdHBhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1Byb2plY3RwYWdlL19wcm9qZWN0cGFnZUZpdmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1Byb2plY3RwYWdlL19wcm9qZWN0cGFnZUZvdXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1Byb2plY3RwYWdlL19wcm9qZWN0cGFnZU9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUHJvamVjdHBhZ2UvX3Byb2plY3RwYWdlU2l4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Qcm9qZWN0cGFnZS9fcHJvamVjdHBhZ2VUaHJlZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUHJvamVjdHBhZ2UvX3Byb2plY3RwYWdlVHdvLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TZWFyY2hQYWdlMi9fU2VhcmNoUGFnZTIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1NlYXJjaFBhZ2UyL19TZWFyY2hQYWdlT25lMi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU2VhcmNoUGFnZTIvX1NlYXJjaFBhZ2VUd28yLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TZWFyY2hQYWdlL19TZWFyY2hQYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TZWFyY2hQYWdlL19TZWFyY2hQYWdlT25lLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TZWFyY2hQYWdlL19TZWFyY2hQYWdlVHdvLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Xb3JrcGFnZUNsaWVudC9fd29ya3BhZ2VDbGllbnQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1dvcmtwYWdlQ2xpZW50L193b3JrcGFnZUNsaWVudE9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvV29ya3BhZ2VDbGllbnQvX3dvcmtwYWdlQ2xpZW50VHdvLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Xb3JrcGFnZS9fd29ya3BhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1dvcmtwYWdlL193b3JrcGFnZU9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvV29ya3BhZ2UvX3dvcmtwYWdlVHdvLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9faG9tZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvX2xpbmVzQm90dG9tLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9fbGluZXNUb3AuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL19uYXZiYXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL19yc0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcnJvdy5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9mb250LmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2xvYWRlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlc2hlZXRzL2J1bG1hL2VsZW1lbnRzL2NvbnRhaW5lci5zYXNzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXNoZWV0cy9idWxtYS9ncmlkL2NvbHVtbnMuc2FzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzaGVldHMvYnVsbWEvaGVscGVycy9zcGFjaW5nLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlc2hlZXRzL21haW4uc2FzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzaGVldHMvcGFnaW5hdGlvbi5sZXNzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlcywgUm91dGUsIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0ICcuL3N0eWxlc2hlZXRzL21haW4uc2Fzcyc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9faG9tZS5qc3gnO1xyXG5pbXBvcnQgV29ya3BhZ2UgZnJvbSAnLi9jb21wb25lbnRzL1dvcmtwYWdlL193b3JrcGFnZSc7XHJcbmltcG9ydCBXb3JrcGFnZUNsaWVudCBmcm9tICcuL2NvbXBvbmVudHMvV29ya3BhZ2VDbGllbnQvX3dvcmtwYWdlQ2xpZW50JztcclxuaW1wb3J0IENvbnRhY3RQYWdlIGZyb20gJy4vY29tcG9uZW50cy9Db250YWN0cGFnZS9fY29udGFjdHBhZ2UnO1xyXG5pbXBvcnQgQ2xpZW50UGFnZSBmcm9tICcuL2NvbXBvbmVudHMvQ2xpZW50cGFnZS9fY2xpZW50cGFnZSc7XHJcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvamVjdHBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL1Byb2plY3RwYWdlL19wcm9qZWN0cGFnZSc7XHJcbmltcG9ydCBTZWFyY2hQYWdlIGZyb20gJy4vY29tcG9uZW50cy9TZWFyY2hQYWdlL19TZWFyY2hQYWdlJztcclxuaW1wb3J0IFNlYXJjaFBhZ2UyIGZyb20gJy4vY29tcG9uZW50cy9TZWFyY2hQYWdlMi9fU2VhcmNoUGFnZTInOyBcclxuaW1wb3J0IFwiLi9zdHlsZXNoZWV0cy9idWxtYS9ncmlkL2NvbHVtbnMuc2Fzc1wiIFxyXG5pbXBvcnQgXCIuL3N0eWxlc2hlZXRzL2J1bG1hL2hlbHBlcnMvc3BhY2luZy5zYXNzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuaW1wb3J0IFwiLi9zdHlsZXMvbG9hZGVyLmNzc1wiXHJcbmltcG9ydCAnLi9zdHlsZXNoZWV0cy9idWxtYS9ncmlkL2NvbHVtbnMuc2Fzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXNoZWV0cy9idWxtYS9oZWxwZXJzL3NwYWNpbmcuc2Fzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXNoZWV0cy9wYWdpbmF0aW9uLmxlc3MnIFxyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgV3JhcHBlciA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICB9LCBbbG9jYXRpb24ucGF0aG5hbWVdKTtcclxuICAgIHJldHVybiBjaGlsZHJlblxyXG4gIH07IFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICA8V3JhcHBlcj5cclxuICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9wcm9qZXRzLzpuYnJcIiBlbGVtZW50PXs8V29ya3BhZ2UgLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9jbGllbnRzLzpuYnJcIiBlbGVtZW50PXs8V29ya3BhZ2VDbGllbnQgLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9jb250YWN0XCIgZWxlbWVudD17PENvbnRhY3RQYWdlIC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvY2xpZW50LzppZFwiIGVsZW1lbnQ9ezxDbGllbnRQYWdlIC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvcHJvamV0LzppZFwiIGVsZW1lbnQ9ezxQcm9qZWN0cGFnZSAvPn0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3NlYXJjaC86aW5mb1wiIGVsZW1lbnQ9ezxTZWFyY2hQYWdlIC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvc2VhcmNoY2F0Lzp0eXBlLzppbmZvLzpuYW1lXCIgZWxlbWVudD17PFNlYXJjaFBhZ2UyIC8+fSAvPlxyXG4gICAgICAgIDwvUm91dGVzPlxyXG4gICAgICA8L1dyYXBwZXI+XHJcbiAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjsgXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi9NYWluLmpzJztcclxud2luZG93LlJlYWN0ID0gUmVhY3RcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcclxuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxucm9vdC5yZW5kZXIoXHJcblxyXG4gICAgPE1haW4gLz5cclxuXHJcbik7XHJcblxyXG4iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL19uYXZiYXInO1xyXG5pbXBvcnQgQ2xpZW50UGFnZU9uZSBmcm9tIFwiLi9fY2xpZW50cGFnZU9uZVwiO1xyXG5pbXBvcnQgQ2xpZW50cGFnZVR3byBmcm9tICcuL19jbGllbnRwYWdlVHdvJztcclxuaW1wb3J0IENsaWVudHBhZ2VUaHJlZSBmcm9tICcuL19jbGllbnRwYWdlVGhyZWUnO1xyXG5pbXBvcnQgQ2xpZW50cGFnZUZvdXIgZnJvbSAnLi9fY2xpZW50cGFnZUZvdXInO1xyXG5pbXBvcnQgQ2xpZW50cGFnZUZpdmUgZnJvbSAnLi9fY2xpZW50cGFnZUZpdmUnO1xyXG5pbXBvcnQgQ2xpZW50cGFnZVNpeCBmcm9tICcuL19jbGllbnRwYWdlU2l4JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcbmltcG9ydCBDbGllbnRwYWdlNl81IGZyb20gJy4vX2NsaWVudHBhZ2U2XzUnO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvbG9hZGVyLmNzc1wiXHJcbmltcG9ydCBNaW5pRm9vdGVyIGZyb20gJy4uL0hvbWVwYWdlL19taW5pRm9vdGVyJztcclxuXHJcbmZ1bmN0aW9uIENsaWVudHBhZ2UoKSB7XHJcblx0Y29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNMb2FkZWRJbWcsIHNldElzTG9hZGVkSW1nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNMb2FkZWROZXh0UHJldiwgc2V0SXNMb2FkZWROZXh0UHJldl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzSW1nUmVhZHksIHNldEltZ1JlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtoZWFkZXIsIHNldEhlYWRlcl0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW3ByZWNpLCBzZXRQcmVjaV0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW3NlY29uZCwgc2V0U2Vjb25kXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbTmV4dFByZXYsIHNldE5leHRQcmV2XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbUHJvamVjdCwgc2V0UHJvamVjdF0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2lzTG9hZGVkUHJvamVjdCwgc2V0SXNMb2FkZWRQcm9qZWN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRpZihpZCl7XHJcblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0XHRmZXRjaChgL2FwaS9jbGllbnRzLyR7aWR9YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRJdGVtcyhyZXN1bHQpO1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHRcdC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0XHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHJcblx0XHRcdGZldGNoKGAvZ2V0SW1hZ2VzQ2xpZW50LyR7aWR9YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRsZXQgdGhpc1JlcyA9IEpTT04ucGFyc2UocmVzdWx0KVxyXG5cdFx0XHRcdHNldElzTG9hZGVkSW1nKHRydWUpO1xyXG5cdFx0XHRcdHNldEltYWdlcyhKU09OLnBhcnNlKHJlc3VsdCkpO1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2codGhpc1JlcylcclxuXHRcdFx0XHRpZih0aGlzUmVzKXtcclxuXHRcdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzUmVzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpc1Jlc1tpXSlcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coaSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlc1tpXS5oZWFkZXIpXHJcblx0XHRcdFx0XHRcdFx0c2V0SGVhZGVyKHRoaXNSZXNbaV0pXHJcblx0XHRcdFx0XHRcdGlmKHRoaXNSZXNbaV0uaW1hZ2VwcmVjaXNpb24pXHJcblx0XHRcdFx0XHRcdFx0c2V0UHJlY2kodGhpc1Jlc1tpXSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlc1tpXS5zZWNvbmRhaXJlKVxyXG5cdFx0XHRcdFx0XHRcdHNldFNlY29uZCh0aGlzUmVzW2ldKVxyXG5cdFx0XHRcdFx0XHQvLyBpZihpbWFnZXNbaV0udmlzaWJsZSlcclxuXHRcdFx0XHRcdFx0Ly8gXHRzZXREaXNwbGF5KC4uLmltYWdlc1tpXSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlcy5sZW5ndGgtMSA9PSBpKXtcclxuXHRcdFx0XHRcdFx0XHRzZXRJbWdSZWFkeSh0cnVlKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKHRoaXNSZXMubGVuZ3RoID09IDApe1xyXG5cdFx0XHRcdFx0c2V0SW1nUmVhZHkodHJ1ZSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0XHRmZXRjaChgL05leFByZXYvJHtpZH1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdGxldCBOZXh0ID0gSlNPTi5wYXJzZShyZXN1bHRbMF0pXHJcblx0XHRcdFx0bGV0IFByZXYgPSBKU09OLnBhcnNlKHJlc3VsdFsxXSlcclxuXHRcdFx0XHRpZihOZXh0ICYmIFByZXYpe1xyXG5cdFx0XHRcdFx0c2V0TmV4dFByZXYoW05leHQsIFByZXZdKTtcclxuXHRcdFx0XHRcdGlmKE5leHRQcmV2KXtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coTmV4dFByZXYpXHJcblx0XHRcdFx0XHRcdHNldElzTG9hZGVkTmV4dFByZXYodHJ1ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdFx0ZmV0Y2goYC9nZXR0QWxsUHJvamVjdEJ5Q2xpZW50LyR7aWR9YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZFByb2plY3QodHJ1ZSk7XHJcblx0XHRcdFx0c2V0UHJvamVjdChyZXN1bHQpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHR9LCBbXSlcclxuXHR9XHJcblxyXG5cdGlmIChlcnJvcikge1xyXG5cdFx0IHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcblx0ICB9IGVsc2UgaWYgKCFpc0xvYWRlZCB8fCAhaXNJbWdSZWFkeSB8fCAhaXNMb2FkZWROZXh0UHJldiB8fCAhaXNMb2FkZWRQcm9qZWN0IHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdjb21wbGV0ZScpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PHN2ZyBpZD1cIlJlYWN0TG9hZGVyXCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1zdGlsbFwiIHBvaW50cz1cIjAsMCAxMDAsMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1zdGlsbFwiIHBvaW50cz1cIjAsMCAwLDEwMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1hbmltYXRpb25cIiBwb2ludHM9XCIwLDAgMTAwLDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2UtYW5pbWF0aW9uXCIgcG9pbnRzPVwiMCwwIDAsMTAwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0ICB9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpdGVtc1wiKVxyXG5cdFx0Y29uc29sZS5sb2coaXRlbXMpXHJcblx0XHRcdHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxOYXZiYXI+PC9OYXZiYXI+XHJcbiAgICAgICAgICA8Q2xpZW50UGFnZU9uZSBkYXRhPXtpdGVtc30+PC9DbGllbnRQYWdlT25lPlxyXG4gICAgICAgICAgPENsaWVudHBhZ2VUd28gZGF0YT17aXRlbXN9PjwvQ2xpZW50cGFnZVR3bz5cclxuICAgICAgICAgIDxDbGllbnRwYWdlVGhyZWUgZGF0YT17c2Vjb25kfT48L0NsaWVudHBhZ2VUaHJlZT5cclxuICAgICAgICAgIDxDbGllbnRwYWdlRm91ciBwcmVjaT17cHJlY2l9IGRhdGEyPXtpdGVtc30+PC9DbGllbnRwYWdlRm91cj5cclxuICAgICAgICAgIDxDbGllbnRwYWdlRml2ZSBpbWFnZXM9e2ltYWdlc30+PC9DbGllbnRwYWdlRml2ZT5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy82V3ZlbW0zSy5qcGVnKVwiIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbWlibG9jT3BhY2l0eVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXIgbWFyZ2luVG9wU1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjBcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1lZGl1bSBjZW50ZXJUZXh0XCI+VU4gVMOJTU9JR05BR0U8L2g0PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpZ2h0IGNlbnRlclRleHRcIlxyXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBpdGVtcy50ZW1vaWduYWdlIH19XHJcbiAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPENsaWVudHBhZ2U2XzUgaXRlbT17UHJvamVjdH0+PC9DbGllbnRwYWdlNl81PlxyXG4gICAgICAgICAgPENsaWVudHBhZ2VTaXggZGF0YT17aXRlbXN9IG5wPXtOZXh0UHJldn0+PC9DbGllbnRwYWdlU2l4PlxyXG5cdFx0ICA8TWluaUZvb3RlciBsb2FkZWQ9e3RydWV9PjwvTWluaUZvb3Rlcj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRwYWdlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcclxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1wYXJhbGxheCc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBDbGllbnRwYWdlNl81KGl0ZW0pIHtcclxuICBsZXQgc2xpZGVyID0gW11cclxuICBjb25zb2xlLmxvZyhpdGVtKVxyXG4gIGlmKGl0ZW0uaXRlbS5sZW5ndGggPjApIHtcclxuICAgIGl0ZW0uaXRlbS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xyXG4gICAgICAgIGxldCBuZXdTbGlkZXIgPSB1bmRlZmluZWRcclxuICAgICAgICBpZihlbGVtZW50LmhlYWRlcil7XHJcbiAgICAgICAgICAgIG5ld1NsaWRlciA9IChcclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtlbGVtZW50LmlkfSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcHJvamV0LyR7ZWxlbWVudC5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50Lm1pc3Npb259XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzL2ltYWdlcHJvamV0LyR7ZWxlbWVudC5oZWFkZXJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgKTsgICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbmV3U2xpZGVyID0gKFxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2VsZW1lbnQuaWR9IGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj17YC9wcm9qZXQvJHtlbGVtZW50LmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjMDIxMTFEXCIsfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5taXNzaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvbnRhaW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgKTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgc2xpZGVyLnB1c2gobmV3U2xpZGVyKSBcclxuICAgIH0pO1xyXG4gIH1lbHNle1xyXG4gICAgc2xpZGVyID0gKCA8aDEgY2xhc3NOYW1lPVwidGl0cmVBIG1lZGl1bSBsZXR0ZXJTcGFjaW5nIG1hcmdpblN0b3BcIj5yaWVuIGEgdm9pcjwvaDE+IClcclxuICB9XHJcbiAgZnVuY3Rpb24gQmx1ckRldGFpbChlKXtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cig0cHgpXCI7XHJcbiAgICBlLnRhcmdldC5jaGlsZHJlblswXS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIlxyXG4gIH1cclxuICBmdW5jdGlvbiBSZW1vdmVCbHVyRGV0YWlsKGUpe1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gXCJibHVyKDApXCI7XHJcbiAgICBlLnRhcmdldC5jaGlsZHJlblswXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICB9XHJcbiAgaWYoc2xpZGVyLmxlbmd0aCA+IDApe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICB7LyogPGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCJ9fSBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XHJcbiAgXHJcbiAgICAgICAgICA8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmc0Lm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuICAgICAgICAgIDwvdmlkZW8+ICovfVxyXG4gICAgICAgIHsvKiA8RWxlbWVudCBuYW1lPVwic2Nyb2xsLXRvLWVsZW1lbnQ0XCIgY2xhc3NOYW1lPVwiZWxlbWVudFwiPjwvRWxlbWVudD4gKi99XHJcbiAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9aMXpJSkNLay5qcGVnXCIgc3RyZW5ndGg9ezgwMH0+XHJcbiAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17e3BhZGRpbmdUb3A6ICc1MHB4JyxwYWRkaW5nQm90dG9tOiAnNzVweCd9fT5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgIC8vICAgZGF0YS1hb3M9XCJ6b29tLWluXCJcclxuICAgICAgICAgIC8vICAgZGF0YS1hb3MtbWlycm9yPVwiXCJcclxuICAgICAgICAgIC8vICAgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCJcclxuICAgICAgICAgIC8vICAgZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudD1cIlwiXHJcbiAgICAgICAgICAvLyAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlcjJcIj5cclxuICAgICAgICAgICAgICA8aDNcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdHJlQSBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5TdG9wIG1iLTVcIlxyXG4gICAgICAgICAgICAgIC8vICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICAvLyAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUFJPSkVUUyBMScOJU1xyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgXHJcbiAgICAgICAgICAgICAgPFN3aXBlclxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnNTAwcHgnfX1cclxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9ezF9XHJcbiAgICAgICAgICAgICAgICBjZW50ZXJlZFNsaWRlcz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW49ezB9XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50cz17e1xyXG4gICAgICAgICAgICAgICAgICA2NDA6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0MCxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgMTAyNDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDcsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3aXBlcjJcIlxyXG4gICAgICAgICAgICAgIC8vICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICAvLyAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3NsaWRlcn1cclxuICAgICAgICAgICAgICAgIHsvKiA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzFdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy9fRFNDMTMwMC5qcGdgfSBhbHQ9XCJcIiAvPjwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCIgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9IG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX0+PGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+PHAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgZGlzcGxheTogXCJub25lXCIsIHdpZHRoOiBcIjIwMHB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCIwcHhcIiwgdG9wOlwiMjAwcHhcIn19PntpdGVtLml0ZW1bMl0ubWlzc2lvbn08L3A+PC9kaXY+PGltZyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17YC96ZW5pdGgvaW1hZ2VzLzFKNEE1MDA5ICgxKS5qcGdgfSBhbHQ9XCJcIiAvPjwvZGl2PiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzNdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy9DYXB0dXJlIGTigJnDqWNyYW4gMjAyMi0xMi0wMyDDoCAyMS4zMy4yOS5wbmdgfSBhbHQ9XCJcIiAvPjwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCIgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9IG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX0+PGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+PHAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgZGlzcGxheTogXCJub25lXCIsIHdpZHRoOiBcIjIwMHB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCIwcHhcIiwgdG9wOlwiMjAwcHhcIn19PntpdGVtLml0ZW1bNF0ubWlzc2lvbn08L3A+PC9kaXY+PGltZyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17YC96ZW5pdGgvaW1hZ2VzL0lNR183NDg3LmpwZ2B9IGFsdD1cIlwiIC8+PC9kaXY+ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCIgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9IG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX0+PGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+PHAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgZGlzcGxheTogXCJub25lXCIsIHdpZHRoOiBcIjIwMHB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCIwcHhcIiwgdG9wOlwiMjAwcHhcIn19PntpdGVtLml0ZW1bNV0ubWlzc2lvbn08L3A+PC9kaXY+PGltZyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17YC96ZW5pdGgvaW1hZ2VzL0lNR18wMDA0LmpwZ2B9IGFsdD1cIlwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVs0XS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgL3plbml0aC9pbWFnZXMvSU1HXzk4MzguanBnYH0gYWx0PVwiXCIgLz48L2Rpdj4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVs1XS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgL3plbml0aC9pbWFnZXMvRElBXzA3NTkuanBnYH0gYWx0PVwiXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+ICovfVxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9QYXJhbGxheD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50cGFnZTZfNTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSBcInJlYWN0LXBhcmFsbGF4XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzaGVldHMvYnVsbWEvZWxlbWVudHMvY29udGFpbmVyLnNhc3NcIlxyXG5pbXBvcnQgTGlnaHRib3ggZnJvbSBcInlldC1hbm90aGVyLXJlYWN0LWxpZ2h0Ym94XCI7XHJcbmltcG9ydCBUaHVtYm5haWxzIGZyb20gXCJ5ZXQtYW5vdGhlci1yZWFjdC1saWdodGJveC9wbHVnaW5zL3RodW1ibmFpbHNcIjtcclxuaW1wb3J0IFwieWV0LWFub3RoZXItcmVhY3QtbGlnaHRib3gvcGx1Z2lucy90aHVtYm5haWxzLmNzc1wiO1xyXG5pbXBvcnQgXCJ5ZXQtYW5vdGhlci1yZWFjdC1saWdodGJveC9zdHlsZXMuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBDbGllbnRwYWdlRml2ZShpbWFnZXMpIHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgbGV0IGFycmF5SW1hZ2UgPSBbXVxyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbWFnZXMuaW1hZ2VzLmxlbmd0aDsgaW5kZXgrKykge1xyXG5cdCAgY29uc3QgZWxlbWVudCA9IGltYWdlcy5pbWFnZXNbaW5kZXhdO1xyXG5cdCAgaWYoZWxlbWVudC52aXNpYmxlID09IGZhbHNlKXtcclxuXHRcdGNvbnRpbnVlO1xyXG5cdCB9XHJcblx0IGxldCBpdGVtID0geyBzcmM6IGAvaW1hZ2VzL2ltYWdlY2xpZW50LyR7ZWxlbWVudC5pbWFnZX1gfVxyXG5cdCBhcnJheUltYWdlLnB1c2goaXRlbSlcdCAgXHJcbiAgfVxyXG5cclxuXHJcbiAgaWYoYXJyYXlJbWFnZS5sZW5ndGg+MCl7XHJcbiAgICBjb25zb2xlLmxvZyhcImZpcnN0XCIpXHJcbiAgICBjb25zb2xlLmxvZyhhcnJheUltYWdlKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL1oxeklKQ0trLmpwZWdcIiBzdHJlbmd0aD17ODAwfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCIxMDAlXCIsIGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIn19PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLWNlbnRlcmVkXCIgc3R5bGU9e3toZWlnaHQ6XCI5MCVcIix3aWR0aDpcIjgwJVwiLCBwYWRkaW5nVG9wOlwiNTBweFwifX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtb25lLXRoaXJkXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiIzAyMTExRFwiLCBwYWRkaW5nOlwiMFwiLCBwYWRkaW5nOlwiMFwifX0+XHJcbiAgICAgICAgICAgICAge2FycmF5SW1hZ2VbMF0gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOlwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXthcnJheUltYWdlWzBdLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKSA6ICg8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCB3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiMTAwJVwifX0+PGltZyBzdHlsZT17e3dpZHRoOlwiNTAlXCJ9fSBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn0gYWx0PVwiXCIvPjwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS10aGlyZCBjb2x1bW5zIGlzLW11bHRpbGluZSBteC01XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1mdWxsIG15LTVcIiBzdHlsZT17e2JhY2tncm91bmQ6XCIjMDIxMTFEXCIsIHBhZGRpbmc6XCIwXCJ9fT4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7YXJyYXlJbWFnZVsxXSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOlwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YXJyYXlJbWFnZVsxXS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgd2lkdGg6XCIxMDAlXCIsIGhlaWdodDpcIjEwMCVcIn19PjxpbWcgc3R5bGU9e3t3aWR0aDpcIjUwJVwifX0gc3JjPXtcIi96ZW5pdGgvYXV0cmUvbm9JbWcucG5nXCJ9IGFsdD1cIlwiLz48L2Rpdj4pfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtZnVsbCBteS01XCIgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiIzAyMTExRFwiLCBwYWRkaW5nOlwiMFwifX0+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7YXJyYXlJbWFnZVsyXSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YXJyYXlJbWFnZVsyXS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgd2lkdGg6XCIxMDAlXCIsIGhlaWdodDpcIjEwMCVcIn19PjxpbWcgc3R5bGU9e3t3aWR0aDpcIjUwJVwifX0gc3JjPXtcIi96ZW5pdGgvYXV0cmUvbm9JbWcucG5nXCJ9IGFsdD1cIlwiLz48L2Rpdj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1vbmUtdGhpcmQgaXMtbW9iaWxlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiIzAyMTExRFwiLCBwYWRkaW5nOlwiMFwifX0+XHJcbiAgICAgICAgICAgICAge2FycmF5SW1hZ2VbM10gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzpcIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2FycmF5SW1hZ2VbM10uc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIHdpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT48aW1nIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19IHNyYz17XCIvemVuaXRoL2F1dHJlL25vSW1nLnBuZ1wifSBhbHQ9XCJcIi8+PC9kaXY+KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW1vYmlsZSBpcy1jZW50ZXJlZCBtdC01LWZ1bGxoZFwiIHN0eWxlPXt7cG9zaXRpb246IFwiYWJzb2x1dGVcIiwgYm90dG9tOlwiMjVweFwiLCB3aWR0aDpcIjEwMSVcIn19PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0T3Blbih0cnVlKX0gY2xhc3NOYW1lPVwiYnRuUyBjZW50ZXIgbGlnaHQgbGV0dGVyU3BhY2luZ00gbWItNiBtdC0wXCI+XHJcbiAgICAgICAgICAgICAgICBFTiBWT0lSICtcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgICAgIDxMaWdodGJveFxyXG4gICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgY2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgIHBsdWdpbnM9e1tUaHVtYm5haWxzXX1cclxuICAgICAgICAgICAgICBzbGlkZXM9e2FycmF5SW1hZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1BhcmFsbGF4PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRwYWdlRml2ZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIENsaWVudHBhZ2VGb3VyKHtwcmVjaSwgZGF0YTJ9KSB7XHJcblx0Y29uc29sZS5sb2cocHJlY2kpXHJcblx0aWYoZGF0YTIuZWxlbWVudHByZWNpc2lvbil7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy82V3ZlbW0zSy5qcGVnKVwiLCBoZWlnaHQ6IFwiMTEwMHB4XCJ9fSBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XHRcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9JydzdHlsZT17eyBoZWlnaHQ6IFwiMTEwMHB4XCJ9fT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlcjInPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lckNlbnRlckEnPlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJlbnQyMSBtYXJnaW5Ub3AnPlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21hcmdpblRvcDInID5cclxuXHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdsaWdodCBsZXR0ZXJTcGFjaW5nUyc+w4lMw4lNRU5UUyBERSBQUsOJQ0lTSU9OPC9oMz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGlnaHQgY29udGFpbmVyQ2VudGVyQ2xpZW50IHRleHQtaDUnIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnfX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YTIuZWxlbWVudHByZWNpc2lvbn19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPScgYm94Q2xpZW50JyBzdHlsZT17e2hlaWdodDogJzgwMHB4Jywgd2lkdGg6XCI2MDBweFwifX0+XHJcblx0XHRcdFx0XHRcdFx0e3ByZWNpLmltYWdlID8gKDxpbWcgY2xhc3NOYW1lPScgY29udGFpbicgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e1wiL2ltYWdlcy9pbWFnZWNsaWVudC9cIiArIHByZWNpLmltYWdlfSBhbHQ9XCJcIi8+KSA6ICg8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCB3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiMTAwJVwifX0+PGltZyBzdHlsZT17e3dpZHRoOlwiNTAlXCJ9fSBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn0gYWx0PVwiXCIvPjwvZGl2Pil9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cdFx0XHJcblxyXG5cclxuXHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fX1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRwYWdlRm91cjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gQ2xpZW50cGFnZU9uZShkYXRhKSB7XHJcblx0Y29uc29sZS5sb2coZGF0YSlcclxuXHRBT1MuaW5pdCgpXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZDFcIiBhbHQ9XCJob21lcGFnZVwiPlxyXG5cclxuXHRcdFx0PHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eUJsdWVcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXIyXCI+XHJcblx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvemVuaXRoL2ltYWdlcy9iSU8xcjlGLnBuZ1wiIGFsdD1cIkxvZ29cIiB3aWR0aD17MjAwfSBjbGFzc05hbWU9XCJjZW50ZXJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cdFxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e3RleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnfX0gY2xhc3NOYW1lPVwiY2xpZW50cGFnZVRleHRcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cIm1lZGl1bSBtYXJnaW5TdG9wIGNsaWVudERldGFpbFwiPntkYXRhLmRhdGEubm9tQ2xpZW50fTwvaDE+XHJcblx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT1cImxpZ2h0IG1hcmdpblN0b3AgY2xpZW50RGV0YWlsXCI+e2RhdGEuZGF0YS5zZWN0ZXVyLnNlY3RldXJ9PC9oNj5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLmR1cmVlID8gPHAgY2xhc3NOYW1lPVwibGlnaHQgY2xpZW50RGV0YWlsXCI+RFVSw4lFIFBST0pFVCA6IHtkYXRhLmRhdGEuZHVyZWV9PC9wPiA6IDxwIGNsYXNzTmFtZT1cImxpZ2h0IGNsaWVudERldGFpbFwiPkRVUsOJRSBQUk9KRVQgOiBOL0E8L3A+fVxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIHN0eWxlPXt7dGV4dERlY29yYXRpb246IFwibm9uZVwiLCBjb2xvcjogXCJ3aGl0ZVwifX0gdG89e2Avc2VhcmNoY2F0L2NsaWVudC8ke2RhdGEuZGF0YS5jYXRlZ29yaWVbMF0uaWR9LyR7ZGF0YS5kYXRhLmNhdGVnb3JpZVswXS5jYXRlZ29yaWV9YH0+PHAgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZVwiLCB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ319IGNsYXNzTmFtZT1cImxpZ2h0IGNsaWVudERldGFpbDJcIj57ZGF0YS5kYXRhLmNhdGVnb3JpZVswXS5jYXRlZ29yaWV9PC9wPjwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLmNhdGVnb3JpZVsxXSAmJjw+PHAgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZVwifX0gY2xhc3NOYW1lPVwibGlnaHQgY2xpZW50RGV0YWlsMlwiPiAgIHwgICA8L3A+IDxMaW5rIHN0eWxlPXt7dGV4dERlY29yYXRpb246IFwibm9uZVwiLCBjb2xvcjogXCJ3aGl0ZVwifX10bz17YC9zZWFyY2hjYXQvY2xpZW50LyR7ZGF0YS5kYXRhLmNhdGVnb3JpZVsxXS5pZH0vJHtkYXRhLmRhdGEuY2F0ZWdvcmllWzFdLmNhdGVnb3JpZX1gfSA+PHAgY2xhc3NOYW1lPVwibGlnaHQgY2xpZW50RGV0YWlsMlwiIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmVcIiwgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwid2hpdGVcIn19PntkYXRhLmRhdGEuY2F0ZWdvcmllWzFdLmNhdGVnb3JpZX08L3A+PC9MaW5rPjwvPn1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXIzXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PGg0IHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnfX0gY2xhc3NOYW1lPVwibGlnaHQgbGV0dGVyU3BhY2luZ1MgIGRpc2NvdmVyQ2xpZW50MlwiPntkYXRhLmRhdGEubWlzc2lvbn08L2g0PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibGlnaHQgIGRpc2NvdmVyQ2xpZW50XCI+RMOJQ09VVlJFWjwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmVDbGllbnRcIiA+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudHBhZ2VPbmU7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBDbGllbnRwYWdlU2l4KHtkYXRhLCBucH0pIHtcclxuXHRBT1MuaW5pdCgpXHJcblx0aWYobnBbMF0pe1xyXG5cdFx0aWYobnBbMF1bMF0gPT0gJ251bGwnKVxyXG5cdFx0XHRucFswXVswXSA9IGZhbHNlO1xyXG5cdFx0aWYobnBbMF1bMV0gPT0gJ251bGwnKVxyXG5cdFx0XHRucFsxXVswXSA9IGZhbHNlO1xyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblxyXG5cclxuXHJcblxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPSdkZW1pYmxvY0NsaWVudCc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGVtaWJsb2NPcGFjaXR5Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmVudENsaWVudE5leHRQcmV2Jz5cclxuXHJcblx0XHRcdFx0XHRcdFx0e25wWzFdWzBdICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nQ2xpZW50TmV4dFByZXYxJyBvbkNsaWNrPXsoKT0+e2xvY2F0aW9uLmhyZWYgPSBcIi9jbGllbnQvXCIrIG5wWzFdWzBdLmlkfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9J2xpZ2h0IHJpZ2h0VGV4dCBtYXJnaW5Ub3BTJz5QUk9KRVQgUFLDiUPDiURFTlQ8L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPSdyaWdodFRleHQnPntucFsxXVswXS5ub21DbGllbnR9PC9oNT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT0nbGlnaHQgcmlnaHRUZXh0Jz57bnBbMV1bMF0ubWlzc2lvbn08L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+fVxyXG5cclxuXHRcdFx0XHRcdFx0XHR7bnBbMF1bMF0gJiYgPGRpdiBjbGFzc05hbWU9J0NsaWVudE5leHRQcmV2Micgb25DbGljaz17KCk9Pntsb2NhdGlvbi5ocmVmID0gXCIvY2xpZW50L1wiKyBucFswXVswXS5pZH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPSdsaWdodCBsZWZ0VGV4dCBtYXJnaW5Ub3BTJz5QUk9KRVQgU1VJVkFOVDwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9J2xlZnRUZXh0Jz57bnBbMF1bMF0ubm9tQ2xpZW50fTwvaDU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9J2xpZ2h0IGxlZnRUZXh0Jz57bnBbMF1bMF0ubWlzc2lvbn08L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+fVxyXG5cdFx0XHRcdFx0XHRcdHsvKiA8YSBocmVmPXtcIi9jbGllbnQvXCIrbnBbMV1bMF0uaWR9PiAqL31cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRwYWdlU2l4OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIENsaWVudHBhZ2VUaHJlZShkYXRhKSB7XHJcblx0Y29uc29sZS5sb2coZGF0YSlcclxuXHRpZihkYXRhLmRhdGEuaW1hZ2UgIT09IHVuZGVmaW5lZCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyRGFya0JsdWVDbGllbnQnIHN0eWxlPXt7aGVpZ2h0OlwiODAwcHhcIiwgd2lkdGg6XCIxMDAlXCJ9fT5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPXtcIi9pbWFnZXMvaW1hZ2VjbGllbnQvXCIgKyBkYXRhLmRhdGEuaW1hZ2V9IGFsdD1cIlwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuIH1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRwYWdlVGhyZWU7IiwiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbi8vIGltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcbi8vIGltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG4vLyBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIENsaWVudHBhZ2VUd28oZGF0YSkge1xyXG4vLyBcdEFPUy5pbml0KClcclxuLy8gXHRpZihkYXRhLmRhdGEuZW5qZXUgfHwgZGF0YS5kYXRhLmhpc3RvaXJlIHx8IGRhdGEuZGF0YS5yZXBvbnNlKXtcclxuLy8gXHRcdHJldHVybiAoXHJcbi8vIFx0XHRcdDw+XHJcbi8vIFx0XHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCJ9fSBjbGFzc05hbWU9J2RlbWlibG9jQ2xpZW50Jz5cclxuLy8gXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkZW1pYmxvY0NsaWVudE9wYWNpdHknPlxyXG4vLyBcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyZW50Q2xpZW50Jz5cclxuLy8gXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLmVuamV1ICYmXHJcbi8vIFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NsaWVudEdyaWQxJz5cclxuLy8gXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2xpZ2h0Jz5VTkUgRU5KRVU8L2g0PlxyXG4vLyBcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xpZ2h0IGNvbnRhaW5lckNlbnRlckNsaWVudCcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YS5kYXRhLmVuamV1fX0+PC9kaXY+XHJcbi8vIFx0XHRcdFx0XHRcdFx0PC9kaXY+IFxyXG4vLyBcdFx0XHRcdFx0XHRcdH1cclxuXHJcbi8vIFx0XHRcdFx0XHRcdFx0e2RhdGEuZGF0YS5oaXN0b2lyZSAmJlxyXG4vLyBcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjbGllbnRHcmlkMic+XHJcbi8vIFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdsaWdodCc+VU5FIEhJU1RPSVJFPC9oND5cclxuLy8gXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmRhdGEuZGF0YS5oaXN0b2lyZX19PjwvZGl2PlxyXG4vLyBcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG4vLyBcdFx0XHRcdFx0XHRcdH1cclxuXHJcbi8vIFx0XHRcdFx0XHRcdFx0e2RhdGEuZGF0YS5yZXBvbnNlICYmXHJcbi8vIFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NsaWVudEdyaWQzJz5cclxuLy8gXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2xpZ2h0Jz5VTkUgUkVQT05TRTwvaDQ+XHJcbi8vIFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGlnaHQgY29udGFpbmVyQ2VudGVyQ2xpZW50JyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLmRhdGEucmVwb25zZX19PjwvZGl2PlxyXG4vLyBcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG4vLyBcdFx0XHRcdFx0XHRcdH1cclxuXHJcbi8vIFx0XHRcdFx0XHRcdDwvZGl2PlxyXG4vLyBcdFx0XHRcdFx0PC9kaXY+XHJcbi8vIFx0XHRcdFx0PC9kaXY+XHJcbi8vIFx0XHRcdDwvPlxyXG4vLyBcdFx0KTtcclxuLy8gXHR9XHJcbi8vIH1cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBDbGllbnRwYWdlVHdvKGRhdGEpIHtcclxuIFx0aWYoZGF0YS5kYXRhLmVuamV1IHx8IGRhdGEuZGF0YS5oaXN0b2lyZSB8fCBkYXRhLmRhdGEucmVwb25zZSl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzLzZXdmVtbTNLLmpwZWcpXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIn19IGNsYXNzTmFtZT0nZGVtaWJsb2NDbGllbnQnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbHVtbnMnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbnMgaXMtY2VudGVyZWQgaXMtMTInIHN0eWxlPXt7IG1hcmdpbjpcIjBcIiwgcGFkZGluZzpcIjBcIn19PlxyXG5cdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuZW5qZXUgJiZcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGlzLWNlbnRlcmVkIGlzLTQnIHN0eWxlPXt7bWFyZ2luVG9wOlwiNDhweFwiLCBtYXJnaW5SaWdodDpcImF1dG9cIiwgbWFyZ2luTGVmdDpcImF1dG9cIn19PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nbGlnaHQnPlVOIEVOSkVVPC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19IGNsYXNzTmFtZT0nbGlnaHQgY29udGFpbmVyQ2VudGVyQ2xpZW50IHB4LTYnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YS5kYXRhLmVuamV1fX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+IFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0e2RhdGEuZGF0YS5oaXN0b2lyZSAmJlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gaXMtY2VudGVyZWQgaXMtNCcgc3R5bGU9e3ttYXJnaW5Ub3A6XCI0OHB4XCIsIG1hcmdpblJpZ2h0OlwiYXV0b1wiLCBtYXJnaW5MZWZ0OlwiYXV0b1wifX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdsaWdodCc+VU5FIEhJU1RPSVJFPC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19IGNsYXNzTmFtZT0nbGlnaHQgY29udGFpbmVyQ2VudGVyQ2xpZW50IGNvbHVtbnMgaXMtdmNlbnRlcmVkIGlzLWNlbnRlcmVkIHB4LTYnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmRhdGEuZGF0YS5oaXN0b2lyZX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0e2RhdGEuZGF0YS5yZXBvbnNlICYmXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbHVtbiBpcy1jZW50ZXJlZCBpcy00JyAgc3R5bGU9e3ttYXJnaW5Ub3A6XCI0OHB4XCIsIG1hcmdpblJpZ2h0OlwiYXV0b1wiLCBtYXJnaW5MZWZ0OlwiYXV0b1wifX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdsaWdodCc+VU5FIFJFUE9OU0U8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0gY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQgY29sdW1ucyBpcy12Y2VudGVyZWQgaXMtY2VudGVyZWQgcHgtNicgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YS5kYXRhLnJlcG9uc2V9fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG5cdH1cclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50cGFnZVR3bztcclxuIiwiaW1wb3J0IE5hdmJhciBmcm9tICcuLi9fbmF2YmFyJztcclxuaW1wb3J0IFJzQnV0dG9uIGZyb20gJy4uL19yc0J1dHRvbic7XHJcbmltcG9ydCBMaW5lc1RvcCBmcm9tICcuLi9fbGluZXNUb3AnO1xyXG5pbXBvcnQgTGluZXNCb3R0b20gZnJvbSAnLi4vX2xpbmVzQm90dG9tJztcclxuaW1wb3J0IENvbnRhY3RQYWdlT25lIGZyb20gJy4vX2NvbnRhY3RwYWdlT25lJztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuaW1wb3J0IE1pbmlGb290ZXIgZnJvbSAnLi4vSG9tZXBhZ2UvX21pbmlGb290ZXInO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBDb250YWN0UGFnZSgpIHtcclxuXHRyZXR1cm4gKCBcclxuXHRcdDw+XHJcblx0XHQ8TmF2YmFyPjwvTmF2YmFyPlxyXG5cdFx0PFJzQnV0dG9uPjwvUnNCdXR0b24+XHJcblx0XHQ8TGluZXNUb3A+PC9MaW5lc1RvcD5cclxuXHRcdDxMaW5lc0JvdHRvbT48L0xpbmVzQm90dG9tPlxyXG5cdFx0PENvbnRhY3RQYWdlT25lPjwvQ29udGFjdFBhZ2VPbmU+XHJcblx0XHQ8TWluaUZvb3RlciBsb2FkZWQ9e3RydWV9PjwvTWluaUZvb3Rlcj5cclxuXHJcblx0XHQ8Lz5cclxuXHQgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFBhZ2U7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xyXG5pbXBvcnQgd2l0aFJlYWN0Q29udGVudCBmcm9tICdzd2VldGFsZXJ0Mi1yZWFjdC1jb250ZW50J1xyXG5cclxuXHJcbmZ1bmN0aW9uIENvbnRhY3RQYWdlT25lKCkge1xyXG5cdGNvbnN0IE15U3dhbCA9IHdpdGhSZWFjdENvbnRlbnQoU3dhbClcclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0ZW1haWw6ICcnLFxyXG5cdFx0bmFtZTogJycsXHJcblx0XHRtZXNzYWdlOiAnJyxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnBlcnNpc3QoKTtcclxuXHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0W2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG5cdFx0XHRcclxuXHRcdH0pO1xyXG5cdFx0Y29uc29sZS5sb2codmFsdWVzLmVtYWlsKVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcblx0XHRlLnRhcmdldC5jaGlsZHJlblszXS5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRNeVN3YWwuZmlyZSh7XHJcblx0XHRcdHRleHQ6ICdVbiBtYWlsIGRlIGNvbmZpcm1hdGlvbiB2b3VzIGEgw6l0w6kgZW52b3nDqScsXHJcblx0XHRcdHRvYXN0OiB0cnVlLFxyXG5cdFx0XHRpY29uOiAnc3VjY2VzcycsXHJcblx0XHRcdHRpdGxlOiAnQmllbiByZcOndSEnLFxyXG5cdFx0XHRwb3NpdGlvbjogJ3RvcC1yaWdodCcsXHJcblx0XHRcdHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuXHRcdFx0dGltZXI6IDMwMDAsXHJcblx0XHRcdHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcblx0XHRcdGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG5cdFx0XHQgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuXHRcdFx0ICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuXHRcdFx0fVxyXG5cdFx0ICB9KTtcclxuXHRcdGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0aGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXCJlbWFpbFwiOiB2YWx1ZXMuZW1haWwsIFwibmFtZVwiOiB2YWx1ZXMubmFtZSwgXCJtZXNzYWdlXCI6IHZhbHVlcy5tZXNzYWdlLCBcIm5ld1wiOiB0cnVlIH0pLFxyXG5cdFx0fTtcclxuXHRcdC8vIGZldGNoKCcvc2VuZGVtYWlsJywgcmVxdWVzdE9wdGlvbnMpXHJcblx0XHQvLyBcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdGZldGNoKGAvc2VuZGVtYWlsYCx7bWV0aG9kOidQT1NUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxib2R5OiBKU09OLnN0cmluZ2lmeSh7IFwiZW1haWxcIjogdmFsdWVzLmVtYWlsLCBcIm5hbWVcIjogdmFsdWVzLm5hbWUsIFwibWVzc2FnZVwiOiB2YWx1ZXMubWVzc2FnZSwgXCJuZXdcIjogdHJ1ZSB9KX0pXHJcblx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdC50aGVuKFxyXG5cdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdFx0fVxyXG5cdFx0KVxyXG5cdH07XHJcblx0QU9TLmluaXQoKVxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQxXCIgYWx0PVwiaG9tZXBhZ2VcIj5cclxuXHJcblx0XHRcdDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG5cdFx0XHRcdDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuXHRcdFx0XHQ8L3ZpZGVvPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHlCbHVlXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyMlwiPlxyXG5cdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCIvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL3plbml0aC9pbWFnZXMvYklPMXI5Ri5wbmdcIiBhbHQ9XCJMb2dvXCIgd2lkdGg9ezIwMH0gY2xhc3NOYW1lPVwiY2VudGVyXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sdW1ucyBpcy1jZW50ZXJlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlzLTMgY29sdW1uIGlzLW9mZnNldC00XCIgc3R5bGU9e3ttYXhIZWlnaDpcIjEwMCVcIn19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwibWVkaXVtXCI+Q29udGFjdGV6IE5vdXM8L2gxPiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT1cImxpZ2h0XCI+UHLDqXNlbnRleiB2b3RyZSBwcm9qZXQgZXQgbGFpc3Nlei1ub3VzIHZvc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpbmZvcm1hdGlvbnMgZGUgY29udGFjdC4gTm91cyByZXZpZW5kcm9ucyB2ZXJzXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZvdXMgZGFucyB1biBkw6lsYWkgZGUgMjRoLjwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXMtMiBjb2x1bW5cIj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImlzLTcgY29sdW1uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9fZ3JvdXAgZmllbGQgIGRpdkMxXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJpbnB1dFwiIGNsYXNzTmFtZT1cImZvcm1fX2ZpZWxkXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgbmFtZT1cIm5hbWVcIiBpZD0nbmFtZScgdmFsdWU9e3ZhbHVlcy5uYW1lfW9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gcmVxdWlyZWQ+PC9pbnB1dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtX19sYWJlbFwiPlZvdHJlIG5vbTwvbGFiZWw+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9fZ3JvdXAyIGZpZWxkIGRpdkMyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJpbnB1dFwiIGNsYXNzTmFtZT1cImZvcm1fX2ZpZWxkXCIgcGxhY2Vob2xkZXI9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPSdlbWFpbCcgdmFsdWU9e3ZhbHVlcy5lbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSByZXF1aXJlZCAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImZvcm1fX2xhYmVsXCI+Vm90cmUgYWRyZXNzZSBlLW1haWw8L2xhYmVsPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHRhcmVhX19ncm91cCBmaWVsZCBkaXZDM1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSB0eXBlPVwiaW5wdXRcIiBjbGFzc05hbWU9XCJmb3JtX19maWVsZFwiIHBsYWNlaG9sZGVyPVwibWVzc2FnZVwiIG5hbWU9XCJtZXNzYWdlXCIgaWQ9J21lc3NhZ2UnIHZhbHVlPXt2YWx1ZXMubWVzc2FnZX0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSByZXF1aXJlZCAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImZvcm1fX2xhYmVsXCI+Vm90cmUgYmVzb2luPC9sYWJlbD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7bWFyZ2luVG9wOlwiNTBweFwifX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtYXJnaW5Cb3R0b20yIGJ0blMgbGlnaHQgbGV0dGVyU3BhY2luZ01cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0RW52b3llclxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQgXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG4gXHJcbi8vbW9kaWZpZXIgYSBwYXJ0aXIgZGUgbGEgbGlnbmUgXHJcbi8vIGFqb3V0ZXIgPGZvcm0+IDxmaWVsZD4gZXRjXHJcbi8vIGZ1bmN0aW9uIGNvbnRhY3QgcGFnZU9uZSBuZSBmYWl0IHJpZW4gbmUgZGVjbGFyZSByaWVuIGV0Yy4uIFxyXG4vL2RlaWZpbmlyIHVuIGV0YXQgZCBvcmlnaW5lIHBvdXIgbGVzIHpvbmUgZGUgdGV4dGUgXHJcbi8vYWpvdXRlciB1biBidXR0b24gcXVhbmQgY2xpcXVlIHByZW5kIGxlcyBpbmZvcm1hdGlvbiBkYW5zIGxlcyBjaGFtcHMgXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RQYWdlT25lO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBBY3Rpb24oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy94OW5lczVWLmpwZylcIiB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJhY2tncm91bmRcIlxyXG4gICAgICAgIGFsdD1cImFjdGlvblwiXHJcbiAgICAgID4gKi99XHJcbiAgICAgIHsvKiA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL2FXRUxoazhBLmpwZWdcIiBzdHJlbmd0aD17MH0+ICovfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjUwcHhcIiwgYmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy9hV0VMaGs4QS5qcGVnKVwiLCBoZWlnaHQ6XCJhdXRvXCIsIHBhZGRpbmdCb3R0b206IFwiMXB4XCJ9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIyXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lcjJcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRyZUEgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXRjaG5hemVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQUNUSU9OXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJsaWdodCBsZXR0ZXJTcGFjaW5nUyBzb3VzVGl0cmVcIj5cclxuICAgICAgICAgICAgICBTRSBDT05DRU5UUkVSIFNVUiBM4oCZRVNTRU5USUVMIDogVk9VU1xyXG4gICAgICAgICAgICA8L2g2PlxyXG5cclxuICAgICAgICAgICAgPFN3aXBlciBzbGlkZXNQZXJWaWV3PXszfSBzcGFjZUJldHdlZW49ey0xMDB9IGNsYXNzTmFtZT1cInN3aXBlclwiPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2pldHNcIiBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94Q2FycmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInVybCgvemVuaXRoL2ltYWdlcy9wZXhlbHMtYW5kcmVhLXBpYWNxdWFkaW8tMzc2MDA5My5qcGcpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3BGaWx0ZXI6IFwiYmx1cig1cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRBY3Rpb24xIGxldHRlclNwYWNpbmdTIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDT05TRUlMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBQ0NPTVBBR05FTUVOVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDM2MMKwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuXHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvamV0c1wiIGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3hDYXJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcclxuICAgICAgICAgICAgICAgICAgICAgIFwidXJsKC96ZW5pdGgvaW1hZ2VzL0NPTU0uanBnKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcEZpbHRlcjogXCJibHVyKDVweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dEFjdGlvbjEgbGV0dGVyU3BhY2luZ1MgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENPTU1VTklDQVRJT05cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNPTFVUSU9OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU1VSLU1FU1VSRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcblxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2pldHNcIiBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94Q2FycmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInVybCgvemVuaXRoL2ltYWdlcy9FVkVOVC5qcGcpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3BGaWx0ZXI6IFwiYmx1cig1cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRBY3Rpb24xIGxldHRlclNwYWNpbmdTIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFVkVOVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTElWUkFJU09OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ0zDiVMgRU4gTUFJTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcblxyXG4gICAgICAgICAgICA8L1N3aXBlcj5cclxuXHJcbiAgICAgICAgICAgIDxoNFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdHJlQiBsaWdodCBsZXR0ZXJTcGFjaW5nIGNvbnRhaW5lciBjZW50ZXIgYWNjcm9jaGVcIlxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFHSVIgRVQgUsOJQUdJUiBBVkVDIFZPVVNcclxuICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7ZG9jdW1lbnQubG9jYXRpb24gPSBcIi9jbGllbnRzLzFcIn19IGNsYXNzTmFtZT1cImJ0blMgY2VudGVyIGxpZ2h0IGxldHRlclNwYWNpbmdNIG1hcmdpbkJvdHRvbTJcIj5cclxuICAgICAgICAgICAgICBFTiBDT01QUkVORFJFICtcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgIHsvKiA8L1BhcmFsbGF4PiAqL31cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gXCJyZWFjdC1wYXJhbGxheFwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gQ2hpZmZyZXMoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcblx0PFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9aMXpJSkNLay5qcGVnXCIgc3RyZW5ndGg9ezIwMH0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICAvLyBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwiIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZGVtaWJsb2NcIlxyXG4gICAgICAgIGFsdD1cImNoaWZmcmVzXCJcclxuICAgICAgPlxyXG4gICAgICAgIHsvKiA8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnNi5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcbiAgICAgICAgPC92aWRlbz4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1pYmxvYzJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZDNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJlbnQyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYxXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWVkaXVtIGNoaWZmcmVzXCI+MjAxNjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibGlnaHQgY2hpZmZyZXMyXCI+QU5Ow4lFIERFIENSRUFUSU9OPC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZWRpdW0gY2hpZmZyZXNcIj4rMzAwPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJsaWdodCBjaGlmZnJlczJcIj5DUsOJQVRJT05TIFBIT1RPUzwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYzXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWVkaXVtIGNoaWZmcmVzXCI+KzE2MDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibGlnaHQgY2hpZmZyZXMyXCI+UFJPSkVUUyBSw4lBTElTw4lTPC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjRcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZWRpdW0gY2hpZmZyZXNcIj4rMTUwPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJsaWdodCBjaGlmZnJlczJcIj5Sw4lBTElTQVRJT05TIFZJRMOJT1M8L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2NVwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1lZGl1bSBjaGlmZnJlc1wiPisyMDA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImxpZ2h0IGNoaWZmcmVzMlwiPkNSw4lBVElPTlMgRElHSVRBTEVTIDwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXY2XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWVkaXVtIGNoaWZmcmVzXCI+MTAwJTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibGlnaHQgY2hpZmZyZXMyXCI+TUFERSBJTiBGUkFOQ0U8L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHQgIDwvUGFyYWxsYXg+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGlmZnJlcztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIENyZWF0aW9uKGl0ZW0pIHtcclxuICBsZXQgc2xpZGVyID0gW11cclxuICBjb25zb2xlLmxvZyhpdGVtKVxyXG4gIGlmKGl0ZW0uaXRlbS5sZW5ndGggPjApIHtcclxuICAgIGl0ZW0uaXRlbS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgICAgbGV0IG5ld1NsaWRlciA9IHVuZGVmaW5lZFxyXG4gICAgICBpZihlbGVtZW50LmNyZWF0aW9uKXtcclxuICAgICAgICAgIG5ld1NsaWRlciA9IChcclxuICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17ZWxlbWVudC5pZH0gY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9e2AvcHJvamV0LyR7ZWxlbWVudC5pZH1gfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX1cclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQubWlzc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvaW1hZ2Vwcm9qZXQvJHtlbGVtZW50LmNyZWF0aW9ufWB9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICk7ICAgICAgICAgICAgXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgICAgbmV3U2xpZGVyID0gKFxyXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtlbGVtZW50LmlkfSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj17YC9wcm9qZXQvJHtlbGVtZW50LmlkfWB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiMwMjExMURcIix9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQubWlzc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY29udGFpblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi96ZW5pdGgvYXV0cmUvbm9JbWcucG5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICk7ICAgICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgc2xpZGVyLnB1c2gobmV3U2xpZGVyKSBcclxuICB9KTtcclxuICB9ZWxzZXtcclxuICAgIHNsaWRlciA9ICggPGgxIGNsYXNzTmFtZT1cInRpdHJlQSBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5TdG9wXCI+cmllbiBhIHZvaXI8L2gxPiApXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIEJsdXJEZXRhaWwoZSl7XHJcbiAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgZS50YXJnZXQuc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSBcImJsdXIoNHB4KVwiO1xyXG4gICAgZS50YXJnZXQuY2hpbGRyZW5bMF0uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCJcclxuICB9XHJcbiAgZnVuY3Rpb24gUmVtb3ZlQmx1ckRldGFpbChlKXtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cigwKVwiO1xyXG4gICAgZS50YXJnZXQuY2hpbGRyZW5bMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCJ9fSBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XHJcblxyXG4gICAgICAgIDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG5cdFx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmc0Lm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuXHRcdFx0XHQ8L3ZpZGVvPiAqL31cclxuICAgICAgey8qIDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDRcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+PC9FbGVtZW50PiAqL31cclxuICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9aMXpJSkNLay5qcGVnXCIgc3RyZW5ndGg9ezIwMH0+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7cGFkZGluZ1RvcDogJzUwcHgnfX0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgZGF0YS1hb3M9XCJ6b29tLWluXCJcclxuICAgICAgICAgIGRhdGEtYW9zLW1pcnJvcj1cIlwiXHJcbiAgICAgICAgICBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudD1cIlwiXHJcbiAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlcjJcIj5cclxuICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0cmVBIG1lZGl1bSBsZXR0ZXJTcGFjaW5nIG1hcmdpblN0b3BcIlxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENSw4lBVElPTlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8aDZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaWdodCBsZXR0ZXJTcGFjaW5nUyBzb3VzVGl0cmVcIlxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFVORSBISVNUT0lSRS4gVU4gRU5KRVUuIFVORSBSw4lQT05TRS5cclxuICAgICAgICAgICAgPC9oNj5cclxuXHJcbiAgICAgICAgICAgIDxTd2lwZXJcclxuICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICc1MDBweCd9fVxyXG4gICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9ezF9XHJcbiAgICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MH1cclxuICAgICAgICAgICAgICBicmVha3BvaW50cz17e1xyXG4gICAgICAgICAgICAgICAgNjQwOiB7XHJcbiAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgMTAyNDoge1xyXG4gICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA3LFxyXG4gICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDEsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dpcGVyMlwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3NsaWRlcn1cclxuICAgICAgICAgICAgICB7LyogPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCIgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9IG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX0+PGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+PHAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgZGlzcGxheTogXCJub25lXCIsIHdpZHRoOiBcIjIwMHB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCIwcHhcIiwgdG9wOlwiMjAwcHhcIn19PntpdGVtLml0ZW1bMV0ubWlzc2lvbn08L3A+PC9kaXY+PGltZyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17YC96ZW5pdGgvaW1hZ2VzL19EU0MxMzAwLmpwZ2B9IGFsdD1cIlwiIC8+PC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVsyXS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgL3plbml0aC9pbWFnZXMvMUo0QTUwMDkgKDEpLmpwZ2B9IGFsdD1cIlwiIC8+PC9kaXY+ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCIgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9IG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX0+PGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+PHAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgZGlzcGxheTogXCJub25lXCIsIHdpZHRoOiBcIjIwMHB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCIwcHhcIiwgdG9wOlwiMjAwcHhcIn19PntpdGVtLml0ZW1bM10ubWlzc2lvbn08L3A+PC9kaXY+PGltZyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17YC96ZW5pdGgvaW1hZ2VzL0NhcHR1cmUgZOKAmcOpY3JhbiAyMDIyLTEyLTAzIMOgIDIxLjMzLjI5LnBuZ2B9IGFsdD1cIlwiIC8+PC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVs0XS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgL3plbml0aC9pbWFnZXMvSU1HXzc0ODcuanBnYH0gYWx0PVwiXCIgLz48L2Rpdj4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVs1XS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgL3plbml0aC9pbWFnZXMvSU1HXzAwMDQuanBnYH0gYWx0PVwiXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzRdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy9JTUdfOTgzOC5qcGdgfSBhbHQ9XCJcIiAvPjwvZGl2PiAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzVdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy9ESUFfMDc1OS5qcGdgfSBhbHQ9XCJcIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+ICovfVxyXG4gICAgICAgICAgICA8L1N3aXBlcj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+XHJcbiAgICAgICAgICAgIDxoNFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdHJlQiBsaWdodCBsZXR0ZXJTcGFjaW5nIGNvbnRhaW5lciBjZW50ZXIgYWNjcm9jaGVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUFJPUFVMU0VSIEzigJlJTUFHSU5BSVJFIFBMVVMgTE9JTlxyXG4gICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFyZ2luQm90dG9tMiBidG5TIGNlbnRlciBsaWdodCBsZXR0ZXJTcGFjaW5nTVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9wcm9qZXRzLzFcIiBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG4gICAgICAgICAgICAgICAgIETDiUNPVVZSSVIgKzwvTGluaz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L1BhcmFsbGF4PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRpb247XHJcblxyXG4vLyBjb25zdCBpdGVtcyA9IFsnJywgJycsICcnLCAnJywgJycsICcnLCcnLCcnLCcnLCcnLCcnLCcnLF1cclxuLy8gY29uc3Qgc2V0dGluZyA9IHtcclxuLy8gICBkcmFnU3BlZWQ6IDAuNCxcclxuLy8gICBpdGVtV2lkdGg6IDIwMCxcclxuLy8gICBpdGVtSGVpZ2h0OiA0NjQsXHJcbi8vICAgaXRlbVNpZGVPZmZzZXRzOiA0MCxcclxuLy8gfVxyXG4vLyBjb25zdCBpdGVtU3R5bGUgPSB7XHJcbi8vICAgd2lkdGg6IGAke3NldHRpbmcuaXRlbVdpZHRofXB4YCxcclxuLy8gICBoZWlnaHQ6IGAke3NldHRpbmcuaXRlbUhlaWdodH1weGAsXHJcbi8vICAgbWFyZ2luOiBgMHB4ICR7c2V0dGluZy5pdGVtU2lkZU9mZnNldHN9cHhgXHJcbi8vIH1cclxuXHJcbntcclxuICAvKiA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyQyc+XHJcbiAgICAgICAgICAgICAgPENhcm91c2VsIF9kYXRhPXtpdGVtc30gey4uLnNldHRpbmd9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBpdGVtcy5tYXAoKGksIF9pKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtfaX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naXRlbSdcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLml0ZW1TdHlsZSB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi9cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIEVtb3Rpb24oKSB7XHJcbiAgY29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKGAvYXBpL2Vtb3Rpb25zLzFgLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAudGhlbihcclxuICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICBzZXRJc0xvYWRlZCh0cnVlKTtcclxuICAgICAgc2V0SXRlbXMocmVzdWx0KTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuICAgICAgLy8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcbiAgICAgIC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG4gICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICAgIHNldEVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgKVxyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCIgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCJcclxuICAgICAgICBhbHQ9XCLDqW1vdGlvblwiXHJcbiAgICAgID4gKi99XHJcbiAgICAgICAgey8qIDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcyLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuICAgICAgICA8L3ZpZGVvPiAqL31cclxuICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL1oxeklKQ0trLmpwZWdcIiBzdHJlbmd0aD17MjAwfT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17e3BhZGRpbmdUb3A6ICc1MHB4J319PlxyXG4gICAgICAgIDxkaXYgZGF0YS1hb3M9XCJ6b29tLWluXCIgZGF0YS1hb3MtbWlycm9yPVwidHJ1ZVwiZGF0YS1hb3Mtb25jZT1cImZhbHNlXCJkYXRhLWFvcy1hbmNob3ItcGxhY2VtZW50PVwidG9wLWNlbnRlclwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiPiAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyMiBcIj5cclxuICAgICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdHJlQSBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5TdG9wXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIMOJTU9USU9OXHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8aDZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpZ2h0IGxldHRlclNwYWNpbmdTIHNvdXNUaXRyZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBGQUlSRSBWSUJSRVIgTEEgQ09SREUgSU5WSVNJQkxFXHJcbiAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckZsZXggY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveFZpZGVvXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuXHRcdFx0XHRcdDxpZnJhbWUgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgb2JqZWN0Rml0OiAnY292ZXInfX0gc3JjPXtgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHtpdGVtc1tcIlZpZGVvXCJdfWB9IHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBmcmFtZUJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd0Z1bGxTY3JlZW4+PC9pZnJhbWU+XHJcblx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGg0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRyZUIgbGlnaHQgbGV0dGVyU3BhY2luZyBjb250YWluZXIgY2VudGVyIGFjY3JvY2hlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNVU0NJVEVSIEzigJlFTU9USU9OIEVOIFVOIElOU1RBTlRcclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9Pntkb2N1bWVudC5sb2NhdGlvbiA9IFwiL2NsaWVudHMvMVwifX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcmdpbkJvdHRvbTIgYnRuUyBjZW50ZXIgbGlnaHQgbGV0dGVyU3BhY2luZ01cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEVOIFZPSVIgK1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9QYXJhbGxheD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtb3Rpb247XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1wYXJhbGxheCc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xyXG5pbXBvcnQgd2l0aFJlYWN0Q29udGVudCBmcm9tICdzd2VldGFsZXJ0Mi1yZWFjdC1jb250ZW50J1xyXG5cclxuXHJcbmZ1bmN0aW9uIEZvb3RlcigpIHtcclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0ZW1haWw6ICcnLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZmV0Y2goYC9hcGkvZm9vdGVycy8xYCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0LnRoZW4oXHJcblx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdHNldEl0ZW1zKHJlc3VsdCk7XHJcblx0XHQvL2NvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHR9LFxyXG5cdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0KGVycm9yKSA9PiB7XHJcblx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdClcclxuICB9LCBbXSlcclxuXHRjb25zdCBNeVN3YWwgPSB3aXRoUmVhY3RDb250ZW50KFN3YWwpXHJcblxyXG5cdGNvbnN0IGhhbmRsZUVtYWlsSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnBlcnNpc3QoKTtcclxuXHRcdHNldFZhbHVlcygodmFsdWVzKSA9PiAoe1xyXG5cdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdGVtYWlsOiBldmVudC50YXJnZXQudmFsdWUsXHJcblx0XHRcdFxyXG5cdFx0fSkpO1xyXG5cdFx0Y29uc29sZS5sb2codmFsdWVzLmVtYWlsKVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlLnRhcmdldC5jaGlsZHJlblsxXS5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRNeVN3YWwuZmlyZShcclxuXHRcdFx0J01lcmNpIScsXHJcblx0XHRcdCdWb3RyZSBlbWFpbCDDoCBiaWVuIMOpdMOpIGVucmVnaXN0csOpJyxcclxuXHRcdFx0J3N1Y2Nlc3MnXHJcblx0XHQgIClcclxuXHRcdGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0aGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXCJlbWFpbFwiOiB2YWx1ZXMuZW1haWwsIFwibmV3XCI6IHRydWUgfSksXHJcblx0XHR9O1xyXG5cdFx0ZmV0Y2goJy9hcGkvZW1haWxzJywgcmVxdWVzdE9wdGlvbnMpXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHR9O1xyXG5cdFx0cmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICB7LyogPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9ueHNYMG9HYy5qcGVnXCIgc3RyZW5ndGg9ezB9PiAqL31cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL254c1gwb0djLmpwZWcpXCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMXB4XCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXJcIiBjbGFzc05hbWU9XCJkZW1pYmxvY0Zvb3RlclwiIGFsdD1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbWlibG9jMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlTXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdHJlRSBsaWdodCBsZXR0ZXJTcGFjaW5nIG1hcmdpblN0b3BcIj5cclxuICAgICAgICAgICAgICAgIEVUIFNJIE9OIFNFIExBTsOHQUlUID9cclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuTCBjZW50ZXIgbGlnaHQgbGV0dGVyU3BhY2luZ01cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG4gICAgICAgICAgICAgICAgICBDT05UQUNUXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIiBsaWdodCBsZXR0ZXJTcGFjaW5nIGNvbnRhaW5lciBjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIEVOU0VNQkxFLCDDiUNSSVZPTlMgVk9UUkUgSElTVE9JUkVcclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50OVwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj48L0VsZW1lbnQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbWlibG9jRm9vdGVyMlwiIGFsdD1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbWlibG9jMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyZW50NFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZDXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjZW50ZXIgbWItNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3plbml0aC9pbWFnZXMvd1gyTENJVC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMjBcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWwyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpMiBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFpFTklUSFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLmFkcmVzc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGkyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb290ZXJUZXh0IGxpZ2h0IHRleHQtaDVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGkyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb290ZXJUZXh0IGxpZ2h0IHRleHQtaDVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMudGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkRcIj5cclxuICAgICAgICAgICAgICAgICAgPGg0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0cmVEIG1lZGl1bSBsZXR0ZXJTcGFjaW5nIG1hcmdpbkJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUkVKT0lHTkVaIDxiciAvPiBM4oCZQVZFTlRVUkVcclxuICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyczIgY2VudGVyRmxleCBjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vQUdFTkNFWkVOSVRIL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5zdGEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2FnZW5jZXplbml0aC8/aGw9ZnJcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmtlZGluMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvYWdlbmNlLXplbml0aC9cIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0cmVEIG1lZGl1bSBsZXR0ZXJTcGFjaW5nIG1hcmdpbkJvdHRvbSBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIE5FV1NMRVRURVJcclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRNYWlsIGNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRW1haWxJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2RVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0cmVDIG1lZGl1bSBsZXR0ZXJTcGFjaW5nXCI+U0lURSBNQVA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWwyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJmb290ZXJUZXh0IGxpZ2h0IHRleHQtaDVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQUNDVUVJTFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jbGllbnRzLzFcIiBjbGFzc05hbWU9XCJmb290ZXJUZXh0IGxpZ2h0IHRleHQtaDVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ0xJRU5UXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGkyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3Byb2pldHMvMVwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQUk9KRVRTXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGkyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJmb290ZXJUZXh0IGxpZ2h0IHRleHQtaDVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ09OVEFDVFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsaWdodCBmb290ZXJDcmVkaXQgbGV0dGVyU3BhY2luZ1NcIj5cclxuICAgICAgICAgICAgICAgIMKpIEFHRU5DRSBaRU5JVEggLyBUT1VTIERST0lUUyBSw4lTRVJWw4lTXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogPC9QYXJhbGxheD4gKi99XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuXHR9XHJcblxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBT1MgZnJvbSBcImFvc1wiO1xyXG5pbXBvcnQgXCJhb3MvZGlzdC9hb3MuY3NzXCI7XHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gSG9tZXBhZ2UoKSB7XHJcbiAgQU9TLmluaXQoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIDxkaXYgIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy94OW5lczVWLmpwZylcIn19IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIiBhbHQ9XCJob21lcGFnZVwiID4gKi99XHJcblxyXG4gICAgICA8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuXHRcdFx0XHRcdDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuXHRcdFx0XHQ8L3ZpZGVvPiBcclxuICAgICAgey8qIDxQYXJhbGxheCBiZ0ltYWdlPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDIxMzQyNDkxMjYtOWYzNzU1YTUwZDc4P2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNDcwJnE9ODBcIiBzdHJlbmd0aD17NDAwfT4gKi99XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHlCbHVlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lcjJcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXIyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjgwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvemVuaXRoL2ltYWdlcy9iSU8xcjlGLnBuZ1wiIGFsdD1cIkxvZ29cIiB3aWR0aD17MzMwfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZidmkgY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VtaWJvbGRcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjgwMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRoaW5cIj5GQUlURVM8L3NwYW4+IEJSSUxMRVJ7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRoaW5cIj4gVk9TIDwvc3Bhbj5JRMOJRVNcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiODAwXCJcclxuICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50MlwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj48L0VsZW1lbnQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPC9QYXJhbGxheD4gKi99XHJcbiAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXNoZWV0cy9idWxtYS9oZWxwZXJzL3NwYWNpbmcuc2Fzc1wiXHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBJbnN0YWZsdXgoKSB7bGV0IGluc3RhID0gdXNlUmVmKG51bGwpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgc2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9jZG4ubGlnaHR3aWRnZXQuY29tL3dpZGdldHMvbGlnaHR3aWRnZXQuanNcIlxyXG4gICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuXHJcbiAgfSwgW10pO1xyXG5cclxuXHJcblxyXG5cclxuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XHJcbiAgfVxyXG5cclxuXHJcblx0XHRyZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy94OW5lczVWLmpwZylcIn19IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIiBhbHQ9XCIjYWdlbmNlemVuaXRoXCI+XHJcbiAgICAgIDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG5cdFx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmc4Lm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuXHRcdFx0XHQ8L3ZpZGVvPiAqL31cclxuICAgICAgICA8UGFyYWxsYXhcclxuICAgICAgICAgIGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9aMXpJSkNLay5qcGVnXCJcclxuICAgICAgICAgIHN0cmVuZ3RoPXsyMDB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBkYXRhLWFvcz1cInpvb20taW5cIlxyXG4gICAgICAgICAgICBkYXRhLWFvcy1taXJyb3I9XCJ0cnVlXCJcclxuICAgICAgICAgICAgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudD1cInRvcC1jZW50ZXJcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIlxyXG4gICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6ICc1MHB4J319XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlcjJcIj5cclxuICAgICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdHJlQSBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5TdG9wXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICNBR0VOQ0VaRU5JVEhcclxuICAgICAgICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICByZWY9e2luc3RhfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyRmxleFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OlwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIHBhZGRpbmdUb3A6XCI1MHB4XCJ9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTFcIiA+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTJcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlM1wiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdj48cCBjbGFzc05hbWU9XCJJTUFHSU5FUlwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPklNQUdJTkVSPC9wPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdj48cCBjbGFzc05hbWU9XCJDUsOJRVJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5DUsOJRVI8L3A+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PjxwIGNsYXNzTmFtZT1cIlLDilZFUlwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPlLDilZFUjwvcD48L2Rpdj5cclxuICAgICAgICAgIDxkaXY+PHAgY2xhc3NOYW1lPVwiRU5TRU1CTEVcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5FTlNFTUJMRTwvcD48L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTRcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlNVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGU2XCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGU3XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZThcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlOVwiPjwvZGl2PiBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlMTBcIj48L2Rpdj4gXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTExXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTEyXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTEzXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTE0XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTE1XCI+PC9kaXY+ICAqL31cclxuICAgICAgICAgICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiLy9saWdodHdpZGdldC5jb20vd2lkZ2V0cy81MzBjNTkwYzY2Y2Y1ZmZhODQ0ZGVkNzUxYTZhNGNkNS5odG1sXCJcclxuICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5nPVwibm9cIlxyXG4gICAgICAgICAgICAgICAgICBhbGxvd3RyYW5zcGFyZW5jeT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaWdodHdpZGdldC13aWRnZXRcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOlwiNzAlXCIsIGJvcmRlcjpcIjBcIn19XHJcbiAgICAgICAgICAgICAgICA+PC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGg0XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDpcIjEwMHB4XCIsIG1hcmdpbkJvdHRvbTpcIjZ2aFwifX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpZ2h0IGxldHRlclNwYWNpbmcgY29udGFpbmVyIGNlbnRlciBtYXJnaW5Ub3BYTFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBVTiBVTklWRVJTIERFIFBPU1NJQklMSVRFU1xyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9QYXJhbGxheD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG5cdH1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBJbnN0YWZsdXg7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcbmltcG9ydCB3aXRoUmVhY3RDb250ZW50IGZyb20gJ3N3ZWV0YWxlcnQyLXJlYWN0LWNvbnRlbnQnXHJcblxyXG5cclxuZnVuY3Rpb24gTWluaUZvb3Rlcihsb2FkZWQpIHtcclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0ZW1haWw6ICcnLFxyXG5cdH0pO1xyXG5cdGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRmZXRjaChgL2FwaS9mb290ZXJzLzFgLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHQudGhlbihcclxuXHRcdChyZXN1bHQpID0+IHtcclxuXHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0c2V0SXRlbXMocmVzdWx0KTtcclxuXHRcdC8vY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdH0sXHJcblx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHQoZXJyb3IpID0+IHtcclxuXHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0Ly8gc2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0KVxyXG4gIH0sIFtdKVxyXG5cdGNvbnN0IE15U3dhbCA9IHdpdGhSZWFjdENvbnRlbnQoU3dhbClcclxuXHJcblx0Y29uc3QgaGFuZGxlRW1haWxJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucGVyc2lzdCgpO1xyXG5cdFx0c2V0VmFsdWVzKCh2YWx1ZXMpID0+ICh7XHJcblx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0ZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuXHRcdFx0XHJcblx0XHR9KSk7XHJcblx0XHRjb25zb2xlLmxvZyh2YWx1ZXMuZW1haWwpXHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGUudGFyZ2V0LmNoaWxkcmVuWzFdLmRpc2FibGVkID0gdHJ1ZTtcclxuXHRcdE15U3dhbC5maXJlKFxyXG5cdFx0XHQnTWVyY2khJyxcclxuXHRcdFx0J1ZvdHJlIGVtYWlsIMOgIGJpZW4gw6l0w6kgZW5yZWdpc3Ryw6knLFxyXG5cdFx0XHQnc3VjY2VzcydcclxuXHRcdCAgKVxyXG5cdFx0Y29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoeyBcImVtYWlsXCI6IHZhbHVlcy5lbWFpbCwgXCJuZXdcIjogdHJ1ZSB9KSxcclxuXHRcdH07XHJcblx0XHRmZXRjaCgnL2FwaS9lbWFpbHMnLCByZXF1ZXN0T3B0aW9ucylcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdH07XHJcblx0aWYobG9hZGVkLmxvYWRlZCA9PSB0cnVlKXtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL254c1gwb0djLmpwZWcpXCJ9fSBjbGFzc05hbWU9XCJkZW1pYmxvY0Zvb3RlcjJcIiBhbHQ9XCJmb290ZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbWlibG9jMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyZW50NFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZDXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjZW50ZXIgbWItNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3plbml0aC9pbWFnZXMvd1gyTENJVC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMjBcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWwyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpMiBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFpFTklUSFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLmFkcmVzc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGkyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwibWFpbHRvOmNvbnRhY3RAYWdlbmNlemVuaXRoLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLnRlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZEXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdHJlRCBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5Cb3R0b21cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFJFSk9JR05FWiA8YnIgLz4gTOKAmUFWRU5UVVJFXHJcbiAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnMyIGNlbnRlckZsZXggY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0FHRU5DRVpFTklUSC9cIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImluc3RhMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9hZ2VuY2V6ZW5pdGgvP2hsPWZyXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rZWRpbjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L2FnZW5jZS16ZW5pdGgvXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdHJlRCBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5Cb3R0b20gXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBORVdTTEVUVEVSXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0TWFpbCBjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjMwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUVtYWlsSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkVcIj5cclxuICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdHJlQyBtZWRpdW0gbGV0dGVyU3BhY2luZ1wiPlNJVEUgTUFQPC9oND5cclxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVsMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFDQ1VFSUxcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY2xpZW50cy8xXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENMSUVOVFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wcm9qZXRzLzFcIiBjbGFzc05hbWU9XCJmb290ZXJUZXh0IGxpZ2h0IHRleHQtaDVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUFJPSkVUU1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jb250YWN0XCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENPTlRBQ1RcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGlnaHQgZm9vdGVyQ3JlZGl0IGxldHRlclNwYWNpbmdTXCI+XHJcbiAgICAgICAgICAgICAgICDCqSBBR0VOQ0UgWkVOSVRIIC8gVE9VUyBEUk9JVFMgUsOJU0VSVsOJU1xyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICBcclxuXHJcblxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuXHR9XHJcblxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IE1pbmlGb290ZXI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1wYXJhbGxheCc7XHJcbmltcG9ydCB7IGEgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIFNhdGlzZmFjdGlvbigpIHtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIFxyXG5cdC8vIFJlbWFycXVlIDogbGUgdGFibGVhdSB2aWRlIGRlIGTDqXBlbmRhbmNlcyBbXSBpbmRpcXVlXHJcblx0Ly8gcXVlIHVzZUVmZmVjdCBuZSBz4oCZZXjDqWN1dGVyYSBxdeKAmXVuZSBmb2lzLCB1biBwZXUgY29tbWVcclxuXHQvLyBjb21wb25lbnREaWRNb3VudCgpXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKFwiL2dldFNhdGlzZmFjdGlvblwiKVxyXG5cdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHQudGhlbihcclxuXHRcdCAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICAgIHNldEl0ZW1zKHJlc3VsdCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuXHRcdCAgfSxcclxuXHRcdCAgLy8gUmVtYXJxdWUgOiBpbCBmYXV0IGfDqXJlciBsZXMgZXJyZXVycyBpY2kgcGx1dMO0dCBxdWUgZGFuc1xyXG5cdFx0ICAvLyB1biBibG9jIGNhdGNoKCkgYWZpbiBxdWUgbm91cyBu4oCZYXZhbGlvbnMgcGFzIGxlcyBleGNlcHRpb25zXHJcblx0XHQgIC8vIGR1ZXMgw6AgZGUgdsOpcml0YWJsZXMgYnVncyBkYW5zIGxlcyBjb21wb3NhbnRzLlxyXG5cdFx0ICAoZXJyb3IpID0+IHtcclxuXHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdCAgfVxyXG5cdFx0KVxyXG5cdH0sIFtdKVxyXG4gIFxyXG5cdGlmIChlcnJvcikge1xyXG5cdCAgcmV0dXJuIDxkaXY+RXJyZXVyIDoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG5cdH0gZWxzZSBpZiAoIWlzTG9hZGVkKSB7XHJcblx0ICByZXR1cm4gPGRpdj5DaGFyZ2VtZW50Li4uPC9kaXY+O1xyXG5cdH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZyhpdGVtcyk7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG4gICAgICB7LyogPGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCJ9fSBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XHJcblxyXG4gICAgICA8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuXHRcdFx0XHRcdDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnNS5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcblx0XHRcdFx0PC92aWRlbz4gKi99XHJcbiAgICAgIHsvKiA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL2FXRUxoazhBLmpwZWdcIiBzdHJlbmd0aD17MH0+ICovfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17e3BhZGRpbmdUb3A6ICc1MHB4JywgYmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy9hV0VMaGs4QS5qcGVnKVwiLCBoZWlnaHQ6XCJhdXRvXCIsIHBhZGRpbmdCb3R0b206IFwiMXB4XCJ9fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlcjJcIj5cclxuXHJcblxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdHJlQSBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5TdG9wXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+U0FUSVNGQUNUSU9OPC9oMT5cclxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0aXRyZUNlbnRlciBsaWdodCBsZXR0ZXJTcGFjaW5nU1wiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPsOKVFJFIMOAIFZPUyBDw5RUw4lTLCBD4oCZRVNUIEFWQU5UIFRPVVQgREVTIFJFTkNPTlRSRVMuPC9oNj5cclxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0aXRyZUNlbnRlciBsaWdodCBsZXR0ZXJTcGFjaW5nUyBwYWRkaW5nQm90dG9tXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+REVTIEhJU1RPSVJFUyBIVU1BSU5FUywgRVhDRVBUSU9OTkVMTEVTLCBPUklHSU5BTEVTLjwvaDY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyTWF4IGNlbnRlclwiPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1swXVswXS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4OHB4XCJ9fSBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMF1bMF0ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1swXVsxXS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMF1bMV0ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1swXVsyXS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMF1bMl0ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1swXVszXS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMF1bM10ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1swXVs0XS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMF1bNF0ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1swXVs1XS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMF1bNV0ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1swXVs2XS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMF1bNl0ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1swXVs3XS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMF1bN10ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1swXVs4XS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMF1bOF0ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1swXVs5XS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBzdHlsZT17e21hcmdpblJpZ2h0OlwiODhweFwifX0gY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17YC9pbWFnZXMvbG9nb2NsaWVudC8ke2l0ZW1zWzBdWzldLmxvZ299YH0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PjwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyTWF4IGNlbnRlclwiPlxyXG4gICAgICAgICAgIDxhIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXtgL2NsaWVudC8ke2l0ZW1zWzFdWzE5XS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjYwMFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjg4cHhcIn19IGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e2AvaW1hZ2VzL2xvZ29jbGllbnQvJHtpdGVtc1sxXVsxOV0ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1sxXVswXS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjYwMFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e2AvaW1hZ2VzL2xvZ29jbGllbnQvJHtpdGVtc1sxXVswXS5sb2dvfWB9IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj48L2E+XHJcbiAgICAgICAgICAgIDxhIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXtgL2NsaWVudC8ke2l0ZW1zWzFdWzFdLmlkfWB9ID48ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiNjAwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17YC9pbWFnZXMvbG9nb2NsaWVudC8ke2l0ZW1zWzFdWzFdLmxvZ299YH0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PjwvYT5cclxuICAgICAgICAgICAgPGEgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9e2AvY2xpZW50LyR7aXRlbXNbMV1bMl0uaWR9YH0gPjxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCI2MDBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMV1bMl0ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1sxXVszXS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjYwMFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e2AvaW1hZ2VzL2xvZ29jbGllbnQvJHtpdGVtc1sxXVszXS5sb2dvfWB9IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj48L2E+XHJcbiAgICAgICAgICAgIDxhIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXtgL2NsaWVudC8ke2l0ZW1zWzFdWzRdLmlkfWB9ID48ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiNjAwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17YC9pbWFnZXMvbG9nb2NsaWVudC8ke2l0ZW1zWzFdWzRdLmxvZ299YH0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PjwvYT5cclxuICAgICAgICAgICAgPGEgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9e2AvY2xpZW50LyR7aXRlbXNbMV1bNV0uaWR9YH0gPjxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCI2MDBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMV1bNV0ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1sxXVs2XS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjYwMFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e2AvaW1hZ2VzL2xvZ29jbGllbnQvJHtpdGVtc1sxXVs2XS5sb2dvfWB9IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj48L2E+XHJcbiAgICAgICAgICAgIDxhIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXtgL2NsaWVudC8ke2l0ZW1zWzFdWzddLmlkfWB9ID48ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiNjAwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17YC9pbWFnZXMvbG9nb2NsaWVudC8ke2l0ZW1zWzFdWzddLmxvZ299YH0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PjwvYT5cclxuICAgICAgICAgICAgPGEgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9e2AvY2xpZW50LyR7aXRlbXNbMV1bOF0uaWR9YH0gPjxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCI2MDBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBzdHlsZT17e21hcmdpblJpZ2h0OlwiODhweFwifX0gY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17YC9pbWFnZXMvbG9nb2NsaWVudC8ke2l0ZW1zWzFdWzhdLmxvZ299YH0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PjwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyTWF4IGNlbnRlclwiPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1sxXVs5XS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjEyMDBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4OHB4XCJ9fSBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMF1bOV0ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1sxXVsxMF0uaWR9YH0gPjxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCIxMjAwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17YC9pbWFnZXMvbG9nb2NsaWVudC8ke2l0ZW1zWzFdWzEwXS5sb2dvfWB9IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj48L2E+XHJcbiAgICAgICAgICAgIDxhIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXtgL2NsaWVudC8ke2l0ZW1zWzFdWzExXS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjEyMDBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMV1bMTFdLmxvZ299YH0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PjwvYT5cclxuICAgICAgICAgICAgPGEgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9e2AvY2xpZW50LyR7aXRlbXNbMV1bMTJdLmlkfWB9ID48ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiMTIwMFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e2AvaW1hZ2VzL2xvZ29jbGllbnQvJHtpdGVtc1sxXVsxMl0ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1sxXVsxM10uaWR9YH0gPjxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCIxMjAwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17YC9pbWFnZXMvbG9nb2NsaWVudC8ke2l0ZW1zWzFdWzEzXS5sb2dvfWB9IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj48L2E+XHJcbiAgICAgICAgICAgIDxhIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXtgL2NsaWVudC8ke2l0ZW1zWzFdWzE0XS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjEyMDBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMV1bMTRdLmxvZ299YH0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PjwvYT5cclxuICAgICAgICAgICAgPGEgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9e2AvY2xpZW50LyR7aXRlbXNbMV1bMTVdLmlkfWB9ID48ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiMTIwMFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e2AvaW1hZ2VzL2xvZ29jbGllbnQvJHtpdGVtc1sxXVsxNV0ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1sxXVsxNl0uaWR9YH0gPjxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCIxMjAwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17YC9pbWFnZXMvbG9nb2NsaWVudC8ke2l0ZW1zWzFdWzE2XS5sb2dvfWB9IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj48L2E+XHJcbiAgICAgICAgICAgIDxhIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXtgL2NsaWVudC8ke2l0ZW1zWzFdWzE3XS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjEyMDBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMV1bMTddLmxvZ299YH0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PjwvYT5cclxuICAgICAgICAgICAgPGEgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9e2AvY2xpZW50LyR7aXRlbXNbMV1bMThdLmlkfWB9ID48ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiMTIwMFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6XCI4OHB4XCJ9fSBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMV1bMThdLmxvZ299YH0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PjwvYT5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdHJlQiBsaWdodCBsZXR0ZXJTcGFjaW5nIGNvbnRhaW5lciBjZW50ZXIgYWNjcm9jaGUgbWFyZ2luQm90dG9tMlwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiNnZoXCJ9fSBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5MRSBSRVNURSBPTiBM4oCZw4lDUklSQSBFTlNFTUJMRTwvaDQ+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPC9QYXJhbGxheD4gKi99XHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgU2F0aXNmYWN0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2Fycm93LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBWaXNpb24oKSAge1xyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblxyXG4gICAgICB7LyogPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZzYubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+ICovfVxyXG4gICAgICB7LyogPGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCJ9fSBjbGFzc05hbWU9J2JhY2tncm91bmQnPiAqL31cclxuXHJcbiAgICAgIHsvKiA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL2FXRUxoazhBLmpwZWdcIiBzdHJlbmd0aD17MH0+ICovfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17e3BhZGRpbmdUb3A6ICc1MHB4JywgYmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy9hV0VMaGs4QS5qcGVnKVwiLCBoZWlnaHQ6XCJhdXRvXCIsIHBhZGRpbmdCb3R0b206IFwiMXB4XCJ9fT5cclxuICAgICAgPGRpdiBkYXRhLWFvcz1cInpvb20taW5cIiBkYXRhLWFvcy1taXJyb3I9XCJ0cnVlXCJkYXRhLWFvcy1vbmNlPVwiZmFsc2VcImRhdGEtYW9zLWFuY2hvci1wbGFjZW1lbnQ9XCJ0b3AtY2VudGVyXCJkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIiBzdHlsZT17e2hlaWdodDpcIjg1MHB4XCJ9fT5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRyZUEgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPlZJU0lPTjwvaDE+XHJcbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibGlnaHQgbGV0dGVyU3BhY2luZ1Mgc291c1RpdHJlXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+VU5FIFJFTkNPTlRSRSBRVUkgQ0hBTkdFIFRPVVQ8L2g2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyXCI+XHJcbiAgICAgICAgICAgIDxTd2lwZXJcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldz17MX1cclxuICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM9e3RydWV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3aXBlcjNcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcl9fY29udGVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJlbnQzXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXNpb25Cb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBvYmplY3RGaXQ6ICdjb3Zlcid9fXNyYz1cImh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvYmI1ZTNiX2ExMDUyMzliZmQxODQ4YjQ4OTI5MzlkODc5OGNkNjU3fm12Mi5qcGcvdjEvY3JvcC94XzEwOSx5XzAsd183MzQsaF85MDAvZmlsbC93XzI3MCxoXzM0OCxhbF9jLHFfODAsdXNtXzEuMjBfMS4wMF8wLjAxLGVuY19hdXRvL2JiNWUzYl9hMTA1MjM5YmZkMTg0OGI0ODkyOTM5ZDg3OThjZDY1N35tdjIuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ2aXNpb25UZXh0MiBtZWRpdW1cIj5NQVRISVM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkNPTlNFSUw8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5Ow4lHT0NJQVRJT048L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj7DiVbDiU5FTUVOVElFTDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkdFU1RJT04gREUgUFJPSkVUPC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+RElSRUNUSU9OIEFSVElTVElRVUU8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5ESVJFQ1RJT04gRCdFWFBMT0lUQVRJT048L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkTDiVZFTE9QUEVNRU5UIENPTU1FUkNJQUwgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwiYXJyb3dcIiBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgdG9wOlwiODUlXCIsIGxlZnQ6XCI3NSVcIiwgd2lkdGg6XCIzOHB4XCJ9fSBzcmM9XCIvemVuaXRoL2ltYWdlcy9OaWNlUG5nX2Fycm93LWJvcmRlci1wbmdfMzQ1NDQ5MHcucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcl9fY29udGVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJlbnQzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJhcnJvdzJcIiBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgdG9wOlwiODUlXCIsIGxlZnQ6XCIwJVwiLCB3aWR0aDpcIjM4cHhcIn19IHNyYz1cIi96ZW5pdGgvaW1hZ2VzL05pY2VQbmdfYXJyb3ctYm9yZGVyLXBuZ18zNDU0NDkwdy5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXNpb25Cb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBvYmplY3RGaXQ6ICdjb3Zlcid9fXNyYz1cImh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvOTRiMjU1Xzc0ODg1ZDM3NGNmODQyMTQ4OTljOWRmNjBkNjUzNjM4fm12Mi5qcGcvdjEvZmlsbC93XzI4NCxoXzM3MSxhbF9jLHFfODAsdXNtXzEuMjBfMS4wMF8wLjAxLGVuY19hdXRvL0FWQVRBUiUyMFJPTiUyMEIuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ2aXNpb25UZXh0MiBtZWRpdW1cIj5ST048L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkNPTlNFSUw8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5Ow4lHT0NJQVRJT048L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj7DiVbDiU5FTUVOVElFTDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkdFU1RJT04gREUgUFJPSkVUPC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+RElSRUNUSU9OIEFSVElTVElRVUU8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5ESVJFQ1RJT04gRCdFWFBMT0lUQVRJT048L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkTDiVZFTE9QUEVNRU5UIENPTU1FUkNJQUwgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICA8L1N3aXBlcj5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIHsvKiA8L1BhcmFsbGF4PiAqL31cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgVmlzaW9uOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQgTWFycXVlZSBmcm9tIFwicmVhY3QtZmFzdC1tYXJxdWVlXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tIFwicmVhY3QtcGFyYWxsYXhcIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzaGVldHMvYnVsbWEvaGVscGVycy9zcGFjaW5nLnNhc3NcIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCI7XHJcblxyXG5jb25zdCBXb3JkcGFnZSA9ICh7fSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy82V3ZlbW0zSy5qcGVnXCIgc3RyZW5ndGg9ezB9PiAqL31cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzLzZXdmVtbTNLLmpwZWcpXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiNTcwcHhcIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImRlbWlibG9jXCJcclxuICAgICAgICBhbHQ9XCJ3b3JkcGFnZVwiXHJcbiAgICAgID5cclxuICAgICAgICB7LyogPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+ICovfVxyXG4gICAgICAgIHsvKiA8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZzQubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPiAqL31cclxuICAgICAgICB7LyogPC92aWRlbz4gKi99XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgYWx0PVwiTGlzdGUgZGUgbW90c1wiIHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBkYXRhLWFvcz1cInpvb20taW5cIlxyXG4gICAgICAgICAgICBkYXRhLWFvcy1taXJyb3I9XCJ0cnVlXCJcclxuICAgICAgICAgICAgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCJcclxuICAgICAgICAgICAgZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudD1cInRvcC1jZW50ZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmVudFwiPlxyXG4gICAgICAgICAgICAgIDxNYXJxdWVlXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE3MHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgZ3JhZGllbnQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3b3JkcGFnZSBsZXR0ZXJTcGFjaW5nIGxpZ2h0IGdyaWQxIHB4LTZcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIndvcmRwYWdlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgUsOJQUNUSVZJVMOJXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1hcmdpbiBtZWRpdW0gd29yZHBhZ2VUZXh0IGdyaWQyIHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2UgbGV0dGVyU3BhY2luZyBvdXRsaW5lIG5vcm1hbCBncmlkMyBweC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIFBST1hJTUlUw4lcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIG1hcmdpbiBtZWRpdW0gd29yZHBhZ2VUZXh0IG91dGxpbmUgZ3JpZDQgcHItNVwiPsK3PC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3b3JkcGFnZSBsaWdodCBsZXR0ZXJTcGFjaW5nIGdyaWQ1IHB4LTZcIj5QQVNTSU9OPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0ICBtZWRpdW0gZ3JpZDYgcHItNVwiPsK3PC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3b3JkcGFnZSBub3JtYWwgb3V0bGluZSBsZXR0ZXJTcGFjaW5nIGdyaWQ3IHB4LTZcIj5cclxuICAgICAgICAgICAgICAgICAgU1RSQVTDiUdJRVxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG91dGxpbmUgbWVkaXVtIGdyaWQ2IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgPC9NYXJxdWVlPlxyXG4gICAgICAgICAgICAgIDxNYXJxdWVlXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE3MHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPXtcInJpZ2h0XCJ9XHJcbiAgICAgICAgICAgICAgICBncmFkaWVudD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndvcmRwYWdlIG5vcm1hbCBsZXR0ZXJTcGFjaW5nIGdyaWQ5IHB4LTZcIj5FVkVOVDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBtZWRpdW0gZ3JpZDEwIHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2UgbWFycm9uIG5vcm1hbCBsZXR0ZXJTcGFjaW5nIGdyaWQxMSBweC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIFpFTklUSFxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG91dGxpbmUgbWVkaXVtIGdyaWQxMiBwci01XCI+wrc8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndvcmRwYWdlIG5vcm1hbCBsZXR0ZXJTcGFjaW5nIGdyaWQxMyBweC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIENPTlNFSUxcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBtZWRpdW0gZ3JpZDE0IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2Ugbm9ybWFsIGxldHRlclNwYWNpbmcgZ3JpZDE1IHB4LTZcIj5cclxuICAgICAgICAgICAgICAgICAgQ09NTVVOSUNBVElPTlxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG91dGxpbmUgbWVkaXVtIGdyaWQ2IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgPC9NYXJxdWVlPlxyXG4gICAgICAgICAgICAgIDxNYXJxdWVlXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE3MHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgZ3JhZGllbnQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3b3JkcGFnZSBtZWRpdW0gbGV0dGVyU3BhY2luZyBncmlkMTcgcHgtNlwiPlxyXG4gICAgICAgICAgICAgICAgICBDUsOJQVRJVklUw4lcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBtZWRpdW0gZ3JpZDE4IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2UgbGlnaHQgb3V0bGluZSBsZXR0ZXJTcGFjaW5nIGdyaWQxOSBweC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIFLDilZFUlxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG91dGxpbmUgbWVkaXVtIGdyaWQyMCBwci01XCI+wrc8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndvcmRwYWdlIGxpZ2h0IGxldHRlclNwYWNpbmcgZ3JpZDIxIHB4LTZcIj5cclxuICAgICAgICAgICAgICAgICAgQU1CSVRJT05cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBtZWRpdW0gZ3JpZDIyIHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2Ugb3V0bGluZSBub3JtYWwgbGV0dGVyU3BhY2luZyBncmlkMjMgcHgtNlwiPlxyXG4gICAgICAgICAgICAgICAgICBJTUFHSU5BVElPTlxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG91dGxpbmUgbWVkaXVtIGdyaWQ2IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgPC9NYXJxdWVlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDwvUGFyYWxsYXg+ICovfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmRwYWdlO1xyXG4iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL19uYXZiYXInO1xyXG5pbXBvcnQgUHJvamVjdFBhZ2VPbmUgZnJvbSBcIi4vX3Byb2plY3RwYWdlT25lXCI7XHJcbmltcG9ydCBQcm9qZWN0cGFnZVR3byBmcm9tICcuL19wcm9qZWN0cGFnZVR3byc7XHJcbmltcG9ydCBQcm9qZWN0cGFnZVRocmVlIGZyb20gJy4vX3Byb2plY3RwYWdlVGhyZWUnO1xyXG5pbXBvcnQgUHJvamVjdHBhZ2VGb3VyIGZyb20gJy4vX3Byb2plY3RwYWdlRm91cic7XHJcbmltcG9ydCBQcm9qZWN0cGFnZUZpdmUgZnJvbSAnLi9fcHJvamVjdHBhZ2VGaXZlJztcclxuaW1wb3J0IFByb2plY3RwYWdlU2l4IGZyb20gJy4vX3Byb2plY3RwYWdlU2l4JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNaW5pRm9vdGVyIGZyb20gJy4uL0hvbWVwYWdlL19taW5pRm9vdGVyJztcclxuXHJcbmZ1bmN0aW9uIFByb2plY3RwYWdlKCkge1xyXG5cdGZ1bmN0aW9uIGZhZGVPdXQoIGVsZW0sIG1zIClcclxuXHR7XHJcblx0aWYoICEgZWxlbSApXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdGlmKCBtcyApXHJcblx0e1xyXG5cdFx0dmFyIG9wYWNpdHkgPSAxO1xyXG5cdFx0dmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwoIGZ1bmN0aW9uKCkge1xyXG5cdFx0b3BhY2l0eSAtPSA1MCAvIG1zO1xyXG5cdFx0aWYoIG9wYWNpdHkgPD0gMCApXHJcblx0XHR7XHJcblx0XHRcdGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG5cdFx0XHRvcGFjaXR5ID0gMDtcclxuXHRcdFx0ZWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRcdGVsZW0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcblx0XHR9XHJcblx0XHRlbGVtLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG5cdFx0ZWxlbS5zdHlsZS5maWx0ZXIgPSBcImFscGhhKG9wYWNpdHk9XCIgKyBvcGFjaXR5ICogMTAwICsgXCIpXCI7XHJcblx0XHR9LCA1MCApO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0ZWxlbS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuXHRcdGVsZW0uc3R5bGUuZmlsdGVyID0gXCJhbHBoYShvcGFjaXR5PTApXCI7XHJcblx0XHRlbGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdGVsZW0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcblx0fVxyXG5cdH1cclxuXHRjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZEltZywgc2V0SXNMb2FkZWRJbWddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZE5leHRQcmV2LCBzZXRJc0xvYWRlZE5leHRQcmV2XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNJbWdSZWFkeSwgc2V0SW1nUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbcHJlY2ksIHNldFByZWNpXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbc2Vjb25kLCBzZXRTZWNvbmRdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbTmV4dFByZXYsIHNldE5leHRQcmV2XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRpZihpZCl7XHJcblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0XHRmZXRjaChgL2FwaS9wcm9qZXRzLyR7aWR9YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRJdGVtcyhyZXN1bHQpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cclxuXHRcdFx0ZmV0Y2goYC9nZXRJbWFnZXNQcm9qZXQvJHtpZH1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdGltZykgPT4ge1xyXG5cdFx0XHRcdGxldCB0aGlzUmVzID0gSlNPTi5wYXJzZShyZXN1bHRpbWcpXHJcblx0XHRcdFx0c2V0SXNMb2FkZWRJbWcodHJ1ZSk7XHJcblx0XHRcdFx0c2V0SW1hZ2VzKEpTT04ucGFyc2UocmVzdWx0aW1nKSk7XHJcblx0XHRcdFx0aWYoIHRoaXNSZXMgPT0gXCJbXVwiIHx8IHRoaXNSZXMubGVuZ3RoID09IDApe1xyXG5cdFx0XHRcdFx0c2V0SW1nUmVhZHkodHJ1ZSlcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZih0aGlzUmVzKXtcclxuXHRcdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzUmVzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpc1Jlc1tpXSlcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coaSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlc1tpXS5oZWFkZXIpXHJcblx0XHRcdFx0XHRcdFx0c2V0SGVhZGVyKHRoaXNSZXNbaV0pXHJcblx0XHRcdFx0XHRcdGlmKHRoaXNSZXNbaV0uZm9jdXMpXHJcblx0XHRcdFx0XHRcdFx0c2V0UHJlY2kodGhpc1Jlc1tpXSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlc1tpXS5zZWNvbmRhaXJlKVxyXG5cdFx0XHRcdFx0XHRcdHNldFNlY29uZCh0aGlzUmVzW2ldKVxyXG5cdFx0XHRcdFx0XHQvLyBpZihpbWFnZXNbaV0udmlzaWJsZSlcclxuXHRcdFx0XHRcdFx0Ly8gXHRzZXREaXNwbGF5KC4uLmltYWdlc1tpXSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlcy5sZW5ndGgtMSA9PSBpKXtcclxuXHRcdFx0XHRcdFx0XHRzZXRJbWdSZWFkeSh0cnVlKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHJcblx0XHRcdGZldGNoKGAvTmV4UHJldlAvJHtpZH1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdGxldCBOZXh0ID0gSlNPTi5wYXJzZShyZXN1bHRbMF0pXHJcblx0XHRcdFx0bGV0IFByZXYgPSBKU09OLnBhcnNlKHJlc3VsdFsxXSlcclxuXHRcdFx0XHRpZihOZXh0ICYmIFByZXYpe1xyXG5cdFx0XHRcdFx0c2V0TmV4dFByZXYoW05leHQsIFByZXZdKTtcclxuXHRcdFx0XHRcdGlmKE5leHRQcmV2KXtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coTmV4dFByZXYpXHJcblx0XHRcdFx0XHRcdHNldElzTG9hZGVkTmV4dFByZXYodHJ1ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdH0sIFtdKVxyXG5cdH1cclxuXHJcblx0aWYgKGVycm9yKSB7XHJcblx0XHQgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuXHQgIH0gZWxzZSBpZiAoKCFpc0xvYWRlZCB8fCAhaXNJbWdSZWFkeSB8fCAhaXNMb2FkZWROZXh0UHJldikgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJykge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8c3ZnIGlkPVwiUmVhY3RMb2FkZXJcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLXN0aWxsXCIgcG9pbnRzPVwiMCwwIDEwMCwwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLXN0aWxsXCIgcG9pbnRzPVwiMCwwIDAsMTAwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLWFuaW1hdGlvblwiIHBvaW50cz1cIjAsMCAxMDAsMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1hbmltYXRpb25cIiBwb2ludHM9XCIwLDAgMCwxMDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHQgIH0gZWxzZSB7XHJcblx0XHRmYWRlT3V0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjUmVhY3RMb2FkZXJcIiwgMTAwMCkpXHJcblx0XHRcdHJldHVybiAoIFxyXG5cdFx0XHRcdDw+XHJcblx0XHRcdFx0PE5hdmJhcj48L05hdmJhcj5cclxuXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PFByb2plY3RQYWdlT25lIGRhdGE9e2l0ZW1zfT48L1Byb2plY3RQYWdlT25lPlxyXG5cdFx0XHRcdDxQcm9qZWN0cGFnZVR3byBkYXRhPXtpdGVtc30+PC9Qcm9qZWN0cGFnZVR3bz5cclxuXHRcdFx0XHQ8UHJvamVjdHBhZ2VUaHJlZSBkYXRhPXtzZWNvbmR9PjwvUHJvamVjdHBhZ2VUaHJlZT5cclxuXHRcdFx0XHQ8UHJvamVjdHBhZ2VGb3VyIHByZWNpPXtwcmVjaX0gZGF0YTI9e2l0ZW1zfT48L1Byb2plY3RwYWdlRm91cj5cclxuXHRcdFx0XHQ8UHJvamVjdHBhZ2VGaXZlIGltYWdlcz17aW1hZ2VzfT48L1Byb2plY3RwYWdlRml2ZT5cclxuXHRcdFx0XHQ8UHJvamVjdHBhZ2VTaXggZGF0YT17aXRlbXN9IG5wPXtOZXh0UHJldn0+PC9Qcm9qZWN0cGFnZVNpeD5cclxuXHRcdFx0XHQ8TWluaUZvb3RlciBsb2FkZWQ9e3RydWV9PjwvTWluaUZvb3Rlcj5cclxuXHRcdFx0XHQ8Lz5cclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcbi8vXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RwYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tIFwicmVhY3QtcGFyYWxsYXhcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXNoZWV0cy9idWxtYS9lbGVtZW50cy9jb250YWluZXIuc2Fzc1wiXHJcbmltcG9ydCBMaWdodGJveCBmcm9tIFwieWV0LWFub3RoZXItcmVhY3QtbGlnaHRib3hcIjtcclxuaW1wb3J0IFRodW1ibmFpbHMgZnJvbSBcInlldC1hbm90aGVyLXJlYWN0LWxpZ2h0Ym94L3BsdWdpbnMvdGh1bWJuYWlsc1wiO1xyXG5pbXBvcnQgXCJ5ZXQtYW5vdGhlci1yZWFjdC1saWdodGJveC9wbHVnaW5zL3RodW1ibmFpbHMuY3NzXCI7XHJcbmltcG9ydCBcInlldC1hbm90aGVyLXJlYWN0LWxpZ2h0Ym94L3N0eWxlcy5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIFByb2plY3RwYWdlRml2ZShpbWFnZXMpIHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgbGV0IGFycmF5SW1hZ2UgPSBbXVxyXG4gIGNvbnNvbGUubG9nKGltYWdlcy5pbWFnZXMpO1xyXG4gIGltYWdlcy5pbWFnZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgIGxldCBpdGVtID0geyBzcmM6IGAvaW1hZ2VzL2ltYWdlcHJvamV0LyR7ZWxlbWVudC5pbWFnZX1gfVxyXG4gICAgYXJyYXlJbWFnZS5wdXNoKGl0ZW0pXHJcbiAgfSk7XHJcblxyXG4gIGlmKGFycmF5SW1hZ2UubGVuZ3RoPjApe1xyXG4gIGNvbnNvbGUubG9nKGFycmF5SW1hZ2UpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL3plbml0aC9pbWFnZXMvWjF6SUpDS2suanBlZ1wiIHN0cmVuZ3RoPXs4MDB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLGhlaWdodDpcIjEwMCVcIiwgZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwifX0+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtY2VudGVyZWRcIiBzdHlsZT17e2hlaWdodDpcIjkwJVwiLHdpZHRoOlwiODAlXCIsIHBhZGRpbmdUb3A6XCI1MHB4XCJ9fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1vbmUtdGhpcmRcIiBzdHlsZT17e2JhY2tncm91bmQ6XCIjMDIxMTFEXCIsIHBhZGRpbmc6XCIwXCIsIHBhZGRpbmc6XCIwXCJ9fT5cclxuICAgICAgICAgICAgICB7aW1hZ2VzLmltYWdlc1swXSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ltYWdlcy9pbWFnZXByb2pldC9cIiArIGltYWdlcy5pbWFnZXNbMF0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgd2lkdGg6XCIxMDAlXCIsIGhlaWdodDpcIjEwMCVcIn19PjxpbWcgc3R5bGU9e3t3aWR0aDpcIjUwJVwifX0gc3JjPXtcIi96ZW5pdGgvYXV0cmUvbm9JbWcucG5nXCJ9IGFsdD1cIlwiLz48L2Rpdj4pfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1vbmUtdGhpcmQgY29sdW1ucyBpcy1tdWx0aWxpbmUgbXgtNVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtZnVsbCBteS01XCIgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiIzAyMTExRFwiLCBwYWRkaW5nOlwiMFwifX0+ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge2ltYWdlcy5pbWFnZXNbMV0gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzpcIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ltYWdlcy9pbWFnZXByb2pldC9cIiArIGltYWdlcy5pbWFnZXNbMV0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgd2lkdGg6XCIxMDAlXCIsIGhlaWdodDpcIjEwMCVcIn19PjxpbWcgc3R5bGU9e3t3aWR0aDpcIjUwJVwifX0gc3JjPXtcIi96ZW5pdGgvYXV0cmUvbm9JbWcucG5nXCJ9IGFsdD1cIlwiLz48L2Rpdj4pfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtZnVsbCBteS01XCIgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiIzAyMTExRFwiLCBwYWRkaW5nOlwiMFwifX0+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7aW1hZ2VzLmltYWdlc1syXSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL2ltYWdlcHJvamV0L1wiICsgaW1hZ2VzLmltYWdlc1syXS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6ICg8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCB3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiMTAwJVwifX0+PGltZyBzdHlsZT17e3dpZHRoOlwiNTAlXCJ9fSBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn0gYWx0PVwiXCIvPjwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS10aGlyZCBpcy1tb2JpbGVcIiBzdHlsZT17e2JhY2tncm91bmQ6XCIjMDIxMTFEXCIsIHBhZGRpbmc6XCIwXCJ9fT5cclxuICAgICAgICAgICAgICB7aW1hZ2VzLmltYWdlc1szXSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOlwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL2ltYWdlcHJvamV0L1wiICsgaW1hZ2VzLmltYWdlc1szXS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6ICg8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCB3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiMTAwJVwifX0+PGltZyBzdHlsZT17e3dpZHRoOlwiNTAlXCJ9fSBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn0gYWx0PVwiXCIvPjwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tb2JpbGUgaXMtY2VudGVyZWQgbXQtNS1mdWxsaGRcIiBzdHlsZT17e3Bvc2l0aW9uOiBcImFic29sdXRlXCIsIGJvdHRvbTpcIjI1cHhcIiwgd2lkdGg6XCIxMDElXCJ9fT4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9IGNsYXNzTmFtZT1cImJ0blMgY2VudGVyIGxpZ2h0IGxldHRlclNwYWNpbmdNIG1iLTYgbXQtMFwiPlxyXG4gICAgICAgICAgICAgICAgRU4gVk9JUiArXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gIFxyXG4gICAgICAgICAgICA8TGlnaHRib3hcclxuICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgIGNsb3NlPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICBwbHVnaW5zPXtbVGh1bWJuYWlsc119XHJcbiAgICAgICAgICAgICAgc2xpZGVzPXthcnJheUltYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9QYXJhbGxheD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHBhZ2VGaXZlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIFByb2plY3RwYWdlRm91cih7cHJlY2ksIGRhdGEyfSkge1xyXG5cdGNvbnNvbGUubG9nKHByZWNpKVxyXG5cdGlmKGRhdGEyLmZvY3VzKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzLzZXdmVtbTNLLmpwZWcpXCIsIGhlaWdodDogXCIxMTAwcHhcIn19IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nJ3N0eWxlPXt7IGhlaWdodDogXCIxMTAwcHhcIn19PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyMic+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyQ2VudGVyQSc+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmVudDIxIG1hcmdpblRvcCc+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFyZ2luVG9wMicgPlxyXG5cdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9J2xpZ2h0IGxldHRlclNwYWNpbmdTJz5Gb2N1czwvaDM+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xpZ2h0IGNvbnRhaW5lckNlbnRlckNsaWVudCB0ZXh0LWg1JyBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ319IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmRhdGEyLmZvY3VzfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9JyBib3hDbGllbnQnIHN0eWxlPXt7aGVpZ2h0OiAnODAwcHgnLCB3aWR0aDpcIjYwMHB4XCJ9fT5cclxuXHRcdFx0XHRcdFx0XHR7cHJlY2kuaW1hZ2UgPyAoPGltZyBjbGFzc05hbWU9JyBjb250YWluJyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17XCIvaW1hZ2VzL2ltYWdlcHJvamV0L1wiICsgcHJlY2kuaW1hZ2V9IGFsdD1cIlwiLz4pIDogKDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIHdpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT48aW1nIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19IHNyYz17XCIvemVuaXRoL2F1dHJlL25vSW1nLnBuZ1wifSBhbHQ9XCJcIi8+PC9kaXY+KX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2Plx0XHRcclxuXHJcblxyXG5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9fVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RwYWdlRm91cjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gUHJvamVjdHBhZ2VPbmUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQxXCIgYWx0PVwiaG9tZXBhZ2VcIj5cclxuXHJcblx0XHRcdDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG5cdFx0XHRcdDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuXHRcdFx0XHQ8L3ZpZGVvPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHlCbHVlXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyMlwiPlxyXG5cdFx0XHRcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cIlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvemVuaXRoL2ltYWdlcy9iSU8xcjlGLnBuZ1wiIGFsdD1cIkxvZ29cIiB3aWR0aD17MjAwfSBjbGFzc05hbWU9XCJjZW50ZXJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cdFxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e3RleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnfX0gY2xhc3NOYW1lPVwiY2xpZW50cGFnZVRleHRcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwibWVkaXVtIG1hcmdpblN0b3AgY2xpZW50RGV0YWlsXCI+e2RhdGEuZGF0YS5wcm9qZXR9PC9oMT5cclxuXHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPVwibGlnaHQgbWFyZ2luU3RvcCBjbGllbnREZXRhaWxcIj57ZGF0YS5kYXRhLnNlY3RldXIuc2VjdGV1cn08L2g2PlxyXG5cdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuY2xpZW50ID8gPHAgY2xhc3NOYW1lPVwibGlnaHQgbWFyZ2luU3RvcCBjbGllbnREZXRhaWxcIj5VTiBQUk9KRVQgUE9VUiA6IHtkYXRhLmRhdGEuY2xpZW50Lm5vbUNsaWVudH08L3A+IDogIDxwIGNsYXNzTmFtZT1cImxpZ2h0IG1hcmdpblN0b3AgY2xpZW50RGV0YWlsXCI+VU4gUFJPSkVUIFBPVVIgOiBOL0E8L3A+fVxyXG5cdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuZHVyZWUgPyA8cCBjbGFzc05hbWU9XCJsaWdodCBjbGllbnREZXRhaWxcIj5EVVLDiUUgUFJPSkVUIDoge2RhdGEuZGF0YS5kdXJlZX08L3A+IDogPHAgY2xhc3NOYW1lPVwibGlnaHQgY2xpZW50RGV0YWlsXCI+RFVSw4lFIFBST0pFVCA6IE4vQTwvcD59XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIHN0eWxlPXt7dGV4dERlY29yYXRpb246IFwibm9uZVwiLCBjb2xvcjogXCJ3aGl0ZVwifX0gdG89e2Avc2VhcmNoY2F0L3Byb2pldC8ke2RhdGEuZGF0YS5jYXRlZ29yaWVbMF0uaWR9LyR7ZGF0YS5kYXRhLmNhdGVnb3JpZVswXS5jYXRlZ29yaWV9YH0+PHAgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZVwiLCB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ319IGNsYXNzTmFtZT1cImxpZ2h0IGNsaWVudERldGFpbDJcIj57ZGF0YS5kYXRhLmNhdGVnb3JpZVswXS5jYXRlZ29yaWV9PC9wPjwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLmNhdGVnb3JpZVsxXSAmJiA8PjxwIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmVcIn19IGNsYXNzTmFtZT1cImxpZ2h0IGNsaWVudERldGFpbDJcIj4gICB8ICAgPC9wPiA8TGluayB0bz17YC9zZWFyY2hjYXQvY2xpZW50LyR7ZGF0YS5kYXRhLmNhdGVnb3JpZVsxXS5pZH0vJHtkYXRhLmRhdGEuY2F0ZWdvcmllWzFdLmNhdGVnb3JpZX1gfSA+PHAgY2xhc3NOYW1lPVwibGlnaHQgY2xpZW50RGV0YWlsMlwiIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmVcIiwgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwid2hpdGVcIn19PntkYXRhLmRhdGEuY2F0ZWdvcmllWzFdLmNhdGVnb3JpZX08L3A+PC9MaW5rPjwvPn1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlcjNcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDQgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSd9fSBjbGFzc05hbWU9XCJsaWdodCBsZXR0ZXJTcGFjaW5nUyAgZGlzY292ZXJDbGllbnQyXCI+e2RhdGEuZGF0YS5taXNzaW9ufTwvaDQ+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsaWdodCAgZGlzY292ZXJDbGllbnRcIj5Ew4lDT1VWUkVaPC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGluZUNsaWVudFwiID48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHBhZ2VPbmU7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gUHJvamVjdHBhZ2VTaXgoe2RhdGEsIG5wfSkge1xyXG5cdGlmKG5wWzBdKXtcclxuXHRcdGlmKG5wWzBdWzBdID09ICdudWxsJylcclxuXHRcdFx0bnBbMF1bMF0gPSBmYWxzZTtcclxuXHRcdGlmKG5wWzBdWzFdID09ICdudWxsJylcclxuXHRcdFx0bnBbMV1bMF0gPSBmYWxzZTtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzLzZXdmVtbTNLLmpwZWcpXCJ9fSBjbGFzc05hbWU9J2RlbWlibG9jT3BhY2l0eSc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXJDZW50ZXIgbWFyZ2luVG9wUycgc3R5bGU9e3ttYXJnaW5Ub3A6XCIwXCJ9fT5cclxuXHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nbWVkaXVtIGNlbnRlclRleHQnPlVOIFTDiU1PSUdOQUdFPC9oND5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xpZ2h0IGNlbnRlclRleHQnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmRhdGEudGVtb2lnbmFnZX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHJcblx0XHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCJ9fSBjbGFzc05hbWU9J2RlbWlibG9jQ2xpZW50Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkZW1pYmxvY09wYWNpdHknPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyZW50Q2xpZW50TmV4dFByZXYnPlxyXG5cclxuXHRcdFx0XHRcdFx0XHR7bnBbMV1bMF0gJiZcclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdDbGllbnROZXh0UHJldjEnIG9uQ2xpY2s9eygpPT57bG9jYXRpb24uaHJlZiA9IFwiL3Byb2pldC9cIisgbnBbMV1bMF0uaWR9fSBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT0nbGlnaHQgcmlnaHRUZXh0IG1hcmdpblRvcFMnPlBST0pFVCBQUsOJQ8OJREVOVDwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9J3JpZ2h0VGV4dCc+e25wWzFdWzBdLnByb2pldH08L2g1PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPSdsaWdodCByaWdodFRleHQnPntucFsxXVswXS5taXNzaW9ufTwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj59XHJcblxyXG5cdFx0XHRcdFx0XHRcdHtucFswXVswXSAmJiA8ZGl2IGNsYXNzTmFtZT0nQ2xpZW50TmV4dFByZXYyJyBvbkNsaWNrPXsoKT0+e2xvY2F0aW9uLmhyZWYgPSBcIi9wcm9qZXQvXCIrIG5wWzBdWzBdLmlkfX0gc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9J2xpZ2h0IGxlZnRUZXh0IG1hcmdpblRvcFMnPlBST0pFVCBTVUlWQU5UPC9oNj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT0nbGVmdFRleHQnPntucFswXVswXS5wcm9qZXR9PC9oNT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT0nbGlnaHQgbGVmdFRleHQnPntucFswXVswXS5taXNzaW9ufTwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj59XHJcblx0XHRcdFx0XHRcdFx0ey8qIDxhIGhyZWY9e1wiL2NsaWVudC9cIitucFsxXVswXS5pZH0+ICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHBhZ2VTaXg7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0cGFnZVRocmVlKGRhdGEpIHtcclxuXHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdGlmKGRhdGEubGVuZ3RoID4gMCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyRGFya0JsdWVDbGllbnQnIHN0eWxlPXt7aGVpZ2h0OlwiODAwcHhcIiwgd2lkdGg6XCIxMDAlXCJ9fT5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPXtcIi9pbWFnZXMvaW1hZ2Vwcm9qZXQvXCIgKyBkYXRhLmRhdGEuaW1hZ2V9IGFsdD1cIlwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuIH1cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHBhZ2VUaHJlZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIFByb2plY3RwYWdlVHdvKGRhdGEpIHtcclxuXHRpZihkYXRhLmRhdGEuZGVtYW5kZSB8fCBkYXRhLmRhdGEuZGVmaSB8fCBkYXRhLmRhdGEuYWN0aW9uKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMvNld2ZW1tM0suanBlZylcIiwgdGV4dEFsaWduOiBcImNlbnRlclwifX0gY2xhc3NOYW1lPSdkZW1pYmxvY0NsaWVudCc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sdW1ucyc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1ucyBpcy1jZW50ZXJlZCc+XHJcblx0XHRcdFx0XHRcdFx0e2RhdGEuZGF0YS5kZW1hbmRlICYmXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbHVtbiBpcy1jZW50ZXJlZCBpcy00JyBzdHlsZT17e21hcmdpblRvcDpcIjQ4cHhcIiwgbWFyZ2luUmlnaHQ6XCJhdXRvXCIsIG1hcmdpbkxlZnQ6XCJhdXRvXCJ9fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2xpZ2h0Jz5VTkUgREVNQU5ERTwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fSBjbGFzc05hbWU9J2xpZ2h0IGNvbnRhaW5lckNlbnRlckNsaWVudCBweC02J2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmRhdGEuZGF0YS5kZW1hbmRlfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+IFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0e2RhdGEuZGF0YS5kZWZpICYmXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbHVtbiBpcy1jZW50ZXJlZCBpcy00JyBzdHlsZT17e21hcmdpblRvcDpcIjQ4cHhcIiwgbWFyZ2luUmlnaHQ6XCJhdXRvXCIsIG1hcmdpbkxlZnQ6XCJhdXRvXCJ9fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2xpZ2h0Jz5VTiBEw4lGSTwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fSBjbGFzc05hbWU9J2xpZ2h0IGNvbnRhaW5lckNlbnRlckNsaWVudCBjb2x1bW5zIGlzLXZjZW50ZXJlZCBpcy1jZW50ZXJlZCBweC02JyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLmRhdGEuZGVmaX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0e2RhdGEuZGF0YS5hY3Rpb24gJiZcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGlzLWNlbnRlcmVkIGlzLTQnICBzdHlsZT17e21hcmdpblRvcDpcIjQ4cHhcIiwgbWFyZ2luUmlnaHQ6XCJhdXRvXCIsIG1hcmdpbkxlZnQ6XCJhdXRvXCJ9fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2xpZ2h0Jz5VTkUgQUNUSU9OPC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19IGNsYXNzTmFtZT0nbGlnaHQgY29udGFpbmVyQ2VudGVyQ2xpZW50IGNvbHVtbnMgaXMtdmNlbnRlcmVkIGlzLWNlbnRlcmVkIHB4LTYnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmRhdGEuZGF0YS5hY3Rpb259fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG5cdH1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cGFnZVR3bztcclxuIiwiaW1wb3J0IFNlYXJjaFBhZ2VPbmUyIGZyb20gXCIuL19TZWFyY2hQYWdlT25lMlwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL19uYXZiYXInO1xyXG5pbXBvcnQgUnNCdXR0b24gZnJvbSAnLi4vX3JzQnV0dG9uJztcclxuaW1wb3J0IExpbmVzVG9wIGZyb20gJy4uL19saW5lc1RvcCc7XHJcbmltcG9ydCBMaW5lc0JvdHRvbSBmcm9tICcuLi9fbGluZXNCb3R0b20nO1xyXG5pbXBvcnQgU2VhcmNoUGFnZVR3bzIgZnJvbSBcIi4vX1NlYXJjaFBhZ2VUd28yXCI7XHJcbmltcG9ydCBNaW5pRm9vdGVyIGZyb20gXCIuLi9Ib21lcGFnZS9fbWluaUZvb3RlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9sb2FkZXIuY3NzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBTZWFyY2hQYWdlMigpIHtcclxuXHRjb25zdCB7IGluZm8gfSA9IHVzZVBhcmFtcygpO1xyXG5cdGNvbnN0IHsgbmFtZSB9ID0gdXNlUGFyYW1zKCk7XHJcblx0Y29uc3QgeyB0eXBlIH0gPSB1c2VQYXJhbXMoKTtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZEltZywgc2V0SXNMb2FkZWRJbWddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZE5leHRQcmV2LCBzZXRJc0xvYWRlZE5leHRQcmV2XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNJbWdSZWFkeSwgc2V0SW1nUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbcHJlY2ksIHNldFByZWNpXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbc2Vjb25kLCBzZXRTZWNvbmRdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbTmV4dFByZXYsIHNldE5leHRQcmV2XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbbG9hZCwgc2V0TG9hZF0gPSB1c2VTdGF0ZShcImhpZGRlblwiKVxyXG5cdGNvbnN0IFt1bmxvYWQsIHNldFVubG9hZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblx0XHRjb25zdCBzZXRMb2FkaW5nID0gcGFyYW0gPT4ge1xyXG5cdFx0XHRpZihwYXJhbSA9PSB0cnVlKSB7XHJcblx0XHRcdFx0c2V0TG9hZChcInZpc2libGVcIik7XHRcdFxyXG5cdFx0XHRcdHNldFVubG9hZCh0cnVlKTtcdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuXHRcdFx0ZmV0Y2goYC9nZXRzZWFyY2hjYXQvJHtpbmZvfS8ke3R5cGV9YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRzZXRJdGVtcyhyZXN1bHQpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0fSwgW10pXHRcdFxyXG5cclxuXHJcblxyXG5cdGlmIChlcnJvcikge1xyXG5cdFx0IHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcblx0ICB9IGVsc2UgaWYgKCFpc0xvYWRlZCB8fCBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnY29tcGxldGUnKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcdDxzdmcgaWQ9XCJSZWFjdExvYWRlclwiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+XHJcblx0XHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2Utc3RpbGxcIiBwb2ludHM9XCIwLDAgMTAwLDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2Utc3RpbGxcIiBwb2ludHM9XCIwLDAgMCwxMDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2UtYW5pbWF0aW9uXCIgcG9pbnRzPVwiMCwwIDEwMCwwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLWFuaW1hdGlvblwiIHBvaW50cz1cIjAsMCAwLDEwMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdCAgfSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICggIFxyXG5cdFx0PD5cclxuXHRcdDxOYXZiYXI+PC9OYXZiYXI+XHJcblx0XHQ8UnNCdXR0b24+PC9Sc0J1dHRvbj5cclxuXHRcdDxMaW5lc1RvcD48L0xpbmVzVG9wPlxyXG5cdFx0PExpbmVzQm90dG9tPjwvTGluZXNCb3R0b20+XHJcblx0XHRcclxuXHRcdDxTZWFyY2hQYWdlT25lMiBzZXRMb2FkaW5nPXtzZXRMb2FkaW5nfSBkYXRhID0ge25hbWV9PjwvU2VhcmNoUGFnZU9uZTI+XHJcblx0XHQ8ZGl2IHN0eWxlPXt7dmlzaWJpbGl0eTpsb2FkfX0+PFNlYXJjaFBhZ2VUd28yIGRhdGE9e2l0ZW1zfT48L1NlYXJjaFBhZ2VUd28yPjwvZGl2PlxyXG5cdFx0XHJcblx0XHR7LyogPFdvcmtwYWdlVGhyZWU+PC9Xb3JrcGFnZVRocmVlPlxyXG5cdFx0PFdvcmtwYWdlRm91cj48L1dvcmtwYWdlRm91cj5cclxuXHRcdDxXb3JrcGFnZUZpdmU+PC9Xb3JrcGFnZUZpdmU+Ki99XHJcblx0XHQ8TWluaUZvb3RlciBsb2FkZWQ9e3VubG9hZH0+PC9NaW5pRm9vdGVyPiBcclxuXHRcdDwvPlxyXG5cdCApO1xyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFnZTI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hQYWdlT25lMih7c2V0TG9hZGluZyxkYXRhfSkge1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpXHJcblx0ICB9LCBbMV0pO1xyXG5cdEFPUy5pbml0KClcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kMVwiIGFsdD1cImhvbWVwYWdlXCI+XHJcblxyXG5cdFx0XHQ8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuXHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZy5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcblx0XHRcdDwvdmlkZW8+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eUJsdWVcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXIyXCI+XHJcblx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvemVuaXRoL2ltYWdlcy9iSU8xcjlGLnBuZ1wiIGFsdD1cIkxvZ29cIiB3aWR0aD17MjAwfSBjbGFzc05hbWU9XCJjZW50ZXJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cdFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid29ya3BhZ2VUZXh0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cIm1lZGl1bVwiPlJFU1VMVEFUIFBPVVIgXCJ7ZGF0YX1cIjwvaDE+XHJcblx0XHRcdFx0XHRcdFx0ey8qIDxwIGNsYXNzTmFtZT1cImxpZ2h0XCI+TE9HTy4gV0VCIERFU0lHTi4gQ0FURUdPUklFPC9wPiAqL31cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlT25lMjtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tIFwicmVhY3QtcGFyYWxsYXhcIjtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaFBhZ2VUd28yKGRhdGEpIHtcclxuXHRjb25zdCB7IHR5cGUgfSA9IHVzZVBhcmFtcygpO1xyXG5cdC8vIGNvbnNvbGUubG9nKGNvdW50KVxyXG5cdC8vIGxldCBwYWdlTmJyID0gTWF0aC5jZWlsKGNvdW50IC8gMjApXHJcblx0Ly8gbGV0IG5iciA9IHBhcnNlSW50KHBhZ2UpXHJcblx0Ly8gZnVuY3Rpb24gb25DaGFuZ2UocGFyYW1zKSB7XHJcblx0Ly8gICBkb2N1bWVudC5sb2NhdGlvbiA9IGAvcHJvamV0cy8ke3BhcmFtc31gXHJcblx0Ly8gfVxyXG4gIFxyXG5cdGxldCBib3ggPSBbXTtcclxuXHRpZihkYXRhLmRhdGEubGVuZ3RoID4gMCl7XHJcblxyXG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGEuZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdFx0aWYodHlwZSA9PSBcInByb2pldFwiKXtcclxuXHRcdFx0XHRsZXQgaXRlbSA9IChcclxuXHRcdFx0XHQgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY29sdW1uIGNvbHVtbnMgaXMtb25lLWZpZnRoIGlzLWNlbnRlcmVkXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlzLWhhbGZcIj5cclxuXHRcdFx0XHRcdDxhIGhyZWY9e1wiL3Byb2pldC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaWR9PlxyXG5cdFx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPlxyXG5cdFx0XHRcdFx0XHQ8cCBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiIH19IGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcblx0XHRcdFx0XHRcdCAge2RhdGEuZGF0YVtpbmRleF0ubWlzc2lvbn1cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHR7ZGF0YS5kYXRhW2luZGV4XS5oZWFkZXIgIT09IFwicmllbiBhIHZvaXIsIGNpcmN1bGV6XCIgPyAoPGltZ1xyXG5cdFx0XHRcdFx0XHQgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuXHRcdFx0XHRcdFx0ICBzcmM9e1wiL2ltYWdlcy9pbWFnZXByb2pldC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaGVhZGVyfVxyXG5cdFx0XHRcdFx0XHQgIGFsdD1cIlwiXHJcblx0XHRcdFx0XHRcdC8+KSA6ICg8aW1nIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIn19IHNyYz17XCIvemVuaXRoL2F1dHJlL25vSW1nLnBuZ1wifSBhbHQ9XCJcIi8+KX1cclxuXHRcdFx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Ym94LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYodHlwZSA9PSBcImNsaWVudFwiKXtcclxuXHRcdFx0XHRsZXQgaXRlbSA9IChcclxuXHRcdFx0XHQgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY29sdW1uIGNvbHVtbnMgaXMtb25lLWZpZnRoIGlzLWNlbnRlcmVkXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlzLWhhbGZcIj5cclxuXHRcdFx0XHRcdDxhIGhyZWY9e1wiL2NsaWVudC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaWR9PlxyXG5cdFx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPlxyXG5cdFx0XHRcdFx0XHQ8cCBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiIH19IGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcblx0XHRcdFx0XHRcdCAge2RhdGEuZGF0YVtpbmRleF0ubWlzc2lvbn1cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHR7ZGF0YS5kYXRhW2luZGV4XS5oZWFkZXIgIT09IFwicmllbiBhIHZvaXIsIGNpcmN1bGV6XCIgPyAoPGltZ1xyXG5cdFx0XHRcdFx0XHQgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuXHRcdFx0XHRcdFx0ICBzcmM9e1wiL2ltYWdlcy9pbWFnZWNsaWVudC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaGVhZGVyfVxyXG5cdFx0XHRcdFx0XHQgIGFsdD1cIlwiXHJcblx0XHRcdFx0XHRcdC8+KSA6ICg8aW1nIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIn19IHNyYz17XCIvemVuaXRoL2F1dHJlL25vSW1nLnBuZ1wifSBhbHQ9XCJcIi8+KX1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGJveC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdH1lbHNle1xyXG5cdFx0Ym94ID0gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxpbWcgc3JjPScvemVuaXRoL2ltYWdlcy9zZWFyY2hfbm9fcmVzdWx0LnBuZyc+PC9pbWc+XHJcblx0XHRcdFx0PHAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwifX0+ZMOpc29sw6ksIG5vdXMgbidhdm9ucyByaWVuIHRyb3V2w6k8L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8Lz5cclxuXHRcdClcclxuXHR9XHJcblxyXG5cdFxyXG5cdHJldHVybiAoXHJcblx0ICA8PlxyXG5cdCAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9aMXpJSkNLay5qcGVnXCIgYmx1cj17eyBtaW46IC0xLCBtYXg6IDMgfX0gc3RyZW5ndGg9ezQwMH0+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB0LTZcIiBzdHlsZT17e3BhZGRpbmdCb3R0b206XCI4MHB4XCJ9fSBhbHQ9XCJhY3Rpb25cIj5cclxuXHRcdCAgPGRpdiBjbGFzc05hbWU9XCJwdC02XCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcblx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW11bHRpbGluZSBpcy1jZW50ZXJlZFwiPlxyXG5cdFx0XHRcdHtib3h9XHJcblx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdCAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tb2JpbGUgaXMtY2VudGVyZWRcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxNTBweFwifX0+ICAgICAgICAgICAgXHJcblx0XHRcdFx0PFBhZ2luYXRpb25cclxuXHRcdFx0XHQgIGN1cnJlbnQ9e25icn1cclxuXHRcdFx0XHQgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuXHRcdFx0XHQgIHBhZ2VTaXplPXsxfVxyXG5cdFx0XHRcdCAgdG90YWw9e3BhZ2VOYnJ9XHJcblx0XHRcdFx0ICBzaG93VGl0bGU9e2ZhbHNlfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdCAgPC9kaXY+ICAgKi99XHJcblx0XHRcdCAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuTCBjZW50ZXIgbGlnaHQgbGV0dGVyU3BhY2luZ01cIj5cclxuXHRcdFx0XHQ8TGluayB0bz1cIi9jb250YWN0XCIgY2xhc3NOYW1lPVwidGV4dERlY29cIj5cclxuXHRcdFx0XHQgIFZvaXIgcGx1c1xyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0ICA8L2J1dHRvbj4gKi99XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0ICA8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCAgPC9QYXJhbGxheD5cclxuXHQgIDwvPlxyXG5cdCk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlVHdvMjsiLCJpbXBvcnQgU2VhcmNoUGFnZU9uZSBmcm9tIFwiLi9fU2VhcmNoUGFnZU9uZVwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL19uYXZiYXInO1xyXG5pbXBvcnQgUnNCdXR0b24gZnJvbSAnLi4vX3JzQnV0dG9uJztcclxuaW1wb3J0IExpbmVzVG9wIGZyb20gJy4uL19saW5lc1RvcCc7XHJcbmltcG9ydCBMaW5lc0JvdHRvbSBmcm9tICcuLi9fbGluZXNCb3R0b20nO1xyXG5pbXBvcnQgU2VhcmNoUGFnZVR3byBmcm9tIFwiLi9fU2VhcmNoUGFnZVR3b1wiO1xyXG5pbXBvcnQgTWluaUZvb3RlciBmcm9tIFwiLi4vSG9tZXBhZ2UvX21pbmlGb290ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFNlYXJjaFBhZ2UoKSB7XHJcblx0Y29uc3QgeyBpbmZvIH0gPSB1c2VQYXJhbXMoKTtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZEltZywgc2V0SXNMb2FkZWRJbWddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZE5leHRQcmV2LCBzZXRJc0xvYWRlZE5leHRQcmV2XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNJbWdSZWFkeSwgc2V0SW1nUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbcHJlY2ksIHNldFByZWNpXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbc2Vjb25kLCBzZXRTZWNvbmRdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbTmV4dFByZXYsIHNldE5leHRQcmV2XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbbG9hZCwgc2V0TG9hZF0gPSB1c2VTdGF0ZShcImhpZGRlblwiKVxyXG5cclxuXHRcdGNvbnN0IHNldExvYWRpbmcgPSBwYXJhbSA9PiB7XHJcblx0XHRcdGlmKHBhcmFtID09IHRydWUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcImdvdGNoYVwiKVxyXG5cdFx0XHRcdHNldExvYWQoXCJ2aXNpYmxlXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGluZm8pXHJcblx0XHRcdGZldGNoKGAvZ2V0U2VhcmNoLyR7aW5mb31gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdHNldEl0ZW1zKHJlc3VsdCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHRcdC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0XHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHR9LCBbXSlcdFx0XHJcblxyXG5cclxuXHJcblx0aWYgKGVycm9yKSB7XHJcblx0XHQgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuXHQgIH0gZWxzZSBpZiAoIWlzTG9hZGVkIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdjb21wbGV0ZScpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PHN2ZyBpZD1cIlJlYWN0TG9hZGVyXCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1zdGlsbFwiIHBvaW50cz1cIjAsMCAxMDAsMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1zdGlsbFwiIHBvaW50cz1cIjAsMCAwLDEwMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1hbmltYXRpb25cIiBwb2ludHM9XCIwLDAgMTAwLDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2UtYW5pbWF0aW9uXCIgcG9pbnRzPVwiMCwwIDAsMTAwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0ICB9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gKCAgXHJcblx0XHQ8PlxyXG5cdFx0PE5hdmJhcj48L05hdmJhcj5cclxuXHRcdDxSc0J1dHRvbj48L1JzQnV0dG9uPlxyXG5cdFx0PExpbmVzVG9wPjwvTGluZXNUb3A+XHJcblx0XHQ8TGluZXNCb3R0b20+PC9MaW5lc0JvdHRvbT5cclxuXHRcdFxyXG5cdFx0PFNlYXJjaFBhZ2VPbmUgc2V0TG9hZGluZz17c2V0TG9hZGluZ30gZGF0YSA9IHtpbmZvfT48L1NlYXJjaFBhZ2VPbmU+XHJcblx0XHQ8ZGl2IHN0eWxlPXt7dmlzaWJpbGl0eTpsb2FkfX0+PFNlYXJjaFBhZ2VUd28gZGF0YT17aXRlbXN9PjwvU2VhcmNoUGFnZVR3bz48L2Rpdj5cclxuXHRcdFxyXG5cdFx0ey8qIDxXb3JrcGFnZVRocmVlPjwvV29ya3BhZ2VUaHJlZT5cclxuXHRcdDxXb3JrcGFnZUZvdXI+PC9Xb3JrcGFnZUZvdXI+XHJcblx0XHQ8V29ya3BhZ2VGaXZlPjwvV29ya3BhZ2VGaXZlPiovfVxyXG5cdFx0PE1pbmlGb290ZXIgbG9hZGVkPXt0cnVlfT48L01pbmlGb290ZXI+IFxyXG5cdFx0PC8+XHJcblx0ICk7XHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaFBhZ2VPbmUoe3NldExvYWRpbmcsZGF0YX0pIHtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0TG9hZGluZyh0cnVlKVxyXG5cdCAgfSwgWzFdKTtcclxuXHRBT1MuaW5pdCgpXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZDFcIiBhbHQ9XCJob21lcGFnZVwiPlxyXG5cclxuXHRcdFx0PHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHQ8L3ZpZGVvPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHlCbHVlXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyMlwiPlxyXG5cdFx0XHRcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayB0bz1cIi9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL3plbml0aC9pbWFnZXMvYklPMXI5Ri5wbmdcIiBhbHQ9XCJMb2dvXCIgd2lkdGg9ezIwMH0gY2xhc3NOYW1lPVwiY2VudGVyXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHRcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndvcmtwYWdlVGV4dFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJtZWRpdW1cIj5SRVNVTFRBVCBQT1VSIFwie2RhdGF9XCI8L2gxPlxyXG5cdFx0XHRcdFx0XHRcdHsvKiA8cCBjbGFzc05hbWU9XCJsaWdodFwiPkxPR08uIFdFQiBERVNJR04uIENBVEVHT1JJRTwvcD4gKi99XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFnZU9uZTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tIFwicmVhY3QtcGFyYWxsYXhcIjtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaFBhZ2VUd28oZGF0YSkge1xyXG5cdC8vIGNvbnNvbGUubG9nKGNvdW50KVxyXG5cdC8vIGxldCBwYWdlTmJyID0gTWF0aC5jZWlsKGNvdW50IC8gMjApXHJcblx0Ly8gbGV0IG5iciA9IHBhcnNlSW50KHBhZ2UpXHJcblx0Ly8gZnVuY3Rpb24gb25DaGFuZ2UocGFyYW1zKSB7XHJcblx0Ly8gICBkb2N1bWVudC5sb2NhdGlvbiA9IGAvcHJvamV0cy8ke3BhcmFtc31gXHJcblx0Ly8gfVxyXG4gIFxyXG5cdGxldCBib3ggPSBbXTtcclxuXHRpZihkYXRhLmRhdGEubGVuZ3RoID4gMCl7XHJcblxyXG5cdFxyXG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGEuZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdFx0aWYoZGF0YS5kYXRhW2luZGV4XVswXSA9PSBcInByb2pldFwiKXtcclxuXHRcdFx0XHRsZXQgaXRlbSA9IChcclxuXHRcdFx0XHQgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY29sdW1uIGNvbHVtbnMgaXMtb25lLWZpZnRoIGlzLWNlbnRlcmVkXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlzLWhhbGZcIj5cclxuXHRcdFx0XHRcdDxhIGhyZWY9e1wiL3Byb2pldC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaWR9PlxyXG5cdFx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPlxyXG5cdFx0XHRcdFx0XHQ8cCBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiIH19IGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcblx0XHRcdFx0XHRcdCAge2RhdGEuZGF0YVtpbmRleF0ubWlzc2lvbn1cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHR7ZGF0YS5kYXRhW2luZGV4XS5oZWFkZXIgIT09IFwicmllbiBhIHZvaXIsIGNpcmN1bGV6XCIgPyAoPGltZ1xyXG5cdFx0XHRcdFx0XHQgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuXHRcdFx0XHRcdFx0ICBzcmM9e1wiL2ltYWdlcy9pbWFnZXByb2pldC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaGVhZGVyfVxyXG5cdFx0XHRcdFx0XHQgIGFsdD1cIlwiXHJcblx0XHRcdFx0XHRcdC8+KSA6ICg8aW1nIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIn19IHNyYz17XCIvemVuaXRoL2F1dHJlL25vSW1nLnBuZ1wifSBhbHQ9XCJcIi8+KX1cclxuXHRcdFx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Ym94LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoZGF0YS5kYXRhW2luZGV4XVswXSA9PSBcImNsaWVudFwiKXtcclxuXHRcdFx0XHRsZXQgaXRlbSA9IChcclxuXHRcdFx0XHQgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY29sdW1uIGNvbHVtbnMgaXMtb25lLWZpZnRoIGlzLWNlbnRlcmVkXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlzLWhhbGZcIj5cclxuXHRcdFx0XHRcdDxhIGhyZWY9e1wiL2NsaWVudC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaWR9PlxyXG5cdFx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPlxyXG5cdFx0XHRcdFx0XHQ8cCBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiIH19IGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcblx0XHRcdFx0XHRcdCAge2RhdGEuZGF0YVtpbmRleF0ubWlzc2lvbn1cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHR7ZGF0YS5kYXRhW2luZGV4XS5oZWFkZXIgIT09IFwicmllbiBhIHZvaXIsIGNpcmN1bGV6XCIgPyAoPGltZ1xyXG5cdFx0XHRcdFx0XHQgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuXHRcdFx0XHRcdFx0ICBzcmM9e1wiL2ltYWdlcy9pbWFnZWNsaWVudC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaGVhZGVyfVxyXG5cdFx0XHRcdFx0XHQgIGFsdD1cIlwiXHJcblx0XHRcdFx0XHRcdC8+KSA6ICg8aW1nIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIn19IHNyYz17XCIvemVuaXRoL2F1dHJlL25vSW1nLnBuZ1wifSBhbHQ9XCJcIi8+KX1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGJveC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fWVsc2V7XHJcblx0XHRib3ggPSAoXHJcblx0XHRcdDw+XHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PGltZyBzcmM9Jy96ZW5pdGgvaW1hZ2VzL3NlYXJjaF9ub19yZXN1bHQucG5nJz48L2ltZz5cclxuXHRcdFx0XHQ8cCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5kw6lzb2zDqSwgbm91cyBuJ2F2b25zIHJpZW4gdHJvdXbDqTwvcD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvPlxyXG5cdFx0KVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRcclxuXHRyZXR1cm4gKFxyXG5cdCAgPD5cclxuXHQgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL3plbml0aC9pbWFnZXMvWjF6SUpDS2suanBlZ1wiIGJsdXI9e3sgbWluOiAtMSwgbWF4OiAzIH19IHN0cmVuZ3RoPXs0MDB9PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJwdC02XCIgc3R5bGU9e3twYWRkaW5nQm90dG9tOlwiODBweFwifX0gYWx0PVwiYWN0aW9uXCI+XHJcblx0XHQgIDxkaXYgY2xhc3NOYW1lPVwicHQtNlwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG5cdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tdWx0aWxpbmUgaXMtY2VudGVyZWRcIj5cclxuXHRcdFx0XHR7Ym94fVxyXG5cdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHQgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbW9iaWxlIGlzLWNlbnRlcmVkXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTUwcHhcIn19PiAgICAgICAgICAgIFxyXG5cdFx0XHRcdDxQYWdpbmF0aW9uXHJcblx0XHRcdFx0ICBjdXJyZW50PXtuYnJ9XHJcblx0XHRcdFx0ICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcblx0XHRcdFx0ICBwYWdlU2l6ZT17MX1cclxuXHRcdFx0XHQgIHRvdGFsPXtwYWdlTmJyfVxyXG5cdFx0XHRcdCAgc2hvd1RpdGxlPXtmYWxzZX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQgIDwvZGl2PiAgICovfVxyXG5cdFx0XHQgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bkwgY2VudGVyIGxpZ2h0IGxldHRlclNwYWNpbmdNXCI+XHJcblx0XHRcdFx0PExpbmsgdG89XCIvY29udGFjdFwiIGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcblx0XHRcdFx0ICBWb2lyIHBsdXNcclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdCAgPC9idXR0b24+ICovfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCAgPC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQgIDwvUGFyYWxsYXg+XHJcblx0ICA8Lz5cclxuXHQpO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFnZVR3bzsiLCJpbXBvcnQgV29ya3BhZ2VDbGllbnRPbmUgZnJvbSAnLi9fd29ya3BhZ2VDbGllbnRPbmUnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL19uYXZiYXInO1xyXG5pbXBvcnQgUnNCdXR0b24gZnJvbSAnLi4vX3JzQnV0dG9uJztcclxuaW1wb3J0IExpbmVzVG9wIGZyb20gJy4uL19saW5lc1RvcCc7XHJcbmltcG9ydCBMaW5lc0JvdHRvbSBmcm9tICcuLi9fbGluZXNCb3R0b20nO1xyXG5pbXBvcnQgV29ya3BhZ2VDbGllbnRUd28gZnJvbSAnLi9fd29ya3BhZ2VDbGllbnRUd28nO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvbG9hZGVyLmNzc1wiXHJcbmltcG9ydCBNaW5pRm9vdGVyIGZyb20gJy4uL0hvbWVwYWdlL19taW5pRm9vdGVyJztcclxuXHJcblxyXG5mdW5jdGlvbiBXb3JrcGFnZUNsaWVudCgpIHtcclxuXHRjb25zdCB7IG5iciB9ID0gdXNlUGFyYW1zKCk7XHJcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNDb3VudExvYWRlZCwgc2V0SXNDb3VudExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzQ2F0TG9hZGVkLCBzZXRJc0NhdExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzTG9hZGVkTmV4dFByZXYsIHNldElzTG9hZGVkTmV4dFByZXZdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0ltZ1JlYWR5LCBzZXRJbWdSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2NhdCwgc2V0Q2F0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbbG9hZCwgc2V0TG9hZF0gPSB1c2VTdGF0ZShcImhpZGRlblwiKVxyXG5cdGNvbnN0IFt1bmxvYWQsIHNldFVubG9hZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblx0Y29uc3Qgc2V0TG9hZGluZyA9IHBhcmFtID0+IHtcclxuXHRcdGlmKHBhcmFtID09IHRydWUpIHtcclxuXHRcdFx0c2V0TG9hZChcInZpc2libGVcIik7XHRcdFxyXG5cdFx0XHRzZXRVbmxvYWQodHJ1ZSk7XHRcdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHJcblx0XHRmZXRjaChgL2dldHRBbGxDbGllbnQvJHtuYnJ9YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0LnRoZW4oXHJcblx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0c2V0SXRlbXMocmVzdWx0KTtcclxuXHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH1cclxuXHRcdClcclxuXHJcblx0XHRmZXRjaChgL2dldENvdW50L2NsaWVudGAse21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdC50aGVuKFxyXG5cdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdHNldENvdW50KHJlc3VsdCk7XHJcblx0XHRcdHNldElzQ291bnRMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRzZXRJc0NvdW50TG9hZGVkKHRydWUpO1xyXG5cdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fVxyXG5cdFx0KVxyXG5cdFx0ZmV0Y2goYC9hcGkvY2F0ZWdvcmllc2Ase21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdC50aGVuKFxyXG5cdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdHNldENhdChyZXN1bHQpO1xyXG5cdFx0XHRzZXRJc0NhdExvYWRlZCh0cnVlKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdHNldElzQ291bnRMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9XHJcblx0XHQpXHJcblx0fSwgW10pXHJcblxyXG5cdGlmIChlcnJvcikge1xyXG5cdFx0IHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcblx0ICB9IGVsc2UgaWYgKCFpc0xvYWRlZCB8fCBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnY29tcGxldGUnKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcdDxzdmcgaWQ9XCJSZWFjdExvYWRlclwiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+XHJcblx0XHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2Utc3RpbGxcIiBwb2ludHM9XCIwLDAgMTAwLDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2Utc3RpbGxcIiBwb2ludHM9XCIwLDAgMCwxMDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2UtYW5pbWF0aW9uXCIgcG9pbnRzPVwiMCwwIDEwMCwwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLWFuaW1hdGlvblwiIHBvaW50cz1cIjAsMCAwLDEwMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdCAgfSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICggIFxyXG5cdFx0PD5cclxuXHRcdDxOYXZiYXI+PC9OYXZiYXI+XHJcblx0XHQ8UnNCdXR0b24+PC9Sc0J1dHRvbj5cclxuXHRcdDxMaW5lc1RvcD48L0xpbmVzVG9wPlxyXG5cdFx0PExpbmVzQm90dG9tPjwvTGluZXNCb3R0b20+XHJcblx0XHRcclxuXHRcdDxXb3JrcGFnZUNsaWVudE9uZSBzZXRMb2FkaW5nPXtzZXRMb2FkaW5nfSBjYXQ9e2NhdH0+PC9Xb3JrcGFnZUNsaWVudE9uZT5cclxuXHRcdHsvKiA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6dW5sb2FkfX0+XHRcdFx0XHRcclxuXHRcdFx0PHN2ZyBpZD1cIlJlYWN0TG9hZGVyMlwiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+XHJcblx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLXN0aWxsXCIgcG9pbnRzPVwiMCwwIDEwMCwwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1zdGlsbFwiIHBvaW50cz1cIjAsMCAwLDEwMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2UtYW5pbWF0aW9uXCIgcG9pbnRzPVwiMCwwIDEwMCwwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1hbmltYXRpb25cIiBwb2ludHM9XCIwLDAgMCwxMDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdDwvc3ZnPlxyXG5cdFx0PC9kaXY+ICovfVxyXG5cdFx0PFdvcmtwYWdlQ2xpZW50VHdvIGxvYWRlZD17dW5sb2FkfSBkYXRhPXtpdGVtc30gcGFnZT17bmJyfSBjb3VudD17Y291bnR9PjwvV29ya3BhZ2VDbGllbnRUd28+XHJcblx0XHQ8TWluaUZvb3RlciBsb2FkZWQ9e3VubG9hZH0+PC9NaW5pRm9vdGVyPlxyXG5cdFx0XHJcblx0XHR7LyogPFdvcmtwYWdlVGhyZWU+PC9Xb3JrcGFnZVRocmVlPlxyXG5cdFx0PFdvcmtwYWdlRm91cj48L1dvcmtwYWdlRm91cj5cclxuXHRcdDxXb3JrcGFnZUZpdmU+PC9Xb3JrcGFnZUZpdmU+XHJcblx0XHQ8TWluaUZvb3Rlcj48L01pbmlGb290ZXI+ICovfVxyXG5cdFx0PC8+XHJcblx0ICk7XHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBXb3JrcGFnZUNsaWVudDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQU9TIGZyb20gXCJhb3NcIjtcclxuaW1wb3J0IFwiYW9zL2Rpc3QvYW9zLmNzc1wiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTWVudSwgTWVudUl0ZW0sIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgQXJyb3dGb3J3YXJkSW9zU2hhcnBJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkSW9zU2hhcnAnO1xyXG5pbXBvcnQgTXVpQWNjb3JkaW9uLCB7IEFjY29yZGlvblByb3BzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9BY2NvcmRpb24nO1xyXG5pbXBvcnQgTXVpQWNjb3JkaW9uU3VtbWFyeSwge1xyXG4gIEFjY29yZGlvblN1bW1hcnlQcm9wcyxcclxufSBmcm9tICdAbXVpL21hdGVyaWFsL0FjY29yZGlvblN1bW1hcnknO1xyXG5pbXBvcnQgTXVpQWNjb3JkaW9uRGV0YWlscyBmcm9tICdAbXVpL21hdGVyaWFsL0FjY29yZGlvbkRldGFpbHMnO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5jb25zdCBBY2NvcmRpb24gPSBzdHlsZWQoKHByb3BzKSA9PiAoXHJcbiAgPE11aUFjY29yZGlvbiBkaXNhYmxlR3V0dGVycyBlbGV2YXRpb249ezB9IHNxdWFyZSB7Li4ucHJvcHN9IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgbWF4V2lkdGg6IFwiMTg1cHhcIixcclxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwwKVwiLFxyXG4gIGNvbG9yOiBcIndoaXRlXCIsXHJcbn0pKTtcclxuXHJcbmNvbnN0IEFjY29yZGlvblN1bW1hcnkgPSBzdHlsZWQoKHByb3BzKSA9PiAoXHJcbiAgPE11aUFjY29yZGlvblN1bW1hcnlcclxuICAgIGV4cGFuZEljb249ezxBcnJvd0ZvcndhcmRJb3NTaGFycEljb24gc3g9e3sgZm9udFNpemU6IFwiMC45cmVtXCIgfX0gLz59XHJcblx0ey4uLnByb3BzfVxyXG4gIC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgY29sb3I6IFwid2hpdGVcIixcclxuICBiYWNrZ3JvdW5kQ29sb3I6XHJcbiAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwiZGFybFwiXHJcbiAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIC4wNSlcIlxyXG4gICAgICA6IFwicmdiYSgwLCAwLCAwLCAuMDMpXCIsXHJcbiAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICBcIiYgLk11aUFjY29yZGlvblN1bW1hcnktZXhwYW5kSWNvbldyYXBwZXIuTXVpLWV4cGFuZGVkXCI6IHtcclxuICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoOTBkZWcpXCIsXHJcbiAgfSxcclxuICBcIiYgLk11aUFjY29yZGlvblN1bW1hcnktY29udGVudFwiOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEFjY29yZGlvbkRldGFpbHMgPSBzdHlsZWQoTXVpQWNjb3JkaW9uRGV0YWlscykoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIHBhZGRpbmdUb3A6IDAsXHJcbiAgbWFyZ2luVG9wOiAwLFxyXG4gIG1heEhlaWdodDogXCIxNTBweFwiLFxyXG4gIG92ZXJmbG93OiBcInNjcm9sbFwiLFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBXb3JrcGFnZUNsaWVudE9uZSh7c2V0TG9hZGluZywgY2F0fSkge1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0TG9hZGluZyh0cnVlKVxyXG5cdCAgfSwgWzFdKTtcclxuXHJcblx0Y29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSBSZWFjdC51c2VTdGF0ZShcInBhbmVsMVwiKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKHBhbmVsKSA9PiAoZXZlbnQsIG5ld0V4cGFuZGVkKSA9PiB7XHJcblx0ICBzZXRFeHBhbmRlZChuZXdFeHBhbmRlZCA/IHBhbmVsIDogZmFsc2UpO1xyXG5cdH07XHJcbiAgXHJcblx0Y29uc3QgW3dvcmRzLCBzZXRXb3Jkc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0bGV0IGNhdGVnb3J5ID0gY2F0O1xyXG5cdGxldCBtZW51ID0gW107XHJcblx0bGV0IHJhbmRvbVdvcmQgPSBbXHJcblx0ICBcIlLDiUFDVElWSVTDiVwiLFxyXG5cdCAgXCJQUk9YSU1JVMOJXCIsXHJcblx0ICBcIlBBU1NJT05cIixcclxuXHQgIFwiU1RSQVTDiUdJRVwiLFxyXG5cdCAgXCJFVkVOVFwiLFxyXG5cdCAgXCJDT05TRUlMXCIsXHJcblx0ICBcIkNPTU1VTklDQVRJT05cIixcclxuXHQgIFwiUsOKVkVSXCIsXHJcblx0ICBcIkFNQklUSU9OXCIsXHJcblx0ICBcIklNQUdJTkFUSU9OXCIsXHJcblx0ICBcImFnaXJcIixcclxuXHQgIFwicydhZGFwdGVyXCIsXHJcblx0ICBcImFudGljaXBlclwiLFxyXG5cdCAgXCJhdXRvbm9taWVcIixcclxuXHQgIFwiY3JvaXNzYW5jZVwiLFxyXG5cdCAgXCJkw6lmaVwiLFxyXG5cdCAgXCJwbGFuaWZpZXJcIixcclxuXHQgIFwicG9zaXRpdmVyXCIsXHJcblx0ICBcImRpc3BvbmliaWxpdMOpXCIsXHJcblx0ICBcImR5bmFtaXNtZVwiLFxyXG5cdCAgXCLDqWNvdXRlXCIsXHJcblx0ICBcInNlcnZpY2VcIixcclxuXHQgIFwicHLDqXZpc2lvblwiLFxyXG5cdCAgXCJ0w6luYWNpdMOpXCIsXHJcblx0ICBcInF1YWxpdMOpXCIsXHJcblx0ICBcIm1vYmlsaXNlclwiLFxyXG5cdCAgXCJuw6lnb2NpZXJcIixcclxuXHQgIFwib2JqZWN0aWZzXCIsXHJcblx0ICBcIm9wdGltaXNlclwiLFxyXG5cdCAgXCJjaGFsbGVuZ2VcIixcclxuXHQgIFwicsOpdXNzaXJcIixcclxuXHQgIFwiZXhjZWxsZW5jZVwiLFxyXG5cdCAgXCJyw6lhbGlzZXJcIixcclxuXHQgIFwicsOpc3VsdGF0c1wiLFxyXG5cdCAgXCJkw6l2ZWxvcHBlclwiLFxyXG5cdCAgXCJzYXZvaXJmYWlyZVwiLFxyXG5cdCAgXCJkaWFsb2d1ZVwiLFxyXG5cdCAgXCJwcsOpdm9pclwiLFxyXG5cdCAgXCJzeW5lcmdpZVwiLFxyXG5cdCAgXCJwcm9qZXRcIixcclxuXHQgIFwiaW5ub3ZhdGlvblwiLFxyXG5cdCAgXCJtb3RpdmF0aW9uXCJdO1xyXG4gIFxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0ICBmdW5jdGlvbiBnZXRXb3JkKCkge1xyXG5cdFx0bGV0IHdvcmQgPSByYW5kb21Xb3JkW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmRvbVdvcmQubGVuZ3RoKV07XHJcblx0XHRyYW5kb21Xb3JkLnNwbGljZShyYW5kb21Xb3JkLmluZGV4T2Yod29yZCkpO1xyXG5cdFx0cmV0dXJuIHdvcmQ7XHJcblx0ICB9XHJcbiAgXHJcblx0ICBsZXQgd29yZDEgPSBnZXRXb3JkKCk7XHJcblx0ICBsZXQgd29yZDIgPSBnZXRXb3JkKCk7XHJcblx0ICBzZXRXb3Jkcyhbd29yZDEsIHdvcmQyXSk7XHJcblx0fSwgW10pO1xyXG5cdEFPUy5pbml0KCk7XHJcblx0Y2F0ZWdvcnkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG5cdCAgbGV0IGl0ZW0gPSAoXHJcblx0XHQgIDxhIGtleT17ZWxlbWVudC5pZH0gc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCJ9fSBocmVmPXtgL3NlYXJjaGNhdC9jbGllbnQvJHtlbGVtZW50LmlkfS8ke2VsZW1lbnQuY2F0ZWdvcmllfWB9PlxyXG5cdFx0XHQgIDxwXHJcblx0XHRcdCAgXHJcblx0XHRcdCAgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsdGV4dERlY29yYXRpb246IFwibm9uZVwiLCBjb2xvcjogXCJ3aGl0ZVwifX1cclxuXHRcdFx0ICBjbGFzc05hbWU9XCJsaWdodFwiXHJcblx0XHQgID5cclxuXHRcdFx0ICB7ZWxlbWVudC5jYXRlZ29yaWV9XHJcblx0XHQgIDwvcD5cclxuXHRcdDwvYT5cclxuICBcclxuXHQgICk7XHJcblx0ICBtZW51LnB1c2goaXRlbSk7XHJcblx0fSk7XHJcblx0aWYgKHdvcmRzLmxlbmd0aCA+IDApIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHQgIDw+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZDFcIiBhbHQ9XCJob21lcGFnZVwiPlxyXG5cdFx0XHQgIDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG5cdFx0XHRcdDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuXHRcdFx0ICA8L3ZpZGVvPlxyXG5cdFxyXG5cdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eUJsdWVcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHRcdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlcjJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHQgIDxMaW5rIHRvPVwiL1wiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdCAgc3JjPVwiL3plbml0aC9pbWFnZXMvYklPMXI5Ri5wbmdcIlxyXG5cdFx0XHRcdFx0XHQgIGFsdD1cIkxvZ29cIlxyXG5cdFx0XHRcdFx0XHQgIHdpZHRoPXsyMDB9XHJcblx0XHRcdFx0XHRcdCAgY2xhc3NOYW1lPVwiY2VudGVyXCJcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdCAgPC9MaW5rPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndvcmtwYWdlVGV4dFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0ICA8aDEgY2xhc3NOYW1lPVwibWVkaXVtXCI+U8OJTMOJQ1RJT04gREUgQ0xJRU5UPC9oMT5cclxuXHRcdFx0XHRcdCAgPGRpdlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2x1bW5zXCJcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiwgbWFyZ2luUmlnaHQ6IFwiMTBweFwiIH19XHJcblx0XHRcdFx0XHQgID5cclxuXHRcdFx0XHRcdFx0PHAgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiB9fSBjbGFzc05hbWU9XCJsaWdodFwiPlxyXG5cdFx0XHRcdFx0XHQgIHt3b3Jkc1swXX0gLiB7d29yZHNbMV19IC57XCIgXCJ9XHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0PEFjY29yZGlvblxyXG5cdFx0XHRcdFx0XHQgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoXCJwYW5lbDFcIil9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0ICA8QWNjb3JkaW9uU3VtbWFyeVxyXG5cdFx0XHRcdFx0XHRcdGFyaWEtY29udHJvbHM9XCJwYW5lbDFkLWNvbnRlbnRcIlxyXG5cdFx0XHRcdFx0XHRcdGlkPVwicGFuZWwxZC1oZWFkZXJcIlxyXG5cdFx0XHRcdFx0XHQgID5cclxuXHRcdFx0XHRcdFx0XHQ8cCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+Jm5ic3A7Q0FUw4lHT1JJRTwvcD5cclxuXHRcdFx0XHRcdFx0ICA8L0FjY29yZGlvblN1bW1hcnk+XHJcblx0XHRcdFx0XHRcdCAgPEFjY29yZGlvbkRldGFpbHM+e21lbnV9PC9BY2NvcmRpb25EZXRhaWxzPlxyXG5cdFx0XHRcdFx0XHQ8L0FjY29yZGlvbj5cclxuXHRcdFx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCAgPC8+XHJcblx0XHQpO1xyXG5cdCAgfVxyXG5cdH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtwYWdlQ2xpZW50T25lO1xyXG5cclxuXHJcblxyXG4iLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gXCJyZWFjdC1wYXJhbGxheFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAncmMtcGFnaW5hdGlvbic7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzaGVldHMvYnVsbWEvZ3JpZC9jb2x1bW5zLnNhc3MnO1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlc2hlZXRzL2J1bG1hL2hlbHBlcnMvc3BhY2luZy5zYXNzJztcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXNoZWV0cy9wYWdpbmF0aW9uLmxlc3MnIFxyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIFdvcmtwYWdlQ2xpZW50VHdvKHtkYXRhLCBwYWdlLCBjb3VudCwgbG9hZGVkfSkge1xyXG4gIGxldCBwYWdlTmJyID0gTWF0aC5jZWlsKGNvdW50IC8gMjApXHJcbiAgbGV0IG5iciA9IHBhcnNlSW50KHBhZ2UpXHJcbiAgZnVuY3Rpb24gb25DaGFuZ2UocGFyYW1zKSB7XHJcbiAgICBkb2N1bWVudC5sb2NhdGlvbiA9IGAvY2xpZW50cy8ke3BhcmFtc31gXHJcbiAgfVxyXG5cclxuICBsZXQgYm94ID0gW107XHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGEubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGxldCBpdGVtID0gKFxyXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY29sdW1uIGNvbHVtbnMgaXMtb25lLWZpZnRoIGlzLWNlbnRlcmVkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzLWhhbGZcIj5cclxuICAgICAgICAgIDxhIGhyZWY9e1wiL2NsaWVudC9cIiArIGRhdGFbaW5kZXhdLmlkfT5cclxuXHRcdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+XHJcblx0XHRcdFx0XHQ8cCBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiIH19IGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcblx0XHRcdFx0XHQgIHtkYXRhW2luZGV4XS5taXNzaW9ufVxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0e2RhdGFbaW5kZXhdLmhhc093blByb3BlcnR5KCdoZWFkZXInKSA/ICg8aW1nXHJcblx0XHRcdFx0XHQgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuXHRcdFx0XHRcdCAgc3JjPXtcIi9pbWFnZXMvaW1hZ2VjbGllbnQvXCIgKyBkYXRhW2luZGV4XS5oZWFkZXJ9XHJcblx0XHRcdFx0XHQgIGFsdD1cIlwiXHJcblx0XHRcdFx0XHQvPikgOiAoPGltZyBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCJ9fSBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn0gYWx0PVwiXCIvPil9XHJcblx0XHRcdFx0ICA8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgICBib3gucHVzaChpdGVtKTtcclxuICAgIH1cclxuICAgIGlmKGxvYWRlZCA9PSB0cnVlKXtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL3plbml0aC9pbWFnZXMvWjF6SUpDS2suanBlZ1wiIGJsdXI9e3sgbWluOiAtMSwgbWF4OiAzIH19IHN0cmVuZ3RoPXs0MDB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC02XCIgYWx0PVwiYWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbXVsdGlsaW5lIGlzLWNlbnRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtib3h9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tb2JpbGUgaXMtY2VudGVyZWRcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxNTBweFwifX0+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudD17bmJyfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZT17MX1cclxuICAgICAgICAgICAgICAgICAgICB0b3RhbD17cGFnZU5icn1cclxuICAgICAgICAgICAgICAgICAgICBzaG93VGl0bGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bkwgY2VudGVyIGxpZ2h0IGxldHRlclNwYWNpbmdNXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFZvaXIgcGx1c1xyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9QYXJhbGxheD5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtwYWdlQ2xpZW50VHdvOyIsImltcG9ydCBXb3JrcGFnZU9uZSBmcm9tIFwiLi9fd29ya3BhZ2VPbmVcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9fbmF2YmFyJztcclxuaW1wb3J0IFJzQnV0dG9uIGZyb20gJy4uL19yc0J1dHRvbic7XHJcbmltcG9ydCBMaW5lc1RvcCBmcm9tICcuLi9fbGluZXNUb3AnO1xyXG5pbXBvcnQgTGluZXNCb3R0b20gZnJvbSAnLi4vX2xpbmVzQm90dG9tJztcclxuaW1wb3J0IFdvcmtwYWdlVHdvIGZyb20gXCIuL193b3JrcGFnZVR3b1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7IFxyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgTWluaUZvb3RlciBmcm9tIFwiLi4vSG9tZXBhZ2UvX21pbmlGb290ZXJcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBXb3JrcGFnZSgpIHtcclxuXHRjb25zdCB7IG5iciB9ID0gdXNlUGFyYW1zKCk7XHJcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNDb3VudExvYWRlZCwgc2V0SXNDb3VudExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzQ2F0TG9hZGVkLCBzZXRJc0NhdExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2NhdCwgc2V0Q2F0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbbG9hZCwgc2V0TG9hZF0gPSB1c2VTdGF0ZShcImhpZGRlblwiKVxyXG5cdGNvbnN0IFt1bmxvYWQsIHNldFVubG9hZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblx0Y29uc3Qgc2V0TG9hZGluZyA9IHBhcmFtID0+IHtcclxuXHRcdGlmKHBhcmFtID09IHRydWUpIHtcclxuXHRcdFx0c2V0TG9hZChcInZpc2libGVcIik7XHRcdFxyXG5cdFx0XHRzZXRVbmxvYWQodHJ1ZSk7XHRcdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdFx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHJcblx0XHRcdGZldGNoKGAvZ2V0dEFsbFByb2plY3QvJHtuYnJ9YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRzZXRJdGVtcyhyZXN1bHQpO1xyXG5cdFx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cclxuXHRcdFx0ZmV0Y2goYC9nZXRDb3VudC9wcm9qZXRgLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdHNldENvdW50KHJlc3VsdCk7XHJcblx0XHRcdFx0c2V0SXNDb3VudExvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHRcdC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0XHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdHNldElzQ291bnRMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdFx0ZmV0Y2goYC9hcGkvY2F0ZWdvcmllc2Ase21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0XHQudGhlbihcclxuXHRcdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0c2V0Q2F0KHJlc3VsdCk7XHJcblx0XHRcdFx0c2V0SXNDYXRMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzZXRJc0NvdW50TG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHR9LCBbXSlcclxuXHJcblx0aWYgKGVycm9yKSB7XHJcblx0XHQgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuXHQgIH0gZWxzZSBpZiAoIWlzTG9hZGVkIHx8ICFpc0NvdW50TG9hZGVkfHwgIWlzQ2F0TG9hZGVkIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdjb21wbGV0ZScpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PHN2ZyBpZD1cIlJlYWN0TG9hZGVyXCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1zdGlsbFwiIHBvaW50cz1cIjAsMCAxMDAsMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1zdGlsbFwiIHBvaW50cz1cIjAsMCAwLDEwMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1hbmltYXRpb25cIiBwb2ludHM9XCIwLDAgMTAwLDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2UtYW5pbWF0aW9uXCIgcG9pbnRzPVwiMCwwIDAsMTAwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0ICB9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gKCAgXHJcblx0XHQ8PlxyXG5cdFx0PE5hdmJhcj48L05hdmJhcj5cclxuXHRcdDxSc0J1dHRvbj48L1JzQnV0dG9uPlxyXG5cdFx0PExpbmVzVG9wPjwvTGluZXNUb3A+XHJcblx0XHQ8TGluZXNCb3R0b20+PC9MaW5lc0JvdHRvbT5cclxuXHRcdDxXb3JrcGFnZU9uZSBzZXRMb2FkaW5nPXtzZXRMb2FkaW5nfSBjYXQ9e2NhdH0+PC9Xb3JrcGFnZU9uZT5cclxuXHRcdDxXb3JrcGFnZVR3byBsb2FkZWQ9e3VubG9hZH0gZGF0YT17aXRlbXN9IHBhZ2U9e25icn0gY291bnQ9e2NvdW50fT48L1dvcmtwYWdlVHdvPlxyXG5cdFx0PE1pbmlGb290ZXIgbG9hZGVkPXt1bmxvYWR9PjwvTWluaUZvb3Rlcj5cclxuXHRcdDwvPlxyXG5cdCApO1xyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgV29ya3BhZ2U7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xyXG5pbXBvcnQgQXJyb3dGb3J3YXJkSW9zU2hhcnBJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkSW9zU2hhcnAnO1xyXG5pbXBvcnQgTXVpQWNjb3JkaW9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWNjb3JkaW9uJztcclxuaW1wb3J0IE11aUFjY29yZGlvblN1bW1hcnkgZnJvbSAnQG11aS9tYXRlcmlhbC9BY2NvcmRpb25TdW1tYXJ5JztcclxuaW1wb3J0IE11aUFjY29yZGlvbkRldGFpbHMgZnJvbSAnQG11aS9tYXRlcmlhbC9BY2NvcmRpb25EZXRhaWxzJztcclxuXHJcblxyXG5jb25zdCBBY2NvcmRpb24gPSBzdHlsZWQoKHByb3BzKSA9PiAoXHJcbiAgPE11aUFjY29yZGlvbiBkaXNhYmxlR3V0dGVycyBlbGV2YXRpb249ezB9IHNxdWFyZSB7Li4ucHJvcHN9IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgbWF4V2lkdGg6IFwiMTg1cHhcIixcclxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwwKVwiLFxyXG4gIGNvbG9yOiBcIndoaXRlXCIsXHJcbn0pKTtcclxuXHJcbmNvbnN0IEFjY29yZGlvblN1bW1hcnkgPSBzdHlsZWQoKHByb3BzKSA9PiAoXHJcbiAgPE11aUFjY29yZGlvblN1bW1hcnlcclxuICAgIGV4cGFuZEljb249ezxBcnJvd0ZvcndhcmRJb3NTaGFycEljb24gc3g9e3sgZm9udFNpemU6IFwiMC45cmVtXCIgfX0gLz59XHJcblx0ey4uLnByb3BzfVxyXG4gIC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgY29sb3I6IFwid2hpdGVcIixcclxuICBiYWNrZ3JvdW5kQ29sb3I6XHJcbiAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwiZGFybFwiXHJcbiAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIC4wNSlcIlxyXG4gICAgICA6IFwicmdiYSgwLCAwLCAwLCAuMDMpXCIsXHJcbiAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICBcIiYgLk11aUFjY29yZGlvblN1bW1hcnktZXhwYW5kSWNvbldyYXBwZXIuTXVpLWV4cGFuZGVkXCI6IHtcclxuICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoOTBkZWcpXCIsXHJcbiAgfSxcclxuICBcIiYgLk11aUFjY29yZGlvblN1bW1hcnktY29udGVudFwiOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEFjY29yZGlvbkRldGFpbHMgPSBzdHlsZWQoTXVpQWNjb3JkaW9uRGV0YWlscykoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIHBhZGRpbmdUb3A6IDAsXHJcbiAgbWFyZ2luVG9wOiAwLFxyXG4gIG1heEhlaWdodDogXCIxNTBweFwiLFxyXG4gIG92ZXJmbG93OiBcInNjcm9sbFwiLFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBXb3JrcGFnZU9uZSh7c2V0TG9hZGluZywgY2F0fSkge1xyXG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gUmVhY3QudXNlU3RhdGUoXCJwYW5lbDFcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChwYW5lbCkgPT4gKGV2ZW50LCBuZXdFeHBhbmRlZCkgPT4ge1xyXG4gICAgc2V0RXhwYW5kZWQobmV3RXhwYW5kZWQgPyBwYW5lbCA6IGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gIH0sIFsxXSk7XHJcblxyXG4gIGNvbnN0IFt3b3Jkcywgc2V0V29yZHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGxldCBjYXRlZ29yeSA9IGNhdDtcclxuICBsZXQgbWVudSA9IFtdO1xyXG4gIGxldCByYW5kb21Xb3JkID0gW1xyXG4gICAgXCJSw4lBQ1RJVklUw4lcIixcclxuICAgIFwiUFJPWElNSVTDiVwiLFxyXG4gICAgXCJQQVNTSU9OXCIsXHJcbiAgICBcIlNUUkFUw4lHSUVcIixcclxuICAgIFwiRVZFTlRcIixcclxuICAgIFwiQ09OU0VJTFwiLFxyXG4gICAgXCJDT01NVU5JQ0FUSU9OXCIsXHJcbiAgICBcIlLDilZFUlwiLFxyXG4gICAgXCJBTUJJVElPTlwiLFxyXG4gICAgXCJJTUFHSU5BVElPTlwiLFxyXG4gICAgXCJhZ2lyXCIsXHJcbiAgICBcInMnYWRhcHRlclwiLFxyXG4gICAgXCJhbnRpY2lwZXJcIixcclxuICAgIFwiYXV0b25vbWllXCIsXHJcbiAgICBcImNyb2lzc2FuY2VcIixcclxuICAgIFwiZMOpZmlcIixcclxuICAgIFwicGxhbmlmaWVyXCIsXHJcbiAgICBcInBvc2l0aXZlclwiLFxyXG4gICAgXCJkaXNwb25pYmlsaXTDqVwiLFxyXG4gICAgXCJkeW5hbWlzbWVcIixcclxuICAgIFwiw6ljb3V0ZVwiLFxyXG4gICAgXCJzZXJ2aWNlXCIsXHJcbiAgICBcInByw6l2aXNpb25cIixcclxuICAgIFwidMOpbmFjaXTDqVwiLFxyXG4gICAgXCJxdWFsaXTDqVwiLFxyXG4gICAgXCJtb2JpbGlzZXJcIixcclxuICAgIFwibsOpZ29jaWVyXCIsXHJcbiAgICBcIm9iamVjdGlmc1wiLFxyXG4gICAgXCJvcHRpbWlzZXJcIixcclxuICAgIFwiY2hhbGxlbmdlXCIsXHJcbiAgICBcInLDqXVzc2lyXCIsXHJcbiAgICBcImV4Y2VsbGVuY2VcIixcclxuICAgIFwicsOpYWxpc2VyXCIsXHJcbiAgICBcInLDqXN1bHRhdHNcIixcclxuICAgIFwiZMOpdmVsb3BwZXJcIixcclxuICAgIFwic2F2b2lyZmFpcmVcIixcclxuICAgIFwiZGlhbG9ndWVcIixcclxuICAgIFwicHLDqXZvaXJcIixcclxuICAgIFwic3luZXJnaWVcIixcclxuICAgIFwicHJvamV0XCIsXHJcbiAgICBcImlubm92YXRpb25cIixcclxuICAgIFwibW90aXZhdGlvblwiXTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIGdldFdvcmQoKSB7XHJcbiAgICAgIGxldCB3b3JkID0gcmFuZG9tV29yZFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5kb21Xb3JkLmxlbmd0aCldO1xyXG4gICAgICByYW5kb21Xb3JkLnNwbGljZShyYW5kb21Xb3JkLmluZGV4T2Yod29yZCkpO1xyXG4gICAgICByZXR1cm4gd29yZDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgd29yZDEgPSBnZXRXb3JkKCk7XHJcbiAgICBsZXQgd29yZDIgPSBnZXRXb3JkKCk7XHJcbiAgICBzZXRXb3Jkcyhbd29yZDEsIHdvcmQyXSk7XHJcbiAgfSwgW10pO1xyXG4gIGNhdGVnb3J5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGxldCBpdGVtID0gKFxyXG5cdFx0PGEga2V5PXtlbGVtZW50LmlkfSBzdHlsZT17e3RleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwid2hpdGVcIn19IGhyZWY9e2Avc2VhcmNoY2F0L3Byb2pldC8ke2VsZW1lbnQuaWR9LyR7ZWxlbWVudC5jYXRlZ29yaWV9YH0+XHJcblx0XHRcdDxwXHJcblx0XHRcdFxyXG5cdFx0XHRzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIix0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCJ9fVxyXG5cdFx0XHRjbGFzc05hbWU9XCJsaWdodFwiXHJcblx0XHQ+XHJcblx0XHRcdHtlbGVtZW50LmNhdGVnb3JpZX1cclxuXHRcdDwvcD5cclxuXHQgIDwvYT5cclxuXHJcbiAgICApO1xyXG4gICAgbWVudS5wdXNoKGl0ZW0pO1xyXG4gIH0pO1xyXG4gIGlmICh3b3Jkcy5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZDFcIiBhbHQ9XCJob21lcGFnZVwiPlxyXG4gICAgICAgICAgPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcbiAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuICAgICAgICAgIDwvdmlkZW8+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5Qmx1ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXIyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvemVuaXRoL2ltYWdlcy9iSU8xcjlGLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ya3BhZ2VUZXh0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZWRpdW1cIj5Tw4lMw4lDVElPTiBERSBQUk9KRVQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiwgbWFyZ2luUmlnaHQ6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiIH19IGNsYXNzTmFtZT1cImxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7d29yZHNbMF19IC4ge3dvcmRzWzFdfSAue1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKFwicGFuZWwxXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJwYW5lbDFkLWNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhbmVsMWQtaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjVweFwiIH19PiZuYnNwO0NBVMOJR09SSUU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz57bWVudX08L0FjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtwYWdlT25lO1xyXG4iLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gXCJyZWFjdC1wYXJhbGxheFwiO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICdyYy1wYWdpbmF0aW9uJztcclxuXHJcblxyXG5mdW5jdGlvbiBXb3JrcGFnZVR3byh7ZGF0YSwgcGFnZSwgY291bnQsIGxvYWRlZH0pIHtcclxuICBjb25zb2xlLmxvZyhjb3VudClcclxuICBsZXQgcGFnZU5iciA9IE1hdGguY2VpbChjb3VudCAvIDIwKVxyXG4gIGxldCBuYnIgPSBwYXJzZUludChwYWdlKVxyXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKHBhcmFtcykge1xyXG4gICAgZG9jdW1lbnQubG9jYXRpb24gPSBgL3Byb2pldHMvJHtwYXJhbXN9YFxyXG4gIH1cclxuXHJcbiAgbGV0IGJveCA9IFtdO1xyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBsZXQgaXRlbSA9IChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNvbHVtbiBjb2x1bW5zIGlzLW9uZS1maWZ0aCBpcy1jZW50ZXJlZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpcy1oYWxmXCI+XHJcbiAgICAgICAgICA8YSBocmVmPXtcIi9wcm9qZXQvXCIgKyBkYXRhW2luZGV4XS5pZH0+XHJcblx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPlxyXG5cdFx0XHRcdFx0PHAgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9fSBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG5cdFx0XHRcdFx0ICB7ZGF0YVtpbmRleF0ubWlzc2lvbn1cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdHtkYXRhW2luZGV4XS5oZWFkZXIgPyAoPGltZ1xyXG5cdFx0XHRcdFx0ICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19XHJcblx0XHRcdFx0XHQgIHNyYz17XCIvaW1hZ2VzL2ltYWdlcHJvamV0L1wiICsgZGF0YVtpbmRleF0uaGVhZGVyfVxyXG5cdFx0XHRcdFx0ICBhbHQ9XCJcIlxyXG5cdFx0XHRcdFx0Lz4pIDogKDxpbWcgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwifX0gc3JjPXtcIi96ZW5pdGgvYXV0cmUvbm9JbWcucG5nXCJ9IGFsdD1cIlwiLz4pfVxyXG5cdFx0XHRcdCAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgICAgYm94LnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbiAgaWYobG9hZGVkKXtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL1oxeklKQ0trLmpwZWdcIiBibHVyPXt7IG1pbjogLTEsIG1heDogMyB9fSBzdHJlbmd0aD17NDAwfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTZcIiBhbHQ9XCJhY3Rpb25cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tdWx0aWxpbmUgaXMtY2VudGVyZWRcIj5cclxuICAgICAgICAgICAgICAgIHtib3h9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW1vYmlsZSBpcy1jZW50ZXJlZFwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjE1MHB4XCJ9fT4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnQ9e25icn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBwYWdlU2l6ZT17MX1cclxuICAgICAgICAgICAgICAgICAgdG90YWw9e3BhZ2VOYnJ9XHJcbiAgICAgICAgICAgICAgICAgIHNob3dUaXRsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuTCBjZW50ZXIgbGlnaHQgbGV0dGVyU3BhY2luZ01cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG4gICAgICAgICAgICAgICAgICBWb2lyIHBsdXNcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtwYWdlVHdvO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgTGluaywgRGlyZWN0TGluaywgRWxlbWVudCwgRXZlbnRzLCBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCwgc2Nyb2xsU3B5LCBzY3JvbGxlciB9IGZyb20gJ3JlYWN0LXNjcm9sbCcgXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG4vL2ltcG9ydCBzY3JvbGxJbnRvVmlldyBmcm9tICdzY3JvbGwtaW50by12aWV3LWlmLW5lZWRlZCdcclxuaW1wb3J0IEhvbWVwYWdlIGZyb20gJy4vSG9tZXBhZ2UvX2hvbWVwYWdlJztcclxuaW1wb3J0IFdvcmRwYWdlIGZyb20gJy4vSG9tZXBhZ2UvX3dvcmQnO1xyXG5pbXBvcnQgRW1vdGlvbiBmcm9tICcuL0hvbWVwYWdlL19lbW90aW9uJztcclxuaW1wb3J0IEFjdGlvbiBmcm9tICcuL0hvbWVwYWdlL19hY3Rpb24nO1xyXG5pbXBvcnQgQ3JlYXRpb24gZnJvbSAnLi9Ib21lcGFnZS9fY3JlYXRpb24nO1xyXG5pbXBvcnQgU2F0aXNmYWN0aW9uIGZyb20gJy4vSG9tZXBhZ2UvX3NhdGlzZmFjdGlvbic7XHJcbmltcG9ydCBDaGlmZnJlcyBmcm9tICcuL0hvbWVwYWdlL19jaGlmZnJlcyc7XHJcbmltcG9ydCBWaXNpb24gZnJvbSAnLi9Ib21lcGFnZS9fdmlzaW9uJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0hvbWVwYWdlL19mb290ZXInO1xyXG5pbXBvcnQgSW5zdGFmbHV4IGZyb20gJy4vSG9tZXBhZ2UvX2luc3RhJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL19uYXZiYXInO1xyXG5pbXBvcnQgUnNCdXR0b24gZnJvbSAnLi9fcnNCdXR0b24nO1xyXG5pbXBvcnQgTGluZXNUb3AgZnJvbSAnLi9fbGluZXNUb3AnO1xyXG5pbXBvcnQgTGluZXNCb3R0b20gZnJvbSAnLi9fbGluZXNCb3R0b20nO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvbG9hZGVyLmNzc1wiXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcblx0Y29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2luc3RhLCBzZXRJbnN0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZmV0Y2goYC9nZXR0QWxsQ3JlYXRpb25gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHQudGhlbihcclxuXHRcdCAgKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0c2V0SXRlbXMocmVzdWx0KVxyXG5cdFx0ICB9LFxyXG5cdFx0ICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdCAgLy8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHQgIC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0ICAoZXJyb3IpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXHJcblx0XHQgIH1cclxuXHRcdClcclxuXHJcblx0XHQvLyBmZXRjaChgaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9hZ2VuY2V6ZW5pdGgvP19fYT0xP19fYT0xJl9fZD1kaXNgLHttZXRob2Q6J0dFVCcsfSlcclxuXHRcdC8vIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0Ly8gLnRoZW4oKHJlc3VsdEluc3RhKSA9PiB7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKFwidG90b1wiKVxyXG5cdFx0Ly8gXHRjb25zb2xlLmxvZyhyZXN1bHRJbnN0YSlcclxuXHRcdC8vICAgfSxcclxuXHRcdC8vICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHQvLyAgIC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0Ly8gICAvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdC8vICAgKGVycm9yKSA9PiB7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdFx0Ly8gICB9XHJcblx0XHQvLyApXHJcblx0ICB9LCBbXSlcclxuXHJcblx0aWYoaXNMb2FkZWQgPT0gZmFsc2UgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJykge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8c3ZnIGlkPVwiUmVhY3RMb2FkZXJcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLXN0aWxsXCIgcG9pbnRzPVwiMCwwIDEwMCwwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLXN0aWxsXCIgcG9pbnRzPVwiMCwwIDAsMTAwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLWFuaW1hdGlvblwiIHBvaW50cz1cIjAsMCAxMDAsMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1hbmltYXRpb25cIiBwb2ludHM9XCIwLDAgMCwxMDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9ZWxzZXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdDxOYXZiYXI+PC9OYXZiYXI+XHJcblx0XHRcdDxMaW5lc1RvcD48L0xpbmVzVG9wPlxyXG5cdFx0XHQ8TGluZXNCb3R0b20+PC9MaW5lc0JvdHRvbT5cclxuXHRcdFx0PFJzQnV0dG9uPjwvUnNCdXR0b24+XHJcblx0XHRcdFxyXG5cclxuXHRcdFx0XHQ8RWxlbWVudCBuYW1lPVwic2Nyb2xsLXRvLWVsZW1lbnQxXCIgY2xhc3NOYW1lPVwiZWxlbWVudFwiPlx0XHRcdFxyXG5cclxuXHRcdFx0XHRcdDxIb21lcGFnZSA+PC9Ib21lcGFnZT5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvRWxlbWVudD5cdFxyXG5cclxuXHRcdFx0XHR7LyogPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJ9fT48L2Rpdj4gKi99XHJcblx0XHRcdFx0PFdvcmRwYWdlID48L1dvcmRwYWdlPlxyXG5cdFx0XHRcdHsvKiA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsIGhlaWdodDpcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIn19PjwvZGl2PiAqL31cclxuXHJcblxyXG5cclxuXHRcdFx0XHQ8RWxlbWVudCBuYW1lPVwic2Nyb2xsLXRvLWVsZW1lbnQzXCIgY2xhc3NOYW1lPVwiZWxlbWVudFwiPlxyXG5cclxuXHRcdFx0XHRcdDxFbW90aW9uID48L0Vtb3Rpb24+XHJcblxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHJcblxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDRcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+XHJcblx0XHRcdFx0XHQ8QWN0aW9uID48L0FjdGlvbj5cclxuXHRcdFx0XHQ8L0VsZW1lbnQ+XHJcblxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDVcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+XHJcblxyXG5cdFx0XHRcdFx0PENyZWF0aW9uIGl0ZW09e2l0ZW1zfT48L0NyZWF0aW9uPlxyXG5cclxuXHRcdFx0XHQ8L0VsZW1lbnQ+XHJcblxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDZcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+XHJcblxyXG5cdFx0XHRcdFx0PFNhdGlzZmFjdGlvbiA+PC9TYXRpc2ZhY3Rpb24+XHJcblxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50N1wiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj5cclxuXHJcblx0XHRcdFx0XHRcdDxDaGlmZnJlcyA+PC9DaGlmZnJlcz5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0PC9FbGVtZW50PlxyXG5cclxuXHRcdFx0XHQ8RWxlbWVudCBuYW1lPVwic2Nyb2xsLXRvLWVsZW1lbnQ4XCIgY2xhc3NOYW1lPVwiZWxlbWVudFwiPlxyXG5cclxuXHRcdFx0XHRcdDxWaXNpb24gPjwvVmlzaW9uPlxyXG5cclxuXHRcdFx0XHQ8L0VsZW1lbnQ+XHJcblxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDhcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+XHJcblxyXG5cdFx0XHRcdFx0XHQ8SW5zdGFmbHV4ID48L0luc3RhZmx1eD5cclxuXHJcblx0XHRcdFx0PC9FbGVtZW50PlxyXG5cclxuXHJcblxyXG5cdFx0XHRcdDxGb290ZXIgPjwvRm9vdGVyPlxyXG5cclxuXHJcblx0XHRcdHsvKiA8RWxlbWVudCBuYW1lPVwic2Nyb2xsLXRvLWVsZW1lbnQxMFwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj48L0VsZW1lbnQ+ICovfVxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHRcdFxyXG5cdH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiZnVuY3Rpb24gTGluZXNCb3R0b20oKSB7XHJcblx0cmV0dXJuICggXHJcblx0XHQ8PlxyXG5cclxuXHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmVCXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMjAwXCI+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmU0XCI+PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmU1IGxpbmVBbmltZTJcIj48L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHRcdDwvPlxyXG5cdCApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5lc0JvdHRvbTsiLCJmdW5jdGlvbiBMaW5lc1RvcCgpIHtcclxuXHRsZXQgYXVkaW8gPSBuZXcgQXVkaW8oXCIvemVuaXRoL2F1dHJlL0hvcml6b24ubXAzXCIpXHJcblxyXG5cdGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xyXG5cdCAgYXVkaW8ucGxheSgpXHJcblx0fVxyXG5cdHJldHVybiAoIFxyXG5cdFx0PD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaW5lQVwiICBkYXRhLWFvcz1cImZhZGUtZG93blwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGluZTJcIm9uQ2xpY2s9e3N0YXJ0fT48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmUzIGxpbmVBbmltZVwiID48L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8Lz5cclxuXHQgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGluZXNUb3A7IiwiaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBuYXZiYXIoKSB7XHJcblxyXG4gIEFPUy5pbml0KClcclxuICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRTZWFyY2hJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCB0ZWxlcG9ydCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsb2NhdGlvbi5yZXBsYWNlKCcvc2VhcmNoLycgKyBzZWFyY2hJbnB1dCk7XHJcbiAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvc2VhcmNoL1wiK3NlYXJjaElucHV0XHJcbiAgfVxyXG4gIFxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cclxuICAgIDxpbnB1dCBpZD1cIm1lbnVfX3RvZ2dsZVwiIHR5cGU9XCJjaGVja2JveFwiICAvPlxyXG5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1lbnVfX2J0blwiIGh0bWxGb3I9XCJtZW51X190b2dnbGVcIiBkYXRhLWFvcz1cImZhZGUtZG93blwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTIwMFwiPlxyXG4gICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgIFxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVudV9fYm94XCIgZGF0YS1hb3M9XCJmYWRlLXJpZ2h0XCI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RlbGVwb3J0fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzc1JSd9fSBjbGFzc05hbWU9XCJmb3JtX19ncm91cCBmaWVsZCBkaXZDMSBtZW51X19pdGVtMVwiID5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJpbnB1dFwiIHNpemU9XCIxNVwiIGNsYXNzTmFtZT1cImZvcm1fX2ZpZWxkXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgaWQ9XCJlbWFpbFwiIHZhbHVlPXtzZWFyY2hJbnB1dH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcmVxdWlyZWQ+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxcIj5SZWNoZXJjaGU8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lbnVfX2l0ZW0gbGlnaHQgbGV0dGVyU3BhY2luZ1NcIj48TGluayBjbGFzc05hbWU9XCJ0ZXh0RGVjbyBtYXJnaW5TdG9wXCIgdG89XCIvXCI+QUNDVUVJTDwvTGluaz48L2g1PlxyXG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZW51X19pdGVtIGxpZ2h0IGxldHRlclNwYWNpbmdTXCI+PExpbmsgY2xhc3NOYW1lPVwidGV4dERlY29cIiB0bz1cIi9jbGllbnRzLzFcIj5DTElFTlRTPC9MaW5rPjwvaDU+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lbnVfX2l0ZW0gbGlnaHQgbGV0dGVyU3BhY2luZ1NcIj48TGluayBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiIHRvPVwiL3Byb2pldHMvMVwiPlBST0pFVFM8L0xpbms+PC9oNT5cclxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWVudV9faXRlbSBsaWdodCBsZXR0ZXJTcGFjaW5nU1wiPjxMaW5rIGNsYXNzTmFtZT1cInRleHREZWNvXCIgdG89XCIvY29udGFjdFwiPkNPTlRBQ1Q8L0xpbms+PC9oNT5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0RGVjbyBsZXR0ZXJTcGFjaW5nU1wiIGhyZWY9XCIvbG9naW5cIj48aDUgY2xhc3NOYW1lPVwibWVudV9faXRlbSB0ZXh0RGVjbyBsaWdodFwiPkFETUlOPC9oNT48L2E+XHJcbiAgICAgIDwvdWw+XHJcblx0XHQ8Lz5cclxuXHQgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5hdmJhcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuXHJcbmZ1bmN0aW9uIFJzQnV0dG9uKCkge1xyXG5cdEFPUy5pbml0KHtvbmNlOiB0cnVlLH0pO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJycyBhb3MtaXRlbSBvdmVyZmxvd0hpZGRlblwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTIwMFwiPlxyXG5cdFx0XHQ8YSBjbGFzc05hbWU9XCJmYlwiIGhyZWY9J2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9BR0VOQ0VaRU5JVEgvJz48L2E+XHJcblx0XHRcdDxhIGNsYXNzTmFtZT1cImluc3RhXCIgaHJlZj0naHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9hZ2VuY2V6ZW5pdGgvP2hsPWZyJz48L2E+XHJcblx0XHRcdDxhIGNsYXNzTmFtZT1cImxpbmtlZGluXCIgaHJlZj0naHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvYWdlbmNlLXplbml0aC8nPjwvYT5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PC8+IFxyXG5cdFx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUnNCdXR0b247IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiQnJvd3NlclJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwidXNlTG9jYXRpb24iLCJIb21lIiwiV29ya3BhZ2UiLCJXb3JrcGFnZUNsaWVudCIsIkNvbnRhY3RQYWdlIiwiQ2xpZW50UGFnZSIsInVzZUxheW91dEVmZmVjdCIsIlByb2plY3RwYWdlIiwiU2VhcmNoUGFnZSIsIlNlYXJjaFBhZ2UyIiwiTWFpbiIsIldyYXBwZXIiLCJjaGlsZHJlbiIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUbyIsInBhdGhuYW1lIiwid2luZG93IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciIsIk5hdmJhciIsIkNsaWVudFBhZ2VPbmUiLCJDbGllbnRwYWdlVHdvIiwiQ2xpZW50cGFnZVRocmVlIiwiQ2xpZW50cGFnZUZvdXIiLCJDbGllbnRwYWdlRml2ZSIsIkNsaWVudHBhZ2VTaXgiLCJ1c2VQYXJhbXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNsaWVudHBhZ2U2XzUiLCJNaW5pRm9vdGVyIiwiQ2xpZW50cGFnZSIsImlkIiwiZXJyb3IiLCJzZXRFcnJvciIsImlzTG9hZGVkIiwic2V0SXNMb2FkZWQiLCJpc0xvYWRlZEltZyIsInNldElzTG9hZGVkSW1nIiwiaXNMb2FkZWROZXh0UHJldiIsInNldElzTG9hZGVkTmV4dFByZXYiLCJpc0ltZ1JlYWR5Iiwic2V0SW1nUmVhZHkiLCJpdGVtcyIsInNldEl0ZW1zIiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwiaGVhZGVyIiwic2V0SGVhZGVyIiwicHJlY2kiLCJzZXRQcmVjaSIsInNlY29uZCIsInNldFNlY29uZCIsIk5leHRQcmV2Iiwic2V0TmV4dFByZXYiLCJQcm9qZWN0Iiwic2V0UHJvamVjdCIsImlzTG9hZGVkUHJvamVjdCIsInNldElzTG9hZGVkUHJvamVjdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzdWx0IiwidGhpc1JlcyIsIkpTT04iLCJwYXJzZSIsImkiLCJsZW5ndGgiLCJpbWFnZXByZWNpc2lvbiIsInNlY29uZGFpcmUiLCJjb25zb2xlIiwibG9nIiwiTmV4dCIsIlByZXYiLCJtZXNzYWdlIiwicmVhZHlTdGF0ZSIsImJhY2tncm91bmRJbWFnZSIsIm1hcmdpblRvcCIsIl9faHRtbCIsInRlbW9pZ25hZ2UiLCJMaW5rIiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJFbGVtZW50IiwiUGFyYWxsYXgiLCJpdGVtIiwic2xpZGVyIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJuZXdTbGlkZXIiLCJ1bmRlZmluZWQiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yIiwiZSIsIlJlbW92ZUJsdXJEZXRhaWwiLCJCbHVyRGV0YWlsIiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInBvaW50ZXJFdmVudHMiLCJkaXNwbGF5IiwidGV4dEFsaWduIiwibGVmdCIsInRvcCIsIm1pc3Npb24iLCJvYmplY3RGaXQiLCJiYWNrZ3JvdW5kIiwicHVzaCIsInRhcmdldCIsInN0eWxlIiwiYmFja2Ryb3BGaWx0ZXIiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJMaWdodGJveCIsIlRodW1ibmFpbHMiLCJvcGVuIiwic2V0T3BlbiIsImFycmF5SW1hZ2UiLCJpbmRleCIsInZpc2libGUiLCJzcmMiLCJpbWFnZSIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsImFsaWduSXRlbXMiLCJib3R0b20iLCJBT1MiLCJkYXRhMiIsImVsZW1lbnRwcmVjaXNpb24iLCJ0ZXh0VHJhbnNmb3JtIiwiQ2xpZW50cGFnZU9uZSIsImRhdGEiLCJpbml0Iiwibm9tQ2xpZW50Iiwic2VjdGV1ciIsImR1cmVlIiwiY2F0ZWdvcmllIiwibnAiLCJocmVmIiwiZW5qZXUiLCJoaXN0b2lyZSIsInJlcG9uc2UiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJSc0J1dHRvbiIsIkxpbmVzVG9wIiwiTGluZXNCb3R0b20iLCJDb250YWN0UGFnZU9uZSIsIlN3YWwiLCJ3aXRoUmVhY3RDb250ZW50IiwiTXlTd2FsIiwiZW1haWwiLCJuYW1lIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInBlcnNpc3QiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImRpc2FibGVkIiwicHJldmVudERlZmF1bHQiLCJmaXJlIiwidGV4dCIsInRvYXN0IiwiaWNvbiIsInRpdGxlIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwicmVxdWVzdE9wdGlvbnMiLCJib2R5Iiwic3RyaW5naWZ5IiwibWF4SGVpZ2giLCJBY3Rpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsIkNoaWZmcmVzIiwiQ3JlYXRpb24iLCJjcmVhdGlvbiIsIkVtb3Rpb24iLCJGb290ZXIiLCJoYW5kbGVFbWFpbElucHV0Q2hhbmdlIiwicmVzcG9uc2UiLCJhZHJlc3NlIiwidGVsIiwiSG9tZXBhZ2UiLCJ1c2VSZWYiLCJJbnN0YWZsdXgiLCJpbnN0YSIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJhc3luYyIsImFwcGVuZENoaWxkIiwiYm9yZGVyIiwibWFyZ2luQm90dG9tIiwibG9hZGVkIiwiYSIsIlNhdGlzZmFjdGlvbiIsImxvZ28iLCJWaXNpb24iLCJNYXJxdWVlIiwiV29yZHBhZ2UiLCJvdmVyZmxvdyIsIlByb2plY3RQYWdlT25lIiwiUHJvamVjdHBhZ2VUd28iLCJQcm9qZWN0cGFnZVRocmVlIiwiUHJvamVjdHBhZ2VGb3VyIiwiUHJvamVjdHBhZ2VGaXZlIiwiUHJvamVjdHBhZ2VTaXgiLCJmYWRlT3V0IiwiZWxlbSIsIm1zIiwib3BhY2l0eSIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInZpc2liaWxpdHkiLCJmaWx0ZXIiLCJzZXREaXNwbGF5IiwicmVzdWx0aW1nIiwiZm9jdXMiLCJxdWVyeVNlbGVjdG9yIiwiUHJvamVjdHBhZ2VPbmUiLCJwcm9qZXQiLCJjbGllbnQiLCJjdXJzb3IiLCJkZW1hbmRlIiwiZGVmaSIsImFjdGlvbiIsIlNlYXJjaFBhZ2VPbmUyIiwiU2VhcmNoUGFnZVR3bzIiLCJpbmZvIiwidHlwZSIsImxvYWQiLCJzZXRMb2FkIiwidW5sb2FkIiwic2V0VW5sb2FkIiwic2V0TG9hZGluZyIsInBhcmFtIiwiYm94IiwibWluIiwibWF4IiwiU2VhcmNoUGFnZU9uZSIsIlNlYXJjaFBhZ2VUd28iLCJXb3JrcGFnZUNsaWVudE9uZSIsIldvcmtwYWdlQ2xpZW50VHdvIiwibmJyIiwiaXNDb3VudExvYWRlZCIsInNldElzQ291bnRMb2FkZWQiLCJpc0NhdExvYWRlZCIsInNldElzQ2F0TG9hZGVkIiwiY2F0Iiwic2V0Q2F0IiwiY291bnQiLCJzZXRDb3VudCIsInN0eWxlZCIsIkJ1dHRvbiIsIk1lbnUiLCJNZW51SXRlbSIsIlR5cG9ncmFwaHkiLCJBcnJvd0ZvcndhcmRJb3NTaGFycEljb24iLCJNdWlBY2NvcmRpb24iLCJBY2NvcmRpb25Qcm9wcyIsIk11aUFjY29yZGlvblN1bW1hcnkiLCJBY2NvcmRpb25TdW1tYXJ5UHJvcHMiLCJNdWlBY2NvcmRpb25EZXRhaWxzIiwiQWNjb3JkaW9uIiwicHJvcHMiLCJ0aGVtZSIsIm1heFdpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiQWNjb3JkaW9uU3VtbWFyeSIsImZvbnRTaXplIiwicGFsZXR0ZSIsIm1vZGUiLCJmbGV4RGlyZWN0aW9uIiwidHJhbnNmb3JtIiwic3BhY2luZyIsIkFjY29yZGlvbkRldGFpbHMiLCJtYXhIZWlnaHQiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwiaGFuZGxlQ2hhbmdlIiwicGFuZWwiLCJuZXdFeHBhbmRlZCIsIndvcmRzIiwic2V0V29yZHMiLCJjYXRlZ29yeSIsIm1lbnUiLCJyYW5kb21Xb3JkIiwiZ2V0V29yZCIsIndvcmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzcGxpY2UiLCJpbmRleE9mIiwid29yZDEiLCJ3b3JkMiIsIlBhZ2luYXRpb24iLCJwYWdlIiwicGFnZU5iciIsImNlaWwiLCJwYXJzZUludCIsIm9uQ2hhbmdlIiwicGFyYW1zIiwiaGFzT3duUHJvcGVydHkiLCJXb3JrcGFnZU9uZSIsIldvcmtwYWdlVHdvIiwiRGlyZWN0TGluayIsIkV2ZW50cyIsImFuaW1hdGVTY3JvbGwiLCJzY3JvbGwiLCJzY3JvbGxTcHkiLCJzY3JvbGxlciIsInNldEluc3RhIiwiYXVkaW8iLCJBdWRpbyIsInN0YXJ0IiwicGxheSIsIm5hdmJhciIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJ0ZWxlcG9ydCIsInJlcGxhY2UiLCJvbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==