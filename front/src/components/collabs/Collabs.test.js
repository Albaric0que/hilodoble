import { render, screen } from '@testing-library/react';
import Collabs from './Collabs';


test('renders title', () => {
    render(<Collabs />);
    const title = screen.getByText('Tiendas Amigas');
    expect(title).toBeInTheDocument();
})
