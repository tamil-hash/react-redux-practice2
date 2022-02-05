import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import AddItem from "./components/addItemForm";
import { useSelector } from "react-redux";
function App() {
  const showCart = useSelector((state) => state.showCart);
  return (
    <Layout>
      {showCart && <Cart />}
      <AddItem />
      <Products />
    </Layout>
  );
}

export default App;
