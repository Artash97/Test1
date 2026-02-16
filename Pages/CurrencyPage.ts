import {expect, Page} from '@playwright/test';
import {BasePage} from './BasePage';

export class CurrencyPage extends BasePage{

    readonly page: Page;

    constructor(page: Page){
        super(page);
        this.page = page;
    }

    async clickCurrencyMenu(currName: string, symbol: string){
        await this.page.getByRole('button', { name: currName }).click();
    }

    async checkCurrencyValue(symbol: string){
        await expect(this.page.locator('//*[@id="form-currency"]/div/button')).toContainText(symbol);
        await expect(this.page.locator('//*[@id="cart-total"]')).toContainText(symbol);
    }

    async checkAllProducts(symbol: string){
            
        const price_usd_label =  this.page.locator('.caption .price');
        const c = await price_usd_label.count();

        for(let i=0; i<c; i++){
            await expect(price_usd_label.nth(i)).toContainText(symbol);
        }
    }

}