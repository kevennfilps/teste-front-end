import { render, screen } from '@testing-library/react';
import ClientModal from './ClientModal';

test('exibe modal de criar cliente', () => {
  render(<ClientModal open={true} onClose={() => {}} onSuccess={() => {}} />);
  expect(screen.getByText(/Criar cliente:/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Criar cliente/i })).toBeInTheDocument();
});
