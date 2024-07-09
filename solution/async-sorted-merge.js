"use strict";

// Print all entries, across all of the *async* sources, in chronological order.
module.exports = async (logSources, printer) => {
  const logs = [];

  await Promise.all(
    logSources.map(async (source) => {
      let logEntry;
      // fill logs with pop async
      while ((logEntry = await source.popAsync()) !== false) {
        logs.push(logEntry);
      }
    })
  );

  // sort
  logs.sort((a, b) => {
    return a.date - b.date;
  })

  // print
  logs.forEach((log) => {
    printer.print(log);
  })

  printer.done();
  return console.log("Async sort complete - list");
};
