import { render, screen } from '@testing-library/react';
import Header from './Header';


test('render logo', () => {
    render(<Header />);
    const logo = screen.getByRole('img', {name:'logotipoHilodoble'});
    expect(logo).toBeInTheDocument();

})