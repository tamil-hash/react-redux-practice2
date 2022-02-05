import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useSelector } from "react-redux";
import { shopActions } from "../../store";

const Products = (props) => {
  const [loading, setLoading] = useState(false);
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const GetItems = async () => {
    setLoading(true);
    const response = await fetch(
      "https://testing-firebase-558d8-default-rtdb.firebaseio.com/items.json"
    );

    const data = await response.json();
    console.log(data);
    const allData = [];
    for (const key in data) {
      allData.push(data[key]);
    }
    dispatch(shopActions.setItems(allData));
    setLoading(false);
  };

  useEffect(() => {
    GetItems();
  }, []);

  if (loading) {
    return (
      <section className={classes.products}>
        <h2>Loading...</h2>
      </section>
    );
  }
  if (items.length === 0) {
    return (
      <section className={classes.products}>
        <h2>Currently No Items are available</h2>
      </section>
    );
  }

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {items.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
