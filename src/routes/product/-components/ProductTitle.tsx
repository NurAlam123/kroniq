const ProductTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="text-c-xl lg:text-c-3xl font-semibold text-primary lg:mb-4">
      {title}
    </h1>
  );
};

export default ProductTitle;
