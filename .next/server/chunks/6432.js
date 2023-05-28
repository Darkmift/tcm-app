"use strict";
exports.id = 6432;
exports.ids = [6432];
exports.modules = {

/***/ 6432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NavbarDropDown)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8125);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5893);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function NavbarDropDown({
  links,
  sx,
  dropDownName = 'links',
  onDropDownOptionClick,
  btnVariant
}) {
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = evt => {
    setAnchorEl(evt.currentTarget);
  };

  const handleClose = (evt, payload) => {
    if (onDropDownOptionClick && payload) {
      onDropDownOptionClick(payload, evt);
    }

    setAnchorEl(null);
  };

  if (!links.length) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {});
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    sx: sx?.box,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
      sx: _objectSpread({
        color: 'primary'
      }, sx?.btn),
      "aria-controls": open ? 'basic-menu' : undefined,
      "aria-haspopup": "true",
      "aria-expanded": open ? 'true' : undefined,
      onClick: handleClick,
      variant: btnVariant ? btnVariant : 'text',
      children: dropDownName
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_2___default()), {
      id: "basic-menu",
      anchorEl: anchorEl,
      open: open,
      onClose: evt => handleClose(evt, null),
      MenuListProps: {
        'aria-labelledby': 'basic-button'
      },
      sx: _objectSpread({}, sx?.dropdown),
      children: links.map(link => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        onClick: evt => handleClose(evt, link),
        href: link.pathTo,
        component: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
        sx: _objectSpread({}, sx?.menuItem),
        children: link.name
      }, link.name))
    })]
  });
}

/***/ })

};
;