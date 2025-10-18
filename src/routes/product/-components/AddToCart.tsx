import { useState } from "react";
import QuantitySelector from "../../../components/common/QuantitySelector";
import Button from "../../../components/common/Button";
import ShoppingBag from "../../../assets/icons/ShoppingBag";

const AddToCart = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="flex justify-between items-center">
      <QuantitySelector count={count} setCount={setCount} />
      <Button>
        <ShoppingBag className="fill-white mb-1" />
        <span className="block">Add to cart</span>
      </Button>
    </div>
  );
};

export default AddToCart;
