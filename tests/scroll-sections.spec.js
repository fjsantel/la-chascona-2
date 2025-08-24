const { test, expect } = require('@playwright/test');

test('capture both sections with scroll', async ({ page }) => {
  await page.goto('/');
  
  // Wait for page to load
  await page.waitForTimeout(1000);
  
  // Take screenshot of first section
  await page.screenshot({ 
    path: 'section-1-screenshot.png', 
    fullPage: false,
    clip: { x: 0, y: 0, width: 800, height: 600 }
  });
  
  // Scroll down to second section
  await page.evaluate(() => {
    window.scrollTo(0, 850);
  });
  
  // Wait for scroll to complete
  await page.waitForTimeout(1000);
  
  // Take screenshot of second section
  await page.screenshot({ 
    path: 'section-2-screenshot.png', 
    fullPage: false,
    clip: { x: 0, y: 0, width: 800, height: 600 }
  });
  
  // Take full page screenshot
  await page.screenshot({ 
    path: 'full-page-screenshot.png', 
    fullPage: true 
  });
  
  console.log('Screenshots saved: section-1, section-2, and full-page');
});