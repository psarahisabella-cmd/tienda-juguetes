import { TOYS } from "../data/toys";
import { useCart } from "../context/CartContext";

export const Home = () => {
  const { addToCart } = useCart();

  return (
    <main className="container">
      <h2>Catálogo de Juguetes</h2>
      <p>Selecciona tus juguetes favoritos y agrégalos al carrito.</p>

      <div className="product-grid">
        {TOYS.map((toy) => (
          <div key={toy.id} className="toy-card">
            <img src={toy.image} alt={toy.name} className="toy-image" />
            <div className="toy-info">
              <h3>{toy.name}</h3>
              <p className="description">{toy.description}</p>
              <div className="card-footer">
                <span className="price">${toy.price}</span>
                <button onClick={() => addToCart(toy)} className="btn-primary">
                  Agregar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
