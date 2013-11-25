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
		var select = $(this).text();
		var data_attr = $(this).attr('data-attr');
		$(this).parents('.l-select').find('.select__value').text(select);
		$(this).parents('.l-select').find('input').val(data_attr);
		$(this).parent().slideUp('fast');
	});



});