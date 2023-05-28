"use strict";
(() => {
var exports = {};
exports.id = 392;
exports.ids = [392];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 3895:
/***/ ((module) => {

module.exports = import("pocketbase");;

/***/ }),

/***/ 7276:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "setInstructorsImagePath": () => (/* binding */ setInstructorsImagePath),
/* harmony export */   "setProjectFiles": () => (/* binding */ setProjectFiles)
/* harmony export */ });
/* harmony import */ var _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2733);
/* harmony import */ var _backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7677);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__]);
_backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import axios from 'axios'


async function setProjectFiles() {
  try {
    const projects = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getCollection */ .Z.getCollection('projects');

    if (!projects?.length) {
      throw new Error('not found');
    }

    const pathPrefix = '/assets/images/projects/';
    await Promise.all(projects.forEach(async project => {
      const id = project.id;
      delete project.id;

      if (project.image?.length) {
        const filePath = project.image;
        const fileName = filePath.slice(filePath.lastIndexOf('/') + 1);
        project.image = pathPrefix + fileName;
      }

      await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].updateRecord */ .Z.updateRecord('projects', id, _objectSpread({}, project));
    }));
  } catch (error) {
    console.log('🚀 ~ file: projectService.ts:120 ~ error:', error);
    return null;
  }
}
async function setInstructorsImagePath() {
  try {
    const collectionName = 'instructors';
    const dataSet = await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getCollection */ .Z.getCollection(collectionName);
    console.log('🚀 ~ file: load-test.ts:40 ~ setInstructorsImagePath ~ dataSet:', dataSet.length);

    if (!dataSet?.length) {
      throw new Error('not found');
    }

    const pathPrefix = `/assets/images/${collectionName}/`;
    await Promise.all(dataSet.forEach(async collectionRecord => {
      const id = collectionRecord.id;
      delete collectionRecord.id;

      if (collectionRecord.image?.length) {
        const filePath = collectionRecord.image;
        const fileName = filePath.slice(filePath.lastIndexOf('/') + 1);
        collectionRecord.image = pathPrefix + fileName;
      }

      await _backend_services_pocketbase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].updateRecord */ .Z.updateRecord(collectionName, id, _objectSpread({}, collectionRecord));
    }));
  } catch (error) {
    console.log('🚀 ~ file: projectService.ts:120 ~ error:', error);
    return null;
  }
} // async function storeImage(
//   projectId: string,
//   path: string,
//   collection:string,
//   imageFileName: string
// ) {
//   const url = `http://127.0.0.1:8090/api/${collection}/${projectId}`
//   try {
//     const image = await axios.get(path, {
//       responseType: 'blob',
//       headers: {'Content-Type': 'multipart/form-data'},
//     })
//     const blobImg = new Blob([image.data], {type: 'image/jpeg'})
//     const formData = new FormData()
//     formData.append('imageFile', blobImg, 'filename.jpeg')
//     const result = await axios.patch(url, formData, {
//       headers: {
//         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzkyMTQ2NjksImlkIjoiNTM2OXRjNWExbDJxYmxyIiwidHlwZSI6ImFkbWluIn0.bFwOAcv7aK6Q9ujKdqi1G38DrPTNjyYPl4mXlek_v8Y`,
//       },
//     })
//     return result
//   } catch (error: any) {
//     return error.message
//   }
// }

async function handler(req, res) {
  const result = await setInstructorsImagePath();
  res.status(200).json({
    name: 'Change instructor path',
    result
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(handler));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2733,7677], () => (__webpack_exec__(7276)));
module.exports = __webpack_exports__;

})();