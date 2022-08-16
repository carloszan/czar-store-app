import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";
import { ProductDto } from "../interfaces/product.dto";
import { ProductList } from "../ui/product-list";

const Home: NextPage = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR<ProductDto[]>("/api/products", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="container mx-auto">
      <Head>
        <title>Czar Store</title>
        <meta name="description" content="Czar Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container columns-4 pt-2 px-2 py-4 space-y-2">
        <ProductList products={data} />
      </div>
    </div>
  );
};

export default Home;
