export default function sliders() {
	document.querySelectorAll('.pricing__slider').forEach(sliderElement => {
	
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
	
	})
}