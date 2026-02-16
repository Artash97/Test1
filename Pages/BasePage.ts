import {expect, Page} from '@playwright/test';
import { BASE_URL } from '../utils/constants';

export class BasePage{

    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async open(){
        await this.page.goto(BASE_URL);
        await expect(this.page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=common/home');
        await expect(this.page).toHaveTitle('Your Store');
    }

}