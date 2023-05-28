"use strict";
(() => {
var exports = {};
exports.id = 123;
exports.ids = [123];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 3895:
/***/ ((module) => {

module.exports = import("pocketbase");;

/***/ }),

/***/ 5737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);


const checkStudentOwnsProject = handler => async function (req, res) {
  try {
    // Check if the Authorization header exists and extract the token value
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
      throw new Error('Authorization header not found');
    }

    const token = authHeader.replace('Bearer ', ''); // Verify the token and retrieve the user data

    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      throw new Error('JWT_SECRET environment variable not set');
    }

    const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, jwtSecret);
    const {
      project
    } = req?.body;
    const ownerId = project?.expand?.ownerId?.id;

    if (!project) {
      throw new Error('project not provided');
    }

    if (decoded.id !== ownerId) {
      console.log('🚀 ~ file: checkStudentOwnsProject.ts:38 ~ decoded.username !== id:', {
        du: decoded.username,
        ownerId
      });
      throw new Error('user not owner of project');
    } // Call the original handler


    return handler(req, res);
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      error: 'Unauthorized'
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkStudentOwnsProject);

/***/ }),

/***/ 8938:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2733);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7351);
/* harmony import */ var _backend_middleware_checkStudentOwnsProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5737);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__]);
_backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


 // Handler to update an existing project

const StudentProjectEdit = async (req, res) => {
  try {
    const {
      id,
      name,
      description,
      year,
      image,
      members,
      instructorId,
      internshipId
    } = req.body?.project;

    if (!id) {
      return res.status(400).json({
        error: 'Please provide an id'
      });
    }

    if (!!name?.length === false) {
      return res.status(400).json({
        error: 'name provided is invalid'
      });
    }

    const rawData = {
      name,
      description,
      year,
      image,
      members,
      instructorId,
      internshipId
    };

    for (const key in rawData) {
      if (!!rawData[key] === false) {
        delete rawData[key];
      } else {
        switch (key) {
          case 'year':
            rawData[key] = year.year;
            break;

          case 'instructorId':
            rawData[key] = instructorId?.id;
            break;

          case 'internshipId':
            rawData[key] = internshipId?.id;
            break;
        }
      }
    }

    const updatedProject = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].updateRecord */ .Z.updateRecord('projects', id, rawData);
    const filter = `projectId = "${updatedProject.id}"`;
    const result = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByFilter */ .Z.findByFilter(_const__WEBPACK_IMPORTED_MODULE_1__/* .COLLECTIONS.PROJECT_MEMBER_RELATION */ .Ul.PROJECT_MEMBER_RELATION, filter, true);

    for await (const relation of result) {
      await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].deleteRecord */ .Z.deleteRecord(_const__WEBPACK_IMPORTED_MODULE_1__/* .COLLECTIONS.PROJECT_MEMBER_RELATION */ .Ul.PROJECT_MEMBER_RELATION, relation.id);
    }

    if (members?.length) {
      for await (const member of members) {
        const filter = `projectId = "${updatedProject.id}" && memberId = "${member.id}"`;
        const result = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByFilter */ .Z.findByFilter(_const__WEBPACK_IMPORTED_MODULE_1__/* .COLLECTIONS.PROJECT_MEMBER_RELATION */ .Ul.PROJECT_MEMBER_RELATION, filter);
        if (result) continue;
        await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].insertRecord */ .Z.insertRecord(_const__WEBPACK_IMPORTED_MODULE_1__/* .COLLECTIONS.PROJECT_MEMBER_RELATION */ .Ul.PROJECT_MEMBER_RELATION, {
          projectId: updatedProject.id,
          memberId: member.id
        });
      }
    }

    res.status(200).json(updatedProject);
  } catch (error) {
    console.log('🚀 ~ file: projects.ts ~ line 68 ~ error', error);
    return res.status(500).json({
      error: `Internal error: ${error.message}`
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_backend_middleware_checkStudentOwnsProject__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(StudentProjectEdit));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2733,7351], () => (__webpack_exec__(8938)));
module.exports = __webpack_exports__;

})();