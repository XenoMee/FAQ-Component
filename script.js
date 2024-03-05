const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", function (e) {
  const activePanel = e.target.closest(".accordion-question");
  if (!activePanel) return;
  toggleAccordion(activePanel);
});

function toggleAccordion(panelToActivate) {
  const button = panelToActivate.querySelector(".accordion-trigger");
  const content = panelToActivate.querySelector(".accordion-content");
  const plusIcon = button.querySelector(".accordion-plus-icon");
  const isExpanded = button.getAttribute("aria-expanded") === "true";

  button.setAttribute("aria-expanded", String(!isExpanded));
  content.setAttribute("aria-hidden", String(isExpanded));

  plusIcon.style.display = isExpanded ? "block" : "none";
  content.style.height = isExpanded ? "0%" : "100%";
}
