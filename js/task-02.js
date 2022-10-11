const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingrListRef = document.querySelector("#ingredients");

// ingredients.forEach((item) => {
//   let result = document.createElement("li");
//   result.textContent = item;
//   result.className = "item";
//   return ingrListRef.append(result);
// });
// console.log(ingrListRef);

const ingr = ingredients.map((item) => {
  let result = document.createElement("li");
  result.textContent = item;
  result.className = "item";
  return result;
});
// console.log(ingr);

ingrListRef.append(...ingr);
console.log(ingrListRef);
