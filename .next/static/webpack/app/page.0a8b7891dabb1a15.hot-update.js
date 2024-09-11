"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/blogItem.js":
/*!********************************!*\
  !*** ./components/blogItem.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Assets_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Assets/assets */ \"(app-pages-browser)/./Assets/assets.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n\n\n\n\n\nconst blogItem = (param)=>{\n    let { title, description, category, image, id } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" max-w-[-330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                href: \"/blogs/\".concat(id),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: image,\n                    alt: \"\",\n                    width: 400,\n                    height: 400,\n                    className: \"border-b border-black\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogItem.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogItem.js\",\n                lineNumber: 10,\n                columnNumber: 8\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"ml-5 mt-5 px-1 inline-block bg-black text-white text-sm\",\n                children: category\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogItem.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \" mb-2 text-lg font-medium tracking-tight text-gray-900\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogItem.js\",\n                        lineNumber: 15,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" mb-3 text-sm tracking-tight text-gray-700\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogItem.js\",\n                        lineNumber: 16,\n                        columnNumber: 4\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" inline-flex items-center py-2 font-semibold text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            href: \"/blogs/\".concat(id),\n                            children: [\n                                \"Read more \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.f,\n                                    alt: \"\",\n                                    width: 12,\n                                    className: \" ml-2\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogItem.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogItem.js\",\n                            lineNumber: 19,\n                            columnNumber: 5\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogItem.js\",\n                        lineNumber: 17,\n                        columnNumber: 4\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogItem.js\",\n                        lineNumber: 23,\n                        columnNumber: 4\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogItem.js\",\n                lineNumber: 14,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogItem.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (blogItem);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYmxvZ0l0ZW0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDckI7QUFDTDtBQUNHO0FBRzVCLE1BQU1LLFdBQVc7UUFBQyxFQUFDQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLEVBQUUsRUFBQztJQUN6RCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1osOERBQUNSLGlEQUFJQTtnQkFBQ1MsTUFBTSxVQUFhLE9BQUhIOzBCQUNyQiw0RUFBQ1Isa0RBQUtBO29CQUFDWSxLQUFLTDtvQkFBT00sS0FBSTtvQkFBR0MsT0FBTztvQkFBS0MsUUFBUTtvQkFBS0wsV0FBVTs7Ozs7Ozs7Ozs7MEJBRS9ELDhEQUFDTTtnQkFBRU4sV0FBVTswQkFBMkRKOzs7Ozs7MEJBQzNFLDhEQUFDRztnQkFBSUMsV0FBVTs7a0NBQ2QsOERBQUNPO3dCQUFHUCxXQUFVO2tDQUEwRE47Ozs7OztrQ0FDekUsOERBQUNZO3dCQUFFTixXQUFVO2tDQUE4Q0w7Ozs7OztrQ0FDM0QsOERBQUNJO3dCQUFJQyxXQUFVO2tDQUVkLDRFQUFDUixpREFBSUE7NEJBQUNTLE1BQU0sVUFBYSxPQUFISDs7Z0NBQU07OENBQ2xCLDhEQUFDUixrREFBS0E7b0NBQUNZLEtBQUtkLGtEQUFNQSxDQUFDb0IsQ0FBQztvQ0FBRUwsS0FBSTtvQ0FBR0MsT0FBTztvQ0FBSUosV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRzdELDhEQUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTSjtBQUVBLCtEQUFlTixRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYmxvZ0l0ZW0uanM/MjlmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhc3NldHMsIGJsb2dfZGF0YSB9IGZyb20gJ0AvQXNzZXRzL2Fzc2V0cydcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuXHJcbmNvbnN0IGJsb2dJdGVtID0gKHt0aXRsZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZSwgaWR9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPScgbWF4LXctWy0zMzBweF0gc206bWF4LXctWzMwMHB4XSBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWJsYWNrIGhvdmVyOnNoYWRvdy1bLTdweF83cHhfMHB4XyMwMDAwMDBdJz5cclxuICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZ3MvJHtpZH1gfT5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PVwiXCIgd2lkdGg9ezQwMH0gaGVpZ2h0PXs0MDB9IGNsYXNzTmFtZT0nYm9yZGVyLWIgYm9yZGVyLWJsYWNrJy8+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8cCBjbGFzc05hbWU9J21sLTUgbXQtNSBweC0xIGlubGluZS1ibG9jayBiZy1ibGFjayB0ZXh0LXdoaXRlIHRleHQtc20nPntjYXRlZ29yeX08L3A+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPScgcC01Jz5cclxuICAgIDxoNSBjbGFzc05hbWU9JyBtYi0yIHRleHQtbGcgZm9udC1tZWRpdW0gdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCc+e3RpdGxlfTwvaDU+XHJcbiAgIDxwIGNsYXNzTmFtZT0nIG1iLTMgdGV4dC1zbSB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktNzAwJz57ZGVzY3JpcHRpb259PC9wPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweS0yIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXInPlxyXG4gICAgXHJcbiAgICA8TGluayBocmVmPXtgL2Jsb2dzLyR7aWR9YH0+XHJcbiAgICBSZWFkIG1vcmUgPEltYWdlIHNyYz17YXNzZXRzLmZ9IGFsdD0nJyB3aWR0aD17MTJ9IGNsYXNzTmFtZT0nIG1sLTInLz5cclxuICAgIDwvTGluaz5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXY+XHJcblxyXG4gICA8L2Rpdj5cclxuICAgXHJcbiAgIFxyXG4gICA8L2Rpdj5cclxuICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJsb2dJdGVtIl0sIm5hbWVzIjpbImFzc2V0cyIsImJsb2dfZGF0YSIsIkltYWdlIiwiUmVhY3QiLCJMaW5rIiwiYmxvZ0l0ZW0iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicCIsImg1IiwiZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/blogItem.js\n"));

/***/ })

});