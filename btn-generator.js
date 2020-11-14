const { template } = require("./template");

const tag = "Button";

const types = [
  "default",
  "primary",
  "dashed",
  "text",
  "info",
  "success",
  "warning",
  "error",
];

const btns = [];

for (const type of types) {
  btns.push(template.replace(/{{type}}/g, type).replace(/{{tag}}/g, tag));
}

const result = btns.join("");

console.log(result);
