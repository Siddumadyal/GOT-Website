/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
/* =========================================================
   GAME OF THRONES - CINEMATIC ANIMATIONS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -------------------------------------------------------
       SCROLL REVEAL
       ------------------------------------------------------- */

    const revealElements = document.querySelectorAll(
        "section, .card, .project, .about-section, .signup-section"
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });


    /* -------------------------------------------------------
       NAVBAR SCROLL EFFECT
       ------------------------------------------------------- */

    const navbar = document.getElementById("mainNav");

    if (navbar) {

        const updateNavbar = () => {

            if (window.scrollY > 80) {
                navbar.classList.add("navbar-shrink");
            } else {
                navbar.classList.remove("navbar-shrink");
            }

        };

        window.addEventListener(
            "scroll",
            updateNavbar,
            { passive: true }
        );

        updateNavbar();
    }


    /* -------------------------------------------------------
       SMOOTH ANCHOR SCROLL
       ------------------------------------------------------- */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* -------------------------------------------------------
       BUTTON RIPPLE EFFECT
       ------------------------------------------------------- */

    document.querySelectorAll(".btn").forEach((button) => {

        button.addEventListener("click", function (event) {

            const ripple = document.createElement("span");

            const rect = this.getBoundingClientRect();

            const size = Math.max(
                rect.width,
                rect.height
            );

            ripple.style.width = `${size}px`;
            ripple.style.height = `${size}px`;

            ripple.style.position = "absolute";
            ripple.style.left =
                `${event.clientX - rect.left - size / 2}px`;

            ripple.style.top =
                `${event.clientY - rect.top - size / 2}px`;

            ripple.style.borderRadius = "50%";
            ripple.style.background =
                "rgba(255,255,255,0.25)";

            ripple.style.pointerEvents = "none";

            ripple.style.transform = "scale(0)";
            ripple.style.transition =
                "transform 0.6s ease, opacity 0.6s ease";

            this.appendChild(ripple);

            requestAnimationFrame(() => {
                ripple.style.transform = "scale(1)";
                ripple.style.opacity = "0";
            });

            setTimeout(() => {
                ripple.remove();
            }, 650);

        });

    });


    /* -------------------------------------------------------
       PARALLAX HERO
       ------------------------------------------------------- */

    const hero = document.querySelector(".masthead");

    if (hero) {

        window.addEventListener(
            "scroll",
            () => {

                const scrollPosition = window.scrollY;

                if (scrollPosition < window.innerHeight) {

                    hero.style.backgroundPosition =
                        `center ${scrollPosition * 0.35}px`;

                }

            },
            { passive: true }
        );

    }


    /* -------------------------------------------------------
       IMAGE LAZY LOADING
       ------------------------------------------------------- */

    document.querySelectorAll("img").forEach((image) => {

        if (!image.hasAttribute("loading")) {
            image.setAttribute("loading", "lazy");
        }

    });


    console.log(
        "⚔️ Game of Thrones cinematic animations loaded."
    );

});
/* =========================================================
   GOT CINEMATIC EXPERIENCE
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------------------
       CINEMATIC SCROLL REVEAL
       ----------------------------------------------------- */

    const elements = document.querySelectorAll(
        "section, .card, .masthead p, section h2"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "cinematic-reveal",
                        "show"
                    );

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    elements.forEach(function (element) {

        element.classList.add(
            "cinematic-reveal"
        );

        observer.observe(element);

    });


    /* -----------------------------------------------------
       IMAGE REVEAL
       ----------------------------------------------------- */

    const images = document.querySelectorAll(
        "section img"
    );

    const imageObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.parentElement.classList.add(
                        "cinematic-image",
                        "show"
                    );

                    imageObserver.unobserve(
                        entry.target
                    );
                }

            });

        },
        {
            threshold: 0.2
        }
    );

    images.forEach(function (image) {

        imageObserver.observe(image);

    });


    /* -----------------------------------------------------
       NAVBAR CINEMATIC EFFECT
       ----------------------------------------------------- */

    const navbar =
        document.getElementById("mainNav");

    if (navbar) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 80) {

                    navbar.classList.add(
                        "navbar-shrink"
                    );

                } else {

                    navbar.classList.remove(
                        "navbar-shrink"
                    );

                }

            },
            {
                passive: true
            }
        );

    }


    /* -----------------------------------------------------
       SMOOTH SCROLL
       ----------------------------------------------------- */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const id =
                        this.getAttribute("href");

                    if (!id || id === "#") {
                        return;
                    }

                    const target =
                        document.querySelector(id);

                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        });


    /* -----------------------------------------------------
       MOUSE PARALLAX
       ----------------------------------------------------- */

    const hero =
        document.querySelector(".masthead");

    if (hero && window.innerWidth > 768) {

        document.addEventListener(
            "mousemove",
            function (event) {

                const x =
                    (event.clientX /
                        window.innerWidth -
                        0.5) * 8;

                const y =
                    (event.clientY /
                        window.innerHeight -
                        0.5) * 8;

                hero.style.transform =
                    `translate(${x}px, ${y}px)`;

            }
        );

    }


    /* -----------------------------------------------------
       BUTTON RIPPLE
       ----------------------------------------------------- */

    document
        .querySelectorAll(".btn")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    const ripple =
                        document.createElement("span");

                    const rect =
                        button.getBoundingClientRect();

                    const size =
                        Math.max(
                            rect.width,
                            rect.height
                        );

                    ripple.style.position =
                        "absolute";

                    ripple.style.width =
                        size + "px";

                    ripple.style.height =
                        size + "px";

                    ripple.style.left =
                        event.clientX -
                        rect.left -
                        size / 2 +
                        "px";

                    ripple.style.top =
                        event.clientY -
                        rect.top -
                        size / 2 +
                        "px";

                    ripple.style.borderRadius =
                        "50%";

                    ripple.style.background =
                        "rgba(255,255,255,.25)";

                    ripple.style.transform =
                        "scale(0)";

                    ripple.style.pointerEvents =
                        "none";

                    ripple.style.transition =
                        "transform .6s ease, opacity .6s ease";

                    button.appendChild(
                        ripple
                    );

                    requestAnimationFrame(
                        function () {

                            ripple.style.transform =
                                "scale(1)";

                            ripple.style.opacity =
                                "0";

                        }
                    );

                    setTimeout(
                        function () {

                            ripple.remove();

                        },
                        650
                    );

                }
            );

        });


    console.log(
        "⚔️ GOT Cinematic Experience Loaded"
    );

});