const puppeteer = require('puppeteer-extra');
const { executablePath } = require('puppeteer');

const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const fs = require('fs').promises;

const USERNAME = 'thuong.nguyen.210148@student.fulbright.edu.vn';
const PASSWORD = 'Iloveyou100%';
const URL = 'https://onestop.fulbright.edu.vn/s/';
const ENROLMENT_URL =
    'https://onestop.fulbright.edu.vn/s/course-offering/hed__Course_Offering__c/Default';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

puppeteer
    .use(StealthPlugin())
    .launch({
        headless: false,
        executablePath: executablePath(),
    })
    .then(async (browser) => {
        console.log('Running tests..');
        const page = await browser.newPage();
        page.setDefaultTimeout(0);

        /* LOAD PAGE */
        await page.setViewport({ width: 1200, height: 1000 });

        // Load Cookies
        const loadCookie = await fs.readFile('./cookies.json');
        const parseCookie = JSON.parse(loadCookie);
        await page.setCookie(...parseCookie);
        await sleep(1000);

        // await page.goto('https://login.microsoftonline.com/', {
        //     waitUntil: 'networkidle2',
        // });
        // Login
        // await page.waitForSelector('input[name=loginfmt]');
        // await page.type('input[name=loginfmt]', USERNAME, {
        //     delay: 100,
        // });
        // await page.keyboard.press('Enter');

        // await page.waitForSelector('input[name=passwd]');
        // await page.waitForTimeout(1000);
        // await page.type('input[name=passwd]', PASSWORD, {
        //     delay: 200,
        // });
        // await page.keyboard.press('Enter');

        // await sleep(15000);

        // const cookies = await page.cookies();
        // console.log(JSON.stringify(cookies, null, 2));
        // await fs.writeFile('./cookies.json', JSON.stringify(cookies, null, 2));

        // Go to enrolment
        await page.goto(ENROLMENT_URL, {
            waitUntil: 'networkidle2',
        });

        // Click signin
        await page.click('[class="slds-button slds-button_neutral"]');
        await page.waitForNavigation();

        await sleep(1000);

        // Course list
        await page.waitForSelector(
            '#CustomerPortalTemplate > div.cCenterPanel > div > div.slds-col--padded.contentRegion.comm-layout-column > div > div > div > div.slds-grid.listDisplays.safari-workaround-anchor > div > div.slds-col.slds-no-space.forceListViewManagerPrimaryDisplayManager > div.undefined.hideSelection.forceListViewManagerGrid > div.listViewContent.slds-table--header-fixed_container > div.uiScroller.scroller-wrapper.scroll-bidirectional.native > div > div > table > tbody > tr:nth-child(1) > th > span > a'
        );
        await page.click(
            '#CustomerPortalTemplate > div.cCenterPanel > div > div.slds-col--padded.contentRegion.comm-layout-column > div > div > div > div.slds-grid.listDisplays.safari-workaround-anchor > div > div.slds-col.slds-no-space.forceListViewManagerPrimaryDisplayManager > div.undefined.hideSelection.forceListViewManagerGrid > div.listViewContent.slds-table--header-fixed_container > div.uiScroller.scroller-wrapper.scroll-bidirectional.native > div > div > table > tbody > tr:nth-child(1) > th > span > a'
        );
        await page.waitForNavigation();

        console.log(`All done, check the screenshot. ✨`);
    });
