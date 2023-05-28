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
exports.id = "pages/api/admin/logout";
exports.ids = ["pages/api/admin/logout"];
exports.modules = {

/***/ "(api)/./src/pages/api/admin/logout.ts":
/*!***************************************!*\
  !*** ./src/pages/api/admin/logout.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n  res.setHeader('Set-Cookie', `${process.env.COOKIE_NAME}=; HttpOnly; path=/; SameSite=Lax; expires=${new Date(0).toUTCString()}`);\n  res.status(200).json({\n    message: 'Logged out successfully'\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2FkbWluL2xvZ291dC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRWUsZUFBZUEsT0FBZixDQUNiQyxHQURhLEVBRWJDLEdBRmEsRUFHYjtFQUNBQSxHQUFHLENBQUNDLFNBQUosQ0FDRSxZQURGLEVBRUcsR0FDQ0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQ2IsOENBQTZDLElBQUlDLElBQUosQ0FBUyxDQUFULEVBQVlDLFdBQVosRUFBMEIsRUFKMUU7RUFNQU4sR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7SUFBQ0MsT0FBTyxFQUFFO0VBQVYsQ0FBckI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RjbS1hcHAvLi9zcmMvcGFnZXMvYXBpL2FkbWluL2xvZ291dC50cz9hNmEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZX0gZnJvbSAnbmV4dCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZVxyXG4pIHtcclxuICByZXMuc2V0SGVhZGVyKFxyXG4gICAgJ1NldC1Db29raWUnLFxyXG4gICAgYCR7XHJcbiAgICAgIHByb2Nlc3MuZW52LkNPT0tJRV9OQU1FXHJcbiAgICB9PTsgSHR0cE9ubHk7IHBhdGg9LzsgU2FtZVNpdGU9TGF4OyBleHBpcmVzPSR7bmV3IERhdGUoMCkudG9VVENTdHJpbmcoKX1gXHJcbiAgKVxyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZXNzYWdlOiAnTG9nZ2VkIG91dCBzdWNjZXNzZnVsbHknfSlcclxufVxyXG4iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsInNldEhlYWRlciIsInByb2Nlc3MiLCJlbnYiLCJDT09LSUVfTkFNRSIsIkRhdGUiLCJ0b1VUQ1N0cmluZyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/admin/logout.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/admin/logout.ts"));
module.exports = __webpack_exports__;

})();