import { Children, useRef, useState } from "react";
import SliderButton from "../common/SliderButton";

const ProductCarousel = ({
  children,
}: {
  children: React.ReactElement[] | React.ReactElement;
}) => {
  const [current, setCurrent] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef<number>(null);

  const cards = 4;
  const gap = 14 * cards;

  const getContainerData = () => {
    if (!containerRef.current) return { container: null, cardWidth: 0 };

    const container = containerRef.current;
    const cardWidth =
      parseInt(container.style.getPropertyValue("--card-width")) * cards || 0;

    return { container, cardWidth };
  };

  const buttonHandler = (i: number) => {
    setCurrent(i);

    const { cardWidth, container } = getContainerData();
    if (container) container.scroll({ left: (cardWidth + gap) * i });
  };

  const scrollEndHandler = (e: React.UIEvent<HTMLDivElement>) => {
    const div = e.target as HTMLDivElement;
    const scrollLeft = div.scrollLeft;

    const { cardWidth } = getContainerData();
    const index = Math.ceil(scrollLeft / (cardWidth + gap));
    if (indexRef.current !== index) setCurrent(index);
    indexRef.current = index;
  };

  return (
    <div>
      <div
        ref={containerRef}
        className="h-(--container-height) grid grid-flow-col auto-rows-(--card-width) gap-3.5 overflow-x-auto scroll-smooth scrollbar-none"
        style={
          {
            "--card-width": "310px",
            "--container-height": "448px",
          } as React.CSSProperties
        }
        onScrollEnd={scrollEndHandler}
      >
        {children}
      </div>

      {/* carousel action button */}
      {Children.count(children) > 4 && (
        <div className="flex gap-1 justify-center items-center mt-8">
          {createSliderButton({
            current,
            buttonHandler,
            cards,
            count: Children.count(children),
          })}
        </div>
      )}
    </div>
  );
};

// create carousel buttons dynamically
const createSliderButton = ({
  count,
  cards,
  current,
  buttonHandler,
}: {
  count: number;
  cards: number;
  current: number;
  buttonHandler: (i: number) => void;
}) => {
  const totalButton = Math.ceil(count / cards) - 1;

  const buttons = [];
  for (let i = 0; i <= totalButton; i++) {
    buttons.push(
      <SliderButton
        key={i}
        active={current === i}
        onClick={() => buttonHandler(i)}
      />,
    );
  }
  return buttons;
};

export default ProductCarousel;
