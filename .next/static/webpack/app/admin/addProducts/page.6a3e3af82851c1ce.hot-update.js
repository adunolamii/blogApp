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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Assets_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Assets/assets */ \"(app-pages-browser)/./Assets/assets.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst page = ()=>{\n    _s();\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        title: \"\",\n        description: \"\",\n        category: \"startup\",\n        author: \"AdeAdunola\",\n        authorImg: \"/author_img.jpg\"\n    });\n    const onChangeHandler = (event)=>{\n        const name = event.target.name;\n        const value = event.target.value;\n        setData((data)=>({\n                ...data,\n                [name]: value\n            }));\n        console.log(data);\n    };\n    const onSubmitHandler = async (e)=>{\n        e.preventDefault();\n        const formData = new FormData();\n        formData.append(\"title\", data.title);\n        formData.append(\"description\", data.description);\n        formData.append(\"category\", data.category);\n        formData.append(\"author\", data.author);\n        formData.append(\"authorImg\", data.authorImg);\n        formData.append(\"image\", image);\n        const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"/api/blog\", formData);\n        if (response.data.success) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(response.data.msg);\n        // TO RESET AFTER POSTING\n        // setImage(false)\n        // setData({\n        //   title:\"\",\n        //   description:\"\",\n        //   category:\"startup\",\n        //   author:\"Ade\",\n        //   authorImg:\"/aut.jpg\"\n        // })\n        } else {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"error\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: onSubmitHandler,\n            className: \" pt-5 px-5 sm:pt-12 sm:pl-16\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl\",\n                    children: \"Upload thumbnail\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 61,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"image\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"mt-4\",\n                        src: _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 62,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: (e)=>setImage(e.target.files[0]),\n                    type: \"file\",\n                    id: \"image\",\n                    hidden: true,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 65,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl mt-4\",\n                    children: \"Blog Title\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    name: \"title\",\n                    onChange: onChangeHandler,\n                    value: data.title,\n                    className: \" w-full sm:w-[-500px] mt-4 px-4 py-3 border\",\n                    type: \"text\",\n                    placeholder: \"Type here\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl mt-4\",\n                    children: \"Blog Description\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    name: \"description\",\n                    onChange: onChangeHandler,\n                    value: data.description,\n                    className: \" w-full sm:w-[-500px] mt-4 px-4 py-3 border\",\n                    type: \"text\",\n                    placeholder: \"write content here\",\n                    rows: 6,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl mt-4\",\n                    children: \"Blog category\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    name: \"category\",\n                    onChange: onChangeHandler,\n                    value: data.category,\n                    className: \" w-40 mt-4 px-4 py-3 border text-gray-500\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"Startup\",\n                            children: \"Startup\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"Technology\",\n                            children: \"Technolgy\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"Lifestyle\",\n                            children: \"Lifestyle\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \" mt8 w-40 h-12 bg-black text-white\",\n                    type: \" submit\",\n                    children: \"Add\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n            lineNumber: 60,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(page, \"hFW7qw9V9V6wBkPNhfMDVN///Ww=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9hZGRQcm9kdWN0cy9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRXdDO0FBQ2Q7QUFDSTtBQUNKO0FBQ087QUFDcUI7QUFDUDtBQUc5QyxNQUFNTyxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7UUFDaENRLE9BQU07UUFDTkMsYUFBWTtRQUNaQyxVQUFTO1FBQ1RDLFFBQU87UUFDUEMsV0FBVTtJQUNYO0lBQ0EsTUFBTUMsa0JBQWtCLENBQUNDO1FBQ3RCLE1BQU1DLE9BQU9ELE1BQU1FLE1BQU0sQ0FBQ0QsSUFBSTtRQUM5QixNQUFNRSxRQUFRSCxNQUFNRSxNQUFNLENBQUNDLEtBQUs7UUFDaENWLFFBQVFELENBQUFBLE9BQU87Z0JBQUMsR0FBR0EsSUFBSTtnQkFBRSxDQUFDUyxLQUFLLEVBQUVFO1lBQUs7UUFDdENDLFFBQVFDLEdBQUcsQ0FBQ2I7SUFFZjtJQUNBLE1BQU1jLGtCQUFrQixPQUFPQztRQUM1QkEsRUFBRUMsY0FBYztRQUVoQixNQUFNQyxXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxNQUFNLENBQUMsU0FBU25CLEtBQUtFLEtBQUs7UUFDbkNlLFNBQVNFLE1BQU0sQ0FBQyxlQUFlbkIsS0FBS0csV0FBVztRQUMvQ2MsU0FBU0UsTUFBTSxDQUFDLFlBQVluQixLQUFLSSxRQUFRO1FBQ3pDYSxTQUFTRSxNQUFNLENBQUMsVUFBVW5CLEtBQUtLLE1BQU07UUFDckNZLFNBQVNFLE1BQU0sQ0FBQyxhQUFhbkIsS0FBS00sU0FBUztRQUMzQ1csU0FBU0UsTUFBTSxDQUFDLFNBQVFyQjtRQUV4QixNQUFNc0IsV0FBVyxNQUFNN0IsNkNBQUtBLENBQUM4QixJQUFJLENBQUMsYUFBYUo7UUFDOUMsSUFBR0csU0FBU3BCLElBQUksQ0FBQ3NCLE9BQU8sRUFBQztZQUN4QjFCLGlEQUFLQSxDQUFDMEIsT0FBTyxDQUFDRixTQUFTcEIsSUFBSSxDQUFDdUIsR0FBRztRQUUvQix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4QixrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLEtBQUs7UUFDVCxPQUNJO1lBQ0YzQixpREFBS0EsQ0FBQzRCLEtBQUssQ0FBQztRQUNkO0lBRUM7SUFDSCxxQkFDRTtrQkFDQSw0RUFBQ0M7WUFBS0MsVUFBVVo7WUFBaUJhLFdBQVU7OzhCQUN6Qyw4REFBQ0M7b0JBQUVELFdBQVU7OEJBQVc7Ozs7Ozs4QkFDeEIsOERBQUNFO29CQUFNQyxTQUFROzhCQUNiLDRFQUFDdEMsa0RBQUtBO3dCQUFDbUMsV0FBVTt3QkFBT0ksS0FBS3pDLGtEQUFNQTs7Ozs7Ozs7Ozs7OEJBRXJDLDhEQUFDMEM7b0JBQU1DLFVBQVUsQ0FBQ2xCLElBQUloQixTQUFTZ0IsRUFBRUwsTUFBTSxDQUFDd0IsS0FBSyxDQUFDLEVBQUU7b0JBQUdDLE1BQUs7b0JBQU9DLElBQUc7b0JBQVFDLE1BQU07b0JBQUNDLFFBQVE7Ozs7Ozs4QkFDdkYsOERBQUNWO29CQUFFRCxXQUFVOzhCQUFnQjs7Ozs7OzhCQUM3Qiw4REFBQ0s7b0JBQU12QixNQUFLO29CQUFRd0IsVUFBVTFCO29CQUFpQkksT0FBT1gsS0FBS0UsS0FBSztvQkFBRXlCLFdBQVU7b0JBQThDUSxNQUFLO29CQUFPSSxhQUFZO29CQUFZRCxRQUFROzs7Ozs7OEJBQ3RLLDhEQUFDVjtvQkFBRUQsV0FBVTs4QkFBZ0I7Ozs7Ozs4QkFDN0IsOERBQUNhO29CQUFTL0IsTUFBSztvQkFBY3dCLFVBQVUxQjtvQkFBaUJJLE9BQU9YLEtBQUtHLFdBQVc7b0JBQUV3QixXQUFVO29CQUE4Q1EsTUFBSztvQkFBT0ksYUFBWTtvQkFBcUJFLE1BQU07b0JBQUdILFFBQVE7Ozs7Ozs4QkFDdk0sOERBQUNWO29CQUFFRCxXQUFVOzhCQUFnQjs7Ozs7OzhCQUM3Qiw4REFBQ2U7b0JBQU9qQyxNQUFLO29CQUFXd0IsVUFBVTFCO29CQUFpQkksT0FBT1gsS0FBS0ksUUFBUTtvQkFBRXVCLFdBQVU7O3NDQUNqRiw4REFBQ2dCOzRCQUFPaEMsT0FBTTtzQ0FBVTs7Ozs7O3NDQUN4Qiw4REFBQ2dDOzRCQUFPaEMsT0FBTTtzQ0FBYTs7Ozs7O3NDQUMzQiw4REFBQ2dDOzRCQUFPaEMsT0FBTTtzQ0FBWTs7Ozs7Ozs7Ozs7OzhCQUU1Qiw4REFBQ2lDO29CQUFPakIsV0FBVTtvQkFBcUNRLE1BQUs7OEJBQVU7Ozs7Ozs7Ozs7Ozs7QUFLOUU7R0FyRU90QztBQXNFUCwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYWRtaW4vYWRkUHJvZHVjdHMvcGFnZS5qcz80ZGIwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgeyBhc3NldHMgfSBmcm9tICdAL0Fzc2V0cy9hc3NldHMnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0fSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcblxyXG5cclxuIGNvbnN0IHBhZ2UgPSAoKSA9PiB7XHJcbiAgIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB0aXRsZTpcIlwiLFxyXG4gICAgZGVzY3JpcHRpb246XCJcIixcclxuICAgIGNhdGVnb3J5Olwic3RhcnR1cFwiLFxyXG4gICAgYXV0aG9yOlwiQWRlQWR1bm9sYVwiLFxyXG4gICAgYXV0aG9ySW1nOlwiL2F1dGhvcl9pbWcuanBnXCJcclxuICAgfSlcclxuICAgY29uc3Qgb25DaGFuZ2VIYW5kbGVyID0gKGV2ZW50KT0+e1xyXG4gICAgICBjb25zdCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWVcclxuICAgICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgIHNldERhdGEoZGF0YT0+KHsuLi5kYXRhLCBbbmFtZV06IHZhbHVlfSkpXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBcclxuICAgfVxyXG4gICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSBhc3luYyAoZSk9PntcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RpdGxlJywgZGF0YS50aXRsZSk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGVzY3JpcHRpb24nLCBkYXRhLmRlc2NyaXB0aW9uKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdjYXRlZ29yeScsIGRhdGEuY2F0ZWdvcnkpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2F1dGhvcicsIGRhdGEuYXV0aG9yKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdhdXRob3JJbWcnLCBkYXRhLmF1dGhvckltZyk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLGltYWdlKTtcclxuICAgICAgIFxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvYmxvZycsIGZvcm1EYXRhKSBcclxuICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcyl7XHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhyZXNwb25zZS5kYXRhLm1zZylcclxuICAgICAgIFxyXG4gICAgICAgIC8vIFRPIFJFU0VUIEFGVEVSIFBPU1RJTkdcclxuICAgICAgICAvLyBzZXRJbWFnZShmYWxzZSlcclxuICAgICAgICAvLyBzZXREYXRhKHtcclxuICAgICAgICAvLyAgIHRpdGxlOlwiXCIsXHJcbiAgICAgICAgLy8gICBkZXNjcmlwdGlvbjpcIlwiLFxyXG4gICAgICAgIC8vICAgY2F0ZWdvcnk6XCJzdGFydHVwXCIsXHJcbiAgICAgICAgLy8gICBhdXRob3I6XCJBZGVcIixcclxuICAgICAgICAvLyAgIGF1dGhvckltZzpcIi9hdXQuanBnXCJcclxuICAgICAgICAvLyB9KVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgdG9hc3QuZXJyb3IoXCJlcnJvclwiKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0SGFuZGxlcn0gY2xhc3NOYW1lPScgcHQtNSBweC01IHNtOnB0LTEyIHNtOnBsLTE2Jz5cclxuICAgICAgPHAgY2xhc3NOYW1lPScgdGV4dC14bCc+VXBsb2FkIHRodW1ibmFpbDwvcD5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9J2ltYWdlJz5cclxuICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdtdC00JyBzcmM9e2Fzc2V0c30vPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKT0+c2V0SW1hZ2UoZS50YXJnZXQuZmlsZXNbMF0pfSB0eXBlPSdmaWxlJyBpZD0naW1hZ2UnIGhpZGRlbiByZXF1aXJlZC8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPScgdGV4dC14bCBtdC00Jz5CbG9nIFRpdGxlPC9wPlxyXG4gICAgICAgIDxpbnB1dCBuYW1lPSd0aXRsZScgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0gdmFsdWU9e2RhdGEudGl0bGV9IGNsYXNzTmFtZT0nIHctZnVsbCBzbTp3LVstNTAwcHhdIG10LTQgcHgtNCBweS0zIGJvcmRlcicgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1R5cGUgaGVyZScgcmVxdWlyZWQvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nIHRleHQteGwgbXQtNCc+QmxvZyBEZXNjcmlwdGlvbjwvcD5cclxuICAgICAgICA8dGV4dGFyZWEgbmFtZT0nZGVzY3JpcHRpb24nIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9IHZhbHVlPXtkYXRhLmRlc2NyaXB0aW9ufSBjbGFzc05hbWU9JyB3LWZ1bGwgc206dy1bLTUwMHB4XSBtdC00IHB4LTQgcHktMyBib3JkZXInIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSd3cml0ZSBjb250ZW50IGhlcmUnIHJvd3M9ezZ9IHJlcXVpcmVkLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9JyB0ZXh0LXhsIG10LTQnPkJsb2cgY2F0ZWdvcnk8L3A+XHJcbiAgICAgICAgPHNlbGVjdCBuYW1lPSdjYXRlZ29yeScgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0gdmFsdWU9e2RhdGEuY2F0ZWdvcnl9IGNsYXNzTmFtZT0nIHctNDAgbXQtNCBweC00IHB5LTMgYm9yZGVyIHRleHQtZ3JheS01MDAnPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlN0YXJ0dXBcIj5TdGFydHVwPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVGVjaG5vbG9neVwiPlRlY2hub2xneTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxpZmVzdHlsZVwiPkxpZmVzdHlsZTwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPScgbXQ4IHctNDAgaC0xMiBiZy1ibGFjayB0ZXh0LXdoaXRlJyB0eXBlPScgc3VibWl0Jz5BZGQ8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuXHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgcGFnZSJdLCJuYW1lcyI6WyJhc3NldHMiLCJheGlvcyIsIkltYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJwYWdlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImRhdGEiLCJzZXREYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiYXV0aG9yIiwiYXV0aG9ySW1nIiwib25DaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlc3BvbnNlIiwicG9zdCIsInN1Y2Nlc3MiLCJtc2ciLCJlcnJvciIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsInAiLCJsYWJlbCIsImh0bWxGb3IiLCJzcmMiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiZmlsZXMiLCJ0eXBlIiwiaWQiLCJoaWRkZW4iLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJyb3dzIiwic2VsZWN0Iiwib3B0aW9uIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/addProducts/page.js\n"));

/***/ })

});