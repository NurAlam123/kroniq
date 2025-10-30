import { createFileRoute } from "@tanstack/react-router";
import Image from "../../components/common/Image";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

export const Route = createFileRoute("/about/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="px-6 lg:px-[120px] mt-[40px] mb-[72px] max-screen mx-auto">
      <div className="lg:mb-[64px]">
        <h1 className="text-c-xl lg:text-c-3xl font-semibold text-primary mb-3">
          About us
        </h1>
        <p className="text-c-sm lg:text-c-base text-body-text max-w-[640px]">
          We not only help you design exceptional products, but also make it
          easy for you to share your designs with more like-minded people.
        </p>
      </div>

      <div>
        <div className="flex max-lg:flex-col py-[52px] gap-8 lg:gap-[120px] lg:mb-[72px] items-center">
          <Image
            src="/about/about-1.png"
            alt="about-1"
            className="rounded-2xl"
          />

          <div>
            <h2 className="text-c-lg lg:text-c-xl w-[298px] mb-3 lg:mb-4 font-semibold">
              Provide fashionable and qualifed products
            </h2>
            <p className="text-c-sm lg:text-c-base text-body-text max-w-[550px]">
              Already millions of people are very satisfied by thi. s page
              builder and the number is growing more and more. Technolog
              developing, requirements are increasing. Riode has brought.
            </p>
          </div>
        </div>

        <div className="flex max-lg:flex-col-reverse py-[52px] gap-8 lg:gap-[120px] lg:mb-[72px] items-center">
          <div>
            <h2 className="text-c-lg lg:text-c-xl w-[298px] mb-3 lg:mb-4 font-semibold">
              Provide fashionable and qualifed products
            </h2>
            <p className="text-c-sm lg:text-c-base text-body-text max-w-[550px]">
              Already millions of people are very satisfied by thi. s page
              builder and the number is growing more and more. Technolog
              developing, requirements are increasing. Riode has brought.
            </p>
          </div>

          <Image
            src="/about/about-2.png"
            alt="about-2"
            className="rounded-2xl"
          />
        </div>
      </div>

      <div className="py-[52px] lg:mt-[72px]">
        <h3 className="mb-8 lg:mb-10 text-c-lg lg:text-c-xl font-semibold">
          Get in touch with us
        </h3>

        <div className="flex max-lg:flex-col justify-between items-start">
          <div className="space-y-8 w-full max-lg:mb-10 ">
            <div className="space-y-2">
              <p className="text-c-base lg:text-c-md font-semibold">Address</p>
              <address className="text-c-sm lg:text-c-base text-body-text">
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </address>
            </div>

            <div className="space-y-2">
              <p className="text-c-base lg:text-c-md font-semibold">Email</p>
              <p className="text-c-sm lg:text-c-base text-body-text">
                nexton@example.com
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-c-base lg:text-c-md font-semibold">Phone</p>
              <p className="text-c-sm lg:text-c-base text-body-text">
                000-123-456-7890
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-gray-450 lg:hidden"></div>

          <div className="w-full lg:w-3/4 max-lg:mt-10">
            <form className="space-y-6">
              <Input
                label="Full name"
                labelClassName="text-c-base"
                type="text"
                name="full-name"
              />
              <Input
                label="Full name"
                labelClassName="text-c-base"
                type="text"
                name="full-name"
              />
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="user-message"
                  className="text-c-sm lg:text-c-base text-primary font-semibold"
                >
                  Message
                </label>

                <textarea
                  name="message"
                  className="border border-gray-450 rounded-[12px] px-4 py-3 w-full min-h-40 max-h-min resize-none"
                />
              </div>

              <Button type="submit" className="max-lg:w-full max-lg:py-3">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
