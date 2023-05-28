"use strict";
exports.id = 4639;
exports.ids = [4639];
exports.modules = {

/***/ 2393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);





function getKeys(obj) {
  if (!obj) return [];
  const k = [];

  for (const key in obj) {
    k.push(key);
  }

  return k;
}

function BasicTable({
  dataset,
  customHeaders
}) {
  const headers = dataset?.[0] && customHeaders ? customHeaders : getKeys(dataset[0]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    console.log('🚀 ~ file: BasicTable.tsx:17 ~ BasicTable ~ headers:', {
      dataset,
      headers
    });
  }, [dataset]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableContainer, {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_0__.Paper,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Table, {
      "aria-label": "students table",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableHead, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableRow, {
          children: headers.map(header => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableCell, {
            children: header.toUpperCase()
          }, header))
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableBody, {
        children: dataset?.length && dataset.map((row, index) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableRow, {
            children: Object.values(row).map((value, jIndex) => {
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableCell, {
                children: typeof value === 'string' ? value : !!value ? 'True' : 'False'
              }, jIndex + '-' + index);
            })
          }, index);
        })
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BasicTable);

/***/ }),

/***/ 2593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3622);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5893);







function GoBackBtn({}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Button, {
    onClick: () => router.back(),
    sx: {
      display: 'flex',
      maxWidth: '175px',
      alignItems: 'center'
    },
    variant: "outlined",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_3___default()), {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
      sx: {
        mt: '3px',
        mx: 2
      },
      children: "Go Back"
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoBackBtn);

/***/ })

};
;