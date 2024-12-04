import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import SliderImage from "./components/sliderImage";
import FeaturedIn from "./components/featuredIn";
import MeetThePunk from "./components/meetThePunk";
import MeetThePunk2 from "./components/meetThePunk2";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SliderImage />
      <FeaturedIn />
      <MeetThePunk />
      <MeetThePunk2 />
    </div>
  );
};

export default App;
