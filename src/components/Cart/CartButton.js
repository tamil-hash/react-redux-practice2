import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { shopActions } from "../../store";
const CartButton = (props) => {
  const totalItems = useSelector((state) => state.totalItems);
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(shopActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
