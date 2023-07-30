import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Ministries } from "./components/ministries";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import VideoPlayer from "./components/VideoPlayer/video";
import { Social } from "./components/socials";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import BlogRoute from "./components/route";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Social data={landingPageData.Socials}/>
      <About data={landingPageData.About} />
      <VideoPlayer/>
      <Ministries data={landingPageData.Ministries}/>
      <BlogRoute/>
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
