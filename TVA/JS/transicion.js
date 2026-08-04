document.addEventListener("DOMContentLoaded", function () {
    const startButton =
        document.querySelector("#start-button");

    const travelLoader =
        document.querySelector("#travel-loader");

    if (!startButton || !travelLoader) {
        console.error(
            "No se encuentra #start-button o #travel-loader"
        );

        return;
    }

    let transitionStarted = false;

    startButton.addEventListener("click", function (event) {
        event.preventDefault();

        if (transitionStarted) {
            return;
        }

        transitionStarted = true;

        const destination = startButton.href;

        travelLoader.classList.add("is-active");
        travelLoader.setAttribute("aria-hidden", "false");

        startButton.style.pointerEvents = "none";

        window.setTimeout(function () {
            window.location.href = destination;
        }, 2200);
    });
});
