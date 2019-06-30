
$(function(){
	var ht=$(window).height();
	$("#cover").height(ht);
	
	$(window).on("resize", function(){
		var ht=$(window).height();
		$("#cover").height(ht);
	});
	
	$('#header .nav li span').css('opacity','0');
	$('#header .nav li').hover(function(){
		$(this).find('span').css('opacity','1');
	},function(){
		$(this).find('span').css('opacity','0');
	});
});	

$(function(){
	$('.type').typed({
		strings:["Sungmin's <br/> Portfolio"],
		typeSpeed:100,
		backDelay:200,
		loop:true //무한, 마지막에 컴마 세미콜론 X
		});
});

$(window).scroll(function(){
	var scr=$(window).scrollTop();
	var hello=$('.box').offset();
	if(scr>=hello.top-150 && scr<=300){
		$('#header').stop().animate({'top':'-400px'},1000);
	}
});	


		
$(window).scroll(function(){
	var scr1=$(window).scrollTop();
	var hello1=$('.box').offset();
	var hello2=$('#contents').offset();
	if( scr1>=hello1.top && scr1<=hello2.top){
		$('#header').stop().animate({'top':'0px'},1000);
	}
});	

$(function(){
	$('.hidden01').hover(function(){
		var ah=$(this).find('a').innerHeight();
		var img=$(this).find('img');
		var imgh=$(this).find('img').innerHeight()-884; //높이만큼 빼기
		
		img.stop().animate({top:ah-imgh},6000);
	},function(){
		var ah=$(this).find('a').innerHeight();
		var img=$(this).find('img');
		img.stop().animate({top:0},5000);
	});
	
	$('.ability ul.ability_txt li:eq(0)').click(function(){
		$('.ability_co .about').css({'display':'block'});
		$('.ability_co .license').css({'display':'none'});
		$('.ability_co .skill_wrap').css({'display':'none'});
		$('ul.slick span:eq(0)').addClass('on_slick');
		$('ul.slick span:eq(1)').removeClass('on_slick');
		$('ul.slick span:eq(2)').removeClass('on_slick');
		$('.ability ul.ability_txt li:eq(0)').addClass('on');
		$('.ability ul.ability_txt li:eq(1)').removeClass('on');
		$('.ability ul.ability_txt li:eq(2)').removeClass('on');
		return false;
	});
	
	$('.ability ul.ability_txt li:eq(1)').click(function(){
		$('.ability_co .license').css({'display':'block'});
		$('.ability_co .skill_wrap').css({'display':'none'});
		$('.ability_co .about').css({'display':'none'});
		$('ul.slick span:eq(1)').addClass('on_slick');
		$('ul.slick span:eq(0)').removeClass('on_slick');
		$('ul.slick span:eq(2)').removeClass('on_slick');
		$('.ability ul.ability_txt li:eq(1)').addClass('on');
		$('.ability ul.ability_txt li:eq(0)').removeClass('on');
		$('.ability ul.ability_txt li:eq(2)').removeClass('on');
		return false;
	});
	
	$('.ability ul.ability_txt li:eq(2)').click(function(){
		$('.ability_co .skill_wrap').css({'display':'block'});
		$('.ability_co .license').css({'display':'none'});
		$('.ability_co .about').css({'display':'none'});
		$('ul.slick span:eq(2)').addClass('on_slick');
		$('ul.slick span:eq(0)').removeClass('on_slick');
		$('ul.slick span:eq(1)').removeClass('on_slick');
		$('.ability ul.ability_txt li:eq(2)').addClass('on');
		$('.ability ul.ability_txt li:eq(0)').removeClass('on');
		$('.ability ul.ability_txt li:eq(1)').removeClass('on');
		return false;
	});
});	
	
	$(window).on('scroll',$.throttle(1000/15,function(){
		var sct = $(window).scrollTop();
		var $content = $('.skill_wrap');
		var $charts = $content.find('.skill');

			/* if(sct >= 600 && sct <= 1200){
				activatePercent();
			}else{
				zeroPercent();
			}; */
	$('.ability ul.ability_txt li:eq(2)').click(function(){
		activatePercent();
	});
		function activatePercent(){

			if($content.hasClass('active') == false){
				$charts.each(function(i){
					var $chart = $(this);
					var $chartBar = $chart.find('.skill_g')
						.css({width:'0%'});
					var $percentNumber = $chart.find('.skill_p .num');
					var percentData = $percentNumber.text();
					$percentNumber.text(0);
					$({percent:0}).delay(150*i).animate({percent:percentData},{
						duration: 1000,
						progress: function(){
							var now = this.percent;

							$chartBar.css({width:now+'%'});
							$percentNumber.text(Math.floor(now));
						}
					});
				});
			};
			$content.removeClass('unactive');
			$content.addClass('active');
		};

		function zeroPercent(){

			if($content.hasClass('unactive') == false){
				$charts.each(function(){
					var $chart = $(this);
					var $chartBar = $chart.find('.skill_g')
						.css({width:'0%'});
					var $percentNumber = $chart.find('.skill_p .num');

					 $percentNumber.text(0); 
				});
			};
			$content.removeClass('active');
			$content.addClass('unactive');
		};
	}));
	
$(function(){
	$('.css_page_left .viewSite').hover(function(){
		$('span.hover_down').stop().animate({'top':'5px'},300);
	}, function(){
		$('span.hover_down').stop().animate({'top':'0px'},300);
	});
	
	$('.css_page_txt .viewSite').hover(function(){
		$('span.hover_down').stop().animate({'top':'5px'},300);
	}, function(){
		$('span.hover_down').stop().animate({'top':'0px'},300);
	});
});

$(function(){
	$(window).scroll(function(){
	var scr1=$(window).scrollTop();
	var footoff=$('#footer').offset();
	
	if( scr1>=footoff.top-700){
		$('#footer').css('position','fixed');
	}
});

});

$(function(){
	$('#header h1').click(function(){
		$('html,body').animate({ scrollTop : $('#wrap').offset().top-0},800);
		return false;
	});
	$('#header ul li:eq(0)').click(function(){
		$('html,body').animate({ scrollTop : $('.about_wrap').offset().top-150},800);
	});
	$('#header ul li:eq(1)').click(function(){
		$('html,body').animate({ scrollTop : $('.project_1').offset().top-100},800);
	});
	$('#header ul li:eq(2)').click(function(){
		$('html,body').animate({ scrollTop : $('.project_2').offset().top-100},800);
	});
	$('#header ul li:eq(3)').click(function(){
		$('html,body').animate({ scrollTop : $('.project_3').offset().top-100},800);
	});
	$('#header ul li:eq(4)').click(function(){
		$('html,body').animate({ scrollTop : $('.project_4').offset().top-100},800);
	});
	$('#header ul li:eq(5)').click(function(){
		$('html,body').animate({ scrollTop : $('.project_5').offset().top-100},800);
	});
	$('#header ul li:eq(6)').click(function(){
		$('html,body').animate({ scrollTop : $('.project_6').offset().top-100},800);
	});
	$('#btn05').click(function(){
		$('html,body').animate({ scrollTop : $('#jquery').offset().top-0},800);
	});
	$('#btn06').click(function(){
		$('html,body').animate({ scrollTop : $('#adaptive').offset().top-0},800);
	});
	$('#btn07').click(function(){
		$('html,body').animate({ scrollTop : $('#mobile').offset().top-0},800);
	});
	$('#btn08').click(function(){
		$('html,body').animate({ scrollTop : $('#footer').offset().top-0},800);
	});
});