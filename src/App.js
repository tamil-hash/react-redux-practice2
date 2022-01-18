import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import AddItem from "./components/addItemForm";
function App() {
  return (
    <Layout>
      <Cart />
      <AddItem />
      <Products />
    </Layout>
  );
}

export default App;
