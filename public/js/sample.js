$( function() {

    // Single Select
    $( "#autocomplete" ).autocomplete({
        source: function( request, response ) {
            // Fetch data
            $.ajax({
                url: "fetchData.php",
                type: 'post',
                dataType: "json",
                data: {
                    search: request.term
                },
                success: function( data ) {
                    response( data );
                }
            });
        },
        select: function (event, ui) {
            // Set selection
            $('#autocomplete').val(ui.item.label); // display the selected text
            $('#selectuser_id').val(ui.item.value); // save selected id to input
            return false;
        }
    });
});

function split( val ) {
    return val.split( /,\s*/ );
}

function extractLast( term ) {
    return split( term ).pop();
}