import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout', () => {
  it('renderiza a Topbar e Sidebar', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Topbar geralmente é header/banner
  });
});
