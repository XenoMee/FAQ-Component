const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", function (e) {
  const activePanel = e.target.closest(".accordion-question");
  if (!activePanel) return;
  toggleAccordion(activePanel);
});

function toggleAccordion(panelToActivate) {
  const button = panelToActivate.querySelector(".accordion-trigger");
  const content = panelToActivate.querySelector(".accordion-content");

  if (button.getAttribute("aria-expanded") === "false") {
    button.setAttribute("aria-expanded", "true");
    button.children[1].style.display = "none";
    content.setAttribute("aria-hidden", "false");
    content.style.height = "100%";
  } else {
    button.setAttribute("aria-expanded", "false");
    button.children[1].style.display = "block";
    content.setAttribute("aria-hidden", "true");
    content.style.height = "0%";
  }
}
