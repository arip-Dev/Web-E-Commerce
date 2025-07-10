import { Link } from "react-router-dom";
import CardFurniture from "../Card-furniture";
import useProducts from "../useProduct";

function MainPage3() {
  const { data, loading } = useProducts();

  return (
    <div className="bg-white flex justify-center items-start min-h-screen px-4 py-10">
      <div className="flex flex-col justify-center items-center w-full max-w-7xl text-center">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2">
          Top Picks For You
        </p>
        <p className="text-base sm:text-lg text-slate-500 mb-6 max-w-2xl">
          Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
        </p>

        {loading ? (
          <div className="text-lg font-medium">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 w-full px-2">
            {data.slice(0, 4).map((produk) => (
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

        <Link to="/Shoppage" className="mt-10">
          <button className="btn btn-outline text-black border-black hover:text-white hover:bg-black w-48">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MainPage3;
