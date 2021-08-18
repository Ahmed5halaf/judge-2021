$(function(){

    $(window).on('load' , function(){
        $('.loader').fadeOut(400)
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
    
      
                // -------------------------counter---------------------------------------------
            
    
        
    
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
                
    
            
                // *************************footer************************************
                
                $(function(){  
                   let footerOffsetTop = $('footer').offset().top
                       if(NavScroll > footerOffsetTop - 200){
                        $('footer .scoial').addClass('ani-head') 
                    }
    
               })
            
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
    