import React, { useEffect, useRef } from "react";
import { Flex, Box, GridItem } from "@chakra-ui/react";

interface GlowingCardsProps {
  children?: React.ReactNode;
  colSpan?: (number | null)[];
}

const GlowingCards: React.FC<GlowingCardsProps> = ({ children, colSpan }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const CONFIG = {
    proximity: 40,
    spread: 80,
    blur: 20,
    gap: 32,
    vertical: false,
    opacity: 0,
  };

  const PROXIMITY = 10;

  useEffect(() => {
    const update = (event) => {
      for (const cardRef of cardsRef.current) {
        const CARD_BOUNDS = cardRef.getBoundingClientRect();

        if (
          event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
          event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
          event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          cardRef.style.setProperty("--active", "1");
        } else {
          cardRef.style.setProperty("--active", CONFIG.opacity.toString());
        }

        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ];
        let ANGLE =
          (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) *
            180) /
          Math.PI;
        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;
        cardRef.style.setProperty("--start", (ANGLE + 90).toString());
      }
    };

    if (window.innerWidth > 768) {
      document.body.addEventListener("pointermove", update);
    }

    const restyle = () => {
      const container = containerRef.current;

      if (container) {
        container.style.setProperty("--gap", CONFIG.gap.toString());
        container.style.setProperty("--blur", CONFIG.blur.toString());
        container.style.setProperty("--spread", CONFIG.spread.toString());
        container.style.setProperty(
          "--direction",
          CONFIG.vertical ? "column" : "row"
        );
      }
    };

    restyle();

    return () => {
      document.body.removeEventListener("pointermove", update);
    };
  }, [
    CONFIG.blur,
    CONFIG.gap,
    CONFIG.proximity,
    CONFIG.spread,
    CONFIG.vertical,
    CONFIG.opacity,
  ]);

  return (
    <GridItem
      ref={containerRef}
      className="container"
      display="flex"
      flexDirection={CONFIG.vertical ? "column" : "row"}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={`${CONFIG.gap}px`}
      margin="0 auto"
      position="relative"
      colSpan={colSpan}
    >
      <Box
        ref={(el) => el && cardsRef.current.push(el)}
        className="article"
        height="100%"
        background="var(--card)"
        borderRadius="12px"
        display="flex"
        flexDirection="column"
        gap="0.25rem"
        position="relative"
        _hover={{
          zIndex: 2,
        }}
      >
        <Box
          display={["none", "block"]}
          className="glows"
          position="absolute"
          inset="0"
          filter={`blur(${CONFIG.blur}px)`}
        ></Box>
        <Box
          display={["none", "block"]}
          className="glows"
          position="absolute"
          inset="-5px"
          border="10px solid transparent"
          borderRadius="12px"
          css={{
            mask: `linear-gradient(#0000, #0000), conic-gradient(from calc((var(--start) - (var(--spread) * 0.5)) * 1deg), #000 0deg, #fff, #0000 calc(var(--spread) * 1deg))`,
            maskComposite: "intersect",
            maskClip: "padding-box, border-box",
          }}
          opacity="var(--active)"
          transition="opacity 1s"
        ></Box>
        <Box
          display={["none", "block"]}
          className="glows"
          position="absolute"
          inset="0"
          border={`2px solid transparent`}
          borderRadius="12px"
          background="var(--border)"
          css={{
            mask: `linear-gradient(#0000, #0000), conic-gradient(from calc((var(--start) - (var(--spread) * 0.5)) * 1deg), #0000 0deg, #fff, #0000 calc(var(--spread) * 1deg))`,
            maskComposite: "intersect",
            maskClip: "padding-box, border-box",
          }}
          opacity="var(--active)"
          transition="opacity 1s"
        ></Box>
        <Box
          display={["none", "block"]}
          className="glows"
          position="absolute"
          inset="0"
          border={`2px solid transparent`}
          borderRadius="12px"
          opacity="var(--active, 0)"
          transition="opacity 1s"
          css={{
            mask: `linear-gradient(#0000, #0000), conic-gradient(from calc((var(--start) - (var(--spread) * 0.5)) * 1deg), #0000 0deg, #fff, #0000 calc(var(--spread) * 1deg))`,
            maskComposite: "intersect",
            maskClip: "padding-box, border-box",
          }}
          filter="brightness(1.5)"
        ></Box>
        {children}
      </Box>
    </GridItem>
  );
};

export default GlowingCards;
