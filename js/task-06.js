const result = {};

const inputRef = document.querySelector("#validation-input");
// console.dir(inputRef);
// console.log(inputRef.dataset.length);
// console.log(inputRef.attributes);

inputRef.addEventListener("blur", () => {
  inputRef.classList.add("#validation-input");
  console.log(inputRef.classList);
  if (inputRef.value.length < inputRef.dataset.length) {
    console.log(`значение инпута: ${inputRef.value}`);
    console.log(`длина инпута: ${inputRef.value.length}`);
    inputRef.classList.replace("#validation-input", "#validation-input.valid");
    return console.log("no");
  }

  console.log(`значение инпута: ${inputRef.value}`);
  console.log(`длина инпута: ${inputRef.value.length}`);
  inputRef.classList.replace("#validation-input", "#validation-input.invalid");
  return console.log("yes");
});
