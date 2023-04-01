const categoryList = document.querySelector(`#categories`);
console.log(`Number of categories: ${categoryList.children.length}`);

categoryList.querySelectorAll('li.item').forEach(item => {
    const titleEl = item.querySelector('h2').textContent;
    const quantityEl = item.querySelectorAll('li').length;
    console.log(`Category: ${titleEl}`);
    console.log(`Elements: ${quantityEl}`);
});