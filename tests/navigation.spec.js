import { test, expect } from '@playwright/test';

test('Happy Path: Quote to Subscription', async ({ page }) => {
    // 1. Home Page
    await page.goto('/');
    await expect(page).toHaveTitle(/AssurMyBike/);

    // 2. Navigate to Quote
    await page.goto('/quote'); // Direct navigation is safer
    await expect(page).toHaveURL(/.*quote/);

    // 3. Fill Quote Form
    // Use generic selectors based on type or order if translation/placeholder is tricky
    await page.locator('input[type="number"]').fill('3000');
    await page.locator('input[type="date"]').fill('2024-01-01');

    // Click submit button (usually the first button in the form or the main action)
    await page.locator('button[type="submit"]').click();

    // 4. Verify Quote Result
    // Check if result card appears (it has specific style or content)
    await expect(page.locator('.glass-card').last()).toBeVisible();
    await expect(page.getByText('€').first()).toBeVisible();

    // 5. Proceed to Subscription
    // Click the "Subscribe" button (it's the second button, outside the form usually, or in the result card)
    // We can use the text from the button, but let's try finding the link/button that navigates
    await page.locator('.glass-card button').last().click();

    // 6. Verify URL change
    await expect(page).toHaveURL(/.*subscription/);
});
