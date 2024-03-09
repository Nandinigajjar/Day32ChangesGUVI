
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems } from '../redux/cartSlice';
import CartItem from './CartItem';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchCartItems()); 
  }, [dispatch]);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartPage;
