// useProduct.js
import { useEffect, useState } from "react";

export default function useProduct() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}