"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/subscriptions/page",{

/***/ "(app-pages-browser)/./app/admin/subscriptions/page.js":
/*!*****************************************!*\
  !*** ./app/admin/subscriptions/page.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_adminComponents_subsTableItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/adminComponents/subsTableItem */ \"(app-pages-browser)/./components/adminComponents/subsTableItem.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst page = ()=>{\n    _s();\n    const [emails, setEmails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchEmails = async ()=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/email\");\n        setEmails(response.data.emails);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchEmails();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" flex pt-5 px-5 sm:pt-12 sm: pl-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"All Subscription\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\subscriptions\\\\page.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \" w-full text-sm text-gray-500\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            className: \" text-sm text-left text-gray-700 uppercase bg-gray-50\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"px-6 py-3\",\n                                        children: \"Email Subscription\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\subscriptions\\\\page.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"hidden sm:block px-6 py-3\",\n                                        children: \"Date\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\subscriptions\\\\page.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"px-6 py-3\",\n                                        children: \"Action\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\subscriptions\\\\page.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\subscriptions\\\\page.js\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\subscriptions\\\\page.js\",\n                            lineNumber: 22,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: emails.map((item, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_adminComponents_subsTableItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, index, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\subscriptions\\\\page.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 22\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\subscriptions\\\\page.js\",\n                            lineNumber: 35,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\subscriptions\\\\page.js\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\subscriptions\\\\page.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\subscriptions\\\\page.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"Pz1emXvf1o2teMcG4tW42BuWti4=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9zdWJzY3JpcHRpb25zL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDeUI7QUFDNkM7QUFDM0I7QUFDbEI7QUFFekIsTUFBTUssT0FBTzs7SUFDWCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUN2QyxNQUFNTSxjQUFjO1FBQ2xCLE1BQU1DLFdBQVcsTUFBTUwsNkNBQUtBLENBQUNNLEdBQUcsQ0FBQztRQUNqQ0gsVUFBVUUsU0FBU0UsSUFBSSxDQUFDTCxNQUFNO0lBQ2hDO0lBQ0FILGdEQUFTQSxDQUFDO1FBQ1JLO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDRjtnQkFBSUMsV0FBVTswQkFDZiw0RUFBQ0U7b0JBQU1GLFdBQVU7O3NDQUNmLDhEQUFDRzs0QkFBTUgsV0FBVTtzQ0FDZiw0RUFBQ0k7O2tEQUNDLDhEQUFDQzt3Q0FBR0MsT0FBTTt3Q0FBTU4sV0FBVTtrREFBWTs7Ozs7O2tEQUd0Qyw4REFBQ0s7d0NBQUdDLE9BQU07d0NBQU1OLFdBQVU7a0RBQTRCOzs7Ozs7a0RBR3RELDhEQUFDSzt3Q0FBR0MsT0FBTTt3Q0FBTU4sV0FBVTtrREFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSzFDLDhEQUFDTztzQ0FFR2QsT0FBT2UsR0FBRyxDQUFDLENBQUNDLE1BQU1DO2dDQUNoQixxQkFBTyw4REFBQ3RCLGlGQUFhQSxNQUFNc0I7Ozs7OzRCQUM3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXWjtHQTNDTWxCO0FBNkNOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hZG1pbi9zdWJzY3JpcHRpb25zL3BhZ2UuanM/N2JmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdWJzVGFibGVJdGVtIGZyb20gJ0AvY29tcG9uZW50cy9hZG1pbkNvbXBvbmVudHMvc3Vic1RhYmxlSXRlbSdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5jb25zdCBwYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbHMsIHNldEVtYWlsc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBmZXRjaEVtYWlscyA9IGFzeW5jICgpPT57XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvZW1haWxcIilcclxuICAgIHNldEVtYWlscyhyZXNwb25zZS5kYXRhLmVtYWlscylcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoRW1haWxzKClcclxuICB9LCBbXSlcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9JyBmbGV4IHB0LTUgcHgtNSBzbTpwdC0xMiBzbTogcGwtMTYnPlxyXG4gICAgICA8aDE+QWxsIFN1YnNjcmlwdGlvbjwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPScgcmVsYXRpdmUgbWF4LXctWzYwMHB4XSBoLVs4MHZoXSBvdmVyZmxvdy14LWF1dG8gbXQtNCBib3JkZXIgYm9yZGVyLWdyYXktNDAwIHNjcm9sbGJhci1oaWRlJz5cclxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT0nIHctZnVsbCB0ZXh0LXNtIHRleHQtZ3JheS01MDAnPlxyXG4gICAgICAgIDx0aGVhZCBjbGFzc05hbWU9JyB0ZXh0LXNtIHRleHQtbGVmdCB0ZXh0LWdyYXktNzAwIHVwcGVyY2FzZSBiZy1ncmF5LTUwJz5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPSdjb2wnIGNsYXNzTmFtZT0ncHgtNiBweS0zJz5cclxuICAgICAgICAgICAgICBFbWFpbCBTdWJzY3JpcHRpb25cclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPSdjb2wnIGNsYXNzTmFtZT0naGlkZGVuIHNtOmJsb2NrIHB4LTYgcHktMyc+XHJcbiAgICAgICAgICAgICAgRGF0ZVxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8dGggc2NvcGU9J2NvbCcgY2xhc3NOYW1lPSdweC02IHB5LTMnPlxyXG4gICAgICAgICAgICAgIEFjdGlvblxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZW1haWxzLm1hcCgoaXRlbSwgaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxTdWJzVGFibGVJdGVtIGtleT17aW5kZXh9Lz5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvdGJvZHk+XHJcblxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2UiXSwibmFtZXMiOlsiUmVhY3QiLCJTdWJzVGFibGVJdGVtIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInBhZ2UiLCJlbWFpbHMiLCJzZXRFbWFpbHMiLCJmZXRjaEVtYWlscyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJzY29wZSIsInRib2R5IiwibWFwIiwiaXRlbSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/subscriptions/page.js\n"));

/***/ })

});