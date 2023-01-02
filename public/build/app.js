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
    }), /*#__PURE__*/React.createElement(_Homepage_miniFooter__WEBPACK_IMPORTED_MODULE_24__["default"], null));
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_navbar__WEBPACK_IMPORTED_MODULE_0__["default"], null), /*#__PURE__*/React.createElement(_rsButton__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(_linesTop__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/React.createElement(_linesBottom__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/React.createElement(_contactpageOne__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/React.createElement(_Homepage_miniFooter__WEBPACK_IMPORTED_MODULE_6__["default"], null));
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
    "for": "name",
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
    "for": "name",
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
    "for": "name",
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
    strength: 400
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
    strength: 800
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");



function Emotion() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_parallax__WEBPACK_IMPORTED_MODULE_1__.Parallax, {
    bgImage: "/zenith/images/Z1zIJCKk.jpeg",
    strength: 400
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "",
    style: {
      paddingTop: '50px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "zoom-in",
    "data-aos-mirror": "true",
    "data-aos-once": "false",
    "data-aos-anchor-placement": "top-center",
    "data-aos-duration": "1500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container2 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "titreA medium letterSpacing marginStop",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, "\xC9MOTION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
    className: "light letterSpacingS sousTitre",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, "FAIRE VIBRER LA CORDE INVISIBLE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "containerFlex center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxVideo",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("iframe", {
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    src: "https://www.youtube.com/embed/E1TFZWbB36M",
    title: "YouTube video player",
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "titreB light letterSpacing container center accroche",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, "SUSCITER L\u2019EMOTION EN UN INSTANT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      document.location = "/client/1";
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
    className: "footerText light text-h5"
  }, " VAL D\u2019EUROPE ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("li", {
    className: "li2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
    href: "",
    className: "footerText light text-h5"
  }, "HELLO@AGENCEZENITH.COM")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("li", {
    className: "li2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
    href: "",
    className: "footerText light text-h5"
  }, "06.11.86.65.80")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
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
  }, " NEWSLETTER"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("input", {
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
    href: "",
    className: "footerText light text-h5"
  }, "ACCUEIL")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("li", {
    className: "li2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
    href: "",
    className: "footerText light text-h5"
  }, "CLIENT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("li", {
    className: "li2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
    href: "",
    className: "footerText light text-h5"
  }, "PROJETS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("li", {
    className: "li2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
    href: "",
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
    strength: 400
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
      className: "footerText light text-h5"
    }, " VAL D\u2019EUROPE ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("li", {
      className: "li2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
      href: "",
      className: "footerText light text-h5"
    }, "HELLO@AGENCEZENITH.COM")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("li", {
      className: "li2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("a", {
      href: "",
      className: "footerText light text-h5"
    }, "06.11.86.65.80")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
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
    }, " NEWSLETTER"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("input", {
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
    }), /*#__PURE__*/React.createElement(_Homepage_miniFooter__WEBPACK_IMPORTED_MODULE_23__["default"], null));
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
  var setLoading = function setLoading(param) {
    if (param == true) {
      console.log("gotcha");
      setLoad("visible");
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
    })), /*#__PURE__*/React.createElement(_Homepage_miniFooter__WEBPACK_IMPORTED_MODULE_20__["default"], null));
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
    })), /*#__PURE__*/React.createElement(_Homepage_miniFooter__WEBPACK_IMPORTED_MODULE_19__["default"], null));
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
    box = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Vraiment d\xE9sol\xE9, nous n'avons rien trouv\xE9 :c");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBQTs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NsaWVudHBhZ2UvX2NsaWVudHBhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NsaWVudHBhZ2UvX2NsaWVudHBhZ2U2XzUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NsaWVudHBhZ2UvX2NsaWVudHBhZ2VGaXZlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DbGllbnRwYWdlL19jbGllbnRwYWdlRm91ci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2xpZW50cGFnZS9fY2xpZW50cGFnZU9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2xpZW50cGFnZS9fY2xpZW50cGFnZVNpeC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2xpZW50cGFnZS9fY2xpZW50cGFnZVRocmVlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DbGllbnRwYWdlL19jbGllbnRwYWdlVHdvLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Db250YWN0cGFnZS9fY29udGFjdHBhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NvbnRhY3RwYWdlL19jb250YWN0cGFnZU9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZXBhZ2UvX2FjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZXBhZ2UvX2NoaWZmcmVzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ib21lcGFnZS9fY3JlYXRpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL19lbW90aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ib21lcGFnZS9fZm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ib21lcGFnZS9faG9tZXBhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL19pbnN0YS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZXBhZ2UvX21pbmlGb290ZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL19zYXRpc2ZhY3Rpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL192aXNpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL193b3JkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Qcm9qZWN0cGFnZS9fcHJvamVjdHBhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1Byb2plY3RwYWdlL19wcm9qZWN0cGFnZUZpdmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1Byb2plY3RwYWdlL19wcm9qZWN0cGFnZUZvdXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1Byb2plY3RwYWdlL19wcm9qZWN0cGFnZU9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUHJvamVjdHBhZ2UvX3Byb2plY3RwYWdlU2l4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Qcm9qZWN0cGFnZS9fcHJvamVjdHBhZ2VUaHJlZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUHJvamVjdHBhZ2UvX3Byb2plY3RwYWdlVHdvLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TZWFyY2hQYWdlMi9fU2VhcmNoUGFnZTIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1NlYXJjaFBhZ2UyL19TZWFyY2hQYWdlT25lMi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU2VhcmNoUGFnZTIvX1NlYXJjaFBhZ2VUd28yLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TZWFyY2hQYWdlL19TZWFyY2hQYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TZWFyY2hQYWdlL19TZWFyY2hQYWdlT25lLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TZWFyY2hQYWdlL19TZWFyY2hQYWdlVHdvLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Xb3JrcGFnZUNsaWVudC9fd29ya3BhZ2VDbGllbnQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1dvcmtwYWdlQ2xpZW50L193b3JrcGFnZUNsaWVudE9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvV29ya3BhZ2VDbGllbnQvX3dvcmtwYWdlQ2xpZW50VHdvLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Xb3JrcGFnZS9fd29ya3BhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1dvcmtwYWdlL193b3JrcGFnZU9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvV29ya3BhZ2UvX3dvcmtwYWdlVHdvLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9faG9tZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvX2xpbmVzQm90dG9tLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9fbGluZXNUb3AuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL19uYXZiYXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL19yc0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcnJvdy5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9mb250LmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2xvYWRlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlc2hlZXRzL2J1bG1hL2VsZW1lbnRzL2NvbnRhaW5lci5zYXNzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXNoZWV0cy9idWxtYS9ncmlkL2NvbHVtbnMuc2FzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzaGVldHMvYnVsbWEvaGVscGVycy9zcGFjaW5nLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlc2hlZXRzL21haW4uc2FzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzaGVldHMvcGFnaW5hdGlvbi5sZXNzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlcywgUm91dGUsIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0ICcuL3N0eWxlc2hlZXRzL21haW4uc2Fzcyc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9faG9tZS5qc3gnO1xyXG5pbXBvcnQgV29ya3BhZ2UgZnJvbSAnLi9jb21wb25lbnRzL1dvcmtwYWdlL193b3JrcGFnZSc7XHJcbmltcG9ydCBXb3JrcGFnZUNsaWVudCBmcm9tICcuL2NvbXBvbmVudHMvV29ya3BhZ2VDbGllbnQvX3dvcmtwYWdlQ2xpZW50JztcclxuaW1wb3J0IENvbnRhY3RQYWdlIGZyb20gJy4vY29tcG9uZW50cy9Db250YWN0cGFnZS9fY29udGFjdHBhZ2UnO1xyXG5pbXBvcnQgQ2xpZW50UGFnZSBmcm9tICcuL2NvbXBvbmVudHMvQ2xpZW50cGFnZS9fY2xpZW50cGFnZSc7XHJcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvamVjdHBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL1Byb2plY3RwYWdlL19wcm9qZWN0cGFnZSc7XHJcbmltcG9ydCBTZWFyY2hQYWdlIGZyb20gJy4vY29tcG9uZW50cy9TZWFyY2hQYWdlL19TZWFyY2hQYWdlJztcclxuaW1wb3J0IFNlYXJjaFBhZ2UyIGZyb20gJy4vY29tcG9uZW50cy9TZWFyY2hQYWdlMi9fU2VhcmNoUGFnZTInOyBcclxuaW1wb3J0IFwiLi9zdHlsZXNoZWV0cy9idWxtYS9ncmlkL2NvbHVtbnMuc2Fzc1wiIFxyXG5pbXBvcnQgXCIuL3N0eWxlc2hlZXRzL2J1bG1hL2hlbHBlcnMvc3BhY2luZy5zYXNzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuaW1wb3J0IFwiLi9zdHlsZXMvbG9hZGVyLmNzc1wiXHJcbmltcG9ydCAnLi9zdHlsZXNoZWV0cy9idWxtYS9ncmlkL2NvbHVtbnMuc2Fzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXNoZWV0cy9idWxtYS9oZWxwZXJzL3NwYWNpbmcuc2Fzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXNoZWV0cy9wYWdpbmF0aW9uLmxlc3MnIFxyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgV3JhcHBlciA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICB9LCBbbG9jYXRpb24ucGF0aG5hbWVdKTtcclxuICAgIHJldHVybiBjaGlsZHJlblxyXG4gIH07IFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICA8V3JhcHBlcj5cclxuICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9wcm9qZXRzLzpuYnJcIiBlbGVtZW50PXs8V29ya3BhZ2UgLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9jbGllbnRzLzpuYnJcIiBlbGVtZW50PXs8V29ya3BhZ2VDbGllbnQgLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9jb250YWN0XCIgZWxlbWVudD17PENvbnRhY3RQYWdlIC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvY2xpZW50LzppZFwiIGVsZW1lbnQ9ezxDbGllbnRQYWdlIC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvcHJvamV0LzppZFwiIGVsZW1lbnQ9ezxQcm9qZWN0cGFnZSAvPn0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3NlYXJjaC86aW5mb1wiIGVsZW1lbnQ9ezxTZWFyY2hQYWdlIC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvc2VhcmNoY2F0Lzp0eXBlLzppbmZvLzpuYW1lXCIgZWxlbWVudD17PFNlYXJjaFBhZ2UyIC8+fSAvPlxyXG4gICAgICAgIDwvUm91dGVzPlxyXG4gICAgICA8L1dyYXBwZXI+XHJcbiAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjsgXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi9NYWluLmpzJztcclxud2luZG93LlJlYWN0ID0gUmVhY3RcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcclxuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxucm9vdC5yZW5kZXIoXHJcblxyXG4gICAgPE1haW4gLz5cclxuXHJcbik7XHJcblxyXG4iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL19uYXZiYXInO1xyXG5pbXBvcnQgQ2xpZW50UGFnZU9uZSBmcm9tIFwiLi9fY2xpZW50cGFnZU9uZVwiO1xyXG5pbXBvcnQgQ2xpZW50cGFnZVR3byBmcm9tICcuL19jbGllbnRwYWdlVHdvJztcclxuaW1wb3J0IENsaWVudHBhZ2VUaHJlZSBmcm9tICcuL19jbGllbnRwYWdlVGhyZWUnO1xyXG5pbXBvcnQgQ2xpZW50cGFnZUZvdXIgZnJvbSAnLi9fY2xpZW50cGFnZUZvdXInO1xyXG5pbXBvcnQgQ2xpZW50cGFnZUZpdmUgZnJvbSAnLi9fY2xpZW50cGFnZUZpdmUnO1xyXG5pbXBvcnQgQ2xpZW50cGFnZVNpeCBmcm9tICcuL19jbGllbnRwYWdlU2l4JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcbmltcG9ydCBDbGllbnRwYWdlNl81IGZyb20gJy4vX2NsaWVudHBhZ2U2XzUnO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvbG9hZGVyLmNzc1wiXHJcbmltcG9ydCBNaW5pRm9vdGVyIGZyb20gJy4uL0hvbWVwYWdlL19taW5pRm9vdGVyJztcclxuXHJcbmZ1bmN0aW9uIENsaWVudHBhZ2UoKSB7XHJcblx0Y29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNMb2FkZWRJbWcsIHNldElzTG9hZGVkSW1nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNMb2FkZWROZXh0UHJldiwgc2V0SXNMb2FkZWROZXh0UHJldl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzSW1nUmVhZHksIHNldEltZ1JlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtoZWFkZXIsIHNldEhlYWRlcl0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW3ByZWNpLCBzZXRQcmVjaV0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW3NlY29uZCwgc2V0U2Vjb25kXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbTmV4dFByZXYsIHNldE5leHRQcmV2XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbUHJvamVjdCwgc2V0UHJvamVjdF0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2lzTG9hZGVkUHJvamVjdCwgc2V0SXNMb2FkZWRQcm9qZWN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRpZihpZCl7XHJcblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0XHRmZXRjaChgL2FwaS9jbGllbnRzLyR7aWR9YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRJdGVtcyhyZXN1bHQpO1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHRcdC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0XHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHJcblx0XHRcdGZldGNoKGAvZ2V0SW1hZ2VzQ2xpZW50LyR7aWR9YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRsZXQgdGhpc1JlcyA9IEpTT04ucGFyc2UocmVzdWx0KVxyXG5cdFx0XHRcdHNldElzTG9hZGVkSW1nKHRydWUpO1xyXG5cdFx0XHRcdHNldEltYWdlcyhKU09OLnBhcnNlKHJlc3VsdCkpO1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2codGhpc1JlcylcclxuXHRcdFx0XHRpZih0aGlzUmVzKXtcclxuXHRcdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzUmVzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpc1Jlc1tpXSlcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coaSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlc1tpXS5oZWFkZXIpXHJcblx0XHRcdFx0XHRcdFx0c2V0SGVhZGVyKHRoaXNSZXNbaV0pXHJcblx0XHRcdFx0XHRcdGlmKHRoaXNSZXNbaV0uaW1hZ2VwcmVjaXNpb24pXHJcblx0XHRcdFx0XHRcdFx0c2V0UHJlY2kodGhpc1Jlc1tpXSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlc1tpXS5zZWNvbmRhaXJlKVxyXG5cdFx0XHRcdFx0XHRcdHNldFNlY29uZCh0aGlzUmVzW2ldKVxyXG5cdFx0XHRcdFx0XHQvLyBpZihpbWFnZXNbaV0udmlzaWJsZSlcclxuXHRcdFx0XHRcdFx0Ly8gXHRzZXREaXNwbGF5KC4uLmltYWdlc1tpXSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlcy5sZW5ndGgtMSA9PSBpKXtcclxuXHRcdFx0XHRcdFx0XHRzZXRJbWdSZWFkeSh0cnVlKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKHRoaXNSZXMubGVuZ3RoID09IDApe1xyXG5cdFx0XHRcdFx0c2V0SW1nUmVhZHkodHJ1ZSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0XHRmZXRjaChgL05leFByZXYvJHtpZH1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdGxldCBOZXh0ID0gSlNPTi5wYXJzZShyZXN1bHRbMF0pXHJcblx0XHRcdFx0bGV0IFByZXYgPSBKU09OLnBhcnNlKHJlc3VsdFsxXSlcclxuXHRcdFx0XHRpZihOZXh0ICYmIFByZXYpe1xyXG5cdFx0XHRcdFx0c2V0TmV4dFByZXYoW05leHQsIFByZXZdKTtcclxuXHRcdFx0XHRcdGlmKE5leHRQcmV2KXtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coTmV4dFByZXYpXHJcblx0XHRcdFx0XHRcdHNldElzTG9hZGVkTmV4dFByZXYodHJ1ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdFx0ZmV0Y2goYC9nZXR0QWxsUHJvamVjdEJ5Q2xpZW50LyR7aWR9YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZFByb2plY3QodHJ1ZSk7XHJcblx0XHRcdFx0c2V0UHJvamVjdChyZXN1bHQpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHR9LCBbXSlcclxuXHR9XHJcblxyXG5cdGlmIChlcnJvcikge1xyXG5cdFx0IHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcblx0ICB9IGVsc2UgaWYgKCFpc0xvYWRlZCB8fCAhaXNJbWdSZWFkeSB8fCAhaXNMb2FkZWROZXh0UHJldiB8fCAhaXNMb2FkZWRQcm9qZWN0IHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdjb21wbGV0ZScpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PHN2ZyBpZD1cIlJlYWN0TG9hZGVyXCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1zdGlsbFwiIHBvaW50cz1cIjAsMCAxMDAsMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1zdGlsbFwiIHBvaW50cz1cIjAsMCAwLDEwMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1hbmltYXRpb25cIiBwb2ludHM9XCIwLDAgMTAwLDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2UtYW5pbWF0aW9uXCIgcG9pbnRzPVwiMCwwIDAsMTAwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0ICB9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpdGVtc1wiKVxyXG5cdFx0Y29uc29sZS5sb2coaXRlbXMpXHJcblx0XHRcdHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxOYXZiYXI+PC9OYXZiYXI+XHJcbiAgICAgICAgICA8Q2xpZW50UGFnZU9uZSBkYXRhPXtpdGVtc30+PC9DbGllbnRQYWdlT25lPlxyXG4gICAgICAgICAgPENsaWVudHBhZ2VUd28gZGF0YT17aXRlbXN9PjwvQ2xpZW50cGFnZVR3bz5cclxuICAgICAgICAgIDxDbGllbnRwYWdlVGhyZWUgZGF0YT17c2Vjb25kfT48L0NsaWVudHBhZ2VUaHJlZT5cclxuICAgICAgICAgIDxDbGllbnRwYWdlRm91ciBwcmVjaT17cHJlY2l9IGRhdGEyPXtpdGVtc30+PC9DbGllbnRwYWdlRm91cj5cclxuICAgICAgICAgIDxDbGllbnRwYWdlRml2ZSBpbWFnZXM9e2ltYWdlc30+PC9DbGllbnRwYWdlRml2ZT5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy82V3ZlbW0zSy5qcGVnKVwiIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbWlibG9jT3BhY2l0eVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXIgbWFyZ2luVG9wU1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjBcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1lZGl1bSBjZW50ZXJUZXh0XCI+VU4gVMOJTU9JR05BR0U8L2g0PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpZ2h0IGNlbnRlclRleHRcIlxyXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBpdGVtcy50ZW1vaWduYWdlIH19XHJcbiAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPENsaWVudHBhZ2U2XzUgaXRlbT17UHJvamVjdH0+PC9DbGllbnRwYWdlNl81PlxyXG4gICAgICAgICAgPENsaWVudHBhZ2VTaXggZGF0YT17aXRlbXN9IG5wPXtOZXh0UHJldn0+PC9DbGllbnRwYWdlU2l4PlxyXG5cdFx0ICA8TWluaUZvb3Rlcj48L01pbmlGb290ZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50cGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gQ2xpZW50cGFnZTZfNShpdGVtKSB7XHJcbiAgbGV0IHNsaWRlciA9IFtdXHJcbiAgY29uc29sZS5sb2coaXRlbSlcclxuICBpZihpdGVtLml0ZW0ubGVuZ3RoID4wKSB7XHJcbiAgICBpdGVtLml0ZW0uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgICAgICBsZXQgbmV3U2xpZGVyID0gdW5kZWZpbmVkXHJcbiAgICAgICAgaWYoZWxlbWVudC5oZWFkZXIpe1xyXG4gICAgICAgICAgICBuZXdTbGlkZXIgPSAoXHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17ZWxlbWVudC5pZH0gY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPXtgL3Byb2pldC8ke2VsZW1lbnQuaWR9YH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5taXNzaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy9pbWFnZXByb2pldC8ke2VsZW1lbnQuaGVhZGVyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICk7ICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5ld1NsaWRlciA9IChcclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtlbGVtZW50LmlkfSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcHJvamV0LyR7ZWxlbWVudC5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzAyMTExRFwiLH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQubWlzc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb250YWluXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi96ZW5pdGgvYXV0cmUvbm9JbWcucG5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICk7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNsaWRlci5wdXNoKG5ld1NsaWRlcikgXHJcbiAgICB9KTtcclxuICB9ZWxzZXtcclxuICAgIHNsaWRlciA9ICggPGgxIGNsYXNzTmFtZT1cInRpdHJlQSBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5TdG9wXCI+cmllbiBhIHZvaXI8L2gxPiApXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIEJsdXJEZXRhaWwoZSl7XHJcbiAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgZS50YXJnZXQuc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSBcImJsdXIoNHB4KVwiO1xyXG4gICAgZS50YXJnZXQuY2hpbGRyZW5bMF0uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCJcclxuICB9XHJcbiAgZnVuY3Rpb24gUmVtb3ZlQmx1ckRldGFpbChlKXtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cigwKVwiO1xyXG4gICAgZS50YXJnZXQuY2hpbGRyZW5bMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgfVxyXG4gIGlmKHNsaWRlci5sZW5ndGggPiAwKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgey8qIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxyXG4gIFxyXG4gICAgICAgICAgPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcbiAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnNC5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcbiAgICAgICAgICA8L3ZpZGVvPiAqL31cclxuICAgICAgICB7LyogPEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50NFwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj48L0VsZW1lbnQ+ICovfVxyXG4gICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL3plbml0aC9pbWFnZXMvWjF6SUpDS2suanBlZ1wiIHN0cmVuZ3RoPXs4MDB9PlxyXG4gIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3twYWRkaW5nVG9wOiAnNTBweCcscGFkZGluZ0JvdHRvbTogJzc1cHgnfX0+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAvLyAgIGRhdGEtYW9zPVwiem9vbS1pblwiXHJcbiAgICAgICAgICAvLyAgIGRhdGEtYW9zLW1pcnJvcj1cIlwiXHJcbiAgICAgICAgICAvLyAgIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiXHJcbiAgICAgICAgICAvLyAgIGRhdGEtYW9zLWFuY2hvci1wbGFjZW1lbnQ9XCJcIlxyXG4gICAgICAgICAgLy8gICBkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIyXCI+XHJcbiAgICAgICAgICAgICAgPGgzXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRyZUEgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcCBtYi01XCJcclxuICAgICAgICAgICAgICAvLyAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgLy8gICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFBST0pFVFMgTEnDiVNcclxuICAgICAgICAgICAgICA8L2gzPlxyXG4gIFxyXG4gICAgICAgICAgICAgIDxTd2lwZXJcclxuICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzUwMHB4J319XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3PXsxfVxyXG4gICAgICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuPXswfVxyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludHM9e3tcclxuICAgICAgICAgICAgICAgICAgNjQwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNDAsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA3LFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd2lwZXIyXCJcclxuICAgICAgICAgICAgICAvLyAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgLy8gICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzbGlkZXJ9XHJcbiAgICAgICAgICAgICAgICB7LyogPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVsxXS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgL3plbml0aC9pbWFnZXMvX0RTQzEzMDAuanBnYH0gYWx0PVwiXCIgLz48L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzJdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy8xSjRBNTAwOSAoMSkuanBnYH0gYWx0PVwiXCIgLz48L2Rpdj4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVszXS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgL3plbml0aC9pbWFnZXMvQ2FwdHVyZSBk4oCZw6ljcmFuIDIwMjItMTItMDMgw6AgMjEuMzMuMjkucG5nYH0gYWx0PVwiXCIgLz48L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzRdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy9JTUdfNzQ4Ny5qcGdgfSBhbHQ9XCJcIiAvPjwvZGl2PiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzVdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy9JTUdfMDAwNC5qcGdgfSBhbHQ9XCJcIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCIgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9IG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX0+PGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+PHAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgZGlzcGxheTogXCJub25lXCIsIHdpZHRoOiBcIjIwMHB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCIwcHhcIiwgdG9wOlwiMjAwcHhcIn19PntpdGVtLml0ZW1bNF0ubWlzc2lvbn08L3A+PC9kaXY+PGltZyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17YC96ZW5pdGgvaW1hZ2VzL0lNR185ODM4LmpwZ2B9IGFsdD1cIlwiIC8+PC9kaXY+ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCIgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9IG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX0+PGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+PHAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgZGlzcGxheTogXCJub25lXCIsIHdpZHRoOiBcIjIwMHB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCIwcHhcIiwgdG9wOlwiMjAwcHhcIn19PntpdGVtLml0ZW1bNV0ubWlzc2lvbn08L3A+PC9kaXY+PGltZyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17YC96ZW5pdGgvaW1hZ2VzL0RJQV8wNzU5LmpwZ2B9IGFsdD1cIlwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPiAqL31cclxuICAgICAgICAgICAgICA8L1N3aXBlcj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudHBhZ2U2XzU7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gXCJyZWFjdC1wYXJhbGxheFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlc2hlZXRzL2J1bG1hL2VsZW1lbnRzL2NvbnRhaW5lci5zYXNzXCJcclxuaW1wb3J0IExpZ2h0Ym94IGZyb20gXCJ5ZXQtYW5vdGhlci1yZWFjdC1saWdodGJveFwiO1xyXG5pbXBvcnQgVGh1bWJuYWlscyBmcm9tIFwieWV0LWFub3RoZXItcmVhY3QtbGlnaHRib3gvcGx1Z2lucy90aHVtYm5haWxzXCI7XHJcbmltcG9ydCBcInlldC1hbm90aGVyLXJlYWN0LWxpZ2h0Ym94L3BsdWdpbnMvdGh1bWJuYWlscy5jc3NcIjtcclxuaW1wb3J0IFwieWV0LWFub3RoZXItcmVhY3QtbGlnaHRib3gvc3R5bGVzLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gQ2xpZW50cGFnZUZpdmUoaW1hZ2VzKSB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGxldCBhcnJheUltYWdlID0gW11cclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW1hZ2VzLmltYWdlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuXHQgIGNvbnN0IGVsZW1lbnQgPSBpbWFnZXMuaW1hZ2VzW2luZGV4XTtcclxuXHQgIGlmKGVsZW1lbnQudmlzaWJsZSA9PSBmYWxzZSl7XHJcblx0XHRjb250aW51ZTtcclxuXHQgfVxyXG5cdCBsZXQgaXRlbSA9IHsgc3JjOiBgL2ltYWdlcy9pbWFnZWNsaWVudC8ke2VsZW1lbnQuaW1hZ2V9YH1cclxuXHQgYXJyYXlJbWFnZS5wdXNoKGl0ZW0pXHQgIFxyXG4gIH1cclxuXHJcblxyXG4gIGlmKGFycmF5SW1hZ2UubGVuZ3RoPjApe1xyXG4gICAgY29uc29sZS5sb2coXCJmaXJzdFwiKVxyXG4gICAgY29uc29sZS5sb2coYXJyYXlJbWFnZSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9aMXpJSkNLay5qcGVnXCIgc3RyZW5ndGg9ezgwMH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwiLCBkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCJ9fT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1jZW50ZXJlZFwiIHN0eWxlPXt7aGVpZ2h0OlwiOTAlXCIsd2lkdGg6XCI4MCVcIiwgcGFkZGluZ1RvcDpcIjUwcHhcIn19PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS10aGlyZFwiIHN0eWxlPXt7YmFja2dyb3VuZDpcIiMwMjExMURcIiwgcGFkZGluZzpcIjBcIiwgcGFkZGluZzpcIjBcIn19PlxyXG4gICAgICAgICAgICAgIHthcnJheUltYWdlWzBdID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzpcIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YXJyYXlJbWFnZVswXS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgd2lkdGg6XCIxMDAlXCIsIGhlaWdodDpcIjEwMCVcIn19PjxpbWcgc3R5bGU9e3t3aWR0aDpcIjUwJVwifX0gc3JjPXtcIi96ZW5pdGgvYXV0cmUvbm9JbWcucG5nXCJ9IGFsdD1cIlwiLz48L2Rpdj4pfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1vbmUtdGhpcmQgY29sdW1ucyBpcy1tdWx0aWxpbmUgbXgtNVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtZnVsbCBteS01XCIgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiIzAyMTExRFwiLCBwYWRkaW5nOlwiMFwifX0+ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge2FycmF5SW1hZ2VbMV0gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzpcIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2FycmF5SW1hZ2VbMV0uc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIHdpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT48aW1nIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19IHNyYz17XCIvemVuaXRoL2F1dHJlL25vSW1nLnBuZ1wifSBhbHQ9XCJcIi8+PC9kaXY+KX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLWZ1bGwgbXktNVwiIHN0eWxlPXt7YmFja2dyb3VuZDpcIiMwMjExMURcIiwgcGFkZGluZzpcIjBcIn19PiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge2FycmF5SW1hZ2VbMl0gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOlwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2FycmF5SW1hZ2VbMl0uc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIHdpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT48aW1nIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19IHNyYz17XCIvemVuaXRoL2F1dHJlL25vSW1nLnBuZ1wifSBhbHQ9XCJcIi8+PC9kaXY+KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtb25lLXRoaXJkIGlzLW1vYmlsZVwiIHN0eWxlPXt7YmFja2dyb3VuZDpcIiMwMjExMURcIiwgcGFkZGluZzpcIjBcIn19PlxyXG4gICAgICAgICAgICAgIHthcnJheUltYWdlWzNdID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXthcnJheUltYWdlWzNdLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6ICg8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCB3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiMTAwJVwifX0+PGltZyBzdHlsZT17e3dpZHRoOlwiNTAlXCJ9fSBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn0gYWx0PVwiXCIvPjwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tb2JpbGUgaXMtY2VudGVyZWQgbXQtNS1mdWxsaGRcIiBzdHlsZT17e3Bvc2l0aW9uOiBcImFic29sdXRlXCIsIGJvdHRvbTpcIjI1cHhcIiwgd2lkdGg6XCIxMDElXCJ9fT4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9IGNsYXNzTmFtZT1cImJ0blMgY2VudGVyIGxpZ2h0IGxldHRlclNwYWNpbmdNIG1iLTYgbXQtMFwiPlxyXG4gICAgICAgICAgICAgICAgRU4gVk9JUiArXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gIFxyXG4gICAgICAgICAgICA8TGlnaHRib3hcclxuICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgIGNsb3NlPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICBwbHVnaW5zPXtbVGh1bWJuYWlsc119XHJcbiAgICAgICAgICAgICAgc2xpZGVzPXthcnJheUltYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9QYXJhbGxheD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50cGFnZUZpdmU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBDbGllbnRwYWdlRm91cih7cHJlY2ksIGRhdGEyfSkge1xyXG5cdGNvbnNvbGUubG9nKHByZWNpKVxyXG5cdGlmKGRhdGEyLmVsZW1lbnRwcmVjaXNpb24pe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMvNld2ZW1tM0suanBlZylcIiwgaGVpZ2h0OiBcIjExMDBweFwifX0gY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlx0XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPScnc3R5bGU9e3sgaGVpZ2h0OiBcIjExMDBweFwifX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3dyYXBwZXIyJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXJDZW50ZXJBJz5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyZW50MjEgbWFyZ2luVG9wJz5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYXJnaW5Ub3AyJyA+XHJcblx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nbGlnaHQgbGV0dGVyU3BhY2luZ1MnPsOJTMOJTUVOVFMgREUgUFLDiUNJU0lPTjwvaDM+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xpZ2h0IGNvbnRhaW5lckNlbnRlckNsaWVudCB0ZXh0LWg1JyBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ319IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmRhdGEyLmVsZW1lbnRwcmVjaXNpb259fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nIGJveENsaWVudCcgc3R5bGU9e3toZWlnaHQ6ICc4MDBweCcsIHdpZHRoOlwiNjAwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHRcdHtwcmVjaS5pbWFnZSA/ICg8aW1nIGNsYXNzTmFtZT0nIGNvbnRhaW4nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtcIi9pbWFnZXMvaW1hZ2VjbGllbnQvXCIgKyBwcmVjaS5pbWFnZX0gYWx0PVwiXCIvPikgOiAoPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgd2lkdGg6XCIxMDAlXCIsIGhlaWdodDpcIjEwMCVcIn19PjxpbWcgc3R5bGU9e3t3aWR0aDpcIjUwJVwifX0gc3JjPXtcIi96ZW5pdGgvYXV0cmUvbm9JbWcucG5nXCJ9IGFsdD1cIlwiLz48L2Rpdj4pfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHRcdFxyXG5cclxuXHJcblxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH19XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50cGFnZUZvdXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIENsaWVudHBhZ2VPbmUoZGF0YSkge1xyXG5cdGNvbnNvbGUubG9nKGRhdGEpXHJcblx0QU9TLmluaXQoKVxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQxXCIgYWx0PVwiaG9tZXBhZ2VcIj5cclxuXHJcblx0XHRcdDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG5cdFx0XHRcdDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuXHRcdFx0XHQ8L3ZpZGVvPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHlCbHVlXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyMlwiPlxyXG5cdFx0XHRcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayB0bz1cIi9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL3plbml0aC9pbWFnZXMvYklPMXI5Ri5wbmdcIiBhbHQ9XCJMb2dvXCIgd2lkdGg9ezIwMH0gY2xhc3NOYW1lPVwiY2VudGVyXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHRcclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3t0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ319IGNsYXNzTmFtZT1cImNsaWVudHBhZ2VUZXh0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJtZWRpdW0gbWFyZ2luU3RvcCBjbGllbnREZXRhaWxcIj57ZGF0YS5kYXRhLm5vbUNsaWVudH08L2gxPlxyXG5cdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9XCJsaWdodCBtYXJnaW5TdG9wIGNsaWVudERldGFpbFwiPntkYXRhLmRhdGEuc2VjdGV1ci5zZWN0ZXVyfTwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0e2RhdGEuZGF0YS5kdXJlZSA/IDxwIGNsYXNzTmFtZT1cImxpZ2h0IGNsaWVudERldGFpbFwiPkRVUsOJRSBQUk9KRVQgOiB7ZGF0YS5kYXRhLmR1cmVlfTwvcD4gOiA8cCBjbGFzc05hbWU9XCJsaWdodCBjbGllbnREZXRhaWxcIj5EVVLDiUUgUFJPSkVUIDogTi9BPC9wPn1cclxuXHRcdFx0XHRcdFx0XHQ8TGluayBzdHlsZT17e3RleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwid2hpdGVcIn19IHRvPXtgL3NlYXJjaGNhdC9jbGllbnQvJHtkYXRhLmRhdGEuY2F0ZWdvcmllWzBdLmlkfS8ke2RhdGEuZGF0YS5jYXRlZ29yaWVbMF0uY2F0ZWdvcmllfWB9PjxwIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmVcIiwgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSd9fSBjbGFzc05hbWU9XCJsaWdodCBjbGllbnREZXRhaWwyXCI+e2RhdGEuZGF0YS5jYXRlZ29yaWVbMF0uY2F0ZWdvcmllfTwvcD48L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0e2RhdGEuZGF0YS5jYXRlZ29yaWVbMV0gJiY8PjxwIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmVcIn19IGNsYXNzTmFtZT1cImxpZ2h0IGNsaWVudERldGFpbDJcIj4gICB8ICAgPC9wPiA8TGluayBzdHlsZT17e3RleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwid2hpdGVcIn19dG89e2Avc2VhcmNoY2F0L2NsaWVudC8ke2RhdGEuZGF0YS5jYXRlZ29yaWVbMV0uaWR9LyR7ZGF0YS5kYXRhLmNhdGVnb3JpZVsxXS5jYXRlZ29yaWV9YH0gPjxwIGNsYXNzTmFtZT1cImxpZ2h0IGNsaWVudERldGFpbDJcIiBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lXCIsIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLCB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCJ9fT57ZGF0YS5kYXRhLmNhdGVnb3JpZVsxXS5jYXRlZ29yaWV9PC9wPjwvTGluaz48Lz59XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyM1wiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoNCBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ319IGNsYXNzTmFtZT1cImxpZ2h0IGxldHRlclNwYWNpbmdTICBkaXNjb3ZlckNsaWVudDJcIj57ZGF0YS5kYXRhLm1pc3Npb259PC9oND5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxpZ2h0ICBkaXNjb3ZlckNsaWVudFwiPkTDiUNPVVZSRVo8L3A+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaW5lQ2xpZW50XCIgPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRwYWdlT25lO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gQ2xpZW50cGFnZVNpeCh7ZGF0YSwgbnB9KSB7XHJcblx0QU9TLmluaXQoKVxyXG5cdGlmKG5wWzBdKXtcclxuXHRcdGlmKG5wWzBdWzBdID09ICdudWxsJylcclxuXHRcdFx0bnBbMF1bMF0gPSBmYWxzZTtcclxuXHRcdGlmKG5wWzBdWzFdID09ICdudWxsJylcclxuXHRcdFx0bnBbMV1bMF0gPSBmYWxzZTtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cclxuXHJcblxyXG5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy94OW5lczVWLmpwZylcIn19IGNsYXNzTmFtZT0nZGVtaWJsb2NDbGllbnQnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2RlbWlibG9jT3BhY2l0eSc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJlbnRDbGllbnROZXh0UHJldic+XHJcblxyXG5cdFx0XHRcdFx0XHRcdHtucFsxXVswXSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J0NsaWVudE5leHRQcmV2MScgb25DbGljaz17KCk9Pntsb2NhdGlvbi5ocmVmID0gXCIvY2xpZW50L1wiKyBucFsxXVswXS5pZH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPSdsaWdodCByaWdodFRleHQgbWFyZ2luVG9wUyc+UFJPSkVUIFBSw4lDw4lERU5UPC9oNj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT0ncmlnaHRUZXh0Jz57bnBbMV1bMF0ubm9tQ2xpZW50fTwvaDU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9J2xpZ2h0IHJpZ2h0VGV4dCc+e25wWzFdWzBdLm1pc3Npb259PC9oNj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2Pn1cclxuXHJcblx0XHRcdFx0XHRcdFx0e25wWzBdWzBdICYmIDxkaXYgY2xhc3NOYW1lPSdDbGllbnROZXh0UHJldjInIG9uQ2xpY2s9eygpPT57bG9jYXRpb24uaHJlZiA9IFwiL2NsaWVudC9cIisgbnBbMF1bMF0uaWR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT0nbGlnaHQgbGVmdFRleHQgbWFyZ2luVG9wUyc+UFJPSkVUIFNVSVZBTlQ8L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPSdsZWZ0VGV4dCc+e25wWzBdWzBdLm5vbUNsaWVudH08L2g1PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPSdsaWdodCBsZWZ0VGV4dCc+e25wWzBdWzBdLm1pc3Npb259PC9oNj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2Pn1cclxuXHRcdFx0XHRcdFx0XHR7LyogPGEgaHJlZj17XCIvY2xpZW50L1wiK25wWzFdWzBdLmlkfT4gKi99XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50cGFnZVNpeDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBDbGllbnRwYWdlVGhyZWUoZGF0YSkge1xyXG5cdGNvbnNvbGUubG9nKGRhdGEpXHJcblx0aWYoZGF0YS5kYXRhLmltYWdlICE9PSB1bmRlZmluZWQpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlckRhcmtCbHVlQ2xpZW50JyBzdHlsZT17e2hlaWdodDpcIjgwMHB4XCIsIHdpZHRoOlwiMTAwJVwifX0+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz17XCIvaW1hZ2VzL2ltYWdlY2xpZW50L1wiICsgZGF0YS5kYXRhLmltYWdlfSBhbHQ9XCJcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiB9XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50cGFnZVRocmVlOyIsIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG4vLyBpbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG4vLyBpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuLy8gaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcblxyXG4vLyBmdW5jdGlvbiBDbGllbnRwYWdlVHdvKGRhdGEpIHtcclxuLy8gXHRBT1MuaW5pdCgpXHJcbi8vIFx0aWYoZGF0YS5kYXRhLmVuamV1IHx8IGRhdGEuZGF0YS5oaXN0b2lyZSB8fCBkYXRhLmRhdGEucmVwb25zZSl7XHJcbi8vIFx0XHRyZXR1cm4gKFxyXG4vLyBcdFx0XHQ8PlxyXG4vLyBcdFx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPSdkZW1pYmxvY0NsaWVudCc+XHJcbi8vIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGVtaWJsb2NDbGllbnRPcGFjaXR5Jz5cclxuLy8gXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmVudENsaWVudCc+XHJcbi8vIFx0XHRcdFx0XHRcdFx0e2RhdGEuZGF0YS5lbmpldSAmJlxyXG4vLyBcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjbGllbnRHcmlkMSc+XHJcbi8vIFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdsaWdodCc+VU5FIEVOSkVVPC9oND5cclxuLy8gXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmRhdGEuZGF0YS5lbmpldX19PjwvZGl2PlxyXG4vLyBcdFx0XHRcdFx0XHRcdDwvZGl2PiBcclxuLy8gXHRcdFx0XHRcdFx0XHR9XHJcblxyXG4vLyBcdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuaGlzdG9pcmUgJiZcclxuLy8gXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2xpZW50R3JpZDInPlxyXG4vLyBcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nbGlnaHQnPlVORSBISVNUT0lSRTwvaDQ+XHJcbi8vIFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGlnaHQgY29udGFpbmVyQ2VudGVyQ2xpZW50JyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLmRhdGEuaGlzdG9pcmV9fT48L2Rpdj5cclxuLy8gXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuLy8gXHRcdFx0XHRcdFx0XHR9XHJcblxyXG4vLyBcdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEucmVwb25zZSAmJlxyXG4vLyBcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjbGllbnRHcmlkMyc+XHJcbi8vIFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdsaWdodCc+VU5FIFJFUE9OU0U8L2g0PlxyXG4vLyBcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xpZ2h0IGNvbnRhaW5lckNlbnRlckNsaWVudCcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YS5kYXRhLnJlcG9uc2V9fT48L2Rpdj5cclxuLy8gXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuLy8gXHRcdFx0XHRcdFx0XHR9XHJcblxyXG4vLyBcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuLy8gXHRcdFx0XHRcdDwvZGl2PlxyXG4vLyBcdFx0XHRcdDwvZGl2PlxyXG4vLyBcdFx0XHQ8Lz5cclxuLy8gXHRcdCk7XHJcbi8vIFx0fVxyXG4vLyB9XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gQ2xpZW50cGFnZVR3byhkYXRhKSB7XHJcbiBcdGlmKGRhdGEuZGF0YS5lbmpldSB8fCBkYXRhLmRhdGEuaGlzdG9pcmUgfHwgZGF0YS5kYXRhLnJlcG9uc2Upe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy82V3ZlbW0zSy5qcGVnKVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fSBjbGFzc05hbWU9J2RlbWlibG9jQ2xpZW50Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW5zJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbHVtbiBjb2x1bW5zIGlzLWNlbnRlcmVkIGlzLTEyJyBzdHlsZT17eyBtYXJnaW46XCIwXCIsIHBhZGRpbmc6XCIwXCJ9fT5cclxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLmVuamV1ICYmXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbHVtbiBpcy1jZW50ZXJlZCBpcy00JyBzdHlsZT17e21hcmdpblRvcDpcIjQ4cHhcIiwgbWFyZ2luUmlnaHQ6XCJhdXRvXCIsIG1hcmdpbkxlZnQ6XCJhdXRvXCJ9fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2xpZ2h0Jz5VTiBFTkpFVTwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fSBjbGFzc05hbWU9J2xpZ2h0IGNvbnRhaW5lckNlbnRlckNsaWVudCBweC02J2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmRhdGEuZGF0YS5lbmpldX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PiBcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuaGlzdG9pcmUgJiZcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGlzLWNlbnRlcmVkIGlzLTQnIHN0eWxlPXt7bWFyZ2luVG9wOlwiNDhweFwiLCBtYXJnaW5SaWdodDpcImF1dG9cIiwgbWFyZ2luTGVmdDpcImF1dG9cIn19PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nbGlnaHQnPlVORSBISVNUT0lSRTwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fSBjbGFzc05hbWU9J2xpZ2h0IGNvbnRhaW5lckNlbnRlckNsaWVudCBjb2x1bW5zIGlzLXZjZW50ZXJlZCBpcy1jZW50ZXJlZCBweC02JyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLmRhdGEuaGlzdG9pcmV9fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEucmVwb25zZSAmJlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gaXMtY2VudGVyZWQgaXMtNCcgIHN0eWxlPXt7bWFyZ2luVG9wOlwiNDhweFwiLCBtYXJnaW5SaWdodDpcImF1dG9cIiwgbWFyZ2luTGVmdDpcImF1dG9cIn19PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nbGlnaHQnPlVORSBSRVBPTlNFPC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19IGNsYXNzTmFtZT0nbGlnaHQgY29udGFpbmVyQ2VudGVyQ2xpZW50IGNvbHVtbnMgaXMtdmNlbnRlcmVkIGlzLWNlbnRlcmVkIHB4LTYnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmRhdGEuZGF0YS5yZXBvbnNlfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuXHR9XHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudHBhZ2VUd287XHJcbiIsImltcG9ydCBOYXZiYXIgZnJvbSAnLi4vX25hdmJhcic7XHJcbmltcG9ydCBSc0J1dHRvbiBmcm9tICcuLi9fcnNCdXR0b24nO1xyXG5pbXBvcnQgTGluZXNUb3AgZnJvbSAnLi4vX2xpbmVzVG9wJztcclxuaW1wb3J0IExpbmVzQm90dG9tIGZyb20gJy4uL19saW5lc0JvdHRvbSc7XHJcbmltcG9ydCBDb250YWN0UGFnZU9uZSBmcm9tICcuL19jb250YWN0cGFnZU9uZSc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcbmltcG9ydCBNaW5pRm9vdGVyIGZyb20gJy4uL0hvbWVwYWdlL19taW5pRm9vdGVyJztcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gQ29udGFjdFBhZ2UoKSB7XHJcblx0cmV0dXJuICggXHJcblx0XHQ8PlxyXG5cdFx0PE5hdmJhcj48L05hdmJhcj5cclxuXHRcdDxSc0J1dHRvbj48L1JzQnV0dG9uPlxyXG5cdFx0PExpbmVzVG9wPjwvTGluZXNUb3A+XHJcblx0XHQ8TGluZXNCb3R0b20+PC9MaW5lc0JvdHRvbT5cclxuXHRcdDxDb250YWN0UGFnZU9uZT48L0NvbnRhY3RQYWdlT25lPlxyXG5cdFx0PE1pbmlGb290ZXI+PC9NaW5pRm9vdGVyPlxyXG5cclxuXHRcdDwvPlxyXG5cdCApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0UGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcbmltcG9ydCB3aXRoUmVhY3RDb250ZW50IGZyb20gJ3N3ZWV0YWxlcnQyLXJlYWN0LWNvbnRlbnQnXHJcblxyXG5cclxuZnVuY3Rpb24gQ29udGFjdFBhZ2VPbmUoKSB7XHJcblx0Y29uc3QgTXlTd2FsID0gd2l0aFJlYWN0Q29udGVudChTd2FsKVxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRlbWFpbDogJycsXHJcblx0XHRuYW1lOiAnJyxcclxuXHRcdG1lc3NhZ2U6ICcnLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucGVyc2lzdCgpO1xyXG5cdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXHJcblx0XHRcdFxyXG5cdFx0fSk7XHJcblx0XHRjb25zb2xlLmxvZyh2YWx1ZXMuZW1haWwpXHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuXHRcdGUudGFyZ2V0LmNoaWxkcmVuWzNdLmRpc2FibGVkID0gdHJ1ZTtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdE15U3dhbC5maXJlKHtcclxuXHRcdFx0dGV4dDogJ1VuIG1haWwgZGUgY29uZmlybWF0aW9uIHZvdXMgYSDDqXTDqSBlbnZvecOpJyxcclxuXHRcdFx0dG9hc3Q6IHRydWUsXHJcblx0XHRcdGljb246ICdzdWNjZXNzJyxcclxuXHRcdFx0dGl0bGU6ICdCaWVuIHJlw6d1IScsXHJcblx0XHRcdHBvc2l0aW9uOiAndG9wLXJpZ2h0JyxcclxuXHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG5cdFx0XHR0aW1lcjogMzAwMCxcclxuXHRcdFx0dGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuXHRcdFx0ZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcblx0XHRcdCAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG5cdFx0XHQgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG5cdFx0XHR9XHJcblx0XHQgIH0pO1xyXG5cdFx0Y29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoeyBcImVtYWlsXCI6IHZhbHVlcy5lbWFpbCwgXCJuYW1lXCI6IHZhbHVlcy5uYW1lLCBcIm1lc3NhZ2VcIjogdmFsdWVzLm1lc3NhZ2UsIFwibmV3XCI6IHRydWUgfSksXHJcblx0XHR9O1xyXG5cdFx0Ly8gZmV0Y2goJy9zZW5kZW1haWwnLCByZXF1ZXN0T3B0aW9ucylcclxuXHRcdC8vIFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0ZmV0Y2goYC9zZW5kZW1haWxgLHttZXRob2Q6J1BPU1QnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXCJlbWFpbFwiOiB2YWx1ZXMuZW1haWwsIFwibmFtZVwiOiB2YWx1ZXMubmFtZSwgXCJtZXNzYWdlXCI6IHZhbHVlcy5tZXNzYWdlLCBcIm5ld1wiOiB0cnVlIH0pfSlcclxuXHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0LnRoZW4oXHJcblx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0XHR9XHJcblx0XHQpXHJcblx0fTtcclxuXHRBT1MuaW5pdCgpXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZDFcIiBhbHQ9XCJob21lcGFnZVwiPlxyXG5cclxuXHRcdFx0PHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eUJsdWVcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXIyXCI+XHJcblx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayB0bz1cIi9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvemVuaXRoL2ltYWdlcy9iSU8xcjlGLnBuZ1wiIGFsdD1cIkxvZ29cIiB3aWR0aD17MjAwfSBjbGFzc05hbWU9XCJjZW50ZXJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW5zIGlzLWNlbnRlcmVkJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXMtMyBjb2x1bW4gaXMtb2Zmc2V0LTRcIiBzdHlsZT17e21heEhlaWdoOlwiMTAwJVwifX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJtZWRpdW1cIj5Db250YWN0ZXogTm91czwvaDE+IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPVwibGlnaHRcIj5QcsOpc2VudGV6IHZvdHJlIHByb2pldCBldCBsYWlzc2V6LW5vdXMgdm9zXHJcblx0XHRcdFx0XHRcdFx0XHRcdGluZm9ybWF0aW9ucyBkZSBjb250YWN0LiBOb3VzIHJldmllbmRyb25zIHZlcnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0dm91cyBkYW5zIHVuIGTDqWxhaSBkZSAyNGguPC9oNj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpcy0yIGNvbHVtblwiPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiaXMtNyBjb2x1bW5cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtX19ncm91cCBmaWVsZCAgZGl2QzFcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImlucHV0XCIgY2xhc3NOYW1lPVwiZm9ybV9fZmllbGRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiBuYW1lPVwibmFtZVwiIGlkPSduYW1lJyB2YWx1ZT17dmFsdWVzLm5hbWV9b25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSByZXF1aXJlZD48L2lucHV0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxcIj5Wb3RyZSBub208L2xhYmVsPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX2dyb3VwMiBmaWVsZCBkaXZDMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaW5wdXRcIiBjbGFzc05hbWU9XCJmb3JtX19maWVsZFwiIHBsYWNlaG9sZGVyPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD0nZW1haWwnIHZhbHVlPXt2YWx1ZXMuZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gcmVxdWlyZWQgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImZvcm1fX2xhYmVsXCI+Vm90cmUgYWRyZXNzZSBlLW1haWw8L2xhYmVsPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHRhcmVhX19ncm91cCBmaWVsZCBkaXZDM1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSB0eXBlPVwiaW5wdXRcIiBjbGFzc05hbWU9XCJmb3JtX19maWVsZFwiIHBsYWNlaG9sZGVyPVwibWVzc2FnZVwiIG5hbWU9XCJtZXNzYWdlXCIgaWQ9J21lc3NhZ2UnIHZhbHVlPXt2YWx1ZXMubWVzc2FnZX0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSByZXF1aXJlZCAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxcIj5Wb3RyZSBiZXNvaW48L2xhYmVsPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3ttYXJnaW5Ub3A6XCI1MHB4XCJ9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1hcmdpbkJvdHRvbTIgYnRuUyBsaWdodCBsZXR0ZXJTcGFjaW5nTVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRFbnZveWVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiBcclxuLy9tb2RpZmllciBhIHBhcnRpciBkZSBsYSBsaWduZSBcclxuLy8gYWpvdXRlciA8Zm9ybT4gPGZpZWxkPiBldGNcclxuLy8gZnVuY3Rpb24gY29udGFjdCBwYWdlT25lIG5lIGZhaXQgcmllbiBuZSBkZWNsYXJlIHJpZW4gZXRjLi4gXHJcbi8vZGVpZmluaXIgdW4gZXRhdCBkIG9yaWdpbmUgcG91ciBsZXMgem9uZSBkZSB0ZXh0ZSBcclxuLy9ham91dGVyIHVuIGJ1dHRvbiBxdWFuZCBjbGlxdWUgcHJlbmQgbGVzIGluZm9ybWF0aW9uIGRhbnMgbGVzIGNoYW1wcyBcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFBhZ2VPbmU7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIEFjdGlvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIDxkaXZcclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwiIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiXHJcbiAgICAgICAgYWx0PVwiYWN0aW9uXCJcclxuICAgICAgPiAqL31cclxuICAgICAgey8qIDxQYXJhbGxheCBiZ0ltYWdlPVwiL3plbml0aC9pbWFnZXMvYVdFTGhrOEEuanBlZ1wiIHN0cmVuZ3RoPXswfT4gKi99XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiNTBweFwiLCBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL2FXRUxoazhBLmpwZWcpXCIsIGhlaWdodDpcImF1dG9cIiwgcGFkZGluZ0JvdHRvbTogXCIxcHhcIn19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlcjJcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyMlwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdHJlQSBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5TdG9wXCJcclxuICAgICAgICAgICAgICBpZD1cInBhdGNobmF6ZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBQ1RJT05cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImxpZ2h0IGxldHRlclNwYWNpbmdTIHNvdXNUaXRyZVwiPlxyXG4gICAgICAgICAgICAgIFNFIENPTkNFTlRSRVIgU1VSIEzigJlFU1NFTlRJRUwgOiBWT1VTXHJcbiAgICAgICAgICAgIDwvaDY+XHJcblxyXG4gICAgICAgICAgICA8U3dpcGVyIHNsaWRlc1BlclZpZXc9ezN9IHNwYWNlQmV0d2Vlbj17LTEwMH0gY2xhc3NOYW1lPVwic3dpcGVyXCI+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvamV0c1wiIGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3hDYXJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcclxuICAgICAgICAgICAgICAgICAgICAgIFwidXJsKC96ZW5pdGgvaW1hZ2VzL3BleGVscy1hbmRyZWEtcGlhY3F1YWRpby0zNzYwMDkzLmpwZylcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcEZpbHRlcjogXCJibHVyKDVweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dEFjdGlvbjEgbGV0dGVyU3BhY2luZ1MgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENPTlNFSUxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFDQ09NUEFHTkVNRU5UXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMzYwwrBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9wcm9qZXRzXCIgY2xhc3NOYW1lPVwidGV4dERlY29cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveENhcnJlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1cmwoL3plbml0aC9pbWFnZXMvQ09NTS5qcGcpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wRmlsdGVyOiBcImJsdXIoNXB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0QWN0aW9uMSBsZXR0ZXJTcGFjaW5nUyBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ09NTVVOSUNBVElPTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU09MVVRJT05cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTVVItTUVTVVJFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuXHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvamV0c1wiIGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3hDYXJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcclxuICAgICAgICAgICAgICAgICAgICAgIFwidXJsKC96ZW5pdGgvaW1hZ2VzL0VWRU5ULmpwZylcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcEZpbHRlcjogXCJibHVyKDVweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dEFjdGlvbjEgbGV0dGVyU3BhY2luZ1MgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVWRU5UXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBMSVZSQUlTT05cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDTMOJUyBFTiBNQUlOXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuXHJcbiAgICAgICAgICAgIDwvU3dpcGVyPlxyXG5cclxuICAgICAgICAgICAgPGg0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0cmVCIGxpZ2h0IGxldHRlclNwYWNpbmcgY29udGFpbmVyIGNlbnRlciBhY2Nyb2NoZVwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQUdJUiBFVCBSw4lBR0lSIEFWRUMgVk9VU1xyXG4gICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtkb2N1bWVudC5sb2NhdGlvbiA9IFwiL2NsaWVudHMvMVwifX0gY2xhc3NOYW1lPVwiYnRuUyBjZW50ZXIgbGlnaHQgbGV0dGVyU3BhY2luZ00gbWFyZ2luQm90dG9tMlwiPlxyXG4gICAgICAgICAgICAgIEVOIENPTVBSRU5EUkUgK1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgey8qIDwvUGFyYWxsYXg+ICovfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSBcInJlYWN0LXBhcmFsbGF4XCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBDaGlmZnJlcygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuXHQ8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL1oxeklKQ0trLmpwZWdcIiBzdHJlbmd0aD17NDAwfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIC8vIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCIgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJkZW1pYmxvY1wiXHJcbiAgICAgICAgYWx0PVwiY2hpZmZyZXNcIlxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmc2Lm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuICAgICAgICA8L3ZpZGVvPiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbWlibG9jMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmVudDJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjFcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZWRpdW0gY2hpZmZyZXNcIj4yMDE2PC9oMT5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJsaWdodCBjaGlmZnJlczJcIj5BTk7DiUUgREUgQ1JFQVRJT048L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2MlwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1lZGl1bSBjaGlmZnJlc1wiPiszMDA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImxpZ2h0IGNoaWZmcmVzMlwiPkNSw4lBVElPTlMgUEhPVE9TPC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjNcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZWRpdW0gY2hpZmZyZXNcIj4rMTYwPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJsaWdodCBjaGlmZnJlczJcIj5QUk9KRVRTIFLDiUFMSVPDiVM8L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2NFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1lZGl1bSBjaGlmZnJlc1wiPisxNTA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImxpZ2h0IGNoaWZmcmVzMlwiPlLDiUFMSVNBVElPTlMgVklEw4lPUzwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXY1XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWVkaXVtIGNoaWZmcmVzXCI+KzIwMDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibGlnaHQgY2hpZmZyZXMyXCI+Q1LDiUFUSU9OUyBESUdJVEFMRVMgPC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjZcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZWRpdW0gY2hpZmZyZXNcIj4xMDAlPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJsaWdodCBjaGlmZnJlczJcIj5NQURFIElOIEZSQU5DRTwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cdCAgPC9QYXJhbGxheD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoaWZmcmVzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gQ3JlYXRpb24oaXRlbSkge1xyXG4gIGxldCBzbGlkZXIgPSBbXVxyXG4gIGNvbnNvbGUubG9nKGl0ZW0pXHJcbiAgaWYoaXRlbS5pdGVtLmxlbmd0aCA+MCkge1xyXG4gICAgaXRlbS5pdGVtLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xyXG4gICAgICBsZXQgbmV3U2xpZGVyID0gdW5kZWZpbmVkXHJcbiAgICAgIGlmKGVsZW1lbnQuY3JlYXRpb24pe1xyXG4gICAgICAgICAgbmV3U2xpZGVyID0gKFxyXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtlbGVtZW50LmlkfSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj17YC9wcm9qZXQvJHtlbGVtZW50LmlkfWB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5taXNzaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy9pbWFnZXByb2pldC8ke2VsZW1lbnQuY3JlYXRpb259YH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgKTsgICAgICAgICAgICBcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBuZXdTbGlkZXIgPSAoXHJcbiAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2VsZW1lbnQuaWR9IGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPXtgL3Byb2pldC8ke2VsZW1lbnQuaWR9YH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9XHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzAyMTExRFwiLH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5taXNzaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb250YWluXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgKTsgICAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBzbGlkZXIucHVzaChuZXdTbGlkZXIpIFxyXG4gIH0pO1xyXG4gIH1lbHNle1xyXG4gICAgc2xpZGVyID0gKCA8aDEgY2xhc3NOYW1lPVwidGl0cmVBIG1lZGl1bSBsZXR0ZXJTcGFjaW5nIG1hcmdpblN0b3BcIj5yaWVuIGEgdm9pcjwvaDE+IClcclxuICB9XHJcbiAgZnVuY3Rpb24gQmx1ckRldGFpbChlKXtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cig0cHgpXCI7XHJcbiAgICBlLnRhcmdldC5jaGlsZHJlblswXS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIlxyXG4gIH1cclxuICBmdW5jdGlvbiBSZW1vdmVCbHVyRGV0YWlsKGUpe1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gXCJibHVyKDApXCI7XHJcbiAgICBlLnRhcmdldC5jaGlsZHJlblswXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy94OW5lczVWLmpwZylcIn19IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cclxuXHJcbiAgICAgICAgPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZzQubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+ICovfVxyXG4gICAgICB7LyogPEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50NFwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj48L0VsZW1lbnQ+ICovfVxyXG4gICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL1oxeklKQ0trLmpwZWdcIiBzdHJlbmd0aD17ODAwfT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3twYWRkaW5nVG9wOiAnNTBweCd9fT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBkYXRhLWFvcz1cInpvb20taW5cIlxyXG4gICAgICAgICAgZGF0YS1hb3MtbWlycm9yPVwiXCJcclxuICAgICAgICAgIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiXHJcbiAgICAgICAgICBkYXRhLWFvcy1hbmNob3ItcGxhY2VtZW50PVwiXCJcclxuICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyMlwiPlxyXG4gICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRyZUEgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ1LDiUFUSU9OXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxoNlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpZ2h0IGxldHRlclNwYWNpbmdTIHNvdXNUaXRyZVwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgVU5FIEhJU1RPSVJFLiBVTiBFTkpFVS4gVU5FIFLDiVBPTlNFLlxyXG4gICAgICAgICAgICA8L2g2PlxyXG5cclxuICAgICAgICAgICAgPFN3aXBlclxyXG4gICAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzUwMHB4J319XHJcbiAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldz17MX1cclxuICAgICAgICAgICAgICBjZW50ZXJlZFNsaWRlcz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuPXswfVxyXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnRzPXt7XHJcbiAgICAgICAgICAgICAgICA2NDA6IHtcclxuICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAxMDI0OiB7XHJcbiAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDcsXHJcbiAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd2lwZXIyXCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c2xpZGVyfVxyXG4gICAgICAgICAgICAgIHsvKiA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVsxXS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgL3plbml0aC9pbWFnZXMvX0RTQzEzMDAuanBnYH0gYWx0PVwiXCIgLz48L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzJdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy8xSjRBNTAwOSAoMSkuanBnYH0gYWx0PVwiXCIgLz48L2Rpdj4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVszXS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgL3plbml0aC9pbWFnZXMvQ2FwdHVyZSBk4oCZw6ljcmFuIDIwMjItMTItMDMgw6AgMjEuMzMuMjkucG5nYH0gYWx0PVwiXCIgLz48L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzRdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy9JTUdfNzQ4Ny5qcGdgfSBhbHQ9XCJcIiAvPjwvZGl2PiAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzVdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy9JTUdfMDAwNC5qcGdgfSBhbHQ9XCJcIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCIgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9IG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX0+PGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+PHAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgZGlzcGxheTogXCJub25lXCIsIHdpZHRoOiBcIjIwMHB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCIwcHhcIiwgdG9wOlwiMjAwcHhcIn19PntpdGVtLml0ZW1bNF0ubWlzc2lvbn08L3A+PC9kaXY+PGltZyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17YC96ZW5pdGgvaW1hZ2VzL0lNR185ODM4LmpwZ2B9IGFsdD1cIlwiIC8+PC9kaXY+ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCIgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9IG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX0+PGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+PHAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgZGlzcGxheTogXCJub25lXCIsIHdpZHRoOiBcIjIwMHB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCIwcHhcIiwgdG9wOlwiMjAwcHhcIn19PntpdGVtLml0ZW1bNV0ubWlzc2lvbn08L3A+PC9kaXY+PGltZyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17YC96ZW5pdGgvaW1hZ2VzL0RJQV8wNzU5LmpwZ2B9IGFsdD1cIlwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT4gKi99XHJcbiAgICAgICAgICAgIDwvU3dpcGVyPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5cclxuICAgICAgICAgICAgPGg0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0cmVCIGxpZ2h0IGxldHRlclNwYWNpbmcgY29udGFpbmVyIGNlbnRlciBhY2Nyb2NoZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBQUk9QVUxTRVIgTOKAmUlNQUdJTkFJUkUgUExVUyBMT0lOXHJcbiAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXJnaW5Cb3R0b20yIGJ0blMgY2VudGVyIGxpZ2h0IGxldHRlclNwYWNpbmdNXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2pldHMvMVwiIGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcbiAgICAgICAgICAgICAgICAgRMOJQ09VVlJJUiArPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGlvbjtcclxuXHJcbi8vIGNvbnN0IGl0ZW1zID0gWycnLCAnJywgJycsICcnLCAnJywgJycsJycsJycsJycsJycsJycsJycsXVxyXG4vLyBjb25zdCBzZXR0aW5nID0ge1xyXG4vLyAgIGRyYWdTcGVlZDogMC40LFxyXG4vLyAgIGl0ZW1XaWR0aDogMjAwLFxyXG4vLyAgIGl0ZW1IZWlnaHQ6IDQ2NCxcclxuLy8gICBpdGVtU2lkZU9mZnNldHM6IDQwLFxyXG4vLyB9XHJcbi8vIGNvbnN0IGl0ZW1TdHlsZSA9IHtcclxuLy8gICB3aWR0aDogYCR7c2V0dGluZy5pdGVtV2lkdGh9cHhgLFxyXG4vLyAgIGhlaWdodDogYCR7c2V0dGluZy5pdGVtSGVpZ2h0fXB4YCxcclxuLy8gICBtYXJnaW46IGAwcHggJHtzZXR0aW5nLml0ZW1TaWRlT2Zmc2V0c31weGBcclxuLy8gfVxyXG5cclxue1xyXG4gIC8qIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXJDJz5cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWwgX2RhdGE9e2l0ZW1zfSB7Li4uc2V0dGluZ30+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1zLm1hcCgoaSwgX2kpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e19pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpdGVtJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4uaXRlbVN0eWxlIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1wYXJhbGxheCc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBFbW90aW9uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCIgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCJcclxuICAgICAgICBhbHQ9XCLDqW1vdGlvblwiXHJcbiAgICAgID4gKi99XHJcbiAgICAgICAgey8qIDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcyLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuICAgICAgICA8L3ZpZGVvPiAqL31cclxuICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL1oxeklKQ0trLmpwZWdcIiBzdHJlbmd0aD17NDAwfT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17e3BhZGRpbmdUb3A6ICc1MHB4J319PlxyXG4gICAgICAgIDxkaXYgZGF0YS1hb3M9XCJ6b29tLWluXCIgZGF0YS1hb3MtbWlycm9yPVwidHJ1ZVwiZGF0YS1hb3Mtb25jZT1cImZhbHNlXCJkYXRhLWFvcy1hbmNob3ItcGxhY2VtZW50PVwidG9wLWNlbnRlclwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiPiAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyMiBcIj5cclxuICAgICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdHJlQSBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5TdG9wXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIMOJTU9USU9OXHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8aDZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpZ2h0IGxldHRlclNwYWNpbmdTIHNvdXNUaXRyZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBGQUlSRSBWSUJSRVIgTEEgQ09SREUgSU5WSVNJQkxFXHJcbiAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckZsZXggY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveFZpZGVvXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuXHRcdFx0XHRcdDxpZnJhbWUgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgb2JqZWN0Rml0OiAnY292ZXInfX0gc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvRTFURlpXYkIzNk1cIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgZnJhbWVCb3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxoNFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0cmVCIGxpZ2h0IGxldHRlclNwYWNpbmcgY29udGFpbmVyIGNlbnRlciBhY2Nyb2NoZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTVVNDSVRFUiBM4oCZRU1PVElPTiBFTiBVTiBJTlNUQU5UXHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT57ZG9jdW1lbnQubG9jYXRpb24gPSBcIi9jbGllbnQvMVwifX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcmdpbkJvdHRvbTIgYnRuUyBjZW50ZXIgbGlnaHQgbGV0dGVyU3BhY2luZ01cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEVOIFZPSVIgK1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9QYXJhbGxheD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtb3Rpb247XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcclxuaW1wb3J0IHdpdGhSZWFjdENvbnRlbnQgZnJvbSAnc3dlZXRhbGVydDItcmVhY3QtY29udGVudCdcclxuXHJcblxyXG5mdW5jdGlvbiBGb290ZXIoKSB7XHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdGVtYWlsOiAnJyxcclxuXHR9KTtcclxuXHRjb25zdCBNeVN3YWwgPSB3aXRoUmVhY3RDb250ZW50KFN3YWwpXHJcblxyXG5cdGNvbnN0IGhhbmRsZUVtYWlsSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnBlcnNpc3QoKTtcclxuXHRcdHNldFZhbHVlcygodmFsdWVzKSA9PiAoe1xyXG5cdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdGVtYWlsOiBldmVudC50YXJnZXQudmFsdWUsXHJcblx0XHRcdFxyXG5cdFx0fSkpO1xyXG5cdFx0Y29uc29sZS5sb2codmFsdWVzLmVtYWlsKVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlLnRhcmdldC5jaGlsZHJlblsxXS5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRNeVN3YWwuZmlyZShcclxuXHRcdFx0J01lcmNpIScsXHJcblx0XHRcdCdWb3RyZSBlbWFpbCDDoCBiaWVuIMOpdMOpIGVucmVnaXN0csOpJyxcclxuXHRcdFx0J3N1Y2Nlc3MnXHJcblx0XHQgIClcclxuXHRcdGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0aGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXCJlbWFpbFwiOiB2YWx1ZXMuZW1haWwsIFwibmV3XCI6IHRydWUgfSksXHJcblx0XHR9O1xyXG5cdFx0ZmV0Y2goJy9hcGkvZW1haWxzJywgcmVxdWVzdE9wdGlvbnMpXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHR9O1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0ICAgIHsvKiA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL254c1gwb0djLmpwZWdcIiBzdHJlbmd0aD17MH0+ICovfVxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL254c1gwb0djLmpwZWcpXCIsIGhlaWdodDpcImF1dG9cIiwgcGFkZGluZ0JvdHRvbTogXCIxcHhcIn19PlxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJmb290ZXJcIiBjbGFzc05hbWU9XCJkZW1pYmxvY0Zvb3RlclwiIGFsdD1cImZvb3RlclwiPlxyXG4gICAgICBcdFx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbWlibG9jMlwiID5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJlbXB0eVNcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGgyICBjbGFzc05hbWU9XCJ0aXRyZUUgbGlnaHQgbGV0dGVyU3BhY2luZyBtYXJnaW5TdG9wXCI+RVQgU0kgT04gU0UgTEFOw4dBSVQgPzwvaDI+XHJcblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuTCBjZW50ZXIgbGlnaHQgbGV0dGVyU3BhY2luZ01cIj5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayB0bz1cIi9jb250YWN0XCIgY2xhc3NOYW1lPVwidGV4dERlY29cIj5DT05UQUNUPC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cIiBsaWdodCBsZXR0ZXJTcGFjaW5nIGNvbnRhaW5lciBjZW50ZXJcIj5FTlNFTUJMRSwgw4lDUklWT05TIFZPVFJFIEhJU1RPSVJFPC9oND5cclxuXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8RWxlbWVudCBuYW1lPVwic2Nyb2xsLXRvLWVsZW1lbnQ5XCIgY2xhc3NOYW1lPVwiZWxlbWVudFwiPjwvRWxlbWVudD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbWlibG9jRm9vdGVyMlwiIGFsdD1cImZvb3RlclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1pYmxvYzJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYXJlbnQ0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkaXZDXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImNlbnRlciBtYi01XCIgc3JjPVwiL3plbml0aC9pbWFnZXMvd1gyTENJVC5wbmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjIyMFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSd1bDInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdsaTIgbXQtMyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPlpFTklUSDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+IFZBTCBE4oCZRVVST1BFIDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+SEVMTE9AQUdFTkNFWkVOSVRILkNPTTwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+MDYuMTEuODYuNjUuODA8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRpdkRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJ0aXRyZUQgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luQm90dG9tXCIgc3R5bGU9e3ttYXJnaW5Ub3A6XCIyMHB4XCJ9fT5SRUpPSUdORVogPGJyIC8+IEzigJlBVkVOVFVSRTwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJzMiBjZW50ZXJGbGV4IGNlbnRlclwiPlxyXG4gICAgICBcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJmYjJcIiBocmVmPSdodHRwczovL3d3dy5mYWNlYm9vay5jb20vQUdFTkNFWkVOSVRILyc+PC9hPlxyXG4gICAgICBcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJpbnN0YTJcIiBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2FnZW5jZXplbml0aC8/aGw9ZnInPjwvYT5cclxuICAgICAgXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibGlua2VkaW4yXCIgaHJlZj0naHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvYWdlbmNlLXplbml0aC8nPjwvYT5cclxuXHRcdFx0XHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwidGl0cmVEIG1lZGl1bSBsZXR0ZXJTcGFjaW5nIG1hcmdpbkJvdHRvbSBcIj4gTkVXU0xFVFRFUjwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dE1haWwgY2VudGVyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImVtYWlsXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPVwiZW1haWxcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT1cIjMwXCIgbmFtZT1cImVtYWlsXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZXMuZW1haWx9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVFbWFpbElucHV0Q2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZD48L2lucHV0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRpdkVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJ0aXRyZUMgbWVkaXVtIGxldHRlclNwYWNpbmdcIj5TSVRFIE1BUDwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSd1bDInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdsaTInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJmb290ZXJUZXh0IGxpZ2h0IHRleHQtaDVcIj5BQ0NVRUlMPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdsaTInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJmb290ZXJUZXh0IGxpZ2h0IHRleHQtaDVcIj5DTElFTlQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J2xpMic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPlBST0pFVFM8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J2xpMic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPkNPTlRBQ1Q8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsaWdodCBmb290ZXJDcmVkaXQgbGV0dGVyU3BhY2luZ1NcIj7CqSBBR0VOQ0UgWkVOSVRIIC8gVE9VUyBEUk9JVFMgUsOJU0VSVsOJUzwvcD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgXHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0ey8qIDwvUGFyYWxsYXg+ICovfVxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQU9TIGZyb20gXCJhb3NcIjtcclxuaW1wb3J0IFwiYW9zL2Rpc3QvYW9zLmNzc1wiO1xyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIEhvbWVwYWdlKCkge1xyXG4gIEFPUy5pbml0KCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8ZGl2ICBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCJ9fSBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCIgYWx0PVwiaG9tZXBhZ2VcIiA+ICovfVxyXG5cclxuICAgICAgPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZy5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcblx0XHRcdFx0PC92aWRlbz4gXHJcbiAgICAgIHsvKiA8UGFyYWxsYXggYmdJbWFnZT1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTAyMTM0MjQ5MTI2LTlmMzc1NWE1MGQ3OD9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTQ3MCZxPTgwXCIgc3RyZW5ndGg9ezQwMH0+ICovfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5Qmx1ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXIyXCJcclxuICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCI4MDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3plbml0aC9pbWFnZXMvYklPMXI5Ri5wbmdcIiBhbHQ9XCJMb2dvXCIgd2lkdGg9ezMzMH0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYnZpIGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbWlib2xkXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCI4MDBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aGluXCI+RkFJVEVTPC9zcGFuPiBCUklMTEVSe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aGluXCI+IFZPUyA8L3NwYW4+SUTDiUVTXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5lXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjgwMFwiXHJcbiAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDJcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+PC9FbGVtZW50PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDwvUGFyYWxsYXg+ICovfVxyXG4gICAgICB7LyogPC9kaXY+ICovfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZXBhZ2U7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzaGVldHMvYnVsbWEvaGVscGVycy9zcGFjaW5nLnNhc3NcIlxyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gSW5zdGFmbHV4KCkge2xldCBpbnN0YSA9IHVzZVJlZihudWxsKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgIHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vY2RuLmxpZ2h0d2lkZ2V0LmNvbS93aWRnZXRzL2xpZ2h0d2lkZ2V0LmpzXCJcclxuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcblxyXG4gIH0sIFtdKTtcclxuXHJcblxyXG5cclxuXHJcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xyXG4gIH1cclxuXHJcblxyXG5cdFx0cmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICB7LyogPGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCJ9fSBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCIgYWx0PVwiI2FnZW5jZXplbml0aFwiPlxyXG4gICAgICA8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuXHRcdFx0XHRcdDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnOC5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcblx0XHRcdFx0PC92aWRlbz4gKi99XHJcbiAgICAgICAgPFBhcmFsbGF4XHJcbiAgICAgICAgICBiZ0ltYWdlPVwiL3plbml0aC9pbWFnZXMvWjF6SUpDS2suanBlZ1wiXHJcbiAgICAgICAgICBzdHJlbmd0aD17NDAwfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgZGF0YS1hb3M9XCJ6b29tLWluXCJcclxuICAgICAgICAgICAgZGF0YS1hb3MtbWlycm9yPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zLWFuY2hvci1wbGFjZW1lbnQ9XCJ0b3AtY2VudGVyXCJcclxuICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCJcclxuICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAnNTBweCd9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIyXCI+XHJcbiAgICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRyZUEgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAjQUdFTkNFWkVOSVRIXHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgcmVmPXtpbnN0YX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlckZsZXhcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTpcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBwYWRkaW5nVG9wOlwiNTBweFwifX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGUxXCIgPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGUyXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTNcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXY+PHAgY2xhc3NOYW1lPVwiSU1BR0lORVJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5JTUFHSU5FUjwvcD48L2Rpdj5cclxuICAgICAgICAgIDxkaXY+PHAgY2xhc3NOYW1lPVwiQ1LDiUVSXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+Q1LDiUVSPC9wPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdj48cCBjbGFzc05hbWU9XCJSw4pWRVJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5Sw4pWRVI8L3A+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PjxwIGNsYXNzTmFtZT1cIkVOU0VNQkxFXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+RU5TRU1CTEU8L3A+PC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGU0XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTVcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlNlwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlN1wiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGU4XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTlcIj48L2Rpdj4gXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTEwXCI+PC9kaXY+IFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGUxMVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGUxMlwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGUxM1wiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGUxNFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGUxNVwiPjwvZGl2PiAgKi99XHJcbiAgICAgICAgICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi8vbGlnaHR3aWRnZXQuY29tL3dpZGdldHMvNTMwYzU5MGM2NmNmNWZmYTg0NGRlZDc1MWE2YTRjZDUuaHRtbFwiXHJcbiAgICAgICAgICAgICAgICAgIHNjcm9sbGluZz1cIm5vXCJcclxuICAgICAgICAgICAgICAgICAgYWxsb3d0cmFuc3BhcmVuY3k9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlnaHR3aWRnZXQtd2lkZ2V0XCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDpcIjcwJVwiLCBib3JkZXI6XCIwXCJ9fVxyXG4gICAgICAgICAgICAgICAgPjwvaWZyYW1lPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxoNFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6XCIxMDBweFwiLCBtYXJnaW5Cb3R0b206XCI2dmhcIn19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaWdodCBsZXR0ZXJTcGFjaW5nIGNvbnRhaW5lciBjZW50ZXIgbWFyZ2luVG9wWExcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgVU4gVU5JVkVSUyBERSBQT1NTSUJJTElURVNcclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuXHR9XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgSW5zdGFmbHV4OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcclxuaW1wb3J0IHdpdGhSZWFjdENvbnRlbnQgZnJvbSAnc3dlZXRhbGVydDItcmVhY3QtY29udGVudCdcclxuXHJcblxyXG5mdW5jdGlvbiBNaW5pRm9vdGVyKGxvYWRlZCkge1xyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRlbWFpbDogJycsXHJcblx0fSk7XHJcblx0Y29uc3QgTXlTd2FsID0gd2l0aFJlYWN0Q29udGVudChTd2FsKVxyXG5cclxuXHRjb25zdCBoYW5kbGVFbWFpbElucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wZXJzaXN0KCk7XHJcblx0XHRzZXRWYWx1ZXMoKHZhbHVlcykgPT4gKHtcclxuXHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRlbWFpbDogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG5cdFx0XHRcclxuXHRcdH0pKTtcclxuXHRcdGNvbnNvbGUubG9nKHZhbHVlcy5lbWFpbClcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZS50YXJnZXQuY2hpbGRyZW5bMV0uZGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0TXlTd2FsLmZpcmUoXHJcblx0XHRcdCdNZXJjaSEnLFxyXG5cdFx0XHQnVm90cmUgZW1haWwgw6AgYmllbiDDqXTDqSBlbnJlZ2lzdHLDqScsXHJcblx0XHRcdCdzdWNjZXNzJ1xyXG5cdFx0ICApXHJcblx0XHRjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7IFwiZW1haWxcIjogdmFsdWVzLmVtYWlsLCBcIm5ld1wiOiB0cnVlIH0pLFxyXG5cdFx0fTtcclxuXHRcdGZldGNoKCcvYXBpL2VtYWlscycsIHJlcXVlc3RPcHRpb25zKVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0fTtcclxuXHRpZihsb2FkZWQubG9hZGVkID09IHRydWUpe1xyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMvbnhzWDBvR2MuanBlZylcIn19IGNsYXNzTmFtZT1cImRlbWlibG9jRm9vdGVyMlwiIGFsdD1cImZvb3RlclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1pYmxvYzJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYXJlbnQ0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkaXZDXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImNlbnRlciBtYi01XCIgc3JjPVwiL3plbml0aC9pbWFnZXMvd1gyTENJVC5wbmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjIyMFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSd1bDInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdsaTIgbXQtMyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPlpFTklUSDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+IFZBTCBE4oCZRVVST1BFIDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+SEVMTE9AQUdFTkNFWkVOSVRILkNPTTwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+MDYuMTEuODYuNjUuODA8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRpdkRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJ0aXRyZUQgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luQm90dG9tXCIgc3R5bGU9e3ttYXJnaW5Ub3A6XCIyMHB4XCJ9fT5SRUpPSUdORVogPGJyIC8+IEzigJlBVkVOVFVSRTwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJzMiBjZW50ZXJGbGV4IGNlbnRlclwiPlxyXG4gICAgICBcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJmYjJcIiBocmVmPSdodHRwczovL3d3dy5mYWNlYm9vay5jb20vQUdFTkNFWkVOSVRILyc+PC9hPlxyXG4gICAgICBcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJpbnN0YTJcIiBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2FnZW5jZXplbml0aC8/aGw9ZnInPjwvYT5cclxuICAgICAgXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibGlua2VkaW4yXCIgaHJlZj0naHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvYWdlbmNlLXplbml0aC8nPjwvYT5cclxuXHRcdFx0XHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwidGl0cmVEIG1lZGl1bSBsZXR0ZXJTcGFjaW5nIG1hcmdpbkJvdHRvbSBcIj4gTkVXU0xFVFRFUjwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dE1haWwgY2VudGVyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImVtYWlsXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPVwiZW1haWxcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT1cIjMwXCIgbmFtZT1cImVtYWlsXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZXMuZW1haWx9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVFbWFpbElucHV0Q2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZD48L2lucHV0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRpdkVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJ0aXRyZUMgbWVkaXVtIGxldHRlclNwYWNpbmdcIj5TSVRFIE1BUDwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSd1bDInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdsaTInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+QUNDVUVJTDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiL2NsaWVudHMvMVwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPkNMSUVOVDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiL3Byb2pldHMvMVwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPlBST0pFVFM8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J2xpMic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIi9jb250YWN0XCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+Q09OVEFDVDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxpZ2h0IGZvb3RlckNyZWRpdCBsZXR0ZXJTcGFjaW5nU1wiPsKpIEFHRU5DRSBaRU5JVEggLyBUT1VTIERST0lUUyBSw4lTRVJWw4lTPC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICBcclxuXHJcblxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuXHR9XHJcblxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IE1pbmlGb290ZXI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1wYXJhbGxheCc7XHJcbmltcG9ydCB7IGEgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIFNhdGlzZmFjdGlvbigpIHtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIFxyXG5cdC8vIFJlbWFycXVlIDogbGUgdGFibGVhdSB2aWRlIGRlIGTDqXBlbmRhbmNlcyBbXSBpbmRpcXVlXHJcblx0Ly8gcXVlIHVzZUVmZmVjdCBuZSBz4oCZZXjDqWN1dGVyYSBxdeKAmXVuZSBmb2lzLCB1biBwZXUgY29tbWVcclxuXHQvLyBjb21wb25lbnREaWRNb3VudCgpXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKFwiL2dldFNhdGlzZmFjdGlvblwiKVxyXG5cdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHQudGhlbihcclxuXHRcdCAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICAgIHNldEl0ZW1zKHJlc3VsdCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuXHRcdCAgfSxcclxuXHRcdCAgLy8gUmVtYXJxdWUgOiBpbCBmYXV0IGfDqXJlciBsZXMgZXJyZXVycyBpY2kgcGx1dMO0dCBxdWUgZGFuc1xyXG5cdFx0ICAvLyB1biBibG9jIGNhdGNoKCkgYWZpbiBxdWUgbm91cyBu4oCZYXZhbGlvbnMgcGFzIGxlcyBleGNlcHRpb25zXHJcblx0XHQgIC8vIGR1ZXMgw6AgZGUgdsOpcml0YWJsZXMgYnVncyBkYW5zIGxlcyBjb21wb3NhbnRzLlxyXG5cdFx0ICAoZXJyb3IpID0+IHtcclxuXHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdCAgfVxyXG5cdFx0KVxyXG5cdH0sIFtdKVxyXG4gIFxyXG5cdGlmIChlcnJvcikge1xyXG5cdCAgcmV0dXJuIDxkaXY+RXJyZXVyIDoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG5cdH0gZWxzZSBpZiAoIWlzTG9hZGVkKSB7XHJcblx0ICByZXR1cm4gPGRpdj5DaGFyZ2VtZW50Li4uPC9kaXY+O1xyXG5cdH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZyhpdGVtcyk7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG4gICAgICB7LyogPGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCJ9fSBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XHJcblxyXG4gICAgICA8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuXHRcdFx0XHRcdDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnNS5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcblx0XHRcdFx0PC92aWRlbz4gKi99XHJcbiAgICAgIHsvKiA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL2FXRUxoazhBLmpwZWdcIiBzdHJlbmd0aD17MH0+ICovfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17e3BhZGRpbmdUb3A6ICc1MHB4JywgYmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy9hV0VMaGs4QS5qcGVnKVwiLCBoZWlnaHQ6XCJhdXRvXCIsIHBhZGRpbmdCb3R0b206IFwiMXB4XCJ9fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlcjJcIj5cclxuXHJcblxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdHJlQSBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5TdG9wXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+U0FUSVNGQUNUSU9OPC9oMT5cclxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0aXRyZUNlbnRlciBsaWdodCBsZXR0ZXJTcGFjaW5nU1wiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPsOKVFJFIMOAIFZPUyBDw5RUw4lTLCBD4oCZRVNUIEFWQU5UIFRPVVQgREVTIFJFTkNPTlRSRVMuPC9oNj5cclxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0aXRyZUNlbnRlciBsaWdodCBsZXR0ZXJTcGFjaW5nUyBwYWRkaW5nQm90dG9tXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+REVTIEhJU1RPSVJFUyBIVU1BSU5FUywgRVhDRVBUSU9OTkVMTEVTLCBPUklHSU5BTEVTLjwvaDY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyTWF4IGNlbnRlclwiPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1swXVswXS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4OHB4XCJ9fSBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMF1bMF0ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1swXVsxXS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMF1bMV0ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1swXVsyXS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMF1bMl0ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1swXVszXS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMF1bM10ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1swXVs0XS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMF1bNF0ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1swXVs1XS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMF1bNV0ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1swXVs2XS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMF1bNl0ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1swXVs3XS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMF1bN10ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1swXVs4XS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMF1bOF0ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1swXVs5XS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBzdHlsZT17e21hcmdpblJpZ2h0OlwiODhweFwifX0gY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17YC9pbWFnZXMvbG9nb2NsaWVudC8ke2l0ZW1zWzBdWzldLmxvZ299YH0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PjwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyTWF4IGNlbnRlclwiPlxyXG4gICAgICAgICAgIDxhIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXtgL2NsaWVudC8ke2l0ZW1zWzFdWzE5XS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjYwMFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjg4cHhcIn19IGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e2AvaW1hZ2VzL2xvZ29jbGllbnQvJHtpdGVtc1sxXVsxOV0ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1sxXVswXS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjYwMFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e2AvaW1hZ2VzL2xvZ29jbGllbnQvJHtpdGVtc1sxXVswXS5sb2dvfWB9IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj48L2E+XHJcbiAgICAgICAgICAgIDxhIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXtgL2NsaWVudC8ke2l0ZW1zWzFdWzFdLmlkfWB9ID48ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiNjAwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17YC9pbWFnZXMvbG9nb2NsaWVudC8ke2l0ZW1zWzFdWzFdLmxvZ299YH0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PjwvYT5cclxuICAgICAgICAgICAgPGEgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9e2AvY2xpZW50LyR7aXRlbXNbMV1bMl0uaWR9YH0gPjxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCI2MDBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMV1bMl0ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1sxXVszXS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjYwMFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e2AvaW1hZ2VzL2xvZ29jbGllbnQvJHtpdGVtc1sxXVszXS5sb2dvfWB9IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj48L2E+XHJcbiAgICAgICAgICAgIDxhIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXtgL2NsaWVudC8ke2l0ZW1zWzFdWzRdLmlkfWB9ID48ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiNjAwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17YC9pbWFnZXMvbG9nb2NsaWVudC8ke2l0ZW1zWzFdWzRdLmxvZ299YH0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PjwvYT5cclxuICAgICAgICAgICAgPGEgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9e2AvY2xpZW50LyR7aXRlbXNbMV1bNV0uaWR9YH0gPjxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCI2MDBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMV1bNV0ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1sxXVs2XS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjYwMFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e2AvaW1hZ2VzL2xvZ29jbGllbnQvJHtpdGVtc1sxXVs2XS5sb2dvfWB9IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj48L2E+XHJcbiAgICAgICAgICAgIDxhIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXtgL2NsaWVudC8ke2l0ZW1zWzFdWzddLmlkfWB9ID48ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiNjAwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17YC9pbWFnZXMvbG9nb2NsaWVudC8ke2l0ZW1zWzFdWzddLmxvZ299YH0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PjwvYT5cclxuICAgICAgICAgICAgPGEgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9e2AvY2xpZW50LyR7aXRlbXNbMV1bOF0uaWR9YH0gPjxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCI2MDBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBzdHlsZT17e21hcmdpblJpZ2h0OlwiODhweFwifX0gY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17YC9pbWFnZXMvbG9nb2NsaWVudC8ke2l0ZW1zWzFdWzhdLmxvZ299YH0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PjwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyTWF4IGNlbnRlclwiPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1sxXVs5XS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjEyMDBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4OHB4XCJ9fSBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMF1bOV0ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1sxXVsxMF0uaWR9YH0gPjxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCIxMjAwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17YC9pbWFnZXMvbG9nb2NsaWVudC8ke2l0ZW1zWzFdWzEwXS5sb2dvfWB9IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj48L2E+XHJcbiAgICAgICAgICAgIDxhIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXtgL2NsaWVudC8ke2l0ZW1zWzFdWzExXS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjEyMDBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMV1bMTFdLmxvZ299YH0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PjwvYT5cclxuICAgICAgICAgICAgPGEgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9e2AvY2xpZW50LyR7aXRlbXNbMV1bMTJdLmlkfWB9ID48ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiMTIwMFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e2AvaW1hZ2VzL2xvZ29jbGllbnQvJHtpdGVtc1sxXVsxMl0ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1sxXVsxM10uaWR9YH0gPjxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCIxMjAwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17YC9pbWFnZXMvbG9nb2NsaWVudC8ke2l0ZW1zWzFdWzEzXS5sb2dvfWB9IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj48L2E+XHJcbiAgICAgICAgICAgIDxhIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXtgL2NsaWVudC8ke2l0ZW1zWzFdWzE0XS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjEyMDBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMV1bMTRdLmxvZ299YH0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PjwvYT5cclxuICAgICAgICAgICAgPGEgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9e2AvY2xpZW50LyR7aXRlbXNbMV1bMTVdLmlkfWB9ID48ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiMTIwMFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e2AvaW1hZ2VzL2xvZ29jbGllbnQvJHtpdGVtc1sxXVsxNV0ubG9nb31gfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8YSByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jbGllbnQvJHtpdGVtc1sxXVsxNl0uaWR9YH0gPjxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCIxMjAwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17YC9pbWFnZXMvbG9nb2NsaWVudC8ke2l0ZW1zWzFdWzE2XS5sb2dvfWB9IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj48L2E+XHJcbiAgICAgICAgICAgIDxhIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXtgL2NsaWVudC8ke2l0ZW1zWzFdWzE3XS5pZH1gfSA+PGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjEyMDBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMV1bMTddLmxvZ299YH0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PjwvYT5cclxuICAgICAgICAgICAgPGEgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9e2AvY2xpZW50LyR7aXRlbXNbMV1bMThdLmlkfWB9ID48ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiMTIwMFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6XCI4OHB4XCJ9fSBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtgL2ltYWdlcy9sb2dvY2xpZW50LyR7aXRlbXNbMV1bMThdLmxvZ299YH0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PjwvYT5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdHJlQiBsaWdodCBsZXR0ZXJTcGFjaW5nIGNvbnRhaW5lciBjZW50ZXIgYWNjcm9jaGUgbWFyZ2luQm90dG9tMlwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiNnZoXCJ9fSBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5MRSBSRVNURSBPTiBM4oCZw4lDUklSQSBFTlNFTUJMRTwvaDQ+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPC9QYXJhbGxheD4gKi99XHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgU2F0aXNmYWN0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2Fycm93LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBWaXNpb24oKSAge1xyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblxyXG4gICAgICB7LyogPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZzYubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+ICovfVxyXG4gICAgICB7LyogPGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCJ9fSBjbGFzc05hbWU9J2JhY2tncm91bmQnPiAqL31cclxuXHJcbiAgICAgIHsvKiA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL2FXRUxoazhBLmpwZWdcIiBzdHJlbmd0aD17MH0+ICovfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17e3BhZGRpbmdUb3A6ICc1MHB4JywgYmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy9hV0VMaGs4QS5qcGVnKVwiLCBoZWlnaHQ6XCJhdXRvXCIsIHBhZGRpbmdCb3R0b206IFwiMXB4XCJ9fT5cclxuICAgICAgPGRpdiBkYXRhLWFvcz1cInpvb20taW5cIiBkYXRhLWFvcy1taXJyb3I9XCJ0cnVlXCJkYXRhLWFvcy1vbmNlPVwiZmFsc2VcImRhdGEtYW9zLWFuY2hvci1wbGFjZW1lbnQ9XCJ0b3AtY2VudGVyXCJkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIiBzdHlsZT17e2hlaWdodDpcIjg1MHB4XCJ9fT5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRyZUEgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPlZJU0lPTjwvaDE+XHJcbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibGlnaHQgbGV0dGVyU3BhY2luZ1Mgc291c1RpdHJlXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+VU5FIFJFTkNPTlRSRSBRVUkgQ0hBTkdFIFRPVVQ8L2g2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyXCI+XHJcbiAgICAgICAgICAgIDxTd2lwZXJcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldz17MX1cclxuICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM9e3RydWV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3aXBlcjNcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcl9fY29udGVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJlbnQzXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXNpb25Cb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBvYmplY3RGaXQ6ICdjb3Zlcid9fXNyYz1cImh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvYmI1ZTNiX2ExMDUyMzliZmQxODQ4YjQ4OTI5MzlkODc5OGNkNjU3fm12Mi5qcGcvdjEvY3JvcC94XzEwOSx5XzAsd183MzQsaF85MDAvZmlsbC93XzI3MCxoXzM0OCxhbF9jLHFfODAsdXNtXzEuMjBfMS4wMF8wLjAxLGVuY19hdXRvL2JiNWUzYl9hMTA1MjM5YmZkMTg0OGI0ODkyOTM5ZDg3OThjZDY1N35tdjIuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ2aXNpb25UZXh0MiBtZWRpdW1cIj5NQVRISVM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkNPTlNFSUw8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5Ow4lHT0NJQVRJT048L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj7DiVbDiU5FTUVOVElFTDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkdFU1RJT04gREUgUFJPSkVUPC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+RElSRUNUSU9OIEFSVElTVElRVUU8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5ESVJFQ1RJT04gRCdFWFBMT0lUQVRJT048L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkTDiVZFTE9QUEVNRU5UIENPTU1FUkNJQUwgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwiYXJyb3dcIiBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgdG9wOlwiODUlXCIsIGxlZnQ6XCI3NSVcIiwgd2lkdGg6XCIzOHB4XCJ9fSBzcmM9XCIvemVuaXRoL2ltYWdlcy9OaWNlUG5nX2Fycm93LWJvcmRlci1wbmdfMzQ1NDQ5MHcucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcl9fY29udGVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJlbnQzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJhcnJvdzJcIiBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgdG9wOlwiODUlXCIsIGxlZnQ6XCIwJVwiLCB3aWR0aDpcIjM4cHhcIn19IHNyYz1cIi96ZW5pdGgvaW1hZ2VzL05pY2VQbmdfYXJyb3ctYm9yZGVyLXBuZ18zNDU0NDkwdy5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXNpb25Cb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBvYmplY3RGaXQ6ICdjb3Zlcid9fXNyYz1cImh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvOTRiMjU1Xzc0ODg1ZDM3NGNmODQyMTQ4OTljOWRmNjBkNjUzNjM4fm12Mi5qcGcvdjEvZmlsbC93XzI4NCxoXzM3MSxhbF9jLHFfODAsdXNtXzEuMjBfMS4wMF8wLjAxLGVuY19hdXRvL0FWQVRBUiUyMFJPTiUyMEIuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ2aXNpb25UZXh0MiBtZWRpdW1cIj5ST048L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkNPTlNFSUw8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5Ow4lHT0NJQVRJT048L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj7DiVbDiU5FTUVOVElFTDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkdFU1RJT04gREUgUFJPSkVUPC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+RElSRUNUSU9OIEFSVElTVElRVUU8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5ESVJFQ1RJT04gRCdFWFBMT0lUQVRJT048L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkTDiVZFTE9QUEVNRU5UIENPTU1FUkNJQUwgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICA8L1N3aXBlcj5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIHsvKiA8L1BhcmFsbGF4PiAqL31cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgVmlzaW9uOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQgTWFycXVlZSBmcm9tIFwicmVhY3QtZmFzdC1tYXJxdWVlXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tIFwicmVhY3QtcGFyYWxsYXhcIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzaGVldHMvYnVsbWEvaGVscGVycy9zcGFjaW5nLnNhc3NcIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCI7XHJcblxyXG5jb25zdCBXb3JkcGFnZSA9ICh7fSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy82V3ZlbW0zSy5qcGVnXCIgc3RyZW5ndGg9ezB9PiAqL31cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzLzZXdmVtbTNLLmpwZWcpXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiNTcwcHhcIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImRlbWlibG9jXCJcclxuICAgICAgICBhbHQ9XCJ3b3JkcGFnZVwiXHJcbiAgICAgID5cclxuICAgICAgICB7LyogPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+ICovfVxyXG4gICAgICAgIHsvKiA8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZzQubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPiAqL31cclxuICAgICAgICB7LyogPC92aWRlbz4gKi99XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgYWx0PVwiTGlzdGUgZGUgbW90c1wiIHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBkYXRhLWFvcz1cInpvb20taW5cIlxyXG4gICAgICAgICAgICBkYXRhLWFvcy1taXJyb3I9XCJ0cnVlXCJcclxuICAgICAgICAgICAgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCJcclxuICAgICAgICAgICAgZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudD1cInRvcC1jZW50ZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmVudFwiPlxyXG4gICAgICAgICAgICAgIDxNYXJxdWVlXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE3MHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgZ3JhZGllbnQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3b3JkcGFnZSBsZXR0ZXJTcGFjaW5nIGxpZ2h0IGdyaWQxIHB4LTZcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIndvcmRwYWdlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgUsOJQUNUSVZJVMOJXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1hcmdpbiBtZWRpdW0gd29yZHBhZ2VUZXh0IGdyaWQyIHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2UgbGV0dGVyU3BhY2luZyBvdXRsaW5lIG5vcm1hbCBncmlkMyBweC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIFBST1hJTUlUw4lcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIG1hcmdpbiBtZWRpdW0gd29yZHBhZ2VUZXh0IG91dGxpbmUgZ3JpZDQgcHItNVwiPsK3PC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3b3JkcGFnZSBsaWdodCBsZXR0ZXJTcGFjaW5nIGdyaWQ1IHB4LTZcIj5QQVNTSU9OPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0ICBtZWRpdW0gZ3JpZDYgcHItNVwiPsK3PC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3b3JkcGFnZSBub3JtYWwgb3V0bGluZSBsZXR0ZXJTcGFjaW5nIGdyaWQ3IHB4LTZcIj5cclxuICAgICAgICAgICAgICAgICAgU1RSQVTDiUdJRVxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG91dGxpbmUgbWVkaXVtIGdyaWQ2IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgPC9NYXJxdWVlPlxyXG4gICAgICAgICAgICAgIDxNYXJxdWVlXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE3MHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPXtcInJpZ2h0XCJ9XHJcbiAgICAgICAgICAgICAgICBncmFkaWVudD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndvcmRwYWdlIG5vcm1hbCBsZXR0ZXJTcGFjaW5nIGdyaWQ5IHB4LTZcIj5FVkVOVDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBtZWRpdW0gZ3JpZDEwIHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2UgbWFycm9uIG5vcm1hbCBsZXR0ZXJTcGFjaW5nIGdyaWQxMSBweC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIFpFTklUSFxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG91dGxpbmUgbWVkaXVtIGdyaWQxMiBwci01XCI+wrc8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndvcmRwYWdlIG5vcm1hbCBsZXR0ZXJTcGFjaW5nIGdyaWQxMyBweC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIENPTlNFSUxcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBtZWRpdW0gZ3JpZDE0IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2Ugbm9ybWFsIGxldHRlclNwYWNpbmcgZ3JpZDE1IHB4LTZcIj5cclxuICAgICAgICAgICAgICAgICAgQ09NTVVOSUNBVElPTlxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG91dGxpbmUgbWVkaXVtIGdyaWQ2IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgPC9NYXJxdWVlPlxyXG4gICAgICAgICAgICAgIDxNYXJxdWVlXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE3MHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgZ3JhZGllbnQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3b3JkcGFnZSBtZWRpdW0gbGV0dGVyU3BhY2luZyBncmlkMTcgcHgtNlwiPlxyXG4gICAgICAgICAgICAgICAgICBDUsOJQVRJVklUw4lcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBtZWRpdW0gZ3JpZDE4IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2UgbGlnaHQgb3V0bGluZSBsZXR0ZXJTcGFjaW5nIGdyaWQxOSBweC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIFLDilZFUlxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG91dGxpbmUgbWVkaXVtIGdyaWQyMCBwci01XCI+wrc8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndvcmRwYWdlIGxpZ2h0IGxldHRlclNwYWNpbmcgZ3JpZDIxIHB4LTZcIj5cclxuICAgICAgICAgICAgICAgICAgQU1CSVRJT05cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBtZWRpdW0gZ3JpZDIyIHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2Ugb3V0bGluZSBub3JtYWwgbGV0dGVyU3BhY2luZyBncmlkMjMgcHgtNlwiPlxyXG4gICAgICAgICAgICAgICAgICBJTUFHSU5BVElPTlxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG91dGxpbmUgbWVkaXVtIGdyaWQ2IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgPC9NYXJxdWVlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDwvUGFyYWxsYXg+ICovfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmRwYWdlO1xyXG4iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL19uYXZiYXInO1xyXG5pbXBvcnQgUHJvamVjdFBhZ2VPbmUgZnJvbSBcIi4vX3Byb2plY3RwYWdlT25lXCI7XHJcbmltcG9ydCBQcm9qZWN0cGFnZVR3byBmcm9tICcuL19wcm9qZWN0cGFnZVR3byc7XHJcbmltcG9ydCBQcm9qZWN0cGFnZVRocmVlIGZyb20gJy4vX3Byb2plY3RwYWdlVGhyZWUnO1xyXG5pbXBvcnQgUHJvamVjdHBhZ2VGb3VyIGZyb20gJy4vX3Byb2plY3RwYWdlRm91cic7XHJcbmltcG9ydCBQcm9qZWN0cGFnZUZpdmUgZnJvbSAnLi9fcHJvamVjdHBhZ2VGaXZlJztcclxuaW1wb3J0IFByb2plY3RwYWdlU2l4IGZyb20gJy4vX3Byb2plY3RwYWdlU2l4JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNaW5pRm9vdGVyIGZyb20gJy4uL0hvbWVwYWdlL19taW5pRm9vdGVyJztcclxuXHJcbmZ1bmN0aW9uIFByb2plY3RwYWdlKCkge1xyXG5cdGZ1bmN0aW9uIGZhZGVPdXQoIGVsZW0sIG1zIClcclxuXHR7XHJcblx0aWYoICEgZWxlbSApXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdGlmKCBtcyApXHJcblx0e1xyXG5cdFx0dmFyIG9wYWNpdHkgPSAxO1xyXG5cdFx0dmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwoIGZ1bmN0aW9uKCkge1xyXG5cdFx0b3BhY2l0eSAtPSA1MCAvIG1zO1xyXG5cdFx0aWYoIG9wYWNpdHkgPD0gMCApXHJcblx0XHR7XHJcblx0XHRcdGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG5cdFx0XHRvcGFjaXR5ID0gMDtcclxuXHRcdFx0ZWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRcdGVsZW0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcblx0XHR9XHJcblx0XHRlbGVtLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG5cdFx0ZWxlbS5zdHlsZS5maWx0ZXIgPSBcImFscGhhKG9wYWNpdHk9XCIgKyBvcGFjaXR5ICogMTAwICsgXCIpXCI7XHJcblx0XHR9LCA1MCApO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0ZWxlbS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuXHRcdGVsZW0uc3R5bGUuZmlsdGVyID0gXCJhbHBoYShvcGFjaXR5PTApXCI7XHJcblx0XHRlbGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdGVsZW0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcblx0fVxyXG5cdH1cclxuXHRjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZEltZywgc2V0SXNMb2FkZWRJbWddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZE5leHRQcmV2LCBzZXRJc0xvYWRlZE5leHRQcmV2XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNJbWdSZWFkeSwgc2V0SW1nUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbcHJlY2ksIHNldFByZWNpXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbc2Vjb25kLCBzZXRTZWNvbmRdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbTmV4dFByZXYsIHNldE5leHRQcmV2XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRpZihpZCl7XHJcblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0XHRmZXRjaChgL2FwaS9wcm9qZXRzLyR7aWR9YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRJdGVtcyhyZXN1bHQpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cclxuXHRcdFx0ZmV0Y2goYC9nZXRJbWFnZXNQcm9qZXQvJHtpZH1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdGltZykgPT4ge1xyXG5cdFx0XHRcdGxldCB0aGlzUmVzID0gSlNPTi5wYXJzZShyZXN1bHRpbWcpXHJcblx0XHRcdFx0c2V0SXNMb2FkZWRJbWcodHJ1ZSk7XHJcblx0XHRcdFx0c2V0SW1hZ2VzKEpTT04ucGFyc2UocmVzdWx0aW1nKSk7XHJcblx0XHRcdFx0aWYoIHRoaXNSZXMgPT0gXCJbXVwiIHx8IHRoaXNSZXMubGVuZ3RoID09IDApe1xyXG5cdFx0XHRcdFx0c2V0SW1nUmVhZHkodHJ1ZSlcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZih0aGlzUmVzKXtcclxuXHRcdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzUmVzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpc1Jlc1tpXSlcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coaSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlc1tpXS5oZWFkZXIpXHJcblx0XHRcdFx0XHRcdFx0c2V0SGVhZGVyKHRoaXNSZXNbaV0pXHJcblx0XHRcdFx0XHRcdGlmKHRoaXNSZXNbaV0uZm9jdXMpXHJcblx0XHRcdFx0XHRcdFx0c2V0UHJlY2kodGhpc1Jlc1tpXSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlc1tpXS5zZWNvbmRhaXJlKVxyXG5cdFx0XHRcdFx0XHRcdHNldFNlY29uZCh0aGlzUmVzW2ldKVxyXG5cdFx0XHRcdFx0XHQvLyBpZihpbWFnZXNbaV0udmlzaWJsZSlcclxuXHRcdFx0XHRcdFx0Ly8gXHRzZXREaXNwbGF5KC4uLmltYWdlc1tpXSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlcy5sZW5ndGgtMSA9PSBpKXtcclxuXHRcdFx0XHRcdFx0XHRzZXRJbWdSZWFkeSh0cnVlKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHJcblx0XHRcdGZldGNoKGAvTmV4UHJldlAvJHtpZH1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdGxldCBOZXh0ID0gSlNPTi5wYXJzZShyZXN1bHRbMF0pXHJcblx0XHRcdFx0bGV0IFByZXYgPSBKU09OLnBhcnNlKHJlc3VsdFsxXSlcclxuXHRcdFx0XHRpZihOZXh0ICYmIFByZXYpe1xyXG5cdFx0XHRcdFx0c2V0TmV4dFByZXYoW05leHQsIFByZXZdKTtcclxuXHRcdFx0XHRcdGlmKE5leHRQcmV2KXtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coTmV4dFByZXYpXHJcblx0XHRcdFx0XHRcdHNldElzTG9hZGVkTmV4dFByZXYodHJ1ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdH0sIFtdKVxyXG5cdH1cclxuXHJcblx0aWYgKGVycm9yKSB7XHJcblx0XHQgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuXHQgIH0gZWxzZSBpZiAoKCFpc0xvYWRlZCB8fCAhaXNJbWdSZWFkeSB8fCAhaXNMb2FkZWROZXh0UHJldikgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJykge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8c3ZnIGlkPVwiUmVhY3RMb2FkZXJcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLXN0aWxsXCIgcG9pbnRzPVwiMCwwIDEwMCwwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLXN0aWxsXCIgcG9pbnRzPVwiMCwwIDAsMTAwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLWFuaW1hdGlvblwiIHBvaW50cz1cIjAsMCAxMDAsMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1hbmltYXRpb25cIiBwb2ludHM9XCIwLDAgMCwxMDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHQgIH0gZWxzZSB7XHJcblx0XHRmYWRlT3V0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjUmVhY3RMb2FkZXJcIiwgMTAwMCkpXHJcblx0XHRcdHJldHVybiAoIFxyXG5cdFx0XHRcdDw+XHJcblx0XHRcdFx0PE5hdmJhcj48L05hdmJhcj5cclxuXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PFByb2plY3RQYWdlT25lIGRhdGE9e2l0ZW1zfT48L1Byb2plY3RQYWdlT25lPlxyXG5cdFx0XHRcdDxQcm9qZWN0cGFnZVR3byBkYXRhPXtpdGVtc30+PC9Qcm9qZWN0cGFnZVR3bz5cclxuXHRcdFx0XHQ8UHJvamVjdHBhZ2VUaHJlZSBkYXRhPXtzZWNvbmR9PjwvUHJvamVjdHBhZ2VUaHJlZT5cclxuXHRcdFx0XHQ8UHJvamVjdHBhZ2VGb3VyIHByZWNpPXtwcmVjaX0gZGF0YTI9e2l0ZW1zfT48L1Byb2plY3RwYWdlRm91cj5cclxuXHRcdFx0XHQ8UHJvamVjdHBhZ2VGaXZlIGltYWdlcz17aW1hZ2VzfT48L1Byb2plY3RwYWdlRml2ZT5cclxuXHRcdFx0XHQ8UHJvamVjdHBhZ2VTaXggZGF0YT17aXRlbXN9IG5wPXtOZXh0UHJldn0+PC9Qcm9qZWN0cGFnZVNpeD5cclxuXHRcdFx0XHQ8TWluaUZvb3Rlcj48L01pbmlGb290ZXI+XHJcblx0XHRcdFx0PC8+XHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG4vL1xyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cGFnZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSBcInJlYWN0LXBhcmFsbGF4XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzaGVldHMvYnVsbWEvZWxlbWVudHMvY29udGFpbmVyLnNhc3NcIlxyXG5pbXBvcnQgTGlnaHRib3ggZnJvbSBcInlldC1hbm90aGVyLXJlYWN0LWxpZ2h0Ym94XCI7XHJcbmltcG9ydCBUaHVtYm5haWxzIGZyb20gXCJ5ZXQtYW5vdGhlci1yZWFjdC1saWdodGJveC9wbHVnaW5zL3RodW1ibmFpbHNcIjtcclxuaW1wb3J0IFwieWV0LWFub3RoZXItcmVhY3QtbGlnaHRib3gvcGx1Z2lucy90aHVtYm5haWxzLmNzc1wiO1xyXG5pbXBvcnQgXCJ5ZXQtYW5vdGhlci1yZWFjdC1saWdodGJveC9zdHlsZXMuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0cGFnZUZpdmUoaW1hZ2VzKSB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGxldCBhcnJheUltYWdlID0gW11cclxuICBjb25zb2xlLmxvZyhpbWFnZXMuaW1hZ2VzKTtcclxuICBpbWFnZXMuaW1hZ2VzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICBsZXQgaXRlbSA9IHsgc3JjOiBgL2ltYWdlcy9pbWFnZXByb2pldC8ke2VsZW1lbnQuaW1hZ2V9YH1cclxuICAgIGFycmF5SW1hZ2UucHVzaChpdGVtKVxyXG4gIH0pO1xyXG5cclxuICBpZihhcnJheUltYWdlLmxlbmd0aD4wKXtcclxuICBjb25zb2xlLmxvZyhhcnJheUltYWdlKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL1oxeklKQ0trLmpwZWdcIiBzdHJlbmd0aD17ODAwfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCIxMDAlXCIsIGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIn19PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLWNlbnRlcmVkXCIgc3R5bGU9e3toZWlnaHQ6XCI5MCVcIix3aWR0aDpcIjgwJVwiLCBwYWRkaW5nVG9wOlwiNTBweFwifX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtb25lLXRoaXJkXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiIzAyMTExRFwiLCBwYWRkaW5nOlwiMFwiLCBwYWRkaW5nOlwiMFwifX0+XHJcbiAgICAgICAgICAgICAge2ltYWdlcy5pbWFnZXNbMF0gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOlwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvaW1hZ2Vwcm9qZXQvXCIgKyBpbWFnZXMuaW1hZ2VzWzBdLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApIDogKDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIHdpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT48aW1nIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19IHNyYz17XCIvemVuaXRoL2F1dHJlL25vSW1nLnBuZ1wifSBhbHQ9XCJcIi8+PC9kaXY+KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtb25lLXRoaXJkIGNvbHVtbnMgaXMtbXVsdGlsaW5lIG14LTVcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLWZ1bGwgbXktNVwiIHN0eWxlPXt7YmFja2dyb3VuZDpcIiMwMjExMURcIiwgcGFkZGluZzpcIjBcIn19PiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtpbWFnZXMuaW1hZ2VzWzFdID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvaW1hZ2Vwcm9qZXQvXCIgKyBpbWFnZXMuaW1hZ2VzWzFdLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIHdpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT48aW1nIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19IHNyYz17XCIvemVuaXRoL2F1dHJlL25vSW1nLnBuZ1wifSBhbHQ9XCJcIi8+PC9kaXY+KX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLWZ1bGwgbXktNVwiIHN0eWxlPXt7YmFja2dyb3VuZDpcIiMwMjExMURcIiwgcGFkZGluZzpcIjBcIn19PiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge2ltYWdlcy5pbWFnZXNbMl0gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOlwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ltYWdlcy9pbWFnZXByb2pldC9cIiArIGltYWdlcy5pbWFnZXNbMl0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgd2lkdGg6XCIxMDAlXCIsIGhlaWdodDpcIjEwMCVcIn19PjxpbWcgc3R5bGU9e3t3aWR0aDpcIjUwJVwifX0gc3JjPXtcIi96ZW5pdGgvYXV0cmUvbm9JbWcucG5nXCJ9IGFsdD1cIlwiLz48L2Rpdj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1vbmUtdGhpcmQgaXMtbW9iaWxlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiIzAyMTExRFwiLCBwYWRkaW5nOlwiMFwifX0+XHJcbiAgICAgICAgICAgICAge2ltYWdlcy5pbWFnZXNbM10gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzpcIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ltYWdlcy9pbWFnZXByb2pldC9cIiArIGltYWdlcy5pbWFnZXNbM10uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgd2lkdGg6XCIxMDAlXCIsIGhlaWdodDpcIjEwMCVcIn19PjxpbWcgc3R5bGU9e3t3aWR0aDpcIjUwJVwifX0gc3JjPXtcIi96ZW5pdGgvYXV0cmUvbm9JbWcucG5nXCJ9IGFsdD1cIlwiLz48L2Rpdj4pfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbW9iaWxlIGlzLWNlbnRlcmVkIG10LTUtZnVsbGhkXCIgc3R5bGU9e3twb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBib3R0b206XCIyNXB4XCIsIHdpZHRoOlwiMTAxJVwifX0+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfSBjbGFzc05hbWU9XCJidG5TIGNlbnRlciBsaWdodCBsZXR0ZXJTcGFjaW5nTSBtYi02IG10LTBcIj5cclxuICAgICAgICAgICAgICAgIEVOIFZPSVIgK1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICBcclxuICBcclxuICAgICAgICAgICAgPExpZ2h0Ym94XHJcbiAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICBjbG9zZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgcGx1Z2lucz17W1RodW1ibmFpbHNdfVxyXG4gICAgICAgICAgICAgIHNsaWRlcz17YXJyYXlJbWFnZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RwYWdlRml2ZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0cGFnZUZvdXIoe3ByZWNpLCBkYXRhMn0pIHtcclxuXHRjb25zb2xlLmxvZyhwcmVjaSlcclxuXHRpZihkYXRhMi5mb2N1cyl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy82V3ZlbW0zSy5qcGVnKVwiLCBoZWlnaHQ6IFwiMTEwMHB4XCJ9fSBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XHRcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9JydzdHlsZT17eyBoZWlnaHQ6IFwiMTEwMHB4XCJ9fT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlcjInPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lckNlbnRlckEnPlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJlbnQyMSBtYXJnaW5Ub3AnPlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21hcmdpblRvcDInID5cclxuXHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdsaWdodCBsZXR0ZXJTcGFjaW5nUyc+Rm9jdXM8L2gzPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQgdGV4dC1oNScgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSd9fSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhMi5mb2N1c319PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPScgYm94Q2xpZW50JyBzdHlsZT17e2hlaWdodDogJzgwMHB4Jywgd2lkdGg6XCI2MDBweFwifX0+XHJcblx0XHRcdFx0XHRcdFx0e3ByZWNpLmltYWdlID8gKDxpbWcgY2xhc3NOYW1lPScgY29udGFpbicgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e1wiL2ltYWdlcy9pbWFnZXByb2pldC9cIiArIHByZWNpLmltYWdlfSBhbHQ9XCJcIi8+KSA6ICg8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCB3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiMTAwJVwifX0+PGltZyBzdHlsZT17e3dpZHRoOlwiNTAlXCJ9fSBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn0gYWx0PVwiXCIvPjwvZGl2Pil9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cdFx0XHJcblxyXG5cclxuXHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fX1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cGFnZUZvdXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIFByb2plY3RwYWdlT25lKGRhdGEpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kMVwiIGFsdD1cImhvbWVwYWdlXCI+XHJcblxyXG5cdFx0XHQ8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuXHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZy5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcblx0XHRcdFx0PC92aWRlbz5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5Qmx1ZVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlcjJcIj5cclxuXHRcdFx0XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL3plbml0aC9pbWFnZXMvYklPMXI5Ri5wbmdcIiBhbHQ9XCJMb2dvXCIgd2lkdGg9ezIwMH0gY2xhc3NOYW1lPVwiY2VudGVyXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHRcclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3t0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ319IGNsYXNzTmFtZT1cImNsaWVudHBhZ2VUZXh0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cIm1lZGl1bSBtYXJnaW5TdG9wIGNsaWVudERldGFpbFwiPntkYXRhLmRhdGEucHJvamV0fTwvaDE+XHJcblx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT1cImxpZ2h0IG1hcmdpblN0b3AgY2xpZW50RGV0YWlsXCI+e2RhdGEuZGF0YS5zZWN0ZXVyLnNlY3RldXJ9PC9oNj5cclxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLmNsaWVudCA/IDxwIGNsYXNzTmFtZT1cImxpZ2h0IG1hcmdpblN0b3AgY2xpZW50RGV0YWlsXCI+VU4gUFJPSkVUIFBPVVIgOiB7ZGF0YS5kYXRhLmNsaWVudC5ub21DbGllbnR9PC9wPiA6ICA8cCBjbGFzc05hbWU9XCJsaWdodCBtYXJnaW5TdG9wIGNsaWVudERldGFpbFwiPlVOIFBST0pFVCBQT1VSIDogTi9BPC9wPn1cclxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLmR1cmVlID8gPHAgY2xhc3NOYW1lPVwibGlnaHQgY2xpZW50RGV0YWlsXCI+RFVSw4lFIFBST0pFVCA6IHtkYXRhLmRhdGEuZHVyZWV9PC9wPiA6IDxwIGNsYXNzTmFtZT1cImxpZ2h0IGNsaWVudERldGFpbFwiPkRVUsOJRSBQUk9KRVQgOiBOL0E8L3A+fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayBzdHlsZT17e3RleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwid2hpdGVcIn19IHRvPXtgL3NlYXJjaGNhdC9wcm9qZXQvJHtkYXRhLmRhdGEuY2F0ZWdvcmllWzBdLmlkfS8ke2RhdGEuZGF0YS5jYXRlZ29yaWVbMF0uY2F0ZWdvcmllfWB9PjxwIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmVcIiwgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSd9fSBjbGFzc05hbWU9XCJsaWdodCBjbGllbnREZXRhaWwyXCI+e2RhdGEuZGF0YS5jYXRlZ29yaWVbMF0uY2F0ZWdvcmllfTwvcD48L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0e2RhdGEuZGF0YS5jYXRlZ29yaWVbMV0gJiYgPD48cCBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lXCJ9fSBjbGFzc05hbWU9XCJsaWdodCBjbGllbnREZXRhaWwyXCI+ICAgfCAgIDwvcD4gPExpbmsgdG89e2Avc2VhcmNoY2F0L2NsaWVudC8ke2RhdGEuZGF0YS5jYXRlZ29yaWVbMV0uaWR9LyR7ZGF0YS5kYXRhLmNhdGVnb3JpZVsxXS5jYXRlZ29yaWV9YH0gPjxwIGNsYXNzTmFtZT1cImxpZ2h0IGNsaWVudERldGFpbDJcIiBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lXCIsIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLCB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCJ9fT57ZGF0YS5kYXRhLmNhdGVnb3JpZVsxXS5jYXRlZ29yaWV9PC9wPjwvTGluaz48Lz59XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXIzXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PGg0IHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnfX0gY2xhc3NOYW1lPVwibGlnaHQgbGV0dGVyU3BhY2luZ1MgIGRpc2NvdmVyQ2xpZW50MlwiPntkYXRhLmRhdGEubWlzc2lvbn08L2g0PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibGlnaHQgIGRpc2NvdmVyQ2xpZW50XCI+RMOJQ09VVlJFWjwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmVDbGllbnRcIiA+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RwYWdlT25lO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIFByb2plY3RwYWdlU2l4KHtkYXRhLCBucH0pIHtcclxuXHRpZihucFswXSl7XHJcblx0XHRpZihucFswXVswXSA9PSAnbnVsbCcpXHJcblx0XHRcdG5wWzBdWzBdID0gZmFsc2U7XHJcblx0XHRpZihucFswXVsxXSA9PSAnbnVsbCcpXHJcblx0XHRcdG5wWzFdWzBdID0gZmFsc2U7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy82V3ZlbW0zSy5qcGVnKVwifX0gY2xhc3NOYW1lPSdkZW1pYmxvY09wYWNpdHknPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyQ2VudGVyIG1hcmdpblRvcFMnIHN0eWxlPXt7bWFyZ2luVG9wOlwiMFwifX0+XHJcblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J21lZGl1bSBjZW50ZXJUZXh0Jz5VTiBUw4lNT0lHTkFHRTwvaDQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsaWdodCBjZW50ZXJUZXh0JyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLnRlbW9pZ25hZ2V9fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPSdkZW1pYmxvY0NsaWVudCc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGVtaWJsb2NPcGFjaXR5Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmVudENsaWVudE5leHRQcmV2Jz5cclxuXHJcblx0XHRcdFx0XHRcdFx0e25wWzFdWzBdICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nQ2xpZW50TmV4dFByZXYxJyBvbkNsaWNrPXsoKT0+e2xvY2F0aW9uLmhyZWYgPSBcIi9wcm9qZXQvXCIrIG5wWzFdWzBdLmlkfX0gc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9J2xpZ2h0IHJpZ2h0VGV4dCBtYXJnaW5Ub3BTJz5QUk9KRVQgUFLDiUPDiURFTlQ8L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPSdyaWdodFRleHQnPntucFsxXVswXS5wcm9qZXR9PC9oNT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT0nbGlnaHQgcmlnaHRUZXh0Jz57bnBbMV1bMF0ubWlzc2lvbn08L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+fVxyXG5cclxuXHRcdFx0XHRcdFx0XHR7bnBbMF1bMF0gJiYgPGRpdiBjbGFzc05hbWU9J0NsaWVudE5leHRQcmV2Micgb25DbGljaz17KCk9Pntsb2NhdGlvbi5ocmVmID0gXCIvcHJvamV0L1wiKyBucFswXVswXS5pZH19IHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPSdsaWdodCBsZWZ0VGV4dCBtYXJnaW5Ub3BTJz5QUk9KRVQgU1VJVkFOVDwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9J2xlZnRUZXh0Jz57bnBbMF1bMF0ucHJvamV0fTwvaDU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9J2xpZ2h0IGxlZnRUZXh0Jz57bnBbMF1bMF0ubWlzc2lvbn08L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+fVxyXG5cdFx0XHRcdFx0XHRcdHsvKiA8YSBocmVmPXtcIi9jbGllbnQvXCIrbnBbMV1bMF0uaWR9PiAqL31cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RwYWdlU2l4OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gUHJvamVjdHBhZ2VUaHJlZShkYXRhKSB7XHJcblx0Y29uc29sZS5sb2coZGF0YSlcclxuXHRpZihkYXRhLmxlbmd0aCA+IDApe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlckRhcmtCbHVlQ2xpZW50JyBzdHlsZT17e2hlaWdodDpcIjgwMHB4XCIsIHdpZHRoOlwiMTAwJVwifX0+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz17XCIvaW1hZ2VzL2ltYWdlcHJvamV0L1wiICsgZGF0YS5kYXRhLmltYWdlfSBhbHQ9XCJcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiB9XHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RwYWdlVGhyZWU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0cGFnZVR3byhkYXRhKSB7XHJcblx0aWYoZGF0YS5kYXRhLmRlbWFuZGUgfHwgZGF0YS5kYXRhLmRlZmkgfHwgZGF0YS5kYXRhLmFjdGlvbil7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzLzZXdmVtbTNLLmpwZWcpXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIn19IGNsYXNzTmFtZT0nZGVtaWJsb2NDbGllbnQnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbHVtbnMnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbnMgaXMtY2VudGVyZWQnPlxyXG5cdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuZGVtYW5kZSAmJlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gaXMtY2VudGVyZWQgaXMtNCcgc3R5bGU9e3ttYXJnaW5Ub3A6XCI0OHB4XCIsIG1hcmdpblJpZ2h0OlwiYXV0b1wiLCBtYXJnaW5MZWZ0OlwiYXV0b1wifX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdsaWdodCc+VU5FIERFTUFOREU8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0gY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQgcHgtNidkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLmRhdGEuZGVtYW5kZX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PiBcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuZGVmaSAmJlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gaXMtY2VudGVyZWQgaXMtNCcgc3R5bGU9e3ttYXJnaW5Ub3A6XCI0OHB4XCIsIG1hcmdpblJpZ2h0OlwiYXV0b1wiLCBtYXJnaW5MZWZ0OlwiYXV0b1wifX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdsaWdodCc+VU4gRMOJRkk8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0gY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQgY29sdW1ucyBpcy12Y2VudGVyZWQgaXMtY2VudGVyZWQgcHgtNicgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YS5kYXRhLmRlZml9fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuYWN0aW9uICYmXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbHVtbiBpcy1jZW50ZXJlZCBpcy00JyAgc3R5bGU9e3ttYXJnaW5Ub3A6XCI0OHB4XCIsIG1hcmdpblJpZ2h0OlwiYXV0b1wiLCBtYXJnaW5MZWZ0OlwiYXV0b1wifX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdsaWdodCc+VU5FIEFDVElPTjwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fSBjbGFzc05hbWU9J2xpZ2h0IGNvbnRhaW5lckNlbnRlckNsaWVudCBjb2x1bW5zIGlzLXZjZW50ZXJlZCBpcy1jZW50ZXJlZCBweC02JyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLmRhdGEuYWN0aW9ufX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuXHR9XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHBhZ2VUd287XHJcbiIsImltcG9ydCBTZWFyY2hQYWdlT25lMiBmcm9tIFwiLi9fU2VhcmNoUGFnZU9uZTJcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9fbmF2YmFyJztcclxuaW1wb3J0IFJzQnV0dG9uIGZyb20gJy4uL19yc0J1dHRvbic7XHJcbmltcG9ydCBMaW5lc1RvcCBmcm9tICcuLi9fbGluZXNUb3AnO1xyXG5pbXBvcnQgTGluZXNCb3R0b20gZnJvbSAnLi4vX2xpbmVzQm90dG9tJztcclxuaW1wb3J0IFNlYXJjaFBhZ2VUd28yIGZyb20gXCIuL19TZWFyY2hQYWdlVHdvMlwiO1xyXG5pbXBvcnQgTWluaUZvb3RlciBmcm9tIFwiLi4vSG9tZXBhZ2UvX21pbmlGb290ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvbG9hZGVyLmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gU2VhcmNoUGFnZTIoKSB7XHJcblx0Y29uc3QgeyBpbmZvIH0gPSB1c2VQYXJhbXMoKTtcclxuXHRjb25zdCB7IG5hbWUgfSA9IHVzZVBhcmFtcygpO1xyXG5cdGNvbnN0IHsgdHlwZSB9ID0gdXNlUGFyYW1zKCk7XHJcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNMb2FkZWRJbWcsIHNldElzTG9hZGVkSW1nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNMb2FkZWROZXh0UHJldiwgc2V0SXNMb2FkZWROZXh0UHJldl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzSW1nUmVhZHksIHNldEltZ1JlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtoZWFkZXIsIHNldEhlYWRlcl0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW3ByZWNpLCBzZXRQcmVjaV0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW3NlY29uZCwgc2V0U2Vjb25kXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW05leHRQcmV2LCBzZXROZXh0UHJldl0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2xvYWQsIHNldExvYWRdID0gdXNlU3RhdGUoXCJoaWRkZW5cIilcclxuXHJcblx0XHRjb25zdCBzZXRMb2FkaW5nID0gcGFyYW0gPT4ge1xyXG5cdFx0XHRpZihwYXJhbSA9PSB0cnVlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJnb3RjaGFcIilcclxuXHRcdFx0XHRzZXRMb2FkKFwidmlzaWJsZVwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHJcblx0XHRcdGZldGNoKGAvZ2V0c2VhcmNoY2F0LyR7aW5mb30vJHt0eXBlfWAse21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0XHQudGhlbihcclxuXHRcdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0c2V0SXRlbXMocmVzdWx0KTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cdFx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdH0sIFtdKVx0XHRcclxuXHJcblxyXG5cclxuXHRpZiAoZXJyb3IpIHtcclxuXHRcdCByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG5cdCAgfSBlbHNlIGlmICghaXNMb2FkZWQgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJykge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8c3ZnIGlkPVwiUmVhY3RMb2FkZXJcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLXN0aWxsXCIgcG9pbnRzPVwiMCwwIDEwMCwwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLXN0aWxsXCIgcG9pbnRzPVwiMCwwIDAsMTAwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLWFuaW1hdGlvblwiIHBvaW50cz1cIjAsMCAxMDAsMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1hbmltYXRpb25cIiBwb2ludHM9XCIwLDAgMCwxMDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHQgIH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAoICBcclxuXHRcdDw+XHJcblx0XHQ8TmF2YmFyPjwvTmF2YmFyPlxyXG5cdFx0PFJzQnV0dG9uPjwvUnNCdXR0b24+XHJcblx0XHQ8TGluZXNUb3A+PC9MaW5lc1RvcD5cclxuXHRcdDxMaW5lc0JvdHRvbT48L0xpbmVzQm90dG9tPlxyXG5cdFx0XHJcblx0XHQ8U2VhcmNoUGFnZU9uZTIgc2V0TG9hZGluZz17c2V0TG9hZGluZ30gZGF0YSA9IHtuYW1lfT48L1NlYXJjaFBhZ2VPbmUyPlxyXG5cdFx0PGRpdiBzdHlsZT17e3Zpc2liaWxpdHk6bG9hZH19PjxTZWFyY2hQYWdlVHdvMiBkYXRhPXtpdGVtc30+PC9TZWFyY2hQYWdlVHdvMj48L2Rpdj5cclxuXHRcdFxyXG5cdFx0ey8qIDxXb3JrcGFnZVRocmVlPjwvV29ya3BhZ2VUaHJlZT5cclxuXHRcdDxXb3JrcGFnZUZvdXI+PC9Xb3JrcGFnZUZvdXI+XHJcblx0XHQ8V29ya3BhZ2VGaXZlPjwvV29ya3BhZ2VGaXZlPiovfVxyXG5cdFx0PE1pbmlGb290ZXI+PC9NaW5pRm9vdGVyPiBcclxuXHRcdDwvPlxyXG5cdCApO1xyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFnZTI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hQYWdlT25lMih7c2V0TG9hZGluZyxkYXRhfSkge1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpXHJcblx0ICB9LCBbMV0pO1xyXG5cdEFPUy5pbml0KClcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kMVwiIGFsdD1cImhvbWVwYWdlXCI+XHJcblxyXG5cdFx0XHQ8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuXHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZy5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcblx0XHRcdDwvdmlkZW8+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eUJsdWVcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXIyXCI+XHJcblx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvemVuaXRoL2ltYWdlcy9iSU8xcjlGLnBuZ1wiIGFsdD1cIkxvZ29cIiB3aWR0aD17MjAwfSBjbGFzc05hbWU9XCJjZW50ZXJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cdFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid29ya3BhZ2VUZXh0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cIm1lZGl1bVwiPlJFU1VMVEFUIFBPVVIgXCJ7ZGF0YX1cIjwvaDE+XHJcblx0XHRcdFx0XHRcdFx0ey8qIDxwIGNsYXNzTmFtZT1cImxpZ2h0XCI+TE9HTy4gV0VCIERFU0lHTi4gQ0FURUdPUklFPC9wPiAqL31cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlT25lMjtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tIFwicmVhY3QtcGFyYWxsYXhcIjtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaFBhZ2VUd28yKGRhdGEpIHtcclxuXHRjb25zdCB7IHR5cGUgfSA9IHVzZVBhcmFtcygpO1xyXG5cdC8vIGNvbnNvbGUubG9nKGNvdW50KVxyXG5cdC8vIGxldCBwYWdlTmJyID0gTWF0aC5jZWlsKGNvdW50IC8gMjApXHJcblx0Ly8gbGV0IG5iciA9IHBhcnNlSW50KHBhZ2UpXHJcblx0Ly8gZnVuY3Rpb24gb25DaGFuZ2UocGFyYW1zKSB7XHJcblx0Ly8gICBkb2N1bWVudC5sb2NhdGlvbiA9IGAvcHJvamV0cy8ke3BhcmFtc31gXHJcblx0Ly8gfVxyXG4gIFxyXG5cdGxldCBib3ggPSBbXTtcclxuXHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5kYXRhLmxlbmd0aDsgaW5kZXgrKykge1xyXG5cdFx0aWYodHlwZSA9PSBcInByb2pldFwiKXtcclxuXHRcdFx0bGV0IGl0ZW0gPSAoXHJcblx0XHRcdCAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjb2x1bW4gY29sdW1ucyBpcy1vbmUtZmlmdGggaXMtY2VudGVyZWRcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlzLWhhbGZcIj5cclxuXHRcdFx0XHQ8YSBocmVmPXtcIi9wcm9qZXQvXCIgKyBkYXRhLmRhdGFbaW5kZXhdLmlkfT5cclxuXHRcdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+XHJcblx0XHRcdFx0XHQ8cCBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiIH19IGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcblx0XHRcdFx0XHQgIHtkYXRhLmRhdGFbaW5kZXhdLm1pc3Npb259XHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHR7ZGF0YS5kYXRhW2luZGV4XS5oZWFkZXIgIT09IFwicmllbiBhIHZvaXIsIGNpcmN1bGV6XCIgPyAoPGltZ1xyXG5cdFx0XHRcdFx0ICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19XHJcblx0XHRcdFx0XHQgIHNyYz17XCIvaW1hZ2VzL2ltYWdlcHJvamV0L1wiICsgZGF0YS5kYXRhW2luZGV4XS5oZWFkZXJ9XHJcblx0XHRcdFx0XHQgIGFsdD1cIlwiXHJcblx0XHRcdFx0XHQvPikgOiAoPGltZyBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCJ9fSBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn0gYWx0PVwiXCIvPil9XHJcblx0XHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdCk7XHJcblx0XHRcdGJveC5wdXNoKGl0ZW0pO1xyXG5cdFx0fVxyXG5cdFx0aWYodHlwZSA9PSBcImNsaWVudFwiKXtcclxuXHRcdFx0bGV0IGl0ZW0gPSAoXHJcblx0XHRcdCAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjb2x1bW4gY29sdW1ucyBpcy1vbmUtZmlmdGggaXMtY2VudGVyZWRcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlzLWhhbGZcIj5cclxuXHRcdFx0XHQ8YSBocmVmPXtcIi9jbGllbnQvXCIgKyBkYXRhLmRhdGFbaW5kZXhdLmlkfT5cclxuXHRcdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+XHJcblx0XHRcdFx0XHQ8cCBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiIH19IGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcblx0XHRcdFx0XHQgIHtkYXRhLmRhdGFbaW5kZXhdLm1pc3Npb259XHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHR7ZGF0YS5kYXRhW2luZGV4XS5oZWFkZXIgIT09IFwicmllbiBhIHZvaXIsIGNpcmN1bGV6XCIgPyAoPGltZ1xyXG5cdFx0XHRcdFx0ICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19XHJcblx0XHRcdFx0XHQgIHNyYz17XCIvaW1hZ2VzL2ltYWdlY2xpZW50L1wiICsgZGF0YS5kYXRhW2luZGV4XS5oZWFkZXJ9XHJcblx0XHRcdFx0XHQgIGFsdD1cIlwiXHJcblx0XHRcdFx0XHQvPikgOiAoPGltZyBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCJ9fSBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn0gYWx0PVwiXCIvPil9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0KTtcclxuXHRcdFx0Ym94LnB1c2goaXRlbSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRcclxuXHRyZXR1cm4gKFxyXG5cdCAgPD5cclxuXHQgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL3plbml0aC9pbWFnZXMvWjF6SUpDS2suanBlZ1wiIGJsdXI9e3sgbWluOiAtMSwgbWF4OiAzIH19IHN0cmVuZ3RoPXs0MDB9PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJwdC02XCIgc3R5bGU9e3twYWRkaW5nQm90dG9tOlwiODBweFwifX0gYWx0PVwiYWN0aW9uXCI+XHJcblx0XHQgIDxkaXYgY2xhc3NOYW1lPVwicHQtNlwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG5cdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tdWx0aWxpbmUgaXMtY2VudGVyZWRcIj5cclxuXHRcdFx0XHR7Ym94fVxyXG5cdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHQgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbW9iaWxlIGlzLWNlbnRlcmVkXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTUwcHhcIn19PiAgICAgICAgICAgIFxyXG5cdFx0XHRcdDxQYWdpbmF0aW9uXHJcblx0XHRcdFx0ICBjdXJyZW50PXtuYnJ9XHJcblx0XHRcdFx0ICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcblx0XHRcdFx0ICBwYWdlU2l6ZT17MX1cclxuXHRcdFx0XHQgIHRvdGFsPXtwYWdlTmJyfVxyXG5cdFx0XHRcdCAgc2hvd1RpdGxlPXtmYWxzZX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQgIDwvZGl2PiAgICovfVxyXG5cdFx0XHQgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bkwgY2VudGVyIGxpZ2h0IGxldHRlclNwYWNpbmdNXCI+XHJcblx0XHRcdFx0PExpbmsgdG89XCIvY29udGFjdFwiIGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcblx0XHRcdFx0ICBWb2lyIHBsdXNcclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdCAgPC9idXR0b24+ICovfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCAgPC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQgIDwvUGFyYWxsYXg+XHJcblx0ICA8Lz5cclxuXHQpO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFnZVR3bzI7IiwiaW1wb3J0IFNlYXJjaFBhZ2VPbmUgZnJvbSBcIi4vX1NlYXJjaFBhZ2VPbmVcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9fbmF2YmFyJztcclxuaW1wb3J0IFJzQnV0dG9uIGZyb20gJy4uL19yc0J1dHRvbic7XHJcbmltcG9ydCBMaW5lc1RvcCBmcm9tICcuLi9fbGluZXNUb3AnO1xyXG5pbXBvcnQgTGluZXNCb3R0b20gZnJvbSAnLi4vX2xpbmVzQm90dG9tJztcclxuaW1wb3J0IFNlYXJjaFBhZ2VUd28gZnJvbSBcIi4vX1NlYXJjaFBhZ2VUd29cIjtcclxuaW1wb3J0IE1pbmlGb290ZXIgZnJvbSBcIi4uL0hvbWVwYWdlL19taW5pRm9vdGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcblxyXG5mdW5jdGlvbiBTZWFyY2hQYWdlKCkge1xyXG5cdGNvbnN0IHsgaW5mbyB9ID0gdXNlUGFyYW1zKCk7XHJcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNMb2FkZWRJbWcsIHNldElzTG9hZGVkSW1nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNMb2FkZWROZXh0UHJldiwgc2V0SXNMb2FkZWROZXh0UHJldl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzSW1nUmVhZHksIHNldEltZ1JlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtoZWFkZXIsIHNldEhlYWRlcl0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW3ByZWNpLCBzZXRQcmVjaV0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW3NlY29uZCwgc2V0U2Vjb25kXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW05leHRQcmV2LCBzZXROZXh0UHJldl0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2xvYWQsIHNldExvYWRdID0gdXNlU3RhdGUoXCJoaWRkZW5cIilcclxuXHJcblx0XHRjb25zdCBzZXRMb2FkaW5nID0gcGFyYW0gPT4ge1xyXG5cdFx0XHRpZihwYXJhbSA9PSB0cnVlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJnb3RjaGFcIilcclxuXHRcdFx0XHRzZXRMb2FkKFwidmlzaWJsZVwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHJcblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhpbmZvKVxyXG5cdFx0XHRmZXRjaChgL2dldFNlYXJjaC8ke2luZm99YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRzZXRJdGVtcyhyZXN1bHQpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0fSwgW10pXHRcdFxyXG5cclxuXHJcblxyXG5cdGlmIChlcnJvcikge1xyXG5cdFx0IHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcblx0ICB9IGVsc2UgaWYgKCFpc0xvYWRlZCB8fCBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnY29tcGxldGUnKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcdDxzdmcgaWQ9XCJSZWFjdExvYWRlclwiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+XHJcblx0XHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2Utc3RpbGxcIiBwb2ludHM9XCIwLDAgMTAwLDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2Utc3RpbGxcIiBwb2ludHM9XCIwLDAgMCwxMDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2UtYW5pbWF0aW9uXCIgcG9pbnRzPVwiMCwwIDEwMCwwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLWFuaW1hdGlvblwiIHBvaW50cz1cIjAsMCAwLDEwMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdCAgfSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICggIFxyXG5cdFx0PD5cclxuXHRcdDxOYXZiYXI+PC9OYXZiYXI+XHJcblx0XHQ8UnNCdXR0b24+PC9Sc0J1dHRvbj5cclxuXHRcdDxMaW5lc1RvcD48L0xpbmVzVG9wPlxyXG5cdFx0PExpbmVzQm90dG9tPjwvTGluZXNCb3R0b20+XHJcblx0XHRcclxuXHRcdDxTZWFyY2hQYWdlT25lIHNldExvYWRpbmc9e3NldExvYWRpbmd9IGRhdGEgPSB7aW5mb30+PC9TZWFyY2hQYWdlT25lPlxyXG5cdFx0PGRpdiBzdHlsZT17e3Zpc2liaWxpdHk6bG9hZH19PjxTZWFyY2hQYWdlVHdvIGRhdGE9e2l0ZW1zfT48L1NlYXJjaFBhZ2VUd28+PC9kaXY+XHJcblx0XHRcclxuXHRcdHsvKiA8V29ya3BhZ2VUaHJlZT48L1dvcmtwYWdlVGhyZWU+XHJcblx0XHQ8V29ya3BhZ2VGb3VyPjwvV29ya3BhZ2VGb3VyPlxyXG5cdFx0PFdvcmtwYWdlRml2ZT48L1dvcmtwYWdlRml2ZT4qL31cclxuXHRcdDxNaW5pRm9vdGVyPjwvTWluaUZvb3Rlcj4gXHJcblx0XHQ8Lz5cclxuXHQgKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFBhZ2U7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoUGFnZU9uZSh7c2V0TG9hZGluZyxkYXRhfSkge1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpXHJcblx0ICB9LCBbMV0pO1xyXG5cdEFPUy5pbml0KClcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kMVwiIGFsdD1cImhvbWVwYWdlXCI+XHJcblxyXG5cdFx0XHQ8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuXHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZy5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcblx0XHRcdDwvdmlkZW8+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eUJsdWVcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXIyXCI+XHJcblx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvemVuaXRoL2ltYWdlcy9iSU8xcjlGLnBuZ1wiIGFsdD1cIkxvZ29cIiB3aWR0aD17MjAwfSBjbGFzc05hbWU9XCJjZW50ZXJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cdFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid29ya3BhZ2VUZXh0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cIm1lZGl1bVwiPlJFU1VMVEFUIFBPVVIgXCJ7ZGF0YX1cIjwvaDE+XHJcblx0XHRcdFx0XHRcdFx0ey8qIDxwIGNsYXNzTmFtZT1cImxpZ2h0XCI+TE9HTy4gV0VCIERFU0lHTi4gQ0FURUdPUklFPC9wPiAqL31cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlT25lO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gXCJyZWFjdC1wYXJhbGxheFwiO1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoUGFnZVR3byhkYXRhKSB7XHJcblx0Ly8gY29uc29sZS5sb2coY291bnQpXHJcblx0Ly8gbGV0IHBhZ2VOYnIgPSBNYXRoLmNlaWwoY291bnQgLyAyMClcclxuXHQvLyBsZXQgbmJyID0gcGFyc2VJbnQocGFnZSlcclxuXHQvLyBmdW5jdGlvbiBvbkNoYW5nZShwYXJhbXMpIHtcclxuXHQvLyAgIGRvY3VtZW50LmxvY2F0aW9uID0gYC9wcm9qZXRzLyR7cGFyYW1zfWBcclxuXHQvLyB9XHJcbiAgXHJcblx0bGV0IGJveCA9IFtdO1xyXG5cdGlmKGRhdGEuZGF0YS5sZW5ndGggPiAwKXtcclxuXHJcblx0XHJcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5kYXRhLmxlbmd0aDsgaW5kZXgrKykge1xyXG5cdFx0XHRpZihkYXRhLmRhdGFbaW5kZXhdWzBdID09IFwicHJvamV0XCIpe1xyXG5cdFx0XHRcdGxldCBpdGVtID0gKFxyXG5cdFx0XHRcdCAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjb2x1bW4gY29sdW1ucyBpcy1vbmUtZmlmdGggaXMtY2VudGVyZWRcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXMtaGFsZlwiPlxyXG5cdFx0XHRcdFx0PGEgaHJlZj17XCIvcHJvamV0L1wiICsgZGF0YS5kYXRhW2luZGV4XS5pZH0+XHJcblx0XHRcdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+XHJcblx0XHRcdFx0XHRcdDxwIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIgfX0gY2xhc3NOYW1lPVwidGV4dERlY29cIj5cclxuXHRcdFx0XHRcdFx0ICB7ZGF0YS5kYXRhW2luZGV4XS5taXNzaW9ufVxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdHtkYXRhLmRhdGFbaW5kZXhdLmhlYWRlciAhPT0gXCJyaWVuIGEgdm9pciwgY2lyY3VsZXpcIiA/ICg8aW1nXHJcblx0XHRcdFx0XHRcdCAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxyXG5cdFx0XHRcdFx0XHQgIHNyYz17XCIvaW1hZ2VzL2ltYWdlcHJvamV0L1wiICsgZGF0YS5kYXRhW2luZGV4XS5oZWFkZXJ9XHJcblx0XHRcdFx0XHRcdCAgYWx0PVwiXCJcclxuXHRcdFx0XHRcdFx0Lz4pIDogKDxpbWcgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwifX0gc3JjPXtcIi96ZW5pdGgvYXV0cmUvbm9JbWcucG5nXCJ9IGFsdD1cIlwiLz4pfVxyXG5cdFx0XHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRib3gucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZihkYXRhLmRhdGFbaW5kZXhdWzBdID09IFwiY2xpZW50XCIpe1xyXG5cdFx0XHRcdGxldCBpdGVtID0gKFxyXG5cdFx0XHRcdCAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjb2x1bW4gY29sdW1ucyBpcy1vbmUtZmlmdGggaXMtY2VudGVyZWRcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXMtaGFsZlwiPlxyXG5cdFx0XHRcdFx0PGEgaHJlZj17XCIvY2xpZW50L1wiICsgZGF0YS5kYXRhW2luZGV4XS5pZH0+XHJcblx0XHRcdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+XHJcblx0XHRcdFx0XHRcdDxwIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIgfX0gY2xhc3NOYW1lPVwidGV4dERlY29cIj5cclxuXHRcdFx0XHRcdFx0ICB7ZGF0YS5kYXRhW2luZGV4XS5taXNzaW9ufVxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdHtkYXRhLmRhdGFbaW5kZXhdLmhlYWRlciAhPT0gXCJyaWVuIGEgdm9pciwgY2lyY3VsZXpcIiA/ICg8aW1nXHJcblx0XHRcdFx0XHRcdCAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxyXG5cdFx0XHRcdFx0XHQgIHNyYz17XCIvaW1hZ2VzL2ltYWdlY2xpZW50L1wiICsgZGF0YS5kYXRhW2luZGV4XS5oZWFkZXJ9XHJcblx0XHRcdFx0XHRcdCAgYWx0PVwiXCJcclxuXHRcdFx0XHRcdFx0Lz4pIDogKDxpbWcgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwifX0gc3JjPXtcIi96ZW5pdGgvYXV0cmUvbm9JbWcucG5nXCJ9IGFsdD1cIlwiLz4pfVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Ym94LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9ZWxzZXtcclxuXHRcdGJveCA9ICg8cD5WcmFpbWVudCBkw6lzb2zDqSwgbm91cyBuJ2F2b25zIHJpZW4gdHJvdXbDqSA6YzwvcD4pXHJcblx0XHRcclxuXHR9XHJcblxyXG5cdFxyXG5cdHJldHVybiAoXHJcblx0ICA8PlxyXG5cdCAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9aMXpJSkNLay5qcGVnXCIgYmx1cj17eyBtaW46IC0xLCBtYXg6IDMgfX0gc3RyZW5ndGg9ezQwMH0+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB0LTZcIiBzdHlsZT17e3BhZGRpbmdCb3R0b206XCI4MHB4XCJ9fSBhbHQ9XCJhY3Rpb25cIj5cclxuXHRcdCAgPGRpdiBjbGFzc05hbWU9XCJwdC02XCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcblx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW11bHRpbGluZSBpcy1jZW50ZXJlZFwiPlxyXG5cdFx0XHRcdHtib3h9XHJcblx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdCAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tb2JpbGUgaXMtY2VudGVyZWRcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxNTBweFwifX0+ICAgICAgICAgICAgXHJcblx0XHRcdFx0PFBhZ2luYXRpb25cclxuXHRcdFx0XHQgIGN1cnJlbnQ9e25icn1cclxuXHRcdFx0XHQgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuXHRcdFx0XHQgIHBhZ2VTaXplPXsxfVxyXG5cdFx0XHRcdCAgdG90YWw9e3BhZ2VOYnJ9XHJcblx0XHRcdFx0ICBzaG93VGl0bGU9e2ZhbHNlfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdCAgPC9kaXY+ICAgKi99XHJcblx0XHRcdCAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuTCBjZW50ZXIgbGlnaHQgbGV0dGVyU3BhY2luZ01cIj5cclxuXHRcdFx0XHQ8TGluayB0bz1cIi9jb250YWN0XCIgY2xhc3NOYW1lPVwidGV4dERlY29cIj5cclxuXHRcdFx0XHQgIFZvaXIgcGx1c1xyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0ICA8L2J1dHRvbj4gKi99XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0ICA8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCAgPC9QYXJhbGxheD5cclxuXHQgIDwvPlxyXG5cdCk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlVHdvOyIsImltcG9ydCBXb3JrcGFnZUNsaWVudE9uZSBmcm9tICcuL193b3JrcGFnZUNsaWVudE9uZSc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vX25hdmJhcic7XHJcbmltcG9ydCBSc0J1dHRvbiBmcm9tICcuLi9fcnNCdXR0b24nO1xyXG5pbXBvcnQgTGluZXNUb3AgZnJvbSAnLi4vX2xpbmVzVG9wJztcclxuaW1wb3J0IExpbmVzQm90dG9tIGZyb20gJy4uL19saW5lc0JvdHRvbSc7XHJcbmltcG9ydCBXb3JrcGFnZUNsaWVudFR3byBmcm9tICcuL193b3JrcGFnZUNsaWVudFR3byc7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9sb2FkZXIuY3NzXCJcclxuaW1wb3J0IE1pbmlGb290ZXIgZnJvbSAnLi4vSG9tZXBhZ2UvX21pbmlGb290ZXInO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFdvcmtwYWdlQ2xpZW50KCkge1xyXG5cdGNvbnN0IHsgbmJyIH0gPSB1c2VQYXJhbXMoKTtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0NvdW50TG9hZGVkLCBzZXRJc0NvdW50TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNDYXRMb2FkZWQsIHNldElzQ2F0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNMb2FkZWROZXh0UHJldiwgc2V0SXNMb2FkZWROZXh0UHJldl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzSW1nUmVhZHksIHNldEltZ1JlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbY2F0LCBzZXRDYXRdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtsb2FkLCBzZXRMb2FkXSA9IHVzZVN0YXRlKFwiaGlkZGVuXCIpXHJcblx0Y29uc3QgW3VubG9hZCwgc2V0VW5sb2FkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuXHRjb25zdCBzZXRMb2FkaW5nID0gcGFyYW0gPT4ge1xyXG5cdFx0aWYocGFyYW0gPT0gdHJ1ZSkge1xyXG5cdFx0XHRzZXRMb2FkKFwidmlzaWJsZVwiKTtcdFx0XHJcblx0XHRcdHNldFVubG9hZCh0cnVlKTtcdFx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuXHRcdGZldGNoKGAvZ2V0dEFsbENsaWVudC8ke25icn1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHQudGhlbihcclxuXHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRzZXRJdGVtcyhyZXN1bHQpO1xyXG5cdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fVxyXG5cdFx0KVxyXG5cclxuXHRcdGZldGNoKGAvZ2V0Q291bnQvY2xpZW50YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0LnRoZW4oXHJcblx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0c2V0Q291bnQocmVzdWx0KTtcclxuXHRcdFx0c2V0SXNDb3VudExvYWRlZCh0cnVlKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdHNldElzQ291bnRMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9XHJcblx0XHQpXHJcblx0XHRmZXRjaChgL2FwaS9jYXRlZ29yaWVzYCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0LnRoZW4oXHJcblx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0c2V0Q2F0KHJlc3VsdCk7XHJcblx0XHRcdHNldElzQ2F0TG9hZGVkKHRydWUpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0c2V0SXNDb3VudExvYWRlZCh0cnVlKTtcclxuXHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH1cclxuXHRcdClcclxuXHR9LCBbXSlcclxuXHJcblx0aWYgKGVycm9yKSB7XHJcblx0XHQgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuXHQgIH0gZWxzZSBpZiAoIWlzTG9hZGVkIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdjb21wbGV0ZScpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PHN2ZyBpZD1cIlJlYWN0TG9hZGVyXCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1zdGlsbFwiIHBvaW50cz1cIjAsMCAxMDAsMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1zdGlsbFwiIHBvaW50cz1cIjAsMCAwLDEwMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1hbmltYXRpb25cIiBwb2ludHM9XCIwLDAgMTAwLDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2UtYW5pbWF0aW9uXCIgcG9pbnRzPVwiMCwwIDAsMTAwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0ICB9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gKCAgXHJcblx0XHQ8PlxyXG5cdFx0PE5hdmJhcj48L05hdmJhcj5cclxuXHRcdDxSc0J1dHRvbj48L1JzQnV0dG9uPlxyXG5cdFx0PExpbmVzVG9wPjwvTGluZXNUb3A+XHJcblx0XHQ8TGluZXNCb3R0b20+PC9MaW5lc0JvdHRvbT5cclxuXHRcdFxyXG5cdFx0PFdvcmtwYWdlQ2xpZW50T25lIHNldExvYWRpbmc9e3NldExvYWRpbmd9IGNhdD17Y2F0fT48L1dvcmtwYWdlQ2xpZW50T25lPlxyXG5cdFx0ey8qIDxkaXYgc3R5bGU9e3sgZGlzcGxheTp1bmxvYWR9fT5cdFx0XHRcdFxyXG5cdFx0XHQ8c3ZnIGlkPVwiUmVhY3RMb2FkZXIyXCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj5cclxuXHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2Utc3RpbGxcIiBwb2ludHM9XCIwLDAgMTAwLDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLXN0aWxsXCIgcG9pbnRzPVwiMCwwIDAsMTAwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1hbmltYXRpb25cIiBwb2ludHM9XCIwLDAgMTAwLDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLWFuaW1hdGlvblwiIHBvaW50cz1cIjAsMCAwLDEwMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0PC9zdmc+XHJcblx0XHQ8L2Rpdj4gKi99XHJcblx0XHQ8V29ya3BhZ2VDbGllbnRUd28gbG9hZGVkPXt1bmxvYWR9IGRhdGE9e2l0ZW1zfSBwYWdlPXtuYnJ9IGNvdW50PXtjb3VudH0+PC9Xb3JrcGFnZUNsaWVudFR3bz5cclxuXHRcdDxNaW5pRm9vdGVyIGxvYWRlZD17dW5sb2FkfT48L01pbmlGb290ZXI+XHJcblx0XHRcclxuXHRcdHsvKiA8V29ya3BhZ2VUaHJlZT48L1dvcmtwYWdlVGhyZWU+XHJcblx0XHQ8V29ya3BhZ2VGb3VyPjwvV29ya3BhZ2VGb3VyPlxyXG5cdFx0PFdvcmtwYWdlRml2ZT48L1dvcmtwYWdlRml2ZT5cclxuXHRcdDxNaW5pRm9vdGVyPjwvTWluaUZvb3Rlcj4gKi99XHJcblx0XHQ8Lz5cclxuXHQgKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtwYWdlQ2xpZW50OyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBT1MgZnJvbSBcImFvc1wiO1xyXG5pbXBvcnQgXCJhb3MvZGlzdC9hb3MuY3NzXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBNZW51LCBNZW51SXRlbSwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBBcnJvd0ZvcndhcmRJb3NTaGFycEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRJb3NTaGFycCc7XHJcbmltcG9ydCBNdWlBY2NvcmRpb24sIHsgQWNjb3JkaW9uUHJvcHMgfSBmcm9tICdAbXVpL21hdGVyaWFsL0FjY29yZGlvbic7XHJcbmltcG9ydCBNdWlBY2NvcmRpb25TdW1tYXJ5LCB7XHJcbiAgQWNjb3JkaW9uU3VtbWFyeVByb3BzLFxyXG59IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWNjb3JkaW9uU3VtbWFyeSc7XHJcbmltcG9ydCBNdWlBY2NvcmRpb25EZXRhaWxzIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWNjb3JkaW9uRGV0YWlscyc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcbmNvbnN0IEFjY29yZGlvbiA9IHN0eWxlZCgocHJvcHMpID0+IChcclxuICA8TXVpQWNjb3JkaW9uIGRpc2FibGVHdXR0ZXJzIGVsZXZhdGlvbj17MH0gc3F1YXJlIHsuLi5wcm9wc30gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBtYXhXaWR0aDogXCIxODVweFwiLFxyXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLDApXCIsXHJcbiAgY29sb3I6IFwid2hpdGVcIixcclxufSkpO1xyXG5cclxuY29uc3QgQWNjb3JkaW9uU3VtbWFyeSA9IHN0eWxlZCgocHJvcHMpID0+IChcclxuICA8TXVpQWNjb3JkaW9uU3VtbWFyeVxyXG4gICAgZXhwYW5kSWNvbj17PEFycm93Rm9yd2FyZElvc1NoYXJwSWNvbiBzeD17eyBmb250U2l6ZTogXCIwLjlyZW1cIiB9fSAvPn1cclxuXHR7Li4ucHJvcHN9XHJcbiAgLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gIGJhY2tncm91bmRDb2xvcjpcclxuICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJkYXJsXCJcclxuICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgLjA1KVwiXHJcbiAgICAgIDogXCJyZ2JhKDAsIDAsIDAsIC4wMylcIixcclxuICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gIFwiJiAuTXVpQWNjb3JkaW9uU3VtbWFyeS1leHBhbmRJY29uV3JhcHBlci5NdWktZXhwYW5kZWRcIjoge1xyXG4gICAgdHJhbnNmb3JtOiBcInJvdGF0ZSg5MGRlZylcIixcclxuICB9LFxyXG4gIFwiJiAuTXVpQWNjb3JkaW9uU3VtbWFyeS1jb250ZW50XCI6IHtcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgQWNjb3JkaW9uRGV0YWlscyA9IHN0eWxlZChNdWlBY2NvcmRpb25EZXRhaWxzKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgcGFkZGluZ1RvcDogMCxcclxuICBtYXJnaW5Ub3A6IDAsXHJcbiAgbWF4SGVpZ2h0OiBcIjE1MHB4XCIsXHJcbiAgb3ZlcmZsb3c6IFwic2Nyb2xsXCIsXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIFdvcmtwYWdlQ2xpZW50T25lKHtzZXRMb2FkaW5nLCBjYXR9KSB7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpXHJcblx0ICB9LCBbMV0pO1xyXG5cclxuXHRjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IFJlYWN0LnVzZVN0YXRlKFwicGFuZWwxXCIpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAocGFuZWwpID0+IChldmVudCwgbmV3RXhwYW5kZWQpID0+IHtcclxuXHQgIHNldEV4cGFuZGVkKG5ld0V4cGFuZGVkID8gcGFuZWwgOiBmYWxzZSk7XHJcblx0fTtcclxuICBcclxuXHRjb25zdCBbd29yZHMsIHNldFdvcmRzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRsZXQgY2F0ZWdvcnkgPSBjYXQ7XHJcblx0bGV0IG1lbnUgPSBbXTtcclxuXHRsZXQgcmFuZG9tV29yZCA9IFtcclxuXHQgIFwiUsOJQUNUSVZJVMOJXCIsXHJcblx0ICBcIlBST1hJTUlUw4lcIixcclxuXHQgIFwiUEFTU0lPTlwiLFxyXG5cdCAgXCJTVFJBVMOJR0lFXCIsXHJcblx0ICBcIkVWRU5UXCIsXHJcblx0ICBcIkNPTlNFSUxcIixcclxuXHQgIFwiQ09NTVVOSUNBVElPTlwiLFxyXG5cdCAgXCJSw4pWRVJcIixcclxuXHQgIFwiQU1CSVRJT05cIixcclxuXHQgIFwiSU1BR0lOQVRJT05cIixcclxuXHQgIFwiYWdpclwiLFxyXG5cdCAgXCJzJ2FkYXB0ZXJcIixcclxuXHQgIFwiYW50aWNpcGVyXCIsXHJcblx0ICBcImF1dG9ub21pZVwiLFxyXG5cdCAgXCJjcm9pc3NhbmNlXCIsXHJcblx0ICBcImTDqWZpXCIsXHJcblx0ICBcInBsYW5pZmllclwiLFxyXG5cdCAgXCJwb3NpdGl2ZXJcIixcclxuXHQgIFwiZGlzcG9uaWJpbGl0w6lcIixcclxuXHQgIFwiZHluYW1pc21lXCIsXHJcblx0ICBcIsOpY291dGVcIixcclxuXHQgIFwic2VydmljZVwiLFxyXG5cdCAgXCJwcsOpdmlzaW9uXCIsXHJcblx0ICBcInTDqW5hY2l0w6lcIixcclxuXHQgIFwicXVhbGl0w6lcIixcclxuXHQgIFwibW9iaWxpc2VyXCIsXHJcblx0ICBcIm7DqWdvY2llclwiLFxyXG5cdCAgXCJvYmplY3RpZnNcIixcclxuXHQgIFwib3B0aW1pc2VyXCIsXHJcblx0ICBcImNoYWxsZW5nZVwiLFxyXG5cdCAgXCJyw6l1c3NpclwiLFxyXG5cdCAgXCJleGNlbGxlbmNlXCIsXHJcblx0ICBcInLDqWFsaXNlclwiLFxyXG5cdCAgXCJyw6lzdWx0YXRzXCIsXHJcblx0ICBcImTDqXZlbG9wcGVyXCIsXHJcblx0ICBcInNhdm9pcmZhaXJlXCIsXHJcblx0ICBcImRpYWxvZ3VlXCIsXHJcblx0ICBcInByw6l2b2lyXCIsXHJcblx0ICBcInN5bmVyZ2llXCIsXHJcblx0ICBcInByb2pldFwiLFxyXG5cdCAgXCJpbm5vdmF0aW9uXCIsXHJcblx0ICBcIm1vdGl2YXRpb25cIl07XHJcbiAgXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHQgIGZ1bmN0aW9uIGdldFdvcmQoKSB7XHJcblx0XHRsZXQgd29yZCA9IHJhbmRvbVdvcmRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZG9tV29yZC5sZW5ndGgpXTtcclxuXHRcdHJhbmRvbVdvcmQuc3BsaWNlKHJhbmRvbVdvcmQuaW5kZXhPZih3b3JkKSk7XHJcblx0XHRyZXR1cm4gd29yZDtcclxuXHQgIH1cclxuICBcclxuXHQgIGxldCB3b3JkMSA9IGdldFdvcmQoKTtcclxuXHQgIGxldCB3b3JkMiA9IGdldFdvcmQoKTtcclxuXHQgIHNldFdvcmRzKFt3b3JkMSwgd29yZDJdKTtcclxuXHR9LCBbXSk7XHJcblx0QU9TLmluaXQoKTtcclxuXHRjYXRlZ29yeS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcblx0ICBsZXQgaXRlbSA9IChcclxuXHRcdCAgPGEga2V5PXtlbGVtZW50LmlkfSBzdHlsZT17e3RleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwid2hpdGVcIn19IGhyZWY9e2Avc2VhcmNoY2F0L2NsaWVudC8ke2VsZW1lbnQuaWR9LyR7ZWxlbWVudC5jYXRlZ29yaWV9YH0+XHJcblx0XHRcdCAgPHBcclxuXHRcdFx0ICBcclxuXHRcdFx0ICBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIix0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCJ9fVxyXG5cdFx0XHQgIGNsYXNzTmFtZT1cImxpZ2h0XCJcclxuXHRcdCAgPlxyXG5cdFx0XHQgIHtlbGVtZW50LmNhdGVnb3JpZX1cclxuXHRcdCAgPC9wPlxyXG5cdFx0PC9hPlxyXG4gIFxyXG5cdCAgKTtcclxuXHQgIG1lbnUucHVzaChpdGVtKTtcclxuXHR9KTtcclxuXHRpZiAod29yZHMubGVuZ3RoID4gMCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdCAgPD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kMVwiIGFsdD1cImhvbWVwYWdlXCI+XHJcblx0XHRcdCAgPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHQgIDwvdmlkZW8+XHJcblx0XHJcblx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5Qmx1ZVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cdFx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyMlwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdCAgPExpbmsgdG89XCIvXCI+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0ICBzcmM9XCIvemVuaXRoL2ltYWdlcy9iSU8xcjlGLnBuZ1wiXHJcblx0XHRcdFx0XHRcdCAgYWx0PVwiTG9nb1wiXHJcblx0XHRcdFx0XHRcdCAgd2lkdGg9ezIwMH1cclxuXHRcdFx0XHRcdFx0ICBjbGFzc05hbWU9XCJjZW50ZXJcIlxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0ICA8L0xpbms+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid29ya3BhZ2VUZXh0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHQgIDxoMSBjbGFzc05hbWU9XCJtZWRpdW1cIj5Tw4lMw4lDVElPTiBERSBDTElFTlQ8L2gxPlxyXG5cdFx0XHRcdFx0ICA8ZGl2XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbHVtbnNcIlxyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiLCBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX1cclxuXHRcdFx0XHRcdCAgPlxyXG5cdFx0XHRcdFx0XHQ8cCBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiIH19IGNsYXNzTmFtZT1cImxpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdCAge3dvcmRzWzBdfSAuIHt3b3Jkc1sxXX0gLntcIiBcIn1cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHQ8QWNjb3JkaW9uXHJcblx0XHRcdFx0XHRcdCAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZShcInBhbmVsMVwiKX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQgIDxBY2NvcmRpb25TdW1tYXJ5XHJcblx0XHRcdFx0XHRcdFx0YXJpYS1jb250cm9scz1cInBhbmVsMWQtY29udGVudFwiXHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJwYW5lbDFkLWhlYWRlclwiXHJcblx0XHRcdFx0XHRcdCAgPlxyXG5cdFx0XHRcdFx0XHRcdDxwIHN0eWxlPXt7IG1hcmdpblRvcDogXCI1cHhcIiB9fT4mbmJzcDtDQVTDiUdPUklFPC9wPlxyXG5cdFx0XHRcdFx0XHQgIDwvQWNjb3JkaW9uU3VtbWFyeT5cclxuXHRcdFx0XHRcdFx0ICA8QWNjb3JkaW9uRGV0YWlscz57bWVudX08L0FjY29yZGlvbkRldGFpbHM+XHJcblx0XHRcdFx0XHRcdDwvQWNjb3JkaW9uPlxyXG5cdFx0XHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0ICA8Lz5cclxuXHRcdCk7XHJcblx0ICB9XHJcblx0fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya3BhZ2VDbGllbnRPbmU7XHJcblxyXG5cclxuXHJcbiIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSBcInJlYWN0LXBhcmFsbGF4XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICdyYy1wYWdpbmF0aW9uJztcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXNoZWV0cy9idWxtYS9ncmlkL2NvbHVtbnMuc2Fzcyc7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzaGVldHMvYnVsbWEvaGVscGVycy9zcGFjaW5nLnNhc3MnO1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlc2hlZXRzL3BhZ2luYXRpb24ubGVzcycgXHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gV29ya3BhZ2VDbGllbnRUd28oe2RhdGEsIHBhZ2UsIGNvdW50LCBsb2FkZWR9KSB7XHJcbiAgbGV0IHBhZ2VOYnIgPSBNYXRoLmNlaWwoY291bnQgLyAyMClcclxuICBsZXQgbmJyID0gcGFyc2VJbnQocGFnZSlcclxuICBmdW5jdGlvbiBvbkNoYW5nZShwYXJhbXMpIHtcclxuICAgIGRvY3VtZW50LmxvY2F0aW9uID0gYC9jbGllbnRzLyR7cGFyYW1zfWBcclxuICB9XHJcblxyXG4gIGxldCBib3ggPSBbXTtcclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgbGV0IGl0ZW0gPSAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjb2x1bW4gY29sdW1ucyBpcy1vbmUtZmlmdGggaXMtY2VudGVyZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXMtaGFsZlwiPlxyXG4gICAgICAgICAgPGEgaHJlZj17XCIvY2xpZW50L1wiICsgZGF0YVtpbmRleF0uaWR9PlxyXG5cdFx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj5cclxuXHRcdFx0XHRcdDxwIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIgfX0gY2xhc3NOYW1lPVwidGV4dERlY29cIj5cclxuXHRcdFx0XHRcdCAge2RhdGFbaW5kZXhdLm1pc3Npb259XHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHR7ZGF0YVtpbmRleF0uaGFzT3duUHJvcGVydHkoJ2hlYWRlcicpID8gKDxpbWdcclxuXHRcdFx0XHRcdCAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxyXG5cdFx0XHRcdFx0ICBzcmM9e1wiL2ltYWdlcy9pbWFnZWNsaWVudC9cIiArIGRhdGFbaW5kZXhdLmhlYWRlcn1cclxuXHRcdFx0XHRcdCAgYWx0PVwiXCJcclxuXHRcdFx0XHRcdC8+KSA6ICg8aW1nIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIn19IHNyYz17XCIvemVuaXRoL2F1dHJlL25vSW1nLnBuZ1wifSBhbHQ9XCJcIi8+KX1cclxuXHRcdFx0XHQgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICAgIGJveC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgaWYobG9hZGVkID09IHRydWUpe1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9aMXpJSkNLay5qcGVnXCIgYmx1cj17eyBtaW46IC0xLCBtYXg6IDMgfX0gc3RyZW5ndGg9ezQwMH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTZcIiBhbHQ9XCJhY3Rpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tdWx0aWxpbmUgaXMtY2VudGVyZWRcIj5cclxuICAgICAgICAgICAgICAgICAge2JveH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW1vYmlsZSBpcy1jZW50ZXJlZFwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjE1MHB4XCJ9fT4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50PXtuYnJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsPXtwYWdlTmJyfVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dUaXRsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuTCBjZW50ZXIgbGlnaHQgbGV0dGVyU3BhY2luZ01cIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvY29udGFjdFwiIGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVm9pciBwbHVzXHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1BhcmFsbGF4PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgV29ya3BhZ2VDbGllbnRUd287IiwiaW1wb3J0IFdvcmtwYWdlT25lIGZyb20gXCIuL193b3JrcGFnZU9uZVwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL19uYXZiYXInO1xyXG5pbXBvcnQgUnNCdXR0b24gZnJvbSAnLi4vX3JzQnV0dG9uJztcclxuaW1wb3J0IExpbmVzVG9wIGZyb20gJy4uL19saW5lc1RvcCc7XHJcbmltcG9ydCBMaW5lc0JvdHRvbSBmcm9tICcuLi9fbGluZXNCb3R0b20nO1xyXG5pbXBvcnQgV29ya3BhZ2VUd28gZnJvbSBcIi4vX3dvcmtwYWdlVHdvXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjsgXHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBNaW5pRm9vdGVyIGZyb20gXCIuLi9Ib21lcGFnZS9fbWluaUZvb3RlclwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFdvcmtwYWdlKCkge1xyXG5cdGNvbnN0IHsgbmJyIH0gPSB1c2VQYXJhbXMoKTtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0NvdW50TG9hZGVkLCBzZXRJc0NvdW50TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNDYXRMb2FkZWQsIHNldElzQ2F0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbY2F0LCBzZXRDYXRdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtsb2FkLCBzZXRMb2FkXSA9IHVzZVN0YXRlKFwiaGlkZGVuXCIpXHJcblx0Y29uc3QgW3VubG9hZCwgc2V0VW5sb2FkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuXHRjb25zdCBzZXRMb2FkaW5nID0gcGFyYW0gPT4ge1xyXG5cdFx0aWYocGFyYW0gPT0gdHJ1ZSkge1xyXG5cdFx0XHRzZXRMb2FkKFwidmlzaWJsZVwiKTtcdFx0XHJcblx0XHRcdHNldFVubG9hZCh0cnVlKTtcdFx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuXHRcdFx0ZmV0Y2goYC9nZXR0QWxsUHJvamVjdC8ke25icn1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdHNldEl0ZW1zKHJlc3VsdCk7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHRcdC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0XHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblxyXG5cdFx0XHRmZXRjaChgL2dldENvdW50L3Byb2pldGAse21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0XHQudGhlbihcclxuXHRcdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0c2V0Q291bnQocmVzdWx0KTtcclxuXHRcdFx0XHRzZXRJc0NvdW50TG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNDb3VudExvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0XHRmZXRjaChgL2FwaS9jYXRlZ29yaWVzYCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRzZXRDYXQocmVzdWx0KTtcclxuXHRcdFx0XHRzZXRJc0NhdExvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHRcdC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0XHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdHNldElzQ291bnRMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdH0sIFtdKVxyXG5cclxuXHRpZiAoZXJyb3IpIHtcclxuXHRcdCByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG5cdCAgfSBlbHNlIGlmICghaXNMb2FkZWQgfHwgIWlzQ291bnRMb2FkZWR8fCAhaXNDYXRMb2FkZWQgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJykge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8c3ZnIGlkPVwiUmVhY3RMb2FkZXJcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLXN0aWxsXCIgcG9pbnRzPVwiMCwwIDEwMCwwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLXN0aWxsXCIgcG9pbnRzPVwiMCwwIDAsMTAwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLWFuaW1hdGlvblwiIHBvaW50cz1cIjAsMCAxMDAsMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1hbmltYXRpb25cIiBwb2ludHM9XCIwLDAgMCwxMDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHQgIH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAoICBcclxuXHRcdDw+XHJcblx0XHQ8TmF2YmFyPjwvTmF2YmFyPlxyXG5cdFx0PFJzQnV0dG9uPjwvUnNCdXR0b24+XHJcblx0XHQ8TGluZXNUb3A+PC9MaW5lc1RvcD5cclxuXHRcdDxMaW5lc0JvdHRvbT48L0xpbmVzQm90dG9tPlxyXG5cdFx0PFdvcmtwYWdlT25lIHNldExvYWRpbmc9e3NldExvYWRpbmd9IGNhdD17Y2F0fT48L1dvcmtwYWdlT25lPlxyXG5cdFx0PFdvcmtwYWdlVHdvIGxvYWRlZD17dW5sb2FkfSBkYXRhPXtpdGVtc30gcGFnZT17bmJyfSBjb3VudD17Y291bnR9PjwvV29ya3BhZ2VUd28+XHJcblx0XHQ8TWluaUZvb3RlciBsb2FkZWQ9e3VubG9hZH0+PC9NaW5pRm9vdGVyPlxyXG5cdFx0PC8+XHJcblx0ICk7XHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBXb3JrcGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XHJcbmltcG9ydCBBcnJvd0ZvcndhcmRJb3NTaGFycEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRJb3NTaGFycCc7XHJcbmltcG9ydCBNdWlBY2NvcmRpb24gZnJvbSAnQG11aS9tYXRlcmlhbC9BY2NvcmRpb24nO1xyXG5pbXBvcnQgTXVpQWNjb3JkaW9uU3VtbWFyeSBmcm9tICdAbXVpL21hdGVyaWFsL0FjY29yZGlvblN1bW1hcnknO1xyXG5pbXBvcnQgTXVpQWNjb3JkaW9uRGV0YWlscyBmcm9tICdAbXVpL21hdGVyaWFsL0FjY29yZGlvbkRldGFpbHMnO1xyXG5cclxuXHJcbmNvbnN0IEFjY29yZGlvbiA9IHN0eWxlZCgocHJvcHMpID0+IChcclxuICA8TXVpQWNjb3JkaW9uIGRpc2FibGVHdXR0ZXJzIGVsZXZhdGlvbj17MH0gc3F1YXJlIHsuLi5wcm9wc30gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBtYXhXaWR0aDogXCIxODVweFwiLFxyXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLDApXCIsXHJcbiAgY29sb3I6IFwid2hpdGVcIixcclxufSkpO1xyXG5cclxuY29uc3QgQWNjb3JkaW9uU3VtbWFyeSA9IHN0eWxlZCgocHJvcHMpID0+IChcclxuICA8TXVpQWNjb3JkaW9uU3VtbWFyeVxyXG4gICAgZXhwYW5kSWNvbj17PEFycm93Rm9yd2FyZElvc1NoYXJwSWNvbiBzeD17eyBmb250U2l6ZTogXCIwLjlyZW1cIiB9fSAvPn1cclxuXHR7Li4ucHJvcHN9XHJcbiAgLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gIGJhY2tncm91bmRDb2xvcjpcclxuICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJkYXJsXCJcclxuICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgLjA1KVwiXHJcbiAgICAgIDogXCJyZ2JhKDAsIDAsIDAsIC4wMylcIixcclxuICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gIFwiJiAuTXVpQWNjb3JkaW9uU3VtbWFyeS1leHBhbmRJY29uV3JhcHBlci5NdWktZXhwYW5kZWRcIjoge1xyXG4gICAgdHJhbnNmb3JtOiBcInJvdGF0ZSg5MGRlZylcIixcclxuICB9LFxyXG4gIFwiJiAuTXVpQWNjb3JkaW9uU3VtbWFyeS1jb250ZW50XCI6IHtcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgQWNjb3JkaW9uRGV0YWlscyA9IHN0eWxlZChNdWlBY2NvcmRpb25EZXRhaWxzKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgcGFkZGluZ1RvcDogMCxcclxuICBtYXJnaW5Ub3A6IDAsXHJcbiAgbWF4SGVpZ2h0OiBcIjE1MHB4XCIsXHJcbiAgb3ZlcmZsb3c6IFwic2Nyb2xsXCIsXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIFdvcmtwYWdlT25lKHtzZXRMb2FkaW5nLCBjYXR9KSB7XHJcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSBSZWFjdC51c2VTdGF0ZShcInBhbmVsMVwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHBhbmVsKSA9PiAoZXZlbnQsIG5ld0V4cGFuZGVkKSA9PiB7XHJcbiAgICBzZXRFeHBhbmRlZChuZXdFeHBhbmRlZCA/IHBhbmVsIDogZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgfSwgWzFdKTtcclxuXHJcbiAgY29uc3QgW3dvcmRzLCBzZXRXb3Jkc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgbGV0IGNhdGVnb3J5ID0gY2F0O1xyXG4gIGxldCBtZW51ID0gW107XHJcbiAgbGV0IHJhbmRvbVdvcmQgPSBbXHJcbiAgICBcIlLDiUFDVElWSVTDiVwiLFxyXG4gICAgXCJQUk9YSU1JVMOJXCIsXHJcbiAgICBcIlBBU1NJT05cIixcclxuICAgIFwiU1RSQVTDiUdJRVwiLFxyXG4gICAgXCJFVkVOVFwiLFxyXG4gICAgXCJDT05TRUlMXCIsXHJcbiAgICBcIkNPTU1VTklDQVRJT05cIixcclxuICAgIFwiUsOKVkVSXCIsXHJcbiAgICBcIkFNQklUSU9OXCIsXHJcbiAgICBcIklNQUdJTkFUSU9OXCIsXHJcbiAgICBcImFnaXJcIixcclxuICAgIFwicydhZGFwdGVyXCIsXHJcbiAgICBcImFudGljaXBlclwiLFxyXG4gICAgXCJhdXRvbm9taWVcIixcclxuICAgIFwiY3JvaXNzYW5jZVwiLFxyXG4gICAgXCJkw6lmaVwiLFxyXG4gICAgXCJwbGFuaWZpZXJcIixcclxuICAgIFwicG9zaXRpdmVyXCIsXHJcbiAgICBcImRpc3BvbmliaWxpdMOpXCIsXHJcbiAgICBcImR5bmFtaXNtZVwiLFxyXG4gICAgXCLDqWNvdXRlXCIsXHJcbiAgICBcInNlcnZpY2VcIixcclxuICAgIFwicHLDqXZpc2lvblwiLFxyXG4gICAgXCJ0w6luYWNpdMOpXCIsXHJcbiAgICBcInF1YWxpdMOpXCIsXHJcbiAgICBcIm1vYmlsaXNlclwiLFxyXG4gICAgXCJuw6lnb2NpZXJcIixcclxuICAgIFwib2JqZWN0aWZzXCIsXHJcbiAgICBcIm9wdGltaXNlclwiLFxyXG4gICAgXCJjaGFsbGVuZ2VcIixcclxuICAgIFwicsOpdXNzaXJcIixcclxuICAgIFwiZXhjZWxsZW5jZVwiLFxyXG4gICAgXCJyw6lhbGlzZXJcIixcclxuICAgIFwicsOpc3VsdGF0c1wiLFxyXG4gICAgXCJkw6l2ZWxvcHBlclwiLFxyXG4gICAgXCJzYXZvaXJmYWlyZVwiLFxyXG4gICAgXCJkaWFsb2d1ZVwiLFxyXG4gICAgXCJwcsOpdm9pclwiLFxyXG4gICAgXCJzeW5lcmdpZVwiLFxyXG4gICAgXCJwcm9qZXRcIixcclxuICAgIFwiaW5ub3ZhdGlvblwiLFxyXG4gICAgXCJtb3RpdmF0aW9uXCJdO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gZ2V0V29yZCgpIHtcclxuICAgICAgbGV0IHdvcmQgPSByYW5kb21Xb3JkW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmRvbVdvcmQubGVuZ3RoKV07XHJcbiAgICAgIHJhbmRvbVdvcmQuc3BsaWNlKHJhbmRvbVdvcmQuaW5kZXhPZih3b3JkKSk7XHJcbiAgICAgIHJldHVybiB3b3JkO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB3b3JkMSA9IGdldFdvcmQoKTtcclxuICAgIGxldCB3b3JkMiA9IGdldFdvcmQoKTtcclxuICAgIHNldFdvcmRzKFt3b3JkMSwgd29yZDJdKTtcclxuICB9LCBbXSk7XHJcbiAgY2F0ZWdvcnkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgbGV0IGl0ZW0gPSAoXHJcblx0XHQ8YSBrZXk9e2VsZW1lbnQuaWR9IHN0eWxlPXt7dGV4dERlY29yYXRpb246IFwibm9uZVwiLCBjb2xvcjogXCJ3aGl0ZVwifX0gaHJlZj17YC9zZWFyY2hjYXQvcHJvamV0LyR7ZWxlbWVudC5pZH0vJHtlbGVtZW50LmNhdGVnb3JpZX1gfT5cclxuXHRcdFx0PHBcclxuXHRcdFx0XHJcblx0XHRcdHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwid2hpdGVcIn19XHJcblx0XHRcdGNsYXNzTmFtZT1cImxpZ2h0XCJcclxuXHRcdD5cclxuXHRcdFx0e2VsZW1lbnQuY2F0ZWdvcmllfVxyXG5cdFx0PC9wPlxyXG5cdCAgPC9hPlxyXG5cclxuICAgICk7XHJcbiAgICBtZW51LnB1c2goaXRlbSk7XHJcbiAgfSk7XHJcbiAgaWYgKHdvcmRzLmxlbmd0aCA+IDApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kMVwiIGFsdD1cImhvbWVwYWdlXCI+XHJcbiAgICAgICAgICA8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG4gICAgICAgICAgPC92aWRlbz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHlCbHVlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlcjJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi96ZW5pdGgvaW1hZ2VzL2JJTzFyOUYucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrcGFnZVRleHRcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1lZGl1bVwiPlPDiUzDiUNUSU9OIERFIFBST0pFVDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2x1bW5zXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiLCBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIgfX0gY2xhc3NOYW1lPVwibGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt3b3Jkc1swXX0gLiB7d29yZHNbMV19IC57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoXCJwYW5lbDFcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cInBhbmVsMWQtY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFuZWwxZC1oZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+Jm5ic3A7Q0FUw4lHT1JJRTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPnttZW51fTwvQWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya3BhZ2VPbmU7XHJcbiIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSBcInJlYWN0LXBhcmFsbGF4XCI7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ3JjLXBhZ2luYXRpb24nO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFdvcmtwYWdlVHdvKHtkYXRhLCBwYWdlLCBjb3VudCwgbG9hZGVkfSkge1xyXG4gIGNvbnNvbGUubG9nKGNvdW50KVxyXG4gIGxldCBwYWdlTmJyID0gTWF0aC5jZWlsKGNvdW50IC8gMjApXHJcbiAgbGV0IG5iciA9IHBhcnNlSW50KHBhZ2UpXHJcbiAgZnVuY3Rpb24gb25DaGFuZ2UocGFyYW1zKSB7XHJcbiAgICBkb2N1bWVudC5sb2NhdGlvbiA9IGAvcHJvamV0cy8ke3BhcmFtc31gXHJcbiAgfVxyXG5cclxuICBsZXQgYm94ID0gW107XHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGEubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGxldCBpdGVtID0gKFxyXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY29sdW1uIGNvbHVtbnMgaXMtb25lLWZpZnRoIGlzLWNlbnRlcmVkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzLWhhbGZcIj5cclxuICAgICAgICAgIDxhIGhyZWY9e1wiL3Byb2pldC9cIiArIGRhdGFbaW5kZXhdLmlkfT5cclxuXHRcdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+XHJcblx0XHRcdFx0XHQ8cCBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiIH19IGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcblx0XHRcdFx0XHQgIHtkYXRhW2luZGV4XS5taXNzaW9ufVxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0e2RhdGFbaW5kZXhdLmhlYWRlciA/ICg8aW1nXHJcblx0XHRcdFx0XHQgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuXHRcdFx0XHRcdCAgc3JjPXtcIi9pbWFnZXMvaW1hZ2Vwcm9qZXQvXCIgKyBkYXRhW2luZGV4XS5oZWFkZXJ9XHJcblx0XHRcdFx0XHQgIGFsdD1cIlwiXHJcblx0XHRcdFx0XHQvPikgOiAoPGltZyBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCJ9fSBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn0gYWx0PVwiXCIvPil9XHJcblx0XHRcdFx0ICA8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgICBib3gucHVzaChpdGVtKTtcclxuICAgIH1cclxuICBpZihsb2FkZWQpe1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL3plbml0aC9pbWFnZXMvWjF6SUpDS2suanBlZ1wiIGJsdXI9e3sgbWluOiAtMSwgbWF4OiAzIH19IHN0cmVuZ3RoPXs0MDB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNlwiIGFsdD1cImFjdGlvblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC02XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW11bHRpbGluZSBpcy1jZW50ZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAge2JveH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbW9iaWxlIGlzLWNlbnRlcmVkXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTUwcHhcIn19PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgICAgY3VycmVudD17bmJyfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXsxfVxyXG4gICAgICAgICAgICAgICAgICB0b3RhbD17cGFnZU5icn1cclxuICAgICAgICAgICAgICAgICAgc2hvd1RpdGxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5MIGNlbnRlciBsaWdodCBsZXR0ZXJTcGFjaW5nTVwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvY29udGFjdFwiIGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcbiAgICAgICAgICAgICAgICAgIFZvaXIgcGx1c1xyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9QYXJhbGxheD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya3BhZ2VUd287XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBMaW5rLCBEaXJlY3RMaW5rLCBFbGVtZW50LCBFdmVudHMsIGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsLCBzY3JvbGxTcHksIHNjcm9sbGVyIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJyBcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbi8vaW1wb3J0IHNjcm9sbEludG9WaWV3IGZyb20gJ3Njcm9sbC1pbnRvLXZpZXctaWYtbmVlZGVkJ1xyXG5pbXBvcnQgSG9tZXBhZ2UgZnJvbSAnLi9Ib21lcGFnZS9faG9tZXBhZ2UnO1xyXG5pbXBvcnQgV29yZHBhZ2UgZnJvbSAnLi9Ib21lcGFnZS9fd29yZCc7XHJcbmltcG9ydCBFbW90aW9uIGZyb20gJy4vSG9tZXBhZ2UvX2Vtb3Rpb24nO1xyXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vSG9tZXBhZ2UvX2FjdGlvbic7XHJcbmltcG9ydCBDcmVhdGlvbiBmcm9tICcuL0hvbWVwYWdlL19jcmVhdGlvbic7XHJcbmltcG9ydCBTYXRpc2ZhY3Rpb24gZnJvbSAnLi9Ib21lcGFnZS9fc2F0aXNmYWN0aW9uJztcclxuaW1wb3J0IENoaWZmcmVzIGZyb20gJy4vSG9tZXBhZ2UvX2NoaWZmcmVzJztcclxuaW1wb3J0IFZpc2lvbiBmcm9tICcuL0hvbWVwYWdlL192aXNpb24nO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vSG9tZXBhZ2UvX2Zvb3Rlcic7XHJcbmltcG9ydCBJbnN0YWZsdXggZnJvbSAnLi9Ib21lcGFnZS9faW5zdGEnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vX25hdmJhcic7XHJcbmltcG9ydCBSc0J1dHRvbiBmcm9tICcuL19yc0J1dHRvbic7XHJcbmltcG9ydCBMaW5lc1RvcCBmcm9tICcuL19saW5lc1RvcCc7XHJcbmltcG9ydCBMaW5lc0JvdHRvbSBmcm9tICcuL19saW5lc0JvdHRvbSc7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9sb2FkZXIuY3NzXCJcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuXHRjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbaW5zdGEsIHNldEluc3RhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRmZXRjaChgL2dldHRBbGxDcmVhdGlvbmAse21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdC50aGVuKFxyXG5cdFx0ICAocmVzdWx0KSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRzZXRJdGVtcyhyZXN1bHQpXHJcblx0XHQgIH0sXHJcblx0XHQgIC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0ICAvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdCAgLy8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHQgIChlcnJvcikgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcclxuXHRcdCAgfVxyXG5cdFx0KVxyXG5cclxuXHRcdC8vIGZldGNoKGBodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2FnZW5jZXplbml0aC8/X19hPTE/X19hPTEmX19kPWRpc2Ase21ldGhvZDonR0VUJyx9KVxyXG5cdFx0Ly8gLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHQvLyAudGhlbigocmVzdWx0SW5zdGEpID0+IHtcclxuXHRcdC8vIFx0Y29uc29sZS5sb2coXCJ0b3RvXCIpXHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKHJlc3VsdEluc3RhKVxyXG5cdFx0Ly8gICB9LFxyXG5cdFx0Ly8gICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdC8vICAgLy8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHQvLyAgIC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0Ly8gICAoZXJyb3IpID0+IHtcclxuXHRcdC8vIFx0Y29uc29sZS5sb2coZXJyb3IpXHJcblx0XHQvLyAgIH1cclxuXHRcdC8vIClcclxuXHQgIH0sIFtdKVxyXG5cclxuXHRpZihpc0xvYWRlZCA9PSBmYWxzZSB8fCBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnY29tcGxldGUnKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcdDxzdmcgaWQ9XCJSZWFjdExvYWRlclwiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+XHJcblx0XHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2Utc3RpbGxcIiBwb2ludHM9XCIwLDAgMTAwLDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2Utc3RpbGxcIiBwb2ludHM9XCIwLDAgMCwxMDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2UtYW5pbWF0aW9uXCIgcG9pbnRzPVwiMCwwIDEwMCwwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLWFuaW1hdGlvblwiIHBvaW50cz1cIjAsMCAwLDEwMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1lbHNle1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0PE5hdmJhcj48L05hdmJhcj5cclxuXHRcdFx0PExpbmVzVG9wPjwvTGluZXNUb3A+XHJcblx0XHRcdDxMaW5lc0JvdHRvbT48L0xpbmVzQm90dG9tPlxyXG5cdFx0XHQ8UnNCdXR0b24+PC9Sc0J1dHRvbj5cclxuXHRcdFx0XHJcblxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDFcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+XHRcdFx0XHJcblxyXG5cdFx0XHRcdFx0PEhvbWVwYWdlID48L0hvbWVwYWdlPlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0PC9FbGVtZW50Plx0XHJcblxyXG5cdFx0XHRcdHsvKiA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsIGhlaWdodDpcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIn19PjwvZGl2PiAqL31cclxuXHRcdFx0XHQ8V29yZHBhZ2UgPjwvV29yZHBhZ2U+XHJcblx0XHRcdFx0ey8qIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwifX0+PC9kaXY+ICovfVxyXG5cclxuXHJcblxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDNcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+XHJcblxyXG5cdFx0XHRcdFx0PEVtb3Rpb24gPjwvRW1vdGlvbj5cclxuXHJcblx0XHRcdFx0PC9FbGVtZW50PlxyXG5cclxuXHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50NFwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj5cclxuXHRcdFx0XHRcdDxBY3Rpb24gPjwvQWN0aW9uPlxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50NVwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj5cclxuXHJcblx0XHRcdFx0XHQ8Q3JlYXRpb24gaXRlbT17aXRlbXN9PjwvQ3JlYXRpb24+XHJcblxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50NlwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj5cclxuXHJcblx0XHRcdFx0XHQ8U2F0aXNmYWN0aW9uID48L1NhdGlzZmFjdGlvbj5cclxuXHJcblx0XHRcdFx0PC9FbGVtZW50PlxyXG5cclxuXHRcdFx0XHQ8RWxlbWVudCBuYW1lPVwic2Nyb2xsLXRvLWVsZW1lbnQ3XCIgY2xhc3NOYW1lPVwiZWxlbWVudFwiPlxyXG5cclxuXHRcdFx0XHRcdFx0PENoaWZmcmVzID48L0NoaWZmcmVzPlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHQ8L0VsZW1lbnQ+XHJcblxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDhcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+XHJcblxyXG5cdFx0XHRcdFx0PFZpc2lvbiA+PC9WaXNpb24+XHJcblxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50OFwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj5cclxuXHJcblx0XHRcdFx0XHRcdDxJbnN0YWZsdXggPjwvSW5zdGFmbHV4PlxyXG5cclxuXHRcdFx0XHQ8L0VsZW1lbnQ+XHJcblxyXG5cclxuXHJcblx0XHRcdFx0PEZvb3RlciA+PC9Gb290ZXI+XHJcblxyXG5cclxuXHRcdFx0ey8qIDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDEwXCIgY2xhc3NOYW1lPVwiZWxlbWVudFwiPjwvRWxlbWVudD4gKi99XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcdFx0XHJcblx0fVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJmdW5jdGlvbiBMaW5lc0JvdHRvbSgpIHtcclxuXHRyZXR1cm4gKCBcclxuXHRcdDw+XHJcblxyXG5cdDxkaXYgY2xhc3NOYW1lPVwibGluZUJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEyMDBcIj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibGluZTRcIj48L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibGluZTUgbGluZUFuaW1lMlwiPjwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cdFx0PC8+XHJcblx0ICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmVzQm90dG9tOyIsImZ1bmN0aW9uIExpbmVzVG9wKCkge1xyXG5cdGxldCBhdWRpbyA9IG5ldyBBdWRpbyhcIi96ZW5pdGgvYXV0cmUvSG9yaXpvbi5tcDNcIilcclxuXHJcblx0Y29uc3Qgc3RhcnQgPSAoKSA9PiB7XHJcblx0ICBhdWRpby5wbGF5KClcclxuXHR9XHJcblx0cmV0dXJuICggXHJcblx0XHQ8PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmVBXCIgIGRhdGEtYW9zPVwiZmFkZS1kb3duXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaW5lMlwib25DbGljaz17c3RhcnR9PjwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGluZTMgbGluZUFuaW1lXCIgPjwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvPlxyXG5cdCApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5lc1RvcDsiLCJpbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIG5hdmJhcigpIHtcclxuXHJcbiAgQU9TLmluaXQoKVxyXG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFNlYXJjaElucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IHRlbGVwb3J0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxvY2F0aW9uLnJlcGxhY2UoJy9zZWFyY2gvJyArIHNlYXJjaElucHV0KTtcclxuICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9zZWFyY2gvXCIrc2VhcmNoSW5wdXRcclxuICB9XHJcbiAgXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblxyXG4gICAgPGlucHV0IGlkPVwibWVudV9fdG9nZ2xlXCIgdHlwZT1cImNoZWNrYm94XCIgIC8+XHJcblxyXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWVudV9fYnRuXCIgaHRtbEZvcj1cIm1lbnVfX3RvZ2dsZVwiIGRhdGEtYW9zPVwiZmFkZS1kb3duXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMjAwXCI+XHJcbiAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgXHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51X19ib3hcIiBkYXRhLWFvcz1cImZhZGUtcmlnaHRcIj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGVsZXBvcnR9PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnNzUlJ319IGNsYXNzTmFtZT1cImZvcm1fX2dyb3VwIGZpZWxkIGRpdkMxIG1lbnVfX2l0ZW0xXCIgPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImlucHV0XCIgc2l6ZT1cIjE1XCIgY2xhc3NOYW1lPVwiZm9ybV9fZmllbGRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiBpZD1cImVtYWlsXCIgdmFsdWU9e3NlYXJjaElucHV0fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSByZXF1aXJlZD48L2lucHV0PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtX19sYWJlbFwiPlJlY2hlcmNoZTwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWVudV9faXRlbSBsaWdodCBsZXR0ZXJTcGFjaW5nU1wiPjxMaW5rIGNsYXNzTmFtZT1cInRleHREZWNvIG1hcmdpblN0b3BcIiB0bz1cIi9cIj5BQ0NVRUlMPC9MaW5rPjwvaDU+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lbnVfX2l0ZW0gbGlnaHQgbGV0dGVyU3BhY2luZ1NcIj48TGluayBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiIHRvPVwiL2NsaWVudHMvMVwiPkNMSUVOVFM8L0xpbms+PC9oNT5cclxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWVudV9faXRlbSBsaWdodCBsZXR0ZXJTcGFjaW5nU1wiPjxMaW5rIGNsYXNzTmFtZT1cInRleHREZWNvXCIgdG89XCIvcHJvamV0cy8xXCI+UFJPSkVUUzwvTGluaz48L2g1PlxyXG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZW51X19pdGVtIGxpZ2h0IGxldHRlclNwYWNpbmdTXCI+PExpbmsgY2xhc3NOYW1lPVwidGV4dERlY29cIiB0bz1cIi9jb250YWN0XCI+Q09OVEFDVDwvTGluaz48L2g1PlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHREZWNvIGxldHRlclNwYWNpbmdTXCIgaHJlZj1cIi9sb2dpblwiPjxoNSBjbGFzc05hbWU9XCJtZW51X19pdGVtIHRleHREZWNvIGxpZ2h0XCI+QURNSU48L2g1PjwvYT5cclxuICAgICAgPC91bD5cclxuXHRcdDwvPlxyXG5cdCAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmF2YmFyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5cclxuZnVuY3Rpb24gUnNCdXR0b24oKSB7XHJcblx0QU9TLmluaXQoe29uY2U6IHRydWUsfSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJzIGFvcy1pdGVtIG92ZXJmbG93SGlkZGVuXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMjAwXCI+XHJcblx0XHRcdDxhIGNsYXNzTmFtZT1cImZiXCIgaHJlZj0naHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0FHRU5DRVpFTklUSC8nPjwvYT5cclxuXHRcdFx0PGEgY2xhc3NOYW1lPVwiaW5zdGFcIiBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2FnZW5jZXplbml0aC8/aGw9ZnInPjwvYT5cclxuXHRcdFx0PGEgY2xhc3NOYW1lPVwibGlua2VkaW5cIiBocmVmPSdodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9hZ2VuY2UtemVuaXRoLyc+PC9hPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8Lz4gXHJcblx0XHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSc0J1dHRvbjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJCcm93c2VyUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJ1c2VMb2NhdGlvbiIsIkhvbWUiLCJXb3JrcGFnZSIsIldvcmtwYWdlQ2xpZW50IiwiQ29udGFjdFBhZ2UiLCJDbGllbnRQYWdlIiwidXNlTGF5b3V0RWZmZWN0IiwiUHJvamVjdHBhZ2UiLCJTZWFyY2hQYWdlIiwiU2VhcmNoUGFnZTIiLCJNYWluIiwiV3JhcHBlciIsImNoaWxkcmVuIiwibG9jYXRpb24iLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvIiwicGF0aG5hbWUiLCJ3aW5kb3ciLCJjcmVhdGVSb290IiwiY29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwiTmF2YmFyIiwiQ2xpZW50UGFnZU9uZSIsIkNsaWVudHBhZ2VUd28iLCJDbGllbnRwYWdlVGhyZWUiLCJDbGllbnRwYWdlRm91ciIsIkNsaWVudHBhZ2VGaXZlIiwiQ2xpZW50cGFnZVNpeCIsInVzZVBhcmFtcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2xpZW50cGFnZTZfNSIsIk1pbmlGb290ZXIiLCJDbGllbnRwYWdlIiwiaWQiLCJlcnJvciIsInNldEVycm9yIiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsImlzTG9hZGVkSW1nIiwic2V0SXNMb2FkZWRJbWciLCJpc0xvYWRlZE5leHRQcmV2Iiwic2V0SXNMb2FkZWROZXh0UHJldiIsImlzSW1nUmVhZHkiLCJzZXRJbWdSZWFkeSIsIml0ZW1zIiwic2V0SXRlbXMiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJoZWFkZXIiLCJzZXRIZWFkZXIiLCJwcmVjaSIsInNldFByZWNpIiwic2Vjb25kIiwic2V0U2Vjb25kIiwiTmV4dFByZXYiLCJzZXROZXh0UHJldiIsIlByb2plY3QiLCJzZXRQcm9qZWN0IiwiaXNMb2FkZWRQcm9qZWN0Iiwic2V0SXNMb2FkZWRQcm9qZWN0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJ0aGlzUmVzIiwiSlNPTiIsInBhcnNlIiwiaSIsImxlbmd0aCIsImltYWdlcHJlY2lzaW9uIiwic2Vjb25kYWlyZSIsImNvbnNvbGUiLCJsb2ciLCJOZXh0IiwiUHJldiIsIm1lc3NhZ2UiLCJyZWFkeVN0YXRlIiwiYmFja2dyb3VuZEltYWdlIiwibWFyZ2luVG9wIiwiX19odG1sIiwidGVtb2lnbmFnZSIsIkxpbmsiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIkVsZW1lbnQiLCJQYXJhbGxheCIsIml0ZW0iLCJzbGlkZXIiLCJmb3JFYWNoIiwiZWxlbWVudCIsIm5ld1NsaWRlciIsInVuZGVmaW5lZCIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJlIiwiUmVtb3ZlQmx1ckRldGFpbCIsIkJsdXJEZXRhaWwiLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwicG9pbnRlckV2ZW50cyIsImRpc3BsYXkiLCJ0ZXh0QWxpZ24iLCJsZWZ0IiwidG9wIiwibWlzc2lvbiIsIm9iamVjdEZpdCIsImJhY2tncm91bmQiLCJwdXNoIiwidGFyZ2V0Iiwic3R5bGUiLCJiYWNrZHJvcEZpbHRlciIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIkxpZ2h0Ym94IiwiVGh1bWJuYWlscyIsIm9wZW4iLCJzZXRPcGVuIiwiYXJyYXlJbWFnZSIsImluZGV4IiwidmlzaWJsZSIsInNyYyIsImltYWdlIiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nIiwiYWxpZ25JdGVtcyIsImJvdHRvbSIsIkFPUyIsImRhdGEyIiwiZWxlbWVudHByZWNpc2lvbiIsInRleHRUcmFuc2Zvcm0iLCJDbGllbnRwYWdlT25lIiwiZGF0YSIsImluaXQiLCJub21DbGllbnQiLCJzZWN0ZXVyIiwiZHVyZWUiLCJjYXRlZ29yaWUiLCJucCIsImhyZWYiLCJlbmpldSIsImhpc3RvaXJlIiwicmVwb25zZSIsIm1hcmdpbiIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsIlJzQnV0dG9uIiwiTGluZXNUb3AiLCJMaW5lc0JvdHRvbSIsIkNvbnRhY3RQYWdlT25lIiwiU3dhbCIsIndpdGhSZWFjdENvbnRlbnQiLCJNeVN3YWwiLCJlbWFpbCIsIm5hbWUiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwicGVyc2lzdCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiZGlzYWJsZWQiLCJwcmV2ZW50RGVmYXVsdCIsImZpcmUiLCJ0ZXh0IiwidG9hc3QiLCJpY29uIiwidGl0bGUiLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJyZXF1ZXN0T3B0aW9ucyIsImJvZHkiLCJzdHJpbmdpZnkiLCJtYXhIZWlnaCIsIkFjdGlvbiIsImJhY2tncm91bmRTaXplIiwiQ2hpZmZyZXMiLCJDcmVhdGlvbiIsImNyZWF0aW9uIiwiRW1vdGlvbiIsIkZvb3RlciIsImhhbmRsZUVtYWlsSW5wdXRDaGFuZ2UiLCJyZXNwb25zZSIsIkhvbWVwYWdlIiwidXNlUmVmIiwiSW5zdGFmbHV4IiwiaW5zdGEiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50IiwiYXN5bmMiLCJhcHBlbmRDaGlsZCIsImJvcmRlciIsIm1hcmdpbkJvdHRvbSIsImxvYWRlZCIsImEiLCJTYXRpc2ZhY3Rpb24iLCJsb2dvIiwiVmlzaW9uIiwiTWFycXVlZSIsIldvcmRwYWdlIiwib3ZlcmZsb3ciLCJQcm9qZWN0UGFnZU9uZSIsIlByb2plY3RwYWdlVHdvIiwiUHJvamVjdHBhZ2VUaHJlZSIsIlByb2plY3RwYWdlRm91ciIsIlByb2plY3RwYWdlRml2ZSIsIlByb2plY3RwYWdlU2l4IiwiZmFkZU91dCIsImVsZW0iLCJtcyIsIm9wYWNpdHkiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJ2aXNpYmlsaXR5IiwiZmlsdGVyIiwic2V0RGlzcGxheSIsInJlc3VsdGltZyIsImZvY3VzIiwicXVlcnlTZWxlY3RvciIsIlByb2plY3RwYWdlT25lIiwicHJvamV0IiwiY2xpZW50IiwiY3Vyc29yIiwiZGVtYW5kZSIsImRlZmkiLCJhY3Rpb24iLCJTZWFyY2hQYWdlT25lMiIsIlNlYXJjaFBhZ2VUd28yIiwiaW5mbyIsInR5cGUiLCJsb2FkIiwic2V0TG9hZCIsInNldExvYWRpbmciLCJwYXJhbSIsImJveCIsIm1pbiIsIm1heCIsIlNlYXJjaFBhZ2VPbmUiLCJTZWFyY2hQYWdlVHdvIiwiV29ya3BhZ2VDbGllbnRPbmUiLCJXb3JrcGFnZUNsaWVudFR3byIsIm5iciIsImlzQ291bnRMb2FkZWQiLCJzZXRJc0NvdW50TG9hZGVkIiwiaXNDYXRMb2FkZWQiLCJzZXRJc0NhdExvYWRlZCIsImNhdCIsInNldENhdCIsImNvdW50Iiwic2V0Q291bnQiLCJ1bmxvYWQiLCJzZXRVbmxvYWQiLCJzdHlsZWQiLCJCdXR0b24iLCJNZW51IiwiTWVudUl0ZW0iLCJUeXBvZ3JhcGh5IiwiQXJyb3dGb3J3YXJkSW9zU2hhcnBJY29uIiwiTXVpQWNjb3JkaW9uIiwiQWNjb3JkaW9uUHJvcHMiLCJNdWlBY2NvcmRpb25TdW1tYXJ5IiwiQWNjb3JkaW9uU3VtbWFyeVByb3BzIiwiTXVpQWNjb3JkaW9uRGV0YWlscyIsIkFjY29yZGlvbiIsInByb3BzIiwidGhlbWUiLCJtYXhXaWR0aCIsImJhY2tncm91bmRDb2xvciIsIkFjY29yZGlvblN1bW1hcnkiLCJmb250U2l6ZSIsInBhbGV0dGUiLCJtb2RlIiwiZmxleERpcmVjdGlvbiIsInRyYW5zZm9ybSIsInNwYWNpbmciLCJBY2NvcmRpb25EZXRhaWxzIiwibWF4SGVpZ2h0IiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsImhhbmRsZUNoYW5nZSIsInBhbmVsIiwibmV3RXhwYW5kZWQiLCJ3b3JkcyIsInNldFdvcmRzIiwiY2F0ZWdvcnkiLCJtZW51IiwicmFuZG9tV29yZCIsImdldFdvcmQiLCJ3b3JkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic3BsaWNlIiwiaW5kZXhPZiIsIndvcmQxIiwid29yZDIiLCJQYWdpbmF0aW9uIiwicGFnZSIsInBhZ2VOYnIiLCJjZWlsIiwicGFyc2VJbnQiLCJvbkNoYW5nZSIsInBhcmFtcyIsImhhc093blByb3BlcnR5IiwiV29ya3BhZ2VPbmUiLCJXb3JrcGFnZVR3byIsIkRpcmVjdExpbmsiLCJFdmVudHMiLCJhbmltYXRlU2Nyb2xsIiwic2Nyb2xsIiwic2Nyb2xsU3B5Iiwic2Nyb2xsZXIiLCJzZXRJbnN0YSIsImF1ZGlvIiwiQXVkaW8iLCJzdGFydCIsInBsYXkiLCJuYXZiYXIiLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0IiwidGVsZXBvcnQiLCJyZXBsYWNlIiwib25jZSJdLCJzb3VyY2VSb290IjoiIn0=