import Image from "next/image";

const Events = () => {
  return (
    <div className=" container py-30 flex gap-15 flex-col ">
      <h2 className="w-full max-w-168.75 font-medium font-playfair text-center md:text-start text-[40px] md:text-[55px]">
        {" "}
        We also offer unique services for your events
      </h2>
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {dataEvents.map((event) => (
          <div
            className="flex flex-col gap-7 hover:scale-105 transition-all duration-300 "
            key={event.title}
          >
            <div>
              <Image
                src={event.imageSrc}
                alt={`${event.title} image`}
                width={206}
                height={120}
                content="all"
                className="w-52.5! h-55! rounded-md!" 
              />
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-semibold">{event.title}</h4>
              <p className="text-[11px] w-50">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
const dataEvents = [
  {
    title: "Caterings",
    description:
      "In the new era of technology we look in the future with certainty for life.",
    imageSrc: "/assets/category.png",
  },
  {
    title: "Birthdays",
    description:
      "In the new era of technology we look in the future with certainty for life.",
    imageSrc: "/assets/brth.jpg",
  },
  {
    title: "Weddings",
    description:
      "In the new era of technology we look in the future with certainty for life.",
    imageSrc: "/assets/weeding.png",
  },
  {
    title: "Events",
    description:
      "In the new era of technology we look in the future with certainty for life.",
    imageSrc: "/assets/events.png",
  },
];
