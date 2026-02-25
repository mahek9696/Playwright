import {test,expect} from "@playwright/test";

test("Tab and search!",async({page}) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.pause();
    await page.getByRole("heading",{name:"Tabs"}).click();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.type('sun');
    await page.keyboard.press('Enter');

    await expect(page.getByRole("link",{name:"sun"}).first()).toContainText(/sun/i);
})