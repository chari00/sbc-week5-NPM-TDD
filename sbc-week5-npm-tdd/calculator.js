
export const displayToScreen = (input, screenDisplay) => {
  screenDisplay.value += input;
};

export const clearScreen = (screenDisplay) => {
  screenDisplay.value = "";
};

export const calculate = (screenDisplay) => {
  try {
    let expression = screenDisplay.value
      .replace(/x/g, "*")
      .replace(/÷/g, "/")
      .replace(/(\d+(\.\d+)?)%/g, (match, p1) => `(${p1}/100)`);
    if (expression.includes('/0')) {
      throw new Error("Can't divide by zero");
    }
    let result = eval(expression);
    screenDisplay.value = Number(result.toFixed(10));
  } catch (error) {
    screenDisplay.value = error.message || "Error";
  }
};