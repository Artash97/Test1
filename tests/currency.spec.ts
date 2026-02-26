import { test, expect } from '@playwright/test';
import {CurrencyPage} from '../Pages/CurrencyPage';
import {BasePage} from '../Pages/BasePage';

let currPage: CurrencyPage;
let basePage: BasePage;

test.beforeEach(async({page})=>{
    currPage = new CurrencyPage(page);
    await currPage.open();
});

test.describe('Check currency varations', ()=>{
   
    const currencies = [
        {currencyButton: '$US Dollar', symbol: '$'},
        {currencyButton: '€Euro', symbol: '€' },
        {currencyButton: '£Pound Sterling', symbol: '£'}
    ];

    test('Check $', async({page})=>{
        //Check currency in list of currencys
        await expect(page.getByRole('button', { name: '$ Currency  ' })).toContainText('$ Currency');

        //Check currency in items button
        await page.getByRole('button', { name: ' Add to Cart' }).nth(1).click();
        await expect(page.getByRole('button', { name: ' 1 item(s) - $' })).toContainText('$');

        //Check currency in items tab page
        await page.getByRole('button', { name: ' 1 item(s) - $' }).click();
        await expect(page.getByRole('cell', { name: '$' }).first()).toContainText('$');
        await expect(page.getByRole('cell', { name: '$' }).nth(4)).toContainText('$');

        //Check currency in checkout page - Total price
        await page.locator('#cart').getByRole('link', { name: ' Checkout' }).click();
        await expect(page.getByRole('cell', { name: '$' }).nth(1)).toContainText('$');
    });

    test('Check €', async({page})=>{
        //Check currency in list
        await page.getByRole('button', { name: '$ Currency  ' }).click();
        await page.getByRole('button', { name: '€Euro' }).click();
        await expect(page.getByRole('button', { name: '€ Currency  ' })).toContainText('€ Currency');

        //Check currency in items button
        await page.getByRole('button', { name: ' Add to Cart' }).nth(1).click();
        await expect(page.getByRole('button', { name: ' 1 item(s) - 96.66€' })).toContainText('€');

        //Check currency in items tab page
        await page.getByRole('button', { name: ' 1 item(s) - 96.66€' }).click();
        await expect(page.getByRole('cell', { name: '€' }).first()).toContainText('€');
        await expect(page.getByRole('cell', { name: '€' }).nth(4)).toContainText('€');

        //Check currency in checkout page - Total price
        await page.locator('#cart').getByRole('link', { name: ' Checkout' }).click();
        await expect(page.getByRole('cell', { name: '€' }).nth(1)).toContainText('€');

    });

    test('Check £', async({page})=>{
        //Check currency in list
        await page.getByRole('button', { name: '$ Currency  ' }).click();
        await page.getByRole('button', { name: '£Pound Sterling' }).click();
        await expect(page.getByRole('button', { name: '£ Currency  ' })).toContainText('£ Currency');

        //Check currency in items button
        await page.getByRole('button', { name: ' Add to Cart' }).nth(1).click();
        await expect(page.getByRole('button', { name: ' 1 item(s) - £' })).toContainText('£');

        //Check currency in items tab page
        await page.getByRole('button', { name: ' 1 item(s) - £' }).click();
        await expect(page.getByRole('cell', { name: '£' }).first()).toContainText('£');
        await expect(page.getByRole('cell', { name: '£' }).nth(4)).toContainText('£');

        //Check currency in checkout page - Total price
        await page.locator('#cart').getByRole('link', { name: ' Checkout' }).click();
        await expect(page.getByRole('cell', { name: '£' }).nth(1)).toContainText('£');
    });
});