import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import { dirname } from 'path';


dotenv.config({ path: dirname(".env") });



test('should login', async ({ page }) => {
  await page.goto('/login');
  await page.getByRole('main').getByRole('textbox', { name: 'Please Enter Your Email' }).fill('test');
  await page.getByRole('main').getByRole('textbox', { name: 'Please Enter Your Password' }).fill('test');
  await page.getByRole('button', { name: 'Login' }).click();
  console.log(`Current URL: ${process.env.BASE_URL}`);
  await expect(page).toHaveURL(`${process.env.BASE_URL}/login`);
});
