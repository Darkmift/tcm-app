"use strict";
(() => {
var exports = {};
exports.id = 9085;
exports.ids = [9085];
exports.modules = {

/***/ 7924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, res) {
  res.setHeader('Set-Cookie', `${process.env.COOKIE_NAME}=; HttpOnly; path=/; SameSite=Lax; expires=${new Date(0).toUTCString()}`);
  res.status(200).json({
    message: 'Logged out successfully'
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7924));
module.exports = __webpack_exports__;

})();