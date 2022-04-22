import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () => {
  const data = useContext(ProductsContext);
  const { products } = data;
  return (
    <div className="products-container">
      {products.map(function (product) {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};

export default Shop;
