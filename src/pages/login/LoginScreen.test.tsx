import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LoginScreen from './LoginScreen';

describe('LoginScreen', () => {
  it('renderiza campo para digitar o nome', () => {
    render(
      <MemoryRouter>
        <LoginScreen />
      </MemoryRouter>
    );
    expect(screen.getByPlaceholderText(/Digite o seu nome/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
  });
});
