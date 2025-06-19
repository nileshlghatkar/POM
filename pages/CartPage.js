import {test, expect} from '@playwright/test';

class CartPage {
    constructor(page) {
        this.title = page;
        this.addToCartButton = page.locator('//a[@class="btn btn-success btn-lg"]');
        
    }

    async navigateToCart() {
        await expect(this.addToCartButton).toBeVisible();
        await this.addToCartButton.click();
    }

}

module.exports = {
    CartPage
};
