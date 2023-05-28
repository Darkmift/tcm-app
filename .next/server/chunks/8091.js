exports.id = 8091;
exports.ids = [8091];
exports.modules = {

/***/ 8091:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1405);
/* harmony import */ var _styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7229);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1658);
/* harmony import */ var _mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1106);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_5__]);
_store__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function ProjectCard({
  id,
  title,
  imgName,
  projectWinner
}) {
  const Icon = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => projectWinner
  /*&& iconsWinners[projectWinner.id]*/
  , [projectWinner]);
  const selectedYear = (0,_store__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .CG)(state => state.years.selectedYear);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: `/year/${selectedYear}/projects/${id}`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
      sx: {
        transition: 'all .4s ease-in-out',
        backgroundColor: 'white',
        backgroundImage: `url(${imgName})`,
        height: '275px',
        backgroundSize: '350px 275px',
        backgroundRepeat: 'no-repeat',
        width: '350px',
        objectFit: 'fill',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
        '&:hover': {
          transform: 'scale(1.05)'
        }
      },
      children: [projectWinner && Icon && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_0___default()), {
        title: projectWinner.name,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
          "data-id": projectWinner.id,
          className: (_styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_7___default()["project-icon_winner"]),
          children: projectWinner && Icon()
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
        sx: {
          display: 'flex',
          alignSelf: 'flex-start',
          marginBottom: '30px',
          backgroundColor: 'rgba(62,62,60,0.6)',
          borderLeft: '0.5rem solid #2474e4'
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
          style: {
            color: 'white',
            margin: '0 20px 0 15px'
          },
          children: title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((_mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_4___default()), {
          sx: {
            backgroundColor: 'white'
          }
        })]
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectCard);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1405:
/***/ ((module) => {

// Exports
module.exports = {
	"project-card-container": "ProjectCard_project-card-container__u9MqE",
	"project-icon_winner": "ProjectCard_project-icon_winner__qvCKY",
	"project-card-img": "ProjectCard_project-card-img__EfIJo",
	"project-card-title": "ProjectCard_project-card-title__MuxH9",
	"project-card-arrow": "ProjectCard_project-card-arrow__IOJEB"
};


/***/ })

};
;