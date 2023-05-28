"use strict";
exports.id = 2733;
exports.ids = [2733];
exports.modules = {

/***/ 2733:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pocketbase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3895);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pocketbase__WEBPACK_IMPORTED_MODULE_0__]);
pocketbase__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * SEE https://pocketbase.io/docs/api-records/ for docs on query params
 * Node doesn't have native EventSource implementation,
 * so in order to use the realtime subscriptions
 * you'll need to load a EventSource polyfill.
 */

// global.EventSource = eventsource;
const pb = new pocketbase__WEBPACK_IMPORTED_MODULE_0__["default"]("http://127.0.0.1:8090");
pb.autoCancellation(false);

const runAuth = async () => {
  await pb.admins.authWithPassword("admin@pocketdba.com", "TvszKbJR25a4cME");
};

const pocketDbService = {
  getCollection: async (collectionName, options = {}) => {
    try {
      await runAuth();

      const optionsPayload = _objectSpread({}, options); // you can also fetch all records at once via getFullList


      return await pb.collection(collectionName).getFullList(optionsPayload);
    } catch (error) {
      console.log('🚀 ~ file: pocketbase.js:18 ~ getCollection ~ error:', {
        collectionName,
        options,
        error
      });
      return null;
    }
  },
  getRecord: async (collectionName, recordId, options = {}) => {
    try {
      await runAuth();

      const optionsPayload = _objectSpread({}, options);

      return await pb.collection(collectionName).getOne(recordId, optionsPayload);
    } catch (error) {
      console.log('🚀 ~ file: pocketbase.js:39 ~ getRecord ~ error:', {
        collectionName,
        error
      });
      return null;
    }
  },
  insertRecord: async (collectionName, newRecord, options = {}) => {
    try {
      await runAuth();
      return await pb.collection(collectionName).create(newRecord, options);
    } catch (error) {
      console.log('🚀 ~ file: pocketbase.js:51 ~ insertRecord ~ error:', {
        collectionName,
        newRecord,
        error
      });
      return null;
    }
  },
  insertMany: async (collectionName, recordSet) => {
    try {
      await runAuth();
      const operations = recordSet.map(async record => pb.collection(collectionName).create(record));
      return await Promise.all(operations);
    } catch (error) {
      console.log('🚀 ~ file: pocketbase.js:68 ~ insertMany ~ error:', {
        collectionName,
        error
      });
      return null;
    }
  },
  updateRecord: async (collectionName, updateRecordId, updatedFields, options = {}) => {
    try {
      await runAuth();
      return await pb.collection(collectionName).update(updateRecordId, updatedFields, options);
    } catch (error) {
      console.log('🚀 ~ file: pocketbase.js:86 ~ updateRecord ~ error:', {
        collectionName,
        error
      });
      return null;
    }
  },
  deleteRecord: async (collectionName, deleteRecordId) => {
    try {
      await runAuth();
      return await pb.collection(collectionName).delete(deleteRecordId);
    } catch (error) {
      console.log('🚀 ~ file: pocketbase.js:99 ~ deleteRecord ~ error:', {
        collectionName,
        deleteRecordId,
        error
      });
      return null;
    }
  },
  findByFilter: async (collection, filter, findMany, options) => {
    try {
      await runAuth();
      const result = await pocketDbService.getCollection(collection, _objectSpread({
        filter
      }, options));
      if (findMany) return result?.length ? result : [];
      return result?.[0] ? result[0] : null;
    } catch (error) {
      console.log('🚀 ~ file: pocketbase.ts:119 ~ findByFilter: ~ error:', error);
      return null;
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pocketDbService);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;