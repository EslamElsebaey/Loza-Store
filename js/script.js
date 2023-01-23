
$(document).ready(function(){
    // preloader
    setTimeout(function () {
      $(".preloader").css({
        opacity : "0" , 
        visibility : "hidden" , 
      })
    }, 2000);

// main Swiper 
const mainSwiper = new Swiper('.mainBanner .swiper', {
  loop: true,
  autoplay: true,
  draggable: true,
  navigation: {
    nextEl: ' .mainBanner .swiper-button-next',
    prevEl: '.mainBanner .swiper-button-prev',
  },

  pagination: {
    el: '.mainBanner .swiper-pagination',
    clickable: true,
  },
  
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }
});

//  bestseller swiper

const bestsellerSwiper = new Swiper(' .bestseller .swiper', {
  loop: true,
  autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.bestseller .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.bestseller .swiper-button-next ',
    prevEl: '.bestseller .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});


//    special-offers swiper

const specialOffersSwiper = new Swiper(' .special-offers .swiper', {
  loop: true,
  autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.special-offers .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.special-offers .swiper-button-next ',
    prevEl: '.special-offers .swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});



//  new arrivals swiper

const newArrivalSwiper = new Swiper(' .newArrivals .swiper', {
  loop: true,
  autoplay : true , 
  draggable: true,
  
  pagination: {
    el: '.newArrivals .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.newArrivals .swiper-button-next ',
    prevEl: '.newArrivals .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});




// **************************************************************************************************


// open and close nav

let closeBtn = document.querySelector(".closeBtn"); 
let openBtn = document.querySelector(".bars"); 

closeBtn.addEventListener("click" , function(){
  $("nav").removeClass("open-nav");
  $("body").css("overflow" , "visible") ;
})

openBtn.addEventListener("click" , function(){
  $("nav").addClass("open-nav");  
  $("body").css("overflow" , "hidden") ;
})

// **************************************************************************************************



// **************************************************************************************************

// to top button

$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, 500);
}) 


// **************************************************************************************************

//  nested menus in footer


if($(window).width() < 768){
$(".footer-title").click(function(e){
  e.preventDefault() ;
  $(this).next().slideToggle(300) ; 
  $(this).toggleClass("arrow-rotate");
  $(".footer-title").not($(this)).next().slideUp(300);
  $(".footer-title").not($(this)).removeClass("arrow-rotate");
})
}


// **************************************************************************************************



//fixed nav

    //~~~~~~~~~ fixed header
    if($(window).width() < 768){
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 150) {
            $("header").addClass("fixed");
            $(".search").css("display" , "none");
            $(".open-search-btn").css("display" , "block") ;
            $(".open-search-btn i").removeClass("la-times") ;
            $("header").css("box-shadow" , "rgba(0, 0, 0, 0.24) 0px 3px 8px")
        } else {
            $("header").removeClass("fixed");
            $(".search").css("display" , "block");
            $(".open-search-btn").css("display" , "none") ;
            $("header").css("box-shadow" , "none");
        }
      });
      var fixedBar = document.querySelector("header"),
      prevScrollposition = $(window).scrollTop();
        
      (window.onscroll = function () {
        var o = $(window).scrollTop();
        prevScrollposition < o && prevScrollposition > 0 ? fixedBar.classList.add("fixsedt") : fixedBar.classList.remove("fixsedt"), (prevScrollposition = o);
      })   
    }

    


// **************************************************************************************************

// open search 


$(".open-search-btn").click(function(){
  $(".search").slideToggle(300);
  $(this).children().toggleClass("la-times");
})



// **************************************************************************************************


if($(window).width()  < 768 ) {
  $(".account-btn").click(function(){
    $(".account-details").toggleClass("show-account-details");
    $(this).toggleClass("account-btn-color");
  })
}



/************************************************************************ */
 

// nested menus

if($(window).width() <= 768) {  
$(".li-drop").click(function (e) {
  e.preventDefault() ;
  console.log($(this).children())
  $(this).children(".ul-drop").slideToggle(300) ;
  $(this).children(".nav-ancor").toggleClass("nav-arrow-rotate");
  $(".li-drop").not($(this)).children(".ul-drop").slideUp(300);
  })
  $(".li-drop .nav-ancor").removeAttr("href")
}

})


// fire wow


new WOW().init();

// **************************************************************************************************