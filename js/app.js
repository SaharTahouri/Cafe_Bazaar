// -----------------------------------------------------Header Responsive Changes-----------------------------------------------------

window.addEventListener("resize", () => {
    if (window.matchMedia("(max-width: 1023.98px)").matches) {
        document.getElementsByTagName("header")[0].classList.add("container");
    } else {
        document.getElementsByTagName("header")[0].classList.remove("container");
    }
});

// -----------------------------------------------------Header Pop-up Menus-----------------------------------------------------

const appsTab = document.getElementById("apps-desktop-tab-text");
const gamesTab = document.getElementById("games-desktop-tab-text");
const langChange = document.querySelector(".header-more button");
const appsPopup = document.querySelectorAll(".header-pop-up-menu")[0];
const gamesPopup = document.querySelectorAll(".header-pop-up-menu")[1];
const langPopup = document.querySelectorAll(".header-pop-up-menu")[2];

function openCloseMenu(popup) {
    if (popup.classList.contains("menu-open")) {
        popup.classList.remove("menu-open");
    } else {
        [appsPopup, gamesPopup, langPopup].forEach((menu) => {
            menu.classList.remove("menu-open");
        });
        popup.classList.add("menu-open");
    }
}


appsTab.addEventListener("click", (event) => {
    openCloseMenu(appsPopup);
    event.stopPropagation();
});

gamesTab.addEventListener("click", (event) => {
    openCloseMenu(gamesPopup);
    event.stopPropagation();
});

langChange.addEventListener("click", (event) => {
    openCloseMenu(langPopup);
    event.stopPropagation();
});

document.addEventListener("click", (event) => {
    const allPopups = [appsPopup, gamesPopup, langPopup];
    const allTabs = [appsTab, gamesTab, langChange];

    const isClickInside = allPopups.some(popup => popup.contains(event.target)) || allTabs.includes(event.target);

    if (!isClickInside) {
        allPopups.forEach((popup) => {
            popup.classList.remove("menu-open");
            popup.classList.add("menu-close");
        });
    }
});

// -------------------------------------------------------Burger Menu-------------------------------------------------------

const burgerMenuBtn = document.querySelector(".header-mobile-menu");
const burgerSVGPath = document.querySelector(".burger-menu-icon path");
let burgerIcon = "M3.643 6.273h16.714A.631.631 0 0021 5.636.631.631 0 0020.357 5H3.643A.631.631 0 003 5.636c0 .358.281.637.643.637zm16.714 5.09H3.643A.631.631 0 003 12c0 .358.281.636.643.636h16.714A.631.631 0 0021 12a.631.631 0 00-.643-.636zm0 6.364H3.643a.631.631 0 00-.643.637c0 .358.281.636.643.636h16.714a.631.631 0 00.643-.636.631.631 0 00-.643-.637z";
let crossIcon = "M18.78 5.22a.728.728 0 010 1.043L13.043 12l5.737 5.737a.728.728 0 010 1.043.728.728 0 01-1.043 0L12 13.043 6.263 18.78a.728.728 0 01-1.043 0 .728.728 0 010-1.043L10.957 12 5.22 6.263a.728.728 0 010-1.043.728.728 0 011.043 0L12 10.957l5.737-5.737a.728.728 0 011.043 0z";

burgerMenuBtn.addEventListener("click", () => {
    let currentIcon = burgerSVGPath.getAttribute("d");
    if (currentIcon === burgerIcon) {
        burgerSVGPath.setAttribute("d", crossIcon);
        document.body.style.overflowY = "hidden";
    } else {
        burgerSVGPath.setAttribute("d", burgerIcon);
        document.body.style.overflowY = "auto";
    }
    document.querySelector(".burger-menu").classList.toggle("menu-close");
    document.querySelector(".burger-menu").classList.toggle("menu-open");
});

// -----------------------------------------------------App Name Direction-----------------------------------------------------

const appsName = document.querySelectorAll(".app-name");

appsName.forEach((name) => {
    let firstChar = name.textContent.trim().charAt(0);
    if (/[\u0600-\u06FF]/.test(firstChar)) {
        name.style.direction = "rtl";
    } else {
        name.style.direction = "ltr";
    }
});

// -----------------------------------------------------Swipers (Sliders-----------------------------------------------------

function initAppSwiper() {
    let appSwiper16 = new Swiper(".app-swiper-16", {
        slidesPerView: 11.8,
        slidesPerGroup: 8,
        navigation: {
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
        },
        breakpoints: {
            1440: {
                slidesPerView: 11.8,
            },
            1200: {
                slidesPerView: 10.87,
            },
            1024: {
                slidesPerView: 10.35,
            },
            992: {
                slidesPerView: "auto",
                slidesPerGroup: 7,
            },
            768: {
                slidesPerView: "auto",
                slidesPerGroup: 6,
            },
            576: {
                slidesPerView: "auto",
                slidesPerGroup: 4,
            },
            250: {
                slidesPerView: "auto",
                slidesPerGroup: 2,
            }
        }
    });

    let appSwiper15 = new Swiper(".app-swiper-15", {
        slidesPerView: 11.42,
        slidesPerGroup: 8,
        navigation: {
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
        },
        breakpoints: {
            1440: {
                slidesPerView: 11.42,
            },
            1200: {
                slidesPerView: 10.5,
            },
            1024: {
                slidesPerView: 9.95,
            },
            992: {
                slidesPerView: "auto",
                slidesPerGroup: 7,
            },
            768: {
                slidesPerView: "auto",
                slidesPerGroup: 6,
            },
            576: {
                slidesPerView: "auto",
                slidesPerGroup: 4,
            },
            250: {
                slidesPerView: "auto",
                slidesPerGroup: 2,
            }
        }
    });

    let appSwiper14 = new Swiper(".app-swiper-14", {
        slidesPerView: 11.055,
        slidesPerGroup: 8,
        navigation: {
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
        },
        breakpoints: {
            1440: {
                slidesPerView: 11.055,
            },
            1200: {
                slidesPerView: 10,
            },
            1024: {
                slidesPerView: 9.47,
            },
            992: {
                slidesPerView: "auto",
                slidesPerGroup: 7,
            },
            768: {
                slidesPerView: "auto",
                slidesPerGroup: 6,
            },
            576: {
                slidesPerView: "auto",
                slidesPerGroup: 4,
            },
            250: {
                slidesPerView: "auto",
                slidesPerGroup: 2,
            }
        }
    });

    let appSwiper13 = new Swiper(".app-swiper-13", {
        slidesPerView: 10.75,
        slidesPerGroup: 8,
        navigation: {
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
        },
        breakpoints: {
            1440: {
                slidesPerView: 10.75,
            },
            1200: {
                slidesPerView: 9.65,
            },
            1024: {
                slidesPerView: 9.05,
            },
            992: {
                slidesPerView: "auto",
                slidesPerGroup: 7,
            },
            768: {
                slidesPerView: "auto",
                slidesPerGroup: 6,
            },
            576: {
                slidesPerView: "auto",
                slidesPerGroup: 4,
            },
            250: {
                slidesPerView: "auto",
                slidesPerGroup: 2,
            }
        }
    });

    let appSwiper12 = new Swiper(".app-swiper-12", {
        slidesPerView: 10.5,
        slidesPerGroup: 8,
        navigation: {
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
        },
        breakpoints: {
            1440: {
                slidesPerView: 10.5,
            },
            1200: {
                slidesPerView: 9.25,
            },
            1024: {
                slidesPerView: 8.62,
            },
            992: {
                slidesPerView: "auto",
                slidesPerGroup: 7,
            },
            768: {
                slidesPerView: "auto",
                slidesPerGroup: 6,
            },
            576: {
                slidesPerView: "auto",
                slidesPerGroup: 4,
            },
            250: {
                slidesPerView: "auto",
                slidesPerGroup: 2,
            }
        }
    });

    let appSwiper11 = new Swiper(".app-swiper-11", {
        slidesPerView: 10.31,
        slidesPerGroup: 8,
        navigation: {
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
        },
        breakpoints: {
            1440: {
                slidesPerView: 10.31,
            },
            1200: {
                slidesPerView: 8.95,
            },
            1024: {
                slidesPerView: 8.22,
            },
            992: {
                slidesPerView: "auto",
                slidesPerGroup: 7,
            },
            768: {
                slidesPerView: "auto",
                slidesPerGroup: 6,
            },
            576: {
                slidesPerView: "auto",
                slidesPerGroup: 4,
            },
            250: {
                slidesPerView: "auto",
                slidesPerGroup: 2,
            }
        }
    });

    let appSwiper10 = new Swiper(".app-swiper-10", {
        slidesPerView: 10,
        slidesPerGroup: 8,
        navigation: {
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
        },
        breakpoints: {
            1440: {
                slidesPerView: 10,
            },
            1200: {
                slidesPerView: 8.65,
            },
            1024: {
                slidesPerView: 7.85,
            },
            992: {
                slidesPerView: "auto",
                slidesPerGroup: 7,
            },
            768: {
                slidesPerView: "auto",
                slidesPerGroup: 6,
            },
            576: {
                slidesPerView: "auto",
                slidesPerGroup: 4,
            },
            250: {
                slidesPerView: "auto",
                slidesPerGroup: 2,
            }
        }
    });

    let appSwiper5 = new Swiper(".app-swiper-5", {
        slidesPerView: 3.615,
        slidesPerGroup: 3,
        navigation: {
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
        },
        breakpoints: {
            1440: {
                slidesPerView: 3.615,
            },
            1200: {
                slidesPerView: 3.342,
            },
            1024: {
                slidesPerView: 3.195,
            },
            992: {
                slidesPerView: "auto",
                slidesPerGroup: 2,
            },
            768: {
                slidesPerView: "auto",
                slidesPerGroup: 1,
            },
            576: {
                slidesPerView: "auto",
                slidesPerGroup: 1,
            },
            250: {
                slidesPerView: "auto",
                slidesPerGroup: 0.5,
            }
        }
    });

    const swiperCSS2 = document.querySelector('link[rel="stylesheet"][href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"]');
    const comment2 = document.createComment('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">');
    const swiperJS = document.querySelector('script[src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"]');
    const comment3 = document.createComment('<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>');
    if (window.innerWidth < 1024) {
        if (swiperCSS2) {
            swiperCSS2.parentNode.replaceChild(comment2, swiperCSS2);
            swiperJS.parentNode.replaceChild(comment3, swiperJS);
        }
    }
}

initAppSwiper();

window.addEventListener("resize", () => {
    initAppSwiper();
});

// -----------------------------------------------------explanations-------------------------------------------------------

const explanationText = document.querySelector(".explanation-text");
const collapseexplanation = document.querySelector(".collapse-explanation");

collapseexplanation.addEventListener("click", () => {
    explanationText.classList.toggle("shrinked");
    explanationText.classList.toggle("collapsed");
    collapseexplanation.classList.toggle("arrow-down");
    collapseexplanation.classList.toggle("arrow-up");
});

// -------------------------------------------------------Close Download Box-------------------------------------------------------

const closeDownloadBox = document.querySelector(".close-download");
const downloadBox = document.querySelector(".download-backdrop");
const innerDownloadBox = document.querySelector(".bottom-download-box");

function deleteDownloadBox() {
    downloadBox.style.display = "none";
    document.body.style.overflowY = "auto";
}

closeDownloadBox.addEventListener("click", () => {
    deleteDownloadBox();
});

window.addEventListener("click", (event) => {
    if (!innerDownloadBox.contains(event.target)) {
        deleteDownloadBox();
    }
});

setTimeout(deleteDownloadBox, 20000);