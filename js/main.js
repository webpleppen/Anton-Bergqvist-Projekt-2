let clickCounter = document.querySelector(".clickCounter");
let clickerButton = document.querySelector(".clicker");
let adderButton = document.querySelector(".adder");
let upgrade2xButton = document.querySelector(".upgrade2x");
let smallUpgradeButton = document.querySelector(".smallUpgrade");
let strengthImg = document.querySelector(".strengthImg");
let clicked = 0;
let adder = 1;
let upgrade2x = 1;
let smallUpgrade = 1;

adderButton.addEventListener("click", function () {
  if (clicked >= 100) {
    clicked -= 100;
    adder++;
    clickCounter.innerHTML = clicked;
  }
});

smallUpgradeButton.addEventListener("click", function () {
if (clicked >= 1000){
  clicked -= 1000;
  adder = adder + 10;
  clickCounter.innerHTML = clicked;
}
});

upgrade2xButton.addEventListener("click", function() {
  if (clicked >= 100000){
    clicked -= 100000;
    adder = adder * 2;
    clickCounter.innerHTML = clicked;
  }
});


clickerButton.addEventListener("click", handleClick);
function handleClick() {
  clicked += adder;
  clickCounter.innerHTML = clicked;
  if (clicked > 100 && clicked < 200) {
    strengthImg.setAttribute("src", "lelle.jpg");
  } else if (clicked > 200 && clicked < 700) {
    strengthImg.setAttribute("src", "Lucas - Copy.jpg");
  } else if (clicked >= 700 && clicked < 10000) {
    strengthImg.setAttribute("src", "Victor.jpg");
  } else if (clicked > 10000 && clicked < 40000) {
    strengthImg.setAttribute("src", "Kasper.jpg");
  } else if (clicked > 40000 && clicked < 100000) {
    strengthImg.setAttribute("src", "Elias.jpg");
  } else if (clicked > 100000 && clicked < 1000000) {
    strengthImg.setAttribute("src", "gigaChad.jpg");
  } else if (clicked > 1000000 && clicked < 3000000) {
    strengthImg.setAttribute("src", "megachad.jpg");
  }
  console.log(clicked);
}
