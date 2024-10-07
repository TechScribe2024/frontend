import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';  // for Link navigation
import Login from './Login';
import useLogin from '../../hooks/useLogin';

// Mocking the useLogin hook
jest.mock('../../hooks/useLogin');

describe('Login Component', () => {
  beforeEach(() => {
    useLogin.mockReturnValue({
      email: '',
      setEmail: jest.fn(),
      password: '',
      setPassword: jest.fn(),
      callLogin: jest.fn(),
    });
  });

  test('renders the Login form', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
    expect(screen.getByText(/Don't have an account\?/i)).toBeInTheDocument();
  });

  test('shows validation errors when form is submitted with empty fields', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
  });

  test('shows email validation error when an invalid email is entered', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), {
      target: { value: 'invalidemail' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();
  });

  test('submits the form when valid input is provided', () => {
    const mockCallLogin = jest.fn();

    useLogin.mockReturnValue({
      email: 'test@example.com',
      setEmail: jest.fn(),
      password: 'password123',
      setPassword: jest.fn(),
      callLogin: mockCallLogin,
    });

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    expect(mockCallLogin).toHaveBeenCalledWith('test@example.com', 'password123');
  });

  test('renders a link to the signup page', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const signupLink = screen.getByText(/Signup/i);
    expect(signupLink).toBeInTheDocument();
    expect(signupLink.closest('a')).toHaveAttribute('href', '/signup');
  });
});
