document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.querySelector("#start-button");
  const travelLoader = document.querySelector("#travel-loader");

  if (!startButton || !travelLoader) {
    console.warn(
      "No se ha encontrado #start-button o #travel-loader en el documento."
    );
    return;
  }

  let transitionStarted = false;

  startButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (transitionStarted) {
      return;
    }

    transitionStarted = true;

    const destination = startButton.href;

    travelLoader.classList.add("is-active");
    travelLoader.setAttribute("aria-hidden", "false");

    startButton.setAttribute("aria-disabled", "true");
    startButton.style.pointerEvents = "none";

    window.setTimeout(() => {
      window.location.href = destination;
    }, 2200);
  });

  window.addEventListener("pageshow", () => {
    transitionStarted = false;

    travelLoader.classList.remove("is-active");
    travelLoader.setAttribute("aria-hidden", "true");

    startButton.removeAttribute("aria-disabled");
    startButton.style.pointerEvents = "";
  });
});