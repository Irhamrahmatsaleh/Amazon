// /home/irham/Desktop/javascript-amazon-project/scripts/utils/time.js

/**
 * Converts a time string (HH:MM:SS) to seconds.
 * @param {string} timeStr - The time string to convert.
 * @returns {number} - The number of seconds.
 */
function timeStringToSeconds(timeStr) {
  const [hours, minutes, seconds] = timeStr.split(':').map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

/**
 * Converts seconds to a time string (HH:MM:SS).
 * @param {number} seconds - The number of seconds to convert.
 * @returns {string} - The time string.
 */
function secondsToTimeString(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

/**
 * Gets the current time as a formatted string (HH:MM:SS).
 * @returns {string} - The current time string.
 */
function getCurrentTimeString() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

/**
 * Adds a specified number of seconds to a time string (HH:MM:SS).
 * @param {string} timeStr - The original time string.
 * @param {number} secondsToAdd - The number of seconds to add.
 * @returns {string} - The new time string.
 */
function addSecondsToTimeString(timeStr, secondsToAdd) {
  const totalSeconds = timeStringToSeconds(timeStr) + secondsToAdd;
  return secondsToTimeString(totalSeconds);
}

module.exports = {
  timeStringToSeconds,
  secondsToTimeString,
  getCurrentTimeString,
  addSecondsToTimeString
};
