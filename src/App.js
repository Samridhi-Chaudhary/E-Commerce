import { Routes, Route } from "react-router-dom";
import Content from "./components/Content";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/products" element={<FeaturedProducts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
