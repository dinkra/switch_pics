$(document).ready(function() {
   $('#img_list').on('click', '.small_img', function() {
	   var $src = $(this).attr('src');
       $('#big_img').attr('src', $src);
   });
   var $str = 7;
   $('#button').click(function() {
	   $str++;
       $('#item_button').before("<li><img class='small_img' src='http://lorempixel.com/600/400/city/" + $str + "'/></li>");
   });
   var $last_src = $('#last_img').attr('src'); 
   $last_src =+ 1;
});

