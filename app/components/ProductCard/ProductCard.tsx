import AddToCart from "../AddToCart";

const ProductCard = () => {
  return (
    <div className="p-4 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500">
      <AddToCart></AddToCart>
    </div>
  );
};

export default ProductCard;
