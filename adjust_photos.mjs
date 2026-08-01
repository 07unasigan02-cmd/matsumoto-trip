import fs from "node:fs/promises";
import path from "node:path";

const file = path.join(process.cwd(), "index.html");
let s = await fs.readFile(file, "utf8");

const replace = (re, value) => {
  s = s.replace(re, value);
};

replace(
  /<div class="carousel-track">[\s\S]*?<button class="carousel-button carousel-button-prev"/,
  `<div class="carousel-track">
        <img class="carousel-slide is-active" src="images/station-01.jpg" alt="あずさの車内">
        <img class="carousel-slide" src="images/nawate-01.jpg" alt="縄手通りの風景">
        <img class="carousel-slide" src="images/castle-01.jpeg" alt="松本城の空気">
      </div>
      <button class="carousel-button carousel-button-prev"`
);

replace(
  /(<article class="story">[\s\S]*?<p class="story-index">03<\/p>[\s\S]*?)<figure class="story-media story-gallery">[\s\S]*?<\/figure>([\s\S]*?<\/article>)/,
  `$1<figure class="story-media story-gallery">
          <img src="images/nawate-01.jpg" alt="縄手通りの商店街">
          <img src="images/nawate-02.jpeg" alt="川で涼んだときの風景">
          <img src="images/nawate-03.jpeg" alt="通りの奥の気配">
        </figure>$2`
);

replace(
  /(<article class="story story-reverse">[\s\S]*?<p class="story-index">04<\/p>[\s\S]*?)<figure class="story-media">[\s\S]*?<\/figure>([\s\S]*?<\/article>)/,
  `$1<figure class="story-media story-gallery">
          <img src="images/nakamachi-01.jpeg" alt="中町通りを歩くイメージ">
          <img src="images/nakamachi-02.jpeg" alt="中町通りの蔵">
          <img src="images/nakamachi-03.jpeg" alt="アクセサリー店をのぞく感じ">
        </figure>$2`
);

replace(
  /(<article class="story">[\s\S]*?<p class="story-index">04-2<\/p>[\s\S]*?)<figure class="story-media story-gallery">[\s\S]*?<\/figure>([\s\S]*?<\/article>)/,
  `$1<figure class="story-media story-gallery">
          <img src="images/nakamachi-04.jpeg" alt="りんごジュースを見つけた瞬間">
          <img src="images/nakamachi-05.jpeg" alt="カフェでひと息つく時間">
        </figure>$2`
);

replace(
  /(<article class="story story-wide">[\s\S]*?<p class="story-index">05<\/p>[\s\S]*?)<figure class="story-media story-media-tall story-gallery">[\s\S]*?<\/figure>([\s\S]*?<\/article>)/,
  `$1<figure class="story-media story-media-tall story-gallery">
          <img src="images/brewery-01.jpeg" alt="松本ブルワリータップルームの外観">
          <img src="images/brewery-02.jpeg" alt="ブルワリーに向かう途中の記憶">
          <img src="images/brewery-03.jpeg" alt="マダムや女性との一期一会">
          <img src="images/brewery-04.jpeg" alt="一杯のビールを楽しむ時間">
        </figure>$2`
);

replace(
  /(<article class="story story-wide">[\s\S]*?<p class="story-index">09<\/p>[\s\S]*?)<figure class="story-media story-media-short story-gallery">[\s\S]*?<\/figure>([\s\S]*?<\/article>)/,
  `$1<figure class="story-media story-media-short story-gallery">
          <img src="images/castle-01.jpeg" alt="松本城の全景">
          <img src="images/castle-02.jpeg" alt="城へ近づいていく道のり">
          <img src="images/castle-03.jpeg" alt="鉄砲の展示を見たときの印象">
          <img src="images/castle-04.jpeg" alt="天守閣へ上がる途中の空気">
          <img src="images/castle-05.jpeg" alt="天守閣から見た松本の街">
        </figure>$2`
);

replace(
  /(<article class="story story-reverse">[\s\S]*?<p class="story-index">10<\/p>[\s\S]*?)<figure class="story-media">[\s\S]*?<\/figure>([\s\S]*?<\/article>)/,
  `$1<figure class="story-media story-gallery">
          <img src="images/hangout-01.jpeg" alt="Hangout Coffeeの店内">
          <img src="images/hangout-02.jpeg" alt="ランチを待っている時間">
          <img src="images/hangout-03.jpeg" alt="ローストビーフサンドを食べた瞬間">
        </figure>$2`
);

replace(
  /(<article class="story story-wide">[\s\S]*?<p class="story-index">11<\/p>[\s\S]*?)<figure class="story-media story-media-tall story-gallery">[\s\S]*?<\/figure>([\s\S]*?<\/article>)/,
  `$1<figure class="story-media story-media-tall story-gallery">
          <img src="images/museum-01.jpg" alt="展示室に入ったときの空気">
          <img src="images/museum-02.jpeg" alt="絵の前で立ち止まった瞬間">
          <img src="images/museum-03.jpeg" alt="作品の余韻が残る歩廊">
        </figure>$2`
);

replace(
  /(<article class="story story-reverse">[\s\S]*?<p class="story-index">12<\/p>[\s\S]*?)<figure class="story-media">[\s\S]*?<\/figure>([\s\S]*?<\/article>)/,
  `$1<figure class="story-media story-gallery">
          <img src="images/museum_cafe-01.jpeg" alt="併設カフェの席">
          <img src="images/museum_cafe-02.jpeg" alt="チャイラテとチーズケーキ">
        </figure>$2`
);

replace(
  /(<article class="story story-wide">[\s\S]*?<p class="story-index">13<\/p>[\s\S]*?)<figure class="story-media story-media-short">[\s\S]*?<\/figure>([\s\S]*?<\/article>)/,
  `$1<figure class="story-media story-media-short">
          <img src="images/station-02.jpg" alt="帰りのあずさを思わせる車窓イメージ">
        </figure>$2`
);

await fs.writeFile(file, s, "utf8");
console.log("photo sections updated");
