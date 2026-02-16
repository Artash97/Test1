//cart popup1 item test , 2 item test, 3 item (2 is the same)

// import {expect, test} from '@playwright/test';

// test.beforeEach(async({page})=>{
//     await page.goto('https://tutorialsninja.com/demo/index.php?route=common/home');
// });

// test.describe('Check Cart page Popup items', async()=>{

//     test('Check 1 item in PopUp', async({page})=>{

//         await page.getByRole('button', { name: ' Add to Cart' }).first().click();
//         await page.getByRole('button', { name: ' 1 item(s) - $' }).click();
//         await expect(page.getByText('MacBook x1 $602.00 Sub-Total')).toBeVisible();
//         await expect(page.locator('#cart').getByText('MacBook')).toBeVisible();
//         await expect(page.getByRole('cell', { name: 'x1' })).toBeVisible();
//         await expect(page.getByRole('cell', { name: '$' }).first()).toHaveText('$602.00');
//         await expect(page.getByText('Sub-Total')).toBeVisible();
//         await expect(page.getByRole('cell', { name: '$500.00' })).toBeVisible();
//         await expect(page.getByText('Eco Tax (-2.00)')).toBeVisible();
//         await expect(page.getByRole('cell', { name: '$2.00' })).toBeVisible();
//         await expect(page.getByText('VAT (20%)')).toBeVisible();
//         await expect(page.getByRole('cell', { name: '$100.00' })).toBeVisible();
//         await expect(page.getByText('Total', { exact: true })).toBeVisible();
//         await expect(page.getByRole('cell', { name: '$' }).nth(4)).toHaveText('$602.00');

//     });

//     test('Check 2 items in PopUp', async({page})=>{

//         await page.getByRole('button', { name: ' Add to Cart' }).first().click();
//         await page.getByRole('button', { name: ' Add to Cart' }).nth(1).click();
//         await page.getByRole('button', { name: ' 2 item(s) - $' }).click();

//         //iPhone info
//         await expect(page.locator('#cart').getByText('iPhone')).toBeVisible();
//         await expect(page.getByRole('cell', { name: 'x1' }).first()).toBeVisible();
//         await expect(page.getByRole('cell', { name: '$123.20' })).toHaveText('$123.20');

//         //Mac info
//         await expect(page.locator('#cart').getByText('MacBook')).toBeVisible();
//         await expect(page.getByRole('cell', { name: 'x1' }).nth(1)).toBeVisible();
//         await expect(page.getByRole('cell', { name: '$602.00' })).toHaveText('$602.00');

//         //Price info
//         //Sub-Total check
//         await expect(page.getByText('Sub-Total')).toBeVisible();
//         await expect(page.getByRole('cell', { name: '$601.00' })).toBeVisible();
//         //Eco Tax check
//         await expect(page.getByText('Eco Tax (-2.00)')).toBeVisible();
//         await expect(page.getByRole('cell', { name: '$4.00' })).toBeVisible();
//         //Vat check
//         await expect(page.getByText('VAT (20%)')).toBeVisible();
//         await expect(page.getByRole('cell', { name: '$120.20' })).toBeVisible();
//         //Total check
//         await expect(page.getByText('Total', { exact: true })).toBeVisible();
//         await expect(page.getByRole('cell', { name: '$725.20' })).toBeVisible();

//     });

//     test('Check 3 items in PopUp - 2 is the same', async({page})=>{

//         await page.getByRole('button', { name: ' Add to Cart' }).first().click();
//         await page.getByRole('button', { name: ' Add to Cart' }).nth(1).click();
//         await page.getByRole('button', { name: ' Add to Cart' }).nth(1).click();
//         await page.getByRole('button', { name: ' 3 item(s) - $' }).click();

//         //iPhone info
//         await expect(page.locator('#cart').getByText('iPhone')).toBeVisible();
//         await expect(page.getByRole('cell', { name: 'x2' })).toBeVisible();
//         await expect(page.getByRole('cell', { name: '$246.40' })).toHaveText('$246.40');

//         //Mac info
//         await expect(page.locator('#cart').getByText('MacBook')).toBeVisible();
//         await expect(page.getByRole('cell', { name: 'x1' })).toBeVisible();
//         await expect(page.getByRole('cell', { name: '$602.00' })).toHaveText('$602.00');

//         //Price info
//         //Sub-Total check
//         await expect(page.getByText('Sub-Total')).toBeVisible();
//         await expect(page.getByRole('cell', { name: '$702.00' })).toBeVisible();
//         //Eco Tax check
//         await expect(page.getByText('Eco Tax (-2.00)')).toBeVisible();
//         await expect(page.getByRole('cell', { name: '$6.00' })).toBeVisible();
//         //Vat check
//         await expect(page.getByText('VAT (20%)')).toBeVisible();
//         await expect(page.getByRole('cell', { name: '$140.40' })).toBeVisible();
//         //Total check
//         await expect(page.getByText('Total', { exact: true })).toBeVisible();
//         await expect(page.getByRole('cell', { name: '$848.40' })).toBeVisible();

//     });    
// });