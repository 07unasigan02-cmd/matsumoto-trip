import fs from "node:fs/promises";
import path from "node:path";

const file = path.join(process.cwd(), "index.html");
let html = await fs.readFile(file, "utf8");

const target = /(<article class="story">[\s\S]*?<p class="story-index">04-2<\/p>[\s\S]*?<\/article>)/;
if (!target.test(html)) {
  throw new Error("Could not find the 04-2 article to anchor the restore.");
}

html = html.replace(
  target,
  `<article class="story">
        <figure class="story-media story-gallery">
          <img src="images/nawate-01.jpg" alt="繩手通りの入口">
          <img src="images/nawate-02.jpeg" alt="川辺で涼んでひと息ついたところ">
          <img src="images/nawate-03.jpeg" alt="繩手通りを歩きながら見つけた景色">
        </figure>
        <div class="story-body">
          <p class="story-index">03</p>
          <p class="story-time">WALK</p>
          <h3>繩手通りをぶらぶら</h3>
          <p>
            まずは繩手通りへ。のんびり歩いているだけなのに、川の風が意外とちゃんと涼しくて、途中でふらっと立ち止まった。
            せっかくなので川で少し涼んでみたら、これが思っていた以上に気持ちよかった。観光しているというより、町の空気の中にそのまま混ざっていく感じで、最初の散歩としてすごくよかった。
          </p>
        </div>
      </article>

      <article class="story story-reverse">
        <figure class="story-media story-gallery">
          <img src="images/nakamachi-01.jpeg" alt="仲町通りの蔵の景色">
          <img src="images/nakamachi-02.jpeg" alt="アクセサリー店で見つけたもの">
          <img src="images/nakamachi-03.jpeg" alt="仲町通りで飲んだりんごジュース">
        </figure>
        <div class="story-body">
          <p class="story-index">04-1</p>
          <p class="story-time">SLOW WALK</p>
          <h3>仲町通りをゆっくり</h3>
          <p>
            繩手通りのあと、そのまま仲町通りへ。蔵の並ぶ雰囲気がすごく落ち着いていて、歩いているだけで気持ちが少しゆるむ。
            アクセサリーのお店をのぞいたり、りんごジュースを飲んだり、途中で見つけたカフェに寄ったりして、気づいたらかなりゆっくり過ごしていた。
            こういう、何かを詰め込みすぎない寄り道がいちばん記憶に残る気がする。
          </p>
        </div>
      </article>

      $1`
);

await fs.writeFile(file, html, "utf8");
console.log("restored sections 03 and 04-1");
