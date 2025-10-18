import Seperator from "../../../components/common/Seperator";

const TotalCost = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-[10px]">
        <div className="flex justify-between items-center text-c-base text-body-text">
          <p>$169.99 x 1</p>
          <p>$169.99</p>
        </div>
        <div className="flex justify-between items-center text-c-base text-body-text">
          <p>Tax estimate</p>
          <p>$0</p>
        </div>
      </div>

      <Seperator />

      <div className="flex justify-between items-center text-c-base text-primary font-semibold">
        <p>Total</p>
        <p>$169.99</p>
      </div>
    </div>
  );
};

export default TotalCost;
