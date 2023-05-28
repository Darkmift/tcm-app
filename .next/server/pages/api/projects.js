"use strict";
(() => {
var exports = {};
exports.id = 4646;
exports.ids = [4646];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 3895:
/***/ ((module) => {

module.exports = import("pocketbase");;

/***/ }),

/***/ 9417:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7351);
/* harmony import */ var _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2733);
/* harmony import */ var _backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7677);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__]);
_backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// Handler to get all projects
const getAllProjects = async (req, res) => {
  try {
    const {
      year
    } = req.query;
    console.log('🚀 ~ file: projects.ts:14 ~ year:', year);
    const projects = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getCollection */ .Z.getCollection(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.PROJECTS */ .Ul.PROJECTS, {
      filter: `year=${year}`,
      expand: 'instructorId,internshipId,ownerId'
    });
    const relations = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getCollection */ .Z.getCollection('project_member_relation', {
      expand: 'memberId'
    });
    projects.forEach(project => {
      const relationsPerProject = relations.filter(r => r.projectId === project.id);
      if (relationsPerProject?.length < 1) return;
      project.members = relationsPerProject.map(r => r.expand?.memberId);
    });
    res.status(200).json({
      projects
    });
  } catch (error) {
    console.log('🚀 ~ file: projects.ts ~ line 10 ~ error', error);
    return res.status(500).json({
      error: `Internal error: ${error.message}`
    });
  }
}; // Handler to create a new project


const createProject = async (req, res) => {
  try {
    // Extract necessary fields from request body
    const {
      name,
      description,
      year,
      image,
      members,
      instructorId,
      internshipId
    } = req.body;

    if (!name || !description || !year?.year) {
      return res.status(400).json({
        error: 'Please provide a name, description and year'
      });
    }

    const createdProject = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].insertRecord */ .Z.insertRecord(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.PROJECTS */ .Ul.PROJECTS, {
      name,
      description,
      year: year.year,
      instructorId: instructorId?.id,
      internshipId: internshipId?.id,
      imageUrl: image,
      image: image
    }, {
      expand: 'instructorId,internshipId,ownerId'
    });
    if (!createdProject) throw new Error('project creation failed');

    if (members?.length) {
      for await (const member of members) {
        const filter = `projectId = "${createdProject.id}" && memberId = "${member.id}"`;
        const result = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByFilter */ .Z.findByFilter(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.PROJECT_MEMBER_RELATION */ .Ul.PROJECT_MEMBER_RELATION, filter);
        if (result) continue;
        await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].insertRecord */ .Z.insertRecord(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.PROJECT_MEMBER_RELATION */ .Ul.PROJECT_MEMBER_RELATION, {
          projectId: createdProject.id,
          memberId: member.id
        });
      }
    }

    const relations = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getCollection */ .Z.getCollection('project_member_relation', {
      expand: 'memberId'
    });
    const relationsPerProject = relations.filter(r => r.projectId === createdProject.id);

    if (relationsPerProject?.length) {
      createdProject.members = relationsPerProject.map(r => r.expand?.memberId);
    }

    res.status(201).json(createdProject);
  } catch (error) {
    console.log('🚀 ~ file: projects.ts ~ line 40 ~ error', error);
    return res.status(500).json({
      error: `Internal error: ${error.message}`
    });
  }
}; // Handler to update an existing project


const updateProject = async (req, res) => {
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
    } = req.body;

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

    const updatedProject = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].updateRecord */ .Z.updateRecord('projects', id, rawData);
    const filter = `projectId = "${updatedProject.id}"`;
    const result = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByFilter */ .Z.findByFilter(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.PROJECT_MEMBER_RELATION */ .Ul.PROJECT_MEMBER_RELATION, filter, true);

    for await (const relation of result) {
      await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].deleteRecord */ .Z.deleteRecord(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.PROJECT_MEMBER_RELATION */ .Ul.PROJECT_MEMBER_RELATION, relation.id);
    }

    if (members?.length) {
      for await (const member of members) {
        const filter = `projectId = "${updatedProject.id}" && memberId = "${member.id}"`;
        const result = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByFilter */ .Z.findByFilter(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.PROJECT_MEMBER_RELATION */ .Ul.PROJECT_MEMBER_RELATION, filter);
        if (result) continue;
        await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].insertRecord */ .Z.insertRecord(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.PROJECT_MEMBER_RELATION */ .Ul.PROJECT_MEMBER_RELATION, {
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
}; // Handler to delete an existing project


const deleteProject = async (req, res) => {
  try {
    const {
      id
    } = req.query;
    const deletedProject = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].deleteRecord */ .Z.deleteRecord('projects', id);
    res.status(200).json(deletedProject);
  } catch (error) {
    console.log('🚀 ~ file: projects.ts ~ line 86 ~ error', error);
    return res.status(500).json({
      error: `Internal error: ${error.message}`
    });
  }
}; // Use the checkAuthMiddleware to protect the create/update/delete routes


const checkedCreateProject = (0,_backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(createProject);
const checkedUpdateProject = (0,_backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(updateProject);
const checkedDeleteProject = (0,_backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(deleteProject);
function handler(req, res) {
  const {
    method
  } = req;

  switch (method) {
    case 'GET':
      return getAllProjects(req, res);

    case 'POST':
      return checkedCreateProject(req, res);

    case 'PUT':
      return checkedUpdateProject(req, res);

    case 'DELETE':
      return checkedDeleteProject(req, res);

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).json({
        error: `Method ${method} Not Allowed`
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
var __webpack_exports__ = __webpack_require__.X(0, [2733,7351,7677], () => (__webpack_exec__(9417)));
module.exports = __webpack_exports__;

})();