$('.link').on('click', (e) => {
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
                case 'movie':
                    template = `<p>Hello Movie</p>`;
                    $('#content').html(template);
                    break;
                case 'actor':
                    template = `<p>Hello actor</p>`;
                    $('#content').html(template);
                    break;
                case 'producer':
                    template = `<p>Hello producer</p>`;
                    $('#content').html(template);
                    break;
                case 'genre':
                    template = `<p>Hello Genre</p>`;
                    $('#content').html(template);
                    break;
                case 'role':
                    template = `<p>Hello Role</p>`;
                    $('#content').html(template);
                    break;
            
                default:
                    break;
            }
        }
    })
});