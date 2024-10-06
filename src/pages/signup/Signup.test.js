import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Signup from './Signup';
import useSignup from '../../hooks/useSignup';

// Mock the useSignup hook
jest.mock('../../hooks/useSignup');

describe('Signup Component', () => {
  beforeEach(() => {
    useSignup.mockReturnValue({
      name: '',
      setName: jest.fn(),
      email: '',
      setEmail: jest.fn(),
      password: '',
      setPassword: jest.fn(),
      callSignup: jest.fn(),
    });
  });

  test('renders the signup form', () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Sign Up/i })).toBeInTheDocument();
  });

  test('shows validation errors when submitting empty form', () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: /Sign Up/i }));

    expect(screen.getByText(/Username is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
  });

  test('shows email validation error when invalid email is entered', () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), {
      target: { value: 'invalidemail' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Sign Up/i }));

    expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();
  });

  test('displays password strength feedback based on input', () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    const passwordInput = screen.getByPlaceholderText(/Enter your password/i);

    // Weak password (only lowercase)
    fireEvent.change(passwordInput, { target: { value: 'abc' } });
    expect(screen.getByText(/At least 8 characters/i)).toHaveClass('text-gray-500');
    expect(screen.getByText(/At least one uppercase letter/i)).toHaveClass('text-gray-500');

    // Stronger password
    fireEvent.change(passwordInput, { target: { value: 'Abc12345!' } });
    expect(screen.getByText(/At least 8 characters/i)).toHaveClass('text-green-500');
    expect(screen.getByText(/At least one uppercase letter/i)).toHaveClass('text-green-500');
    expect(screen.getByText(/At least one number/i)).toHaveClass('text-green-500');
    expect(screen.getByText(/At least one special character/i)).toHaveClass('text-green-500');
  });

  test('calls the signup function with valid input', () => {
    const mockCallSignup = jest.fn();

    useSignup.mockReturnValue({
      name: 'TestUser',
      setName: jest.fn(),
      email: 'test@example.com',
      setEmail: jest.fn(),
      password: 'Password123!',
      setPassword: jest.fn(),
      callSignup: mockCallSignup,
    });

    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: /Sign Up/i }));

    expect(mockCallSignup).toHaveBeenCalledWith('TestUser', 'test@example.com', 'Password123!');
  });

  test('renders link to login page', () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    const loginLink = screen.getByText(/Login/i);
    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute('href', '/login');
  });
});
