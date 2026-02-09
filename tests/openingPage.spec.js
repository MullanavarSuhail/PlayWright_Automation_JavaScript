const { test, expect } = require('@playwright/test');

test('open orange hrm page', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.waitForTimeout(5000);
});
