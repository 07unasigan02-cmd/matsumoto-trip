import fs from "node:fs/promises";
import path from "node:path";

const file = path.join(process.cwd(), "index.html");
let html = await fs.readFile(file, "utf8");

const replaceAll = (from, to) => {
  html = html.split(from).join(to);
};

html = html.replace(/\s*<img src=""[^>]*>\r?\n/g, "\n");
replaceAll("images/nakamachi-03.jpeg", "");
replaceAll("images/castle-05.jpeg", "");
replaceAll("images/museum-03.jpeg", "");
replaceAll("images/museum_cafe-02.jpeg", "");

html = html.replace(
  /<article class="story story-reverse">[\s\S]*?<p class="story-index">10<\/p>[\s\S]*?<figure class="story-media">[\s\S]*?<img src="images\/sec10_01\.jpeg"[\s\S]*?<\/figure>[\s\S]*?<\/article>/,
  `<article class="story story-reverse">
        <figure class="story-media story-gallery">
          <img src="images/sec10_01.jpeg" alt="Hangout Coffeeでのランチのイメージ">
          <img src="images/sec10_02.jpeg" alt="コーヒーや食事をゆっくり楽しんだ時間">
        </figure>
        <div class="story-body">
          <p class="story-index">10</p>
          <p class="story-time">LUNCH</p>
          <h3>Hangout Coffee縺ｧ繝ｩ繝ｳ繝・/h3>
          <p>
            證代￥縺ｦ繧ｵ繧ｯ繝・→鬟溘∋繧峨ｌ繧九ｂ縺ｮ縺後＞縺・√→縺・≧豬√ｌ縺ｧ Hangout Coffee 縺ｸ陦後▲縺溘・            繝ｭ繝ｼ繧ｹ繝医ン繝ｼ繝輔し繝ｳ繝峨・繝舌ご繝・ヨ繧堤┥縺・※縺上ｌ縺ｦ縺・※縲・ｦ吶・縺励＆縺後＠縺｣縺九ｊ遶九▲縺ｦ縺・◆縲・            蠎怜・繧り誠縺｡逹縺・※縺・※縲∵ｭｩ縺咲夢繧後◆菴薙↓縺｡繧・≧縺ｩ縺・＞莨第・縺ｫ縺ｪ縺｣縺溘・          </p>
        </div>
      </article>`
);

html = html.replace(
  /<article class="story story-reverse">[\s\S]*?<p class="story-index">04-1<\/p>[\s\S]*?<figure class="story-media story-gallery">[\s\S]*?<img src="images\/sec04-1_02\.jpeg"[\s\S]*?<\/figure>[\s\S]*?<\/article>/,
  `<article class="story story-reverse">
        <figure class="story-media story-gallery">
          <img src="images/sec04-1_01.jpeg" alt="仲町通りの蔵の景色">
          <img src="images/sec04-1_02.jpeg" alt="アクセサリー店で見つけたもの">
        </figure>
        <div class="story-body">
          <p class="story-index">04-1</p>
          <p class="story-time">SLOW WALK</p>
          <h3>莉ｲ逕ｺ騾壹ｊ繧偵ｆ縺｣縺上ｊ</h3>
          <p>
            郢ｩ謇矩壹ｊ縺ｮ縺ゅ→縲√◎縺ｮ縺ｾ縺ｾ莉ｲ逕ｺ騾壹ｊ縺ｸ縲り鳩縺ｮ荳ｦ縺ｶ髮ｰ蝗ｲ豌励′縺吶＃縺剰誠縺｡逹縺・※縺・※縲∵ｭｩ縺・※縺・ｋ縺縺代〒豌玲戟縺｡縺悟ｰ代＠繧・ｋ繧縲・            繧｢繧ｯ繧ｻ繧ｵ繝ｪ繝ｼ縺ｮ縺雁ｺ励ｒ縺ｮ縺槭＞縺溘ｊ縲√ｊ繧薙＃繧ｸ繝･繝ｼ繧ｹ繧帝｣ｲ繧薙□繧翫・比ｸｭ縺ｧ隕九▽縺代◆繧ｫ繝輔ぉ縺ｫ蟇・▲縺溘ｊ縺励※縲∵ｰ励▼縺・◆繧峨°縺ｪ繧翫ｆ縺｣縺上ｊ驕弱＃縺励※縺・◆縲・            縺薙≧縺・≧縲∽ｽ輔°繧定ｩｰ繧∬ｾｼ縺ｿ縺吶℃縺ｪ縺・ｯ・ｊ驕薙′縺・■縺ｰ繧楢ｨ俶・縺ｫ谿九ｋ豌励′縺吶ｋ縲・          </p>
        </div>
      </article>`
);

html = html.replace(
  /<article class="story story-wide">[\s\S]*?<p class="story-index">11<\/p>[\s\S]*?<figure class="story-media story-media-tall story-gallery">[\s\S]*?<img src="images\/sec11_02\.jpeg"[\s\S]*?<\/figure>[\s\S]*?<\/article>/,
  `<article class="story story-wide">
        <div class="story-body">
          <p class="story-index">11</p>
          <p class="story-time">MUSEUM</p>
          <h3>譚ｾ譛ｬ蟶らｾ手｡馴､ｨ縺ｸ</h3>
          <p>
            譚ｾ譛ｬ蟶らｾ手｡馴､ｨ縺ｧ縺ｯ縲√え繧ｸ繧ｧ繝ｼ繝後・繝悶・繝繝ｳ螻輔ｒ髑題ｳ槭・            繝｢繝阪・蟶ｫ蛹縺ｨ縺励※遏･繧峨ｌ繧倶ｺｺ縺ｧ縲∵ｵｷ縺ｮ逕ｻ螳ｶ縺ｨ縺励※縺ｮ菴懷刀縺悟､壹＞荳譁ｹ縲・            譛ｬ莠ｺ縺ｯ莠ｺ迚ｩ繧・ｵｷ莉･螟悶・繝・・繝槭ｂ謠上″縺溘°縺｣縺溘ｉ縺励＞縲・            縺昴・繧ｺ繝ｬ縺後∫判螳ｶ縺ｨ縺励※縺ｮ逕溘″縺･繧峨＆縺ｾ縺ｧ莨昴ｏ縺｣縺ｦ縺阪◆縲・          </p>
        </div>
        <figure class="story-media story-media-tall story-gallery">
          <img src="images/sec11_01.jpg" alt="螻慕､ｺ螳､縺ｫ蜈･縺｣縺溘→縺阪・遨ｺ豌・>
          <img src="images/sec11_02.jpeg" alt="邨ｵ縺ｮ蜑阪〒遶九■豁｢縺ｾ縺｣縺溽椪髢・>
        </figure>
      </article>`
);

html = html.replace(
  /<article class="story story-reverse">[\s\S]*?<p class="story-index">12<\/p>[\s\S]*?<figure class="story-media story-gallery">[\s\S]*?<img src="images\/sec12_01\.jpeg"[\s\S]*?<\/figure>[\s\S]*?<\/article>/,
  `<article class="story story-reverse">
        <figure class="story-media story-gallery">
          <img src="images/sec12_01.jpeg" alt="鄒手｡馴､ｨ菴ｵ險ｭ繧ｫ繝輔ぉ縺ｧ縺ｲ縺ｨ諱ｯ縺､縺・◆荳譫・>
        </figure>
        <div class="story-body">
          <p class="story-index">12</p>
          <p class="story-time">CAFE</p>
          <h3>菴ｵ險ｭ繧ｫ繝輔ぉ縺ｧ莨第・</h3>
          <p>
            蟆代＠逍ｲ繧後◆縺ｮ縺ｧ縲∽ｽｵ險ｭ繧ｫ繝輔ぉ縺ｧ縺ｲ縺ｨ莨代∩縺励◆縲・            閾ｪ螳ｶ陬ｽ繝√Ε繧､繝ｩ繝・ｒ豕ｨ譁・＠縺ｦ縲√ｂ縺・ｰ代＠縺縺醍ｾ手｡馴､ｨ縺ｮ菴咎渊縺ｫ豬ｸ縺｣縺溘・            縺昴＠縺ｦ縲・8:40逋ｺ縺ｮ縺ゅ★縺輔ｒ荳譛ｬ譌ｩ繧√ｋ縺九←縺・°繧定・∴蟋九ａ縺溘・          </p>
        </div>
      </article>`
);

html = html.replace(
  /<article class="story story-wide">[\s\S]*?<p class="story-index">09<\/p>[\s\S]*?<figure class="story-media story-media-short story-gallery">[\s\S]*?<img src="images\/sec09_04\.jpeg"[\s\S]*?<img src="images\/castle-05\.jpeg"[\s\S]*?<\/figure>[\s\S]*?<\/article>/,
  `<article class="story story-wide">
        <div class="story-body">
          <p class="story-index">09</p>
          <p class="story-time">CASTLE</p>
          <h3>譚ｾ譛ｬ蝓弱∈</h3>
          <p>
            譚ｾ譛ｬ蝓弱ｒ隕九↓陦後▲縺溘・            霑代￥縺ｾ縺ｧ陦後￥縺ｨ縲√ｄ縺ｯ繧翫％縺ｮ陦励・荳ｭ蠢・↓縺・ｋ諢溘§縺後＠縺溘・            驩・ｲ縺ｮ螻慕､ｺ繧定ｦ九※縺九ｉ螟ｩ螳磯魅縺ｫ繧ら匳縺｣縺ｦ縲∽ｸ翫°繧芽｡励ｒ逵ｺ繧√◆縲・            隕九ｋ蜑阪→隕九◆縺ゅ→縺ｧ縲∵收譛ｬ蝓弱・霈ｪ驛ｭ縺悟ｰ代＠螟峨ｏ繧九ｈ縺・↑譎る俣縺縺ｯ縺溘・          </p>
        </div>
        <figure class="story-media story-media-short story-gallery">
          <img src="images/sec09_01.jpeg" alt="譚ｾ譛ｬ蝓弱・蜈ｨ譎ｯ">
          <img src="images/sec09_02.jpeg" alt="蝓弱∈霑代▼縺・※縺・￥驕薙・繧・>
          <img src="images/sec09_03.jpeg" alt="驩・ｲ縺ｮ螻慕､ｺ繧定ｦ九◆縺ｨ縺阪・蜊ｰ雎｡">
          <img src="images/sec09_04.jpeg" alt="螟ｩ螳磯魅縺ｸ荳翫′繧矩比ｸｭ縺ｮ遨ｺ豌・>
        </figure>
      </article>`
);

await fs.writeFile(file, html, "utf8");
console.log("normalized image sections");
