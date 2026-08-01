import fs from "node:fs/promises";
import path from "node:path";

const file = path.join(process.cwd(), "index.html");
let html = await fs.readFile(file, "utf8");

const replaceOnce = (re, value) => {
  const next = html.replace(re, value);
  if (next === html) {
    throw new Error(`No match for pattern: ${re}`);
  }
  html = next;
};

replaceOnce(
  /<figure class="story-media story-gallery">\s*<img src="images\/nawate-01\.jpg"[\s\S]*?<img src="images\/nawate-03\.jpeg"[\s\S]*?<\/figure>/,
  `<figure class="story-media story-gallery">
          <img src="images/apple-01.jpeg" alt="りんごジュースを選んだ一枚">
          <img src="images/apple-02.jpeg" alt="アクセサリー店に立ち寄った一枚">
        </figure>`
);

replaceOnce(
  /<figure class="story-media">\s*<img src="images\/itoen-02\.jpeg"[\s\S]*?<\/figure>/,
  `<figure class="story-media story-gallery">
          <img src="images/brakefast-01.jpeg" alt="朝食のひと皿">
          <img src="images/brakefast-02.jpeg" alt="朝の食卓の空気感">
        </figure>`
);

replaceOnce(
  /<figure class="story-media story-gallery">\s*<img src="images\/hangout-01\.jpeg"[\s\S]*?<img src="images\/hangout-03\.jpeg"[\s\S]*?<\/figure>/,
  `<figure class="story-media story-gallery">
          <img src="images/museum_cafe-01.jpeg" alt="美術館併設カフェでひと息ついた一枚">
          <img src="images/museum_cafe-02.jpeg" alt="カフェで飲みものを待つ一枚">
        </figure>`
);

await fs.writeFile(file, html, "utf8");
console.log("updated section photos");
