$.ajax({
    type: "GET",
    url: "/customer/all",
    dataType: 'json',
    success: function (data) {
        //console.log(data);
        $.each(data, function(key, value) {
          //console.log(value);
            id = value.id;
            var tr = $("<tr>");
            tr.append($("<td>").html(value.id));
            tr.append($("<td>").html(value.title));
            tr.append($("<td>").html(value.lname));
            tr.append($("<td>").html(value.fname));
            tr.append($("<td>").html(value.addressline));
            tr.append($("<td>").html(value.phone));
            tr.append("<td align='center'><a href='#' data-toggle='modal' data-target='#editModal' id='editbtn' data-id="+ id + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
        })
    }
})