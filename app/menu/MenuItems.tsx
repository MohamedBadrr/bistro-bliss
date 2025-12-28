import MenuItem from "./MenuItem";

const MenuItems = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {MENU_ITEMS.map((item) => (
        <MenuItem
          description={item.description}
          id={item.id}
          image={item.image}
          price={item.price}
          title={item.title}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default MenuItems;

export interface MenuItem {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    title: "Fried Eggs",
    price: 9.99,
    description: "Made with eggs, lettuce, salt, oil and other ingredients.",
    image: "/assets/eggMenu.png",
  },
  {
    id: 2,
    title: "Hawaiian Pizza",
    price: 15.99,
    description: "Made with eggs, lettuce, salt, oil and other ingredients.",
    image: "/assets/eggMenu.png",
  },
  {
    id: 3,
    title: "Martinez Cocktail",
    price: 7.25,
    description: "Made with eggs, lettuce, salt, oil and other ingredients.",
    image: "/assets/eggMenu.png",
  },
  {
    id: 4,
    title: "Butterscotch Cake",
    price: 20.99,
    description: "Made with eggs, lettuce, salt, oil and other ingredients.",
    image: "/assets/eggMenu.png",
  },
  {
    id: 5,
    title: "Mint Lemonade",
    price: 5.89,
    description: "Made with eggs, lettuce, salt, oil and other ingredients.",
    image: "/assets/eggMenu.png",
  },
  {
    id: 6,
    title: "Chocolate Icecream",
    price: 18.05,
    description: "Made with eggs, lettuce, salt, oil and other ingredients.",
    image: "/assets/eggMenu.png",
  },
  {
    id: 7,
    title: "Cheese Burger",
    price: 12.55,
    description: "Made with eggs, lettuce, salt, oil and other ingredients.",
    image: "/assets/eggMenu.png",
  },
  {
    id: 8,
    title: "Classic Waffles",
    price: 12.99,
    description: "Made with eggs, lettuce, salt, oil and other ingredients.",
    image: "/assets/eggMenu.png",
  },
];
