import fs from "node:fs/promises";
import path from "node:path";

const file = path.join(process.cwd(), "index.html");
let html = await fs.readFile(file, "utf8");

const replacements = [
  ["images/station-01.jpg", "images/sec01_01.jpg"],
  ["images/soba-01.jpg", "images/sec02_01.jpg"],
  ["images/nawate-01.jpg", "images/sec03_01.jpg"],
  ["images/nawate-02.jpeg", "images/sec03_02.jpeg"],
  ["images/nawate-03.jpeg", "images/sec03_03.jpeg"],
  ["images/nakamachi-01.jpeg", "images/sec04-1_01.jpeg"],
  ["images/nakamachi-02.jpeg", "images/sec04-1_02.jpeg"],
  ["images/apple-01.jpeg", "images/sec04-2_01.jpeg"],
  ["images/apple-02.jpeg", "images/sec04-2_02.jpeg"],
  ["images/brewery-01.jpeg", "images/sec05_01.jpeg"],
  ["images/brewery-02.jpeg", "images/sec05_02.jpeg"],
  ["images/brewery-03.jpeg", "images/sec05_03.jpeg"],
  ["images/brewery-04.jpeg", "images/sec05_04.jpeg"],
  ["images/itoen-01.jpeg", "images/sec06_01.jpeg"],
  ["images/brakefast-01.jpeg", "images/sec07_01.jpeg"],
  ["images/brakefast-02.jpeg", "images/sec07_02.jpeg"],
  ["images/komatsu-01.jpeg", "images/sec08_01.jpeg"],
  ["images/castle-01.jpeg", "images/sec09_01.jpeg"],
  ["images/castle-02.jpeg", "images/sec09_02.jpeg"],
  ["images/castle-03.jpeg", "images/sec09_03.jpeg"],
  ["images/castle-04.jpeg", "images/sec09_04.jpeg"],
  ["images/hangout-01.jpeg", "images/sec10_01.jpeg"],
  ["images/hangout-02.jpeg", "images/sec10_02.jpeg"],
  ["images/museum-01.jpg", "images/sec11_01.jpg"],
  ["images/museum-02.jpeg", "images/sec11_02.jpeg"],
  ["images/museum_cafe-01.jpeg", "images/sec12_01.jpeg"],
  ["images/station-02.jpg", "images/sec13_01.jpg"],
];

for (const [from, to] of replacements) {
  html = html.split(from).join(to);
}

await fs.writeFile(file, html, "utf8");
console.log("updated image names");
