import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import ContactPage from '../page';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

describe('Contact Form', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all form fields', () => {
    render(<ContactPage />);

    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /phone/i })).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /service of interest/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /message/i })).toBeInTheDocument();
    expect(
      screen.getByRole('checkbox', { name: /i agree to the privacy policy/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send enquiry/i })).toBeInTheDocument();
  });

  it('shows validation errors for empty required fields', async () => {
    const user = userEvent.setup();
    render(<ContactPage />);

    const submitButton = screen.getByRole('button', { name: /send enquiry/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument();
      expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
      expect(screen.getByText(/please enter a valid phone number/i)).toBeInTheDocument();
      expect(screen.getByText(/please select a service/i)).toBeInTheDocument();
      expect(screen.getByText(/message must be at least 10 characters/i)).toBeInTheDocument();
      expect(screen.getByText(/you must agree to the privacy policy/i)).toBeInTheDocument();
    });
  });

  it('validates email format', async () => {
    const user = userEvent.setup();
    render(<ContactPage />);

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    await user.type(emailInput, 'invalid-email');
    const submitButton = screen.getByRole('button', { name: /send enquiry/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
    });
  });

  it('validates phone number format', async () => {
    const user = userEvent.setup();
    render(<ContactPage />);

    const phoneInput = screen.getByRole('textbox', { name: /phone/i });
    await user.type(phoneInput, '123');
    const submitButton = screen.getByRole('button', { name: /send enquiry/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Please enter a valid phone number')).toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    const user = userEvent.setup();
    render(<ContactPage />);

    await user.type(screen.getByRole('textbox', { name: /name/i }), 'John Doe');
    await user.type(screen.getByRole('textbox', { name: /email/i }), 'john@example.com');
    await user.type(screen.getByRole('textbox', { name: /phone/i }), '0123456789');

    const serviceSelect = screen.getByRole('combobox', { name: /service of interest/i });
    await user.click(serviceSelect);
    const anxietyOption = await screen.findByRole('option', { name: /anxiety & stress relief/i });
    await user.click(anxietyOption);

    await user.type(
      screen.getByRole('textbox', { name: /message/i }),
      'I would like help with anxiety management'
    );
    await user.click(screen.getByRole('checkbox', { name: /i agree to the privacy policy/i }));

    await user.click(screen.getByRole('button', { name: /send enquiry/i }));

    await waitFor(
      () => {
        expect(screen.getByText(/thank you!/i)).toBeInTheDocument();
        expect(screen.getByText(/your enquiry has been sent successfully/i)).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });

  it('honeypot field is hidden', () => {
    const { container } = render(<ContactPage />);

    // Find the honeypot input field
    const honeypotInput = container.querySelector('input[name="honeypot"]');
    expect(honeypotInput).toBeInTheDocument();

    // Check that its parent FormItem has the hidden class
    const formItem = honeypotInput?.closest('[data-slot="form-item"]');
    expect(formItem).toHaveClass('hidden');
  });
});
