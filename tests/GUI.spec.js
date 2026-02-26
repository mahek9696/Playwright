// @ts-check
// performance - Synchronous loading - file :js,cjs
// const {test, expect} = require('@playwright/test');

// performance - Asynchronous loading - file :js,mjs,ts
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Automation Testing Practice");
  // await expect(page.getByRole('heading',{name : 'Automation Testing Practice'})).toBeVisible();

  await page.getByPlaceholder("Enter Name").fill("Test Name");
  await page
    .getByPlaceholder("Enter EMail")
    .fill("test123@mail.com");
  await page.getByPlaceholder("Enter Phone").fill("1111111111");

  await page
    .getByRole("textbox", { name: "Address:" })
    .type("Some where on the globe ! ");

  await page.getByRole("radio", { name: "Male", exact: true }).check();
  expect(page.getByRole("radio", { name: "Male", exact: true })).toBeChecked();
  await page.getByRole('radio',{name:'Female'}).check();
  await expect(page.getByRole("radio", { name: "Male", exact: true })).not.toBeChecked();
  await expect(page.getByRole("radio", { name: "Female"})).toBeChecked();

  await page.getByRole("checkbox", { name: 'Sunday' }).check();
  await expect(page.getByRole("checkbox", { name: "Sunday" })).toBeChecked();

  // const days = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];
  // for (let day of days) {
  //   // await page.pause();
  //   await page.getByRole("checkbox", { name: day }).check();
  //   await expect(page.getByRole("checkbox", { name: day })).toBeChecked();
  // }

  // await page.locator("#country").selectOption({ label: "United States" });
  await page.locator("#country").selectOption("usa");//it target on the value 
  await expect(page.locator('#country').selectOption("usa")).toBeTruthy();

  await page.locator("#colors").selectOption(["Red", "Blue"]);
  await expect(page.locator('#colors').selectOption(["Red", "Blue"])).toBeTruthy();

  await page.locator("#animals").selectOption({ label: "Cat" });//it target the visible text
  await expect(page.locator('#colors').selectOption(["Red", "Blue"])).toBeTruthy();

  // First date picker.
  const date1 = page
    .locator("p")
    .filter({ hasText: "Date Picker 1 (mm/dd/yyyy):" })
    .locator("input");
  await date1.fill("02/02/2026");
  expect(date1).toHaveValue("02/02/2026");

  // Second date picker.
  await page.locator("#txtDate").click();
  await page
    .getByRole("combobox", { name: "Select month" })
    .selectOption("Feb");
  await page
    .getByRole("combobox", { name: "Select year" })
    .selectOption("2026");
  await page.getByRole("link", { name: "25" }).click();

  // await page.pause();
  // Fourth date picker.
  await page.getByPlaceholder("Start Date").fill("2026-02-22"); //we try to fill the format dd-mm-yyyy but it declare has a date and HTML follow yyyy-mm-dd

  // Fifth date picker.
  await page.getByPlaceholder("End Date").fill("2026-02-22");

  // to click on the first submit button
  await page.getByRole("button", { name: "Submit" }).first().click();
  // await page.locator('button').filter({hasText:'Submit'}).click();

  // If you DID NOT fill the dates, this assertion will pass:
  await expect(page.locator("#result")).toHaveText(
    "You selected a range of 0 days.",
  );
});
