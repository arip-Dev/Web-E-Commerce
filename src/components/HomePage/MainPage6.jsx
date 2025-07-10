import Group3 from '../../assets/Group3.png';

function MainPage6() {
    return (
        <div className="flex bg-white justify-center items-center">
        <div className="text-black bg-cover bg-center flex flex-col items-center justify-center w-full h-[450px]"
        style={{ backgroundImage: `url(${Group3})` }}>
            <h1 className="text-5xl font-bold mb-3">Our Instagram</h1>
            <p className="mb-3">Follow our store on Instagram</p>
            <button className="btn btn-wide rounded-4xl bg-white text-black border-none"
            onClick={() => window.open("https://www.instagram.com/", "_blank")}
            >Follow Us</button>
        </div>
        </div>
    );
  }
  
  export default MainPage6;
  