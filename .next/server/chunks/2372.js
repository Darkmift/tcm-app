"use strict";
exports.id = 2372;
exports.ids = [2372];
exports.modules = {

/***/ 2372:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1106);
/* harmony import */ var _store_project_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9807);
/* harmony import */ var _utilities_isObject__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4457);
/* harmony import */ var _utilities_ProcessImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8195);
/* harmony import */ var _FormikUI_InputFormikMUI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8025);
/* harmony import */ var _FormikUI_SelectFormikMUI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(113);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6072);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_lab__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _UI_AutoCloseSnackBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(190);
/* harmony import */ var _utilities_urlToFile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8270);
/* harmony import */ var _FormikUI_FileInputFormikMUI__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4148);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_4__, _store_project_slice__WEBPACK_IMPORTED_MODULE_5__, _utilities_ProcessImage__WEBPACK_IMPORTED_MODULE_6__]);
([_store__WEBPACK_IMPORTED_MODULE_4__, _store_project_slice__WEBPACK_IMPORTED_MODULE_5__, _utilities_ProcessImage__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const validationSchema = yup__WEBPACK_IMPORTED_MODULE_3__.object({
  name: yup__WEBPACK_IMPORTED_MODULE_3__.string().required('Name is required'),
  description: yup__WEBPACK_IMPORTED_MODULE_3__.string().required('Name is required'),
  image: yup__WEBPACK_IMPORTED_MODULE_3__.mixed(),
  year: yup__WEBPACK_IMPORTED_MODULE_3__.number().min(2000, 'year is too early').max(2100, 'year is too late'),
  members: yup__WEBPACK_IMPORTED_MODULE_3__.array(),
  internshipId: yup__WEBPACK_IMPORTED_MODULE_3__.mixed().test('is-internship', 'Select an internship', value => {
    if ((0,_utilities_isObject__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(value) === false) {
      return true;
    }

    return !value || 'id' in value && 'name' in value;
  }),
  instructorId: yup__WEBPACK_IMPORTED_MODULE_3__.mixed().test('is-instructor', 'Select an instructor', value => {
    if ((0,_utilities_isObject__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(value) === false) {
      return true;
    }

    return !value || 'id' in value && 'name' in value;
  })
});
const simpleFields = ['name', 'description', 'year'];

const validate = values => {
  // for some fucking reason I need this to properly submit
  return {};
};

function ProjectUpdateForm({
  project,
  studentUsername
}) {
  const initialValues = {
    description: project.description,
    image: undefined,
    name: project.name,
    year: project.year,
    members: project.members,
    instructorId: project.expand && project.expand?.instructorId ? [project.expand.instructorId] : [],
    internshipId: project.expand && project.expand?.internshipId ? [project.expand.internshipId] : []
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function setImageFromUrl() {
      try {
        const url = project.image;
        const filename = url.substring(url.lastIndexOf('/') + 1);
        const type = filename.split('.')[1];
        const mimeType = `image/${type}`;
        const file = await (0,_utilities_urlToFile__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(url, filename, mimeType);

        if (file?.size) {
          initialValues.image = file;
        }
      } catch (error) {
        console.log('🚀 ~ file: ProjectUpdateForm.tsx:101 ~ setImageFromUrl ~ error:', error);
      }
    }

    console.log('🚀 ~ file: ProjectUpdateForm.tsx:115 ~ ProjectUpdateForm ~ project.image:', project.image);
    setImageFromUrl(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project.image]);
  const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
  const memberRedux = (0,_store__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)(state => state.members.members);
  const internshipsRedux = (0,_store__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)(state => state.internships.internships);
  const instructorsRedux = (0,_store__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .CG)(state => state.instructors.allInstructors);
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: snackBarState,
    1: setSnackBarState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    severity: 'info',
    open: false,
    msg: ''
  });
  const {
    0: loadingStatus,
    1: setLoadingStatus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const selectFields = [{
    name: 'members',
    multiple: true,
    values: memberRedux,
    optionLabelKey: 'name',
    optionIdKey: 'id'
  }, {
    name: 'instructorId',
    multiple: false,
    values: instructorsRedux,
    optionLabelKey: 'name',
    optionIdKey: 'id'
  }, {
    name: 'internshipId',
    multiple: false,
    values: internshipsRedux,
    optionLabelKey: 'name',
    optionIdKey: 'id'
  }];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let timer;

    if (snackBarState.open) {
      timer = setTimeout(() => {
        setSnackBarState(_objectSpread(_objectSpread({}, snackBarState), {}, {
          open: false
        }));
      }, 4000);
    }

    return () => clearTimeout(timer);
  }, [snackBarState]);
  const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  const handleSubmit = async (values, actions) => {
    try {
      setErrorMsg('');
      setLoadingStatus(true);

      const projectFormData = _objectSpread(_objectSpread({}, project), structuredClone(values));

      if (projectFormData.image?.size) {
        console.log('🚀 ~ file: ProjectUpdateForm.tsx:186 ~ handleSubmit ~ projectFormData.image:', projectFormData.image);
        const imageData = await (0,_utilities_ProcessImage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
          title: projectFormData.name,
          collectionName: 'projects',
          imageFile: projectFormData.image,
          studentUsername,
          studentProject: project
        });
        if (imageData === null) throw new Error('Failed to save image');
        projectFormData.image = imageData.url;
      }

      if (studentUsername?.length) {
        dispatch((0,_store_project_slice__WEBPACK_IMPORTED_MODULE_5__/* .updateStudentProject */ .Xm)(projectFormData)).unwrap().then(data => {
          console.log('🚀 ~ file: ProjectForm.tsx:144 ~ .then ~ data:', data);
          setSnackBarState({
            severity: 'success',
            open: true,
            msg: 'update complete'
          });
          actions.setSubmitting(false);
          actions.resetForm({
            values: initialValues
          });

          if (fileInputRef.current) {
            fileInputRef.current.value = '';
          }
        }).catch(err => {
          setErrorMsg(err.message);
          setSnackBarState({
            severity: 'error',
            open: false,
            msg: err.message
          });
        }).finally(() => {
          setLoadingStatus(false);
        });
        return;
      }

      dispatch((0,_store_project_slice__WEBPACK_IMPORTED_MODULE_5__/* .updateProject */ .ty)(projectFormData)).unwrap().then(data => {
        console.log('🚀 ~ file: ProjectForm.tsx:144 ~ .then ~ data:', data);
        setSnackBarState({
          severity: 'success',
          open: true,
          msg: 'update complete'
        });
        actions.setSubmitting(false);
        actions.resetForm({
          values: initialValues
        });

        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }).catch(err => {
        setErrorMsg(err.message);
        setSnackBarState({
          severity: 'error',
          open: false,
          msg: err.message
        });
      }).finally(() => {
        setLoadingStatus(false);
      });
    } catch (error) {
      console.log('🚀 ~ file: ProjectForm.tsx:167 ~ handleSubmit ~ error:', error);
      setErrorMsg(error.message);
    } finally {
      setLoadingStatus(false);
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
    validate: validate,
    enableReinitialize: true,
    children: props => {
      const {
        errors,
        touched,
        setFieldValue
      } = props;
      console.log('🚀 ~ file: ProjectUpdateForm.tsx:242 ~ ProjectUpdateForm ~ props:', props);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {
        children: [simpleFields.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_FormikUI_InputFormikMUI__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          isMultiLine: item === 'description',
          rowNums: 4,
          item: item,
          touched: touched,
          errors: errors,
          disabled: item === 'year'
        }, item)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
          container: true,
          spacing: 1,
          alignItems: "stretch",
          children: selectFields.map(({
            name,
            multiple,
            values,
            optionLabelKey,
            optionIdKey
          }, key) => {
            const keyItem = name;
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
              item: true,
              xs: 6,
              alignItems: "center",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_FormikUI_SelectFormikMUI__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                optionLabelKey,
                optionIdKey,
                isMultiLine: multiple,
                options: values,
                item: name,
                touched,
                errors
              })
            }, key);
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_FormikUI_FileInputFormikMUI__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          onChange: event => {
            const file = event.currentTarget.files[0];
            console.log('🚀 ~ file: ProjectUpdateForm.tsx:292 ~ ProjectUpdateForm ~ file:', file);
            setFieldValue('image', file);
          },
          item: 'image',
          touched,
          errors,
          originalFileSrc: project.image
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_mui_lab__WEBPACK_IMPORTED_MODULE_9__.LoadingButton, {
          fullWidth: true,
          variant: "contained",
          loading: loadingStatus,
          loadingIndicator: "Loading\u2026",
          type: "submit",
          children: "Update Project"
        }), errorMsg && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          sx: {
            p: 2,
            color: 'red'
          },
          variant: "h6",
          textAlign: "center",
          children: errorMsg
        }), snackBarState?.open && snackBarState?.msg ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_UI_AutoCloseSnackBar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          open: snackBarState.open,
          message: snackBarState.msg,
          severity: snackBarState.severity
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {})]
      });
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectUpdateForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ isObject)
/* harmony export */ });
function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
}

/***/ })

};
;