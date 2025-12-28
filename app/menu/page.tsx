import MenuFilters from "./MenuFilters";
import MenuItems from "./MenuItems";
import OrderApps from "./OrderApps";

const Menu = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-10 ">
        <div className="items-center flex flex-col justify-center gap-3">
          <h1 className="text-[55px] font-playfair ">Our Menu</h1>
          <p className="w-1/2 text-center">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
          <div className="mt-3 space-y-20 mb-22">
            <MenuFilters />
            <MenuItems />
            <OrderApps />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
