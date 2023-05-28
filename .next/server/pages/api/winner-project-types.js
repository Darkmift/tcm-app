"use strict";
(() => {
var exports = {};
exports.id = 2945;
exports.ids = [2945];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 3895:
/***/ ((module) => {

module.exports = import("pocketbase");;

/***/ }),

/***/ 3043:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2733);
/* harmony import */ var _backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7677);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7351);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__]);
_backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


 // import
// Handler to get all winner project types

const getAllWinnerProjectTypes = async (req, res) => {
  try {
    const winnerProjectTypes = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getCollection */ .Z.getCollection(_const__WEBPACK_IMPORTED_MODULE_2__/* .COLLECTIONS.WINNER_PROJECT_TYPES */ .Ul.WINNER_PROJECT_TYPES);
    res.status(200).json({
      winnerProjectTypes
    });
  } catch (error) {
    console.log('🚀 ~ file: winnerProjectTypes.ts ~ line 11 ~ error', error);
    return res.status(500).json({
      error: `Internal error: ${error.message}`
    });
  }
}; // Handler to create a new winner project type


const createWinnerProjectType = async (req, res) => {
  try {
    // Extract necessary fields from request body
    const {
      icon,
      name,
      year
    } = req.body;

    if (!icon || !name || !year) {
      return res.status(400).json({
        error: 'Please provide an icon, name, and year'
      });
    }

    const createdWinnerProjectType = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].insertRecord */ .Z.insertRecord(_const__WEBPACK_IMPORTED_MODULE_2__/* .COLLECTIONS.WINNER_PROJECT_TYPES */ .Ul.WINNER_PROJECT_TYPES, {
      icon,
      name,
      year
    });
    res.status(201).json(createdWinnerProjectType);
  } catch (error) {
    console.log('🚀 ~ file: winnerProjectTypes.ts ~ line 40 ~ error', error);
    return res.status(500).json({
      error: `Internal error: ${error.message}`
    });
  }
}; // Handler to update an existing winner project type


const updateWinnerProjectType = async (req, res) => {
  try {
    const {
      id,
      icon,
      name,
      year
    } = req.body;

    if (!id || !icon || !name || !year) {
      return res.status(400).json({
        error: 'Please provide an id, icon, name, and year'
      });
    }

    const updatedWinnerProjectType = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].updateRecord */ .Z.updateRecord(_const__WEBPACK_IMPORTED_MODULE_2__/* .COLLECTIONS.WINNER_PROJECT_TYPES */ .Ul.WINNER_PROJECT_TYPES, id, {
      icon,
      name,
      year
    });
    res.status(200).json(updatedWinnerProjectType);
  } catch (error) {
    console.log('🚀 ~ file: winnerProjectTypes.ts ~ line 68 ~ error', error);
    return res.status(500).json({
      error: `Internal error: ${error.message}`
    });
  }
}; // Handler to delete an existing winner project type


const deleteWinnerProjectType = async (req, res) => {
  try {
    const {
      id
    } = req.query;
    const deletedWinnerProjectType = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].deleteRecord */ .Z.deleteRecord(_const__WEBPACK_IMPORTED_MODULE_2__/* .COLLECTIONS.WINNER_PROJECT_TYPES */ .Ul.WINNER_PROJECT_TYPES, id);
    res.status(200).json(deletedWinnerProjectType);
  } catch (error) {
    console.log('🚀 ~ file: winnerProjectTypes.ts ~ line 86 ~ error', error);
    return res.status(500).json({
      error: `Internal error: ${error.message}`
    });
  }
}; // Use the checkAuthMiddleware to protect the create/update/delete routes


const checkedCreateWinnerProjectType = (0,_backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(createWinnerProjectType);
const checkedUpdateWinnerProjectType = (0,_backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(updateWinnerProjectType);
const checkedDeleteWinnerProjectType = (0,_backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(deleteWinnerProjectType);
function handler(req, res) {
  const {
    method
  } = req;

  switch (method) {
    case 'GET':
      return getAllWinnerProjectTypes(req, res);

    case 'POST':
      return checkedCreateWinnerProjectType(req, res);

    case 'PUT':
      return checkedUpdateWinnerProjectType(req, res);

    case 'DELETE':
      return checkedDeleteWinnerProjectType(req, res);

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
var __webpack_exports__ = __webpack_require__.X(0, [2733,7351,7677], () => (__webpack_exec__(3043)));
module.exports = __webpack_exports__;

})();