import Input from "../../../components/common/Input";
import InputBox from "./InputBox";

const CheckoutForm = () => {
  return (
    <div className="space-y-10">
      {/* contact */}
      <InputBox title="CONTACT INFO" icon="/icons/user-circle.svg">
        <div className="flex max-lg:flex-col gap-6">
          <Input label="Your phone number" name="phone-number" type="tel" />
          <Input label="Email address" name="email" type="email" />
        </div>
      </InputBox>

      {/* shipping details */}
      <InputBox title="SHIPPING ADDRESS" icon="icons/direction.svg">
        {/* name */}
        <div className="flex gap-4 lg:gap-6">
          <Input
            label="First name"
            name="last-name"
            type="text"
            divClassName="w-1/2"
          />
          <Input
            label="Last name"
            name="last-name"
            type="text"
            divClassName="w-1/2"
          />
        </div>

        {/* address */}
        <div className="space-y-6">
          <div className="flex max-lg:flex-col w-full gap-6">
            <Input
              label="Address line 1"
              name="address-1"
              divClassName="w-full"
            />
            <Input
              label="Apt, Suite"
              name="apt"
              divClassName="max-lg:w-full lg:max-w-1/4"
            />
          </div>
          <Input
            label="Address line 2"
            name="address-2"
            divClassName="w-full"
          />

          <div className="flex gap-4 lg:gap-6">
            <Input label="City" name="city" divClassName="w-1/2" />
            <Input label="Country" name="country" divClassName="w-1/2" />
          </div>

          <div className="flex gap-4 lg:gap-6">
            <Input label="State/Province" name="state" divClassName="w-1/2" />
            <Input label="Postal code" name="postal" divClassName="w-1/2" />
          </div>
        </div>
      </InputBox>

      {/* payment */}
      <InputBox title="PAYMENT" icon="/icons/card.svg">
        <Input label="Card number" />
        <Input label="Name on the card" />
        <div className="flex gap-4 lg:gap-6">
          <Input label="Expiration date" divClassName="w-1/2 lg:w-full" />

          <Input label="CVC" divClassName="max-lg:w-1/2 w-1/3" />
        </div>
      </InputBox>
    </div>
  );
};

export default CheckoutForm;
