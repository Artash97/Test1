// import {test, expect} from '@playwright/test';
// import { SearchField } from '../Pages/Search';
// import { BasePage } from '../Pages/BasePage';

// let searchField: SearchField;
// let basePage: BasePage;

// test.beforeEach(async({page})=>{
//     searchField = new SearchField(page);
//     await searchField.open();
// });


// test.describe('Search', ()=>{

//     test('Search for mac', async({page})=>{

//         // await page.getByRole('textbox', { name: 'Search' }).fill('mac');
//         // await page.locator('#search').getByRole('button').click();
//         await searchField.fillTextMacInSearch();

//         // const products = await page.locator('.caption h4').allTextContents();
//         // for(let elem of products){
//         //     expect(elem.toLowerCase()).toContain('mac');
//         // }
//         await searchField.checkMacInSearch();
//     });

//     test('Search for iPhone', async({page})=>{

//         // await page.getByRole('textbox', { name: 'Search' }).fill('iphone');
//         // await page.locator('#search').getByRole('button').click();
//         await searchField.fillTextIphoneInSearch();

//         // const products = await page.locator('.caption h4').allTextContents();
//         // for(let elem of products){
//         //     expect(elem.toLowerCase()).toContain('iphone');
//         // }
//         await searchField.checkIphoneInSearch();
//     });    
// });