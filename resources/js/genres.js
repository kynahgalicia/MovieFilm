const genre = {
    show(response){
        let template = `
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
        `;

        let createButton=`<button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark" data-toggle="modal" data-target="#genreCreateModal"> Add Genre </button>`
        $('#tableContent').html(template);
        $('#createButton').html(createButton);

        response.forEach(element =>{
            $('#genreBody').append(`
                <tr>
                    <td>${element.genre_id}</td>
                    <td>${element.genre}</td>
                    <td>
                        <i class="fas fa-edit" data-toggle="modal" data-target="#genreEditModal" data-id="${element.genre_id}" id="genreEditIcon"></i>
                    </td>
                    <td><i class="fas fa-trash-alt"></i></td>
                </tr>
            `)
        });

        //GENRE CREATE
        $("#genreCreateSave").on('click', function(e) {
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
                    $('#genreCreateModal').hide();
                    $('#genreBody').append(`
                        <tr>
                            <td>${data.genre_id}</td>
                            <td>${data.genre}</td>
                            <td>
                                <i class="fas fa-edit" data-toggle="modal" data-target="#genreEditModal" data-id="${data.genre_id}" id="genreEditIcon"></i>
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

export default genre;