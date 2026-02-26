import { test, expect } from '@playwright/test';
import {CurrencyPage} from '../Pages/CurrencyPage';
import {BasePage} from '../Pages/BasePage';


let currPage: CurrencyPage;
let basePage: BasePage;

test.beforeEach(async({page})=>{
    currPage = new CurrencyPage(page);
    await currPage.open();
});


test.describe('Currency @currency', ()=>{

    const currencies = [
        {currencyButton: '$US Dollar', symbol: '$'},
        {currencyButton: '€Euro', symbol: '€' },
        {currencyButton: '£Pound Sterling', symbol: '£'}
    ];


    for(let obj of currencies){

          test(`Testing For ${obj.currencyButton} ${obj.symbol}`, async({page})=>{
            await page.getByRole('button', { name: '$ Currency  ' }).click();
            await currPage.clickCurrencyMenu(obj.currencyButton, obj.symbol);

            await currPage.checkCurrencyValue(obj.symbol);

            await currPage.checkAllProducts(obj.symbol);

        });

    }

});
