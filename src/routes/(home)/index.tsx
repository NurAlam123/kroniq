import { createFileRoute } from "@tanstack/react-router";
import Hero from "./-components/Hero";
import BrandInfo from "./-components/BrandInfo";
import Collections from "./-components/Collections";
import Recommendations from "./-components/Recommendations";
import BestSellers from "./-components/BestSellers";
import CallToAction from "./-components/CallToAction";

export const Route = createFileRoute("/(home)/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <div className="max-screen px-6 lg:px-[120px] overflow-hidden">
        <BrandInfo />
        <Collections />
        <Recommendations />
        <BestSellers />
        <CallToAction />
      </div>
    </>
  );
}
