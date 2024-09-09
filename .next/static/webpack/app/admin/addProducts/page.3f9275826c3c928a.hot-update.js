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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Assets_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Assets/assets */ \"(app-pages-browser)/./Assets/assets.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst page = ()=>{\n    _s();\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        title: \"\",\n        description: \"\",\n        category: \"startup\",\n        author: \"Ade\",\n        authorImg: \"/aut.jpg\"\n    });\n    const onChangeHandler = (event)=>{\n        const name = event.target.name;\n        const value = event.target.value;\n        setData((data)=>({\n                ...data,\n                [name]: value\n            }));\n        console.log(data);\n    };\n    const onSubmitHandler = async (e)=>{\n        e.preventDefault();\n        const formData = new FormData();\n        formData.append(\"title\", data.title);\n        formData.append(\"description\", data.description);\n        formData.append(\"category\", data.category);\n        formData.append(\"author\", data.author);\n        formData.append(\"authorImg\", data.authorImg);\n        formData.append(\"image\", data.image);\n        const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/api/blog\", formData);\n        if (response.data.success) {\n            toast.success(response.data.msg);\n        } else {\n            toast.error(\"error\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: onSubmitHandler,\n            className: \" pt-5 px-5 sm:pt-12 sm:pl-16\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl\",\n                    children: \"Upload thumbnail\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 49,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"image\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \" mt-4\",\n                        src: !image ? _Assets_assets__WEBPACK_IMPORTED_MODULE_1__.assets.twitter : URL.createObjectURL(image),\n                        width: 140,\n                        height: 70,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                        lineNumber: 51,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 50,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: (e)=>setImage(e.target.files[0]),\n                    type: \"file\",\n                    id: \"image\",\n                    hidden: true,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 53,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl mt-4\",\n                    children: \"Blog Title\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    name: \"title\",\n                    onChange: onChangeHandler,\n                    value: data.title,\n                    className: \" w-full sm:w-[-500px] mt-4 px-4 py-3 border\",\n                    type: \"text\",\n                    placeholder: \"Type here\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl mt-4\",\n                    children: \"Blog Description\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    name: \"description\",\n                    onChange: onChangeHandler,\n                    value: data.description,\n                    className: \" w-full sm:w-[-500px] mt-4 px-4 py-3 border\",\n                    type: \"text\",\n                    placeholder: \"write content here\",\n                    rows: 6,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-xl mt-4\",\n                    children: \"Blog category\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    name: \"category\",\n                    onChange: onChangeHandler,\n                    value: data.category,\n                    className: \" w-40 mt-4 px-4 py-3 border text-gray-500\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"Startup\",\n                            children: \"Startup\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"Technology\",\n                            children: \"Technolgy\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"Lifestyle\",\n                            children: \"Lifestyle\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \" mt8 w-40 h-12 bg-black text-white\",\n                    type: \" submit\",\n                    children: \"Add\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\admin\\\\addProducts\\\\page.js\",\n            lineNumber: 48,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(page, \"S/TteIyt+gpMdeQZiBZXo4HAMQE=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9hZGRQcm9kdWN0cy9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUV3QztBQUNWO0FBQ0o7QUFDTztBQUNJO0FBR3BDLE1BQU1NLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQztRQUNoQ1EsT0FBTTtRQUNOQyxhQUFZO1FBQ1pDLFVBQVM7UUFDVEMsUUFBTztRQUNQQyxXQUFVO0lBQ1g7SUFDQSxNQUFNQyxrQkFBa0IsQ0FBQ0M7UUFDdEIsTUFBTUMsT0FBT0QsTUFBTUUsTUFBTSxDQUFDRCxJQUFJO1FBQzlCLE1BQU1FLFFBQVFILE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSztRQUNoQ1YsUUFBUUQsQ0FBQUEsT0FBTztnQkFBQyxHQUFHQSxJQUFJO2dCQUFFLENBQUNTLEtBQUssRUFBRUU7WUFBSztRQUN0Q0MsUUFBUUMsR0FBRyxDQUFDYjtJQUVmO0lBQ0EsTUFBTWMsa0JBQWtCLE9BQU9DO1FBQzVCQSxFQUFFQyxjQUFjO1FBRWhCLE1BQU1DLFdBQVcsSUFBSUM7UUFDckJELFNBQVNFLE1BQU0sQ0FBQyxTQUFTbkIsS0FBS0UsS0FBSztRQUNuQ2UsU0FBU0UsTUFBTSxDQUFDLGVBQWVuQixLQUFLRyxXQUFXO1FBQy9DYyxTQUFTRSxNQUFNLENBQUMsWUFBWW5CLEtBQUtJLFFBQVE7UUFDekNhLFNBQVNFLE1BQU0sQ0FBQyxVQUFVbkIsS0FBS0ssTUFBTTtRQUNyQ1ksU0FBU0UsTUFBTSxDQUFDLGFBQWFuQixLQUFLTSxTQUFTO1FBQzNDVyxTQUFTRSxNQUFNLENBQUMsU0FBU25CLEtBQUtGLEtBQUs7UUFDakMsTUFBTXNCLFdBQVcsTUFBTXpCLDZDQUFLQSxDQUFDMEIsSUFBSSxDQUFDLGFBQWFKO1FBQy9DLElBQUdHLFNBQVNwQixJQUFJLENBQUNzQixPQUFPLEVBQUM7WUFDdkJDLE1BQU1ELE9BQU8sQ0FBQ0YsU0FBU3BCLElBQUksQ0FBQ3dCLEdBQUc7UUFDbkMsT0FDSTtZQUNGRCxNQUFNRSxLQUFLLENBQUM7UUFDZDtJQUdIO0lBQ0QscUJBQ0U7a0JBQ0EsNEVBQUNDO1lBQUtDLFVBQVViO1lBQWlCYyxXQUFVOzs4QkFDekMsOERBQUNDO29CQUFFRCxXQUFVOzhCQUFXOzs7Ozs7OEJBQ3hCLDhEQUFDRTtvQkFBTUMsU0FBUTs4QkFDZiw0RUFBQ3ZDLGtEQUFLQTt3QkFBQ29DLFdBQVU7d0JBQVFJLEtBQUssQ0FBQ2xDLFFBQU9QLGtEQUFNQSxDQUFDMEMsT0FBTyxHQUFFQyxJQUFJQyxlQUFlLENBQUNyQzt3QkFBUXNDLE9BQU87d0JBQUtDLFFBQVE7d0JBQUlDLEtBQUk7Ozs7Ozs7Ozs7OzhCQUU5Ryw4REFBQ0M7b0JBQU1DLFVBQVUsQ0FBQ3pCLElBQUloQixTQUFTZ0IsRUFBRUwsTUFBTSxDQUFDK0IsS0FBSyxDQUFDLEVBQUU7b0JBQUdDLE1BQUs7b0JBQU9DLElBQUc7b0JBQVFDLE1BQU07b0JBQUNDLFFBQVE7Ozs7Ozs4QkFDdkYsOERBQUNoQjtvQkFBRUQsV0FBVTs4QkFBZ0I7Ozs7Ozs4QkFDN0IsOERBQUNXO29CQUFNOUIsTUFBSztvQkFBUStCLFVBQVVqQztvQkFBaUJJLE9BQU9YLEtBQUtFLEtBQUs7b0JBQUUwQixXQUFVO29CQUE4Q2MsTUFBSztvQkFBT0ksYUFBWTtvQkFBWUQsUUFBUTs7Ozs7OzhCQUN0Syw4REFBQ2hCO29CQUFFRCxXQUFVOzhCQUFnQjs7Ozs7OzhCQUM3Qiw4REFBQ21CO29CQUFTdEMsTUFBSztvQkFBYytCLFVBQVVqQztvQkFBaUJJLE9BQU9YLEtBQUtHLFdBQVc7b0JBQUV5QixXQUFVO29CQUE4Q2MsTUFBSztvQkFBT0ksYUFBWTtvQkFBcUJFLE1BQU07b0JBQUdILFFBQVE7Ozs7Ozs4QkFDdk0sOERBQUNoQjtvQkFBRUQsV0FBVTs4QkFBZ0I7Ozs7Ozs4QkFDN0IsOERBQUNxQjtvQkFBT3hDLE1BQUs7b0JBQVcrQixVQUFVakM7b0JBQWlCSSxPQUFPWCxLQUFLSSxRQUFRO29CQUFFd0IsV0FBVTs7c0NBQ2pGLDhEQUFDc0I7NEJBQU92QyxPQUFNO3NDQUFVOzs7Ozs7c0NBQ3hCLDhEQUFDdUM7NEJBQU92QyxPQUFNO3NDQUFhOzs7Ozs7c0NBQzNCLDhEQUFDdUM7NEJBQU92QyxPQUFNO3NDQUFZOzs7Ozs7Ozs7Ozs7OEJBRTVCLDhEQUFDd0M7b0JBQU92QixXQUFVO29CQUFxQ2MsTUFBSzs4QkFBVTs7Ozs7Ozs7Ozs7OztBQUs5RTtHQTNETzdDO0FBNERQLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hZG1pbi9hZGRQcm9kdWN0cy9wYWdlLmpzPzRkYjAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IGFzc2V0cyB9IGZyb20gJ0AvQXNzZXRzL2Fzc2V0cydcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MsIHsgQXhpb3MgfSBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuIGNvbnN0IHBhZ2UgPSAoKSA9PiB7XHJcbiAgIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB0aXRsZTpcIlwiLFxyXG4gICAgZGVzY3JpcHRpb246XCJcIixcclxuICAgIGNhdGVnb3J5Olwic3RhcnR1cFwiLFxyXG4gICAgYXV0aG9yOlwiQWRlXCIsXHJcbiAgICBhdXRob3JJbWc6XCIvYXV0LmpwZ1wiXHJcbiAgIH0pXHJcbiAgIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9IChldmVudCk9PntcclxuICAgICAgY29uc3QgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lXHJcbiAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICBzZXREYXRhKGRhdGE9Pih7Li4uZGF0YSwgW25hbWVdOiB2YWx1ZX0pKVxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgXHJcbiAgIH1cclxuICAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gYXN5bmMgKGUpPT57XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCd0aXRsZScsIGRhdGEudGl0bGUpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2Rlc2NyaXB0aW9uJywgZGF0YS5kZXNjcmlwdGlvbik7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY2F0ZWdvcnknLCBkYXRhLmNhdGVnb3J5KTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdhdXRob3InLCBkYXRhLmF1dGhvcik7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYXV0aG9ySW1nJywgZGF0YS5hdXRob3JJbWcpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZGF0YS5pbWFnZSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2Jsb2cnLCBmb3JtRGF0YSlcclxuICAgICAgICBpZihyZXNwb25zZS5kYXRhLnN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgdG9hc3Quc3VjY2VzcyhyZXNwb25zZS5kYXRhLm1zZylcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIHRvYXN0LmVycm9yKFwiZXJyb3JcIilcclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgICBcclxuICAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0SGFuZGxlcn0gY2xhc3NOYW1lPScgcHQtNSBweC01IHNtOnB0LTEyIHNtOnBsLTE2Jz5cclxuICAgICAgPHAgY2xhc3NOYW1lPScgdGV4dC14bCc+VXBsb2FkIHRodW1ibmFpbDwvcD5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9J2ltYWdlJz5cclxuICAgICAgPEltYWdlIGNsYXNzTmFtZT0nIG10LTQnIHNyYz17IWltYWdlPyBhc3NldHMudHdpdHRlcjogVVJMLmNyZWF0ZU9iamVjdFVSTChpbWFnZSl9IHdpZHRoPXsxNDB9IGhlaWdodD17NzB9IGFsdD0nJy8+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpPT5zZXRJbWFnZShlLnRhcmdldC5maWxlc1swXSl9IHR5cGU9J2ZpbGUnIGlkPSdpbWFnZScgaGlkZGVuIHJlcXVpcmVkLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9JyB0ZXh0LXhsIG10LTQnPkJsb2cgVGl0bGU8L3A+XHJcbiAgICAgICAgPGlucHV0IG5hbWU9J3RpdGxlJyBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfSB2YWx1ZT17ZGF0YS50aXRsZX0gY2xhc3NOYW1lPScgdy1mdWxsIHNtOnctWy01MDBweF0gbXQtNCBweC00IHB5LTMgYm9yZGVyJyB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nVHlwZSBoZXJlJyByZXF1aXJlZC8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPScgdGV4dC14bCBtdC00Jz5CbG9nIERlc2NyaXB0aW9uPC9wPlxyXG4gICAgICAgIDx0ZXh0YXJlYSBuYW1lPSdkZXNjcmlwdGlvbicgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0gdmFsdWU9e2RhdGEuZGVzY3JpcHRpb259IGNsYXNzTmFtZT0nIHctZnVsbCBzbTp3LVstNTAwcHhdIG10LTQgcHgtNCBweS0zIGJvcmRlcicgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J3dyaXRlIGNvbnRlbnQgaGVyZScgcm93cz17Nn0gcmVxdWlyZWQvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nIHRleHQteGwgbXQtNCc+QmxvZyBjYXRlZ29yeTwvcD5cclxuICAgICAgICA8c2VsZWN0IG5hbWU9J2NhdGVnb3J5JyBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfSB2YWx1ZT17ZGF0YS5jYXRlZ29yeX0gY2xhc3NOYW1lPScgdy00MCBtdC00IHB4LTQgcHktMyBib3JkZXIgdGV4dC1ncmF5LTUwMCc+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3RhcnR1cFwiPlN0YXJ0dXA8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUZWNobm9sb2d5XCI+VGVjaG5vbGd5PC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTGlmZXN0eWxlXCI+TGlmZXN0eWxlPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9JyBtdDggdy00MCBoLTEyIGJnLWJsYWNrIHRleHQtd2hpdGUnIHR5cGU9JyBzdWJtaXQnPkFkZDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBwYWdlIl0sIm5hbWVzIjpbImFzc2V0cyIsIkltYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiQXhpb3MiLCJwYWdlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImRhdGEiLCJzZXREYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiYXV0aG9yIiwiYXV0aG9ySW1nIiwib25DaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlc3BvbnNlIiwicG9zdCIsInN1Y2Nlc3MiLCJ0b2FzdCIsIm1zZyIsImVycm9yIiwiZm9ybSIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwicCIsImxhYmVsIiwiaHRtbEZvciIsInNyYyIsInR3aXR0ZXIiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImlucHV0Iiwib25DaGFuZ2UiLCJmaWxlcyIsInR5cGUiLCJpZCIsImhpZGRlbiIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJ0ZXh0YXJlYSIsInJvd3MiLCJzZWxlY3QiLCJvcHRpb24iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/addProducts/page.js\n"));

/***/ })

});