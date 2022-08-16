import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";
import { ProductDto } from "../../interfaces/product.dto";
import { Product } from "../../ui/product";

export default function Products() {
  const router = useRouter();

  const { id } = router.query;

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR<ProductDto>(`/api/products/${id}`, fetcher);

  if (error) return <div>error</div>;
  if (!data) return <div>loading</div>;

  return (
    <div>
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="container mx-auto flex">
        <Product product={data} />
      </div>
    </div>
  );
}
