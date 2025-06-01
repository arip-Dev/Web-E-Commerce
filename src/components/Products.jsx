import { useState, useEffect } from 'react';
import CardFurniture from './Card-furniture';
import axios from 'axios';

function Products () {
  const url = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

useEffect(() => {
  setLoading(true);
  axios({
    method: "GET",
    url: url,
  })
    .then((res) => {
      console.log("Fetched data:", res.data); // ✅
      setData(res.data); // ✅
    })
    .catch((e) => console.log(e))
    .finally(() => setLoading(false));
}, []);


  return (
    <div className="products">
      <h1>My products</h1>
      {loading && (
        <div>
          {" "}
          <h1>Loading...</h1>
        </div>
      )}
      
      {/* Display only the first 5 products */}
      {/* {console.log("Data to be displayed:", data)} ✅ */}
      { data.map((produk) => <CardFurniture
      key={produk.id}
      unik={produk.id}   
      title={produk.title}
      price={produk.price}
      description={produk.description}
      image={produk.image} />
      )}
    </div>
  );
};

export default Products;
