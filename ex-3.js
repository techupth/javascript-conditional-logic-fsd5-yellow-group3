//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";

//Start coding here
const message = lightBulbStatus === "On" ? "Lightbulb is On." :
    lightBulbStatus === "Off" ? "Lightbulb is Off." :
        "Please choose the correct input (On/Off)";
console.log(message);

