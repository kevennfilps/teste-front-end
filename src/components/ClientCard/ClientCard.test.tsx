import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ClientCard from './ClientCard';
import { SelectedClientsProvider } from '../../contexts/SelectedClientsContext';

const fakeClient = {
  id: 1,
  name: "Eduardo",
  salary: 3500,
  companyValuation: 120000,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

test('exibe o nome do cliente', () => {
  render(
    <SelectedClientsProvider>
      <ClientCard
        client={fakeClient}
        onEdit={() => {}}
        onDelete={() => {}}
        onSelect={() => {}}
        isSelected={false}
      />
    </SelectedClientsProvider>
  );
  expect(screen.getByText(/Eduardo/i)).toBeInTheDocument();
});
