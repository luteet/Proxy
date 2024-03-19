
// =-=-=-=-=-=-=-=-=-=-=-=- <custom-select> -=-=-=-=-=-=-=-=-=-=-=-=

document.querySelectorAll(".custom_select").forEach(customSelect => {

	const placeholder = customSelect.dataset.placeholder, allSelectTarget = customSelect.parentElement.querySelector(".custom_select__all");

	const select = new SlimSelect({
		select: customSelect,
		settings: {
			showSearch: false,
			allowDeselect: customSelect.hasAttribute("multiple") ? true : false,
			closeOnSelect: customSelect.hasAttribute("multiple") ? false : true,

			placeholderText: placeholder ? placeholder : 'Select value',
		},
		events: {
			afterChange: () => {
				if(allSelectTarget) {
					if(select.getSelected().length >= 1) {
						allSelectTarget.classList.add("is-selected");
					} else {
						allSelectTarget.classList.remove("is-selected");
					}
				}
			}
		}
	})

	if(allSelectTarget) {
		let dataArray = [];
		select.store.data.map(param => dataArray.push(param.value));

		allSelectTarget.addEventListener("click", () => select.setSelected(dataArray))
	}
	
	//console.log(select.store.data)
})

// =-=-=-=-=-=-=-=-=-=-=-=- </custom-select> -=-=-=-=-=-=-=-=-=-=-=-=



// =-=-=-=-=-=-=-=-=-=-=-=- <click-events> -=-=-=-=-=-=-=-=-=-=-=-=

document.body.addEventListener('click', function (event) {

	function $(elem) {
		return event.target.closest(elem)
	}
	
	
	// =-=-=-=-=-=-=-=-=-=-=-=- <faq> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const faqItemTarget = $(".account_faq_item__target")
	if(faqItemTarget) {
	
		if(faqItemTarget.classList.contains("is-active")) {
			faqItemTarget.classList.remove("is-active");
		} else {
			faqItemTarget.closest(".account_faq").querySelectorAll(".account_faq_item__target.is-active").forEach(target => target.classList.remove("is-active"));
			faqItemTarget.classList.add("is-active");
		}
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </faq> -=-=-=-=-=-=-=-=-=-=-=-=


	// =-=-=-=-=-=-=-=-=-=-=-=- <tabs> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const tabsNavLink = $(".tabs_nav a")
	if(tabsNavLink) {
	
		event.preventDefault();

		const wrapper = tabsNavLink.closest(".tabs_wrapper");
		if(!wrapper.classList.contains("is-working") && tabsNavLink.getAttribute("href") !== "#" && !tabsNavLink.classList.contains("is-active")) {
			wrapper.classList.add("is-working");

			const activeBlock = wrapper.querySelector(".tabs_block.is-active"),
			targetBlock = wrapper.querySelector(tabsNavLink.getAttribute("href"));

			if(activeBlock && targetBlock) {

				wrapper.querySelectorAll(".tabs_nav a.is-active").forEach(activeLink => activeLink.classList.remove("is-active"));
				tabsNavLink.classList.add("is-active");

				activeBlock.classList.remove("is-visible");

				setTimeout(() => {
					activeBlock.classList.remove("is-active");
					targetBlock.classList.add("is-active");

					setTimeout(() => {
						targetBlock.classList.add("is-visible");
						wrapper.classList.remove("is-working");
					},50)

				},450);
			}
		}
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </tabs> -=-=-=-=-=-=-=-=-=-=-=-=

})

// =-=-=-=-=-=-=-=-=-=-=-=- </click-events> -=-=-=-=-=-=-=-=-=-=-=-=


document.querySelectorAll(".copy_target").forEach(copyTarget => {
	new ClipboardJS(copyTarget);
})
