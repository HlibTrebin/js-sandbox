const inputRef = document.querySelector("#validation-input");

const inputValidation = (event) => {
  if (event.currentTarget.value.length >= inputRef.dataset.length) {
    inputRef.classList.remove("invalid");
    return inputRef.classList.add("valid");
  }
  event.currentTarget.value.length < inputRef.dataset.length;
  inputRef.classList.remove("valid");
  return inputRef.classList.add("invalid");
};

inputRef.addEventListener("blur", inputValidation);
