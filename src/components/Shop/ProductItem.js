import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { shopActions } from "../../store";
const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description } = props.item;

  const addItemhandler = () => {
    dispatch(shopActions.addItem(props.item));
    dispatch(shopActions.calculateTotal());
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemhandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
