const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", function (e) {
  const activePanel = e.target.closest(".accordion-question");
  if (!activePanel) return;
  toggleAccordion(activePanel);
});

function toggleAccordion(panelToActivate) {
  const button = panelToActivate.querySelector(".accordion-trigger");
  const content = panelToActivate.querySelector(".accordion-content");
  const accordionIconContainer = button.querySelector(
    ".accordion-icon-container"
  );
  const verticalLine = button.querySelector(".vertical-line");
  const isExpanded = button.getAttribute("aria-expanded") === "true";

  button.setAttribute("aria-expanded", String(!isExpanded));
  content.setAttribute("aria-hidden", String(isExpanded));

  verticalLine.style.transform = isExpanded ? "scale(1)" : "scale(0)";
  accordionIconContainer.style.backgroundColor = isExpanded
    ? "var(--clr-accent-500)"
    : "var(--clr-primary-800)";
  content.style.height = isExpanded ? "0%" : "100%";
}
