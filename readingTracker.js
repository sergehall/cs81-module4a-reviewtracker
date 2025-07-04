// Weekly reading log stored as an array of objects.
// Each object has keys: day (string), book (string), and minutes (number).
// Consistent use of expected types helps avoid runtime bugs.
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

/**
 * Adds a new reading entry to the readingLog array.
 * Expected input types:
 * - day: string
 * - book: string
 * - minutes: number
 *
 * This function doesn't validate types, so wrong inputs (e.g., a string instead of number)
 * could break downstream logic like totalReadingMinutes().
 * Adding type validation or using TypeScript could make it safer.
 */
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes };
  readingLog.push(newEntry);
}

/**
 * Calculates the total minutes read across all entries in the log.
 * Input: log (array of reading entries)
 * Output: total number of minutes (number)
 */
function totalReadingMinutes(log) {
  let total = 0;

  // Loop through each entry and sum the minutes
  for (let entry of log) {
    total += entry.minutes;
  }

  return total;
}

/**
 * Determines the most frequently read book from the log.
 * Input: log (array of reading entries)
 * Output: title of the most read book (string)
 */
function mostReadBook(log) {
  const bookCounts = {}; // Object to count how many times each book appears

  // Count occurrences of each book
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++;
    }
  }

  // Determine which book has the highest count
  let maxBook = null;
  let maxCount = 0;
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }

  return maxBook;
}

/**
 * Prints a line-by-line summary of daily reading activity.
 * Input: log (array of reading entries)
 * Output: none (prints to console)
 */
function printDailySummary(log) {
  // Loop through the log and format each entry as a summary
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Test the addReadBook function with a new entry for Saturday
addReadBook("Saturday", "Dune", 50);

// Display all entries
printDailySummary(readingLog);

// Show the total minutes read this week
console.log("Total minutes read:", totalReadingMinutes(readingLog));

// Show the most frequently read book
console.log("Most read book:", mostReadBook(readingLog));
