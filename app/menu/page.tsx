export const metadata = {
  title: "Bistro Bliss | Our Menu",
  description: "Explore our delicious menu and order your favorite dishes.",
};

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import MenuItems from "./MenuItems";
import OrderApps from "./OrderApps";
import { QUERY_KEYS } from "@/constants/QueryKeies";
import { getProducts } from "@/services/products/getProducts";
import { getCategories } from "@/services/categories/getCategories";

const Menu = async () => {
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
    <div className="bg-[url('/assets/bgMenu.jpg')] pt-25! pb-15! px-5 md:px-0! bg-cover bg-center bg-no-repeat">
      <div className="container bg-white shadow-[90px] py-10  rounded-lg">
        <div className="flex flex-col gap-10 ">
          <div className="items-center flex flex-col justify-center gap-3">
            <h1 className="text-[55px] font-playfair ">Our Menu</h1>
            <p className="w-[90%] md:w-1/2 text-center">
              We consider all the drivers of change gives you the components you
              need to change to create a truly happens.
            </p>
            <div className="mt-3 space-y-20 mb-22">
              <HydrationBoundary state={dehydrate(queryClient)}>
                <MenuItems />
              </HydrationBoundary>
              <OrderApps />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
