const categoriesList = document.querySelector("#categories");

const categoryItems = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItemsList = category.querySelectorAll('ul li');
  const categoryItemsCount = categoryItemsList.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItemsCount}`);
});