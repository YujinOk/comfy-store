import { Filters, ProductsContainer, PaginationContainer } from "@/components";
import {
  customFetch,
  type ProductsResponse,
  type ProductsResponseWithParams,
} from "../utils";
import { type LoaderFunction } from "react-router-dom";

const url = "/products";

export const loader: LoaderFunction = async ({
  request,
}): Promise<ProductsResponseWithParams> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  console.log(params);
  const response = await customFetch<ProductsResponse>(url, {
    params,
  });
  console.log(response);
  return { ...response.data, params };
};
const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
