
$(document).ready(function (){
	$('.wrapper').addClass('loaded');

// Для меню бургер
	$('.icon-menu').click(function(event) {
		$(this).toggleClass('active');
		$('.menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});

});



// применяется для фулскриновой заставки, начальной страницы, с картинкой (применяет дополнительный
// стиль к ibg), картинку теперь можно менять в html
function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();

