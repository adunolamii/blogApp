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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Assets_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Assets/assets */ \"(app-pages-browser)/./Assets/assets.js\");\n/* harmony import */ var _blogItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blogItem */ \"(app-pages-browser)/./components/blogItem.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// import axios from 'axios'\nconst blogLists = ()=>{\n    _s();\n    const [menu, setMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const [blogs, setBlogs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // TO FETCH DATAS FROM DB\n    const fetchBlogs = async ()=>{\n    // const response = await axios.get('/api/blog');\n    // setBlogs(response.data.blogs);\n    // console.log(response.data.blogs);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchBlogs();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex justify-center gap-6 my-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setMenu(\"All\"),\n                        className: menu === \"All\" ? \"bg-black text-white py-1 px-4 rounded-sm\" : \"\",\n                        children: \"All\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogLists.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setMenu(\"Technology\"),\n                        className: menu === \"Technology\" ? \"bg-black text-white py-1 px-4 rounded-sm\" : \"\",\n                        children: \"Technolgy\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogLists.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setMenu(\"Lifestyle\"),\n                        className: menu === \"Lifestyle\" ? \"bg-black text-white py-1 px-4 rounded-sm\" : \"\",\n                        children: \"Lifestyle\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogLists.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setMenu(\"Startup\"),\n                        className: menu === \"Startup\" ? \"bg-black text-white py-1 px-4 rounded-sm\" : \"\",\n                        children: \"Startup\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogLists.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogLists.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:24\",\n                children: _Assets_assets__WEBPACK_IMPORTED_MODULE_2__.blog_data.filter((item)=>menu === \"All\" ? true : item.category === menu).map((item, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blogItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        image: item.image,\n                        title: item.title,\n                        description: item.description,\n                        category: item.category,\n                        id: item.id\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogLists.js\",\n                        lineNumber: 35,\n                        columnNumber: 16\n                    }, undefined);\n                    {}\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogLists.js\",\n                lineNumber: 33,\n                columnNumber: 1\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\components\\\\blogLists.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(blogLists, \"hQx95DB1atBNf80vflidCpohnn8=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (blogLists);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYmxvZ0xpc3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3lCO0FBQ2tCO0FBQ1Y7QUFDVTtBQUMzQyw0QkFBNEI7QUFHNUIsTUFBTUssWUFBWTs7SUFDZCxNQUFNLENBQUNDLE1BQUtDLFFBQVEsR0FBR0osK0NBQVFBLENBQUM7SUFDaEMsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFFekMseUJBQXlCO0lBQ3JCLE1BQU1PLGFBQWE7SUFDakIsaURBQWlEO0lBQ2pELGlDQUFpQztJQUNqQyxvQ0FBb0M7SUFFdEM7SUFDQU4sZ0RBQVNBLENBQUM7UUFDUk07SUFDRixHQUFHLEVBQUU7SUFFUCxxQkFFRSw4REFBQ0M7OzBCQUNHLDhEQUFDQTtnQkFBSUMsV0FBVTs7a0NBQ2YsOERBQUNDO3dCQUFPQyxTQUFTLElBQUlQLFFBQVE7d0JBQVFLLFdBQVlOLFNBQU8sUUFBTyw2Q0FBNEM7a0NBQUk7Ozs7OztrQ0FDL0csOERBQUNPO3dCQUFPQyxTQUFTLElBQUlQLFFBQVE7d0JBQWVLLFdBQVlOLFNBQU8sZUFBYyw2Q0FBNEM7a0NBQUk7Ozs7OztrQ0FDN0gsOERBQUNPO3dCQUFPQyxTQUFTLElBQUlQLFFBQVE7d0JBQWNLLFdBQVlOLFNBQU8sY0FBYSw2Q0FBNEM7a0NBQUk7Ozs7OztrQ0FDM0gsOERBQUNPO3dCQUFPQyxTQUFTLElBQUlQLFFBQVE7d0JBQWFLLFdBQVlOLFNBQU8sWUFBVyw2Q0FBNEM7a0NBQUk7Ozs7Ozs7Ozs7OzswQkFFaEksOERBQUNLO2dCQUFJQyxXQUFVOzBCQUNWWCxxREFBU0EsQ0FBQ2MsTUFBTSxDQUFDLENBQUNDLE9BQVFWLFNBQU8sUUFBTSxPQUFNVSxLQUFLQyxRQUFRLEtBQUdYLE1BQU1ZLEdBQUcsQ0FBQyxDQUFDRixNQUFNRztvQkFDM0UscUJBQU8sOERBQUNqQixpREFBUUE7d0JBQWFrQixPQUFRSixLQUFLSSxLQUFLO3dCQUFFQyxPQUFPTCxLQUFLSyxLQUFLO3dCQUFFQyxhQUFhTixLQUFLTSxXQUFXO3dCQUFFTCxVQUFVRCxLQUFLQyxRQUFRO3dCQUFFTSxJQUFJUCxLQUFLTyxFQUFFO3VCQUFqSEo7Ozs7O29CQUUzQixDQUVHO2dCQUNGOzs7Ozs7Ozs7Ozs7QUFJSjtHQW5DTWQ7QUFxQ04sK0RBQWVBLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9nTGlzdHMuanM/MTQ0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBibG9nX2RhdGEgfSBmcm9tICdAL0Fzc2V0cy9hc3NldHMnXHJcbmltcG9ydCBCbG9nSXRlbSBmcm9tICcuL2Jsb2dJdGVtJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcblxyXG5jb25zdCBibG9nTGlzdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbWVudSxzZXRNZW51XSA9IHVzZVN0YXRlKCdBbGwnKVxyXG4gICAgY29uc3QgW2Jsb2dzLCBzZXRCbG9nc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbi8vIFRPIEZFVENIIERBVEFTIEZST00gREJcclxuICAgIGNvbnN0IGZldGNoQmxvZ3MgPSBhc3luYygpPT57XHJcbiAgICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Jsb2cnKTtcclxuICAgICAgLy8gc2V0QmxvZ3MocmVzcG9uc2UuZGF0YS5ibG9ncyk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuYmxvZ3MpO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGZldGNoQmxvZ3MoKTtcclxuICAgIH0sIFtdKVxyXG4gICAgXHJcbiAgcmV0dXJuIChcclxuICAgIFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIGZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTYgbXktMTAnPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnNldE1lbnUoJ0FsbCcpfSBjbGFzc05hbWU9IHttZW51PT09XCJBbGxcIj8gXCJiZy1ibGFjayB0ZXh0LXdoaXRlIHB5LTEgcHgtNCByb3VuZGVkLXNtXCIgOlwiXCJ9PkFsbDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnNldE1lbnUoJ1RlY2hub2xvZ3knKX0gY2xhc3NOYW1lPSB7bWVudT09PVwiVGVjaG5vbG9neVwiPyBcImJnLWJsYWNrIHRleHQtd2hpdGUgcHktMSBweC00IHJvdW5kZWQtc21cIiA6XCJcIn0+VGVjaG5vbGd5PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+c2V0TWVudSgnTGlmZXN0eWxlJyl9IGNsYXNzTmFtZT0ge21lbnU9PT1cIkxpZmVzdHlsZVwiPyBcImJnLWJsYWNrIHRleHQtd2hpdGUgcHktMSBweC00IHJvdW5kZWQtc21cIiA6XCJcIn0+TGlmZXN0eWxlPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+c2V0TWVudSgnU3RhcnR1cCcpfSAgY2xhc3NOYW1lPSB7bWVudT09PVwiU3RhcnR1cFwiPyBcImJnLWJsYWNrIHRleHQtd2hpdGUgcHktMSBweC00IHJvdW5kZWQtc21cIiA6XCJcIn0+U3RhcnR1cDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG48ZGl2IGNsYXNzTmFtZT0nIGZsZXggZmxleC13cmFwIGp1c3RpZnktYXJvdW5kIGdhcC0xIGdhcC15LTEwIG1iLTE2IHhsOjI0Jz5cclxuICAgIHtibG9nX2RhdGEuZmlsdGVyKChpdGVtKT0+IG1lbnU9PT1cIkFsbFwiP3RydWU6IGl0ZW0uY2F0ZWdvcnk9PT1tZW51KS5tYXAoKGl0ZW0sIGluZGV4KT0+e1xyXG4gICAgICAgIHJldHVybiA8QmxvZ0l0ZW0ga2V5PXtpbmRleH0gaW1hZ2UgPXtpdGVtLmltYWdlfSB0aXRsZT17aXRlbS50aXRsZX0gZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259IGNhdGVnb3J5PXtpdGVtLmNhdGVnb3J5fSBpZD17aXRlbS5pZH0vPiBcclxuICAgXHJcbiAgIHsvKiB7YmxvZ3MuZmlsdGVyKChpdGVtKT0+IG1lbnU9PT1cIkFsbFwiP3RydWU6IGl0ZW0uY2F0ZWdvcnk9PT1tZW51KS5tYXAoKGl0ZW0sIGluZGV4KT0+e1xyXG4gICAgICAgIHJldHVybiA8QmxvZ0l0ZW0ga2V5PXtpbmRleH0gaW1hZ2UgPXtpdGVtLmltYWdlfSB0aXRsZT17aXRlbS50aXRsZX0gZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259IGNhdGVnb3J5PXtpdGVtLmNhdGVnb3J5fSBpZD17aXRlbS5faWR9Lz5cclxuICAgICovfVxyXG4gICAgfSl9XHJcbjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBibG9nTGlzdHMiXSwibmFtZXMiOlsiUmVhY3QiLCJibG9nX2RhdGEiLCJCbG9nSXRlbSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYmxvZ0xpc3RzIiwibWVudSIsInNldE1lbnUiLCJibG9ncyIsInNldEJsb2dzIiwiZmV0Y2hCbG9ncyIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJmaWx0ZXIiLCJpdGVtIiwiY2F0ZWdvcnkiLCJtYXAiLCJpbmRleCIsImltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/blogLists.js\n"));

/***/ })

});