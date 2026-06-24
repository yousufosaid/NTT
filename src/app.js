import React from "react";
import "./app.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Packages from "./components/Packages";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Destinations />
        <Packages />
        <Features />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default App;
