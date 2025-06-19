import { expect } from '@playwright/test';
class WelcomePage {
  constructor(page) {
    this.page = page;
    this.welcomeText = page.locator('//a[@id="nameofuser"]');
    this.selectMobile= page.locator('//a[normalize-space()="Samsung galaxy s7"]');   
}

async selectItam1() {
    await expect(this.welcomeText).toBeVisible();
    await this.selectMobile.click();  
    }


async selectItem() {
        // Example: Click the first item on the page
        await this.selectMobile.click(); // Update selector as needed
    }
}

module.exports = {
  WelcomePage
};