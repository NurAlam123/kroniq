import { createFileRoute, Link } from "@tanstack/react-router";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

export const Route = createFileRoute("/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex justify-center items-center mt-[40px] mb-[72px]">
      <div className="w-[440px] h-[450px] max-lg:px-6">
        <h1 className="text-c-3xl text-primary font-semibold text-center mb-[60px]">
          Login
        </h1>

        <form className="space-y-6">
          <Input
            label="Email"
            labelClassName="text-c-sm lg:text-c-base"
            placeholder="example@example.com"
          />
          <Input
            label="Password"
            labelClassName="text-c-sm lg:text-c-base"
            placeholder="********"
          />

          <Button type="submit" className="w-full max-lg:text-c-sm">
            Continue
          </Button>
        </form>

        <div className="mt-6">
          <div className="h-px w-full bg-gray-450 relative">
            <div className="absolute top-1/2 left-1/2 -translate-1/2 bg-white px-2">
              <span className="text-c-xs lg:text-c-sm font-medium text-body-text select-none">
                OR
              </span>
            </div>

            <p className="max-lg:text-c-sm text-body-text pt-6 text-center">
              New user?{" "}
              <Link to="/" className="text-vibrant">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
