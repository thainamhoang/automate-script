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
];

const xmlUrlList = Array.isArray(data) && data.map(({ _xmlUrl }) => _xmlUrl);
const title = Array.isArray(data) && data.map(({ _text }) => _text);
const i = 51; // index of = before the channel id
const channelId = [];
for (const url of xmlUrlList) {
  channelId.push(url.slice(i + 1));
}

console.log(channelId.length);

// FIXME: CHANGE EMAIL & PASSWORD
const EMAIL = "email@gmail.com";
const PASSWORD = "password";

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
