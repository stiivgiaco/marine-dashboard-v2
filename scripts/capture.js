const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({
    headless: true
  });

  const page = await browser.newPage({
    viewport: {
      width: 1400,
      height: 2200
    }
  });

  await page.goto(
    'https://marine.meteoconsult.co.uk/marine-weather/weather-forecasts/marina-698/weather-forecast-marina-di-valletta-monday',
    {
      waitUntil: 'networkidle'
    }
  );

  await page.screenshot({
    path: path.join(__dirname, '../screenshots/valletta-monday.png'),
    fullPage: true
  });

  await browser.close();
})();
