import {expect, Page} from '@playwright/test';
import { BasePage } from './BasePage';

export class SearchField2 extends BasePage{

    //readonly page: Page;

    constructor(page: Page){
        super(page);
        //this.page = page;
    }

    async fillTextInSearch(text: string){
        await this.page.getByRole('textbox', { name: 'Search' }).fill(text);
        await this.page.locator('#search').getByRole('button').click();
    }

    async checkInSearch(text: string){
        const products = await this.page.locator('.caption h4').allTextContents();
        for(let elem of products){
            expect(elem.toLowerCase()).toContain(text);
        }
    }  

}