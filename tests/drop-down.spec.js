import { test, expect } from "@playwright/test";

test("Normal drop-down", async ({ page }) => {
  await page.goto("https://www.w3schools.com/howto/howto_custom_select.asp");
  // Custom Drop down

  await page.pause();
  await page.locator('.select-selected').click();
  await page.locator('.select-items').getByText('BMW').click();

  await expect(page.locator('.same-as-selected')).toHaveText('BMW')

});
