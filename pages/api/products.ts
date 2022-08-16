// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ProductDto } from "../../interfaces/product.dto";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductDto[]>
) {
  const products: ProductDto[] = [
    {
      _id: "1",
      image_url: "black-hoodie.png",
      name: "Peace Love Bridges - Hoodie",
      value: "39.99",
    },
    {
      _id: "2",
      image_url: "green-hoodie.png",
      name: "Bridges - T-Shirt",
      value: "24.99",
    },
    {
      _id: "3",
      image_url: "beavles.png",
      name: "The Beavles T-Shirt",
      value: "39.99",
    },
    {
      _id: "4",
      image_url: "t-shirt.png",
      name: "Peace Loves Bridges - T-Shirt",
      value: "24.99",
    },
    {
      _id: "5",
      image_url: "black-hoodie.png",
      name: "Peace Love Bridges - Hoodie",
      value: "39.99",
    },
    {
      _id: "6",
      image_url: "green-hoodie.png",
      name: "Bridges - T-Shirt",
      value: "24.99",
    },
    {
      _id: "7",
      image_url: "beavles.png",
      name: "The Beavles T-Shirt",
      value: "39.99",
    },
    {
      _id: "8",
      image_url: "t-shirt.png",
      name: "Peace Loves Bridges - T-Shirt",
      value: "24.99",
    },
  ];
  res.status(200).json(products);
}
