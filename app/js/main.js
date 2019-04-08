
//=include ../components/J_footer/footer.js


// var arrD = [ "ractive2", "ractive3","ractive4"], i = -1;
// setInterval(function(){
//   document.querySelector(".ractive1").className = arrD[i = ++i == arrD.length ? 0 : i];
//     console.log(i);
// }, 2000);


var arrD = [ "ractive1", "ractive2", "ractive3","ractive4"];
var t = cycleClass(document.querySelector('.risky-content'), arrD, 3000);
document.addEventListener('mousedown', function () {
    clearTimeout(t);
});


function cycleClass(element, list, time) {
    var i = -1;
    var c = element.classList;
    for (var n = 0; n < list.length; n++) {
        if (c.contains(list[n])) {
            if (i != -1) c.remove(list[i]);
            i = n;
        }
    }
    return setInterval(function () {
        c.remove(list[i++]);
        c.add(list[i %= list.length]);
    }, time);
}

function revClose() {
	let temper = $('.reviews-content-box');
	for (let i = 0; i < temper.length; i++) {        temper[i].classList.remove('content-plus');    }
}
revClose();
$('.reviews-content').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	revClose();
});
$('.reviews-content-box__cbtn').on('click', function () {
	this.parentElement.parentElement.classList.toggle("content-plus");
});
$('.reviews-content').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	arrows: true,
	responsive: [
	{
		breakpoint: 1024,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		}
	},
	{
		breakpoint: 767,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		}
	},
	{
		breakpoint: 640,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}
]
});

$(document).ready(function(){
	$('a').click( function(){ 
var scroll_el = $(this).attr('href'); 
			if ($(scroll_el).length != 0) { 
		$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); 
			}
		return false; 
	});
});