const counter = document.querySelector('#counter');
const counterValue = document.querySelector('#value')
let currentValue = 0;

const btnDecrementEl = counter.firstElementChild;
console.log(btnDecrementEl);
const btnEncrementEl = counter.lastElementChild;
console.log(btnEncrementEl);

const decrementButtonClick= () => {
    currentValue -= 1;
    counterValue.textContent = currentValue;
}
const incrementButtonClick = () => {
    currentValue += 1;
    counterValue.textContent = currentValue;
}
btnDecrementEl.addEventListener('click',decrementButtonClick);
btnEncrementEl.addEventListener('click',incrementButtonClick);