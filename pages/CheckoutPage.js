import { expect } from '@playwright/test';

export class CheckoutPage {
    constructor(page) {
        this.page = page;

        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.postalCode = page.locator('[data-test="postalCode"]');

        this.continueButton = page.locator(
            '[data-test="continue"]'
        );

        this.finishButton = page.locator(
            '[data-test="finish"]'
        );

        this.successMessage = page.getByText(
            'Thank you for your order!'
        );
    }

    async fillCheckoutInfo(firstName, lastName, postalCode) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
    }

    async completeOrder() {
        await this.continueButton.click();
        await this.finishButton.click();
    }

    async verifyOrderSuccess() {
        await expect(this.successMessage).toBeVisible();
    }
}