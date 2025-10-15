import FeatureBox from "../../components/common/FeatureBox";
import Title from "../../components/common/Title";
import ProductCard from "../../components/product/ProductCard";
import ProductCarousel from "../../components/product/ProductCarousel";

const BestSellers = () => {
  return (
    <FeatureBox>
      <Title title="Best Sellers." subtitle="Best sellling of the month" />

      <ProductCarousel>
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

export default BestSellers;
