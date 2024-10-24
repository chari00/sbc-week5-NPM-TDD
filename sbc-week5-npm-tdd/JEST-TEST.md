**Instruction to activate the jest test**

FYI: Utilizing Jest in testing this project will disable the calculator UI.

1. Uncomment line 26 in the `calculator.js` file and remove all the `export` word before the const of each function (line 1, 5, and 9)

```
module.exports = {displayToScreen, clearScreen, calculate}

```

2. Comment line 3 in the `calculator.test.js` and `main.js` file

```
//import { displayToScreen, clearScreen, calculate } from '../calculator'
```
3. Uncomment line 4 in `calculator.test.js` and `main.js` file

```
const { displayToScreen, clearScreen, calculate } = require('../calculator')
```
4. Change the `"test": "vitest"`  to `"test": "jest"`in the script of `package.json` file.

5. Run jest test using `npm run test` in the terminal.
