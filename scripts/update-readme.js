const fs = require("fs");
const path = require("path");

const readmePath = path.join(__dirname, "../README.md");

const sections = [
  {
    placeholder: "<!-- HEADER_SECTION -->",
    module: require("./sections/header"),
  },
  {
    placeholder: "<!-- GITHUB_STATS_SECTION -->",
    module: require("./sections/github-stats"),
  },
  {
    placeholder: "<!-- SNAKE_SECTION -->",
    module: require("./sections/snake"),
  },
  {
    placeholder: "<!-- LEETCODE_SECTION -->",
    module: require("./sections/leetcode"),
  },
];

(async () => {
  try {
    let readme = fs.readFileSync(readmePath, "utf8");

    for (const sec of sections) {
      const content =
        sec.module.constructor.name === "AsyncFunction"
          ? await sec.module()
          : sec.module();
      readme = readme.replace(sec.placeholder, content);
    }

    fs.writeFileSync(readmePath, readme, "utf8");
    console.log("✅ README.md updated with all sections");
  } catch (err) {
    console.error("❌ Failed to update README:", err);
  }
})();
