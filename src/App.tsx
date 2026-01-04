import "./App.css";
import ProductCard from "./components/ProductCard";

const App = () => {
  return (
    <div>
      <div className="grid gap-2 m-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </div>
  );
};

export default App;
