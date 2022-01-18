import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { shopActions } from "../../store";
const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, added } = props.item;

  const addItemhandler = () => {
    dispatch(shopActions.addItem(props.item));
    dispatch(shopActions.calculateTotal());
  };

  const removeItemhandler = () => {
    dispatch(shopActions.removeItem(props.item));
    dispatch(shopActions.calculateTotal());
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${(price * added).toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{added}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemhandler}>-</button>
          <button onClick={addItemhandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
