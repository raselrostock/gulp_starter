$( '#myAnchor' ).click(function(event) {
    event.preventDefault();
	alert("hello");
    var target = "#myAnchor" + $(this).data('target');
    jQuery('html, body').animate({
       // scrollTop: $(target).offset().top
	    scrollTop:2000
    }, 1000);
});