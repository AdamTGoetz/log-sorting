"use strict";

// Print all entries, across all of the sources, in chronological order.

const syncSortedMerge = (logSources, printer) => {
  const logs = [];

  logSources.forEach((source) => {
    let logEntry;
    // fill the log list by popping logs off the source
    while ((logEntry = source.pop()) !== false) {
      logs.push(logEntry); 
    }
  });

  // sort
  logs.sort((a, b) => {
    return a.date - b.date;
  });

  logs.forEach((log) => printer.print(log));
  printer.done();

  return console.log("Sync sort complete?");
}

module.exports = syncSortedMerge;
