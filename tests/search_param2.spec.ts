import {test, expect} from '@playwright/test';
import { SearchField2 } from '../Pages/Search2_Pom';
import { BasePage } from '../Pages/BasePage';

let searchField2: SearchField2;
let basePage: BasePage;

test.beforeEach(async({page})=>{
    searchField2 = new SearchField2(page);
    await searchField2.open();
});


test.describe.only('Search', ()=>{

    test('Search for mac', async({page})=>{

        const searchField = new SearchField2(page);

        await searchField.fillTextInSearch('mac');
        await searchField.checkInSearch('mac');
    });

    test('Search for iPhone', async({page})=>{

        const searchField = new SearchField2(page);

        await searchField.fillTextInSearch('iphone');
        await searchField.checkInSearch('iphone');

    });    
});