import { expect } from '@playwright/test';
export class InventoryPage {
  constructor(page) {
    this.page = page;

    this.backpackButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );

    this.cartButton = page.locator(
      '[data-test="shopping-cart-link"]'
    );
  }

  async addBackpackToCart() {
    await this.backpackButton.click();
  }

  async openCart() {
    await this.cartButton.click();
  }
}