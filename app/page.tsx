import Header from "@/components/header";
import Hero from "./_components/Hero";
import BrowseOurMenu from "./_components/BrowseOurMenu";
import ProvideHealthy from "./_components/ProvideHealthy";
import Events from "./_components/Events";
import FastFood from "./_components/FastFood";
import WhatOurCustomerSays from "./_components/WhatOurCustomerSays";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <BrowseOurMenu />
      <ProvideHealthy />
      <Events />
      <FastFood />
      <WhatOurCustomerSays />
    </main>
  );
}
