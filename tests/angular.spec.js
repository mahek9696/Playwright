// @ts-check
import { test, expect } from "@playwright/test";

test("Submission of foam", async ({ page }) => {
  // URL
  await page.goto("https://rahulshettyacademy.com/angularpractice/");
  
  await expect(
    page.getByRole("heading", { name: "Protractor Tutorial" }),
  ).toBeVisible();

  // Name
  await page
    .locator('input[name="name"]')
    .first()
    .fill("John Doe"); //CSS Attuibute locator
  // Since the bidirectional data binding
  
  await expect(page.locator('input[name="name"]').first()).toHaveValue(
    "John Doe",
  );

  //Email
  await page
    .locator('input[name="email"]')
    .fill("john.doe@example.com"); //CSS Attribute locator
  
    await expect(page.locator('input[name="email"]')).toHaveValue(
    "john.doe@example.com",
  );

  //Password
  await page
    .getByPlaceholder("Password")
    .pressSequentially("secretpassword123");

  //IceCreams! checkbox
  await page
    .getByRole("checkbox", { name: "Check me out if you Love IceCreams!" })
    .check();

  await expect(
    page.getByRole("checkbox", { name: "Check me out if you Love IceCreams!" }),
  ).toBeChecked();

  //Gender

  // await page.getByLabel('Gender').selectOption('Female');
  // await expect(page.getByLabel('Gender')).toHaveValue('Female');

  await page.getByRole("combobox", { name: "Gender" }).selectOption("Male");
  await expect(page.getByRole("combobox", { name: "Gender" })).toHaveValue(
    "Male"
  ); 

  //Employment Status radio options
  await page.getByRole("radio", { name: "Student" }).check();

  //Date of Birth
  await page.locator('input[name="bday"]').fill("1000-01-01");

  //Submit button
  await page.getByRole("button", { name: "Submit" }).click();

  // simulate a user clicking the "×" button and then verify that the alert is removed from the page
  await expect(
    page.getByText("Success! The Form has been submitted successfully!."),
  ).toBeVisible();

  // getByLabel('close'): This targets the button using its "aria-label", which is the most reliable way to find small icons like "×".
  await page.getByLabel("close").click();
  await expect(
    page.getByText("Success! The Form has been submitted successfully!."),
  ).toBeHidden();
});

test("validate form submission with empty behavior", async ({ page }) => {
  // URL
  await page.goto("https://rahulshettyacademy.com/angularpractice/");
  await expect(
    page.getByRole("heading", { name: "Protractor Tutorial" }),
  ).toBeVisible();

  // Name

  await page.locator('input[name="name"]').first().click(); //CSS Attribute locator

  await page.locator('input[name="email"]').click();

  await expect(page.getByText("Name is required")).toBeVisible();

  await page.getByPlaceholder("Password").click();

  await expect(page.getByText("Email is required")).toBeVisible();
});

test("Validate the bidirection data binding",async({page})=>{


})
