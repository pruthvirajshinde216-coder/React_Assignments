import { useState } from "react";

function ProductQuantity() {
  const price = 50000;

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="card">
      <h2>Assignment 2 : Product Quantity Selector</h2>

      <h3>Laptop</h3>
      <p>Price : ₹{price}</p>

      <button
  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
  style={{
    backgroundColor: "#14aabd",
    color: "black",
    border: "2px solid #805386",
    borderRadius: "30px",
    padding: "5px 20px",
    cursor: "pointer",
    margin: "10px",
    transition: "0.3s",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    fontWeight: "bold"
  }}
>
  -
</button>

<span className="qty">{quantity}</span>

<button
  onClick={() => setQuantity(quantity + 1)}
  style={{
    backgroundColor: "#14aabd",
    color: "black",
    border: "2px solid #805386",
    borderRadius: "30px",
    padding: "5px 20px",
    cursor: "pointer",
    margin: "10px"
  }}
>
  +
</button>

      <p>Quantity : {quantity}</p>
      <p>Total Amount : ₹{price * quantity}</p>
    </div>
  );
}

export default ProductQuantity;