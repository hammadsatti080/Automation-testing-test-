import { expect } from '@playwright/test';

export class CartPage {
    constructor(page) {
        this.page = page;

        this.productText = page.getByText(
            'Sauce Labs Backpack'
        );

        this.checkoutButton = page.locator(
            '[data-test="checkout"]'
        );
    }

    async verifyProductInCart() {
        await expect(this.productText).toBeVisible();
    }

    async checkout() {
        await this.checkoutButton.click();
    }
}