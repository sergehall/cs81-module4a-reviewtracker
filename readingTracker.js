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
 * Adds a new reading entry to the reading log.
 * Parameters:
 *   - day: string (e.g., "Saturday")
 *   - book: string (e.g., "Dune")
 *   - minutes: number (e.g., 45)
 * Side effect:
 *   - Adds a new object to the global readingLog array.
 */
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes };
  readingLog.push(newEntry);
}

/**
 * Calculates total minutes read for the entire week.
 * Parameter:
 *   - log: array of reading entries (each with .minutes key)
 * Returns:
 *   - total number of reading minutes (number)
 */
function totalReadingMinutes(log) {
  let total = 0;

  // Accumulate minutes from each entry
  for (let entry of log) {
    total += entry.minutes;
  }

  return total;
}

/**
 * Finds the book read most frequently in the log.
 * Parameter:
 *   - log: array of reading entries
 * Returns:
 *   - book title (string) with highest frequency
 */
function mostReadBook(log) {
  const bookCounts = {}; // Object to store book frequency

  // Count each book occurrence
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++;
    }
  }

  // Find the book with the highest count
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
 * Logs daily reading activity to the console.
 * Parameter:
 *   - log: array of reading entries
 * Side effect:
 *   - Prints each day's reading summary
 */
function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Add a new reading entry for Saturday
addReadBook("Saturday", "Dune", 50);

// Show reading summary
printDailySummary(readingLog);

// Show total reading minutes
console.log("Total minutes read:", totalReadingMinutes(readingLog));

// Show most frequently read book
console.log("Most read book:", mostReadBook(readingLog));
