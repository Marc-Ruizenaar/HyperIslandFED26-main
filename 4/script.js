const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");


button2.onclick = function (e) {
  e.stopPropagation();
  alert("Button 2 clicked!");
};

button3.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("Button 3 clicked!");
});

buttonChildContainer.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target.id === "button4") {
    alert("Button 4 clicked!");
  } else if (e.target.id === "button5") {
    alert("Button 5 clicked!");
  }
});

buttonContainer.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target === buttonContainer) {
    alert("Container clicked!");
  }
});

buttonChildContainer.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target === buttonChildContainer) {
    alert("Child container clicked!");
  }
});
