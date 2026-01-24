import Image from "next/image";
import AddToCardButton from "./AddToCardButton";
import { Product } from "@/types/Product";

const MenuItem = (props: Product) => {
  return (
    <div
      className="border border-neutral-400 w-full 
                  hover:shadow-xl hover:bg-primary hover:text-white 
                  group md:max-w-76.5 rounded-lg
                  transition-all duration-300"
    >
      <Image
        alt="menu image"
        src={props.image ?? "/assets/placholderIamge.jpg"}
        className="w-full! h-66.5! md:h-56.5! rounded-t-lg"
        width={230}
        height={306}
      />
      <div className="flex flex-col items-center justify-center gap-2 px-2">
        <p className="font-bold text-[22px] text-primary group-hover:text-white font-playfair transition-all duration-300 ">
          $ {props.price}
        </p>
        <p className="italic [22px] font-semibold">{props.name}</p>
        <p className="text-[12px] text-center">{props.description}</p>
        <AddToCardButton
          description={props.description}
          id={props.id}
          image={props.image ?? "/assets/placholderIamge.jpg"}
          price={props.price}
          name={props.name}
          key={props.id}
          created_at={props.created_at}
          product_extras={props.product_extras}
          product_sizes={props.product_sizes}
          category_id={props.category_id}
          categories={props.categories}
          updated_at={props.updated_at}
        />
      </div>
    </div>
  );
};

export default MenuItem;
