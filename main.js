#! /usr/bin/env node

const HELLO_WORLD = "Hello, World!";

/**
 * prints "Hello, World!" with the date and time in PST every DELAY seconds"
 */
function main() {
  const msg = `${HELLO_WORLD} ${date()}`;
  console.log(msg);
  setTimeout(main, 1000);
}

function date() {
  return new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
  });
}

main();
