import actor from './actors';
import movie from './movies';
import genre from './genres';
import role from './roles';
import producer from './producers';

function link (link, page='') {

        $.ajax({
            type: 'GET',
            url: '/api/' + link + '/all' + page,
            error: function(response){
                console.log(response)
            },
            success(response){
                
                switch (link) {
                    //Movie Case
                    case 'movie':
                        movie.show(response.data);
                        paginate(response.last_page,response.current_page,'movie')
                    break;
    
                    //Actor Case
                    case 'actor':
                        actor.show(response.data);
                        paginate(response.last_page,response.current_page,'actor')
                    break;
    
                    //PRODUCER CASE
                    case 'producer':
                        producer.show(response.data);
                        paginate(response.last_page,response.current_page,'producer')
                    break;
    
                    //GENRE CASE
                    case 'genre':
                        genre.show(response.data);
                        paginate(response.last_page,response.current_page,'genre')
                    break;
    
                    //ROLE CASE
                    case 'role':
                        role.show(response.data);
                        paginate(response.last_page,response.current_page,'role')
                    break;
                        
                    default:
                    break;
                }
            }
        })
    
}

function paginate(last_page, current_page, indexPage){
    $("#paginate").html(`
        <nav>
            <ul class="pagination pagination-sm" id="paginateLinks">
            </ul>
        </nav>
    `)

    for (let index=1; index <= last_page; index++) {
        let isActive = ''
        if(current_page == index){
            isActive = 'bg-dark text-white'
        }
        $('#paginateLinks').append(`
            <li class="page-item"><a class="page-link ${isActive}" href="#" data-id=${index}>${index}</a></li>
        `)
    }

    $('.page-link').on('click', function(e){
        e.preventDefault();
        
        let page = e.currentTarget.dataset.id
        console.log(page)
        link(indexPage,'?page=' + page)
    })

    
}
export default link
