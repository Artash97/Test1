import {expect, Page} from '@playwright/test';
import { BasePage } from './BasePage';

export class TopSlider extends BasePage{

    readonly page: Page;
    constructor(page: Page){
        super(page);
        this.page = page;
    }

    async iPhoneSliderVisible(){
        await this.page.getByRole('link', { name: 'iPhone' }).nth(1).isVisible()
    } 

    async hoverToNextButton(){
        await this.page.locator('.swiper-button-next').first().hover();
    }

    async clickToNextButtonFirst(){
        await this.page.locator('.swiper-button-next').first().click();
    }

    async clickToPreviewsButton(){
        await this.page.locator('.swiper-button-prev').first().click();
    }

    async checkMacBookPoster(){
        await expect(this.page.getByRole('img', { name: 'MacBookAir' }).nth(1)).toBeVisible();
    }

    async hoverToMacBookPoster(){
        await this.page.getByRole('img', { name: 'MacBookAir' }).nth(1).hover();
    }

    async clickPaginationSwiper2(){
        await this.page.locator('.swiper-pagination > span:nth-child(2)').first().click();
    }

    async clickPaginationBullet(){
        await this.page.locator('.swiper-pagination-bullet').first().click();
    }

    async clickiPhonePoster(){
        await this.page.getByRole('link', { name: 'iPhone' }).nth(1).click();
    }

    async checkUrlafterCLickPoster(){
        await expect(this.page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/product&path=57&product_id=49');
    }

    async checkHeaderSamsung(){
        await expect(this.page.getByRole('heading', { name: 'Samsung Galaxy Tab' })).toBeVisible;
    }

    async check$header(){
        await expect(this.page.getByRole('heading', { name: '$' })).toBeVisible();
    }

}