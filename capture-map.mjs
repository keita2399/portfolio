import { chromium } from 'playwright-core';

const URL = 'https://shokunin-map-ts.vercel.app';

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  locale: 'ja-JP',
});
const page = await context.newPage();

// Login
await page.goto(`${URL}/user/login`);
await page.waitForLoadState('networkidle');
await page.fill('input[type="email"]', 'keita2399@gmail.com');
await page.fill('input[type="password"]', 'Shokunin@2024');
await page.click('button[type="submit"]');
try {
  await page.waitForURL(url => !url.toString().includes('/login'), { timeout: 15000 });
} catch {}
await page.waitForLoadState('networkidle');
await page.waitForTimeout(2000);
console.log('Logged in:', page.url());

// Navigate to home
await page.goto(`${URL}/`);
await page.waitForLoadState('networkidle');
await page.waitForTimeout(5000);

// Scroll down to where the map is
await page.evaluate(() => window.scrollTo(0, 500));
await page.waitForTimeout(8000);  // Wait for map tiles

// Take screenshot showing map area
await page.screenshot({ path: 'public/thumbnails/btob-matching/03-home-map.png' });
console.log('Map screenshot saved');

// Also try fullPage for reference
await page.screenshot({ path: 'test-fullpage-home.png', fullPage: true });
console.log('Full page saved');

await browser.close();
console.log('Done');
