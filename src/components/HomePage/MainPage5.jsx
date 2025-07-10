import { Link } from "react-router-dom";
import CardFurniture from "../Card-furniture";
import useProducts from "../useProduct";

function MainPage5() {
  const { data, loading } = useProducts();

  return (
    <div className="bg-white flex flex-col items-center text-black min-h-screen px-4 py-10">
      {/* Header */}
      <div className="flex flex-col text-center text-lg sm:text-xl items-center mb-6">
        <h2 className="font-bold text-2xl sm:text-3xl mb-2">Our Blogs</h2>
        <p className="text-slate-500 max-w-xl">
          Find a bright ideal to suit your taste with our great selection
        </p>
      </div>

      {/* Card Section */}
      {loading ? (
        <div className="text-lg font-medium">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          {data.slice(1, 5).map((produk) => (
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

      {/* Link */}
      <Link to="/Shoppage" className="mt-10">
        <button className="btn btn-outline border-black text-black hover:bg-black hover:text-white w-48">
          View All Post
        </button>
      </Link>
    </div>
  );
}

export default MainPage5;
