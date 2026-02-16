// import {expect, test} from '@playwright/test';

// test.beforeEach(async({page})=>{
//     await page.goto('https://tutorialsninja.com/demo/index.php?route=common/home');
// });

// test.describe('Top slider test', async()=>{
//     test('Next button test', async({page})=>{

//         if(await page.getByRole('link', { name: 'iPhone' }).nth(1).isVisible()){
//             await page.locator('.swiper-button-next').first().click();
//             await expect(page.getByRole('img', { name: 'MacBookAir' }).nth(1)).toBeVisible();
//         }else{    
//             await page.getByRole('img', { name: 'MacBookAir' }).nth(1).hover();
//             await page.locator('.swiper-button-next').first().hover();
//             await page.locator('.swiper-button-next').first().click();
//             await expect(page.getByRole('link', { name: 'iPhone' }).nth(1)).toBeVisible();
//         }

//     });

//     test('Previw button test', async({page})=>{

//         if(await page.getByRole('link', { name: 'iPhone' }).nth(1).isVisible()){
//             await page.locator('.swiper-button-prev').first().click();
//             await expect(page.getByRole('img', { name: 'MacBookAir' }).nth(1)).toBeVisible();
//         }else{    
//             await page.getByRole('img', { name: 'MacBookAir' }).nth(1).hover();
//             await page.locator('.swiper-button-next').first().hover();
//             await page.locator('.swiper-button-prev').first().click();
//             await expect(page.getByRole('link', { name: 'iPhone' }).nth(1)).toBeVisible();
//         };

//     });

//     test('Pagination test', async({page})=>{
//         if(await page.getByRole('link', { name: 'iPhone' }).nth(1).isVisible()){
//             await page.locator('.swiper-pagination > span:nth-child(2)').first().click();
//             await expect(page.getByRole('img', { name: 'MacBookAir' }).nth(1)).toBeVisible();
//         }else{
//             await page.locator('.swiper-pagination-bullet').first().click();
//             await expect(page.getByRole('link', { name: 'iPhone' }).nth(1)).toBeVisible();
//         };
//     });

//     test('Click first image', async({page})=>{

//         if(await page.getByRole('link', { name: 'iPhone' }).nth(1).isVisible()){

//             await page.getByRole('link', { name: 'iPhone' }).nth(1).click();
//             await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/product&path=57&product_id=49');
//             await expect(page.getByRole('heading', { name: 'Samsung Galaxy Tab' })).toBeVisible;
//             await expect(page.getByRole('heading', { name: '$' })).toBeVisible();

//         }else{

//             await page.locator('.swiper-pagination-bullet').first().click();
//             await page.getByRole('link', { name: 'iPhone' }).nth(1).click();
//             await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/product&path=57&product_id=49');
//             await expect(page.getByRole('heading', { name: 'Samsung Galaxy Tab' })).toBeVisible;
//             await expect(page.getByRole('heading', { name: '$' })).toBeVisible();    
                    
//         };
//     });

// });