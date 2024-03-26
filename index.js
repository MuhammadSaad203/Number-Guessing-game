#! /usr/bin/env node
import inquirer from "inquirer";
const prizeNUmber = Math.floor(Math.random() * 6 + 1);
const guessing = await inquirer.prompt([
    { name: "userNumber", type: "number", message: "Please enter your Number between 1-6:" },
]);
if (guessing.userNumber === prizeNUmber) {
    console.log("You have entered the right number");
}
else {
    console.log("You have entered the wrong number");
}
