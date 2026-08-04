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
            });

            window.setTimeout(function () {
                window.location.href = destination;
            }, 2200);
        });
    });
});
