$(function(){

$(window).on('load' , function(){
    $('.loader').fadeOut(3000)
})
    
   $('body').css('paddingTop' , $('.nav-fixed').innerHeight())
    $(window).scroll(function(){
        let NavScroll = $(window).scrollTop();
        let mainNav = $('nav');

        if(NavScroll > 400){
            mainNav.addClass("nav-fixed");
        
        } else {
            mainNav.removeClass("nav-fixed")
        }

      
// -------------------------slider---------------------------------------------

  
// ***********************about us**************************************************
            // -------------------------counter---------------------------------------------
        

        
        $(function(){

            var aboutoffSetTop = $('.about-us').offset().top - 400
  
            if(NavScroll >= aboutoffSetTop){

                $('.about-text').addClass('ani-head')


                $(".timer").countTo({
                    from: 0,
                    to: 40,
                    speed: 5000,
                    refreshInterval: 400,
                });
       
                    $('.about-text span').removeClass('timer')
            
            }

        })

        // *******************practice animtiom*********************

            $(function(){
             
                let practiceOffsetTop = $('.practice').offset().top
                    if(NavScroll > practiceOffsetTop - 400){
                        $('.practice .head-section').addClass('ani-head') 
                    }

                    if(NavScroll > practiceOffsetTop){
                        $('.practice .practice-box').addClass('animtion-big') 
                    }
            })

        // ******************* our legal*********************
             $(function(){
             
                let ourLagalOffsetTop = $('.our-lagal').offset().top
                    if(NavScroll > ourLagalOffsetTop - 400){
                        $('.our-lagal .head-section').addClass('ani-head') 
                    }

                    if(NavScroll > ourLagalOffsetTop - 100){
                        $('.our-lagal .card').addClass('animtion-md') 
                    }
            })
        // ******************* booking*********************
             $(function(){
             
                let bookingOffsetTop = $('.booking').offset().top
                    if(NavScroll > bookingOffsetTop - 200){
                        $('.booking-title > ').addClass('ani-head') 
                    }   
            })
            
            // *************************explore************************************
            
            $(function(){  
               let exploreOffsetTop = $('.explore').offset().top
                   if(NavScroll > exploreOffsetTop - 400){
                       $('.explore .head-section').addClass('ani-head') 
                   }   
                   if(NavScroll > exploreOffsetTop - 100){
                    $('.explore .case-box').addClass('animtion-big') 
                }
           })

            // *************************testimonial************************************
            
            $(function(){  
               let testimonialOffsetTop = $('.testimonial').offset().top
                   if(NavScroll > testimonialOffsetTop - 400){
                       $('.testimonial .head-section').addClass('ani-head') 
                   }   
                   if(NavScroll > testimonialOffsetTop - 100){
                    $('.testimonial .sec-slider').addClass('animtion-md') 
                }
           })
            // *************************our-blog************************************
            
            $(function(){  
               let ourBlogOffsetTop = $('.our-blog').offset().top
                   if(NavScroll > ourBlogOffsetTop - 400){
                       $('.our-blog .head-section').addClass('ani-head') 
                   }   
                   if(NavScroll > ourBlogOffsetTop - 100){
                    $('.our-blog .our-blog-card').addClass('animtion-md') 
                }
           })
            // *************************subscribe************************************
            
            $(function(){  
               let subscribeOffsetTop = $('.subscribe').offset().top
                   if(NavScroll > subscribeOffsetTop - 400){
                    $('.subscribe .sub-poper').addClass('animtion-md') 
                }

                if(NavScroll > subscribeOffsetTop){
                    $('.subscribe h3').addClass('ani-head') 
                }   
           })
        
            // *************************footer************************************
            
            $(function(){  
               let footerOffsetTop = $('footer').offset().top
                   if(NavScroll > footerOffsetTop - 200){
                    $('footer .scoial').addClass('ani-head') 
                }

           })
        
    })

 
    // $('.practice .practice-box').addClass('animtion-big')

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    
    })

    // **********************poppe image*****************

    $('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
// --------------------------poppe vidoue----------------------------------------------

$(document).ready(function() {
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});

//   ========================================================================
    $('nav .logo-md.display-md-show').click(function(){
        $('nav .list-item').slideToggle();
    })

});
