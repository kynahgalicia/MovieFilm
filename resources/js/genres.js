import genreModal from './genreModals';
import link from './link';

const genre = {
    show(response){
        let template = `
        <div class="table-responsive">
            <br>
            <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark" data-bs-toggle="modal" data-bs-target="#genreCreateModal"> Add Genre </button>
            <table class="table table-striped table-hover" id="tableContent">
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
            </table>
        </div>
        `;

        $('#content').html(template);

        //GENRE VIEW
        response.forEach(element =>{
            $('#genreBody').append(`
                <tr>
                    <td>${element.genre_id}</td>
                    <td>${element.genre}</td>
                    <td>
                        <i class="fas fa-edit genreEditIcon" data-bs-toggle="modal" data-bs-target="#genreEditModal" data-bs-id="" id="${element.genre_id}"></i>
                    </td>
                    <td><i class="fas fa-trash-alt genreDeleteIcon" id="${element.genre_id}"></i></td>
                </tr>
            `)
        });

        $('#content').append(genreModal);

        //GENRE CREATE
        $('#genreCreateForm').validate({
            rules: {
                genre: { required:true, minlength:5 }
            },
            messages: {
                genre: { required:'required'}
            
            },
            errorPlacement: function(error, element){
                error.insertAfter(element)
            },
            submitHandler: function(form,e) {
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
                        $('#genreCreateModal').modal('hide');

                        //clearing of input fields
                        $('#genreCreateForm :input').each(function () {
                            let input = $(this)
                            input.val('')
                        });

                        $('#genreBody').append(`
                            <tr>
                                <td>${data.genre_id}</td>
                                <td>${data.genre}</td>
                                <td>
                                    <i class="fas fa-edit genreEditIcon" data-bs-toggle="modal" data-bs-target="#genreEditModal" data-bs-id="" id="${data.genre_id}"></i>
                                </td>
                                <td><i class="fas fa-trash-alt genreDeleteIcon" id="${element.genre_id}"></i></td>
                            </tr>
                        `)
                        
                    },
                    error: function(error) {
                        console.log('error');
                    }
                });
            }
        });

        //GENRE EDIT
        $('.genreEditIcon').on('click',function(e) {
            var id = this.id;
            console.log(id);
            $('<input>')
                .attr({
                    type: 'hidden',
                    id: 'genre_id',
                    name: 'genre_id',
                    value: id,
                }).appendTo('#genreEditForm');
            $.ajax({
                type: 'GET',
                url: '/api/Genre/' + id + '/edit',
                success: function(data){
                    console.log(data);
                    $('.genreGenre').val(data.genre);
                },
                error: function(){
                    console.log('AJAX load did not work');
                    alert('error');
                },
            });
        });

        //GENRE UPDATE
        $('#genreEditForm').validate({
            rules: {
                genre: { required:true, minlength:5 }
            },
            messages: {
                genre: { required:'required'}
            
            },
            errorPlacement: function(error, element){
                error.insertAfter(element)
            },
            submitHandler: function(form,e) {
            e.preventDefault();
            var id = $("#genre_id").val();
            var data = $("#genreEditForm").serialize();
            console.log(id);
            console.log(data);
            $.ajax({
                type: "PUT",
                url: "/api/Genre/"+ id ,
                data: data,
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                dataType: "json",
                success: function(data) {
                    console.log(data);
                    $('#genreEditModal').modal('hide');
                    link('genre')
                },
                error: function(error) {
                    console.log('error');
                }
            });
        }
    });

        //GENRE DELETE
        $('.genreDeleteIcon').on('click',function(e) {
            e.preventDefault();
            var id = this.id;
            var $tr = $(this).closest('tr')
            console.log(id);

            if(confirm('Are you sure you want to delete?')){
                $.ajax({
                    type: "DELETE",
                    url: "/api/Genre/" + id,
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

export default genre;