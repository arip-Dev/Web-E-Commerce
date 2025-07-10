import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepages from "./Pages/Homepages";
import Detailproduct from "./Pages/Detailpages";
import Aboutus from "./Pages/Aboutus";
import ScrollToTop from "./components/Scrolltop";
import Shoppage from "./Pages/Shoppage";
import ContactSection from "./components/Contact/Contact";
import Products from "./components/Products";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path={"/Pageproduct/:id"} element={<Detailproduct />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Shoppage" element={<Shoppage />} />
        <Route path="/Contactpage" element={<ContactSection />} />
        <Route path="/products" element={<Products/>} />
      </Routes>
    </>
  );
}

export default App;
