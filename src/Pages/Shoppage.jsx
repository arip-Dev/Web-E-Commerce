import CardFurniture from "../components/Card-furniture";
import useProducts from "../components/useProduct";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Shoppage() {
    const { data, loading } = useProducts();
  return (
    <>
    <Navbar />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 mb-15 gap-10 ml-10 mr-10 flex-col">
        {loading && (
          <div>
            {" "}
            <h1>Loading...</h1>
          </div>
        )}
        {data.map((produk) => (
        <CardFurniture
        key={produk.id}
        unik={produk.id}   
        title={produk.title}
        price={produk.price}
        description={produk.description}
        image={produk.image} />
        ))}
    </div>
    <Footer />
    </>
  );
}

export default Shoppage;