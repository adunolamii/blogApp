"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Assets_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Assets/assets */ \"(app-pages-browser)/./Assets/assets.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst header = ()=>{\n    _s();\n    const [email, setEmail] = useState(\"\");\n    const onSubmitHandler = async (e)=>{\n        e.preventDefau;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" py-5 px-4 md:px12 lg:px28\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        src: _Assets_assets__WEBPACK_IMPORTED_MODULE_2__.assets.blogger,\n                        width: 180,\n                        alt: \"\",\n                        className: \"w-[130px] sm:w-auto\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\header.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" flex items-center gap-2 font-medium py-1  sm: px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]\",\n                        children: \"Get Started\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\header.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\header.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center my-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \" text-3xl sm:text-5xl font-medium\",\n                        children: \"Latest Blogs\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\header.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" mt-10 max-4-[-740] m-auto\",\n                        children: \"The blog app is your communication tool when publishing editorial content using different layout options, widget combinations, teaser text, or teaser images. You can publish articles pre-dated or back-dated, and even a release process is possible.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\header.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmitHandler,\n                        className: \" flex justify-between max-w-[500px] scale-75px sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: (e)=>setEmail(e.target.value),\n                                value: email,\n                                type: \"email\",\n                                placeholder: \"Enter your email\",\n                                className: \"pl-4 outline-none\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\header.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \" border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white\",\n                                children: \"Subscribe\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\header.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\header.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\header.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\header.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(header, \"Pe1zWWKcsJK82m3WyFiCTurRPxo=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (header);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ2U7QUFDVjtBQUUvQixNQUFNRyxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHQyxTQUFTO0lBRW5DLE1BQU1DLGtCQUFrQixPQUFPQztRQUM3QkEsRUFBRUMsWUFBWTtJQUNoQjtJQUNBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDVCxrREFBS0E7d0JBQ0pVLEtBQUtYLGtEQUFNQSxDQUFDWSxPQUFPO3dCQUNuQkMsT0FBTzt3QkFDUEMsS0FBSTt3QkFDSkosV0FBVTs7Ozs7O2tDQUVaLDhEQUFDSzt3QkFBT0wsV0FBVTtrQ0FBcUg7Ozs7Ozs7Ozs7OzswQkFLekksOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ007d0JBQUdOLFdBQVU7a0NBQW9DOzs7Ozs7a0NBQ2xELDhEQUFDTzt3QkFBRVAsV0FBVTtrQ0FBNkI7Ozs7OztrQ0FHMUMsOERBQUNRO3dCQUFLQyxVQUFVYjt3QkFBaUJJLFdBQVU7OzBDQUN6Qyw4REFBQ1U7Z0NBQ0NDLFVBQVUsQ0FBQ2QsSUFBSUgsU0FBU0csRUFBRWUsTUFBTSxDQUFDQyxLQUFLO2dDQUN0Q0EsT0FBT3BCO2dDQUNQcUIsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDWmYsV0FBVTs7Ozs7OzBDQUVaLDhEQUFDSztnQ0FDQ1MsTUFBSztnQ0FDTGQsV0FBVTswQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0EzQ01SO0FBNkNOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZGVyLmpzP2MwOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBhc3NldHMgfSBmcm9tIFwiQC9Bc3NldHMvYXNzZXRzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIilcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gYXN5bmMgKGUpPT57XHJcbiAgICBlLnByZXZlbnREZWZhdVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgcHktNSBweC00IG1kOnB4MTIgbGc6cHgyOFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz17YXNzZXRzLmJsb2dnZXJ9XHJcbiAgICAgICAgICB3aWR0aD17MTgwfVxyXG4gICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctWzEzMHB4XSBzbTp3LWF1dG9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgZm9udC1tZWRpdW0gcHktMSAgc206IHB4LTYgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItYmxhY2sgc2hhZG93LVstN3B4XzdweF8wcHhfIzAwMDAwMF1cIj5cclxuICAgICAgICAgIEdldCBTdGFydGVkXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG15LThcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHRleHQtM3hsIHNtOnRleHQtNXhsIGZvbnQtbWVkaXVtXCI+TGF0ZXN0IEJsb2dzPC9oMT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCIgbXQtMTAgbWF4LTQtWy03NDBdIG0tYXV0b1wiPlxyXG4gICAgICAgIFRoZSBibG9nIGFwcCBpcyB5b3VyIGNvbW11bmljYXRpb24gdG9vbCB3aGVuIHB1Ymxpc2hpbmcgZWRpdG9yaWFsIGNvbnRlbnQgdXNpbmcgZGlmZmVyZW50IGxheW91dCBvcHRpb25zLCB3aWRnZXQgY29tYmluYXRpb25zLCB0ZWFzZXIgdGV4dCwgb3IgdGVhc2VyIGltYWdlcy4gWW91IGNhbiBwdWJsaXNoIGFydGljbGVzIHByZS1kYXRlZCBvciBiYWNrLWRhdGVkLCBhbmQgZXZlbiBhIHJlbGVhc2UgcHJvY2VzcyBpcyBwb3NzaWJsZS5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0SGFuZGxlcn0gY2xhc3NOYW1lPVwiIGZsZXgganVzdGlmeS1iZXR3ZWVuIG1heC13LVs1MDBweF0gc2NhbGUtNzVweCBzbTpzY2FsZS0xMDAgbXgtYXV0byBtdC0xMCBib3JkZXIgYm9yZGVyLWJsYWNrIHNoYWRvdy1bLTdweF83cHhfMHB4XyMwMDAwMDBdXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTQgb3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgYm9yZGVyLWwgYm9yZGVyLWJsYWNrIHB5LTQgcHgtNCBzbTpweC04IGFjdGl2ZTpiZy1ncmF5LTYwMCBhY3RpdmU6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFN1YnNjcmliZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImFzc2V0cyIsIkltYWdlIiwiaGVhZGVyIiwiZW1haWwiLCJzZXRFbWFpbCIsInVzZVN0YXRlIiwib25TdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdSIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImJsb2dnZXIiLCJ3aWR0aCIsImFsdCIsImJ1dHRvbiIsImgxIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/header.js\n"));

/***/ })

});