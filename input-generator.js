const { templateVModel } = require("./template");

const tag = "Input";

const types = [
  "text",
  "password",
  "textarea",
  "url",
  "email",
  "date",
  "number",
  "tel",
];

const btns = [];

for (const type of types) {
  btns.push(templateVModel.replace(/{{type}}/g, type).replace(/{{tag}}/g, tag));
}

const result = btns.join("");

console.log(result);
