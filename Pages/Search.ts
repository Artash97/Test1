import {expect, Page} from '@playwright/test';
import { BasePage } from './BasePage';

export class SearchField extends BasePage{

    readonly page: Page;

    constructor(page: Page){
        super(page);
        this.page = page;
    }

    async fillTextMacInSearch(){
        await this.page.getByRole('textbox', { name: 'Search' }).fill('mac');
        await this.page.locator('#search').getByRole('button').click();
    }

    async checkMacInSearch(){
        const products = await this.page.locator('.caption h4').allTextContents();
        for(let elem of products){
            expect(elem.toLowerCase()).toContain('mac');
        }
    }

    async fillTextIphoneInSearch(){
        await this.page.getByRole('textbox', { name: 'Search' }).fill('iphone');
        await this.page.locator('#search').getByRole('button').click();
    }

    async checkIphoneInSearch(){
        const products = await this.page.locator('.caption h4').allTextContents();
        for(let elem of products){
            expect(elem.toLowerCase()).toContain('iphone');
        }
    }    

}