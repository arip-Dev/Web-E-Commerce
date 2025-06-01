import { Link } from "react-router-dom";


function CardFurniture(props) {
  console.log(props);
  const isSpecial = props.variant === "special"; // contoh kondisi
  return (
  <div className="items-center flex justify-center">
    <div className={`flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-[250px] h-full text-center
      ${isSpecial ? "w-[600px]" : "bg-white"}`}>
    <img
      src={props.image}
      alt="Furniture"
      className="w-[200px] h-[200px] object-contain object-center mb-4"
    />
      <div className="flex flex-col text-black text-base w-full">
        <h1 className="text-lg font-semibold mb-2 line-clamp-2">
          {props.title}
        </h1>
        <p className="text-sm text-slate-600 mb-2 line-clamp-3">
          {props.description}
        </p>
        <p className="text-lg font-bold text-green-600 mb-4">${props.price}</p>
        <Link to={`/pageproduct/${props.unik}`} className="text-sm font-medium text-blue-600 hover:underline">
          View More
        </Link>
      </div>
    </div>
  </div>

)}

export default CardFurniture;