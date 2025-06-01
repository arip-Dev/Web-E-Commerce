import CardFurniture from "../Card-furniture";
import useProducts from "../useProduct";

function MainPage2() {
  const { data, loading } = useProducts();
  return (
    <div className="bg-[#FAF4F4] flex justify-center items-center w-full overflow-hidden">
     <div className="flex justify-center mt-5 mb-5 gap-5 ">
        {loading && (
          <div>
            {" "}
            <h1>Loading...</h1>
          </div>
        )}
        {data.slice(3,5).map((produk) => (
        <CardFurniture
        variant="special"
        key={produk.id}
        unik={produk.id}   
        title={produk.title}
        price={produk.price}
        description={produk.description}
        image={produk.image} />
        ))}
      </div>
    </div>

)}   

export default MainPage2;