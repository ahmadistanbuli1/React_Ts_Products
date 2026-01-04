interface IProps {}

const ProductCard = ({}: IProps) => {
  return (
    <div className="border border-gray-300 rounded-md p-2 flex flex-col">
      <img src="https://picsum.photos/seed/abc/500/300" alt="Sky" />
      <h3> 2025 Car BMW</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
      </p>
      
    </div>
  );
};

export default ProductCard;
