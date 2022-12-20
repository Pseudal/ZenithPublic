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
    path: "/clients",
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
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../_navbar */ "./assets/components/_navbar.jsx");
/* harmony import */ var _clientpageOne__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_clientpageOne */ "./assets/components/Clientpage/_clientpageOne.jsx");
/* harmony import */ var _clientpageTwo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_clientpageTwo */ "./assets/components/Clientpage/_clientpageTwo.jsx");
/* harmony import */ var _clientpageThree__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_clientpageThree */ "./assets/components/Clientpage/_clientpageThree.jsx");
/* harmony import */ var _clientpageFour__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_clientpageFour */ "./assets/components/Clientpage/_clientpageFour.jsx");
/* harmony import */ var _clientpageFive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_clientpageFive */ "./assets/components/Clientpage/_clientpageFive.jsx");
/* harmony import */ var _clientpageSix__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_clientpageSix */ "./assets/components/Clientpage/_clientpageSix.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function Clientpage() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_23__.useParams)(),
    id = _useParams.id;
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
  if (id) {
    (0,react__WEBPACK_IMPORTED_MODULE_21__.useEffect)(function () {
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
        if (thisRes) {
          for (var i = 0; i < Object.keys(thisRes).length; i++) {
            if (thisRes[i].header) setHeader(thisRes[i]);
            if (thisRes[i].focus) setPreci(thisRes[i]);
            if (thisRes[i].secondaire) setSecond(thisRes[i]);
            // if(images[i].visible)
            // 	setDisplay(...images[i])
            if (Object.keys(thisRes).length - 1 == i || result == "[]") setImgReady(true);
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_navbar__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/React.createElement(_clientpageOne__WEBPACK_IMPORTED_MODULE_15__["default"], {
      data: items
    }), /*#__PURE__*/React.createElement(_clientpageTwo__WEBPACK_IMPORTED_MODULE_16__["default"], {
      data: items
    }), /*#__PURE__*/React.createElement(_clientpageThree__WEBPACK_IMPORTED_MODULE_17__["default"], {
      data: second
    }), /*#__PURE__*/React.createElement(_clientpageFour__WEBPACK_IMPORTED_MODULE_18__["default"], {
      preci: preci,
      data2: items
    }), /*#__PURE__*/React.createElement(_clientpageFive__WEBPACK_IMPORTED_MODULE_19__["default"], null), /*#__PURE__*/React.createElement(_clientpageSix__WEBPACK_IMPORTED_MODULE_20__["default"], {
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





function ClientpageThree() {
  aos__WEBPACK_IMPORTED_MODULE_1___default().init();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapperDarkBlueClient"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "containerFlex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "contain",
    src: "/zenith/images/7cA64Du.jpg",
    alt: ""
  }))));
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
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");





function ClientpageTwo(data) {
  aos__WEBPACK_IMPORTED_MODULE_1___default().init();
  if (data.data.enjeu || data.data.histoire || data.data.reponse) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        backgroundImage: "url(/zenith/images/x9nes5V.jpg)"
      },
      className: "demiblocClient"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "demiblocClientOpacity"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "parentClient"
    }, data.data.enjeu && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "clientGrid1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
      className: "light"
    }, "UNE ENJEU"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "light containerCenterClient",
      dangerouslySetInnerHTML: {
        __html: data.data.enjeu
      }
    })), data.data.histoire && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "clientGrid2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
      className: "light"
    }, "UNE HISTOIRE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "light containerCenterClient",
      dangerouslySetInnerHTML: {
        __html: data.data.histoire
      }
    })), data.data.reponse && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "clientGrid3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
      className: "light"
    }, "UNE REPONSE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "light containerCenterClient",
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
      marginTop: "100px"
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");
/* harmony import */ var yet_another_react_lightbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! yet-another-react-lightbox */ "./node_modules/yet-another-react-lightbox/dist/index.js");
/* harmony import */ var yet_another_react_lightbox_plugins_thumbnails__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! yet-another-react-lightbox/plugins/thumbnails */ "./node_modules/yet-another-react-lightbox/dist/plugins/thumbnails/index.js");
/* harmony import */ var yet_another_react_lightbox_plugins_thumbnails_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! yet-another-react-lightbox/plugins/thumbnails.css */ "./node_modules/yet-another-react-lightbox/dist/plugins/thumbnails/thumbnails.css");
/* harmony import */ var yet_another_react_lightbox_styles_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! yet-another-react-lightbox/styles.css */ "./node_modules/yet-another-react-lightbox/dist/styles.css");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function ProjectpageFive(images) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_14___default().useState(false),
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement((react__WEBPACK_IMPORTED_MODULE_14___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(react_parallax__WEBPACK_IMPORTED_MODULE_15__.Parallax, {
      bgImage: "/zenith/images/Z1zIJCKk.jpeg",
      strength: 800
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
      className: "wrapper",
      style: {
        marginBottom: "100px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
      className: "parentClientView",
      style: {
        paddingTop: "90px",
        paddingBottom: "90px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
      className: "clientGridView1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
      className: "boxFlex"
    }, images.images[0] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("img", {
      className: " contain",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      src: "/images/imageprojet/" + images.images[0].image,
      alt: ""
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("img", {
      className: " contain",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      src: "/zenith/autre/noImg.png",
      alt: ""
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
      className: "clientGridView2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
      className: "boxFlex"
    }, images.images[1] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("img", {
      className: " contain",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      src: "/images/imageprojet/" + images.images[1].image,
      alt: ""
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("img", {
      className: " contain",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      src: "/zenith/autre/noImg.png",
      alt: ""
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
      className: "clientGridView3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
      className: "boxFlex"
    }, images.images[2] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("img", {
      className: " contain",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      src: "/images/imageprojet/" + images.images[2].image,
      alt: ""
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("img", {
      className: " contain",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      src: "/zenith/autre/noImg.png",
      alt: ""
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
      className: "clientGridView4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
      className: "boxFlex"
    }, images.images[3] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("img", {
      className: " contain",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      src: "/images/imageprojet/" + images.images[3].image,
      alt: ""
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("img", {
      className: " contain",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      src: "/zenith/autre/noImg.png",
      alt: ""
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
      className: "columns is-mobile is-centered mt-5-fullhd",
      style: {
        width: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("button", {
      onClick: function onClick() {
        return setOpen(true);
      },
      className: "btnS center light letterSpacingM mb-6 mt-0"
    }, "EN VOIR +")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(yet_another_react_lightbox__WEBPACK_IMPORTED_MODULE_19__["default"], {
      open: open,
      close: function close() {
        return setOpen(false);
      },
      plugins: [yet_another_react_lightbox_plugins_thumbnails__WEBPACK_IMPORTED_MODULE_20__["default"]],
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      className: " contain",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      src: "/images/imageprojet/" + preci.image,
      alt: ""
    }))))))));
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
        backgroundImage: "url(/zenith/images/6Wvemm3K.jpeg)"
      },
      className: "demiblocClient"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "parentClient"
    }, data.data.demande && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "clientGrid1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
      className: "light"
    }, "UNE DEMANDE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "light containerCenterClient",
      dangerouslySetInnerHTML: {
        __html: data.data.demande
      }
    })), data.data.defi && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "clientGrid2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
      className: "light"
    }, "UN D\xC9FI"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "light containerCenterClient",
      dangerouslySetInnerHTML: {
        __html: data.data.defi
      }
    })), data.data.action && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "clientGrid3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
      className: "light"
    }, "UNE ACTION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "light containerCenterClient",
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
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function WorkpageClient() {
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
    isLoadedImg = _useState6[0],
    setIsLoadedImg = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isLoadedNextPrev = _useState8[0],
    setIsLoadedNextPrev = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isImgReady = _useState10[0],
    setImgReady = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    items = _useState12[0],
    setItems = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    images = _useState14[0],
    setImages = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    header = _useState16[0],
    setHeader = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    preci = _useState18[0],
    setPreci = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    second = _useState20[0],
    setSecond = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)([]),
    _useState22 = _slicedToArray(_useState21, 2),
    display = _useState22[0],
    setDisplay = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)([]),
    _useState24 = _slicedToArray(_useState23, 2),
    NextPrev = _useState24[0],
    setNextPrev = _useState24[1];
  (0,react__WEBPACK_IMPORTED_MODULE_19__.useEffect)(function () {
    fetch("/gettAllClient/", {
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_navbar__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/React.createElement(_rsButton__WEBPACK_IMPORTED_MODULE_15__["default"], null), /*#__PURE__*/React.createElement(_linesTop__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/React.createElement(_linesBottom__WEBPACK_IMPORTED_MODULE_17__["default"], null), /*#__PURE__*/React.createElement(_workpageClientOne__WEBPACK_IMPORTED_MODULE_13__["default"], null), /*#__PURE__*/React.createElement(_workpageClientTwo__WEBPACK_IMPORTED_MODULE_18__["default"], {
      data: items
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");





function WorkpageClientOne() {
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
  }, "S\xC9L\xC9CTION DE PROJET"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "light"
  }, "LOGO. WEB DESIGN. CATEGORIE")))))));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");



function WorkpageClientTwo(data) {
  console.log(data);
  var box = [];
  for (var index = 0; index < data.data.length; index++) {
    if (index % 3 == 0 && data.data[index + 2] && data.data[index + 1] && data.data[index]) {
      var item = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "container4 center",
        key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        href: "/client/" + data.data[index].id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "boxWorkpage1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "textDeco"
      }, data.data[index].mission), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: "/images/imageclient/" + data.data[index].header,
        alt: "",
        style: {
          maxWidth: "100%",
          height: "auto"
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        href: "/client/" + data.data[index + 1].id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "boxWorkpage1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "textDeco"
      }, data.data[index + 1].mission), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: "/images/imageclient/" + data.data[index + 1].header,
        alt: "",
        style: {
          maxWidth: "100%",
          height: "auto"
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        href: "/client/" + data.data[index + 2].id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "boxWorkpage1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "textDeco"
      }, data.data[index + 2].mission), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: "/images/imageclient/" + data.data[index + 2].header,
        alt: "",
        style: {
          maxWidth: "100%",
          height: "auto"
        }
      }))));
      box.push(item);
    } else {
      continue;
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "",
    alt: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "opacityBlue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper"
  }, box, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnL center light letterSpacingM"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/contact",
    className: "textDeco"
  }, "Voir plus"))))));
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
      style: {
        textDecoration: "none",
        color: "white"
      },
      href: "/searchcat/".concat(element.id, "/").concat(element.categorie)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("p", {
      key: element.id,
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
    }, "CAT\xC9GORIE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(AccordionDetails, null, menu)))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0VBQTJCLFdBQVcsQ0FBSSxDQUMxRyxDQUNOO0FBRUw7QUFFQSxpRUFBZXNDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NJO0FBQ0g7QUFDSTtBQUNDO0FBRTNCLFNBQVMzTSxRQUFRLEdBQUc7RUFDbkJwQiwrQ0FBUSxDQUFDO0lBQUNvTyxJQUFJLEVBQUU7RUFBSyxDQUFDLENBQUM7RUFDdkIsb0JBQ0MsdUlBQ0E7SUFBSyxTQUFTLEVBQUMsNEJBQTRCO0lBQUMsWUFBUyxTQUFTO0lBQUMscUJBQWtCO0VBQU0sZ0JBQ3RGO0lBQUcsU0FBUyxFQUFDLElBQUk7SUFBQyxJQUFJLEVBQUM7RUFBd0MsRUFBSyxlQUNwRTtJQUFHLFNBQVMsRUFBQyxPQUFPO0lBQUMsSUFBSSxFQUFDO0VBQStDLEVBQUssZUFDOUU7SUFBRyxTQUFTLEVBQUMsVUFBVTtJQUFDLElBQUksRUFBQztFQUFpRCxFQUFLLENBQzlFLENBQ0g7QUFFTDtBQUVBLGlFQUFlaE4sUUFBUTs7Ozs7Ozs7Ozs7QUNsQnZCOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NsaWVudHBhZ2UvX2NsaWVudHBhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NsaWVudHBhZ2UvX2NsaWVudHBhZ2VGaXZlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DbGllbnRwYWdlL19jbGllbnRwYWdlRm91ci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2xpZW50cGFnZS9fY2xpZW50cGFnZU9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2xpZW50cGFnZS9fY2xpZW50cGFnZVNpeC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2xpZW50cGFnZS9fY2xpZW50cGFnZVRocmVlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DbGllbnRwYWdlL19jbGllbnRwYWdlVHdvLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Db250YWN0cGFnZS9fY29udGFjdHBhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NvbnRhY3RwYWdlL19jb250YWN0cGFnZU9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZXBhZ2UvX2FjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZXBhZ2UvX2NoaWZmcmVzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ib21lcGFnZS9fY3JlYXRpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL19lbW90aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ib21lcGFnZS9fZm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ib21lcGFnZS9faG9tZXBhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL19pbnN0YS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZXBhZ2UvX21pbmlGb290ZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL19zYXRpc2ZhY3Rpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL192aXNpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL193b3JkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Qcm9qZWN0cGFnZS9fcHJvamVjdHBhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1Byb2plY3RwYWdlL19wcm9qZWN0cGFnZUZpdmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1Byb2plY3RwYWdlL19wcm9qZWN0cGFnZUZvdXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1Byb2plY3RwYWdlL19wcm9qZWN0cGFnZU9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUHJvamVjdHBhZ2UvX3Byb2plY3RwYWdlU2l4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Qcm9qZWN0cGFnZS9fcHJvamVjdHBhZ2VUaHJlZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUHJvamVjdHBhZ2UvX3Byb2plY3RwYWdlVHdvLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TZWFyY2hQYWdlMi9fU2VhcmNoUGFnZTIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1NlYXJjaFBhZ2UyL19TZWFyY2hQYWdlT25lMi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU2VhcmNoUGFnZTIvX1NlYXJjaFBhZ2VUd28yLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TZWFyY2hQYWdlL19TZWFyY2hQYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TZWFyY2hQYWdlL19TZWFyY2hQYWdlT25lLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TZWFyY2hQYWdlL19TZWFyY2hQYWdlVHdvLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Xb3JrcGFnZUNsaWVudC9fd29ya3BhZ2VDbGllbnQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1dvcmtwYWdlQ2xpZW50L193b3JrcGFnZUNsaWVudE9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvV29ya3BhZ2VDbGllbnQvX3dvcmtwYWdlQ2xpZW50VHdvLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Xb3JrcGFnZS9fd29ya3BhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1dvcmtwYWdlL193b3JrcGFnZUZpdmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1dvcmtwYWdlL193b3JrcGFnZUZvdXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1dvcmtwYWdlL193b3JrcGFnZU9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvV29ya3BhZ2UvX3dvcmtwYWdlVGhyZWUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1dvcmtwYWdlL193b3JrcGFnZVR3by5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvX2hvbWUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL19saW5lc0JvdHRvbS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvX2xpbmVzVG9wLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9fbmF2YmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9fcnNCdXR0b24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXJyb3cuY3NzPzU5OWYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9mb250LmNzcz8yNjMyIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXNoZWV0cy9idWxtYS9ncmlkL2NvbHVtbnMuc2Fzcz84NDVkIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXNoZWV0cy9idWxtYS9oZWxwZXJzL3NwYWNpbmcuc2Fzcz9mNzBiIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXNoZWV0cy9tYWluLnNhc3M/ZWMwMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzaGVldHMvcGFnaW5hdGlvbi5sZXNzPzMzZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgJy4vc3R5bGVzaGVldHMvbWFpbi5zYXNzJztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL19ob21lLmpzeCc7XHJcbmltcG9ydCBXb3JrcGFnZSBmcm9tICcuL2NvbXBvbmVudHMvV29ya3BhZ2UvX3dvcmtwYWdlJztcclxuaW1wb3J0IFdvcmtwYWdlQ2xpZW50IGZyb20gJy4vY29tcG9uZW50cy9Xb3JrcGFnZUNsaWVudC9fd29ya3BhZ2VDbGllbnQnO1xyXG5pbXBvcnQgQ29udGFjdFBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL0NvbnRhY3RwYWdlL19jb250YWN0cGFnZSc7XHJcbmltcG9ydCBDbGllbnRQYWdlIGZyb20gJy4vY29tcG9uZW50cy9DbGllbnRwYWdlL19jbGllbnRwYWdlJztcclxuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9qZWN0cGFnZSBmcm9tICcuL2NvbXBvbmVudHMvUHJvamVjdHBhZ2UvX3Byb2plY3RwYWdlJztcclxuaW1wb3J0IFNlYXJjaFBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL1NlYXJjaFBhZ2UvX1NlYXJjaFBhZ2UnO1xyXG5pbXBvcnQgU2VhcmNoUGFnZTIgZnJvbSAnLi9jb21wb25lbnRzL1NlYXJjaFBhZ2UyL19TZWFyY2hQYWdlMic7IFxyXG5pbXBvcnQgXCIuL3N0eWxlc2hlZXRzL2J1bG1hL2dyaWQvY29sdW1ucy5zYXNzXCIgXHJcbmltcG9ydCBcIi4vc3R5bGVzaGVldHMvYnVsbWEvaGVscGVycy9zcGFjaW5nLnNhc3NcIjtcclxuaW1wb3J0IFwiLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgV3JhcHBlciA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICB9LCBbbG9jYXRpb24ucGF0aG5hbWVdKTtcclxuICAgIHJldHVybiBjaGlsZHJlblxyXG4gIH07IFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICA8V3JhcHBlcj5cclxuICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9wcm9qZXRzLzpuYnJcIiBlbGVtZW50PXs8V29ya3BhZ2UgLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9jbGllbnRzXCIgZWxlbWVudD17PFdvcmtwYWdlQ2xpZW50IC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvY29udGFjdFwiIGVsZW1lbnQ9ezxDb250YWN0UGFnZSAvPn0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2NsaWVudC86aWRcIiBlbGVtZW50PXs8Q2xpZW50UGFnZSAvPn0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3Byb2pldC86aWRcIiBlbGVtZW50PXs8UHJvamVjdHBhZ2UgLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9zZWFyY2gvOmluZm9cIiBlbGVtZW50PXs8U2VhcmNoUGFnZSAvPn0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3NlYXJjaGNhdC86aW5mby86bmFtZVwiIGVsZW1lbnQ9ezxTZWFyY2hQYWdlMiAvPn0gLz5cclxuICAgICAgICA8L1JvdXRlcz5cclxuICAgICAgPC9XcmFwcGVyPlxyXG4gICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47IFxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYWluIGZyb20gJy4vTWFpbi5qcyc7XHJcbndpbmRvdy5SZWFjdCA9IFJlYWN0XHJcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XHJcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XHJcbnJvb3QucmVuZGVyKFxyXG5cclxuICAgIDxNYWluIC8+XHJcblxyXG4pO1xyXG5cclxuIiwiaW1wb3J0IE5hdmJhciBmcm9tICcuLi9fbmF2YmFyJztcclxuaW1wb3J0IENsaWVudFBhZ2VPbmUgZnJvbSBcIi4vX2NsaWVudHBhZ2VPbmVcIjtcclxuaW1wb3J0IENsaWVudHBhZ2VUd28gZnJvbSAnLi9fY2xpZW50cGFnZVR3byc7XHJcbmltcG9ydCBDbGllbnRwYWdlVGhyZWUgZnJvbSAnLi9fY2xpZW50cGFnZVRocmVlJztcclxuaW1wb3J0IENsaWVudHBhZ2VGb3VyIGZyb20gJy4vX2NsaWVudHBhZ2VGb3VyJztcclxuaW1wb3J0IENsaWVudHBhZ2VGaXZlIGZyb20gJy4vX2NsaWVudHBhZ2VGaXZlJztcclxuaW1wb3J0IENsaWVudHBhZ2VTaXggZnJvbSAnLi9fY2xpZW50cGFnZVNpeCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gQ2xpZW50cGFnZSgpIHtcclxuXHRjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZEltZywgc2V0SXNMb2FkZWRJbWddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZE5leHRQcmV2LCBzZXRJc0xvYWRlZE5leHRQcmV2XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNJbWdSZWFkeSwgc2V0SW1nUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbcHJlY2ksIHNldFByZWNpXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbc2Vjb25kLCBzZXRTZWNvbmRdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbTmV4dFByZXYsIHNldE5leHRQcmV2XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRpZihpZCl7XHJcblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0XHRmZXRjaChgL2FwaS9jbGllbnRzLyR7aWR9YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRJdGVtcyhyZXN1bHQpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblxyXG5cdFx0XHRmZXRjaChgL2dldEltYWdlc0NsaWVudC8ke2lkfWAse21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0XHQudGhlbihcclxuXHRcdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0bGV0IHRoaXNSZXMgPSBKU09OLnBhcnNlKHJlc3VsdClcclxuXHRcdFx0XHRzZXRJc0xvYWRlZEltZyh0cnVlKTtcclxuXHRcdFx0XHRzZXRJbWFnZXMoSlNPTi5wYXJzZShyZXN1bHQpKTtcclxuXHRcdFx0XHRpZih0aGlzUmVzKXtcclxuXHRcdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyh0aGlzUmVzKS5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0XHRcdGlmKHRoaXNSZXNbaV0uaGVhZGVyKVxyXG5cdFx0XHRcdFx0XHRcdHNldEhlYWRlcih0aGlzUmVzW2ldKVxyXG5cdFx0XHRcdFx0XHRpZih0aGlzUmVzW2ldLmZvY3VzKVxyXG5cdFx0XHRcdFx0XHRcdHNldFByZWNpKHRoaXNSZXNbaV0pXHJcblx0XHRcdFx0XHRcdGlmKHRoaXNSZXNbaV0uc2Vjb25kYWlyZSlcclxuXHRcdFx0XHRcdFx0XHRzZXRTZWNvbmQodGhpc1Jlc1tpXSlcclxuXHRcdFx0XHRcdFx0Ly8gaWYoaW1hZ2VzW2ldLnZpc2libGUpXHJcblx0XHRcdFx0XHRcdC8vIFx0c2V0RGlzcGxheSguLi5pbWFnZXNbaV0pXHJcblx0XHRcdFx0XHRcdGlmKE9iamVjdC5rZXlzKHRoaXNSZXMpLmxlbmd0aC0xID09IGkgfHwgcmVzdWx0ID09IFwiW11cIilcclxuXHRcdFx0XHRcdFx0XHRzZXRJbWdSZWFkeSh0cnVlKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHRcdC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0XHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHRcdGZldGNoKGAvTmV4UHJldi8ke2lkfWAse21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0XHQudGhlbihcclxuXHRcdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0bGV0IE5leHQgPSBKU09OLnBhcnNlKHJlc3VsdFswXSlcclxuXHRcdFx0XHRsZXQgUHJldiA9IEpTT04ucGFyc2UocmVzdWx0WzFdKVxyXG5cdFx0XHRcdGlmKE5leHQgJiYgUHJldil7XHJcblx0XHRcdFx0XHRzZXROZXh0UHJldihbTmV4dCwgUHJldl0pO1xyXG5cdFx0XHRcdFx0aWYoTmV4dFByZXYpe1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhOZXh0UHJldilcclxuXHRcdFx0XHRcdFx0c2V0SXNMb2FkZWROZXh0UHJldih0cnVlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0fSwgW10pXHJcblx0fVxyXG5cclxuXHRpZiAoZXJyb3IpIHtcclxuXHRcdCByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG5cdCAgfSBlbHNlIGlmICghaXNMb2FkZWQgJiYgIWlzSW1nUmVhZHkgJiYgIWlzTG9hZGVkTmV4dFByZXYpIHtcclxuXHRcdHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcblx0ICB9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gKCBcclxuXHRcdFx0XHQ8PlxyXG5cdFx0XHRcdDxOYXZiYXI+PC9OYXZiYXI+XHJcblx0XHRcdFx0PENsaWVudFBhZ2VPbmUgZGF0YT17aXRlbXN9PjwvQ2xpZW50UGFnZU9uZT5cclxuXHRcdFx0XHQ8Q2xpZW50cGFnZVR3byBkYXRhPXtpdGVtc30+PC9DbGllbnRwYWdlVHdvPlxyXG5cdFx0XHRcdDxDbGllbnRwYWdlVGhyZWUgZGF0YT17c2Vjb25kfT48L0NsaWVudHBhZ2VUaHJlZT5cclxuXHRcdFx0XHQ8Q2xpZW50cGFnZUZvdXIgcHJlY2k9e3ByZWNpfSBkYXRhMj17aXRlbXN9PjwvQ2xpZW50cGFnZUZvdXI+XHJcblx0XHRcdFx0PENsaWVudHBhZ2VGaXZlPjwvQ2xpZW50cGFnZUZpdmU+XHJcblx0XHRcdFx0PENsaWVudHBhZ2VTaXggZGF0YT17aXRlbXN9IG5wPXtOZXh0UHJldn0+PC9DbGllbnRwYWdlU2l4PlxyXG5cdFx0XHRcdDwvPlxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudHBhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIENsaWVudHBhZ2VGaXZlKCkge1xyXG5cdEFPUy5pbml0KClcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdvcGFjaXR5Qmx1ZSc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlcic+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJlbnRDbGllbnRWaWV3Jz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2xpZW50R3JpZFZpZXcxJz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYm94RmxleCc+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NsaWVudEdyaWRWaWV3Mic+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2JveEZsZXgnPjwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2xpZW50R3JpZFZpZXczJz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYm94RmxleCc+PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjbGllbnRHcmlkVmlldzQnPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdib3hGbGV4Jz48L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRwYWdlRml2ZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gQ2xpZW50cGFnZUZvdXIoe3ByZWNpLCBkYXRhMn0pIHtcclxuXHRBT1MuaW5pdCgpXHJcblx0aWYoZGF0YTIuZWxlbWVudHByZWNpc2lvbil7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy94OW5lczVWLmpwZylcIn19IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nb3BhY2l0eUJsdWUnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyMic+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyQ2VudGVyQSc+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmVudDIxIG1hcmdpblRvcCc+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFyZ2luVG9wMicgPlxyXG5cdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9J2xpZ2h0IGxldHRlclNwYWNpbmdTJz7DiUzDiU1FTlRTIERFIFBSw4lDSVNJT048L2gzPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQgdGV4dC1oNScgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSd9fSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhMi5lbGVtZW50cHJlY2lzaW9ufX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9JyBib3hDbGllbnQnPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPScgY29udGFpbicgc3R5bGU9e3sgb2JqZWN0Rml0OlwiY292ZXJcIn19IHNyYz17XCIvaW1hZ2VzL2ltYWdlY2xpZW50L1wiICsgcHJlY2kuaW1hZ2V9IGFsdD1cIlwiLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2Plx0XHRcclxuXHJcblxyXG5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9fVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudHBhZ2VGb3VyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBDbGllbnRwYWdlT25lKGRhdGEpIHtcclxuXHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdEFPUy5pbml0KClcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kMVwiIGFsdD1cImhvbWVwYWdlXCI+XHJcblxyXG5cdFx0XHQ8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuXHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZy5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcblx0XHRcdFx0PC92aWRlbz5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5Qmx1ZVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlcjJcIj5cclxuXHRcdFx0XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCIvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi96ZW5pdGgvaW1hZ2VzL2JJTzFyOUYucG5nXCIgYWx0PVwiTG9nb1wiIHdpZHRoPXsyMDB9IGNsYXNzTmFtZT1cImNlbnRlclwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlx0XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsaWVudHBhZ2VUZXh0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cIm1lZGl1bSBtYXJnaW5TdG9wIGNsaWVudERldGFpbFwiPk5PTSBDTElFTlQ8L2gxPlxyXG5cdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9XCJsaWdodCBtYXJnaW5TdG9wIGNsaWVudERldGFpbFwiPlNFQ1RFVVIgROKAmUFDVElWSVTDiTwvaDY+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibGlnaHQgY2xpZW50RGV0YWlsXCI+RFVSw4lFIFBST0pFVDwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsaWdodCBjbGllbnREZXRhaWwyXCI+Q0FUw4lHT1JJRSAxIHwgQ0FUw4lHT1JJRSAyPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlcjNcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDQgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSd9fSBjbGFzc05hbWU9XCJsaWdodCBsZXR0ZXJTcGFjaW5nUyAgZGlzY292ZXJDbGllbnQyXCI+e2RhdGEuZGF0YS5taXNzaW9ufTwvaDQ+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsaWdodCAgZGlzY292ZXJDbGllbnRcIj5Ew4lDT1VWUkVaPC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGluZUNsaWVudFwiID48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50cGFnZU9uZTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIENsaWVudHBhZ2VTaXgoe2RhdGEsIG5wfSkge1xyXG5cdEFPUy5pbml0KClcclxuXHRpZihucFswXSl7XHJcblx0XHRpZihucFswXVswXSA9PSAnbnVsbCcpXHJcblx0XHRcdG5wWzBdWzBdID0gZmFsc2U7XHJcblx0XHRpZihucFswXVsxXSA9PSAnbnVsbCcpXHJcblx0XHRcdG5wWzFdWzBdID0gZmFsc2U7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGVtaWJsb2NPcGFjaXR5Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lckNlbnRlciBtYXJnaW5Ub3BTJz5cclxuXHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nbWVkaXVtIGNlbnRlclRleHQnPlVOIFTDiU1PSUdOQUdFPC9oND5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xpZ2h0IGNlbnRlclRleHQnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmRhdGEudGVtb2lnbmFnZX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHJcblx0XHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCJ9fSBjbGFzc05hbWU9J2RlbWlibG9jQ2xpZW50Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkZW1pYmxvY09wYWNpdHknPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyZW50Q2xpZW50TmV4dFByZXYnPlxyXG5cclxuXHRcdFx0XHRcdFx0XHR7bnBbMV1bMF0gJiZcclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdDbGllbnROZXh0UHJldjEnIG9uQ2xpY2s9eygpPT57bG9jYXRpb24uaHJlZiA9IFwiL2NsaWVudC9cIisgbnBbMV1bMF0uaWR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT0nbGlnaHQgcmlnaHRUZXh0IG1hcmdpblRvcFMnPlBST0pFVCBQUsOJQ8OJREVOVDwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9J3JpZ2h0VGV4dCc+e25wWzFdWzBdLm5vbUNsaWVudH08L2g1PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPSdsaWdodCByaWdodFRleHQnPntucFsxXVswXS5taXNzaW9ufTwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj59XHJcblxyXG5cdFx0XHRcdFx0XHRcdHtucFswXVswXSAmJiA8ZGl2IGNsYXNzTmFtZT0nQ2xpZW50TmV4dFByZXYyJyBvbkNsaWNrPXsoKT0+e2xvY2F0aW9uLmhyZWYgPSBcIi9jbGllbnQvXCIrIG5wWzBdWzBdLmlkfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9J2xpZ2h0IGxlZnRUZXh0IG1hcmdpblRvcFMnPlBST0pFVCBTVUlWQU5UPC9oNj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT0nbGVmdFRleHQnPntucFswXVswXS5ub21DbGllbnR9PC9oNT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT0nbGlnaHQgbGVmdFRleHQnPntucFswXVswXS5taXNzaW9ufTwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj59XHJcblx0XHRcdFx0XHRcdFx0ey8qIDxhIGhyZWY9e1wiL2NsaWVudC9cIitucFsxXVswXS5pZH0+ICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudHBhZ2VTaXg7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gQ2xpZW50cGFnZVRocmVlKCkge1xyXG5cdEFPUy5pbml0KClcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyRGFya0JsdWVDbGllbnQnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lckZsZXgnPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT0nY29udGFpbicgc3JjPVwiL3plbml0aC9pbWFnZXMvN2NBNjREdS5qcGdcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50cGFnZVRocmVlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBDbGllbnRwYWdlVHdvKGRhdGEpIHtcclxuXHRBT1MuaW5pdCgpXHJcblx0aWYoZGF0YS5kYXRhLmVuamV1IHx8IGRhdGEuZGF0YS5oaXN0b2lyZSB8fCBkYXRhLmRhdGEucmVwb25zZSl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPSdkZW1pYmxvY0NsaWVudCc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGVtaWJsb2NDbGllbnRPcGFjaXR5Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmVudENsaWVudCc+XHJcblx0XHRcdFx0XHRcdFx0e2RhdGEuZGF0YS5lbmpldSAmJlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjbGllbnRHcmlkMSc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdsaWdodCc+VU5FIEVOSkVVPC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmRhdGEuZGF0YS5lbmpldX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PiBcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuaGlzdG9pcmUgJiZcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2xpZW50R3JpZDInPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nbGlnaHQnPlVORSBISVNUT0lSRTwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGlnaHQgY29udGFpbmVyQ2VudGVyQ2xpZW50JyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLmRhdGEuaGlzdG9pcmV9fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEucmVwb25zZSAmJlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjbGllbnRHcmlkMyc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdsaWdodCc+VU5FIFJFUE9OU0U8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xpZ2h0IGNvbnRhaW5lckNlbnRlckNsaWVudCcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YS5kYXRhLnJlcG9uc2V9fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudHBhZ2VUd287XHJcbiIsImltcG9ydCBOYXZiYXIgZnJvbSAnLi4vX25hdmJhcic7XHJcbmltcG9ydCBSc0J1dHRvbiBmcm9tICcuLi9fcnNCdXR0b24nO1xyXG5pbXBvcnQgTGluZXNUb3AgZnJvbSAnLi4vX2xpbmVzVG9wJztcclxuaW1wb3J0IExpbmVzQm90dG9tIGZyb20gJy4uL19saW5lc0JvdHRvbSc7XHJcbmltcG9ydCBDb250YWN0UGFnZU9uZSBmcm9tICcuL19jb250YWN0cGFnZU9uZSc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIENvbnRhY3RQYWdlKCkge1xyXG5cdHJldHVybiAoIFxyXG5cdFx0PD5cclxuXHRcdDxOYXZiYXI+PC9OYXZiYXI+XHJcblx0XHQ8UnNCdXR0b24+PC9Sc0J1dHRvbj5cclxuXHRcdDxMaW5lc1RvcD48L0xpbmVzVG9wPlxyXG5cdFx0PExpbmVzQm90dG9tPjwvTGluZXNCb3R0b20+XHJcblx0XHQ8Q29udGFjdFBhZ2VPbmU+PC9Db250YWN0UGFnZU9uZT5cclxuXHJcblxyXG5cdFx0PC8+XHJcblx0ICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RQYWdlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcclxuaW1wb3J0IHdpdGhSZWFjdENvbnRlbnQgZnJvbSAnc3dlZXRhbGVydDItcmVhY3QtY29udGVudCdcclxuXHJcblxyXG5mdW5jdGlvbiBDb250YWN0UGFnZU9uZSgpIHtcclxuXHRjb25zdCBNeVN3YWwgPSB3aXRoUmVhY3RDb250ZW50KFN3YWwpXHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdGVtYWlsOiAnJyxcclxuXHRcdG5hbWU6ICcnLFxyXG5cdFx0bWVzc2FnZTogJycsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wZXJzaXN0KCk7XHJcblx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHRcdGNvbnNvbGUubG9nKHZhbHVlcy5lbWFpbClcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG5cdFx0ZS50YXJnZXQuY2hpbGRyZW5bM10uZGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0TXlTd2FsLmZpcmUoe1xyXG5cdFx0XHR0ZXh0OiAnVW4gbWFpbCBkZSBjb25maXJtYXRpb24gdm91cyBhIMOpdMOpIGVudm95w6knLFxyXG5cdFx0XHR0b2FzdDogdHJ1ZSxcclxuXHRcdFx0aWNvbjogJ3N1Y2Nlc3MnLFxyXG5cdFx0XHR0aXRsZTogJ0JpZW4gcmXDp3UhJyxcclxuXHRcdFx0cG9zaXRpb246ICd0b3AtcmlnaHQnLFxyXG5cdFx0XHRzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcblx0XHRcdHRpbWVyOiAzMDAwLFxyXG5cdFx0XHR0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG5cdFx0XHRkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuXHRcdFx0ICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcblx0XHRcdCAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcblx0XHRcdH1cclxuXHRcdCAgfSk7XHJcblx0XHRjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7IFwiZW1haWxcIjogdmFsdWVzLmVtYWlsLCBcIm5hbWVcIjogdmFsdWVzLm5hbWUsIFwibWVzc2FnZVwiOiB2YWx1ZXMubWVzc2FnZSwgXCJuZXdcIjogdHJ1ZSB9KSxcclxuXHRcdH07XHJcblx0XHQvLyBmZXRjaCgnL3NlbmRlbWFpbCcsIHJlcXVlc3RPcHRpb25zKVxyXG5cdFx0Ly8gXHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHRmZXRjaChgL3NlbmRlbWFpbGAse21ldGhvZDonUE9TVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sYm9keTogSlNPTi5zdHJpbmdpZnkoeyBcImVtYWlsXCI6IHZhbHVlcy5lbWFpbCwgXCJuYW1lXCI6IHZhbHVlcy5uYW1lLCBcIm1lc3NhZ2VcIjogdmFsdWVzLm1lc3NhZ2UsIFwibmV3XCI6IHRydWUgfSl9KVxyXG5cdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHQudGhlbihcclxuXHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHRcdH1cclxuXHRcdClcclxuXHR9O1xyXG5cdEFPUy5pbml0KClcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kMVwiIGFsdD1cImhvbWVwYWdlXCI+XHJcblxyXG5cdFx0XHQ8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuXHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZy5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcblx0XHRcdFx0PC92aWRlbz5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5Qmx1ZVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlcjJcIj5cclxuXHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi96ZW5pdGgvaW1hZ2VzL2JJTzFyOUYucG5nXCIgYWx0PVwiTG9nb1wiIHdpZHRoPXsyMDB9IGNsYXNzTmFtZT1cImNlbnRlclwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmVudDUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXIyIGRpdkM0XCIgPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwibWVkaXVtXCI+Q29udGFjdGV6IE5vdXM8L2gxPiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT1cImxpZ2h0XCI+UHLDqXNlbnRleiB2b3RyZSBwcm9qZXQgZXQgbGFpc3Nlei1ub3VzIHZvc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpbmZvcm1hdGlvbnMgZGUgY29udGFjdC4gTm91cyByZXZpZW5kcm9ucyB2ZXJzXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZvdXMgZGFucyB1biBkw6lsYWkgZGUgMjRoLjwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX2dyb3VwIGZpZWxkICBkaXZDMVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaW5wdXRcIiBjbGFzc05hbWU9XCJmb3JtX19maWVsZFwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIG5hbWU9XCJuYW1lXCIgaWQ9J25hbWUnIHZhbHVlPXt2YWx1ZXMubmFtZX1vbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHJlcXVpcmVkPjwvaW5wdXQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtX19sYWJlbFwiPlZvdHJlIG5vbTwvbGFiZWw+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9fZ3JvdXAyIGZpZWxkIGRpdkMyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJpbnB1dFwiIGNsYXNzTmFtZT1cImZvcm1fX2ZpZWxkXCIgcGxhY2Vob2xkZXI9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPSdlbWFpbCcgdmFsdWU9e3ZhbHVlcy5lbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSByZXF1aXJlZCAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxcIj5Wb3RyZSBhZHJlc3NlIGUtbWFpbDwvbGFiZWw+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dGFyZWFfX2dyb3VwIGZpZWxkIGRpdkMzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIHR5cGU9XCJpbnB1dFwiIGNsYXNzTmFtZT1cImZvcm1fX2ZpZWxkXCIgcGxhY2Vob2xkZXI9XCJtZXNzYWdlXCIgbmFtZT1cIm1lc3NhZ2VcIiBpZD0nbWVzc2FnZScgdmFsdWU9e3ZhbHVlcy5tZXNzYWdlfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHJlcXVpcmVkIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtX19sYWJlbFwiPlZvdHJlIGJlc29pbjwvbGFiZWw+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e21hcmdpblRvcDpcIjUwcHhcIn19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWFyZ2luQm90dG9tMiBidG5TIGxpZ2h0IGxldHRlclNwYWNpbmdNXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEVudm95ZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuIFxyXG4vL21vZGlmaWVyIGEgcGFydGlyIGRlIGxhIGxpZ25lIFxyXG4vLyBham91dGVyIDxmb3JtPiA8ZmllbGQ+IGV0Y1xyXG4vLyBmdW5jdGlvbiBjb250YWN0IHBhZ2VPbmUgbmUgZmFpdCByaWVuIG5lIGRlY2xhcmUgcmllbiBldGMuLiBcclxuLy9kZWlmaW5pciB1biBldGF0IGQgb3JpZ2luZSBwb3VyIGxlcyB6b25lIGRlIHRleHRlIFxyXG4vL2Fqb3V0ZXIgdW4gYnV0dG9uIHF1YW5kIGNsaXF1ZSBwcmVuZCBsZXMgaW5mb3JtYXRpb24gZGFucyBsZXMgY2hhbXBzIFxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0UGFnZU9uZTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1wYXJhbGxheCc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gQWN0aW9uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCIgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCJcclxuICAgICAgICBhbHQ9XCJhY3Rpb25cIlxyXG4gICAgICA+ICovfVxyXG4gICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL2FXRUxoazhBLmpwZWdcIiBzdHJlbmd0aD17MH0+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiNTBweFwiIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlcjJcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyMlwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdHJlQSBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5TdG9wXCJcclxuICAgICAgICAgICAgICBpZD1cInBhdGNobmF6ZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBQ1RJT05cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImxpZ2h0IGxldHRlclNwYWNpbmdTIHNvdXNUaXRyZVwiPlxyXG4gICAgICAgICAgICAgIFNFIENPTkNFTlRSRVIgU1VSIEzigJlFU1NFTlRJRUwgOiBWT1VTXHJcbiAgICAgICAgICAgIDwvaDY+XHJcblxyXG4gICAgICAgICAgICA8U3dpcGVyIHNsaWRlc1BlclZpZXc9ezN9IHNwYWNlQmV0d2Vlbj17LTEwMH0gY2xhc3NOYW1lPVwic3dpcGVyXCI+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvamV0c1wiIGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3hDYXJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcclxuICAgICAgICAgICAgICAgICAgICAgIFwidXJsKC96ZW5pdGgvaW1hZ2VzL3BleGVscy1hbmRyZWEtcGlhY3F1YWRpby0zNzYwMDkzLmpwZylcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcEZpbHRlcjogXCJibHVyKDVweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dEFjdGlvbjEgbGV0dGVyU3BhY2luZ1MgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENPTlNFSUxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFDQ09NUEFHTkVNRU5UXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMzYwwrBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9wcm9qZXRzXCIgY2xhc3NOYW1lPVwidGV4dERlY29cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveENhcnJlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1cmwoL3plbml0aC9pbWFnZXMvQ09NTS5qcGcpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wRmlsdGVyOiBcImJsdXIoNXB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0QWN0aW9uMSBsZXR0ZXJTcGFjaW5nUyBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ09NTVVOSUNBVElPTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU09MVVRJT05cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTVVItTUVTVVJFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuXHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvamV0c1wiIGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3hDYXJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcclxuICAgICAgICAgICAgICAgICAgICAgIFwidXJsKC96ZW5pdGgvaW1hZ2VzL0VWRU5ULmpwZylcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcEZpbHRlcjogXCJibHVyKDVweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dEFjdGlvbjEgbGV0dGVyU3BhY2luZ1MgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVWRU5UXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBMSVZSQUlTT05cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDTMOJUyBFTiBNQUlOXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuXHJcbiAgICAgICAgICAgIDwvU3dpcGVyPlxyXG5cclxuICAgICAgICAgICAgPGg0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0cmVCIGxpZ2h0IGxldHRlclNwYWNpbmcgY29udGFpbmVyIGNlbnRlciBhY2Nyb2NoZVwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQUdJUiBFVCBSw4lBR0lSIEFWRUMgVk9VU1xyXG4gICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blMgY2VudGVyIGxpZ2h0IGxldHRlclNwYWNpbmdNIG1hcmdpbkJvdHRvbTJcIj5cclxuICAgICAgICAgICAgICBFTiBDT01QUkVORFJFICtcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3Rpb247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tIFwicmVhY3QtcGFyYWxsYXhcIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIENoaWZmcmVzKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG5cdDxQYXJhbGxheCBiZ0ltYWdlPVwiL3plbml0aC9pbWFnZXMvWjF6SUpDS2suanBlZ1wiIHN0cmVuZ3RoPXs4MDB9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgLy8gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy94OW5lczVWLmpwZylcIiB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImRlbWlibG9jXCJcclxuICAgICAgICBhbHQ9XCJjaGlmZnJlc1wiXHJcbiAgICAgID5cclxuICAgICAgICB7LyogPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcbiAgICAgICAgICA8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZzYubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG4gICAgICAgIDwvdmlkZW8+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtaWJsb2MyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyZW50MlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2MVwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1lZGl1bSBjaGlmZnJlc1wiPjIwMTY8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImxpZ2h0IGNoaWZmcmVzMlwiPkFOTsOJRSBERSBDUkVBVElPTjwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWVkaXVtIGNoaWZmcmVzXCI+KzMwMDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibGlnaHQgY2hpZmZyZXMyXCI+Q1LDiUFUSU9OUyBQSE9UT1M8L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2M1wiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1lZGl1bSBjaGlmZnJlc1wiPisxNjA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImxpZ2h0IGNoaWZmcmVzMlwiPlBST0pFVFMgUsOJQUxJU8OJUzwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXY0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWVkaXVtIGNoaWZmcmVzXCI+KzE1MDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibGlnaHQgY2hpZmZyZXMyXCI+UsOJQUxJU0FUSU9OUyBWSUTDiU9TPC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjVcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZWRpdW0gY2hpZmZyZXNcIj4rMjAwPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJsaWdodCBjaGlmZnJlczJcIj5DUsOJQVRJT05TIERJR0lUQUxFUyA8L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2NlwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1lZGl1bSBjaGlmZnJlc1wiPjEwMCU8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImxpZ2h0IGNoaWZmcmVzMlwiPk1BREUgSU4gRlJBTkNFPC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblx0ICA8L1BhcmFsbGF4PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hpZmZyZXM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcclxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1wYXJhbGxheCc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBDcmVhdGlvbihpdGVtKSB7XHJcbiAgbGV0IHNsaWRlciA9IFtdXHJcbiAgY29uc29sZS5sb2coaXRlbSlcclxuICBpZihpdGVtLml0ZW0ubGVuZ3RoID4wKSB7XHJcbiAgICBpdGVtLml0ZW0uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgbGV0IG5ld1NsaWRlciA9ICg8U3dpcGVyU2xpZGUga2V5PXtlbGVtZW50LmlkfSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj48ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzBdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2BpbWFnZXMvaW1hZ2Vwcm9qZXQvJHtlbGVtZW50LmNyZWF0aW9ufWB9IGFsdD1cIlwiIC8+PC9kaXY+PC9Td2lwZXJTbGlkZT4pXHJcbiAgICAgIHNsaWRlci5wdXNoKG5ld1NsaWRlcilcclxuICAgIH0pO1xyXG4gIH1lbHNle1xyXG4gICAgc2xpZGVyID0gKCA8aDEgY2xhc3NOYW1lPVwidGl0cmVBIG1lZGl1bSBsZXR0ZXJTcGFjaW5nIG1hcmdpblN0b3BcIj5yaWVuIGEgdm9pcjwvaDE+IClcclxuICB9XHJcbiAgZnVuY3Rpb24gQmx1ckRldGFpbChlKXtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cig0cHgpXCI7XHJcbiAgICBlLnRhcmdldC5jaGlsZHJlblswXS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIlxyXG4gIH1cclxuICBmdW5jdGlvbiBSZW1vdmVCbHVyRGV0YWlsKGUpe1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gXCJibHVyKDApXCI7XHJcbiAgICBlLnRhcmdldC5jaGlsZHJlblswXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy94OW5lczVWLmpwZylcIn19IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cclxuXHJcbiAgICAgICAgPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZzQubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+ICovfVxyXG4gICAgICB7LyogPEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50NFwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj48L0VsZW1lbnQ+ICovfVxyXG4gICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL1oxeklKQ0trLmpwZWdcIiBzdHJlbmd0aD17ODAwfT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3twYWRkaW5nVG9wOiAnNTBweCd9fT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBkYXRhLWFvcz1cInpvb20taW5cIlxyXG4gICAgICAgICAgZGF0YS1hb3MtbWlycm9yPVwiXCJcclxuICAgICAgICAgIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiXHJcbiAgICAgICAgICBkYXRhLWFvcy1hbmNob3ItcGxhY2VtZW50PVwiXCJcclxuICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyMlwiPlxyXG4gICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRyZUEgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ1LDiUFUSU9OXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxoNlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpZ2h0IGxldHRlclNwYWNpbmdTIHNvdXNUaXRyZVwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgVU5FIEhJU1RPSVJFLiBVTiBFTkpFVS4gVU5FIFLDiVBPTlNFLlxyXG4gICAgICAgICAgICA8L2g2PlxyXG5cclxuICAgICAgICAgICAgPFN3aXBlclxyXG4gICAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzUwMHB4J319XHJcbiAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldz17MX1cclxuICAgICAgICAgICAgICBjZW50ZXJlZFNsaWRlcz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuPXswfVxyXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnRzPXt7XHJcbiAgICAgICAgICAgICAgICA2NDA6IHtcclxuICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAxMDI0OiB7XHJcbiAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDcsXHJcbiAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd2lwZXIyXCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c2xpZGVyfVxyXG4gICAgICAgICAgICAgIHsvKiA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVsxXS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgL3plbml0aC9pbWFnZXMvX0RTQzEzMDAuanBnYH0gYWx0PVwiXCIgLz48L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzJdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy8xSjRBNTAwOSAoMSkuanBnYH0gYWx0PVwiXCIgLz48L2Rpdj4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVszXS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgL3plbml0aC9pbWFnZXMvQ2FwdHVyZSBk4oCZw6ljcmFuIDIwMjItMTItMDMgw6AgMjEuMzMuMjkucG5nYH0gYWx0PVwiXCIgLz48L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzRdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy9JTUdfNzQ4Ny5qcGdgfSBhbHQ9XCJcIiAvPjwvZGl2PiAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzVdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy9JTUdfMDAwNC5qcGdgfSBhbHQ9XCJcIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCIgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9IG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX0+PGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+PHAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgZGlzcGxheTogXCJub25lXCIsIHdpZHRoOiBcIjIwMHB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCIwcHhcIiwgdG9wOlwiMjAwcHhcIn19PntpdGVtLml0ZW1bNF0ubWlzc2lvbn08L3A+PC9kaXY+PGltZyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17YC96ZW5pdGgvaW1hZ2VzL0lNR185ODM4LmpwZ2B9IGFsdD1cIlwiIC8+PC9kaXY+ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCIgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9IG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX0+PGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+PHAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgZGlzcGxheTogXCJub25lXCIsIHdpZHRoOiBcIjIwMHB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCIwcHhcIiwgdG9wOlwiMjAwcHhcIn19PntpdGVtLml0ZW1bNV0ubWlzc2lvbn08L3A+PC9kaXY+PGltZyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17YC96ZW5pdGgvaW1hZ2VzL0RJQV8wNzU5LmpwZ2B9IGFsdD1cIlwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT4gKi99XHJcbiAgICAgICAgICAgIDwvU3dpcGVyPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5cclxuICAgICAgICAgICAgPGg0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0cmVCIGxpZ2h0IGxldHRlclNwYWNpbmcgY29udGFpbmVyIGNlbnRlciBhY2Nyb2NoZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBQUk9QVUxTRVIgTOKAmUlNQUdJTkFJUkUgUExVUyBMT0lOXHJcbiAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXJnaW5Cb3R0b20yIGJ0blMgY2VudGVyIGxpZ2h0IGxldHRlclNwYWNpbmdNXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2pldHMvMVwiIGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcbiAgICAgICAgICAgICAgICAgRMOJQ09VVlJJUiArPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGlvbjtcclxuXHJcbi8vIGNvbnN0IGl0ZW1zID0gWycnLCAnJywgJycsICcnLCAnJywgJycsJycsJycsJycsJycsJycsJycsXVxyXG4vLyBjb25zdCBzZXR0aW5nID0ge1xyXG4vLyAgIGRyYWdTcGVlZDogMC40LFxyXG4vLyAgIGl0ZW1XaWR0aDogMjAwLFxyXG4vLyAgIGl0ZW1IZWlnaHQ6IDQ2NCxcclxuLy8gICBpdGVtU2lkZU9mZnNldHM6IDQwLFxyXG4vLyB9XHJcbi8vIGNvbnN0IGl0ZW1TdHlsZSA9IHtcclxuLy8gICB3aWR0aDogYCR7c2V0dGluZy5pdGVtV2lkdGh9cHhgLFxyXG4vLyAgIGhlaWdodDogYCR7c2V0dGluZy5pdGVtSGVpZ2h0fXB4YCxcclxuLy8gICBtYXJnaW46IGAwcHggJHtzZXR0aW5nLml0ZW1TaWRlT2Zmc2V0c31weGBcclxuLy8gfVxyXG5cclxue1xyXG4gIC8qIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXJDJz5cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWwgX2RhdGE9e2l0ZW1zfSB7Li4uc2V0dGluZ30+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1zLm1hcCgoaSwgX2kpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e19pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpdGVtJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4uaXRlbVN0eWxlIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1wYXJhbGxheCc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBFbW90aW9uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCIgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCJcclxuICAgICAgICBhbHQ9XCLDqW1vdGlvblwiXHJcbiAgICAgID4gKi99XHJcbiAgICAgICAgey8qIDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcyLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuICAgICAgICA8L3ZpZGVvPiAqL31cclxuICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL1oxeklKQ0trLmpwZWdcIiBzdHJlbmd0aD17ODAwfT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17e3BhZGRpbmdUb3A6ICc1MHB4J319PlxyXG4gICAgICAgIDxkaXYgZGF0YS1hb3M9XCJ6b29tLWluXCIgZGF0YS1hb3MtbWlycm9yPVwidHJ1ZVwiZGF0YS1hb3Mtb25jZT1cImZhbHNlXCJkYXRhLWFvcy1hbmNob3ItcGxhY2VtZW50PVwidG9wLWNlbnRlclwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiPiAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyMiBcIj5cclxuICAgICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdHJlQSBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5TdG9wXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIMOJTU9USU9OXHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8aDZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpZ2h0IGxldHRlclNwYWNpbmdTIHNvdXNUaXRyZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBGQUlSRSBWSUJSRVIgTEEgQ09SREUgSU5WSVNJQkxFXHJcbiAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckZsZXggY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveFZpZGVvXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuXHRcdFx0XHRcdDxpZnJhbWUgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgb2JqZWN0Rml0OiAnY292ZXInfX0gc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvRTFURlpXYkIzNk1cIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgZnJhbWVCb3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxoNFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0cmVCIGxpZ2h0IGxldHRlclNwYWNpbmcgY29udGFpbmVyIGNlbnRlciBhY2Nyb2NoZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTVVNDSVRFUiBM4oCZRU1PVElPTiBFTiBVTiBJTlNUQU5UXHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXJnaW5Cb3R0b20yIGJ0blMgY2VudGVyIGxpZ2h0IGxldHRlclNwYWNpbmdNXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBFTiBWT0lSICtcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbW90aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcbmltcG9ydCB3aXRoUmVhY3RDb250ZW50IGZyb20gJ3N3ZWV0YWxlcnQyLXJlYWN0LWNvbnRlbnQnXHJcblxyXG5cclxuZnVuY3Rpb24gRm9vdGVyKCkge1xyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRlbWFpbDogJycsXHJcblx0fSk7XHJcblx0Y29uc3QgTXlTd2FsID0gd2l0aFJlYWN0Q29udGVudChTd2FsKVxyXG5cclxuXHRjb25zdCBoYW5kbGVFbWFpbElucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wZXJzaXN0KCk7XHJcblx0XHRzZXRWYWx1ZXMoKHZhbHVlcykgPT4gKHtcclxuXHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRlbWFpbDogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG5cdFx0XHRcclxuXHRcdH0pKTtcclxuXHRcdGNvbnNvbGUubG9nKHZhbHVlcy5lbWFpbClcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZS50YXJnZXQuY2hpbGRyZW5bMV0uZGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0TXlTd2FsLmZpcmUoXHJcblx0XHRcdCdNZXJjaSEnLFxyXG5cdFx0XHQnVm90cmUgZW1haWwgw6AgYmllbiDDqXTDqSBlbnJlZ2lzdHLDqScsXHJcblx0XHRcdCdzdWNjZXNzJ1xyXG5cdFx0ICApXHJcblx0XHRjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7IFwiZW1haWxcIjogdmFsdWVzLmVtYWlsLCBcIm5ld1wiOiB0cnVlIH0pLFxyXG5cdFx0fTtcclxuXHRcdGZldGNoKCcvYXBpL2VtYWlscycsIHJlcXVlc3RPcHRpb25zKVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0fTtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdCAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL254c1gwb0djLmpwZWdcIiBzdHJlbmd0aD17MH0+XHJcblxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJmb290ZXJcIiBjbGFzc05hbWU9XCJkZW1pYmxvY0Zvb3RlclwiIGFsdD1cImZvb3RlclwiPlxyXG4gICAgICBcdFx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbWlibG9jMlwiID5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJlbXB0eVNcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGgyICBjbGFzc05hbWU9XCJ0aXRyZUUgbGlnaHQgbGV0dGVyU3BhY2luZyBtYXJnaW5TdG9wXCI+RVQgU0kgT04gU0UgTEFOw4dBSVQgPzwvaDI+XHJcblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuTCBjZW50ZXIgbGlnaHQgbGV0dGVyU3BhY2luZ01cIj5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayB0bz1cIi9jb250YWN0XCIgY2xhc3NOYW1lPVwidGV4dERlY29cIj5DT05UQUNUPC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cIiBsaWdodCBsZXR0ZXJTcGFjaW5nIGNvbnRhaW5lciBjZW50ZXJcIj5FTlNFTUJMRSwgw4lDUklWT05TIFZPVFJFIEhJU1RPSVJFPC9oND5cclxuXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8RWxlbWVudCBuYW1lPVwic2Nyb2xsLXRvLWVsZW1lbnQ5XCIgY2xhc3NOYW1lPVwiZWxlbWVudFwiPjwvRWxlbWVudD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbWlibG9jRm9vdGVyMlwiIGFsdD1cImZvb3RlclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1pYmxvYzJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYXJlbnQ0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkaXZDXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImNlbnRlciBtYi01XCIgc3JjPVwiL3plbml0aC9pbWFnZXMvd1gyTENJVC5wbmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjIyMFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSd1bDInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdsaTIgbXQtMyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPlpFTklUSDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+IFZBTCBE4oCZRVVST1BFIDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+SEVMTE9AQUdFTkNFWkVOSVRILkNPTTwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+MDYuMTEuODYuNjUuODA8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRpdkRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJ0aXRyZUQgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luQm90dG9tXCIgc3R5bGU9e3ttYXJnaW5Ub3A6XCIyMHB4XCJ9fT5SRUpPSUdORVogPGJyIC8+IEzigJlBVkVOVFVSRTwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJzMiBjZW50ZXJGbGV4IGNlbnRlclwiPlxyXG4gICAgICBcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJmYjJcIiBocmVmPSdodHRwczovL3d3dy5mYWNlYm9vay5jb20vQUdFTkNFWkVOSVRILyc+PC9hPlxyXG4gICAgICBcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJpbnN0YTJcIiBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2FnZW5jZXplbml0aC8/aGw9ZnInPjwvYT5cclxuICAgICAgXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibGlua2VkaW4yXCIgaHJlZj0naHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvYWdlbmNlLXplbml0aC8nPjwvYT5cclxuXHRcdFx0XHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwidGl0cmVEIG1lZGl1bSBsZXR0ZXJTcGFjaW5nIG1hcmdpbkJvdHRvbSBcIj4gTkVXU0xFVFRFUjwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dE1haWwgY2VudGVyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImVtYWlsXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPVwiZW1haWxcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT1cIjMwXCIgbmFtZT1cImVtYWlsXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZXMuZW1haWx9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVFbWFpbElucHV0Q2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZD48L2lucHV0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRpdkVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJ0aXRyZUMgbWVkaXVtIGxldHRlclNwYWNpbmdcIj5TSVRFIE1BUDwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSd1bDInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdsaTInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJmb290ZXJUZXh0IGxpZ2h0IHRleHQtaDVcIj5BQ0NVRUlMPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdsaTInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJmb290ZXJUZXh0IGxpZ2h0IHRleHQtaDVcIj5DTElFTlQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J2xpMic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPlBST0pFVFM8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J2xpMic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPkNPTlRBQ1Q8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsaWdodCBmb290ZXJDcmVkaXQgbGV0dGVyU3BhY2luZ1NcIj7CqSBBR0VOQ0UgWkVOSVRIIC8gVE9VUyBEUk9JVFMgUsOJU0VSVsOJUzwvcD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgXHJcblxyXG5cclxuXHRcdFx0PC9QYXJhbGxheD5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFPUyBmcm9tIFwiYW9zXCI7XHJcbmltcG9ydCBcImFvcy9kaXN0L2Fvcy5jc3NcIjtcclxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1wYXJhbGxheCc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBIb21lcGFnZSgpIHtcclxuICBBT1MuaW5pdCgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPGRpdiAgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiIGFsdD1cImhvbWVwYWdlXCIgPiAqL31cclxuXHJcbiAgICAgIDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG5cdFx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+IFxyXG4gICAgICB7LyogPFBhcmFsbGF4IGJnSW1hZ2U9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwMjEzNDI0OTEyNi05ZjM3NTVhNTBkNzg/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE0NzAmcT04MFwiIHN0cmVuZ3RoPXs0MDB9PiAqL31cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eUJsdWVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyMlwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlcjJcIj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiODAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi96ZW5pdGgvaW1hZ2VzL2JJTzFyOUYucG5nXCIgYWx0PVwiTG9nb1wiIHdpZHRoPXszMzB9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmJ2aSBjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZW1pYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiODAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGhpblwiPkZBSVRFUzwvc3Bhbj4gQlJJTExFUntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGhpblwiPiBWT1MgPC9zcGFuPklEw4lFU1xyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCI4MDBcIlxyXG4gICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICA8RWxlbWVudCBuYW1lPVwic2Nyb2xsLXRvLWVsZW1lbnQyXCIgY2xhc3NOYW1lPVwiZWxlbWVudFwiPjwvRWxlbWVudD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8L1BhcmFsbGF4PiAqL31cclxuICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1wYXJhbGxheCc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlc2hlZXRzL2J1bG1hL2hlbHBlcnMvc3BhY2luZy5zYXNzXCJcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIEluc3RhZmx1eCgpIHtsZXQgaW5zdGEgPSB1c2VSZWYobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICBzY3JpcHQuc3JjID0gXCJodHRwczovL2Nkbi5saWdodHdpZGdldC5jb20vd2lkZ2V0cy9saWdodHdpZGdldC5qc1wiXHJcbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG5cclxuICB9LCBbXSk7XHJcblxyXG5cclxuXHJcblxyXG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcclxuICB9XHJcblxyXG5cclxuXHRcdHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgey8qIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiIGFsdD1cIiNhZ2VuY2V6ZW5pdGhcIj5cclxuICAgICAgPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZzgubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+ICovfVxyXG4gICAgICAgIDxQYXJhbGxheFxyXG4gICAgICAgICAgYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL1oxeklKQ0trLmpwZWdcIlxyXG4gICAgICAgICAgc3RyZW5ndGg9ezgwMH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGRhdGEtYW9zPVwiem9vbS1pblwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zLW1pcnJvcj1cInRydWVcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcy1hbmNob3ItcGxhY2VtZW50PVwidG9wLWNlbnRlclwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogJzUwcHgnfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyMlwiPlxyXG4gICAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0cmVBIG1lZGl1bSBsZXR0ZXJTcGFjaW5nIG1hcmdpblN0b3BcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgI0FHRU5DRVpFTklUSFxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHJlZj17aW5zdGF9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXJGbGV4XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6XCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwgcGFkZGluZ1RvcDpcIjUwcHhcIn19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlMVwiID48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlMlwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGUzXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PjxwIGNsYXNzTmFtZT1cIklNQUdJTkVSXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+SU1BR0lORVI8L3A+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PjxwIGNsYXNzTmFtZT1cIkNSw4lFUlwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPkNSw4lFUjwvcD48L2Rpdj5cclxuICAgICAgICAgIDxkaXY+PHAgY2xhc3NOYW1lPVwiUsOKVkVSXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+UsOKVkVSPC9wPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdj48cCBjbGFzc05hbWU9XCJFTlNFTUJMRVwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPkVOU0VNQkxFPC9wPjwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlNFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGU1XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTZcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTdcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlOFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGU5XCI+PC9kaXY+IFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGUxMFwiPjwvZGl2PiBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlMTFcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlMTJcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlMTNcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlMTRcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlMTVcIj48L2Rpdj4gICovfVxyXG4gICAgICAgICAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvL2xpZ2h0d2lkZ2V0LmNvbS93aWRnZXRzLzUzMGM1OTBjNjZjZjVmZmE4NDRkZWQ3NTFhNmE0Y2Q1Lmh0bWxcIlxyXG4gICAgICAgICAgICAgICAgICBzY3JvbGxpbmc9XCJub1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsbG93dHJhbnNwYXJlbmN5PVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpZ2h0d2lkZ2V0LXdpZGdldFwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6XCI3MCVcIiwgYm9yZGVyOlwiMFwifX1cclxuICAgICAgICAgICAgICAgID48L2lmcmFtZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aDRcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOlwiMTAwcHhcIn19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaWdodCBsZXR0ZXJTcGFjaW5nIGNvbnRhaW5lciBjZW50ZXIgbWFyZ2luVG9wWExcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgVU4gVU5JVkVSUyBERSBQT1NTSUJJTElURVNcclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuXHR9XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgSW5zdGFmbHV4OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIE1pbmlGb290ZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cclxuXHJcblx0XHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCJ9fSBjbGFzc05hbWU9XCJkZW1pYmxvY0Zvb3RlcjJcIiBhbHQ9XCJmb290ZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtaWJsb2MyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFyZW50NFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGl2Q1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJjZW50ZXJcIiBzcmM9XCIvemVuaXRoL2ltYWdlcy93WDJMQ0lULnBuZ1wiIGFsdD1cIlwiIHdpZHRoPVwiMjIwXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRpdHJlQyBsaWdodCBsZXR0ZXJTcGFjaW5nWFNcIj5aRU5JVEggPGJyIC8+IFZBTCBE4oCZRVVST1BFIDxiciAvPiBIRUxMT0BBR0VOQ0VaRU5JVEguQ09NIDxiciAvPiAwNi4xMS44Ni42NS44MC48L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGl2RFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cInRpdHJlRCBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5Cb3R0b21cIj5SRUpPSUdORVogPGJyIC8+IEzigJlBVkVOVFVSRTwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJzMiBjZW50ZXJGbGV4IGNlbnRlclwiPlxyXG4gICAgICBcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJmYjJcIiBocmVmPSdodHRwczovL3d3dy5mYWNlYm9vay5jb20vQUdFTkNFWkVOSVRILyc+PC9hPlxyXG4gICAgICBcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJpbnN0YTJcIiBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2FnZW5jZXplbml0aC8/aGw9ZnInPjwvYT5cclxuICAgICAgXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibGlua2VkaW4yXCIgaHJlZj0naHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvYWdlbmNlLXplbml0aC8nPjwvYT5cclxuICAgIFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwidGl0cmVEIG1lZGl1bSBsZXR0ZXJTcGFjaW5nIG1hcmdpbkJvdHRvbSBcIj5ORVdTTEVUVEVSPC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cImlucHV0TWFpbCBjZW50ZXJcIiB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcGF0dGVybj1cIi4rQGdsb2JleFxcLmNvbVwiIHNpemU9XCIzMFwiIHJlcXVpcmVkPjwvaW5wdXQ+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGl2RVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cInRpdHJlQyBtZWRpdW0gbGV0dGVyU3BhY2luZ1wiPlNJVEUgTUFQPC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9J3VsMic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+QUNDVUVJTDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJmb290ZXJUZXh0IGxpZ2h0IHRleHQtaDVcIj5QUk9KRVRTPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPsOJUVVJUEU8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+Q09OVEFDVDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxpZ2h0IGZvb3RlckNyZWRpdCBsZXR0ZXJTcGFjaW5nU1wiPsKpIEFHRU5DRSBaRU5JVEggLyBUT1VTIERST0lUUyBSw4lTRVJWw4lTPC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICBcclxuXHJcblxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgTWluaUZvb3RlcjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIFNhdGlzZmFjdGlvbigpIHtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIFxyXG5cdC8vIFJlbWFycXVlIDogbGUgdGFibGVhdSB2aWRlIGRlIGTDqXBlbmRhbmNlcyBbXSBpbmRpcXVlXHJcblx0Ly8gcXVlIHVzZUVmZmVjdCBuZSBz4oCZZXjDqWN1dGVyYSBxdeKAmXVuZSBmb2lzLCB1biBwZXUgY29tbWVcclxuXHQvLyBjb21wb25lbnREaWRNb3VudCgpXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHQgIGZldGNoKFwiL2FwaS9jbGllbnRzXCIpXHJcblx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdC50aGVuKFxyXG5cdFx0ICAocmVzdWx0KSA9PiB7XHJcblx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRzZXRJdGVtcyhyZXN1bHRbXCJoeWRyYTptZW1iZXJcIl0pO1xyXG5cdFx0ICB9LFxyXG5cdFx0ICAvLyBSZW1hcnF1ZSA6IGlsIGZhdXQgZ8OpcmVyIGxlcyBlcnJldXJzIGljaSBwbHV0w7R0IHF1ZSBkYW5zXHJcblx0XHQgIC8vIHVuIGJsb2MgY2F0Y2goKSBhZmluIHF1ZSBub3VzIG7igJlhdmFsaW9ucyBwYXMgbGVzIGV4Y2VwdGlvbnNcclxuXHRcdCAgLy8gZHVlcyDDoCBkZSB2w6lyaXRhYmxlcyBidWdzIGRhbnMgbGVzIGNvbXBvc2FudHMuXHJcblx0XHQgIChlcnJvcikgPT4ge1xyXG5cdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0ICB9XHJcblx0XHQpXHJcblx0fSwgW10pXHJcbiAgXHJcblx0aWYgKGVycm9yKSB7XHJcblx0ICByZXR1cm4gPGRpdj5FcnJldXIgOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcblx0fSBlbHNlIGlmICghaXNMb2FkZWQpIHtcclxuXHQgIHJldHVybiA8ZGl2PkNoYXJnZW1lbnQuLi48L2Rpdj47XHJcblx0fSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKGl0ZW1zKTtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcbiAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy94OW5lczVWLmpwZylcIn19IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cclxuXHJcbiAgICAgIDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG5cdFx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmc1Lm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuXHRcdFx0XHQ8L3ZpZGVvPiAqL31cclxuICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9hV0VMaGs4QS5qcGVnXCIgc3RyZW5ndGg9ezB9PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17e3BhZGRpbmdUb3A6ICc1MHB4J319PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyMlwiPlxyXG5cclxuXHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0cmVBIG1lZGl1bSBsZXR0ZXJTcGFjaW5nIG1hcmdpblN0b3BcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5TQVRJU0ZBQ1RJT048L2gxPlxyXG4gICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRpdHJlQ2VudGVyIGxpZ2h0IGxldHRlclNwYWNpbmdTXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+w4pUUkUgw4AgVk9TIEPDlFTDiVMsIEPigJlFU1QgQVZBTlQgVE9VVCBERVMgUkVOQ09OVFJFUy48L2g2PlxyXG4gICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRpdHJlQ2VudGVyIGxpZ2h0IGxldHRlclNwYWNpbmdTIHBhZGRpbmdCb3R0b21cIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5ERVMgSElTVE9JUkVTIEhVTUFJTkVTLCBFWENFUFRJT05ORUxMRVMsIE9SSUdJTkFMRVMuPC9oNj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJNYXggY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiODhweFwifX0gY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvemVuaXRoL2ljb25zLzBhZmRjN18yYjcyZTgyYTY4Mjc0NjkxOGUxNWQ5ZjY3ZTkzN2ViN35tdjIucG5nXCJ9IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi96ZW5pdGgvaWNvbnMvMGFmZGM3XzRjNzVmZDNmNTE5ZTQyMjBiYjU4MmQ3N2M4YWE3Yzgyfm12Mi5wbmdcIn0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL3plbml0aC9pY29ucy8wYWZkYzdfNGQ3MjU3OTI0YWM1NDg1ZmE2ZWI5ZjhjM2JhOGMzZjJ+bXYyLnBuZ1wifSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvemVuaXRoL2ljb25zLzBhZmRjN182NGE2NDA5NDU0ZDE0ZDUyODUwY2Q2NzI0ODUwNTU1Yn5tdjIucG5nXCJ9IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi96ZW5pdGgvaWNvbnMvMGFmZGM3XzQyMGFiY2UwYzQ3ZDRkN2U5ZTdkMjE2NjMwNWVhNmJlfm12Mi5wbmdcIn0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzFdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzJdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzBdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6XCI4OHB4XCJ9fSBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1swXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyTWF4IGNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjg4cHhcIn19IGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzBdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzFdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzJdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzBdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzFdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzBdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzFdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzJdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzBdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6XCI4OHB4XCJ9fSBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1swXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyTWF4IGNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMjAwMFwiIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjg4cHhcIn19IGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzBdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMjAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzFdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMjAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzJdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMjAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzBdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMjAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzFdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMjAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzJdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMjAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzFdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMjAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzJdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMjAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzBdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMjAwMFwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6XCI4OHB4XCJ9fSBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1swXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdHJlQiBsaWdodCBsZXR0ZXJTcGFjaW5nIGNvbnRhaW5lciBjZW50ZXIgYWNjcm9jaGUgbWFyZ2luQm90dG9tMlwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPkxFIFJFU1RFIE9OIEzigJnDiUNSSVJBIEVOU0VNQkxFPC9oND5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUGFyYWxsYXg+XHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgU2F0aXNmYWN0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2Fycm93LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBWaXNpb24oKSAge1xyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblxyXG4gICAgICB7LyogPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZzYubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+ICovfVxyXG4gICAgICB7LyogPGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCJ9fSBjbGFzc05hbWU9J2JhY2tncm91bmQnPiAqL31cclxuXHJcbiAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL3plbml0aC9pbWFnZXMvYVdFTGhrOEEuanBlZ1wiIHN0cmVuZ3RoPXswfT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3twYWRkaW5nVG9wOiAnNTBweCd9fT5cclxuICAgICAgPGRpdiBkYXRhLWFvcz1cInpvb20taW5cIiBkYXRhLWFvcy1taXJyb3I9XCJ0cnVlXCJkYXRhLWFvcy1vbmNlPVwiZmFsc2VcImRhdGEtYW9zLWFuY2hvci1wbGFjZW1lbnQ9XCJ0b3AtY2VudGVyXCJkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIiBzdHlsZT17e2hlaWdodDpcIjg1MHB4XCJ9fT5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRyZUEgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPlZJU0lPTjwvaDE+XHJcbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibGlnaHQgbGV0dGVyU3BhY2luZ1Mgc291c1RpdHJlXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+VU5FIFJFTkNPTlRSRSBRVUkgQ0hBTkdFIFRPVVQ8L2g2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyXCI+XHJcbiAgICAgICAgICAgIDxTd2lwZXJcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldz17MX1cclxuICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM9e3RydWV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3aXBlcjNcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcl9fY29udGVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJlbnQzXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXNpb25Cb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBvYmplY3RGaXQ6ICdjb3Zlcid9fXNyYz1cImh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvYmI1ZTNiX2ExMDUyMzliZmQxODQ4YjQ4OTI5MzlkODc5OGNkNjU3fm12Mi5qcGcvdjEvY3JvcC94XzEwOSx5XzAsd183MzQsaF85MDAvZmlsbC93XzI3MCxoXzM0OCxhbF9jLHFfODAsdXNtXzEuMjBfMS4wMF8wLjAxLGVuY19hdXRvL2JiNWUzYl9hMTA1MjM5YmZkMTg0OGI0ODkyOTM5ZDg3OThjZDY1N35tdjIuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ2aXNpb25UZXh0MiBtZWRpdW1cIj5NQVRISVM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkNPTlNFSUw8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5Ow4lHT0NJQVRJT048L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj7DiVbDiU5FTUVOVElFTDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkdFU1RJT04gREUgUFJPSkVUPC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+RElSRUNUSU9OIEFSVElTVElRVUU8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5ESVJFQ1RJT04gRCdFWFBMT0lUQVRJT048L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkTDiVZFTE9QUEVNRU5UIENPTU1FUkNJQUwgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwiYXJyb3dcIiBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgdG9wOlwiNTAlXCIsIGxlZnQ6XCI3NSVcIiwgd2lkdGg6XCIxMDBweFwifX0gc3JjPVwiL3plbml0aC9pbWFnZXMvYXJyb3dzLXJpZ2h0LnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJfX2NvbnRlbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyZW50M1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGlkPVwiYXJyb3cyXCIgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsIHRvcDpcIjUwJVwiLCBsZWZ0OlwiMCVcIiwgd2lkdGg6XCIxMDBweFwifX0gc3JjPVwiL3plbml0aC9pbWFnZXMvYXJyb3dzLXJpZ2h0LnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpc2lvbkJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIG9iamVjdEZpdDogJ2NvdmVyJ319c3JjPVwiaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS85NGIyNTVfNzQ4ODVkMzc0Y2Y4NDIxNDg5OWM5ZGY2MGQ2NTM2Mzh+bXYyLmpwZy92MS9maWxsL3dfMjg0LGhfMzcxLGFsX2MscV84MCx1c21fMS4yMF8xLjAwXzAuMDEsZW5jX2F1dG8vQVZBVEFSJTIwUk9OJTIwQi5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInZpc2lvblRleHQyIG1lZGl1bVwiPlJPTjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+Q09OU0VJTDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPk7DiUdPQ0lBVElPTjwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPsOJVsOJTkVNRU5USUVMPC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+R0VTVElPTiBERSBQUk9KRVQ8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5ESVJFQ1RJT04gQVJUSVNUSVFVRTwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkRJUkVDVElPTiBEJ0VYUExPSVRBVElPTjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+RMOJVkVMT1BQRU1FTlQgQ09NTUVSQ0lBTCA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgIDwvU3dpcGVyPlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9QYXJhbGxheD5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgVmlzaW9uOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQgTWFycXVlZSBmcm9tIFwicmVhY3QtZmFzdC1tYXJxdWVlXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tIFwicmVhY3QtcGFyYWxsYXhcIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzaGVldHMvYnVsbWEvaGVscGVycy9zcGFjaW5nLnNhc3NcIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCI7XHJcblxyXG5jb25zdCBXb3JkcGFnZSA9ICh7fSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy82V3ZlbW0zSy5qcGVnXCIgc3RyZW5ndGg9ezB9PiAqL31cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzLzZXdmVtbTNLLmpwZWcpXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiNTcwcHhcIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImRlbWlibG9jXCJcclxuICAgICAgICBhbHQ9XCJ3b3JkcGFnZVwiXHJcbiAgICAgID5cclxuICAgICAgICB7LyogPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+ICovfVxyXG4gICAgICAgIHsvKiA8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZzQubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPiAqL31cclxuICAgICAgICB7LyogPC92aWRlbz4gKi99XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgYWx0PVwiTGlzdGUgZGUgbW90c1wiIHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBkYXRhLWFvcz1cInpvb20taW5cIlxyXG4gICAgICAgICAgICBkYXRhLWFvcy1taXJyb3I9XCJ0cnVlXCJcclxuICAgICAgICAgICAgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCJcclxuICAgICAgICAgICAgZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudD1cInRvcC1jZW50ZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmVudFwiPlxyXG4gICAgICAgICAgICAgIDxNYXJxdWVlXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE3MHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgZ3JhZGllbnQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3b3JkcGFnZSBsZXR0ZXJTcGFjaW5nIGxpZ2h0IGdyaWQxIHB4LTZcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIndvcmRwYWdlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgUsOJQUNUSVZJVMOJXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1hcmdpbiBtZWRpdW0gd29yZHBhZ2VUZXh0IGdyaWQyIHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2UgbGV0dGVyU3BhY2luZyBvdXRsaW5lIG5vcm1hbCBncmlkMyBweC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIFBST1hJTUlUw4lcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIG1hcmdpbiBtZWRpdW0gd29yZHBhZ2VUZXh0IG91dGxpbmUgZ3JpZDQgcHItNVwiPsK3PC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3b3JkcGFnZSBsaWdodCBsZXR0ZXJTcGFjaW5nIGdyaWQ1IHB4LTZcIj5QQVNTSU9OPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0ICBtZWRpdW0gZ3JpZDYgcHItNVwiPsK3PC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3b3JkcGFnZSBub3JtYWwgb3V0bGluZSBsZXR0ZXJTcGFjaW5nIGdyaWQ3IHB4LTZcIj5cclxuICAgICAgICAgICAgICAgICAgU1RSQVTDiUdJRVxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG91dGxpbmUgbWVkaXVtIGdyaWQ2IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgPC9NYXJxdWVlPlxyXG4gICAgICAgICAgICAgIDxNYXJxdWVlXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE3MHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPXtcInJpZ2h0XCJ9XHJcbiAgICAgICAgICAgICAgICBncmFkaWVudD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndvcmRwYWdlIG5vcm1hbCBsZXR0ZXJTcGFjaW5nIGdyaWQ5IHB4LTZcIj5FVkVOVDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBtZWRpdW0gZ3JpZDEwIHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2UgbWFycm9uIG5vcm1hbCBsZXR0ZXJTcGFjaW5nIGdyaWQxMSBweC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIFpFTklUSFxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG91dGxpbmUgbWVkaXVtIGdyaWQxMiBwci01XCI+wrc8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndvcmRwYWdlIG5vcm1hbCBsZXR0ZXJTcGFjaW5nIGdyaWQxMyBweC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIENPTlNFSUxcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBtZWRpdW0gZ3JpZDE0IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2Ugbm9ybWFsIGxldHRlclNwYWNpbmcgZ3JpZDE1IHB4LTZcIj5cclxuICAgICAgICAgICAgICAgICAgQ09NTVVOSUNBVElPTlxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG91dGxpbmUgbWVkaXVtIGdyaWQ2IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgPC9NYXJxdWVlPlxyXG4gICAgICAgICAgICAgIDxNYXJxdWVlXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE3MHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgZ3JhZGllbnQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3b3JkcGFnZSBtZWRpdW0gbGV0dGVyU3BhY2luZyBncmlkMTcgcHgtNlwiPlxyXG4gICAgICAgICAgICAgICAgICBDUsOJQVRJVklUw4lcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBtZWRpdW0gZ3JpZDE4IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2UgbGlnaHQgb3V0bGluZSBsZXR0ZXJTcGFjaW5nIGdyaWQxOSBweC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIFLDilZFUlxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG91dGxpbmUgbWVkaXVtIGdyaWQyMCBwci01XCI+wrc8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndvcmRwYWdlIGxpZ2h0IGxldHRlclNwYWNpbmcgZ3JpZDIxIHB4LTZcIj5cclxuICAgICAgICAgICAgICAgICAgQU1CSVRJT05cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBtZWRpdW0gZ3JpZDIyIHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2Ugb3V0bGluZSBub3JtYWwgbGV0dGVyU3BhY2luZyBncmlkMjMgcHgtNlwiPlxyXG4gICAgICAgICAgICAgICAgICBJTUFHSU5BVElPTlxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG91dGxpbmUgbWVkaXVtIGdyaWQ2IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgPC9NYXJxdWVlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDwvUGFyYWxsYXg+ICovfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmRwYWdlO1xyXG4iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL19uYXZiYXInO1xyXG5pbXBvcnQgUHJvamVjdFBhZ2VPbmUgZnJvbSBcIi4vX3Byb2plY3RwYWdlT25lXCI7XHJcbmltcG9ydCBQcm9qZWN0cGFnZVR3byBmcm9tICcuL19wcm9qZWN0cGFnZVR3byc7XHJcbmltcG9ydCBQcm9qZWN0cGFnZVRocmVlIGZyb20gJy4vX3Byb2plY3RwYWdlVGhyZWUnO1xyXG5pbXBvcnQgUHJvamVjdHBhZ2VGb3VyIGZyb20gJy4vX3Byb2plY3RwYWdlRm91cic7XHJcbmltcG9ydCBQcm9qZWN0cGFnZUZpdmUgZnJvbSAnLi9fcHJvamVjdHBhZ2VGaXZlJztcclxuaW1wb3J0IFByb2plY3RwYWdlU2l4IGZyb20gJy4vX3Byb2plY3RwYWdlU2l4JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0cGFnZSgpIHtcclxuXHRjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZEltZywgc2V0SXNMb2FkZWRJbWddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZE5leHRQcmV2LCBzZXRJc0xvYWRlZE5leHRQcmV2XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNJbWdSZWFkeSwgc2V0SW1nUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbcHJlY2ksIHNldFByZWNpXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbc2Vjb25kLCBzZXRTZWNvbmRdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbTmV4dFByZXYsIHNldE5leHRQcmV2XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRpZihpZCl7XHJcblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0XHRmZXRjaChgL2FwaS9wcm9qZXRzLyR7aWR9YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRJdGVtcyhyZXN1bHQpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cclxuXHRcdFx0ZmV0Y2goYC9nZXRJbWFnZXNQcm9qZXQvJHtpZH1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdGltZykgPT4ge1xyXG5cdFx0XHRcdGxldCB0aGlzUmVzID0gSlNPTi5wYXJzZShyZXN1bHRpbWcpXHJcblx0XHRcdFx0c2V0SXNMb2FkZWRJbWcodHJ1ZSk7XHJcblx0XHRcdFx0c2V0SW1hZ2VzKEpTT04ucGFyc2UocmVzdWx0aW1nKSk7XHJcblx0XHRcdFx0aWYoIHRoaXNSZXMgPT0gXCJbXVwiIHx8IHRoaXNSZXMubGVuZ3RoID09IDApe1xyXG5cdFx0XHRcdFx0c2V0SW1nUmVhZHkodHJ1ZSlcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZih0aGlzUmVzKXtcclxuXHRcdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzUmVzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpc1Jlc1tpXSlcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coaSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlc1tpXS5oZWFkZXIpXHJcblx0XHRcdFx0XHRcdFx0c2V0SGVhZGVyKHRoaXNSZXNbaV0pXHJcblx0XHRcdFx0XHRcdGlmKHRoaXNSZXNbaV0uZm9jdXMpXHJcblx0XHRcdFx0XHRcdFx0c2V0UHJlY2kodGhpc1Jlc1tpXSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlc1tpXS5zZWNvbmRhaXJlKVxyXG5cdFx0XHRcdFx0XHRcdHNldFNlY29uZCh0aGlzUmVzW2ldKVxyXG5cdFx0XHRcdFx0XHQvLyBpZihpbWFnZXNbaV0udmlzaWJsZSlcclxuXHRcdFx0XHRcdFx0Ly8gXHRzZXREaXNwbGF5KC4uLmltYWdlc1tpXSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlcy5sZW5ndGgtMSA9PSBpKXtcclxuXHRcdFx0XHRcdFx0XHRzZXRJbWdSZWFkeSh0cnVlKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHJcblx0XHRcdGZldGNoKGAvTmV4UHJldlAvJHtpZH1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdGxldCBOZXh0ID0gSlNPTi5wYXJzZShyZXN1bHRbMF0pXHJcblx0XHRcdFx0bGV0IFByZXYgPSBKU09OLnBhcnNlKHJlc3VsdFsxXSlcclxuXHRcdFx0XHRpZihOZXh0ICYmIFByZXYpe1xyXG5cdFx0XHRcdFx0c2V0TmV4dFByZXYoW05leHQsIFByZXZdKTtcclxuXHRcdFx0XHRcdGlmKE5leHRQcmV2KXtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coTmV4dFByZXYpXHJcblx0XHRcdFx0XHRcdHNldElzTG9hZGVkTmV4dFByZXYodHJ1ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdH0sIFtdKVxyXG5cdH1cclxuXHJcblx0aWYgKGVycm9yKSB7XHJcblx0XHQgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuXHQgIH0gZWxzZSBpZiAoIWlzTG9hZGVkIHx8ICFpc0ltZ1JlYWR5IHx8ICFpc0xvYWRlZE5leHRQcmV2KSB7XHJcblx0XHRyZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG5cdCAgfSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICggXHJcblx0XHRcdFx0PD5cclxuXHRcdFx0XHQ8TmF2YmFyPjwvTmF2YmFyPlxyXG5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8UHJvamVjdFBhZ2VPbmUgZGF0YT17aXRlbXN9PjwvUHJvamVjdFBhZ2VPbmU+XHJcblx0XHRcdFx0PFByb2plY3RwYWdlVHdvIGRhdGE9e2l0ZW1zfT48L1Byb2plY3RwYWdlVHdvPlxyXG5cdFx0XHRcdDxQcm9qZWN0cGFnZVRocmVlIGRhdGE9e3NlY29uZH0+PC9Qcm9qZWN0cGFnZVRocmVlPlxyXG5cdFx0XHRcdDxQcm9qZWN0cGFnZUZvdXIgcHJlY2k9e3ByZWNpfSBkYXRhMj17aXRlbXN9PjwvUHJvamVjdHBhZ2VGb3VyPlxyXG5cdFx0XHRcdDxQcm9qZWN0cGFnZUZpdmUgaW1hZ2VzPXtpbWFnZXN9PjwvUHJvamVjdHBhZ2VGaXZlPlxyXG5cdFx0XHRcdDxQcm9qZWN0cGFnZVNpeCBkYXRhPXtpdGVtc30gbnA9e05leHRQcmV2fT48L1Byb2plY3RwYWdlU2l4PlxyXG5cdFx0XHRcdDwvPlxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuLy9cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHBhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gXCJyZWFjdC1wYXJhbGxheFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCI7XHJcbmltcG9ydCBMaWdodGJveCBmcm9tIFwieWV0LWFub3RoZXItcmVhY3QtbGlnaHRib3hcIjtcclxuaW1wb3J0IFRodW1ibmFpbHMgZnJvbSBcInlldC1hbm90aGVyLXJlYWN0LWxpZ2h0Ym94L3BsdWdpbnMvdGh1bWJuYWlsc1wiO1xyXG5pbXBvcnQgXCJ5ZXQtYW5vdGhlci1yZWFjdC1saWdodGJveC9wbHVnaW5zL3RodW1ibmFpbHMuY3NzXCI7XHJcbmltcG9ydCBcInlldC1hbm90aGVyLXJlYWN0LWxpZ2h0Ym94L3N0eWxlcy5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIFByb2plY3RwYWdlRml2ZShpbWFnZXMpIHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgbGV0IGFycmF5SW1hZ2UgPSBbXVxyXG4gIGNvbnNvbGUubG9nKGltYWdlcy5pbWFnZXMpO1xyXG4gIGltYWdlcy5pbWFnZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgIGxldCBpdGVtID0geyBzcmM6IGAvaW1hZ2VzL2ltYWdlcHJvamV0LyR7ZWxlbWVudC5pbWFnZX1gfVxyXG4gICAgYXJyYXlJbWFnZS5wdXNoKGl0ZW0pXHJcbiAgfSk7XHJcblxyXG4gIGlmKGFycmF5SW1hZ2UubGVuZ3RoPjApe1xyXG4gIGNvbnNvbGUubG9nKGFycmF5SW1hZ2UpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL3plbml0aC9pbWFnZXMvWjF6SUpDS2suanBlZ1wiIHN0cmVuZ3RoPXs4MDB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIxMDBweFwifX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyZW50Q2xpZW50Vmlld1wiIHN0eWxlPXt7cGFkZGluZ1RvcDpcIjkwcHhcIiwgcGFkZGluZ0JvdHRvbTpcIjkwcHhcIn19PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50R3JpZFZpZXcxXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlcy5pbWFnZXNbMF0gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGNvbnRhaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ltYWdlcy9pbWFnZXByb2pldC9cIiArIGltYWdlcy5pbWFnZXNbMF0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGNvbnRhaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50R3JpZFZpZXcyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlcy5pbWFnZXNbMV0gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGNvbnRhaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ltYWdlcy9pbWFnZXByb2pldC9cIiArIGltYWdlcy5pbWFnZXNbMV0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGNvbnRhaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50R3JpZFZpZXczXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlcy5pbWFnZXNbMl0gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGNvbnRhaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ltYWdlcy9pbWFnZXByb2pldC9cIiArIGltYWdlcy5pbWFnZXNbMl0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGNvbnRhaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50R3JpZFZpZXc0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlcy5pbWFnZXNbM10gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGNvbnRhaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ltYWdlcy9pbWFnZXByb2pldC9cIiArIGltYWdlcy5pbWFnZXNbM10uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGNvbnRhaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbW9iaWxlIGlzLWNlbnRlcmVkIG10LTUtZnVsbGhkXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwifX0+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9IGNsYXNzTmFtZT1cImJ0blMgY2VudGVyIGxpZ2h0IGxldHRlclNwYWNpbmdNIG1iLTYgbXQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICBFTiBWT0lSICtcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDxMaWdodGJveFxyXG4gICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgY2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgIHBsdWdpbnM9e1tUaHVtYm5haWxzXX1cclxuICAgICAgICAgICAgICBzbGlkZXM9e2FycmF5SW1hZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1BhcmFsbGF4PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cGFnZUZpdmU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gUHJvamVjdHBhZ2VGb3VyKHtwcmVjaSwgZGF0YTJ9KSB7XHJcblx0Y29uc29sZS5sb2cocHJlY2kpXHJcblx0aWYoZGF0YTIuZm9jdXMpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMvNld2ZW1tM0suanBlZylcIiwgaGVpZ2h0OiBcIjExMDBweFwifX0gY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlx0XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPScnc3R5bGU9e3sgaGVpZ2h0OiBcIjExMDBweFwifX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3dyYXBwZXIyJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXJDZW50ZXJBJz5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyZW50MjEgbWFyZ2luVG9wJz5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYXJnaW5Ub3AyJyA+XHJcblx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nbGlnaHQgbGV0dGVyU3BhY2luZ1MnPkZvY3VzPC9oMz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGlnaHQgY29udGFpbmVyQ2VudGVyQ2xpZW50IHRleHQtaDUnIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnfX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YTIuZm9jdXN9fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nIGJveENsaWVudCcgc3R5bGU9e3toZWlnaHQ6ICc4MDBweCcsIHdpZHRoOlwiNjAwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPScgY29udGFpbicgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e1wiL2ltYWdlcy9pbWFnZXByb2pldC9cIiArIHByZWNpLmltYWdlfSBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cdFx0XHJcblxyXG5cclxuXHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fX1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cGFnZUZvdXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIFByb2plY3RwYWdlT25lKGRhdGEpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kMVwiIGFsdD1cImhvbWVwYWdlXCI+XHJcblxyXG5cdFx0XHQ8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuXHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZy5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcblx0XHRcdFx0PC92aWRlbz5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5Qmx1ZVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlcjJcIj5cclxuXHRcdFx0XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL3plbml0aC9pbWFnZXMvYklPMXI5Ri5wbmdcIiBhbHQ9XCJMb2dvXCIgd2lkdGg9ezIwMH0gY2xhc3NOYW1lPVwiY2VudGVyXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHRcclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50cGFnZVRleHRcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwibWVkaXVtIG1hcmdpblN0b3AgY2xpZW50RGV0YWlsXCI+e2RhdGEuZGF0YS5wcm9qZXR9PC9oMT5cclxuXHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPVwibGlnaHQgbWFyZ2luU3RvcCBjbGllbnREZXRhaWxcIj57ZGF0YS5kYXRhLnNlY3RldXIuc2VjdGV1cn08L2g2PlxyXG5cdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuY2xpZW50ID8gPHAgY2xhc3NOYW1lPVwibGlnaHQgbWFyZ2luU3RvcCBjbGllbnREZXRhaWxcIj5VTiBQUk9KRVQgUE9VUiA6IHtkYXRhLmRhdGEuY2xpZW50Lm5vbUNsaWVudH08L3A+IDogIDxwIGNsYXNzTmFtZT1cImxpZ2h0IG1hcmdpblN0b3AgY2xpZW50RGV0YWlsXCI+VU4gUFJPSkVUIFBPVVIgOiBOL0E8L3A+fVxyXG5cdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuZHVyZWUgPyA8cCBjbGFzc05hbWU9XCJsaWdodCBjbGllbnREZXRhaWxcIj5EVVLDiUUgUFJPSkVUIDoge2RhdGEuZGF0YS5kdXJlZX08L3A+IDogPHAgY2xhc3NOYW1lPVwibGlnaHQgY2xpZW50RGV0YWlsXCI+RFVSw4lFIFBST0pFVCA6IE4vQTwvcD59XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIHRvPXtgL3NlYXJjaGNhdC8ke2RhdGEuZGF0YS5jYXRlZ29yaWVbMF0uaWR9LyR7ZGF0YS5kYXRhLmNhdGVnb3JpZVswXS5jYXRlZ29yaWV9YH0+PHAgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZVwiLCB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ319IGNsYXNzTmFtZT1cImxpZ2h0IGNsaWVudERldGFpbDJcIj57ZGF0YS5kYXRhLmNhdGVnb3JpZVswXS5jYXRlZ29yaWV9PC9wPjwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8cCBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lXCJ9fSBjbGFzc05hbWU9XCJsaWdodCBjbGllbnREZXRhaWwyXCI+ICAgfCAgIDwvcD5cclxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLmNhdGVnb3JpZVsxXSAmJiA8TGluayB0bz17YC9zZWFyY2hjYXQvJHtkYXRhLmRhdGEuY2F0ZWdvcmllWzFdLmlkfS8ke2RhdGEuZGF0YS5jYXRlZ29yaWVbMF0uY2F0ZWdvcmllfWB9ID48cCBjbGFzc05hbWU9XCJsaWdodCBjbGllbnREZXRhaWwyXCIgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZVwiLCB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ319PntkYXRhLmRhdGEuY2F0ZWdvcmllWzFdLmNhdGVnb3JpZX08L3A+PC9MaW5rPn1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlcjNcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDQgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSd9fSBjbGFzc05hbWU9XCJsaWdodCBsZXR0ZXJTcGFjaW5nUyAgZGlzY292ZXJDbGllbnQyXCI+e2RhdGEuZGF0YS5taXNzaW9ufTwvaDQ+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsaWdodCAgZGlzY292ZXJDbGllbnRcIj5Ew4lDT1VWUkVaPC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGluZUNsaWVudFwiID48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHBhZ2VPbmU7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gUHJvamVjdHBhZ2VTaXgoe2RhdGEsIG5wfSkge1xyXG5cdGlmKG5wWzBdKXtcclxuXHRcdGlmKG5wWzBdWzBdID09ICdudWxsJylcclxuXHRcdFx0bnBbMF1bMF0gPSBmYWxzZTtcclxuXHRcdGlmKG5wWzBdWzFdID09ICdudWxsJylcclxuXHRcdFx0bnBbMV1bMF0gPSBmYWxzZTtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzLzZXdmVtbTNLLmpwZWcpXCJ9fSBjbGFzc05hbWU9J2RlbWlibG9jT3BhY2l0eSc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXJDZW50ZXIgbWFyZ2luVG9wUycgc3R5bGU9e3ttYXJnaW5Ub3A6XCIwXCJ9fT5cclxuXHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nbWVkaXVtIGNlbnRlclRleHQnPlVOIFTDiU1PSUdOQUdFPC9oND5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xpZ2h0IGNlbnRlclRleHQnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmRhdGEudGVtb2lnbmFnZX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHJcblx0XHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCJ9fSBjbGFzc05hbWU9J2RlbWlibG9jQ2xpZW50Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkZW1pYmxvY09wYWNpdHknPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyZW50Q2xpZW50TmV4dFByZXYnPlxyXG5cclxuXHRcdFx0XHRcdFx0XHR7bnBbMV1bMF0gJiZcclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdDbGllbnROZXh0UHJldjEnIG9uQ2xpY2s9eygpPT57bG9jYXRpb24uaHJlZiA9IFwiL3Byb2pldC9cIisgbnBbMV1bMF0uaWR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT0nbGlnaHQgcmlnaHRUZXh0IG1hcmdpblRvcFMnPlBST0pFVCBQUsOJQ8OJREVOVDwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9J3JpZ2h0VGV4dCc+e25wWzFdWzBdLnByb2pldH08L2g1PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPSdsaWdodCByaWdodFRleHQnPntucFsxXVswXS5taXNzaW9ufTwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj59XHJcblxyXG5cdFx0XHRcdFx0XHRcdHtucFswXVswXSAmJiA8ZGl2IGNsYXNzTmFtZT0nQ2xpZW50TmV4dFByZXYyJyBvbkNsaWNrPXsoKT0+e2xvY2F0aW9uLmhyZWYgPSBcIi9wcm9qZXQvXCIrIG5wWzBdWzBdLmlkfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9J2xpZ2h0IGxlZnRUZXh0IG1hcmdpblRvcFMnPlBST0pFVCBTVUlWQU5UPC9oNj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT0nbGVmdFRleHQnPntucFswXVswXS5wcm9qZXR9PC9oNT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT0nbGlnaHQgbGVmdFRleHQnPntucFswXVswXS5taXNzaW9ufTwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj59XHJcblx0XHRcdFx0XHRcdFx0ey8qIDxhIGhyZWY9e1wiL2NsaWVudC9cIitucFsxXVswXS5pZH0+ICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHBhZ2VTaXg7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0cGFnZVRocmVlKGRhdGEpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyRGFya0JsdWVDbGllbnQnIHN0eWxlPXt7aGVpZ2h0OlwiODAwcHhcIiwgd2lkdGg6XCIxMDAlXCJ9fT5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPXtcIi9pbWFnZXMvaW1hZ2Vwcm9qZXQvXCIgKyBkYXRhLmRhdGEuaW1hZ2V9IGFsdD1cIlwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cGFnZVRocmVlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gUHJvamVjdHBhZ2VUd28oZGF0YSkge1xyXG5cdGlmKGRhdGEuZGF0YS5kZW1hbmRlIHx8IGRhdGEuZGF0YS5kZWZpIHx8IGRhdGEuZGF0YS5hY3Rpb24pe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy82V3ZlbW0zSy5qcGVnKVwifX0gY2xhc3NOYW1lPSdkZW1pYmxvY0NsaWVudCc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmVudENsaWVudCc+XHJcblx0XHRcdFx0XHRcdFx0e2RhdGEuZGF0YS5kZW1hbmRlICYmXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NsaWVudEdyaWQxJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2xpZ2h0Jz5VTkUgREVNQU5ERTwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGlnaHQgY29udGFpbmVyQ2VudGVyQ2xpZW50JyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLmRhdGEuZGVtYW5kZX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PiBcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuZGVmaSAmJlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjbGllbnRHcmlkMic+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdsaWdodCc+VU4gRMOJRkk8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xpZ2h0IGNvbnRhaW5lckNlbnRlckNsaWVudCcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YS5kYXRhLmRlZml9fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuYWN0aW9uICYmXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NsaWVudEdyaWQzJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2xpZ2h0Jz5VTkUgQUNUSU9OPC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmRhdGEuZGF0YS5hY3Rpb259fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG5cdH1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cGFnZVR3bztcclxuIiwiaW1wb3J0IFNlYXJjaFBhZ2VPbmUyIGZyb20gXCIuL19TZWFyY2hQYWdlT25lMlwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL19uYXZiYXInO1xyXG5pbXBvcnQgUnNCdXR0b24gZnJvbSAnLi4vX3JzQnV0dG9uJztcclxuaW1wb3J0IExpbmVzVG9wIGZyb20gJy4uL19saW5lc1RvcCc7XHJcbmltcG9ydCBMaW5lc0JvdHRvbSBmcm9tICcuLi9fbGluZXNCb3R0b20nO1xyXG5pbXBvcnQgU2VhcmNoUGFnZVR3bzIgZnJvbSBcIi4vX1NlYXJjaFBhZ2VUd28yXCI7XHJcbmltcG9ydCBNaW5pRm9vdGVyIGZyb20gXCIuLi9Ib21lcGFnZS9fbWluaUZvb3RlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gU2VhcmNoUGFnZTIoKSB7XHJcblx0Y29uc3QgeyBpbmZvIH0gPSB1c2VQYXJhbXMoKTtcclxuXHRjb25zdCB7IG5hbWUgfSA9IHVzZVBhcmFtcygpO1xyXG5cdGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzTG9hZGVkSW1nLCBzZXRJc0xvYWRlZEltZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzTG9hZGVkTmV4dFByZXYsIHNldElzTG9hZGVkTmV4dFByZXZdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0ltZ1JlYWR5LCBzZXRJbWdSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbaGVhZGVyLCBzZXRIZWFkZXJdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtwcmVjaSwgc2V0UHJlY2ldID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtzZWNvbmQsIHNldFNlY29uZF0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtOZXh0UHJldiwgc2V0TmV4dFByZXZdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRcdHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG5cdFx0XHRmZXRjaChgL2dldHNlYXJjaGNhdC8ke2luZm99YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRzZXRJdGVtcyhyZXN1bHQpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0fSwgW10pXHRcdFxyXG5cclxuXHJcblxyXG5cdGlmIChlcnJvcikge1xyXG5cdFx0IHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcblx0ICB9IGVsc2UgaWYgKCFpc0xvYWRlZCApIHtcclxuXHRcdHJldHVybiA8ZGl2PmRiZmdiZmcuLi48L2Rpdj47XHJcblx0ICB9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gKCAgXHJcblx0XHQ8PlxyXG5cdFx0PE5hdmJhcj48L05hdmJhcj5cclxuXHRcdDxSc0J1dHRvbj48L1JzQnV0dG9uPlxyXG5cdFx0PExpbmVzVG9wPjwvTGluZXNUb3A+XHJcblx0XHQ8TGluZXNCb3R0b20+PC9MaW5lc0JvdHRvbT5cclxuXHRcdFxyXG5cdFx0PFNlYXJjaFBhZ2VPbmUyIGRhdGEgPSB7bmFtZX0+PC9TZWFyY2hQYWdlT25lMj5cclxuXHRcdDxTZWFyY2hQYWdlVHdvMiBkYXRhPXtpdGVtc30+PC9TZWFyY2hQYWdlVHdvMj5cclxuXHRcdHsvKiA8V29ya3BhZ2VUaHJlZT48L1dvcmtwYWdlVGhyZWU+XHJcblx0XHQ8V29ya3BhZ2VGb3VyPjwvV29ya3BhZ2VGb3VyPlxyXG5cdFx0PFdvcmtwYWdlRml2ZT48L1dvcmtwYWdlRml2ZT4qL31cclxuXHRcdDxNaW5pRm9vdGVyPjwvTWluaUZvb3Rlcj4gXHJcblx0XHQ8Lz5cclxuXHQgKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFBhZ2UyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaFBhZ2VPbmUyKGRhdGEpIHtcclxuXHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdEFPUy5pbml0KClcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kMVwiIGFsdD1cImhvbWVwYWdlXCI+XHJcblxyXG5cdFx0XHQ8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuXHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZy5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcblx0XHRcdDwvdmlkZW8+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eUJsdWVcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXIyXCI+XHJcblx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvemVuaXRoL2ltYWdlcy9iSU8xcjlGLnBuZ1wiIGFsdD1cIkxvZ29cIiB3aWR0aD17MjAwfSBjbGFzc05hbWU9XCJjZW50ZXJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cdFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid29ya3BhZ2VUZXh0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cIm1lZGl1bVwiPlJFU1VMVEFUIFBPVVIgXCJ7ZGF0YS5kYXRhfVwiPC9oMT5cclxuXHRcdFx0XHRcdFx0XHR7LyogPHAgY2xhc3NOYW1lPVwibGlnaHRcIj5MT0dPLiBXRUIgREVTSUdOLiBDQVRFR09SSUU8L3A+ICovfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFBhZ2VPbmUyO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gU2VhcmNoUGFnZVR3bzIoZGF0YSkge1xyXG5cdGNvbnNvbGUubG9nKGRhdGEpXHJcblx0bGV0IGJveCA9IFtdXHJcblx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGEuZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRsZXQgaXRlbSA9IG51bGw7XHJcblx0XHRpZihkYXRhLmRhdGFbaW5kZXhdWzBdID09IFwicHJvamV0XCIpe1xyXG5cdFx0XHRpdGVtID0gKDxhIGtleT17aW5kZXh9IGhyZWY9e1wiL3Byb2pldC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaWR9PjxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PHAgY2xhc3NOYW1lPVwidGV4dERlY29cIj57ZGF0YS5kYXRhW2luZGV4XS5taXNzaW9ufTwvcD48aW1nIHNyYz17XCIvaW1hZ2VzL2ltYWdlcHJvamV0L1wiICsgZGF0YS5kYXRhW2luZGV4XS5oZWFkZXJ9IGFsdD1cIlwiIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcImF1dG9cIn19Lz48L2Rpdj48L2E+KVxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGl0ZW0gPSAoPGEga2V5PXtpbmRleH0gaHJlZj17XCIvY2xpZW50L1wiICsgZGF0YS5kYXRhW2luZGV4XS5pZH0+PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48cCBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPntkYXRhLmRhdGFbaW5kZXhdLm1pc3Npb259PC9wPjxpbWcgc3JjPXtcIi9pbWFnZXMvY2xpZW50L1wiICsgZGF0YS5kYXRhW2luZGV4XS5oZWFkZXJ9IGFsdD1cIlwiIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcImF1dG9cIn19Lz48L2Rpdj48L2E+KVxyXG5cdFx0fVxyXG5cdFx0Ym94LnB1c2goaXRlbSlcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHRcdFx0XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiXCIgYWx0PVwiYWN0aW9uXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eUJsdWVcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHJcblxyXG5cdFx0XHRcdHtib3h9XHJcblxyXG4gICAgICAgIFx0XHQ8L2Rpdj5cclxuICAgICAgXHRcdDwvZGl2PlxyXG4gICAgXHRcdDwvZGl2PlxyXG5cdFx0PC8+XHJcblx0KTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFBhZ2VUd28yOyIsImltcG9ydCBTZWFyY2hQYWdlT25lIGZyb20gXCIuL19TZWFyY2hQYWdlT25lXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vX25hdmJhcic7XHJcbmltcG9ydCBSc0J1dHRvbiBmcm9tICcuLi9fcnNCdXR0b24nO1xyXG5pbXBvcnQgTGluZXNUb3AgZnJvbSAnLi4vX2xpbmVzVG9wJztcclxuaW1wb3J0IExpbmVzQm90dG9tIGZyb20gJy4uL19saW5lc0JvdHRvbSc7XHJcbmltcG9ydCBTZWFyY2hQYWdlVHdvIGZyb20gXCIuL19TZWFyY2hQYWdlVHdvXCI7XHJcbmltcG9ydCBNaW5pRm9vdGVyIGZyb20gXCIuLi9Ib21lcGFnZS9fbWluaUZvb3RlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gU2VhcmNoUGFnZSgpIHtcclxuXHRjb25zdCB7IGluZm8gfSA9IHVzZVBhcmFtcygpO1xyXG5cdGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzTG9hZGVkSW1nLCBzZXRJc0xvYWRlZEltZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzTG9hZGVkTmV4dFByZXYsIHNldElzTG9hZGVkTmV4dFByZXZdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0ltZ1JlYWR5LCBzZXRJbWdSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbaGVhZGVyLCBzZXRIZWFkZXJdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtwcmVjaSwgc2V0UHJlY2ldID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtzZWNvbmQsIHNldFNlY29uZF0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtOZXh0UHJldiwgc2V0TmV4dFByZXZdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRcdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGluZm8pXHJcblx0XHRcdGZldGNoKGAvZ2V0U2VhcmNoLyR7aW5mb31gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdHNldEl0ZW1zKHJlc3VsdCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHRcdC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0XHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHR9LCBbXSlcdFx0XHJcblxyXG5cclxuXHJcblx0aWYgKGVycm9yKSB7XHJcblx0XHQgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuXHQgIH0gZWxzZSBpZiAoIWlzTG9hZGVkICkge1xyXG5cdFx0cmV0dXJuIDxkaXY+ZGJmZ2JmZy4uLjwvZGl2PjtcclxuXHQgIH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAoICBcclxuXHRcdDw+XHJcblx0XHQ8TmF2YmFyPjwvTmF2YmFyPlxyXG5cdFx0PFJzQnV0dG9uPjwvUnNCdXR0b24+XHJcblx0XHQ8TGluZXNUb3A+PC9MaW5lc1RvcD5cclxuXHRcdDxMaW5lc0JvdHRvbT48L0xpbmVzQm90dG9tPlxyXG5cdFx0XHJcblx0XHQ8U2VhcmNoUGFnZU9uZSBkYXRhID0ge2luZm99PjwvU2VhcmNoUGFnZU9uZT5cclxuXHRcdDxTZWFyY2hQYWdlVHdvIGRhdGE9e2l0ZW1zfT48L1NlYXJjaFBhZ2VUd28+XHJcblx0XHR7LyogPFdvcmtwYWdlVGhyZWU+PC9Xb3JrcGFnZVRocmVlPlxyXG5cdFx0PFdvcmtwYWdlRm91cj48L1dvcmtwYWdlRm91cj5cclxuXHRcdDxXb3JrcGFnZUZpdmU+PC9Xb3JrcGFnZUZpdmU+Ki99XHJcblx0XHQ8TWluaUZvb3Rlcj48L01pbmlGb290ZXI+IFxyXG5cdFx0PC8+XHJcblx0ICk7XHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaFBhZ2VPbmUoZGF0YSkge1xyXG5cdGNvbnNvbGUubG9nKGRhdGEpXHJcblx0QU9TLmluaXQoKVxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQxXCIgYWx0PVwiaG9tZXBhZ2VcIj5cclxuXHJcblx0XHRcdDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG5cdFx0XHRcdDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuXHRcdFx0PC92aWRlbz5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5Qmx1ZVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlcjJcIj5cclxuXHRcdFx0XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCIvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi96ZW5pdGgvaW1hZ2VzL2JJTzFyOUYucG5nXCIgYWx0PVwiTG9nb1wiIHdpZHRoPXsyMDB9IGNsYXNzTmFtZT1cImNlbnRlclwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlx0XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3b3JrcGFnZVRleHRcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwibWVkaXVtXCI+UkVTVUxUQVQgUE9VUiBcIntkYXRhLmRhdGF9XCI8L2gxPlxyXG5cdFx0XHRcdFx0XHRcdHsvKiA8cCBjbGFzc05hbWU9XCJsaWdodFwiPkxPR08uIFdFQiBERVNJR04uIENBVEVHT1JJRTwvcD4gKi99XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFnZU9uZTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaFBhZ2VUd28oZGF0YSkge1xyXG5cdGNvbnNvbGUubG9nKGRhdGEpXHJcblx0bGV0IGJveCA9IFtdXHJcblx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGEuZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRsZXQgaXRlbSA9IG51bGw7XHJcblx0XHRpZihkYXRhLmRhdGFbaW5kZXhdWzBdID09IFwicHJvamV0XCIpe1xyXG5cdFx0XHRpdGVtID0gKDxhIGtleT17aW5kZXh9IGhyZWY9e1wiL3Byb2pldC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaWR9PjxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PHAgY2xhc3NOYW1lPVwidGV4dERlY29cIj57ZGF0YS5kYXRhW2luZGV4XS5taXNzaW9ufTwvcD48aW1nIHNyYz17XCIvaW1hZ2VzL2ltYWdlcHJvamV0L1wiICsgZGF0YS5kYXRhW2luZGV4XS5oZWFkZXJ9IGFsdD1cIlwiIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcImF1dG9cIn19Lz48L2Rpdj48L2E+KVxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGl0ZW0gPSAoPGEga2V5PXtpbmRleH0gaHJlZj17XCIvY2xpZW50L1wiICsgZGF0YS5kYXRhW2luZGV4XS5pZH0+PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48cCBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPntkYXRhLmRhdGFbaW5kZXhdLm1pc3Npb259PC9wPjxpbWcgc3JjPXtcIi9pbWFnZXMvY2xpZW50L1wiICsgZGF0YS5kYXRhW2luZGV4XS5oZWFkZXJ9IGFsdD1cIlwiIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcImF1dG9cIn19Lz48L2Rpdj48L2E+KVxyXG5cdFx0fVxyXG5cdFx0Ym94LnB1c2goaXRlbSlcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHRcdFx0XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiXCIgYWx0PVwiYWN0aW9uXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eUJsdWVcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHJcblxyXG5cdFx0XHRcdHtib3h9XHJcblxyXG4gICAgICAgIFx0XHQ8L2Rpdj5cclxuICAgICAgXHRcdDwvZGl2PlxyXG4gICAgXHRcdDwvZGl2PlxyXG5cdFx0PC8+XHJcblx0KTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFBhZ2VUd287IiwiaW1wb3J0IFdvcmtwYWdlQ2xpZW50T25lIGZyb20gJy4vX3dvcmtwYWdlQ2xpZW50T25lJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9fbmF2YmFyJztcclxuaW1wb3J0IFJzQnV0dG9uIGZyb20gJy4uL19yc0J1dHRvbic7XHJcbmltcG9ydCBMaW5lc1RvcCBmcm9tICcuLi9fbGluZXNUb3AnO1xyXG5pbXBvcnQgTGluZXNCb3R0b20gZnJvbSAnLi4vX2xpbmVzQm90dG9tJztcclxuaW1wb3J0IFdvcmtwYWdlQ2xpZW50VHdvIGZyb20gJy4vX3dvcmtwYWdlQ2xpZW50VHdvJztcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBXb3JrcGFnZUNsaWVudCgpIHtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZEltZywgc2V0SXNMb2FkZWRJbWddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZE5leHRQcmV2LCBzZXRJc0xvYWRlZE5leHRQcmV2XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNJbWdSZWFkeSwgc2V0SW1nUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbcHJlY2ksIHNldFByZWNpXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbc2Vjb25kLCBzZXRTZWNvbmRdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbTmV4dFByZXYsIHNldE5leHRQcmV2XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRcdHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG5cdFx0XHRmZXRjaChgL2dldHRBbGxDbGllbnQvYCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRzZXRJdGVtcyhyZXN1bHQpO1xyXG5cdFx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdH0sIFtdKVxyXG5cclxuXHRpZiAoZXJyb3IpIHtcclxuXHRcdCByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG5cdCAgfSBlbHNlIGlmICghaXNMb2FkZWQgKSB7XHJcblx0XHRyZXR1cm4gPGRpdj5kYmZnYmZnLi4uPC9kaXY+O1xyXG5cdCAgfSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICggIFxyXG5cdFx0PD5cclxuXHRcdDxOYXZiYXI+PC9OYXZiYXI+XHJcblx0XHQ8UnNCdXR0b24+PC9Sc0J1dHRvbj5cclxuXHRcdDxMaW5lc1RvcD48L0xpbmVzVG9wPlxyXG5cdFx0PExpbmVzQm90dG9tPjwvTGluZXNCb3R0b20+XHJcblx0XHRcclxuXHRcdDxXb3JrcGFnZUNsaWVudE9uZT48L1dvcmtwYWdlQ2xpZW50T25lPlxyXG5cdFx0PFdvcmtwYWdlQ2xpZW50VHdvIGRhdGE9e2l0ZW1zfT48L1dvcmtwYWdlQ2xpZW50VHdvPlxyXG5cdFx0ey8qIDxXb3JrcGFnZVRocmVlPjwvV29ya3BhZ2VUaHJlZT5cclxuXHRcdDxXb3JrcGFnZUZvdXI+PC9Xb3JrcGFnZUZvdXI+XHJcblx0XHQ8V29ya3BhZ2VGaXZlPjwvV29ya3BhZ2VGaXZlPlxyXG5cdFx0PE1pbmlGb290ZXI+PC9NaW5pRm9vdGVyPiAqL31cclxuXHRcdDwvPlxyXG5cdCApO1xyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgV29ya3BhZ2VDbGllbnQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gV29ya3BhZ2VDbGllbnRPbmUoKSB7XHJcblx0QU9TLmluaXQoKVxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQxXCIgYWx0PVwiaG9tZXBhZ2VcIj5cclxuXHJcblx0XHRcdDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG5cdFx0XHRcdDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuXHRcdFx0PC92aWRlbz5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5Qmx1ZVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlcjJcIj5cclxuXHRcdFx0XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCIvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi96ZW5pdGgvaW1hZ2VzL2JJTzFyOUYucG5nXCIgYWx0PVwiTG9nb1wiIHdpZHRoPXsyMDB9IGNsYXNzTmFtZT1cImNlbnRlclwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlx0XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3b3JrcGFnZVRleHRcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwibWVkaXVtXCI+U8OJTMOJQ1RJT04gREUgUFJPSkVUPC9oMT5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsaWdodFwiPkxPR08uIFdFQiBERVNJR04uIENBVEVHT1JJRTwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBXb3JrcGFnZUNsaWVudE9uZTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIFdvcmtwYWdlQ2xpZW50VHdvKGRhdGEpIHtcclxuXHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdGxldCBib3ggPSBbXVxyXG5cdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmRhdGEubGVuZ3RoOyBpbmRleCsrKSB7XHJcblx0XHRpZigoaW5kZXggJSAzID09IDApICYmIChkYXRhLmRhdGFbaW5kZXggKyAyXSAmJiBkYXRhLmRhdGFbaW5kZXggKyAxXSAmJiBkYXRhLmRhdGFbaW5kZXhdKSl7XHJcblx0XHRcdGxldCBpdGVtID0gKCAgICAgICAgICBcdFx0XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXI0IGNlbnRlclwiIGtleT17aW5kZXh9PlxyXG5cdFx0XHRcdFx0PGEgaHJlZj17XCIvY2xpZW50L1wiICsgZGF0YS5kYXRhW2luZGV4XS5pZH0+PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48cCBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPntkYXRhLmRhdGFbaW5kZXhdLm1pc3Npb259PC9wPjxpbWcgc3JjPXtcIi9pbWFnZXMvaW1hZ2VjbGllbnQvXCIgKyBkYXRhLmRhdGFbaW5kZXhdLmhlYWRlcn0gYWx0PVwiXCIgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiYXV0b1wifX0vPjwvZGl2PjwvYT5cclxuXHRcdFx0XHRcdDxhIGhyZWY9e1wiL2NsaWVudC9cIiArIGRhdGEuZGF0YVtpbmRleCArIDFdLmlkfT48ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjxwIGNsYXNzTmFtZT1cInRleHREZWNvXCI+e2RhdGEuZGF0YVtpbmRleCArIDFdLm1pc3Npb259PC9wPjxpbWcgc3JjPXtcIi9pbWFnZXMvaW1hZ2VjbGllbnQvXCIgKyBkYXRhLmRhdGFbaW5kZXggKyAxXS5oZWFkZXJ9IGFsdD1cIlwiIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcImF1dG9cIn19Lz48L2Rpdj48L2E+XHJcblx0XHRcdFx0XHQ8YSBocmVmPXtcIi9jbGllbnQvXCIgKyBkYXRhLmRhdGFbaW5kZXggKyAyXS5pZH0+PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48cCBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPntkYXRhLmRhdGFbaW5kZXggKyAyXS5taXNzaW9ufTwvcD48aW1nIHNyYz17XCIvaW1hZ2VzL2ltYWdlY2xpZW50L1wiICsgZGF0YS5kYXRhW2luZGV4ICsyXS5oZWFkZXJ9IGFsdD1cIlwiIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcImF1dG9cIn19Lz48L2Rpdj48L2E+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHQgIFx0KVxyXG5cdFx0XHRib3gucHVzaChpdGVtKVxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiXCIgYWx0PVwiYWN0aW9uXCI+XHJcbiAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHlCbHVlXCI+XHJcbiAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cclxuXHJcblxyXG5cdFx0XHR7Ym94fVxyXG4gICAgICAgICAgXHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lcjQgY2VudGVyXCI+XHJcbiAgICAgICAgICAgIFx0XHQ8YSBocmVmPVwiXCI+PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48cCBjbGFzc05hbWU9XCJsaWdodFwiPntkYXRhLmRhdGFbMF0ucHJvamV0fTwvcD48aW1nIHNyYz17XCIvaW1hZ2VzL2ltYWdlcHJvamV0L1wiICsgZGF0YS5kYXRhWzBdLmhlYWRlcn0gYWx0PVwiXCIgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiYXV0b1wifX0vPjwvZGl2PjwvYT5cclxuICAgICAgICAgICAgXHRcdDxhIGhyZWY9XCJcIj48ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PjwvYT5cclxuICAgICAgICAgICAgXHRcdDxhIGhyZWY9XCJcIj48ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PjwvYT5cclxuICAgICAgICAgIFx0XHQ8L2Rpdj4gKi99XHJcblx0XHRcdFx0ICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bkwgY2VudGVyIGxpZ2h0IGxldHRlclNwYWNpbmdNXCI+XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCIvY29udGFjdFwiIGNsYXNzTmFtZT1cInRleHREZWNvXCI+Vm9pciBwbHVzPC9MaW5rPlxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG4gICAgICAgICAgXHRcdFxyXG5cdFx0XHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cclxuICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgIFx0XHQ8L2Rpdj4gKi99XHJcbiAgICAgICAgXHRcdDwvZGl2PlxyXG5cclxuICAgICAgXHRcdDwvZGl2PlxyXG4gICAgXHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBXb3JrcGFnZUNsaWVudFR3bzsiLCJpbXBvcnQgV29ya3BhZ2VPbmUgZnJvbSBcIi4vX3dvcmtwYWdlT25lXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vX25hdmJhcic7XHJcbmltcG9ydCBSc0J1dHRvbiBmcm9tICcuLi9fcnNCdXR0b24nO1xyXG5pbXBvcnQgTGluZXNUb3AgZnJvbSAnLi4vX2xpbmVzVG9wJztcclxuaW1wb3J0IExpbmVzQm90dG9tIGZyb20gJy4uL19saW5lc0JvdHRvbSc7XHJcbmltcG9ydCBXb3JrcGFnZVR3byBmcm9tIFwiLi9fd29ya3BhZ2VUd29cIjtcclxuaW1wb3J0IFdvcmtwYWdlVGhyZWUgZnJvbSBcIi4vX3dvcmtwYWdlVGhyZWVcIjtcclxuaW1wb3J0IFdvcmtwYWdlRm91ciBmcm9tIFwiLi9fd29ya3BhZ2VGb3VyXCI7XHJcbmltcG9ydCBXb3JrcGFnZUZpdmUgZnJvbSBcIi4vX3dvcmtwYWdlRml2ZVwiO1xyXG5pbXBvcnQgTWluaUZvb3RlciBmcm9tIFwiLi4vSG9tZXBhZ2UvX21pbmlGb290ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiOyBcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBXb3JrcGFnZSgpIHtcclxuXHRjb25zdCB7IG5iciB9ID0gdXNlUGFyYW1zKCk7XHJcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNDb3VudExvYWRlZCwgc2V0SXNDb3VudExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzQ2F0TG9hZGVkLCBzZXRJc0NhdExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzTG9hZGVkTmV4dFByZXYsIHNldElzTG9hZGVkTmV4dFByZXZdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0ltZ1JlYWR5LCBzZXRJbWdSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2NhdCwgc2V0Q2F0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRcdHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG5cdFx0XHRmZXRjaChgL2dldHRBbGxQcm9qZWN0LyR7bmJyfWAse21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0XHQudGhlbihcclxuXHRcdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0c2V0SXRlbXMocmVzdWx0KTtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHJcblx0XHRcdGZldGNoKGAvZ2V0Q291bnQvcHJvamV0YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRzZXRDb3VudChyZXN1bHQpO1xyXG5cdFx0XHRcdHNldElzQ291bnRMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzZXRJc0NvdW50TG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHRcdGZldGNoKGAvYXBpL2NhdGVnb3JpZXNgLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdHNldENhdChyZXN1bHQpO1xyXG5cdFx0XHRcdHNldElzQ2F0TG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNDb3VudExvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0fSwgW10pXHJcblxyXG5cdGlmIChlcnJvcikge1xyXG5cdFx0IHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcblx0ICB9IGVsc2UgaWYgKCFpc0xvYWRlZCB8fCAhaXNDb3VudExvYWRlZHx8ICFpc0NhdExvYWRlZCkge1xyXG5cdFx0cmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuXHQgIH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAoICBcclxuXHRcdDw+XHJcblx0XHQ8TmF2YmFyPjwvTmF2YmFyPlxyXG5cdFx0PFJzQnV0dG9uPjwvUnNCdXR0b24+XHJcblx0XHQ8TGluZXNUb3A+PC9MaW5lc1RvcD5cclxuXHRcdDxMaW5lc0JvdHRvbT48L0xpbmVzQm90dG9tPlxyXG5cdFx0XHJcblx0XHQ8V29ya3BhZ2VPbmUgY2F0PXtjYXR9PjwvV29ya3BhZ2VPbmU+XHJcblx0XHQ8V29ya3BhZ2VUd28gZGF0YT17aXRlbXN9IHBhZ2U9e25icn0gY291bnQ9e2NvdW50fT48L1dvcmtwYWdlVHdvPlxyXG5cdFx0ey8qIDxXb3JrcGFnZVRocmVlPjwvV29ya3BhZ2VUaHJlZT5cclxuXHRcdDxXb3JrcGFnZUZvdXI+PC9Xb3JrcGFnZUZvdXI+XHJcblx0XHQ8V29ya3BhZ2VGaXZlPjwvV29ya3BhZ2VGaXZlPlxyXG5cdFx0PE1pbmlGb290ZXI+PC9NaW5pRm9vdGVyPiAqL31cclxuXHRcdDwvPlxyXG5cdCApO1xyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgV29ya3BhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gV29ya3BhZ2VGaXZlKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJcIiBhbHQ9XCJhY3Rpb25cIj5cclxuICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eUJsdWVcIj5cclxuICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cclxuICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgIFx0XHQ8L2Rpdj5cclxuICAgICAgICAgIFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cclxuICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgIFx0XHQ8L2Rpdj5cclxuICAgICAgICBcdFx0PC9kaXY+XHJcblxyXG4gICAgICBcdFx0PC9kaXY+XHJcbiAgICBcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtwYWdlRml2ZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBXb3JrcGFnZUZvdXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiIGFsdD1cImFjdGlvblwiPlxyXG4gICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5Qmx1ZVwiPlxyXG4gICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHJcblxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlclwiPlxyXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgXHRcdDwvZGl2PlxyXG4gICAgICAgICAgXHRcdFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlclwiPlxyXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgXHRcdDwvZGl2PlxyXG4gICAgICAgIFx0XHQ8L2Rpdj5cclxuXHJcbiAgICAgIFx0XHQ8L2Rpdj5cclxuICAgIFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgV29ya3BhZ2VGb3VyOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBT1MgZnJvbSBcImFvc1wiO1xyXG5pbXBvcnQgXCJhb3MvZGlzdC9hb3MuY3NzXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBNZW51LCBNZW51SXRlbSwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBBcnJvd0ZvcndhcmRJb3NTaGFycEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRJb3NTaGFycCc7XHJcbmltcG9ydCBNdWlBY2NvcmRpb24sIHsgQWNjb3JkaW9uUHJvcHMgfSBmcm9tICdAbXVpL21hdGVyaWFsL0FjY29yZGlvbic7XHJcbmltcG9ydCBNdWlBY2NvcmRpb25TdW1tYXJ5LCB7XHJcbiAgQWNjb3JkaW9uU3VtbWFyeVByb3BzLFxyXG59IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWNjb3JkaW9uU3VtbWFyeSc7XHJcbmltcG9ydCBNdWlBY2NvcmRpb25EZXRhaWxzIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWNjb3JkaW9uRGV0YWlscyc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcbmNvbnN0IEFjY29yZGlvbiA9IHN0eWxlZCgocHJvcHMpID0+IChcclxuICA8TXVpQWNjb3JkaW9uIGRpc2FibGVHdXR0ZXJzIGVsZXZhdGlvbj17MH0gc3F1YXJlIHsuLi5wcm9wc30gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBtYXhXaWR0aDogXCIxODVweFwiLFxyXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLDApXCIsXHJcbiAgY29sb3I6IFwid2hpdGVcIixcclxufSkpO1xyXG5cclxuY29uc3QgQWNjb3JkaW9uU3VtbWFyeSA9IHN0eWxlZCgocHJvcHMpID0+IChcclxuICA8TXVpQWNjb3JkaW9uU3VtbWFyeVxyXG4gICAgZXhwYW5kSWNvbj17PEFycm93Rm9yd2FyZElvc1NoYXJwSWNvbiBzeD17eyBmb250U2l6ZTogXCIwLjlyZW1cIiB9fSAvPn1cclxuXHR7Li4ucHJvcHN9XHJcbiAgLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gIGJhY2tncm91bmRDb2xvcjpcclxuICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJkYXJsXCJcclxuICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgLjA1KVwiXHJcbiAgICAgIDogXCJyZ2JhKDAsIDAsIDAsIC4wMylcIixcclxuICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gIFwiJiAuTXVpQWNjb3JkaW9uU3VtbWFyeS1leHBhbmRJY29uV3JhcHBlci5NdWktZXhwYW5kZWRcIjoge1xyXG4gICAgdHJhbnNmb3JtOiBcInJvdGF0ZSg5MGRlZylcIixcclxuICB9LFxyXG4gIFwiJiAuTXVpQWNjb3JkaW9uU3VtbWFyeS1jb250ZW50XCI6IHtcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgQWNjb3JkaW9uRGV0YWlscyA9IHN0eWxlZChNdWlBY2NvcmRpb25EZXRhaWxzKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgcGFkZGluZ1RvcDogMCxcclxuICBtYXJnaW5Ub3A6IDAsXHJcbiAgbWF4SGVpZ2h0OiBcIjE1MHB4XCIsXHJcbiAgb3ZlcmZsb3c6IFwic2Nyb2xsXCIsXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIFdvcmtwYWdlT25lKGNhdCkge1xyXG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gUmVhY3QudXNlU3RhdGUoXCJwYW5lbDFcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChwYW5lbCkgPT4gKGV2ZW50LCBuZXdFeHBhbmRlZCkgPT4ge1xyXG4gICAgc2V0RXhwYW5kZWQobmV3RXhwYW5kZWQgPyBwYW5lbCA6IGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBbd29yZHMsIHNldFdvcmRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBsZXQgY2F0ZWdvcnkgPSBjYXQuY2F0O1xyXG4gIGxldCBtZW51ID0gW107XHJcbiAgbGV0IHJhbmRvbVdvcmQgPSBbXHJcbiAgICBcIlLDiUFDVElWSVTDiVwiLFxyXG4gICAgXCJQUk9YSU1JVMOJXCIsXHJcbiAgICBcIlBBU1NJT05cIixcclxuICAgIFwiU1RSQVTDiUdJRVwiLFxyXG4gICAgXCJFVkVOVFwiLFxyXG4gICAgXCJDT05TRUlMXCIsXHJcbiAgICBcIkNPTU1VTklDQVRJT05cIixcclxuICAgIFwiUsOKVkVSXCIsXHJcbiAgICBcIkFNQklUSU9OXCIsXHJcbiAgICBcIklNQUdJTkFUSU9OXCIsXHJcbiAgICBcImFnaXJcIixcclxuICAgIFwicydhZGFwdGVyXCIsXHJcbiAgICBcImFudGljaXBlclwiLFxyXG4gICAgXCJhdXRvbm9taWVcIixcclxuICAgIFwiY3JvaXNzYW5jZVwiLFxyXG4gICAgXCJkw6lmaVwiLFxyXG4gICAgXCJwbGFuaWZpZXJcIixcclxuICAgIFwicG9zaXRpdmVyXCIsXHJcbiAgICBcImRpc3BvbmliaWxpdMOpXCIsXHJcbiAgICBcImR5bmFtaXNtZVwiLFxyXG4gICAgXCLDqWNvdXRlXCIsXHJcbiAgICBcInNlcnZpY2VcIixcclxuICAgIFwicHLDqXZpc2lvblwiLFxyXG4gICAgXCJ0w6luYWNpdMOpXCIsXHJcbiAgICBcInF1YWxpdMOpXCIsXHJcbiAgICBcIm1vYmlsaXNlclwiLFxyXG4gICAgXCJuw6lnb2NpZXJcIixcclxuICAgIFwib2JqZWN0aWZzXCIsXHJcbiAgICBcIm9wdGltaXNlclwiLFxyXG4gICAgXCJjaGFsbGVuZ2VcIixcclxuICAgIFwicsOpdXNzaXJcIixcclxuICAgIFwiZXhjZWxsZW5jZVwiLFxyXG4gICAgXCJyw6lhbGlzZXJcIixcclxuICAgIFwicsOpc3VsdGF0c1wiLFxyXG4gICAgXCJkw6l2ZWxvcHBlclwiLFxyXG4gICAgXCJzYXZvaXJmYWlyZVwiLFxyXG4gICAgXCJkaWFsb2d1ZVwiLFxyXG4gICAgXCJwcsOpdm9pclwiLFxyXG4gICAgXCJzeW5lcmdpZVwiLFxyXG4gICAgXCJwcm9qZXRcIixcclxuICAgIFwiaW5ub3ZhdGlvblwiLFxyXG4gICAgXCJtb3RpdmF0aW9uXCJdO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gZ2V0V29yZCgpIHtcclxuICAgICAgbGV0IHdvcmQgPSByYW5kb21Xb3JkW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmRvbVdvcmQubGVuZ3RoKV07XHJcbiAgICAgIHJhbmRvbVdvcmQuc3BsaWNlKHJhbmRvbVdvcmQuaW5kZXhPZih3b3JkKSk7XHJcbiAgICAgIHJldHVybiB3b3JkO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB3b3JkMSA9IGdldFdvcmQoKTtcclxuICAgIGxldCB3b3JkMiA9IGdldFdvcmQoKTtcclxuICAgIHNldFdvcmRzKFt3b3JkMSwgd29yZDJdKTtcclxuICB9LCBbXSk7XHJcbiAgQU9TLmluaXQoKTtcclxuICBjYXRlZ29yeS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBsZXQgaXRlbSA9IChcclxuXHRcdDxhIHN0eWxlPXt7dGV4dERlY29yYXRpb246IFwibm9uZVwiLCBjb2xvcjogXCJ3aGl0ZVwifX0gaHJlZj17YC9zZWFyY2hjYXQvJHtlbGVtZW50LmlkfS8ke2VsZW1lbnQuY2F0ZWdvcmllfWB9PlxyXG5cdFx0XHQ8cFxyXG5cdFx0XHRrZXk9e2VsZW1lbnQuaWR9XHJcblx0XHRcdHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwid2hpdGVcIn19XHJcblx0XHRcdGNsYXNzTmFtZT1cImxpZ2h0XCJcclxuXHRcdD5cclxuXHRcdFx0e2VsZW1lbnQuY2F0ZWdvcmllfVxyXG5cdFx0PC9wPlxyXG5cdCAgPC9hPlxyXG5cclxuICAgICk7XHJcbiAgICBtZW51LnB1c2goaXRlbSk7XHJcbiAgfSk7XHJcbiAgaWYgKHdvcmRzLmxlbmd0aCA+IDApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kMVwiIGFsdD1cImhvbWVwYWdlXCI+XHJcbiAgICAgICAgICA8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG4gICAgICAgICAgPC92aWRlbz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHlCbHVlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlcjJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi96ZW5pdGgvaW1hZ2VzL2JJTzFyOUYucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrcGFnZVRleHRcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1lZGl1bVwiPlPDiUzDiUNUSU9OIERFIFBST0pFVDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2x1bW5zXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiLCBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIgfX0gY2xhc3NOYW1lPVwibGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt3b3Jkc1swXX0gLiB7d29yZHNbMV19IC57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoXCJwYW5lbDFcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cInBhbmVsMWQtY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFuZWwxZC1oZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+Q0FUw4lHT1JJRTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPnttZW51fTwvQWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya3BhZ2VPbmU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIFdvcmtwYWdlVGhyZWUoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiIGFsdD1cImFjdGlvblwiPlxyXG4gICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5Qmx1ZVwiPlxyXG4gICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHJcblxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlclwiPlxyXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgXHRcdDwvZGl2PlxyXG4gICAgICAgICAgXHRcdFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlclwiPlxyXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgXHRcdDwvZGl2PlxyXG4gICAgICAgIFx0XHQ8L2Rpdj5cclxuXHJcbiAgICAgIFx0XHQ8L2Rpdj5cclxuICAgIFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgV29ya3BhZ2VUaHJlZTsiLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gXCJyZWFjdC1wYXJhbGxheFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAncmMtcGFnaW5hdGlvbic7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzaGVldHMvYnVsbWEvZ3JpZC9jb2x1bW5zLnNhc3MnO1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlc2hlZXRzL2J1bG1hL2hlbHBlcnMvc3BhY2luZy5zYXNzJztcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXNoZWV0cy9wYWdpbmF0aW9uLmxlc3MnIFxyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIFdvcmtwYWdlVHdvKHtkYXRhLCBwYWdlLCBjb3VudH0pIHtcclxuICBjb25zb2xlLmxvZyhjb3VudClcclxuICBsZXQgcGFnZU5iciA9IE1hdGguY2VpbChjb3VudCAvIDIwKVxyXG4gIGxldCBuYnIgPSBwYXJzZUludChwYWdlKVxyXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKHBhcmFtcykge1xyXG4gICAgZG9jdW1lbnQubG9jYXRpb24gPSBgL3Byb2pldHMvJHtwYXJhbXN9YFxyXG4gIH1cclxuXHJcbiAgbGV0IGJveCA9IFtdO1xyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBsZXQgaXRlbSA9IChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNvbHVtbiBjb2x1bW5zIGlzLW9uZS1maWZ0aCBpcy1jZW50ZXJlZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpcy1oYWxmXCI+XHJcbiAgICAgICAgICA8YSBocmVmPXtcIi9wcm9qZXQvXCIgKyBkYXRhW2luZGV4XS5pZH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+XHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9fSBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG4gICAgICAgICAgICAgICAge2RhdGFbaW5kZXhdLnByb2pldH1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvaW1hZ2Vwcm9qZXQvXCIgKyBkYXRhW2luZGV4XS5oZWFkZXJ9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICAgIGJveC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9aMXpJSkNLay5qcGVnXCIgYmx1cj17eyBtaW46IC0xLCBtYXg6IDMgfX0gc3RyZW5ndGg9ezQwMH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNlwiIGFsdD1cImFjdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW11bHRpbGluZSBpcy1jZW50ZXJlZFwiPlxyXG4gICAgICAgICAgICAgIHtib3h9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbW9iaWxlIGlzLWNlbnRlcmVkXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTUwcHhcIn19PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50PXtuYnJ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZT17MX1cclxuICAgICAgICAgICAgICAgIHRvdGFsPXtwYWdlTmJyfVxyXG4gICAgICAgICAgICAgICAgc2hvd1RpdGxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5MIGNlbnRlciBsaWdodCBsZXR0ZXJTcGFjaW5nTVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG4gICAgICAgICAgICAgICAgVm9pciBwbHVzXHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1BhcmFsbGF4PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya3BhZ2VUd287XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBMaW5rLCBEaXJlY3RMaW5rLCBFbGVtZW50LCBFdmVudHMsIGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsLCBzY3JvbGxTcHksIHNjcm9sbGVyIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJyBcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbi8vaW1wb3J0IHNjcm9sbEludG9WaWV3IGZyb20gJ3Njcm9sbC1pbnRvLXZpZXctaWYtbmVlZGVkJ1xyXG5pbXBvcnQgSG9tZXBhZ2UgZnJvbSAnLi9Ib21lcGFnZS9faG9tZXBhZ2UnO1xyXG5pbXBvcnQgV29yZHBhZ2UgZnJvbSAnLi9Ib21lcGFnZS9fd29yZCc7XHJcbmltcG9ydCBFbW90aW9uIGZyb20gJy4vSG9tZXBhZ2UvX2Vtb3Rpb24nO1xyXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vSG9tZXBhZ2UvX2FjdGlvbic7XHJcbmltcG9ydCBDcmVhdGlvbiBmcm9tICcuL0hvbWVwYWdlL19jcmVhdGlvbic7XHJcbmltcG9ydCBTYXRpc2ZhY3Rpb24gZnJvbSAnLi9Ib21lcGFnZS9fc2F0aXNmYWN0aW9uJztcclxuaW1wb3J0IENoaWZmcmVzIGZyb20gJy4vSG9tZXBhZ2UvX2NoaWZmcmVzJztcclxuaW1wb3J0IFZpc2lvbiBmcm9tICcuL0hvbWVwYWdlL192aXNpb24nO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vSG9tZXBhZ2UvX2Zvb3Rlcic7XHJcbmltcG9ydCBJbnN0YWZsdXggZnJvbSAnLi9Ib21lcGFnZS9faW5zdGEnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vX25hdmJhcic7XHJcbmltcG9ydCBSc0J1dHRvbiBmcm9tICcuL19yc0J1dHRvbic7XHJcbmltcG9ydCBMaW5lc1RvcCBmcm9tICcuL19saW5lc1RvcCc7XHJcbmltcG9ydCBMaW5lc0JvdHRvbSBmcm9tICcuL19saW5lc0JvdHRvbSc7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcblx0Y29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2luc3RhLCBzZXRJbnN0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGZldGNoKGAvZ2V0dEFsbENyZWF0aW9uYCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0LnRoZW4oXHJcblx0XHQgIChyZXN1bHQpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdFx0c2V0SXRlbXMocmVzdWx0KVxyXG5cdFx0ICB9LFxyXG5cdFx0ICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdCAgLy8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHQgIC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0ICAoZXJyb3IpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXHJcblx0XHQgIH1cclxuXHRcdClcclxuXHJcblx0XHQvLyBmZXRjaChgaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9hZ2VuY2V6ZW5pdGgvP19fYT0xP19fYT0xJl9fZD1kaXNgLHttZXRob2Q6J0dFVCcsfSlcclxuXHRcdC8vIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0Ly8gLnRoZW4oKHJlc3VsdEluc3RhKSA9PiB7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKFwidG90b1wiKVxyXG5cdFx0Ly8gXHRjb25zb2xlLmxvZyhyZXN1bHRJbnN0YSlcclxuXHRcdC8vICAgfSxcclxuXHRcdC8vICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHQvLyAgIC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0Ly8gICAvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdC8vICAgKGVycm9yKSA9PiB7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdFx0Ly8gICB9XHJcblx0XHQvLyApXHJcblx0ICB9LCBbXSlcclxuXHJcblx0Ly8gbGV0IHN0ZXAgPSAxXHJcblxyXG5cdC8vIEFPUy5pbml0KClcclxuXHQvLyBsZXQgc2Nyb2xsID0gZmFsc2VcclxuXHQvLyBpZihzdGVwID09IDQpe1xyXG5cdC8vIFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhdGNobmF6ZScpLnN0eWxlLnBhZGRpbmdUb3AgPSAnMHB4J1xyXG5cdC8vIH1cclxuXHJcblx0Ly8gIHZhciBsYXN0U2Nyb2xsVG9wID0gMDtcclxuXHJcblx0Ly8gLy8gZWxlbWVudCBzaG91bGQgYmUgcmVwbGFjZWQgd2l0aCB0aGUgYWN0dWFsIHRhcmdldCBlbGVtZW50IG9uIHdoaWNoIHlvdSBoYXZlIGFwcGxpZWQgc2Nyb2xsLCB1c2Ugd2luZG93IGluIGNhc2Ugb2Ygbm8gdGFyZ2V0IGVsZW1lbnQuXHJcblx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24oKXsgLy8gb3Igd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIi4uLi5cclxuXHQvLyB2YXIgc3QgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDsgLy8gQ3JlZGl0czogXCJodHRwczovL2dpdGh1Yi5jb20vcWVyZW15L3NvL2Jsb2IvbWFzdGVyL3NvLmRvbS5qcyNMNDI2XCJcclxuXHQvLyBpZiAoc3QgPiBsYXN0U2Nyb2xsVG9wICYmIHNjcm9sbCA9PSBmYWxzZSAmJiBzdGVwIDwgOSl7XHJcblx0Ly8gXHRjb25zb2xlLmxvZyhzdGVwICsgXCIgZG93blwiKVxyXG5cdFx0XHJcblxyXG5cdC8vIFx0IHN0ZXArK1xyXG5cdC8vIFx0c2Nyb2xsZXIuc2Nyb2xsVG8oYHNjcm9sbC10by1lbGVtZW50JHtzdGVwfWAsIHtcclxuXHQvLyBcdFx0ZHVyYXRpb246IDgwMCxcclxuXHQvLyBcdFx0ZGVsYXk6IDAsXHJcblx0Ly8gXHRcdHNtb290aDogJ2Vhc2VJbk91dFF1YXJ0J1xyXG5cdC8vIFx0ICB9KSBcclxuXHRcdCAgXHJcblx0Ly8gXHQgc2Nyb2xsID0gdHJ1ZVxyXG5cdC8vIFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0Ly8gXHRcdHNjcm9sbCA9IGZhbHNlXHJcblx0Ly8gXHR9LCAxMDAwKTtcclxuXHQvLyB9IGVsc2UgaWYoc3QgPCBsYXN0U2Nyb2xsVG9wICYmIHNjcm9sbCA9PSBmYWxzZSAmJiBzdGVwID4gMSl7XHJcblxyXG5cdC8vIFx0c3RlcC0tXHJcblx0Ly8gXHRzY3JvbGxlci5zY3JvbGxUbyhgc2Nyb2xsLXRvLWVsZW1lbnQke3N0ZXB9YCwge1xyXG5cdC8vIFx0XHRkdXJhdGlvbjogODAwLFxyXG5cdC8vIFx0XHRkZWxheTogMCxcclxuXHQvLyBcdFx0c21vb3RoOiAnZWFzZUluT3V0UXVhcnQnXHJcblx0Ly8gXHR9KVxyXG5cdFx0ICBcclxuXHQvLyBcdCBjb25zb2xlLmxvZyhzdGVwICsgXCIgdXBcIilcclxuXHRcdCBcclxuXHQvLyBcdCBzY3JvbGwgPSB0cnVlXHJcblx0Ly8gXHQgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0Ly8gXHRcdHNjcm9sbCA9IGZhbHNlXHJcblx0Ly8gXHQgfSwgMTAwMCk7XHJcblx0Ly8gfVxyXG5cdC8vIGxhc3RTY3JvbGxUb3AgPSBzdCA8PSAwID8gMCA6IHN0OyAvLyBGb3IgTW9iaWxlIG9yIG5lZ2F0aXZlIHNjcm9sbGluZ1xyXG5cdC8vIH0sIGZhbHNlKTtcclxuXHJcblx0aWYoaXRlbXMpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0PE5hdmJhcj48L05hdmJhcj5cclxuXHRcdFx0PExpbmVzVG9wPjwvTGluZXNUb3A+XHJcblx0XHRcdDxMaW5lc0JvdHRvbT48L0xpbmVzQm90dG9tPlxyXG5cdFx0XHQ8UnNCdXR0b24+PC9Sc0J1dHRvbj5cclxuXHRcdFx0XHJcblxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDFcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+XHRcdFx0XHJcblxyXG5cdFx0XHRcdFx0PEhvbWVwYWdlID48L0hvbWVwYWdlPlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0PC9FbGVtZW50Plx0XHJcblxyXG5cdFx0XHRcdHsvKiA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsIGhlaWdodDpcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIn19PjwvZGl2PiAqL31cclxuXHRcdFx0XHQ8V29yZHBhZ2UgPjwvV29yZHBhZ2U+XHJcblx0XHRcdFx0ey8qIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwifX0+PC9kaXY+ICovfVxyXG5cclxuXHJcblxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDNcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+XHJcblxyXG5cdFx0XHRcdFx0PEVtb3Rpb24gPjwvRW1vdGlvbj5cclxuXHJcblx0XHRcdFx0PC9FbGVtZW50PlxyXG5cclxuXHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50NFwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj5cclxuXHRcdFx0XHRcdDxBY3Rpb24gPjwvQWN0aW9uPlxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50NVwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj5cclxuXHJcblx0XHRcdFx0XHQ8Q3JlYXRpb24gaXRlbT17aXRlbXN9PjwvQ3JlYXRpb24+XHJcblxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50NlwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj5cclxuXHJcblx0XHRcdFx0XHQ8U2F0aXNmYWN0aW9uID48L1NhdGlzZmFjdGlvbj5cclxuXHJcblx0XHRcdFx0PC9FbGVtZW50PlxyXG5cclxuXHRcdFx0XHQ8RWxlbWVudCBuYW1lPVwic2Nyb2xsLXRvLWVsZW1lbnQ3XCIgY2xhc3NOYW1lPVwiZWxlbWVudFwiPlxyXG5cclxuXHRcdFx0XHRcdFx0PENoaWZmcmVzID48L0NoaWZmcmVzPlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHQ8L0VsZW1lbnQ+XHJcblxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDhcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+XHJcblxyXG5cdFx0XHRcdFx0PFZpc2lvbiA+PC9WaXNpb24+XHJcblxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50OFwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj5cclxuXHJcblx0XHRcdFx0XHRcdDxJbnN0YWZsdXggPjwvSW5zdGFmbHV4PlxyXG5cclxuXHRcdFx0XHQ8L0VsZW1lbnQ+XHJcblxyXG5cclxuXHJcblx0XHRcdFx0PEZvb3RlciA+PC9Gb290ZXI+XHJcblxyXG5cclxuXHRcdFx0ey8qIDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDEwXCIgY2xhc3NOYW1lPVwiZWxlbWVudFwiPjwvRWxlbWVudD4gKi99XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcdFx0XHJcblx0fVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCIgaW1wb3J0IFwiLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuZnVuY3Rpb24gTGluZXNCb3R0b20oKSB7XHJcblx0cmV0dXJuICggXHJcblx0XHQ8PlxyXG5cclxuXHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmVCXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMjAwXCI+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmU0XCI+PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmU1IGxpbmVBbmltZTJcIj48L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHRcdDwvPlxyXG5cdCApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5lc0JvdHRvbTsiLCIgaW1wb3J0IFwiLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuZnVuY3Rpb24gTGluZXNUb3AoKSB7XHJcblx0bGV0IGF1ZGlvID0gbmV3IEF1ZGlvKFwiL3plbml0aC9hdXRyZS9Ib3Jpem9uLm1wM1wiKVxyXG5cclxuXHRjb25zdCBzdGFydCA9ICgpID0+IHtcclxuXHQgIGF1ZGlvLnBsYXkoKVxyXG5cdH1cclxuXHRyZXR1cm4gKCBcclxuXHRcdDw+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGluZUFcIiAgZGF0YS1hb3M9XCJmYWRlLWRvd25cIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmUyXCJvbkNsaWNrPXtzdGFydH0+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaW5lMyBsaW5lQW5pbWVcIiA+PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC8+XHJcblx0ICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmVzVG9wOyIsImltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JyBcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIG5hdmJhcigpIHtcclxuXHJcbiAgQU9TLmluaXQoKVxyXG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFNlYXJjaElucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IHRlbGVwb3J0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxvY2F0aW9uLnJlcGxhY2UoJy9zZWFyY2gvJyArIHNlYXJjaElucHV0KTtcclxuICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9zZWFyY2gvXCIrc2VhcmNoSW5wdXRcclxuICB9XHJcbiAgXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblxyXG4gICAgPGlucHV0IGlkPVwibWVudV9fdG9nZ2xlXCIgdHlwZT1cImNoZWNrYm94XCIgIC8+XHJcblxyXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWVudV9fYnRuXCIgaHRtbEZvcj1cIm1lbnVfX3RvZ2dsZVwiIGRhdGEtYW9zPVwiZmFkZS1kb3duXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMjAwXCI+XHJcbiAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgXHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51X19ib3hcIiBkYXRhLWFvcz1cImZhZGUtcmlnaHRcIj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGVsZXBvcnR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX19ncm91cCBmaWVsZCBkaXZDMSBtZW51X19pdGVtMVwiID5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJpbnB1dFwiIHNpemU9XCIxNVwiIGNsYXNzTmFtZT1cImZvcm1fX2ZpZWxkXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgaWQ9XCJlbWFpbFwiIHZhbHVlPXtzZWFyY2hJbnB1dH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcmVxdWlyZWQ+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxcIj5SZWNoZXJjaGU8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lbnVfX2l0ZW0gbGlnaHQgbGV0dGVyU3BhY2luZ1NcIj48TGluayBjbGFzc05hbWU9XCJ0ZXh0RGVjbyBtYXJnaW5TdG9wXCIgdG89XCIvXCI+QUNDVUVJTDwvTGluaz48L2g1PlxyXG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZW51X19pdGVtIGxpZ2h0IGxldHRlclNwYWNpbmdTXCI+PExpbmsgY2xhc3NOYW1lPVwidGV4dERlY29cIiB0bz1cIi9jbGllbnRzXCI+Q0xJRU5UUzwvTGluaz48L2g1PlxyXG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZW51X19pdGVtIGxpZ2h0IGxldHRlclNwYWNpbmdTXCI+PExpbmsgY2xhc3NOYW1lPVwidGV4dERlY29cIiB0bz1cIi9wcm9qZXRzLzFcIj5QUk9KRVRTPC9MaW5rPjwvaDU+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lbnVfX2l0ZW0gbGlnaHQgbGV0dGVyU3BhY2luZ1NcIj48TGluayBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiIHRvPVwiL2NvbnRhY3RcIj5DT05UQUNUPC9MaW5rPjwvaDU+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dERlY28gbGV0dGVyU3BhY2luZ1NcIiBocmVmPVwiL2xvZ2luXCI+PGg1IGNsYXNzTmFtZT1cIm1lbnVfX2l0ZW0gdGV4dERlY28gbGlnaHRcIj5BRE1JTjwvaDU+PC9hPlxyXG4gICAgICA8L3VsPlxyXG5cdFx0PC8+XHJcblx0ICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuYXZiYXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7IFxyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gUnNCdXR0b24oKSB7XHJcblx0QU9TLmluaXQoe29uY2U6IHRydWUsfSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJzIGFvcy1pdGVtIG92ZXJmbG93SGlkZGVuXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMjAwXCI+XHJcblx0XHRcdDxhIGNsYXNzTmFtZT1cImZiXCIgaHJlZj0naHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0FHRU5DRVpFTklUSC8nPjwvYT5cclxuXHRcdFx0PGEgY2xhc3NOYW1lPVwiaW5zdGFcIiBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2FnZW5jZXplbml0aC8/aGw9ZnInPjwvYT5cclxuXHRcdFx0PGEgY2xhc3NOYW1lPVwibGlua2VkaW5cIiBocmVmPSdodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9hZ2VuY2UtemVuaXRoLyc+PC9hPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8Lz4gXHJcblx0XHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSc0J1dHRvbjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJCcm93c2VyUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJ1c2VMb2NhdGlvbiIsIkhvbWUiLCJXb3JrcGFnZSIsIldvcmtwYWdlQ2xpZW50IiwiQ29udGFjdFBhZ2UiLCJDbGllbnRQYWdlIiwidXNlTGF5b3V0RWZmZWN0IiwiUHJvamVjdHBhZ2UiLCJTZWFyY2hQYWdlIiwiU2VhcmNoUGFnZTIiLCJNYWluIiwiV3JhcHBlciIsImNoaWxkcmVuIiwibG9jYXRpb24iLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvIiwicGF0aG5hbWUiLCJ3aW5kb3ciLCJjcmVhdGVSb290IiwiY29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwiTmF2YmFyIiwiQ2xpZW50UGFnZU9uZSIsIkNsaWVudHBhZ2VUd28iLCJDbGllbnRwYWdlVGhyZWUiLCJDbGllbnRwYWdlRm91ciIsIkNsaWVudHBhZ2VGaXZlIiwiQ2xpZW50cGFnZVNpeCIsInVzZVBhcmFtcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2xpZW50cGFnZSIsImlkIiwiZXJyb3IiLCJzZXRFcnJvciIsImlzTG9hZGVkIiwic2V0SXNMb2FkZWQiLCJpc0xvYWRlZEltZyIsInNldElzTG9hZGVkSW1nIiwiaXNMb2FkZWROZXh0UHJldiIsInNldElzTG9hZGVkTmV4dFByZXYiLCJpc0ltZ1JlYWR5Iiwic2V0SW1nUmVhZHkiLCJpdGVtcyIsInNldEl0ZW1zIiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwiaGVhZGVyIiwic2V0SGVhZGVyIiwicHJlY2kiLCJzZXRQcmVjaSIsInNlY29uZCIsInNldFNlY29uZCIsImRpc3BsYXkiLCJzZXREaXNwbGF5IiwiTmV4dFByZXYiLCJzZXROZXh0UHJldiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInRoaXNSZXMiLCJKU09OIiwicGFyc2UiLCJpIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImZvY3VzIiwic2Vjb25kYWlyZSIsIk5leHQiLCJQcmV2IiwibWVzc2FnZSIsIkFPUyIsIkxpbmsiLCJpbml0IiwiYmFja2dyb3VuZEltYWdlIiwiZGF0YTIiLCJlbGVtZW50cHJlY2lzaW9uIiwidGV4dFRyYW5zZm9ybSIsIl9faHRtbCIsIm9iamVjdEZpdCIsImltYWdlIiwiQ2xpZW50cGFnZU9uZSIsImRhdGEiLCJtaXNzaW9uIiwibnAiLCJ0ZW1vaWduYWdlIiwiaHJlZiIsIm5vbUNsaWVudCIsImVuamV1IiwiaGlzdG9pcmUiLCJyZXBvbnNlIiwiUnNCdXR0b24iLCJMaW5lc1RvcCIsIkxpbmVzQm90dG9tIiwiQ29udGFjdFBhZ2VPbmUiLCJTd2FsIiwid2l0aFJlYWN0Q29udGVudCIsIk15U3dhbCIsImVtYWlsIiwibmFtZSIsInZhbHVlcyIsInNldFZhbHVlcyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJwZXJzaXN0IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJlIiwiZGlzYWJsZWQiLCJwcmV2ZW50RGVmYXVsdCIsImZpcmUiLCJ0ZXh0IiwidG9hc3QiLCJpY29uIiwidGl0bGUiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsInJlcXVlc3RPcHRpb25zIiwiYm9keSIsInN0cmluZ2lmeSIsIm1hcmdpblRvcCIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiRWxlbWVudCIsIlBhcmFsbGF4IiwiQWN0aW9uIiwicGFkZGluZ1RvcCIsImJhY2tncm91bmRTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZHJvcEZpbHRlciIsIkNoaWZmcmVzIiwiQ3JlYXRpb24iLCJpdGVtIiwic2xpZGVyIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJuZXdTbGlkZXIiLCJSZW1vdmVCbHVyRGV0YWlsIiwiQmx1ckRldGFpbCIsInBvaW50ZXJFdmVudHMiLCJ0ZXh0QWxpZ24iLCJsZWZ0IiwidG9wIiwiY3JlYXRpb24iLCJwdXNoIiwic3R5bGUiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwiRW1vdGlvbiIsIkZvb3RlciIsImhhbmRsZUVtYWlsSW5wdXRDaGFuZ2UiLCJyZXNwb25zZSIsIkhvbWVwYWdlIiwidXNlUmVmIiwiSW5zdGFmbHV4IiwiaW5zdGEiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYXN5bmMiLCJhcHBlbmRDaGlsZCIsInJlYWR5U3RhdGUiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJib3JkZXIiLCJNaW5pRm9vdGVyIiwiU2F0aXNmYWN0aW9uIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiVmlzaW9uIiwiTWFycXVlZSIsIldvcmRwYWdlIiwib3ZlcmZsb3ciLCJQcm9qZWN0UGFnZU9uZSIsIlByb2plY3RwYWdlVHdvIiwiUHJvamVjdHBhZ2VUaHJlZSIsIlByb2plY3RwYWdlRm91ciIsIlByb2plY3RwYWdlRml2ZSIsIlByb2plY3RwYWdlU2l4IiwicmVzdWx0aW1nIiwiTGlnaHRib3giLCJUaHVtYm5haWxzIiwib3BlbiIsInNldE9wZW4iLCJhcnJheUltYWdlIiwibWFyZ2luQm90dG9tIiwicGFkZGluZ0JvdHRvbSIsIlByb2plY3RwYWdlT25lIiwicHJvamV0Iiwic2VjdGV1ciIsImNsaWVudCIsImR1cmVlIiwiY2F0ZWdvcmllIiwiZGVtYW5kZSIsImRlZmkiLCJhY3Rpb24iLCJTZWFyY2hQYWdlT25lMiIsIlNlYXJjaFBhZ2VUd28yIiwiaW5mbyIsImJveCIsImluZGV4IiwibWF4V2lkdGgiLCJTZWFyY2hQYWdlT25lIiwiU2VhcmNoUGFnZVR3byIsIldvcmtwYWdlQ2xpZW50T25lIiwiV29ya3BhZ2VDbGllbnRUd28iLCJXb3JrcGFnZU9uZSIsIldvcmtwYWdlVHdvIiwiV29ya3BhZ2VUaHJlZSIsIldvcmtwYWdlRm91ciIsIldvcmtwYWdlRml2ZSIsIm5iciIsImlzQ291bnRMb2FkZWQiLCJzZXRJc0NvdW50TG9hZGVkIiwiaXNDYXRMb2FkZWQiLCJzZXRJc0NhdExvYWRlZCIsImNhdCIsInNldENhdCIsImNvdW50Iiwic2V0Q291bnQiLCJzdHlsZWQiLCJCdXR0b24iLCJNZW51IiwiTWVudUl0ZW0iLCJUeXBvZ3JhcGh5IiwiQXJyb3dGb3J3YXJkSW9zU2hhcnBJY29uIiwiTXVpQWNjb3JkaW9uIiwiQWNjb3JkaW9uUHJvcHMiLCJNdWlBY2NvcmRpb25TdW1tYXJ5IiwiQWNjb3JkaW9uU3VtbWFyeVByb3BzIiwiTXVpQWNjb3JkaW9uRGV0YWlscyIsIkFjY29yZGlvbiIsInByb3BzIiwidGhlbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIkFjY29yZGlvblN1bW1hcnkiLCJmb250U2l6ZSIsInBhbGV0dGUiLCJtb2RlIiwiZmxleERpcmVjdGlvbiIsInRyYW5zZm9ybSIsInNwYWNpbmciLCJBY2NvcmRpb25EZXRhaWxzIiwicGFkZGluZyIsIm1heEhlaWdodCIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJoYW5kbGVDaGFuZ2UiLCJwYW5lbCIsIm5ld0V4cGFuZGVkIiwid29yZHMiLCJzZXRXb3JkcyIsImNhdGVnb3J5IiwibWVudSIsInJhbmRvbVdvcmQiLCJnZXRXb3JkIiwid29yZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNwbGljZSIsImluZGV4T2YiLCJ3b3JkMSIsIndvcmQyIiwidGV4dERlY29yYXRpb24iLCJQYWdpbmF0aW9uIiwicGFnZSIsInBhZ2VOYnIiLCJjZWlsIiwicGFyc2VJbnQiLCJvbkNoYW5nZSIsInBhcmFtcyIsIm1pbiIsIm1heCIsIkRpcmVjdExpbmsiLCJFdmVudHMiLCJhbmltYXRlU2Nyb2xsIiwic2Nyb2xsIiwic2Nyb2xsU3B5Iiwic2Nyb2xsZXIiLCJzZXRJbnN0YSIsImF1ZGlvIiwiQXVkaW8iLCJzdGFydCIsInBsYXkiLCJuYXZiYXIiLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0IiwidGVsZXBvcnQiLCJyZXBsYWNlIiwib25jZSJdLCJzb3VyY2VSb290IjoiIn0=