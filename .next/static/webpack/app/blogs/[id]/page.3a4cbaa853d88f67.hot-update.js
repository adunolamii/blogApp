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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Assets_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Assets/assets */ \"(app-pages-browser)/./Assets/assets.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/footer */ \"(app-pages-browser)/./components/footer.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst page = (param)=>{\n    let { params } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    //    FOR CLIENT SIDE\n    // const fetchBlogData = ()=>{\n    //     for(let i=0; i<blog_data.length; i++)\n    //     {\n    //         if (Number(params.id)===blog_data[i].id){\n    //             setData(blog_data[i])\n    //             console.log(blog_data[i]);\n    //             break\n    //     }\n    // }\n    // }\n    // FOR BACKEND\n    const fetchBlogData = async ()=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"/api/blog\", {\n            params: {\n                id: params.id\n            }\n        });\n        setData(response.data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchBlogData();\n    }, []);\n    return data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" bg-gray-200 py-5 px-5 md:px-12 lg:px28\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" flex justify-between items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.backward,\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.blogger,\n                                    width: 180,\n                                    alt: \"\",\n                                    className: \" w-[-130px] sm:w-auto\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \" flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]\",\n                                children: \"Get Started\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" text-center my-24 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto\",\n                                children: data.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: data\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \" mt-1 pb-2 text-lg max-w-[740px] mx-auto\",\n                                children: data.author\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                lineNumber: 44,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"border-4 border-white\",\n                        src: data.image,\n                        width: 1280,\n                        height: 720,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"my-8 text-[-26px] font-semibold\",\n                        children: \"Introduction:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"\",\n                        children: data.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \" my-5 text-[-18px] font-semibold\",\n                        children: \"Step1: Self reflection and goal setting\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \" my-5 text-[-18px] font-semibold\",\n                        children: \"Step1: Self reflection and goal setting\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \" my-5 text-[-18px] font-semibold\",\n                        children: \"Conclusion: Self reflection and goal setting\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" my-24\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-black font-semibold my-4\",\n                                children: \"Share this articles on social medium\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 75,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.fbk,\n                                        width: 50,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 5\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.twitter,\n                                        width: 50,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 5\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.ig,\n                                        width: 50,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 5\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 77,\n                                columnNumber: 4\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                lineNumber: 58,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                lineNumber: 84,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n_s(page, \"fQZRxy/+nAZ7NLS1X4dVhrlp8Go=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ibG9ncy9baWRdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDckI7QUFDTDtBQUNrQjtBQUNIO0FBQ1o7QUFDSDtBQUV6QixNQUFNUyxPQUFPO1FBQUMsRUFBQ0MsTUFBTSxFQUFDOztJQUNsQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUM7SUFDckMscUJBQXFCO0lBQ2pCLDhCQUE4QjtJQUM5Qiw0Q0FBNEM7SUFDNUMsUUFBUTtJQUNSLG9EQUFvRDtJQUVwRCxvQ0FBb0M7SUFDcEMseUNBQXlDO0lBRXpDLG9CQUFvQjtJQUNwQixRQUFRO0lBQ1IsSUFBSTtJQUNKLElBQUk7SUFFSixjQUFjO0lBQ2QsTUFBTVMsZ0JBQWdCO1FBQ2xCLE1BQU1DLFdBQVcsTUFBTU4sNkNBQUtBLENBQUNPLEdBQUcsQ0FBQyxhQUFhO1lBQzFDTCxRQUFPO2dCQUNITSxJQUFHTixPQUFPTSxFQUFFO1lBQ2hCO1FBQ0o7UUFDQUosUUFBUUUsU0FBU0gsSUFBSTtJQUN6QjtJQUVBTixnREFBU0EsQ0FBQztRQUNOUTtJQUdKLEdBQUcsRUFBRTtJQUVQLE9BQVFGLHFCQUFNOzswQkFDWiw4REFBQ007Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNYLGlEQUFJQTtnQ0FBQ1ksS0FBS25CLGtEQUFNQSxDQUFDb0IsUUFBUTtnQ0FBRUMsTUFBSzswQ0FDakMsNEVBQUNuQixrREFBS0E7b0NBQUNpQixLQUFLbkIsa0RBQU1BLENBQUNzQixPQUFPO29DQUFFQyxPQUFPO29DQUFLQyxLQUFJO29DQUFHTixXQUFVOzs7Ozs7Ozs7OzswQ0FFekQsOERBQUNPO2dDQUFPUCxXQUFVOzBDQUFtSDs7Ozs7Ozs7Ozs7O2tDQUV6SSw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDUTtnQ0FBR1IsV0FBVTswQ0FBNERQLEtBQUtnQixLQUFLOzs7Ozs7MENBQ3BGLDhEQUFDekIsa0RBQUtBO2dDQUFDaUIsS0FBS1I7Ozs7OzswQ0FDWiw4REFBQ2lCO2dDQUFFVixXQUFVOzBDQUE0Q1AsS0FBS2tCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJNUUsOERBQUNaO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ2hCLGtEQUFLQTt3QkFBQ2dCLFdBQVU7d0JBQXdCQyxLQUFLUixLQUFLbUIsS0FBSzt3QkFBRVAsT0FBTzt3QkFBTVEsUUFBUTt3QkFBS1AsS0FBSTs7Ozs7O2tDQUN4Riw4REFBQ0U7d0JBQUdSLFdBQVU7a0NBQWtDOzs7Ozs7a0NBQ2hELDhEQUFDVTt3QkFBRVYsV0FBVTtrQ0FBSVAsS0FBS3FCLFdBQVc7Ozs7OztrQ0FDakMsOERBQUNDO3dCQUFHZixXQUFVO2tDQUFtQzs7Ozs7O2tDQUNqRCw4REFBQ1U7d0JBQUVWLFdBQVU7a0NBQVE7Ozs7OztrQ0FDckIsOERBQUNVO3dCQUFFVixXQUFVO2tDQUFROzs7Ozs7a0NBR3JCLDhEQUFDZTt3QkFBR2YsV0FBVTtrQ0FBbUM7Ozs7OztrQ0FDakQsOERBQUNVO3dCQUFFVixXQUFVO2tDQUFROzs7Ozs7a0NBQ3JCLDhEQUFDVTt3QkFBRVYsV0FBVTtrQ0FBUTs7Ozs7O2tDQUVyQiw4REFBQ2U7d0JBQUdmLFdBQVU7a0NBQW1DOzs7Ozs7a0NBQ2pELDhEQUFDVTt3QkFBRVYsV0FBVTtrQ0FBUTs7Ozs7O2tDQUNyQiw4REFBQ1U7d0JBQUVWLFdBQVU7a0NBQVE7Ozs7OztrQ0FDckIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDZiw4REFBQ1U7Z0NBQUVWLFdBQVU7MENBQWdDOzs7Ozs7MENBRWxELDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2QsOERBQUNoQixrREFBS0E7d0NBQUNpQixLQUFLbkIsa0RBQU1BLENBQUNrQyxHQUFHO3dDQUFFWCxPQUFPO3dDQUFJQyxLQUFJOzs7Ozs7a0RBQ3ZDLDhEQUFDdEIsa0RBQUtBO3dDQUFDaUIsS0FBS25CLGtEQUFNQSxDQUFDbUMsT0FBTzt3Q0FBRVosT0FBTzt3Q0FBSUMsS0FBSTs7Ozs7O2tEQUMzQyw4REFBQ3RCLGtEQUFLQTt3Q0FBQ2lCLEtBQUtuQixrREFBTUEsQ0FBQ29DLEVBQUU7d0NBQUViLE9BQU87d0NBQUlDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJdEMsOERBQUNsQiwwREFBTUE7Ozs7OztxQ0FDSDtBQUVSO0dBNUVNRztBQThFTiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYmxvZ3MvW2lkXS9wYWdlLmpzPzdmYmEiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IGFzc2V0cywgYmxvZ19kYXRhIH0gZnJvbSAnQC9Bc3NldHMvYXNzZXRzJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnQC9jb21wb25lbnRzL2Zvb3RlcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5jb25zdCBwYWdlID0gKHtwYXJhbXN9KSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKVxyXG4vLyAgICBGT1IgQ0xJRU5UIFNJREVcclxuICAgIC8vIGNvbnN0IGZldGNoQmxvZ0RhdGEgPSAoKT0+e1xyXG4gICAgLy8gICAgIGZvcihsZXQgaT0wOyBpPGJsb2dfZGF0YS5sZW5ndGg7IGkrKylcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIGlmIChOdW1iZXIocGFyYW1zLmlkKT09PWJsb2dfZGF0YVtpXS5pZCl7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgc2V0RGF0YShibG9nX2RhdGFbaV0pXHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhibG9nX2RhdGFbaV0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgICAgICBicmVha1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBGT1IgQkFDS0VORFxyXG4gICAgY29uc3QgZmV0Y2hCbG9nRGF0YSA9IGFzeW5jKCk9PntcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvYmxvZ1wiLCB7XHJcbiAgICAgICAgICAgIHBhcmFtczp7XHJcbiAgICAgICAgICAgICAgICBpZDpwYXJhbXMuaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoQmxvZ0RhdGEoKVxyXG4gICAgXHJcbiAgICAgXHJcbiAgICB9LCBbXSlcclxuICAgIFxyXG4gIHJldHVybiAoZGF0YT8gPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPScgYmctZ3JheS0yMDAgcHktNSBweC01IG1kOnB4LTEyIGxnOnB4MjgnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPScgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgPExpbmsgc3JjPXthc3NldHMuYmFja3dhcmR9IGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXthc3NldHMuYmxvZ2dlcn0gd2lkdGg9ezE4MH0gYWx0PScnIGNsYXNzTmFtZT0nIHctWy0xMzBweF0gc206dy1hdXRvJy8+IFxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPScgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgZm9udC1tZWRpdW0gcHktMSBweC0zIHNtOnB5LTMgc206cHgtNiBib3JkZXIgYm9yZGVyLWJsYWNrIHNoYWRvdy1bLTdweF83cHhfMHB4XyMwMDAwMDBdJz5HZXQgU3RhcnRlZDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPScgdGV4dC1jZW50ZXIgbXktMjQgJz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0yeGwgc206dGV4dC01eGwgZm9udC1zZW1pYm9sZCBtYXgtdy1bNzAwcHhdIG14LWF1dG8nPntkYXRhLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2RhdGF9Lz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPScgbXQtMSBwYi0yIHRleHQtbGcgbWF4LXctWzc0MHB4XSBteC1hdXRvJz57ZGF0YS5hdXRob3J9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9JyBteC01IG1heC13LVs4MDBweF0gbWQ6bXgtYXV0byBtdC1bLTEwMHB4XSBtYi0xMCc+XHJcbiAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nYm9yZGVyLTQgYm9yZGVyLXdoaXRlJyBzcmM9e2RhdGEuaW1hZ2V9IHdpZHRoPXsxMjgwfSBoZWlnaHQ9ezcyMH0gYWx0PScnLz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdteS04IHRleHQtWy0yNnB4XSBmb250LXNlbWlib2xkJz5JbnRyb2R1Y3Rpb246PC9oMT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9Jyc+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9JyBteS01IHRleHQtWy0xOHB4XSBmb250LXNlbWlib2xkJz5TdGVwMTogU2VsZiByZWZsZWN0aW9uIGFuZCBnb2FsIHNldHRpbmc8L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nIG15LTMnPmtpaWlpaWlpaWlpaTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9JyBteS0zJz5raWlpaWlpaWlpaWk8L3A+XHJcblxyXG5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPScgbXktNSB0ZXh0LVstMThweF0gZm9udC1zZW1pYm9sZCc+U3RlcDE6IFNlbGYgcmVmbGVjdGlvbiBhbmQgZ29hbCBzZXR0aW5nPC9oMz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9JyBteS0zJz5raWlpaWlpaWlpaWk8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPScgbXktMyc+a2lpaWlpaWlpaWlpPC9wPlxyXG5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPScgbXktNSB0ZXh0LVstMThweF0gZm9udC1zZW1pYm9sZCc+Q29uY2x1c2lvbjogU2VsZiByZWZsZWN0aW9uIGFuZCBnb2FsIHNldHRpbmc8L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nIG15LTMnPmtpaWlpaWlpaWlpaTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9JyBteS0zJz5raWlpaWlpaWlpaWk8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBteS0yNCc+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWJsYWNrIGZvbnQtc2VtaWJvbGQgbXktNCc+U2hhcmUgdGhpcyBhcnRpY2xlcyBvbiBzb2NpYWwgbWVkaXVtPC9wPlxyXG4gICBcclxuICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG4gICAgPEltYWdlIHNyYz17YXNzZXRzLmZia30gd2lkdGg9ezUwfSBhbHQ9JycvPlxyXG4gICAgPEltYWdlIHNyYz17YXNzZXRzLnR3aXR0ZXJ9IHdpZHRoPXs1MH0gYWx0PScnLz5cclxuICAgIDxJbWFnZSBzcmM9e2Fzc2V0cy5pZ30gd2lkdGg9ezUwfSBhbHQ9JycvPlxyXG4gICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxGb290ZXIvPlxyXG4gICAgPC8+Ojw+PC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYWdlIl0sIm5hbWVzIjpbImFzc2V0cyIsImJsb2dfZGF0YSIsIkltYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZvb3RlciIsIkxpbmsiLCJheGlvcyIsInBhZ2UiLCJwYXJhbXMiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoQmxvZ0RhdGEiLCJyZXNwb25zZSIsImdldCIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYmFja3dhcmQiLCJocmVmIiwiYmxvZ2dlciIsIndpZHRoIiwiYWx0IiwiYnV0dG9uIiwiaDEiLCJ0aXRsZSIsInAiLCJhdXRob3IiLCJpbWFnZSIsImhlaWdodCIsImRlc2NyaXB0aW9uIiwiaDMiLCJmYmsiLCJ0d2l0dGVyIiwiaWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/blogs/[id]/page.js\n"));

/***/ })

});