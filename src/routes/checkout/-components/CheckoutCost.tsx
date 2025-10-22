const CheckoutCost = () => {
  return (
    <div className="py-6 lg:border-t lg:border-t-gray-450">
      <div className="space-y-2 text-c-base text-body-text">
        <div className="flex justify-between">
          <p>Total</p>
          <p>$169.99</p>
        </div>

        <div className="flex justify-between">
          <p>Shipping estimate </p>
          <p>$5.00</p>
        </div>

        <div className="flex justify-between">
          <p>Tax estimate </p>
          <p>$24.90</p>
        </div>
      </div>

      <div className="flex justify-between mt-6 text-c-base font-semibold">
        <p>Order total</p>
        <p>$199.89</p>
      </div>
    </div>
  );
};

export default CheckoutCost;
