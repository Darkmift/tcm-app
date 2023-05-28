"use strict";
(() => {
var exports = {};
exports.id = 6549;
exports.ids = [6549];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 3895:
/***/ ((module) => {

module.exports = import("pocketbase");;

/***/ }),

/***/ 1797:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2733);
/* harmony import */ var _backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7677);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__]);
_backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const getAllMembers = async (req, res) => {
  try {
    const members = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getCollection */ .Z.getCollection('members');
    res.status(200).json(members);
  } catch (error) {
    console.error('🚀 ~ error ~ file: members.ts ~ line 13 ~ getAllMembers ~ error', error);
    res.status(500).json({
      error: `Internal error: ${error.message}`
    });
  }
};

const createMember = async (req, res) => {
  try {
    const {
      name,
      email
    } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        error: 'Missing name/email'
      });
    }

    const memberRecord = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].insertRecord */ .Z.insertRecord('members', {
      name,
      email
    });
    res.status(201).json(memberRecord);
  } catch (error) {
    console.error('🚀 ~ error ~ file: members.ts ~ line 33 ~ createMember ~ error', error);
    res.status(500).json({
      error: `Internal error: ${error.message}`
    });
  }
};

const updateMember = async (req, res) => {
  try {
    const {
      id
    } = req.query;
    const {
      name,
      email
    } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        error: 'Missing name/email'
      });
    }

    const updatedMember = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].updateRecord */ .Z.updateRecord('members', id, {
      name,
      email
    });
    res.status(200).json(updatedMember);
  } catch (error) {
    console.error('🚀 ~ error ~ file: members.ts ~ line 58 ~ updateMember ~ error', error);
    res.status(500).json({
      error: `Internal error: ${error.message}`
    });
  }
};

const deleteMember = async (req, res) => {
  try {
    const {
      id
    } = req.query;
    const deletedMember = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].deleteRecord */ .Z.deleteRecord('members', id);
    res.status(200).json(deletedMember);
  } catch (error) {
    console.error('🚀 ~ error ~ file: members.ts ~ line 74 ~ deleteMember ~ error', error);
    res.status(500).json({
      error: `Internal error: ${error.message}`
    });
  }
};

const checkedCreateMember = (0,_backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(createMember);
const checkedUpdateMember = (0,_backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(updateMember);
const checkedDeleteMember = (0,_backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(deleteMember);
function handler(req, res) {
  const {
    method
  } = req;

  switch (method) {
    case 'GET':
      return getAllMembers(req, res);

    case 'POST':
      return checkedCreateMember(req, res);

    case 'PUT':
      return checkedUpdateMember(req, res);

    case 'DELETE':
      return checkedDeleteMember(req, res);

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).json({
        error: `Method ${method} Not Allowed`,
        links: []
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
var __webpack_exports__ = __webpack_require__.X(0, [2733,7677], () => (__webpack_exec__(1797)));
module.exports = __webpack_exports__;

})();