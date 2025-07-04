/**
 * Logs a daily summary of reading activity to the console.
 *
 * Parameter:
 *   - log: array of objects with `day` (string), `book` (string), and `minutes` (number)
 *
 * Output:
 *   - Prints a formatted string for each reading entry
 *
 * Notes:
 *   - Skips any invalid entries missing expected fields.
 */

function printDailySummary(log) {
  if (!Array.isArray(log)) {
    console.warn("Invalid log provided to printDailySummary()");
    return;
  }

  for (let entry of log) {
    if (
      typeof entry.day === "string" &&
      typeof entry.book === "string" &&
      typeof entry.minutes === "number"
    ) {
      console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
    }
  }
}

module.exports = printDailySummary;
