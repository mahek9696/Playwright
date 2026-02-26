import {test, expect} from '@playwright/test';

test("TC_01_Selecting the Date",async({page}) =>{

    await page.goto('https://demoqa.com/date-picker');

    await page.locator('#datePickerMonthYearInput').click();

    await page.locator('.react-datepicker__month-select').selectOption('1');
})