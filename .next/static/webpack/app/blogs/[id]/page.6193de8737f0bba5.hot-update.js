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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Assets_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Assets/assets */ \"(app-pages-browser)/./Assets/assets.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/footer */ \"(app-pages-browser)/./components/footer.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst page = (param)=>{\n    let { params } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    //    FOR CLIENT SIDE\n    const fetchBlogData = ()=>{\n        for(let i = 0; i < _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.blog_data.length; i++){\n            if (Number(params.id) === _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.blog_data[i].id) {\n                setData(_Assets_assets__WEBPACK_IMPORTED_MODULE_1__.blog_data[i]);\n                console.log(_Assets_assets__WEBPACK_IMPORTED_MODULE_1__.blog_data[i]);\n                break;\n            }\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchBlogData();\n    }, []);\n    // FOR BACKEND\n    // const fetchBlogData = async()=>{\n    //     // const response = await axios.get(\"/api/blog\", {\n    //     //     params:{\n    //     //         id:params.id\n    //     //     }\n    //     // })\n    //     // setData(response.data);\n    // }\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchBlogData();\n    }, []);\n    return data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" bg-gray-200 py-5 px-5 md:px-12 lg:px28\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" flex justify-between items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.backward,\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.blogger,\n                                    width: 180,\n                                    alt: \"\",\n                                    className: \" w-[-130px] sm:w-auto\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \" flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]\",\n                                children: \"Get Started\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" text-center my-24 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto\",\n                                children: data.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: data.author_Img,\n                                width: 60,\n                                height: 60,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \" mt-1 pb-2 text-lg max-w-[740px] mx-auto\",\n                                children: data.author\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                lineNumber: 49,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"border-4 border-white\",\n                        src: data.image,\n                        width: 1280,\n                        height: 720,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"my-8 text-[-26px] font-semibold\",\n                        children: \"Introduction:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"\",\n                        children: data.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \" my-5 text-[-18px] font-semibold\",\n                        children: \"Step1: Self reflection and goal setting\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \" my-5 text-[-18px] font-semibold\",\n                        children: \"Step1: Self reflection and goal setting\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \" my-5 text-[-18px] font-semibold\",\n                        children: \"Conclusion: Self reflection and goal setting\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" my-24\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-black font-semibold my-4\",\n                                children: \"Share this articles on social medium\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 80,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.fbk,\n                                        width: 50,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 5\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.twitter,\n                                        width: 50,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 5\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.ig,\n                                        width: 50,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 5\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 82,\n                                columnNumber: 4\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                lineNumber: 63,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                lineNumber: 89,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n_s(page, \"YR6LdT1l+6Yd+IOGPwr2bq93Hbo=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ibG9ncy9baWRdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVtRDtBQUNyQjtBQUNMO0FBQ2tCO0FBQ0g7QUFDWjtBQUNIO0FBRXpCLE1BQU1TLE9BQU87UUFBQyxFQUFDQyxNQUFNLEVBQUM7O0lBQ2xCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNyQyxxQkFBcUI7SUFDakIsTUFBTVMsZ0JBQWdCO1FBQ2xCLElBQUksSUFBSUMsSUFBRSxHQUFHQSxJQUFFYixxREFBU0EsQ0FBQ2MsTUFBTSxFQUFFRCxJQUNqQztZQUNJLElBQUlFLE9BQU9OLE9BQU9PLEVBQUUsTUFBSWhCLHFEQUFTLENBQUNhLEVBQUUsQ0FBQ0csRUFBRSxFQUFDO2dCQUVwQ0wsUUFBUVgscURBQVMsQ0FBQ2EsRUFBRTtnQkFDcEJJLFFBQVFDLEdBQUcsQ0FBQ2xCLHFEQUFTLENBQUNhLEVBQUU7Z0JBRXhCO1lBQ1I7UUFDSjtJQUNBO0lBRUFULGdEQUFTQSxDQUFDO1FBQ05RO0lBQ0osR0FBRyxFQUFFO0lBR0wsY0FBYztJQUNkLG1DQUFtQztJQUNuQyx5REFBeUQ7SUFDekQsc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxJQUFJO0lBRUpSLGdEQUFTQSxDQUFDO1FBQ05RO0lBR0osR0FBRyxFQUFFO0lBRVAsT0FBUUYscUJBQU07OzBCQUNaLDhEQUFDUztnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ2QsaURBQUlBO2dDQUFDZSxLQUFLdEIsa0RBQU1BLENBQUN1QixRQUFRO2dDQUFFQyxNQUFLOzBDQUNqQyw0RUFBQ3RCLGtEQUFLQTtvQ0FBQ29CLEtBQUt0QixrREFBTUEsQ0FBQ3lCLE9BQU87b0NBQUVDLE9BQU87b0NBQUtDLEtBQUk7b0NBQUdOLFdBQVU7Ozs7Ozs7Ozs7OzBDQUV6RCw4REFBQ087Z0NBQU9QLFdBQVU7MENBQW1IOzs7Ozs7Ozs7Ozs7a0NBRXpJLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNRO2dDQUFHUixXQUFVOzBDQUE0RFYsS0FBS21CLEtBQUs7Ozs7OzswQ0FDcEYsOERBQUM1QixrREFBS0E7Z0NBQUNvQixLQUFLWCxLQUFLb0IsVUFBVTtnQ0FBRUwsT0FBTztnQ0FBSU0sUUFBUTtnQ0FBSUwsS0FBSTs7Ozs7OzBDQUN4RCw4REFBQ007Z0NBQUVaLFdBQVU7MENBQTRDVixLQUFLdUIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUk1RSw4REFBQ2Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDbkIsa0RBQUtBO3dCQUFDbUIsV0FBVTt3QkFBd0JDLEtBQUtYLEtBQUt3QixLQUFLO3dCQUFFVCxPQUFPO3dCQUFNTSxRQUFRO3dCQUFLTCxLQUFJOzs7Ozs7a0NBQ3hGLDhEQUFDRTt3QkFBR1IsV0FBVTtrQ0FBa0M7Ozs7OztrQ0FDaEQsOERBQUNZO3dCQUFFWixXQUFVO2tDQUFJVixLQUFLeUIsV0FBVzs7Ozs7O2tDQUNqQyw4REFBQ0M7d0JBQUdoQixXQUFVO2tDQUFtQzs7Ozs7O2tDQUNqRCw4REFBQ1k7d0JBQUVaLFdBQVU7a0NBQVE7Ozs7OztrQ0FDckIsOERBQUNZO3dCQUFFWixXQUFVO2tDQUFROzs7Ozs7a0NBR3JCLDhEQUFDZ0I7d0JBQUdoQixXQUFVO2tDQUFtQzs7Ozs7O2tDQUNqRCw4REFBQ1k7d0JBQUVaLFdBQVU7a0NBQVE7Ozs7OztrQ0FDckIsOERBQUNZO3dCQUFFWixXQUFVO2tDQUFROzs7Ozs7a0NBRXJCLDhEQUFDZ0I7d0JBQUdoQixXQUFVO2tDQUFtQzs7Ozs7O2tDQUNqRCw4REFBQ1k7d0JBQUVaLFdBQVU7a0NBQVE7Ozs7OztrQ0FDckIsOERBQUNZO3dCQUFFWixXQUFVO2tDQUFROzs7Ozs7a0NBQ3JCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2YsOERBQUNZO2dDQUFFWixXQUFVOzBDQUFnQzs7Ozs7OzBDQUVsRCw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNkLDhEQUFDbkIsa0RBQUtBO3dDQUFDb0IsS0FBS3RCLGtEQUFNQSxDQUFDc0MsR0FBRzt3Q0FBRVosT0FBTzt3Q0FBSUMsS0FBSTs7Ozs7O2tEQUN2Qyw4REFBQ3pCLGtEQUFLQTt3Q0FBQ29CLEtBQUt0QixrREFBTUEsQ0FBQ3VDLE9BQU87d0NBQUViLE9BQU87d0NBQUlDLEtBQUk7Ozs7OztrREFDM0MsOERBQUN6QixrREFBS0E7d0NBQUNvQixLQUFLdEIsa0RBQU1BLENBQUN3QyxFQUFFO3dDQUFFZCxPQUFPO3dDQUFJQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXRDLDhEQUFDckIsMERBQU1BOzs7Ozs7cUNBQ0g7QUFFUjtHQWpGTUc7QUFtRk4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Jsb2dzL1tpZF0vcGFnZS5qcz83ZmJhIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyBhc3NldHMsIGJsb2dfZGF0YSB9IGZyb20gJ0AvQXNzZXRzL2Fzc2V0cydcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvY29tcG9uZW50cy9mb290ZXInXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuY29uc3QgcGFnZSA9ICh7cGFyYW1zfSkgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbClcclxuLy8gICAgRk9SIENMSUVOVCBTSURFXHJcbiAgICBjb25zdCBmZXRjaEJsb2dEYXRhID0gKCk9PntcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTxibG9nX2RhdGEubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoTnVtYmVyKHBhcmFtcy5pZCk9PT1ibG9nX2RhdGFbaV0uaWQpe1xyXG5cclxuICAgICAgICAgICAgICAgIHNldERhdGEoYmxvZ19kYXRhW2ldKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYmxvZ19kYXRhW2ldKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaEJsb2dEYXRhKClcclxuICAgIH0sIFtdKVxyXG4gICAgXHJcblxyXG4gICAgLy8gRk9SIEJBQ0tFTkRcclxuICAgIC8vIGNvbnN0IGZldGNoQmxvZ0RhdGEgPSBhc3luYygpPT57XHJcbiAgICAvLyAgICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2Jsb2dcIiwge1xyXG4gICAgLy8gICAgIC8vICAgICBwYXJhbXM6e1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgaWQ6cGFyYW1zLmlkXHJcbiAgICAvLyAgICAgLy8gICAgIH1cclxuICAgIC8vICAgICAvLyB9KVxyXG4gICAgLy8gICAgIC8vIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaEJsb2dEYXRhKClcclxuICAgIFxyXG4gICAgIFxyXG4gICAgfSwgW10pXHJcbiAgICBcclxuICByZXR1cm4gKGRhdGE/IDw+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nIGJnLWdyYXktMjAwIHB5LTUgcHgtNSBtZDpweC0xMiBsZzpweDI4Jz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgIDxMaW5rIHNyYz17YXNzZXRzLmJhY2t3YXJkfSBocmVmPScvJz5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17YXNzZXRzLmJsb2dnZXJ9IHdpZHRoPXsxODB9IGFsdD0nJyBjbGFzc05hbWU9JyB3LVstMTMwcHhdIHNtOnctYXV0bycvPiBcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGZvbnQtbWVkaXVtIHB5LTEgcHgtMyBzbTpweS0zIHNtOnB4LTYgYm9yZGVyIGJvcmRlci1ibGFjayBzaGFkb3ctWy03cHhfN3B4XzBweF8jMDAwMDAwXSc+R2V0IFN0YXJ0ZWQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHRleHQtY2VudGVyIG15LTI0ICc+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtMnhsIHNtOnRleHQtNXhsIGZvbnQtc2VtaWJvbGQgbWF4LXctWzcwMHB4XSBteC1hdXRvJz57ZGF0YS50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtkYXRhLmF1dGhvcl9JbWd9IHdpZHRoPXs2MH0gaGVpZ2h0PXs2MH0gYWx0PScnLz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPScgbXQtMSBwYi0yIHRleHQtbGcgbWF4LXctWzc0MHB4XSBteC1hdXRvJz57ZGF0YS5hdXRob3J9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9JyBteC01IG1heC13LVs4MDBweF0gbWQ6bXgtYXV0byBtdC1bLTEwMHB4XSBtYi0xMCc+XHJcbiAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nYm9yZGVyLTQgYm9yZGVyLXdoaXRlJyBzcmM9e2RhdGEuaW1hZ2V9IHdpZHRoPXsxMjgwfSBoZWlnaHQ9ezcyMH0gYWx0PScnLz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdteS04IHRleHQtWy0yNnB4XSBmb250LXNlbWlib2xkJz5JbnRyb2R1Y3Rpb246PC9oMT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9Jyc+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9JyBteS01IHRleHQtWy0xOHB4XSBmb250LXNlbWlib2xkJz5TdGVwMTogU2VsZiByZWZsZWN0aW9uIGFuZCBnb2FsIHNldHRpbmc8L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nIG15LTMnPmtpaWlpaWlpaWlpaTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9JyBteS0zJz5raWlpaWlpaWlpaWk8L3A+XHJcblxyXG5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPScgbXktNSB0ZXh0LVstMThweF0gZm9udC1zZW1pYm9sZCc+U3RlcDE6IFNlbGYgcmVmbGVjdGlvbiBhbmQgZ29hbCBzZXR0aW5nPC9oMz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9JyBteS0zJz5raWlpaWlpaWlpaWk8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPScgbXktMyc+a2lpaWlpaWlpaWlpPC9wPlxyXG5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPScgbXktNSB0ZXh0LVstMThweF0gZm9udC1zZW1pYm9sZCc+Q29uY2x1c2lvbjogU2VsZiByZWZsZWN0aW9uIGFuZCBnb2FsIHNldHRpbmc8L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nIG15LTMnPmtpaWlpaWlpaWlpaTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9JyBteS0zJz5raWlpaWlpaWlpaWk8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBteS0yNCc+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWJsYWNrIGZvbnQtc2VtaWJvbGQgbXktNCc+U2hhcmUgdGhpcyBhcnRpY2xlcyBvbiBzb2NpYWwgbWVkaXVtPC9wPlxyXG4gICBcclxuICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG4gICAgPEltYWdlIHNyYz17YXNzZXRzLmZia30gd2lkdGg9ezUwfSBhbHQ9JycvPlxyXG4gICAgPEltYWdlIHNyYz17YXNzZXRzLnR3aXR0ZXJ9IHdpZHRoPXs1MH0gYWx0PScnLz5cclxuICAgIDxJbWFnZSBzcmM9e2Fzc2V0cy5pZ30gd2lkdGg9ezUwfSBhbHQ9JycvPlxyXG4gICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxGb290ZXIvPlxyXG4gICAgPC8+Ojw+PC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYWdlIl0sIm5hbWVzIjpbImFzc2V0cyIsImJsb2dfZGF0YSIsIkltYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZvb3RlciIsIkxpbmsiLCJheGlvcyIsInBhZ2UiLCJwYXJhbXMiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoQmxvZ0RhdGEiLCJpIiwibGVuZ3RoIiwiTnVtYmVyIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYmFja3dhcmQiLCJocmVmIiwiYmxvZ2dlciIsIndpZHRoIiwiYWx0IiwiYnV0dG9uIiwiaDEiLCJ0aXRsZSIsImF1dGhvcl9JbWciLCJoZWlnaHQiLCJwIiwiYXV0aG9yIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImgzIiwiZmJrIiwidHdpdHRlciIsImlnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/blogs/[id]/page.js\n"));

/***/ })

});