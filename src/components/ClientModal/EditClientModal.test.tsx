import { render, screen } from '@testing-library/react';
import EditClientModal from './EditClientModal';

const fakeClient = {
  id: 1,
  name: "Edit Me",
  salary: 5000,
  companyValuation: 100000,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};

test('exibe modal de editar cliente', () => {
  render(
    <EditClientModal open={true} onClose={() => {}} onSuccess={() => {}} client={fakeClient} />
  );
  expect(screen.getByText(/Editar cliente:/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Editar cliente/i })).toBeInTheDocument();
  expect(screen.getByDisplayValue(/Edit Me/i)).toBeInTheDocument();
});

