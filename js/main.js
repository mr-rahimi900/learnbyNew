
$(document).ready(function () {
	var cnt = 0;
	$("#specificid .item").each(function(e){
		//debugger;
		var time = (new Date().getTime() / 1000) + (86400 * 2) + cnt;
		var item = $(this);
		var flipdownItem = $(item).find(".flipdown");
		if(flipdownItem && flipdownItem.length > 0){
			let id = $(flipdownItem).attr("id");
			initilFlipBanners(id,time);	
		}
		
		cnt++;
	});
    $('.list-menu-vertical li').click(function(){
    $('.list-menu-vertical li').removeClass('active');
    $(this).toggleClass('active');
	
	//debugger;
	
});

$('.menu-vertical-left>ul>li span').click(function(){
    $('.menu-vertical-left>ul>li').removeClass('active');
    $(this).parents('li').toggleClass('active');
    $('.menu-vertical-left>ul>li>a').css('margin-top','0px');
    $(this).parents('a').css('margin-top','30px');
});

$(".btn-show-side.right").click(function () {
    let asidePartR = $(this).parents("nav").siblings(".sidebar-right.aside-mobile");
    // $(this).parents(".overlay").show(200);
    asidePartR.toggleClass("active");
  });

$(".btn-show-side.left").click(function () {
    let asidePartL = $(this).parents("nav").siblings(".sidebar-left.aside-mobile");
    asidePartL.toggleClass("active");
  });

  $(".close-btn").click(function () {
    $(this).parents(".aside-mobile").removeClass("active");
    // $(this).parents(".overlay").fadeOut();
  });

$('.menu-vertical-left.fix-left >ul>li figure').click(
    function(){
        $('.menu-vertical-left.fix-left >ul>li').removeClass('active-one');
        $(this).parents('li').toggleClass('active-one');
});
$('.menu-vertical-left.fix-left >ul>li span').click(function(){
    $('menu-vertical-left.fix-left >ul>li').removeClass('active');
    $(this).parents('li').toggleClass('active');
    $('menu-vertical-left.fix-left >ul>li>a').css('margin-top','0px');
    $(this).parents('a').css('margin-top','30px');
});

})


$('.owl-main-banner').owlCarousel({
    rtl: true,
    loop:false,
	rewind: true,
    margin: 5,
    nav: false,
    dots:false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1200:{
          items:1
      }
  }
})
$('.owl-course-cate').owlCarousel({
    rtl: true,
    loop:true,
    margin: 10,
    nav: false,
    dots:false,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
  responsive:{
      0:{
          items:1
      },
      430:{
          items:2
      },
      600:{
          items:3
      },
      870:{
          items:4
      },
      993:{
          items:3
      },
      1200:{
          items:4
      }
    
  }
})

$('.owl-course-master').owlCarousel({
    rtl: true,
    loop:true,
    margin: 10,
    nav: false,
    dots:false,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
  responsive:{
      0:{
          items:1,
      },
      320:{
          items:2
      },
      480:{
          items:3
      },
      640:{
          items:4
      },
      768:{
          items:4
      },
      820:{
        items:5
    },
    992:{
        items:4
    },
      1200:{
          items:5
      },
      1500:{
          items:6
      }
  }
});
  
  function initilFlipBanners(id,time){
	  //debugger;
	// Unix timestamp (in seconds) to count down to
	//(new Date().getTime() / 1000) + (86400 * 2) + 1;

	// Set up FlipDown
	var flipdown = new FlipDown(time,id);

	  // Start the countdown
	  flipdown.start();

	  // Do something when the countdown ends
	  flipdown.ifEnded(() => {
		console.log('The countdown has ended!');
	  });

	//   flipdown.element.setAttribute('id', 'sdasd')
	console.log(flipdown);
	  
  }