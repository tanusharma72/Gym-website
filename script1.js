
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
	navbar.classList.toggle('active');

}
window.onscroll = () => {

	navbar.classlist.remove('active');
}

var swiper = new Swiper(".mySwiper", {
	cssMode: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
	},
	mousewheel: true,
	keyboard: true,
});

