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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Assets_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Assets/assets */ \"(app-pages-browser)/./Assets/assets.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/footer */ \"(app-pages-browser)/./components/footer.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst page = (param)=>{\n    let { params } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    //    FOR CLIENT SIDE\n    const fetchBlogData = ()=>{\n        for(let i = 0; i < _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.blog_data.length; i++){\n            if (Number(params.id) === _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.blog_data[i].id) {\n                setData(_Assets_assets__WEBPACK_IMPORTED_MODULE_1__.blog_data[i]);\n                console.log(_Assets_assets__WEBPACK_IMPORTED_MODULE_1__.blog_data[i]);\n                break;\n            }\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchBlogData();\n    }, []);\n    // FOR BACKEND\n    // const fetchBlogData = async()=>{\n    //     // const response = await axios.get(\"/api/blog\", {\n    //     //     params:{\n    //     //         id:params.id\n    //     //     }\n    //     // })\n    //     // setData(response.data);\n    // }\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchBlogData();\n    }, []);\n    return data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" bg-gray-200 py-5 px-5 md:px-12 lg:px28\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" flex justify-between items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.backward,\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.blogger,\n                                    width: 180,\n                                    alt: \"\",\n                                    className: \" w-[-130px] sm:w-auto\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \" flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]\",\n                                children: \"Get Started\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" text-center my-24 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto\",\n                                children: data.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                className: \"mx-auto mt-6 border border-white rounded-full\",\n                                src: data.author_img,\n                                width: 60,\n                                height: 60,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \" mt-1 pb-2 text-lg max-w-[740px] mx-auto\",\n                                children: data.author\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                lineNumber: 49,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"border-4 border-white\",\n                        src: data.image,\n                        width: 1280,\n                        height: 720,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"my-8 text-[-26px] font-semibold\",\n                        children: \"Introduction:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"\",\n                        children: data.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \" my-5 text-[-18px] font-semibold\",\n                        children: \"Step1: Any sufficiently advanced technology is indistinguishable from magic\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"I think we can all agree that technology is essential. Unless, of course, you live on a deserted island! Even still, if you’re currently reading this from a deserted island…\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"At Criteria for Success, we believe sales training should be accessible no matter where you are. That's why each of our training modules can be conducted in person or via live webinar.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \" my-5 text-[-18px] font-semibold\",\n                        children: \"Step1:  The world isn’t going to shower gold coins on you just because you have a good idea.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"“Don’t wait for perfection. Life isn’t perfect. Do the best you can and ship. Real people ship, and then they test and then they ship again. Then you wake up one day and you have something insanely great.” \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \" my-5 text-[-18px] font-semibold\",\n                        children: \"Conclusion: It’s easy to get caught up in the day-to-day hard work of running a business and completely forget that while solving problems and building something you can be proud of, you also have an incredible opportunity to shape the future. Even better, you have the chance to meet amazing people and do amazing things along the way. It’s important not to get lost among the trees and forget about the amazing, beautiful forest you’re planting.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"kiiiiiiiiiii\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" my-24\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-black font-semibold my-4\",\n                                children: \"Share this articles on social medium\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 80,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.fbk,\n                                        width: 50,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 5\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.twitter,\n                                        width: 50,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 5\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.ig,\n                                        width: 50,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 5\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 82,\n                                columnNumber: 4\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                lineNumber: 63,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                lineNumber: 89,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n_s(page, \"YR6LdT1l+6Yd+IOGPwr2bq93Hbo=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ibG9ncy9baWRdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVtRDtBQUNyQjtBQUNMO0FBQ2tCO0FBQ0g7QUFDWjtBQUNIO0FBRXpCLE1BQU1TLE9BQU87UUFBQyxFQUFDQyxNQUFNLEVBQUM7O0lBQ2xCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNyQyxxQkFBcUI7SUFDakIsTUFBTVMsZ0JBQWdCO1FBQ2xCLElBQUksSUFBSUMsSUFBRSxHQUFHQSxJQUFFYixxREFBU0EsQ0FBQ2MsTUFBTSxFQUFFRCxJQUNqQztZQUNJLElBQUlFLE9BQU9OLE9BQU9PLEVBQUUsTUFBSWhCLHFEQUFTLENBQUNhLEVBQUUsQ0FBQ0csRUFBRSxFQUFDO2dCQUVwQ0wsUUFBUVgscURBQVMsQ0FBQ2EsRUFBRTtnQkFDcEJJLFFBQVFDLEdBQUcsQ0FBQ2xCLHFEQUFTLENBQUNhLEVBQUU7Z0JBRXhCO1lBQ1I7UUFDSjtJQUNBO0lBRUFULGdEQUFTQSxDQUFDO1FBQ05RO0lBQ0osR0FBRyxFQUFFO0lBR0wsY0FBYztJQUNkLG1DQUFtQztJQUNuQyx5REFBeUQ7SUFDekQsc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxJQUFJO0lBRUpSLGdEQUFTQSxDQUFDO1FBQ05RO0lBR0osR0FBRyxFQUFFO0lBRVAsT0FBUUYscUJBQU07OzBCQUNaLDhEQUFDUztnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ2QsaURBQUlBO2dDQUFDZSxLQUFLdEIsa0RBQU1BLENBQUN1QixRQUFRO2dDQUFFQyxNQUFLOzBDQUNqQyw0RUFBQ3RCLGtEQUFLQTtvQ0FBQ29CLEtBQUt0QixrREFBTUEsQ0FBQ3lCLE9BQU87b0NBQUVDLE9BQU87b0NBQUtDLEtBQUk7b0NBQUdOLFdBQVU7Ozs7Ozs7Ozs7OzBDQUV6RCw4REFBQ087Z0NBQU9QLFdBQVU7MENBQW1IOzs7Ozs7Ozs7Ozs7a0NBRXpJLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNRO2dDQUFHUixXQUFVOzBDQUE0RFYsS0FBS21CLEtBQUs7Ozs7OzswQ0FDcEYsOERBQUM1QixrREFBS0E7Z0NBQUNtQixXQUFVO2dDQUFnREMsS0FBS1gsS0FBS29CLFVBQVU7Z0NBQUVMLE9BQU87Z0NBQUlNLFFBQVE7Z0NBQUlMLEtBQUk7Ozs7OzswQ0FDbEgsOERBQUNNO2dDQUFFWixXQUFVOzBDQUE0Q1YsS0FBS3VCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJNUUsOERBQUNkO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ25CLGtEQUFLQTt3QkFBQ21CLFdBQVU7d0JBQXdCQyxLQUFLWCxLQUFLd0IsS0FBSzt3QkFBRVQsT0FBTzt3QkFBTU0sUUFBUTt3QkFBS0wsS0FBSTs7Ozs7O2tDQUN4Riw4REFBQ0U7d0JBQUdSLFdBQVU7a0NBQWtDOzs7Ozs7a0NBQ2hELDhEQUFDWTt3QkFBRVosV0FBVTtrQ0FBSVYsS0FBS3lCLFdBQVc7Ozs7OztrQ0FDakMsOERBQUNDO3dCQUFHaEIsV0FBVTtrQ0FBbUM7Ozs7OztrQ0FDakQsOERBQUNZO3dCQUFFWixXQUFVO2tDQUFROzs7Ozs7a0NBQ3JCLDhEQUFDWTt3QkFBRVosV0FBVTtrQ0FBUTs7Ozs7O2tDQUdyQiw4REFBQ2dCO3dCQUFHaEIsV0FBVTtrQ0FBbUM7Ozs7OztrQ0FDakQsOERBQUNZO3dCQUFFWixXQUFVO2tDQUFROzs7Ozs7a0NBQ3JCLDhEQUFDWTt3QkFBRVosV0FBVTtrQ0FBUTs7Ozs7O2tDQUVyQiw4REFBQ2dCO3dCQUFHaEIsV0FBVTtrQ0FBbUM7Ozs7OztrQ0FDakQsOERBQUNZO3dCQUFFWixXQUFVO2tDQUFROzs7Ozs7a0NBQ3JCLDhEQUFDWTt3QkFBRVosV0FBVTtrQ0FBUTs7Ozs7O2tDQUNyQiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNmLDhEQUFDWTtnQ0FBRVosV0FBVTswQ0FBZ0M7Ozs7OzswQ0FFbEQsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDZCw4REFBQ25CLGtEQUFLQTt3Q0FBQ29CLEtBQUt0QixrREFBTUEsQ0FBQ3NDLEdBQUc7d0NBQUVaLE9BQU87d0NBQUlDLEtBQUk7Ozs7OztrREFDdkMsOERBQUN6QixrREFBS0E7d0NBQUNvQixLQUFLdEIsa0RBQU1BLENBQUN1QyxPQUFPO3dDQUFFYixPQUFPO3dDQUFJQyxLQUFJOzs7Ozs7a0RBQzNDLDhEQUFDekIsa0RBQUtBO3dDQUFDb0IsS0FBS3RCLGtEQUFNQSxDQUFDd0MsRUFBRTt3Q0FBRWQsT0FBTzt3Q0FBSUMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUl0Qyw4REFBQ3JCLDBEQUFNQTs7Ozs7O3FDQUNIO0FBRVI7R0FqRk1HO0FBbUZOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9ibG9ncy9baWRdL3BhZ2UuanM/N2ZiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgYXNzZXRzLCBibG9nX2RhdGEgfSBmcm9tICdAL0Fzc2V0cy9hc3NldHMnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEZvb3RlciBmcm9tICdAL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IHBhZ2UgPSAoe3BhcmFtc30pID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpXHJcbi8vICAgIEZPUiBDTElFTlQgU0lERVxyXG4gICAgY29uc3QgZmV0Y2hCbG9nRGF0YSA9ICgpPT57XHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8YmxvZ19kYXRhLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKE51bWJlcihwYXJhbXMuaWQpPT09YmxvZ19kYXRhW2ldLmlkKXtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKGJsb2dfZGF0YVtpXSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJsb2dfZGF0YVtpXSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hCbG9nRGF0YSgpXHJcbiAgICB9LCBbXSlcclxuICAgIFxyXG5cclxuICAgIC8vIEZPUiBCQUNLRU5EXHJcbiAgICAvLyBjb25zdCBmZXRjaEJsb2dEYXRhID0gYXN5bmMoKT0+e1xyXG4gICAgLy8gICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9ibG9nXCIsIHtcclxuICAgIC8vICAgICAvLyAgICAgcGFyYW1zOntcclxuICAgIC8vICAgICAvLyAgICAgICAgIGlkOnBhcmFtcy5pZFxyXG4gICAgLy8gICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgLy8gfSlcclxuICAgIC8vICAgICAvLyBzZXREYXRhKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hCbG9nRGF0YSgpXHJcbiAgICBcclxuICAgICBcclxuICAgIH0sIFtdKVxyXG4gICAgXHJcbiAgcmV0dXJuIChkYXRhPyA8PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9JyBiZy1ncmF5LTIwMCBweS01IHB4LTUgbWQ6cHgtMTIgbGc6cHgyOCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICA8TGluayBzcmM9e2Fzc2V0cy5iYWNrd2FyZH0gaHJlZj0nLyc+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2Fzc2V0cy5ibG9nZ2VyfSB3aWR0aD17MTgwfSBhbHQ9JycgY2xhc3NOYW1lPScgdy1bLTEzMHB4XSBzbTp3LWF1dG8nLz4gXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9JyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBmb250LW1lZGl1bSBweS0xIHB4LTMgc206cHktMyBzbTpweC02IGJvcmRlciBib3JkZXItYmxhY2sgc2hhZG93LVstN3B4XzdweF8wcHhfIzAwMDAwMF0nPkdldCBTdGFydGVkPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyB0ZXh0LWNlbnRlciBteS0yNCAnPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBzbTp0ZXh0LTV4bCBmb250LXNlbWlib2xkIG1heC13LVs3MDBweF0gbXgtYXV0byc+e2RhdGEudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nbXgtYXV0byBtdC02IGJvcmRlciBib3JkZXItd2hpdGUgcm91bmRlZC1mdWxsJyBzcmM9e2RhdGEuYXV0aG9yX2ltZ30gd2lkdGg9ezYwfSBoZWlnaHQ9ezYwfSBhbHQ9JycvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9JyBtdC0xIHBiLTIgdGV4dC1sZyBtYXgtdy1bNzQwcHhdIG14LWF1dG8nPntkYXRhLmF1dGhvcn08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nIG14LTUgbWF4LXctWzgwMHB4XSBtZDpteC1hdXRvIG10LVstMTAwcHhdIG1iLTEwJz5cclxuICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdib3JkZXItNCBib3JkZXItd2hpdGUnIHNyYz17ZGF0YS5pbWFnZX0gd2lkdGg9ezEyODB9IGhlaWdodD17NzIwfSBhbHQ9JycvPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9J215LTggdGV4dC1bLTI2cHhdIGZvbnQtc2VtaWJvbGQnPkludHJvZHVjdGlvbjo8L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nJz57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT0nIG15LTUgdGV4dC1bLTE4cHhdIGZvbnQtc2VtaWJvbGQnPlN0ZXAxOiBBbnkgc3VmZmljaWVudGx5IGFkdmFuY2VkIHRlY2hub2xvZ3kgaXMgaW5kaXN0aW5ndWlzaGFibGUgZnJvbSBtYWdpYzwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPScgbXktMyc+SSB0aGluayB3ZSBjYW4gYWxsIGFncmVlIHRoYXQgdGVjaG5vbG9neSBpcyBlc3NlbnRpYWwuIFVubGVzcywgb2YgY291cnNlLCB5b3UgbGl2ZSBvbiBhIGRlc2VydGVkIGlzbGFuZCEgRXZlbiBzdGlsbCwgaWYgeW914oCZcmUgY3VycmVudGx5IHJlYWRpbmcgdGhpcyBmcm9tIGEgZGVzZXJ0ZWQgaXNsYW5k4oCmPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nIG15LTMnPkF0IENyaXRlcmlhIGZvciBTdWNjZXNzLCB3ZSBiZWxpZXZlIHNhbGVzIHRyYWluaW5nIHNob3VsZCBiZSBhY2Nlc3NpYmxlIG5vIG1hdHRlciB3aGVyZSB5b3UgYXJlLiBUaGF0J3Mgd2h5IGVhY2ggb2Ygb3VyIHRyYWluaW5nIG1vZHVsZXMgY2FuIGJlIGNvbmR1Y3RlZCBpbiBwZXJzb24gb3IgdmlhIGxpdmUgd2ViaW5hci48L3A+XHJcblxyXG5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPScgbXktNSB0ZXh0LVstMThweF0gZm9udC1zZW1pYm9sZCc+U3RlcDE6ICBUaGUgd29ybGQgaXNu4oCZdCBnb2luZyB0byBzaG93ZXIgZ29sZCBjb2lucyBvbiB5b3UganVzdCBiZWNhdXNlIHlvdSBoYXZlIGEgZ29vZCBpZGVhLjwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPScgbXktMyc+4oCcRG9u4oCZdCB3YWl0IGZvciBwZXJmZWN0aW9uLiBMaWZlIGlzbuKAmXQgcGVyZmVjdC4gRG8gdGhlIGJlc3QgeW91IGNhbiBhbmQgc2hpcC4gUmVhbCBwZW9wbGUgc2hpcCwgYW5kIHRoZW4gdGhleSB0ZXN0IGFuZCB0aGVuIHRoZXkgc2hpcCBhZ2Fpbi4gVGhlbiB5b3Ugd2FrZSB1cCBvbmUgZGF5IGFuZCB5b3UgaGF2ZSBzb21ldGhpbmcgaW5zYW5lbHkgZ3JlYXQu4oCdIDwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9JyBteS0zJz5Zb3VyIHdvcmsgaXMgZ29pbmcgdG8gZmlsbCBhIGxhcmdlIHBhcnQgb2YgeW91ciBsaWZlLCBhbmQgdGhlIG9ubHkgd2F5IHRvIGJlIHRydWx5IHNhdGlzZmllZCBpcyB0byBkbyB3aGF0IHlvdSBiZWxpZXZlIGlzIGdyZWF0IHdvcmsuIEFuZCB0aGUgb25seSB3YXkgdG8gZG8gZ3JlYXQgd29yayBpcyB0byBsb3ZlIHdoYXQgeW91IGRvPC9wPlxyXG5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPScgbXktNSB0ZXh0LVstMThweF0gZm9udC1zZW1pYm9sZCc+Q29uY2x1c2lvbjogSXTigJlzIGVhc3kgdG8gZ2V0IGNhdWdodCB1cCBpbiB0aGUgZGF5LXRvLWRheSBoYXJkIHdvcmsgb2YgcnVubmluZyBhIGJ1c2luZXNzIGFuZCBjb21wbGV0ZWx5IGZvcmdldCB0aGF0IHdoaWxlIHNvbHZpbmcgcHJvYmxlbXMgYW5kIGJ1aWxkaW5nIHNvbWV0aGluZyB5b3UgY2FuIGJlIHByb3VkIG9mLCB5b3UgYWxzbyBoYXZlIGFuIGluY3JlZGlibGUgb3Bwb3J0dW5pdHkgdG8gc2hhcGUgdGhlIGZ1dHVyZS4gRXZlbiBiZXR0ZXIsIHlvdSBoYXZlIHRoZSBjaGFuY2UgdG8gbWVldCBhbWF6aW5nIHBlb3BsZSBhbmQgZG8gYW1hemluZyB0aGluZ3MgYWxvbmcgdGhlIHdheS4gSXTigJlzIGltcG9ydGFudCBub3QgdG8gZ2V0IGxvc3QgYW1vbmcgdGhlIHRyZWVzIGFuZCBmb3JnZXQgYWJvdXQgdGhlIGFtYXppbmcsIGJlYXV0aWZ1bCBmb3Jlc3QgeW914oCZcmUgcGxhbnRpbmcuPC9oMz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9JyBteS0zJz5raWlpaWlpaWlpaWk8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPScgbXktMyc+a2lpaWlpaWlpaWlpPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPScgbXktMjQnPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1ibGFjayBmb250LXNlbWlib2xkIG15LTQnPlNoYXJlIHRoaXMgYXJ0aWNsZXMgb24gc29jaWFsIG1lZGl1bTwvcD5cclxuICAgXHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cclxuICAgIDxJbWFnZSBzcmM9e2Fzc2V0cy5mYmt9IHdpZHRoPXs1MH0gYWx0PScnLz5cclxuICAgIDxJbWFnZSBzcmM9e2Fzc2V0cy50d2l0dGVyfSB3aWR0aD17NTB9IGFsdD0nJy8+XHJcbiAgICA8SW1hZ2Ugc3JjPXthc3NldHMuaWd9IHdpZHRoPXs1MH0gYWx0PScnLz5cclxuICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Rm9vdGVyLz5cclxuICAgIDwvPjo8PjwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZSJdLCJuYW1lcyI6WyJhc3NldHMiLCJibG9nX2RhdGEiLCJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGb290ZXIiLCJMaW5rIiwiYXhpb3MiLCJwYWdlIiwicGFyYW1zIiwiZGF0YSIsInNldERhdGEiLCJmZXRjaEJsb2dEYXRhIiwiaSIsImxlbmd0aCIsIk51bWJlciIsImlkIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImJhY2t3YXJkIiwiaHJlZiIsImJsb2dnZXIiLCJ3aWR0aCIsImFsdCIsImJ1dHRvbiIsImgxIiwidGl0bGUiLCJhdXRob3JfaW1nIiwiaGVpZ2h0IiwicCIsImF1dGhvciIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJoMyIsImZiayIsInR3aXR0ZXIiLCJpZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/blogs/[id]/page.js\n"));

/***/ })

});