$('#btn-send').click(function(e) {
	e.preventDefault();
	$.ajax({
		url: "https://formspree.io/hladysh.im@gmail.com",
		method: "POST",
		data: {
			name: names.value,
			email: email.value,
			message: message.value
		},
		dataType: "json"
	}).done(function() {
		alert("Thanks, I'll write to you!")
		$('input').val('');
		$('textarea').val('');
	});
	
});

$(function() {
	$('.js-nav a, .js-connect, .navbar-brand').click(function(e) {
		e.preventDefault();
		$('body, html').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 750);
	});
});