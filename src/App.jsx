import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero.jsx";
import Program from "./components/program/program.jsx";
import Title from "./components/Title/Title.jsx";
import About from "./components/about/about.jsx";
import Campos from "./components/compus/campos.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Contact from "./components/contact/contact.jsx";
import Footer from "./components/footer/footer.jsx";
import Vidioplyer from '../src/components/vidioplayer/player.jsx';
// import Slider from "./components/sliders/sliders.jsx";

function App() {

  const [playState, setPlayState] = useState(false)

  return (
    <>
      <Navbar />
      {/* <ContactUs /> */}
      <Hero />
      <About setPlayState={setPlayState} />


      <div className="container">

        <Title subtitle="Ours Events" title="Memories" />
        {/* <Slider /> */}
        {/* <Slider slides={slides} /> */}
        <Title subtitle="Over Services" title="What we Offer" />
        <Program />
        <Title subtitle="Gallery" title="Campus Photos" />
        <Campos />
        <Title subtitle="TESTIMONIALS" title="what students says" />
        <Testimonial />
        <Title subtitle="Con
        tact Us" title="Get In Touch" />
        <Contact />
        <Footer />
        <Vidioplyer playState={playState} setPlayState={setPlayState} />
      </div>
    </>
  );
}

export default App;
