const leetcode = require("leetcode-api");
const username = "MeatBxll";

module.exports = async () => {
  try {
    const submissions = await leetcode.userSolvedProblems(username);

    const tableRows = submissions.map((p) => {
      const solutionFile = `./solutions/${p.titleSlug}.ts`;
      return `| ${p.title} | ${p.difficulty} | ✅ | [Link](${solutionFile}) |`;
    });

    return `
[![LeetCode Stats](https://leetcard.jacoblin.cool/${username}?theme=dark)](https://leetcode.com/${username}/)

### 📝 Solved Problems
| Problem | Difficulty | Status | Solution |
|---------|------------|--------|----------|
${tableRows.join("\n")}
`;
  } catch (err) {
    console.error(err);
    return "Could not fetch LeetCode data";
  }
};
