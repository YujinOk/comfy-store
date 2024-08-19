import { Hero, FeaturedProducts } from "@/components";
import { type LoaderFunction } from "react-router-dom";
import { customFetch, type ProductsResponse } from "@/utils";

const url = "/products?featured=true";

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);
  return { ...response.data };
};
const Landing = () => {
  // const result = useLoaderData() as ProductsResponse;
  // console.log(result);
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
export default Landing;
