const { test, expect } = require('@playwright/test');

test('capture mobile layout sections', async ({ page }) => {
  // Set mobile viewport
  await page.setViewportSize({ width: 375, height: 812 });
  
  await page.goto('/');
  
  // Wait for page to load
  await page.waitForTimeout(1500);
  
  // Take screenshot of first section mobile
  await page.screenshot({ 
    path: 'mobile-section-1.png', 
    fullPage: false
  });
  
  // Scroll down to second section
  await page.evaluate(() => {
    window.scrollTo(0, 850);
  });
  
  // Wait for scroll to complete
  await page.waitForTimeout(1500);
  
  // Take screenshot of second section mobile
  await page.screenshot({ 
    path: 'mobile-section-2.png', 
    fullPage: false
  });
  
  // Take full page screenshot mobile
  await page.screenshot({ 
    path: 'mobile-full-page.png', 
    fullPage: true 
  });
  
  console.log('Mobile screenshots saved: section-1, section-2, and full-page');
});