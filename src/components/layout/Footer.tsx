import Logo from "../../assets/Logo";
import Image from "../common/Image";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="border-y border-gray-450">
        <div className="max-screen p-6 lg:px-[120px] lg:py-[60px] flex max-lg:flex-col justify-between max-lg:gap-[60px]">
          <div className="w-full max-lg:mt-[24px]">
            <Logo />

            {/* Socials */}
            <ul className="mt-5 space-y-3 lg:space-y-3.5">
              {socialLinks.map(({ href, src, title, alt }) => (
                <li key={`social-${alt}`}>
                  <a
                    href={href}
                    className="flex gap-2 text-c-sm lg:text-c-base text-body-text w-fit hover:text-black items-center"
                  >
                    <Image
                      src={src}
                      alt={alt}
                      className="size-[16px] lg:size-[24px]"
                    />
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full flex max-lg:flex-col justify-between max-lg:gap-[60px]">
            {/* Getting started */}
            <div>
              <p className="text-c-sm lg:text-c-base font-semibold mb-5">
                Getting Started
              </p>
              <ul className="space-y-3 lg:space-y-4">
                {links.gettingStarted.map(({ href, title }, i) => (
                  <li
                    key={`getting-started-link-${i}`}
                    className="text-c-sm lg:text-c-base text-body-text hover:text-black"
                  >
                    <a href={href}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore */}
            <div>
              <p className="text-c-sm lg:text-c-base font-semibold mb-5">
                Explore
              </p>
              <ul className="space-y-3 lg:space-y-4">
                {links.explore.map(({ href, title }, i) => (
                  <li
                    key={`getting-started-link-${i}`}
                    className="text-c-sm lg:text-c-base text-body-text hover:text-black"
                  >
                    <a href={href}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div>
              <p className="text-c-sm lg:text-c-base font-semibold mb-5">
                Community
              </p>
              <ul className="space-y-3 lg:space-y-4">
                {links.community.map(({ href, title }, i) => (
                  <li
                    key={`getting-started-link-${i}`}
                    className="text-c-sm lg:text-c-base text-body-text hover:text-black"
                  >
                    <a href={href}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" max-screen px-4 py-5 lg:px-[120px] flex max-lg:flex-col justify-between items-center lg:py-8 max-lg:gap-3">
        <p className="text-c-sm lg:text-c-base text-body-text">
          Kroniq eCommerce. &copy; 2025
        </p>
        <ul className="flex gap-1">
          {paymentMethods.map(({ alt, src }) => (
            <li key={`payment-${alt}`}>
              <Image src={src} alt={alt} />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

const socialLinks = [
  {
    href: "#",
    title: "Facebook",
    src: "/socials/facebook.svg",
    alt: "facebook",
  },
  {
    href: "#",
    title: "Youtube",
    src: "/socials/youtube.svg",
    alt: "youtube",
  },
  {
    href: "#",
    title: "Telegram",
    src: "/socials/telegram.svg",
    alt: "telegram",
  },
  {
    href: "#",
    title: "Twitter",
    src: "/socials/twitter.svg",
    alt: "twitter",
  },
];

const links = {
  gettingStarted: [
    { href: "#", title: "Release Notes" },
    { href: "#", title: "Upgrade Guide" },
    { href: "#", title: "Browser Support" },
    { href: "#", title: "Dark Mode" },
  ],
  explore: [
    { href: "#", title: "Prototyping" },
    { href: "#", title: "Design systems" },
    { href: "#", title: "Pricing" },
    { href: "#", title: "Security" },
  ],
  community: [
    { href: "#", title: "Discussion Forums" },
    { href: "#", title: "Code of Conduct" },
    { href: "#", title: "Contributing" },
    { href: "#", title: "API Reference" },
  ],
};

const paymentMethods = [
  { src: "/payment/visa.svg", alt: "visa" },
  { src: "/payment/paypal.svg", alt: "paypal" },
  { src: "/payment/stripe.svg", alt: "stripe" },
  { src: "/payment/versign.svg", alt: "versign" },
];

export default Footer;
