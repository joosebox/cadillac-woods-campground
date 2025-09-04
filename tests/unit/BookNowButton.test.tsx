import { render, screen, fireEvent } from '@testing-library/react';
import { BookNowButton } from '@/components/book-now-button';
import { vi, describe, it, expect } from 'vitest';
import * as analytics from '@/lib/analytics';

vi.mock('@/lib/analytics', () => ({
  trackBookNowClick: vi.fn(),
}));

describe('BookNowButton', () => {
  it('renders with default text', () => {
    render(<BookNowButton source="test" />);
    expect(screen.getByText('Book Now')).toBeInTheDocument();
  });

  it('renders with custom text', () => {
    render(<BookNowButton source="test">Reserve Your Spot</BookNowButton>);
    expect(screen.getByText('Reserve Your Spot')).toBeInTheDocument();
  });

  it('tracks click events', () => {
    const trackSpy = vi.spyOn(analytics, 'trackBookNowClick');
    render(<BookNowButton source="test_source" />);
    
    const button = screen.getByRole('link');
    fireEvent.click(button);
    
    expect(trackSpy).toHaveBeenCalledWith('test_source');
  });

  it('applies correct size classes', () => {
    const { rerender } = render(<BookNowButton source="test" size="sm" />);
    let button = screen.getByRole('link');
    expect(button).toHaveClass('px-4', 'py-2', 'text-sm');

    rerender(<BookNowButton source="test" size="lg" />);
    button = screen.getByRole('link');
    expect(button).toHaveClass('px-8', 'py-4', 'text-lg');
  });

  it('applies correct variant classes', () => {
    const { rerender } = render(<BookNowButton source="test" variant="primary" />);
    let button = screen.getByRole('link');
    expect(button).toHaveClass('bg-primary-600', 'text-white');

    rerender(<BookNowButton source="test" variant="secondary" />);
    button = screen.getByRole('link');
    expect(button).toHaveClass('bg-white', 'text-primary-700');
  });

  it('opens in new tab', () => {
    render(<BookNowButton source="test" />);
    const button = screen.getByRole('link');
    expect(button).toHaveAttribute('target', '_blank');
    expect(button).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('has accessible label', () => {
    render(<BookNowButton source="test" />);
    const button = screen.getByRole('link');
    expect(button).toHaveAttribute('aria-label', 'Book now - opens in new window');
  });
});