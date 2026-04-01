import { render, screen } from '@testing-library/react';
import Button from '../Button';


describe('Button', () => {
  test('renders button text', () => {
    render(<Button label="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});