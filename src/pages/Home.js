import HeroBanner from "../components/HeroBanner";
import Stats from "../components/Stats";
import WhatWeOffer from "../components/WhatWeOffer";
import ProductGallery from "../components/ProductGallery";
import ContactForm from "../components/ContactForm";

function Home() {
    return (
        <>
        <main>
          <HeroBanner />
            <Stats />
            <ProductGallery />
            <WhatWeOffer />
            <ContactForm />
      </main>
        </>
    );
}

export default Home;