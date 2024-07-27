#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
// let guessing_number=12
let guessing_number = Math.floor(Math.random() * 6 + 1);
let guessing = await inquirer_1.default.prompt([
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
