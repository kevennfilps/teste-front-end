import { render, screen, fireEvent } from '@testing-library/react';
import ConfirmDeleteModal from './ConfirmDeleteModal';

test('exibe modal de exclusão e confirma', () => {
  const handleConfirm = jest.fn();
  render(
    <ConfirmDeleteModal open={true} onClose={() => {}} onConfirm={handleConfirm} clientName="João" />
  );
  expect(screen.getByText(/Excluir cliente:/i)).toBeInTheDocument(); // Título
  expect(screen.getByText(/João/)).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /Excluir cliente/i }));
  expect(handleConfirm).toHaveBeenCalled();
});

