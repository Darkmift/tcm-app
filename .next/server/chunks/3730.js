"use strict";
exports.id = 3730;
exports.ids = [3730];
exports.modules = {

/***/ 3730:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Types
// react
 // react-hook-form

 // mui





function FormToJson({
  formData,
  submitBtnText,
  style = {},
  submitHandler,
  formButton = null
}) {
  const {
    handleSubmit,
    register
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();

  const saveData = data => {
    if (submitHandler) {
      console.log('🚀 ~ file: FormToJson.js:11 ~ saveData ~ data:', data);
      submitHandler(data);
    } else {
      console.warn('submit method not implemented', {
        data
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
    component: "form",
    style: style,
    onSubmit: handleSubmit(saveData),
    sx: {
      pt: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '30px'
    },
    children: [formData.map(({
      Component,
      extraProps = {},
      name,
      type,
      items,
      placeholder,
      isDropdown
    }, index) => {
      return isDropdown ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Component, _objectSpread({
        name: name,
        items: items,
        register: register
      }, extraProps), index) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, _objectSpread(_objectSpread(_objectSpread({
        placeholder: placeholder,
        variant: "standard",
        type: type || 'text'
      }, register(name, {
        required: true
      })), extraProps), {}, {
        sx: _objectSpread({
          minHeight: 25,
          '& .MuiTextField-root': {
            width: '25ch'
          }
        }, extraProps?.sx),
        inputProps: {
          style: _objectSpread({
            padding: 10
          }, extraProps?.inputProps?.style)
        }
      }), index);
    }), formButton ? formButton : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: "contained",
      type: "submit",
      children: submitBtnText || 'Submit'
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormToJson);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;