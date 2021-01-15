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
                        <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark" data-toggle="modal" data-target="#movieCreate"> Add Movie </button>
                        <thead>
                            <tr>
                                <th>Movie ID</th>
                                <th>Title</th>
                                <th>Year</th>
                                <th>Plot</th>
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
                                <td><i class="fas fa-edit"></i></td>
                                <td><i class="fas fa-trash-alt"></i></td>
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
                    <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark" data-toggle="modal" data-target="#actorCreate"> Add Actor </button>
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
                    response.forEach(element =>{
                        $('#actor').append(`
                            <tr>
                                <td>${element.actor_id}</td>
                                <td>${element.name}</td>
                                <td>${element.birthday}</td>
                                <td>${element.notes}</td>
                                <td><i class="fas fa-edit"></i></td>
                                <td><i class="fas fa-trash-alt"></i></td>
                            </tr>
                        `)
                    });
                    $('#content').append(modals.actor);
                    break;

                //Producer Case
                case 'producer':
                    template = `
                    <table class="table table-striped table-hover">
                    <br>
                    <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark" data-toggle="modal" data-target="#producerCreate"> Add Producer </button>
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
                                <td><i class="fas fa-edit"></i></td>
                                <td><i class="fas fa-trash-alt"></i></td>
                            </tr>
                        `)
                    });
                    $('#content').append(modals.producer);
                    break;

                //Genre Case
                case 'genre':
                    template = `
                    <table class="table table-striped table-hover">
                    <br>
                    <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark" data-toggle="modal" data-target="#genreCreate"> Add Genre </button>
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
                                <td><i class="fas fa-edit"></i></td>
                                <td><i class="fas fa-trash-alt"></i></td>
                            </tr>
                        `)
                    });
                    $('#content').append(modals.genre);
                    break;

                //Role Case
                case 'role':
                    template = `
                    <table class="table table-striped table-hover">
                    <br>
                    <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark" data-toggle="modal" data-target="#roleCreate"> Add Role </button>
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
                                <td><i class="fas fa-edit"></i></td>
                                <td><i class="fas fa-trash-alt"></i></td>
                            </tr>
                        `)
                    });
                    $('#content').append(modals.role);
                    break;
                    
                default:
                break;
            }
        }
    })
}));

const modals = {
    movie : `
        <div class="modal fade" id="movieCreate" tabindex="-1" aria-labelledby="movieCreate" aria-hidden="true">
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
        <div class="modal fade" id="actorCreate" tabindex="-1" aria-labelledby="actorCreate" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-dark">
                        <h3 class="modal-title" style="color:white">Create New Actor</h3>
                    </div>

                    <div class="modal-body">
                        <form class="actorCreateForm">
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
    producer : `
        <div class="modal fade" id="producerCreate" tabindex="-1" aria-labelledby="producerCreate" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-dark">
                        <h3 class="modal-title" style="color:white">Create New Producer</h3>
                    </div>

                    <div class="modal-body">
                        <form class="producerCreateForm">
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
        <div class="modal fade" id="genreCreate" tabindex="-1" aria-labelledby="genreCreate" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-dark">
                        <h3 class="modal-title" style="color:white">Create New Genre</h3>
                    </div>

                    <div class="modal-body">
                        <form class="genreCreateForm">
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
        <div class="modal fade" id="roleCreate" tabindex="-1" aria-labelledby="roleCreate" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-dark">
                        <h3 class="modal-title" style="color:white">Create New Role</h3>
                    </div>

                    <div class="modal-body">
                        <form class="roleCreateForm">
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