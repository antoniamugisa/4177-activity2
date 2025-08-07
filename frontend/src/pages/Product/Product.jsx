import React from "react";
import Header from "../../components/Header";

const products = [
  { id: 1, name: "Laptop", description: "A powerful laptop.", price: "$999" },
  { id: 2, name: "Headphones", description: "Noise-cancelling headphones.", price: "$199" },
  { id: 3, name: "Smartphone", description: "Latest model smartphone.", price: "$799" },
];

const Product = () => {
  return (
    <>
      <section>
        <Header />
        <div>
          <h1>Products</h1>
          <ul>
            {products.map(product => (
              <li key={product.id} style={{ marginBottom: "1rem" }}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p><strong>Price:</strong> {product.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Product;