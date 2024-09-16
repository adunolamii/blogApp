"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/blogLists/page",{

/***/ "(app-pages-browser)/./app/admin/blogLists/page.js":
/*!*************************************!*\
  !*** ./app/admin/blogLists/page.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_adminComponents_blogTableItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/adminComponents/blogTableItems */ \"(app-pages-browser)/./components/adminComponents/blogTableItems.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst page = ()=>{\n    _s();\n    const [blogs, setBlogs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchBlogs = async ()=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/blog\");\n        setBlogs(response.data.blogs);\n    };\n    const deleteBlog = async (mongoId)=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].delete(\"/api/blog\", {});\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchBlogs();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" flex-1 pt-5 px-5 sm:pt-12 sm:pl-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"All Blogs\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\blogLists\\\\page.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative h-[-80vh] max-w[-850px] overflow-auto mt-4 border border-gray-400 scrollbar-hide\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \" w-full text-sm text-gray-500\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            className: \"text-sm text-gray-700 text-left uppercase bg-gray-50\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"hidden sm:block px-6 py-3\",\n                                        children: \"Author Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\blogLists\\\\page.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \" px-6 py-3\",\n                                        children: \"Blog Title\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\blogLists\\\\page.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \" px-6 py-3\",\n                                        children: \"Date\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\blogLists\\\\page.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"px-6 py-3\",\n                                        children: \"Action\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\blogLists\\\\page.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\blogLists\\\\page.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\blogLists\\\\page.js\",\n                            lineNumber: 29,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: blogs.map((item, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_adminComponents_blogTableItems__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    mongoId: item._id,\n                                    title: item.title,\n                                    author: item.author,\n                                    authorImg: item.authorImg,\n                                    data: item.date\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\blogLists\\\\page.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 24\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\blogLists\\\\page.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\blogLists\\\\page.js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\blogLists\\\\page.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\blogLists\\\\page.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"RDzdeLKEs49XKHWpCIuOQAADm3U=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9ibG9nTGlzdHMvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN5QjtBQUMrQztBQUM3QjtBQUNsQjtBQUl6QixNQUFNSyxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJDLE1BQU1NLGFBQWE7UUFDbEIsTUFBTUMsV0FBVyxNQUFNTCw2Q0FBS0EsQ0FBQ00sR0FBRyxDQUFDO1FBQ2hDSCxTQUFTRSxTQUFTRSxJQUFJLENBQUNMLEtBQUs7SUFDOUI7SUFDQSxNQUFNTSxhQUFhLE9BQU9DO1FBQ3hCLE1BQU1KLFdBQVcsTUFBTUwsNkNBQUtBLENBQUNVLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDcEQ7SUFFQVgsZ0RBQVNBLENBQUM7UUFDVEs7SUFDRCxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNGO2dCQUFJQyxXQUFVOzBCQUNmLDRFQUFDRTtvQkFBTUYsV0FBVTs7c0NBQ2YsOERBQUNHOzRCQUFNSCxXQUFVO3NDQUNmLDRFQUFDSTs7a0RBQ0MsOERBQUNDO3dDQUFHQyxPQUFNO3dDQUFNTixXQUFVO2tEQUE0Qjs7Ozs7O2tEQUd0RCw4REFBQ0s7d0NBQUdDLE9BQU07d0NBQU1OLFdBQVU7a0RBQWE7Ozs7OztrREFHdkMsOERBQUNLO3dDQUFHQyxPQUFNO3dDQUFNTixXQUFVO2tEQUFhOzs7Ozs7a0RBR3ZDLDhEQUFDSzt3Q0FBR0MsT0FBTTt3Q0FBTU4sV0FBVTtrREFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBS3hDLDhEQUFDTztzQ0FFRWpCLE1BQU1rQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7Z0NBQ2QscUJBQU8sOERBQUN6QixrRkFBY0E7b0NBQWFZLFNBQVNZLEtBQUtFLEdBQUc7b0NBQUVDLE9BQU9ILEtBQUtHLEtBQUs7b0NBQUVDLFFBQVFKLEtBQUtJLE1BQU07b0NBQUVDLFdBQVdMLEtBQUtLLFNBQVM7b0NBQUVuQixNQUFNYyxLQUFLTSxJQUFJO21DQUE1R0w7Ozs7OzRCQUNoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRWjtHQWhETXJCO0FBa0ROLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hZG1pbi9ibG9nTGlzdHMvcGFnZS5qcz84MDBmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJsb2dUYWJsZUl0ZW1zIGZyb20gJ0AvY29tcG9uZW50cy9hZG1pbkNvbXBvbmVudHMvYmxvZ1RhYmxlSXRlbXMnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuXHJcblxyXG5jb25zdCBwYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtibG9ncywgc2V0QmxvZ3NdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIGNvbnN0IGZldGNoQmxvZ3MgPSBhc3luYyAoKT0+e1xyXG4gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvYmxvZ1wiKVxyXG4gICAgc2V0QmxvZ3MocmVzcG9uc2UuZGF0YS5ibG9ncylcclxuICB9XHJcbiAgY29uc3QgZGVsZXRlQmxvZyA9IGFzeW5jIChtb25nb0lkKT0+e1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5kZWxldGUoXCIvYXBpL2Jsb2dcIiwge30pXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICBmZXRjaEJsb2dzKClcclxuICB9LCBbXSlcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9JyBmbGV4LTEgcHQtNSBweC01IHNtOnB0LTEyIHNtOnBsLTE2Jz5cclxuICAgICAgPGgxPkFsbCBCbG9nczwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBoLVstODB2aF0gbWF4LXdbLTg1MHB4XSBvdmVyZmxvdy1hdXRvIG10LTQgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBzY3JvbGxiYXItaGlkZSc+XHJcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9JyB3LWZ1bGwgdGV4dC1zbSB0ZXh0LWdyYXktNTAwJz5cclxuICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQtZ3JheS03MDAgdGV4dC1sZWZ0IHVwcGVyY2FzZSBiZy1ncmF5LTUwJz5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPSdjb2wnIGNsYXNzTmFtZT0naGlkZGVuIHNtOmJsb2NrIHB4LTYgcHktMyc+XHJcbiAgICAgICAgICAgICAgQXV0aG9yIE5hbWVcclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPSdjb2wnIGNsYXNzTmFtZT0nIHB4LTYgcHktMyc+XHJcbiAgICAgICAgICAgICAgQmxvZyBUaXRsZVxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8dGggc2NvcGU9J2NvbCcgY2xhc3NOYW1lPScgcHgtNiBweS0zJz5cclxuICAgICAgICAgICAgIERhdGVcclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPSdjb2wnIGNsYXNzTmFtZT0ncHgtNiBweS0zJz5cclxuICAgICAgICAgICAgICBBY3Rpb25cclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuXHJcbiAgICAgICAgICAgIHtibG9ncy5tYXAoKGl0ZW0sIGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxCbG9nVGFibGVJdGVtcyBrZXk9e2luZGV4fSBtb25nb0lkPXtpdGVtLl9pZH0gdGl0bGU9e2l0ZW0udGl0bGV9IGF1dGhvcj17aXRlbS5hdXRob3J9IGF1dGhvckltZz17aXRlbS5hdXRob3JJbWd9IGRhdGE9e2l0ZW0uZGF0ZX0vPlxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2UiXSwibmFtZXMiOlsiUmVhY3QiLCJCbG9nVGFibGVJdGVtcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJwYWdlIiwiYmxvZ3MiLCJzZXRCbG9ncyIsImZldGNoQmxvZ3MiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJkZWxldGVCbG9nIiwibW9uZ29JZCIsImRlbGV0ZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJzY29wZSIsInRib2R5IiwibWFwIiwiaXRlbSIsImluZGV4IiwiX2lkIiwidGl0bGUiLCJhdXRob3IiLCJhdXRob3JJbWciLCJkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/blogLists/page.js\n"));

/***/ })

});