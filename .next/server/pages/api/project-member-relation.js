"use strict";
(() => {
var exports = {};
exports.id = 5090;
exports.ids = [5090];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 3895:
/***/ ((module) => {

module.exports = import("pocketbase");;

/***/ }),

/***/ 4704:
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



const getAllRelations = async (req, res) => {
  try {
    const projectId = req.query?.projectId?.toString();
    const memberId = req.query?.memberId?.toString();
    let memberProjectRelation;

    if (projectId || memberId) {
      const filterByProject = projectId ? `projectId = "${projectId}"` : null;
      const filterByMember = memberId ? `memberId = "${memberId}"` : null;
      const filterString = [filterByProject, filterByMember].filter(f => f != null).join(' && ');
      memberProjectRelation = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByFilter */ .Z.findByFilter('project_member_relation', filterString, true, {
        expand: 'projectId,memberId'
      });
    } else {
      memberProjectRelation = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getCollection */ .Z.getCollection('project_member_relation', {
        expand: 'projectId,memberId'
      });
    }

    res.status(200).json(memberProjectRelation);
  } catch (error) {
    console.error('🚀 ~ error ~ file: index.ts ~ line 14 ~ getAllMembersInProjects ~ error', error);
    res.status(500).json({
      error: `Internal error: ${error.message}`
    });
  }
};

const createRecord = async (req, res) => {
  try {
    const {
      memberId,
      projectId
    } = req.body;

    if (!memberId || !projectId) {
      return res.status(400).json({
        error: 'Missing required fields'
      });
    }

    const memberRecord = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].insertRecord */ .Z.insertRecord('project_member_relation', {
      memberId,
      projectId
    });
    res.status(201).json(memberRecord);
  } catch (error) {
    console.error('🚀 ~ error ~ file: index.ts ~ line 39 ~ createMemberInProject ~ error', error);
    res.status(500).json({
      error: `Internal error: ${error.message}`
    });
  }
};

const updateRecord = async (req, res) => {
  try {
    const {
      id
    } = req.query;
    const {
      memberId,
      projectId
    } = req.body;

    if (!memberId || !projectId) {
      return res.status(400).json({
        error: 'Missing required fields'
      });
    }

    const updatedMember = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].updateRecord */ .Z.updateRecord('project_member_relation', id, {
      memberId,
      projectId
    });
    res.status(200).json(updatedMember);
  } catch (error) {
    console.error('🚀 ~ error ~ file: index.ts ~ line 65 ~ updateMemberInProject ~ error', error);
    res.status(500).json({
      error: `Internal error: ${error.message}`
    });
  }
};

const deleteRecord = async (req, res) => {
  try {
    const {
      id
    } = req.query;
    await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].deleteRecord */ .Z.deleteRecord('project_member_relation', id);
    res.status(200).json({
      success: true
    });
  } catch (error) {
    console.error('🚀 ~ error ~ file: index.ts ~ line 84 ~ deleteRecord ~ error', error);
    res.status(500).json({
      error: `Internal error: ${error.message}`
    });
  }
};

const checkedCreateMemberInProject = (0,_backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(createRecord);
const checkedUpdateMemberInProject = (0,_backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(updateRecord);
const checkedDeleteMemberInProject = (0,_backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(deleteRecord);
function handler(req, res) {
  const {
    method
  } = req;

  switch (method) {
    case 'GET':
      return getAllRelations(req, res);

    case 'POST':
      return checkedCreateMemberInProject(req, res);

    case 'PUT':
      return checkedUpdateMemberInProject(req, res);

    case 'DELETE':
      return checkedDeleteMemberInProject(req, res);

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
var __webpack_exports__ = __webpack_require__.X(0, [2733,7677], () => (__webpack_exec__(4704)));
module.exports = __webpack_exports__;

})();