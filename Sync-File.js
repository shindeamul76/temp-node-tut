const {writeFileSync, readFileSync} = require("fs");


const read = readFileSync("./Content/Subfolder/first.txt", "utf8");
const write = writeFileSync("./Content/Subfolder/result-sync.txt", `Hi there are one ${read}`);

console.log(write);