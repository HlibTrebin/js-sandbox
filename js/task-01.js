const listRef = document.querySelector("#categories");

const listItemsRef = listRef.querySelectorAll(".item");

console.log(`Number of categories: ${listItemsRef.length}`);

listItemsRef.forEach(
  (item) =>
    console.log(`Category: ${item.firstElementChild.textContent}`) +
    console.log(`Elements: ${item.lastElementChild.children.length}`)
);
