import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SelectedClientsPage from './SelectedClientsPage';
import { SelectedClientsProvider } from '../../contexts/SelectedClientsContext';

describe('SelectedClientsPage', () => {
  it('renderiza o título de clientes selecionados', () => {
    render(
      <MemoryRouter>
        <SelectedClientsProvider>
          <SelectedClientsPage />
        </SelectedClientsProvider>
      </MemoryRouter>
    );
    expect(screen.getByText("Clientes selecionados:")).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /limpar clientes selecionados/i })).toBeInTheDocument();
  });
});
