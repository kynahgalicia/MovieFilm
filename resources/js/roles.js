const role = {
    show(response){
        let template = `
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

                    let createButton=`<button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark" data-toggle="modal" data-target="#roleCreateModal"> Add Role </button>`
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
    }
}

export default role;