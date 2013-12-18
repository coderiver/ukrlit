$(document).ready(function() {

	// select

	$(".select__dropdown").hide();

	$(document).click( function(event){
    	$(".select__dropdown").slideUp('fast');
    });

	$(".select").click(function(event){
      	$(this).parent().find(".select__dropdown").slideToggle('fast');
      	event.stopPropagation();
    });

	$(".select__dropdown li").on("click", function(event){
		var select = $(this).html();
		var data_attr = $(this).attr('data-attr');
		$(this).parent().parent().find('.select__value').html(select);
		$(this).parent().parent().find('input').val(data_attr);
		$(this).parent().slideUp('fast');
		if($(this).hasClass('tnr')){
			$('body').removeClass('arial-switch').removeClass('calibri-switch');
			$('body').addClass('tnr-switch');
		}
		if($(this).hasClass('arial')){
			$('body').removeClass('tnr-switch').removeClass('calibri-switch');
			$('body').addClass('arial-switch');
		}
		if($(this).hasClass('calibri')){
			$('body').removeClass('tnr-switch').removeClass('arial-switch');
			$('body').addClass('calibri-switch');
		}
	});

	//switch font-size
	$(".font-size__smallest").click(function(){
		$(".font-size a").removeClass('is-active');
		$(this).addClass('is-active');
		$('.tvir').css('font-size', '10px');
		return false;
	});


	$(".font-size__smaller").click(function(){
		$(".font-size a").removeClass('is-active');
		$(this).addClass('is-active');
		$('.tvir').css('font-size', '12px');
		return false;
	});

	$(".font-size__small").click(function(){
		$(".font-size a").removeClass('is-active');
		$(this).addClass('is-active');
		$('.tvir').css('font-size', '14px');
		return false;
	});

	$(".font-size__normal").click(function(){
		$(".font-size a").removeClass('is-active');
		$(this).addClass('is-active');
		$('.tvir').css('font-size', '16px');
		return false;
	});

	$(".font-size__big").click(function(){
		$(".font-size a").removeClass('is-active');
		$(this).addClass('is-active');
		$('.tvir').css('font-size', '18px');
		return false;
	});

	$(".font-size__bigger").click(function(){
		$(".font-size a").removeClass('is-active');
		$(this).addClass('is-active');
		$('.tvir').css('font-size', '20px');
		return false;
	});
	
	$(".font-size__biggest").click(function(){
		$(".font-size a").removeClass('is-active');
		$(this).addClass('is-active');
		$('.tvir').css('font-size', '22px');
		return false;
	});

	// container transform
	function container_resize(){
		if ($(window).width() <= 1177){
			$(".container").css('margin-left', 100);
			if ($(window).width() <= 1060){
				$(".container").css('margin-left', 39);
			}
		}
		else{
			$(".container").css('margin-left', 'auto');
		}
		
	}
	container_resize();


	// scroll-top

	function scroll_top() {
		var width = $(".container").offset().left;
		var top = ($(".container").offset().top - 67);
		var bottom = $(".footer").offset().top;

		function scroll_width () {
			if ($(window).width() > 1060){
				$(".js-scroll-top").css('width', width);
				$(".scroll-top__bg").css('width', 100);
			}
			else{
				$(".js-scroll-top").css('width', 39);
				$(".scroll-top__bg").css('width', 39);

			}
		}
		scroll_width();

		function scroll_show () {
			if($(window).scrollTop() >= top){
				$(".scroll-top").addClass('is-active');
			}
			else {
				$(".scroll-top").removeClass('is-active');
			}
		}
		scroll_show();
	}
	
	scroll_top();

	$(window).resize(function(){
      	scroll_top();
      	container_resize();
    });
	$(window).scroll(function(){
      	scroll_top();
      	container_resize();
    });

	$(".scroll-top__inner").click(function(){
        $("html, body").animate({ scrollTop: 0 }, 400);
        return false;
    });

});