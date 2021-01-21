import roleModal from './roleModals';
import link from './link';

const role = {
    show(response){
        let template = `
            <div class="table-responsive">
                <br>
                <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark" data-bs-toggle="modal" data-bs-target="#roleCreateModal"> Add Role </button>
                <table class="table table-striped table-hover" id="tableContent">
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
                </table>
            </div>
        `;

        $('#content').html(template);

        //ROLE VIEW
        response.forEach(element =>{
            $('#roleBody').append(`
                <tr>
                    <td>${element.role_id}</td>
                    <td>${element.roles}</td>
                    <td>
                        <i class="fas fa-edit roleEditIcon" data-bs-toggle="modal" data-bs-target="#roleEditModal" data-bs-id="" id="${element.role_id}"></i>
                    </td>
                    <td><i class="fas fa-trash-alt roleDeleteIcon" id="${element.role_id}"></i></td>
                </tr>
            `)
        });

        $('#content').append(roleModal);

        //ROLE CREATE
        $('#roleCreateForm').validate({
            rules: {
                roles: { required:true, minlength:5 }
            },
            messages: {
                roles: { required:'required'}
            
            },
            errorPlacement: function(error, element){
                error.insertAfter(element)
            },
            submitHandler: function(form,e) {
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
                        $('#roleCreateModal').modal('hide');

                        $('#roleCreateForm :input').each(function () {
                            let input = $(this)
                            input.val('')
                        });

                        $('#roleBody').append(`
                            <tr>
                                <td>${data.role_id}</td>
                                <td>${data.roles}</td>
                                <td>
                                    <i class="fas fa-edit roleEditIcon" data-bs-toggle="modal" data-bs-target="#roleEditModal" data-bs-id="" id="${data.role_id}"></i>
                                </td>
                                <td><i class="fas fa-trash-alt roleDeleteIcon" id="${data.role_id}"></i></td>
                            </tr>
                        `)
                                    
                    },
                    error: function(error) {
                        console.log('error');
                    }
                });
            }
        });

        //ROLE EDIT
        $('.roleEditIcon').on('click',function(e) {
            var id = this.id;
            console.log(id);
            $('<input>')
                .attr({
                    type: 'hidden',
                    id: 'role_id',
                    name: 'role_id',
                    value: id,
                }).appendTo('#roleEditForm');
            $.ajax({
                type: 'GET',
                url: '/api/Role/' + id + '/edit',
                success: function(data){
                    console.log(data);
                    $('.roleRoles').val(data.roles);
                },
                error: function(){
                    console.log('AJAX load did not work');
                    alert('error');
                },
            });
        });

        //ROLE UPDATE
        $('#roleEditForm').validate({
            rules: {
                roles: { required:true, minlength:5 }
            },
            messages: {
                roles: { required:'required'}
            
            },
            errorPlacement: function(error, element){
                error.insertAfter(element)
            },
            submitHandler: function(form,e) {
                e.preventDefault();
                var id = $("#role_id").val();
                var data = $("#roleEditForm").serialize();
                console.log(id);
                console.log(data);
                $.ajax({
                    type: "PUT",
                    url: "/api/Role/"+ id ,
                    data: data,
                    headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                    dataType: "json",
                    success: function(data) {
                        console.log(data);
                        $('#roleEditModal').modal('hide');
                        link('role')
                    },
                    error: function(error) {
                        console.log('error');
                    }
                });
            }
        });

        //ROLE DELETE
        $('.roleDeleteIcon').on('click',function(e) {
            e.preventDefault();
            var id = this.id;
            var $tr = $(this).closest('tr')
            console.log(id);

            if(confirm('Are you sure you want to delete?')){
                $.ajax({
                    type: "DELETE",
                    url: "/api/Role/" + id,
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

export default role;