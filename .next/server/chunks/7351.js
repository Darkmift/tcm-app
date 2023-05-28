"use strict";
exports.id = 7351;
exports.ids = [7351];
exports.modules = {

/***/ 7351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FM": () => (/* binding */ VALID_YEAR_REGEX),
/* harmony export */   "RC": () => (/* binding */ INTERNSHIP_LINKS),
/* harmony export */   "Ul": () => (/* binding */ COLLECTIONS)
/* harmony export */ });
/* unused harmony exports VALID_EMAIL_REGEX, IMAGE_ASSETS_FOLDER_PATH, PAGES_LINKS, YEAR_LINKS, AVATAR_LINKS, TOKEN_LS_KEY, ROLE_LS_KEY, USERNAME_LS_KEY, SLIDER_DATA */
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

/***/ })

};
;