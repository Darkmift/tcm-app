"use strict";
(() => {
var exports = {};
exports.id = 7063;
exports.ids = [7063];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 3895:
/***/ ((module) => {

module.exports = import("pocketbase");;

/***/ }),

/***/ 2860:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2733);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7351);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__]);
_backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



async function handler(req, res) {
  try {
    const {
      username,
      password,
      role
    } = req.body;
    const existingUser = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByFilter */ .Z.findByFilter(_const__WEBPACK_IMPORTED_MODULE_1__/* .COLLECTIONS.AUTH */ .Ul.AUTH, `username = "${username}"`);

    if (existingUser) {
      return res.status(409).json({
        error: 'Username already exists'
      });
    }

    if (!username || !password || ['User', 'Admin'].includes(role) === false) {
      return res.status(409).json({
        errorMsg: 'invalid credentials',
        credetials: {
          username,
          password,
          role
        }
      });
    }

    const hashedPassword = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_2__.hash)(password, 10);
    const newUser = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].insertRecord */ .Z.insertRecord(_const__WEBPACK_IMPORTED_MODULE_1__/* .COLLECTIONS.AUTH */ .Ul.AUTH, {
      username,
      password: hashedPassword,
      role
    });
    res.status(201).json({
      success: true,
      newId: newUser.id
    });
  } catch (error) {
    console.log('🚀 ~ file: auth.ts ~ line 33 ~ register ~ error', error);
    res.status(500).json({
      errorMsg: 'Internal server error\n\t' + error.message
    });
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2733,7351], () => (__webpack_exec__(2860)));
module.exports = __webpack_exports__;

})();