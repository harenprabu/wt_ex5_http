jQuery(function($) {
    var stickyWrapperOffsetTop = $(".sticky-wrapper").offset().top + 10; //first here we find  top  hight

    $(window).scroll(function(){        
        var windowScrollTop = $(window).scrollTop();//here  we use scroll top
        if ( windowScrollTop >= stickyWrapperOffsetTop ) //then  we are  comparing with it 
        {
            $(".sticky-wrapper").addClass("sticky"); //we adding the  sticky class(written css)
        }
        else {
            $(".sticky-wrapper").removeClass("sticky");
        }
    });
});

//Get the button:
