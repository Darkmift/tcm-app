"use strict";
(() => {
var exports = {};
exports.id = 6676;
exports.ids = [6676];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 3895:
/***/ ((module) => {

module.exports = import("pocketbase");;

/***/ }),

/***/ 9359:
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




const getInterships = async (req, res) => {
  try {
    const {
      year
    } = req.query;
    console.log('🚀 ~ file: internships.ts:13 ~ year:', year);
    const internships = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getCollection */ .Z.getCollection(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.INTERNSHIPS */ .Ul.INTERNSHIPS, {
      filter: `year = ${year}`
    });

    for await (const internship of internships) {
      const filter = `internshipId = "${internship.id}"`;
      const relations = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByFilter */ .Z.findByFilter(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.INTERNSHIP_INSTRUCTOR_RELATION */ .Ul.INTERNSHIP_INSTRUCTOR_RELATION, filter, true);

      if (!relations?.length) {
        continue;
      }

      for await (const relation of relations) {
        const instructor = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getRecord */ .Z.getRecord(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.INSTRUCTORS */ .Ul.INSTRUCTORS, relation.instructorId);

        if (instructor?.id) {
          internship.instructors.push(instructor);
        }
      }
    }

    res.status(200).json(internships);
  } catch (error) {
    console.log('🚀 ~ file: internships.ts ~ error:', error);
    return res.status(500).json({
      error: `Internal error: ${error.message}`
    });
  }
};

const createInternship = async (req, res) => {
  try {
    const {
      name,
      year,
      description,
      instructors
    } = req.body; // Validate year object

    if (_const__WEBPACK_IMPORTED_MODULE_0__/* .VALID_YEAR_REGEX.test */ .FM.test(String(year.year)) === false) {
      return res.status(400).json({
        error: 'Invalid Year'
      });
    } // validate inputs


    if (!year || !name || !description) {
      return res.status(400).json({
        error: 'Invalid Internship'
      });
    }

    const internshipRecord = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].insertRecord */ .Z.insertRecord(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.INTERNSHIPS */ .Ul.INTERNSHIPS, {
      name,
      year: year.year,
      description
    });
    if (!internshipRecord) throw new Error('Internship creation failed');

    if (instructors?.length) {
      for await (const instructor of instructors) {
        const filter = `internshipId = "${internshipRecord.id}" && instructorId = "${instructor.id}"`;
        const result = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByFilter */ .Z.findByFilter(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.INTERNSHIP_INSTRUCTOR_RELATION */ .Ul.INTERNSHIP_INSTRUCTOR_RELATION, filter);
        if (result) continue;
        await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].insertRecord */ .Z.insertRecord(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.INTERNSHIP_INSTRUCTOR_RELATION */ .Ul.INTERNSHIP_INSTRUCTOR_RELATION, {
          internshipId: internshipRecord.id,
          instructorId: instructor.id
        });
      }
    }

    res.status(201).json(internshipRecord);
  } catch (error) {
    console.log('🚀 ~ file: internships.ts ~ error:', error);
    return res.status(500).json({
      error: `Internal error: ${error.message}`
    });
  }
};

const updateInternship = async (req, res) => {
  try {
    const {
      id,
      year,
      name,
      description,
      image,
      instructors
    } = req.body; // Validate year object

    if (year && _const__WEBPACK_IMPORTED_MODULE_0__/* .VALID_YEAR_REGEX.test */ .FM.test(String(year)) === false) {
      return res.status(400).json({
        error: 'Invalid Year'
      });
    } // validate inputs


    if (!id || !year || !name || !description) {
      return res.status(400).json({
        error: 'Invalid Internship'
      });
    }

    const updatedInternship = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].updateRecord */ .Z.updateRecord(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.INTERNSHIPS */ .Ul.INTERNSHIPS, id, {
      year,
      name,
      description,
      image
    });
    if (!updatedInternship) throw new Error('Internship update failed');
    const filter = `internshipId = "${updatedInternship.id}"`;
    const result = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByFilter */ .Z.findByFilter(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.INTERNSHIP_INSTRUCTOR_RELATION */ .Ul.INTERNSHIP_INSTRUCTOR_RELATION, filter, true);

    for await (const relation of result) {
      await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].deleteRecord */ .Z.deleteRecord(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.INTERNSHIP_INSTRUCTOR_RELATION */ .Ul.INTERNSHIP_INSTRUCTOR_RELATION, relation.id);
    }

    if (instructors?.length) {
      for await (const instructor of instructors) {
        const filter = `internshipId = "${updatedInternship.id}" && instructorId = "${instructor.id}"`;
        const result = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByFilter */ .Z.findByFilter(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.INTERNSHIP_INSTRUCTOR_RELATION */ .Ul.INTERNSHIP_INSTRUCTOR_RELATION, filter);
        if (result) continue;
        await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].insertRecord */ .Z.insertRecord(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.INTERNSHIP_INSTRUCTOR_RELATION */ .Ul.INTERNSHIP_INSTRUCTOR_RELATION, {
          internshipId: updatedInternship.id,
          instructorId: instructor.id
        });
      } // const unpdatedInternshipWithInstructors = await pocketDbService.getRecord(
      //   COLLECTIONS.INTERNSHIPS,
      //   id,
      //   {expand: 'instructorId'}
      // )
      // return res.status(200).json(unpdatedInternshipWithInstructors)

    }

    if (result?.length) {
      const instructors = [];

      for await (const instructorRelation of result) {
        const instructor = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getRecord */ .Z.getRecord(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.INSTRUCTORS */ .Ul.INSTRUCTORS, instructorRelation.instructorId);
        instructors.push(instructor);
      }

      updatedInternship.instructors = instructors;
    }

    res.status(200).json(updatedInternship);
  } catch (error) {
    console.log('🚀 ~ file: internships.ts ~ error:', error);
    return res.status(500).json({
      error: `Internal error: ${error.message}`
    });
  }
};

const deleteInternship = async (req, res) => {
  try {
    const {
      id
    } = req.query;
    const deletedInternship = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].deleteRecord */ .Z.deleteRecord(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.INTERNSHIPS */ .Ul.INTERNSHIPS, id);
    res.status(200).json(deletedInternship);
  } catch (error) {
    console.log('🚀 ~ file: internships.ts ~ error:', error);
    return res.status(500).json({
      error: `Internal error: ${error.message}`
    });
  }
};

const checkedCreateInternship = (0,_backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(createInternship);
const checkedUpdateInternship = (0,_backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(updateInternship);
const checkedDeleteInternship = (0,_backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(deleteInternship);
function handler(req, res) {
  const {
    method
  } = req;

  switch (method) {
    case 'GET':
      return getInterships(req, res);

    case 'POST':
      return checkedCreateInternship(req, res);

    case 'PUT':
      return checkedUpdateInternship(req, res);

    case 'DELETE':
      return checkedDeleteInternship(req, res);

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).json({
        error: `Method ${method} Not Allowed`,
        links: _const__WEBPACK_IMPORTED_MODULE_0__/* .INTERNSHIP_LINKS */ .RC
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
var __webpack_exports__ = __webpack_require__.X(0, [2733,7351,7677], () => (__webpack_exec__(9359)));
module.exports = __webpack_exports__;

})();