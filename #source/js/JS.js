alert("dfsdfsdfsd");
function ibg(){
 	let ibg = document.querySelectorAll(".ibg");
 	for (var i = 0;i<ibg.length; i++) {
 		if (ibg[i].querySelector("img")&& ibg[i].querySelector("img").getAttribute("src")!=null) {
 			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector("img").getAttribute("src")+')';
 		}
 	}//$.each($('.ibg'), function(index, val) {
//if($(this).find('img').length>0){
//$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
	}
ibg();
//---<Бургер меню>--------------------------
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.for__burger').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
