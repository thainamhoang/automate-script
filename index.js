const puppeteer = require("puppeteer");

const MAJOR = "CSCI";
const COURSE = "CSCI 111 B1";
const username = "hoangnt";
const password = "123dpmc456aA@";

(async () => {
  try {
    console.log("Script starts running...");
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    page.setDefaultTimeout(0);
    const navigationPromise = page.waitForNavigation();

    /* LOAD PAGE & LOGIN PRESSED */
    await page.setViewport({ width: 1200, height: 1000 });
    await page.goto("http://portal.beloit.edu/", {
      waitUntil: "networkidle2",
    });
    await page.click("#siteNavBar_ctl00_btnLogin");

    /* LOGIN DATA */
    await page.waitFor("input[name=branding-username]");
    await page.waitFor("input[name=branding-password]");
    await page.type("input[name=branding-username]", username, { delay: 100 });
    await page.type("input[name=branding-password]", password, { delay: 100 });
    await page.keyboard.press("Enter");
    await navigationPromise;

    /* CHOOSE ACADEMIC */
    const academicsTag = 'a[href="/ICS/Academics/"]';
    await page.waitFor(academicsTag);
    await page.click(academicsTag);

    const registrationTag = 'a[href="/ICS/Academics/CoursesRegistration.jnz"]';
    await page.waitFor(registrationTag);
    await page.click(registrationTag);

    /* ADD/DROP COURSES */
    const addDropTag = 'a[id="pg1_V_lnkAddDrop"]';
    await page.waitFor(addDropTag);
    await page.click(addDropTag);

    // FIXME: Fix this shit
    const majorTag = 'select[id="pg0_V_tabSearch_ddlDept"]';
    await page.waitFor(majorTag);
    await page.select(majorTag, MAJOR);
    await page.waitFor(500);
    await page.waitFor('input[name="pg0$V$tabSearch$btnSearch"]');
    await page.click('input[name="pg0$V$tabSearch$btnSearch"]');

    // FIXME: Traverse through row
    await navigationPromise;
    await page.waitFor("#pg0_V_dgCourses");
    await page.waitFor("#pg0_V_dgCourses > tbody");

    // await page.waitFor("#pg0_V_dgCourses_sec2_row1_lnkCourse");
    // await page.click("#pg0_V_dgCourses_sec2_row1_lnkCourse");

    // await browser.close();
    console.log("Successfully choosing course!!!");
  } catch (e) {
    console.log(`ERROR: ${JSON.stringify(e, null, 2)}`);
  }
})();
