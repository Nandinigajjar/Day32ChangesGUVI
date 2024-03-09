
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity } from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (quantity) => {
    dispatch(updateQuantity({ id: item.id, quantity }));
  };

  return (
    <div>
      <h2>{item.name}</h2>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => handleQuantityChange(item.quantity - 1)}>-</button>
      <button onClick={() => handleQuantityChange(item.quantity + 1)}>+</button>
    </div>
  );
};

export default CartItem;
