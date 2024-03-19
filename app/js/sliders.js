export default function sliders() {

	/* document.querySelectorAll('.pricing__slider').forEach(sliderElement => {
	
		const slider = new Splide(sliderElement, {
	
			perPage: 4,
			perMove:1,
			
			speed: 700,

			gap: "1.3125rem",

			arrows: false,
			pagination: false,
	
			breakpoints: {
				992: {
					perPage: 2,
				},

				768: {
					gap: "1rem",
					perPage: 1,
				},
			}
	
		});
	
		slider.mount();
	
	}) */

	document.querySelectorAll('.reviews__slider').forEach(sliderElement => {
	
		const slider = new Splide(sliderElement, {
	
			type: "loop",
			autoWidth: true,
			//pagination: false,
			speed: 700,
			easing: "ease",
			gap: "1.5625rem",
			updateOnMove: true,
			padding: {
				left: "4rem",
				right: "0rem",
				top: "4rem",
				bottom: "4rem",
			},

			grid: false,
	
			breakpoints: {
				992: {
					autoWidth: false,
					perPage: 1,
					padding: false,
					grid: {
						rows: 2,
						cols: 1,
						gap : {
							row: '1.0625rem',
							col: '1rem',
						},
				  	},
				},
	
				550: {
					// params
				}
			}
	
		});
	
		slider.mount(window.splide.Extensions);
	
	})

	document.querySelectorAll('.news__slider').forEach(sliderElement => {
	
		const slider = new Splide(sliderElement, {
	
			type: "loop",
			perPage: 4,
			perMove: 1,
			gap: 20,
			speed: 700,
			easing: "ease",
			pagination: false,
	
			breakpoints: {
				992: {
					perPage: 2,
				},
	
				550: {
					perPage: 1,
					speed: 500,
					//easing: "cubic-bezier(0.25, 1, 0.5, 1)",
				}
			}
	
		});
	
		slider.mount();
	
	})

}