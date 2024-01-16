#! /usr/bin/env node

const DELAY = 5;
const LIMIT = 3;
let i = 0;
/**
 * prints "Hello, World!" every DELAY seconds
 * runs forever
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
