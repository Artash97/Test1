import {expect, test} from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://tutorialsninja.com/demo/index.php?route=common/home');
});

test.describe('Check Add To Cart Page @addtocart', async()=>{

    test('Check Cart Page', async({page})=>{

        await page.getByText('MacBook Intel Core 2 Duo').hover();
        await page.getByRole('button', { name: ' Add to Cart' }).first().click();
        await expect(page.getByText('Success: You have added')).toBeVisible();

        await page.getByRole('button', { name: ' 1 item(s) - $' }).click();
        await page.getByRole('link', { name: ' View Cart' }).click();
        await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=checkout/cart');
        await expect(page.getByText('Image Product Name Model Quantity Unit Price Total MacBook *** Reward Points:')).toBeVisible();

        await page.getByRole('button').nth(5).click();
        await expect(page.locator('#content').getByText('Your shopping cart is empty!')).toBeVisible();

        await page.getByRole('link', { name: 'Continue' }).click();
        await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=common/home');
        await expect(page.getByRole('button', { name: ' 0 item(s) - $' })).toBeVisible();

        await page.getByRole('button', { name: ' 0 item(s) - $' }).click();
        await expect(page.getByText('Your shopping cart is empty!')).toBeVisible();

    });
});