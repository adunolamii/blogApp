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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Assets_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Assets/assets */ \"(app-pages-browser)/./Assets/assets.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/footer */ \"(app-pages-browser)/./components/footer.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst page = (param)=>{\n    let { params } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    //    FOR CLIENT SIDE\n    // const fetchBlogData = ()=>{\n    //     for(let i=0; i<blog_data.length; i++)\n    //     {\n    //         if (Number(params.id)===blog_data[i].id){\n    //             setData(blog_data[i])\n    //             console.log(blog_data[i]);\n    //             break\n    //     }\n    // }\n    // }\n    // FOR BACKEND\n    const fetchBlogData = async ()=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"/api/blog\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchBlogData();\n    }, []);\n    return data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" bg-gray-200 py-5 px-5 md:px-12 lg:px28\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" flex justify-between items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.backward,\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.blogger,\n                                    width: 180,\n                                    alt: \"\",\n                                    className: \" w-[-130px] sm:w-auto\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \" flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]\",\n                                children: \"Get Started\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" text-center my-24 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto\",\n                                children: data.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \" mt-1 pb-2 text-lg max-w-[740px] mx-auto\",\n                                children: data.author\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"border-4 border-white\",\n                        src: data.image,\n                        width: 1280,\n                        height: 720,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"my-8 text-[-26px] font-semibold\",\n                        children: \"Introduction:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"\",\n                        children: data.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \" my-5 text-[-18px] font-semibold\",\n                        children: \"Step1: Self reflection and goal setting\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \" my-5 text-[-18px] font-semibold\",\n                        children: \"Step1: Self reflection and goal setting\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \" my-5 text-[-18px] font-semibold\",\n                        children: \"Conclusion: Self reflection and goal setting\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" my-24\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-black font-semibold my-4\",\n                                children: \"Share this articles on social medium\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 70,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.fbk,\n                                        width: 50,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 5\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.twitter,\n                                        width: 50,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 5\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.ig,\n                                        width: 50,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 5\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 72,\n                                columnNumber: 4\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                lineNumber: 53,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                lineNumber: 79,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n_s(page, \"fQZRxy/+nAZ7NLS1X4dVhrlp8Go=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ibG9ncy9baWRdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDckI7QUFDTDtBQUNrQjtBQUNIO0FBQ1o7QUFDSDtBQUV6QixNQUFNUyxPQUFPO1FBQUMsRUFBQ0MsTUFBTSxFQUFDOztJQUNsQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUM7SUFDckMscUJBQXFCO0lBQ2pCLDhCQUE4QjtJQUM5Qiw0Q0FBNEM7SUFDNUMsUUFBUTtJQUNSLG9EQUFvRDtJQUVwRCxvQ0FBb0M7SUFDcEMseUNBQXlDO0lBRXpDLG9CQUFvQjtJQUNwQixRQUFRO0lBQ1IsSUFBSTtJQUNKLElBQUk7SUFFSixjQUFjO0lBQ2QsTUFBTVMsZ0JBQWdCO1FBQ2xCLE1BQU1DLFdBQVcsTUFBTU4sNkNBQUtBLENBQUNPLEdBQUcsQ0FBQztJQUNyQztJQUVBVixnREFBU0EsQ0FBQztRQUNOUTtJQUdKLEdBQUcsRUFBRTtJQUVQLE9BQVFGLHFCQUFNOzswQkFDWiw4REFBQ0s7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNWLGlEQUFJQTtnQ0FBQ1csS0FBS2xCLGtEQUFNQSxDQUFDbUIsUUFBUTtnQ0FBRUMsTUFBSzswQ0FDakMsNEVBQUNsQixrREFBS0E7b0NBQUNnQixLQUFLbEIsa0RBQU1BLENBQUNxQixPQUFPO29DQUFFQyxPQUFPO29DQUFLQyxLQUFJO29DQUFHTixXQUFVOzs7Ozs7Ozs7OzswQ0FFekQsOERBQUNPO2dDQUFPUCxXQUFVOzBDQUFtSDs7Ozs7Ozs7Ozs7O2tDQUV6SSw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDUTtnQ0FBR1IsV0FBVTswQ0FBNEROLEtBQUtlLEtBQUs7Ozs7OzswQ0FDcEYsOERBQUN4QixrREFBS0E7Ozs7OzBDQUNOLDhEQUFDeUI7Z0NBQUVWLFdBQVU7MENBQTRDTixLQUFLaUIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUk1RSw4REFBQ1o7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDZixrREFBS0E7d0JBQUNlLFdBQVU7d0JBQXdCQyxLQUFLUCxLQUFLa0IsS0FBSzt3QkFBRVAsT0FBTzt3QkFBTVEsUUFBUTt3QkFBS1AsS0FBSTs7Ozs7O2tDQUN4Riw4REFBQ0U7d0JBQUdSLFdBQVU7a0NBQWtDOzs7Ozs7a0NBQ2hELDhEQUFDVTt3QkFBRVYsV0FBVTtrQ0FBSU4sS0FBS29CLFdBQVc7Ozs7OztrQ0FDakMsOERBQUNDO3dCQUFHZixXQUFVO2tDQUFtQzs7Ozs7O2tDQUNqRCw4REFBQ1U7d0JBQUVWLFdBQVU7a0NBQVE7Ozs7OztrQ0FDckIsOERBQUNVO3dCQUFFVixXQUFVO2tDQUFROzs7Ozs7a0NBR3JCLDhEQUFDZTt3QkFBR2YsV0FBVTtrQ0FBbUM7Ozs7OztrQ0FDakQsOERBQUNVO3dCQUFFVixXQUFVO2tDQUFROzs7Ozs7a0NBQ3JCLDhEQUFDVTt3QkFBRVYsV0FBVTtrQ0FBUTs7Ozs7O2tDQUVyQiw4REFBQ2U7d0JBQUdmLFdBQVU7a0NBQW1DOzs7Ozs7a0NBQ2pELDhEQUFDVTt3QkFBRVYsV0FBVTtrQ0FBUTs7Ozs7O2tDQUNyQiw4REFBQ1U7d0JBQUVWLFdBQVU7a0NBQVE7Ozs7OztrQ0FDckIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDZiw4REFBQ1U7Z0NBQUVWLFdBQVU7MENBQWdDOzs7Ozs7MENBRWxELDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2QsOERBQUNmLGtEQUFLQTt3Q0FBQ2dCLEtBQUtsQixrREFBTUEsQ0FBQ2lDLEdBQUc7d0NBQUVYLE9BQU87d0NBQUlDLEtBQUk7Ozs7OztrREFDdkMsOERBQUNyQixrREFBS0E7d0NBQUNnQixLQUFLbEIsa0RBQU1BLENBQUNrQyxPQUFPO3dDQUFFWixPQUFPO3dDQUFJQyxLQUFJOzs7Ozs7a0RBQzNDLDhEQUFDckIsa0RBQUtBO3dDQUFDZ0IsS0FBS2xCLGtEQUFNQSxDQUFDbUMsRUFBRTt3Q0FBRWIsT0FBTzt3Q0FBSUMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUl0Qyw4REFBQ2pCLDBEQUFNQTs7Ozs7O3FDQUNIO0FBRVI7R0F2RU1HO0FBeUVOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9ibG9ncy9baWRdL3BhZ2UuanM/N2ZiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgYXNzZXRzLCBibG9nX2RhdGEgfSBmcm9tICdAL0Fzc2V0cy9hc3NldHMnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEZvb3RlciBmcm9tICdAL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IHBhZ2UgPSAoe3BhcmFtc30pID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpXHJcbi8vICAgIEZPUiBDTElFTlQgU0lERVxyXG4gICAgLy8gY29uc3QgZmV0Y2hCbG9nRGF0YSA9ICgpPT57XHJcbiAgICAvLyAgICAgZm9yKGxldCBpPTA7IGk8YmxvZ19kYXRhLmxlbmd0aDsgaSsrKVxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgaWYgKE51bWJlcihwYXJhbXMuaWQpPT09YmxvZ19kYXRhW2ldLmlkKXtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBzZXREYXRhKGJsb2dfZGF0YVtpXSlcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJsb2dfZGF0YVtpXSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIEZPUiBCQUNLRU5EXHJcbiAgICBjb25zdCBmZXRjaEJsb2dEYXRhID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9ibG9nXCIpXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaEJsb2dEYXRhKClcclxuICAgIFxyXG4gICAgIFxyXG4gICAgfSwgW10pXHJcbiAgICBcclxuICByZXR1cm4gKGRhdGE/IDw+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nIGJnLWdyYXktMjAwIHB5LTUgcHgtNSBtZDpweC0xMiBsZzpweDI4Jz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgIDxMaW5rIHNyYz17YXNzZXRzLmJhY2t3YXJkfSBocmVmPScvJz5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17YXNzZXRzLmJsb2dnZXJ9IHdpZHRoPXsxODB9IGFsdD0nJyBjbGFzc05hbWU9JyB3LVstMTMwcHhdIHNtOnctYXV0bycvPiBcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGZvbnQtbWVkaXVtIHB5LTEgcHgtMyBzbTpweS0zIHNtOnB4LTYgYm9yZGVyIGJvcmRlci1ibGFjayBzaGFkb3ctWy03cHhfN3B4XzBweF8jMDAwMDAwXSc+R2V0IFN0YXJ0ZWQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHRleHQtY2VudGVyIG15LTI0ICc+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtMnhsIHNtOnRleHQtNXhsIGZvbnQtc2VtaWJvbGQgbWF4LXctWzcwMHB4XSBteC1hdXRvJz57ZGF0YS50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8SW1hZ2UvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9JyBtdC0xIHBiLTIgdGV4dC1sZyBtYXgtdy1bNzQwcHhdIG14LWF1dG8nPntkYXRhLmF1dGhvcn08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nIG14LTUgbWF4LXctWzgwMHB4XSBtZDpteC1hdXRvIG10LVstMTAwcHhdIG1iLTEwJz5cclxuICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdib3JkZXItNCBib3JkZXItd2hpdGUnIHNyYz17ZGF0YS5pbWFnZX0gd2lkdGg9ezEyODB9IGhlaWdodD17NzIwfSBhbHQ9JycvPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9J215LTggdGV4dC1bLTI2cHhdIGZvbnQtc2VtaWJvbGQnPkludHJvZHVjdGlvbjo8L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nJz57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT0nIG15LTUgdGV4dC1bLTE4cHhdIGZvbnQtc2VtaWJvbGQnPlN0ZXAxOiBTZWxmIHJlZmxlY3Rpb24gYW5kIGdvYWwgc2V0dGluZzwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPScgbXktMyc+a2lpaWlpaWlpaWlpPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nIG15LTMnPmtpaWlpaWlpaWlpaTwvcD5cclxuXHJcblxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9JyBteS01IHRleHQtWy0xOHB4XSBmb250LXNlbWlib2xkJz5TdGVwMTogU2VsZiByZWZsZWN0aW9uIGFuZCBnb2FsIHNldHRpbmc8L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nIG15LTMnPmtpaWlpaWlpaWlpaTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9JyBteS0zJz5raWlpaWlpaWlpaWk8L3A+XHJcblxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9JyBteS01IHRleHQtWy0xOHB4XSBmb250LXNlbWlib2xkJz5Db25jbHVzaW9uOiBTZWxmIHJlZmxlY3Rpb24gYW5kIGdvYWwgc2V0dGluZzwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPScgbXktMyc+a2lpaWlpaWlpaWlpPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nIG15LTMnPmtpaWlpaWlpaWlpaTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIG15LTI0Jz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtYmxhY2sgZm9udC1zZW1pYm9sZCBteS00Jz5TaGFyZSB0aGlzIGFydGljbGVzIG9uIHNvY2lhbCBtZWRpdW08L3A+XHJcbiAgIFxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcbiAgICA8SW1hZ2Ugc3JjPXthc3NldHMuZmJrfSB3aWR0aD17NTB9IGFsdD0nJy8+XHJcbiAgICA8SW1hZ2Ugc3JjPXthc3NldHMudHdpdHRlcn0gd2lkdGg9ezUwfSBhbHQ9JycvPlxyXG4gICAgPEltYWdlIHNyYz17YXNzZXRzLmlnfSB3aWR0aD17NTB9IGFsdD0nJy8+XHJcbiAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPEZvb3Rlci8+XHJcbiAgICA8Lz46PD48Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2UiXSwibmFtZXMiOlsiYXNzZXRzIiwiYmxvZ19kYXRhIiwiSW1hZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRm9vdGVyIiwiTGluayIsImF4aW9zIiwicGFnZSIsInBhcmFtcyIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y2hCbG9nRGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYmFja3dhcmQiLCJocmVmIiwiYmxvZ2dlciIsIndpZHRoIiwiYWx0IiwiYnV0dG9uIiwiaDEiLCJ0aXRsZSIsInAiLCJhdXRob3IiLCJpbWFnZSIsImhlaWdodCIsImRlc2NyaXB0aW9uIiwiaDMiLCJmYmsiLCJ0d2l0dGVyIiwiaWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/blogs/[id]/page.js\n"));

/***/ })

});