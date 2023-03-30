import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';


function CartUser() {
    const [cartItems, setCartItems] = useState([]);
    const [newQuantity, setNewQuantity] = useState('');
    


    useEffect(() => {
        axios
            .get('http://localhost:8000/api/cart')
            .then((response) => {
                setCartItems(response.data);
            })
            .catch((error) => {
                if (error.response && error.response.status === 401) {
                    this.props.history.push('/login'); // Redirect to login page
                } else {
                console.error(error);
                }
            });
        }, []);
    

    const handleUpdateQuantity = (event) => {
        event.preventDefault();
        const itemId = event.target.elements.itemId.value;

        axios
        .put(`http://localhost:8000/api/cart/${itemId}`, {
            purchaseQuantity: newQuantity,
        })
        .then((response) => {
            setCartItems(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    };

    const handleRemoveItem = (event) => {
        event.preventDefault();
        const itemId = event.target.elements.itemId.value;

        axios
        .delete(`http://localhost:8000/api/cart/${itemId}`)
        .then((response) => {
            setCartItems(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    };

    return (
        <div className="container">
        <p>
            Carrito de compras de{' '}
            <strong style={{ fontSize: '20px', color: 'blueviolet' }}>User</strong>
        </p>

        {cartItems.length === 0 && <p>No hay productos en tu carrito.</p>}

        {cartItems.length > 0 && (
            <>
            <table className="table">
                <thead>
                <tr>
                    <th>Nombre del producto</th>
                    <th>Precio unitario</th>
                    <th>Cantidad</th>
                    <th>Precio total</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {cartItems.map((cartItem) => (
                    <tr key={cartItem.id}>
                    <td>{cartItem.item.itemName}</td>
                    <td>{cartItem.item.price}</td>
                    <td>
                        <form onSubmit={handleUpdateQuantity}>
                        <input
                            type="number"
                            name="quantity"
                            value={newQuantity}
                            onChange={(e) => setNewQuantity(e.target.value)}
                            min="1"
                        />
                        <button type="submit">Update</button>
                        <input type="hidden" name="itemId" value={cartItem.item.id} />
                        </form>
                    </td>
                    <td>{cartItem.item.price * cartItem.purchaseQuantity} €</td>
                    <td>
                        <form onSubmit={handleRemoveItem}>
                        <button type="submit">Remove</button>
                        <input type="hidden" name="itemId" value={cartItem.item.id} />
                        </form>
                    </td>
                    </tr>
                ))}
                <tr>
                    <td colSpan="3" className="text-right">
                    <strong>Total:</strong>
                    </td>
                    <td>
                    <strong>
                        {cartItems.reduce(
                        (total, cartItem) =>
                            total + cartItem.item.price * cartItem.purchaseQuantity,
                        0
                        )}{' '}
                        €
                    </strong>
                    </td>
                    <td>
                    <Link to="/checkout" className="btn btn-success">
                        Checkout
                    </Link>
                    </td>
                </tr>
                </tbody>
            </table>
        
            <div className="text-center">
                <Link to="/allItems" className="btn btn-primary">
                    Seguir comprando
                </Link>
                <button className="btn btn-success" disabled>
                    Pagar
                </button>
                </div>
            </>
            )}
        </div>
    );
}
export default CartUser;