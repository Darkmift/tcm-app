"use strict";
(() => {
var exports = {};
exports.id = 2502;
exports.ids = [2502];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 3895:
/***/ ((module) => {

module.exports = import("pocketbase");;

/***/ }),

/***/ 9796:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2733);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7351);
/* harmony import */ var _backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7677);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__]);
_backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




async function handler(req, res) {
  try {
    const {
      username,
      password,
      year
    } = req.body;
    const existingUser = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByFilter */ .Z.findByFilter(_const__WEBPACK_IMPORTED_MODULE_1__/* .COLLECTIONS.AUTH */ .Ul.AUTH, `username = "${username}"`);

    if (existingUser) {
      throw new Error('Username already exists: ', username);
    }

    if (!username || !password || !year) {
      throw new Error('invalid credentials: ', username);
    }

    const newUser = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].insertRecord */ .Z.insertRecord(_const__WEBPACK_IMPORTED_MODULE_1__/* .COLLECTIONS.AUTH */ .Ul.AUTH, {
      username,
      password,
      role: 'User'
    });

    if (!newUser) {
      throw new Error('user creation failed: ', username);
    }

    let targetYear = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByFilter */ .Z.findByFilter(_const__WEBPACK_IMPORTED_MODULE_1__/* .COLLECTIONS.YEARS_AUTH */ .Ul.YEARS_AUTH, `year=${year}`, false);

    if (!targetYear) {
      targetYear = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].insertRecord */ .Z.insertRecord(_const__WEBPACK_IMPORTED_MODULE_1__/* .COLLECTIONS.YEARS_AUTH */ .Ul.YEARS_AUTH, {
        year,
        is_enabled: false
      });
    }

    console.log('🚀 ~ file: register-student.ts:41 ~ handler ~ targetYear:', targetYear);
    const projects = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getCollection */ .Z.getCollection(_const__WEBPACK_IMPORTED_MODULE_1__/* .COLLECTIONS.PROJECTS */ .Ul.PROJECTS, {
      filter: `year=${year} && name='${username}'`
    });

    if (!projects.length) {
      const createdProject = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].insertRecord */ .Z.insertRecord(_const__WEBPACK_IMPORTED_MODULE_1__/* .COLLECTIONS.PROJECTS */ .Ul.PROJECTS, {
        name: username,
        description: 'made from CSV generated user',
        year: targetYear.year,
        ownerId: newUser.id
      });
      console.log('🚀 ~ file: register-student.ts:64 ~ handler ~ createdProject:', createdProject);
      if (!createdProject) throw new Error('project generation for student from csv failed for: ', username);
    }

    res.status(201).json({
      success: true,
      newUser
    });
  } catch (error) {
    console.log('🚀 ~ file: auth.ts ~ line 33 ~ register ~ error', error);
    res.status(500).json({
      payload: req.body,
      error: 'Internal server error\n\t' + error.message
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(handler));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2733,7351,7677], () => (__webpack_exec__(9796)));
module.exports = __webpack_exports__;

})();