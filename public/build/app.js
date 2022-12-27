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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
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















var Main = function Main() {
  var Wrapper = function Wrapper(_ref) {
    var children = _ref.children;
    var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useLocation)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_home_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    exact: true,
    path: "/projets/:nbr",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Workpage_workpage__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    exact: true,
    path: "/clients/:nbr",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_WorkpageClient_workpageClient__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    exact: true,
    path: "/contact",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Contactpage_contactpage__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    exact: true,
    path: "/client/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Clientpage_clientpage__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    exact: true,
    path: "/projet/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Projectpage_projectpage__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    exact: true,
    path: "/search/:info",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SearchPage_SearchPage__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    exact: true,
    path: "/searchcat/:info/:name",
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function Clientpage() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.useParams)(),
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
    display = _useState22[0],
    setDisplay = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)([]),
    _useState24 = _slicedToArray(_useState23, 2),
    NextPrev = _useState24[0],
    setNextPrev = _useState24[1];
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
        console.log(result);
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
        console.log(result);
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
    }, []);
  }
  if (error) {
    return /*#__PURE__*/React.createElement("div", null, "Error: ", error.message);
  } else if (!isLoaded && !isImgReady && !isLoadedNextPrev) {
    return /*#__PURE__*/React.createElement("div", null, "Loading...");
  } else {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_navbar__WEBPACK_IMPORTED_MODULE_13__["default"], null), /*#__PURE__*/React.createElement(_clientpageOne__WEBPACK_IMPORTED_MODULE_14__["default"], {
      data: items
    }), /*#__PURE__*/React.createElement(_clientpageTwo__WEBPACK_IMPORTED_MODULE_15__["default"], {
      data: items
    }), /*#__PURE__*/React.createElement(_clientpageThree__WEBPACK_IMPORTED_MODULE_16__["default"], {
      data: second
    }), /*#__PURE__*/React.createElement(_clientpageFour__WEBPACK_IMPORTED_MODULE_17__["default"], {
      preci: preci,
      data2: items
    }), /*#__PURE__*/React.createElement(_clientpageFive__WEBPACK_IMPORTED_MODULE_18__["default"], null), /*#__PURE__*/React.createElement(_clientpageSix__WEBPACK_IMPORTED_MODULE_19__["default"], {
      data: items,
      np: NextPrev
    }));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clientpage);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");





function ClientpageFive() {
  aos__WEBPACK_IMPORTED_MODULE_1___default().init();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      backgroundImage: "url(/zenith/images/x9nes5V.jpg)"
    },
    className: "background"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "opacityBlue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "parentClientView"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "clientGridView1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxFlex"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "clientGridView2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxFlex"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "clientGridView3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxFlex"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "clientGridView4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxFlex"
  })))))));
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
  aos__WEBPACK_IMPORTED_MODULE_1___default().init();
  if (data2.elementprecision) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        backgroundImage: "url(/zenith/images/x9nes5V.jpg)"
      },
      className: "background"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "opacityBlue"
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
      className: " boxClient"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      className: " contain",
      style: {
        objectFit: "cover"
      },
      src: "/images/imageclient/" + preci.image,
      alt: ""
    }))))))));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");





function ClientpageOne(data) {
  console.log(data);
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
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "clientpageText",
    "data-aos": "fade-up"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "medium marginStop clientDetail"
  }, "NOM CLIENT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
    className: "light marginStop clientDetail"
  }, "SECTEUR D\u2019ACTIVIT\xC9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "light clientDetail"
  }, "DUR\xC9E PROJET"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "light clientDetail2"
  }, "CAT\xC9GORIE 1 | CAT\xC9GORIE 2"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "containerCenter3",
    "data-aos": "fade-up"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    style: {
      textTransform: 'uppercase'
    },
    className: "light letterSpacingS  discoverClient2"
  }, data.data.mission)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "containerCenter",
    "data-aos": "fade-up"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "light  discoverClient"
  }, "D\xC9COUVREZ"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
      className: "demiblocOpacity"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "containerCenter marginTopS"
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
  if (data.length > 0) {
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
      className: "column columns is-centered is-11 is-offset-1"
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






function ContactPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_navbar__WEBPACK_IMPORTED_MODULE_0__["default"], null), /*#__PURE__*/React.createElement(_rsButton__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(_linesTop__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/React.createElement(_linesBottom__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/React.createElement(_contactpageOne__WEBPACK_IMPORTED_MODULE_4__["default"], null));
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
    className: "parent5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "containerCenter2 divC4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("h1", {
    className: "medium"
  }, "Contactez Nous"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("h6", {
    className: "light"
  }, "Pr\xE9sentez votre projet et laissez-nous vos informations de contact. Nous reviendrons vers vous dans un d\xE9lai de 24h.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("form", {
    onSubmit: handleSubmit
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_parallax__WEBPACK_IMPORTED_MODULE_3__.Parallax, {
    bgImage: "/zenith/images/aWELhk8A.jpeg",
    strength: 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "",
    style: {
      paddingTop: "50px"
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
    className: "btnS center light letterSpacingM marginBottom2"
  }, "EN COMPRENDRE +"))))));
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
    strength: 800
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
      var newSlider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
        key: element.id,
        className: "swiperSlide2"
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
      }, item.item[0].mission)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("img", {
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover"
        },
        src: "images/imageprojet/".concat(element.creation),
        alt: ""
      })));
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
    strength: 800
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement((react__WEBPACK_IMPORTED_MODULE_21___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_parallax__WEBPACK_IMPORTED_MODULE_23__.Parallax, {
    bgImage: "/zenith/images/nxsX0oGc.jpeg",
    strength: 0
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
    strength: 800
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");


function MiniFooter() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      backgroundImage: "url(/zenith/images/x9nes5V.jpg)"
    },
    className: "demiblocFooter2",
    alt: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "demibloc2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "parent4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "divC"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "center",
    src: "/zenith/images/wX2LCIT.png",
    alt: "",
    width: "220"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "titreC light letterSpacingXS"
  }, "ZENITH ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " VAL D\u2019EUROPE ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " HELLO@AGENCEZENITH.COM ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " 06.11.86.65.80.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "divD"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "titreD medium letterSpacing marginBottom"
  }, "REJOIGNEZ ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " L\u2019AVENTURE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "rs2 centerFlex center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "fb2",
    href: "https://www.facebook.com/AGENCEZENITH/"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "insta2",
    href: "https://www.instagram.com/agencezenith/?hl=fr"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "linkedin2",
    href: "https://www.linkedin.com/company/agence-zenith/"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "titreD medium letterSpacing marginBottom "
  }, "NEWSLETTER"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "inputMail center",
    type: "email",
    id: "email",
    pattern: ".+@globex\\.com",
    size: "30",
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "divE"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "titreC medium letterSpacing"
  }, "SITE MAP"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "ul2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "",
    className: "footerText light text-h5"
  }, "ACCUEIL")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "",
    className: "footerText light text-h5"
  }, "PROJETS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "",
    className: "footerText light text-h5"
  }, "\xC9QUIPE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "",
    className: "footerText light text-h5"
  }, "CONTACT"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
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
  }, []);
  if (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", null, "Erreur : ", error.message);
  } else if (!isLoaded) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", null, "Chargement...");
  } else {
    console.log(items);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement((react__WEBPACK_IMPORTED_MODULE_13___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_parallax__WEBPACK_IMPORTED_MODULE_14__.Parallax, {
      bgImage: "/zenith/images/aWELhk8A.jpeg",
      strength: 0
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "",
      style: {
        paddingTop: '50px'
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
    }, "LE RESTE ON L\u2019\xC9CRIRA ENSEMBLE"))))));
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_parallax__WEBPACK_IMPORTED_MODULE_3__.Parallax, {
    bgImage: "/zenith/images/aWELhk8A.jpeg",
    strength: 0
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
  }, "D\xC9VELOPPEMENT COMMERCIAL "))))))))))));
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
/* harmony import */ var _projectpageOne__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_projectpageOne */ "./assets/components/Projectpage/_projectpageOne.jsx");
/* harmony import */ var _projectpageTwo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_projectpageTwo */ "./assets/components/Projectpage/_projectpageTwo.jsx");
/* harmony import */ var _projectpageThree__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_projectpageThree */ "./assets/components/Projectpage/_projectpageThree.jsx");
/* harmony import */ var _projectpageFour__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_projectpageFour */ "./assets/components/Projectpage/_projectpageFour.jsx");
/* harmony import */ var _projectpageFive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_projectpageFive */ "./assets/components/Projectpage/_projectpageFive.jsx");
/* harmony import */ var _projectpageSix__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_projectpageSix */ "./assets/components/Projectpage/_projectpageSix.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function Projectpage() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.useParams)(),
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
    display = _useState22[0],
    setDisplay = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)([]),
    _useState24 = _slicedToArray(_useState23, 2),
    NextPrev = _useState24[0],
    setNextPrev = _useState24[1];
  if (id) {
    (0,react__WEBPACK_IMPORTED_MODULE_20__.useEffect)(function () {
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
  } else if (!isLoaded || !isImgReady || !isLoadedNextPrev) {
    return /*#__PURE__*/React.createElement("div", null, "Loading...");
  } else {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_navbar__WEBPACK_IMPORTED_MODULE_13__["default"], null), /*#__PURE__*/React.createElement(_projectpageOne__WEBPACK_IMPORTED_MODULE_14__["default"], {
      data: items
    }), /*#__PURE__*/React.createElement(_projectpageTwo__WEBPACK_IMPORTED_MODULE_15__["default"], {
      data: items
    }), /*#__PURE__*/React.createElement(_projectpageThree__WEBPACK_IMPORTED_MODULE_16__["default"], {
      data: second
    }), /*#__PURE__*/React.createElement(_projectpageFour__WEBPACK_IMPORTED_MODULE_17__["default"], {
      preci: preci,
      data2: items
    }), /*#__PURE__*/React.createElement(_projectpageFive__WEBPACK_IMPORTED_MODULE_18__["default"], {
      images: images
    }), /*#__PURE__*/React.createElement(_projectpageSix__WEBPACK_IMPORTED_MODULE_19__["default"], {
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
    href: "#",
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    src: "/zenith/images/bIO1r9F.png",
    alt: "Logo",
    width: 200,
    className: "center"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
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
    to: "/searchcat/".concat(data.data.categorie[0].id, "/").concat(data.data.categorie[0].categorie)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    style: {
      display: "inline",
      textTransform: 'uppercase'
    },
    className: "light clientDetail2"
  }, data.data.categorie[0].categorie)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    style: {
      display: "inline"
    },
    className: "light clientDetail2"
  }, "   |   "), data.data.categorie[1] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/searchcat/".concat(data.data.categorie[1].id, "/").concat(data.data.categorie[0].categorie)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "light clientDetail2",
    style: {
      display: "inline",
      textTransform: 'uppercase'
    }
  }, data.data.categorie[1].categorie)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
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
      className: "column columns is-centered is-11 is-offset-1"
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
        width: "105%"
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
        width: "105%"
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
        width: "105%"
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
/* harmony import */ var _SearchPageOne2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_SearchPageOne2 */ "./assets/components/SearchPage2/_SearchPageOne2.jsx");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../_navbar */ "./assets/components/_navbar.jsx");
/* harmony import */ var _rsButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../_rsButton */ "./assets/components/_rsButton.jsx");
/* harmony import */ var _linesTop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../_linesTop */ "./assets/components/_linesTop.jsx");
/* harmony import */ var _linesBottom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../_linesBottom */ "./assets/components/_linesBottom.jsx");
/* harmony import */ var _SearchPageTwo2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_SearchPageTwo2 */ "./assets/components/SearchPage2/_SearchPageTwo2.jsx");
/* harmony import */ var _Homepage_miniFooter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Homepage/_miniFooter */ "./assets/components/Homepage/_miniFooter.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }























function SearchPage2() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.useParams)(),
    info = _useParams.info;
  var _useParams2 = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.useParams)(),
    name = _useParams2.name;
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
  (0,react__WEBPACK_IMPORTED_MODULE_20__.useEffect)(function () {
    fetch("/getsearchcat/".concat(info), {
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
  } else if (!isLoaded) {
    return /*#__PURE__*/React.createElement("div", null, "dbfgbfg...");
  } else {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_navbar__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/React.createElement(_rsButton__WEBPACK_IMPORTED_MODULE_15__["default"], null), /*#__PURE__*/React.createElement(_linesTop__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/React.createElement(_linesBottom__WEBPACK_IMPORTED_MODULE_17__["default"], null), /*#__PURE__*/React.createElement(_SearchPageOne2__WEBPACK_IMPORTED_MODULE_13__["default"], {
      data: name
    }), /*#__PURE__*/React.createElement(_SearchPageTwo2__WEBPACK_IMPORTED_MODULE_18__["default"], {
      data: items
    }), /*#__PURE__*/React.createElement(_Homepage_miniFooter__WEBPACK_IMPORTED_MODULE_19__["default"], null));
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





function SearchPageOne2(data) {
  console.log(data);
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
  }, "RESULTAT POUR \"", data.data, "\"")))))));
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
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");



function SearchPageTwo2(data) {
  console.log(data);
  var box = [];
  for (var index = 0; index < data.data.length; index++) {
    var item = null;
    if (data.data[index][0] == "projet") {
      item = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        key: index,
        href: "/projet/" + data.data[index].id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "boxWorkpage1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "textDeco"
      }, data.data[index].mission), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: "/images/imageprojet/" + data.data[index].header,
        alt: "",
        style: {
          maxWidth: "100%",
          height: "auto"
        }
      })));
    } else {
      item = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        key: index,
        href: "/client/" + data.data[index].id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "boxWorkpage1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "textDeco"
      }, data.data[index].mission), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: "/images/client/" + data.data[index].header,
        alt: "",
        style: {
          maxWidth: "100%",
          height: "auto"
        }
      })));
    }
    box.push(item);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "",
    alt: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "opacityBlue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper"
  }, box))));
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function SearchPage() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.useParams)(),
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
  } else if (!isLoaded) {
    return /*#__PURE__*/React.createElement("div", null, "dbfgbfg...");
  } else {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_navbar__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/React.createElement(_rsButton__WEBPACK_IMPORTED_MODULE_15__["default"], null), /*#__PURE__*/React.createElement(_linesTop__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/React.createElement(_linesBottom__WEBPACK_IMPORTED_MODULE_17__["default"], null), /*#__PURE__*/React.createElement(_SearchPageOne__WEBPACK_IMPORTED_MODULE_13__["default"], {
      data: info
    }), /*#__PURE__*/React.createElement(_SearchPageTwo__WEBPACK_IMPORTED_MODULE_18__["default"], {
      data: items
    }), /*#__PURE__*/React.createElement(_Homepage_miniFooter__WEBPACK_IMPORTED_MODULE_19__["default"], null));
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");





function SearchPageOne(data) {
  console.log(data);
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
  }, "RESULTAT POUR \"", data.data, "\"")))))));
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
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");



function SearchPageTwo(data) {
  console.log(data);
  var box = [];
  for (var index = 0; index < data.data.length; index++) {
    var item = null;
    if (data.data[index][0] == "projet") {
      item = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        key: index,
        href: "/projet/" + data.data[index].id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "boxWorkpage1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "textDeco"
      }, data.data[index].mission), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: "/images/imageprojet/" + data.data[index].header,
        alt: "",
        style: {
          maxWidth: "100%",
          height: "auto"
        }
      })));
    } else {
      item = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        key: index,
        href: "/client/" + data.data[index].id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "boxWorkpage1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "textDeco"
      }, data.data[index].mission), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: "/images/client/" + data.data[index].header,
        alt: "",
        style: {
          maxWidth: "100%",
          height: "auto"
        }
      })));
    }
    box.push(item);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "",
    alt: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "opacityBlue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper"
  }, box))));
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function WorkpageClient() {
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
  } else if (!isLoaded) {
    return /*#__PURE__*/React.createElement("div", null, "Loading...");
  } else {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_navbar__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/React.createElement(_rsButton__WEBPACK_IMPORTED_MODULE_15__["default"], null), /*#__PURE__*/React.createElement(_linesTop__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/React.createElement(_linesBottom__WEBPACK_IMPORTED_MODULE_17__["default"], null), /*#__PURE__*/React.createElement(_workpageClientOne__WEBPACK_IMPORTED_MODULE_13__["default"], {
      cat: cat
    }), /*#__PURE__*/React.createElement(_workpageClientTwo__WEBPACK_IMPORTED_MODULE_18__["default"], {
      data: items,
      page: nbr,
      count: count
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
function WorkpageClientOne(cat) {
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
  var category = cat.cat;
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
      href: "/searchcat/".concat(element.id, "/").concat(element.categorie)
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
/* harmony import */ var _workpageThree__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_workpageThree */ "./assets/components/Workpage/_workpageThree.jsx");
/* harmony import */ var _workpageFour__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_workpageFour */ "./assets/components/Workpage/_workpageFour.jsx");
/* harmony import */ var _workpageFive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_workpageFive */ "./assets/components/Workpage/_workpageFive.jsx");
/* harmony import */ var _Homepage_miniFooter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../Homepage/_miniFooter */ "./assets/components/Homepage/_miniFooter.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function Workpage() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_25__.useParams)(),
    nbr = _useParams.nbr;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoaded = _useState4[0],
    setIsLoaded = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isCountLoaded = _useState6[0],
    setIsCountLoaded = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isCatLoaded = _useState8[0],
    setIsCatLoaded = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isLoadedNextPrev = _useState10[0],
    setIsLoadedNextPrev = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isImgReady = _useState12[0],
    setImgReady = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    items = _useState14[0],
    setItems = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    cat = _useState16[0],
    setCat = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    count = _useState18[0],
    setCount = _useState18[1];
  (0,react__WEBPACK_IMPORTED_MODULE_23__.useEffect)(function () {
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
  } else if (!isLoaded || !isCountLoaded || !isCatLoaded) {
    return /*#__PURE__*/React.createElement("div", null, "Loading...");
  } else {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_navbar__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/React.createElement(_rsButton__WEBPACK_IMPORTED_MODULE_15__["default"], null), /*#__PURE__*/React.createElement(_linesTop__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/React.createElement(_linesBottom__WEBPACK_IMPORTED_MODULE_17__["default"], null), /*#__PURE__*/React.createElement(_workpageOne__WEBPACK_IMPORTED_MODULE_13__["default"], {
      cat: cat
    }), /*#__PURE__*/React.createElement(_workpageTwo__WEBPACK_IMPORTED_MODULE_18__["default"], {
      data: items,
      page: nbr,
      count: count
    }));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Workpage);

/***/ }),

/***/ "./assets/components/Workpage/_workpageFive.jsx":
/*!******************************************************!*\
  !*** ./assets/components/Workpage/_workpageFive.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");


function WorkpageFive() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "",
    alt: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "opacityBlue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxWorkpage1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxWorkpage1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxWorkpage1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxWorkpage1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxWorkpage1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxWorkpage1"
  }))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkpageFive);

/***/ }),

/***/ "./assets/components/Workpage/_workpageFour.jsx":
/*!******************************************************!*\
  !*** ./assets/components/Workpage/_workpageFour.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");


function WorkpageFour() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "",
    alt: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "opacityBlue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxWorkpage1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxWorkpage1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxWorkpage1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxWorkpage1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxWorkpage1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxWorkpage1"
  }))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkpageFour);

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
function WorkpageOne(cat) {
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
  var category = cat.cat;
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
      href: "/searchcat/".concat(element.id, "/").concat(element.categorie)
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

/***/ "./assets/components/Workpage/_workpageThree.jsx":
/*!*******************************************************!*\
  !*** ./assets/components/Workpage/_workpageThree.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");


function WorkpageThree() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "",
    alt: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "opacityBlue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxWorkpage1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxWorkpage1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxWorkpage1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxWorkpage1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxWorkpage1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxWorkpage1"
  }))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkpageThree);

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
/* harmony import */ var _stylesheets_bulma_grid_columns_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../stylesheets/bulma/grid/columns.sass */ "./assets/stylesheets/bulma/grid/columns.sass");
/* harmony import */ var _stylesheets_bulma_helpers_spacing_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../stylesheets/bulma/helpers/spacing.sass */ "./assets/stylesheets/bulma/helpers/spacing.sass");
/* harmony import */ var _stylesheets_pagination_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../stylesheets/pagination.less */ "./assets/stylesheets/pagination.less");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");









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

  // let step = 1

  // AOS.init()
  // let scroll = false
  // if(step == 4){
  // 	document.querySelector('.patchnaze').style.paddingTop = '0px'
  // }

  //  var lastScrollTop = 0;

  // // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  // window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
  // var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  // if (st > lastScrollTop && scroll == false && step < 9){
  // 	console.log(step + " down")

  // 	 step++
  // 	scroller.scrollTo(`scroll-to-element${step}`, {
  // 		duration: 800,
  // 		delay: 0,
  // 		smooth: 'easeInOutQuart'
  // 	  }) 

  // 	 scroll = true
  // 	setTimeout(() => {
  // 		scroll = false
  // 	}, 1000);
  // } else if(st < lastScrollTop && scroll == false && step > 1){

  // 	step--
  // 	scroller.scrollTo(`scroll-to-element${step}`, {
  // 		duration: 800,
  // 		delay: 0,
  // 		smooth: 'easeInOutQuart'
  // 	})

  // 	 console.log(step + " up")

  // 	 scroll = true
  // 	 setTimeout(() => {
  // 		scroll = false
  // 	 }, 1000);
  // }
  // lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  // }, false);

  if (items) {
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
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/font.css */ "./assets/styles/font.css");

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
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/font.css */ "./assets/styles/font.css");

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styles/font.css */ "./assets/styles/font.css");













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
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
    className: "textDeco marginStop",
    to: "/"
  }, "ACCUEIL")), /*#__PURE__*/React.createElement("h5", {
    className: "menu__item light letterSpacingS"
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
    className: "textDeco",
    to: "/clients"
  }, "CLIENTS")), /*#__PURE__*/React.createElement("h5", {
    className: "menu__item light letterSpacingS"
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
    className: "textDeco",
    to: "/projets/1"
  }, "PROJETS")), /*#__PURE__*/React.createElement("h5", {
    className: "menu__item light letterSpacingS"
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
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
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/font.css */ "./assets/styles/font.css");




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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-slice_js-node_modules_core-js_internals_export_j-4fec76","vendors-node_modules_mui_icons-material_ArrowForwardIosSharp_js-node_modules_mui_material_esm-351d47"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtJQUFDLFlBQVMsU0FBUztJQUFDLHFCQUFrQjtFQUFNLGdCQUN0RjtJQUFHLFNBQVMsRUFBQyxJQUFJO0lBQUMsSUFBSSxFQUFDO0VBQXdDLEVBQUssZUFDcEU7SUFBRyxTQUFTLEVBQUMsT0FBTztJQUFDLElBQUksRUFBQztFQUErQyxFQUFLLGVBQzlFO0lBQUcsU0FBUyxFQUFDLFVBQVU7SUFBQyxJQUFJLEVBQUM7RUFBaUQsRUFBSyxDQUM5RSxDQUNIO0FBRUw7QUFFQSxpRUFBZTVNLFFBQVE7Ozs7Ozs7Ozs7O0FDbEJ2Qjs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9NYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2xpZW50cGFnZS9fY2xpZW50cGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2xpZW50cGFnZS9fY2xpZW50cGFnZUZpdmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NsaWVudHBhZ2UvX2NsaWVudHBhZ2VGb3VyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DbGllbnRwYWdlL19jbGllbnRwYWdlT25lLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DbGllbnRwYWdlL19jbGllbnRwYWdlU2l4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DbGllbnRwYWdlL19jbGllbnRwYWdlVGhyZWUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NsaWVudHBhZ2UvX2NsaWVudHBhZ2VUd28uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NvbnRhY3RwYWdlL19jb250YWN0cGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ29udGFjdHBhZ2UvX2NvbnRhY3RwYWdlT25lLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ib21lcGFnZS9fYWN0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ib21lcGFnZS9fY2hpZmZyZXMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL19jcmVhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZXBhZ2UvX2Vtb3Rpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL19mb290ZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL19ob21lcGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZXBhZ2UvX2luc3RhLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ib21lcGFnZS9fbWluaUZvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZXBhZ2UvX3NhdGlzZmFjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZXBhZ2UvX3Zpc2lvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZXBhZ2UvX3dvcmQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1Byb2plY3RwYWdlL19wcm9qZWN0cGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUHJvamVjdHBhZ2UvX3Byb2plY3RwYWdlRml2ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUHJvamVjdHBhZ2UvX3Byb2plY3RwYWdlRm91ci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUHJvamVjdHBhZ2UvX3Byb2plY3RwYWdlT25lLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Qcm9qZWN0cGFnZS9fcHJvamVjdHBhZ2VTaXguanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1Byb2plY3RwYWdlL19wcm9qZWN0cGFnZVRocmVlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Qcm9qZWN0cGFnZS9fcHJvamVjdHBhZ2VUd28uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1NlYXJjaFBhZ2UyL19TZWFyY2hQYWdlMi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU2VhcmNoUGFnZTIvX1NlYXJjaFBhZ2VPbmUyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TZWFyY2hQYWdlMi9fU2VhcmNoUGFnZVR3bzIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1NlYXJjaFBhZ2UvX1NlYXJjaFBhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1NlYXJjaFBhZ2UvX1NlYXJjaFBhZ2VPbmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1NlYXJjaFBhZ2UvX1NlYXJjaFBhZ2VUd28uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1dvcmtwYWdlQ2xpZW50L193b3JrcGFnZUNsaWVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvV29ya3BhZ2VDbGllbnQvX3dvcmtwYWdlQ2xpZW50T25lLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Xb3JrcGFnZUNsaWVudC9fd29ya3BhZ2VDbGllbnRUd28uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1dvcmtwYWdlL193b3JrcGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvV29ya3BhZ2UvX3dvcmtwYWdlRml2ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvV29ya3BhZ2UvX3dvcmtwYWdlRm91ci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvV29ya3BhZ2UvX3dvcmtwYWdlT25lLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Xb3JrcGFnZS9fd29ya3BhZ2VUaHJlZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvV29ya3BhZ2UvX3dvcmtwYWdlVHdvLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9faG9tZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvX2xpbmVzQm90dG9tLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9fbGluZXNUb3AuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL19uYXZiYXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL19yc0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcnJvdy5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9mb250LmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzaGVldHMvYnVsbWEvZWxlbWVudHMvY29udGFpbmVyLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlc2hlZXRzL2J1bG1hL2dyaWQvY29sdW1ucy5zYXNzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXNoZWV0cy9idWxtYS9oZWxwZXJzL3NwYWNpbmcuc2FzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzaGVldHMvbWFpbi5zYXNzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXNoZWV0cy9wYWdpbmF0aW9uLmxlc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgJy4vc3R5bGVzaGVldHMvbWFpbi5zYXNzJztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL19ob21lLmpzeCc7XHJcbmltcG9ydCBXb3JrcGFnZSBmcm9tICcuL2NvbXBvbmVudHMvV29ya3BhZ2UvX3dvcmtwYWdlJztcclxuaW1wb3J0IFdvcmtwYWdlQ2xpZW50IGZyb20gJy4vY29tcG9uZW50cy9Xb3JrcGFnZUNsaWVudC9fd29ya3BhZ2VDbGllbnQnO1xyXG5pbXBvcnQgQ29udGFjdFBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL0NvbnRhY3RwYWdlL19jb250YWN0cGFnZSc7XHJcbmltcG9ydCBDbGllbnRQYWdlIGZyb20gJy4vY29tcG9uZW50cy9DbGllbnRwYWdlL19jbGllbnRwYWdlJztcclxuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9qZWN0cGFnZSBmcm9tICcuL2NvbXBvbmVudHMvUHJvamVjdHBhZ2UvX3Byb2plY3RwYWdlJztcclxuaW1wb3J0IFNlYXJjaFBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL1NlYXJjaFBhZ2UvX1NlYXJjaFBhZ2UnO1xyXG5pbXBvcnQgU2VhcmNoUGFnZTIgZnJvbSAnLi9jb21wb25lbnRzL1NlYXJjaFBhZ2UyL19TZWFyY2hQYWdlMic7IFxyXG5pbXBvcnQgXCIuL3N0eWxlc2hlZXRzL2J1bG1hL2dyaWQvY29sdW1ucy5zYXNzXCIgXHJcbmltcG9ydCBcIi4vc3R5bGVzaGVldHMvYnVsbWEvaGVscGVycy9zcGFjaW5nLnNhc3NcIjtcclxuaW1wb3J0IFwiLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgV3JhcHBlciA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICB9LCBbbG9jYXRpb24ucGF0aG5hbWVdKTtcclxuICAgIHJldHVybiBjaGlsZHJlblxyXG4gIH07IFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICA8V3JhcHBlcj5cclxuICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9wcm9qZXRzLzpuYnJcIiBlbGVtZW50PXs8V29ya3BhZ2UgLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9jbGllbnRzLzpuYnJcIiBlbGVtZW50PXs8V29ya3BhZ2VDbGllbnQgLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9jb250YWN0XCIgZWxlbWVudD17PENvbnRhY3RQYWdlIC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvY2xpZW50LzppZFwiIGVsZW1lbnQ9ezxDbGllbnRQYWdlIC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvcHJvamV0LzppZFwiIGVsZW1lbnQ9ezxQcm9qZWN0cGFnZSAvPn0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3NlYXJjaC86aW5mb1wiIGVsZW1lbnQ9ezxTZWFyY2hQYWdlIC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvc2VhcmNoY2F0LzppbmZvLzpuYW1lXCIgZWxlbWVudD17PFNlYXJjaFBhZ2UyIC8+fSAvPlxyXG4gICAgICAgIDwvUm91dGVzPlxyXG4gICAgICA8L1dyYXBwZXI+XHJcbiAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjsgXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi9NYWluLmpzJztcclxud2luZG93LlJlYWN0ID0gUmVhY3RcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcclxuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxucm9vdC5yZW5kZXIoXHJcblxyXG4gICAgPE1haW4gLz5cclxuXHJcbik7XHJcblxyXG4iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL19uYXZiYXInO1xyXG5pbXBvcnQgQ2xpZW50UGFnZU9uZSBmcm9tIFwiLi9fY2xpZW50cGFnZU9uZVwiO1xyXG5pbXBvcnQgQ2xpZW50cGFnZVR3byBmcm9tICcuL19jbGllbnRwYWdlVHdvJztcclxuaW1wb3J0IENsaWVudHBhZ2VUaHJlZSBmcm9tICcuL19jbGllbnRwYWdlVGhyZWUnO1xyXG5pbXBvcnQgQ2xpZW50cGFnZUZvdXIgZnJvbSAnLi9fY2xpZW50cGFnZUZvdXInO1xyXG5pbXBvcnQgQ2xpZW50cGFnZUZpdmUgZnJvbSAnLi9fY2xpZW50cGFnZUZpdmUnO1xyXG5pbXBvcnQgQ2xpZW50cGFnZVNpeCBmcm9tICcuL19jbGllbnRwYWdlU2l4JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBDbGllbnRwYWdlKCkge1xyXG5cdGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG5cdGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzTG9hZGVkSW1nLCBzZXRJc0xvYWRlZEltZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzTG9hZGVkTmV4dFByZXYsIHNldElzTG9hZGVkTmV4dFByZXZdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0ltZ1JlYWR5LCBzZXRJbWdSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbaGVhZGVyLCBzZXRIZWFkZXJdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtwcmVjaSwgc2V0UHJlY2ldID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtzZWNvbmQsIHNldFNlY29uZF0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtOZXh0UHJldiwgc2V0TmV4dFByZXZdID0gdXNlU3RhdGUoW10pO1xyXG5cdGlmKGlkKXtcclxuXHRcdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRcdGZldGNoKGAvYXBpL2NsaWVudHMvJHtpZH1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdHNldEl0ZW1zKHJlc3VsdCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHRcdC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0XHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHJcblx0XHRcdGZldGNoKGAvZ2V0SW1hZ2VzQ2xpZW50LyR7aWR9YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRsZXQgdGhpc1JlcyA9IEpTT04ucGFyc2UocmVzdWx0KVxyXG5cdFx0XHRcdHNldElzTG9hZGVkSW1nKHRydWUpO1xyXG5cdFx0XHRcdHNldEltYWdlcyhKU09OLnBhcnNlKHJlc3VsdCkpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdClcclxuXHRcdFx0XHRpZih0aGlzUmVzKXtcclxuXHRcdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzUmVzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpc1Jlc1tpXSlcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coaSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlc1tpXS5oZWFkZXIpXHJcblx0XHRcdFx0XHRcdFx0c2V0SGVhZGVyKHRoaXNSZXNbaV0pXHJcblx0XHRcdFx0XHRcdGlmKHRoaXNSZXNbaV0uZm9jdXMpXHJcblx0XHRcdFx0XHRcdFx0c2V0UHJlY2kodGhpc1Jlc1tpXSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlc1tpXS5zZWNvbmRhaXJlKVxyXG5cdFx0XHRcdFx0XHRcdHNldFNlY29uZCh0aGlzUmVzW2ldKVxyXG5cdFx0XHRcdFx0XHQvLyBpZihpbWFnZXNbaV0udmlzaWJsZSlcclxuXHRcdFx0XHRcdFx0Ly8gXHRzZXREaXNwbGF5KC4uLmltYWdlc1tpXSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlcy5sZW5ndGgtMSA9PSBpKXtcclxuXHRcdFx0XHRcdFx0XHRzZXRJbWdSZWFkeSh0cnVlKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdFx0ZmV0Y2goYC9OZXhQcmV2LyR7aWR9YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRsZXQgTmV4dCA9IEpTT04ucGFyc2UocmVzdWx0WzBdKVxyXG5cdFx0XHRcdGxldCBQcmV2ID0gSlNPTi5wYXJzZShyZXN1bHRbMV0pXHJcblx0XHRcdFx0aWYoTmV4dCAmJiBQcmV2KXtcclxuXHRcdFx0XHRcdHNldE5leHRQcmV2KFtOZXh0LCBQcmV2XSk7XHJcblx0XHRcdFx0XHRpZihOZXh0UHJldil7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKE5leHRQcmV2KVxyXG5cdFx0XHRcdFx0XHRzZXRJc0xvYWRlZE5leHRQcmV2KHRydWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHRcdC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0XHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHR9LCBbXSlcclxuXHR9XHJcblxyXG5cdGlmIChlcnJvcikge1xyXG5cdFx0IHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcblx0ICB9IGVsc2UgaWYgKCFpc0xvYWRlZCAmJiAhaXNJbWdSZWFkeSAmJiAhaXNMb2FkZWROZXh0UHJldikge1xyXG5cdFx0cmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuXHQgIH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAoIFxyXG5cdFx0XHRcdDw+XHJcblx0XHRcdFx0PE5hdmJhcj48L05hdmJhcj5cclxuXHRcdFx0XHQ8Q2xpZW50UGFnZU9uZSBkYXRhPXtpdGVtc30+PC9DbGllbnRQYWdlT25lPlxyXG5cdFx0XHRcdDxDbGllbnRwYWdlVHdvIGRhdGE9e2l0ZW1zfT48L0NsaWVudHBhZ2VUd28+XHJcblx0XHRcdFx0PENsaWVudHBhZ2VUaHJlZSBkYXRhPXtzZWNvbmR9PjwvQ2xpZW50cGFnZVRocmVlPlxyXG5cdFx0XHRcdDxDbGllbnRwYWdlRm91ciBwcmVjaT17cHJlY2l9IGRhdGEyPXtpdGVtc30+PC9DbGllbnRwYWdlRm91cj5cclxuXHRcdFx0XHQ8Q2xpZW50cGFnZUZpdmU+PC9DbGllbnRwYWdlRml2ZT5cclxuXHRcdFx0XHQ8Q2xpZW50cGFnZVNpeCBkYXRhPXtpdGVtc30gbnA9e05leHRQcmV2fT48L0NsaWVudHBhZ2VTaXg+XHJcblx0XHRcdFx0PC8+XHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50cGFnZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gQ2xpZW50cGFnZUZpdmUoKSB7XHJcblx0QU9TLmluaXQoKVxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCJ9fSBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J29wYWNpdHlCbHVlJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmVudENsaWVudFZpZXcnPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjbGllbnRHcmlkVmlldzEnPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdib3hGbGV4Jz48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2xpZW50R3JpZFZpZXcyJz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYm94RmxleCc+PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjbGllbnRHcmlkVmlldzMnPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdib3hGbGV4Jz48L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NsaWVudEdyaWRWaWV3NCc+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2JveEZsZXgnPjwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudHBhZ2VGaXZlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBDbGllbnRwYWdlRm91cih7cHJlY2ksIGRhdGEyfSkge1xyXG5cdEFPUy5pbml0KClcclxuXHRpZihkYXRhMi5lbGVtZW50cHJlY2lzaW9uKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlx0XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdvcGFjaXR5Qmx1ZSc+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3dyYXBwZXIyJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXJDZW50ZXJBJz5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyZW50MjEgbWFyZ2luVG9wJz5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYXJnaW5Ub3AyJyA+XHJcblx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nbGlnaHQgbGV0dGVyU3BhY2luZ1MnPsOJTMOJTUVOVFMgREUgUFLDiUNJU0lPTjwvaDM+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xpZ2h0IGNvbnRhaW5lckNlbnRlckNsaWVudCB0ZXh0LWg1JyBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ319IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmRhdGEyLmVsZW1lbnRwcmVjaXNpb259fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nIGJveENsaWVudCc+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9JyBjb250YWluJyBzdHlsZT17eyBvYmplY3RGaXQ6XCJjb3ZlclwifX0gc3JjPXtcIi9pbWFnZXMvaW1hZ2VjbGllbnQvXCIgKyBwcmVjaS5pbWFnZX0gYWx0PVwiXCIvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHRcdFxyXG5cclxuXHJcblxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH19XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50cGFnZUZvdXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIENsaWVudHBhZ2VPbmUoZGF0YSkge1xyXG5cdGNvbnNvbGUubG9nKGRhdGEpXHJcblx0QU9TLmluaXQoKVxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQxXCIgYWx0PVwiaG9tZXBhZ2VcIj5cclxuXHJcblx0XHRcdDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG5cdFx0XHRcdDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuXHRcdFx0XHQ8L3ZpZGVvPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHlCbHVlXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyMlwiPlxyXG5cdFx0XHRcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayB0bz1cIi9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL3plbml0aC9pbWFnZXMvYklPMXI5Ri5wbmdcIiBhbHQ9XCJMb2dvXCIgd2lkdGg9ezIwMH0gY2xhc3NOYW1lPVwiY2VudGVyXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHRcclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50cGFnZVRleHRcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwibWVkaXVtIG1hcmdpblN0b3AgY2xpZW50RGV0YWlsXCI+Tk9NIENMSUVOVDwvaDE+XHJcblx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT1cImxpZ2h0IG1hcmdpblN0b3AgY2xpZW50RGV0YWlsXCI+U0VDVEVVUiBE4oCZQUNUSVZJVMOJPC9oNj5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsaWdodCBjbGllbnREZXRhaWxcIj5EVVLDiUUgUFJPSkVUPC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxpZ2h0IGNsaWVudERldGFpbDJcIj5DQVTDiUdPUklFIDEgfCBDQVTDiUdPUklFIDI8L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyM1wiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoNCBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ319IGNsYXNzTmFtZT1cImxpZ2h0IGxldHRlclNwYWNpbmdTICBkaXNjb3ZlckNsaWVudDJcIj57ZGF0YS5kYXRhLm1pc3Npb259PC9oND5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxpZ2h0ICBkaXNjb3ZlckNsaWVudFwiPkTDiUNPVVZSRVo8L3A+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaW5lQ2xpZW50XCIgPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRwYWdlT25lO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gQ2xpZW50cGFnZVNpeCh7ZGF0YSwgbnB9KSB7XHJcblx0QU9TLmluaXQoKVxyXG5cdGlmKG5wWzBdKXtcclxuXHRcdGlmKG5wWzBdWzBdID09ICdudWxsJylcclxuXHRcdFx0bnBbMF1bMF0gPSBmYWxzZTtcclxuXHRcdGlmKG5wWzBdWzFdID09ICdudWxsJylcclxuXHRcdFx0bnBbMV1bMF0gPSBmYWxzZTtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkZW1pYmxvY09wYWNpdHknPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyQ2VudGVyIG1hcmdpblRvcFMnPlxyXG5cdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdtZWRpdW0gY2VudGVyVGV4dCc+VU4gVMOJTU9JR05BR0U8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGlnaHQgY2VudGVyVGV4dCcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YS50ZW1vaWduYWdlfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy94OW5lczVWLmpwZylcIn19IGNsYXNzTmFtZT0nZGVtaWJsb2NDbGllbnQnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2RlbWlibG9jT3BhY2l0eSc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJlbnRDbGllbnROZXh0UHJldic+XHJcblxyXG5cdFx0XHRcdFx0XHRcdHtucFsxXVswXSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J0NsaWVudE5leHRQcmV2MScgb25DbGljaz17KCk9Pntsb2NhdGlvbi5ocmVmID0gXCIvY2xpZW50L1wiKyBucFsxXVswXS5pZH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPSdsaWdodCByaWdodFRleHQgbWFyZ2luVG9wUyc+UFJPSkVUIFBSw4lDw4lERU5UPC9oNj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT0ncmlnaHRUZXh0Jz57bnBbMV1bMF0ubm9tQ2xpZW50fTwvaDU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9J2xpZ2h0IHJpZ2h0VGV4dCc+e25wWzFdWzBdLm1pc3Npb259PC9oNj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2Pn1cclxuXHJcblx0XHRcdFx0XHRcdFx0e25wWzBdWzBdICYmIDxkaXYgY2xhc3NOYW1lPSdDbGllbnROZXh0UHJldjInIG9uQ2xpY2s9eygpPT57bG9jYXRpb24uaHJlZiA9IFwiL2NsaWVudC9cIisgbnBbMF1bMF0uaWR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT0nbGlnaHQgbGVmdFRleHQgbWFyZ2luVG9wUyc+UFJPSkVUIFNVSVZBTlQ8L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPSdsZWZ0VGV4dCc+e25wWzBdWzBdLm5vbUNsaWVudH08L2g1PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPSdsaWdodCBsZWZ0VGV4dCc+e25wWzBdWzBdLm1pc3Npb259PC9oNj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2Pn1cclxuXHRcdFx0XHRcdFx0XHR7LyogPGEgaHJlZj17XCIvY2xpZW50L1wiK25wWzFdWzBdLmlkfT4gKi99XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50cGFnZVNpeDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBDbGllbnRwYWdlVGhyZWUoZGF0YSkge1xyXG5cdGNvbnNvbGUubG9nKGRhdGEpXHJcblx0aWYoZGF0YS5sZW5ndGggPiAwKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3dyYXBwZXJEYXJrQmx1ZUNsaWVudCcgc3R5bGU9e3toZWlnaHQ6XCI4MDBweFwiLCB3aWR0aDpcIjEwMCVcIn19PlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9e1wiL2ltYWdlcy9pbWFnZWNsaWVudC9cIiArIGRhdGEuZGF0YS5pbWFnZX0gYWx0PVwiXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG4gfVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudHBhZ2VUaHJlZTsiLCIvLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuLy8gaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcclxuLy8gaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbi8vIGltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gQ2xpZW50cGFnZVR3byhkYXRhKSB7XHJcbi8vIFx0QU9TLmluaXQoKVxyXG4vLyBcdGlmKGRhdGEuZGF0YS5lbmpldSB8fCBkYXRhLmRhdGEuaGlzdG9pcmUgfHwgZGF0YS5kYXRhLnJlcG9uc2Upe1xyXG4vLyBcdFx0cmV0dXJuIChcclxuLy8gXHRcdFx0PD5cclxuLy8gXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy94OW5lczVWLmpwZylcIn19IGNsYXNzTmFtZT0nZGVtaWJsb2NDbGllbnQnPlxyXG4vLyBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2RlbWlibG9jQ2xpZW50T3BhY2l0eSc+XHJcbi8vIFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJlbnRDbGllbnQnPlxyXG4vLyBcdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuZW5qZXUgJiZcclxuLy8gXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2xpZW50R3JpZDEnPlxyXG4vLyBcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nbGlnaHQnPlVORSBFTkpFVTwvaDQ+XHJcbi8vIFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGlnaHQgY29udGFpbmVyQ2VudGVyQ2xpZW50JyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLmRhdGEuZW5qZXV9fT48L2Rpdj5cclxuLy8gXHRcdFx0XHRcdFx0XHQ8L2Rpdj4gXHJcbi8vIFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuLy8gXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLmhpc3RvaXJlICYmXHJcbi8vIFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NsaWVudEdyaWQyJz5cclxuLy8gXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2xpZ2h0Jz5VTkUgSElTVE9JUkU8L2g0PlxyXG4vLyBcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xpZ2h0IGNvbnRhaW5lckNlbnRlckNsaWVudCcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YS5kYXRhLmhpc3RvaXJlfX0+PC9kaXY+XHJcbi8vIFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcbi8vIFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuLy8gXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLnJlcG9uc2UgJiZcclxuLy8gXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2xpZW50R3JpZDMnPlxyXG4vLyBcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nbGlnaHQnPlVORSBSRVBPTlNFPC9oND5cclxuLy8gXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmRhdGEuZGF0YS5yZXBvbnNlfX0+PC9kaXY+XHJcbi8vIFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcbi8vIFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuLy8gXHRcdFx0XHRcdFx0PC9kaXY+XHJcbi8vIFx0XHRcdFx0XHQ8L2Rpdj5cclxuLy8gXHRcdFx0XHQ8L2Rpdj5cclxuLy8gXHRcdFx0PC8+XHJcbi8vIFx0XHQpO1xyXG4vLyBcdH1cclxuLy8gfVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIENsaWVudHBhZ2VUd28oZGF0YSkge1xyXG4gXHRpZihkYXRhLmRhdGEuZW5qZXUgfHwgZGF0YS5kYXRhLmhpc3RvaXJlIHx8IGRhdGEuZGF0YS5yZXBvbnNlKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMvNld2ZW1tM0suanBlZylcIiwgdGV4dEFsaWduOiBcImNlbnRlclwifX0gY2xhc3NOYW1lPSdkZW1pYmxvY0NsaWVudCc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sdW1ucyc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1ucyBpcy1jZW50ZXJlZCBpcy0xMSBpcy1vZmZzZXQtMSc+XHJcblx0XHRcdFx0XHRcdFx0e2RhdGEuZGF0YS5lbmpldSAmJlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gaXMtY2VudGVyZWQgaXMtNCcgc3R5bGU9e3ttYXJnaW5Ub3A6XCI0OHB4XCIsIG1hcmdpblJpZ2h0OlwiYXV0b1wiLCBtYXJnaW5MZWZ0OlwiYXV0b1wifX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdsaWdodCc+VU4gRU5KRVU8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0gY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQgcHgtNidkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLmRhdGEuZW5qZXV9fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj4gXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLmhpc3RvaXJlICYmXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbHVtbiBpcy1jZW50ZXJlZCBpcy00JyBzdHlsZT17e21hcmdpblRvcDpcIjQ4cHhcIiwgbWFyZ2luUmlnaHQ6XCJhdXRvXCIsIG1hcmdpbkxlZnQ6XCJhdXRvXCJ9fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2xpZ2h0Jz5VTkUgSElTVE9JUkU8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0gY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQgY29sdW1ucyBpcy12Y2VudGVyZWQgaXMtY2VudGVyZWQgcHgtNicgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YS5kYXRhLmhpc3RvaXJlfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLnJlcG9uc2UgJiZcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGlzLWNlbnRlcmVkIGlzLTQnICBzdHlsZT17e21hcmdpblRvcDpcIjQ4cHhcIiwgbWFyZ2luUmlnaHQ6XCJhdXRvXCIsIG1hcmdpbkxlZnQ6XCJhdXRvXCJ9fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2xpZ2h0Jz5VTkUgUkVQT05TRTwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fSBjbGFzc05hbWU9J2xpZ2h0IGNvbnRhaW5lckNlbnRlckNsaWVudCBjb2x1bW5zIGlzLXZjZW50ZXJlZCBpcy1jZW50ZXJlZCBweC02JyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLmRhdGEucmVwb25zZX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcblx0fVxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRwYWdlVHdvO1xyXG4iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL19uYXZiYXInO1xyXG5pbXBvcnQgUnNCdXR0b24gZnJvbSAnLi4vX3JzQnV0dG9uJztcclxuaW1wb3J0IExpbmVzVG9wIGZyb20gJy4uL19saW5lc1RvcCc7XHJcbmltcG9ydCBMaW5lc0JvdHRvbSBmcm9tICcuLi9fbGluZXNCb3R0b20nO1xyXG5pbXBvcnQgQ29udGFjdFBhZ2VPbmUgZnJvbSAnLi9fY29udGFjdHBhZ2VPbmUnO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBDb250YWN0UGFnZSgpIHtcclxuXHRyZXR1cm4gKCBcclxuXHRcdDw+XHJcblx0XHQ8TmF2YmFyPjwvTmF2YmFyPlxyXG5cdFx0PFJzQnV0dG9uPjwvUnNCdXR0b24+XHJcblx0XHQ8TGluZXNUb3A+PC9MaW5lc1RvcD5cclxuXHRcdDxMaW5lc0JvdHRvbT48L0xpbmVzQm90dG9tPlxyXG5cdFx0PENvbnRhY3RQYWdlT25lPjwvQ29udGFjdFBhZ2VPbmU+XHJcblxyXG5cclxuXHRcdDwvPlxyXG5cdCApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0UGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcbmltcG9ydCB3aXRoUmVhY3RDb250ZW50IGZyb20gJ3N3ZWV0YWxlcnQyLXJlYWN0LWNvbnRlbnQnXHJcblxyXG5cclxuZnVuY3Rpb24gQ29udGFjdFBhZ2VPbmUoKSB7XHJcblx0Y29uc3QgTXlTd2FsID0gd2l0aFJlYWN0Q29udGVudChTd2FsKVxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRlbWFpbDogJycsXHJcblx0XHRuYW1lOiAnJyxcclxuXHRcdG1lc3NhZ2U6ICcnLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucGVyc2lzdCgpO1xyXG5cdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXHJcblx0XHRcdFxyXG5cdFx0fSk7XHJcblx0XHRjb25zb2xlLmxvZyh2YWx1ZXMuZW1haWwpXHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuXHRcdGUudGFyZ2V0LmNoaWxkcmVuWzNdLmRpc2FibGVkID0gdHJ1ZTtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdE15U3dhbC5maXJlKHtcclxuXHRcdFx0dGV4dDogJ1VuIG1haWwgZGUgY29uZmlybWF0aW9uIHZvdXMgYSDDqXTDqSBlbnZvecOpJyxcclxuXHRcdFx0dG9hc3Q6IHRydWUsXHJcblx0XHRcdGljb246ICdzdWNjZXNzJyxcclxuXHRcdFx0dGl0bGU6ICdCaWVuIHJlw6d1IScsXHJcblx0XHRcdHBvc2l0aW9uOiAndG9wLXJpZ2h0JyxcclxuXHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG5cdFx0XHR0aW1lcjogMzAwMCxcclxuXHRcdFx0dGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuXHRcdFx0ZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcblx0XHRcdCAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG5cdFx0XHQgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG5cdFx0XHR9XHJcblx0XHQgIH0pO1xyXG5cdFx0Y29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoeyBcImVtYWlsXCI6IHZhbHVlcy5lbWFpbCwgXCJuYW1lXCI6IHZhbHVlcy5uYW1lLCBcIm1lc3NhZ2VcIjogdmFsdWVzLm1lc3NhZ2UsIFwibmV3XCI6IHRydWUgfSksXHJcblx0XHR9O1xyXG5cdFx0Ly8gZmV0Y2goJy9zZW5kZW1haWwnLCByZXF1ZXN0T3B0aW9ucylcclxuXHRcdC8vIFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0ZmV0Y2goYC9zZW5kZW1haWxgLHttZXRob2Q6J1BPU1QnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXCJlbWFpbFwiOiB2YWx1ZXMuZW1haWwsIFwibmFtZVwiOiB2YWx1ZXMubmFtZSwgXCJtZXNzYWdlXCI6IHZhbHVlcy5tZXNzYWdlLCBcIm5ld1wiOiB0cnVlIH0pfSlcclxuXHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0LnRoZW4oXHJcblx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0XHR9XHJcblx0XHQpXHJcblx0fTtcclxuXHRBT1MuaW5pdCgpXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZDFcIiBhbHQ9XCJob21lcGFnZVwiPlxyXG5cclxuXHRcdFx0PHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eUJsdWVcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXIyXCI+XHJcblx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayB0bz1cIi9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvemVuaXRoL2ltYWdlcy9iSU8xcjlGLnBuZ1wiIGFsdD1cIkxvZ29cIiB3aWR0aD17MjAwfSBjbGFzc05hbWU9XCJjZW50ZXJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJlbnQ1Jz5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyMiBkaXZDNFwiID5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cIm1lZGl1bVwiPkNvbnRhY3RleiBOb3VzPC9oMT4gXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9XCJsaWdodFwiPlByw6lzZW50ZXogdm90cmUgcHJvamV0IGV0IGxhaXNzZXotbm91cyB2b3NcclxuXHRcdFx0XHRcdFx0XHRcdFx0aW5mb3JtYXRpb25zIGRlIGNvbnRhY3QuIE5vdXMgcmV2aWVuZHJvbnMgdmVyc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2b3VzIGRhbnMgdW4gZMOpbGFpIGRlIDI0aC48L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtX19ncm91cCBmaWVsZCAgZGl2QzFcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImlucHV0XCIgY2xhc3NOYW1lPVwiZm9ybV9fZmllbGRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiBuYW1lPVwibmFtZVwiIGlkPSduYW1lJyB2YWx1ZT17dmFsdWVzLm5hbWV9b25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSByZXF1aXJlZD48L2lucHV0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxcIj5Wb3RyZSBub208L2xhYmVsPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX2dyb3VwMiBmaWVsZCBkaXZDMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaW5wdXRcIiBjbGFzc05hbWU9XCJmb3JtX19maWVsZFwiIHBsYWNlaG9sZGVyPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD0nZW1haWwnIHZhbHVlPXt2YWx1ZXMuZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gcmVxdWlyZWQgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImZvcm1fX2xhYmVsXCI+Vm90cmUgYWRyZXNzZSBlLW1haWw8L2xhYmVsPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHRhcmVhX19ncm91cCBmaWVsZCBkaXZDM1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSB0eXBlPVwiaW5wdXRcIiBjbGFzc05hbWU9XCJmb3JtX19maWVsZFwiIHBsYWNlaG9sZGVyPVwibWVzc2FnZVwiIG5hbWU9XCJtZXNzYWdlXCIgaWQ9J21lc3NhZ2UnIHZhbHVlPXt2YWx1ZXMubWVzc2FnZX0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSByZXF1aXJlZCAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxcIj5Wb3RyZSBiZXNvaW48L2xhYmVsPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3ttYXJnaW5Ub3A6XCI1MHB4XCJ9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1hcmdpbkJvdHRvbTIgYnRuUyBsaWdodCBsZXR0ZXJTcGFjaW5nTVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRFbnZveWVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiBcclxuLy9tb2RpZmllciBhIHBhcnRpciBkZSBsYSBsaWduZSBcclxuLy8gYWpvdXRlciA8Zm9ybT4gPGZpZWxkPiBldGNcclxuLy8gZnVuY3Rpb24gY29udGFjdCBwYWdlT25lIG5lIGZhaXQgcmllbiBuZSBkZWNsYXJlIHJpZW4gZXRjLi4gXHJcbi8vZGVpZmluaXIgdW4gZXRhdCBkIG9yaWdpbmUgcG91ciBsZXMgem9uZSBkZSB0ZXh0ZSBcclxuLy9ham91dGVyIHVuIGJ1dHRvbiBxdWFuZCBjbGlxdWUgcHJlbmQgbGVzIGluZm9ybWF0aW9uIGRhbnMgbGVzIGNoYW1wcyBcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFBhZ2VPbmU7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIEFjdGlvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIDxkaXZcclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwiIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiXHJcbiAgICAgICAgYWx0PVwiYWN0aW9uXCJcclxuICAgICAgPiAqL31cclxuICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9hV0VMaGs4QS5qcGVnXCIgc3RyZW5ndGg9ezB9PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjUwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIyXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lcjJcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRyZUEgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXRjaG5hemVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQUNUSU9OXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJsaWdodCBsZXR0ZXJTcGFjaW5nUyBzb3VzVGl0cmVcIj5cclxuICAgICAgICAgICAgICBTRSBDT05DRU5UUkVSIFNVUiBM4oCZRVNTRU5USUVMIDogVk9VU1xyXG4gICAgICAgICAgICA8L2g2PlxyXG5cclxuICAgICAgICAgICAgPFN3aXBlciBzbGlkZXNQZXJWaWV3PXszfSBzcGFjZUJldHdlZW49ey0xMDB9IGNsYXNzTmFtZT1cInN3aXBlclwiPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2pldHNcIiBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94Q2FycmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInVybCgvemVuaXRoL2ltYWdlcy9wZXhlbHMtYW5kcmVhLXBpYWNxdWFkaW8tMzc2MDA5My5qcGcpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3BGaWx0ZXI6IFwiYmx1cig1cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRBY3Rpb24xIGxldHRlclNwYWNpbmdTIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDT05TRUlMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBQ0NPTVBBR05FTUVOVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDM2MMKwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuXHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvamV0c1wiIGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3hDYXJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcclxuICAgICAgICAgICAgICAgICAgICAgIFwidXJsKC96ZW5pdGgvaW1hZ2VzL0NPTU0uanBnKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcEZpbHRlcjogXCJibHVyKDVweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dEFjdGlvbjEgbGV0dGVyU3BhY2luZ1MgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENPTU1VTklDQVRJT05cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNPTFVUSU9OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU1VSLU1FU1VSRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcblxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2pldHNcIiBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94Q2FycmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInVybCgvemVuaXRoL2ltYWdlcy9FVkVOVC5qcGcpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3BGaWx0ZXI6IFwiYmx1cig1cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRBY3Rpb24xIGxldHRlclNwYWNpbmdTIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFVkVOVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTElWUkFJU09OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ0zDiVMgRU4gTUFJTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcblxyXG4gICAgICAgICAgICA8L1N3aXBlcj5cclxuXHJcbiAgICAgICAgICAgIDxoNFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdHJlQiBsaWdodCBsZXR0ZXJTcGFjaW5nIGNvbnRhaW5lciBjZW50ZXIgYWNjcm9jaGVcIlxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFHSVIgRVQgUsOJQUdJUiBBVkVDIFZPVVNcclxuICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5TIGNlbnRlciBsaWdodCBsZXR0ZXJTcGFjaW5nTSBtYXJnaW5Cb3R0b20yXCI+XHJcbiAgICAgICAgICAgICAgRU4gQ09NUFJFTkRSRSArXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPC9kaXY+ICovfVxyXG4gICAgICA8L1BhcmFsbGF4PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSBcInJlYWN0LXBhcmFsbGF4XCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBDaGlmZnJlcygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuXHQ8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL1oxeklKQ0trLmpwZWdcIiBzdHJlbmd0aD17ODAwfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIC8vIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCIgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJkZW1pYmxvY1wiXHJcbiAgICAgICAgYWx0PVwiY2hpZmZyZXNcIlxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmc2Lm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuICAgICAgICA8L3ZpZGVvPiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbWlibG9jMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmVudDJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjFcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZWRpdW0gY2hpZmZyZXNcIj4yMDE2PC9oMT5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJsaWdodCBjaGlmZnJlczJcIj5BTk7DiUUgREUgQ1JFQVRJT048L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2MlwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1lZGl1bSBjaGlmZnJlc1wiPiszMDA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImxpZ2h0IGNoaWZmcmVzMlwiPkNSw4lBVElPTlMgUEhPVE9TPC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjNcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZWRpdW0gY2hpZmZyZXNcIj4rMTYwPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJsaWdodCBjaGlmZnJlczJcIj5QUk9KRVRTIFLDiUFMSVPDiVM8L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2NFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1lZGl1bSBjaGlmZnJlc1wiPisxNTA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImxpZ2h0IGNoaWZmcmVzMlwiPlLDiUFMSVNBVElPTlMgVklEw4lPUzwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXY1XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWVkaXVtIGNoaWZmcmVzXCI+KzIwMDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibGlnaHQgY2hpZmZyZXMyXCI+Q1LDiUFUSU9OUyBESUdJVEFMRVMgPC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjZcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZWRpdW0gY2hpZmZyZXNcIj4xMDAlPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJsaWdodCBjaGlmZnJlczJcIj5NQURFIElOIEZSQU5DRTwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cdCAgPC9QYXJhbGxheD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoaWZmcmVzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gQ3JlYXRpb24oaXRlbSkge1xyXG4gIGxldCBzbGlkZXIgPSBbXVxyXG4gIGNvbnNvbGUubG9nKGl0ZW0pXHJcbiAgaWYoaXRlbS5pdGVtLmxlbmd0aCA+MCkge1xyXG4gICAgaXRlbS5pdGVtLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGxldCBuZXdTbGlkZXIgPSAoPFN3aXBlclNsaWRlIGtleT17ZWxlbWVudC5pZH0gY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+PGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVswXS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgaW1hZ2VzL2ltYWdlcHJvamV0LyR7ZWxlbWVudC5jcmVhdGlvbn1gfSBhbHQ9XCJcIiAvPjwvZGl2PjwvU3dpcGVyU2xpZGU+KVxyXG4gICAgICBzbGlkZXIucHVzaChuZXdTbGlkZXIpXHJcbiAgICB9KTtcclxuICB9ZWxzZXtcclxuICAgIHNsaWRlciA9ICggPGgxIGNsYXNzTmFtZT1cInRpdHJlQSBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5TdG9wXCI+cmllbiBhIHZvaXI8L2gxPiApXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIEJsdXJEZXRhaWwoZSl7XHJcbiAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgZS50YXJnZXQuc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSBcImJsdXIoNHB4KVwiO1xyXG4gICAgZS50YXJnZXQuY2hpbGRyZW5bMF0uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCJcclxuICB9XHJcbiAgZnVuY3Rpb24gUmVtb3ZlQmx1ckRldGFpbChlKXtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cigwKVwiO1xyXG4gICAgZS50YXJnZXQuY2hpbGRyZW5bMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCJ9fSBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XHJcblxyXG4gICAgICAgIDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG5cdFx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmc0Lm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuXHRcdFx0XHQ8L3ZpZGVvPiAqL31cclxuICAgICAgey8qIDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDRcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+PC9FbGVtZW50PiAqL31cclxuICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9aMXpJSkNLay5qcGVnXCIgc3RyZW5ndGg9ezgwMH0+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7cGFkZGluZ1RvcDogJzUwcHgnfX0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgZGF0YS1hb3M9XCJ6b29tLWluXCJcclxuICAgICAgICAgIGRhdGEtYW9zLW1pcnJvcj1cIlwiXHJcbiAgICAgICAgICBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudD1cIlwiXHJcbiAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlcjJcIj5cclxuICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0cmVBIG1lZGl1bSBsZXR0ZXJTcGFjaW5nIG1hcmdpblN0b3BcIlxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENSw4lBVElPTlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8aDZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaWdodCBsZXR0ZXJTcGFjaW5nUyBzb3VzVGl0cmVcIlxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFVORSBISVNUT0lSRS4gVU4gRU5KRVUuIFVORSBSw4lQT05TRS5cclxuICAgICAgICAgICAgPC9oNj5cclxuXHJcbiAgICAgICAgICAgIDxTd2lwZXJcclxuICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICc1MDBweCd9fVxyXG4gICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9ezF9XHJcbiAgICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MH1cclxuICAgICAgICAgICAgICBicmVha3BvaW50cz17e1xyXG4gICAgICAgICAgICAgICAgNjQwOiB7XHJcbiAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgMTAyNDoge1xyXG4gICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA3LFxyXG4gICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDEsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dpcGVyMlwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3NsaWRlcn1cclxuICAgICAgICAgICAgICB7LyogPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCIgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9IG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX0+PGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+PHAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgZGlzcGxheTogXCJub25lXCIsIHdpZHRoOiBcIjIwMHB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCIwcHhcIiwgdG9wOlwiMjAwcHhcIn19PntpdGVtLml0ZW1bMV0ubWlzc2lvbn08L3A+PC9kaXY+PGltZyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17YC96ZW5pdGgvaW1hZ2VzL19EU0MxMzAwLmpwZ2B9IGFsdD1cIlwiIC8+PC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVsyXS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgL3plbml0aC9pbWFnZXMvMUo0QTUwMDkgKDEpLmpwZ2B9IGFsdD1cIlwiIC8+PC9kaXY+ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCIgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9IG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX0+PGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+PHAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgZGlzcGxheTogXCJub25lXCIsIHdpZHRoOiBcIjIwMHB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCIwcHhcIiwgdG9wOlwiMjAwcHhcIn19PntpdGVtLml0ZW1bM10ubWlzc2lvbn08L3A+PC9kaXY+PGltZyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17YC96ZW5pdGgvaW1hZ2VzL0NhcHR1cmUgZOKAmcOpY3JhbiAyMDIyLTEyLTAzIMOgIDIxLjMzLjI5LnBuZ2B9IGFsdD1cIlwiIC8+PC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVs0XS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgL3plbml0aC9pbWFnZXMvSU1HXzc0ODcuanBnYH0gYWx0PVwiXCIgLz48L2Rpdj4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVs1XS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgL3plbml0aC9pbWFnZXMvSU1HXzAwMDQuanBnYH0gYWx0PVwiXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzRdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy9JTUdfOTgzOC5qcGdgfSBhbHQ9XCJcIiAvPjwvZGl2PiAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzVdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy9ESUFfMDc1OS5qcGdgfSBhbHQ9XCJcIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+ICovfVxyXG4gICAgICAgICAgICA8L1N3aXBlcj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+XHJcbiAgICAgICAgICAgIDxoNFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdHJlQiBsaWdodCBsZXR0ZXJTcGFjaW5nIGNvbnRhaW5lciBjZW50ZXIgYWNjcm9jaGVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUFJPUFVMU0VSIEzigJlJTUFHSU5BSVJFIFBMVVMgTE9JTlxyXG4gICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFyZ2luQm90dG9tMiBidG5TIGNlbnRlciBsaWdodCBsZXR0ZXJTcGFjaW5nTVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9wcm9qZXRzLzFcIiBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG4gICAgICAgICAgICAgICAgIETDiUNPVVZSSVIgKzwvTGluaz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L1BhcmFsbGF4PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRpb247XHJcblxyXG4vLyBjb25zdCBpdGVtcyA9IFsnJywgJycsICcnLCAnJywgJycsICcnLCcnLCcnLCcnLCcnLCcnLCcnLF1cclxuLy8gY29uc3Qgc2V0dGluZyA9IHtcclxuLy8gICBkcmFnU3BlZWQ6IDAuNCxcclxuLy8gICBpdGVtV2lkdGg6IDIwMCxcclxuLy8gICBpdGVtSGVpZ2h0OiA0NjQsXHJcbi8vICAgaXRlbVNpZGVPZmZzZXRzOiA0MCxcclxuLy8gfVxyXG4vLyBjb25zdCBpdGVtU3R5bGUgPSB7XHJcbi8vICAgd2lkdGg6IGAke3NldHRpbmcuaXRlbVdpZHRofXB4YCxcclxuLy8gICBoZWlnaHQ6IGAke3NldHRpbmcuaXRlbUhlaWdodH1weGAsXHJcbi8vICAgbWFyZ2luOiBgMHB4ICR7c2V0dGluZy5pdGVtU2lkZU9mZnNldHN9cHhgXHJcbi8vIH1cclxuXHJcbntcclxuICAvKiA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyQyc+XHJcbiAgICAgICAgICAgICAgPENhcm91c2VsIF9kYXRhPXtpdGVtc30gey4uLnNldHRpbmd9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBpdGVtcy5tYXAoKGksIF9pKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtfaX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naXRlbSdcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLml0ZW1TdHlsZSB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi9cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gRW1vdGlvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIDxkaXZcclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwiIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiXHJcbiAgICAgICAgYWx0PVwiw6ltb3Rpb25cIlxyXG4gICAgICA+ICovfVxyXG4gICAgICAgIHsvKiA8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnMi5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcbiAgICAgICAgPC92aWRlbz4gKi99XHJcbiAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9aMXpJSkNLay5qcGVnXCIgc3RyZW5ndGg9ezgwMH0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3twYWRkaW5nVG9wOiAnNTBweCd9fT5cclxuICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiem9vbS1pblwiIGRhdGEtYW9zLW1pcnJvcj1cInRydWVcImRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudD1cInRvcC1jZW50ZXJcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIj4gIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lcjIgXCI+XHJcbiAgICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRyZUEgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDDiU1PVElPTlxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPGg2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaWdodCBsZXR0ZXJTcGFjaW5nUyBzb3VzVGl0cmVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRkFJUkUgVklCUkVSIExBIENPUkRFIElOVklTSUJMRVxyXG4gICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJGbGV4IGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3hWaWRlb1wiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcblx0XHRcdFx0XHQ8aWZyYW1lIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIG9iamVjdEZpdDogJ2NvdmVyJ319IHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0UxVEZaV2JCMzZNXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lQm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93RnVsbFNjcmVlbj48L2lmcmFtZT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aDRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdHJlQiBsaWdodCBsZXR0ZXJTcGFjaW5nIGNvbnRhaW5lciBjZW50ZXIgYWNjcm9jaGVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU1VTQ0lURVIgTOKAmUVNT1RJT04gRU4gVU4gSU5TVEFOVFxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFyZ2luQm90dG9tMiBidG5TIGNlbnRlciBsaWdodCBsZXR0ZXJTcGFjaW5nTVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRU4gVk9JUiArXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L1BhcmFsbGF4PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1vdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1wYXJhbGxheCc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xyXG5pbXBvcnQgd2l0aFJlYWN0Q29udGVudCBmcm9tICdzd2VldGFsZXJ0Mi1yZWFjdC1jb250ZW50J1xyXG5cclxuXHJcbmZ1bmN0aW9uIEZvb3RlcigpIHtcclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0ZW1haWw6ICcnLFxyXG5cdH0pO1xyXG5cdGNvbnN0IE15U3dhbCA9IHdpdGhSZWFjdENvbnRlbnQoU3dhbClcclxuXHJcblx0Y29uc3QgaGFuZGxlRW1haWxJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucGVyc2lzdCgpO1xyXG5cdFx0c2V0VmFsdWVzKCh2YWx1ZXMpID0+ICh7XHJcblx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0ZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuXHRcdFx0XHJcblx0XHR9KSk7XHJcblx0XHRjb25zb2xlLmxvZyh2YWx1ZXMuZW1haWwpXHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGUudGFyZ2V0LmNoaWxkcmVuWzFdLmRpc2FibGVkID0gdHJ1ZTtcclxuXHRcdE15U3dhbC5maXJlKFxyXG5cdFx0XHQnTWVyY2khJyxcclxuXHRcdFx0J1ZvdHJlIGVtYWlsIMOgIGJpZW4gw6l0w6kgZW5yZWdpc3Ryw6knLFxyXG5cdFx0XHQnc3VjY2VzcydcclxuXHRcdCAgKVxyXG5cdFx0Y29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoeyBcImVtYWlsXCI6IHZhbHVlcy5lbWFpbCwgXCJuZXdcIjogdHJ1ZSB9KSxcclxuXHRcdH07XHJcblx0XHRmZXRjaCgnL2FwaS9lbWFpbHMnLCByZXF1ZXN0T3B0aW9ucylcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdH07XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHQgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9ueHNYMG9HYy5qcGVnXCIgc3RyZW5ndGg9ezB9PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGlkPVwiZm9vdGVyXCIgY2xhc3NOYW1lPVwiZGVtaWJsb2NGb290ZXJcIiBhbHQ9XCJmb290ZXJcIj5cclxuICAgICAgXHRcdCAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1pYmxvYzJcIiA+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlTXCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxoMiAgY2xhc3NOYW1lPVwidGl0cmVFIGxpZ2h0IGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcFwiPkVUIFNJIE9OIFNFIExBTsOHQUlUID88L2gyPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bkwgY2VudGVyIGxpZ2h0IGxldHRlclNwYWNpbmdNXCI+XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCIvY29udGFjdFwiIGNsYXNzTmFtZT1cInRleHREZWNvXCI+Q09OVEFDVDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCIgbGlnaHQgbGV0dGVyU3BhY2luZyBjb250YWluZXIgY2VudGVyXCI+RU5TRU1CTEUsIMOJQ1JJVk9OUyBWT1RSRSBISVNUT0lSRTwvaDQ+XHJcblxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50OVwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj48L0VsZW1lbnQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1pYmxvY0Zvb3RlcjJcIiBhbHQ9XCJmb290ZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtaWJsb2MyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFyZW50NFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGl2Q1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJjZW50ZXIgbWItNVwiIHNyYz1cIi96ZW5pdGgvaW1hZ2VzL3dYMkxDSVQucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCIyMjBcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT0ndWwyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyIG10LTMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJmb290ZXJUZXh0IGxpZ2h0IHRleHQtaDVcIj5aRU5JVEg8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J2xpMic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPiBWQUwgROKAmUVVUk9QRSA8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J2xpMic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPkhFTExPQEFHRU5DRVpFTklUSC5DT008L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J2xpMic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPjA2LjExLjg2LjY1LjgwPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkaXZEXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwidGl0cmVEIG1lZGl1bSBsZXR0ZXJTcGFjaW5nIG1hcmdpbkJvdHRvbVwiIHN0eWxlPXt7bWFyZ2luVG9wOlwiMjBweFwifX0+UkVKT0lHTkVaIDxiciAvPiBM4oCZQVZFTlRVUkU8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyczIgY2VudGVyRmxleCBjZW50ZXJcIj5cclxuICAgICAgXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiZmIyXCIgaHJlZj0naHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0FHRU5DRVpFTklUSC8nPjwvYT5cclxuICAgICAgXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiaW5zdGEyXCIgaHJlZj0naHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9hZ2VuY2V6ZW5pdGgvP2hsPWZyJz48L2E+XHJcbiAgICAgIFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImxpbmtlZGluMlwiIGhyZWY9J2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L2FnZW5jZS16ZW5pdGgvJz48L2E+XHJcblx0XHRcdFx0XHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9ID5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cInRpdHJlRCBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5Cb3R0b20gXCI+IE5FV1NMRVRURVI8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRNYWlsIGNlbnRlclwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cImVtYWlsXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNpemU9XCIzMFwiIG5hbWU9XCJlbWFpbFwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dmFsdWVzLmVtYWlsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlRW1haWxJbnB1dENoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ+PC9pbnB1dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkaXZFXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwidGl0cmVDIG1lZGl1bSBsZXR0ZXJTcGFjaW5nXCI+U0lURSBNQVA8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT0ndWwyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+QUNDVUVJTDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+Q0xJRU5UPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdsaTInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJmb290ZXJUZXh0IGxpZ2h0IHRleHQtaDVcIj5QUk9KRVRTPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdsaTInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJmb290ZXJUZXh0IGxpZ2h0IHRleHQtaDVcIj5DT05UQUNUPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibGlnaHQgZm9vdGVyQ3JlZGl0IGxldHRlclNwYWNpbmdTXCI+wqkgQUdFTkNFIFpFTklUSCAvIFRPVVMgRFJPSVRTIFLDiVNFUlbDiVM8L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgIFxyXG5cclxuXHJcblx0XHRcdDwvUGFyYWxsYXg+XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBT1MgZnJvbSBcImFvc1wiO1xyXG5pbXBvcnQgXCJhb3MvZGlzdC9hb3MuY3NzXCI7XHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gSG9tZXBhZ2UoKSB7XHJcbiAgQU9TLmluaXQoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIDxkaXYgIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy94OW5lczVWLmpwZylcIn19IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIiBhbHQ9XCJob21lcGFnZVwiID4gKi99XHJcblxyXG4gICAgICA8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuXHRcdFx0XHRcdDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuXHRcdFx0XHQ8L3ZpZGVvPiBcclxuICAgICAgey8qIDxQYXJhbGxheCBiZ0ltYWdlPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDIxMzQyNDkxMjYtOWYzNzU1YTUwZDc4P2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNDcwJnE9ODBcIiBzdHJlbmd0aD17NDAwfT4gKi99XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHlCbHVlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lcjJcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXIyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjgwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvemVuaXRoL2ltYWdlcy9iSU8xcjlGLnBuZ1wiIGFsdD1cIkxvZ29cIiB3aWR0aD17MzMwfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZidmkgY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VtaWJvbGRcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjgwMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRoaW5cIj5GQUlURVM8L3NwYW4+IEJSSUxMRVJ7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRoaW5cIj4gVk9TIDwvc3Bhbj5JRMOJRVNcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiODAwXCJcclxuICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50MlwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj48L0VsZW1lbnQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPC9QYXJhbGxheD4gKi99XHJcbiAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXNoZWV0cy9idWxtYS9oZWxwZXJzL3NwYWNpbmcuc2Fzc1wiXHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBJbnN0YWZsdXgoKSB7bGV0IGluc3RhID0gdXNlUmVmKG51bGwpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgc2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9jZG4ubGlnaHR3aWRnZXQuY29tL3dpZGdldHMvbGlnaHR3aWRnZXQuanNcIlxyXG4gICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuXHJcbiAgfSwgW10pO1xyXG5cclxuXHJcblxyXG5cclxuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XHJcbiAgfVxyXG5cclxuXHJcblx0XHRyZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy94OW5lczVWLmpwZylcIn19IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIiBhbHQ9XCIjYWdlbmNlemVuaXRoXCI+XHJcbiAgICAgIDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG5cdFx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmc4Lm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuXHRcdFx0XHQ8L3ZpZGVvPiAqL31cclxuICAgICAgICA8UGFyYWxsYXhcclxuICAgICAgICAgIGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9aMXpJSkNLay5qcGVnXCJcclxuICAgICAgICAgIHN0cmVuZ3RoPXs4MDB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBkYXRhLWFvcz1cInpvb20taW5cIlxyXG4gICAgICAgICAgICBkYXRhLWFvcy1taXJyb3I9XCJ0cnVlXCJcclxuICAgICAgICAgICAgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudD1cInRvcC1jZW50ZXJcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIlxyXG4gICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6ICc1MHB4J319XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlcjJcIj5cclxuICAgICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdHJlQSBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5TdG9wXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICNBR0VOQ0VaRU5JVEhcclxuICAgICAgICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICByZWY9e2luc3RhfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyRmxleFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OlwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIHBhZGRpbmdUb3A6XCI1MHB4XCJ9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTFcIiA+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTJcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlM1wiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdj48cCBjbGFzc05hbWU9XCJJTUFHSU5FUlwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPklNQUdJTkVSPC9wPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdj48cCBjbGFzc05hbWU9XCJDUsOJRVJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5DUsOJRVI8L3A+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PjxwIGNsYXNzTmFtZT1cIlLDilZFUlwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPlLDilZFUjwvcD48L2Rpdj5cclxuICAgICAgICAgIDxkaXY+PHAgY2xhc3NOYW1lPVwiRU5TRU1CTEVcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5FTlNFTUJMRTwvcD48L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTRcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlNVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGU2XCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGU3XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZThcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlOVwiPjwvZGl2PiBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlMTBcIj48L2Rpdj4gXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTExXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTEyXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTEzXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTE0XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTE1XCI+PC9kaXY+ICAqL31cclxuICAgICAgICAgICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiLy9saWdodHdpZGdldC5jb20vd2lkZ2V0cy81MzBjNTkwYzY2Y2Y1ZmZhODQ0ZGVkNzUxYTZhNGNkNS5odG1sXCJcclxuICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5nPVwibm9cIlxyXG4gICAgICAgICAgICAgICAgICBhbGxvd3RyYW5zcGFyZW5jeT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaWdodHdpZGdldC13aWRnZXRcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOlwiNzAlXCIsIGJvcmRlcjpcIjBcIn19XHJcbiAgICAgICAgICAgICAgICA+PC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGg0XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDpcIjEwMHB4XCIsIG1hcmdpbkJvdHRvbTpcIjZ2aFwifX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpZ2h0IGxldHRlclNwYWNpbmcgY29udGFpbmVyIGNlbnRlciBtYXJnaW5Ub3BYTFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBVTiBVTklWRVJTIERFIFBPU1NJQklMSVRFU1xyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9QYXJhbGxheD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG5cdH1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBJbnN0YWZsdXg7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gTWluaUZvb3RlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblxyXG5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy94OW5lczVWLmpwZylcIn19IGNsYXNzTmFtZT1cImRlbWlibG9jRm9vdGVyMlwiIGFsdD1cImZvb3RlclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1pYmxvYzJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYXJlbnQ0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkaXZDXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImNlbnRlclwiIHNyYz1cIi96ZW5pdGgvaW1hZ2VzL3dYMkxDSVQucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCIyMjBcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGl0cmVDIGxpZ2h0IGxldHRlclNwYWNpbmdYU1wiPlpFTklUSCA8YnIgLz4gVkFMIETigJlFVVJPUEUgPGJyIC8+IEhFTExPQEFHRU5DRVpFTklUSC5DT00gPGJyIC8+IDA2LjExLjg2LjY1LjgwLjwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkaXZEXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwidGl0cmVEIG1lZGl1bSBsZXR0ZXJTcGFjaW5nIG1hcmdpbkJvdHRvbVwiPlJFSk9JR05FWiA8YnIgLz4gTOKAmUFWRU5UVVJFPC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicnMyIGNlbnRlckZsZXggY2VudGVyXCI+XHJcbiAgICAgIFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImZiMlwiIGhyZWY9J2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9BR0VOQ0VaRU5JVEgvJz48L2E+XHJcbiAgICAgIFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImluc3RhMlwiIGhyZWY9J2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vYWdlbmNlemVuaXRoLz9obD1mcic+PC9hPlxyXG4gICAgICBcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJsaW5rZWRpbjJcIiBocmVmPSdodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9hZ2VuY2UtemVuaXRoLyc+PC9hPlxyXG4gICAgXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJ0aXRyZUQgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luQm90dG9tIFwiPk5FV1NMRVRURVI8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRNYWlsIGNlbnRlclwiIHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwYXR0ZXJuPVwiLitAZ2xvYmV4XFwuY29tXCIgc2l6ZT1cIjMwXCIgcmVxdWlyZWQ+PC9pbnB1dD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkaXZFXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwidGl0cmVDIG1lZGl1bSBsZXR0ZXJTcGFjaW5nXCI+U0lURSBNQVA8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT0ndWwyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJmb290ZXJUZXh0IGxpZ2h0IHRleHQtaDVcIj5BQ0NVRUlMPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPlBST0pFVFM8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+w4lRVUlQRTwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJmb290ZXJUZXh0IGxpZ2h0IHRleHQtaDVcIj5DT05UQUNUPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibGlnaHQgZm9vdGVyQ3JlZGl0IGxldHRlclNwYWNpbmdTXCI+wqkgQUdFTkNFIFpFTklUSCAvIFRPVVMgRFJPSVRTIFLDiVNFUlbDiVM8L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgIFxyXG5cclxuXHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBNaW5pRm9vdGVyOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gU2F0aXNmYWN0aW9uKCkge1xyXG5cdGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgXHJcblx0Ly8gUmVtYXJxdWUgOiBsZSB0YWJsZWF1IHZpZGUgZGUgZMOpcGVuZGFuY2VzIFtdIGluZGlxdWVcclxuXHQvLyBxdWUgdXNlRWZmZWN0IG5lIHPigJlleMOpY3V0ZXJhIHF14oCZdW5lIGZvaXMsIHVuIHBldSBjb21tZVxyXG5cdC8vIGNvbXBvbmVudERpZE1vdW50KClcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdCAgZmV0Y2goXCIvYXBpL2NsaWVudHNcIilcclxuXHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0LnRoZW4oXHJcblx0XHQgIChyZXN1bHQpID0+IHtcclxuXHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdHNldEl0ZW1zKHJlc3VsdFtcImh5ZHJhOm1lbWJlclwiXSk7XHJcblx0XHQgIH0sXHJcblx0XHQgIC8vIFJlbWFycXVlIDogaWwgZmF1dCBnw6lyZXIgbGVzIGVycmV1cnMgaWNpIHBsdXTDtHQgcXVlIGRhbnNcclxuXHRcdCAgLy8gdW4gYmxvYyBjYXRjaCgpIGFmaW4gcXVlIG5vdXMgbuKAmWF2YWxpb25zIHBhcyBsZXMgZXhjZXB0aW9uc1xyXG5cdFx0ICAvLyBkdWVzIMOgIGRlIHbDqXJpdGFibGVzIGJ1Z3MgZGFucyBsZXMgY29tcG9zYW50cy5cclxuXHRcdCAgKGVycm9yKSA9PiB7XHJcblx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHQgIH1cclxuXHRcdClcclxuXHR9LCBbXSlcclxuICBcclxuXHRpZiAoZXJyb3IpIHtcclxuXHQgIHJldHVybiA8ZGl2PkVycmV1ciA6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuXHR9IGVsc2UgaWYgKCFpc0xvYWRlZCkge1xyXG5cdCAgcmV0dXJuIDxkaXY+Q2hhcmdlbWVudC4uLjwvZGl2PjtcclxuXHR9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coaXRlbXMpO1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuICAgICAgey8qIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxyXG5cclxuICAgICAgPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZzUubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+ICovfVxyXG4gICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL2FXRUxoazhBLmpwZWdcIiBzdHJlbmd0aD17MH0+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7cGFkZGluZ1RvcDogJzUwcHgnfX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIyXCI+XHJcblxyXG5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRyZUEgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPlNBVElTRkFDVElPTjwvaDE+XHJcbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGl0cmVDZW50ZXIgbGlnaHQgbGV0dGVyU3BhY2luZ1NcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj7DilRSRSDDgCBWT1MgQ8OUVMOJUywgQ+KAmUVTVCBBVkFOVCBUT1VUIERFUyBSRU5DT05UUkVTLjwvaDY+XHJcbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGl0cmVDZW50ZXIgbGlnaHQgbGV0dGVyU3BhY2luZ1MgcGFkZGluZ0JvdHRvbVwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPkRFUyBISVNUT0lSRVMgSFVNQUlORVMsIEVYQ0VQVElPTk5FTExFUywgT1JJR0lOQUxFUy48L2g2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lck1heCBjZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4OHB4XCJ9fSBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1swXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi96ZW5pdGgvaWNvbnMvMGFmZGM3XzJiNzJlODJhNjgyNzQ2OTE4ZTE1ZDlmNjdlOTM3ZWI3fm12Mi5wbmdcIn0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL3plbml0aC9pY29ucy8wYWZkYzdfNGM3NWZkM2Y1MTllNDIyMGJiNTgyZDc3YzhhYTdjODJ+bXYyLnBuZ1wifSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvemVuaXRoL2ljb25zLzBhZmRjN180ZDcyNTc5MjRhYzU0ODVmYTZlYjlmOGMzYmE4YzNmMn5tdjIucG5nXCJ9IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi96ZW5pdGgvaWNvbnMvMGFmZGM3XzY0YTY0MDk0NTRkMTRkNTI4NTBjZDY3MjQ4NTA1NTVifm12Mi5wbmdcIn0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL3plbml0aC9pY29ucy8wYWZkYzdfNDIwYWJjZTBjNDdkNGQ3ZTllN2QyMTY2MzA1ZWE2YmV+bXYyLnBuZ1wifSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMV1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMl1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgc3R5bGU9e3ttYXJnaW5SaWdodDpcIjg4cHhcIn19IGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzBdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJNYXggY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiODhweFwifX0gY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMV1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMl1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMV1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMV1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMl1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgc3R5bGU9e3ttYXJnaW5SaWdodDpcIjg4cHhcIn19IGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzBdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJNYXggY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiODhweFwifX0gY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMV1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMl1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMV1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMl1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMV1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMl1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgc3R5bGU9e3ttYXJnaW5SaWdodDpcIjg4cHhcIn19IGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzBdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0cmVCIGxpZ2h0IGxldHRlclNwYWNpbmcgY29udGFpbmVyIGNlbnRlciBhY2Nyb2NoZSBtYXJnaW5Cb3R0b20yXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCI2dmhcIn19IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPkxFIFJFU1RFIE9OIEzigJnDiUNSSVJBIEVOU0VNQkxFPC9oND5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUGFyYWxsYXg+XHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgU2F0aXNmYWN0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2Fycm93LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBWaXNpb24oKSAge1xyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblxyXG4gICAgICB7LyogPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZzYubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+ICovfVxyXG4gICAgICB7LyogPGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCJ9fSBjbGFzc05hbWU9J2JhY2tncm91bmQnPiAqL31cclxuXHJcbiAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL3plbml0aC9pbWFnZXMvYVdFTGhrOEEuanBlZ1wiIHN0cmVuZ3RoPXswfT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3twYWRkaW5nVG9wOiAnNTBweCd9fT5cclxuICAgICAgPGRpdiBkYXRhLWFvcz1cInpvb20taW5cIiBkYXRhLWFvcy1taXJyb3I9XCJ0cnVlXCJkYXRhLWFvcy1vbmNlPVwiZmFsc2VcImRhdGEtYW9zLWFuY2hvci1wbGFjZW1lbnQ9XCJ0b3AtY2VudGVyXCJkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIiBzdHlsZT17e2hlaWdodDpcIjg1MHB4XCJ9fT5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRyZUEgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPlZJU0lPTjwvaDE+XHJcbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibGlnaHQgbGV0dGVyU3BhY2luZ1Mgc291c1RpdHJlXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+VU5FIFJFTkNPTlRSRSBRVUkgQ0hBTkdFIFRPVVQ8L2g2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyXCI+XHJcbiAgICAgICAgICAgIDxTd2lwZXJcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldz17MX1cclxuICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM9e3RydWV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3aXBlcjNcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcl9fY29udGVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJlbnQzXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXNpb25Cb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBvYmplY3RGaXQ6ICdjb3Zlcid9fXNyYz1cImh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvYmI1ZTNiX2ExMDUyMzliZmQxODQ4YjQ4OTI5MzlkODc5OGNkNjU3fm12Mi5qcGcvdjEvY3JvcC94XzEwOSx5XzAsd183MzQsaF85MDAvZmlsbC93XzI3MCxoXzM0OCxhbF9jLHFfODAsdXNtXzEuMjBfMS4wMF8wLjAxLGVuY19hdXRvL2JiNWUzYl9hMTA1MjM5YmZkMTg0OGI0ODkyOTM5ZDg3OThjZDY1N35tdjIuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ2aXNpb25UZXh0MiBtZWRpdW1cIj5NQVRISVM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkNPTlNFSUw8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5Ow4lHT0NJQVRJT048L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj7DiVbDiU5FTUVOVElFTDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkdFU1RJT04gREUgUFJPSkVUPC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+RElSRUNUSU9OIEFSVElTVElRVUU8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5ESVJFQ1RJT04gRCdFWFBMT0lUQVRJT048L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkTDiVZFTE9QUEVNRU5UIENPTU1FUkNJQUwgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwiYXJyb3dcIiBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgdG9wOlwiNTAlXCIsIGxlZnQ6XCI3NSVcIiwgd2lkdGg6XCIxMDBweFwifX0gc3JjPVwiL3plbml0aC9pbWFnZXMvYXJyb3dzLXJpZ2h0LnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJfX2NvbnRlbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyZW50M1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGlkPVwiYXJyb3cyXCIgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsIHRvcDpcIjUwJVwiLCBsZWZ0OlwiMCVcIiwgd2lkdGg6XCIxMDBweFwifX0gc3JjPVwiL3plbml0aC9pbWFnZXMvYXJyb3dzLXJpZ2h0LnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpc2lvbkJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIG9iamVjdEZpdDogJ2NvdmVyJ319c3JjPVwiaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS85NGIyNTVfNzQ4ODVkMzc0Y2Y4NDIxNDg5OWM5ZGY2MGQ2NTM2Mzh+bXYyLmpwZy92MS9maWxsL3dfMjg0LGhfMzcxLGFsX2MscV84MCx1c21fMS4yMF8xLjAwXzAuMDEsZW5jX2F1dG8vQVZBVEFSJTIwUk9OJTIwQi5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInZpc2lvblRleHQyIG1lZGl1bVwiPlJPTjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+Q09OU0VJTDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPk7DiUdPQ0lBVElPTjwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPsOJVsOJTkVNRU5USUVMPC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+R0VTVElPTiBERSBQUk9KRVQ8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5ESVJFQ1RJT04gQVJUSVNUSVFVRTwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkRJUkVDVElPTiBEJ0VYUExPSVRBVElPTjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+RMOJVkVMT1BQRU1FTlQgQ09NTUVSQ0lBTCA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgIDwvU3dpcGVyPlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9QYXJhbGxheD5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgVmlzaW9uOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQgTWFycXVlZSBmcm9tIFwicmVhY3QtZmFzdC1tYXJxdWVlXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tIFwicmVhY3QtcGFyYWxsYXhcIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzaGVldHMvYnVsbWEvaGVscGVycy9zcGFjaW5nLnNhc3NcIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCI7XHJcblxyXG5jb25zdCBXb3JkcGFnZSA9ICh7fSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy82V3ZlbW0zSy5qcGVnXCIgc3RyZW5ndGg9ezB9PiAqL31cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzLzZXdmVtbTNLLmpwZWcpXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiNTcwcHhcIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImRlbWlibG9jXCJcclxuICAgICAgICBhbHQ9XCJ3b3JkcGFnZVwiXHJcbiAgICAgID5cclxuICAgICAgICB7LyogPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+ICovfVxyXG4gICAgICAgIHsvKiA8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZzQubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPiAqL31cclxuICAgICAgICB7LyogPC92aWRlbz4gKi99XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgYWx0PVwiTGlzdGUgZGUgbW90c1wiIHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBkYXRhLWFvcz1cInpvb20taW5cIlxyXG4gICAgICAgICAgICBkYXRhLWFvcy1taXJyb3I9XCJ0cnVlXCJcclxuICAgICAgICAgICAgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCJcclxuICAgICAgICAgICAgZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudD1cInRvcC1jZW50ZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmVudFwiPlxyXG4gICAgICAgICAgICAgIDxNYXJxdWVlXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE3MHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgZ3JhZGllbnQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3b3JkcGFnZSBsZXR0ZXJTcGFjaW5nIGxpZ2h0IGdyaWQxIHB4LTZcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIndvcmRwYWdlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgUsOJQUNUSVZJVMOJXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1hcmdpbiBtZWRpdW0gd29yZHBhZ2VUZXh0IGdyaWQyIHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2UgbGV0dGVyU3BhY2luZyBvdXRsaW5lIG5vcm1hbCBncmlkMyBweC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIFBST1hJTUlUw4lcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIG1hcmdpbiBtZWRpdW0gd29yZHBhZ2VUZXh0IG91dGxpbmUgZ3JpZDQgcHItNVwiPsK3PC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3b3JkcGFnZSBsaWdodCBsZXR0ZXJTcGFjaW5nIGdyaWQ1IHB4LTZcIj5QQVNTSU9OPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0ICBtZWRpdW0gZ3JpZDYgcHItNVwiPsK3PC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3b3JkcGFnZSBub3JtYWwgb3V0bGluZSBsZXR0ZXJTcGFjaW5nIGdyaWQ3IHB4LTZcIj5cclxuICAgICAgICAgICAgICAgICAgU1RSQVTDiUdJRVxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG91dGxpbmUgbWVkaXVtIGdyaWQ2IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgPC9NYXJxdWVlPlxyXG4gICAgICAgICAgICAgIDxNYXJxdWVlXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE3MHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPXtcInJpZ2h0XCJ9XHJcbiAgICAgICAgICAgICAgICBncmFkaWVudD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndvcmRwYWdlIG5vcm1hbCBsZXR0ZXJTcGFjaW5nIGdyaWQ5IHB4LTZcIj5FVkVOVDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBtZWRpdW0gZ3JpZDEwIHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2UgbWFycm9uIG5vcm1hbCBsZXR0ZXJTcGFjaW5nIGdyaWQxMSBweC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIFpFTklUSFxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG91dGxpbmUgbWVkaXVtIGdyaWQxMiBwci01XCI+wrc8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndvcmRwYWdlIG5vcm1hbCBsZXR0ZXJTcGFjaW5nIGdyaWQxMyBweC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIENPTlNFSUxcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBtZWRpdW0gZ3JpZDE0IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2Ugbm9ybWFsIGxldHRlclNwYWNpbmcgZ3JpZDE1IHB4LTZcIj5cclxuICAgICAgICAgICAgICAgICAgQ09NTVVOSUNBVElPTlxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG91dGxpbmUgbWVkaXVtIGdyaWQ2IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgPC9NYXJxdWVlPlxyXG4gICAgICAgICAgICAgIDxNYXJxdWVlXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE3MHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgZ3JhZGllbnQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3b3JkcGFnZSBtZWRpdW0gbGV0dGVyU3BhY2luZyBncmlkMTcgcHgtNlwiPlxyXG4gICAgICAgICAgICAgICAgICBDUsOJQVRJVklUw4lcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBtZWRpdW0gZ3JpZDE4IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2UgbGlnaHQgb3V0bGluZSBsZXR0ZXJTcGFjaW5nIGdyaWQxOSBweC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIFLDilZFUlxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG91dGxpbmUgbWVkaXVtIGdyaWQyMCBwci01XCI+wrc8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndvcmRwYWdlIGxpZ2h0IGxldHRlclNwYWNpbmcgZ3JpZDIxIHB4LTZcIj5cclxuICAgICAgICAgICAgICAgICAgQU1CSVRJT05cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBtZWRpdW0gZ3JpZDIyIHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2Ugb3V0bGluZSBub3JtYWwgbGV0dGVyU3BhY2luZyBncmlkMjMgcHgtNlwiPlxyXG4gICAgICAgICAgICAgICAgICBJTUFHSU5BVElPTlxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG91dGxpbmUgbWVkaXVtIGdyaWQ2IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgPC9NYXJxdWVlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDwvUGFyYWxsYXg+ICovfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmRwYWdlO1xyXG4iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL19uYXZiYXInO1xyXG5pbXBvcnQgUHJvamVjdFBhZ2VPbmUgZnJvbSBcIi4vX3Byb2plY3RwYWdlT25lXCI7XHJcbmltcG9ydCBQcm9qZWN0cGFnZVR3byBmcm9tICcuL19wcm9qZWN0cGFnZVR3byc7XHJcbmltcG9ydCBQcm9qZWN0cGFnZVRocmVlIGZyb20gJy4vX3Byb2plY3RwYWdlVGhyZWUnO1xyXG5pbXBvcnQgUHJvamVjdHBhZ2VGb3VyIGZyb20gJy4vX3Byb2plY3RwYWdlRm91cic7XHJcbmltcG9ydCBQcm9qZWN0cGFnZUZpdmUgZnJvbSAnLi9fcHJvamVjdHBhZ2VGaXZlJztcclxuaW1wb3J0IFByb2plY3RwYWdlU2l4IGZyb20gJy4vX3Byb2plY3RwYWdlU2l4JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0cGFnZSgpIHtcclxuXHRjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZEltZywgc2V0SXNMb2FkZWRJbWddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZE5leHRQcmV2LCBzZXRJc0xvYWRlZE5leHRQcmV2XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNJbWdSZWFkeSwgc2V0SW1nUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbcHJlY2ksIHNldFByZWNpXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbc2Vjb25kLCBzZXRTZWNvbmRdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbTmV4dFByZXYsIHNldE5leHRQcmV2XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRpZihpZCl7XHJcblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0XHRmZXRjaChgL2FwaS9wcm9qZXRzLyR7aWR9YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRJdGVtcyhyZXN1bHQpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cclxuXHRcdFx0ZmV0Y2goYC9nZXRJbWFnZXNQcm9qZXQvJHtpZH1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdGltZykgPT4ge1xyXG5cdFx0XHRcdGxldCB0aGlzUmVzID0gSlNPTi5wYXJzZShyZXN1bHRpbWcpXHJcblx0XHRcdFx0c2V0SXNMb2FkZWRJbWcodHJ1ZSk7XHJcblx0XHRcdFx0c2V0SW1hZ2VzKEpTT04ucGFyc2UocmVzdWx0aW1nKSk7XHJcblx0XHRcdFx0aWYoIHRoaXNSZXMgPT0gXCJbXVwiIHx8IHRoaXNSZXMubGVuZ3RoID09IDApe1xyXG5cdFx0XHRcdFx0c2V0SW1nUmVhZHkodHJ1ZSlcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZih0aGlzUmVzKXtcclxuXHRcdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzUmVzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpc1Jlc1tpXSlcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coaSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlc1tpXS5oZWFkZXIpXHJcblx0XHRcdFx0XHRcdFx0c2V0SGVhZGVyKHRoaXNSZXNbaV0pXHJcblx0XHRcdFx0XHRcdGlmKHRoaXNSZXNbaV0uZm9jdXMpXHJcblx0XHRcdFx0XHRcdFx0c2V0UHJlY2kodGhpc1Jlc1tpXSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlc1tpXS5zZWNvbmRhaXJlKVxyXG5cdFx0XHRcdFx0XHRcdHNldFNlY29uZCh0aGlzUmVzW2ldKVxyXG5cdFx0XHRcdFx0XHQvLyBpZihpbWFnZXNbaV0udmlzaWJsZSlcclxuXHRcdFx0XHRcdFx0Ly8gXHRzZXREaXNwbGF5KC4uLmltYWdlc1tpXSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlcy5sZW5ndGgtMSA9PSBpKXtcclxuXHRcdFx0XHRcdFx0XHRzZXRJbWdSZWFkeSh0cnVlKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHJcblx0XHRcdGZldGNoKGAvTmV4UHJldlAvJHtpZH1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdGxldCBOZXh0ID0gSlNPTi5wYXJzZShyZXN1bHRbMF0pXHJcblx0XHRcdFx0bGV0IFByZXYgPSBKU09OLnBhcnNlKHJlc3VsdFsxXSlcclxuXHRcdFx0XHRpZihOZXh0ICYmIFByZXYpe1xyXG5cdFx0XHRcdFx0c2V0TmV4dFByZXYoW05leHQsIFByZXZdKTtcclxuXHRcdFx0XHRcdGlmKE5leHRQcmV2KXtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coTmV4dFByZXYpXHJcblx0XHRcdFx0XHRcdHNldElzTG9hZGVkTmV4dFByZXYodHJ1ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdH0sIFtdKVxyXG5cdH1cclxuXHJcblx0aWYgKGVycm9yKSB7XHJcblx0XHQgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuXHQgIH0gZWxzZSBpZiAoIWlzTG9hZGVkIHx8ICFpc0ltZ1JlYWR5IHx8ICFpc0xvYWRlZE5leHRQcmV2KSB7XHJcblx0XHRyZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG5cdCAgfSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICggXHJcblx0XHRcdFx0PD5cclxuXHRcdFx0XHQ8TmF2YmFyPjwvTmF2YmFyPlxyXG5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8UHJvamVjdFBhZ2VPbmUgZGF0YT17aXRlbXN9PjwvUHJvamVjdFBhZ2VPbmU+XHJcblx0XHRcdFx0PFByb2plY3RwYWdlVHdvIGRhdGE9e2l0ZW1zfT48L1Byb2plY3RwYWdlVHdvPlxyXG5cdFx0XHRcdDxQcm9qZWN0cGFnZVRocmVlIGRhdGE9e3NlY29uZH0+PC9Qcm9qZWN0cGFnZVRocmVlPlxyXG5cdFx0XHRcdDxQcm9qZWN0cGFnZUZvdXIgcHJlY2k9e3ByZWNpfSBkYXRhMj17aXRlbXN9PjwvUHJvamVjdHBhZ2VGb3VyPlxyXG5cdFx0XHRcdDxQcm9qZWN0cGFnZUZpdmUgaW1hZ2VzPXtpbWFnZXN9PjwvUHJvamVjdHBhZ2VGaXZlPlxyXG5cdFx0XHRcdDxQcm9qZWN0cGFnZVNpeCBkYXRhPXtpdGVtc30gbnA9e05leHRQcmV2fT48L1Byb2plY3RwYWdlU2l4PlxyXG5cdFx0XHRcdDwvPlxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuLy9cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHBhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gXCJyZWFjdC1wYXJhbGxheFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlc2hlZXRzL2J1bG1hL2VsZW1lbnRzL2NvbnRhaW5lci5zYXNzXCJcclxuaW1wb3J0IExpZ2h0Ym94IGZyb20gXCJ5ZXQtYW5vdGhlci1yZWFjdC1saWdodGJveFwiO1xyXG5pbXBvcnQgVGh1bWJuYWlscyBmcm9tIFwieWV0LWFub3RoZXItcmVhY3QtbGlnaHRib3gvcGx1Z2lucy90aHVtYm5haWxzXCI7XHJcbmltcG9ydCBcInlldC1hbm90aGVyLXJlYWN0LWxpZ2h0Ym94L3BsdWdpbnMvdGh1bWJuYWlscy5jc3NcIjtcclxuaW1wb3J0IFwieWV0LWFub3RoZXItcmVhY3QtbGlnaHRib3gvc3R5bGVzLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gUHJvamVjdHBhZ2VGaXZlKGltYWdlcykge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBsZXQgYXJyYXlJbWFnZSA9IFtdXHJcbiAgY29uc29sZS5sb2coaW1hZ2VzLmltYWdlcyk7XHJcbiAgaW1hZ2VzLmltYWdlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgbGV0IGl0ZW0gPSB7IHNyYzogYC9pbWFnZXMvaW1hZ2Vwcm9qZXQvJHtlbGVtZW50LmltYWdlfWB9XHJcbiAgICBhcnJheUltYWdlLnB1c2goaXRlbSlcclxuICB9KTtcclxuXHJcbiAgaWYoYXJyYXlJbWFnZS5sZW5ndGg+MCl7XHJcbiAgY29uc29sZS5sb2coYXJyYXlJbWFnZSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9aMXpJSkNLay5qcGVnXCIgc3RyZW5ndGg9ezgwMH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwiLCBkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCJ9fT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1jZW50ZXJlZFwiIHN0eWxlPXt7aGVpZ2h0OlwiOTAlXCIsd2lkdGg6XCI4MCVcIiwgcGFkZGluZ1RvcDpcIjUwcHhcIn19PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS10aGlyZFwiIHN0eWxlPXt7YmFja2dyb3VuZDpcIiMwMjExMURcIiwgcGFkZGluZzpcIjBcIiwgcGFkZGluZzpcIjBcIn19PlxyXG4gICAgICAgICAgICAgIHtpbWFnZXMuaW1hZ2VzWzBdID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzpcIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL2ltYWdlcHJvamV0L1wiICsgaW1hZ2VzLmltYWdlc1swXS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKSA6ICg8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCB3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiMTAwJVwifX0+PGltZyBzdHlsZT17e3dpZHRoOlwiNTAlXCJ9fSBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn0gYWx0PVwiXCIvPjwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS10aGlyZCBjb2x1bW5zIGlzLW11bHRpbGluZSBteC01XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1mdWxsIG15LTVcIiBzdHlsZT17e2JhY2tncm91bmQ6XCIjMDIxMTFEXCIsIHBhZGRpbmc6XCIwXCJ9fT4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7aW1hZ2VzLmltYWdlc1sxXSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOlwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL2ltYWdlcHJvamV0L1wiICsgaW1hZ2VzLmltYWdlc1sxXS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6ICg8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCB3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiMTAwJVwifX0+PGltZyBzdHlsZT17e3dpZHRoOlwiNTAlXCJ9fSBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn0gYWx0PVwiXCIvPjwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1mdWxsIG15LTVcIiBzdHlsZT17e2JhY2tncm91bmQ6XCIjMDIxMTFEXCIsIHBhZGRpbmc6XCIwXCJ9fT4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtpbWFnZXMuaW1hZ2VzWzJdID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzpcIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvaW1hZ2Vwcm9qZXQvXCIgKyBpbWFnZXMuaW1hZ2VzWzJdLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIHdpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT48aW1nIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19IHNyYz17XCIvemVuaXRoL2F1dHJlL25vSW1nLnBuZ1wifSBhbHQ9XCJcIi8+PC9kaXY+KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtb25lLXRoaXJkIGlzLW1vYmlsZVwiIHN0eWxlPXt7YmFja2dyb3VuZDpcIiMwMjExMURcIiwgcGFkZGluZzpcIjBcIn19PlxyXG4gICAgICAgICAgICAgIHtpbWFnZXMuaW1hZ2VzWzNdID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvaW1hZ2Vwcm9qZXQvXCIgKyBpbWFnZXMuaW1hZ2VzWzNdLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIHdpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT48aW1nIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19IHNyYz17XCIvemVuaXRoL2F1dHJlL25vSW1nLnBuZ1wifSBhbHQ9XCJcIi8+PC9kaXY+KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW1vYmlsZSBpcy1jZW50ZXJlZCBtdC01LWZ1bGxoZFwiIHN0eWxlPXt7cG9zaXRpb246IFwiYWJzb2x1dGVcIiwgYm90dG9tOlwiMjVweFwiLCB3aWR0aDpcIjEwMSVcIn19PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0T3Blbih0cnVlKX0gY2xhc3NOYW1lPVwiYnRuUyBjZW50ZXIgbGlnaHQgbGV0dGVyU3BhY2luZ00gbWItNiBtdC0wXCI+XHJcbiAgICAgICAgICAgICAgICBFTiBWT0lSICtcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgICAgIDxMaWdodGJveFxyXG4gICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgY2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgIHBsdWdpbnM9e1tUaHVtYm5haWxzXX1cclxuICAgICAgICAgICAgICBzbGlkZXM9e2FycmF5SW1hZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1BhcmFsbGF4PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cGFnZUZpdmU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gUHJvamVjdHBhZ2VGb3VyKHtwcmVjaSwgZGF0YTJ9KSB7XHJcblx0Y29uc29sZS5sb2cocHJlY2kpXHJcblx0aWYoZGF0YTIuZm9jdXMpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMvNld2ZW1tM0suanBlZylcIiwgaGVpZ2h0OiBcIjExMDBweFwifX0gY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlx0XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPScnc3R5bGU9e3sgaGVpZ2h0OiBcIjExMDBweFwifX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3dyYXBwZXIyJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXJDZW50ZXJBJz5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyZW50MjEgbWFyZ2luVG9wJz5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYXJnaW5Ub3AyJyA+XHJcblx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nbGlnaHQgbGV0dGVyU3BhY2luZ1MnPkZvY3VzPC9oMz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGlnaHQgY29udGFpbmVyQ2VudGVyQ2xpZW50IHRleHQtaDUnIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnfX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YTIuZm9jdXN9fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nIGJveENsaWVudCcgc3R5bGU9e3toZWlnaHQ6ICc4MDBweCcsIHdpZHRoOlwiNjAwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHRcdHtwcmVjaS5pbWFnZSA/ICg8aW1nIGNsYXNzTmFtZT0nIGNvbnRhaW4nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtcIi9pbWFnZXMvaW1hZ2Vwcm9qZXQvXCIgKyBwcmVjaS5pbWFnZX0gYWx0PVwiXCIvPikgOiAoPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgd2lkdGg6XCIxMDAlXCIsIGhlaWdodDpcIjEwMCVcIn19PjxpbWcgc3R5bGU9e3t3aWR0aDpcIjUwJVwifX0gc3JjPXtcIi96ZW5pdGgvYXV0cmUvbm9JbWcucG5nXCJ9IGFsdD1cIlwiLz48L2Rpdj4pfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHRcdFxyXG5cclxuXHJcblxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH19XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHBhZ2VGb3VyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0cGFnZU9uZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZDFcIiBhbHQ9XCJob21lcGFnZVwiPlxyXG5cclxuXHRcdFx0PHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eUJsdWVcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXIyXCI+XHJcblx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi96ZW5pdGgvaW1hZ2VzL2JJTzFyOUYucG5nXCIgYWx0PVwiTG9nb1wiIHdpZHRoPXsyMDB9IGNsYXNzTmFtZT1cImNlbnRlclwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlx0XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsaWVudHBhZ2VUZXh0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cIm1lZGl1bSBtYXJnaW5TdG9wIGNsaWVudERldGFpbFwiPntkYXRhLmRhdGEucHJvamV0fTwvaDE+XHJcblx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT1cImxpZ2h0IG1hcmdpblN0b3AgY2xpZW50RGV0YWlsXCI+e2RhdGEuZGF0YS5zZWN0ZXVyLnNlY3RldXJ9PC9oNj5cclxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLmNsaWVudCA/IDxwIGNsYXNzTmFtZT1cImxpZ2h0IG1hcmdpblN0b3AgY2xpZW50RGV0YWlsXCI+VU4gUFJPSkVUIFBPVVIgOiB7ZGF0YS5kYXRhLmNsaWVudC5ub21DbGllbnR9PC9wPiA6ICA8cCBjbGFzc05hbWU9XCJsaWdodCBtYXJnaW5TdG9wIGNsaWVudERldGFpbFwiPlVOIFBST0pFVCBQT1VSIDogTi9BPC9wPn1cclxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLmR1cmVlID8gPHAgY2xhc3NOYW1lPVwibGlnaHQgY2xpZW50RGV0YWlsXCI+RFVSw4lFIFBST0pFVCA6IHtkYXRhLmRhdGEuZHVyZWV9PC9wPiA6IDxwIGNsYXNzTmFtZT1cImxpZ2h0IGNsaWVudERldGFpbFwiPkRVUsOJRSBQUk9KRVQgOiBOL0E8L3A+fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayB0bz17YC9zZWFyY2hjYXQvJHtkYXRhLmRhdGEuY2F0ZWdvcmllWzBdLmlkfS8ke2RhdGEuZGF0YS5jYXRlZ29yaWVbMF0uY2F0ZWdvcmllfWB9PjxwIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmVcIiwgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSd9fSBjbGFzc05hbWU9XCJsaWdodCBjbGllbnREZXRhaWwyXCI+e2RhdGEuZGF0YS5jYXRlZ29yaWVbMF0uY2F0ZWdvcmllfTwvcD48L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PHAgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZVwifX0gY2xhc3NOYW1lPVwibGlnaHQgY2xpZW50RGV0YWlsMlwiPiAgIHwgICA8L3A+XHJcblx0XHRcdFx0XHRcdFx0e2RhdGEuZGF0YS5jYXRlZ29yaWVbMV0gJiYgPExpbmsgdG89e2Avc2VhcmNoY2F0LyR7ZGF0YS5kYXRhLmNhdGVnb3JpZVsxXS5pZH0vJHtkYXRhLmRhdGEuY2F0ZWdvcmllWzBdLmNhdGVnb3JpZX1gfSA+PHAgY2xhc3NOYW1lPVwibGlnaHQgY2xpZW50RGV0YWlsMlwiIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmVcIiwgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSd9fT57ZGF0YS5kYXRhLmNhdGVnb3JpZVsxXS5jYXRlZ29yaWV9PC9wPjwvTGluaz59XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXIzXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PGg0IHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnfX0gY2xhc3NOYW1lPVwibGlnaHQgbGV0dGVyU3BhY2luZ1MgIGRpc2NvdmVyQ2xpZW50MlwiPntkYXRhLmRhdGEubWlzc2lvbn08L2g0PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibGlnaHQgIGRpc2NvdmVyQ2xpZW50XCI+RMOJQ09VVlJFWjwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmVDbGllbnRcIiA+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RwYWdlT25lO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIFByb2plY3RwYWdlU2l4KHtkYXRhLCBucH0pIHtcclxuXHRpZihucFswXSl7XHJcblx0XHRpZihucFswXVswXSA9PSAnbnVsbCcpXHJcblx0XHRcdG5wWzBdWzBdID0gZmFsc2U7XHJcblx0XHRpZihucFswXVsxXSA9PSAnbnVsbCcpXHJcblx0XHRcdG5wWzFdWzBdID0gZmFsc2U7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy82V3ZlbW0zSy5qcGVnKVwifX0gY2xhc3NOYW1lPSdkZW1pYmxvY09wYWNpdHknPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyQ2VudGVyIG1hcmdpblRvcFMnIHN0eWxlPXt7bWFyZ2luVG9wOlwiMFwifX0+XHJcblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J21lZGl1bSBjZW50ZXJUZXh0Jz5VTiBUw4lNT0lHTkFHRTwvaDQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsaWdodCBjZW50ZXJUZXh0JyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLnRlbW9pZ25hZ2V9fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPSdkZW1pYmxvY0NsaWVudCc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGVtaWJsb2NPcGFjaXR5Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmVudENsaWVudE5leHRQcmV2Jz5cclxuXHJcblx0XHRcdFx0XHRcdFx0e25wWzFdWzBdICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nQ2xpZW50TmV4dFByZXYxJyBvbkNsaWNrPXsoKT0+e2xvY2F0aW9uLmhyZWYgPSBcIi9wcm9qZXQvXCIrIG5wWzFdWzBdLmlkfX0gc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9J2xpZ2h0IHJpZ2h0VGV4dCBtYXJnaW5Ub3BTJz5QUk9KRVQgUFLDiUPDiURFTlQ8L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPSdyaWdodFRleHQnPntucFsxXVswXS5wcm9qZXR9PC9oNT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT0nbGlnaHQgcmlnaHRUZXh0Jz57bnBbMV1bMF0ubWlzc2lvbn08L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+fVxyXG5cclxuXHRcdFx0XHRcdFx0XHR7bnBbMF1bMF0gJiYgPGRpdiBjbGFzc05hbWU9J0NsaWVudE5leHRQcmV2Micgb25DbGljaz17KCk9Pntsb2NhdGlvbi5ocmVmID0gXCIvcHJvamV0L1wiKyBucFswXVswXS5pZH19IHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPSdsaWdodCBsZWZ0VGV4dCBtYXJnaW5Ub3BTJz5QUk9KRVQgU1VJVkFOVDwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9J2xlZnRUZXh0Jz57bnBbMF1bMF0ucHJvamV0fTwvaDU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9J2xpZ2h0IGxlZnRUZXh0Jz57bnBbMF1bMF0ubWlzc2lvbn08L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+fVxyXG5cdFx0XHRcdFx0XHRcdHsvKiA8YSBocmVmPXtcIi9jbGllbnQvXCIrbnBbMV1bMF0uaWR9PiAqL31cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RwYWdlU2l4OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gUHJvamVjdHBhZ2VUaHJlZShkYXRhKSB7XHJcblx0Y29uc29sZS5sb2coZGF0YSlcclxuXHRpZihkYXRhLmxlbmd0aCA+IDApe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlckRhcmtCbHVlQ2xpZW50JyBzdHlsZT17e2hlaWdodDpcIjgwMHB4XCIsIHdpZHRoOlwiMTAwJVwifX0+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz17XCIvaW1hZ2VzL2ltYWdlcHJvamV0L1wiICsgZGF0YS5kYXRhLmltYWdlfSBhbHQ9XCJcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiB9XHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RwYWdlVGhyZWU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0cGFnZVR3byhkYXRhKSB7XHJcblx0aWYoZGF0YS5kYXRhLmRlbWFuZGUgfHwgZGF0YS5kYXRhLmRlZmkgfHwgZGF0YS5kYXRhLmFjdGlvbil7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzLzZXdmVtbTNLLmpwZWcpXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIn19IGNsYXNzTmFtZT0nZGVtaWJsb2NDbGllbnQnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbHVtbnMnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbnMgaXMtY2VudGVyZWQgaXMtMTEgaXMtb2Zmc2V0LTEnPlxyXG5cdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuZGVtYW5kZSAmJlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gaXMtY2VudGVyZWQgaXMtNCcgc3R5bGU9e3ttYXJnaW5Ub3A6XCI0OHB4XCIsIG1hcmdpblJpZ2h0OlwiYXV0b1wiLCBtYXJnaW5MZWZ0OlwiYXV0b1wifX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdsaWdodCc+VU5FIERFTUFOREU8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOlwiMTA1JVwifX0gY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQgcHgtNidkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLmRhdGEuZGVtYW5kZX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PiBcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuZGVmaSAmJlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gaXMtY2VudGVyZWQgaXMtNCcgc3R5bGU9e3ttYXJnaW5Ub3A6XCI0OHB4XCIsIG1hcmdpblJpZ2h0OlwiYXV0b1wiLCBtYXJnaW5MZWZ0OlwiYXV0b1wifX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdsaWdodCc+VU4gRMOJRkk8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOlwiMTA1JVwifX0gY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQgY29sdW1ucyBpcy12Y2VudGVyZWQgaXMtY2VudGVyZWQgcHgtNicgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YS5kYXRhLmRlZml9fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuYWN0aW9uICYmXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbHVtbiBpcy1jZW50ZXJlZCBpcy00JyAgc3R5bGU9e3ttYXJnaW5Ub3A6XCI0OHB4XCIsIG1hcmdpblJpZ2h0OlwiYXV0b1wiLCBtYXJnaW5MZWZ0OlwiYXV0b1wifX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdsaWdodCc+VU5FIEFDVElPTjwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDUlXCJ9fSBjbGFzc05hbWU9J2xpZ2h0IGNvbnRhaW5lckNlbnRlckNsaWVudCBjb2x1bW5zIGlzLXZjZW50ZXJlZCBpcy1jZW50ZXJlZCBweC02JyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLmRhdGEuYWN0aW9ufX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuXHR9XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHBhZ2VUd287XHJcbiIsImltcG9ydCBTZWFyY2hQYWdlT25lMiBmcm9tIFwiLi9fU2VhcmNoUGFnZU9uZTJcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9fbmF2YmFyJztcclxuaW1wb3J0IFJzQnV0dG9uIGZyb20gJy4uL19yc0J1dHRvbic7XHJcbmltcG9ydCBMaW5lc1RvcCBmcm9tICcuLi9fbGluZXNUb3AnO1xyXG5pbXBvcnQgTGluZXNCb3R0b20gZnJvbSAnLi4vX2xpbmVzQm90dG9tJztcclxuaW1wb3J0IFNlYXJjaFBhZ2VUd28yIGZyb20gXCIuL19TZWFyY2hQYWdlVHdvMlwiO1xyXG5pbXBvcnQgTWluaUZvb3RlciBmcm9tIFwiLi4vSG9tZXBhZ2UvX21pbmlGb290ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIFNlYXJjaFBhZ2UyKCkge1xyXG5cdGNvbnN0IHsgaW5mbyB9ID0gdXNlUGFyYW1zKCk7XHJcblx0Y29uc3QgeyBuYW1lIH0gPSB1c2VQYXJhbXMoKTtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZEltZywgc2V0SXNMb2FkZWRJbWddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZE5leHRQcmV2LCBzZXRJc0xvYWRlZE5leHRQcmV2XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNJbWdSZWFkeSwgc2V0SW1nUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbcHJlY2ksIHNldFByZWNpXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbc2Vjb25kLCBzZXRTZWNvbmRdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbTmV4dFByZXYsIHNldE5leHRQcmV2XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuXHRcdFx0ZmV0Y2goYC9nZXRzZWFyY2hjYXQvJHtpbmZvfWAse21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0XHQudGhlbihcclxuXHRcdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0c2V0SXRlbXMocmVzdWx0KTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cdFx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdH0sIFtdKVx0XHRcclxuXHJcblxyXG5cclxuXHRpZiAoZXJyb3IpIHtcclxuXHRcdCByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG5cdCAgfSBlbHNlIGlmICghaXNMb2FkZWQgKSB7XHJcblx0XHRyZXR1cm4gPGRpdj5kYmZnYmZnLi4uPC9kaXY+O1xyXG5cdCAgfSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICggIFxyXG5cdFx0PD5cclxuXHRcdDxOYXZiYXI+PC9OYXZiYXI+XHJcblx0XHQ8UnNCdXR0b24+PC9Sc0J1dHRvbj5cclxuXHRcdDxMaW5lc1RvcD48L0xpbmVzVG9wPlxyXG5cdFx0PExpbmVzQm90dG9tPjwvTGluZXNCb3R0b20+XHJcblx0XHRcclxuXHRcdDxTZWFyY2hQYWdlT25lMiBkYXRhID0ge25hbWV9PjwvU2VhcmNoUGFnZU9uZTI+XHJcblx0XHQ8U2VhcmNoUGFnZVR3bzIgZGF0YT17aXRlbXN9PjwvU2VhcmNoUGFnZVR3bzI+XHJcblx0XHR7LyogPFdvcmtwYWdlVGhyZWU+PC9Xb3JrcGFnZVRocmVlPlxyXG5cdFx0PFdvcmtwYWdlRm91cj48L1dvcmtwYWdlRm91cj5cclxuXHRcdDxXb3JrcGFnZUZpdmU+PC9Xb3JrcGFnZUZpdmU+Ki99XHJcblx0XHQ8TWluaUZvb3Rlcj48L01pbmlGb290ZXI+IFxyXG5cdFx0PC8+XHJcblx0ICk7XHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlMjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBTZWFyY2hQYWdlT25lMihkYXRhKSB7XHJcblx0Y29uc29sZS5sb2coZGF0YSlcclxuXHRBT1MuaW5pdCgpXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZDFcIiBhbHQ9XCJob21lcGFnZVwiPlxyXG5cclxuXHRcdFx0PHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHQ8L3ZpZGVvPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHlCbHVlXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyMlwiPlxyXG5cdFx0XHRcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayB0bz1cIi9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL3plbml0aC9pbWFnZXMvYklPMXI5Ri5wbmdcIiBhbHQ9XCJMb2dvXCIgd2lkdGg9ezIwMH0gY2xhc3NOYW1lPVwiY2VudGVyXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHRcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndvcmtwYWdlVGV4dFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJtZWRpdW1cIj5SRVNVTFRBVCBQT1VSIFwie2RhdGEuZGF0YX1cIjwvaDE+XHJcblx0XHRcdFx0XHRcdFx0ey8qIDxwIGNsYXNzTmFtZT1cImxpZ2h0XCI+TE9HTy4gV0VCIERFU0lHTi4gQ0FURUdPUklFPC9wPiAqL31cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlT25lMjtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaFBhZ2VUd28yKGRhdGEpIHtcclxuXHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdGxldCBib3ggPSBbXVxyXG5cdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmRhdGEubGVuZ3RoOyBpbmRleCsrKSB7XHJcblx0bGV0IGl0ZW0gPSBudWxsO1xyXG5cdFx0aWYoZGF0YS5kYXRhW2luZGV4XVswXSA9PSBcInByb2pldFwiKXtcclxuXHRcdFx0aXRlbSA9ICg8YSBrZXk9e2luZGV4fSBocmVmPXtcIi9wcm9qZXQvXCIgKyBkYXRhLmRhdGFbaW5kZXhdLmlkfT48ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjxwIGNsYXNzTmFtZT1cInRleHREZWNvXCI+e2RhdGEuZGF0YVtpbmRleF0ubWlzc2lvbn08L3A+PGltZyBzcmM9e1wiL2ltYWdlcy9pbWFnZXByb2pldC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaGVhZGVyfSBhbHQ9XCJcIiBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCJhdXRvXCJ9fS8+PC9kaXY+PC9hPilcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRpdGVtID0gKDxhIGtleT17aW5kZXh9IGhyZWY9e1wiL2NsaWVudC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaWR9PjxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PHAgY2xhc3NOYW1lPVwidGV4dERlY29cIj57ZGF0YS5kYXRhW2luZGV4XS5taXNzaW9ufTwvcD48aW1nIHNyYz17XCIvaW1hZ2VzL2NsaWVudC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaGVhZGVyfSBhbHQ9XCJcIiBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCJhdXRvXCJ9fS8+PC9kaXY+PC9hPilcclxuXHRcdH1cclxuXHRcdGJveC5wdXNoKGl0ZW0pXHJcblx0XHRcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Plx0XHRcdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiIGFsdD1cImFjdGlvblwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHlCbHVlXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblxyXG5cclxuXHRcdFx0XHR7Ym94fVxyXG5cclxuICAgICAgICBcdFx0PC9kaXY+XHJcbiAgICAgIFx0XHQ8L2Rpdj5cclxuICAgIFx0XHQ8L2Rpdj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlVHdvMjsiLCJpbXBvcnQgU2VhcmNoUGFnZU9uZSBmcm9tIFwiLi9fU2VhcmNoUGFnZU9uZVwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL19uYXZiYXInO1xyXG5pbXBvcnQgUnNCdXR0b24gZnJvbSAnLi4vX3JzQnV0dG9uJztcclxuaW1wb3J0IExpbmVzVG9wIGZyb20gJy4uL19saW5lc1RvcCc7XHJcbmltcG9ydCBMaW5lc0JvdHRvbSBmcm9tICcuLi9fbGluZXNCb3R0b20nO1xyXG5pbXBvcnQgU2VhcmNoUGFnZVR3byBmcm9tIFwiLi9fU2VhcmNoUGFnZVR3b1wiO1xyXG5pbXBvcnQgTWluaUZvb3RlciBmcm9tIFwiLi4vSG9tZXBhZ2UvX21pbmlGb290ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIFNlYXJjaFBhZ2UoKSB7XHJcblx0Y29uc3QgeyBpbmZvIH0gPSB1c2VQYXJhbXMoKTtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZEltZywgc2V0SXNMb2FkZWRJbWddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZE5leHRQcmV2LCBzZXRJc0xvYWRlZE5leHRQcmV2XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNJbWdSZWFkeSwgc2V0SW1nUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbcHJlY2ksIHNldFByZWNpXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbc2Vjb25kLCBzZXRTZWNvbmRdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbTmV4dFByZXYsIHNldE5leHRQcmV2XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhpbmZvKVxyXG5cdFx0XHRmZXRjaChgL2dldFNlYXJjaC8ke2luZm99YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRzZXRJdGVtcyhyZXN1bHQpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0fSwgW10pXHRcdFxyXG5cclxuXHJcblxyXG5cdGlmIChlcnJvcikge1xyXG5cdFx0IHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcblx0ICB9IGVsc2UgaWYgKCFpc0xvYWRlZCApIHtcclxuXHRcdHJldHVybiA8ZGl2PmRiZmdiZmcuLi48L2Rpdj47XHJcblx0ICB9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gKCAgXHJcblx0XHQ8PlxyXG5cdFx0PE5hdmJhcj48L05hdmJhcj5cclxuXHRcdDxSc0J1dHRvbj48L1JzQnV0dG9uPlxyXG5cdFx0PExpbmVzVG9wPjwvTGluZXNUb3A+XHJcblx0XHQ8TGluZXNCb3R0b20+PC9MaW5lc0JvdHRvbT5cclxuXHRcdFxyXG5cdFx0PFNlYXJjaFBhZ2VPbmUgZGF0YSA9IHtpbmZvfT48L1NlYXJjaFBhZ2VPbmU+XHJcblx0XHQ8U2VhcmNoUGFnZVR3byBkYXRhPXtpdGVtc30+PC9TZWFyY2hQYWdlVHdvPlxyXG5cdFx0ey8qIDxXb3JrcGFnZVRocmVlPjwvV29ya3BhZ2VUaHJlZT5cclxuXHRcdDxXb3JrcGFnZUZvdXI+PC9Xb3JrcGFnZUZvdXI+XHJcblx0XHQ8V29ya3BhZ2VGaXZlPjwvV29ya3BhZ2VGaXZlPiovfVxyXG5cdFx0PE1pbmlGb290ZXI+PC9NaW5pRm9vdGVyPiBcclxuXHRcdDwvPlxyXG5cdCApO1xyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFnZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBTZWFyY2hQYWdlT25lKGRhdGEpIHtcclxuXHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdEFPUy5pbml0KClcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kMVwiIGFsdD1cImhvbWVwYWdlXCI+XHJcblxyXG5cdFx0XHQ8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuXHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZy5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcblx0XHRcdDwvdmlkZW8+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eUJsdWVcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXIyXCI+XHJcblx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvemVuaXRoL2ltYWdlcy9iSU8xcjlGLnBuZ1wiIGFsdD1cIkxvZ29cIiB3aWR0aD17MjAwfSBjbGFzc05hbWU9XCJjZW50ZXJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cdFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid29ya3BhZ2VUZXh0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cIm1lZGl1bVwiPlJFU1VMVEFUIFBPVVIgXCJ7ZGF0YS5kYXRhfVwiPC9oMT5cclxuXHRcdFx0XHRcdFx0XHR7LyogPHAgY2xhc3NOYW1lPVwibGlnaHRcIj5MT0dPLiBXRUIgREVTSUdOLiBDQVRFR09SSUU8L3A+ICovfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFBhZ2VPbmU7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBTZWFyY2hQYWdlVHdvKGRhdGEpIHtcclxuXHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdGxldCBib3ggPSBbXVxyXG5cdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmRhdGEubGVuZ3RoOyBpbmRleCsrKSB7XHJcblx0bGV0IGl0ZW0gPSBudWxsO1xyXG5cdFx0aWYoZGF0YS5kYXRhW2luZGV4XVswXSA9PSBcInByb2pldFwiKXtcclxuXHRcdFx0aXRlbSA9ICg8YSBrZXk9e2luZGV4fSBocmVmPXtcIi9wcm9qZXQvXCIgKyBkYXRhLmRhdGFbaW5kZXhdLmlkfT48ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjxwIGNsYXNzTmFtZT1cInRleHREZWNvXCI+e2RhdGEuZGF0YVtpbmRleF0ubWlzc2lvbn08L3A+PGltZyBzcmM9e1wiL2ltYWdlcy9pbWFnZXByb2pldC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaGVhZGVyfSBhbHQ9XCJcIiBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCJhdXRvXCJ9fS8+PC9kaXY+PC9hPilcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRpdGVtID0gKDxhIGtleT17aW5kZXh9IGhyZWY9e1wiL2NsaWVudC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaWR9PjxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PHAgY2xhc3NOYW1lPVwidGV4dERlY29cIj57ZGF0YS5kYXRhW2luZGV4XS5taXNzaW9ufTwvcD48aW1nIHNyYz17XCIvaW1hZ2VzL2NsaWVudC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaGVhZGVyfSBhbHQ9XCJcIiBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCJhdXRvXCJ9fS8+PC9kaXY+PC9hPilcclxuXHRcdH1cclxuXHRcdGJveC5wdXNoKGl0ZW0pXHJcblx0XHRcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Plx0XHRcdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiIGFsdD1cImFjdGlvblwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHlCbHVlXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblxyXG5cclxuXHRcdFx0XHR7Ym94fVxyXG5cclxuICAgICAgICBcdFx0PC9kaXY+XHJcbiAgICAgIFx0XHQ8L2Rpdj5cclxuICAgIFx0XHQ8L2Rpdj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlVHdvOyIsImltcG9ydCBXb3JrcGFnZUNsaWVudE9uZSBmcm9tICcuL193b3JrcGFnZUNsaWVudE9uZSc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vX25hdmJhcic7XHJcbmltcG9ydCBSc0J1dHRvbiBmcm9tICcuLi9fcnNCdXR0b24nO1xyXG5pbXBvcnQgTGluZXNUb3AgZnJvbSAnLi4vX2xpbmVzVG9wJztcclxuaW1wb3J0IExpbmVzQm90dG9tIGZyb20gJy4uL19saW5lc0JvdHRvbSc7XHJcbmltcG9ydCBXb3JrcGFnZUNsaWVudFR3byBmcm9tICcuL193b3JrcGFnZUNsaWVudFR3byc7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gV29ya3BhZ2VDbGllbnQoKSB7XHJcblx0Y29uc3QgeyBuYnIgfSA9IHVzZVBhcmFtcygpO1xyXG5cdGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzQ291bnRMb2FkZWQsIHNldElzQ291bnRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0NhdExvYWRlZCwgc2V0SXNDYXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZE5leHRQcmV2LCBzZXRJc0xvYWRlZE5leHRQcmV2XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNJbWdSZWFkeSwgc2V0SW1nUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtjYXQsIHNldENhdF0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShbXSk7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHJcblx0XHRmZXRjaChgL2dldHRBbGxDbGllbnQvJHtuYnJ9YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0LnRoZW4oXHJcblx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0c2V0SXRlbXMocmVzdWx0KTtcclxuXHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH1cclxuXHRcdClcclxuXHJcblx0XHRmZXRjaChgL2dldENvdW50L2NsaWVudGAse21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdC50aGVuKFxyXG5cdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdHNldENvdW50KHJlc3VsdCk7XHJcblx0XHRcdHNldElzQ291bnRMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRzZXRJc0NvdW50TG9hZGVkKHRydWUpO1xyXG5cdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fVxyXG5cdFx0KVxyXG5cdFx0ZmV0Y2goYC9hcGkvY2F0ZWdvcmllc2Ase21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdC50aGVuKFxyXG5cdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdHNldENhdChyZXN1bHQpO1xyXG5cdFx0XHRzZXRJc0NhdExvYWRlZCh0cnVlKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdHNldElzQ291bnRMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9XHJcblx0XHQpXHJcblx0fSwgW10pXHJcblxyXG5cdGlmIChlcnJvcikge1xyXG5cdFx0IHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcblx0ICB9IGVsc2UgaWYgKCFpc0xvYWRlZCApIHtcclxuXHRcdHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcblx0ICB9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gKCAgXHJcblx0XHQ8PlxyXG5cdFx0PE5hdmJhcj48L05hdmJhcj5cclxuXHRcdDxSc0J1dHRvbj48L1JzQnV0dG9uPlxyXG5cdFx0PExpbmVzVG9wPjwvTGluZXNUb3A+XHJcblx0XHQ8TGluZXNCb3R0b20+PC9MaW5lc0JvdHRvbT5cclxuXHRcdFxyXG5cdFx0PFdvcmtwYWdlQ2xpZW50T25lIGNhdD17Y2F0fT48L1dvcmtwYWdlQ2xpZW50T25lPlxyXG5cdFx0PFdvcmtwYWdlQ2xpZW50VHdvIGRhdGE9e2l0ZW1zfSBwYWdlPXtuYnJ9IGNvdW50PXtjb3VudH0+PC9Xb3JrcGFnZUNsaWVudFR3bz5cclxuXHRcdHsvKiA8V29ya3BhZ2VUaHJlZT48L1dvcmtwYWdlVGhyZWU+XHJcblx0XHQ8V29ya3BhZ2VGb3VyPjwvV29ya3BhZ2VGb3VyPlxyXG5cdFx0PFdvcmtwYWdlRml2ZT48L1dvcmtwYWdlRml2ZT5cclxuXHRcdDxNaW5pRm9vdGVyPjwvTWluaUZvb3Rlcj4gKi99XHJcblx0XHQ8Lz5cclxuXHQgKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtwYWdlQ2xpZW50OyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBT1MgZnJvbSBcImFvc1wiO1xyXG5pbXBvcnQgXCJhb3MvZGlzdC9hb3MuY3NzXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBNZW51LCBNZW51SXRlbSwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBBcnJvd0ZvcndhcmRJb3NTaGFycEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRJb3NTaGFycCc7XHJcbmltcG9ydCBNdWlBY2NvcmRpb24sIHsgQWNjb3JkaW9uUHJvcHMgfSBmcm9tICdAbXVpL21hdGVyaWFsL0FjY29yZGlvbic7XHJcbmltcG9ydCBNdWlBY2NvcmRpb25TdW1tYXJ5LCB7XHJcbiAgQWNjb3JkaW9uU3VtbWFyeVByb3BzLFxyXG59IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWNjb3JkaW9uU3VtbWFyeSc7XHJcbmltcG9ydCBNdWlBY2NvcmRpb25EZXRhaWxzIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWNjb3JkaW9uRGV0YWlscyc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcbmNvbnN0IEFjY29yZGlvbiA9IHN0eWxlZCgocHJvcHMpID0+IChcclxuICA8TXVpQWNjb3JkaW9uIGRpc2FibGVHdXR0ZXJzIGVsZXZhdGlvbj17MH0gc3F1YXJlIHsuLi5wcm9wc30gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBtYXhXaWR0aDogXCIxODVweFwiLFxyXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLDApXCIsXHJcbiAgY29sb3I6IFwid2hpdGVcIixcclxufSkpO1xyXG5cclxuY29uc3QgQWNjb3JkaW9uU3VtbWFyeSA9IHN0eWxlZCgocHJvcHMpID0+IChcclxuICA8TXVpQWNjb3JkaW9uU3VtbWFyeVxyXG4gICAgZXhwYW5kSWNvbj17PEFycm93Rm9yd2FyZElvc1NoYXJwSWNvbiBzeD17eyBmb250U2l6ZTogXCIwLjlyZW1cIiB9fSAvPn1cclxuXHR7Li4ucHJvcHN9XHJcbiAgLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gIGJhY2tncm91bmRDb2xvcjpcclxuICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJkYXJsXCJcclxuICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgLjA1KVwiXHJcbiAgICAgIDogXCJyZ2JhKDAsIDAsIDAsIC4wMylcIixcclxuICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gIFwiJiAuTXVpQWNjb3JkaW9uU3VtbWFyeS1leHBhbmRJY29uV3JhcHBlci5NdWktZXhwYW5kZWRcIjoge1xyXG4gICAgdHJhbnNmb3JtOiBcInJvdGF0ZSg5MGRlZylcIixcclxuICB9LFxyXG4gIFwiJiAuTXVpQWNjb3JkaW9uU3VtbWFyeS1jb250ZW50XCI6IHtcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgQWNjb3JkaW9uRGV0YWlscyA9IHN0eWxlZChNdWlBY2NvcmRpb25EZXRhaWxzKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgcGFkZGluZ1RvcDogMCxcclxuICBtYXJnaW5Ub3A6IDAsXHJcbiAgbWF4SGVpZ2h0OiBcIjE1MHB4XCIsXHJcbiAgb3ZlcmZsb3c6IFwic2Nyb2xsXCIsXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIFdvcmtwYWdlQ2xpZW50T25lKGNhdCkge1xyXG5cdGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gUmVhY3QudXNlU3RhdGUoXCJwYW5lbDFcIik7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChwYW5lbCkgPT4gKGV2ZW50LCBuZXdFeHBhbmRlZCkgPT4ge1xyXG5cdCAgc2V0RXhwYW5kZWQobmV3RXhwYW5kZWQgPyBwYW5lbCA6IGZhbHNlKTtcclxuXHR9O1xyXG4gIFxyXG5cdGNvbnN0IFt3b3Jkcywgc2V0V29yZHNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGxldCBjYXRlZ29yeSA9IGNhdC5jYXQ7XHJcblx0bGV0IG1lbnUgPSBbXTtcclxuXHRsZXQgcmFuZG9tV29yZCA9IFtcclxuXHQgIFwiUsOJQUNUSVZJVMOJXCIsXHJcblx0ICBcIlBST1hJTUlUw4lcIixcclxuXHQgIFwiUEFTU0lPTlwiLFxyXG5cdCAgXCJTVFJBVMOJR0lFXCIsXHJcblx0ICBcIkVWRU5UXCIsXHJcblx0ICBcIkNPTlNFSUxcIixcclxuXHQgIFwiQ09NTVVOSUNBVElPTlwiLFxyXG5cdCAgXCJSw4pWRVJcIixcclxuXHQgIFwiQU1CSVRJT05cIixcclxuXHQgIFwiSU1BR0lOQVRJT05cIixcclxuXHQgIFwiYWdpclwiLFxyXG5cdCAgXCJzJ2FkYXB0ZXJcIixcclxuXHQgIFwiYW50aWNpcGVyXCIsXHJcblx0ICBcImF1dG9ub21pZVwiLFxyXG5cdCAgXCJjcm9pc3NhbmNlXCIsXHJcblx0ICBcImTDqWZpXCIsXHJcblx0ICBcInBsYW5pZmllclwiLFxyXG5cdCAgXCJwb3NpdGl2ZXJcIixcclxuXHQgIFwiZGlzcG9uaWJpbGl0w6lcIixcclxuXHQgIFwiZHluYW1pc21lXCIsXHJcblx0ICBcIsOpY291dGVcIixcclxuXHQgIFwic2VydmljZVwiLFxyXG5cdCAgXCJwcsOpdmlzaW9uXCIsXHJcblx0ICBcInTDqW5hY2l0w6lcIixcclxuXHQgIFwicXVhbGl0w6lcIixcclxuXHQgIFwibW9iaWxpc2VyXCIsXHJcblx0ICBcIm7DqWdvY2llclwiLFxyXG5cdCAgXCJvYmplY3RpZnNcIixcclxuXHQgIFwib3B0aW1pc2VyXCIsXHJcblx0ICBcImNoYWxsZW5nZVwiLFxyXG5cdCAgXCJyw6l1c3NpclwiLFxyXG5cdCAgXCJleGNlbGxlbmNlXCIsXHJcblx0ICBcInLDqWFsaXNlclwiLFxyXG5cdCAgXCJyw6lzdWx0YXRzXCIsXHJcblx0ICBcImTDqXZlbG9wcGVyXCIsXHJcblx0ICBcInNhdm9pcmZhaXJlXCIsXHJcblx0ICBcImRpYWxvZ3VlXCIsXHJcblx0ICBcInByw6l2b2lyXCIsXHJcblx0ICBcInN5bmVyZ2llXCIsXHJcblx0ICBcInByb2pldFwiLFxyXG5cdCAgXCJpbm5vdmF0aW9uXCIsXHJcblx0ICBcIm1vdGl2YXRpb25cIl07XHJcbiAgXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHQgIGZ1bmN0aW9uIGdldFdvcmQoKSB7XHJcblx0XHRsZXQgd29yZCA9IHJhbmRvbVdvcmRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZG9tV29yZC5sZW5ndGgpXTtcclxuXHRcdHJhbmRvbVdvcmQuc3BsaWNlKHJhbmRvbVdvcmQuaW5kZXhPZih3b3JkKSk7XHJcblx0XHRyZXR1cm4gd29yZDtcclxuXHQgIH1cclxuICBcclxuXHQgIGxldCB3b3JkMSA9IGdldFdvcmQoKTtcclxuXHQgIGxldCB3b3JkMiA9IGdldFdvcmQoKTtcclxuXHQgIHNldFdvcmRzKFt3b3JkMSwgd29yZDJdKTtcclxuXHR9LCBbXSk7XHJcblx0QU9TLmluaXQoKTtcclxuXHRjYXRlZ29yeS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcblx0ICBsZXQgaXRlbSA9IChcclxuXHRcdCAgPGEga2V5PXtlbGVtZW50LmlkfSBzdHlsZT17e3RleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwid2hpdGVcIn19IGhyZWY9e2Avc2VhcmNoY2F0LyR7ZWxlbWVudC5pZH0vJHtlbGVtZW50LmNhdGVnb3JpZX1gfT5cclxuXHRcdFx0ICA8cFxyXG5cdFx0XHQgIFxyXG5cdFx0XHQgIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwid2hpdGVcIn19XHJcblx0XHRcdCAgY2xhc3NOYW1lPVwibGlnaHRcIlxyXG5cdFx0ICA+XHJcblx0XHRcdCAge2VsZW1lbnQuY2F0ZWdvcmllfVxyXG5cdFx0ICA8L3A+XHJcblx0XHQ8L2E+XHJcbiAgXHJcblx0ICApO1xyXG5cdCAgbWVudS5wdXNoKGl0ZW0pO1xyXG5cdH0pO1xyXG5cdGlmICh3b3Jkcy5sZW5ndGggPiAwKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0ICA8PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQxXCIgYWx0PVwiaG9tZXBhZ2VcIj5cclxuXHRcdFx0ICA8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuXHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZy5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcblx0XHRcdCAgPC92aWRlbz5cclxuXHRcclxuXHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHlCbHVlXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXIyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0ICA8TGluayB0bz1cIi9cIj5cclxuXHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHQgIHNyYz1cIi96ZW5pdGgvaW1hZ2VzL2JJTzFyOUYucG5nXCJcclxuXHRcdFx0XHRcdFx0ICBhbHQ9XCJMb2dvXCJcclxuXHRcdFx0XHRcdFx0ICB3aWR0aD17MjAwfVxyXG5cdFx0XHRcdFx0XHQgIGNsYXNzTmFtZT1cImNlbnRlclwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQgIDwvTGluaz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3b3JrcGFnZVRleHRcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdCAgPGgxIGNsYXNzTmFtZT1cIm1lZGl1bVwiPlPDiUzDiUNUSU9OIERFIENMSUVOVDwvaDE+XHJcblx0XHRcdFx0XHQgIDxkaXZcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29sdW1uc1wiXHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IGZsb2F0OiBcInJpZ2h0XCIsIG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9fVxyXG5cdFx0XHRcdFx0ICA+XHJcblx0XHRcdFx0XHRcdDxwIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIgfX0gY2xhc3NOYW1lPVwibGlnaHRcIj5cclxuXHRcdFx0XHRcdFx0ICB7d29yZHNbMF19IC4ge3dvcmRzWzFdfSAue1wiIFwifVxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdDxBY2NvcmRpb25cclxuXHRcdFx0XHRcdFx0ICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKFwicGFuZWwxXCIpfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdCAgPEFjY29yZGlvblN1bW1hcnlcclxuXHRcdFx0XHRcdFx0XHRhcmlhLWNvbnRyb2xzPVwicGFuZWwxZC1jb250ZW50XCJcclxuXHRcdFx0XHRcdFx0XHRpZD1cInBhbmVsMWQtaGVhZGVyXCJcclxuXHRcdFx0XHRcdFx0ICA+XHJcblx0XHRcdFx0XHRcdFx0PHAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjVweFwiIH19PiZuYnNwO0NBVMOJR09SSUU8L3A+XHJcblx0XHRcdFx0XHRcdCAgPC9BY2NvcmRpb25TdW1tYXJ5PlxyXG5cdFx0XHRcdFx0XHQgIDxBY2NvcmRpb25EZXRhaWxzPnttZW51fTwvQWNjb3JkaW9uRGV0YWlscz5cclxuXHRcdFx0XHRcdFx0PC9BY2NvcmRpb24+XHJcblx0XHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQgIDwvPlxyXG5cdFx0KTtcclxuXHQgIH1cclxuXHR9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JrcGFnZUNsaWVudE9uZTtcclxuXHJcblxyXG5cclxuIiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tIFwicmVhY3QtcGFyYWxsYXhcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ3JjLXBhZ2luYXRpb24nO1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlc2hlZXRzL2J1bG1hL2dyaWQvY29sdW1ucy5zYXNzJztcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXNoZWV0cy9idWxtYS9oZWxwZXJzL3NwYWNpbmcuc2Fzcyc7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzaGVldHMvcGFnaW5hdGlvbi5sZXNzJyBcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBXb3JrcGFnZUNsaWVudFR3byh7ZGF0YSwgcGFnZSwgY291bnR9KSB7XHJcbiAgY29uc29sZS5sb2coZGF0YSlcclxuICBsZXQgcGFnZU5iciA9IE1hdGguY2VpbChjb3VudCAvIDIwKVxyXG4gIGxldCBuYnIgPSBwYXJzZUludChwYWdlKVxyXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKHBhcmFtcykge1xyXG4gICAgZG9jdW1lbnQubG9jYXRpb24gPSBgL2NsaWVudHMvJHtwYXJhbXN9YFxyXG4gIH1cclxuXHJcbiAgbGV0IGJveCA9IFtdO1xyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBsZXQgaXRlbSA9IChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNvbHVtbiBjb2x1bW5zIGlzLW9uZS1maWZ0aCBpcy1jZW50ZXJlZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpcy1oYWxmXCI+XHJcbiAgICAgICAgICA8YSBocmVmPXtcIi9jbGllbnQvXCIgKyBkYXRhW2luZGV4XS5pZH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+XHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9fSBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG4gICAgICAgICAgICAgICAge2RhdGFbaW5kZXhdLnByb2pldH1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvaW1hZ2VjbGllbnQvXCIgKyBkYXRhW2luZGV4XS5oZWFkZXJ9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICAgIGJveC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9aMXpJSkNLay5qcGVnXCIgYmx1cj17eyBtaW46IC0xLCBtYXg6IDMgfX0gc3RyZW5ndGg9ezQwMH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNlwiIGFsdD1cImFjdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW11bHRpbGluZSBpcy1jZW50ZXJlZFwiPlxyXG4gICAgICAgICAgICAgIHtib3h9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbW9iaWxlIGlzLWNlbnRlcmVkXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTUwcHhcIn19PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50PXtuYnJ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZT17MX1cclxuICAgICAgICAgICAgICAgIHRvdGFsPXtwYWdlTmJyfVxyXG4gICAgICAgICAgICAgICAgc2hvd1RpdGxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5MIGNlbnRlciBsaWdodCBsZXR0ZXJTcGFjaW5nTVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG4gICAgICAgICAgICAgICAgVm9pciBwbHVzXHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1BhcmFsbGF4PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtwYWdlQ2xpZW50VHdvOyIsImltcG9ydCBXb3JrcGFnZU9uZSBmcm9tIFwiLi9fd29ya3BhZ2VPbmVcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9fbmF2YmFyJztcclxuaW1wb3J0IFJzQnV0dG9uIGZyb20gJy4uL19yc0J1dHRvbic7XHJcbmltcG9ydCBMaW5lc1RvcCBmcm9tICcuLi9fbGluZXNUb3AnO1xyXG5pbXBvcnQgTGluZXNCb3R0b20gZnJvbSAnLi4vX2xpbmVzQm90dG9tJztcclxuaW1wb3J0IFdvcmtwYWdlVHdvIGZyb20gXCIuL193b3JrcGFnZVR3b1wiO1xyXG5pbXBvcnQgV29ya3BhZ2VUaHJlZSBmcm9tIFwiLi9fd29ya3BhZ2VUaHJlZVwiO1xyXG5pbXBvcnQgV29ya3BhZ2VGb3VyIGZyb20gXCIuL193b3JrcGFnZUZvdXJcIjtcclxuaW1wb3J0IFdvcmtwYWdlRml2ZSBmcm9tIFwiLi9fd29ya3BhZ2VGaXZlXCI7XHJcbmltcG9ydCBNaW5pRm9vdGVyIGZyb20gXCIuLi9Ib21lcGFnZS9fbWluaUZvb3RlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7IFxyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIFdvcmtwYWdlKCkge1xyXG5cdGNvbnN0IHsgbmJyIH0gPSB1c2VQYXJhbXMoKTtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0NvdW50TG9hZGVkLCBzZXRJc0NvdW50TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNDYXRMb2FkZWQsIHNldElzQ2F0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNMb2FkZWROZXh0UHJldiwgc2V0SXNMb2FkZWROZXh0UHJldl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzSW1nUmVhZHksIHNldEltZ1JlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbY2F0LCBzZXRDYXRdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoW10pO1xyXG5cdFx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHJcblx0XHRcdGZldGNoKGAvZ2V0dEFsbFByb2plY3QvJHtuYnJ9YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRzZXRJdGVtcyhyZXN1bHQpO1xyXG5cdFx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cclxuXHRcdFx0ZmV0Y2goYC9nZXRDb3VudC9wcm9qZXRgLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdHNldENvdW50KHJlc3VsdCk7XHJcblx0XHRcdFx0c2V0SXNDb3VudExvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHRcdC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0XHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdHNldElzQ291bnRMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdFx0ZmV0Y2goYC9hcGkvY2F0ZWdvcmllc2Ase21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0XHQudGhlbihcclxuXHRcdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0c2V0Q2F0KHJlc3VsdCk7XHJcblx0XHRcdFx0c2V0SXNDYXRMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzZXRJc0NvdW50TG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHR9LCBbXSlcclxuXHJcblx0aWYgKGVycm9yKSB7XHJcblx0XHQgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuXHQgIH0gZWxzZSBpZiAoIWlzTG9hZGVkIHx8ICFpc0NvdW50TG9hZGVkfHwgIWlzQ2F0TG9hZGVkKSB7XHJcblx0XHRyZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG5cdCAgfSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICggIFxyXG5cdFx0PD5cclxuXHRcdDxOYXZiYXI+PC9OYXZiYXI+XHJcblx0XHQ8UnNCdXR0b24+PC9Sc0J1dHRvbj5cclxuXHRcdDxMaW5lc1RvcD48L0xpbmVzVG9wPlxyXG5cdFx0PExpbmVzQm90dG9tPjwvTGluZXNCb3R0b20+XHJcblx0XHRcclxuXHRcdDxXb3JrcGFnZU9uZSBjYXQ9e2NhdH0+PC9Xb3JrcGFnZU9uZT5cclxuXHRcdDxXb3JrcGFnZVR3byBkYXRhPXtpdGVtc30gcGFnZT17bmJyfSBjb3VudD17Y291bnR9PjwvV29ya3BhZ2VUd28+XHJcblx0XHR7LyogPFdvcmtwYWdlVGhyZWU+PC9Xb3JrcGFnZVRocmVlPlxyXG5cdFx0PFdvcmtwYWdlRm91cj48L1dvcmtwYWdlRm91cj5cclxuXHRcdDxXb3JrcGFnZUZpdmU+PC9Xb3JrcGFnZUZpdmU+XHJcblx0XHQ8TWluaUZvb3Rlcj48L01pbmlGb290ZXI+ICovfVxyXG5cdFx0PC8+XHJcblx0ICk7XHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBXb3JrcGFnZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBXb3JrcGFnZUZpdmUoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiIGFsdD1cImFjdGlvblwiPlxyXG4gICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5Qmx1ZVwiPlxyXG4gICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHJcblxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlclwiPlxyXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgXHRcdDwvZGl2PlxyXG4gICAgICAgICAgXHRcdFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlclwiPlxyXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgXHRcdDwvZGl2PlxyXG4gICAgICAgIFx0XHQ8L2Rpdj5cclxuXHJcbiAgICAgIFx0XHQ8L2Rpdj5cclxuICAgIFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgV29ya3BhZ2VGaXZlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIFdvcmtwYWdlRm91cigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiXCIgYWx0PVwiYWN0aW9uXCI+XHJcbiAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHlCbHVlXCI+XHJcbiAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyXCI+XHJcbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICBcdFx0PC9kaXY+XHJcbiAgICAgICAgICBcdFx0XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyXCI+XHJcbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICBcdFx0PC9kaXY+XHJcbiAgICAgICAgXHRcdDwvZGl2PlxyXG5cclxuICAgICAgXHRcdDwvZGl2PlxyXG4gICAgXHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBXb3JrcGFnZUZvdXI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFPUyBmcm9tIFwiYW9zXCI7XHJcbmltcG9ydCBcImFvcy9kaXN0L2Fvcy5jc3NcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24sIE1lbnUsIE1lbnVJdGVtLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IEFycm93Rm9yd2FyZElvc1NoYXJwSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZElvc1NoYXJwJztcclxuaW1wb3J0IE11aUFjY29yZGlvbiwgeyBBY2NvcmRpb25Qcm9wcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWNjb3JkaW9uJztcclxuaW1wb3J0IE11aUFjY29yZGlvblN1bW1hcnksIHtcclxuICBBY2NvcmRpb25TdW1tYXJ5UHJvcHMsXHJcbn0gZnJvbSAnQG11aS9tYXRlcmlhbC9BY2NvcmRpb25TdW1tYXJ5JztcclxuaW1wb3J0IE11aUFjY29yZGlvbkRldGFpbHMgZnJvbSAnQG11aS9tYXRlcmlhbC9BY2NvcmRpb25EZXRhaWxzJztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuY29uc3QgQWNjb3JkaW9uID0gc3R5bGVkKChwcm9wcykgPT4gKFxyXG4gIDxNdWlBY2NvcmRpb24gZGlzYWJsZUd1dHRlcnMgZWxldmF0aW9uPXswfSBzcXVhcmUgey4uLnByb3BzfSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIG1heFdpZHRoOiBcIjE4NXB4XCIsXHJcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMClcIixcclxuICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG59KSk7XHJcblxyXG5jb25zdCBBY2NvcmRpb25TdW1tYXJ5ID0gc3R5bGVkKChwcm9wcykgPT4gKFxyXG4gIDxNdWlBY2NvcmRpb25TdW1tYXJ5XHJcbiAgICBleHBhbmRJY29uPXs8QXJyb3dGb3J3YXJkSW9zU2hhcnBJY29uIHN4PXt7IGZvbnRTaXplOiBcIjAuOXJlbVwiIH19IC8+fVxyXG5cdHsuLi5wcm9wc31cclxuICAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgYmFja2dyb3VuZENvbG9yOlxyXG4gICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImRhcmxcIlxyXG4gICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAuMDUpXCJcclxuICAgICAgOiBcInJnYmEoMCwgMCwgMCwgLjAzKVwiLFxyXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgXCImIC5NdWlBY2NvcmRpb25TdW1tYXJ5LWV4cGFuZEljb25XcmFwcGVyLk11aS1leHBhbmRlZFwiOiB7XHJcbiAgICB0cmFuc2Zvcm06IFwicm90YXRlKDkwZGVnKVwiLFxyXG4gIH0sXHJcbiAgXCImIC5NdWlBY2NvcmRpb25TdW1tYXJ5LWNvbnRlbnRcIjoge1xyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBBY2NvcmRpb25EZXRhaWxzID0gc3R5bGVkKE11aUFjY29yZGlvbkRldGFpbHMpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICBwYWRkaW5nVG9wOiAwLFxyXG4gIG1hcmdpblRvcDogMCxcclxuICBtYXhIZWlnaHQ6IFwiMTUwcHhcIixcclxuICBvdmVyZmxvdzogXCJzY3JvbGxcIixcclxufSkpO1xyXG5cclxuZnVuY3Rpb24gV29ya3BhZ2VPbmUoY2F0KSB7XHJcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSBSZWFjdC51c2VTdGF0ZShcInBhbmVsMVwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHBhbmVsKSA9PiAoZXZlbnQsIG5ld0V4cGFuZGVkKSA9PiB7XHJcbiAgICBzZXRFeHBhbmRlZChuZXdFeHBhbmRlZCA/IHBhbmVsIDogZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFt3b3Jkcywgc2V0V29yZHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGxldCBjYXRlZ29yeSA9IGNhdC5jYXQ7XHJcbiAgbGV0IG1lbnUgPSBbXTtcclxuICBsZXQgcmFuZG9tV29yZCA9IFtcclxuICAgIFwiUsOJQUNUSVZJVMOJXCIsXHJcbiAgICBcIlBST1hJTUlUw4lcIixcclxuICAgIFwiUEFTU0lPTlwiLFxyXG4gICAgXCJTVFJBVMOJR0lFXCIsXHJcbiAgICBcIkVWRU5UXCIsXHJcbiAgICBcIkNPTlNFSUxcIixcclxuICAgIFwiQ09NTVVOSUNBVElPTlwiLFxyXG4gICAgXCJSw4pWRVJcIixcclxuICAgIFwiQU1CSVRJT05cIixcclxuICAgIFwiSU1BR0lOQVRJT05cIixcclxuICAgIFwiYWdpclwiLFxyXG4gICAgXCJzJ2FkYXB0ZXJcIixcclxuICAgIFwiYW50aWNpcGVyXCIsXHJcbiAgICBcImF1dG9ub21pZVwiLFxyXG4gICAgXCJjcm9pc3NhbmNlXCIsXHJcbiAgICBcImTDqWZpXCIsXHJcbiAgICBcInBsYW5pZmllclwiLFxyXG4gICAgXCJwb3NpdGl2ZXJcIixcclxuICAgIFwiZGlzcG9uaWJpbGl0w6lcIixcclxuICAgIFwiZHluYW1pc21lXCIsXHJcbiAgICBcIsOpY291dGVcIixcclxuICAgIFwic2VydmljZVwiLFxyXG4gICAgXCJwcsOpdmlzaW9uXCIsXHJcbiAgICBcInTDqW5hY2l0w6lcIixcclxuICAgIFwicXVhbGl0w6lcIixcclxuICAgIFwibW9iaWxpc2VyXCIsXHJcbiAgICBcIm7DqWdvY2llclwiLFxyXG4gICAgXCJvYmplY3RpZnNcIixcclxuICAgIFwib3B0aW1pc2VyXCIsXHJcbiAgICBcImNoYWxsZW5nZVwiLFxyXG4gICAgXCJyw6l1c3NpclwiLFxyXG4gICAgXCJleGNlbGxlbmNlXCIsXHJcbiAgICBcInLDqWFsaXNlclwiLFxyXG4gICAgXCJyw6lzdWx0YXRzXCIsXHJcbiAgICBcImTDqXZlbG9wcGVyXCIsXHJcbiAgICBcInNhdm9pcmZhaXJlXCIsXHJcbiAgICBcImRpYWxvZ3VlXCIsXHJcbiAgICBcInByw6l2b2lyXCIsXHJcbiAgICBcInN5bmVyZ2llXCIsXHJcbiAgICBcInByb2pldFwiLFxyXG4gICAgXCJpbm5vdmF0aW9uXCIsXHJcbiAgICBcIm1vdGl2YXRpb25cIl07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBnZXRXb3JkKCkge1xyXG4gICAgICBsZXQgd29yZCA9IHJhbmRvbVdvcmRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZG9tV29yZC5sZW5ndGgpXTtcclxuICAgICAgcmFuZG9tV29yZC5zcGxpY2UocmFuZG9tV29yZC5pbmRleE9mKHdvcmQpKTtcclxuICAgICAgcmV0dXJuIHdvcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHdvcmQxID0gZ2V0V29yZCgpO1xyXG4gICAgbGV0IHdvcmQyID0gZ2V0V29yZCgpO1xyXG4gICAgc2V0V29yZHMoW3dvcmQxLCB3b3JkMl0pO1xyXG4gIH0sIFtdKTtcclxuICBBT1MuaW5pdCgpO1xyXG4gIGNhdGVnb3J5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGxldCBpdGVtID0gKFxyXG5cdFx0PGEga2V5PXtlbGVtZW50LmlkfSBzdHlsZT17e3RleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwid2hpdGVcIn19IGhyZWY9e2Avc2VhcmNoY2F0LyR7ZWxlbWVudC5pZH0vJHtlbGVtZW50LmNhdGVnb3JpZX1gfT5cclxuXHRcdFx0PHBcclxuXHRcdFx0XHJcblx0XHRcdHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwid2hpdGVcIn19XHJcblx0XHRcdGNsYXNzTmFtZT1cImxpZ2h0XCJcclxuXHRcdD5cclxuXHRcdFx0e2VsZW1lbnQuY2F0ZWdvcmllfVxyXG5cdFx0PC9wPlxyXG5cdCAgPC9hPlxyXG5cclxuICAgICk7XHJcbiAgICBtZW51LnB1c2goaXRlbSk7XHJcbiAgfSk7XHJcbiAgaWYgKHdvcmRzLmxlbmd0aCA+IDApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kMVwiIGFsdD1cImhvbWVwYWdlXCI+XHJcbiAgICAgICAgICA8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG4gICAgICAgICAgPC92aWRlbz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHlCbHVlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlcjJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi96ZW5pdGgvaW1hZ2VzL2JJTzFyOUYucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrcGFnZVRleHRcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1lZGl1bVwiPlPDiUzDiUNUSU9OIERFIFBST0pFVDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2x1bW5zXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiLCBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIgfX0gY2xhc3NOYW1lPVwibGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt3b3Jkc1swXX0gLiB7d29yZHNbMV19IC57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoXCJwYW5lbDFcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cInBhbmVsMWQtY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFuZWwxZC1oZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+Jm5ic3A7Q0FUw4lHT1JJRTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPnttZW51fTwvQWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya3BhZ2VPbmU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIFdvcmtwYWdlVGhyZWUoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiIGFsdD1cImFjdGlvblwiPlxyXG4gICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5Qmx1ZVwiPlxyXG4gICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHJcblxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlclwiPlxyXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgXHRcdDwvZGl2PlxyXG4gICAgICAgICAgXHRcdFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlclwiPlxyXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgXHRcdDwvZGl2PlxyXG4gICAgICAgIFx0XHQ8L2Rpdj5cclxuXHJcbiAgICAgIFx0XHQ8L2Rpdj5cclxuICAgIFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgV29ya3BhZ2VUaHJlZTsiLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gXCJyZWFjdC1wYXJhbGxheFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAncmMtcGFnaW5hdGlvbic7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzaGVldHMvYnVsbWEvZ3JpZC9jb2x1bW5zLnNhc3MnO1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlc2hlZXRzL2J1bG1hL2hlbHBlcnMvc3BhY2luZy5zYXNzJztcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXNoZWV0cy9wYWdpbmF0aW9uLmxlc3MnIFxyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIFdvcmtwYWdlVHdvKHtkYXRhLCBwYWdlLCBjb3VudH0pIHtcclxuICBjb25zb2xlLmxvZyhjb3VudClcclxuICBsZXQgcGFnZU5iciA9IE1hdGguY2VpbChjb3VudCAvIDIwKVxyXG4gIGxldCBuYnIgPSBwYXJzZUludChwYWdlKVxyXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKHBhcmFtcykge1xyXG4gICAgZG9jdW1lbnQubG9jYXRpb24gPSBgL3Byb2pldHMvJHtwYXJhbXN9YFxyXG4gIH1cclxuXHJcbiAgbGV0IGJveCA9IFtdO1xyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBsZXQgaXRlbSA9IChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNvbHVtbiBjb2x1bW5zIGlzLW9uZS1maWZ0aCBpcy1jZW50ZXJlZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpcy1oYWxmXCI+XHJcbiAgICAgICAgICA8YSBocmVmPXtcIi9wcm9qZXQvXCIgKyBkYXRhW2luZGV4XS5pZH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+XHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9fSBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG4gICAgICAgICAgICAgICAge2RhdGFbaW5kZXhdLnByb2pldH1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvaW1hZ2Vwcm9qZXQvXCIgKyBkYXRhW2luZGV4XS5oZWFkZXJ9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICAgIGJveC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9aMXpJSkNLay5qcGVnXCIgYmx1cj17eyBtaW46IC0xLCBtYXg6IDMgfX0gc3RyZW5ndGg9ezQwMH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNlwiIGFsdD1cImFjdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW11bHRpbGluZSBpcy1jZW50ZXJlZFwiPlxyXG4gICAgICAgICAgICAgIHtib3h9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbW9iaWxlIGlzLWNlbnRlcmVkXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTUwcHhcIn19PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50PXtuYnJ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZT17MX1cclxuICAgICAgICAgICAgICAgIHRvdGFsPXtwYWdlTmJyfVxyXG4gICAgICAgICAgICAgICAgc2hvd1RpdGxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5MIGNlbnRlciBsaWdodCBsZXR0ZXJTcGFjaW5nTVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG4gICAgICAgICAgICAgICAgVm9pciBwbHVzXHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1BhcmFsbGF4PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya3BhZ2VUd287XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBMaW5rLCBEaXJlY3RMaW5rLCBFbGVtZW50LCBFdmVudHMsIGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsLCBzY3JvbGxTcHksIHNjcm9sbGVyIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJyBcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbi8vaW1wb3J0IHNjcm9sbEludG9WaWV3IGZyb20gJ3Njcm9sbC1pbnRvLXZpZXctaWYtbmVlZGVkJ1xyXG5pbXBvcnQgSG9tZXBhZ2UgZnJvbSAnLi9Ib21lcGFnZS9faG9tZXBhZ2UnO1xyXG5pbXBvcnQgV29yZHBhZ2UgZnJvbSAnLi9Ib21lcGFnZS9fd29yZCc7XHJcbmltcG9ydCBFbW90aW9uIGZyb20gJy4vSG9tZXBhZ2UvX2Vtb3Rpb24nO1xyXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vSG9tZXBhZ2UvX2FjdGlvbic7XHJcbmltcG9ydCBDcmVhdGlvbiBmcm9tICcuL0hvbWVwYWdlL19jcmVhdGlvbic7XHJcbmltcG9ydCBTYXRpc2ZhY3Rpb24gZnJvbSAnLi9Ib21lcGFnZS9fc2F0aXNmYWN0aW9uJztcclxuaW1wb3J0IENoaWZmcmVzIGZyb20gJy4vSG9tZXBhZ2UvX2NoaWZmcmVzJztcclxuaW1wb3J0IFZpc2lvbiBmcm9tICcuL0hvbWVwYWdlL192aXNpb24nO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vSG9tZXBhZ2UvX2Zvb3Rlcic7XHJcbmltcG9ydCBJbnN0YWZsdXggZnJvbSAnLi9Ib21lcGFnZS9faW5zdGEnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vX25hdmJhcic7XHJcbmltcG9ydCBSc0J1dHRvbiBmcm9tICcuL19yc0J1dHRvbic7XHJcbmltcG9ydCBMaW5lc1RvcCBmcm9tICcuL19saW5lc1RvcCc7XHJcbmltcG9ydCBMaW5lc0JvdHRvbSBmcm9tICcuL19saW5lc0JvdHRvbSc7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcblx0Y29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2luc3RhLCBzZXRJbnN0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGZldGNoKGAvZ2V0dEFsbENyZWF0aW9uYCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0LnRoZW4oXHJcblx0XHQgIChyZXN1bHQpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdFx0c2V0SXRlbXMocmVzdWx0KVxyXG5cdFx0ICB9LFxyXG5cdFx0ICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdCAgLy8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHQgIC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0ICAoZXJyb3IpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXHJcblx0XHQgIH1cclxuXHRcdClcclxuXHJcblx0XHQvLyBmZXRjaChgaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9hZ2VuY2V6ZW5pdGgvP19fYT0xP19fYT0xJl9fZD1kaXNgLHttZXRob2Q6J0dFVCcsfSlcclxuXHRcdC8vIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0Ly8gLnRoZW4oKHJlc3VsdEluc3RhKSA9PiB7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKFwidG90b1wiKVxyXG5cdFx0Ly8gXHRjb25zb2xlLmxvZyhyZXN1bHRJbnN0YSlcclxuXHRcdC8vICAgfSxcclxuXHRcdC8vICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHQvLyAgIC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0Ly8gICAvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdC8vICAgKGVycm9yKSA9PiB7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdFx0Ly8gICB9XHJcblx0XHQvLyApXHJcblx0ICB9LCBbXSlcclxuXHJcblx0Ly8gbGV0IHN0ZXAgPSAxXHJcblxyXG5cdC8vIEFPUy5pbml0KClcclxuXHQvLyBsZXQgc2Nyb2xsID0gZmFsc2VcclxuXHQvLyBpZihzdGVwID09IDQpe1xyXG5cdC8vIFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhdGNobmF6ZScpLnN0eWxlLnBhZGRpbmdUb3AgPSAnMHB4J1xyXG5cdC8vIH1cclxuXHJcblx0Ly8gIHZhciBsYXN0U2Nyb2xsVG9wID0gMDtcclxuXHJcblx0Ly8gLy8gZWxlbWVudCBzaG91bGQgYmUgcmVwbGFjZWQgd2l0aCB0aGUgYWN0dWFsIHRhcmdldCBlbGVtZW50IG9uIHdoaWNoIHlvdSBoYXZlIGFwcGxpZWQgc2Nyb2xsLCB1c2Ugd2luZG93IGluIGNhc2Ugb2Ygbm8gdGFyZ2V0IGVsZW1lbnQuXHJcblx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24oKXsgLy8gb3Igd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIi4uLi5cclxuXHQvLyB2YXIgc3QgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDsgLy8gQ3JlZGl0czogXCJodHRwczovL2dpdGh1Yi5jb20vcWVyZW15L3NvL2Jsb2IvbWFzdGVyL3NvLmRvbS5qcyNMNDI2XCJcclxuXHQvLyBpZiAoc3QgPiBsYXN0U2Nyb2xsVG9wICYmIHNjcm9sbCA9PSBmYWxzZSAmJiBzdGVwIDwgOSl7XHJcblx0Ly8gXHRjb25zb2xlLmxvZyhzdGVwICsgXCIgZG93blwiKVxyXG5cdFx0XHJcblxyXG5cdC8vIFx0IHN0ZXArK1xyXG5cdC8vIFx0c2Nyb2xsZXIuc2Nyb2xsVG8oYHNjcm9sbC10by1lbGVtZW50JHtzdGVwfWAsIHtcclxuXHQvLyBcdFx0ZHVyYXRpb246IDgwMCxcclxuXHQvLyBcdFx0ZGVsYXk6IDAsXHJcblx0Ly8gXHRcdHNtb290aDogJ2Vhc2VJbk91dFF1YXJ0J1xyXG5cdC8vIFx0ICB9KSBcclxuXHRcdCAgXHJcblx0Ly8gXHQgc2Nyb2xsID0gdHJ1ZVxyXG5cdC8vIFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0Ly8gXHRcdHNjcm9sbCA9IGZhbHNlXHJcblx0Ly8gXHR9LCAxMDAwKTtcclxuXHQvLyB9IGVsc2UgaWYoc3QgPCBsYXN0U2Nyb2xsVG9wICYmIHNjcm9sbCA9PSBmYWxzZSAmJiBzdGVwID4gMSl7XHJcblxyXG5cdC8vIFx0c3RlcC0tXHJcblx0Ly8gXHRzY3JvbGxlci5zY3JvbGxUbyhgc2Nyb2xsLXRvLWVsZW1lbnQke3N0ZXB9YCwge1xyXG5cdC8vIFx0XHRkdXJhdGlvbjogODAwLFxyXG5cdC8vIFx0XHRkZWxheTogMCxcclxuXHQvLyBcdFx0c21vb3RoOiAnZWFzZUluT3V0UXVhcnQnXHJcblx0Ly8gXHR9KVxyXG5cdFx0ICBcclxuXHQvLyBcdCBjb25zb2xlLmxvZyhzdGVwICsgXCIgdXBcIilcclxuXHRcdCBcclxuXHQvLyBcdCBzY3JvbGwgPSB0cnVlXHJcblx0Ly8gXHQgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0Ly8gXHRcdHNjcm9sbCA9IGZhbHNlXHJcblx0Ly8gXHQgfSwgMTAwMCk7XHJcblx0Ly8gfVxyXG5cdC8vIGxhc3RTY3JvbGxUb3AgPSBzdCA8PSAwID8gMCA6IHN0OyAvLyBGb3IgTW9iaWxlIG9yIG5lZ2F0aXZlIHNjcm9sbGluZ1xyXG5cdC8vIH0sIGZhbHNlKTtcclxuXHJcblx0aWYoaXRlbXMpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0PE5hdmJhcj48L05hdmJhcj5cclxuXHRcdFx0PExpbmVzVG9wPjwvTGluZXNUb3A+XHJcblx0XHRcdDxMaW5lc0JvdHRvbT48L0xpbmVzQm90dG9tPlxyXG5cdFx0XHQ8UnNCdXR0b24+PC9Sc0J1dHRvbj5cclxuXHRcdFx0XHJcblxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDFcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+XHRcdFx0XHJcblxyXG5cdFx0XHRcdFx0PEhvbWVwYWdlID48L0hvbWVwYWdlPlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0PC9FbGVtZW50Plx0XHJcblxyXG5cdFx0XHRcdHsvKiA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsIGhlaWdodDpcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIn19PjwvZGl2PiAqL31cclxuXHRcdFx0XHQ8V29yZHBhZ2UgPjwvV29yZHBhZ2U+XHJcblx0XHRcdFx0ey8qIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwifX0+PC9kaXY+ICovfVxyXG5cclxuXHJcblxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDNcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+XHJcblxyXG5cdFx0XHRcdFx0PEVtb3Rpb24gPjwvRW1vdGlvbj5cclxuXHJcblx0XHRcdFx0PC9FbGVtZW50PlxyXG5cclxuXHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50NFwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj5cclxuXHRcdFx0XHRcdDxBY3Rpb24gPjwvQWN0aW9uPlxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50NVwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj5cclxuXHJcblx0XHRcdFx0XHQ8Q3JlYXRpb24gaXRlbT17aXRlbXN9PjwvQ3JlYXRpb24+XHJcblxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50NlwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj5cclxuXHJcblx0XHRcdFx0XHQ8U2F0aXNmYWN0aW9uID48L1NhdGlzZmFjdGlvbj5cclxuXHJcblx0XHRcdFx0PC9FbGVtZW50PlxyXG5cclxuXHRcdFx0XHQ8RWxlbWVudCBuYW1lPVwic2Nyb2xsLXRvLWVsZW1lbnQ3XCIgY2xhc3NOYW1lPVwiZWxlbWVudFwiPlxyXG5cclxuXHRcdFx0XHRcdFx0PENoaWZmcmVzID48L0NoaWZmcmVzPlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHQ8L0VsZW1lbnQ+XHJcblxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDhcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+XHJcblxyXG5cdFx0XHRcdFx0PFZpc2lvbiA+PC9WaXNpb24+XHJcblxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50OFwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj5cclxuXHJcblx0XHRcdFx0XHRcdDxJbnN0YWZsdXggPjwvSW5zdGFmbHV4PlxyXG5cclxuXHRcdFx0XHQ8L0VsZW1lbnQ+XHJcblxyXG5cclxuXHJcblx0XHRcdFx0PEZvb3RlciA+PC9Gb290ZXI+XHJcblxyXG5cclxuXHRcdFx0ey8qIDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDEwXCIgY2xhc3NOYW1lPVwiZWxlbWVudFwiPjwvRWxlbWVudD4gKi99XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcdFx0XHJcblx0fVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCIgaW1wb3J0IFwiLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuZnVuY3Rpb24gTGluZXNCb3R0b20oKSB7XHJcblx0cmV0dXJuICggXHJcblx0XHQ8PlxyXG5cclxuXHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmVCXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMjAwXCI+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmU0XCI+PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmU1IGxpbmVBbmltZTJcIj48L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHRcdDwvPlxyXG5cdCApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5lc0JvdHRvbTsiLCIgaW1wb3J0IFwiLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuZnVuY3Rpb24gTGluZXNUb3AoKSB7XHJcblx0bGV0IGF1ZGlvID0gbmV3IEF1ZGlvKFwiL3plbml0aC9hdXRyZS9Ib3Jpem9uLm1wM1wiKVxyXG5cclxuXHRjb25zdCBzdGFydCA9ICgpID0+IHtcclxuXHQgIGF1ZGlvLnBsYXkoKVxyXG5cdH1cclxuXHRyZXR1cm4gKCBcclxuXHRcdDw+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGluZUFcIiAgZGF0YS1hb3M9XCJmYWRlLWRvd25cIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmUyXCJvbkNsaWNrPXtzdGFydH0+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaW5lMyBsaW5lQW5pbWVcIiA+PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC8+XHJcblx0ICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmVzVG9wOyIsImltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JyBcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIG5hdmJhcigpIHtcclxuXHJcbiAgQU9TLmluaXQoKVxyXG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFNlYXJjaElucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IHRlbGVwb3J0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxvY2F0aW9uLnJlcGxhY2UoJy9zZWFyY2gvJyArIHNlYXJjaElucHV0KTtcclxuICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9zZWFyY2gvXCIrc2VhcmNoSW5wdXRcclxuICB9XHJcbiAgXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblxyXG4gICAgPGlucHV0IGlkPVwibWVudV9fdG9nZ2xlXCIgdHlwZT1cImNoZWNrYm94XCIgIC8+XHJcblxyXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWVudV9fYnRuXCIgaHRtbEZvcj1cIm1lbnVfX3RvZ2dsZVwiIGRhdGEtYW9zPVwiZmFkZS1kb3duXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMjAwXCI+XHJcbiAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgXHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51X19ib3hcIiBkYXRhLWFvcz1cImZhZGUtcmlnaHRcIj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGVsZXBvcnR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX19ncm91cCBmaWVsZCBkaXZDMSBtZW51X19pdGVtMVwiID5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJpbnB1dFwiIHNpemU9XCIxNVwiIGNsYXNzTmFtZT1cImZvcm1fX2ZpZWxkXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgaWQ9XCJlbWFpbFwiIHZhbHVlPXtzZWFyY2hJbnB1dH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcmVxdWlyZWQ+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxcIj5SZWNoZXJjaGU8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lbnVfX2l0ZW0gbGlnaHQgbGV0dGVyU3BhY2luZ1NcIj48TGluayBjbGFzc05hbWU9XCJ0ZXh0RGVjbyBtYXJnaW5TdG9wXCIgdG89XCIvXCI+QUNDVUVJTDwvTGluaz48L2g1PlxyXG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZW51X19pdGVtIGxpZ2h0IGxldHRlclNwYWNpbmdTXCI+PExpbmsgY2xhc3NOYW1lPVwidGV4dERlY29cIiB0bz1cIi9jbGllbnRzXCI+Q0xJRU5UUzwvTGluaz48L2g1PlxyXG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZW51X19pdGVtIGxpZ2h0IGxldHRlclNwYWNpbmdTXCI+PExpbmsgY2xhc3NOYW1lPVwidGV4dERlY29cIiB0bz1cIi9wcm9qZXRzLzFcIj5QUk9KRVRTPC9MaW5rPjwvaDU+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lbnVfX2l0ZW0gbGlnaHQgbGV0dGVyU3BhY2luZ1NcIj48TGluayBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiIHRvPVwiL2NvbnRhY3RcIj5DT05UQUNUPC9MaW5rPjwvaDU+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dERlY28gbGV0dGVyU3BhY2luZ1NcIiBocmVmPVwiL2xvZ2luXCI+PGg1IGNsYXNzTmFtZT1cIm1lbnVfX2l0ZW0gdGV4dERlY28gbGlnaHRcIj5BRE1JTjwvaDU+PC9hPlxyXG4gICAgICA8L3VsPlxyXG5cdFx0PC8+XHJcblx0ICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuYXZiYXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7IFxyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gUnNCdXR0b24oKSB7XHJcblx0QU9TLmluaXQoe29uY2U6IHRydWUsfSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJzIGFvcy1pdGVtIG92ZXJmbG93SGlkZGVuXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMjAwXCI+XHJcblx0XHRcdDxhIGNsYXNzTmFtZT1cImZiXCIgaHJlZj0naHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0FHRU5DRVpFTklUSC8nPjwvYT5cclxuXHRcdFx0PGEgY2xhc3NOYW1lPVwiaW5zdGFcIiBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2FnZW5jZXplbml0aC8/aGw9ZnInPjwvYT5cclxuXHRcdFx0PGEgY2xhc3NOYW1lPVwibGlua2VkaW5cIiBocmVmPSdodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9hZ2VuY2UtemVuaXRoLyc+PC9hPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8Lz4gXHJcblx0XHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSc0J1dHRvbjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJCcm93c2VyUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJ1c2VMb2NhdGlvbiIsIkhvbWUiLCJXb3JrcGFnZSIsIldvcmtwYWdlQ2xpZW50IiwiQ29udGFjdFBhZ2UiLCJDbGllbnRQYWdlIiwidXNlTGF5b3V0RWZmZWN0IiwiUHJvamVjdHBhZ2UiLCJTZWFyY2hQYWdlIiwiU2VhcmNoUGFnZTIiLCJNYWluIiwiV3JhcHBlciIsImNoaWxkcmVuIiwibG9jYXRpb24iLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvIiwicGF0aG5hbWUiLCJ3aW5kb3ciLCJjcmVhdGVSb290IiwiY29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwiTmF2YmFyIiwiQ2xpZW50UGFnZU9uZSIsIkNsaWVudHBhZ2VUd28iLCJDbGllbnRwYWdlVGhyZWUiLCJDbGllbnRwYWdlRm91ciIsIkNsaWVudHBhZ2VGaXZlIiwiQ2xpZW50cGFnZVNpeCIsInVzZVBhcmFtcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2xpZW50cGFnZSIsImlkIiwiZXJyb3IiLCJzZXRFcnJvciIsImlzTG9hZGVkIiwic2V0SXNMb2FkZWQiLCJpc0xvYWRlZEltZyIsInNldElzTG9hZGVkSW1nIiwiaXNMb2FkZWROZXh0UHJldiIsInNldElzTG9hZGVkTmV4dFByZXYiLCJpc0ltZ1JlYWR5Iiwic2V0SW1nUmVhZHkiLCJpdGVtcyIsInNldEl0ZW1zIiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwiaGVhZGVyIiwic2V0SGVhZGVyIiwicHJlY2kiLCJzZXRQcmVjaSIsInNlY29uZCIsInNldFNlY29uZCIsImRpc3BsYXkiLCJzZXREaXNwbGF5IiwiTmV4dFByZXYiLCJzZXROZXh0UHJldiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInRoaXNSZXMiLCJKU09OIiwicGFyc2UiLCJpIiwibGVuZ3RoIiwiZm9jdXMiLCJzZWNvbmRhaXJlIiwiTmV4dCIsIlByZXYiLCJtZXNzYWdlIiwiQU9TIiwiTGluayIsImluaXQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJkYXRhMiIsImVsZW1lbnRwcmVjaXNpb24iLCJ0ZXh0VHJhbnNmb3JtIiwiX19odG1sIiwib2JqZWN0Rml0IiwiaW1hZ2UiLCJDbGllbnRwYWdlT25lIiwiZGF0YSIsIm1pc3Npb24iLCJucCIsInRlbW9pZ25hZ2UiLCJocmVmIiwibm9tQ2xpZW50IiwiaGVpZ2h0Iiwid2lkdGgiLCJlbmpldSIsImhpc3RvaXJlIiwicmVwb25zZSIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsIlJzQnV0dG9uIiwiTGluZXNUb3AiLCJMaW5lc0JvdHRvbSIsIkNvbnRhY3RQYWdlT25lIiwiU3dhbCIsIndpdGhSZWFjdENvbnRlbnQiLCJNeVN3YWwiLCJlbWFpbCIsIm5hbWUiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwicGVyc2lzdCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiZSIsImRpc2FibGVkIiwicHJldmVudERlZmF1bHQiLCJmaXJlIiwidGV4dCIsInRvYXN0IiwiaWNvbiIsInRpdGxlIiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJyZXF1ZXN0T3B0aW9ucyIsImJvZHkiLCJzdHJpbmdpZnkiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIkVsZW1lbnQiLCJQYXJhbGxheCIsIkFjdGlvbiIsInBhZGRpbmdUb3AiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tkcm9wRmlsdGVyIiwiQ2hpZmZyZXMiLCJDcmVhdGlvbiIsIml0ZW0iLCJzbGlkZXIiLCJmb3JFYWNoIiwiZWxlbWVudCIsIm5ld1NsaWRlciIsIlJlbW92ZUJsdXJEZXRhaWwiLCJCbHVyRGV0YWlsIiwicG9pbnRlckV2ZW50cyIsImxlZnQiLCJ0b3AiLCJjcmVhdGlvbiIsInB1c2giLCJzdHlsZSIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJFbW90aW9uIiwiRm9vdGVyIiwiaGFuZGxlRW1haWxJbnB1dENoYW5nZSIsInJlc3BvbnNlIiwiSG9tZXBhZ2UiLCJ1c2VSZWYiLCJJbnN0YWZsdXgiLCJpbnN0YSIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhc3luYyIsImFwcGVuZENoaWxkIiwicmVhZHlTdGF0ZSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJvcmRlciIsIm1hcmdpbkJvdHRvbSIsIk1pbmlGb290ZXIiLCJTYXRpc2ZhY3Rpb24iLCJWaXNpb24iLCJNYXJxdWVlIiwiV29yZHBhZ2UiLCJvdmVyZmxvdyIsIlByb2plY3RQYWdlT25lIiwiUHJvamVjdHBhZ2VUd28iLCJQcm9qZWN0cGFnZVRocmVlIiwiUHJvamVjdHBhZ2VGb3VyIiwiUHJvamVjdHBhZ2VGaXZlIiwiUHJvamVjdHBhZ2VTaXgiLCJyZXN1bHRpbWciLCJMaWdodGJveCIsIlRodW1ibmFpbHMiLCJvcGVuIiwic2V0T3BlbiIsImFycmF5SW1hZ2UiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImJvdHRvbSIsIlByb2plY3RwYWdlT25lIiwicHJvamV0Iiwic2VjdGV1ciIsImNsaWVudCIsImR1cmVlIiwiY2F0ZWdvcmllIiwiY3Vyc29yIiwiZGVtYW5kZSIsImRlZmkiLCJhY3Rpb24iLCJTZWFyY2hQYWdlT25lMiIsIlNlYXJjaFBhZ2VUd28yIiwiaW5mbyIsImJveCIsImluZGV4IiwibWF4V2lkdGgiLCJTZWFyY2hQYWdlT25lIiwiU2VhcmNoUGFnZVR3byIsIldvcmtwYWdlQ2xpZW50T25lIiwiV29ya3BhZ2VDbGllbnRUd28iLCJuYnIiLCJpc0NvdW50TG9hZGVkIiwic2V0SXNDb3VudExvYWRlZCIsImlzQ2F0TG9hZGVkIiwic2V0SXNDYXRMb2FkZWQiLCJjYXQiLCJzZXRDYXQiLCJjb3VudCIsInNldENvdW50Iiwic3R5bGVkIiwiQnV0dG9uIiwiTWVudSIsIk1lbnVJdGVtIiwiVHlwb2dyYXBoeSIsIkFycm93Rm9yd2FyZElvc1NoYXJwSWNvbiIsIk11aUFjY29yZGlvbiIsIkFjY29yZGlvblByb3BzIiwiTXVpQWNjb3JkaW9uU3VtbWFyeSIsIkFjY29yZGlvblN1bW1hcnlQcm9wcyIsIk11aUFjY29yZGlvbkRldGFpbHMiLCJBY2NvcmRpb24iLCJwcm9wcyIsInRoZW1lIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJBY2NvcmRpb25TdW1tYXJ5IiwiZm9udFNpemUiLCJwYWxldHRlIiwibW9kZSIsImZsZXhEaXJlY3Rpb24iLCJ0cmFuc2Zvcm0iLCJzcGFjaW5nIiwiQWNjb3JkaW9uRGV0YWlscyIsIm1heEhlaWdodCIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJoYW5kbGVDaGFuZ2UiLCJwYW5lbCIsIm5ld0V4cGFuZGVkIiwid29yZHMiLCJzZXRXb3JkcyIsImNhdGVnb3J5IiwibWVudSIsInJhbmRvbVdvcmQiLCJnZXRXb3JkIiwid29yZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNwbGljZSIsImluZGV4T2YiLCJ3b3JkMSIsIndvcmQyIiwidGV4dERlY29yYXRpb24iLCJQYWdpbmF0aW9uIiwicGFnZSIsInBhZ2VOYnIiLCJjZWlsIiwicGFyc2VJbnQiLCJvbkNoYW5nZSIsInBhcmFtcyIsIm1pbiIsIm1heCIsIldvcmtwYWdlT25lIiwiV29ya3BhZ2VUd28iLCJXb3JrcGFnZVRocmVlIiwiV29ya3BhZ2VGb3VyIiwiV29ya3BhZ2VGaXZlIiwiRGlyZWN0TGluayIsIkV2ZW50cyIsImFuaW1hdGVTY3JvbGwiLCJzY3JvbGwiLCJzY3JvbGxTcHkiLCJzY3JvbGxlciIsInNldEluc3RhIiwiYXVkaW8iLCJBdWRpbyIsInN0YXJ0IiwicGxheSIsIm5hdmJhciIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJ0ZWxlcG9ydCIsInJlcGxhY2UiLCJvbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==