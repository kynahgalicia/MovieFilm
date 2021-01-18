$('.link').on('click', (function(e) {
    let link = e.currentTarget.dataset.id;
    $.ajax({
        type: 'GET',
        url: '/api/' + link + '/all',
        error: function(response){
            console.log(response)
        },
        success(response){
            let template = ``;
            let createButton = ``;

            switch (link) {
                //Movie Case
                case 'movie':
                    template = `
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
                        <tbody id="movieBody">
                        </tbody>
                    `;

                    createButton = `<button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark" data-toggle="modal" data-target="#movieCreateModal"> Add Movie </button>`
                    $('#tableContent').html(template);
                    $('#createButton').html(createButton);

                    //MOVIE VIEW
                    response.forEach(element =>{
                        $('#movieBody').append(`
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

                    //GET GENRES
                    $.ajax({
                        type: "GET",
                        url: "/api/Genre",
                        dataType: "json",
                    
                        success: function(data) {
                            console.log(data);
                            
                                var select = $('#genre_id');
                                $.each(data,function(data, result){
                                    select.append('<option name=\'genre_id\' value=\''+ result.genre_id +' \'>'+ result.genre +'</option>');
    
                                });
    
                        },
                        error: function(error) {
                            console.log('error');
                        }
                    });

                    //GET PRODUCERS
                    $.ajax({
                        type: "GET",
                        url: "/api/Producer",
                        dataType: "json",
                    
                        success: function(data) {
                            console.log(data);
                            
                                var select = $('#producer_id');
                                $.each(data,function(data, result){
                                    select.append('<option name=\'producer_id\' value=\''+ result.producer_id +' \'>'+ result.name +'</option>');
    
                                });
    
                        },
                        error: function(error) {
                            console.log('error');
                        }
                    }); 

                    //MOVIE CREATE
                    $("#movieCreateSave").on('click', function(e) {
                        e.preventDefault();
                        var data = $("#movieCreateForm").serialize();
                        console.log(data);
                        $.ajax({
                            type: "post",
                            url: "/api/Movie",
                            data: data,
                            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                            dataType: "json",
                            success: function(data) {
                                console.log(data);
                                $('#movieCreateModal').hide();
                                $('#movieBody').append(`
                                    <tr>
                                        <td>${data.movie_id}</td>
                                        <td>${data.title}</td>
                                        <td>${data.year}</td>
                                        <td>${data.plot}</td>
                                        <td>${data.genre_id}</td>
                                        <td>${data.producer_id}</td>
                                        <td>
                                            <i class="fas fa-edit" data-toggle="modal" data-target="#movieEditModal" data-id="${data.movie_id}" id="movieEditIcon"></i>
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

                //Actor Case
                case 'actor':
                    template = `
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
                        <tbody id="actorBody">
                        </tbody>
                    `;

                    createButton = `<button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark" data-toggle="modal" data-target="#actorCreateModal"> Add Actor </button>`
                    $('#tableContent').html(template);
                    $('#createButton').html(createButton);

                    //ACTOR VIEW
                    response.forEach(element =>{
                        $('#actorBody').append(`
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

                    //ACTOR CREATE
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
                                $('#actorCreateModal').hide();
                                $('#actorBody').append(`
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

                    //ACTOR EDIT
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

                //PRODUCER CASE
                case 'producer':
                    template = `
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
                        <tbody id="producerBody">
                        </tbody>
                    `;

                    createButton = `<button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark" data-toggle="modal" data-target="#producerCreateModal"> Add Producer </button>`
                    $('#tableContent').html(template);
                    $('#createButton').html(createButton);

                    response.forEach(element =>{
                        $('#producerBody').append(`
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

                    //PRODUCER CREATE
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
                                    $('#producerCreateModal').hide();
                                $('#producerBody').append(`
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

                //GENRE CASE
                case 'genre':
                    template = `
                        <thead>
                            <tr>
                            <th>Genre ID</th>
                                <th>Genre</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody id="genreBody">
                        </tbody>
                    `;

                    createButton=`<button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark" data-toggle="modal" data-target="#genreCreateModal"> Add Genre </button>`
                    $('#tableContent').html(template);
                    $('#createButton').html(createButton);

                    response.forEach(element =>{
                        $('#genreBody').append(`
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

                    //GENRE CREATE
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
                                $('#genreCreateModal').hide();
                                $('#genreBody').append(`
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

                //ROLE CASE
                case 'role':
                    template = `
                        <thead>
                            <tr>
                                <th>Role ID</th>
                                <th>Role</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody id="roleBody">
                        </tbody>
                    `;

                    createButton=`<button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark" data-toggle="modal" data-target="#roleCreateModal"> Add Role </button>`
                    $('#tableContent').html(template);
                    $('#createButton').html(createButton);

                    response.forEach(element =>{
                        $('#roleBody').append(`
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

                    //ROLE CREATE
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
                                $('#roleCreateModal').hide();
                                $('#roleBody').append(`
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