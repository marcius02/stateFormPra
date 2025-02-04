import { useState } from "react";

export default function ShoppingCart() {
  const [cart, setCart] = useState({
    total: 0,
    items: [],
  });
  const [newItem, setNewItem] = useState({ name: "", price: 0, quantity: 1 });

  const addItem = (e) => {
    e.preventDefault();
    const updatedItems = [...cart.items, newItem];
    const newTotal = updatedItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setCart({
      total: newTotal,
      items: updatedItems,
    });
    setNewItem({ name: "", price: 0, quantity: 1 });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]:
        name === "price" || name === "quantity" ? parseFloat(value) : value,
    });
  };

  return (
    <div>
      <h3>ShoppingCart</h3>
      <p>Item name / price / qty </p>
      <form onSubmit={addItem}>
        <input
          type="text"
          name="name"
          value={newItem.name}
          onChange={handleInputChange}
          placeholder="Item name"
          required
        />
        <input
          type="number"
          name="price"
          value={newItem.price}
          onChange={handleInputChange}
          placeholder="Price"
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
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {cart.items.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${cart.total}</p>
    </div>
  );
}
