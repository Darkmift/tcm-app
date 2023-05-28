"use strict";
exports.id = 5424;
exports.ids = [5424];
exports.modules = {

/***/ 9511:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1106);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_2__]);
_store__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const ProtectedRoute = ({
  requiredRole,
  children
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const isLoggedIn = (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .CG)(state => state.auth.isLoggedIn);
  const role = (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .CG)(state => state.auth.role);
  const authDone = (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .CG)(state => state.auth.authDone);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (authDone) {
      if (!isLoggedIn) {
        // Handle unauthorized access
        router.push(requiredRole !== role ? '/' : '/admin/login');
      }
    }
  }, [authDone, isLoggedIn, role, requiredRole, router]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: isLoggedIn && role === requiredRole ? children : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {})
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtectedRoute);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5424:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_RouteGuardAdmin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9511);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_RouteGuardAdmin__WEBPACK_IMPORTED_MODULE_0__]);
_components_RouteGuardAdmin__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const withProtectedRoute = (Component, requiredRole) => {
  const WrappedComponent = () => {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_RouteGuardAdmin__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      requiredRole: requiredRole,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Component, {})
    });
  };

  WrappedComponent.displayName = `withProtectedRoute(${Component.displayName || Component.name || 'Component'})`;
  return WrappedComponent;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withProtectedRoute);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;