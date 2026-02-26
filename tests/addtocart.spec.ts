import {expect, test} from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://tutorialsninja.com/demo/index.php?route=common/home');
});

test.describe('Check Add To Cart @addtocart', async()=>{

    test('Check "add to cart" button', async({page})=>{

        await page.getByText('MacBook Intel Core 2 Duo').hover();
        await page.getByRole('button', { name: ' Add to Cart' }).first().click();
        await expect(page.getByText('Success: You have added')).toBeVisible();
        await expect(page.getByRole('link', { name: 'MacBook' }).first()).toBeVisible();
        await expect(page.getByRole('button', { name: ' 1 item(s) - $' })).toBeVisible();
        await expect(page.getByRole('button', { name: ' 1 item(s) - $' })).toHaveText(' 1 item(s) - $602.00');

        await page.getByRole('button', { name: ' 1 item(s) - $' }).click();
        await expect(page.getByText('MacBook x1 $602.00 Sub-Total')).toBeVisible();
        await page.getByTitle('Remove').click();
        await expect(page.getByRole('button', { name: ' 0 item(s) - $' })).toBeVisible();
        
        await page.getByRole('button', { name: ' 0 item(s) - $' }).click();
        await expect(page.getByRole('list').filter({ hasText: 'Your shopping cart is empty!' })).toBeVisible();
        await expect(page.getByText('Your shopping cart is empty!')).toHaveText('Your shopping cart is empty!');
        await expect(page.getByRole('button', { name: ' 0 item(s) - $' })).toHaveText(' 0 item(s) - $0.00');


    });
});