"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/addProducts/page",{

/***/ "(app-pages-browser)/./app/admin/addProducts/page.js":
/*!***************************************!*\
  !*** ./app/admin/addProducts/page.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Assets_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Assets/assets */ \"(app-pages-browser)/./Assets/assets.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst page = ()=>{\n    _s();\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        title: \"\",\n        description: \"\",\n        category: \"startup\",\n        author: \"Ade\",\n        authorImg: \"/aut.jpg\"\n    });\n    const onChangeHandler = (event)=>{\n        const name = event.target.name;\n        const value = event.target.value;\n        setData((data)=>({\n                ...data,\n                [name]: value\n            }));\n        console.log(data);\n    };\n    const onSubmitHandler = async (e)=>{\n        e.preventDefault();\n        const formData = new FormData();\n        formData.append(\"title\", data.title);\n        formData.append(\"description\", data.description);\n        formData.append(\"category\", data.category);\n        formData.append(\"author\", data.author);\n        formData.append(\"authorImg\", data.authorImg);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: onSubmitHandler,\n            className: \" pt-5 px-5 sm:pt-12 sm:pl-16\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl\",\n                    children: \"Upload thumbnail\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"image\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \" mt-4\",\n                        src: !image ? _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.twitter : URL.createObjectURL(image),\n                        width: 140,\n                        height: 70,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                        lineNumber: 40,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 39,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: (e)=>setImage(e.target.files[0]),\n                    type: \"file\",\n                    id: \"image\",\n                    hidden: true,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl mt-4\",\n                    children: \"Blog Title\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    name: \"title\",\n                    onChange: onChangeHandler,\n                    value: data.title,\n                    className: \" w-full sm:w-[-500px] mt-4 px-4 py-3 border\",\n                    type: \"text\",\n                    placeholder: \"Type here\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl mt-4\",\n                    children: \"Blog Description\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    name: \"description\",\n                    onChange: onChangeHandler,\n                    value: data.description,\n                    className: \" w-full sm:w-[-500px] mt-4 px-4 py-3 border\",\n                    type: \"text\",\n                    placeholder: \"write content here\",\n                    rows: 6,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl mt-4\",\n                    children: \"Blog category\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    name: \"category\",\n                    onChange: onChangeHandler,\n                    value: data.category,\n                    className: \" w-40 mt-4 px-4 py-3 border text-gray-500\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"Startup\",\n                            children: \"Startup\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"Technology\",\n                            children: \"Technolgy\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"Lifestyle\",\n                            children: \"Lifestyle\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \" mt8 w-40 h-12 bg-black text-white\",\n                    type: \" submit\",\n                    children: \"Add\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n            lineNumber: 37,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(page, \"S/TteIyt+gpMdeQZiBZXo4HAMQE=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9hZGRQcm9kdWN0cy9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRXdDO0FBQ1Y7QUFDTDtBQUNPO0FBRS9CLE1BQU1JLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ksTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUNoQ00sT0FBTTtRQUNOQyxhQUFZO1FBQ1pDLFVBQVM7UUFDVEMsUUFBTztRQUNQQyxXQUFVO0lBQ1g7SUFDQSxNQUFNQyxrQkFBa0IsQ0FBQ0M7UUFDdEIsTUFBTUMsT0FBT0QsTUFBTUUsTUFBTSxDQUFDRCxJQUFJO1FBQzlCLE1BQU1FLFFBQVFILE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSztRQUNoQ1YsUUFBUUQsQ0FBQUEsT0FBTztnQkFBQyxHQUFHQSxJQUFJO2dCQUFFLENBQUNTLEtBQUssRUFBRUU7WUFBSztRQUN0Q0MsUUFBUUMsR0FBRyxDQUFDYjtJQUVmO0lBQ0EsTUFBTWMsa0JBQWtCLE9BQU9DO1FBQzVCQSxFQUFFQyxjQUFjO1FBRWhCLE1BQU1DLFdBQVcsSUFBSUM7UUFDckJELFNBQVNFLE1BQU0sQ0FBQyxTQUFTbkIsS0FBS0UsS0FBSztRQUNuQ2UsU0FBU0UsTUFBTSxDQUFDLGVBQWVuQixLQUFLRyxXQUFXO1FBQy9DYyxTQUFTRSxNQUFNLENBQUMsWUFBWW5CLEtBQUtJLFFBQVE7UUFDekNhLFNBQVNFLE1BQU0sQ0FBQyxVQUFVbkIsS0FBS0ssTUFBTTtRQUNyQ1ksU0FBU0UsTUFBTSxDQUFDLGFBQWFuQixLQUFLTSxTQUFTO0lBRTlDO0lBQ0QscUJBQ0U7a0JBQ0EsNEVBQUNjO1lBQUtDLFVBQVVQO1lBQWlCUSxXQUFVOzs4QkFDekMsOERBQUNDO29CQUFFRCxXQUFVOzhCQUFXOzs7Ozs7OEJBQ3hCLDhEQUFDRTtvQkFBTUMsU0FBUTs4QkFDZiw0RUFBQy9CLGtEQUFLQTt3QkFBQzRCLFdBQVU7d0JBQVFJLEtBQUssQ0FBQzVCLFFBQU9MLGtEQUFNQSxDQUFDa0MsT0FBTyxHQUFFQyxJQUFJQyxlQUFlLENBQUMvQjt3QkFBUWdDLE9BQU87d0JBQUtDLFFBQVE7d0JBQUlDLEtBQUk7Ozs7Ozs7Ozs7OzhCQUU5Ryw4REFBQ0M7b0JBQU1DLFVBQVUsQ0FBQ25CLElBQUloQixTQUFTZ0IsRUFBRUwsTUFBTSxDQUFDeUIsS0FBSyxDQUFDLEVBQUU7b0JBQUdDLE1BQUs7b0JBQU9DLElBQUc7b0JBQVFDLE1BQU07b0JBQUNDLFFBQVE7Ozs7Ozs4QkFDdkYsOERBQUNoQjtvQkFBRUQsV0FBVTs4QkFBZ0I7Ozs7Ozs4QkFDN0IsOERBQUNXO29CQUFNeEIsTUFBSztvQkFBUXlCLFVBQVUzQjtvQkFBaUJJLE9BQU9YLEtBQUtFLEtBQUs7b0JBQUVvQixXQUFVO29CQUE4Q2MsTUFBSztvQkFBT0ksYUFBWTtvQkFBWUQsUUFBUTs7Ozs7OzhCQUN0Syw4REFBQ2hCO29CQUFFRCxXQUFVOzhCQUFnQjs7Ozs7OzhCQUM3Qiw4REFBQ21CO29CQUFTaEMsTUFBSztvQkFBY3lCLFVBQVUzQjtvQkFBaUJJLE9BQU9YLEtBQUtHLFdBQVc7b0JBQUVtQixXQUFVO29CQUE4Q2MsTUFBSztvQkFBT0ksYUFBWTtvQkFBcUJFLE1BQU07b0JBQUdILFFBQVE7Ozs7Ozs4QkFDdk0sOERBQUNoQjtvQkFBRUQsV0FBVTs4QkFBZ0I7Ozs7Ozs4QkFDN0IsOERBQUNxQjtvQkFBT2xDLE1BQUs7b0JBQVd5QixVQUFVM0I7b0JBQWlCSSxPQUFPWCxLQUFLSSxRQUFRO29CQUFFa0IsV0FBVTs7c0NBQ2pGLDhEQUFDc0I7NEJBQU9qQyxPQUFNO3NDQUFVOzs7Ozs7c0NBQ3hCLDhEQUFDaUM7NEJBQU9qQyxPQUFNO3NDQUFhOzs7Ozs7c0NBQzNCLDhEQUFDaUM7NEJBQU9qQyxPQUFNO3NDQUFZOzs7Ozs7Ozs7Ozs7OEJBRTVCLDhEQUFDa0M7b0JBQU92QixXQUFVO29CQUFxQ2MsTUFBSzs4QkFBVTs7Ozs7Ozs7Ozs7OztBQUs5RTtHQWxET3ZDO0FBbURQLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hZG1pbi9hZGRQcm9kdWN0cy9wYWdlLmpzPzRkYjAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IGFzc2V0cyB9IGZyb20gJ0AvQXNzZXRzL2Fzc2V0cydcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbiBjb25zdCBwYWdlID0gKCkgPT4ge1xyXG4gICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgdGl0bGU6XCJcIixcclxuICAgIGRlc2NyaXB0aW9uOlwiXCIsXHJcbiAgICBjYXRlZ29yeTpcInN0YXJ0dXBcIixcclxuICAgIGF1dGhvcjpcIkFkZVwiLFxyXG4gICAgYXV0aG9ySW1nOlwiL2F1dC5qcGdcIlxyXG4gICB9KVxyXG4gICBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSAoZXZlbnQpPT57XHJcbiAgICAgIGNvbnN0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZVxyXG4gICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgc2V0RGF0YShkYXRhPT4oey4uLmRhdGEsIFtuYW1lXTogdmFsdWV9KSlcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIFxyXG4gICB9XHJcbiAgIGNvbnN0IG9uU3VibWl0SGFuZGxlciA9IGFzeW5jIChlKT0+e1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgndGl0bGUnLCBkYXRhLnRpdGxlKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdkZXNjcmlwdGlvbicsIGRhdGEuZGVzY3JpcHRpb24pO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NhdGVnb3J5JywgZGF0YS5jYXRlZ29yeSk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYXV0aG9yJywgZGF0YS5hdXRob3IpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2F1dGhvckltZycsIGRhdGEuYXV0aG9ySW1nKTtcclxuICAgICAgXHJcbiAgIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdEhhbmRsZXJ9IGNsYXNzTmFtZT0nIHB0LTUgcHgtNSBzbTpwdC0xMiBzbTpwbC0xNic+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT0nIHRleHQteGwnPlVwbG9hZCB0aHVtYm5haWw8L3A+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPSdpbWFnZSc+XHJcbiAgICAgIDxJbWFnZSBjbGFzc05hbWU9JyBtdC00JyBzcmM9eyFpbWFnZT8gYXNzZXRzLnR3aXR0ZXI6IFVSTC5jcmVhdGVPYmplY3RVUkwoaW1hZ2UpfSB3aWR0aD17MTQwfSBoZWlnaHQ9ezcwfSBhbHQ9JycvPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKT0+c2V0SW1hZ2UoZS50YXJnZXQuZmlsZXNbMF0pfSB0eXBlPSdmaWxlJyBpZD0naW1hZ2UnIGhpZGRlbiByZXF1aXJlZC8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPScgdGV4dC14bCBtdC00Jz5CbG9nIFRpdGxlPC9wPlxyXG4gICAgICAgIDxpbnB1dCBuYW1lPSd0aXRsZScgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0gdmFsdWU9e2RhdGEudGl0bGV9IGNsYXNzTmFtZT0nIHctZnVsbCBzbTp3LVstNTAwcHhdIG10LTQgcHgtNCBweS0zIGJvcmRlcicgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1R5cGUgaGVyZScgcmVxdWlyZWQvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nIHRleHQteGwgbXQtNCc+QmxvZyBEZXNjcmlwdGlvbjwvcD5cclxuICAgICAgICA8dGV4dGFyZWEgbmFtZT0nZGVzY3JpcHRpb24nIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9IHZhbHVlPXtkYXRhLmRlc2NyaXB0aW9ufSBjbGFzc05hbWU9JyB3LWZ1bGwgc206dy1bLTUwMHB4XSBtdC00IHB4LTQgcHktMyBib3JkZXInIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSd3cml0ZSBjb250ZW50IGhlcmUnIHJvd3M9ezZ9IHJlcXVpcmVkLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9JyB0ZXh0LXhsIG10LTQnPkJsb2cgY2F0ZWdvcnk8L3A+XHJcbiAgICAgICAgPHNlbGVjdCBuYW1lPSdjYXRlZ29yeScgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0gdmFsdWU9e2RhdGEuY2F0ZWdvcnl9IGNsYXNzTmFtZT0nIHctNDAgbXQtNCBweC00IHB5LTMgYm9yZGVyIHRleHQtZ3JheS01MDAnPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlN0YXJ0dXBcIj5TdGFydHVwPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVGVjaG5vbG9neVwiPlRlY2hub2xneTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxpZmVzdHlsZVwiPkxpZmVzdHlsZTwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPScgbXQ4IHctNDAgaC0xMiBiZy1ibGFjayB0ZXh0LXdoaXRlJyB0eXBlPScgc3VibWl0Jz5BZGQ8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuXHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgcGFnZSJdLCJuYW1lcyI6WyJhc3NldHMiLCJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJwYWdlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImRhdGEiLCJzZXREYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiYXV0aG9yIiwiYXV0aG9ySW1nIiwib25DaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsInAiLCJsYWJlbCIsImh0bWxGb3IiLCJzcmMiLCJ0d2l0dGVyIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiZmlsZXMiLCJ0eXBlIiwiaWQiLCJoaWRkZW4iLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJyb3dzIiwic2VsZWN0Iiwib3B0aW9uIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/addProducts/page.js\n"));

/***/ })

});