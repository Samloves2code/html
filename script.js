function myfunction(){


	var x = 1024; //min value
	var y = 9999; // max value

	var deg = Math.floor(Math.random() * (x - y)) + y;

	document.getElementById('box').style.transform = "rotate("+deg+"deg)";

	var element = document.getElementById('mainbox');
	element.classList.remove('animate');
	setTimeout(function(){
		element.classList.add('animate');
	}, 7000); //5000 = 5 second
	
	alert("Will spin when you press 'OK' / If you no longer want this to appear please: Turn pop-ups on or off / On your computer, open Chrome. / At the top right, click More More and then Settings. / Under Privacy and security, click Site settings. / Click Pop-ups and redirects.");
}
