// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст 
// заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).


const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);


categories.forEach( (category) => {
    const title = category.querySelector("h2").textContent;
console.log(`Category: ${title}`)
const elem = category.querySelectorAll("li");
console.log(`Elements: ${elem.length}`);
});