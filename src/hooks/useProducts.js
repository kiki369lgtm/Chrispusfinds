import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

export const useProducts = ({ category, subcategory, search, limit = 100 } = {}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    getProducts({ category, subcategory, search, limit })
      .then((res) => {
        if (cancelled) return;
        setProducts(res.data);
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err.message);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [category, subcategory, search, limit]);

  return { products, loading, error };
};
