"use strict";
exports.id = 3125;
exports.ids = [3125];
exports.modules = {

/***/ 4148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8677);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5893);








function FileInputFormikMUI({
  onChange,
  item,
  touched,
  errors,
  originalFileSrc
}) {
  const defaultImg = _const__WEBPACK_IMPORTED_MODULE_4__/* .IMAGE_ASSETS_FOLDER_PATH */ .LT + '/projects/default-project-img.jpg'; // added state to hold the image file url

  const {
    0: imageSrc,
    1: setImageSrc
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(originalFileSrc);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setImageSrc(originalFileSrc);
  }, [originalFileSrc]); // function to convert File object to url

  const getFileUrl = file => {
    return URL.createObjectURL(file);
  };

  const handleOnChange = event => {
    const fileList = event.target.files;

    if (fileList && fileList.length > 0) {
      const file = fileList[0]; // set the image source url state

      setImageSrc(getFileUrl(file)); // call props onChange to pass the File object

      onChange({
        currentTarget: {
          name: item,
          files: [file],
          value: file
        }
      });
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
    name: item,
    children: ({
      field
    }) => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
        fullWidth: true,
        margin: "normal",
        error: touched[item] && Boolean(errors[item]),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Grid, {
          container: true,
          spacing: 2,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Grid, {
            item: true,
            xs: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
              width: 175,
              height: 175,
              src: imageSrc || defaultImg,
              alt: item
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Grid, {
            item: true,
            xs: 10,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TextField, {
              sx: {
                py: 1
              },
              fullWidth: true,
              variant: "standard",
              id: item,
              name: field.name,
              onChange: handleOnChange // value={field.value || ''}
              ,
              label: field.name.toUpperCase(),
              type: "file",
              InputLabelProps: {
                shrink: item === 'image'
              },
              error: touched[item] && Boolean(errors[item]),
              helperText: touched[item] && errors[item]
            })
          })]
        })
      });
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileInputFormikMUI);

/***/ }),

/***/ 8195:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ processImage)
/* harmony export */ });
/* harmony import */ var _Services_HttpService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3390);
/* harmony import */ var _Services_HttpService_StudentHttpService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3143);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Services_HttpService__WEBPACK_IMPORTED_MODULE_0__, _Services_HttpService_StudentHttpService__WEBPACK_IMPORTED_MODULE_1__]);
([_Services_HttpService__WEBPACK_IMPORTED_MODULE_0__, _Services_HttpService_StudentHttpService__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


async function processImage({
  title,
  collectionName,
  imageFile,
  studentUsername,
  studentProject,
  originalFilename
}) {
  try {
    if (studentUsername) {
      if (originalFilename) {
        ;
        imageFile.imageUrlUpdate = originalFilename;
      }

      return await _Services_HttpService_StudentHttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].updateStudentImage */ .Z.updateStudentImage({
        title: studentUsername,
        collection: collectionName,
        file: imageFile,
        studentUsername,
        studentProject: studentProject
      });
    }

    return await _Services_HttpService__WEBPACK_IMPORTED_MODULE_0__/* ["default"].createImage */ .Z.createImage(title, collectionName, imageFile);
  } catch (error) {
    console.log('🚀 ~ file: ProjectForm.tsx:136 ~ handleSubmit ~ error:', error);
    return null;
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ urlToFile)
/* harmony export */ });
function urlToFile(url, filename, mimeType) {
  return fetch(url).then(res => res.arrayBuffer()).then(buf => new File([buf], filename, {
    type: mimeType
  }));
}

/***/ })

};
;