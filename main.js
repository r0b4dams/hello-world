#! /usr/bin/env node

const DELAY = 6;
const LIMIT = 10;
let i = 0;
/**
 * prints "Hello, World!" every DELAY seconds
 * runs for one minute and exits
 */
(function main() {
  if (i < LIMIT) {
    console.log("Hello, World!");
    i++;
    setTimeout(main, DELAY * 1000);
  } else {
    console.log("Goodbye!");
  }
})();
