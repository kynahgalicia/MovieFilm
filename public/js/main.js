/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/actors.js":
/*!********************************!*\
  !*** ./resources/js/actors.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var actor = {
  show: function show(response) {
    var template = "\n        <thead>\n            <tr>\n                <th>Actor ID</th>\n                <th>Name</th>\n                <th>Birthday</th>\n                <th>Notes</th>\n                <th>Edit</th>\n                <th>Delete</th>\n            </tr>\n        </thead>\n        <tbody id=\"actorBody\">\n        </tbody>\n    ";
    var createButton = "<button type=\"button\" class=\"btn btn-outline-dark\" data-mdb-ripple-color=\"dark\" data-toggle=\"modal\" data-target=\"#actorCreateModal\"> Add Actor </button>";
    $('#tableContent').html(template);
    $('#createButton').html(createButton); //ACTOR VIEW

    response.forEach(function (element) {
      $('#actorBody').append("\n                <tr>\n                    <td>".concat(element.actor_id, "</td>\n                    <td>").concat(element.name, "</td>\n                    <td>").concat(element.birthday, "</td>\n                    <td>").concat(element.notes, "</td>\n                    <td>\n                        <i class=\"fas fa-edit actorEditIcon\" data-toggle=\"modal\" data-target=\"#actorEditModal\" data-id=\"\" id=\"").concat(element.actor_id, "\"></i>\n                    </td>\n                    <td><i class=\"fas fa-trash-alt\"></i></td>\n                </tr>\n            "));
    }); //ACTOR CREATE

    $("#actorCreateSave").on('click', function (e) {
      e.preventDefault();
      var data = $("#actorCreateForm").serialize();
      console.log(data);
      $.ajax({
        type: "post",
        url: "/api/Actor",
        data: data,
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        dataType: "json",
        success: function success(data) {
          console.log(data);
          $('#actorCreateModal').hide();
          $('#actorBody').append("\n                        <tr>\n                            <td>".concat(data.actor_id, "</td>\n                            <td>").concat(data.name, "</td>\n                            <td>").concat(data.birthday, "</td>\n                            <td>").concat(data.notes, "</td>\n                            <td>\n                                <i class=\"fas fa-edit\" data-toggle=\"modal\" data-target=\"#actorEditModal\" data-id=\"").concat(data.actor_id, "\" id=\"actorEditIcon\"></i>\n                            </td>\n                            <td><i class=\"fas fa-trash-alt\"></i></td>\n                        </tr>\n                    "));
        },
        error: function error(_error) {
          console.log('error');
        }
      });
    }); //ACTOR EDIT

    $('.actorEditIcon').on('click', function (e) {
      var id = this.id;
      console.log(id);
      $('<input>').attr({
        type: 'hidden',
        id: 'actor_id',
        name: 'actor_id',
        value: id
      }).appendTo('#actorEditForm');
      $.ajax({
        type: 'GET',
        url: '/api/Actor/' + id + '/edit',
        success: function success(data) {
          console.log(data);
          $('.actorName').val(data.name);
          $('.actorBirthday').val(data.birthday);
          $('.actorNotes').val(data.notes);
        },
        error: function error() {
          console.log('AJAX load did not work');
          alert('error');
        }
      });
    }); //ACTOR UPDATE

    $("#actorEditSave").on('click', function (e) {
      var id = $("#actor_id").val();
      var data = $("#actorEditForm").serialize();
      console.log(id);
      console.log(data);
      $.ajax({
        type: "PUT",
        url: "/api/Actor/" + id,
        data: data,
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        dataType: "json",
        success: function success(data) {
          console.log(data);
          $('#actorEditModal').each(function () {
            $(this).modal('hide');
          });
        },
        error: function error(_error2) {
          console.log('error');
        }
      });
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (actor);

/***/ }),

/***/ "./resources/js/genres.js":
/*!********************************!*\
  !*** ./resources/js/genres.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var genre = {
  show: function show(response) {
    var template = "\n            <thead>\n                <tr>\n                <th>Genre ID</th>\n                    <th>Genre</th>\n                    <th>Edit</th>\n                    <th>Delete</th>\n                </tr>\n            </thead>\n            <tbody id=\"genreBody\">\n            </tbody>\n        ";
    var createButton = "<button type=\"button\" class=\"btn btn-outline-dark\" data-mdb-ripple-color=\"dark\" data-toggle=\"modal\" data-target=\"#genreCreateModal\"> Add Genre </button>";
    $('#tableContent').html(template);
    $('#createButton').html(createButton);
    response.forEach(function (element) {
      $('#genreBody').append("\n                <tr>\n                    <td>".concat(element.genre_id, "</td>\n                    <td>").concat(element.genre, "</td>\n                    <td>\n                        <i class=\"fas fa-edit\" data-toggle=\"modal\" data-target=\"#genreEditModal\" data-id=\"").concat(element.genre_id, "\" id=\"genreEditIcon\"></i>\n                    </td>\n                    <td><i class=\"fas fa-trash-alt\"></i></td>\n                </tr>\n            "));
    }); //GENRE CREATE

    $("#genreCreateSave").on('click', function (e) {
      e.preventDefault();
      var data = $("#genreCreateForm").serialize();
      console.log(data);
      $.ajax({
        type: "post",
        url: "/api/Genre",
        data: data,
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        dataType: "json",
        success: function success(data) {
          console.log(data);
          $('#genreCreateModal').hide();
          $('#genreBody').append("\n                        <tr>\n                            <td>".concat(data.genre_id, "</td>\n                            <td>").concat(data.genre, "</td>\n                            <td>\n                                <i class=\"fas fa-edit\" data-toggle=\"modal\" data-target=\"#genreEditModal\" data-id=\"").concat(data.genre_id, "\" id=\"genreEditIcon\"></i>\n                            </td>\n                            <td><i class=\"fas fa-trash-alt\"></i></td>\n                        </tr>\n                    "));
        },
        error: function error(_error) {
          console.log('error');
        }
      });
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genre);

/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actors */ "./resources/js/actors.js");
/* harmony import */ var _movies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies */ "./resources/js/movies.js");
/* harmony import */ var _genres__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./genres */ "./resources/js/genres.js");
/* harmony import */ var _roles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roles */ "./resources/js/roles.js");
/* harmony import */ var _producers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./producers */ "./resources/js/producers.js");





$('.link').on('click', function (e) {
  var link = e.currentTarget.dataset.id;
  $.ajax({
    type: 'GET',
    url: '/api/' + link + '/all',
    error: function error(response) {
      console.log(response);
    },
    success: function success(response) {
      switch (link) {
        //Movie Case
        case 'movie':
          _movies__WEBPACK_IMPORTED_MODULE_1__.default.show(response);
          break;
        //Actor Case

        case 'actor':
          _actors__WEBPACK_IMPORTED_MODULE_0__.default.show(response);
          break;
        //PRODUCER CASE

        case 'producer':
          _producers__WEBPACK_IMPORTED_MODULE_4__.default.show(response);
          break;
        //GENRE CASE

        case 'genre':
          _genres__WEBPACK_IMPORTED_MODULE_2__.default.show(response);
          break;
        //ROLE CASE

        case 'role':
          _roles__WEBPACK_IMPORTED_MODULE_3__.default.show(response);
          break;

        default:
          break;
      }
    }
  });
});

/***/ }),

/***/ "./resources/js/movies.js":
/*!********************************!*\
  !*** ./resources/js/movies.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var movie = {
  show: function show(response) {
    var template = "\n                        <thead>\n                            <tr>\n                                <th>Movie ID</th>\n                                <th>Title</th>\n                                <th>Year</th>\n                                <th>Plot</th>\n                                <th>Genre</th>\n                                <th>Producer</th>\n                                <th>Edit</th>\n                                <th>Delete</th>\n                            </tr>\n                        </thead>\n                        <tbody id=\"movieBody\">\n                        </tbody>\n                    ";
    var createButton = "<button type=\"button\" class=\"btn btn-outline-dark\" data-mdb-ripple-color=\"dark\" data-toggle=\"modal\" id=\"movieCreateButton\" data-target=\"#movieCreateModal\"> Add Movie </button>";
    $('#tableContent').html(template);
    $('#createButton').html(createButton); //MOVIE VIEW

    response.forEach(function (element) {
      $('#movieBody').append("\n                            <tr>\n                                <td>".concat(element.movie_id, "</td>\n                                <td>").concat(element.title, "</td>\n                                <td>").concat(element.year, "</td>\n                                <td>").concat(element.plot, "</td>\n                                <td>").concat(element.genre_id, "</td>\n                                <td>").concat(element.producer_id, "</td>\n                                <td>\n                                    <i class=\"fas fa-edit movieEditIcon\" data-toggle=\"modal\" data-target=\"#movieEditModal\" data-id=\"\" id=\"").concat(element.movie_id, "\"></i>\n                                </td>\n                                <td>\n                                    <i class=\"fas fa-trash-alt\"></i></a>\n                                </td>\n                            </tr>\n                        "));
    }); // SHOW GENRE PRODUCER ON CREATE DROPDOWN

    $('#movieCreateButton').on('click', function () {
      //GET GENRES
      $.ajax({
        type: "GET",
        url: "/api/Genre",
        dataType: "json",
        success: function success(data) {
          console.log(data);
          var select = $('#genre_id');
          $.each(data, function (data, result) {
            select.append('<option name=\'genre_id\' value=\'' + result.genre_id + ' \'>' + result.genre + '</option>');
          });
        },
        error: function error(_error) {
          console.log('error');
        }
      }); //GET PRODUCERS

      $.ajax({
        type: "GET",
        url: "/api/Producer",
        dataType: "json",
        success: function success(data) {
          console.log(data);
          var select = $('#producer_id');
          $.each(data, function (data, result) {
            select.append('<option name=\'producer_id\' value=\'' + result.producer_id + ' \'>' + result.name + '</option>');
          });
        },
        error: function error(_error2) {
          console.log('error');
        }
      });
    }); //MOVIE CREATE

    $("#movieCreateSave").on('click', function (e) {
      e.preventDefault();
      var data = $("#movieCreateForm").serialize();
      console.log(data);
      $.ajax({
        type: "POST",
        url: "/api/Movie",
        data: data,
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        dataType: "json",
        success: function success(data) {
          console.log(data);
          $('#movieCreateModal').hide();
          $('#movieBody').append("\n                                    <tr>\n                                        <td>".concat(data.movie_id, "</td>\n                                        <td>").concat(data.title, "</td>\n                                        <td>").concat(data.year, "</td>\n                                        <td>").concat(data.plot, "</td>\n                                        <td>").concat(data.genre_id, "</td>\n                                        <td>").concat(data.producer_id, "</td>\n                                        <td>\n                                            <i class=\"fas fa-edit movieEditIcon\" data-toggle=\"modal\" data-target=\"#movieEditModal\" data-id=\"").concat(data.movie_id, "\" id=\"movieEditIcon\"></i>\n                                        </td>\n                                        <td><i class=\"fas fa-trash-alt\"></i></td>\n                                    </tr>\n                                "));
        },
        error: function error(_error3) {
          console.log('error');
        }
      });
    }); //MOVIE EDIT

    $('.movieEditIcon').on('click', function (e) {
      //GET GENRES
      $.ajax({
        type: "GET",
        url: "/api/Genre",
        dataType: "json",
        success: function success(data) {
          console.log(data);
          var select = $('#genres');
          $.each(data, function (data, result) {
            select.append('<option name=\'genre_id\' value=\'' + result.genre_id + ' \'>' + result.genre + '</option>');
          });
        },
        error: function error(_error4) {
          console.log('error');
        }
      }); //GET PRODUCERS

      $.ajax({
        type: "GET",
        url: "/api/Producer",
        dataType: "json",
        success: function success(data) {
          console.log(data);
          var select = $('#producers');
          $.each(data, function (data, result) {
            select.append('<option name=\'producer_id\' value=\'' + result.producer_id + ' \'>' + result.name + '</option>');
          });
        },
        error: function error(_error5) {
          console.log('error');
        }
      });
      var id = this.id;
      console.log(id);
      $('<input>').attr({
        type: 'hidden',
        id: 'movie_id',
        name: 'movie_id',
        value: id
      }).appendTo('#movieEditForm');
      $.ajax({
        type: 'GET',
        url: '/api/Movie/' + id + '/edit',
        success: function success(data) {
          console.log(data);
          $('.movieTitle').val(data.title);
          $('.movieYear').val(data.year);
          $('.moviePlot').val(data.plot);
          $('.movieGenre').val(data.genre_id);
          $('.movieProducer').val(data.producer_id);
        },
        error: function error() {
          console.log('AJAX load did not work');
          alert('error');
        }
      });
    }); //MOVIE UPDATE

    $("#movieEditSave").on('click', function (e) {
      var id = $("#movie_id").val();
      var data = $("#movieEditForm").serialize();
      console.log(id);
      console.log(data);
      $.ajax({
        type: "PUT",
        url: "/api/Movie/" + id,
        data: data,
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        dataType: "json",
        success: function success(data) {
          console.log(data);
          $('#movieEditModal').each(function () {
            $(this).modal('hide');
          });
        },
        error: function error(_error6) {
          console.log('error');
        }
      });
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movie);

/***/ }),

/***/ "./resources/js/producers.js":
/*!***********************************!*\
  !*** ./resources/js/producers.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var producer = {
  show: function show(response) {
    var template = "\n            <thead>\n                <tr>\n                    <th>Producer ID</th>\n                    <th>Name</th>\n                    <th>Birthday</th>\n                    <th>Notes</th>\n                    <th>Edit</th>\n                    <th>Delete</th>\n                </tr>\n            </thead>\n            <tbody id=\"producerBody\">\n            </tbody>\n        ";
    var createButton = "<button type=\"button\" class=\"btn btn-outline-dark\" data-mdb-ripple-color=\"dark\" data-toggle=\"modal\" data-target=\"#producerCreateModal\"> Add Producer </button>";
    $('#tableContent').html(template);
    $('#createButton').html(createButton); //PRODUCER VIEW

    response.forEach(function (element) {
      $('#producerBody').append("\n                <tr>\n                    <td>".concat(element.producer_id, "</td>\n                    <td>").concat(element.name, "</td>\n                    <td>").concat(element.birthday, "</td>\n                    <td>").concat(element.notes, "</td>\n                    <td>\n                        <i class=\"fas fa-edit producerEditIcon\" data-toggle=\"modal\" data-target=\"#producerEditModal\" data-id=\"\" id=\"").concat(element.producer_id, "\"></i>\n                    </td>\n                    <td><i class=\"fas fa-trash-alt\"></i></td>\n                </tr>\n            "));
    }); //PRODUCER CREATE

    $("#producerCreateSave").on('click', function (e) {
      e.preventDefault();
      var data = $("#producerCreateForm").serialize();
      console.log(data);
      $.ajax({
        type: "post",
        url: "/api/Producer",
        data: data,
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        dataType: "json",
        success: function success(data) {
          console.log(data);
          $('#producerCreateModal').hide();
          $('#producerBody').append("\n                        <tr>\n                            <td>".concat(data.producer_id, "</td>\n                            <td>").concat(data.name, "</td>\n                            <td>").concat(data.birthday, "</td>\n                            <td>").concat(data.notes, "</td>\n                            <td>\n                                <i class=\"fas fa-edit\" data-toggle=\"modal\" data-target=\"#producerEditModal\" data-id=\"").concat(data.producer_id, "\" id=\"producerEditIcon\"></i>\n                            </td>\n                            <td><i class=\"fas fa-trash-alt\"></i></td>\n                        </tr>\n                    "));
        },
        error: function error(_error) {
          console.log('error');
        }
      });
    }); //PRODUCER EDIT

    $('.producerEditIcon').on('click', function (e) {
      var id = this.id;
      console.log(id);
      $('<input>').attr({
        type: 'hidden',
        id: 'producer_id',
        name: 'producer_id',
        value: id
      }).appendTo('#producerEditForm');
      $.ajax({
        type: 'GET',
        url: '/api/Producer/' + id + '/edit',
        success: function success(data) {
          console.log(data);
          $('.producerName').val(data.name);
          $('.producerBirthday').val(data.birthday);
          $('.producerNotes').val(data.notes);
        },
        error: function error() {
          console.log('AJAX load did not work');
          alert('error');
        }
      });
    }); //PRODUCER EDIT

    $("#producerEditSave").on('click', function (e) {
      var id = $("#producer_id").val();
      var data = $("#producerEditForm").serialize();
      console.log(id);
      console.log(data); // $.ajax({
      //     type: "PUT",
      //     url: "/api/Producer/"+ id ,
      //     data: data,
      //     headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
      //     dataType: "json",
      //     success: function(data) {
      //         console.log(data);
      //         $('#producerEditModal').each(function(){
      //                 $(this).modal('hide'); 
      //             });
      //     },
      //     error: function(error) {
      //         console.log('error');
      //     }
      // });
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (producer);

/***/ }),

/***/ "./resources/js/roles.js":
/*!*******************************!*\
  !*** ./resources/js/roles.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var role = {
  show: function show(response) {
    var template = "\n                        <thead>\n                            <tr>\n                                <th>Role ID</th>\n                                <th>Role</th>\n                                <th>Edit</th>\n                                <th>Delete</th>\n                            </tr>\n                        </thead>\n                        <tbody id=\"roleBody\">\n                        </tbody>\n                    ";
    var createButton = "<button type=\"button\" class=\"btn btn-outline-dark\" data-mdb-ripple-color=\"dark\" data-toggle=\"modal\" data-target=\"#roleCreateModal\"> Add Role </button>";
    $('#tableContent').html(template);
    $('#createButton').html(createButton);
    response.forEach(function (element) {
      $('#roleBody').append("\n                            <tr>\n                                <td>".concat(element.role_id, "</td>\n                                <td>").concat(element.roles, "</td>\n                                <td>\n                                    <i class=\"fas fa-edit\" data-toggle=\"modal\" data-target=\"#roleEditModal\" data-id=\"").concat(element.role_id, "\" id=\"roleEditIcon\"></i>\n                                </td>\n                                <td><i class=\"fas fa-trash-alt\"></i></td>\n                            </tr>\n                        "));
    }); //ROLE CREATE

    $("#roleCreateSave").on('click', function (e) {
      e.preventDefault();
      var data = $("#roleCreateForm").serialize();
      console.log(data);
      $.ajax({
        type: "post",
        url: "/api/Role",
        data: data,
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        dataType: "json",
        success: function success(data) {
          console.log(data);
          $('#roleCreateModal').hide();
          $('#roleBody').append("\n                                    <tr>\n                                        <td>".concat(data.role_id, "</td>\n                                        <td>").concat(data.roles, "</td>\n                                        <td>\n                                            <i class=\"fas fa-edit\" data-toggle=\"modal\" data-target=\"#roleEditModal\" data-id=\"").concat(data.role_id, "\" id=\"roleEditIcon\"></i>\n                                        </td>\n                                        <td><i class=\"fas fa-trash-alt\"></i></td>\n                                    </tr>\n                                "));
        },
        error: function error(_error) {
          console.log('error');
        }
      });
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (role);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./resources/js/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;