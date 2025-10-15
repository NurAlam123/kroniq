import FeatureBox from "../../components/common/FeatureBox";
import Title from "../../components/common/Title";
import ProductCard from "../../components/product/ProductCard";
import ProductCarousel from "../../components/product/ProductCarousel";

const Recommendations = () => {
  return (
    <FeatureBox>
      <Title
        title="Recommendations."
        subtitle="Best matching products for you"
      />

      <ProductCarousel>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

        <ProductCard />
      </ProductCarousel>
    </FeatureBox>
  );
};

export default Recommendations;
