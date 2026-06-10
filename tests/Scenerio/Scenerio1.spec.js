import { test, expect } from '@playwright/test';
const { Scenerio1 } = require('../../pages/Scenerio1');
const user = require('../../testData/userData1');

test('Scenerio1 - Successful Login', async ({ page }) => {

  const loginPage = new Scenerio1(page);

  await loginPage.navigate();

  await loginPage.login(
    user.username,
    user.password
  );

  await expect(page).toHaveURL(
    'https://www.saucedemo.com/inventory.html'
  );
});