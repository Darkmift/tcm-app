"use strict";
exports.id = 3390;
exports.ids = [3390];
exports.modules = {

/***/ 5900:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HttpService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3390);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HttpService__WEBPACK_IMPORTED_MODULE_0__]);
_HttpService__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const API_IMAGES_URL = `/images`;
const ImageHttpService = {
  async getAllImages() {
    const response = await _HttpService__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.get */ .b.get(API_IMAGES_URL);
    return response.data.images;
  },

  async createImage(title, collection, file) {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('collection', collection);
    formData.append('imageFile', file);
    const response = await _HttpService__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.post */ .b.post(API_IMAGES_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  },

  async updateImage(id, title, collection, file) {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('collection', collection);
    formData.append('imageFile', file);
    const response = await _HttpService__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.put */ .b.put(`${API_IMAGES_URL}/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  },

  async deleteImage(id, collection) {
    const response = await _HttpService__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance["delete"] */ .b["delete"](`${API_IMAGES_URL}/${id}?collection=${collection}`);
    return response.data.message;
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageHttpService);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5313:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HttpService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3390);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HttpService__WEBPACK_IMPORTED_MODULE_0__]);
_HttpService__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const API_INSTRUCTORS_URL = `/instructors`;
const InstructorsHttpService = {
  async getAllInstructors(selectedYear) {
    try {
      const response = await _HttpService__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.get */ .b.get(`${API_INSTRUCTORS_URL}?year=${selectedYear}`);
      return response.data.instructors;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async createInstructor(instructor) {
    try {
      const response = await _HttpService__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.post */ .b.post(API_INSTRUCTORS_URL, instructor);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async updateInstructor(instructor) {
    try {
      const response = await _HttpService__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.put */ .b.put(`${API_INSTRUCTORS_URL}?id=${instructor.id}`, instructor);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async deleteInstructor(id) {
    try {
      const response = await _HttpService__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance["delete"] */ .b["delete"](`${API_INSTRUCTORS_URL}?id=${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstructorsHttpService);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1819:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HttpService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3390);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HttpService__WEBPACK_IMPORTED_MODULE_0__]);
_HttpService__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const API_INTERNSHIPS_URL = `/internships`;
const InternShipsHttpService = {
  // INTERNSHIPS
  async getAllInternships(selectedYear) {
    try {
      const response = await _HttpService__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.get */ .b.get(`${API_INTERNSHIPS_URL}?year=${selectedYear}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async createInternship(internship) {
    try {
      const response = await _HttpService__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.post */ .b.post(API_INTERNSHIPS_URL, internship);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async updateInternship(internship) {
    try {
      const response = await _HttpService__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.put */ .b.put(API_INTERNSHIPS_URL, internship);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async deleteInternship(id) {
    try {
      const response = await _HttpService__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance["delete"] */ .b["delete"](`${API_INTERNSHIPS_URL}?id=${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InternShipsHttpService);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6717:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3390);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_0__]);
___WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const API_Media_URL = `/media`;
const MediaHttpService = {
  // Media
  async getMedia() {
    try {
      const result = await ___WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.get */ .b.get(API_Media_URL);

      if (!result?.data) {
        throw new Error('no data!');
      }

      return result.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async createMedia(media) {
    try {
      const result = await ___WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.post */ .b.post(API_Media_URL, media);
      if (!result.data) throw new Error('error creating media');
      return result.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async updateMedia(Media) {
    try {
      const result = await ___WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.put */ .b.put(`${API_Media_URL}?id=${Media.id}`, Media);

      if (!result?.data) {
        throw new Error('no data!');
      }

      return result.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async deleteMedia(id) {
    try {
      const result = await ___WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance["delete"] */ .b["delete"](`${API_Media_URL}/${id}`);

      if (!result?.data) {
        throw new Error('no data!');
      }

      return result.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MediaHttpService);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5196:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HttpService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3390);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HttpService__WEBPACK_IMPORTED_MODULE_0__]);
_HttpService__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const API_MEMBERS_URL = `/members`;
const MemberHttpService = {
  // MEMBERS
  async getAllMembers() {
    try {
      const response = await _HttpService__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.get */ .b.get(API_MEMBERS_URL);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async createMember(member) {
    try {
      const response = await _HttpService__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.post */ .b.post(API_MEMBERS_URL, member);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async updateMember(member) {
    try {
      const response = await _HttpService__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.put */ .b.put(`${API_MEMBERS_URL}?id=${member.id}`, member);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async deleteMember(id) {
    try {
      const response = await _HttpService__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance["delete"] */ .b["delete"](`${API_MEMBERS_URL}?id=${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemberHttpService);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HttpService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3390);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HttpService__WEBPACK_IMPORTED_MODULE_0__]);
_HttpService__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const API_PROJECTS_URL = `/projects`;
const ProjectHttpService = {
  async getAllProjects(selectedYear) {
    try {
      const response = await _HttpService__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.get */ .b.get(`${API_PROJECTS_URL}?year=${selectedYear}`);
      return response.data.projects;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async createProject(project) {
    try {
      const response = await _HttpService__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.post */ .b.post(API_PROJECTS_URL, project);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async updateProject(project) {
    try {
      const response = await _HttpService__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.put */ .b.put(`${API_PROJECTS_URL}?id=${project.id}`, project);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async deleteProject(id) {
    try {
      const response = await _HttpService__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance["delete"] */ .b["delete"](`${API_PROJECTS_URL}?id=${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectHttpService);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2674:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3390);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_0__]);
_index__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const API_MEMBER_RELATION_URL = '/project-member-relation';
const ProjectMemberRelationHttpService = {
  async getAllProjectMemberRelations() {
    try {
      const response = await _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.get */ .b.get(API_MEMBER_RELATION_URL);
      return response.data.projectMemberRelations;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async createProjectMemberRelation(relation) {
    try {
      const response = await _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.post */ .b.post(API_MEMBER_RELATION_URL, relation);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async updateProjectMemberRelation(relation) {
    try {
      const response = await _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.put */ .b.put(API_MEMBER_RELATION_URL, relation);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async deleteProjectMemberRelation(id) {
    try {
      const response = await _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance["delete"] */ .b["delete"](`${API_MEMBER_RELATION_URL}?id=${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectMemberRelationHttpService);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3143:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3390);
/* harmony import */ var _LocalStorageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5089);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8677);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_3__]);
([___WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const StudentHttpService = {
  async loginStudent({
    username: Uname,
    password
  }) {
    try {
      const result = await ___WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.post */ .b.post('/login-student', {
        username: Uname,
        password
      });

      if (!result?.data) {
        throw new Error('no data!');
      }

      const {
        token,
        role,
        username,
        id
      } = result.data;

      if (role !== 'User' && role !== 'Admin') {
        throw new Error('Role provided not recognized', role);
      }

      if (!!token && !!username) {
        _LocalStorageService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].set */ .Z.set(_const__WEBPACK_IMPORTED_MODULE_2__/* .TOKEN_LS_KEY */ .Gn, token);
        _LocalStorageService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].set */ .Z.set(_const__WEBPACK_IMPORTED_MODULE_2__/* .ROLE_LS_KEY */ .eW, role);
        _LocalStorageService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].set */ .Z.set(_const__WEBPACK_IMPORTED_MODULE_2__/* .USERNAME_LS_KEY */ .DY, username);
      } else {
        throw new Error('Login failed');
      }

      return {
        role,
        username,
        id
      };
    } catch (error) {
      console.error('🚀 ~ file: HttpService.ts:17 ~ login ~ error', error);
      throw error;
    }
  },

  async logoutStudent() {
    try {
      await ___WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.post */ .b.post('/api/admin/logout');
      _LocalStorageService__WEBPACK_IMPORTED_MODULE_1__/* ["default"]["delete"] */ .Z["delete"](_const__WEBPACK_IMPORTED_MODULE_2__/* .TOKEN_LS_KEY */ .Gn);
      _LocalStorageService__WEBPACK_IMPORTED_MODULE_1__/* ["default"]["delete"] */ .Z["delete"](_const__WEBPACK_IMPORTED_MODULE_2__/* .ROLE_LS_KEY */ .eW);
      _LocalStorageService__WEBPACK_IMPORTED_MODULE_1__/* ["default"]["delete"] */ .Z["delete"](_const__WEBPACK_IMPORTED_MODULE_2__/* .USERNAME_LS_KEY */ .DY);
    } catch (ex) {
      console.error('Failed to logout', ex);
      throw ex;
    }
  },

  async registerStudent(user) {
    try {
      const result = await ___WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.post */ .b.post('/admin/register-student', user);

      if (!result?.data) {
        throw new Error('registration failed');
      }

      const {
        newUser
      } = result.data;
      return newUser;
    } catch (err) {
      console.error('🚀 ~ file: HttpService.ts:17 ~ register ~ error', err);

      if (axios__WEBPACK_IMPORTED_MODULE_3__["default"].isAxiosError(err)) {
        return {
          username: err.response?.data?.payload?.username,
          password: '',
          error: err.response?.data?.error
        };
      }

      return {
        username: '',
        password: '',
        error: err?.message
      };
    }
  },

  async updateStudentProject(project) {
    try {
      const response = await ___WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.post */ .b.post(`/student-project-edit?id=${project.id}`, {
        project
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async updateStudentImage({
    title,
    collection,
    file,
    studentUsername,
    studentProject
  }) {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('collection', collection);
    formData.append('imageFile', file);
    formData.append('studentProject', JSON.stringify(studentProject));
    const response = await ___WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.put */ .b.put(`student-update-image?id=${studentUsername}&studentUsername=${studentUsername}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  },

  async getAllStudents() {
    const response = await ___WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.get */ .b.get(`/students`);
    return response.data;
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StudentHttpService);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3197:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3390);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_0__]);
___WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const API_WINNER_PROJECTS_URL = '/winner-projects';
const WinnerProjectsHttpService = {
  async getAllWinnerProjects() {
    try {
      const response = await ___WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.get */ .b.get(API_WINNER_PROJECTS_URL);
      return response.data.winnerProjects;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async addWinnerProject(winnerProject) {
    try {
      const result = await ___WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.post */ .b.post(API_WINNER_PROJECTS_URL, winnerProject);

      if (!result?.data) {
        throw new Error('registration failed');
      }

      return result.data;
    } catch (error) {
      console.error('🚀 ~ file: HttpService.ts:17 ~ register ~ error', error);
      return null;
    }
  },

  async updateWinnerProject(WinnerProject) {
    try {
      const result = await ___WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.put */ .b.put(`${API_WINNER_PROJECTS_URL}?id=${WinnerProject.id}`, WinnerProject);

      if (!result?.data) {
        throw new Error('no data!');
      }

      return result.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async deleteWinnerProject(id) {
    try {
      const result = await ___WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance["delete"] */ .b["delete"](`${API_WINNER_PROJECTS_URL}?id=${id}`);

      if (!result?.data) {
        throw new Error('no data!');
      }

      return result.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WinnerProjectsHttpService);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3240:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3390);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_0__]);
___WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const API_WINNER_PROJECT_TYPES_URL = '/winner-project-types';
const WinnerProjectTypeHttpService = {
  async getAllWinnerProjectTypes() {
    try {
      const response = await ___WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.get */ .b.get(API_WINNER_PROJECT_TYPES_URL);
      return response.data.winnerProjectTypes;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async createWinnerProjectType(winnerProjectType) {
    try {
      const response = await ___WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.post */ .b.post(API_WINNER_PROJECT_TYPES_URL, winnerProjectType);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async updateWinnerProjectType(winnerProjectType) {
    try {
      const response = await ___WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.put */ .b.put(`${API_WINNER_PROJECT_TYPES_URL}?id=${winnerProjectType.id}`, winnerProjectType);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async deleteWinnerProjectType(id) {
    try {
      const response = await ___WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance["delete"] */ .b["delete"](`${API_WINNER_PROJECT_TYPES_URL}?id=${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WinnerProjectTypeHttpService);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5317:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HttpService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3390);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HttpService__WEBPACK_IMPORTED_MODULE_0__]);
_HttpService__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const API_YEARS_URL = `/years`;
const YearHttpService = {
  // YEARS
  async getYears() {
    try {
      const result = await _HttpService__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.get */ .b.get(API_YEARS_URL);

      if (!result?.data) {
        throw new Error('no data!');
      }

      return result.data.years;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async createYear(year) {
    try {
      const result = await _HttpService__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.post */ .b.post(API_YEARS_URL, year);
      return result.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async updateYear(year) {
    try {
      const result = await _HttpService__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.put */ .b.put(`${API_YEARS_URL}?id=${year.id}`, year);

      if (!result?.data) {
        throw new Error('no data!');
      }

      return result.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async deleteYear(id) {
    try {
      const result = await _HttpService__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance["delete"] */ .b["delete"](`${API_YEARS_URL}/${id}`);

      if (!result?.data) {
        throw new Error('no data!');
      }

      return result.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YearHttpService);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3390:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "b": () => (/* binding */ axiosInstance)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _LocalStorageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5089);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1106);
/* harmony import */ var _store_user_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1134);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8677);
/* harmony import */ var _MemberHttpService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5196);
/* harmony import */ var _YearHttpService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5317);
/* harmony import */ var _InternShipsHttpService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1819);
/* harmony import */ var _InstructorsHttpService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5313);
/* harmony import */ var _ProjectHttpService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1678);
/* harmony import */ var _ProjectMemberRelationHttpService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2674);
/* harmony import */ var _WinnerProjectTypeHttpService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3240);
/* harmony import */ var _ImageHttpService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5900);
/* harmony import */ var _StudentHttpService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3143);
/* harmony import */ var _MediaHttpService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6717);
/* harmony import */ var _WinnerProjectHttpService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _store__WEBPACK_IMPORTED_MODULE_2__, _store_user_slice__WEBPACK_IMPORTED_MODULE_3__, _MemberHttpService__WEBPACK_IMPORTED_MODULE_5__, _YearHttpService__WEBPACK_IMPORTED_MODULE_6__, _InternShipsHttpService__WEBPACK_IMPORTED_MODULE_7__, _InstructorsHttpService__WEBPACK_IMPORTED_MODULE_8__, _ProjectHttpService__WEBPACK_IMPORTED_MODULE_9__, _ProjectMemberRelationHttpService__WEBPACK_IMPORTED_MODULE_10__, _WinnerProjectTypeHttpService__WEBPACK_IMPORTED_MODULE_11__, _ImageHttpService__WEBPACK_IMPORTED_MODULE_12__, _StudentHttpService__WEBPACK_IMPORTED_MODULE_13__, _MediaHttpService__WEBPACK_IMPORTED_MODULE_14__, _WinnerProjectHttpService__WEBPACK_IMPORTED_MODULE_15__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, _store__WEBPACK_IMPORTED_MODULE_2__, _store_user_slice__WEBPACK_IMPORTED_MODULE_3__, _MemberHttpService__WEBPACK_IMPORTED_MODULE_5__, _YearHttpService__WEBPACK_IMPORTED_MODULE_6__, _InternShipsHttpService__WEBPACK_IMPORTED_MODULE_7__, _InstructorsHttpService__WEBPACK_IMPORTED_MODULE_8__, _ProjectHttpService__WEBPACK_IMPORTED_MODULE_9__, _ProjectMemberRelationHttpService__WEBPACK_IMPORTED_MODULE_10__, _WinnerProjectTypeHttpService__WEBPACK_IMPORTED_MODULE_11__, _ImageHttpService__WEBPACK_IMPORTED_MODULE_12__, _StudentHttpService__WEBPACK_IMPORTED_MODULE_13__, _MediaHttpService__WEBPACK_IMPORTED_MODULE_14__, _WinnerProjectHttpService__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















 // const DOMAIN = ''
// // const DOMAIN = ''process.env.NEXT_PUBLIC_DOMAIN
// const BASE_URL = `${DOMAIN}/api/`

const BASE_URL = `/api/`;
const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  baseURL: BASE_URL
});
axiosInstance.interceptors.request.use(config => {
  const token = _LocalStorageService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(_const__WEBPACK_IMPORTED_MODULE_4__/* .TOKEN_LS_KEY */ .Gn);

  if (token) {
    config.headers = config.headers || {};
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});
axiosInstance.interceptors.response.use(response => {
  return response;
}, error => {
  console.log('🚀 ~ file: HttpService.ts:39 ~ error:', error);

  if (error.response.status === 401) {
    // dispatch the logout action
    _store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].dispatch */ .ZP.dispatch((0,_store_user_slice__WEBPACK_IMPORTED_MODULE_3__/* .logout */ .kS)());
    _LocalStorageService__WEBPACK_IMPORTED_MODULE_1__/* ["default"]["delete"] */ .Z["delete"](_const__WEBPACK_IMPORTED_MODULE_4__/* .TOKEN_LS_KEY */ .Gn);
    _LocalStorageService__WEBPACK_IMPORTED_MODULE_1__/* ["default"]["delete"] */ .Z["delete"](_const__WEBPACK_IMPORTED_MODULE_4__/* .ROLE_LS_KEY */ .eW);
    _LocalStorageService__WEBPACK_IMPORTED_MODULE_1__/* ["default"]["delete"] */ .Z["delete"](_const__WEBPACK_IMPORTED_MODULE_4__/* .USERNAME_LS_KEY */ .DY);
  }

  return Promise.reject(error);
});

const HttpService = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
  async login({
    username: Uname,
    password
  }) {
    try {
      const result = await axiosInstance.post('/admin/login', {
        username: Uname,
        password
      });

      if (!result?.data) {
        throw new Error('no data!');
      }

      const {
        token,
        role,
        username,
        id
      } = result.data;

      if (role !== 'User' && role !== 'Admin') {
        throw new Error('Role provided not recognized', role);
      }

      if (!!token && !!username) {
        _LocalStorageService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].set */ .Z.set(_const__WEBPACK_IMPORTED_MODULE_4__/* .TOKEN_LS_KEY */ .Gn, token);
        _LocalStorageService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].set */ .Z.set(_const__WEBPACK_IMPORTED_MODULE_4__/* .ROLE_LS_KEY */ .eW, role);
        _LocalStorageService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].set */ .Z.set(_const__WEBPACK_IMPORTED_MODULE_4__/* .USERNAME_LS_KEY */ .DY, username);
      } else {
        throw new Error('Login failed');
      }

      return {
        role,
        username,
        id
      };
    } catch (error) {
      console.error('🚀 ~ file: HttpService.ts:17 ~ login ~ error', error);
      throw error;
    }
  },

  async logout() {
    try {
      _LocalStorageService__WEBPACK_IMPORTED_MODULE_1__/* ["default"]["delete"] */ .Z["delete"](_const__WEBPACK_IMPORTED_MODULE_4__/* .TOKEN_LS_KEY */ .Gn);
      _LocalStorageService__WEBPACK_IMPORTED_MODULE_1__/* ["default"]["delete"] */ .Z["delete"](_const__WEBPACK_IMPORTED_MODULE_4__/* .ROLE_LS_KEY */ .eW);
      _LocalStorageService__WEBPACK_IMPORTED_MODULE_1__/* ["default"]["delete"] */ .Z["delete"](_const__WEBPACK_IMPORTED_MODULE_4__/* .USERNAME_LS_KEY */ .DY);
      const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/admin/logout'); // window.location.href = '/'

      return true;
    } catch (ex) {
      console.error('Failed to logout', ex);
      throw ex;
    }
  }

}, _InternShipsHttpService__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z), _YearHttpService__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z), _MemberHttpService__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z), _InstructorsHttpService__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z), _ProjectHttpService__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z), _ProjectMemberRelationHttpService__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z), _WinnerProjectTypeHttpService__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z), _ImageHttpService__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z), _StudentHttpService__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z), _MediaHttpService__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z), _WinnerProjectHttpService__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HttpService);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const LS =  false && 0;
const LocalStorageService = {
  isLocalStorageServiceSet() {
    if (!!LS === false) throw new Error('LS called but not defined in current execution scope');
  },

  get(key) {
    try {
      LocalStorageService.isLocalStorageServiceSet();
      return JSON.parse(localStorage.getItem(key)).data;
    } catch (error) {
      console.log('🚀 ~ file: LocalStorageService.ts:7 ~ get ~ error', error.message);
      return null;
    }
  },

  set(key, payload) {
    LocalStorageService.isLocalStorageServiceSet();
    return localStorage.setItem(key, JSON.stringify({
      data: payload
    }));
  },

  delete(key) {
    LocalStorageService.isLocalStorageServiceSet();
    localStorage.removeItem(key);
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocalStorageService);

/***/ }),

/***/ 8677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DY": () => (/* binding */ USERNAME_LS_KEY),
/* harmony export */   "Gn": () => (/* binding */ TOKEN_LS_KEY),
/* harmony export */   "LT": () => (/* binding */ IMAGE_ASSETS_FOLDER_PATH),
/* harmony export */   "U6": () => (/* binding */ AVATAR_LINKS),
/* harmony export */   "Ul": () => (/* binding */ COLLECTIONS),
/* harmony export */   "eW": () => (/* binding */ ROLE_LS_KEY)
/* harmony export */ });
/* unused harmony exports VALID_YEAR_REGEX, VALID_EMAIL_REGEX, PAGES_LINKS, YEAR_LINKS, INTERNSHIP_LINKS, SLIDER_DATA */
const VALID_YEAR_REGEX = /^(200[0-9]|20[1-9][0-9]|2100)$/;
const VALID_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const IMAGE_ASSETS_FOLDER_PATH = '/assets/images';
const PAGES_LINKS = [{
  name: 'Home',
  pathTo: '/'
}, {
  name: 'Instructors',
  pathTo: '/year/2023/instructors'
}, {
  name: 'Winning Projects',
  pathTo: '/year/2023/winningProjects'
}];
const YEAR_LINKS = [{
  name: '2021',
  pathTo: '/year/2021'
}, {
  name: '2022',
  pathTo: '/year/2022'
}, {
  name: '2023',
  pathTo: '/year/2023'
}];
const AVATAR_LINKS = [// {name: 'Login', pathTo: '/admin/login'},
{
  name: 'Dashboard',
  pathTo: '/admin',
  role: 'Admin'
}];
const INTERNSHIP_LINKS = [{
  name: 'Internships A',
  pathTo: '/year/2023/internships/A'
}, {
  name: 'Internships B',
  pathTo: '/year/2023/internships/B'
}, {
  name: 'Internships C',
  pathTo: '/year/2023/internships/C'
}, {
  name: 'Internships D',
  pathTo: '/year/2023/internships/D'
}];
const TOKEN_LS_KEY = 'token';
const ROLE_LS_KEY = 'role';
const USERNAME_LS_KEY = 'name';
const SLIDER_DATA = [{
  image: 'https://www.youtube.com/embed/Ax6cnEVp_bY',
  heading: 'Slide One',
  desc: 'This is the description of slide one Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.'
}, {
  image: 'https://www.youtube.com/embed/ygX9FeYLnKE',
  heading: 'Slide Two',
  desc: 'This is the description of slide two Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.'
}, {
  image: 'https://www.youtube.com/embed/IwK6sYaCHPQ',
  heading: 'Slide Three',
  desc: 'This is the description of slide three Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.'
}];
const COLLECTIONS = {
  MEDIA: 'media',
  WINNER_PROJECT_TYPES: 'winner_project_types',
  WINNER_PROJECTS: 'winner_projects',
  YEARS_AUTH: 'years_auth',
  AUTH: 'auth',
  MEMBERS: 'members',
  PROJECTS: 'projects',
  INSTRUCTORS: 'instructors',
  INTERNSHIPS: 'internships',
  PROJECT_MEMBER_RELATION: 'project_member_relation',
  INTERNSHIP_INSTRUCTOR_RELATION: 'internship_instructor_relation'
};

/***/ }),

/***/ 1106:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CG": () => (/* binding */ useAppSelector),
/* harmony export */   "TL": () => (/* binding */ useAppDispatch),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1134);
/* harmony import */ var _year_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(556);
/* harmony import */ var _internships_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1058);
/* harmony import */ var _instructors_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3354);
/* harmony import */ var _member_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8267);
/* harmony import */ var _project_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9807);
/* harmony import */ var _projectMemberRelation_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4267);
/* harmony import */ var _winnerProjectTypes_slice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6371);
/* harmony import */ var _media_slice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1733);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_user_slice__WEBPACK_IMPORTED_MODULE_2__, _year_slice__WEBPACK_IMPORTED_MODULE_3__, _internships_slice__WEBPACK_IMPORTED_MODULE_4__, _instructors_slice__WEBPACK_IMPORTED_MODULE_5__, _member_slice__WEBPACK_IMPORTED_MODULE_6__, _project_slice__WEBPACK_IMPORTED_MODULE_7__, _projectMemberRelation_slice__WEBPACK_IMPORTED_MODULE_8__, _winnerProjectTypes_slice__WEBPACK_IMPORTED_MODULE_9__, _media_slice__WEBPACK_IMPORTED_MODULE_10__]);
([_user_slice__WEBPACK_IMPORTED_MODULE_2__, _year_slice__WEBPACK_IMPORTED_MODULE_3__, _internships_slice__WEBPACK_IMPORTED_MODULE_4__, _instructors_slice__WEBPACK_IMPORTED_MODULE_5__, _member_slice__WEBPACK_IMPORTED_MODULE_6__, _project_slice__WEBPACK_IMPORTED_MODULE_7__, _projectMemberRelation_slice__WEBPACK_IMPORTED_MODULE_8__, _winnerProjectTypes_slice__WEBPACK_IMPORTED_MODULE_9__, _media_slice__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.configureStore)({
  reducer: {
    auth: _user_slice__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,
    years: _year_slice__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,
    internships: _internships_slice__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,
    instructors: _instructors_slice__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP,
    members: _member_slice__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP,
    projects: _project_slice__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP,
    projectMemberRelation: _projectMemberRelation_slice__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,
    winnerProjectTypes: _winnerProjectTypes_slice__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,
    media: _media_slice__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store); // Use throughout your app instead of plain `useDispatch` and `useSelector`

const useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch;
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;
store.subscribe(() => {
  const state = store.getState();
  console.log(Date.now(), ': 🚀 ~ CURR$ENT STATE:', state);
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3354:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MP": () => (/* binding */ fetchAllInstructors),
/* harmony export */   "MR": () => (/* binding */ addNewInstructor),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_u": () => (/* binding */ updateInstructorDetails),
/* harmony export */   "iS": () => (/* binding */ setSelectedInstructor)
/* harmony export */ });
/* unused harmony export deleteInstructor */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3390);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Services_HttpService__WEBPACK_IMPORTED_MODULE_1__]);
_Services_HttpService__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const fetchAllInstructors = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('instructors/fetchAllInstructors', async selectedYear => {
  const instructors = await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getAllInstructors */ .Z.getAllInstructors(selectedYear);
  return instructors;
});
const addNewInstructor = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('instructors/addNewInstructor', async newInstructor => {
  const instructor = await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].createInstructor */ .Z.createInstructor(newInstructor);
  return instructor;
});
const updateInstructorDetails = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('instructors/updateInstructorDetails', async updatedInstructor => {
  const instructor = await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].updateInstructor */ .Z.updateInstructor(updatedInstructor);
  return instructor;
});
const deleteInstructor = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('instructors/deleteInstructor', async id => {
  await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].deleteInstructor */ .Z.deleteInstructor(id);
  return id;
});
const initialState = {
  allInstructors: [],
  status: 'idle',
  error: null,
  selectedInstructor: undefined
};
const instructorsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'instructors',
  initialState,
  reducers: {
    setSelectedInstructor(state, action) {
      const id = action.payload;
      state.selectedInstructor = state.allInstructors.find(i => i.id === id);
    }

  },
  extraReducers: builder => {
    builder.addCase(fetchAllInstructors.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchAllInstructors.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.allInstructors = action.payload;
    });
    builder.addCase(fetchAllInstructors.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || null;
    });
    builder.addCase(addNewInstructor.fulfilled, (state, action) => {
      state.allInstructors.push(action.payload);
    });
    builder.addCase(updateInstructorDetails.fulfilled, (state, action) => {
      const instructorIndex = state.allInstructors.findIndex(instructor => instructor.id === action.payload.id);

      if (instructorIndex !== -1) {
        state.allInstructors[instructorIndex] = action.payload;
      }
    });
    builder.addCase(deleteInstructor.fulfilled, (state, action) => {
      const indexToDelete = state.allInstructors.findIndex(instructor => instructor.id === action.payload);

      if (indexToDelete !== -1) {
        state.allInstructors.splice(indexToDelete, 1);
      }
    });
  }
});
const {
  setSelectedInstructor
} = instructorsSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instructorsSlice.reducer);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1058:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ fetchInternships),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "l$": () => (/* binding */ createInternship),
/* harmony export */   "wA": () => (/* binding */ setSelectedInternship),
/* harmony export */   "yR": () => (/* binding */ updateInternship)
/* harmony export */ });
/* unused harmony exports deleteInternship, selectInternships, selectInternshipsStatus, selectInternshipsError */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3390);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Services_HttpService__WEBPACK_IMPORTED_MODULE_1__]);
_Services_HttpService__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const fetchInternships = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('internships/getAllInternships', async selectedYears => {
  const internships = await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getAllInternships */ .Z.getAllInternships(selectedYears);
  return internships;
});
const createInternship = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('internships/createInternship', async internship => {
  const createdInternship = await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].createInternship */ .Z.createInternship(internship);
  return createdInternship;
});
const updateInternship = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('internships/updateInternship', async internship => {
  const updatedInternship = await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].updateInternship */ .Z.updateInternship(internship);
  return updatedInternship;
});
const deleteInternship = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('internships/deleteInternship', async id => {
  const deletedInternship = await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].deleteInternship */ .Z.deleteInternship(id);
  return deletedInternship;
});
const initialState = {
  status: 'loading',
  error: null,
  internships: [],
  selectedInternship: undefined
};
const internshipsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'internships',
  initialState,
  reducers: {
    setSelectedInternship(state, action) {
      const id = action.payload;
      state.selectedInternship = state.internships?.find(i => i.id === id);
    }

  },
  extraReducers: builder => {
    builder.addCase(fetchInternships.pending, state => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchInternships.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.error = null;
      state.internships = action.payload?.length ? action.payload : [];
    });
    builder.addCase(fetchInternships.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message ?? 'Something went wrong';
    });
    builder.addCase(createInternship.pending, state => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(createInternship.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.error = null;
      state.internships.push(action.payload);
    });
    builder.addCase(createInternship.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message ?? 'Something went wrong';
    });
    builder.addCase(updateInternship.pending, state => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(updateInternship.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.error = null;
      const index = state.internships.findIndex(internship => internship.id === action.payload.id);

      if (index !== -1) {
        state.internships[index] = action.payload;
      }
    });
    builder.addCase(updateInternship.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message ?? 'Something went wrong';
    });
    builder.addCase(deleteInternship.pending, state => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(deleteInternship.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.error = null;
      state.internships = state.internships.filter(internship => internship.id !== action.payload.id);
    });
    builder.addCase(deleteInternship.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message ?? 'Something went wrong';
    });
  }
});
const {
  setSelectedInternship
} = internshipsSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (internshipsSlice.reducer);
const selectInternships = state => state.internships.internships;
const selectInternshipsStatus = state => state.internships.status;
const selectInternshipsError = state => state.internships.error;
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1733:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IG": () => (/* binding */ updateMediaThunk),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fN": () => (/* binding */ addMediaThunk),
/* harmony export */   "xY": () => (/* binding */ fetchMedia)
/* harmony export */ });
/* unused harmony exports deleteMediaThunk, setMedia */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3390);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Services_HttpService__WEBPACK_IMPORTED_MODULE_1__]);
_Services_HttpService__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const fetchMedia = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('media/fetchMedia', async () => {
  const Media = await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getMedia */ .Z.getMedia();
  return Media;
}); // thunk to add year

const addMediaThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('media/add', async (media, thunkAPI) => {
  try {
    const response = await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].createMedia */ .Z.createMedia(media);
    return response;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
}); // thunk to update Media by id

const updateMediaThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('Media/update', async (media, thunkAPI) => {
  try {
    const response = await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].updateMedia */ .Z.updateMedia(media);
    return response;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
}); // thunk to delete Media by id

const deleteMediaThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('Media/delete', async (id, thunkAPI) => {
  try {
    await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].deleteMedia */ .Z.deleteMedia(id);
    return id; // return deleted record id
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});
const today = new Date();
const currentYear = today.getFullYear();
const initialState = {
  media: [],
  selectedYear: currentYear,
  loading: 'idle'
};
const Medialice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'media',
  initialState,
  reducers: {
    setMedia: (state, action) => {
      state.media = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchMedia.fulfilled, (state, action) => {
      state.media = action.payload;
      state.loading = 'succeeded';
    }).addCase(fetchMedia.pending, state => {
      state.loading = 'pending';
    }).addCase(fetchMedia.rejected, state => {
      state.loading = 'failed';
    }).addCase(addMediaThunk.fulfilled, (state, action) => {
      state.media.push(action.payload);
    }).addCase(addMediaThunk.pending, state => {
      state.loading = 'pending';
    }).addCase(addMediaThunk.rejected, state => {
      state.loading = 'failed';
    }).addCase(updateMediaThunk.fulfilled, (state, action) => {
      const {
        id
      } = action.payload;
      const index = state.media.findIndex(y => y.id === id);

      if (index !== -1) {
        state.media[index] = action.payload;
      }
    }).addCase(updateMediaThunk.pending, state => {
      state.loading = 'pending';
    }).addCase(updateMediaThunk.rejected, state => {
      state.loading = 'failed';
    }).addCase(deleteMediaThunk.fulfilled, (state, action) => {
      const id = action.payload;
      state.media = state.media.filter(y => y.id !== id);
    }).addCase(deleteMediaThunk.pending, state => {
      state.loading = 'pending';
    }).addCase(deleteMediaThunk.rejected, state => {
      state.loading = 'failed';
    });
  }
});
const {
  setMedia
} = Medialice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Medialice.reducer);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8267:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D$": () => (/* binding */ createMember),
/* harmony export */   "Ux": () => (/* binding */ getAllMembers),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "hS": () => (/* binding */ updateMember)
/* harmony export */ });
/* unused harmony exports deleteMember, selectMembers, selectMembersStatus, selectedMemberError */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3390);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Services_HttpService__WEBPACK_IMPORTED_MODULE_1__]);
_Services_HttpService__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Importing necessary dependencies

 // Creating the asynchronous thunk functions for fetching members data asynchronously

const getAllMembers = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('members/getAllMembers', async () => {
  const members = await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getAllMembers */ .Z.getAllMembers();
  return members;
});
const createMember = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('members/createMember', async member => {
  const createdMember = await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].createMember */ .Z.createMember(member);
  return createdMember;
});
const updateMember = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('members/updateMember', async member => {
  const updatedMember = await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].updateMember */ .Z.updateMember(member);
  return updatedMember;
});
const deleteMember = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('members/deleteMember', async id => {
  const deletedMember = await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].deleteMember */ .Z.deleteMember(id);
  return deletedMember;
}); // Defining the initial state

const initialState = {
  status: 'loading',
  error: null,
  members: []
}; // Creating the members slice with reducers and extraReducers parameters

const membersSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'members',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllMembers.pending, state => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(getAllMembers.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.error = null;
      state.members = action.payload;
    });
    builder.addCase(getAllMembers.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message ?? 'Something went wrong';
    });
    builder.addCase(createMember.pending, state => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(createMember.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.error = null;
      state.members.push(action.payload);
    });
    builder.addCase(createMember.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message ?? 'Something went wrong';
    });
    builder.addCase(updateMember.pending, state => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(updateMember.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.error = null;
      const index = state.members.findIndex(member => member.id === action.payload.id);

      if (index !== -1) {
        state.members[index] = action.payload;
      }
    });
    builder.addCase(updateMember.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message ?? 'Something went wrong';
    });
    builder.addCase(deleteMember.pending, state => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(deleteMember.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.error = null;
      state.members = state.members.filter(member => member.id !== action.payload.id);
    });
    builder.addCase(deleteMember.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message ?? 'Something went wrong';
    });
  }
}); // Exporting the required values from the slice

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (membersSlice.reducer);
const selectMembers = state => state.members.members;
const selectMembersStatus = state => state.members.status;
const selectedMemberError = state => state.members.error;
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9807:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$L": () => (/* binding */ createProject),
/* harmony export */   "Xm": () => (/* binding */ updateStudentProject),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "bl": () => (/* binding */ fetchProjects),
/* harmony export */   "lT": () => (/* binding */ selectProjectById),
/* harmony export */   "ty": () => (/* binding */ updateProject)
/* harmony export */ });
/* unused harmony export deleteProject */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_HttpService_ProjectHttpService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1678);
/* harmony import */ var _Services_HttpService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3390);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Services_HttpService_ProjectHttpService__WEBPACK_IMPORTED_MODULE_1__, _Services_HttpService__WEBPACK_IMPORTED_MODULE_2__]);
([_Services_HttpService_ProjectHttpService__WEBPACK_IMPORTED_MODULE_1__, _Services_HttpService__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// project.slice.ts



const initialState = {
  projects: [],
  status: 'idle',
  error: null
};
const fetchProjects = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('projects/fetchAll', async selectedYear => {
  const projects = await _Services_HttpService_ProjectHttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getAllProjects */ .Z.getAllProjects(selectedYear);
  return projects;
});
const createProject = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('projects/create', async newProject => {
  const project = await _Services_HttpService_ProjectHttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].createProject */ .Z.createProject(newProject);
  return project;
});
const updateProject = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('projects/update', async updatedProject => {
  const project = await _Services_HttpService_ProjectHttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].updateProject */ .Z.updateProject(updatedProject);
  return project;
});
const updateStudentProject = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('projects/updateStudent', async updatedProject => {
  const project = await _Services_HttpService__WEBPACK_IMPORTED_MODULE_2__/* ["default"].updateStudentProject */ .Z.updateStudentProject(updatedProject);
  return project;
});
const deleteProject = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('projects/delete', async id => {
  const project = await _Services_HttpService_ProjectHttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].deleteProject */ .Z.deleteProject(id);
  return project;
});
const projectSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'projects',
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder.addCase(fetchProjects.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.projects = action.payload;
    });
    builder.addCase(fetchProjects.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message ?? 'Something went wrong while fetching projects';
    });
    builder.addCase(createProject.fulfilled, (state, action) => {
      state.projects.push(action.payload);
    });
    builder.addCase(updateProject.fulfilled, (state, action) => {
      const updatedProject = action.payload;
      const existingIndex = state.projects.findIndex(project => project.id === updatedProject.id);

      if (existingIndex !== -1) {
        state.projects[existingIndex] = updatedProject;
      }
    });
    builder.addCase(updateStudentProject.fulfilled, (state, action) => {
      const updatedProject = action.payload;
      const existingIndex = state.projects.findIndex(project => project.id === updatedProject.id);

      if (existingIndex !== -1) {
        state.projects[existingIndex] = updatedProject;
      }
    });
    builder.addCase(deleteProject.fulfilled, (state, action) => {
      const deletedProject = action.payload;
      state.projects = state.projects.filter(project => project.id !== deletedProject.id);
    });
  }

});
const selectProjectById = id => state => state.projects.projects.find(p => p.id === id);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectSlice.reducer);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4267:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports createProjectMemberRelation, deleteProjectMemberRelation, selectAllProjectMemberRelations */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3390);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Services_HttpService__WEBPACK_IMPORTED_MODULE_1__]);
_Services_HttpService__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const initialState = {
  projectMemberRelations: [],
  status: 'idle'
};
const createProjectMemberRelation = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('projectMemberRelation/create', async (projectMemberRelation, {
  rejectWithValue
}) => {
  try {
    return await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].createProjectMemberRelation */ .Z.createProjectMemberRelation(projectMemberRelation);
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
const deleteProjectMemberRelation = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('projectMemberRelation/delete', async (id, {
  rejectWithValue
}) => {
  try {
    return await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].deleteProjectMemberRelation */ .Z.deleteProjectMemberRelation(id);
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
const projectMemberRelationSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'projectMemberRelation',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(createProjectMemberRelation.pending, state => {
      state.status = 'loading';
    }).addCase(createProjectMemberRelation.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.projectMemberRelations.push(action.payload);
    }).addCase(createProjectMemberRelation.rejected, state => {
      state.status = 'failed';
    }).addCase(deleteProjectMemberRelation.pending, state => {
      state.status = 'loading';
    }).addCase(deleteProjectMemberRelation.fulfilled, (state, action) => {
      state.status = 'succeeded';
      const index = state.projectMemberRelations.findIndex(r => r.id === action.payload.id);

      if (index !== -1) {
        state.projectMemberRelations.splice(index, 1);
      }
    }).addCase(deleteProjectMemberRelation.rejected, state => {
      state.status = 'failed';
    });
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectMemberRelationSlice.reducer);
const selectAllProjectMemberRelations = state => state.projectMemberRelation.projectMemberRelations;
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1134:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ab": () => (/* binding */ logFromStorage),
/* harmony export */   "UC": () => (/* binding */ loginStudent),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "kS": () => (/* binding */ logout),
/* harmony export */   "x4": () => (/* binding */ login)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3390);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Services_HttpService__WEBPACK_IMPORTED_MODULE_1__]);
_Services_HttpService__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const login = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('auth/login', async payload => {
  const {
    username,
    password
  } = payload;
  const data = await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].login */ .Z.login({
    username,
    password
  });
  return data;
});
const loginStudent = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('auth/login', async payload => {
  const {
    username,
    password
  } = payload;
  const data = await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].loginStudent */ .Z.loginStudent({
    username,
    password
  });
  return data;
});
const logout = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('auth/logout', async () => {
  const response = await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].logout */ .Z.logout();
  return response;
});
const initialState = {
  isLoggedIn: null,
  id: '',
  username: '',
  role: 'User',
  status: 'idle',
  kickUser: false,
  authDone: false
};
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'user',
  initialState,
  reducers: {
    logFromStorage: (state, action) => {
      const {
        role,
        username
      } = action.payload;
      const isValidRole = ['User', 'Admin'].includes(role);
      const isValidUser = isValidRole && !!username?.length;
      state.authDone = true;
      state.isLoggedIn = isValidUser;
      state.kickUser = isValidUser ? false : true;
      state.role = isValidRole ? role : 'User';
      state.username = username;
      state.status = isValidRole && isValidUser ? 'succeeded' : 'idle';
    }
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.authDone = true;
      state.kickUser = false;
      if (!action.payload) throw new Error('Invalid payload at login thunk');
      const {
        username,
        role
      } = action.payload;
      if (!username || !role) throw new Error('Invalid payload at login thunk');
      state.username = action.payload.username;
      state.role = action.payload.role;
      state.id = action.payload.id;
      state.status = 'succeeded';
    });
    builder.addCase(login.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = 'idle';
    });
    builder.addCase(logout.fulfilled, state => {
      return structuredClone(initialState);
    });
  }
});
const {
  logFromStorage
} = userSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6371:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "kT": () => (/* binding */ fetchWinnerProjectTypes)
/* harmony export */ });
/* unused harmony export updateWinnerProjectType */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3390);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Services_HttpService__WEBPACK_IMPORTED_MODULE_1__]);
_Services_HttpService__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const initialState = {
  winnerProjectTypes: [],
  status: 'idle',
  error: null
};
const fetchWinnerProjectTypes = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('winnerProjectTypes/fetchAll', async () => {
  const winnerProjectTypes = await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getAllWinnerProjectTypes */ .Z.getAllWinnerProjectTypes();
  return winnerProjectTypes;
});
const updateWinnerProjectType = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('winnerProjectTypes/update', async updatedWinnerProjectType => {
  const winnerProjectType = await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].updateWinnerProjectType */ .Z.updateWinnerProjectType(updatedWinnerProjectType);
  return winnerProjectType;
});
const winnerProjectTypeSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'winnerProjectTypes',
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder.addCase(fetchWinnerProjectTypes.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchWinnerProjectTypes.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.winnerProjectTypes = action.payload;
    });
    builder.addCase(fetchWinnerProjectTypes.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message ?? 'Something went wrong while fetching winner project types';
    });
    builder.addCase(updateWinnerProjectType.fulfilled, (state, action) => {
      const updatedWinnerProjectType = action.payload;
      const existingIndex = state.winnerProjectTypes.findIndex(winnerProjectType => winnerProjectType.id === updatedWinnerProjectType.id);

      if (existingIndex !== -1) {
        state.winnerProjectTypes[existingIndex] = updatedWinnerProjectType;
      }
    });
  }

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (winnerProjectTypeSlice.reducer);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 556:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mq": () => (/* binding */ setYear),
/* harmony export */   "ZM": () => (/* binding */ addYearThunk),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "kK": () => (/* binding */ updateYearThunk),
/* harmony export */   "qo": () => (/* binding */ fetchYears)
/* harmony export */ });
/* unused harmony exports deleteYearThunk, setYears */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3390);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Services_HttpService__WEBPACK_IMPORTED_MODULE_1__]);
_Services_HttpService__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const fetchYears = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('year/fetchYears', async () => {
  const years = await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getYears */ .Z.getYears();
  return years;
}); // thunk to add year

const addYearThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('years/addYear', async (year, thunkAPI) => {
  try {
    const response = await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].createYear */ .Z.createYear(year);
    return response;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
}); // thunk to update year by id

const updateYearThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('years/updateYear', async (year, thunkAPI) => {
  try {
    const response = await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].updateYear */ .Z.updateYear(year);
    return response;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
}); // thunk to delete year by id

const deleteYearThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('years/deleteYear', async (id, thunkAPI) => {
  try {
    await _Services_HttpService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].deleteYear */ .Z.deleteYear(id);
    return id; // return deleted record id
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});
const today = new Date();
const currentYear = today.getFullYear();
const initialState = {
  years: [],
  selectedYear: currentYear,
  loading: 'idle'
};
const yearSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'year',
  initialState,
  reducers: {
    setYears: (state, action) => {
      state.years = action.payload;
      console.log('🚀 ~ file: year.slice.ts ~ setYears ~ state.years:', state.years);
    },
    setYear: (state, action) => {
      const target = state.years.find(y => '' + y.year === action.payload);

      if (!target?.year) {
        throw new Error('Year passed to setYear is not in years state!!');
      }

      state.selectedYear = target.year;
    }
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchYears.fulfilled, (state, action) => {
      state.years = action.payload;
      state.loading = 'succeeded';
    }).addCase(fetchYears.pending, state => {
      state.loading = 'pending';
    }).addCase(fetchYears.rejected, state => {
      state.loading = 'failed';
    }).addCase(addYearThunk.fulfilled, (state, action) => {
      state.years.push(action.payload);
    }).addCase(addYearThunk.pending, state => {
      state.loading = 'pending';
    }).addCase(addYearThunk.rejected, state => {
      state.loading = 'failed';
    }).addCase(updateYearThunk.fulfilled, (state, action) => {
      const {
        id
      } = action.payload;
      const index = state.years.findIndex(y => y.id === id);

      if (index !== -1) {
        state.years[index] = action.payload;
      }
    }).addCase(updateYearThunk.pending, state => {
      state.loading = 'pending';
    }).addCase(updateYearThunk.rejected, state => {
      state.loading = 'failed';
    }).addCase(deleteYearThunk.fulfilled, (state, action) => {
      const id = action.payload;
      state.years = state.years.filter(y => y.id !== id);
    }).addCase(deleteYearThunk.pending, state => {
      state.loading = 'pending';
    }).addCase(deleteYearThunk.rejected, state => {
      state.loading = 'failed';
    });
  }
});
const {
  setYears,
  setYear
} = yearSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (yearSlice.reducer);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;