import React from "react";
import Hero from "../components/Hero";
import ScrollVelocity from "../components/ScrollVelocity";
import ImageScroller from "../components/ImageScroller";

const LandingPage = () => {
  return (
    <section>
      <Hero />
      <div className="w-full overflow-hidden">
        <ImageScroller
          images={[
            "https://images.unsplash.com/photo-1517849845537-4d257902454a",
            "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
            "https://images.unsplash.com/photo-1507146426996-ef05306b995a",
          ]}
        />
      </div>

      <div className="w-full overflow-hidden">
        <ScrollVelocity
          items={[
            "g7H2m9Pq1X",
            "z3B8nL5vR0",
            "k9J4wT1mY6",
            "pQ2v7N9xZ3",
            "mR5t8L0kC2",
            "fG9h4X7vP1",
            "wS3n6M0kB5",
            "tY1v8P4xQ9",
            "hK0m3N6vR7",
            "bL5v9P1xT3",
          ]}
        />
      </div>
    </section>
  );
};

export default LandingPage;
