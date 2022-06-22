const countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();

const time = setInterval(() => {
	// *Get today's date and time
	const now = new Date().getTime();

	// *Find the distance between now and the count down date
	const distance = countDownDate - now;

	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element
	let offer = document.getElementById("offer");
	offer.innerHTML =
		days + "d  " + hours + "h  " + minutes + "m  " + seconds + "s  ";
	// If the count down is over, write some text
	if (distance < 0) {
		clearInterval(time);
		document.getElementById("offer").innerHTML = "Offer EXPIRED";
	}
}, 1000);
