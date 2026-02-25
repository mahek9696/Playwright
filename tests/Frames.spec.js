// @ts-check
import { test, expect } from "@playwright/test";

test('iFrame Locator Example', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');

  // 1. "Jump" into the top frame
  const topFrame = page.frameLocator('frame[name="frame-top"]');

  // 2. "Jump" into the middle frame (which is inside the top frame)
  const middleFrame = topFrame.frameLocator('frame[name="frame-middle"]');

  // 3. Now use a normal locator INSIDE that frame context
  const middleText = middleFrame.locator('#content');

  // Assertion: Check if the text is 'MIDDLE'
  await expect(middleText).toHaveText('MIDDLE');
});