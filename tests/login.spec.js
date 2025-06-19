import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LogoutPage } from '../pages/LogoutPage';
import { WelcomePage } from '../pages/WelcomePage';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';

test('Login Test', async ({ page }) => {
    // Go to the login page
    await page.goto('https://www.demoblaze.com/index.html');

    const homePage = new HomePage(page);
    
    // Click the login button 
    await homePage.navigateToLoginPage();
    
    const loginPage = new LoginPage(page);
    // Fill in the username and password fields
    await loginPage.login("NeeleshG", "Inserthome@123");
    
    // Click the login button
    await loginPage.clickLoginButton();

    const welcomePage = new WelcomePage(page);
    await welcomePage.selectItem();

    const cartPage = new CartPage(page);    
    await cartPage.navigateToCart();

    const logoutPage = new LogoutPage(page);

    // Wait for the login modal to appearl
    await logoutPage.logout();

})
