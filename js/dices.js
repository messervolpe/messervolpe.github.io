//select each dice
//select stats value --default 0?
//select button
//on roll generate random n for each dice in proper range
//on roll check select value
//on roll compare d6 + stats with each d10
//if both lower alert strong!, if one higher alert weak!, both higher miss!
//write results next to h3 color coded
//nice to try: animation for rolling

const btnRoll = document.querySelector(".js-roll-dices");
let rollResult = document.querySelector(".js-roll-result");
let stats = document.querySelector(".js-stats");
let d6 = document.querySelector(".js-ar-d6");
let d10_1 = document.querySelector(".js-ar-d10-1");
let d10_2 = document.querySelector(".js-ar-d10-2");

function actionRoll() {

    let d6Rolled = Math.floor(Math.random() * (7-1) + 1);
    let d10_1Rolled = Math.floor(Math.random() * (11-1) + 1);
    let d10_2Rolled = Math.floor(Math.random() * (11-1) + 1);

    let actionSum = d6Rolled + stats.valueAsNumber;

    if (actionSum > d10_1Rolled && actionSum > d10_2Rolled) {
        rollResult.textContent = " strong";
        rollResult.style.color = "#42B31D";
    }
    else if (actionSum > d10_1Rolled || actionSum > d10_2Rolled) {
        rollResult.textContent = " weak";
        rollResult.style.color = "#227FE0";
    }
    else {
        rollResult.textContent = " miss";
        rollResult.style.color = "#F54927";
    }
    
    d6.textContent = d6Rolled;
    d10_1.textContent = d10_1Rolled;
    d10_2.textContent = d10_2Rolled;

}

if (d10_1Rolled == d10_2Rolled) {
    rollResults.textContent += " with a match!";
}

btnRoll.addEventListener("click", actionRoll);
