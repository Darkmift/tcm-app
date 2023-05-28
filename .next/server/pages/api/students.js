"use strict";
(() => {
var exports = {};
exports.id = 9567;
exports.ids = [9567];
exports.modules = {

/***/ 3895:
/***/ ((module) => {

module.exports = import("pocketbase");;

/***/ }),

/***/ 9340:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2733);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7351);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__]);
_backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const getStudents = async (req, res) => {
  try {
    const students = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getCollection */ .Z.getCollection(_const__WEBPACK_IMPORTED_MODULE_1__/* .COLLECTIONS.AUTH */ .Ul.AUTH, {
      filter: `role="User"`
    });
    students.forEach((s, i, self) => {
      const newStudent = structuredClone(s);
      delete newStudent.password;
      delete newStudent.collectionId;
      delete newStudent.collectionName;
      delete newStudent.role;
      delete newStudent.expand;
      delete newStudent.created;
      self[i] = newStudent;
    });
    console.log('🚀 ~ file: students.ts:24 ~ students:', students);
    return res.status(200).json({
      students
    });
  } catch (error) {
    console.error('Error getting instructors', error);
    return res.status(500).json({
      error: `Internal server error: ${error.message}`
    });
  }
};
/*
const createInstructor = async (
  req: NextApiRequest,
  res: NextApiResponse<Instructor | {error: string; statusCode?: number}>
) => {
  try {
    const {
      body: {name, image, year, description},
    } = req

    if (!name || !image || !year || !description) {
      return res.status(400).json({error: 'Invalid Instructor'})
    }

    const newInstructor: InsertInstructor = {name, image, year, description}
    const createdInstructor = await pocketDbService.insertRecord(
      COLLECTIONS.INSTRUCTORS,
      {...newInstructor, year: year.year}
    )

    return res.status(201).json(createdInstructor as Instructor)
  } catch (error) {
    console.error('Error creating new instructor', error)
    return res
      .status(500)
      .json({error: `Internal server error: ${(error as Error).message}`})
  }
}

const updateInstructor = async (
  req: NextApiRequest,
  res: NextApiResponse<Instructor | {error: string; statusCode?: number}>
) => {
  try {
    const {
      query: {id},
      body: {name, image, year, description},
    } = req
    const updatedFields: Partial<Instructor> = {}

    if (name) updatedFields.name = name
    if (image) updatedFields.image = image
    if (year) updatedFields.year = Number(year)
    if (description) updatedFields.description = description

    if (Object.keys(updatedFields).length === 0) {
      return res.status(400).json({error: 'At least one field must be updated'})
    }

    const updatedInstructor = await pocketDbService.updateRecord(
      COLLECTIONS.INSTRUCTORS,
      id as string,
      updatedFields
    )
    return res.status(200).json(updatedInstructor)
  } catch (error) {
    console.error(`Error updating instructor with ID ${req.query.id}`, error)
    return res
      .status(500)
      .json({error: `Internal server error: ${(error as Error).message}`})
  }
}

const deleteInstructor = async (
  req: NextApiRequest,
  res: NextApiResponse<{message: string} | {error: string; statusCode?: number}>
) => {
  try {
    const {
      query: {id},
    } = req
    await pocketDbService.deleteRecord(COLLECTIONS.INSTRUCTORS, id as string)
    return res
      .status(200)
      .json({message: `Instructor with ID ${id} deleted successfully`})
  } catch (error) {
    console.error(`Error deleting instructor with ID ${req.query.id}`, error)
    return res
      .status(500)
      .json({error: `Internal server error: ${(error as Error).message}`})
  }
}

const checkedCreateInstructor = checkAuthMiddleware(createInstructor)
const checkedDeleteInstructor = checkAuthMiddleware(deleteInstructor)
const checkedUpdateInstructor = checkAuthMiddleware(updateInstructor)
*/


function handler(req, res) {
  const {
    method
  } = req;

  switch (method) {
    case 'GET':
      return getStudents(req, res);
    // case 'POST':
    //   return checkedCreateInstructor(req, res)
    // case 'PUT':
    //   return checkedUpdateInstructor(req, res)
    // case 'DELETE':
    //   return checkedDeleteInstructor(req, res)

    default:
      res.setHeader('Allow', ['GET'
      /*, 'POST', 'PUT', 'DELETE'*/
      ]);
      return res.status(405).json({
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
var __webpack_exports__ = __webpack_require__.X(0, [2733,7351], () => (__webpack_exec__(9340)));
module.exports = __webpack_exports__;

})();