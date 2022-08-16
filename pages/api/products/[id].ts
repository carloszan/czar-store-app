import type { NextApiRequest, NextApiResponse } from "next";
import { ProductDto } from "../../../interfaces/product.dto";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductDto>
) {
  const { id } = req.query;

  if (!id) return;

  const sid = id[0];

  const product: ProductDto = {
    _id: sid,
    image_url: "black-hoodie.png",
    name: "Peace Love Bridges - Hoodie",
    value: "39.99",
  };

  res.status(200).json(product);
}
