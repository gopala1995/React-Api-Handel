import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CustomQuery from "./CustomQuery";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  // const { product, error, loading, } = CustomQuery(
  //   "/api/products?search=" + search
  // );

  const [product, setProduct] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/products?search=" + search, {
          signal: controller.signal,
        });
        console.log(response.data);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
          return;
        }
        console.log(error.message);
        setError(true);
        setLoading(false);
      }
      // unmount/cleanup useEffect
      return () => {
        controller.abort();
      };
    })();
  }, [search]);

  return (
    <>
      <h1>Products List </h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <h1>Loading.....</h1>}
      {error && <h1>Something went wrong</h1>}

      <h2>Numbers of products are : {product.length}</h2>
    </>
  );
}

export default App;
