const screenDisplay = document.getElementById("screen");

const displayToScreen = (input) => {
  screenDisplay.value += input;
};

const clearScreen = () => {
  screenDisplay.value = "";
};

const calculate = () => {
  try {
    let expression = screenDisplay.value
      .replace(/x/g, "*")
      .replace(/÷/g, "/")
      .replace(/(\d+(\.\d+)?)%/g, (match, p1) => `(${p1}/100)`);
    console.log("Parsed expression:", expression);
    if (expression.includes('/0')) {
      throw new Error("Can't divide by zero");
  }

    let result = eval(expression);
    // console.log("Result before formatting:", result);
    screenDisplay.value = Number(result.toFixed(10));
  } catch (error) {
    screenDisplay.value = error.message ||"Error";
    // console.error("Calculation error:", error);
  }
};
