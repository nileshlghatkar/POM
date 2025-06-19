class HomePage {
    constructor(page) {
        this.page = page;
        this.loginButton = page.locator('//a[@id="login2"]');
    }

    async navigateToLoginPage() {
        await this.loginButton.click();

    }
}

module.exports = {
    HomePage
};