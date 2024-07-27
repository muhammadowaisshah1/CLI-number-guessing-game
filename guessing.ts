#! /usr/bin/env node
import inquirer from "inquirer";

// let guessing_number=12
let guessing_number = Math.floor(Math.random() * 6 + 1);

let guessing = await inquirer.prompt([
  {
    message: "Please  Guessing number between 1-6 ",
    type: "number",
    name: "Guessing_number",
  },
]);
if (guessing_number == guessing.Guessing_number) {
  console.log("Congratulation");
} 
 else {
  console.log("sorry you guess wrong number");
}
