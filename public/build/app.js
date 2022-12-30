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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");
/* harmony import */ var _clientpage6_5__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_clientpage6_5 */ "./assets/components/Clientpage/_clientpage6_5.jsx");
/* harmony import */ var _styles_loader_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../styles/loader.css */ "./assets/styles/loader.css");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function Clientpage() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_24__.useParams)(),
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







function MiniFooter() {
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
    fetch("/api/clients").then(function (res) {
      return res.json();
    }).then(function (result) {
      setIsLoaded(true);
      setItems(result["hydra:member"]);
    },
    // Remarque : il faut gérer les erreurs ici plutôt que dans
    // un bloc catch() afin que nous n’avalions pas les exceptions
    // dues à de véritables bugs dans les composants.
    function (error) {
      setIsLoaded(true);
      setError(error);
    });
    fetch("/getSatisfaction").then(function (res) {
      return res.json();
    }).then(function (result) {
      // setIsLoaded(true);
      // setItems(result["hydra:member"]);
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      style: {
        marginLeft: "88px"
      },
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/" + items[0]["logo"],
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/zenith/icons/0afdc7_2b72e82a682746918e15d9f67e937eb7~mv2.png",
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/zenith/icons/0afdc7_4c75fd3f519e4220bb582d77c8aa7c82~mv2.png",
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/zenith/icons/0afdc7_4d7257924ac5485fa6eb9f8c3ba8c3f2~mv2.png",
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/zenith/icons/0afdc7_64a6409454d14d52850cd6724850555b~mv2.png",
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/zenith/icons/0afdc7_420abce0c47d4d7e9e7d2166305ea6be~mv2.png",
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/" + items[1]["logo"],
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/" + items[2]["logo"],
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/" + items[0]["logo"],
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "1000",
      style: {
        marginRight: "88px"
      },
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/" + items[0]["logo"],
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "containerMax center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "1500",
      style: {
        marginLeft: "88px"
      },
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/" + items[0]["logo"],
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "1500",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/" + items[1]["logo"],
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "1500",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/" + items[2]["logo"],
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "1500",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/" + items[0]["logo"],
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "1500",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/" + items[1]["logo"],
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "1500",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/" + items[0]["logo"],
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "1500",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/" + items[1]["logo"],
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "1500",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/" + items[2]["logo"],
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "1500",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/" + items[0]["logo"],
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "1500",
      style: {
        marginRight: "88px"
      },
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/" + items[0]["logo"],
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "containerMax center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "2000",
      style: {
        marginLeft: "88px"
      },
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/" + items[0]["logo"],
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "2000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/" + items[1]["logo"],
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "2000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/" + items[2]["logo"],
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "2000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/" + items[0]["logo"],
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "2000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/" + items[1]["logo"],
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "2000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/" + items[2]["logo"],
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "2000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/" + items[1]["logo"],
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "2000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/" + items[2]["logo"],
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "2000",
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/" + items[0]["logo"],
      alt: "",
      width: 70
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      "data-aos": "fade-up",
      "data-aos-once": "false",
      "data-aos-duration": "2000",
      style: {
        marginRight: "88px"
      },
      className: "boxXS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
      src: "/images/logoclient/" + items[0]["logo"],
      alt: "",
      width: 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("h4", {
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
      top: "50%",
      left: "75%",
      width: "100px"
    },
    src: "/zenith/images/arrows-right.png",
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
      top: "50%",
      left: "0%",
      width: "100px"
    },
    src: "/zenith/images/arrows-right.png",
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_22__);
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
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_23__.useParams)(),
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");
/* harmony import */ var _styles_loader_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../styles/loader.css */ "./assets/styles/loader.css");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function WorkpageClient() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.useParams)(),
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
  var setLoading = function setLoading(param) {
    if (param == true) {
      console.log("gotcha");
      setLoad("visible");
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
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        visibility: load
      }
    }, /*#__PURE__*/React.createElement(_workpageClientTwo__WEBPACK_IMPORTED_MODULE_18__["default"], {
      data: items,
      page: nbr,
      count: count
    })));
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
    count = _ref.count;
  console.log(data);
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
    }, data[index].projet), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      src: "/images/imageclient/" + data[index].header,
      alt: ""
    })))));
    box.push(item);
  }
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
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");













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
  var setLoading = function setLoading(param) {
    if (param == true) {
      console.log("gotcha");
      setLoad("visible");
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
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        visibility: load
      }
    }, /*#__PURE__*/React.createElement(_workpageTwo__WEBPACK_IMPORTED_MODULE_18__["default"], {
      data: items,
      page: nbr,
      count: count
    })));
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
    count = _ref.count;
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
    }, data[index].projet), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      src: "/images/imageprojet/" + data[index].header,
      alt: ""
    })))));
    box.push(item);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OUUsQ0FDSDtBQUVMO0FBRUEsaUVBQWVqTCxRQUFROzs7Ozs7Ozs7OztBQ2hCdkI7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DbGllbnRwYWdlL19jbGllbnRwYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DbGllbnRwYWdlL19jbGllbnRwYWdlNl81LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DbGllbnRwYWdlL19jbGllbnRwYWdlRml2ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2xpZW50cGFnZS9fY2xpZW50cGFnZUZvdXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NsaWVudHBhZ2UvX2NsaWVudHBhZ2VPbmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NsaWVudHBhZ2UvX2NsaWVudHBhZ2VTaXguanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NsaWVudHBhZ2UvX2NsaWVudHBhZ2VUaHJlZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2xpZW50cGFnZS9fY2xpZW50cGFnZVR3by5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ29udGFjdHBhZ2UvX2NvbnRhY3RwYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Db250YWN0cGFnZS9fY29udGFjdHBhZ2VPbmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL19hY3Rpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL19jaGlmZnJlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZXBhZ2UvX2NyZWF0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ib21lcGFnZS9fZW1vdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZXBhZ2UvX2Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZXBhZ2UvX2hvbWVwYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ib21lcGFnZS9faW5zdGEuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL19taW5pRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ib21lcGFnZS9fc2F0aXNmYWN0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ib21lcGFnZS9fdmlzaW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ib21lcGFnZS9fd29yZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUHJvamVjdHBhZ2UvX3Byb2plY3RwYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Qcm9qZWN0cGFnZS9fcHJvamVjdHBhZ2VGaXZlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Qcm9qZWN0cGFnZS9fcHJvamVjdHBhZ2VGb3VyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Qcm9qZWN0cGFnZS9fcHJvamVjdHBhZ2VPbmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1Byb2plY3RwYWdlL19wcm9qZWN0cGFnZVNpeC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUHJvamVjdHBhZ2UvX3Byb2plY3RwYWdlVGhyZWUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1Byb2plY3RwYWdlL19wcm9qZWN0cGFnZVR3by5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU2VhcmNoUGFnZTIvX1NlYXJjaFBhZ2UyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TZWFyY2hQYWdlMi9fU2VhcmNoUGFnZU9uZTIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1NlYXJjaFBhZ2UyL19TZWFyY2hQYWdlVHdvMi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU2VhcmNoUGFnZS9fU2VhcmNoUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU2VhcmNoUGFnZS9fU2VhcmNoUGFnZU9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU2VhcmNoUGFnZS9fU2VhcmNoUGFnZVR3by5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvV29ya3BhZ2VDbGllbnQvX3dvcmtwYWdlQ2xpZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Xb3JrcGFnZUNsaWVudC9fd29ya3BhZ2VDbGllbnRPbmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1dvcmtwYWdlQ2xpZW50L193b3JrcGFnZUNsaWVudFR3by5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvV29ya3BhZ2UvX3dvcmtwYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Xb3JrcGFnZS9fd29ya3BhZ2VPbmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1dvcmtwYWdlL193b3JrcGFnZVR3by5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvX2hvbWUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL19saW5lc0JvdHRvbS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvX2xpbmVzVG9wLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9fbmF2YmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9fcnNCdXR0b24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXJyb3cuY3NzPzU5OWYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9mb250LmNzcz8yNjMyIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvbG9hZGVyLmNzcz84ZGYwIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXNoZWV0cy9idWxtYS9lbGVtZW50cy9jb250YWluZXIuc2Fzcz9jYjJhIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXNoZWV0cy9idWxtYS9ncmlkL2NvbHVtbnMuc2Fzcz84NDVkIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXNoZWV0cy9idWxtYS9oZWxwZXJzL3NwYWNpbmcuc2Fzcz9mNzBiIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXNoZWV0cy9tYWluLnNhc3M/ZWMwMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzaGVldHMvcGFnaW5hdGlvbi5sZXNzPzMzZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgJy4vc3R5bGVzaGVldHMvbWFpbi5zYXNzJztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL19ob21lLmpzeCc7XHJcbmltcG9ydCBXb3JrcGFnZSBmcm9tICcuL2NvbXBvbmVudHMvV29ya3BhZ2UvX3dvcmtwYWdlJztcclxuaW1wb3J0IFdvcmtwYWdlQ2xpZW50IGZyb20gJy4vY29tcG9uZW50cy9Xb3JrcGFnZUNsaWVudC9fd29ya3BhZ2VDbGllbnQnO1xyXG5pbXBvcnQgQ29udGFjdFBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL0NvbnRhY3RwYWdlL19jb250YWN0cGFnZSc7XHJcbmltcG9ydCBDbGllbnRQYWdlIGZyb20gJy4vY29tcG9uZW50cy9DbGllbnRwYWdlL19jbGllbnRwYWdlJztcclxuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9qZWN0cGFnZSBmcm9tICcuL2NvbXBvbmVudHMvUHJvamVjdHBhZ2UvX3Byb2plY3RwYWdlJztcclxuaW1wb3J0IFNlYXJjaFBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL1NlYXJjaFBhZ2UvX1NlYXJjaFBhZ2UnO1xyXG5pbXBvcnQgU2VhcmNoUGFnZTIgZnJvbSAnLi9jb21wb25lbnRzL1NlYXJjaFBhZ2UyL19TZWFyY2hQYWdlMic7IFxyXG5pbXBvcnQgXCIuL3N0eWxlc2hlZXRzL2J1bG1hL2dyaWQvY29sdW1ucy5zYXNzXCIgXHJcbmltcG9ydCBcIi4vc3R5bGVzaGVldHMvYnVsbWEvaGVscGVycy9zcGFjaW5nLnNhc3NcIjtcclxuaW1wb3J0IFwiLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5pbXBvcnQgXCIuL3N0eWxlcy9sb2FkZXIuY3NzXCJcclxuaW1wb3J0ICcuL3N0eWxlc2hlZXRzL2J1bG1hL2dyaWQvY29sdW1ucy5zYXNzJztcclxuaW1wb3J0ICcuL3N0eWxlc2hlZXRzL2J1bG1hL2hlbHBlcnMvc3BhY2luZy5zYXNzJztcclxuaW1wb3J0ICcuL3N0eWxlc2hlZXRzL3BhZ2luYXRpb24ubGVzcycgXHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBXcmFwcGVyID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUbygwLCAwKTtcclxuICAgIH0sIFtsb2NhdGlvbi5wYXRobmFtZV0pO1xyXG4gICAgcmV0dXJuIGNoaWxkcmVuXHJcbiAgfTsgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgIDxXcmFwcGVyPlxyXG4gICAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3Byb2pldHMvOm5iclwiIGVsZW1lbnQ9ezxXb3JrcGFnZSAvPn0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2NsaWVudHMvOm5iclwiIGVsZW1lbnQ9ezxXb3JrcGFnZUNsaWVudCAvPn0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2NvbnRhY3RcIiBlbGVtZW50PXs8Q29udGFjdFBhZ2UgLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9jbGllbnQvOmlkXCIgZWxlbWVudD17PENsaWVudFBhZ2UgLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9wcm9qZXQvOmlkXCIgZWxlbWVudD17PFByb2plY3RwYWdlIC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvc2VhcmNoLzppbmZvXCIgZWxlbWVudD17PFNlYXJjaFBhZ2UgLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9zZWFyY2hjYXQvOnR5cGUvOmluZm8vOm5hbWVcIiBlbGVtZW50PXs8U2VhcmNoUGFnZTIgLz59IC8+XHJcbiAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgIDwvV3JhcHBlcj5cclxuICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluOyBcclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuL01haW4uanMnO1xyXG53aW5kb3cuUmVhY3QgPSBSZWFjdFxyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xyXG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG5yb290LnJlbmRlcihcclxuXHJcbiAgICA8TWFpbiAvPlxyXG5cclxuKTtcclxuXHJcbiIsImltcG9ydCBOYXZiYXIgZnJvbSAnLi4vX25hdmJhcic7XHJcbmltcG9ydCBDbGllbnRQYWdlT25lIGZyb20gXCIuL19jbGllbnRwYWdlT25lXCI7XHJcbmltcG9ydCBDbGllbnRwYWdlVHdvIGZyb20gJy4vX2NsaWVudHBhZ2VUd28nO1xyXG5pbXBvcnQgQ2xpZW50cGFnZVRocmVlIGZyb20gJy4vX2NsaWVudHBhZ2VUaHJlZSc7XHJcbmltcG9ydCBDbGllbnRwYWdlRm91ciBmcm9tICcuL19jbGllbnRwYWdlRm91cic7XHJcbmltcG9ydCBDbGllbnRwYWdlRml2ZSBmcm9tICcuL19jbGllbnRwYWdlRml2ZSc7XHJcbmltcG9ydCBDbGllbnRwYWdlU2l4IGZyb20gJy4vX2NsaWVudHBhZ2VTaXgnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuaW1wb3J0IENsaWVudHBhZ2U2XzUgZnJvbSAnLi9fY2xpZW50cGFnZTZfNSc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9sb2FkZXIuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIENsaWVudHBhZ2UoKSB7XHJcblx0Y29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNMb2FkZWRJbWcsIHNldElzTG9hZGVkSW1nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNMb2FkZWROZXh0UHJldiwgc2V0SXNMb2FkZWROZXh0UHJldl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzSW1nUmVhZHksIHNldEltZ1JlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtoZWFkZXIsIHNldEhlYWRlcl0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW3ByZWNpLCBzZXRQcmVjaV0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW3NlY29uZCwgc2V0U2Vjb25kXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbTmV4dFByZXYsIHNldE5leHRQcmV2XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbUHJvamVjdCwgc2V0UHJvamVjdF0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2lzTG9hZGVkUHJvamVjdCwgc2V0SXNMb2FkZWRQcm9qZWN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRpZihpZCl7XHJcblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0XHRmZXRjaChgL2FwaS9jbGllbnRzLyR7aWR9YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRJdGVtcyhyZXN1bHQpO1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHRcdC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0XHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHJcblx0XHRcdGZldGNoKGAvZ2V0SW1hZ2VzQ2xpZW50LyR7aWR9YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRsZXQgdGhpc1JlcyA9IEpTT04ucGFyc2UocmVzdWx0KVxyXG5cdFx0XHRcdHNldElzTG9hZGVkSW1nKHRydWUpO1xyXG5cdFx0XHRcdHNldEltYWdlcyhKU09OLnBhcnNlKHJlc3VsdCkpO1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2codGhpc1JlcylcclxuXHRcdFx0XHRpZih0aGlzUmVzKXtcclxuXHRcdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzUmVzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpc1Jlc1tpXSlcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coaSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlc1tpXS5oZWFkZXIpXHJcblx0XHRcdFx0XHRcdFx0c2V0SGVhZGVyKHRoaXNSZXNbaV0pXHJcblx0XHRcdFx0XHRcdGlmKHRoaXNSZXNbaV0uaW1hZ2VwcmVjaXNpb24pXHJcblx0XHRcdFx0XHRcdFx0c2V0UHJlY2kodGhpc1Jlc1tpXSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlc1tpXS5zZWNvbmRhaXJlKVxyXG5cdFx0XHRcdFx0XHRcdHNldFNlY29uZCh0aGlzUmVzW2ldKVxyXG5cdFx0XHRcdFx0XHQvLyBpZihpbWFnZXNbaV0udmlzaWJsZSlcclxuXHRcdFx0XHRcdFx0Ly8gXHRzZXREaXNwbGF5KC4uLmltYWdlc1tpXSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlcy5sZW5ndGgtMSA9PSBpKXtcclxuXHRcdFx0XHRcdFx0XHRzZXRJbWdSZWFkeSh0cnVlKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKHRoaXNSZXMubGVuZ3RoID09IDApe1xyXG5cdFx0XHRcdFx0c2V0SW1nUmVhZHkodHJ1ZSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0XHRmZXRjaChgL05leFByZXYvJHtpZH1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdGxldCBOZXh0ID0gSlNPTi5wYXJzZShyZXN1bHRbMF0pXHJcblx0XHRcdFx0bGV0IFByZXYgPSBKU09OLnBhcnNlKHJlc3VsdFsxXSlcclxuXHRcdFx0XHRpZihOZXh0ICYmIFByZXYpe1xyXG5cdFx0XHRcdFx0c2V0TmV4dFByZXYoW05leHQsIFByZXZdKTtcclxuXHRcdFx0XHRcdGlmKE5leHRQcmV2KXtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coTmV4dFByZXYpXHJcblx0XHRcdFx0XHRcdHNldElzTG9hZGVkTmV4dFByZXYodHJ1ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdFx0ZmV0Y2goYC9nZXR0QWxsUHJvamVjdEJ5Q2xpZW50LyR7aWR9YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZFByb2plY3QodHJ1ZSk7XHJcblx0XHRcdFx0c2V0UHJvamVjdChyZXN1bHQpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHR9LCBbXSlcclxuXHR9XHJcblxyXG5cdGlmIChlcnJvcikge1xyXG5cdFx0IHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcblx0ICB9IGVsc2UgaWYgKCFpc0xvYWRlZCB8fCAhaXNJbWdSZWFkeSB8fCAhaXNMb2FkZWROZXh0UHJldiB8fCAhaXNMb2FkZWRQcm9qZWN0IHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdjb21wbGV0ZScpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PHN2ZyBpZD1cIlJlYWN0TG9hZGVyXCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1zdGlsbFwiIHBvaW50cz1cIjAsMCAxMDAsMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1zdGlsbFwiIHBvaW50cz1cIjAsMCAwLDEwMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1hbmltYXRpb25cIiBwb2ludHM9XCIwLDAgMTAwLDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2UtYW5pbWF0aW9uXCIgcG9pbnRzPVwiMCwwIDAsMTAwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0ICB9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpdGVtc1wiKVxyXG5cdFx0Y29uc29sZS5sb2coaXRlbXMpXHJcblx0XHRcdHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxOYXZiYXI+PC9OYXZiYXI+XHJcbiAgICAgICAgICA8Q2xpZW50UGFnZU9uZSBkYXRhPXtpdGVtc30+PC9DbGllbnRQYWdlT25lPlxyXG4gICAgICAgICAgPENsaWVudHBhZ2VUd28gZGF0YT17aXRlbXN9PjwvQ2xpZW50cGFnZVR3bz5cclxuICAgICAgICAgIDxDbGllbnRwYWdlVGhyZWUgZGF0YT17c2Vjb25kfT48L0NsaWVudHBhZ2VUaHJlZT5cclxuICAgICAgICAgIDxDbGllbnRwYWdlRm91ciBwcmVjaT17cHJlY2l9IGRhdGEyPXtpdGVtc30+PC9DbGllbnRwYWdlRm91cj5cclxuICAgICAgICAgIDxDbGllbnRwYWdlRml2ZSBpbWFnZXM9e2ltYWdlc30+PC9DbGllbnRwYWdlRml2ZT5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy82V3ZlbW0zSy5qcGVnKVwiIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbWlibG9jT3BhY2l0eVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXIgbWFyZ2luVG9wU1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjBcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1lZGl1bSBjZW50ZXJUZXh0XCI+VU4gVMOJTU9JR05BR0U8L2g0PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpZ2h0IGNlbnRlclRleHRcIlxyXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBpdGVtcy50ZW1vaWduYWdlIH19XHJcbiAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPENsaWVudHBhZ2U2XzUgaXRlbT17UHJvamVjdH0+PC9DbGllbnRwYWdlNl81PlxyXG4gICAgICAgICAgPENsaWVudHBhZ2VTaXggZGF0YT17aXRlbXN9IG5wPXtOZXh0UHJldn0+PC9DbGllbnRwYWdlU2l4PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudHBhZ2U7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIENsaWVudHBhZ2U2XzUoaXRlbSkge1xyXG4gIGxldCBzbGlkZXIgPSBbXVxyXG4gIGNvbnNvbGUubG9nKGl0ZW0pXHJcbiAgaWYoaXRlbS5pdGVtLmxlbmd0aCA+MCkge1xyXG4gICAgaXRlbS5pdGVtLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XHJcbiAgICAgICAgbGV0IG5ld1NsaWRlciA9IHVuZGVmaW5lZFxyXG4gICAgICAgIGlmKGVsZW1lbnQuaGVhZGVyKXtcclxuICAgICAgICAgICAgbmV3U2xpZGVyID0gKFxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2VsZW1lbnQuaWR9IGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj17YC9wcm9qZXQvJHtlbGVtZW50LmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQubWlzc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvaW1hZ2Vwcm9qZXQvJHtlbGVtZW50LmhlYWRlcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICApOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBuZXdTbGlkZXIgPSAoXHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17ZWxlbWVudC5pZH0gY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPXtgL3Byb2pldC8ke2VsZW1lbnQuaWR9YH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiMwMjExMURcIix9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50Lm1pc3Npb259XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY29udGFpblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvemVuaXRoL2F1dHJlL25vSW1nLnBuZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICApOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzbGlkZXIucHVzaChuZXdTbGlkZXIpIFxyXG4gICAgfSk7XHJcbiAgfWVsc2V7XHJcbiAgICBzbGlkZXIgPSAoIDxoMSBjbGFzc05hbWU9XCJ0aXRyZUEgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcFwiPnJpZW4gYSB2b2lyPC9oMT4gKVxyXG4gIH1cclxuICBmdW5jdGlvbiBCbHVyRGV0YWlsKGUpe1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gXCJibHVyKDRweClcIjtcclxuICAgIGUudGFyZ2V0LmNoaWxkcmVuWzBdLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIFJlbW92ZUJsdXJEZXRhaWwoZSl7XHJcbiAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgZS50YXJnZXQuc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSBcImJsdXIoMClcIjtcclxuICAgIGUudGFyZ2V0LmNoaWxkcmVuWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxyXG5cclxuICAgICAgICA8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuXHRcdFx0XHRcdDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnNC5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcblx0XHRcdFx0PC92aWRlbz4gKi99XHJcbiAgICAgIHsvKiA8RWxlbWVudCBuYW1lPVwic2Nyb2xsLXRvLWVsZW1lbnQ0XCIgY2xhc3NOYW1lPVwiZWxlbWVudFwiPjwvRWxlbWVudD4gKi99XHJcbiAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL3plbml0aC9pbWFnZXMvWjF6SUpDS2suanBlZ1wiIHN0cmVuZ3RoPXs4MDB9PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17e3BhZGRpbmdUb3A6ICc1MHB4JyxwYWRkaW5nQm90dG9tOiAnNzVweCd9fT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgLy8gICBkYXRhLWFvcz1cInpvb20taW5cIlxyXG4gICAgICAgIC8vICAgZGF0YS1hb3MtbWlycm9yPVwiXCJcclxuICAgICAgICAvLyAgIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiXHJcbiAgICAgICAgLy8gICBkYXRhLWFvcy1hbmNob3ItcGxhY2VtZW50PVwiXCJcclxuICAgICAgICAvLyAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyMlwiPlxyXG4gICAgICAgICAgICA8aDNcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRyZUEgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcCBtYi01XCJcclxuICAgICAgICAgICAgLy8gICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAvLyAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBQUk9KRVRTIExJw4lTXHJcbiAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICA8U3dpcGVyXHJcbiAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnNTAwcHgnfX1cclxuICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3PXsxfVxyXG4gICAgICAgICAgICAgIGNlbnRlcmVkU2xpZGVzPXtmYWxzZX1cclxuICAgICAgICAgICAgICBzcGFjZUJldHdlZW49ezB9XHJcbiAgICAgICAgICAgICAgYnJlYWtwb2ludHM9e3tcclxuICAgICAgICAgICAgICAgIDY0MDoge1xyXG4gICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDQwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNyxcclxuICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3aXBlcjJcIlxyXG4gICAgICAgICAgICAvLyAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgIC8vICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzbGlkZXJ9XHJcbiAgICAgICAgICAgICAgey8qIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzFdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy9fRFNDMTMwMC5qcGdgfSBhbHQ9XCJcIiAvPjwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCIgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9IG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX0+PGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+PHAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgZGlzcGxheTogXCJub25lXCIsIHdpZHRoOiBcIjIwMHB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCIwcHhcIiwgdG9wOlwiMjAwcHhcIn19PntpdGVtLml0ZW1bMl0ubWlzc2lvbn08L3A+PC9kaXY+PGltZyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17YC96ZW5pdGgvaW1hZ2VzLzFKNEE1MDA5ICgxKS5qcGdgfSBhbHQ9XCJcIiAvPjwvZGl2PiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzNdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy9DYXB0dXJlIGTigJnDqWNyYW4gMjAyMi0xMi0wMyDDoCAyMS4zMy4yOS5wbmdgfSBhbHQ9XCJcIiAvPjwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCIgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9IG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX0+PGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+PHAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgZGlzcGxheTogXCJub25lXCIsIHdpZHRoOiBcIjIwMHB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCIwcHhcIiwgdG9wOlwiMjAwcHhcIn19PntpdGVtLml0ZW1bNF0ubWlzc2lvbn08L3A+PC9kaXY+PGltZyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17YC96ZW5pdGgvaW1hZ2VzL0lNR183NDg3LmpwZ2B9IGFsdD1cIlwiIC8+PC9kaXY+ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCIgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9IG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX0+PGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+PHAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgZGlzcGxheTogXCJub25lXCIsIHdpZHRoOiBcIjIwMHB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCIwcHhcIiwgdG9wOlwiMjAwcHhcIn19PntpdGVtLml0ZW1bNV0ubWlzc2lvbn08L3A+PC9kaXY+PGltZyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17YC96ZW5pdGgvaW1hZ2VzL0lNR18wMDA0LmpwZ2B9IGFsdD1cIlwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVs0XS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgL3plbml0aC9pbWFnZXMvSU1HXzk4MzguanBnYH0gYWx0PVwiXCIgLz48L2Rpdj4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVs1XS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgL3plbml0aC9pbWFnZXMvRElBXzA3NTkuanBnYH0gYWx0PVwiXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPiAqL31cclxuICAgICAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L1BhcmFsbGF4PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRwYWdlNl81OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tIFwicmVhY3QtcGFyYWxsYXhcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXNoZWV0cy9idWxtYS9lbGVtZW50cy9jb250YWluZXIuc2Fzc1wiXHJcbmltcG9ydCBMaWdodGJveCBmcm9tIFwieWV0LWFub3RoZXItcmVhY3QtbGlnaHRib3hcIjtcclxuaW1wb3J0IFRodW1ibmFpbHMgZnJvbSBcInlldC1hbm90aGVyLXJlYWN0LWxpZ2h0Ym94L3BsdWdpbnMvdGh1bWJuYWlsc1wiO1xyXG5pbXBvcnQgXCJ5ZXQtYW5vdGhlci1yZWFjdC1saWdodGJveC9wbHVnaW5zL3RodW1ibmFpbHMuY3NzXCI7XHJcbmltcG9ydCBcInlldC1hbm90aGVyLXJlYWN0LWxpZ2h0Ym94L3N0eWxlcy5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIENsaWVudHBhZ2VGaXZlKGltYWdlcykge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBsZXQgYXJyYXlJbWFnZSA9IFtdXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGltYWdlcy5pbWFnZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcblx0ICBjb25zdCBlbGVtZW50ID0gaW1hZ2VzLmltYWdlc1tpbmRleF07XHJcblx0ICBpZihlbGVtZW50LnZpc2libGUgPT0gZmFsc2Upe1xyXG5cdFx0Y29udGludWU7XHJcblx0IH1cclxuXHQgbGV0IGl0ZW0gPSB7IHNyYzogYC9pbWFnZXMvaW1hZ2VjbGllbnQvJHtlbGVtZW50LmltYWdlfWB9XHJcblx0IGFycmF5SW1hZ2UucHVzaChpdGVtKVx0ICBcclxuICB9XHJcblxyXG5cclxuICBpZihhcnJheUltYWdlLmxlbmd0aD4wKXtcclxuICAgIGNvbnNvbGUubG9nKFwiZmlyc3RcIilcclxuICAgIGNvbnNvbGUubG9nKGFycmF5SW1hZ2UpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL3plbml0aC9pbWFnZXMvWjF6SUpDS2suanBlZ1wiIHN0cmVuZ3RoPXs4MDB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLGhlaWdodDpcIjEwMCVcIiwgZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwifX0+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtY2VudGVyZWRcIiBzdHlsZT17e2hlaWdodDpcIjkwJVwiLHdpZHRoOlwiODAlXCIsIHBhZGRpbmdUb3A6XCI1MHB4XCJ9fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1vbmUtdGhpcmRcIiBzdHlsZT17e2JhY2tncm91bmQ6XCIjMDIxMTFEXCIsIHBhZGRpbmc6XCIwXCIsIHBhZGRpbmc6XCIwXCJ9fT5cclxuICAgICAgICAgICAgICB7YXJyYXlJbWFnZVswXSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2FycmF5SW1hZ2VbMF0uc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApIDogKDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIHdpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT48aW1nIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19IHNyYz17XCIvemVuaXRoL2F1dHJlL25vSW1nLnBuZ1wifSBhbHQ9XCJcIi8+PC9kaXY+KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtb25lLXRoaXJkIGNvbHVtbnMgaXMtbXVsdGlsaW5lIG14LTVcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLWZ1bGwgbXktNVwiIHN0eWxlPXt7YmFja2dyb3VuZDpcIiMwMjExMURcIiwgcGFkZGluZzpcIjBcIn19PiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHthcnJheUltYWdlWzFdID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXthcnJheUltYWdlWzFdLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6ICg8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCB3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiMTAwJVwifX0+PGltZyBzdHlsZT17e3dpZHRoOlwiNTAlXCJ9fSBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn0gYWx0PVwiXCIvPjwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1mdWxsIG15LTVcIiBzdHlsZT17e2JhY2tncm91bmQ6XCIjMDIxMTFEXCIsIHBhZGRpbmc6XCIwXCJ9fT4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHthcnJheUltYWdlWzJdID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzpcIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXthcnJheUltYWdlWzJdLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6ICg8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCB3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiMTAwJVwifX0+PGltZyBzdHlsZT17e3dpZHRoOlwiNTAlXCJ9fSBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn0gYWx0PVwiXCIvPjwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS10aGlyZCBpcy1tb2JpbGVcIiBzdHlsZT17e2JhY2tncm91bmQ6XCIjMDIxMTFEXCIsIHBhZGRpbmc6XCIwXCJ9fT5cclxuICAgICAgICAgICAgICB7YXJyYXlJbWFnZVszXSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOlwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YXJyYXlJbWFnZVszXS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgd2lkdGg6XCIxMDAlXCIsIGhlaWdodDpcIjEwMCVcIn19PjxpbWcgc3R5bGU9e3t3aWR0aDpcIjUwJVwifX0gc3JjPXtcIi96ZW5pdGgvYXV0cmUvbm9JbWcucG5nXCJ9IGFsdD1cIlwiLz48L2Rpdj4pfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbW9iaWxlIGlzLWNlbnRlcmVkIG10LTUtZnVsbGhkXCIgc3R5bGU9e3twb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBib3R0b206XCIyNXB4XCIsIHdpZHRoOlwiMTAxJVwifX0+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfSBjbGFzc05hbWU9XCJidG5TIGNlbnRlciBsaWdodCBsZXR0ZXJTcGFjaW5nTSBtYi02IG10LTBcIj5cclxuICAgICAgICAgICAgICAgIEVOIFZPSVIgK1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICBcclxuICBcclxuICAgICAgICAgICAgPExpZ2h0Ym94XHJcbiAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICBjbG9zZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgcGx1Z2lucz17W1RodW1ibmFpbHNdfVxyXG4gICAgICAgICAgICAgIHNsaWRlcz17YXJyYXlJbWFnZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudHBhZ2VGaXZlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gQ2xpZW50cGFnZUZvdXIoe3ByZWNpLCBkYXRhMn0pIHtcclxuXHRjb25zb2xlLmxvZyhwcmVjaSlcclxuXHRpZihkYXRhMi5lbGVtZW50cHJlY2lzaW9uKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzLzZXdmVtbTNLLmpwZWcpXCIsIGhlaWdodDogXCIxMTAwcHhcIn19IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nJ3N0eWxlPXt7IGhlaWdodDogXCIxMTAwcHhcIn19PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyMic+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyQ2VudGVyQSc+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmVudDIxIG1hcmdpblRvcCc+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFyZ2luVG9wMicgPlxyXG5cdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9J2xpZ2h0IGxldHRlclNwYWNpbmdTJz7DiUzDiU1FTlRTIERFIFBSw4lDSVNJT048L2gzPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQgdGV4dC1oNScgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSd9fSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhMi5lbGVtZW50cHJlY2lzaW9ufX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9JyBib3hDbGllbnQnIHN0eWxlPXt7aGVpZ2h0OiAnODAwcHgnLCB3aWR0aDpcIjYwMHB4XCJ9fT5cclxuXHRcdFx0XHRcdFx0XHR7cHJlY2kuaW1hZ2UgPyAoPGltZyBjbGFzc05hbWU9JyBjb250YWluJyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17XCIvaW1hZ2VzL2ltYWdlY2xpZW50L1wiICsgcHJlY2kuaW1hZ2V9IGFsdD1cIlwiLz4pIDogKDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIHdpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT48aW1nIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19IHNyYz17XCIvemVuaXRoL2F1dHJlL25vSW1nLnBuZ1wifSBhbHQ9XCJcIi8+PC9kaXY+KX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2Plx0XHRcclxuXHJcblxyXG5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9fVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudHBhZ2VGb3VyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBDbGllbnRwYWdlT25lKGRhdGEpIHtcclxuXHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdEFPUy5pbml0KClcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kMVwiIGFsdD1cImhvbWVwYWdlXCI+XHJcblxyXG5cdFx0XHQ8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuXHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZy5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcblx0XHRcdFx0PC92aWRlbz5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5Qmx1ZVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlcjJcIj5cclxuXHRcdFx0XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCIvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi96ZW5pdGgvaW1hZ2VzL2JJTzFyOUYucG5nXCIgYWx0PVwiTG9nb1wiIHdpZHRoPXsyMDB9IGNsYXNzTmFtZT1cImNlbnRlclwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlx0XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7dGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSd9fSBjbGFzc05hbWU9XCJjbGllbnRwYWdlVGV4dFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwibWVkaXVtIG1hcmdpblN0b3AgY2xpZW50RGV0YWlsXCI+e2RhdGEuZGF0YS5ub21DbGllbnR9PC9oMT5cclxuXHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPVwibGlnaHQgbWFyZ2luU3RvcCBjbGllbnREZXRhaWxcIj57ZGF0YS5kYXRhLnNlY3RldXIuc2VjdGV1cn08L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuZHVyZWUgPyA8cCBjbGFzc05hbWU9XCJsaWdodCBjbGllbnREZXRhaWxcIj5EVVLDiUUgUFJPSkVUIDoge2RhdGEuZGF0YS5kdXJlZX08L3A+IDogPHAgY2xhc3NOYW1lPVwibGlnaHQgY2xpZW50RGV0YWlsXCI+RFVSw4lFIFBST0pFVCA6IE4vQTwvcD59XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCJ9fSB0bz17YC9zZWFyY2hjYXQvY2xpZW50LyR7ZGF0YS5kYXRhLmNhdGVnb3JpZVswXS5pZH0vJHtkYXRhLmRhdGEuY2F0ZWdvcmllWzBdLmNhdGVnb3JpZX1gfT48cCBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lXCIsIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnfX0gY2xhc3NOYW1lPVwibGlnaHQgY2xpZW50RGV0YWlsMlwiPntkYXRhLmRhdGEuY2F0ZWdvcmllWzBdLmNhdGVnb3JpZX08L3A+PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuY2F0ZWdvcmllWzFdICYmPD48cCBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lXCJ9fSBjbGFzc05hbWU9XCJsaWdodCBjbGllbnREZXRhaWwyXCI+ICAgfCAgIDwvcD4gPExpbmsgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCJ9fXRvPXtgL3NlYXJjaGNhdC9jbGllbnQvJHtkYXRhLmRhdGEuY2F0ZWdvcmllWzFdLmlkfS8ke2RhdGEuZGF0YS5jYXRlZ29yaWVbMV0uY2F0ZWdvcmllfWB9ID48cCBjbGFzc05hbWU9XCJsaWdodCBjbGllbnREZXRhaWwyXCIgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZVwiLCB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJywgdGV4dERlY29yYXRpb246IFwibm9uZVwiLCBjb2xvcjogXCJ3aGl0ZVwifX0+e2RhdGEuZGF0YS5jYXRlZ29yaWVbMV0uY2F0ZWdvcmllfTwvcD48L0xpbms+PC8+fVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlcjNcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDQgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSd9fSBjbGFzc05hbWU9XCJsaWdodCBsZXR0ZXJTcGFjaW5nUyAgZGlzY292ZXJDbGllbnQyXCI+e2RhdGEuZGF0YS5taXNzaW9ufTwvaDQ+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsaWdodCAgZGlzY292ZXJDbGllbnRcIj5Ew4lDT1VWUkVaPC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGluZUNsaWVudFwiID48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50cGFnZU9uZTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIENsaWVudHBhZ2VTaXgoe2RhdGEsIG5wfSkge1xyXG5cdEFPUy5pbml0KClcclxuXHRpZihucFswXSl7XHJcblx0XHRpZihucFswXVswXSA9PSAnbnVsbCcpXHJcblx0XHRcdG5wWzBdWzBdID0gZmFsc2U7XHJcblx0XHRpZihucFswXVsxXSA9PSAnbnVsbCcpXHJcblx0XHRcdG5wWzFdWzBdID0gZmFsc2U7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHJcblxyXG5cclxuXHJcblx0XHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCJ9fSBjbGFzc05hbWU9J2RlbWlibG9jQ2xpZW50Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkZW1pYmxvY09wYWNpdHknPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyZW50Q2xpZW50TmV4dFByZXYnPlxyXG5cclxuXHRcdFx0XHRcdFx0XHR7bnBbMV1bMF0gJiZcclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdDbGllbnROZXh0UHJldjEnIG9uQ2xpY2s9eygpPT57bG9jYXRpb24uaHJlZiA9IFwiL2NsaWVudC9cIisgbnBbMV1bMF0uaWR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT0nbGlnaHQgcmlnaHRUZXh0IG1hcmdpblRvcFMnPlBST0pFVCBQUsOJQ8OJREVOVDwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9J3JpZ2h0VGV4dCc+e25wWzFdWzBdLm5vbUNsaWVudH08L2g1PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPSdsaWdodCByaWdodFRleHQnPntucFsxXVswXS5taXNzaW9ufTwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj59XHJcblxyXG5cdFx0XHRcdFx0XHRcdHtucFswXVswXSAmJiA8ZGl2IGNsYXNzTmFtZT0nQ2xpZW50TmV4dFByZXYyJyBvbkNsaWNrPXsoKT0+e2xvY2F0aW9uLmhyZWYgPSBcIi9jbGllbnQvXCIrIG5wWzBdWzBdLmlkfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9J2xpZ2h0IGxlZnRUZXh0IG1hcmdpblRvcFMnPlBST0pFVCBTVUlWQU5UPC9oNj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT0nbGVmdFRleHQnPntucFswXVswXS5ub21DbGllbnR9PC9oNT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT0nbGlnaHQgbGVmdFRleHQnPntucFswXVswXS5taXNzaW9ufTwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj59XHJcblx0XHRcdFx0XHRcdFx0ey8qIDxhIGhyZWY9e1wiL2NsaWVudC9cIitucFsxXVswXS5pZH0+ICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudHBhZ2VTaXg7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gQ2xpZW50cGFnZVRocmVlKGRhdGEpIHtcclxuXHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdGlmKGRhdGEuZGF0YS5pbWFnZSAhPT0gdW5kZWZpbmVkKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3dyYXBwZXJEYXJrQmx1ZUNsaWVudCcgc3R5bGU9e3toZWlnaHQ6XCI4MDBweFwiLCB3aWR0aDpcIjEwMCVcIn19PlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9e1wiL2ltYWdlcy9pbWFnZWNsaWVudC9cIiArIGRhdGEuZGF0YS5pbWFnZX0gYWx0PVwiXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG4gfVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudHBhZ2VUaHJlZTsiLCIvLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuLy8gaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcclxuLy8gaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbi8vIGltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gQ2xpZW50cGFnZVR3byhkYXRhKSB7XHJcbi8vIFx0QU9TLmluaXQoKVxyXG4vLyBcdGlmKGRhdGEuZGF0YS5lbmpldSB8fCBkYXRhLmRhdGEuaGlzdG9pcmUgfHwgZGF0YS5kYXRhLnJlcG9uc2Upe1xyXG4vLyBcdFx0cmV0dXJuIChcclxuLy8gXHRcdFx0PD5cclxuLy8gXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy94OW5lczVWLmpwZylcIn19IGNsYXNzTmFtZT0nZGVtaWJsb2NDbGllbnQnPlxyXG4vLyBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2RlbWlibG9jQ2xpZW50T3BhY2l0eSc+XHJcbi8vIFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJlbnRDbGllbnQnPlxyXG4vLyBcdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuZW5qZXUgJiZcclxuLy8gXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2xpZW50R3JpZDEnPlxyXG4vLyBcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nbGlnaHQnPlVORSBFTkpFVTwvaDQ+XHJcbi8vIFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGlnaHQgY29udGFpbmVyQ2VudGVyQ2xpZW50JyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLmRhdGEuZW5qZXV9fT48L2Rpdj5cclxuLy8gXHRcdFx0XHRcdFx0XHQ8L2Rpdj4gXHJcbi8vIFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuLy8gXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLmhpc3RvaXJlICYmXHJcbi8vIFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NsaWVudEdyaWQyJz5cclxuLy8gXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2xpZ2h0Jz5VTkUgSElTVE9JUkU8L2g0PlxyXG4vLyBcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xpZ2h0IGNvbnRhaW5lckNlbnRlckNsaWVudCcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YS5kYXRhLmhpc3RvaXJlfX0+PC9kaXY+XHJcbi8vIFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcbi8vIFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuLy8gXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLnJlcG9uc2UgJiZcclxuLy8gXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2xpZW50R3JpZDMnPlxyXG4vLyBcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nbGlnaHQnPlVORSBSRVBPTlNFPC9oND5cclxuLy8gXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmRhdGEuZGF0YS5yZXBvbnNlfX0+PC9kaXY+XHJcbi8vIFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcbi8vIFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuLy8gXHRcdFx0XHRcdFx0PC9kaXY+XHJcbi8vIFx0XHRcdFx0XHQ8L2Rpdj5cclxuLy8gXHRcdFx0XHQ8L2Rpdj5cclxuLy8gXHRcdFx0PC8+XHJcbi8vIFx0XHQpO1xyXG4vLyBcdH1cclxuLy8gfVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIENsaWVudHBhZ2VUd28oZGF0YSkge1xyXG4gXHRpZihkYXRhLmRhdGEuZW5qZXUgfHwgZGF0YS5kYXRhLmhpc3RvaXJlIHx8IGRhdGEuZGF0YS5yZXBvbnNlKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMvNld2ZW1tM0suanBlZylcIiwgdGV4dEFsaWduOiBcImNlbnRlclwifX0gY2xhc3NOYW1lPSdkZW1pYmxvY0NsaWVudCc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sdW1ucyc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1ucyBpcy1jZW50ZXJlZCBpcy0xMicgc3R5bGU9e3sgbWFyZ2luOlwiMFwiLCBwYWRkaW5nOlwiMFwifX0+XHJcblx0XHRcdFx0XHRcdFx0e2RhdGEuZGF0YS5lbmpldSAmJlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gaXMtY2VudGVyZWQgaXMtNCcgc3R5bGU9e3ttYXJnaW5Ub3A6XCI0OHB4XCIsIG1hcmdpblJpZ2h0OlwiYXV0b1wiLCBtYXJnaW5MZWZ0OlwiYXV0b1wifX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdsaWdodCc+VU4gRU5KRVU8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0gY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQgcHgtNidkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLmRhdGEuZW5qZXV9fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj4gXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLmhpc3RvaXJlICYmXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbHVtbiBpcy1jZW50ZXJlZCBpcy00JyBzdHlsZT17e21hcmdpblRvcDpcIjQ4cHhcIiwgbWFyZ2luUmlnaHQ6XCJhdXRvXCIsIG1hcmdpbkxlZnQ6XCJhdXRvXCJ9fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2xpZ2h0Jz5VTkUgSElTVE9JUkU8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0gY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQgY29sdW1ucyBpcy12Y2VudGVyZWQgaXMtY2VudGVyZWQgcHgtNicgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YS5kYXRhLmhpc3RvaXJlfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLnJlcG9uc2UgJiZcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGlzLWNlbnRlcmVkIGlzLTQnICBzdHlsZT17e21hcmdpblRvcDpcIjQ4cHhcIiwgbWFyZ2luUmlnaHQ6XCJhdXRvXCIsIG1hcmdpbkxlZnQ6XCJhdXRvXCJ9fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2xpZ2h0Jz5VTkUgUkVQT05TRTwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fSBjbGFzc05hbWU9J2xpZ2h0IGNvbnRhaW5lckNlbnRlckNsaWVudCBjb2x1bW5zIGlzLXZjZW50ZXJlZCBpcy1jZW50ZXJlZCBweC02JyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLmRhdGEucmVwb25zZX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcblx0fVxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRwYWdlVHdvO1xyXG4iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL19uYXZiYXInO1xyXG5pbXBvcnQgUnNCdXR0b24gZnJvbSAnLi4vX3JzQnV0dG9uJztcclxuaW1wb3J0IExpbmVzVG9wIGZyb20gJy4uL19saW5lc1RvcCc7XHJcbmltcG9ydCBMaW5lc0JvdHRvbSBmcm9tICcuLi9fbGluZXNCb3R0b20nO1xyXG5pbXBvcnQgQ29udGFjdFBhZ2VPbmUgZnJvbSAnLi9fY29udGFjdHBhZ2VPbmUnO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5pbXBvcnQgTWluaUZvb3RlciBmcm9tICcuLi9Ib21lcGFnZS9fbWluaUZvb3Rlcic7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIENvbnRhY3RQYWdlKCkge1xyXG5cdHJldHVybiAoIFxyXG5cdFx0PD5cclxuXHRcdDxOYXZiYXI+PC9OYXZiYXI+XHJcblx0XHQ8UnNCdXR0b24+PC9Sc0J1dHRvbj5cclxuXHRcdDxMaW5lc1RvcD48L0xpbmVzVG9wPlxyXG5cdFx0PExpbmVzQm90dG9tPjwvTGluZXNCb3R0b20+XHJcblx0XHQ8Q29udGFjdFBhZ2VPbmU+PC9Db250YWN0UGFnZU9uZT5cclxuXHRcdDxNaW5pRm9vdGVyPjwvTWluaUZvb3Rlcj5cclxuXHJcblx0XHQ8Lz5cclxuXHQgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFBhZ2U7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xyXG5pbXBvcnQgd2l0aFJlYWN0Q29udGVudCBmcm9tICdzd2VldGFsZXJ0Mi1yZWFjdC1jb250ZW50J1xyXG5cclxuXHJcbmZ1bmN0aW9uIENvbnRhY3RQYWdlT25lKCkge1xyXG5cdGNvbnN0IE15U3dhbCA9IHdpdGhSZWFjdENvbnRlbnQoU3dhbClcclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0ZW1haWw6ICcnLFxyXG5cdFx0bmFtZTogJycsXHJcblx0XHRtZXNzYWdlOiAnJyxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnBlcnNpc3QoKTtcclxuXHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0W2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG5cdFx0XHRcclxuXHRcdH0pO1xyXG5cdFx0Y29uc29sZS5sb2codmFsdWVzLmVtYWlsKVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcblx0XHRlLnRhcmdldC5jaGlsZHJlblszXS5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRNeVN3YWwuZmlyZSh7XHJcblx0XHRcdHRleHQ6ICdVbiBtYWlsIGRlIGNvbmZpcm1hdGlvbiB2b3VzIGEgw6l0w6kgZW52b3nDqScsXHJcblx0XHRcdHRvYXN0OiB0cnVlLFxyXG5cdFx0XHRpY29uOiAnc3VjY2VzcycsXHJcblx0XHRcdHRpdGxlOiAnQmllbiByZcOndSEnLFxyXG5cdFx0XHRwb3NpdGlvbjogJ3RvcC1yaWdodCcsXHJcblx0XHRcdHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuXHRcdFx0dGltZXI6IDMwMDAsXHJcblx0XHRcdHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcblx0XHRcdGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG5cdFx0XHQgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuXHRcdFx0ICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuXHRcdFx0fVxyXG5cdFx0ICB9KTtcclxuXHRcdGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0aGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXCJlbWFpbFwiOiB2YWx1ZXMuZW1haWwsIFwibmFtZVwiOiB2YWx1ZXMubmFtZSwgXCJtZXNzYWdlXCI6IHZhbHVlcy5tZXNzYWdlLCBcIm5ld1wiOiB0cnVlIH0pLFxyXG5cdFx0fTtcclxuXHRcdC8vIGZldGNoKCcvc2VuZGVtYWlsJywgcmVxdWVzdE9wdGlvbnMpXHJcblx0XHQvLyBcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdGZldGNoKGAvc2VuZGVtYWlsYCx7bWV0aG9kOidQT1NUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxib2R5OiBKU09OLnN0cmluZ2lmeSh7IFwiZW1haWxcIjogdmFsdWVzLmVtYWlsLCBcIm5hbWVcIjogdmFsdWVzLm5hbWUsIFwibWVzc2FnZVwiOiB2YWx1ZXMubWVzc2FnZSwgXCJuZXdcIjogdHJ1ZSB9KX0pXHJcblx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdC50aGVuKFxyXG5cdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdFx0fVxyXG5cdFx0KVxyXG5cdH07XHJcblx0QU9TLmluaXQoKVxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQxXCIgYWx0PVwiaG9tZXBhZ2VcIj5cclxuXHJcblx0XHRcdDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG5cdFx0XHRcdDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuXHRcdFx0XHQ8L3ZpZGVvPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHlCbHVlXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyMlwiPlxyXG5cdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCIvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL3plbml0aC9pbWFnZXMvYklPMXI5Ri5wbmdcIiBhbHQ9XCJMb2dvXCIgd2lkdGg9ezIwMH0gY2xhc3NOYW1lPVwiY2VudGVyXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sdW1ucyBpcy1jZW50ZXJlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlzLTMgY29sdW1uIGlzLW9mZnNldC00XCIgc3R5bGU9e3ttYXhIZWlnaDpcIjEwMCVcIn19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwibWVkaXVtXCI+Q29udGFjdGV6IE5vdXM8L2gxPiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT1cImxpZ2h0XCI+UHLDqXNlbnRleiB2b3RyZSBwcm9qZXQgZXQgbGFpc3Nlei1ub3VzIHZvc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpbmZvcm1hdGlvbnMgZGUgY29udGFjdC4gTm91cyByZXZpZW5kcm9ucyB2ZXJzXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZvdXMgZGFucyB1biBkw6lsYWkgZGUgMjRoLjwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXMtMiBjb2x1bW5cIj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImlzLTcgY29sdW1uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9fZ3JvdXAgZmllbGQgIGRpdkMxXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJpbnB1dFwiIGNsYXNzTmFtZT1cImZvcm1fX2ZpZWxkXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgbmFtZT1cIm5hbWVcIiBpZD0nbmFtZScgdmFsdWU9e3ZhbHVlcy5uYW1lfW9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gcmVxdWlyZWQ+PC9pbnB1dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImZvcm1fX2xhYmVsXCI+Vm90cmUgbm9tPC9sYWJlbD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtX19ncm91cDIgZmllbGQgZGl2QzJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImlucHV0XCIgY2xhc3NOYW1lPVwiZm9ybV9fZmllbGRcIiBwbGFjZWhvbGRlcj1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9J2VtYWlsJyB2YWx1ZT17dmFsdWVzLmVtYWlsfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHJlcXVpcmVkIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtX19sYWJlbFwiPlZvdHJlIGFkcmVzc2UgZS1tYWlsPC9sYWJlbD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0YXJlYV9fZ3JvdXAgZmllbGQgZGl2QzNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgdHlwZT1cImlucHV0XCIgY2xhc3NOYW1lPVwiZm9ybV9fZmllbGRcIiBwbGFjZWhvbGRlcj1cIm1lc3NhZ2VcIiBuYW1lPVwibWVzc2FnZVwiIGlkPSdtZXNzYWdlJyB2YWx1ZT17dmFsdWVzLm1lc3NhZ2V9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gcmVxdWlyZWQgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImZvcm1fX2xhYmVsXCI+Vm90cmUgYmVzb2luPC9sYWJlbD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7bWFyZ2luVG9wOlwiNTBweFwifX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtYXJnaW5Cb3R0b20yIGJ0blMgbGlnaHQgbGV0dGVyU3BhY2luZ01cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0RW52b3llclxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQgXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG4gXHJcbi8vbW9kaWZpZXIgYSBwYXJ0aXIgZGUgbGEgbGlnbmUgXHJcbi8vIGFqb3V0ZXIgPGZvcm0+IDxmaWVsZD4gZXRjXHJcbi8vIGZ1bmN0aW9uIGNvbnRhY3QgcGFnZU9uZSBuZSBmYWl0IHJpZW4gbmUgZGVjbGFyZSByaWVuIGV0Yy4uIFxyXG4vL2RlaWZpbmlyIHVuIGV0YXQgZCBvcmlnaW5lIHBvdXIgbGVzIHpvbmUgZGUgdGV4dGUgXHJcbi8vYWpvdXRlciB1biBidXR0b24gcXVhbmQgY2xpcXVlIHByZW5kIGxlcyBpbmZvcm1hdGlvbiBkYW5zIGxlcyBjaGFtcHMgXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RQYWdlT25lO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBBY3Rpb24oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy94OW5lczVWLmpwZylcIiB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJhY2tncm91bmRcIlxyXG4gICAgICAgIGFsdD1cImFjdGlvblwiXHJcbiAgICAgID4gKi99XHJcbiAgICAgIHsvKiA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL2FXRUxoazhBLmpwZWdcIiBzdHJlbmd0aD17MH0+ICovfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjUwcHhcIiwgYmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy9hV0VMaGs4QS5qcGVnKVwiLCBoZWlnaHQ6XCJhdXRvXCIsIHBhZGRpbmdCb3R0b206IFwiMXB4XCJ9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIyXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lcjJcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRyZUEgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXRjaG5hemVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQUNUSU9OXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJsaWdodCBsZXR0ZXJTcGFjaW5nUyBzb3VzVGl0cmVcIj5cclxuICAgICAgICAgICAgICBTRSBDT05DRU5UUkVSIFNVUiBM4oCZRVNTRU5USUVMIDogVk9VU1xyXG4gICAgICAgICAgICA8L2g2PlxyXG5cclxuICAgICAgICAgICAgPFN3aXBlciBzbGlkZXNQZXJWaWV3PXszfSBzcGFjZUJldHdlZW49ey0xMDB9IGNsYXNzTmFtZT1cInN3aXBlclwiPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2pldHNcIiBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94Q2FycmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInVybCgvemVuaXRoL2ltYWdlcy9wZXhlbHMtYW5kcmVhLXBpYWNxdWFkaW8tMzc2MDA5My5qcGcpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3BGaWx0ZXI6IFwiYmx1cig1cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRBY3Rpb24xIGxldHRlclNwYWNpbmdTIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDT05TRUlMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBQ0NPTVBBR05FTUVOVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDM2MMKwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuXHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvamV0c1wiIGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3hDYXJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcclxuICAgICAgICAgICAgICAgICAgICAgIFwidXJsKC96ZW5pdGgvaW1hZ2VzL0NPTU0uanBnKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcEZpbHRlcjogXCJibHVyKDVweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dEFjdGlvbjEgbGV0dGVyU3BhY2luZ1MgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENPTU1VTklDQVRJT05cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNPTFVUSU9OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU1VSLU1FU1VSRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcblxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2pldHNcIiBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94Q2FycmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInVybCgvemVuaXRoL2ltYWdlcy9FVkVOVC5qcGcpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3BGaWx0ZXI6IFwiYmx1cig1cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRBY3Rpb24xIGxldHRlclNwYWNpbmdTIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFVkVOVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTElWUkFJU09OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ0zDiVMgRU4gTUFJTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcblxyXG4gICAgICAgICAgICA8L1N3aXBlcj5cclxuXHJcbiAgICAgICAgICAgIDxoNFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdHJlQiBsaWdodCBsZXR0ZXJTcGFjaW5nIGNvbnRhaW5lciBjZW50ZXIgYWNjcm9jaGVcIlxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFHSVIgRVQgUsOJQUdJUiBBVkVDIFZPVVNcclxuICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7ZG9jdW1lbnQubG9jYXRpb24gPSBcIi9jbGllbnRzLzFcIn19IGNsYXNzTmFtZT1cImJ0blMgY2VudGVyIGxpZ2h0IGxldHRlclNwYWNpbmdNIG1hcmdpbkJvdHRvbTJcIj5cclxuICAgICAgICAgICAgICBFTiBDT01QUkVORFJFICtcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgIHsvKiA8L1BhcmFsbGF4PiAqL31cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gXCJyZWFjdC1wYXJhbGxheFwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gQ2hpZmZyZXMoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcblx0PFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9aMXpJSkNLay5qcGVnXCIgc3RyZW5ndGg9ezQwMH0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICAvLyBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwiIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZGVtaWJsb2NcIlxyXG4gICAgICAgIGFsdD1cImNoaWZmcmVzXCJcclxuICAgICAgPlxyXG4gICAgICAgIHsvKiA8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnNi5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcbiAgICAgICAgPC92aWRlbz4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1pYmxvYzJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZDNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJlbnQyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYxXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWVkaXVtIGNoaWZmcmVzXCI+MjAxNjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibGlnaHQgY2hpZmZyZXMyXCI+QU5Ow4lFIERFIENSRUFUSU9OPC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZWRpdW0gY2hpZmZyZXNcIj4rMzAwPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJsaWdodCBjaGlmZnJlczJcIj5DUsOJQVRJT05TIFBIT1RPUzwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYzXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWVkaXVtIGNoaWZmcmVzXCI+KzE2MDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibGlnaHQgY2hpZmZyZXMyXCI+UFJPSkVUUyBSw4lBTElTw4lTPC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjRcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZWRpdW0gY2hpZmZyZXNcIj4rMTUwPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJsaWdodCBjaGlmZnJlczJcIj5Sw4lBTElTQVRJT05TIFZJRMOJT1M8L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2NVwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1lZGl1bSBjaGlmZnJlc1wiPisyMDA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImxpZ2h0IGNoaWZmcmVzMlwiPkNSw4lBVElPTlMgRElHSVRBTEVTIDwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXY2XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWVkaXVtIGNoaWZmcmVzXCI+MTAwJTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibGlnaHQgY2hpZmZyZXMyXCI+TUFERSBJTiBGUkFOQ0U8L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHQgIDwvUGFyYWxsYXg+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGlmZnJlcztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIENyZWF0aW9uKGl0ZW0pIHtcclxuICBsZXQgc2xpZGVyID0gW11cclxuICBjb25zb2xlLmxvZyhpdGVtKVxyXG4gIGlmKGl0ZW0uaXRlbS5sZW5ndGggPjApIHtcclxuICAgIGl0ZW0uaXRlbS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgICAgbGV0IG5ld1NsaWRlciA9IHVuZGVmaW5lZFxyXG4gICAgICBpZihlbGVtZW50LmNyZWF0aW9uKXtcclxuICAgICAgICAgIG5ld1NsaWRlciA9IChcclxuICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17ZWxlbWVudC5pZH0gY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9e2AvcHJvamV0LyR7ZWxlbWVudC5pZH1gfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX1cclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQubWlzc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvaW1hZ2Vwcm9qZXQvJHtlbGVtZW50LmNyZWF0aW9ufWB9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICk7ICAgICAgICAgICAgXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgICAgbmV3U2xpZGVyID0gKFxyXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtlbGVtZW50LmlkfSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj17YC9wcm9qZXQvJHtlbGVtZW50LmlkfWB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiMwMjExMURcIix9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQubWlzc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY29udGFpblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi96ZW5pdGgvYXV0cmUvbm9JbWcucG5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICk7ICAgICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgc2xpZGVyLnB1c2gobmV3U2xpZGVyKSBcclxuICB9KTtcclxuICB9ZWxzZXtcclxuICAgIHNsaWRlciA9ICggPGgxIGNsYXNzTmFtZT1cInRpdHJlQSBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5TdG9wXCI+cmllbiBhIHZvaXI8L2gxPiApXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIEJsdXJEZXRhaWwoZSl7XHJcbiAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgZS50YXJnZXQuc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSBcImJsdXIoNHB4KVwiO1xyXG4gICAgZS50YXJnZXQuY2hpbGRyZW5bMF0uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCJcclxuICB9XHJcbiAgZnVuY3Rpb24gUmVtb3ZlQmx1ckRldGFpbChlKXtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cigwKVwiO1xyXG4gICAgZS50YXJnZXQuY2hpbGRyZW5bMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCJ9fSBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XHJcblxyXG4gICAgICAgIDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG5cdFx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmc0Lm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuXHRcdFx0XHQ8L3ZpZGVvPiAqL31cclxuICAgICAgey8qIDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDRcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+PC9FbGVtZW50PiAqL31cclxuICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9aMXpJSkNLay5qcGVnXCIgc3RyZW5ndGg9ezgwMH0+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7cGFkZGluZ1RvcDogJzUwcHgnfX0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgZGF0YS1hb3M9XCJ6b29tLWluXCJcclxuICAgICAgICAgIGRhdGEtYW9zLW1pcnJvcj1cIlwiXHJcbiAgICAgICAgICBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudD1cIlwiXHJcbiAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlcjJcIj5cclxuICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0cmVBIG1lZGl1bSBsZXR0ZXJTcGFjaW5nIG1hcmdpblN0b3BcIlxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENSw4lBVElPTlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8aDZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaWdodCBsZXR0ZXJTcGFjaW5nUyBzb3VzVGl0cmVcIlxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFVORSBISVNUT0lSRS4gVU4gRU5KRVUuIFVORSBSw4lQT05TRS5cclxuICAgICAgICAgICAgPC9oNj5cclxuXHJcbiAgICAgICAgICAgIDxTd2lwZXJcclxuICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICc1MDBweCd9fVxyXG4gICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9ezF9XHJcbiAgICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MH1cclxuICAgICAgICAgICAgICBicmVha3BvaW50cz17e1xyXG4gICAgICAgICAgICAgICAgNjQwOiB7XHJcbiAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgMTAyNDoge1xyXG4gICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA3LFxyXG4gICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDEsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dpcGVyMlwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3NsaWRlcn1cclxuICAgICAgICAgICAgICB7LyogPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCIgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9IG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX0+PGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+PHAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgZGlzcGxheTogXCJub25lXCIsIHdpZHRoOiBcIjIwMHB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCIwcHhcIiwgdG9wOlwiMjAwcHhcIn19PntpdGVtLml0ZW1bMV0ubWlzc2lvbn08L3A+PC9kaXY+PGltZyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17YC96ZW5pdGgvaW1hZ2VzL19EU0MxMzAwLmpwZ2B9IGFsdD1cIlwiIC8+PC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVsyXS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgL3plbml0aC9pbWFnZXMvMUo0QTUwMDkgKDEpLmpwZ2B9IGFsdD1cIlwiIC8+PC9kaXY+ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCIgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9IG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX0+PGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+PHAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgZGlzcGxheTogXCJub25lXCIsIHdpZHRoOiBcIjIwMHB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCIwcHhcIiwgdG9wOlwiMjAwcHhcIn19PntpdGVtLml0ZW1bM10ubWlzc2lvbn08L3A+PC9kaXY+PGltZyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17YC96ZW5pdGgvaW1hZ2VzL0NhcHR1cmUgZOKAmcOpY3JhbiAyMDIyLTEyLTAzIMOgIDIxLjMzLjI5LnBuZ2B9IGFsdD1cIlwiIC8+PC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVs0XS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgL3plbml0aC9pbWFnZXMvSU1HXzc0ODcuanBnYH0gYWx0PVwiXCIgLz48L2Rpdj4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVs1XS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgL3plbml0aC9pbWFnZXMvSU1HXzAwMDQuanBnYH0gYWx0PVwiXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzRdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy9JTUdfOTgzOC5qcGdgfSBhbHQ9XCJcIiAvPjwvZGl2PiAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzVdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy9ESUFfMDc1OS5qcGdgfSBhbHQ9XCJcIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+ICovfVxyXG4gICAgICAgICAgICA8L1N3aXBlcj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+XHJcbiAgICAgICAgICAgIDxoNFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdHJlQiBsaWdodCBsZXR0ZXJTcGFjaW5nIGNvbnRhaW5lciBjZW50ZXIgYWNjcm9jaGVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUFJPUFVMU0VSIEzigJlJTUFHSU5BSVJFIFBMVVMgTE9JTlxyXG4gICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFyZ2luQm90dG9tMiBidG5TIGNlbnRlciBsaWdodCBsZXR0ZXJTcGFjaW5nTVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9wcm9qZXRzLzFcIiBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG4gICAgICAgICAgICAgICAgIETDiUNPVVZSSVIgKzwvTGluaz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L1BhcmFsbGF4PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRpb247XHJcblxyXG4vLyBjb25zdCBpdGVtcyA9IFsnJywgJycsICcnLCAnJywgJycsICcnLCcnLCcnLCcnLCcnLCcnLCcnLF1cclxuLy8gY29uc3Qgc2V0dGluZyA9IHtcclxuLy8gICBkcmFnU3BlZWQ6IDAuNCxcclxuLy8gICBpdGVtV2lkdGg6IDIwMCxcclxuLy8gICBpdGVtSGVpZ2h0OiA0NjQsXHJcbi8vICAgaXRlbVNpZGVPZmZzZXRzOiA0MCxcclxuLy8gfVxyXG4vLyBjb25zdCBpdGVtU3R5bGUgPSB7XHJcbi8vICAgd2lkdGg6IGAke3NldHRpbmcuaXRlbVdpZHRofXB4YCxcclxuLy8gICBoZWlnaHQ6IGAke3NldHRpbmcuaXRlbUhlaWdodH1weGAsXHJcbi8vICAgbWFyZ2luOiBgMHB4ICR7c2V0dGluZy5pdGVtU2lkZU9mZnNldHN9cHhgXHJcbi8vIH1cclxuXHJcbntcclxuICAvKiA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyQyc+XHJcbiAgICAgICAgICAgICAgPENhcm91c2VsIF9kYXRhPXtpdGVtc30gey4uLnNldHRpbmd9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBpdGVtcy5tYXAoKGksIF9pKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtfaX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naXRlbSdcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLml0ZW1TdHlsZSB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi9cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gRW1vdGlvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIDxkaXZcclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwiIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiXHJcbiAgICAgICAgYWx0PVwiw6ltb3Rpb25cIlxyXG4gICAgICA+ICovfVxyXG4gICAgICAgIHsvKiA8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnMi5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcbiAgICAgICAgPC92aWRlbz4gKi99XHJcbiAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9aMXpJSkNLay5qcGVnXCIgc3RyZW5ndGg9ezQwMH0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3twYWRkaW5nVG9wOiAnNTBweCd9fT5cclxuICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiem9vbS1pblwiIGRhdGEtYW9zLW1pcnJvcj1cInRydWVcImRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudD1cInRvcC1jZW50ZXJcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIj4gIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lcjIgXCI+XHJcbiAgICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRyZUEgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDDiU1PVElPTlxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPGg2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaWdodCBsZXR0ZXJTcGFjaW5nUyBzb3VzVGl0cmVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRkFJUkUgVklCUkVSIExBIENPUkRFIElOVklTSUJMRVxyXG4gICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJGbGV4IGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3hWaWRlb1wiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcblx0XHRcdFx0XHQ8aWZyYW1lIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIG9iamVjdEZpdDogJ2NvdmVyJ319IHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0UxVEZaV2JCMzZNXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lQm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93RnVsbFNjcmVlbj48L2lmcmFtZT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aDRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdHJlQiBsaWdodCBsZXR0ZXJTcGFjaW5nIGNvbnRhaW5lciBjZW50ZXIgYWNjcm9jaGVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU1VTQ0lURVIgTOKAmUVNT1RJT04gRU4gVU4gSU5TVEFOVFxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+e2RvY3VtZW50LmxvY2F0aW9uID0gXCIvY2xpZW50LzFcIn19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXJnaW5Cb3R0b20yIGJ0blMgY2VudGVyIGxpZ2h0IGxldHRlclNwYWNpbmdNXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBFTiBWT0lSICtcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbW90aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcbmltcG9ydCB3aXRoUmVhY3RDb250ZW50IGZyb20gJ3N3ZWV0YWxlcnQyLXJlYWN0LWNvbnRlbnQnXHJcblxyXG5cclxuZnVuY3Rpb24gRm9vdGVyKCkge1xyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRlbWFpbDogJycsXHJcblx0fSk7XHJcblx0Y29uc3QgTXlTd2FsID0gd2l0aFJlYWN0Q29udGVudChTd2FsKVxyXG5cclxuXHRjb25zdCBoYW5kbGVFbWFpbElucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wZXJzaXN0KCk7XHJcblx0XHRzZXRWYWx1ZXMoKHZhbHVlcykgPT4gKHtcclxuXHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRlbWFpbDogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG5cdFx0XHRcclxuXHRcdH0pKTtcclxuXHRcdGNvbnNvbGUubG9nKHZhbHVlcy5lbWFpbClcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZS50YXJnZXQuY2hpbGRyZW5bMV0uZGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0TXlTd2FsLmZpcmUoXHJcblx0XHRcdCdNZXJjaSEnLFxyXG5cdFx0XHQnVm90cmUgZW1haWwgw6AgYmllbiDDqXTDqSBlbnJlZ2lzdHLDqScsXHJcblx0XHRcdCdzdWNjZXNzJ1xyXG5cdFx0ICApXHJcblx0XHRjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7IFwiZW1haWxcIjogdmFsdWVzLmVtYWlsLCBcIm5ld1wiOiB0cnVlIH0pLFxyXG5cdFx0fTtcclxuXHRcdGZldGNoKCcvYXBpL2VtYWlscycsIHJlcXVlc3RPcHRpb25zKVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0fTtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdCAgICB7LyogPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9ueHNYMG9HYy5qcGVnXCIgc3RyZW5ndGg9ezB9PiAqL31cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy9ueHNYMG9HYy5qcGVnKVwiLCBoZWlnaHQ6XCJhdXRvXCIsIHBhZGRpbmdCb3R0b206IFwiMXB4XCJ9fT5cclxuXHRcdFx0XHQ8ZGl2IGlkPVwiZm9vdGVyXCIgY2xhc3NOYW1lPVwiZGVtaWJsb2NGb290ZXJcIiBhbHQ9XCJmb290ZXJcIj5cclxuICAgICAgXHRcdCAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1pYmxvYzJcIiA+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlTXCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxoMiAgY2xhc3NOYW1lPVwidGl0cmVFIGxpZ2h0IGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcFwiPkVUIFNJIE9OIFNFIExBTsOHQUlUID88L2gyPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bkwgY2VudGVyIGxpZ2h0IGxldHRlclNwYWNpbmdNXCI+XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCIvY29udGFjdFwiIGNsYXNzTmFtZT1cInRleHREZWNvXCI+Q09OVEFDVDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCIgbGlnaHQgbGV0dGVyU3BhY2luZyBjb250YWluZXIgY2VudGVyXCI+RU5TRU1CTEUsIMOJQ1JJVk9OUyBWT1RSRSBISVNUT0lSRTwvaDQ+XHJcblxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50OVwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj48L0VsZW1lbnQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1pYmxvY0Zvb3RlcjJcIiBhbHQ9XCJmb290ZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtaWJsb2MyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFyZW50NFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGl2Q1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJjZW50ZXIgbWItNVwiIHNyYz1cIi96ZW5pdGgvaW1hZ2VzL3dYMkxDSVQucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCIyMjBcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT0ndWwyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyIG10LTMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJmb290ZXJUZXh0IGxpZ2h0IHRleHQtaDVcIj5aRU5JVEg8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J2xpMic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPiBWQUwgROKAmUVVUk9QRSA8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J2xpMic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPkhFTExPQEFHRU5DRVpFTklUSC5DT008L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J2xpMic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPjA2LjExLjg2LjY1LjgwPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkaXZEXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwidGl0cmVEIG1lZGl1bSBsZXR0ZXJTcGFjaW5nIG1hcmdpbkJvdHRvbVwiIHN0eWxlPXt7bWFyZ2luVG9wOlwiMjBweFwifX0+UkVKT0lHTkVaIDxiciAvPiBM4oCZQVZFTlRVUkU8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyczIgY2VudGVyRmxleCBjZW50ZXJcIj5cclxuICAgICAgXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiZmIyXCIgaHJlZj0naHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0FHRU5DRVpFTklUSC8nPjwvYT5cclxuICAgICAgXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiaW5zdGEyXCIgaHJlZj0naHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9hZ2VuY2V6ZW5pdGgvP2hsPWZyJz48L2E+XHJcbiAgICAgIFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImxpbmtlZGluMlwiIGhyZWY9J2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L2FnZW5jZS16ZW5pdGgvJz48L2E+XHJcblx0XHRcdFx0XHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9ID5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cInRpdHJlRCBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5Cb3R0b20gXCI+IE5FV1NMRVRURVI8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRNYWlsIGNlbnRlclwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cImVtYWlsXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNpemU9XCIzMFwiIG5hbWU9XCJlbWFpbFwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dmFsdWVzLmVtYWlsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlRW1haWxJbnB1dENoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ+PC9pbnB1dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkaXZFXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwidGl0cmVDIG1lZGl1bSBsZXR0ZXJTcGFjaW5nXCI+U0lURSBNQVA8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT0ndWwyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+QUNDVUVJTDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+Q0xJRU5UPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdsaTInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJmb290ZXJUZXh0IGxpZ2h0IHRleHQtaDVcIj5QUk9KRVRTPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdsaTInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJmb290ZXJUZXh0IGxpZ2h0IHRleHQtaDVcIj5DT05UQUNUPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibGlnaHQgZm9vdGVyQ3JlZGl0IGxldHRlclNwYWNpbmdTXCI+wqkgQUdFTkNFIFpFTklUSCAvIFRPVVMgRFJPSVRTIFLDiVNFUlbDiVM8L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgIFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdHsvKiA8L1BhcmFsbGF4PiAqL31cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFPUyBmcm9tIFwiYW9zXCI7XHJcbmltcG9ydCBcImFvcy9kaXN0L2Fvcy5jc3NcIjtcclxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1wYXJhbGxheCc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBIb21lcGFnZSgpIHtcclxuICBBT1MuaW5pdCgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPGRpdiAgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiIGFsdD1cImhvbWVwYWdlXCIgPiAqL31cclxuXHJcbiAgICAgIDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG5cdFx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+IFxyXG4gICAgICB7LyogPFBhcmFsbGF4IGJnSW1hZ2U9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwMjEzNDI0OTEyNi05ZjM3NTVhNTBkNzg/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE0NzAmcT04MFwiIHN0cmVuZ3RoPXs0MDB9PiAqL31cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eUJsdWVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyMlwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlcjJcIj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiODAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi96ZW5pdGgvaW1hZ2VzL2JJTzFyOUYucG5nXCIgYWx0PVwiTG9nb1wiIHdpZHRoPXszMzB9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmJ2aSBjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZW1pYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiODAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGhpblwiPkZBSVRFUzwvc3Bhbj4gQlJJTExFUntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGhpblwiPiBWT1MgPC9zcGFuPklEw4lFU1xyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCI4MDBcIlxyXG4gICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICA8RWxlbWVudCBuYW1lPVwic2Nyb2xsLXRvLWVsZW1lbnQyXCIgY2xhc3NOYW1lPVwiZWxlbWVudFwiPjwvRWxlbWVudD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8L1BhcmFsbGF4PiAqL31cclxuICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1wYXJhbGxheCc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlc2hlZXRzL2J1bG1hL2hlbHBlcnMvc3BhY2luZy5zYXNzXCJcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIEluc3RhZmx1eCgpIHtsZXQgaW5zdGEgPSB1c2VSZWYobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICBzY3JpcHQuc3JjID0gXCJodHRwczovL2Nkbi5saWdodHdpZGdldC5jb20vd2lkZ2V0cy9saWdodHdpZGdldC5qc1wiXHJcbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG5cclxuICB9LCBbXSk7XHJcblxyXG5cclxuXHJcblxyXG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcclxuICB9XHJcblxyXG5cclxuXHRcdHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgey8qIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiIGFsdD1cIiNhZ2VuY2V6ZW5pdGhcIj5cclxuICAgICAgPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZzgubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+ICovfVxyXG4gICAgICAgIDxQYXJhbGxheFxyXG4gICAgICAgICAgYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL1oxeklKQ0trLmpwZWdcIlxyXG4gICAgICAgICAgc3RyZW5ndGg9ezQwMH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGRhdGEtYW9zPVwiem9vbS1pblwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zLW1pcnJvcj1cInRydWVcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcy1hbmNob3ItcGxhY2VtZW50PVwidG9wLWNlbnRlclwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogJzUwcHgnfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyMlwiPlxyXG4gICAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0cmVBIG1lZGl1bSBsZXR0ZXJTcGFjaW5nIG1hcmdpblN0b3BcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgI0FHRU5DRVpFTklUSFxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHJlZj17aW5zdGF9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXJGbGV4XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6XCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwgcGFkZGluZ1RvcDpcIjUwcHhcIn19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlMVwiID48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlMlwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGUzXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PjxwIGNsYXNzTmFtZT1cIklNQUdJTkVSXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+SU1BR0lORVI8L3A+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PjxwIGNsYXNzTmFtZT1cIkNSw4lFUlwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPkNSw4lFUjwvcD48L2Rpdj5cclxuICAgICAgICAgIDxkaXY+PHAgY2xhc3NOYW1lPVwiUsOKVkVSXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+UsOKVkVSPC9wPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdj48cCBjbGFzc05hbWU9XCJFTlNFTUJMRVwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPkVOU0VNQkxFPC9wPjwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlNFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGU1XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTZcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTdcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlOFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGU5XCI+PC9kaXY+IFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGUxMFwiPjwvZGl2PiBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlMTFcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlMTJcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlMTNcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlMTRcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlMTVcIj48L2Rpdj4gICovfVxyXG4gICAgICAgICAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvL2xpZ2h0d2lkZ2V0LmNvbS93aWRnZXRzLzUzMGM1OTBjNjZjZjVmZmE4NDRkZWQ3NTFhNmE0Y2Q1Lmh0bWxcIlxyXG4gICAgICAgICAgICAgICAgICBzY3JvbGxpbmc9XCJub1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsbG93dHJhbnNwYXJlbmN5PVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpZ2h0d2lkZ2V0LXdpZGdldFwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6XCI3MCVcIiwgYm9yZGVyOlwiMFwifX1cclxuICAgICAgICAgICAgICAgID48L2lmcmFtZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aDRcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOlwiMTAwcHhcIiwgbWFyZ2luQm90dG9tOlwiNnZoXCJ9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlnaHQgbGV0dGVyU3BhY2luZyBjb250YWluZXIgY2VudGVyIG1hcmdpblRvcFhMXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFVOIFVOSVZFUlMgREUgUE9TU0lCSUxJVEVTXHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1BhcmFsbGF4PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcblx0fVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEluc3RhZmx1eDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcbmltcG9ydCB3aXRoUmVhY3RDb250ZW50IGZyb20gJ3N3ZWV0YWxlcnQyLXJlYWN0LWNvbnRlbnQnXHJcblxyXG5cclxuZnVuY3Rpb24gTWluaUZvb3RlcigpIHtcclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0ZW1haWw6ICcnLFxyXG5cdH0pO1xyXG5cdGNvbnN0IE15U3dhbCA9IHdpdGhSZWFjdENvbnRlbnQoU3dhbClcclxuXHJcblx0Y29uc3QgaGFuZGxlRW1haWxJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucGVyc2lzdCgpO1xyXG5cdFx0c2V0VmFsdWVzKCh2YWx1ZXMpID0+ICh7XHJcblx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0ZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuXHRcdFx0XHJcblx0XHR9KSk7XHJcblx0XHRjb25zb2xlLmxvZyh2YWx1ZXMuZW1haWwpXHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGUudGFyZ2V0LmNoaWxkcmVuWzFdLmRpc2FibGVkID0gdHJ1ZTtcclxuXHRcdE15U3dhbC5maXJlKFxyXG5cdFx0XHQnTWVyY2khJyxcclxuXHRcdFx0J1ZvdHJlIGVtYWlsIMOgIGJpZW4gw6l0w6kgZW5yZWdpc3Ryw6knLFxyXG5cdFx0XHQnc3VjY2VzcydcclxuXHRcdCAgKVxyXG5cdFx0Y29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoeyBcImVtYWlsXCI6IHZhbHVlcy5lbWFpbCwgXCJuZXdcIjogdHJ1ZSB9KSxcclxuXHRcdH07XHJcblx0XHRmZXRjaCgnL2FwaS9lbWFpbHMnLCByZXF1ZXN0T3B0aW9ucylcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdH07XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cclxuXHJcblx0XHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMvbnhzWDBvR2MuanBlZylcIn19IGNsYXNzTmFtZT1cImRlbWlibG9jRm9vdGVyMlwiIGFsdD1cImZvb3RlclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1pYmxvYzJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYXJlbnQ0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkaXZDXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImNlbnRlciBtYi01XCIgc3JjPVwiL3plbml0aC9pbWFnZXMvd1gyTENJVC5wbmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjIyMFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSd1bDInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdsaTIgbXQtMyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPlpFTklUSDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+IFZBTCBE4oCZRVVST1BFIDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+SEVMTE9AQUdFTkNFWkVOSVRILkNPTTwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+MDYuMTEuODYuNjUuODA8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRpdkRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJ0aXRyZUQgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luQm90dG9tXCIgc3R5bGU9e3ttYXJnaW5Ub3A6XCIyMHB4XCJ9fT5SRUpPSUdORVogPGJyIC8+IEzigJlBVkVOVFVSRTwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJzMiBjZW50ZXJGbGV4IGNlbnRlclwiPlxyXG4gICAgICBcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJmYjJcIiBocmVmPSdodHRwczovL3d3dy5mYWNlYm9vay5jb20vQUdFTkNFWkVOSVRILyc+PC9hPlxyXG4gICAgICBcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJpbnN0YTJcIiBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2FnZW5jZXplbml0aC8/aGw9ZnInPjwvYT5cclxuICAgICAgXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibGlua2VkaW4yXCIgaHJlZj0naHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvYWdlbmNlLXplbml0aC8nPjwvYT5cclxuXHRcdFx0XHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwidGl0cmVEIG1lZGl1bSBsZXR0ZXJTcGFjaW5nIG1hcmdpbkJvdHRvbSBcIj4gTkVXU0xFVFRFUjwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dE1haWwgY2VudGVyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImVtYWlsXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPVwiZW1haWxcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT1cIjMwXCIgbmFtZT1cImVtYWlsXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZXMuZW1haWx9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVFbWFpbElucHV0Q2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZD48L2lucHV0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRpdkVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJ0aXRyZUMgbWVkaXVtIGxldHRlclNwYWNpbmdcIj5TSVRFIE1BUDwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSd1bDInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdsaTInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+QUNDVUVJTDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiL2NsaWVudHMvMVwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPkNMSUVOVDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiL3Byb2pldHMvMVwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPlBST0pFVFM8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J2xpMic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIi9jb250YWN0XCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+Q09OVEFDVDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxpZ2h0IGZvb3RlckNyZWRpdCBsZXR0ZXJTcGFjaW5nU1wiPsKpIEFHRU5DRSBaRU5JVEggLyBUT1VTIERST0lUUyBSw4lTRVJWw4lTPC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICBcclxuXHJcblxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgTWluaUZvb3RlcjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIFNhdGlzZmFjdGlvbigpIHtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIFxyXG5cdC8vIFJlbWFycXVlIDogbGUgdGFibGVhdSB2aWRlIGRlIGTDqXBlbmRhbmNlcyBbXSBpbmRpcXVlXHJcblx0Ly8gcXVlIHVzZUVmZmVjdCBuZSBz4oCZZXjDqWN1dGVyYSBxdeKAmXVuZSBmb2lzLCB1biBwZXUgY29tbWVcclxuXHQvLyBjb21wb25lbnREaWRNb3VudCgpXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHQgIGZldGNoKFwiL2FwaS9jbGllbnRzXCIpXHJcblx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdC50aGVuKFxyXG5cdFx0ICAocmVzdWx0KSA9PiB7XHJcblx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRzZXRJdGVtcyhyZXN1bHRbXCJoeWRyYTptZW1iZXJcIl0pO1xyXG5cdFx0ICB9LFxyXG5cdFx0ICAvLyBSZW1hcnF1ZSA6IGlsIGZhdXQgZ8OpcmVyIGxlcyBlcnJldXJzIGljaSBwbHV0w7R0IHF1ZSBkYW5zXHJcblx0XHQgIC8vIHVuIGJsb2MgY2F0Y2goKSBhZmluIHF1ZSBub3VzIG7igJlhdmFsaW9ucyBwYXMgbGVzIGV4Y2VwdGlvbnNcclxuXHRcdCAgLy8gZHVlcyDDoCBkZSB2w6lyaXRhYmxlcyBidWdzIGRhbnMgbGVzIGNvbXBvc2FudHMuXHJcblx0XHQgIChlcnJvcikgPT4ge1xyXG5cdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0ICB9XHJcblx0XHQpXHJcblxyXG4gICAgZmV0Y2goXCIvZ2V0U2F0aXNmYWN0aW9uXCIpXHJcblx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdC50aGVuKFxyXG5cdFx0ICAocmVzdWx0KSA9PiB7XHJcblx0XHRcdC8vIHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHQvLyBzZXRJdGVtcyhyZXN1bHRbXCJoeWRyYTptZW1iZXJcIl0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcblx0XHQgIH0sXHJcblx0XHQgIC8vIFJlbWFycXVlIDogaWwgZmF1dCBnw6lyZXIgbGVzIGVycmV1cnMgaWNpIHBsdXTDtHQgcXVlIGRhbnNcclxuXHRcdCAgLy8gdW4gYmxvYyBjYXRjaCgpIGFmaW4gcXVlIG5vdXMgbuKAmWF2YWxpb25zIHBhcyBsZXMgZXhjZXB0aW9uc1xyXG5cdFx0ICAvLyBkdWVzIMOgIGRlIHbDqXJpdGFibGVzIGJ1Z3MgZGFucyBsZXMgY29tcG9zYW50cy5cclxuXHRcdCAgKGVycm9yKSA9PiB7XHJcblx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHQgIH1cclxuXHRcdClcclxuXHR9LCBbXSlcclxuICBcclxuXHRpZiAoZXJyb3IpIHtcclxuXHQgIHJldHVybiA8ZGl2PkVycmV1ciA6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuXHR9IGVsc2UgaWYgKCFpc0xvYWRlZCkge1xyXG5cdCAgcmV0dXJuIDxkaXY+Q2hhcmdlbWVudC4uLjwvZGl2PjtcclxuXHR9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coaXRlbXMpO1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuICAgICAgey8qIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxyXG5cclxuICAgICAgPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZzUubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+ICovfVxyXG4gICAgICB7LyogPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9hV0VMaGs4QS5qcGVnXCIgc3RyZW5ndGg9ezB9PiAqL31cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3twYWRkaW5nVG9wOiAnNTBweCcsIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMvYVdFTGhrOEEuanBlZylcIiwgaGVpZ2h0OlwiYXV0b1wiLCBwYWRkaW5nQm90dG9tOiBcIjFweFwifX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIyXCI+XHJcblxyXG5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRyZUEgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPlNBVElTRkFDVElPTjwvaDE+XHJcbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGl0cmVDZW50ZXIgbGlnaHQgbGV0dGVyU3BhY2luZ1NcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj7DilRSRSDDgCBWT1MgQ8OUVMOJUywgQ+KAmUVTVCBBVkFOVCBUT1VUIERFUyBSRU5DT05UUkVTLjwvaDY+XHJcbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGl0cmVDZW50ZXIgbGlnaHQgbGV0dGVyU3BhY2luZ1MgcGFkZGluZ0JvdHRvbVwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPkRFUyBISVNUT0lSRVMgSFVNQUlORVMsIEVYQ0VQVElPTk5FTExFUywgT1JJR0lOQUxFUy48L2g2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lck1heCBjZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4OHB4XCJ9fSBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1swXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi96ZW5pdGgvaWNvbnMvMGFmZGM3XzJiNzJlODJhNjgyNzQ2OTE4ZTE1ZDlmNjdlOTM3ZWI3fm12Mi5wbmdcIn0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL3plbml0aC9pY29ucy8wYWZkYzdfNGM3NWZkM2Y1MTllNDIyMGJiNTgyZDc3YzhhYTdjODJ+bXYyLnBuZ1wifSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvemVuaXRoL2ljb25zLzBhZmRjN180ZDcyNTc5MjRhYzU0ODVmYTZlYjlmOGMzYmE4YzNmMn5tdjIucG5nXCJ9IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi96ZW5pdGgvaWNvbnMvMGFmZGM3XzY0YTY0MDk0NTRkMTRkNTI4NTBjZDY3MjQ4NTA1NTVifm12Mi5wbmdcIn0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL3plbml0aC9pY29ucy8wYWZkYzdfNDIwYWJjZTBjNDdkNGQ3ZTllN2QyMTY2MzA1ZWE2YmV+bXYyLnBuZ1wifSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMV1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMl1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgc3R5bGU9e3ttYXJnaW5SaWdodDpcIjg4cHhcIn19IGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzBdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJNYXggY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiODhweFwifX0gY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMV1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMl1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMV1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMV1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMl1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgc3R5bGU9e3ttYXJnaW5SaWdodDpcIjg4cHhcIn19IGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzBdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJNYXggY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiODhweFwifX0gY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMV1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMl1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMV1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMl1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMV1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMl1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgc3R5bGU9e3ttYXJnaW5SaWdodDpcIjg4cHhcIn19IGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzBdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0cmVCIGxpZ2h0IGxldHRlclNwYWNpbmcgY29udGFpbmVyIGNlbnRlciBhY2Nyb2NoZSBtYXJnaW5Cb3R0b20yXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCI2dmhcIn19IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPkxFIFJFU1RFIE9OIEzigJnDiUNSSVJBIEVOU0VNQkxFPC9oND5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8L1BhcmFsbGF4PiAqL31cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTYXRpc2ZhY3Rpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvYXJyb3cuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIFZpc2lvbigpICB7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHJcbiAgICAgIHsvKiA8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuXHRcdFx0XHRcdDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnNi5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcblx0XHRcdFx0PC92aWRlbz4gKi99XHJcbiAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy94OW5lczVWLmpwZylcIn19IGNsYXNzTmFtZT0nYmFja2dyb3VuZCc+ICovfVxyXG5cclxuICAgICAgey8qIDxQYXJhbGxheCBiZ0ltYWdlPVwiL3plbml0aC9pbWFnZXMvYVdFTGhrOEEuanBlZ1wiIHN0cmVuZ3RoPXswfT4gKi99XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7cGFkZGluZ1RvcDogJzUwcHgnLCBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL2FXRUxoazhBLmpwZWcpXCIsIGhlaWdodDpcImF1dG9cIiwgcGFkZGluZ0JvdHRvbTogXCIxcHhcIn19PlxyXG4gICAgICA8ZGl2IGRhdGEtYW9zPVwiem9vbS1pblwiIGRhdGEtYW9zLW1pcnJvcj1cInRydWVcImRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudD1cInRvcC1jZW50ZXJcImRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiIHN0eWxlPXt7aGVpZ2h0OlwiODUwcHhcIn19PlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdHJlQSBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5TdG9wXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+VklTSU9OPC9oMT5cclxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJsaWdodCBsZXR0ZXJTcGFjaW5nUyBzb3VzVGl0cmVcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5VTkUgUkVOQ09OVFJFIFFVSSBDSEFOR0UgVE9VVDwvaDY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJcIj5cclxuICAgICAgICAgICAgPFN3aXBlclxyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3PXsxfVxyXG4gICAgICAgICAgICBjZW50ZXJlZFNsaWRlcz17dHJ1ZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dpcGVyM1wiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyX19jb250ZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmVudDNcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpc2lvbkJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIG9iamVjdEZpdDogJ2NvdmVyJ319c3JjPVwiaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS9iYjVlM2JfYTEwNTIzOWJmZDE4NDhiNDg5MjkzOWQ4Nzk4Y2Q2NTd+bXYyLmpwZy92MS9jcm9wL3hfMTA5LHlfMCx3XzczNCxoXzkwMC9maWxsL3dfMjcwLGhfMzQ4LGFsX2MscV84MCx1c21fMS4yMF8xLjAwXzAuMDEsZW5jX2F1dG8vYmI1ZTNiX2ExMDUyMzliZmQxODQ4YjQ4OTI5MzlkODc5OGNkNjU3fm12Mi5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInZpc2lvblRleHQyIG1lZGl1bVwiPk1BVEhJUzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+Q09OU0VJTDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPk7DiUdPQ0lBVElPTjwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPsOJVsOJTkVNRU5USUVMPC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+R0VTVElPTiBERSBQUk9KRVQ8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5ESVJFQ1RJT04gQVJUSVNUSVFVRTwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkRJUkVDVElPTiBEJ0VYUExPSVRBVElPTjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+RMOJVkVMT1BQRU1FTlQgQ09NTUVSQ0lBTCA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJhcnJvd1wiIHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCB0b3A6XCI1MCVcIiwgbGVmdDpcIjc1JVwiLCB3aWR0aDpcIjEwMHB4XCJ9fSBzcmM9XCIvemVuaXRoL2ltYWdlcy9hcnJvd3MtcmlnaHQucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcl9fY29udGVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJlbnQzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJhcnJvdzJcIiBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgdG9wOlwiNTAlXCIsIGxlZnQ6XCIwJVwiLCB3aWR0aDpcIjEwMHB4XCJ9fSBzcmM9XCIvemVuaXRoL2ltYWdlcy9hcnJvd3MtcmlnaHQucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzaW9uQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgb2JqZWN0Rml0OiAnY292ZXInfX1zcmM9XCJodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzk0YjI1NV83NDg4NWQzNzRjZjg0MjE0ODk5YzlkZjYwZDY1MzYzOH5tdjIuanBnL3YxL2ZpbGwvd18yODQsaF8zNzEsYWxfYyxxXzgwLHVzbV8xLjIwXzEuMDBfMC4wMSxlbmNfYXV0by9BVkFUQVIlMjBST04lMjBCLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidmlzaW9uVGV4dDIgbWVkaXVtXCI+Uk9OPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5DT05TRUlMPC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+TsOJR09DSUFUSU9OPC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+w4lWw4lORU1FTlRJRUw8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5HRVNUSU9OIERFIFBST0pFVDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkRJUkVDVElPTiBBUlRJU1RJUVVFPC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+RElSRUNUSU9OIEQnRVhQTE9JVEFUSU9OPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5Ew4lWRUxPUFBFTUVOVCBDT01NRVJDSUFMIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgPC9Td2lwZXI+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICB7LyogPC9QYXJhbGxheD4gKi99XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFZpc2lvbjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IE1hcnF1ZWUgZnJvbSBcInJlYWN0LWZhc3QtbWFycXVlZVwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSBcInJlYWN0LXBhcmFsbGF4XCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlc2hlZXRzL2J1bG1hL2hlbHBlcnMvc3BhY2luZy5zYXNzXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiO1xyXG5cclxuY29uc3QgV29yZHBhZ2UgPSAoe30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIDxQYXJhbGxheCBiZ0ltYWdlPVwiL3plbml0aC9pbWFnZXMvNld2ZW1tM0suanBlZ1wiIHN0cmVuZ3RoPXswfT4gKi99XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy82V3ZlbW0zSy5qcGVnKVwiLFxyXG4gICAgICAgICAgaGVpZ2h0OiBcIjU3MHB4XCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJkZW1pYmxvY1wiXHJcbiAgICAgICAgYWx0PVwid29yZHBhZ2VcIlxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPiAqL31cclxuICAgICAgICB7LyogPHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmc0Lm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT4gKi99XHJcbiAgICAgICAgey8qIDwvdmlkZW8+ICovfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIGFsdD1cIkxpc3RlIGRlIG1vdHNcIiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgZGF0YS1hb3M9XCJ6b29tLWluXCJcclxuICAgICAgICAgICAgZGF0YS1hb3MtbWlycm9yPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zLWFuY2hvci1wbGFjZW1lbnQ9XCJ0b3AtY2VudGVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJlbnRcIj5cclxuICAgICAgICAgICAgICA8TWFycXVlZVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNzBweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGdyYWRpZW50PXtmYWxzZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid29yZHBhZ2UgbGV0dGVyU3BhY2luZyBsaWdodCBncmlkMSBweC02XCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJ3b3JkcGFnZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFLDiUFDVElWSVTDiVxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYXJnaW4gbWVkaXVtIHdvcmRwYWdlVGV4dCBncmlkMiBwci01XCI+wrc8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndvcmRwYWdlIGxldHRlclNwYWNpbmcgb3V0bGluZSBub3JtYWwgZ3JpZDMgcHgtNlwiPlxyXG4gICAgICAgICAgICAgICAgICBQUk9YSU1JVMOJXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIiBtYXJnaW4gbWVkaXVtIHdvcmRwYWdlVGV4dCBvdXRsaW5lIGdyaWQ0IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2UgbGlnaHQgbGV0dGVyU3BhY2luZyBncmlkNSBweC02XCI+UEFTU0lPTjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCAgbWVkaXVtIGdyaWQ2IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2Ugbm9ybWFsIG91dGxpbmUgbGV0dGVyU3BhY2luZyBncmlkNyBweC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIFNUUkFUw4lHSUVcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBvdXRsaW5lIG1lZGl1bSBncmlkNiBwci01XCI+wrc8L2gxPlxyXG4gICAgICAgICAgICAgIDwvTWFycXVlZT5cclxuICAgICAgICAgICAgICA8TWFycXVlZVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNzBweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj17XCJyaWdodFwifVxyXG4gICAgICAgICAgICAgICAgZ3JhZGllbnQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3b3JkcGFnZSBub3JtYWwgbGV0dGVyU3BhY2luZyBncmlkOSBweC02XCI+RVZFTlQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIiB3b3JkcGFnZVRleHQgbWVkaXVtIGdyaWQxMCBwci01XCI+wrc8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndvcmRwYWdlIG1hcnJvbiBub3JtYWwgbGV0dGVyU3BhY2luZyBncmlkMTEgcHgtNlwiPlxyXG4gICAgICAgICAgICAgICAgICBaRU5JVEhcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBvdXRsaW5lIG1lZGl1bSBncmlkMTIgcHItNVwiPsK3PC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3b3JkcGFnZSBub3JtYWwgbGV0dGVyU3BhY2luZyBncmlkMTMgcHgtNlwiPlxyXG4gICAgICAgICAgICAgICAgICBDT05TRUlMXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIiB3b3JkcGFnZVRleHQgbWVkaXVtIGdyaWQxNCBwci01XCI+wrc8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndvcmRwYWdlIG5vcm1hbCBsZXR0ZXJTcGFjaW5nIGdyaWQxNSBweC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIENPTU1VTklDQVRJT05cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBvdXRsaW5lIG1lZGl1bSBncmlkNiBwci01XCI+wrc8L2gxPlxyXG4gICAgICAgICAgICAgIDwvTWFycXVlZT5cclxuICAgICAgICAgICAgICA8TWFycXVlZVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNzBweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGdyYWRpZW50PXtmYWxzZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2UgbWVkaXVtIGxldHRlclNwYWNpbmcgZ3JpZDE3IHB4LTZcIj5cclxuICAgICAgICAgICAgICAgICAgQ1LDiUFUSVZJVMOJXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIiB3b3JkcGFnZVRleHQgbWVkaXVtIGdyaWQxOCBwci01XCI+wrc8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndvcmRwYWdlIGxpZ2h0IG91dGxpbmUgbGV0dGVyU3BhY2luZyBncmlkMTkgcHgtNlwiPlxyXG4gICAgICAgICAgICAgICAgICBSw4pWRVJcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBvdXRsaW5lIG1lZGl1bSBncmlkMjAgcHItNVwiPsK3PC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3b3JkcGFnZSBsaWdodCBsZXR0ZXJTcGFjaW5nIGdyaWQyMSBweC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIEFNQklUSU9OXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIiB3b3JkcGFnZVRleHQgbWVkaXVtIGdyaWQyMiBwci01XCI+wrc8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndvcmRwYWdlIG91dGxpbmUgbm9ybWFsIGxldHRlclNwYWNpbmcgZ3JpZDIzIHB4LTZcIj5cclxuICAgICAgICAgICAgICAgICAgSU1BR0lOQVRJT05cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBvdXRsaW5lIG1lZGl1bSBncmlkNiBwci01XCI+wrc8L2gxPlxyXG4gICAgICAgICAgICAgIDwvTWFycXVlZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8L1BhcmFsbGF4PiAqL31cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JkcGFnZTtcclxuIiwiaW1wb3J0IE5hdmJhciBmcm9tICcuLi9fbmF2YmFyJztcclxuaW1wb3J0IFByb2plY3RQYWdlT25lIGZyb20gXCIuL19wcm9qZWN0cGFnZU9uZVwiO1xyXG5pbXBvcnQgUHJvamVjdHBhZ2VUd28gZnJvbSAnLi9fcHJvamVjdHBhZ2VUd28nO1xyXG5pbXBvcnQgUHJvamVjdHBhZ2VUaHJlZSBmcm9tICcuL19wcm9qZWN0cGFnZVRocmVlJztcclxuaW1wb3J0IFByb2plY3RwYWdlRm91ciBmcm9tICcuL19wcm9qZWN0cGFnZUZvdXInO1xyXG5pbXBvcnQgUHJvamVjdHBhZ2VGaXZlIGZyb20gJy4vX3Byb2plY3RwYWdlRml2ZSc7XHJcbmltcG9ydCBQcm9qZWN0cGFnZVNpeCBmcm9tICcuL19wcm9qZWN0cGFnZVNpeCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gUHJvamVjdHBhZ2UoKSB7XHJcblx0ZnVuY3Rpb24gZmFkZU91dCggZWxlbSwgbXMgKVxyXG5cdHtcclxuXHRpZiggISBlbGVtIClcclxuXHRcdHJldHVybjtcclxuXHJcblx0aWYoIG1zIClcclxuXHR7XHJcblx0XHR2YXIgb3BhY2l0eSA9IDE7XHJcblx0XHR2YXIgdGltZXIgPSBzZXRJbnRlcnZhbCggZnVuY3Rpb24oKSB7XHJcblx0XHRvcGFjaXR5IC09IDUwIC8gbXM7XHJcblx0XHRpZiggb3BhY2l0eSA8PSAwIClcclxuXHRcdHtcclxuXHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcblx0XHRcdG9wYWNpdHkgPSAwO1xyXG5cdFx0XHRlbGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdFx0ZWxlbS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuXHRcdH1cclxuXHRcdGVsZW0uc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XHJcblx0XHRlbGVtLnN0eWxlLmZpbHRlciA9IFwiYWxwaGEob3BhY2l0eT1cIiArIG9wYWNpdHkgKiAxMDAgKyBcIilcIjtcclxuXHRcdH0sIDUwICk7XHJcblx0fVxyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRlbGVtLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG5cdFx0ZWxlbS5zdHlsZS5maWx0ZXIgPSBcImFscGhhKG9wYWNpdHk9MClcIjtcclxuXHRcdGVsZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0ZWxlbS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuXHR9XHJcblx0fVxyXG5cdGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG5cdGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzTG9hZGVkSW1nLCBzZXRJc0xvYWRlZEltZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzTG9hZGVkTmV4dFByZXYsIHNldElzTG9hZGVkTmV4dFByZXZdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0ltZ1JlYWR5LCBzZXRJbWdSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbaGVhZGVyLCBzZXRIZWFkZXJdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtwcmVjaSwgc2V0UHJlY2ldID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtzZWNvbmQsIHNldFNlY29uZF0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtOZXh0UHJldiwgc2V0TmV4dFByZXZdID0gdXNlU3RhdGUoW10pO1xyXG5cdGlmKGlkKXtcclxuXHRcdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRcdGZldGNoKGAvYXBpL3Byb2pldHMvJHtpZH1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdHNldEl0ZW1zKHJlc3VsdCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblxyXG5cdFx0XHRmZXRjaChgL2dldEltYWdlc1Byb2pldC8ke2lkfWAse21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0XHQudGhlbihcclxuXHRcdFx0XHQocmVzdWx0aW1nKSA9PiB7XHJcblx0XHRcdFx0bGV0IHRoaXNSZXMgPSBKU09OLnBhcnNlKHJlc3VsdGltZylcclxuXHRcdFx0XHRzZXRJc0xvYWRlZEltZyh0cnVlKTtcclxuXHRcdFx0XHRzZXRJbWFnZXMoSlNPTi5wYXJzZShyZXN1bHRpbWcpKTtcclxuXHRcdFx0XHRpZiggdGhpc1JlcyA9PSBcIltdXCIgfHwgdGhpc1Jlcy5sZW5ndGggPT0gMCl7XHJcblx0XHRcdFx0XHRzZXRJbWdSZWFkeSh0cnVlKVxyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKHRoaXNSZXMpe1xyXG5cdFx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXNSZXMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzUmVzW2ldKVxyXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhpKVxyXG5cdFx0XHRcdFx0XHRpZih0aGlzUmVzW2ldLmhlYWRlcilcclxuXHRcdFx0XHRcdFx0XHRzZXRIZWFkZXIodGhpc1Jlc1tpXSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlc1tpXS5mb2N1cylcclxuXHRcdFx0XHRcdFx0XHRzZXRQcmVjaSh0aGlzUmVzW2ldKVxyXG5cdFx0XHRcdFx0XHRpZih0aGlzUmVzW2ldLnNlY29uZGFpcmUpXHJcblx0XHRcdFx0XHRcdFx0c2V0U2Vjb25kKHRoaXNSZXNbaV0pXHJcblx0XHRcdFx0XHRcdC8vIGlmKGltYWdlc1tpXS52aXNpYmxlKVxyXG5cdFx0XHRcdFx0XHQvLyBcdHNldERpc3BsYXkoLi4uaW1hZ2VzW2ldKVxyXG5cdFx0XHRcdFx0XHRpZih0aGlzUmVzLmxlbmd0aC0xID09IGkpe1xyXG5cdFx0XHRcdFx0XHRcdHNldEltZ1JlYWR5KHRydWUpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cclxuXHRcdFx0ZmV0Y2goYC9OZXhQcmV2UC8ke2lkfWAse21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0XHQudGhlbihcclxuXHRcdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0bGV0IE5leHQgPSBKU09OLnBhcnNlKHJlc3VsdFswXSlcclxuXHRcdFx0XHRsZXQgUHJldiA9IEpTT04ucGFyc2UocmVzdWx0WzFdKVxyXG5cdFx0XHRcdGlmKE5leHQgJiYgUHJldil7XHJcblx0XHRcdFx0XHRzZXROZXh0UHJldihbTmV4dCwgUHJldl0pO1xyXG5cdFx0XHRcdFx0aWYoTmV4dFByZXYpe1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhOZXh0UHJldilcclxuXHRcdFx0XHRcdFx0c2V0SXNMb2FkZWROZXh0UHJldih0cnVlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0fSwgW10pXHJcblx0fVxyXG5cclxuXHRpZiAoZXJyb3IpIHtcclxuXHRcdCByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG5cdCAgfSBlbHNlIGlmICgoIWlzTG9hZGVkIHx8ICFpc0ltZ1JlYWR5IHx8ICFpc0xvYWRlZE5leHRQcmV2KSB8fCBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnY29tcGxldGUnKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcdDxzdmcgaWQ9XCJSZWFjdExvYWRlclwiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+XHJcblx0XHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2Utc3RpbGxcIiBwb2ludHM9XCIwLDAgMTAwLDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2Utc3RpbGxcIiBwb2ludHM9XCIwLDAgMCwxMDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2UtYW5pbWF0aW9uXCIgcG9pbnRzPVwiMCwwIDEwMCwwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLWFuaW1hdGlvblwiIHBvaW50cz1cIjAsMCAwLDEwMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdCAgfSBlbHNlIHtcclxuXHRcdGZhZGVPdXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNSZWFjdExvYWRlclwiLCAxMDAwKSlcclxuXHRcdFx0cmV0dXJuICggXHJcblx0XHRcdFx0PD5cclxuXHRcdFx0XHQ8TmF2YmFyPjwvTmF2YmFyPlxyXG5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8UHJvamVjdFBhZ2VPbmUgZGF0YT17aXRlbXN9PjwvUHJvamVjdFBhZ2VPbmU+XHJcblx0XHRcdFx0PFByb2plY3RwYWdlVHdvIGRhdGE9e2l0ZW1zfT48L1Byb2plY3RwYWdlVHdvPlxyXG5cdFx0XHRcdDxQcm9qZWN0cGFnZVRocmVlIGRhdGE9e3NlY29uZH0+PC9Qcm9qZWN0cGFnZVRocmVlPlxyXG5cdFx0XHRcdDxQcm9qZWN0cGFnZUZvdXIgcHJlY2k9e3ByZWNpfSBkYXRhMj17aXRlbXN9PjwvUHJvamVjdHBhZ2VGb3VyPlxyXG5cdFx0XHRcdDxQcm9qZWN0cGFnZUZpdmUgaW1hZ2VzPXtpbWFnZXN9PjwvUHJvamVjdHBhZ2VGaXZlPlxyXG5cdFx0XHRcdDxQcm9qZWN0cGFnZVNpeCBkYXRhPXtpdGVtc30gbnA9e05leHRQcmV2fT48L1Byb2plY3RwYWdlU2l4PlxyXG5cdFx0XHRcdDwvPlxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuLy9cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHBhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gXCJyZWFjdC1wYXJhbGxheFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlc2hlZXRzL2J1bG1hL2VsZW1lbnRzL2NvbnRhaW5lci5zYXNzXCJcclxuaW1wb3J0IExpZ2h0Ym94IGZyb20gXCJ5ZXQtYW5vdGhlci1yZWFjdC1saWdodGJveFwiO1xyXG5pbXBvcnQgVGh1bWJuYWlscyBmcm9tIFwieWV0LWFub3RoZXItcmVhY3QtbGlnaHRib3gvcGx1Z2lucy90aHVtYm5haWxzXCI7XHJcbmltcG9ydCBcInlldC1hbm90aGVyLXJlYWN0LWxpZ2h0Ym94L3BsdWdpbnMvdGh1bWJuYWlscy5jc3NcIjtcclxuaW1wb3J0IFwieWV0LWFub3RoZXItcmVhY3QtbGlnaHRib3gvc3R5bGVzLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gUHJvamVjdHBhZ2VGaXZlKGltYWdlcykge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBsZXQgYXJyYXlJbWFnZSA9IFtdXHJcbiAgY29uc29sZS5sb2coaW1hZ2VzLmltYWdlcyk7XHJcbiAgaW1hZ2VzLmltYWdlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgbGV0IGl0ZW0gPSB7IHNyYzogYC9pbWFnZXMvaW1hZ2Vwcm9qZXQvJHtlbGVtZW50LmltYWdlfWB9XHJcbiAgICBhcnJheUltYWdlLnB1c2goaXRlbSlcclxuICB9KTtcclxuXHJcbiAgaWYoYXJyYXlJbWFnZS5sZW5ndGg+MCl7XHJcbiAgY29uc29sZS5sb2coYXJyYXlJbWFnZSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9aMXpJSkNLay5qcGVnXCIgc3RyZW5ndGg9ezgwMH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwiLCBkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCJ9fT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1jZW50ZXJlZFwiIHN0eWxlPXt7aGVpZ2h0OlwiOTAlXCIsd2lkdGg6XCI4MCVcIiwgcGFkZGluZ1RvcDpcIjUwcHhcIn19PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS10aGlyZFwiIHN0eWxlPXt7YmFja2dyb3VuZDpcIiMwMjExMURcIiwgcGFkZGluZzpcIjBcIiwgcGFkZGluZzpcIjBcIn19PlxyXG4gICAgICAgICAgICAgIHtpbWFnZXMuaW1hZ2VzWzBdID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzpcIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL2ltYWdlcHJvamV0L1wiICsgaW1hZ2VzLmltYWdlc1swXS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKSA6ICg8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCB3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiMTAwJVwifX0+PGltZyBzdHlsZT17e3dpZHRoOlwiNTAlXCJ9fSBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn0gYWx0PVwiXCIvPjwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS10aGlyZCBjb2x1bW5zIGlzLW11bHRpbGluZSBteC01XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1mdWxsIG15LTVcIiBzdHlsZT17e2JhY2tncm91bmQ6XCIjMDIxMTFEXCIsIHBhZGRpbmc6XCIwXCJ9fT4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7aW1hZ2VzLmltYWdlc1sxXSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOlwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL2ltYWdlcHJvamV0L1wiICsgaW1hZ2VzLmltYWdlc1sxXS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6ICg8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCB3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiMTAwJVwifX0+PGltZyBzdHlsZT17e3dpZHRoOlwiNTAlXCJ9fSBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn0gYWx0PVwiXCIvPjwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1mdWxsIG15LTVcIiBzdHlsZT17e2JhY2tncm91bmQ6XCIjMDIxMTFEXCIsIHBhZGRpbmc6XCIwXCJ9fT4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtpbWFnZXMuaW1hZ2VzWzJdID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzpcIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvaW1hZ2Vwcm9qZXQvXCIgKyBpbWFnZXMuaW1hZ2VzWzJdLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIHdpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT48aW1nIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19IHNyYz17XCIvemVuaXRoL2F1dHJlL25vSW1nLnBuZ1wifSBhbHQ9XCJcIi8+PC9kaXY+KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtb25lLXRoaXJkIGlzLW1vYmlsZVwiIHN0eWxlPXt7YmFja2dyb3VuZDpcIiMwMjExMURcIiwgcGFkZGluZzpcIjBcIn19PlxyXG4gICAgICAgICAgICAgIHtpbWFnZXMuaW1hZ2VzWzNdID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvaW1hZ2Vwcm9qZXQvXCIgKyBpbWFnZXMuaW1hZ2VzWzNdLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIHdpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT48aW1nIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19IHNyYz17XCIvemVuaXRoL2F1dHJlL25vSW1nLnBuZ1wifSBhbHQ9XCJcIi8+PC9kaXY+KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW1vYmlsZSBpcy1jZW50ZXJlZCBtdC01LWZ1bGxoZFwiIHN0eWxlPXt7cG9zaXRpb246IFwiYWJzb2x1dGVcIiwgYm90dG9tOlwiMjVweFwiLCB3aWR0aDpcIjEwMSVcIn19PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0T3Blbih0cnVlKX0gY2xhc3NOYW1lPVwiYnRuUyBjZW50ZXIgbGlnaHQgbGV0dGVyU3BhY2luZ00gbWItNiBtdC0wXCI+XHJcbiAgICAgICAgICAgICAgICBFTiBWT0lSICtcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgICAgIDxMaWdodGJveFxyXG4gICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgY2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgIHBsdWdpbnM9e1tUaHVtYm5haWxzXX1cclxuICAgICAgICAgICAgICBzbGlkZXM9e2FycmF5SW1hZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1BhcmFsbGF4PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cGFnZUZpdmU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gUHJvamVjdHBhZ2VGb3VyKHtwcmVjaSwgZGF0YTJ9KSB7XHJcblx0Y29uc29sZS5sb2cocHJlY2kpXHJcblx0aWYoZGF0YTIuZm9jdXMpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMvNld2ZW1tM0suanBlZylcIiwgaGVpZ2h0OiBcIjExMDBweFwifX0gY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlx0XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPScnc3R5bGU9e3sgaGVpZ2h0OiBcIjExMDBweFwifX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3dyYXBwZXIyJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXJDZW50ZXJBJz5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyZW50MjEgbWFyZ2luVG9wJz5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYXJnaW5Ub3AyJyA+XHJcblx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nbGlnaHQgbGV0dGVyU3BhY2luZ1MnPkZvY3VzPC9oMz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGlnaHQgY29udGFpbmVyQ2VudGVyQ2xpZW50IHRleHQtaDUnIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnfX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YTIuZm9jdXN9fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nIGJveENsaWVudCcgc3R5bGU9e3toZWlnaHQ6ICc4MDBweCcsIHdpZHRoOlwiNjAwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHRcdHtwcmVjaS5pbWFnZSA/ICg8aW1nIGNsYXNzTmFtZT0nIGNvbnRhaW4nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtcIi9pbWFnZXMvaW1hZ2Vwcm9qZXQvXCIgKyBwcmVjaS5pbWFnZX0gYWx0PVwiXCIvPikgOiAoPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgd2lkdGg6XCIxMDAlXCIsIGhlaWdodDpcIjEwMCVcIn19PjxpbWcgc3R5bGU9e3t3aWR0aDpcIjUwJVwifX0gc3JjPXtcIi96ZW5pdGgvYXV0cmUvbm9JbWcucG5nXCJ9IGFsdD1cIlwiLz48L2Rpdj4pfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHRcdFxyXG5cclxuXHJcblxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH19XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHBhZ2VGb3VyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0cGFnZU9uZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZDFcIiBhbHQ9XCJob21lcGFnZVwiPlxyXG5cclxuXHRcdFx0PHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eUJsdWVcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXIyXCI+XHJcblx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi96ZW5pdGgvaW1hZ2VzL2JJTzFyOUYucG5nXCIgYWx0PVwiTG9nb1wiIHdpZHRoPXsyMDB9IGNsYXNzTmFtZT1cImNlbnRlclwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlx0XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7dGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSd9fSBjbGFzc05hbWU9XCJjbGllbnRwYWdlVGV4dFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJtZWRpdW0gbWFyZ2luU3RvcCBjbGllbnREZXRhaWxcIj57ZGF0YS5kYXRhLnByb2pldH08L2gxPlxyXG5cdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9XCJsaWdodCBtYXJnaW5TdG9wIGNsaWVudERldGFpbFwiPntkYXRhLmRhdGEuc2VjdGV1ci5zZWN0ZXVyfTwvaDY+XHJcblx0XHRcdFx0XHRcdFx0e2RhdGEuZGF0YS5jbGllbnQgPyA8cCBjbGFzc05hbWU9XCJsaWdodCBtYXJnaW5TdG9wIGNsaWVudERldGFpbFwiPlVOIFBST0pFVCBQT1VSIDoge2RhdGEuZGF0YS5jbGllbnQubm9tQ2xpZW50fTwvcD4gOiAgPHAgY2xhc3NOYW1lPVwibGlnaHQgbWFyZ2luU3RvcCBjbGllbnREZXRhaWxcIj5VTiBQUk9KRVQgUE9VUiA6IE4vQTwvcD59XHJcblx0XHRcdFx0XHRcdFx0e2RhdGEuZGF0YS5kdXJlZSA/IDxwIGNsYXNzTmFtZT1cImxpZ2h0IGNsaWVudERldGFpbFwiPkRVUsOJRSBQUk9KRVQgOiB7ZGF0YS5kYXRhLmR1cmVlfTwvcD4gOiA8cCBjbGFzc05hbWU9XCJsaWdodCBjbGllbnREZXRhaWxcIj5EVVLDiUUgUFJPSkVUIDogTi9BPC9wPn1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcclxuXHJcblx0XHRcdFx0XHRcdFx0PExpbmsgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCJ9fSB0bz17YC9zZWFyY2hjYXQvcHJvamV0LyR7ZGF0YS5kYXRhLmNhdGVnb3JpZVswXS5pZH0vJHtkYXRhLmRhdGEuY2F0ZWdvcmllWzBdLmNhdGVnb3JpZX1gfT48cCBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lXCIsIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnfX0gY2xhc3NOYW1lPVwibGlnaHQgY2xpZW50RGV0YWlsMlwiPntkYXRhLmRhdGEuY2F0ZWdvcmllWzBdLmNhdGVnb3JpZX08L3A+PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuY2F0ZWdvcmllWzFdICYmIDw+PHAgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZVwifX0gY2xhc3NOYW1lPVwibGlnaHQgY2xpZW50RGV0YWlsMlwiPiAgIHwgICA8L3A+IDxMaW5rIHRvPXtgL3NlYXJjaGNhdC9jbGllbnQvJHtkYXRhLmRhdGEuY2F0ZWdvcmllWzFdLmlkfS8ke2RhdGEuZGF0YS5jYXRlZ29yaWVbMV0uY2F0ZWdvcmllfWB9ID48cCBjbGFzc05hbWU9XCJsaWdodCBjbGllbnREZXRhaWwyXCIgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZVwiLCB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJywgdGV4dERlY29yYXRpb246IFwibm9uZVwiLCBjb2xvcjogXCJ3aGl0ZVwifX0+e2RhdGEuZGF0YS5jYXRlZ29yaWVbMV0uY2F0ZWdvcmllfTwvcD48L0xpbms+PC8+fVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyM1wiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoNCBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ319IGNsYXNzTmFtZT1cImxpZ2h0IGxldHRlclNwYWNpbmdTICBkaXNjb3ZlckNsaWVudDJcIj57ZGF0YS5kYXRhLm1pc3Npb259PC9oND5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxpZ2h0ICBkaXNjb3ZlckNsaWVudFwiPkTDiUNPVVZSRVo8L3A+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaW5lQ2xpZW50XCIgPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cGFnZU9uZTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0cGFnZVNpeCh7ZGF0YSwgbnB9KSB7XHJcblx0aWYobnBbMF0pe1xyXG5cdFx0aWYobnBbMF1bMF0gPT0gJ251bGwnKVxyXG5cdFx0XHRucFswXVswXSA9IGZhbHNlO1xyXG5cdFx0aWYobnBbMF1bMV0gPT0gJ251bGwnKVxyXG5cdFx0XHRucFsxXVswXSA9IGZhbHNlO1xyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMvNld2ZW1tM0suanBlZylcIn19IGNsYXNzTmFtZT0nZGVtaWJsb2NPcGFjaXR5Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lckNlbnRlciBtYXJnaW5Ub3BTJyBzdHlsZT17e21hcmdpblRvcDpcIjBcIn19PlxyXG5cdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdtZWRpdW0gY2VudGVyVGV4dCc+VU4gVMOJTU9JR05BR0U8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGlnaHQgY2VudGVyVGV4dCcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YS50ZW1vaWduYWdlfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy94OW5lczVWLmpwZylcIn19IGNsYXNzTmFtZT0nZGVtaWJsb2NDbGllbnQnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2RlbWlibG9jT3BhY2l0eSc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJlbnRDbGllbnROZXh0UHJldic+XHJcblxyXG5cdFx0XHRcdFx0XHRcdHtucFsxXVswXSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J0NsaWVudE5leHRQcmV2MScgb25DbGljaz17KCk9Pntsb2NhdGlvbi5ocmVmID0gXCIvcHJvamV0L1wiKyBucFsxXVswXS5pZH19IHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPSdsaWdodCByaWdodFRleHQgbWFyZ2luVG9wUyc+UFJPSkVUIFBSw4lDw4lERU5UPC9oNj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT0ncmlnaHRUZXh0Jz57bnBbMV1bMF0ucHJvamV0fTwvaDU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9J2xpZ2h0IHJpZ2h0VGV4dCc+e25wWzFdWzBdLm1pc3Npb259PC9oNj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2Pn1cclxuXHJcblx0XHRcdFx0XHRcdFx0e25wWzBdWzBdICYmIDxkaXYgY2xhc3NOYW1lPSdDbGllbnROZXh0UHJldjInIG9uQ2xpY2s9eygpPT57bG9jYXRpb24uaHJlZiA9IFwiL3Byb2pldC9cIisgbnBbMF1bMF0uaWR9fSBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT0nbGlnaHQgbGVmdFRleHQgbWFyZ2luVG9wUyc+UFJPSkVUIFNVSVZBTlQ8L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPSdsZWZ0VGV4dCc+e25wWzBdWzBdLnByb2pldH08L2g1PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPSdsaWdodCBsZWZ0VGV4dCc+e25wWzBdWzBdLm1pc3Npb259PC9oNj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2Pn1cclxuXHRcdFx0XHRcdFx0XHR7LyogPGEgaHJlZj17XCIvY2xpZW50L1wiK25wWzFdWzBdLmlkfT4gKi99XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cGFnZVNpeDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIFByb2plY3RwYWdlVGhyZWUoZGF0YSkge1xyXG5cdGNvbnNvbGUubG9nKGRhdGEpXHJcblx0aWYoZGF0YS5sZW5ndGggPiAwKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3dyYXBwZXJEYXJrQmx1ZUNsaWVudCcgc3R5bGU9e3toZWlnaHQ6XCI4MDBweFwiLCB3aWR0aDpcIjEwMCVcIn19PlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9e1wiL2ltYWdlcy9pbWFnZXByb2pldC9cIiArIGRhdGEuZGF0YS5pbWFnZX0gYWx0PVwiXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG4gfVxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cGFnZVRocmVlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gUHJvamVjdHBhZ2VUd28oZGF0YSkge1xyXG5cdGlmKGRhdGEuZGF0YS5kZW1hbmRlIHx8IGRhdGEuZGF0YS5kZWZpIHx8IGRhdGEuZGF0YS5hY3Rpb24pe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy82V3ZlbW0zSy5qcGVnKVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fSBjbGFzc05hbWU9J2RlbWlibG9jQ2xpZW50Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW5zJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbHVtbiBjb2x1bW5zIGlzLWNlbnRlcmVkJz5cclxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLmRlbWFuZGUgJiZcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGlzLWNlbnRlcmVkIGlzLTQnIHN0eWxlPXt7bWFyZ2luVG9wOlwiNDhweFwiLCBtYXJnaW5SaWdodDpcImF1dG9cIiwgbWFyZ2luTGVmdDpcImF1dG9cIn19PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nbGlnaHQnPlVORSBERU1BTkRFPC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19IGNsYXNzTmFtZT0nbGlnaHQgY29udGFpbmVyQ2VudGVyQ2xpZW50IHB4LTYnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YS5kYXRhLmRlbWFuZGV9fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj4gXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLmRlZmkgJiZcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGlzLWNlbnRlcmVkIGlzLTQnIHN0eWxlPXt7bWFyZ2luVG9wOlwiNDhweFwiLCBtYXJnaW5SaWdodDpcImF1dG9cIiwgbWFyZ2luTGVmdDpcImF1dG9cIn19PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nbGlnaHQnPlVOIETDiUZJPC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19IGNsYXNzTmFtZT0nbGlnaHQgY29udGFpbmVyQ2VudGVyQ2xpZW50IGNvbHVtbnMgaXMtdmNlbnRlcmVkIGlzLWNlbnRlcmVkIHB4LTYnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmRhdGEuZGF0YS5kZWZpfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLmFjdGlvbiAmJlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gaXMtY2VudGVyZWQgaXMtNCcgIHN0eWxlPXt7bWFyZ2luVG9wOlwiNDhweFwiLCBtYXJnaW5SaWdodDpcImF1dG9cIiwgbWFyZ2luTGVmdDpcImF1dG9cIn19PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nbGlnaHQnPlVORSBBQ1RJT048L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0gY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQgY29sdW1ucyBpcy12Y2VudGVyZWQgaXMtY2VudGVyZWQgcHgtNicgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YS5kYXRhLmFjdGlvbn19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcblx0fVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RwYWdlVHdvO1xyXG4iLCJpbXBvcnQgU2VhcmNoUGFnZU9uZTIgZnJvbSBcIi4vX1NlYXJjaFBhZ2VPbmUyXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vX25hdmJhcic7XHJcbmltcG9ydCBSc0J1dHRvbiBmcm9tICcuLi9fcnNCdXR0b24nO1xyXG5pbXBvcnQgTGluZXNUb3AgZnJvbSAnLi4vX2xpbmVzVG9wJztcclxuaW1wb3J0IExpbmVzQm90dG9tIGZyb20gJy4uL19saW5lc0JvdHRvbSc7XHJcbmltcG9ydCBTZWFyY2hQYWdlVHdvMiBmcm9tIFwiLi9fU2VhcmNoUGFnZVR3bzJcIjtcclxuaW1wb3J0IE1pbmlGb290ZXIgZnJvbSBcIi4uL0hvbWVwYWdlL19taW5pRm9vdGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2xvYWRlci5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIFNlYXJjaFBhZ2UyKCkge1xyXG5cdGNvbnN0IHsgaW5mbyB9ID0gdXNlUGFyYW1zKCk7XHJcblx0Y29uc3QgeyBuYW1lIH0gPSB1c2VQYXJhbXMoKTtcclxuXHRjb25zdCB7IHR5cGUgfSA9IHVzZVBhcmFtcygpO1xyXG5cdGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzTG9hZGVkSW1nLCBzZXRJc0xvYWRlZEltZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzTG9hZGVkTmV4dFByZXYsIHNldElzTG9hZGVkTmV4dFByZXZdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0ltZ1JlYWR5LCBzZXRJbWdSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbaGVhZGVyLCBzZXRIZWFkZXJdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtwcmVjaSwgc2V0UHJlY2ldID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtzZWNvbmQsIHNldFNlY29uZF0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtOZXh0UHJldiwgc2V0TmV4dFByZXZdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtsb2FkLCBzZXRMb2FkXSA9IHVzZVN0YXRlKFwiaGlkZGVuXCIpXHJcblxyXG5cdFx0Y29uc3Qgc2V0TG9hZGluZyA9IHBhcmFtID0+IHtcclxuXHRcdFx0aWYocGFyYW0gPT0gdHJ1ZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiZ290Y2hhXCIpXHJcblx0XHRcdFx0c2V0TG9hZChcInZpc2libGVcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG5cdFx0XHRmZXRjaChgL2dldHNlYXJjaGNhdC8ke2luZm99LyR7dHlwZX1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdHNldEl0ZW1zKHJlc3VsdCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHRcdC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0XHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHR9LCBbXSlcdFx0XHJcblxyXG5cclxuXHJcblx0aWYgKGVycm9yKSB7XHJcblx0XHQgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuXHQgIH0gZWxzZSBpZiAoIWlzTG9hZGVkIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdjb21wbGV0ZScpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PHN2ZyBpZD1cIlJlYWN0TG9hZGVyXCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1zdGlsbFwiIHBvaW50cz1cIjAsMCAxMDAsMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1zdGlsbFwiIHBvaW50cz1cIjAsMCAwLDEwMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1hbmltYXRpb25cIiBwb2ludHM9XCIwLDAgMTAwLDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2UtYW5pbWF0aW9uXCIgcG9pbnRzPVwiMCwwIDAsMTAwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0ICB9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gKCAgXHJcblx0XHQ8PlxyXG5cdFx0PE5hdmJhcj48L05hdmJhcj5cclxuXHRcdDxSc0J1dHRvbj48L1JzQnV0dG9uPlxyXG5cdFx0PExpbmVzVG9wPjwvTGluZXNUb3A+XHJcblx0XHQ8TGluZXNCb3R0b20+PC9MaW5lc0JvdHRvbT5cclxuXHRcdFxyXG5cdFx0PFNlYXJjaFBhZ2VPbmUyIHNldExvYWRpbmc9e3NldExvYWRpbmd9IGRhdGEgPSB7bmFtZX0+PC9TZWFyY2hQYWdlT25lMj5cclxuXHRcdDxkaXYgc3R5bGU9e3t2aXNpYmlsaXR5OmxvYWR9fT48U2VhcmNoUGFnZVR3bzIgZGF0YT17aXRlbXN9PjwvU2VhcmNoUGFnZVR3bzI+PC9kaXY+XHJcblx0XHRcclxuXHRcdHsvKiA8V29ya3BhZ2VUaHJlZT48L1dvcmtwYWdlVGhyZWU+XHJcblx0XHQ8V29ya3BhZ2VGb3VyPjwvV29ya3BhZ2VGb3VyPlxyXG5cdFx0PFdvcmtwYWdlRml2ZT48L1dvcmtwYWdlRml2ZT4qL31cclxuXHRcdDxNaW5pRm9vdGVyPjwvTWluaUZvb3Rlcj4gXHJcblx0XHQ8Lz5cclxuXHQgKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFBhZ2UyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoUGFnZU9uZTIoe3NldExvYWRpbmcsZGF0YX0pIHtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0TG9hZGluZyh0cnVlKVxyXG5cdCAgfSwgWzFdKTtcclxuXHRBT1MuaW5pdCgpXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZDFcIiBhbHQ9XCJob21lcGFnZVwiPlxyXG5cclxuXHRcdFx0PHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHQ8L3ZpZGVvPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHlCbHVlXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyMlwiPlxyXG5cdFx0XHRcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayB0bz1cIi9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL3plbml0aC9pbWFnZXMvYklPMXI5Ri5wbmdcIiBhbHQ9XCJMb2dvXCIgd2lkdGg9ezIwMH0gY2xhc3NOYW1lPVwiY2VudGVyXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHRcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndvcmtwYWdlVGV4dFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJtZWRpdW1cIj5SRVNVTFRBVCBQT1VSIFwie2RhdGF9XCI8L2gxPlxyXG5cdFx0XHRcdFx0XHRcdHsvKiA8cCBjbGFzc05hbWU9XCJsaWdodFwiPkxPR08uIFdFQiBERVNJR04uIENBVEVHT1JJRTwvcD4gKi99XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFnZU9uZTI7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSBcInJlYWN0LXBhcmFsbGF4XCI7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hQYWdlVHdvMihkYXRhKSB7XHJcblx0Y29uc3QgeyB0eXBlIH0gPSB1c2VQYXJhbXMoKTtcclxuXHQvLyBjb25zb2xlLmxvZyhjb3VudClcclxuXHQvLyBsZXQgcGFnZU5iciA9IE1hdGguY2VpbChjb3VudCAvIDIwKVxyXG5cdC8vIGxldCBuYnIgPSBwYXJzZUludChwYWdlKVxyXG5cdC8vIGZ1bmN0aW9uIG9uQ2hhbmdlKHBhcmFtcykge1xyXG5cdC8vICAgZG9jdW1lbnQubG9jYXRpb24gPSBgL3Byb2pldHMvJHtwYXJhbXN9YFxyXG5cdC8vIH1cclxuICBcclxuXHRsZXQgYm94ID0gW107XHJcblx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGEuZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdGlmKHR5cGUgPT0gXCJwcm9qZXRcIil7XHJcblx0XHRcdGxldCBpdGVtID0gKFxyXG5cdFx0XHQgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY29sdW1uIGNvbHVtbnMgaXMtb25lLWZpZnRoIGlzLWNlbnRlcmVkXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpcy1oYWxmXCI+XHJcblx0XHRcdFx0PGEgaHJlZj17XCIvcHJvamV0L1wiICsgZGF0YS5kYXRhW2luZGV4XS5pZH0+XHJcblx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPlxyXG5cdFx0XHRcdFx0PHAgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9fSBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG5cdFx0XHRcdFx0ICB7ZGF0YS5kYXRhW2luZGV4XS5taXNzaW9ufVxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0e2RhdGEuZGF0YVtpbmRleF0uaGVhZGVyICE9PSBcInJpZW4gYSB2b2lyLCBjaXJjdWxlelwiID8gKDxpbWdcclxuXHRcdFx0XHRcdCAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxyXG5cdFx0XHRcdFx0ICBzcmM9e1wiL2ltYWdlcy9pbWFnZXByb2pldC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaGVhZGVyfVxyXG5cdFx0XHRcdFx0ICBhbHQ9XCJcIlxyXG5cdFx0XHRcdFx0Lz4pIDogKDxpbWcgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwifX0gc3JjPXtcIi96ZW5pdGgvYXV0cmUvbm9JbWcucG5nXCJ9IGFsdD1cIlwiLz4pfVxyXG5cdFx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHQpO1xyXG5cdFx0XHRib3gucHVzaChpdGVtKTtcclxuXHRcdH1cclxuXHRcdGlmKHR5cGUgPT0gXCJjbGllbnRcIil7XHJcblx0XHRcdGxldCBpdGVtID0gKFxyXG5cdFx0XHQgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY29sdW1uIGNvbHVtbnMgaXMtb25lLWZpZnRoIGlzLWNlbnRlcmVkXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpcy1oYWxmXCI+XHJcblx0XHRcdFx0PGEgaHJlZj17XCIvY2xpZW50L1wiICsgZGF0YS5kYXRhW2luZGV4XS5pZH0+XHJcblx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPlxyXG5cdFx0XHRcdFx0PHAgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9fSBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG5cdFx0XHRcdFx0ICB7ZGF0YS5kYXRhW2luZGV4XS5taXNzaW9ufVxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0e2RhdGEuZGF0YVtpbmRleF0uaGVhZGVyICE9PSBcInJpZW4gYSB2b2lyLCBjaXJjdWxlelwiID8gKDxpbWdcclxuXHRcdFx0XHRcdCAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxyXG5cdFx0XHRcdFx0ICBzcmM9e1wiL2ltYWdlcy9pbWFnZWNsaWVudC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaGVhZGVyfVxyXG5cdFx0XHRcdFx0ICBhbHQ9XCJcIlxyXG5cdFx0XHRcdFx0Lz4pIDogKDxpbWcgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwifX0gc3JjPXtcIi96ZW5pdGgvYXV0cmUvbm9JbWcucG5nXCJ9IGFsdD1cIlwiLz4pfVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdCk7XHJcblx0XHRcdGJveC5wdXNoKGl0ZW0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0XHJcblx0cmV0dXJuIChcclxuXHQgIDw+XHJcblx0ICA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL1oxeklKQ0trLmpwZWdcIiBibHVyPXt7IG1pbjogLTEsIG1heDogMyB9fSBzdHJlbmd0aD17NDAwfT5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicHQtNlwiIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTpcIjgwcHhcIn19IGFsdD1cImFjdGlvblwiPlxyXG5cdFx0ICA8ZGl2IGNsYXNzTmFtZT1cInB0LTZcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJcIj5cclxuXHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbXVsdGlsaW5lIGlzLWNlbnRlcmVkXCI+XHJcblx0XHRcdFx0e2JveH1cclxuXHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0ICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW1vYmlsZSBpcy1jZW50ZXJlZFwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjE1MHB4XCJ9fT4gICAgICAgICAgICBcclxuXHRcdFx0XHQ8UGFnaW5hdGlvblxyXG5cdFx0XHRcdCAgY3VycmVudD17bmJyfVxyXG5cdFx0XHRcdCAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG5cdFx0XHRcdCAgcGFnZVNpemU9ezF9XHJcblx0XHRcdFx0ICB0b3RhbD17cGFnZU5icn1cclxuXHRcdFx0XHQgIHNob3dUaXRsZT17ZmFsc2V9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0ICA8L2Rpdj4gICAqL31cclxuXHRcdFx0ICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5MIGNlbnRlciBsaWdodCBsZXR0ZXJTcGFjaW5nTVwiPlxyXG5cdFx0XHRcdDxMaW5rIHRvPVwiL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG5cdFx0XHRcdCAgVm9pciBwbHVzXHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHQgIDwvYnV0dG9uPiAqL31cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQgIDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0ICA8L1BhcmFsbGF4PlxyXG5cdCAgPC8+XHJcblx0KTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFBhZ2VUd28yOyIsImltcG9ydCBTZWFyY2hQYWdlT25lIGZyb20gXCIuL19TZWFyY2hQYWdlT25lXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vX25hdmJhcic7XHJcbmltcG9ydCBSc0J1dHRvbiBmcm9tICcuLi9fcnNCdXR0b24nO1xyXG5pbXBvcnQgTGluZXNUb3AgZnJvbSAnLi4vX2xpbmVzVG9wJztcclxuaW1wb3J0IExpbmVzQm90dG9tIGZyb20gJy4uL19saW5lc0JvdHRvbSc7XHJcbmltcG9ydCBTZWFyY2hQYWdlVHdvIGZyb20gXCIuL19TZWFyY2hQYWdlVHdvXCI7XHJcbmltcG9ydCBNaW5pRm9vdGVyIGZyb20gXCIuLi9Ib21lcGFnZS9fbWluaUZvb3RlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gU2VhcmNoUGFnZSgpIHtcclxuXHRjb25zdCB7IGluZm8gfSA9IHVzZVBhcmFtcygpO1xyXG5cdGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzTG9hZGVkSW1nLCBzZXRJc0xvYWRlZEltZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzTG9hZGVkTmV4dFByZXYsIHNldElzTG9hZGVkTmV4dFByZXZdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0ltZ1JlYWR5LCBzZXRJbWdSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbaGVhZGVyLCBzZXRIZWFkZXJdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtwcmVjaSwgc2V0UHJlY2ldID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtzZWNvbmQsIHNldFNlY29uZF0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtOZXh0UHJldiwgc2V0TmV4dFByZXZdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtsb2FkLCBzZXRMb2FkXSA9IHVzZVN0YXRlKFwiaGlkZGVuXCIpXHJcblxyXG5cdFx0Y29uc3Qgc2V0TG9hZGluZyA9IHBhcmFtID0+IHtcclxuXHRcdFx0aWYocGFyYW0gPT0gdHJ1ZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiZ290Y2hhXCIpXHJcblx0XHRcdFx0c2V0TG9hZChcInZpc2libGVcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblxyXG5cdFx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coaW5mbylcclxuXHRcdFx0ZmV0Y2goYC9nZXRTZWFyY2gvJHtpbmZvfWAse21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0XHQudGhlbihcclxuXHRcdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0c2V0SXRlbXMocmVzdWx0KTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cdFx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdH0sIFtdKVx0XHRcclxuXHJcblxyXG5cclxuXHRpZiAoZXJyb3IpIHtcclxuXHRcdCByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG5cdCAgfSBlbHNlIGlmICghaXNMb2FkZWQgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJykge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8c3ZnIGlkPVwiUmVhY3RMb2FkZXJcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLXN0aWxsXCIgcG9pbnRzPVwiMCwwIDEwMCwwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLXN0aWxsXCIgcG9pbnRzPVwiMCwwIDAsMTAwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLWFuaW1hdGlvblwiIHBvaW50cz1cIjAsMCAxMDAsMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1hbmltYXRpb25cIiBwb2ludHM9XCIwLDAgMCwxMDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHQgIH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAoICBcclxuXHRcdDw+XHJcblx0XHQ8TmF2YmFyPjwvTmF2YmFyPlxyXG5cdFx0PFJzQnV0dG9uPjwvUnNCdXR0b24+XHJcblx0XHQ8TGluZXNUb3A+PC9MaW5lc1RvcD5cclxuXHRcdDxMaW5lc0JvdHRvbT48L0xpbmVzQm90dG9tPlxyXG5cdFx0XHJcblx0XHQ8U2VhcmNoUGFnZU9uZSBzZXRMb2FkaW5nPXtzZXRMb2FkaW5nfSBkYXRhID0ge2luZm99PjwvU2VhcmNoUGFnZU9uZT5cclxuXHRcdDxkaXYgc3R5bGU9e3t2aXNpYmlsaXR5OmxvYWR9fT48U2VhcmNoUGFnZVR3byBkYXRhPXtpdGVtc30+PC9TZWFyY2hQYWdlVHdvPjwvZGl2PlxyXG5cdFx0XHJcblx0XHR7LyogPFdvcmtwYWdlVGhyZWU+PC9Xb3JrcGFnZVRocmVlPlxyXG5cdFx0PFdvcmtwYWdlRm91cj48L1dvcmtwYWdlRm91cj5cclxuXHRcdDxXb3JrcGFnZUZpdmU+PC9Xb3JrcGFnZUZpdmU+Ki99XHJcblx0XHQ8TWluaUZvb3Rlcj48L01pbmlGb290ZXI+IFxyXG5cdFx0PC8+XHJcblx0ICk7XHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaFBhZ2VPbmUoe3NldExvYWRpbmcsZGF0YX0pIHtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0TG9hZGluZyh0cnVlKVxyXG5cdCAgfSwgWzFdKTtcclxuXHRBT1MuaW5pdCgpXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZDFcIiBhbHQ9XCJob21lcGFnZVwiPlxyXG5cclxuXHRcdFx0PHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHQ8L3ZpZGVvPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHlCbHVlXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyMlwiPlxyXG5cdFx0XHRcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayB0bz1cIi9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL3plbml0aC9pbWFnZXMvYklPMXI5Ri5wbmdcIiBhbHQ9XCJMb2dvXCIgd2lkdGg9ezIwMH0gY2xhc3NOYW1lPVwiY2VudGVyXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHRcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndvcmtwYWdlVGV4dFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJtZWRpdW1cIj5SRVNVTFRBVCBQT1VSIFwie2RhdGF9XCI8L2gxPlxyXG5cdFx0XHRcdFx0XHRcdHsvKiA8cCBjbGFzc05hbWU9XCJsaWdodFwiPkxPR08uIFdFQiBERVNJR04uIENBVEVHT1JJRTwvcD4gKi99XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFnZU9uZTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tIFwicmVhY3QtcGFyYWxsYXhcIjtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaFBhZ2VUd28oZGF0YSkge1xyXG5cdC8vIGNvbnNvbGUubG9nKGNvdW50KVxyXG5cdC8vIGxldCBwYWdlTmJyID0gTWF0aC5jZWlsKGNvdW50IC8gMjApXHJcblx0Ly8gbGV0IG5iciA9IHBhcnNlSW50KHBhZ2UpXHJcblx0Ly8gZnVuY3Rpb24gb25DaGFuZ2UocGFyYW1zKSB7XHJcblx0Ly8gICBkb2N1bWVudC5sb2NhdGlvbiA9IGAvcHJvamV0cy8ke3BhcmFtc31gXHJcblx0Ly8gfVxyXG4gIFxyXG5cdGxldCBib3ggPSBbXTtcclxuXHRpZihkYXRhLmRhdGEubGVuZ3RoID4gMCl7XHJcblxyXG5cdFxyXG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGEuZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdFx0aWYoZGF0YS5kYXRhW2luZGV4XVswXSA9PSBcInByb2pldFwiKXtcclxuXHRcdFx0XHRsZXQgaXRlbSA9IChcclxuXHRcdFx0XHQgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY29sdW1uIGNvbHVtbnMgaXMtb25lLWZpZnRoIGlzLWNlbnRlcmVkXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlzLWhhbGZcIj5cclxuXHRcdFx0XHRcdDxhIGhyZWY9e1wiL3Byb2pldC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaWR9PlxyXG5cdFx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPlxyXG5cdFx0XHRcdFx0XHQ8cCBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiIH19IGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcblx0XHRcdFx0XHRcdCAge2RhdGEuZGF0YVtpbmRleF0ubWlzc2lvbn1cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHR7ZGF0YS5kYXRhW2luZGV4XS5oZWFkZXIgIT09IFwicmllbiBhIHZvaXIsIGNpcmN1bGV6XCIgPyAoPGltZ1xyXG5cdFx0XHRcdFx0XHQgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuXHRcdFx0XHRcdFx0ICBzcmM9e1wiL2ltYWdlcy9pbWFnZXByb2pldC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaGVhZGVyfVxyXG5cdFx0XHRcdFx0XHQgIGFsdD1cIlwiXHJcblx0XHRcdFx0XHRcdC8+KSA6ICg8aW1nIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIn19IHNyYz17XCIvemVuaXRoL2F1dHJlL25vSW1nLnBuZ1wifSBhbHQ9XCJcIi8+KX1cclxuXHRcdFx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Ym94LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoZGF0YS5kYXRhW2luZGV4XVswXSA9PSBcImNsaWVudFwiKXtcclxuXHRcdFx0XHRsZXQgaXRlbSA9IChcclxuXHRcdFx0XHQgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY29sdW1uIGNvbHVtbnMgaXMtb25lLWZpZnRoIGlzLWNlbnRlcmVkXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlzLWhhbGZcIj5cclxuXHRcdFx0XHRcdDxhIGhyZWY9e1wiL2NsaWVudC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaWR9PlxyXG5cdFx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPlxyXG5cdFx0XHRcdFx0XHQ8cCBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiIH19IGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcblx0XHRcdFx0XHRcdCAge2RhdGEuZGF0YVtpbmRleF0ubWlzc2lvbn1cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHR7ZGF0YS5kYXRhW2luZGV4XS5oZWFkZXIgIT09IFwicmllbiBhIHZvaXIsIGNpcmN1bGV6XCIgPyAoPGltZ1xyXG5cdFx0XHRcdFx0XHQgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuXHRcdFx0XHRcdFx0ICBzcmM9e1wiL2ltYWdlcy9pbWFnZWNsaWVudC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaGVhZGVyfVxyXG5cdFx0XHRcdFx0XHQgIGFsdD1cIlwiXHJcblx0XHRcdFx0XHRcdC8+KSA6ICg8aW1nIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIn19IHNyYz17XCIvemVuaXRoL2F1dHJlL25vSW1nLnBuZ1wifSBhbHQ9XCJcIi8+KX1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGJveC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fWVsc2V7XHJcblx0XHRib3ggPSAoPHA+VnJhaW1lbnQgZMOpc29sw6ksIG5vdXMgbidhdm9ucyByaWVuIHRyb3V2w6kgOmM8L3A+KVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRcclxuXHRyZXR1cm4gKFxyXG5cdCAgPD5cclxuXHQgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL3plbml0aC9pbWFnZXMvWjF6SUpDS2suanBlZ1wiIGJsdXI9e3sgbWluOiAtMSwgbWF4OiAzIH19IHN0cmVuZ3RoPXs0MDB9PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJwdC02XCIgc3R5bGU9e3twYWRkaW5nQm90dG9tOlwiODBweFwifX0gYWx0PVwiYWN0aW9uXCI+XHJcblx0XHQgIDxkaXYgY2xhc3NOYW1lPVwicHQtNlwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG5cdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tdWx0aWxpbmUgaXMtY2VudGVyZWRcIj5cclxuXHRcdFx0XHR7Ym94fVxyXG5cdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHQgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbW9iaWxlIGlzLWNlbnRlcmVkXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTUwcHhcIn19PiAgICAgICAgICAgIFxyXG5cdFx0XHRcdDxQYWdpbmF0aW9uXHJcblx0XHRcdFx0ICBjdXJyZW50PXtuYnJ9XHJcblx0XHRcdFx0ICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcblx0XHRcdFx0ICBwYWdlU2l6ZT17MX1cclxuXHRcdFx0XHQgIHRvdGFsPXtwYWdlTmJyfVxyXG5cdFx0XHRcdCAgc2hvd1RpdGxlPXtmYWxzZX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQgIDwvZGl2PiAgICovfVxyXG5cdFx0XHQgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bkwgY2VudGVyIGxpZ2h0IGxldHRlclNwYWNpbmdNXCI+XHJcblx0XHRcdFx0PExpbmsgdG89XCIvY29udGFjdFwiIGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcblx0XHRcdFx0ICBWb2lyIHBsdXNcclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdCAgPC9idXR0b24+ICovfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCAgPC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQgIDwvUGFyYWxsYXg+XHJcblx0ICA8Lz5cclxuXHQpO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFnZVR3bzsiLCJpbXBvcnQgV29ya3BhZ2VDbGllbnRPbmUgZnJvbSAnLi9fd29ya3BhZ2VDbGllbnRPbmUnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL19uYXZiYXInO1xyXG5pbXBvcnQgUnNCdXR0b24gZnJvbSAnLi4vX3JzQnV0dG9uJztcclxuaW1wb3J0IExpbmVzVG9wIGZyb20gJy4uL19saW5lc1RvcCc7XHJcbmltcG9ydCBMaW5lc0JvdHRvbSBmcm9tICcuLi9fbGluZXNCb3R0b20nO1xyXG5pbXBvcnQgV29ya3BhZ2VDbGllbnRUd28gZnJvbSAnLi9fd29ya3BhZ2VDbGllbnRUd28nO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvbG9hZGVyLmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gV29ya3BhZ2VDbGllbnQoKSB7XHJcblx0Y29uc3QgeyBuYnIgfSA9IHVzZVBhcmFtcygpO1xyXG5cdGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzQ291bnRMb2FkZWQsIHNldElzQ291bnRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0NhdExvYWRlZCwgc2V0SXNDYXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZE5leHRQcmV2LCBzZXRJc0xvYWRlZE5leHRQcmV2XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNJbWdSZWFkeSwgc2V0SW1nUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtjYXQsIHNldENhdF0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2xvYWQsIHNldExvYWRdID0gdXNlU3RhdGUoXCJoaWRkZW5cIilcclxuXHJcblx0Y29uc3Qgc2V0TG9hZGluZyA9IHBhcmFtID0+IHtcclxuXHRcdGlmKHBhcmFtID09IHRydWUpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJnb3RjaGFcIilcclxuXHRcdFx0c2V0TG9hZChcInZpc2libGVcIik7XHJcblx0XHR9XHJcblx0fVxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG5cdFx0ZmV0Y2goYC9nZXR0QWxsQ2xpZW50LyR7bmJyfWAse21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdC50aGVuKFxyXG5cdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdHNldEl0ZW1zKHJlc3VsdCk7XHJcblx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9XHJcblx0XHQpXHJcblxyXG5cdFx0ZmV0Y2goYC9nZXRDb3VudC9jbGllbnRgLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHQudGhlbihcclxuXHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRzZXRDb3VudChyZXN1bHQpO1xyXG5cdFx0XHRzZXRJc0NvdW50TG9hZGVkKHRydWUpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0c2V0SXNDb3VudExvYWRlZCh0cnVlKTtcclxuXHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH1cclxuXHRcdClcclxuXHRcdGZldGNoKGAvYXBpL2NhdGVnb3JpZXNgLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHQudGhlbihcclxuXHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRzZXRDYXQocmVzdWx0KTtcclxuXHRcdFx0c2V0SXNDYXRMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRzZXRJc0NvdW50TG9hZGVkKHRydWUpO1xyXG5cdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fVxyXG5cdFx0KVxyXG5cdH0sIFtdKVxyXG5cclxuXHRpZiAoZXJyb3IpIHtcclxuXHRcdCByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG5cdCAgfSBlbHNlIGlmICghaXNMb2FkZWQgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJykge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8c3ZnIGlkPVwiUmVhY3RMb2FkZXJcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLXN0aWxsXCIgcG9pbnRzPVwiMCwwIDEwMCwwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLXN0aWxsXCIgcG9pbnRzPVwiMCwwIDAsMTAwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLWFuaW1hdGlvblwiIHBvaW50cz1cIjAsMCAxMDAsMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1hbmltYXRpb25cIiBwb2ludHM9XCIwLDAgMCwxMDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHQgIH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAoICBcclxuXHRcdDw+XHJcblx0XHQ8TmF2YmFyPjwvTmF2YmFyPlxyXG5cdFx0PFJzQnV0dG9uPjwvUnNCdXR0b24+XHJcblx0XHQ8TGluZXNUb3A+PC9MaW5lc1RvcD5cclxuXHRcdDxMaW5lc0JvdHRvbT48L0xpbmVzQm90dG9tPlxyXG5cdFx0XHJcblx0XHQ8V29ya3BhZ2VDbGllbnRPbmUgc2V0TG9hZGluZz17c2V0TG9hZGluZ30gY2F0PXtjYXR9PjwvV29ya3BhZ2VDbGllbnRPbmU+XHJcblx0XHQ8ZGl2IHN0eWxlPXt7dmlzaWJpbGl0eTpsb2FkfX0+PFdvcmtwYWdlQ2xpZW50VHdvIGRhdGE9e2l0ZW1zfSBwYWdlPXtuYnJ9IGNvdW50PXtjb3VudH0+PC9Xb3JrcGFnZUNsaWVudFR3bz48L2Rpdj5cclxuXHRcdFxyXG5cdFx0ey8qIDxXb3JrcGFnZVRocmVlPjwvV29ya3BhZ2VUaHJlZT5cclxuXHRcdDxXb3JrcGFnZUZvdXI+PC9Xb3JrcGFnZUZvdXI+XHJcblx0XHQ8V29ya3BhZ2VGaXZlPjwvV29ya3BhZ2VGaXZlPlxyXG5cdFx0PE1pbmlGb290ZXI+PC9NaW5pRm9vdGVyPiAqL31cclxuXHRcdDwvPlxyXG5cdCApO1xyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgV29ya3BhZ2VDbGllbnQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFPUyBmcm9tIFwiYW9zXCI7XHJcbmltcG9ydCBcImFvcy9kaXN0L2Fvcy5jc3NcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24sIE1lbnUsIE1lbnVJdGVtLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IEFycm93Rm9yd2FyZElvc1NoYXJwSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZElvc1NoYXJwJztcclxuaW1wb3J0IE11aUFjY29yZGlvbiwgeyBBY2NvcmRpb25Qcm9wcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWNjb3JkaW9uJztcclxuaW1wb3J0IE11aUFjY29yZGlvblN1bW1hcnksIHtcclxuICBBY2NvcmRpb25TdW1tYXJ5UHJvcHMsXHJcbn0gZnJvbSAnQG11aS9tYXRlcmlhbC9BY2NvcmRpb25TdW1tYXJ5JztcclxuaW1wb3J0IE11aUFjY29yZGlvbkRldGFpbHMgZnJvbSAnQG11aS9tYXRlcmlhbC9BY2NvcmRpb25EZXRhaWxzJztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuY29uc3QgQWNjb3JkaW9uID0gc3R5bGVkKChwcm9wcykgPT4gKFxyXG4gIDxNdWlBY2NvcmRpb24gZGlzYWJsZUd1dHRlcnMgZWxldmF0aW9uPXswfSBzcXVhcmUgey4uLnByb3BzfSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIG1heFdpZHRoOiBcIjE4NXB4XCIsXHJcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMClcIixcclxuICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG59KSk7XHJcblxyXG5jb25zdCBBY2NvcmRpb25TdW1tYXJ5ID0gc3R5bGVkKChwcm9wcykgPT4gKFxyXG4gIDxNdWlBY2NvcmRpb25TdW1tYXJ5XHJcbiAgICBleHBhbmRJY29uPXs8QXJyb3dGb3J3YXJkSW9zU2hhcnBJY29uIHN4PXt7IGZvbnRTaXplOiBcIjAuOXJlbVwiIH19IC8+fVxyXG5cdHsuLi5wcm9wc31cclxuICAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgYmFja2dyb3VuZENvbG9yOlxyXG4gICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImRhcmxcIlxyXG4gICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAuMDUpXCJcclxuICAgICAgOiBcInJnYmEoMCwgMCwgMCwgLjAzKVwiLFxyXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgXCImIC5NdWlBY2NvcmRpb25TdW1tYXJ5LWV4cGFuZEljb25XcmFwcGVyLk11aS1leHBhbmRlZFwiOiB7XHJcbiAgICB0cmFuc2Zvcm06IFwicm90YXRlKDkwZGVnKVwiLFxyXG4gIH0sXHJcbiAgXCImIC5NdWlBY2NvcmRpb25TdW1tYXJ5LWNvbnRlbnRcIjoge1xyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBBY2NvcmRpb25EZXRhaWxzID0gc3R5bGVkKE11aUFjY29yZGlvbkRldGFpbHMpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICBwYWRkaW5nVG9wOiAwLFxyXG4gIG1hcmdpblRvcDogMCxcclxuICBtYXhIZWlnaHQ6IFwiMTUwcHhcIixcclxuICBvdmVyZmxvdzogXCJzY3JvbGxcIixcclxufSkpO1xyXG5cclxuZnVuY3Rpb24gV29ya3BhZ2VDbGllbnRPbmUoe3NldExvYWRpbmcsIGNhdH0pIHtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldExvYWRpbmcodHJ1ZSlcclxuXHQgIH0sIFsxXSk7XHJcblxyXG5cdGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gUmVhY3QudXNlU3RhdGUoXCJwYW5lbDFcIik7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChwYW5lbCkgPT4gKGV2ZW50LCBuZXdFeHBhbmRlZCkgPT4ge1xyXG5cdCAgc2V0RXhwYW5kZWQobmV3RXhwYW5kZWQgPyBwYW5lbCA6IGZhbHNlKTtcclxuXHR9O1xyXG4gIFxyXG5cdGNvbnN0IFt3b3Jkcywgc2V0V29yZHNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGxldCBjYXRlZ29yeSA9IGNhdDtcclxuXHRsZXQgbWVudSA9IFtdO1xyXG5cdGxldCByYW5kb21Xb3JkID0gW1xyXG5cdCAgXCJSw4lBQ1RJVklUw4lcIixcclxuXHQgIFwiUFJPWElNSVTDiVwiLFxyXG5cdCAgXCJQQVNTSU9OXCIsXHJcblx0ICBcIlNUUkFUw4lHSUVcIixcclxuXHQgIFwiRVZFTlRcIixcclxuXHQgIFwiQ09OU0VJTFwiLFxyXG5cdCAgXCJDT01NVU5JQ0FUSU9OXCIsXHJcblx0ICBcIlLDilZFUlwiLFxyXG5cdCAgXCJBTUJJVElPTlwiLFxyXG5cdCAgXCJJTUFHSU5BVElPTlwiLFxyXG5cdCAgXCJhZ2lyXCIsXHJcblx0ICBcInMnYWRhcHRlclwiLFxyXG5cdCAgXCJhbnRpY2lwZXJcIixcclxuXHQgIFwiYXV0b25vbWllXCIsXHJcblx0ICBcImNyb2lzc2FuY2VcIixcclxuXHQgIFwiZMOpZmlcIixcclxuXHQgIFwicGxhbmlmaWVyXCIsXHJcblx0ICBcInBvc2l0aXZlclwiLFxyXG5cdCAgXCJkaXNwb25pYmlsaXTDqVwiLFxyXG5cdCAgXCJkeW5hbWlzbWVcIixcclxuXHQgIFwiw6ljb3V0ZVwiLFxyXG5cdCAgXCJzZXJ2aWNlXCIsXHJcblx0ICBcInByw6l2aXNpb25cIixcclxuXHQgIFwidMOpbmFjaXTDqVwiLFxyXG5cdCAgXCJxdWFsaXTDqVwiLFxyXG5cdCAgXCJtb2JpbGlzZXJcIixcclxuXHQgIFwibsOpZ29jaWVyXCIsXHJcblx0ICBcIm9iamVjdGlmc1wiLFxyXG5cdCAgXCJvcHRpbWlzZXJcIixcclxuXHQgIFwiY2hhbGxlbmdlXCIsXHJcblx0ICBcInLDqXVzc2lyXCIsXHJcblx0ICBcImV4Y2VsbGVuY2VcIixcclxuXHQgIFwicsOpYWxpc2VyXCIsXHJcblx0ICBcInLDqXN1bHRhdHNcIixcclxuXHQgIFwiZMOpdmVsb3BwZXJcIixcclxuXHQgIFwic2F2b2lyZmFpcmVcIixcclxuXHQgIFwiZGlhbG9ndWVcIixcclxuXHQgIFwicHLDqXZvaXJcIixcclxuXHQgIFwic3luZXJnaWVcIixcclxuXHQgIFwicHJvamV0XCIsXHJcblx0ICBcImlubm92YXRpb25cIixcclxuXHQgIFwibW90aXZhdGlvblwiXTtcclxuICBcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdCAgZnVuY3Rpb24gZ2V0V29yZCgpIHtcclxuXHRcdGxldCB3b3JkID0gcmFuZG9tV29yZFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5kb21Xb3JkLmxlbmd0aCldO1xyXG5cdFx0cmFuZG9tV29yZC5zcGxpY2UocmFuZG9tV29yZC5pbmRleE9mKHdvcmQpKTtcclxuXHRcdHJldHVybiB3b3JkO1xyXG5cdCAgfVxyXG4gIFxyXG5cdCAgbGV0IHdvcmQxID0gZ2V0V29yZCgpO1xyXG5cdCAgbGV0IHdvcmQyID0gZ2V0V29yZCgpO1xyXG5cdCAgc2V0V29yZHMoW3dvcmQxLCB3b3JkMl0pO1xyXG5cdH0sIFtdKTtcclxuXHRBT1MuaW5pdCgpO1xyXG5cdGNhdGVnb3J5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuXHQgIGxldCBpdGVtID0gKFxyXG5cdFx0ICA8YSBrZXk9e2VsZW1lbnQuaWR9IHN0eWxlPXt7dGV4dERlY29yYXRpb246IFwibm9uZVwiLCBjb2xvcjogXCJ3aGl0ZVwifX0gaHJlZj17YC9zZWFyY2hjYXQvY2xpZW50LyR7ZWxlbWVudC5pZH0vJHtlbGVtZW50LmNhdGVnb3JpZX1gfT5cclxuXHRcdFx0ICA8cFxyXG5cdFx0XHQgIFxyXG5cdFx0XHQgIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwid2hpdGVcIn19XHJcblx0XHRcdCAgY2xhc3NOYW1lPVwibGlnaHRcIlxyXG5cdFx0ICA+XHJcblx0XHRcdCAge2VsZW1lbnQuY2F0ZWdvcmllfVxyXG5cdFx0ICA8L3A+XHJcblx0XHQ8L2E+XHJcbiAgXHJcblx0ICApO1xyXG5cdCAgbWVudS5wdXNoKGl0ZW0pO1xyXG5cdH0pO1xyXG5cdGlmICh3b3Jkcy5sZW5ndGggPiAwKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0ICA8PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQxXCIgYWx0PVwiaG9tZXBhZ2VcIj5cclxuXHRcdFx0ICA8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuXHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZy5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcblx0XHRcdCAgPC92aWRlbz5cclxuXHRcclxuXHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHlCbHVlXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXIyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0ICA8TGluayB0bz1cIi9cIj5cclxuXHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHQgIHNyYz1cIi96ZW5pdGgvaW1hZ2VzL2JJTzFyOUYucG5nXCJcclxuXHRcdFx0XHRcdFx0ICBhbHQ9XCJMb2dvXCJcclxuXHRcdFx0XHRcdFx0ICB3aWR0aD17MjAwfVxyXG5cdFx0XHRcdFx0XHQgIGNsYXNzTmFtZT1cImNlbnRlclwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQgIDwvTGluaz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3b3JrcGFnZVRleHRcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdCAgPGgxIGNsYXNzTmFtZT1cIm1lZGl1bVwiPlPDiUzDiUNUSU9OIERFIENMSUVOVDwvaDE+XHJcblx0XHRcdFx0XHQgIDxkaXZcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29sdW1uc1wiXHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IGZsb2F0OiBcInJpZ2h0XCIsIG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9fVxyXG5cdFx0XHRcdFx0ICA+XHJcblx0XHRcdFx0XHRcdDxwIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIgfX0gY2xhc3NOYW1lPVwibGlnaHRcIj5cclxuXHRcdFx0XHRcdFx0ICB7d29yZHNbMF19IC4ge3dvcmRzWzFdfSAue1wiIFwifVxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdDxBY2NvcmRpb25cclxuXHRcdFx0XHRcdFx0ICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKFwicGFuZWwxXCIpfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdCAgPEFjY29yZGlvblN1bW1hcnlcclxuXHRcdFx0XHRcdFx0XHRhcmlhLWNvbnRyb2xzPVwicGFuZWwxZC1jb250ZW50XCJcclxuXHRcdFx0XHRcdFx0XHRpZD1cInBhbmVsMWQtaGVhZGVyXCJcclxuXHRcdFx0XHRcdFx0ICA+XHJcblx0XHRcdFx0XHRcdFx0PHAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjVweFwiIH19PiZuYnNwO0NBVMOJR09SSUU8L3A+XHJcblx0XHRcdFx0XHRcdCAgPC9BY2NvcmRpb25TdW1tYXJ5PlxyXG5cdFx0XHRcdFx0XHQgIDxBY2NvcmRpb25EZXRhaWxzPnttZW51fTwvQWNjb3JkaW9uRGV0YWlscz5cclxuXHRcdFx0XHRcdFx0PC9BY2NvcmRpb24+XHJcblx0XHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQgIDwvPlxyXG5cdFx0KTtcclxuXHQgIH1cclxuXHR9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JrcGFnZUNsaWVudE9uZTtcclxuXHJcblxyXG5cclxuIiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tIFwicmVhY3QtcGFyYWxsYXhcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ3JjLXBhZ2luYXRpb24nO1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlc2hlZXRzL2J1bG1hL2dyaWQvY29sdW1ucy5zYXNzJztcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXNoZWV0cy9idWxtYS9oZWxwZXJzL3NwYWNpbmcuc2Fzcyc7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzaGVldHMvcGFnaW5hdGlvbi5sZXNzJyBcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBXb3JrcGFnZUNsaWVudFR3byh7ZGF0YSwgcGFnZSwgY291bnR9KSB7XHJcbiAgY29uc29sZS5sb2coZGF0YSlcclxuICBsZXQgcGFnZU5iciA9IE1hdGguY2VpbChjb3VudCAvIDIwKVxyXG4gIGxldCBuYnIgPSBwYXJzZUludChwYWdlKVxyXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKHBhcmFtcykge1xyXG4gICAgZG9jdW1lbnQubG9jYXRpb24gPSBgL2NsaWVudHMvJHtwYXJhbXN9YFxyXG4gIH1cclxuXHJcbiAgbGV0IGJveCA9IFtdO1xyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBsZXQgaXRlbSA9IChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNvbHVtbiBjb2x1bW5zIGlzLW9uZS1maWZ0aCBpcy1jZW50ZXJlZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpcy1oYWxmXCI+XHJcbiAgICAgICAgICA8YSBocmVmPXtcIi9jbGllbnQvXCIgKyBkYXRhW2luZGV4XS5pZH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+XHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9fSBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG4gICAgICAgICAgICAgICAge2RhdGFbaW5kZXhdLnByb2pldH1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvaW1hZ2VjbGllbnQvXCIgKyBkYXRhW2luZGV4XS5oZWFkZXJ9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICAgIGJveC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9aMXpJSkNLay5qcGVnXCIgYmx1cj17eyBtaW46IC0xLCBtYXg6IDMgfX0gc3RyZW5ndGg9ezQwMH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNlwiIGFsdD1cImFjdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW11bHRpbGluZSBpcy1jZW50ZXJlZFwiPlxyXG4gICAgICAgICAgICAgIHtib3h9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbW9iaWxlIGlzLWNlbnRlcmVkXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTUwcHhcIn19PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50PXtuYnJ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZT17MX1cclxuICAgICAgICAgICAgICAgIHRvdGFsPXtwYWdlTmJyfVxyXG4gICAgICAgICAgICAgICAgc2hvd1RpdGxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5MIGNlbnRlciBsaWdodCBsZXR0ZXJTcGFjaW5nTVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG4gICAgICAgICAgICAgICAgVm9pciBwbHVzXHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1BhcmFsbGF4PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtwYWdlQ2xpZW50VHdvOyIsImltcG9ydCBXb3JrcGFnZU9uZSBmcm9tIFwiLi9fd29ya3BhZ2VPbmVcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9fbmF2YmFyJztcclxuaW1wb3J0IFJzQnV0dG9uIGZyb20gJy4uL19yc0J1dHRvbic7XHJcbmltcG9ydCBMaW5lc1RvcCBmcm9tICcuLi9fbGluZXNUb3AnO1xyXG5pbXBvcnQgTGluZXNCb3R0b20gZnJvbSAnLi4vX2xpbmVzQm90dG9tJztcclxuaW1wb3J0IFdvcmtwYWdlVHdvIGZyb20gXCIuL193b3JrcGFnZVR3b1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7IFxyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFdvcmtwYWdlKCkge1xyXG5cdGNvbnN0IHsgbmJyIH0gPSB1c2VQYXJhbXMoKTtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0NvdW50TG9hZGVkLCBzZXRJc0NvdW50TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNDYXRMb2FkZWQsIHNldElzQ2F0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbY2F0LCBzZXRDYXRdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtsb2FkLCBzZXRMb2FkXSA9IHVzZVN0YXRlKFwiaGlkZGVuXCIpXHJcblxyXG5cdFx0Y29uc3Qgc2V0TG9hZGluZyA9IHBhcmFtID0+IHtcclxuXHRcdFx0aWYocGFyYW0gPT0gdHJ1ZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiZ290Y2hhXCIpXHJcblx0XHRcdFx0c2V0TG9hZChcInZpc2libGVcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG5cdFx0XHRmZXRjaChgL2dldHRBbGxQcm9qZWN0LyR7bmJyfWAse21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0XHQudGhlbihcclxuXHRcdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0c2V0SXRlbXMocmVzdWx0KTtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHJcblx0XHRcdGZldGNoKGAvZ2V0Q291bnQvcHJvamV0YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRzZXRDb3VudChyZXN1bHQpO1xyXG5cdFx0XHRcdHNldElzQ291bnRMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzZXRJc0NvdW50TG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHRcdGZldGNoKGAvYXBpL2NhdGVnb3JpZXNgLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdHNldENhdChyZXN1bHQpO1xyXG5cdFx0XHRcdHNldElzQ2F0TG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNDb3VudExvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0fSwgW10pXHJcblxyXG5cdGlmIChlcnJvcikge1xyXG5cdFx0IHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcblx0ICB9IGVsc2UgaWYgKCFpc0xvYWRlZCB8fCAhaXNDb3VudExvYWRlZHx8ICFpc0NhdExvYWRlZCB8fCBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnY29tcGxldGUnKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcdDxzdmcgaWQ9XCJSZWFjdExvYWRlclwiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+XHJcblx0XHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2Utc3RpbGxcIiBwb2ludHM9XCIwLDAgMTAwLDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2Utc3RpbGxcIiBwb2ludHM9XCIwLDAgMCwxMDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0XHQ8cG9seWxpbmUgY2xhc3NOYW1lPVwibGluZS1jb3JuZXJlZCBzdHJva2UtYW5pbWF0aW9uXCIgcG9pbnRzPVwiMCwwIDEwMCwwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLWFuaW1hdGlvblwiIHBvaW50cz1cIjAsMCAwLDEwMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdCAgfSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICggIFxyXG5cdFx0PD5cclxuXHRcdDxOYXZiYXI+PC9OYXZiYXI+XHJcblx0XHQ8UnNCdXR0b24+PC9Sc0J1dHRvbj5cclxuXHRcdDxMaW5lc1RvcD48L0xpbmVzVG9wPlxyXG5cdFx0PExpbmVzQm90dG9tPjwvTGluZXNCb3R0b20+XHJcblx0XHQ8V29ya3BhZ2VPbmUgc2V0TG9hZGluZz17c2V0TG9hZGluZ30gY2F0PXtjYXR9PjwvV29ya3BhZ2VPbmU+XHJcblx0XHQ8ZGl2IHN0eWxlPXt7dmlzaWJpbGl0eTpsb2FkfX0+PFdvcmtwYWdlVHdvICBkYXRhPXtpdGVtc30gcGFnZT17bmJyfSBjb3VudD17Y291bnR9PjwvV29ya3BhZ2VUd28+PC9kaXY+XHJcblx0XHRcclxuXHRcdDwvPlxyXG5cdCApO1xyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgV29ya3BhZ2U7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xyXG5pbXBvcnQgQXJyb3dGb3J3YXJkSW9zU2hhcnBJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkSW9zU2hhcnAnO1xyXG5pbXBvcnQgTXVpQWNjb3JkaW9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWNjb3JkaW9uJztcclxuaW1wb3J0IE11aUFjY29yZGlvblN1bW1hcnkgZnJvbSAnQG11aS9tYXRlcmlhbC9BY2NvcmRpb25TdW1tYXJ5JztcclxuaW1wb3J0IE11aUFjY29yZGlvbkRldGFpbHMgZnJvbSAnQG11aS9tYXRlcmlhbC9BY2NvcmRpb25EZXRhaWxzJztcclxuXHJcblxyXG5jb25zdCBBY2NvcmRpb24gPSBzdHlsZWQoKHByb3BzKSA9PiAoXHJcbiAgPE11aUFjY29yZGlvbiBkaXNhYmxlR3V0dGVycyBlbGV2YXRpb249ezB9IHNxdWFyZSB7Li4ucHJvcHN9IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgbWF4V2lkdGg6IFwiMTg1cHhcIixcclxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwwKVwiLFxyXG4gIGNvbG9yOiBcIndoaXRlXCIsXHJcbn0pKTtcclxuXHJcbmNvbnN0IEFjY29yZGlvblN1bW1hcnkgPSBzdHlsZWQoKHByb3BzKSA9PiAoXHJcbiAgPE11aUFjY29yZGlvblN1bW1hcnlcclxuICAgIGV4cGFuZEljb249ezxBcnJvd0ZvcndhcmRJb3NTaGFycEljb24gc3g9e3sgZm9udFNpemU6IFwiMC45cmVtXCIgfX0gLz59XHJcblx0ey4uLnByb3BzfVxyXG4gIC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgY29sb3I6IFwid2hpdGVcIixcclxuICBiYWNrZ3JvdW5kQ29sb3I6XHJcbiAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwiZGFybFwiXHJcbiAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIC4wNSlcIlxyXG4gICAgICA6IFwicmdiYSgwLCAwLCAwLCAuMDMpXCIsXHJcbiAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICBcIiYgLk11aUFjY29yZGlvblN1bW1hcnktZXhwYW5kSWNvbldyYXBwZXIuTXVpLWV4cGFuZGVkXCI6IHtcclxuICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoOTBkZWcpXCIsXHJcbiAgfSxcclxuICBcIiYgLk11aUFjY29yZGlvblN1bW1hcnktY29udGVudFwiOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEFjY29yZGlvbkRldGFpbHMgPSBzdHlsZWQoTXVpQWNjb3JkaW9uRGV0YWlscykoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIHBhZGRpbmdUb3A6IDAsXHJcbiAgbWFyZ2luVG9wOiAwLFxyXG4gIG1heEhlaWdodDogXCIxNTBweFwiLFxyXG4gIG92ZXJmbG93OiBcInNjcm9sbFwiLFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBXb3JrcGFnZU9uZSh7c2V0TG9hZGluZywgY2F0fSkge1xyXG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gUmVhY3QudXNlU3RhdGUoXCJwYW5lbDFcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChwYW5lbCkgPT4gKGV2ZW50LCBuZXdFeHBhbmRlZCkgPT4ge1xyXG4gICAgc2V0RXhwYW5kZWQobmV3RXhwYW5kZWQgPyBwYW5lbCA6IGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gIH0sIFsxXSk7XHJcblxyXG4gIGNvbnN0IFt3b3Jkcywgc2V0V29yZHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGxldCBjYXRlZ29yeSA9IGNhdDtcclxuICBsZXQgbWVudSA9IFtdO1xyXG4gIGxldCByYW5kb21Xb3JkID0gW1xyXG4gICAgXCJSw4lBQ1RJVklUw4lcIixcclxuICAgIFwiUFJPWElNSVTDiVwiLFxyXG4gICAgXCJQQVNTSU9OXCIsXHJcbiAgICBcIlNUUkFUw4lHSUVcIixcclxuICAgIFwiRVZFTlRcIixcclxuICAgIFwiQ09OU0VJTFwiLFxyXG4gICAgXCJDT01NVU5JQ0FUSU9OXCIsXHJcbiAgICBcIlLDilZFUlwiLFxyXG4gICAgXCJBTUJJVElPTlwiLFxyXG4gICAgXCJJTUFHSU5BVElPTlwiLFxyXG4gICAgXCJhZ2lyXCIsXHJcbiAgICBcInMnYWRhcHRlclwiLFxyXG4gICAgXCJhbnRpY2lwZXJcIixcclxuICAgIFwiYXV0b25vbWllXCIsXHJcbiAgICBcImNyb2lzc2FuY2VcIixcclxuICAgIFwiZMOpZmlcIixcclxuICAgIFwicGxhbmlmaWVyXCIsXHJcbiAgICBcInBvc2l0aXZlclwiLFxyXG4gICAgXCJkaXNwb25pYmlsaXTDqVwiLFxyXG4gICAgXCJkeW5hbWlzbWVcIixcclxuICAgIFwiw6ljb3V0ZVwiLFxyXG4gICAgXCJzZXJ2aWNlXCIsXHJcbiAgICBcInByw6l2aXNpb25cIixcclxuICAgIFwidMOpbmFjaXTDqVwiLFxyXG4gICAgXCJxdWFsaXTDqVwiLFxyXG4gICAgXCJtb2JpbGlzZXJcIixcclxuICAgIFwibsOpZ29jaWVyXCIsXHJcbiAgICBcIm9iamVjdGlmc1wiLFxyXG4gICAgXCJvcHRpbWlzZXJcIixcclxuICAgIFwiY2hhbGxlbmdlXCIsXHJcbiAgICBcInLDqXVzc2lyXCIsXHJcbiAgICBcImV4Y2VsbGVuY2VcIixcclxuICAgIFwicsOpYWxpc2VyXCIsXHJcbiAgICBcInLDqXN1bHRhdHNcIixcclxuICAgIFwiZMOpdmVsb3BwZXJcIixcclxuICAgIFwic2F2b2lyZmFpcmVcIixcclxuICAgIFwiZGlhbG9ndWVcIixcclxuICAgIFwicHLDqXZvaXJcIixcclxuICAgIFwic3luZXJnaWVcIixcclxuICAgIFwicHJvamV0XCIsXHJcbiAgICBcImlubm92YXRpb25cIixcclxuICAgIFwibW90aXZhdGlvblwiXTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIGdldFdvcmQoKSB7XHJcbiAgICAgIGxldCB3b3JkID0gcmFuZG9tV29yZFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5kb21Xb3JkLmxlbmd0aCldO1xyXG4gICAgICByYW5kb21Xb3JkLnNwbGljZShyYW5kb21Xb3JkLmluZGV4T2Yod29yZCkpO1xyXG4gICAgICByZXR1cm4gd29yZDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgd29yZDEgPSBnZXRXb3JkKCk7XHJcbiAgICBsZXQgd29yZDIgPSBnZXRXb3JkKCk7XHJcbiAgICBzZXRXb3Jkcyhbd29yZDEsIHdvcmQyXSk7XHJcbiAgfSwgW10pO1xyXG4gIGNhdGVnb3J5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGxldCBpdGVtID0gKFxyXG5cdFx0PGEga2V5PXtlbGVtZW50LmlkfSBzdHlsZT17e3RleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwid2hpdGVcIn19IGhyZWY9e2Avc2VhcmNoY2F0L3Byb2pldC8ke2VsZW1lbnQuaWR9LyR7ZWxlbWVudC5jYXRlZ29yaWV9YH0+XHJcblx0XHRcdDxwXHJcblx0XHRcdFxyXG5cdFx0XHRzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIix0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCJ9fVxyXG5cdFx0XHRjbGFzc05hbWU9XCJsaWdodFwiXHJcblx0XHQ+XHJcblx0XHRcdHtlbGVtZW50LmNhdGVnb3JpZX1cclxuXHRcdDwvcD5cclxuXHQgIDwvYT5cclxuXHJcbiAgICApO1xyXG4gICAgbWVudS5wdXNoKGl0ZW0pO1xyXG4gIH0pO1xyXG4gIGlmICh3b3Jkcy5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZDFcIiBhbHQ9XCJob21lcGFnZVwiPlxyXG4gICAgICAgICAgPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcbiAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuICAgICAgICAgIDwvdmlkZW8+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5Qmx1ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXIyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvemVuaXRoL2ltYWdlcy9iSU8xcjlGLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ya3BhZ2VUZXh0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZWRpdW1cIj5Tw4lMw4lDVElPTiBERSBQUk9KRVQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiwgbWFyZ2luUmlnaHQ6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiIH19IGNsYXNzTmFtZT1cImxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7d29yZHNbMF19IC4ge3dvcmRzWzFdfSAue1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKFwicGFuZWwxXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJwYW5lbDFkLWNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhbmVsMWQtaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjVweFwiIH19PiZuYnNwO0NBVMOJR09SSUU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz57bWVudX08L0FjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtwYWdlT25lO1xyXG4iLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gXCJyZWFjdC1wYXJhbGxheFwiO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICdyYy1wYWdpbmF0aW9uJztcclxuXHJcblxyXG5mdW5jdGlvbiBXb3JrcGFnZVR3byh7ZGF0YSwgcGFnZSwgY291bnR9KSB7XHJcbiAgY29uc29sZS5sb2coY291bnQpXHJcbiAgbGV0IHBhZ2VOYnIgPSBNYXRoLmNlaWwoY291bnQgLyAyMClcclxuICBsZXQgbmJyID0gcGFyc2VJbnQocGFnZSlcclxuICBmdW5jdGlvbiBvbkNoYW5nZShwYXJhbXMpIHtcclxuICAgIGRvY3VtZW50LmxvY2F0aW9uID0gYC9wcm9qZXRzLyR7cGFyYW1zfWBcclxuICB9XHJcblxyXG4gIGxldCBib3ggPSBbXTtcclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgbGV0IGl0ZW0gPSAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjb2x1bW4gY29sdW1ucyBpcy1vbmUtZmlmdGggaXMtY2VudGVyZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXMtaGFsZlwiPlxyXG4gICAgICAgICAgPGEgaHJlZj17XCIvcHJvamV0L1wiICsgZGF0YVtpbmRleF0uaWR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPlxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIgfX0gY2xhc3NOYW1lPVwidGV4dERlY29cIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhW2luZGV4XS5wcm9qZXR9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL2ltYWdlcHJvamV0L1wiICsgZGF0YVtpbmRleF0uaGVhZGVyfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgICBib3gucHVzaChpdGVtKTtcclxuICAgIH1cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL3plbml0aC9pbWFnZXMvWjF6SUpDS2suanBlZ1wiIGJsdXI9e3sgbWluOiAtMSwgbWF4OiAzIH19IHN0cmVuZ3RoPXs0MDB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTZcIiBhbHQ9XCJhY3Rpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTZcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tdWx0aWxpbmUgaXMtY2VudGVyZWRcIj5cclxuICAgICAgICAgICAgICB7Ym94fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW1vYmlsZSBpcy1jZW50ZXJlZFwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjE1MHB4XCJ9fT4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgY3VycmVudD17bmJyfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgcGFnZVNpemU9ezF9XHJcbiAgICAgICAgICAgICAgICB0b3RhbD17cGFnZU5icn1cclxuICAgICAgICAgICAgICAgIHNob3dUaXRsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuTCBjZW50ZXIgbGlnaHQgbGV0dGVyU3BhY2luZ01cIj5cclxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9jb250YWN0XCIgY2xhc3NOYW1lPVwidGV4dERlY29cIj5cclxuICAgICAgICAgICAgICAgIFZvaXIgcGx1c1xyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9QYXJhbGxheD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtwYWdlVHdvO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgTGluaywgRGlyZWN0TGluaywgRWxlbWVudCwgRXZlbnRzLCBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCwgc2Nyb2xsU3B5LCBzY3JvbGxlciB9IGZyb20gJ3JlYWN0LXNjcm9sbCcgXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG4vL2ltcG9ydCBzY3JvbGxJbnRvVmlldyBmcm9tICdzY3JvbGwtaW50by12aWV3LWlmLW5lZWRlZCdcclxuaW1wb3J0IEhvbWVwYWdlIGZyb20gJy4vSG9tZXBhZ2UvX2hvbWVwYWdlJztcclxuaW1wb3J0IFdvcmRwYWdlIGZyb20gJy4vSG9tZXBhZ2UvX3dvcmQnO1xyXG5pbXBvcnQgRW1vdGlvbiBmcm9tICcuL0hvbWVwYWdlL19lbW90aW9uJztcclxuaW1wb3J0IEFjdGlvbiBmcm9tICcuL0hvbWVwYWdlL19hY3Rpb24nO1xyXG5pbXBvcnQgQ3JlYXRpb24gZnJvbSAnLi9Ib21lcGFnZS9fY3JlYXRpb24nO1xyXG5pbXBvcnQgU2F0aXNmYWN0aW9uIGZyb20gJy4vSG9tZXBhZ2UvX3NhdGlzZmFjdGlvbic7XHJcbmltcG9ydCBDaGlmZnJlcyBmcm9tICcuL0hvbWVwYWdlL19jaGlmZnJlcyc7XHJcbmltcG9ydCBWaXNpb24gZnJvbSAnLi9Ib21lcGFnZS9fdmlzaW9uJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0hvbWVwYWdlL19mb290ZXInO1xyXG5pbXBvcnQgSW5zdGFmbHV4IGZyb20gJy4vSG9tZXBhZ2UvX2luc3RhJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL19uYXZiYXInO1xyXG5pbXBvcnQgUnNCdXR0b24gZnJvbSAnLi9fcnNCdXR0b24nO1xyXG5pbXBvcnQgTGluZXNUb3AgZnJvbSAnLi9fbGluZXNUb3AnO1xyXG5pbXBvcnQgTGluZXNCb3R0b20gZnJvbSAnLi9fbGluZXNCb3R0b20nO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvbG9hZGVyLmNzc1wiXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcblx0Y29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2luc3RhLCBzZXRJbnN0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZmV0Y2goYC9nZXR0QWxsQ3JlYXRpb25gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHQudGhlbihcclxuXHRcdCAgKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0c2V0SXRlbXMocmVzdWx0KVxyXG5cdFx0ICB9LFxyXG5cdFx0ICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdCAgLy8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHQgIC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0ICAoZXJyb3IpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXHJcblx0XHQgIH1cclxuXHRcdClcclxuXHJcblx0XHQvLyBmZXRjaChgaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9hZ2VuY2V6ZW5pdGgvP19fYT0xP19fYT0xJl9fZD1kaXNgLHttZXRob2Q6J0dFVCcsfSlcclxuXHRcdC8vIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0Ly8gLnRoZW4oKHJlc3VsdEluc3RhKSA9PiB7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKFwidG90b1wiKVxyXG5cdFx0Ly8gXHRjb25zb2xlLmxvZyhyZXN1bHRJbnN0YSlcclxuXHRcdC8vICAgfSxcclxuXHRcdC8vICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHQvLyAgIC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0Ly8gICAvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdC8vICAgKGVycm9yKSA9PiB7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdFx0Ly8gICB9XHJcblx0XHQvLyApXHJcblx0ICB9LCBbXSlcclxuXHJcblx0aWYoaXNMb2FkZWQgPT0gZmFsc2UgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJykge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8c3ZnIGlkPVwiUmVhY3RMb2FkZXJcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLXN0aWxsXCIgcG9pbnRzPVwiMCwwIDEwMCwwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLXN0aWxsXCIgcG9pbnRzPVwiMCwwIDAsMTAwIDEwMCwxMDBcIiBzdHJva2VXaWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdFx0PHBvbHlsaW5lIGNsYXNzTmFtZT1cImxpbmUtY29ybmVyZWQgc3Ryb2tlLWFuaW1hdGlvblwiIHBvaW50cz1cIjAsMCAxMDAsMCAxMDAsMTAwXCIgc3Ryb2tlV2lkdGg9XCIxMFwiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuXHRcdFx0XHRcdDxwb2x5bGluZSBjbGFzc05hbWU9XCJsaW5lLWNvcm5lcmVkIHN0cm9rZS1hbmltYXRpb25cIiBwb2ludHM9XCIwLDAgMCwxMDAgMTAwLDEwMFwiIHN0cm9rZVdpZHRoPVwiMTBcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9ZWxzZXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdDxOYXZiYXI+PC9OYXZiYXI+XHJcblx0XHRcdDxMaW5lc1RvcD48L0xpbmVzVG9wPlxyXG5cdFx0XHQ8TGluZXNCb3R0b20+PC9MaW5lc0JvdHRvbT5cclxuXHRcdFx0PFJzQnV0dG9uPjwvUnNCdXR0b24+XHJcblx0XHRcdFxyXG5cclxuXHRcdFx0XHQ8RWxlbWVudCBuYW1lPVwic2Nyb2xsLXRvLWVsZW1lbnQxXCIgY2xhc3NOYW1lPVwiZWxlbWVudFwiPlx0XHRcdFxyXG5cclxuXHRcdFx0XHRcdDxIb21lcGFnZSA+PC9Ib21lcGFnZT5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvRWxlbWVudD5cdFxyXG5cclxuXHRcdFx0XHR7LyogPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJ9fT48L2Rpdj4gKi99XHJcblx0XHRcdFx0PFdvcmRwYWdlID48L1dvcmRwYWdlPlxyXG5cdFx0XHRcdHsvKiA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsIGhlaWdodDpcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIn19PjwvZGl2PiAqL31cclxuXHJcblxyXG5cclxuXHRcdFx0XHQ8RWxlbWVudCBuYW1lPVwic2Nyb2xsLXRvLWVsZW1lbnQzXCIgY2xhc3NOYW1lPVwiZWxlbWVudFwiPlxyXG5cclxuXHRcdFx0XHRcdDxFbW90aW9uID48L0Vtb3Rpb24+XHJcblxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHJcblxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDRcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+XHJcblx0XHRcdFx0XHQ8QWN0aW9uID48L0FjdGlvbj5cclxuXHRcdFx0XHQ8L0VsZW1lbnQ+XHJcblxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDVcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+XHJcblxyXG5cdFx0XHRcdFx0PENyZWF0aW9uIGl0ZW09e2l0ZW1zfT48L0NyZWF0aW9uPlxyXG5cclxuXHRcdFx0XHQ8L0VsZW1lbnQ+XHJcblxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDZcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+XHJcblxyXG5cdFx0XHRcdFx0PFNhdGlzZmFjdGlvbiA+PC9TYXRpc2ZhY3Rpb24+XHJcblxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50N1wiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj5cclxuXHJcblx0XHRcdFx0XHRcdDxDaGlmZnJlcyA+PC9DaGlmZnJlcz5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0PC9FbGVtZW50PlxyXG5cclxuXHRcdFx0XHQ8RWxlbWVudCBuYW1lPVwic2Nyb2xsLXRvLWVsZW1lbnQ4XCIgY2xhc3NOYW1lPVwiZWxlbWVudFwiPlxyXG5cclxuXHRcdFx0XHRcdDxWaXNpb24gPjwvVmlzaW9uPlxyXG5cclxuXHRcdFx0XHQ8L0VsZW1lbnQ+XHJcblxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDhcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+XHJcblxyXG5cdFx0XHRcdFx0XHQ8SW5zdGFmbHV4ID48L0luc3RhZmx1eD5cclxuXHJcblx0XHRcdFx0PC9FbGVtZW50PlxyXG5cclxuXHJcblxyXG5cdFx0XHRcdDxGb290ZXIgPjwvRm9vdGVyPlxyXG5cclxuXHJcblx0XHRcdHsvKiA8RWxlbWVudCBuYW1lPVwic2Nyb2xsLXRvLWVsZW1lbnQxMFwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj48L0VsZW1lbnQ+ICovfVxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHRcdFxyXG5cdH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiZnVuY3Rpb24gTGluZXNCb3R0b20oKSB7XHJcblx0cmV0dXJuICggXHJcblx0XHQ8PlxyXG5cclxuXHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmVCXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMjAwXCI+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmU0XCI+PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmU1IGxpbmVBbmltZTJcIj48L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHRcdDwvPlxyXG5cdCApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5lc0JvdHRvbTsiLCJmdW5jdGlvbiBMaW5lc1RvcCgpIHtcclxuXHRsZXQgYXVkaW8gPSBuZXcgQXVkaW8oXCIvemVuaXRoL2F1dHJlL0hvcml6b24ubXAzXCIpXHJcblxyXG5cdGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xyXG5cdCAgYXVkaW8ucGxheSgpXHJcblx0fVxyXG5cdHJldHVybiAoIFxyXG5cdFx0PD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaW5lQVwiICBkYXRhLWFvcz1cImZhZGUtZG93blwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGluZTJcIm9uQ2xpY2s9e3N0YXJ0fT48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmUzIGxpbmVBbmltZVwiID48L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8Lz5cclxuXHQgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGluZXNUb3A7IiwiaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBuYXZiYXIoKSB7XHJcblxyXG4gIEFPUy5pbml0KClcclxuICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRTZWFyY2hJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCB0ZWxlcG9ydCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsb2NhdGlvbi5yZXBsYWNlKCcvc2VhcmNoLycgKyBzZWFyY2hJbnB1dCk7XHJcbiAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvc2VhcmNoL1wiK3NlYXJjaElucHV0XHJcbiAgfVxyXG4gIFxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cclxuICAgIDxpbnB1dCBpZD1cIm1lbnVfX3RvZ2dsZVwiIHR5cGU9XCJjaGVja2JveFwiICAvPlxyXG5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1lbnVfX2J0blwiIGh0bWxGb3I9XCJtZW51X190b2dnbGVcIiBkYXRhLWFvcz1cImZhZGUtZG93blwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTIwMFwiPlxyXG4gICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgIFxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVudV9fYm94XCIgZGF0YS1hb3M9XCJmYWRlLXJpZ2h0XCI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RlbGVwb3J0fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzc1JSd9fSBjbGFzc05hbWU9XCJmb3JtX19ncm91cCBmaWVsZCBkaXZDMSBtZW51X19pdGVtMVwiID5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJpbnB1dFwiIHNpemU9XCIxNVwiIGNsYXNzTmFtZT1cImZvcm1fX2ZpZWxkXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgaWQ9XCJlbWFpbFwiIHZhbHVlPXtzZWFyY2hJbnB1dH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcmVxdWlyZWQ+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxcIj5SZWNoZXJjaGU8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lbnVfX2l0ZW0gbGlnaHQgbGV0dGVyU3BhY2luZ1NcIj48TGluayBjbGFzc05hbWU9XCJ0ZXh0RGVjbyBtYXJnaW5TdG9wXCIgdG89XCIvXCI+QUNDVUVJTDwvTGluaz48L2g1PlxyXG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZW51X19pdGVtIGxpZ2h0IGxldHRlclNwYWNpbmdTXCI+PExpbmsgY2xhc3NOYW1lPVwidGV4dERlY29cIiB0bz1cIi9jbGllbnRzLzFcIj5DTElFTlRTPC9MaW5rPjwvaDU+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lbnVfX2l0ZW0gbGlnaHQgbGV0dGVyU3BhY2luZ1NcIj48TGluayBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiIHRvPVwiL3Byb2pldHMvMVwiPlBST0pFVFM8L0xpbms+PC9oNT5cclxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWVudV9faXRlbSBsaWdodCBsZXR0ZXJTcGFjaW5nU1wiPjxMaW5rIGNsYXNzTmFtZT1cInRleHREZWNvXCIgdG89XCIvY29udGFjdFwiPkNPTlRBQ1Q8L0xpbms+PC9oNT5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0RGVjbyBsZXR0ZXJTcGFjaW5nU1wiIGhyZWY9XCIvbG9naW5cIj48aDUgY2xhc3NOYW1lPVwibWVudV9faXRlbSB0ZXh0RGVjbyBsaWdodFwiPkFETUlOPC9oNT48L2E+XHJcbiAgICAgIDwvdWw+XHJcblx0XHQ8Lz5cclxuXHQgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5hdmJhcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuXHJcbmZ1bmN0aW9uIFJzQnV0dG9uKCkge1xyXG5cdEFPUy5pbml0KHtvbmNlOiB0cnVlLH0pO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJycyBhb3MtaXRlbSBvdmVyZmxvd0hpZGRlblwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTIwMFwiPlxyXG5cdFx0XHQ8YSBjbGFzc05hbWU9XCJmYlwiIGhyZWY9J2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9BR0VOQ0VaRU5JVEgvJz48L2E+XHJcblx0XHRcdDxhIGNsYXNzTmFtZT1cImluc3RhXCIgaHJlZj0naHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9hZ2VuY2V6ZW5pdGgvP2hsPWZyJz48L2E+XHJcblx0XHRcdDxhIGNsYXNzTmFtZT1cImxpbmtlZGluXCIgaHJlZj0naHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvYWdlbmNlLXplbml0aC8nPjwvYT5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PC8+IFxyXG5cdFx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUnNCdXR0b247IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiQnJvd3NlclJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwidXNlTG9jYXRpb24iLCJIb21lIiwiV29ya3BhZ2UiLCJXb3JrcGFnZUNsaWVudCIsIkNvbnRhY3RQYWdlIiwiQ2xpZW50UGFnZSIsInVzZUxheW91dEVmZmVjdCIsIlByb2plY3RwYWdlIiwiU2VhcmNoUGFnZSIsIlNlYXJjaFBhZ2UyIiwiTWFpbiIsIldyYXBwZXIiLCJjaGlsZHJlbiIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUbyIsInBhdGhuYW1lIiwid2luZG93IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciIsIk5hdmJhciIsIkNsaWVudFBhZ2VPbmUiLCJDbGllbnRwYWdlVHdvIiwiQ2xpZW50cGFnZVRocmVlIiwiQ2xpZW50cGFnZUZvdXIiLCJDbGllbnRwYWdlRml2ZSIsIkNsaWVudHBhZ2VTaXgiLCJ1c2VQYXJhbXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNsaWVudHBhZ2U2XzUiLCJDbGllbnRwYWdlIiwiaWQiLCJlcnJvciIsInNldEVycm9yIiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsImlzTG9hZGVkSW1nIiwic2V0SXNMb2FkZWRJbWciLCJpc0xvYWRlZE5leHRQcmV2Iiwic2V0SXNMb2FkZWROZXh0UHJldiIsImlzSW1nUmVhZHkiLCJzZXRJbWdSZWFkeSIsIml0ZW1zIiwic2V0SXRlbXMiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJoZWFkZXIiLCJzZXRIZWFkZXIiLCJwcmVjaSIsInNldFByZWNpIiwic2Vjb25kIiwic2V0U2Vjb25kIiwiTmV4dFByZXYiLCJzZXROZXh0UHJldiIsIlByb2plY3QiLCJzZXRQcm9qZWN0IiwiaXNMb2FkZWRQcm9qZWN0Iiwic2V0SXNMb2FkZWRQcm9qZWN0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJ0aGlzUmVzIiwiSlNPTiIsInBhcnNlIiwiaSIsImxlbmd0aCIsImltYWdlcHJlY2lzaW9uIiwic2Vjb25kYWlyZSIsImNvbnNvbGUiLCJsb2ciLCJOZXh0IiwiUHJldiIsIm1lc3NhZ2UiLCJyZWFkeVN0YXRlIiwiYmFja2dyb3VuZEltYWdlIiwibWFyZ2luVG9wIiwiX19odG1sIiwidGVtb2lnbmFnZSIsIkxpbmsiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIkVsZW1lbnQiLCJQYXJhbGxheCIsIml0ZW0iLCJzbGlkZXIiLCJmb3JFYWNoIiwiZWxlbWVudCIsIm5ld1NsaWRlciIsInVuZGVmaW5lZCIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJlIiwiUmVtb3ZlQmx1ckRldGFpbCIsIkJsdXJEZXRhaWwiLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwicG9pbnRlckV2ZW50cyIsImRpc3BsYXkiLCJ0ZXh0QWxpZ24iLCJsZWZ0IiwidG9wIiwibWlzc2lvbiIsIm9iamVjdEZpdCIsImJhY2tncm91bmQiLCJwdXNoIiwidGFyZ2V0Iiwic3R5bGUiLCJiYWNrZHJvcEZpbHRlciIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIkxpZ2h0Ym94IiwiVGh1bWJuYWlscyIsIm9wZW4iLCJzZXRPcGVuIiwiYXJyYXlJbWFnZSIsImluZGV4IiwidmlzaWJsZSIsInNyYyIsImltYWdlIiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nIiwiYWxpZ25JdGVtcyIsImJvdHRvbSIsIkFPUyIsImRhdGEyIiwiZWxlbWVudHByZWNpc2lvbiIsInRleHRUcmFuc2Zvcm0iLCJDbGllbnRwYWdlT25lIiwiZGF0YSIsImluaXQiLCJub21DbGllbnQiLCJzZWN0ZXVyIiwiZHVyZWUiLCJjYXRlZ29yaWUiLCJucCIsImhyZWYiLCJlbmpldSIsImhpc3RvaXJlIiwicmVwb25zZSIsIm1hcmdpbiIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsIlJzQnV0dG9uIiwiTGluZXNUb3AiLCJMaW5lc0JvdHRvbSIsIkNvbnRhY3RQYWdlT25lIiwiTWluaUZvb3RlciIsIlN3YWwiLCJ3aXRoUmVhY3RDb250ZW50IiwiTXlTd2FsIiwiZW1haWwiLCJuYW1lIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInBlcnNpc3QiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImRpc2FibGVkIiwicHJldmVudERlZmF1bHQiLCJmaXJlIiwidGV4dCIsInRvYXN0IiwiaWNvbiIsInRpdGxlIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwicmVxdWVzdE9wdGlvbnMiLCJib2R5Iiwic3RyaW5naWZ5IiwibWF4SGVpZ2giLCJBY3Rpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsIkNoaWZmcmVzIiwiQ3JlYXRpb24iLCJjcmVhdGlvbiIsIkVtb3Rpb24iLCJGb290ZXIiLCJoYW5kbGVFbWFpbElucHV0Q2hhbmdlIiwicmVzcG9uc2UiLCJIb21lcGFnZSIsInVzZVJlZiIsIkluc3RhZmx1eCIsImluc3RhIiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsImFzeW5jIiwiYXBwZW5kQ2hpbGQiLCJib3JkZXIiLCJtYXJnaW5Cb3R0b20iLCJTYXRpc2ZhY3Rpb24iLCJWaXNpb24iLCJNYXJxdWVlIiwiV29yZHBhZ2UiLCJvdmVyZmxvdyIsIlByb2plY3RQYWdlT25lIiwiUHJvamVjdHBhZ2VUd28iLCJQcm9qZWN0cGFnZVRocmVlIiwiUHJvamVjdHBhZ2VGb3VyIiwiUHJvamVjdHBhZ2VGaXZlIiwiUHJvamVjdHBhZ2VTaXgiLCJmYWRlT3V0IiwiZWxlbSIsIm1zIiwib3BhY2l0eSIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInZpc2liaWxpdHkiLCJmaWx0ZXIiLCJzZXREaXNwbGF5IiwicmVzdWx0aW1nIiwiZm9jdXMiLCJxdWVyeVNlbGVjdG9yIiwiUHJvamVjdHBhZ2VPbmUiLCJwcm9qZXQiLCJjbGllbnQiLCJjdXJzb3IiLCJkZW1hbmRlIiwiZGVmaSIsImFjdGlvbiIsIlNlYXJjaFBhZ2VPbmUyIiwiU2VhcmNoUGFnZVR3bzIiLCJpbmZvIiwidHlwZSIsImxvYWQiLCJzZXRMb2FkIiwic2V0TG9hZGluZyIsInBhcmFtIiwiYm94IiwibWluIiwibWF4IiwiU2VhcmNoUGFnZU9uZSIsIlNlYXJjaFBhZ2VUd28iLCJXb3JrcGFnZUNsaWVudE9uZSIsIldvcmtwYWdlQ2xpZW50VHdvIiwibmJyIiwiaXNDb3VudExvYWRlZCIsInNldElzQ291bnRMb2FkZWQiLCJpc0NhdExvYWRlZCIsInNldElzQ2F0TG9hZGVkIiwiY2F0Iiwic2V0Q2F0IiwiY291bnQiLCJzZXRDb3VudCIsInN0eWxlZCIsIkJ1dHRvbiIsIk1lbnUiLCJNZW51SXRlbSIsIlR5cG9ncmFwaHkiLCJBcnJvd0ZvcndhcmRJb3NTaGFycEljb24iLCJNdWlBY2NvcmRpb24iLCJBY2NvcmRpb25Qcm9wcyIsIk11aUFjY29yZGlvblN1bW1hcnkiLCJBY2NvcmRpb25TdW1tYXJ5UHJvcHMiLCJNdWlBY2NvcmRpb25EZXRhaWxzIiwiQWNjb3JkaW9uIiwicHJvcHMiLCJ0aGVtZSIsIm1heFdpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiQWNjb3JkaW9uU3VtbWFyeSIsImZvbnRTaXplIiwicGFsZXR0ZSIsIm1vZGUiLCJmbGV4RGlyZWN0aW9uIiwidHJhbnNmb3JtIiwic3BhY2luZyIsIkFjY29yZGlvbkRldGFpbHMiLCJtYXhIZWlnaHQiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwiaGFuZGxlQ2hhbmdlIiwicGFuZWwiLCJuZXdFeHBhbmRlZCIsIndvcmRzIiwic2V0V29yZHMiLCJjYXRlZ29yeSIsIm1lbnUiLCJyYW5kb21Xb3JkIiwiZ2V0V29yZCIsIndvcmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzcGxpY2UiLCJpbmRleE9mIiwid29yZDEiLCJ3b3JkMiIsIlBhZ2luYXRpb24iLCJwYWdlIiwicGFnZU5iciIsImNlaWwiLCJwYXJzZUludCIsIm9uQ2hhbmdlIiwicGFyYW1zIiwiV29ya3BhZ2VPbmUiLCJXb3JrcGFnZVR3byIsIkRpcmVjdExpbmsiLCJFdmVudHMiLCJhbmltYXRlU2Nyb2xsIiwic2Nyb2xsIiwic2Nyb2xsU3B5Iiwic2Nyb2xsZXIiLCJzZXRJbnN0YSIsImF1ZGlvIiwiQXVkaW8iLCJzdGFydCIsInBsYXkiLCJuYXZiYXIiLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0IiwidGVsZXBvcnQiLCJyZXBsYWNlIiwib25jZSJdLCJzb3VyY2VSb290IjoiIn0=