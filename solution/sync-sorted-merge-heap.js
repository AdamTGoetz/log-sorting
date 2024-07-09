"use strict";

// Print all entries, across all of the sources, in chronological order.

const MiniHeap = require('heap');

module.exports = (logSources, printer) => {
  const heap = new MiniHeap((a, b) => a.log.date - b.log.date);

  // load heap
  logSources.forEach((source, index) => {
    let log = source.pop();
    if (log) {
      heap.push({log, index});
    }
  });

  while (!heap.empty()) {
    const {log, index} = heap.pop();
    
    // print
    printer.print(log);

    const nextLog = logSources[index].pop();
    if (nextLog) {
      heap.push({log: nextLog, index});
    }
  }

  printer.done();
  return console.log("Sync sort complete - heap");
}
