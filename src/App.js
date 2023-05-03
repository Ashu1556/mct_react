import Fetchdata from "./Component/Fetchdata";
import Home from "./Component/Page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Component/Page/Nav";
import Card from "./Component/Card";
import Delivery from "./Component/Delivery";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Fetchdata />} />
          <Route path="/addcart" element={<Card />} />
          <Route path="/sucessfull" element={<Delivery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
