let boxes = document.querySelectorAll(".box");
let cse = document.querySelector("#cscore");
let mscore= document.querySelector("#mscore");
var myArray = ["STONE", "PAPER", "SCISSOR"];
let count1 = 0;
let count2 = 0;

function getRandomElement(array) {
    // Use Math.floor to ensure the index is an integer
    const randomIndex = Math.floor(Math.random() * array.length);
  
    // Return the element at the randomly selected index
    return array[randomIndex];
  }

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");

        let random = getRandomElement(myArray);
        console.log("box.innerText:", box.innerText);
        console.log("random:", random);

        if (box.innerText != random) {
            count1++;
            cse.innerText = `Computer score is ${count1}`;
        } else {
            count2++;
            mscore.innerText = `My score is ${count2}`;
        }
    });
});
