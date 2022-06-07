import React, { useEffect, useState } from "react";
import * as ProductService from "../services/productService";

const useFetchProducts = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    (async () => {

      try {
        const resp = await ProductService.fetchProducts();
        setData(resp);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return {
    loading,
    error,
    data,
  };
};

export default useFetchProducts;
