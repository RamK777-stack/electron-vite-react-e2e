import { test, expect, _electron as electron } from "@playwright/test";

test.skip("homepage has title and links", async () => {
  const app = await electron.launch({ args: [".", "--no-sandbox"] });
  const page = await app.firstWindow();

  //steps 
  //step 1 check whether the title present in the page
  await test.step('check title present', async () => {
    expect(await page.title()).toBe("Electron + Vite + React");
    // await page.screenshot({ path: `e2e/screenshots/${faker.lorem.word({ length: 5 })}.png` });
    await page.screenshot({ path: `e2e/screenshots/counter-0.png` });

    //step 2: click on counter button
    await test.step('click counter', async () => {
      await page.getByText('count is 0').click();
      await expect(page.getByText('count is 1')).toBeVisible();
      await page.screenshot({ path: `e2e/screenshots/counter-1.png` });

      await test.step('page navigation', async () => {
        await page.getByText('Go to cart').click();
        await expect(page.getByText('cart')).toBeVisible();

        await test.info().attach('screenshot', {
          body: await page.screenshot(),
          contentType: 'image/png',
        });
      })
    })
  })
});


