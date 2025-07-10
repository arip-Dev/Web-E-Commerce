// File: src/Pages/Detailpages.jsx

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UseproductID from "../components/UseproductID"; // Assuming this is a custom hook you have

function DetailProduct() {
const { id } = useParams();
const { product, loading } = UseproductID(id);

  useEffect(() => {
    const fetchProductDetail = async () => {
    };

    fetchProductDetail();
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!product) {
    return <div className="flex justify-center items-center h-screen text-red-500">Product Not Found.</div>;
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link to="/Shoppage" className="text-blue-600 hover:underline">
              <button className="btn rounded-4xl bg-white text-black border-none">
                &larr; Kembali ke Toko
              </button>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row -mx-4 bg-white p-6 rounded-lg shadow-md">
            
            {/* Gambar Produk */}
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-white mb-4 flex justify-center items-center p-4">
                <img
                  className="max-w-full max-h-full object-contain"
                  src={product?.image}
                  alt={product?.title || "Product Image"}
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>

            {/* Detail Produk */}
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h2>
              <p className="text-gray-600 text-sm mb-4 capitalize">
                Kategori: {product.category}
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700">Harga:</span>
                  <span className=" text-green-600"> ${product.price}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700">Rating:</span>
                  <span className="text-gray-600">
                    {product.rating?.rate || 0} ({product.rating?.count || 0} ulasan)
                  </span>
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700">Deskripsi Produk:</span>
                <p className="text-gray-600 text-sm mt-2">{product.description}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailProduct;
