import { ProductDto } from "../../interfaces/product.dto";
import { Product } from "../product";

type ProductsProps = {
  products: ProductDto[];
};

export function ProductList({ products }: ProductsProps) {
  return (
    <div>
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
}
