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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Assets_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Assets/assets */ \"(app-pages-browser)/./Assets/assets.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst page = ()=>{\n    _s();\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        title: \"\",\n        description: \"\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \" pt-5 px-5 sm:pt-12 sm:pl-16\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl\",\n                    children: \"Upload thumbnail\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"image\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \" mt-4\",\n                        src: !image ? _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.twitter : URL.createObjectURL(image),\n                        width: 140,\n                        height: 70,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                        lineNumber: 19,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: (e)=>setImage(e.target.files[0]),\n                    type: \"file\",\n                    id: \"image\",\n                    hidden: true,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl mt-4\",\n                    children: \"Blog Title\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \" w-full sm:w-[-500px] mt-4 px-4 py-3 border\",\n                    type: \"text\",\n                    placeholder: \"Type here\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl mt-4\",\n                    children: \"Blog Description\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    className: \" w-full sm:w-[-500px] mt-4 px-4 py-3 border\",\n                    type: \"text\",\n                    placeholder: \"write content here\",\n                    rows: 6,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl mt-4\",\n                    children: \"Blog category\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    className: \" w-40 mt-4 px-4 py-3 border text-gray-500\",\n                    name: \"category\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"Startup\",\n                            children: \"Startup\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"Technology\",\n                            children: \"Technolgy\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"Lifestyle\",\n                            children: \"Lifestyle\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \" mt8 w-40 h-12 bg-black text-white\",\n                    type: \" submit\",\n                    children: \"Add\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n            lineNumber: 16,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(page, \"4iuguNyMw2H8tuo5H7P2Obf3j20=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9hZGRQcm9kdWN0cy9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRXdDO0FBQ1Y7QUFDTDtBQUNPO0FBRS9CLE1BQU1JLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ksTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUNoQ00sT0FBTTtRQUNOQyxhQUFZO0lBQ2I7SUFDRCxxQkFDRTtrQkFDQSw0RUFBQ0M7WUFBS0MsV0FBVTs7OEJBQ2QsOERBQUNDO29CQUFFRCxXQUFVOzhCQUFXOzs7Ozs7OEJBQ3hCLDhEQUFDRTtvQkFBTUMsU0FBUTs4QkFDZiw0RUFBQ2Qsa0RBQUtBO3dCQUFDVyxXQUFVO3dCQUFRSSxLQUFLLENBQUNYLFFBQU9MLGtEQUFNQSxDQUFDaUIsT0FBTyxHQUFFQyxJQUFJQyxlQUFlLENBQUNkO3dCQUFRZSxPQUFPO3dCQUFLQyxRQUFRO3dCQUFJQyxLQUFJOzs7Ozs7Ozs7Ozs4QkFFOUcsOERBQUNDO29CQUFNQyxVQUFVLENBQUNDLElBQUluQixTQUFTbUIsRUFBRUMsTUFBTSxDQUFDQyxLQUFLLENBQUMsRUFBRTtvQkFBR0MsTUFBSztvQkFBT0MsSUFBRztvQkFBUUMsTUFBTTtvQkFBQ0MsUUFBUTs7Ozs7OzhCQUN2Riw4REFBQ2xCO29CQUFFRCxXQUFVOzhCQUFnQjs7Ozs7OzhCQUM3Qiw4REFBQ1c7b0JBQU1YLFdBQVU7b0JBQThDZ0IsTUFBSztvQkFBT0ksYUFBWTtvQkFBWUQsUUFBUTs7Ozs7OzhCQUMzRyw4REFBQ2xCO29CQUFFRCxXQUFVOzhCQUFnQjs7Ozs7OzhCQUM3Qiw4REFBQ3FCO29CQUFTckIsV0FBVTtvQkFBOENnQixNQUFLO29CQUFPSSxhQUFZO29CQUFxQkUsTUFBTTtvQkFBR0gsUUFBUTs7Ozs7OzhCQUNoSSw4REFBQ2xCO29CQUFFRCxXQUFVOzhCQUFnQjs7Ozs7OzhCQUM3Qiw4REFBQ3VCO29CQUFPdkIsV0FBVTtvQkFBNEN3QixNQUFLOztzQ0FDakUsOERBQUNDOzRCQUFPQyxPQUFNO3NDQUFVOzs7Ozs7c0NBQ3hCLDhEQUFDRDs0QkFBT0MsT0FBTTtzQ0FBYTs7Ozs7O3NDQUMzQiw4REFBQ0Q7NEJBQU9DLE9BQU07c0NBQVk7Ozs7Ozs7Ozs7Ozs4QkFFNUIsOERBQUNDO29CQUFPM0IsV0FBVTtvQkFBcUNnQixNQUFLOzhCQUFVOzs7Ozs7Ozs7Ozs7O0FBSzlFO0dBN0JPeEI7QUE4QlAsK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2FkbWluL2FkZFByb2R1Y3RzL3BhZ2UuanM/NGRiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHsgYXNzZXRzIH0gZnJvbSAnQC9Bc3NldHMvYXNzZXRzJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuIGNvbnN0IHBhZ2UgPSAoKSA9PiB7XHJcbiAgIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB0aXRsZTpcIlwiLFxyXG4gICAgZGVzY3JpcHRpb246XCJcIlxyXG4gICB9KVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPScgcHQtNSBweC01IHNtOnB0LTEyIHNtOnBsLTE2Jz5cclxuICAgICAgPHAgY2xhc3NOYW1lPScgdGV4dC14bCc+VXBsb2FkIHRodW1ibmFpbDwvcD5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9J2ltYWdlJz5cclxuICAgICAgPEltYWdlIGNsYXNzTmFtZT0nIG10LTQnIHNyYz17IWltYWdlPyBhc3NldHMudHdpdHRlcjogVVJMLmNyZWF0ZU9iamVjdFVSTChpbWFnZSl9IHdpZHRoPXsxNDB9IGhlaWdodD17NzB9IGFsdD0nJy8+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpPT5zZXRJbWFnZShlLnRhcmdldC5maWxlc1swXSl9IHR5cGU9J2ZpbGUnIGlkPSdpbWFnZScgaGlkZGVuIHJlcXVpcmVkLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9JyB0ZXh0LXhsIG10LTQnPkJsb2cgVGl0bGU8L3A+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nIHctZnVsbCBzbTp3LVstNTAwcHhdIG10LTQgcHgtNCBweS0zIGJvcmRlcicgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1R5cGUgaGVyZScgcmVxdWlyZWQvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nIHRleHQteGwgbXQtNCc+QmxvZyBEZXNjcmlwdGlvbjwvcD5cclxuICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPScgdy1mdWxsIHNtOnctWy01MDBweF0gbXQtNCBweC00IHB5LTMgYm9yZGVyJyB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nd3JpdGUgY29udGVudCBoZXJlJyByb3dzPXs2fSByZXF1aXJlZC8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPScgdGV4dC14bCBtdC00Jz5CbG9nIGNhdGVnb3J5PC9wPlxyXG4gICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPScgdy00MCBtdC00IHB4LTQgcHktMyBib3JkZXIgdGV4dC1ncmF5LTUwMCcgbmFtZT0nY2F0ZWdvcnknPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlN0YXJ0dXBcIj5TdGFydHVwPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVGVjaG5vbG9neVwiPlRlY2hub2xneTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxpZmVzdHlsZVwiPkxpZmVzdHlsZTwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPScgbXQ4IHctNDAgaC0xMiBiZy1ibGFjayB0ZXh0LXdoaXRlJyB0eXBlPScgc3VibWl0Jz5BZGQ8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuXHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgcGFnZSJdLCJuYW1lcyI6WyJhc3NldHMiLCJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJwYWdlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImRhdGEiLCJzZXREYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImZvcm0iLCJjbGFzc05hbWUiLCJwIiwibGFiZWwiLCJodG1sRm9yIiwic3JjIiwidHdpdHRlciIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaW5wdXQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsInR5cGUiLCJpZCIsImhpZGRlbiIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJ0ZXh0YXJlYSIsInJvd3MiLCJzZWxlY3QiLCJuYW1lIiwib3B0aW9uIiwidmFsdWUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/addProducts/page.js\n"));

/***/ })

});