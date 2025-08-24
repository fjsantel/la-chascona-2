const { test, expect } = require('@playwright/test');

test('homepage has title and content', async ({ page }) => {
  await page.goto('/');
  
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/La Chascona|Casa|Home/);
  
  // Take a screenshot of the page
  await page.screenshot({ path: 'homepage-screenshot.png', fullPage: true });
  
  console.log('Screenshot saved as homepage-screenshot.png');
});