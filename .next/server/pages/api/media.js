"use strict";
(() => {
var exports = {};
exports.id = 7205;
exports.ids = [7205];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 3895:
/***/ ((module) => {

module.exports = import("pocketbase");;

/***/ }),

/***/ 7584:
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




const getAllMedia = async (req, res) => {
  try {
    const Media = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getCollection */ .Z.getCollection(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.MEDIA */ .Ul.MEDIA);
    res.status(200).json(Media);
  } catch (error) {
    console.error('🚀 ~ error ~ file: Media.ts ~ line 13 ~ getAllMedia ~ error', error);
    res.status(500).json({
      error: `Internal error: ${error.message}`
    });
  }
};

const createMedia = async (req, res) => {
  try {
    const {
      url,
      desc,
      heading
    } = req.body;

    if (!url || !heading) {
      return res.status(400).json({
        error: 'Missing url/heading'
      });
    }

    const memberRecord = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].insertRecord */ .Z.insertRecord(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.MEDIA */ .Ul.MEDIA, {
      url,
      desc,
      heading
    });
    res.status(201).json(memberRecord);
  } catch (error) {
    console.error('🚀 ~ error ~ file: Media.ts ~ line 33 ~ createMember ~ error', error);
    res.status(500).json({
      error: `Internal error: ${error.message}`
    });
  }
};

const updateMedia = async (req, res) => {
  try {
    const {
      id
    } = req.query;
    const {
      url,
      desc,
      heading
    } = req.body;

    if (!url || !heading) {
      return res.status(400).json({
        error: 'Missing url/heading'
      });
    }

    const updatedMember = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].updateRecord */ .Z.updateRecord(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.MEDIA */ .Ul.MEDIA, id, {
      url,
      desc,
      heading
    });
    res.status(200).json(updatedMember);
  } catch (error) {
    console.error('🚀 ~ error ~ file: Media.ts ~ line 58 ~ updateMedia ~ error', error);
    res.status(500).json({
      error: `Internal error: ${error.message}`
    });
  }
};

const deleteMedia = async (req, res) => {
  try {
    const {
      id
    } = req.query;
    const deletedMedia = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].deleteRecord */ .Z.deleteRecord(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.MEDIA */ .Ul.MEDIA, id);
    res.status(200).json(deletedMedia);
  } catch (error) {
    console.error('🚀 ~ error ~ file: Media.ts ~ line 74 ~ deleteMedia ~ error', error);
    res.status(500).json({
      error: `Internal error: ${error.message}`
    });
  }
};

const checkedCreateMember = (0,_backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(createMedia);
const checkedUpdateMember = (0,_backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(updateMedia);
const checkedDeleteMember = (0,_backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(deleteMedia);
function handler(req, res) {
  const {
    method
  } = req;

  switch (method) {
    case 'GET':
      return getAllMedia(req, res);

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
var __webpack_exports__ = __webpack_require__.X(0, [2733,7351,7677], () => (__webpack_exec__(7584)));
module.exports = __webpack_exports__;

})();