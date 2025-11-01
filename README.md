const fs = require("fs");
const path = require("path");

const readmePath = path.join(\_\_dirname, "../README.md");

const header = require("./sections/header");
const githubStats = require("./sections/github-stats");
const snake = require("./sections/snake");
const leetcode = require("./sections/leetcode");

(async () => {
try {
const sections = [
header(),
githubStats(),
snake(),
await leetcode(),
];

    fs.writeFileSync(readmePath, sections.join("\n\n"), "utf8");
    console.log("✅ README.md updated with all sections");

} catch (err) {
console.error(err);
}
})();
