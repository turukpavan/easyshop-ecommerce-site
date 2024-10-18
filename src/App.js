
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import ShopAll from './Pages/ShopAll/ShopAll';
import Computers from './Pages/Computers/Computers';
import Tablets from './Pages/Tablets/Tablets';
import DronesAndCameras from './Pages/DronesAndCameras/DronesAndCameras';
import Mobiles from './Pages/Mobiles/Mobiles';
import Headphones from './Pages/Headphones/Headphones';
import Speakers from './Pages/Speakers/Speakers';
import ProductPage from './Components/ProductDetailsPage/ProductDetails';
import TVAndHomeCinema from './Pages/TVAndHomeCinema/TVAndHomeCinema';
import WearableTech from './Pages/WearableTech/WearableTech';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route exact path="/productDetails/:id" element={<ProductPage />} />
      <Route exact path="/tablets" element={<Tablets />} />
      <Route exact path= "/T.V & Home cinema" element={<TVAndHomeCinema />} />
      <Route exact path= "/Wearable Tech" element={<WearableTech />} />

      <Route exact path="/drones & Cameras" element={<DronesAndCameras />} />
      <Route exact path="/headphones" element={<Headphones />} />
      <Route exact path="/speakers" element={<Speakers />} />
      <Route exact path="/mobiles" element={<Mobiles />} />

      <Route exact path="/computers" element={<Computers />} />
      <Route exact path="/shopAll" element={<ShopAll />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
