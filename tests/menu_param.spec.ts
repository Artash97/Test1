// import {test, expect} from '@playwright/test';
// import {MenuPage} from '../Pages/MenuPage';
// import {BasePage} from '../Pages/BasePage';


// let menuPage: MenuPage;
// let basePage: BasePage;


// test.beforeEach(async({page})=>{
//     menuPage = new MenuPage(page);
//     await menuPage.open();

// });

// test.describe('Desktop Test',()=>{

//   const menus = [
//     {menu: 'Desktops', submenu: 'PC (0)', heading: 'PC', url: 'https://tutorialsninja.com/demo/index.php?route=product/category&path=20_26', title: 'PC'},
//     {menu: 'Desktops', submenu: 'Mac (1)', heading: 'Mac', url: 'https://tutorialsninja.com/demo/index.php?route=product/category&path=20_27', title: 'Mac'},
//     {menu: 'Desktops', submenu: 'Show AllDesktops', heading: 'Desktops', url: 'https://tutorialsninja.com/demo/index.php?route=product/category&path=20', title: 'Desktops'}
//   ]

//   for(let obj of menus){

//     test(`Test PC ${obj.menu} ${obj.submenu} ${obj.heading} ${obj.url} ${obj.title}`, async({page})=>{

//       await menuPage.clickSubMenu(obj.menu, obj.submenu);
//       await menuPage.checkCurrentPageHeading(obj.heading);   
//       await menuPage.checkCurrentPage(obj.url, obj.title);  

//     });

//   };

// });