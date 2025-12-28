"use client";
import { useEffect, useRef, useState } from "react";

const LittleCards = ({
  customersNumber,
  foundedNumber,
  locationNumber,
  staffNumber,
}: {
  customersNumber: number;
  locationNumber: number;
  foundedNumber: number;
  staffNumber: number;
}) => {
  const [numbers, setNumbers] = useState({
    locations: 0,
    founded: 0,
    staff: 0,
    customers: 0,
  });

  const [started, setStarted] = useState(false);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!started) return;

    const contNumbers = window.setInterval(() => {
      setNumbers((prev) => ({
        locations:
          prev.locations < locationNumber ? prev.locations + 1 : locationNumber,
        founded:
          prev.founded < foundedNumber ? prev.founded + 50 : foundedNumber,
        customers:
          prev.customers < customersNumber
            ? prev.customers + 1
            : customersNumber,
        staff: prev.staff < staffNumber ? prev.staff + 1 : staffNumber,
      }));
    }, 20);

    return () => clearInterval(contNumbers);
  }, [started, customersNumber, foundedNumber, locationNumber, staffNumber]);

  return (
    <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <Card value={numbers.locations} label="Locations" />
      <Card value={numbers.founded} label="Founded" />
      <Card value={`${numbers.staff.toString()}+`} label="Staff Members" />
      <Card value={`${numbers.customers}%`} label="Satisfied Customers" />
    </div>
  );
};

const Card = ({ value, label }: { value: number | string; label: string }) => (
  <div className="hover-scale hover:bg-neutral-100 w-full md:max-w-73.25 h-42.5 flex flex-col items-center justify-center gap-2 border border-neutral-200 rounded-md shadow-lg">
    <h3 className="font-playfair text-[30px] font-semibold">{value}</h3>
    <p className="font-playfair font-semibold">{label}</p>
  </div>
);

export default LittleCards;
