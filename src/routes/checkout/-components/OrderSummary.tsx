import CartItem from "./CartItem";
import CheckoutCost from "./CheckoutCost";

const OrderSummary = () => {
  return (
    <div className="space-y-6">
      <p className="text-c-lg lg:text-c-xl font-semibold mb-6">Order summary</p>

      <div className="space-y-6">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <div className="max-lg:hidden">
        <CheckoutCost />
      </div>
    </div>
  );
};

export default OrderSummary;
