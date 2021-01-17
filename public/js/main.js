$('.link').on('click', (function(e) {
    let link = e.currentTarget.dataset.id;
    // console.log(link);
    $.ajax({
        type: 'GET',
        url: '/api/' + link + '/all',
        error: function(response){
            console.log(response)
        },
        success(response){
            let template = ``;
            switch (link) {

                //Movie Case
                case 'movie':
                    template = `
                    <table class="table table-striped table-hover">
                    <br>
                        <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark" data-toggle="modal" data-target="#movieCreateModal"> Add Movie </button>
                        <thead>
                            <tr>
                                <th>Movie ID</th>
                                <th>Title</th>
                                <th>Year</th>
                                <th>Plot</th>
                                <th>Genre</th>
                                <th>Producer</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody id="movie">
                        </tbody>
                    </table>
                    `;
                    $('#content').html(template);
                    response.forEach(element =>{
                        $('#movie').append(`
                            <tr>
                                <td>${element.movie_id}</td>
                                <td>${element.title}</td>
                                <td>${element.year}</td>
                                <td>${element.plot}</td>
                                <td>${element.genre_id}</td>
                                <td>${element.producer_id}</td>
                                <td>
                                    <i class="fas fa-edit" data-toggle="modal" data-target="#movieEditModal"></i>
                                </td>
                                <td>
                                    <i class="fas fa-trash-alt"></i></a>
                                </td>
                            </tr>
                        `)
                    });
                    $('#content').append(modals.movie);
                    break;

                //Actor Case
                case 'actor':
                    template = `
                    <table class="table table-striped table-hover">
                    <br>
                    <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark" data-toggle="modal" data-target="#actorCreateModal"> Add Actor </button>
                        <thead>
                            <tr>
                                <th>Actor ID</th>
                                <th>Name</th>
                                <th>Birthday</th>
                                <th>Notes</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody id="actor">
                        </tbody>
                    </table>
                    `;
                    $('#content').html(template);

                    //VIEW
                    response.forEach(element =>{
                        $('#actor').append(`
                            <tr>
                                <td>${element.actor_id}</td>
                                <td>${element.name}</td>
                                <td>${element.birthday}</td>
                                <td>${element.notes}</td>
                                <td>
                                    <i class="fas fa-edit" data-toggle="modal" data-target="#actorEditModal" data-id="${element.actor_id}" id="actorEditIcon"></i>
                                </td>
                                <td><i class="fas fa-trash-alt"></i></td>
                            </tr>
                        `)
                    });
                    $('#content').append(modals.actor);

                    //CREATE
                    $("#actorCreateSave").on('click', function(e) {
                        e.preventDefault();
                        var data = $("#actorCreateForm").serialize();
                        console.log(data);
                        $.ajax({
                            type: "post",
                            url: "/api/Actor",
                            data: data,
                            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                            dataType: "json",
                            success: function(data) {
                                console.log(data);
                                // $("myModal").modal("hide");
                                // $('#actorCreateModal').each(function(){
                                    $('#actorCreateModal').hide();
                                // $.each(data, function(key, value){
                                $('#actor').append(`
                                    <tr>
                                        <td>${data.actor_id}</td>
                                        <td>${data.name}</td>
                                        <td>${data.birthday}</td>
                                        <td>${data.notes}</td>
                                        <td>
                                            <i class="fas fa-edit" data-toggle="modal" data-target="#actorEditModal" data-id="${data.actor_id}" id="actorEditIcon"></i>
                                        </td>
                                        <td><i class="fas fa-trash-alt"></i></td>
                                    </tr>
                                `)
                                
                            },
                            error: function(error) {
                                console.log('error');
                            }
                        });
                    });

                    //EDIT
                    $('#actorEditIcon').on('click',function(e){
                        var id = $(e.currentTarget).attr('data-id');
                        alert(id);
                        //weird ass shit
                    });

                    // $('#actorEditModal').on('show.bs.modal',function(e) {
                    //     alert('hello');
                    //     var id = $(e.relatedTarget).attr('data-id');
                    //     alert(id);
                    //     $('<input>')
                    //         .attr({
                    //             type: 'hidden',
                    //             id: 'actor_id',
                    //             name: 'actor_id',
                    //             value: id,
                    //         })
                    //         .appendTo('#actorEditForm');
                    //     $.ajax({
                    //         type: 'GET',
                    //         url: '/api/Actor/' + id + '/edit',
                    //         success: function(data){
                    //             console.log(data);
                    //             $('#actorName').val(data.name);
                    //             $('#actorBirthday').val(data.birthday);
                    //             $('#actorNotes').val(data.year);
                    //         },
                    //         error: function(){
                    //             console.log('AJAX load did not work');
                    //             alert('error');
                    //         },
                    //     });
                    // });
                    
                    break;

                //Producer Case
                case 'producer':
                    template = `
                    <table class="table table-striped table-hover">
                    <br>
                    <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark" data-toggle="modal" data-target="#producerCreateModal"> Add Producer </button>
                        <thead>
                            <tr>
                                <th>Producer ID</th>
                                <th>Name</th>
                                <th>Birthday</th>
                                <th>Notes</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody id="producer">
                        </tbody>
                    </table>
                    `;
                    $('#content').html(template);
                    response.forEach(element =>{
                        $('#producer').append(`
                            <tr>
                                <td>${element.producer_id}</td>
                                <td>${element.name}</td>
                                <td>${element.birthday}</td>
                                <td>${element.notes}</td>
                                <td>
                                    <i class="fas fa-edit" data-toggle="modal" data-target="#producerEditModal" data-id="${element.producer_id}" id="producerEditIcon"></i>
                                </td>
                                <td><i class="fas fa-trash-alt"></i></td>
                            </tr>
                        `)
                    });
                    $('#content').append(modals.producer);

                    //CREATE
                    $("#producerCreateSave").on('click', function(e) {
                        e.preventDefault();
                        var data = $("#producerCreateForm").serialize();
                        console.log(data);
                        $.ajax({
                            type: "post",
                            url: "/api/Producer",
                            data: data,
                            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                            dataType: "json",
                            success: function(data) {
                                console.log(data);
                                // $("myModal").modal("hide");
                                // $('#actorCreateModal').each(function(){
                                    $('#producerCreateModal').hide();
                                // $.each(data, function(key, value){
                                $('#producer').append(`
                                    <tr>
                                        <td>${data.producer_id}</td>
                                        <td>${data.name}</td>
                                        <td>${data.birthday}</td>
                                        <td>${data.notes}</td>
                                        <td>
                                            <i class="fas fa-edit" data-toggle="modal" data-target="#producerEditModal" data-id="${data.producer_id}" id="producerEditIcon"></i>
                                        </td>
                                        <td><i class="fas fa-trash-alt"></i></td>
                                    </tr>
                                `)
                                
                            },
                            error: function(error) {
                                console.log('error');
                            }
                        });
                    });
                    break;

                //Genre Case
                case 'genre':
                    template = `
                    <table class="table table-striped table-hover">
                    <br>
                    <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark" data-toggle="modal" data-target="#genreCreateModal"> Add Genre </button>
                        <thead>
                            <tr>
                                <th>Genre ID</th>
                                <th>Genre</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody id="genre">
                        </tbody>
                    </table>
                    `;
                    $('#content').html(template);
                    response.forEach(element =>{
                        $('#genre').append(`
                            <tr>
                                <td>${element.genre_id}</td>
                                <td>${element.genre}</td>
                                <td>
                                    <i class="fas fa-edit" data-toggle="modal" data-target="#genreEditModal" data-id="${element.genre_id}" id="genreEditIcon"></i>
                                </td>
                                <td><i class="fas fa-trash-alt"></i></td>
                            </tr>
                        `)
                    });
                    $('#content').append(modals.genre);

                    //CREATE
                    $("#genreCreateSave").on('click', function(e) {
                        e.preventDefault();
                        var data = $("#genreCreateForm").serialize();
                        console.log(data);
                        $.ajax({
                            type: "post",
                            url: "/api/Genre",
                            data: data,
                            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                            dataType: "json",
                            success: function(data) {
                                console.log(data);
                                // $("myModal").modal("hide");
                                // $('#actorCreateModal').each(function(){
                                    $('#genreCreateModal').hide();
                                // $.each(data, function(key, value){
                                $('#genre').append(`
                                    <tr>
                                        <td>${data.genre_id}</td>
                                        <td>${data.genre}</td>
                                        <td>
                                            <i class="fas fa-edit" data-toggle="modal" data-target="#genreEditModal" data-id="${data.genre_id}" id="genreEditIcon"></i>
                                        </td>
                                        <td><i class="fas fa-trash-alt"></i></td>
                                    </tr>
                                `)
                                
                            },
                            error: function(error) {
                                console.log('error');
                            }
                        });
                    });
                    break;

                //Role Case
                case 'role':
                    template = `
                    <table class="table table-striped table-hover">
                    <br>
                    <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark" data-toggle="modal" data-target="#roleCreateModal"> Add Role </button>
                        <thead>
                            <tr>
                                <th>Role ID</th>
                                <th>Role</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody id="role">
                        </tbody>
                    </table>
                    `;
                    $('#content').html(template);
                    response.forEach(element =>{
                        $('#role').append(`
                            <tr>
                                <td>${element.role_id}</td>
                                <td>${element.roles}</td>
                                <td>
                                    <i class="fas fa-edit" data-toggle="modal" data-target="#roleEditModal" data-id="${element.role_id}" id="roleEditIcon"></i>
                                </td>
                                <td><i class="fas fa-trash-alt"></i></td>
                            </tr>
                        `)
                    });
                    $('#content').append(modals.role);

                    //CREATE
                    $("#roleCreateSave").on('click', function(e) {
                        e.preventDefault();
                        var data = $("#roleCreateForm").serialize();
                        console.log(data);
                        $.ajax({
                            type: "post",
                            url: "/api/Role",
                            data: data,
                            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                            dataType: "json",
                            success: function(data) {
                                console.log(data);
                                // $("myModal").modal("hide");
                                // $('#actorCreateModal').each(function(){
                                    $('#roleCreateModal').hide();
                                // $.each(data, function(key, value){
                                $('#role').append(`
                                    <tr>
                                        <td>${data.role_id}</td>
                                        <td>${data.roles}</td>
                                        <td>
                                            <i class="fas fa-edit" data-toggle="modal" data-target="#roleEditModal" data-id="${data.role_id}" id="roleEditIcon"></i>
                                        </td>
                                        <td><i class="fas fa-trash-alt"></i></td>
                                    </tr>
                                `)
                                
                            },
                            error: function(error) {
                                console.log('error');
                            }
                        });
                    });
                    break;
                    
                default:
                break;
            }
        }
    })
}));

const modals = {
    movie : `
        <div class="modal fade" id="movieCreateModal" tabindex="-1" aria-labelledby="movieCreate" aria-hidden="true" data-backdrop="false">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-dark">
                        <h3 class="modal-title" style="color:white">Create New Movie</h3>
                    </div>

                    <div class="modal-body">
                        <form class="movieCreateForm">
                            <div class="form-group">
                                <label for="title">Title</label>
                                <input type="text" class="form-control" id="title">
                            </div>
                            
                            <div class="form-group">
                                <label for="year">Year</label>
                                <input type="text" class="form-control" id="year">
                            </div>
                            
                            <div class="form-outline">
                                <label class="form-label" for="plot">Plot</label>
                                <textarea class="form-control" id="plot" rows="4"></textarea>
                            </div>

                            <div class="form-outine">
                            <label class="form-label" for="genre_id">Genre</label>
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Genres
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>

                            <div class="form-outine">
                            <label class="form-label" for="producer_id">Producer</label>
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Producer
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>

                            <br>
                            <button type="button" class="btn btn-dark">Save</button>
                            <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="modal fade" id="movieEditModal" tabindex="-1" aria-labelledby="movieEdit" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-dark">
                        <h3 class="modal-title" style="color:white">Edit Movie</h3>
                    </div>

                    <div class="modal-body">
                        <form class="movieEditForm">
                            <div class="form-group">
                                <label for="title">Title</label>
                                <input type="text" class="form-control" id="title">
                            </div>
                            
                            <div class="form-group">
                                <label for="year">Year</label>
                                <input type="text" class="form-control" id="year">
                            </div>
                            
                            <div class="form-outline">
                                <label class="form-label" for="plot">Plot</label>
                                <textarea class="form-control" id="plot" rows="4"></textarea>
                            </div>

                            <br>
                            <button type="button" class="btn btn-dark">Save</button>
                            <button type="button" class="btn btn-outline-dark">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `,
    actor : `
        <div class="modal fade" id="actorCreateModal" tabindex="-1" aria-labelledby="actorCreate" aria-hidden="true" data-backdrop="false">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-dark">
                        <h3 class="modal-title" style="color:white">Create New Actor</h3>
                    </div>

                    <div class="modal-body">
                        <form class="actorCreateForm" id="actorCreateForm">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" id="name" name="name">
                            </div>
                            
                            <div class="form-group">
                                <label for="birthday">Birthday</label>
                                <input type="text" class="form-control" id="birthday" name="birthday">
                            </div>
                            
                            <div class="form-outline">
                                <label class="form-label" for="notes">Notes</label>
                                <textarea class="form-control" id="notes" name="notes" rows="4"></textarea>
                            </div>

                            <br>
                            <button type="submit" class="btn btn-dark" id="actorCreateSave">Save</button>
                            <button type="button" class="btn btn-outline-dark">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="actorEditModal" tabindex="-1" aria-labelledby="actorEditModal" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-dark">
                        <h3 class="modal-title" style="color:white">Edit Actor</h3>
                    </div>

                    <div class="modal-body">
                        <form class="actorEditForm" id="actorEditForm" method="#" action="#">
                            <input type="hidden" name="_method" value="PUT">
                            <div class="form-group">
                                <label for="actorName">Name</label>
                                <input type="text" class="form-control" id="actorName" name="actorName">
                            </div>
                            
                            <div class="form-group">
                                <label for="actorBirthday">Birthday</label>
                                <input type="text" class="form-control" id="actorBirthday" name="actorBirthday">
                            </div>
                            
                            <div class="form-outline">
                                <label class="form-label" for="actorNotes">Notes</label>
                                <textarea class="form-control" id="actorNotes" name="actorNotes" rows="4"></textarea>
                            </div>

                            <br>
                            <button type="submit" class="btn btn-dark" id="actorEditSave">Save</button>
                            <button type="button" class="btn btn-outline-dark">Cancel</button>
                            <input type="hidden" id="actor_id" name="actor_id" value="0">
                            </form>
                    </div>
                </div>
            </div>
        </div>
    `,
    producer : `
        <div class="modal fade" id="producerCreateModal" tabindex="-1" aria-labelledby="producerCreate" aria-hidden="true" data-backdrop="false">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-dark">
                        <h3 class="modal-title" style="color:white">Create New Producer</h3>
                    </div>

                    <div class="modal-body">
                        <form class="producerCreateForm" id="producerCreateForm">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" id="name" name="name">
                            </div>
                            
                            <div class="form-group">
                                <label for="birthday">Birthday</label>
                                <input type="text" class="form-control" id="birthday" name="birthday">
                            </div>
                            
                            <div class="form-outline">
                                <label class="form-label" for="notes">Notes</label>
                                <textarea class="form-control" id="notes" name="notes" rows="4"></textarea>
                            </div>

                            <br>
                            <button type="submit" class="btn btn-dark" id="producerCreateSave">Save</button>
                            <button type="button" class="btn btn-outline-dark">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="producerEditModal" tabindex="-1" aria-labelledby="producerEdit" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-dark">
                        <h3 class="modal-title" style="color:white">Edit Producer</h3>
                    </div>

                    <div class="modal-body">
                        <form class="producerEditForm">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" id="name">
                            </div>
                            
                            <div class="form-group">
                                <label for="birthday">Birthday</label>
                                <input type="text" class="form-control" id="birthday">
                            </div>
                            
                            <div class="form-outline">
                                <label class="form-label" for="notes">Notes</label>
                                <textarea class="form-control" id="notes" rows="4"></textarea>
                            </div>

                            <br>
                            <button type="button" class="btn btn-dark">Save</button>
                            <button type="button" class="btn btn-outline-dark">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `,
    genre : `
    <div class="modal fade" id="genreCreateModal" tabindex="-1" aria-labelledby="genreCreate" aria-hidden="true" data-backdrop="false">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-dark">
                    <h3 class="modal-title" style="color:white">Create New Genre</h3>
                </div>

                <div class="modal-body">
                    <form class="genreCreateForm" id="genreCreateForm">
                        <div class="form-group">
                            <label for="genre">Genre</label>
                            <input type="text" class="form-control" id="genre" name="genre">
                        </div>

                        <br>
                        <button type="submit" class="btn btn-dark" id="genreCreateSave">Save</button>
                        <button type="button" class="btn btn-outline-dark">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

        <div class="modal fade" id="genreEditModal" tabindex="-1" aria-labelledby="genreEdit" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-dark">
                        <h3 class="modal-title" style="color:white">Edit Genre</h3>
                    </div>

                    <div class="modal-body">
                        <form class="genreEditForm">
                            <div class="form-group">
                                <label for="genre">Genre</label>
                                <input type="text" class="form-control" id="genre">
                            </div>
                            
                            <br>
                            <button type="button" class="btn btn-dark">Save</button>
                            <button type="button" class="btn btn-outline-dark">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `,
    role : `
    <div class="modal fade" id="roleCreateModal" tabindex="-1" aria-labelledby="roleCreate" aria-hidden="true" data-backdrop="false">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-dark">
                    <h3 class="modal-title" style="color:white">Create New Role</h3>
                </div>

                <div class="modal-body">
                    <form class="roleCreateForm" id="roleCreateForm">
                        <div class="form-group">
                            <label for="roles">Role</label>
                            <input type="text" class="form-control" id="roles" name="roles">
                        </div>

                        <br>
                        <button type="submit" class="btn btn-dark" id="roleCreateSave">Save</button>
                        <button type="button" class="btn btn-outline-dark">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

        <div class="modal fade" id="roleEditModal" tabindex="-1" aria-labelledby="roleEdit" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-dark">
                        <h3 class="modal-title" style="color:white">Edit Role</h3>
                    </div>

                    <div class="modal-body">
                        <form class="roleEditForm">
                            <div class="form-group">
                                <label for="roles">Roles</label>
                                <input type="text" class="form-control" id="roles">
                            </div>

                            <br>
                            <button type="button" class="btn btn-dark">Save</button>
                            <button type="button" class="btn btn-outline-dark">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `,
}