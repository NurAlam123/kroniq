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
      <Button className="max-lg:px-6 max-lg:py-[10px]">
        <ShoppingBag className="fill-white mb-1" />
        <span className="max-lg:text-c-sm">Add to cart</span>
      </Button>
    </div>
  );
};

export default AddToCart;
