import movieModal from './movieModals';
import link from './link'

const movie = {
    show(response) {
        let template = `
            <div class="table-responsive">
                <br>
                <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark" data-bs-toggle="modal" id="movieCreateButton" data-bs-target="#movieCreateModal"> Add Movie </button>
                <table class="table" id="tableContent">
                    <thead class="table-dark">
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
                    <tbody class="selectable" id="movieBody">

                    </tbody>
                </table>
            </div>
        `;

        $('#content').html(template);

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
                        <i class="fas fa-edit movieEditIcon" data-bs-toggle="modal" data-bs-target="#movieEditModal" data-id="" id="${element.movie_id}"></i>
                    </td>
                    <td>
                        <i class="fas fa-trash-alt movieDeleteIcon" id="${element.movie_id}"></i></a>
                    </td>
                </tr>
            `)
        });

        $('.selectable').selectable();
        $('#content').append(movieModal);

        // SHOW GENRE PRODUCER ON CREATE DROPDOWN
        $('#movieCreateModal').on('shown.bs.modal', (e) => {
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
        $('#movieCreateForm').validate({
            rules: {
                title: { required:true, minlength:5 },
                year: { required:true, minlength:4, maxlength:4},
                plot: { required:true, minlength:10},
                genre_id: { required:true},
                producer_id: { required:true},
            },
            messages: {
                title: { required:'required'},
                year: { required:'required', rangelength: 'required length is 4 digits', range: 'range should be between 1900-2020'},
                plot: { required:'required'},
                genre_id: { required:'required'},
                producer_id: { required:'required'},
            },
            errorPlacement: function(error, element){
                error.insertAfter(element)
            },
            submitHandler: function(form,e) {
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
                        $('#movieCreateModal').modal('hide');

                        //clearing of input fields
                        $('#movieCreateForm :input').each(function () {
                            let input = $(this)
                            input.val('')
                        });

                        $('#movieBody').append(`
                            <tr>
                                <td>${data.movie_id}</td>
                                <td>${data.title}</td>
                                <td>${data.year}</td>
                                <td>${data.plot}</td>
                                <td>${data.genre_id}</td>
                                <td>${data.producer_id}</td>
                                <td>
                                    <i class="fas fa-edit movieEditIcon" data-bs-toggle="modal" data-bs-target="#movieEditModal" data-id="" id="${data.movie_id}"></i>
                                </td>
                                <td><i class="fas fa-trash-alt movieDeleteIcon" id="${data.movie_id}"></i></td>
                            </tr>
                        `)
                    },
                    error: function(error) {
                        console.log('error');
                    }
                });
            }
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
            e.preventDefault();
            var id = $("#movie_id").val();
            var data = $("#movieEditForm").serialize();
            // console.log(id);
            console.log(data);
            $.ajax({
                type: "PUT",
                url: "/api/Movie/"+ id ,
                data: data,
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                dataType: "json",
                success: function(data) {
                    console.log(data);
                    $('#movieEditModal').modal('hide');
                    link('movie')
                },
                error: function(error) {
                    console.log('error');
                }
            });
        });
        

        $('#movieCreateModal').on('shown.bs.modal', (e) => {
            $('#genre_id').empty();
            $('#producer_id').empty();
        });
    
        $('#movieEditModal').on('shown.bs.modal', (e) => {
            $('.movieGenres').empty();
            $('.movieProducers').empty();
        });

        //MOVIE DELETE
        $('.movieDeleteIcon').on('click',function(e) {
            e.preventDefault();
            var id = this.id;
            var $tr = $(this).closest('tr')
            console.log(id);

            if(confirm('Are you sure you want to delete?')){
                $.ajax({
                    type: "DELETE",
                    url: "/api/Movie/" + id,
                    headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                    dataType: "json",
                    success:function(data){
                        console.log(data);
                        $tr.remove();
                    },
                    error:function(data){
                        console.log('Error:',data);
                    }
                })
            }
            
        });
    }
}

export default movie;