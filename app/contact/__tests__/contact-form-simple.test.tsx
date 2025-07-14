import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import ContactPage from '../page';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

describe('Contact Form - Simple Tests', () => {
  it('renders contact form correctly', () => {
    render(<ContactPage />);

    // Check page title parts
    expect(screen.getByText('Get in')).toBeInTheDocument();
    expect(screen.getByText('Touch')).toBeInTheDocument();

    // Check form is rendered
    expect(screen.getByText('Send an Enquiry')).toBeInTheDocument();

    // Check form fields exist
    expect(screen.getByPlaceholderText('Your full name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('your@email.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('07XXX XXXXXX')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Tell me a bit about/i)).toBeInTheDocument();

    // Check submit button
    expect(screen.getByRole('button', { name: /send enquiry/i })).toBeInTheDocument();
  });

  it('shows thank you message after successful submission', async () => {
    const user = userEvent.setup();
    render(<ContactPage />);

    // Fill out the form with valid data
    await user.type(screen.getByPlaceholderText('Your full name'), 'John Doe');
    await user.type(screen.getByPlaceholderText('your@email.com'), 'john@example.com');
    await user.type(screen.getByPlaceholderText('07XXX XXXXXX'), '07123456789');

    // Select service
    const serviceSelect = screen.getByRole('combobox');
    await user.click(serviceSelect);
    const anxietyOptions = await screen.findAllByText('Anxiety & Stress Relief');
    await user.click(anxietyOptions[0]);

    // Fill message
    await user.type(
      screen.getByPlaceholderText(/Tell me a bit about/i),
      'I need help with anxiety management'
    );

    // Accept privacy policy
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);

    // Submit form
    const submitButton = screen.getByRole('button', { name: /send enquiry/i });
    await user.click(submitButton);

    // Check for success message
    expect(await screen.findByText('Thank You!')).toBeInTheDocument();
    expect(await screen.findByText(/Your enquiry has been sent successfully/i)).toBeInTheDocument();
  });
});
