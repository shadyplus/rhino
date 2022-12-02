// дата
let date = new Date(),
	day = date.getDate(),
	month = date.getMonth(),
	monthsArr = [
		'01',
		'02',
		'03',
		'04',
		'05',
		'06',
		'07',
		'08',
		'09',
		'10',
		'11',
		'12',
	],
	dYear = date.getFullYear();

if (day < 10) day = '0' + day;

function todayDDMMYY() {
	let span = document.querySelectorAll('[class*="date-today--"]');

	span.forEach((item) => {
		let newDay = item.className.split('--')[1];

		newDate = new Date(date - newDay * 24 * 60 * 60 * 1000);
		day = newDate.getDate();
		month = newDate.getMonth();

		if (day < 10) day = '0' + day;
		item.textContent = `${day}.${monthsArr[month]}.${dYear}.`;
	});
}

todayDDMMYY();

function year() {
	let span = document.querySelectorAll('.date-year');

	span.forEach((item) => {
		item.textContent = `${dYear}`;
	});
}

year();
var resultWrapper = document.querySelector('.spin-result-wrapper'),
	wheel = document.querySelector('.wheel-img');

function spin() {
	wheel.classList.contains('rotated') ||
		(wheel.classList.add('super-rotation'),
		setTimeout(function () {
			resultWrapper.style.display = 'block';
		}, 8e3),
		setTimeout(function () {
			$('.spin-wrapper').slideUp(), $('.order_block').slideDown(), start_timer();
		}, 1e4),
		wheel.classList.add('rotated'));
}

var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
	e.preventDefault(), $('.spin-result-wrapper').fadeOut();
});
var intr,
	time = 600;

function start_timer() {
	intr = setInterval(tick, 1e3);
}

function tick() {
	time -= 1;
	var e = Math.floor(time / 60),
		t = time - 60 * e;
	0 == e && 0 == t && clearInterval(intr),
		(t = t >= 10 ? t : '0' + t),
		(e = e >= 10 ? e : '0' + e),
		$('#min').html(e),
		$('#sec').html(t);
}