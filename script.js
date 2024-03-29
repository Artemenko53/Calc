const equals = document.querySelector("#equals");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const devide = document.querySelector("#devide");
const f_input = document.querySelector("#f-num");
const s_input = document.querySelector("#s-num");
const res = document.querySelector("#res");
let sign = "";

plus.addEventListener("click", () => {
  sign = "plus";
});

minus.addEventListener("click", () => {
  sign = "minus";
});

multiply.addEventListener("click", () => {
  sign = "multiply";
});

devide.addEventListener("click", () => {
  sign = "devide";
});

equals.addEventListener("click", () => {
  if (sign === "plus") {
    res.value = Number(f_input.value) + Number(s_input.value);
  } else if (sign === "minus") {
    res.value = Number(f_input.value) - Number(s_input.value);
  } else if (sign === "multiply") {
    res.value = Number(f_input.value) * Number(s_input.value);
  } else if (sign === "devide") {
    res.value = Number(f_input.value) / Number(s_input.value);
  } else {
    res.value = "Incorrect";
  }
});
