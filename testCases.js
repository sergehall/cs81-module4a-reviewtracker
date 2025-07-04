// Import functions
const {
  addReadBook,
  totalReadingMinutes,
  mostReadBook,
  printDailySummary,
} = require("./readingTracker");

// Initialize a fresh log for testing
let testLog = [];

// Test Case 1: Basic add
addReadBook(testLog, "Monday", "Clean Code", 30);
// Should add one entry to testLog

// Test Case 2: Another book on another day
addReadBook(testLog, "Tuesday", "The Pragmatic Programmer", 45);

// Test Case 3: Same book again
addReadBook(testLog, "Wednesday", "Clean Code", 25);

// Test Case 4: Add a book with 0 minutes
addReadBook(testLog, "Thursday", "Refactoring", 0);
// Should still appear in log, but total minutes shouldn't change

// Test Case 5: Add a very long reading session
addReadBook(testLog, "Friday", "Design Patterns", 120);

// Test Case 6: Add a book with invalid minutes (string)
addReadBook(testLog, "Saturday", "JavaScript: The Good Parts", "60");
// Should trigger console.warn and be skipped

// Test Case 7: Add a book with invalid book type (number)
addReadBook(testLog, "Sunday", 123, 20);
// Should trigger console.warn and be skipped

// Test Case 8: Add another valid entry
addReadBook(testLog, "Sunday", "You Don’t Know JS", 35);

// Test Case 9: Add repeated book multiple times
addReadBook(testLog, "Extra", "Clean Code", 10);
addReadBook(testLog, "Bonus", "Clean Code", 5);

// Test Case 10: Empty log case (check before any entries)
const emptyLog = [];
console.log("\nEmpty log total:", totalReadingMinutes(emptyLog)); // Expected: 0
console.log("Empty log most read:", mostReadBook(emptyLog)); // Expected: null

// Summary of all valid test entries
console.log("\n--- Test Log Summary ---");
printDailySummary(testLog);

// 🧮 Total reading minutes
console.log("\nTotal minutes read:", totalReadingMinutes(testLog));

// 📚 Most frequently read book
console.log("Most read book:", mostReadBook(testLog));
