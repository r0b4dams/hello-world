#! /usr/bin/env node
const readline = require("readline");

const HELLO_WORLD = "Hello, World!";

/**
 *
 */
function main() {
  readline.clearLine(process.stdout);
  readline.cursorTo(process.stdout, 0);

  process.stdout.write(`${HELLO_WORLD} ${date()}`);
  setTimeout(main, 1000);
}

function date() {
  return new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
  });
}

main();
