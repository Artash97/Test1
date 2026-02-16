import {expect, Page} from '@playwright/test';
import {BasePage} from './BasePage';

export class MenuPage extends BasePage{

    readonly page: Page;

    constructor(page: Page){
        super(page);
        this.page = page;
    }

    async clickSubMenu(menu: string, subMenu: string){
        await this.page.getByRole('link', { name: menu, exact: true}).hover();
        await this.page.getByRole('link', { name: subMenu }).click();
    }

    async clickContinueButton(){
        await this.page.getByRole('link', { name: 'Continue' }).click();
    }

    async checkCurrentPageHeading(heading: string){
        await expect(this.page.getByRole('heading', { name: heading })).toBeVisible;
    }

    async checkCurrentPage(url: string, title: string){
        await expect(this.page).toHaveURL(url);
        await expect(this.page).toHaveTitle(title);
    }

    async checkEmptyProduct(message: string){
        await expect(this.page.getByText(message)).toBeVisible();
    }
}