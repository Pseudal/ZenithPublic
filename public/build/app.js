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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");
/* harmony import */ var _clientpage6_5__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_clientpage6_5 */ "./assets/components/Clientpage/_clientpage6_5.jsx");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function Clientpage() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_23__.useParams)(),
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
  } else if (!isLoaded || !isImgReady || !isLoadedNextPrev || !isLoadedProject) {
    return /*#__PURE__*/React.createElement("div", null, "Loading...");
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
























function SearchPage2() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_23__.useParams)(),
    info = _useParams.info;
  var _useParams2 = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_23__.useParams)(),
    name = _useParams2.name;
  var _useParams3 = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_23__.useParams)(),
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
  } else if (!isLoaded) {
    return /*#__PURE__*/React.createElement("div", null, "dbfgbfg...");
  } else {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_navbar__WEBPACK_IMPORTED_MODULE_15__["default"], null), /*#__PURE__*/React.createElement(_rsButton__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/React.createElement(_linesTop__WEBPACK_IMPORTED_MODULE_17__["default"], null), /*#__PURE__*/React.createElement(_linesBottom__WEBPACK_IMPORTED_MODULE_18__["default"], null), /*#__PURE__*/React.createElement(_SearchPageOne2__WEBPACK_IMPORTED_MODULE_14__["default"], {
      data: name
    }), /*#__PURE__*/React.createElement(_SearchPageTwo2__WEBPACK_IMPORTED_MODULE_19__["default"], {
      data: items
    }), /*#__PURE__*/React.createElement(_Homepage_miniFooter__WEBPACK_IMPORTED_MODULE_20__["default"], null));
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
  if (type == "projet") {
    for (var index = 0; index < data.data.length; index++) {
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
      }, data.data[index].projet), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover"
        },
        src: "/images/imageprojet/" + data.data[index].header,
        alt: ""
      })))));
      box.push(item);
    }
  }
  if (type == "client") {
    for (var _index = 0; _index < data.data.length; _index++) {
      var _item = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: _index,
        className: "column columns is-one-fifth is-centered"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "is-half"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        href: "/projet/" + data.data[_index].id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "boxWorkpage1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        style: {
          position: "absolute"
        },
        className: "textDeco"
      }, data.data[_index].nomClient), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover"
        },
        src: "/images/imageprojet/" + data.data[_index].header,
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
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/font.css */ "./assets/styles/font.css");




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
      }, data.data[index].mission), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover"
        },
        src: "/images/imageprojet/" + data.data[index].header,
        alt: ""
      })))));
      box.push(item);
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
    to: "/clients/1"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9NYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2xpZW50cGFnZS9fY2xpZW50cGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2xpZW50cGFnZS9fY2xpZW50cGFnZTZfNS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2xpZW50cGFnZS9fY2xpZW50cGFnZUZpdmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NsaWVudHBhZ2UvX2NsaWVudHBhZ2VGb3VyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DbGllbnRwYWdlL19jbGllbnRwYWdlT25lLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DbGllbnRwYWdlL19jbGllbnRwYWdlU2l4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DbGllbnRwYWdlL19jbGllbnRwYWdlVGhyZWUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NsaWVudHBhZ2UvX2NsaWVudHBhZ2VUd28uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NvbnRhY3RwYWdlL19jb250YWN0cGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ29udGFjdHBhZ2UvX2NvbnRhY3RwYWdlT25lLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ib21lcGFnZS9fYWN0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ib21lcGFnZS9fY2hpZmZyZXMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL19jcmVhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZXBhZ2UvX2Vtb3Rpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL19mb290ZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWVwYWdlL19ob21lcGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZXBhZ2UvX2luc3RhLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ib21lcGFnZS9fbWluaUZvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZXBhZ2UvX3NhdGlzZmFjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZXBhZ2UvX3Zpc2lvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZXBhZ2UvX3dvcmQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1Byb2plY3RwYWdlL19wcm9qZWN0cGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUHJvamVjdHBhZ2UvX3Byb2plY3RwYWdlRml2ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUHJvamVjdHBhZ2UvX3Byb2plY3RwYWdlRm91ci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUHJvamVjdHBhZ2UvX3Byb2plY3RwYWdlT25lLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Qcm9qZWN0cGFnZS9fcHJvamVjdHBhZ2VTaXguanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1Byb2plY3RwYWdlL19wcm9qZWN0cGFnZVRocmVlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Qcm9qZWN0cGFnZS9fcHJvamVjdHBhZ2VUd28uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1NlYXJjaFBhZ2UyL19TZWFyY2hQYWdlMi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU2VhcmNoUGFnZTIvX1NlYXJjaFBhZ2VPbmUyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TZWFyY2hQYWdlMi9fU2VhcmNoUGFnZVR3bzIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1NlYXJjaFBhZ2UvX1NlYXJjaFBhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1NlYXJjaFBhZ2UvX1NlYXJjaFBhZ2VPbmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1NlYXJjaFBhZ2UvX1NlYXJjaFBhZ2VUd28uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1dvcmtwYWdlQ2xpZW50L193b3JrcGFnZUNsaWVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvV29ya3BhZ2VDbGllbnQvX3dvcmtwYWdlQ2xpZW50T25lLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Xb3JrcGFnZUNsaWVudC9fd29ya3BhZ2VDbGllbnRUd28uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1dvcmtwYWdlL193b3JrcGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvV29ya3BhZ2UvX3dvcmtwYWdlRml2ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvV29ya3BhZ2UvX3dvcmtwYWdlRm91ci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvV29ya3BhZ2UvX3dvcmtwYWdlT25lLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Xb3JrcGFnZS9fd29ya3BhZ2VUaHJlZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvV29ya3BhZ2UvX3dvcmtwYWdlVHdvLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9faG9tZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvX2xpbmVzQm90dG9tLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9fbGluZXNUb3AuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL19uYXZiYXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL19yc0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcnJvdy5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9mb250LmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzaGVldHMvYnVsbWEvZWxlbWVudHMvY29udGFpbmVyLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlc2hlZXRzL2J1bG1hL2dyaWQvY29sdW1ucy5zYXNzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXNoZWV0cy9idWxtYS9oZWxwZXJzL3NwYWNpbmcuc2FzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzaGVldHMvbWFpbi5zYXNzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXNoZWV0cy9wYWdpbmF0aW9uLmxlc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgJy4vc3R5bGVzaGVldHMvbWFpbi5zYXNzJztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL19ob21lLmpzeCc7XHJcbmltcG9ydCBXb3JrcGFnZSBmcm9tICcuL2NvbXBvbmVudHMvV29ya3BhZ2UvX3dvcmtwYWdlJztcclxuaW1wb3J0IFdvcmtwYWdlQ2xpZW50IGZyb20gJy4vY29tcG9uZW50cy9Xb3JrcGFnZUNsaWVudC9fd29ya3BhZ2VDbGllbnQnO1xyXG5pbXBvcnQgQ29udGFjdFBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL0NvbnRhY3RwYWdlL19jb250YWN0cGFnZSc7XHJcbmltcG9ydCBDbGllbnRQYWdlIGZyb20gJy4vY29tcG9uZW50cy9DbGllbnRwYWdlL19jbGllbnRwYWdlJztcclxuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9qZWN0cGFnZSBmcm9tICcuL2NvbXBvbmVudHMvUHJvamVjdHBhZ2UvX3Byb2plY3RwYWdlJztcclxuaW1wb3J0IFNlYXJjaFBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL1NlYXJjaFBhZ2UvX1NlYXJjaFBhZ2UnO1xyXG5pbXBvcnQgU2VhcmNoUGFnZTIgZnJvbSAnLi9jb21wb25lbnRzL1NlYXJjaFBhZ2UyL19TZWFyY2hQYWdlMic7IFxyXG5pbXBvcnQgXCIuL3N0eWxlc2hlZXRzL2J1bG1hL2dyaWQvY29sdW1ucy5zYXNzXCIgXHJcbmltcG9ydCBcIi4vc3R5bGVzaGVldHMvYnVsbWEvaGVscGVycy9zcGFjaW5nLnNhc3NcIjtcclxuaW1wb3J0IFwiLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgV3JhcHBlciA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICB9LCBbbG9jYXRpb24ucGF0aG5hbWVdKTtcclxuICAgIHJldHVybiBjaGlsZHJlblxyXG4gIH07IFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICA8V3JhcHBlcj5cclxuICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9wcm9qZXRzLzpuYnJcIiBlbGVtZW50PXs8V29ya3BhZ2UgLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9jbGllbnRzLzpuYnJcIiBlbGVtZW50PXs8V29ya3BhZ2VDbGllbnQgLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9jb250YWN0XCIgZWxlbWVudD17PENvbnRhY3RQYWdlIC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvY2xpZW50LzppZFwiIGVsZW1lbnQ9ezxDbGllbnRQYWdlIC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvcHJvamV0LzppZFwiIGVsZW1lbnQ9ezxQcm9qZWN0cGFnZSAvPn0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3NlYXJjaC86aW5mb1wiIGVsZW1lbnQ9ezxTZWFyY2hQYWdlIC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvc2VhcmNoY2F0Lzp0eXBlLzppbmZvLzpuYW1lXCIgZWxlbWVudD17PFNlYXJjaFBhZ2UyIC8+fSAvPlxyXG4gICAgICAgIDwvUm91dGVzPlxyXG4gICAgICA8L1dyYXBwZXI+XHJcbiAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjsgXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi9NYWluLmpzJztcclxud2luZG93LlJlYWN0ID0gUmVhY3RcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcclxuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxucm9vdC5yZW5kZXIoXHJcblxyXG4gICAgPE1haW4gLz5cclxuXHJcbik7XHJcblxyXG4iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL19uYXZiYXInO1xyXG5pbXBvcnQgQ2xpZW50UGFnZU9uZSBmcm9tIFwiLi9fY2xpZW50cGFnZU9uZVwiO1xyXG5pbXBvcnQgQ2xpZW50cGFnZVR3byBmcm9tICcuL19jbGllbnRwYWdlVHdvJztcclxuaW1wb3J0IENsaWVudHBhZ2VUaHJlZSBmcm9tICcuL19jbGllbnRwYWdlVGhyZWUnO1xyXG5pbXBvcnQgQ2xpZW50cGFnZUZvdXIgZnJvbSAnLi9fY2xpZW50cGFnZUZvdXInO1xyXG5pbXBvcnQgQ2xpZW50cGFnZUZpdmUgZnJvbSAnLi9fY2xpZW50cGFnZUZpdmUnO1xyXG5pbXBvcnQgQ2xpZW50cGFnZVNpeCBmcm9tICcuL19jbGllbnRwYWdlU2l4JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcbmltcG9ydCBDbGllbnRwYWdlNl81IGZyb20gJy4vX2NsaWVudHBhZ2U2XzUnO1xyXG5cclxuZnVuY3Rpb24gQ2xpZW50cGFnZSgpIHtcclxuXHRjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZEltZywgc2V0SXNMb2FkZWRJbWddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZE5leHRQcmV2LCBzZXRJc0xvYWRlZE5leHRQcmV2XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNJbWdSZWFkeSwgc2V0SW1nUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbcHJlY2ksIHNldFByZWNpXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbc2Vjb25kLCBzZXRTZWNvbmRdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtOZXh0UHJldiwgc2V0TmV4dFByZXZdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtQcm9qZWN0LCBzZXRQcm9qZWN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbaXNMb2FkZWRQcm9qZWN0LCBzZXRJc0xvYWRlZFByb2plY3RdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGlmKGlkKXtcclxuXHRcdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRcdGZldGNoKGAvYXBpL2NsaWVudHMvJHtpZH1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdHNldEl0ZW1zKHJlc3VsdCk7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cclxuXHRcdFx0ZmV0Y2goYC9nZXRJbWFnZXNDbGllbnQvJHtpZH1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdGxldCB0aGlzUmVzID0gSlNPTi5wYXJzZShyZXN1bHQpXHJcblx0XHRcdFx0c2V0SXNMb2FkZWRJbWcodHJ1ZSk7XHJcblx0XHRcdFx0c2V0SW1hZ2VzKEpTT04ucGFyc2UocmVzdWx0KSk7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyh0aGlzUmVzKVxyXG5cdFx0XHRcdGlmKHRoaXNSZXMpe1xyXG5cdFx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXNSZXMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzUmVzW2ldKVxyXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhpKVxyXG5cdFx0XHRcdFx0XHRpZih0aGlzUmVzW2ldLmhlYWRlcilcclxuXHRcdFx0XHRcdFx0XHRzZXRIZWFkZXIodGhpc1Jlc1tpXSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlc1tpXS5pbWFnZXByZWNpc2lvbilcclxuXHRcdFx0XHRcdFx0XHRzZXRQcmVjaSh0aGlzUmVzW2ldKVxyXG5cdFx0XHRcdFx0XHRpZih0aGlzUmVzW2ldLnNlY29uZGFpcmUpXHJcblx0XHRcdFx0XHRcdFx0c2V0U2Vjb25kKHRoaXNSZXNbaV0pXHJcblx0XHRcdFx0XHRcdC8vIGlmKGltYWdlc1tpXS52aXNpYmxlKVxyXG5cdFx0XHRcdFx0XHQvLyBcdHNldERpc3BsYXkoLi4uaW1hZ2VzW2ldKVxyXG5cdFx0XHRcdFx0XHRpZih0aGlzUmVzLmxlbmd0aC0xID09IGkpe1xyXG5cdFx0XHRcdFx0XHRcdHNldEltZ1JlYWR5KHRydWUpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYodGhpc1Jlcy5sZW5ndGggPT0gMCl7XHJcblx0XHRcdFx0XHRzZXRJbWdSZWFkeSh0cnVlKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHRcdC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0XHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHRcdGZldGNoKGAvTmV4UHJldi8ke2lkfWAse21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0XHQudGhlbihcclxuXHRcdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0bGV0IE5leHQgPSBKU09OLnBhcnNlKHJlc3VsdFswXSlcclxuXHRcdFx0XHRsZXQgUHJldiA9IEpTT04ucGFyc2UocmVzdWx0WzFdKVxyXG5cdFx0XHRcdGlmKE5leHQgJiYgUHJldil7XHJcblx0XHRcdFx0XHRzZXROZXh0UHJldihbTmV4dCwgUHJldl0pO1xyXG5cdFx0XHRcdFx0aWYoTmV4dFByZXYpe1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhOZXh0UHJldilcclxuXHRcdFx0XHRcdFx0c2V0SXNMb2FkZWROZXh0UHJldih0cnVlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0XHRmZXRjaChgL2dldHRBbGxQcm9qZWN0QnlDbGllbnQvJHtpZH1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdHNldElzTG9hZGVkUHJvamVjdCh0cnVlKTtcclxuXHRcdFx0XHRzZXRQcm9qZWN0KHJlc3VsdCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHRcdC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0XHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdH0sIFtdKVxyXG5cdH1cclxuXHJcblx0aWYgKGVycm9yKSB7XHJcblx0XHQgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuXHQgIH0gZWxzZSBpZiAoIWlzTG9hZGVkIHx8ICFpc0ltZ1JlYWR5IHx8ICFpc0xvYWRlZE5leHRQcmV2IHx8ICFpc0xvYWRlZFByb2plY3QpIHtcclxuXHRcdHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcblx0ICB9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpdGVtc1wiKVxyXG5cdFx0Y29uc29sZS5sb2coaXRlbXMpXHJcblx0XHRcdHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxOYXZiYXI+PC9OYXZiYXI+XHJcbiAgICAgICAgICA8Q2xpZW50UGFnZU9uZSBkYXRhPXtpdGVtc30+PC9DbGllbnRQYWdlT25lPlxyXG4gICAgICAgICAgPENsaWVudHBhZ2VUd28gZGF0YT17aXRlbXN9PjwvQ2xpZW50cGFnZVR3bz5cclxuICAgICAgICAgIDxDbGllbnRwYWdlVGhyZWUgZGF0YT17c2Vjb25kfT48L0NsaWVudHBhZ2VUaHJlZT5cclxuICAgICAgICAgIDxDbGllbnRwYWdlRm91ciBwcmVjaT17cHJlY2l9IGRhdGEyPXtpdGVtc30+PC9DbGllbnRwYWdlRm91cj5cclxuICAgICAgICAgIDxDbGllbnRwYWdlRml2ZSBpbWFnZXM9e2ltYWdlc30+PC9DbGllbnRwYWdlRml2ZT5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy82V3ZlbW0zSy5qcGVnKVwiIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbWlibG9jT3BhY2l0eVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXIgbWFyZ2luVG9wU1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjBcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1lZGl1bSBjZW50ZXJUZXh0XCI+VU4gVMOJTU9JR05BR0U8L2g0PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpZ2h0IGNlbnRlclRleHRcIlxyXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBpdGVtcy50ZW1vaWduYWdlIH19XHJcbiAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPENsaWVudHBhZ2U2XzUgaXRlbT17UHJvamVjdH0+PC9DbGllbnRwYWdlNl81PlxyXG4gICAgICAgICAgPENsaWVudHBhZ2VTaXggZGF0YT17aXRlbXN9IG5wPXtOZXh0UHJldn0+PC9DbGllbnRwYWdlU2l4PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudHBhZ2U7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIENsaWVudHBhZ2U2XzUoaXRlbSkge1xyXG4gIGxldCBzbGlkZXIgPSBbXVxyXG4gIGNvbnNvbGUubG9nKGl0ZW0pXHJcbiAgaWYoaXRlbS5pdGVtLmxlbmd0aCA+MCkge1xyXG4gICAgaXRlbS5pdGVtLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XHJcbiAgICAgICAgbGV0IG5ld1NsaWRlciA9IHVuZGVmaW5lZFxyXG4gICAgICAgIGlmKGVsZW1lbnQuaGVhZGVyKXtcclxuICAgICAgICAgICAgbmV3U2xpZGVyID0gKFxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2VsZW1lbnQuaWR9IGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj17YC9wcm9qZXQvJHtlbGVtZW50LmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQubWlzc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvaW1hZ2Vwcm9qZXQvJHtlbGVtZW50LmhlYWRlcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICApOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBuZXdTbGlkZXIgPSAoXHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17ZWxlbWVudC5pZH0gY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPXtgL3Byb2pldC8ke2VsZW1lbnQuaWR9YH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiMwMjExMURcIix9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50Lm1pc3Npb259XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY29udGFpblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvemVuaXRoL2F1dHJlL25vSW1nLnBuZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICApOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzbGlkZXIucHVzaChuZXdTbGlkZXIpIFxyXG4gICAgfSk7XHJcbiAgfWVsc2V7XHJcbiAgICBzbGlkZXIgPSAoIDxoMSBjbGFzc05hbWU9XCJ0aXRyZUEgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcFwiPnJpZW4gYSB2b2lyPC9oMT4gKVxyXG4gIH1cclxuICBmdW5jdGlvbiBCbHVyRGV0YWlsKGUpe1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gXCJibHVyKDRweClcIjtcclxuICAgIGUudGFyZ2V0LmNoaWxkcmVuWzBdLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIFJlbW92ZUJsdXJEZXRhaWwoZSl7XHJcbiAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgZS50YXJnZXQuc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSBcImJsdXIoMClcIjtcclxuICAgIGUudGFyZ2V0LmNoaWxkcmVuWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxyXG5cclxuICAgICAgICA8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuXHRcdFx0XHRcdDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnNC5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcblx0XHRcdFx0PC92aWRlbz4gKi99XHJcbiAgICAgIHsvKiA8RWxlbWVudCBuYW1lPVwic2Nyb2xsLXRvLWVsZW1lbnQ0XCIgY2xhc3NOYW1lPVwiZWxlbWVudFwiPjwvRWxlbWVudD4gKi99XHJcbiAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL3plbml0aC9pbWFnZXMvWjF6SUpDS2suanBlZ1wiIHN0cmVuZ3RoPXs4MDB9PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17e3BhZGRpbmdUb3A6ICc1MHB4JyxwYWRkaW5nQm90dG9tOiAnNzVweCd9fT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgLy8gICBkYXRhLWFvcz1cInpvb20taW5cIlxyXG4gICAgICAgIC8vICAgZGF0YS1hb3MtbWlycm9yPVwiXCJcclxuICAgICAgICAvLyAgIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiXHJcbiAgICAgICAgLy8gICBkYXRhLWFvcy1hbmNob3ItcGxhY2VtZW50PVwiXCJcclxuICAgICAgICAvLyAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyMlwiPlxyXG4gICAgICAgICAgICA8aDNcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRyZUEgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcCBtYi01XCJcclxuICAgICAgICAgICAgLy8gICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAvLyAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBQUk9KRVRTIExJw4lTXHJcbiAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICA8U3dpcGVyXHJcbiAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnNTAwcHgnfX1cclxuICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3PXsxfVxyXG4gICAgICAgICAgICAgIGNlbnRlcmVkU2xpZGVzPXtmYWxzZX1cclxuICAgICAgICAgICAgICBzcGFjZUJldHdlZW49ezB9XHJcbiAgICAgICAgICAgICAgYnJlYWtwb2ludHM9e3tcclxuICAgICAgICAgICAgICAgIDY0MDoge1xyXG4gICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDQwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNyxcclxuICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3aXBlcjJcIlxyXG4gICAgICAgICAgICAvLyAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgIC8vICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzbGlkZXJ9XHJcbiAgICAgICAgICAgICAgey8qIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzFdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy9fRFNDMTMwMC5qcGdgfSBhbHQ9XCJcIiAvPjwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCIgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9IG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX0+PGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+PHAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgZGlzcGxheTogXCJub25lXCIsIHdpZHRoOiBcIjIwMHB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCIwcHhcIiwgdG9wOlwiMjAwcHhcIn19PntpdGVtLml0ZW1bMl0ubWlzc2lvbn08L3A+PC9kaXY+PGltZyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17YC96ZW5pdGgvaW1hZ2VzLzFKNEE1MDA5ICgxKS5qcGdgfSBhbHQ9XCJcIiAvPjwvZGl2PiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzNdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy9DYXB0dXJlIGTigJnDqWNyYW4gMjAyMi0xMi0wMyDDoCAyMS4zMy4yOS5wbmdgfSBhbHQ9XCJcIiAvPjwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCIgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9IG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX0+PGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+PHAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgZGlzcGxheTogXCJub25lXCIsIHdpZHRoOiBcIjIwMHB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCIwcHhcIiwgdG9wOlwiMjAwcHhcIn19PntpdGVtLml0ZW1bNF0ubWlzc2lvbn08L3A+PC9kaXY+PGltZyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17YC96ZW5pdGgvaW1hZ2VzL0lNR183NDg3LmpwZ2B9IGFsdD1cIlwiIC8+PC9kaXY+ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCIgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9IG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX0+PGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+PHAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgZGlzcGxheTogXCJub25lXCIsIHdpZHRoOiBcIjIwMHB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCIwcHhcIiwgdG9wOlwiMjAwcHhcIn19PntpdGVtLml0ZW1bNV0ubWlzc2lvbn08L3A+PC9kaXY+PGltZyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17YC96ZW5pdGgvaW1hZ2VzL0lNR18wMDA0LmpwZ2B9IGFsdD1cIlwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVs0XS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgL3plbml0aC9pbWFnZXMvSU1HXzk4MzguanBnYH0gYWx0PVwiXCIgLz48L2Rpdj4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVs1XS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgL3plbml0aC9pbWFnZXMvRElBXzA3NTkuanBnYH0gYWx0PVwiXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPiAqL31cclxuICAgICAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L1BhcmFsbGF4PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRwYWdlNl81OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tIFwicmVhY3QtcGFyYWxsYXhcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXNoZWV0cy9idWxtYS9lbGVtZW50cy9jb250YWluZXIuc2Fzc1wiXHJcbmltcG9ydCBMaWdodGJveCBmcm9tIFwieWV0LWFub3RoZXItcmVhY3QtbGlnaHRib3hcIjtcclxuaW1wb3J0IFRodW1ibmFpbHMgZnJvbSBcInlldC1hbm90aGVyLXJlYWN0LWxpZ2h0Ym94L3BsdWdpbnMvdGh1bWJuYWlsc1wiO1xyXG5pbXBvcnQgXCJ5ZXQtYW5vdGhlci1yZWFjdC1saWdodGJveC9wbHVnaW5zL3RodW1ibmFpbHMuY3NzXCI7XHJcbmltcG9ydCBcInlldC1hbm90aGVyLXJlYWN0LWxpZ2h0Ym94L3N0eWxlcy5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIENsaWVudHBhZ2VGaXZlKGltYWdlcykge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBsZXQgYXJyYXlJbWFnZSA9IFtdXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGltYWdlcy5pbWFnZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcblx0ICBjb25zdCBlbGVtZW50ID0gaW1hZ2VzLmltYWdlc1tpbmRleF07XHJcblx0ICBpZihlbGVtZW50LnZpc2libGUgPT0gZmFsc2Upe1xyXG5cdFx0Y29udGludWU7XHJcblx0IH1cclxuXHQgbGV0IGl0ZW0gPSB7IHNyYzogYC9pbWFnZXMvaW1hZ2VjbGllbnQvJHtlbGVtZW50LmltYWdlfWB9XHJcblx0IGFycmF5SW1hZ2UucHVzaChpdGVtKVx0ICBcclxuICB9XHJcblxyXG5cclxuICBpZihhcnJheUltYWdlLmxlbmd0aD4wKXtcclxuICAgIGNvbnNvbGUubG9nKFwiZmlyc3RcIilcclxuICAgIGNvbnNvbGUubG9nKGFycmF5SW1hZ2UpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL3plbml0aC9pbWFnZXMvWjF6SUpDS2suanBlZ1wiIHN0cmVuZ3RoPXs4MDB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLGhlaWdodDpcIjEwMCVcIiwgZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwifX0+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtY2VudGVyZWRcIiBzdHlsZT17e2hlaWdodDpcIjkwJVwiLHdpZHRoOlwiODAlXCIsIHBhZGRpbmdUb3A6XCI1MHB4XCJ9fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1vbmUtdGhpcmRcIiBzdHlsZT17e2JhY2tncm91bmQ6XCIjMDIxMTFEXCIsIHBhZGRpbmc6XCIwXCIsIHBhZGRpbmc6XCIwXCJ9fT5cclxuICAgICAgICAgICAgICB7YXJyYXlJbWFnZVswXSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2FycmF5SW1hZ2VbMF0uc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApIDogKDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIHdpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT48aW1nIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19IHNyYz17XCIvemVuaXRoL2F1dHJlL25vSW1nLnBuZ1wifSBhbHQ9XCJcIi8+PC9kaXY+KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtb25lLXRoaXJkIGNvbHVtbnMgaXMtbXVsdGlsaW5lIG14LTVcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLWZ1bGwgbXktNVwiIHN0eWxlPXt7YmFja2dyb3VuZDpcIiMwMjExMURcIiwgcGFkZGluZzpcIjBcIn19PiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHthcnJheUltYWdlWzFdID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXthcnJheUltYWdlWzFdLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6ICg8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCB3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiMTAwJVwifX0+PGltZyBzdHlsZT17e3dpZHRoOlwiNTAlXCJ9fSBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn0gYWx0PVwiXCIvPjwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1mdWxsIG15LTVcIiBzdHlsZT17e2JhY2tncm91bmQ6XCIjMDIxMTFEXCIsIHBhZGRpbmc6XCIwXCJ9fT4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHthcnJheUltYWdlWzJdID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzpcIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXthcnJheUltYWdlWzJdLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6ICg8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCB3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiMTAwJVwifX0+PGltZyBzdHlsZT17e3dpZHRoOlwiNTAlXCJ9fSBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn0gYWx0PVwiXCIvPjwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS10aGlyZCBpcy1tb2JpbGVcIiBzdHlsZT17e2JhY2tncm91bmQ6XCIjMDIxMTFEXCIsIHBhZGRpbmc6XCIwXCJ9fT5cclxuICAgICAgICAgICAgICB7YXJyYXlJbWFnZVszXSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOlwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YXJyYXlJbWFnZVszXS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgd2lkdGg6XCIxMDAlXCIsIGhlaWdodDpcIjEwMCVcIn19PjxpbWcgc3R5bGU9e3t3aWR0aDpcIjUwJVwifX0gc3JjPXtcIi96ZW5pdGgvYXV0cmUvbm9JbWcucG5nXCJ9IGFsdD1cIlwiLz48L2Rpdj4pfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbW9iaWxlIGlzLWNlbnRlcmVkIG10LTUtZnVsbGhkXCIgc3R5bGU9e3twb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBib3R0b206XCIyNXB4XCIsIHdpZHRoOlwiMTAxJVwifX0+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfSBjbGFzc05hbWU9XCJidG5TIGNlbnRlciBsaWdodCBsZXR0ZXJTcGFjaW5nTSBtYi02IG10LTBcIj5cclxuICAgICAgICAgICAgICAgIEVOIFZPSVIgK1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICBcclxuICBcclxuICAgICAgICAgICAgPExpZ2h0Ym94XHJcbiAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICBjbG9zZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgcGx1Z2lucz17W1RodW1ibmFpbHNdfVxyXG4gICAgICAgICAgICAgIHNsaWRlcz17YXJyYXlJbWFnZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudHBhZ2VGaXZlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gQ2xpZW50cGFnZUZvdXIoe3ByZWNpLCBkYXRhMn0pIHtcclxuXHRjb25zb2xlLmxvZyhwcmVjaSlcclxuXHRpZihkYXRhMi5lbGVtZW50cHJlY2lzaW9uKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzLzZXdmVtbTNLLmpwZWcpXCIsIGhlaWdodDogXCIxMTAwcHhcIn19IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nJ3N0eWxlPXt7IGhlaWdodDogXCIxMTAwcHhcIn19PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyMic+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyQ2VudGVyQSc+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmVudDIxIG1hcmdpblRvcCc+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFyZ2luVG9wMicgPlxyXG5cdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9J2xpZ2h0IGxldHRlclNwYWNpbmdTJz7DiUzDiU1FTlRTIERFIFBSw4lDSVNJT048L2gzPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQgdGV4dC1oNScgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSd9fSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhMi5lbGVtZW50cHJlY2lzaW9ufX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9JyBib3hDbGllbnQnIHN0eWxlPXt7aGVpZ2h0OiAnODAwcHgnLCB3aWR0aDpcIjYwMHB4XCJ9fT5cclxuXHRcdFx0XHRcdFx0XHR7cHJlY2kuaW1hZ2UgPyAoPGltZyBjbGFzc05hbWU9JyBjb250YWluJyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17XCIvaW1hZ2VzL2ltYWdlY2xpZW50L1wiICsgcHJlY2kuaW1hZ2V9IGFsdD1cIlwiLz4pIDogKDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIHdpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT48aW1nIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19IHNyYz17XCIvemVuaXRoL2F1dHJlL25vSW1nLnBuZ1wifSBhbHQ9XCJcIi8+PC9kaXY+KX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2Plx0XHRcclxuXHJcblxyXG5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9fVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudHBhZ2VGb3VyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBDbGllbnRwYWdlT25lKGRhdGEpIHtcclxuXHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdEFPUy5pbml0KClcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kMVwiIGFsdD1cImhvbWVwYWdlXCI+XHJcblxyXG5cdFx0XHQ8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuXHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZy5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcblx0XHRcdFx0PC92aWRlbz5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5Qmx1ZVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlcjJcIj5cclxuXHRcdFx0XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCIvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi96ZW5pdGgvaW1hZ2VzL2JJTzFyOUYucG5nXCIgYWx0PVwiTG9nb1wiIHdpZHRoPXsyMDB9IGNsYXNzTmFtZT1cImNlbnRlclwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlx0XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsaWVudHBhZ2VUZXh0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cIm1lZGl1bSBtYXJnaW5TdG9wIGNsaWVudERldGFpbFwiPk5PTSBDTElFTlQ8L2gxPlxyXG5cdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9XCJsaWdodCBtYXJnaW5TdG9wIGNsaWVudERldGFpbFwiPlNFQ1RFVVIgROKAmUFDVElWSVTDiTwvaDY+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibGlnaHQgY2xpZW50RGV0YWlsXCI+RFVSw4lFIFBST0pFVDwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsaWdodCBjbGllbnREZXRhaWwyXCI+Q0FUw4lHT1JJRSAxIHwgQ0FUw4lHT1JJRSAyPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlcjNcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDQgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSd9fSBjbGFzc05hbWU9XCJsaWdodCBsZXR0ZXJTcGFjaW5nUyAgZGlzY292ZXJDbGllbnQyXCI+e2RhdGEuZGF0YS5taXNzaW9ufTwvaDQ+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsaWdodCAgZGlzY292ZXJDbGllbnRcIj5Ew4lDT1VWUkVaPC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGluZUNsaWVudFwiID48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50cGFnZU9uZTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIENsaWVudHBhZ2VTaXgoe2RhdGEsIG5wfSkge1xyXG5cdEFPUy5pbml0KClcclxuXHRpZihucFswXSl7XHJcblx0XHRpZihucFswXVswXSA9PSAnbnVsbCcpXHJcblx0XHRcdG5wWzBdWzBdID0gZmFsc2U7XHJcblx0XHRpZihucFswXVsxXSA9PSAnbnVsbCcpXHJcblx0XHRcdG5wWzFdWzBdID0gZmFsc2U7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHJcblxyXG5cclxuXHJcblx0XHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCJ9fSBjbGFzc05hbWU9J2RlbWlibG9jQ2xpZW50Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkZW1pYmxvY09wYWNpdHknPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyZW50Q2xpZW50TmV4dFByZXYnPlxyXG5cclxuXHRcdFx0XHRcdFx0XHR7bnBbMV1bMF0gJiZcclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdDbGllbnROZXh0UHJldjEnIG9uQ2xpY2s9eygpPT57bG9jYXRpb24uaHJlZiA9IFwiL2NsaWVudC9cIisgbnBbMV1bMF0uaWR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT0nbGlnaHQgcmlnaHRUZXh0IG1hcmdpblRvcFMnPlBST0pFVCBQUsOJQ8OJREVOVDwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9J3JpZ2h0VGV4dCc+e25wWzFdWzBdLm5vbUNsaWVudH08L2g1PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPSdsaWdodCByaWdodFRleHQnPntucFsxXVswXS5taXNzaW9ufTwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj59XHJcblxyXG5cdFx0XHRcdFx0XHRcdHtucFswXVswXSAmJiA8ZGl2IGNsYXNzTmFtZT0nQ2xpZW50TmV4dFByZXYyJyBvbkNsaWNrPXsoKT0+e2xvY2F0aW9uLmhyZWYgPSBcIi9jbGllbnQvXCIrIG5wWzBdWzBdLmlkfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9J2xpZ2h0IGxlZnRUZXh0IG1hcmdpblRvcFMnPlBST0pFVCBTVUlWQU5UPC9oNj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT0nbGVmdFRleHQnPntucFswXVswXS5ub21DbGllbnR9PC9oNT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT0nbGlnaHQgbGVmdFRleHQnPntucFswXVswXS5taXNzaW9ufTwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj59XHJcblx0XHRcdFx0XHRcdFx0ey8qIDxhIGhyZWY9e1wiL2NsaWVudC9cIitucFsxXVswXS5pZH0+ICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudHBhZ2VTaXg7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gQ2xpZW50cGFnZVRocmVlKGRhdGEpIHtcclxuXHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdGlmKGRhdGEuZGF0YS5pbWFnZSAhPT0gdW5kZWZpbmVkKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3dyYXBwZXJEYXJrQmx1ZUNsaWVudCcgc3R5bGU9e3toZWlnaHQ6XCI4MDBweFwiLCB3aWR0aDpcIjEwMCVcIn19PlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9e1wiL2ltYWdlcy9pbWFnZWNsaWVudC9cIiArIGRhdGEuZGF0YS5pbWFnZX0gYWx0PVwiXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG4gfVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudHBhZ2VUaHJlZTsiLCIvLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuLy8gaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcclxuLy8gaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbi8vIGltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gQ2xpZW50cGFnZVR3byhkYXRhKSB7XHJcbi8vIFx0QU9TLmluaXQoKVxyXG4vLyBcdGlmKGRhdGEuZGF0YS5lbmpldSB8fCBkYXRhLmRhdGEuaGlzdG9pcmUgfHwgZGF0YS5kYXRhLnJlcG9uc2Upe1xyXG4vLyBcdFx0cmV0dXJuIChcclxuLy8gXHRcdFx0PD5cclxuLy8gXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy94OW5lczVWLmpwZylcIn19IGNsYXNzTmFtZT0nZGVtaWJsb2NDbGllbnQnPlxyXG4vLyBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2RlbWlibG9jQ2xpZW50T3BhY2l0eSc+XHJcbi8vIFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJlbnRDbGllbnQnPlxyXG4vLyBcdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuZW5qZXUgJiZcclxuLy8gXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2xpZW50R3JpZDEnPlxyXG4vLyBcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nbGlnaHQnPlVORSBFTkpFVTwvaDQ+XHJcbi8vIFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGlnaHQgY29udGFpbmVyQ2VudGVyQ2xpZW50JyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLmRhdGEuZW5qZXV9fT48L2Rpdj5cclxuLy8gXHRcdFx0XHRcdFx0XHQ8L2Rpdj4gXHJcbi8vIFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuLy8gXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLmhpc3RvaXJlICYmXHJcbi8vIFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NsaWVudEdyaWQyJz5cclxuLy8gXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2xpZ2h0Jz5VTkUgSElTVE9JUkU8L2g0PlxyXG4vLyBcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xpZ2h0IGNvbnRhaW5lckNlbnRlckNsaWVudCcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YS5kYXRhLmhpc3RvaXJlfX0+PC9kaXY+XHJcbi8vIFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcbi8vIFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuLy8gXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLnJlcG9uc2UgJiZcclxuLy8gXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2xpZW50R3JpZDMnPlxyXG4vLyBcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nbGlnaHQnPlVORSBSRVBPTlNFPC9oND5cclxuLy8gXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmRhdGEuZGF0YS5yZXBvbnNlfX0+PC9kaXY+XHJcbi8vIFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcbi8vIFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuLy8gXHRcdFx0XHRcdFx0PC9kaXY+XHJcbi8vIFx0XHRcdFx0XHQ8L2Rpdj5cclxuLy8gXHRcdFx0XHQ8L2Rpdj5cclxuLy8gXHRcdFx0PC8+XHJcbi8vIFx0XHQpO1xyXG4vLyBcdH1cclxuLy8gfVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIENsaWVudHBhZ2VUd28oZGF0YSkge1xyXG4gXHRpZihkYXRhLmRhdGEuZW5qZXUgfHwgZGF0YS5kYXRhLmhpc3RvaXJlIHx8IGRhdGEuZGF0YS5yZXBvbnNlKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMvNld2ZW1tM0suanBlZylcIiwgdGV4dEFsaWduOiBcImNlbnRlclwifX0gY2xhc3NOYW1lPSdkZW1pYmxvY0NsaWVudCc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sdW1ucyc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1ucyBpcy1jZW50ZXJlZCBpcy0xMicgc3R5bGU9e3sgbWFyZ2luOlwiMFwiLCBwYWRkaW5nOlwiMFwifX0+XHJcblx0XHRcdFx0XHRcdFx0e2RhdGEuZGF0YS5lbmpldSAmJlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gaXMtY2VudGVyZWQgaXMtNCcgc3R5bGU9e3ttYXJnaW5Ub3A6XCI0OHB4XCIsIG1hcmdpblJpZ2h0OlwiYXV0b1wiLCBtYXJnaW5MZWZ0OlwiYXV0b1wifX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdsaWdodCc+VU4gRU5KRVU8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0gY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQgcHgtNidkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLmRhdGEuZW5qZXV9fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj4gXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLmhpc3RvaXJlICYmXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbHVtbiBpcy1jZW50ZXJlZCBpcy00JyBzdHlsZT17e21hcmdpblRvcDpcIjQ4cHhcIiwgbWFyZ2luUmlnaHQ6XCJhdXRvXCIsIG1hcmdpbkxlZnQ6XCJhdXRvXCJ9fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2xpZ2h0Jz5VTkUgSElTVE9JUkU8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0gY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQgY29sdW1ucyBpcy12Y2VudGVyZWQgaXMtY2VudGVyZWQgcHgtNicgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YS5kYXRhLmhpc3RvaXJlfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLnJlcG9uc2UgJiZcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGlzLWNlbnRlcmVkIGlzLTQnICBzdHlsZT17e21hcmdpblRvcDpcIjQ4cHhcIiwgbWFyZ2luUmlnaHQ6XCJhdXRvXCIsIG1hcmdpbkxlZnQ6XCJhdXRvXCJ9fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2xpZ2h0Jz5VTkUgUkVQT05TRTwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fSBjbGFzc05hbWU9J2xpZ2h0IGNvbnRhaW5lckNlbnRlckNsaWVudCBjb2x1bW5zIGlzLXZjZW50ZXJlZCBpcy1jZW50ZXJlZCBweC02JyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLmRhdGEucmVwb25zZX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcblx0fVxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRwYWdlVHdvO1xyXG4iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL19uYXZiYXInO1xyXG5pbXBvcnQgUnNCdXR0b24gZnJvbSAnLi4vX3JzQnV0dG9uJztcclxuaW1wb3J0IExpbmVzVG9wIGZyb20gJy4uL19saW5lc1RvcCc7XHJcbmltcG9ydCBMaW5lc0JvdHRvbSBmcm9tICcuLi9fbGluZXNCb3R0b20nO1xyXG5pbXBvcnQgQ29udGFjdFBhZ2VPbmUgZnJvbSAnLi9fY29udGFjdHBhZ2VPbmUnO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBDb250YWN0UGFnZSgpIHtcclxuXHRyZXR1cm4gKCBcclxuXHRcdDw+XHJcblx0XHQ8TmF2YmFyPjwvTmF2YmFyPlxyXG5cdFx0PFJzQnV0dG9uPjwvUnNCdXR0b24+XHJcblx0XHQ8TGluZXNUb3A+PC9MaW5lc1RvcD5cclxuXHRcdDxMaW5lc0JvdHRvbT48L0xpbmVzQm90dG9tPlxyXG5cdFx0PENvbnRhY3RQYWdlT25lPjwvQ29udGFjdFBhZ2VPbmU+XHJcblxyXG5cclxuXHRcdDwvPlxyXG5cdCApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0UGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcbmltcG9ydCB3aXRoUmVhY3RDb250ZW50IGZyb20gJ3N3ZWV0YWxlcnQyLXJlYWN0LWNvbnRlbnQnXHJcblxyXG5cclxuZnVuY3Rpb24gQ29udGFjdFBhZ2VPbmUoKSB7XHJcblx0Y29uc3QgTXlTd2FsID0gd2l0aFJlYWN0Q29udGVudChTd2FsKVxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRlbWFpbDogJycsXHJcblx0XHRuYW1lOiAnJyxcclxuXHRcdG1lc3NhZ2U6ICcnLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucGVyc2lzdCgpO1xyXG5cdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXHJcblx0XHRcdFxyXG5cdFx0fSk7XHJcblx0XHRjb25zb2xlLmxvZyh2YWx1ZXMuZW1haWwpXHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuXHRcdGUudGFyZ2V0LmNoaWxkcmVuWzNdLmRpc2FibGVkID0gdHJ1ZTtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdE15U3dhbC5maXJlKHtcclxuXHRcdFx0dGV4dDogJ1VuIG1haWwgZGUgY29uZmlybWF0aW9uIHZvdXMgYSDDqXTDqSBlbnZvecOpJyxcclxuXHRcdFx0dG9hc3Q6IHRydWUsXHJcblx0XHRcdGljb246ICdzdWNjZXNzJyxcclxuXHRcdFx0dGl0bGU6ICdCaWVuIHJlw6d1IScsXHJcblx0XHRcdHBvc2l0aW9uOiAndG9wLXJpZ2h0JyxcclxuXHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG5cdFx0XHR0aW1lcjogMzAwMCxcclxuXHRcdFx0dGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuXHRcdFx0ZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcblx0XHRcdCAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG5cdFx0XHQgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG5cdFx0XHR9XHJcblx0XHQgIH0pO1xyXG5cdFx0Y29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoeyBcImVtYWlsXCI6IHZhbHVlcy5lbWFpbCwgXCJuYW1lXCI6IHZhbHVlcy5uYW1lLCBcIm1lc3NhZ2VcIjogdmFsdWVzLm1lc3NhZ2UsIFwibmV3XCI6IHRydWUgfSksXHJcblx0XHR9O1xyXG5cdFx0Ly8gZmV0Y2goJy9zZW5kZW1haWwnLCByZXF1ZXN0T3B0aW9ucylcclxuXHRcdC8vIFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0ZmV0Y2goYC9zZW5kZW1haWxgLHttZXRob2Q6J1BPU1QnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXCJlbWFpbFwiOiB2YWx1ZXMuZW1haWwsIFwibmFtZVwiOiB2YWx1ZXMubmFtZSwgXCJtZXNzYWdlXCI6IHZhbHVlcy5tZXNzYWdlLCBcIm5ld1wiOiB0cnVlIH0pfSlcclxuXHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0LnRoZW4oXHJcblx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0XHR9XHJcblx0XHQpXHJcblx0fTtcclxuXHRBT1MuaW5pdCgpXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZDFcIiBhbHQ9XCJob21lcGFnZVwiPlxyXG5cclxuXHRcdFx0PHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eUJsdWVcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXIyXCI+XHJcblx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayB0bz1cIi9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvemVuaXRoL2ltYWdlcy9iSU8xcjlGLnBuZ1wiIGFsdD1cIkxvZ29cIiB3aWR0aD17MjAwfSBjbGFzc05hbWU9XCJjZW50ZXJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJlbnQ1Jz5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyMiBkaXZDNFwiID5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cIm1lZGl1bVwiPkNvbnRhY3RleiBOb3VzPC9oMT4gXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9XCJsaWdodFwiPlByw6lzZW50ZXogdm90cmUgcHJvamV0IGV0IGxhaXNzZXotbm91cyB2b3NcclxuXHRcdFx0XHRcdFx0XHRcdFx0aW5mb3JtYXRpb25zIGRlIGNvbnRhY3QuIE5vdXMgcmV2aWVuZHJvbnMgdmVyc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2b3VzIGRhbnMgdW4gZMOpbGFpIGRlIDI0aC48L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtX19ncm91cCBmaWVsZCAgZGl2QzFcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImlucHV0XCIgY2xhc3NOYW1lPVwiZm9ybV9fZmllbGRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiBuYW1lPVwibmFtZVwiIGlkPSduYW1lJyB2YWx1ZT17dmFsdWVzLm5hbWV9b25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSByZXF1aXJlZD48L2lucHV0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxcIj5Wb3RyZSBub208L2xhYmVsPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX2dyb3VwMiBmaWVsZCBkaXZDMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaW5wdXRcIiBjbGFzc05hbWU9XCJmb3JtX19maWVsZFwiIHBsYWNlaG9sZGVyPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD0nZW1haWwnIHZhbHVlPXt2YWx1ZXMuZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gcmVxdWlyZWQgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImZvcm1fX2xhYmVsXCI+Vm90cmUgYWRyZXNzZSBlLW1haWw8L2xhYmVsPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHRhcmVhX19ncm91cCBmaWVsZCBkaXZDM1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSB0eXBlPVwiaW5wdXRcIiBjbGFzc05hbWU9XCJmb3JtX19maWVsZFwiIHBsYWNlaG9sZGVyPVwibWVzc2FnZVwiIG5hbWU9XCJtZXNzYWdlXCIgaWQ9J21lc3NhZ2UnIHZhbHVlPXt2YWx1ZXMubWVzc2FnZX0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSByZXF1aXJlZCAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxcIj5Wb3RyZSBiZXNvaW48L2xhYmVsPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3ttYXJnaW5Ub3A6XCI1MHB4XCJ9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1hcmdpbkJvdHRvbTIgYnRuUyBsaWdodCBsZXR0ZXJTcGFjaW5nTVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRFbnZveWVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiBcclxuLy9tb2RpZmllciBhIHBhcnRpciBkZSBsYSBsaWduZSBcclxuLy8gYWpvdXRlciA8Zm9ybT4gPGZpZWxkPiBldGNcclxuLy8gZnVuY3Rpb24gY29udGFjdCBwYWdlT25lIG5lIGZhaXQgcmllbiBuZSBkZWNsYXJlIHJpZW4gZXRjLi4gXHJcbi8vZGVpZmluaXIgdW4gZXRhdCBkIG9yaWdpbmUgcG91ciBsZXMgem9uZSBkZSB0ZXh0ZSBcclxuLy9ham91dGVyIHVuIGJ1dHRvbiBxdWFuZCBjbGlxdWUgcHJlbmQgbGVzIGluZm9ybWF0aW9uIGRhbnMgbGVzIGNoYW1wcyBcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFBhZ2VPbmU7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIEFjdGlvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIDxkaXZcclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwiIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiXHJcbiAgICAgICAgYWx0PVwiYWN0aW9uXCJcclxuICAgICAgPiAqL31cclxuICAgICAgey8qIDxQYXJhbGxheCBiZ0ltYWdlPVwiL3plbml0aC9pbWFnZXMvYVdFTGhrOEEuanBlZ1wiIHN0cmVuZ3RoPXswfT4gKi99XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiNTBweFwiLCBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL2FXRUxoazhBLmpwZWcpXCIsIGhlaWdodDpcImF1dG9cIiwgcGFkZGluZ0JvdHRvbTogXCIxcHhcIn19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlcjJcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyMlwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdHJlQSBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5TdG9wXCJcclxuICAgICAgICAgICAgICBpZD1cInBhdGNobmF6ZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBQ1RJT05cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImxpZ2h0IGxldHRlclNwYWNpbmdTIHNvdXNUaXRyZVwiPlxyXG4gICAgICAgICAgICAgIFNFIENPTkNFTlRSRVIgU1VSIEzigJlFU1NFTlRJRUwgOiBWT1VTXHJcbiAgICAgICAgICAgIDwvaDY+XHJcblxyXG4gICAgICAgICAgICA8U3dpcGVyIHNsaWRlc1BlclZpZXc9ezN9IHNwYWNlQmV0d2Vlbj17LTEwMH0gY2xhc3NOYW1lPVwic3dpcGVyXCI+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvamV0c1wiIGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3hDYXJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcclxuICAgICAgICAgICAgICAgICAgICAgIFwidXJsKC96ZW5pdGgvaW1hZ2VzL3BleGVscy1hbmRyZWEtcGlhY3F1YWRpby0zNzYwMDkzLmpwZylcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcEZpbHRlcjogXCJibHVyKDVweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dEFjdGlvbjEgbGV0dGVyU3BhY2luZ1MgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENPTlNFSUxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFDQ09NUEFHTkVNRU5UXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMzYwwrBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9wcm9qZXRzXCIgY2xhc3NOYW1lPVwidGV4dERlY29cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveENhcnJlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1cmwoL3plbml0aC9pbWFnZXMvQ09NTS5qcGcpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wRmlsdGVyOiBcImJsdXIoNXB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0QWN0aW9uMSBsZXR0ZXJTcGFjaW5nUyBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ09NTVVOSUNBVElPTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU09MVVRJT05cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTVVItTUVTVVJFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuXHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvamV0c1wiIGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3hDYXJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcclxuICAgICAgICAgICAgICAgICAgICAgIFwidXJsKC96ZW5pdGgvaW1hZ2VzL0VWRU5ULmpwZylcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcEZpbHRlcjogXCJibHVyKDVweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dEFjdGlvbjEgbGV0dGVyU3BhY2luZ1MgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVWRU5UXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBMSVZSQUlTT05cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDTMOJUyBFTiBNQUlOXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuXHJcbiAgICAgICAgICAgIDwvU3dpcGVyPlxyXG5cclxuICAgICAgICAgICAgPGg0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0cmVCIGxpZ2h0IGxldHRlclNwYWNpbmcgY29udGFpbmVyIGNlbnRlciBhY2Nyb2NoZVwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQUdJUiBFVCBSw4lBR0lSIEFWRUMgVk9VU1xyXG4gICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtkb2N1bWVudC5sb2NhdGlvbiA9IFwiL2NsaWVudHMvMVwifX0gY2xhc3NOYW1lPVwiYnRuUyBjZW50ZXIgbGlnaHQgbGV0dGVyU3BhY2luZ00gbWFyZ2luQm90dG9tMlwiPlxyXG4gICAgICAgICAgICAgIEVOIENPTVBSRU5EUkUgK1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgey8qIDwvUGFyYWxsYXg+ICovfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSBcInJlYWN0LXBhcmFsbGF4XCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBDaGlmZnJlcygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuXHQ8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL1oxeklKQ0trLmpwZWdcIiBzdHJlbmd0aD17NDAwfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIC8vIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCIgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJkZW1pYmxvY1wiXHJcbiAgICAgICAgYWx0PVwiY2hpZmZyZXNcIlxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmc2Lm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuICAgICAgICA8L3ZpZGVvPiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbWlibG9jMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmVudDJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjFcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZWRpdW0gY2hpZmZyZXNcIj4yMDE2PC9oMT5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJsaWdodCBjaGlmZnJlczJcIj5BTk7DiUUgREUgQ1JFQVRJT048L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2MlwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1lZGl1bSBjaGlmZnJlc1wiPiszMDA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImxpZ2h0IGNoaWZmcmVzMlwiPkNSw4lBVElPTlMgUEhPVE9TPC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjNcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZWRpdW0gY2hpZmZyZXNcIj4rMTYwPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJsaWdodCBjaGlmZnJlczJcIj5QUk9KRVRTIFLDiUFMSVPDiVM8L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2NFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1lZGl1bSBjaGlmZnJlc1wiPisxNTA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImxpZ2h0IGNoaWZmcmVzMlwiPlLDiUFMSVNBVElPTlMgVklEw4lPUzwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXY1XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWVkaXVtIGNoaWZmcmVzXCI+KzIwMDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibGlnaHQgY2hpZmZyZXMyXCI+Q1LDiUFUSU9OUyBESUdJVEFMRVMgPC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjZcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZWRpdW0gY2hpZmZyZXNcIj4xMDAlPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJsaWdodCBjaGlmZnJlczJcIj5NQURFIElOIEZSQU5DRTwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cdCAgPC9QYXJhbGxheD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoaWZmcmVzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gQ3JlYXRpb24oaXRlbSkge1xyXG4gIGxldCBzbGlkZXIgPSBbXVxyXG4gIGNvbnNvbGUubG9nKGl0ZW0pXHJcbiAgaWYoaXRlbS5pdGVtLmxlbmd0aCA+MCkge1xyXG4gICAgaXRlbS5pdGVtLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xyXG4gICAgICBsZXQgbmV3U2xpZGVyID0gdW5kZWZpbmVkXHJcbiAgICAgIGlmKGVsZW1lbnQuY3JlYXRpb24pe1xyXG4gICAgICAgICAgbmV3U2xpZGVyID0gKFxyXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtlbGVtZW50LmlkfSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj17YC9wcm9qZXQvJHtlbGVtZW50LmlkfWB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5taXNzaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy9pbWFnZXByb2pldC8ke2VsZW1lbnQuY3JlYXRpb259YH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgKTsgICAgICAgICAgICBcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBuZXdTbGlkZXIgPSAoXHJcbiAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2VsZW1lbnQuaWR9IGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPXtgL3Byb2pldC8ke2VsZW1lbnQuaWR9YH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9XHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzAyMTExRFwiLH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5taXNzaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb250YWluXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgKTsgICAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBzbGlkZXIucHVzaChuZXdTbGlkZXIpIFxyXG4gIH0pO1xyXG4gIH1lbHNle1xyXG4gICAgc2xpZGVyID0gKCA8aDEgY2xhc3NOYW1lPVwidGl0cmVBIG1lZGl1bSBsZXR0ZXJTcGFjaW5nIG1hcmdpblN0b3BcIj5yaWVuIGEgdm9pcjwvaDE+IClcclxuICB9XHJcbiAgZnVuY3Rpb24gQmx1ckRldGFpbChlKXtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cig0cHgpXCI7XHJcbiAgICBlLnRhcmdldC5jaGlsZHJlblswXS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIlxyXG4gIH1cclxuICBmdW5jdGlvbiBSZW1vdmVCbHVyRGV0YWlsKGUpe1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gXCJibHVyKDApXCI7XHJcbiAgICBlLnRhcmdldC5jaGlsZHJlblswXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy94OW5lczVWLmpwZylcIn19IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cclxuXHJcbiAgICAgICAgPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZzQubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+ICovfVxyXG4gICAgICB7LyogPEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50NFwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj48L0VsZW1lbnQ+ICovfVxyXG4gICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL1oxeklKQ0trLmpwZWdcIiBzdHJlbmd0aD17ODAwfT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3twYWRkaW5nVG9wOiAnNTBweCd9fT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBkYXRhLWFvcz1cInpvb20taW5cIlxyXG4gICAgICAgICAgZGF0YS1hb3MtbWlycm9yPVwiXCJcclxuICAgICAgICAgIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiXHJcbiAgICAgICAgICBkYXRhLWFvcy1hbmNob3ItcGxhY2VtZW50PVwiXCJcclxuICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyMlwiPlxyXG4gICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRyZUEgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ1LDiUFUSU9OXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxoNlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpZ2h0IGxldHRlclNwYWNpbmdTIHNvdXNUaXRyZVwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgVU5FIEhJU1RPSVJFLiBVTiBFTkpFVS4gVU5FIFLDiVBPTlNFLlxyXG4gICAgICAgICAgICA8L2g2PlxyXG5cclxuICAgICAgICAgICAgPFN3aXBlclxyXG4gICAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzUwMHB4J319XHJcbiAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldz17MX1cclxuICAgICAgICAgICAgICBjZW50ZXJlZFNsaWRlcz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuPXswfVxyXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnRzPXt7XHJcbiAgICAgICAgICAgICAgICA2NDA6IHtcclxuICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAxMDI0OiB7XHJcbiAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDcsXHJcbiAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd2lwZXIyXCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c2xpZGVyfVxyXG4gICAgICAgICAgICAgIHsvKiA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVsxXS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgL3plbml0aC9pbWFnZXMvX0RTQzEzMDAuanBnYH0gYWx0PVwiXCIgLz48L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzJdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy8xSjRBNTAwOSAoMSkuanBnYH0gYWx0PVwiXCIgLz48L2Rpdj4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGUyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDcsOpYXRpb25cIiBvbk1vdXNlT3V0PXsoZSkgPT4gUmVtb3ZlQmx1ckRldGFpbChlKX0gb25Nb3VzZU92ZXI9eyhlKSA9PiBCbHVyRGV0YWlsKGUpfT48ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT48cCBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgd2lkdGg6IFwiMjAwcHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBweFwiLCB0b3A6XCIyMDBweFwifX0+e2l0ZW0uaXRlbVszXS5taXNzaW9ufTwvcD48L2Rpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtgL3plbml0aC9pbWFnZXMvQ2FwdHVyZSBk4oCZw6ljcmFuIDIwMjItMTItMDMgw6AgMjEuMzMuMjkucG5nYH0gYWx0PVwiXCIgLz48L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzRdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy9JTUdfNzQ4Ny5qcGdgfSBhbHQ9XCJcIiAvPjwvZGl2PiAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENyw6lhdGlvblwiIG9uTW91c2VPdXQ9eyhlKSA9PiBSZW1vdmVCbHVyRGV0YWlsKGUpfSBvbk1vdXNlT3Zlcj17KGUpID0+IEJsdXJEZXRhaWwoZSl9PjxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PjxwIHN0eWxlPXt7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGRpc3BsYXk6IFwibm9uZVwiLCB3aWR0aDogXCIyMDBweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiMHB4XCIsIHRvcDpcIjIwMHB4XCJ9fT57aXRlbS5pdGVtWzVdLm1pc3Npb259PC9wPjwvZGl2PjxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9e2AvemVuaXRoL2ltYWdlcy9JTUdfMDAwNC5qcGdgfSBhbHQ9XCJcIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCIgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9IG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX0+PGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+PHAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgZGlzcGxheTogXCJub25lXCIsIHdpZHRoOiBcIjIwMHB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCIwcHhcIiwgdG9wOlwiMjAwcHhcIn19PntpdGVtLml0ZW1bNF0ubWlzc2lvbn08L3A+PC9kaXY+PGltZyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17YC96ZW5pdGgvaW1hZ2VzL0lNR185ODM4LmpwZ2B9IGFsdD1cIlwiIC8+PC9kaXY+ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInN3aXBlclNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q3LDqWF0aW9uXCIgb25Nb3VzZU91dD17KGUpID0+IFJlbW92ZUJsdXJEZXRhaWwoZSl9IG9uTW91c2VPdmVyPXsoZSkgPT4gQmx1ckRldGFpbChlKX0+PGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+PHAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgZGlzcGxheTogXCJub25lXCIsIHdpZHRoOiBcIjIwMHB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCIwcHhcIiwgdG9wOlwiMjAwcHhcIn19PntpdGVtLml0ZW1bNV0ubWlzc2lvbn08L3A+PC9kaXY+PGltZyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IHNyYz17YC96ZW5pdGgvaW1hZ2VzL0RJQV8wNzU5LmpwZ2B9IGFsdD1cIlwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT4gKi99XHJcbiAgICAgICAgICAgIDwvU3dpcGVyPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5cclxuICAgICAgICAgICAgPGg0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0cmVCIGxpZ2h0IGxldHRlclNwYWNpbmcgY29udGFpbmVyIGNlbnRlciBhY2Nyb2NoZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBQUk9QVUxTRVIgTOKAmUlNQUdJTkFJUkUgUExVUyBMT0lOXHJcbiAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXJnaW5Cb3R0b20yIGJ0blMgY2VudGVyIGxpZ2h0IGxldHRlclNwYWNpbmdNXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2pldHMvMVwiIGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcbiAgICAgICAgICAgICAgICAgRMOJQ09VVlJJUiArPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGlvbjtcclxuXHJcbi8vIGNvbnN0IGl0ZW1zID0gWycnLCAnJywgJycsICcnLCAnJywgJycsJycsJycsJycsJycsJycsJycsXVxyXG4vLyBjb25zdCBzZXR0aW5nID0ge1xyXG4vLyAgIGRyYWdTcGVlZDogMC40LFxyXG4vLyAgIGl0ZW1XaWR0aDogMjAwLFxyXG4vLyAgIGl0ZW1IZWlnaHQ6IDQ2NCxcclxuLy8gICBpdGVtU2lkZU9mZnNldHM6IDQwLFxyXG4vLyB9XHJcbi8vIGNvbnN0IGl0ZW1TdHlsZSA9IHtcclxuLy8gICB3aWR0aDogYCR7c2V0dGluZy5pdGVtV2lkdGh9cHhgLFxyXG4vLyAgIGhlaWdodDogYCR7c2V0dGluZy5pdGVtSGVpZ2h0fXB4YCxcclxuLy8gICBtYXJnaW46IGAwcHggJHtzZXR0aW5nLml0ZW1TaWRlT2Zmc2V0c31weGBcclxuLy8gfVxyXG5cclxue1xyXG4gIC8qIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXJDJz5cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWwgX2RhdGE9e2l0ZW1zfSB7Li4uc2V0dGluZ30+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1zLm1hcCgoaSwgX2kpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e19pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpdGVtJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4uaXRlbVN0eWxlIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1wYXJhbGxheCc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBFbW90aW9uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCIgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCJcclxuICAgICAgICBhbHQ9XCLDqW1vdGlvblwiXHJcbiAgICAgID4gKi99XHJcbiAgICAgICAgey8qIDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcyLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuICAgICAgICA8L3ZpZGVvPiAqL31cclxuICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL1oxeklKQ0trLmpwZWdcIiBzdHJlbmd0aD17NDAwfT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17e3BhZGRpbmdUb3A6ICc1MHB4J319PlxyXG4gICAgICAgIDxkaXYgZGF0YS1hb3M9XCJ6b29tLWluXCIgZGF0YS1hb3MtbWlycm9yPVwidHJ1ZVwiZGF0YS1hb3Mtb25jZT1cImZhbHNlXCJkYXRhLWFvcy1hbmNob3ItcGxhY2VtZW50PVwidG9wLWNlbnRlclwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiPiAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyMiBcIj5cclxuICAgICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdHJlQSBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5TdG9wXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIMOJTU9USU9OXHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8aDZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpZ2h0IGxldHRlclNwYWNpbmdTIHNvdXNUaXRyZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBGQUlSRSBWSUJSRVIgTEEgQ09SREUgSU5WSVNJQkxFXHJcbiAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckZsZXggY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveFZpZGVvXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuXHRcdFx0XHRcdDxpZnJhbWUgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgb2JqZWN0Rml0OiAnY292ZXInfX0gc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvRTFURlpXYkIzNk1cIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgZnJhbWVCb3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxoNFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0cmVCIGxpZ2h0IGxldHRlclNwYWNpbmcgY29udGFpbmVyIGNlbnRlciBhY2Nyb2NoZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTVVNDSVRFUiBM4oCZRU1PVElPTiBFTiBVTiBJTlNUQU5UXHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXJnaW5Cb3R0b20yIGJ0blMgY2VudGVyIGxpZ2h0IGxldHRlclNwYWNpbmdNXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBFTiBWT0lSICtcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbW90aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcbmltcG9ydCB3aXRoUmVhY3RDb250ZW50IGZyb20gJ3N3ZWV0YWxlcnQyLXJlYWN0LWNvbnRlbnQnXHJcblxyXG5cclxuZnVuY3Rpb24gRm9vdGVyKCkge1xyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRlbWFpbDogJycsXHJcblx0fSk7XHJcblx0Y29uc3QgTXlTd2FsID0gd2l0aFJlYWN0Q29udGVudChTd2FsKVxyXG5cclxuXHRjb25zdCBoYW5kbGVFbWFpbElucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wZXJzaXN0KCk7XHJcblx0XHRzZXRWYWx1ZXMoKHZhbHVlcykgPT4gKHtcclxuXHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRlbWFpbDogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG5cdFx0XHRcclxuXHRcdH0pKTtcclxuXHRcdGNvbnNvbGUubG9nKHZhbHVlcy5lbWFpbClcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZS50YXJnZXQuY2hpbGRyZW5bMV0uZGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0TXlTd2FsLmZpcmUoXHJcblx0XHRcdCdNZXJjaSEnLFxyXG5cdFx0XHQnVm90cmUgZW1haWwgw6AgYmllbiDDqXTDqSBlbnJlZ2lzdHLDqScsXHJcblx0XHRcdCdzdWNjZXNzJ1xyXG5cdFx0ICApXHJcblx0XHRjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7IFwiZW1haWxcIjogdmFsdWVzLmVtYWlsLCBcIm5ld1wiOiB0cnVlIH0pLFxyXG5cdFx0fTtcclxuXHRcdGZldGNoKCcvYXBpL2VtYWlscycsIHJlcXVlc3RPcHRpb25zKVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0fTtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdCAgICB7LyogPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9ueHNYMG9HYy5qcGVnXCIgc3RyZW5ndGg9ezB9PiAqL31cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy9ueHNYMG9HYy5qcGVnKVwiLCBoZWlnaHQ6XCJhdXRvXCIsIHBhZGRpbmdCb3R0b206IFwiMXB4XCJ9fT5cclxuXHRcdFx0XHQ8ZGl2IGlkPVwiZm9vdGVyXCIgY2xhc3NOYW1lPVwiZGVtaWJsb2NGb290ZXJcIiBhbHQ9XCJmb290ZXJcIj5cclxuICAgICAgXHRcdCAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1pYmxvYzJcIiA+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlTXCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxoMiAgY2xhc3NOYW1lPVwidGl0cmVFIGxpZ2h0IGxldHRlclNwYWNpbmcgbWFyZ2luU3RvcFwiPkVUIFNJIE9OIFNFIExBTsOHQUlUID88L2gyPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bkwgY2VudGVyIGxpZ2h0IGxldHRlclNwYWNpbmdNXCI+XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCIvY29udGFjdFwiIGNsYXNzTmFtZT1cInRleHREZWNvXCI+Q09OVEFDVDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCIgbGlnaHQgbGV0dGVyU3BhY2luZyBjb250YWluZXIgY2VudGVyXCI+RU5TRU1CTEUsIMOJQ1JJVk9OUyBWT1RSRSBISVNUT0lSRTwvaDQ+XHJcblxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50OVwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj48L0VsZW1lbnQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1pYmxvY0Zvb3RlcjJcIiBhbHQ9XCJmb290ZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtaWJsb2MyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFyZW50NFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGl2Q1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJjZW50ZXIgbWItNVwiIHNyYz1cIi96ZW5pdGgvaW1hZ2VzL3dYMkxDSVQucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCIyMjBcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT0ndWwyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyIG10LTMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJmb290ZXJUZXh0IGxpZ2h0IHRleHQtaDVcIj5aRU5JVEg8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J2xpMic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPiBWQUwgROKAmUVVUk9QRSA8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J2xpMic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPkhFTExPQEFHRU5DRVpFTklUSC5DT008L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J2xpMic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPjA2LjExLjg2LjY1LjgwPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkaXZEXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwidGl0cmVEIG1lZGl1bSBsZXR0ZXJTcGFjaW5nIG1hcmdpbkJvdHRvbVwiIHN0eWxlPXt7bWFyZ2luVG9wOlwiMjBweFwifX0+UkVKT0lHTkVaIDxiciAvPiBM4oCZQVZFTlRVUkU8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyczIgY2VudGVyRmxleCBjZW50ZXJcIj5cclxuICAgICAgXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiZmIyXCIgaHJlZj0naHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0FHRU5DRVpFTklUSC8nPjwvYT5cclxuICAgICAgXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiaW5zdGEyXCIgaHJlZj0naHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9hZ2VuY2V6ZW5pdGgvP2hsPWZyJz48L2E+XHJcbiAgICAgIFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImxpbmtlZGluMlwiIGhyZWY9J2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L2FnZW5jZS16ZW5pdGgvJz48L2E+XHJcblx0XHRcdFx0XHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9ID5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cInRpdHJlRCBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5Cb3R0b20gXCI+IE5FV1NMRVRURVI8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRNYWlsIGNlbnRlclwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cImVtYWlsXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNpemU9XCIzMFwiIG5hbWU9XCJlbWFpbFwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dmFsdWVzLmVtYWlsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlRW1haWxJbnB1dENoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ+PC9pbnB1dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkaXZFXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwidGl0cmVDIG1lZGl1bSBsZXR0ZXJTcGFjaW5nXCI+U0lURSBNQVA8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT0ndWwyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+QUNDVUVJTDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGkyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+Q0xJRU5UPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdsaTInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJmb290ZXJUZXh0IGxpZ2h0IHRleHQtaDVcIj5QUk9KRVRTPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdsaTInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJmb290ZXJUZXh0IGxpZ2h0IHRleHQtaDVcIj5DT05UQUNUPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibGlnaHQgZm9vdGVyQ3JlZGl0IGxldHRlclNwYWNpbmdTXCI+wqkgQUdFTkNFIFpFTklUSCAvIFRPVVMgRFJPSVRTIFLDiVNFUlbDiVM8L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgIFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdHsvKiA8L1BhcmFsbGF4PiAqL31cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFPUyBmcm9tIFwiYW9zXCI7XHJcbmltcG9ydCBcImFvcy9kaXN0L2Fvcy5jc3NcIjtcclxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1wYXJhbGxheCc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBIb21lcGFnZSgpIHtcclxuICBBT1MuaW5pdCgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPGRpdiAgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiIGFsdD1cImhvbWVwYWdlXCIgPiAqL31cclxuXHJcbiAgICAgIDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG5cdFx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+IFxyXG4gICAgICB7LyogPFBhcmFsbGF4IGJnSW1hZ2U9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwMjEzNDI0OTEyNi05ZjM3NTVhNTBkNzg/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE0NzAmcT04MFwiIHN0cmVuZ3RoPXs0MDB9PiAqL31cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eUJsdWVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyMlwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlcjJcIj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiODAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi96ZW5pdGgvaW1hZ2VzL2JJTzFyOUYucG5nXCIgYWx0PVwiTG9nb1wiIHdpZHRoPXszMzB9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmJ2aSBjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZW1pYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiODAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGhpblwiPkZBSVRFUzwvc3Bhbj4gQlJJTExFUntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGhpblwiPiBWT1MgPC9zcGFuPklEw4lFU1xyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCI4MDBcIlxyXG4gICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICA8RWxlbWVudCBuYW1lPVwic2Nyb2xsLXRvLWVsZW1lbnQyXCIgY2xhc3NOYW1lPVwiZWxlbWVudFwiPjwvRWxlbWVudD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8L1BhcmFsbGF4PiAqL31cclxuICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1wYXJhbGxheCc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlc2hlZXRzL2J1bG1hL2hlbHBlcnMvc3BhY2luZy5zYXNzXCJcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIEluc3RhZmx1eCgpIHtsZXQgaW5zdGEgPSB1c2VSZWYobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICBzY3JpcHQuc3JjID0gXCJodHRwczovL2Nkbi5saWdodHdpZGdldC5jb20vd2lkZ2V0cy9saWdodHdpZGdldC5qc1wiXHJcbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG5cclxuICB9LCBbXSk7XHJcblxyXG5cclxuXHJcblxyXG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcclxuICB9XHJcblxyXG5cclxuXHRcdHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgey8qIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiIGFsdD1cIiNhZ2VuY2V6ZW5pdGhcIj5cclxuICAgICAgPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZzgubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+ICovfVxyXG4gICAgICAgIDxQYXJhbGxheFxyXG4gICAgICAgICAgYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL1oxeklKQ0trLmpwZWdcIlxyXG4gICAgICAgICAgc3RyZW5ndGg9ezQwMH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGRhdGEtYW9zPVwiem9vbS1pblwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zLW1pcnJvcj1cInRydWVcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcy1hbmNob3ItcGxhY2VtZW50PVwidG9wLWNlbnRlclwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogJzUwcHgnfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyMlwiPlxyXG4gICAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0cmVBIG1lZGl1bSBsZXR0ZXJTcGFjaW5nIG1hcmdpblN0b3BcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgI0FHRU5DRVpFTklUSFxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHJlZj17aW5zdGF9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXJGbGV4XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6XCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwgcGFkZGluZ1RvcDpcIjUwcHhcIn19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlMVwiID48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlMlwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGUzXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PjxwIGNsYXNzTmFtZT1cIklNQUdJTkVSXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+SU1BR0lORVI8L3A+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PjxwIGNsYXNzTmFtZT1cIkNSw4lFUlwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPkNSw4lFUjwvcD48L2Rpdj5cclxuICAgICAgICAgIDxkaXY+PHAgY2xhc3NOYW1lPVwiUsOKVkVSXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+UsOKVkVSPC9wPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdj48cCBjbGFzc05hbWU9XCJFTlNFTUJMRVwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPkVOU0VNQkxFPC9wPjwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlNFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGU1XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTZcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY3RhbmdsZTdcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlOFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGU5XCI+PC9kaXY+IFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWN0YW5nbGUxMFwiPjwvZGl2PiBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlMTFcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlMTJcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlMTNcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlMTRcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjdGFuZ2xlMTVcIj48L2Rpdj4gICovfVxyXG4gICAgICAgICAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvL2xpZ2h0d2lkZ2V0LmNvbS93aWRnZXRzLzUzMGM1OTBjNjZjZjVmZmE4NDRkZWQ3NTFhNmE0Y2Q1Lmh0bWxcIlxyXG4gICAgICAgICAgICAgICAgICBzY3JvbGxpbmc9XCJub1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsbG93dHJhbnNwYXJlbmN5PVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpZ2h0d2lkZ2V0LXdpZGdldFwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6XCI3MCVcIiwgYm9yZGVyOlwiMFwifX1cclxuICAgICAgICAgICAgICAgID48L2lmcmFtZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aDRcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOlwiMTAwcHhcIiwgbWFyZ2luQm90dG9tOlwiNnZoXCJ9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlnaHQgbGV0dGVyU3BhY2luZyBjb250YWluZXIgY2VudGVyIG1hcmdpblRvcFhMXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFVOIFVOSVZFUlMgREUgUE9TU0lCSUxJVEVTXHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1BhcmFsbGF4PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcblx0fVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEluc3RhZmx1eDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBNaW5pRm9vdGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHJcblxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPVwiZGVtaWJsb2NGb290ZXIyXCIgYWx0PVwiZm9vdGVyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbWlibG9jMlwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhcmVudDRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRpdkNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiY2VudGVyXCIgc3JjPVwiL3plbml0aC9pbWFnZXMvd1gyTENJVC5wbmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjIyMFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0aXRyZUMgbGlnaHQgbGV0dGVyU3BhY2luZ1hTXCI+WkVOSVRIIDxiciAvPiBWQUwgROKAmUVVUk9QRSA8YnIgLz4gSEVMTE9AQUdFTkNFWkVOSVRILkNPTSA8YnIgLz4gMDYuMTEuODYuNjUuODAuPC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRpdkRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJ0aXRyZUQgbWVkaXVtIGxldHRlclNwYWNpbmcgbWFyZ2luQm90dG9tXCI+UkVKT0lHTkVaIDxiciAvPiBM4oCZQVZFTlRVUkU8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyczIgY2VudGVyRmxleCBjZW50ZXJcIj5cclxuICAgICAgXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiZmIyXCIgaHJlZj0naHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0FHRU5DRVpFTklUSC8nPjwvYT5cclxuICAgICAgXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiaW5zdGEyXCIgaHJlZj0naHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9hZ2VuY2V6ZW5pdGgvP2hsPWZyJz48L2E+XHJcbiAgICAgIFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImxpbmtlZGluMlwiIGhyZWY9J2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L2FnZW5jZS16ZW5pdGgvJz48L2E+XHJcbiAgICBcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cInRpdHJlRCBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5Cb3R0b20gXCI+TkVXU0xFVFRFUjwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dE1haWwgY2VudGVyXCIgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBhdHRlcm49XCIuK0BnbG9iZXhcXC5jb21cIiBzaXplPVwiMzBcIiByZXF1aXJlZD48L2lucHV0PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRpdkVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJ0aXRyZUMgbWVkaXVtIGxldHRlclNwYWNpbmdcIj5TSVRFIE1BUDwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSd1bDInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPkFDQ1VFSUw8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiZm9vdGVyVGV4dCBsaWdodCB0ZXh0LWg1XCI+UFJPSkVUUzwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJmb290ZXJUZXh0IGxpZ2h0IHRleHQtaDVcIj7DiVFVSVBFPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImZvb3RlclRleHQgbGlnaHQgdGV4dC1oNVwiPkNPTlRBQ1Q8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsaWdodCBmb290ZXJDcmVkaXQgbGV0dGVyU3BhY2luZ1NcIj7CqSBBR0VOQ0UgWkVOSVRIIC8gVE9VUyBEUk9JVFMgUsOJU0VSVsOJUzwvcD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgXHJcblxyXG5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IE1pbmlGb290ZXI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1wYXJhbGxheCc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBTYXRpc2ZhY3Rpb24oKSB7XHJcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBcclxuXHQvLyBSZW1hcnF1ZSA6IGxlIHRhYmxlYXUgdmlkZSBkZSBkw6lwZW5kYW5jZXMgW10gaW5kaXF1ZVxyXG5cdC8vIHF1ZSB1c2VFZmZlY3QgbmUgc+KAmWV4w6ljdXRlcmEgcXXigJl1bmUgZm9pcywgdW4gcGV1IGNvbW1lXHJcblx0Ly8gY29tcG9uZW50RGlkTW91bnQoKVxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0ICBmZXRjaChcIi9hcGkvY2xpZW50c1wiKVxyXG5cdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHQudGhlbihcclxuXHRcdCAgKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0c2V0SXRlbXMocmVzdWx0W1wiaHlkcmE6bWVtYmVyXCJdKTtcclxuXHRcdCAgfSxcclxuXHRcdCAgLy8gUmVtYXJxdWUgOiBpbCBmYXV0IGfDqXJlciBsZXMgZXJyZXVycyBpY2kgcGx1dMO0dCBxdWUgZGFuc1xyXG5cdFx0ICAvLyB1biBibG9jIGNhdGNoKCkgYWZpbiBxdWUgbm91cyBu4oCZYXZhbGlvbnMgcGFzIGxlcyBleGNlcHRpb25zXHJcblx0XHQgIC8vIGR1ZXMgw6AgZGUgdsOpcml0YWJsZXMgYnVncyBkYW5zIGxlcyBjb21wb3NhbnRzLlxyXG5cdFx0ICAoZXJyb3IpID0+IHtcclxuXHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdCAgfVxyXG5cdFx0KVxyXG5cdH0sIFtdKVxyXG4gIFxyXG5cdGlmIChlcnJvcikge1xyXG5cdCAgcmV0dXJuIDxkaXY+RXJyZXVyIDoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG5cdH0gZWxzZSBpZiAoIWlzTG9hZGVkKSB7XHJcblx0ICByZXR1cm4gPGRpdj5DaGFyZ2VtZW50Li4uPC9kaXY+O1xyXG5cdH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZyhpdGVtcyk7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG4gICAgICB7LyogPGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMveDluZXM1Vi5qcGcpXCJ9fSBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XHJcblxyXG4gICAgICA8dmlkZW8gcGxheXNJbmxpbmUgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuXHRcdFx0XHRcdDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnNS5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcblx0XHRcdFx0PC92aWRlbz4gKi99XHJcbiAgICAgIHsvKiA8UGFyYWxsYXggYmdJbWFnZT1cIi96ZW5pdGgvaW1hZ2VzL2FXRUxoazhBLmpwZWdcIiBzdHJlbmd0aD17MH0+ICovfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17e3BhZGRpbmdUb3A6ICc1MHB4JywgYmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy9hV0VMaGs4QS5qcGVnKVwiLCBoZWlnaHQ6XCJhdXRvXCIsIHBhZGRpbmdCb3R0b206IFwiMXB4XCJ9fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlcjJcIj5cclxuXHJcblxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdHJlQSBtZWRpdW0gbGV0dGVyU3BhY2luZyBtYXJnaW5TdG9wXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+U0FUSVNGQUNUSU9OPC9oMT5cclxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0aXRyZUNlbnRlciBsaWdodCBsZXR0ZXJTcGFjaW5nU1wiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPsOKVFJFIMOAIFZPUyBDw5RUw4lTLCBD4oCZRVNUIEFWQU5UIFRPVVQgREVTIFJFTkNPTlRSRVMuPC9oNj5cclxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0aXRyZUNlbnRlciBsaWdodCBsZXR0ZXJTcGFjaW5nUyBwYWRkaW5nQm90dG9tXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+REVTIEhJU1RPSVJFUyBIVU1BSU5FUywgRVhDRVBUSU9OTkVMTEVTLCBPUklHSU5BTEVTLjwvaDY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyTWF4IGNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjg4cHhcIn19IGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL2ltYWdlcy9sb2dvY2xpZW50L1wiK2l0ZW1zWzBdW1wibG9nb1wiXX0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL3plbml0aC9pY29ucy8wYWZkYzdfMmI3MmU4MmE2ODI3NDY5MThlMTVkOWY2N2U5MzdlYjd+bXYyLnBuZ1wifSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvemVuaXRoL2ljb25zLzBhZmRjN180Yzc1ZmQzZjUxOWU0MjIwYmI1ODJkNzdjOGFhN2M4Mn5tdjIucG5nXCJ9IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi96ZW5pdGgvaWNvbnMvMGFmZGM3XzRkNzI1NzkyNGFjNTQ4NWZhNmViOWY4YzNiYThjM2Yyfm12Mi5wbmdcIn0gYWx0PVwiXCIgd2lkdGg9ezcwfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLW9uY2U9XCJmYWxzZVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIGNsYXNzTmFtZT1cImJveFhTXCI+PGltZyBzcmM9e1wiL3plbml0aC9pY29ucy8wYWZkYzdfNjRhNjQwOTQ1NGQxNGQ1Mjg1MGNkNjcyNDg1MDU1NWJ+bXYyLnBuZ1wifSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvemVuaXRoL2ljb25zLzBhZmRjN180MjBhYmNlMGM0N2Q0ZDdlOWU3ZDIxNjYzMDVlYTZiZX5tdjIucG5nXCJ9IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1sxXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1syXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1swXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBzdHlsZT17e21hcmdpblJpZ2h0OlwiODhweFwifX0gY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lck1heCBjZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4OHB4XCJ9fSBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1swXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1sxXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1syXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1swXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1sxXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1swXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1sxXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1syXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1swXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIiBzdHlsZT17e21hcmdpblJpZ2h0OlwiODhweFwifX0gY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lck1heCBjZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjIwMDBcIiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4OHB4XCJ9fSBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1swXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjIwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1sxXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjIwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1syXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjIwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1swXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjIwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1sxXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjIwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1syXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjIwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1sxXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjIwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1syXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjIwMDBcIiBjbGFzc05hbWU9XCJib3hYU1wiPjxpbWcgc3JjPXtcIi9pbWFnZXMvbG9nb2NsaWVudC9cIitpdGVtc1swXVtcImxvZ29cIl19IGFsdD1cIlwiIHdpZHRoPXs3MH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1vbmNlPVwiZmFsc2VcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjIwMDBcIiBzdHlsZT17e21hcmdpblJpZ2h0OlwiODhweFwifX0gY2xhc3NOYW1lPVwiYm94WFNcIj48aW1nIHNyYz17XCIvaW1hZ2VzL2xvZ29jbGllbnQvXCIraXRlbXNbMF1bXCJsb2dvXCJdfSBhbHQ9XCJcIiB3aWR0aD17NzB9IC8+PC9kaXY+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRyZUIgbGlnaHQgbGV0dGVyU3BhY2luZyBjb250YWluZXIgY2VudGVyIGFjY3JvY2hlIG1hcmdpbkJvdHRvbTJcIiBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjZ2aFwifX0gZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCI+TEUgUkVTVEUgT04gTOKAmcOJQ1JJUkEgRU5TRU1CTEU8L2g0PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDwvUGFyYWxsYXg+ICovfVxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFNhdGlzZmFjdGlvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1wYXJhbGxheCc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9hcnJvdy5jc3NcIlxyXG5cclxuZnVuY3Rpb24gVmlzaW9uKCkgIHtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cclxuICAgICAgey8qIDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG5cdFx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmc2Lm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuXHRcdFx0XHQ8L3ZpZGVvPiAqL31cclxuICAgICAgey8qIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPSdiYWNrZ3JvdW5kJz4gKi99XHJcblxyXG4gICAgICB7LyogPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9hV0VMaGs4QS5qcGVnXCIgc3RyZW5ndGg9ezB9PiAqL31cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3twYWRkaW5nVG9wOiAnNTBweCcsIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMvYVdFTGhrOEEuanBlZylcIiwgaGVpZ2h0OlwiYXV0b1wiLCBwYWRkaW5nQm90dG9tOiBcIjFweFwifX0+XHJcbiAgICAgIDxkaXYgZGF0YS1hb3M9XCJ6b29tLWluXCIgZGF0YS1hb3MtbWlycm9yPVwidHJ1ZVwiZGF0YS1hb3Mtb25jZT1cImZhbHNlXCJkYXRhLWFvcy1hbmNob3ItcGxhY2VtZW50PVwidG9wLWNlbnRlclwiZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCIgc3R5bGU9e3toZWlnaHQ6XCI4NTBweFwifX0+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0cmVBIG1lZGl1bSBsZXR0ZXJTcGFjaW5nIG1hcmdpblN0b3BcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5WSVNJT048L2gxPlxyXG4gICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImxpZ2h0IGxldHRlclNwYWNpbmdTIHNvdXNUaXRyZVwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPlVORSBSRU5DT05UUkUgUVVJIENIQU5HRSBUT1VUPC9oNj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlclwiPlxyXG4gICAgICAgICAgICA8U3dpcGVyXHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9ezF9XHJcbiAgICAgICAgICAgIGNlbnRlcmVkU2xpZGVzPXt0cnVlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzd2lwZXIzXCJcclxuICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzd2lwZXJTbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJfX2NvbnRlbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyZW50M1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzaW9uQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgb2JqZWN0Rml0OiAnY292ZXInfX1zcmM9XCJodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhL2JiNWUzYl9hMTA1MjM5YmZkMTg0OGI0ODkyOTM5ZDg3OThjZDY1N35tdjIuanBnL3YxL2Nyb3AveF8xMDkseV8wLHdfNzM0LGhfOTAwL2ZpbGwvd18yNzAsaF8zNDgsYWxfYyxxXzgwLHVzbV8xLjIwXzEuMDBfMC4wMSxlbmNfYXV0by9iYjVlM2JfYTEwNTIzOWJmZDE4NDhiNDg5MjkzOWQ4Nzk4Y2Q2NTd+bXYyLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidmlzaW9uVGV4dDIgbWVkaXVtXCI+TUFUSElTPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5DT05TRUlMPC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+TsOJR09DSUFUSU9OPC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+w4lWw4lORU1FTlRJRUw8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5HRVNUSU9OIERFIFBST0pFVDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkRJUkVDVElPTiBBUlRJU1RJUVVFPC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+RElSRUNUSU9OIEQnRVhQTE9JVEFUSU9OPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5Ew4lWRUxPUFBFTUVOVCBDT01NRVJDSUFMIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cImFycm93XCIgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsIHRvcDpcIjUwJVwiLCBsZWZ0OlwiNzUlXCIsIHdpZHRoOlwiMTAwcHhcIn19IHNyYz1cIi96ZW5pdGgvaW1hZ2VzL2Fycm93cy1yaWdodC5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic3dpcGVyU2xpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyX19jb250ZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmVudDNcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBpZD1cImFycm93MlwiIHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCB0b3A6XCI1MCVcIiwgbGVmdDpcIjAlXCIsIHdpZHRoOlwiMTAwcHhcIn19IHNyYz1cIi96ZW5pdGgvaW1hZ2VzL2Fycm93cy1yaWdodC5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXNpb25Cb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBvYmplY3RGaXQ6ICdjb3Zlcid9fXNyYz1cImh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvOTRiMjU1Xzc0ODg1ZDM3NGNmODQyMTQ4OTljOWRmNjBkNjUzNjM4fm12Mi5qcGcvdjEvZmlsbC93XzI4NCxoXzM3MSxhbF9jLHFfODAsdXNtXzEuMjBfMS4wMF8wLjAxLGVuY19hdXRvL0FWQVRBUiUyMFJPTiUyMEIuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ2aXNpb25UZXh0MiBtZWRpdW1cIj5ST048L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkNPTlNFSUw8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5Ow4lHT0NJQVRJT048L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj7DiVbDiU5FTUVOVElFTDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkdFU1RJT04gREUgUFJPSkVUPC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlzaW9uVGV4dCBsaWdodCB0ZXh0LWg0XCI+RElSRUNUSU9OIEFSVElTVElRVUU8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aXNpb25UZXh0IGxpZ2h0IHRleHQtaDRcIj5ESVJFQ1RJT04gRCdFWFBMT0lUQVRJT048L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpc2lvblRleHQgbGlnaHQgdGV4dC1oNFwiPkTDiVZFTE9QUEVNRU5UIENPTU1FUkNJQUwgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICA8L1N3aXBlcj5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIHsvKiA8L1BhcmFsbGF4PiAqL31cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgVmlzaW9uOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQgTWFycXVlZSBmcm9tIFwicmVhY3QtZmFzdC1tYXJxdWVlXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tIFwicmVhY3QtcGFyYWxsYXhcIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzaGVldHMvYnVsbWEvaGVscGVycy9zcGFjaW5nLnNhc3NcIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCI7XHJcblxyXG5jb25zdCBXb3JkcGFnZSA9ICh7fSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy82V3ZlbW0zSy5qcGVnXCIgc3RyZW5ndGg9ezB9PiAqL31cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzLzZXdmVtbTNLLmpwZWcpXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiNTcwcHhcIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImRlbWlibG9jXCJcclxuICAgICAgICBhbHQ9XCJ3b3JkcGFnZVwiXHJcbiAgICAgID5cclxuICAgICAgICB7LyogPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+ICovfVxyXG4gICAgICAgIHsvKiA8c291cmNlIHNyYz1cIi96ZW5pdGgvdmlkZW8vdmlkZW9iZzQubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPiAqL31cclxuICAgICAgICB7LyogPC92aWRlbz4gKi99XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgYWx0PVwiTGlzdGUgZGUgbW90c1wiIHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBkYXRhLWFvcz1cInpvb20taW5cIlxyXG4gICAgICAgICAgICBkYXRhLWFvcy1taXJyb3I9XCJ0cnVlXCJcclxuICAgICAgICAgICAgZGF0YS1hb3Mtb25jZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCJcclxuICAgICAgICAgICAgZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudD1cInRvcC1jZW50ZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmVudFwiPlxyXG4gICAgICAgICAgICAgIDxNYXJxdWVlXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE3MHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgZ3JhZGllbnQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3b3JkcGFnZSBsZXR0ZXJTcGFjaW5nIGxpZ2h0IGdyaWQxIHB4LTZcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIndvcmRwYWdlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgUsOJQUNUSVZJVMOJXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1hcmdpbiBtZWRpdW0gd29yZHBhZ2VUZXh0IGdyaWQyIHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2UgbGV0dGVyU3BhY2luZyBvdXRsaW5lIG5vcm1hbCBncmlkMyBweC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIFBST1hJTUlUw4lcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIG1hcmdpbiBtZWRpdW0gd29yZHBhZ2VUZXh0IG91dGxpbmUgZ3JpZDQgcHItNVwiPsK3PC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3b3JkcGFnZSBsaWdodCBsZXR0ZXJTcGFjaW5nIGdyaWQ1IHB4LTZcIj5QQVNTSU9OPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0ICBtZWRpdW0gZ3JpZDYgcHItNVwiPsK3PC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3b3JkcGFnZSBub3JtYWwgb3V0bGluZSBsZXR0ZXJTcGFjaW5nIGdyaWQ3IHB4LTZcIj5cclxuICAgICAgICAgICAgICAgICAgU1RSQVTDiUdJRVxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG91dGxpbmUgbWVkaXVtIGdyaWQ2IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgPC9NYXJxdWVlPlxyXG4gICAgICAgICAgICAgIDxNYXJxdWVlXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE3MHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPXtcInJpZ2h0XCJ9XHJcbiAgICAgICAgICAgICAgICBncmFkaWVudD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndvcmRwYWdlIG5vcm1hbCBsZXR0ZXJTcGFjaW5nIGdyaWQ5IHB4LTZcIj5FVkVOVDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBtZWRpdW0gZ3JpZDEwIHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2UgbWFycm9uIG5vcm1hbCBsZXR0ZXJTcGFjaW5nIGdyaWQxMSBweC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIFpFTklUSFxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG91dGxpbmUgbWVkaXVtIGdyaWQxMiBwci01XCI+wrc8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndvcmRwYWdlIG5vcm1hbCBsZXR0ZXJTcGFjaW5nIGdyaWQxMyBweC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIENPTlNFSUxcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBtZWRpdW0gZ3JpZDE0IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2Ugbm9ybWFsIGxldHRlclNwYWNpbmcgZ3JpZDE1IHB4LTZcIj5cclxuICAgICAgICAgICAgICAgICAgQ09NTVVOSUNBVElPTlxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG91dGxpbmUgbWVkaXVtIGdyaWQ2IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgPC9NYXJxdWVlPlxyXG4gICAgICAgICAgICAgIDxNYXJxdWVlXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE3MHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgZ3JhZGllbnQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3b3JkcGFnZSBtZWRpdW0gbGV0dGVyU3BhY2luZyBncmlkMTcgcHgtNlwiPlxyXG4gICAgICAgICAgICAgICAgICBDUsOJQVRJVklUw4lcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBtZWRpdW0gZ3JpZDE4IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2UgbGlnaHQgb3V0bGluZSBsZXR0ZXJTcGFjaW5nIGdyaWQxOSBweC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIFLDilZFUlxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG91dGxpbmUgbWVkaXVtIGdyaWQyMCBwci01XCI+wrc8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndvcmRwYWdlIGxpZ2h0IGxldHRlclNwYWNpbmcgZ3JpZDIxIHB4LTZcIj5cclxuICAgICAgICAgICAgICAgICAgQU1CSVRJT05cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHdvcmRwYWdlVGV4dCBtZWRpdW0gZ3JpZDIyIHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZHBhZ2Ugb3V0bGluZSBub3JtYWwgbGV0dGVyU3BhY2luZyBncmlkMjMgcHgtNlwiPlxyXG4gICAgICAgICAgICAgICAgICBJTUFHSU5BVElPTlxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgd29yZHBhZ2VUZXh0IG91dGxpbmUgbWVkaXVtIGdyaWQ2IHByLTVcIj7CtzwvaDE+XHJcbiAgICAgICAgICAgICAgPC9NYXJxdWVlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDwvUGFyYWxsYXg+ICovfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmRwYWdlO1xyXG4iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL19uYXZiYXInO1xyXG5pbXBvcnQgUHJvamVjdFBhZ2VPbmUgZnJvbSBcIi4vX3Byb2plY3RwYWdlT25lXCI7XHJcbmltcG9ydCBQcm9qZWN0cGFnZVR3byBmcm9tICcuL19wcm9qZWN0cGFnZVR3byc7XHJcbmltcG9ydCBQcm9qZWN0cGFnZVRocmVlIGZyb20gJy4vX3Byb2plY3RwYWdlVGhyZWUnO1xyXG5pbXBvcnQgUHJvamVjdHBhZ2VGb3VyIGZyb20gJy4vX3Byb2plY3RwYWdlRm91cic7XHJcbmltcG9ydCBQcm9qZWN0cGFnZUZpdmUgZnJvbSAnLi9fcHJvamVjdHBhZ2VGaXZlJztcclxuaW1wb3J0IFByb2plY3RwYWdlU2l4IGZyb20gJy4vX3Byb2plY3RwYWdlU2l4JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0cGFnZSgpIHtcclxuXHRjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZEltZywgc2V0SXNMb2FkZWRJbWddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZE5leHRQcmV2LCBzZXRJc0xvYWRlZE5leHRQcmV2XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNJbWdSZWFkeSwgc2V0SW1nUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbcHJlY2ksIHNldFByZWNpXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbc2Vjb25kLCBzZXRTZWNvbmRdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbTmV4dFByZXYsIHNldE5leHRQcmV2XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRpZihpZCl7XHJcblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0XHRmZXRjaChgL2FwaS9wcm9qZXRzLyR7aWR9YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRJdGVtcyhyZXN1bHQpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cclxuXHRcdFx0ZmV0Y2goYC9nZXRJbWFnZXNQcm9qZXQvJHtpZH1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdGltZykgPT4ge1xyXG5cdFx0XHRcdGxldCB0aGlzUmVzID0gSlNPTi5wYXJzZShyZXN1bHRpbWcpXHJcblx0XHRcdFx0c2V0SXNMb2FkZWRJbWcodHJ1ZSk7XHJcblx0XHRcdFx0c2V0SW1hZ2VzKEpTT04ucGFyc2UocmVzdWx0aW1nKSk7XHJcblx0XHRcdFx0aWYoIHRoaXNSZXMgPT0gXCJbXVwiIHx8IHRoaXNSZXMubGVuZ3RoID09IDApe1xyXG5cdFx0XHRcdFx0c2V0SW1nUmVhZHkodHJ1ZSlcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZih0aGlzUmVzKXtcclxuXHRcdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzUmVzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpc1Jlc1tpXSlcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coaSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlc1tpXS5oZWFkZXIpXHJcblx0XHRcdFx0XHRcdFx0c2V0SGVhZGVyKHRoaXNSZXNbaV0pXHJcblx0XHRcdFx0XHRcdGlmKHRoaXNSZXNbaV0uZm9jdXMpXHJcblx0XHRcdFx0XHRcdFx0c2V0UHJlY2kodGhpc1Jlc1tpXSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlc1tpXS5zZWNvbmRhaXJlKVxyXG5cdFx0XHRcdFx0XHRcdHNldFNlY29uZCh0aGlzUmVzW2ldKVxyXG5cdFx0XHRcdFx0XHQvLyBpZihpbWFnZXNbaV0udmlzaWJsZSlcclxuXHRcdFx0XHRcdFx0Ly8gXHRzZXREaXNwbGF5KC4uLmltYWdlc1tpXSlcclxuXHRcdFx0XHRcdFx0aWYodGhpc1Jlcy5sZW5ndGgtMSA9PSBpKXtcclxuXHRcdFx0XHRcdFx0XHRzZXRJbWdSZWFkeSh0cnVlKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHJcblx0XHRcdGZldGNoKGAvTmV4UHJldlAvJHtpZH1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdGxldCBOZXh0ID0gSlNPTi5wYXJzZShyZXN1bHRbMF0pXHJcblx0XHRcdFx0bGV0IFByZXYgPSBKU09OLnBhcnNlKHJlc3VsdFsxXSlcclxuXHRcdFx0XHRpZihOZXh0ICYmIFByZXYpe1xyXG5cdFx0XHRcdFx0c2V0TmV4dFByZXYoW05leHQsIFByZXZdKTtcclxuXHRcdFx0XHRcdGlmKE5leHRQcmV2KXtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coTmV4dFByZXYpXHJcblx0XHRcdFx0XHRcdHNldElzTG9hZGVkTmV4dFByZXYodHJ1ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdH0sIFtdKVxyXG5cdH1cclxuXHJcblx0aWYgKGVycm9yKSB7XHJcblx0XHQgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuXHQgIH0gZWxzZSBpZiAoIWlzTG9hZGVkIHx8ICFpc0ltZ1JlYWR5IHx8ICFpc0xvYWRlZE5leHRQcmV2KSB7XHJcblx0XHRyZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG5cdCAgfSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICggXHJcblx0XHRcdFx0PD5cclxuXHRcdFx0XHQ8TmF2YmFyPjwvTmF2YmFyPlxyXG5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8UHJvamVjdFBhZ2VPbmUgZGF0YT17aXRlbXN9PjwvUHJvamVjdFBhZ2VPbmU+XHJcblx0XHRcdFx0PFByb2plY3RwYWdlVHdvIGRhdGE9e2l0ZW1zfT48L1Byb2plY3RwYWdlVHdvPlxyXG5cdFx0XHRcdDxQcm9qZWN0cGFnZVRocmVlIGRhdGE9e3NlY29uZH0+PC9Qcm9qZWN0cGFnZVRocmVlPlxyXG5cdFx0XHRcdDxQcm9qZWN0cGFnZUZvdXIgcHJlY2k9e3ByZWNpfSBkYXRhMj17aXRlbXN9PjwvUHJvamVjdHBhZ2VGb3VyPlxyXG5cdFx0XHRcdDxQcm9qZWN0cGFnZUZpdmUgaW1hZ2VzPXtpbWFnZXN9PjwvUHJvamVjdHBhZ2VGaXZlPlxyXG5cdFx0XHRcdDxQcm9qZWN0cGFnZVNpeCBkYXRhPXtpdGVtc30gbnA9e05leHRQcmV2fT48L1Byb2plY3RwYWdlU2l4PlxyXG5cdFx0XHRcdDwvPlxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuLy9cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHBhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gXCJyZWFjdC1wYXJhbGxheFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlc2hlZXRzL2J1bG1hL2VsZW1lbnRzL2NvbnRhaW5lci5zYXNzXCJcclxuaW1wb3J0IExpZ2h0Ym94IGZyb20gXCJ5ZXQtYW5vdGhlci1yZWFjdC1saWdodGJveFwiO1xyXG5pbXBvcnQgVGh1bWJuYWlscyBmcm9tIFwieWV0LWFub3RoZXItcmVhY3QtbGlnaHRib3gvcGx1Z2lucy90aHVtYm5haWxzXCI7XHJcbmltcG9ydCBcInlldC1hbm90aGVyLXJlYWN0LWxpZ2h0Ym94L3BsdWdpbnMvdGh1bWJuYWlscy5jc3NcIjtcclxuaW1wb3J0IFwieWV0LWFub3RoZXItcmVhY3QtbGlnaHRib3gvc3R5bGVzLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gUHJvamVjdHBhZ2VGaXZlKGltYWdlcykge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBsZXQgYXJyYXlJbWFnZSA9IFtdXHJcbiAgY29uc29sZS5sb2coaW1hZ2VzLmltYWdlcyk7XHJcbiAgaW1hZ2VzLmltYWdlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgbGV0IGl0ZW0gPSB7IHNyYzogYC9pbWFnZXMvaW1hZ2Vwcm9qZXQvJHtlbGVtZW50LmltYWdlfWB9XHJcbiAgICBhcnJheUltYWdlLnB1c2goaXRlbSlcclxuICB9KTtcclxuXHJcbiAgaWYoYXJyYXlJbWFnZS5sZW5ndGg+MCl7XHJcbiAgY29uc29sZS5sb2coYXJyYXlJbWFnZSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvemVuaXRoL2ltYWdlcy9aMXpJSkNLay5qcGVnXCIgc3RyZW5ndGg9ezgwMH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwiLCBkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCJ9fT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1jZW50ZXJlZFwiIHN0eWxlPXt7aGVpZ2h0OlwiOTAlXCIsd2lkdGg6XCI4MCVcIiwgcGFkZGluZ1RvcDpcIjUwcHhcIn19PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS10aGlyZFwiIHN0eWxlPXt7YmFja2dyb3VuZDpcIiMwMjExMURcIiwgcGFkZGluZzpcIjBcIiwgcGFkZGluZzpcIjBcIn19PlxyXG4gICAgICAgICAgICAgIHtpbWFnZXMuaW1hZ2VzWzBdID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzpcIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL2ltYWdlcHJvamV0L1wiICsgaW1hZ2VzLmltYWdlc1swXS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKSA6ICg8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCB3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiMTAwJVwifX0+PGltZyBzdHlsZT17e3dpZHRoOlwiNTAlXCJ9fSBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn0gYWx0PVwiXCIvPjwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS10aGlyZCBjb2x1bW5zIGlzLW11bHRpbGluZSBteC01XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1mdWxsIG15LTVcIiBzdHlsZT17e2JhY2tncm91bmQ6XCIjMDIxMTFEXCIsIHBhZGRpbmc6XCIwXCJ9fT4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7aW1hZ2VzLmltYWdlc1sxXSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOlwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL2ltYWdlcHJvamV0L1wiICsgaW1hZ2VzLmltYWdlc1sxXS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6ICg8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCB3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiMTAwJVwifX0+PGltZyBzdHlsZT17e3dpZHRoOlwiNTAlXCJ9fSBzcmM9e1wiL3plbml0aC9hdXRyZS9ub0ltZy5wbmdcIn0gYWx0PVwiXCIvPjwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1mdWxsIG15LTVcIiBzdHlsZT17e2JhY2tncm91bmQ6XCIjMDIxMTFEXCIsIHBhZGRpbmc6XCIwXCJ9fT4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtpbWFnZXMuaW1hZ2VzWzJdID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzpcIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvaW1hZ2Vwcm9qZXQvXCIgKyBpbWFnZXMuaW1hZ2VzWzJdLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIHdpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT48aW1nIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19IHNyYz17XCIvemVuaXRoL2F1dHJlL25vSW1nLnBuZ1wifSBhbHQ9XCJcIi8+PC9kaXY+KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtb25lLXRoaXJkIGlzLW1vYmlsZVwiIHN0eWxlPXt7YmFja2dyb3VuZDpcIiMwMjExMURcIiwgcGFkZGluZzpcIjBcIn19PlxyXG4gICAgICAgICAgICAgIHtpbWFnZXMuaW1hZ2VzWzNdID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvaW1hZ2Vwcm9qZXQvXCIgKyBpbWFnZXMuaW1hZ2VzWzNdLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIHdpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT48aW1nIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19IHNyYz17XCIvemVuaXRoL2F1dHJlL25vSW1nLnBuZ1wifSBhbHQ9XCJcIi8+PC9kaXY+KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW1vYmlsZSBpcy1jZW50ZXJlZCBtdC01LWZ1bGxoZFwiIHN0eWxlPXt7cG9zaXRpb246IFwiYWJzb2x1dGVcIiwgYm90dG9tOlwiMjVweFwiLCB3aWR0aDpcIjEwMSVcIn19PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0T3Blbih0cnVlKX0gY2xhc3NOYW1lPVwiYnRuUyBjZW50ZXIgbGlnaHQgbGV0dGVyU3BhY2luZ00gbWItNiBtdC0wXCI+XHJcbiAgICAgICAgICAgICAgICBFTiBWT0lSICtcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgICAgIDxMaWdodGJveFxyXG4gICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgY2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgIHBsdWdpbnM9e1tUaHVtYm5haWxzXX1cclxuICAgICAgICAgICAgICBzbGlkZXM9e2FycmF5SW1hZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1BhcmFsbGF4PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cGFnZUZpdmU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gUHJvamVjdHBhZ2VGb3VyKHtwcmVjaSwgZGF0YTJ9KSB7XHJcblx0Y29uc29sZS5sb2cocHJlY2kpXHJcblx0aWYoZGF0YTIuZm9jdXMpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoL3plbml0aC9pbWFnZXMvNld2ZW1tM0suanBlZylcIiwgaGVpZ2h0OiBcIjExMDBweFwifX0gY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlx0XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPScnc3R5bGU9e3sgaGVpZ2h0OiBcIjExMDBweFwifX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3dyYXBwZXIyJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXJDZW50ZXJBJz5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyZW50MjEgbWFyZ2luVG9wJz5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYXJnaW5Ub3AyJyA+XHJcblx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nbGlnaHQgbGV0dGVyU3BhY2luZ1MnPkZvY3VzPC9oMz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGlnaHQgY29udGFpbmVyQ2VudGVyQ2xpZW50IHRleHQtaDUnIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnfX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YTIuZm9jdXN9fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nIGJveENsaWVudCcgc3R5bGU9e3toZWlnaHQ6ICc4MDBweCcsIHdpZHRoOlwiNjAwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHRcdHtwcmVjaS5pbWFnZSA/ICg8aW1nIGNsYXNzTmFtZT0nIGNvbnRhaW4nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gc3JjPXtcIi9pbWFnZXMvaW1hZ2Vwcm9qZXQvXCIgKyBwcmVjaS5pbWFnZX0gYWx0PVwiXCIvPikgOiAoPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgd2lkdGg6XCIxMDAlXCIsIGhlaWdodDpcIjEwMCVcIn19PjxpbWcgc3R5bGU9e3t3aWR0aDpcIjUwJVwifX0gc3JjPXtcIi96ZW5pdGgvYXV0cmUvbm9JbWcucG5nXCJ9IGFsdD1cIlwiLz48L2Rpdj4pfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHRcdFxyXG5cclxuXHJcblxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH19XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHBhZ2VGb3VyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0cGFnZU9uZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZDFcIiBhbHQ9XCJob21lcGFnZVwiPlxyXG5cclxuXHRcdFx0PHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eUJsdWVcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXIyXCI+XHJcblx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi96ZW5pdGgvaW1hZ2VzL2JJTzFyOUYucG5nXCIgYWx0PVwiTG9nb1wiIHdpZHRoPXsyMDB9IGNsYXNzTmFtZT1cImNlbnRlclwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlx0XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsaWVudHBhZ2VUZXh0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cIm1lZGl1bSBtYXJnaW5TdG9wIGNsaWVudERldGFpbFwiPntkYXRhLmRhdGEucHJvamV0fTwvaDE+XHJcblx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT1cImxpZ2h0IG1hcmdpblN0b3AgY2xpZW50RGV0YWlsXCI+e2RhdGEuZGF0YS5zZWN0ZXVyLnNlY3RldXJ9PC9oNj5cclxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLmNsaWVudCA/IDxwIGNsYXNzTmFtZT1cImxpZ2h0IG1hcmdpblN0b3AgY2xpZW50RGV0YWlsXCI+VU4gUFJPSkVUIFBPVVIgOiB7ZGF0YS5kYXRhLmNsaWVudC5ub21DbGllbnR9PC9wPiA6ICA8cCBjbGFzc05hbWU9XCJsaWdodCBtYXJnaW5TdG9wIGNsaWVudERldGFpbFwiPlVOIFBST0pFVCBQT1VSIDogTi9BPC9wPn1cclxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5kYXRhLmR1cmVlID8gPHAgY2xhc3NOYW1lPVwibGlnaHQgY2xpZW50RGV0YWlsXCI+RFVSw4lFIFBST0pFVCA6IHtkYXRhLmRhdGEuZHVyZWV9PC9wPiA6IDxwIGNsYXNzTmFtZT1cImxpZ2h0IGNsaWVudERldGFpbFwiPkRVUsOJRSBQUk9KRVQgOiBOL0E8L3A+fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayB0bz17YC9zZWFyY2hjYXQvJHtkYXRhLmRhdGEuY2F0ZWdvcmllWzBdLmlkfS8ke2RhdGEuZGF0YS5jYXRlZ29yaWVbMF0uY2F0ZWdvcmllfWB9PjxwIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmVcIiwgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSd9fSBjbGFzc05hbWU9XCJsaWdodCBjbGllbnREZXRhaWwyXCI+e2RhdGEuZGF0YS5jYXRlZ29yaWVbMF0uY2F0ZWdvcmllfTwvcD48L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PHAgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZVwifX0gY2xhc3NOYW1lPVwibGlnaHQgY2xpZW50RGV0YWlsMlwiPiAgIHwgICA8L3A+XHJcblx0XHRcdFx0XHRcdFx0e2RhdGEuZGF0YS5jYXRlZ29yaWVbMV0gJiYgPExpbmsgdG89e2Avc2VhcmNoY2F0LyR7ZGF0YS5kYXRhLmNhdGVnb3JpZVsxXS5pZH0vJHtkYXRhLmRhdGEuY2F0ZWdvcmllWzBdLmNhdGVnb3JpZX1gfSA+PHAgY2xhc3NOYW1lPVwibGlnaHQgY2xpZW50RGV0YWlsMlwiIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmVcIiwgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSd9fT57ZGF0YS5kYXRhLmNhdGVnb3JpZVsxXS5jYXRlZ29yaWV9PC9wPjwvTGluaz59XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXIzXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PGg0IHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnfX0gY2xhc3NOYW1lPVwibGlnaHQgbGV0dGVyU3BhY2luZ1MgIGRpc2NvdmVyQ2xpZW50MlwiPntkYXRhLmRhdGEubWlzc2lvbn08L2g0PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibGlnaHQgIGRpc2NvdmVyQ2xpZW50XCI+RMOJQ09VVlJFWjwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmVDbGllbnRcIiA+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RwYWdlT25lO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIFByb2plY3RwYWdlU2l4KHtkYXRhLCBucH0pIHtcclxuXHRpZihucFswXSl7XHJcblx0XHRpZihucFswXVswXSA9PSAnbnVsbCcpXHJcblx0XHRcdG5wWzBdWzBdID0gZmFsc2U7XHJcblx0XHRpZihucFswXVsxXSA9PSAnbnVsbCcpXHJcblx0XHRcdG5wWzFdWzBdID0gZmFsc2U7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvemVuaXRoL2ltYWdlcy82V3ZlbW0zSy5qcGVnKVwifX0gY2xhc3NOYW1lPSdkZW1pYmxvY09wYWNpdHknPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyQ2VudGVyIG1hcmdpblRvcFMnIHN0eWxlPXt7bWFyZ2luVG9wOlwiMFwifX0+XHJcblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J21lZGl1bSBjZW50ZXJUZXh0Jz5VTiBUw4lNT0lHTkFHRTwvaDQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsaWdodCBjZW50ZXJUZXh0JyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLnRlbW9pZ25hZ2V9fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzL3g5bmVzNVYuanBnKVwifX0gY2xhc3NOYW1lPSdkZW1pYmxvY0NsaWVudCc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGVtaWJsb2NPcGFjaXR5Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmVudENsaWVudE5leHRQcmV2Jz5cclxuXHJcblx0XHRcdFx0XHRcdFx0e25wWzFdWzBdICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nQ2xpZW50TmV4dFByZXYxJyBvbkNsaWNrPXsoKT0+e2xvY2F0aW9uLmhyZWYgPSBcIi9wcm9qZXQvXCIrIG5wWzFdWzBdLmlkfX0gc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9J2xpZ2h0IHJpZ2h0VGV4dCBtYXJnaW5Ub3BTJz5QUk9KRVQgUFLDiUPDiURFTlQ8L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPSdyaWdodFRleHQnPntucFsxXVswXS5wcm9qZXR9PC9oNT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT0nbGlnaHQgcmlnaHRUZXh0Jz57bnBbMV1bMF0ubWlzc2lvbn08L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+fVxyXG5cclxuXHRcdFx0XHRcdFx0XHR7bnBbMF1bMF0gJiYgPGRpdiBjbGFzc05hbWU9J0NsaWVudE5leHRQcmV2Micgb25DbGljaz17KCk9Pntsb2NhdGlvbi5ocmVmID0gXCIvcHJvamV0L1wiKyBucFswXVswXS5pZH19IHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPSdsaWdodCBsZWZ0VGV4dCBtYXJnaW5Ub3BTJz5QUk9KRVQgU1VJVkFOVDwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9J2xlZnRUZXh0Jz57bnBbMF1bMF0ucHJvamV0fTwvaDU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9J2xpZ2h0IGxlZnRUZXh0Jz57bnBbMF1bMF0ubWlzc2lvbn08L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+fVxyXG5cdFx0XHRcdFx0XHRcdHsvKiA8YSBocmVmPXtcIi9jbGllbnQvXCIrbnBbMV1bMF0uaWR9PiAqL31cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RwYWdlU2l4OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gUHJvamVjdHBhZ2VUaHJlZShkYXRhKSB7XHJcblx0Y29uc29sZS5sb2coZGF0YSlcclxuXHRpZihkYXRhLmxlbmd0aCA+IDApe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlckRhcmtCbHVlQ2xpZW50JyBzdHlsZT17e2hlaWdodDpcIjgwMHB4XCIsIHdpZHRoOlwiMTAwJVwifX0+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz17XCIvaW1hZ2VzL2ltYWdlcHJvamV0L1wiICsgZGF0YS5kYXRhLmltYWdlfSBhbHQ9XCJcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiB9XHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RwYWdlVGhyZWU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0cGFnZVR3byhkYXRhKSB7XHJcblx0aWYoZGF0YS5kYXRhLmRlbWFuZGUgfHwgZGF0YS5kYXRhLmRlZmkgfHwgZGF0YS5kYXRhLmFjdGlvbil7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC96ZW5pdGgvaW1hZ2VzLzZXdmVtbTNLLmpwZWcpXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIn19IGNsYXNzTmFtZT0nZGVtaWJsb2NDbGllbnQnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbHVtbnMnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbnMgaXMtY2VudGVyZWQgaXMtMTEgaXMtb2Zmc2V0LTEnPlxyXG5cdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuZGVtYW5kZSAmJlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gaXMtY2VudGVyZWQgaXMtNCcgc3R5bGU9e3ttYXJnaW5Ub3A6XCI0OHB4XCIsIG1hcmdpblJpZ2h0OlwiYXV0b1wiLCBtYXJnaW5MZWZ0OlwiYXV0b1wifX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdsaWdodCc+VU5FIERFTUFOREU8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOlwiMTA1JVwifX0gY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQgcHgtNidkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLmRhdGEuZGVtYW5kZX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PiBcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuZGVmaSAmJlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gaXMtY2VudGVyZWQgaXMtNCcgc3R5bGU9e3ttYXJnaW5Ub3A6XCI0OHB4XCIsIG1hcmdpblJpZ2h0OlwiYXV0b1wiLCBtYXJnaW5MZWZ0OlwiYXV0b1wifX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdsaWdodCc+VU4gRMOJRkk8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOlwiMTA1JVwifX0gY2xhc3NOYW1lPSdsaWdodCBjb250YWluZXJDZW50ZXJDbGllbnQgY29sdW1ucyBpcy12Y2VudGVyZWQgaXMtY2VudGVyZWQgcHgtNicgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGF0YS5kYXRhLmRlZml9fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdHtkYXRhLmRhdGEuYWN0aW9uICYmXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbHVtbiBpcy1jZW50ZXJlZCBpcy00JyAgc3R5bGU9e3ttYXJnaW5Ub3A6XCI0OHB4XCIsIG1hcmdpblJpZ2h0OlwiYXV0b1wiLCBtYXJnaW5MZWZ0OlwiYXV0b1wifX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdsaWdodCc+VU5FIEFDVElPTjwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDUlXCJ9fSBjbGFzc05hbWU9J2xpZ2h0IGNvbnRhaW5lckNlbnRlckNsaWVudCBjb2x1bW5zIGlzLXZjZW50ZXJlZCBpcy1jZW50ZXJlZCBweC02JyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpkYXRhLmRhdGEuYWN0aW9ufX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuXHR9XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHBhZ2VUd287XHJcbiIsImltcG9ydCBTZWFyY2hQYWdlT25lMiBmcm9tIFwiLi9fU2VhcmNoUGFnZU9uZTJcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9fbmF2YmFyJztcclxuaW1wb3J0IFJzQnV0dG9uIGZyb20gJy4uL19yc0J1dHRvbic7XHJcbmltcG9ydCBMaW5lc1RvcCBmcm9tICcuLi9fbGluZXNUb3AnO1xyXG5pbXBvcnQgTGluZXNCb3R0b20gZnJvbSAnLi4vX2xpbmVzQm90dG9tJztcclxuaW1wb3J0IFNlYXJjaFBhZ2VUd28yIGZyb20gXCIuL19TZWFyY2hQYWdlVHdvMlwiO1xyXG5pbXBvcnQgTWluaUZvb3RlciBmcm9tIFwiLi4vSG9tZXBhZ2UvX21pbmlGb290ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIFNlYXJjaFBhZ2UyKCkge1xyXG5cdGNvbnN0IHsgaW5mbyB9ID0gdXNlUGFyYW1zKCk7XHJcblx0Y29uc3QgeyBuYW1lIH0gPSB1c2VQYXJhbXMoKTtcclxuXHRjb25zdCB7IHR5cGUgfSA9IHVzZVBhcmFtcygpO1xyXG5cdGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzTG9hZGVkSW1nLCBzZXRJc0xvYWRlZEltZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzTG9hZGVkTmV4dFByZXYsIHNldElzTG9hZGVkTmV4dFByZXZdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0ltZ1JlYWR5LCBzZXRJbWdSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbaGVhZGVyLCBzZXRIZWFkZXJdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtwcmVjaSwgc2V0UHJlY2ldID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtzZWNvbmQsIHNldFNlY29uZF0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtOZXh0UHJldiwgc2V0TmV4dFByZXZdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRcdHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG5cdFx0XHRmZXRjaChgL2dldHNlYXJjaGNhdC8ke2luZm99LyR7dHlwZX1gLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdHNldEl0ZW1zKHJlc3VsdCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHRcdC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0XHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHR9LCBbXSlcdFx0XHJcblxyXG5cclxuXHJcblx0aWYgKGVycm9yKSB7XHJcblx0XHQgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuXHQgIH0gZWxzZSBpZiAoIWlzTG9hZGVkICkge1xyXG5cdFx0cmV0dXJuIDxkaXY+ZGJmZ2JmZy4uLjwvZGl2PjtcclxuXHQgIH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAoICBcclxuXHRcdDw+XHJcblx0XHQ8TmF2YmFyPjwvTmF2YmFyPlxyXG5cdFx0PFJzQnV0dG9uPjwvUnNCdXR0b24+XHJcblx0XHQ8TGluZXNUb3A+PC9MaW5lc1RvcD5cclxuXHRcdDxMaW5lc0JvdHRvbT48L0xpbmVzQm90dG9tPlxyXG5cdFx0XHJcblx0XHQ8U2VhcmNoUGFnZU9uZTIgZGF0YSA9IHtuYW1lfT48L1NlYXJjaFBhZ2VPbmUyPlxyXG5cdFx0PFNlYXJjaFBhZ2VUd28yIGRhdGE9e2l0ZW1zfT48L1NlYXJjaFBhZ2VUd28yPlxyXG5cdFx0ey8qIDxXb3JrcGFnZVRocmVlPjwvV29ya3BhZ2VUaHJlZT5cclxuXHRcdDxXb3JrcGFnZUZvdXI+PC9Xb3JrcGFnZUZvdXI+XHJcblx0XHQ8V29ya3BhZ2VGaXZlPjwvV29ya3BhZ2VGaXZlPiovfVxyXG5cdFx0PE1pbmlGb290ZXI+PC9NaW5pRm9vdGVyPiBcclxuXHRcdDwvPlxyXG5cdCApO1xyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFnZTI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gU2VhcmNoUGFnZU9uZTIoZGF0YSkge1xyXG5cdGNvbnNvbGUubG9nKGRhdGEpXHJcblx0QU9TLmluaXQoKVxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQxXCIgYWx0PVwiaG9tZXBhZ2VcIj5cclxuXHJcblx0XHRcdDx2aWRlbyBwbGF5c0lubGluZSBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG5cdFx0XHRcdDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuXHRcdFx0PC92aWRlbz5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5Qmx1ZVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlcjJcIj5cclxuXHRcdFx0XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2VudGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCIvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi96ZW5pdGgvaW1hZ2VzL2JJTzFyOUYucG5nXCIgYWx0PVwiTG9nb1wiIHdpZHRoPXsyMDB9IGNsYXNzTmFtZT1cImNlbnRlclwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlx0XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3b3JrcGFnZVRleHRcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwibWVkaXVtXCI+UkVTVUxUQVQgUE9VUiBcIntkYXRhLmRhdGF9XCI8L2gxPlxyXG5cdFx0XHRcdFx0XHRcdHsvKiA8cCBjbGFzc05hbWU9XCJsaWdodFwiPkxPR08uIFdFQiBERVNJR04uIENBVEVHT1JJRTwvcD4gKi99XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFnZU9uZTI7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSBcInJlYWN0LXBhcmFsbGF4XCI7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hQYWdlVHdvMihkYXRhKSB7XHJcblx0Y29uc3QgeyB0eXBlIH0gPSB1c2VQYXJhbXMoKTtcclxuXHQvLyBjb25zb2xlLmxvZyhjb3VudClcclxuXHQvLyBsZXQgcGFnZU5iciA9IE1hdGguY2VpbChjb3VudCAvIDIwKVxyXG5cdC8vIGxldCBuYnIgPSBwYXJzZUludChwYWdlKVxyXG5cdC8vIGZ1bmN0aW9uIG9uQ2hhbmdlKHBhcmFtcykge1xyXG5cdC8vICAgZG9jdW1lbnQubG9jYXRpb24gPSBgL3Byb2pldHMvJHtwYXJhbXN9YFxyXG5cdC8vIH1cclxuICBcclxuXHRsZXQgYm94ID0gW107XHJcblx0aWYodHlwZSA9PSBcInByb2pldFwiKXtcclxuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmRhdGEubGVuZ3RoOyBpbmRleCsrKSB7XHJcblx0XHRcdGxldCBpdGVtID0gKFxyXG5cdFx0XHQgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY29sdW1uIGNvbHVtbnMgaXMtb25lLWZpZnRoIGlzLWNlbnRlcmVkXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpcy1oYWxmXCI+XHJcblx0XHRcdFx0PGEgaHJlZj17XCIvcHJvamV0L1wiICsgZGF0YS5kYXRhW2luZGV4XS5pZH0+XHJcblx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPlxyXG5cdFx0XHRcdFx0PHAgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9fSBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiPlxyXG5cdFx0XHRcdFx0ICB7ZGF0YS5kYXRhW2luZGV4XS5wcm9qZXR9XHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHQgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuXHRcdFx0XHRcdCAgc3JjPXtcIi9pbWFnZXMvaW1hZ2Vwcm9qZXQvXCIgKyBkYXRhLmRhdGFbaW5kZXhdLmhlYWRlcn1cclxuXHRcdFx0XHRcdCAgYWx0PVwiXCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdCk7XHJcblx0XHRcdGJveC5wdXNoKGl0ZW0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRpZih0eXBlID09IFwiY2xpZW50XCIpe1xyXG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGEuZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdFx0bGV0IGl0ZW0gPSAoXHJcblx0XHRcdCAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjb2x1bW4gY29sdW1ucyBpcy1vbmUtZmlmdGggaXMtY2VudGVyZWRcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlzLWhhbGZcIj5cclxuXHRcdFx0XHQ8YSBocmVmPXtcIi9wcm9qZXQvXCIgKyBkYXRhLmRhdGFbaW5kZXhdLmlkfT5cclxuXHRcdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+XHJcblx0XHRcdFx0XHQ8cCBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiIH19IGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcblx0XHRcdFx0XHQgIHtkYXRhLmRhdGFbaW5kZXhdLm5vbUNsaWVudH1cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdCAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxyXG5cdFx0XHRcdFx0ICBzcmM9e1wiL2ltYWdlcy9pbWFnZXByb2pldC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaGVhZGVyfVxyXG5cdFx0XHRcdFx0ICBhbHQ9XCJcIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0KTtcclxuXHRcdFx0Ym94LnB1c2goaXRlbSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRcclxuXHRyZXR1cm4gKFxyXG5cdCAgPD5cclxuXHQgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL3plbml0aC9pbWFnZXMvWjF6SUpDS2suanBlZ1wiIGJsdXI9e3sgbWluOiAtMSwgbWF4OiAzIH19IHN0cmVuZ3RoPXs0MDB9PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJwdC02XCIgc3R5bGU9e3twYWRkaW5nQm90dG9tOlwiODBweFwifX0gYWx0PVwiYWN0aW9uXCI+XHJcblx0XHQgIDxkaXYgY2xhc3NOYW1lPVwicHQtNlwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG5cdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tdWx0aWxpbmUgaXMtY2VudGVyZWRcIj5cclxuXHRcdFx0XHR7Ym94fVxyXG5cdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHQgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbW9iaWxlIGlzLWNlbnRlcmVkXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTUwcHhcIn19PiAgICAgICAgICAgIFxyXG5cdFx0XHRcdDxQYWdpbmF0aW9uXHJcblx0XHRcdFx0ICBjdXJyZW50PXtuYnJ9XHJcblx0XHRcdFx0ICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcblx0XHRcdFx0ICBwYWdlU2l6ZT17MX1cclxuXHRcdFx0XHQgIHRvdGFsPXtwYWdlTmJyfVxyXG5cdFx0XHRcdCAgc2hvd1RpdGxlPXtmYWxzZX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQgIDwvZGl2PiAgICovfVxyXG5cdFx0XHQgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bkwgY2VudGVyIGxpZ2h0IGxldHRlclNwYWNpbmdNXCI+XHJcblx0XHRcdFx0PExpbmsgdG89XCIvY29udGFjdFwiIGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcblx0XHRcdFx0ICBWb2lyIHBsdXNcclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdCAgPC9idXR0b24+ICovfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCAgPC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQgIDwvUGFyYWxsYXg+XHJcblx0ICA8Lz5cclxuXHQpO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFnZVR3bzI7IiwiaW1wb3J0IFNlYXJjaFBhZ2VPbmUgZnJvbSBcIi4vX1NlYXJjaFBhZ2VPbmVcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9fbmF2YmFyJztcclxuaW1wb3J0IFJzQnV0dG9uIGZyb20gJy4uL19yc0J1dHRvbic7XHJcbmltcG9ydCBMaW5lc1RvcCBmcm9tICcuLi9fbGluZXNUb3AnO1xyXG5pbXBvcnQgTGluZXNCb3R0b20gZnJvbSAnLi4vX2xpbmVzQm90dG9tJztcclxuaW1wb3J0IFNlYXJjaFBhZ2VUd28gZnJvbSBcIi4vX1NlYXJjaFBhZ2VUd29cIjtcclxuaW1wb3J0IE1pbmlGb290ZXIgZnJvbSBcIi4uL0hvbWVwYWdlL19taW5pRm9vdGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBTZWFyY2hQYWdlKCkge1xyXG5cdGNvbnN0IHsgaW5mbyB9ID0gdXNlUGFyYW1zKCk7XHJcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNMb2FkZWRJbWcsIHNldElzTG9hZGVkSW1nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNMb2FkZWROZXh0UHJldiwgc2V0SXNMb2FkZWROZXh0UHJldl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzSW1nUmVhZHksIHNldEltZ1JlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtoZWFkZXIsIHNldEhlYWRlcl0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW3ByZWNpLCBzZXRQcmVjaV0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW3NlY29uZCwgc2V0U2Vjb25kXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW05leHRQcmV2LCBzZXROZXh0UHJldl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdFx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coaW5mbylcclxuXHRcdFx0ZmV0Y2goYC9nZXRTZWFyY2gvJHtpbmZvfWAse21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0XHQudGhlbihcclxuXHRcdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0c2V0SXRlbXMocmVzdWx0KTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cdFx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdH0sIFtdKVx0XHRcclxuXHJcblxyXG5cclxuXHRpZiAoZXJyb3IpIHtcclxuXHRcdCByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG5cdCAgfSBlbHNlIGlmICghaXNMb2FkZWQgKSB7XHJcblx0XHRyZXR1cm4gPGRpdj5kYmZnYmZnLi4uPC9kaXY+O1xyXG5cdCAgfSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICggIFxyXG5cdFx0PD5cclxuXHRcdDxOYXZiYXI+PC9OYXZiYXI+XHJcblx0XHQ8UnNCdXR0b24+PC9Sc0J1dHRvbj5cclxuXHRcdDxMaW5lc1RvcD48L0xpbmVzVG9wPlxyXG5cdFx0PExpbmVzQm90dG9tPjwvTGluZXNCb3R0b20+XHJcblx0XHRcclxuXHRcdDxTZWFyY2hQYWdlT25lIGRhdGEgPSB7aW5mb30+PC9TZWFyY2hQYWdlT25lPlxyXG5cdFx0PFNlYXJjaFBhZ2VUd28gZGF0YT17aXRlbXN9PjwvU2VhcmNoUGFnZVR3bz5cclxuXHRcdHsvKiA8V29ya3BhZ2VUaHJlZT48L1dvcmtwYWdlVGhyZWU+XHJcblx0XHQ8V29ya3BhZ2VGb3VyPjwvV29ya3BhZ2VGb3VyPlxyXG5cdFx0PFdvcmtwYWdlRml2ZT48L1dvcmtwYWdlRml2ZT4qL31cclxuXHRcdDxNaW5pRm9vdGVyPjwvTWluaUZvb3Rlcj4gXHJcblx0XHQ8Lz5cclxuXHQgKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFBhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gU2VhcmNoUGFnZU9uZShkYXRhKSB7XHJcblx0Y29uc29sZS5sb2coZGF0YSlcclxuXHRBT1MuaW5pdCgpXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZDFcIiBhbHQ9XCJob21lcGFnZVwiPlxyXG5cclxuXHRcdFx0PHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHQ8L3ZpZGVvPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHlCbHVlXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyMlwiPlxyXG5cdFx0XHRcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayB0bz1cIi9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL3plbml0aC9pbWFnZXMvYklPMXI5Ri5wbmdcIiBhbHQ9XCJMb2dvXCIgd2lkdGg9ezIwMH0gY2xhc3NOYW1lPVwiY2VudGVyXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHRcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndvcmtwYWdlVGV4dFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJtZWRpdW1cIj5SRVNVTFRBVCBQT1VSIFwie2RhdGEuZGF0YX1cIjwvaDE+XHJcblx0XHRcdFx0XHRcdFx0ey8qIDxwIGNsYXNzTmFtZT1cImxpZ2h0XCI+TE9HTy4gV0VCIERFU0lHTi4gQ0FURUdPUklFPC9wPiAqL31cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlT25lO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gXCJyZWFjdC1wYXJhbGxheFwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gU2VhcmNoUGFnZVR3byhkYXRhKSB7XHJcblx0Ly8gY29uc29sZS5sb2coY291bnQpXHJcblx0Ly8gbGV0IHBhZ2VOYnIgPSBNYXRoLmNlaWwoY291bnQgLyAyMClcclxuXHQvLyBsZXQgbmJyID0gcGFyc2VJbnQocGFnZSlcclxuXHQvLyBmdW5jdGlvbiBvbkNoYW5nZShwYXJhbXMpIHtcclxuXHQvLyAgIGRvY3VtZW50LmxvY2F0aW9uID0gYC9wcm9qZXRzLyR7cGFyYW1zfWBcclxuXHQvLyB9XHJcbiAgXHJcblx0bGV0IGJveCA9IFtdO1xyXG5cdGlmKGRhdGEuZGF0YS5sZW5ndGggPiAwKXtcclxuXHJcblx0XHJcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5kYXRhLmxlbmd0aDsgaW5kZXgrKykge1xyXG5cdFx0XHRsZXQgaXRlbSA9IChcclxuXHRcdFx0ICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNvbHVtbiBjb2x1bW5zIGlzLW9uZS1maWZ0aCBpcy1jZW50ZXJlZFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXMtaGFsZlwiPlxyXG5cdFx0XHRcdDxhIGhyZWY9e1wiL3Byb2pldC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaWR9PlxyXG5cdFx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj5cclxuXHRcdFx0XHRcdDxwIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIgfX0gY2xhc3NOYW1lPVwidGV4dERlY29cIj5cclxuXHRcdFx0XHRcdCAge2RhdGEuZGF0YVtpbmRleF0ubWlzc2lvbn1cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdCAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxyXG5cdFx0XHRcdFx0ICBzcmM9e1wiL2ltYWdlcy9pbWFnZXByb2pldC9cIiArIGRhdGEuZGF0YVtpbmRleF0uaGVhZGVyfVxyXG5cdFx0XHRcdFx0ICBhbHQ9XCJcIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0KTtcclxuXHRcdFx0Ym94LnB1c2goaXRlbSk7XHJcblx0XHR9XHJcblx0fWVsc2V7XHJcblx0XHRib3ggPSAoPHA+VnJhaW1lbnQgZMOpc29sw6ksIG5vdXMgbidhdm9ucyByaWVuIHRyb3V2w6kgOmM8L3A+KVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRcclxuXHRyZXR1cm4gKFxyXG5cdCAgPD5cclxuXHQgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL3plbml0aC9pbWFnZXMvWjF6SUpDS2suanBlZ1wiIGJsdXI9e3sgbWluOiAtMSwgbWF4OiAzIH19IHN0cmVuZ3RoPXs0MDB9PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJwdC02XCIgc3R5bGU9e3twYWRkaW5nQm90dG9tOlwiODBweFwifX0gYWx0PVwiYWN0aW9uXCI+XHJcblx0XHQgIDxkaXYgY2xhc3NOYW1lPVwicHQtNlwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG5cdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tdWx0aWxpbmUgaXMtY2VudGVyZWRcIj5cclxuXHRcdFx0XHR7Ym94fVxyXG5cdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHQgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbW9iaWxlIGlzLWNlbnRlcmVkXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTUwcHhcIn19PiAgICAgICAgICAgIFxyXG5cdFx0XHRcdDxQYWdpbmF0aW9uXHJcblx0XHRcdFx0ICBjdXJyZW50PXtuYnJ9XHJcblx0XHRcdFx0ICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcblx0XHRcdFx0ICBwYWdlU2l6ZT17MX1cclxuXHRcdFx0XHQgIHRvdGFsPXtwYWdlTmJyfVxyXG5cdFx0XHRcdCAgc2hvd1RpdGxlPXtmYWxzZX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQgIDwvZGl2PiAgICovfVxyXG5cdFx0XHQgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bkwgY2VudGVyIGxpZ2h0IGxldHRlclNwYWNpbmdNXCI+XHJcblx0XHRcdFx0PExpbmsgdG89XCIvY29udGFjdFwiIGNsYXNzTmFtZT1cInRleHREZWNvXCI+XHJcblx0XHRcdFx0ICBWb2lyIHBsdXNcclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdCAgPC9idXR0b24+ICovfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCAgPC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQgIDwvUGFyYWxsYXg+XHJcblx0ICA8Lz5cclxuXHQpO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFnZVR3bzsiLCJpbXBvcnQgV29ya3BhZ2VDbGllbnRPbmUgZnJvbSAnLi9fd29ya3BhZ2VDbGllbnRPbmUnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL19uYXZiYXInO1xyXG5pbXBvcnQgUnNCdXR0b24gZnJvbSAnLi4vX3JzQnV0dG9uJztcclxuaW1wb3J0IExpbmVzVG9wIGZyb20gJy4uL19saW5lc1RvcCc7XHJcbmltcG9ydCBMaW5lc0JvdHRvbSBmcm9tICcuLi9fbGluZXNCb3R0b20nO1xyXG5pbXBvcnQgV29ya3BhZ2VDbGllbnRUd28gZnJvbSAnLi9fd29ya3BhZ2VDbGllbnRUd28nO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIFdvcmtwYWdlQ2xpZW50KCkge1xyXG5cdGNvbnN0IHsgbmJyIH0gPSB1c2VQYXJhbXMoKTtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0NvdW50TG9hZGVkLCBzZXRJc0NvdW50TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNDYXRMb2FkZWQsIHNldElzQ2F0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNMb2FkZWROZXh0UHJldiwgc2V0SXNMb2FkZWROZXh0UHJldl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzSW1nUmVhZHksIHNldEltZ1JlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbY2F0LCBzZXRDYXRdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoW10pO1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG5cdFx0ZmV0Y2goYC9nZXR0QWxsQ2xpZW50LyR7bmJyfWAse21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdC50aGVuKFxyXG5cdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdHNldEl0ZW1zKHJlc3VsdCk7XHJcblx0XHRcdHNldElzTG9hZGVkKHRydWUpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9XHJcblx0XHQpXHJcblxyXG5cdFx0ZmV0Y2goYC9nZXRDb3VudC9jbGllbnRgLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHQudGhlbihcclxuXHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRzZXRDb3VudChyZXN1bHQpO1xyXG5cdFx0XHRzZXRJc0NvdW50TG9hZGVkKHRydWUpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG5cdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0c2V0SXNDb3VudExvYWRlZCh0cnVlKTtcclxuXHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH1cclxuXHRcdClcclxuXHRcdGZldGNoKGAvYXBpL2NhdGVnb3JpZXNgLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHQudGhlbihcclxuXHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRzZXRDYXQocmVzdWx0KTtcclxuXHRcdFx0c2V0SXNDYXRMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRzZXRJc0NvdW50TG9hZGVkKHRydWUpO1xyXG5cdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fVxyXG5cdFx0KVxyXG5cdH0sIFtdKVxyXG5cclxuXHRpZiAoZXJyb3IpIHtcclxuXHRcdCByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG5cdCAgfSBlbHNlIGlmICghaXNMb2FkZWQgKSB7XHJcblx0XHRyZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG5cdCAgfSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICggIFxyXG5cdFx0PD5cclxuXHRcdDxOYXZiYXI+PC9OYXZiYXI+XHJcblx0XHQ8UnNCdXR0b24+PC9Sc0J1dHRvbj5cclxuXHRcdDxMaW5lc1RvcD48L0xpbmVzVG9wPlxyXG5cdFx0PExpbmVzQm90dG9tPjwvTGluZXNCb3R0b20+XHJcblx0XHRcclxuXHRcdDxXb3JrcGFnZUNsaWVudE9uZSBjYXQ9e2NhdH0+PC9Xb3JrcGFnZUNsaWVudE9uZT5cclxuXHRcdDxXb3JrcGFnZUNsaWVudFR3byBkYXRhPXtpdGVtc30gcGFnZT17bmJyfSBjb3VudD17Y291bnR9PjwvV29ya3BhZ2VDbGllbnRUd28+XHJcblx0XHR7LyogPFdvcmtwYWdlVGhyZWU+PC9Xb3JrcGFnZVRocmVlPlxyXG5cdFx0PFdvcmtwYWdlRm91cj48L1dvcmtwYWdlRm91cj5cclxuXHRcdDxXb3JrcGFnZUZpdmU+PC9Xb3JrcGFnZUZpdmU+XHJcblx0XHQ8TWluaUZvb3Rlcj48L01pbmlGb290ZXI+ICovfVxyXG5cdFx0PC8+XHJcblx0ICk7XHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBXb3JrcGFnZUNsaWVudDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQU9TIGZyb20gXCJhb3NcIjtcclxuaW1wb3J0IFwiYW9zL2Rpc3QvYW9zLmNzc1wiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTWVudSwgTWVudUl0ZW0sIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgQXJyb3dGb3J3YXJkSW9zU2hhcnBJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkSW9zU2hhcnAnO1xyXG5pbXBvcnQgTXVpQWNjb3JkaW9uLCB7IEFjY29yZGlvblByb3BzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9BY2NvcmRpb24nO1xyXG5pbXBvcnQgTXVpQWNjb3JkaW9uU3VtbWFyeSwge1xyXG4gIEFjY29yZGlvblN1bW1hcnlQcm9wcyxcclxufSBmcm9tICdAbXVpL21hdGVyaWFsL0FjY29yZGlvblN1bW1hcnknO1xyXG5pbXBvcnQgTXVpQWNjb3JkaW9uRGV0YWlscyBmcm9tICdAbXVpL21hdGVyaWFsL0FjY29yZGlvbkRldGFpbHMnO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5jb25zdCBBY2NvcmRpb24gPSBzdHlsZWQoKHByb3BzKSA9PiAoXHJcbiAgPE11aUFjY29yZGlvbiBkaXNhYmxlR3V0dGVycyBlbGV2YXRpb249ezB9IHNxdWFyZSB7Li4ucHJvcHN9IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgbWF4V2lkdGg6IFwiMTg1cHhcIixcclxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwwKVwiLFxyXG4gIGNvbG9yOiBcIndoaXRlXCIsXHJcbn0pKTtcclxuXHJcbmNvbnN0IEFjY29yZGlvblN1bW1hcnkgPSBzdHlsZWQoKHByb3BzKSA9PiAoXHJcbiAgPE11aUFjY29yZGlvblN1bW1hcnlcclxuICAgIGV4cGFuZEljb249ezxBcnJvd0ZvcndhcmRJb3NTaGFycEljb24gc3g9e3sgZm9udFNpemU6IFwiMC45cmVtXCIgfX0gLz59XHJcblx0ey4uLnByb3BzfVxyXG4gIC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgY29sb3I6IFwid2hpdGVcIixcclxuICBiYWNrZ3JvdW5kQ29sb3I6XHJcbiAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwiZGFybFwiXHJcbiAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIC4wNSlcIlxyXG4gICAgICA6IFwicmdiYSgwLCAwLCAwLCAuMDMpXCIsXHJcbiAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICBcIiYgLk11aUFjY29yZGlvblN1bW1hcnktZXhwYW5kSWNvbldyYXBwZXIuTXVpLWV4cGFuZGVkXCI6IHtcclxuICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoOTBkZWcpXCIsXHJcbiAgfSxcclxuICBcIiYgLk11aUFjY29yZGlvblN1bW1hcnktY29udGVudFwiOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEFjY29yZGlvbkRldGFpbHMgPSBzdHlsZWQoTXVpQWNjb3JkaW9uRGV0YWlscykoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIHBhZGRpbmdUb3A6IDAsXHJcbiAgbWFyZ2luVG9wOiAwLFxyXG4gIG1heEhlaWdodDogXCIxNTBweFwiLFxyXG4gIG92ZXJmbG93OiBcInNjcm9sbFwiLFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBXb3JrcGFnZUNsaWVudE9uZShjYXQpIHtcclxuXHRjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IFJlYWN0LnVzZVN0YXRlKFwicGFuZWwxXCIpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAocGFuZWwpID0+IChldmVudCwgbmV3RXhwYW5kZWQpID0+IHtcclxuXHQgIHNldEV4cGFuZGVkKG5ld0V4cGFuZGVkID8gcGFuZWwgOiBmYWxzZSk7XHJcblx0fTtcclxuICBcclxuXHRjb25zdCBbd29yZHMsIHNldFdvcmRzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRsZXQgY2F0ZWdvcnkgPSBjYXQuY2F0O1xyXG5cdGxldCBtZW51ID0gW107XHJcblx0bGV0IHJhbmRvbVdvcmQgPSBbXHJcblx0ICBcIlLDiUFDVElWSVTDiVwiLFxyXG5cdCAgXCJQUk9YSU1JVMOJXCIsXHJcblx0ICBcIlBBU1NJT05cIixcclxuXHQgIFwiU1RSQVTDiUdJRVwiLFxyXG5cdCAgXCJFVkVOVFwiLFxyXG5cdCAgXCJDT05TRUlMXCIsXHJcblx0ICBcIkNPTU1VTklDQVRJT05cIixcclxuXHQgIFwiUsOKVkVSXCIsXHJcblx0ICBcIkFNQklUSU9OXCIsXHJcblx0ICBcIklNQUdJTkFUSU9OXCIsXHJcblx0ICBcImFnaXJcIixcclxuXHQgIFwicydhZGFwdGVyXCIsXHJcblx0ICBcImFudGljaXBlclwiLFxyXG5cdCAgXCJhdXRvbm9taWVcIixcclxuXHQgIFwiY3JvaXNzYW5jZVwiLFxyXG5cdCAgXCJkw6lmaVwiLFxyXG5cdCAgXCJwbGFuaWZpZXJcIixcclxuXHQgIFwicG9zaXRpdmVyXCIsXHJcblx0ICBcImRpc3BvbmliaWxpdMOpXCIsXHJcblx0ICBcImR5bmFtaXNtZVwiLFxyXG5cdCAgXCLDqWNvdXRlXCIsXHJcblx0ICBcInNlcnZpY2VcIixcclxuXHQgIFwicHLDqXZpc2lvblwiLFxyXG5cdCAgXCJ0w6luYWNpdMOpXCIsXHJcblx0ICBcInF1YWxpdMOpXCIsXHJcblx0ICBcIm1vYmlsaXNlclwiLFxyXG5cdCAgXCJuw6lnb2NpZXJcIixcclxuXHQgIFwib2JqZWN0aWZzXCIsXHJcblx0ICBcIm9wdGltaXNlclwiLFxyXG5cdCAgXCJjaGFsbGVuZ2VcIixcclxuXHQgIFwicsOpdXNzaXJcIixcclxuXHQgIFwiZXhjZWxsZW5jZVwiLFxyXG5cdCAgXCJyw6lhbGlzZXJcIixcclxuXHQgIFwicsOpc3VsdGF0c1wiLFxyXG5cdCAgXCJkw6l2ZWxvcHBlclwiLFxyXG5cdCAgXCJzYXZvaXJmYWlyZVwiLFxyXG5cdCAgXCJkaWFsb2d1ZVwiLFxyXG5cdCAgXCJwcsOpdm9pclwiLFxyXG5cdCAgXCJzeW5lcmdpZVwiLFxyXG5cdCAgXCJwcm9qZXRcIixcclxuXHQgIFwiaW5ub3ZhdGlvblwiLFxyXG5cdCAgXCJtb3RpdmF0aW9uXCJdO1xyXG4gIFxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0ICBmdW5jdGlvbiBnZXRXb3JkKCkge1xyXG5cdFx0bGV0IHdvcmQgPSByYW5kb21Xb3JkW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmRvbVdvcmQubGVuZ3RoKV07XHJcblx0XHRyYW5kb21Xb3JkLnNwbGljZShyYW5kb21Xb3JkLmluZGV4T2Yod29yZCkpO1xyXG5cdFx0cmV0dXJuIHdvcmQ7XHJcblx0ICB9XHJcbiAgXHJcblx0ICBsZXQgd29yZDEgPSBnZXRXb3JkKCk7XHJcblx0ICBsZXQgd29yZDIgPSBnZXRXb3JkKCk7XHJcblx0ICBzZXRXb3Jkcyhbd29yZDEsIHdvcmQyXSk7XHJcblx0fSwgW10pO1xyXG5cdEFPUy5pbml0KCk7XHJcblx0Y2F0ZWdvcnkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG5cdCAgbGV0IGl0ZW0gPSAoXHJcblx0XHQgIDxhIGtleT17ZWxlbWVudC5pZH0gc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCJ9fSBocmVmPXtgL3NlYXJjaGNhdC8ke2VsZW1lbnQuaWR9LyR7ZWxlbWVudC5jYXRlZ29yaWV9YH0+XHJcblx0XHRcdCAgPHBcclxuXHRcdFx0ICBcclxuXHRcdFx0ICBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIix0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCJ9fVxyXG5cdFx0XHQgIGNsYXNzTmFtZT1cImxpZ2h0XCJcclxuXHRcdCAgPlxyXG5cdFx0XHQgIHtlbGVtZW50LmNhdGVnb3JpZX1cclxuXHRcdCAgPC9wPlxyXG5cdFx0PC9hPlxyXG4gIFxyXG5cdCAgKTtcclxuXHQgIG1lbnUucHVzaChpdGVtKTtcclxuXHR9KTtcclxuXHRpZiAod29yZHMubGVuZ3RoID4gMCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdCAgPD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kMVwiIGFsdD1cImhvbWVwYWdlXCI+XHJcblx0XHRcdCAgPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcblx0XHRcdFx0PHNvdXJjZSBzcmM9XCIvemVuaXRoL3ZpZGVvL3ZpZGVvYmcubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxyXG5cdFx0XHQgIDwvdmlkZW8+XHJcblx0XHJcblx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5Qmx1ZVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cdFx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyMlwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDZW50ZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHRcdFx0XHRcdCAgPExpbmsgdG89XCIvXCI+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0ICBzcmM9XCIvemVuaXRoL2ltYWdlcy9iSU8xcjlGLnBuZ1wiXHJcblx0XHRcdFx0XHRcdCAgYWx0PVwiTG9nb1wiXHJcblx0XHRcdFx0XHRcdCAgd2lkdGg9ezIwMH1cclxuXHRcdFx0XHRcdFx0ICBjbGFzc05hbWU9XCJjZW50ZXJcIlxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0ICA8L0xpbms+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid29ya3BhZ2VUZXh0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblx0XHRcdFx0XHQgIDxoMSBjbGFzc05hbWU9XCJtZWRpdW1cIj5Tw4lMw4lDVElPTiBERSBDTElFTlQ8L2gxPlxyXG5cdFx0XHRcdFx0ICA8ZGl2XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbHVtbnNcIlxyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiLCBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX1cclxuXHRcdFx0XHRcdCAgPlxyXG5cdFx0XHRcdFx0XHQ8cCBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiIH19IGNsYXNzTmFtZT1cImxpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdCAge3dvcmRzWzBdfSAuIHt3b3Jkc1sxXX0gLntcIiBcIn1cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHQ8QWNjb3JkaW9uXHJcblx0XHRcdFx0XHRcdCAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZShcInBhbmVsMVwiKX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQgIDxBY2NvcmRpb25TdW1tYXJ5XHJcblx0XHRcdFx0XHRcdFx0YXJpYS1jb250cm9scz1cInBhbmVsMWQtY29udGVudFwiXHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJwYW5lbDFkLWhlYWRlclwiXHJcblx0XHRcdFx0XHRcdCAgPlxyXG5cdFx0XHRcdFx0XHRcdDxwIHN0eWxlPXt7IG1hcmdpblRvcDogXCI1cHhcIiB9fT4mbmJzcDtDQVTDiUdPUklFPC9wPlxyXG5cdFx0XHRcdFx0XHQgIDwvQWNjb3JkaW9uU3VtbWFyeT5cclxuXHRcdFx0XHRcdFx0ICA8QWNjb3JkaW9uRGV0YWlscz57bWVudX08L0FjY29yZGlvbkRldGFpbHM+XHJcblx0XHRcdFx0XHRcdDwvQWNjb3JkaW9uPlxyXG5cdFx0XHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0ICA8Lz5cclxuXHRcdCk7XHJcblx0ICB9XHJcblx0fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya3BhZ2VDbGllbnRPbmU7XHJcblxyXG5cclxuXHJcbiIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSBcInJlYWN0LXBhcmFsbGF4XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICdyYy1wYWdpbmF0aW9uJztcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXNoZWV0cy9idWxtYS9ncmlkL2NvbHVtbnMuc2Fzcyc7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzaGVldHMvYnVsbWEvaGVscGVycy9zcGFjaW5nLnNhc3MnO1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlc2hlZXRzL3BhZ2luYXRpb24ubGVzcycgXHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gV29ya3BhZ2VDbGllbnRUd28oe2RhdGEsIHBhZ2UsIGNvdW50fSkge1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgbGV0IHBhZ2VOYnIgPSBNYXRoLmNlaWwoY291bnQgLyAyMClcclxuICBsZXQgbmJyID0gcGFyc2VJbnQocGFnZSlcclxuICBmdW5jdGlvbiBvbkNoYW5nZShwYXJhbXMpIHtcclxuICAgIGRvY3VtZW50LmxvY2F0aW9uID0gYC9jbGllbnRzLyR7cGFyYW1zfWBcclxuICB9XHJcblxyXG4gIGxldCBib3ggPSBbXTtcclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgbGV0IGl0ZW0gPSAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjb2x1bW4gY29sdW1ucyBpcy1vbmUtZmlmdGggaXMtY2VudGVyZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXMtaGFsZlwiPlxyXG4gICAgICAgICAgPGEgaHJlZj17XCIvY2xpZW50L1wiICsgZGF0YVtpbmRleF0uaWR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPlxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIgfX0gY2xhc3NOYW1lPVwidGV4dERlY29cIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhW2luZGV4XS5wcm9qZXR9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL2ltYWdlY2xpZW50L1wiICsgZGF0YVtpbmRleF0uaGVhZGVyfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgICBib3gucHVzaChpdGVtKTtcclxuICAgIH1cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL3plbml0aC9pbWFnZXMvWjF6SUpDS2suanBlZ1wiIGJsdXI9e3sgbWluOiAtMSwgbWF4OiAzIH19IHN0cmVuZ3RoPXs0MDB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTZcIiBhbHQ9XCJhY3Rpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTZcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tdWx0aWxpbmUgaXMtY2VudGVyZWRcIj5cclxuICAgICAgICAgICAgICB7Ym94fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW1vYmlsZSBpcy1jZW50ZXJlZFwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjE1MHB4XCJ9fT4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgY3VycmVudD17bmJyfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgcGFnZVNpemU9ezF9XHJcbiAgICAgICAgICAgICAgICB0b3RhbD17cGFnZU5icn1cclxuICAgICAgICAgICAgICAgIHNob3dUaXRsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuTCBjZW50ZXIgbGlnaHQgbGV0dGVyU3BhY2luZ01cIj5cclxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9jb250YWN0XCIgY2xhc3NOYW1lPVwidGV4dERlY29cIj5cclxuICAgICAgICAgICAgICAgIFZvaXIgcGx1c1xyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9QYXJhbGxheD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBXb3JrcGFnZUNsaWVudFR3bzsiLCJpbXBvcnQgV29ya3BhZ2VPbmUgZnJvbSBcIi4vX3dvcmtwYWdlT25lXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vX25hdmJhcic7XHJcbmltcG9ydCBSc0J1dHRvbiBmcm9tICcuLi9fcnNCdXR0b24nO1xyXG5pbXBvcnQgTGluZXNUb3AgZnJvbSAnLi4vX2xpbmVzVG9wJztcclxuaW1wb3J0IExpbmVzQm90dG9tIGZyb20gJy4uL19saW5lc0JvdHRvbSc7XHJcbmltcG9ydCBXb3JrcGFnZVR3byBmcm9tIFwiLi9fd29ya3BhZ2VUd29cIjtcclxuaW1wb3J0IFdvcmtwYWdlVGhyZWUgZnJvbSBcIi4vX3dvcmtwYWdlVGhyZWVcIjtcclxuaW1wb3J0IFdvcmtwYWdlRm91ciBmcm9tIFwiLi9fd29ya3BhZ2VGb3VyXCI7XHJcbmltcG9ydCBXb3JrcGFnZUZpdmUgZnJvbSBcIi4vX3dvcmtwYWdlRml2ZVwiO1xyXG5pbXBvcnQgTWluaUZvb3RlciBmcm9tIFwiLi4vSG9tZXBhZ2UvX21pbmlGb290ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiOyBcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBXb3JrcGFnZSgpIHtcclxuXHRjb25zdCB7IG5iciB9ID0gdXNlUGFyYW1zKCk7XHJcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNDb3VudExvYWRlZCwgc2V0SXNDb3VudExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzQ2F0TG9hZGVkLCBzZXRJc0NhdExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzTG9hZGVkTmV4dFByZXYsIHNldElzTG9hZGVkTmV4dFByZXZdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtpc0ltZ1JlYWR5LCBzZXRJbWdSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2NhdCwgc2V0Q2F0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKFtdKTtcclxuXHRcdHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG5cdFx0XHRmZXRjaChgL2dldHRBbGxQcm9qZWN0LyR7bmJyfWAse21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0XHQudGhlbihcclxuXHRcdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0c2V0SXRlbXMocmVzdWx0KTtcclxuXHRcdFx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHJcblx0XHRcdGZldGNoKGAvZ2V0Q291bnQvcHJvamV0YCx7bWV0aG9kOidHRVQnLGhlYWRlcnM6e0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC50aGVuKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRzZXRDb3VudChyZXN1bHQpO1xyXG5cdFx0XHRcdHNldElzQ291bnRMb2FkZWQodHJ1ZSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdFx0XHQvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzZXRJc0NvdW50TG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHRcdGZldGNoKGAvYXBpL2NhdGVnb3JpZXNgLHttZXRob2Q6J0dFVCcsaGVhZGVyczp7QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdHNldENhdChyZXN1bHQpO1xyXG5cdFx0XHRcdHNldElzQ2F0TG9hZGVkKHRydWUpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcblx0XHRcdFx0Ly8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2V0SXNDb3VudExvYWRlZCh0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0fSwgW10pXHJcblxyXG5cdGlmIChlcnJvcikge1xyXG5cdFx0IHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcblx0ICB9IGVsc2UgaWYgKCFpc0xvYWRlZCB8fCAhaXNDb3VudExvYWRlZHx8ICFpc0NhdExvYWRlZCkge1xyXG5cdFx0cmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuXHQgIH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAoICBcclxuXHRcdDw+XHJcblx0XHQ8TmF2YmFyPjwvTmF2YmFyPlxyXG5cdFx0PFJzQnV0dG9uPjwvUnNCdXR0b24+XHJcblx0XHQ8TGluZXNUb3A+PC9MaW5lc1RvcD5cclxuXHRcdDxMaW5lc0JvdHRvbT48L0xpbmVzQm90dG9tPlxyXG5cdFx0XHJcblx0XHQ8V29ya3BhZ2VPbmUgY2F0PXtjYXR9PjwvV29ya3BhZ2VPbmU+XHJcblx0XHQ8V29ya3BhZ2VUd28gZGF0YT17aXRlbXN9IHBhZ2U9e25icn0gY291bnQ9e2NvdW50fT48L1dvcmtwYWdlVHdvPlxyXG5cdFx0ey8qIDxXb3JrcGFnZVRocmVlPjwvV29ya3BhZ2VUaHJlZT5cclxuXHRcdDxXb3JrcGFnZUZvdXI+PC9Xb3JrcGFnZUZvdXI+XHJcblx0XHQ8V29ya3BhZ2VGaXZlPjwvV29ya3BhZ2VGaXZlPlxyXG5cdFx0PE1pbmlGb290ZXI+PC9NaW5pRm9vdGVyPiAqL31cclxuXHRcdDwvPlxyXG5cdCApO1xyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgV29ya3BhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gV29ya3BhZ2VGaXZlKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJcIiBhbHQ9XCJhY3Rpb25cIj5cclxuICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eUJsdWVcIj5cclxuICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cclxuICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgIFx0XHQ8L2Rpdj5cclxuICAgICAgICAgIFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cclxuICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgIFx0XHQ8L2Rpdj5cclxuICAgICAgICBcdFx0PC9kaXY+XHJcblxyXG4gICAgICBcdFx0PC9kaXY+XHJcbiAgICBcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtwYWdlRml2ZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBXb3JrcGFnZUZvdXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiIGFsdD1cImFjdGlvblwiPlxyXG4gICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5Qmx1ZVwiPlxyXG4gICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHJcblxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlclwiPlxyXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgXHRcdDwvZGl2PlxyXG4gICAgICAgICAgXHRcdFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlclwiPlxyXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgXHRcdDwvZGl2PlxyXG4gICAgICAgIFx0XHQ8L2Rpdj5cclxuXHJcbiAgICAgIFx0XHQ8L2Rpdj5cclxuICAgIFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgV29ya3BhZ2VGb3VyOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBT1MgZnJvbSBcImFvc1wiO1xyXG5pbXBvcnQgXCJhb3MvZGlzdC9hb3MuY3NzXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBNZW51LCBNZW51SXRlbSwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBBcnJvd0ZvcndhcmRJb3NTaGFycEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRJb3NTaGFycCc7XHJcbmltcG9ydCBNdWlBY2NvcmRpb24sIHsgQWNjb3JkaW9uUHJvcHMgfSBmcm9tICdAbXVpL21hdGVyaWFsL0FjY29yZGlvbic7XHJcbmltcG9ydCBNdWlBY2NvcmRpb25TdW1tYXJ5LCB7XHJcbiAgQWNjb3JkaW9uU3VtbWFyeVByb3BzLFxyXG59IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWNjb3JkaW9uU3VtbWFyeSc7XHJcbmltcG9ydCBNdWlBY2NvcmRpb25EZXRhaWxzIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWNjb3JkaW9uRGV0YWlscyc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcbmNvbnN0IEFjY29yZGlvbiA9IHN0eWxlZCgocHJvcHMpID0+IChcclxuICA8TXVpQWNjb3JkaW9uIGRpc2FibGVHdXR0ZXJzIGVsZXZhdGlvbj17MH0gc3F1YXJlIHsuLi5wcm9wc30gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBtYXhXaWR0aDogXCIxODVweFwiLFxyXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLDApXCIsXHJcbiAgY29sb3I6IFwid2hpdGVcIixcclxufSkpO1xyXG5cclxuY29uc3QgQWNjb3JkaW9uU3VtbWFyeSA9IHN0eWxlZCgocHJvcHMpID0+IChcclxuICA8TXVpQWNjb3JkaW9uU3VtbWFyeVxyXG4gICAgZXhwYW5kSWNvbj17PEFycm93Rm9yd2FyZElvc1NoYXJwSWNvbiBzeD17eyBmb250U2l6ZTogXCIwLjlyZW1cIiB9fSAvPn1cclxuXHR7Li4ucHJvcHN9XHJcbiAgLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gIGJhY2tncm91bmRDb2xvcjpcclxuICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJkYXJsXCJcclxuICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgLjA1KVwiXHJcbiAgICAgIDogXCJyZ2JhKDAsIDAsIDAsIC4wMylcIixcclxuICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gIFwiJiAuTXVpQWNjb3JkaW9uU3VtbWFyeS1leHBhbmRJY29uV3JhcHBlci5NdWktZXhwYW5kZWRcIjoge1xyXG4gICAgdHJhbnNmb3JtOiBcInJvdGF0ZSg5MGRlZylcIixcclxuICB9LFxyXG4gIFwiJiAuTXVpQWNjb3JkaW9uU3VtbWFyeS1jb250ZW50XCI6IHtcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgQWNjb3JkaW9uRGV0YWlscyA9IHN0eWxlZChNdWlBY2NvcmRpb25EZXRhaWxzKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgcGFkZGluZ1RvcDogMCxcclxuICBtYXJnaW5Ub3A6IDAsXHJcbiAgbWF4SGVpZ2h0OiBcIjE1MHB4XCIsXHJcbiAgb3ZlcmZsb3c6IFwic2Nyb2xsXCIsXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIFdvcmtwYWdlT25lKGNhdCkge1xyXG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gUmVhY3QudXNlU3RhdGUoXCJwYW5lbDFcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChwYW5lbCkgPT4gKGV2ZW50LCBuZXdFeHBhbmRlZCkgPT4ge1xyXG4gICAgc2V0RXhwYW5kZWQobmV3RXhwYW5kZWQgPyBwYW5lbCA6IGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBbd29yZHMsIHNldFdvcmRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBsZXQgY2F0ZWdvcnkgPSBjYXQuY2F0O1xyXG4gIGxldCBtZW51ID0gW107XHJcbiAgbGV0IHJhbmRvbVdvcmQgPSBbXHJcbiAgICBcIlLDiUFDVElWSVTDiVwiLFxyXG4gICAgXCJQUk9YSU1JVMOJXCIsXHJcbiAgICBcIlBBU1NJT05cIixcclxuICAgIFwiU1RSQVTDiUdJRVwiLFxyXG4gICAgXCJFVkVOVFwiLFxyXG4gICAgXCJDT05TRUlMXCIsXHJcbiAgICBcIkNPTU1VTklDQVRJT05cIixcclxuICAgIFwiUsOKVkVSXCIsXHJcbiAgICBcIkFNQklUSU9OXCIsXHJcbiAgICBcIklNQUdJTkFUSU9OXCIsXHJcbiAgICBcImFnaXJcIixcclxuICAgIFwicydhZGFwdGVyXCIsXHJcbiAgICBcImFudGljaXBlclwiLFxyXG4gICAgXCJhdXRvbm9taWVcIixcclxuICAgIFwiY3JvaXNzYW5jZVwiLFxyXG4gICAgXCJkw6lmaVwiLFxyXG4gICAgXCJwbGFuaWZpZXJcIixcclxuICAgIFwicG9zaXRpdmVyXCIsXHJcbiAgICBcImRpc3BvbmliaWxpdMOpXCIsXHJcbiAgICBcImR5bmFtaXNtZVwiLFxyXG4gICAgXCLDqWNvdXRlXCIsXHJcbiAgICBcInNlcnZpY2VcIixcclxuICAgIFwicHLDqXZpc2lvblwiLFxyXG4gICAgXCJ0w6luYWNpdMOpXCIsXHJcbiAgICBcInF1YWxpdMOpXCIsXHJcbiAgICBcIm1vYmlsaXNlclwiLFxyXG4gICAgXCJuw6lnb2NpZXJcIixcclxuICAgIFwib2JqZWN0aWZzXCIsXHJcbiAgICBcIm9wdGltaXNlclwiLFxyXG4gICAgXCJjaGFsbGVuZ2VcIixcclxuICAgIFwicsOpdXNzaXJcIixcclxuICAgIFwiZXhjZWxsZW5jZVwiLFxyXG4gICAgXCJyw6lhbGlzZXJcIixcclxuICAgIFwicsOpc3VsdGF0c1wiLFxyXG4gICAgXCJkw6l2ZWxvcHBlclwiLFxyXG4gICAgXCJzYXZvaXJmYWlyZVwiLFxyXG4gICAgXCJkaWFsb2d1ZVwiLFxyXG4gICAgXCJwcsOpdm9pclwiLFxyXG4gICAgXCJzeW5lcmdpZVwiLFxyXG4gICAgXCJwcm9qZXRcIixcclxuICAgIFwiaW5ub3ZhdGlvblwiLFxyXG4gICAgXCJtb3RpdmF0aW9uXCJdO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gZ2V0V29yZCgpIHtcclxuICAgICAgbGV0IHdvcmQgPSByYW5kb21Xb3JkW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmRvbVdvcmQubGVuZ3RoKV07XHJcbiAgICAgIHJhbmRvbVdvcmQuc3BsaWNlKHJhbmRvbVdvcmQuaW5kZXhPZih3b3JkKSk7XHJcbiAgICAgIHJldHVybiB3b3JkO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB3b3JkMSA9IGdldFdvcmQoKTtcclxuICAgIGxldCB3b3JkMiA9IGdldFdvcmQoKTtcclxuICAgIHNldFdvcmRzKFt3b3JkMSwgd29yZDJdKTtcclxuICB9LCBbXSk7XHJcbiAgQU9TLmluaXQoKTtcclxuICBjYXRlZ29yeS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBsZXQgaXRlbSA9IChcclxuXHRcdDxhIGtleT17ZWxlbWVudC5pZH0gc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCJ9fSBocmVmPXtgL3NlYXJjaGNhdC8ke2VsZW1lbnQuaWR9LyR7ZWxlbWVudC5jYXRlZ29yaWV9YH0+XHJcblx0XHRcdDxwXHJcblx0XHRcdFxyXG5cdFx0XHRzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIix0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCJ9fVxyXG5cdFx0XHRjbGFzc05hbWU9XCJsaWdodFwiXHJcblx0XHQ+XHJcblx0XHRcdHtlbGVtZW50LmNhdGVnb3JpZX1cclxuXHRcdDwvcD5cclxuXHQgIDwvYT5cclxuXHJcbiAgICApO1xyXG4gICAgbWVudS5wdXNoKGl0ZW0pO1xyXG4gIH0pO1xyXG4gIGlmICh3b3Jkcy5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZDFcIiBhbHQ9XCJob21lcGFnZVwiPlxyXG4gICAgICAgICAgPHZpZGVvIHBsYXlzSW5saW5lIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcbiAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiL3plbml0aC92aWRlby92aWRlb2JnLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cclxuICAgICAgICAgIDwvdmlkZW8+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5Qmx1ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXIyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNlbnRlclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvemVuaXRoL2ltYWdlcy9iSU8xcjlGLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ya3BhZ2VUZXh0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZWRpdW1cIj5Tw4lMw4lDVElPTiBERSBQUk9KRVQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiwgbWFyZ2luUmlnaHQ6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiIH19IGNsYXNzTmFtZT1cImxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7d29yZHNbMF19IC4ge3dvcmRzWzFdfSAue1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKFwicGFuZWwxXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJwYW5lbDFkLWNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhbmVsMWQtaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjVweFwiIH19PiZuYnNwO0NBVMOJR09SSUU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz57bWVudX08L0FjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtwYWdlT25lO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBXb3JrcGFnZVRocmVlKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJcIiBhbHQ9XCJhY3Rpb25cIj5cclxuICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eUJsdWVcIj5cclxuICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cclxuICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgIFx0XHQ8L2Rpdj5cclxuICAgICAgICAgIFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cclxuICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94V29ya3BhZ2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hXb3JrcGFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgIFx0XHQ8L2Rpdj5cclxuICAgICAgICBcdFx0PC9kaXY+XHJcblxyXG4gICAgICBcdFx0PC9kaXY+XHJcbiAgICBcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtwYWdlVGhyZWU7IiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tIFwicmVhY3QtcGFyYWxsYXhcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ3JjLXBhZ2luYXRpb24nO1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlc2hlZXRzL2J1bG1hL2dyaWQvY29sdW1ucy5zYXNzJztcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXNoZWV0cy9idWxtYS9oZWxwZXJzL3NwYWNpbmcuc2Fzcyc7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzaGVldHMvcGFnaW5hdGlvbi5sZXNzJyBcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2ZvbnQuY3NzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBXb3JrcGFnZVR3byh7ZGF0YSwgcGFnZSwgY291bnR9KSB7XHJcbiAgY29uc29sZS5sb2coY291bnQpXHJcbiAgbGV0IHBhZ2VOYnIgPSBNYXRoLmNlaWwoY291bnQgLyAyMClcclxuICBsZXQgbmJyID0gcGFyc2VJbnQocGFnZSlcclxuICBmdW5jdGlvbiBvbkNoYW5nZShwYXJhbXMpIHtcclxuICAgIGRvY3VtZW50LmxvY2F0aW9uID0gYC9wcm9qZXRzLyR7cGFyYW1zfWBcclxuICB9XHJcblxyXG4gIGxldCBib3ggPSBbXTtcclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgbGV0IGl0ZW0gPSAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjb2x1bW4gY29sdW1ucyBpcy1vbmUtZmlmdGggaXMtY2VudGVyZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXMtaGFsZlwiPlxyXG4gICAgICAgICAgPGEgaHJlZj17XCIvcHJvamV0L1wiICsgZGF0YVtpbmRleF0uaWR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFdvcmtwYWdlMVwiPlxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIgfX0gY2xhc3NOYW1lPVwidGV4dERlY29cIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhW2luZGV4XS5wcm9qZXR9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL2ltYWdlcHJvamV0L1wiICsgZGF0YVtpbmRleF0uaGVhZGVyfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgICBib3gucHVzaChpdGVtKTtcclxuICAgIH1cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL3plbml0aC9pbWFnZXMvWjF6SUpDS2suanBlZ1wiIGJsdXI9e3sgbWluOiAtMSwgbWF4OiAzIH19IHN0cmVuZ3RoPXs0MDB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTZcIiBhbHQ9XCJhY3Rpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTZcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tdWx0aWxpbmUgaXMtY2VudGVyZWRcIj5cclxuICAgICAgICAgICAgICB7Ym94fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW1vYmlsZSBpcy1jZW50ZXJlZFwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjE1MHB4XCJ9fT4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgY3VycmVudD17bmJyfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgcGFnZVNpemU9ezF9XHJcbiAgICAgICAgICAgICAgICB0b3RhbD17cGFnZU5icn1cclxuICAgICAgICAgICAgICAgIHNob3dUaXRsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuTCBjZW50ZXIgbGlnaHQgbGV0dGVyU3BhY2luZ01cIj5cclxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9jb250YWN0XCIgY2xhc3NOYW1lPVwidGV4dERlY29cIj5cclxuICAgICAgICAgICAgICAgIFZvaXIgcGx1c1xyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9QYXJhbGxheD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtwYWdlVHdvO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgTGluaywgRGlyZWN0TGluaywgRWxlbWVudCwgRXZlbnRzLCBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCwgc2Nyb2xsU3B5LCBzY3JvbGxlciB9IGZyb20gJ3JlYWN0LXNjcm9sbCcgXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG4vL2ltcG9ydCBzY3JvbGxJbnRvVmlldyBmcm9tICdzY3JvbGwtaW50by12aWV3LWlmLW5lZWRlZCdcclxuaW1wb3J0IEhvbWVwYWdlIGZyb20gJy4vSG9tZXBhZ2UvX2hvbWVwYWdlJztcclxuaW1wb3J0IFdvcmRwYWdlIGZyb20gJy4vSG9tZXBhZ2UvX3dvcmQnO1xyXG5pbXBvcnQgRW1vdGlvbiBmcm9tICcuL0hvbWVwYWdlL19lbW90aW9uJztcclxuaW1wb3J0IEFjdGlvbiBmcm9tICcuL0hvbWVwYWdlL19hY3Rpb24nO1xyXG5pbXBvcnQgQ3JlYXRpb24gZnJvbSAnLi9Ib21lcGFnZS9fY3JlYXRpb24nO1xyXG5pbXBvcnQgU2F0aXNmYWN0aW9uIGZyb20gJy4vSG9tZXBhZ2UvX3NhdGlzZmFjdGlvbic7XHJcbmltcG9ydCBDaGlmZnJlcyBmcm9tICcuL0hvbWVwYWdlL19jaGlmZnJlcyc7XHJcbmltcG9ydCBWaXNpb24gZnJvbSAnLi9Ib21lcGFnZS9fdmlzaW9uJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0hvbWVwYWdlL19mb290ZXInO1xyXG5pbXBvcnQgSW5zdGFmbHV4IGZyb20gJy4vSG9tZXBhZ2UvX2luc3RhJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL19uYXZiYXInO1xyXG5pbXBvcnQgUnNCdXR0b24gZnJvbSAnLi9fcnNCdXR0b24nO1xyXG5pbXBvcnQgTGluZXNUb3AgZnJvbSAnLi9fbGluZXNUb3AnO1xyXG5pbXBvcnQgTGluZXNCb3R0b20gZnJvbSAnLi9fbGluZXNCb3R0b20nO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG5cdGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtpbnN0YSwgc2V0SW5zdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRmZXRjaChgL2dldHRBbGxDcmVhdGlvbmAse21ldGhvZDonR0VUJyxoZWFkZXJzOntBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcblx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdC50aGVuKFxyXG5cdFx0ICAocmVzdWx0KSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHRcdHNldEl0ZW1zKHJlc3VsdClcclxuXHRcdCAgfSxcclxuXHRcdCAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcblx0XHQgIC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG5cdFx0ICAvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuXHRcdCAgKGVycm9yKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdFx0ICB9XHJcblx0XHQpXHJcblxyXG5cdFx0Ly8gZmV0Y2goYGh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vYWdlbmNlemVuaXRoLz9fX2E9MT9fX2E9MSZfX2Q9ZGlzYCx7bWV0aG9kOidHRVQnLH0pXHJcblx0XHQvLyAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdC8vIC50aGVuKChyZXN1bHRJbnN0YSkgPT4ge1xyXG5cdFx0Ly8gXHRjb25zb2xlLmxvZyhcInRvdG9cIilcclxuXHRcdC8vIFx0Y29uc29sZS5sb2cocmVzdWx0SW5zdGEpXHJcblx0XHQvLyAgIH0sXHJcblx0XHQvLyAgIC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG5cdFx0Ly8gICAvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuXHRcdC8vICAgLy8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcblx0XHQvLyAgIChlcnJvcikgPT4ge1xyXG5cdFx0Ly8gXHRjb25zb2xlLmxvZyhlcnJvcilcclxuXHRcdC8vICAgfVxyXG5cdFx0Ly8gKVxyXG5cdCAgfSwgW10pXHJcblxyXG5cdC8vIGxldCBzdGVwID0gMVxyXG5cclxuXHQvLyBBT1MuaW5pdCgpXHJcblx0Ly8gbGV0IHNjcm9sbCA9IGZhbHNlXHJcblx0Ly8gaWYoc3RlcCA9PSA0KXtcclxuXHQvLyBcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXRjaG5hemUnKS5zdHlsZS5wYWRkaW5nVG9wID0gJzBweCdcclxuXHQvLyB9XHJcblxyXG5cdC8vICB2YXIgbGFzdFNjcm9sbFRvcCA9IDA7XHJcblxyXG5cdC8vIC8vIGVsZW1lbnQgc2hvdWxkIGJlIHJlcGxhY2VkIHdpdGggdGhlIGFjdHVhbCB0YXJnZXQgZWxlbWVudCBvbiB3aGljaCB5b3UgaGF2ZSBhcHBsaWVkIHNjcm9sbCwgdXNlIHdpbmRvdyBpbiBjYXNlIG9mIG5vIHRhcmdldCBlbGVtZW50LlxyXG5cdC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uKCl7IC8vIG9yIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIuLi4uXHJcblx0Ly8gdmFyIHN0ID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7IC8vIENyZWRpdHM6IFwiaHR0cHM6Ly9naXRodWIuY29tL3FlcmVteS9zby9ibG9iL21hc3Rlci9zby5kb20uanMjTDQyNlwiXHJcblx0Ly8gaWYgKHN0ID4gbGFzdFNjcm9sbFRvcCAmJiBzY3JvbGwgPT0gZmFsc2UgJiYgc3RlcCA8IDkpe1xyXG5cdC8vIFx0Y29uc29sZS5sb2coc3RlcCArIFwiIGRvd25cIilcclxuXHRcdFxyXG5cclxuXHQvLyBcdCBzdGVwKytcclxuXHQvLyBcdHNjcm9sbGVyLnNjcm9sbFRvKGBzY3JvbGwtdG8tZWxlbWVudCR7c3RlcH1gLCB7XHJcblx0Ly8gXHRcdGR1cmF0aW9uOiA4MDAsXHJcblx0Ly8gXHRcdGRlbGF5OiAwLFxyXG5cdC8vIFx0XHRzbW9vdGg6ICdlYXNlSW5PdXRRdWFydCdcclxuXHQvLyBcdCAgfSkgXHJcblx0XHQgIFxyXG5cdC8vIFx0IHNjcm9sbCA9IHRydWVcclxuXHQvLyBcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdC8vIFx0XHRzY3JvbGwgPSBmYWxzZVxyXG5cdC8vIFx0fSwgMTAwMCk7XHJcblx0Ly8gfSBlbHNlIGlmKHN0IDwgbGFzdFNjcm9sbFRvcCAmJiBzY3JvbGwgPT0gZmFsc2UgJiYgc3RlcCA+IDEpe1xyXG5cclxuXHQvLyBcdHN0ZXAtLVxyXG5cdC8vIFx0c2Nyb2xsZXIuc2Nyb2xsVG8oYHNjcm9sbC10by1lbGVtZW50JHtzdGVwfWAsIHtcclxuXHQvLyBcdFx0ZHVyYXRpb246IDgwMCxcclxuXHQvLyBcdFx0ZGVsYXk6IDAsXHJcblx0Ly8gXHRcdHNtb290aDogJ2Vhc2VJbk91dFF1YXJ0J1xyXG5cdC8vIFx0fSlcclxuXHRcdCAgXHJcblx0Ly8gXHQgY29uc29sZS5sb2coc3RlcCArIFwiIHVwXCIpXHJcblx0XHQgXHJcblx0Ly8gXHQgc2Nyb2xsID0gdHJ1ZVxyXG5cdC8vIFx0IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdC8vIFx0XHRzY3JvbGwgPSBmYWxzZVxyXG5cdC8vIFx0IH0sIDEwMDApO1xyXG5cdC8vIH1cclxuXHQvLyBsYXN0U2Nyb2xsVG9wID0gc3QgPD0gMCA/IDAgOiBzdDsgLy8gRm9yIE1vYmlsZSBvciBuZWdhdGl2ZSBzY3JvbGxpbmdcclxuXHQvLyB9LCBmYWxzZSk7XHJcblxyXG5cdGlmKGl0ZW1zKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdDxOYXZiYXI+PC9OYXZiYXI+XHJcblx0XHRcdDxMaW5lc1RvcD48L0xpbmVzVG9wPlxyXG5cdFx0XHQ8TGluZXNCb3R0b20+PC9MaW5lc0JvdHRvbT5cclxuXHRcdFx0PFJzQnV0dG9uPjwvUnNCdXR0b24+XHJcblx0XHRcdFxyXG5cclxuXHRcdFx0XHQ8RWxlbWVudCBuYW1lPVwic2Nyb2xsLXRvLWVsZW1lbnQxXCIgY2xhc3NOYW1lPVwiZWxlbWVudFwiPlx0XHRcdFxyXG5cclxuXHRcdFx0XHRcdDxIb21lcGFnZSA+PC9Ib21lcGFnZT5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvRWxlbWVudD5cdFxyXG5cclxuXHRcdFx0XHR7LyogPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJ9fT48L2Rpdj4gKi99XHJcblx0XHRcdFx0PFdvcmRwYWdlID48L1dvcmRwYWdlPlxyXG5cdFx0XHRcdHsvKiA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsIGhlaWdodDpcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIn19PjwvZGl2PiAqL31cclxuXHJcblxyXG5cclxuXHRcdFx0XHQ8RWxlbWVudCBuYW1lPVwic2Nyb2xsLXRvLWVsZW1lbnQzXCIgY2xhc3NOYW1lPVwiZWxlbWVudFwiPlxyXG5cclxuXHRcdFx0XHRcdDxFbW90aW9uID48L0Vtb3Rpb24+XHJcblxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHJcblxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDRcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+XHJcblx0XHRcdFx0XHQ8QWN0aW9uID48L0FjdGlvbj5cclxuXHRcdFx0XHQ8L0VsZW1lbnQ+XHJcblxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDVcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+XHJcblxyXG5cdFx0XHRcdFx0PENyZWF0aW9uIGl0ZW09e2l0ZW1zfT48L0NyZWF0aW9uPlxyXG5cclxuXHRcdFx0XHQ8L0VsZW1lbnQ+XHJcblxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDZcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+XHJcblxyXG5cdFx0XHRcdFx0PFNhdGlzZmFjdGlvbiA+PC9TYXRpc2ZhY3Rpb24+XHJcblxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cInNjcm9sbC10by1lbGVtZW50N1wiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj5cclxuXHJcblx0XHRcdFx0XHRcdDxDaGlmZnJlcyA+PC9DaGlmZnJlcz5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0PC9FbGVtZW50PlxyXG5cclxuXHRcdFx0XHQ8RWxlbWVudCBuYW1lPVwic2Nyb2xsLXRvLWVsZW1lbnQ4XCIgY2xhc3NOYW1lPVwiZWxlbWVudFwiPlxyXG5cclxuXHRcdFx0XHRcdDxWaXNpb24gPjwvVmlzaW9uPlxyXG5cclxuXHRcdFx0XHQ8L0VsZW1lbnQ+XHJcblxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJzY3JvbGwtdG8tZWxlbWVudDhcIiBjbGFzc05hbWU9XCJlbGVtZW50XCI+XHJcblxyXG5cdFx0XHRcdFx0XHQ8SW5zdGFmbHV4ID48L0luc3RhZmx1eD5cclxuXHJcblx0XHRcdFx0PC9FbGVtZW50PlxyXG5cclxuXHJcblxyXG5cdFx0XHRcdDxGb290ZXIgPjwvRm9vdGVyPlxyXG5cclxuXHJcblx0XHRcdHsvKiA8RWxlbWVudCBuYW1lPVwic2Nyb2xsLXRvLWVsZW1lbnQxMFwiIGNsYXNzTmFtZT1cImVsZW1lbnRcIj48L0VsZW1lbnQ+ICovfVxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHRcdFxyXG5cdH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiIGltcG9ydCBcIi4uL3N0eWxlcy9mb250LmNzc1wiXHJcbmZ1bmN0aW9uIExpbmVzQm90dG9tKCkge1xyXG5cdHJldHVybiAoIFxyXG5cdFx0PD5cclxuXHJcblx0PGRpdiBjbGFzc05hbWU9XCJsaW5lQlwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTIwMFwiPlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJsaW5lNFwiPjwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJsaW5lNSBsaW5lQW5pbWUyXCI+PC9kaXY+XHJcblx0PC9kaXY+XHJcblx0XHQ8Lz5cclxuXHQgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGluZXNCb3R0b207IiwiIGltcG9ydCBcIi4uL3N0eWxlcy9mb250LmNzc1wiXHJcbmZ1bmN0aW9uIExpbmVzVG9wKCkge1xyXG5cdGxldCBhdWRpbyA9IG5ldyBBdWRpbyhcIi96ZW5pdGgvYXV0cmUvSG9yaXpvbi5tcDNcIilcclxuXHJcblx0Y29uc3Qgc3RhcnQgPSAoKSA9PiB7XHJcblx0ICBhdWRpby5wbGF5KClcclxuXHR9XHJcblx0cmV0dXJuICggXHJcblx0XHQ8PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmVBXCIgIGRhdGEtYW9zPVwiZmFkZS1kb3duXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaW5lMlwib25DbGljaz17c3RhcnR9PjwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGluZTMgbGluZUFuaW1lXCIgPjwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvPlxyXG5cdCApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5lc1RvcDsiLCJpbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCcgXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9mb250LmNzc1wiXHJcblxyXG5mdW5jdGlvbiBuYXZiYXIoKSB7XHJcblxyXG4gIEFPUy5pbml0KClcclxuICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRTZWFyY2hJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCB0ZWxlcG9ydCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsb2NhdGlvbi5yZXBsYWNlKCcvc2VhcmNoLycgKyBzZWFyY2hJbnB1dCk7XHJcbiAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvc2VhcmNoL1wiK3NlYXJjaElucHV0XHJcbiAgfVxyXG4gIFxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cclxuICAgIDxpbnB1dCBpZD1cIm1lbnVfX3RvZ2dsZVwiIHR5cGU9XCJjaGVja2JveFwiICAvPlxyXG5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1lbnVfX2J0blwiIGh0bWxGb3I9XCJtZW51X190b2dnbGVcIiBkYXRhLWFvcz1cImZhZGUtZG93blwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTIwMFwiPlxyXG4gICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgIFxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVudV9fYm94XCIgZGF0YS1hb3M9XCJmYWRlLXJpZ2h0XCI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RlbGVwb3J0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9fZ3JvdXAgZmllbGQgZGl2QzEgbWVudV9faXRlbTFcIiA+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaW5wdXRcIiBzaXplPVwiMTVcIiBjbGFzc05hbWU9XCJmb3JtX19maWVsZFwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIGlkPVwiZW1haWxcIiB2YWx1ZT17c2VhcmNoSW5wdXR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHJlcXVpcmVkPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImZvcm1fX2xhYmVsXCI+UmVjaGVyY2hlPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZW51X19pdGVtIGxpZ2h0IGxldHRlclNwYWNpbmdTXCI+PExpbmsgY2xhc3NOYW1lPVwidGV4dERlY28gbWFyZ2luU3RvcFwiIHRvPVwiL1wiPkFDQ1VFSUw8L0xpbms+PC9oNT5cclxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWVudV9faXRlbSBsaWdodCBsZXR0ZXJTcGFjaW5nU1wiPjxMaW5rIGNsYXNzTmFtZT1cInRleHREZWNvXCIgdG89XCIvY2xpZW50cy8xXCI+Q0xJRU5UUzwvTGluaz48L2g1PlxyXG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZW51X19pdGVtIGxpZ2h0IGxldHRlclNwYWNpbmdTXCI+PExpbmsgY2xhc3NOYW1lPVwidGV4dERlY29cIiB0bz1cIi9wcm9qZXRzLzFcIj5QUk9KRVRTPC9MaW5rPjwvaDU+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lbnVfX2l0ZW0gbGlnaHQgbGV0dGVyU3BhY2luZ1NcIj48TGluayBjbGFzc05hbWU9XCJ0ZXh0RGVjb1wiIHRvPVwiL2NvbnRhY3RcIj5DT05UQUNUPC9MaW5rPjwvaDU+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dERlY28gbGV0dGVyU3BhY2luZ1NcIiBocmVmPVwiL2xvZ2luXCI+PGg1IGNsYXNzTmFtZT1cIm1lbnVfX2l0ZW0gdGV4dERlY28gbGlnaHRcIj5BRE1JTjwvaDU+PC9hPlxyXG4gICAgICA8L3VsPlxyXG5cdFx0PC8+XHJcblx0ICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuYXZiYXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7IFxyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZm9udC5jc3NcIlxyXG5cclxuZnVuY3Rpb24gUnNCdXR0b24oKSB7XHJcblx0QU9TLmluaXQoe29uY2U6IHRydWUsfSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJzIGFvcy1pdGVtIG92ZXJmbG93SGlkZGVuXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMjAwXCI+XHJcblx0XHRcdDxhIGNsYXNzTmFtZT1cImZiXCIgaHJlZj0naHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0FHRU5DRVpFTklUSC8nPjwvYT5cclxuXHRcdFx0PGEgY2xhc3NOYW1lPVwiaW5zdGFcIiBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2FnZW5jZXplbml0aC8/aGw9ZnInPjwvYT5cclxuXHRcdFx0PGEgY2xhc3NOYW1lPVwibGlua2VkaW5cIiBocmVmPSdodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9hZ2VuY2UtemVuaXRoLyc+PC9hPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8Lz4gXHJcblx0XHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSc0J1dHRvbjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJCcm93c2VyUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJ1c2VMb2NhdGlvbiIsIkhvbWUiLCJXb3JrcGFnZSIsIldvcmtwYWdlQ2xpZW50IiwiQ29udGFjdFBhZ2UiLCJDbGllbnRQYWdlIiwidXNlTGF5b3V0RWZmZWN0IiwiUHJvamVjdHBhZ2UiLCJTZWFyY2hQYWdlIiwiU2VhcmNoUGFnZTIiLCJNYWluIiwiV3JhcHBlciIsImNoaWxkcmVuIiwibG9jYXRpb24iLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvIiwicGF0aG5hbWUiLCJ3aW5kb3ciLCJjcmVhdGVSb290IiwiY29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwiTmF2YmFyIiwiQ2xpZW50UGFnZU9uZSIsIkNsaWVudHBhZ2VUd28iLCJDbGllbnRwYWdlVGhyZWUiLCJDbGllbnRwYWdlRm91ciIsIkNsaWVudHBhZ2VGaXZlIiwiQ2xpZW50cGFnZVNpeCIsInVzZVBhcmFtcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2xpZW50cGFnZTZfNSIsIkNsaWVudHBhZ2UiLCJpZCIsImVycm9yIiwic2V0RXJyb3IiLCJpc0xvYWRlZCIsInNldElzTG9hZGVkIiwiaXNMb2FkZWRJbWciLCJzZXRJc0xvYWRlZEltZyIsImlzTG9hZGVkTmV4dFByZXYiLCJzZXRJc0xvYWRlZE5leHRQcmV2IiwiaXNJbWdSZWFkeSIsInNldEltZ1JlYWR5IiwiaXRlbXMiLCJzZXRJdGVtcyIsImltYWdlcyIsInNldEltYWdlcyIsImhlYWRlciIsInNldEhlYWRlciIsInByZWNpIiwic2V0UHJlY2kiLCJzZWNvbmQiLCJzZXRTZWNvbmQiLCJOZXh0UHJldiIsInNldE5leHRQcmV2IiwiUHJvamVjdCIsInNldFByb2plY3QiLCJpc0xvYWRlZFByb2plY3QiLCJzZXRJc0xvYWRlZFByb2plY3QiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3VsdCIsInRoaXNSZXMiLCJKU09OIiwicGFyc2UiLCJpIiwibGVuZ3RoIiwiaW1hZ2VwcmVjaXNpb24iLCJzZWNvbmRhaXJlIiwiY29uc29sZSIsImxvZyIsIk5leHQiLCJQcmV2IiwibWVzc2FnZSIsImJhY2tncm91bmRJbWFnZSIsIm1hcmdpblRvcCIsIl9faHRtbCIsInRlbW9pZ25hZ2UiLCJMaW5rIiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJFbGVtZW50IiwiUGFyYWxsYXgiLCJpdGVtIiwic2xpZGVyIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJuZXdTbGlkZXIiLCJ1bmRlZmluZWQiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yIiwiZSIsIlJlbW92ZUJsdXJEZXRhaWwiLCJCbHVyRGV0YWlsIiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInBvaW50ZXJFdmVudHMiLCJkaXNwbGF5IiwidGV4dEFsaWduIiwibGVmdCIsInRvcCIsIm1pc3Npb24iLCJvYmplY3RGaXQiLCJiYWNrZ3JvdW5kIiwicHVzaCIsInRhcmdldCIsInN0eWxlIiwiYmFja2Ryb3BGaWx0ZXIiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJMaWdodGJveCIsIlRodW1ibmFpbHMiLCJvcGVuIiwic2V0T3BlbiIsImFycmF5SW1hZ2UiLCJpbmRleCIsInZpc2libGUiLCJzcmMiLCJpbWFnZSIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsImFsaWduSXRlbXMiLCJib3R0b20iLCJBT1MiLCJkYXRhMiIsImVsZW1lbnRwcmVjaXNpb24iLCJ0ZXh0VHJhbnNmb3JtIiwiQ2xpZW50cGFnZU9uZSIsImRhdGEiLCJpbml0IiwibnAiLCJocmVmIiwibm9tQ2xpZW50IiwiZW5qZXUiLCJoaXN0b2lyZSIsInJlcG9uc2UiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJSc0J1dHRvbiIsIkxpbmVzVG9wIiwiTGluZXNCb3R0b20iLCJDb250YWN0UGFnZU9uZSIsIlN3YWwiLCJ3aXRoUmVhY3RDb250ZW50IiwiTXlTd2FsIiwiZW1haWwiLCJuYW1lIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInBlcnNpc3QiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImRpc2FibGVkIiwicHJldmVudERlZmF1bHQiLCJmaXJlIiwidGV4dCIsInRvYXN0IiwiaWNvbiIsInRpdGxlIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwicmVxdWVzdE9wdGlvbnMiLCJib2R5Iiwic3RyaW5naWZ5IiwiQWN0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJDaGlmZnJlcyIsIkNyZWF0aW9uIiwiY3JlYXRpb24iLCJFbW90aW9uIiwiRm9vdGVyIiwiaGFuZGxlRW1haWxJbnB1dENoYW5nZSIsInJlc3BvbnNlIiwiSG9tZXBhZ2UiLCJ1c2VSZWYiLCJJbnN0YWZsdXgiLCJpbnN0YSIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJhc3luYyIsImFwcGVuZENoaWxkIiwicmVhZHlTdGF0ZSIsImJvcmRlciIsIm1hcmdpbkJvdHRvbSIsIk1pbmlGb290ZXIiLCJTYXRpc2ZhY3Rpb24iLCJWaXNpb24iLCJNYXJxdWVlIiwiV29yZHBhZ2UiLCJvdmVyZmxvdyIsIlByb2plY3RQYWdlT25lIiwiUHJvamVjdHBhZ2VUd28iLCJQcm9qZWN0cGFnZVRocmVlIiwiUHJvamVjdHBhZ2VGb3VyIiwiUHJvamVjdHBhZ2VGaXZlIiwiUHJvamVjdHBhZ2VTaXgiLCJzZXREaXNwbGF5IiwicmVzdWx0aW1nIiwiZm9jdXMiLCJQcm9qZWN0cGFnZU9uZSIsInByb2pldCIsInNlY3RldXIiLCJjbGllbnQiLCJkdXJlZSIsImNhdGVnb3JpZSIsImN1cnNvciIsImRlbWFuZGUiLCJkZWZpIiwiYWN0aW9uIiwiU2VhcmNoUGFnZU9uZTIiLCJTZWFyY2hQYWdlVHdvMiIsImluZm8iLCJ0eXBlIiwiYm94IiwibWluIiwibWF4IiwiU2VhcmNoUGFnZU9uZSIsIlNlYXJjaFBhZ2VUd28iLCJXb3JrcGFnZUNsaWVudE9uZSIsIldvcmtwYWdlQ2xpZW50VHdvIiwibmJyIiwiaXNDb3VudExvYWRlZCIsInNldElzQ291bnRMb2FkZWQiLCJpc0NhdExvYWRlZCIsInNldElzQ2F0TG9hZGVkIiwiY2F0Iiwic2V0Q2F0IiwiY291bnQiLCJzZXRDb3VudCIsInN0eWxlZCIsIkJ1dHRvbiIsIk1lbnUiLCJNZW51SXRlbSIsIlR5cG9ncmFwaHkiLCJBcnJvd0ZvcndhcmRJb3NTaGFycEljb24iLCJNdWlBY2NvcmRpb24iLCJBY2NvcmRpb25Qcm9wcyIsIk11aUFjY29yZGlvblN1bW1hcnkiLCJBY2NvcmRpb25TdW1tYXJ5UHJvcHMiLCJNdWlBY2NvcmRpb25EZXRhaWxzIiwiQWNjb3JkaW9uIiwicHJvcHMiLCJ0aGVtZSIsIm1heFdpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiQWNjb3JkaW9uU3VtbWFyeSIsImZvbnRTaXplIiwicGFsZXR0ZSIsIm1vZGUiLCJmbGV4RGlyZWN0aW9uIiwidHJhbnNmb3JtIiwic3BhY2luZyIsIkFjY29yZGlvbkRldGFpbHMiLCJtYXhIZWlnaHQiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwiaGFuZGxlQ2hhbmdlIiwicGFuZWwiLCJuZXdFeHBhbmRlZCIsIndvcmRzIiwic2V0V29yZHMiLCJjYXRlZ29yeSIsIm1lbnUiLCJyYW5kb21Xb3JkIiwiZ2V0V29yZCIsIndvcmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzcGxpY2UiLCJpbmRleE9mIiwid29yZDEiLCJ3b3JkMiIsIlBhZ2luYXRpb24iLCJwYWdlIiwicGFnZU5iciIsImNlaWwiLCJwYXJzZUludCIsIm9uQ2hhbmdlIiwicGFyYW1zIiwiV29ya3BhZ2VPbmUiLCJXb3JrcGFnZVR3byIsIldvcmtwYWdlVGhyZWUiLCJXb3JrcGFnZUZvdXIiLCJXb3JrcGFnZUZpdmUiLCJEaXJlY3RMaW5rIiwiRXZlbnRzIiwiYW5pbWF0ZVNjcm9sbCIsInNjcm9sbCIsInNjcm9sbFNweSIsInNjcm9sbGVyIiwic2V0SW5zdGEiLCJhdWRpbyIsIkF1ZGlvIiwic3RhcnQiLCJwbGF5IiwibmF2YmFyIiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsInRlbGVwb3J0IiwicmVwbGFjZSIsIm9uY2UiXSwic291cmNlUm9vdCI6IiJ9