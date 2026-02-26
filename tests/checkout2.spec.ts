import { test, expect } from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://tutorialsninja.com/demo/index.php?route=common/home');

    await page.getByRole('button', { name: ' Add to Cart' }).nth(1).click();
    await page.getByRole('button', { name: ' Add to Cart' }).nth(1).click();
    await page.getByRole('button', { name: ' Add to Cart' }).first().click();
    await page.getByRole('button', { name: ' 3 item(s) - $' }).click();
    await page.locator('#cart').getByRole('link', { name: ' Checkout' }).click();
});


test.describe('CheckOut with 2 type product', ()=>{

    test('Test Product number and Prices', async({page})=>{
                       
        // Check items count in checkout page
        await expect(page.locator('//*[@id="content"]/form/div/table/tbody/tr[1]/td[4]/div/input')).toHaveValue('2');
        await expect(page.locator('//*[@id="content"]/form/div/table/tbody/tr[2]/td[4]/div/input')).toHaveValue('1');

        //Check Total Prices
        //iPhone Total Price
        await expect(page.getByRole('cell', { name: '$246.40' })).toContainText('$246.40');
        //MacBook Total Price
        await expect(page.getByRole('cell', { name: '$' }).nth(3)).toContainText('$602.00');
        //All products Total Price
        await expect(page.getByRole('cell', { name: '$848.40' })).toContainText('$848.40');

    });   

    test('Test Product number changing - add 1 to all', async({page})=>{
                       
        // Add iphone 1 item
        await page.locator('//*[@id="content"]/form/div/table/tbody/tr[1]/td[4]/div/input').click();
        await page.locator('//*[@id="content"]/form/div/table/tbody/tr[1]/td[4]/div/input').fill('3');
        await page.getByRole('button').nth(4).click();
        //Check count for iPhone
        await expect(page.locator('//*[@id="content"]/form/div/table/tbody/tr[1]/td[4]/div/input')).toHaveValue('3');
        //Check Total Price for iPhone
        await expect(page.getByRole('cell', { name: '$369.60' })).toContainText('$369.60');

        //Add MacBook 1 item
        await page.locator('//*[@id="content"]/form/div/table/tbody/tr[2]/td[4]/div/input').click();
        await page.locator('//*[@id="content"]/form/div/table/tbody/tr[2]/td[4]/div/input').fill('2');
        await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
        //Check count for MacBook
        await expect(page.locator('//*[@id="content"]/form/div/table/tbody/tr[2]/td[4]/div/input')).toHaveValue('2');
        //Check Total Price for MacBook
        await expect(page.getByRole('cell', { name: '$1,204.00' })).toContainText('$1,204.00');

        //Check Total Price for all products
        await expect(page.getByRole('cell', { name: '$1,573.60' })).toContainText('$1,573.60');

        //Check Cart items count
        await expect(page.getByRole('button', { name: ' 5 item(s) - $' })).toContainText('5');

    });    

    test('Test Product number changing - remove 1 for all', async({page})=>{
                       
        // Change iphone to 1 item
        await page.locator('//*[@id="content"]/form/div/table/tbody/tr[1]/td[4]/div/input').click();
        await page.locator('//*[@id="content"]/form/div/table/tbody/tr[1]/td[4]/div/input').fill('1');
        await page.getByRole('button').nth(4).click();
        //Check count for iPhone
        await expect(page.locator('//*[@id="content"]/form/div/table/tbody/tr[1]/td[4]/div/input')).toHaveValue('1');
        //Check Total Price for iPhone
        await expect(page.getByRole('cell', { name: '$' }).nth(1)).toContainText('$123.20');

        //Add MacBook 1 item
        await page.locator('//*[@id="content"]/form/div/table/tbody/tr[2]/td[4]/div/input').click();
        await page.locator('//*[@id="content"]/form/div/table/tbody/tr[2]/td[4]/div/input').fill('0');
        await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
        //Check Cart items count
        await expect(page.getByRole('button', { name: ' 1 item(s) - $' })).toContainText('1');

        //Check Total Price for all products
        await expect(page.getByRole('cell', { name: '$' }).nth(5)).toContainText('$123.20');

    });

    test('Test Product number changing "-1" for all', async({page})=>{
                       const gago = '//*[@id="content"]/form/div/table/tbody/tr[1]/td[4]/div/input'
        // Change iphone count to "-1"
        await page.locator(gago).click();
        await page.locator('//*[@id="content"]/form/div/table/tbody/tr[1]/td[4]/div/input').fill('-1');
        await page.getByRole('button').nth(4).click();
        //Check success message
        await expect(page.getByText('Success: You have modified')).toBeVisible();
        //Check Cart items count
        await expect(page.getByRole('button', { name: ' 1 item(s) - $' })).toContainText('1');

        //Change MacBook count to "-1"
        await page.locator('//*[@id="content"]/form/div/table/tbody/tr/td[4]/div/input').click();
        await page.locator('//*[@id="content"]/form/div/table/tbody/tr/td[4]/div/input').fill('-1');
        await page.getByRole('button').nth(5).click();
        //Check Cart items count
        await expect(page.getByRole('button', { name: ' 0 item(s) - $' })).toContainText('0');

        //Check Shopping Cart info
        await expect(page.locator('#content').getByText('Your shopping cart is empty!')).toBeVisible();

    });     

});