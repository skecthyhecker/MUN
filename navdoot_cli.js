#!/usr/bin/env node
/**
 * NAVDOOT PARISHAD 1.0 -- CLI Companion (JavaScript / Node edition)
 * AFGJI MUN Society
 *
 * Run: node navdoot_cli.js
 */

const BANNER = `
 _   _    ___     _  _ ____   ___     ___ _____
| \\ | |  / \\ \\   / |/ |  _ \\ / _ \\   / _ |_   _|
|  \\| | / _ \\ \\ / /| ||| |_) | | | | | | | || |
| |\\  |/ ___ \\ V / | || |  __/ ___ \\| |_| || |
|_| \\_/_/   \\_\\_/  |_||_|_|  \\_/  \\_\\\\___/ |_|

      NAVDOOT PARISHAD 1.0  ·  AFGJI MUN
`;

const COMMITTEES = [
  "UNGA -- United Nations General Assembly",
  "UNSC -- United Nations Security Council",
  "UNHRC -- United Nations Human Rights Council",
  "DISEC -- Disarmament and International Security",
  "ECOSOC -- Economic and Social Council",
  "AIPPM -- All India Political Parties Meet",
  "Lok Sabha -- Indian Parliament Simulation",
  "IP -- International Press",
  "Historical Crisis Committee",
];

const COUNTRIES = [
  "France", "Japan", "Brazil", "Germany", "South Africa",
  "Russia", "United Kingdom", "Australia", "Pakistan",
  "Canada", "Egypt", "South Korea", "Indonesia", "Mexico",
];

const TIPS = [
  "A good delegate listens more than they speak.",
  "Placards up, points sharp, tone respectful.",
  "The best resolutions are the ones every bloc can live with.",
  "First-timer? Ask a senior for a 5-minute crash course before committee.",
  "A confident 'point of information' beats a nervous silence.",
  "Read the study guide twice. Skim it once, then read it slow.",
];

const CONFERENCE_DATE = new Date(2026, 10, 16); // month is 0-indexed

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function countdown() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffDays = Math.round((CONFERENCE_DATE - today) / 86400000);
  if (diffDays > 0) {
    console.log(`  ${diffDays} day(s) until Navdoot Parishad 1.0 (16 Nov 2026).`);
  } else if (diffDays === 0) {
    console.log("  It's today. See you on the floor!");
  } else {
    console.log("  Navdoot Parishad 1.0 has concluded. Until next year!");
  }
}

function main() {
  console.log(BANNER);
  countdown();
  console.log();
  console.log("  Your practice portfolio for today:");
  console.log(`    Committee : ${pick(COMMITTEES)}`);
  console.log(`    Country   : ${pick(COUNTRIES)}`);
  console.log();
  console.log(`  Delegate tip: ${pick(TIPS)}`);
  console.log();
  console.log("  Register  -> https://afgjimun.example/register.html");
  console.log("  Fee       -> Rs 5 only, UPI / Card / Net Banking");
  console.log();
}

main();
