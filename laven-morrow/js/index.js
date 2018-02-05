$(function() {
	$('#ship1').on('click', function() {
		if (Cookies.get('cook') == undefined) {
			Cookies.set('cook', 0)
		}
		Cookies.set('cook', parseInt(Cookies.get('cook')) + 1);
		$('#ship1 h1').text(Cookies.get('cook'));
		$('#boom1').animate({opacity: '1'});
		$('#boom1').animate({opacity: '0'}, 1300);
		$('#ship1death').animate({opacity: '1'});
		$('#ship1death').animate({opacity: '0'}, 300);
		$('#laserSound')[0].play();
	})

	$('#ship2').on('click', function() {
		if (Cookies.get('make') == undefined) {
			Cookies.set('make', 0)
		}
		Cookies.set('make', parseInt(Cookies.get('make')) + 1);
		$('#ship2 h1').text(Cookies.get('make'));
		$('#boom2').animate({opacity: '1'});
		$('#boom2').animate({opacity: '0'}, 1300);
		$('#ship2death').animate({opacity: '1'});
		$('#ship2death').animate({opacity: '0'}, 300);
		$('#laserSound')[0].play();
	})

	$('#ship3').on('click', function() {
		if (Cookies.get('this') == undefined) {
			Cookies.set('this', 0)
		}
		Cookies.set('this', parseInt(Cookies.get('this')) + 1);
		$('#ship3 h1').text(Cookies.get('this'));
		$('#boom3').animate({opacity: '1'});
		$('#boom3').animate({opacity: '0'}, 1300);
		$('#ship3death').animate({opacity: '1'});
		$('#ship3death').animate({opacity: '0'}, 300);
		$('#laserSound')[0].play();
	})

	$('#clearClick').on('click', function() {
		Cookies.set('cook', 0);
		Cookies.set('make', 0);
		Cookies.set('this', 0);
		$('#ship1 h1').text(0);
		$('#ship2 h1').text(0);
		$('#ship3 h1').text(0);
		$('#revenge1').animate({opacity: '1'});
		$('#revenge1').animate({opacity: '0'}, 300);
		$('#revenge2').animate({opacity: '1'});
		$('#revenge2').animate({opacity: '0'}, 300);
		$('#revenge3').animate({opacity: '1'});
		$('#revenge3').animate({opacity: '0'}, 300);
		$('#monsterBoom').animate({opacity: '1'});
		$('#monsterBoom').animate({opacity: '0'}, 1300);
		$('#laserSound')[0].play();
	})
})