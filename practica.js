jQuery(document).ready(function() {
  $("#boton").click(function(){

    $.ajax({
      url: "doc.txt",
      cache: false
    })
    .done(function( data ) {
      $('#text').html(data);
    });

  });
});
