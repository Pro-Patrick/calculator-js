const display = document.getElementById("display");
function appendToDisplay(input) {
  display.value += input;
}
function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    if (display.value.trim() === "") return;
    const result = eval(display.value);
    if (isNaN(result)) throw new Error();
    display.value = result;
  } catch (error) {
    display.value = "Bad expression !!";
    setTimeout(() => {
      clearDisplay();
    }, 1000);
  }
}
