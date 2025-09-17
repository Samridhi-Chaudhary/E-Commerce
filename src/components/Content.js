import { ArrowRight, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Content.css";

const Content = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/products");
  };

  return (
    <section className="content">
      <h1>Discover Amazing Products</h1>
      <p>
        Shop the latest trends with our curated collection of premium products.
        Fast shipping, great prices, unbeatable quality.
      </p>
      <div className="buttons">
        <button className="shop-btn" onClick={handleShopNow}>
          <ShoppingCart size={16} style={{ marginRight: "8px" }} />
          Shop Now
        </button>

        <button className="learn-btn">
          Learn More
          <ArrowRight size={16} style={{ marginLeft: "8px" }} />
        </button>
      </div>
    </section>
  );
};

export default Content;
