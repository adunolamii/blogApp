"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/addProducts/page",{

/***/ "(app-pages-browser)/./app/admin/addProducts/page.js":
/*!***************************************!*\
  !*** ./app/admin/addProducts/page.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Assets_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Assets/assets */ \"(app-pages-browser)/./Assets/assets.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst page = ()=>{\n    _s();\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \" pt-5 px-5 sm:pt-12 sm:pl-16\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl\",\n                    children: \"Upload thumbnail\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 13,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"image\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \" mt-4\",\n                        src: !image ? _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.twitter : URL.createObjectURL(image),\n                        width: 140,\n                        height: 70,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                        lineNumber: 15,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: (e)=>setImage(e.target.files[0]),\n                    type: \"file\",\n                    id: \"image\",\n                    hidden: true,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl mt-4\",\n                    children: \"Blog Title\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \" w-full sm:w-[-500px] mt-4 px-4 py-3 border\",\n                    type: \"text\",\n                    placeholder: \"Type here\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl mt-4\",\n                    children: \"Blog Description\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    className: \" w-full sm:w-[-500px] mt-4 px-4 py-3 border\",\n                    type: \"text\",\n                    placeholder: \"write content here\",\n                    rows: 6,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl mt-4\",\n                    children: \"Blog category\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    className: \" w-40 mt-4 px-4 py-3 border text-gray-500\",\n                    name: \"category\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"Startup\",\n                            children: \"Startup\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"Technology\",\n                            children: \"Technolgy\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"Lifestyle\",\n                            children: \"Lifestyle\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \" mt8 w-40 h-12 bg-black text-w\",\n                    type: \" submit\",\n                    children: \"Add\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n            lineNumber: 12,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(page, \"959MivmRNhyRsEn8FUz0UnbNIpQ=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9hZGRQcm9kdWN0cy9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRXdDO0FBQ1Y7QUFDTDtBQUNPO0FBRS9CLE1BQU1JLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3BDLHFCQUNFO2tCQUNBLDRFQUFDSTtZQUFLQyxXQUFVOzs4QkFDZCw4REFBQ0M7b0JBQUVELFdBQVU7OEJBQVc7Ozs7Ozs4QkFDeEIsOERBQUNFO29CQUFNQyxTQUFROzhCQUNmLDRFQUFDVixrREFBS0E7d0JBQUNPLFdBQVU7d0JBQVFJLEtBQUssQ0FBQ1AsUUFBT0wsa0RBQU1BLENBQUNhLE9BQU8sR0FBRUMsSUFBSUMsZUFBZSxDQUFDVjt3QkFBUVcsT0FBTzt3QkFBS0MsUUFBUTt3QkFBSUMsS0FBSTs7Ozs7Ozs7Ozs7OEJBRTlHLDhEQUFDQztvQkFBTUMsVUFBVSxDQUFDQyxJQUFJZixTQUFTZSxFQUFFQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxFQUFFO29CQUFHQyxNQUFLO29CQUFPQyxJQUFHO29CQUFRQyxNQUFNO29CQUFDQyxRQUFROzs7Ozs7OEJBQ3ZGLDhEQUFDbEI7b0JBQUVELFdBQVU7OEJBQWdCOzs7Ozs7OEJBQzdCLDhEQUFDVztvQkFBTVgsV0FBVTtvQkFBOENnQixNQUFLO29CQUFPSSxhQUFZO29CQUFZRCxRQUFROzs7Ozs7OEJBQzNHLDhEQUFDbEI7b0JBQUVELFdBQVU7OEJBQWdCOzs7Ozs7OEJBQzdCLDhEQUFDcUI7b0JBQVNyQixXQUFVO29CQUE4Q2dCLE1BQUs7b0JBQU9JLGFBQVk7b0JBQXFCRSxNQUFNO29CQUFHSCxRQUFROzs7Ozs7OEJBQ2hJLDhEQUFDbEI7b0JBQUVELFdBQVU7OEJBQWdCOzs7Ozs7OEJBQzdCLDhEQUFDdUI7b0JBQU92QixXQUFVO29CQUE0Q3dCLE1BQUs7O3NDQUNqRSw4REFBQ0M7NEJBQU9DLE9BQU07c0NBQVU7Ozs7OztzQ0FDeEIsOERBQUNEOzRCQUFPQyxPQUFNO3NDQUFhOzs7Ozs7c0NBQzNCLDhEQUFDRDs0QkFBT0MsT0FBTTtzQ0FBWTs7Ozs7Ozs7Ozs7OzhCQUU1Qiw4REFBQ0M7b0JBQU8zQixXQUFVO29CQUFpQ2dCLE1BQUs7OEJBQVU7Ozs7Ozs7Ozs7Ozs7QUFLMUU7R0F6Qk9wQjtBQTBCUCwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYWRtaW4vYWRkUHJvZHVjdHMvcGFnZS5qcz80ZGIwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgeyBhc3NldHMgfSBmcm9tICdAL0Fzc2V0cy9hc3NldHMnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG4gY29uc3QgcGFnZSA9ICgpID0+IHtcclxuICAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9JyBwdC01IHB4LTUgc206cHQtMTIgc206cGwtMTYnPlxyXG4gICAgICA8cCBjbGFzc05hbWU9JyB0ZXh0LXhsJz5VcGxvYWQgdGh1bWJuYWlsPC9wPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj0naW1hZ2UnPlxyXG4gICAgICA8SW1hZ2UgY2xhc3NOYW1lPScgbXQtNCcgc3JjPXshaW1hZ2U/IGFzc2V0cy50d2l0dGVyOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGltYWdlKX0gd2lkdGg9ezE0MH0gaGVpZ2h0PXs3MH0gYWx0PScnLz5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSk9PnNldEltYWdlKGUudGFyZ2V0LmZpbGVzWzBdKX0gdHlwZT0nZmlsZScgaWQ9J2ltYWdlJyBoaWRkZW4gcmVxdWlyZWQvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nIHRleHQteGwgbXQtNCc+QmxvZyBUaXRsZTwvcD5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPScgdy1mdWxsIHNtOnctWy01MDBweF0gbXQtNCBweC00IHB5LTMgYm9yZGVyJyB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nVHlwZSBoZXJlJyByZXF1aXJlZC8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPScgdGV4dC14bCBtdC00Jz5CbG9nIERlc2NyaXB0aW9uPC9wPlxyXG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9JyB3LWZ1bGwgc206dy1bLTUwMHB4XSBtdC00IHB4LTQgcHktMyBib3JkZXInIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSd3cml0ZSBjb250ZW50IGhlcmUnIHJvd3M9ezZ9IHJlcXVpcmVkLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9JyB0ZXh0LXhsIG10LTQnPkJsb2cgY2F0ZWdvcnk8L3A+XHJcbiAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9JyB3LTQwIG10LTQgcHgtNCBweS0zIGJvcmRlciB0ZXh0LWdyYXktNTAwJyBuYW1lPSdjYXRlZ29yeSc+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3RhcnR1cFwiPlN0YXJ0dXA8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUZWNobm9sb2d5XCI+VGVjaG5vbGd5PC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTGlmZXN0eWxlXCI+TGlmZXN0eWxlPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9JyBtdDggdy00MCBoLTEyIGJnLWJsYWNrIHRleHQtdycgdHlwZT0nIHN1Ym1pdCc+QWRkPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcblxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2UiXSwibmFtZXMiOlsiYXNzZXRzIiwiSW1hZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwicGFnZSIsImltYWdlIiwic2V0SW1hZ2UiLCJmb3JtIiwiY2xhc3NOYW1lIiwicCIsImxhYmVsIiwiaHRtbEZvciIsInNyYyIsInR3aXR0ZXIiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImlucHV0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJ0eXBlIiwiaWQiLCJoaWRkZW4iLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJyb3dzIiwic2VsZWN0IiwibmFtZSIsIm9wdGlvbiIsInZhbHVlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/addProducts/page.js\n"));

/***/ })

});