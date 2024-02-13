const expandButtons = document.querySelectorAll(".btn");
const questionAnswerEl = document.querySelectorAll(".accordion-collapse");
let isOpen = false;
let isClose = true;

for(let i = 0; i < expandButtons.length; i++){
    expandButtons[i].addEventListener("click", function(){
        questionAnswerEl[i].classList.toggle("open");
    })
}