"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/store/user.slice.ts":
/*!*********************************!*\
  !*** ./src/store/user.slice.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logFromStorage\": function() { return /* binding */ logFromStorage; },\n/* harmony export */   \"login\": function() { return /* binding */ login; },\n/* harmony export */   \"loginStudent\": function() { return /* binding */ loginStudent; },\n/* harmony export */   \"logout\": function() { return /* binding */ logout; }\n/* harmony export */ });\n/* harmony import */ var C_WORKSPACE_Clients_AviraMBenShalom_tcm_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_WORKSPACE_Clients_AviraMBenShalom_tcm_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_WORKSPACE_Clients_AviraMBenShalom_tcm_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_WORKSPACE_Clients_AviraMBenShalom_tcm_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _Services_HttpService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/HttpService */ \"./src/Services/HttpService/index.ts\");\n\n\n\n\n\nvar login = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)('auth/login', /*#__PURE__*/function () {\n  var _ref = (0,C_WORKSPACE_Clients_AviraMBenShalom_tcm_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_WORKSPACE_Clients_AviraMBenShalom_tcm_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(payload) {\n    var username, password, data;\n    return C_WORKSPACE_Clients_AviraMBenShalom_tcm_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            username = payload.username, password = payload.password;\n            _context.next = 3;\n            return _Services_HttpService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].login({\n              username: username,\n              password: password\n            });\n\n          case 3:\n            data = _context.sent;\n            return _context.abrupt(\"return\", data);\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}());\nvar loginStudent = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)('auth/login', /*#__PURE__*/function () {\n  var _ref2 = (0,C_WORKSPACE_Clients_AviraMBenShalom_tcm_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_WORKSPACE_Clients_AviraMBenShalom_tcm_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(payload) {\n    var username, password, data;\n    return C_WORKSPACE_Clients_AviraMBenShalom_tcm_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            username = payload.username, password = payload.password;\n            _context2.next = 3;\n            return _Services_HttpService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loginStudent({\n              username: username,\n              password: password\n            });\n\n          case 3:\n            data = _context2.sent;\n            return _context2.abrupt(\"return\", data);\n\n          case 5:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x2) {\n    return _ref2.apply(this, arguments);\n  };\n}());\nvar logout = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)('auth/logout', /*#__PURE__*/(0,C_WORKSPACE_Clients_AviraMBenShalom_tcm_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_WORKSPACE_Clients_AviraMBenShalom_tcm_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n  var response;\n  return C_WORKSPACE_Clients_AviraMBenShalom_tcm_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.next = 2;\n          return _Services_HttpService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].logout();\n\n        case 2:\n          response = _context3.sent;\n          return _context3.abrupt(\"return\", response);\n\n        case 4:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, _callee3);\n})));\nvar initialState = {\n  isLoggedIn: null,\n  id: '',\n  username: '',\n  role: 'User',\n  status: 'idle',\n  kickUser: false,\n  authDone: false\n};\nvar userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createSlice)({\n  name: 'user',\n  initialState: initialState,\n  reducers: {\n    logFromStorage: function logFromStorage(state, action) {\n      var _action$payload = action.payload,\n          role = _action$payload.role,\n          username = _action$payload.username;\n      var isValidRole = ['User', 'Admin'].includes(role);\n      var isValidUser = isValidRole && !!(username !== null && username !== void 0 && username.length);\n      state.authDone = true;\n      state.isLoggedIn = isValidUser;\n      state.kickUser = isValidUser ? false : true;\n      state.role = isValidRole ? role : 'User';\n      state.username = username;\n      state.status = isValidRole && isValidUser ? 'succeeded' : 'idle';\n    }\n  },\n  extraReducers: function extraReducers(builder) {\n    // Add reducers for additional action types here, and handle loading state as needed\n    builder.addCase(login.fulfilled, function (state, action) {\n      state.isLoggedIn = true;\n      state.authDone = true;\n      state.kickUser = false;\n      if (!action.payload) throw new Error('Invalid payload at login thunk');\n      var _action$payload2 = action.payload,\n          username = _action$payload2.username,\n          role = _action$payload2.role;\n      if (!username || !role) throw new Error('Invalid payload at login thunk');\n      state.username = action.payload.username;\n      state.role = action.payload.role;\n      state.id = action.payload.id;\n      state.status = 'succeeded';\n    });\n    builder.addCase(login.pending, function (state, action) {\n      state.status = 'loading';\n    });\n    builder.addCase(login.rejected, function (state, action) {\n      state.status = 'idle';\n    });\n    builder.addCase(logout.fulfilled, function (state) {\n      return structuredClone(initialState);\n    });\n  }\n});\nvar logFromStorage = userSlice.actions.logFromStorage;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (userSlice.reducer);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjNCLEtBQUssQ0FBQytCLFFBQXRCLEVBQWdDLFVBQUNaLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtNQUNqREQsS0FBSyxDQUFDUCxNQUFOLEdBQWUsTUFBZjtJQUNELENBRkQ7SUFHQWMsT0FBTyxDQUFDQyxPQUFSLENBQWdCckIsTUFBTSxDQUFDc0IsU0FBdkIsRUFBa0MsVUFBQ1QsS0FBRCxFQUFXO01BQzNDLE9BQU9hLGVBQWUsQ0FBQ3hCLFlBQUQsQ0FBdEI7SUFDRCxDQUZEO0VBR0Q7QUExQzJCLENBQUQsQ0FBN0I7QUE0Q08sSUFBT1UsY0FBUCxHQUF5QkgsU0FBUyxDQUFDa0IsT0FBbkMsQ0FBT2YsY0FBUDs7QUFFUCwrREFBZUgsU0FBUyxDQUFDbUIsT0FBekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3VzZXIuc2xpY2UudHM/ODdiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BheWxvYWRBY3Rpb24sIGNyZWF0ZVNsaWNlfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQge1JvbGV9IGZyb20gJ0AvdHlwZXMnXHJcbmltcG9ydCB7Y3JlYXRlQXN5bmNUaHVua30gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IEh0dHBTZXJ2aWNlIGZyb20gJy4uL1NlcnZpY2VzL0h0dHBTZXJ2aWNlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luID0gY3JlYXRlQXN5bmNUaHVuayhcclxuICAnYXV0aC9sb2dpbicsXHJcbiAgYXN5bmMgKHBheWxvYWQ6IHt1c2VybmFtZTogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nfSkgPT4ge1xyXG4gICAgY29uc3Qge3VzZXJuYW1lLCBwYXNzd29yZH0gPSBwYXlsb2FkXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgSHR0cFNlcnZpY2UubG9naW4oe3VzZXJuYW1lLCBwYXNzd29yZH0pXHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH1cclxuKVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luU3R1ZGVudCA9IGNyZWF0ZUFzeW5jVGh1bmsoXHJcbiAgJ2F1dGgvbG9naW4nLFxyXG4gIGFzeW5jIChwYXlsb2FkOiB7dXNlcm5hbWU6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZzsgaWQ6IHN0cmluZ30pID0+IHtcclxuICAgIGNvbnN0IHt1c2VybmFtZSwgcGFzc3dvcmR9ID0gcGF5bG9hZFxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IEh0dHBTZXJ2aWNlLmxvZ2luU3R1ZGVudCh7dXNlcm5hbWUsIHBhc3N3b3JkfSlcclxuICAgIHJldHVybiBkYXRhXHJcbiAgfVxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gY3JlYXRlQXN5bmNUaHVuaygnYXV0aC9sb2dvdXQnLCBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBIdHRwU2VydmljZS5sb2dvdXQoKVxyXG4gIHJldHVybiByZXNwb25zZVxyXG59KVxyXG5cclxudHlwZSBVc2VyU3RhdGUgPSB7XHJcbiAgaXNMb2dnZWRJbjogYm9vbGVhbiB8IG51bGxcclxuICB1c2VybmFtZTogc3RyaW5nXHJcbiAgaWQ6IHN0cmluZ1xyXG4gIHJvbGU6IFJvbGVcclxuICBzdGF0dXM6ICdpZGxlJyB8ICdsb2FkaW5nJyB8ICdzdWNjZWVkZWQnIHwgJ2ZhaWxlZCdcclxuICBraWNrVXNlcjogYm9vbGVhblxyXG4gIGF1dGhEb25lOiBib29sZWFuXHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogVXNlclN0YXRlID0ge1xyXG4gIGlzTG9nZ2VkSW46IG51bGwsXHJcbiAgaWQ6ICcnLFxyXG4gIHVzZXJuYW1lOiAnJyxcclxuICByb2xlOiAnVXNlcicsXHJcbiAgc3RhdHVzOiAnaWRsZScsXHJcbiAga2lja1VzZXI6IGZhbHNlLFxyXG4gIGF1dGhEb25lOiBmYWxzZSxcclxufVxyXG5cclxuY29uc3QgdXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICd1c2VyJyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGxvZ0Zyb21TdG9yYWdlOiAoXHJcbiAgICAgIHN0YXRlOiBVc2VyU3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7cm9sZTogUm9sZTsgdXNlcm5hbWU6IHN0cmluZ30+XHJcbiAgICApID0+IHtcclxuICAgICAgY29uc3Qge3JvbGUsIHVzZXJuYW1lfSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIGNvbnN0IGlzVmFsaWRSb2xlID0gWydVc2VyJywgJ0FkbWluJ10uaW5jbHVkZXMocm9sZSlcclxuICAgICAgY29uc3QgaXNWYWxpZFVzZXIgPSBpc1ZhbGlkUm9sZSAmJiAhIXVzZXJuYW1lPy5sZW5ndGhcclxuICAgICAgc3RhdGUuYXV0aERvbmUgPSB0cnVlXHJcbiAgICAgIHN0YXRlLmlzTG9nZ2VkSW4gPSBpc1ZhbGlkVXNlclxyXG4gICAgICBzdGF0ZS5raWNrVXNlciA9IGlzVmFsaWRVc2VyID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgIHN0YXRlLnJvbGUgPSBpc1ZhbGlkUm9sZSA/IHJvbGUgOiAnVXNlcidcclxuICAgICAgc3RhdGUudXNlcm5hbWUgPSB1c2VybmFtZVxyXG4gICAgICBzdGF0ZS5zdGF0dXMgPSBpc1ZhbGlkUm9sZSAmJiBpc1ZhbGlkVXNlciA/ICdzdWNjZWVkZWQnIDogJ2lkbGUnXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcclxuICAgIC8vIEFkZCByZWR1Y2VycyBmb3IgYWRkaXRpb25hbCBhY3Rpb24gdHlwZXMgaGVyZSwgYW5kIGhhbmRsZSBsb2FkaW5nIHN0YXRlIGFzIG5lZWRlZFxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGxvZ2luLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuaXNMb2dnZWRJbiA9IHRydWVcclxuICAgICAgc3RhdGUuYXV0aERvbmUgPSB0cnVlXHJcbiAgICAgIHN0YXRlLmtpY2tVc2VyID0gZmFsc2VcclxuICAgICAgaWYgKCFhY3Rpb24ucGF5bG9hZCkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHBheWxvYWQgYXQgbG9naW4gdGh1bmsnKVxyXG4gICAgICBjb25zdCB7dXNlcm5hbWUsIHJvbGV9ID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgaWYgKCF1c2VybmFtZSB8fCAhcm9sZSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHBheWxvYWQgYXQgbG9naW4gdGh1bmsnKVxyXG4gICAgICBzdGF0ZS51c2VybmFtZSA9IGFjdGlvbi5wYXlsb2FkLnVzZXJuYW1lXHJcbiAgICAgIHN0YXRlLnJvbGUgPSBhY3Rpb24ucGF5bG9hZC5yb2xlXHJcbiAgICAgIHN0YXRlLmlkID0gYWN0aW9uLnBheWxvYWQuaWRcclxuICAgICAgc3RhdGUuc3RhdHVzID0gJ3N1Y2NlZWRlZCdcclxuICAgIH0pXHJcbiAgICBidWlsZGVyLmFkZENhc2UobG9naW4ucGVuZGluZywgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuc3RhdHVzID0gJ2xvYWRpbmcnXHJcbiAgICB9KVxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGxvZ2luLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5zdGF0dXMgPSAnaWRsZSdcclxuICAgIH0pXHJcbiAgICBidWlsZGVyLmFkZENhc2UobG9nb3V0LmZ1bGZpbGxlZCwgKHN0YXRlKSA9PiB7XHJcbiAgICAgIHJldHVybiBzdHJ1Y3R1cmVkQ2xvbmUoaW5pdGlhbFN0YXRlKVxyXG4gICAgfSlcclxuICB9LFxyXG59KVxyXG5leHBvcnQgY29uc3Qge2xvZ0Zyb21TdG9yYWdlfSA9IHVzZXJTbGljZS5hY3Rpb25zXHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyU2xpY2UucmVkdWNlclxyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjcmVhdGVBc3luY1RodW5rIiwiSHR0cFNlcnZpY2UiLCJsb2dpbiIsInBheWxvYWQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZGF0YSIsImxvZ2luU3R1ZGVudCIsImxvZ291dCIsInJlc3BvbnNlIiwiaW5pdGlhbFN0YXRlIiwiaXNMb2dnZWRJbiIsImlkIiwicm9sZSIsInN0YXR1cyIsImtpY2tVc2VyIiwiYXV0aERvbmUiLCJ1c2VyU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJsb2dGcm9tU3RvcmFnZSIsInN0YXRlIiwiYWN0aW9uIiwiaXNWYWxpZFJvbGUiLCJpbmNsdWRlcyIsImlzVmFsaWRVc2VyIiwibGVuZ3RoIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwiZnVsZmlsbGVkIiwiRXJyb3IiLCJwZW5kaW5nIiwicmVqZWN0ZWQiLCJzdHJ1Y3R1cmVkQ2xvbmUiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/user.slice.ts\n"));

/***/ })

});