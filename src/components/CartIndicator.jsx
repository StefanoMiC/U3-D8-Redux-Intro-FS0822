import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const CartIndicator = () => {
  const navigate = useNavigate();
  const cartLength = useSelector(state => state.cart.content.length);
  // cartLength inzialmente è 0, ma rispecchierà in qualsiasi momento la lunghezza di state.cart.content

  return (
    <div className="ml-auto mt-3 mb-4">
      <Button color="primary" onClick={() => navigate("/cart")}>
        <FaShoppingCart />
        <span className="ml-2">{cartLength}</span>
      </Button>
    </div>
  );
};

export default CartIndicator;
