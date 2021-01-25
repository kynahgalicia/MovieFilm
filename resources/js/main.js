import link from './link'
$(document).ready(function () {
    $('.link').on('click', (function(e) {
        let linkPage = e.currentTarget.dataset.id;
        link(linkPage);
    }));
})