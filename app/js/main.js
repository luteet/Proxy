import sliders from './sliders.js'

const 
	body = document.querySelector('body'),
	html = document.querySelector('html'),
	menu = document.querySelectorAll('.header__burger, .header__nav, body'),
	header = document.querySelector('.header');


// =-=-=-=-=-=-=-=-=-=- <image-aspect-ratio> -=-=-=-=-=-=-=-=-=-=-

const imageAspectRatio = document.querySelectorAll('.image-aspect-ratio, figure');
imageAspectRatio.forEach(imageAspectRatio => {
	if(imageAspectRatio.getAttribute('width') && imageAspectRatio.getAttribute('height'))
		imageAspectRatio.style.setProperty('--aspect-ratio', `${imageAspectRatio.getAttribute("width")}/${imageAspectRatio.getAttribute("height")}`);
	
})

// =-=-=-=-=-=-=-=-=-=- </image-aspect-ratio> -=-=-=-=-=-=-=-=-=-=-



// =-=-=-=-=-=-=-=-=-=-=-=- <click-events> -=-=-=-=-=-=-=-=-=-=-=-=

body.addEventListener('click', function (event) {

	function $(elem) {
		return event.target.closest(elem)
	}


	// =-=-=-=-=-=-=-=-=-=-=-=- <menu-in-header> -=-=-=-=-=-=-=-=-=-=-=-=
	
	if ($('.header__burger')) {
	
		menu.forEach(element => {
			element.classList.toggle('is-mobile-menu-active')
		})
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </menu-in-header> -=-=-=-=-=-=-=-=-=-=-=-=



	// =-=-=-=-=-=-=-=-=-=-=-=- <plans-items> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const plansItemTarget = $(".plans__item_target")
	if(plansItemTarget) {
	
		if(plansItemTarget.classList.contains("is-active")) {
			plansItemTarget.classList.remove("is-active");
		} else {
			plansItemTarget.closest("section").querySelectorAll(".plans__item_target.is-active").forEach(target => target.classList.remove("is-active"));
			plansItemTarget.classList.add("is-active");
		}
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </plans-items> -=-=-=-=-=-=-=-=-=-=-=-=

	
	
	// =-=-=-=-=-=-=-=-=-=-=-=- <faq> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const faqItemTarget = $(".faq__item_target")
	if(faqItemTarget) {
	
		if(faqItemTarget.classList.contains("is-active")) {
			faqItemTarget.classList.remove("is-active");
		} else {
			faqItemTarget.closest("section").querySelectorAll(".faq__item_target.is-active").forEach(target => target.classList.remove("is-active"));
			faqItemTarget.classList.add("is-active");
		}
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </faq> -=-=-=-=-=-=-=-=-=-=-=-=


	// =-=-=-=-=-=-=-=-=-=-=-=- <get-table> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const geoTableItemTarget = $(".geo__table tbody td:first-child");
	if(geoTableItemTarget) {
	
		if(geoTableItemTarget.closest("tr").classList.contains("is-active")) {
			document.querySelectorAll(".geo__table tbody tr.is-active").forEach(tr => tr.classList.remove("is-active"));
		} else {
			document.querySelectorAll(".geo__table tbody tr.is-active").forEach(tr => tr.classList.remove("is-active"));
			geoTableItemTarget.closest("tr").classList.add("is-active")
		}
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </get-table> -=-=-=-=-=-=-=-=-=-=-=-=



	

})

// =-=-=-=-=-=-=-=-=-=-=-=- </click-events> -=-=-=-=-=-=-=-=-=-=-=-=



// =-=-=-=-=-=-=-=-=-=-=-=- <resize> -=-=-=-=-=-=-=-=-=-=-=-=

let windowSize = 0;

function resize() {

	html.style.setProperty("--height-header", header.offsetHeight + "px");
	html.style.setProperty("--static-height-header", header.offsetHeight + "px");
	html.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
	if(windowSize != window.innerWidth) {
		html.style.setProperty("--svh", window.innerHeight * 0.01 + "px");
	}
	
	windowSize = window.innerWidth;
	
}

resize();

window.addEventListener('resize', resize)

// =-=-=-=-=-=-=-=-=-=-=-=- </resize> -=-=-=-=-=-=-=-=-=-=-=-=



// =-=-=-=-=-=-=-=-=-=-=-=- <scroll> -=-=-=-=-=-=-=-=-=-=-=-=

function scrollPage() {
	
	let top = [window.scrollY, false];
	
	//header.classList.add('_loaded');
	
	function scrollPageFunc() {
		top[0] = window.scrollY;
		
		if(top[0] >= 300 && top[1] == false) {

			top[1] = true;
			header.style.setProperty('--opacity', '0');

			setTimeout(function() {
				header.classList.add('is-scroll');
				header.style.setProperty('--opacity', '1');
				html.style.setProperty("--height-header", header.offsetHeight + "px");
			},200);

		} else if(top[0] <= 300 && top[1] == true) {

			top[1] = false;
			header.style.setProperty('--opacity', '0');

			setTimeout(function() {
				header.style.setProperty('--opacity', '1');
				header.classList.remove('is-scroll');
				html.style.setProperty("--height-header", header.offsetHeight + "px");
				
			},200);

		}
	}
	
	scrollPageFunc();
	
	window.addEventListener("scroll", scrollPageFunc);
	
}
	
scrollPage();

// =-=-=-=-=-=-=-=-=-=-=-=- </scroll> -=-=-=-=-=-=-=-=-=-=-=-=



// =-=-=-=-=-=-=-=-=-=-=-=- <slider> -=-=-=-=-=-=-=-=-=-=-=-=

sliders();

// =-=-=-=-=-=-=-=-=-=-=-=- </slider> -=-=-=-=-=-=-=-=-=-=-=-=



Fancybox.bind("[data-fancybox]", {
	
});

