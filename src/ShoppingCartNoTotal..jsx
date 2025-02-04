import { useState } from "react";

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [newItem, setNewItem] = useState({ product: "", quantity: 1, price: 10 });

  const addItem = (e) => {
    e.preventDefault();
    if (newItem.product.trim() !== "") {
      setCart([...cart, newItem]);
      setNewItem({ product: "", quantity: 1, price: 10 });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: name === "quantity" || name === "price" ? parseInt(value) : value,
    });
  };

  return (
    <div>
      <h3>ShoppingCart without total</h3>
      <form onSubmit={addItem}>
        <input
          type="text"
          name="product"
          value={newItem.product}
          onChange={handleInputChange}
          placeholder="Item name"
          required
        />
        <input
          type="number"
          name="quantity"
          value={newItem.quantity}
          onChange={handleInputChange}
          placeholder="Quantity"
          min="1"
          required
        />
        <input
          type="number"
          name="price"
          value={newItem.price}
          onChange={handleInputChange}
          placeholder="Price"
          min="0"
          required
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.product} - Quantity: {item.quantity}, Price: ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
