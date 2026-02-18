// import{test, expect} from '@playwright/test';
// import {MenuPage} from '../pages/MenuPage';
// import { BasePage } from '../pages/BasePage';


// let menuPage: MenuPage;
// let basePage: BasePage;


// test.beforeEach(async({page})=>{
//     menuPage = new MenuPage(page);
//     basePage = new BasePage(page);

//     await basePage.open();
// });

// // test.skip(({browserName})=> browserName == 'webkit', 'Skip webit');

// test.describe('Desktop Test',()=>{


//   const menus = [
//     {testName: 'Test PC', menu: 'Desktops', submenu: 'PC (0)', heading: 'PC', url: 'https://tutorialsninja.com/demo/index.php?route=product/category&path=20_26', title: 'PC'},
//     {testName: 'Mac Test', menu: ''},
//     {}
//   ];

//   test(testName,async({page})=>{

//     await menuPage.clickSubMenu(menu, submenu);

//     await menuPage.checkCurrentPageHeading(heading);
    
//     await menuPage.checkCurrentPage(url, title);
   
//     // await menuPage.checkEmptyProduct('There are no products to list');
//     // await menuPage.clickContinueButton();    
//     // await menuPage.checkCurrentPage('https://tutorialsninja.com/demo/index.php?route=common/home', 'Your Store');

//   });

//   test( 'Mac Test', async({page})=>{
      
//       await menuPage.clickSubMenu('Desktops', 'Mac (1)');
   
//       await menuPage.checkCurrentPageHeading('Mac');

//       await menuPage.checkCurrentPage('https://tutorialsninja.com/demo/index.php?route=product/category&path=20_27', 'Mac');
  
//       //await expect(page.getByText('Showing 1 to 1 of 1 (1 Pages)')).toBeVisible();

//   });

//   test('ShowAllDesktops Test',async({page})=>{
    
//       await menuPage.clickSubMenu('Desktops', 'Show AllDesktops');

//       await menuPage.checkCurrentPageHeading('Desktops');

//       await menuPage.checkCurrentPage('https://tutorialsninja.com/demo/index.php?route=product/category&path=20', 'Desktops')
      
//       // await expect(page.getByText('Showing 1 to 12 of 12 (1')).toBeVisible();
//   });

// });