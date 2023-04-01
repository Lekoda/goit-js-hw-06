const btnChangeColor = document.querySelector('.change-color');
const colorWidget = document.querySelector('body');
const colorText = document.querySelector('.color');
btnChangeColor.addEventListener('click', onColorChange);

function onColorChange () {
  const newColor = getRandomHexColor();
  colorWidget.style.backgroundColor = newColor;
  colorText.textContent = newColor;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};



