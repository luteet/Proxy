
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

		const wrapper = tabsNavLink.closest(".tabs_wrapper"), target = wrapper.querySelector(".tabs_nav__target span");
		if(!wrapper.classList.contains("is-working") && tabsNavLink.getAttribute("href") !== "#" && !tabsNavLink.classList.contains("is-active")) {
			wrapper.classList.add("is-working");

			const activeBlock = wrapper.querySelector(".tabs_block.is-active"),
			targetBlock = wrapper.querySelector(tabsNavLink.getAttribute("href"));

			if(activeBlock && targetBlock) {

				document.querySelectorAll(".tabs_nav__block.is-active").forEach(block => {
					block.classList.remove("is-active")
				})

				target.textContent = tabsNavLink.textContent;

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

	const tabsNavTarget = $(".tabs_nav__target")
	if(tabsNavTarget) {
	
		tabsNavTarget.closest(".tabs_nav__block").classList.toggle("is-active");
	
	} else if(!$(".tabs_nav__block")) {
		document.querySelectorAll(".tabs_nav__block.is-active").forEach(block => {
			block.classList.remove("is-active")
		})
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </tabs> -=-=-=-=-=-=-=-=-=-=-=-=


	// =-=-=-=-=-=-=-=-=-=-=-=- <account-header-burger> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const accountHeaderBurger = $(".account_header__burger")
	if(accountHeaderBurger) {
	
		accountHeaderBurger.closest(".account_header").classList.toggle("is-nav-active");
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </account-header-burger> -=-=-=-=-=-=-=-=-=-=-=-=


	// =-=-=-=-=-=-=-=-=-=-=-=- <list-proxies> -=-=-=-=-=-=-=-=-=-=-=-=

	const listProxiesTableTarget = $(".list-proxies__table_target")
	if(listProxiesTableTarget) {
	
		event.preventDefault();

		listProxiesTableTarget.parentElement.classList.toggle("is-active")
	
	}
	
	const listProxiesTableMore = $(".list-proxies__table_more")
	if(listProxiesTableMore) {
	
		event.preventDefault();

		const main = listProxiesTableMore.closest(".list-proxies"),
		table = main.querySelector(".list-proxies__main"),
		targetBlock = main.querySelector(`${listProxiesTableMore.getAttribute("href")}`);

		table.classList.add("is-hidden");

		setTimeout(() => {
			main.classList.add("is-active-block");
			table.style.display = "none";
			targetBlock.classList.add("is-active");
			setTimeout(() => {
				targetBlock.classList.add("is-visible");
			},50)
		},350)
	
	}

	const listProxiesForward = $(".list-proxies__forward")
	if(listProxiesForward) {
	
		event.preventDefault();

		const main = listProxiesForward.closest(".list-proxies"),
		table = main.querySelector(".list-proxies__main"),
		activeBlock = main.querySelector(`.list-proxies__block.is-active`);

		activeBlock.classList.remove("is-visible");

		setTimeout(() => {
			main.classList.remove("is-active-block");
			table.style.removeProperty("display");
			activeBlock.classList.remove("is-active");
			setTimeout(() => {
				table.classList.remove("is-hidden");
			},50)
		},350)
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </list-proxies> -=-=-=-=-=-=-=-=-=-=-=-=

})

// =-=-=-=-=-=-=-=-=-=-=-=- </click-events> -=-=-=-=-=-=-=-=-=-=-=-=


document.querySelectorAll(".copy_target").forEach(copyTarget => {
	new ClipboardJS(copyTarget);
})

document.querySelectorAll(".list-proxies__block_copy").forEach(copyTarget => {
	const clipboard = new ClipboardJS(copyTarget);

	let timeout;
	clipboard.on('success', function(event) {
		copyTarget.classList.remove("is-copied");
		setTimeout(() => {
			copyTarget.classList.add("is-copied")
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				copyTarget.classList.remove("is-copied")
			},1500)
		},100)
	});
})

document.querySelectorAll(".list-proxies__block_check_all").forEach(checkAll => {

	const checkbox = checkAll.querySelector("input"),
	main = checkAll.closest(".list-proxies__block"),
	list = main.querySelector(".list-proxies__block_list"),
	copyTarget = main.querySelector(".list-proxies__block_copy"),
	checkboxes = list.querySelectorAll("input");

	let checkedString = "";

	checkboxes.forEach(checkbox => {
		checkbox.addEventListener("change", () => {
			checkboxes.forEach(checkbox => {
				if(checkbox.checked) {
					if(checkedString == "") {
						checkedString += checkbox.nextElementSibling.nextElementSibling.textContent.trim()
					} else {
						checkedString += `, ${checkbox.nextElementSibling.nextElementSibling.textContent.trim()}`;
					}
				}
			})
			
			copyTarget.setAttribute("data-clipboard-text", checkedString);
			checkedString = "";
		})
	})

	checkbox.addEventListener("change", () => {

		if(checkbox.checked) {
			checkboxes.forEach(checkbox => {
				if(!checkbox.checked) checkbox.classList.add("all-checked");
				checkbox.checked = true;
			})
		} else {
			checkboxes.forEach(checkbox => {
				if(checkbox.classList.contains("all-checked")) {
					checkbox.classList.remove("all-checked");
					checkbox.checked = false;
				}
			})
		}

		checkboxes.forEach(checkbox => {
			if(checkbox.checked) {
				if(checkedString == "") {
					checkedString += checkbox.nextElementSibling.nextElementSibling.textContent.trim()
				} else {
					checkedString += `, ${checkbox.nextElementSibling.nextElementSibling.textContent.trim()}`;
				}
			}
		})

		copyTarget.setAttribute("data-clipboard-text", checkedString);
		checkedString = "";
	})

})

document.addEventListener("DOMContentLoaded", () => {
	setTimeout(() => {
		document.body.style.setProperty("--anim-speed", "0.3s");
	},500)
})
