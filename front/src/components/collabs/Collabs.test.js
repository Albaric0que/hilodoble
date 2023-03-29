import { render, screen } from '@testing-library/react';
import Collabs from './Collabs';
import { MemoryRouter } from 'react-router-dom';


test('renders title', () => {
    render(<MemoryRouter><Collabs /></MemoryRouter>);
    const titleElement = screen.getByText('Tiendas Amigas');
    expect(titleElement).toBeInTheDocument();
    });

    test('renders store information', () => {
        render(<MemoryRouter><Collabs /></MemoryRouter>);
        const storeName = screen.getByText('Clínica de la Bicicleta');
        const storeAddress = screen.getByText('C/Poeta Salvador Ibarra España, 2 (Barriada La Roca) 29011 Málaga.');
        expect(storeName).toBeInTheDocument();
        expect(storeAddress).toBeInTheDocument();
    });
