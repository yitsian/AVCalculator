function createToolTip(text, tooltipText) {
  return `<span class="tooltip" data-popup=${tooltipText}>${text}</span>`
}

function loadTooltips() {
  const tooltips = document.querySelectorAll(".tooltip");

  // Check if popup already exists, if not create it
  let popup = document.querySelector(".tooltip-popup");
  if (!popup) {
    popup = document.createElement("div");
    popup.className = "tooltip-popup general-text spark";
    document.body.appendChild(popup);
  }

  tooltips.forEach(element => {
    element.addEventListener("mouseenter", () => {
      const message = element.dataset.popup || "Tooltip";
      popup.textContent = message;

      // Position popup above element
      const rect = element.getBoundingClientRect();
      popup.style.left = rect.left + window.scrollX + rect.width / 2 + "px";
      popup.style.top = rect.top + window.scrollY - popup.clientHeight + "px"; // 35px above
      popup.style.transform = "translateX(-50%)";

      popup.classList.add("show");
    });

    element.addEventListener("mouseleave", () => {
      popup.classList.remove("show");
    });
  });
}