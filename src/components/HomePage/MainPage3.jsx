import { Link } from "react-router-dom";
import CardFurniture from "../Card-furniture";
import useProducts from "../useProduct";

function MainPage3() {
  const { data, loading } = useProducts();
  return (
    <div className="bg-white flex justify-center items-start h-screen overflow-hidden">
      <div className="mt-5  flex flex-col justify-center items-center">
        <p className="text-4xl font-bold text-black">Top Picks For You</p>
        <p className="text-xl text-slate-500">
          Find a bright ideal to suit your taste wiith our great selection of
          suspension, floor and table lights.
        </p>
        <div className="flex mt-5 gap-20 ml-10 mr-10">
          {loading && (
            <div>
              {" "}
              <h1>Loading...</h1>
            </div>
          )}
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
        <Link to="/Shoppage" className="text-xl mt-10 font-bold">
          <button className="btn btn-outline  text-black border-black hover:text-white hover:border-white w-[12rem] ">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
}
export default MainPage3;
