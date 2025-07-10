import Gambar1 from '../../assets/Gambar1.png';

function MainPage() {
  return (
<div className="bg-[#FBEBB5] flex justify-center items-center h-screen top-0 w-full overflow-hidden">
    <div className="flex justify-between w-full items-center">
      <div className="flex flex-col justify-center ml-36 items-center h-36 text-xl mt-56">
        <h2 className="text-black mb-5 text-2xl">
          Short Description Of Product
        </h2>
        <h1>
          <a href="" className="text-black">Shop Now</a>
        </h1>
      </div>
      <img src={Gambar1} alt="Furniture" className="w-2/5 mt-24 mr-20" />
  </div>
</div>

  )
}

export default MainPage