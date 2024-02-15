const accordionButtons = document.querySelectorAll(".accordion-trigger");
const accordionContent = document.querySelectorAll(".accordion-content");
const accordionQuestionItem = document.querySelectorAll(".accordion-question");


for(let i = 0; i < accordionButtons.length; i++){
    accordionButtons[i].addEventListener("click", function(){
        if(accordionButtons[i].getAttribute("aria-expanded") === "false"){
            accordionQuestionItem[i].style.maxheight = "5rem";
            // Accordion buttons
            accordionButtons[i].setAttribute("aria-expanded", true);
            accordionButtons[i].children[1].style.display = "none";
            // Accordion Content
            accordionContent[i].setAttribute("aria-hidden", false);
            accordionContent[i].style.height = "7.5rem";
        }
        else{
            
            // Accordion Buttons
            accordionButtons[i].setAttribute("aria-expanded", false);
            accordionButtons[i].children[1].style.display = "block";
            // Accordion Content
            accordionContent[i].setAttribute("aria-hidden", true);
            setTimeout(() => {
            }, 460);
            accordionContent[i].style.height = "";
        }
    });
}