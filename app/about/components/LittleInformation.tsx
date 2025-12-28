import Image from "next/image";
import LittleCards from "./LittleCards";

const LittleInformation = () => {
  return (
    <div className="bg-neutral-50 py-30">
      <div className="container flex flex-col md:flex-row  justify-between items-start">
        <div className="w-full md:w-1/2 flex flex-col gap-15 pe-0 md:pe-8">
          <div className="flex flex-col gap-5">
            <h1 className="font-playfair text-[50px] text-center md:text-start">
              A little information for our valuable guest
            </h1>
            <p className="text-[13.5px]">
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
          </div>

          <LittleCards
            customersNumber={65}
            foundedNumber={1995}
            locationNumber={3}
            staffNumber={100}
          />
        </div>
        <div className="w-full md:w-[45%] ps-0 mt-5 md:mt-0 md:ps-5">
          <Image
            alt="little info"
            src={"/assets/little.png"}
            width={555}
            height={480}
            className="w-138.75! h-150!"
          />
        </div>
      </div>
    </div>
  );
};

export default LittleInformation;
