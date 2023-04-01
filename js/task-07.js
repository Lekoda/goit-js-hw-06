const rangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

rangeEl.addEventListener('input', onFontControl);

function onFontControl() {
    const fontSizeEl = rangeEl.value + 'px';
    textEl.style.fontSize = fontSizeEl;
};

