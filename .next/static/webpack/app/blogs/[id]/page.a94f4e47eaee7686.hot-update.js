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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Assets_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Assets/assets */ \"(app-pages-browser)/./Assets/assets.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst page = (param)=>{\n    let { params } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const fetchBlogData = ()=>{\n        for(let i = 0; i < _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.blog_data.length; i++){\n            if (Number(params.id) === _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.blog_data[i].id) {\n                setData(_Assets_assets__WEBPACK_IMPORTED_MODULE_1__.blog_data[1]);\n                console.log(_Assets_assets__WEBPACK_IMPORTED_MODULE_1__.blog_data[1]);\n                break;\n            }\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchBlogData();\n    }, []);\n    return data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" bg-gray-200 py-5 px-5 md:px-12 lg:px28\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" flex justify-between items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.blogger,\n                                width: 180,\n                                alt: \"\",\n                                className: \" w-[-130px] sm:w-auto\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \" flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]\",\n                                children: \"Get Started\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" text-center my-24 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto\",\n                                children: data.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \" mt-1 pb-2 text-lg max-w-[740px] mx-auto\",\n                                children: data.author\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"border-4 border-white\",\n                        src: data.image,\n                        width: 1280,\n                        height: 720,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"my-8 text-[-26px] font-semibold\",\n                        children: \"Introduction:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"\",\n                        children: data.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \" my-5 text-[-18px] font-semibold\",\n                        children: \"Step1: Self reflection and goal setting\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \" my-5 text-[-18px] font-semibold\",\n                        children: \"Step1: Self reflection and goal setting\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \" my-5 text-[-18px] font-semibold\",\n                        children: \"Conclusion: Self reflection and goal setting\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-black font-semibold my-4\",\n                        children: \"Share this articles on social medium\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.fbk,\n                            width: 50,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                            lineNumber: 62,\n                            columnNumber: 5\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 61,\n                        columnNumber: 4\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n_s(page, \"fQZRxy/+nAZ7NLS1X4dVhrlp8Go=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ibG9ncy9baWRdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFbUQ7QUFDckI7QUFDTDtBQUNrQjtBQUUzQyxNQUFNTSxPQUFPO1FBQUMsRUFBQ0MsTUFBTSxFQUFDOztJQUNsQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUM7SUFFakMsTUFBTU0sZ0JBQWdCO1FBQ2xCLElBQUksSUFBSUMsSUFBRSxHQUFHQSxJQUFFVixxREFBU0EsQ0FBQ1csTUFBTSxFQUFFRCxJQUNqQztZQUNJLElBQUlFLE9BQU9OLE9BQU9PLEVBQUUsTUFBSWIscURBQVMsQ0FBQ1UsRUFBRSxDQUFDRyxFQUFFLEVBQUM7Z0JBRXBDTCxRQUFRUixxREFBUyxDQUFDLEVBQUU7Z0JBQ3BCYyxRQUFRQyxHQUFHLENBQUNmLHFEQUFTLENBQUMsRUFBRTtnQkFFeEI7WUFDUjtRQUNKO0lBQ0E7SUFFQUksZ0RBQVNBLENBQUM7UUFDTks7SUFHSixHQUFHLEVBQUU7SUFFUCxPQUFRRixxQkFBTTs7MEJBQ1osOERBQUNTO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDaEIsa0RBQUtBO2dDQUFDaUIsS0FBS25CLGtEQUFNQSxDQUFDb0IsT0FBTztnQ0FBRUMsT0FBTztnQ0FBS0MsS0FBSTtnQ0FBR0osV0FBVTs7Ozs7OzBDQUN6RCw4REFBQ0s7Z0NBQU9MLFdBQVU7MENBQW1IOzs7Ozs7Ozs7Ozs7a0NBRXpJLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNNO2dDQUFHTixXQUFVOzBDQUE0RFYsS0FBS2lCLEtBQUs7Ozs7OzswQ0FDcEYsOERBQUN2QixrREFBS0E7Ozs7OzBDQUNOLDhEQUFDd0I7Z0NBQUVSLFdBQVU7MENBQTRDVixLQUFLbUIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUk1RSw4REFBQ1Y7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDaEIsa0RBQUtBO3dCQUFDZ0IsV0FBVTt3QkFBd0JDLEtBQUtYLEtBQUtvQixLQUFLO3dCQUFFUCxPQUFPO3dCQUFNUSxRQUFRO3dCQUFLUCxLQUFJOzs7Ozs7a0NBQ3hGLDhEQUFDRTt3QkFBR04sV0FBVTtrQ0FBa0M7Ozs7OztrQ0FDaEQsOERBQUNRO3dCQUFFUixXQUFVO2tDQUFJVixLQUFLc0IsV0FBVzs7Ozs7O2tDQUNqQyw4REFBQ0M7d0JBQUdiLFdBQVU7a0NBQW1DOzs7Ozs7a0NBQ2pELDhEQUFDUTt3QkFBRVIsV0FBVTtrQ0FBUTs7Ozs7O2tDQUNyQiw4REFBQ1E7d0JBQUVSLFdBQVU7a0NBQVE7Ozs7OztrQ0FHckIsOERBQUNhO3dCQUFHYixXQUFVO2tDQUFtQzs7Ozs7O2tDQUNqRCw4REFBQ1E7d0JBQUVSLFdBQVU7a0NBQVE7Ozs7OztrQ0FDckIsOERBQUNRO3dCQUFFUixXQUFVO2tDQUFROzs7Ozs7a0NBRXJCLDhEQUFDYTt3QkFBR2IsV0FBVTtrQ0FBbUM7Ozs7OztrQ0FDakQsOERBQUNRO3dCQUFFUixXQUFVO2tDQUFROzs7Ozs7a0NBQ3JCLDhEQUFDUTt3QkFBRVIsV0FBVTtrQ0FBUTs7Ozs7O2tDQUNyQiw4REFBQ1E7d0JBQUVSLFdBQVU7a0NBQWdDOzs7Ozs7a0NBRWxELDhEQUFDRDtrQ0FDQSw0RUFBQ2Ysa0RBQUtBOzRCQUFDaUIsS0FBS25CLGtEQUFNQSxDQUFDZ0MsR0FBRzs0QkFBRVgsT0FBTzs0QkFBSUMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQUduQztBQUVSO0dBM0RNaEI7QUE2RE4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Jsb2dzL1tpZF0vcGFnZS5qcz83ZmJhIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyBhc3NldHMsIGJsb2dfZGF0YSB9IGZyb20gJ0AvQXNzZXRzL2Fzc2V0cydcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgcGFnZSA9ICh7cGFyYW1zfSkgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbClcclxuICAgXHJcbiAgICBjb25zdCBmZXRjaEJsb2dEYXRhID0gKCk9PntcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTxibG9nX2RhdGEubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoTnVtYmVyKHBhcmFtcy5pZCk9PT1ibG9nX2RhdGFbaV0uaWQpe1xyXG5cclxuICAgICAgICAgICAgICAgIHNldERhdGEoYmxvZ19kYXRhWzFdKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYmxvZ19kYXRhWzFdKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaEJsb2dEYXRhKClcclxuICAgIFxyXG4gICAgIFxyXG4gICAgfSwgW10pXHJcbiAgICBcclxuICByZXR1cm4gKGRhdGE/IDw+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nIGJnLWdyYXktMjAwIHB5LTUgcHgtNSBtZDpweC0xMiBsZzpweDI4Jz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2Fzc2V0cy5ibG9nZ2VyfSB3aWR0aD17MTgwfSBhbHQ9JycgY2xhc3NOYW1lPScgdy1bLTEzMHB4XSBzbTp3LWF1dG8nLz4gXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPScgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgZm9udC1tZWRpdW0gcHktMSBweC0zIHNtOnB5LTMgc206cHgtNiBib3JkZXIgYm9yZGVyLWJsYWNrIHNoYWRvdy1bLTdweF83cHhfMHB4XyMwMDAwMDBdJz5HZXQgU3RhcnRlZDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPScgdGV4dC1jZW50ZXIgbXktMjQgJz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0yeGwgc206dGV4dC01eGwgZm9udC1zZW1pYm9sZCBtYXgtdy1bNzAwcHhdIG14LWF1dG8nPntkYXRhLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDxJbWFnZS8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nIG10LTEgcGItMiB0ZXh0LWxnIG1heC13LVs3NDBweF0gbXgtYXV0byc+e2RhdGEuYXV0aG9yfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPScgbXgtNSBtYXgtdy1bODAwcHhdIG1kOm14LWF1dG8gbXQtWy0xMDBweF0gbWItMTAnPlxyXG4gICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2JvcmRlci00IGJvcmRlci13aGl0ZScgc3JjPXtkYXRhLmltYWdlfSB3aWR0aD17MTI4MH0gaGVpZ2h0PXs3MjB9IGFsdD0nJy8+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0nbXktOCB0ZXh0LVstMjZweF0gZm9udC1zZW1pYm9sZCc+SW50cm9kdWN0aW9uOjwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPScnPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPScgbXktNSB0ZXh0LVstMThweF0gZm9udC1zZW1pYm9sZCc+U3RlcDE6IFNlbGYgcmVmbGVjdGlvbiBhbmQgZ29hbCBzZXR0aW5nPC9oMz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9JyBteS0zJz5raWlpaWlpaWlpaWk8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPScgbXktMyc+a2lpaWlpaWlpaWlpPC9wPlxyXG5cclxuXHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT0nIG15LTUgdGV4dC1bLTE4cHhdIGZvbnQtc2VtaWJvbGQnPlN0ZXAxOiBTZWxmIHJlZmxlY3Rpb24gYW5kIGdvYWwgc2V0dGluZzwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPScgbXktMyc+a2lpaWlpaWlpaWlpPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nIG15LTMnPmtpaWlpaWlpaWlpaTwvcD5cclxuXHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT0nIG15LTUgdGV4dC1bLTE4cHhdIGZvbnQtc2VtaWJvbGQnPkNvbmNsdXNpb246IFNlbGYgcmVmbGVjdGlvbiBhbmQgZ29hbCBzZXR0aW5nPC9oMz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9JyBteS0zJz5raWlpaWlpaWlpaWk8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPScgbXktMyc+a2lpaWlpaWlpaWlpPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1ibGFjayBmb250LXNlbWlib2xkIG15LTQnPlNoYXJlIHRoaXMgYXJ0aWNsZXMgb24gc29jaWFsIG1lZGl1bTwvcD5cclxuICAgXHJcbiAgIDxkaXY+XHJcbiAgICA8SW1hZ2Ugc3JjPXthc3NldHMuZmJrfSB3aWR0aD17NTB9IGFsdD0nJy8+XHJcbiAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Lz46PD48Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2UiXSwibmFtZXMiOlsiYXNzZXRzIiwiYmxvZ19kYXRhIiwiSW1hZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicGFnZSIsInBhcmFtcyIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y2hCbG9nRGF0YSIsImkiLCJsZW5ndGgiLCJOdW1iZXIiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJibG9nZ2VyIiwid2lkdGgiLCJhbHQiLCJidXR0b24iLCJoMSIsInRpdGxlIiwicCIsImF1dGhvciIsImltYWdlIiwiaGVpZ2h0IiwiZGVzY3JpcHRpb24iLCJoMyIsImZiayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/blogs/[id]/page.js\n"));

/***/ })

});