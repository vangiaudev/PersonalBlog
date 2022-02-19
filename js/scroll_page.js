$(document).ready(function() {
	$(window).scroll(function() {
		var pos_body = $('html,body').scrollTop();
        if(pos_body > 500){
            $('.line-miss').addClass('line-miss-scroll');
        }
    });
    $('.back-to-top').click(function(){
        $('html,body').animate({scrollTop:0}, 1400);
    });
    $('.scroll-home').click(function(){
        $('html,body').animate({scrollTop:0}, 1400);
        $('.menu-list').removeClass('active');
        $('.menu-btn').removeClass('hide')
        $('.resume').removeClass('hide');
    });
    $('.scroll-about-me').click(function(){
        $('html,body').animate({scrollTop:900}, 1400);
        $('.menu-list').removeClass('active');
        $('.menu-btn').removeClass('hide')
        $('.resume').removeClass('hide');
    });
    $('.scroll-contact').click(function(){
        $('html,body').animate({scrollTop:3300}, 1400);
        $('.menu-list').removeClass('active');
        $('.menu-btn').removeClass('hide')
        $('.resume').removeClass('hide');
    });
    $('.menu-btn').click(function(){
        $('.menu-list').addClass('active');
        $('.menu-btn').addClass('hide');
        $('.resume').addClass('hide');
    })
    $('.cancel-btn').click(function(){
        $('.menu-list').removeClass('active');
        $('.menu-btn').removeClass('hide')
        $('.resume').removeClass('hide');
    })
});


window.addEventListener("scroll", ()=>{
    var header = document.querySelector("header")
    var logo = document.querySelector("header a img")
    var menu = header.getElementsByTagName("li")

    header.classList.toggle("sticky", window.scrollY > 0)
    for (let i = 0; i < menu.length; i++) {
        menu[i].classList.toggle("color-text-menu", window.scrollY > 0)
    }
    if(window.scrollY > 0){
        logo.src = "https://vangiaurecca.github.io/PersonalBlog/img/logo_transparent.png"
    }
    else{
        logo.src = "../img/logo_name_blog.png"
    }
})
