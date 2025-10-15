import FeatureBox from "../../components/common/FeatureBox";
import Title from "../../components/common/Title";
import ProductCarousel from "../../components/product/ProductCarousel";

const Recommendations = () => {
  return (
    <FeatureBox>
      <Title
        title="Recommendations."
        subtitle="Best matching products for you"
      />

      <ProductCarousel />
    </FeatureBox>
  );
};

export default Recommendations;
