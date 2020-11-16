const { templateSlot } = require("./template");

const types = ["header", "content", "footer"];

const slots = [];

for (const type of types) {
  slots.push(templateSlot.replace(/{{type}}/g, type));
}

const result = slots.join("");

console.log(result);
