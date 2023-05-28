"use strict";
exports.id = 7677;
exports.ids = [7677];
exports.modules = {

/***/ 7677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);


const checkAuthMiddleware = handler => async function (req, res) {
  try {
    // Check if the Authorization header exists and extract the token value
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
      throw new Error('Authorization header not found');
    }

    const token = authHeader.replace('Bearer ', ''); // Verify the token and retrieve the user data

    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      throw new Error('JWT_SECRET environment variable not set');
    }

    const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, jwtSecret); // Check if the user has the "Admin" role

    if (decoded.role !== 'Admin') {
      throw new Error('User does not have permission to access this resource');
    } // Add the user id to the request for use by the handler


    ;
    req.userId = decoded.id; // Call the original handler

    return handler(req, res);
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      error: 'Unauthorized'
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkAuthMiddleware);

/***/ })

};
;