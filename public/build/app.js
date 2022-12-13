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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
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













var Main = function Main() {
  var Wrapper = function Wrapper(_ref) {
    var children = _ref.children;
    var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useLocation)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_home_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    exact: true,
    path: "/projets/:nbr",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Workpage_workpage__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    exact: true,
    path: "/clients",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_WorkpageClient_workpageClient__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    exact: true,
    path: "/contact",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Contactpage_contactpage__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    exact: true,
    path: "/client/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Clientpage_clientpage__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    exact: true,
    path: "/projet/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Projectpage_projectpage__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    exact: true,
    path: "/search/:info",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SearchPage_SearchPage__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function Clientpage() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.useParams)(),
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");




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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");





















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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)({
      email: '',
      name: '',
      message: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var handleInputChange = function handleInputChange(event) {
    console.log(event);
    event.persist();
    setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, event.target.name, event.target.value)));
    console.log(values.email);
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_24__.Link, {
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
    "class": "form__group field  divC1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("input", {
    type: "input",
    "class": "form__field",
    placeholder: "Name",
    name: "name",
    id: "name",
    value: values.name,
    onChange: handleInputChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("label", {
    "for": "name",
    "class": "form__label"
  }, "Votre nom")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    "class": "form__group2 field divC2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("input", {
    type: "input",
    "class": "form__field",
    placeholder: "email",
    name: "email",
    id: "email",
    value: values.email,
    onChange: handleInputChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("label", {
    "for": "name",
    "class": "form__label"
  }, "Votre adresse e-mail")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    "class": "textarea__group field divC3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("textarea", {
    type: "input",
    "class": "form__field",
    placeholder: "message",
    name: "message",
    id: "message",
    value: values.message,
    onChange: handleInputChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("label", {
    "for": "name",
    "class": "form__label"
  }, "Votre besoin")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("input", {
    type: "submit",
    className: "textDeco",
    value: "Submit"
  }))))))));
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_3__);





function Action() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_parallax__WEBPACK_IMPORTED_MODULE_3__.Parallax, {
    bgImage: "/zenith/images/aWELhk8A.jpeg",
    blur: {
      min: -1,
      max: 3
    },
    strength: 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "",
    style: {
      paddingTop: "30px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container2",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "titreA medium letterSpacing marginStop",
    id: "patchnaze"
  }, "ACTION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
    className: "light letterSpacingS sousTitre"
  }, "SE CONCENTRER SUR L\u2019ESSENTIEL : VOUS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
    slidesPerView: 3,
    spaceBetween: -100,
    className: "swiper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
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
  }, "ACCOMPAGNEMENT", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "360\xB0")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
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
  }, "SOLUTION", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "SUR-MESURE")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
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


function Chiffres() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_parallax__WEBPACK_IMPORTED_MODULE_1__.Parallax, {
    bgImage: "/zenith/images/Z1zIJCKk.jpeg",
    blur: {
      min: -1,
      max: 3
    },
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/react/swiper-react.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_7__);









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
    blur: {
      min: -1,
      max: 3
    },
    strength: 800
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "",
    style: {
      paddingTop: '40px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    "data-aos": "zoom-in",
    "data-aos-mirror": "",
    "data-aos-once": "false",
    "data-aos-anchor-placement": ""
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
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


function Emotion() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_parallax__WEBPACK_IMPORTED_MODULE_1__.Parallax, {
    bgImage: "/zenith/images/Z1zIJCKk.jpeg",
    blur: {
      min: -1,
      max: 3
    },
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
    "data-aos-anchor-placement": "top-center"
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_23__);





















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
    blur: {
      min: -1,
      max: 3
    },
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_24__.Link, {
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
    className: "center",
    src: "/zenith/images/wX2LCIT.png",
    alt: "",
    width: "220"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("p", {
    className: "titreF light letterSpacingXS"
  }, "ZENITH ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("br", null), " VAL D\u2019EUROPE ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("br", null), " HELLO@AGENCEZENITH.COM ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("br", null), " 06.11.86.65.80.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "divD"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("h4", {
    className: "titreD medium letterSpacing marginBottom"
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
    blur: {
      min: -1,
      max: 3
    },
    strength: 800
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "zoom-in",
    "data-aos-mirror": "true",
    "data-aos-once": "false",
    "data-aos-anchor-placement": "top-center"
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
      marginLeft: "10%",
      marginRight: "10%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("iframe", {
    src: "//lightwidget.com/widgets/f2c83bb613395c9fa7bd7a355247d3cf.html",
    scrolling: "no",
    allowtransparency: "true",
    "class": "lightwidget-widget"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
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
      blur: {
        min: -1,
        max: 3
      },
      strength: 0
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "",
      style: {
        paddingTop: '60px'
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




function Vision() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_parallax__WEBPACK_IMPORTED_MODULE_3__.Parallax, {
    bgImage: "/zenith/images/aWELhk8A.jpeg",
    strength: 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "",
    style: {
      paddingTop: '200px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "zoom-in",
    "data-aos-mirror": "true",
    "data-aos-once": "false",
    "data-aos-anchor-placement": "top-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper",
    style: {
      height: "1000px"
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
  }, "D\xC9VELOPPEMENT COMMERCIAL "))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
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
      height: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '100%'
    },
    "data-aos": "zoom-in",
    "data-aos-mirror": "true",
    "data-aos-once": "false",
    "data-aos-anchor-placement": "top-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "parent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_fast_marquee__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      width: "100%",
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      height: "170px"
    },
    gradient: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "wordpage letterSpacing light  grid1",
    id: "wordpage"
  }, "R\xC9ACTIVIT\xC9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "margin medium wordpageText grid2"
  }, "\xB7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "wordpage letterSpacing outline normal grid3"
  }, "PROXIMIT\xC9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: " margin medium wordpageText outline grid4"
  }, "\xB7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "wordpage light letterSpacing grid5"
  }, "PASSION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: " wordpageText  medium grid6"
  }, "\xB7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "wordpage normal outline letterSpacing grid7"
  }, "STRAT\xC9GIE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: " wordpageText outline medium grid6"
  }, "\xB7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_fast_marquee__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      width: "100%",
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      height: "170px"
    },
    direction: "right",
    gradient: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "wordpage normal letterSpacing grid9"
  }, "EVENT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: " wordpageText medium grid10"
  }, "\xB7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "wordpage marron normal letterSpacing grid11"
  }, "ZENITH"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: " wordpageText outline medium grid12"
  }, "\xB7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "wordpage normal letterSpacing grid13"
  }, "CONSEIL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: " wordpageText medium grid14"
  }, "\xB7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "wordpage normal letterSpacing grid15"
  }, "COMMUNICATION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: " wordpageText outline medium grid6"
  }, "\xB7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_fast_marquee__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      width: "100%",
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      height: "170px"
    },
    gradient: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "wordpage medium letterSpacing grid17"
  }, "CR\xC9ATIVIT\xC9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: " wordpageText medium grid18"
  }, "\xB7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "wordpage light outline letterSpacing grid19"
  }, "R\xCAVER"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: " wordpageText outline medium grid20"
  }, "\xB7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "wordpage light letterSpacing grid21"
  }, "AMBITION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: " wordpageText medium grid22"
  }, "\xB7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "wordpage outline normal letterSpacing grid23"
  }, "IMAGINATION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: " wordpageText outline  medium grid6"
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function Projectpage() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_21__.useParams)(),
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
            console.log(thisRes[i]);
            console.log(i);
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
    }), /*#__PURE__*/React.createElement(_projectpageFive__WEBPACK_IMPORTED_MODULE_18__["default"], null), /*#__PURE__*/React.createElement(_projectpageSix__WEBPACK_IMPORTED_MODULE_19__["default"], {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ProjectpageFive() {
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


function ProjectpageFour(_ref) {
  var preci = _ref.preci,
    data2 = _ref.data2;
  console.log(preci);
  if (data2.focus) {
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
    }, "Focus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "light containerCenterClient text-h5",
      style: {
        textTransform: 'uppercase'
      },
      dangerouslySetInnerHTML: {
        __html: data2.focus
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: " boxClient"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      className: " contain",
      style: {
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");



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
  }, "DUR\xC9E PROJET : N/A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
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
  }, "   |   "), data.data.categorie[1] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
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


function ProjectpageSix(_ref) {
  var data = _ref.data,
    np = _ref.np;
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


function ProjectpageThree(data) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapperDarkBlueClient"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "containerFlex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "contain",
    src: "/images/imageprojet/" + data.data.image,
    alt: ""
  }))));
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


function ProjectpageTwo(data) {
  if (data.data.demande || data.data.defi || data.data.action) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        backgroundImage: "url(/zenith/images/x9nes5V.jpg)"
      },
      className: "demiblocClient"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "demiblocClientOpacity"
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






















function SearchPage2() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_21__.useParams)(),
    info = _useParams.info;
  var _useParams2 = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_21__.useParams)(),
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");




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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");




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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");




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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");


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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function Workpage() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_24__.useParams)(),
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/esm/styles/styled.js");
/* harmony import */ var _mui_icons_material_ArrowForwardIosSharp__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/icons-material/ArrowForwardIosSharp */ "./node_modules/@mui/icons-material/ArrowForwardIosSharp.js");
/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/Accordion */ "./node_modules/@mui/material/esm/Accordion/Accordion.js");
/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/AccordionSummary */ "./node_modules/@mui/material/esm/AccordionSummary/AccordionSummary.js");
/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/AccordionDetails */ "./node_modules/@mui/material/esm/AccordionDetails/AccordionDetails.js");



















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










var Accordion = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_22__["default"])(function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_23__["default"], _extends({
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
var AccordionSummary = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_22__["default"])(function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_24__["default"], _extends({
    expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_mui_icons_material_ArrowForwardIosSharp__WEBPACK_IMPORTED_MODULE_25__["default"], {
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
var AccordionDetails = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_22__["default"])(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_26__["default"])(function (_ref3) {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.Link, {
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
/* harmony import */ var _Homepage_homepage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Homepage/_homepage */ "./assets/components/Homepage/_homepage.jsx");
/* harmony import */ var _Homepage_word__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Homepage/_word */ "./assets/components/Homepage/_word.jsx");
/* harmony import */ var _Homepage_emotion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Homepage/_emotion */ "./assets/components/Homepage/_emotion.jsx");
/* harmony import */ var _Homepage_action__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Homepage/_action */ "./assets/components/Homepage/_action.jsx");
/* harmony import */ var _Homepage_creation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Homepage/_creation */ "./assets/components/Homepage/_creation.jsx");
/* harmony import */ var _Homepage_satisfaction__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Homepage/_satisfaction */ "./assets/components/Homepage/_satisfaction.jsx");
/* harmony import */ var _Homepage_chiffres__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Homepage/_chiffres */ "./assets/components/Homepage/_chiffres.jsx");
/* harmony import */ var _Homepage_vision__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Homepage/_vision */ "./assets/components/Homepage/_vision.jsx");
/* harmony import */ var _Homepage_footer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Homepage/_footer */ "./assets/components/Homepage/_footer.jsx");
/* harmony import */ var _Homepage_insta__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Homepage/_insta */ "./assets/components/Homepage/_insta.jsx");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_navbar */ "./assets/components/_navbar.jsx");
/* harmony import */ var _rsButton__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_rsButton */ "./assets/components/_rsButton.jsx");
/* harmony import */ var _linesTop__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_linesTop */ "./assets/components/_linesTop.jsx");
/* harmony import */ var _linesBottom__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./_linesBottom */ "./assets/components/_linesBottom.jsx");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");













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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement((react__WEBPACK_IMPORTED_MODULE_13___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_navbar__WEBPACK_IMPORTED_MODULE_25__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_linesTop__WEBPACK_IMPORTED_MODULE_27__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_linesBottom__WEBPACK_IMPORTED_MODULE_28__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_rsButton__WEBPACK_IMPORTED_MODULE_26__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_scroll__WEBPACK_IMPORTED_MODULE_14__.Element, {
      name: "scroll-to-element1",
      className: "element"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_Homepage_homepage__WEBPACK_IMPORTED_MODULE_15__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_Homepage_word__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_scroll__WEBPACK_IMPORTED_MODULE_14__.Element, {
      name: "scroll-to-element3",
      className: "element"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_Homepage_emotion__WEBPACK_IMPORTED_MODULE_17__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_scroll__WEBPACK_IMPORTED_MODULE_14__.Element, {
      name: "scroll-to-element4",
      className: "element"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_Homepage_action__WEBPACK_IMPORTED_MODULE_18__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_scroll__WEBPACK_IMPORTED_MODULE_14__.Element, {
      name: "scroll-to-element5",
      className: "element"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_Homepage_creation__WEBPACK_IMPORTED_MODULE_19__["default"], {
      item: items
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_scroll__WEBPACK_IMPORTED_MODULE_14__.Element, {
      name: "scroll-to-element6",
      className: "element"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_Homepage_satisfaction__WEBPACK_IMPORTED_MODULE_20__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_scroll__WEBPACK_IMPORTED_MODULE_14__.Element, {
      name: "scroll-to-element7",
      className: "element"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_Homepage_chiffres__WEBPACK_IMPORTED_MODULE_21__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_scroll__WEBPACK_IMPORTED_MODULE_14__.Element, {
      name: "scroll-to-element8",
      className: "element"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_Homepage_vision__WEBPACK_IMPORTED_MODULE_22__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_scroll__WEBPACK_IMPORTED_MODULE_14__.Element, {
      name: "scroll-to-element8",
      className: "element"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_Homepage_insta__WEBPACK_IMPORTED_MODULE_24__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_Homepage_footer__WEBPACK_IMPORTED_MODULE_23__["default"], null));
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
    to: "/clients"
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
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");



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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-slice_js-node_modules_core-js_internals_export_j-4fec76","vendors-node_modules_mui_icons-material_ArrowForwardIosSharp_js-node_modules_mui_material_esm-12c904"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBQyxFQUFFLEVBQUM7RUFBVSxhQUFlLENBQUssZUFDNUc7SUFBRyxTQUFTLEVBQUMseUJBQXlCO0lBQUMsSUFBSSxFQUFDO0VBQVEsZ0JBQUM7SUFBSSxTQUFTLEVBQUM7RUFBMkIsV0FBVyxDQUFJLENBQzFHLENBQ047QUFFTDtBQUVBLGlFQUFlb0MsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDSTtBQUNIO0FBQ0k7QUFFMUIsU0FBU2xMLFFBQVEsR0FBRztFQUNuQnBCLCtDQUFRLENBQUM7SUFBQzJNLElBQUksRUFBRTtFQUFLLENBQUMsQ0FBQztFQUN2QixvQkFDQyx1SUFDQTtJQUFLLFNBQVMsRUFBQyw0QkFBNEI7SUFBQyxZQUFTLFNBQVM7SUFBQyxxQkFBa0I7RUFBTSxnQkFDdEY7SUFBRyxTQUFTLEVBQUMsSUFBSTtJQUFDLElBQUksRUFBQztFQUF3QyxFQUFLLGVBQ3BFO0lBQUcsU0FBUyxFQUFDLE9BQU87SUFBQyxJQUFJLEVBQUM7RUFBK0MsRUFBSyxlQUM5RTtJQUFHLFNBQVMsRUFBQyxVQUFVO0lBQUMsSUFBSSxFQUFDO0VBQWlELEVBQUssQ0FDOUUsQ0FDSDtBQUVMO0FBRUEsaUVBQWV2TCxRQUFROzs7Ozs7Ozs7OztBQ2pCdkI7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NsaWVudHBhZ2UvX2NsaWVudHBhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NsaWVudHBhZ2UvX2NsaWVudHBhZ2VGaXZlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DbGllbnRwYWdlL19jbGllbnRwYWdlRm91ci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2xpZW50cGFnZS9fY2xpZW50cGFnZU9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2xpZW50cGFnZS9fY2xpZW50cGFnZVNpeC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2xpZW50cGFnZS9fY2xpZW50cGFnZVRocmVlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DbGllbnRwYWdlL19jbGllbnRwYWdlVHdvLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Db250YWN0cGFnZS9fY29udGFjdHBhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NvbnRhY3RwYWdlL19jb250YWN0cGFnZU9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZXBhZ2UvX2FjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZXBhZ2UvX2NoaWZmcmVzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ib21lcGFnZS9fY3JlYXRpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL19lbW90aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ib21lcGFnZS9fZm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ib21lcGFnZS9faG9tZXBhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL19pbnN0YS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZXBhZ2UvX21pbmlGb290ZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL19zYXRpc2ZhY3Rpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL192aXNpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL193b3JkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Qcm9qZWN0cGFnZS9fcHJvamVjdHBhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1Byb2plY3RwYWdlL19wcm9qZWN0cGFnZUZpdmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1Byb2plY3RwYWdlL19wcm9qZWN0cGFnZUZvdXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1Byb2plY3RwYWdlL19wcm9qZWN0cGFnZU9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUHJvamVjdHBhZ2UvX3Byb2plY3RwYWdlU2l4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Qcm9qZWN0cGFnZS9fcHJvamVjdHBhZ2VUaHJlZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUHJvamVjdHBhZ2UvX3Byb2plY3RwYWdlVHdvLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TZWFyY2hQYWdlMi9fU2VhcmNoUGFnZTIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1NlYXJjaFBhZ2UyL19TZWFyY2hQYWdlT25lMi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU2VhcmNoUGFnZTIvX1NlYXJjaFBhZ2VUd28yLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TZWFyY2hQYWdlL19TZWFyY2hQYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TZWFyY2hQYWdlL19TZWFyY2hQYWdlT25lLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TZWFyY2hQYWdlL19TZWFyY2hQYWdlVHdvLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Xb3JrcGFnZUNsaWVudC9fd29ya3BhZ2VDbGllbnQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1dvcmtwYWdlQ2xpZW50L193b3JrcGFnZUNsaWVudE9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvV29ya3BhZ2VDbGllbnQvX3dvcmtwYWdlQ2xpZW50VHdvLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Xb3JrcGFnZS9fd29ya3BhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1dvcmtwYWdlL193b3JrcGFnZUZpdmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1dvcmtwYWdlL193b3JrcGFnZUZvdXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1dvcmtwYWdlL193b3JrcGFnZU9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvV29ya3BhZ2UvX3dvcmtwYWdlVGhyZWUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1dvcmtwYWdlL193b3JrcGFnZVR3by5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvX2hvbWUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL19saW5lc0JvdHRvbS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvX2xpbmVzVG9wLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9fbmF2YmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9fcnNCdXR0b24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXNoZWV0cy9idWxtYS9ncmlkL2NvbHVtbnMuc2Fzcz84NDVkIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXNoZWV0cy9idWxtYS9oZWxwZXJzL3NwYWNpbmcuc2Fzcz9mNzBiIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXNoZWV0cy9tYWluLnNhc3M/ZWMwMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzaGVldHMvcGFnaW5hdGlvbi5sZXNzPzMzZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgJy4vc3R5bGVzaGVldHMvbWFpbi5zYXNzJztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL19ob21lLmpzeCc7XHJcbmltcG9ydCBXb3JrcGFnZSBmcm9tICcuL2NvbXBvbmVudHMvV29ya3BhZ2UvX3dvcmtwYWdlJztcclxuaW1wb3J0IFdvcmtwYWdlQ2xpZW50IGZyb20gJy4vY29tcG9uZW50cy9Xb3JrcGFnZUNsaWVudC9fd29ya3BhZ2VDbGllbnQnO1xyXG5pbXBvcnQgQ29udGFjdFBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL0NvbnRhY3RwYWdlL19jb250YWN0cGFnZSc7XHJcbmltcG9ydCBDbGllbnRQYWdlIGZyb20gJy4vY29tcG9uZW50cy9DbGllbnRwYWdlL19jbGllbnRwYWdlJztcclxuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9qZWN0cGFnZSBmcm9tICcuL2NvbXBvbmVudHMvUHJvamVjdHBhZ2UvX3Byb2plY3RwYWdlJztcclxuaW1wb3J0IFNlYXJjaFBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL1NlYXJjaFBhZ2UvX1NlYXJjaFBhZ2UnO1xyXG5pbXBvcnQgU2VhcmNoUGFnZTIgZnJvbSAnLi9jb21wb25lbnRzL1NlYXJjaFBhZ2UyL19TZWFyY2hQYWdlMic7IFxyXG5pbXBvcnQgXCIuL3N0eWxlc2hlZXRzL2J1bG1hL2dyaWQvY29sdW1ucy5zYXNzXCJcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFdyYXBwZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgfSwgW2xvY2F0aW9uLnBhdGhuYW1lXSk7XHJcbiAgICByZXR1cm4gY2hpbGRyZW5cclxuICB9OyBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgPFdyYXBwZXI+XHJcbiAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICBcclxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lIC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvcHJvamV0cy86bmJyXCIgZWxlbWVudD17PFdvcmtwYWdlIC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvY2xpZW50c1wiIGVsZW1lbnQ9ezxXb3JrcGFnZUNsaWVudCAvPn0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2NvbnRhY3RcIiBlbGVtZW50PXs8Q29udGFjdFBhZ2UgLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9jbGllbnQvOmlkXCIgZWxlbWVudD17PENsaWVudFBhZ2UgLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9wcm9qZXQvOmlkXCIgZWxlbWVudD17PFByb2plY3RwYWdlIC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvc2VhcmNoLzppbmZvXCIgZWxlbWVudD17PFNlYXJjaFBhZ2UgLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9zZWFyY2hjYXQvOmluZm8vOm5hbWVcIiBlbGVtZW50PXs8U2VhcmNoUGFnZTIgLz59IC8+XHJcbiAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgIDwvV3JhcHBlcj5cclxuICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluOyBcclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuL01haW4uanMnO1xyXG53aW5kb3cuUmVhY3QgPSBSZWFjdFxyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xyXG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG5yb290LnJlbmRlcihcclxuXHJcbiAgICA8TWFpbiAvPlxyXG5cclxuKTtcclxuXHJcbiIsImltcG9ydCBOYXZiYXIgZnJvbSAnLi4vX25hdmJhcic7XHJcbmltcG9ydCBDbGllbnRQYWdlT25lIGZyb20gXCIuL19jbGllbnRwYWdlT25lXCI7XHJcbmltcG9ydCBDbGllbnRwYWdlVHdvIGZyb20gJy4vX2NsaWVudHBhZ2VUd28nO1xyXG5pbXBvcnQgQ2xpZW50cGFnZVRocmVlIGZyb20gJy4vX2NsaWVudHBhZ2VUaHJlZSc7XHJcbmltcG9ydCBDbGllbnRwYWdlRm91ciBmcm9tICcuL19jbGllbnRwYWdlRm91cic7XHJcbmltcG9ydCBDbGllbnRwYWdlRml2ZSBmcm9tICcuL19jbGllbnRwYWdlRml2ZSc7XHJcbmltcG9ydCBDbGllbnRwYWdlU2l4IGZyb20gJy4vX2NsaWVudHBhZ2VTaXgnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIENsaWVudHBhZ2UoKSB7XHJcblx0Y29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNMb2FkZWRJbWcsIHNldElzTG9hZGVkSW1nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNMb2FkZWROZXh0UHJldiwgc2V0SXNMb2FkZWROZXh0UHJldl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzSW1nUmVhZHksIHNldEltZ1JlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtoZWFkZXIsIHNldEhlYWRlcl0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW3ByZWNpLCBzZXRQcmVjaV0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW3NlY29uZCwgc2V0U2Vjb25kXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW05leHRQcmV2LCBzZXROZXh0UHJldl0gPSB1c2VTdGF0ZShbXSk7XHJcblx0aWYoaWQpe1xyXG5cdFx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdFx0ZmV0Y2goYC9hcGkvY2xpZW50cy8ke2lkfWAse21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0XHQudGhlbihcclxuXHRcdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0SXRlbXMocmVzdWx0KTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cclxuXHRcdFx0ZmV0Y2goYC9nZXRJbWFnZXNDbGllbnQvJHtpZH1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdGxldCB0aGlzUmVzID0gSlNPTi5wYXJzZShyZXN1bHQpXHJcblx0XHRcdFx0c2V0SXNMb2FkZWRJbWcodHJ1ZSk7XHJcblx0XHRcdFx0c2V0SW1hZ2VzKEpTT04ucGFyc2UocmVzdWx0KSk7XHJcblx0XHRcdFx0aWYodGhpc1Jlcyl7XHJcblx0XHRcdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXModGhpc1JlcykubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdFx0XHRpZih0aGlzUmVzW2ldLmhlYWRlcilcclxuXHRcdFx0XHRcdFx0XHRzZXRIZWFkZXIodGhpc1Jlc1tpXSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlc1tpXS5mb2N1cylcclxuXHRcdFx0XHRcdFx0XHRzZXRQcmVjaSh0aGlzUmVzW2ldKVxyXG5cdFx0XHRcdFx0XHRpZih0aGlzUmVzW2ldLnNlY29uZGFpcmUpXHJcblx0XHRcdFx0XHRcdFx0c2V0U2Vjb25kKHRoaXNSZXNbaV0pXHJcblx0XHRcdFx0XHRcdC8vIGlmKGltYWdlc1tpXS52aXNpYmxlKVxyXG5cdFx0XHRcdFx0XHQvLyBcdHNldERpc3BsYXkoLi4uaW1hZ2VzW2ldKVxyXG5cdFx0XHRcdFx0XHRpZihPYmplY3Qua2V5cyh0aGlzUmVzKS5sZW5ndGgtMSA9PSBpIHx8IHJlc3VsdCA9PSBcIltdXCIpXHJcblx0XHRcdFx0XHRcdFx0c2V0SW1nUmVhZHkodHJ1ZSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0XHRmZXRjaChgL05leFByZXYvJHtpZH1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdGxldCBOZXh0ID0gSlNPTi5wYXJzZShyZXN1bHRbMF0pXHJcblx0XHRcdFx0bGV0IFByZXYgPSBKU09OLnBhcnNlKHJlc3VsdFsxXSlcclxuXHRcdFx0XHRpZihOZXh0ICYmIFByZXYpe1xyXG5cdFx0XHRcdFx0c2V0TmV4dFByZXYoW05leHQsIFByZXZdKTtcclxuXHRcdFx0XHRcdGlmKE5leHRQcmV2KXtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coTmV4dFByZXYpXHJcblx0XHRcdFx0XHRcdHNldElzTG9hZGVkTmV4dFByZXYodHJ1ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdH0sIFtdKVxyXG5cdH1cclxuXHJcblx0aWYgKGVycm9yKSB7XHJcblx0XHQgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuXHQgIH0gZWxzZSBpZiAoIWlzTG9hZGVkICYmICFpc0ltZ1JlYWR5ICYmICFpc0xvYWRlZE5leHRQcmV2KSB7XHJcblx0XHRyZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG5cdCAgfSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICggXHJcblx0XHRcdFx0PD5cclxuXHRcdFx0XHQ8TmF2YmFyPjwvTmF2YmFyPlxyXG5cdFx0XHRcdDxDbGllbnRQYWdlT25lIGRhdGE9e2l0ZW1zfT48L0NsaWVudFBhZ2VPbmU+XHJcblx0XHRcdFx0PENsaWVudHBhZ2VUd28gZGF0YT17aXRlbXN9PjwvQ2xpZW50cGFnZVR3bz5cclxuXHRcdFx0XHQ8Q2xpZW50cGFnZVRocmVlIGRhdGE9e3NlY29uZH0+PC9DbGllbnRwYWdlVGhyZWU+XHJcblx0XHRcdFx0PENsaWVudHBhZ2VGb3VyIHByZWNpPXtwcmVjaX0gZGF0YTI9e2l0ZW1zfT48L0NsaWVudHBhZ2VGb3VyPlxyXG5cdFx0XHRcdDxDbGllbnRwYWdlRml2ZT48L0NsaWVudHBhZ2VGaXZlPlxyXG5cdFx0XHRcdDxDbGllbnRwYWdlU2l4IGRhdGE9e2l0ZW1zfSBucD17TmV4dFByZXZ9PjwvQ2xpZW50cGFnZVNpeD5cclxuXHRcdFx0XHQ8Lz5cclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRwYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcblxyXG5mdW5jdGlvbiBDbGllbnRwYWdlRml2ZSgpIHtcclxuXHRBT1MuaW5pdCgpXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy94OW5lczVWLmpwZylcIn19IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nb3BhY2l0eUJsdWUnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyZW50Q2xpZW50Vmlldyc+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NsaWVudEdyaWRWaWV3MSc+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2JveEZsZXgnPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjbGllbnRHcmlkVmlldzInPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdib3hGbGV4Jz48L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NsaWVudEdyaWRWaWV3Myc+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2JveEZsZXgnPjwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2xpZW50R3JpZFZpZXc0Jz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYm94RmxleCc+PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50cGFnZUZpdmU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIENsaWVudHBhZ2VGb3VyKHtwcmVjaSwgZGF0YTJ9KSB7XHJcblx0QU9TLmluaXQoKVxyXG5cdGlmKGRhdGEyLmVsZW1lbnRwcmVjaXNpb24pe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCJ9fSBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XHRcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J29wYWNpdHlCbHVlJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlcjInPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lckNlbnRlckEnPlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJlbnQyMSBtYXJnaW5Ub3AnPlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21hcmdpblRvcDInID5cclxuXHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdsaWdodCBsZXR0ZXJTcGFjaW5nUyc+w4lMw4lNRU5UUyBERSBQUsOJQ0lTSU9OPC9oMz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGlnaHQgY29udGFpbmVyQ2VudGVyQ2xpZW50IHRleHQtaDUnIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnfX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YTIuZWxlbWVudHByZWNpc2lvbn19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPScgYm94Q2xpZW50Jz5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT0nIGNvbnRhaW4nIHN0eWxlPXt7IG9iamVjdEZpdDpcImNvdmVyXCJ9fSBzcmM9e1wiL2ltYWdlcy9pbWFnZWNsaWVudC9cIiArIHByZWNpLmltYWdlfSBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cdFx0XHJcblxyXG5cclxuXHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fX1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRwYWdlRm91cjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gQ2xpZW50cGFnZU9uZShkYXRhKSB7XHJcblx0Y29uc29sZS5sb2coZGF0YSlcclxuXHRBT1MuaW5pdCgpXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZDFcIiBhbHQ9XCJob21lcGFnZVwiPlxyXG5cclxuXHRcdFx0PHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eUJsdWVcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXIyXCI+XHJcblx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvemVuaXRoL2ltYWdlcy9iSU8xcjlGLnBuZ1wiIGFsdD1cIkxvZ29cIiB3aWR0aD17MjAwfSBjbGFzc05hbWU9XCJjZW50ZXJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cdFxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbGllbnRwYWdlVGV4dFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJtZWRpdW0gbWFyZ2luU3RvcCBjbGllbnREZXRhaWxcIj5OT00gQ0xJRU5UPC9oMT5cclxuXHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPVwibGlnaHQgbWFyZ2luU3RvcCBjbGllbnREZXRhaWxcIj5TRUNURVVSIETigJlBQ1RJVklUw4k8L2g2PlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxpZ2h0IGNsaWVudERldGFpbFwiPkRVUsOJRSBQUk9KRVQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibGlnaHQgY2xpZW50RGV0YWlsMlwiPkNBVMOJR09SSUUgMSB8IENBVMOJR09SSUUgMjwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXIzXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PGg0IHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnfX0gY2xhc3NOYW1lPVwibGlnaHQgbGV0dGVyU3BhY2luZ1MgIGRpc2NvdmVyQ2xpZW50MlwiPntkYXRhLmRhdGEubWlzc2lvbn08L2g0PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibGlnaHQgIGRpc2NvdmVyQ2xpZW50XCI+RMOJQ09VVlJFWjwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmVDbGllbnRcIiA+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudHBhZ2VPbmU7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcblxyXG5mdW5jdGlvbiBDbGllbnRwYWdlU2l4KHtkYXRhLCBucH0pIHtcclxuXHRBT1MuaW5pdCgpXHJcblx0aWYobnBbMF0pe1xyXG5cdFx0aWYobnBbMF1bMF0gPT0gJ251bGwnKVxyXG5cdFx0XHRucFswXVswXSA9IGZhbHNlO1xyXG5cdFx0aWYobnBbMF1bMV0gPT0gJ251bGwnKVxyXG5cdFx0XHRucFsxXVswXSA9IGZhbHNlO1xyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2RlbWlibG9jT3BhY2l0eSc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXJDZW50ZXIgbWFyZ2luVG9wUyc+XHJcblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J21lZGl1bSBjZW50ZXJUZXh0Jz5VTiBUw4lNT0lHTkFHRTwvaDQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsaWdodCBjZW50ZXJUZXh0JyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLnRlbW9pZ25hZ2V9fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPSdkZW1pYmxvY0NsaWVudCc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGVtaWJsb2NPcGFjaXR5Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmVudENsaWVudE5leHRQcmV2Jz5cclxuXHJcblx0XHRcdFx0XHRcdFx0e25wWzFdWzBdICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nQ2xpZW50TmV4dFByZXYxJyBvbkNsaWNrPXsoKT0+e2xvY2F0aW9uLmhyZWYgPSBcIi9jbGllbnQvXCIrIG5wWzFdWzBdLmlkfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9J2xpZ2h0IHJpZ2h0VGV4dCBtYXJnaW5Ub3BTJz5QUk9KRVQgUFLDiUPDiURFTlQ8L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPSdyaWdodFRleHQnPntucFsxXVswXS5ub21DbGllbnR9PC9oNT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT0nbGlnaHQgcmlnaHRUZXh0Jz57bnBbMV1bMF0ubWlzc2lvbn08L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+fVxyXG5cclxuXHRcdFx0XHRcdFx0XHR7bnBbMF1bMF0gJiYgPGRpdiBjbGFzc05hbWU9J0NsaWVudE5leHRQcmV2Micgb25DbGljaz17KCk9Pntsb2NhdGlvbi5ocmVmID0gXCIvY2xpZW50L1wiKyBucFswXVswXS5pZH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPSdsaWdodCBsZWZ0VGV4dCBtYXJnaW5Ub3BTJz5QUk9KRVQgU1VJVkFOVDwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9J2xlZnRUZXh0Jz57bnBbMF1bMF0ubm9tQ2xpZW50fTwvaDU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9J2xpZ2h0IGxlZnRUZXh0Jz57bnBbMF1bMF0ubWlzc2lvbn08L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+fVxyXG5cdFx0XHRcdFx0XHRcdHsvKiA8YSBocmVmPXtcIi9jbGllbnQvXCIrbnBbMV1bMF0uaWR9PiAqL31cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRwYWdlU2l4OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcblxyXG5mdW5jdGlvbiBDbGllbnRwYWdlVGhyZWUoKSB7XHJcblx0QU9TLmluaXQoKVxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3dyYXBwZXJEYXJrQmx1ZUNsaWVudCc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyRmxleCc+XHJcblx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPSdjb250YWluJyBzcmM9XCIvemVuaXRoL2ltYWdlcy83Y0E2NER1LmpwZ1wiIGFsdD1cIlwiLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRwYWdlVGhyZWU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIENsaWVudHBhZ2VUd28oZGF0YSkge1xyXG5cdEFPUy5pbml0KClcclxuXHRpZihkYXRhLmRhdGEuZW5qZXUgfHwgZGF0YS5kYXRhLmhpc3RvaXJlIHx8IGRhdGEuZGF0YS5yZXBvbnNlKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCJ9fSBjbGFzc05hbWU9J2RlbWlibG9jQ2xpZW50Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkZW1pYmxvY0NsaWVudE9wYWNpdHknPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyZW50Q2xpZW50Jz5cclxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLmVuamV1ICYmXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NsaWVudEdyaWQxJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2xpZ2h0Jz5VTkUgRU5KRVU8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xpZ2h0IGNvbnRhaW5lckNlbnRlckNsaWVudCcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YS5kYXRhLmVuamV1fX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+IFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0e2RhdGEuZGF0YS5oaXN0b2lyZSAmJlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjbGllbnRHcmlkMic+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdsaWdodCc+VU5FIEhJU1RPSVJFPC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmRhdGEuZGF0YS5oaXN0b2lyZX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0e2RhdGEuZGF0YS5yZXBvbnNlICYmXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NsaWVudEdyaWQzJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2xpZ2h0Jz5VTkUgUkVQT05TRTwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGlnaHQgY29udGFpbmVyQ2VudGVyQ2xpZW50JyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLmRhdGEucmVwb25zZX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50cGFnZVR3bztcclxuIiwiaW1wb3J0IE5hdmJhciBmcm9tICcuLi9fbmF2YmFyJztcclxuaW1wb3J0IFJzQnV0dG9uIGZyb20gJy4uL19yc0J1dHRvbic7XHJcbmltcG9ydCBMaW5lc1RvcCBmcm9tICcuLi9fbGluZXNUb3AnO1xyXG5pbXBvcnQgTGluZXNCb3R0b20gZnJvbSAnLi4vX2xpbmVzQm90dG9tJztcclxuaW1wb3J0IENvbnRhY3RQYWdlT25lIGZyb20gJy4vX2NvbnRhY3RwYWdlT25lJztcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gQ29udGFjdFBhZ2UoKSB7XHJcblx0cmV0dXJuICggXHJcblx0XHQ8PlxyXG5cdFx0PE5hdmJhcj48L05hdmJhcj5cclxuXHRcdDxSc0J1dHRvbj48L1JzQnV0dG9uPlxyXG5cdFx0PExpbmVzVG9wPjwvTGluZXNUb3A+XHJcblx0XHQ8TGluZXNCb3R0b20+PC9MaW5lc0JvdHRvbT5cclxuXHRcdDxDb250YWN0UGFnZU9uZT48L0NvbnRhY3RQYWdlT25lPlxyXG5cclxuXHJcblx0XHQ8Lz5cclxuXHQgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFBhZ2U7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gQ29udGFjdFBhZ2VPbmUoKSB7XHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdGVtYWlsOiAnJyxcclxuXHRcdG5hbWU6ICcnLFxyXG5cdFx0bWVzc2FnZTogJycsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhldmVudClcclxuXHRcdGV2ZW50LnBlcnNpc3QoKTtcclxuXHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0W2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG5cdFx0XHRcclxuXHRcdH0pO1xyXG5cdFx0Y29uc29sZS5sb2codmFsdWVzLmVtYWlsKVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7IFwiZW1haWxcIjogdmFsdWVzLmVtYWlsLCBcIm5hbWVcIjogdmFsdWVzLm5hbWUsIFwibWVzc2FnZVwiOiB2YWx1ZXMubWVzc2FnZSwgXCJuZXdcIjogdHJ1ZSB9KSxcclxuXHRcdH07XHJcblx0XHQvLyBmZXRjaCgnL3NlbmRlbWFpbCcsIHJlcXVlc3RPcHRpb25zKVxyXG5cdFx0Ly8gXHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHRmZXRjaChgL3NlbmRlbWFpbGAse21ldGhvZDonUE9TVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sYm9keTogSlNPTi5zdHJpbmdpZnkoeyBcImVtYWlsXCI6IHZhbHVlcy5lbWFpbCwgXCJuYW1lXCI6IHZhbHVlcy5uYW1lLCBcIm1lc3NhZ2VcIjogdmFsdWVzLm1lc3NhZ2UsIFwibmV3XCI6IHRydWUgfSl9KVxyXG5cdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHQudGhlbihcclxuXHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHRcdH1cclxuXHRcdClcclxuXHR9O1xyXG5cdEFPUy5pbml0KClcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kMVwiIGFsdD1cImhvbWVwYWdlXCI+XHJcblxyXG5cdFx0XHQ8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuXHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZy5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcblx0XHRcdFx0PC92aWRlbz5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5Qmx1ZVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlcjJcIj5cclxuXHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi96ZW5pdGgvaW1hZ2VzL2JJTzFyOUYucG5nXCIgYWx0PVwiTG9nb1wiIHdpZHRoPXsyMDB9IGNsYXNzTmFtZT1cImNlbnRlclwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmVudDUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXIyIGRpdkM0XCIgPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwibWVkaXVtXCI+Q29udGFjdGV6IE5vdXM8L2gxPiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT1cImxpZ2h0XCI+UHLDqXNlbnRleiB2b3RyZSBwcm9qZXQgZXQgbGFpc3Nlei1ub3VzIHZvc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpbmZvcm1hdGlvbnMgZGUgY29udGFjdC4gTm91cyByZXZpZW5kcm9ucyB2ZXJzXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZvdXMgZGFucyB1biBkw6lsYWkgZGUgMjRoLjwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybV9fZ3JvdXAgZmllbGQgIGRpdkMxXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJpbnB1dFwiIGNsYXNzPVwiZm9ybV9fZmllbGRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiBuYW1lPVwibmFtZVwiIGlkPSduYW1lJyB2YWx1ZT17dmFsdWVzLm5hbWV9b25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSByZXF1aXJlZD48L2lucHV0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJuYW1lXCIgY2xhc3M9XCJmb3JtX19sYWJlbFwiPlZvdHJlIG5vbTwvbGFiZWw+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtX19ncm91cDIgZmllbGQgZGl2QzJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImlucHV0XCIgY2xhc3M9XCJmb3JtX19maWVsZFwiIHBsYWNlaG9sZGVyPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD0nZW1haWwnIHZhbHVlPXt2YWx1ZXMuZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gcmVxdWlyZWQgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwibmFtZVwiIGNsYXNzPVwiZm9ybV9fbGFiZWxcIj5Wb3RyZSBhZHJlc3NlIGUtbWFpbDwvbGFiZWw+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0ZXh0YXJlYV9fZ3JvdXAgZmllbGQgZGl2QzNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgdHlwZT1cImlucHV0XCIgY2xhc3M9XCJmb3JtX19maWVsZFwiIHBsYWNlaG9sZGVyPVwibWVzc2FnZVwiIG5hbWU9XCJtZXNzYWdlXCIgaWQ9J21lc3NhZ2UnIHZhbHVlPXt2YWx1ZXMubWVzc2FnZX0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSByZXF1aXJlZCAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJuYW1lXCIgY2xhc3M9XCJmb3JtX19sYWJlbFwiPlZvdHJlIGJlc29pbjwvbGFiZWw+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiIHZhbHVlPVwiU3VibWl0XCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiBcclxuLy9tb2RpZmllciBhIHBhcnRpciBkZSBsYSBsaWduZSBcclxuLy8gYWpvdXRlciA8Zm9ybT4gPGZpZWxkPiBldGNcclxuLy8gZnVuY3Rpb24gY29udGFjdCBwYWdlT25lIG5lIGZhaXQgcmllbiBuZSBkZWNsYXJlIHJpZW4gZXRjLi4gXHJcbi8vZGVpZmluaXIgdW4gZXRhdCBkIG9yaWdpbmUgcG91ciBsZXMgem9uZSBkZSB0ZXh0ZSBcclxuLy9ham91dGVyIHVuIGJ1dHRvbiBxdWFuZCBjbGlxdWUgcHJlbmQgbGVzIGluZm9ybWF0aW9uIGRhbnMgbGVzIGNoYW1wcyBcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFBhZ2VPbmU7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEFjdGlvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIDxkaXZcclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwiIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiXHJcbiAgICAgICAgYWx0PVwiYWN0aW9uXCJcclxuICAgICAgPiAqL31cclxuICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9hV0VMaGs4QS5qcGVnXCIgYmx1cj17eyBtaW46IC0xLCBtYXg6IDMgfX0gc3RyZW5ndGg9ezB9PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjMwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIyXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lcjJcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRyZUEgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXRjaG5hemVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQUNUSU9OXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJsaWdodCBsZXR0ZXJTcGFjaW5nUyBzb3VzVGl0cmVcIj5cclxuICAgICAgICAgICAgICBTRSBDT05DRU5UUkVSIFNVUiBM4oCZRVNTRU5USUVMIDogVk9VU1xyXG4gICAgICAgICAgICA8L2g2PlxyXG5cclxuICAgICAgICAgICAgPFN3aXBlciBzbGlkZXNQZXJWaWV3PXszfSBzcGFjZUJldHdlZW49ey0xMDB9IGNsYXNzTmFtZT1cInN3aXBlclwiPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2pldHNcIiBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94Q2FycmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInVybCgvemVuaXRoL2ltYWdlcy9wZXhlbHMtYW5kcmVhLXBpYWNxdWFkaW8tMzc2MDA5My5qcGcpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3BGaWx0ZXI6IFwiYmx1cig1cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRBY3Rpb24xIGxldHRlclNwYWNpbmdTIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDT05TRUlMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBQ0NPTVBBR05FTUVOVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDM2MMKwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuXHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvamV0c1wiIGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3hDYXJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcclxuICAgICAgICAgICAgICAgICAgICAgIFwidXJsKC96ZW5pdGgvaW1hZ2VzL0NPTU0uanBnKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcEZpbHRlcjogXCJibHVyKDVweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dEFjdGlvbjEgbGV0dGVyU3BhY2luZ1MgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENPTU1VTklDQVRJT05cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNPTFVUSU9OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU1VSLU1FU1VSRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcblxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2pldHNcIiBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94Q2FycmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInVybCgvemVuaXRoL2ltYWdlcy9FVkVOVC5qcGcpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3BGaWx0ZXI6IFwiYmx1cig1cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRBY3Rpb24xIGxldHRlclNwYWNpbmdTIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFVkVOVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTElWUkFJU09OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ0zDiVMgRU4gTUFJTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcblxyXG4gICAgICAgICAgICA8L1N3aXBlcj5cclxuXHJcbiAgICAgICAgICAgIDxoNFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdHJlQiBsaWdodCBsZXR0ZXJTcGFjaW5nIGNvbnRhaW5lciBjZW50ZXIgYWNjcm9jaGVcIlxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFHSVIgRVQgUsOJQUdJUiBBVkVDIFZPVVNcclxuICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5TIGNlbnRlciBsaWdodCBsZXR0ZXJTcGFjaW5nTSBtYXJnaW5Cb3R0b20yXCI+XHJcbiAgICAgICAgICAgICAgRU4gQ09NUFJFTkRSRSArXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPC9kaXY+ICovfVxyXG4gICAgICA8L1BhcmFsbGF4PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSBcInJlYWN0LXBhcmFsbGF4XCI7XHJcblxyXG5mdW5jdGlvbiBDaGlmZnJlcygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuXHQ8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL1oxeklKQ0trLmpwZWdcIiBibHVyPXt7IG1pbjogLTEsIG1heDogMyB9fSBzdHJlbmd0aD17ODAwfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIC8vIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCIgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJkZW1pYmxvY1wiXHJcbiAgICAgICAgYWx0PVwiY2hpZmZyZXNcIlxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmc2Lm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuICAgICAgICA8L3ZpZGVvPiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbWlibG9jMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmVudDJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjFcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZWRpdW0gY2hpZmZyZXNcIj4yMDE2PC9oMT5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJsaWdodCBjaGlmZnJlczJcIj5BTk7DiUUgREUgQ1JFQVRJT048L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2MlwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1lZGl1bSBjaGlmZnJlc1wiPiszMDA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImxpZ2h0IGNoaWZmcmVzMlwiPkNSw4lBVElPTlMgUEhPVE9TPC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjNcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZWRpdW0gY2hpZmZyZXNcIj4rMTYwPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJsaWdodCBjaGlmZnJlczJcIj5QUk9KRVRTIFLDiUFMSVPDiVM8L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2NFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1lZGl1bSBjaGlmZnJlc1wiPisxNTA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImxpZ2h0IGNoaWZmcmVzMlwiPlLDiUFMSVNBVElPTlMgVklEw4lPUzwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXY1XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWVkaXVtIGNoaWZmcmVzXCI+KzIwMDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibGlnaHQgY2hpZmZyZXMyXCI+Q1LDiUFUSU9OUyBESUdJVEFMRVMgPC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjZcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZWRpdW0gY2hpZmZyZXNcIj4xMDAlPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJsaWdodCBjaGlmZnJlczJcIj5NQURFIElOIEZSQU5DRTwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cdCAgPC9QYXJhbGxheD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoaWZmcmVzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5cclxuZnVuY3Rpb24gQ3JlYXRpb24oaXRlbSkge1xyXG4gIGxldCBzbGlkZXIgPSBbXVxyXG4gIGNvbnNvbGUubG9nKGl0ZW0pXHJcbiAgaWYoaXRlbS5pdGVtLmxlbmd0aCA+MCkge1xyXG4gICAgaXRlbS5pdGVtLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGxldCBuZXdTbGlkZXIgPSAoPFN3aXBlclNsaWRlIGtleT17ZWxlbWVudC5pZH0gY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+PGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVswXS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgaW1hZ2VzL2ltYWdlcHJvamV0LyR7ZWxlbWVudC5jcmVhdGlvbn1gfSBhbHQ9XCJcIiAvPjwvZGl2PjwvU3dpcGVyU2xpZGU+KVxyXG4gICAgICBzbGlkZXIucHVzaChuZXdTbGlkZXIpXHJcbiAgICB9KTtcclxuICB9ZWxzZXtcclxuICAgIHNsaWRlciA9ICggPGgxIGNsYXNzTmFtZT1cInRpdHJlQSBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5TdG9wXCI+cmllbiBhIHZvaXI8L2gxPiApXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIEJsdXJEZXRhaWwoZSl7XHJcbiAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgZS50YXJnZXQuc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSBcImJsdXIoNHB4KVwiO1xyXG4gICAgZS50YXJnZXQuY2hpbGRyZW5bMF0uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCJcclxuICB9XHJcbiAgZnVuY3Rpb24gUmVtb3ZlQmx1ckRldGFpbChlKXtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cigwKVwiO1xyXG4gICAgZS50YXJnZXQuY2hpbGRyZW5bMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCJ9fSBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XHJcblxyXG4gICAgICAgIDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG5cdFx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmc0Lm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuXHRcdFx0XHQ8L3ZpZGVvPiAqL31cclxuICAgICAgey8qIDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDRcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+PC9FbGVtZW50PiAqL31cclxuICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9aMXpJSkNLay5qcGVnXCIgYmx1cj17eyBtaW46IC0xLCBtYXg6IDMgfX0gc3RyZW5ndGg9ezgwMH0+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7cGFkZGluZ1RvcDogJzQwcHgnfX0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgZGF0YS1hb3M9XCJ6b29tLWluXCJcclxuICAgICAgICAgIGRhdGEtYW9zLW1pcnJvcj1cIlwiXHJcbiAgICAgICAgICBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudD1cIlwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyMlwiPlxyXG4gICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRyZUEgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ1LDiUFUSU9OXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxoNlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpZ2h0IGxldHRlclNwYWNpbmdTIHNvdXNUaXRyZVwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgVU5FIEhJU1RPSVJFLiBVTiBFTkpFVS4gVU5FIFLDiVBPTlNFLlxyXG4gICAgICAgICAgICA8L2g2PlxyXG5cclxuICAgICAgICAgICAgPFN3aXBlclxyXG4gICAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzUwMHB4J319XHJcbiAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldz17MX1cclxuICAgICAgICAgICAgICBjZW50ZXJlZFNsaWRlcz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuPXswfVxyXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnRzPXt7XHJcbiAgICAgICAgICAgICAgICA2NDA6IHtcclxuICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAxMDI0OiB7XHJcbiAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDcsXHJcbiAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd2lwZXIyXCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c2xpZGVyfVxyXG4gICAgICAgICAgICAgIHsvKiA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVsxXS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgL3plbml0aC9pbWFnZXMvX0RTQzEzMDAuanBnYH0gYWx0PVwiXCIgLz48L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzJdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy8xSjRBNTAwOSAoMSkuanBnYH0gYWx0PVwiXCIgLz48L2Rpdj4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVszXS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgL3plbml0aC9pbWFnZXMvQ2FwdHVyZSBk4oCZw6ljcmFuIDIwMjItMTItMDMgw6AgMjEuMzMuMjkucG5nYH0gYWx0PVwiXCIgLz48L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzRdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy9JTUdfNzQ4Ny5qcGdgfSBhbHQ9XCJcIiAvPjwvZGl2PiAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzVdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy9JTUdfMDAwNC5qcGdgfSBhbHQ9XCJcIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCIgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9IG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX0+PGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+PHAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgZGlzcGxheTogXCJub25lXCIsIHdpZHRoOiBcIjIwMHB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCIwcHhcIiwgdG9wOlwiMjAwcHhcIn19PntpdGVtLml0ZW1bNF0ubWlzc2lvbn08L3A+PC9kaXY+PGltZyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17YC96ZW5pdGgvaW1hZ2VzL0lNR185ODM4LmpwZ2B9IGFsdD1cIlwiIC8+PC9kaXY+ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCIgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9IG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX0+PGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+PHAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgZGlzcGxheTogXCJub25lXCIsIHdpZHRoOiBcIjIwMHB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCIwcHhcIiwgdG9wOlwiMjAwcHhcIn19PntpdGVtLml0ZW1bNV0ubWlzc2lvbn08L3A+PC9kaXY+PGltZyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17YC96ZW5pdGgvaW1hZ2VzL0RJQV8wNzU5LmpwZ2B9IGFsdD1cIlwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT4gKi99XHJcbiAgICAgICAgICAgIDwvU3dpcGVyPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5cclxuICAgICAgICAgICAgPGg0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0cmVCIGxpZ2h0IGxldHRlclNwYWNpbmcgY29udGFpbmVyIGNlbnRlciBhY2Nyb2NoZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBQUk9QVUxTRVIgTOKAmUlNQUdJTkFJUkUgUExVUyBMT0lOXHJcbiAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXJnaW5Cb3R0b20yIGJ0blMgY2VudGVyIGxpZ2h0IGxldHRlclNwYWNpbmdNXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2pldHMvMVwiIGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcbiAgICAgICAgICAgICAgICAgRMOJQ09VVlJJUiArPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGlvbjtcclxuXHJcbi8vIGNvbnN0IGl0ZW1zID0gWycnLCAnJywgJycsICcnLCAnJywgJycsJycsJycsJycsJycsJycsJycsXVxyXG4vLyBjb25zdCBzZXR0aW5nID0ge1xyXG4vLyAgIGRyYWdTcGVlZDogMC40LFxyXG4vLyAgIGl0ZW1XaWR0aDogMjAwLFxyXG4vLyAgIGl0ZW1IZWlnaHQ6IDQ2NCxcclxuLy8gICBpdGVtU2lkZU9mZnNldHM6IDQwLFxyXG4vLyB9XHJcbi8vIGNvbnN0IGl0ZW1TdHlsZSA9IHtcclxuLy8gICB3aWR0aDogYCR7c2V0dGluZy5pdGVtV2lkdGh9cHhgLFxyXG4vLyAgIGhlaWdodDogYCR7c2V0dGluZy5pdGVtSGVpZ2h0fXB4YCxcclxuLy8gICBtYXJnaW46IGAwcHggJHtzZXR0aW5nLml0ZW1TaWRlT2Zmc2V0c31weGBcclxuLy8gfVxyXG5cclxue1xyXG4gIC8qIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXJDJz5cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWwgX2RhdGE9e2l0ZW1zfSB7Li4uc2V0dGluZ30+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1zLm1hcCgoaSwgX2kpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e19pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpdGVtJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4uaXRlbVN0eWxlIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1wYXJhbGxheCc7XHJcblxyXG5mdW5jdGlvbiBFbW90aW9uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCIgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCJcclxuICAgICAgICBhbHQ9XCLDqW1vdGlvblwiXHJcbiAgICAgID4gKi99XHJcbiAgICAgICAgey8qIDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcyLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuICAgICAgICA8L3ZpZGVvPiAqL31cclxuICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL1oxeklKQ0trLmpwZWdcIiBibHVyPXt7IG1pbjogLTEsIG1heDogMyB9fSBzdHJlbmd0aD17ODAwfT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17e3BhZGRpbmdUb3A6ICc1MHB4J319PlxyXG4gICAgICAgIDxkaXYgZGF0YS1hb3M9XCJ6b29tLWluXCIgZGF0YS1hb3MtbWlycm9yPVwidHJ1ZVwiZGF0YS1hb3Mtb25jZT1cImZhbHNlXCJkYXRhLWFvcy1hbmNob3ItcGxhY2VtZW50PVwidG9wLWNlbnRlclwiPiAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyMiBcIj5cclxuICAgICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdHJlQSBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5TdG9wXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIMOJTU9USU9OXHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8aDZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpZ2h0IGxldHRlclNwYWNpbmdTIHNvdXNUaXRyZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBGQUlSRSBWSUJSRVIgTEEgQ09SREUgSU5WSVNJQkxFXHJcbiAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckZsZXggY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveFZpZGVvXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuXHRcdFx0XHRcdDxpZnJhbWUgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgb2JqZWN0Rml0OiAnY292ZXInfX0gc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvRTFURlpXYkIzNk1cIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgZnJhbWVCb3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxoNFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0cmVCIGxpZ2h0IGxldHRlclNwYWNpbmcgY29udGFpbmVyIGNlbnRlciBhY2Nyb2NoZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTVVNDSVRFUiBM4oCZRU1PVElPTiBFTiBVTiBJTlNUQU5UXHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXJnaW5Cb3R0b20yIGJ0blMgY2VudGVyIGxpZ2h0IGxldHRlclNwYWNpbmdNXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBFTiBWT0lSICtcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbW90aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcclxuXHJcbmZ1bmN0aW9uIEZvb3RlcigpIHtcclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0ZW1haWw6ICcnLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVFbWFpbElucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wZXJzaXN0KCk7XHJcblx0XHRzZXRWYWx1ZXMoKHZhbHVlcykgPT4gKHtcclxuXHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRlbWFpbDogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG5cdFx0XHRcclxuXHRcdH0pKTtcclxuXHRcdGNvbnNvbGUubG9nKHZhbHVlcy5lbWFpbClcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoeyBcImVtYWlsXCI6IHZhbHVlcy5lbWFpbCwgXCJuZXdcIjogdHJ1ZSB9KSxcclxuXHRcdH07XHJcblx0XHRmZXRjaCgnL2FwaS9lbWFpbHMnLCByZXF1ZXN0T3B0aW9ucylcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdH07XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHQgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL254c1gwb0djLmpwZWdcIiBibHVyPXt7IG1pbjogLTEsIG1heDogMyB9fSBzdHJlbmd0aD17MH0+XHJcblxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJmb290ZXJcIiBjbGFzc05hbWU9XCJkZW1pYmxvY0Zvb3RlclwiIGFsdD1cImZvb3RlclwiPlxyXG4gICAgICBcdFx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbWlibG9jMlwiID5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJlbXB0eVNcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGgyICBjbGFzc05hbWU9XCJ0aXRyZUUgbGlnaHQgbGV0dGVyU3BhY2luZyBtYXJnaW5TdG9wXCI+RVQgU0kgT04gU0UgTEFOw4dBSVQgPzwvaDI+XHJcblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuTCBjZW50ZXIgbGlnaHQgbGV0dGVyU3BhY2luZ01cIj5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayB0bz1cIi9jb250YWN0XCIgY2xhc3NOYW1lPVwidGV4dERlY29cIj5DT05UQUNUPC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cIiBsaWdodCBsZXR0ZXJTcGFjaW5nIGNvbnRhaW5lciBjZW50ZXJcIj5FTlNFTUJMRSwgw4lDUklWT05TIFZPVFJFIEhJU1RPSVJFPC9oND5cclxuXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8RWxlbWVudCBuYW1lPVwic2Nyb2xsLXRvLWVsZW1lbnQ5XCIgY2xhc3NOYW1lPVwiZWxlbWVudFwiPjwvRWxlbWVudD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbWlibG9jRm9vdGVyMlwiIGFsdD1cImZvb3RlclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1pYmxvYzJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYXJlbnQ0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkaXZDXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImNlbnRlclwiIHNyYz1cIi96ZW5pdGgvaW1hZ2VzL3dYMkxDSVQucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCIyMjBcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGl0cmVGIGxpZ2h0IGxldHRlclNwYWNpbmdYU1wiPlpFTklUSCA8YnIgLz4gVkFMIETigJlFVVJPUEUgPGJyIC8+IEhFTExPQEFHRU5DRVpFTklUSC5DT00gPGJyIC8+IDA2LjExLjg2LjY1LjgwLjwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkaXZEXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwidGl0cmVEIG1lZGl1bSBsZXR0ZXJTcGFjaW5nIG1hcmdpbkJvdHRvbVwiPlJFSk9JR05FWiA8YnIgLz4gTOKAmUFWRU5UVVJFPC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicnMyIGNlbnRlckZsZXggY2VudGVyXCI+XHJcbiAgICAgIFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImZiMlwiIGhyZWY9J2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9BR0VOQ0VaRU5JVEgvJz48L2E+XHJcbiAgICAgIFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImluc3RhMlwiIGhyZWY9J2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vYWdlbmNlemVuaXRoLz9obD1mcic+PC9hPlxyXG4gICAgICBcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJsaW5rZWRpbjJcIiBocmVmPSdodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9hZ2VuY2UtemVuaXRoLyc+PC9hPlxyXG5cdFx0XHRcdFx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJ0aXRyZUQgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luQm90dG9tIFwiPiBORVdTTEVUVEVSPC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cImlucHV0TWFpbCBjZW50ZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiZW1haWxcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJlbWFpbFwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzaXplPVwiMzBcIiBuYW1lPVwiZW1haWxcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3ZhbHVlcy5lbWFpbH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUVtYWlsSW5wdXRDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkPjwvaW5wdXQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGl2RVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cInRpdHJlQyBtZWRpdW0gbGV0dGVyU3BhY2luZ1wiPlNJVEUgTUFQPC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9J3VsMic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J2xpMic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPkFDQ1VFSUw8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J2xpMic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPkNMSUVOVDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+UFJPSkVUUzwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+Q09OVEFDVDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxpZ2h0IGZvb3RlckNyZWRpdCBsZXR0ZXJTcGFjaW5nU1wiPsKpIEFHRU5DRSBaRU5JVEggLyBUT1VTIERST0lUUyBSw4lTRVJWw4lTPC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICBcclxuXHJcblxyXG5cdFx0XHQ8L1BhcmFsbGF4PlxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQU9TIGZyb20gXCJhb3NcIjtcclxuaW1wb3J0IFwiYW9zL2Rpc3QvYW9zLmNzc1wiO1xyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcclxuXHJcbmZ1bmN0aW9uIEhvbWVwYWdlKCkge1xyXG4gIEFPUy5pbml0KCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8ZGl2ICBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCJ9fSBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCIgYWx0PVwiaG9tZXBhZ2VcIiA+ICovfVxyXG5cclxuICAgICAgPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZy5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcblx0XHRcdFx0PC92aWRlbz4gXHJcbiAgICAgIHsvKiA8UGFyYWxsYXggYmdJbWFnZT1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTAyMTM0MjQ5MTI2LTlmMzc1NWE1MGQ3OD9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTQ3MCZxPTgwXCIgYmx1cj17eyBtaW46IC0xLCBtYXg6IDMgfX0gc3RyZW5ndGg9ezQwMH0+ICovfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5Qmx1ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXIyXCJcclxuICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCI4MDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3plbml0aC9pbWFnZXMvYklPMXI5Ri5wbmdcIiBhbHQ9XCJMb2dvXCIgd2lkdGg9ezMzMH0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYnZpIGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbWlib2xkXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCI4MDBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aGluXCI+RkFJVEVTPC9zcGFuPiBCUklMTEVSe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aGluXCI+IFZPUyA8L3NwYW4+SUTDiUVTXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5lXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjgwMFwiXHJcbiAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDJcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+PC9FbGVtZW50PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDwvUGFyYWxsYXg+ICovfVxyXG4gICAgICB7LyogPC9kaXY+ICovfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZXBhZ2U7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzaGVldHMvYnVsbWEvaGVscGVycy9zcGFjaW5nLnNhc3NcIlxyXG5cclxuZnVuY3Rpb24gSW5zdGFmbHV4KCkge2xldCBpbnN0YSA9IHVzZVJlZihudWxsKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgIHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vY2RuLmxpZ2h0d2lkZ2V0LmNvbS93aWRnZXRzL2xpZ2h0d2lkZ2V0LmpzXCI7XHJcbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG5cclxuICB9LCBbXSk7XHJcblxyXG5cclxuXHJcblxyXG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcclxuICB9XHJcblxyXG5cclxuXHRcdHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgey8qIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiIGFsdD1cIiNhZ2VuY2V6ZW5pdGhcIj5cclxuICAgICAgPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZzgubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+ICovfVxyXG4gICAgICAgIDxQYXJhbGxheFxyXG4gICAgICAgICAgYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL1oxeklKQ0trLmpwZWdcIlxyXG4gICAgICAgICAgYmx1cj17eyBtaW46IC0xLCBtYXg6IDMgfX1cclxuICAgICAgICAgIHN0cmVuZ3RoPXs4MDB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBkYXRhLWFvcz1cInpvb20taW5cIlxyXG4gICAgICAgICAgICBkYXRhLWFvcy1taXJyb3I9XCJ0cnVlXCJcclxuICAgICAgICAgICAgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudD1cInRvcC1jZW50ZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIyXCI+XHJcbiAgICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRyZUEgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAjQUdFTkNFWkVOSVRIXHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgcmVmPXtpbnN0YX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlckZsZXhcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxMCVcIiwgbWFyZ2luUmlnaHQ6IFwiMTAlXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGUxXCIgPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGUyXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTNcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXY+PHAgY2xhc3NOYW1lPVwiSU1BR0lORVJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5JTUFHSU5FUjwvcD48L2Rpdj5cclxuICAgICAgICAgIDxkaXY+PHAgY2xhc3NOYW1lPVwiQ1LDiUVSXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+Q1LDiUVSPC9wPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdj48cCBjbGFzc05hbWU9XCJSw4pWRVJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5Sw4pWRVI8L3A+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PjxwIGNsYXNzTmFtZT1cIkVOU0VNQkxFXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+RU5TRU1CTEU8L3A+PC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGU0XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTVcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlNlwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlN1wiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGU4XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTlcIj48L2Rpdj4gXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTEwXCI+PC9kaXY+IFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGUxMVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGUxMlwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGUxM1wiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGUxNFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGUxNVwiPjwvZGl2PiAgKi99XHJcbiAgICAgICAgICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi8vbGlnaHR3aWRnZXQuY29tL3dpZGdldHMvZjJjODNiYjYxMzM5NWM5ZmE3YmQ3YTM1NTI0N2QzY2YuaHRtbFwiIFxyXG4gICAgICAgICAgICAgICAgICBzY3JvbGxpbmc9XCJub1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsbG93dHJhbnNwYXJlbmN5PVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGlnaHR3aWRnZXQtd2lkZ2V0XCJcclxuICAgICAgICAgICAgICAgID48L2lmcmFtZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aDRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpZ2h0IGxldHRlclNwYWNpbmcgY29udGFpbmVyIGNlbnRlciBtYXJnaW5Ub3BYTFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBVTiBVTklWRVJTIERFIFBPU1NJQklMSVRFU1xyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9QYXJhbGxheD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG5cdH1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBJbnN0YWZsdXg7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gTWluaUZvb3RlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblxyXG5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy94OW5lczVWLmpwZylcIn19IGNsYXNzTmFtZT1cImRlbWlibG9jRm9vdGVyMlwiIGFsdD1cImZvb3RlclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1pYmxvYzJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYXJlbnQ0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkaXZDXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImNlbnRlclwiIHNyYz1cIi96ZW5pdGgvaW1hZ2VzL3dYMkxDSVQucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCIyMjBcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGl0cmVDIGxpZ2h0IGxldHRlclNwYWNpbmdYU1wiPlpFTklUSCA8YnIgLz4gVkFMIETigJlFVVJPUEUgPGJyIC8+IEhFTExPQEFHRU5DRVpFTklUSC5DT00gPGJyIC8+IDA2LjExLjg2LjY1LjgwLjwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkaXZEXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwidGl0cmVEIG1lZGl1bSBsZXR0ZXJTcGFjaW5nIG1hcmdpbkJvdHRvbVwiPlJFSk9JR05FWiA8YnIgLz4gTOKAmUFWRU5UVVJFPC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicnMyIGNlbnRlckZsZXggY2VudGVyXCI+XHJcbiAgICAgIFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImZiMlwiIGhyZWY9J2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9BR0VOQ0VaRU5JVEgvJz48L2E+XHJcbiAgICAgIFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImluc3RhMlwiIGhyZWY9J2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vYWdlbmNlemVuaXRoLz9obD1mcic+PC9hPlxyXG4gICAgICBcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJsaW5rZWRpbjJcIiBocmVmPSdodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9hZ2VuY2UtemVuaXRoLyc+PC9hPlxyXG4gICAgXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJ0aXRyZUQgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luQm90dG9tIFwiPk5FV1NMRVRURVI8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRNYWlsIGNlbnRlclwiIHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwYXR0ZXJuPVwiLitAZ2xvYmV4XFwuY29tXCIgc2l6ZT1cIjMwXCIgcmVxdWlyZWQ+PC9pbnB1dD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkaXZFXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwidGl0cmVDIG1lZGl1bSBsZXR0ZXJTcGFjaW5nXCI+U0lURSBNQVA8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT0ndWwyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJmb290ZXJUZXh0IGxpZ2h0IHRleHQtaDVcIj5BQ0NVRUlMPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPlBST0pFVFM8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+w4lRVUlQRTwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJmb290ZXJUZXh0IGxpZ2h0IHRleHQtaDVcIj5DT05UQUNUPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibGlnaHQgZm9vdGVyQ3JlZGl0IGxldHRlclNwYWNpbmdTXCI+wqkgQUdFTkNFIFpFTklUSCAvIFRPVVMgRFJPSVRTIFLDiVNFUlbDiVM8L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgIFxyXG5cclxuXHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBNaW5pRm9vdGVyOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5cclxuZnVuY3Rpb24gU2F0aXNmYWN0aW9uKCkge1xyXG5cdGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgXHJcblx0Ly8gUmVtYXJxdWUgOiBsZSB0YWJsZWF1IHZpZGUgZGUgZMOpcGVuZGFuY2VzIFtdIGluZGlxdWVcclxuXHQvLyBxdWUgdXNlRWZmZWN0IG5lIHPigJlleMOpY3V0ZXJhIHF14oCZdW5lIGZvaXMsIHVuIHBldSBjb21tZVxyXG5cdC8vIGNvbXBvbmVudERpZE1vdW50KClcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdCAgZmV0Y2goXCIvYXBpL2NsaWVudHNcIilcclxuXHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0LnRoZW4oXHJcblx0XHQgIChyZXN1bHQpID0+IHtcclxuXHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdHNldEl0ZW1zKHJlc3VsdFtcImh5ZHJhOm1lbWJlclwiXSk7XHJcblx0XHQgIH0sXHJcblx0XHQgIC8vIFJlbWFycXVlIDogaWwgZmF1dCBnw6lyZXIgbGVzIGVycmV1cnMgaWNpIHBsdXTDtHQgcXVlIGRhbnNcclxuXHRcdCAgLy8gdW4gYmxvYyBjYXRjaCgpIGFmaW4gcXVlIG5vdXMgbuKAmWF2YWxpb25zIHBhcyBsZXMgZXhjZXB0aW9uc1xyXG5cdFx0ICAvLyBkdWVzIMOgIGRlIHbDqXJpdGFibGVzIGJ1Z3MgZGFucyBsZXMgY29tcG9zYW50cy5cclxuXHRcdCAgKGVycm9yKSA9PiB7XHJcblx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHQgIH1cclxuXHRcdClcclxuXHR9LCBbXSlcclxuICBcclxuXHRpZiAoZXJyb3IpIHtcclxuXHQgIHJldHVybiA8ZGl2PkVycmV1ciA6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuXHR9IGVsc2UgaWYgKCFpc0xvYWRlZCkge1xyXG5cdCAgcmV0dXJuIDxkaXY+Q2hhcmdlbWVudC4uLjwvZGl2PjtcclxuXHR9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coaXRlbXMpO1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuICAgICAgey8qIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxyXG5cclxuICAgICAgPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZzUubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+ICovfVxyXG4gICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL2FXRUxoazhBLmpwZWdcIiBibHVyPXt7IG1pbjogLTEsIG1heDogMyB9fSBzdHJlbmd0aD17MH0+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7cGFkZGluZ1RvcDogJzYwcHgnfX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIyXCI+XHJcblxyXG5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRyZUEgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPlNBVElTRkFDVElPTjwvaDE+XHJcbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGl0cmVDZW50ZXIgbGlnaHQgbGV0dGVyU3BhY2luZ1NcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj7DilRSRSDDgCBWT1MgQ8OUVMOJUywgQ+KAmUVTVCBBVkFOVCBUT1VUIERFUyBSRU5DT05UUkVTLjwvaDY+XHJcbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGl0cmVDZW50ZXIgbGlnaHQgbGV0dGVyU3BhY2luZ1MgcGFkZGluZ0JvdHRvbVwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPkRFUyBISVNUT0lSRVMgSFVNQUlORVMsIEVYQ0VQVElPTk5FTExFUywgT1JJR0lOQUxFUy48L2g2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lck1heCBjZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4OHB4XCJ9fSBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1swXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi96ZW5pdGgvaWNvbnMvMGFmZGM3XzJiNzJlODJhNjgyNzQ2OTE4ZTE1ZDlmNjdlOTM3ZWI3fm12Mi5wbmdcIn0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL3plbml0aC9pY29ucy8wYWZkYzdfNGM3NWZkM2Y1MTllNDIyMGJiNTgyZDc3YzhhYTdjODJ+bXYyLnBuZ1wifSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvemVuaXRoL2ljb25zLzBhZmRjN180ZDcyNTc5MjRhYzU0ODVmYTZlYjlmOGMzYmE4YzNmMn5tdjIucG5nXCJ9IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi96ZW5pdGgvaWNvbnMvMGFmZGM3XzY0YTY0MDk0NTRkMTRkNTI4NTBjZDY3MjQ4NTA1NTVifm12Mi5wbmdcIn0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL3plbml0aC9pY29ucy8wYWZkYzdfNDIwYWJjZTBjNDdkNGQ3ZTllN2QyMTY2MzA1ZWE2YmV+bXYyLnBuZ1wifSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMV1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMl1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgc3R5bGU9e3ttYXJnaW5SaWdodDpcIjg4cHhcIn19IGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzBdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJNYXggY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiODhweFwifX0gY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMV1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMl1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMV1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMV1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMl1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCIgc3R5bGU9e3ttYXJnaW5SaWdodDpcIjg4cHhcIn19IGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzBdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJNYXggY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiODhweFwifX0gY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMV1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMl1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMV1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMl1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMV1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMl1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgc3R5bGU9e3ttYXJnaW5SaWdodDpcIjg4cHhcIn19IGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzBdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0cmVCIGxpZ2h0IGxldHRlclNwYWNpbmcgY29udGFpbmVyIGNlbnRlciBhY2Nyb2NoZSBtYXJnaW5Cb3R0b20yXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+TEUgUkVTVEUgT04gTOKAmcOJQ1JJUkEgRU5TRU1CTEU8L2g0PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9QYXJhbGxheD5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTYXRpc2ZhY3Rpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5cclxuZnVuY3Rpb24gVmlzaW9uKCkgIHtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cclxuICAgICAgey8qIDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG5cdFx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmc2Lm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuXHRcdFx0XHQ8L3ZpZGVvPiAqL31cclxuICAgICAgey8qIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPSdiYWNrZ3JvdW5kJz4gKi99XHJcblxyXG4gICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL2FXRUxoazhBLmpwZWdcIiBzdHJlbmd0aD17MH0+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7cGFkZGluZ1RvcDogJzIwMHB4J319PlxyXG4gICAgICA8ZGl2IGRhdGEtYW9zPVwiem9vbS1pblwiIGRhdGEtYW9zLW1pcnJvcj1cInRydWVcImRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudD1cInRvcC1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIiBzdHlsZT17e2hlaWdodDpcIjEwMDBweFwifX0+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0cmVBIG1lZGl1bSBsZXR0ZXJTcGFjaW5nIG1hcmdpblN0b3BcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5WSVNJT048L2gxPlxyXG4gICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImxpZ2h0IGxldHRlclNwYWNpbmdTIHNvdXNUaXRyZVwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPlVORSBSRU5DT05UUkUgUVVJIENIQU5HRSBUT1VUPC9oNj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlclwiPlxyXG4gICAgICAgICAgICA8U3dpcGVyXHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9ezF9XHJcbiAgICAgICAgICAgIGNlbnRlcmVkU2xpZGVzPXt0cnVlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzd2lwZXIzXCJcclxuICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJfX2NvbnRlbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyZW50M1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzaW9uQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgb2JqZWN0Rml0OiAnY292ZXInfX1zcmM9XCJodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhL2JiNWUzYl9hMTA1MjM5YmZkMTg0OGI0ODkyOTM5ZDg3OThjZDY1N35tdjIuanBnL3YxL2Nyb3AveF8xMDkseV8wLHdfNzM0LGhfOTAwL2ZpbGwvd18yNzAsaF8zNDgsYWxfYyxxXzgwLHVzbV8xLjIwXzEuMDBfMC4wMSxlbmNfYXV0by9iYjVlM2JfYTEwNTIzOWJmZDE4NDhiNDg5MjkzOWQ4Nzk4Y2Q2NTd+bXYyLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidmlzaW9uVGV4dDIgbWVkaXVtXCI+TUFUSElTPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5DT05TRUlMPC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+TsOJR09DSUFUSU9OPC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+w4lWw4lORU1FTlRJRUw8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5HRVNUSU9OIERFIFBST0pFVDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkRJUkVDVElPTiBBUlRJU1RJUVVFPC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+RElSRUNUSU9OIEQnRVhQTE9JVEFUSU9OPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5Ew4lWRUxPUFBFTUVOVCBDT01NRVJDSUFMIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyX19jb250ZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmVudDNcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpc2lvbkJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIG9iamVjdEZpdDogJ2NvdmVyJ319c3JjPVwiaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS85NGIyNTVfNzQ4ODVkMzc0Y2Y4NDIxNDg5OWM5ZGY2MGQ2NTM2Mzh+bXYyLmpwZy92MS9maWxsL3dfMjg0LGhfMzcxLGFsX2MscV84MCx1c21fMS4yMF8xLjAwXzAuMDEsZW5jX2F1dG8vQVZBVEFSJTIwUk9OJTIwQi5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInZpc2lvblRleHQyIG1lZGl1bVwiPlJPTjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+Q09OU0VJTDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPk7DiUdPQ0lBVElPTjwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPsOJVsOJTkVNRU5USUVMPC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+R0VTVElPTiBERSBQUk9KRVQ8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5ESVJFQ1RJT04gQVJUSVNUSVFVRTwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkRJUkVDVElPTiBEJ0VYUExPSVRBVElPTjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+RMOJVkVMT1BQRU1FTlQgQ09NTUVSQ0lBTCA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgIDwvU3dpcGVyPlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9QYXJhbGxheD5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgVmlzaW9uOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQgTWFycXVlZSBmcm9tIFwicmVhY3QtZmFzdC1tYXJxdWVlXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1wYXJhbGxheCc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlc2hlZXRzL2J1bG1hL2hlbHBlcnMvc3BhY2luZy5zYXNzXCJcclxuXHJcbmNvbnN0IFdvcmRwYWdlID0gKHt9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzLzZXdmVtbTNLLmpwZWdcIiBibHVyPXt7IG1pbjogLTEsIG1heDogMyB9fSBzdHJlbmd0aD17MH0+ICovfVxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy82V3ZlbW0zSy5qcGVnKVwiLCBoZWlnaHQ6XCI1NzBweFwifX1cclxuICAgICAgICBjbGFzc05hbWU9XCJkZW1pYmxvY1wiXHJcbiAgICAgICAgYWx0PVwid29yZHBhZ2VcIlxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPiAqL31cclxuICAgICAgICAgIHsvKiA8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZzQubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPiAqL31cclxuICAgICAgICB7LyogPC92aWRlbz4gKi99XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgYWx0PVwiTGlzdGUgZGUgbW90c1wic3R5bGU9e3toZWlnaHQ6JzEwMCUnfX0+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX1cclxuICAgICAgICAgICAgZGF0YS1hb3M9XCJ6b29tLWluXCJcclxuICAgICAgICAgICAgZGF0YS1hb3MtbWlycm9yPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zLWFuY2hvci1wbGFjZW1lbnQ9XCJ0b3AtY2VudGVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJlbnRcIj5cclxuICAgICAgICAgICAgPE1hcnF1ZWUgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIiwgb3ZlcmZsb3c6ICdoaWRkZW4nLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBoZWlnaHQ6XCIxNzBweFwifX0gZ3JhZGllbnQ9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2UgbGV0dGVyU3BhY2luZyBsaWdodCAgZ3JpZDFcIiBpZD1cIndvcmRwYWdlXCI+XHJcbiAgICAgICAgICAgICAgICBSw4lBQ1RJVklUw4lcclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYXJnaW4gbWVkaXVtIHdvcmRwYWdlVGV4dCBncmlkMlwiPsK3PC9oMT5cclxuICAgICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndvcmRwYWdlIGxldHRlclNwYWNpbmcgb3V0bGluZSBub3JtYWwgZ3JpZDNcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFBST1hJTUlUw4lcclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgbWFyZ2luIG1lZGl1bSB3b3JkcGFnZVRleHQgb3V0bGluZSBncmlkNFwiPsK3PC9oMT5cclxuICAgICAgICAgICAgICA8aDEgIGNsYXNzTmFtZT1cIndvcmRwYWdlIGxpZ2h0IGxldHRlclNwYWNpbmcgZ3JpZDVcIj5cclxuICAgICAgICAgICAgICAgIFBBU1NJT05cclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0ICBtZWRpdW0gZ3JpZDZcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgPGgxICBjbGFzc05hbWU9XCJ3b3JkcGFnZSBub3JtYWwgb3V0bGluZSBsZXR0ZXJTcGFjaW5nIGdyaWQ3XCI+XHJcbiAgICAgICAgICAgICAgICBTVFJBVMOJR0lFXHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBvdXRsaW5lIG1lZGl1bSBncmlkNlwiPsK3PC9oMT5cclxuICAgICAgICAgICAgPC9NYXJxdWVlPlxyXG4gICAgICAgICAgICA8TWFycXVlZSBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLCBvdmVyZmxvdzogJ2hpZGRlbicsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGhlaWdodDpcIjE3MHB4XCJ9fSBkaXJlY3Rpb249e1wicmlnaHRcIn0gZ3JhZGllbnQ9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICA8aDEgIGNsYXNzTmFtZT1cIndvcmRwYWdlIG5vcm1hbCBsZXR0ZXJTcGFjaW5nIGdyaWQ5XCI+XHJcbiAgICAgICAgICAgICAgICBFVkVOVFxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIiB3b3JkcGFnZVRleHQgbWVkaXVtIGdyaWQxMFwiPsK3PC9oMT5cclxuICAgICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid29yZHBhZ2UgbWFycm9uIG5vcm1hbCBsZXR0ZXJTcGFjaW5nIGdyaWQxMVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgWkVOSVRIXHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBvdXRsaW5lIG1lZGl1bSBncmlkMTJcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgPGgxICBjbGFzc05hbWU9XCJ3b3JkcGFnZSBub3JtYWwgbGV0dGVyU3BhY2luZyBncmlkMTNcIj5cclxuICAgICAgICAgICAgICAgIENPTlNFSUxcclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG1lZGl1bSBncmlkMTRcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgPGgxICBjbGFzc05hbWU9XCJ3b3JkcGFnZSBub3JtYWwgbGV0dGVyU3BhY2luZyBncmlkMTVcIj5cclxuICAgICAgICAgICAgICAgIENPTU1VTklDQVRJT05cclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG91dGxpbmUgbWVkaXVtIGdyaWQ2XCI+wrc8L2gxPlxyXG4gICAgICAgICAgICAgIDwvTWFycXVlZT5cclxuICAgICAgICAgICAgICA8TWFycXVlZSBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLCBvdmVyZmxvdzogJ2hpZGRlbicsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGhlaWdodDpcIjE3MHB4XCJ9fSBncmFkaWVudD17ZmFsc2V9ID5cclxuICAgICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid29yZHBhZ2UgbWVkaXVtIGxldHRlclNwYWNpbmcgZ3JpZDE3XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDUsOJQVRJVklUw4lcclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDxoMSAgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBtZWRpdW0gZ3JpZDE4XCI+wrc8L2gxPlxyXG4gICAgICAgICAgICAgIDxoMSAgY2xhc3NOYW1lPVwid29yZHBhZ2UgbGlnaHQgb3V0bGluZSBsZXR0ZXJTcGFjaW5nIGdyaWQxOVwiPlxyXG4gICAgICAgICAgICAgICAgUsOKVkVSXHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8aDEgIGNsYXNzTmFtZT1cIiB3b3JkcGFnZVRleHQgb3V0bGluZSBtZWRpdW0gZ3JpZDIwXCI+wrc8L2gxPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3b3JkcGFnZSBsaWdodCBsZXR0ZXJTcGFjaW5nIGdyaWQyMVwiPlxyXG4gICAgICAgICAgICAgICAgQU1CSVRJT05cclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDxoMSAgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBtZWRpdW0gZ3JpZDIyXCI+wrc8L2gxPlxyXG4gICAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid29yZHBhZ2Ugb3V0bGluZSBub3JtYWwgbGV0dGVyU3BhY2luZyBncmlkMjNcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIElNQUdJTkFUSU9OXHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBvdXRsaW5lICBtZWRpdW0gZ3JpZDZcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgPC9NYXJxdWVlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDwvUGFyYWxsYXg+ICovfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmRwYWdlO1xyXG4iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL19uYXZiYXInO1xyXG5pbXBvcnQgUHJvamVjdFBhZ2VPbmUgZnJvbSBcIi4vX3Byb2plY3RwYWdlT25lXCI7XHJcbmltcG9ydCBQcm9qZWN0cGFnZVR3byBmcm9tICcuL19wcm9qZWN0cGFnZVR3byc7XHJcbmltcG9ydCBQcm9qZWN0cGFnZVRocmVlIGZyb20gJy4vX3Byb2plY3RwYWdlVGhyZWUnO1xyXG5pbXBvcnQgUHJvamVjdHBhZ2VGb3VyIGZyb20gJy4vX3Byb2plY3RwYWdlRm91cic7XHJcbmltcG9ydCBQcm9qZWN0cGFnZUZpdmUgZnJvbSAnLi9fcHJvamVjdHBhZ2VGaXZlJztcclxuaW1wb3J0IFByb2plY3RwYWdlU2l4IGZyb20gJy4vX3Byb2plY3RwYWdlU2l4JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0cGFnZSgpIHtcclxuXHRjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZEltZywgc2V0SXNMb2FkZWRJbWddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZE5leHRQcmV2LCBzZXRJc0xvYWRlZE5leHRQcmV2XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNJbWdSZWFkeSwgc2V0SW1nUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbcHJlY2ksIHNldFByZWNpXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbc2Vjb25kLCBzZXRTZWNvbmRdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbTmV4dFByZXYsIHNldE5leHRQcmV2XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRpZihpZCl7XHJcblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0XHRmZXRjaChgL2FwaS9wcm9qZXRzLyR7aWR9YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRJdGVtcyhyZXN1bHQpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cclxuXHRcdFx0ZmV0Y2goYC9nZXRJbWFnZXNQcm9qZXQvJHtpZH1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdGltZykgPT4ge1xyXG5cdFx0XHRcdGxldCB0aGlzUmVzID0gSlNPTi5wYXJzZShyZXN1bHRpbWcpXHJcblx0XHRcdFx0c2V0SXNMb2FkZWRJbWcodHJ1ZSk7XHJcblx0XHRcdFx0c2V0SW1hZ2VzKEpTT04ucGFyc2UocmVzdWx0aW1nKSk7XHJcblx0XHRcdFx0aWYoIHRoaXNSZXMgPT0gXCJbXVwiIHx8IHRoaXNSZXMubGVuZ3RoID09IDApe1xyXG5cdFx0XHRcdFx0c2V0SW1nUmVhZHkodHJ1ZSlcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZih0aGlzUmVzKXtcclxuXHRcdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzUmVzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2codGhpc1Jlc1tpXSlcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coaSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlc1tpXS5oZWFkZXIpXHJcblx0XHRcdFx0XHRcdFx0c2V0SGVhZGVyKHRoaXNSZXNbaV0pXHJcblx0XHRcdFx0XHRcdGlmKHRoaXNSZXNbaV0uZm9jdXMpXHJcblx0XHRcdFx0XHRcdFx0c2V0UHJlY2kodGhpc1Jlc1tpXSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlc1tpXS5zZWNvbmRhaXJlKVxyXG5cdFx0XHRcdFx0XHRcdHNldFNlY29uZCh0aGlzUmVzW2ldKVxyXG5cdFx0XHRcdFx0XHQvLyBpZihpbWFnZXNbaV0udmlzaWJsZSlcclxuXHRcdFx0XHRcdFx0Ly8gXHRzZXREaXNwbGF5KC4uLmltYWdlc1tpXSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlcy5sZW5ndGgtMSA9PSBpKXtcclxuXHRcdFx0XHRcdFx0XHRzZXRJbWdSZWFkeSh0cnVlKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHJcblx0XHRcdGZldGNoKGAvTmV4UHJldlAvJHtpZH1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdGxldCBOZXh0ID0gSlNPTi5wYXJzZShyZXN1bHRbMF0pXHJcblx0XHRcdFx0bGV0IFByZXYgPSBKU09OLnBhcnNlKHJlc3VsdFsxXSlcclxuXHRcdFx0XHRpZihOZXh0ICYmIFByZXYpe1xyXG5cdFx0XHRcdFx0c2V0TmV4dFByZXYoW05leHQsIFByZXZdKTtcclxuXHRcdFx0XHRcdGlmKE5leHRQcmV2KXtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coTmV4dFByZXYpXHJcblx0XHRcdFx0XHRcdHNldElzTG9hZGVkTmV4dFByZXYodHJ1ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdH0sIFtdKVxyXG5cdH1cclxuXHJcblx0aWYgKGVycm9yKSB7XHJcblx0XHQgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuXHQgIH0gZWxzZSBpZiAoIWlzTG9hZGVkIHx8ICFpc0ltZ1JlYWR5IHx8ICFpc0xvYWRlZE5leHRQcmV2KSB7XHJcblx0XHRyZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG5cdCAgfSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICggXHJcblx0XHRcdFx0PD5cclxuXHRcdFx0XHQ8TmF2YmFyPjwvTmF2YmFyPlxyXG5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8UHJvamVjdFBhZ2VPbmUgZGF0YT17aXRlbXN9PjwvUHJvamVjdFBhZ2VPbmU+XHJcblx0XHRcdFx0PFByb2plY3RwYWdlVHdvIGRhdGE9e2l0ZW1zfT48L1Byb2plY3RwYWdlVHdvPlxyXG5cdFx0XHRcdDxQcm9qZWN0cGFnZVRocmVlIGRhdGE9e3NlY29uZH0+PC9Qcm9qZWN0cGFnZVRocmVlPlxyXG5cdFx0XHRcdDxQcm9qZWN0cGFnZUZvdXIgcHJlY2k9e3ByZWNpfSBkYXRhMj17aXRlbXN9PjwvUHJvamVjdHBhZ2VGb3VyPlxyXG5cdFx0XHRcdDxQcm9qZWN0cGFnZUZpdmU+PC9Qcm9qZWN0cGFnZUZpdmU+XHJcblx0XHRcdFx0PFByb2plY3RwYWdlU2l4IGRhdGE9e2l0ZW1zfSBucD17TmV4dFByZXZ9PjwvUHJvamVjdHBhZ2VTaXg+XHJcblx0XHRcdFx0PC8+XHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG4vL1xyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cGFnZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFByb2plY3RwYWdlRml2ZSgpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdvcGFjaXR5Qmx1ZSc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlcic+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJlbnRDbGllbnRWaWV3Jz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2xpZW50R3JpZFZpZXcxJz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYm94RmxleCc+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NsaWVudEdyaWRWaWV3Mic+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2JveEZsZXgnPjwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2xpZW50R3JpZFZpZXczJz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYm94RmxleCc+PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjbGllbnRHcmlkVmlldzQnPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdib3hGbGV4Jz48L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cGFnZUZpdmU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0cGFnZUZvdXIoe3ByZWNpLCBkYXRhMn0pIHtcclxuXHRjb25zb2xlLmxvZyhwcmVjaSlcclxuXHRpZihkYXRhMi5mb2N1cyl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy94OW5lczVWLmpwZylcIn19IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nb3BhY2l0eUJsdWUnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyMic+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyQ2VudGVyQSc+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmVudDIxIG1hcmdpblRvcCc+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFyZ2luVG9wMicgPlxyXG5cdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9J2xpZ2h0IGxldHRlclNwYWNpbmdTJz5Gb2N1czwvaDM+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xpZ2h0IGNvbnRhaW5lckNlbnRlckNsaWVudCB0ZXh0LWg1JyBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ319IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmRhdGEyLmZvY3VzfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9JyBib3hDbGllbnQnPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPScgY29udGFpbicgc3R5bGU9e3sgb2JqZWN0Rml0OlwiY292ZXJcIn19IHNyYz17XCIvaW1hZ2VzL2ltYWdlcHJvamV0L1wiICsgcHJlY2kuaW1hZ2V9IGFsdD1cIlwiLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2Plx0XHRcclxuXHJcblxyXG5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9fVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RwYWdlRm91cjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuZnVuY3Rpb24gUHJvamVjdHBhZ2VPbmUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQxXCIgYWx0PVwiaG9tZXBhZ2VcIj5cclxuXHJcblx0XHRcdDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG5cdFx0XHRcdDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuXHRcdFx0XHQ8L3ZpZGVvPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHlCbHVlXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyMlwiPlxyXG5cdFx0XHRcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvemVuaXRoL2ltYWdlcy9iSU8xcjlGLnBuZ1wiIGFsdD1cIkxvZ29cIiB3aWR0aD17MjAwfSBjbGFzc05hbWU9XCJjZW50ZXJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cdFxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbGllbnRwYWdlVGV4dFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJtZWRpdW0gbWFyZ2luU3RvcCBjbGllbnREZXRhaWxcIj57ZGF0YS5kYXRhLnByb2pldH08L2gxPlxyXG5cdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9XCJsaWdodCBtYXJnaW5TdG9wIGNsaWVudERldGFpbFwiPntkYXRhLmRhdGEuc2VjdGV1ci5zZWN0ZXVyfTwvaDY+XHJcblx0XHRcdFx0XHRcdFx0e2RhdGEuZGF0YS5jbGllbnQgPyA8cCBjbGFzc05hbWU9XCJsaWdodCBtYXJnaW5TdG9wIGNsaWVudERldGFpbFwiPlVOIFBST0pFVCBQT1VSIDoge2RhdGEuZGF0YS5jbGllbnQubm9tQ2xpZW50fTwvcD4gOiAgPHAgY2xhc3NOYW1lPVwibGlnaHQgbWFyZ2luU3RvcCBjbGllbnREZXRhaWxcIj5VTiBQUk9KRVQgUE9VUiA6IE4vQTwvcD59XHJcblx0XHRcdFx0XHRcdFx0e2RhdGEuZGF0YS5kdXJlZSA/IDxwIGNsYXNzTmFtZT1cImxpZ2h0IGNsaWVudERldGFpbFwiPkRVUsOJRSBQUk9KRVQgOiB7ZGF0YS5kYXRhLmR1cmVlfTwvcD4gOiA8cCBjbGFzc05hbWU9XCJsaWdodCBjbGllbnREZXRhaWxcIj5EVVLDiUUgUFJPSkVUIDogTi9BPC9wPn1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcclxuXHJcblx0XHRcdFx0XHRcdFx0PExpbmsgdG89e2Avc2VhcmNoY2F0LyR7ZGF0YS5kYXRhLmNhdGVnb3JpZVswXS5pZH0vJHtkYXRhLmRhdGEuY2F0ZWdvcmllWzBdLmNhdGVnb3JpZX1gfT48cCBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lXCIsIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnfX0gY2xhc3NOYW1lPVwibGlnaHQgY2xpZW50RGV0YWlsMlwiPntkYXRhLmRhdGEuY2F0ZWdvcmllWzBdLmNhdGVnb3JpZX08L3A+PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDxwIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmVcIn19IGNsYXNzTmFtZT1cImxpZ2h0IGNsaWVudERldGFpbDJcIj4gICB8ICAgPC9wPlxyXG5cdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuY2F0ZWdvcmllWzFdICYmIDxMaW5rIHRvPXtgL3NlYXJjaGNhdC8ke2RhdGEuZGF0YS5jYXRlZ29yaWVbMV0uaWR9LyR7ZGF0YS5kYXRhLmNhdGVnb3JpZVswXS5jYXRlZ29yaWV9YH0gPjxwIGNsYXNzTmFtZT1cImxpZ2h0IGNsaWVudERldGFpbDJcIiBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lXCIsIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnfX0+e2RhdGEuZGF0YS5jYXRlZ29yaWVbMV0uY2F0ZWdvcmllfTwvcD48L0xpbms+fVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyM1wiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoNCBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ319IGNsYXNzTmFtZT1cImxpZ2h0IGxldHRlclNwYWNpbmdTICBkaXNjb3ZlckNsaWVudDJcIj57ZGF0YS5kYXRhLm1pc3Npb259PC9oND5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxpZ2h0ICBkaXNjb3ZlckNsaWVudFwiPkTDiUNPVVZSRVo8L3A+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaW5lQ2xpZW50XCIgPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cGFnZU9uZTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0cGFnZVNpeCh7ZGF0YSwgbnB9KSB7XHJcblx0aWYobnBbMF0pe1xyXG5cdFx0aWYobnBbMF1bMF0gPT0gJ251bGwnKVxyXG5cdFx0XHRucFswXVswXSA9IGZhbHNlO1xyXG5cdFx0aWYobnBbMF1bMV0gPT0gJ251bGwnKVxyXG5cdFx0XHRucFsxXVswXSA9IGZhbHNlO1xyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2RlbWlibG9jT3BhY2l0eSc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXJDZW50ZXIgbWFyZ2luVG9wUyc+XHJcblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J21lZGl1bSBjZW50ZXJUZXh0Jz5VTiBUw4lNT0lHTkFHRTwvaDQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsaWdodCBjZW50ZXJUZXh0JyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLnRlbW9pZ25hZ2V9fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPSdkZW1pYmxvY0NsaWVudCc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGVtaWJsb2NPcGFjaXR5Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmVudENsaWVudE5leHRQcmV2Jz5cclxuXHJcblx0XHRcdFx0XHRcdFx0e25wWzFdWzBdICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nQ2xpZW50TmV4dFByZXYxJyBvbkNsaWNrPXsoKT0+e2xvY2F0aW9uLmhyZWYgPSBcIi9wcm9qZXQvXCIrIG5wWzFdWzBdLmlkfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9J2xpZ2h0IHJpZ2h0VGV4dCBtYXJnaW5Ub3BTJz5QUk9KRVQgUFLDiUPDiURFTlQ8L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPSdyaWdodFRleHQnPntucFsxXVswXS5wcm9qZXR9PC9oNT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT0nbGlnaHQgcmlnaHRUZXh0Jz57bnBbMV1bMF0ubWlzc2lvbn08L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+fVxyXG5cclxuXHRcdFx0XHRcdFx0XHR7bnBbMF1bMF0gJiYgPGRpdiBjbGFzc05hbWU9J0NsaWVudE5leHRQcmV2Micgb25DbGljaz17KCk9Pntsb2NhdGlvbi5ocmVmID0gXCIvcHJvamV0L1wiKyBucFswXVswXS5pZH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPSdsaWdodCBsZWZ0VGV4dCBtYXJnaW5Ub3BTJz5QUk9KRVQgU1VJVkFOVDwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9J2xlZnRUZXh0Jz57bnBbMF1bMF0ucHJvamV0fTwvaDU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9J2xpZ2h0IGxlZnRUZXh0Jz57bnBbMF1bMF0ubWlzc2lvbn08L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+fVxyXG5cdFx0XHRcdFx0XHRcdHsvKiA8YSBocmVmPXtcIi9jbGllbnQvXCIrbnBbMV1bMF0uaWR9PiAqL31cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RwYWdlU2l4OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gUHJvamVjdHBhZ2VUaHJlZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlckRhcmtCbHVlQ2xpZW50Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXJGbGV4Jz5cclxuXHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9J2NvbnRhaW4nIHNyYz17XCIvaW1hZ2VzL2ltYWdlcHJvamV0L1wiICsgZGF0YS5kYXRhLmltYWdlfSBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cGFnZVRocmVlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gUHJvamVjdHBhZ2VUd28oZGF0YSkge1xyXG5cdGlmKGRhdGEuZGF0YS5kZW1hbmRlIHx8IGRhdGEuZGF0YS5kZWZpIHx8IGRhdGEuZGF0YS5hY3Rpb24pe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy94OW5lczVWLmpwZylcIn19IGNsYXNzTmFtZT0nZGVtaWJsb2NDbGllbnQnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2RlbWlibG9jQ2xpZW50T3BhY2l0eSc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJlbnRDbGllbnQnPlxyXG5cdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuZGVtYW5kZSAmJlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjbGllbnRHcmlkMSc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdsaWdodCc+VU5FIERFTUFOREU8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xpZ2h0IGNvbnRhaW5lckNlbnRlckNsaWVudCcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YS5kYXRhLmRlbWFuZGV9fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj4gXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLmRlZmkgJiZcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2xpZW50R3JpZDInPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nbGlnaHQnPlVOIETDiUZJPC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmRhdGEuZGF0YS5kZWZpfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLmFjdGlvbiAmJlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjbGllbnRHcmlkMyc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdsaWdodCc+VU5FIEFDVElPTjwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGlnaHQgY29udGFpbmVyQ2VudGVyQ2xpZW50JyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLmRhdGEuYWN0aW9ufX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuXHR9XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHBhZ2VUd287XHJcbiIsImltcG9ydCBTZWFyY2hQYWdlT25lMiBmcm9tIFwiLi9fU2VhcmNoUGFnZU9uZTJcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9fbmF2YmFyJztcclxuaW1wb3J0IFJzQnV0dG9uIGZyb20gJy4uL19yc0J1dHRvbic7XHJcbmltcG9ydCBMaW5lc1RvcCBmcm9tICcuLi9fbGluZXNUb3AnO1xyXG5pbXBvcnQgTGluZXNCb3R0b20gZnJvbSAnLi4vX2xpbmVzQm90dG9tJztcclxuaW1wb3J0IFNlYXJjaFBhZ2VUd28yIGZyb20gXCIuL19TZWFyY2hQYWdlVHdvMlwiO1xyXG5pbXBvcnQgTWluaUZvb3RlciBmcm9tIFwiLi4vSG9tZXBhZ2UvX21pbmlGb290ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFNlYXJjaFBhZ2UyKCkge1xyXG5cdGNvbnN0IHsgaW5mbyB9ID0gdXNlUGFyYW1zKCk7XHJcblx0Y29uc3QgeyBuYW1lIH0gPSB1c2VQYXJhbXMoKTtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZEltZywgc2V0SXNMb2FkZWRJbWddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZE5leHRQcmV2LCBzZXRJc0xvYWRlZE5leHRQcmV2XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNJbWdSZWFkeSwgc2V0SW1nUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbcHJlY2ksIHNldFByZWNpXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbc2Vjb25kLCBzZXRTZWNvbmRdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbTmV4dFByZXYsIHNldE5leHRQcmV2XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuXHRcdFx0ZmV0Y2goYC9nZXRzZWFyY2hjYXQvJHtpbmZvfWAse21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0XHQudGhlbihcclxuXHRcdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0c2V0SXRlbXMocmVzdWx0KTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cdFx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdH0sIFtdKVx0XHRcclxuXHJcblxyXG5cclxuXHRpZiAoZXJyb3IpIHtcclxuXHRcdCByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG5cdCAgfSBlbHNlIGlmICghaXNMb2FkZWQgKSB7XHJcblx0XHRyZXR1cm4gPGRpdj5kYmZnYmZnLi4uPC9kaXY+O1xyXG5cdCAgfSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICggIFxyXG5cdFx0PD5cclxuXHRcdDxOYXZiYXI+PC9OYXZiYXI+XHJcblx0XHQ8UnNCdXR0b24+PC9Sc0J1dHRvbj5cclxuXHRcdDxMaW5lc1RvcD48L0xpbmVzVG9wPlxyXG5cdFx0PExpbmVzQm90dG9tPjwvTGluZXNCb3R0b20+XHJcblx0XHRcclxuXHRcdDxTZWFyY2hQYWdlT25lMiBkYXRhID0ge25hbWV9PjwvU2VhcmNoUGFnZU9uZTI+XHJcblx0XHQ8U2VhcmNoUGFnZVR3bzIgZGF0YT17aXRlbXN9PjwvU2VhcmNoUGFnZVR3bzI+XHJcblx0XHR7LyogPFdvcmtwYWdlVGhyZWU+PC9Xb3JrcGFnZVRocmVlPlxyXG5cdFx0PFdvcmtwYWdlRm91cj48L1dvcmtwYWdlRm91cj5cclxuXHRcdDxXb3JrcGFnZUZpdmU+PC9Xb3JrcGFnZUZpdmU+Ki99XHJcblx0XHQ8TWluaUZvb3Rlcj48L01pbmlGb290ZXI+IFxyXG5cdFx0PC8+XHJcblx0ICk7XHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlMjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hQYWdlT25lMihkYXRhKSB7XHJcblx0Y29uc29sZS5sb2coZGF0YSlcclxuXHRBT1MuaW5pdCgpXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZDFcIiBhbHQ9XCJob21lcGFnZVwiPlxyXG5cclxuXHRcdFx0PHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHQ8L3ZpZGVvPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHlCbHVlXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyMlwiPlxyXG5cdFx0XHRcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayB0bz1cIi9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL3plbml0aC9pbWFnZXMvYklPMXI5Ri5wbmdcIiBhbHQ9XCJMb2dvXCIgd2lkdGg9ezIwMH0gY2xhc3NOYW1lPVwiY2VudGVyXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHRcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndvcmtwYWdlVGV4dFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJtZWRpdW1cIj5SRVNVTFRBVCBQT1VSIFwie2RhdGEuZGF0YX1cIjwvaDE+XHJcblx0XHRcdFx0XHRcdFx0ey8qIDxwIGNsYXNzTmFtZT1cImxpZ2h0XCI+TE9HTy4gV0VCIERFU0lHTi4gQ0FURUdPUklFPC9wPiAqL31cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlT25lMjtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaFBhZ2VUd28yKGRhdGEpIHtcclxuXHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdGxldCBib3ggPSBbXVxyXG5cdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmRhdGEubGVuZ3RoOyBpbmRleCsrKSB7XHJcblx0bGV0IGl0ZW0gPSBudWxsO1xyXG5cdFx0aWYoZGF0YS5kYXRhW2luZGV4XVswXSA9PSBcInByb2pldFwiKXtcclxuXHRcdFx0aXRlbSA9ICg8YSBrZXk9e2luZGV4fSBocmVmPXtcIi9wcm9qZXQvXCIgKyBkYXRhLmRhdGFbaW5kZXhdLmlkfT48ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjxwIGNsYXNzTmFtZT1cInRleHREZWNvXCI+e2RhdGEuZGF0YVtpbmRleF0ubWlzc2lvbn08L3A+PGltZyBzcmM9e1wiL2ltYWdlcy9pbWFnZXByb2pldC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaGVhZGVyfSBhbHQ9XCJcIiBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCJhdXRvXCJ9fS8+PC9kaXY+PC9hPilcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRpdGVtID0gKDxhIGtleT17aW5kZXh9IGhyZWY9e1wiL2NsaWVudC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaWR9PjxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PHAgY2xhc3NOYW1lPVwidGV4dERlY29cIj57ZGF0YS5kYXRhW2luZGV4XS5taXNzaW9ufTwvcD48aW1nIHNyYz17XCIvaW1hZ2VzL2NsaWVudC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaGVhZGVyfSBhbHQ9XCJcIiBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCJhdXRvXCJ9fS8+PC9kaXY+PC9hPilcclxuXHRcdH1cclxuXHRcdGJveC5wdXNoKGl0ZW0pXHJcblx0XHRcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Plx0XHRcdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiIGFsdD1cImFjdGlvblwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHlCbHVlXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblxyXG5cclxuXHRcdFx0XHR7Ym94fVxyXG5cclxuICAgICAgICBcdFx0PC9kaXY+XHJcbiAgICAgIFx0XHQ8L2Rpdj5cclxuICAgIFx0XHQ8L2Rpdj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlVHdvMjsiLCJpbXBvcnQgU2VhcmNoUGFnZU9uZSBmcm9tIFwiLi9fU2VhcmNoUGFnZU9uZVwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL19uYXZiYXInO1xyXG5pbXBvcnQgUnNCdXR0b24gZnJvbSAnLi4vX3JzQnV0dG9uJztcclxuaW1wb3J0IExpbmVzVG9wIGZyb20gJy4uL19saW5lc1RvcCc7XHJcbmltcG9ydCBMaW5lc0JvdHRvbSBmcm9tICcuLi9fbGluZXNCb3R0b20nO1xyXG5pbXBvcnQgU2VhcmNoUGFnZVR3byBmcm9tIFwiLi9fU2VhcmNoUGFnZVR3b1wiO1xyXG5pbXBvcnQgTWluaUZvb3RlciBmcm9tIFwiLi4vSG9tZXBhZ2UvX21pbmlGb290ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFNlYXJjaFBhZ2UoKSB7XHJcblx0Y29uc3QgeyBpbmZvIH0gPSB1c2VQYXJhbXMoKTtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZEltZywgc2V0SXNMb2FkZWRJbWddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZE5leHRQcmV2LCBzZXRJc0xvYWRlZE5leHRQcmV2XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNJbWdSZWFkeSwgc2V0SW1nUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbcHJlY2ksIHNldFByZWNpXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbc2Vjb25kLCBzZXRTZWNvbmRdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbTmV4dFByZXYsIHNldE5leHRQcmV2XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhpbmZvKVxyXG5cdFx0XHRmZXRjaChgL2dldFNlYXJjaC8ke2luZm99YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRzZXRJdGVtcyhyZXN1bHQpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0fSwgW10pXHRcdFxyXG5cclxuXHJcblxyXG5cdGlmIChlcnJvcikge1xyXG5cdFx0IHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcblx0ICB9IGVsc2UgaWYgKCFpc0xvYWRlZCApIHtcclxuXHRcdHJldHVybiA8ZGl2PmRiZmdiZmcuLi48L2Rpdj47XHJcblx0ICB9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gKCAgXHJcblx0XHQ8PlxyXG5cdFx0PE5hdmJhcj48L05hdmJhcj5cclxuXHRcdDxSc0J1dHRvbj48L1JzQnV0dG9uPlxyXG5cdFx0PExpbmVzVG9wPjwvTGluZXNUb3A+XHJcblx0XHQ8TGluZXNCb3R0b20+PC9MaW5lc0JvdHRvbT5cclxuXHRcdFxyXG5cdFx0PFNlYXJjaFBhZ2VPbmUgZGF0YSA9IHtpbmZvfT48L1NlYXJjaFBhZ2VPbmU+XHJcblx0XHQ8U2VhcmNoUGFnZVR3byBkYXRhPXtpdGVtc30+PC9TZWFyY2hQYWdlVHdvPlxyXG5cdFx0ey8qIDxXb3JrcGFnZVRocmVlPjwvV29ya3BhZ2VUaHJlZT5cclxuXHRcdDxXb3JrcGFnZUZvdXI+PC9Xb3JrcGFnZUZvdXI+XHJcblx0XHQ8V29ya3BhZ2VGaXZlPjwvV29ya3BhZ2VGaXZlPiovfVxyXG5cdFx0PE1pbmlGb290ZXI+PC9NaW5pRm9vdGVyPiBcclxuXHRcdDwvPlxyXG5cdCApO1xyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFnZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hQYWdlT25lKGRhdGEpIHtcclxuXHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdEFPUy5pbml0KClcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kMVwiIGFsdD1cImhvbWVwYWdlXCI+XHJcblxyXG5cdFx0XHQ8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuXHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZy5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcblx0XHRcdDwvdmlkZW8+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eUJsdWVcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXIyXCI+XHJcblx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvemVuaXRoL2ltYWdlcy9iSU8xcjlGLnBuZ1wiIGFsdD1cIkxvZ29cIiB3aWR0aD17MjAwfSBjbGFzc05hbWU9XCJjZW50ZXJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cdFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid29ya3BhZ2VUZXh0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cIm1lZGl1bVwiPlJFU1VMVEFUIFBPVVIgXCJ7ZGF0YS5kYXRhfVwiPC9oMT5cclxuXHRcdFx0XHRcdFx0XHR7LyogPHAgY2xhc3NOYW1lPVwibGlnaHRcIj5MT0dPLiBXRUIgREVTSUdOLiBDQVRFR09SSUU8L3A+ICovfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFBhZ2VPbmU7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hQYWdlVHdvKGRhdGEpIHtcclxuXHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdGxldCBib3ggPSBbXVxyXG5cdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmRhdGEubGVuZ3RoOyBpbmRleCsrKSB7XHJcblx0bGV0IGl0ZW0gPSBudWxsO1xyXG5cdFx0aWYoZGF0YS5kYXRhW2luZGV4XVswXSA9PSBcInByb2pldFwiKXtcclxuXHRcdFx0aXRlbSA9ICg8YSBrZXk9e2luZGV4fSBocmVmPXtcIi9wcm9qZXQvXCIgKyBkYXRhLmRhdGFbaW5kZXhdLmlkfT48ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjxwIGNsYXNzTmFtZT1cInRleHREZWNvXCI+e2RhdGEuZGF0YVtpbmRleF0ubWlzc2lvbn08L3A+PGltZyBzcmM9e1wiL2ltYWdlcy9pbWFnZXByb2pldC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaGVhZGVyfSBhbHQ9XCJcIiBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCJhdXRvXCJ9fS8+PC9kaXY+PC9hPilcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRpdGVtID0gKDxhIGtleT17aW5kZXh9IGhyZWY9e1wiL2NsaWVudC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaWR9PjxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PHAgY2xhc3NOYW1lPVwidGV4dERlY29cIj57ZGF0YS5kYXRhW2luZGV4XS5taXNzaW9ufTwvcD48aW1nIHNyYz17XCIvaW1hZ2VzL2NsaWVudC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaGVhZGVyfSBhbHQ9XCJcIiBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCJhdXRvXCJ9fS8+PC9kaXY+PC9hPilcclxuXHRcdH1cclxuXHRcdGJveC5wdXNoKGl0ZW0pXHJcblx0XHRcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Plx0XHRcdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiIGFsdD1cImFjdGlvblwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHlCbHVlXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblxyXG5cclxuXHRcdFx0XHR7Ym94fVxyXG5cclxuICAgICAgICBcdFx0PC9kaXY+XHJcbiAgICAgIFx0XHQ8L2Rpdj5cclxuICAgIFx0XHQ8L2Rpdj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlVHdvOyIsImltcG9ydCBXb3JrcGFnZUNsaWVudE9uZSBmcm9tICcuL193b3JrcGFnZUNsaWVudE9uZSc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vX25hdmJhcic7XHJcbmltcG9ydCBSc0J1dHRvbiBmcm9tICcuLi9fcnNCdXR0b24nO1xyXG5pbXBvcnQgTGluZXNUb3AgZnJvbSAnLi4vX2xpbmVzVG9wJztcclxuaW1wb3J0IExpbmVzQm90dG9tIGZyb20gJy4uL19saW5lc0JvdHRvbSc7XHJcbmltcG9ydCBXb3JrcGFnZUNsaWVudFR3byBmcm9tICcuL193b3JrcGFnZUNsaWVudFR3byc7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZnVuY3Rpb24gV29ya3BhZ2VDbGllbnQoKSB7XHJcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNMb2FkZWRJbWcsIHNldElzTG9hZGVkSW1nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNMb2FkZWROZXh0UHJldiwgc2V0SXNMb2FkZWROZXh0UHJldl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzSW1nUmVhZHksIHNldEltZ1JlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtoZWFkZXIsIHNldEhlYWRlcl0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW3ByZWNpLCBzZXRQcmVjaV0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW3NlY29uZCwgc2V0U2Vjb25kXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW05leHRQcmV2LCBzZXROZXh0UHJldl0gPSB1c2VTdGF0ZShbXSk7XHJcblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuXHRcdFx0ZmV0Y2goYC9nZXR0QWxsQ2xpZW50L2Ase21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0XHQudGhlbihcclxuXHRcdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0c2V0SXRlbXMocmVzdWx0KTtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHRcdC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0XHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHR9LCBbXSlcclxuXHJcblx0aWYgKGVycm9yKSB7XHJcblx0XHQgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuXHQgIH0gZWxzZSBpZiAoIWlzTG9hZGVkICkge1xyXG5cdFx0cmV0dXJuIDxkaXY+ZGJmZ2JmZy4uLjwvZGl2PjtcclxuXHQgIH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAoICBcclxuXHRcdDw+XHJcblx0XHQ8TmF2YmFyPjwvTmF2YmFyPlxyXG5cdFx0PFJzQnV0dG9uPjwvUnNCdXR0b24+XHJcblx0XHQ8TGluZXNUb3A+PC9MaW5lc1RvcD5cclxuXHRcdDxMaW5lc0JvdHRvbT48L0xpbmVzQm90dG9tPlxyXG5cdFx0XHJcblx0XHQ8V29ya3BhZ2VDbGllbnRPbmU+PC9Xb3JrcGFnZUNsaWVudE9uZT5cclxuXHRcdDxXb3JrcGFnZUNsaWVudFR3byBkYXRhPXtpdGVtc30+PC9Xb3JrcGFnZUNsaWVudFR3bz5cclxuXHRcdHsvKiA8V29ya3BhZ2VUaHJlZT48L1dvcmtwYWdlVGhyZWU+XHJcblx0XHQ8V29ya3BhZ2VGb3VyPjwvV29ya3BhZ2VGb3VyPlxyXG5cdFx0PFdvcmtwYWdlRml2ZT48L1dvcmtwYWdlRml2ZT5cclxuXHRcdDxNaW5pRm9vdGVyPjwvTWluaUZvb3Rlcj4gKi99XHJcblx0XHQ8Lz5cclxuXHQgKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtwYWdlQ2xpZW50OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmZ1bmN0aW9uIFdvcmtwYWdlQ2xpZW50T25lKCkge1xyXG5cdEFPUy5pbml0KClcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kMVwiIGFsdD1cImhvbWVwYWdlXCI+XHJcblxyXG5cdFx0XHQ8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuXHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZy5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcblx0XHRcdDwvdmlkZW8+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eUJsdWVcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXIyXCI+XHJcblx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvemVuaXRoL2ltYWdlcy9iSU8xcjlGLnBuZ1wiIGFsdD1cIkxvZ29cIiB3aWR0aD17MjAwfSBjbGFzc05hbWU9XCJjZW50ZXJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cdFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid29ya3BhZ2VUZXh0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cIm1lZGl1bVwiPlPDiUzDiUNUSU9OIERFIFBST0pFVDwvaDE+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibGlnaHRcIj5MT0dPLiBXRUIgREVTSUdOLiBDQVRFR09SSUU8L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgV29ya3BhZ2VDbGllbnRPbmU7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5mdW5jdGlvbiBXb3JrcGFnZUNsaWVudFR3byhkYXRhKSB7XHJcblx0Y29uc29sZS5sb2coZGF0YSlcclxuXHRsZXQgYm94ID0gW11cclxuXHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5kYXRhLmxlbmd0aDsgaW5kZXgrKykge1xyXG5cdFx0aWYoKGluZGV4ICUgMyA9PSAwKSAmJiAoZGF0YS5kYXRhW2luZGV4ICsgMl0gJiYgZGF0YS5kYXRhW2luZGV4ICsgMV0gJiYgZGF0YS5kYXRhW2luZGV4XSkpe1xyXG5cdFx0XHRsZXQgaXRlbSA9ICggICAgICAgICAgXHRcdFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyNCBjZW50ZXJcIiBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdDxhIGhyZWY9e1wiL2NsaWVudC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaWR9PjxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PHAgY2xhc3NOYW1lPVwidGV4dERlY29cIj57ZGF0YS5kYXRhW2luZGV4XS5taXNzaW9ufTwvcD48aW1nIHNyYz17XCIvaW1hZ2VzL2ltYWdlY2xpZW50L1wiICsgZGF0YS5kYXRhW2luZGV4XS5oZWFkZXJ9IGFsdD1cIlwiIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcImF1dG9cIn19Lz48L2Rpdj48L2E+XHJcblx0XHRcdFx0XHQ8YSBocmVmPXtcIi9jbGllbnQvXCIgKyBkYXRhLmRhdGFbaW5kZXggKyAxXS5pZH0+PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48cCBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPntkYXRhLmRhdGFbaW5kZXggKyAxXS5taXNzaW9ufTwvcD48aW1nIHNyYz17XCIvaW1hZ2VzL2ltYWdlY2xpZW50L1wiICsgZGF0YS5kYXRhW2luZGV4ICsgMV0uaGVhZGVyfSBhbHQ9XCJcIiBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCJhdXRvXCJ9fS8+PC9kaXY+PC9hPlxyXG5cdFx0XHRcdFx0PGEgaHJlZj17XCIvY2xpZW50L1wiICsgZGF0YS5kYXRhW2luZGV4ICsgMl0uaWR9PjxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PHAgY2xhc3NOYW1lPVwidGV4dERlY29cIj57ZGF0YS5kYXRhW2luZGV4ICsgMl0ubWlzc2lvbn08L3A+PGltZyBzcmM9e1wiL2ltYWdlcy9pbWFnZWNsaWVudC9cIiArIGRhdGEuZGF0YVtpbmRleCArMl0uaGVhZGVyfSBhbHQ9XCJcIiBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCJhdXRvXCJ9fS8+PC9kaXY+PC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0ICBcdClcclxuXHRcdFx0Ym94LnB1c2goaXRlbSlcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiIGFsdD1cImFjdGlvblwiPlxyXG4gICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5Qmx1ZVwiPlxyXG4gICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHJcblxyXG5cclxuXHRcdFx0e2JveH1cclxuICAgICAgICAgIFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXI0IGNlbnRlclwiPlxyXG4gICAgICAgICAgICBcdFx0PGEgaHJlZj1cIlwiPjxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PHAgY2xhc3NOYW1lPVwibGlnaHRcIj57ZGF0YS5kYXRhWzBdLnByb2pldH08L3A+PGltZyBzcmM9e1wiL2ltYWdlcy9pbWFnZXByb2pldC9cIiArIGRhdGEuZGF0YVswXS5oZWFkZXJ9IGFsdD1cIlwiIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcImF1dG9cIn19Lz48L2Rpdj48L2E+XHJcbiAgICAgICAgICAgIFx0XHQ8YSBocmVmPVwiXCI+PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj48L2E+XHJcbiAgICAgICAgICAgIFx0XHQ8YSBocmVmPVwiXCI+PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj48L2E+XHJcbiAgICAgICAgICBcdFx0PC9kaXY+ICovfVxyXG5cdFx0XHRcdCAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5MIGNlbnRlciBsaWdodCBsZXR0ZXJTcGFjaW5nTVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlZvaXIgcGx1czwvTGluaz5cclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuICAgICAgICAgIFx0XHRcclxuXHRcdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyXCI+XHJcbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICBcdFx0PC9kaXY+ICovfVxyXG4gICAgICAgIFx0XHQ8L2Rpdj5cclxuXHJcbiAgICAgIFx0XHQ8L2Rpdj5cclxuICAgIFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgV29ya3BhZ2VDbGllbnRUd287IiwiaW1wb3J0IFdvcmtwYWdlT25lIGZyb20gXCIuL193b3JrcGFnZU9uZVwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL19uYXZiYXInO1xyXG5pbXBvcnQgUnNCdXR0b24gZnJvbSAnLi4vX3JzQnV0dG9uJztcclxuaW1wb3J0IExpbmVzVG9wIGZyb20gJy4uL19saW5lc1RvcCc7XHJcbmltcG9ydCBMaW5lc0JvdHRvbSBmcm9tICcuLi9fbGluZXNCb3R0b20nO1xyXG5pbXBvcnQgV29ya3BhZ2VUd28gZnJvbSBcIi4vX3dvcmtwYWdlVHdvXCI7XHJcbmltcG9ydCBXb3JrcGFnZVRocmVlIGZyb20gXCIuL193b3JrcGFnZVRocmVlXCI7XHJcbmltcG9ydCBXb3JrcGFnZUZvdXIgZnJvbSBcIi4vX3dvcmtwYWdlRm91clwiO1xyXG5pbXBvcnQgV29ya3BhZ2VGaXZlIGZyb20gXCIuL193b3JrcGFnZUZpdmVcIjtcclxuaW1wb3J0IE1pbmlGb290ZXIgZnJvbSBcIi4uL0hvbWVwYWdlL19taW5pRm9vdGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjsgXHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gV29ya3BhZ2UoKSB7XHJcblx0Y29uc3QgeyBuYnIgfSA9IHVzZVBhcmFtcygpO1xyXG5cdGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzQ291bnRMb2FkZWQsIHNldElzQ291bnRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0NhdExvYWRlZCwgc2V0SXNDYXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZE5leHRQcmV2LCBzZXRJc0xvYWRlZE5leHRQcmV2XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNJbWdSZWFkeSwgc2V0SW1nUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtjYXQsIHNldENhdF0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShbXSk7XHJcblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuXHRcdFx0ZmV0Y2goYC9nZXR0QWxsUHJvamVjdC8ke25icn1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdHNldEl0ZW1zKHJlc3VsdCk7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHRcdC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0XHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblxyXG5cdFx0XHRmZXRjaChgL2dldENvdW50L3Byb2pldGAse21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0XHQudGhlbihcclxuXHRcdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0c2V0Q291bnQocmVzdWx0KTtcclxuXHRcdFx0XHRzZXRJc0NvdW50TG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNDb3VudExvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0XHRmZXRjaChgL2FwaS9jYXRlZ29yaWVzYCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRzZXRDYXQocmVzdWx0KTtcclxuXHRcdFx0XHRzZXRJc0NhdExvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHRcdC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0XHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdHNldElzQ291bnRMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdH0sIFtdKVxyXG5cclxuXHRpZiAoZXJyb3IpIHtcclxuXHRcdCByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG5cdCAgfSBlbHNlIGlmICghaXNMb2FkZWQgfHwgIWlzQ291bnRMb2FkZWR8fCAhaXNDYXRMb2FkZWQpIHtcclxuXHRcdHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcblx0ICB9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gKCAgXHJcblx0XHQ8PlxyXG5cdFx0PE5hdmJhcj48L05hdmJhcj5cclxuXHRcdDxSc0J1dHRvbj48L1JzQnV0dG9uPlxyXG5cdFx0PExpbmVzVG9wPjwvTGluZXNUb3A+XHJcblx0XHQ8TGluZXNCb3R0b20+PC9MaW5lc0JvdHRvbT5cclxuXHRcdFxyXG5cdFx0PFdvcmtwYWdlT25lIGNhdD17Y2F0fT48L1dvcmtwYWdlT25lPlxyXG5cdFx0PFdvcmtwYWdlVHdvIGRhdGE9e2l0ZW1zfSBwYWdlPXtuYnJ9IGNvdW50PXtjb3VudH0+PC9Xb3JrcGFnZVR3bz5cclxuXHRcdHsvKiA8V29ya3BhZ2VUaHJlZT48L1dvcmtwYWdlVGhyZWU+XHJcblx0XHQ8V29ya3BhZ2VGb3VyPjwvV29ya3BhZ2VGb3VyPlxyXG5cdFx0PFdvcmtwYWdlRml2ZT48L1dvcmtwYWdlRml2ZT5cclxuXHRcdDxNaW5pRm9vdGVyPjwvTWluaUZvb3Rlcj4gKi99XHJcblx0XHQ8Lz5cclxuXHQgKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtwYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIFdvcmtwYWdlRml2ZSgpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiXCIgYWx0PVwiYWN0aW9uXCI+XHJcbiAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHlCbHVlXCI+XHJcbiAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyXCI+XHJcbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICBcdFx0PC9kaXY+XHJcbiAgICAgICAgICBcdFx0XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyXCI+XHJcbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICBcdFx0PC9kaXY+XHJcbiAgICAgICAgXHRcdDwvZGl2PlxyXG5cclxuICAgICAgXHRcdDwvZGl2PlxyXG4gICAgXHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBXb3JrcGFnZUZpdmU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gV29ya3BhZ2VGb3VyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJcIiBhbHQ9XCJhY3Rpb25cIj5cclxuICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eUJsdWVcIj5cclxuICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cclxuICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgIFx0XHQ8L2Rpdj5cclxuICAgICAgICAgIFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cclxuICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgIFx0XHQ8L2Rpdj5cclxuICAgICAgICBcdFx0PC9kaXY+XHJcblxyXG4gICAgICBcdFx0PC9kaXY+XHJcbiAgICBcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtwYWdlRm91cjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQU9TIGZyb20gXCJhb3NcIjtcclxuaW1wb3J0IFwiYW9zL2Rpc3QvYW9zLmNzc1wiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTWVudSwgTWVudUl0ZW0sIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgQXJyb3dGb3J3YXJkSW9zU2hhcnBJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkSW9zU2hhcnAnO1xyXG5pbXBvcnQgTXVpQWNjb3JkaW9uLCB7IEFjY29yZGlvblByb3BzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9BY2NvcmRpb24nO1xyXG5pbXBvcnQgTXVpQWNjb3JkaW9uU3VtbWFyeSwge1xyXG4gIEFjY29yZGlvblN1bW1hcnlQcm9wcyxcclxufSBmcm9tICdAbXVpL21hdGVyaWFsL0FjY29yZGlvblN1bW1hcnknO1xyXG5pbXBvcnQgTXVpQWNjb3JkaW9uRGV0YWlscyBmcm9tICdAbXVpL21hdGVyaWFsL0FjY29yZGlvbkRldGFpbHMnO1xyXG5jb25zdCBBY2NvcmRpb24gPSBzdHlsZWQoKHByb3BzKSA9PiAoXHJcbiAgPE11aUFjY29yZGlvbiBkaXNhYmxlR3V0dGVycyBlbGV2YXRpb249ezB9IHNxdWFyZSB7Li4ucHJvcHN9IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgbWF4V2lkdGg6IFwiMTg1cHhcIixcclxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwwKVwiLFxyXG4gIGNvbG9yOiBcIndoaXRlXCIsXHJcbn0pKTtcclxuXHJcbmNvbnN0IEFjY29yZGlvblN1bW1hcnkgPSBzdHlsZWQoKHByb3BzKSA9PiAoXHJcbiAgPE11aUFjY29yZGlvblN1bW1hcnlcclxuICAgIGV4cGFuZEljb249ezxBcnJvd0ZvcndhcmRJb3NTaGFycEljb24gc3g9e3sgZm9udFNpemU6IFwiMC45cmVtXCIgfX0gLz59XHJcblx0ey4uLnByb3BzfVxyXG4gIC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgY29sb3I6IFwid2hpdGVcIixcclxuICBiYWNrZ3JvdW5kQ29sb3I6XHJcbiAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwiZGFybFwiXHJcbiAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIC4wNSlcIlxyXG4gICAgICA6IFwicmdiYSgwLCAwLCAwLCAuMDMpXCIsXHJcbiAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICBcIiYgLk11aUFjY29yZGlvblN1bW1hcnktZXhwYW5kSWNvbldyYXBwZXIuTXVpLWV4cGFuZGVkXCI6IHtcclxuICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoOTBkZWcpXCIsXHJcbiAgfSxcclxuICBcIiYgLk11aUFjY29yZGlvblN1bW1hcnktY29udGVudFwiOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEFjY29yZGlvbkRldGFpbHMgPSBzdHlsZWQoTXVpQWNjb3JkaW9uRGV0YWlscykoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIHBhZGRpbmdUb3A6IDAsXHJcbiAgbWFyZ2luVG9wOiAwLFxyXG4gIG1heEhlaWdodDogXCIxNTBweFwiLFxyXG4gIG92ZXJmbG93OiBcInNjcm9sbFwiLFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBXb3JrcGFnZU9uZShjYXQpIHtcclxuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IFJlYWN0LnVzZVN0YXRlKFwicGFuZWwxXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAocGFuZWwpID0+IChldmVudCwgbmV3RXhwYW5kZWQpID0+IHtcclxuICAgIHNldEV4cGFuZGVkKG5ld0V4cGFuZGVkID8gcGFuZWwgOiBmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3dvcmRzLCBzZXRXb3Jkc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgbGV0IGNhdGVnb3J5ID0gY2F0LmNhdDtcclxuICBsZXQgbWVudSA9IFtdO1xyXG4gIGxldCByYW5kb21Xb3JkID0gW1xyXG4gICAgXCJSw4lBQ1RJVklUw4lcIixcclxuICAgIFwiUFJPWElNSVTDiVwiLFxyXG4gICAgXCJQQVNTSU9OXCIsXHJcbiAgICBcIlNUUkFUw4lHSUVcIixcclxuICAgIFwiRVZFTlRcIixcclxuICAgIFwiQ09OU0VJTFwiLFxyXG4gICAgXCJDT01NVU5JQ0FUSU9OXCIsXHJcbiAgICBcIlLDilZFUlwiLFxyXG4gICAgXCJBTUJJVElPTlwiLFxyXG4gICAgXCJJTUFHSU5BVElPTlwiLFxyXG4gICAgXCJhZ2lyXCIsXHJcbiAgICBcInMnYWRhcHRlclwiLFxyXG4gICAgXCJhbnRpY2lwZXJcIixcclxuICAgIFwiYXV0b25vbWllXCIsXHJcbiAgICBcImNyb2lzc2FuY2VcIixcclxuICAgIFwiZMOpZmlcIixcclxuICAgIFwicGxhbmlmaWVyXCIsXHJcbiAgICBcInBvc2l0aXZlclwiLFxyXG4gICAgXCJkaXNwb25pYmlsaXTDqVwiLFxyXG4gICAgXCJkeW5hbWlzbWVcIixcclxuICAgIFwiw6ljb3V0ZVwiLFxyXG4gICAgXCJzZXJ2aWNlXCIsXHJcbiAgICBcInByw6l2aXNpb25cIixcclxuICAgIFwidMOpbmFjaXTDqVwiLFxyXG4gICAgXCJxdWFsaXTDqVwiLFxyXG4gICAgXCJtb2JpbGlzZXJcIixcclxuICAgIFwibsOpZ29jaWVyXCIsXHJcbiAgICBcIm9iamVjdGlmc1wiLFxyXG4gICAgXCJvcHRpbWlzZXJcIixcclxuICAgIFwiY2hhbGxlbmdlXCIsXHJcbiAgICBcInLDqXVzc2lyXCIsXHJcbiAgICBcImV4Y2VsbGVuY2VcIixcclxuICAgIFwicsOpYWxpc2VyXCIsXHJcbiAgICBcInLDqXN1bHRhdHNcIixcclxuICAgIFwiZMOpdmVsb3BwZXJcIixcclxuICAgIFwic2F2b2lyZmFpcmVcIixcclxuICAgIFwiZGlhbG9ndWVcIixcclxuICAgIFwicHLDqXZvaXJcIixcclxuICAgIFwic3luZXJnaWVcIixcclxuICAgIFwicHJvamV0XCIsXHJcbiAgICBcImlubm92YXRpb25cIixcclxuICAgIFwibW90aXZhdGlvblwiXTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIGdldFdvcmQoKSB7XHJcbiAgICAgIGxldCB3b3JkID0gcmFuZG9tV29yZFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5kb21Xb3JkLmxlbmd0aCldO1xyXG4gICAgICByYW5kb21Xb3JkLnNwbGljZShyYW5kb21Xb3JkLmluZGV4T2Yod29yZCkpO1xyXG4gICAgICByZXR1cm4gd29yZDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgd29yZDEgPSBnZXRXb3JkKCk7XHJcbiAgICBsZXQgd29yZDIgPSBnZXRXb3JkKCk7XHJcbiAgICBzZXRXb3Jkcyhbd29yZDEsIHdvcmQyXSk7XHJcbiAgfSwgW10pO1xyXG4gIEFPUy5pbml0KCk7XHJcbiAgY2F0ZWdvcnkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgbGV0IGl0ZW0gPSAoXHJcblx0XHQ8YSBzdHlsZT17e3RleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwid2hpdGVcIn19IGhyZWY9e2Avc2VhcmNoY2F0LyR7ZWxlbWVudC5pZH0vJHtlbGVtZW50LmNhdGVnb3JpZX1gfT5cclxuXHRcdFx0PHBcclxuXHRcdFx0a2V5PXtlbGVtZW50LmlkfVxyXG5cdFx0XHRzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIix0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCJ9fVxyXG5cdFx0XHRjbGFzc05hbWU9XCJsaWdodFwiXHJcblx0XHQ+XHJcblx0XHRcdHtlbGVtZW50LmNhdGVnb3JpZX1cclxuXHRcdDwvcD5cclxuXHQgIDwvYT5cclxuXHJcbiAgICApO1xyXG4gICAgbWVudS5wdXNoKGl0ZW0pO1xyXG4gIH0pO1xyXG4gIGlmICh3b3Jkcy5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZDFcIiBhbHQ9XCJob21lcGFnZVwiPlxyXG4gICAgICAgICAgPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcbiAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuICAgICAgICAgIDwvdmlkZW8+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5Qmx1ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXIyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvemVuaXRoL2ltYWdlcy9iSU8xcjlGLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ya3BhZ2VUZXh0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZWRpdW1cIj5Tw4lMw4lDVElPTiBERSBQUk9KRVQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiwgbWFyZ2luUmlnaHQ6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiIH19IGNsYXNzTmFtZT1cImxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7d29yZHNbMF19IC4ge3dvcmRzWzFdfSAue1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKFwicGFuZWwxXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJwYW5lbDFkLWNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhbmVsMWQtaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjVweFwiIH19PkNBVMOJR09SSUU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz57bWVudX08L0FjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtwYWdlT25lO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBXb3JrcGFnZVRocmVlKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJcIiBhbHQ9XCJhY3Rpb25cIj5cclxuICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eUJsdWVcIj5cclxuICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cclxuICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgIFx0XHQ8L2Rpdj5cclxuICAgICAgICAgIFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cclxuICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgIFx0XHQ8L2Rpdj5cclxuICAgICAgICBcdFx0PC9kaXY+XHJcblxyXG4gICAgICBcdFx0PC9kaXY+XHJcbiAgICBcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtwYWdlVGhyZWU7IiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tIFwicmVhY3QtcGFyYWxsYXhcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ3JjLXBhZ2luYXRpb24nO1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlc2hlZXRzL2J1bG1hL2dyaWQvY29sdW1ucy5zYXNzJztcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXNoZWV0cy9idWxtYS9oZWxwZXJzL3NwYWNpbmcuc2Fzcyc7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzaGVldHMvcGFnaW5hdGlvbi5sZXNzJyBcclxuXHJcblxyXG5mdW5jdGlvbiBXb3JrcGFnZVR3byh7ZGF0YSwgcGFnZSwgY291bnR9KSB7XHJcbiAgY29uc29sZS5sb2coY291bnQpXHJcbiAgbGV0IHBhZ2VOYnIgPSBNYXRoLmNlaWwoY291bnQgLyAyMClcclxuICBsZXQgbmJyID0gcGFyc2VJbnQocGFnZSlcclxuICBmdW5jdGlvbiBvbkNoYW5nZShwYXJhbXMpIHtcclxuICAgIGRvY3VtZW50LmxvY2F0aW9uID0gYC9wcm9qZXRzLyR7cGFyYW1zfWBcclxuICB9XHJcblxyXG4gIGxldCBib3ggPSBbXTtcclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgbGV0IGl0ZW0gPSAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjb2x1bW4gY29sdW1ucyBpcy1vbmUtZmlmdGggaXMtY2VudGVyZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXMtaGFsZlwiPlxyXG4gICAgICAgICAgPGEgaHJlZj17XCIvcHJvamV0L1wiICsgZGF0YVtpbmRleF0uaWR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPlxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIgfX0gY2xhc3NOYW1lPVwidGV4dERlY29cIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhW2luZGV4XS5wcm9qZXR9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL2ltYWdlcHJvamV0L1wiICsgZGF0YVtpbmRleF0uaGVhZGVyfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgICBib3gucHVzaChpdGVtKTtcclxuICAgIH1cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL3plbml0aC9pbWFnZXMvWjF6SUpDS2suanBlZ1wiIGJsdXI9e3sgbWluOiAtMSwgbWF4OiAzIH19IHN0cmVuZ3RoPXs0MDB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTZcIiBhbHQ9XCJhY3Rpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTZcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tdWx0aWxpbmUgaXMtY2VudGVyZWRcIj5cclxuICAgICAgICAgICAgICB7Ym94fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW1vYmlsZSBpcy1jZW50ZXJlZFwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjE1MHB4XCJ9fT4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgY3VycmVudD17bmJyfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgcGFnZVNpemU9ezF9XHJcbiAgICAgICAgICAgICAgICB0b3RhbD17cGFnZU5icn1cclxuICAgICAgICAgICAgICAgIHNob3dUaXRsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuTCBjZW50ZXIgbGlnaHQgbGV0dGVyU3BhY2luZ01cIj5cclxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9jb250YWN0XCIgY2xhc3NOYW1lPVwidGV4dERlY29cIj5cclxuICAgICAgICAgICAgICAgIFZvaXIgcGx1c1xyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9QYXJhbGxheD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtwYWdlVHdvO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgTGluaywgRGlyZWN0TGluaywgRWxlbWVudCwgRXZlbnRzLCBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCwgc2Nyb2xsU3B5LCBzY3JvbGxlciB9IGZyb20gJ3JlYWN0LXNjcm9sbCdcclxuXHJcbi8vaW1wb3J0IHNjcm9sbEludG9WaWV3IGZyb20gJ3Njcm9sbC1pbnRvLXZpZXctaWYtbmVlZGVkJ1xyXG5pbXBvcnQgSG9tZXBhZ2UgZnJvbSAnLi9Ib21lcGFnZS9faG9tZXBhZ2UnO1xyXG5pbXBvcnQgV29yZHBhZ2UgZnJvbSAnLi9Ib21lcGFnZS9fd29yZCc7XHJcbmltcG9ydCBFbW90aW9uIGZyb20gJy4vSG9tZXBhZ2UvX2Vtb3Rpb24nO1xyXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vSG9tZXBhZ2UvX2FjdGlvbic7XHJcbmltcG9ydCBDcmVhdGlvbiBmcm9tICcuL0hvbWVwYWdlL19jcmVhdGlvbic7XHJcbmltcG9ydCBTYXRpc2ZhY3Rpb24gZnJvbSAnLi9Ib21lcGFnZS9fc2F0aXNmYWN0aW9uJztcclxuaW1wb3J0IENoaWZmcmVzIGZyb20gJy4vSG9tZXBhZ2UvX2NoaWZmcmVzJztcclxuaW1wb3J0IFZpc2lvbiBmcm9tICcuL0hvbWVwYWdlL192aXNpb24nO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vSG9tZXBhZ2UvX2Zvb3Rlcic7XHJcbmltcG9ydCBJbnN0YWZsdXggZnJvbSAnLi9Ib21lcGFnZS9faW5zdGEnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vX25hdmJhcic7XHJcbmltcG9ydCBSc0J1dHRvbiBmcm9tICcuL19yc0J1dHRvbic7XHJcbmltcG9ydCBMaW5lc1RvcCBmcm9tICcuL19saW5lc1RvcCc7XHJcbmltcG9ydCBMaW5lc0JvdHRvbSBmcm9tICcuL19saW5lc0JvdHRvbSc7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcblx0Y29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2luc3RhLCBzZXRJbnN0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGZldGNoKGAvZ2V0dEFsbENyZWF0aW9uYCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0LnRoZW4oXHJcblx0XHQgIChyZXN1bHQpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdFx0c2V0SXRlbXMocmVzdWx0KVxyXG5cdFx0ICB9LFxyXG5cdFx0ICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdCAgLy8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHQgIC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0ICAoZXJyb3IpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXHJcblx0XHQgIH1cclxuXHRcdClcclxuXHJcblx0XHQvLyBmZXRjaChgaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9hZ2VuY2V6ZW5pdGgvP19fYT0xP19fYT0xJl9fZD1kaXNgLHttZXRob2Q6J0dFVCcsfSlcclxuXHRcdC8vIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0Ly8gLnRoZW4oKHJlc3VsdEluc3RhKSA9PiB7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKFwidG90b1wiKVxyXG5cdFx0Ly8gXHRjb25zb2xlLmxvZyhyZXN1bHRJbnN0YSlcclxuXHRcdC8vICAgfSxcclxuXHRcdC8vICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHQvLyAgIC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0Ly8gICAvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdC8vICAgKGVycm9yKSA9PiB7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdFx0Ly8gICB9XHJcblx0XHQvLyApXHJcblx0ICB9LCBbXSlcclxuXHJcblx0Ly8gbGV0IHN0ZXAgPSAxXHJcblxyXG5cdC8vIEFPUy5pbml0KClcclxuXHQvLyBsZXQgc2Nyb2xsID0gZmFsc2VcclxuXHQvLyBpZihzdGVwID09IDQpe1xyXG5cdC8vIFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhdGNobmF6ZScpLnN0eWxlLnBhZGRpbmdUb3AgPSAnMHB4J1xyXG5cdC8vIH1cclxuXHJcblx0Ly8gIHZhciBsYXN0U2Nyb2xsVG9wID0gMDtcclxuXHJcblx0Ly8gLy8gZWxlbWVudCBzaG91bGQgYmUgcmVwbGFjZWQgd2l0aCB0aGUgYWN0dWFsIHRhcmdldCBlbGVtZW50IG9uIHdoaWNoIHlvdSBoYXZlIGFwcGxpZWQgc2Nyb2xsLCB1c2Ugd2luZG93IGluIGNhc2Ugb2Ygbm8gdGFyZ2V0IGVsZW1lbnQuXHJcblx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24oKXsgLy8gb3Igd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIi4uLi5cclxuXHQvLyB2YXIgc3QgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDsgLy8gQ3JlZGl0czogXCJodHRwczovL2dpdGh1Yi5jb20vcWVyZW15L3NvL2Jsb2IvbWFzdGVyL3NvLmRvbS5qcyNMNDI2XCJcclxuXHQvLyBpZiAoc3QgPiBsYXN0U2Nyb2xsVG9wICYmIHNjcm9sbCA9PSBmYWxzZSAmJiBzdGVwIDwgOSl7XHJcblx0Ly8gXHRjb25zb2xlLmxvZyhzdGVwICsgXCIgZG93blwiKVxyXG5cdFx0XHJcblxyXG5cdC8vIFx0IHN0ZXArK1xyXG5cdC8vIFx0c2Nyb2xsZXIuc2Nyb2xsVG8oYHNjcm9sbC10by1lbGVtZW50JHtzdGVwfWAsIHtcclxuXHQvLyBcdFx0ZHVyYXRpb246IDgwMCxcclxuXHQvLyBcdFx0ZGVsYXk6IDAsXHJcblx0Ly8gXHRcdHNtb290aDogJ2Vhc2VJbk91dFF1YXJ0J1xyXG5cdC8vIFx0ICB9KSBcclxuXHRcdCAgXHJcblx0Ly8gXHQgc2Nyb2xsID0gdHJ1ZVxyXG5cdC8vIFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0Ly8gXHRcdHNjcm9sbCA9IGZhbHNlXHJcblx0Ly8gXHR9LCAxMDAwKTtcclxuXHQvLyB9IGVsc2UgaWYoc3QgPCBsYXN0U2Nyb2xsVG9wICYmIHNjcm9sbCA9PSBmYWxzZSAmJiBzdGVwID4gMSl7XHJcblxyXG5cdC8vIFx0c3RlcC0tXHJcblx0Ly8gXHRzY3JvbGxlci5zY3JvbGxUbyhgc2Nyb2xsLXRvLWVsZW1lbnQke3N0ZXB9YCwge1xyXG5cdC8vIFx0XHRkdXJhdGlvbjogODAwLFxyXG5cdC8vIFx0XHRkZWxheTogMCxcclxuXHQvLyBcdFx0c21vb3RoOiAnZWFzZUluT3V0UXVhcnQnXHJcblx0Ly8gXHR9KVxyXG5cdFx0ICBcclxuXHQvLyBcdCBjb25zb2xlLmxvZyhzdGVwICsgXCIgdXBcIilcclxuXHRcdCBcclxuXHQvLyBcdCBzY3JvbGwgPSB0cnVlXHJcblx0Ly8gXHQgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0Ly8gXHRcdHNjcm9sbCA9IGZhbHNlXHJcblx0Ly8gXHQgfSwgMTAwMCk7XHJcblx0Ly8gfVxyXG5cdC8vIGxhc3RTY3JvbGxUb3AgPSBzdCA8PSAwID8gMCA6IHN0OyAvLyBGb3IgTW9iaWxlIG9yIG5lZ2F0aXZlIHNjcm9sbGluZ1xyXG5cdC8vIH0sIGZhbHNlKTtcclxuXHJcblx0aWYoaXRlbXMpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0PE5hdmJhcj48L05hdmJhcj5cclxuXHRcdFx0PExpbmVzVG9wPjwvTGluZXNUb3A+XHJcblx0XHRcdDxMaW5lc0JvdHRvbT48L0xpbmVzQm90dG9tPlxyXG5cdFx0XHQ8UnNCdXR0b24+PC9Sc0J1dHRvbj5cclxuXHRcdFx0XHJcblxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDFcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+XHRcdFx0XHJcblxyXG5cdFx0XHRcdFx0PEhvbWVwYWdlID48L0hvbWVwYWdlPlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0PC9FbGVtZW50Plx0XHJcblxyXG5cdFx0XHRcdHsvKiA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsIGhlaWdodDpcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIn19PjwvZGl2PiAqL31cclxuXHRcdFx0XHQ8V29yZHBhZ2UgPjwvV29yZHBhZ2U+XHJcblx0XHRcdFx0ey8qIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwifX0+PC9kaXY+ICovfVxyXG5cclxuXHJcblxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDNcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+XHJcblxyXG5cdFx0XHRcdFx0PEVtb3Rpb24gPjwvRW1vdGlvbj5cclxuXHJcblx0XHRcdFx0PC9FbGVtZW50PlxyXG5cclxuXHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50NFwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj5cclxuXHRcdFx0XHRcdDxBY3Rpb24gPjwvQWN0aW9uPlxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50NVwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj5cclxuXHJcblx0XHRcdFx0XHQ8Q3JlYXRpb24gaXRlbT17aXRlbXN9PjwvQ3JlYXRpb24+XHJcblxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50NlwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj5cclxuXHJcblx0XHRcdFx0XHQ8U2F0aXNmYWN0aW9uID48L1NhdGlzZmFjdGlvbj5cclxuXHJcblx0XHRcdFx0PC9FbGVtZW50PlxyXG5cclxuXHRcdFx0XHQ8RWxlbWVudCBuYW1lPVwic2Nyb2xsLXRvLWVsZW1lbnQ3XCIgY2xhc3NOYW1lPVwiZWxlbWVudFwiPlxyXG5cclxuXHRcdFx0XHRcdFx0PENoaWZmcmVzID48L0NoaWZmcmVzPlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHQ8L0VsZW1lbnQ+XHJcblxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDhcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+XHJcblxyXG5cdFx0XHRcdFx0PFZpc2lvbiA+PC9WaXNpb24+XHJcblxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50OFwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj5cclxuXHJcblx0XHRcdFx0XHRcdDxJbnN0YWZsdXggPjwvSW5zdGFmbHV4PlxyXG5cclxuXHRcdFx0XHQ8L0VsZW1lbnQ+XHJcblxyXG5cclxuXHJcblx0XHRcdFx0PEZvb3RlciA+PC9Gb290ZXI+XHJcblxyXG5cclxuXHRcdFx0ey8qIDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDEwXCIgY2xhc3NOYW1lPVwiZWxlbWVudFwiPjwvRWxlbWVudD4gKi99XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcdFx0XHJcblx0fVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJmdW5jdGlvbiBMaW5lc0JvdHRvbSgpIHtcclxuXHRyZXR1cm4gKCBcclxuXHRcdDw+XHJcblxyXG5cdDxkaXYgY2xhc3NOYW1lPVwibGluZUJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEyMDBcIj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibGluZTRcIj48L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibGluZTUgbGluZUFuaW1lMlwiPjwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cdFx0PC8+XHJcblx0ICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmVzQm90dG9tOyIsImZ1bmN0aW9uIExpbmVzVG9wKCkge1xyXG5cdGxldCBhdWRpbyA9IG5ldyBBdWRpbyhcIi96ZW5pdGgvYXV0cmUvSG9yaXpvbi5tcDNcIilcclxuXHJcblx0Y29uc3Qgc3RhcnQgPSAoKSA9PiB7XHJcblx0ICBhdWRpby5wbGF5KClcclxuXHR9XHJcblx0cmV0dXJuICggXHJcblx0XHQ8PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmVBXCIgIGRhdGEtYW9zPVwiZmFkZS1kb3duXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaW5lMlwib25DbGljaz17c3RhcnR9PjwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGluZTMgbGluZUFuaW1lXCIgPjwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvPlxyXG5cdCApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5lc1RvcDsiLCJpbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIG5hdmJhcigpIHtcclxuXHJcbiAgQU9TLmluaXQoKVxyXG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFNlYXJjaElucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IHRlbGVwb3J0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxvY2F0aW9uLnJlcGxhY2UoJy9zZWFyY2gvJyArIHNlYXJjaElucHV0KTtcclxuICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9zZWFyY2gvXCIrc2VhcmNoSW5wdXRcclxuICB9XHJcbiAgXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblxyXG4gICAgPGlucHV0IGlkPVwibWVudV9fdG9nZ2xlXCIgdHlwZT1cImNoZWNrYm94XCIgIC8+XHJcblxyXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWVudV9fYnRuXCIgaHRtbEZvcj1cIm1lbnVfX3RvZ2dsZVwiIGRhdGEtYW9zPVwiZmFkZS1kb3duXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMjAwXCI+XHJcbiAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgXHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51X19ib3hcIiBkYXRhLWFvcz1cImZhZGUtcmlnaHRcIj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGVsZXBvcnR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX19ncm91cCBmaWVsZCBkaXZDMSBtZW51X19pdGVtMVwiID5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJpbnB1dFwiIHNpemU9XCIxNVwiIGNsYXNzTmFtZT1cImZvcm1fX2ZpZWxkXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgaWQ9XCJlbWFpbFwiIHZhbHVlPXtzZWFyY2hJbnB1dH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcmVxdWlyZWQ+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxcIj5SZWNoZXJjaGU8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lbnVfX2l0ZW0gbGlnaHQgbGV0dGVyU3BhY2luZ1NcIj48TGluayBjbGFzc05hbWU9XCJ0ZXh0RGVjbyBtYXJnaW5TdG9wXCIgdG89XCIvXCI+QUNDVUVJTDwvTGluaz48L2g1PlxyXG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZW51X19pdGVtIGxpZ2h0IGxldHRlclNwYWNpbmdTXCI+PExpbmsgY2xhc3NOYW1lPVwidGV4dERlY29cIiB0bz1cIi9jbGllbnRzXCI+Q0xJRU5UUzwvTGluaz48L2g1PlxyXG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZW51X19pdGVtIGxpZ2h0IGxldHRlclNwYWNpbmdTXCI+PExpbmsgY2xhc3NOYW1lPVwidGV4dERlY29cIiB0bz1cIi9wcm9qZXRzLzFcIj5QUk9KRVRTPC9MaW5rPjwvaDU+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lbnVfX2l0ZW0gbGlnaHQgbGV0dGVyU3BhY2luZ1NcIj48TGluayBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiIHRvPVwiL2NvbnRhY3RcIj5DT05UQUNUPC9MaW5rPjwvaDU+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dERlY28gbGV0dGVyU3BhY2luZ1NcIiBocmVmPVwiL2xvZ2luXCI+PGg1IGNsYXNzTmFtZT1cIm1lbnVfX2l0ZW0gdGV4dERlY28gbGlnaHRcIj5BRE1JTjwvaDU+PC9hPlxyXG4gICAgICA8L3VsPlxyXG5cdFx0PC8+XHJcblx0ICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuYXZiYXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7IFxyXG5cclxuZnVuY3Rpb24gUnNCdXR0b24oKSB7XHJcblx0QU9TLmluaXQoe29uY2U6IHRydWUsfSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJzIGFvcy1pdGVtIG92ZXJmbG93SGlkZGVuXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMjAwXCI+XHJcblx0XHRcdDxhIGNsYXNzTmFtZT1cImZiXCIgaHJlZj0naHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0FHRU5DRVpFTklUSC8nPjwvYT5cclxuXHRcdFx0PGEgY2xhc3NOYW1lPVwiaW5zdGFcIiBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2FnZW5jZXplbml0aC8/aGw9ZnInPjwvYT5cclxuXHRcdFx0PGEgY2xhc3NOYW1lPVwibGlua2VkaW5cIiBocmVmPSdodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9hZ2VuY2UtemVuaXRoLyc+PC9hPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8Lz4gXHJcblx0XHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSc0J1dHRvbjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJCcm93c2VyUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJ1c2VMb2NhdGlvbiIsIkhvbWUiLCJXb3JrcGFnZSIsIldvcmtwYWdlQ2xpZW50IiwiQ29udGFjdFBhZ2UiLCJDbGllbnRQYWdlIiwidXNlTGF5b3V0RWZmZWN0IiwiUHJvamVjdHBhZ2UiLCJTZWFyY2hQYWdlIiwiU2VhcmNoUGFnZTIiLCJNYWluIiwiV3JhcHBlciIsImNoaWxkcmVuIiwibG9jYXRpb24iLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvIiwicGF0aG5hbWUiLCJ3aW5kb3ciLCJjcmVhdGVSb290IiwiY29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwiTmF2YmFyIiwiQ2xpZW50UGFnZU9uZSIsIkNsaWVudHBhZ2VUd28iLCJDbGllbnRwYWdlVGhyZWUiLCJDbGllbnRwYWdlRm91ciIsIkNsaWVudHBhZ2VGaXZlIiwiQ2xpZW50cGFnZVNpeCIsInVzZVBhcmFtcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2xpZW50cGFnZSIsImlkIiwiZXJyb3IiLCJzZXRFcnJvciIsImlzTG9hZGVkIiwic2V0SXNMb2FkZWQiLCJpc0xvYWRlZEltZyIsInNldElzTG9hZGVkSW1nIiwiaXNMb2FkZWROZXh0UHJldiIsInNldElzTG9hZGVkTmV4dFByZXYiLCJpc0ltZ1JlYWR5Iiwic2V0SW1nUmVhZHkiLCJpdGVtcyIsInNldEl0ZW1zIiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwiaGVhZGVyIiwic2V0SGVhZGVyIiwicHJlY2kiLCJzZXRQcmVjaSIsInNlY29uZCIsInNldFNlY29uZCIsImRpc3BsYXkiLCJzZXREaXNwbGF5IiwiTmV4dFByZXYiLCJzZXROZXh0UHJldiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInRoaXNSZXMiLCJKU09OIiwicGFyc2UiLCJpIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImZvY3VzIiwic2Vjb25kYWlyZSIsIk5leHQiLCJQcmV2IiwibWVzc2FnZSIsIkFPUyIsIkxpbmsiLCJpbml0IiwiYmFja2dyb3VuZEltYWdlIiwiZGF0YTIiLCJlbGVtZW50cHJlY2lzaW9uIiwidGV4dFRyYW5zZm9ybSIsIl9faHRtbCIsIm9iamVjdEZpdCIsImltYWdlIiwiQ2xpZW50cGFnZU9uZSIsImRhdGEiLCJtaXNzaW9uIiwibnAiLCJ0ZW1vaWduYWdlIiwiaHJlZiIsIm5vbUNsaWVudCIsImVuamV1IiwiaGlzdG9pcmUiLCJyZXBvbnNlIiwiUnNCdXR0b24iLCJMaW5lc1RvcCIsIkxpbmVzQm90dG9tIiwiQ29udGFjdFBhZ2VPbmUiLCJlbWFpbCIsIm5hbWUiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwicGVyc2lzdCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVxdWVzdE9wdGlvbnMiLCJib2R5Iiwic3RyaW5naWZ5IiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJFbGVtZW50IiwiUGFyYWxsYXgiLCJBY3Rpb24iLCJtaW4iLCJtYXgiLCJwYWRkaW5nVG9wIiwiYmFja2dyb3VuZFNpemUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tkcm9wRmlsdGVyIiwiQ2hpZmZyZXMiLCJDcmVhdGlvbiIsIml0ZW0iLCJzbGlkZXIiLCJmb3JFYWNoIiwiZWxlbWVudCIsIm5ld1NsaWRlciIsIlJlbW92ZUJsdXJEZXRhaWwiLCJCbHVyRGV0YWlsIiwicG9zaXRpb24iLCJwb2ludGVyRXZlbnRzIiwidGV4dEFsaWduIiwibGVmdCIsInRvcCIsImNyZWF0aW9uIiwicHVzaCIsInN0eWxlIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIkVtb3Rpb24iLCJGb290ZXIiLCJoYW5kbGVFbWFpbElucHV0Q2hhbmdlIiwicmVzcG9uc2UiLCJIb21lcGFnZSIsInVzZVJlZiIsIkluc3RhZmx1eCIsImluc3RhIiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImFzeW5jIiwiYXBwZW5kQ2hpbGQiLCJyZWFkeVN0YXRlIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiTWluaUZvb3RlciIsIlNhdGlzZmFjdGlvbiIsIlZpc2lvbiIsIk1hcnF1ZWUiLCJXb3JkcGFnZSIsIm92ZXJmbG93IiwiYWxpZ25JdGVtcyIsIlByb2plY3RQYWdlT25lIiwiUHJvamVjdHBhZ2VUd28iLCJQcm9qZWN0cGFnZVRocmVlIiwiUHJvamVjdHBhZ2VGb3VyIiwiUHJvamVjdHBhZ2VGaXZlIiwiUHJvamVjdHBhZ2VTaXgiLCJyZXN1bHRpbWciLCJQcm9qZWN0cGFnZU9uZSIsInByb2pldCIsInNlY3RldXIiLCJjbGllbnQiLCJkdXJlZSIsImNhdGVnb3JpZSIsImRlbWFuZGUiLCJkZWZpIiwiYWN0aW9uIiwiU2VhcmNoUGFnZU9uZTIiLCJTZWFyY2hQYWdlVHdvMiIsImluZm8iLCJib3giLCJpbmRleCIsIm1heFdpZHRoIiwiU2VhcmNoUGFnZU9uZSIsIlNlYXJjaFBhZ2VUd28iLCJXb3JrcGFnZUNsaWVudE9uZSIsIldvcmtwYWdlQ2xpZW50VHdvIiwiV29ya3BhZ2VPbmUiLCJXb3JrcGFnZVR3byIsIldvcmtwYWdlVGhyZWUiLCJXb3JrcGFnZUZvdXIiLCJXb3JrcGFnZUZpdmUiLCJuYnIiLCJpc0NvdW50TG9hZGVkIiwic2V0SXNDb3VudExvYWRlZCIsImlzQ2F0TG9hZGVkIiwic2V0SXNDYXRMb2FkZWQiLCJjYXQiLCJzZXRDYXQiLCJjb3VudCIsInNldENvdW50Iiwic3R5bGVkIiwiQnV0dG9uIiwiTWVudSIsIk1lbnVJdGVtIiwiVHlwb2dyYXBoeSIsIkFycm93Rm9yd2FyZElvc1NoYXJwSWNvbiIsIk11aUFjY29yZGlvbiIsIkFjY29yZGlvblByb3BzIiwiTXVpQWNjb3JkaW9uU3VtbWFyeSIsIkFjY29yZGlvblN1bW1hcnlQcm9wcyIsIk11aUFjY29yZGlvbkRldGFpbHMiLCJBY2NvcmRpb24iLCJwcm9wcyIsInRoZW1lIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJBY2NvcmRpb25TdW1tYXJ5IiwiZm9udFNpemUiLCJwYWxldHRlIiwibW9kZSIsImZsZXhEaXJlY3Rpb24iLCJ0cmFuc2Zvcm0iLCJzcGFjaW5nIiwiQWNjb3JkaW9uRGV0YWlscyIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJtYXhIZWlnaHQiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwiaGFuZGxlQ2hhbmdlIiwicGFuZWwiLCJuZXdFeHBhbmRlZCIsIndvcmRzIiwic2V0V29yZHMiLCJjYXRlZ29yeSIsIm1lbnUiLCJyYW5kb21Xb3JkIiwiZ2V0V29yZCIsIndvcmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzcGxpY2UiLCJpbmRleE9mIiwid29yZDEiLCJ3b3JkMiIsInRleHREZWNvcmF0aW9uIiwiUGFnaW5hdGlvbiIsInBhZ2UiLCJwYWdlTmJyIiwiY2VpbCIsInBhcnNlSW50Iiwib25DaGFuZ2UiLCJwYXJhbXMiLCJEaXJlY3RMaW5rIiwiRXZlbnRzIiwiYW5pbWF0ZVNjcm9sbCIsInNjcm9sbCIsInNjcm9sbFNweSIsInNjcm9sbGVyIiwic2V0SW5zdGEiLCJhdWRpbyIsIkF1ZGlvIiwic3RhcnQiLCJwbGF5IiwibmF2YmFyIiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsInRlbGVwb3J0IiwicmVwbGFjZSIsIm9uY2UiXSwic291cmNlUm9vdCI6IiJ9