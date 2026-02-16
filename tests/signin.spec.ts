// import {expect, test} from '@playwright/test';
// import {SignIn} from '../Pages/SignIn';
// import {BasePage} from '../Pages/BasePage';

// let signIn: SignIn;
// let basePage: BasePage;

// test.beforeEach(async({page})=>{
//     signIn = new SignIn(page);
//     await signIn.open();
// });

// test.describe('Sign In test', ()=>{

//     test('Postive Log In case', async({page})=>{

//         // await page.getByRole('link', { name: ' My Account' }).click();
//         // await page.getByRole('link', { name: 'Login' }).click();
//         // await expect(page.getByText('Returning Customer I am a')).toBeVisible();
//         await signIn.openLogInPage();

//         // await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('gadoti2429@sepole.com');
//         // await page.getByRole('textbox', { name: 'Password' }).fill('123456789');
//         // await page.getByRole('button', { name: 'Login' }).click();
//         await signIn.fillValidCreds();
//         await signIn.clickLogInButton();

//         // await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/account');
//         // await expect(page.locator('#content').getByRole('heading', { name: 'My Account' })).toBeVisible();
//         // await expect(page.getByRole('heading', { name: 'My Orders' })).toBeVisible();
//         // await expect(page.getByRole('heading', { name: 'My Affiliate Account' })).toBeVisible();
//         // await expect(page.getByRole('heading', { name: 'Newsletter' })).toBeVisible();
//         await signIn.checkLogedUserPage();

//         // await page.getByRole('link', { name: ' My Account' }).click();
//         // await expect(page.locator('#top-links').getByRole('link', { name: 'Logout' })).toBeVisible();
//         // await page.locator('#top-links').getByRole('link', { name: 'Logout' }).click();
//         await signIn.clickLogOutButton();

//         // await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/logout');
//         // await expect(page.getByRole('heading', { name: 'Account Logout' })).toBeVisible();
//         await signIn.checkLogOutUserPage();

//     });

//     test('Negative Log In case', async({page})=>{

//         // await page.getByRole('link', { name: ' My Account' }).click();
//         // await page.getByRole('link', { name: 'Login' }).click();
//         // await expect(page.getByText('Returning Customer I am a')).toBeVisible();
//         await signIn.openLogInPage();

//         //Login with empty LogIn and Pass
//         await signIn.clickLogInButton();
//         await expect(page.getByText('Warning: No match for E-Mail')).toBeVisible();

//         //Filled valid email - Empty Pass
//         // await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
//         // await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('gadoti2429@sepole.com');
//         await signIn.fillValidEmail();
//         //await page.getByRole('button', { name: 'Login' }).click();
//         await signIn.clickLogInButton();
//         await expect(page.getByText('Warning: No match for E-Mail')).toBeVisible();

//         //Filled valid Pass - Empty Email
//         // await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('');
//         // await page.getByRole('textbox', { name: 'Password' }).fill('123456789');
//         await signIn.fillValidPass();
//         await signIn.clickLogInButton();
//         await expect(page.getByText('Warning: No match for E-Mail')).toBeVisible();

//         //Invalid Email - Valid Pass
//         //await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('gadoti2429@sepole');
//         await signIn.fillinvalidEmail();
//         //await page.getByRole('button', { name: 'Login' }).click();
//         await signIn.clickLogInButton();
//         await expect(page.getByText('Warning: No match for E-Mail')).toBeVisible();

//         //Invalid Pass - Valid Email
//         // await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('gadoti2429@sepole.com');
//         // await page.getByRole('textbox', { name: 'Password' }).fill('123456');
//         await signIn.fillInvPassValEmail();
//         //await page.getByRole('button', { name: 'Login' }).click();
//         await signIn.clickLogInButton();
//         await expect(page.getByText('Warning: No match for E-Mail')).toBeVisible();

//     });    
// });