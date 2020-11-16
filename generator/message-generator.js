const { templateTip } = require("./template");

const tag = "Message";

const types = ["info", "success", "warning", "error", "loading"];

const msgs = [];

for (const type of types) {
  msgs.push(
    templateTip
      .replace(/{{type}}/g, type)
      .replace(/{{tag}}/g, tag)
      .replace(/{{dollar_tag}}/g, "$" + tag)
  );
}

const result = msgs.join("");

console.log(result);
