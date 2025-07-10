import CardFurniture from "../components/Card-furniture";
import useProducts from "../components/useProduct";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Shoppage() {
  const { data, loading } = useProducts();

  return (
    <>
      <Navbar />

      <div className="w-full min-h-screen px-4 py-8 flex justify-center">
        <div className="w-full max-w-7xl">
          {loading ? (
            <div className="text-center text-lg font-medium">
              <h1>Loading...</h1>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {data.map((produk) => (
                <CardFurniture
                  key={produk.id}
                  unik={produk.id}
                  title={produk.title}
                  price={produk.price}
                  description={produk.description}
                  image={produk.image}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Shoppage;
