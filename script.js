const expandButtons = document.querySelectorAll(".btn");
const textElements = document.querySelectorAll(".no-display");
let isOpen = false;
let isClose = true;

for(let i = 0; i < expandButtons.length; i++){
    expandButtons[i].addEventListener("click", function(){
        for(let j = 0; j < textElements.length; j++){
            
            if(isClose){
                textElements[j].classList.remove("no-display");
                isOpen = true;
                isClose = false;
            }
            else {
                textElements[j].classList.add("no-display");
                isOpen = false;
                isClose = true;
            }
        }
    })
}

// const expandButtonEl = document.getElementById("expand-btn");
// const questionAnswerEl = document.getElementById("question-answer");
// expandButtonEl.addEventListener('click', function(){
//     if(isClose){
//         questionAnswerEl.classList.remove("no-display");
//         isOpen = true;
//         isClose = false;
//     }
//     else{
//         questionAnswerEl.classList.add("no-display");
//         isOpen = false;
//         isClose = true;
//     }
// });

// function checkState(){
//     if(isClose){
//         questionAnswerEl.classList.remove("no-display");
//         isOpen = true;
//         isClose = false;
//     }
//     else{
//         questionAnswerEl.classList.add("no-display");
//         isOpen = false;
//         isClose = true;
//     }
// }
// TODO: Add event listener on button to listen for click events
// TODO: Expand the question item paragraph