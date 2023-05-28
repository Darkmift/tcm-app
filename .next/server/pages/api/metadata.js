"use strict";
(() => {
var exports = {};
exports.id = 4004;
exports.ids = [4004];
exports.modules = {

/***/ 3895:
/***/ ((module) => {

module.exports = import("pocketbase");;

/***/ }),

/***/ 6264:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7351);
/* harmony import */ var _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2733);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__]);
_backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
 // Next.js API route support: https://nextjs.org/docs/api-routes/introduction


async function handler(req, res) {
  try {
    const {
      year
    } = req.query;

    if (_const__WEBPACK_IMPORTED_MODULE_0__/* .VALID_YEAR_REGEX.test */ .FM.test(year) === false) {
      return res.status(404).json({
        error: 'Invalid Year'
      });
    }

    const yearData = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByFilter */ .Z.findByFilter(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.YEARS_AUTH */ .Ul.YEARS_AUTH, `year = ${year}`);

    if (yearData.is_enabled === false) {
      return res.status(401).json({
        error: 'Year not enabled by admin'
      });
    }

    const projects = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByFilter */ .Z.findByFilter(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.PROJECTS */ .Ul.PROJECTS, `year = ${year}`, true, {
      expand: 'instructorId,internshipId'
    });
    const instructors = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByFilter */ .Z.findByFilter(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.INSTRUCTORS */ .Ul.INSTRUCTORS, `year = ${year}`, true);
    const internships = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByFilter */ .Z.findByFilter(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.INTERNSHIPS */ .Ul.INTERNSHIPS, `year = ${year}`, true);
    const members = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getCollection */ .Z.getCollection(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.MEMBERS */ .Ul.MEMBERS);
    const projectMemberRelation = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getCollection */ .Z.getCollection(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.PROJECT_MEMBER_RELATION */ .Ul.PROJECT_MEMBER_RELATION);
    res.status(200).send({
      yearData,
      instructors,
      internships,
      members,
      projects,
      projectMemberRelation
    });
  } catch (error) {
    console.log('🚀 ~ file: metadata.ts:45 ~ error:', error);
    return res.status(500).json({
      error: 'internal error: ' + error.message
    });
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2733,7351], () => (__webpack_exec__(6264)));
module.exports = __webpack_exports__;

})();