
$(window).scroll(function () {
    if (document.documentElement.scrollTop > 50 || document.body.scrollTop > 50) {
        $('.nc_container').css('transition', 'all .5s ease');
        $('.nc_container').css('zIndex', '122');
        $('.nc_container').css('backgroundColor', 'gray')
    }
     else {
        $('.nc_container').css('transition', 'all .5s ease');
        $('.nc_container').css('backgroundColor', 'transparent')
    }
})




// $('.nc_container').css('color', 'red'); 