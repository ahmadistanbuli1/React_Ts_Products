import "./App.css";
import ProductCard from "./components/ProductCard";
import { productList } from "./components/data";

const App = () => {
  // Render Product  List
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product}></ProductCard>
  ));

  return (
    <main className="container mx-auto">
      <div className="grid gap-4 m-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {renderProductList}
      </div>
    </main>
  );
};

export default App;
