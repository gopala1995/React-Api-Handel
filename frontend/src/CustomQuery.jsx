import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const CustomQuery = (urlPath) => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(urlPath);
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
  return { product, error, loading };
};

export default CustomQuery;
