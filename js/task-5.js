const changeBody = document.body;
const btn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btn.addEventListener('click', colorChangeBody);

function colorChangeBody() {
  const newColor = getRandomHexColor();
  
  changeBody.style.backgroundColor = newColor;

  colorSpan.textContent = newColor;
  
};

