import Image from "next/Image";
import { ProductDto } from "../../interfaces/product.dto";

type ProductProp = {
  product: ProductDto;
};

export function Product({ product }: ProductProp) {
  const { _id, image_url, name, value } = product;
  return (
    <div className="max-w-sm rounded overflow-hidden hover:border-4">
      <Image
        className="w-full"
        src={`/images/${image_url}`}
        alt="Sunset in the mountains"
        width="360"
        height="360"
      />
      <div className="px-6 py-4">
        <div className="text-orange-500 font-bold text-xl mb-2">{name}</div>
        <p className="text-orange-500 text-base text-center font-medium">
          ${value}
        </p>
      </div>
    </div>
  );
}
