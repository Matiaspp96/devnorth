import React, { useEffect, useRef } from "react";

// Definición de un tipo para las propiedades CSS con las propiedades personalizadas
interface CSSPropertiesCustom extends React.CSSProperties {
  "--active"?: string | number;
  "--start"?: string;
}

const MyComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (containerRef.current) {
        const cards = containerRef.current.querySelectorAll("article");

        cards.forEach((card, index) => {
          const cardBounds = card.getBoundingClientRect();

          if (
            event.x > cardBounds.left &&
            event.x < cardBounds.left + cardBounds.width &&
            event.y > cardBounds.top &&
            event.y < cardBounds.top + cardBounds.height
          ) {
            card.style.setProperty("--active", "1");
          } else {
            card.style.setProperty("--active", "0");
          }

          const cardCenter = [
            cardBounds.left + cardBounds.width * 0.5,
            cardBounds.top + cardBounds.height * 0.5,
          ];

          let angle =
            (Math.atan2(event.y - cardCenter[1], event.x - cardCenter[0]) *
              180) /
            Math.PI;
          angle = angle < 0 ? angle + 360 : angle;
          card.style.setProperty("--start", `${angle + 90}deg`);
        });
      }
    };

    document.body.addEventListener("pointermove", handleMouseMove);

    return () => {
      document.body.removeEventListener("pointermove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="container"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "2rem",
        padding: "2rem",
        height: "100vh",
        background: "var(--bg)",
      }}
    >
      {[...Array(2)].map((_, index) => (
        <article
          key={index}
          style={{
            "--active": "0.15",
            "--start": "0",
            height: "100%",
            background: "var(--card)",
            padding: "2rem",
            aspectRatio: "330 / 400",
            borderRadius: "var(--border-radius)",
            minWidth: "280px",
            maxWidth: "280px",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
            position: "relative",
          }}
        >
          <div
            className="glows"
            style={{
              pointerEvents: "none",
              position: "absolute",
              inset: "0",
              filter: "blur(calc(var(--blur) * 1px))",
            }}
          ></div>
        </article>
      ))}
    </div>
  );
};

export default MyComponent;
