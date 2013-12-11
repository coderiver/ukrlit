$(document).ready(function() {

	// select

	$(".select__dropdown").hide();

	$(document).click( function(event){
    	$(".select__dropdown").slideUp('fast');
    });

	$(".select").click(function(){
      	$(this).parent().find(".select__dropdown").slideToggle('fast');
      	event.stopPropagation();
    });

	$(".select__dropdown li").on("click", function(event){
		var select = $(this).html();
		var data_attr = $(this).attr('data-attr');
		$(this).parent().parent().find('.select__value').html(select);
		$(this).parent().parent().find('input').val(data_attr);
		$(this).parent().slideUp('fast');
	});

	// scroll-top


	function scroll_top() {
		var width = $(".container").offset().left;
		var top = ($(".container").offset().top - 67);
		var bottom = $(".footer").offset().top;

		function scroll_width () {
			if ($(window).width() > 1060){
				$(".js-scroll-top").css('width', width);
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
    });
	$(window).scroll(function(){
      	scroll_top();
    });

	$(".scroll-top__inner").click(function(){
        $("html, body").animate({ scrollTop: 0 }, 400);
        return false;
    });

});