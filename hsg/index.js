const puppeteer = require('puppeteer-extra');
const { executablePath } = require('puppeteer');

const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const fs = require('fs').promises;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

puppeteer
    .use(StealthPlugin())
    .launch({
        headless: true,
        executablePath: executablePath(),
    })
    .then(async (browser) => {
        console.log('Running tests..');
        const page = await browser.newPage();
        page.setDefaultTimeout(0);

        /* LOAD PAGE */
        await page.setViewport({ width: 1200, height: 1000 });

        // Load Cookies
        await page.goto('https://diemthi.hcm.edu.vn/', {
            waitUntil: 'networkidle2',
        });
        let i = 1;
        while (i < 370) {
            await page.waitForSelector('input[id=SoBaoDanh]');
            filled = `02${('000' + i).slice(-3)}`;
            await page.type('input[id=SoBaoDanh]', filled, {
                delay: 100,
            });
            await sleep(100);
            await page.click('input[type=submit]');
            await sleep(200);
            await page.screenshot({
                path: `./hsg/${filled}.jpg`,
                type: 'jpeg',
                fullPage: true,
            });
            await sleep(200);
            i++;
            await page.goto('https://diemthi.hcm.edu.vn/', {
                waitUntil: 'networkidle2',
            });
        }
        console.log(`All done, check the screenshot. ✨`);
    });
