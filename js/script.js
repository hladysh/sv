$('#btn-send').click(function(e) {
	e.preventDefault();
	// Please set your email in url field
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
		alert('Thank you for your application soon we will contact you!')
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