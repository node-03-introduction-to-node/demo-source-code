// const args = process.argv;
// const fIndex = args.indexOf("--f");
// const sIndex = args.indexOf("--s");
// const oIndex = args.indexOf("--o");
// const firstNumber = Number(args[fIndex + 1]);
// const secondNumber = Number(args[sIndex + 1]);
// const operation = args[oIndex + 1];

require("dotenv").config();

const firstNumber = +process.env.FIRST;
const secondNumber = +process.env.SECOND;
const operation = process.env.OPERATION;

let result;
switch (operation) {
  case "-":
    result = firstNumber - secondNumber;
    break;
  case "+":
  default:
    result = firstNumber + secondNumber;
    break;
}
console.log(result);
