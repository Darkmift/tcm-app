"use strict";
(() => {
var exports = {};
exports.id = 5899;
exports.ids = [5899];
exports.modules = {

/***/ 2616:
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 3292:
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 7526:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7351);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3292);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2616);
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7677);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_5__]);
uuid__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const IMAGE_DIRECTORY = './public/assets/images/';
const ACCEPTED_FILE_TYPES = ['jpg', 'png'];

const parseForm = async req => new Promise((resolve, reject) => new (formidable__WEBPACK_IMPORTED_MODULE_2___default().IncomingForm)().parse(req, (err, fields, files) => err ? reject(err) : resolve([fields, files])));

const createImage = async (req, res) => {
  try {
    const [fields, files] = await parseForm(req);
    const {
      title,
      collection: Cname
    } = fields;
    const {
      imageFile
    } = files;
    const collection = Cname;

    if (!Object.values(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS */ .Ul).includes(collection)) {
      return res.status(400).json({
        error: 'Invalid collection name'
      });
    }

    if (!title || !imageFile || !collection) {
      return res.status(400).json({
        error: 'Invalid image'
      });
    }

    const id = (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)();
    const {
      originalFilename
    } = imageFile;

    if (!originalFilename) {
      throw new Error('failed processing file name');
    }

    const extension = originalFilename.split('.').pop();

    if (!extension || !ACCEPTED_FILE_TYPES.includes(extension)) {
      return res.status(400).json({
        error: 'Invalid file type',
        extension,
        imageFile,
        originalFilename
      });
    }

    const filename = `${id}.${extension}`;
    const filePath = path__WEBPACK_IMPORTED_MODULE_3___default().join(IMAGE_DIRECTORY, collection, filename);
    const imageBuffer = await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().readFile(imageFile.filepath);
    await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().writeFile(filePath, imageBuffer);
    const imagePath = path__WEBPACK_IMPORTED_MODULE_3___default().join('/assets/images/', collection, filename);
    const regex = /\\/g;
    const formattedImagePath = imagePath.replace(regex, '/');
    const newImage = {
      id,
      title: filename,
      url: formattedImagePath
    };
    console.log('🚀 ~ file: images.ts:70 ~ newImage:', newImage);
    return res.status(201).json(newImage);
  } catch (error) {
    console.error('Error creating new image', error);
    return res.status(500).json({
      error: `Internal server error: ${error.message}`
    });
  }
};

const getImages = async (req, res) => {
  try {
    const dirFiles = await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().readdir(IMAGE_DIRECTORY);
    const images = [];

    for (const filename of dirFiles) {
      const id = filename.split('.')[0];
      const title = id; // in this example, the title is the same as the image ID

      const url = filename;
      images.push({
        id,
        title,
        url
      });
    }

    return res.status(200).json({
      images
    });
  } catch (error) {
    console.error('Error getting images', error);
    return res.status(500).json({
      error: `Internal server error: ${error.message}`
    });
  }
};

const updateImage = async (req, res) => {
  try {
    const {
      id
    } = req.query;
    const [fields, files] = await parseForm(req);
    const {
      title,
      collection
    } = fields;
    const {
      imageFile
    } = files;

    if (!Object.values(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS */ .Ul).includes(collection)) {
      console.log('🚀 ~ createImage ~ file: images.ts:23 ~ collection:', {
        o: Object.values(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS */ .Ul),
        collection
      });
      return res.status(400).json({
        error: 'Invalid collection name'
      });
    }

    if (!title || !imageFile || !collection) {
      return res.status(400).json({
        error: 'Invalid image'
      });
    }

    const {
      originalFilename
    } = imageFile;

    if (!originalFilename) {
      throw new Error('failed processing file name');
    }

    const extension = originalFilename.split('.').pop();

    if (!extension || !ACCEPTED_FILE_TYPES.includes(extension)) {
      return res.status(400).json({
        error: 'Invalid file type',
        extension,
        imageFile,
        originalFilename
      });
    }

    const filename = `${id}.`;
    const storedFiles = await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().readdir(IMAGE_DIRECTORY);
    const fileToUpdate = storedFiles.find(file => file.includes(filename));

    if (!fileToUpdate) {
      return res.status(400).json({
        error: 'Original file not found',
        extension,
        imageFile,
        originalFilename
      });
    }

    const newPath = path__WEBPACK_IMPORTED_MODULE_3___default().join(IMAGE_DIRECTORY, fileToUpdate);
    const newFilename = `${id}.${fileToUpdate.split('.').pop()}`;
    const imageBuffer = await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().readFile(imageFile.filepath);
    await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().rename(newPath, imageBuffer);
    const updatedImage = {
      id: id,
      title: id,
      url: '/' + newFilename.replaceAll('\\', '/')
    };
    return res.status(200).json(updatedImage);
  } catch (error) {
    console.error(`Error updating image with ID ${req.query.id}`, error);
    return res.status(500).json({
      error: `Internal server error: ${error.message}`
    });
  }
};

const deleteImage = async (req, res) => {
  try {
    const {
      id,
      collection
    } = req.query;

    if (!Object.values(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS */ .Ul).includes(collection)) {
      console.log('🚀 ~ deleteImage ~ file: images.ts:134 ~ collection:', {
        o: Object.values(_const__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS */ .Ul),
        collection
      });
      return res.status(400).json({
        error: 'Invalid collectionName'
      });
    }

    const filename = `${id}.`;
    const files = await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().readdir(IMAGE_DIRECTORY);
    const fileToDelete = files.find(file => file.includes(filename));

    if (!fileToDelete) {
      return res.status(404).json({
        error: 'Image not found'
      });
    }

    await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().unlink(path__WEBPACK_IMPORTED_MODULE_3___default().join(IMAGE_DIRECTORY, fileToDelete));
    return res.status(200).json({
      message: `Image with ID ${id} deleted successfully`
    });
  } catch (error) {
    console.error(`Error deleting image with ID ${req.query.id}`, error);
    return res.status(500).json({
      error: `Internal server error: ${error.message}`
    });
  }
};

const checkedCreateImage = (0,_backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(createImage);
const checkedDeleteImage = (0,_backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(deleteImage);
const checkedUpdateImage = (0,_backend_middleware_checkIsAdmin__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(updateImage);
function handler(req, res) {
  const {
    method
  } = req;

  switch (method) {
    case 'POST':
      return checkedCreateImage(req, res);

    case 'GET':
      return getImages(req, res);

    case 'PUT':
      return checkedUpdateImage(req, res);

    case 'DELETE':
      return checkedDeleteImage(req, res);

    default:
      res.setHeader('Allow', ['POST', 'GET', 'DELETE']);
      return res.status(405).json({
        error: `Method ${method} Not Allowed`
      });
  }
} // VV important VV

const config = {
  api: {
    bodyParser: false
  }
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7351,7677], () => (__webpack_exec__(7526)));
module.exports = __webpack_exports__;

})();