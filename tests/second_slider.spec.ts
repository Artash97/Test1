import {expect, test} from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://tutorialsninja.com/demo/index.php?route=common/home');
});

test.describe('Second slider @slider', async()=>{

    test('Check logos', async({page})=>{

        await page.locator('div:nth-child(5) > .swiper-pagination > span').first().click();
        await expect(page.locator('div:nth-child(6)')).toContainClass('swiper-slide-active');

        await page.locator('span:nth-child(4)').click();
        await expect(page.locator('div:nth-child(9)')).toContainClass('swiper-slide-active');

        await page.locator('span:nth-child(6)').click();
        await expect(page.locator('div:nth-child(11)')).toContainClass('swiper-slide-active');

        await page.locator('span:nth-child(7)').click();
        await expect(page.locator('div:nth-child(12)')).toContainClass('swiper-slide-active');

        await page.locator('span:nth-child(11)').click();
        await expect(page.locator('div:nth-child(16)')).toContainClass('swiper-slide-active');
        
    });

    test('Check Active Indicator', async({page})=>{

        await page.locator('.swiper-pagination.carousel0 > span').first().click();
        await expect(page.locator('.swiper-pagination.carousel0 > span').first()).toContainClass('swiper-pagination-bullet-active');

        await page.locator('span:nth-child(4)').click();
        await expect(page.locator('span:nth-child(4)')).toContainClass('swiper-pagination-bullet-active');

        await page.locator('span:nth-child(7)').click();
        await expect(page.locator('span:nth-child(7)')).toContainClass('swiper-pagination-bullet-active');

        await page.locator('span:nth-child(11)').click();
        await expect(page.locator('span:nth-child(11)')).toContainClass('swiper-pagination-bullet-active');
    });
});