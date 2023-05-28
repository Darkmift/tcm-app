"use strict";
(() => {
var exports = {};
exports.id = 2078;
exports.ids = [2078];
exports.modules = {

/***/ 3895:
/***/ ((module) => {

module.exports = import("pocketbase");;

/***/ }),

/***/ 7776:
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



const getYears = async (req, res) => {
  try {
    const years = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getCollection */ .Z.getCollection(_const__WEBPACK_IMPORTED_MODULE_1__/* .COLLECTIONS.YEARS_AUTH */ .Ul.YEARS_AUTH);
    res.status(200).json({
      years
    });
  } catch (error) {
    console.log('🚀 ~ file: metadata.ts:45 ~ error:', error);
    return res.status(500).json({
      error: 'internal error: ' + error.message
    });
  }
};

const createYear = async (req, res) => {
  try {
    const {
      year,
      is_enabled
    } = req.body; // validate year object

    if (_const__WEBPACK_IMPORTED_MODULE_1__/* .VALID_YEAR_REGEX.test */ .FM.test(year) === false) {
      return res.status(400).json({
        error: 'Invalid Year'
      });
    }

    const existingYear = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByFilter */ .Z.findByFilter(_const__WEBPACK_IMPORTED_MODULE_1__/* .COLLECTIONS.YEARS_AUTH */ .Ul.YEARS_AUTH, `year = ${year}`);

    if (existingYear) {
      return res.status(400).json({
        error: 'Year exists'
      });
    }

    const newYear = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].insertRecord */ .Z.insertRecord(_const__WEBPACK_IMPORTED_MODULE_1__/* .COLLECTIONS.YEARS_AUTH */ .Ul.YEARS_AUTH, {
      year,
      is_enabled
    });
    res.status(201).json(newYear);
  } catch (error) {
    console.log('🚀 ~ file: metadata.ts:45 ~ error:', error);
    return res.status(500).json({
      error: 'internal error: ' + error.message
    });
  }
};

const updateYear = async (req, res) => {
  try {
    const {
      year,
      is_enabled
    } = req.body;
    const {
      id
    } = req.query; // validate year object

    if (!year) {
      return res.status(400).json({
        error: 'Year object is required'
      });
    }

    const updatedYear = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].updateRecord */ .Z.updateRecord(_const__WEBPACK_IMPORTED_MODULE_1__/* .COLLECTIONS.YEARS_AUTH */ .Ul.YEARS_AUTH, id, {
      year,
      is_enabled
    });
    res.status(200).json(updatedYear);
  } catch (error) {
    console.log('🚀 ~ file: metadata.ts:45 ~ error:', error);
    return res.status(500).json({
      error: 'internal error: ' + error.message
    });
  }
};

const deleteYear = async (req, res) => {
  try {
    const id = req.query.id;
    const deletedYear = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].deleteRecord */ .Z.deleteRecord(_const__WEBPACK_IMPORTED_MODULE_1__/* .COLLECTIONS.YEARS_AUTH */ .Ul.YEARS_AUTH, id);
    res.status(200).json(deletedYear);
  } catch (error) {
    console.log('🚀 ~ file: metadata.ts:45 ~ error:', error);
    return res.status(500).json({
      error: 'internal error: ' + error.message
    });
  }
};

async function handler(req, res) {
  const {
    method
  } = req;

  switch (method) {
    case 'GET':
      return getYears(req, res);

    case 'POST':
      return createYear(req, res);

    case 'PUT':
      return updateYear(req, res);

    case 'DELETE':
      return deleteYear(req, res);

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
var __webpack_exports__ = __webpack_require__.X(0, [2733,7351], () => (__webpack_exec__(7776)));
module.exports = __webpack_exports__;

})();