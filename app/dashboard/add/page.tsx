import { getCategories } from "@/services/categories/getCategories";
import AddUpdateProductForm from "./AddUpdateProductForm";

const AddProduct = async ({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) => {
  const categories = await getCategories();
  const { id } = await searchParams;
  return (
    <div>
      <AddUpdateProductForm
        productId={id ?? ""}
        categories={categories ?? []}
      />
    </div>
  );
};

export default AddProduct;
