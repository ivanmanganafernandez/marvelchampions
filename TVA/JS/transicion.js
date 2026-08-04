document.addEventListener("DOMContentLoaded", function () {
    const travelLoader =
        document.querySelector("#travel-loader");

    const transitionLinks =
        document.querySelectorAll(
            "#start-button, .js-transition-link"
        );

    if (!travelLoader || transitionLinks.length === 0) {
        return;
    }

    let transitionStarted = false;

    function resetTransition() {
        transitionStarted = false;

        travelLoader.classList.remove("is-active");
        travelLoader.setAttribute("aria-hidden", "true");

        transitionLinks.forEach(function (item) {
            item.style.pointerEvents = "";
            item.removeAttribute("aria-disabled");
        });

        const progressBar =
            travelLoader.querySelector(
                ".travel-loader__progress-bar"
            );

        if (progressBar) {
            progressBar.style.animation = "none";

            void progressBar.offsetWidth;

            progressBar.style.animation = "";
        }
    }

    transitionLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            if (transitionStarted) {
                return;
            }

            transitionStarted = true;

            const destination = link.href;

            travelLoader.classList.add("is-active");
            travelLoader.setAttribute("aria-hidden", "false");

            transitionLinks.forEach(function (item) {
                item.style.pointerEvents = "none";
                item.setAttribute("aria-disabled", "true");
            });

            window.setTimeout(function () {
                window.location.href = destination;
            }, 2200);
        });
    });

    window.addEventListener("pageshow", function () {
        resetTransition();
    });
});
