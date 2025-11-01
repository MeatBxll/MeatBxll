const fs = require("fs");
const path = require("path");
const leetcode = require("leetcode-api");

const username = "MeatBxll";
const readmePath = path.join(__dirname, "../README.md");
const solutionsDir = path.join(__dirname, "../solutions");

(async () => {
  try {
    const submissions = await leetcode.userSolvedProblems(username);

    const tableRows = submissions.map((p) => {
      const difficulty = p.difficulty;
      const name = p.title;
      const slug = p.titleSlug;
      const solutionFile = fs.existsSync(path.join(solutionsDir, `${slug}.ts`))
        ? `./solutions/${slug}.ts`
        : "#";
      return `| ${name} | ${difficulty} | ✅ | [Link](${solutionFile}) |`;
    });

    const table = [
      "| Problem | Difficulty | Status | Solution |",
      "|---------|------------|--------|----------|",
      ...tableRows,
    ].join("\n");

    let readme = fs.readFileSync(readmePath, "utf8");

    readme = readme.replace(/<!-- LEETCODE_TABLE -->/g, table);

    fs.writeFileSync(readmePath, readme, "utf8");
    console.log("✅ README.md updated with LeetCode problems");
  } catch (err) {
    console.error(err);
  }
})();
