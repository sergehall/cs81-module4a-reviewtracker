/**
 * Finds the most frequently read book in the reading log.
 *
 * Parameter:
 *   - log: array of objects with a `book` field (string)
 *
 * Returns:
 *   - title of the most read book (string), or null if none
 *
 * Notes:
 *   - This version tracks frequency and finds the max in one pass.
 *   - It uses a hash map (`bookCounts`) to count how many times each book appears.
 *   - During iteration, it updates both the count and checks if the current book
 *     has surpassed the previous max count — allowing us to track the most frequent
 *     book without a second pass.
 *   - Invalid entries (missing or non-string `book` fields) are skipped with a warning.
 *   - The function handles edge cases gracefully, such as non-array input or an empty log.
 */


function mostReadBook(log) {
  if (!Array.isArray(log)) {
    console.warn("Invalid log provided to mostReadBook()");
    return null;
  }

  const bookCounts = {};
  let maxBook = null;
  let maxCount = 0;

  for (let i = 0; i < log.length; i++) {
    const entry = log[i];

    if (typeof entry.book !== "string") {
      console.warn(`Entry ${i + 1} has invalid book value:`, entry.book);
      continue;
    }

    const book = entry.book;
    bookCounts[book] = (bookCounts[book] || 0) + 1;

    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }

  return maxBook;
}


module.exports = mostReadBook;
