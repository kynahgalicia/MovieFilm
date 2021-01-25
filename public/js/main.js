/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/actorModals.js":
/*!*************************************!*\
  !*** ./resources/js/actorModals.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ actorModal
/* harmony export */ });
function actorModal() {
  return "\n    <div class=\"modal fade\" id=\"actorCreateModal\" tabindex=\"-1\" aria-labelledby=\"actorCreate\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header bg-dark\">\n                    <h3 class=\"modal-title\" style=\"color:white\">Create New Actor</h3>\n                </div>\n\n                <div class=\"modal-body\">\n                    <form class=\"actorCreateForm\" id=\"actorCreateForm\">\n                        <div class=\"form-group\">\n                            <label for=\"name\">Name</label>\n                            <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\">\n                        </div>\n                        \n                        <div class=\"form-group\">\n                            <label for=\"birthday\">Birthday</label>\n                            <input type=\"text\" class=\"form-control\" id=\"birthday\" name=\"birthday\">\n                        </div>\n                        \n                        <div class=\"form-outline\">\n                            <label class=\"form-label\" for=\"notes\">Notes</label>\n                            <textarea class=\"form-control\" id=\"notes\" name=\"notes\" rows=\"4\"></textarea>\n                        </div>\n\n                        <br>\n                        <button type=\"submit\" class=\"btn btn-dark\" id=\"actorCreateSave\">Save</button>\n                        <button type=\"button\" class=\"btn btn-outline-dark\" data-bs-dismiss=\"modal\">Cancel</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"actorEditModal\" tabindex=\"-1\" aria-labelledby=\"actorEditModal\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header bg-dark\">\n                    <h3 class=\"modal-title\" style=\"color:white\">Edit Actor</h3>\n                </div>\n\n                <div class=\"modal-body\">\n                    <form class=\"actorEditForm\" id=\"actorEditForm\">\n                        <div class=\"form-group\">\n                            <label for=\"name\">Name</label>\n                            <input type=\"text\" class=\"form-control actorName\" id=\"name\" name=\"name\">\n                        </div>\n                        \n                        <div class=\"form-group\">\n                            <label for=\"birthday\">Birthday</label>\n                            <input type=\"text\" class=\"form-control actorBirthday\" id=\"birthday\" name=\"birthday\">\n                        </div>\n                        \n                        <div class=\"form-outline\">\n                            <label class=\"form-label\" for=\"notes\">Notes</label>\n                            <textarea class=\"form-control actorNotes\" id=\"notes\" name=\"notes\" rows=\"4\"></textarea>\n                        </div>\n\n                        <br>\n                        <button type=\"submit\" class=\"btn btn-dark actorEditSave\" id=\"actorEditSave\">Save</button>\n                        <button type=\"button\" class=\"btn btn-outline-dark\" data-bs-dismiss=\"modal\">Cancel</button>\n                        \n                        </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    ";
}

/***/ }),

/***/ "./resources/js/actors.js":
/*!********************************!*\
  !*** ./resources/js/actors.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _actorModals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actorModals */ "./resources/js/actorModals.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ "./resources/js/link.js");


var actor = {
  show: function show(response) {
    var template = "\n        <div class=\"table-responsive\">\n            <br>\n            <button type=\"button\" class=\"btn btn-outline-dark\" data-mdb-ripple-color=\"dark\" data-bs-toggle=\"modal\" id=\"actorCreateButton\" data-bs-target=\"#actorCreateModal\"> Add Actor </button>\n            <br>\n            <table class=\"table\" id=\"tableContent\">\n                <thead class=\"table-dark\">\n                    <tr>\n                        <th>Actor ID</th>\n                        <th>Name</th>\n                        <th>Birthday</th>\n                        <th>Notes</th>\n                        <th>Edit</th>\n                        <th>Delete</th>\n                    </tr>\n                </thead>\n                <tbody class=\"selectable\" id=\"actorBody\">\n\n                </tbody>\n            </table>\n        </div>\n    ";
    $('#content').html(template); //ACTOR VIEW

    response.forEach(function (element) {
      $('#actorBody').append("\n                <tr>\n                    <td>".concat(element.actor_id, "</td>\n                    <td>").concat(element.name, "</td>\n                    <td>").concat(element.birthday, "</td>\n                    <td>").concat(element.notes, "</td>\n                    <td>\n                        <i class=\"fas fa-edit actorEditIcon\" data-bs-toggle=\"modal\" data-bs-target=\"#actorEditModal\" data-bs-id=\"\" id=\"").concat(element.actor_id, "\"></i>\n                    </td>\n                    <td><i class=\"fas fa-trash-alt actorDeleteIcon\" id=\"").concat(element.actor_id, "\"></i></td>\n                </tr>\n            "));
    });
    $('.selectable').selectable();
    $('#content').append(_actorModals__WEBPACK_IMPORTED_MODULE_0__.default); //ACTOR CREATE

    $('#actorCreateForm').validate({
      rules: {
        name: {
          required: true,
          minlength: 5
        },
        birthday: {
          required: true,
          minlength: 10,
          maxlength: 10
        },
        notes: {
          required: true,
          minlength: 10
        }
      },
      messages: {
        name: {
          required: 'required'
        },
        birthday: {
          required: 'required'
        },
        notes: {
          required: 'required'
        }
      },
      errorPlacement: function errorPlacement(error, element) {
        error.insertAfter(element);
      },
      submitHandler: function submitHandler(form, e) {
        e.preventDefault();
        var data = $("#actorCreateForm").serialize();
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
            $('#actorCreateModal').modal('hide'); //clearing of input fields

            $('#actorCreateForm :input').each(function () {
              var input = $(this);
              input.val('');
            });
            $('#actorBody').append("\n                            <tr>\n                                <td>".concat(data.actor_id, "</td>\n                                <td>").concat(data.name, "</td>\n                                <td>").concat(data.birthday, "</td>\n                                <td>").concat(data.notes, "</td>\n                                <td>\n                                    <i class=\"fas fa-edit actorEditIcon\" data-toggle=\"modal\" data-target=\"#actorEditModal\" data-id=\"\" id=\"").concat(data.actor_id, "\"></i>\n                                </td>\n                                <td><i class=\"fas fa-trash-alt actorDeleteIcon\" id=\"").concat(data.actor_id, "\"></i></td>\n                            </tr>\n                        "));
          },
          error: function error(_error) {
            console.log('error');
          }
        });
      }
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

    $('#actorEditForm').validate({
      rules: {
        name: {
          required: true,
          minlength: 5
        },
        birthday: {
          required: true,
          minlength: 10,
          maxlength: 10
        },
        notes: {
          required: true,
          minlength: 10
        }
      },
      messages: {
        name: {
          required: 'required'
        },
        birthday: {
          required: 'required'
        },
        notes: {
          required: 'required'
        }
      },
      errorPlacement: function errorPlacement(error, element) {
        error.insertAfter(element);
      },
      submitHandler: function submitHandler(form, e) {
        e.preventDefault();
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
            $('#actorEditModal').modal('hide');
            (0,_link__WEBPACK_IMPORTED_MODULE_1__.default)('actor');
          },
          error: function error(_error2) {
            console.log('error');
          }
        });
      }
    }); //ACTOR DELETE

    $('.actorDeleteIcon').on('click', function (e) {
      e.preventDefault();
      var id = this.id;
      var $tr = $(this).closest('tr');
      console.log(id);

      if (confirm('Are you sure you want to delete?')) {
        $.ajax({
          type: "DELETE",
          url: "/api/Actor/" + id,
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          dataType: "json",
          success: function success(data) {
            console.log(data);
            $tr.remove();
          },
          error: function error(data) {
            console.log('Error:', data);
          }
        });
      }
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (actor);

/***/ }),

/***/ "./resources/js/genreModals.js":
/*!*************************************!*\
  !*** ./resources/js/genreModals.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ genreModal
/* harmony export */ });
function genreModal() {
  return "\n    <div class=\"modal fade\" id=\"genreCreateModal\" tabindex=\"-1\" aria-labelledby=\"genreCreate\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header bg-dark\">\n                    <h3 class=\"modal-title\" style=\"color:white\">Create New Genre</h3>\n                </div>\n\n                <div class=\"modal-body\">\n                    <form class=\"genreCreateForm\" id=\"genreCreateForm\">\n                        <div class=\"form-group\">\n                            <label for=\"genre\">Genre</label>\n                            <input type=\"text\" class=\"form-control\" id=\"genre\" name=\"genre\">\n                        </div>\n\n                        <br>\n                        <button type=\"submit\" class=\"btn btn-dark\" id=\"genreCreateSave\">Save</button>\n                        <button type=\"button\" class=\"btn btn-outline-dark\" data-bs-dismiss=\"modal\">Cancel</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"genreEditModal\" tabindex=\"-1\" aria-labelledby=\"genreEditModal\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header bg-dark\">\n                    <h3 class=\"modal-title\" style=\"color:white\">Edit Genre</h3>\n                </div>\n\n                <div class=\"modal-body\">\n                    <form class=\"genreEditForm\" id=\"genreEditForm\">\n                        <div class=\"form-group\">\n                            <label for=\"genre\">Genre</label>\n                            <input type=\"text\" class=\"form-control genreGenre\" id=\"genre\" name=\"genre\">\n                        </div>\n                        \n                        <br>\n                        <button type=\"submit\" class=\"btn btn-dark genreEditSave\" id=\"genreEditSave\">Save</button>\n                        <button type=\"button\" class=\"btn btn-outline-dark\" data-bs-dismiss=\"modal\">Cancel</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    ";
}

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
/* harmony import */ var _genreModals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./genreModals */ "./resources/js/genreModals.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ "./resources/js/link.js");


var genre = {
  show: function show(response) {
    var template = "\n        <div class=\"table-responsive\">\n            <br>\n            <button type=\"button\" class=\"btn btn-outline-dark\" data-mdb-ripple-color=\"dark\" data-bs-toggle=\"modal\" data-bs-target=\"#genreCreateModal\"> Add Genre </button>\n            <table class=\"table\" id=\"tableContent\">\n                <thead class=\"table-dark\">\n                    <tr>\n                    <th>Genre ID</th>\n                        <th>Genre</th>\n                        <th>Edit</th>\n                        <th>Delete</th>\n                    </tr>\n                </thead>\n                <tbody class=\"selectable\" id=\"genreBody\">\n\n                </tbody>\n            </table>\n        </div>\n        ";
    $('#content').html(template); //GENRE VIEW

    response.forEach(function (element) {
      $('#genreBody').append("\n                <tr>\n                    <td>".concat(element.genre_id, "</td>\n                    <td>").concat(element.genre, "</td>\n                    <td>\n                        <i class=\"fas fa-edit genreEditIcon\" data-bs-toggle=\"modal\" data-bs-target=\"#genreEditModal\" data-bs-id=\"\" id=\"").concat(element.genre_id, "\"></i>\n                    </td>\n                    <td><i class=\"fas fa-trash-alt genreDeleteIcon\" id=\"").concat(element.genre_id, "\"></i></td>\n                </tr>\n            "));
    });
    $('.selectable').selectable();
    $('#content').append(_genreModals__WEBPACK_IMPORTED_MODULE_0__.default); //GENRE CREATE

    $('#genreCreateForm').validate({
      rules: {
        genre: {
          required: true,
          minlength: 5
        }
      },
      messages: {
        genre: {
          required: 'required'
        }
      },
      errorPlacement: function errorPlacement(error, element) {
        error.insertAfter(element);
      },
      submitHandler: function submitHandler(form, e) {
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
            $('#genreCreateModal').modal('hide'); //clearing of input fields

            $('#genreCreateForm :input').each(function () {
              var input = $(this);
              input.val('');
            });
            $('#genreBody').append("\n                            <tr>\n                                <td>".concat(data.genre_id, "</td>\n                                <td>").concat(data.genre, "</td>\n                                <td>\n                                    <i class=\"fas fa-edit genreEditIcon\" data-bs-toggle=\"modal\" data-bs-target=\"#genreEditModal\" data-bs-id=\"\" id=\"").concat(data.genre_id, "\"></i>\n                                </td>\n                                <td><i class=\"fas fa-trash-alt genreDeleteIcon\" id=\"").concat(element.genre_id, "\"></i></td>\n                            </tr>\n                        "));
          },
          error: function error(_error) {
            console.log('error');
          }
        });
      }
    }); //GENRE EDIT

    $('.genreEditIcon').on('click', function (e) {
      var id = this.id;
      console.log(id);
      $('<input>').attr({
        type: 'hidden',
        id: 'genre_id',
        name: 'genre_id',
        value: id
      }).appendTo('#genreEditForm');
      $.ajax({
        type: 'GET',
        url: '/api/Genre/' + id + '/edit',
        success: function success(data) {
          console.log(data);
          $('.genreGenre').val(data.genre);
        },
        error: function error() {
          console.log('AJAX load did not work');
          alert('error');
        }
      });
    }); //GENRE UPDATE

    $('#genreEditForm').validate({
      rules: {
        genre: {
          required: true,
          minlength: 5
        }
      },
      messages: {
        genre: {
          required: 'required'
        }
      },
      errorPlacement: function errorPlacement(error, element) {
        error.insertAfter(element);
      },
      submitHandler: function submitHandler(form, e) {
        e.preventDefault();
        var id = $("#genre_id").val();
        var data = $("#genreEditForm").serialize();
        console.log(id);
        console.log(data);
        $.ajax({
          type: "PUT",
          url: "/api/Genre/" + id,
          data: data,
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          dataType: "json",
          success: function success(data) {
            console.log(data);
            $('#genreEditModal').modal('hide');
            (0,_link__WEBPACK_IMPORTED_MODULE_1__.default)('genre');
          },
          error: function error(_error2) {
            console.log('error');
          }
        });
      }
    }); //GENRE DELETE

    $('.genreDeleteIcon').on('click', function (e) {
      e.preventDefault();
      var id = this.id;
      var $tr = $(this).closest('tr');
      console.log(id);

      if (confirm('Are you sure you want to delete?')) {
        $.ajax({
          type: "DELETE",
          url: "/api/Genre/" + id,
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          dataType: "json",
          success: function success(data) {
            console.log(data);
            $tr.remove();
          },
          error: function error(data) {
            console.log('Error:', data);
          }
        });
      }
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genre);

/***/ }),

/***/ "./resources/js/link.js":
/*!******************************!*\
  !*** ./resources/js/link.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _actors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actors */ "./resources/js/actors.js");
/* harmony import */ var _movies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies */ "./resources/js/movies.js");
/* harmony import */ var _genres__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./genres */ "./resources/js/genres.js");
/* harmony import */ var _roles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roles */ "./resources/js/roles.js");
/* harmony import */ var _producers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./producers */ "./resources/js/producers.js");






function link(link) {
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  $.ajax({
    type: 'GET',
    url: '/api/' + link + '/all' + page,
    error: function error(response) {
      console.log(response);
    },
    success: function success(response) {
      switch (link) {
        //Movie Case
        case 'movie':
          _movies__WEBPACK_IMPORTED_MODULE_1__.default.show(response.data);
          paginate(response.last_page, response.current_page, 'movie');
          break;
        //Actor Case

        case 'actor':
          _actors__WEBPACK_IMPORTED_MODULE_0__.default.show(response.data);
          paginate(response.last_page, response.current_page, 'actor');
          break;
        //PRODUCER CASE

        case 'producer':
          _producers__WEBPACK_IMPORTED_MODULE_4__.default.show(response.data);
          paginate(response.last_page, response.current_page, 'producer');
          break;
        //GENRE CASE

        case 'genre':
          _genres__WEBPACK_IMPORTED_MODULE_2__.default.show(response.data);
          paginate(response.last_page, response.current_page, 'genre');
          break;
        //ROLE CASE

        case 'role':
          _roles__WEBPACK_IMPORTED_MODULE_3__.default.show(response.data);
          paginate(response.last_page, response.current_page, 'role');
          break;

        default:
          break;
      }
    }
  });
}

function paginate(last_page, current_page, indexPage) {
  $("#paginate").html("\n        <nav>\n            <ul class=\"pagination pagination-sm\" id=\"paginateLinks\">\n            </ul>\n        </nav>\n    ");

  for (var index = 1; index <= last_page; index++) {
    var isActive = '';

    if (current_page == index) {
      isActive = 'bg-dark text-white';
    }

    $('#paginateLinks').append("\n            <li class=\"page-item\"><a class=\"page-link ".concat(isActive, "\" href=\"#\" data-id=").concat(index, ">").concat(index, "</a></li>\n        "));
  }

  $('.page-link').on('click', function (e) {
    e.preventDefault();
    var page = e.currentTarget.dataset.id;
    console.log(page);
    link(indexPage, '?page=' + page);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (link);

/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./link */ "./resources/js/link.js");

$(document).ready(function () {
  $('.link').on('click', function (e) {
    var linkPage = e.currentTarget.dataset.id;
    (0,_link__WEBPACK_IMPORTED_MODULE_0__.default)(linkPage);
  });
});

/***/ }),

/***/ "./resources/js/movieModals.js":
/*!*************************************!*\
  !*** ./resources/js/movieModals.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ movieModal
/* harmony export */ });
function movieModal() {
  return "\n        <div class=\"modal fade\" id=\"movieCreateModal\" tabindex=\"-1\" aria-labelledby=\"movieCreate\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-lg\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header bg-dark\">\n                        <h3 class=\"modal-title\" style=\"color:white\">Create New Movie</h3>\n                    </div>\n\n                    <div class=\"modal-body\">\n                        <form class=\"movieCreateForm\" id=\"movieCreateForm\">\n                            <div class=\"form-group\">\n                                <label for=\"title\">Title</label>\n                                <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" value=\"\">\n                            </div>\n                            \n                            <div class=\"form-group\">\n                                <label for=\"year\">Year</label>\n                                <input type=\"text\" class=\"form-control\" id=\"year\" name=\"year\" value=\"\">\n                            </div>\n                            \n                            <div class=\"form-outline\">\n                                <label class=\"form-label\" for=\"plot\">Plot</label>\n                                <textarea class=\"form-control\" id=\"plot\" name=\"plot\" value=\"\" rows=\"4\"></textarea>\n                            </div>\n\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"genre\">Genre</label>\n                                <select class=\"form-control\" id=\"genre_id\" name=\"genre_id\"></select>\n                            </div>\n\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"producer\">Producer</label>\n                                <select class=\"form-control\" id=\"producer_id\" name=\"producer_id\"></select>\n                            </div>\n\n                            <br>\n                            <button type=\"submit\" class=\"btn btn-dark\" id=\"movieCreateSave\">Save</button>\n                            <button type=\"button\" class=\"btn btnoutline-dark\" data-bs-dismiss=\"modal\">Cancel</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"modal fade\" id=\"movieEditModal\" tabindex=\"-1\" aria-labelledby=\"movieEditModal\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-lg\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header bg-dark\">\n                        <h3 class=\"modal-title\" style=\"color:white\">Edit Movie</h3>\n                    </div>\n        \n                    <div class=\"modal-body\">\n                        <form class=\"movieEditForm\" id=\"movieEditForm\">\n                            <div class=\"form-group\">\n                                <label for=\"title\">Title</label>\n                                <input type=\"text\" class=\"form-control movieTitle\" id=\"title\" name=\"title\">\n                            </div>\n                            \n                            <div class=\"form-group\">\n                                <label for=\"year\">Year</label>\n                                <input type=\"text\" class=\"form-control movieYear\" id=\"year\" name=\"year\">\n                            </div>\n                            \n                            <div class=\"form-outline\">\n                                <label class=\"form-label\" for=\"plot\">Plot</label>\n                                <textarea class=\"form-control moviePlot\" id=\"plot\" name=\"plot\" rows=\"4\"></textarea>\n                            </div>\n        \n                            <div class=\"form-group col-md-6\">\n                                <label for=\"genre\">Genre</label>\n                                <select class=\"form-control movieGenres\" id=\"genres\" name=\"genre_id\"></select>\n                            </div>\n        \n                            <div class=\"form-group col-md-6\">\n                                <label for=\"producer\">Producer</label>\n                                <select class=\"form-control movieProducers\" id=\"producers\" name=\"producer_id\"></select>\n                            </div>\n        \n                            <br>\n                            <button type=\"submit\" class=\"btn btn-dark\" id=\"movieEditSave\">Save</button>\n                            <button type=\"button\" class=\"btn btnoutline-dark\" data-bs-dismiss=\"modal\">Cancel hotdog </button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ";
}

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
/* harmony import */ var _movieModals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movieModals */ "./resources/js/movieModals.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ "./resources/js/link.js");


var movie = {
  show: function show(response) {
    var template = "\n            <div class=\"table-responsive\">\n                <br>\n                <button type=\"button\" class=\"btn btn-outline-dark\" data-mdb-ripple-color=\"dark\" data-bs-toggle=\"modal\" id=\"movieCreateButton\" data-bs-target=\"#movieCreateModal\"> Add Movie </button>\n                <table class=\"table\" id=\"tableContent\">\n                    <thead class=\"table-dark\">\n                        <tr>\n                            <th>Movie ID</th>\n                            <th>Title</th>\n                            <th>Year</th>\n                            <th>Plot</th>\n                            <th>Genre</th>\n                            <th>Producer</th>\n                            <th>Edit</th>\n                            <th>Delete</th>\n                        </tr>\n                    </thead>\n                    <tbody class=\"selectable\" id=\"movieBody\">\n\n                    </tbody>\n                </table>\n            </div>\n        ";
    $('#content').html(template); //MOVIE VIEW

    response.forEach(function (element) {
      $('#movieBody').append("\n                <tr>\n                    <td>".concat(element.movie_id, "</td>\n                    <td>").concat(element.title, "</td>\n                    <td>").concat(element.year, "</td>\n                    <td>").concat(element.plot, "</td>\n                    <td>").concat(element.genre_id, "</td>\n                    <td>").concat(element.producer_id, "</td>\n                    <td>\n                        <i class=\"fas fa-edit movieEditIcon\" data-bs-toggle=\"modal\" data-bs-target=\"#movieEditModal\" data-id=\"\" id=\"").concat(element.movie_id, "\"></i>\n                    </td>\n                    <td>\n                        <i class=\"fas fa-trash-alt movieDeleteIcon\" id=\"").concat(element.movie_id, "\"></i></a>\n                    </td>\n                </tr>\n            "));
    });
    $('.selectable').selectable();
    $('#content').append(_movieModals__WEBPACK_IMPORTED_MODULE_0__.default); // SHOW GENRE PRODUCER ON CREATE DROPDOWN

    $('#movieCreateModal').on('shown.bs.modal', function (e) {
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

    $('#movieCreateForm').validate({
      rules: {
        title: {
          required: true,
          minlength: 5
        },
        year: {
          required: true,
          minlength: 4,
          maxlength: 4
        },
        plot: {
          required: true,
          minlength: 10
        },
        genre_id: {
          required: true
        },
        producer_id: {
          required: true
        }
      },
      messages: {
        title: {
          required: 'required'
        },
        year: {
          required: 'required',
          rangelength: 'required length is 4 digits',
          range: 'range should be between 1900-2020'
        },
        plot: {
          required: 'required'
        },
        genre_id: {
          required: 'required'
        },
        producer_id: {
          required: 'required'
        }
      },
      errorPlacement: function errorPlacement(error, element) {
        error.insertAfter(element);
      },
      submitHandler: function submitHandler(form, e) {
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
            $('#movieCreateModal').modal('hide'); //clearing of input fields

            $('#movieCreateForm :input').each(function () {
              var input = $(this);
              input.val('');
            });
            $('#movieBody').append("\n                            <tr>\n                                <td>".concat(data.movie_id, "</td>\n                                <td>").concat(data.title, "</td>\n                                <td>").concat(data.year, "</td>\n                                <td>").concat(data.plot, "</td>\n                                <td>").concat(data.genre_id, "</td>\n                                <td>").concat(data.producer_id, "</td>\n                                <td>\n                                    <i class=\"fas fa-edit movieEditIcon\" data-bs-toggle=\"modal\" data-bs-target=\"#movieEditModal\" data-id=\"\" id=\"").concat(data.movie_id, "\"></i>\n                                </td>\n                                <td><i class=\"fas fa-trash-alt movieDeleteIcon\" id=\"").concat(data.movie_id, "\"></i></td>\n                            </tr>\n                        "));
          },
          error: function error(_error3) {
            console.log('error');
          }
        });
      }
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
      e.preventDefault();
      var id = $("#movie_id").val();
      var data = $("#movieEditForm").serialize(); // console.log(id);

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
          $('#movieEditModal').modal('hide');
          (0,_link__WEBPACK_IMPORTED_MODULE_1__.default)('movie');
        },
        error: function error(_error6) {
          console.log('error');
        }
      });
    });
    $('#movieCreateModal').on('shown.bs.modal', function (e) {
      $('#genre_id').empty();
      $('#producer_id').empty();
    });
    $('#movieEditModal').on('shown.bs.modal', function (e) {
      $('.movieGenres').empty();
      $('.movieProducers').empty();
    }); //MOVIE DELETE

    $('.movieDeleteIcon').on('click', function (e) {
      e.preventDefault();
      var id = this.id;
      var $tr = $(this).closest('tr');
      console.log(id);

      if (confirm('Are you sure you want to delete?')) {
        $.ajax({
          type: "DELETE",
          url: "/api/Movie/" + id,
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          dataType: "json",
          success: function success(data) {
            console.log(data);
            $tr.remove();
          },
          error: function error(data) {
            console.log('Error:', data);
          }
        });
      }
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movie);

/***/ }),

/***/ "./resources/js/producerModals.js":
/*!****************************************!*\
  !*** ./resources/js/producerModals.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ producerModal
/* harmony export */ });
function producerModal() {
  return "\n        <div class=\"modal fade\" id=\"producerCreateModal\" tabindex=\"-1\" aria-labelledby=\"producerCreate\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-lg\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header bg-dark\">\n                        <h3 class=\"modal-title\" style=\"color:white\">Create New Producer</h3>\n                    </div>\n\n                    <div class=\"modal-body\">\n                        <form class=\"producerCreateForm\" id=\"producerCreateForm\">\n                            <div class=\"form-group\">\n                                <label for=\"name\">Name</label>\n                                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\">\n                            </div>\n                            \n                            <div class=\"form-group\">\n                                <label for=\"birthday\">Birthday</label>\n                                <input type=\"text\" class=\"form-control\" id=\"birthday\" name=\"birthday\">\n                            </div>\n                            \n                            <div class=\"form-outline\">\n                                <label class=\"form-label\" for=\"notes\">Notes</label>\n                                <textarea class=\"form-control\" id=\"notes\" name=\"notes\" rows=\"4\"></textarea>\n                            </div>\n\n                            <br>\n                            <button type=\"submit\" class=\"btn btn-dark\" id=\"producerCreateSave\">Save</button>\n                            <button type=\"button\" class=\"btn btn-outline-dark\" data-bs-dismiss=\"modal\">Cancel</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"modal fade\" id=\"producerEditModal\" tabindex=\"-1\" aria-labelledby=\"producerEditModal\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-lg\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header bg-dark\">\n                        <h3 class=\"modal-title\" style=\"color:white\">Edit Producer</h3>\n                    </div>\n\n                    <div class=\"modal-body\">\n                        <form class=\"producerEditForm\" id=\"producerEditForm\">\n                            <div class=\"form-group\">\n                                <label for=\"name\">Name</label>\n                                <input type=\"text\" class=\"form-control producerName\" id=\"name\" name=\"name\">\n                            </div>\n                            \n                            <div class=\"form-group\">\n                                <label for=\"birthday\">Birthday</label>\n                                <input type=\"text\" class=\"form-control producerBirthday\" id=\"birthday\" name=\"birthday\">\n                            </div>\n                            \n                            <div class=\"form-outline\">\n                                <label class=\"form-label\" for=\"notes\">Notes</label>\n                                <textarea class=\"form-control producerNotes\" id=\"notes\" name=\"notes\" rows=\"4\"></textarea>\n                            </div>\n\n                            <br>\n                            <button type=\"submit\" class=\"btn btn-dark producerEditSave\" id=\"producerEditSave\">Save</button>\n                            <button type=\"button\" class=\"btn btn-outline-dark\" data-bs-dismiss=\"modal\">Cancel</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ";
}

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
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./link */ "./resources/js/link.js");
/* harmony import */ var _producerModals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./producerModals */ "./resources/js/producerModals.js");


var producer = {
  show: function show(response) {
    var template = "\n        <div class=\"table-responsive\">\n            <br>\n            <button type=\"button\" class=\"btn btn-outline-dark\" data-mdb-ripple-color=\"dark\" data-bs-toggle=\"modal\" data-bs-target=\"#producerCreateModal\"> Add Producer </button>\n            <table class=\"table\" id=\"tableContent\">\n                <thead class=\"table-dark\">\n                    <tr>\n                        <th>Producer ID</th>\n                        <th>Name</th>\n                        <th>Birthday</th>\n                        <th>Notes</th>\n                        <th>Edit</th>\n                        <th>Delete</th>\n                    </tr>\n                </thead>\n                <tbody class=\"selectable\" id=\"producerBody\">\n                </tbody>\n            </table>\n        </div>\n        ";
    $('#content').html(template); //PRODUCER VIEW

    response.forEach(function (element) {
      $('#producerBody').append("\n                <tr>\n                    <td>".concat(element.producer_id, "</td>\n                    <td>").concat(element.name, "</td>\n                    <td>").concat(element.birthday, "</td>\n                    <td>").concat(element.notes, "</td>\n                    <td>\n                        <i class=\"fas fa-edit producerEditIcon\" data-bs-toggle=\"modal\" data-bs-target=\"#producerEditModal\" data-bs-id=\"\" id=\"").concat(element.producer_id, "\"></i>\n                    </td>\n                    <td><i class=\"fas fa-trash-alt producerDeleteIcon\" id=\"").concat(element.producer_id, "\"></i></td>\n                </tr>\n            "));
    });
    $('.selectable').selectable();
    $('#content').append(_producerModals__WEBPACK_IMPORTED_MODULE_1__.default); //PRODUCER CREATE

    $('#producerCreateForm').validate({
      rules: {
        name: {
          required: true,
          minlength: 5
        },
        birthday: {
          required: true,
          minlength: 10,
          maxlength: 10
        },
        notes: {
          required: true,
          minlength: 10
        }
      },
      messages: {
        name: {
          required: 'required'
        },
        birthday: {
          required: 'required'
        },
        notes: {
          required: 'required'
        }
      },
      errorPlacement: function errorPlacement(error, element) {
        error.insertAfter(element);
      },
      submitHandler: function submitHandler(form, e) {
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
            $('#producerCreateModal').modal('hide'); //clearing of input fields

            $('#producerCreateForm :input').each(function () {
              var input = $(this);
              input.val('');
            });
            $('#producerBody').append("\n                            <tr>\n                                <td>".concat(data.producer_id, "</td>\n                                <td>").concat(data.name, "</td>\n                                <td>").concat(data.birthday, "</td>\n                                <td>").concat(data.notes, "</td>\n                                <td>\n                                    <i class=\"fas fa-edit producerEditIcon\" data-bs-toggle=\"modal\" data-bs-target=\"#producerEditModal\" data-bs-id=\"\" id=\"").concat(data.producer_id, "\"></i>\n                                </td>\n                                <td><i class=\"fas fa-trash-alt producerDeleteIcon\" id=\"").concat(data.producer_id, "\"></i></td>\n                            </tr>\n                        "));
          },
          error: function error(_error) {
            console.log('error');
          }
        });
      }
    }); //PRODUCER EDIT

    $('.producerEditIcon').on('click', function (e) {
      var id = this.id;
      console.log(id);
      $('<input>').attr({
        type: 'hidden',
        id: 'producers_id',
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
    }); //PRODUCER UPDATE

    $('#producerEditForm').validate({
      rules: {
        name: {
          required: true,
          minlength: 5
        },
        birthday: {
          required: true,
          minlength: 10,
          maxlength: 10
        },
        notes: {
          required: true,
          minlength: 10
        }
      },
      messages: {
        name: {
          required: 'required'
        },
        birthday: {
          required: 'required'
        },
        notes: {
          required: 'required'
        }
      },
      errorPlacement: function errorPlacement(error, element) {
        error.insertAfter(element);
      },
      submitHandler: function submitHandler(form, e) {
        e.preventDefault();
        var id = $("#producers_id").val();
        var data = $("#producerEditForm").serialize();
        console.log(id);
        console.log(data);
        $.ajax({
          type: "PUT",
          url: "/api/Producer/" + id,
          data: data,
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          dataType: "json",
          success: function success(data) {
            console.log(data);
            $('#producerEditModal').modal('hide');
            (0,_link__WEBPACK_IMPORTED_MODULE_0__.default)('producer');
          },
          error: function error(_error2) {
            console.log('error');
          }
        });
      }
    }); //PRODUCER DELETE

    $('.producerDeleteIcon').on('click', function (e) {
      e.preventDefault();
      var id = this.id;
      var $tr = $(this).closest('tr');
      console.log(id);

      if (confirm('Are you sure you want to delete?')) {
        $.ajax({
          type: "DELETE",
          url: "/api/Producer/" + id,
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          dataType: "json",
          success: function success(data) {
            console.log(data);
            $tr.remove();
          },
          error: function error(data) {
            console.log('Error:', data);
          }
        });
      }
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (producer);

/***/ }),

/***/ "./resources/js/roleModals.js":
/*!************************************!*\
  !*** ./resources/js/roleModals.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ roleModal
/* harmony export */ });
function roleModal() {
  return "\n    <div class=\"modal fade\" id=\"roleCreateModal\" tabindex=\"-1\" aria-labelledby=\"roleCreate\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header bg-dark\">\n                    <h3 class=\"modal-title\" style=\"color:white\">Create New Role</h3>\n                </div>\n\n                <div class=\"modal-body\">\n                    <form class=\"roleCreateForm\" id=\"roleCreateForm\">\n                        <div class=\"form-group\">\n                            <label for=\"roles\">Role</label>\n                            <input type=\"text\" class=\"form-control\" id=\"roles\" name=\"roles\">\n                        </div>\n\n                        <br>\n                        <button type=\"submit\" class=\"btn btn-dark\" id=\"roleCreateSave\">Save</button>\n                        <button type=\"button\" class=\"btn btn-outline-dark\" data-bs-dismiss=\"modal\">Cancel</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"roleEditModal\" tabindex=\"-1\" aria-labelledby=\"roleEditModal\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header bg-dark\">\n                    <h3 class=\"modal-title\" style=\"color:white\">Edit Role</h3>\n                </div>\n\n                <div class=\"modal-body\">\n                    <form class=\"roleEditForm\" id=\"roleEditForm\">\n                        <div class=\"form-group\">\n                            <label for=\"roles\">Roles</label>\n                            <input type=\"text\" class=\"form-control roleRoles\" id=\"roles\" name=\"roles\">\n                        </div>\n\n                        <br>\n                        <button type=\"submit\" class=\"btn btn-dark roleEditSave\" id=\"roleEditSave\">Save</button>\n                        <button type=\"button\" class=\"btn btn-outline-dark\" data-bs-dismiss=\"modal\">Cancel</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    ";
}

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
/* harmony import */ var _roleModals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roleModals */ "./resources/js/roleModals.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ "./resources/js/link.js");


var role = {
  show: function show(response) {
    var template = "\n            <div class=\"table-responsive\">\n                <br>\n                <button type=\"button\" class=\"btn btn-outline-dark\" data-mdb-ripple-color=\"dark\" data-bs-toggle=\"modal\" data-bs-target=\"#roleCreateModal\"> Add Role </button>\n                <br>\n                <table class=\"table\" id=\"tableContent\">\n                    <thead class=\"table-dark\">\n                        <tr>\n                            <th>Role ID</th>\n                            <th>Role</th>\n                            <th>Edit</th>\n                            <th>Delete</th>\n                        </tr>\n                    </thead>\n\n                    <tbody class=\"selectable\" id=\"roleBody\">\n                        \n                    </tbody>\n                </table>\n            </div>\n        ";
    $('#content').html(template); //ROLE VIEW

    response.forEach(function (element) {
      $('#roleBody').append("\n                <tr>\n                    <td>".concat(element.role_id, "</td>\n                    <td>").concat(element.roles, "</td>\n                    <td>\n                        <i class=\"fas fa-edit roleEditIcon\" data-bs-toggle=\"modal\" data-bs-target=\"#roleEditModal\" data-bs-id=\"\" id=\"").concat(element.role_id, "\"></i>\n                    </td>\n                    <td><i class=\"fas fa-trash-alt roleDeleteIcon\" id=\"").concat(element.role_id, "\"></i></td>\n                </tr>\n            "));
    });
    $('.selectable').selectable();
    $('#content').append(_roleModals__WEBPACK_IMPORTED_MODULE_0__.default); //ROLE CREATE

    $('#roleCreateForm').validate({
      rules: {
        roles: {
          required: true,
          minlength: 5
        }
      },
      messages: {
        roles: {
          required: 'required'
        }
      },
      errorPlacement: function errorPlacement(error, element) {
        error.insertAfter(element);
      },
      submitHandler: function submitHandler(form, e) {
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
            $('#roleCreateModal').modal('hide');
            $('#roleCreateForm :input').each(function () {
              var input = $(this);
              input.val('');
            });
            $('#roleBody').append("\n                            <tr>\n                                <td>".concat(data.role_id, "</td>\n                                <td>").concat(data.roles, "</td>\n                                <td>\n                                    <i class=\"fas fa-edit roleEditIcon\" data-bs-toggle=\"modal\" data-bs-target=\"#roleEditModal\" data-bs-id=\"\" id=\"").concat(data.role_id, "\"></i>\n                                </td>\n                                <td><i class=\"fas fa-trash-alt roleDeleteIcon\" id=\"").concat(data.role_id, "\"></i></td>\n                            </tr>\n                        "));
          },
          error: function error(_error) {
            console.log('error');
          }
        });
      }
    }); //ROLE EDIT

    $('.roleEditIcon').on('click', function (e) {
      var id = this.id;
      console.log(id);
      $('<input>').attr({
        type: 'hidden',
        id: 'role_id',
        name: 'role_id',
        value: id
      }).appendTo('#roleEditForm');
      $.ajax({
        type: 'GET',
        url: '/api/Role/' + id + '/edit',
        success: function success(data) {
          console.log(data);
          $('.roleRoles').val(data.roles);
        },
        error: function error() {
          console.log('AJAX load did not work');
          alert('error');
        }
      });
    }); //ROLE UPDATE

    $('#roleEditForm').validate({
      rules: {
        roles: {
          required: true,
          minlength: 5
        }
      },
      messages: {
        roles: {
          required: 'required'
        }
      },
      errorPlacement: function errorPlacement(error, element) {
        error.insertAfter(element);
      },
      submitHandler: function submitHandler(form, e) {
        e.preventDefault();
        var id = $("#role_id").val();
        var data = $("#roleEditForm").serialize();
        console.log(id);
        console.log(data);
        $.ajax({
          type: "PUT",
          url: "/api/Role/" + id,
          data: data,
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          dataType: "json",
          success: function success(data) {
            console.log(data);
            $('#roleEditModal').modal('hide');
            (0,_link__WEBPACK_IMPORTED_MODULE_1__.default)('role');
          },
          error: function error(_error2) {
            console.log('error');
          }
        });
      }
    }); //ROLE DELETE

    $('.roleDeleteIcon').on('click', function (e) {
      e.preventDefault();
      var id = this.id;
      var $tr = $(this).closest('tr');
      console.log(id);

      if (confirm('Are you sure you want to delete?')) {
        $.ajax({
          type: "DELETE",
          url: "/api/Role/" + id,
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          dataType: "json",
          success: function success(data) {
            console.log(data);
            $tr.remove();
          },
          error: function error(data) {
            console.log('Error:', data);
          }
        });
      }
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