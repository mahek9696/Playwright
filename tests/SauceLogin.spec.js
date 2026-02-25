import { test, describe, expect } from "@playwright/test";

const testData = [
  {
    TC: "TC1 Valid data",
    username: "standard_user",
    password: "secret_sauce",
    expected: "success",
  },
  {
    TC: "TC2 Blank username and filled password",
    username: "",
    password: "secret_sauce",
    expected: "Epic sadface: Username is required",
  },
  {
    TC: "TC3 Blank password and filled username",
    username: "standard_user",
    password: "",
    expected: "Epic sadface: Password is required",
  },
  {
    TC: "TC4 Blank username and filled password",
    username: "locked_out_user",
    password: "secret_sauce",
    expected: "Epic sadface: Sorry, this user has been locked out.",
  },
  {
    TC: "TC5 Invalid username and correct password",
    username: "standard_userr",
    password: "secret_sauce",
    expected:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    TC: "TC6 Invalid password and correct username",
    username: "standard_user",
    password: "secret_saucee",
    expected:
      "Epic sadface: Username and password do not match any user in this service",
  },
  // {
  //   TC: "TC7 With performance glitch user",
  //   username: "performance_glitch_user",
  //   password: "secret_sauce",
  //   expected: "sucess",
  // },
];


for (const data of testData) {
  test(`${data.TC}`, async({ page }) => {
    await page.goto("https://www.saucedemo.com");

    await page.getByPlaceholder("Username").fill(data.username);
    await page.getByPlaceholder("Password").fill(data.password);

    await page.getByText("Login").click();

    if (data.expected === "success") {
      await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    } else {
      await expect(page.locator('[data-test="error"]')).toHaveText(data.expected);
    }
  });
}



