"use strict";
(() => {
var exports = {};
exports.id = 738;
exports.ids = [738];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 3895:
/***/ ((module) => {

module.exports = import("pocketbase");;

/***/ }),

/***/ 1290:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2733);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7351);
/* harmony import */ var _backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7677);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__]);
_backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const getInstructors = async (req, res) => {
  try {
    const {
      year
    } = req.query;
    const instructors = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getCollection */ .Z.getCollection(_const__WEBPACK_IMPORTED_MODULE_1__/* .COLLECTIONS.INSTRUCTORS */ .Ul.INSTRUCTORS, {
      filter: `year=${year}`
    });
    return res.status(200).json({
      instructors
    });
  } catch (error) {
    console.error('Error getting instructors', error);
    return res.status(500).json({
      error: `Internal server error: ${error.message}`
    });
  }
};

const createInstructor = async (req, res) => {
  try {
    const {
      body: {
        name,
        image,
        year,
        description
      }
    } = req;

    if (!name || !image || !year || !description) {
      return res.status(400).json({
        error: 'Invalid Instructor'
      });
    }

    const newInstructor = {
      name,
      image,
      year,
      description
    };
    const createdInstructor = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].insertRecord */ .Z.insertRecord(_const__WEBPACK_IMPORTED_MODULE_1__/* .COLLECTIONS.INSTRUCTORS */ .Ul.INSTRUCTORS, _objectSpread(_objectSpread({}, newInstructor), {}, {
      year: year.year
    }));
    return res.status(201).json(createdInstructor);
  } catch (error) {
    console.error('Error creating new instructor', error);
    return res.status(500).json({
      error: `Internal server error: ${error.message}`
    });
  }
};

const updateInstructor = async (req, res) => {
  try {
    const {
      query: {
        id
      },
      body: {
        name,
        image,
        year,
        description
      }
    } = req;
    const updatedFields = {};
    if (name) updatedFields.name = name;
    if (image) updatedFields.image = image;
    if (year) updatedFields.year = Number(year);
    if (description) updatedFields.description = description;

    if (Object.keys(updatedFields).length === 0) {
      return res.status(400).json({
        error: 'At least one field must be updated'
      });
    }

    const updatedInstructor = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].updateRecord */ .Z.updateRecord(_const__WEBPACK_IMPORTED_MODULE_1__/* .COLLECTIONS.INSTRUCTORS */ .Ul.INSTRUCTORS, id, updatedFields);
    return res.status(200).json(updatedInstructor);
  } catch (error) {
    console.error(`Error updating instructor with ID ${req.query.id}`, error);
    return res.status(500).json({
      error: `Internal server error: ${error.message}`
    });
  }
};

const deleteInstructor = async (req, res) => {
  try {
    const {
      query: {
        id
      }
    } = req;
    await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].deleteRecord */ .Z.deleteRecord(_const__WEBPACK_IMPORTED_MODULE_1__/* .COLLECTIONS.INSTRUCTORS */ .Ul.INSTRUCTORS, id);
    return res.status(200).json({
      message: `Instructor with ID ${id} deleted successfully`
    });
  } catch (error) {
    console.error(`Error deleting instructor with ID ${req.query.id}`, error);
    return res.status(500).json({
      error: `Internal server error: ${error.message}`
    });
  }
};

const checkedCreateInstructor = (0,_backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(createInstructor);
const checkedDeleteInstructor = (0,_backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(deleteInstructor);
const checkedUpdateInstructor = (0,_backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(updateInstructor);
function handler(req, res) {
  const {
    method
  } = req;

  switch (method) {
    case 'GET':
      return getInstructors(req, res);

    case 'POST':
      return checkedCreateInstructor(req, res);

    case 'PUT':
      return checkedUpdateInstructor(req, res);

    case 'DELETE':
      return checkedDeleteInstructor(req, res);

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
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
var __webpack_exports__ = __webpack_require__.X(0, [2733,7351,7677], () => (__webpack_exec__(1290)));
module.exports = __webpack_exports__;

})();