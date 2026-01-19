import { getMe } from "@/services/user/getMe";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductsTab from "./ProductsTab";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/QueryKeies";
import { getProducts } from "@/services/products/getProducts";
import { getCategories } from "@/services/categories/getCategories";
import CategoriesTab from "./CategoriesTab";
const Dashboard = async () => {
  const profile = await getMe();
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: QUERY_KEYS.PRODUCTS,
    queryFn: getProducts,
  });
  await queryClient.prefetchQuery({
    queryKey: QUERY_KEYS.CATEGORIES,
    queryFn: getCategories,
  });

  return (
    <main className="pt-22 container min-h-screen">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-[44px] italic text-primary mb-10">
          Welcome Back {profile.name}
        </h1>
      </div>

      <div className="flex w-full  flex-col gap-6">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Tabs defaultValue="products" className="w-full">
            <TabsList className="mb-5 w-full flex-col gap-5">
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="categories">Categories</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
            </TabsList>
            <TabsContent value="products">
              <ProductsTab />
            </TabsContent>
            <TabsContent value="categories">
              <CategoriesTab />
            </TabsContent>
            <TabsContent value="users">
              <div>password</div>
            </TabsContent>
          </Tabs>
        </HydrationBoundary>
      </div>
    </main>
  );
};

export default Dashboard;
