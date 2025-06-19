import { expect } from '@playwright/test';

class LogoutPage {
    constructor(page) {
        this.page = page;
        this.logOutButton = page.locator('//a[@id="logout2"]');
    }

    async logout() {

        await expect(this.logOutButton).toBeVisible();
        await this.logOutButton.click();
    }
}

module.exports = {
    LogoutPage
};