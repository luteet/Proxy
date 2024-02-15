const body=document.querySelector("body"),html=document.querySelector("html"),menu=document.querySelectorAll(".header__burger, .header__nav, body"),header=document.querySelector(".header"),imageAspectRatio=document.querySelectorAll(".image-aspect-ratio, figure");imageAspectRatio.forEach(e=>{e.getAttribute("width")&&e.getAttribute("height")&&e.style.setProperty("--aspect-ratio",`${e.getAttribute("width")}/${e.getAttribute("height")}`)}),body.addEventListener("click",(function(e){function t(t){return e.target.closest(t)}t(".header__burger")&&menu.forEach(e=>{e.classList.toggle("is-mobile-menu-active")});const i=t(".plans__item_target");i&&(i.classList.contains("is-active")?i.classList.remove("is-active"):(i.closest("section").querySelectorAll(".plans__item_target.is-active").forEach(e=>e.classList.remove("is-active")),i.classList.add("is-active")));const s=t(".faq__item_target");s&&(s.classList.contains("is-active")?s.classList.remove("is-active"):(s.closest("section").querySelectorAll(".faq__item_target.is-active").forEach(e=>e.classList.remove("is-active")),s.classList.add("is-active")))}));let windowSize=0;function resize(){html.style.setProperty("--height-header",header.offsetHeight+"px"),html.style.setProperty("--static-height-header",header.offsetHeight+"px"),html.style.setProperty("--vh",.01*window.innerHeight+"px"),windowSize!=window.innerWidth&&html.style.setProperty("--svh",.01*window.innerHeight+"px"),windowSize=window.innerWidth}function scrollPage(){let e=[window.scrollY,!1];function t(){e[0]=window.scrollY,e[0]>=300&&0==e[1]?(e[1]=!0,header.style.setProperty("--opacity","0"),setTimeout((function(){header.classList.add("is-scroll"),header.style.setProperty("--opacity","1"),html.style.setProperty("--height-header",header.offsetHeight+"px")}),200)):e[0]<=300&&1==e[1]&&(e[1]=!1,header.style.setProperty("--opacity","0"),setTimeout((function(){header.style.setProperty("--opacity","1"),header.classList.remove("is-scroll"),html.style.setProperty("--height-header",header.offsetHeight+"px")}),200))}t(),window.addEventListener("scroll",t)}resize(),window.addEventListener("resize",resize),scrollPage();