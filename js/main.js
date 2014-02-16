$(function() {
        var num_rows = 26;
        var num_cols = 26;
        var table_string = "<table id='pic_table'><thead></thead>";

        for(var i = 0; i < num_rows; i++)
        {
            table_string += "<tr>";
            for(var j = 0; j < num_cols; j++)
            {
                table_string += "<td>";
                table_string += " IMG ";
                table_string += "</td>"
            }
            table_string += "</tr>";
        }
        table_string += "</table>";
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
