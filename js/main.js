var table_string = "<div id='pic_table'>";

$(function() {
    var total_users = window.users.length;

    for(var i = 0; i < total_users + 40; i++)
    {
        user = i;
        if(user >= total_users){
          user = Math.floor((Math.random()*100));
        }
        u = window.users[user];
        console.log(u)
        printImage(u.uid);
    }

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