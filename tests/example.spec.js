// @ts-check
import { test, expect } from "@playwright/test";

test("Submission of foam", async ({ page }) => {
  // URL
  await page.goto("https://rahulshettyacademy.com/angularpractice/");
  await expect(
    page.getByRole("heading", { name: "Protractor Tutorial" }),
  ).toBeVisible();

  // Name
  // here we cant use the getByRole or getByLable beacuse
  // there ia no accessiablity name link e.g for, id; therefor we have to go with css locator

  await page
    .locator('input[name="name"]')
    .first()
    .pressSequentially("John Doe"); //CSS locator
  // Since the bidirectional data binding
  await expect(page.locator('input[name="name"]').first()).toHaveValue(
    "John Doe",
  );

  //  await page.getByLabel(/name/i).first().fill('John Doe');
  // await expect(page.getByLabel(/name/i).first()).toHaveValue('John Doe');

  //Email
  await page
    .locator('input[name="email"]')
    .pressSequentially("john.doe@example.com"); //CSS locator
  await expect(page.locator('input[name="email"]')).toHaveValue(
    "john.doe@example.com",
  );

  //Password
  await page
    .getByPlaceholder("Password")
    .pressSequentially("secretpassword123");

  //Love IceCreams! checkbox
  // here we can also use the lable because they are name linked.
  // await page.getByLabel('Check me out if you Love IceCreams!').check();
  // await expect(page.getByLabel('Check me out if you Love IceCreams!')).toBeChecked();

  await page
    .getByRole("checkbox", { name: "Check me out if you Love IceCreams!" })
    .check();
  await expect(
    page.getByRole("checkbox", { name: "Check me out if you Love IceCreams!" }),
  ).toBeChecked();

  // Select 'Female' from the 'Gender' dropdown

  // await page.getByLabel('Gender').selectOption('Female');
  // await expect(page.getByLabel('Gender')).toHaveValue('Female');

  await page.getByRole("combobox", { name: "Gender" }).selectOption("Male");
  await expect(page.getByRole("combobox", { name: "Gender" })).toHaveValue(
    "Male",
  ); //

  //Employment Status radio options
  const empStatus = ["Student", "Employed"];

  await page.getByRole("radio", { name: "Student" }).check();

  //Date of Birth
  // not work because 'for' is there but id is not there.
  // await page.getByLabel("Date of Birth").fill("2000-01-01");
  // await expect(page.getByLabel("Date of Birth")).toHaveValue("2000-01-01");

  await page.locator('input[name="bday"]').fill("1000-01-01");

  // Click the 'Submit' button
  await page.getByRole("button", { name: "Submit" }).click();

  // You would typically add an assertion here to verify the submission was successful,
  // such as checking for a confirmation message or a navigation event.
  // Example: await expect(page.getByText('Form Submitted Successfully!')).toBeVisible()
});

test("validate form submission", async ({ page }) => {});
