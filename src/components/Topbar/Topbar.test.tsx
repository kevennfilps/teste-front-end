import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import Topbar from './Topbar';

test('mostra logo e links principais', () => {
  render(
    <MemoryRouter>
      <Topbar onMenuClick={() => {}} sidebarOpen={false} />
    </MemoryRouter>
  );
  expect(screen.getByText(/^Clientes$/i)).toBeInTheDocument();
});
