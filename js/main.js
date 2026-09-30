/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );
                }

            });

        },
        {
            threshold: 0.15
        }
    );

revealElements.forEach(function (element) {

    observer.observe(element);

});


/* =========================================================
   SMOOTH HERO SCROLL
========================================================= */

const hero =
    document.getElementById("hero");

const scrollIndicator =
    document.querySelector(".hero__scroll");

if (scrollIndicator) {

    scrollIndicator.addEventListener(
        "click",
        function () {

            const letter =
                document.getElementById("letter");

            if (letter) {
                letter.scrollIntoView({
                    behavior: "smooth"
                });
            }

        }
    );

}


/* =========================================================
   PARALLAX AMBIENT LIGHT
========================================================= */

const glows =
    document.querySelectorAll(
        ".background__glow"
    );

window.addEventListener(
    "mousemove",
    function (event) {

        const x =
            (event.clientX / window.innerWidth - .5);

        const y =
            (event.clientY / window.innerHeight - .5);

        glows.forEach(function (glow, index) {

            const strength =
                (index + 1) * 8;

            glow.style.transform =
                `translate(
                    ${x * strength}px,
                    ${y * strength}px
                )`;

        });

    }
);