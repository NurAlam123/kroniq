import { createFileRoute } from "@tanstack/react-router";
import Image from "../../components/common/Image";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

export const Route = createFileRoute("/about/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="px-[120px] mt-[40px] mb-[72px]">
      <div className="mb-[64px]">
        <h1 className="text-c-3xl font-semibold text-primary mb-3">About us</h1>
        <p className="text-c-base text-body-text max-w-[640px]">
          We not only help you design exceptional products, but also make it
          easy for you to share your designs with more like-minded people.
        </p>
      </div>

      <div>
        <div className="flex gap-[120px] mb-[72px] items-center">
          <Image
            src="/about/about-1.png"
            alt="about-1"
            className="rounded-2xl"
          />

          <div>
            <h2 className="text-c-xl w-[298px] mb-4">
              Provide fashionable and qualifed products
            </h2>
            <p className="text-c-base text-body-text max-w-[550px]">
              Already millions of people are very satisfied by thi. s page
              builder and the number is growing more and more. Technolog
              developing, requirements are increasing. Riode has brought.
            </p>
          </div>
        </div>

        <div className="flex gap-[120px] mb-[72px] items-center">
          <div>
            <h2 className="text-c-xl w-[298px] mb-4">
              Provide fashionable and qualifed products
            </h2>
            <p className="text-c-base text-body-text max-w-[550px]">
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

      <div className="mt-[72px]">
        <h3 className="mb-[40px] text-c-xl font-semibold">
          Get in touch with us
        </h3>

        <div className="flex justify-between items-start">
          <div className="space-y-8 w-full">
            <div className="space-y-2">
              <p className="text-c-md font-semibold">Address</p>
              <address className="text-c-base text-body-text">
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </address>
            </div>

            <div className="space-y-2">
              <p className="text-c-md font-semibold">Email</p>
              <p className="text-c-base text-body-text">nexton@example.com</p>
            </div>

            <div className="space-y-2">
              <p className="text-c-md font-semibold">Phone</p>
              <p className="text-c-base text-body-text">000-123-456-7890</p>
            </div>
          </div>

          <div className="w-3/4">
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

              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
