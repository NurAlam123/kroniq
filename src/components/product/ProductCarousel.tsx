import ProductCard from "./ProductCard";

const ProductCarousel = () => {
  return (
    <div>
      <div
        className="h-(--container-height) grid grid-flow-col auto-rows-(--card-width) gap-3.5 overflow-x-auto"
        style={
          {
            "--card-width": "370px",
            "--container-height": "560px",
          } as React.CSSProperties
        }
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
    </div>
  );
};

export default ProductCarousel;
