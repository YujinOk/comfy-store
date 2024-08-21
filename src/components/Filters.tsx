import { Form, useLoaderData, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { type ProductsResponseWithParams } from "@/utils";
import FormInput from "./FormInput";
const Filters = () => {
  const { meta, params } = useLoaderData() as ProductsResponseWithParams;
  const { search, company, category, shipping, order } = params;
  return (
    <Form className="border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        name="search"
        type="search"
        label="search product"
        defaultValue={search}
      />

      <Button type="submit" size="sm" className="self-end mb-2">
        Search
      </Button>
      <Button type="button" asChild variant="outline" className="self-end mb-2">
        <Link to="/products">Reset</Link>
      </Button>
    </Form>
  );
};
export default Filters;
