import actorModal from './actorModals';
import link from './link'

const actor = {
    show(response){
        let template = `
        <div class="table-responsive">
            <br>
            <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark" data-bs-toggle="modal" id="actorCreateButton" data-bs-target="#actorCreateModal"> Add Actor </button>
            <table class="table table-striped table-hover" id="tableContent">
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
            </table>
        </div>
    `;

        $('#content').html(template);

        //ACTOR VIEW
        response.forEach(element =>{
            $('#actorBody').append(`
                <tr>
                    <td>${element.actor_id}</td>
                    <td>${element.name}</td>
                    <td>${element.birthday}</td>
                    <td>${element.notes}</td>
                    <td>
                        <i class="fas fa-edit actorEditIcon" data-bs-toggle="modal" data-bs-target="#actorEditModal" data-bs-id="" id="${element.actor_id}"></i>
                    </td>
                    <td><i class="fas fa-trash-alt actorDeleteIcon" id="${element.actor_id}"></i></td>
                </tr>
            `)
        });

        $('#content').append(actorModal);

        //ACTOR CREATE
        $("#actorCreateSave").on('click', function(e) {
            e.preventDefault();
            var data = $("#actorCreateForm").serialize();
            $.ajax({
                type: "post",
                url: "/api/Actor",
                data: data,
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                dataType: "json",
                success: function(data) {
                    console.log(data);
                    $('#actorCreateModal').modal('hide');

                    //clearing of input fields
                    $('#actorCreateForm :input').each(function () {
                        let input = $(this)
                        input.val('')
                    });

                    $('#actorBody').append(`
                        <tr>
                            <td>${data.actor_id}</td>
                            <td>${data.name}</td>
                            <td>${data.birthday}</td>
                            <td>${data.notes}</td>
                            <td>
                                <i class="fas fa-edit actorEditIcon" data-toggle="modal" data-target="#actorEditModal" data-id="" id="${data.actor_id}"></i>
                            </td>
                            <td><i class="fas fa-trash-alt actorDeleteIcon" id="${element.actor_id}"></i></td>
                        </tr>
                    `)
                    
                },
                error: function(error) {
                    console.log('error');
                }
            });
        });

        //ACTOR EDIT
        $('.actorEditIcon').on('click',function(e) {
            var id = this.id;
            console.log(id);
            $('<input>')
                .attr({
                    type: 'hidden',
                    id: 'actor_id',
                    name: 'actor_id',
                    value: id,
                }).appendTo('#actorEditForm');
            $.ajax({
                type: 'GET',
                url: '/api/Actor/' + id + '/edit',
                success: function(data){
                    console.log(data);
                    $('.actorName').val(data.name);
                    $('.actorBirthday').val(data.birthday);
                    $('.actorNotes').val(data.notes);
                },
                error: function(){
                    console.log('AJAX load did not work');
                    alert('error');
                },
            });
        });

        //ACTOR UPDATE
        $("#actorEditSave").on('click', function(e) {
            e.preventDefault();
            var id = $("#actor_id").val();
            var data = $("#actorEditForm").serialize();
            console.log(id);
            console.log(data);
            $.ajax({
                type: "PUT",
                url: "/api/Actor/"+ id ,
                data: data,
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                dataType: "json",
                success: function(data) {
                    console.log(data);
                    $('#actorEditModal').modal('hide');
                    link('actor')
                },
                error: function(error) {
                    console.log('error');
                }
            });
        });

        //ACTOR DELETE
        $('.actorDeleteIcon').on('click',function(e) {
            e.preventDefault();
            var id = this.id;
            var $tr = $(this).closest('tr')
            console.log(id);

            if(confirm('Are you sure you want to delete?')){
                $.ajax({
                    type: "DELETE",
                    url: "/api/Actor/" + id,
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

export default actor;