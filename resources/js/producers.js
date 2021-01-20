const producer = {
    show(response){
        let template = `
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

        let createButton = `<button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark" data-toggle="modal" data-target="#producerCreateModal"> Add Producer </button>`
        $('#tableContent').html(template);
        $('#createButton').html(createButton);

        //PRODUCER VIEW
        response.forEach(element =>{
            $('#producerBody').append(`
                <tr>
                    <td>${element.producer_id}</td>
                    <td>${element.name}</td>
                    <td>${element.birthday}</td>
                    <td>${element.notes}</td>
                    <td>
                        <i class="fas fa-edit producerEditIcon" data-toggle="modal" data-target="#producerEditModal" data-id="" id="${element.producer_id}"></i>
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

        //PRODUCER EDIT
        $('.producerEditIcon').on('click',function(e) {
            var id = this.id;
            console.log(id);
            $('<input>')
                .attr({
                    type: 'hidden',
                    id: 'producer_id',
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


        //PRODUCER EDIT
        $("#producerEditSave").on('click', function(e) {
            var id = $("#producer_id").val();
            var data = $("#producerEditForm").serialize();
            console.log(id);
            console.log(data);
            // $.ajax({
            //     type: "PUT",
            //     url: "/api/Producer/"+ id ,
            //     data: data,
            //     headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            //     dataType: "json",
            //     success: function(data) {
            //         console.log(data);
            //         $('#producerEditModal').each(function(){
            //                 $(this).modal('hide'); 
            //             });
            //     },
            //     error: function(error) {
            //         console.log('error');
            //     }
            // });
        });
    }
}

export default producer;