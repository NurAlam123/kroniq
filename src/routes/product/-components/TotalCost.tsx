import Seperator from "../../../components/common/Seperator";

const TotalCost = ({
  price,
  quantity,
  tax,
}: {
  price: number;
  quantity: number;
  tax: number;
}) => {
  const totalWithoutTax = price * quantity;
  const totalWithTax = totalWithoutTax + tax;

  return (
    <div className="space-y-4">
      <div className="space-y-[10px]">
        <div className="flex justify-between items-center text-c-base text-body-text">
          <p>
            ${price} x {quantity}
          </p>
          <p>${totalWithoutTax}</p>
        </div>
        <div className="flex justify-between items-center text-c-base text-body-text">
          <p>Tax estimate</p>
          <p>${tax}</p>
        </div>
      </div>

      <Seperator />

      <div className="flex justify-between items-center text-c-base text-primary font-semibold">
        <p>Total</p>
        <p>${totalWithTax}</p>
      </div>
    </div>
  );
};

export default TotalCost;
