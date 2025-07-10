import Group3 from '../../assets/Group3.png';

function MainPage6() {
  return (
    <div className="flex bg-white justify-center items-center w-full">
      <div
        className="text-black bg-cover bg-center flex flex-col items-center justify-center w-full px-4 py-12 sm:py-16 text-center"
        style={{
          backgroundImage: `url(${Group3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '300px',
        }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
          Our Instagram
        </h1>
        <p className="mb-4 text-sm sm:text-base">
          Follow our store on Instagram
        </p>
        <button
          className="btn bg-white text-black border-none hover:bg-gray-100 px-6 py-2 rounded-full text-sm sm:text-base"
          onClick={() => window.open("https://www.instagram.com/", "_blank")}
        >
          Follow Us
        </button>
      </div>
    </div>
  );
}

export default MainPage6;
