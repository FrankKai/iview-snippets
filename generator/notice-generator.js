const { templateTip } = require("./template");

const tag = "Notice";

const types = ["open", "info", "success", "warning", "error"];

const notices = [];

for (const type of types) {
  notices.push(
    templateTip
      .replace(/{{type}}/g, type)
      .replace(/{{tag}}/g, tag)
      .replace(/{{dollar_tag}}/g, "$" + tag)
  );
}

const result = notices.join("");

console.log(result);
