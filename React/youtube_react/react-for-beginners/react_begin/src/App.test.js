import { render, screen } from '@testing-library/react';
import App from './(1)_state,map,prop';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
