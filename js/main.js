$(function() {

    var num_rows = 26;
    var num_cols = 26;
    var table_string = "<table id='pic_table'><thead></thead>";

    for(var i = 0; i < num_rows; i++)
    {
        table_string += "<tr>";
        for(var j = 0; j < num_cols; j++)
        {
            user = (i*num_cols) + j;
            if (user >= window.users.length) break;
            u = window.users[user];
            console.log(u)
            table_string += "<td>";
            table_string += "<img src='scraped_pics/"+u.uid+".jpg'>";
            table_string += "</td>"
        }
        table_string += "</tr>";
    }
    table_string += "</table>";

    var image_width = $('#heart_img')[0].width;
    var image_height = $('#heart_img')[0].height;

    $('#pic_table').width = image_width;
    $('#pic_table').height = image_height;
    $('body').prepend(table_string);

  $(document).click(function(e) {
      var img = $('#heart_img')[0];
      var canvas = $('<canvas/>')[0];
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
      var pixelData = canvas.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;
     console.log(pixelData);
  });
});
