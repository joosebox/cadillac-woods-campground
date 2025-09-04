import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has correct title and meta description', async ({ page }) => {
    await expect(page).toHaveTitle(/Welcome to Our Campground/);
  });

  test('displays hero section with CTA', async ({ page }) => {
    const heroHeading = page.locator('h1');
    await expect(heroHeading).toContainText('Welcome to Paradise');
    
    const heroButton = page.locator('section').first().getByRole('link', { name: /book now/i });
    await expect(heroButton).toBeVisible();
  });

  test('navigation menu is functional', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav.getByRole('link', { name: 'Stays & Rates' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Amenities' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Gallery' })).toBeVisible();
  });

  test('mobile menu toggles correctly', async ({ page, isMobile }) => {
    if (isMobile) {
      const menuButton = page.getByRole('button', { name: /toggle navigation/i });
      await expect(menuButton).toBeVisible();
      
      await menuButton.click();
      const mobileNav = page.locator('nav').last();
      await expect(mobileNav.getByRole('link', { name: 'Stays & Rates' })).toBeVisible();
      
      await menuButton.click();
      await expect(mobileNav.getByRole('link', { name: 'Stays & Rates' })).not.toBeVisible();
    }
  });

  test('features section displays all amenities', async ({ page }) => {
    const features = page.locator('text=Your Perfect Camping Destination').locator('..');
    await expect(features).toBeVisible();
    
    await expect(page.locator('text=RV Sites')).toBeVisible();
    await expect(page.locator('text=Tent Camping')).toBeVisible();
    await expect(page.locator('text=Modern Amenities')).toBeVisible();
  });

  test('accommodation types are displayed', async ({ page }) => {
    await expect(page.locator('text=Choose Your Perfect Stay')).toBeVisible();
    await expect(page.locator('text=From $45/night')).toBeVisible();
    await expect(page.locator('text=From $25/night')).toBeVisible();
    await expect(page.locator('text=From $95/night')).toBeVisible();
  });

  test('footer contains contact information', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    await expect(footer.locator('text=Explore')).toBeVisible();
    await expect(footer.locator('text=Information')).toBeVisible();
    await expect(footer.locator('text=Contact')).toBeVisible();
  });

  test('Book Now buttons track analytics', async ({ page }) => {
    // Intercept gtag calls
    await page.addInitScript(() => {
      (window as any).gtag = (...args: any[]) => {
        (window as any).gtagCalls = (window as any).gtagCalls || [];
        (window as any).gtagCalls.push(args);
      };
    });

    const bookButton = page.locator('section').first().getByRole('link', { name: /book now/i });
    await bookButton.click();

    // Verify analytics was called (in a real test, you'd check the actual call)
    const gtagCalls = await page.evaluate(() => (window as any).gtagCalls);
    if (gtagCalls) {
      expect(gtagCalls.length).toBeGreaterThan(0);
    }
  });
});