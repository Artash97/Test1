// import {test, expect} from '@playwright/test';
// import {BasePage} from '../pages/BasePage';
// import { LoginPage } from '../pages/LoginPage';


// let basePage: BasePage;
// let loginPage: LoginPage;



// test.beforeEach(async({page})=>{

//    basePage = new BasePage(page);
//    loginPage = new LoginPage(page);

//    await basePage.open();
//    await loginPage.gotoLoginPage();
//    await loginPage.expectLoginPageUrlAndTitle();

// });

// test.skip(({browserName}) => browserName === 'webkit', 'Skipping wibkit in Windows');

// test.describe('Login Kim Kardashian', ()=>{

//       test('Login with valid email and valid password', async({page})=>{
         
//          await loginPage.login('gtaguhi89@gmail.com', 'qqww1212');

//          await loginPage.expectAccountPage();

//          await loginPage.logout();

//          await loginPage.expectLogout();
         
//          await page.getByRole('link', { name: 'Continue' }).click();

//          await basePage.expectHomePage();
//       });



//       test('Session persists after page refresh', async({page})=>{
      
//          await loginPage.login('gtaguhi89@gmail.com', 'qqww1212');

//            // Assert login success BEFORE refresh
//          await loginPage.expectAccountPage();

//           // Refresh the page
//          await page.reload();

//           // Assert session is still active AFTER refresh
//          await loginPage.expectAccountPage();

//       });



//       const negativeTerms = [
//          {name: '', email: '', password: ''},
//          {name: '', email: '', password: ''},
//          {name: '', email: '', password: ''},
//          {name: '', email: '', password: ''},
//          {name: '', email: '', password: ''},
//          {name: '', email: '', password: ''},
//          {name: '', email: '', password: ''},
//          {name: '', email: '', password: ''},
//       ]



//       test('Valid email and invalid password', async({page})=>{

//          await loginPage.login('gtaguhi89@gmail.com', 'qqw');
//          await loginPage.expectAlertErrorMessage();
         
//       });

//       test('Invalid email and valid password', async({page})=>{
         
//          await loginPage.login('tag@gmail.com','qqww1212');
//          await loginPage.expectAlertErrorMessage();

//       });

//       test('Invalid email and invalid password', async({page})=>{

//          await loginPage.login('tag@gmail.com','ghghjkjk');
//          await loginPage.expectAlertErrorMessage();
         
//       });

//       test('Empty email and empty password', async({page})=>{

//          await loginPage.login('','');
//          await loginPage.expectAlertErrorMessage();
      
//       });

//       test('Empty email and filled password', async({page})=>{

//          await loginPage.login('','qqww1212');
//          await loginPage.expectAlertErrorMessage();
//       });

//       test('Filled email and empty password',async({page})=>{
       
//          await loginPage.login('gtaguhi89@gmail.com','');
//          await loginPage.expectAlertErrorMessage();  

//       });

//       test('Invalid email format', async({page})=>{

//          await loginPage.login('tagmail.com','qqww1212');
//          await loginPage.expectAlertErrorMessage();   
//       });

//       test('Email with leading and trailing spaces', async({page})=>{
//          await loginPage.login('   gtaguhi89@gmail.com.  ','qqww1212');
//          await loginPage.expectAlertErrorMessage();   
//       });

// });

