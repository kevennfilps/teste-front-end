import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

test('mostra página ativa e muda de página', () => {
  const handleChange = jest.fn();
  render(
    <Pagination currentPage={2} totalPages={5} onPageChange={handleChange} />
  );
  expect(screen.getByText("2")).toHaveClass("active"); // ou ajuste se usar outra classe

  fireEvent.click(screen.getByText("3"));
  expect(handleChange).toHaveBeenCalledWith(3);
});
