"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/blogs/[id]/page",{

/***/ "(app-pages-browser)/./app/blogs/[id]/page.js":
/*!********************************!*\
  !*** ./app/blogs/[id]/page.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Assets_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Assets/assets */ \"(app-pages-browser)/./Assets/assets.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst page = (param)=>{\n    let { params } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const fetchBlogData = ()=>{\n        for(let i = 0; i < _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.blog_data.length; i++){\n            if (Number(params.id) === _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.blog_data[i].id) {\n                setData(_Assets_assets__WEBPACK_IMPORTED_MODULE_1__.blog_data[1]);\n                console.log(_Assets_assets__WEBPACK_IMPORTED_MODULE_1__.blog_data[1]);\n                break;\n            }\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchBlogData();\n    }, []);\n    return data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" bg-gray-200 py-5 px-5 md:px-12 lg:px28\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" flex justify-between items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.blogger,\n                                width: 180,\n                                alt: \"\",\n                                className: \" w-[-130px] sm:w-auto\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \" flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]\",\n                                children: \"Get Started\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" text-center my-24 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto\",\n                                children: data.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \" mt-1 pb-2 text-lg max-w-[740px] mx-auto\",\n                                children: data.author\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"border-4 border-white\",\n                        src: data.image,\n                        width: 1280,\n                        height: 720,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"my-8 text-[-26px] font-semibold\",\n                        children: \"Introduction:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"\",\n                        children: data.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \" my-5 text-[-18px] font-semibold\",\n                        children: \"Step1: Self reflection and goal setting\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \" my-5 text-[-18px] font-semibold\",\n                        children: \"Step1: Self reflection and goal setting\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \" my-5 text-[-18px] font-semibold\",\n                        children: \"Conclusion: Self reflection and goal setting\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-black font-semibold my-4\",\n                        children: \"Share this articles on social medium\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.fbk,\n                                width: 50,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 62,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.twitter,\n                                width: 50,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 63,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.ig,\n                                width: 50,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 64,\n                                columnNumber: 5\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 61,\n                        columnNumber: 4\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n_s(page, \"fQZRxy/+nAZ7NLS1X4dVhrlp8Go=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ibG9ncy9baWRdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFbUQ7QUFDckI7QUFDTDtBQUNrQjtBQUUzQyxNQUFNTSxPQUFPO1FBQUMsRUFBQ0MsTUFBTSxFQUFDOztJQUNsQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUM7SUFFakMsTUFBTU0sZ0JBQWdCO1FBQ2xCLElBQUksSUFBSUMsSUFBRSxHQUFHQSxJQUFFVixxREFBU0EsQ0FBQ1csTUFBTSxFQUFFRCxJQUNqQztZQUNJLElBQUlFLE9BQU9OLE9BQU9PLEVBQUUsTUFBSWIscURBQVMsQ0FBQ1UsRUFBRSxDQUFDRyxFQUFFLEVBQUM7Z0JBRXBDTCxRQUFRUixxREFBUyxDQUFDLEVBQUU7Z0JBQ3BCYyxRQUFRQyxHQUFHLENBQUNmLHFEQUFTLENBQUMsRUFBRTtnQkFFeEI7WUFDUjtRQUNKO0lBQ0E7SUFFQUksZ0RBQVNBLENBQUM7UUFDTks7SUFHSixHQUFHLEVBQUU7SUFFUCxPQUFRRixxQkFBTTs7MEJBQ1osOERBQUNTO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDaEIsa0RBQUtBO2dDQUFDaUIsS0FBS25CLGtEQUFNQSxDQUFDb0IsT0FBTztnQ0FBRUMsT0FBTztnQ0FBS0MsS0FBSTtnQ0FBR0osV0FBVTs7Ozs7OzBDQUN6RCw4REFBQ0s7Z0NBQU9MLFdBQVU7MENBQW1IOzs7Ozs7Ozs7Ozs7a0NBRXpJLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNNO2dDQUFHTixXQUFVOzBDQUE0RFYsS0FBS2lCLEtBQUs7Ozs7OzswQ0FDcEYsOERBQUN2QixrREFBS0E7Ozs7OzBDQUNOLDhEQUFDd0I7Z0NBQUVSLFdBQVU7MENBQTRDVixLQUFLbUIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUk1RSw4REFBQ1Y7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDaEIsa0RBQUtBO3dCQUFDZ0IsV0FBVTt3QkFBd0JDLEtBQUtYLEtBQUtvQixLQUFLO3dCQUFFUCxPQUFPO3dCQUFNUSxRQUFRO3dCQUFLUCxLQUFJOzs7Ozs7a0NBQ3hGLDhEQUFDRTt3QkFBR04sV0FBVTtrQ0FBa0M7Ozs7OztrQ0FDaEQsOERBQUNRO3dCQUFFUixXQUFVO2tDQUFJVixLQUFLc0IsV0FBVzs7Ozs7O2tDQUNqQyw4REFBQ0M7d0JBQUdiLFdBQVU7a0NBQW1DOzs7Ozs7a0NBQ2pELDhEQUFDUTt3QkFBRVIsV0FBVTtrQ0FBUTs7Ozs7O2tDQUNyQiw4REFBQ1E7d0JBQUVSLFdBQVU7a0NBQVE7Ozs7OztrQ0FHckIsOERBQUNhO3dCQUFHYixXQUFVO2tDQUFtQzs7Ozs7O2tDQUNqRCw4REFBQ1E7d0JBQUVSLFdBQVU7a0NBQVE7Ozs7OztrQ0FDckIsOERBQUNRO3dCQUFFUixXQUFVO2tDQUFROzs7Ozs7a0NBRXJCLDhEQUFDYTt3QkFBR2IsV0FBVTtrQ0FBbUM7Ozs7OztrQ0FDakQsOERBQUNRO3dCQUFFUixXQUFVO2tDQUFROzs7Ozs7a0NBQ3JCLDhEQUFDUTt3QkFBRVIsV0FBVTtrQ0FBUTs7Ozs7O2tDQUNyQiw4REFBQ1E7d0JBQUVSLFdBQVU7a0NBQWdDOzs7Ozs7a0NBRWxELDhEQUFDRDs7MENBQ0EsOERBQUNmLGtEQUFLQTtnQ0FBQ2lCLEtBQUtuQixrREFBTUEsQ0FBQ2dDLEdBQUc7Z0NBQUVYLE9BQU87Z0NBQUlDLEtBQUk7Ozs7OzswQ0FDdkMsOERBQUNwQixrREFBS0E7Z0NBQUNpQixLQUFLbkIsa0RBQU1BLENBQUNpQyxPQUFPO2dDQUFFWixPQUFPO2dDQUFJQyxLQUFJOzs7Ozs7MENBQzNDLDhEQUFDcEIsa0RBQUtBO2dDQUFDaUIsS0FBS25CLGtEQUFNQSxDQUFDa0MsRUFBRTtnQ0FBRWIsT0FBTztnQ0FBSUMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FJbEM7QUFFUjtHQTlETWhCO0FBZ0VOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9ibG9ncy9baWRdL3BhZ2UuanM/N2ZiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgYXNzZXRzLCBibG9nX2RhdGEgfSBmcm9tICdAL0Fzc2V0cy9hc3NldHMnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IHBhZ2UgPSAoe3BhcmFtc30pID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgIFxyXG4gICAgY29uc3QgZmV0Y2hCbG9nRGF0YSA9ICgpPT57XHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8YmxvZ19kYXRhLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKE51bWJlcihwYXJhbXMuaWQpPT09YmxvZ19kYXRhW2ldLmlkKXtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKGJsb2dfZGF0YVsxXSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJsb2dfZGF0YVsxXSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hCbG9nRGF0YSgpXHJcbiAgICBcclxuICAgICBcclxuICAgIH0sIFtdKVxyXG4gICAgXHJcbiAgcmV0dXJuIChkYXRhPyA8PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9JyBiZy1ncmF5LTIwMCBweS01IHB4LTUgbWQ6cHgtMTIgbGc6cHgyOCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXthc3NldHMuYmxvZ2dlcn0gd2lkdGg9ezE4MH0gYWx0PScnIGNsYXNzTmFtZT0nIHctWy0xMzBweF0gc206dy1hdXRvJy8+IFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGZvbnQtbWVkaXVtIHB5LTEgcHgtMyBzbTpweS0zIHNtOnB4LTYgYm9yZGVyIGJvcmRlci1ibGFjayBzaGFkb3ctWy03cHhfN3B4XzBweF8jMDAwMDAwXSc+R2V0IFN0YXJ0ZWQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHRleHQtY2VudGVyIG15LTI0ICc+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtMnhsIHNtOnRleHQtNXhsIGZvbnQtc2VtaWJvbGQgbWF4LXctWzcwMHB4XSBteC1hdXRvJz57ZGF0YS50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8SW1hZ2UvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9JyBtdC0xIHBiLTIgdGV4dC1sZyBtYXgtdy1bNzQwcHhdIG14LWF1dG8nPntkYXRhLmF1dGhvcn08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nIG14LTUgbWF4LXctWzgwMHB4XSBtZDpteC1hdXRvIG10LVstMTAwcHhdIG1iLTEwJz5cclxuICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdib3JkZXItNCBib3JkZXItd2hpdGUnIHNyYz17ZGF0YS5pbWFnZX0gd2lkdGg9ezEyODB9IGhlaWdodD17NzIwfSBhbHQ9JycvPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9J215LTggdGV4dC1bLTI2cHhdIGZvbnQtc2VtaWJvbGQnPkludHJvZHVjdGlvbjo8L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nJz57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT0nIG15LTUgdGV4dC1bLTE4cHhdIGZvbnQtc2VtaWJvbGQnPlN0ZXAxOiBTZWxmIHJlZmxlY3Rpb24gYW5kIGdvYWwgc2V0dGluZzwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPScgbXktMyc+a2lpaWlpaWlpaWlpPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nIG15LTMnPmtpaWlpaWlpaWlpaTwvcD5cclxuXHJcblxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9JyBteS01IHRleHQtWy0xOHB4XSBmb250LXNlbWlib2xkJz5TdGVwMTogU2VsZiByZWZsZWN0aW9uIGFuZCBnb2FsIHNldHRpbmc8L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nIG15LTMnPmtpaWlpaWlpaWlpaTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9JyBteS0zJz5raWlpaWlpaWlpaWk8L3A+XHJcblxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9JyBteS01IHRleHQtWy0xOHB4XSBmb250LXNlbWlib2xkJz5Db25jbHVzaW9uOiBTZWxmIHJlZmxlY3Rpb24gYW5kIGdvYWwgc2V0dGluZzwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPScgbXktMyc+a2lpaWlpaWlpaWlpPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nIG15LTMnPmtpaWlpaWlpaWlpaTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtYmxhY2sgZm9udC1zZW1pYm9sZCBteS00Jz5TaGFyZSB0aGlzIGFydGljbGVzIG9uIHNvY2lhbCBtZWRpdW08L3A+XHJcbiAgIFxyXG4gICA8ZGl2PlxyXG4gICAgPEltYWdlIHNyYz17YXNzZXRzLmZia30gd2lkdGg9ezUwfSBhbHQ9JycvPlxyXG4gICAgPEltYWdlIHNyYz17YXNzZXRzLnR3aXR0ZXJ9IHdpZHRoPXs1MH0gYWx0PScnLz5cclxuICAgIDxJbWFnZSBzcmM9e2Fzc2V0cy5pZ30gd2lkdGg9ezUwfSBhbHQ9JycvPlxyXG4gICA8L2Rpdj5cclxuICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPjo8PjwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZSJdLCJuYW1lcyI6WyJhc3NldHMiLCJibG9nX2RhdGEiLCJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJwYWdlIiwicGFyYW1zIiwiZGF0YSIsInNldERhdGEiLCJmZXRjaEJsb2dEYXRhIiwiaSIsImxlbmd0aCIsIk51bWJlciIsImlkIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImJsb2dnZXIiLCJ3aWR0aCIsImFsdCIsImJ1dHRvbiIsImgxIiwidGl0bGUiLCJwIiwiYXV0aG9yIiwiaW1hZ2UiLCJoZWlnaHQiLCJkZXNjcmlwdGlvbiIsImgzIiwiZmJrIiwidHdpdHRlciIsImlnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/blogs/[id]/page.js\n"));

/***/ })

});