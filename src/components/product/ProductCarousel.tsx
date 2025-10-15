import { useRef, useState } from "react";
import ProductCard from "./ProductCard";
import SliderButton from "../common/SliderButton";

const ProductCarousel = () => {
  const [current, setCurrent] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<number>(null);

  const getContainerData = () => {
    const cards = 4;
    const gap = 14 * cards;
    if (!containerRef.current)
      return { cards, gap, container: null, cardWidth: 0 };

    const container = containerRef.current;
    const cardWidth =
      parseInt(container.style.getPropertyValue("--card-width")) * cards || 0;

    return { container, gap, cardWidth, cards };
  };

  const buttonHandler = (i: number) => {
    setCurrent(i);

    const { cardWidth, gap, container } = getContainerData();
    if (container) container.scroll({ left: (cardWidth + gap) * i });
  };

  const scrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
    const div = e.target as HTMLDivElement;
    const scrollLeft = div.scrollLeft;

    const { cardWidth, gap } = getContainerData();
    const index = Math.round(scrollLeft / (cardWidth + gap));
    console.log(index);
    if (countRef.current !== index) setCurrent(index);
    countRef.current = index;
  };

  return (
    <div>
      <div
        ref={containerRef}
        className="h-(--container-height) grid grid-flow-col auto-rows-(--card-width) gap-3.5 overflow-x-auto scroll-smooth scrollbar-none"
        style={
          {
            "--card-width": "370px",
            "--container-height": "560px",
          } as React.CSSProperties
        }
        onScrollEnd={scrollHandler}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      {/* carousel action button */}
      <div className="flex gap-1 justify-center items-center mt-8">
        {[0, 1, 2].map((i) => (
          <SliderButton
            key={i}
            active={current === i}
            onClick={() => buttonHandler(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
