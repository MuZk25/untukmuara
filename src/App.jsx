import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Cards from "./components/Cards";
import ModalVideo from "./components/ModalVideo";
import Footer from "./components/Footer";

export default function App() {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section id="home">
          <Hero onOpenVideo={() => setOpenVideo(true)} />
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <Features />
          </div>
        </section>

        <section id="products" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <Cards />
          </div>
        </section>
      </main>

      <Footer />
      <ModalVideo open={openVideo} onClose={() => setOpenVideo(false)} />
    </div>
  );
}
