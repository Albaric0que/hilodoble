import { render, screen } from '@testing-library/react';
import Header from './Header';


test('render logo', () => {
    render(<Header />);
    const logo = screen.getByRole('img', {name:'Logotipo Hilodoble'});
    expect(logo).toBeInTheDocument();

})