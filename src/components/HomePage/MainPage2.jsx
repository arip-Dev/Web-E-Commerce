import CardFurniture from "../Card-furniture";
import useProducts from "../useProduct";

function MainPage2() {
  const { data, loading } = useProducts();

  return (
    <div className="bg-[#FAF4F4] flex justify-center items-center w-full overflow-hidden px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {loading && (
          <div className="col-span-full text-center text-lg font-medium">
            <h1>Loading...</h1>
          </div>
        )}

        {!loading &&
          data.slice(3, 5).map((produk) => (
            <CardFurniture
              variant="special"
              key={produk.id}
              unik={produk.id}
              title={produk.title}
              price={produk.price}
              description={produk.description}
              image={produk.image}
            />
          ))}
      </div>
    </div>
  );
}

export default MainPage2;
