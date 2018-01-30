$(function (){
	if (Cookies.get('lemonCount') === undefined) {
		Cookies.set('lemonCount', 0);
	}//if

	if (Cookies.get('chipCount') === undefined) {
		Cookies.set('chipCount', 0);
	}//if

	if (Cookies.get('sugarCount') === undefined) {
		Cookies.set('sugarCount', 0);
	}//if
	function setCounter(id,key) {
		$(id).html(Cookies.get(key));
	}//setCounter
	setCounter('#lemonCounter','lemonCount');
	$('#lemon').on('click', function () {
		let lemonCount = parseInt(Cookies.get('lemonCount'));
		Cookies.set('lemonCount', lemonCount +1);
		setCounter('#lemonCounter','lemonCount');
	});

	$('#lemonTrash').on('click', function () {
		let lemonCount = parseInt(Cookies.get('lemonCount'));
		Cookies.set('lemonCount', lemonCount - 1);
		setCounter('#lemonCounter','lemonCount');
	});

	setCounter('#chipCounter','chipCount');
	$('#chip').on('click', function () {
		let chipCount = parseInt(Cookies.get('chipCount'));
		Cookies.set('chipCount', chipCount +1);
		setCounter('#chipCounter','chipCount');
	});

	$('#chipTrash').on('click', function () {
		let chipCount = parseInt(Cookies.get('chipCount'));
		Cookies.set('chipCount', chipCount -1);
		setCounter('#chipCounter','chipCount');
	});

	setCounter('#sugarCounter','sugarCount');
	$('#sugar').on('click', function () {
		let sugarCount = parseInt(Cookies.get('sugarCount'));
		Cookies.set('sugarCount', sugarCount +1);
		setCounter('#sugarCounter','sugarCount');
	});

	$('#sugarTrash').on('click', function () {
		let sugarSubtract = parseInt(Cookies.get('sugarCount'));
		Cookies.set('sugarCount', sugarSubtract -1);
		setCounter('#sugarCounter','sugarCount');
	});
























});