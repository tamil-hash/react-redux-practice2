import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartItems);
  const totalPrice = useSelector((state) => state.totalPrice);

  const checkCartItems = () => {
    if (cartItems.length === 0) {
      return <p>No items in the cart</p>;
    } else {
      return cartItems.map((item) => <CartItem key={item.id} item={item} />);
    }
  };

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{checkCartItems()}</ul>
      <h2>Total: ${totalPrice}</h2>
    </Card>
  );
};

export default Cart;
