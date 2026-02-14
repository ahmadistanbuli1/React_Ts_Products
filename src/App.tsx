import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import { formInputList, productList } from "./components/data";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import type { IProduct } from "./components/interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  // Variables
  const defaultProduct: IProduct = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  // State
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>({
    ...defaultProduct,
  });
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });

  // Handler
  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    setProduct({ ...defaultProduct });
    setErrors({ title: "", description: "", imageURL: "", price: "" });
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({ ...product, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // Render Product List
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product}></ProductCard>
  ));

  const renderFormInputList = formInputList.map((input) => (
    <div key={input.id}>
      <label htmlFor={input.id}>{input.label}</label>
      <Input
        placeholder={input.placeholder}
        id={input.id}
        name={input.name}
        type={input.type}
        value={product[input.name]}
        onChange={onChangeHandler}
      ></Input>
      <ErrorMessage msg={errors[input.name]}></ErrorMessage>
    </div>
  ));

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageURL, price } = product;
    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });
    console.log(errors);

    // Check If Any Property Has A Value Of "" && Check If All Properties A Value Of ""
    const hasErrorMessage =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMessage) {
      setErrors(errors);
      return;
    }
  };

  return (
    <main className="container mx-auto px-11 mt-2.5">
      <Button
        width="w-fit"
        className="bg-fuchsia-700 hover:bg-fuchsia-800"
        onClick={open}
      >
        Add
      </Button>
      <div className="grid gap-4 mt-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={close} title="Product Modal">
        <form onSubmit={submitHandler}>
          {renderFormInputList}
          <div className="flex gap-2 mt-2.5">
            <Button className=" bg-fuchsia-700 hover:bg-fuchsia-800">
              Submit
            </Button>
            <Button
              type="button"
              onClick={close}
              className=" bg-gray-200 hover:bg-gray-300"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
};

export default App;
