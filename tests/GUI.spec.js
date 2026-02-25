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

  await page.getByPlaceholder("Enter Name").pressSequentially("Test Name");
  await page
    .getByPlaceholder("Enter EMail")
    .pressSequentially("test123@mail.com");
  await page.getByPlaceholder("Enter Phone").pressSequentially("1111111111");

  await page
    .getByRole("textbox", { name: "Address:" })
    .type("Some where on the globe ! ");

  const gender = ["Male", "Female"];

  await page.getByRole("radio", { name: "Male", exact: true }).check();
  expect(page.getByRole("radio", { name: "Male", exact: true })).toBeChecked();

  await page.getByRole("checkbox", { name: "Sunday" }).check();
  await expect(page.getByRole("checkbox", { name: "Sunday" })).toBeChecked();

  await page.locator("#country").selectOption({ label: "United States" });

  await page.locator("#colors").selectOption(["Red", "Blue"]);

  await page.locator("#animals").selectOption({ label: "Cat" });

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
  await page.getByPlaceholder("Start Date").fill("2026-02-22");

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
