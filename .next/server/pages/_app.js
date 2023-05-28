(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 3173:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1106);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_instructors_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3354);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_0__, _store_instructors_slice__WEBPACK_IMPORTED_MODULE_2__]);
([_store__WEBPACK_IMPORTED_MODULE_0__, _store_instructors_slice__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// redux






function WatchInstructorsRedux() {
  const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_0__/* .useAppDispatch */ .TL)();
  const selectedYearRedux = (0,_store__WEBPACK_IMPORTED_MODULE_0__/* .useAppSelector */ .CG)(state => state.years.selectedYear);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dispatch((0,_store_instructors_slice__WEBPACK_IMPORTED_MODULE_2__/* .fetchAllInstructors */ .MP)(selectedYearRedux)); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYearRedux]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WatchInstructorsRedux);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6910:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1106);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_internships_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_0__, _store_internships_slice__WEBPACK_IMPORTED_MODULE_2__]);
([_store__WEBPACK_IMPORTED_MODULE_0__, _store_internships_slice__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// redux






function WatchInternshipsRedux() {
  const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_0__/* .useAppDispatch */ .TL)();
  const selectedYearRedux = (0,_store__WEBPACK_IMPORTED_MODULE_0__/* .useAppSelector */ .CG)(state => state.years.selectedYear);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dispatch((0,_store_internships_slice__WEBPACK_IMPORTED_MODULE_2__/* .fetchInternships */ .B)(selectedYearRedux)); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYearRedux]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WatchInternshipsRedux);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8084:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1106);
/* harmony import */ var _store_media_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1733);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_0__, _store_media_slice__WEBPACK_IMPORTED_MODULE_1__]);
([_store__WEBPACK_IMPORTED_MODULE_0__, _store_media_slice__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// redux






function WatchMediaRedux() {
  const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_0__/* .useAppDispatch */ .TL)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    dispatch((0,_store_media_slice__WEBPACK_IMPORTED_MODULE_1__/* .fetchMedia */ .xY)());
  }, [dispatch]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WatchMediaRedux);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2400:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1106);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_member_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8267);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_0__, _store_member_slice__WEBPACK_IMPORTED_MODULE_2__]);
([_store__WEBPACK_IMPORTED_MODULE_0__, _store_member_slice__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// redux






function WatchMembersRedux() {
  const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_0__/* .useAppDispatch */ .TL)();
  const selectedYearRedux = (0,_store__WEBPACK_IMPORTED_MODULE_0__/* .useAppSelector */ .CG)(state => state.years.selectedYear);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dispatch((0,_store_member_slice__WEBPACK_IMPORTED_MODULE_2__/* .getAllMembers */ .Ux)()); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYearRedux]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WatchMembersRedux);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5846:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1106);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_project_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9807);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_0__, _store_project_slice__WEBPACK_IMPORTED_MODULE_2__]);
([_store__WEBPACK_IMPORTED_MODULE_0__, _store_project_slice__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// redux






function WatchProjectsRedux() {
  const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_0__/* .useAppDispatch */ .TL)();
  const selectedYear = (0,_store__WEBPACK_IMPORTED_MODULE_0__/* .useAppSelector */ .CG)(state => state.years.selectedYear);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dispatch((0,_store_project_slice__WEBPACK_IMPORTED_MODULE_2__/* .fetchProjects */ .bl)(selectedYear));
  }, [dispatch, selectedYear]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WatchProjectsRedux);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7843:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1106);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Services_LocalStorageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5089);
/* harmony import */ var _store_user_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1134);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8677);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_0__, _store_user_slice__WEBPACK_IMPORTED_MODULE_3__]);
([_store__WEBPACK_IMPORTED_MODULE_0__, _store_user_slice__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// redux








// handle session logic with localstorage etc
function WatchUserRedux() {
  const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_0__/* .useAppDispatch */ .TL)(); // login from LS on app load

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const token = _Services_LocalStorageService__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(_const__WEBPACK_IMPORTED_MODULE_4__/* .TOKEN_LS_KEY */ .Gn);
    const role = _Services_LocalStorageService__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(_const__WEBPACK_IMPORTED_MODULE_4__/* .ROLE_LS_KEY */ .eW);
    const username = _Services_LocalStorageService__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(_const__WEBPACK_IMPORTED_MODULE_4__/* .USERNAME_LS_KEY */ .DY);
    dispatch((0,_store_user_slice__WEBPACK_IMPORTED_MODULE_3__/* .logFromStorage */ .Ab)({
      role,
      username
    })); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WatchUserRedux);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9623:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1106);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_winnerProjectTypes_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6371);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_0__, _store_winnerProjectTypes_slice__WEBPACK_IMPORTED_MODULE_2__]);
([_store__WEBPACK_IMPORTED_MODULE_0__, _store_winnerProjectTypes_slice__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// redux






function WatchWinningProjectTypesRedux() {
  const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_0__/* .useAppDispatch */ .TL)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dispatch((0,_store_winnerProjectTypes_slice__WEBPACK_IMPORTED_MODULE_2__/* .fetchWinnerProjectTypes */ .kT)());
  }, [dispatch]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WatchWinningProjectTypesRedux);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 204:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1106);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_year_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(556);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_0__, _store_year_slice__WEBPACK_IMPORTED_MODULE_2__]);
([_store__WEBPACK_IMPORTED_MODULE_0__, _store_year_slice__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// redux






function WatchYearRedux() {
  const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_0__/* .useAppDispatch */ .TL)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dispatch((0,_store_year_slice__WEBPACK_IMPORTED_MODULE_2__/* .fetchYears */ .qo)());
  }, [dispatch]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WatchYearRedux);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7308:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_colman_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1296);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3882);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1431);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8125);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3365);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7229);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8677);
/* harmony import */ var _navbarDropDown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6432);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1106);
/* harmony import */ var _store_year_slice__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(556);
/* harmony import */ var _store_user_slice__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(1134);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_20__, _store_year_slice__WEBPACK_IMPORTED_MODULE_21__, _store_user_slice__WEBPACK_IMPORTED_MODULE_22__]);
([_store__WEBPACK_IMPORTED_MODULE_20__, _store_year_slice__WEBPACK_IMPORTED_MODULE_21__, _store_user_slice__WEBPACK_IMPORTED_MODULE_22__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
 // next


 // assets

 // mui













 // consts










const settings = _const__WEBPACK_IMPORTED_MODULE_17__/* .AVATAR_LINKS */ .U6;

function ResponsiveAppBar() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_16__.useRouter)();
  const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_20__/* .useAppDispatch */ .TL)();
  const usernameRedux = (0,_store__WEBPACK_IMPORTED_MODULE_20__/* .useAppSelector */ .CG)(state => state.auth.username);
  const roleRedux = (0,_store__WEBPACK_IMPORTED_MODULE_20__/* .useAppSelector */ .CG)(state => state.auth.role);
  const isLoggedInRedux = (0,_store__WEBPACK_IMPORTED_MODULE_20__/* .useAppSelector */ .CG)(state => state.auth.isLoggedIn);
  const yearsRedux = (0,_store__WEBPACK_IMPORTED_MODULE_20__/* .useAppSelector */ .CG)(state => state.years.years);
  const selectedYearRedux = (0,_store__WEBPACK_IMPORTED_MODULE_20__/* .useAppSelector */ .CG)(state => state.years.selectedYear);
  const internshipsRedux = (0,_store__WEBPACK_IMPORTED_MODULE_20__/* .useAppSelector */ .CG)(state => state.internships.internships);
  const [anchorElNav, setAnchorElNav] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  const [anchorElUser, setAnchorElUser] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const yearsAsRoutes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => yearsRedux.filter(y => y.is_enabled).map(y => ({
    name: y.year + '',
    pathTo: `/year/${y.year}`,
    id: y.id
  })), [yearsRedux]);
  const internShipsAsRoutes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => internshipsRedux.map(i => ({
    name: i.name,
    pathTo: `/year/${selectedYearRedux}/internships/${i.id}`,
    id: i.id
  })), [internshipsRedux, selectedYearRedux]);

  const handleYearNavigation = (payload, evt) => {
    if (evt?.preventDefault) {
      evt.preventDefault();
    }

    if (payload?.name) {
      //set redux selected year
      dispatch((0,_store_year_slice__WEBPACK_IMPORTED_MODULE_21__/* .setYear */ .Mq)(payload.name));
    }
  };

  const pages = [{
    name: 'Home',
    pathTo: '/'
  }, {
    name: 'Instructors',
    pathTo: `/year/${selectedYearRedux}/instructors`
  }, {
    name: 'Winning Projects',
    pathTo: `/year/${selectedYearRedux}/winningProjects`
  }];
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4___default()), {
    position: "static",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_11___default()), {
      maxWidth: "xl",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6___default()), {
        disableGutters: true,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
          component: (next_image__WEBPACK_IMPORTED_MODULE_2___default()),
          sx: {
            cursor: 'pointer',
            display: {
              width: 55,
              height: 55,
              xs: 'none',
              md: 'flex'
            },
            mr: 1
          },
          alt: "Your logo.",
          src: _assets_images_colman_logo_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
          onClick: () => {
            router.push('/');
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
          sx: {
            flexGrow: 1,
            display: {
              xs: 'flex',
              md: 'none'
            }
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default()), {
            size: "large",
            "aria-label": "account of current user",
            "aria-controls": "menu-appbar",
            "aria-haspopup": "true",
            onClick: handleOpenNavMenu,
            color: "inherit",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_10___default()), {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_9___default()), {
            id: "menu-appbar",
            anchorEl: anchorElNav,
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left'
            },
            keepMounted: true,
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left'
            },
            open: Boolean(anchorElNav),
            onClose: handleCloseNavMenu,
            sx: {
              display: {
                xs: 'block',
                md: 'none'
              }
            },
            children: [pages.map(page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15___default()), {
              href: page.pathTo,
              component: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),
              onClick: handleCloseNavMenu,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                textAlign: "center",
                children: page.name
              })
            }, page.name)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_19__.Divider, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_navbarDropDown__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
              links: yearsAsRoutes,
              sx: {
                btn: {
                  color: 'black',
                  fontWeight: 400,
                  mx: 1,
                  my: 1,
                  display: 'block'
                },
                box: {
                  flexGrow: 0
                }
              },
              dropDownName: "YEARS",
              onDropDownOptionClick: handleYearNavigation
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_19__.Divider, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_navbarDropDown__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
              links: internShipsAsRoutes,
              sx: {
                btn: {
                  color: 'black',
                  fontWeight: 400,
                  mx: 1,
                  mt: 1,
                  display: 'block'
                },
                box: {
                  flexGrow: 0
                }
              },
              dropDownName: "internships"
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
          component: (next_image__WEBPACK_IMPORTED_MODULE_2___default()),
          sx: {
            cursor: 'pointer',
            display: {
              width: 35,
              height: 35,
              xs: 'flex',
              md: 'none'
            },
            mr: 1
          },
          alt: "Your logo.",
          src: _assets_images_colman_logo_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
          onClick: () => {
            router.push('/');
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
          variant: "h5",
          noWrap: true,
          component: "a",
          sx: {
            mr: 2,
            display: {
              xs: 'flex',
              md: 'none'
            },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none'
          },
          children: "LOGO"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
          sx: {
            flexGrow: 1,
            display: {
              xs: 'none',
              md: 'flex'
            }
          },
          children: [pages.map(page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_13___default()), {
            LinkComponent: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),
            href: page.pathTo,
            onClick: handleCloseNavMenu,
            sx: {
              my: 2,
              color: 'white',
              display: 'block'
            },
            children: page.name
          }, page.name)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_navbarDropDown__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
            links: yearsAsRoutes,
            sx: {
              btn: {
                color: 'white',
                my: 2,
                display: 'block'
              }
            },
            dropDownName: "YEARS",
            onDropDownOptionClick: handleYearNavigation
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_navbarDropDown__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
            links: internShipsAsRoutes,
            sx: {
              btn: {
                color: 'white',
                my: 2,
                display: 'block'
              }
            },
            dropDownName: "internships"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
          sx: {
            flexGrow: 0
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14___default()), {
            title: "Open settings",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default()), {
              onClick: handleOpenUserMenu,
              sx: {
                p: 0
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_12___default()), {
                alt: usernameRedux || 'Guest',
                sx: {
                  bgcolor: 'white',
                  color: 'blue'
                },
                children: (usernameRedux || 'Guest').charAt(0).toUpperCase()
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_9___default()), {
            sx: {
              mt: '45px'
            },
            id: "menu-appbar",
            anchorEl: anchorElUser,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right'
            },
            keepMounted: true,
            transformOrigin: {
              vertical: 'top',
              horizontal: 'right'
            },
            open: Boolean(anchorElUser),
            onClose: handleCloseUserMenu,
            children: [!isLoggedInRedux && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15___default()), {
              href: "/admin/login",
              component: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),
              onClick: handleCloseUserMenu,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                textAlign: "center",
                children: "Admin Log in"
              })
            }), !isLoggedInRedux && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15___default()), {
              href: "/login-student",
              component: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),
              onClick: handleCloseUserMenu,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                textAlign: "center",
                children: "Student Log in"
              })
            }), settings.filter(s => {
              if (s.name === 'Login') {
                if (roleRedux === 'Admin') return false;
              }

              if (roleRedux === 'Admin') return true;
              return s.role !== 'Admin';
            }).map(setting => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15___default()), {
              href: setting.pathTo,
              component: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),
              onClick: handleCloseUserMenu,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                textAlign: "center",
                children: setting.name
              })
            }, setting.name)), isLoggedInRedux && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15___default()), {
              onClick: evt => {
                handleCloseUserMenu();
                dispatch((0,_store_user_slice__WEBPACK_IMPORTED_MODULE_22__/* .logout */ .kS)());
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                textAlign: "center",
                children: "Log Out"
              })
            })]
          })]
        })]
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveAppBar);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6126:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _fontsource_roboto_300_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4260);
/* harmony import */ var _fontsource_roboto_300_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto_300_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fontsource_roboto_400_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8401);
/* harmony import */ var _fontsource_roboto_400_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto_400_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fontsource_roboto_500_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7524);
/* harmony import */ var _fontsource_roboto_500_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto_500_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fontsource_roboto_700_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6867);
/* harmony import */ var _fontsource_roboto_700_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto_700_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7308);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1106);
/* harmony import */ var _components_EmptyComponents_ts_WatchUserRedux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7843);
/* harmony import */ var _components_EmptyComponents_ts_WatchYearRedux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(204);
/* harmony import */ var _components_EmptyComponents_ts_WatchProjectsRedux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5846);
/* harmony import */ var _components_EmptyComponents_ts_WatchInternshipsRedux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6910);
/* harmony import */ var _components_EmptyComponents_ts_WatchWinningProjectTypesRedux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9623);
/* harmony import */ var _components_EmptyComponents_ts_WatchInstructorsRedux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3173);
/* harmony import */ var _components_EmptyComponents_ts_WatchMembersRedux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2400);
/* harmony import */ var _components_EmptyComponents_ts_WatchMediaRedux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8084);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_navbar__WEBPACK_IMPORTED_MODULE_5__, _store__WEBPACK_IMPORTED_MODULE_9__, _components_EmptyComponents_ts_WatchUserRedux__WEBPACK_IMPORTED_MODULE_10__, _components_EmptyComponents_ts_WatchYearRedux__WEBPACK_IMPORTED_MODULE_11__, _components_EmptyComponents_ts_WatchProjectsRedux__WEBPACK_IMPORTED_MODULE_12__, _components_EmptyComponents_ts_WatchInternshipsRedux__WEBPACK_IMPORTED_MODULE_13__, _components_EmptyComponents_ts_WatchWinningProjectTypesRedux__WEBPACK_IMPORTED_MODULE_14__, _components_EmptyComponents_ts_WatchInstructorsRedux__WEBPACK_IMPORTED_MODULE_15__, _components_EmptyComponents_ts_WatchMembersRedux__WEBPACK_IMPORTED_MODULE_16__, _components_EmptyComponents_ts_WatchMediaRedux__WEBPACK_IMPORTED_MODULE_17__]);
([_components_layout_navbar__WEBPACK_IMPORTED_MODULE_5__, _store__WEBPACK_IMPORTED_MODULE_9__, _components_EmptyComponents_ts_WatchUserRedux__WEBPACK_IMPORTED_MODULE_10__, _components_EmptyComponents_ts_WatchYearRedux__WEBPACK_IMPORTED_MODULE_11__, _components_EmptyComponents_ts_WatchProjectsRedux__WEBPACK_IMPORTED_MODULE_12__, _components_EmptyComponents_ts_WatchInternshipsRedux__WEBPACK_IMPORTED_MODULE_13__, _components_EmptyComponents_ts_WatchWinningProjectTypesRedux__WEBPACK_IMPORTED_MODULE_14__, _components_EmptyComponents_ts_WatchInstructorsRedux__WEBPACK_IMPORTED_MODULE_15__, _components_EmptyComponents_ts_WatchMembersRedux__WEBPACK_IMPORTED_MODULE_16__, _components_EmptyComponents_ts_WatchMediaRedux__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// styles




 // next


 // mui

 // redux


 // components












function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_8__.Provider, {
    store: _store__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("title", {
        children: "TCM"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("meta", {
        name: "description",
        content: "Generated by create next app"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_components_EmptyComponents_ts_WatchUserRedux__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_components_EmptyComponents_ts_WatchYearRedux__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_components_EmptyComponents_ts_WatchMediaRedux__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_components_EmptyComponents_ts_WatchProjectsRedux__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_components_EmptyComponents_ts_WatchInternshipsRedux__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_components_EmptyComponents_ts_WatchInstructorsRedux__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_components_EmptyComponents_ts_WatchWinningProjectTypesRedux__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_components_EmptyComponents_ts_WatchMembersRedux__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_components_layout_navbar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_7___default()), {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        my: 3
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(Component, _objectSpread({}, pageProps))
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/colman_logo.40d3fdf1.png","height":123,"width":130,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/klEQVR42mMAAa3W77n6tX/3GhT9nw/iu/0/JSp5bb4pAwhod/02Vi1++5fB/MJ/hvhD/xmmNp5gWNz+Rvr0vA+St+cqM0gv+6+ql3z7T2yE6b+YRNe/aekp/wM9Y/9LrFr6X+bKgokMYka/Iwxcr31s62j/39kz4d/kqVP/tnVN+MM8f/l/+ZNLNzHIM3y5pS1y4390gt+vxLSMv0mpSb+D4/L/W9XvXsYAAiqMX6/Ic978r6an819R0+Y/tzrDf1Oj6P/Nft8OQxQwfbJSYnteL8lw+RAnw+UreR6PPtUGvfrXFvXnU1v0fxsGdNAb978eiAsa4/5ztkT+4QEAF6dzCbXLHsQAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 4260:
/***/ (() => {



/***/ }),

/***/ 8401:
/***/ (() => {



/***/ }),

/***/ 7524:
/***/ (() => {



/***/ }),

/***/ 6867:
/***/ (() => {



/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 3365:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 3882:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 2120:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 19:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ 4475:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Container");

/***/ }),

/***/ 7934:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 8125:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Menu");

/***/ }),

/***/ 9271:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 1431:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ 7229:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Tooltip");

/***/ }),

/***/ 7163:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5893,1597,5675,1664,3390,6432], () => (__webpack_exec__(6126)));
module.exports = __webpack_exports__;

})();