import Section from "./Section";
import { animate } from "motion";
import "./Hero.scss";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    const controls = animate(
      ".first",
      { opacity: [0, 1], y: [-50, 0], scale: [0.9, 1] },
      { duration: 2, delay: 0.5 }
    );
  }, []);

  return (
    <Section height="100vh" title="Hero">
      <div id="slogan-ctn">
        <h1 className="slogan first">Your Success</h1>
        <h2 className="slogan second">Our Design</h2>
      </div>
    </Section>
  );
}

export default Hero;
