import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

import { userData } from '../../testData/userData';

test('Sceneri0 2', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.navigate();

    await loginPage.login(
        userData.username,
        userData.password
    );

    await expect(page).toHaveURL(/inventory/);

    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();

    await cartPage.verifyProductInCart();
    await cartPage.checkout();

    await checkoutPage.fillCheckoutInfo(
        userData.firstName,
        userData.lastName,
        userData.postalCode
    );

    await checkoutPage.completeOrder();

    await checkoutPage.verifyOrderSuccess();
});