const {
  addReadBook,
  totalReadingMinutes,
  mostReadBook,
  printDailySummary,
  sampleLog
} = require("./readingTracker");

const readingLog = [...sampleLog];

// Add new entry
addReadBook(readingLog, "Saturday", "Dune", 50);

// Output
console.log("\nWeekly Reading Summary:");
printDailySummary(readingLog);

console.log("\nTotal minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));
