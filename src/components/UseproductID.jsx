// src/hooks/useProductById.js
import { useEffect, useState } from "react";

function useProductById(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Gagal mengambil data produk:", error);
        setProduct(null);
      } finally {
        setLoading(false); // <- penting!
      }
    };

    fetchProduct();
  }, [id]);

  console.log(id)

  return { product, loading };
}

export default useProductById;
