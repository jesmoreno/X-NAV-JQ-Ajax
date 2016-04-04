jQuery(document).ready(function() {
  $("#boton").click(function(){

    $.ajax({
      url: "doc.txt"
    })
    .done(function( data ) {
      $('#text').html(data);
    });

  });
});
