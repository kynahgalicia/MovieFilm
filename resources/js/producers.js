import link from './link';
import producerModal from './producerModals';

const producer = {
    show(response){
        let template = `
        <div class="table-responsive">
            <br>
            <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark" data-bs-toggle="modal" data-bs-target="#producerCreateModal"> Add Producer </button>
            <table class="table table-striped table-hover" id="tableContent">
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
            </table>
        </div>
        `;

        $('#content').html(template);

        //PRODUCER VIEW
        response.forEach(element =>{
            $('#producerBody').append(`
                <tr>
                    <td>${element.producer_id}</td>
                    <td>${element.name}</td>
                    <td>${element.birthday}</td>
                    <td>${element.notes}</td>
                    <td>
                        <i class="fas fa-edit producerEditIcon" data-bs-toggle="modal" data-bs-target="#producerEditModal" data-bs-id="" id="${element.producer_id}"></i>
                    </td>
                    <td><i class="fas fa-trash-alt producerDeleteIcon" id="${element.producer_id}"></i></td>
                </tr>
            `)
        });

        $('#content').append(producerModal);

        //PRODUCER CREATE
        $('#producerCreateForm').validate({
            rules: {
                name: { required:true, minlength:5 },
                birthday: { required:true, minlength:10, maxlength: 10},
                notes: { required:true, minlength:10 },
            },
            messages: {
                name: { required:'required'},
                birthday: { required:'required'},
                notes: { required:'required'},
            
            },
            errorPlacement: function(error, element){
                error.insertAfter(element)
            },
            submitHandler: function(form,e) {
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
                        $('#producerCreateModal').modal('hide');

                        //clearing of input fields
                        $('#producerCreateForm :input').each(function () {
                            let input = $(this)
                            input.val('')
                        });

                        $('#producerBody').append(`
                            <tr>
                                <td>${data.producer_id}</td>
                                <td>${data.name}</td>
                                <td>${data.birthday}</td>
                                <td>${data.notes}</td>
                                <td>
                                    <i class="fas fa-edit producerEditIcon" data-bs-toggle="modal" data-bs-target="#producerEditModal" data-bs-id="" id="${data.producer_id}"></i>
                                </td>
                                <td><i class="fas fa-trash-alt producerDeleteIcon" id="${data.producer_id}"></i></td>
                            </tr>
                        `)
                        
                    },
                    error: function(error) {
                        console.log('error');
                    }
                });
            }
        });

        //PRODUCER EDIT
        $('.producerEditIcon').on('click',function(e) {
            var id = this.id;
            console.log(id);
            $('<input>')
                .attr({
                    type: 'hidden',
                    id: 'producers_id',
                    name: 'producer_id',
                    value: id,
                }).appendTo('#producerEditForm');
            $.ajax({
                type: 'GET',
                url: '/api/Producer/' + id + '/edit',
                success: function(data){
                    console.log(data);
                    $('.producerName').val(data.name);
                    $('.producerBirthday').val(data.birthday);
                    $('.producerNotes').val(data.notes);
                },
                error: function(){
                    console.log('AJAX load did not work');
                    alert('error');
                },
            });
        });


        //PRODUCER UPDATE
        $('#producerEditForm').validate({
            rules: {
                name: { required:true, minlength:5 },
                birthday: { required:true, minlength:10, maxlength: 10},
                notes: { required:true, minlength:10 },
            },
            messages: {
                name: { required:'required'},
                birthday: { required:'required'},
                notes: { required:'required'},
            
            },
            errorPlacement: function(error, element){
                error.insertAfter(element)
            },
            submitHandler: function(form,e) {
                e.preventDefault();
                var id = $("#producers_id").val();
                var data = $("#producerEditForm").serialize();
                console.log(id);
                console.log(data);
                $.ajax({
                    type: "PUT",
                    url: "/api/Producer/"+ id ,
                    data: data,
                    headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                    dataType: "json",
                    success: function(data) {
                        console.log(data);
                        $('#producerEditModal').modal('hide');
                        link('producer')
                    },
                    error: function(error) {
                        console.log('error');
                    }
                });
            }
        });

        //PRODUCER DELETE
        $('.producerDeleteIcon').on('click',function(e) {
            e.preventDefault();
            var id = this.id;
            var $tr = $(this).closest('tr')
            console.log(id);

            if(confirm('Are you sure you want to delete?')){
                $.ajax({
                    type: "DELETE",
                    url: "/api/Producer/" + id,
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

export default producer;