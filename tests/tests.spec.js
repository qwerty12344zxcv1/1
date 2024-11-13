// @ts-check
import { test, expect } from '@playwright/test';

test('step1', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await expect(page.getByRole('heading', { name: 'l1-element-layout-v1' })).toBeVisible();
});

test('step2', async ({ page }) => {
  await page.goto('http://localhost:8080');
  const table = await page.getByRole('table');
  await expect(page.getByRole('cell', { name: 'First Name' })).toBeVisible();
  await expect(table.getByRole('cell', { name: 'Malcolm' })).toBeVisible();
  await expect(table.getByRole('cell', { name: 'Pilot' })).toBeVisible();
  await expect(table.locator('tr').nth(3)).toHaveClass('disabled');
  await expect(page.locator('tr')).toHaveCount(4);
});

test('step3', async ({ page }) => {
  await page.goto('http://localhost:8080');
  const table = page.getByRole('table');
  await expect(table.locator('tr').nth(1)).toHaveCSS('background-color', 'rgb(2, 65, 86)');
  await expect(table.locator('tr').nth(3)).toHaveCSS('background-color', 'rgb(2, 65, 86)');
});

test('step4', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await expect(page).toHaveScreenshot({ maxDiffPixels: 10 });
});
