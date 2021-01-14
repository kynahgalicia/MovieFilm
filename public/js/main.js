$('.link').on('click', (function(e) {
    let link = e.currentTarget.dataset.id;
    // console.log(link);
    $.ajax({
        type: 'GET',
        url: '/api/' + link + '/all',
        error: function(response){
            console.log(response)
        },
        success(response){
            let template = ``;
            switch (link) {

                //Movie Case
                case 'movie':
                    template = `
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Movie ID</th>
                                <th>Title</th>
                                <th>Year</th>
                                <th>Plot</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody id="movie">
                        </tbody>
                    </table>
                    `;
                    $('#content').html(template);
                    response.forEach(element =>{
                        $('#movie').append(`
                            <tr>
                                <td>${element.movie_id}</td>
                                <td>${element.title}</td>
                                <td>${element.year}</td>
                                <td>${element.plot}</td>
                                <td></td>
                                <td></td>
                            </tr>
                        `)
                    });
                    break;

                //Actor Case
                case 'actor':
                    template = `
                    <table class="table table-striped table-hover">
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
                        <tbody id="actor">
                        </tbody>
                    </table>
                `;
                    $('#content').html(template);
                    response.forEach(element =>{
                        $('#actor').append(`
                            <tr>
                                <td>${element.actor_id}</td>
                                <td>${element.name}</td>
                                <td>${element.birthday}</td>
                                <td>${element.notes}</td>
                                <td></td>
                                <td></td>
                            </tr>
                        `)
                    });
                    break;

                //Producer Case
                case 'producer':
                    template = `
                    <table class="table table-striped table-hover">
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
                        <tbody id="producer">
                        </tbody>
                    </table>
                    `;
                    $('#content').html(template);
                    response.forEach(element =>{
                        $('#producer').append(`
                            <tr>
                                <td>${element.producer_id}</td>
                                <td>${element.name}</td>
                                <td>${element.birthday}</td>
                                <td>${element.notes}</td>
                                <td></td>
                                <td></td>
                            </tr>
                        `)
                    });
                    break;

                //Genre Case
                case 'genre':
                    template = `
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Genre ID</th>
                                <th>Genre</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody id="genre">
                        </tbody>
                    </table>
                    `;
                    $('#content').html(template);
                    response.forEach(element =>{
                        $('#genre').append(`
                            <tr>
                                <td>${element.genre_id}</td>
                                <td>${element.genre}</td>
                                <td></td>
                                <td></td>
                            </tr>
                        `)
                    });
                    break;

                //Role Case
                case 'role':
                    template = `
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Role ID</th>
                                <th>Role</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody id="role">
                        </tbody>
                    </table>
                    `;
                    $('#content').html(template);
                    response.forEach(element =>{
                        $('#role').append(`
                            <tr>
                                <td>${element.role_id}</td>
                                <td>${element.roles}</td>
                                <td></td>
                                <td></td>
                            </tr>
                        `)
                    });
                    break;
            
                default:
                break;
            }
        }
    })
}));