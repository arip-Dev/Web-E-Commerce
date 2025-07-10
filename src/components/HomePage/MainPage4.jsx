import Gambar1 from '../../assets/Gambar1.png';

function MainPage4() {
  return (
    <div className="bg-[#FFF9E5] flex flex-col lg:flex-row w-full items-center justify-between px-4 py-10 gap-8">
      {/* Gambar */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" src={Gambar1} alt="Deskripsi Gambar" />
      </div>

      {/* Teks + Tombol */}
      <div className="w-full lg:w-1/2 flex flex-col items-center text-black justify-center text-center px-2">
        <p className="text-base sm:text-lg leading-relaxed max-w-xl">
          Short Description Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam quam odit facilis illo quas placeat debitis
          necessitatibus similique deserunt corporis.
        </p>
        <button className="btn btn-outline mt-5 w-3/4 sm:w-1/2">
          Default
        </button>
      </div>
    </div>
  );
}

export default MainPage4;
