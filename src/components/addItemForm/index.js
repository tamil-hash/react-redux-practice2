import { useState, useEffect } from "react";
import Card from "../UI/Card";
import classes from "./addItem.module.css";
import { useDispatch } from "react-redux";
import { shopActions } from "../../store";
const AddItem = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [showNotification, setShowNotification] = useState({
    show: false,
    text: "",
  });

  const postItem = async (item) => {
    const response = await fetch(
      "https://testing-firebase-558d8-default-rtdb.firebaseio.com/items.json",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  const validateFormData = (e) => {
    e.preventDefault();
    if (title !== "" && description !== "" && price !== 0) {
      const item = {
        id: Date.now(),
        title,
        description,
        price: parseInt(price),
      };
      dispatch(shopActions.addNewItem(item));

      postItem(item);

      setShowNotification({ show: true, text: "Item added successfully" });
    } else {
      setShowNotification({ show: true, text: "Please enter all values" });
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowNotification({ show: false, text: "" });
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [showNotification]);

  return (
    <Card>
      <form onSubmit={validateFormData}>
        {showNotification.show && <h4>{showNotification.text}</h4>}
        <input
          className={classes.inputItem}
          type="text"
          placeholder="Enter the Item name"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          className={classes.inputItem}
          type="text"
          placeholder="Enter the Item description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <input
          className={classes.inputItem}
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <button type="submit">Add New Item</button>
      </form>
    </Card>
  );
};

export default AddItem;
