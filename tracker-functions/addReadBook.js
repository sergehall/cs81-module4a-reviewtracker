/**
 * Adds a new reading entry to the log.
 *
 * Parameters:
 *   - log: array (the existing reading log)
 *   - day: string (e.g., "Saturday")
 *   - book: string (e.g., "Dune")
 *   - minutes: number (e.g., 30)
 *
 * Side effect:
 *   - Adds a new object to the passed-in log array.
 *
 * Note:
 *   This version includes basic type checks to improve data safety.
 */

function addReadBook(log, day, book, minutes) {
  if (typeof day !== "string" || typeof book !== "string" || typeof minutes !== "number") {
    console.warn("Invalid input types for addReadBook()");
    return;
  }

  const newEntry = { day, book, minutes };
  log.push(newEntry);
}

module.exports = addReadBook;
