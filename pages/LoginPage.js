class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator("//input[@id='loginusername']");
        this.passwordInput = page.locator('//input[@id="loginpassword"]');
        this.loginButton = page.locator('//button[normalize-space()="Log in"]');
        
    }

    async enterUsername(username) {
        await expect(this.usernameInput).toBeVisible();
        await this.usernameInput.fill(username);
    }

    async enterPassword(password) {
        await expect(this.passwordInput).toBeVisible();
        await this.passwordInput.fill(password);
    }

    async login(username, password) {
       await this.enterUsername(username);
       await this.enterPassword(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }
}

module.exports = { LoginPage };
import { expect } from '@playwright/test'; 
