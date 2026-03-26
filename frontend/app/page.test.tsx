import { render, screen } from '@testing-library/react';
import LoginPage from './page';

describe('LoginPage', () => {
  it('renders required login form shell', () => {
    render(<LoginPage />);

    expect(screen.getByRole('heading', { name: /login flow/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/username or email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('uses password input type masking', () => {
    render(<LoginPage />);

    expect(screen.getByLabelText(/password/i)).toHaveAttribute('type', 'password');
  });
});
