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

/***/ "(app-pages-browser)/./components/blogLists.js":
/*!*********************************!*\
  !*** ./components/blogLists.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Assets_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Assets/assets */ \"(app-pages-browser)/./Assets/assets.js\");\n/* harmony import */ var _blogItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blogItem */ \"(app-pages-browser)/./components/blogItem.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst blogLists = ()=>{\n    _s();\n    const [menu, setMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const [blogs, setBlogs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // TO FETCH DATAS FROM DB\n    const fetchBlogs = async ()=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/blog\");\n        setBlogs(response.data.blogs);\n        console.log(response.data.blogs);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchBlogs();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex justify-center gap-6 my-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setMenu(\"All\"),\n                        className: menu === \"All\" ? \"bg-black text-white py-1 px-4 rounded-sm\" : \"\",\n                        children: \"All\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogLists.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setMenu(\"Technology\"),\n                        className: menu === \"Technology\" ? \"bg-black text-white py-1 px-4 rounded-sm\" : \"\",\n                        children: \"Technolgy\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogLists.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setMenu(\"Lifestyle\"),\n                        className: menu === \"Lifestyle\" ? \"bg-black text-white py-1 px-4 rounded-sm\" : \"\",\n                        children: \"Lifestyle\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogLists.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setMenu(\"Startup\"),\n                        className: menu === \"Startup\" ? \"bg-black text-white py-1 px-4 rounded-sm\" : \"\",\n                        children: \"Startup\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogLists.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogLists.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:24\",\n                children: blogs.filter((item)=>menu === \"All\" ? true : item.category === menu).map((item, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blogItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        image: item.image,\n                        title: item.title,\n                        description: item.description,\n                        category: item.category,\n                        id: item._id\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogLists.js\",\n                        lineNumber: 41,\n                        columnNumber: 16\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogLists.js\",\n                lineNumber: 33,\n                columnNumber: 1\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogLists.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(blogLists, \"hQx95DB1atBNf80vflidCpohnn8=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (blogLists);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYmxvZ0xpc3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUN5QjtBQUNrQjtBQUNWO0FBQ1U7QUFDbEI7QUFHekIsTUFBTU0sWUFBWTs7SUFDZCxNQUFNLENBQUNDLE1BQUtDLFFBQVEsR0FBR0wsK0NBQVFBLENBQUM7SUFDaEMsTUFBTSxDQUFDTSxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFFekMseUJBQXlCO0lBQ3JCLE1BQU1RLGFBQWE7UUFDakIsTUFBTUMsV0FBVyxNQUFNUCw2Q0FBS0EsQ0FBQ1EsR0FBRyxDQUFDO1FBQ2pDSCxTQUFTRSxTQUFTRSxJQUFJLENBQUNMLEtBQUs7UUFDNUJNLFFBQVFDLEdBQUcsQ0FBQ0osU0FBU0UsSUFBSSxDQUFDTCxLQUFLO0lBRWpDO0lBQ0FMLGdEQUFTQSxDQUFDO1FBQ1JPO0lBQ0YsR0FBRyxFQUFFO0lBRVAscUJBRUUsOERBQUNNOzswQkFDRyw4REFBQ0E7Z0JBQUlDLFdBQVU7O2tDQUNmLDhEQUFDQzt3QkFBT0MsU0FBUyxJQUFJWixRQUFRO3dCQUFRVSxXQUFZWCxTQUFPLFFBQU8sNkNBQTRDO2tDQUFJOzs7Ozs7a0NBQy9HLDhEQUFDWTt3QkFBT0MsU0FBUyxJQUFJWixRQUFRO3dCQUFlVSxXQUFZWCxTQUFPLGVBQWMsNkNBQTRDO2tDQUFJOzs7Ozs7a0NBQzdILDhEQUFDWTt3QkFBT0MsU0FBUyxJQUFJWixRQUFRO3dCQUFjVSxXQUFZWCxTQUFPLGNBQWEsNkNBQTRDO2tDQUFJOzs7Ozs7a0NBQzNILDhEQUFDWTt3QkFBT0MsU0FBUyxJQUFJWixRQUFRO3dCQUFhVSxXQUFZWCxTQUFPLFlBQVcsNkNBQTRDO2tDQUFJOzs7Ozs7Ozs7Ozs7MEJBRWhJLDhEQUFDVTtnQkFBSUMsV0FBVTswQkFPWFQsTUFBTVksTUFBTSxDQUFDLENBQUNDLE9BQVFmLFNBQU8sUUFBTSxPQUFNZSxLQUFLQyxRQUFRLEtBQUdoQixNQUFNaUIsR0FBRyxDQUFDLENBQUNGLE1BQU1HO29CQUN0RSxxQkFBTyw4REFBQ3ZCLGlEQUFRQTt3QkFBYXdCLE9BQVFKLEtBQUtJLEtBQUs7d0JBQUVDLE9BQU9MLEtBQUtLLEtBQUs7d0JBQUVDLGFBQWFOLEtBQUtNLFdBQVc7d0JBQUVMLFVBQVVELEtBQUtDLFFBQVE7d0JBQUVNLElBQUlQLEtBQUtRLEdBQUc7dUJBQWxITDs7Ozs7Z0JBRTFCOzs7Ozs7Ozs7Ozs7QUFJSjtHQXRDTW5CO0FBd0NOLCtEQUFlQSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYmxvZ0xpc3RzLmpzPzE0NDciXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgYmxvZ19kYXRhIH0gZnJvbSAnQC9Bc3NldHMvYXNzZXRzJ1xyXG5pbXBvcnQgQmxvZ0l0ZW0gZnJvbSAnLi9ibG9nSXRlbSdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5cclxuY29uc3QgYmxvZ0xpc3RzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW21lbnUsc2V0TWVudV0gPSB1c2VTdGF0ZSgnQWxsJylcclxuICAgIGNvbnN0IFtibG9ncywgc2V0QmxvZ3NdID0gdXNlU3RhdGUoW10pXHJcblxyXG4vLyBUTyBGRVRDSCBEQVRBUyBGUk9NIERCXHJcbiAgICBjb25zdCBmZXRjaEJsb2dzID0gYXN5bmMoKT0+e1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9ibG9nJyk7XHJcbiAgICAgIHNldEJsb2dzKHJlc3BvbnNlLmRhdGEuYmxvZ3MpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmJsb2dzKTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBmZXRjaEJsb2dzKCk7XHJcbiAgICB9LCBbXSlcclxuICAgIFxyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBmbGV4IGp1c3RpZnktY2VudGVyIGdhcC02IG15LTEwJz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5zZXRNZW51KCdBbGwnKX0gY2xhc3NOYW1lPSB7bWVudT09PVwiQWxsXCI/IFwiYmctYmxhY2sgdGV4dC13aGl0ZSBweS0xIHB4LTQgcm91bmRlZC1zbVwiIDpcIlwifT5BbGw8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5zZXRNZW51KCdUZWNobm9sb2d5Jyl9IGNsYXNzTmFtZT0ge21lbnU9PT1cIlRlY2hub2xvZ3lcIj8gXCJiZy1ibGFjayB0ZXh0LXdoaXRlIHB5LTEgcHgtNCByb3VuZGVkLXNtXCIgOlwiXCJ9PlRlY2hub2xneTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnNldE1lbnUoJ0xpZmVzdHlsZScpfSBjbGFzc05hbWU9IHttZW51PT09XCJMaWZlc3R5bGVcIj8gXCJiZy1ibGFjayB0ZXh0LXdoaXRlIHB5LTEgcHgtNCByb3VuZGVkLXNtXCIgOlwiXCJ9PkxpZmVzdHlsZTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnNldE1lbnUoJ1N0YXJ0dXAnKX0gIGNsYXNzTmFtZT0ge21lbnU9PT1cIlN0YXJ0dXBcIj8gXCJiZy1ibGFjayB0ZXh0LXdoaXRlIHB5LTEgcHgtNCByb3VuZGVkLXNtXCIgOlwiXCJ9PlN0YXJ0dXA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9JyBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWFyb3VuZCBnYXAtMSBnYXAteS0xMCBtYi0xNiB4bDoyNCc+XHJcbiAgICB7LyogRkVUQ0hJTkcgRlJPTSBKU09OIEkuRSBBU1NFU1IuLi4gRlJPTlRFTkQgKi99XHJcbiAgICB7Lyoge2Jsb2dfZGF0YS5maWx0ZXIoKGl0ZW0pPT4gbWVudT09PVwiQWxsXCI/dHJ1ZTogaXRlbS5jYXRlZ29yeT09PW1lbnUpLm1hcCgoaXRlbSwgaW5kZXgpPT57XHJcbiAgICAgICAgcmV0dXJuIDxCbG9nSXRlbSBrZXk9e2luZGV4fSBpbWFnZSA9e2l0ZW0uaW1hZ2V9IHRpdGxlPXtpdGVtLnRpdGxlfSBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn0gY2F0ZWdvcnk9e2l0ZW0uY2F0ZWdvcnl9IGlkPXtpdGVtLmlkfS8+IFxyXG4gICAgKi99XHJcblxyXG4gICAgey8qIEZFVENIIEZST00gREIgKi99XHJcbiAgIHtibG9ncy5maWx0ZXIoKGl0ZW0pPT4gbWVudT09PVwiQWxsXCI/dHJ1ZTogaXRlbS5jYXRlZ29yeT09PW1lbnUpLm1hcCgoaXRlbSwgaW5kZXgpPT57XHJcbiAgICAgICAgcmV0dXJuIDxCbG9nSXRlbSBrZXk9e2luZGV4fSBpbWFnZSA9e2l0ZW0uaW1hZ2V9IHRpdGxlPXtpdGVtLnRpdGxlfSBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn0gY2F0ZWdvcnk9e2l0ZW0uY2F0ZWdvcnl9IGlkPXtpdGVtLl9pZH0vPlxyXG4gICAgXHJcbiAgICB9KX1cclxuPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJsb2dMaXN0cyJdLCJuYW1lcyI6WyJSZWFjdCIsImJsb2dfZGF0YSIsIkJsb2dJdGVtIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImJsb2dMaXN0cyIsIm1lbnUiLCJzZXRNZW51IiwiYmxvZ3MiLCJzZXRCbG9ncyIsImZldGNoQmxvZ3MiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImZpbHRlciIsIml0ZW0iLCJjYXRlZ29yeSIsIm1hcCIsImluZGV4IiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWQiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/blogLists.js\n"));

/***/ })

});