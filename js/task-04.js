const counterValue = {
  value: 0,

  increment() {
    console.log("+");
    this.value += 1;
  },

  decrement() {
    console.log("-");
    this.value -= 1;
  },
};

const counterRef = document.querySelector("#value");
const incrementRef = document.querySelector('[data-action="increment"]');
const decrementRef = document.querySelector('[data-action="decrement"]');

decrementRef.addEventListener("click", () => {
  counterValue.decrement(), (counterRef.textContent = counterValue.value);
});
incrementRef.addEventListener("click", () => {
  counterValue.increment(), (counterRef.textContent = counterValue.value);
});
