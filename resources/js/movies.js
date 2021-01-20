const movie = {
    show(response) {
        let template = `
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

                    let createButton = `<button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark" data-toggle="modal" id="movieCreateButton" data-target="#movieCreateModal"> Add Movie </button>`
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
                                    <i class="fas fa-edit movieEditIcon" data-toggle="modal" data-target="#movieEditModal" data-id="" id="${element.movie_id}"></i>
                                </td>
                                <td>
                                    <i class="fas fa-trash-alt"></i></a>
                                </td>
                            </tr>
                        `)
                    });

                    // SHOW GENRE PRODUCER ON CREATE DROPDOWN
                    $('#movieCreateButton').on('click', function(){
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
                    })

                    //MOVIE CREATE
                    $("#movieCreateSave").on('click', function(e) {
                        e.preventDefault();
                        var data = $("#movieCreateForm").serialize();
                        console.log(data);
                        $.ajax({
                            type: "POST",
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
                                            <i class="fas fa-edit movieEditIcon" data-toggle="modal" data-target="#movieEditModal" data-id="${data.movie_id}" id="movieEditIcon"></i>
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

                    //MOVIE EDIT
                    $('.movieEditIcon').on('click',function(e) {
                        //GET GENRES
                        $.ajax({
                            type: "GET",
                            url: "/api/Genre",
                            dataType: "json",
                            success: function(data) {
                                console.log(data);
                                var select = $('#genres');
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
                                var select = $('#producers');
                                $.each(data,function(data, result){
                                    select.append('<option name=\'producer_id\' value=\''+ result.producer_id +' \'>'+ result.name +'</option>');
                                });
                            },
                            error: function(error) {
                                console.log('error');
                            }
                        }); 

                        var id = this.id;
                        console.log(id);
                        $('<input>')
                            .attr({
                                type: 'hidden',
                                id: 'movie_id',
                                name: 'movie_id',
                                value: id,
                            }).appendTo('#movieEditForm');
                        $.ajax({
                            type: 'GET',
                            url: '/api/Movie/' + id + '/edit',
                            success: function(data){
                                console.log(data);
                                $('.movieTitle').val(data.title);
                                $('.movieYear').val(data.year);
                                $('.moviePlot').val(data.plot);
                                $('.movieGenre').val(data.genre_id);
                                $('.movieProducer').val(data.producer_id);
                            },
                            error: function(){
                                console.log('AJAX load did not work');
                                alert('error');
                            },
                        });
                    });

                    //MOVIE UPDATE
                    $("#movieEditSave").on('click', function(e) {
                        var id = $("#movie_id").val();
                        var data = $("#movieEditForm").serialize();
                        console.log(id);
                        console.log(data);
                        $.ajax({
                            type: "PUT",
                            url: "/api/Movie/"+ id ,
                            data: data,
                            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                            dataType: "json",
                            success: function(data) {
                                console.log(data);
                                $('#movieEditModal').each(function(){
                                        $(this).modal('hide'); 
                                    });
                            },
                            error: function(error) {
                                console.log('error');
                            }
                        });
                    });
                    
    }
}

export default movie;