"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/email/route";
exports.ids = ["app/api/email/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Femail%2Froute&page=%2Fapi%2Femail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femail%2Froute.js&appDir=C%3A%5CUsers%5CAdmin%5CDesktop%5ClarvaProjects%5Cblog-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdmin%5CDesktop%5ClarvaProjects%5Cblog-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Femail%2Froute&page=%2Fapi%2Femail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femail%2Froute.js&appDir=C%3A%5CUsers%5CAdmin%5CDesktop%5ClarvaProjects%5Cblog-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdmin%5CDesktop%5ClarvaProjects%5Cblog-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Admin_Desktop_larvaProjects_blog_app_app_api_email_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/email/route.js */ \"(rsc)/./app/api/email/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/email/route\",\n        pathname: \"/api/email\",\n        filename: \"route\",\n        bundlePath: \"app/api/email/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\larvaProjects\\\\blog-app\\\\app\\\\api\\\\email\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Admin_Desktop_larvaProjects_blog_app_app_api_email_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/email/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZlbWFpbCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZW1haWwlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZlbWFpbCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBZG1pbiU1Q0Rlc2t0b3AlNUNsYXJ2YVByb2plY3RzJTVDYmxvZy1hcHAlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0FkbWluJTVDRGVza3RvcCU1Q2xhcnZhUHJvamVjdHMlNUNibG9nLWFwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDNkI7QUFDMUc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLWFwcC8/MTU1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxBZG1pblxcXFxEZXNrdG9wXFxcXGxhcnZhUHJvamVjdHNcXFxcYmxvZy1hcHBcXFxcYXBwXFxcXGFwaVxcXFxlbWFpbFxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZW1haWwvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9lbWFpbFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZW1haWwvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxBZG1pblxcXFxEZXNrdG9wXFxcXGxhcnZhUHJvamVjdHNcXFxcYmxvZy1hcHBcXFxcYXBwXFxcXGFwaVxcXFxlbWFpbFxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvZW1haWwvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Femail%2Froute&page=%2Fapi%2Femail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femail%2Froute.js&appDir=C%3A%5CUsers%5CAdmin%5CDesktop%5ClarvaProjects%5Cblog-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdmin%5CDesktop%5ClarvaProjects%5Cblog-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/email/route.js":
/*!********************************!*\
  !*** ./app/api/email/route.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/config/db */ \"(rsc)/./lib/config/db.js\");\n/* harmony import */ var _lib_models_email_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/models/email.models */ \"(rsc)/./lib/models/email.models.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\n// CONNECT TO DB\nconst loadDB = async ()=>{\n    await (0,_lib_config_db__WEBPACK_IMPORTED_MODULE_0__.connectDB)();\n};\n// POST REQ\nasync function POST(request) {\n    const formData = await request.formData();\n    const emailData = {\n        email: `${formData.get(\"email\")}`\n    };\n    await _lib_models_email_models__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(emailData);\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        success: true,\n        msg: \"Email Subscribed\"\n    });\n}\n// GET REQ\nasync function GET(request) {\n    const emails = await _lib_models_email_models__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        emails\n    });\n}\n// DELETE REQ\nasync function DELETE(request) {\n    const id = await request.nextUrl.searchParams.get(\"id\");\n    await _lib_models_email_models__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndDelete(id);\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        success: true,\n        msg: \"Email Deleted\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2VtYWlsL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QztBQUNPO0FBQ1I7QUFFM0MsZ0JBQWdCO0FBQ2hCLE1BQU1HLFNBQVM7SUFDWCxNQUFNSCx5REFBU0E7QUFDbkI7QUFDQSxXQUFXO0FBQ0osZUFBZUksS0FBS0MsT0FBTztJQUM5QixNQUFNQyxXQUFXLE1BQU1ELFFBQVFDLFFBQVE7SUFDdkMsTUFBTUMsWUFBWTtRQUNkQyxPQUFPLENBQUMsRUFBRUYsU0FBU0csR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUVyQztJQUNBLE1BQU1SLGdFQUFVQSxDQUFDUyxNQUFNLENBQUNIO0lBQ3hCLE9BQU9MLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7UUFBQ0MsU0FBUztRQUFNQyxLQUFLO0lBQWtCO0FBQ3BFO0FBRUEsVUFBVTtBQUNILGVBQWVDLElBQUlULE9BQU87SUFDN0IsTUFBTVUsU0FBUyxNQUFNZCxnRUFBVUEsQ0FBQ2UsSUFBSSxDQUFDLENBQUM7SUFDdEMsT0FBT2QscURBQVlBLENBQUNTLElBQUksQ0FBQztRQUFDSTtJQUFNO0FBQ3BDO0FBRUEsYUFBYTtBQUNOLGVBQWVFLE9BQU9aLE9BQU87SUFDaEMsTUFBTWEsS0FBSyxNQUFNYixRQUFRYyxPQUFPLENBQUNDLFlBQVksQ0FBQ1gsR0FBRyxDQUFDO0lBQ2xELE1BQU1SLGdFQUFVQSxDQUFDb0IsaUJBQWlCLENBQUNIO0lBQ25DLE9BQU9oQixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1FBQUNDLFNBQVM7UUFBTUMsS0FBSztJQUFlO0FBQ2pFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1hcHAvLi9hcHAvYXBpL2VtYWlsL3JvdXRlLmpzPzQwMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdERCIH0gZnJvbSBcIkAvbGliL2NvbmZpZy9kYlwiO1xyXG5pbXBvcnQgRW1haWxNb2RlbCBmcm9tIFwiQC9saWIvbW9kZWxzL2VtYWlsLm1vZGVsc1wiO1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuXHJcbi8vIENPTk5FQ1QgVE8gREJcclxuY29uc3QgbG9hZERCID0gYXN5bmMgKCk9PntcclxuICAgIGF3YWl0IGNvbm5lY3REQigpXHJcbn1cclxuLy8gUE9TVCBSRVFcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdCl7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICAgIGNvbnN0IGVtYWlsRGF0YSA9IHtcclxuICAgICAgICBlbWFpbDogYCR7Zm9ybURhdGEuZ2V0KCdlbWFpbCcpfWAsXHJcblxyXG4gICAgfVxyXG4gICAgYXdhaXQgRW1haWxNb2RlbC5jcmVhdGUoZW1haWxEYXRhKVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtzdWNjZXNzOiB0cnVlLCBtc2c6IFwiRW1haWwgU3Vic2NyaWJlZFwifSlcclxufVxyXG5cclxuLy8gR0VUIFJFUVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3Qpe1xyXG4gICAgY29uc3QgZW1haWxzID0gYXdhaXQgRW1haWxNb2RlbC5maW5kKHt9KTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7ZW1haWxzfSk7XHJcbn1cclxuXHJcbi8vIERFTEVURSBSRVFcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURShyZXF1ZXN0KXtcclxuICAgIGNvbnN0IGlkID0gYXdhaXQgcmVxdWVzdC5uZXh0VXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJpZFwiKVxyXG4gICAgYXdhaXQgRW1haWxNb2RlbC5maW5kQnlJZEFuZERlbGV0ZShpZClcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7c3VjY2VzczogdHJ1ZSwgbXNnOiBcIkVtYWlsIERlbGV0ZWRcIn0pXHJcbn0iXSwibmFtZXMiOlsiY29ubmVjdERCIiwiRW1haWxNb2RlbCIsIk5leHRSZXNwb25zZSIsImxvYWREQiIsIlBPU1QiLCJyZXF1ZXN0IiwiZm9ybURhdGEiLCJlbWFpbERhdGEiLCJlbWFpbCIsImdldCIsImNyZWF0ZSIsImpzb24iLCJzdWNjZXNzIiwibXNnIiwiR0VUIiwiZW1haWxzIiwiZmluZCIsIkRFTEVURSIsImlkIiwibmV4dFVybCIsInNlYXJjaFBhcmFtcyIsImZpbmRCeUlkQW5kRGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/email/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/config/db.js":
/*!**************************!*\
  !*** ./lib/config/db.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst connectDB = async ()=>{\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://blogapp:blogapp@blogapp.ox50j.mongodb.net/blogapp?retryWrites=true&w=majority&appName=blogapp\");\n    console.log(\"connectedDB\");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvY29uZmlnL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ0w7QUFJbkIsTUFBTUUsWUFBWTtJQUV0QixNQUFNRix1REFBZ0IsQ0FBQztJQUN2QkksUUFBUUMsR0FBRyxDQUFDO0FBRWhCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLWFwcC8uL2xpYi9jb25maWcvZGIuanM/Y2E4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCBkb3RlbnYgZnJvbSBcImRvdGVudlwiXHJcblxyXG5cclxuXHJcbiBleHBvcnQgY29uc3QgY29ubmVjdERCID0gYXN5bmMgKCk9PntcclxuXHJcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KFwibW9uZ29kYitzcnY6Ly9ibG9nYXBwOmJsb2dhcHBAYmxvZ2FwcC5veDUwai5tb25nb2RiLm5ldC9ibG9nYXBwP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSZhcHBOYW1lPWJsb2dhcHBcIilcclxuICAgIGNvbnNvbGUubG9nKFwiY29ubmVjdGVkREJcIik7XHJcbiAgICBcclxufVxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJkb3RlbnYiLCJjb25uZWN0REIiLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/config/db.js\n");

/***/ }),

/***/ "(rsc)/./lib/models/email.models.js":
/*!************************************!*\
  !*** ./lib/models/email.models.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Schema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    email: {\n        type: String,\n        required: true\n    },\n    date: {\n        type: Date,\n        default: Date.now()\n    }\n});\nconst EmailModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).email || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"email\", Schema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWxzL2VtYWlsLm1vZGVscy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFJaEMsTUFBTUMsU0FBUyxJQUFJRCx3REFBZSxDQUFDO0lBQy9CRSxPQUFNO1FBQUNDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSTtJQUNuQ0MsTUFBTTtRQUFDSCxNQUFLSTtRQUFNQyxTQUFTRCxLQUFLRSxHQUFHO0lBQUU7QUFDekM7QUFFQSxNQUFNQyxhQUFhVix3REFBZSxDQUFDRSxLQUFLLElBQUtGLHFEQUFjLENBQUUsU0FBU0M7QUFFdEUsaUVBQWVTLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLWFwcC8uL2xpYi9tb2RlbHMvZW1haWwubW9kZWxzLmpzP2M0ODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIGVtYWlsOnt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcclxuICAgIGRhdGU6IHt0eXBlOkRhdGUsIGRlZmF1bHQ6IERhdGUubm93KCl9XHJcbn0pXHJcblxyXG5jb25zdCBFbWFpbE1vZGVsID0gbW9uZ29vc2UubW9kZWxzLmVtYWlsIHx8ICBtb25nb29zZS5tb2RlbCAoXCJlbWFpbFwiLCBTY2hlbWEpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbWFpbE1vZGVsOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZGF0ZSIsIkRhdGUiLCJkZWZhdWx0Iiwibm93IiwiRW1haWxNb2RlbCIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/models/email.models.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/dotenv"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Femail%2Froute&page=%2Fapi%2Femail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femail%2Froute.js&appDir=C%3A%5CUsers%5CAdmin%5CDesktop%5ClarvaProjects%5Cblog-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdmin%5CDesktop%5ClarvaProjects%5Cblog-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();