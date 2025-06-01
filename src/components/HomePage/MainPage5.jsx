import { Link } from "react-router-dom";
import CardFurniture from "../Card-furniture";
import useProducts from "../useProduct";

function MainPage5() {
  const { data, loading } = useProducts();
  return (
    <div className="bg-white flex flex-col items-center text-black h-screen">
      <div className="flex flex-col text-xl items-center mt-5">
        <h2 className="font-bold">Our Blogs</h2>
        <p className="text-slate-500">
          Find a bright ideal to suit your taste with our great selection
        </p>
      </div>
      <div className="flex mt-5 gap-20 ml-10 mr-10">
        {loading && (
          <div>
            {" "}
            <h1>Loading...</h1>
          </div>
        )}
        {data.slice(1,5).map((produk) => (
        <CardFurniture
        key={produk.id}
        unik={produk.id}   
        title={produk.title}
        price={produk.price}
        description={produk.description}
        image={produk.image} />
        ))}
      </div>
      <Link to="/Shoppage" className="text-xl mt-10 font-bold">
        View All Post
      </Link>
    </div>
  );
}

export default MainPage5;
