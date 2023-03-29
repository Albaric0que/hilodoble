import { render, screen } from '@testing-library/react';
import Header from './Header';


test('render logo', () => {
    render(<Header />);
    const logo = screen.getByAltText('logotipo');
    expect(logo).toBeInTheDocument();
})