// @ts-check
import { test, expect } from "@playwright/test";

// Validate the frame by using the index;

test("TC_01_Targeting the frame by its index", async ({ page }) => {
  // 3. target the frame by its index

  const allFrames = page.frames(); // Get all frames and pick the first one

  const count = allFrames.length; // return the frame objects counts so it return 6

  for (let i = 1; i < count; i++) {
    const frame = allFrames[i]; // Index 0 is the main page/root, Index 1 is th

    await frame.locator(`input[name=mytext${i}]`).fill(`Hello World ${i} !`);

    await expect(frame.locator(`input[name=mytext${i}]`)).toHaveValue(
      `Hello World ${i} !`,
    );
  }
});

test.only("TC_02_iFrame Locator of the frame", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  // 1. target the frame by using the page.frameLocator().

  const allFrame = page.frames(); // return the frame objects - <frameset> <frames> <frames>

  const parentFrame = allFrame[3];

  const childFrame = parentFrame.frameLocator('iframe[src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]'); // if first frame - use frame and Nested - use iframe.

  await expect(parentFrame.locator("p")).toHaveText("iframe inside frame:");

  await expect(childFrame.locator('body')).toContainText('Form Filling Demo Page');


  //2.  by using the page.frame
  // const frame1 = page.frame({ url: /frame1\.html/ });
  // if(frame1)
  // {
  // await frame1.locator('input[name="mytext1"]').fill("Hell World!");

  // await expect(frame1.locator('input[name="mytext1"]')).toHaveValue(
  //   "Hell World!",
  // );
  // }

});
