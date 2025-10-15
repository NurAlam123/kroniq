const SliderButton = ({ active = false }: { active?: boolean }) => {
  return (
    <button
      className={`size-2 rounded-full ${active ? "bg-[#111827]" : "bg-[#111827]/50"}`}
    ></button>
  );
};

export default SliderButton;
