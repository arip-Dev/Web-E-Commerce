import Gambar1 from '../../assets/Gambar1.png';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function MainPage() {
  return (
    <div className="bg-[#FBEBB5] flex justify-center items-center min-h-screen w-full overflow-hidden px-15 py-20">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full max-w-7xl">
        {/* Text Section */}
        <div className="flex flex-col justify-center items-center text-left text-black bg-red-500mb-10 lg:mb-0 lg:ml-12">
          <h2 className="mb-4 text-xl md:text-2xl lg:text-3xl font-normal">
            Short Description Of Product
          </h2>
          <div>
            <Stack direction="row" spacing={2}>
              <Link to="/Shoppage">
                <Button
                  sx={{
                    backgroundColor: 'transparent',
                    color: 'black',
                    fontSize: '1.3rem',
                    border: '2px solid transparent', // default tidak terlihat
                    transition: 'all 0.3s ease',
                    borderRadius: '10px',
                    

                    '&:hover': {
                      backgroundColor: 'transparant', // transparan amber
                      borderColor: 'black',       // border muncul saat hover
                    },
                  }}
                >
                  Shop Now
                </Button>
              </Link>
            </Stack>
          </div>
        </div>

        {/* Image Section */}
        <img
          src={Gambar1}
          alt="Furniture"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
        />
      </div>
    </div>
  );
}

export default MainPage;
