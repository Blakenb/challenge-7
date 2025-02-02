import fs from "fs";

function getLicense(license) {
  const text = fs.readFileSync("./utils/mit.md", "utf-8");
  return text;
}

export default getLicense;
