import { textSlicer } from "../utils/functions";
import Image from "./Image";
import type { IProduct } from "./interfaces";
import Button from "./ui/Button";
interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  return (
    <div className="max-w-sm md:max-w-lg mx-auto  border border-gray-300 rounded-md p-2 flex flex-col">
      <Image
        className="rounded-md mb-2"
        imageURL={product.imageURL}
        alt={product.imageURL}
      ></Image>
      <h3>{product.title}</h3>
      <p>{textSlicer(product.description, 35)}</p>
      <div className="flex items-center gap-0.5 my-3">
        <span className="bg-indigo-500 h-5 w-5 rounded-full cursor-pointer"></span>
        <span className="bg-indigo-600 h-5 w-5 rounded-full cursor-pointer"></span>
        <span className="bg-indigo-800 h-5 w-5 rounded-full cursor-pointer"></span>
        <span className="bg-indigo-900 h-5 w-5 rounded-full cursor-pointer"></span>
      </div>
      <div className="flex justify-between items-center">
        <span>${product.price}</span>
        <Image
          className="w-8 h-8 rounded-full object-cover"
          imageURL={product.imageURL}
          alt={product.imageURL}
        />
      </div>
      <div className="flex justify-between gap-2.5 my-2">
        <Button className=" bg-fuchsia-700 hover:bg-fuchsia-800">Edit</Button>
        <Button className=" bg-red-600 hover:bg-red-700">Delete</Button>
      </div>
    </div>
  );
};

export default ProductCard;
