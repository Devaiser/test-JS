window.addEventListener('DOMContentLoaded', function () {

	'use strict';

	let
		tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function (e) {
		let target = e.target;

		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});

	//Timer

	let deadline = '2020-05-12';

	function getTimeRemaining(endTime) {
		let
			t = Date.parse(endTime) - Date.parse(new Date()),
			seconds = Math.floor((t / 1000) % 60);
		if (seconds < 10) {
			seconds = '0' + seconds;
		}
		let
			minutes = Math.floor((t / 1000 / 60) % 60);
		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		let
			hours = Math.floor((t / (1000 * 60 * 60)));
		if (hours < 10) {
			hours = '0' + hours;
		}
		// hours = Math.floor((t / 1000 / 60 / 60) % 24),
		// days = Math.floor((t/(1000 * 60 * 60 * 24)));

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function setClock(id, endTime) {
		let
			timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimeRemaining(endTime);
			hours.textContent = t.hours;
			minutes.textContent = t.minutes;
			seconds.textContent = t.seconds;

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setClock('timer', deadline);

	// Modal

	let
		more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');

	more.addEventListener('click', function () {
		overlay.style.display = 'block';
		this.classList.add('more-splash');
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', function () {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	let
		generalInfo = document.querySelector('.info');

	generalInfo.addEventListener('click', function (e) {
		if (e.target && e.target.matches('.description-btn')) {
			overlay.style.display = 'block';
			this.classList.add('more-splash');
			document.body.style.overflow = 'hidden';
		}
	});

});