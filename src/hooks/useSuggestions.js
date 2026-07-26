import { useEffect, useRef, useState } from "react";
import { suggestProducts } from "../services/api";

const DEBOUNCE_MS = 300;

export const useSuggestions = (query, limit = 8) => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const abortRef = useRef(null);

  useEffect(() => {
    const trimmed = query.trim();
    if (!trimmed) {
      abortRef.current?.abort();
      return undefined;
    }

    const timer = setTimeout(() => {
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      setLoading(true);

      suggestProducts(trimmed, limit, controller.signal)
        .then((res) => {
          setSuggestions(res.data);
          setLoading(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") return;
          setSuggestions([]);
          setLoading(false);
        });
    }, DEBOUNCE_MS);

    return () => {
      clearTimeout(timer);
    };
  }, [query, limit]);

  return { suggestions, loading };
};
