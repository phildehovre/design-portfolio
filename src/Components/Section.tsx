import { animate, inView } from "motion";
import { useEffect } from "react";

import "./Section.scss";

function Section({
  children,
  title,
  height,
  bgColor,
}: {
  children: React.ReactNode;
  title: string;
  height?: string;
  bgColor?: string;
  width?: string;
}) {
  useEffect(() => {
    inView(".section-ctn", () => {
      animate(
        ".section-title",
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.6 }
      );
    });
  });

  const styles = {
    height: height || "auto",
    backgroundColor: bgColor || "transparent",
  };

  return (
    <section className="section-ctn" style={styles}>
      <h1 className="section-title">{title}</h1>
      {children}
    </section>
  );
}

export default Section;
