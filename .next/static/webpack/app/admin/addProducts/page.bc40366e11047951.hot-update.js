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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Assets_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Assets/assets */ \"(app-pages-browser)/./Assets/assets.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst page = ()=>{\n    _s();\n    const [upload, setU] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        title: \"\",\n        description: \"\",\n        category: \"startup\",\n        author: \"Ade\",\n        authorImg: \"/aut.jpg\"\n    });\n    const onChangeHandler = (event)=>{\n        const name = event.target.name;\n        const value = event.target.value;\n        setData((data)=>({\n                ...data,\n                [name]: value\n            }));\n        console.log(data);\n    };\n    const onSubmitHandler = async (e)=>{\n        e.preventDefault();\n        const formData = new FormData();\n        formData.append(\"title\", data.title);\n        formData.append(\"description\", data.description);\n        formData.append(\"category\", data.category);\n        formData.append(\"author\", data.author);\n        formData.append(\"authorImg\", data.authorImg);\n        formData.append(\"image\", upload);\n        const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"/api/blog\", formData);\n        if (response.data.success) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(response.data.msg);\n        // TO RESET AFTER POSTING\n        // setImage(false)\n        // setData({\n        //   title:\"\",\n        //   description:\"\",\n        //   category:\"startup\",\n        //   author:\"Ade\",\n        //   authorImg:\"/aut.jpg\"\n        // })\n        } else {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"error\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: onSubmitHandler,\n            className: \" pt-5 px-5 sm:pt-12 sm:pl-16\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl\",\n                    children: \"Upload thumbnail\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 61,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"image\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \" mt-4\",\n                        src: !image ? _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.thumbnail : URL.createObjectURL(image),\n                        width: 140,\n                        height: 70,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                        lineNumber: 63,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 62,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: (e)=>setImage(e.target.files[0]),\n                    type: \"file\",\n                    id: \"image\",\n                    hidden: true,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 65,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl mt-4\",\n                    children: \"Blog Title\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    name: \"title\",\n                    onChange: onChangeHandler,\n                    value: data.title,\n                    className: \" w-full sm:w-[-500px] mt-4 px-4 py-3 border\",\n                    type: \"text\",\n                    placeholder: \"Type here\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl mt-4\",\n                    children: \"Blog Description\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    name: \"description\",\n                    onChange: onChangeHandler,\n                    value: data.description,\n                    className: \" w-full sm:w-[-500px] mt-4 px-4 py-3 border\",\n                    type: \"text\",\n                    placeholder: \"write content here\",\n                    rows: 6,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl mt-4\",\n                    children: \"Blog category\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    name: \"category\",\n                    onChange: onChangeHandler,\n                    value: data.category,\n                    className: \" w-40 mt-4 px-4 py-3 border text-gray-500\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"Startup\",\n                            children: \"Startup\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"Technology\",\n                            children: \"Technolgy\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"Lifestyle\",\n                            children: \"Lifestyle\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \" mt8 w-40 h-12 bg-black text-white\",\n                    type: \" submit\",\n                    children: \"Add\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n            lineNumber: 60,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(page, \"7lycwGij/qIlwjRJ+OrZyiN4MYA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9hZGRQcm9kdWN0cy9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRXdDO0FBQ2Q7QUFDSTtBQUNKO0FBQ087QUFDcUI7QUFDUDtBQUc5QyxNQUFNTyxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsUUFBUUMsS0FBSyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNoQyxNQUFNLENBQUNNLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7UUFDaENRLE9BQU07UUFDTkMsYUFBWTtRQUNaQyxVQUFTO1FBQ1RDLFFBQU87UUFDUEMsV0FBVTtJQUNYO0lBQ0EsTUFBTUMsa0JBQWtCLENBQUNDO1FBQ3RCLE1BQU1DLE9BQU9ELE1BQU1FLE1BQU0sQ0FBQ0QsSUFBSTtRQUM5QixNQUFNRSxRQUFRSCxNQUFNRSxNQUFNLENBQUNDLEtBQUs7UUFDaENWLFFBQVFELENBQUFBLE9BQU87Z0JBQUMsR0FBR0EsSUFBSTtnQkFBRSxDQUFDUyxLQUFLLEVBQUVFO1lBQUs7UUFDdENDLFFBQVFDLEdBQUcsQ0FBQ2I7SUFFZjtJQUNBLE1BQU1jLGtCQUFrQixPQUFPQztRQUM1QkEsRUFBRUMsY0FBYztRQUVoQixNQUFNQyxXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxNQUFNLENBQUMsU0FBU25CLEtBQUtFLEtBQUs7UUFDbkNlLFNBQVNFLE1BQU0sQ0FBQyxlQUFlbkIsS0FBS0csV0FBVztRQUMvQ2MsU0FBU0UsTUFBTSxDQUFDLFlBQVluQixLQUFLSSxRQUFRO1FBQ3pDYSxTQUFTRSxNQUFNLENBQUMsVUFBVW5CLEtBQUtLLE1BQU07UUFDckNZLFNBQVNFLE1BQU0sQ0FBQyxhQUFhbkIsS0FBS00sU0FBUztRQUMzQ1csU0FBU0UsTUFBTSxDQUFDLFNBQVFyQjtRQUV4QixNQUFNc0IsV0FBVyxNQUFNN0IsNkNBQUtBLENBQUM4QixJQUFJLENBQUMsYUFBYUo7UUFDOUMsSUFBR0csU0FBU3BCLElBQUksQ0FBQ3NCLE9BQU8sRUFBQztZQUN4QjFCLGlEQUFLQSxDQUFDMEIsT0FBTyxDQUFDRixTQUFTcEIsSUFBSSxDQUFDdUIsR0FBRztRQUUvQix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4QixrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLEtBQUs7UUFDVCxPQUNJO1lBQ0YzQixpREFBS0EsQ0FBQzRCLEtBQUssQ0FBQztRQUNkO0lBRUM7SUFDSCxxQkFDRTtrQkFDQSw0RUFBQ0M7WUFBS0MsVUFBVVo7WUFBaUJhLFdBQVU7OzhCQUN6Qyw4REFBQ0M7b0JBQUVELFdBQVU7OEJBQVc7Ozs7Ozs4QkFDeEIsOERBQUNFO29CQUFNQyxTQUFROzhCQUNmLDRFQUFDdEMsa0RBQUtBO3dCQUFDbUMsV0FBVTt3QkFBUUksS0FBSyxDQUFDQyxRQUFPMUMsa0RBQU1BLENBQUMyQyxTQUFTLEdBQUVDLElBQUlDLGVBQWUsQ0FBQ0g7d0JBQVFJLE9BQU87d0JBQUtDLFFBQVE7d0JBQUlDLEtBQUk7Ozs7Ozs7Ozs7OzhCQUVoSCw4REFBQ0M7b0JBQU1DLFVBQVUsQ0FBQ3pCLElBQUkwQixTQUFTMUIsRUFBRUwsTUFBTSxDQUFDZ0MsS0FBSyxDQUFDLEVBQUU7b0JBQUdDLE1BQUs7b0JBQU9DLElBQUc7b0JBQVFDLE1BQU07b0JBQUNDLFFBQVE7Ozs7Ozs4QkFDdkYsOERBQUNsQjtvQkFBRUQsV0FBVTs4QkFBZ0I7Ozs7Ozs4QkFDN0IsOERBQUNZO29CQUFNOUIsTUFBSztvQkFBUStCLFVBQVVqQztvQkFBaUJJLE9BQU9YLEtBQUtFLEtBQUs7b0JBQUV5QixXQUFVO29CQUE4Q2dCLE1BQUs7b0JBQU9JLGFBQVk7b0JBQVlELFFBQVE7Ozs7Ozs4QkFDdEssOERBQUNsQjtvQkFBRUQsV0FBVTs4QkFBZ0I7Ozs7Ozs4QkFDN0IsOERBQUNxQjtvQkFBU3ZDLE1BQUs7b0JBQWMrQixVQUFVakM7b0JBQWlCSSxPQUFPWCxLQUFLRyxXQUFXO29CQUFFd0IsV0FBVTtvQkFBOENnQixNQUFLO29CQUFPSSxhQUFZO29CQUFxQkUsTUFBTTtvQkFBR0gsUUFBUTs7Ozs7OzhCQUN2TSw4REFBQ2xCO29CQUFFRCxXQUFVOzhCQUFnQjs7Ozs7OzhCQUM3Qiw4REFBQ3VCO29CQUFPekMsTUFBSztvQkFBVytCLFVBQVVqQztvQkFBaUJJLE9BQU9YLEtBQUtJLFFBQVE7b0JBQUV1QixXQUFVOztzQ0FDakYsOERBQUN3Qjs0QkFBT3hDLE9BQU07c0NBQVU7Ozs7OztzQ0FDeEIsOERBQUN3Qzs0QkFBT3hDLE9BQU07c0NBQWE7Ozs7OztzQ0FDM0IsOERBQUN3Qzs0QkFBT3hDLE9BQU07c0NBQVk7Ozs7Ozs7Ozs7Ozs4QkFFNUIsOERBQUN5QztvQkFBT3pCLFdBQVU7b0JBQXFDZ0IsTUFBSzs4QkFBVTs7Ozs7Ozs7Ozs7OztBQUs5RTtHQXJFTzlDO0FBc0VQLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hZG1pbi9hZGRQcm9kdWN0cy9wYWdlLmpzPzRkYjAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IGFzc2V0cyB9IGZyb20gJ0AvQXNzZXRzL2Fzc2V0cydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3R9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuXHJcblxyXG4gY29uc3QgcGFnZSA9ICgpID0+IHtcclxuICAgY29uc3QgW3VwbG9hZCwgc2V0VV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIHRpdGxlOlwiXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIlwiLFxyXG4gICAgY2F0ZWdvcnk6XCJzdGFydHVwXCIsXHJcbiAgICBhdXRob3I6XCJBZGVcIixcclxuICAgIGF1dGhvckltZzpcIi9hdXQuanBnXCJcclxuICAgfSlcclxuICAgY29uc3Qgb25DaGFuZ2VIYW5kbGVyID0gKGV2ZW50KT0+e1xyXG4gICAgICBjb25zdCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWVcclxuICAgICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgIHNldERhdGEoZGF0YT0+KHsuLi5kYXRhLCBbbmFtZV06IHZhbHVlfSkpXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBcclxuICAgfVxyXG4gICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSBhc3luYyAoZSk9PntcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RpdGxlJywgZGF0YS50aXRsZSk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGVzY3JpcHRpb24nLCBkYXRhLmRlc2NyaXB0aW9uKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdjYXRlZ29yeScsIGRhdGEuY2F0ZWdvcnkpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2F1dGhvcicsIGRhdGEuYXV0aG9yKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdhdXRob3JJbWcnLCBkYXRhLmF1dGhvckltZyk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLHVwbG9hZCk7XHJcbiAgICAgICBcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2Jsb2cnLCBmb3JtRGF0YSkgXHJcbiAgICAgICBpZihyZXNwb25zZS5kYXRhLnN1Y2Nlc3Mpe1xyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MocmVzcG9uc2UuZGF0YS5tc2cpXHJcbiAgICAgICBcclxuICAgICAgICAvLyBUTyBSRVNFVCBBRlRFUiBQT1NUSU5HXHJcbiAgICAgICAgLy8gc2V0SW1hZ2UoZmFsc2UpXHJcbiAgICAgICAgLy8gc2V0RGF0YSh7XHJcbiAgICAgICAgLy8gICB0aXRsZTpcIlwiLFxyXG4gICAgICAgIC8vICAgZGVzY3JpcHRpb246XCJcIixcclxuICAgICAgICAvLyAgIGNhdGVnb3J5Olwic3RhcnR1cFwiLFxyXG4gICAgICAgIC8vICAgYXV0aG9yOlwiQWRlXCIsXHJcbiAgICAgICAgLy8gICBhdXRob3JJbWc6XCIvYXV0LmpwZ1wiXHJcbiAgICAgICAgLy8gfSlcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHRvYXN0LmVycm9yKFwiZXJyb3JcIilcclxuICAgIH1cclxuICAgIFxyXG4gICAgIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdEhhbmRsZXJ9IGNsYXNzTmFtZT0nIHB0LTUgcHgtNSBzbTpwdC0xMiBzbTpwbC0xNic+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT0nIHRleHQteGwnPlVwbG9hZCB0aHVtYm5haWw8L3A+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPSdpbWFnZSc+XHJcbiAgICAgIDxJbWFnZSBjbGFzc05hbWU9JyBtdC00JyBzcmM9eyFpbWFnZT8gYXNzZXRzLnRodW1ibmFpbDogVVJMLmNyZWF0ZU9iamVjdFVSTChpbWFnZSl9IHdpZHRoPXsxNDB9IGhlaWdodD17NzB9IGFsdD0nJy8+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpPT5zZXRJbWFnZShlLnRhcmdldC5maWxlc1swXSl9IHR5cGU9J2ZpbGUnIGlkPSdpbWFnZScgaGlkZGVuIHJlcXVpcmVkLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9JyB0ZXh0LXhsIG10LTQnPkJsb2cgVGl0bGU8L3A+XHJcbiAgICAgICAgPGlucHV0IG5hbWU9J3RpdGxlJyBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfSB2YWx1ZT17ZGF0YS50aXRsZX0gY2xhc3NOYW1lPScgdy1mdWxsIHNtOnctWy01MDBweF0gbXQtNCBweC00IHB5LTMgYm9yZGVyJyB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nVHlwZSBoZXJlJyByZXF1aXJlZC8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPScgdGV4dC14bCBtdC00Jz5CbG9nIERlc2NyaXB0aW9uPC9wPlxyXG4gICAgICAgIDx0ZXh0YXJlYSBuYW1lPSdkZXNjcmlwdGlvbicgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0gdmFsdWU9e2RhdGEuZGVzY3JpcHRpb259IGNsYXNzTmFtZT0nIHctZnVsbCBzbTp3LVstNTAwcHhdIG10LTQgcHgtNCBweS0zIGJvcmRlcicgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J3dyaXRlIGNvbnRlbnQgaGVyZScgcm93cz17Nn0gcmVxdWlyZWQvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nIHRleHQteGwgbXQtNCc+QmxvZyBjYXRlZ29yeTwvcD5cclxuICAgICAgICA8c2VsZWN0IG5hbWU9J2NhdGVnb3J5JyBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfSB2YWx1ZT17ZGF0YS5jYXRlZ29yeX0gY2xhc3NOYW1lPScgdy00MCBtdC00IHB4LTQgcHktMyBib3JkZXIgdGV4dC1ncmF5LTUwMCc+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3RhcnR1cFwiPlN0YXJ0dXA8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUZWNobm9sb2d5XCI+VGVjaG5vbGd5PC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTGlmZXN0eWxlXCI+TGlmZXN0eWxlPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9JyBtdDggdy00MCBoLTEyIGJnLWJsYWNrIHRleHQtd2hpdGUnIHR5cGU9JyBzdWJtaXQnPkFkZDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBwYWdlIl0sIm5hbWVzIjpbImFzc2V0cyIsImF4aW9zIiwiSW1hZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsInBhZ2UiLCJ1cGxvYWQiLCJzZXRVIiwiZGF0YSIsInNldERhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJhdXRob3IiLCJhdXRob3JJbWciLCJvbkNoYW5nZUhhbmRsZXIiLCJldmVudCIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJvblN1Ym1pdEhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVzcG9uc2UiLCJwb3N0Iiwic3VjY2VzcyIsIm1zZyIsImVycm9yIiwiZm9ybSIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwicCIsImxhYmVsIiwiaHRtbEZvciIsInNyYyIsImltYWdlIiwidGh1bWJuYWlsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJpbnB1dCIsIm9uQ2hhbmdlIiwic2V0SW1hZ2UiLCJmaWxlcyIsInR5cGUiLCJpZCIsImhpZGRlbiIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJ0ZXh0YXJlYSIsInJvd3MiLCJzZWxlY3QiLCJvcHRpb24iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/addProducts/page.js\n"));

/***/ })

});