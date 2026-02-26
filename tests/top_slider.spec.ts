import {expect, test} from '@playwright/test';
import { TopSlider } from '../Pages/TopSlider_Pom';
import { BasePage } from '../Pages/BasePage';

let topSlider: TopSlider;
let basePage: BasePage;

test.beforeEach(async({page})=>{
    topSlider = new TopSlider(page);
    basePage = new BasePage(page);

    await basePage.open();
});

test.describe('Top slider test @slider', async()=>{

    test('Next button test', async({page})=>{

        // if(await page.getByRole('link', { name: 'iPhone' }).nth(1).isVisible()){
        //     await page.locator('.swiper-button-next').first().click();
        //     await expect(page.getByRole('img', { name: 'MacBookAir' }).nth(1)).toBeVisible();
        // }else{    
        //     await page.getByRole('img', { name: 'MacBookAir' }).nth(1).hover();
        //     await page.locator('.swiper-button-next').first().hover();
        //     await page.locator('.swiper-button-next').first().click();
        //     await expect(page.getByRole('link', { name: 'iPhone' }).nth(1)).toBeVisible();
        // }

        if(await topSlider.iPhoneSliderVisible){
            await topSlider.clickToNextButtonFirst;
            await topSlider.checkMacBookPoster;
        }else{
            await topSlider.hoverToMacBookPoster;
            await topSlider.hoverToNextButton;
            await topSlider.clickToNextButtonFirst;
            await topSlider.iPhoneSliderVisible;
        }

    });

    test('Previw button test', async({page})=>{

        // if(await page.getByRole('link', { name: 'iPhone' }).nth(1).isVisible()){
        //     await page.locator('.swiper-button-prev').first().click();
        //     await expect(page.getByRole('img', { name: 'MacBookAir' }).nth(1)).toBeVisible();
        // }else{    
        //     await page.getByRole('img', { name: 'MacBookAir' }).nth(1).hover();
        //     await page.locator('.swiper-button-next').first().hover();
        //     await page.locator('.swiper-button-prev').first().click();
        //     await expect(page.getByRole('link', { name: 'iPhone' }).nth(1)).toBeVisible();
        // };

        if(await topSlider.iPhoneSliderVisible){
            await topSlider.clickToPreviewsButton;
            await topSlider.checkMacBookPoster;
        }else{
            await topSlider.hoverToMacBookPoster;
            await topSlider.hoverToNextButton;
            await topSlider.clickToPreviewsButton;
            await topSlider.iPhoneSliderVisible;
        }

    });

    test('Pagination test', async({page})=>{

        // if(await page.getByRole('link', { name: 'iPhone' }).nth(1).isVisible()){
        //     await page.locator('.swiper-pagination > span:nth-child(2)').first().click();
        //     await expect(page.getByRole('img', { name: 'MacBookAir' }).nth(1)).toBeVisible();
        // }else{
        //     await page.locator('.swiper-pagination-bullet').first().click();
        //     await expect(page.getByRole('link', { name: 'iPhone' }).nth(1)).toBeVisible();
        // };

        if(await topSlider.iPhoneSliderVisible){
            await topSlider.clickPaginationSwiper2;
            await topSlider.checkMacBookPoster;
        }else{
            await topSlider.clickPaginationBullet;
            await topSlider.iPhoneSliderVisible;
        }

    });

    test('Click first image', async({page})=>{

        // if(await page.getByRole('link', { name: 'iPhone' }).nth(1).isVisible()){

        //     await page.getByRole('link', { name: 'iPhone' }).nth(1).click();
        //     await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/product&path=57&product_id=49');
        //     await expect(page.getByRole('heading', { name: 'Samsung Galaxy Tab' })).toBeVisible;
        //     await expect(page.getByRole('heading', { name: '$' })).toBeVisible();

        // }else{

        //     await page.locator('.swiper-pagination-bullet').first().click();
        //     await page.getByRole('link', { name: 'iPhone' }).nth(1).click();
        //     await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/product&path=57&product_id=49');
        //     await expect(page.getByRole('heading', { name: 'Samsung Galaxy Tab' })).toBeVisible;
        //     await expect(page.getByRole('heading', { name: '$' })).toBeVisible();    
        // };

        if(await topSlider.iPhoneSliderVisible){

            await topSlider.clickiPhonePoster;
            await topSlider.checkUrlafterCLickPoster;
            await topSlider.checkHeaderSamsung;
            await topSlider.check$header;
        }else{

            await topSlider.clickPaginationBullet;
            await topSlider.clickiPhonePoster;
            await topSlider.checkUrlafterCLickPoster;
            await topSlider.checkHeaderSamsung;
            await topSlider.check$header;
        }

    });

});