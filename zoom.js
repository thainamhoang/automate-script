const puppeteer = require("puppeteer");

const email = "clonehoangnt@gmail.com";
const password = "123dpmc456aA@";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  page.setDefaultTimeout(0);
  const navigationPromise = page.waitForNavigation();

  await page.setViewport({ width: 1200, height: 720 });
  await page.goto("https://zoom.us/signin", {
    waitUntil: "networkidle2",
  });

  /* BYPASS USING LOGIN WITH FACEBOOK */
  await page.click(
    "#login > div > div:nth-child(2) > div > div.form-group > a.login-btn.login-btn-facebook"
  );
  await page.waitFor('input[id="email"]');
  await page.waitFor('input[id="pass"]');
  await page.type('input[id="email"]', email);
  await page.waitFor(500);
  await page.type('input[id="pass"]', password);
  await page.waitFor(500);
  await page.keyboard.press("Enter");
  await navigationPromise;
})();
