import Hero from "./_components/Hero";
import BrowseOurMenu from "./_components/BrowseOurMenu";
import ProvideHealthy from "./_components/ProvideHealthy";
import Events from "./_components/Events";
import FastFood from "./_components/FastFood";
import WhatOurCustomerSays from "./_components/WhatOurCustomerSays";
import OurBlog from "./_components/OurBlog";

export default async function Home() {
  return (
    <main>
      <Hero />
      <BrowseOurMenu />
      <ProvideHealthy />
      <Events />
      <FastFood />
      <WhatOurCustomerSays />
      <OurBlog />
    </main>
  );
}
