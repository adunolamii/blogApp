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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Assets_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Assets/assets */ \"(app-pages-browser)/./Assets/assets.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst page = ()=>{\n    _s();\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        title: \"\",\n        description: \"\",\n        category: \"startup\",\n        author: \"Ade\",\n        authorImg: \"/aut.jpg\"\n    });\n    const onChangeHandler = (event)=>{\n        const name = event.target.name;\n        const value = event.target.value;\n        setData((data)=>({\n                ...data,\n                [name]: value\n            }));\n        console.log(data);\n    };\n    const onSubmitHandler = async (e)=>{\n        e.preventDefault();\n        const formData = new FormData();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: onSubmitHandler,\n            className: \" pt-5 px-5 sm:pt-12 sm:pl-16\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl\",\n                    children: \"Upload thumbnail\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"image\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \" mt-4\",\n                        src: !image ? _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.twitter : URL.createObjectURL(image),\n                        width: 140,\n                        height: 70,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: (e)=>setImage(e.target.files[0]),\n                    type: \"file\",\n                    id: \"image\",\n                    hidden: true,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl mt-4\",\n                    children: \"Blog Title\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    name: \"title\",\n                    onChange: onChangeHandler,\n                    value: data.title,\n                    className: \" w-full sm:w-[-500px] mt-4 px-4 py-3 border\",\n                    type: \"text\",\n                    placeholder: \"Type here\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl mt-4\",\n                    children: \"Blog Description\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    name: \"description\",\n                    onChange: onChangeHandler,\n                    value: data.description,\n                    className: \" w-full sm:w-[-500px] mt-4 px-4 py-3 border\",\n                    type: \"text\",\n                    placeholder: \"write content here\",\n                    rows: 6,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl mt-4\",\n                    children: \"Blog category\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    name: \"category\",\n                    onChange: onChangeHandler,\n                    value: data.category,\n                    className: \" w-40 mt-4 px-4 py-3 border text-gray-500\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"Startup\",\n                            children: \"Startup\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"Technology\",\n                            children: \"Technolgy\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"Lifestyle\",\n                            children: \"Lifestyle\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \" mt8 w-40 h-12 bg-black text-white\",\n                    type: \" submit\",\n                    children: \"Add\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n            lineNumber: 31,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(page, \"S/TteIyt+gpMdeQZiBZXo4HAMQE=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9hZGRQcm9kdWN0cy9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRXdDO0FBQ1Y7QUFDTDtBQUNPO0FBRS9CLE1BQU1JLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ksTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUNoQ00sT0FBTTtRQUNOQyxhQUFZO1FBQ1pDLFVBQVM7UUFDVEMsUUFBTztRQUNQQyxXQUFVO0lBQ1g7SUFDQSxNQUFNQyxrQkFBa0IsQ0FBQ0M7UUFDdEIsTUFBTUMsT0FBT0QsTUFBTUUsTUFBTSxDQUFDRCxJQUFJO1FBQzlCLE1BQU1FLFFBQVFILE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSztRQUNoQ1YsUUFBUUQsQ0FBQUEsT0FBTztnQkFBQyxHQUFHQSxJQUFJO2dCQUFFLENBQUNTLEtBQUssRUFBRUU7WUFBSztRQUN0Q0MsUUFBUUMsR0FBRyxDQUFDYjtJQUVmO0lBQ0EsTUFBTWMsa0JBQWtCLE9BQU9DO1FBQzVCQSxFQUFFQyxjQUFjO1FBRWhCLE1BQU1DLFdBQVcsSUFBSUM7SUFDeEI7SUFDRCxxQkFDRTtrQkFDQSw0RUFBQ0M7WUFBS0MsVUFBVU47WUFBaUJPLFdBQVU7OzhCQUN6Qyw4REFBQ0M7b0JBQUVELFdBQVU7OEJBQVc7Ozs7Ozs4QkFDeEIsOERBQUNFO29CQUFNQyxTQUFROzhCQUNmLDRFQUFDOUIsa0RBQUtBO3dCQUFDMkIsV0FBVTt3QkFBUUksS0FBSyxDQUFDM0IsUUFBT0wsa0RBQU1BLENBQUNpQyxPQUFPLEdBQUVDLElBQUlDLGVBQWUsQ0FBQzlCO3dCQUFRK0IsT0FBTzt3QkFBS0MsUUFBUTt3QkFBSUMsS0FBSTs7Ozs7Ozs7Ozs7OEJBRTlHLDhEQUFDQztvQkFBTUMsVUFBVSxDQUFDbEIsSUFBSWhCLFNBQVNnQixFQUFFTCxNQUFNLENBQUN3QixLQUFLLENBQUMsRUFBRTtvQkFBR0MsTUFBSztvQkFBT0MsSUFBRztvQkFBUUMsTUFBTTtvQkFBQ0MsUUFBUTs7Ozs7OzhCQUN2Riw4REFBQ2hCO29CQUFFRCxXQUFVOzhCQUFnQjs7Ozs7OzhCQUM3Qiw4REFBQ1c7b0JBQU12QixNQUFLO29CQUFRd0IsVUFBVTFCO29CQUFpQkksT0FBT1gsS0FBS0UsS0FBSztvQkFBRW1CLFdBQVU7b0JBQThDYyxNQUFLO29CQUFPSSxhQUFZO29CQUFZRCxRQUFROzs7Ozs7OEJBQ3RLLDhEQUFDaEI7b0JBQUVELFdBQVU7OEJBQWdCOzs7Ozs7OEJBQzdCLDhEQUFDbUI7b0JBQVMvQixNQUFLO29CQUFjd0IsVUFBVTFCO29CQUFpQkksT0FBT1gsS0FBS0csV0FBVztvQkFBRWtCLFdBQVU7b0JBQThDYyxNQUFLO29CQUFPSSxhQUFZO29CQUFxQkUsTUFBTTtvQkFBR0gsUUFBUTs7Ozs7OzhCQUN2TSw4REFBQ2hCO29CQUFFRCxXQUFVOzhCQUFnQjs7Ozs7OzhCQUM3Qiw4REFBQ3FCO29CQUFPakMsTUFBSztvQkFBV3dCLFVBQVUxQjtvQkFBaUJJLE9BQU9YLEtBQUtJLFFBQVE7b0JBQUVpQixXQUFVOztzQ0FDakYsOERBQUNzQjs0QkFBT2hDLE9BQU07c0NBQVU7Ozs7OztzQ0FDeEIsOERBQUNnQzs0QkFBT2hDLE9BQU07c0NBQWE7Ozs7OztzQ0FDM0IsOERBQUNnQzs0QkFBT2hDLE9BQU07c0NBQVk7Ozs7Ozs7Ozs7Ozs4QkFFNUIsOERBQUNpQztvQkFBT3ZCLFdBQVU7b0JBQXFDYyxNQUFLOzhCQUFVOzs7Ozs7Ozs7Ozs7O0FBSzlFO0dBNUNPdEM7QUE2Q1AsK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2FkbWluL2FkZFByb2R1Y3RzL3BhZ2UuanM/NGRiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHsgYXNzZXRzIH0gZnJvbSAnQC9Bc3NldHMvYXNzZXRzJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuIGNvbnN0IHBhZ2UgPSAoKSA9PiB7XHJcbiAgIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB0aXRsZTpcIlwiLFxyXG4gICAgZGVzY3JpcHRpb246XCJcIixcclxuICAgIGNhdGVnb3J5Olwic3RhcnR1cFwiLFxyXG4gICAgYXV0aG9yOlwiQWRlXCIsXHJcbiAgICBhdXRob3JJbWc6XCIvYXV0LmpwZ1wiXHJcbiAgIH0pXHJcbiAgIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9IChldmVudCk9PntcclxuICAgICAgY29uc3QgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lXHJcbiAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICBzZXREYXRhKGRhdGE9Pih7Li4uZGF0YSwgW25hbWVdOiB2YWx1ZX0pKVxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgXHJcbiAgIH1cclxuICAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gYXN5bmMgKGUpPT57XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXRIYW5kbGVyfSBjbGFzc05hbWU9JyBwdC01IHB4LTUgc206cHQtMTIgc206cGwtMTYnPlxyXG4gICAgICA8cCBjbGFzc05hbWU9JyB0ZXh0LXhsJz5VcGxvYWQgdGh1bWJuYWlsPC9wPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj0naW1hZ2UnPlxyXG4gICAgICA8SW1hZ2UgY2xhc3NOYW1lPScgbXQtNCcgc3JjPXshaW1hZ2U/IGFzc2V0cy50d2l0dGVyOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGltYWdlKX0gd2lkdGg9ezE0MH0gaGVpZ2h0PXs3MH0gYWx0PScnLz5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSk9PnNldEltYWdlKGUudGFyZ2V0LmZpbGVzWzBdKX0gdHlwZT0nZmlsZScgaWQ9J2ltYWdlJyBoaWRkZW4gcmVxdWlyZWQvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nIHRleHQteGwgbXQtNCc+QmxvZyBUaXRsZTwvcD5cclxuICAgICAgICA8aW5wdXQgbmFtZT0ndGl0bGUnIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9IHZhbHVlPXtkYXRhLnRpdGxlfSBjbGFzc05hbWU9JyB3LWZ1bGwgc206dy1bLTUwMHB4XSBtdC00IHB4LTQgcHktMyBib3JkZXInIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdUeXBlIGhlcmUnIHJlcXVpcmVkLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9JyB0ZXh0LXhsIG10LTQnPkJsb2cgRGVzY3JpcHRpb248L3A+XHJcbiAgICAgICAgPHRleHRhcmVhIG5hbWU9J2Rlc2NyaXB0aW9uJyBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfSB2YWx1ZT17ZGF0YS5kZXNjcmlwdGlvbn0gY2xhc3NOYW1lPScgdy1mdWxsIHNtOnctWy01MDBweF0gbXQtNCBweC00IHB5LTMgYm9yZGVyJyB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nd3JpdGUgY29udGVudCBoZXJlJyByb3dzPXs2fSByZXF1aXJlZC8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPScgdGV4dC14bCBtdC00Jz5CbG9nIGNhdGVnb3J5PC9wPlxyXG4gICAgICAgIDxzZWxlY3QgbmFtZT0nY2F0ZWdvcnknIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9IHZhbHVlPXtkYXRhLmNhdGVnb3J5fSBjbGFzc05hbWU9JyB3LTQwIG10LTQgcHgtNCBweS0zIGJvcmRlciB0ZXh0LWdyYXktNTAwJz5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTdGFydHVwXCI+U3RhcnR1cDwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRlY2hub2xvZ3lcIj5UZWNobm9sZ3k8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJMaWZlc3R5bGVcIj5MaWZlc3R5bGU8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nIG10OCB3LTQwIGgtMTIgYmctYmxhY2sgdGV4dC13aGl0ZScgdHlwZT0nIHN1Ym1pdCc+QWRkPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcblxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2UiXSwibmFtZXMiOlsiYXNzZXRzIiwiSW1hZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwicGFnZSIsImltYWdlIiwic2V0SW1hZ2UiLCJkYXRhIiwic2V0RGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImF1dGhvciIsImF1dGhvckltZyIsIm9uQ2hhbmdlSGFuZGxlciIsImV2ZW50IiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJwIiwibGFiZWwiLCJodG1sRm9yIiwic3JjIiwidHdpdHRlciIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaW5wdXQiLCJvbkNoYW5nZSIsImZpbGVzIiwidHlwZSIsImlkIiwiaGlkZGVuIiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsInRleHRhcmVhIiwicm93cyIsInNlbGVjdCIsIm9wdGlvbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/addProducts/page.js\n"));

/***/ })

});