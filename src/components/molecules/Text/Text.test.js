import { render, screen } from '@testing-library/react';
import Text from './Text';

test('renders learn react h1', () => {
  render(<Text />);
  const linkElement = screen.getByText(/Hola Mundo/i);
  expect(linkElement).toBeInTheDocument();
});