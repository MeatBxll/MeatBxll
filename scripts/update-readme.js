const fs = require("fs");
const path = require("path");

const readmePath = path.join(__dirname, "../README.md");

const header = require("./sections/header");
const githubStats = require("./sections/github-stats");
const snake = require("./sections/snake");
const leetcode = require("./sections/leetcode");

(async () => {
  try {
    let readme = fs.readFileSync(readmePath, "utf8");

    const leetcodeContent = await leetcode();

    readme = readme
      .replace("<!-- HEADER_SECTION -->", header())
      .replace("<!-- GITHUB_STATS_SECTION -->", githubStats())
      .replace("<!-- SNAKE_SECTION -->", snake())
      .replace("<!-- LEETCODE_SECTION -->", leetcodeContent);

    fs.writeFileSync(readmePath, readme, "utf8");
    console.log("✅ README.md updated with all sections");
  } catch (err) {
    console.error("❌ Failed to update README:", err);
  }
})();
