import actor from './actors';
import movie from './movies';
import genre from './genres';
import role from './roles';
import producer from './producers';

$('.link').on('click', (function(e) {
    let link = e.currentTarget.dataset.id;
    $.ajax({
        type: 'GET',
        url: '/api/' + link + '/all',
        error: function(response){
            console.log(response)
        },
        success(response){
            

            switch (link) {
                //Movie Case
                case 'movie':
                    movie.show(response);
                break;

                //Actor Case
                case 'actor':
                    actor.show(response);
                break;

                //PRODUCER CASE
                case 'producer':
                    producer.show(response);
                break;

                //GENRE CASE
                case 'genre':
                    genre.show(response);
                break;

                //ROLE CASE
                case 'role':
                    role.show(response);
                break;
                    
                default:
                break;
            }
        }
    })
}));