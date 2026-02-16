// import {expect, test} from '@playwright/test';

// test.beforeEach(async({page})=>{
//     await page.goto('https://tutorialsninja.com/demo/index.php?route=common/home');
// });

// test.describe('Check Featured field', async()=>{

//     test('Featured field', async({page})=>{

//         await page.getByRole('heading', { name: 'Featured' }).hover();
//         await expect(page.locator('div').filter({ hasText: 'MacBook Intel Core 2 Duo' }).nth(4)).toBeVisible();
//         await expect(page.locator('div').filter({ hasText: 'iPhone iPhone is a' }).nth(4)).toBeVisible();
//         await expect(page.locator('div').filter({ hasText: 'Apple Cinema 30" The 30-inch' }).nth(4)).toBeVisible();
//         await expect(page.locator('div').filter({ hasText: 'Canon EOS 5D Canon\'s press' }).nth(4)).toBeVisible();
//     });

//     test('Product page', async({page})=>{

//         await page.locator('div').filter({ hasText: 'MacBook Intel Core 2 Duo' }).nth(4).hover();
//         await page.getByRole('link', { name: 'MacBook' }).first().click();
//         await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/product&product_id=43');
//         await expect(page.getByRole('heading', { name: 'MacBook' })).toBeVisible();
//         await expect(page.getByRole('heading', { name: '$' })).toHaveText('$602.00');
//         await expect(page.getByRole('link', { name: 'Description' })).toBeVisible();
//         await expect(page.getByRole('link', { name: 'Specification' })).toBeVisible();
//         await expect(page.getByRole('link', { name: 'Reviews (0)' })).toBeVisible();
//     });
// });