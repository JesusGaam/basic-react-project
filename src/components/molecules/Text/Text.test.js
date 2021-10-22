import { render, screen } from '@testing-library/react';
import Text from './'

test('renders learn react h1', () => {
  render(<Text />);
  const linkElement = screen.getByText(/Hola Mundo/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders learn react SVG', () => {
  render(<Text />);
  const linkElement = screen.getByAltText("alien");
  expect(linkElement).toBeInTheDocument();
});