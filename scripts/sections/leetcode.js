const leet = require("leetcode-stats");

const username = "MeatBxll";

module.exports = async () => {
  try {
    const stats = await leet.getStats(username);

    const table = `
## 💻 LeetCode Stats

- **Total Solved:** ${stats.totalSolved}
- **Easy:** ${stats.easySolved} / ${stats.totalEasy}
- **Medium:** ${stats.mediumSolved} / ${stats.totalMedium}
- **Hard:** ${stats.hardSolved} / ${stats.totalHard}
- **Acceptance Rate:** ${stats.acRate}%
- **Ranking:** ${stats.ranking}

[![LeetCode Stats](https://leetcard.jacoblin.cool/${username}?theme=dark)](https://leetcode.com/${username}/)
`;

    return table;
  } catch (err) {
    console.error("Error fetching LeetCode stats:", err);
    return "LeetCode stats could not be loaded.";
  }
};
