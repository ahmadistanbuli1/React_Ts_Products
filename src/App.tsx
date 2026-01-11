import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import { productList } from "./components/data";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";

const App = () => {
  // State
  const [isOpen, setIsOpen] = useState(false);

  // Handler
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  // Render Product  List
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product}></ProductCard>
  ));

  return (
    <main className="container mx-auto px-11">
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
        <div className="flex gap-2">
          <Button className=" bg-fuchsia-700 hover:bg-fuchsia-800">
            Submit
          </Button>
          <Button onClick={close} className=" bg-gray-200 hover:bg-gray-300">
            Cancel
          </Button>
        </div>
      </Modal>
    </main>
  );
};

export default App;
