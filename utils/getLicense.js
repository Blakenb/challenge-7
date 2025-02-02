import fs from "fs";

function getLicense(license) {
  let path = "";
  if (license === "GNU") {
    path = "utils/gnu.md";
  }
  if (license === "MIT") {
    path = "utils/mit.md";
  }
  if (license === "Apache") {
    path = "utils/apache.md";
  }
  const text = fs.readFileSync(path, "utf-8");
  return text;
}

export default getLicense;
