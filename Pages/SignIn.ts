import {expect, Page} from '@playwright/test';
import { BasePage } from './BasePage';

export class SignIn extends BasePage{

    readonly page: Page;

    constructor(page: Page){
        super(page);
        this.page = page;
    }

    
    async openLogInPage(){
        await this.page.getByRole('link', { name: ' My Account' }).click();
        await this.page.getByRole('link', { name: 'Login' }).click();
        await expect(this.page.getByText('Returning Customer I am a')).toBeVisible();
    }

    async fillValidCreds(){
        await this.page.getByRole('textbox', { name: 'E-Mail Address' }).fill('gadoti2429@sepole.com');
        await this.page.getByRole('textbox', { name: 'Password' }).fill('123456789');
    }

    async clickLogInButton(){
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

    async checkLogedUserPage(){
        await expect(this.page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/account');
        await expect(this.page.locator('#content').getByRole('heading', { name: 'My Account' })).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'My Orders' })).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'My Affiliate Account' })).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'Newsletter' })).toBeVisible();        
    }

    async clickLogOutButton(){
        await this.page.getByRole('link', { name: ' My Account' }).click();
        await expect(this.page.locator('#top-links').getByRole('link', { name: 'Logout' })).toBeVisible();
        await this.page.locator('#top-links').getByRole('link', { name: 'Logout' }).click();
    }

    async checkLogOutUserPage(){
        await expect(this.page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/logout');
        await expect(this.page.getByRole('heading', { name: 'Account Logout' })).toBeVisible();        
    }

    
    async fillValidEmail(){
        await this.page.getByRole('textbox', { name: 'E-Mail Address' }).click();
        await this.page.getByRole('textbox', { name: 'E-Mail Address' }).fill('gadoti2429@sepole.com');
    }

    async fillValidPass(){
        await this.page.getByRole('textbox', { name: 'E-Mail Address' }).fill('');
        await this.page.getByRole('textbox', { name: 'Password' }).fill('123456789');
    }

    async fillinvalidEmail(){
        await this.page.getByRole('textbox', { name: 'E-Mail Address' }).fill('gadoti2429@sepole');     
    }

    async fillInvPassValEmail(){
        await this.page.getByRole('textbox', { name: 'E-Mail Address' }).fill('gadoti2429@sepole.com');
        await this.page.getByRole('textbox', { name: 'Password' }).fill('123456');        
    }

}