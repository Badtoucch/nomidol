
//=include ../components/J_footer/footer.js


$(function(){
	loopIt();
});

function loopIt(){    
	$('.risky-content').each(function(i){
		var t=$(this);
		setTimeout(function(){
			t.addClass('ractive3');
				setTimeout(function(){
					t.removeClass('ractive3');
						if(i==$('.risky-content').length-1) loopIt();;
				}, 3000);
		}, 3100*i);
	});
}