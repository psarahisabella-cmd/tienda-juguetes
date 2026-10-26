import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const Cart = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <main className="container empty-state">
        <h2>Tu carrito está vacío 🎈</h2>
        <p>Aún no has agregado ningún juguete.</p>
        <Link to="/" className="btn-primary">
          Ir a ver juguetes
        </Link>
      </main>
    );
  }

  return (
    <main className="container">
      <h2>Tu Carrito de Compras</h2>
      <div className="cart-list">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h4>{item.name}</h4>
              <p>Precio unitario: ${item.price}</p>
              <p>Cantidad: <strong>{item.quantity}</strong></p>
            </div>
            <div className="item-actions">
              <span className="subtotal">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="btn-danger"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total a Pagar: ${totalPrice}</h3>
        <div className="summary-buttons">
          <button onClick={clearCart} className="btn-outline">
            Vaciar Carrito
          </button>
          <button
            onClick={() => alert("¡Compra simulada con éxito!")}
            className="btn-primary"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </main>
  );
};