const puppeteer = require('puppeteer');

const main = async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
    });

    await page.goto('https://unsplash.com');
    await page.screenshot({path: 'unsplash.png'});

    await browser.close();
}

main();