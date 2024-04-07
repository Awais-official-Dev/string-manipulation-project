#! /usr/bin/env node
// before run this program first must run these 2 command in terminal or command line 
// 1.  npm i inquirer
// 2.  npm i --save-dev @types/inquirer

import inquirer from "inquirer";
let answer = await inquirer.prompt([
  { message: "Enter Your Input", type: "string", name: "userInput" },
  {
    message: "Select your operation to perform Operations",
    type: "list",
    name: "operator",
    choices: ["UPPERCASE", "lowercase", "Titlecase"],
  },
]);
if (answer.operator === "UPPERCASE") {
  console.log(answer.userInput.toUpperCase());
} else if (answer.operator === "lowercase") {
  console.log(answer.userInput.toLowerCase());
} else if (answer.operator === "Titlecase") {
  console.log(
    answer.userInput .split(" ").map((word: string | any[]) => word[0].toUpperCase() + word.slice(1)).join(" ")
  );
} else {
  ("Please Enter valid input");
}
