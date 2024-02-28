import { test, expect, _electron as electron } from "@playwright/test";
// import { faker } from '@faker-js/faker';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

test.beforeAll(async () => {
  console.log('Before tests');
});

test.afterAll(async () => {
  console.log('After tests');
});

test("homepage has title and links", async () => {
  const app = await electron.launch({ args: [".", "--no-sandbox"] });
  const page = await app.firstWindow();
  expect(await page.title()).toBe("Electron + Vite + React");
  // await page.screenshot({ path: `e2e/screenshots/${faker.lorem.word({ length: 5 })}.png` });
  await page.screenshot({ path: `e2e/screenshots/counter-0.png` });
  
  await page.getByText('count is 0').click();
  await expect(page.getByText('count is 1')).toBeVisible();
  await page.screenshot({ path: `e2e/screenshots/counter-1.png` });

  await page.getByText('Go to cart').click();
  await expect(page.getByText('cart')).toBeVisible();
});


