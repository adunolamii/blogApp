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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Assets_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Assets/assets */ \"(app-pages-browser)/./Assets/assets.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst page = ()=>{\n    _s();\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        title: \"\",\n        desd\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \" pt-5 px-5 sm:pt-12 sm:pl-16\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl\",\n                    children: \"Upload thumbnail\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"image\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \" mt-4\",\n                        src: !image ? _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.twitter : URL.createObjectURL(image),\n                        width: 140,\n                        height: 70,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                        lineNumber: 19,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: (e)=>setImage(e.target.files[0]),\n                    type: \"file\",\n                    id: \"image\",\n                    hidden: true,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl mt-4\",\n                    children: \"Blog Title\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \" w-full sm:w-[-500px] mt-4 px-4 py-3 border\",\n                    type: \"text\",\n                    placeholder: \"Type here\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl mt-4\",\n                    children: \"Blog Description\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    className: \" w-full sm:w-[-500px] mt-4 px-4 py-3 border\",\n                    type: \"text\",\n                    placeholder: \"write content here\",\n                    rows: 6,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl mt-4\",\n                    children: \"Blog category\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    className: \" w-40 mt-4 px-4 py-3 border text-gray-500\",\n                    name: \"category\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"Startup\",\n                            children: \"Startup\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"Technology\",\n                            children: \"Technolgy\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"Lifestyle\",\n                            children: \"Lifestyle\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \" mt8 w-40 h-12 bg-black text-white\",\n                    type: \" submit\",\n                    children: \"Add\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n            lineNumber: 16,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(page, \"UB40xeP3vB4AfL6vIkCRgs3DNr8=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9hZGRQcm9kdWN0cy9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRXdDO0FBQ1Y7QUFDTDtBQUNPO0FBRS9CLE1BQU1JLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ksTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUNoQ00sT0FBTTtRQUNOQztJQUNEO0lBQ0QscUJBQ0U7a0JBQ0EsNEVBQUNDO1lBQUtDLFdBQVU7OzhCQUNkLDhEQUFDQztvQkFBRUQsV0FBVTs4QkFBVzs7Ozs7OzhCQUN4Qiw4REFBQ0U7b0JBQU1DLFNBQVE7OEJBQ2YsNEVBQUNkLGtEQUFLQTt3QkFBQ1csV0FBVTt3QkFBUUksS0FBSyxDQUFDWCxRQUFPTCxrREFBTUEsQ0FBQ2lCLE9BQU8sR0FBRUMsSUFBSUMsZUFBZSxDQUFDZDt3QkFBUWUsT0FBTzt3QkFBS0MsUUFBUTt3QkFBSUMsS0FBSTs7Ozs7Ozs7Ozs7OEJBRTlHLDhEQUFDQztvQkFBTUMsVUFBVSxDQUFDQyxJQUFJbkIsU0FBU21CLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7b0JBQUdDLE1BQUs7b0JBQU9DLElBQUc7b0JBQVFDLE1BQU07b0JBQUNDLFFBQVE7Ozs7Ozs4QkFDdkYsOERBQUNsQjtvQkFBRUQsV0FBVTs4QkFBZ0I7Ozs7Ozs4QkFDN0IsOERBQUNXO29CQUFNWCxXQUFVO29CQUE4Q2dCLE1BQUs7b0JBQU9JLGFBQVk7b0JBQVlELFFBQVE7Ozs7Ozs4QkFDM0csOERBQUNsQjtvQkFBRUQsV0FBVTs4QkFBZ0I7Ozs7Ozs4QkFDN0IsOERBQUNxQjtvQkFBU3JCLFdBQVU7b0JBQThDZ0IsTUFBSztvQkFBT0ksYUFBWTtvQkFBcUJFLE1BQU07b0JBQUdILFFBQVE7Ozs7Ozs4QkFDaEksOERBQUNsQjtvQkFBRUQsV0FBVTs4QkFBZ0I7Ozs7Ozs4QkFDN0IsOERBQUN1QjtvQkFBT3ZCLFdBQVU7b0JBQTRDd0IsTUFBSzs7c0NBQ2pFLDhEQUFDQzs0QkFBT0MsT0FBTTtzQ0FBVTs7Ozs7O3NDQUN4Qiw4REFBQ0Q7NEJBQU9DLE9BQU07c0NBQWE7Ozs7OztzQ0FDM0IsOERBQUNEOzRCQUFPQyxPQUFNO3NDQUFZOzs7Ozs7Ozs7Ozs7OEJBRTVCLDhEQUFDQztvQkFBTzNCLFdBQVU7b0JBQXFDZ0IsTUFBSzs4QkFBVTs7Ozs7Ozs7Ozs7OztBQUs5RTtHQTdCT3hCO0FBOEJQLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hZG1pbi9hZGRQcm9kdWN0cy9wYWdlLmpzPzRkYjAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IGFzc2V0cyB9IGZyb20gJ0AvQXNzZXRzL2Fzc2V0cydcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbiBjb25zdCBwYWdlID0gKCkgPT4ge1xyXG4gICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgdGl0bGU6XCJcIixcclxuICAgIGRlc2RcclxuICAgfSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxmb3JtIGNsYXNzTmFtZT0nIHB0LTUgcHgtNSBzbTpwdC0xMiBzbTpwbC0xNic+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT0nIHRleHQteGwnPlVwbG9hZCB0aHVtYm5haWw8L3A+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPSdpbWFnZSc+XHJcbiAgICAgIDxJbWFnZSBjbGFzc05hbWU9JyBtdC00JyBzcmM9eyFpbWFnZT8gYXNzZXRzLnR3aXR0ZXI6IFVSTC5jcmVhdGVPYmplY3RVUkwoaW1hZ2UpfSB3aWR0aD17MTQwfSBoZWlnaHQ9ezcwfSBhbHQ9JycvPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKT0+c2V0SW1hZ2UoZS50YXJnZXQuZmlsZXNbMF0pfSB0eXBlPSdmaWxlJyBpZD0naW1hZ2UnIGhpZGRlbiByZXF1aXJlZC8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPScgdGV4dC14bCBtdC00Jz5CbG9nIFRpdGxlPC9wPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9JyB3LWZ1bGwgc206dy1bLTUwMHB4XSBtdC00IHB4LTQgcHktMyBib3JkZXInIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdUeXBlIGhlcmUnIHJlcXVpcmVkLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9JyB0ZXh0LXhsIG10LTQnPkJsb2cgRGVzY3JpcHRpb248L3A+XHJcbiAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT0nIHctZnVsbCBzbTp3LVstNTAwcHhdIG10LTQgcHgtNCBweS0zIGJvcmRlcicgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J3dyaXRlIGNvbnRlbnQgaGVyZScgcm93cz17Nn0gcmVxdWlyZWQvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nIHRleHQteGwgbXQtNCc+QmxvZyBjYXRlZ29yeTwvcD5cclxuICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nIHctNDAgbXQtNCBweC00IHB5LTMgYm9yZGVyIHRleHQtZ3JheS01MDAnIG5hbWU9J2NhdGVnb3J5Jz5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTdGFydHVwXCI+U3RhcnR1cDwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRlY2hub2xvZ3lcIj5UZWNobm9sZ3k8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJMaWZlc3R5bGVcIj5MaWZlc3R5bGU8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nIG10OCB3LTQwIGgtMTIgYmctYmxhY2sgdGV4dC13aGl0ZScgdHlwZT0nIHN1Ym1pdCc+QWRkPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcblxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2UiXSwibmFtZXMiOlsiYXNzZXRzIiwiSW1hZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwicGFnZSIsImltYWdlIiwic2V0SW1hZ2UiLCJkYXRhIiwic2V0RGF0YSIsInRpdGxlIiwiZGVzZCIsImZvcm0iLCJjbGFzc05hbWUiLCJwIiwibGFiZWwiLCJodG1sRm9yIiwic3JjIiwidHdpdHRlciIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaW5wdXQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsInR5cGUiLCJpZCIsImhpZGRlbiIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJ0ZXh0YXJlYSIsInJvd3MiLCJzZWxlY3QiLCJuYW1lIiwib3B0aW9uIiwidmFsdWUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/addProducts/page.js\n"));

/***/ })

});