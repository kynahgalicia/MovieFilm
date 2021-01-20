// case 'actor':
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
                                    <i class="fas fa-edit actorEditIcon" data-toggle="modal" data-target="#actorEditModal" data-id="" id="${element.actor_id}"></i>
                                </td>
                                <td><i class="fas fa-trash-alt"></i></td>
                            </tr>
                        `)
                    });

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