$(document).ready(function() {
    // Get the modal
    var modal = $("#imageModal");

    // Get the image and insert it inside the modal
    $("#image1").click(function() {
      modal.css("display", "block");
    });

    // Get the <span> element that closes the modal
    var span = $(".close");

    // When the user clicks on <span> (x), close the modal
    span.click(function() {
      modal.css("display", "none");
    });

    // When the user clicks anywhere outside of the modal, close it
    $(window).click(function(event) {
      if (event.target == modal[0]) {
        modal.css("display", "none");
      }
    });
  });