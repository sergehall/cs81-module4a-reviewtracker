// Import all modularized functions
const addReadBook = require("./tracker-functions/addReadBook");
const totalReadingMinutes = require("./tracker-functions/totalReadingMinutes");
const mostReadBook = require("./tracker-functions/mostReadBook");
const printDailySummary = require("./tracker-functions/printDailySummary");

// Initialize reading log with sample entries
const readingLog = [
  { day: "Monday", book: "Eloquent JavaScript", minutes: 30 },
  { day: "Tuesday", book: "You Don’t Know JS", minutes: 20 },
  { day: "Wednesday", book: "The TypeScript Handbook", minutes: 45 },
  { day: "Thursday", book: "JavaScript: The Good Parts", minutes: 40 },
  { day: "Friday", book: "Eloquent JavaScript", minutes: 55 }
];

// Add new entry for Saturday
addReadBook(readingLog, "Saturday", "Dune", 50);

// Print summary
console.log("\nWeekly Reading Summary:");
printDailySummary(readingLog);

// Total reading time
console.log("\nTotal minutes read:", totalReadingMinutes(readingLog));

// Most read book
console.log("Most read book:", mostReadBook(readingLog));
