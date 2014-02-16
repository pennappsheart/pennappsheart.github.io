var table_string = "<div id='pic_table'>";

$(function() {
    var num_rows = 26;
    var num_cols = 26;
    var need_extra = false;
    var total_users = window.users.length;

    for(var i = 0; i < num_rows; i++)
    {
//        table_string += "<tr>";
        for(var j = 0; j < num_cols; j++)
        {
            user = (i*num_cols) + j;
            if (user >= total_users){
              //need to fill our matrix with extra values to make it squared
              need_extra = true;
              break;
            }
            u = window.users[user];
            console.log(u)
            printImage(u.uid);
        }
  //      table_string += "</tr>";
    }

    if(need_extra){
        var copy;
        var index=0;

        for(copy = (i*num_cols) + j; copy<total_users; copy++){
            index = Math.floor((Math.random()*num_cols)+1);
            u = window.users[index];
            console.log(u);
            printImage(u.uid);
        }
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


function printImage(id){
  table_string += "<div class='crop'>";
  table_string += "<img class='tint' src='scraped_pics/"+id+".jpg'>";
  table_string += "</div>"
}