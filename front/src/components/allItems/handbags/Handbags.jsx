import { useLocation } from 'react-router-dom';

function Handbags() {
const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const category = queryParams.get('category');

const filteredItems = items.filter(item => {

        if (item.itemName.toUpperCase( ).includes (search.toUpperCase( ))) {
        
        return (
        <div className="containerCard">
    

        <Link key={item.id} to={`/showItem/${item.id}`} className="productContainer">
            <img src={item.image} alt={item.itemName} className="imgContainer"></img>
            <div>
                <h3 className="nameItem">{item.itemName}</h3>
                <h3 className="priceItem">{item.price}€</h3>
                <button className="cartBtn" onClick={() => handleAddToCart(item.id)}>
                Añadir al carrito
                </button>
            </div>;
        </Link>
        </div>
        );
        }
        return false;
});