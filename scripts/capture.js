const { chromium } = require('playwright');
const path = require('path');

(async () => {

const browser = await chromium.launch({
headless: true
});

const context = await browser.newContext({
userAgent:
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36'
});

const page = await context.newPage();

await page.setViewportSize({
width: 1400,
height: 2200
});

await page.goto(
'https://marine.meteoconsult.co.uk/marine-weather/weather-forecasts/marina-698/weather-forecast-marina-di-valletta-monday',
{
waitUntil: 'networkidle',
timeout: 60000
}
);

await page.screenshot({
path: path.join(__dirname, '../screenshots/valletta-monday.png'),
fullPage: true
});

await browser.close();

})();
