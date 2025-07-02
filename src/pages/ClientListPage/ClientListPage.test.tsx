import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ClientListPage from './ClientListPage';

describe('ClientListPage', () => {
  it('renderiza o título de clientes encontrados', () => {
    render(
      <MemoryRouter>
        <ClientListPage />
      </MemoryRouter>
    );
    expect(screen.getByText(/clientes encontrados/i)).toBeInTheDocument();
  });
});
