const fs = require("fs");
const path = require("path");

// // Sync
// fs.writeFileSync("./test.txt", "Hello, World!");

// // Async
// fs.writeFile("./test-async.txt", "Hello, Async World!", (err) => {});

// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

fs.readFile("./contacts.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});