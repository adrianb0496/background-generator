var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
// var button = document.getElementById("random");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value
	+ ")";
	css.textContent = body.style.background + ";";
}

// Hex Colors Generator
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

// Create random colors
function buttonNumbers() {
	color1.value = randomHexColorCode();
	color2.value = randomHexColorCode();
	setGradient();
}

// Shows the gradient from the start
setGradient();

// button.addEventListener("click", generateTwoColors);

// color1.addEventListener("input", backgroundColor);

// color2.addEventListener("input", backgroundColor);