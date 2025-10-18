import QuantitySelector from "../../../components/common/QuantitySelector";
import Button from "../../../components/common/Button";
import ShoppingBag from "../../../assets/icons/ShoppingBag";

const AddToCart = ({
  count,
  setCount,
}: {
  count: number;
  setCount: (value: number) => void;
}) => {
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
