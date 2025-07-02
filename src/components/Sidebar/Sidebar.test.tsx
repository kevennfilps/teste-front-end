import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import Sidebar from './Sidebar';

test('exibe menu quando aberto', () => {
    render(
        <MemoryRouter>
            <Sidebar open={true} onClose={() => { }} />
        </MemoryRouter>);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/^Clientes$/i)).toBeInTheDocument();
});
