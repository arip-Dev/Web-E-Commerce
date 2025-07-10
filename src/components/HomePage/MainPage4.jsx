import Gambar1 from '../../assets/Gambar1.png';

function MainPage4() {
  return (
    <div className="bg-[#FFF9E5] flex w-full overflow-hidden">
      <div className="flex justify-center min-w-[65%] max-w-[65%]">
        <img className="w-xl" src={Gambar1}/>
      </div>
      <div className="flex flex-col items-center mr-10 text-black justify-center text-center w-full">
        <p>
          Short Description Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam quam odit facilis illo quas placeat debitis
          necessitatibus similique deserunt corporis.
        </p>
        <button className="btn btn-outline mt-5 w-[60%]">Default</button>
      </div>
    </div>
  );
}

export default MainPage4;
