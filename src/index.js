const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    await page.waitForSelector('.gsfi');
    await page.type('.gsfi', 'nodejs');
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown',{delay:450});
    await page.keyboard.press('ArrowDown',{delay:450});
    await page.keyboard.press('ArrowDown',{delay:450});
    await page.keyboard.press('Enter', { delay: 150 });


    //await browser.close();
})();