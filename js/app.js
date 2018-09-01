$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll>700){
    	$('.navbar').css("background-color", "#002A52")
    }else{
    	$('.navbar').css("background-color", "")
    }
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS('particles-js', 'js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

