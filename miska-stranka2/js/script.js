//-------------TOTO JE KOD ROBENY POMOCOU JQUERY-----------
//tu si do premennej nt dame link ktory je akurat aktivny
var nt2 = document.querySelectorAll("a.act");

$(document).ready(function(){
	$('.vysuvacieMenu').click(function(){
		$('.divko ul').toggle();
	});
});

$(document).ready(function(){
	$('ul li a').mousemove(function(){
		$('li a').removeClass("act");
	});
});

$(document).ready(function(){
	$('ul li a').mouseout(function(){
		$(nt2).addClass("act");
	});
});

function tlac(){
	window.print();
}