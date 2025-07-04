/**
 * Calculates the total number of minutes read from a reading log.
 *
 * Parameter:
 *   - log: array of objects with a numeric `minutes` field
 *
 * Returns:
 *   - total number of minutes (number)
 *
 * Notes:
 *   - Skips entries that are missing `minutes` or have non-numeric values.
 */

function totalReadingMinutes(log) {
  if (!Array.isArray(log)) {
    console.warn("Invalid log provided to totalReadingMinutes()");
    return 0;
  }

  let total = 0;

  for (let entry of log) {
    if (typeof entry.minutes === "number") {
      total += entry.minutes;
    }
  }

  return total;
}

module.exports = totalReadingMinutes;
