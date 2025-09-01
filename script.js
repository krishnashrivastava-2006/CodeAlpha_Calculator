const result = document.getElementById("result");

function appendValue(value) {
  result.value += value;
}

function clearDisplay() {
  result.value = "";
}

function deleteLast() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = result.value.replace(/%/g, "/100");
    result.value = eval(expression);
  } catch {
    result.value = "Error";
  }
}

// Optional: Support keyboard input
document.addEventListener("keydown", (e) => {
  const allowedKeys = "0123456789/*-+.%";
  if (allowedKeys.includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});
