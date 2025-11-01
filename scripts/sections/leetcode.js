const leetcode = require("leetcode-api");
const fs = require("fs");
const path = require("path");

const username = "MeatBxll";
const solutionsDir = path.join(__dirname, "../../solutions");

module.exports = async () => {
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

  return [
    "## 💻 LeetCode Stats",
    `[![LeetCode Stats](https://leetcard.jacoblin.cool/MeatBxll?theme=dark)](https://leetcode.com/MeatBxll/)`,
    "### 📝 Solved Problems",
    "| Problem | Difficulty | Status | Solution |",
    "|---------|------------|--------|----------|",
    ...tableRows,
  ].join("\n");
};
