const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

const data = [
  {
    _text: "Kpop Time GAMES",
    _title: "Kpop Time GAMES",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCtvysKMl5BVRaotTGBDTs0Q",
  },
  {
    _text: "QrewKicks",
    _title: "QrewKicks",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCtxmJNeRRAp0TqZcTpgiJqQ",
  },
  {
    _text: "chaesthetic",
    _title: "chaesthetic",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCtykcWBcC-6P8ZeeRGDSwTw",
  },
  {
    _text: "Cryaotic",
    _title: "Cryaotic",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCu2yrDg7wROzElRGoLQH82A",
  },
  {
    _text: "Erik Conover",
    _title: "Erik Conover",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCu8ucb1LRJd1gwwXutYDgTg",
  },
  {
    _text: "Aden Films",
    _title: "Aden Films",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCu9g5OmzcCpcJnmSYyHnIVw",
  },
  {
    _text: "Kaan Akdogan",
    _title: "Kaan Akdogan",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCuBXJ6oCIQ2RU96TwE0G4Ow",
  },
  {
    _text: "Kkcomics",
    _title: "Kkcomics",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCuIfxpaaOQUpWbje6LjoONw",
  },
  {
    _text: "ARG",
    _title: "ARG",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCuOCAtVEAWbMJMq8ZT1bycg",
  },
  {
    _text: "ConnorFranta",
    _title: "ConnorFranta",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCudeRz9YntRrmKBSqnHyKGQ",
  },
  {
    _text: "DanAndPhilGAMES",
    _title: "DanAndPhilGAMES",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCuhwvTYFvVZjyBVXc9T7CrA",
  },
  {
    _text: "Bajan Canadian",
    _title: "Bajan Canadian",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCuj1Ms9_LCsQPSJ4p8nvOVA",
  },
  {
    _text: "CNN",
    _title: "CNN",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCupvZG-5ko_eiXAupbDfxWw",
  },
  {
    _text: "caskerbox",
    _title: "caskerbox",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCusfiBpyMyo84DeIYTfJsKg",
  },
  {
    _text: "mihirthedemon03",
    _title: "mihirthedemon03",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCvBo_Wb53VcQ9XTszLCoMcg",
  },
  {
    _text: "Marvel Entertainment",
    _title: "Marvel Entertainment",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCvC4D8onUfXzvjTOM-dBfEA",
  },
  {
    _text: "Quirkology",
    _title: "Quirkology",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCvGMGQC8gNkd4gwxSbABIlw",
  },
  {
    _text: "baracksdubs",
    _title: "baracksdubs",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCvHn0MTf40rdEQu6Y2yNL5g",
  },
  {
    _text: "Yes Theory",
    _title: "Yes Theory",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCvK4bOhULCpmLabd2pDMtnA",
  },
  {
    _text: "Sky VS Gaming",
    _title: "Sky VS Gaming",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCvMQn4d_RFWYShDBCbeuuxw",
  },
  {
    _text: "The Review Spot",
    _title: "The Review Spot",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCvMfdjoxbK2GGTK5qh3HKpQ",
  },
  {
    _text: "Tyler Oakley",
    _title: "Tyler Oakley",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCvVuqRzGVqRlmZYlTf99M_w",
  },
  {
    _text: "Minecraft4orDummies",
    _title: "Minecraft4orDummies",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCvgrhOUhKMMke9LUPVzVhjw",
  },
  {
    _text: "SYBO TV",
    _title: "SYBO TV",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCvyN-kMH-IrXzWNeZaQ_XaQ",
  },
  {
    _text: "Llama Arts",
    _title: "Llama Arts",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCw-WWK1U5Nlds-ydZNCrkcg",
  },
  {
    _text: "Mars Rising",
    _title: "Mars Rising",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCw01n_EcTet_anW2Qq4nzCA",
  },
  {
    _text: "LazarBeam",
    _title: "LazarBeam",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCw1SQ6QRRtfAhrN_cjkrOgA",
  },
  {
    _text: "1MILLION Dance Studio",
    _title: "1MILLION Dance Studio",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCw8ZhLPdQ0u_Y-TLKd61hGA",
  },
  {
    _text: "HyunBreadie",
    _title: "HyunBreadie",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCwEwjtOvv0FfT1ivxKc1hoQ",
  },
  {
    _text: "Bigbst4tz2",
    _title: "Bigbst4tz2",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCwFEjtz9pk4xMOiT4lSi7sQ",
  },
  {
    _text: "Jalen & Jacoby",
    _title: "Jalen & Jacoby",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCwLr_DYKR8aS0k4r8bB5I5Q",
  },
  {
    _text: "HuyMeProductions",
    _title: "HuyMeProductions",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCwU3etbbD0zWgPtdDdCTJSw",
  },
  {
    _text: "The Daily Show with Trevor Noah",
    _title: "The Daily Show with Trevor Noah",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCwWhs_6x42TyRM4Wstoq8HA",
  },
  {
    _text: "1theK (원더케이)",
    _title: "1theK (원더케이)",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCweOkPb1wVVH0Q0Tlj4a5Pw",
  },
  {
    _text: "Stu Crew",
    _title: "Stu Crew",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCwjbNUkqOWL71aOI0DzV1bg",
  },
  {
    _text: "Vsauce3",
    _title: "Vsauce3",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCwmFOfFuvRPI112vR5DNnrA",
  },
  {
    _text: "Doraemon emon",
    _title: "Doraemon emon",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCxHYC317pFgPxcGXuocxL3A",
  },
  {
    _text: "Kênh Bóng Đá",
    _title: "Kênh Bóng Đá",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCxSeZz1493OgbrplURZtihA",
  },
  {
    _text: "archive film",
    _title: "archive film",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCxlz_gBCyFE5vO1W4E4hI1w",
  },
  {
    _text: "crazyPT",
    _title: "crazyPT",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCxn3rxY2cZrhbW5wCfhBgSQ",
  },
  {
    _text: "Community",
    _title: "Community",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCxwQGH0aBtNQFOgXlbDjNvw",
  },
  {
    _text: "MCPEMike",
    _title: "MCPEMike",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCxwV2D_vaQe0kJ_rh11BSxw",
  },
  {
    _text: "Brahma",
    _title: "Brahma",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCxxgM_A9UTdzrYFeNFMttGw",
  },
  {
    _text: "Tài Tiếu Tuyệt",
    _title: "Tài Tiếu Tuyệt",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCy4AD4vcHx0LHRf7K1KpChg",
  },
  {
    _text: "Beyond Wrestling",
    _title: "Beyond Wrestling",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCy91SdPgEDZnCHHm5ag32yQ",
  },
  {
    _text: "Lindsey Stirling",
    _title: "Lindsey Stirling",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCyC_4jvPzLiSkJkLIkA7B8g",
  },
  {
    _text: "Genius",
    _title: "Genius",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCyFZMEnm1il5Wv3a6tPscbA",
  },
  {
    _text: "지현꿍",
    _title: "지현꿍",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCyG7zAV_2JlPnxhwDxZN6sA",
  },
  {
    _text: "Frugal Aesthetic",
    _title: "Frugal Aesthetic",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCyL0RJe41itDFjd70KKZIZQ",
  },
  {
    _text: "DeStorm Power",
    _title: "DeStorm Power",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCyMbSEhV3uamzZNBp16Ykpg",
  },
  {
    _text: "Shut Your Trap | Underground Trap & Bass Music",
    _title: "Shut Your Trap | Underground Trap & Bass Music",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCyRj2SMtEx4ELKFqep-VCHw",
  },
  {
    _text: "Hoopmixtape",
    _title: "Hoopmixtape",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCyUsxKtjdYnt8HOQ0i0sVeA",
  },
  {
    _text: "The Grumpy Nerd",
    _title: "The Grumpy Nerd",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCyYNgc_jByHscWGYv_eJqpQ",
  },
  {
    _text: "CavemanFilms",
    _title: "CavemanFilms",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCyZA5Ysa33gA89sCdWJQojQ",
  },
  {
    _text: "MoreAliA",
    _title: "MoreAliA",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCyeVfsThIHM_mEZq7YXIQSQ",
  },
  {
    _text: "Doraemon_Nobita",
    _title: "Doraemon_Nobita",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCygxMLdAVaeO8-5y0kfjZuw",
  },
  {
    _text: "새송 Saesong",
    _title: "새송 Saesong",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCyvqwwpQYUHfQhm6g4UHRsQ",
  },
  {
    _text: "Kênh Giải Trí Teen",
    _title: "Kênh Giải Trí Teen",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCz6We0O0myCWCx9n-_2Cegw",
  },
  {
    _text: "Harley Morenstein",
    _title: "Harley Morenstein",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCz981RxgS-A2ID99W8wXzTA",
  },
  {
    _text: "GiveBackFilms",
    _title: "GiveBackFilms",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCzAuEUMRcsWZtSpVk3QwKKA",
  },
  {
    _text: "Trấn Thành Official",
    _title: "Trấn Thành Official",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCzCWbSd0q6CFpemIw3mnAxw",
  },
  {
    _text: "QUÝ LÊ 16",
    _title: "QUÝ LÊ 16",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCzEjxZjhrNtenGNoEQTGnFA",
  },
  {
    _text: "Rooster Teeth",
    _title: "Rooster Teeth",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCzH3iADRIq1IJlIXjfNgTpA",
  },
  {
    _text: "TWICE",
    _title: "TWICE",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCzgxx_DM2Dcb9Y1spb9mUJA",
  },
  {
    _text: "Poreotics",
    _title: "Poreotics",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCzigR1AXJhACZFa3EPdkuhQ",
  },
  {
    _text: "Good Mythical MORE",
    _title: "Good Mythical MORE",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCzpCc5n9hqiVC7HhPwcIKEg",
  },
  {
    _text: "Jack's Movie Reviews",
    _title: "Jack's Movie Reviews",
    _type: "rss",
    _xmlUrl:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCzpVBvuIfhncmI7JDwBCOyg",
  },
];

const xmlUrlList = Array.isArray(data) && data.map(({ _xmlUrl }) => _xmlUrl);
const title = Array.isArray(data) && data.map(({ _text }) => _text);
const i = 51; // index of = before the channel id
const channelId = [];
for (const url of xmlUrlList) {
  channelId.push(url.slice(i + 1));
}

console.log(channelId.length);

const EMAIL = "duclamnguyen2801";
const PASSWORD = "ditmehongduc";

puppeteer.use(StealthPlugin());
puppeteer.launch({ headless: false }).then(async (browser) => {
  try {
    console.log("Running test...");
    const context = browser.defaultBrowserContext();
    context.overridePermissions("https://www.youtube.com", [
      "geolocation",
      "notifications",
    ]);
    const page = await browser.newPage();
    const navigationPromise = page.waitForNavigation();
    page.setDefaultNavigationTimeout(0);
    // await page.setViewport({ width: 1200, height: 720 });
    await page.goto("https://accounts.google.com/signin");
    await navigationPromise;

    await page.waitFor('input[type="email"]');
    await page.type('input[type="email"]', EMAIL);
    await page.waitFor(1000);
    await page.keyboard.press("Enter");

    await navigationPromise;
    await page.waitFor('input[name="password"]');
    await page.waitFor(500);
    await page.type('input[name="password"]', PASSWORD);
    await page.waitFor(500);
    await page.keyboard.press("Enter");
    await navigationPromise;
    await page.waitFor(1000);

    await page.goto("https://www.youtube.com");
    await navigationPromise;

    await page.waitFor('input[id="search"]');
    await page.type('input[id="search"]', "Marvel Entertainment");
    await page.keyboard.press("Enter");
    await navigationPromise;

    for (const id of channelId) {
      await page.goto(`https://youtube.com/channel/${id}`);
      await navigationPromise;
      await page.waitFor("#channel-name");
      const text = await page.evaluate(() => {
        const anchor = document.querySelector("#channel-name");
        return anchor.textContent;
      });
      await page.mouse.click(1000, 300, { button: "left" });
      let print = JSON.stringify(text);
      print = print.slice(26);
      print = print.slice(0, 40).replace(/\s+/g, "");
      console.log(`Subscribed to ${print.toUpperCase()}`);
      await navigationPromise;
      await page.waitFor(500);
    }

    await browser.close();
  } catch (e) {
    console.log(`Error raising: ${JSON.stringify(e, null, 2)}`);
  }
});
