const accordion = document.querySelector("ul");

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

// for (let i = 0; i < accordionButtons.length; i++) {
//   accordionButtons[i].addEventListener("click", function () {
//     if (accordionButtons[i].getAttribute("aria-expanded") === "false") {
//       // Accordion buttons
//       accordionButtons[i].setAttribute("aria-expanded", true);
//       accordionButtons[i].children[1].style.display = "none";
//       // Accordion Content
//       accordionContent[i].setAttribute("aria-hidden", false);
//       accordionContent[i].style.height = "100%";
//     } else {
//       // Accordion Buttons
//       accordionButtons[i].setAttribute("aria-expanded", false);
//       accordionButtons[i].children[1].style.display = "block";
//       // Accordion Content
//       accordionContent[i].setAttribute("aria-hidden", true);
//       accordionContent[i].style.height = "";
//     }
//   });
// }
