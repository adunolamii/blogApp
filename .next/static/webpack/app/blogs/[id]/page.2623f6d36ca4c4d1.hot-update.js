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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Assets_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Assets/assets */ \"(app-pages-browser)/./Assets/assets.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/footer */ \"(app-pages-browser)/./components/footer.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst page = (param)=>{\n    let { params } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    //    FOR CLIENT SIDE....ASSETS FILE\n    // const fetchBlogData = ()=>{\n    //     for(let i=0; i<blog_data.length; i++)\n    //     {\n    //         if (Number(params.id)===blog_data[i].id){\n    //             setData(blog_data[i])\n    //             console.log(blog_data[i]);\n    //             break\n    //     }\n    // }\n    // }\n    // useEffect(() => {\n    //     fetchBlogData()\n    // }, [])\n    // FOR BACKEND FOR GET  INDIVIDUAL REQ \n    const fetchBlogData = async ()=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"/api/blog\", {\n            params: {\n                id: params.id\n            }\n        });\n        setData(response.data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchBlogData();\n    }, []);\n    return data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" bg-gray-200 py-5 px-5 md:px-12 lg:px28\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" flex justify-between items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.backward,\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.blogger,\n                                    width: 180,\n                                    alt: \"\",\n                                    className: \" w-[-130px] sm:w-auto\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \" flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]\",\n                                children: \"Get Started\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" text-center my-24 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto\",\n                                children: data.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                className: \"mx-auto mt-6 border border-white rounded-full\",\n                                src: data.authorI,\n                                width: 60,\n                                height: 60,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \" mt-1 pb-2 text-lg max-w-[740px] mx-auto\",\n                                children: data.author\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"border-4 border-white\",\n                        src: data.image,\n                        width: 1280,\n                        height: 720,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"my-8 text-[-26px] font-semibold\",\n                        children: \"Introduction:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"\",\n                        children: data.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \" my-5 text-[-18px] font-semibold\",\n                        children: \"Step1: Any sufficiently advanced technology is indistinguishable from magic\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"I think we can all agree that technology is essential. Unless, of course, you live on a deserted island! Even still, if you’re currently reading this from a deserted island…\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"At Criteria for Success, we believe sales training should be accessible no matter where you are. That's why each of our training modules can be conducted in person or via live webinar.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \" my-5 text-[-18px] font-semibold\",\n                        children: \"Step1:  The world isn’t going to shower gold coins on you just because you have a good idea.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"“Don’t wait for perfection. Life isn’t perfect. Do the best you can and ship. Real people ship, and then they test and then they ship again. Then you wake up one day and you have something insanely great.” \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \" my-5 text-[-18px] font-semibold\",\n                        children: \"Conclusion: You just have to pay attention to what people need and what has not been done.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"It’s easy to get caught up in the day-to-day hard work of running a business and completely forget that while solving problems and building something you can be proud of, you also have an incredible opportunity to shape the future. Even better, you have the chance to meet amazing people and do amazing things along the way. It’s important not to get lost among the trees and forget about the amazing, beautiful forest you’re planting.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" my-3\",\n                        children: \"It’s not about money or connections. It’s the willingness to outwork and outlearn everyone when it comes to your business. And if it fails, you learn from what happened and do a better job next time.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" my-24\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-black font-semibold my-4\",\n                                children: \"Share this articles on social medium\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 76,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.fbk,\n                                        width: 50,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 5\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.twitter,\n                                        width: 50,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 5\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.ig,\n                                        width: 50,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 5\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                                lineNumber: 78,\n                                columnNumber: 4\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                lineNumber: 59,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\blogs\\\\[id]\\\\page.js\",\n                lineNumber: 85,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n_s(page, \"fQZRxy/+nAZ7NLS1X4dVhrlp8Go=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ibG9ncy9baWRdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDckI7QUFDTDtBQUNrQjtBQUNIO0FBQ1o7QUFDSDtBQUV6QixNQUFNUyxPQUFPO1FBQUMsRUFBQ0MsTUFBTSxFQUFDOztJQUNsQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUM7SUFDckMsb0NBQW9DO0lBQ2hDLDhCQUE4QjtJQUM5Qiw0Q0FBNEM7SUFDNUMsUUFBUTtJQUNSLG9EQUFvRDtJQUVwRCxvQ0FBb0M7SUFDcEMseUNBQXlDO0lBRXpDLG9CQUFvQjtJQUNwQixRQUFRO0lBQ1IsSUFBSTtJQUNKLElBQUk7SUFFSixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFHVCx1Q0FBdUM7SUFDdkMsTUFBTVMsZ0JBQWdCO1FBQ2pCLE1BQU1DLFdBQVcsTUFBTU4sNkNBQUtBLENBQUNPLEdBQUcsQ0FBQyxhQUFhO1lBQUNMLFFBQU87Z0JBQUNNLElBQUdOLE9BQU9NLEVBQUU7WUFBQTtRQUFDO1FBQ3BFSixRQUFRRSxTQUFTSCxJQUFJO0lBQzFCO0lBRUFOLGdEQUFTQSxDQUFDO1FBQ05RO0lBR0osR0FBRyxFQUFFO0lBRVAsT0FBUUYscUJBQU07OzBCQUNaLDhEQUFDTTtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ1gsaURBQUlBO2dDQUFDWSxLQUFLbkIsa0RBQU1BLENBQUNvQixRQUFRO2dDQUFFQyxNQUFLOzBDQUNqQyw0RUFBQ25CLGtEQUFLQTtvQ0FBQ2lCLEtBQUtuQixrREFBTUEsQ0FBQ3NCLE9BQU87b0NBQUVDLE9BQU87b0NBQUtDLEtBQUk7b0NBQUdOLFdBQVU7Ozs7Ozs7Ozs7OzBDQUV6RCw4REFBQ087Z0NBQU9QLFdBQVU7MENBQW1IOzs7Ozs7Ozs7Ozs7a0NBRXpJLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNRO2dDQUFHUixXQUFVOzBDQUE0RFAsS0FBS2dCLEtBQUs7Ozs7OzswQ0FDcEYsOERBQUN6QixrREFBS0E7Z0NBQUNnQixXQUFVO2dDQUFnREMsS0FBS1IsS0FBS2lCLE9BQU87Z0NBQUVMLE9BQU87Z0NBQUlNLFFBQVE7Z0NBQUlMLEtBQUk7Ozs7OzswQ0FDL0csOERBQUNNO2dDQUFFWixXQUFVOzBDQUE0Q1AsS0FBS29CLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJNUUsOERBQUNkO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ2hCLGtEQUFLQTt3QkFBQ2dCLFdBQVU7d0JBQXdCQyxLQUFLUixLQUFLcUIsS0FBSzt3QkFBRVQsT0FBTzt3QkFBTU0sUUFBUTt3QkFBS0wsS0FBSTs7Ozs7O2tDQUN4Riw4REFBQ0U7d0JBQUdSLFdBQVU7a0NBQWtDOzs7Ozs7a0NBQ2hELDhEQUFDWTt3QkFBRVosV0FBVTtrQ0FBSVAsS0FBS3NCLFdBQVc7Ozs7OztrQ0FDakMsOERBQUNDO3dCQUFHaEIsV0FBVTtrQ0FBbUM7Ozs7OztrQ0FDakQsOERBQUNZO3dCQUFFWixXQUFVO2tDQUFROzs7Ozs7a0NBQ3JCLDhEQUFDWTt3QkFBRVosV0FBVTtrQ0FBUTs7Ozs7O2tDQUdyQiw4REFBQ2dCO3dCQUFHaEIsV0FBVTtrQ0FBbUM7Ozs7OztrQ0FDakQsOERBQUNZO3dCQUFFWixXQUFVO2tDQUFROzs7Ozs7a0NBQ3JCLDhEQUFDWTt3QkFBRVosV0FBVTtrQ0FBUTs7Ozs7O2tDQUVyQiw4REFBQ2dCO3dCQUFHaEIsV0FBVTtrQ0FBbUM7Ozs7OztrQ0FDakQsOERBQUNZO3dCQUFFWixXQUFVO2tDQUFROzs7Ozs7a0NBQ3JCLDhEQUFDWTt3QkFBRVosV0FBVTtrQ0FBUTs7Ozs7O2tDQUNyQiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNmLDhEQUFDWTtnQ0FBRVosV0FBVTswQ0FBZ0M7Ozs7OzswQ0FFbEQsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDZCw4REFBQ2hCLGtEQUFLQTt3Q0FBQ2lCLEtBQUtuQixrREFBTUEsQ0FBQ21DLEdBQUc7d0NBQUVaLE9BQU87d0NBQUlDLEtBQUk7Ozs7OztrREFDdkMsOERBQUN0QixrREFBS0E7d0NBQUNpQixLQUFLbkIsa0RBQU1BLENBQUNvQyxPQUFPO3dDQUFFYixPQUFPO3dDQUFJQyxLQUFJOzs7Ozs7a0RBQzNDLDhEQUFDdEIsa0RBQUtBO3dDQUFDaUIsS0FBS25CLGtEQUFNQSxDQUFDcUMsRUFBRTt3Q0FBRWQsT0FBTzt3Q0FBSUMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUl0Qyw4REFBQ2xCLDBEQUFNQTs7Ozs7O3FDQUNIO0FBRVI7R0E3RU1HO0FBK0VOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9ibG9ncy9baWRdL3BhZ2UuanM/N2ZiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgYXNzZXRzLCBibG9nX2RhdGEgfSBmcm9tICdAL0Fzc2V0cy9hc3NldHMnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEZvb3RlciBmcm9tICdAL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IHBhZ2UgPSAoe3BhcmFtc30pID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpXHJcbi8vICAgIEZPUiBDTElFTlQgU0lERS4uLi5BU1NFVFMgRklMRVxyXG4gICAgLy8gY29uc3QgZmV0Y2hCbG9nRGF0YSA9ICgpPT57XHJcbiAgICAvLyAgICAgZm9yKGxldCBpPTA7IGk8YmxvZ19kYXRhLmxlbmd0aDsgaSsrKVxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgaWYgKE51bWJlcihwYXJhbXMuaWQpPT09YmxvZ19kYXRhW2ldLmlkKXtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBzZXREYXRhKGJsb2dfZGF0YVtpXSlcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJsb2dfZGF0YVtpXSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgZmV0Y2hCbG9nRGF0YSgpXHJcbiAgICAvLyB9LCBbXSlcclxuICAgIFxyXG5cclxuICAgIC8vIEZPUiBCQUNLRU5EIEZPUiBHRVQgIElORElWSURVQUwgUkVRIFxyXG4gICAgY29uc3QgZmV0Y2hCbG9nRGF0YSA9IGFzeW5jKCk9PntcclxuICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2Jsb2dcIiwge3BhcmFtczp7aWQ6cGFyYW1zLmlkfX0pXHJcbiAgICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaEJsb2dEYXRhKClcclxuICAgIFxyXG4gICAgIFxyXG4gICAgfSwgW10pXHJcbiAgICBcclxuICByZXR1cm4gKGRhdGE/IDw+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nIGJnLWdyYXktMjAwIHB5LTUgcHgtNSBtZDpweC0xMiBsZzpweDI4Jz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgIDxMaW5rIHNyYz17YXNzZXRzLmJhY2t3YXJkfSBocmVmPScvJz5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17YXNzZXRzLmJsb2dnZXJ9IHdpZHRoPXsxODB9IGFsdD0nJyBjbGFzc05hbWU9JyB3LVstMTMwcHhdIHNtOnctYXV0bycvPiBcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGZvbnQtbWVkaXVtIHB5LTEgcHgtMyBzbTpweS0zIHNtOnB4LTYgYm9yZGVyIGJvcmRlci1ibGFjayBzaGFkb3ctWy03cHhfN3B4XzBweF8jMDAwMDAwXSc+R2V0IFN0YXJ0ZWQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHRleHQtY2VudGVyIG15LTI0ICc+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtMnhsIHNtOnRleHQtNXhsIGZvbnQtc2VtaWJvbGQgbWF4LXctWzcwMHB4XSBteC1hdXRvJz57ZGF0YS50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdteC1hdXRvIG10LTYgYm9yZGVyIGJvcmRlci13aGl0ZSByb3VuZGVkLWZ1bGwnIHNyYz17ZGF0YS5hdXRob3JJfSB3aWR0aD17NjB9IGhlaWdodD17NjB9IGFsdD0nJy8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nIG10LTEgcGItMiB0ZXh0LWxnIG1heC13LVs3NDBweF0gbXgtYXV0byc+e2RhdGEuYXV0aG9yfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPScgbXgtNSBtYXgtdy1bODAwcHhdIG1kOm14LWF1dG8gbXQtWy0xMDBweF0gbWItMTAnPlxyXG4gICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2JvcmRlci00IGJvcmRlci13aGl0ZScgc3JjPXtkYXRhLmltYWdlfSB3aWR0aD17MTI4MH0gaGVpZ2h0PXs3MjB9IGFsdD0nJy8+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0nbXktOCB0ZXh0LVstMjZweF0gZm9udC1zZW1pYm9sZCc+SW50cm9kdWN0aW9uOjwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPScnPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPScgbXktNSB0ZXh0LVstMThweF0gZm9udC1zZW1pYm9sZCc+U3RlcDE6IEFueSBzdWZmaWNpZW50bHkgYWR2YW5jZWQgdGVjaG5vbG9neSBpcyBpbmRpc3Rpbmd1aXNoYWJsZSBmcm9tIG1hZ2ljPC9oMz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9JyBteS0zJz5JIHRoaW5rIHdlIGNhbiBhbGwgYWdyZWUgdGhhdCB0ZWNobm9sb2d5IGlzIGVzc2VudGlhbC4gVW5sZXNzLCBvZiBjb3Vyc2UsIHlvdSBsaXZlIG9uIGEgZGVzZXJ0ZWQgaXNsYW5kISBFdmVuIHN0aWxsLCBpZiB5b3XigJlyZSBjdXJyZW50bHkgcmVhZGluZyB0aGlzIGZyb20gYSBkZXNlcnRlZCBpc2xhbmTigKY8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPScgbXktMyc+QXQgQ3JpdGVyaWEgZm9yIFN1Y2Nlc3MsIHdlIGJlbGlldmUgc2FsZXMgdHJhaW5pbmcgc2hvdWxkIGJlIGFjY2Vzc2libGUgbm8gbWF0dGVyIHdoZXJlIHlvdSBhcmUuIFRoYXQncyB3aHkgZWFjaCBvZiBvdXIgdHJhaW5pbmcgbW9kdWxlcyBjYW4gYmUgY29uZHVjdGVkIGluIHBlcnNvbiBvciB2aWEgbGl2ZSB3ZWJpbmFyLjwvcD5cclxuXHJcblxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9JyBteS01IHRleHQtWy0xOHB4XSBmb250LXNlbWlib2xkJz5TdGVwMTogIFRoZSB3b3JsZCBpc27igJl0IGdvaW5nIHRvIHNob3dlciBnb2xkIGNvaW5zIG9uIHlvdSBqdXN0IGJlY2F1c2UgeW91IGhhdmUgYSBnb29kIGlkZWEuPC9oMz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9JyBteS0zJz7igJxEb27igJl0IHdhaXQgZm9yIHBlcmZlY3Rpb24uIExpZmUgaXNu4oCZdCBwZXJmZWN0LiBEbyB0aGUgYmVzdCB5b3UgY2FuIGFuZCBzaGlwLiBSZWFsIHBlb3BsZSBzaGlwLCBhbmQgdGhlbiB0aGV5IHRlc3QgYW5kIHRoZW4gdGhleSBzaGlwIGFnYWluLiBUaGVuIHlvdSB3YWtlIHVwIG9uZSBkYXkgYW5kIHlvdSBoYXZlIHNvbWV0aGluZyBpbnNhbmVseSBncmVhdC7igJ0gPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nIG15LTMnPllvdXIgd29yayBpcyBnb2luZyB0byBmaWxsIGEgbGFyZ2UgcGFydCBvZiB5b3VyIGxpZmUsIGFuZCB0aGUgb25seSB3YXkgdG8gYmUgdHJ1bHkgc2F0aXNmaWVkIGlzIHRvIGRvIHdoYXQgeW91IGJlbGlldmUgaXMgZ3JlYXQgd29yay4gQW5kIHRoZSBvbmx5IHdheSB0byBkbyBncmVhdCB3b3JrIGlzIHRvIGxvdmUgd2hhdCB5b3UgZG88L3A+XHJcblxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9JyBteS01IHRleHQtWy0xOHB4XSBmb250LXNlbWlib2xkJz5Db25jbHVzaW9uOiBZb3UganVzdCBoYXZlIHRvIHBheSBhdHRlbnRpb24gdG8gd2hhdCBwZW9wbGUgbmVlZCBhbmQgd2hhdCBoYXMgbm90IGJlZW4gZG9uZS48L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nIG15LTMnPkl04oCZcyBlYXN5IHRvIGdldCBjYXVnaHQgdXAgaW4gdGhlIGRheS10by1kYXkgaGFyZCB3b3JrIG9mIHJ1bm5pbmcgYSBidXNpbmVzcyBhbmQgY29tcGxldGVseSBmb3JnZXQgdGhhdCB3aGlsZSBzb2x2aW5nIHByb2JsZW1zIGFuZCBidWlsZGluZyBzb21ldGhpbmcgeW91IGNhbiBiZSBwcm91ZCBvZiwgeW91IGFsc28gaGF2ZSBhbiBpbmNyZWRpYmxlIG9wcG9ydHVuaXR5IHRvIHNoYXBlIHRoZSBmdXR1cmUuIEV2ZW4gYmV0dGVyLCB5b3UgaGF2ZSB0aGUgY2hhbmNlIHRvIG1lZXQgYW1hemluZyBwZW9wbGUgYW5kIGRvIGFtYXppbmcgdGhpbmdzIGFsb25nIHRoZSB3YXkuIEl04oCZcyBpbXBvcnRhbnQgbm90IHRvIGdldCBsb3N0IGFtb25nIHRoZSB0cmVlcyBhbmQgZm9yZ2V0IGFib3V0IHRoZSBhbWF6aW5nLCBiZWF1dGlmdWwgZm9yZXN0IHlvdeKAmXJlIHBsYW50aW5nLjwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9JyBteS0zJz5JdOKAmXMgbm90IGFib3V0IG1vbmV5IG9yIGNvbm5lY3Rpb25zLiBJdOKAmXMgdGhlIHdpbGxpbmduZXNzIHRvIG91dHdvcmsgYW5kIG91dGxlYXJuIGV2ZXJ5b25lIHdoZW4gaXQgY29tZXMgdG8geW91ciBidXNpbmVzcy4gQW5kIGlmIGl0IGZhaWxzLCB5b3UgbGVhcm4gZnJvbSB3aGF0IGhhcHBlbmVkIGFuZCBkbyBhIGJldHRlciBqb2IgbmV4dCB0aW1lLjwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIG15LTI0Jz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtYmxhY2sgZm9udC1zZW1pYm9sZCBteS00Jz5TaGFyZSB0aGlzIGFydGljbGVzIG9uIHNvY2lhbCBtZWRpdW08L3A+XHJcbiAgIFxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcbiAgICA8SW1hZ2Ugc3JjPXthc3NldHMuZmJrfSB3aWR0aD17NTB9IGFsdD0nJy8+XHJcbiAgICA8SW1hZ2Ugc3JjPXthc3NldHMudHdpdHRlcn0gd2lkdGg9ezUwfSBhbHQ9JycvPlxyXG4gICAgPEltYWdlIHNyYz17YXNzZXRzLmlnfSB3aWR0aD17NTB9IGFsdD0nJy8+XHJcbiAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPEZvb3Rlci8+XHJcbiAgICA8Lz46PD48Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2UiXSwibmFtZXMiOlsiYXNzZXRzIiwiYmxvZ19kYXRhIiwiSW1hZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRm9vdGVyIiwiTGluayIsImF4aW9zIiwicGFnZSIsInBhcmFtcyIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y2hCbG9nRGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwiaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJiYWNrd2FyZCIsImhyZWYiLCJibG9nZ2VyIiwid2lkdGgiLCJhbHQiLCJidXR0b24iLCJoMSIsInRpdGxlIiwiYXV0aG9ySSIsImhlaWdodCIsInAiLCJhdXRob3IiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiaDMiLCJmYmsiLCJ0d2l0dGVyIiwiaWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/blogs/[id]/page.js\n"));

/***/ })

});