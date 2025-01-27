"use strict";

function formatDate(date) {
  function pad(n) {
    return (n < 10 ? "0" : "") + n;
  }

  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate()) +
    "-" +
    pad(date.getHours()) +
    "-" +
    pad(date.getMinutes()) +
    "-" +
    pad(date.getSeconds())
  );
}

module.exports = (migrationDir, migrationName) => {
  return (
    migrationDir + "/" + formatDate(new Date()) + "-" + migrationName + ".js"
  );
};
