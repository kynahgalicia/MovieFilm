import link from './link'

$('.link').on('click', (function(e) {
    let linkPage = e.currentTarget.dataset.id;
    link(linkPage)
}))