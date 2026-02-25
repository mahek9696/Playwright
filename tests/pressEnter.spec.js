const { test, expect } = require("@playwright/test");

test("login using fill(), type(), click(), and press()", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");

  // await page.keyboard.press("Tab");
  // await page.keyboard.press("Tab");
  // await page.keyboard.type("tomsmith");
  // await page.keyboard.press("Tab");
  // await page.keyboard.type("SuperSecretPassword!");
  // await page.keyboard.press("Tab");
  // await page.keyboard.press("Enter");
  await page.pause();
  await page.getByLabel("Username").fill("tomsmith");
  await page.getByLabel("Password").type("SuperSecretPassword!"); //submit using Enter key instead of clicking
  await page.keyboard.press("Enter");

  // await page.getByLabel("Password").press("Enter");

  await expect(page.getByRole("heading", { name: "Welcome" })).toContainText(
    "Welcome",
  );

  await page.pause();
});
