import { createFileRoute } from "@tanstack/react-router";
import CheckoutForm from "./-components/CheckoutForm";
import OrderSummary from "./-components/OrderSummary";
import Button from "../../components/common/Button";
import CheckoutCost from "./-components/CheckoutCost";

export const Route = createFileRoute("/checkout/")({
  component: RouteComponent,
});

function RouteComponent() {
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("ORDERED");
  };
  return (
    <div className="pt-6 pb-[72px] mx-6 lg:mx-[120px]">
      <div className="mb-[52px] max-lg:hidden">
        <h1 className="text-c-2xl font-semibold text-primary">Checkout</h1>
        <p className="text-c-base text-body-text mt-3 font-medium">
          Homepage / checkout
        </p>
      </div>

      <form
        className="w-full flex gap-10 max-lg:flex-col-reverse max-lg:mt-10"
        onSubmit={handleForm}
      >
        {/* checkout details */}
        <div className="w-full">
          <p className="text-c-lg font-semibold mb-6">Shipping details</p>
          <CheckoutForm />

          <div className="lg:hidden mt-[80px]">
            <p className="text-c-lg font-semibold text-primary">
              Confirm your order
            </p>

            <CheckoutCost />

            <Button type="submit" className="mt-10 w-full lg:hidden">
              Confirm order
            </Button>
          </div>
        </div>

        {/* order summary */}
        <div className="space-y-6 w-full">
          <OrderSummary />
          <Button type="submit" className="w-full max-lg:hidden">
            Confirm order
          </Button>
        </div>
      </form>
    </div>
  );
}
