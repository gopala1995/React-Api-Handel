import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CustomQuery from "./CustomQuery";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("W");
  // const { product, error, loading, } = CustomQuery(
  //   "/api/products?search=" + search
  // );

  const [product, setProduct] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/products?search=" + search);
        console.log(response.data);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setError(true);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <h1>Products List </h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => e.target.value}
      />

      {loading && <h1>Loading.....</h1>}
      {error && <h1>Something went wrong</h1>}

      <h2>Numbers of products are : {product.length}</h2>
    </>
  );
}

export default App;
