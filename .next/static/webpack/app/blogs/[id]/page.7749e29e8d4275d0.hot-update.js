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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Assets_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Assets/assets */ \"(app-pages-browser)/./Assets/assets.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/footer */ \"(app-pages-browser)/./components/footer.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst page = (param)=>{\n    let { params } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const fetchBlogData = ()=>{\n        for(let i = 0; i < _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.blog_data.length; i++){\n            if (Number(params.id) === _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.blog_data[i].id) {\n                setData(_Assets_assets__WEBPACK_IMPORTED_MODULE_1__.blog_data[1]);\n                console.log(_Assets_assets__WEBPACK_IMPORTED_MODULE_1__.blog_data[1]);\n                break;\n            }\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchBlogData();\n    }, []);\n    return data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" bg-gray-200 py-5 px-5 md:px-12 lg:px28\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" flex justify-between items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.backward,\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.blogger,\n                                    width: 180,\n                                    alt: \"\",\n                                    className: \" w-[-130px] sm:w-auto\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \" flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]\",\n                                children: \"Get Started\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" text-center my-24 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto\",\n                                children: data.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \" mt-1 pb-2 text-lg max-w-[740px] mx-auto\",\n                                children: data.author\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"border-4 border-white\",\n                        src: data.image,\n                        width: 1280,\n                        height: 720,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"my-8 text-[-26px] font-semibold\",\n                        children: \"Introduction:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"\",\n                        children: data.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \" my-5 text-[-18px] font-semibold\",\n                        children: \"Step1: Self reflection and goal setting\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \" my-5 text-[-18px] font-semibold\",\n                        children: \"Step1: Self reflection and goal setting\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \" my-5 text-[-18px] font-semibold\",\n                        children: \"Conclusion: Self reflection and goal setting\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-black font-semibold my-4\",\n                        children: \"Share this articles on social medium\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.fbk,\n                                width: 50,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 66,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.twitter,\n                                width: 50,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 67,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.ig,\n                                width: 50,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 68,\n                                columnNumber: 5\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 65,\n                        columnNumber: 4\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                lineNumber: 47,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n_s(page, \"fQZRxy/+nAZ7NLS1X4dVhrlp8Go=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ibG9ncy9baWRdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVtRDtBQUNyQjtBQUNMO0FBQ2tCO0FBQ0g7QUFDWjtBQUU1QixNQUFNUSxPQUFPO1FBQUMsRUFBQ0MsTUFBTSxFQUFDOztJQUNsQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7SUFFakMsTUFBTVEsZ0JBQWdCO1FBQ2xCLElBQUksSUFBSUMsSUFBRSxHQUFHQSxJQUFFWixxREFBU0EsQ0FBQ2EsTUFBTSxFQUFFRCxJQUNqQztZQUNJLElBQUlFLE9BQU9OLE9BQU9PLEVBQUUsTUFBSWYscURBQVMsQ0FBQ1ksRUFBRSxDQUFDRyxFQUFFLEVBQUM7Z0JBRXBDTCxRQUFRVixxREFBUyxDQUFDLEVBQUU7Z0JBQ3BCZ0IsUUFBUUMsR0FBRyxDQUFDakIscURBQVMsQ0FBQyxFQUFFO2dCQUV4QjtZQUNSO1FBQ0o7SUFDQTtJQUVBSSxnREFBU0EsQ0FBQztRQUNOTztJQUdKLEdBQUcsRUFBRTtJQUVQLE9BQVFGLHFCQUFNOzswQkFDWiw4REFBQ1M7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNiLGlEQUFJQTtnQ0FBQ2MsS0FBS3JCLGtEQUFNQSxDQUFDc0IsUUFBUTtnQ0FBRUMsTUFBSzswQ0FDakMsNEVBQUNyQixrREFBS0E7b0NBQUNtQixLQUFLckIsa0RBQU1BLENBQUN3QixPQUFPO29DQUFFQyxPQUFPO29DQUFLQyxLQUFJO29DQUFHTixXQUFVOzs7Ozs7Ozs7OzswQ0FFekQsOERBQUNPO2dDQUFPUCxXQUFVOzBDQUFtSDs7Ozs7Ozs7Ozs7O2tDQUV6SSw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDUTtnQ0FBR1IsV0FBVTswQ0FBNERWLEtBQUttQixLQUFLOzs7Ozs7MENBQ3BGLDhEQUFDM0Isa0RBQUtBOzs7OzswQ0FDTiw4REFBQzRCO2dDQUFFVixXQUFVOzBDQUE0Q1YsS0FBS3FCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJNUUsOERBQUNaO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ2xCLGtEQUFLQTt3QkFBQ2tCLFdBQVU7d0JBQXdCQyxLQUFLWCxLQUFLc0IsS0FBSzt3QkFBRVAsT0FBTzt3QkFBTVEsUUFBUTt3QkFBS1AsS0FBSTs7Ozs7O2tDQUN4Riw4REFBQ0U7d0JBQUdSLFdBQVU7a0NBQWtDOzs7Ozs7a0NBQ2hELDhEQUFDVTt3QkFBRVYsV0FBVTtrQ0FBSVYsS0FBS3dCLFdBQVc7Ozs7OztrQ0FDakMsOERBQUNDO3dCQUFHZixXQUFVO2tDQUFtQzs7Ozs7O2tDQUNqRCw4REFBQ1U7d0JBQUVWLFdBQVU7a0NBQVE7Ozs7OztrQ0FDckIsOERBQUNVO3dCQUFFVixXQUFVO2tDQUFROzs7Ozs7a0NBR3JCLDhEQUFDZTt3QkFBR2YsV0FBVTtrQ0FBbUM7Ozs7OztrQ0FDakQsOERBQUNVO3dCQUFFVixXQUFVO2tDQUFROzs7Ozs7a0NBQ3JCLDhEQUFDVTt3QkFBRVYsV0FBVTtrQ0FBUTs7Ozs7O2tDQUVyQiw4REFBQ2U7d0JBQUdmLFdBQVU7a0NBQW1DOzs7Ozs7a0NBQ2pELDhEQUFDVTt3QkFBRVYsV0FBVTtrQ0FBUTs7Ozs7O2tDQUNyQiw4REFBQ1U7d0JBQUVWLFdBQVU7a0NBQVE7Ozs7OztrQ0FDckIsOERBQUNVO3dCQUFFVixXQUFVO2tDQUFnQzs7Ozs7O2tDQUVsRCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNkLDhEQUFDbEIsa0RBQUtBO2dDQUFDbUIsS0FBS3JCLGtEQUFNQSxDQUFDb0MsR0FBRztnQ0FBRVgsT0FBTztnQ0FBSUMsS0FBSTs7Ozs7OzBDQUN2Qyw4REFBQ3hCLGtEQUFLQTtnQ0FBQ21CLEtBQUtyQixrREFBTUEsQ0FBQ3FDLE9BQU87Z0NBQUVaLE9BQU87Z0NBQUlDLEtBQUk7Ozs7OzswQ0FDM0MsOERBQUN4QixrREFBS0E7Z0NBQUNtQixLQUFLckIsa0RBQU1BLENBQUNzQyxFQUFFO2dDQUFFYixPQUFPO2dDQUFJQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQUlsQztBQUVSO0dBaEVNbEI7QUFrRU4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Jsb2dzL1tpZF0vcGFnZS5qcz83ZmJhIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyBhc3NldHMsIGJsb2dfZGF0YSB9IGZyb20gJ0AvQXNzZXRzL2Fzc2V0cydcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvY29tcG9uZW50cy9mb290ZXInXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IHBhZ2UgPSAoe3BhcmFtc30pID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgIFxyXG4gICAgY29uc3QgZmV0Y2hCbG9nRGF0YSA9ICgpPT57XHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8YmxvZ19kYXRhLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKE51bWJlcihwYXJhbXMuaWQpPT09YmxvZ19kYXRhW2ldLmlkKXtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKGJsb2dfZGF0YVsxXSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJsb2dfZGF0YVsxXSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hCbG9nRGF0YSgpXHJcbiAgICBcclxuICAgICBcclxuICAgIH0sIFtdKVxyXG4gICAgXHJcbiAgcmV0dXJuIChkYXRhPyA8PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9JyBiZy1ncmF5LTIwMCBweS01IHB4LTUgbWQ6cHgtMTIgbGc6cHgyOCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICA8TGluayBzcmM9e2Fzc2V0cy5iYWNrd2FyZH0gaHJlZj0nLyc+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2Fzc2V0cy5ibG9nZ2VyfSB3aWR0aD17MTgwfSBhbHQ9JycgY2xhc3NOYW1lPScgdy1bLTEzMHB4XSBzbTp3LWF1dG8nLz4gXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9JyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBmb250LW1lZGl1bSBweS0xIHB4LTMgc206cHktMyBzbTpweC02IGJvcmRlciBib3JkZXItYmxhY2sgc2hhZG93LVstN3B4XzdweF8wcHhfIzAwMDAwMF0nPkdldCBTdGFydGVkPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyB0ZXh0LWNlbnRlciBteS0yNCAnPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBzbTp0ZXh0LTV4bCBmb250LXNlbWlib2xkIG1heC13LVs3MDBweF0gbXgtYXV0byc+e2RhdGEudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPEltYWdlLz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPScgbXQtMSBwYi0yIHRleHQtbGcgbWF4LXctWzc0MHB4XSBteC1hdXRvJz57ZGF0YS5hdXRob3J9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9JyBteC01IG1heC13LVs4MDBweF0gbWQ6bXgtYXV0byBtdC1bLTEwMHB4XSBtYi0xMCc+XHJcbiAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nYm9yZGVyLTQgYm9yZGVyLXdoaXRlJyBzcmM9e2RhdGEuaW1hZ2V9IHdpZHRoPXsxMjgwfSBoZWlnaHQ9ezcyMH0gYWx0PScnLz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdteS04IHRleHQtWy0yNnB4XSBmb250LXNlbWlib2xkJz5JbnRyb2R1Y3Rpb246PC9oMT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9Jyc+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9JyBteS01IHRleHQtWy0xOHB4XSBmb250LXNlbWlib2xkJz5TdGVwMTogU2VsZiByZWZsZWN0aW9uIGFuZCBnb2FsIHNldHRpbmc8L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nIG15LTMnPmtpaWlpaWlpaWlpaTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9JyBteS0zJz5raWlpaWlpaWlpaWk8L3A+XHJcblxyXG5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPScgbXktNSB0ZXh0LVstMThweF0gZm9udC1zZW1pYm9sZCc+U3RlcDE6IFNlbGYgcmVmbGVjdGlvbiBhbmQgZ29hbCBzZXR0aW5nPC9oMz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9JyBteS0zJz5raWlpaWlpaWlpaWk8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPScgbXktMyc+a2lpaWlpaWlpaWlpPC9wPlxyXG5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPScgbXktNSB0ZXh0LVstMThweF0gZm9udC1zZW1pYm9sZCc+Q29uY2x1c2lvbjogU2VsZiByZWZsZWN0aW9uIGFuZCBnb2FsIHNldHRpbmc8L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nIG15LTMnPmtpaWlpaWlpaWlpaTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9JyBteS0zJz5raWlpaWlpaWlpaWk8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWJsYWNrIGZvbnQtc2VtaWJvbGQgbXktNCc+U2hhcmUgdGhpcyBhcnRpY2xlcyBvbiBzb2NpYWwgbWVkaXVtPC9wPlxyXG4gICBcclxuICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG4gICAgPEltYWdlIHNyYz17YXNzZXRzLmZia30gd2lkdGg9ezUwfSBhbHQ9JycvPlxyXG4gICAgPEltYWdlIHNyYz17YXNzZXRzLnR3aXR0ZXJ9IHdpZHRoPXs1MH0gYWx0PScnLz5cclxuICAgIDxJbWFnZSBzcmM9e2Fzc2V0cy5pZ30gd2lkdGg9ezUwfSBhbHQ9JycvPlxyXG4gICA8L2Rpdj5cclxuICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPjo8PjwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZSJdLCJuYW1lcyI6WyJhc3NldHMiLCJibG9nX2RhdGEiLCJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGb290ZXIiLCJMaW5rIiwicGFnZSIsInBhcmFtcyIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y2hCbG9nRGF0YSIsImkiLCJsZW5ndGgiLCJOdW1iZXIiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJiYWNrd2FyZCIsImhyZWYiLCJibG9nZ2VyIiwid2lkdGgiLCJhbHQiLCJidXR0b24iLCJoMSIsInRpdGxlIiwicCIsImF1dGhvciIsImltYWdlIiwiaGVpZ2h0IiwiZGVzY3JpcHRpb24iLCJoMyIsImZiayIsInR3aXR0ZXIiLCJpZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/blogs/[id]/page.js\n"));

/***/ })

});