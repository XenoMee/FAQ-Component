const accordionButtons = document.querySelectorAll(".accordion-trigger");
const accordionContent = document.querySelectorAll(".accordion-content");

for(let i = 0; i < accordionButtons.length; i++){
    accordionButtons[i].addEventListener("click", function(){
        if(accordionButtons[i].getAttribute("aria-expanded") === "false"){
            accordionButtons[i].setAttribute("aria-expanded", true);
            // accordionButtons[i].children[1].style.display = "none";
            // accordionContent[i].setAttribute("aria-hidden", false);
        }
//         else{
//             accordionButtons[i].setAttribute("aria-expanded", false);
//             accordionContent[i].setAttribute("aria-hidden", true);
//             accordionButtons[i].children[1].style.display = "block";
//         }
    });
}