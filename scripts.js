<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="<%=request.getContextPath()%>/js/jquery-2.1.3.js"></script>
<script src="<%=request.getContextPath()%>/js/default.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" integrity="sha256-IFHWFEbU2/+wNycDECKgjIRSirRNIDp2acEB5fvdVRU=" crossorigin="anonymous"></script>
$(function() {
  
  // sizeSections sets the height of each section element to the viewport
  // height unless the content height is larger than the the viewport
  // requires the inner content to be wrapped in a .content div
  var sizeSections = function() {
    var viewHeight = $(window).height();
    $("section").each(function(){
      var naturalHeight = $(this).find(".content").outerHeight();
      if ( naturalHeight > viewHeight) {
        $(this).css("height", "auto");
      } else {
        $(this).css("height", viewHeight + "px");
      }
    });
  }

  // call sizeSections on load
  sizeSections();
  // attach smoothScroll jQuery plugin to indicated links
  $('.navbar a').smoothScroll();
  
  // call sizeSections whenever the window is resized
  $(window).resize(function() {
    sizeSections();
  });
  
});