const actor = {
    show(response){
        let template = `
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

        let createButton = `<button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark" data-toggle="modal" data-target="#actorCreateModal"> Add Actor </button>`
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
                        <i class="fas fa-edit actorEditIcon" data-toggle="modal" data-target="#actorEditModal" data-id="" id="${element.actor_id}"></i>
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
                    $('#actorEditModal').each(function(){
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

export default actor;