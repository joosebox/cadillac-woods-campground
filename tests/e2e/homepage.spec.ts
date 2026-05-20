import { expect, test } from '@playwright/test';

declare global {
  interface Window {
    gtagCalls?: unknown[][];
  }
}

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has Cadillac Woods title and hero CTA', async ({ page }) => {
    await expect(page).toHaveTitle(/Cadillac Woods Campground/);
    await expect(page.getByRole('heading', { name: /the road opens into the woods/i })).toBeVisible();
    await expect(page.locator('section').first().getByRole('link', { name: /book now/i })).toBeVisible();
  });

  test('navigation menu uses compact labels', async ({ page, isMobile }) => {
    if (isMobile) return;

    const navigation = page.getByRole('navigation', { name: /primary navigation/i });
    await expect(navigation.getByRole('link', { name: 'Stays' })).toBeVisible();
    await expect(navigation.getByRole('link', { name: 'Amenities' })).toBeVisible();
    await expect(navigation.getByRole('link', { name: 'Gallery' })).toBeVisible();
  });

  test('mobile menu toggles correctly', async ({ page, isMobile }) => {
    if (!isMobile) return;

    const menuButton = page.getByRole('button', { name: /toggle navigation/i });
    await expect(menuButton).toBeVisible();

    await menuButton.click();
    const mobileNav = page.getByRole('navigation', { name: /mobile navigation/i });
    await expect(mobileNav.getByRole('link', { name: 'Stays' })).toBeVisible();

    await menuButton.click();
    await expect(mobileNav.getByRole('link', { name: 'Stays' })).not.toBeVisible();
  });

  test('keeps rates, connectivity, cable, and sewer details cautious', async ({ page }) => {
    await expect(page.getByText(/starting rates currently range from \$25-\$75\/night on Campspot/i)).toBeVisible();
    await expect(page.getByText(/choose dates there for final totals/i)).toBeVisible();
    await expect(page.getByText(/cable TV/i)).toBeVisible();
    await expect(page.getByText(/sewer hookups/i)).toBeVisible();
  });

  test('footer contains real contact information', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toContainText('(231) 825-2012');
    await expect(footer).toContainText('cadillacwoodsmi@gmail.com');
    await expect(footer).toContainText('23163 M115, Tustin, MI 49688');
  });

  test('Book Now buttons track analytics', async ({ page }) => {
    await page.addInitScript(() => {
      window.gtag = (
        command: 'config' | 'event' | 'js',
        target: string | Date,
        params?: Record<string, string | number | boolean | undefined>
      ) => {
        window.gtagCalls = window.gtagCalls || [];
        window.gtagCalls.push([command, target, params]);
      };
    });

    await page.reload();
    const bookButton = page.locator('section').first().getByRole('link', { name: /book now/i });
    await bookButton.click({ modifiers: ['Meta'] });

    const gtagCalls = await page.evaluate(() => window.gtagCalls);
    expect(gtagCalls?.length ?? 0).toBeGreaterThan(0);
  });
});
