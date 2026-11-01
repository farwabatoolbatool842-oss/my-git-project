import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Radiance Face Serum",
    price: 2499,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600"
  },
  {
    id: 2,
    name: "Luxury Face Cream",
    price: 1899,
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600"
  },
  {
    id: 3,
    name: "Glow Skincare Oil",
    price: 2199,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600"
  }
];

function App() {
  const [cart, setCart] = useState([]);

  // Add product to cart
  function addToCart(product) {
    setCart((previousCart) => [...previousCart, product]);
    alert(product.name + " added to your cart!");
  }

  // Remove product from cart
  function removeFromCart(indexToRemove) {
    setCart((previousCart) =>
      previousCart.filter((item, index) => index !== indexToRemove)
    );
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <nav>
        <div className="logo">LUNARA</div>

        <div className="links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
          <a href="#cart">🛍️ Cart ({cart.length})</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <p>THE ART OF NATURAL BEAUTY</p>
        <h1>LUNARA</h1>
        <h2>Discover Your Natural Beauty</h2>
        <p>Luxury Beauty & Skincare Collection</p>

        <button
          onClick={() =>
            document.getElementById("products").scrollIntoView({
              behavior: "smooth"
            })
          }
        >
          SHOP NOW
        </button>
      </section>

      <section className="products" id="products">
        <p className="small-title">OUR COLLECTION</p>
        <h2>Explore Our Best Sellers</h2>

        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />

              <h3>{product.name}</h3>

              <p>
                Rs. {product.price.toLocaleString("en-PK")}
              </p>

              <button onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="cart-section" id="cart">
        <h2>Your Shopping Cart 🛍️</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <p>
                  {item.name} — Rs.{" "}
                  {item.price.toLocaleString("en-PK")}
                </p>

                <button onClick={() => removeFromCart(index)}>
                  Remove
                </button>
              </div>
            ))}

            <h3>
              Total: Rs. {total.toLocaleString("en-PK")}
            </h3>

            <button onClick={() => alert("Thank you for shopping with LUNARA!")}>
              Checkout
            </button>
          </>
        )}
      </section>

      <footer id="contact">
        <h2>LUNARA</h2>
        <p>Beauty Begins With You.</p>
        <p>© 2026 LUNARA. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;